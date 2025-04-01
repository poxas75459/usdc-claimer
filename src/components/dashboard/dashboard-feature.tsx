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
    "2j8Z4Gbm7aGcGJFv2zM9SsEiUdEEkA616A6kVweKAbkc92MZZSoepd24ymi99p3sK8JFXX1WCCFGfDBG5k9Rms2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1284bYdeXSu5ApFPQ9g4P9RMH44RSjWnP6JrFRbTvCBm6ZPPQXffv2FbtS9k4EqWXzxAZnJLvjfmjf38YwQavoY",
  "key1": "2Up1kn26hUKNtSzEq2DUrG75PYcc3A2zoU4QZdxreTttsNrvm4DhSysQivePteCw1PB8Xp7FViYtbyT76z5WGXfq",
  "key2": "9jh4FTvvP5CHnzqoj6oDKUX9ZVyfEuNVUUUdHiDyEpparN7kpJtnE4e1ECxE3nPUgLeEuicaC7CPrchjo27QsgG",
  "key3": "2kGQkjVmKTBxzr9wc4eMhGHXqz2a7dNpEyu9kYnRzz6to1kbvHfFfZCoA6VCqDRiRpiG61UmEBAczZuENRnQ4Qud",
  "key4": "3UsbEkJKxX2HsGinihWBds1zWi38uDYPo3bvNWePU7K6wBMR6P8TyTWM2x1oHc2ntdRWC9G3UDoqUkLLBnvpnKfv",
  "key5": "2H8RsQEKGEQrdFJGnRaPrpys63jFg9Qa93S7WzNRGFfZDitcJQBWBGUDoNtHT3hkpjRvK9u89xWKe77efe54HnqX",
  "key6": "5EsdcwbF57soNKzpUYKjMJPX2zjNc2gSmkvVyJedjU8n39pnr8FyPhDS4SzMrKVRd6doGS3beHw13eWpubBVs1sw",
  "key7": "4D1jgqb1iEfh8erbtkmH478DQ68MGwSQaSwMzDKuq7kBrFnyjAhiNj9rxPR8CmfoSkstGnwBJPS39aRFVeR7FSyX",
  "key8": "5Sjjnq6brWq5JDUdD6DDTYvYvhb5NccHdyJkKDw5yxpL7QeEArxZ4UgccuXNvYwNJtiiZZgeKwHFHkhD7eGkdeGL",
  "key9": "4vJoCKMRvZbFrCqYEdfbvn5xAi97GPNCLM4rSwHtabfrU1W2bC8gkbKUV8KJVNzSyp2oGzRYqwUEJc3oEovWXR31",
  "key10": "3hp2ShM8cCDogkPBqyR3sb3wyYTBek9Sk5CH7LgNDsxUL8bGf2noFJoadt9hJ1X8m25xyyApRUyHFdYP8WVFUmNo",
  "key11": "2BTqda9U3zpY9YJL39xM2irKgjZGWYFY2Gmp1BXZRdURVe5q3n9DecbuWBP3AnjL3x7EBxtJ6YipmSmnke1YyKQb",
  "key12": "qe77kNCRWtkube3o4D8umGrhxcjUoaZpH95AXJCNXSq3bgVQvCB4Z6Xv1mrBUGm9RoxTgP8VqZuhHFAwPtwx92v",
  "key13": "57oCnkp95a3Gr96KPncq9sZSvAuCwPEBwwkQ7JqpqxfbU5NCbS7YxsC9KSkHF5PenyVeqPNqpVBnhqFGDfpnUVjA",
  "key14": "44w6kndEKtbbV8CRU3BwXh8wcd69Pxv4KixRxySaMWNUZY8qrH6t3tYrGy9cRimocxvnk7naK6MNdpwp6ebfyXgJ",
  "key15": "FUnAg8sULaWjVSEu6tQuGCdP177phQ13X7zYVCrHz5mkzraNFpLB21hFjP4ufViWnckZAwHbTvZj8AtftVmmFmV",
  "key16": "3n3UjvXFBiPeYd448HgD8D7vngUTcHTfqQTjZ3oni9FbkmQuu7zRAxisoH55iEWpYrmEQwv5JvAhsgYJNYqobYb6",
  "key17": "32XLyAfDJuBWosZ8ajidHU1dQZvivajdNhZqsx54qx5ybwQUoF4EXbquLRgoA6KzNM91WWTwLaWmoYH1nw8Kmbez",
  "key18": "4FR2xw2uGj7hQgwNJjBYW7eLYegBxxAtzuUmKQKmmRi8KV5wc5bHg2oSfH7ktMJX2FPbP9Sw86wMGcKFqp92ZevK",
  "key19": "4TdWkPAbsfQEQka3jwKhUv6HJPhEANczYSVSqEMp3PgQxwNqbUh3y5ic6JNfku2hqmSgo79QgR6q7UYWciska7By",
  "key20": "4p5Pu75fFf3Lxx9cSVdof6gnD33un9aHup8cCs1RwSB4MX6xh5rmbkiTYHDtXUZPnkcoT8CLE5cGxoSv5TRPbyuP",
  "key21": "2PjrQpKPaLTRsvo5izAfqkZqVNeTtK5t5ktHZ6CbpJ1cDn3WJXWcoCqjTA4iS3AJmaEvfSJvXDToXt3GMw7ggEaq",
  "key22": "34p4tfrsvDczZHTcNvQNuvUkJjGFZ6AUBXq97omhznxyfNwJvPgwNEwgCJemgDkkECcoENSZDG7pmVNjPPA12EJh",
  "key23": "3KbFSKy5VBcwGz25iZRXSwqy75sVaMy5dYLi9BMDxJGDXnf25LbD5KLAgkXykfRNvdNRNRrG6pKV9uDUnVbLhWHS",
  "key24": "4wbLUfCKg5XrvPUsa15WpRTKN16D5DvQK9CsKPihnJgyUVfQ4Ga9tVTm8XKkLfPjpu5K36tSMZXWMtcF9fPQurtx",
  "key25": "mL9bHRVjSuMz8pgZFPUnbPWe3J9uMgiNiJ69yZuNS5xtMVm712CbTuQtF4T1cChdaLMr1wxf8xWhoU7zr6iEQMA",
  "key26": "5cUkiwvnw7s6qasDWF7Jq91VgdChsqZWm38NXfeNY7camJGNXuavzvh9wgxobZDsX54MDYbqZKfBhkzH97VKunC9",
  "key27": "3gz5aNGaY8zpyUDkP5WFiqHFCLvTC6QGf37FBcfGFe41SB2H4MqmzQcmA28pwwc5iJtbRax4dCXjRBMj7QtxwGAA",
  "key28": "3SuEqcxAz44xC7iqgTvW3P9amYFwkDtCRHeaQgVrnAYqaqEQtGEAwZdFtmZGHjueCCuTetYwHkXxsLECVCmbqudp",
  "key29": "5myGaTcZaeWQy9HAeatiDcdC9Jyx11p1KtYknpCANJWmBcdgu8yJFxqLeo3RWDyYeke4qEd6yEu8dAjLth8VQLJx"
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
