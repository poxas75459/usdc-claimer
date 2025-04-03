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
    "5SMFdikqq5pFoSCgDA9dcyRhBimVy8dhLLjCG1o16fppAofb7txRE4AM7nFWUB7sxECy5rk7ZHm4jU8FuhMJBbBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57embEBnqqidjmQnwZDqi1Z9pySWr7otFfSJRQVVDZzXQXaX3PxxmsiosjQHbAGv37PbdQrUns8QrUq31J8pA52V",
  "key1": "HCNzfBFdFPZCxe3ANZWh6rgm9RtaZ9P6u9gjH5Uj73jEj3arWnRzRCMhnNbo5pWzvf4GXPxF9xWeaptG7PwchUQ",
  "key2": "3XcxUApF43VC1VjJFujCz3TjrX5jYmLWM76KgDfpAH8wnhxgS2qmrQYHRS4i146ARuPNU8S1F4bk4u365RBiSLRz",
  "key3": "ENkRt9aYqTYX6sDpCNssgKSvrYt5z2tk3FrddhLX7LKiuv5CPHDMYp62AAAJiaGK6EWhiAe6hpP7vLh9E3RrhiY",
  "key4": "2FJex7EQH3JQWdw28guX58KC8Z5aMWoozWCCBHMPLQRtKrQC2SXhFNVsB3oRfpTLbjEKAtd8FT3M9KJ6jv9DQLNR",
  "key5": "akwuWWWrG6sWVXbCqWAqAEp6YfxJNjLFDCn7ZNvjFhoBKqSJ5gyV2sWQ83DepdNSSSrtb9Qzmv8cxGtCtGPPrc6",
  "key6": "5tRKWeKQHf1MRrEKiwv4MNzJECchZuVgRDtGE7om2WqbQx61f85V1eG2HZFHTFgYda9bX17cTkz6qPbniLSkWiQ4",
  "key7": "2YopwPgc9R8nGe9nSewgAMQYTZQBjoy1b94fVvEYQGjdsZzqx2yyXuWBzfSKPKqH1PKTnGmA3kVjPkGnRkwScsk",
  "key8": "42qcFtoHJ8wz92ahF9btBs6vJGsm1kxydYJodzPh7dPDPZwTHLWuUjBfXLtBhfRNYFb3ZYWEi8TFb9Y7q3oEc6wL",
  "key9": "2TQpoVhh9zUWXQ6PVYbDswGZny1gxh1xPjzRXUTKpYmyZ2KLSMzMmmY9DMq643UVVJC5eDfp2jNPoiQMTrJsEud3",
  "key10": "5qK4MTp8S8fYbHy7RJQz3F55PZEAmvzurBLHRH27zLH84pRRAbneA2km78paANKqXj1RvLCsTKF2f3F7jrYJEui2",
  "key11": "59XFgJ3YC9C5GHZ489ynNq737rzm3oPeEM6sGTS84bc3PFHRK4DEE9PkUae4tw6R5sjWaHdBCsbsFKGSpVqoRMAV",
  "key12": "36rLoabfKcpEqRgy2A3EzwcHA3hvfFYqiuKWMcpJjGdv2MB5fLiB2gqKpCud2tEVHwK9XN3D1ruCzqfAX9cAAqoZ",
  "key13": "26vftB5AYH3QRP4zgYU34aipavPvHVuKnHVyPktyjNJNqoq8CUpV1UnxV6FysXihjKJnQuGN1zLZw2HBX5afoQNA",
  "key14": "2XkzKgZEYvWGhNhnYfDk7iTu4QbUw7aKg7xN1W3PCgJVHBkDxp34Lx99Codn6G8t3hgnZZiMELeKL6hXHwAXdFiq",
  "key15": "q4aJ9fE3G81Mngt8wNmAS7Jy5xqrzDb3BRmnQoFDsb6iZ4noNj8GcQLSKMx3zgrcreKp35XLdES9k9szyfZJyX6",
  "key16": "3T2sThXtDgiMFJQfcC639rnM9hx6CCgCBZJudpzDxPvrvX599MZhDN6aENh1HGeSvR6iGXo7nt2n5aPV8T2JbxtY",
  "key17": "2R5sRtvzFx6ehqinAQgwKvkamNsVm27EXiqe5i3VGpvSfPf4Sg1pXWC4TqV1zig8sMXD25MGQCRaSWtexkVVeTYQ",
  "key18": "5iUoAERjMPRVG7EN5MUM8hJrva5vmz3zQqkNFVsGpWtMEFRzz3LBnCHhku9aN1YtNwEGZgUsNqRJwnjXPXFGRHaK",
  "key19": "4YKsVWd9jUeuo9czwYtAPr4QoewJ3bNyzoQvmAeeHTj3zLFa3gPAuuBRDoCoumPVPAGZuJhPSLzX7DmR3QkozNpx",
  "key20": "4w9g1UCr6p5GNoDw5WG9ynKMsRVy7hGHohuNNw2xgkqw1RTztqL8yC17fBRBMRdP45BNyBuKvBLVLo2NxUsE9PS6",
  "key21": "iFwm7uunzTi7SKTZ4oX1yrAVaXrHP7TT2mLVH14t1QrehcH7PgXFqxSSxfyTeJGi79uZzm3KRR6ZvxBhR4MAkPR",
  "key22": "2Xkt49pS9xe6qkeUSYNBZ6BFrfJrBmQ1WuGzs7BNJuKcUX3m1xyezLpQaDYGcTWrVDUqZhjUFLLp7HgNdkCokhEq",
  "key23": "Q4RCTCcPbv4n5wGq1QqMYcH9HuwMJ6YhFSvAfvLLrkh17ZeUXGx8iGAXp1iBSyAgHPDYSyUWW3st5r7mqQQ8q15",
  "key24": "3qSYmPEkPrsgyxUygHZSDujcqT2irRpVfkLyaG1aNPvkt1ytqnJyFeGAxkCgAnL1XCRBUYjw33Zr6nowigMfqLAi",
  "key25": "376n97oKn6xbbNcvBC6kg3ARDg37EX6hRmfUqCrLfysmnvjBANqUdRvQyP1zmVt3NbSSDb9GdFqQBzGAZCaZvfXt",
  "key26": "2vq4vUueWxPeYcH8yGv7vU5viUg22KdvkbyZEc38LMJ7B482E25JoGjHCjp9AYNYYeyY59QBHXsv4a2YqLjtybRE",
  "key27": "4xq4iuvMWX9mYvB8VEuFcGqVNuAhfKQ8YR2q5e5HXcStb9LLmsSPta6uYSJr14aF4LxMfSZGnWrZtb7ap8pZtYTc",
  "key28": "xRyL4jiAYS6cWS66RohtspysaqGVK2UK24NJUxp2AK17LemJMfm5x35ePpZEBMVFc5NWF4BrjpeFkM7zx8bV3eX",
  "key29": "3QpmZo6KXfCfds8uk7Fc5hqpYCBagUKibsuBHeK8A6b3riFMAuaKkFaZAmLJk5wPGHh4PyCdffNfiB9WUDQyd4Uj",
  "key30": "2cicY8WuL7Ynzw2qsPq7ULsSCJMx14js5MJPU6hPkkqgmKkvFTW7Qgf4gdvNtyjBA8jbzbvA3fK2L37bt362q6BX",
  "key31": "47k1UH7vvhXsCdpWwdSfBF4t1L3CKVdo1Atq8oByZCJMpisyJ3i7irvccem8oJachgeJWxKrqprYELUG6TZ9Zj6y",
  "key32": "2NH5M3ovJMFqVBTP6yaFhhqwim8pLTwcn8iuas8eKcRphHt8EPUm4fTwKfdLRQqBSAxiZmCiaLsVpfduZNvmtLLS",
  "key33": "bsCVKp2xEt2WWbn4J4VvpCb9VzT7KzMcEKPi9hEaTzDeQiUZaM8BhJG5b2KFwo688qMemwDoucwJrWv1jV7A9Y6",
  "key34": "rDmMg89cjCvDrqVRekR2LrXy5zZNR1Ng1wcjikqMY37xAJ48MGxNRqujW1fDZjk8RPB6bEsX195MubmrMzr1pMv",
  "key35": "2oCNnMx1nfsEGUdBtASuuDBy34TpNnia1hxH2JakFKiWHZVkrUKjG84ujCjaGyYLLo5roU7EM9QDLs9RfwKtjcBt",
  "key36": "5aB4SKXoqL6N2McFGsoAqFbLfvighG8zibj8tMg1kXkGhmXysMAgF5cjSDffsyPWkYj8ZSsb9v9152zkkuYieUSV",
  "key37": "3dbiAc6kyLBubgcCVGwHdg317FyRkVygxky3PK7aciaxwT6V4LUT2ZKb5mmXbnjvU7K4MeBs5LxHnfUEJjH3c9hC",
  "key38": "61TCf9xMDYzP5YGgh413SRmHte1TkPpxhw2jYDCmktsMcaLyUSknn6uTtnpSfbo5ApJdsZ4dPo7xq2pVkM5k39EU",
  "key39": "2XSZBpiqcU4M6h6i7aWdFTTnE7jCfnudBDpJb1r7sdegm55Rai4qRJ5pfeWYPF3vhYY4cF5QsXXREmXZiLMJhjCt",
  "key40": "8m6FoGbKe5vGQ9eFQMwHKDuouPUCEYurCPAmW84PMYXophounuxr3FGbyhjL1eKZ54k6ApSshTsvSU3Jk8MG7cF",
  "key41": "4qhBmquCXZBXqac1MnC9WJ8Pqya2AbitLmx4wLnJSsaPDdahu8bSMa7Am3wMFweBoiewX5oPekfHcLSSNEGq7VmN",
  "key42": "eoq7vtiH9X4uYqqALPuZMUJ97Qo2VHNe7PPyppZyBXCxfki6UDLrhXXPq9yFnKUXNqraevkkEnGGrCFr6A7vERV",
  "key43": "33agkx41u1EhHkWcoUEmu7HDBDe1dWPVBSPZgjN611yXjk6VQZrSrKmk2bmK4i583QExzVWkkUGf7fywo9cB4aTC",
  "key44": "2hmYbPw8jyWjppMJofZYxoboH196XkXbCRp5TN3zQZ4F4gBDgJArLwMLqnUTk4MYCLJ82R51sbsC5LGJkfgt1tyC",
  "key45": "PvPa9kM331Lf9Gvty1gdsQC2hteYQFRJvSqWkEBhf3fcinAL1EnRo2fc3XcnGPnVM84BdodGhotUAwcdzBDyjB4",
  "key46": "4BRCM5yr6Ndy25nEh2EXCAAtmdRg1RLoLSgQMtjuT7CMSacqfvZJDZWpmL7mzvcyTRjWPkKFRG2E2GfpVfXdsCoz",
  "key47": "3TysoaZ175157H5rGLzeyB1uGttqvTMmt1PQ86foGjBghmLfdKzq8VE9r2xUyLqMSU4n3mx3prZwMR1dwHgEXGAZ",
  "key48": "63SNYNqNzeCUQehYpVpe39tYVZtE7p74kSPTiRtwxYaG4urkLSN9ebA1aTS7V2TJMtcLcV9ePM2WdaLK96Dojm5s",
  "key49": "5wNn2yiLZVjiDmBfSKRYEXUTzk11ieV5gUrxYB8QK7wMugxgAZ8XgvcY3Eqn2jHgZ2qByC8b1VxN5F2HWkSzbrNG"
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
