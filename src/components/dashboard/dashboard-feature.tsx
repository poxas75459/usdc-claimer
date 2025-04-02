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
    "3NpKFctUUx3tPugHVK9JSVz1fRriAuh2xC5xmzm4T6j3Qc3VMMjg51EkAe6ioH4kW1WxqEeDZeg3UNhrW2sEBncL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Pp8MKsCi8P5mnLLpzDYaHhkn6zygZQGwh9CvDMZQwXNNDZNGZpD9kASwKTkXw9NwfvcWcCraz76PPibdz6XQ6g",
  "key1": "ch5X6iYnExVqEX8JgusHxiG7cKK5px9XE6KQVNw9dj3e3VYyC8Useehe2gCUUjTCb58jGHfcL58e85qtYpVbVRg",
  "key2": "2kVqRR9QV2gES6zrYaaXbB8ckXUJZr49NZHRXiTCWEujE4T3nBXtdw6SdbxmpF1LfTTLRzWVYpX1WdgVksiaTYA5",
  "key3": "2V6ZX3ycQ5KRFa6K6ZZzdLEWTWxo9W3E2qxdKBXzvWt4RRLcGpS4XuE2bUXg2z2XsxQcAM6mStUvXfRJcdWuWmeb",
  "key4": "Lsbv5MDnnpiEHHyUiFPU1GvAHAo6Q6AFeScWWDWf2qSgzLQgCPGbt7USqtVote6zAGJ2RVLFFPCyJeybHv1EY3p",
  "key5": "3QBXf3vznt5HwfxavP9iTfa55wF5HMmmSKR6WWVez3GZhFVo6M7SMrrRzEwNoWR7yZFSPGjM8odPDytKZ1MqkdXo",
  "key6": "4jfLrizzWGLinV5sfpBWrBD7av9NT7vAFesPVRLQGmCpAvmYGpcMhGzHA3JavFNbTiHtdNkvqoicEjV1aj29pfCD",
  "key7": "26mgEH1wmSh1v2ypMwr5jsFWtfnRk9PRPngZPdGuzhTVTyf9qk7raXmTm5W748eu6L8seJcxrTEskSNbQ2hDaa7K",
  "key8": "3cxnjjh8EG48j5KUQR2mR13tS58UCFJMQhtkn7jhGr1pZDwd88ye25EBqkLQpx5WFdEBo4P1TjaohYks2HjvzpFC",
  "key9": "4AdMcpntgF9Jzf1hhndkDQ4vHc1ZJpmTY7gcHzCGVq7gQGXv9tTLv9b2SGSWPH9VMos5i5orBSbLw9pw4T1L3hde",
  "key10": "afLzW3rtRhB5jazrFwey1NGvy3j9PU8rY9hZJMRHg3Y5rsQbZq9zvA4LchoyPKtY3LEE3QDxBXyw5AVpSy4Bwbc",
  "key11": "4aNFQ1cSjE9kQNVMcHPKp3461CQfrg7RM1sQEDA1VkxAt4ew9pTfxUtBhpYBNiHujxtaUbVFUFsUthFQwE3zaDDR",
  "key12": "5oz1tFBSSsa95VMv2xECPBKZ9AyYKvjmQjdLPYo5WSynBLto6bV1XaS5aQ58NRKseSpvYj5c3erxyVhGmPoH5ChB",
  "key13": "2VYZuL5MDjuXAoV6sXbHGurfg5nq8cen2AJdGqCvzmRRhmjb9Er92LpZVBJXwAa1zjkeVpL3i32zCWf6fUgvdTj9",
  "key14": "UQxRC4hAXJGXa8RFGJ11g3SQDLipibAbMTLkXETSBf5uH7g1pu4H7HfhjSXZEgY9pms1Mq1um3ASVE8BGArpBWE",
  "key15": "3xDMqZjAFYkD44YnEpqbxUcnMNkyCAoD9bUEhfmYhWERB2kNS572hEKpoyqHWLiEoEgPcVuGovoyL221Tn8VQ6Jp",
  "key16": "39ZbgCExzYNvNzmDzWb6uaa4tMj9uqiV3B3TgDrjAjZcu4QYrV9r2B2nmfMjFLF3t67fXRVqY3y6LcGCRggfkFVT",
  "key17": "4S1qXH6cvj14nzCvV6bV81htm6iiLoeM7XfuqfSJhZeF8EnsskayGgzbMBjYUCvKfcJGk2nn7z5o7LQGPg91dnjG",
  "key18": "5z1gayQFXEa67RvmoThML5eZKcmy5DxTAh24X6peA3VpAMS8ni5TbU2rqnHKNsePaTjiEsquhqQpDKfRNChAeYBy",
  "key19": "2QjMNmq9ziuRgWmhci65b5tW9D2QuCRSMck56zCSMi16719oDeqTU5wN5jRvLTFAjCAtq65Sd411WRHLR9nYtDwi",
  "key20": "5rdcDTj2zmmFKjdDmULANrV98eBU3C3nLJXHzfSUJY5xXxxzNPLqghqaQWZTXsjycbLVkT85wCrVh9VTgav9f5fK",
  "key21": "2zqkAkG8XxwTwYeYGfmSC3tiSzindAvXNuCUmS6YFWjrV7gGXFmBVBzja4euMgTc53qo16wKsLZsFtNMSV8piSm7",
  "key22": "2512X6n41oou2WNuvaDMkv2K4zf3cQiShySvz8FuBFsmU7fyFQbLRBKa1VeM9cpPRxXrLZT4K1SAdcnb4wxGSwQw",
  "key23": "eBWzUT2H6Um7yHfETPaNjqgZ1Eyczigtn8mmB8JwuxH6H4yZHkxSCaYSk7VEei5X9aoNTDMoyA2foikPMdUfeNe",
  "key24": "5shi84yWw6EAVwvubCTrbaewQpqK7eLoogKwuLmvjwaPwqZiZ7XFFM5HoQckA54G1LAS8CDyF6mo4Jf7XkUT2YE5",
  "key25": "4H27KoMknqkniAjNdEqTbjYnR2FMg3JXibepJQ9BUf5VwYwAjUWZnLshHAcVgJNA4pK1tRaPDUxdUTrXD6S4mxY7",
  "key26": "63CTc5muco1mjDaa6dSXWTeT3TYpzfr3j6WEgDe1zyq6VWqZRm6h2gKPyupczjjtXJACACpc9rWNa8iVK6wm2nc3",
  "key27": "3WpHKtfJXfPSDfy1FFQP4foaqQ6FkBJQ7fu4e9SEBVABhE7fLeqHzhE7RcRrNbN5cu2sb6vucPaJ4tCp1e5qk3yM",
  "key28": "3ankDuvizFfs24Prge5GWnVnLzsL4eaqDVsrGxk2NSNa9SZgvkz6h4f4hbyY89m876WJ4Q3TbTVXgt6JucpWuWAJ",
  "key29": "2EqJRDwhKxHkqahQByu6oe6FsbTLSNsZ8TMvud5E6D1JUq92GnhYtoYCHLnmG1jXzsQkNRfdfk3VkxJG9cAzCLo5",
  "key30": "3kbQzdJWRSf1Cx2ddgBss2wEoidWqu6S1qoEMBQ9qL8pP9Br46Y9RihQnMDt3hb1GJMZBdyXk9hT626GMtbgZ8uu",
  "key31": "34uLj9QPbrNaQBayN4P3iXaPeoRLDAQ7viVH7xGsSqyB47QGDurTnrk1QJSCDb9vyEuCofhHuwnJjF6vcRuh7M4X",
  "key32": "3nXUoAEyb3Ci5UWYEVT6yZ94SK7bMRSN2n7QAhpXferFcwgvwfwGEPbNVbSU1aTDETs8542K31zj9wPsVXRNtG79",
  "key33": "1TuywmZSVBS21zPQqZ7Mp14K1YnVFRZL6oLjQ4i5EQuuVzvT8pbyyieEzHgu1TiPsMHSJfrQQm2LDDMuVR7y9qt",
  "key34": "wX5LHiUjPBjJyZhWbJjJ3PpLyrHk85Wvrt7xtmRVk4cqEzNDTbpGc6CGiCypjuxMPpGZV18HkYTA9mkoDSeJaK2",
  "key35": "5JiRawKofrzb56pgpVRn4ywy16z71ai1vfgwZiHeVrVMBRHj97DwUaP3MWtBEJ2BqukhqZsrsA21XJi3mFsdvjTA",
  "key36": "3gVYY2ftJdTwpChYb3c28iSGuPDGtqMhNeRbBM3LXTvM7uW2kTVDTAKNajiyJitZksrYEVZLj88UVGdGopc73GQ8",
  "key37": "2mJLRSS3DKtCg515tLfRmgU2mKc7QqeqCCw8VnhRhitk6Jyz8sZKwALKfYYx4YDoZ4jBWFwe9ZUsmUMrktb8R655",
  "key38": "2J5Q82JenvDv84yMXHoSecGskX22vc1dgxH6Verdpvi3doSxxCMFcyGRvoLkhrthA97wB4M2KH48R5S4cPDTuo5v",
  "key39": "4fAtSdK6RyN7nvmCSqNwKQv2C7jTFUWPbqT9gnAdqjv1jRp1Cc1HFtsqa2fy5S9z7nMhmPQJswmQkwmY4YSNHcqH",
  "key40": "3N36DN3eEgmzXGPptXUEHSaDeTpWCeCn7Tq26cYWJRQGDihFQc5cxPWAVZt5GYLNWy2z9taQTFgBbAeFKdHGH9oq",
  "key41": "2rZm2wJdb32GxS1jhoG8bJzPJf6JqAjhdrYREK7E2GNG4K66JXwSCypeGf4nXF1zN47s1UhNaPzmCMWsR4ALnbFZ",
  "key42": "AzKdxMyT1NvVGyfyKvkWcCDNSLAwnCq47JVuGG4RE1LaTQcPCYowY8X5HrpuL4gjQ2soaTy3ieBJHCPDhPTk7dn",
  "key43": "22bNzeoknQpgoTJW3AF4AJiKBAzC2ZYgAehSZKJgS2buCZ37RLgfXfsNCNTLnx2rW8HKUrCBKg9bTyRNDFGiXGLc",
  "key44": "5a1xyRZxqoPTWoLbyYfh8TUhfjuz76eZuVqcMJv27QV2a3EPpC575DNyi4dgVRNochnMY35VJQc1HESco3WFjxP1",
  "key45": "qP2a8FWx4pFN7SchrxnrGF5wzG4JWPdoN6XmT8WRTem6CeEV7phBE2rmWYC2qYrmFfXwu2xTgp5LnKwC1QWbHHJ",
  "key46": "2E8SiGr5oGky52b4MJ816N56fto5Pi2ypTJ2WmeB2HYXXD8AjoqmANmqQhL3pnxuU3J4PKbuQaX7YVPUfFRpA3tY",
  "key47": "2sLvBMiKRGZCgmqSbi7BBeuRP7MsvYSJZysZeuq6a8gYzhpFMjs695jTkmUAsLpB7VCP8v8HrEQVfWpE1WX5rV4a",
  "key48": "3rE4WJigo2UeXXz58AZaiekHT7xL8EjPHeTzRR5daLboJHnKe3YfR28xKzdKY3JMvnUdL8T8Gr8FGZY6QsMNuUd6"
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
