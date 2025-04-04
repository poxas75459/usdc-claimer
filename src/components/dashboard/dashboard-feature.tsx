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
    "C2TfFduiwbPkxPP2Rd7Hj5BUQgY9TFmoMrtMxF69FLoxF1ndojbcr9u8HBKcVEL1ymrYceMJHcTGg3Mrtq6pYxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593xftTALgGBEtXvkVMiCNCjShtXU65H4VQ3MZZjTUXNRMQmyKt1yC4t1SKecdGVQ7KRzLTmwJrmJ47mNg4WwpLw",
  "key1": "3EAjEyq2dQSokJKMEpsq4AFaXenkBrPcGkNSUjPkBbwTEvgrmiissmZxq8Wc2vra7ZzjBy2A4C1YRXq8TvYPihLh",
  "key2": "4dNNM7Fj85nBaZwe2H4Mmj93K6NcqNw3FcE3H41DZe9wADJzjJjU9q18sQWTikn3BBBAZo6jpcc1Qg6gLmEFBPWN",
  "key3": "5rKHJ8ZrCuWJvYVNAVD8fAsLNggx7mesEVG7TLo8Psv5b7vWizes5dTQPM1uahyc8v5BWyR1HMmhf6qLN83yt3Q9",
  "key4": "NML6Ncyibdyf1bWeGcT6qXRnb4XXH7HryXMUdo7wDJLY8W4DnXJFsFUVJq7tgasc7e2aG5WzLvne2JaTyngJ42R",
  "key5": "22Jtk7hYPPTJjCackdC4HDythhNAnYYDXjcZwKg7vQH6ALTo2ioQa3ukCV6664rPNnvyu7Q626bksLonuKS2YVLz",
  "key6": "2kJczzatnB8LJxQjDaroekR13bJoTLJLw7Foo8uzJLXrHGy8nL5zcUTE2DkaHKiLo5nbMnUZMBHLCRqaiKsSo28j",
  "key7": "4FvXGXnwNCDkc9hyHGhWhSTSVETcFckQ67B7Pedf7bjMVi16n6guxCkrNiNStz9wgaEJ1yctHSUAY4EV9hWoj5d9",
  "key8": "5RC8KerfYLeQDXxXs64LWMGNX7Vm6ejYSL6Dt3MEzCJZFwMfDK5cPm4jCcwPvJimkpNDKDkz2NXtfw4NDvWNaQs4",
  "key9": "277TQBTW4d2bw2K78RgG6uSM7jmhjnZsy3Ed74j8CZsNt7GKZjodxaNZAJDMTdhNhNbD2pW1uuHGFHdGZ7VSZdie",
  "key10": "5iDuAWXtZechRUHzPqA7HJanQZd75MvxCfLzNmrQzLC64aKeBxZP6GsWUCQnUGXcnTDaHB5JAKD46DWCKgzZunTP",
  "key11": "3XigmjArPhD4T7aofai2tcD3Vin8a6fxPXSEsViae7GjjE2a5HgZ6zNWX5hYA7jsfgktPoE1p54667NkfBni6MSt",
  "key12": "27AG18jmJkwTNWreMQgBSkcBmehuPDwzYpPbLCx499R6dxYmWUBd48tDZFUppn7m6d6dwhkYyf4si74Li9CnPeyd",
  "key13": "4BWzBfgme81RjzXXXY72NsjQftNdBqvZsHdZRha3BiSWc4ykoaWz5WDy8kMrquK8cHyCAspTgsyTfQx865sE3Ccn",
  "key14": "MPhTTFM3vc1oofSiyuomy32zmfms1NFrqA2kmewdotFBeUXdmdBh5DhZUzbgHaMTibjtyC8N8PXVRgJiiMPkciV",
  "key15": "45nGrZMowBVLEXRde52uhnwN1Edhw8C1pXqVLRnaJnnSJ6GSHQqkT3BEvqmsALzGjA1kw6DNZ4HZT5fMHm7R3ua7",
  "key16": "2nUXP5X1FzdE6q9mgzx9DiMbfP24PZ4to3dakbRpCDAQjz2rysShNuKj9rs6EC6rr4Y4z9PsJ4CtNFocchnKrfa8",
  "key17": "4FTBtw9xRLU5EVoBaUzzTwqa41pe5gULAMFerweJkjHCbJvjQZZzZR21AkUEns5r63c7Cvhpcqz9TUbuPMVyi7sU",
  "key18": "4tQBZWwTMiFi9g3dXTNmqECeXa1dt2cRB9rWzxFu7bV3QoKixKaRuALiGA9aGdWkrzQFFk7zJCStXJDvjDFL3R2X",
  "key19": "3rWVHKsM4WAWeoQmdscHf7jB6k1oKQkHZt6jrJsUWfaNGicC5pxTNTSm8x7zks8Qr2kUT7sa7XQcWhqgYgZbkWKF",
  "key20": "5ojSVmPsdExyuuoMQyp8xxkAPVqKjJ84jRDuySWEwwjRDcridWFyiZFKETtSqoE437kZ1sehZcZMDvwpNhwJzs5h",
  "key21": "xn3iTjVqFHmKjmuTC4DrakUkkyhGUtk5kWi9zo2jZYJw2AfhqP8JwJ7m7GA4jAmi4CeXDmRx1fM5qHf958Ckp7D",
  "key22": "4uEuLQaZioc4F7kv5x5Q34bF3trJVUXazKkwnGm2e29EfEAtK1QygoB4xHXrfSkHGK3e4fhfaoLj2f8kUgJNsUbZ",
  "key23": "35u8MbRejFTzXDQiYMQZZsEcyEmR5MbpoNaWMx85tPLPFEp1Fa4CJN98XJv2majtCuSCgpwd4UDsaN7MQYd7jYPY",
  "key24": "iDjLzsgg458WCgMVfKhHBUTvBKXUu1HheXtLM9KjQNuDoifdpyAJJUxg3CP3zRznZpeKPrVQHFRdvoby4bCaxxE",
  "key25": "3mahHyssa6Hm3NB1WXoxNCwMqedCuond8Fth7xUyWfcRe2GPLfbMgz3V47UBspkqoPpAMbZ13UFB2EBg2jfGgKEF",
  "key26": "2uD9KqKz9PA1Ge3LBXw2pYbaXaf5hL4JtmmE6RFi8qdUnqFxA71ktdC19EwCUDMJf5fE7jejnALGrtXsnZRMRKXD",
  "key27": "e6Wg87EKeZ7xMoFqZgGgnTDeuWD5NepcL81v7nDQY4YFcxmr2WPCRKGn1Qr8qkSABv7Q9DWtRmWDRQxH3FAzSzc",
  "key28": "4ciR6HeYmz9J88cSpcBScV2pGti6reJdV3N8s35wQ54a1wy9W6QbQk4cHksiMLZ4TMPjuA5J6XjVCk4XvJcHvMZb",
  "key29": "44te9GiKF6iiChoMzPmVJoyYPEHJWPJeWZfdYUnqDS4E5ygjdY9a826qoNht59MGYYXwws9oHnucaycH8LjGKX68",
  "key30": "5A9Xhxn7sY6hmxAtSYEeZNXGyfJKDYRysUavdvDRCHtXS3TgzvSy4sy1nNYFWtwTdoLDGJ29EMoC3v9bnTwJfovv",
  "key31": "58fDN4iTD3LkzJFUst3Rb6K3pAJQCcSvTv7yS7NZFrqUpt3rrtpXcSGteHnP4ZL8qCRSjR5xS9p39aBWTTaySnH6",
  "key32": "5kS1vGjC9tc7LF3C5KxpC8Vb2WmwXLMvsM1nkmPwu9BTJFrifcKKBMwjEQ3GieMP3dJeJV2xmoEsiVJjUxeE53KW",
  "key33": "SdHHz3ERhBeu1PmfU2QWQBhLyxQKicHK23HtLeDnrdVRZmfKjKyZKmo3CJk7264x1fmpXfmao6rn1ajqbmh3Kgb",
  "key34": "5eKYZVuogjcYNggpZTP5nyVr2ZfXtKjEKFnvhvF4B4mGqX7TWuwLrvsxmzijbnZcqP96yQ2NaoWwUeaJVHx27pQb",
  "key35": "3RUKzQDu98Ba3eFR5qEds9Hzj4Vf1j1T4NXbMjCrSJPVZUmta8sZXyemaKxs97nc9ujyiQGrRi1CUoKcmEoGcH2g"
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
