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
    "eUddntqeTBRTqjpwF8uxRe2ZNe4HuTKQUv1hPQX4cW1puBk2zWmtKa93Xz8nRwBSHqivDYoTyJe4dUn5eFmMhrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27x6UwhTEwf68P5QMD6p7XrQyK7Bhqcv2XDTrWEpcqXA3RwaheL7PHGXF7QefLy9u6u2Csg15o7NSARAdfzXzLK7",
  "key1": "3pyvBoTS3vn4BACd59LVe9HriCgWcTQeP6td4LCmnrGBv1HniSNHsxz9bPtU4fHTkbERxdgMy7u6SJnuzcLSYJbh",
  "key2": "4VgbA2JtRasZ6XoYJpnBMJxJtfcMbeHasc865eqU1TAntV7oSAFGcRdDn85oo8j3VzN4e9MtQsRMHMK1DW8Ds4Nz",
  "key3": "2PPYwFJbJ8i6eh2AGEyLziod6PcdgU6F1MT15cfLzwKGsEWF84pV4KYj9sei5rft5YbG7rvYM2me7ditzvcXtoQx",
  "key4": "39nk83AWXfFb1QX6buhAtDSc1zH9j18PQRsY8UsXTcVYzt3gQzAj7UXbwCoNsj41sYQDnXNCvpAqwQ1nmu7ojQ9U",
  "key5": "3Ffx7Yrkn2UZbFwZW5HHQvfWXkhk2EEP1miRcwYdeMSPJ6QnRBxN6kqTB3TK3n3hnojTosTG53egRdvJBMFELVZn",
  "key6": "x5SMk5v2FAo39NvKVPtZE4rdjJanTwShjbA1jZsruvQFEW7GUpWkj3xxY3zCQDDbfLBCYZvXGzQBN2w1Xhq8JRg",
  "key7": "3F8H5JA2DbUnmGjZWFTzixCLiEbN3fEVYLV2BRksNaniHxqxm4obRjot6BiKA9ivmNidETjNGHjK1SntdRvbpfoD",
  "key8": "4pcRYVJNT3oY7oCq7asLEugVwHgMgzX2KAfxkrtbWzXxGx6ckTCQBGY8kKwCsykPC5uzCSZGqTUzMgWNuxVwCN31",
  "key9": "3WMMurr6cz3j35v4hMbTf15XQ9ia7vRRp4xasGVeyKCxJZnHjg9mZDYfBUZhe9eYjytvRn1uQ6816R9mBujVS5S",
  "key10": "44Sa4bBqjC7AmDCwqiy19usoyWSgRwgfBLR2RUcyphjDTUiL1FDrGXtiUiXrhpp2xggxzbdANDutpkUobPHziYsS",
  "key11": "3tkxRoz4zsiDfEpvesKTkds79Hju6bfqbsfQquMX6Z5WUTiN4pwvqWtAqqgxygFzAWoPkeWh8ijpjKw6wV2ZyQV6",
  "key12": "4d38pfAGeUm7VWAN2FsGSErctJRqNzSeLm6QvVpdT9rTBNCFT1NwKmudu5QBKgLn4LTLdxUgVNgH1JzL1yQ4Nc9W",
  "key13": "brCWWU3Ho5AAeSrvNoFde4raZVsoUC96MEozzuwkmheC4vj7PEwJk31ACH5mZE6CA1diq6rAzbbUQU7JJ82YhE8",
  "key14": "MQ575h8Y6ZgNLibAKE1ZuLMom7SDD9149kRdAdCShXLALqg6KDEHzN7grRGJ67RX64AmGjSK6GqymtmQRaFTFJj",
  "key15": "4uoDdjrma1TDHZ1Wp5YtRTZKXsWNv4gU6sKE5PqZ8PZXHqxiWCzb6Qqi4vpBPDTB3eVgUjpZtJwBFwA5eT1zmbGU",
  "key16": "3KjFRXF8GGYLxNx5gEeVYCz9tCja12etS6TxGpaYNFjHjH2M8qQEGWwRsuSpWPCTMUmwjffMWv6EprPiPkJoqCbN",
  "key17": "5Ukq8sVGmVimbfE27qpbqisssvVt27pnQQyp6XzheSyWUxw4hH7KmEtDH8v4JBZF2RcGNHNrRGu7FUHJQUYpGqBx",
  "key18": "tENDMfk6jfNmaquoKAFpREFCskgnKPCJKEG1gV95iEj6rVoGEP2TDBPiEhNXWL3UksW3YZrncqJSJaxAtX1SBhQ",
  "key19": "2AKKfkrfcqNA5DWZgjyJyGihUct7hH8BDTX18vyRQ8sd26y9jLUsjGCV4mzhoYrJiscBTTaYuouFb1vqyuhkSNLQ",
  "key20": "Xa8XpcsWFM9wAYBALrWStfsqfnDDJjiZFZYAvEwqgCZsDit4aecx6BsPNMX8vctCfXyBB11x9m14sSboq5KNBuv",
  "key21": "3r4tixuWHXb4V7zehDGxhGVK3HDMjApqz5mEn4f4n5UoBiMCXM6zhGzyCUncvnt8x2A2aGm5GcFjW8fxq2pzvJtk",
  "key22": "4cVbGgutHWKmVhoQ8PSEDJDuW5GjGu4dtwDDayhxzm9CcHoNrsGWaFtNrREKeqAgSsLUZyx6YKmEMY3yjHpybEm2",
  "key23": "3YURGKSSaYvF5QGJfmjiKDYHuCxVv4iWdSK1VaVtpHnipG3qipusjWAnQBTbpmhnk9ZvJshQhYKqrQNyS6Zts6Xc",
  "key24": "3grafYdv58b3yPgLJaNEbuBzcwnNAhDt6TzSTqoE5kZJGCmfYfArX73Ls2yRj3S6ZmKwvSeETHELzBv3QhFQJGmH",
  "key25": "4HnBRxzGgTrhnfpRqP9otTSerbyg54w6brV63iARuchmQLvGVR24u4WTmR5k4cvWL65rscfWKfQpew2YRPss1wrT",
  "key26": "3ZZyiq2H2hDdH4Q1zriyfjihZAMA9nRA7zLuZsp252kRXJ5x25RgGiDSSeUXnDqMkHWLSUWWc8u81Hxx73dsc4XN",
  "key27": "uQUAmGsFP1KPrTW8UXuuJ2g5cnymmDFyVDhEntAfjADufcuFruLjYBwH7pP2kcHMrooM5M3f48PUEe4FmbkdtJj",
  "key28": "86unLEoyWMZ32jUSJZQLcybGKsvwXRgmfbcZz72AmqASqpT7XSt7rbzsnXYSFAUGu6kYZmXzZAeEHLuEW4tAeW8",
  "key29": "4c8zTHxuy3c5J2NPTRt2Fz5k5iKbwHgxYyLA4FDnZdgMUomjDmkyuetD54fXjkDSkLsPjJBySCZGkMh3Wpz7NGyF",
  "key30": "4RrFPmXrfhKwHs68QiyEW6Jbzust3kPz6GYzHoscQY5V6gj6QTwAMjUPLCWnx586VfeWMyUyrfzSTedTwcs3LnwP",
  "key31": "5VTXrkNJJXyf7duTL69RJmMBrWPpcDDBSyt8aetgsuLKnRY2jzQSSj8PwM44wKvsH8tdorSUkvn19m8P5GPHVut9",
  "key32": "5GBdFCajV1ae7pDKAh2qG7DdJiM6zCsj9w4X6HMzh2w35JAU5w6a7W6ESp4CXRVA6gB1aB2Aovp2ptNrgAPQGtNu",
  "key33": "5QUmrbZXqvtMzcUTyUrfB7win8JpR87JGqt78ZGBjzZJm7tz8Q8JTrkJp9egeMbdF7QdzyJThgD7rcheNkBMdueA",
  "key34": "LJbcbL9YKBQ6yhtrdpMsp3MUvnEVPCqEq7PoLmyN9uGiNDxBhHhz1px9jzQXuMKPMREFUYQxhrfqCzyvSGXt6sy",
  "key35": "sGLruNkMHrnKdA1RFB1t55yWYko8fidFbPJKesHHLH888dU4XMqaUwoAkmbAy6yFa4i5MQiuUoSyoRXafMPacSQ",
  "key36": "Y7G99bwnXktA7ARpZDyX1cUSoFsjDfeqkZCkG7xMGV2aTeuxs8yy7AaTBbnro4tCUwc3ewBE7SuKxjbtsPtv231",
  "key37": "4woL6CJAudMajEzCa6Z2yfgXxfzLe1GyY4Ytcq57urScLcZfLdYRUpPy64RxeREaJD4BNnWLsebnsa4vvSXML7kv",
  "key38": "2DF9LPo8rdzAijjjZfr14zRyu6KCjVULdTbvgR4hLKAJxU9onMtUQeMCBg2xX4E9116Ng5zuWETCAPZMmiEFdJz6",
  "key39": "3VXNNdnFLdXBoTC4vTrUYUfNbNNbFV1EYbfTB3aeaWJDrf3Q6sRENRDuN4VWn41WqsNRKzBnA7MRFBL7EL32u9xW",
  "key40": "29sEzeEJkt59YGeyZPq5vcNnA3d7zruxfowbo5PpZX1oTD1U64muTsaYqMeJjbFSPPdPf6ypDacEavxGzWUSFVfZ",
  "key41": "37p7h1GWr3PxSMEVAdReTUQaJDWp6ogztjYpjHHWRWK5o3drBCfMp9g1wxLD9g8YXPQmkFjkAq2VJn3ba8tjK5zX",
  "key42": "2hoJVnbdUEfuY6gfDU3ywjpMmZS3VuPrArrMaoeUHZosDrWG3EDBS6awwGqEggcrDXy4kUSd2JNp1eKQXJSuyjjR",
  "key43": "2bj9tykBTm2qgrEoAtgoaYvjoeztYsFH1dYKvxyrfwG7iQ3wbxYKkS8gSzeZQi67581WdgyjS5d5XnrBnxXBLMgY",
  "key44": "4nqsRytnLGpktDqcgzqgY24hDzFxr17nq13wjbRYPEtMkBDTFyYc2CgMwiSFv5tGB7DamcLcdcPADAsMvZoNfou4"
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
