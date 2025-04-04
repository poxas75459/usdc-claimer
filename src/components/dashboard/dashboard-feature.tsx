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
    "5Pvtfgui2EJ6bSSpsWFbuyK1BkFiz99oaXvwYMAWHwTGTqk8BrpXpJQYqk2Gz38Mao4euPLKbeFeXiEQytEjVwsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNRcJXLo4eQSF8DnqGNLgMW74AMDVEJPLWkn5GzKNhdhaFLJPwV5wFyNxvKp2U1xFAq4n8NUEUyc8VaYhVF24kv",
  "key1": "Z7n4pZhkqECFPZQK4ed4V5QtqPef92d9hTgv57FfC1enoj9R22GQEH2eRr2mnTtgEZGw53PthRBk3ygXqQdGhKt",
  "key2": "57UexaPxNafLPLYd1xZihohcwjWnxdRe1SFXZrtoHboSEYec44WAmvJ2k8xX5ZzfCZUZLWg5mTsZGsV8zUE5ckyn",
  "key3": "5eSbiCWgMFv7ANzttyBpxegP59sQRgXjzwsGNcJBo7mAk9k65pAyoEgRYvhZfsqFmKPpjvMzPJFdB9WxeQnmAtNe",
  "key4": "5Z3SJFnQiiL44B197d4hm3MN6afsKRT7KYHd6fsx5TeaQXsY3SXSrfGiiyduteya9JoQFaDnLStbWLyRHHTo3XYb",
  "key5": "2VjFSzS2SUDzKwjeAfZujW87g5arw2jUvpDByNmpYpUJ26m4jWySUAdytLTg4Pbt3UVYzJYQ21HJAAUYZJBj2PRf",
  "key6": "346QLhmHE4HQ5jpVp8xAvmFooU5Mv72hDUN3TNXvoZ5vsFCyp8ynor58ctLzvjDyJBjhXRKNqWNqX6u1iz6dyW64",
  "key7": "25Y888u4juzhBwiHuMve8rjsWcRsYfuDfR5aAzq2WSVs3bPU9GMKWjSKNx3Sn3bfN5TFNvzTDw9yGf6yE38ZVGYG",
  "key8": "e1uTjjP4PAXvbgdsxdFCqQnMzWGmoB4YGYgqWaCzsHfFJACduFGVNk3zssJbXStsuzcwL9WbtZ46cboYiLManQx",
  "key9": "5uAHLBJ3m8pHY72jgnGGjDQ5acdWopAmJkGN7bvvXWEtaWFjPS77JNtQHVZQTPyGtBS7J4hhwvJ4xt6koC3ymw2u",
  "key10": "4C5yAQierCK3hn6C6L5RK72HTnwd5cLSvPzniqZwc9c9sSVtcejwoCeijyxEnAkZaL4pMkZfjLFRGEDVKKn9JCRX",
  "key11": "2xS6kVpZJycv6RiK51nWtF8g3UoFrRJGhB2Tjnf1PFQh3CmHF9sNGN9AiYnvrxEHA8cNrsmZUQM8JGazy5gxhTks",
  "key12": "2TdzuHYjoxd8kSwM1ciiBf8vx1tfyreCAAMJxBtEfPB1AdQaAzZc62UN2q1kUDAGW7833vo3aoyJGQjBDAe1fwSp",
  "key13": "Fs19eWoRg3ao7XUk8uPYVQsAQ4SQwWVgCXh7eoLV6BnwEERk9wnfHvinjTy8kuc24UD6a4Ua3KiG9ZiYH9mdPDT",
  "key14": "3urfKBqiE7GtZZAdwLMtunQrWNsVKhSKGA554MRxtBsX3squz414M6TNocMKpFt88oYXKZjG2su5tATDmwLUTEPG",
  "key15": "5eKpTwk7SbZpYWX5QZm8TVZ3QQu68e5tUe7EFAkfzr1xXpsUGZJRu9TMvYDhXuaxioddzCu1D4eY2UDciLivLSvk",
  "key16": "5GLNQ2AHpoCdBBtMzc2JFJny8sAo47QMtCSqfFKVXeujxU5LVosX85JMf4puZGUYrd3uhFWJydCjingff5oZZnht",
  "key17": "5XTnGfNHqezeMzxFbZWfDHLYEKpXZVBLwM5x2k5kiQt4tkXxe84zCxddGXy84YVScPiMNUKTW4JkiBVxyr4QZftK",
  "key18": "yQP52oxpWLbyGRN9BozSB35XjE2V9U6bsyKhGJCSz9UwTq5oB2fFV4AHkq8TMZf4oZKG6S61cTvtu4VAw3g7sP1",
  "key19": "5h2mAeGm1HqjQ32PAqi4TXJbxvHDnE8KBgrReUmFoK7CbyEbwFujXgo16GRxaJBsECP4xeSvvppRoo5N2nxvsSDz",
  "key20": "3TF5SMyE5zBChc3pPmLD7G3inJibXE5J6Esz6ouTtB6roA88zHupfFFC1LcRDYBXSHXKFybFBHHtRxkfvkiyY3WD",
  "key21": "4adqYfeogDZkT5o3oC2729ALWu8hmudAdWqjrXct4i6xck9btS1SMQwLhBXqSD8q2DukPse5ntspE7bksAC8tZhm",
  "key22": "2nuuXshiZEMooeyyFomxjWXHyQC7wWyxexWbZeibzBVFc9ZJVLG3Wgv6mnoXGG9PJKyAYcuvJ3TkqeFofKTxdx1t",
  "key23": "4mtT6tSFADSdUaQvAcEqtfxfMVFrwYJAK8SvZNHHqn8Fb7WjtnyepscgvP7yCBgZnuuwCMkKckNhhSNFeSzzBGUS",
  "key24": "5VLt9Mypa96vyJihTYtHrV2NNHbmjfMKujq3YzhNeoqaq7mqnxeAxzucLLYdX8FFq8REmMDnVHLrJqUPCrriSbeU",
  "key25": "4ud1785qfBs6Abk6TehUTMFx8LTF78YQEPAV8AeDpCrcwHakLPUMqFgPKQJGUEvscvoAnktecDXPkzYSLf9edpmM",
  "key26": "3t8HL1BpJkRx4qcaVs59S7RkhCk249nJT2M6BqDBiBL8vKCXz6zdy9Q2USZUrUKtaUx7WjbkF6Z9g4WXZJcwktin",
  "key27": "3uw9XBkbjGztu9hP9ojYASq73Ke7856kTM1Y5c4tgC3CLYp5sieUbaB9GNE8x5aaYQ5R5YTH3ev9Zux6qvGzRe9",
  "key28": "Ywx21Chf7WX5RMLd1Cs7Py6TmX3Ur4AVBHRAKUgCtk8TEuEKShVzZDkF71yWZATkMXCPP9KfTk9E8xrZ1aB4QAz",
  "key29": "5RiyC3xcQLYLVzjkbHMeBAmQ95GUtxxre8TDbmGHoQQTFxwrwnL1tYyLBCN4MX752Qy6Gud5WyrWphe9HMPrXkWo",
  "key30": "kSZXjvLyXgmHSynW5WWGC4SPSBV7k9mrjZXaycLcA9DhUcxinwwAKDYshSgGGrBv6zuReMXHatq5mTMvk5995ex",
  "key31": "2FUjvuF3tBEnH9iQYxD9b5cw1ZuFRUpgbiT8LJyhWvUGDd34o5AtqzksirqE659MfypKnqjHiD9GuiZA6PCYcMSV",
  "key32": "3J6gdfUU2ymTPTTt6xiPGVZsctL7arJASBKsPDw3uLTKkXrKqhs6wCTb45y3vqp4sSwQv1mVRRfAsx758ChV6Gwz",
  "key33": "4YF9MHmJr7xWLfy8JaiR9bStp3Lm6SjgGkHLaFaBrKbb2pfck8rQVn5mPg2cpACuVoZXBWmBiwAuoU4WFJARZ9Yd",
  "key34": "GsyxXJcsWotDtwzKiDHbNwiRPKzNJWxtv1M5SJSVbF3sPUpzQEsbhmTVgMVA5RVwHeg4jXStveB7RS3F8YoXhcC",
  "key35": "2jXC1VtBSHUVrEiKT9BvKWwuRtZjDEeCPpUXX4nGCgxx5bMwzNaccMJxpubHzfZ3jDBT7dvxhCJdg4ua1Zobt4qV",
  "key36": "43tmhy1NdaJfdH4xPbHV34v33KzUMS4XvMyqAo4soQXoL6JScSr34SF4LyUZgbsmoHR16nirR9GU1fS5qRD5T6ef",
  "key37": "59YYsnqHAWA2Rx4K3t91HrgUY7PpXmx54qguVCeEp968hAR7FkrJW83ZNb5aAQvf26Lzs9JUY9FrZUjybBRE8fuK",
  "key38": "5WWEQ2dfCUwfkYDZJY2Kpuv73aWKpaj32T8D44nnQq5nGbu2HbsLKff65vfVP5gTBP44f7jAafB9sERZe62LQH5E",
  "key39": "rSuC7383ZnmK3Pgvuoigr1GcSsq66CZrgCA8WDtuL4DMh6esdMjrphy6VUYotHuK16x5Y4gax8sy8W6E2yhNp4r",
  "key40": "4a2sRce1Z4YZAjwM3WMgGNQUCAmYAqKgAX6NUybyBuQYtKjjG4NJyVAgYAZBLLCXuaXxnPfNgEvHRYAjWGazNx1X",
  "key41": "643xsBRLTLKraPGtgnNqVEix12vL4mSD1p6MZjCAywhVUqbV6qm4RAELDr6dC7kKsFQZgeuYFBKrcawD5ESj2qBu"
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
