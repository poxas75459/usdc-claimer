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
    "2dBc1QkpcrRgJREPfGEN9chkP1mZyLUpfGKk5vy6QtLkYPfMJL2HtFfUy5dGASFgTS8DkJGRmjByAVhfURNchKL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVqENfW3pkaT5TA7RR1xGaKAYZZ4XMMgxFft1s8LaNCWBW56Ga7kZGm9ZvRufE9UfT8wi2jaAVRnESJDd9XQTcv",
  "key1": "5KLAEjHKuVNYsBJrUY5muXGWHDvrbypjMVTPJpRuV9m6qus8j4uRGNkyfLrjXNSKE8Gr9FiUyREVdQ18hMz7o4fX",
  "key2": "2GtxKARH6yU1tDY7nTwZjmwMd8ueRt1QoYaN25AzPErv4x78SjHLkqUeuaASzXSCVxqzjEFP4HDK8bTMdM9kL8A5",
  "key3": "2r3ENrjXqhAEqkSy4imqD8LvAkGaN2XXTGAdMrDN8EvN6wvozEarAUCtcPyC9HJa41UXAH2i7g5W5C63yqyT45ax",
  "key4": "5t8J42am21jeR1wAyhtgQ13ja19WSmJnqKvYRJWg9KecJxQVFUqtKT2LvvBM5LwBkUytQHFjULeDuPwyWb4WFZQR",
  "key5": "4BxfsZVqPPgA5fwEYHWqWFbbLaTrNqsD7GdchzvvBJKWiV8CVRtPbMBJT3ENqSbp3FtFMKky8q9Ag5LXgHc8qzKg",
  "key6": "53AiWk2BMspqXZx4iy9sVUo2SzkZSEp5i2x6uPqpEutVE1eS6t9EvqsTrRkN7x6dnY3qVowrvap2kw8t2TU116r1",
  "key7": "N4bAY9SwKAAVk1hvFqB6FLXAhRxmpfz7mUebuoy8mp4YgGrPsdDfEgN9ty3BKyzBVKaHs1Verizrr4nffsZaKyt",
  "key8": "39XiqY21dVTHKZYJa5C1HxrqcRj2pPND6jZ669oE4qv6pSA1e55ML262FySzWc546xvPkAwL9KCVu6zQpzbkNAin",
  "key9": "4ahCzgVhCBEZ5WQRsyeZSwCZxddkv4ETgjEaHXPUB1ghuZBzAvqzAXoLrgX3HwgwRu53sx3DAGFRDqAytXpdmkpU",
  "key10": "T8ywmhgqnJobB9X1FTPVtBgCrced1FT5a7wWVLSdnyWr4MLpUogSHWsAdqb1LXd2Wxny9mEwTTtkCwRsP6q5nbN",
  "key11": "2hELn8yxPhfBRsr4oJY2wNUZn5rwaq5XjPAS2NCXECB7JU7aogLqmF42qU4YGoXrda6MkAvPxAdaFG5dxW4wJftb",
  "key12": "3fiEdMRmY1DcYRoxPcdkdNUJeHEETcYtQyaemg3Z5zPMsu9D1P5KtbroCvcuk3vZgEtDBhVtgGsqiFyyLh5fd73N",
  "key13": "4eok34D3QRy4na2Qtp7zMxJM85R7gXmJ93mW3TXCR23y1xnm7C8xMrojRgdbnEXTMbpEPZLh4eceRZvpnZLgPRg8",
  "key14": "5S2hWkcubbPn7bUhB9xNa1AcQMUn7ygnqB9fMxfenygTQfXNzLB9xZqr8VUMSe5Mn4HrY1pDjK5HkvXeMM3QBecN",
  "key15": "4RnRDbSs7BUmcseNZPMc5ZGQWch21nXuaBtLZpHPgoRUd4KJ8LFShYvWkHC9F9Q281ZDsdC1WWzMTbbnTq1ML2bz",
  "key16": "4LKVsfBYks7mFjXRd5W37ygWBnhMNDz42TEdZwq68MwJnR7NbwrWC8ciZZah5SeiAkLgiJoDY2tEuZfGGQuFGUSH",
  "key17": "vWwJ6LK3WbqvTgJgr5Ei36W5na2u2y7Q1yTsxACNn3ehHAZ52gEyqAArhUcK9bHQz6yhwceDNod9hndRkpySjUu",
  "key18": "2Ka6hDPMnvqeaAzVchszykQ1eQfu8fBD1JeT7Ykg2v28mnddW7Esgt3oyA2RAwtc4B2QFHZmiCHi1qMNWw9vZ1nw",
  "key19": "23V5XfUhASuURzVa9eKHf3H2revfcQNUXvtKAR2pMEkEWDahb5Qq9gGuc9tfLPcjtUkA3p6X9Hg3kzudCjvvq5Tw",
  "key20": "3uEsZ6cuT7jxKgZHYeheJL3qUR1NY8svVGXdGWdFTjar64Prwd65hxHC8iunH8piiY4KmycsMQwgNAgWJE8JFJJ3",
  "key21": "2GFMAYTQ7x6d3feo5yeLss4YzPLvNi4Qc4i7rLHGxZF5YvJnxP6Eqbb17ofcrqheaEtCSxWiHji3c8EgbPRwx29t",
  "key22": "25TETTDqZiLRBQoWGHVY4vynHsdzh2d4sWBKnbPThJpJtUvmyYR5jd956ZhX4CxHwbwgAXN2UtR6wTMg5fQxGjSD",
  "key23": "56gZ2aB5zCtdJtgCym28i6AfKYjZo4XVsvhf4iDFxsSgdnsmEeoFgwSv6g55nKdEQfotpvcPa4W7YAo8hFvPWsz",
  "key24": "33viU3bbtpxL7rB7XYbGVSGzC2CyzADejCRVTQchdVBmiZb3fUBkhTUKwrQsrf3RXJFPxEKZwbTxqPkt1an7ocFn",
  "key25": "5xwy8NkCdPF8BtCe4i9VRLUR6kLmGdsnGJe7SwwsWNnXjKihdfUbBZ6vPspaw2cuf53csRrQjBxeyVTF8dJHBWdM",
  "key26": "5mJV7bPndgfxBhFjVoxJxT3SyiidwpYDVGSWRmGS4sH9QBxs3yH5QWL4xZ1t63hcdSTxmrkatwzLsNc8yj8Mj4gk",
  "key27": "32M4Jj72G3hUUu5A39GrXxPPAejpjhRpb2tcCQFpCkNo1aZQLRvqwbmvLgAcuZZv5BUSYj9FAXsJGinFpUQnkCze",
  "key28": "yN83kYEmPMkFZum2iyFFyMZqpMXXATTmjZuDTT7Bs1gGDMuvAwM35ZjkWryqEAwDRzvkUVrzMGzQreCmNVQM5Kn",
  "key29": "5WhXdJ3FdchhQfEnBvEiRshav8TyJ6PjM2VrAmtJSPfmMCGMfTAdeTPu6MXLEWxTtpK2Tg4JdormA7EVpU34Si6W",
  "key30": "3BTHrRgJh45HdnaifZnqxn35oQFcJUaH26wCc4pjLF7Lr5ArFmc51FCtNmkxGRNmS8excqvWSEHCf1gkDAqfpkuS",
  "key31": "86VkZUgsdjBfvmHdAYUEaHXGT3qwUpaUMgzzWLTwjZrZcHaYoVW9B1BvZDZECk2q3XprjjVpP4zgxfLZ4rDTrxi",
  "key32": "3SBXKv22iGub8tmi3G5HMKhen75Jb4Wy7ENHB4hGHZRfFTyEdJu5fxo9xRTLQ5HKfvu8RWMFsQnEtmuk5gZcxTG7",
  "key33": "38weLohQ9dpTC1Ns5dWwjRcWeL5vaDyw8uzg4PBZme9JvX92PzjDyDRgzPAPPnGLGFAYD4rCMNKHtjpRv8czvBh8",
  "key34": "5EqJc1MCQjU4Zsm41C4qcCpgw6vJFj7w2XN8RwDK9ZJsycy2Uc8cFQHNoJkygNPUc2189p5pgucEbvJxThKvLUuC",
  "key35": "55PFsb5uPv1gg16aMRcAHj5goVW4sQZ1SeojGWNyHzNn1VuaVSyTL6pPDyfQSLiMzQNvWW7tLJGpiRyVmEKCvVJq",
  "key36": "32E6CmqcotSrd3i4uQqRDSm5q49zRt3dURr8YCsbcVn32g3KvsAB6y1UqjMYFUjDJSsRHG5bbzyUV2ii4MkHUVdT",
  "key37": "5D3UFmN2YHxGDjGxvTZkNZixrCFSacxgXE7fD3RNwwgWxKTjHTJUpWnzL1CQksnDZXHcUwiq3C6b9uUoYbukLuTp",
  "key38": "5VLKn22cdJoqrpA5dALy8j6FQD2rSRHkcmBWxxhyWhMWpdqpQd7ECgBpx49iKuaDNbUuUKp9nb2T3AApNQq8HL7q",
  "key39": "4efutcPFN3spoQmj1JXDPaVf3kSAxSf7wStp9PXkyvsTYWeXhrha8YJiuRrHffvZgak9fEE5oer4AwuMjqNPe6Ab",
  "key40": "2Namp1j1sjg2yvi5eGV7xUy5MskoJUpy1AhWP9XmDHMRuVJQcA28KkQuo2V1dkasQKUoL4H3TfARsszVmJ2fvxL1",
  "key41": "2TfequVWKK7PR9JibEu1XuxiJ7XfFHk7FFdWMA3gQgxD5z7NxsUdWRsPBwmC7y6Ydq6Aq1CpXDN8kc2WfcHrc5RE",
  "key42": "2T3TeHRHbQaPa9vkrtZgVzVM2W7BsoYqBfeg81Nz9Rhv8nSxzTQtLssE2qVm5dHfPpoe4G5nDjHMG46Vkf9rN71D",
  "key43": "5s7gT145TwubJFWDEJRLdqRhmmLG7pk3QVAZ3cXgXQCKLSXVNKduPMPfNz1ku8iMibVkFDpBJLh2jbbPthmsvJ5q",
  "key44": "2oTfSFxhTJsie4CxWHJkv76ohZDQBcDnYShUVxcWtJcvFAFYVa68vXhNCvgPSnELSCrDXHkwA3LcmTDSqzhLsSA1",
  "key45": "4J9LySJMfUhzgMSANEhLiFC4winBBZiqM4fn1fuasBfM8w885qJ3SjiaWjeHgDb7e5dvXLkaKY9yuyimwpTYsZo8",
  "key46": "5qoerio6XybqpNDWEyCyV2cHCEcoj89quVq62v4B88w4cHGuztm1E27dfs4x2KAiLFDcKjAfcCrvXfLczio9YF8p",
  "key47": "3E6f3RkD8Uedixp8wMoimzRENcvLaxerM4zxxh7vNwJCvkzj877qNUZ99RNqSPtumtQssMm4pC3A4F5a7X68AhTs"
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
