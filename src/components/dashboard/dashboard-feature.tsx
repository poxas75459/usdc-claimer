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
    "3p7Zix9f4hhwysQyPLoUsDJcPfYedh7tEhnTQmMusCvsMqVKZmR2C1oQKQkXnxevQ8FmrqVRsPdwA8EaeSt9sY4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aaX53xWKgG6cDvLAmyadkwT9D3xEQWiBJZmWJtVWUJRGET9MDL9AwRtPV694dpmNq54SCXe7x8P4gXgaettgHJg",
  "key1": "4o22MsvHM3nSvdw4jig8KiS1rNVdqUL36fiL2unYPZsQbcHpDpcPFWv83JSANVJMay7NYFsr9hM1mEk6rFYjSLxM",
  "key2": "66FF3NSzn11JBaSHUkXjjJxH2JqGzKqv7oMbuGZenAypTcPQjQC36FF7j8Vtjv13j8DJFKQgoYn64uvNfWNwwAEq",
  "key3": "2WMhPHrx27GBaBQrQbMKvbrLEdRPrgDj1XZ1631k6iG6WWFJK9aCSocZ8kPSNy94X1M8LZQEKmxVam2tgEUkB7hv",
  "key4": "5xNSprL6aBCWu3ho8LjR2hgh7LACYs1Hv9fXosQW8tSpiwNjrKPNfi81d7Xty8ASXyuQNXyxQq9ZJKVRoBMWrADj",
  "key5": "4sgtzgWqa8Ncr7h28H4f11Q8qtAnJovkXywgtzybLBEg8MabkMEiNV9kZaqAQb7BK2ZYW9LLMMp9rQM86THXDxkB",
  "key6": "tUEpM8VYa3KC3bT1qsZ8Pf1bModDhFC2h9RGBy3aWr1YSb72G2vLqh9MJfU4cjLK7Xcovi3M6nFTRJNNb6Eo5Bp",
  "key7": "47VAGJbTpkXbPLnzrfeUyE3q93pxSDqCBWdxCsWKeycj9YxgiKMe4TPK8kQ1wECUtTaqFbaeuHcSQVGZEckFh8k2",
  "key8": "4EvFVXEeSUbSG3g8dA9mkjrcRpTTCZyb2k7jRTq2CTQNwkZ3wdA87CGsnEGe1kGaHvdJt3UF4vXPotdzXcQna7u7",
  "key9": "2hTmmaiESTyp8vzRv8W1QZxSYicJyw9JBnZXYG421XmhVDSY1y24czu9JfrZRoiQpBAPLQuH3BeTiCmSUwe8rMyT",
  "key10": "2ySLLsHSpXvExKgU53VwBARnBX8VNMTvZpE5SPuXRT8shtX22WhjyuSmzuotcjaaLFmpks7qPTTShHkBLYLti9uV",
  "key11": "5cbDP44sE4AepePZaDZfo2JzyRzsdKSaJkLH3pbPTosCsDqKkzV9PbW3Xbiktm6a8UvCx1RmN7PwJ7QBxwJbDaU3",
  "key12": "2hTeydX5L4sR1btfBXLjK3kdzf7men5wezjVRazJkV6ZP7m9rnokvQHAv93ztzHmUh8WxXCCYrbUWnExW5KXiscJ",
  "key13": "5DUF7ptzMW7fTPgD5rDahz1jRr98GVNpwPiENDetsKgfzErmLEwHkUmA4mzvM87j9rhRNS8CHjR5VeyfoqQwpfam",
  "key14": "5jTTQnvHK2XvW1TLejvh3dxRQEACWztB2ZeUqQfEdrfVsJ1B6jWTs4tf99YXAkPZpLLfShbKAcutw63TEtfKTP7w",
  "key15": "2w1FRJcB46otJzh74Gp2kWqDZW51NphNjDYyyTZdNEypfJKUY4YAfuuxKZjinFx9ELAomsuM2Js9WK6ZbugozE5o",
  "key16": "42PaudNn4A83odBU9TycsSAkQ4QeTXTwHTPTknXwnRA2vW37FjVh8542mG2TctuGHfsxCdueedF2g6dXhnf2enxW",
  "key17": "fL2vD3C6nwHKgJL7ShEFs7WRB5RT3gAgmrL9bEdUqW8SjvNbdRHDdsrsejV5SaCFPRQxQcg9e2CdJqgPL4My8fb",
  "key18": "5KaFQcRLPwhXVtDw1ESAMtFG2cWx8B2Uo3rc46D9eV8tcsN6r77pSse5SfS71dtGcwoVEvcU2e24L5p7P9qdq5C8",
  "key19": "3xryWFRodkBGrkr5dPa9BHZhmLu7VQdeZHscJk7QBgDEp82xGX878b2qxRfHzQwxXUifJ6HC1E3jp8tabTTadUfD",
  "key20": "2ydYNcfF4sS3noRJg5VB3hpzyaPofsVu7uLsjaSYKWFuQL2bdQbGj3frh7aLqsAAfKD9cXmjeVQQy6nh9ww5yZVQ",
  "key21": "25a7WAhLNwTZnp8EFB6zzQNhoZwa9LLhfGuvUUKKTan4dMvdFZLHgE9RmtUaaJjkrbqCsmDCedtT7Kdtn5TJpNj4",
  "key22": "P9xVh8LEYBQTQXtASoJykyJZehurx1rE5n9BQ957URFSzubZgPVVuc61coCGzLRY2BwwQG5CFqtx98RTQdEdDrR",
  "key23": "3B1LSgs7iKM5HnuvJAeGaBq76ZN9ae38FWkJdqCig7ar1BEAQnX3cCA8oBNTf9YRg2tb3jqdZyq4uhxW66hneDTG",
  "key24": "2tjFtGLLBJkQhZaEjfZmqD1w2R8T7eMkKFyrSUbNWyfdQ5fJvgc66MRopm7AUcNz6fGBeS55kGFqbVCGGvjrSwfi",
  "key25": "5a8pguHR6EKn28XS4BXu5DRGbpDykA5HinFiyJyydZu53z4aanWgRMr5WSmBbQdRNqfGffmqtPun5Bps5LQpbhq3",
  "key26": "2Cw4VFc3PzPC2YGpi6vppjeiSN4H8EYLvgNenpqCJnM6JbcV9HECRxzdbKc3CZZomSLQZb8xhWLsrN4heYjbSDG8",
  "key27": "cqq5ypVUL2Lkm2jUH7vqDHNBmZa85JPtsrqgQnxWqiKnp1v18cDoSWZ3YB73EFER6vLdLMRjH459v9nkf5YmL6w",
  "key28": "2ASupuCXSio1NucHUBbUANChTByqqY1PRvhEHKzcLDHpU31brxR87V9sk3VzTcAiizoboTaWGCcpouurjTh7uQQh",
  "key29": "2cKvwnpVs9fmFGtdrXiLpb6QURpVFeaRS2W5H3iYdcPyt2eUqMKm9SfCDZVNeiKWwP7GiXNp5kDiiTuPR5HfpSjk",
  "key30": "5HLRtFFvNuHUELwN52zPHd8dJnPBSWSuGvPXmm1myX3BKRX8tFFLMgmKDg2SLLtjU9HxY24YHzjG63okWDPPyrUj",
  "key31": "3V1BG9A22z7gXjx595wnxE4ftMeJa95HMLmg1XmnL4SMABygtuoTe1rbAigrdchwGGSa1Ao2VapVRZx8mFtv7eo3",
  "key32": "MYdu5fc3DPfwBdz38r4YKFGMMg5znwazj3TW4aJoyHaDgR98opvp7xUznJPqRc8mneNtMb6Qv3fDihdNvExXews",
  "key33": "644pEfnkkQb1GqnXr51KTedMXsiD45WX3AW2weDc7ACxtD4ErtQj772NLQmz4ihroL2uRc9nt6naKHaY5CgqwVzW",
  "key34": "4JiTZw11vjeLt6VPzWna19C1q1YRmpkjrkE5onBkiThNkX98qS3ZQ7QxrGimBrH8zhFq2TeAa9P2rXCTcY8FYzvq",
  "key35": "3b2WH2SinmXV8DQnTDdXiD1XUTRdyvjiKvyk8v62uQoHLHfWLJkrX9DoRxPK8Eh4d7xCYeshoV2QZaVwFFVYFwSF",
  "key36": "3sG6w6dM4Y4ZxuHyKsYGcTLAB7NJbprfiJ1aRjnuenLnYeSpWC5HjoTCy3DzyisxwPgLsAiGvnuRR9szdEFWybN3",
  "key37": "63FGmoXsVLNjRDHCdHNuNxrSoc3kFp6AYbTczV7dAHTC7L81iuTY8ZVhG28UCHUmzyETCZmt9VtALAC3u8EWcWYD",
  "key38": "NwVJZ1GHQDFEHUHs17XCAojpxHGKqbcYgAyx82i6hzAaeUXwiqhcQLip8GSShmgdHC8VANN9Q1bnggU8Vjbbbj4",
  "key39": "3YZzejKujmfk2tNYzaHpuQmGxa5YzCWisVezbL5cmaaDEs2V8VQzHk6cUYWJa1zWLHGW86PYmug4BncUYc387GPy",
  "key40": "4QSonivLoq6kUB7eAFUeC6Ecs5t1kVJs8nzUCGBGaMp811KuuuZ9RGC6j4V14QxXaudEFGT79V7HnGw5u2xMxxh3",
  "key41": "5MS6q63Cc8NZhojtVA6D2hYj3rWPTMPPPJqwU4TxU5JQCyakv5w35sSpMpqLQR2Qm2WnBqGUTiwfbfCZXqtETYPC",
  "key42": "tnPGRvDvU8ojPPebNSJpeiJYhzckSKKAWHFvy8opp9htknVuAu86z3gfdvqiz5oMrbDsxXAbnkeNmoHQKShRzbf"
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
