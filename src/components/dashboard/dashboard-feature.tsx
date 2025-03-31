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
    "MdqZ5kzz2Zn7mzwinyGXF9HVKMYbizLYCqtSmJccDeJmGSbF3iJwmERYCou3fyTBciFTDY9kgbB1pXLJwxcgF5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZihXCLHBYGUgGMj1WPur3LJQjgn55aeSgPzw1qpbxr7WZELjAeh7bqWY299ZR8dk7nXFcbqvjDxxyzHWuuqktZd",
  "key1": "2SsrRifG5xW1ugC8DcmZpQWQNeNdtxK3jYpzLdtWZcxW9uxD2A6oNqa8DtyRLQ4zES96bRCYVTZ3WGaM4YTSmZeQ",
  "key2": "4q5MLD1stF3h7qNs1TcXo2x21dUrNnzjr6Ca7J1CxBXjcuJkg1MDhGBGuW96esqxo52p5AuyFkcN2AtZXtKY7hiX",
  "key3": "2Q1mZ5vVrC2LTCCgakHfHkbSXaUiF5dbDcSTTRucQHYpUR9J3ikefrswt6pWW5Dm2zedw3zMFsuXqKdg5rTHR9kQ",
  "key4": "5eLW3zH7qj9uMQemFcjS5aSbagGoR5NR8VFxJxPmAWWHgwQf7fTctwQnqarXTojA94WvwYkQz1v4HM6gGxvjqVRK",
  "key5": "5A7drbxkCkNzgs3tmXopRog8i7F6w3gAzLDdrhhmnwP9ZsWcUhMm7MBfTJQMyKXwwiSGeLsPhXfzkoEsYgt8nfMu",
  "key6": "59woCqrqzNuCkX75Qngg9e8KUSscbKgEPjSzezfesJKzK4BEMFY4MEGqeNBQqWvDfxfXKvTxXTixji7sNzo2Vcny",
  "key7": "4d7V7a7tVq2zhRGmRbYJv7cRwgSiuy311euHPr1RAckBg8wfbhxtofmfMK1QjSjCnJy9Tc66sWifeDxNHLrZp2h",
  "key8": "5PPb8PdmW7d6jtri9kFVsxz9bDru213Pj8NmUwkN4owYfcL1M5rMYpu7voPjKyYqrhoGMxDW3ZUnv2zLB6vKPDhx",
  "key9": "4TsEp2Xm6NVfkZmBVtoYBKd9SvgwrAGvySswCCV7Xk6h9xR568JQ8NBmsgmsZT4uAVMTHraEYCRp5HddANncvJfX",
  "key10": "7Rx5HQaNVQxwRhNhXoL8mHJYmWaHomzHXQgL49nci3RMXoRHRpX4eX2yHk66bLqDWwWWjMBhWK2EwSsFLJWkLp2",
  "key11": "61hZco6RNXBRQHSV8p4G2r1xavEcNZNNQq6LRxDyNMLyDdJEnhmbW3du3z8wbNZz298ufkZWaPn4KzwNA916frWc",
  "key12": "4TKWhyk69yz4npcVGRYa4a1LXvBFY5QDMDRQeQbqaUzBxFEsytTVRjg2UqseynYa1HbYQrhoBXR4ogJ613kjDrst",
  "key13": "2HQP6VmKej6EUpTk84sD9bgu2qkz7kgUU6BRaBC2cPGCc8wSZSRPsAxtSDCjP1NbXmgPA4xpjtY2M5X3vf8wDMTo",
  "key14": "4ZFkRnppnbX48d8g3GCBvxexa7k29jH3ZHGmhyyppjUu6Nk9hCQZ9Uqqj3Ar7qbARB9A5aL2YCxZk1qcjTGr2nCo",
  "key15": "2dyn6Kqxc6LnMLFg9NRV1Ggm78JSmt79VmGARm5TAaC93ypZTEv195gbcTWY2FnGN9bWSwXJYw5DURTPAbNyT4UL",
  "key16": "3X88ZLbwBNrBnpJWvjSJMgqqN92mmKS7bKUdUd9gwSxJoCazteW1He9SLHd7ThVvSoQPJ3M25hNNyMBjqvVjqRTi",
  "key17": "5Uch5iSjgpsFq9CnwBGrx8mUwProFFrSjUt2DmXKkffC9nfxE7tMJzZJLRFQAXzom86fwUCxD4YFgaz6UkxSQ9mU",
  "key18": "2fkKsmygJ935FGyX85ajftAfB5qdQqy9r1ThwSCTNhjFXrBhwZPRDT1Jzrn16QmBEH7Y2F4StcmnSPTQMaCUXkGM",
  "key19": "6hhUR3zvpHFXsVEbcWRivGubVRxwJLHyMHNGc8ZKZW8NZ4era6oMUysT8P1Li6YPfkrGsyruxXTmEk1qSKGUDY3",
  "key20": "5EG652wqrxrWVvsWZN1h7v6Q5LdDNopDVKeUGFLcQa7bW57hUBwsvzb6aNmofMfQ6bm6JorxHNaJ4LvEaKkpmWf",
  "key21": "3ggFDhvrTMhZPEXjMec1Rt2ZtJvtaiVQWjzu1wxKw1Xh6EJBZinoZ5czsZ3tNsRVcP947v8ht8up4qX7RBiFy7Zt",
  "key22": "3wKxPWfbjaBFyq6bNoq2TaNd5DSVXUPcMu9wRr4MfLvHntjptREEugjUKDMQrcUoiCcGBMuVJVdGGDGvhu4otkMR",
  "key23": "2KnZoUQkoGESQXP82s1BJw1fLisVcUy9SBR9yMJysQ7T83Jfag49eZUUUh2rCFrcC7RYF81SVZFz9TLruZrbGvfV",
  "key24": "4tDM54LjRkHJybbP3Jupv7XohtVe2tvJnaFuywVza5M2FcJfVysEYBHzaQSpKm872aANMLpNz94xUu81nMMFEmkL",
  "key25": "26eSa1kuawmgm51draTBHAzTfBbt915U53aTTL4dzU4NvzjmQBRbQAJM9KMHkjuRRoyqn588iP4rWvPmTBTdmuhM",
  "key26": "2rKDLuGwjyR9tsduwCN9jLaYbhdmV5i8m7E6pmxGWa7cDn2VgbnpdFEQEoWAJbHMMRQkyM7LRBYpsK61sJCL9Dhd",
  "key27": "46uKD6g7afwCX7zjG8AKJdQDCH2HdHfDCydcucSocTjfUPCW3aoRbqu7npTRvxW9cnsdpcntu3au1ATV92duqpKs",
  "key28": "2JtvW5vGsiT2V6rZVrUmFqW6hDvcKXSNQhGsH6xNbwzqno6HzN4TxER3oP6mEoZuuzQpT4EJGDUHxJLLri7vmqar",
  "key29": "ZYdyANUDnUhCrcPzaJ9qKBnDjhcDiuDa8dsFyrwsJL6bWxa9TkuRQC1Aj9VY89TK5C3avX9EsCnzaQyThR8zorZ",
  "key30": "4dvtZX2PTc23ERxWxtdE6pTeuzJWRevpyDXtwdpggjh7rfiFzCWEUBeBLBhSSTaZd8jB5WNqnyLakFBkL4N2g4sf",
  "key31": "2QWpPkvAKstyWNQBaJSu3PjDaxXqZP16KqR2Sg82LsLqMcM5ERXqZDsnGhk9efycRmgBZEbmPp6MKjZ7i4bjBUCv",
  "key32": "yfWdHYjvGBDNFanRBvYyzybP94va5MsRJHwjAGSYVawn2PdQN4NJkJ3bP4iDVhM7AFmyYD4sh6ZkoqceC3uydE3",
  "key33": "53KTkbkSSEo6j49u53Nu7fH3sMBreBCYFiS579aXnF44fqGVztcJDBBiTUiYa1e8Mdhwg38amPAaZbeL5VnU5eFH",
  "key34": "9CSnwLMJkZzsTCaDQvvDcVg8vaAy8SUnSxfiapRVCXqnajegr8pBT2qeQmLtW2kRYJrr5KpncpUsoaqdiW9FN5L",
  "key35": "5cyCnZUxjQvmZBjqcK27SCmUQgQ8JBVC5eVQZx28AQtzvtDkrG1FevfGJPoYaWHsJ7itA8rMWoyCXKnfYqUb9Lio",
  "key36": "3NWHaiMxrPYgmijLH983mNv63LEtJdma8USt1m5yMajBaB7hkLgViQCMnF4ShA15Fax9Q9tepQY9zqgtRjUcseyP",
  "key37": "31oYkesLZv1NF4taTKfvMM9orXqHWZm27y8XhkU1fNBVcAc3cJH3k3r9jscbfnFtMtFkei2y71v6uTo2EnweLgoX",
  "key38": "2kmKBziaaZsk557KZ1ipsdMdqQvjrVQUuSQoGJbwE4XFWTBJpJUgPKspiQ2FH7UeymauArPDS6Pf2GunqjMV2DuB",
  "key39": "2jn2bugpPTMGsJgj7ZA4vZjUN5RyH4ksibNNAimvtLWrNpULoZxb4rrfjpB3i7uFPseGRcCQNte4fNejNZpT9XSL",
  "key40": "5XGvhyi9UXSDjqSPaawsSwzNoZ8XtvMKA4FhqE4s5cbw7N2g537BXSktB2DdhD7XU7zgQPfpWzoT9hfNC12JfRCj",
  "key41": "4TStV2UU7zPrZN4akB9dHDbgxGNGYQ7i78M4gd5Hnr4u2kAr58kedEgUHFxUUbKBfyZuAjf4Fr1w2qYepHci697g",
  "key42": "2MBebCFGbuub1Dc6vBYdX6qBtRLsEgRvsambSmce9STmzN3sShJagwEb6Aquosx9mrmkRPPTzweiKXu3RTiWf3RC",
  "key43": "uedZdZtzDCeS1LRaYoFZgMS5cU499eiB33NCkjy1TC78KjsWJnY3zFhFQbvoXXda6b31SYgUCyhjg1tS3WeQpCo",
  "key44": "2VpwZjS6Zk5JTYRsjga9ifcLhpDFbfxW47WS2dGTRwXjrMn4zqGg4drE1VRXBwy4Bu3sbyLHfB6WT9zA2ZFSCnq5",
  "key45": "3Mr6cRjh476jkyQFmrmWiLUHfTKsTd5yLNPmsLEXPUvujTxf8HhepPXMALFfeRuM84j9acjzwheHqLR8XmqZSfGg",
  "key46": "xxBJGGY6rDJEFSyk8ZCq7YjkXcUzGfpAjLqrXs1gfmZdMovB6HvwqhTrQ4TxLcKiF2vbyboabfeGg8ahLk4gDUg",
  "key47": "31JHzH8NGkqb5zqYjpWyraCTkrF8oByusKbqV2gobfgAC97vqZG2qtDLMMRgQk36TS8J9mgakMLBj8hyb5L83HKW",
  "key48": "4n5dALfQ4yJgirfDbfxic4wf5yzj2Q9S3TFGg4q27aG2FZhPSiZ2tSzHjRMpfRvMDGV44ZxjcpFjeRx38YNoP5uv",
  "key49": "2sVigJGV1wx7KPuRGCCnKCJbm2DCbHMqu76CwUtpdKrUbZH821PvfuktyNZWMfmKG7vndBhnjjoC4VBb7HDPifm1"
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
