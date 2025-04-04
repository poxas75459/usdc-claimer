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
    "5JmenGpGH18paFR7e1XrgxWt8Eh4ft5uw8PBv2i6h17EYWYTpLPFBm46AVQRfM1BujTu9MRb3PZUxaNYDrFkDVXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "seLBEmvQTR87NjpS9qFobdkLj8EhFiWQ2PyXboXtTjBvDR5qYFfgAT2UPCi5HNNdek44PLwtvTNqcqrvn1HGC4K",
  "key1": "4Wy4bjSsd1V3QaxPSbgkBxozoEFR4eDaLZj7TVQmbKRE13tEoNNW5HhjYkNbkdq9NtJD9y5sHvTzqe2XXyLWLp5x",
  "key2": "5KoaQidKkzBX36NucQDFB5b5b4CViZtXjqoJZTngk6KisqASdiLk4wh1mjsDxh1qAwzaTeekZDcB9iBqo88miEBB",
  "key3": "5SksyG5SsgrHUg3FdF3VnLbXyJeP9K1mfN55psGa3HmrT7eh19vqQf3kVeM7yqkEv7fJXdKRnTwGUJvVdx2F3ong",
  "key4": "2QP9uAQpB7LybZ2fb85iKyjnGsgjNTj2kuFT1nPX4DUGRMx2FxxYjTM73VxKWF2FQRjHJt7Evcd6AVKTutSmJGTt",
  "key5": "6pnq1NS9P6mx4G4Bkqspt2TAFjNVAgEcWba1XWDNYQ3RFbQt2RVTT9CoV9AQikp5zBjFPHRKVJLDDDdwAAQraN9",
  "key6": "3edeF8LJfGxaPPLD8nm1for9eSSimMN3ggQneTHDrikzG3ehhMB7qo99WC8WF7o2FXvtMJALkQYwzfxZBbZdRh4j",
  "key7": "5HQWnVCPvGBDfDkWDye2o6Vnw6kbGGavdaetMmDbHFwRTQFFeA2dH8w5cgyPWGGmtmYgpeYReiJzHZaqcsH3fZqT",
  "key8": "3Jy7Gqbefbgofxhvf7gZvoz9pjQwSVLjDkbWFZ1o1P7FNPURCFvq5DhWZGDA1TxDnwd4abYPSroSGMjV6pTXZYUj",
  "key9": "5NAmhtJv6uy7uTZkpfmB42KSk2RVEKbtxoDsHuvqmQWmukmxzKqHCRZpVbU487qaykPvNRKN1YS5ymH3Y9uWrXkL",
  "key10": "2wrKhZxm6sL8MEmwZ9vxGdZWeCGwMWDmSQy7KGhopJTEmZYid8unWmPKsdzMuJXHrWYQsSUeHJcCGtgYDw4ENCrj",
  "key11": "Tq6sCAiJFmHQXYcoKYR2tP5NmZH4J1UxzAgrH4ZwNYJ6dsjVU1T2RQSMtTfDc5wMN3ugHdGi2WEZ9aN9yp2KyNe",
  "key12": "5D3yLUh8QYUTPS1cNjVKUzyQjs2j5wPipiWZ61ajcfSXxWcT6TXwFqSSndjmHXPEHVCbE9Ct2p2n3ACqC8jbfuwb",
  "key13": "3fZ1ZpB9ypgZ7x7QqM6v2ftxVEQP8gs653yjc6Av6cLjpXz96L4RgkmUV3n4Wfhk4hmofLpU8rsuFHXLnnuA8EnJ",
  "key14": "4i14gtQBpPV5De3UmkpgZdgLLXfToWphN2VXKJpYi8Y7Vp8VNphYGtEkNwzRCdtvp6t3nzj1neanFpw1ESGMqYTn",
  "key15": "5jESd9scAdtryrNxC2PRqUojcZ61bsdAgm9XvBusJZ78Sfb4ZGczXEfr3WrLPnFyT1w4RyWdWykJzjGh6MAkt6Zr",
  "key16": "44WzwbfQaoU3pB5B5c4W76Ysun9zse7ECppgZxQEBGtZvGCnQqZwW66ctc3S57ybrPLz17StRg6PKFiQDHuC6GjB",
  "key17": "2rAaemHjGa2G1yogqahFd4ZMTYGFznc2qYhXTHJ5vPhuoRefdDh9mQXGUrHT3qWk9bLJneUo22p7mYcU9dtfDzDP",
  "key18": "drfB2XG2ibV6hFqWaiGkD564645tpK8QcVoEeUMmr9CYCchgZbjbEqVmL2oJ5ZwvPMWgDXcRNTqHW1MSSd2fwPx",
  "key19": "3BCHfT5fZtoui3dPjAgdRNGjxscFv3z5TDSqugseC6nTodpMiY2ryXJRxs6yvjsrGWN1Qc6rRaHWrxJWq2P5BL5v",
  "key20": "4i6UZyDph5hFj6k1bDy8ZtyxJxh5AoYnXu8V6G6YTibPDzybfqFXSjaJjCaHynLbzeszbx6WVybRr6B8c3g2nbqJ",
  "key21": "5VMxqga2jsWGXzoeW2u9Jp3XTBBKDt1JfvArfXjRyo8fy7MGwV8ucUg5uVDWHy8kZHhhGUKmxGp4gu4X43RpmmjY",
  "key22": "vC5dwJrxCHyUVpL9uTuWnvmh6QDrw7xwfUHQvwyw7q5N7uZTc2Y8sXprLYgozGVBYE6kzqwUS6qCQHhZowXg3vh",
  "key23": "4V5tYadftpfoQHkftFSBrTjfHTNC9jaaxGHMgFCk5P8am446C4cyUV3j9qmt172VKueqHHiWrEoeJhm6PqN9BojG",
  "key24": "3ZFwDM3xbx2986LAeYgipMjZtxC3FsV4Ad3XEpkHBXz9J3xtebbvHMSENDningmU16TzXezyhHJ8Bt7KwwDvWGE",
  "key25": "5MftTdpTkfPYsG11Xz9qvHZpsYheKhqmXYBTM7shJcdf1nt67pVDtK2iD59grayY1y499seuyZmRvcHso51bbth2",
  "key26": "5QpnynYxyapBUZGZtmUeXJgfRgTYzXtLzbWbW7JVFzcGXx7XaSvtF4bSckEdk2KbQjLybcao5wxWNs24Nch3b3Fc",
  "key27": "8Lep5XhPaPPtxbfCk7JXosw6vJUZrAb7NMWA3M4KuisBcDMocphfF7J3Duv7VenbAaGrCffR1xBhfkoDY9jmS8Z",
  "key28": "KL1eri34Kv3ovPHRgQheyLgqP8s7fn4MvYL4sfNZuK1qXTvKKCLoG2MjNbWnkevbmpjxXAUmq4spxpfskFUEko3",
  "key29": "4jtRXe7soDt3wRsY9jUsQ7BLjnN8BQKuNfc16PqkgXfufVL1CJRtbAmJiPR545pavxxgRCGboHvZhuBr35dfLwDB",
  "key30": "4zudVhrKwZF3TwYor8Ma2dGSh84e72GwPtvWtDoMH3E9MnfU9HhtdCiyToFHSGgX67CvV3gZ7oyaMoNnnHYGQNwU",
  "key31": "k4vLoNrBXzrKhWz5ugBSexrQyttgMpUSX8TZeCZbcSrH89HBm4vByrfjtqjfH47M446P71B57nha9Mmd5vHwVHC",
  "key32": "2rqUf9T47DryTt4PxJQZVQEscB38yr7pnGfUyoAuPYoN1mZfBCyZ5QtSDaFjZnSEd3wG6dfuucSetLwjapSeaS7B",
  "key33": "5ib7c2FMA5nGNZvz7nDFPcC5xZrGappDegbKqFS4d7EoXiEkqWtQBNRLneRL6BpiPuA45DgReUE66Y1YVxTgouwe",
  "key34": "3z59CY4nwir2Zo2vkiDb9ozFe2WHLY6wpSbEycqakidYVRJZTfoRY1aBJbFwcKexMUq9tzwi3LHhQHFeA81KwTHr",
  "key35": "bmUNKbe7rxSmfquuMbwv1i7JDFz5tEVLCfBqexNerPaW9akc1SiVVkx3wi6UaPJytsKTPkg9VGPWxBn3swP8nEh",
  "key36": "2kD3KcVNFDf1XT2Bw6uHnZ4GEDm29mFbsaaBNsQYt8Ck8jJCnnk2Pz6uCeZUURugWTJ59GrRjLG7wo9DbJ69zsBs",
  "key37": "3oP5GYFX2BVESWFtfe72FN4vmJa4ty5r4BKFDwLTCVxzNVyJYFgGpb7wPAPdK4pJYo3qaJ4554RrsbR3CPcdPADj",
  "key38": "hf8eGEjsWnVe5SRhttBhQh5ZgKFicuU76c3PcviBPxHwm9GkXBDcSmyL1ZqsGxnifD7BsH7gz1hFcfrJLyrCrGH",
  "key39": "4DZ3xum44usKsNLzsNLzanHYvHLjD56q7kvMUMNnKyagJjHskMYg63LWbcFmoZJgqxLVcNKga7LM3jg3hfJpmpg3",
  "key40": "Qr3Gx5kwqh51utDZNdqywuWwNDpLJiKaWdbauNAhKQRw9oVzrpqg4dbUKXy28kvuvogkFiZ9QG2ErYV2SoEXRBT",
  "key41": "4FJ4Atnxtu2BmoEjELY3MDyEjKJfQb5k9vCBKj3GeJK1B7AupuX56oCx2QS16JjDhtkXq4nrBmN3jugRUn8sCgHp",
  "key42": "5XYL2SVy7FSM2kAw2qoLbH7Wu5eTwowoBmafNdrwiJCgF72dFgk9AVDnFw3uhx5c3hsgZ984E1XvQVSgnnAE9qTw",
  "key43": "2qzp65Weq4je7pWDws73PxpmnacgBng6NYF43gxSxRHtvuTbhXhsqwHfLuq8wRdBk1RPHvo4vBEK1eBkFzNtHzs7",
  "key44": "5Z24APEJDhumXnYvxBRMTQBjGZ3Gqq37zyymHeGGY121iPjJdAfjnxs6Uko79gsoRfE6FJhBsEuMzusMZDJ5zSqV",
  "key45": "2p6X66BbywAExDSBdDJTHx93MXyJM16NPK6Jzc7nLA9NpAosMR7KYkvkTgcdSyHS3wx5ZZm6DnWA5sGHhcnVtKGz",
  "key46": "3DWUTsagx6UWwHg2e2uvQ4bvtYXQjWwKwapQEH6TZg15xRHQByZawn62wRBTWtEdFmXY4varkuDtiegW4bE7jMSH",
  "key47": "2faLCnaTaJ1vMLyjqgfwb8EXBPnCJtVVNTBbnXGve542drD1xrdzGjqywbpx7pSRjo1Kmvh59M7xtuz3C3zPWHNF",
  "key48": "583yZbPUfuiaANni75MQ8Gj1MYaVJfp6R2B4jBLd2gE1KenUBUfKAhAppPMCCHGxZ3g8L4ydRG8kV3Lzpyr8g7LW",
  "key49": "iT3MQKcMuGTbGSfsHNPN2DVVX5sYd5CXQ9cGm2TZrzappvjJ9kfcnqRXNRVvazAexfx5cbNE1SPY5c9pDHoYbKy"
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
