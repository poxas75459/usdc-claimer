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
    "2WPHP4V8qhHUnxrAMkmcBuV5EzKDE4oiDxAw6njeAkvoLXDibpMchsWRUJiuxU6QoFsGNSnXBM1wijKbnbgVZArq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DaDfQwkGkyYBe2WfLDBdDS5EfqWVJhpgqmMszHPLUSvjuf1ieuxNVPGCyxU3Sp66wDXEfTiZppTY1S3XvsQ8Nsp",
  "key1": "2mGauqAjZqRxBnrGQ8n42xDjfUMKVScAmWD29Bfo4hQm3y6hUPrPXnsRhoJ8FkZZQx98MhStzH2cRQbEBHocQGb7",
  "key2": "3ebdRYisNFs5Ss8TnRxfD4h8Y98XxYHJhN2QrVYUQGhELbWmgCxaJFag8nSvJcos92eq6FpfwL2Ez15r2NyBrTbt",
  "key3": "3z9TLvdw8AYggCAUuaHYjCAzUmp4a8HDFn4d29JcBxEyDkjpvZwLwTXyaGq3e9Zx6hsHwHdBeSC4Aj36TDyooMoT",
  "key4": "H2ubxNCoek3xkxEjUQ1Dx4t5fiSCdExLXBpHLrahSCts5rqYg5XfCUfj4XdaT93eNFgZ1WjeMMWPBRSC67PwZD1",
  "key5": "2CqtZBaaEzdSafXE8QRrUjRmKKz3Am32xsgSmwbDpSFk5W7XWz6qk2NTrpR3DgNAshyfrVtteS1LtYU2sJ9QBCMB",
  "key6": "2sf1hd3drdn5UjtWbxSdEH9bf4UhcGNTQhNKc5ggHmBDpdYnfVyryrr3dSSYZjKTpdvXxXpMHmP5xmjEFT7TbMkX",
  "key7": "FXaib2A4wwzDTFyysptncUHX4ZusiDi4epDprtyRVtmvu6uK1TGoz2iB44QVh6Smv3N1tsYwc3YfyWjpT8TiKhG",
  "key8": "4pTqSh18q57xrtKukwmZ5u46xuz5767PgAvpJzZbiiPd8W1QC3uFAHrUfMuYdKpU5pFFmayoHpXDKyzCYHz1yukp",
  "key9": "2TJhYf6LjFLjPTicLge8HH78HV1sSY6nqFPfqGqpBBi7obgjrjQVbg967GDFvoqc6zJwamveTJBEQp5FK4YuYD8r",
  "key10": "3kMifeg5n3S4pVYfax2ekfyDm5ijPzdztXdXroT6A1nr6WvuSKfpp8Ysabf4gsMqX4t1T2Y8utksVntwyG7hR5UG",
  "key11": "ReVRkz1omACg7aqTYg9ePsW8MBWMka3JjoLM9HSiom27e6Pebm4EU3JUK3Kn91REPRPVwEASVSKRvhngRvuWW9p",
  "key12": "5kKcgisKBdHnVywrFgpVxWcqjNzX4yB4LZxMoNbpJ8AS7rLVsn7NvzesPGkCjnmmfJiPrHK8zc8Uo9aWZHfpNW5D",
  "key13": "AZoLGfH4ZPL55zrbqhwaD4RgfR59GUNGbdob2p9ba3JFZimoC5qYGwqBuTbJChqVQxR4fJmcc7QBHa1fmUhewRZ",
  "key14": "29rBMgzP8pgFdm4BDkAmndMFFDnsmgfZURVroD7YpQqTBDN9P6qk27WaNgZdgtTPv1HtbUgm4VkP5qqZauVQ6dpC",
  "key15": "Nh3PpqGQrEGw72HL3GTNoMzefQ8cpgkVKBVYLXnTimXrrGVzi7eW6ifhBrwCnr4Tyih1hbAvsdJsUMqo3v16RZv",
  "key16": "8Ni1fQvP6XHPa77wU5Z3KbGdWbvwXFPk3qbwWV1fZBgGDRgBAsRPm76ZhYKaYeyZxnC75hrVoh6g7woPVKQ6YNJ",
  "key17": "2S6BCHbRNRM6nHwxWUxZrgvT2qfuRzrcfsZbRrmVDqD1uJdiDEcind7gQjSyynTdqCV5wZpXgeFnSmscXEzBDDKt",
  "key18": "5fQKnc1RKG3ZsiEvML4peiJxUwrReXFBzWcHpJK2AD6eypZpKYs5DqvTX6pinF3JFwnNv1ZzP44RAHLTqTs2DvRa",
  "key19": "4pgcwgXgc2K2wafvHQyXhCiWUgyNZQ1FTBz8VKnydxQem6chSpgxFuQMNKkxuEn8EZjVxx1Nmk8pDUnR3Aw8DAUR",
  "key20": "3ZynpePfWCndPNLajdQbwHiNaWnpsgpru1wbnaZX7aXzz7c1pVtigPE2xUD4VG3MQuQrxVSV3xuuTkGBntNyf29L",
  "key21": "vXVcM6QFVLTn3L69UgUGoFEor1ihr5NDtBgZF81PDRpK39JTUWVqgdD7tHq33KBHn38e8Wje4DcWLGqDe5TC1E5",
  "key22": "5mQqhaawY7xA32WNkNHGJCZLL5C8CYhRNcNu6bC8cpaRDjbTKmoCTyAEJhVj6wN6zkm23KjPQ8tfqVPh88edZz19",
  "key23": "2qP3zNUTG1JFJAvpQxhmfbkarEvBVuLRfmLhskDWGc3sv7o1LFMNKggzAvA19K8ttWwm2rHufxtrENWXvuriP7tV",
  "key24": "3ygMtDkH6HAtaxVx1TgsKvHxR7RxAZ5kZobcKZLbMohCYNYY2GwmddimgJBDda4QeCJUQNGYSyMSFu6BaS9YgB1U",
  "key25": "18ekVP2GiWKX6mX5n476tbmN8NJPoFGYGPNqUYiiq8QzDgRfTn87H5gdukYg8vn37VA5G28D1SryiXn3jgnT9yT",
  "key26": "34vd9oi1MqfzYiMqapWYoHTLiyijiM5MnWHw4tewnmbo6gvhnDTxFDnMDqgL5JpeC8YVFPMHtDes9YEn9ubRV8Fa",
  "key27": "27mX7xkGpD9akZVBuG8ud2hni2MvYUnk5ESEMuWRfFspSwr7PdQyC2WCALdKgzEb69RaH7gxp23SdofeBFG7JNcm",
  "key28": "37m2Ut97j547UfpfXQwDcM1LjM2CvLWiDADZ7tZTTDKJFWseoxhqgQ3TBW8HsNWS3JsQnDf3cKmvvJ2ogsJQMinb",
  "key29": "a1zDjDZLmzJZSiCqfh3rZjpQnzLsBvefrSX9YzGeZxruUBE5yxHUgKGUHhS6JsegxYNcBzyyXTBv5bMorwnU9tK",
  "key30": "4RSYU9kVKesyWhQ4xGREMAGnfRdfw1gDuK2jnimXsuMvrux67JezKy7rNwE3D7JZtKa7FGaHd2iVqxZyvQGfgfse",
  "key31": "GcNEgGeJdfsXmG1zuECruWwej2s1mv2ofGtr4QS6Y4oiGz1mvcXXnfjYBpafj18CcH9zNE8NxVeb6oTTd6eGsgk",
  "key32": "Feb5tsUuogRf1YYHLgXCdwrDUatDyArxhfqjBhj6XNcbsvMYATR7xNSTPew59rJzN5MXvDWNMnkbki4mrU3N1Up",
  "key33": "5hFTPtGkNG2oDmrVvty6JLkSGUF85Fdx1pdZYGrfnAp8ELhTn3KpGsuJHJBvyZsnEZmXv6Y1ZLnYHyUQZqBtVoMp",
  "key34": "24NiGWHKzasDpHfmmoT82Teth58NaoGrZMt4f9364QE3i5RuaUk5GkXDzMBypiT7fyPngWnv9UgrT5FYsvqUjEnC",
  "key35": "2Goi1nyoPCPf5rb2RSY2GsVGu6KeX7LAxQ3foWKLCrifs1FCsow1jiwpXGEipmVBPx4GRR83GctRDXPGfdSFhxHy",
  "key36": "57Tp6NUTAqoRU2QpvuWs5K8M55Qs97vwhd8WRxTubav7LNyQgMtnYRRx5JcCaKTvoijCB1RFaSQshURjtqXwwtKq",
  "key37": "4NmUnjQhrJzxbeUFY9yQxWQ6GKWPh7T7RtbpErxeq8kCL4h9ox2q51UvZ6zLRC9YLxRnFcr9Vvc2X3N4gAUVLguB",
  "key38": "5y4ZneyVjJ41YNBjoknpsPQ2EpiVb8Se1UqtSpHabgzjvrzxJuxaV8d8sRQovkNEHnPfs45QXPTXcsr7qBFCqdqu",
  "key39": "2a7gw47nAtyC21jWgxuocCxrVzCnNfawGwpffXLd2zatUHsFRMgva2ECVmg9tXAuMe3Dsq2aat9mp9Rnd3zpiByc",
  "key40": "4gPDQdETQYpfGaUqM2AVCY5ZAquE3SxHw4YmsCFFYv9rm8mNX2Yrkk43eFoSqNXY55gsh4cBztyVLqd8GPk1tLAn",
  "key41": "3AjG4s6sVd8VAR2s1Dogap6EeS8d1tffX7hfuRg1BttenPCHGM36siErc9YkzvMLxphSRyNiAb1KsRP2CM6CRhXn",
  "key42": "4MgFFz56Ysqn8CriScYjCMw2A2xiFDGsqgmRkf4nWywdZCc8kWxgJCudZw2pvKtLcJYsoPTPYSD8HbQ1yHfuBaMH",
  "key43": "4488GkAm8BEJxehsFvMSANoNWzY8XSrWr9jM7HEDNKptqVVXQ9CEShP3Qj2yAGZd22oSrJgxGCFSJfuK2sX1yF6H",
  "key44": "e4YqYkbVpaEfDXojCHPEaTWD5mj5dJbT8TxAyBf2iqp1LD4eCPZC4yjMuYkMBzkaspE92nUQRnmbMouZeHYBaQr",
  "key45": "sdEaY7HwAQ4jApx7rRLno1Raxt7LviwVGe2hNDCtjVjkvNwRUk1CshdUgejBpcrjshGT6e6k87JSsayKLm3x4FV",
  "key46": "5qFtQtXXRELkAC2G8qWmX2QMo7w1P7xPLPXeJmRhgTjjge1GP3Q3tiwVKC2xGP5nhytpG43tLRWJXsZRJPvz2Atv",
  "key47": "2NZMJCAkA99AKkwuj4rbLEAkkeKMgnDmVYBfpUxy7ddH3r8LzWiSeDJYsTZnfBPiiWJnYE3XBqZRNzD7HSvVQJYA",
  "key48": "MgQVLG87ApobH5q8yymFWhePq8nWfjUgEaoUGqro3dvr1afES8QCJuN8L4ZbXKguCC9oJ3XjRqkxaCiTxPNrecm"
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
