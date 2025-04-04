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
    "3vUD6n33u5gyeiBD1Vrx4v7u1jYvyuEJMebbYMzjhtZj99NvLo3AfWCDG7rHJkoesWikDPQaWiUoM5b2nPG7tJWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cRz9MJKcW7GZ9hLhmRFVVWNxyVT8RLv25Fg7haLhLWcJ7BGsq9raiP7eTqaF2J2t6cGCTnV1qH9DEVwtTY7WyR2",
  "key1": "4YTgSVoFM9f6k59kk6PftA8CER6VN6pXc5su8qumXwPERFX3YJj1YHtgEUmVDid1zGLXdWRE3Kty8svthkN1J1GL",
  "key2": "3Hn3eE2Hj4Dwzs9UepPn9QNdBhJrcbb2gUy9B2y3BMg1Ef9qA61JDUWmomX9X4oeB7zmPibHLLQW4MxWHU9iafZZ",
  "key3": "4dMz9ZEAH1aV5c2YMvidSw3B8XppYZwSbWcy6mT9cV3Dcvws5Ew756KV1vWwLsmFwC8DZawn73AUdp6EmHXnJDAM",
  "key4": "QvRsHG1WSBsneVfgsdSTA5oUTry6sdtY1ZtJnk9sss2VZJSCmLnnbxJ5iv9vdvZU6Qgp7Day9wPaPEtLqhrxK1d",
  "key5": "4uSN7myDJUcgfPCueWd3Kx6wziwDPJ9tX4kjGRpJUkzcng6yksh6ebUcM8R5SbnMDCqbg4Udip79sM3Wou9DpgWN",
  "key6": "2WEcz25gTeSYbBMXtVS9m3XmBtRjK5Kteu2t7DarvDEAZQ5qkPbdP8RWVRnmys1nPdmYMRiUw4suGmb7aVMtnXph",
  "key7": "yhgScnNykPF2672dVkkzokKc4UuQy983cfBxdhvTJnr4dHZsaFcdNqZXZV12g6juYMenNaXRzobePwrPrpRsnub",
  "key8": "5ikhC48ke1BvBynyuibjdzK6WyyyZmYhxPVAR6By5Qv3bunPWR1znfYqe4JMiHcadBAYk8NyXCnt3KcABx5bMtrT",
  "key9": "5rr7zZ4ibXKJRAjoM1DtUStR3qfRXVnhJPMgDYZcwzyKy36XxXVEh34aCdeyTSnTXLiE3QC3Fsf35X33of38kczL",
  "key10": "4MrbioCtYfnV83z9rgWfw9Tw3vDH6MEFSPj2hoaAh5Jjp4uZYUz4YQ4GnJD2sC3w93QmyjjB3jtKkZrF4Cv4b7U8",
  "key11": "44Yczqc1RWaixDTVtj7LQ3pbebqC2YcLhpyLVv6QM8fxFnhbAPpW7VmUFRVaZDb4Dr9AKYUfnLTchkcTyscNS34A",
  "key12": "4FB6yPedhbP4wRnPReNKvxVwc3HWtgpZVsot9qng2xxQSbmN1gb3yuu3xY1TURjQg77KzV5tPcAuKUS4xv1FVoiR",
  "key13": "2e8vGJ4qwKHqyDEUswd4bNwu6LAUhwZv29gDBCeYCCAMAWQAERiVxCZix9gUTjcL9qx7j7Nb9CuDeN1zNzVMRxu1",
  "key14": "2XLH1eMr2MkYW6RiqgbxCmzM9SPrfqvXf4Lyz417s2uR8nHNVgMG8LTEmu644hArysk1jUzB5z6rEk1eQc7cpQzt",
  "key15": "3eB763LjyJacUL4AH7nBzGw4tQEKfsGVA2NsbgHtYHa4odYhSmETY84wHQUgfn1Q2ocjusx5fXuW12UKw1DCXzwh",
  "key16": "3tknpGUWdErmMSTD7RFq4ozxNEiz8LVz32tRLZxQgoMYCx1QJTTSbTt6mpnUYT6Gn3gJBUJm6dfEuaS53VhpnFer",
  "key17": "5qn7g2hEGZo6f8jpi5KMRnL2ZzEaT5dvGSsQJugxu2iroxYLeUKVh9tCUAjRKTUyLp1UihjBAvkU15waLT7ExR3w",
  "key18": "5MkHDdfo1fb3itCxgFSrRQJ5jQ2jiiGzRKh9zJvWsywHk9tkAAoz8t1He7k5e85sJjMRWNfZevUj6HASuvq2jbBy",
  "key19": "eKvrBJo11j9XogpwvQVRnPE8hoKnxM5eg1M9adLfEVUPSmeyXG1dzB18Krcu4s6p7NANTqhspQiEV53xAJehxZe",
  "key20": "3eAYxwDETfp5LBEqxf3NxUqbyoCY4umWyAg45YVN5YmRtTXVaLAGMtHc1rvJrFrfJwP1MbjuVhhs7ZxFmajuz3Ub",
  "key21": "228h4HeAF1BZUX8cexHVwZiTnmzgmZHxAE8EQCawuvaVfjfPz8yhLs8onK2tfvDY1xYSWjyPZTNEUXR3newNeNDj",
  "key22": "312KwePs6DacPNWdXgkuffquaWH78cmiwDWHsWbCbsatU7cvLJ5n5puRYcqADKAk35cisPiL8fefNZmpzSwh7TVu",
  "key23": "4cM7RNoBred6MfLXHJNNKjWJQusRxcD5woYCV5GMwPeE6mgkmDCQ5om6thSqoZPDk2fGEgTu2i4cxiLUh2Ti4R7X",
  "key24": "2HEPFZE8rbpLRr4Ao1SWLX8VXHxATUUc3mfd284wBAoxqikKP4kKSU1msTpeuvZLCiUeTbUbJqz2xSk3Zexi3FYS",
  "key25": "5uzjoKKqApuCKjKED7dfoEUn2GUCDANRVNHP5zHZvbp9G2xBr5kBdWLWHVJc6NUgcLk9BHE2GVqqibt9ZvZhPUkT",
  "key26": "u7eC4AXTVBjMjKzVMPUtg4NmwbkGZLUrYR7c1Tg8VLatyRuu8hgdKHvo5dw8uipFD8V4BkMRC7TDuWUWszbuoyg",
  "key27": "3JP9P3JoyPuSuDSwZJ6MkAbriTuVzUFxwJ3LmEyp3QtxN8RumAbPziPxh1G8n8Rsw3mRezh77Pj4N5NV31ckuxT4",
  "key28": "wf8kP1XtewCCLstAJVAjTy7sRECGgeivBbBReCTLPs91B3NS7LyVM82NyuhmBCruGKLprqMKD5p6uFN4C9NkPnC",
  "key29": "3omJM6CxvECEgXktQzR3SSPvBjtCE7NdJsCnvYiAvWvd3e8cduaPSxe7W2JW86S75BbYJdZujbF5mVDjLtPU4mDX",
  "key30": "4B48paqpadTHu5KZ1PWNE4j9p8sqpswuvoJm2svFjKT7ZagHURMcQDtJQ3pXyJnjhgW6GK7iiQfHeiJi6cS64SYr",
  "key31": "4ZpCJwzmUD8dh9a27u54EWzuGsZGVP1yUGHYhJsjKAa5TAZVo9NehtSyYp6roUc9U3QEzivrCikGG5RN4hGDaNFg"
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
