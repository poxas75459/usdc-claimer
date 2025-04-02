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
    "4oFjmJSeG76Zwe7QN2J7TN71A3hNw51Fh5XQfDUQNRhr98RUpSdA7UMZD8GLk5NuXbkt71t57mVMVwm134xjtBZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615MVWmgH5rRrwKnxYTZrLyFRXCRsBkXk6bGP2NpWz7HWcSGNaujyMgs1cMhWRz3cBQQH82gPRUM5ZUA5QDUnsGD",
  "key1": "2oB5Qk4aMM8kJt3yJQ9g3YtENrJFiLKLmMKRNLGTToKGp5m1r7xRsZKKrJEFebgd3kNrcPNRYcsSdtF7JJyYeR1e",
  "key2": "4NZ5ffJ1Xs4RuakX7JDATpLKp2CuRZns7gsY6ZZk4gGyftxuqY8GqvNLTmNaPUN5dcQ5bGJpP5sJuxDLRNmEfAqr",
  "key3": "KYJEMY8C5GouFiro8q6kFhqdFTRvi352FSQZhbj1GBWm3QqiPc2hUWCrJpodRCXnaPcVbJRQdxGQajtjFswsmad",
  "key4": "41e1opj45tBh398eNxaitq48ae3xmswth7BHf2PUEurEddvJGA6XEpUtq6vrCx4yKBXiJvAi1mZdXfkPUo1MeHLf",
  "key5": "3Md3E9UZgDQihmV9WX5NJzeBHYaDmhKDtWv88WL39j1TvmMEuvh3cPTczpn1VEVccGa65b4Bt2P8mjDa4eQRr31D",
  "key6": "4n3aqVEs1qpdPkhFB4vq3gze4vEnJLUrkAA4uw1rcUMv96zDxPSSAGqMYnjRzQN5YayXnCK9mvWbYGdSKk9GdnUE",
  "key7": "4B2DcUnsjYPHSJMmjQ2Pg3vcq6woDftH1yAQxCHXGi3jfAoD2ux4RkCDP2YX4gdZ4ha7NGgqDxgvUefdugXcgr29",
  "key8": "5hDCQEtaPTVYgw69YVZhSjPGerBVAayJUfSM6QGCwVHf2SoB93qA8KTM2U44LKb7NRbKrjcYzrfZWbf3qoU5fFg6",
  "key9": "3a5GihXEuDGnSMMBdZM5F3EoZ89U1Z7vHrZbZjcLQKVYT7KivuxeVdkio2UHuGUo65YabwQ7ttvYX3TGLjWMocr",
  "key10": "4x2GqB8uvCr62nioC2knFkg3yNUPqNd7RXiZ5QMwex9i6NiftkGvgCQEm1TcnWUhYt68c2MFkuXMjJD7fUtDUx25",
  "key11": "4pWBHctjQnP1fPRQR7jCKKMNPUYZ6Brtssyo3PmxDqyyNj76SwmU1mZq1aFEHzCDcQoLLa3H4qXcXq6CeEBWqJVE",
  "key12": "3E6ftDbGVxncVK2azju8pM4gAYsDGa6ZbSYjzUcemowpN9QPqXKZtLtFm6aQzaVAgUcDvKvCi1RoDhMZ545Hcgt9",
  "key13": "3no11LcTzTmvzaZDDUb1vT2bWJeUKq1J7o4Xbt1GmJYPeQ4eHAvfJkbofEpxpdhFuobXCgfgYhJY6f7C7aMq3fNW",
  "key14": "631zsQtESQRjAyPNhCeukJjmBj8M2pdjgNHhLfxgf8AAjnmvcKhGRLYFs5JzgGYDiqtLgQWfXgpBEDg4CTuizCV",
  "key15": "4y3YLAVG25bFWE41xyU1JiX851tV4PESx5LsRiAdjukXmK49Ha8aWZptnF6RwFafWoU87hD69J5fNyMtpRgaFtWn",
  "key16": "3LzNXCg2BHwmzhGjhgxujx8zSQwwz8N8fH1teRYosWvYXHHjVvtH2jjgN5vi3KFCzzYagp5zFh6YD3B1bkiDRE9J",
  "key17": "2atcY7SnE3KViJs1THjKyrWokkcBgXTQTymhhADWWpkZTY6JDrW6tfcHLJRh2iH4cCfYmeRipUposgx2rm28iXK2",
  "key18": "A6hqHKmp3xjFNxvkahNRPcAbnRJM3z4oL4VDKJu9fx2myg3KR1z3SrKyvKntGFRQWETL1ib2TyyaiFKTR1iBszo",
  "key19": "5CgUZ2RJzegrDpDk1HqZb49VTXVzAsjzbDpdVBQ3YAYwB3MMezchYimVTMJGG1QmCyzcpevgCheejSN4D4LvTaGs",
  "key20": "87QJEGxka67x8V62jj8VPiPcWuSm2yc2m7Y3nMB7pQSQNEntUtTnCeufaA1PodvtgWwyWy97EMZaYyFGXFzj7L6",
  "key21": "42Nrdb5yHz7rq8ZvDAa7Vz2Kaw6Ah7qfMsnFUdrac9HLk2dsCJK4tACTwVpq2L7GSaCocaJjqafJAzuBgSm3dika",
  "key22": "4fS7Q14gMPVBzwnhWLCm6h9SbavgEUdtXKRjEwbJdkrJPGehsHuRQfjAtjfALchAKLuTGVRP7FiFDiGEQVQt35o8",
  "key23": "4apewDqqCMCWjjcKojPLgttxWLjzu3xXsn5bryJsXmGnsN24WwvkKYrPAej8fuuzx97jVTDH7AG4CGuxtbyYFtPB",
  "key24": "vgo73mPAAy48BdD9g5DoV4G9aTKa1nFNpKCUopQTjWKv17qqvB9ydL2Cb2cCMXMWpCPmsLqH3WTbSCfBya86WYm",
  "key25": "5hRN3gB8mR9uFAqKwHfDJMcoXsBD7fbZX6Qdzdz317D7EX8tE355X7JcZPCYpbYxKqrD6WUJehS1knULj7dvRdLU",
  "key26": "Qmn6ZVcB9CSH2hxBDrQ1Mwnc3oRFQ59BWkS5KZNUhwuCDsrLo5sGSMbPkEDrRmmtn6NKR5d2XcyKh515YNejTiR",
  "key27": "47KZypi1pBSNdYgjRzhoEwBNCML5SZLVvHvwdyNP1b7hNSme3zmnSapGLmceTnaPgNC8fmHeLbTV9o3ENcXJm6o1",
  "key28": "rCWzGFaBw7c7YHcFJDZTXcQTEuqYA9dJCwwfyuSTUw1WVDRKETF4SZgm6NYHvwtk69jpTFUnEbeEwRArTS3nf1o",
  "key29": "4RgrUUDKeVvNvBP5GCEqsbdkgHisaTxyACJyBFhFYLXuj9vYwkawkcVptLHD1CzvCbj6ZcfPQfjRgiSdcYtbx9KL",
  "key30": "681hjecanyJ8oV5ig1KUZnQNdLewR3TsrB5kfuLMfAvaij75fbWXGTU7XnvjYQQY2g3oU35AsRzMjD6pip6ytcC",
  "key31": "2JnRUbMf4wamqMm33zR8mdsX2AasgbVhLLWjL5BWvvQzfk9bWtLzaoES2iLEcrUaVytU6g7JTqNpoouqE2ScFF2G",
  "key32": "4i7ntE7BNVohtKaLyp5QwFcbdL64vPTexWiRfUi55fGDSsWnwjMzhEtNBHF7LhYCLS2HDWrcZSTHgXj4GNQX77QJ",
  "key33": "2qzjtpxj9gTWbSSMbsdkxiPH9BY545YFqRb1msrxGat9Ctcaapa4XoNLUPAdQWuib6e3NnwdZvNhNJPeBJgEiuWM",
  "key34": "4Lbg4xgL7Fb3VDVnPjbKCR2EKfiuzygcrEekDmTws4TFpuukSpJrEsmtdBdWYp8hCM7XThqYgxtkRbdsp34gt6NL",
  "key35": "3MCqxPJXByYFE7a3DFbfy5BisXtA52eGzYCf1FhTZek3HQhuA2gp4DZCMgVSMXpX5cRyBwXDtBNJsVsnyfG1hW2L",
  "key36": "5pJPwSMAqjFjUkwRWsqYKQvFdbg49Apko1M36GxABHYJV6Fg5VByd35A1JJg21AY1yy5mZoZARpUrvyhBvdNDQTH",
  "key37": "TcMio6qGa7MFnGSZgTQLKG7CM3H3ouVTm1WaqxsRsmGLHdN1s3aVwuGnTx5pKhxMgfXMe1pPDM4dZCuEjXkTzhH"
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
