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
    "2KqCFXX59w83tE5Xa4Nft7paUDvb6ke8c3QX2YZbVtTbAbxN7p7WuBwusStqrLMzzPdHzQkPHq7nvuE93hGEd9iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcFqjbzkwnU1VwZKqpKqvdgRJ6Zi4UGipUwTDyeahdsNUDFiEi8KHmkRC9dofnja4EyA9dEPZxjp6BsWPUspv3w",
  "key1": "2WAGDdSripmRnPxWrU2BB6moEoSdXeJJQEMEMsEXYQdeE924W1QaiYdwgiojQxiJaThYc4xnsNtDSFaQNoNZX85E",
  "key2": "2zUhW4x1UD3eVMhd3Xvm3MXogNS69bDjPPkWgB1URuBUVU7iEuiyFXcrseKt2iNyYiTmZQKjN2zLuSEYcUuhLSAy",
  "key3": "soF8tZJR85U1S2KVDThvXnSt7vsYwHKeYGu4EcFUC55GHsFpBkQf2uLwZtad9gmtxQVH45Kn4dti3hoMx7Pq5So",
  "key4": "2wni2aXQ4inNty4QDiwEkCZivTBQqG4i28Z7Auemy1CDBmwhHDu2uMErsrSrw9gP3XRJ61TPfARo6aWjRvPq9tjM",
  "key5": "5QvybPoDphm2Dw3CiWVjTsQqiLxLfpoVGdANdB7tRj8eTpzpTL5FrrptiuPHc4et8ApwaDFb4C1Ldh1P6MQ7q7sF",
  "key6": "5ThFopyNgXsjJeLbq2q8BuLKcu8Eufa2qLLMhMUgJ51oVE4CmPdjgXU7N4P2um8jzHE9YqquTTAox2bvova8nRtW",
  "key7": "3XKHmn649wkcmewosKzAFvRYGpGkSTRgUizNi8M4mHMDWzwaahNcKg83Z1gdFgyrwKsPppqk4ULSxQydEyXcebkX",
  "key8": "2Ys8DLbU5wHZD1JW64vbJYfCLD3MmTqHM5Q7AXnNzab1RRv8348gqWF9zR6hnUwcnh67Y87uSXKmkcgpsJWMXhEj",
  "key9": "4GHyzWPZXhq5LhSCaBgWgnM2soLTUUkjgks1JJDZfBiNw5wJ7Xyt1en3psf93v8NE1t5GWHMLSGKSU77NxURLevc",
  "key10": "5hHAawkJhBWBsYnUYynnWeLTeoRpr6PWVYDPx5yYwSzSXWmeowikaz49Ent4nDu5x83pT3qzciWKcgDZ1CjNnPsh",
  "key11": "3FmLu4T1d7xJmDoo8NBaUnzXyuLq7QAjkY3gZnQa3UuYAQDvpKb5LzjmsbmHEHa5By4vMy9GKx4gyJko9qw2SzQ2",
  "key12": "5AAgfTqcXMZrZF3HUF8gNBeggcDM3Tz52HrqiK2Mcr1U9eGno1NRHuPteVjRtMNxieKFRnFZsBFnovuqpZWV6wb9",
  "key13": "3gKktpckQZmJJBQpzqu3np8Xodq6Ybjmw8WKZ89e4q4ujCeFWLhdgbigRzSmL6D1xp1FXWxLPFGmCZ2uCxSvTWcb",
  "key14": "5ArTSQifJrah3GkanGrUwDBrqafahF14enxaki3ppNraJJx7NoUjBNwYxv1ZFoTqBBtiqqJfVed3ixdyBbbeoi8M",
  "key15": "53G7oRDH1YxHHLy4zCj2K9YfNLjhRQDAht3iXY7Y3S5eqqyqp3GVvzmsmTgytJnXdJ4vUQUzfeEDmvbvLx7GixeJ",
  "key16": "52g1sAEn6AAuSmCk9gLtSisfYtig1xThoRtHQb2ACrF6R8TQAHUyEVE8K3m7qVqTGfTcoRKoE6PbvmgZd3MnNW7P",
  "key17": "2qmmBHzR2Zpa1mfsZHXdYJBR5X9NLZMBiuvXapRSamh53b4TLYAqxPcaDVQcxJ5ZSNhqAPHVUsaef9HkgPz3Nmqj",
  "key18": "4zMJ3vuXLQBJ4TjhQpkgJB3XbwMbbR1TRm1cnRWn6ECwTTQ2jpmWnEELAguyEdfTmiEx4XWHQgbbNPWz5BGchcpB",
  "key19": "31W7Mry1HYYs86H2262MbhBxjLdPfCBAs52v1FygPpLLEcJTKiKGRFmULfs3YRLgbUz3mGEiJmw5MFsVL2yKdZuM",
  "key20": "4ZevP44TMJyYu1oiBrtxUGnEYFGABkeV4tFPxjt7D9papVRw8gwiC7dyRA1JSryQvWpR7npN8a1hZqaWJUU7Evtg",
  "key21": "F724LV7LNC1M21yv5P2gr5AK1S2sXahDqUGWvBdZU5mGtrmL67pZ486SycaFMXqcsiuhvh8eoEwcSgNwPo5Y5zL",
  "key22": "4BErkjwon9FfNLvY6SYNergWaW2QQZsswPJiSdE23HQJf4ADk7iC54WT5sY81wB9MkGFfERqa5v7g5j7QgeR3DQL",
  "key23": "4GxXLkcQacXFqHCJkM4LQhG32cTEix7yXw845Fy2o6HKAU28j4toN6GUyA7J1N6iKzkGi6dnVq5emXn4CT7BM2xv",
  "key24": "5JYwyNpMcUweKLxo1paScRqmMCGvdygCUJsCyM583tbsJHJAcDTrhgduUNXPmNWMKMLMp3YK6xaorTxbk6LNYzoj",
  "key25": "2ryTVS3qmnPrvnFnYipjnA1t76Xeg5Qf2f3ScFEp21bRNQTWG7At8urwaMMVeGuoaNRrdRkN22dhgxAWddzgKTdR",
  "key26": "4DQeewbm27AjFGA5ZHgB9c4AmaBxRjkqJXhTrYSPa67YP1nC2mwUasLSNEPfTusBmwZ1ShY8BGagGaxXGqmh9Mp5",
  "key27": "5NKvx3HvVbhNXXHvczAMfVDWCi2AVyQU98x96MG2t7EaykQHPBcX6N6fSXw2XByEpm8hUBoEF4ceAhNpjgL927Lf",
  "key28": "4JvZsThmmuTGoz1MD9LVMpyVJs27GRjxfyFjJmxwbHUkBtDudGYii7Y7DrK1wooKtr4Z19pjTYTcHdSrrsQrAm9z",
  "key29": "4TJp1tpgLspNizpJ6qH9xnQkrSFJJ1ma5MDeChzf3jYsGZCQZjDbbreC3eUsstp5i9J8qtoUGEdWZYX3GX7R9X6m",
  "key30": "2be5LoRaHAbzvMVv8SiWTQUodL586ZTpmVq2j2P2Jrv9eBpYWT3BSRxViNrH1oDov1kj1PWC5RDj3puV85fQyi8h",
  "key31": "4EvpnnuXFCqgA9Pe9oUBopi9Rbu8aUVnGxmEAEhZdJTvxCiuZDx3CFVbDogM7vABDZnpaqxgUd4EYEn48ujeL8SB",
  "key32": "U3kwWRd4S3fmyFFdJSBUwXkrkqzACs1Uo98H71rq5UYs7rkiQtqEPE7fF7Rx5BQG9cdYZZf7iZnXFWWRA1m9yvQ",
  "key33": "2zXvuuvQXfTbsYS8yyU4UQF2rwt1BYAkYeNwcz6k3TpnffKZpdR6eiPte1rokMJ2HwSfejtq8EB1MPcHPdL1UNms",
  "key34": "9bHFa3wsAZ9R1iURC4dboVBqMT2jnqJ2GcUGQgARg6GFokGfDZMSS8nMgR4D3L8ZWZFfnKeTNZvJTHDZAvuwCC6",
  "key35": "2rrn3KLkQFgZqeA54DnSFYWhcU9t4jhyPSbKCLz4o8RcXPhhDdMmPbyda2bhrWy2CP18R7G1TdfLFkLiV8rikSk5",
  "key36": "2wucdxjN8PkycpbDom3XNFZnw2KQncbcdjEfjTZn6y25TMpnqXibm8YCZqBmpBUMjras8V6KPGmPe3CQHpc5JtfZ",
  "key37": "23eErab6XuNrgFeVezxhVY1CAGw4w5GEthzZfWWYFN2FnSZnJwFVJfQzochUycegKt3AF1WMP7fWiANC8rPy4fZP",
  "key38": "2Pn5nU6Xx1iEhwxDMedKVvXCAS499DBZvAtheAk8uLagjVGcNaYDHKHv2pkEz3beKS1KR6W4a9ovEUHt8TDsKzXi",
  "key39": "5Fdj4jrUQQqSTtpw5A9RkoebQ8WFUzJSmkayntgFiAepKLzxgn3Nxpyi6ELM6Ecga8h1k7pnSx3AVxVUCe2sW3cC",
  "key40": "5qVRB6X1JsC6isRn1e5CNbfktL2CjRouu8rt66S4mMSj277GHmUy4Awt1DurW1snSvg27mjWmrVinVp843fJkY6T",
  "key41": "5Y3bn2DZC93R5Wfq2KohcLdSFSJ6U882zB9uGRTBqpVjmNP6uxgLD8sB8Y6pg2QFXHKnMdU2hfZe6BwvEc8kRo6n",
  "key42": "4KpefnMybKehsSMGNtX7L8n1cZDBq6kd1hJ94UaLH487WsJxsAhjBm7vVTZvQMemobSUzKfNgnFEMxfHeXmpRwo3",
  "key43": "c4STPmjUuKLfWcRiFKuUae3g49qeDtpwTmhUzUGwUwP7bZstby51AWyevjNnd1UgNt9T1hW3h1FRyuGSbSg2g6m",
  "key44": "4vmfixQ6bXgC1K2H3NFZm84rUyiK7JGYTbVKDdPkX3ydyGXt6oW6nxVFmWVNmxkHtgqoBWTr6261dpTdaQqnFUjg"
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
