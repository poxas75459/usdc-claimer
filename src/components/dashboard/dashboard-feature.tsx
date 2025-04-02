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
    "4HebXBUtAW33zKy12y7PLkEgckZLSqBTrQehE2dcUzefre7nVwyLcCT2Ti7v9B4XJvkgdwDmPLRo7bHkQbJnfdyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGGZXGAFLXtVLDVGj6DVGe6uZkgdLwif2s7cJS14mYFNXvwtj44eU4TnsNJcUMgUE5v9Yiz15EWtjs9jPiKa8UF",
  "key1": "5iZN3fCm99rVWFksscwCHeF1fQzt3GQ39XDyumC2ak2uDwkYSiqjQ1pVCxfHyDDRvbWYnHG4v6xzThT39E9tqedj",
  "key2": "2kEXbkYuhZFGraA3rfqQbdMcLEkPwAN7SVpW5dcbtoavL4ns6ZXQWVCZWEvjA9MLUWDAhh1mK1cXi3owypmZZVeH",
  "key3": "5RbF93aLuUdXxnGUtgYWxHvjuvVuKt23FS7WCzyWp8JU4iab8XXZRXFyvBRcmmL3vqgKRUr1tUDSduY8Kw3GQ8LB",
  "key4": "4TP3kRutAeqnHyN8XZdxvr9Aorrh7tjg79Lg5XLcF5QENdFHYBZQqkm73YxED4sV9qpYmowhamMBhxrymTt4AtZT",
  "key5": "5b7v38kCjE4arHgbQ8DLGjEkAXqwymgQ46BvKb8RDwGHErPxBgssWLJjUm9p5qLJNjuR1EwMidkbMrJvLzRNFjcP",
  "key6": "2NGH1HR2v9R3RpCdTnbT4gcgepnsgBFtLvhqx8oTvgA8rKtSx7aXeSGVLNBfDNuJjFNJvtSE4icUwiGncLxQD7ZH",
  "key7": "3jFeHBp8CuQ8EzLjNtyzJwS2vkDkE1BRTnTfa7nuUyNf9pAKb7XByVgnq4DntNgC5wHWsGqadjs3GrasnHyYM7ZA",
  "key8": "65pHAesU7fWusTXY4gmot1q1NtdMJugC4cEk2YVeergnLfuJ1JrZRLoRQSVEt7irAcWnjwTWdZ8HYs4ihDKoKhoe",
  "key9": "24ZmrzqCgyke8dKy4zbGdviLrNqiyH2pjhztAu6EC6XdRoVsyLCXBT6tyfx1Z21HFFT9diBaeu66vQHASyE2ULeZ",
  "key10": "2Litf49j1nYudgwQpn3pcg3aqn5Mqx42RDZfCvFidquKFHX8mmi2RdoDNhHunM4MAXQeJU1SwSQdKxGe2XcbjVdz",
  "key11": "K3GXg7XzKGjxsh4UntM5XmqmQzZSBsq9cu74yHsbrDsab8tZaLZJd52z3cTZ7GUgXNLp2xp2KrVaKNxh8Ay6cMs",
  "key12": "3XirBDM5555WVHG8KCtKeUuBmBxukew1sYMYfskTxZ88X1zSUqxBBDWJsZ8RK7noa4ES8KJ8vGR2Mc8VSsCBLEXa",
  "key13": "4xb7iSnCiBwWZ4dRFTzMZzUNTvzSFJjYkpA9xtz1iBTNUfwu3Rd9EBizemwJxn2rCAkd4AFQdkhZ2yYJEFUrkNe",
  "key14": "497gBtsYTi7VKDJ7YDX2o8tGKHAcnFHYPnnkpegVXT8D8iWkAyb2XAtpyVexaLH4th5k6ahBTquiyuZknV57K6NS",
  "key15": "2bGUJwEs5LXqq5sMU6UMVhqpV4EMjwW64bR4i7UsgGLmgJQDVMPwFdLmiAQ6VB9B9Y13fQEhErDdXjSdRDmtDAK2",
  "key16": "3UfEozEy8Dy3CRVeaVqH2KBYuJ9dKqMfNi2ozXUwPsTdjwCwdAU5DiQ3aWnzNfYhV1B4t7wSsoiLE63oiCun8ZdH",
  "key17": "YpT7sygBjjVPCcvmcdRHH6imfe98ZP5csPkfUK3qXC1gfwQY5tkhLc78AFyD7U8oDdJkFZHSiYboXwsZCR5nqcT",
  "key18": "8Auv4CZ3mEi3bcAFzvrFRNGGQdCfcX7BVdMV5RC1YM1rNA2fHsiohZaLypGmzF3xDmSLHy5bNPT5kgo3Tud43QU",
  "key19": "tFajVbQdPuUiYuT8GaUQ7bW7w6NJH2QJKiYSMy79TdybWBapSW2jSBdqvR46CmBnDFNB8q29mHxX96pjw5R2VsR",
  "key20": "2pm22u4eHpp8pUCXC4rnpMJ65FdsMvrJ8izhN9tiuM8XeCUkNhxXT5gLEFWQBqrpPrd9pM21xenKAbN688KFvryB",
  "key21": "3xFh2KvLrg2asd8ixVujkM7sjN8zjdqKRiSkjyAU8wu24woTeiVKKsHYvT4TfteSpxyQsuiJ6kvjKctaPxDvoXAZ",
  "key22": "5ftDqRgwUrdLMNtZhW7cpZvW9HUDCLXhN1pdMu91PJYkjLMjQhgEKwg59NJcsVSyMNiTL1nPGnLuamQp2HVXM8L6",
  "key23": "5yRQxmWfrTDYFRAZVQxXEZiPy3HbiVGL9b5xvDcy1mUuckL7RseXUQytWN2bNvr2XLfkHMVV5hovoE2a9KLs1tx8",
  "key24": "4ngyUhQXVqs8CyjLuaGaxPtw2g6aNKSx65TQX7po8CcEqrCXQrfziLwNiEWfeuzBiVjjumt2e2SJNA6z175MHoLJ",
  "key25": "aPvnj1CevPjfFbvaAa1aKT6r9QPYcz8R5A6Ntw9QeEHjedZ5PbR9DmdTF82qLaEYB5MpuXmh3fvnzbLB73UGeks",
  "key26": "2oQkTbuJsUmKRYArN8XCA8fUHjznFm6Diz71RkZ8a7cs5M4ZMLHXuxE7r9nvpEAgHY1ynNcVJm7nsUt1Vi4Z5EcD",
  "key27": "5dDiKq8ufpCQfE8MP3TnWPvG1HPq1zADjGtJmkiBoj5826yEQrqhwpKgEcynKAB3HbLRADH1omNtVkQGbJSge1go",
  "key28": "5ijHanwsWWeqTmnLW57awhGq6FpG98SzQBGndLzVPrmp1gWARoV3pp2oNr75829o1jdxH2mwGB2yP9zp2HD4fqPz",
  "key29": "2wP6GbtgaqV8giAW3GHX9mLQmuKAmG5VdFXypYBF39qbYojEDJze3xbfERaQaUPMu73V4tupTnuNLCinS1JXXvdz",
  "key30": "S4bSTpUcCgF7dGvYdBeBJCsvN8d9DEfNNKM2wHKFUor4jLDCZB4jA47BSPrmReXVcLGjZA51jEvktBN4uf6CQMJ",
  "key31": "2qfRW6wc527zW8YbDXQYvRwK6FKAZ28uP9sSe2bdyW81aj12LqjqyRmm8SAwBDJ5f9qRKWjr6EinhoS5fKgoY52k",
  "key32": "ZofXJu6sVWt8orSaEtMeVGt2XWgcv6X9PRUGMyvKQbYm9vrcvFvVuySPsrUCn7vQd5qcXgU8kKGyXz2wSYCub23",
  "key33": "25AvFteod6nGKKsgTGWgfhiR7hdwpiJULvd7pcUGMe8AvvCyQtLDipZ4AU6cX1NxHuwSpK7i9ajZEq69ujY5sQkZ",
  "key34": "3AnBL4FBa3iNZm6KVErGRnepvSPQnXc67d62VeHY4Th6pr5jmGnrq9pVnzQwfN8cC24vK95QRgvdH941mjqUC53H",
  "key35": "3dmmaSqCNsetVzAkGpQuFF9dVvAEEv8ZaS1Ve6AP42tcJKzh1XY1A3R5QdKMsYQX5MmPf2riudkphDDWdQ5QV9Qv",
  "key36": "As75ewEPMGQpku28G31c2zxqq1q7A5q12hPWJCMtMRSrn1pfcHUkT6WsE8QzpkeaqE3WkY1szAtyHSHv6LRV3JZ",
  "key37": "9imkhUJwtT2hezmPF1AqUaLvgqFybh7HkW2KGtm1j8Hczjx35r6kuDWAaTGpCK9jBayWZjWcuJ1wG56HRoZGn9H",
  "key38": "5BQiV635PW9aCoUzxd4yVMW1SeAfdU1N7JuEGxNP2coG75VcRTvKTQwR5QzpZJz6XigtsiY3UuUKAfnNqW6mNBEw",
  "key39": "3ZP5s79BZgKor51F3YfG223aFJFcNHxemsjW5DyurAfeXzvc6RF9tdbUdvdw3JWEvzidqBewQufCeKFVAu6TCiFD",
  "key40": "4rtE7BNVFfDYmZT6UDX1PH9JQ6fUPprxRk8YF3cRTxKoyzN2XpxbAQV37Rh7HbfC2nihR2rUjEyV8pGXMM3yAHf",
  "key41": "34r6t46Yequq63kn1SnHoBcXECWjEw9C1ysqh1KEbLqPUyRPD7FFTXLrVs2ZU8YDWgzxKqd8dtgK3Ne9mGmy7pXA",
  "key42": "N3AvaT3ELYxaQD8fPMYZ3BL2jKYgZwKmiYEQa7TeecM8Aqx6GoDdW5e4NDtVJXZEBRfMkZe4JLVwiFbCp9yTEJZ",
  "key43": "5kVQSPpx7xgstatYkYaP4m9Z3cgSMyKp8S6ttFALuhJ8bi77Bz1AXZCm8rNxXGr3mWm5an8sh2pogW4ituNMMX64",
  "key44": "w371mNmhWwnRLpX5x7YaZ56GxvsYxcExhBZ2iQuM4EMmxSZfKA3WzdFsRfYUMEZLgACVZWfuoZd7LwK74oHPiAv",
  "key45": "TSUoSYNof4D3CVfizjmsa2tsuscAqv2YQZoJofCoXe7hr6UtPsKu1m1Vi6crs3WhzqiZdKsrgh9ZkwNfZCRg8tq",
  "key46": "43vJx8YemgRawzyG4adF15BxqjdsjnS41M4dzqNpV6Hs9T8gDtUWjS9t3cCvRp4vBbP4TcqT5cDGbRaYfKAdgXRw"
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
