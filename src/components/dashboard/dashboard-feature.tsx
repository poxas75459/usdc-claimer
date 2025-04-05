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
    "2E84xFjXP9p2x6VZpvUaHgvzK9Raq5iuReJp6mSZdEhaWWa7k3wj5B5BA8niCm9FzjcitkwXAxaJmeyJyqnBrPiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWTeX8ikfYNQo22c2psivAaVNryE87h3YUcfUSCJSdTU5yXCuWtvDj7fmsxXkiDUUiPr9iN5AyTTwz5zv3x44Er",
  "key1": "JYhc5rr1u3KrHtqM57LZ4BCQxHV7af6Zt7noeEUFFjr6oL2dWjS4nvEVdwEiJcMo5knQC8rzmwow11bwUpsosEM",
  "key2": "46v2g3rqpDFE6GFMwVGBqiE2fsF2cFy4rZAC9peSLaShSRMwNhowACDEmfK6hRDtydVS8ncXSzGy7hdqdWzEYDr6",
  "key3": "2M8ipiiXDKodw4LKzA8GyZfn3YrFsQ3yCFVcrgcN4gBFbr2Ai5puufSnpEemkkWtJDFnQsMCf59q7kgwWvzJkZ74",
  "key4": "2E6y6SwwnD5pYGDLCT6VXcbVV8Hw5FA7G8X7Yo9JLbGdxtd4pbhUGpG9jUyrL41xtquKBXdsfjT59dJtu2h1KtVs",
  "key5": "2crooY3vdqT6v3jL46yQQDvqx6TQrsFDxY5aYmsbEeJETvQVRyk1HL5Zrf7ECe49YUjT2k2yEVye5JNFfWmTGDf4",
  "key6": "2SyGdFdGnXNtmZ4dzo6ryVyw8LdPbNebupX6vVUn1CNaWZ8xJWSNCz2yjrRqT42fs757GBHgR9gg5zqv36sa9itd",
  "key7": "4VGAUinktGxz6Ma1pwmwjQR6yovY1CJw35hbGYxVVLPWc5VnoVtoZp9MouCdYPkAtJhecW7SuvHedS5i3Remikv8",
  "key8": "5RRVRp9LDGesbq6wiEzhfwpPhrKY24Dtm5ZxLHRwkavLvzAELYydjaCqSrwYgFpt7AwXFR9qxcwP2LKYbhpCvYzJ",
  "key9": "4V22ztxJH3ATbtngwQaraUV8yA6X4yYed5aaHbY6R1xQCQ4J2djX2st76jsGAjFAEKqdpbYXynSQ2SwwXpXggGSa",
  "key10": "2Vjy2bLW3zSMFNVKrvwrhgnKxcJVCa1CiBHNFPvqNP8eutrornU2h6RBCCKmJdmGxgrTSU4rKzJttXTzBGEZoA3G",
  "key11": "45zwAuRBbUkAx6zNHydsyiTtYscWLNqFxTadQWwSrbyAnp2RoqBAt4gqKfSCAVLDJWA5jgMtfztDqMy9tx2S2LZS",
  "key12": "33bBVQEQsNp9VKJsDBvQ7x3Vcp9ZYGrZdXqUoveGSJzbTnJYT9yFcsSeTBNuYNDdikEzv1dQo3KnBg85eWowsuzZ",
  "key13": "5F9wBYhnJkXkdzUbwY83ay8pJakSNeNm7MA3yPN72odC4QJuDSjCfjUKsWGR8S9RYZpV3mstMQZ3SxqM1xUSAHbF",
  "key14": "5zVfLNsmSze9MUeMZo2b3ZD4uT1NEqN6UheEuQM1cmQrxPjiRb52DL6rSupHCSmw1Mc4EaNdYFc47Z9HEPgz2zSL",
  "key15": "2FePVrBcRD2LEg3c3HZ3qUCqnKxwAQgA6LPH4eyX4trDyuHSRwq8RR6Eye2HP9M3Y8o3qdDKHHXLvZsb9rBLsWFs",
  "key16": "R9sbtz9qeTzA8h4tAKkKj6iHYpAAzLm2Jk4eShT6VL9BxkvqUaith8Hd6CqpRacUviUm9QvBNv9aDd7mU7zmaXo",
  "key17": "6fVNEDFfnd3aM1s6XG6jWn7uhCVvexqqzazUgHv4WW7A49XxXo17kMbjuxmJJTcnhdC8exP6jWSaD4s5F3vkSa2",
  "key18": "4mh4uR9C3wNAtzi5X1mjnSmzgsRLvjVVVGoSfs4ujGiVV821onJBy6tHM2Ew8dF6u5SsF7KgkjDEUSChULuZBPr",
  "key19": "bzkKwTS5fBDRokA8T9JBTLRWfX2Gxa5qsFkid5vwvVGYbDzkD3XwSNjrDQuQdcnNiGhhRW1GZRHq1BsjaTBwkdE",
  "key20": "EdNUCPHbofTDVkMvPFynznLDiatkNbwJmacDGhsWSMvP7ZFHnHeCYnXFMuVfL8EZU2ocPk6QaNP2pw2LVbX42gT",
  "key21": "36BfD6ykXzy2oZKconH13J2eddSncw355b71tMAMoC8QE1AX66qdAuCEsRi57qABn3DmyEEGDfgx8hB6JmaCa1yU",
  "key22": "2on2udS9SLQBqJwGapURJNEorr1PLLqWsRHoS1mmXy7AHaUq9D8UmingtM1hjrqjsbRGzmdvAZfXEJkbanxS1Jab",
  "key23": "FRqHHkuMPJuYYBrbANzgtKTQS1QmQKQMSKLF7jGEVsabbm4Yg4shm2FZw5nhtDpzQMm9rZp6zPNWP3Fbj5Mv54P",
  "key24": "5JvPXKUtXZ6XQSf8kZMt4wptcu3dpTGq3g3AehpRHYN6pbg5c8FzqSymx3YkXTuAVYCQWSdy86yAkRkwPyhQkYfS",
  "key25": "5asASpKBBjGEWhcEddGq8eC9S5586g2bejJGEkvFT2MHABQwMvVpn4kewFP6ZnRa5xKdFKoACnawgfYh1rijPDrA",
  "key26": "3zdcSpyMT9y82M5feGVuesMNgFNnis2FwbR7vQBK3kMHocHrFLvgddGMLJz9rhURFD6xJ3WuFXGWvSrGERMqRvCH",
  "key27": "2RnzFLMk4rkW78gDJBDevW4FKYVve1K43FV7SrQUfUTnt73ws1wx6f2NamA72UZ3i3h4nrZxRLE1v1cgX8UopTY4",
  "key28": "5pEg6Jcod8GqynhYMPJAjhsYgE8V3vZ476QKdDZ23SmkCNJAhDvwaXa3mspSZLybCyBpAvmyMtff6nJrbSrCU9AT",
  "key29": "2TUig1bqR4P4XFxoew8X5DaHzUTZLzzorQgj2czJfHCwDg34BMoFxQgvyW9LQZ4SU6gPempNQSQ1zRBk9hTHenmr",
  "key30": "5NmgeWibZHEHQ8pLiiPC6DdkjLWHxGMYayBB15E23uTCHpKVs5o3yV3wp7bBMPZUSYpJHZBAa675wCjhKNqjGUva",
  "key31": "4Xz17pcDHh5bHwsm1aqomCK6wfv2ngN8MMHKXER9PvNm5guR8bu7RruKpgFuBzTXgEqfcLpiUEMGh8UXZYvubGgs",
  "key32": "5UUcpFgUTNW77Mr4CfZWBLfFggTAmLQTVF5FHYiPjUzAQbPN8sH5MzMXjtsTnyLnmhWG8ty7c9P39FDzNJ9Cqm6g",
  "key33": "3DXmV7PDRLsg7PrCWAxebdgyp4s9Wc5eV6mdRqieXX62NyR68TQq6ugd7aJCQDrGtqPXXLrgAfEryWi2SB7hZzyP",
  "key34": "35yyuWqEeK9rBupF1h1ctrr7hfXAD8pRKb7WoTjvs1hnFbFPp7P5Jw4mvUwGHxEnehq2CLK7g36gJGrxby8tdVZV",
  "key35": "4MK14gAruNZPGAheif57RM2n93Vk64AHtfbCdkPrKMnSvmMmHga2YGNyen3qQ2Sbu2ovp6wB6qtdE9VthwPKpymT",
  "key36": "3HzfEXKPR1HWTf8QtXbqhPZy3EuwzGwfumkr9SuBPHuC9CJRKPEuN41TDFvZgHhpwwDb8tu9boHzMk2mT9Q7HMvg",
  "key37": "4C6RZG1mS2Y8gy5bgtUw62jtgeRityJB1a88AoqXV4HQo88aGBDkqwwjmmvGaK8ijbwxpD91PDmXyr8gYzKWBuDc"
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
