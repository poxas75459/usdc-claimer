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
    "bXBnJm2p7QXgRQNvfCgVFuXkvr7gKa99UvZMgwcRDVNbicq6hiTgdo3Wi7SG5N54gSF8WGZ9Gtqyt9KVX3FyrGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FnEoFZDuP3qiZGpiwomhjJSbcpgSKVZNtMfGQBWAwKoNYVqMiBKxqxgbs935BNgKhsuAJEJZtzg2Y1dspnoJCev",
  "key1": "59HEiXEAEKatHxAiJoEA5qkmKQkRPzYv1uSbPkanhjvnQvitwK52kjNkh4W755GPe34DTz7mWMHUoc3FgEbikHxY",
  "key2": "2GCUgAaVy7QF9jhwBBCiiLYaQauVmz8JFeB95UHdQ4xxhcv9vY4M4L4eGYV7XYbMEpq7hxtMYJFCKrYZoraLdN41",
  "key3": "43eC3FhYwU4ciF5D6WJbVBooxUEWnb1g6xK2rMW4QqRUTd9wv4khMioU7RiKaoL4fTfzxxEywXyW6jvJqVL8jBdb",
  "key4": "4suEhpsEFfrD3ni1C7YAffZ4T2GVFpC5NXxbQAGrJ8eMLckF1zsW51TssjT9gDpfsmMAAewAcEjYae1gHYkZFKae",
  "key5": "akok6kTqYjadCvHGTyp1TMKSRUNaNiMoiL2YMfyi3LwKtonFed5huoqwicUmEs7GC7VFPx6fhYwPYMmtybADHZU",
  "key6": "4LLPWKeVtuiF6EWLa2uw9smPDDdh6Q3CXZFjcKZHKqJRbGYsHVEUuXGFEW1BKw8jjXEp4xTLxFHkFgug3kiV6Cx1",
  "key7": "3BMyqWxGmDNgcmLLmAM6fyD3bUoCtqe64jSpL2NXz55jhGWXSoPEBeoqHNf43QNaumCrYLWvHCEG6WuY3tp52sqn",
  "key8": "2qh2JByUgj5DfKzkMvV82vELc1LjgxZiezXuW8eNkyX1EVYtMR8A6wZBa5yeqKK8AmYF7iUPibWkbVUNGocC3BAw",
  "key9": "XKS1z8mobN6F6Xob8uu2HUnASERqHNaWxZaBPDxRRdNeiNgiUigq1tyk9x4m2ZpeztdRsrvoCqhgDLuTnJznRtc",
  "key10": "4FDUmTcxnCZZVykvS2ZxQnMAHt1GcRfPvP8bcpaKXvzi7KJQwn8HKx2Fh8nurdMCzscY7S4qv6XaUqP4ThZowgER",
  "key11": "z4v3c1Hr9bAgR9nXTWozCBiPxL6Fd26DVM3AAzjjfvFaHFThVUpR8BMbsAxdeX533UZgBhKpUqfVVN92q4W6Uu1",
  "key12": "33j3NEDxB3Vq8e66CFmFfX3w5cec8piWeR6fhoQ2BocbwnQVzu26XDkxoHfb3AT3Y6NtN8Den9d3V8ip6vUiz3WL",
  "key13": "65q7hN6xZvHs9mLqE2oPx1dPd1Z1ahgyYi2uee5NurTCWgPd4zJfLCjR3464uvcYy8JPGQtFCwPTCVCSmkjs9Peq",
  "key14": "2SYqPzT7XGKpG9mQ4vk3vaa8R5YHhxiKGRYjDAN3VXStqpiX2WU5q2Ro5TTKckNXJoqQFVeoAeQwyPdYACWwPvYR",
  "key15": "4ry6bL8tCGzmp5UehnuHJVX5Sn4oJTAro7PY5s7h2uBY1DZeNZWn1MCfCEf4WePDpXs7vJMiwxABDpvQ2AnEnwbD",
  "key16": "chziARkDyutVh84EiDzuyfK3ZUZ2uY4gVsYjN9tkPhokwNQ3oFUWymobS1QF5gf8uYvdRQPR4BuoMpHVk7gHXs3",
  "key17": "1BxBiF5z839CuSXAKAqLiVsxGNdhTLfUooPGEaHpp4fEscQqjjGrgDasJVbZSdQw5c59vdSkGCyvwsq7zvk5VEi",
  "key18": "2s8k9ia4KNsrgTQjm6WNVeChoVRAWSLESEMB1b9NkArWdbJcYyYo74TitBKt9XuW9KpTDNTD59jWAYaA7DpntBje",
  "key19": "3AEuF4KkzriCZ7LNgbwPp3HFTyWBmyYbCuGPwHYCPEJD4shsN7UchTWFj3aqt14fE2HcPJAhCsnNemeHKiLRUCxg",
  "key20": "4jXqYnUpeXsDgbvb87WPBEZydgqYuxyXB87icB2kCKZ3TK4X7tTro5kaMAAkoSggMbWJNRuDe9uBWbK69BUc1G79",
  "key21": "5ViQirdLBvWQ2EuHUab4j2KUefXDpQbJNxAhDCk8VqshSb7KXKksrmGjm3Ce9EPL9zF4vhGXuVQBuHGGt4XJwNUe",
  "key22": "46VuvWuHpWpC9siF14zk4KmYmxsk1ow1JcAcwMnJ8MVuGkWvVVqF7UBRvNFCFG6ZsrdZRhoZNXVFCthukgSfkfA3",
  "key23": "2amtF2DbvTvA8vDbbvGm9fBUp4MvBbvDtmoNFhFZCrhtJV8V4uWwfL5p49R8XsShhrq1upRn5CSXVzWuqhHeeubB",
  "key24": "3Dy3dyhGbUWvFdmXKufJ1XpbhTpcv9hY6AeSJh7CZdPZsgr7nFt6wpaB5HT2sQ8DirxrVtym7Xd2gQCY98zFnB6p",
  "key25": "5qFLGjNVgAK2hMaRXdPVWq9veDTA8T3QkMBgn7zaGpN7oQjFHycTEB7KUWscAhSaruDjoXRgnrYhmjkzZW9D6UCL",
  "key26": "2sDhw4uATKx7DvwUcyYNXVgLwfd4gxpWynwtMYn4Ss5nHKBsim2oMZvtLyhQCmWmiAYnEVwWneCs2mpTN3BvnhC6",
  "key27": "4NwJSbznjPsQTzKVSLmtRN51Xz1UqtqqYayrw6KCVxjPaitxAQtLUzE8E8B8eqx79SCCSkSShsNRGjhTJvmjajM1",
  "key28": "575QQ2P5MctqcZfg7LRcEKvZiEuVngNaKeNXBB1SMjb219xdKqNuFwBLCdGUgai2Kd7XKfR7pNXwTJNGpA2S3ZAV",
  "key29": "3q7E3NFxP7T7cUmGp6xZVWobrKX14AE63FYRUxmdi6CSS2H25dSNNiZgrmRNmYdGoxkTDsGcyEGZJkEeqNDUbaU8",
  "key30": "C6vXC7Y9ttSeWi1MnDsaQqzQfY3k2fYgeW2fMgN3tbgPdLWK4yxwk7dqsyPRCcq6zhsUdakEJ7ijWUhRPr9uQAk",
  "key31": "4zcdgvSuh622jMkEfn1uya4wiHdsrZkcaN4jvh7U8cFSMyuS7Eb2H77g9A31kBMQu5NVp7Jj69KzFuivx97HqKnQ",
  "key32": "65LMtou1kExNSALWMSVti5BDVeJE6yM6XZejixTsPQyNp4q7HJy5kA4TVdhL12L2FoW2TH5niyAL7yzGVi6NZLXa",
  "key33": "UAxpZgyfKA2sfdDTwgZnCD5DnuhXvbdukdcKffLKZo8w6GgG6xsPdd3KyxGe6xMFPndD8PHPTbtubrYcY9W1aP5",
  "key34": "FeBG3dugpgNVo6BPo7pbaTPzsi28sCWVrEy5o87VuwRi5vGjSHiSfkPHzGgFnRccHPnwsZCXo94KQVHaukKDrZ6",
  "key35": "5judbxrvo4KjN1d2bmohzu3Ts998HeeqfFRydNuWx5hLsmEGF3eNwKurpTQCtZEzSMBuYXwshWRrgkXWsfVGvqq8",
  "key36": "2Pi8F1J1vsk6NDrU7cdXZVdfYXBc5sSCA7noax43cmauYSrd87af9oFE7ZqR8sd88m3Giihq7JVLw3mHk1n94u8C",
  "key37": "5yia95CcgeMDNBDLnqG4RndzdPKuzVfPn2xVF1c312AY2U2PnB56bnqmcWpnRfjbHVggeszihUan3e7w4rr7juoN"
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
