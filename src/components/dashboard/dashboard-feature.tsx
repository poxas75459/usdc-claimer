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
    "5UDz3HyGYLG3qB9esoM6WQKfB1Dv6scoehBQ1uHdedyXyH5jkMoyiXctzXzqduTxmu1CV9EAtyvthu9RpUJwPA9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SBCJW7Nk78sY4NNvf83z9if7j62w1LDkSPfkGq6AFDd6X7ti7iiopaGUQ1HXPm3Bre9gyPqPWxS2hNJbeVWmoqj",
  "key1": "5P44WcoVs5kVjXgZoqk2AULibwLXdiUDfqsr2WCd243T5T9B8m93u5zaRydLENqRPcx89r3JwXHaUjjpMeKXuTrP",
  "key2": "4tcDa39dMbg5Au4CEjU6EtRcBbEAQCo5ju2e9yyXm8GdsFfAjDkDf2cFUD5WaZKtaCzXBqAohokSXWgTrWU4HXLU",
  "key3": "Lvn5jgACbxJ1jUrMYv74xbySnAVBi7xVTZAY8ga5XX26aTdtmTpWgDbUwij8rTsuH6115xpUbXjPatqR6fiUZZT",
  "key4": "Yz6mvMpgsYrCo4F5SH1hXaGxUbwpzVSHz1d84dY4ejTGFbNdcHnQhbLkNGsyMKRnYbsammLfAZDK6WUKyHrT8Et",
  "key5": "3EyXcjxErDC33zvVdrdBKityVwa4ubHcen8HKfMCPi7o2QnRxLi2s6faCqoMQPMF7pVWyij7R2RaUwBahKS4wZLF",
  "key6": "4Z2YYBBjmifqpdzQYdBUw7AXdcZCD3NDkF3HmWPqQ7Knw7Q9dtUfbKoSBDSkAV3RW3145RLokBPmVrpMv5SoLBq1",
  "key7": "2rdpVSxnM3HZ1Resekpv8mB8kDEy7vUMfbYTYuvqEWNwpibJc2txxsQMMVAAtZSVonbukQbKwBe1e1gKdtUdPmy4",
  "key8": "5RFVtDLyarQcNWtaopEkNikHpk7NbChWy1oXLJBZRPxAu9qRRNv1SwLJYSTjzJ43kY5ws1EeXu5ELB3EPefpdEgj",
  "key9": "v8gYqM1TanUnDdJKDZd69YjDUUnToVrKg5AggFUaCiotbq6fRxtdQ46Fwig7vTVtSptcUX4xix55BY7xmM3xb6T",
  "key10": "3QDMo9rudoN6S3BJXPYXTwuHNuoQDNWep7obGQLfKr1bb1oFrTufhT6LyGoE78xnyWSpCrr4fRrortJ6WQeXxDJf",
  "key11": "3QjMfKa7Vw5qiL8PEteTgRZ8nXgdMkhhn2o5YPfFfXhhCRiJzQJNE6V6XzCpB8xURtoXtsmFT1tgRCdpfYgmnrVE",
  "key12": "45EFTpQLXfisNc1aAfHPV2VNHZQsoeDBZLpkseRQ2KhRxn2DebKWBB5kP4EBu7EVJe2oahFTU4RJzEjAPaMRCDKQ",
  "key13": "3c2xYChvVXGstvm6zBVCJSSCrHY5hWCZ1qe52oXEQUNAZuD9XoxmcCN73YsGtWh1faUWKbUdoapTdQNvQcHcMNnn",
  "key14": "22cZMccNuYxbG19jbDK1xxxYJwmsYydBgvDTfcqGcSxq7VhV3hXaFyXotB24kb1HswPMALpb5zmzX2zKD6gzT7sC",
  "key15": "5ovLP28QokMbbduWTFWxBwDonpd8Q5PjrP7NsRuSnPGE6eaAa4XSnK1Q9q9QD9CWV8f33QMVyHkRjypbtE3ExbHt",
  "key16": "31fVEYwGRuXMftMc4JKFLXa5DadUbeZSjBViFq5QTah3uVr68rACqfUWtkTDdx9ggwjnGmLtgr2Dg5f58rTZxP8j",
  "key17": "2yuSrAqqpm47iAri8K4kzzGYoQsubnmu8pKTJrNjWsEY1VNPPu5TkqwZuWxz756Cefza5ockc7iyKEZijBSkLVjc",
  "key18": "2PYZU7ogxkL1Jcp6L82Qi3yvZEWkZ1wpc1ftSkBktpPBvRwfUqLVT1G4uJnWeY9mjrGwWJ9YjRhKFBQH5PQ1X3vk",
  "key19": "121YPQjp3qk7f4G7miTETMZzzt6oj67uNj59pHpQ9BFzTpiNPeFssW2zvbsuSMZEc56ZBZDh5jE7kNh8UbdyP4V",
  "key20": "5Gq1N3Xb8Djwx52hY25txpr3u7YPvKV9WBtQir1KBDFzmvB6kbckpuKMJabwUCzHZ9Q3i2wGJtdkmmY2XbtZFQmX",
  "key21": "2UvJrKwKTozwCc2wUwhCzhg4Bs5KHr3i98ue1DU5qX3KjzQ9YKmJJ7AonfRhPjdXQVwtmrwnwjbLUp34ixmr69iz",
  "key22": "J7r1GnLRBN6meKgLyGQU3gzv14XN6L6DKJuCDXRrbTLxRCpQeDjvE7oMv1mXLHmYW5Q4E2kro2z1ztNTH7RxBwC",
  "key23": "djB1B7K6y6ho2GyLcuyA5NiB2yR6f7HYpcqYVTFsReZPKADqWjrjMSibXBwbesXAmko363337gRZjbzkN52BZYV",
  "key24": "2opUKhXMnHfpRjgZNXPsomG4Wp2SJwH9PAvt9aRSQDCSQ73Yr7YPyVx7YW3AmPdDzoU7Xtwme8Z2HqhHyNeuZAnA",
  "key25": "5uHbmJcaLJcQ1MvdBp1SZg8dAWqc8J5eNGxoYV2pFqytVoxfo9PG51yX5tsXr7HXHggBKvcwgoNK19TnnmtMR7K2",
  "key26": "49m65WQfRZETb1Zp97gw2q2UVp93WH7PBcUvGmVg6h4NFY2RQB4FCPqVhAn69Ytu8HWZuct2eB3y54po4mqqzzzG",
  "key27": "soUNuGGZycz8MjLpZ7CqCu42c8asC7WmWkHnrfNHQC4BtnV3tN6Ve1bJ2WvEA3Lp2yDjFn2rujPsgrXYjU61vCT",
  "key28": "64cWiCYyH1RESYyRKNnAh88L9Gk8jNhSjvknfiNAk7pHn6vjDdk4Fqa2PxjmDE2dfc1cjf9KNPZehEN84XLSNqjs",
  "key29": "3SSXhw2AduTkDbF1YcUnnmwQs84k6r38ucnYPsX5HwZNCY6mgGcfXN8dmvvqBaf7oQvP5XwKykXhxhawRyvK96kC",
  "key30": "3cXr5mRRUrNasiq1N2eLwdDspkWzpTvh7DEQpd9bv3FCErKSVYR6kweFShtkVDZ2Lesgocw3apKbGsVAxUhkQS3",
  "key31": "3k5SPc9VgezcEeKx6LErmrmVuV2DF5T38i9m3hmCJrzjAwqecAUAepAxqCRRX2QNo2STnxZt4F3yLFcxdYP7suao",
  "key32": "4Rf8QiSeVpvT6RQtqDe8o3S1T9enk7qZasHdF4Fc7YhsSdgBTsVkYW6fZEhRiWsTHzCvw8BAFuvUZJWjM8bSZpfT",
  "key33": "2K74BSS6cuJoumgTCPEHVnW5c7m3ov99t1WhTkTMEuFSMA6h8zuzeNgTX9gSuQ4GEUF5vDpVm1PBQDYen9hJLQiY",
  "key34": "CvHYMiCXyuCsp1BwSmUr6nQ2EaYnRryiHnwNgU7wjB2pi3bk8r3Lw2dK5cSnL57QaVid1Hj2aBQ4WKHUNg1J6n7"
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
