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
    "3ySivq4yYN5EYU6LhhwemZiV1RmXrspYzbzkhunkDMgGRmrDCFwbVqgh93DfGoiYr2sFEZY91m37pgctRBQPinDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZR1vhtLwFUGjhnX71N1RG9ccTBw3ham96BY5tiWkmJp4rAc7aUXTF4QmDJhGPqt2mppGNgeu3xA24k96cwwkQDF",
  "key1": "3gikCKiHuXV4HEyQtrBQVPDTaLQGrbNZLYNKqR5PaAMMvZE1jcqYjJAdfLWo8DJZ6iynpvDVtWWjz2x38LrBQzhW",
  "key2": "3wGd7zs4yg12UEC3TxLzaVnyfto76mmCDYdGdspT3L9RPRqmNXfLEcK8MY8fp5z4nwrwy3uFZPUAJLsUkALDKxUT",
  "key3": "MSJK5G9SYoacxtn7xFcLeaq8ozB8XsaCiKYZvrRhLew7Qvm5KBqEdqmuUrVT8cJZfpkA9sPRg7TwGVRTDfyFjL4",
  "key4": "3Vyz9ErBXdF6YvHr1t3hmvC5S9KANc5oRcMbiZjTtsrUXDxuuoS1v8qMMYaLeYt281WSRsEfScVQPAf1GMYzMYe3",
  "key5": "27UgFyb9aJiYYeRMNZtjUbXezyjKHemfaAbziZ8WeCZEmDQnxZRrmrns84yWX28ZsSyGqqNKhA6QHviVo74vUYUe",
  "key6": "V8d7EZVBkL1iDSHMrL2yJSaNNRcCoUi7nWZZJA2iZj8y1hy1kDb8V1asMo5Qr9DDqNJfvNZok82qNJvqGGdXjGk",
  "key7": "rUUojv8iLPFKSkKQPt2p5Z7HDngH1GVjjL1wvn6tQhrVn2Zic7XxJDHDPV8LZLjRGe8iPVc4sGchjB6Y2cRfb71",
  "key8": "3XMF6KYRWEKCHf2EyTwq6chKKs6nA1x8Z7Gw33kUK68vhMnv4oWJMznaNZnohDwbUbTThjoVfY2FJdgJkDZXniMX",
  "key9": "57sYHCPWV9LA6E3AF6y619rJEYHsNtFtkyQ5oiaHsWd8XF6dMyM6fDZsKR1yn931Z4iupLzABsKTVptQ125bqiYL",
  "key10": "5BRoTCya5SyNgtMdwAJu6YJ6zAaYZVwp28FeSKtKa4CG2aMBUFMKFjirRcRL4p4WzjkTnepKz1EtD7bfLCcL2p3c",
  "key11": "4ZmDG4AdfW1TtqxaaLBLdTdcm8EG9cRnndrMw5KSbVQmcmYCb8jrbFfzUhCu3ZefZuka4DxpAseFdabvRMucHe7U",
  "key12": "2DGfvEkYEGTMY431hMMp3dAEyC1ioB4Av3jfbkKPbLUrhnVchysxgjSQjZ92dvHKSZKBtP6FHJzy8Xgyke75e2QB",
  "key13": "5jtATFVDSAGRqjhPG92WXadYQrzTC2D3MpUTU9pXVDEmPVjQjKVKZVkQCV6arDRLfiVXJ4yz55mgywgRaLHGwchm",
  "key14": "3oAPPNgUTtxF9SRg7dbefJtRaWGL6ozcTWzvkz6w4RvzthByCrFZyR32EDWqemEvkgt1Lug6wgTSKYXiNZg1LcPR",
  "key15": "2mUhixcsEsQXH6yNC95yAxTTogmX3XFtEEurUFBbz4tsPd5SKhR9ymLEHL1GR1khq5QP4zi79dgVAtZeBNDMikmb",
  "key16": "28KeMvWCEXo3FBc1gFS3NTETCwMfHsCK6pgJanxGuQ5SuFgwsPs7nbrgDaR6wwEx1yVVBkZNad1AqTubprTUK2s9",
  "key17": "4kzb7WCJcsbsUA3vxWJMwuiFc67vhKeDPBBKnRcA3F645yaV8Y6ng6pfCtZq1mmTRu8RnAZu72xXu4a3qih8q8wA",
  "key18": "U7LSMwNRcaiUpqdchEoriqgei5qXd6j6h293hKuiChFma1zNtttZgyWCk85biRfCzyXwXV6GJGmrGSNfacGmvoF",
  "key19": "2PQ17UA9X6BG9MojAjtjJTo775GhG62ZGUCTj3CQFZKtVokVu3KbZ1ZWf4RihVKzsi7F1G8wiXKbeQ3gkftfxJ8Z",
  "key20": "2ezZw9FKWj5L1xWWLxsQia4Z38xLHf8Brp7BQk1acMGZrygMESw6ebeNDLcet7Pojfx4NH2M5AWjsYcTewDFwEuU",
  "key21": "2FqeUL3D6QtWS85vNQFjqKAza4uRnBkbSdTQVnM3TytngjyD7TQAiv8AqLoMNgLM4Yga6qrBMVbRWEtySVMQTPb5",
  "key22": "ymzXyVBT3YKKNnwN4j2CN1Xr9gFfDpmDNjoNYmzrDBVy1E5yJUMd9UmnaXtqrdDujN3qb9TKsQh3NHy3pPjandc",
  "key23": "5AZqoFMNMx1CrsDrZxCYkuhmAgns565jMfMMwT6dnJAeJo8GyRjKuLNrxP7hdUQKrknQMbzDFscFJaDnkMGtA6p5",
  "key24": "EnYPuNLf1BwUPVAA2TyNRMGuh8abAZ6EnkUrHCN5pZJdtgUan4oS2WMVrm6mjvUMNvhSvesrEmg6GZDSvoxpeEV",
  "key25": "2Mfyc4b45NkHQhyA8cYkjzh7Dz6MdGnTiMvGe2WHa4A3tPUSqnhYsUPJwZQzFdtnFsHHpe3PZSBwRKT5ky429UYS",
  "key26": "4upmaASAtXMjuesV4VXe8kmw3t4Z6FDPvZHVrswr5V6EoqGW1vrYLHrVQRMAFAqaSp7jhyT3KkyTXb9u33krWLx2",
  "key27": "4WzPDnKXA5jD9ZrU5KCJnovnWtySo8BAkkGHfKPM6ob9xTjmTN1qmmXRzNnjzv7kCcLy81yoKBHoPvMAyuRCJW6q",
  "key28": "57Dz1uwJBgT6c8D6QJAEW7Fz9xXun5YiB717t9AJvXNfaTeF5rhTUCZBH7GPDPodtA1FqjYL1Roc8WujaRPPViMV",
  "key29": "37XwhJ7tbZMVMquDXRKNj8ZMAs4zXFtGWQUzGNk5xE5VAdsSRQre68hc5wxszAfde1dHKNjfD8ZEH2eU4jRqqeYV",
  "key30": "3AmQCSnuG81Gmr4NCtMru6VfUvCkhdEm1Qcn52x7tn8K4iGqNaJkLMaiDFbfFdR6dgcGrz5xC5br8pnLPMkze8QR",
  "key31": "rBFGEkgTF2o6aaGj9idEZY7ycxsNvMFERS1FEnh3hEnKJStjGho62gwLfAQnKzhzMVtsvRiHHj2dYnNyJuZXvqW",
  "key32": "2dAkz7qyouSSPxRdXm8nGPbC1ZPrjHurKvPZRKmWhuTCqUufmHoWzEtbwB1iB6fdpK2sBu6QeYgfNZZeRje1AFyR",
  "key33": "2f9Sk4ZNs1c6NY66bu2YuWZYkGtPdBhA6FftryUuAn8fvuoNSiJFLzYyu4MATuzDCkwodwf4rfhxNKGpSYWiP3Ss",
  "key34": "49z1yGCoDFHf6g6QnADAdeAJNmhRAYpFKojMM2YA7ejyV4xAr9QsjijmdY7adVDAVmLqLd55Dj8WhKetshZdLuS3",
  "key35": "41cjJi7ikmpkY3UzFhGzS4mBMmBKBnhQnafmu71FuoCvT8kNg3ieHg8iuy22XRj8uBH5vUZTTrhBe2N5Nc71JuR6",
  "key36": "hucwB5wfZD47FdqwQvfinHCVTZpZrAzHZVrY4BfBT9t33KpfQouFihfKeDocoNGo2PCHrVPqm1zzFbEjiyn8FFK",
  "key37": "3z6izVAbs7YWeeJq3hvpkoHcWjqHnZT5bzjnT3YZ843V1DqwYBMqvRiPJY4WhD2SzpR9gwJSZa2aDopSMD712J8Z",
  "key38": "cifMad2dYzZPD7RvTeorzpfSggaanim92nn8SwGS7bDp7BP6P7Xm4XkHJmVW29efU2hyi68pVHP7JBFRbihvwDJ",
  "key39": "48yEAhoV3gJtusmcgM2zxP2KdSknkrsYB3n9HCbo71fbpziXRJpeePK96y97i3oS7K6NNxNLPgb9RWvSdS3Bmhia"
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
