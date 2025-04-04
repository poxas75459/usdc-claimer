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
    "54UEvR5SfMm5UrX6GPJv9NL7mcciMjpTDkK2ybbxzogBkSk3duZ1X5WfjnK9U3aJgrXbEt8hEh3YWzLLqqY88YaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jPsma8o6yG2qJCUyxPnpBhpAx7Y8CX5pXUeKGC3idKYF7eLXsgahsM1sDCQNCo3nXiKAWw2nkXEBpgnBTBygAce",
  "key1": "2hkTLKgaigXRYXvp3NKBCuZJXvyxVjQKE6SgcxvQff7Nfiz4TQ6Zi8N1kEYiWBf6LfQafHM2cMTw2ABzqTDSjQy9",
  "key2": "4Jd6N1pxJ4Fv9HfgybpdpVioAESefwf91f9EbbzCX3soWyistuBLg7ueaUc2CmXwMSXwNa94JhB45bizdN3So9VN",
  "key3": "2eevanUnDGJz9Xcsa3o3j7zPH2tZfur8fgRA3p1fUUAPbZP57FPauJth3VhoXDYb75aNspkctzAPPzoY84SoxrAk",
  "key4": "4UKmjeNSM5jd75dwEfJJsEehnUTHYe15k2cqwEXMWim5h6h9TAP3K1e5sb7LYuM7XVwQ9DfZePV3Rymco84nNdDY",
  "key5": "gALYjooKu8T2moPWJBQAZZ15wvus2Supn8Z3wBLo9NgCgeLkQsWJgvea6pwwq7SU43j7j2VFMd32RHi8E82MXys",
  "key6": "58sW8Aw8MwJ8HtjQDPB1xe5pffHvJey6HyYe246wBETPm8kgzqweWCdpmNfKQFVBNks1jHdvnyNZ2YZ9xaFQavL8",
  "key7": "4p61qY1cw9h8H7dzMj4Ax4babVeF8d4LjVawDCx4HttfsdH459dVaMCWp4Pv6rkQGV2RaAoAkPooFhHrsfYrCXFJ",
  "key8": "5jzeEuBBA1PSh15KtzBh6NTD6NguEoRYGeUTaPpmeyYU9iCpjs4ycXyYdpYCgN3q4vkMZsW9Ss18aeEAhkaWxCCx",
  "key9": "aq54apjHFBry876kVEoKksifWAGvDV5E6JhT7rGpeSoMFchvdax8EEjqfF7eHbNrD72v2CxMpHnqaVxod9QDm9y",
  "key10": "3fmho4b1Trjqh4X2yKvRjMXLCpxDPWQbUPWFzDQUdbdRPnRZ5ieNRVn15PACQobRkYmF4Nn1CsqvJRCZmGpnNY9W",
  "key11": "2DsmuDyi3MDxtPeb5TtRsRvQu6KDJbqHFDk9uzSnBqaHNSZHeRHQibjcTYDMwRBZdrsxNhC3ZKo4fBWkW8eZGUEc",
  "key12": "3QDGLdyrodePHf1CPytX4PsDYJXEELsnQVn6mvzvorALwyotQscVgywXM4ZvTTAnqv5qyZmQXYLePLoe1prTHcYu",
  "key13": "3ovAAZzWbNsP1FVi9NyUFBbLuN3nJ2EobWBjH5dXqBt7obPS2hQDaKhEb32VBTRJqDup669y3vWyuun5cozZ3BuP",
  "key14": "3cdBnA7xhNAL17eSuqU6NKt9peQqeDviovqHdMH7gQPobGWH1m2oqozwfrkwxLPPUrCr8xoKKHWeED9xuoFrs6nH",
  "key15": "4Zoo1rnQCyfvU1n1ecRAmCzt9e26UjJv5wGd91j2yjhpJb5AgME6B7dcHGSaJNLgbgMnaZmn5CwAeYz8Hrn9j1F4",
  "key16": "5FMyYYMp5bsmH7T3LbvG1UFpfT4h9K6sQZRQzmfqsAgtpqjjeLw6CVK9A6TcQon92PNrBDc3R4kTWoWcbWJRxNc6",
  "key17": "5iDBRwJMZAKGgunCH17g8UnoYg3X8PxhDf8zf7hQmYKpFCqjyJqrJz48Rgz4LRgF3XTqyeUYLFoggDmbxxjoLjqC",
  "key18": "QNvHHxvViJNukGmguBuZBK5sWCwB4ZoRr5xQHdQQdiQFhok7iRSFM3AN7GFdiKVrtW3TP4bpXU27PdUcKbkioaj",
  "key19": "kfGF8ysDoyscrB9Pua5XDt2zZVJveMDKgQN4kuuToZP6Xb2ATkQsSxxDL7a3x3wj7GYSC1rsP4EwMSTCPLfE8JA",
  "key20": "5YpFgsYi29UM4eFSuoxNPM8qnLZi6MVrVXPsAUNqdpwHnr9PXF2czWMVupJBRRyuKDVg1YoomoYozxypZ7h52TX4",
  "key21": "X4FAv8hkhYKPVDugWNh6KchgzWKMZ3rHXaetW5YCTkt5YURZD2TNwrwtAwLZbEqkLHFsV2xJxkEXVqdBp2sL4xU",
  "key22": "5NMAZsNEK38tVgR5NUJn2DZQRS7CLCwogE8SMnzQXRtwwA4a5KJjJW9aah28iSMZSK4WsF949ycgQZZYJfb9imU1",
  "key23": "4Pk5VVezjzvfFCBuok8rcYD8H2GXAWrPZh2mYToS7x73w87qywf9bed7vuFCkTAmXUh6i85pytf52f4mnJvxJKXH",
  "key24": "57bqpJeZEmWSKMgWXauW7FmZWrUGoNSp6MDA2iGEaUfdSJ1cf1ruZvNxMYdsppDKN8fCvgiPTPq8dTnF6MYn9K1S",
  "key25": "4nYYj1xEGGDu6FsoPPRewPsfqX6GirdUxaZKo2dP5eeiHCxB2bdLHSGHgSTnAGTaUpn6323badQqhNsVoMgApkPb",
  "key26": "2BCEnh1dcyS9zbCFyC7LcjiVA4U8MPEPbndmigDgALjSHRanjRjc9FQDnHJ6P5SVmdFZN7HQRZGoWHfgCip1Avwb",
  "key27": "VstSKjtFpXpVCjm4RFPcRwtBrR53TVmb51Ks25mq1qLtZa3c9RQVUHt3FJDv2kj8g11niwMsFoK6BjV7ZAcvvfp",
  "key28": "4a7iPG8Xe4ZUUg5GavbXQx5stofVfPaAwSM5W9DWudDz3CL7p32o8RZJiJz4H2kUWuZLjVt4uVGiVRiUDTYWbx6m",
  "key29": "9wNGiALcrhrCp2zcybfpb64XevgWEHytymSAzFoQP56Z2XQEvGfEipMkoZq6qtC58p1wV4kcavnj2nmnZ8ZnJHD",
  "key30": "3euzZCDMvSEJrBrz5nhMWxqb3trPa2zkY8JpNB6ZYFLdVdkLnXh9cNwFpsmD3BVGo9f8X6HQhghYwbM2mSQYfKxC",
  "key31": "4TfhiYAs4PVYmidTt8ewGTXxh6nvGMb8QT9vw3iPSps3XBnixcHndCL9HL6a6VS5WKutd7xZLLAVNBzMCZK49HPJ",
  "key32": "44jLfNWdkfTEz8RxtskoH9MQkBFBDAFyyo7z9m7T266RWLdynphBvQgzpZNt6nhphH3HkF3Bp6y6fkY3ueqd8rxw",
  "key33": "3gcgxeXzGp1feri4ek4p9gXPniCKfE75dQuHFaRFrYkFTZaWKKik9Qj1ek1iTyJ9ikP7PriQonUzKzViQeqKmgcd",
  "key34": "GqMUMhx4CAFiXfKkeT3c1dZBP8pRNDW6omGh97wmp5stT9yGn6zFPZPwnBkBqCYEPzNhfDgm85acKHSLFtf55un",
  "key35": "5LG5tvbPWy4bvg1VghLwjst1VunvDQXBjqu1dHUBGTc6Db6u89endZ6GAuZJUtF3uv4LABxBGazzHwA8oS92JMfi"
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
