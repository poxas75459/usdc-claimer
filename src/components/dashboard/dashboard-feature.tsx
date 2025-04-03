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
    "3JJGW7gAYdhCCt1wjm4s5m4gHD8U7F4UNLSaKkWRArSLN8yWfiVEcRQ4W9c2HsnJMvSXWQqceUHnM4ZapzxgybBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57xVixuGRVc6xNnESEgTdyoBseRWRxqTiRPPDqXBF4ykBfCtcBTskxhq7FVJZNqJv5ghTDZM5kAsLSGrccSLoxLC",
  "key1": "4sbFdjNY8kEEgKE2NKgo1ynLrPrJA6Wb53vbTmmUxVDJPvopDwyxgy6x6jTigX6yMcqcdeZ16mMU3oc3hn9gfxqB",
  "key2": "4YGzkAGXvLLAAkscuQDbktCTrhbHJ5BJhsr8d8LqWdLjFJMPPDtHKJYisqDw1u378jqnMhPexb6gN1RUgJVRGQqS",
  "key3": "kCyfKWZPGTdwfwenJxme99T65cPGAvvYvey7ijXKcYWtxjVxmGjwDyqP2yCMSfBhbH4M3Don8gK1HA28dpBLoFi",
  "key4": "4VuWcZpg1xPqGqVARoqEfGXLQ5HDYcHepseVnoZhmwunBfRcaEN3LcwGCdGmYXud3xFMxx19iPktLwSXr7TfS46R",
  "key5": "5MVC6AzgGPxgU9VCSJXHQd6bjWUeibvCDi5pXLFdtbKEo5MQ79Fo7gdc5oVAMg1Bog7BXFUBFFb94sgcXRWA6idY",
  "key6": "4BGu7kWSsztyGSxbXQmZMyWp1sejcxFpFf4hvh89NkMUAsJmbYXony827Abj2kVtR8FTG1P7gEMCiFzFJFtRprdJ",
  "key7": "3QYs3b4rcoMpFkQ7J2dusG3Wciq9iKDR8CV7vzk7c9mBBHAnhcNgNofkviuErCUQAgJ9hxRRsNrMKipX76t7L1LV",
  "key8": "4cPrsmURsZ1q3EF88wGYw8mmH2ZGhNj1KKkgs4pRKZeK2dZB2UiPWGDuAsb8AAz2pfGV5UbNENgKN6madtUKoe6q",
  "key9": "3CHHjmkKntL2C76twuGGFnYUstwRt6rmjnTpEb3wR8r3GN7XD3Qf1naGVwozNcYGhfiPZz7mBkjCgeZdGXZByMiG",
  "key10": "49aH5edLQ52z6Te3nbv7LxQbCETrk1WqTJCTqozePojRDoVehXU2unMLKStLzVyZUArdaqEW5usf2zesYymAR6LZ",
  "key11": "3Wx3V1GDMLfMbW9WaaoYCC8pe8pCrQoBbHAXeHCi2VuTbnwY8kabLuGKffoZ2Jgy76FBup6tiZvnMT64Qmfg7Z3o",
  "key12": "5o99GRSTQfjw8RserGhKD47FFFebu9r2mWabSJYSQeoXVyQi7vkm3sB7isN5S7syUr7oV1gE7VSiRBNh5CrZ4THv",
  "key13": "2WoWqU7mrhUkEWJ25dy9xkq7UTsisFQNwqsL2uLUprb1rADSX2xzuaDC7eZj12atHdpTpsqBDxvDrw4EPuJHuBqU",
  "key14": "4uo7McU2chXy2k7e5ZsHRFhbC9C3AKKgaUxNfnBxWUg4wcCWXcAyqd3eV4fXrnqJ5sUEEjyA5UnWbR3c9TAQu1Jm",
  "key15": "5hUWRTeMQ3U5mcN2eLuCQ8j6NevHTSagHpHTP8QL8dc2VNG8XrYK1oLBCPJrnaBwcLwrH2MBLCoBTAe1MiJMjMnL",
  "key16": "7UBFew9bb9A8cnEDN2cS972VDPuR9Bq2cVYvAhNjqw15ToX2VjStS3K8TYdYWnS92AHCJSvaGuKz9CoQrAp9EvC",
  "key17": "45r3EVLsQkQwszKzyWRpPkjU2LihVxNH8THcNtyCC7P7vKvV7sByQe7DgJTKd66b1vA9ozonxb79D7imTxYXwtD7",
  "key18": "u1kiAKk1AsQDnZ9aTyJzYwqfeUWvboxmrfCtyzNsGDbN3HJztj2pTNLqBeELNiqjZYjjC657DUiicfxU8ndMBnh",
  "key19": "3kUJoxYtJogDjsufGb7TU4mEBapVPthPBJsKVpCi5oy78PkbD1su1g8siYiZs1bEdwFqb13i9pbPSxHaDvu5ZZTa",
  "key20": "kgZAH7Q8TYWuR3T2pFDFrCpoXJPjA1vNk7EfKxcf5185Ksck1ngRZTmUz88DoF1LaenbiBrhqfGQU9BaRCFqWyo",
  "key21": "LxsF7FuFhVhfg3ZKxaoqWbPcPpJUjQQBDoa8jgqgLcCEvURSaQSJdpsALSVRYbf5SMp7heroFw39r2phys1n3pi",
  "key22": "5UbRWRV9UmHdtk92GPWfAM9MH1b3ApwSyAjtFRq1XXyxqgAjzqY4Ng33gn1em81NcmKqyJ3CDNjYotVDE1GgpMuL",
  "key23": "32CZpRSEYRVjAioND42q7MREpw1gSgjdqTwmc229Y63pFLjGFt6oE5mMeRVzgKcLmZo5x3XhgCBXvJPoypWLmwUT",
  "key24": "2L5teZhPJP5nfKdRoVag9FcZxZaE8Cq4wHfFbeBcpzcKNui6g5i9XYjPnpjL7XQciFAWY9Pg6Wg1127wktBXpNd8",
  "key25": "21MQsWssdL4TKohaMf9o36Kz8NthVJyhvftFW9NMtytecaJVvgd9Ccoaa1umwYBYd1vvGKzN89cXJx38iC8sqqHu",
  "key26": "4phFQw1hYtN6m4ASxK6TWTgn8qvWZWqXNJAyDMrLfTBpTgbNiXqfGuRryuwbssdeUvmqLy2VdLkYYp9D59tFGWiQ",
  "key27": "bLz52NmFJmPCH1cvU4QakAJMv4Bw163E94SArrwER1Gx36zFNJ6YU1bUmp3sBAcGTFdcZsTgvi2AGXzcRvhoMgA",
  "key28": "4QoSHqW5xmVaLW44WPsmUt1iS8vzTczFUZh2Yr6iXWFxyPSQnacStxXEJ71sE2VUSmNzdmfNrctT2fjcNYV49hRD",
  "key29": "5boC8c4EGdZY5uPd1bhvnCnf99kpJjZ5xUekb1eAnMK7pNVzxjKvQBtcX8Y1Y2vvn7nWMMMxhLwFNuUzVWA8wfeP",
  "key30": "tNA3EETZPG5ogebazz3nfCBcLFqcjVjUxhoMFZdfvCM3hQAhgFwqkRzMJXGxXofnND4Y2WtFBofZ3dhcS6RWfZA",
  "key31": "z3YYAssCWMQPMycbWiRWodWkeNizncTTzmZk4oySHTWrQ89mzxd8rn61jmwwcVVhoyk9tBYK3hefZzYbeePRBZE"
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
