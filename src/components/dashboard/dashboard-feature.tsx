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
    "9XyRLSiGbWqA9mmCuRjgi4i1hqjLGM8hRgRgDY7UxsDBx8bnrPoCJ9iPko1i1RuFso9sDkwQYRudGsJUQwddUwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5idMwfLTREHWGuUw7CAnVVc3d88yn9UW3LzZcoMaQ6xjhDShvnWXBXDUdn2dcQcPGqq3sYu9p9vMw8y7hbmJrg",
  "key1": "3zDPSfesFnCGf9tP7vcauaxwdGRQkDAVp3728FB3ETs8PbjATejdnRqNQTDDRP7pEagXtpHmJTEHoArfBKfkVnVM",
  "key2": "2hpQZn9GdSmWGAUSHo2fxptv7oth6rxVrzjyBjVjxWtHLqHTPDAoHmrtHX32pUVGaFvKwpB1o2mR9JwgTUtxtL9J",
  "key3": "63iMQBT7B3L1g8EFxySYAyHbMaJZE2MPeWFAk6QqnbP5FhinQRaXEFCf1Z8hFXjwceMxyCZDuGPzZzHUjHwegBub",
  "key4": "3dztgzJ1iSVB3GQsPU66GTYhCWDrnnBghUv73EpuANpoG924XQxSCahAiWQ1iLpGWCPoEZk2G7PABBJumP1WFz16",
  "key5": "2HXQVmKLaSZob26qkK3xME3Er2rWiAGoatne7iLzLN86NSg7wgVEifH4pmUQL63KEDQabL4Gmv78NZPSupa6ESd",
  "key6": "5S25gYn3jdyJpth7rYu1RmhVPuv8eMNAuf2mVpLgjMGSPYejKiA7S65MKa9AtHeb4RZbM9XvfJtA6YpuKKiRimUx",
  "key7": "2diskSnS79qt1zaSUhh525SyuqM7speYopbPNig4nVoMwp56QV7UuaWZ68fmz2DiBJH96yAV5wP7WN6HB7uGyMLX",
  "key8": "Ws6P1BpfdvoH6rP96anF7CZ7eJbgkhn6zTXW3vNwAAdJzKFTWQAmGgfynNQ9tUr8dj6dffTyQhWJAiLvpBxJ4Dh",
  "key9": "2UE9GUCPHzsQswjmizVqLvAewooMsEbWciRwe6rhePKRYL1BFeyT1YK9EVXuUAzw6oSmAJyCHuMEgNzuy4itiPpK",
  "key10": "4TpLBJemhVprDUgm3WxkmM32oRk3XKRs1saU1PymaxQrRsk83tkRhpaiwNd5rJh3PA9mQywdDu95CWWsR9QGvRG9",
  "key11": "2RTbCqqYXU3mYFmPerXGrFm43nvyU4iCob9fn9qYvZayrmTMPwKzCkiToraBVGxnC5ZKgzswjbyJ9FNhVBLct1c2",
  "key12": "4pn4zwV9FyFus3oV6LggZZ2NUfAjv9J7NMbaE2PTxEzz8b952neNzJpveek5n5XnUvRC5rgtbS3oR8ZScrRXJ768",
  "key13": "4k4VztiWGGgBnferx6Km6aceEfDD3SsCD9sEvY5J4TsEiLcYvbLqzMaVdPqLRKqA2sVrvH1Y6Chz81HDAyJvnCJc",
  "key14": "5LCjsBwcS5PWCwvHN9EWUTxapfzpX8xD53dn3FFr4KqXQtisB8yFFi3AH5iwJ27z2RU3nmPBdgXFVcmDrA2FRgJ9",
  "key15": "25aRa9heqv8P4LkGqGC7nfyCjth8vChxF5t57M7DEEwcXpXPNDtgCVzWJXh9veSTdKrYYLQokhJN52WU2sQPjRgA",
  "key16": "5LjwbwQE6WQSu6fiVrQcEG4PXq8UAPSvJrT1k4qC4Z2vpBLA8JXkBJrFJdTmnS8kard7yZPLk5DXv188KbKwriuA",
  "key17": "5UheTgxqK7KYU11KTre3vXPMTnE1mjrdSpNZ9kUhPhYVtCzRMYNwksUt5fh9ttvt2gECd1MPAmKnhtd7Zz2xjreh",
  "key18": "4nbWQrUjWxhj9tWXNqBYdW3i9pwDGHdEp8a2p9F4XoTFNQCwzEPgtA1poQ6dzaBpW3paySqe6raFWwxshm3qUv7L",
  "key19": "2XN7KfEQWXUZBvZtAqDyrg7bCUDzgudfSpqARNcRQqdFVUMyCyyFeZCvvkBPoHVAE2UEk5YHxkRtJhzfaUz7JrCx",
  "key20": "3x5CYgMX4uEig2nnC3zJneA1V3yB7FxjN64RnR9F3LNaXNX2h1LxfB5Xvu8QSV6iaNq1xhFjL4fNe5BhZWqC87VZ",
  "key21": "3gbMEqKE6rV1A9xTeDQnYqs2cZ4WaNvo8gbpwe3Nfttc8j2qxm5oZRKTRoz8ARcwVugLjWYJ2fBm93vsh3pgnygZ",
  "key22": "2iFY3ZK4i6gdHe3QvowFTpKpbzQegQWAkgd8X4jigMN5VQUdHgNYXJaxV63cLhnoZHujcbyh3UCsGhZhZqfDKBdt",
  "key23": "21XP2DkBC9GaSrxrrZekRVsUpF5Abws1MysKRy3wqSu9VTJ5iynDza333xMPVTBTK7aEmqZoQAEteBGd6r4qqPB7",
  "key24": "4fivHxK6VxfVxxL5fHmjVVTFh66bvwMtMPhKNGnPZviBU5nhLGkuGkSSgfepNyg1JNEXWDyVv1BdwTNt7jM8vaUG",
  "key25": "2p6EyL5SWMrdCQfVhFoGJRU8xwByNEdBNBBE6amFiPpJccoqDjptT3omsivnDTzhRgXFkgXD2ZvCCSz5RorvFFTi",
  "key26": "3VSZgCNtssm88aJfhrNCbHBvioJjm5iuTDzWgqjGGCoontXW35R6tYoW2jPx43W675UQHPJNpe9S864VrBM7zJSV",
  "key27": "3TxQqcvAwFvZyJeRNGkFP78w7hNBGq18wnPy2BTKQhcES5pbdVeGzLcbxPRoreoYQ8VM9kar5NC61hX4hqzXDfmn",
  "key28": "2EAvPe3UyPLjMcYAYtWdexBkeopfWcZmS6qB5GxVcHTptdW7fLcRzAA6Q2wt2juNsqsP7zGW7W956WdAVzP2FEQz",
  "key29": "3Ds1LR4hR1CYe4mn3hgmMbeUn7Wv2mCC7aAjeFanmXFLqkTVxytxK1SEjaf87s2ab7xT39PfbrvnAuxNhf3FFX32",
  "key30": "2D4xzZFZDuKp6FmEvQXTiaGhkiU557dyGfmTY74vJrdWveMB44feVCX9ogdU4QCFycscHbhSPBpy31KmgdxjX65d",
  "key31": "2bax6Q2h2oEvykJYoSKXppTpmLoFFg5sNT1J6myiMyZJ46fxubJF8UJnLt9bs4Vwfo7pA58i5czMANpWxKgEvMXz",
  "key32": "uJpyqkBBBRrzNfeLCuvo2jC8LD9WPyxHBRx5b7V549hF9cJHq7ZJFQuWZbBbD9st9X5Dtw5h25RokUKzcFwm7qE",
  "key33": "2qRHrsPYRCqaXorR15gj4amuJGwTjPA5KhdrUrUbVfajEBRHZJpaAwLoLQMF48VBVydTmWzV2sQGyeP47U1kXnM3",
  "key34": "2ooyCxpX714XxdTHgJVXPH9iPXfN4q46FsGQgn3B9R5TeV36TXYZGFsNDuTpfF5pvBQKnKicHzgCXbnN3exbB1b",
  "key35": "2G6GFDrc9fjXWoe1xCt81AFR3DJ5ts1sx9awN4ecxAodGLBAGA71XiziqweRK692RXJozFBAptcMgMpKACVb28h9",
  "key36": "2gqLpVGugGUTyPmUQHD23i4r8NnRsftcxNrUE4Q9aR2MNpqYjnVvMrToYq96Kx7nwEPbRE2PYVx6uVsEGsP11ZSP",
  "key37": "76vthdg7WB4rvp28s84fPWkgRDKzu4y1mTg6ZSBbUprnEHriKMP5ZD8fsUytuvwfsnJ5RcUrpM2iQDiLKxqYfwc",
  "key38": "3noabU8GF4qepSfjjRLTDbQ2UNTq6dpVCyLQu38up6doFLqumYvcpfjCTH3YEE5zBKPW1DeRhKEfHp1biqiEQrex",
  "key39": "2NSBz44bQx2QYPX1RUWtQYV5q8M2H34UWiyTTKjtBMDqaqFFgdVnGWHsmwjzjP8bsG2judTjffgMmFCpYejLE9Ju",
  "key40": "5gukcNWqSmh5qJs9Qdjp3uHGx3gsaZFy5529GiDTNzdrp4kCbCbk9RdGGNt5XNTfuW8xpSUeEse6eZa9Q23ASbqe",
  "key41": "ErNcgmoBiUMvue3kDGYR2LWKq55TpRLtjGfmVZuigaW262RxmZX7djsqpyEEbrnVKnHXYYeHxVxnUy7KGfRzW9B",
  "key42": "7DBNAGi8NsjBgXJ5qar88eQVmwiCPXREqgcmEKGh8x75JhfLGQFx2odZMZkK8hSouq8B6ZePczCinKUUAPomHhV",
  "key43": "2DBwjdFHpSsWfnzWaBHoVmB5GRY5naf6mJvT2RAKNanJMSLojMHVDWnH2S8KvyudFpkbQPaJg9QC3cmzg7DezQ6f",
  "key44": "4GoLvUY4VVeR6r3G2btjAt9jufVDReHetaNbbnHZrC4s1R5yBct7KonjEw9jDoiFE6xNu3Sqb1DoEG4BuuW3Yuj"
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
