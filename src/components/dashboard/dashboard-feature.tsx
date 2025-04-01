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
    "2z9z1Mf85nxv6AbmTGVnbXFkiFfs8NZyf2NhifCdKQgzDSYukfGBTtQVX7CB4DBxHo41xxxGkAUghnhjtKLULFbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rnTXWdLgdn2wQsE15Pvqcv8fthrYgPpMK3GHedAAxF7cRxxZJScBhLDsqXr8Ux3Sf6vQLdYCnj57dCh8oXCeph",
  "key1": "2pCNe41CnQBSJTQSjCFbZGVnN8wr8YQNVe2mV3c7qix7QSXCjH5Fz4DqyzJXuQJmU4ar7Dw93wjGAN5nnadWstyn",
  "key2": "z2h9sWVZ6KKjTQAuagoDEMTrFtx1C6EbxkdXsnk8Yjs8LCd2vvT2Uid49XPktQT4sVAMzUUHgxKseavrBbudXP2",
  "key3": "2dMa6KbWz4AQUbgvT2TjoSsfyHZqXTUAdQjmNannCyGscbhCj39xBYc6BdpE69W9821Kt6SYcH3WSvB9L9Mc3cEK",
  "key4": "5PZrS4BArHGaNWiJM7VE4z7fqeA7RH4un2rz2u2bwvrat7DTBmU14DnaGzsEdrFMCAsLv457nE8AizNZ5f8WfDET",
  "key5": "3cViPigTT3ErhVpGmBYKqiWvGA8vT53FvNRNJMujkbedM3MJTvgpJAqFFx5TzWPgdJ2KzZ7f91E8A5Mo14VX5TNA",
  "key6": "5iJpGmhKm6qb6ekHABbkQkJ33JbuzSfXPMiXuQjrkZVPUupBo7RRZ8eCVvb4Fehj3oc32ARCiARtGHLVeTF6nAh8",
  "key7": "3KHYqGjTZwX6qUdLsfLq68APVsXQqRTtBUJgrDDsS8jGynz86bagbQoT7DfNV6Ro31AJxFJ2R7vbWgwSG4MXZRwZ",
  "key8": "4A7ChVweqwDRYJrd1RPtvPrJtJUFUf1vaHJZ7qj5LyHbwecAWkA4gNwxg6wgbgQhXQySXHpjjkLQPFo3UGympYwW",
  "key9": "3dWT4kMWWpa4DQuen7v5XRxiF7nAnnBUJrC33S7CP4AazUJsd49n2J366mVzS12SDGxcMPnWqQRzQ9phpHJ3DUFt",
  "key10": "5gP6GufUWJs3NYYcU6YfY77KQ1rpWj5TvbZ6e5AJyfcNjJsQhcvCTbKd3t63eeVb2MEZvgQzsKHVCeYELPgnn9GS",
  "key11": "2ZbRPhNZSs5ctqDSPmhV6ur2HYwAGt3VNrusfHyfKfUk9F3xMUW8jaZAyENtwLVKD22Ka5frpvc4qDFotv33MXoz",
  "key12": "3MCrijkgQYefnAYnSHRESVEQAP1RAEvsTRsao4RcVHFevZws1nt2JNMsRCVoE8R9hTUyHREE1Zze1NMxUavaa82W",
  "key13": "5R9bmMLHG5pZLPs2vFDYFPNnjRtpoEnKcf8ndWLmE6N4L57sWJcKvrSu2gLuzMeo4UrzDpe34zcwGjiMXeCCKbXY",
  "key14": "5kFeuyixoUYZgcWzQFG8MhPN5phBciwjQEkEveSja82WgLbYpk3gwwfH3aRFZros9spzfpzwFUn3EroxeUMG95Xt",
  "key15": "fwtR4FkCLUYRFBzhFSsX2fYSffukDmCfxRXCPrn3zHo9kNAjJZYs9FHHMsDdzkhvyKoYZaE1qcm1BHxes6MXQie",
  "key16": "2QPJGrfKuSN3mYh3Ji7d3s4wbvk4Mr4bPwwdPdUbgGoZQx67gT15Qsp5DP9AzH58nNMUxEdf9a6wzvRoGf9cKE6g",
  "key17": "2FmieEDrWyrLcyxrrcA74NotftCdxN2ZgwbFsGSh559r1aFgjRiE5H9oHiVG2XTKLCYaB2dAyeMqGdknMg1ceBfK",
  "key18": "5KzMMvH7cDgKigL9HJQCiozuJZpeo4AsxWnECDtRJ95u7HtL58b2tXiHk5UGgUkpp92RhzqMqcY1nyS5janp1qd4",
  "key19": "3osNhJAK9joRrz2Ezj5tgZ134yGGRpSynkFX39PjaVFdBwBPMHjeawMATxabVWDrhetHScEZUDo1zDaWrMsMwuiB",
  "key20": "4g3Y9pwcga7HHqEodDDEacLrVurghiQfnybeE8jjgNxjcMTH9cQQrPLdABypQxqfY2MsBc85K6Wvpt6XVegEJpo9",
  "key21": "62o8y5H1DQyaxKEieTwyZZTNVMBbVVJiVyFLMpR6dJWpQuRmfAKK3hR4MB5so9ASgbyTnSpL7GRT7Zvdcm5VrKE8",
  "key22": "4dUzgo1WafJoBmN6kPxeNJ4wcxmnFKszKT57YZC3zZCBUA1x98StPtGsfxBfNMXnHtWXDMiT5kjW1EQw68cRjvpj",
  "key23": "4ZARGLGWR2u3rAEfJHgmGht6PZo2pdFxfnF8KSUJDeZqimbTZ8mhQFqtmVYtu4PrJBN68CVo2x7tqd6xv3fT9nF9",
  "key24": "2K5bDeaVJA53SdYdMoCwzrFtTiVY1WnvAMZSeRjA8xA56hxji5K5PQxAsWVejLR2Xg8vTN6ULTx2f6Qrb1Y3Z6HH",
  "key25": "5ucMA3z1z53rmCMWeAwQNz5XGAJ4X66kMsagEEoxmugieqjip3xYJczLYVd4NotZYEHbFCehJwRJcHaNs5sSsEYA",
  "key26": "SG3SreGFnkE46HYYDyCuG7TXg3zpsk1D4UCfryKko4nukXbPV7JAKUVuyPsqSzcMtewBkn6PwcqxxR9TafZ4t2h",
  "key27": "48Szw22gjA7GPPqU7foBNV4adkTchvHT7HAnnuQqEL2nkK3tFwy94sNfEtREzGioQ4mMLA4U6a9HbZAXHKTYWWgz",
  "key28": "2PouPrCKr3qX7DMMPYof6uuTciTkgx2wMBzun4WGpkuktuz1BYowuYycK4XiXSvmkkHUWWJsDVmpCg4ehDdeYGAL",
  "key29": "3mxSw66iddU6vkQD17sCB5URC35yZVDuV9M4dsUZCKyUfXh15k23BJHvGYzcc9gnNY6nPcnUUVaTEhpPQT3n8PgN",
  "key30": "244BH1sV5y7mcqSxk7Dz5HSTDR74vvGzi4MQBs7FNDHZFzBf1Wsj9aURAMpaZXH16jvCec6mSpA1YoZMLPnh5Tzp",
  "key31": "2JLrbtFUdEcdYjsHE63RcnFGeRNyW1J5R52NhYA4Uk1HeqD2JcgRcpwGTVvuWkaKxS9Wanp5fmKuCU9tWGjaNWxA",
  "key32": "2A5Z8kzWgBw8QaWfHt2vtHqzwA2xKAkYvcmyrFHT37AgJzgwmMtUDp7fxj915B9VUemM2sFzhao8USvfCcU8F8Nt",
  "key33": "2teUhGmgR3iqvigeW28rDo4mep9ozoiQPwTh6p4aXNKX9rwPG4zhtP8cQjtEZwhHE6j5FHTkXbX8vWVSsjwYv2dp",
  "key34": "56x4wGL3QMFmdFf7X2TJPnbCetxajGy4YQns3zAWL3gJvDCFfaEHNmbavmVutRsQPwVYFLvn3r5EgvbpY4uxscij",
  "key35": "bzewz4jY8ts8cBy6r5Mejr1m3SbWdGKkAXaRiUQS1aYwyxnbjdvoZEAq1LoqBR36aiKxNndNQp2igjqXPF7mcLG",
  "key36": "524LyQvc14URruNQ2HsSGhjzAWobpk2hF2CPo5rh9CnE1VYgafnWgRL7o9uUappoZzMXvh63MoTjQUY5CDWdzfS7",
  "key37": "56U5ANWnCFbgVBtpqvt97mUSC99qf4qFcgzaD8kajTzEDxwQ6MpiUMg42utjCFM9du3oGm4orFPd5jH3mCfW9FSC",
  "key38": "2qsTPYCmSDVCyVaFoUaPJ3nt5F13SFWCQhLnzhtySizyYmnZB9RGDP4NXR1EDFLzLepfccv1nujMeBSKYrLVNvpa",
  "key39": "3gSYkzW6Q3bZCJAMZCUQstjLF3PgqWgaZv2AKkbBCXekUk2xnWey63Y92nVX1YeYcS71yWQpnrgxn7DWQC4ojVHA",
  "key40": "2nQwD8pMQaz3LGQTgFFWmCzSbqqhz9tbuifcWpNmQvfaswqjLXfDLKMimuM5B3LdrdtEuaXHULDgqsgHpZX1TQ1y",
  "key41": "3quFSYQoEBfe8zFhTofwgKL2d2YmfMZGHpkdz5JiChxdY7wE3WjY15nNyGkSwDGTamufXLtBhLu8d9W4rGLr1cEp",
  "key42": "26XBthNU4RULPzCa3XgmjDPtSukkvhGp3rFbz9ELh3jUWwEx3p8wuyjfiFHYq94s5fovquNaZDThznFKTXzuushF",
  "key43": "5ZHpPqAVUnVvZ1KZyo3o835RSxdpEXnJwpFjBN8Kmy3aeERdSt1WRN8MbPerUV7WG6QGuoPmKgfM8mQn3sZsURjd",
  "key44": "5WhUUmeGjdcpLbzyFTypDCaiWcfzAkzqLBzHQr43qqvufywjQ3NjPRiEwiYVtd1FwFHe9h7kTkPDtvMh2NXuTcQU",
  "key45": "5m5eYJYygzAeqU2JpswcF4hEwP6FyWF1QtXJyMBhof9SSHyG6uNHH5xwFRDXJyqGgDkyio3RtRoDySJGYemQNAP8"
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
