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
    "32NtALrkXPL4KnsJkWgmQpfG1uYgAbmd9bzuSyU1Hwt7F5nHfmgBZRb5bLcuzW44KeTZQ9D53eXP2MJcGLb2BwG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y1i8SvhjdptQqWHw969VHf24JencaDy3Y3D3YQTXVNNfLkHBg4t3Yfic7WHcifceydT8WUKBFHQd2TjggH4LqAw",
  "key1": "eTDwy9CSDwpRe2nZjxKANNvwm4QV6sWYKLJtUKpDXK4BLbNNiGMvBf9bkLWRnyUFzptyms7ExVhWkNZ24pi6BQT",
  "key2": "4CtEs9NHPmwcxVdWAfAtkHWRbnt88sRgKirGRpRTbbbvrnJ1Gerq7uXrobKitPZCMc3GBx7JwQMUL9qqvSDxshfA",
  "key3": "3iuGiX3xTt88ZqDrZYyeqwwSKo2GSZ5zcNnxLsLCcGU5Ypy6QyYNH5RvC5m7on9u2yxAH6w1cbW4UGyqNt5kdr1v",
  "key4": "4hdGSJE4QBmP3geFfDf8yqpBYdmprHqMV8B5zb9Gn8V3nYeAQEaHRWYFCY1gkjkLksrAgvqaNc7vZNNgWfLwpQae",
  "key5": "4MTpRxDG8ZVHNCDEMDYgn4G4bXwbyZ9hNK14onEeLXmxReyLivbixzVCaqph446ybQB47nSaXmkGAz364kmXkEzF",
  "key6": "39nL44jq2JPuBBRWuEPVaxYiF4JsRSsU5mmbHjFcXbWYNnZE5TTFCmds2Q7Dmuy1fZt7Rmg4yUwDpzgGUe1bMK8E",
  "key7": "5iYDCKrbqsrJqoPcCT6oiULYcLP4QL5H5ZSk4WQg7Cd39896HU7fDJDNjQLwUqxWdnAquAvx9UG1VoVhRK4kvXQo",
  "key8": "64NZzQ2aFVftUdczQVDRTzNng6J1jT1rVup3hWou2vyw63G3MHpwm9bB1BUkeb8zau8GDDawLwebXhuCdAXvh6C4",
  "key9": "db2iEy5Jzd29h2CGZDU1R3Sggzxiho2FGqtopDnEJTXjTE2vQuZGxtT7HfU4CSnuLPyVUmPJCMYkhoKRK5hF5LV",
  "key10": "37PwLvSaWG9gQ8cFTDhv8yzV8BYeBoQekf5ctX9AUSoDwTPedKEEiCec9bmYnQJdcvX1rrepLAgeDyeHSThBTJNt",
  "key11": "5CGSN6Hj3n4pGu7n7QzS8gKD8zdUjZSA9WeFQEMkXGSvmrE3JP9JVS4bH68j5wvfyGwVHEXktPg4Eb1cGxu9Wtj2",
  "key12": "4HPcSnkFUCkz9MKrAjtLinLqeZ58kTf1FZRuyeEMdjgBcgQc8Ridp2CMcBsRZQcia7j1vFj1upu4uNDZmZVWihng",
  "key13": "Wdv4rZChhCWWRWBviazQWnXJXZu3oNBue4Tq3G8Zg7yvsJrAjDoXVJAK8Q79TeBd7BoYzrmDiPiPRJkwugVRVdD",
  "key14": "4HBhNNHvGGyqUs5ztiYChe92f3nAV7Y1uxGitT3L2JL6UkdWXeaMWscjKvtqX4eq92Hp5PV2GarFTtRtf32q2kGL",
  "key15": "4To3QWgLebyBg4pufLyvqw9aumYUvM6VVKD5WpzMfiZG84eP9b6wHa6ETiZgF9Ls79myvVrJKjdR9vBpkFFqF2PN",
  "key16": "23Y9YtGfux1VEPBg1toq38Vo36BRE1HrcibeL6eVLFif99KUT6Z6KTTTQKKWE7zMR9oJF1WKszYmxxA2SoZRUGdc",
  "key17": "4AMfCJRECoS4ANt7uwJVD16rGaTrEqmgNxZ5z7MykFR6xc3nmc6w2EcbFyNCFbteLLBVw5tMS6efZJaX5uEp8sFJ",
  "key18": "2MAPojpZjqaUuw9LQUjAymSuWjqcq9Suh4yCbBRrarHLEq744rB3QuTf9EoWp3KHLm1ja6cSjfWJyqd9bKws5YSr",
  "key19": "4BhruKLPrmAoTEkW3fFNRiAh1v5ZoUtGHZgCzE7RkGKpRzfAmaqEs5W7XZ7gGp84iLyTvpNsJ4UdyoubR2V1rPcJ",
  "key20": "2E9nZzzdsDTDSoaSQTm8C8jGUi3wWPadVc3oVnsuKPyzpbdijPWoK6N9EVQjPjCUpLcLSUY65TcS1n79hc1mxgjX",
  "key21": "pSZ8E1MAHtyDy1xr8ebUdoTxhFemcJGeJuL5ECrHDePwUrHiiXGRQ5rW7vhPww2omBur2sX69dQyqdvHDzyPV7R",
  "key22": "4gGZ4A3b2RSWHCxFwUAkFf48zzceZ5oa152Dng8AqiKA7dqnpLHTxP1y8f44dtcAVmFc2Y7rW9prAaDfSMVrijD3",
  "key23": "2UyQCEnQiZD9nCzz3jKUfL7o64yHtU1P7bmesyPD8ntxFicy2Eo7UQ8vZZYgqXmobynXKGurXuNKaNF8VnoZnazD",
  "key24": "2iaaurkF9BfcSK32PHkuTwPmVGdrvrFDCLXMhauVEz6PBeC41QRGRvaTim13cwWEwq3qZjd8vCFiUafVKYAhYA1a",
  "key25": "5WgXFShG4bYKF8woScrMTA4f5zy8sBS4BxTGSZyKfnGD7uXrRtb1h5QPy73D6LWn2WZHhdfPDqgTCfEHt5WNrasq",
  "key26": "67WnTuVtMQGeqgyjM3B2cZXeMy6qwxs1pFjWpSZZrwjMmqC7ceXHxLoffRX3gVCLhSVDJf7Y4gHteM9rEsucZek1",
  "key27": "2akDd1teXH4HygyWh5mTYRELfUoJxcwwBxCACj53NXKswaYzxR35oWmpfLLkL5qkDRn6zcrY6qrMjAaKwGYCzNAz",
  "key28": "5vWz91aWLqwM2QK6eqRWgfkKKk67XeZPQ8Con5GyBA7kCzEmLk2fBpnDi9zpqv8wHX1yKvkYcKcPPnvm2tV3r7GK",
  "key29": "61o6zzbkHd8o9cvf8Y4wDHB3AhPtTBEep1CXBjirtAwHWgeVq5nwrcfPudEowpsCJjYGjtipLzyX17dBo8ZacR5o",
  "key30": "5w9BQM1LFPLWADfL7m1YrUM1eHhHTkNTisbJ58fBiiXgxJxiqCPTR3EMoAv7oJJHkPjSFuQeyeR4NcZSS6M5ACYb",
  "key31": "3XQVBDtN7aiUTFL6VFNiYnq1oSBAqR3vbcRfHeQ6xQ3hae9vCm4Cckqm5hj3P6VF5eY4Gw8G8XCbW7jy6fEaKdqZ",
  "key32": "23tKKHRkdYjGrLsuopCFVK4Xq62Hvatm3VkWRsfM6b4iDPiWYVvXM5D4w3w2UJiNLyP39ATHRsAoDPXaDiFnKXfX"
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
