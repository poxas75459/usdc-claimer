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
    "1CKpAK9UXxyZmULN2hUvYdyMR3BCyxfbyD7FtVn8Eqe5JZFGY7MQz2SU271N2jHk9mL8Qd2y6XtgFpcve2Ww5AQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vyZQGwJHtAQBvf3MHy7eBGeVUBnxtGqU1rEDEJWdi4FKqMvJrP1RnnfsprjEZD37FGwxxTTDJfpKZ2AEJbhvoNz",
  "key1": "EtV8DToMnH2oXX1oX3bEVDxHQrMkYvruXnvT8tGeQkRFNjQEAub7drSYYtpVMAdGao1GCWFnwv8B6oYRkeFe2Y8",
  "key2": "2wXCVRQ41xAqfaEotYihdUeG5GTpoxZp3m1C4jFZDifLL8hjxich3eyeKydxS4xRxSxaQCrP8HTATsYofSc5ySHU",
  "key3": "4HcTi5mMmU5bSdff5HEC6QQqGW2EgSygotZxjyyiD352JJgPx8QL2bNMuzMYq3QbZPQtphKP1douZxXFgRRTT6E1",
  "key4": "3sAS6GLn7JiKeJAYjPAfxKFKT98hYAPPPtaipyLhQWwpEs8oUNDxRVCTKspofvN6aDPx7zQfW3DVAk4vXzYj6jKi",
  "key5": "5HEaoi5BTK3qzuiLSGSpfDU2ZBu7MwH4YNEDGMjwyRiEqhuB6eKdptDjrqehJZhp6Cpth741DxMhRWSZy3HZFir4",
  "key6": "2babanGpxHm72D21vUe9PMLPpmwwmDZ9z2YKCB6GEG1pJmymWbUcx3URWEbPGfuJRMJd5DPtGJ3HvokudigSoJaQ",
  "key7": "3AN1HwQy8Bvvm8khi1oEzszyofwFq5e3uvs4T8U2Rr3UX5vycEJK8L5qsaqgkH9Q1EkdpQHLCPtMT2jk1DbYsGzx",
  "key8": "4HZPrPXPqmbofSW3fKUJuHFE9gZpxd4cSdz7u9Zk4psJ2pLtRHEUEcPDsW7q7bjSBYFk3RLmayN36ogR8HPr5GEe",
  "key9": "gQR9cipYPWSamrQRCDm3iTjTFTEnzWmpXaNW3ou9JEtEyAx58quZhCMVapzq8xhtX63jBxWCzxMzu5BVJ8vAnga",
  "key10": "1YRd16ijbUaiDrbk8KDrroFCZLVw9zzykEiW7fYuKvyQmgPQ7YjcwhhxfucrqJzn9FE6JiCkEsZUuADK49mV8nV",
  "key11": "2T9pZtzprd1jy5TJdZJfTBh6SR2ZszkPJ1gn31fWWm5qmykEEWgEdFitmTHpadmDff4fbcf178zRMJidMt7xGR1w",
  "key12": "bWZB5o7hDo5DUMgbBZDwFgbvD6D7pEroVPoZQqTdmciBK4FPXspspKaUFY4cWRU7tiohCcRsidxD7F23AnBYbuy",
  "key13": "2S4SEEpSpnUDB3GxTEtN1iTXNUAbf6J5BaiLFyRJRMBiSN3S6XvdX5RYTtsW23DAhr2MgqNHuCEFnyiaFRUqpwGV",
  "key14": "5HrkS7HuTzdNi9YAMRcMc8Yn2TxGLzFQAf4uHwGtNNbuugWjtvbmQ1oNbiHEX4JXad588fm9wQQg17pbg7zJCTiw",
  "key15": "21pFH8UaACxQVGB9gaRQwVaC6Gn945vSW2Dpr97pthSKF5iq73uxmgpjPLb1mGuYcPpGUes5QMYAU8d7RCRUP6JJ",
  "key16": "Rcc17QTwKb5tazbU8SodKxqiB4BsuKcmKmzwy7BJ3ygqMYV3jiC4JS2zYFSzi6DEK6u2VQCgRPB8iBrUJ9M7kfP",
  "key17": "5U3gsUDYDDV7T62mrfeacUnkpExooe4U9VTjbpY9iyuaRtqVpRg1fB8XwhV8vx4sBH42D3ifsx7Diyty7AxBhDBK",
  "key18": "4Gtu3oe6vjSpBp5CLdiw5vkrBCLAJW19e6d9WvTrKfAm5bCqWLLmjW4CKH7Aq9mY2iYETuLeGccNjQbvYSQYJi5B",
  "key19": "3b2f2aQ7yQbwxZUtPFaPCFD6gWoRC7XWhQTHmy2bbjd9m2PScDbTvXL7Xs4DkaWnSwZjKBtGJ4dePksyPDoetayx",
  "key20": "5uweB8hh2UDUurWsXesFKCCbgs2ansE6yhrVRjqoDWcVi3CE7KAfTHWAuyopKEPVafrsNETrxTUPTd1BpEaR6Akc",
  "key21": "2s1uGBfKnPJ4vES7yQiWs2AJ6rA6bc1Y53J7V2cBZqbp2bSC69feETFcWTn9fWGUCLnTBFWcT4yUMEqHVtYqdDpF",
  "key22": "52RoaUPCGoFHHPtcrj7Gf2vFJSd5EQJ6btjnBKzu11FXGHknzuLKiVMWxtagybSsdcN86e9qqHSTmeCUKWpijY7",
  "key23": "4YW8PYXySZU4MdkDtosP66C6wbnc42wbHL5szfycZepahUFQz2ofoc88b2R17b8qosVw64mjWqNcj5wu9zh2eibS",
  "key24": "2ydEvhnkaCjXzmbPUVmYvX8yAbUe91JbBQCdx9oX4S3AAnzg4mZ7BxjszqxPkbrD3y4c9zxCYCn5bW3NQfvY9K1r",
  "key25": "5hnVWY15zkbLCNrMMpLnKkc3sbcP6djZKr2PX67XhJMEFimATMx4r5C6wW9tX1k43bLAVd4HoakhYSayKU4wS6fy",
  "key26": "5cuKmKgr7JExGkXkzBUr2TCwJmXNb2WhCUowAx1TC1roCDWJPpguyVTD1Wh66aAAhedxf8erawes9txUFq29prr",
  "key27": "55ZQbJxepkMv3ZSGnrRZmxMuDD6Ludu3A1NncSbUDMF8qj4ebp1h52oioA1sNZ5MygJfnjiR9kx8goeWq1pYK8W7",
  "key28": "5vsGBEdUvqrankXmdLVZg5Zw77q5YMQnwRDa6KowQrY2UZiS6i1NbPNp3EACHGa6cikHMroM8XBHT8yJmtVVfUBG",
  "key29": "5Ft9nhzko3d2RyZQ72qjSN8iVPYFnKe26EbGE7EvNd96b8H3gGLFH3GMbVWFpH8RuDe1pGmVxag96MsBMV5uGiAB",
  "key30": "ugwh3PKAbycFUek9pPJ8wdJGZrfYwAod7Cb28ypTy1PnJCugyUL1Hoa9JBMJDMMpuJRb8VQNtcsCF8pvHJcPs1U",
  "key31": "3dKoCLcUtpHStfpK3WrzMx8uTs81uePu4KnsSBpPAbTNRHdLEWANh1XeLMfMVq7WVMitXDFkSWAQ9FSqe99PUftK",
  "key32": "YNEuLCh2sMCYQaxxwXXkFfn5fnXT3UrHyv4Ff6Mc8M2DuEGwX3sjNZqQY3EBHUP5mdqNwzkCaVAACeb6U42sczq"
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
