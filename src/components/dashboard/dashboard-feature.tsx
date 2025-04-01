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
    "2YrmZ1ovN4XYy6zwFp7wYiCw3f6r5KCwJWiESHARXMYCqJr7Guj6riHJEo4j9Ze8UzkvTfU2YAU4op4NWyrL3P9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCFM49S9CfctociRVwT2rVNTGe3xcU5mvgFW4LC27W6F4g8oWswBKq3HNizEkmRftrsK31ztCDkNbmW22Gnixtr",
  "key1": "3ejTbDXY6w4ZKscdkHg3e9keNyC9KxqoSe9cNWDRjv8yh5x1tigPeNoDeApb5ZxjrfKAVUsoL1dTnDNXX7wNipn7",
  "key2": "51DkHkQm1rqutL2EpnQNv81NDBa9yNiBx4vYQxBi7YvnuiYXDr18NTABPNBvq6eF5rd5qiCeA7rxyLmQN1AdeKxE",
  "key3": "4h3ecqLmRfnUurVP9D8Hp6Byn4FLZ8k1FARPUnwAXJsnCZGCT9BVdiPVRqV43jfGsjGbRfkhhtXnfd27JXmryQyU",
  "key4": "4a5dBBaYYsTUamTHpTJhECq3teyhWzt8zA9zrLprWwWuHR9cGJkL4hqNQfQjuVLvY6UJKia4wasqr3S8nJEJVKPj",
  "key5": "jCvuswmUpNLcibDb1PpJDbXx632QnYDj8SH8o2KNQZpCwFXgo4DembJ9S6Et9Ynjbp7PhAgJr67dT8T6fGAL3kh",
  "key6": "65kX5Hw9ivQsh7TxBo1QisAWtiXfZzULe97v7d8NeixSCRumHC1uQotLHot6RgSV1doxvSwbYpTZy26P7XevcCXf",
  "key7": "41sXva9aGUvUuoBD2SKLoJqccTPuyBBpBmohxTpEev1S2ZyEkLYSPUEwSkCuAorhq4z4KcnkxnArQSJaNHySGhp1",
  "key8": "2mxLkDit8zZCQn3VjnumbfRdEP2NCFZWPX7m19YqubyPo5MfnMKxUcQk7YpFiLqkFrF3jxZJcYjmUugHrUubviWK",
  "key9": "3Ut92mFCYozrHhYssg9Dk9gJSwLnqLqJHYZTTCNQvtbq4trUxVyW5As2yzLAdnK2ppUhUde1HcDoWSftrB1RK3vZ",
  "key10": "DcvAVLrTzBfaDZvAB7e7ecbWyDAmyxy8EArgJib2dFCu92MzC89ifo4myooQ46GaU4NKBbG1X5dnFf28J9pSfGR",
  "key11": "32faAwJwuaG21nEHbyEMeAHhVcaT2asygWSagQw9ZrvL5JxAZBS7scUKDDJFgmHiegFsQ6BFocZ6SJorBpG76aow",
  "key12": "ooBnB6b53y4iCEvi5zqidUCwcB6vNWofgC7m2DPa4kpGcjguJXirZe38TbnSCYLwVbiJkNT92c1CidjFt8kRDG2",
  "key13": "4d71v8xZFQenFXNzwtntCbAsYg41KZem3EfDPXt3nKix3XHFCzkZXEP8pxJto9e12EFcQ86VKJocs4yRKXUfn157",
  "key14": "5uys3YLSYdkEcGAYbrRkWekfWpbBszK2t2ajTQaASd2bZyutkX375Q6UXtJ9xDGn5AuQVk1HLrV9bBYPpq3yfJvw",
  "key15": "31APe2Yzao2nRKJVoY8UpjXBhg9Gnv5oeBfe5PfUfv7bDpEv8xBmFGbZQUGKyQpWc9zf4FXtVh8wh2DbRTgH9AkS",
  "key16": "2J7hzQG9dDijMvh2Tqe46PXpu9oUcgDMps1hpYUebm1RNbxfzf7hUnct8HzfVMw8jwKxDoGtkgyZYrYNtrDUqyyn",
  "key17": "3dZLNrKLsR2NsYKk2g3wci9LutJ8ANvgXp6G6MJ1i8rVEmUa4tiyq4nEtdBBv2UdaLfXLVdPZ5btithHXzErd2CG",
  "key18": "4MYQn1iWdrsxS6Dq7HvozyeWY2k1ytumqg6uEVMu7fTnq7hWgpQFAW3pjf6QxV97gt6ggQoDhXNYbVJoSBEjBqPD",
  "key19": "5b31owXdtWM5iWfKN5mvRu6rFPhPfVTrvr7UV1WYTcR88eHnu2XKKkHEWamDbAsmYRR4mA4DqzJAgpmwx5FFh8wU",
  "key20": "BDnmcmnaAkYxWuQUxCii6JNbeM3gnF4nrypCHv1HfXv2jgZS5e5SkLRHnvLjUtmbeb7D4wTjNa4vsTgrHNUy2cx",
  "key21": "3rgTqcz1MMo7r9dD1mQyJqaQc3kBoHF4yBVmo43wiMhSBvRBXq9jEpR54vPmQkt5KjiG88wtUhdtXJtnyMfWeZG5",
  "key22": "5vG1r9cQVMCFLn9DhhvW2zSga4PYtoUiZ47iQmJPZzwKq78T2MvgSvcQmsPN6U5MRz2X2RGnyZMgXQAVFLgTWiGz",
  "key23": "3xbn4ucRTC8tMsQhiwZyTpAHH95Ehopxq37pqz4wVa6wMbtfseMrsXRzyB6w1zTbeqBbUDG79kyy9pQXCCSuRjZK",
  "key24": "5cPDggrj4CCdwNGuf9RUBVtFTFofbwwV3FCowcVSLcYukAxFD1xsWSKzGVFJY7Cg95cFT3iwaHhJkjgzSLLCGiEc",
  "key25": "2CEajNwfpXk9LZLEuEw7sCrgp5PvLmC5kjn7w6HAxg87Gbwivn3rrx2EtQ2GWuC5qZA6qR1MP9tADeuTRLnouHsp",
  "key26": "5KkjXjzt5ztduS2p8p8mwbb8zSZjHit9SJtm8cxsWJauv82GEwrZqeCB4e5HzkoBzi6UzrGoDoCK1pjC2S331uDk",
  "key27": "XFefMduWf2FQE2zWrX4smwUXeoKaRHP5DK1dSLrFYHEozdnV6qtHCiyNXtrnezQXDgCVQcLeRmYUNK8Su71GpGX",
  "key28": "8ERShQpF3wwGUNGThje4eYiQjDo5HNMXkAZhXz3ymkvc5S95hL6zT6x8mky4YYb7Ew4ZXjkYG38t6hcG2eeV8LT",
  "key29": "2har1cLre9Vzyg2qNGqtKnLjyfHUzyt7x4ws9iuePb5rni3k2pQ7o4bWVxTQ8um2xxkvhi8AS9gwevy8xjhLyfLq",
  "key30": "32hTPKqs7ncQ9Qa8JbTw9sZqzJb8igPEajCR4fWkybP6SkBGJgywbp76Y96EmtuNBRMqk5HePVi51fqHcKMMnaw1",
  "key31": "BLtUWWnyd9WpGKGem5nVPsL7TS6756izSdFPwbZuCkJRyKcZJ1PcHdha23hmmu2i9v26vVSXma2oJdy7zDG1FBz",
  "key32": "4uQtHxqL2qi3fbQNcbKAsZahhZmez2ExQ5GQD6YhhP5zC1A1ScyTtjxnCrGTvK2SPkyXAvaCTMgtKHUGxny3vzBe",
  "key33": "5gYWr7icECazP58pfuY4ipjpwhCA46szrcpKJWDqtCjXQhShB79BHw7xgYsj7gRDC9BCkZrzhs6itBRFLCzBjLae",
  "key34": "2DCWkjEQqpdBybaZSqoMnNhaRJRxrb5xNdCMAYCASwZqSfTVqSVYAgn1DotxWcQtnmy4L8kWFKdGrC72myy4NrGS",
  "key35": "NXuAbZnVXiR4jikySy84T1z5BfotkHuN2791LGra9kSvct3T2AzQDiGZc51BLaf7r1HThhHiyruoMfXofbJxJcA",
  "key36": "61DSh8bbSLSTAvKeDJGWj79EGhc8m2gNrCNe7b22DfPBdm97pEtJsJVe7eTjSP2g9w9WXob5Wc2MQwvPqe2edfv9",
  "key37": "5Q2tJCzqysEGBFJ6jaobkXnsvAxeiuWxdpAfmZ82BYtLH8dVQHdBUK3gxLDQLJ7XQ5VZ5NFaLmbFXqLU4hY22kTb",
  "key38": "2oiFRk6ic8jjKK7pURXi8DdSDp8MYtfjqrqjxNX7bLvu6RaxCmfG3YDct7CsxDLU7fiK59bGrvfVAJLbb77LbgDL",
  "key39": "3np9fKM97gdKSJ8CJabSySCWJjrcPAouw6igfeJjgFNASDv85JXbkBck2k9wrvw1qYGQtimGxhiV6Za7UWwkDyWs",
  "key40": "ZepERBTyeEstQoc1xUpppyJzx7i3wEQavRTLx3GmZunGQvikxjXe7wK42kLJiT7LuGLJuuWwkTKFpi4yNpjLHiw",
  "key41": "4c4tYa4vXmaWU6wCBRcuAKs8D7gijVBNLrurMV9y8RaapnZfcQVd8L6DRH5hz6HYkYy8HfzFQDc5y3LAGg2UsPft",
  "key42": "4AT1gd1RQWcEQvEeCtyMQRMqW9tQVoDScERwB3q1UzfuRJQ3He5AA3A1LJbaAGouTtCpNQhwqVC7fosYVCsCb6Jt",
  "key43": "4RevVZUheJQDikn6YsvCuXhhSuiXqG6ukC7iq1NXm4xNERj36nZZzw2SBdEZwmCJRA3zW2manHUj8d3JcdRb5rKS",
  "key44": "xDfTihFpWLEdVDbUoPz9VxyP7DxhpRFLD6VRihbNWUcoEBoyUuhMpng2gmoeXeRBq4bB69U13z9P8hAP6bRPRQU",
  "key45": "viMUxPn4Fx2rBNLnWPnmX8rYjXwU9tA8uQcJtoJywAh3TVr6Dh5su3mEm6bfMYtcCtxtVqgCuCGwn7ZrzWZ7sBh"
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
