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
    "5iA3dhPv6QyWzKnQW5q1TvNDQuiB63NBDpUJ7kvGW7rMWWeaghAjseEZ4uRDRzjy3LvJVYRYnhn41LduryTctqnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uWfMk3ipjrim9CauhqJy11mrDtXHPx42VYREFxCWA9cvgtMgQocaojPHsfsUvcaZQMWpaPhcr4w5JYYGc7whxfZ",
  "key1": "4kY2id8izodVMBTsKzVjNFfUy5u5JSbEwoe5z3QZyMM35q7KS8P6UjEiAwW6HJF95CUrULV6wV8sC4s6RNSsoDBL",
  "key2": "2EjehQhM76uVyfj6oFbKq6Qiyx7ELPgqoN77GTidd2rhjxpyJZLWvGevw996c3osMzsmfXQ6ALzKgK8m25vTJXMs",
  "key3": "merDZvmzJKa1rWoLGYn5Jz89tszpYg6xPVgZyVifyurgHrhzFoGNEtpdPt5cv6XQjrT8AVLDk12rUZ83JqwaMQZ",
  "key4": "2LiaZFgRYctnZRUjyACUCgxq95jpc5BmDH7tQazgxqpEhNhmSCdWwWK546GhBZJ9jRKbWnQBWnKYfcPqjfQTmUDB",
  "key5": "4YEZZekwWNwyZ1P6bz4CjksHMpj4wVRTqUgVegTWGGLJmY2Mb6CbMvxyEAMmpBF38kqeNMuNdazFdn9RbndoWYpp",
  "key6": "gDdXL8GmTwDXgJidm8j8SLu8RrySPBWDmfH7UjdnhwgFrdYVU7wySSq2SCriGvT5qSnu45AKoSvdT4hjKXPEJD7",
  "key7": "4nzun3kY4a8r8PtZsZPM1ywjuieDNeUKSscE2MaHijGjztaXovuT5gThQJV4CAkfvgu55LTuKybw4iZmMaymJJTq",
  "key8": "5AZsHfPBaFoYD1wNqAv8qnFSwHbn3AfQGRqmpimz7ADKg9mAc9Bmf8PoyfF9eST3zrvfvZVmzsP4oP1euFw36hfB",
  "key9": "Dg8XMiqiQ5bJ3yi8DQyzHYYiXMYrz3cji5xt6TdTeA7ym8crqSwrBTsZCz4gA8US4cxRkg25rdxcM5pLeUxbjhG",
  "key10": "5pKJc2L2m5r1fcU9mvz6qHqbVEjbxKAPRDR8gvr8YGBQfXcYrpaMwNyYt7C2omRdZtPosXjQNF18LT6LbwHFVkU6",
  "key11": "3Hg7tdm4M5fBZcPnuUvhxcoksg24q6XiigKCmDWraxMaozVkZCRMF8PwPBdTdniYhFER56m6EmwAAGbGAoEoqd3R",
  "key12": "5HbNdCCDNamMjC2GFUmr59V6YwtZBDNVDVBtxA8zBXBJMb99SHmRBriwRZB7tJ6Zapm8VXvaT8tszr4L83J4FfnL",
  "key13": "4Sb5QtGrGqFuqgJU7JL9xmW4v7qFpyWwwjervK67z1hg81nLTBAQETzTjvjFMp1htk386aGLJorEGaBczbu4C8aE",
  "key14": "2Z75bMAB6G8zbj5gpvbi1qanmyMxgc39gkP4untND9zEowsjE5Gs918SJUnfKzjZncuuX1Wj3bh44E7zT3y2o3MN",
  "key15": "2hsY42xy1gzJppnaaLYc9cViSDBJJ2MREKuWgXtUE9x9sMdaU4DrSUy5Jv6eohoNv4BWxhPT1QHK8wdY95VFR2Ba",
  "key16": "5TiP92kn35DVLS4hgvcpVYm5ubqSbE8KY8HjJDS62sCqZ8rGNi9dMT2VZQZNnsSnuB8UhTuqKHr4zU4b2s7HYwMz",
  "key17": "3nZaQmaZcr1pkSG2B85xrNfUkjKPvvbYkD9x6bDKfZHKXVavrnCvj83ZyunY2zYzaEN7aLNVq1Qi1zvWqMHxqyR1",
  "key18": "27H485QqVgCy7LHBfb7vK6dE1gt9YmwpMSHpW1y9NHnMXJDBAKVHFNBypW2KQbMbNiwXbUtS539YhrwPvbuN1QB2",
  "key19": "33M6bYMRkJ84TEyyq3NuiLpuoBKck81Q736Ujjz7vZDbDwUsXM9SxkJmiEDDHd4RhGAbKxsQ5MDnwrFSW71A3SMq",
  "key20": "35BmCaxLdck8Mrne95Q9GYK1ZKYoTsGwJ6GyLnS3xsmaA4svhVEEzNVqUd1if8tLBnLcqgKQGYVWJeakJzpbKcJm",
  "key21": "4df5CM15asYLpzoGEGWzeHYPzoZNEVxc4tKwFzSZgX4s4yf12baoXCZEmr7zWXMvQ5poGKCkX6LFBXuq4HA87gA8",
  "key22": "WVqxQbUg3hZLwvYJZARWXAX4saDpppNKZkFMoi2TKnRJzVYq13UyF1o5h2miZ51NpJT3vvhDFAU8B7jWFZ9C2EJ",
  "key23": "5Ydsynjt3Mp1LbxyvYvWZSAwMzUiLjnQPfmbXczrvUqePjS3E3sDqgywVaiabBuja5PUzgtB9x8oGKtnJe7btmj6",
  "key24": "2sZCZyDhrudHyFFdZd2r98AHMmuedRpApQ2WQZvTxUtCiKEjVoMgJwMBCAhkTn1CRnx2e9qWKxPnx7ZPkKrQpiiv",
  "key25": "5m7AVbVRuaKf98kACjYUh2iySTYHh5FyygGjQ7dTnTYToCKXRTrVHeecfqBXpatg1MZPLpHyEqunp9RtPShnCPFt",
  "key26": "4XsiyBkqvuptfs42jytMYMkVrJXQCjhJ264pyZtKVTkipjaUgLC5vYbBrZiRgAHeMpVd3XR43y4f61WY6vb517xE",
  "key27": "4hZQoFizkKEDd9gKpETVgtNKtq8WUz5aL494GsNykzUV8eHitKqhAjsapiuUXBocZ1W2YASXbPBfv6zZ7ZMLxZPm",
  "key28": "5RtZ4R7CdzjkLouQpLzCb6YeYcQTMVfm7HHKy9wuBA2JHrXpAPs2HYrEP3rRU7wT6dssgniWDmczEHNWcgXTidgu",
  "key29": "wzBHFmEf5JFLddaY8gyGHceDhqBSW4kUmgteQDarxjXqH7xRiSVpmFbvTUr77fZ5QaAJ2aAfbue12T7pPgr7x5G",
  "key30": "3vzTL7qAweiqesg9Tv6LyMPjQduYu7KscYpZMNG38wtoCvT3pY1x1YRFFCcdUnPQt6DSLXvMLNY74BTV7Tdeb9XS",
  "key31": "gHbjDvcgdNS7ZaDx45wN13jsTjyRmnM7S7XMrCjQe1rkiMoWURJ2PDBhyJXV5iNNG1PMBED1rQ4NFxuZwhKdqu1",
  "key32": "492A4YMSCvh4ytR3ESDAqDjuxikmanStsN2Li7ekTY3LLpBsKqboSzj2kXoTHTpkUSGM6jAs6Xq7N9V15vLvcWo3",
  "key33": "4qu9GTbyjpwiWdvhiRsWMFS9cJoJGvRGxcbrmPVHUEXNomu6GfdG3dnSYHRoFj79ciDQydHZrCBmt3YUhF9rCcwq",
  "key34": "3rVmkTSyK5WipmF7QCqoxBciPSZFTmo8ndVGrLoipspnKgEueNaf5ZJe9HKWPvxfvBF4U8r7yTqGQZkUKitvyG7M",
  "key35": "F1kupLTgVMzV5u73awHRsbESPk3jPY7ZZN2WJ85MqdPp8WpNTPYApadJdwXh7hZejYy5mBMEvm8wZtoXXp424Bg",
  "key36": "56rSiCfWXzjFY85HRxFmjUYP47yvFvgC7SDpZeb4YxWUDvmK3733frwnWac3KLQyviPBZZiJKVnkKhCYfw1YTYTb",
  "key37": "33QCM7yCrtFB1mWRTMtSGQzsdgngRehXj5kwkLaitzr6qVmEPurR6HUioghoL8NrnEMj6M4KAyhTJ8H494YgUsEp",
  "key38": "22eCNtmSGGUEt7TUf91WU7oD6sGCvS5RKgbpY6PV21EzWjv2kbE8ro8CEHuMxqMhcmQ4fvp8TZ8P1sVoxnLSxc1G",
  "key39": "4io8oyrdwD1f7uo7n6S6CCeFWW1cLdrPXLmsDH3FZ9xCdHmL9ruQceh84e5kTXes5c4QQei4sFAcbakSQvbATk7V",
  "key40": "4Qg5rJvEKo8h3GBSeEPqKPFivRwbgwCZ8QZH1ESAx3xjWUKBW3UHmuxVNvYzsCiS1uguuFRCAxe3SWMjGSyoUfGo",
  "key41": "5jUpuCTqpZHYbaQmFSDQxuV3QUthM6VYE2B5EVd3Ed8QBn8a2hHjApMpX1koxC7GuiVgyuJfUfCKRHi9SSP5VPui",
  "key42": "3ugj7676sRP3mCrJRy6yzduobfGtTJSHmGLNCnCNHxDGsPvWmCcWbYPvZZ6oLRNi3rTDhrQhC1XKbn75Br58GoUr",
  "key43": "4iQCXizoBxkm9CpsfY5wbTxn9EUEQgE4ytSq5JQz2ufvESeLpvCfkqEUMi1Zf3YJohDaTo6jn83PUrgAWpK4Doin",
  "key44": "3jzzrCiwiGGamZxJAaK9a2cBb5G5j3kdUGZv9iV32yds4ZoQL7Su9NCtrWYpJMiohYvb9VZtmCfpztZ33hkuf4Mx",
  "key45": "CumtM392vSC3BHikqxG4cUVNrYSq3jr46h2iVaS8XeXnGST2DDQUVzStmMYyXn8jB42JPJS1DAQEBSLVQwdQrH4",
  "key46": "665QxgmmRyA9bcJqdDqC1p3Y3t8CwREVD1z2tmdAVQeUgL1k5mqsQMc1bjzr93zFSa7Q1srFaC8UykX31hYQwpbH",
  "key47": "57TViyop1D4GqQ5a2Rvymq1rwFWJe5YUTTMWkvSH4aNPSVmjHDiviVYUidfRoMnobdxfrHeu7Yv1qwVE8yj2HRXd",
  "key48": "5N3spGx11dGPssWuGxA1koDrauofWsX4uHRbiKQKQR8BZF3bVZ7X97A6zZnTaKeCLK78PppsLL672M3r7oCnJtXX"
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
