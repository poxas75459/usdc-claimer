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
    "2QW8T9GgBxRyYP3SgZMjoAdV6XpVgEMKqGsTdD5bQ1rdUm6cwZM14SE6es2E1nxAk2fYAu1UXPa2UG1RvuVjsQ9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2damoQWwqSXHy2x8XBuB6zFrKbL6kgBPxrHMGaTHWseC4njNvCy9rjMKqoJENLoqB7WT8DardZHVSKbHpu6QJbRE",
  "key1": "54FFhrW4KLFzTBdJYnmhYoCYZFGjxLKZ8htoFr1h71cmAS7Pv9FXexKXTT4gM7c8NRG9SvNAw7AiXyU2JQZKGh9o",
  "key2": "2996fTm6Ddt4YJJFuWb1RiUJzz4bFwEKNrFBwZGrCtxypjBAtS8KqgExhWe68pxkJCF8fq9hD4WdeQXk7ZgK1arX",
  "key3": "3xbxWeqUhJDYLwqNtbTNK1r61PG4k3mX33XsveToPqWGyHAAkyiZKsLYhY6ky9KashZpChFz7wNQpki143odmGB5",
  "key4": "prXHs5X8epVoyrgZphYWrLXUcMd7RGWbjnDZ9UgKNkVTAStUDGrTkh6hrtwnAiFhrj1GELV6DUnjCsgwcq9mXNQ",
  "key5": "3MLJxwhMRtaxJ3KyYPWh2nfkAP7C4A7Vwpuswf4wYkACYX7FU2L1eq52mXAb2TKnzNPs8ksASD9BRbfF2gfeFqCu",
  "key6": "41u9aZAns19421NGMyV7p2FVpfUhaq5GsuQ7aWMDYFVRDfRZ2tsLbKreWua7FeFdf3ps7arfUBsuAybHBL41AGw9",
  "key7": "2JMZnQbFqh73qjJWrf5RFYHyRDgMz6FAebEEV4ZuMRQyfBHhtHCd9ytCG1idUSshpYutCKoddYqGyW9PCr1WVYnX",
  "key8": "4eRPkpxtKrAtLkH964wBdCUtgDVkYifKSgczJ2neP7ktQ8DdDchnvJ7PjR99HxajBfogppC3MiY9pTdojUMiusXZ",
  "key9": "39oxayZdmfqVNiMyYZD3m9HgW42TcKz1bD4kfggptjrJPCEfmKoZfy3sA2dy6m1f449TNc6mmTbdmUfvTYpWB2Tx",
  "key10": "5SdRjx5MHvHhtrc6SswoV8z1cApigTnF9LLCN6bBgMwXj1mbHAA1gtWtvqF2Mi9C59vo3XbxEviM8nM8sTV9hZ7F",
  "key11": "5an4L4nBAq5r5BQ5HCaspmp7QWdLMUZVPU3DPmeScsLRXpk7zCpPTQc43j5GhbruqdqjKpNgMgD61payJqC2WcbX",
  "key12": "33ZxzyhKVJHmCG8LLxSbQACZ4E4M44StZwdeYn95j3Qc9YEnPAXmQGPHF8R4rgUR3GNEKnVJZ6bvkSwzmtrcjAm9",
  "key13": "3SdCZx6dZjndtfxRxipfhmihFG2rSAt3dtoMXhVXT6MQTG12tKmb3BbiY8CHvPzCDfdVU4q1nxErafZs7XJN5ibQ",
  "key14": "5gfYLiwmwncb6kCgopx5Hhr1LneF2Z6HkDWoeoySTUEfbUwT7NX1h3dQyJiP7YFwZjDxQcHNpaUMqSBGVE745TFa",
  "key15": "5VE1zpbeEjPGSyZ7PDMxP8aX2XbdoomNVsDv2rrff6edFKEqRrXExKMy3aJ4fqPoQazjuR6CkJJfhctKQXtu3DQa",
  "key16": "uNssmyycdziLZUKf6Ai1HGFVEBGHAtt6YMtUqF55kG6KCKe6NLDcNhzYMkMeccnAvQHQdvRYowPrnwn3fxWX2UG",
  "key17": "3ikvECeYYAtTf8i97P4avVs61VKXqTNZ98Z94Q4yLefMECGSNqqzDSVed71FhS9kTMMR7F1t76KMKdu92Qd5CGHd",
  "key18": "5Xc66eWuhB9HU4wrdXJwAnGVyqGLZStFNfjx7AuetCGNTa1Q8eA5x4ycJQSubUa8wDxk153mXSdHzX6XFqiGYMgs",
  "key19": "5tSQbhSTZU1GeteRxpUs995dJQWFmLipHeTY79i4U2NkefY4pzxGqRWPZLb2M3LRH2dBwEaJkrr4ps7zasfCjaYj",
  "key20": "2BQzEMFPa7iYxxRzRBUjqHY3K1EGVYeHG49eCp63Vt2y2YxJnWB3Aaao4SGmaH4ZEiSL4zybyBAp2bzWFedX4FyK",
  "key21": "3DJgWTwZqgAQ2ERXHid7TApXXiaqbLshLd1mkPD9WnF1fgBwQzyENhiZC6MLLwmnGi15VPRBANG3dAZRZRLazcjF",
  "key22": "3Mqt9ogWgm5sKJ8HrtwJh1NkZ51X1iqctnFGtE5837d3drG53gkeq6FBfbzSZd5mChvHtmEBEVujbmBEQ5R3Q2HX",
  "key23": "3DtLS3pew3nrHfL3ASo7KKnxa32CpWTRkRbnGR6QkonMaN72rhisPLU6ShusWcBvJwyhUJD6sLCpbecgp5S3pgff",
  "key24": "3uUk6hoTZRzBsJy3VpKdrE3phCehvLT4kerQmnokxFaNvZt7CJVbP1KcubyifjgiaQdMVFCpHBBTXscs1hynM88J",
  "key25": "5VeCpPYjgeKzUetxFysTPEjiPGyzebqe8SXgPG3gJRZbimHTPGFeyV9A8xrG6ZqgsAcKxinMByKhxYHfmxEKTFtr",
  "key26": "24XocYdxLaWoKnH6TBVc1JeVJe8kzvW1tGH49NjXo8pmsQ92Y1QRnV4DVoLUrBqcwfKRMhNpSnjABADCvYpcW9xF",
  "key27": "3gWrWg3d1ojSJuFTxeBsaTC6YMzEEMqqzBdHUHm83dP1M3Zz7gDT1szuW39xEchrydcczYk1yhYWnsZcPHHQ2Mbt",
  "key28": "2gdKioQFRCoMrccQGbd4GXNikCpKQf68dtzuZRaQucLyfUqhPcocWp6JdScRcj454vYVRFUpJYgVtzmj8o9q8CQe",
  "key29": "2SjLhrXN9j7aggUg1xQ22piqm5VDWfDGLAyfBissEpYbFhzC9NT9w2NaYceyfSpFKNnMbjk5o5hqiJyZTkkEguQz",
  "key30": "5VL7f983eTRS1y3GBNu7Rb1SXRFZCUJHVKdfgvHWLP4zkfHcFEJuYiTGGDEBQ49E8Mn4i3LxbEurfbUChbreuFx",
  "key31": "26tjKVcMG8thxy1TPLDQnumFXeEHnJFkzvzuuscmPq7GjDF8xmtvTsAtQkk8puNhJfmRq9Yjp6KCkfHvoSXaQmKJ",
  "key32": "5sDoknrT8yapVRbwiJDmJKb1hbuSh8S2XqmAzdmyv9WY767FJFkBXyNiaduTx8EjjTdzyk5huEaq2KXyd5g4ejtc",
  "key33": "4GeH86CH6SuKfwA1qtK5PmpgqmwRavNyNePUdyLdUPdaovJZ5zSR1Xdk2mGTT57MEjuTCwWqg9ZaGm5hux9B3szi",
  "key34": "2ovjGjuvvTfcWt3jqJA1qHJeCZgSLTApse4T9ZVdiq4dnMf97opt3RmwtEMMc9R8tYHzPWpdJw28bj4UuNRx1NrC",
  "key35": "h9WdchiydA4McSHuE29M33fLHzz7giye1HiM6ViMMDGtnsbTdzaunio3vUB5aKUkqHqCvas5W44zu3baDym5EUV",
  "key36": "4vHiBr14iHGT7DoX3cXKBQ6XCp9g1GzwNyrEsNSXP5AVynETnhiAKrFgEddMUGHERTQ9kR1scUXYQHSjb2VC7mqF",
  "key37": "5d3wXJpZcFRHAfSTguSBEiskJ9DeTiKdcUm1UWTssUGcZPm33Jc4n67DHFdCjpXLNQofUBxE5QZov85dbH8evvPo",
  "key38": "4rW4Qoc6qvJi7yraHu6sNK2ThrQ4wupBFx91JnwVCoW43iC9i5ZaggmDrP5Cgp647z1GGjUByFPKJrtCvdk6DGhH",
  "key39": "3K54dTJMd47bfEVcPFguX1aG45Mt5ofKAv6upkxLxTNA7KNZdgcNhnxFu3NsXmEa3KRL14cfMyehLhjkt2cGmaLt",
  "key40": "54vLZanpmc3w3XbDG3Ao9ZCRPvodJvXDuJE73T5RkBnRwuzszp9jhABSMM1JxGi4LKjiPX3Wrx4mVVmBKL5vSCQw"
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
