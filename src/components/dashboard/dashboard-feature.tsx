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
    "3uqxUAVv7yRkwvp4Bw2wyrfbhjjJ9QnmFDWwU841kiMFxP5hBR34EmbsuBqiw1GL5WPRE1cvi5SC3ZZCuJEhWpMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hs3U9W7wj4Nq2NUVyF7nua1jsXa36Z3QTZeDd3m3qshsPeBkxL6cteqSm2zXxmMLwEzqwX7GvcGpTMVvuWmtcnh",
  "key1": "niU9BRRckE1ywZoBzFaLTLJgDhfuzhAdr2ugUECYtC3pzjqpNfRgk8fPAF4pX1cJjaeLbzVmvTcVDkvH1j5XnNq",
  "key2": "3XYg1V4z9u1mLzi2i1UqdB7uaLkWyeSP9ypzf7zSs16WeXFvidTTEBxqUcRn5gBVQ52jKEjm6ddRr6XprALL59hz",
  "key3": "8sGZNS1Dnk8Jw5QAZWPNG7ueuvyE3zVyKb1wTkDBKt9Wiubq6acGENskNbUrNcdmsHEMi6NR8g7v9yRM3sQASQN",
  "key4": "oRoTnSjy8UoqXef3tzfGxtn8tq5EPXVPgxT9U2aJNTDAVRFHLjMeNNHZZotA23bz9wBHSKGNkffGqqHtibBPrc1",
  "key5": "5SPqeehNXCKcLrV1eakidKiqHZjaNdwfjGxL9KjzoY1hrQzV3Q2w8aDhASCWFX5EzjfyKJgzfcsdpYAPL6DP5BWQ",
  "key6": "3Z36qg1LRG8P1BG9c6BfGr6TJcMheBZjGLnXzvXQHBX7R2uTRHtUK5ZvjvgArKzsbF3KpBQd2gMnZwwBGKYimPbD",
  "key7": "4JHF9MteC1J4LnTL9pi8GRwJue52iRuhwPcCxHpRmxxgP6XZ3LAHBZPmGPo3RDpVwiswLgA8GtRyJYhmSDTpre7e",
  "key8": "4augy7g1e3Y8wMKSK5Px1VX55aTa7RyQWd8dPFhW61tYMPZEeWwU4caVxJcdFmPjMQ1werCAFFC8RQ2nMH15MEHG",
  "key9": "4yqPFf2SRq3TNLuv8NpdMoBu3SNdrJAMXchJQnzdFSDBNpRL4GV9yRVmUUhARF1MW6JgiWrebLRpfh6izE9dGVF8",
  "key10": "2g6EeywsHqy2a2d1dGA3u83gvTPYBkHpWhQEccAdXhGz9yTsdiWEzxtYnxHJuVJc1iJhd1WVgbKSMBBivrhaMCzj",
  "key11": "46WNdnzcubGy26GYC5seDnXrr4uiwWmDtNyr3bHDBJhDsGFtTUPwui4KoxUZNCkn22x9hCsj9nYmf12sMVpqiM9o",
  "key12": "eEo1SNrcfvTmrjqbsnaicB1uCbe44JkG8o6Zk6sMM7KuSxnbaVs2xFa1b1PoCt8jDdew6TzxHHuFRGLffjBi1Ek",
  "key13": "4Vw6az85qFJupCxPUhdXE68g6ZA6kzmaLsV9sTVzVXAF4nARgYiC27XTVeFZgdSqcL36UCFCdg1peimZb1HLRvp",
  "key14": "5e59PaqqLDonswJPepLYMPwWmwujh1Vvz8GAX3g4tJV8AgZY3kjZv8btT6mEf1TzHVaKjDSHR7gmbFWcUgidqMCY",
  "key15": "3yk5xcxSETJKZaT9QYWZup2RffMtSZciqxKTpcijjhSK1iD95vY8BDRm41goWBsgVdR9cQW9F6JdQEvtsant7WPf",
  "key16": "4m1Hhu7SpHRo1NkLsVMQWHQiwDeaDBjPcUUxWTfa2Lidg7vpcufw4BxzY3iqWGJ3ueqkM2p6szvgnBE6efFSMtST",
  "key17": "38KCAmbyF58u7W7xHBYJeTLNVJtKSvHrEnXkKTZa1VBYLByg1v32ggKdkeHSBoA7Yi8wuMxzSSVkZSarsMX61jKV",
  "key18": "2toscpeYJcXY3wMkkcMsc8GTeTjw55nmMK9ExqizbTrebcMhmVBSTDNk26J2a2MNjo5zkW3mytr4jX8zmwUQAPYd",
  "key19": "4AoaKKc8Nmv22fKpi6FCvCERmRNWrpy8Mjf19pNTUj4sfEL3EbovfrRjxcdWVY15TvwXokrWPoK3A2wvE2xdwi2Y",
  "key20": "2oQX3MM83yayhM3w1yt3gWkZDoY5z3nYnSTA29J71foHSvwtRSo3z5pJsZEq4C2Qo7r6HRaZ9CP98bbW8SnosmFk",
  "key21": "4LjYdpEYkDhCNy6ukAAjdfq9LuKnYVsdKH3a2jcUNQSzPr65asTm2jvEfKzwZKwr51eaVjhbgVnrqxMMJRNqCh5K",
  "key22": "5G6fsPRdr4PrCcfz1GFeXCGrKB6ouzAVEi6y585YCnvgEBcoFPyRqsHLr2dRixzaZmQL5Z5GjvqpLCrypEBdw4xi",
  "key23": "5dPmZKcorpcgeNTcUzxmbH8kBAhghMneYjbZCfzzs4forNvRVc88kfEQUT1iBuxgQaRLPxBq4CXXKTFoHpsktcc7",
  "key24": "5v26bS4xhHmDosw5rCphCBjJvUuAbxdpeTTYwX4STC9rYvu5CKtFoL9S3vaJrHw9ZQrbTFpz3YGc4dJSwEm7Lqjx",
  "key25": "3dpS9kv9a6X3jMV9bHbuFxYo7HjvD3c3RJdVkG2tLqNdZ4zkvHsBVoVFjudJB6xPDaywT1bUmt6eahLavvXCBnwT",
  "key26": "3CgnV8veJnrj8Rm8Weqyc1xPY1EvCv5pPMSZgTwPWrfs6iwyJh7EUwR5FsY1WDTjvY2syGxdvBceeSY29kyT2r4U",
  "key27": "411P6mcBN12nMXQpp7LPxsqnWKHgmZCUBYVwTXuy6sNNeC3ejN2wX69grvk6nPdu8FW1W68LrkaRUvidwQATeqBo",
  "key28": "47gcmLwrJSe5BZEwP8pLfP5swy41fFa43X8ME2bLG4UoRtoKJXUzpKRyq5Da5uPBnfRfHYteRpUgY3B3PUXoNjtn",
  "key29": "5Nk3nmPDVgsEHvsSe4NPRJfVoaQzi9qqP4jLMtucCL5CZUsjwrVphfcGdd4N8X2Hm9BDEKgfwnuATvmjiTjgYzq",
  "key30": "63qWxuaPMr6mv2ZSzMNEv2Gn8aENhcJinX9hQGzKh7wLnyovUg4eFyH3CsjQcxAGZinPFfyWRbF7PBm5kuo2j1D2",
  "key31": "2gnZgEXJ4xco68NkeCWYfLzmq3hocdn7Qto7ZUQAYswENk2QbhKDrM2zGxj5naXCS6AhSm1FEXimRGaaS39UXrDN",
  "key32": "2JEnz6Bp5dsPKipDjfzKnTy7hjFyo9U94wKGiPt7WvK6atZ6QsAp7gQDSMizJkxBRu2Kog2mfb7LizTQoYjkgfv2",
  "key33": "5d4pMPz5WabC3cFY4bM5siFEqkgbw6Shczf9BtKFK6dXPFDtxKAsybnHDjr9wqAZptyFufdYQZkMk2UupWZzQtSo",
  "key34": "4UGek6MW5H3oVt6caeVLAWMgbtPArevsnF64FS2UcnN3yomAhbfMfqwf2E7XmxHFa8cDY77PycMKkDL6x3PFn2Pu",
  "key35": "57gGaePm2Lip8LsUXLvW3Dpce8oW5Egi4xvdC1hJ2JxTgx4euiLxoxd3rJqiQgWk991vjPsT27Djv4YDQW6JRGap",
  "key36": "5TexCdfrFd5tQ1uhAB5cuqvkHymouJq2YFmbDAkvzKJHcJswvBE7ZYKEKqbMJJtyqntQLsbtGmhGV9AWSMBBZszF",
  "key37": "41aszBpac3aYoAFdyhfkktEi7ohq2x4KA4nhGVjVt9zUrSsoSDySGKSusRixdpR2Nxd9awZXww1DXqKzrUyeyquc",
  "key38": "5X7T2HYJ3uwLtG2d4SeqTPVkL8fWjzmMuGNvZu3vUoghBSBXE7F3NXyV3hEuiuC5iyKfjkngPiNmnWGXbniNyXUw",
  "key39": "4r7k7eYBeT9dqWBdknndtfmVc9PHS7srVJJke59xcFuXHPZ3Ki3TQtdQXEyW9JE7R8TJVg48rmDAxCirhNiuWWPy",
  "key40": "4Gbsnbu3zu8b4QUXbH7U7jVdJw9cc5H7LuwTtDZPJ7FYHys9it9Q9cWzD3hqxR3aHFUQ2oZvRHSYdc8QvW7K3dtf",
  "key41": "55n8pLTNNKmFPDYknu4VzdrBFZ1WnWdyGcdpCySDqB2sMidWf9SS7Q66VkNCEMdD2EfRPtSNp6hF3e3SSCfbPqkd",
  "key42": "KFnRRE87PoiY7eXUyRjUJHT7cvfkM3BDJrJxfJDMGyqRSmHYMg17ajNRppfsNLFxnsNZivW6PFfbgypjosdiXbw",
  "key43": "53zpDzqawtu5Gq2ft9T5A7mTC9jgLk6GSv4WFJuA5Kf7SQSD3DDWnXesVJBvo911dHQjGcsc1E6cJR6hEf6CQnSd",
  "key44": "4GEKHondYHCPJWCBtJGhYQrVnmgmPA91rcUSWBnfDS4i7xKGzCNFgKz4ymmdSmuxD2osYUqysb26B7LjMModpR8n",
  "key45": "4v7aPKH6ZqzjeUP8xm9hQMv5xaiHXQq2NUayGWv8TRbK3CAjaQyyiwiM2BZjayj4YDU4MTqDWToLWWHYExBY2PZe",
  "key46": "58VerSYCsRvr1ccF1pQTteDcngAVjZsixL7AzzQ8LgrUgejWzUzcafxNF3SMZgqf5yiJDRLSftxZXwCx5VA1sEr1"
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
