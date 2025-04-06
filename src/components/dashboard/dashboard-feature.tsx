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
    "59EZfPJtvcr1RYt4YnmrUXBaTWfuCaJCGHckduWnuz5HNk17A2ZrmAjCnTiDbsJovCzSMSzFoSo9ZGEXipWJAgec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DmF7JXowtivHi8K7VS7oaFLDq7KsjNcw1QUfUnaoY3JhXGPcehjoGvR11okTE7K7afa9Qgq2sMqutUq458ZXzmN",
  "key1": "4TMWy2vFhtoaWuMoAcURM7qsybv792AxeFWxuNVVP6DAAuDAypWdbd85pFAaPaTh3sZXjYDPsBty5CW221ccG3x9",
  "key2": "4ctNcR8DmsAdnn4LyMkYQ9QTcVbHusEQtGFGeE3EC3FQWvS1rxQPAXjKxaJAj9Q1zCS3NtsncAbhtcTcxebmF4BD",
  "key3": "3Rvi1Htdf7SgH4NwUz7jSHYXrzpTMPqe254BkCe5oa7ZD3xHqitoqp221E4h62wYabXbabM1zr8tNMB64BrYCJhp",
  "key4": "5HCruRmr9z6WkNHe1Rxw9gD1gAx4GsQyDX8bfY4pPuEnvkutUBxGMScjybZm9NhR3PLrHQsvLhdbqCVvg1DwZP1B",
  "key5": "4qV6HTahxLn3WjSX8KY1RQAedoKfYxFya4ZymYvLRXq42ztQkukACjWv8avWantLnemVKM31AqYj1B92tBNRrCjN",
  "key6": "4P3ZdBfBtNYXkGV4LysFYo6jNwByycubBHcxW1UNNapVh1BNAEAtfGZhnkCtAcEbViDDocDGrBCuUiTbgf4rC4Kr",
  "key7": "37fdVmEkUPgwQPYwnpg5WdxAsTVeH5diewmRJZxicrQ3LjedqWnTULzAJCq8rTuwxJGhfmv1c1zmvh32fm8RsaBp",
  "key8": "GDrFpvAHzmfUkPShTT6AfDn7r1ErekBCnpf6SQTkbYvdkgHRVFtgcnH2e2itmDfyFUi2fDdg5p36dNthHNDLUkq",
  "key9": "3CLHkbWLFXUhL5kmpVM8iKp3PEYPGZnSVnWL1SnpAczLaUnup376SotAiL5X6KdMFuNzHft3ypYYzzt15x1n13YF",
  "key10": "5G8jrWgRVNCRECLLdK8Ez2hUaXbivGwHc5ydVuBH9teXV5V6wsARg6DZQSmHM6gJHr9WXxpyVPPyea58VwKTftCA",
  "key11": "32dQ9XeUf9npvqJumuhesm2umce6wG8bBSWVt3JqqsXVmZVuU4Mxm4gBxSzZdS6AZqxqrP9xpUBKgtezjAnjk4h2",
  "key12": "59ZmwuFjcUhFv1kjSVbUdsfevGDiY2We1mt1XHhSrrhZSfR5fENZTwk3NSbbRxT5DyENhAQz5yfcfhigagEAxBZV",
  "key13": "4i6ZdJR2yGmWTChwyDeKExjz9mKCuQozKTJCDgyHegqiJN5jPaxGGZjYB8k9PHudtExTt9N5HLixJsTnu5utAdHm",
  "key14": "63UChbwvQzZ6kuaXLY3opNT1L8F13wzAf3wgztQBE4STmpqh8irJE9irD6mHyuTTMUPBqbQwCZqyz9J2ZBVbwRVc",
  "key15": "qz3rZjgWS9QPKxKry7Q2vbGpz6aWcnYwjgmpgaPnL819bQGPipCQR6hw3nGGjH55HYgkrotE1XUQPrqeTQ7Mavu",
  "key16": "46cWUYcF3wkZxcZ1VyCVUhYHrQMp9L5vu6YAJ4Cx4n5qooH6LR2vcDWdA8cDa6trdLFc49Do3hQhdn3WrRGwxZEj",
  "key17": "36A4Li4peDHuZuh5zwSE6jD4vksqSmVMJYW9vw7iZMFV5CiP6uSujV58LKHdrB7Xc7gPd5FAHAnbfDUxqMhHWAZ7",
  "key18": "4p7nBJg1uYstBK2nUK7vyfU5MZNd4wLfCjePPvBBbncHw8Zrfs2Kr4XMU6kiRrR5pDJ5PoiYhar599Xjmv27CZYs",
  "key19": "jYmQaPvWXdDkdCzwfdgWhgSnLYXL3EGqjUA1rWNA13Gki5xAfWheYuDzfV9VX37sGUsyThAGBsPjtNojXZBSpbC",
  "key20": "5dV915amTyVQKX8c6qW1KLGJnwv7zFCJS3a4Nr1bg4REWiF2QNfUtyziHFeYUKBZMvefQW7zK4nT1UBiNSqqH1ju",
  "key21": "5nUaXnoc4Yc5BmmKB9xxk5Mmbm8sNiPJ9iFTJ4mG9SUv1hYCa6azZwsWDSsbGsuLQV32jes2tFdGSR7RovPpwCto",
  "key22": "5LnYGiFHacrVTPnao8oFRmGhWWJEDCHUmC8iHWtWi2FZSzeGQYXjTzT6CYWi61gkmJivXXamaytuJ9zvxDagiRka",
  "key23": "2VThSLuu5FfZS9qbZApexni6U8f9zULJd8KEz4dsadZbC6hBj4mcdBeNbmPZAqMRNCA5AHXxJ8VKtfztXDQj4JWD",
  "key24": "2s4XL7buCcvQpdtr48Q8BKrXGzc5TqgyhVHLY9aDvRTBjqVUcM7NYMhf8YWXcFb5uu2Sk7SDPgFoQ9WeTpqG9PRT",
  "key25": "5YaQVbLjiq4yUhe1DYc9Mdsob64LrZRQpco9g6xqjrftTnP2FaykkeSh9BoFRUj46UHXK1SyAb8CVa9y7he4MaAv",
  "key26": "44qprktzBFcFdjCuoJkCZB65E3UTkyDq7smySA6VX6PzGCDtmAQ6e4Qsdr1q3Mu2oPC45jwCFF6EYHuUBEEC9Je",
  "key27": "4sFrcbWpMCTekgpVciVd3qF77KnerF9A16H6oBJE88qMmzuT6ydEtuCLbzFukDhtE2FgzgPUqBDZzRbXdphHSFVH",
  "key28": "3f5hAbC4pC6onzQnJQWBwWNe6Z82GqGETfLmdFmJPQLEJvhXm5rXX3TbJuKTCX8Mtw8rw2rucfbQp4aZ6xCvKT5n",
  "key29": "5j4ptFFLBVvp3TqVNgNDvyyt1njVsH7Ygurc6RWmEFiJj4EWHBusbWXYptTWcdtTqRQEgauqeYjFmDHzxNrwUpjw",
  "key30": "5Mbi81z7QcRNXMC142NoW5PniGr5PQ5tiuyP8PowAcmarQrrmxvpxUaMjogwtA3F8wHv7iuFkrUStC78pf19CCEG",
  "key31": "5pvbzV343SQzYwwUZFthVYyyg4F9Jpm3pTHxGtuPyT5613wpbS38KsES4Ta13Ec8xjhegGzbYWmFs1xjCw6sjdA3",
  "key32": "5cKVxhyRyRduKHhXhYenmQFqjrhPGjH2xfS6tHhhh3hS9DX8Ut49jT1oFsSP3SZz7E5hGAjg4J1ccpQ3b7H2THfd",
  "key33": "5LbfxCDTb2Jrnb2VNTNxh7EDtZ1VVSSmm55r29W2me3WkXyBg1kaPaY47TLFMoPDqDZ29iRxqiWqCxKKsqWbYN8K",
  "key34": "qzDvUeBd2EnM9mhpYPaeHVNNChfYHpCBzLa67smFtFiJro4TkpQr24AUf1ettCUvPizv2aZHNMauDbVn5WALh4Q",
  "key35": "4YD93gaDCEGi3YPaXEoimp2jzEuaspHSDxwcR1vZnuxphuafjEv7ygqRiWiHXrUZ383SrRb15h783JHku9Hd4Va1",
  "key36": "4iXbrj4RCdRe7HyyaDwzqNcoAknJs5rceciu6eRDjrE2mp3q2gbksorwXnP292WbTGXFRFrnyrNQec7N5N9c4WEA",
  "key37": "xfZ3g4j9KCFVwTN6Wgt5Pthcvi8dSqyS3eEwJjUg2d89g2W6qjhzwvUcxJ3zqn3zT5dwtxewHKxpWoJ5Srm5g5w",
  "key38": "5EAM1mbEFsygZnNY555WikyeWS4jMN6KRTyG6kQBi2fFYLNQsmmWGD9drGvLSX6KbymgBmSoe7zMBMR7AqYXjHVv",
  "key39": "38oSY7CevCXtJuWorR6gnrPLciumPcu5uywHdoGhhzHviADzbDQ4rE4A4hPsCs4BrHFuo1idk4ZXnPxRNKvo7ya7",
  "key40": "5yJdJQBm8j7mDUHdP3cfhJv5FGEyhduR4Hp3igfQvqSak6nJfi4vKG4Rj1wQWdXE7yaz3wSpJnRFZaYEFjcThHJ4",
  "key41": "3LS4bVoaTiEicuBKwLnDxmLMEZbwDVjmRGvEADPDbGeD1WxA75eKY3KKXqWG9v7hjKj3vNR34XMfZL2DfKQT2RpN",
  "key42": "5xa17ywmqnzQaQUqaiKATqfWzRQ7XHiiGskaLeLPLjsHQ8habNMkPdd9L8eHLPjHedeLyUwaVMgHy8XQD7wiWLzC",
  "key43": "4DjnXa9juK95d5N4GTwT7rMbmT3o9C68vrwFedVqwTZj9GYVDRMuTiqzfcJt1u1HN3g1EzuZvMmgj2Faz3QC5LbC",
  "key44": "2yuEMKqBZMTDTVkvvw3XQsDp374MwF4QvoeK4FvxmTu32fQTNSAGPRmbCsjQN1oWjdbytfNgDoMSurWEEuEY5YeT",
  "key45": "2ZZAhiNCqiS93RkMWWAvzyo24qdnrusmrpEAfcUYp2FK7mc711a7ys9HktSJiXfsoA749ZWUpySBHnACkgVxqVhZ",
  "key46": "4Z8GhfnERi6zPP52NHXLZctLaj1zvtF8GWRgeyu6MgCgeMj5eU4saoyeUh7ayQugCvozNjc1BXm8YQMuJyvcHtd2",
  "key47": "4ooHoGYBM48E33chokSyQeRvY9sidXdpZgc9cX6y1rTgT2sxgWMycaBUDGFnTcYa3nWxpb8ErpPbykMTGb2GkaFi"
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
