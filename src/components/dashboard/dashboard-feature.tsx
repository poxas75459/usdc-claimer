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
    "53uTALdrAUBjrNnbjpUiMRSFZke1PVEJjx7GhDWJQyz9FvLtMBpQPx6mYJ8PedurLJ7sjjEhuqmJD8d1yje617vV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44tUZ6qyn3z5mPxELrJqDLaL9madzdaWZaodoQykV9cw5xGe5Rhx3KMV54rkaFrjmqWZjiLfaTu89Z7XiF1nBjiq",
  "key1": "5LTbSXNoPiENNq3N5gSnfWkGvHK239EwAJtgeP61Ys7mhB5tP8WckeTTCvpYjum5y9u4HhTq9YytSxqeyC8j95eG",
  "key2": "3rE7Mf6H9TQT14j1LviAZh56rUh2eTLeDxgA3NaAbevkxzwZfZJTWf7ur6xoteDPgkkpHZadK6gPFh92PDEtH9ZZ",
  "key3": "39Ci6P5eZJPdNxkkrzPL5Q3z9WvnvipmAG6Aucm5MNhZxtENMJtyiQxsgLgQRu56WBJUwrD6yCsLL9TP46wMPpuw",
  "key4": "HnCqpFR1uLMHJDz8vQUjAAUEbQgB8N4tiFwyNJQcD8ub7jBEGk4GdK6M9zvj6ZXyRu2LLg3WbUDak5nSY1mHfWi",
  "key5": "4bSTHm2Nf7MuaToiob8RGdubsKFqQPpWGqSBKUHrVZd7xd3qsji7Uwmi2XKJntQ4KA5RNWD7CzuiVRvHedMQ68Uq",
  "key6": "f79DuUa6jxGHjdPRVBce4DGj8GW3wJa9SLEmKuxazFvS1jYfnRVFiDEvPJgjFe1a5pLzVzh7YdD8wwh7TSXYmLj",
  "key7": "3bxtZUUkaJ1Z3tfCzaZfBxFvnjFBM5rLwMnwFboaUejrah5YjhsLov8hqx5Cg71p6YhNeQj7VDNJZChKYiRuD3Uj",
  "key8": "47MxoUFrBuVKhVbPszoYjAgJfFz3ieAmR8SQ1XgMouR87jhWmYjLxfkTDniNycAfbUwd62cF1TNuqLnSKi3PvrCf",
  "key9": "4gsU4oq5RzXkb2YtEqxxtxU3RqerkCWNgX8kkxEpSqh5x4pXEFfBDcvQ9pLqZ55GAxkMUjXksj43CXSqgwxkv9Vv",
  "key10": "3W38V8X4GQYxX7iWR8r6PMdKk4MUYzpwQjgQGCzAWB6zn7RCb6qeagqqQmFEsrTXsGN5fBzWXGSgPWAtg3rYK6XN",
  "key11": "2gRUeE3KCwPL3opM3xVjvmVVB4uSGJv2q8yCvhBq3UeWkgkfLs2WAFKRuBmBMjKMPxC7vKr89v8RkiYSKaSBe8to",
  "key12": "58xLhUZ5Bk5ZMVpC2Asx1TPnrrK4MrCdYhtvz22TfmXAZcmWU6avXy9Efq4gqy7vcdFt8xH2rJoWgr5wzDPTXC4j",
  "key13": "2FFy8dD5Tym7UAXpCfsezNzE25LJnkteEzuFQGwVoqyCrD6pjF6TSroDAiDKcbGHx4km5wj9St9VarVuXutudAdn",
  "key14": "3UexBqy2JYiaxQL8YYZ5d8weVYxReZJbRgZ25KmqjwkAoagqr5EBW6y1KLx14CNp48iPoGdtyNkNzaP71E9YjSv4",
  "key15": "szNvdVM82iJu2JBYS4tV65oBGBi13Bg4V4P3Tt18QRSTsxTKnZf5GR2c5AdcyNtpwUzAp1zGFgoSP7RqTSsa4FQ",
  "key16": "4Mxop16MtsjjoZRpVdR7MCbu7mUEpXxaC98cUBPtjmHAgeFnYyUwoPqRR24AMCxAwwHgzwqZVnQD1o4gTh5TZMPP",
  "key17": "3u9oJUEj5aKfBc7eJdyrGF56HHZvmWza2LZSSQfQTmK1iqWoMkGdfktbeHrJUqkJfZE14Ts74YihF8qHeCR1osnQ",
  "key18": "3aijKFZYyeBaXzeAhPvvKUPJJDMaDXinWyCzCdtj1YMomTEMVN1i8KpujyrYRNUEDM3eNg1WTcgGdv7SfinPKZV7",
  "key19": "4yJHsTAwStXSJ2EqTeLvee1CVMgwAYJjbWq1VAmBY8ditA9ti9mHjspDkPECon59L3sqKWGUoifdvAGM5GFt82VV",
  "key20": "4WFMxwc5TJvviQ7GMTvJzrypZvv1cFw6QoWnyUSgRfes3iFkkHPiYgbknYP2uyvSHuxSVqC5dfawguiUJayxJrqd",
  "key21": "54iLjXBWm1fo1hjQ8xXUFmTPDE3fqXytqZDJB4dLhuM1NBghx6wHjubMNUhHxm4jgGjNNrwKVnXt2sUyCbhsFyWg",
  "key22": "5gbzW1S1YLrFL5x8y7NjQhfgGQoKWVNm1uaLLuuXkN3dFfnTzxxfEV77voWqzr71ajhTLLmPX88NaGgSQ2kdyg9C",
  "key23": "658eYzKPkDwgGsRDHD1xFuoEpSsFnnbY1QSN1wj87vf2sZn3P9aNPG2tAaNTDqgy3M7BoP1Jw2G912E7ECqsVQ8E",
  "key24": "2McQYgRW3ya9aCobQoBnJpVnY5e4C7gFfjshh9GmSJaE8UWrGFDjbdMKX3dL8yf7ywBo4xddn5eGtQMyTrkHYjv3",
  "key25": "26Uogge6eP4hpi7MSw7HmorpE23W1R9JxyGbVWiRajkFjnntnfi1uzmE4KqVhZ92Cz1aDqgnBdRDfQqY1N7eTkvT",
  "key26": "4KKpTQNhk23N4Qu5TugHHY5YfmC6LqtPtgYNmgruLcG7noPRc4VPcY52qqgQZrrdRJgidJXmq1We1AgACp8rRW1E",
  "key27": "5hy34rpSrkoVzE9NTEqN8b1Cyv3Ui7q61Eaij4TnUvXAL4nPfTGtXg1En3yBgefL2ni2cULooz1aW5huSKAMVsM9",
  "key28": "32NVpD35QNXjrpp5t9kBsgn7hFiW1wP9g2JJNixHHEuuTqNPaCiUWxFr9BxNzgjPgzgAquJ9YZtEJL8q9XxbUXPK",
  "key29": "2fFn4J3PE5yUDfeKY7JM19g1DrgKU6ikywkRkSpKaLnDYdxfhb8uBAJcfnxexxq9yWMSqJcodbb9YYdAAqMvuDK3",
  "key30": "HEP9X29X3ocnuQHyV5qzc6h8fdkbPwSmgb16hkkTG3DjLqjE4JoXiqEvUbTXq2WcTVrf2CQ6UydYS4fRtsBr2qi",
  "key31": "4bzvEuAxCm8k9Lqg8yMfvsUQQkj8A67PGzzxG3Va2SAyFho3fyCe9Zn1WFkS61cZwbYqejKLJwidFgYb3V7HhK7k",
  "key32": "2eHiixTTPTSmjskBhXMhWTAxBBnuXpYrzAGwGcSC9BVkMBHQNtu8DwzCK6ZZD5NhgKuqRasJkBQZDuj3nRpsThHf",
  "key33": "2BE7w4VdGe2sdFUpz5oPoyNCZxDaiEzSdHw3CiVs23mbWjb1fvNjGF5pnon2WdQfs33YgDcPXpMpVbhKB6UtJsT7",
  "key34": "5y6D1YA4M8LEUN1Qt7kfAWsLGzwBe7rp5nxUtd5h7yGYBiFjEGqsUU1KwKuawzdHWao8wbY7R75g8hzKVFw2URvB",
  "key35": "4reCEeMPnG7V9pra4Z3ETLvM3qwbADQSTkJbvnzCK5Ffd4pqXj3YJGuTxHNSqVgjqwtqgZtk5qeMbeQVyWRVwKau",
  "key36": "2J31QPNaPSHWBC2Ni3hQQug4EqLecw3Qm4RYeub8cE1apBJLiWBpAQG7jBKpBeHMwxJUwWEUhvh1T7YtTzdaVwGd",
  "key37": "55KBFkk4EoBfLgdwxAM8SUxHbRtgEvJRv9gAFwMVuhbfw9YN5Z6Xs3PfEZJS5Bu6sd6xZHQGhoUYiNvqgXY2gPnp",
  "key38": "32uSNQ3E3u4HdDHAmCx38ybfbwGPrBNhAmTENhqv6iyj5JAYXE9rW1wChymNtY7qCHb8DRkaA2KVRkqjSCoptVci",
  "key39": "3xXhwuGXAZKNjZX5rruJJuThEG8rzMqiFH2im9NARjfHjGW6UWSvcXGN9UrVeeJdu6mL1yz88zaHYpGFu36owHVS"
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
