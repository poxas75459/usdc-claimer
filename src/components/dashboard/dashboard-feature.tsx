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
    "3ZBSD8MtBF7oNpuqaBarSZuxZMMkULqeoyJdASkbaSUEqcrkjemC4b6b7UtrdYSJdJ55jasvby6ANzJbpdxUHN82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FydADoWrYhHYRjDyPU1GJMevwTxg4jaXFpBsoSEqiNDuNuBMrv7bwybAbD3dsjT6zYitEUaPPrkENExT7FkNmU8",
  "key1": "2axH6DeZUGD9i2xvjyhiXWXdrjm2pDAWfrUH6tuHn9SAr8Z5XYeCsPQfj3SHeZHEgLXWJiMtRb6TWmECbwcQ5oKZ",
  "key2": "57GPmAK1az8UFVvhAJG1Qxr14JrQ3WkkMjo9JD1D6u8yoMiGr5vANYPm2YVXSEyzxXqxhNzC6Y4o4M3vt4uTvuPG",
  "key3": "3SLSfPaTBNzM6BabvPAD2atvyTi8BoJy9cJnBAGq6ho4Ex9e3sDaS5xygBRVYadV338hTLY6dZk4vcEVsu9Q7xJt",
  "key4": "2DcBVcrfMA3gKtAiGGkRRzhEseaR2NrWvSzLiTQzm2iLqCCKUugmA8o48GHNzNSo9F4PJtoCLoNuFBBKWYnDn8qE",
  "key5": "36ABNPde837Zs1hMtGpahGH7aNUxiKtEtAr6Z3tZSXqCHedGPUXdHLRm4mevgxHFzK1if2EYCvpYBc3B92DmiADj",
  "key6": "3kFPSwAqtgSejsVq3EMcbFRLy4Jg6K1KujYqhJjPMT9DdpGCvpwe6aqHjWCBysrhHjKVbkvpiyyQxqGVkZzUFaHm",
  "key7": "29LmVMMzK3GjJUPRjTmU8VhWHtPKbR4Sm9Y3ZRMQJf4c3T9Hkzygv3bLNyurQdLr8NjuUyzshpMh2R6ZFaqPPFNc",
  "key8": "5YK2tffaYQnCbB6FXMqL6Q8gwXb1Dj3v2gipCood29enNdDrEVfXCFcr47fqKMbbS2aAtVwBnW8Jtg4fXMizU1Qq",
  "key9": "3s1sdWCn9WJXoqYAQcvpmXv3ZkYhpFBU7cRnvpXRDtMhT7MpBuGq7kenTuWf3jqu6pPsK8NuST2WEXmn8cPcGUBt",
  "key10": "4XHFdsdnqhdarPgNxaGWzxCLhE7mYsJmdnw3EjZQbKYT3RVWGGiApjAfJu3wUSYb5GEk3wjWZpzEUhkxSUaoaPwu",
  "key11": "4YWNCdtEHMXBKd3mjWyEHtTfxr5fk6hz67aAb6pKY6p5vG7xfxb32cvGccbo8cwnigxHGrbcpQz7wPzMtS3M6GYj",
  "key12": "2SooFAvLDsdCbLp2sZ2jm8h9gKomqCnW8NBXdohtPmn6RWWEsrwm5XzbdsMSq7BzkYSYxgPr7i12Gr1ZdYELpSHC",
  "key13": "oCs24YdqgnBHjvmrd2gBPeKCXyWGeNHdUXTSCGyNyGSYCWpZ1EZE8uScMi9zT3HfEUVu3BQkWLUP1t1GCHnALD1",
  "key14": "vgpC8AUPknUbbAtweQjZwDHDpCX2r97XYGpGNzvJ3XRijPWMcgKizZMgmxu5ZHTipgzDkFMm5h2d1TdUPiv615Q",
  "key15": "4d1uhTuJHnQPDMbCTmvWhLc5zqNgBnoJJdUpcaSGDVk7uM6AmWcoy3DZsWGY6caXD3VKoLskjmGuWcdt6q27PXu8",
  "key16": "aQfkt7ZZQ4KDVqugn5E9M3xAWaEqTvk5xEXxWa5rvafXWP3are1VggSupcfHLEiXBCwvv8WUSA1pVHfidygRdc3",
  "key17": "3B1NMcKfDFXu317286bqmauoo5M9cMm8AstLsp2QXvNcE4DAsnyWAi5FZ43nhRg7HBcBAtRoQC8f7KPogyXn1siE",
  "key18": "3FMPX3jN44kPx9XAfLrRo5VkcD8StjUuH1dn4R6omRoV9aEaxLbVot1TMt5C7qqofAUcNAmXVa622FQxs4kcqoKy",
  "key19": "5vTVAL46HZ4Mju4Cp4sYneJaHhBcs9PyV8oCbXKQpSpzSCocxsPPxXXLD84gjNa5TZCCtrQvqCVkmwY7B7uBootZ",
  "key20": "5WiDoxNQgVidhkHkW1VS7tCrGGPbgoCpKA7aXB3ahXgdkiQrMJ6znBrnW2s17gxiJVXyJAjnRYDjWFCAHvVjCMvX",
  "key21": "55uKkPvhXyr38RsjPGQFr7yDmio4ZyXcNhGNfMPvVQ9Xdd9bC8VC5Rr8HBxE29PPRP19Wh3dmcGxwGWm9q3NvWwH",
  "key22": "3PkydrpsSSuf8ESG4CT7Lbdx7ByBhaw1VRCreWfSRjdnWqJkHBDcTDnHg1GBCb7gcggK2ryCquvZPoHXF3BdakTP",
  "key23": "3s2RmU5gRwYyMbsCjjEHDheWBHkszvsLYzXgHb615apcLxH3um4bcvhqDqjrQKbqEthkx8VMPa8mtpHCZq9Eq42w",
  "key24": "3N2dyEDWjvsyeDhqjXbftywziqZxbmdQQxrtq9VEePCFeHXSnBuyrVa8VmBrkGjiyRwc4waUoUQFJgpfgqj8RuC3",
  "key25": "2HVwwEDgCKKfrRVcnm9JymAxdAUWbcws6dkHfvQsz8o8xk2VRXrBX249sX7Tp5X4fBXnpqnHrbP7ChqM1pCvdqVS",
  "key26": "FkvuYzKDSM8BETxYqm9xzaTy94K7hzRpAnpad7ky4iRTWgMhY3VHsVhPrFH6ia4vZQUdWyqtkdwhhsjtEsV19rh",
  "key27": "3dtGYSQURPkzX9UwQs7EKvCiR2EberQtkQHSN9fgswpPKb5gPGNJWWmUtJgs7ZuaKQYfQYg7qGMzbDUZeaYkLfBm",
  "key28": "oVHiHrXptav28UwkDXmv2d4EDZUnGY3qTrzyxz3AD9FQVyEXqwpuyU1ckBgU64iM78AjqwKHiwNCsycWAtLhzGS"
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
