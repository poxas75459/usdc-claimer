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
    "TC5a6q8DdSNRPdRKV4uUsvRCQCiLED3jsvvM9ZhGiJ9buoujPY1JZdBHzM9jqtGnjxAVM287qKn5LeHjwMnezgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvNiBfQLrp4Torccqz85Rp7PBK3Lcqh3X5Eax1n1QzrCRy5C6yeX3jnjfJL2nQBGr2tCHZMY14jKk4DUTqfGMiH",
  "key1": "3ykvohgnXvSiZZCWZC7KPWZcLH3CFtsHa3MLL7YMEmHFoyzdZ3pSrMbDgBRiA4wPDr6u7vBDm3C6kkbF3TTLbvy2",
  "key2": "47Kz6HbTEm92e5amXssMgJuqpgmurWrCruw7AeoFd6fy6429Cwi11Fi9kTizJ9QQN5cjHrKdUL8QXyxgkUsLoiRm",
  "key3": "5PqpAgsW8C5aMhLxS9ANqs4kPVXonuCykp8ZgfbyYFf12goE7WW8R1ui6qHW9Wm6DEFknAbdcGd19KD4YFq4BBhK",
  "key4": "26J8dubiQhGD6KU9gZf61Rde1b2qYzhxew23HfnZ3F9RmKZM8wk5882GenuVV537YWLmEv9v5qAKvULvDLKWxryQ",
  "key5": "wVUStcwRUxa8Fk7ubb4Dnu9F5exYX9FVDE26Pc8pZPmxE1Q3CKACcp8WY9cctoX1mhRBa5kX8Dx9NumBhC9JJLW",
  "key6": "jbyKNcpKXQH2vjzV9G2dmq4FecuVMtp7v9CbunfMiCH3JJLiSnN9hQVxF8uU2EDeB1g3BvaRDXqjzRoGhHT5zzq",
  "key7": "4BvFdaaom6ALkVBoDwMzWtPuwM1uzHYxaQyVsk6SVxgAghgeTUpboHhTPxYo7kRc6uLLMfLQDikS4R8bzjuqvakh",
  "key8": "3PahjXPR9Rx5Kidx66pAArEoU3S64Z95HqCr7HDA6Q8mH9RpsptBHucgnWeCJQ3GafvV6sxXkJhnV6Sm4DUgZnRA",
  "key9": "36xe7iXXiCEpHezYK2KXyXEFYbFr8UMH3twwDSszDruoSaxGp3jGQjPTX2Pg72SghxqGF2bZhpSEKz8xG1Ao6sjd",
  "key10": "64tmq1QGUzEe37Z7bC85882LqPWLie7b8FuWVBYHkoFqyeJ2TtSCoYb7vX9FYk42299ZFAjowVTf3fdoJxHs9dvr",
  "key11": "3rAq65mMUrpTtQegteSa5EDgZeyxL9p8NpaZ87Y3Y6Nts6aRxuTRB4ugqtKh1ZTyYfc6JmaX1tC4nbedoe2fiwKg",
  "key12": "3J77TdJB5awYoFuk35aaJQaz9hBn9W2Nn8iEJAsTHeRjbiUZAxmexkdr11Ew6Nc4EVSmAi33NNg1gxP7mHqi6ztD",
  "key13": "4agkCGX42DuFbsWoqeBk4MX8BCkFrTGhgnoaGAiZ7hAFvZST4CmnJf5iGmGCsDDuMXWWBy7922Be9NXQNq6Q2Ztj",
  "key14": "EMjGy519xDAHQDPVsYNXEnh3jD4ataA3GH251n2cDTuKDCFRyPCdAvVjE2vRcXwrn6odJt6jGbz9hV7AeMCznLH",
  "key15": "4Akga67EJSxAKW8ZmCs9sPXTXRZc6tcqp3LDWtjpufJhqRNR55DjrQp119sQn8QkmrxzoUamdfnWcpL4scmoQZqm",
  "key16": "4VEVCkVE7yyhmoNhcLWtD3YcucoUqv1vDVfNdXSrSzqZNLHMK2fEMCx91HFZFvf6jBCvNUC7dvk3AJHphH3FKEAu",
  "key17": "xcp38BqjiSSCLeWvFu4YY7nwRCkh9yqQaGP2HRCEHyHCAqMWPK37PP9mxhDo2q2eMffhQkKvVj6JZgRbXamXnqJ",
  "key18": "3cBKJvKTpPpgvn1bzZijDePgkz1NqTuoWn6bqcFNtY6j4CRJhdf1uhkzGCmvnyZgBCBYTRUMdyxSKe9WzoqsA9VF",
  "key19": "3gNv6R4NQaL3g48spKPvM8G7kRFT5iGWqHoyYX1wYg46DAnwpK9ijVdRt5wN8fP5nx9WE1vUTPqx47zR2mKSfoHM",
  "key20": "3nj5EzP7Qn63VdLUHRYv7Zj26MoX1QV9yH2KZ7rUGSyFCmHwua7NvrUgh1CidZNbN7LMiGeaYGBYx82oHzWFfo3W",
  "key21": "3JFPFHbMoAdXqrDdvUP16JHXRAyCxT7YsVBCERmeQuWp918PvP789QGJi2ZfKmviNaybgvh5VVYRfdAndP2RHrQg",
  "key22": "4eCcMtUtkv1zZDpot3TAhpVpCsRJ4fzhnX66Ey5V9RwsvZxaumyA1cn2kDQ1763Gr2BE1YLnUW5ZvxsiwbMSnZq3",
  "key23": "2LrQcqBdFnwWdNjsVcGUrxhEyL54sqBuKfM8ompwW4j8hL3SXYSy9idcPmVoYiKurhJzHM3kyUZAK1mNLp4oFLPf",
  "key24": "GJ9phKqCTUwhED5RaBxiTivtczF1dWDv1CuBZDqwVvA25W6r5GBG8U6R6mM2FSaHSPNRtrWQ4TowhTUgqwa558e",
  "key25": "2toh7QLfnWzt69MnL6Jwj5gC4XKDt7V4Tf8U7b2fQhEHzSyno9cyEBZM11HjkGm5GCdSBEwAzsTsDqNWzVhDNHo4",
  "key26": "4iLdB2Pg2Y55K1UPkErmL9crnDBQMUwt3WmjdVwCPNcMjo8yTWbthia4DU5jKqLW3bEegfwPf3hJe5d2WE7U9ZYS",
  "key27": "2MdyUnUp7AbPc8Z1rEnzvXEmp5TXKTcjN4d6g67deRhyYJLrtFwvYCiaAcg5LTgZkyGRxvSNG6QHF5sh1nUN35E",
  "key28": "2dk9Vq6PKGmeQ62AdyBG4wAXKGFAZYnA5PQPY4FBqFkAfhLRNmXx68TwHNGnrfN2kpbYyLuKLFg2XYxg6s7BVGA2",
  "key29": "22WixwiAcLsJcaerai8ba73zNYXzvAjM3NsQqBqKmnmYD4ddHmKq4Mzkt4FYRvP5u4zeud1F7AsRqjwdxdyMcYVr",
  "key30": "hD27RtXg9UwvQ7X9zXJhpWHy1fnu1kx6Nnrcc9qUFXd8Upm64gmJ4hYf87t3VAoiJoeeLasrmR9z4uBkyhHXPVy",
  "key31": "4sUe9ckfoTs6mD418W8tYitEjpwhw3TMLvH1HfDjiQfnQ1uo4BxXs4eBwySmkRxHhkahqWL6svFdbktnac7pQeK4",
  "key32": "hPaikvbkU3geXx89XKergSbk6EhUwftRHQmbR8G1p5r2cHZCzCdp7gCwY61ZMvtD1aduJNYaLzH23nD2qdg64Kz",
  "key33": "5UiHDpvuDZc3mbdrnNvvbE7UqshyFy2GXkLSEXXpY6j9NhBUBMX6G1Q7JkVqmFSMEDnFjqfJbF98SWBZQeRUrsfz",
  "key34": "p7XP8FSTqDXkXmnwfE6nqCr3DiFwmidNxGHQg6gHe5ndq31kit7ZJsifZZe7yzK45AX4w7kgthajWFiDMFRVZgw",
  "key35": "5Ggqncni2vkbKkAxyTwYfuLFzuPVJTgs8MboVx5jMJdLmCHxHRa54xgX9iMYgEanfmrJqQ2n3sDVm3DgQ2ZsP6rt",
  "key36": "3BwBDhKBmjMwnoiJcvYbNfbRxi95m6WVtXMWsnZD73hhSiaKLSQ29NERVYhRnN9hQeRiTVNRR8ce7nHymhfZt48a",
  "key37": "2PnpV9rkDRSvFgbwnV3Pn8o36VYYXCAPJicZPHucJxkq5dpYPRkzqcRMFMX4bQw6tq4hisDGXApRtfbyStAFQXr6",
  "key38": "3QHhtmRjUbGYULTRwCv5WyxLxzDXgkVA2BUB5tp1XzbM9TERQTB3s7UK1k1v1tPoskUpEXp1VBGBmpdSzuwr8mfW",
  "key39": "3CSTQUDM5rv2GGsmeinfTVDSzuZ8o31oC7wsSUb99THXgdpoJQTDX85ZBQG3USro6TqafxbpoD61yw6cogMsAf4A",
  "key40": "BrCKgPYBnt5Hv5jShUYxPN3bpzhCwP5FBicumdKGnPQqBdKbZBQ524UkPcKAJksKop2szcinRgn1vbBNeuDKhyW",
  "key41": "3uBnGcvUAUY7byULRDxbinT6XoWjH5emX1hNYExCDLJRPPXSPVJYFCLWKwJRTufmo9QwPpZakPBbqfnqxaHDqPKq",
  "key42": "4tCEB8AnNQ59HwnRkA2guELbDFk3FE3wpaFBN84fFQNaFZ6wpfUysrrQUi8yJGCkDEfJ5yu7XUTbpGXfqmMMLavn",
  "key43": "5aCG6wAauNRNEcdEpu8QU6LjDZr2Kepj7o7Ld1AcDsrT5VSqUXdwVscar6f5zodtb54ahsgXNqeZ4gjxVSmgrwpV",
  "key44": "2vbiC8ymJWJy9BymK2qXn5fYQYJEfvFTANQcYXtiKud1GyvpZjiehBXkm5NnAkFjrujsBq45ADhw3mtt1M9gi1uU",
  "key45": "wTT3WPpYkQoxgRiYXbJySv5UbAhinWUzEyZLVdncsrFfk6YHsk5WB65bXtYmbF4Mb3MHQ3y1Mj82k9tTuKsSTQR"
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
