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
    "3TTvzaULgbcbpw2Lc38PVZpVa8UbXeyjBLZv7rYkJtwcUtbqs89yutYFynty5noBFGtpE4wqQKLyM27Rh5pzpfxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ftmLfm8iGx4FfZhqpo4uUvjnPD8TezEvJDrxDNz9Jmazmv8Meag1zqwHYDkvCBwffQbUfyzcV2GrkqTAUBTmj6",
  "key1": "2SjFQ4gmokZEe2yTBY7xvLJWYTktuDzMGUZuEcZr5WUY7XkX6MkLi4JvoZLvyx9uR26QhPyAND6ZAMBTuxduTcsr",
  "key2": "6WnpZJvo4MWAC8jokrXekgG2gWb7kKgQHxggdJPtAiavicb5WAuLf2tec6P4BvWJpKNNFerXYGifnXc6Ddob8bp",
  "key3": "5q3eJ56JQA5BcRBcjKwXNYJj2pZShnyLeNzAAaEbTQBLnyrfxFm6fAnRMHJG3FS3guiSAvSa8W1KLDASP4yhog9H",
  "key4": "56tkHxCQc3dd3nvN1jnUQQgYQPBnxW6t41yjU5x44GAa2CWAC4uJhEPsWpNicw1GL2hxcNeaUBANBw2pAAhhEDVN",
  "key5": "4jrtvMgQVEmjjbxD1BVoJvCqgkZjseCuWYcSRriFZpN3S6W69jNy5Gbzpeuf17WdzxWr45RzA6mkw8hQuWvNF8ij",
  "key6": "4tWAJRtx6qBmCLBLvFhbANCnazp3fdHUDd11KBfezdX16PpSdrfzvnBuVX284argXKvGdvnuECv7tC4BqXUZv3xZ",
  "key7": "nFG9Kt14XmZiSAWVryo7nK76H9BbPfCeEtHYPn7PNWPpjErJ33Zpm7sJ8WGBeNGAwxgYKep7bq44dVLz1DU3JVZ",
  "key8": "2ZJW1Rc8Aj4VZFfuw26yeNdveBDVr35d2Pp6ieBBCLx7oofKDbE3R9to9CGXYmkduHvWiBccV9LoHgLmuKK7s559",
  "key9": "5zhnfgvzZt8hsZYvqdroAULEVzR57soSyCvY9pwQm1FzFLZBANMzd5t2sGL2NEVViHYqAMxPmo3etMZoaVkd8TAv",
  "key10": "2fioJjEGNJnpsUyKSVqKosuRS4x3srK1iG7XdaRhnhyKaRBCPnVSoGh9VUpK2KdHPvk3DNXLGYzLmChV7ukZ1nau",
  "key11": "33Qhad7uQvC6vvzZyasoCmcB9WTps1rLQ2rHt83fapmqcrS6DLhfULRCJxQ8K28HeDcPwzRdEtGJ3jHoLTrcmh3y",
  "key12": "qEQuPXCEx181qgmrT8xHBVFSh17qY58sH5Ub91XzB4VR3TedXmT9E1SX86ADFhEfRPXVFYxCfW97Aqe8s41hTtN",
  "key13": "2SSzFgzgJCXMbWtyvxtcGyYyeEUZ7N1npyYyMVZnFiMNMgtnGfM1YsBV3yyftB5e8xcokLNg9867iKMjSgcNCMFY",
  "key14": "3dtniJuzY6yEKcqgSkFinVjYJUFkKS24av2pfEFqhgv7SwiC98AfTisreJneMjaMrhECCQTc8gUYdCn4G2M3yf7K",
  "key15": "3gLyJ3PzhC5yDE3dWWXefTvWKd3RyvrgYxdnVmzM1sF3rYQXa92jpN4wtEKKx6okBSXP8FiQobvNCcCJBtJMxyKF",
  "key16": "2UYckaG7Q7aM5gbZJoWM2ovod1Z3a3NgXmA49r67mwNxhXvjzgu6CjiZxoGLG8hVCsnDREWeekJb542PJ65aSVdS",
  "key17": "4WqNNR64D5jKneiiWBky7Wd4Ed3zGyZn7cAHtWJr9RKbEAsbmhFaEfuNUSs7tdHS4uQumY3Ufamoy8tmZ87vzUiA",
  "key18": "3kv4ocAy5TGsRpor56mv4nWAx6ytKnMfC9zEN5UYBzyNdfiii4g75Qxk9XiYEBN4cEUjYgXe8zRvBScNTTjCiYoV",
  "key19": "2Uw8Pjp7fxFwEwnzVBtYozwWxih8L5Qre8V6HFn6QDgTz59BazVDZ1NzRj39oZa7SUaVJ1EmrMpMKswq8g7vhc57",
  "key20": "GbRftFhVhPWXJjLo3GAZBeGFjkKQQNHctVUgmSBJATCKoBDUqHPMMT65WHSx8pLXsDoUjqfUnVJy4c2NKCN93EP",
  "key21": "4PTmmXJcBVEzqgJs9TPwqjBHH16uVF67E3vRqsMzVbFTwBSrwxrRZ2T788jwQZAmWEvBcb1xRrMa2ycT7mJ1SxB9",
  "key22": "2bjXN3GAJxBNAm362XoJzHE6ZYJCWaKKkEWPRe7oLoWJbHUTj5jMB4WKpTYvWTafzLBwr9NpD9JYYdWXUVcqkXUB",
  "key23": "3iwrjAdG8yAPKdtSznxbCo7oWR9zHrsdfbzbUP9TuYL8iUsMNF3SJaSEJ13qtkLqtzhXmSy56aMqNdZ7Cw4SENPb",
  "key24": "42Nj4P7KJAZdu65zoFdUphX8YEjMh1NHW4FaHUQj3LuwTP9RZ3nnqVEcoZddYLSZ7TYZMDygzQKRF5Mu1fP7J5sh",
  "key25": "23JsYR4pNMafgzs9YCwnUa6Liu8RZRAuDXkKUfsSNFBJndVHaomS1Gbs3RfB7Mv86v4AaeFemknnsymXSnF3MwLQ",
  "key26": "45svM6159L6EbAmvRfvXfcZsfBdF1LkSEsnQeAsK5PvidUeqRFi8cFaExoWMeuXM36Bcb1HxeMeG9cnXd8XwCSkm",
  "key27": "5FdPf4c4M7fg7T1UBsrK2edUePNq2GzmQqGf8D7figmhracBVpEucmSpch9gFnTLRC9p2NiCZbT37ktSMG2zFnJi",
  "key28": "3SMSmvfoVKgGhoEaCYC9ryVFK6sPBCS3rZqi8BsLsCmtiEKCq3sr11VJ3RcCBhNEuCeRViWLgvjaoxYdtN1aZwy2",
  "key29": "31kU28ue5DWuoVegiRhnv92YGE5Tjf4jah62W7RuuzXKQo9tJBkzHBzkuy6p1fovyGg1fo1ZeVxHHoJifbwQwXfP",
  "key30": "59NV3D9bj1SMubZBbmXa6U2nYH61es2udhkkDvjrrRqtqpuxjvBNers4gdrZqzNps8M4XXEq2cBnu2czJYwJHujB",
  "key31": "wrXfgWUrAicPbKf1SAsQ1rAbtMj4Rzy7L6bKSB82n5vvS2QU38ySwEWv1kRYwZs9i3oSWLWKAX44HEfyhYAMQmp",
  "key32": "4csbU82taunArpTap44iizhMs3gTS7dQ7yt7CjXCexnE27VcgryryY9Se5pitEXZzmQzsLv3VME7MJ4RHtzBunAU",
  "key33": "4GZpqfF9NBh2JxLMBMTTkPp51QS4PFs4D9JYBY7RdtD5aGcm9nQX8MzELKQQRxUJGujSruUdua6qaRA3tTVLj11U",
  "key34": "5wpnnQZnyFLZQrtxLYoED5Vheq6RPEWUXjqbPKFnxCUcmHC8ED3ggGUKR4vqKDmKBXzFxLGEnpZ9JtXUTtrAubBk",
  "key35": "3BEE7Zq8fR7LzHhjKnzGDU2DTVNKcQdPXZ4QLu3Pceo8NWgeZDV4KrUwNmDbJNZjt68fi6EZ1SafyCh91vZkoizb",
  "key36": "4HK1PchKvPC1YWNkKK83RCpHS3iocNcDVhSvhvKUacY7wRpPd2uuZUxue7UU1hdmv4TF6nJMzp2PxZVo9eU7uUti",
  "key37": "4EKJGhSYTpGWvBnBqAhQGK4q4GFMrB4jZ5RE1NBc5DLHdeLbnnuxyZ9jnGrFQYqbV9E3CLY9qvCDn8hvKdRgQb8f",
  "key38": "2tuJUeBXb8bx9o1pA7CiJizCvPx3noXsggKsosUdgDeo6Qyg1hcHw1Ka4KY8hxN6LGBQy9ypFivgMDgfxfAvhZM4",
  "key39": "3neZQJEymBiauhh5XMCqgZ7RjBp6pg7ow7UtXo3FWgEEYinKodNQviW3pwsq45oyCZZV61HdiRxtpQp6DpsghVyT",
  "key40": "3Y6NrNLjoBXr1XEfhQgQ45sauKiR7hfWSgg7KeiMksoRdxUX7rjsQjHFe6dNffUtrvFB8NnBVPwxEBrLifutqNF6",
  "key41": "8Qzhc7XDXf6Dm4XW2JkWrCjuCNuZckrQSBjtA77BVUVZe5YfNha17UwVK8fdMRtRX8Pf15vWPsRQs3RcbTt6YY1",
  "key42": "2gHa88F7xhTmEQxENm8Frg2qMYhn3GMKHm6Dttp4AiC3AkP8eTFXg2TfEc57SRXmRWfBbW1WYddtwAwoWCLw4dpg",
  "key43": "2QNXCmt9QLPfxYBQ5eYk5jfqMwhJw1XEDXA86hfzG1ZvnxF5QrwAA5z3UGwYMSAwDmpttFuRawQWrkNgFftwuSbR",
  "key44": "4XxVHkPt9XT7hhzK73KNxw4o6Fqj47Ph5y3r2h7wP7XkzwxpLJc3fe6u784Ek9aDpYPsJ2ejaxYcx5AxDUHgaBvb"
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
