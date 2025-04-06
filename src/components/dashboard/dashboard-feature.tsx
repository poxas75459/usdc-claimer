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
    "3krdEUAuD4GRMAJBjAzEtb6Ai9Dx379fWYooKnzSBEBvekWTu8uG6WaiLoUL2s9mVbmeQqR3rLxYC7fAcUV8ShFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aCUqYpXX3JSzU1QogP9YZyHrWXQDmjBHuABeBe3aUBYyCbHc9xs3bYTkPh1ZA3AyF7GYKToi7uAg6S8DxA9zLTN",
  "key1": "3pmdBVGcTmCYUAJJRm5fYUbr7ieyHuJjQ4UWTvrqKFNipdcUGcSWsXsVGqUzvUnAkYXFRSndbQURinimgFUUaa1D",
  "key2": "kSJSJVZHD8ftk2NctzPrjt9BCDxm5f3ashDXfPoNqmuCVrvWy7ifWdQqxp7VheTiYwRxZ4WdsnLTSpr5ecDjfqz",
  "key3": "2z3ZxXcWD5BY6v1eBjVD9N7ubwXqno2KrSVg9jXE5eFpy4GvFiDNoN4iY1iwsV3XeccMDubi1UmNNLVC7NXGmtk5",
  "key4": "wkApbfABTCacJvH3BZzMx4oWkWpoytwNBHcvBbRNjU8uiMfoG9ajeFH6jQHNCfLCQJwZXrXiemr5yPXhNPpATxQ",
  "key5": "2CajSBkxaDobuD4EQWBc3qbyf7gCvY3vJmRmJDyNBBrCj9zTsMRYcuPbf49VpPRRSLSWYy6AFKXQgUy8JDNNmBkb",
  "key6": "3BLGFj7YqC12MJabqDfKocUPo2f8z74GX9befrjARGcDnUzAsZBgi49v2kkG4rH1DpSf6MDnK5R5r92Gx1fcDF19",
  "key7": "2r8BeKLp62FDNgCpqPYgXbEQKpVSioe7DkoEe3eY3TzEmNbuHuQjKiqi45D7R6ky2pZVKJdj7c2yxQvikXn65kaf",
  "key8": "bFqkYiWgUdc4LoXkGw3VFqL95uHCtpb1YV42jr3jDNQTS5YPFB2n7nmM8RTGoNJjRQfihdzP3aqCzKMAYQfFCJA",
  "key9": "4rxZW1xfRAK4JtKxrcUrAZ3M7ivTE3BhU2fdyrgWZbYUjAvK9EbtUF6mDE3Loqfgp9DcxL3GLMfkpBigWPSmQrZX",
  "key10": "2HCB5aJHXZk3r9Xa7YWTZn9tcxsaZp8KKq75LvAqebvWXZe22QjvvG9WfuS2kVKPbMzKCjYZ5XHnXKYpVjEoVKxq",
  "key11": "3Y6UtNBsK4VbjQ1hyne919eMbfH74vdxFrN52mhayje16pyPYjGT7Vb8vKMoA9fee14kBTqx7PXJcrACMuQ1XyqE",
  "key12": "ABrVDjE8EqJcWm9nQSpvA4Qj1jQ9gyhCjtDa8PsrT9atiU3JXVaXfaLfyBCZwRkv3zJoBfkPTJQ1eFt9jxpgoYM",
  "key13": "4PLRm857NzMqgezsgU3aoueCMbbfMzUWVVNUpJpKsVcbThnAWa316F7EvjTTVuvAzLfwqACvQKjQbh2Y4rGhsDqz",
  "key14": "5nVDFMsY33B8Kh36qSPG6eUgan2DYd4FCGNsfYFeMTVA4UCm4czWHqF81JegtPaj4M6d7X9hVV41reSSKYuX5zt8",
  "key15": "WV9WT2QdC29z56DcU1cvK9dAfQPUUtHi1QDiVg2yb2Usk44dgUX8CPH8V5i1ZAHd8XDvqzxgobRNaTQeJMh1xTA",
  "key16": "66qxFRjjhUL5Lrkc8ezC4zLmcuBonDauUzCGePHGtQxhbDpo2Cp63o6A61vcv53tbQfqZhAXQfEJwt2W6bBAgtFx",
  "key17": "z8u8WNZvcJG4BLfgNKNbZum6DXk7iqZPfjMLN6GowrTxjk2mZsQNfAVr8Y2BMtQVJTSRSFNmay5nnnLbZwbMYNf",
  "key18": "4fPNgXAxU7UpEy59r52akPxw3Juhas8ScYhp7sszt6XmhcgrDiYtqM2TxxuhcvPxmF3ko7bxnqjNmvaYH5CEGpUo",
  "key19": "4FGoK6qGQiT96gmnSvutvsN6SNZKNv6JPWfUN8UUtQtcmqvLTJzUSH5Ff9h7TcTVFdZTqJewbnXBTW497nNfHSzo",
  "key20": "2D3XiN29qYkix5VjjoupuWhAR9xYo4pmQCcsuHgJQmfDg3R9pPAuNYvqNyA6XFeyouNFBE2BFpkRt5RkCbaYZuPL",
  "key21": "3MDCkenmAwYikqS8ZELL3o64uz3NbLMatw8kQ6Jk9VePbKtvueYWtZahZLYLpYXVCwDptBsTjGsFbvMzp7AgLdu2",
  "key22": "5qtzZzn8YGyLMTX35YPT1mcAnjivTKuPpDYrcycd8LnfuU1obj5HUdLvHZpSqC4RZmBytqgh2uifHTGWkJHZEQ7Y",
  "key23": "5N4vjnuBqpdWD5crdtSuui7Bkr8EUkkLdTxN79JHuZ42raezyimzquUDHRbPorMqB8TRFVJUP831TdZ3jcbRX6Xf",
  "key24": "4vTsevwG9f9KnCCysNUe1xCbVVZyTc24ZDxKWtZ34QafCLxUcPsP3WvXtoL3A3GoVYx1sZ79dFDgVwULeN1u4Uso",
  "key25": "B5pnRN6faTNGL2X4XzXJKM5fspPi7EP4p7SPuqYwB7p9RYLSQynMnmx7nDm3YuE3z88p8sA7EPANoNRGxgtPrfk",
  "key26": "2BMoQi9ezb57oyUoB7Qa1pyftR2b5Bmb9BR8uLQ4PVrrHbFq13FCAhYvi3MqG55rjsp4KirqtBu7T6HJ1KeGp3G7"
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
