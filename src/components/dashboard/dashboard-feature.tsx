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
    "3QZtL9rvMRMB9iCRPZNecWPmp5F8xAG7TarYCpAcgrKVNyPwegYLugVe45e9m3m8jtKZCsVsmxbW4vWoDiUydFfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMA7mhpkVZ7UQmNFaTGykPMNtEPg4ocNHj7pdpiuuejTgZ5tsf61oBsBfMBG1MXzBcQsPQgXZt1hQzWkozVw77W",
  "key1": "dw5pXoJeN1WJhjQHGZFCLUqwHt7qfNhcn3e3nymJWJqN1VE9JnhvDCmPiLyizmUpveQntmQjwTQXtJTrhgAJZF9",
  "key2": "3zyR5zi9Zz2uLk2dAHqbhEbGxSVsbEgsmxYHhnj1M9yyNz1LMKajziVLGuA4dG9cn9FCFicS3n4k3888nyx2pzAH",
  "key3": "CweFsRtRE7jPge9zBfYJWbaUNdgR8q6nKkgHo9KuV7JrpgK4a7ks4aJEnTVxidSzCLMbMzjsS78VhkiZBFtkr3B",
  "key4": "qkCkbREXvwJtLUjZnWPsdSuJCFRgicNZGnC8gHBuFprHErJ8YwXc5vncmgAUr2vLjV3Y9EXhxuCPBZuH3gHcsN5",
  "key5": "2oGCyqS55Sd78qYcxMKyYRkMSoZfUBr1EgMdq7ncN4tWM1w4nFnFAaM3JDX9ZE4GSCGyH36hx5KzPd6mkxRfLLKv",
  "key6": "5kqxeD6yuu5gxpJTqK4QDYGi6ddJdEEvCHrDh3ZaDae9V4gJcqP5WWiFGWafbUquyiah8E46Gnzf4Cd4m79D4Hb5",
  "key7": "4RAZ1vEV44JThJh3NM9noRaY3snwHheLBVigsLWubvvqcyX116ozYGCwuCnUB2BYYLtR7t864FyR7Z9tDFFVs6s2",
  "key8": "x1Qj9MA2Xxh1dRPvwnSEo6GxSTosAGhJ6tM4s15zg7mHbAMMp9WnNYTrxNG777At8AReyVNmArdLBqXK1YJQBSg",
  "key9": "2tMkDkcUUuwfj1ixLrp437WBUGQqvU4oxzMCSSH3B8sMsYcyQhJGv4fgnAYuJv7UVtGzH1oxDZRGFwyBSqmEGrgW",
  "key10": "23rd8BVYkiAoFUzpsKPVMmh9xSYhzNRaHK8WdxE5sEuGqPRN7AzGf7ikanVkAaarw2E5nkmaNDWFbrFNdnqZUoip",
  "key11": "3FqSQayeRkeQa3moRa9SZw5C5x1Pnv1BzEqj8kZ9ToMfB7c3sevJPWnrYuzn2LdaTedPPzoobQZAoVLyzAkhmknZ",
  "key12": "3G543sReHurSEKnPkRngW13SeG7a6zDqvXqnhcKL9nbPS5frkKVw6EWSZFEt3e8w8kTP8Zw1i2v1mo5YBZZ6MZus",
  "key13": "2b3eRujXRRxPLYTBZoNFDqW9S89RGMXU1TRsZCSgXoKeXJ3bwSFUiruh8gTrbBDdatD9Ph6zZXmaK2r2BsmJyWK1",
  "key14": "4RYJXYqgF2gQbGBURikXfaUp9bAdiTcrcNFQ4nRUBfupeMcMByW1cLS1bPC5tDzcihy4mrRFos8SZ6SnuqaGZSHJ",
  "key15": "43vZWGVTKSTDdYM1nZZGsvQpjwCVxoFmm7uiWqtGwVeZFvzfvGXNTPUw12A21LtyhfRiPgKdDMgbyLHi7tHT7Rs9",
  "key16": "2LoZjXzGgPsEJSp1ww3eZ2mAxrX6VM38ofynRzVtYNTpGW8s1AKoyoSJUzLDV6zM8V6gj5TgX1CXtRXPZ71waGtG",
  "key17": "3bAzXNrYoDbQBMYrVNQKKUv8mLRZ4dRJDwp95oz7fea6YDN2C1dyLf6ooSDvyn3WR2wJ13A46cs6wRLp8kTuyCec",
  "key18": "5Vn3FG46jPEXo8RWNJ2ytSswgQ328k2bMbGKAPKe5AjHgoCBrquiER2YRWbBv3Qa5fgPknBavaxC3ZkBP2QMzWAT",
  "key19": "3wkZegQvDauS81xPHNaSNHCYWdvtePG1WEVi2ALidHpfDHj4gMykm8Bwj88QLySxkuKegoTZyKxq46Wm1RcwkPkw",
  "key20": "328hLZQrUJomBR6dQEcc5xQvwDG4DfYXEU8Ek6wWj9fyZzn59SqikUWD5eUUsdb6j1shCeiE377gdyHvttYFT9NP",
  "key21": "2rfY7UojK1XHyp7XS5nUJrzNLXj51CFdr59bu6YGfZQ7xKzhgScs8Zt9pMToraoVvaVo7VezUtrFP1zrTMVVH1bh",
  "key22": "3inraWV5ampUkUsrPmeKM7dkpo5LGmHV44xduqcdrU8KRGogqnxxw7pzd8kzNAJNNJY6gEYGdbkYHhzsHVHJS3cK",
  "key23": "2nr9EgLrYsbrgci3G9VJCtjx8jZhR4b2UfHERpZTe2JA7aLwbCjNf4d6U1P2kxp8rY1JL2j14ufssmhXRcFUfvtH",
  "key24": "2VaVSnYv3uvTq6njCFAS9i8rBuMnbXCc8c8d3rNyxYR3wtym3B7oXoSfeKT6PjSQUdj7crPxo8ofiXH9ZgDkv9Vv",
  "key25": "3GfdQ2Rwsk5Qwo1cvBH7XM4MQVbfYwh5csT33s2gYnCwNbCqeBQ15mr3epZKLFsvZYAufdcAcBpXJ6CEpPxrAqbF",
  "key26": "2p8KMpHsTinAUSraVC5i6waW2ZWvCbvQmNqqmiGtsfc3onR1LEshGtqLx9XQeQdk6tU8qTCU6T66kzudGAnTBz7E",
  "key27": "64Vzn39g7BVAkwjgRdUiwyPDCd1Mo64nagjXYKZEab1w7MnGeKaZRQYLge8p3SPumBdECS3BmPtb75Y6j1XkXmQE",
  "key28": "2vxCCeZjGyx5yNtn2jkkWZk7Lq6nBJmaeC7GNG7FYEMn8syBV9fXZF4zUhG2GDsyqKLiEbbbyWpU6qXLU1LGB7gG",
  "key29": "2nkVep1Nd6katDMjncxTe7aqrtRrgiANKe7eDrmzCuG67LjPcZc7BC3NyU3C7DcVeLYXwdxpJTwXqoAtrQjstFBs",
  "key30": "c49Tz9JLMMYb5US1jjUS7dUd1xfgwh7Ej8t5Spz2ZCdNRpUeyqgMKkBmnygZm7VaZJFnAED92xrpCqhsZGU1qz5",
  "key31": "5TH7VTdw1CgZFQC2mZ6rXQ7D8aZRA3hUfc3vcwEBwvvJCmGyzYj2fjUq95LV2CK81nVV5SMAp9w3D6bCYXAnu6zP",
  "key32": "5CRcQemkdJ192kkPdWUMNw63y4YRSzAchM9J3kPvB2QswKV2pxtapw3jfQ9pbiPqUYw8jNipSicEacz7Qf3yLU9Z",
  "key33": "5W2S5ueh6Mn5Hzz9kxYpqfKKKLkCHqVksu4KePh1uabWu2T8kZviHX5PSL3zqHMJqMUjCGEqm9G1qhoG6aBkMWWJ",
  "key34": "4ZRd1TaJ17WETVebHTEL2vfAniVDvPmXsN9Hv2ydFYZJiB11vZ3SdYGPfB6oAegZHZ19BSWHNyscNwXzUhEzT5pb",
  "key35": "JhPBNnw7BGDnHGc2RgHxFisbZuHc1x22WqdYFFWX2QAa2sZyxPLn7S6KJgwozYMSc8imTWwFfRfmercSYejuGSq",
  "key36": "5ZvvAZFDBGnGytmGxWRN2aWyEAPpo35LwPfX9cmedh4zaFpF5p46jcuhkjjhqBoZh9Cjw6Fg12pgCu8cG4SCksQd",
  "key37": "3MnVMnJbV5eEe8oaQWB27oBAHDsBF82YHqE8Zw5Cus88LCpqrvjGVvvhZaibkThisUVgxkY3VhCPjU5GkTVSqLq8",
  "key38": "MjuJ5X8VZChNjct9WfQCYUjErJ5MMu7S2j5mao2JHF9ieSVbkLycY9gzzjNnKBpFTosqykAYFghwsHTaM3Po57H",
  "key39": "ACSVkZiRCcRvRzBfhfMjDS6utAskyP6MKoriKHBcwhxmrfd59NYD455YvhCbfHUaviT4o6Xh5tZowN8LWZcB4rN",
  "key40": "3u9n5VGeUAUcf4uidRW2yQTVYJS5V7NmxNeLjomNrqpXvTV4TtHiwXbdaScoJA4tWZGZzDeCA1m7sykwTXXAyEXn",
  "key41": "swJidc49S65f5MTYDXyaTMc8YbYiMJSMDuCULcpnEij6VALRPoBP4Eu5S2xgvxDWK4dBVvbgwqm6YctzdAuuk33",
  "key42": "5rUzLQVWJ7vfk5n6AfspPEvBCcksbvovteZg2gGgvYjEAFEDuu6t4nfZvjp7gzDuefoPzXZzh3mo27Z3MGVNy8g",
  "key43": "3b6cAZKj5cShXA7iU8scP8SzF28mjSPtE2R92msBPhtDhNpktXhFFoLBvJ9Km4S5kdD7236rLdCuoMwuNDGCfJw9",
  "key44": "4iYL5veW91eTtnuUSSzbawXvdezTR2K19VbKDUtpjKgF8zp6ZP7ZTG2gTEshg1rGqti9XiZV384e6Moz7dFNzApQ",
  "key45": "4NfTRbFgH6jqaVSgEgD1B5NpPtEaFgFjLTMS5bf8rnnicqZvp2t83MXcf6ifN34fLUbyFfqiqQe4sBw955AJY8fR",
  "key46": "4DHTq7AyK3zznbNYvGxMwattuSdSPUr1o8twGqcrA8tEDX24a4Y6r6t5yg58C319MNbyCm8Urpfu1UXNGNUWRQGj"
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
