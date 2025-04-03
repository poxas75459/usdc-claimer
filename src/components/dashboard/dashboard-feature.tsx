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
    "5Quys1iZK7mJ1LpmMDTSYZrtRQMMcigms6hhWmTBD9aXCKSNXEQgRiL7vqPxR66fLbvn8e9izshnQvzWB2LQaas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CAXtrv8k1jhEZPHUwgQFGkgL2VbwsaZ34nz2jwbFxwi6YDAipFGFmvAegbo7um2XkKkZZMLbCbvDDPcgPj7Xn2t",
  "key1": "wrHDX8UTCeHmik7P31dqSHoVJkTn6cvWMnjnNvAi2xTix2M3rZ4LmpiTxAiNic6nEdy6PYbj2g9qv5JHJLJm4Ry",
  "key2": "KBMnd1rkNmFWRuxgWnyWvHAkV1yXSGW5sQQLFHLsYJiK6d3N5xn5PmbTiFi8jPXzQx7hU1gjb8gn5dGXeCGMVsV",
  "key3": "2WBM1JRWfvM3YGojprwgYt4ScLhFBobhJawLSmEqP8koAmgZbHRoTqzaEwrx8huoErQU2wFdrGJgJVRxLRGJMQ7L",
  "key4": "4oKR2asMXcRVGGnm3yM5fLr2TiLfXgbLcxtdw98PhfGM7LxTQDXbqMoa2jDF18AGwMJSbnUmf36dWrCFfjDmvNy7",
  "key5": "2jDhQVWAgMrm7foXrNUQ4DJfnc2HDD9PRgdRuHvgsbW2jiQfcpeJtbNZYmigDrYQ9tbmFGPtdHuF5EYJoUveENuF",
  "key6": "4hEQVG2aRr6oL8BDvgr1M3SS5TfxcNn5TK6pFWESR5RV1P9u4gAqpdP1AWu6QFfn6kuEZAoMJGSn358r1DMUdU3x",
  "key7": "33yuuHgwyZMQGC59VqPq3mVXxrLpmpJSiiYZmKP1yYqS7sX16zrn9gnUYr9WYE91G8QELxUhvsYz92eyPcPVcEdP",
  "key8": "2nHEdPWDJzKdpHQfrieT4X7ud5TXucf4eCpENTVGT1CRVhgFpzA72YWmJ8Wvnae32Cdn6isU1TNetELmZXNb6KsP",
  "key9": "3FYC9RBiUfrowXkXLiNP21sSKPBj78gUdG778FYQcjTgvvLPZYzQBRjskcq66Npph4Rj7CBKbvS6w6Vnf1MhoUX7",
  "key10": "2esDnMSYH4g8NqY14ZjAP1U7HhfQi2Hcvznn6EiNmWxUeKcojqEAWdKWagys61MtSawA7iwzcGWucithbTcsy6Pe",
  "key11": "2nug9hUdBnhd39AX9xmnAMQJngoh9c6XuEZchQNKVFzjB4R1Xg2fGLnn37Gk4vRTUsvg77dinnocJEDhRHjeumST",
  "key12": "4eQVAPSqsWHGUw5jSStiYHKT9XhpZJdFcU2hpCXCZuWjdhsb2nd7AkQtny6xMLiKeUx6GJ2cwavxDTXNxv8hBvPu",
  "key13": "2GLGqDEAKRxbtDUhwrs3S2Rysmw9Et5dMZHhaXDMBsUcNZotWmRCRDzqSMT3YfcZy4TqitnVfAnBw6R391H4u8BR",
  "key14": "4FKpqa1eJpkicapZruK99SZr5P84mnGb6XWRHvyGqynR5Xsdx9iJUNPKspiSXAMz2hXVMu4CbR9ZYXUfVcxkUPAf",
  "key15": "3WThFagiGrimt7DecdgvnaJKjr8LwhXh7EXaVWpgDPwoSFretFS7eBUSVpSaQ3rokuCGtfHfTbxiPmB3uxLyDPpA",
  "key16": "2R3TcfDD2NmLbxFVpgcYLayWGupkxEE6LMZGN99Z7QYQwk94DjupY24BKAfkXXUJ5UDiR1kgbP42QeCQLsG2tiNG",
  "key17": "uCAUScLTyZsXDzgV8L2AhNMWToEbaJAk5gvb2Qv2QxpBvj6wL5pnxYnzJwPXKnSSEp6HQSocNfeUw9tuynniAfr",
  "key18": "4ig1Nmnwq2Np54NvwM11HM158ap9411JytQSHVFm1s1PstZ29oN9PqkeQGQJ8G8sDcnjWY2DTqwJi64c6sPd9eFX",
  "key19": "34VcJqeo6YTiLD1NQuR8MyMLqKLeLyaWCcbqFKPbiC2VbctuS73FHr5GGuj15VQPmqXdDTnWPFvMFhpsy2Cy99L9",
  "key20": "5Z8GYfom54hiBSq94myGVrQZaGqbJqondkYnrjS92rQTv1feGa5fijm2mUfbx7vdd8GJLNy1yvspbng8PZfKnMJq",
  "key21": "3Pm7fmGgvoAcj2fsCzAbyCyMz8fWiGLejbu2JGdR1JKw9A2nmwxAHyrhwRMHjtU5omJ2ibGFrXg78PLVD9iTeJpL",
  "key22": "4WEyNms7HHGGxJoEhdMT1BJe3Cv9fDwVJeN9PkbpxKg3nxK91Cthv31SwErp6DcMkVuxiFTvmJNgypo1DjVAMRU8",
  "key23": "2xhszHq6ifaAnKnyNCuSbg4L6B2ivj5d72Dwbg7fXn2WCpm5hCYZW1CtbG5eiZsg472JApws3NyUyGfoBmz1bam3",
  "key24": "2a3vdwm39WFu35DmEkE6iTyFYTCFnBE83dKNGkexY6wB4pqnVcgCEjFz4BCFsixEByBzeRidKmaXWVo1esJhQXaU",
  "key25": "5mKtksK8J59XRsUyPfaDvdAQDFN2FhT8PwYHe6BxTnDz7AkEWRKN7Eb4xBh2uyinCdgm6LqJuX4Z1rr63VzBW96m",
  "key26": "2Jett87wmSFZHyZGwQJMieVGR1zaZx99JRF7rPTRuWQps9qtG3gWHhbc3TKmcczbXyNu7tRonnyCddj45nH6f1jT",
  "key27": "2GVHJXGrZCE2C9wGAtW64k5pq1BRJ9G1YxkjAsHWjzAKkc7Vr8FrH7Znbmmy8NS5z8imHYN2x1MmmCczMkp9KhQH",
  "key28": "5ZS6YmKqvcNj37JHJeiU9WtCr8FdigthCKix68CPVFks7QTu2bXYrUydY7in1PJtuC4yt5EEknsCcZkrY9MCo1ki",
  "key29": "2ERqeb5sLAxuZ57w148GFYyY3bqPKJPsEgcNCCmeAvEJZs2xHJts7maJWN5QqS2cNB88Wp13yVZ2yWqQp7rPpKwq",
  "key30": "3opYgSmNfc9AQi5sR777pJ3WrzeESrBkDskzWG1mTLttjPqMT3dQXrkZMhAnVzf1rNrFBmeTpPaJA5bDhYhzPhtN",
  "key31": "2N6JN3ETaDbNTGe2wymZ9o1J77wefVcBhaDe6syDoyNHLHfPPhsdE7ZofQ9TaHCJFczS7vKVwMiRubUZoJa3WoZR",
  "key32": "3yAsnZ7BztNa3H95Bfz82dEPQSRxKWA6uMEK1wcz9LwYbc8areTcL7a2VHdVL6rzVuex5xcmVgZ4zKeQmcxKaCf2",
  "key33": "5Q8RpdNEnCKpcKKkWwYtjsqnVTodknnLFLFMdHmFs1mkCpthWQoGq7xfokTd2xSNs4NEo9FikfJFBVoTLjcUrxwj",
  "key34": "GosTJ3QcqF3qC9oBRhdzeLkbjRk6jH1srPcE89K94hZ9K6FkeUGjXzZ3CMNUNoPosyx5j3PcbpK7EHbKHexLhrb",
  "key35": "3JQARdoU7EAZzxZfY3msMtS4oWGTCqpHenXFz2yKd2LGQQHhAT8qirDQ2HBqViRMrSo9nKAfeeAA7JEzrZNJVneR",
  "key36": "28EX8NDR1pwivQWeuxdcWFCbt4LiTfiU1aMMc3XnSSf97TPBbJ8eLTKs5MBpjGw3nvgX8KMNjJ8EddDdAaHNB6pd",
  "key37": "a6VHCcv5J5fvbMgdTSbrEnhgvhrVd6bH689SwtWpsGmvQFgZx4WqRL4AvQMQAxocGb2Ai23k8y2dBZEEStUNpQ3",
  "key38": "2R6cuCSGmDkTmZCfXx4buaQpjaG6ZDdbBrQZWe9F64CywkVRuNucbzp5XTHqGCNVdgKjiqMnED3aoccusVrko9sR",
  "key39": "3fDwRXzCzvP1gSKFmT9UhntkMLCVYcfoY7TnjJ5SW9GEeJggAALpTCWQuCZjyHyyRs1uJEk3NNkuWiXXuBpdpWmD",
  "key40": "2mPj4k7S9hXwZ6UTTdWv2JRFtNmRRDE8QBCLuaXiavpZofmJFD5eEJJDBn3NLoCYN6PZMNhLh99ubETD1u6jXvfd",
  "key41": "5sk4vdddBgqi4Zt7WQitDGxDt4chs1QN4kxMH8rRV8ctHJxZxLVdpiB6UctpmFGPDL3gdEx4z9HedFUL7cjNnDwy",
  "key42": "3wXtvpbtbxVMCKdLQmmqiBkXCuwQdaZPcd8y1GvbhRt8ofnFB66ve5JxThdRHSkn8CbgNDEcqXPKhS1kn5JmGYYs",
  "key43": "2TiH3pVTJAmQTurEhDyscB9hcRQyiuTfHwkP4jfueEZ9mXPCDHEycCQQ1BB1JafRAim3eXDy4rbyuhCFFE3SwXZy",
  "key44": "2inZFdxAbLkbKpsd76HV9yU6L7bsji5iQRzT7W7r4oyRRynKUnXnvMyoemfvXW2CwP7h8Y2qrGZ54gSw4MpoRQgT",
  "key45": "62y1eWQsuxdhbvzbXDQetZpt24yAUnEfiGXHMyrYHiHT6h6RSEakDcpnhhVnxLSZt7Yu1J2APqJjprbATuaTu5Sb",
  "key46": "4fGd9QqZxKd9po7iWJPdyrzfNZRrZKJiDtANQychRCY7T87XJKTMxKajPPgWGEgUYF3h3tBVMLwLKjXQBjfG4qKp"
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
