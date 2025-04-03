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
    "3bTG3mwrXb3Yrb4db4oJE6riwZJdZdBUBsPE6vGuvTcoMpNbN9udQT37JxC7s2V52hG6PowQt7nwmwghGb79mue8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iJXAeJoPViiTz6GqbrndR3jjQJwQEPh3yGex7Hj8hS3nLRmf696TvykhYwjoYFLvcQvUSzFd24jvB3SBBURwVxZ",
  "key1": "2EChfboQhEG5wD6oUVsaC41HVf1cdwh7Kz9UNM8DJcNxCJnNoBrxBFCHctgjZXXvQS2VMGhqomEGnKhiSBhrdtPa",
  "key2": "2iJcVuFr7EQaaas5Pgehk63fGN1J1YbFJ7Ji4m4HhTmQVMHYKX7jKBiSJsaW4t1S8JKSNGs6yqwmjfC7PFDdrAYp",
  "key3": "3wBqa6PMPHwr9a1uKyLj3idpCFLuFNUo7NwtJepbnFHthPNefahffznKMCFxN8guMmCyWsaGFtEFTwBVsTUmAeta",
  "key4": "55hEZhN4fgWrwGST7oHayWA7qLKDm75gF4q8G4B7dDZHxMyTowWq8H8CtKuqPLS4FvtknRn2DzeAYwAwVuzuVSz7",
  "key5": "5m5VM3wm2obgce11G5LTt7UrYCTYxGXd7LRt3GVjW6ig9TDvqF5nuLtZvpmMF5oZPuaqA7ranXEvfcBWau3rjdhW",
  "key6": "4UedUDYByDm4yQHx2hb8WCXCupnKNYj8QRASCzxFkfAc7iih1qTdj8hmvvVt3D45GY8WRtJ6u9dgWkUSbwE2gtV7",
  "key7": "5t3xQPewuLKKe1kWxuX2j3z3cGYdEiA9qFCXxcC4YS1N1PRBG7pJKCwNCnwEjnR2oU64BtwzwZZjfYo4B5fwkByS",
  "key8": "4dvwbn5f9QqAyDz7tVcv4br3S3r9fM7EugybNayMLynjFQ6nDync3QMKk4P9WBycZX53qBsEjknYpQoAqn2syha8",
  "key9": "id8r2G2WeZukpX1a9moyBpE4qLR1xaYq72wT8cXL8p5N3MHSLqy3mEEtem6pEynRxzuahZkjCtsvWbZCnZZqjbt",
  "key10": "38aYQYpJBpsLXg5swSu1jN3FaSJKMKaap7Cj8WFqw5SV9QxfCQaj2mvMCFgRePu7kpRPUDBPur57e59EAptKh8b2",
  "key11": "5dkuLsp2HJxYeWAJnkvSSHe2xdnMseHJC4GaxyzBsCqwgayoFvtyf4X7cZmqKx4bKcRi25jdH8pjzvC2aSkzfzjk",
  "key12": "3QYwobLZfMhfhrcGNPJRTE5GE3uDWvTW4xgbWaepg4a2Gfgy2EDEBPwAo8fHYrvHGuWuEpXbvvsnAP4MBMeZawbC",
  "key13": "C1y8dnUFTeqJs3FeDRRpGaUQe3vPjaTfKt2TZqvW8W2y93SjCvJiAFYiS9zspcTJvKm1YWd8gEXmCk2dBqyuarZ",
  "key14": "3mEQx3N2tkj6msGiSigngjKXVK37qMVtJtQRSVSz9TvBaKQPMsnNF14A6F4fSyPqdRAhNHWere1wAsLvErJTXbdY",
  "key15": "4o6Mqe3fHkNSYefuvfL6GP57xeFqgDqM4Y4JLSo8dKUtgb14qhg9Ejy8SbRPowBFmYPs6EyNTczsu3t4auUMgT3z",
  "key16": "5Yp9yi43uv6Spk8RU3Wx1HLefSHbQvELZbfcpybhu8DNNgNBSMecp5EAPCxvkddubS11vY4pVRe8LA6Rgp7VLBw4",
  "key17": "5yjeATtMs2ZHTuSDte2RkkZisUBjgUzL6LqUHt5MEGfRh2RYkRNefuFKjNPx2Weq4uJfXgC9xnPuBaCBwHjLHzRK",
  "key18": "53QcfnRen4Kf32waSyErquznbtHP8beQtk7qiodMQHWNYdNixgTgAzHPtFhzNM2os59uRMqUDZX6WX7WBMqh5ycx",
  "key19": "2MkEzZk11iSDc18oyGZ7MHMwZ6z5vd8hyzQ6gbBMY59Nk41CxCxU7HBCmaJz41pi3KhRS75HXEwPqdy7XGncpnRR",
  "key20": "27qUZfaMKZUrFNgozuoVVujW5YdA7GLtrjSG68RcSAFKmVAGCfi92Mmyeo351vjWy5BCVoBnH12YYKKB2Pp2rVuz",
  "key21": "3UCDuvD8r3sLsCpSVve4wAq1syBJjsCib4PZ8VJsQKfJ8eaqGMiyMbY8ZeVPW7jKypkki62PhvqTfZW8WX9tq6F5",
  "key22": "37z6sDDkLFRHspJ1fUuZnwEVVJNBKZ8bjC9vhqYQWegWc3HhW5bCDYUiKKxb237k2MSa3vsqRKpJFJFQxRWTgrx",
  "key23": "2Lmp3Yr64LM9CX1SCGmHjn5RLWz8LekFq45xcHePTzy9cyiQeAtsw4aEve2zr22YfQPFW2v4v3MjAVwENpgafPke",
  "key24": "oswx88qabykvvqLJpAm8oyu7ArqMo4XGwn8QWiVyMxhFgNmwDRC4mu9AGmhmp5Zea5tD2mcz1kfeDHYq4D2c6zr",
  "key25": "5GZZRmxzKmTZZkRpQToGYB1YmzBcwaB3LhxwKz6J5hEiJ1dbs6mfPNYcxNdGuZwnkzkMmudNz6otf9zvgxABhuef",
  "key26": "8HBPxH88kUDMpit1n7pEjta1nMHdwiMNQxvM1qh3Uyi9VHG4mLbyj2tvDZQMVQ5Y4bBdqnWUp7JaoFd5FM65qtX",
  "key27": "41arqHsfBNNxy2cDcJpr6CzMBJ35e5Dz2eQactu9aEkyL6fhSFwhWVkUvARqmFMMNdopsN154PJ7gfYqAeomcN1T",
  "key28": "4GkHdkWN5H5jMm6fHWmLAdd2X1Lm7uvyyj4KDktf4Zb1jfLnRHTNwf7wzFus7vjKmCffTxMs4UnC9yduyrXGcDoc"
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
