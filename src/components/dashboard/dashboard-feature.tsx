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
    "3dkM12UWtfUEAJr3k692kEfAkeKgYuLv31fNWJqntcrg1oCxXwmCpj2bEM1FxZ6TzTNp9oDHz29JS5eXYbi4zBrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Katpvm8VrRWBREnqDKj5zPsvrBKZJKVbpHqSmSzCqKY7agRenW2eukyEJBKvizTXWeBDxsBQY6GnTGZqQeJXV4V",
  "key1": "2BJjTe5TjNqzsWi3znLsWrJU2yV3TT4sw8D61okXttAxA3XwugpNBsprGgevTokD8griHNBkfzm4VSdGGJqGCLJw",
  "key2": "2BsKaNDa6zGexooH4CHgb416hjKc34rnabHoeQJtmwfFM2J3pVqnkh4L5cCWdjS2AzcAjQBwP8RrARVunGGH6wM9",
  "key3": "hL9vTeae7hAr8ymLtXWw9uFss2tbZcKTBBEeWA8vvcZVdNDSMhQcmfPr1f7QdhLk7NsecexkfrfpPDQ7HAuY8mm",
  "key4": "5a9FYMYWXCfw1qJgkXc2ktBXv5XBwoVVybLBRtx4fSLr9nVszFsxQqQLDrEcEp1Zg3uhV27Ka1dUPPRLnhN9Zhbf",
  "key5": "4cM74bN5rr7FRmw2YJyv9VcWyBJdWD12BmHqbfPk899gqaxLJ4skSa37Bf84vZYF4nUMmPztEoVXeaRhqaN7LXVc",
  "key6": "25LfMwFQCpehduFpJMFVTVcCjx6wTqGLjmqXrmUuTCc4WX6u4KXRLip9UY6PRN6PnhN1AmH7jWw1NyacZLWgWQ8L",
  "key7": "241yZadUnVnRFauYG3t2WjSpPjtEe8XJJpdHCNQT2jSMhB6eqHDeGFiSTaHp27A8kc4PXgjrNrw11M5zjD147QMD",
  "key8": "WaghYpW5efCcWRaQoJgmmibq1cWerSfVseyuoaDXrc93qMChE8pD3ib7uTqxNtG8KU257hxZCRxr8xFhUjxarVv",
  "key9": "JAz2B59ZMmstwAA4dwjYc8zUuLgwGPeEkqKuR8Av7ugcp9oxbd799vPZiKtH3fPPsUDBB8XeyY4vtFu6FGipFJt",
  "key10": "5A4okzef1Eud2t3avRGULTtWQmHdVhjJg6vWvoL3JE2w1Qt9A5VnKyk54jXdv2tw4a7AoVqXqmS5JVXkzXwPFyBH",
  "key11": "3LEyJbx5qGc7taYAqSnxnxuCRHuRoXVYiuEfrcDA4W9Xt4kbZMQ3i2ZzJxvnD95kevtA5qa27oLofPvGmp1L15tw",
  "key12": "4YaZUPbKxEPXKHFsYGY5byg1kSQdbVX17s3jbLohb8gnafzw1DB9Znk2nc8i6URknhWM1nrK7w6CFgeidvPiKSXA",
  "key13": "5zF9RezLYg54ZdR1GxcZEPS3PMBJHefh6DRwPig4P8fvWqw4bpLyMjMp6qmbB2aoXCsJThSJdoyTWzgffVcuPR39",
  "key14": "2Vw4frZ9FgUBEHh84tbt3VEynxHP4SmKq8Axu8XQtaLQtEEyvJKEW2ma26dtDoJaRVWS1puBtx3jpKviLaZydaUu",
  "key15": "66cpoAdY5zdNJbDMVd8nheA63SpFHCeRQbJD4Hf9JGF3iYe7fJQcdKcygR7gGfg7dJ79xMzhrfaA3iSDbFRHtgF8",
  "key16": "25qUwJxovoXyztpYnNqkbiRz6WfJRzxD6945JDi6DLsQ6ExijqdJZEbC5Jj16HWYbzSzeFmhR6rNxX1gVYMwdfXb",
  "key17": "3QbuQM9bnGSzyMWfDyMhAFT6DKTw3JFXMQnrn9L2DW1vKau6z7wvDV84fwNv5UHBQhjKh9FS2EG2Kc7CRNCpGXTF",
  "key18": "4438zESr4PGQ27XnYnC1FUPiaRXfDHk1MuM1v3D83Rfqzk2yp9pZPdgewUWnRNh7RLTwrWh8r5xMgXcAnigQ9fs8",
  "key19": "5iTsUyRKv4SHJBAyWHzaKPqKA6N6sRb6PNFuQsrpRBeTVnZPn3Q5uTZ5tZzvdr8Ry8PCg4Pygvzn2UYushwcvZ7D",
  "key20": "4QFcQiNdoUHNm64g197Desrn29Ko6bAtq6oy2AjNvq32L1DvxP3urZam1zuqyG1aXx7FbGHZ8FkWBFK7dHicSUJV",
  "key21": "3KSwTjaMRE4YuejNG4URpTvd3C9epxAeAMMGr48nRtPFkVtj1j9wb78VdftBuah4f8z4i8QWuFtgXrchj1CAx88i",
  "key22": "5DVfDW9JbwyxdnnvQnqWRZDJo33exvFEHykr6HoHNaeDLWdZLLSDogxyu749dzNuNs4uaMfLtSXfHkxZ61jsJAJ2",
  "key23": "2a7JMz9yboUTcw1Q78dKGwfP4mcdVMor52ZgJ2h95khyni5MvYVRtqhKDQGSX7mtwGEazU6ZbfjXTQPn4XWtasnR",
  "key24": "2f4atUwzBPr6191qmod9A1XYz7u7JvFGLoydYhyrhQ6nMpra1zwRNGvAFUmEC9zQ9BaDgNRU1ESEfxcAwVKGzvaq",
  "key25": "5mKmYqaxFzADndQqMgpCYns6xKLtxuMYwvaZZSzaRtePAQnKxC3sMkNqe936CPARQiYnsEgRx8zajdHsQAfdMMpQ",
  "key26": "3T1MSyen62HCpDRVJpSAP19PNHaADSkaQioCb37b2RzndMozW7UMpHLUcnnhFn4A6UU4fEABVZwZ3D3ZSSS9WMNX",
  "key27": "29iHj1QHCk7pMpHkC2DnwrtUPjjAoq6ZGwjzZ8VUZWpQmqfWd8Js6SXTKU9549ims1NREeLr6iFw4HbXE57XJwSP",
  "key28": "67mgcBcMk6BsJNr4aXREWiuQ6erfa6dgmTfyjrXV5gfS7XBnr3oJy48BWHGygoVxjwXjynDv8ZpFPdw6L13zEAMG",
  "key29": "3rBHjdAc4j5sgTxnA2TY8UVVnuokFS8Tnpgs96hkV96HYtpaL6gw2VDFsaxiZmNMqRir2ZWvjYw4vCHnPLCNJwMw",
  "key30": "56UkX7HFzieHZyiMaT68G2iWevY6DWFjwRbV2nCVsJhqykptscu2uZjF28mceQNStuzEkST5LZyVRbj7KxZt25CL",
  "key31": "56pQJBhSqz6uecFyfxx4P1RvLiguHNaaErzunvxvMoiuPLaKcB9vZeeXivsv8YAnAsatzWBopQMczMQXU9QU8MNw",
  "key32": "2y2VTJWTmpyQzRGg28bpyQckXkessz4oetXiQibonCGa57cFykcqqPEKc1EK6GRRgZg3EMtHpVcwBUC5ieFQTqaE",
  "key33": "4Q8Qyjsv1MYgNDHLWUtYKU95LbuMfeVdEUCSMjVj41hHBSN2A8u65NpzJGk7TR4jwf6AempuF1MAEeNSsyX2eC81",
  "key34": "2ZnSPQPPxxmKTGnZoAGL1M4mGvaQC9r48AwhrHS4VkrqSgUYCPb2vo4FWrcja1FSNPGNnR6ToCbKjiB6X1QeupJv",
  "key35": "Afkkxc4QRXTKogHUx9mmKPDfSXQrdTLTqGwHa4csprgAeUqKXN9MkU95xsyDfD7gkofLXbFMXiJgjp5TnXYGDnf",
  "key36": "pq8JGmZ7LMLeo2VrWog26C21QSo78v2NxMD1GNK5Y9We5bo6ZMjDoDWTykrRHhqomPLU1dUfEJtA3GGdTVAtBz3"
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
