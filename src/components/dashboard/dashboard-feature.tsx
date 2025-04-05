/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3y9SzT5gf9GxDBzFtft4oC7DEzMq4syjQWdA1iB4AniZAEacbAgiX11uhMj4X1gKk7touL6X6JC1dmEqZJTFVHpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NmKCjZYkdY1B1r1ZvqtXNvVZJm3nXbuq6TPaUYzYg9srAsnwQZiYePgcAAGkgy4daEaLcPJpdwgAyNMa1UYF3c",
  "key1": "3JZuzobtY4LqEKndi6PUQcV4QJE1fVh7r8MMfPer8vNi4DfB4hEBGCsDdtzrfoXCEsNcGbPCRT2Hp3iJxqAokUUq",
  "key2": "4T6GcqhA4VgEFu6Ki2o47DWUs8tCTKFfgBzFRNeRdNxPJTMAcva1WcfGwS1zSFhfVuY31d4RwtZLz6WWJQH9B8kq",
  "key3": "2PUP1U5oJAAW6LTta8Wqy3vqmQEYoCFQQmNUd49DFULbiCUSzV8SRiGSYCzN7tzEDVdrU3HVDtXSV7Ctuzx9D2zc",
  "key4": "5uvPTY8j6b5826pnWSct76AWejtbFME31FLDJ9bTq8RyLgUJcjuFyMbCBxDtXmGweoKpjJpT58DRkwEWKgZPG1LZ",
  "key5": "2srh7V4s4NYwcLcuGj4DmdHi2qvbEPB3nBJi32XrotBYFUFvvR6pB2c1PhcKQCg1jpJVEJdB1xrTvPvkMtMfVkVE",
  "key6": "jHW8g7Y7bucVJArRFLuoLMpdCZUhJZSU9wotSKVU8TB88x9UKWfdhpchPQCG4SrfwrZRKnJ8JiVSXBYADUYKbSi",
  "key7": "3STjkoA5D91rfa1AVWbmPwtQgvojQSqz1AS5u1kASSGzK8PWjZ2YpFcXfXJ8kzZB5CTZAUFS1qNyxKwZcbzXrCWe",
  "key8": "4GSyd7kzZ2zxYcLVUgrhEgFY6hXwzmTMJfU45qH49ZEUN7hXQWVLdW4DTNQs1aTUuqAr7iVZsNL3ofoJDfwEG2Yu",
  "key9": "4TutT3UEw55JuD8rwRv9prPLSXnxC89iuPPnUbUPa232Waov3MATRHskenaBH6DoUYHRzCYT7GMEGLqiM6tdgbaF",
  "key10": "5z5m7Yv7WyxrR5jXDL1yRnD3ZFofWqwN527zE8SAiLgGgAZinpjudvmMFgSoWqKSoVUBsgqQ3wnGaakZCSujudY",
  "key11": "3Pgv6APk2MTQiC3iFEDctuAiJnhPydmHnGeJANW9GxLZjpoXgFH5v2YMEBLLQiy1aYJhDY4buMom1rSf42BYXBi5",
  "key12": "5XXrqEnnzcVVfwDsYjm6wrPDRhcd4nBanr83Q5z9G358KpoNU27TsbP9dTy1KcnVjKrjH9YTtp1L8rMenmCPx5BA",
  "key13": "4zMSH8iUmu6QTu2tZmRe8JaMCgwyGC7g9nr2pG6M5q9E6yeivJWcGYfCnQjzKxpcgzcZdQH3XDtMs8Dmu8HWwieE",
  "key14": "51Y1L43TZJyGJpSsRQnEjLwJgYYv8Y3w6M27n7HskeQvgHzuiB9eMABxHw3NpgCXpSyHhVQQRU4tmW5DwREUVr2Y",
  "key15": "5G9AkCxKwuvh3o6zWqNHBWLh7LoGm1bK462k5NMbWY3UFtPu5vqgPyvGkKjZjWfEiVMABgaRmFXDQtsT4cioTcM2",
  "key16": "3BJYp6sNrAwYJyCRfU9bvZ5tLQFbeiJG686chZYHXXdnBuox2CcybJw77Y4N8tnwkZqjhngdRUhaRCKmsncs57SM",
  "key17": "BL217hENcNxSzNxVF7GpA9jjnQXLpEXtvy6Ndhv3jU9f6YjMNDihKWtB2Xda3vZ7xrJvX7TLWuTMU54gi3EaJR8",
  "key18": "4cpQ45jBeoZte6mkfnLj7WyhPHGQh8RdBBAKwVLF1Av6bWFUvuz5gZDvYUpjFZAZwxReSvzmeGcgkdzBkeMNSQo2",
  "key19": "3EmzdSVqigqXvwjbkxQdBxEmNm94K1J5YL9D5RkB5cYFc1YeVPCMH6oCVWNJRx2F3MpUb7KTesiVFZt2r3BSoxyu",
  "key20": "5gXK2thVFgt2jrVipoHCuo14qPwkwfyJiaKyjGbmYzdgMY3wiVr2e2iS26DodGriiG3KrE3qEyTsBp7FCED8M5YF",
  "key21": "3yA2tADLSAGNirNVuZ6Sk8KWD1Mo2zpntZDeznyfDySnNYyysQm2F9KZ8T1bKth8a6FgoC6n6JdSBHBAkE6ekTXg",
  "key22": "3v7znVaLS3srPcQTXwavotiz6brp6v6mmETjhbD7FUL4cdPNqTDNSRMcEGvZcUHPDC4ugT57bsrd2NZf8gudvLvs",
  "key23": "8E4dAQ2p9ripj2Xxm3gbq3qfG6Wg4CaEYuWe9gbq2weeYwYP7MG6gwimdjdVhEnSj9SyRhWB1E5r1ip2EGYNa4m",
  "key24": "5XX2jiH3QzSVJaVXSXezyYcu4nvXhdohEE6fqS5jS76FKeMEEMZrRXmmHWV7t59U8NJjENuzLJaaJ7zDci6CurLE",
  "key25": "3vDkjSfQk3MgC1gMikM427FtgVdS3QaHvA57Ejrmgrz9b18fv15x275nuqej9yQeQHdyVA7XForr7mdYzpDsDDka",
  "key26": "fAo8mND96eztzv2YBs3wpKMhzY4RAUuDQxP86AgUWRrkFPanNQL48sqXRfZfohKLvacPn6jzV5mJzQdzT8S2wQk",
  "key27": "5SiKCVcYANMXf12t9vJbXiwdiPvLseGafAVTrFNaKRkgTFwhCSDxt4LF4dWUkU3AvQ8kMmo5XD2sdnG5rZyjYbcs",
  "key28": "2TShUi2xgWQvspZg3fGfufHbikckyzpqBxjLTpd5tJG6hMDaGYa4wHLpuBFQS2rZffecaFq6zTAbSaZydosEcuTp",
  "key29": "CBkgwxJo5HZaXSZgAtKwSHjCjBbKz4DmNpUyrrdTBzNSju5PM4obgVitSZ7UursyeuZ1EYFugmiXC2wRr7wypV6",
  "key30": "38acr8oFkrcHQJuY5KBaEMfpiN7mfYqhc43P7QFhYTRL7UDa9WeP3CgMEkiYcKEVBjXxC9v6kHYmN8wcpx5ELpph",
  "key31": "BQPDr9yFxN2C4G8R3rvmrqpDvY4ndR8Hm2i5GZeb9qo46PD3Vmxci4gqndLcHvv2PDZQmSXtnzbduc2wR4J7HKV",
  "key32": "2H9yRhPvofCKrMrncoPuDAzfVwXXgL46m1VvKTTChdz6D9nYPGCegM3UiwKYf6J7ZrUwBuLuuNXttrzXc3knqoqt",
  "key33": "3zH53q6f2AULJieuZMfKmzyTLtGNJg8eCUXECDFYE9bmZMKazxeD5UKG3QHXsYH1JsVGZUc8exQ8iRAZTGwEVnYf",
  "key34": "4nQb6TzpJyHMBUm3nhz8BcbPKyXdMusXQSuWzqDfr8kdXzupoxzJH4RMRDM7zLxinwX7KeFp2FPjLAGGnnrGt9dE",
  "key35": "3igEkYKzci3W8ymqusroN4uZ4SW7GtEdtBXSnSzxoXjF3zhJXivBoqqRbgmcPo2d6WPK2Lx1wQbkS6yTfAgRKQ7m",
  "key36": "BFFNZ2FL1oDXZnr7Cjtwt6wREkuW5WWUMSp2P2X6oBprFTwTperDjutGfgxuxN9Rqb1wvt8tjARqkyXJHVXJrDW",
  "key37": "66EL32pjYhR98ERwRo3NMjJzQAaxwQLv8XzAu61oa2mrKYf7qDGxJM3C2DcYDF1bqoZoSGZYAP4NWsXx4Jh4C9jK",
  "key38": "5Lh84jDJ78WuH6TqYGA64FzUuFSfCYXUZUXGpt6Hunea3zMRV9XzNLQHD7PqCGLZB1iKcNnbDjXaXt18XmJ1U8nW",
  "key39": "2J8BSuEdnDcMmtU7w7Da9oGggKyVDv66zKcjpVgaMp8kRpyr7fAsAztXP7uzavXgPESnHXeqa35FKNM5YvNXJbGu",
  "key40": "5fEm8EH92eFPHMMJZrxNtyao7emmSnuLW5aew6gX9KeQNCSiQh6GWPEB33knmfDwgoBr1qqEPfHNRKBd7qzvTS7A",
  "key41": "5kcYcS4vxKMxRkaSjwDJwVJVgKA7qZ6DJVufPSo6ij2RkTW6iBVo4oXvzFowVvCsaYarvwqiXQVXZo74kRzm7ukr",
  "key42": "C4vMUDj1fuwFsCRJoxEtu8ZZ5pwpLy7GmpXNotnfHcGXEMjqAYaisKq85M2C6LJ2fdEas4jpVfM7NbG7oY5iptu",
  "key43": "L6rpSbAu21MiLwgLCZ295Ag4Nd3US3xhBfsZyT2ZC8bmYjhLfaXTwGQ5oHVwBb4d1LDaghCccU4h82GCFunm94D",
  "key44": "5Ki97z6PQfbdbpFoBTV9LUnnrR8Txba7BSKe3TuhoLeDWJgqEGA8bkfAKBCoBm3GaCoQhAWykmEWeBFFX8T8KpjU",
  "key45": "24WfKyzyqfKSxer9YKe13M4vCAAc9hTq9MXKKaPDDkMjjKAdxfw7RCKZ1LwQRqPEEqVU7rkrr5nXELTFg2ngMKq6",
  "key46": "2woU3QkX5MpWZXDUd4cPzjrRyFR9nDSFkoYL4a2q5k4zp46kG6jV17MP8EKTxjqFReBFZ4hxibuqcLqE73R2LKMm",
  "key47": "5Hj8Aje4v4vmB5cqZWZCzRis1Toz26C6TA7M4f9sz9JJdmW6UcrwKQoyzqxUpdupXbBHqRKPYsq7FAmjL6pwAp7S"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
