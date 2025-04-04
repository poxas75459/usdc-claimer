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
    "4DMsrq8ssijvYEAGWFTBwiNEekMKZpbgXDkNar5tWkaeRjn8e15NNsNTfsWp36em2tBYWBKgcmnuP5LjwTyUi6VF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45BYm2N6m9EGqFZY5zwGTE1h2u7dMSPC9AQqY8YgYzTm1bb8AJRNBoCezBzq3RoX4fQnSDJjiwvD9hrmhyyW6XzP",
  "key1": "4tKRcjSpEmj5AZrAXoq7FDxDjkAYEoVr69TufANiBGzoidMDeMkn8PcuzSwa9SUYbW8czEBAg7vqT8vZoGet4NA4",
  "key2": "K8gHKikow3fwSpmBuwryrCbRxN6yLjTc5bjtQtS5a7Uf5bbHy5BPVXLeWqV2pCYS5D2rKHBDC46xhXyDGq7LAXn",
  "key3": "257c2QCEo1pVM3bJ6tbZgyN583eMEzNbqfhGygPzGho3hgcK8MS6qzNfa2qyuG4GvUWpx5FjS3GxuChHfK4ZFD8t",
  "key4": "CTbLpyBS1QKptfmNnVHmiXXpP62NLZn35YkYpykjJEXsDFu8rzdVWZg2RQu2kcX4gb4FFibKubGG9MwzfyEvfgT",
  "key5": "4mBf1T97jZJWsifd64rk9awHTAN9tsRS8oXcP1rzUCkQt8szopy7h2ra9iiondzm72Dhu2jDdXYRLMWL4mpgrgfy",
  "key6": "ZMM3zFmP2tFnPmaH2qUDdgPSz36xB6tVSvLX4ayKqJ6hrkJCkJPcrZtoUMM2zVaxeZeA5FvyzVdUsEVbYK1Yvzp",
  "key7": "zf1H3eDG1cp1fTtNRrHDk4fi13sR4iEoF1Wc26Jd7RSmHv38wgGqcYnscSv2Ww4vLoMnesGLcGSXA2HGMckekGW",
  "key8": "5fCikkr4836ia4ngBxuGJmvZJzEskrLM19Adb2Mt5vwkApaC9GpwPejiUTqj9c7SeA6ozWFP9wrg3hYYBcKqCXrQ",
  "key9": "3Je2SNb76kQwXSu8ZcmhRQawtcTECCSv5emqsuMfXnYXRDTm8xSxp6ggb7X5ah1xsxzvNaz53ZGALN5sr6NxQaUT",
  "key10": "5fnfqYCyaJrC56852BD1GVWdYZYWN7AHtQZYFnBxhCAXVTWiLLyGyw8MwRp7akqCcC3H4usrpL9eBVZ2pJPBR3m8",
  "key11": "45djM6DK8Wreg9TX8osap1WtXrPX2tXaicRGAwQWDVHZoEw7wZ63YNtzThNxx6Qzb7cmxfJk17bKWPZiqrR1K8DT",
  "key12": "X3cXAt2f9CXMjEj9pk6vW4vTTXDdEdp4tqokxyC81khPxZPSMfYVR1NYLzb1FbRwf9GXeGg1K7pretJtMajdZJk",
  "key13": "4S9jg2TqtXA8LbeqDfKzjLiTV6VnfyMqZTZed5bWswR2kBKQ2oiA4EvTvvYDBgij4jVc13EKNv2NDZ6dz8j1G4DE",
  "key14": "3uCtBEEPLCyK4e6vDn1nziT1oRgrgLfKDuP6NK2xvT3SE2uY38s3L1zPiBbUjHGLZKqfBXxGvjETxHBLi33qbGGM",
  "key15": "bVLzNDwcFcYvogHrC1fvxE5F8mnN6yBhYojCVAtt7HjgFLvWgv5R4WF8oA9A4u6fDgitMjGXJXvwoiTmX58KyyB",
  "key16": "mKjMGnUDumg9WpZ8hiHtygk4YAUtbykMj6ovuaoTHNLtfiPfbm3jyH6LrYS4Gkvsetf2Razjx5bpeQNiXb6fvVM",
  "key17": "25UiKzrHDppPtKD1X9hGMhxebBzJwrYYSpZgpbByo7Gw8oCeKv2J1S83BjqnXMhBs3YnWixVNu2RogPeAh9CG44u",
  "key18": "5hwsrNTWxfSRrGaEbd4dKeXwv83yN6YV1U3h2xejnjB6axdhJE5GcVVzaEJPsVQ63tj7qTkge9fdBKAWPfms1bxy",
  "key19": "3wytKciyZhPEj5VbiJY5L6R2MVDeDUPJNHURRXrvvr36jrW3byU23G14S2F5wQq66ekfyLLex8BCgueQ4RXfb16g",
  "key20": "26zc5KU6YiducbaPkxtPE8jAQDT6UqkK6cQvdiTkh29Fu3DSddtJmYWst3NUHogFDvXJP24rP7u7T2mDx6qBF6U6",
  "key21": "5ubSSin6rm84ZJpoHjwHF4m9m8fgXvfC9RkuUeSEz6R4FcFQo46tyTjVxBFT57LrxYB3yA6Lo5ZS3upewQ9XxZjc",
  "key22": "4TJ91yJ7CexNGzq5Q17qAbqf2FL93nmgx1CauT15bZzLt7dEP4PA3nhfbnP8GYKwkssKHm7YaHpAiRB1s2vxVBhM",
  "key23": "5vchUXxXP6yctsbjyD7rrNTtFBBXbukzYnno1mTjg9fKMmBTBoGdQVCfuWp5BLRpC2eLi8mnKGC8U6xdvTFyd6N3",
  "key24": "61DyoGy2Wog7FXVwE1JYu62yE3R1oJVHykNbZU1tocwcfX5DCnhTh2XhoBDR3JNR4kocmi6LuhDu8f2qBMKRqxKe",
  "key25": "3GRJ4Lo23dkoRDJcgPywKeySkAnzRwWXaEfbf4vuTzSiAh1RgPCdgPEiR2CHVFY8nUPw86Bgf8vnuXK2qVGxLTG",
  "key26": "wxbtcsG7T8C1kFZzBqw5VxJ2q1Y1WpvrXX9j4xY4j564HS5PTeYMn1VPWk8RJt8qF8JWs1UxeEToZucNPcnXnmm"
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
