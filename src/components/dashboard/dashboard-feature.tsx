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
    "QPtog459Ngmm29nzt2vyBqjhHno3WfuoG88FQdBpjuaETjHZvvFrA44nDYBpRJp5A1ywoiz5yo36HuCgeJPFcB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27AQLBBuufMFnBvvZLpEgQx4pgNAzoFZJfLCuSh8ocQMqo2KMAPBWTDXk776yRqP48fnCWo4YbScJn8spjfaxC3A",
  "key1": "3yskV8md1A9HtqETDpkkgoN3aCSMtDoRKBHfGQUxSdi1Dwy7LfPxNBCTdX99yWLQW35ZzvUGNwvzxpT9KoSWj3Ff",
  "key2": "5XG4ZK2gAbeELuRzEjnjDL5uyaEsFccJmCmX2SZhZKFMdvS3M9wNyeGANu6k77ibZDGTzfgkbEgcdZHkaFg2BZaQ",
  "key3": "Kzu2raNhkQa5jakHMRyFbAhtKrKDWECFrn2Ez1VApmBYiZGEGiiBoxgNFF52u7LkurDxjKJSbXiufrHezo9YMtm",
  "key4": "s88YJ7qbkx6BGQrviCmq5BZ746NpMXNtGQeZsbiyg2EXeBnHiK6yfnYorXAnbzNt2oeQxgQFFk2rug9w9ekYGJ6",
  "key5": "2dKX7JcX2hiuytWoU5Vv4LoiMtpLZE3xCJiDVG4wgKgayQxV7399LfXmxYXGa9gpc1mC64RkEvQoN8YmBNQToZ7v",
  "key6": "VbfhDsnEaHF5ocNkrX3oACzPGLkqLiZeH8ouvJ872k35tsCbKSPEJ5KQwpV989EKpiX7ZiJfDvz9mPvbXk2r8Wg",
  "key7": "216gx9Y38fi72rsbT5xSapL27hKHxHWomSSb4cwfETBC2EgVzZidLYJq66utx27uLXw3wWmFu4nxdSwgWTimZrQQ",
  "key8": "3CnZYFU7WQt2khDf2ioH8BJhhEiPpsGNoJC9KjgApW5QTaD25t1SWPiTtg1w5FhF7Dhe1Pxh2uqEQiJUMNdDhibT",
  "key9": "4SxuasqKbohtpg4xLeWaXpjcE3x9j23UsHvY9EhPovYXUY1BeeN8h73vcA24NyY4YoWASGZwYneamvPutZ5DneoH",
  "key10": "2vzdm3EZumicnpBcZ1ngfXCGVqgYsZGmXFVAVHRXPH59URkzsS1rE54NWAhka3oVf6wcXuidiw7y4w5Do56fXXJA",
  "key11": "4mM3jUkWaMPodUPNNhwmzB3VvtqV1C2jg3bbp9ZMZRZF2QnsaGFDCgfNTyPirtH8zyKkXZngCz86KW2vuGq9FNYw",
  "key12": "5CERffbVMmiAr6szQYRDgZSBSnjCzthPUBBZfX96N7Jp4qHv3ddVPFGBcMfDv6kysrMTtHiqcK8ZzpcM3qs4kc1f",
  "key13": "oFt1jQ5P64QRV3MvusZnVx9ijx7o9mXdW2qhLWBA2X3LG1QYngpERtf9Ghkip53AyTrAJXU7BodqFdprY4m1yDR",
  "key14": "5wfDsNqTcSAhf9xPbMUHzXdCA9mNp5pWhKo8j2v2Lmj5EZX8Yv8PXvDEjyY7h54RRBHs8qZaniU72TGrHRH6Zux7",
  "key15": "517WdZ6osgfj7ALzF5q316Deahg6J4F5bJhiSMQU9dzD1gmPZP6Z66PWUkPBwTUqS41B1ZQM9SiKhibito1qB4xC",
  "key16": "2JcrM8xsaXnegaBETh2w4PRYrcDMbcMcFZgXN6WzrXwkMtBKa81V1TPctBjXWDY8EGE3x71DCgjh2GV8atjmnM3H",
  "key17": "5z2qkT36BBUmgVBrvFaaeT1ErJ9By6CNJxnC4WKaQWkZEJtGyCHc4qXWwWpvbMNxbQSdVT1ZyM8ZB4vAHaupJfcK",
  "key18": "3zB3BToUjUUmTyjn5GuzaGoVtYzcJDs4tnabmC6Hkijnn6tKHGdAmo5BvGvY4bY2SvdRDHQVDvQDhZ45wvGpw8TU",
  "key19": "22byWq8DLVLztB2rzG8rYBAran58BvooEEnrYS8HXCqcg9wfck28KkBX1zAizPWgmQtWQ8uGLeAXE4QftR9moAJd",
  "key20": "5gfkM3NV5y9i6tV8UawNKEhsrQ5zuGz8K6VnrtJaHSqDJnVZKEu8fBFGJ5EcmQmxG1NgEo3EetJTh2ebDLHfcGBC",
  "key21": "3QAg7dus5PqcSP751e9zW4KnQuTn7iK7Jt4JmG8yr6Br4x7voTK1bbmvXs3ZHw19XFsXWV8xYvY7uohdjf8i8MZS",
  "key22": "5dB4iQUbQ86UsC3bhzrucdQhpjYeCET41h6YFadvKBUqidULHmuCW4HwkskTUoYjVHwLNbCUvjQuF9FEiZkzpnTR",
  "key23": "2zcpP7QGDUdLBBuVihCHw7KJpSJNbhx5qUKPxASooVhgRHCskzoeUDzXtaMWiSbj1tujAQwGRkmimfDA9FHGYSJH",
  "key24": "3FUsqJedeBLLiuBgs4taWfDjNk3b84xsxYfQaYzGZzdCVebMaREoBgob8bjjpbVYhrFGVonS5RryPJFYkx744X7v",
  "key25": "5KwHtUz6oATkHV1nXdpLqYg6BLVMwCJhRgokFeksaqvScSXaDZ4GepM23wcaeCtSQFZ8SMY1agyx1dA1DZMXm98t",
  "key26": "4ULCYaxpVFfT9dC9qBLnMxr6uDXNd7iFqnKRj3iLKPnbVfovwNUkq2z25WXkE5oF84cL637AQhjiWf8tRTdMEXqR",
  "key27": "4NuyrpDvnR31qUm84xV5kReGKEBcgiHEUFPkE9KKXVZPDomSgAM1Qds7tvpLNc4uZMh1yxm2kxJucMg5mXoR9FDh",
  "key28": "HYtqEGqrV4FjJWV6otvHDtokmBuXJFxkvTeJ63oVctpbTNHyEHR9Cpe4gk4UWEHzYnzhKfwwfA93Rrbdy8qxKpE",
  "key29": "65JhxzJRy6YDh4sx3btdaJ9FpdpXhjc4aZAy8CP78SG1XcJbwHGY6GUqi6zvbq9fVksHvKx9huN4AFaGvmGQ5iMT",
  "key30": "2HFE2GVux7XoWsihYfSAsVgev4QH3qN7QLxTxsNwr8p5YSMuTLjE7RzJnQACokKsqUL2pfBmaFgpfFXtfQmi23f8",
  "key31": "tTBrMhCP1LzquNiVu3ps2RgWTXYpKVg9sNPgPmBytaDxzfyvLArxtWrCXEFjEWxAFVvkNfkgct6xqc83ar2kFuS",
  "key32": "3bUQspDmFz6bkq1Rwykrf5EmiKsjyewtV7EYwNsYfRi2XuWVoGNumanQufSMLWRV9stZ3pVK8rySt9KrTGU3pC99",
  "key33": "5W1W2TRe3B3JnhyNC9DohWiP1URsrGzyjYbuBYc6xPUbWWANauy4sQzPehFcdqY9hrQHYhmxYynre35M15ZBj8gA"
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
