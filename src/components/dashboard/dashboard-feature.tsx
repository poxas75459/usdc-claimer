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
    "4v1M4K17gsS9cRusXJCjqpUT7kGTD8CLCuWVEkKMXf879g4WbF7PznCQyAXNsX5B7oLySP9zahVd3wsyVtujkWTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CHbR2yPdX7DbvrouJ3uDQ95gCrVJyFnDWwwAUUcYbeX3QGT9yxxneQzfikZEE78gkhhge8fT4JtnEBxUJcrGMMG",
  "key1": "5UFStJVm9XvBZ7GSkrdkz22bJGcq8EHbi772KzQkSRRB1EgjgPTYMycNKJ8Y9LnGbVKm3qREF73ySWW3E5recSXR",
  "key2": "4RAwnmcg4cD5XuNVGrDWYHpFqbjsbEMcE4w2igzzvVzn4vE6mxmKtmNonoSMYFomewHdGPGH49vCpe7p2Cx5Yyd2",
  "key3": "2pJMZFjbHRsNwURbDiwTspnjp7d3YEoftyLH74gbXnkbDCtTTnwNYb67f1p9d5kf3kAkKHLCVwuBzAAQh39ZENdA",
  "key4": "4g1XEu28DDjQASteJmTXaC5Kc3PJUBUcB2fdBYmPxs58Tj9t15pNnBTpj8moq5qP2XNs6Tf9qoLWYgyhQfjphT5k",
  "key5": "9GdnPGjuRBdH8rkqUiEvLgY9BnfgnrE5L65JqysqooanZhBEv7b36H5yZKuyou1uRoqQb8eqeyHSFu35JyU8XWD",
  "key6": "5cWVpCdYuaq3nsc6kbyyYJKLkA7r38DyEuyo17TH1s9PEfeaVeuSXVmXxkrKFJbyKHAmPh1aRAgf5jvuBjg8LvuA",
  "key7": "59duBjnF7wkyH83HeQgZ15JPyEyDqbyZDBMe98UBWW5pYR96B4iR1Vu3Ru4pzcfUUvheukeaBbV6A2LEzdV7BjLZ",
  "key8": "tV6tzZDipxMRc3Ea2Gz649CuoXuUjeuKERj3G4937ZmMF7tJXeQEjzJtoum9MShqnjAd4tywm1AUb6FGPCjLDWB",
  "key9": "P6sZg9T245NiizwqYG5HSTARH6oBgvVsoojbuAVJiTQTdreDdYvWQQiy5gGFwpqzFiKeRFFV53N4aSQgUybg7w8",
  "key10": "3xdn79y2FYf4e6bH4tE5uqgiWj8o1qTQ53pqUTBV7jqZxxjdNhWxujRroJyEijitqzSakUAjADRckr6nRAmBFtvY",
  "key11": "44o6gC7FWAhDUgBWayNWjCPKH9SLGBjkei3J8PXY3Au63BQu4mbyRgnmnxPthSXHN4MgYE9wJcB5AByu3WkXUGvr",
  "key12": "w5hgwxtBd6YydJsNMw3T67NQRGD6ZgNAJ77c115k7kzGevTpKp2Cv1kvskmeCwP7KTrapWDKsUEs7LXKrJ6gNDN",
  "key13": "pp9asBhE9p93cZtRAqBcAy7bkdBjJTAxR3fGgcggitC3kbPtQjPWjGLp5dkf9DVfL97ZNEAX2GxthVU8Vzu2FKQ",
  "key14": "MGBiBjNXMkajaNM265jqCbuTw6RWkwmBxad49LL5he9ZESL1qz8kaCWkq2qECMBDwV4jEgAWC1YM2zUCh7STzEP",
  "key15": "5DYYaFE3TMHZxKa6HfC1MVcfzQwX4QnN4XLroy2fhodwCrCYDgTUyoWkjvtgpEnHZPfLEkLePaJ26crxwhRZUQLR",
  "key16": "3gGG6vrpvk52h2RCtZ2DhZfkpyeX2ZWvANQQogVng1w6E68N9GoX6ydJRjpvq6VpNdmDiXUTbAgaTzmstgUGguzH",
  "key17": "3Mx9Dvw9YidqyemLtpBw3WVfoc1PM7hzBQE8B1wEJLes4WcuyMv891X8kswGSg6ZuTVfd5urz95qhSfrDvAA6geL",
  "key18": "2zFAbkCgYxX3UeCerYzfbezwsr5TQjaEUkSHLgV8ZUpzeXzDUKm3tSdgM1T1tJXiSZJ5aqyAax1LjsCAJxzorDGt",
  "key19": "35pm1excdDVBYPRkR5tC6nHZVYMxE6SDzsQnea88oPnnaoX62NVrUFJRnKfCnYrABcUj7expuiQyrTZouPzdK8bP",
  "key20": "2EMhcfjAHi9KEKC36NhzqLaPy7JjsAU13j9rZHtE5vTJrvug5wAEpARgLckDzftQPQq4n2cdMRrkuGxKb1sHUdpi",
  "key21": "2ahGerxtQVP29RtwGD1szU6S9Wx8TX1TdmgkKb9DQffnyp1Y4HA7KKxk44DTnMpGmcYAavnUkHFw8jaQu2za7j6D",
  "key22": "4n8CPdYLE1TGWDDaneFS22iK1PrzGxG3uqmhx7Sbh74xgbSxG6cvRwGaWCTzyKhy1MwHZYNNhQgd8B3kVgzhKm8P",
  "key23": "5WEeinPTjApvUAaWEvHo8KuHFJ4yLSptky61jtbTiS7NwbX9MQgN44Q2kwozoDeiKRJDphZEX8Avd1Z5pkZfbRHA",
  "key24": "4C1faUdiNCc7HRhrLhkpS1ug3x1hNREhMtSoUVtbmAMaPtFcrmMZqEQzPonZo3JmndjKPf6TGHceuSniAZ1RCxGU",
  "key25": "67i56pUxCx6S43qtheMbzdyuBWd1FMD31JhuDuoRUSf4DDdRZXEuqpJC6ZPmD2B5qBHR33hwwz81AsAjwLWHBcHD",
  "key26": "2jgb4Qb9Xkrb39umXeFiEidfxAo1RxmmdePw3uGXU4ggnUZwTT5h11zpqeWMkfXbLxAznh6trgfuZ4UxPB7YeNnL",
  "key27": "pRUv9NpN36cguugvVxscGdCAXn17PA1g9zfpASejSVHSeK5jY38Wm3PFNCyuAaGbWXPEVLW9gJdQ8LLZEeNmQyX",
  "key28": "5khAmA6SRe1BWbr9Q2YFR2rSgh4TWkpQucJ3CgwMMdyywgksAhXA45MPgfabFGvEUGi1GirxgDtv6kN2ahoHARWZ",
  "key29": "4si5GWSXFLPGt5iZ4xQtDojfLjt64sL1G1wG1YZkCjeXwByPDW4jdw5DBuU538EBUoF2spqAtkYuzwa3PgZeSXgH",
  "key30": "5UC17Sobg8Z5Ca6RvJ36nBQQtartdqVCKs8CJrPCTc235VvcF57gWitTjYMzf91sMEwvJjkGVyqLXrj5A58JSXwX",
  "key31": "2DgKcAf4kkg89GHeRg3qoxYddpxBkpMapK7KHfz2uQbHhmQVskFsQXU2wf1cRj4XMVVU86uXnbQ3iyvtTgvWTE8t",
  "key32": "31bBtgH8QR47TSBUbX84bAnm56f1mdqvKHASQFzdEMY46JVPRCyVH1wLtrEAnRWTcg6FLj9ZH6s43LRxp3wicqy9",
  "key33": "5dtDKR6x89SoZngC5CfufEVZG63TvPfohAQwnsx8aW3zFgNAuHjLjKArxFF3gvqpbAVzPv98qcACyS6fotHzFa4V",
  "key34": "q3iouxCsWCJNP1t74r6C4xGrPKk8wNHfoc1fWEh9ezWyH281KNTAaw29mrpczfJdhFmqEkdVvvyWmxoGo6DVqwV",
  "key35": "5JNtpNwYYdmjE8x6ef9FovwKuag3M2DkVihvsEyY3Hn4LctQHnbX5hsxqJ4sEa1LDJx3ExzSRfEvW9UJMSbW7Ftu",
  "key36": "5uqu2UmN7eoJ7tDE7pFSD6Pn6aChE3QtKsmhZ7GKUkeRBSRZBESJShheKC4sWcZacAW3s8ASRVsCwoMvx3KsEMuu",
  "key37": "2pgvZVBeqj9McwsGkqf7a4Sj2w6F27otBDcULSSHZgdpfkTLmmVNM8gdcNvZfSWNVy2aD52Fwa7Hp822ZMMTFaMv",
  "key38": "53FxgQVahmbGeSfjPngNUVbukfBT6xYuefQhkpCJB92tY1V5FXR4PoZpDayKaC394UGKFJG3QTbRwxrhhuSMvATq",
  "key39": "59BCd4igL9rfd2fCrQ3WzLFrnGaysE9SAWqkxSyedhgtrg464kEbfmKHxsj7XFNjVzKnmpgxxwctzWj2g5YKJ411",
  "key40": "4ASVHjWrBoLBJzRrK6qy2CVm6T59sujSpSABLLAe4J5GUXzwzhPcR6L55K7JViFggtDJgi833K6G7TqSaHfAfNXd",
  "key41": "2iXC7A7NNw6EP4wXWd19kGg2tGmyonELMLYNpxTfJgszGnaoVE2CR4boi5ggntViRm8hQJgYrE9u6W5gurLN7ouU",
  "key42": "5PnfWtfDjmeaSxvLKjcPuFsmrzzcajZXyTJARQHvRjG78fE2goFiYhxpgzuBLrzAg2DDFCsmxBwpj1FXcDhymKWw",
  "key43": "3b5jhZ2Vq6Mk5hdw1AU4Szr5a7Rq1nPpQwBzkD2hmQWeWQG5uCmgFH5s5FLSgBTJURSY73SWRhe2nU6bs8CugKg5",
  "key44": "2egbSinqxvAdKwmRrLJ8k6CNN4srDdRpeURd4smdW4Za2p93wfeiEVqQH9CG68gDmVTf3xim2zNMF8pGk9LVTHqf",
  "key45": "LF2HEN78BbDde3K763xtQEqtwMuQj94KDqzGzru3Z6oH8evRnovMSGGiMki351vubR8gW2YvZZpfZxTMiQPPnHR",
  "key46": "5trrGjpy4b4Xw3k2dz9R5D6ppy5tWY89zog9DcYaepqZkR9HYpviFz1Ug5Fw8XLeVCvbDFkte156VNLZrZnit71b",
  "key47": "deeqmaYcEQADm3QtH5VT2PEa1fJuNAzqzVWnoShMrtwH5jXo9wtVjuaH3TZTuYnTfW9NsGTi6ZtqMLscj56ZWXQ"
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
