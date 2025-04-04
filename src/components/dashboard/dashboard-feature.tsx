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
    "5xFKEkUXWmjqMiu4ZTd5FY3ZEsvkiDJ4R8uqHmWWwVg25XHg3duncfPziv5LyvyYihKLm8J42aUehi3WbNj5xQMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDg5uxawbzBsFYFBAY4kzBrCjDwZuQgbi3uuNHXV3jzUcLei5oSqZamrvwrmbw8FDuhuHxtpjsRkrb57uQbjq5t",
  "key1": "5JfQBzYyqjSRfQ2Me5cCTA3qtCyboTNG8CaZ1CJ9whgFRwKq9nLfS2wZrqoEWZpp1fb78NHTxy62upjCjQ8SQRsd",
  "key2": "5CaKWbfcgc6C32aKjVBBPB7KSDrNB896onXKmTJRN67Nd4Uvwt7NNtvEcDzS5mMszuS7i2GnuvNoFXsMKnDAVsWf",
  "key3": "3S9eVeS9fZor3UDnUzSeudFbF5f9vCSbgKEpJRRqSTWP7qgvknz1XcpnuMLWkQZpk7TPgQXXDKVUehPGZYrwBUpF",
  "key4": "5z5d2hEf7SJChP7q2JZpYnunmEwhmtA31q9DCkYt8hxdrtNbpCSFccTfFQsv2SB8bwAQUPvbKQuxikvjZGFxzcvf",
  "key5": "maFjKE9UnTbiQH6tBP6EfJFekUgg1tSAKpjcmFGFWX54k5y9CavMhTqjKUsaS6nsXVgtkcPHENmD3saYve2hjfw",
  "key6": "5fhA9rjp6TY6GMc4XwXZrkHpxdtgUhJFxNuG5Ppp4bnuRvdFB66bT8XzuPThpXjhQ3qEBXZar7WsBV2qzDdH2vgV",
  "key7": "2gjA8UuSAYn9gxvLmsKdsB7R8ybAKQ5XQjmgYknTmmt6rbKta7a4dGP3eWpUBZs53sv81LjuP5Wotxe8KFbDweoh",
  "key8": "3zSTNptCAFz9h2svovuPici91Hc7pt6PMVd4SQxryfvz9HGFsuRufNaRDrr5AWcMXpVZRrxcQeojr2r9kEtm5FpR",
  "key9": "47grTCznD3tdEJMVD6jd6TMEZeqj7F1aFMHa5xQtjN8Z1vozsDeDRvDLekzZqZ7WdCuRxMvCkfuURkVsVkZS2Tas",
  "key10": "2rVq9ZqNQPo1ujdpsgWXFipSPkwfN57b3JXiWn5sNWSgiLU2op9jUNNZnhEZRntyhNuLeybfyQf5ADYHXboXGwvP",
  "key11": "3ej9Rbw5JF3B8r4YrniHwcBbSmkPMQCdJqjYggR5QiMLCTgE6maGqgJJdKE6gDXyC1jaaW5HxmFaUpbak54SqcoZ",
  "key12": "5MVyMe154gTzXp8LHrzefhzj8uNcJfVPN4CoroaK5r2tRwyyqEwfy98xrSqZPuKzXNMc1RnU3u64bSGbypD8xYUR",
  "key13": "i8N6NERzLtTb46YdyJ2BWi5RV593dfuSLxm3zHYkgsiN1osnHn271EVpd6QWMcBYFruUez12f1ZGBzLYLnjMn1a",
  "key14": "2EB8taX1YtxxYHt7zbFs8sevs3NnhwY5djHxYyCCxZiA1q3MbDNnRxTmeEuDLjdvnmBDNwg3uqhVuQAWJA4iW9Sv",
  "key15": "2vsocvJKaEsbQi7cLg11tvwQhi5WpJvdzPxbwuCpUQuyWnWHY1uPpsgAcZStpdDmdipfv4iyF7e1g6ndBQG3ztXj",
  "key16": "4MFLiDfaC3F3sh9Ffj4YxnsmeqtDUtHDjozXCJiKNtca84MygXV4n19pTqzHq29TdZhrRexRXcgdo1xa5vCUdZKK",
  "key17": "2QYEbbHxfAs1uoRGE7DTZCSNYFfTxSkHNWV9RA9vq64HGsHUDHem19wAunGkHTjafumNVN2L4yfH1TfAbjduyRzy",
  "key18": "5TqKWjt6zLE2MBHwdAwJJWiAVe1zh2oJVmRE2A3iNKaZJzACPKNpAyKtbaCUwCUCCZUgbz7cNvoMGs6UnRTYDFKW",
  "key19": "7B9ym9p12wcTNfLCfLUgDkwSzWKkNoiEPKH5bW34rsnk8of3MfHh7otGev63FjmpPRHLD6XUMKvLFszbyfVTm4T",
  "key20": "2jksZBmLh8Hu4ZtfkZVXGUKM12rLtsA66TcbKEYrF4WNk3uvFVpD8nc26shbzafUweJjv1uFQRMKEnsoqELrmyDd",
  "key21": "RsuUdJK5hQgHTWo1uHDi3hwPXWfMqz52gzU5Ho3vRkGYy4VsFmyhJGMGyqoeNoLsVT75XgndaQ7eE7qbn2a8wHZ",
  "key22": "55jc2UYbjii6HpTVUupfyJQwFzN2yS8Mmim2z4HErmh5oWmNhAdEbgVkVqbZFs1gqbpJptRoiZUsDPg767jR3P8J",
  "key23": "5hpjfCobEcUmaA5ZTv2XgupmdVTaXwcSwyu84gR3PPD7328idEQDitCuyzaruRnqYF8yEXLFsTn2Ck3tFywgCQgF",
  "key24": "4cayqD2JS2ArDwvejemiULXJRWNxjVnXt5is6G7ZbV1LtB53mD4yuZt1FXjNZ3NmC475kHBbnyBteg8JaGAHPK48",
  "key25": "32c8tQyxC2279incsjEN8GeQ8MnwjGgW6H3ipzF2tByJx8AXnnP785GHW2Qp47Sxh2kErojJky43jruuhY94woHG",
  "key26": "3mRHuX5RH4262ErwYBjgPeYDQzsgJkz3uDdgE3mSPpuzS6zoCS3VqFS7gP4TqLNjnb63cGuDtLKD5D24A2FWyJot",
  "key27": "3DcqtFvUgMk27hnkjZ1wZ99L8frtJFUWPSdFjczBsHsebciXye6tYA1huvYE5dNCaDLx1qhMffQ5XbAioHPTNzn7",
  "key28": "2kgjpDy2DEr2LE8FSambjCDhY5XgTPkWtG5YYqRFPBeWX67RANEMuThKZZdPvpcGEUw68r64HVsjjvrbrjio3r8N"
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
