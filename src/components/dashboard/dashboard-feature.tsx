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
    "Fqo6p4oe51EXpgCAqG446VxAhsvbs4NdF1wHh5PJukjJDvKZtKV6fnpZ6DWyZHNXKsgimP5oDB3v2MVu3BBZ8vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7sgs1SnRYP8aBzjrkHTBr5JSS787RHEFNK3dLg5K8JZHkZQpGhcT1XELRBAaMQhjMkSc3sczsRUWqUzVEyC3cL",
  "key1": "2yjqwRinejyYusccv8qdAvM9LRjynnhzRSBzRhastdvrjiDeR17Ckjz63gxPwroqhCZ5Ph3hyxLAZ7HvCdHymiXW",
  "key2": "3aDD9Vxs5wY9ygVnN7mLxRcvfiWFm8AYc4HzrvNMj1UoFta6GGRdU1ZDHeR7RQfvYge5ViAkqFwmejHkVrh83kHd",
  "key3": "2knLLUVY4ixQqGTwSN6fqucSCpU28dnWYhW1uqMg8scUED3xTprEN4gGj8xGGGKuWVumkJfwJd8DVzKevjQ8yeBy",
  "key4": "45zYfxjYFEsq6chJtYs5ev4gWJqdkVqNtGuyc9UcJTQdbC6KXymWaPS8saejEigZQg4TdBr8zaGrYzvbsdTdyAqU",
  "key5": "4mXSiL9ghu3Tqs4T7XnupVWY4QkVgvyz5rZftNcbKScoLdJ9LnyPeMQ5b33sxUEzdhshH8A4tL7VBq7YsUZWEe2m",
  "key6": "5uRQ5c93Z2ZNeLaZTyab2Fh4Q3J52t7Xt36Vw39yXHvCSgnJbroNZwWNZrnwDEEncb4UGeNfExwpgbA4zjoDdeZR",
  "key7": "44uMFnbb5e4adCZYbrGYGYDDkrzrcnQcsj9gkw6oiEYAEgygYk8rby5KpirC9j1vEp9v5AbjootY1UZAgvkKBEVC",
  "key8": "33QCrwoKkWuKofwqFwKz6946RJ88Kzcx6xKspy8tonPAaZfStqFuucc6KPTqva8jJgFaEBgTvxshHRGBjrFH2BJa",
  "key9": "5zwASGJs55tFmk4Mebsk8rzXPVcCB9G6p53tAD2LQTy9PERcdYaSFAYtvdna3ZRAswbRgQ2kqzG4SHpATEaqZTSh",
  "key10": "TjUhW88okPZ2ToJ9GdY56twNw64jMYJMiV2PajQZuVEdZ38tJqLBf52XF6ZFbHYQoRuiuyhTwFNe2gy6dBxb725",
  "key11": "3V15KccXMsz4ArS8gZbVSMvR9YZ1aVa2my3ScXtWgdFg2ZrVPQUpAdtpi2v2ppdthEFs6ZbbWJztNkDeNQiy24wH",
  "key12": "4BUrcE8kAfABAhQofWBwYHyH5rGah22DzD77xBHZe6sNWowSitZmXzCHR3ywkivqmWjMj2eHzEqjRkNRUHABgxH",
  "key13": "epw14X3qsZpu91AtcWrr2N8tX9ujGzFdezdYwQHucHiBrsKqRH71rL4oPqYoyyanNHBPFF2zXfQLwXnzhZmgYv9",
  "key14": "3yMyuwQ18xwzwDrZxWkVQHgoQMuF1gyj9RfLk1QhvHxSaQCgYomgGHLso9GpvSvuazeKAfdP22rFxZQsdG6YyGNx",
  "key15": "DhAYXxe5Myr4fwMQx23hYyk5uXjn4gdUo5tYKyQQaLwHg4jypgihuXPUGdmN5AM8rfrR9GKzPFyMmLC9PpgMa61",
  "key16": "5DD1YR5rVKXP3VsdKNyLobideRnr9cwJNon6ueKg9r2JspUcPZNnSQLNCPihr2qWMZxa4TKUFbXC9MXxAJ2B9r1w",
  "key17": "2JzKLAPHSZPTq74FCgPoafk9J6sTLSU4PZ8kdAypASTqMQD5b99MreS94o163Pq5nHH9bL5BvLQfLv75EekbnAaL",
  "key18": "4MiVM3jQuCRKS7iGfd22n25ekgMxmgJZHJu2WhCXGi2xzQj1xEXywuuoXNC8RcGjfm9N2YrvSKpFKPmwT3bgCYbw",
  "key19": "4qViVfGoRtVDJ16QnfFCjnRpCXgUjSEgwogCqjymz9ZnbeA8aW4S8nmAuwrY6H3HUyTVxzmNvMuSKAvKBaV3KJeH",
  "key20": "4saeKkdUgNG3a6uXpVS9stMwzVuxVm9gS9cPPa7BLYb1uGjLGoFGNbLGEQhiHjpTShJD12uLeBJwUHaAJyQZxhv",
  "key21": "3GFRVrtXQfhWsWn7oLzwW41qwL7La66Nxdpv3G3KWwmmYU83pn1pF9WeRBmtYWUyjRAtVbjJhUchCBujfrcRiR27",
  "key22": "5BNbvxwj9iif218NSQoJyDPssGCUhRucdCRNM5Ho24ic3qLzDTBQPYShyXd192gZ7FjzoQkDg4CQc6Prqjv2y3tM",
  "key23": "3bYnzCDJuSwTttLcdmPDpTUmDL7bQF4TJQhM3iCz3FQgSAqWDj6kAD7c9vVvA7rEzajBsFwYoMFwvmeUyV54ncfL",
  "key24": "2D8jgoFdGP4RsDVNQc7QmZMsPJgsFG54ZPK6pVPGpnAy4XaqwmDrp1CHXMK29vKennBhpYeNvde8TGYxjchbB9aH",
  "key25": "5T6L16DH8xN5SENibBwYbyduwLYYyhApbntazxEnAM1rnJA9Q3cq2epcgby68cJFgJYTS1Unafmx3qnLCqEanXTR",
  "key26": "LmwKfrkfYQ5j8n7RXYngzuU2vpgWHzK1cy3WhLvyARAqCV1etCv7VyboRgmc5M4KpDqgmYrBqwPqio8rNSJDXHB",
  "key27": "38KpHM4RzDNR78EswZbq8RWteV1G8TXDucqsb4jUs3sf8S8nzZ4oBTS4mRJNrfFCVdDaap9mh43ZdTNLnT71JjU6",
  "key28": "5sHqDn4Z5BzMba293QyCfQYi31PkHAZi9SGDnw4fafwCXXfxHNNWxaZcwpQrDkHMeyJWirW3Qa5rFYeoouvNet3L",
  "key29": "27AQ8KMs9uPFs2wsUQHo3JBhndtfSbKwhyt7eH5pLZPmmGSqFLsY1oYirVz9qv9LHatvNxNrXLGJxqA4kcuMWvUd",
  "key30": "61utab5CEuPr3mQvxZBTEAxJiT5ZPuqLCsHkeAhPWAy1bxnrkThBZYK554dsHcifaYrfUVJprGqfeVQwGmNCbaWt",
  "key31": "41sxJQebwbiLmnMkM19h5Ess7JpUeTdSPt1Tx4vVsuAnfvkR9EpeXuJzMYRhZUUMP1VSv2C7JQYDZxcyVXw37nHU",
  "key32": "wYXCk6By7Av7GcrEutXK5UAGhWVrXNYHrwv2mEm8RtNbYe34aPLzUjq5HdyWF6WHxnGt2iVZekuRkZezCs7TFEB",
  "key33": "56mLWm7XaWDz6FmPHZCK4bcpBodiBnEkt1PZVQTkqMynhmDA68oqRjGPKVqc9orw3yHogw2gsubY7yMmvhZ4wj3J",
  "key34": "WvUZzPoa6U7msQQsF8VRwtAyBqWKSpmsroKeogccgBoimgFyBv7r3vHHPFpUj8X3pY8gFje6wGnzsUzmaimGJCm"
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
