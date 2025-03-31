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
    "5UgkoFk7fxz4UK4ArDu8zVxAz6eGSJZk3r7LSnQxDA5tkhfACtBFhu2QD2t1EjhVCJiPUdyAYVih5xj13KCXLUyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tHGCFJyfbMXG8j65ioyN7WTFPWp3mDvAhgosfE2nGLuY5CCRYCvsrQS6y4xLvxtSM91bphTMsghBRbwqSxzvxNS",
  "key1": "8p86gztqAH2UGjiimDLQ7uNGp6KgeqbyqS8NBjDiKXdQtsJHmWi7TjL6dDyBoU3ZuU3YusTCMaACi7JVxHn46mF",
  "key2": "2ZU7L3cXgPBwnXqgooxvdU4GAxAEoKEEY4RxfQMV7EsHSHgV39VWG1qFd8Grvzn8VEsGetHEVMjH8UMQA2iLo23r",
  "key3": "4Rt6S9UHAbqHwZoqFEzYYxcuxfgKiRgKCTxDKAMCK6nnxFBuDQXrNNkVXVQWrfAfzFaexdE9QemjvUt4Awtr4RB5",
  "key4": "tGQtXPRDzu8dhjFS1LD8fd6ncMh2GQW5EAhBAY5wf2EPKSuxRuC6HZCbthLfFx1JibfXUNBSAzPwW4YrypiZEpb",
  "key5": "4m7B6RrETRDyCwFwpVrRiHX9kqbJS67EB8drYNt94Ji1hsRuRHpaBrFhmkYKkbmW7NSN7oH3xjZinP8DHXr8nHWp",
  "key6": "5Dvg7qYrMeor8JPpki54JXGpQdJ9zYtFLkmNrGdSaNp8TQcVhPf3spVaFEuMFcbJAFh62T4vihRfNCzQEZ5G8GAE",
  "key7": "TinnGEYZTdSqsuLruexV2qtgtrf6wsr2C5giVvETUt27ucRm5Xj5dMWwopDP9G3Ymh3N5YeXWdn2nCVCezNQJVy",
  "key8": "4eo75ySwMpMdWkN4dRS1pXN87Ns8uvrAsTmLNpSWmY1aBkjuxbrb7Cn5YD8XvvuNAGEkbPELHY99UfYfdSQfUr3G",
  "key9": "2oW6nzwxof2Q1X92rfPqWdiAgW47ySj8imDQe5K26GqC2pCfwHi2v7A99sJeJGptUcSVJw7rsrp9ywGDyL4RFAKQ",
  "key10": "5evkGbSZFuYhBBNatVHD5e9qi5PxovQSa6j1dvcchmXG34DrknistwkHmKVmnUU9XZkcTqk3zogkbxr1oWz4McyV",
  "key11": "4CACQ92a1CxENFSzVGUd3zgNuNHaHM5KDidpuXZ6W1mG1ZmurRrNxWF42Cp9AvdrG66HVQ3X29tC8WyNRom7L7DP",
  "key12": "591Tf8iS6o6yfhZptuk4LxoKPG3QBr7spHh5a4CKULhbUU4CqNDHK6CtKAtP1zkTgA7VBkJcTT8ZHcYFYBfcjCHQ",
  "key13": "2JGRW6xxkvLNzB8KA4sEvFhyFPsMaZAVTcizUafFzGoQ4VWZjRjPzvA5Poor9hT93LYyXYF69yW8BKL83ZjpRxug",
  "key14": "2y27Wtx1BFzU2uKkTdMNPyikqG2zAax9BxUUQ5DioyS2bSbNArf6FVR2pQGWnuN6Bq6NaYL2ohzsRr6UWxXst56z",
  "key15": "uqJ8HLmKGDS24xaFJ71YUNAHUWFpiKk7q16xecboAc59zMAHZjzpi6UvmgZZp5GeU3NPQ579EhyXiEBMvAogg9N",
  "key16": "5ydqGpKW2R8r6bHeA4vcEXPjaNgbpVnUETop8wAhr9Fm1Uv8bgJXbkvJuEEDQ6VajiyGiayyFEa3AhszsmdqNwEJ",
  "key17": "3txDGx3TnBMMY5uo6phfJfAbPTWHxAmgjmkBygmT6ng3zJwqHDPmwFTyWrA8Q93riUi2hGYq2xWETKnLDuL4tcdU",
  "key18": "Zo9r8i8AswYUkPfyYbP6wFnWdTftfmXz91b3RZEoEZyh98AAsof8cywzjRRDzQrm3QZ6jkLU1EKv9qEVgs4eUk6",
  "key19": "5gDpXVRdwGmv9KC2cFHf6tavxNF4quXZZ8MWaDRbVxXKPyTeJrMRESbEkGEAYuMa7oKZaPitPavMDEKuvCtyyxRi",
  "key20": "4wrwSeLabTXBRvVPCdGS4AQS9qhxXd1MaP31WXNdKVwrdLXe79jLsNzQRxQh3dZXxTwrNqjE7XWGv7ycDegYjo84",
  "key21": "oSkSn2mrrDeuC5h4H5FYwF4Cmxs1ox2zMrRDSmZv7L15dQkBDkKxNbjnSuKDJgJq7UhETDuRju7Rpm6NWikXti1",
  "key22": "4W7KdcVKGa3eF89bS2opHREokir8eQDbZuwr1EseWZqqzc95341XJd9MBNpuWrCxEFhfGLNcDt57G8K165Vo47Ea",
  "key23": "2zy6QqvoU199xvhKuRfeXcdyCBrLU31YNFySKZouCaoL27zV95vpkAbz5HM4vmkVdrDGx4CsidaX7gDJ7zevk7pV",
  "key24": "5xYFK58GzvtQuVkWaDK4sC1dPxxhxRYjpX6ctpn6BpDUJYQ2vdhgHvDLvgokfm3YbSyaJQ4srfxwykv48yJmVV6C",
  "key25": "4bed6gJ3PXkuhphceifurXHFJwXhbkEktwvGpQLNQub1uAPMHbYWDsxUJgWe8wVdaXmhLrTJuZvqpvGNtZroivVd",
  "key26": "5Lh6Cqeby48aGR7KebdGGPfEwHnje2a1qqM4Xn5ptEv6W5SKSJ4UWFemnvfWAuyPb4ZEk78zdL3sdZFvL8qg9fpq",
  "key27": "23MgqCiqdNiR5TQfsDEagzWqJeiNELKMDy9rzrW5B7xPUNEaa4t11PYR8WJUkLA48uDDCtMzW1MSWBcqVnwfwyLe",
  "key28": "2RjbpojpLXgEzYLGouWQrXcK3Dxk7ph6Tuk2SLdb25GxmtdBbNRdXoykTd8X7Wxpmo7Q98USeVNMWAGG1YoWTHu2",
  "key29": "2kK721LsmbFKgreJGZk6TqvqHcFDmr8DFARaENnCtc41PvFr2oHBmDez6jFAGSSDaP4BXpJJwRUjNZXTm5iPmfm7",
  "key30": "4NvAAd18r4omoLLbM72rJvoNxGweZVwuRqoN7fTUpmmH3xdoKYT9syc8jwJeDpKunRfAuUCXKDigLSyh8P3DGU1Y",
  "key31": "3kQZB83ZdR9pvRanbc36YNPqYR3Gt9SN4VXxKgbpqiJn5DWvXa4TmQ9cjXVNedwsFwCAzzkEhbYYBYo7f9R53M96",
  "key32": "2ShHq1n4uRBihpH33XrWKaN2pecJy1GrHNvghSHanfMHhd1j9TNhXF9AyRyWZG7ZeqrG3wVjG5H8x8Atb8HDiEvN",
  "key33": "4ZL51o7h6njpJLeUD3KUcVV7GwhYWvo3aundMcuS8ijJiSNzPDa3VqNF1xAcQp4fPqGBrQmbeDELTN3sdzjvBeau",
  "key34": "dtedbNs8cmZZwUrMwJDJy5w49R6UhY582gzWgC4UemJ2g8zXbekmC27wcbTvEJXefxbAnMVxSVtNoybMX8i8mu6",
  "key35": "3LsL5cczKnj1UPNVmrnn5dHxwJXA9dC1S7r5XCRhiRnJbA79kQrb5fMSQXj8jPhvSK38ax5d92cioLKcQkknKS7d",
  "key36": "2t2EsxXcVbWufB6qAwdXM2sCTJfXFtcw9BdokacLaPv7BTHHde1pFadaCfTwBZaRLj5TAeLVnsGRwwZ8iQ26Bzsm",
  "key37": "3xkfWgxzPEagHD9Rtr7D8CSYnF7KCyEMVFHhgr6Z5gybFhrCrQLDRH6kG5qxK8DFfpMnEusFfjPndKeWc7o3mM6w"
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
