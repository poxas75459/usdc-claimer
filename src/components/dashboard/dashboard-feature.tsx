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
    "4XLBhAsqn4HgLKjb1S2gJ4wAeXBbLiKxujbMj6yfAHMvo62SEpRYswDhB68kFUpWouFbSZrTqzEB8FUidJGxUtR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jNCgrV7wu7yNLwm6fvUn8deaUb6enAFDPXoa5sUjAGpLbJ7Yet1XM2tc9t9kZQtYXhnJgyuXQ36rmTCWqqh5wBH",
  "key1": "4vzrQQWztdKSoqmdQEqbojwj8N7Mbk9yFDDwkRgpk99HZRehJmfFMiLppKL7GFwZPHuZjThQRDB6hgicqwTm4oxA",
  "key2": "4MfWKZZsb2pCdsV1ysYUo8g72pa8ARoxwDQka1sCCWCaHmELrH2LawkXZ13f76tQE8pvJJ35ajF5zFp124gzd6qU",
  "key3": "3jvAFwkfcNZUaGvFksB2k4KybG69ivaaDerxQfs4u2xYL6BmH83u8Tjo7PSqfFywJ14b8x5unRRShiNi11xtdvas",
  "key4": "4t2KCifVdnm7Esxbt9dQD74WJHMeihACuedC6s6N95v8TT4dmJfZcHZMxNKi5egwNABkBj6easYm5hP3FsXWX1e1",
  "key5": "3s52QZaybwCSsf6BjRfnAzi7pLyk7BwxMXoMpKhHBP2zDkC17TuKcJ6VWKxf8tAXAuyy15YbGCvCWMYQ7xMkjAgr",
  "key6": "3Sk2amFsvPwdLKa1RQufRcpE59SQ359AuS3Fs5eKDE8usa92xVTgbB1SWYEM4Me875x6NBoLtpsFcdwjRSB72Huo",
  "key7": "2PW4yfin1XQ6Y4ivDiyxHbwAQYfqHWVWsXkn1Yx9NuUW8mpKiVra871cjhuKib9hbxcvfNG18JDJhm2NAkZ5oszj",
  "key8": "3dvtkTBNoruiUcvNaQUFRaHdhbPQkZK1yBGv8QjwSTHHF2x11bYKCNJw2gZEybEWfpFz7pgSbg3PEiC6CHxTgnkg",
  "key9": "5dcYXabVFpwKuW8qC4F93Qf8PMC1wp4bgyEhwMfahWPKkCzzJUyXtCYrMC6R2NUTqYZ6xN8xEtWkU4pXNXTkAkvy",
  "key10": "26xMwRb5odUrWyNvWReR42nFDJLbBk9rviPv9gzJXMirzBMjM1Dqowc4kDAELGfUuA6U5AZrTpyoY6ycWiEayKD5",
  "key11": "5K9VN1Mng1CwjqRcfaXM3wBGpB26BhGBBusezcVtEx3jtrePc6ifiHoUfkXtwNWpmuxWkZN5EozAUZYnwuc86AHH",
  "key12": "2RwGLkdDqAeP7DT9YFNhBSfgKrte5PTTpVoVWj922NFB1Jj36ZTaxynHZ8ou9zgzKg9zavqY2ee3NZPDD2DSnhBG",
  "key13": "4ieLQwndHT5DqrgZ45ify4Yp8NfKXViGd4Jvgt1F5QPPVURKS3WCa8CVf9wNg8CHUkds1CWGKybaCtNaYkPGitUx",
  "key14": "P26ijgwNkWRFrSqvPmQzxAdNqEtn83gqmqKvhMHhhUiVWzfpEzvZdmRWgMx3p8dBNPLNLm46m4TByh1E56rBmaZ",
  "key15": "ZVSxmX5ACimHVGP7LvHm8NMHJdpBn3S7ZxyNtdgn8zPop2fnvK6GepLVCYk6UgXJALXkPoHQT6o8fUbygK7fgkY",
  "key16": "2QQK7NtSsi8EixEiucAMbKEF2ECzPbpNTEmD3zffzdzfKbdQnGQpW8JT5LeZo6LDGEBHRTdqeAxkK9C8G2YR5jkX",
  "key17": "2aEZeKWTa5AJLGtWHr2iAFBF1zdm1VYuZYVsjYATXkY5pFzm88DMHpjox9ZhmrtjRPsjaKUEzszQg7Pvw5VgYD9X",
  "key18": "2eX7dYtYXfckbQRkwLUNw4ND8H4FwmQwQRvefvZit1Rmy2Jm8gYtqUvWjcxo3VUN78GMLboo36bwUfKGSPZ3kaLd",
  "key19": "26TobrDM155GSFeYVMYYhLwBoMVBwqoj4uLbuLRYAfcWNF26tKjp97tVnPgoSHp9GjcUjTjSpfKSkYRcMKUGnPfm",
  "key20": "2S3RyfSQjUZgGi6iYQcF4CXJdznTS7AJrFGoc1mqMQXdtTboWizfeVH5F4swQFKHs4utz2bDR1Y1agXqEaUYHfGR",
  "key21": "33DtfB5AnZJKJTHbWwgvCp4GUf4e7bVpDgLQUJdBdLRfJvjzmnWHH9A7b4jj3AMVs257iHGnyqFzHLtbAREEjD2j",
  "key22": "3aLvLGmDvHfg1hV7PKybyiktjn8bypakgj1zTTLqFmvGXXgSAH3VZJ6nH15viZNtzrne8EWLsZysv5qYuxkBX6hM",
  "key23": "m5LFTUFZq9sMQJ8mUAss1f4FAKSYmoAh65gPxgeHiwffYYrLkKqbXJqQgskLfnLEvokDG4zYRt81d4RFHoGufet",
  "key24": "4iV8qGnXZL5e24zg7JdhPEj8BA1zzA8L2SwR5z7bdsvYAHaXkjiudaU9HNJcWvVKmYNsxwco7DNDVDqBADea7X1n",
  "key25": "5cS3kbTazJC4sKWVqrjDt5WR6W2S7XxoJkTE2K6oRfAYg43vYfj5pRdPopYktzd73zZ9dpbFD6LzGK4zSmjap4DP",
  "key26": "41NVy2ZFLHnvxLbBYf7uQTmYvvTTC21cPAvyCKUVE52yyAiasZUGE14u2MaDRv3ymmywFrPGsyCLpHPR37tdTRnW",
  "key27": "44u3UWJx5LDg17rEJUwRFAVvtichKLR5awf9qjRLRfDbJK3PALkjaH7RFPedZ5PM4id75PCQbMZTgB7XqA3avJSL",
  "key28": "5ycm5U2fRFhk4Mjwxtg9k7JSfRHpx1BemQJvPW37msKXDt5BNau1niQnVAYN8kSp3Vkja1xMd7N7jwBP6eVbmTTG",
  "key29": "4F5euN6dCqhjTP2or3Rgmh4WsGqdPBJtVZ9u6hZvPg3vmkE6TBUMh1bLwM9nWxTwSUwtWNsM1c2AgWKxiVsQqeim",
  "key30": "3mdAtbA42fKzPv7uWMfvXr9C5VvTFKP293iiAop6EXJUurVgDu8VnSqPbqsXCBwk4Y69JJWXB9Nu1QrHhdKcDPQH",
  "key31": "5uWLN4jzJX1AtjFG7dWhnRgpvmp1GRdgQV3SbD6pJ9nvXxLC5er5Gm4sqCfYsdUXLcXCpifaV3xC4TxFwV1ShYGm",
  "key32": "2LEuJ813Y5MueG2HDknkMoXFcjJvosXQ3y51tnzYjWSYHqVQkz2gx69N8FyykRAE6uC3BFzfo56CowyfkJvWWpSC",
  "key33": "LaFYMHdJCYuj5iKCacQVoEJ5BvDnNcmS6W8WbGKpF34MdZ4A15K8NVJ7JY5RjoQ83Y1QbhYctTrkP7eu3kBy1Ua",
  "key34": "xDuvzGEXqrWCgzeaz23hWbo3PUeRkwTGfMEaBNfX9sdQCQLci2no4TtktjbNM1aPT5s5mNT8eq3y6kFQXsbTZzb",
  "key35": "2sGptLYoNzNwFPMwCVVtZcccreyPmWCiut8961bsLQK9uT7TXZXy9wKjZJYHDWSafGJd5PpV1xDEdRgSPfNa2wW4",
  "key36": "3yNyvc3dTawuzAjpNzbSbxBkDwiwW4nsgEUmbjhf8FXjPhXaEw2sXGim3A4RU1TnM6mnNZS2WPNdaxTNepGVX6Tq",
  "key37": "2Dts7g7TMdWrUKLDHKvZ4vMfqCpNuEyuoCCstc8gmvVejyvv1S4zhEW1sybuXLCScnvjg8RVtT2aCFr9WLTWnbt4",
  "key38": "zzoZbQA4vcPnMnYNQAJ77ScyodgMxcLzVPc8SMtP24e2dPCz64XzZD9hi6XAVhrp2zzW6m4gsu2C4eQU7vhZb3w",
  "key39": "2xdqBQTgxscmxm6GUFiLV2HdkZnRrMrrQLD5gBHCXosZd9P2AjNqdqBe8ucyLzf4q3GKfSbcRtiZBLsi1YdnvCEh",
  "key40": "5tEkdBLgLeEa7bjmZDnkF46HR1Q7yru8NgMb4euDFgizPV2PCXZ61haPMXSna6NLcxMGnhHHpPqANKs6Ayscdbh4",
  "key41": "4SqCvso4K8YLSCGZjNDs87KRWFgqnE8yjsTVW85nWKBBVPn3xKeioAj1aoDvwjTjCJ2Xcpb4nJ9BKWHqrrNDWucT",
  "key42": "5g32NcoMhdfGLZ9h15WiJqd1DUZQr3aXF4hRumo7b8ans9tAB572UrS4p5HsoMP6GiT9PEib5G6bdSSTNtwC7r5N",
  "key43": "4QZifwgHNCt4gyrdUuf5P1VGJh3Ws5eSUhkBzRYCBJ44Hv38pVvCqMPNy8i9SBhiUoRF94uPHmwWJKt7CZ8YqBKn",
  "key44": "56PS1X1yxCQU94BGiyU4HGxz2dg8aeEznMQHKRunVdEUoBLpJm2BxyfbWvwSbuJYywUhCB8e5LjRPrfDN4edgcym",
  "key45": "5W2NReHik4P5HraeWeVmDV2RJGWDD7Q8TcdxXtKhUFumo8APz2cxMt1ZidmHBcVTioucdR332EWYxddmKw2PN8LF",
  "key46": "4TNw3d7jZHyZLCQPKMwX881FQjYv8o4cHQZp9a1nwYh3x4eXTvGJ4LucaMa7L3K4wqxDVdXNFSfe2NENq8xwVVAW",
  "key47": "61QNYsHj5HdSDt1GnDVACiQEND7nT9NfaDTQPdqQCCPzB7woQMeQgM22H5urcDgShg8jaGcb9daBcTxY6igLx8ig"
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
