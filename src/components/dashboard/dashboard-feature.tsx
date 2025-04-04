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
    "446T1sMqQCrTRVkov3uz67fvJyNF9yZpSghinVfmZSCBsGsMdtau9VpNpEGLBH55tp1LVvaMUChpiHoJqWua2mvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tt1F4zefWKD6xjZ9mqTFrb9FpN8JvCZ7g8NBBKmm15FAB6Cw3R2KqaMoNhKocRSKPfhFhG3yyFS8krzivB9XsPT",
  "key1": "4Yu8AvBsAsXnqZQw3tNzBnNGXi7LYGPGJeWV6HGBmMKySyJSwg2Pd24XuHiFRsQ53CNhnKMfD1yNZooMx14sBTiB",
  "key2": "5cWz5p7BVkebQamJR3UUPhXH88oyQJyNaVWWNJfB9B3rrCQSvbL5Hi7Y1pfdKHkT4WR6MTEzQtRJBRHXv6u6xwYn",
  "key3": "5rvMG2WRiffCMruVBWSP2PNv7ytoALAoVmi5aY7zaqizeobhN8PrPDVX8ZFWKL1ppxoDdZgHzFJp3Q2QpezTpc45",
  "key4": "3FSugMnG8NU2npCJfC7zB5A6zq8Tc97hp3Kq25xUaPdt4ttDeVSoJ5tCK8JfgQA7Jj3RLjDPv2bK7M3a2LwKRYcp",
  "key5": "5AveYa3KounxLLs6VWTJmDVMnXQ8DAyKbuCdGBaCf5TudXC5Xu3hy2mWXGiLJk5Vwgjet3QKaB8eTLg3kyFcbU8Y",
  "key6": "3nGyKCdQ4ZzDEazS6dCmmEJF7UYnY3gQwhx6x6rk8b9qGrQ9rir7oFfQW7CopxwSE9mGroaPBk7xYqHtz4a4WB6e",
  "key7": "qAjpM9hk7L3uaYuvT7r9Zf2pAR7Kt3iQCf8MMYAkQnxncVnjjttfhSynh68M4oEkWpA5VAaJ1rmr7Bk15PLzVBe",
  "key8": "kKsoADbDpNc1zMTCAmdRyUQV1gDXZQeo3h8WY7X1CSf1ULBt9kkQAU3RjyHT8H1aK2bd38nUGRkgAUx2gF3pzGn",
  "key9": "32khqF27SVgqdLJaxi9tMJFQMTtmdLQv69tG53areV5S1NjELp4zRJM4pavwFGtFu4KEbi9XNL42VXptgiMiH6Pw",
  "key10": "4JxmXdCrBgerQip3ADhAcpfGR6HfL7M3xCMGDnnb6VrLgj3Rb5fQgj5umwNqLCLXspgHg8p9pyXNN5bTqxpWgDhG",
  "key11": "5pa8kYHYjQBoHhNdxoDkgEdmMA63pXHm9ZrnnkncPan7tju3Xdm6EbQz76JZ4P4RWjgrqC97BFA2G1jw8dHwVsMc",
  "key12": "mjLtw7YGX2vHHJBcNQUeQDME1qZ6P3FKNn1dHms94udj9nNWhErghDg6V6y5jjx7TjWsFH8otrPmPeAmnPi2Ako",
  "key13": "43iRRACEuf3ZAXKZ7Y9ZPsRFunMzLEBxXf5NMCVuDh1aZyA5NxVBF1o7PdGo7TPFAA8tcqA5DFAUZmJSBcFh9j37",
  "key14": "4ixgP8VE2E5CVoKCYiQuJpptyAxYVCazDmbpSezMnkw6asaGCTvARFVf2TcFFRxNZ5yaeUhSpw2G8wztJsco3iE7",
  "key15": "9iidquzii4xRrwqpiuLMD4pyjYCUuq2r8Mt2xUCgMqaoY8xKwMjbxuNx9yiZMR9VvFxzsyv7FkwJc3SaTEWvVc6",
  "key16": "3AXc4VZVhgEP2de6T9CUwT8JZujGtwPvCTxKdArgtX533nNDTivrm8LkAmPXbpkGYV5ewtCmQnVSqTzW6iimPC27",
  "key17": "21cmEvKZrSzwYzPc3zVdtgLQyAtGgoAiSsTXp64UVSNS7EK3kzaREG8UdjPHs9pTfsQXqXUNEoa8kQaNwdofWSK2",
  "key18": "2RHTaVeHWUv44Ak4SZeVFCa8WjKrm7UmvvpujYyri8mo3fZCWTVPdChqUKfWeqLaZnnEcSBh6zSfCbJZsoQtk3Cg",
  "key19": "2zTnq1iDhyuB3W578Ji8ymfFQvGE5N6e6nnK7aptFKVzE6qLzCuL2zJkmnTPgWaLXux9rrC4gzEDa84aya3Y2P5T",
  "key20": "53NMBgGAp9AJjZ8HPkrsNJo9Sn7od8yFjpNm2CPuZJFKZo1mWtMq42SBnRCECLwPTXfPJbAPCGAKvaNcuuadSFv5",
  "key21": "2cyfMpdJgJSdgCLN9Qa9BAJcH8rH1ckEQpbnh2GX8LVCC3VmZWZiCnuLv2UqwiNPorcnPuW2a8aN8peu93we9ACd",
  "key22": "3oNGxXHk95E66wvFYVQEveq3j9cUk9EuHpdTijFpNufBWdBYAfbLfWb4LkRN7dNM6627roWqjw5ByTrTXAGCWnF9",
  "key23": "675CwQgRenreoot6mE12SouQqk5xwwpEpy7ZjZa4eJTwRVPuxaLRaRMbCnmf9Np2DMUszpFi5s9Ld1V8EC98NqR3",
  "key24": "Xb2zkY7YmjexKqFyQyCg4zvGWCSW9ao8Ec8bN4GdiqU25kqg8B2Gg74tJ6aCYE9sFn6QTJ678BtGdwv3dvaL3zK",
  "key25": "641fVVaDZmSR4DTtbPQHVy72PJuT66zoMivkNGx1ihsn8p5VGsH2QLSoumuGt8uSt7XcxVjtAkgKQ1kGRzyazfpA",
  "key26": "4LZEM4hseeHToB68xUc6FZ5gWGHiyoRzbvbQYVkeGKqx7tjfVjRpVYrXSEpdByiTanwTb3vR4kkBtDykyjtZr8uT",
  "key27": "4dRugiYuQtFob4SrrrtUEGz5i9BaJkrWPQNXNNYRT31K83DrMfaf1SHBQ4gLVV7h1mv5WVzQUN6ev1niVjPqxt8",
  "key28": "4kaunc5EUNBHHyana2opKErjGbvmKLoFtsFHhwfHE97eyQVJsgyiRL3XuAGCBHNePR84oRie6b9Pp35cuyH3RoZ",
  "key29": "Qnz8DVVn7sYWpfsdN2TAqi7NnYvhq2uQdX3hjmBGzhVnbLAxZqg2ypGH4ZmrnnraSxDkeCSZs6jVzk2eLUG6vN5",
  "key30": "53au2a3orvfmLx6Swam6WRGYqLjoRQ2UUxcfvrDrHDKNB8zQPTuP4MKoqqYSAUkf8XzSKqPQvsjwyXvb2b3d7K1P",
  "key31": "e1X1zXHJMHRMf1Zf8gzbmuiBDrVR3xm5WFr4SNmhywMZWHR8NzvnmLvK2786spDfQvQkHk1M7rh9PpfzY3fCmDo",
  "key32": "5WDVK8hYZrCtJeDHV3FGuLsS64Pr3DMguj64zoRucpRGLQX5XeSrYZiizZmDhKmetH3ZuSxorZ8cieSYUVGX7NtR",
  "key33": "2fZekdgh9GGjqMk3hqe7hNc5asY7aqxExP2qsk47QfCBUMKhc59nVY45w7tNdt2CAd8pBF2UAJFkF1fw4oMKUgn7",
  "key34": "EyBaprE222DccE9BTTdshrgekCrEMoikuPBZikA7Na9ctXPenNvi9bfKnnhH3eb4W9KdeXrm15H4mAhXQc3mtqJ",
  "key35": "1Z9CMS3bDrmFPcDbgE1wMCgwHN6Yd72nDzx4VL3zf8iqsQLpJLunq9wwso9T4zAdnPa3FDhqhtFTEEPbN9t8o2M",
  "key36": "4YVY9dExnMfRpTPcJfDfLLJ5MbuYCqHAFTrgaoVyyELGLqSmbmgxCAZTMSXqSmy5Mx3cPgQxXkybKd2Q3jwEbkgj",
  "key37": "4JNCthpDnNBFPnTYkuA8NRvdSz3xGpTCe8NDP6kqVNzSmFC9vs9TU9SpKnPu6CMAZGKdhN1G7f2CrjkwW76QdyUW",
  "key38": "35wk8baeK8rWhHbUrAanbPkh77iKJCVxdApFqGUgvSXe7iW58hEU77kKJBLVDGxT7KgFcTn3RLf9NN78PpgVVQai",
  "key39": "xFptCLVgxexgr27XdPKheSNYe9vTqLxgDYHL4uxTQhE1ZoPURizCBsdRmwo5outtGCMXnnQgjr4TGux3GE3TRYZ",
  "key40": "4MxaMZmfi8JyFVywvweeHz5rtu3n154XJ9gCBkT7Y1NhzpEQVFrNzqdLhASmQgGx18VwUFEvPJwmsL1rQYRAB5SF",
  "key41": "28XFp1CRZtSUaMmxaefGLhjqsUjV78sMP6mCMcbRMyps6kVrMndCFiMjRCwL98X5ydwVs7vkC4tjz8bjTUiV48SQ",
  "key42": "inuXonBMdN1G6S4ugD7DugFuToa94Zf2GqgBagHranXnKrhpBDh4YLN7aFDGJmD3oBEq5M8W2fctfchCBF46JWd",
  "key43": "3Bz2MrAmg4QEbc4w2QvLS6bZHhDCUwGaQyWQPR8qou6hAeN9FXPDfuyoHhtjihbp5aKUhWN5sFRLtdiF3goYpXXe",
  "key44": "UHjRf42Z2sSSJtBTZtsnKWTtqixE5YUysQdEpuexTyAPBs8VJj3FKHadhy4mTwjhGqRqDtXK6iDJpAiL7q45ttP"
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
