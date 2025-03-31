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
    "3LBHsyNU2CN3429ikKdNfWe68CdnxKvHT2eS61FgKrWtDKEKUbveM1odoFrF1hqJc4FvZy3xduGgQMYFPJmmZynM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPTq4NFL72UdZhMM5K18aXxRTzNUbf78vRwoX4to2N1nGxvzXPxjTHu2fEbLWUY95fUKYDbD6fL9Xi6Y6yGRtmv",
  "key1": "3FXgPSM2fFWXzrNq4mpu8BYxP6XzmK3XrkwHuE6vMa261kG92rwRTJtmSW8J7xT3pyLKZXG3NQq2Sz9iSd3tLB8c",
  "key2": "3ptfyGYGMCQMQez6FJNtq895SHpWMPQti7mZwMzxz43KonRD1aMaLMaD3cgCfq9MsRjjTVFc2K8P4vBez5Xb896C",
  "key3": "2wB5qYBDy1Lkqqws5cQJmXc23vYD4pKBCTB2qrQeevoYopLP4w2RNmrKoVZRRjaxgdvi67hzYbptPs5wZqq9fmhz",
  "key4": "kt2dx3TZXnwCf5ta2EvLJz5jhVvAeYk3rqPqKv7GP4wzADig7dT2HUHmdpPeapozFawFhK3Jqvd8iqpknv9tByn",
  "key5": "k1vgizkLmYxKavqNTahtpRFaKHQcM6XLktkNmFYbah1EjxwB58urJJsXrsCa9aXea1kNDvRSsmZuRhKRzLJobVB",
  "key6": "2ZczsP525DR7t6v6Bbn6kZ8JJernra4Q8o4BeVmcyTZnJfr7zNMtZxUs7QbN1V94nNs2XbzkS1waEwh9RCcbxdbf",
  "key7": "53sXjrhKV2XSqk2ryQVnMWc1t8wDZ4pZxHdqepwqs56ikrgf5YQvz45Bpms95mLwRNZxD6cfJBcGuyfh1jgUFxqF",
  "key8": "4E4kEJeRXmyCSGQCS4B5sKrd34pktjbu6S8UDK9ZQfjmRsDZv7SB1jUXidAqCmYYkCtUjM6vMZN1ztSAyFDoKg4U",
  "key9": "4GubRnZvimTPE33E5jchLMCakQLhjdXPzEjKnaw5x5pcWYesC65Lzu8VjAXNV8F5c1srza78rvJiqfWZG6vL1fJM",
  "key10": "5L7gErw1aC9uxS2t3zttcKLvYBWYBWpjGaawQDUT726EHJ7NHsPiJjYpmZqEj92VSAiv8H9TCVjUQhjBdpVTEVmX",
  "key11": "aWkQJq1mn3u7ieRVnkuxuh2mJH4dA6LgjjbAtsBBZEPmj3g2eDR8MecmhyDgNXBmiao5q1e9Bgd2AC9BXL3FPmU",
  "key12": "4quFdN1bme5zyTwqo4MYjte24cSQ7FFrNigsb69YKnSfLEydYKF2sLyJfJLKWw9ps3vABvkFw6EXKjXHTj93hy3b",
  "key13": "4cv9E2YzMpQ67dVtezEy5ZefsVFAP8cuJCJiFwyXozPXx5uu6XSAARWnLJmUdnugyLWZj9hZXcXjM7u8mHtD4wSk",
  "key14": "56QFfScGiYZyjm8dhVhGg6dvFkoRcrQo2DZvccM6wY9Rnm8zYLiWaSH2SE7pbVRfNw1wzvHmNtpvUiyNihr5CpPZ",
  "key15": "HLZWyYR576CHYvgLZGUqbfFbfBcUEg2QYXk6xb5P5uoJCSUeUqaF5WwDeNLJmffGX5h5u6ygYq9gRqDM3B7UJ6D",
  "key16": "3uHDwJLnkpMsKzEoMxsTXxFzc8hhvVKARqLxUjVPggcRcvJz4dL2611M3DoZjyBVXejeYVLvtH9nAZNEj65GMa6P",
  "key17": "N8zkJ2Yt66KEZdC3X1TCvKn3PkKHtP98DJt4fRas4rPzr5CJCWov6Rx3E5LjubroJnHPkkhZBq6oux47oahCd9r",
  "key18": "3mTkU7gjFDhHfENt1DUYq7w4zXSUztWso8TitAvSEfPCgZCEkqnvWVhLitbdSkcMtSNWutu8zS1mQYn7KVfKK23u",
  "key19": "3UsBPbnU8fXtbHfXeLF4dmHEo35ZnavHCNDL9EeJfVzCVKUqjTNnE92D7SwC4tkSTEC8q6ybP32RbTorWuGJ2c5i",
  "key20": "5uA8ZMzC6KbSw2bdisYoCcCG8kRHbrtY8X62m65RXhaUCRHtLqfAvTv8rzaeEXCHbKPLTPc34jmTqTnPghukVYQE",
  "key21": "3CrpyxNcGWTzDwWM4tRrEvk1eAg3GfYf844tLRThyuD9CUBEMvq8RJ3rgDZS1tXgba55QGmFx4dfS1wPDe4ppmCd",
  "key22": "63k2n5hUDc6V5ZbndqW8sE57kqc57FCELsJkgZS791fwcN4L7x1GkpF7zzpsDoaKeiNHhTHJcL7gt8sYUZnQNdqv",
  "key23": "2CxuYGb77kfEzmWbvfiUQjFecEEuxAeV7RkVA2BhDFUhnPrrZkAgYKZX7pSqco9fbqS9mfY8TcNXfVNXjHgZi2SE",
  "key24": "3a2jXtDMw2o5hCsEFJSt4sV5Hd8E5WMxHcvTyFj1ncbDea59X4XbXbomfHaYr2hPM5ndwwBnsQTmPXQiiEsXFXJY"
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
