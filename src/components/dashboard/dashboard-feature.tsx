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
    "3FpDabBxJhi3haviFSmikZAF3Qwh4qZiohv51iGYHgh3VbcsDDGhchJBR4xLMKAQi8fQyLwpFtLJSzdMN2RwgrPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cf57y9xUyqYHJwkKcUNzt5VpgmG2A6LcYJ5DiD6p5bbeWuJpnMSuVi1qVDqB6bhRvfuVBvyqUKQhStMjUbKpYjC",
  "key1": "5ug7uEBLLvjzA9YYutvzN9zjqY8YQ5t3QcgtW1tjc8G5ZaXDc4HphqC6XdVyxwokacNu6kCuoHBdMthbKXGRPTHw",
  "key2": "4bHHpezcmAniKHM1LM5XfJJwVqQ6ckAPFQ2Q64CZUWdAq9FZ8A5PidDd8usXbS1pzYNEen9VTtzkmdWt4B83Lmnp",
  "key3": "612pivAhC92Djp8RJzvZNTNyJz1foy5CXZQTVUrT6XFBVydnFEhktFrG1GmZfe83AwNjdej2c8SegBLpBYjpaDNF",
  "key4": "2gjAWmWAkTW8zRbecFfjaEHtnLcxHyefHrHDWcDbcdmXDnNxnorPzJ5EeEi23gTVdSeFiZQQcSZy23xk1gyS4YZ9",
  "key5": "61jX4EV5Vjo3AjXzbfooDMroUcm19VyLLNQrWHva6ns7f8ZogHcACZ1jQuLdbe3sVZWmjjSHogTn8b6n65JCvGLa",
  "key6": "kXBhNSve1ryQqSNfCi486JjWFYKfc3xEFwRnVTSnujHYAweSRsYCsxwYyC8Jv6iDrX7mKHX1g28aMBguZfmq26V",
  "key7": "5gTTVNWa7pgYQZDckAJtcKQbTgsTNP84LFY8EWyFyemcfq3fVxBoykJhEvWPv1sC29EiZ4VgZSqPSsPyqixEoZQg",
  "key8": "2ZcQQyXSE1tMrnEmHhNsuZB3fWdNWDxpvL6nWXNvjBNyu5Bzw2tD7Liskhv7wKWrTRRWWrnsGXdd1owXHzJCnzDa",
  "key9": "53DxaRHHkhEoTFYsw5m12i2qWHhbSW1VfHSsgJGQXrmKM8257D2CVcQwovDcDr6m1LsLCCGFEWJaPvPcAAMrmGYJ",
  "key10": "58QdXztLKBPNYG74pN5qtdDUsGzb8JwPZiFqJUhzJRRX75qCSUA86YyVCLBXj6QnR3qCiE1stJAn4EoyyZkDwN58",
  "key11": "ETWpvYRnAa2Lg2MFZUzHCZNhU2evUbt1Hmj1dcHd7pvCYMaZDtxxmaUxRnDW7GH3ZMS8sesRAhQJAjL5FyYq3g3",
  "key12": "318e13Mpd4aCdkhmDcVndmofRb3E6vKAgDxibkZDtMmfAg7X89Fp56XoVAjHRV7oGNgfmB4wbRT9cQFTDQG9Zeh8",
  "key13": "2todzZa16upRkgBLC548kgLtY9yDcEbxBXz7Wof88cVaGfaGTMC6mTqy6vaN4x1yJqgkVzemJ92dpbcQVgc8B9xD",
  "key14": "5pPM3Meahc22epmE67sU1R6hCqaucxxPH46nuMNBVw9LgxNQpapSr98ycd6ajuYhVM6J2Yv1pLngtTZpp6tjLyZ1",
  "key15": "xc2V1fkEHTUF4bAS2rbo1xmbRau1gGdQsmLUoNCdG66bi62xRpJqy35KuTj56vfeFAWerHogQmzzE9shqjjiDYD",
  "key16": "2geAEV1wsbfSgfuXsEFziukpM7fBKNMazc9HhAdsNjhDVXYzeEehPPym6PhUBsgFZgdAf3fGTb7XW8rxJMataLs2",
  "key17": "3vYhAhykUWpPJAzTvUaNLQoqAn5trDdsnvL83eBsLAUCnRZHg25ZNNc5pRDoTxRGw4shtSu7sHT7k72KLvvzg3AS",
  "key18": "5o1sRDvv25x3J9yL2xt8UvKPEexRvsh4wFw6x8rSR3gPdGhLdZPVrzQ7hhFGazS4oiCJMtUAUeRV3J7gRbVv9cSF",
  "key19": "2h3nczdN9LZxpBQ948zkmTCjU8xi9XL81h7M7DrE5cxDKziGr39RprZHdWayCw11ADp9zVR1R3SWN3dQ5UVB6Rt9",
  "key20": "3D6t15ZbPHJjhSjArfARGLChxSaEY44W2KTPqSgAKvgPrLQhdnoHFvkVBiQvmtEhrBUMbe7WYLUfnhxmxmD82VKw",
  "key21": "3Ss4pbda1eL24P6a7reKkBCZckfXfSqrMSTi5VxqKZ3eCA3afntsSW7GoNZ4CbeDM6sj4C6whwhd7uEq3xZa8Ran",
  "key22": "3iWZKhUAUmGZDRZCjV1UJMhmqinpqrEVwFJL4xc3Pj1cf9wu5RQ2PpJ59NaDaoD4QNSudc9zdDp3HNnng4NjZs85",
  "key23": "aTZViFVuUXCbzeaermTnunzibJQLK9aH31RZWb2uzfqMT7Q6u1KkQvR76HXGyu2FKmR4LQM5CyGNQt9Fxq4G6R3",
  "key24": "2aH8ypUVstLap58potYCHQSMDnd8r8BUHw2WCZRgXEUdCwrkM9ruUfrxKUJyYEkD6QkRM7RBUAvqRmde1sCDXphR",
  "key25": "3ffKV3MCGqubEiNPst5UfoQpam88FLrM3QS2YXgodKSccnQeNR2RgNG7qxGXUKqsseS3F7bWJnqXQyu6EtNeHS1n",
  "key26": "aZnoPrR3n8TyW86v9oGx2miJv1uU1kXCpnCHzHgMKtBLHWWE1a1mTu2MLJuYgNeQS3dfjsG8bXvPEqGjny9SdKq",
  "key27": "5r4UTHf5qovUd3Nf5XjSHqGbdq1XYc8wRiguUF3voMNVGT6Xau6doQkLC5f5eZ6UWbLxvFhtAKZVYXUNZ7adBwqX",
  "key28": "2Z5iiQxTWyFJofS9xaiVxVhRU6LNuqUtddnaV8kZzJHifCXaREnE1FKaoWWyewgWkrJChKF1vQDKRdCcgJYVZhSv",
  "key29": "2hcaJgyXwDUVpgcKEyftWr9vwwzb6AHocFotGRpYS4arVJftqfXtmwG4zxZzPdPCUjyu4yUiyx8TddJvYiWtvBpu",
  "key30": "3e34iBnABgPihD5YvLMFjv2GGwEyVppHc7uscdksYd9TYBm3uXLoB3Ko7RUtkRz1a1SBh2JXhGRbcGx7ijdjPrGU",
  "key31": "5D5f3ZWyseG2wwBBJCVQuRsDNjk7h7aihFS3mV1PotpjSHkPnnTX6Fhd7zCLCpDcT6USuV7CArpPKRv37rDboqvm",
  "key32": "4oyKWL6HFFV1SyLseMkrP1NHUqr8ztXFrjcWD5SUr6jUQPzruYFdde7pT3r33onmhWBtb1cGoHz1sdkRiL4zWM5t",
  "key33": "51mxpL2hrhsG1Pp3jTaHnjvL8piPqVX1eBnvHGzxfvBsTQJbbRS1CLQgZEhFq5k1UXtJy5vwBc2Uk7UA3wmxqvzc",
  "key34": "3881HdMcLTTru4tEvvJjsFKKzVyBdJQCav3zevAzgvFXESrHdeyvVtiv63sgEMsfHGQkGCBuy7KaEvSbmGpuLMR4",
  "key35": "5RbddWN6wuk9mwo6sLgBofcrxCGskGkFAzmzwkeEZGNhSPQowgj5J6mE9fo1AFioEmSv2GBUKekHXE5mrZh5gKsU",
  "key36": "3VUc6wKNUdPoTLySF7BrZDbL4GV7dGH5GEWmCQDftC11RS6rZRqCfaXgoQ5cQQHgFHsmHBHh8dGYEna7q5yA1Fv2",
  "key37": "29eH9kgBwD6r4U5RF7Dmmq3uznyunbkHvhoJhhKXM2XR6pG11EawVMMfMyHyD26gTAFfrPzDn2VJdSBbRVFcq1db",
  "key38": "5W5FnwkxHx1e5GkeYpGe5G93RVg446PGuB9eZ75efZxE4fGAWBeQ89D2dFufiYGZTbduoTfEnw8ScUbKP3JeMiV3",
  "key39": "58589XpCvtTpmC7TBHYAE5pzs5AsTkZjL9JXobiTMcrqMLGk9JqLHuGC8pGWGpSNDRsWxZVDQgVz5nBaoeLoTpce",
  "key40": "4j8neJYfEHEi65Nu6Q1uWSshSwsT5ryEie5KMr5u179yzvKQBC2M4RXyzCcjc42XpRYvMnv8mk8ENvGaooFUeHvK"
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
