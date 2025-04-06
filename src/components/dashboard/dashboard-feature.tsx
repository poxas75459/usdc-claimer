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
    "4xWY8sFFPP1rwyJisQHSEw5Gsu5jsw6kwGYVtQCdv6GsC5nNEVYgSRH9QvQK4SAnu6zpBpyhSyEaq57Fnh2mWb9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYfBHYpyxKShMtds15xkWz1ycQW4Bqpa5jLGcbqfuWDjC3ha9ja1pHDMNrZvBB7tXmi7wLTxpnqWRUx4Fk21ER2",
  "key1": "4t4be4kChxJgZnH3pmzoa4x61Y3E2e7vNBxQKQp9UKpwmTEmdbMCTF9SBDAxCDFrqmiwYfaV7LXXZcePUTcDFcrq",
  "key2": "5gnAtjnwxmodxEQC1EsgH56v7hfY3wyLWycsraRCxmzFEfhoHr4CNqUugyeevk1VtxHnjFmyUDHuvLGEWsTA7bEj",
  "key3": "3gVs3168acfyEcA3Q39LR3nJWY81Ep5u81yycYYco1wqZfCNkJpvCwfontzeYCGhVpmWMfzsgua6eaNruHq6Soq7",
  "key4": "2ycqzeJweSDqnkwZSeM8MQXEyrd9x4kLrNRVVF3sEsQoQyMvjZU23AkSE8YGWgXKhybrekEvnxPTFU9zepUMCxKJ",
  "key5": "3tBVExcAkCbAUDRm7C5PzxiDRCJN5A8JuR7t1z8zTSiiPUbiNnnLpDdgVY5mAgCCdznBEvadiQyrx7GB1iPkB1LE",
  "key6": "2fEkzVSKjjJQ2mFr7L1Eskbu3RtpRziAs7PTLTCshSRzcvqHTKePyvGP8vpro3HXmULKMe8EPJpfQAiVpMRwsaAF",
  "key7": "5qBtW7qPxSKPUUrNhDvAyQLjnyvtdrS6B6KVVjtK5vHFBuJRbbgfEF3YwvRvvjopN3iWjgAaYCMPJbhvoxaFoDh7",
  "key8": "23YDNNATwEu3WeQzdEnKV1Fc8gudZAN3QRsPkw7wU4H3vCf9rXK1cx4C5De6Xxkjth4Z61rQD6pRptS9BsegwV5E",
  "key9": "3Pfgq19Xn9akuAp5J7isVtozqh7MNVP92pHA41Cqu3GGxej3qWFzRP31DiW1sdM6vP3RejzRt82XDAi1sFL3822v",
  "key10": "4tYFgpgbXmDtQKUGZEbWsnDAeC5SWZCGMKo9qZ1WmNr1eF6AH7CdQBt8ciynLrBEogsSeF9gX81uirYzz7Mb4Yc6",
  "key11": "2EFaM3isfSeEcqNuF542fxjWf3X6xduYMbrUHRijnKEQrGoP9bVChyBmgZKRsNZ4KqTe5uPgSmVbrRnWXGMbFvVS",
  "key12": "2wEVBcn2KZroovfCstjibpfsjY9QaVMqdTRPC5tE77XULUgoLNS8PJ5yiGb2eogaHrZz4YKCmWUkWNT9NpbpX3sB",
  "key13": "ERs4FbDFn1MgQvdNNjkNhSRDNzZHPPy26zka4jMdhdyCpQWW9zCKebBE2powwRsFCpNqAKV31wVMcZAb1sh2LH7",
  "key14": "3Y5wZUUyxUeCKdfrqS6NQtLLAEHREbW2e9QtkGsvpgm8g8DUY1JLx3bbAwFUD7Y3qEXyCNQz4E1nAmfyp7Boc8AQ",
  "key15": "JezkmkWiJtmfP17cJM9cjzuQRXhZzbtKgtaYtENDknDzi9kkNKyr2TghA7KqfafFzo6xkeBhLgtNZo3LW869Qdk",
  "key16": "373mqXEJSF7drUh8H27WgzPAhwkr65Lf69Z4coYhZ7WWT7UjTzHfnfEcigrFx7atuTY1dSxLJ6rQDjMaQvUjk5rz",
  "key17": "4ribtKEMogZoAXGqxbWGcTbLPLH2fykNt1ZNU7FoQW5PzZ6uoCzJUiaWUU1iGWFByAkQ1H9bPzkpozZUW2xHcSmD",
  "key18": "5sqKtwjqZeXQwhrmBwCtodWeqn5sBKnWEyFdiN9rVviRhac5PePheSc8aap81CNzxaCqPBCALqeBc6XpCsXDHByx",
  "key19": "2e9FxZYEW4RnKE5zwzTFEemHyjJY6LbieD2AqaWWf84WzRPSvUkpSwWv8YuGhFY1LFkqLHbdRivojMcGrZ2ZP6A5",
  "key20": "51vs8zmJyeUrkuiTHzNSMdKX9EAmANX7e62ZJomtetahozqjvNM8FhCpAWGVQZ7E1wCvoAvpMz9Dp9nk54vkzxby",
  "key21": "2pQQcVShbMm2fZUVYs9KvvZ4Rc8oQMDepuLQYv1smBGtRLuFpXQiARW4TWLA8BZjHCNK9wbKSNQYTVojpuJDujFH",
  "key22": "2zV8FyQp4dc76PEaYxhNzumSdFKHnhxCBpskFXp3DR1v6N7LCAMocZ9Yh1Bff7miNjGy9mHf3rLr5WndqpdT39Cb",
  "key23": "3x8mQiesheiZkffqbbA44nh1oKvqzGw7UDdQAgsMv9GMkLQvkKQyTeFp8Jx9bQHqNH8Jswzg4aamxGPJX9MGZRA5",
  "key24": "5puNDSrGznTaBty6u6gbWWYCbdikrN5vmWgNfAb9xFPkMTqpKtp2vmEsdGMwqn66hRKaTzmvwBFbTUHTjoCF5opw",
  "key25": "4TjZtcFsdWaCjYYik1ApV4n6nygCPLrGpouHo7RSwtT8WCeJHNgrRcxKzMeCLCTt9gZrdx53PdM7onVpjeSN5KSG",
  "key26": "4SZ5j42Hiq9gTg9LjghPtQtxTuFB6yZHdJLghKy1Lku6zYX5smp8XFe1eCAWShq7EAtZdcajbZHrcSUBGsZE7b5f",
  "key27": "34Zv8s827qjsFyceQ6F816VwdXHJ4xTW36samGwCvtGmHcpKQT8yATZ8uFzSdED1EeXJa5EC8rUJfk2kDYgzbVpH",
  "key28": "2rfEs1FPhrJNFh7oETjVPA19m3SJPQBZm46XbvmpJd4WyCmhBCVFQgro7YRiXoHA4KCEUxwCYWrhQRdprgXdq5n4",
  "key29": "4i7Qtjiag8V1k6sKXXAAXT7babMBfk3zWzCxF59n92eQtZJ4tQzoYT43oTfkNfKTTPZzr62R5ihfXFAFnzQYxUPr",
  "key30": "3nZJbL62J8g4Dt5cjj4adkSNBe6ZZwE92kbzBTeq9p3wbDK2bTBqg2Pxqk3VbHP7DExkz9GvaJGuYHrnwBFmePWR",
  "key31": "WcDS58i9BkouyAZEqXcqUEN9gB9LNAuFzPsJhBFM26Li4N6suG7cV7E2gHLTQY4zKwyhJTCQbCTrxa8Rpme653M",
  "key32": "48fKX57w4Uw1azGx6FPpeEbjNz4h5ofnwV9vNQJkMPsh7vD19o4U735b2ZvsacXviiHALjW6CnZY1CvjW25rCoe4",
  "key33": "2xnWF9NMhLfo2VDJi2w5EUMdNVnadDAJbNbQX6qRWok3SqRJXtbkjTK1ryvPNtEWLhUmTr4zvuAkXNvFZQ4PDs39",
  "key34": "5FYzCSziSrFhonXsdx8SnoRKgHm36cr2ZDt5MtG5g2cy3CYiUivS6A2z1TqBmFNRVazwQVKcvYJBcWz2U1ddvHVE",
  "key35": "49Ehj9RPVQnHf2G2EYBuiDhrxLddYAYEb9HoW3GhN6v9WGSGsBDteVobou6X8rFqYip5zqCxFB64XcLiQWAqD8gx",
  "key36": "5h8SxQcLVKLi3zTcfADqfa9Zw8FSqekNyRgAC44DUkLNfHzc5b5ktb4SNkA4JPEwAowwJoX6LHp63LKViBmcrTKe",
  "key37": "2FqLVyKhaMstnfB5wjmBQrFfooBffnNwFQ4RxATaUtXb2GRGniaYnSGaqeUpQPstrcJ8czvGtW8NW5obPPQjn568",
  "key38": "57beKyrrUVmsjgkJ6UTVZAAzQuGdpegUJW5PZazH6FdCGi5miGjEYwH51bYXTdTPXp993n73M5r41Yy3rRYHznsw",
  "key39": "2DUnrf3iSEDsN1TNWKTqhCpm5txX68o2e9ks44Q7zqLFaoThX1mrPQzCqTxVza7AvDbiS8fkNRGk3kYN1zs4D45S",
  "key40": "5CCqUDFUNybivFDPagiTSWmP9nn2ii2TM1LW8zcoxMK1KBrj7sVHqhBVB3JsDcTuYW3bwfxyRTrgjWxcdn1p2b1M",
  "key41": "4EYPryvyGhW4bnGrYUh2HhBBmsGBmNXP7xwFLDC7mDYtMyhCrJncRcE94rFivophwGyZv9zGRmp47JRbiPAUUQtK",
  "key42": "5snMmktiaNBbKCdPc35SPsT13voTsVK1o3HFarWxsJc9tBGdjZAVWwaB8nLgZ9zq3gqxqYi6Ru77QBgDkYhJnWH9",
  "key43": "5HgxuNzr9WiRkYfDQubKT2tMtHx7T2FW8L9qZxJcdWKVXJ69pdgvcn9anUHMjFpyW49jq1Z9LoSFp56nG8mFrFfm",
  "key44": "5cUs6HRFZchZTqWE2CqBLwLdxpzQu9orX7EgksTpgWQcVoXZDhYPQXjcHRjLLWUKv3PX2Qr7f3T9nT5CP6Tp5hPz",
  "key45": "3Dc8SihY5Jew61Jq488SU4eLpTsFPjHrkayqAh21h1ejSYgNHQoU93zVjhPa4dQDfZyCw8mzv1kkrr2uFUrNwBsB"
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
