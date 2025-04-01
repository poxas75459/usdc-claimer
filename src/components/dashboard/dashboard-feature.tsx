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
    "5nfM5Fhg4Xei4UYqTzkJJY3tN27dwwPE3p32DBSzffn2sGFr7XWs9rb8REWaQUuD4Eo8xHZTsXsRxCxJHdMNu3Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJS7ZLbahvxLjev6dwiUqJwMjHSkUseFqpZ6Cpyzff5czSRoYacq8hku1Jm45xwA2xNtBWKzSFQoWVrEtCtPhCN",
  "key1": "4rCr4F5V7WxcogdZHdgW6TVsfBd5cXkPobgj8RwoFN7XbbECpxVyZXVyZUg2ZP9arPoQM1WN4yeZu8E4UdaDA4ie",
  "key2": "gDZ8C2mHoUjvCuwXLs4u6ysRJNjWB4q9zprd7LHYzrwNXAcVuZt38HY3rSyVop2QzgmzuH4PBZpmGrQBwAqN1e2",
  "key3": "2CtJNBeA2X34271yJZtt8Tpc7vVXoo3vBQdAirZZfHy8nQfrjFKGQAQEuKcaJ1aDKkQnrACLE4CReAS6Q2eYx7N5",
  "key4": "5NgwYzDcqsqxTi9CdHQA6sCK2BH2aFresBPZ9PKFHqrAfopPFi9HZBNwgXpH2XhoJVz5gFByNTpZ68CgwVYi75Yo",
  "key5": "5PMpgcopSreiQr4tWe3SGsJDxNm8mBUkipRRpiSv4b8ncjWugnKkENugVS9TVRck6zyekh37jkffzCZSRha2hmft",
  "key6": "2s5ijDNw9ZUGj91E8ZckjubSk58Za9P9GjYjvVwL2hksA4geKuhrkYDRBr7Ntrcy3vR6ya49CicN3X2LEAcAdZe1",
  "key7": "3mszztxRkgRUZFNk68jM1iaepHgXFFU6CsEhxR8E5SKn6DH98vjeRbdy5WvVjt4uPQdG2UkbgmJMdNyZjLrrKA1u",
  "key8": "3BXjdFewL8GJCrcUthuGKoWjmdMB1jb1HEFKq2taZv9t8qKqrkMetDkeKMgoke5nSTZka3HLgvqEAMiXeDCBWQJ2",
  "key9": "7LQC3Gj15XWp3yHstRkNoQKwnbMW3o8d4u4GEm42UwRAZseYCqEhK6pbFnmYiQtamqo1VQWgUcMHVeCFFf74Mno",
  "key10": "5KkTf1jQvZMnCugxRZCXZYNg9zs4TEH1zPko9aM9GVFcBtJrhNKdaEwq1R9Kkr9itcwDp2TwNgdMCJiYoxCA6wze",
  "key11": "2Lp3eUeRumMdZzMoWo9EfgDxCTz2saQJq1EmCLDhBsNGZECEbnYEJgGZDwtwkaZZnnnT5JxwGQpzz1T4gRu4BjsT",
  "key12": "5hzbfRC7iyUdtqmA3kDtAdMUgyax5twheuiL4wBLpwgYBLzCgafxRrTPqC4XFQma6ZJkkXvXojnzfpTZDCtHXPXp",
  "key13": "3KwLdLfuptJSiUh9dJ1wovm22okk32hdiiuw9ggwZ6TwXc4w2qWvegwkN9uHiN1hqSu9fFUqaaEUYB4gowUdeg4W",
  "key14": "63r1HPYtnpkVgNXdBCpZBAakjvWU2ffnLUMZ3Y8S11P2FbM85aM4U6Ba5VqsF4f4XPMhE7tvgoZJjCi7LrQsmG4S",
  "key15": "5qYB87aQvNTcAcFh64YNThpVUAKWGs3C1Hi1fhkdzZerVciDriB5EZdmpWTyqvxA8ueHqe7SfkpRGy58M29asbYR",
  "key16": "3A9mq6m47fcZsubiZEjazRcEa7jaUD3ncRpDDt8aJFHRghVp9TF7jc9SiiiGdwAJGvLshEteVizbMKb7NGMtEdtZ",
  "key17": "4CJUBdecwhGJ8ox5ZZ8AqPFzTWDvVgn1ADYxVAX5m5pabRUsjhtduBS1rt2gDEa4i69WriJ2HjWcWwuodtuMCqmg",
  "key18": "3yKz8BSm5a5kRqznHnevFZuCMXKVcYp2YTncWfAdewbRbN75e9aDLkfyfj2FqBRM911ZoTSJvTewM1gCkMZmUevX",
  "key19": "2jkYwRbjPXX3jhhAvgz4aLqR6XCyQ3N7QxeUhrmtEpUtUTVKF5acaKhuxAAyV3h28wKkmPuokBxPpAU1TWNPLGsg",
  "key20": "3hjRCuxQHrWETVms99ixNiWWodV3sYjJUVTf9eLc3qxZDTkAJHEqa6cigz8WxkLBYD6xPAiMgR5hoA4So4yAPwET",
  "key21": "3bFrPK8rnDNutnkTKzfVqF8K5W1wruvzw3uwn6KeKBNRnnVRbqcnjeWcKFaNfQA4wNswqD7DRTweFTvPdGsqRFtt",
  "key22": "38Hdhs5xPvMdUx4NHkqJDki5sJhdPaU86E4GPGRhUqKvi8NBGFxXBupPsNf9rnMtzpn5V82pBsaotqDQQEHa7J7z",
  "key23": "5fSDdPEbmbaG28hdebhpjhczAoZP4tmH9ub1wCVe8EQMkvc89qZbexvYKEgkMuyR4S8yjc464BcP4ggA46F7xn4t",
  "key24": "9BNTxmusSKpQihATbv2aYoRsK6ziJ6tAqhuDUjAuLDYHERzcrgccndwLd4S7ArqoiiJt63pa1ntpCCE4UhHcxQJ",
  "key25": "4em8BFUGWfRpXWZHRmEXvPW9w8dytUnPNEJcvMYBcGHwhw2ToPviSiiEJaDXH2d7qfWaCe43mJ13JGntsSdTjDhP",
  "key26": "esJsPDPXFmVRjadPTfEa9ErEU8Q3YNJxwymdQcTgXhDrAKTuWZCqQpvyNvfWK9rbLWotoDVj2tLnwhUJxCYhzBo",
  "key27": "4oKPXA6ktw6besjdBtvKjZ4CZhcWZ4de45LhZHq2obFQAkSAS9KHDTsg13tuwThuG7H4Bie9cvVyM3brQrSfYQtD",
  "key28": "53U5AMJFw83BUG4igopiqfZYQu57iwsQNrqSY41CyF4sR4nr2YX9Lm2j7nQDxVmFGGxxoosPvb4PTMyB2cfyGrDK",
  "key29": "5oEmqXwFNJJ7SKkJZono4qFf7gRvo4tFSpNjzQCbwxTG3ty9PYSSy1qj2rpK1i3naKbz7uLt6dMeCoDABGWwwLHr",
  "key30": "2mf3f1E7Hcei2WMSTg9yuG3QLWHdd3KhxzqdrbHfVXTA5UkasBdJEMbdV5iCktaF141xq9BpPWpS84BrkhRqNuDK",
  "key31": "UkCZR8kMNmYTq4rWDAmNsdCK5svJDZjBJqFVp7daTYpexyKoxxyHEcfKxoPGPxXJ9GCuNSbLE5LkktYn1UpLuGt",
  "key32": "HyST7jrzsS9BGAmBzg19saVEbQQEw3SPneAf95C79MejeuwzLLNYR99wqQxrsu1EnLTBPAoVtUGaZCWBhGe3boe",
  "key33": "65AGZh5naU2DKXzff8zqb14ip7JouVgVw7a6jzvhBbrKZvNPG25mr7XHd7sVAD6PexL86vZJJV4kB2C8JNmD2zuh",
  "key34": "52665xTggDWajR5h289ZwHYGWa9G62C7Z5u3GokU6EVH63S6pDb1rd3hpczBPLHY5XhJGdusqpXh88sbcC12mQzM",
  "key35": "5ifrvWPiK5e9wDrtvQKf5vDVKzdheiSCjBT9wouCFknsw3PZvKT7TP2sTpbnMERe4xNB1JxLL6H36GwRqjNX6XD4",
  "key36": "gKCgw1xi5MyvoLoPNZxFiBCNw2FX3nEmk9D4892tY8cpczXctsqAMtLEoHBJvrPP2BNV6v8roiWnsxBnfhf3bkG",
  "key37": "3j9s69oGqjfxf8Zwa2YnwgGCrESVDYdN2NEmqLy5fDy5R11cQAbbWg62HPMy8QZAPFmA4SQhXXCwSJsWfJ6q4GFA",
  "key38": "34bhz8PPLzWLi5ku1iCNSwcpXUmQY52CUdjrDcbABKgzou54k2PBGSF1RePTUmYLVUf1zuP9P8EtMGCgv21fnvsa",
  "key39": "2GgVnBdYjQwzQMNBjcieQUTbded1CcXD4BbrnWJ31Dneqc8JUfef3TGdc3tAE5bw8mpCRbC2TUC8VG9sBxoCiUXP",
  "key40": "2ESfptLXmwhWa6h7tP7LgSzASsxfyFwm42rrQ96C9wzqAvAaeaWJy6HpXEHwqbNUixKjPuKixUYSaQVEiLK8Mqoy",
  "key41": "ovb1qNNXbPPBdxBmZBCqv1kF5XATA3vYsURduVcRs9HJtg8KqmWbXqwGnN7EL2ddrVW9qiZwAoygqkQRRj7cRcG",
  "key42": "2J6wiTDyNGvizBXcnstPxgoLrmD74ZVziWyXM7YVZRPG8Ygv9bGX6CvSiUFL4v44z1hPaJc5CDs3QDAX7BXELjW3",
  "key43": "2sgYSgJ6eEbd2PHRxf1nrb6rDBVQx3eyE5wCtjQfy97fMvLeGPS6YExEgE6DMoaDriLpZxnq4WeGYDKE3sJpVXeu",
  "key44": "2J1nTjShHoAAM733iLAznPuUen3uKYK4FFRVbBbry8Pj9tCJUEzfhkt8DMFSLaStXKjecsqqsmRrwNJjZwRRUMxN",
  "key45": "39vmemPyknJXi3E7hcKkUajZXoBZFc8AVJd67ejZRSm13TJBb2LP4T5Ndvbpb8D4ja2YF8rrndgCj2B6WdGrF14o",
  "key46": "vKkXjSX9z24eWXq5ZsFPmVsgxusqWAfSGA3fQRG6MrYQFBzrVFxjrFniuXe3dxy8mNbxK2CRtrN6Av1zcLqfqto",
  "key47": "5MxDRAxZzQU8YSn3WiTHZdqsQcHp5mxvFK9piM8Qam4WJTzHApKntaR3NDsi1uWqURMheUqjNxddE7ynyjhBFpYM"
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
