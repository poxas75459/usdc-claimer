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
    "pRRUyX4yQzesmrDqr1E1MxzvhnA3BQF2Y6U63PHuft91ywM71RGrwGD8WPQDgPEMXF9Xpqvt1wjmdFo75dMhvZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55LHgExMv1tyi4Ucuu3EEUkdmd2a1EFKjiHnRXYiPCaamJd22smPorQwtGiEysN6LT5EiUcXyNDRevmKaAVmApzA",
  "key1": "67mdqkWXD96tYyVjuPuvxXjZ74jWUXKhSBdD42qZo8EjBSKQGYw5fW8E7u48VbenQLtbuqRPQSWZLeW1B7RKkwnJ",
  "key2": "amQCeibyVcbtUH8wp1HJVce2qkAC232gpRJR7B83ZqfEseSp5RkuZtXvd8mQiwAHvKHrTn5aKaE5rmgWDZDrKNL",
  "key3": "4frf9DsdczEDWv7LkUpWDNRMZvdhe7SSdYVWT8yn3DNDaiAayaJVuem24Bw2reYkCMTzNEaZCY5aFj3ELxSjZH8m",
  "key4": "4RW7nDYxswzKBGghZ1hNEZ4vzPdXdUNjfiKGUxMfEm1FgsNgJoS1VamE2VHPBiBuWWhGWo7Pn3XTitBvncVniDgc",
  "key5": "4TuXnGdwzgLjRJbCQ2WtcJYYXZbefKnpdm38DBHr8AE5jBq72EDJsn3eYZXTNPdFjcEEyH2o2Ze6b6Fwkw1BNLcK",
  "key6": "89sw9UeB1aJXQSEUebvCQAsSC58KLPpoBgGgGX5nAz6wqfsrSpJWpeadEwev7qEHiSCp9tvnwcp1GeUkAVCLAqG",
  "key7": "BAhvf8tZTH56x3pykrUdd7FYtxsvPR3mVWDk9rJux1YSHRhrEdzjM3ZtqCT1v786GQyHUA2VxJ3n9yB776qY1iX",
  "key8": "2AQSHmczbcXWCaF8HCHF96Ca2n1Svc2nYN36QyjufSEWCzqtUmDP87bF7orHocqArKQtKuEiAvKwghwpVJPZvfQt",
  "key9": "ovsFfEdwpw2U2yMqhFirsc7DSdTbiU6DugHsgcgXJXRrG64BkZ5rFb8uLi45RPhVLxQNT9qUdrmq6z7caneiDys",
  "key10": "5d5kiFQFp8dZ7wYw4ap5en6uSxnYTi5upgJPx3Y2fdsHGsu8fYxMdABkF4s58MMLXHe4Cwzc8F9rx4stso2HhwLk",
  "key11": "411K6thrE8MXQvEint2oizktNPeNBbYchhXUof7dB39RYbyEtDNDnteZcmPPiEdETynMRfAftw7m9ENyNrgy3sqD",
  "key12": "23PWpdXca8gv3DYsdjfUTR3otHaDAcvmBxqo89khSzZX9pTfM9GHL46vLN923ojZAaUNXQGc77fPb29d6mBJgDg9",
  "key13": "S496BpfSzcGs1kKpFMKD5dgLS5USSrGwALt1kyLtFAh38YA2EbwvYurqHoWcYsHZwUi7NF66goJte2JpCb8sS1i",
  "key14": "3CmpTVWdYycmp1bK5Y8NKiPbmmeesVcReK2Xta4M2uEsUxGVmBT87YP2FdGtJYNDNjUZcarKMaBDzAtzFm8Jy3hC",
  "key15": "4xtQzCY1DJAfBhWr9UeLr5eivkMVwTxzqqXXys8EBdbkgB6PXje5t2MZzCHPF38tbo1CSbV5fXeqidv7Csud2iyr",
  "key16": "5GBCuj4y13z2UwYpyDuBtVFA6vLm3nED4ceVn9akvcZoFsKVJZCsuMnuMsxj13xoGegsTVkmdxNHyoDFG811MULB",
  "key17": "3FkhGVxvbRXWw2ydaNifQLnNMDyLKN9EZr4hoGxJ9oyDSKQZ7wAg6FVSFfrpTkmSc73Th32qzdcfTZaqjr6r18Ds",
  "key18": "3BfUuEay6b6fS55YNMuqAo9hSfQNWaMYqSrSyf2av2CnYzKYQw1ZAurx3qtKCcY1gxuSjNA7iaa9gzTaDpXNAXiR",
  "key19": "5eVPnUL8fGeVNgPWyFdFsEzu6gvurf1C5diT5PgntD3NVwVBhhzgnuD7oTJzoo5VioTzAnuZ4Y96eJu1Ara9U744",
  "key20": "3wSRNok1u7U4owvTfXMbRD7KQCYNTqGdQfZWJh7oCsY1tLAASbxmGQxzsLYuUNjLaLBsUqYUZbmkJwXMvihg157U",
  "key21": "29tyRJmjGJeSCko9Ld48Cuap6rF3aEMT1gkhUdiTa5Eqqr3fZ8UbszKzJn38ogsJce1K6WogtwRBX9pNfqerHbBF",
  "key22": "36RSCt6Mmj63WG7RSnBriHkVXEKnvvP8ZgCKHoTQ2nNyYSA9ayb1HHyHvbkvK6FLXtjkG27yVtLnizDArJ3AHSvB",
  "key23": "2UQfbbwpAJb38L1ErW9ff8Nz4rb6W2p1MqVbkLQ3w2nFZEzDYSryueqSJ1p7kfejcUxuAnZGpfioPRUqWBUAqqU3",
  "key24": "5Lbomvd1Fwrg27aVBmdDerynDE8J1uJMToUJXA9xQccswCw6EphrQzUydooUFhAxG4EZmSkEcxfR5pXXrC5Jin4K",
  "key25": "4MivmyW5bCd8gTY5429hX7bfHkqahj7uBDNRKwJYbgLjiCsFmkPmC6FbiCYsGZC37xzVpugn95WRgtVxrSdGBtd",
  "key26": "24exZNtpkGiD9PEBfprHpQ2nTkpbP8fEp42Ng1N8utwNtkwhgZryPbU1BgsRUWhbJF2xt979qQMwHRDLCzp4BASc",
  "key27": "2EoGrxHKboGxqj4EE4dSHwgTZicTbvZkqkx6Bu6YGC7k1uDVMCBs6FK6M63vPvaK8BCiYGfxjSPN99xV8kvYHd5h",
  "key28": "56V1W95MPNBcAekojCfhrJPjACGH9UW8scZcRBYgtPdSs5HRebL87xbymEevqLf3efGg9r3EDi2kggyS2YP1DRXa",
  "key29": "zSBWVfemgEz3gq9VF7zu67ZZWs5X3bYcVRgjWQngPU5R7kiN1iviiXYoYe9jm7Q1zQu23zN2yXBuSr4oNXPPMGL",
  "key30": "5aWZs18KWMH5R9oUWizri6VNWn2c7PbAqkPcmfsDj5pz7RR3zLvR2Le2M2rx3mrp9toXt3KNyNCkTEosugLcjD6L",
  "key31": "2uYMjWJ4P6U5Zn2FUzEKqkxW2vtMWu1siDHuhZjX7EgwPJ8zxoCHqGd1NWuZNZXkBiut4byv9bW3qiBY9nncpxk9",
  "key32": "374Ca7PkNGearwNxArpAaxWJGRtzwBRNoxNXPx6fdR7Mdd8m8yMJBEFUZaxVTBN2SaCJknn86ifzDXchSYnz5HPj",
  "key33": "5ReBcypXkqyPAkQY4CpmuAQoPPJ3b1sJLGdsis6BesJ3DsbG8DJdsV5p45xc7DPYXr6Nyf6d7mchREtBFMGEYtm7",
  "key34": "4rSYbxhkX3M1ndFHGmwoYfBbNJJncm5yhhURdWQxoRZrThmorcwRbVCa6gnNRW7m6EiLRBbqjkaVcsjYWUex1KaF",
  "key35": "32AXoRDUZgNe8fFxS9q3Am1NzRjV4E1DA5f3emAvjJiJhjUHW1ns2n9VxQvxk8LPX53BiHHBFT8FTkXbC4sB67q2",
  "key36": "2dtBnbu4H6UpJVQmqDxz4NZ5iyabCP4QNz9qL4s8tPdZgeis2c1LdAQV7cUyAQxvmg2zMiT522vSZSBmTXhxhwPo",
  "key37": "4WQq9PqDpW7zv5Wa4i8WuwnmnuwEESdQhJCQXeTF6TH1yTddAAdoKwEx6AjKBr9zgWt7xz3V1gdqTbX11JzwmKHT",
  "key38": "fkGPxGqJuEqKVAWvrkP9eYCkaKytHSRULHR2J4BMbqQuhC7M4yhDjMYr3czTM69yTtNmQaN1ymL1wwyuteZa5VQ",
  "key39": "8pngWGqtLBpd3Mx7mbZuK8nQJmVjeiBsameZoV9SqrX8vkGDgjoEHgXcRzeAkXUyn2DLTuPi6ixEzPyZ67djXnf",
  "key40": "4fEBkghhxEFK9qamZHCw2PQ4jJjWr3AmWc4fXKFWHJnUgKiXnSmYXw447pFgoaJp8wgwQqG1mPAs2JS3zuYCspv4",
  "key41": "3E8HfsGp5kdzpjUEMEVMcEadS7zNeAnkCrTt4U25ydgUswHTactSCtGqoxCsepqTDqyKRG8Y4BauT95VZkBvxJC7",
  "key42": "5gm16tZuw8i4rkJGp2ejiktkdywYNpYzUugzNkiuD3TN2vmDPM3RP1TVSYLKDCvnWAQV9wAWNYqeS43fqQCjkqXS",
  "key43": "2uv8tRxU9tj2eqyKAKaQSdCVt7exnUqKdx4zCH1qvc3oxjXizNA4dWgXEgNQAugYgsyBXytkY8YwgxmCZqF2W4uY",
  "key44": "2JLpYWmhZqFZQm7kvq7hARDp85cmEiWtEBxXky11N2f315Jqs2gkvXJ8tsGjUmZPR6LKtUg9K6uUTooqytHr9mjz",
  "key45": "uE1rXFdFZnrPQACqqLKoaHWyvuPJmC1mRG67bw1cC4MY2GmgzgeCKC2oefN1MLcgawZdzuhsNGd5ASZyGwYs4Ua",
  "key46": "2VbnVH2oFKe68C95yi5AXaFXR2AGf2TwZ38vtqUS6tAW2aTzADVj9QwBMt1h4xjSxjXtBXXLB5vsQb7JhnuvJVDp",
  "key47": "3vu2VEvbDkUKecH2FbWnhmHM3KjG3XTuj3hKUqrYufwwPLVUb26p3ty97EMHvjx5AJLsFYXd4Ni8R6hAM4phwT8L"
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
