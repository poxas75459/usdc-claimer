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
    "3LBLJk4SqP7KUVNPUuuU1CqLR5q3BDpcRduKUM1D9NtrUWTj9FXjB17rsMmGNNvHzG2jcThzDE389vkdjiDWXYub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jybCRJgnksjB5WrjjYLAkU43kt3XnfXBBe7RQy2E9xYFUgToURrqPbdUd4S5LKh3dGBAag8WYybNvV6eFCVbBjv",
  "key1": "2ABD4PDhxEz8CssB3Jhcqr9gAyDJ9QFUQWNbznY4qgtfs6hcTafX3ptVkGKdKwMYCj3rug9T6WFcXJKmENA7yYEo",
  "key2": "5C6wsunLd9jRgtP1FR5Mx14rZErsYznDXZEFetGGVev48YMajJEBzegYE8sad1FQKT9keUm3KSucEwdgz2pgfjbF",
  "key3": "4GpNxs8m9CDPDdytq4g5UsCsTUmRku7oZZPjHrExSKKjf8US3kQXVxTALzAbf4yzsmB7FcXAfV2ouve6sAVaNdYj",
  "key4": "38o8Xr1RxwsgztUFADkSZwfERfUHjaTdbFcHfWJ8UHSuWEH3k6mcPcAUbjWaKgpCQzeB32eMZx5TfatDKr5kgaqo",
  "key5": "5ipmXSrTreaaZ4PUKKBZmd6ED3a1gNXGTWtftWvtYFkJo3qHCwPYHWCSHu2UGqj4geKdx4DNkfmc1yrBWesYyXkR",
  "key6": "4yy15jgdAXL3Ah3Qh58QtT2TwkNXzH3XCmpV6T4FLTLZmMZPgK5Luc6LgC5EYd8ytCmdtpwWmw4CvXP2DsiM23Sp",
  "key7": "4DXvUUSBFyKMi1yKnax8JQgYmN7Cty3YgkL1KDhhP7S5oaAPqY9p6xvuJ4ZGPnsTHXmrpwTkEe3AdK4gGWHDePkW",
  "key8": "7WGXgLwHquKovX6y1mBUe3QditdpE4xTerfV9Tha8LCwk5Hi8ozjqeJ1eww6mowXYAMRTHRQkuNVnc5GMgYYZiW",
  "key9": "39eQdoD1gD2VizttrDr4x3uJZJodJ6Ep8JsQeCnCTk6FFuiCL5zTwGX9tkMoqNZn9vABa51R6rS8ZTXTi8kUqUrP",
  "key10": "2D6HzmE8C5a6G98HhESvp7LSigSR8H8JPuo4jJBCrGvoGQcM1KctYZJfFPgboxdxEJPbxHPxukLxUcr8b8ztVe7t",
  "key11": "2DagxMe2xi93vM5oGnfHa6eDrMUnSrpYz2AFPkLyspQVuf1zvbQUapAh6GqstzwaqFtHLzcUsMGgazp3nwfic7MA",
  "key12": "3DfeSByxtErKaB6jZMPkPGG5yjcj6Yz3GvjNprCaMdiHzVCormB5Kiix3z89cM3kcPK3dacHPVxWL1514uB4TaYt",
  "key13": "4sLRdRKgT2CSfFJXEhbwEP5bCqXCqo4wgAUyEVuRTZG1LFzERSTRmV8UnVGxozcD9qtTzfW2dpKjgXs1CEhum5c4",
  "key14": "4yQRxgprNALipmi8T6VZaR4FfJgjMqdubS8HG4ikJjtkQEfUxGQq9RwZTcQMMYi15apQnSE1WLSJ86MLfCnHdMGc",
  "key15": "4QpWsWsBH3zpZaPpvpwSbL2j5kDcomFXBS7dV9mSXwzYYhLb6Y3zsH3zQH5VoCqGaZLArNBtQAztdzkffzcarpSn",
  "key16": "5Lhbn9a32PMCh765m49E3dJUJUaDwj1j7jKkSVvv7qekiQzdqth2kfaf958Epq3ZTPQzrbALSxb5sPf8kLsAjVNZ",
  "key17": "4PwKLXK9cdT3JMtQ1fMAe6MwpUJTTuRSUxtpbaDjriZp5KBZMytH6S8Be58GotPYJietAb9ZuSPFypjN8wRD76T4",
  "key18": "35WUVaHu4xL9sEuW9bY1uN6uFi8gN81QUcWxerxNE1E7aCU14SaijRrf5zYDoThx8jFSwyCt5LH4y6sX79WVi2fp",
  "key19": "23TJ6wQxRPTiRnYTsa9VL4L8eba2T5qMVHBJgdPtwrAesrrRtqi82trh5JfP8NZiaDAgi1X2uXrdS6ARFXT62YQA",
  "key20": "2eJZkzYGa4Ee33gj71Usy4b5xD8CmooCURsNGugXBwEB5ZtvLzve6Mh27mb6PVxu6fnR5ZDH5FGzpa5ZmT7xycDK",
  "key21": "4WVnymtX9FoSL5zhZnX5zYJ7m9qKXo4uchdCWsGeaibe9wF6zyjciYVf4nhRos7q3UupzwtJxh99KYNk1n1YZE6j",
  "key22": "shuBw6pA8kybQ6Jybzn3EX53FGGAKMr41jhxUfRUq85enDtx9oruzoy2ns3VC9ak1chCZ8pr9s8mohCKu3NVqNV",
  "key23": "ycmyqzYG7CzzHfnRrPrazvdKzAFVQ7KWcU7McDb1ei2uvsXfe9HoL6cpVBMpNpdqSBZ9Yj79czJiuKctzyTD7kJ",
  "key24": "4MyYfgk4qbie2JLWqc4yfMPxpKXcFWW1ysx7hX24TYQYkcDYtFP1oW1C1wnx77BSibQu3aNdAauEJ5Qk8phwNHXd",
  "key25": "4EnSyRx49ownRhTasr31miAtCNqJZBKVYng1njh1mwh7k7yv5ARuaaAeUrafBjQ7uEDyLpzqGm9eejp3awBC1HH4"
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
