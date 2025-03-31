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
    "2pAhSWQmdzueMsdacd9uAZx94o7vN8jonMpNtVeEFnYhQNFgb1CFTtc4oSUDdBpKMbz4KdzwNzs3pnTetrm2Mk3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSQG6rb7vctZAuRtXnWhnAwFoNjzW3pWAmUcTp7NC5RoNsUqtmimpdPaTa7nj9jhhsuaxMWyh4AiXKjR1m8RdRP",
  "key1": "4pKDBNFcKasyhPXFJsZqCHS7AktjcFAMdAw55WvijsPZWTj9Z2XN77KMxdycegpapzzfh75D5GsXKRWy6mxpePPg",
  "key2": "5AMVpZ9Bfw4x4GFvbpFBacevGgf6fqEQKBSVbDHGxoPVFrqDyTMexWqkkjJqEg8QezzjgcgGXVZsGM28QvhE2rwf",
  "key3": "623GKxqnym2PxW6LBFmdhLCFcE2ZrHvDn3GRXsJWHBaiThNfwh4p9usMS4oia5f1NmfhTWSDCfZZoKVNWaPRjoav",
  "key4": "EPFuXZrUdP37WfnfaMrXyLja3B3nuw6tg6ZVnEaGxh5DtqWjRCVv9Vuxy1N5PFiUkKWeJub47s563N17LcoWvva",
  "key5": "41kVZeoDPoH12UTmTgFNC7NP8koVfmGtP3fHQewnZ1v5zh3aY9FFTeiZBsQ5Dxk8wQde85uD78cF4BtuYHnq5oDG",
  "key6": "34D4cpN6m2dzCkKgd14n7AapiwxEWRqpdEqUNQgcaNQQ2YdXdkXtiH79ENK3YaNM7CpMshyusGTPJyAu52MespZk",
  "key7": "3nw1YQbv9dPigjJ8yEVHptQwAZWfCYQtPsjEbJzP5oCwSA8op9wg3cxLsXaUcj8fcwwFB6wJRwAbdFEXYVFRtB5u",
  "key8": "3CmhYnvoS4RiNvdY3bmqgwaS4VQALBmyuL3tg1bnPr3qwY762JN62SKcnqvR9uf9CNpNjooGBCUqo2Pq6GbUDjg8",
  "key9": "3vBafuWexnvxKMpBy3AxTWJEoSAFgn3w7CPCpAd611u73UyjRW4Gp3FHib7n5gJUZEhkr2B14NoNmsNRbCqxyGR2",
  "key10": "2YGBxbex8FxNYEq968n64Z2X82TWxmk8LsVoQrhAdFb9PzZztGfkVZZTogixyvGLijyWAYGQTFoi6BtGAtUvdS5x",
  "key11": "29KLKCEhSUDVS5kwiXFqFNHMp9PHuXU3Y9c3LZUhKyCE5aYWeiK3HpfQ9ua1qWUR2JfS2smBGuoqMnds6kFpCTsJ",
  "key12": "4mAPKXrs6q5LFgH653gbthFdHr5ZBEpFXJtLSRXuMtF4JR7E6gDYBPb2LkETTueWoyLrSYRZ4Xbbq7asPJJ8vPjp",
  "key13": "2Sw5W7qKiH3zgpo9tw7X2vcK4sZvvPMFvdYKqhc5XseNUS4hFBugJ9j21TThProZg1esoMpge5yNb2QJcg2Xmz6z",
  "key14": "tNLmDejGDqYvU4umivQ2khsGokqZZGW5DNPFrfwAYgt7XzK6Fas9zZwiPa7EsY8s1h5HV86pjguvnGKAqS2sHcF",
  "key15": "3X9g2h1q9DPujXEx3URg6aS8XEvzWBaC5HPRAB2DPzrW33GUDWGAu7hM7XpTNgWfLrC5aZhkCpZ5QZFMu6ojSos8",
  "key16": "MQ82iWFCmQ1kmWnmLRL6yvJkr2RXB2spCst6UvF8L3oTuFf7w6oYSESmt7W3jnL8mMPjHEbHnMVyTTXuqYhGLFF",
  "key17": "2KXnXYxW9YLPRSnPQP5xU73A4ajNgf537zCuuDSak62RPTuBm7M3zkqQ16N2jBFRQNX8J8F3inZkziVBcAvf7Znh",
  "key18": "5d7D2wKHDTGnyjS2QBsjLt1iPffKjM7385T96PtHD6Cd3VJPHAxD6y1RxBqBWEdTSeZix8A4ycTPvLEY96Xk3WJ2",
  "key19": "3MZ6CxvXxNdMNq4h4dsXrEYUCeDwd3YjjC4Ysrxx9st68PCoJnQiFd8tbKrVcknPB9ej9if8E2tw7XxxAmEZVVf9",
  "key20": "4bTBD7N9TF6smW86yF64y8JALjHsPZu9LMjJWdrDqjeBcs5925PLjdX9PsiRSepqe9FibtboymopjZcsnbKT5stH",
  "key21": "3bZZcpyfcNAubvPnZEwNDU1Z3DqgYMFkutBHjWubVer5zeUVgYGgLtc979Hk6h2QbeYsyNyo5evPNNQymt5sjtLL",
  "key22": "67pBn9kPTS135Z9etHUqAQSp59yVHrZqGNo2xSrhKcPfwNNf7oYJi4SxhR7sBcUKxgNTUhKgmGEdWYHqeS4hzouM",
  "key23": "2grkqCzA4vukZ3ynSK1hFUAmgpani6H1sgiufRq9d8s5JaDYPDBsa2mvann6mfZAF1kiZj51po8UKucnYe4nqovU",
  "key24": "5fqbqEtUk3ewrds4Td7K6z35w8rL8J2TzZ3qT1UuaiLanp78yX7wt2NznmwGshKLCz7YL9pV7BtSJhbV7RhTpgHX",
  "key25": "5pMyeUX8wNrR8Yh5KdyMFfuYbuX8gYB1gBKeLUsNbfvJ2VnCipo7tSvvvaneiD97A8UTExL8MuPZDUgdS2GHxRfA",
  "key26": "3GzUmjrJz5R86fznG6nmzwwFbcrp7QFvfkDSuzRiAakoBQV8X2kk7HkRFUCDvmadEiAVTHEaYMZNAwn7qmrgJom6",
  "key27": "63DfjyAYMfaUovy1PQMSeLebabXtUrsmKY1d4TRPaZ3CsUyKQjJkpRm8rPqsuhyuFKWAmXfzTPGyGZRAGb5ESK6Y",
  "key28": "5YPDJrwH4r9AmwRgrzAPU9otBvL4EBJSffiTxsmZCNNAsH4WCYKgmLEa79XcZWhrz4q8JHPPnYCUUbXYhZTooH5h",
  "key29": "4x7CcusH9MgnR58w3xGNq2L2EuLtxpAgnP4ZoVKpmEzU79Qe1a4Lhy4DeedSvaZKxt4rXNRQRSev8L4FkJbMk34V",
  "key30": "49i536PnphxR375gmoKvsG4M5wmWYx1NP1f9D2dxu2euJoBJjjXTrzmToxJLVY3e7pZwSdfJyS7F1AKotkcQLNFn",
  "key31": "3U1jxYRsUZmgRk8XgCz5JsJpnqq9K3Ne88EyGy52Y5Zy7JidNNjgLHewGUg4AwTAn5NkXKoVdMMEEQ4qab7NknVZ",
  "key32": "2ooaopmxp54EUA5DThpYRv6Y1BRnkGCR7aTrZCY7TFLY6Kd9HWDu44D3AJ1gpBCFZn5T1PN3eo4rQmCgsJH4rQG2",
  "key33": "DjwziYLFdkkRQwaQRc2MU5aB9AY6vBZTgTiwZLeK9RhtXsBJc9Q1isCpxtCTibffk3dC8pgsr6pFJjWizukbkof",
  "key34": "5LhwkaVfjUXoDoUqUyeF43QGR8fgouRLL4Pffyfsagry8EEbF7CuBHKVGcjz7pFLVsxMShPFDdZjPSBvXiKN57j",
  "key35": "2niTbPQErM85BrwXT8Lrm6tcdBLqgCvMnyutc4P6K6QJKxD6zFZF6wfKT4e1gUSdk83EU63qheN7A42GRZEGw3KD",
  "key36": "33HqDFRdhAnXcdbvjNsVvRsQM4JCUmkttLQTdF96zD8ZKpTGAwLoEWaZSBA5NMGUJusuhtRJMXam4Yu5KYZfy3e3",
  "key37": "2YeqFG7Abj7CZrkwk6zqasaAPSbQnTsEwXxh58wvJsv2BiLQAf1CYEaBjXY4iCBXnDKTiMc6s2Ntc3MCxPVntQ8J",
  "key38": "2yBZRTdQ13j4noWvYm6cL95jrVfCCLtJ7gmvTvrAXW5yW6GUmV5sg4dnEvHCcuHvNgE6FwYqW1pkZGgeQ65oPcyo",
  "key39": "5yuWAMWDZNvaLhz6LFdGja8PjK6cYvuedreSaAnPC9vzRkzz1oBnxGubQUQU3r1mRBhF3rMdMcopFkZCDqWGcj4V",
  "key40": "FTB5D5Qe7ib59fDeNtdh2GwpWkMAoGHi2Xrpx4JshA92M9DuHR5LepvqvuStFGLrw324hxvRrFHR2L6DxcDsWAq",
  "key41": "HEkv5ChrugdqGA5sMM6atgMoid9BAnotUssZhFoCaepi5WuvYaPKehGwMFTj4wLqPvZekBveKJ41LqjrGA8ccHi",
  "key42": "sGHqakKLCCt6gPbAHskxyqfeAXoDgAecxWXCuL63n5ZJ5ySKjSmogw9orA9pU9xP1UtmaytQfHyVRykP3mFxkTD",
  "key43": "45LJ3pLHG83WLNrHUqnSSSiCagVTVAKVuWcxHQ6H9hm1zhgSJKvL1i2RAsJBvH8uXjVp6pgt2XtcH4wvopq2viaS",
  "key44": "2Z2dhdZkwbt96ta6MN7W9fVycNoWKK4Ddp7VztNjiRuotmW8iJ1B97uSmhpfnuoVJirnKuZCXgajByzkfW2nPB6z",
  "key45": "po9BBjMP4wdBkh32ELzJg7FgaqrVvSg28jQ3XBtRafkAKshVXzxa3JTuJHmfjyyRKHGSGVPCR2RkceTz92L1Vj7",
  "key46": "2TcTXYVx3sUCQCmqaqb57wjz7bhEx1Uyx1fBsZS1DhxxAoWot89vQnzsBUqjTd48RtM1AkB3bhmv8TdDxnfb4apj",
  "key47": "jCfLkyYMya5t9yZDK8qP4ZJfaCGK5JpCr4PkmSqMJ5bdkf2YZLqrQYQJc3vhucJM8QThEabZf3gs3Szu9kP6fFt",
  "key48": "AJnByG5yJRTekofwvo16AgBPuRHMmutqrkJigD4ALhQRDHvjFuVPhywFJ41cpTtq1xsLgYigwqyWqFGyfq9QHHb"
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
