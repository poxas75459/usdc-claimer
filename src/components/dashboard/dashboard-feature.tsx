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
    "2B7Eps2VKn38esYUiwJKuDgzHpfSSAQn9N8FPNjoSkcWjHpeihWPgzuBH3MdsNUZyXWEzKiUJ8Fp1i22kYqDamr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4me968HU1LiNa6uhMQTbr4qNTENnQoV46APfuCk5DqZMgae3S8aiXjLpwo1wWAmJJYJgxYNNh8j4kYLi6vHNftXd",
  "key1": "4hu11diwraLsAfdtj6ZBQjL5fxFYgiiAqMVVxq8xBuaGniE17U5eSpSW9rh47xzTMvwsi46eJdcLmBgXigcacFpc",
  "key2": "YceLA4CqAWrkav1XekTzeQweiUdgjCSxiSGoNpbFqhracDmDmsyje7iKgfckfgDPG9NhPpUSQxWGmKPg2VHK8MS",
  "key3": "3uCubUHpfpDZvWeYGCWTw4RBjoLsC1z98Sd3TnFAixWH7XcP2RMs6xK3xda1JrUgM2tjCbkVq6BYqGQvw4HiPYHs",
  "key4": "289jPEZ7YG5K8NS5rDmMNoaZ6sTuwzmj7LLXK9gqhS9vGfmYga45H1zp2izDwoHG5Hcbw3E7WVP8oQWwCsXXWa5U",
  "key5": "5UJdWiYt1VkNzR4iFv4DNRVbAzcF5EM8HwEuXho3Wavm6XQi4hdkDYj32EKwsbB8cKJXR6VcoE3N3vXpssM2vaFY",
  "key6": "4KHCXiDecwQ4Djt5mk8UjroUcbJ9KqKXVc16DuZAkBVnbhLDKSx5LmDSCqAwiPMRPjHVWqKouBmR92CdFNHPZ1ad",
  "key7": "5GmkYwNyN9wwhNMe4jYQer225BhhBhWdD9rdcZdix2HhfAcP96QYLYmrVjrLgnwT5yRFocf2mNXb6mvWqgJPGeak",
  "key8": "4zFtyMqNZPnQAn9kbwz2u65Mkg2zVjQDMEbE1uUjtWrHvaTzpvjCU8c1V5QDZCmEmHe2XVVWn5rZtfL8R75N4ePf",
  "key9": "2VQN454z5vvNZ6efPjWqd3PcoXCVKirCJhnkbtA2UDRAauimz32AktupBT4iWHEDZ1Y85yR6k2DogJANLQJ7T83E",
  "key10": "2acSPkQGNRap2TsZJnWK3ros8vY84q7gr3hRzjqTtyMoFy9EaAWYXsASUQ2ydisqdsrvB2D61RxfTx3WbcxJjpD8",
  "key11": "ekzDNYdFChoALJyxnhVQTWp1VCDjyTVatgUFyEi8FxxANS4CfxTpEfTpRRjGfzVJqFSpE6MCfW3EsS1H3Xc3pwn",
  "key12": "VH1Kt9md2Ndzt8PFTnDBkt9CpFztJRYwT698thyAZM66wDqJQSoDREMKXRN6GZxHPiCPa4Kg4v3SLb6VFQAtKWi",
  "key13": "nP7VZto1LRqMx6DxP2gxd1Cg6b5Ezdh2185mjZwHY5RL5TNB4Kf6XPkNL3xncCDQtFmDsdSJGGqxKHdwEgSvTkG",
  "key14": "2WEPU2RX9Vnp9wpUuraGtfqja5yuE7wZsTgEqg16UtGsTxjv6nV4A4gRbFZqxYWzog42EkDmDCN6UN25sLiRuY6w",
  "key15": "4wvCGTu6s8tLrfWY86hbj7MUcYE4YoTV9kU4mPUh5QZqYg4Wxz9ahdhf5ZQSpQfGNMf6gmsrb4zrzfKSRnxV6sUC",
  "key16": "4NV6aH14fdVkaqnPgkLkCtHG4yW1aTiqSV4rKgr8turkPaoCRfNrRz6mQdRQ9aBxvZXxdUFFeCDsw7xR7aQa8A5C",
  "key17": "5LrvLtBUV4YjgYL9DaPuZpZ1VcKN1JBbbyV76g74UD463nbTtcz1a4QGa3nB3U3Mjvx8RNLBUX2KsxPwd4kcCMwP",
  "key18": "34VNc3Wb3qrdcJtnMdrFaKKu6uMsCGP8Y5TsJ22XMWkEMNJJwYX1hSJpLvNDzXea3CPVMqkJ4nWg17bWoHAyM7pg",
  "key19": "UjjEv8HsvJBfrtv1ULbGQ5HUUTXy2hCxdn8a8sHzjXpUnkphHagrndJdV3dfwE4GAUaMG3zE6KVFEZCTXRmFdiG",
  "key20": "5oWRTkMA3F6mJZhAh8Rf6EXtwLXRaaeJhu6PnwmsEvHLaAAemLrzfJKiNsvEE12owPz4dQrmjZYogEDDv2QaWX4G",
  "key21": "3FeKEK11D4XZWMxAud4mqdpL7AnWVJYW7X4i5RCqQZSA1CYUiqKzmd8KWZeDQoPJbsgEhSjyT6bw8ino8d3xSxYL",
  "key22": "J8rz4E5DFyymGaQ2VvHw1JYhkEQbbYCSB7XEmJVNicRoxNfY5kUD2wrbpUmmJwfvBsUpAq1mgQnMcbqJbVFYAYT",
  "key23": "2uALR5XKRXc5pQ5Q2qK8apK4ipvydHhXfbg4LTkCGZYA96aBor6upKGFBBMAMwQmGjsaEBLsTgGaULobh1VdtEGy",
  "key24": "ZmQWwJ11isDE6nv5qn19k3hHmGszjqVYXHvcHqS83SjZ3dd2VPrVKtfkNWkeP68E7rGXFZQRP9p8NsFoMDsB7F4",
  "key25": "5sXXUwJifmrs4VUxUjGhsXe6UgN4Fb3HXsSj16vaJin6rNkhKm7fGbRRBrA2jjY7WcPKP9frcLi9z5XTvyXYhx9Y",
  "key26": "3smUFxP1NuRrV3iQbovFNnuj9x4LuQQpWdx1wNCj9MU5s21D88zN4HfQcU1w8oR9jhjPMep6TKgWRQ4UKDRUvKFL",
  "key27": "4LACWwzwPVQmbY15AjJw1NZsMX1B3KaymdqeQk8TUuwXPp8vjHkdcYYuXTVxrNrGxBYTHw9bGmXQCURvo1KZy22h",
  "key28": "3im8YT6JSmzyrCFgXBqVzPRNRjmDZC9mYYfqVP1KNho5czgLYceouMrRYjLsZZmGbZvtnciyKK7rPbdd2595kWEm",
  "key29": "4cQykigXhvbsonW9MEHeEVpmjKmR7WEBTgZSb2P7YzS7QXqGqNYEoMw94Y8yCJLKmsYG2Tgfai3KkVNSaqakxkqq",
  "key30": "5VHxfn9z4AZzRkn6MAwFiPZ3jZU2JFJNCV174mGMWAJ5X6DKsXTCyH7yqwdGahWh8BdunW9rJGsANfL7h4tdBm5U",
  "key31": "25qBgqFx3QZeMUf4mE9VkgyK6i3ofsaHX5aJgMCYCA5w57kg4LSY4EXPj1EdfXTMaAwvnGHowgkUXri24YGQR4pz",
  "key32": "5A7oaXnkcKbfHbBtwcCQbSnAz8QGtLxoyEnyDAwfDCeAcsu1X3Y1JeKDSKhpBVCGSio6g8vGK3cB75uR3abYvuLV",
  "key33": "qDSzFF3b5vz1FoZcdqcP3ke1kbH2tCm6FxZrkZg9gvSa17t49vJaNdr2C79jfzYCWT6Gy9eeffUUMq8R87zyvGJ",
  "key34": "2kaBXiSc7gtGnUwxYyouqBJXpUyUn24gjz2K6BN7F7wcipW2pjjfepQjd8UF4STrKFZ5EJ77A18axgriq37sAtXx",
  "key35": "57AK4eit2tYf5NH4fRpPWGSsNSQSysxRfjsF8fQweKU2foqD4WvwXFTPCT6fsZ8PHE3SRKkBQCKyi4gLq9qgFGDs",
  "key36": "37BFBfdgia6usyng5hTi3wXCjd8R6Lg44WtQz5eT8q9boAHANRdWHYjU9G5jQ2t5SmyYHRXqdrS22gL8wq5YFmQZ",
  "key37": "4w5VkTQnVPZw5doGwUBmaiaSyHmD8JDxpjM5d9tQMBbo75V5UuFUbPdkASoaFnk3msphiN9hv8etgwxUKiz85rmN"
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
