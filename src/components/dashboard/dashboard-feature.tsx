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
    "2xZC7vCyM2abBj2DWRi35jCUsweuTHiJe1bbpzR5hfKeU5kRmtoszGf7n7E7XF5JsXu32SfQfLX3BL79FtD7oLNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67P4JN75ar6M6shjW74EJgk524fhvzMQcepGRyxWYZ2NjwLwxyoCQUoGt984uuMqkfD2LRDraZfwRPc7zPvur13i",
  "key1": "FpgxSPCpPeNRTUr1AeZjqqVWyj73JsNdsQ2u2yKZzvJD9CJcMvWCs7i2ouS9d9j7ntyuvqNsd1qvJeEiR5WXkVa",
  "key2": "3d1rBLB5BhuH2hgzUgT6jZTrEQxxWt5a2X3CdZpi63GzezPbxhj37zY6XqEc8cop6qJyVkQwD648ecoevXre6aVB",
  "key3": "vSw6HAvBZK534ReJoskTsHqi7EZQPbZ7yuwLzDWT2EteQx9s4wYaWzgCm7peQ6vAWF7Hr4XYkoqcgS2X9bF7Ny5",
  "key4": "2tDew8XnTseqRbrjV6pfq2MgUWoJrU36cXyfWMWvokJGPEh1rMU7yBDk5safUj2FCXTSjb3REYvRSQLwoHahZA7U",
  "key5": "3nDebt6Hg2qheXnyMFS3k7XYxqkW57aNfFcqYiduWNmXhVNWnZuLeLPfJUmJHTTctoEwnmP2CCJHBuwjTAYcVSga",
  "key6": "AvZGDwaLER2Uhfd8EnnVfYPWcEZpVqSPzHuQSv7hx3wbWtUoKwWEJyS7yV5j3BmC45sscRAEkEycuo4F3qe9ZuB",
  "key7": "t3G1odM6AaQRVc8U7j8YyoKReKmyfoJruHxtHwmE6RXvLY9f5Esk2iKy5h87wLfBqbkQmxKj3BB3MC9egKvw9rQ",
  "key8": "25sa7bT7HLMXefxx54zo97WPbpxF2BmKPYbdhfQWX3JTcfDPjF4Wq15LHiDWrumvAAeZYaWULp5o6WSJUceqJFoL",
  "key9": "5Ke8fyMHMjyg4ztUUfRPcwkCze2M4J6TWmknT1hqe2yQH8YBXv4YvnhhhxjLrubuoT47HCiJmBnTTPuPGLCTaXjJ",
  "key10": "5BKiM2y2HDPCgPvsUbAqWxVWNMaVU5eSfnPWPowPPmBv8e6zv86jSHNfsgMMh2d6Kwpf3dGromhA3y1THBVqPQj3",
  "key11": "3tsXZ4LexDDmXJkHvbVocVzU5T3W4QsGC6uaMqmo57XGjWdgNAAqUNi4MGvQyN8TDT99b5KJRP8kZuxCrXV2zLyq",
  "key12": "54dLRKVP8ywzj8Lm9eGCepGpvHzjkhixNv5jbdiYVa3fYMNLuB6iNV6fCoaXzfzWHsQkYYVAA6brankB6L7TGohM",
  "key13": "5qSEGHNnzz33hNbMLN6bsdNLCERMP8m2KmGi7XjPGLdwunpWNZphtHqrt4wdm8skvZUWGr4GqCLcdg5KoUXc83vu",
  "key14": "4q4AcpCjksPNfuk5ghdZMFphTnnChJmisKLr5gx3jrPZQazRrtoD1mHW4KDdvQ58gMnydXDawYUF43vxyEcLvEeD",
  "key15": "3CvZ91sBUQDzk1qYxbB3na8vVZUJv91ALWQA6uswuPRCMZhfL4TR6y46YwzUCuoYig4RcqSJ2BagzWjPyprvR2W5",
  "key16": "y9o8sSoHEDJ3hZ8Fn8QCAQLqGWWWkX8Nc3VKfxP6ACy8rAxVT8AuYYKPNQc7gsybtounewcm5aKazNW9PUAxraz",
  "key17": "XWxP61WP6DKYCk9EypGihqNrfZwaatHs2pQX9gDh4wNnUJwnAqZHjkUaL3ay2J2uyiDRsPpqboZqipmpnoV65HA",
  "key18": "2k4FH8aDJUhSEo9ejNiXgSEsuoGzM4NPXoNkwepjdiw8NYWta6A72YjRnepFBUYqHdZaT3YwrNmaYi3wUp6qLT1T",
  "key19": "537cSAAAvAZkogDbUzCZFXk1sgTpWF6crJrjvwdEdfxAeW5jedEkBYKJ1Y93T65CRPUJhLJhAQMr3KyK5PCTTHGd",
  "key20": "24nBmK6cNSYDHsvy9Wo4tTjXbVn8SPAcET55b8zY4pXhuHVSTMz1sMV7UreknNQWtoWRVP2D62mPt4RaTwXpCSof",
  "key21": "23bM4EqXmSTTxH6mS8rmH65imdk6kGiAM1xYgV7wngxaJFaw6MkBqCYLJktdGvecFWkgNJFQygNcDNiQpi5KBjkK",
  "key22": "3iphEne11QAxHae2ezh247pthvyT5VdPeiBq6jMJ7zTePmDKK9We2suvMQz5aweDAAWzmBEqQT2ug7fxecjzMPPS",
  "key23": "yfCkvxKvG8HkXDiqVhsSEhvLwgTgMcC9Zk4KwC7jLJ82anitLhaXEmXHKJYNt81Df2cvLUJ3cy5pV6YC4ELYR2D",
  "key24": "5TozzVvcbC21ahdxKFqQYhkG7FPwDykWeyzwNWfBK4jLYf9Au1cX9j4dryhtDnT41WFT48YZaDSSY7AJBLiDBoxq",
  "key25": "3g9ZUixSJMJtHHyYeiSkpmh2WXakurWCCfV1G9rs814NAkPgqVkP1nVcEqV1hhLks3kh9QkrxbhsZrZXemspEMzj",
  "key26": "3QcBrBswwfLGJchKRvWTRe3A5QCvonuor5oqo12FZCVrq8TVGF2VpGGh6ymU7NUFb2bT2zcYEbTE5zFjmJvmWd8Z",
  "key27": "5He4fbqzFCaQvmm1aAicNKgcTKX6bD7dkQA3eaZJHeRa7AUaGCvThNr13w8sy819Rd63aUps33iWHNqTnaXxPQCe",
  "key28": "465vEeNKgePNa9SuQK2DW4QabLeNdFrEqMrfhPJsdRB9t64kgrCzYFpGMorzC5HTkRWm59GwKxQSC8FtQGY5TBUD",
  "key29": "2zgw311EzN9eXxHTCimP5uv8WcVefFHAuydpBbPCNo1qtVoB3twgAhLf33XGJfWjwJyDu37zH8sp3F3NETJnYgRJ",
  "key30": "4yxxXz2RoxXjTcFapsqhsDbHp8zLAjny3stjLnETrEs8iVkvRnvRqyVBYnQwcyZ64w3GFZZYvV7FCheveGLcMNcg",
  "key31": "6RWSke8dcJrBKYWNVw6sp5VGvijXDo9F9mfPV4xcxpcTUYfJMVLRhMg4KULjggm9AYuWDS7Q6iSLZNo73Jv7Jx7",
  "key32": "4zHwHVzkAt6NSPRqSP3msajU3uKkjZmK5HjmKFWEKzUKnN8Vc3mW8uf6qUtR4zGjLXHu7KhEPaZzMpcyViQr4EJa",
  "key33": "4fBZreJDucc7GQCZZgmaFtoQiFQdUEZvY48ZBuxAPbobt4jSQXxEUKSk6GSAEP8xfzXS9vHn3sCjjL8NkaB1DZAk",
  "key34": "grWMWCi2p6Gn6F2f2q9aYH25JNeJ4bEDSf36WNkK5Z9CKpHrDbSFjY6EwxAxTrP5H7164CQYVy1A2bySSXftTpG",
  "key35": "5djg3dsXFR6RDeBeMyTrhzYKEZPrUq95iRNJ4QdvXmfw6ztMr8U34JVurRxa9qWqbgM3dJ3iveuhAzrodEzigE8",
  "key36": "4AhpbZKFD8Ng4LH55w5fzfT6Jf5MpqvFP2UABNFSb3khX9JM2tpnn1sEXG88GT7A7WNJPeyPvjZobMSa8LdNYNuU",
  "key37": "bEc73YroJtgiSeck2au1NiUTz5LnMUGFCFELMAwDzzqHBmbJcDNxUurKFeF9giZA9z5qNyzxxjejPY1BtVjVthu",
  "key38": "278Z2Qdmvg4FncF5mSG2jSb2Nx9kiS5ZM29A4z6uVotc8pqhNbjBvudHZpDLGL33hhNpBbh3t5dymrf5Y4djad7d",
  "key39": "5ZE9LwShn829uWTuwCR7AhWtiD78YGHmk1Bhos199eGC4jRMqGtwP2C55BaLLgPNtCQjUtqiaMzj8ADcccAjCJTw",
  "key40": "5tMgMVcFEYgCh5vrFTf4TiqE4t1eqWmkS8qgTkxYbr1RdMQ4FzeTcKnu9qfYqVjL3GgpV14eZSU4ZL32AgbHF7CK",
  "key41": "KGdgh6ymMHx9SRzhP52PDkCHufNeuAYPEDJrXiWBYMAiAePTUq6b8uCUFRMdrmr72YYfNPkoZpxWNEuk1XvaSES",
  "key42": "41NrEMGVvGNdrsUthwmEW47vHpk3qYetpNB6F4AnsRfMnzeuywKsxKiqC2LS2wpjMkEjdccs3ndQD1y4v2T9mNHE",
  "key43": "2U27GtudRXwAXnDD7vBxUbvH2xwoGhfq6vBPr5HqHnbfNb7rM9rGe4H5UwRiueoj2dNtsPRJUbhy9TjWhE1gj8NF",
  "key44": "5zSwwHYZtk9aEwNEPU33RCqdw9zQCeLvsHntzJGXwMHSZkU8P3Xen2B3CEZ2yQsYhviTCfz6YZHHaVyzMoRwA6tP",
  "key45": "6Vmon5uehNUPWLcWJdbKrGmwhq59Ssb2fhCDcJyCd32Q7onaP5tnzNBA6SFQceaWe1wkfbK2tnKGdzWfDgTEpw2",
  "key46": "5twmr4oM3xAyuE4eLPvNpPqS2vgzLyiC1uy1LsejnG2jdBRXCfW84HcAxc4ktKaX71yRKVcicbcDghreDKVPCpAH",
  "key47": "5eN2bctfe447GF8QgD2oK1v8v3dAV1qq3JeqtgzqHz6KcW4kSM4kSCqhxvcMeQSJoF7ubrw9jpoYBwdvzDxXuCA4",
  "key48": "njFYNeAKeSf2iVDhAXyffupBppJWdQBcishvPUfa1CSrtMWmuyXVxYkdBDKuKS9huNTCfPYYJx3U4uKdypdJvPC",
  "key49": "24N2tKUkA41XYVqGqEpsGCpQd8WE8ctnCM88SXaQdNWHLgBvS6TuDk2FbCKgR3Xn1Xu9PjGENrhhjh9eUZLBqJpr"
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
