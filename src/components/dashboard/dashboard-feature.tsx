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
    "UqMNoH2W9ix7TLziB2YZLYAwpMVxf2xxYQgCncrEp3jNxgFfDo5iKpQgJyKEPAXeS5DiVL2aukG4Jgvpj6REJWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fsbotHLoReJGjT6w9vnuY1HBcyXq7LYmPRUHXWydzTQfhS4oBAGK7MwyZbi9YmTjRDYU9YqaG6JHLVrfSLno4nM",
  "key1": "uYuHW7JFbpUbh9pm36hePbpGbiy9kaL4DfHQPmf46UGo8PBN8kAJTebfrEF1h67gmZTyj4rxcsphrCVJTskrnja",
  "key2": "2uXiMoi5pG3dtud6uyfYWMwgqfLvWFmEeZg6jTKkxto7rSx9Y57qARu38B6bKpSgQktjv78Zy3NWRoEtdThp8kLH",
  "key3": "57ZnrRj9wHkAMKMU3TYkSQQz5jpCc19Z5ixAGgRRrxMtQ3GGvrX6T7zU6JDqs9i3iLeUXu232n7yCNZM4HNbRaM4",
  "key4": "3RhjgeME8B9SxXDWtQ8vHmmEPX8mDEeG18d77n4bh1yoRDnCHGVkEVm5owabNe747VJ7vE86ytZg772bATuU24xM",
  "key5": "4m876oGdvckoquWgtB6gnXScSzfdU4mbouiXU8pR9PNS4MgE8BrnEUBk5JGLG1HcbT3MtD4gpQFq5Ziz4AUWj7DY",
  "key6": "3Pm7n5apa5EbE2HXMM9c17u1nJarmSz6diaF5CdB1fCpudrJSGieRAucSrhZY9nNJXTyETgMVLCHddW5PCPqvYFS",
  "key7": "YR5VAQoCBtKMaoAecWuPwoYNs7k1CeZYvYA9aJkaWZqQtcvkQPfaSYKTkPLuWcLZXJkH81cqgTvkZ8c8B6LQzzP",
  "key8": "3VYRCQLiqJQSmVP7xCwgLHrS5wJGBQ5QDLstzsWKXriqG7i5rKUFYQ1GgoT3vCfbGw1MoCJxCmrDW2iPN1x1wBHH",
  "key9": "3jLKpXoytUDmsMtgnc5r9UTjmUmT9CNqXtSKNgqYjTNrsYnwv6C6ARmJdkrSoDiYFvmUoqBzjdSobcpRYqguV9ui",
  "key10": "31ardrYjh8ofvu2XWAtmNMDWXqUNnN5h1huohmqL4xipZV9YLxfG7qjGxVMwgoV1s5q6y2ahMSwp2A7gt6rA8Xib",
  "key11": "5opQBNFLzDaLLMMkpeod9nKH9h3bVr8xkrbnjgSw3Y3yh7snL9t2dutZ8n5KBGBUwXuSmmsZhaSyygnj8Ey5Hz4h",
  "key12": "4RSCwGNrZMsEm2VXnKFVi5Rv8rQEr6wRnJnNb8GXjuPu6J63b1BvnzB1MuaNx3R4mcLrLJxipn4csmyhHHUCKDAJ",
  "key13": "3bG4eBBjiwkQR7isaad7HTdrzViRbjBUGTje75TkTC5ogfbvCBS8JemURdfz6UQKfNk62X89g4h5wzX9wfbRdEq",
  "key14": "5k3mKxXWYfzaku5u4eqeRtpFey6C6ZGZj3KTpxZxoAcppLomHRRdxGTxRVvAWzV54bbzJ79qmpeoEJppHUaUoRph",
  "key15": "3nXHdkNXqnTyHyhzTLhts3TMv4jv462ycmfZEaRGWGWmXav7saVaor4BaBod3EXnWuvEJe2rnyBJ5dewMPN7fnTf",
  "key16": "9tgbVpViSwkNdWopXt35MGFYtXBvpxNgwN3yurjkMHMRGoUTFjvrVCnUX7YUs6SJnPVq7C9A5AMTbgdhBMNUsxX",
  "key17": "5ZGWnL2TKCDAJXUdximKFY2ZxEgQ5kcthHQ8Cvbg4uvLP3KdqnZJXFh6sbuYhJ83oztcFqpVXvyVoKAErdyxkdJW",
  "key18": "3kzvbwx6R4FfAoWiwQYHAN9ioYd8WRms83izvMKAEdcEU88SZzKvGm9oCsYTXTXvQxv39M2yPZwQX7ifwpSTpvfV",
  "key19": "2YApHiDbF4duNw1ygvnVJPVyv3mPsUFvBwACGPzsYzjudgJPfBNbbf9GuprRZxoHQvdNR9NZdq3SxQcKbE7Cx4A9",
  "key20": "2yvCLSuv1pHra3Zrz49TWidXPPTm18mK1gVRyuAEBUFUk5gGgMw9ZTDjJRupcyhez1PZbP22aabUpShGFeV4JLb3",
  "key21": "4k671gcVWR5GTevJi88HWDAzZCQEsDSZHY5HwbDFtyEZpeKWB6HD2b7nTJJPHhwNKVheJjTqNhFzjCLPirAZ7zBM",
  "key22": "3MatYe9miUHi6kX18Z78ZjYhGFtyBzuz7d51W3jvZzjDPGSFSubdoATSP8hGExE57intyLC2CXoPP2UHSJBJYJCj",
  "key23": "5yqbYrSjvphwZWWQps1865eF9hvpXuYLE6E1rbLikw99f6mYRPsKjMoVYd18NqV4NUjMWctodaAGdQY9QfuSjgcX",
  "key24": "2CmM2ikZE11ZdTocjGrQARkg1TmKWqazAwMr2q7SqFf3oMGBySPcXocPXBsbVb3hpFk1v2uw2QTJ1UEUgLzhAbx8"
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
