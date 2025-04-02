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
    "3rnotub8tqnK14XxgVALashEw2z6bUPv3w892QCrbPTrSABQ8ZatVhHnSrXPkdFzjksUpQFYnspg4Hbb9teQZHsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9fPky87hJhw3FXpRtvw6ZDP69vcqbmYLiHpMudCuBUCH5KDJtw8mhtsBAqhyoPPDuKMurdnT5ndup4yguua5z3",
  "key1": "k7xJvvP2kV2r6KtZmCApUH9B6zexhRpup6mSfCveHaC596yvbgYaDttbv2z3T7wKBe98B8X1y3hh7aimN6dYjEX",
  "key2": "5eFwWjfJwTTw8MXT2ypqTpYuz26AWA5DW5DKxw8gdGQNtNaBDak2k9dwk5w4aVTTNCWoqfM4xTjPnbuuoEN9gKwY",
  "key3": "2VD6uvbR8VAUdJ81YcZETApWa2Uxou6A4srRPe3f4dfE1m6JhwUgu6SpjZqBEZCUCUvQuYchbTGtZ7mzK7ZQ3wEC",
  "key4": "2hk1yVsnNYD4b1zbBEagdyeBx3CEjgGk22UBXL8SjG4bLAXzW2DVdbRE4C1oqLg2oxMTjip1MSmLE1aYWeNRrhMe",
  "key5": "5Zjb8sMx3VvkVfMgjifYLSMyz9DKfCugd33nbmxdbS4W6yZWstedvQxafpSqbRkFNgBpzAywFPqFyG1jSxnwrURM",
  "key6": "3pAPfX6dPxWTrrDhobvHbzT7yYbMhfFy1QN73zMQpA7x8rpsuEtP4aq1itCoBUsmqdLmL8z4n9pG2hnE5PfuXr3w",
  "key7": "2AjRxsyXjwAeibKgoeMuUggyTM1zMCvcoQK72X7R3Bg7ZrB1S59b1q7nhcKGzWSEjmkFjdgRkXUkECgP4gUy4Goo",
  "key8": "51mpavQwS4BDfRX6x5iHg8T7V9BFk57KwRXkviM5bSabgYydAQLNWkRZJx5BfFEb9p8gH6k1ixMtFXvqf3xF5Ype",
  "key9": "3QAFdHb6qB59SD3dEZRh5QU8z4vyDT4pc4iCJ1wMbTSikS9Y2VsaE15VPWfg4CqAeTY5t1D8BX1cWCjL1BSvfYak",
  "key10": "5FUD5kJeGQwsjbrpvvSXSza9ffvjQPqp7i6KXurGXsD7MYxLeueeGPdpdL8Lj8qsgfB21rszgn6sGQ5h12ACB1Pt",
  "key11": "5K5L5NBfj9gYsqhSsCeu2xhiBVFtZ7TSq1UxRuPqnBQzeKXFStW2ys2XKH4phaDngfTq5aNvJQVr6H31fL7tSbuU",
  "key12": "59sxwRMAgzJMBDe4NR2rUJXwZo9KcBBB1kbD7iJQrTRStPBi3WNYzyVFRm7VtH98YWgrzPAFRzLHSsvAzNZcfhRv",
  "key13": "3B6D87u9cjiwxcLfowN1rRu46f5W7Z2fYVbBUJjsCzFfDhWmCmxLbo8zgvCKo3sLmDcUCwPsx9a6arrUxg2iSXtL",
  "key14": "4geXbW6RRqhNy7y43SgQ41Yo92RA3TYwsHMmpKxxSmHhVJeky22dS7EN28Pt9s4YbqhDXA6zXHGWkbCnrV2Tn4bW",
  "key15": "5A9yyhHoDw3FUnfmU5ro2sAypxpirr3yqRZYibLYYWGHFEnqs9tuzMERtoz3UN8v8VgBcqDr4kXToXEdGut6Swxz",
  "key16": "5gcqE91S6D8iPN4KARhr6nj3nyB8RZa92VXuFWu68dnhnoBNBRDEU1hsyrBDFHTTRaUNpAKEj1BFVE3YD1ZuZmyS",
  "key17": "5RJc1EcnjK5orihR1T2vJ6sxj7h7aNM1SimfZAAsVmZfXBNh7pGBbsqGzsXxxxU1mLPm9TgVPX5WkqoiNKDKir4D",
  "key18": "eBWcHtRC2o4YbyyxhCvi1TNHrtQ6LKHSMDjMJysWnquQ4TUo12BB6HEPKKGMWZiXh7D3Kk5g655LrvwP25LZs1D",
  "key19": "65dQaX4ya5LYqxrB6Q2VveQJDNXeWCD4KmCm9RzrH3cZ65xRsd5sGNq591xzhxtwmKNMs7GY1cYK77L87AzQCtSM",
  "key20": "635YfHAAPBNguA6GcsY5sTRcG2aJbC2aAoCDf9NhKZBPDENTv5VG9PezxRiCKGKYYp2AAUfySGRRRQFqjqBhCmoP",
  "key21": "5MkXqxLNGK81bQU5nk6B8aifAJw4XottWeHEDGN18ix1VeAboDunSUN6FcU7RnCfkrTw3a47vFEXGN6ii7rn6va1",
  "key22": "F9uAGd7xvKFAPXkbr7x2i6iJbVXUGTtc6a9onJV4RMPD2Cvc3ajD6aFvGopamYSNiqZvYTbaVro3URCMqg9jZQs",
  "key23": "yZQEucq1BBwmPJqK2sbdnUeM2FQ2vguUjcHBxMA2gtiKZf5fUGi7WCuT2zHzQi8w1awB71GbYDgW8WqoDpUXoK9",
  "key24": "26YtqfZicAMc4K8q8AktgDDrfAUHUoNNx2yqfYXs8ar2y74HL8kHJhi1dU8jnap29Zk97mC1ruPtg3MWyFJYr647",
  "key25": "5hGeLAPHWBkDi1dX5YNzn7LEXCNnia1CDfZRTXDtv93vPtbjpJfem9CdYBCvkAqg3Ki8TKkWU2QjY2ZH4zVYf8to",
  "key26": "4ahiZBmwTT2GuA6jEUfwUyoTvTeCD7gTRpgUwQY2dV2kuPxptBwseE8ZoFNoX8GvpdHu2A16U2xF1n7UAvGqZVjV",
  "key27": "3oJGnA98HuPffc1FV1iUGZcaJ8mv2is6T1irh47bTZpahMrnkGJkTfAVX7wgVYEUX2ZCWwyH7uNyBFkwfCntev9R",
  "key28": "99saU97UJz7irSmG3MS4orFBsei9fCYf9878Tp84uu9w6JHU3jsjePNYhnkNehn6nxsUYSYzerZG9tyQ41wxCEZ",
  "key29": "4fdUBVXFQL5NXBwPJAZPQBif9HJvvBFHRDtznWFQmZLAsJLYQe2c7hTebmtfy8KXy7Zi4oNzabfQRdiFCcsPSd47",
  "key30": "4hdvLFJxcP27GvVgRtrjiEfhVu1cduM6C4b4FdFa5yXH2N6FVZu7cXuXTQGsamnxkaHUQMzvaWTRrFVckUVMYczb",
  "key31": "3x8qYQa7hnFKtz1SUJYNRs3hq8jMtatBpchTaM9acGGiEwsTf17HdLjKHSR8m7Q7fp1M74jXrp2JPRzwekYFJc9k"
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
