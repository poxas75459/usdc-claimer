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
    "2g54q1qrZFGfned6XFhPppv9vkchuzHLaf5RgMi4WDovFKSLWyyKG5Nxj5U4UMXyXLGQa6VQuifYaEbtTY7b4RFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MmLcQxvFoUFfzjWE5TNBc2bLfvaH1WsL6rYE31qhPLrwibVKugvYNsGnuZE5K6s1u5Q5R6HmDkDdDMa7S3wmXZL",
  "key1": "4QYSohocbdNcRwXoBe4m95ZJPPQ5XLwVtULBCPh2qofLVsEN8DwyAeB8ZvA7DSgCirdzCRwCjVgNSiKVj1yBDz2Q",
  "key2": "21X3TqiemHBrQUj4UjPoCR56A1KeNSFVVz4zY7qGkCiZNe9msX4kSWCgsZoXrF5ZSwZDLwUtcNdRyQYeTEZskKmL",
  "key3": "5uHVSvMnE6s1eyA1tgjhijDJFQn7iNZ68NYTh83aUmqv8rMRKnyjXH5PEJDR58vU1z3ftz8VDqBLTJjhsFRjeFzw",
  "key4": "5hoYZkMGuamrvijVPDRn9RpexFmFBM73Dn5WwacQMRDJzLVJstqxg1MPjEtqsSwTPRCPMXSai9kMVjBBsxR94kVn",
  "key5": "5puigojbsWUJHeSkHga9whx6UMW9nHsAa9aakfx5Cpt7Sxt9c1ydJYLgScshfdLDUBvorSHd2jRW2ePuyhtc5J3Z",
  "key6": "3xdFiS8VKo436nmx9Y29PHPmqAsrN6BGhBUSxsL5jJqGHBiK25SNgCsRkpwjv35pVxEtQJ7yfvDgdDYhPWGx7kF",
  "key7": "5DoQMoHJ5yAu5dfNnnNmSzXwkE2y8YJi5bUmLf8n3yYvXhi2u6gqJ4mw5ZpHSVYPNbgTzDGdr57rFcEH9TCA9WJd",
  "key8": "3AkJQocMMThvDq2nPTj9AyzEJWnkPwqJAujjmLkayb4tLc7xoL1ouUWG54xwHaETNjTTMddKxpvGCXWwXiVsJqWi",
  "key9": "4mEtjWTWuMfQMNU4rBxaCqHuRAcKxyCHisddiEv6Qy5dQ63PQPU2dszjvRJe66Sgpj14itfbYeABQJ6MJC1VvhEw",
  "key10": "DaCKvvLsnoBqdsivFbJap9VMJhgSAUhQN14VdCHXpBmMVLfm5XAdEjMUenxdB7aSvux7K7AQhd3GC1ps6Bw4LXf",
  "key11": "2runmy8AMroc6oivr9yFJCJUjZHyPAYKh7KUmNw8LJk8f88oiBc5zckXYcRUs9jShNMcPJ1u1BanEbehg6tACjRc",
  "key12": "3WVkqSW5TnrpWJ7FQGja7XwToV4jLq8TBCCzFShcqyi2CKFGcCaNpZYsvAcjo6XthRPkfX6bwzyR7jjW3y2TTodX",
  "key13": "2gi8Xn1toKhrRystBXqkJXoUbjjMg9r6CU3VkMRhurDd435Cj52Tz1BvG23JkEovD8ndSEHvBL3NJF2qegLhTMjr",
  "key14": "5KnTNBes9NTdZNVJT6Y6G7VzcMyn1kAE6jCAqN9fSQgroGPUExFXPy2uFYqj3KXHWLiyngURY3eJf4dcPN7waYfU",
  "key15": "5bWvo6zntmbUeFnngk43CtGKKAqAQUSbkdm6pvqqQ54yuKyZUtw8ZejYLjs3gjALoj8xpEShFXXtmMPVB8Ez71ar",
  "key16": "4iojT9aJWsWNBkVCRNYygaXw2e6hYTEAaYPxNDWAKBjPaKioan7qbd6XPr9ejFqVPJzhP3Z82KF56yC2y3m9JmK4",
  "key17": "4tfNhVCTuLkijpZj4yEvyRBBJ8kfmSRxsnGXgQaXDyagLKJPgeadAQ9wEz5FMQLQStNAbUEtaujvpn9XVen79UER",
  "key18": "25K5cC78nR3EtoMzKvfj6UhGjghjh9X1nSL5azskzmBUirAfw7MDMWXFvmEjw7aSWF82pNyPv8UstdzWjhvhrELS",
  "key19": "35EraZHh36rB22oxGx1xDZAG65AAYXjc7N5Y2wQZ1hM9dxtBq9r1SCe6bLpueRBgBLueDK59XqKST1zetJgpMPsF",
  "key20": "4jgaUMWXMsVdMF23UxrospXNPHDP89Uf4BDXYthcQX5qh6YXRUGLcp8Uig954Rb8ev9krSJ3zF2r1icqhRUCCzCv",
  "key21": "583hH3Ym2YuNivXniXZmfrr3tpNXyrnzn3N7ZJpB87M5yAwXRNmzgz1hXr8v8Bx8cbVHDqZ4uKxXDGqRg35zt6ib",
  "key22": "3XEnnDt59DnMrnE8tomXBLWTamTQJHCU2ctmGmpeWr1rdVGEwQCKQfLsALocAvSHAv3fZzeGrLqR8H4Z3EsrymDJ",
  "key23": "wGysiZS8Fcet34cbUh8XTQBTyKXHdZGm2tJoqJpBn8XzzUngEuvxDmNE6rR3cJJi8JoTuMZJK6ggrbUggQ49UMS",
  "key24": "5dsLX3zqz19NCH7jcKsf6wYGKXXADz3wNbk7CrrgEkW4voREnBG57JN3BBfQGXkR13j5tcYKXihsfKsWGsoVwMXN",
  "key25": "4MxKHUWHp3NdkoJzCqqUTEDUQKQ5GNGNiSbBDDdbWNpEF89N1D6LxUy6deK51VozSQ14p5Y7Ze5ioTAH32nZ3gvW",
  "key26": "5XWtrRNZrwnSqSN5UofbsEk1VCVZgeG1yANWo9gSowb2MS4R5Xme6TBcj55WNRnaDfiATbqDYA8b2BjwLtKWB57H",
  "key27": "4f8TXFx4qh8oyZRqpQUT2fBe3DyXvpw9yvVAa3eaXyCoExiyVFEgs5BEHwyWZ4Q951GBqFPhBrpR4TTxT9XyKpwT",
  "key28": "CNew3Jez7Gt8U2VgbU28fEHUGKUFo18hQDCrmmDc9M8gMaCP2Ybs4jVidbsdgr7qQEmADXiyisbxHQxbZEekTNx",
  "key29": "KfNkPtoN3FNgmvkRh33vmYocUx7KXDYJw2mDStxHractfnDxnPo2piikWMX7nmGNzMeXm6keXg2gVDbtR1aKcJZ",
  "key30": "2U5HJ6ieQXZnQdWweKkjqVRSmxPo3aJ4QSr1xA9ryYCbdU1fP4jc4MvB8VfsGYdPxktfN7wLduPCbep4MTFLAGSm",
  "key31": "422ATyt7Q1wPE6vn3hmEK4YocxdQYLV7dpYK3vnqmZmKYCzpKQVDqi1SV6tCF6UjSYixxKs8dKphUTzTtTfJ7z14",
  "key32": "3HXNepHYRhURru1r8pjPxu6r62jjhVdwHhSPuvaY9X7f6d8poeoVnsR4ZdnCAC45JFRijEZmxJRXmQA9AsvrWN9S",
  "key33": "5Tx8USJLENxrFRzTQSHdGWxUPYDTz5s65NZ8rtpZj4aZWZpGcztinrL6Y67kUyjHxMeDso5RDEE5yaMVxwmE5a6p",
  "key34": "3DTxqAUst94Nf3nph5WYkSs5YMfECEmGq7LMVbhsXLW7uV3jJ5i6R8wq25pktCZ9SpwTxkVdHJx7meWtpQU5Cp1t",
  "key35": "4EYpoxWU8a8d9iGYCoyp2G1U2fLtPPH9S8nTgjPovJ1zg9WSwecrfwWB4DtNr2PkwfKpHXhUZHq11py7z6giF3Gy",
  "key36": "5uoE1x6NnKSJUoY1JPpH9x887Jox2DJMyZxrUJ3mYwT1DoD3TczNKBCHSLMkqaq395HVLB7PkeW71L1KTwgaNpCy",
  "key37": "2WWQkMFP7YdmumUtAZTcMBaAjiaFaVPqR4EnXSjeTUQqdrvBZ158me4JG9oTPCa4QbN944ciqsXEMrigZ2f4hFbe",
  "key38": "5S1AfgUKfgssqfaVq9ws6WjRex9DGDGaPb5GCq4b8u2mFRrEiSWhzLc15QQuvG613FNQ6y5zWxdSNEng9zS25VyJ",
  "key39": "3FTcfjwgeT89jZzbzyRkhPGanTrWt8R7T8sNaNJMuppMZGFsY3PiQth3HMroR5onPvYxEBaQzuE6VZns1sDCXU41",
  "key40": "2hNypvHc7iQpFhao5DtUyCaWic1xx6dLpwZLn2FFZsS6eR55iUcJ32TFJgJtZdGSSJj34jKfQybwVBXMZ1dyPG84",
  "key41": "4CNUXmYpprtz5ZJp8mn9iy2Zc9iLLfWxEKqZUnj2cU7Ai35CEYHS5UdRjhsyehbtiocKsZxuUZmtPavdPec1ZGuP",
  "key42": "65B43QjmEAjgKAN34H3HS29fgNHBnK1q6S7ZMYgQiCUBzuNrzu6SbjrZxXPKDtuy8BfSNa5tdzCPRt4n2XHk7PdS",
  "key43": "3qxfuBQsdSW1e2CbKgoCSbMpLzPmebJq9BvSuZmAMgzv86a4uUPf44jrxRXenF8FjfbUNCEi7E4oazdAy1WygEEN",
  "key44": "62yaYk5GttVQt68R1VzJk4c6AiHX3juZZiujLjhPy5tR7MZXo5aJ6MSFT6Tdjv9ikr1MgeLT9REUiHgjmJYf7VBC",
  "key45": "NYPm22WbNP2GzcsWA899t3KMsbdLjEVpdXvFJyQmodFEJ11kq2hXtyTUWuBJEgtfkqKLkJNtrkU3xJGuAU4bzpE"
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
