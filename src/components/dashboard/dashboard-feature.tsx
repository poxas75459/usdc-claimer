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
    "3zyspdT2cxjnE1ENCn1HHQx4rnfhBsH89qWhwhiVLGMx64j9Fi3m1JdtPxzxwjKHJDxuhEGRqGZpbZ3w5XzHrhbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ba8BQtSN2DSt2bTyDJip9stDYvbLHy6bFbDrJDNL2QPXkhbPEj1Nk6ycZxYNWihSN9WkP6kxZspnSZ7kicuqbjz",
  "key1": "vVUz1AGFEfH48gf9m9SiByh1mj7VccGgRL5DLJkuN3VtC8YYx922os7uXGfHfNE9c2Rrnx2ST3sUrdwxp2957oB",
  "key2": "67EcnrtNBW6Diy6PqhY4FStSCQwxHs2j6b2mRjNV4Jh9ijSFz3iJUSWgSFsPbdeFntvfq5kx83kRAMyhaGZLvzKz",
  "key3": "55Q1QefYCic6rZYvSKdKeC4y8nP1sT6LRa2B6jaNSy7YdEs1YYgb2L78Lm4HqexFJMtfDDiPfjeUvgYqPGqrfrju",
  "key4": "3BUJmiF6NGpaAi6PPffvDgLFkM8B3BVmddeqJ1fzyiGf7ZdtuLJe3DiMmZxtSSwQUSj8LH165B4AGNSA8N6RCPeS",
  "key5": "5ukJsc15ab3FZ8yGGysxnkmDAX8JaQ7ECG2PzLb3g3WuwkgFDs81hqLXsfoYqkpixKYXqHDybyXg9Xuz5ShMbnje",
  "key6": "4ez5r3AYNYGxqkLPQqCsadPUgoDqB8GxWi8QfirJ6MNRH2SyjCjfNjzevhaLFit6To7VeYyxqywy8TzLfydQ6LyJ",
  "key7": "3dkwaKTMw5fFbxzTbsK2yXs5bWCHqvgtuSgBYRt1ckhkDWQLgJP1EbwewrtvvgEWESGW7tVYoE3YdWMivKwRzYVG",
  "key8": "NE4nmcx38iXK3vtFju8q8sKt6AYcKw7x9vFCM1qctLiH84WLE2CnaJ4iziDRS4DSpKJ6Was4ZNjTJkhScEo4ENk",
  "key9": "25f6SBav8RL5djTcAvxrSMvmtA8uXLai1SYoWcmDi6HQnSxbZ6foCE8pxCcXHHrMYNekrhPd3RPgZBCxRgXRuM7B",
  "key10": "5BMKPoEm5twiFcVxYf9MydyYxVNCXDxuXqBS7tXSEmkUMT1wYkKtVenNFbmpVTzVKfiQmSmpTizjWY3Wb7WWAFCM",
  "key11": "25ZdgLWbwYLGWLS4rDAgHnAFSz6ZDcjZr1bysyn5rCtrBWe2zjBbVfPooaF9McpUCV268665AhgbrBbPWxNEXjp4",
  "key12": "edmMGadN9a4HeXPSEoRDugTQKiaZ7FV6PH1ATorrcUGtdt2Q2Terd18Ah85Dsj4Zrsy74eAiReG7LMgfXQ6omEa",
  "key13": "36ArGkEkDinrtguMPqz7WdTrGbZ11r8rmcB1T2jncy4CvTkkZseBimVnuc7fjEvxJ8NfjS2H5cLpgjbTUaHFjTdN",
  "key14": "5L6zRRsuz2YUJk6qCr65Yv5QfhZYhewTQKPPzZzTDpBDE4Vwkr31wAmrjQhBBhxdZ4LgUGN8ZED1GCo6TyTvg8gf",
  "key15": "4bxB6Y7PHtwqLkq342AUtHu5rLbdHEYEUaGctS5J8bnYekLK9jfw5hhdromjrkUGytsTxZmQquhG4HCvgpZLm4Kr",
  "key16": "38hRhRkSBo4aaEauH2sTLRxvEvf6uwhH551MEaRrjeQ21DLnfy2LF1JbvfwZYm23piikdyXv1q2QPdACnXorxC4t",
  "key17": "5tD4HGkj9ch2jSvcjKF7bu3YHTkNCXmvaWoxRxtETAKfeDfooCPmdJ8mAff5qv2RxqABD4BWEn8opv3HUJER4Vzy",
  "key18": "5CidwVqCSJCqcqJ6vpqsXcn5VaXA7R5SRMfB9kNreNPU4i7gr5F5jsFzbHyo8JLhQmH9AFz3XEydiKCXs6GW71Mj",
  "key19": "5QqRzWSQyeEzcbjkdAFgtw4XisvUb7EGxDcsD94qkKk1ubvdU5idbjeKvekdtrqEJEmzMp1coeB9pVLXnzMNpRDk",
  "key20": "5PiZFid8QvsX7TufWPpz9JJRWTVHNcW3xkcSHhKvtvb5rLvF9aQf8cZ5eKZ4DcRchAkNWNWAYV3Pgh5VFeAbC7rD",
  "key21": "2k6j7zYQ2H2tnZAsyurgF5txRUh5YfqPufXhR2bVAUZ7oEkPUMrcy4HDUiAviNaaABX5pmFgDXpnYJJNgdUTjNhw",
  "key22": "aZTQPxg5T4d4Qb6yYEaL5oUhFciwFHK1ANKftZPhDwB8sTRAouEMcPND1MxBbXhs11ZpumTqX4GpnJZRFRJDRaf",
  "key23": "3GbfWxXCreQtuo6SrAXo6ToktJVzrhkzN6FSatYTHaCnAPRo89AfCFZAfv3A4kvdazJr9QAjTSRD7H1jbC23tr9k",
  "key24": "5z2krWgCX7EXDsjLNzxZxobbWAxZoRqen8kxV4ZMDmCvJC6EgBBWd51uKRSPxnRGhTccoY6nJsD5PfETjGaJZM3K",
  "key25": "2u57iGoA613kFKXuczrBK9FNmtxcAgPLW3oeqZLNJ56g1cxH7qZ9aH5NFpiVz1CJxT6x9byBPLCYbhn1re87ACzM",
  "key26": "23skA2PZ6KREeQFLB7hA5u3jsKKey9vSg6xTTMLMH5EcDXrS4uHfzx2ZPYLyYBYnwGU1qowL51RgSCZQfyiiquAJ",
  "key27": "4J5iKLXJWGSfzgAWiLJGfAaU8Dp1ERR9Z5FNu3AGHdHmBcr6LW3neyoB9HC8MTcGQ7usxLqsn8PrkFj6ey8Gc8jj",
  "key28": "4o4YYFGwJwxWnSrh5NA7SV6onBXaBRypKTjZJJV1TWLbs817MnjcgCApB9EpRYk7cqTeMoWFyC8irLCJ2CFWbQPP",
  "key29": "2aTzpHd8wZmkYU1gsXuoUBfnQtEx8cnwELvNE6qeRVxTd1cbKqLdXQrCREA2ut581wcT3xS5yHk554YyhN84UqtV",
  "key30": "2zgkmEjxXQjot1UXhWxQY9tMGVLHiVCCZ4uMxc6tx69afPLaVxPJn8YWDkfQuxKXGDLwvhZA2v2wEyYHJajKKoZY",
  "key31": "2znM411jPcF8fVJY1v1iPudBHo3uN56SAz8PAzNytWYy5hzbMk4PyGDQkY77RMmSddHhdNNQapZQWp4D8wJm9fz1",
  "key32": "4HXaD6xLY8iGZBSZTEmW6tmkjtXbdJFfX9kWiEBCyGXxB96215y6SkkkCnBantkoGbynPaQA4ZottH5q4WESZowj",
  "key33": "3rJzB8Kj3Drg4seqfrrkF8jWG8sj27BvbxNonduo5EmNHa8QRkE9LzE6iDJev3swt2JgYMjNid91FFWRNExKxGCg",
  "key34": "41qFaKhmvMmVCLHa7irCt9D9Y9VwLoeh2n4R7aocyPYdpZb8x8GcaFSW7wX5W83iEXSixn8iWgouUSudJCPMZM7n",
  "key35": "5q8ZXU4LKNaD7XjoGLAJmLVT2WV5pc6V28hYoevovYZRpAbDb57Y634CSh7GBm5VLQhj4pCxwknFFSyM9NcGAsMr",
  "key36": "4zDHTvv7AurFTtdJUJtjZoZQvdrDBAb435NDSau5htK6j3FLMYhNLofqX9Ckm3QwdZymeG3FngS1W6HDXs3G7uFJ",
  "key37": "hNph3LJriYm98rfBMLhLtCYs8HY6rPJFwLxPXr9qnKth4U2q6uG3HZScicejcg1vrNdbHJgbdCTn82Bre65Xj4K",
  "key38": "657y7XkbDHv5dH1Jnu8B3rzQaEwB4QNBDfoqXWBRMopRdUqmdwcPnUe9AC5CvhwyrCCUaSjawgZJKGSmxqUHMXkY",
  "key39": "ZWgCiZfape7rJLK6r735hcqqD2QjkVjSztXZpZ6mJoiiRze5cd92Nrd5mxZrc86unXMWkPenoMreQ5vjJW9kDqJ",
  "key40": "f7fdSxf3YVdXud8LyigWWws9kJ7nD8W2Aofecw9SemDqE36Fm2Sykr3drcr69pcCWWT8M91FgTCqqwSdbPC2RPW",
  "key41": "62HSo5c4qTYD1Qxw7m9hmuX9cj3n8ry4cEa7AFvkQmaTfpTtTitEYUQ5pUJjqZzTdVxsjJYNfm5xWYnuH7sxXDkh",
  "key42": "4JqZBZHcayjK5GJPUrfraQrV55twS4y5Qpy3U6nxmu6Ze4q7bC66jsWSVLJkBoP4UXPyJeSVb5oR2CzbdhY7istS",
  "key43": "5XpD9iM7TZZYHnhS4QHMBSycGNAFKmVHL9jYhZYAyavnfH2s4oxvnup3XTv8R7FhD8LFTQNJLnt58ZqMYXPSSbEA",
  "key44": "49ioHLbY4tSC2N9cyuBNe62ggsuwX8YxegV7ucb6FGkvghnwdxaePJGbdPqiVqa1tULWLMq7dNWYyNM1J3VkYFUz",
  "key45": "5gQF4nrzNj3w6hMd5mHex2yYuAWExK9KCFtavPhcVTDz5GNy48fUTUvf4HUAd3btnPFpioqMbhHJHnvrZRibBxAG",
  "key46": "4cJi3AR9YgX4sFcbSnATJgxdufRT4Egq2WLx57hXDwraFNRhwFGZhKRFEPEciccxVa2m2EqgEZgW9sy9Lwd2RBK1",
  "key47": "eEmxUEhWDsi7dT7VysJqDr6Bxbp9adYvkv8BiaYB7Qqm77ey2e288FoSt9p1cAocKG7hzMLLiAdAdpAC3EWvczc",
  "key48": "4iVqwHU9tQRfcC7vZcJY54scXnWtsd7GZPkZb4DbQY8zhMyXRyed9XVzbwiTJ6en4oHVAcP5FykmEuFFyaoCyYrz",
  "key49": "3pZkoXyrqXANQcp2qdeWbsxJDy56qAJztoScG5L4cgyEJzLUs7bFZLXc9CSkfWUYed28haDdw9qZNoAWVheSvKqa"
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
