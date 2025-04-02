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
    "gmxGVpJSdxsNfnPfrYcqxc8Zi7PzpXKCHg1bwhdfHyLbizyLyH9XT5tHpH8g5w1Nt14WYpQQmxULoUFCW7myY4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yqDhFQeB3Ps2fgUtsRNr3jDQDPZ171DwaN62ZDLHZghx4nUCwLtDs7ZRh9QWzxP7VRucE1ZYzwSGfjgAsEwTvF",
  "key1": "4HtFTQXmizkSQywqfyVSZ8RrPQ8XmKtLTw9f3DdcdtbmP6mX44LE3yjk7LSeDiRGscEUHv6MgPRHg4kkKiaq8U4m",
  "key2": "2546jmauWdoJ9n4bCVpHeKrKDYBX3PwuhHPkayRxjKakYJut3WfSsYy4HX7nfKbGrajZKznwzQvNdoX9G3htsVCS",
  "key3": "4TA9sp5AanSqRefi7qPUMdcbNHyDaf3sTFJ1ibCwqz3Loi7FhKuAgTBQw8sdcFySArzG6e1faU9wTikTprwpoj2F",
  "key4": "62nsnJ5hKXYxUUXiC8tTVibVyU2xnFFuZjhLi6uERZhKjTVG6XGeFQJzrAz5TYuxaT4yfjsY7rmYxsV83Ui6SRAb",
  "key5": "5xeRj3ALa5EasPagKLhVKFmgXytRrfXYGN4qBwBTYCfmrJndeh9r6mvZzUB9qjuHRrLzqyer1FD9sF3qQz4Mk9mF",
  "key6": "ZRWygxhJ63ki9g5JhPNLNP8CKT4dRxWKCuGgngKbnHHTwzmBJBPsDNec68RoKiWJkCvvnUMTMBGo8sxfcMLy4B6",
  "key7": "JHmiLYbMStrXk518iQftefEoD6PS3WBAJ76scZtd9Wud6ZkKHQ5rJnRSHEt2efBKAQAWkwRH6qDQFpQTjTrRaoK",
  "key8": "3jNJnb4NkSSBz7nfHCYgkdKHiK6pSAD9S8gWkTAaZeEiDwZvzRB8sHQ6sKALHig9bW47DP4vCUFhsMBoM4zmNG3a",
  "key9": "4A5HTYodRZmDV89qYQU6ZH9A2XF42eZXmNuFJpnvxHGT9PUSS98DHT7zt4LrGcH9HtFdrgy1hV334kDRcUFfu1gJ",
  "key10": "2A5i753bKyxSqBWVHebEdc5VLXRmgHDjs5bBnqpFiMGpFJ8BXkQ2iAxLjixkZQJnrEC6DWLSvcLY11KDF9yortZj",
  "key11": "5bnRPHzBjXHp5cLY3cC1USH5ce37bPMu3UzcAqjZDf3MPR21u6azjUrcV5nRjZVasL5DAhgSn68owzNKVoEYfR4h",
  "key12": "4xYuYZZqB2ZLtejNiq2TSWLgZbAB1Cx5R6Db3Th4i4zRBbe39Wv2S1hKy5ed6pBT1fUyq5Qctt8RGRK2RzvbnnyH",
  "key13": "5EtjPRgY8KPxrwuu8TqDxXuA1D9pFiGZ3c8b44vTF8if3ihLpJELoFvFBLKBHUY2K2C8hFjjj2TUi5FKfzAAR2Fd",
  "key14": "eRpgskJwJxtJnea4RD9mdW2Ct1ckD9ycj9eDEtyA4Po2GLkFjS2tCmykLsQaNRj3EDxAdnCY8mvw7b24QdXmtF2",
  "key15": "5FvtYETGK4LPuwEbz1etkmDgyoDHv7QuCU9xBJ7h3ipAB9gHuh25iGxnAcHUFLNKTN3PdpnUi41ESiUu6dvqpYms",
  "key16": "JJx4bJA5BDjye54UCE851yE5eKJHhwtemsR36bWN3xAULqXfsoWXNieDgHkbpbWyekDENQg19QAGHuTHdk5yg2u",
  "key17": "2y4rA1tb58DwZTgBc6zouctupXFB8CRZTQiVC7vPGMESprDt49sa4CkU5fUWv9ozK5T3wc8MjerQ3xsf6Jf4NkzJ",
  "key18": "22wsSzeP7W79rzCTMoTCwUT2nPJCXPQKNMb1zkyhRewnabZuUqFWSGG6XVzud6JRHa9YvZavBts63PWhp55E8jCo",
  "key19": "5P4J3pXYiAPnK8P7ggndRUazgQmk9FkjnpYCLLLr2T4dNbuhnVeSs3T9Y944oyWKTdWRUKVszdtBgf7DbReQ9FCL",
  "key20": "57PrDeV55ARKNCjKUGV1FDeTyP4Ptth62vc1HBvG3xXnTZj9hhU6CSyAAgNF8KDb44QxpL1JbKexJx9EKR1837ZN",
  "key21": "2xAdS94ff4us1YNcWCfDJ9v6CC8APLEGuGANtKkuoqnFpGtKNrTnBhoXqtFxaxRTHDNrRuPfqfkPfRvyCMxEdSYX",
  "key22": "3JezGmRXMaobhaM6kzqby1FyBKs1vsA98XDfVMV5rxPWgthBTfYHRrdmuse4g6FNNHTogQbXtGGcfTF6JojtfNcT",
  "key23": "5bWX6EiYPfhSwWpayckKxuqBnBWQ2BxZ7GrZkGG8Ey5L8c1F2U1o8zxdt9Yu9fiNhHrAPgxB5ZwQihmcLpw11hWy",
  "key24": "4DpwZF661o25UCSWWyTjLQEq6YWp6AdLf4ut5obCMDaEvkpbdmyN6GTL5dMG7WJLhwFQUbTknuBU3UB8Lkh3K6P1"
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
