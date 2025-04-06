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
    "35KdENo84eXVBdHokP6Z7uJdtBMTunPqSD5tFCxrX4cZ7qnZb2voBhPjyMR6ozZbSbDHGyrUsDy3gKdub7k4RKZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b9PNYVWiTkSft9dsaSt4UTvYv3Tk9ds6Ym3LQ4HrpF8PJXZq1z6oXRynbYoKe94mK3nASfnubVyUuNwYnEkVyJD",
  "key1": "2BkVgo3rpCcze9QT84LzKk3t6FVfgw5ZpkTmNTZPdG3QXhQPrA1B5VGmQEikXCfZciuCuPR6H5F4pBto73yVZZGF",
  "key2": "2GbjYbXC1AFpEq4g7VY3DDPR3VuHF9S49T5vZaYKYAqmerFxQB9aTXpvwuYzyTBWdMogLAMrudXhiTPXMe7vHxuS",
  "key3": "3k1XZTUTCPYiUSHLwvCJZXmvXEfWq6PzMGrirmqekq4uhUwLAuCUjofsNsB6v27NkvCmwULUuqL5soNJNNHPkXqp",
  "key4": "3KxaZ2o3MuQK7MqLWaBAF6xL1cLawLEPT4KsHkJRQgb4K9ZEMccmorPvD3cT6PAWatfA7pAZLUembpKYK45jzKM2",
  "key5": "4je9SbKoCFqHMmKbacPekhVbNRa9BZvPRzuS4RXnMR6ZLms63b3FsuDav38M8TofT7xHnxcqrj4jFRWEdAMHfByF",
  "key6": "4z8LZDYvoEFWxYaTo719VK6WuKqTo5h8RCtZcGpQGWJeWd2zGHjZqTjH9qZP9M5ZmDq32gCPsVDt6RJygKRyo8DC",
  "key7": "3s5aUEND6sKM82mJHKE8QordBK3ESdx9mAmcaBusK6yaYTYSZM4wzDbsJtbotZHTo9VtCjcHmpMLkVCDfzDvBDdJ",
  "key8": "2MQy32ZWEyX2qsX3WB3eWHiSGSsxVShcTJkNPaeesMpvKE5em4M1TDJubvDdbGFFPgqaeaYF2G4ZhvQ2twjteGb6",
  "key9": "3s6Bhok4E4RepjsFm983H5mjkycFovGNbuzDxsXD65pQccwAuUhS1J5FLi7eWNto4MYx7nMGP8TtvTqPx6aAyt3d",
  "key10": "3ru4DogyjxL27kRM5zZivxTtGuehTvWrpgxAfkXkbxTCh3CqEXcrvaurGjQ3xVUqMTkgUKtTjFkqJeDQPiX1LjTX",
  "key11": "Gq6u5q3HvNsimD3jXUZoPLDPdTwvr6DJV7DCAT4VQCG1PSYk5xeCygxw6KMpjUdZyp9nNGd36FQGx3XGb1fQG4E",
  "key12": "5QSC3x6ymtNDmp57MFrFremNfi53TBvAWUxvgW6igz42U2B8fC4YnbhhLMwRdW9PgfW9A83uSsUsf7JffFCzYCdx",
  "key13": "HGk3RF6vN8prdbwZQqdHMMfjuCaRMJzqhLBCKKizq4pikDNCwyT8xeKVM7y15e3cHkByJNGCtBnCs8oSgjaj2yZ",
  "key14": "2HdiLbJx14KBKS6u1Fz5ByUf3nedSX8gymBqVpPAniWRLJY5GXo8NnQCbqyKXygvQEZ2z8oVASAfsjE8EeiwTcaZ",
  "key15": "2LvFUUfLQF2hmBJkRDmUCXDYVSGRB9YgAQQGMxLVMQgcCXcmhgbmjuTKQFE3jL2o7L5iiMwkPv62cqGxoJTNx2iX",
  "key16": "4m4tgMfgonBrS655e95BW9dmzpXaFSdMnCUUQurXm8LiyXzb73mhxtPG9KgEkjdceU67CrbiQSBvL35p9r2QsDX4",
  "key17": "2U8NWSbM5SG735ifcMayC5QDpEepsf1Cb3e4PSMtRKxhcYmJyUbhT4S5o4a9ZnixZcF9tsXkk3GMRzuifrErgJ6s",
  "key18": "4Yf6c3M89rTojnzUdQt4AyDTxdxCj2Mj4i71qR2r7WctBayDbfFSpPBmFsTnCwGgQNW4GRJpxcmvNJADxCbbPYfy",
  "key19": "2ErdaqDvbDwaGdZsd3VKyMgUegaR4d68ByHUDgV8ZjfA6Yc2AcuqRuLoYgQC1ZbnEksqKpyXx3iEXZewNJWvDZAT",
  "key20": "aFVikU1QcHFjcUedZoe8tKFBYEpRZ8VSPZ9rp4dMujbRbGx9m7w4EZxQJvAYFhYKB88HFrkheBVyteMbgt1GqWz",
  "key21": "egdPuHwqWZCZ9TXYsP1sesQpoqtu69Cmc4EqjaquWLkPZSMK6Fshmy2j132KXPj9jojMRDmLUQDwUAE5C1vTLTo",
  "key22": "34QnxbqYsXBGWe4k93ZZZgoKU6KPFZDpEBw3YDPxxQu2Yq1MozkwHRerbp3J5pNZAnyW2tMMkkRBmJzTndUVYwE6",
  "key23": "4Xnq2wQK5pDdcVxUttDYKS8gfwx1MCdn94mKcT9ZaSYc5hss2SGsjRqk2LYycn6EPYDyWug9j8WdkdCaoppwPYiJ",
  "key24": "uqqmPYLTpKLSmBvuMgEY4ZbimvhgP7kRYEtrwYxg2RDgk5bFWzeBrQ9MGQm86wZg6r6kr49TUes54iSTcLpQ2dK",
  "key25": "5ibrrEVx4gkWjzFN3J3zXdKWPqtK2wjmQ7Fe1L9xWaEhfaeKuzBpydwtnYSATLmmNvuz2BMq5MGRQCtxPcqMuw39",
  "key26": "gVW6gfUtTT9aNQM9i1yQnx2PzvPGWkkVnVnEJ9aKeCm1mmbFnMpXjZmRd62QM7fP8gnj51yfi1bgtZdnezeukUL",
  "key27": "2fXQ1aYu6hNfHAio4xhj4R62pi9nRf49jBKohJfCTQRGCUC8tjDmAx2x7jifPLpJXFFmxKL6wGEGcCqjpYKsuyz6",
  "key28": "59DFXyjycQdMgG1c7AvR3iHxuTHMm9bTK8sanS2QPoATN8iCVnQpyR6aRvADhKoGWA1J8Vmr5qBArFW9Zuz9k3UV",
  "key29": "2TADg4xm77te85aAXK3nc7REXZdPWW6tEnQQGZUQaAPJcavguEFk4qpBcyGzHpNjRcRdFsh54PVvYiqRXtaRrf19",
  "key30": "5xq8oZaBw2JtZRVJKWbpxVcYXZcgYt32bPqKUjwFqg1XpH3V6VBrvaXktPokrGhNebhejXtijGVmGQaX4zwrateb",
  "key31": "5zgcEb8FQMGpZrwBmGma3dZYHbr7XwE4e3vafYUvZ1j2AZxjr9g3CV6JzdVdouxPrPFriXCsDRN6QozKEuoeL7vV",
  "key32": "4NiLKKTDin5e4NghoBJEL7eiMtDFGg7n4rViVQx7e9gk3eptWBusYaVCgCdMpQ6qViFTJnNTsycUBYHWykTjLKZ4",
  "key33": "4fnWM8CGLahmZYKkuhsShwWCSdAfLTyjuz157pFirNEcNEUyrpUeKHF2FezfTAxd3ZxPS3ncSneZnvM2psssTPSa",
  "key34": "5cfKGNYjTVi9hps3pnJqaAF9mJTXSkrjAyaHMaoskfm5JFcwLSFwdaYw5qNVrEpDarTSkwjpwkKEbog2x7UBr5vv",
  "key35": "5HAejskPAjQST4owD2kbWZC1wgnGJGBehWe4HWp68ZDoEnYjkftkjqh1Vz8kj6bP612G1cJ6ceLMTzz4HjDfKd4U"
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
