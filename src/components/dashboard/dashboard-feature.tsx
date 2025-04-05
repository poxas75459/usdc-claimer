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
    "fVf42iNUBPWG8tE694VU7nvyZLj7qyqpZMoq3UJuSfcKG2NDj3YQ6kgoYEJ9TP6kvU9tRXb133t4XSTDBnwW5Lk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n9NWb73kwgVt7ibEw2K2Zg8srpfFeuGFsWnV625ivBHEuu1MAG3KLobXD6tWPT4XiEKSyBjdbe4bM4FqQdBb7Fm",
  "key1": "5FShrL33aK95nyxdXCJTtoE9zzQ43rao2pzDcWZ4anS41nQkN3ntwMY5Z41LVGTdfqZm9aRwcLpuFUF62cTkkpAT",
  "key2": "31ug8KW5Pr141PkKcFKkHSi2Hp65y1JSmjXmoKCcQzQCi5XjS6r1UoxDK9b7ChdsE7iTLcLPZHpu1EeodHmQtTub",
  "key3": "RjTiZjGy68AXthCzYzfa3abYP7dqSBC9HSeDiJN8r9cxCtm3xgjSAbyH419MoW79DvJCzZ5S71YA36Rmqnxq8pG",
  "key4": "292DRGa4TiNuqRNkgSsxamdjBTkKsUmUHB4WwvRscXQF75FJtc5QHLivYgUmAMjTgLtCjQdW2ANBhjfZJWMTu7Xt",
  "key5": "sNUBJiKGgsnNJXNKpKhEhDR9qsHXKqUSvJk4h6ath5BJukV7RjNqr9noZn1jZ5t1UM2EZgqYBQFUUZ9BqFKXXV1",
  "key6": "3i7D4JbHkTEwrAXsxLyyVph19yeGwurXNyGzY3AvPuPcnRvHx4h4NnJTf7ULj9b1oDFs36DgUUEayXffC1htxvY1",
  "key7": "4cVkvTGbhPz5Pf41JK9bBstLbPq13s1tU2Kzw1R82ew7JEZURtvs9MDFNKPPMnfAZxS1obJwXrdAwVVoDcXqtUxt",
  "key8": "3qJcQxHuN4QkjbzVQUVJfCF2vJxKBmo6Fitonu1L1S18fHsSNCyft794YZc9dKTNH1sNNzHTVTf4uc94j5vx4YqD",
  "key9": "SR5aLAxwpi8CSd5UA9bJGUokzexhriXwE34NqnBjFZw6jJa4WoEWrEe9QPNvfLMHYbcr6yJfkwSF6pYKu5tvorF",
  "key10": "3VeJM3fCc49tXvVi91tLFAfed8eKDM27E8HXbf9cT1p6zqKVqSJNJqf8b9SUqaRmRD1vxb3ZzFoZ41ERLPaqiuxs",
  "key11": "vbVV9yLAEWMuy8JBZsiWaubugrockq2gGSdjo9s96TT2CD3QqxBaJ7PV5kn5howYwB3H2JmnFNW6oozSSho5Gba",
  "key12": "4nbsPSi87FPQopr8TYKPZSme1SJHGCHJFzDhXWVZV472gcugZvHck9qRM7KdJdh1427TD2yskre9vCcs3XoPDekz",
  "key13": "2JzoXmPZXGsVqkE3dprPAHdoSTYe2emJcYmEH7ovvLvvkV7hLVjK6afph22rGuoGF4q4NNHfFKzoM1cZfvyRRPpy",
  "key14": "WJDvsVotyRxyWM6UVBSh9SX6zNhqMw2mG6wq6AaFVZCiuKCJjBXC59Qvk8q4aWUiwTzFYuwSegm33aoWsSgHwTA",
  "key15": "4PC828h92nyQXAheHocaV6cZfKSbwdUY98v6yebpDBNM856FTYWi97orpTnNtVaTnwiQizVCg6eJ64uyebpdwMRc",
  "key16": "zDFrWPse6N8PhtsvTj9wKvgKpgxQTgSJkRx89GbRoQ98A66vBaYFNjtYVcKMaR52Yz8AdfwuaQtu6U8RMbqpX62",
  "key17": "2saq7GtuhmG1w3gYLM2JxCb61H5UKv1UuPqjzVVfBJVWk5hQyZMGxVtyVmsBZ9HDcEBSecJosDvY7LXx71F9L6Ly",
  "key18": "2UrmARRPrVG2U9wXGeLSf9X1J3FTABWMKwrMEeJYwFtS1qP7vAvEa3oenhJ7wEvrNSA2HapK93mevjNfJ2UkzRdU",
  "key19": "4g5eJdP32U4g11NXViKBhLVEJEbtNnTDAS2LmLs2fr4qdgHbEi84q54MMU76BoVcMq44xftqhsiBsB4mrScPJjQ9",
  "key20": "4ihNSaajbaBB25H9V9CCA937XZa7iLu2AGtMVs7FtzD8N4p3V3uz3vK3eQvvakbcxednN6GBjAaRSkvHmCaempXK",
  "key21": "5bLxviLkaVtd4wz3QqGjaPgNGvVxBf8jnGKjd84c9t7STKQdhZ5bSz32dKvw3W7F9PiU5hCT7azrYdNUYvYMKuzy",
  "key22": "4AEgdQ9BXTU8tEfLTeyM7yybuLu6SLUEEJBEbAFZpLZSbYJ5DMRuMtJL6Gp5mLySB7k9gLPuchYg4dMxcomkhh7W",
  "key23": "4BqRrkbJCr3AB2A9dwrSsguzTcjbCkaXBC6ZKL4eeBkWvqw7UX4k2gyZdiaCZ3yLVRW66SVjbrZqgVrmW3HdTa2Q",
  "key24": "3DMUUJEcmz8H9fxsqoa7FbiKmzSsf9wj5eyaxqdxQkAyauWtgBXzLeY755xRdLNjrVazEPKRZdRHaozudf5SDWwh",
  "key25": "57rAZKGConvpHLk5VU1ttrqy2F5gactHT45vTweMeaNgH3WhByNZxdsQgBL8gbCyLftRfQgvU3AHZG8TCLzTt6WT",
  "key26": "3jhNWLjudmW3J9bru6tsruQvB6wuRnGH8vmQZs2JDFGo7FdQWmJM11cKkXCHMjxgtueRQn9V4rp8xwTHcDfRBhqh",
  "key27": "41mUasomjzwMpxyQmXYc1cEfyXdKe1NarrFbsRbQCRq52zBgTnGkNhSGeFNKxFCdpgUrZ8siNk4JJZdhVXCBcaLT",
  "key28": "66MaNtop5rV5yh3FWRKTreTSQErVefULUTMme5W4gWfUpfn1jrtosaGcYSQdKBHMwC4HB8q2i57FY7XZqmC6cFsF",
  "key29": "2Gcm9WLc1d7X9PsAi2bEGmFkwzAzi71qANrT4zCg6kT855PTTSDXMrbq4gNDDU2Ko5fz1C9SGdWVRVeRUN9HTrT4",
  "key30": "2j4GLYPKqpt3r4oHvMnzrAj7L64gXjGZdXyWsVLrFRugv5TkwRL9Grkk1Ykja3qS7PD1GNwzCTJq4eXVvtSLb943",
  "key31": "5Mq174jtrHMRt94KJLUgLSw9AqYggrjtMUf3G5diibzW4mCM4mrmUZEGyzCbxQKWpdu82XaLfUSE5Wb9VndSkVRu",
  "key32": "ZB7x4X3snsKHBT6anEnKNMaKS8qjcgKjfEEv5NxZbXMb5xboG812a41NSiASMSZeT24W1u74SVR9Y7LaXf7sCwt",
  "key33": "63vCgV2nevAEjhr9sB7dN2C7d8NNTjnw96G8StXdJPX4oJMtH3jQ7SZ6wapWR44xhNCwuGWbKPUq5jFVwY4s1irP",
  "key34": "2edaGohyegnhtXYva3cusPYVatnFpDURpN3HJKEE9eh8z3zaDAzRPZV6ihpUUfxfSDbvwZDhGkW6aPTq55y1qUJh",
  "key35": "ss5YBZRZ19ocQY8nDDTsanYnQqen7vNpg5dZzcXgVB7KKQSCtH4B7RAyUgiN5hWGWPeQPdu8Bge7sMayoeixbGh",
  "key36": "3NX8muDPVa3WeXi34SouSPFHD2K53f9nHEgAuXDTKotDp9sPcf5QDGpfhLxTEhDw8LENvvJYdj5TeP4TFwWmzq4g",
  "key37": "5JGFkpvJvuFZ3wAF7D8kZtuWTQc1VYQdYonFDMHdagFRkP4gTcpEXYo5X2kahKUCzT6CTvb6tTqRBsiAgjZcG9jG",
  "key38": "VnX2JM8U14nKBnrwbh3MxawDY64ReiTYR9FMKtnQBqrpwLkoyC46g6ptG51egCw28GbLN8BhsP3YeESmEaQVhzc",
  "key39": "26zq1pWgAQxuyPhwcUMZVwSRm14wRVMyYM95XnFY7YRLEq8MLKnJMV2F1dUn4mdGNcxFTb9755eiS7STpaE9CLeE",
  "key40": "3MmcP8RLFSN63tqqPTs64DdJUKqyBUZSjWRbW5kkc6s8i6mWuuYQcRXjUzAsRgUBEVjRnTuB8aiXzyLNgK2DyPAz",
  "key41": "3M6V7rfm3dFkjvu8V4cpQ4E7GnDEBVnhZSyfkP4aCwZ9kipyDGm7o8Fbw2r1a4Jj1ndCwNrENFfESc7G3cMEDEPs",
  "key42": "3FfcTjxM3jPNuUtNWbkV1oRCXzyCNXFPq7X828vQxB9mSajCGE4kTpSTn3SZjy1V8X8we5buYLuzKK3NJPLPwrm2",
  "key43": "JaRzvMqrnRERBvg595h75qe2rCmi4vQS4U8BG6oUKCj8r5GUpXkG1ShkAvQbPKCsXYpNWiizSkvEasdN9rb8iaX",
  "key44": "5RBrDtnSd439KQkXeBY7Mcp7f8eLguaNszJ8sCqSLy5YNiaHtfgRRCKvjfKL3qmXJb3z1ZvEGQesw3s43s7x5B48",
  "key45": "2k5J1ynqsfavYYuGwsteoRH3qqfwJVUqhjstF6GkWmh5Lw7ao7jmuG6ryXSDHKDK8MF24GWE9w1E4YdP4LYfWPY1",
  "key46": "Lh8eiMyyP67pKnAkZLGTR6BhnhCNk8EfpLzE8RV1EntGdh1VfrisSz9fiWo9i9UrhT4vfrV26JnvycofC3iynWK",
  "key47": "2AREKiM8qkNZpnb3KYQFLQQgpQ3L8hxGXCrhaiTj5GxA5CwRPSvZGhyJrZoxqMJM19phDKuQDhVu2MQjVTW3ckHo",
  "key48": "5b3w3VFGuTWvaNsi5eHatvXSbdbZ1sLYyufXmbecEt7mjj4SfVdod2DFXGMRnoHmURovojkf6DusqiE5op6U1SXN"
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
