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
    "3JwLgVKxc4n8vDwUG1r7LVP3UwjoTQuQXGfvCbBQxYRHdXaK8eLsg4W2r2RvP3cq8f8pTxnvQikNBUYYVEqsLh2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZLrBW83sLKuGsmbATVNPLpdNMaqQconTkYW377pG5bj13z3J43WrG1t8wgJM2S2Bg9EvLrwtE9pV4bhtmUqgyX",
  "key1": "3U7UfxhYhJBQE7BkExa54BJzQyLCwKHfjjefvMLoGmB2f7GpNSpynHfScU5jNMXGQNjF5Wd73PYGgNYFXVQPfjds",
  "key2": "5SZe8ewxKNU3xKb624tgbrSnnQiqWEUVsckkhBgmCQiXq2h5txZoC23bKuPvbygoxvBQBgnTWoNnRQnPQPHnXyrC",
  "key3": "4GLde9jdTS7J9qtJMGToALG4FVgdG68uVoZkASjpiSRYCvj1fiSTe1vJFSYH5qudmiMbTbRCoQdvyAYYTxEVMuUW",
  "key4": "3iWbWE45RLsUkq2Aqnea4JPbFBJtffzFhrdjd3Wg75k2JUAzDz4nmwH5gGLcqkMQEsnsMTdLB8pGmDYB7mm9DxQw",
  "key5": "UjxDbzH1DrfKq2XqSu5nQMJvBWBfvsuyVdcCY5noytBZGQjiK5y8e92k3nLWvf4GMMjkUV6N55pMF2s1gTaKEQS",
  "key6": "5JjZFyL72LCH3uXeKRwq3XvVy9YW1D8D7u5NTL6rtxra6pkAtPGoJzrfT3a8tZzBEDsg2ttH8gXVpjKjdkL3MKeR",
  "key7": "TXTWSEiA4PVgVdTXNfE5fZgJBLD1ianUHaqGxPXeTcHkKJrfDdsywidHYSVDPcfFc99kPQ9n3uapBHGuuVHY6DQ",
  "key8": "5Y99Q2w7cZrtSA6Ey3VsB1Tf8kNU5WCVEPPXMfW3hfm3RPYTrLvLTErepD8PvdSdSmYLYAMzH1ZZtwKV75ij1Qre",
  "key9": "5HMzb4K3ypNTsfqGQQV8QgeKMmfPbAfc777ZQzNHZVQrZDzsUVx5mnQ33dKjai6faNPZECQqtYxReKADM96aFrK8",
  "key10": "3n3xFjBneAvK8noaNf9e5V2tMJZdpj3kcBheSfGyNtCgKX6uXDs7QUTNyPxWtumPqVGrpb8bi5JMgTpivgogFwgL",
  "key11": "YjMbyxAxYLRtbK9vZRwgAgFCk2XDPmTsVMKe8jurDKKkaJLWsczzuxLFKdBTNuf1iFjL4beRtLT37SmBRn9HyMk",
  "key12": "3RC5HZApkzncn8ETuhEj7cCizbn1wmzNDg7RFdXxxLwRV1k2UAoRJHcVC48aq3rQcv4mb8GjSrS558ELjzUp5kSE",
  "key13": "4xBiTfh9JQQknkMYFkYMLzWxi2cDweg6LURbagQeZHE1waHR6WCnkjHczTr9gsWEef2MnWg4awVGBoa8d4PvDpXM",
  "key14": "4RfR4rrq75q7RVy4SCWwwjhxMjdEzbEoE4KvH6H6CzKJhQ29uR52bH495YLz1fVr74YZxszRC9nSzSDECEhmd32n",
  "key15": "4uU1CCf2qX4uy2W2kzQdyEUBZcjcgFLowFGNFeSFW5s6CjW7wz8BXKLkJbE5RwqSGq2z8bLtWySumP6VEfvaADtc",
  "key16": "3PpahW4HEqvtmGEYk3sb2nYtZQYWWQ8T6fK8GmqFFpvm9j9qB2kAdi8RhpWTyeeZxsz7rEY1gd2K323XvcU9cfYx",
  "key17": "4MSAM7AERVdSP76z3GYVm1Vdc1EaGo97VzYZovWBSP3yszzjQMTeF8s4Aq5yREuLgm2bg3wH6r16mBhoi5CPD8t7",
  "key18": "2Ubs8rjMjW1nn1Dd2kxQ5AY78CFGGjAYS5TLcf6QWj9AmHf4PmjcZC87t6PLJPiStGuwBTTyjiZES7f87rAz2E7H",
  "key19": "2zxRamTvfS9GwepFhotB7adxqBXEJfDAV8aLc3jjNyVq1oUKig5YiVA9bcwdPjUDDj5gFQAGWCBtZGjsm5BhgzrM",
  "key20": "241Zifok6opbUkSoy4wF1dh4sz6iAA4JzXeKRaJpKaAX24n6bedEwALhS3xCMAq67htSYTHRkhHd26i1oDCiirUa",
  "key21": "2nmgr1X71vwtpazCJ6iRDy9E2wVYFiFaxJMywNrF5NtYWurzwVyHxrB7oGMdfsFtg552ANBVqUXyyEzxzp9KRMBB",
  "key22": "515VxjGo8rXGbPUYgEjQf3BzKpzMTPYwDY53yh7S6ZuYYMhtAFU3cTZse7E7RX2ceTdHZDW55vJNZTy8MZED7pdF",
  "key23": "57GSo4zbL3HwdBS5q3DixNNTFNJ7BRJLk4uBZygQ22LBt68jJycxDpSdiL6vgoDZkHF7WCcLq1XuSER81G3zgvUa",
  "key24": "5RYirHJ81wKJADBbrH2yLmLDm66pgXD28TsbnBHW9nPXQnRH5hgjFTBVoze7afVuc9U1MUbVCXLGXpDr1QtGv9E5",
  "key25": "2MWn6Dr6UecEdJEFibocCRybVN8msxCHicJp9v8oMERJe86Y57PRCXmyTp1vdWtHrbSXHr19w1Xvq9FugixhYvhj",
  "key26": "3RWM8Wn3eKWuqm19oy7T8UZ2t1tsEHYHGYPhKAnuFyMATspVBeRdDWLfnoitZ6Ew8Cda8CHHZPHdv9xBQYLXq8Jc",
  "key27": "KRKcBCGiH7QMA9AGmq1CF5yVGahPh6hpHrmiXjuzhiQMAV1ydDvAfM64Nc6UkmsL9q2xsMzq6qBeyW7QB84sqrY",
  "key28": "3rf4M89s8jMd8DdwQ8V5Gj7bfot6GR3LJeMJRPsWnjkkbNNLMDgbVDSGV9jZNTvmzp7DoFhk7WmJ8f1k8LzQNw5E",
  "key29": "5K18rUzdggEXvRmjYhQ1yd6dhyiPq4YNMWG2nfqAcgutdpaTCjYZtz52kNy7sCWpyutNrUAAaY4zYviFtbyFANod",
  "key30": "2gy5sdviBp4BvaKV7oodebK2TZ4mjP1s5hV1qQCb6nsLgpFC6yQ3rcd3gzEuwP92Bp5B7FkPuNHXBdeYMWxR4jR1",
  "key31": "4CoBh7JipPEo8oYPrx9Bb8FPnC2bn7WgAUV8UQou9XXTgWwPGviEWXovCNMkVQTRJTuvdixNdGUNMsemFnfcPCFJ",
  "key32": "3YqSWMd35TJdKdoSPaEd5UqZjz9JZuN4sucR8DXuFpWWt8grUboVqDuTZjkXW4GD8towVxiNgidpEiVwDRh6aiep",
  "key33": "psesF9sYhJjvfxjdbAX1gt4uH6zJCVLJw4T2EDUXhaf4EuwH6V7TXnAbKakDvBtfhLj69h34AqpTifwnkyAypb2",
  "key34": "3h1iUp72xUvBYnY64e2i55XoYB32VhfMhGVGb24HKNjJTQdcFZ9QpjpKUkxwv7akKJc1wHCuUFnZrPspKj9K8uGa",
  "key35": "5ysTCnRfAf6Wu6E8czvdtaEF8UjULyQGD7XPYpUGuPrafDaRCMzboZVaWWLfN1Z7pXsUfcKB7vehw2hzo1aesV91",
  "key36": "2mUjayeKbtusErhUCXPh8pXWx8UFPZJw5MHmSGKcK1AtwnKBDLSQ3w7A2Q2Rpmv3Dc6gG5pJFHJ46y13FG8A6vga",
  "key37": "5h7U8QnPiPW9oWE18fZojuzTfjFcK5tczFNjrkwDwcB25Z6jzGco1KLQLKePmecryF23ezGi7N4rxdF81gLrgwfa",
  "key38": "3N2zp4nbv1Bqi7R6M7fNzD2GX3C5PdEAfouNbDsvKYbHj7k7FN3iqRS9tS1Qm9CxRb9Tsv6vd5CrMVrH8HD28YXm"
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
