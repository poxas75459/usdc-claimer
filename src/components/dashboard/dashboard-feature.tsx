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
    "iHua3rFG88g7rcXxcD5DP8d7hTFvBXi5CP6tWnjrheadd6UKyXP2HrZuZy2sX3EBgtj7QBuzLsYWNHhve2RGyoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FVGLUfxLVkcPzzGtqrGYLseAcc1h7zk3feHdYCJtaWHeSkvBfCwxSkTomrbgVJq9JyWzpysQSyM876SqeWX6GPY",
  "key1": "62Vhfvv2nTCgh9nL6MbmZruWMAp4RSUFn2Ne1MjiPWVQdrPuU37YNdoQzpnd6wxDhFG5CAnpbXGCN4HD9kNrADtM",
  "key2": "3HYWdbYuksMjUbqnve72Pg6WsGNL6KQ7SPfiYLVS2M65hX5e9vJQTDdEbHpBdcQ2H2TxmQ3zQvAZkFwR9pPenzUT",
  "key3": "2rdBvcYPWGajpa2xeWHXSNJvoSuKcsLM4xDsSPBbmhVPcY3SWFJi2bzmQS59j3KrwprHsfn6cLHLZEfqBrNRF8R6",
  "key4": "5N4tG8PJgEgDjV8iH487fFzrNmkzV5eGQ731exDdcrKqy3yAUYWTnfNhRH2o2m1RWSRvhZUBkTN5J1UvJwPPcyXK",
  "key5": "MdsJzTnU3m3bfocrWzMxREFtfYb9xd1qrT6jffs3yQ2bF6bDGWLdzSLqMuRxWn41qZkwFV3sn4v5jr5io8gMLj4",
  "key6": "5KTeX6QEzgUFRiv2TyWyniwxQZVqamELwBNFYa4uEJsdwqZFM2atJCbsndq1av9Ean8ejBLr2NXR9yB5hp6Qh6p8",
  "key7": "4s6kG4DhhrfcQa9qXNYV4buixmKNFkBsaHqQjJqUdNnQMZ1TT1bGyazSreiZvrbE8Mc5f4nH9wSBgjQwEagXYdhH",
  "key8": "m9zFkjV8mBqkCKPTvN88gdJdnT8NNoRjgaLWW3jrDG7R3EcG9kMuR7TztjSaKd3emKyef7hGFoB4xXXBbfnFd8r",
  "key9": "5FmXUrG87tDcwkC88sKY6NZscRwyDuxg4DhU9HhQ6jsG39JfE2U8UVdjhm1cCxtXzYZv7Wvm3ViGtxcNCKNjK6ys",
  "key10": "2LC1pbuH7XuvQ9FGd1o9HRyGJabHAJfynGTFKboFWrg5NMXQzVijvEqorkA4UW5k75915mm2pVfKAWEunwKy7fS7",
  "key11": "4gvVEMrpdPefATQVuPwEsHd5nhaVkw5ctZRxESnxThq9CMjRHTYZL2iA6r3QRDJkAYbjx6QejbPicmLj8sm1h7aB",
  "key12": "2qFRHDkbjvrCHdiu3fL7o42v52ubG7yjkxQHkrV8AUBdaYpTTwnRV3RJNZVN4wymEKdGKTobZaESZu56qehBziiY",
  "key13": "3mrpv89Z4Xgk6wuV8HfPKnLrwkiyFZmzMDgiDjNoGVVh2Ac9gWq8x8XWpZwHs3ErYLtVTaWH63Tq5JGuVeMLW25V",
  "key14": "2DZoSN7QijkrJq2VWgNy6XQdFFEAFbdypvDXpGYbzm5DXY723PD2V2KhZmVzKp2bfDCKPDBvKe6JjZ4M5yjjbUUU",
  "key15": "oeXmXgB7Lj1j5QSmf2Q5zzd6KRheTcjYLgP86QL7oNodHwGmLLj6jxRMfg1WXHu6Y4SbS44bLjaiAZgvLYfLqdD",
  "key16": "3BZYoEXAxg9AXweeuzQfGetB4gcVFxmuAokWiNpk8btZJhHJhJ8cHntGp6UkKX6hd4XXRBroKHpRDV5JA3jXGZjm",
  "key17": "3MmrPHUQBkMjDrJLrY54TYG2s1DxAr14YQRFTCrfJQgBU9u3iUPsyRpDt8o5QWDDPKuAo6S7nby82TwTz5zRiJL6",
  "key18": "5vyA88BNwCVQgSf9jWKLg3bNGvuh2octrnKtCBiBsdNnhRGMfvmCLndAbfRXKt6n6s8P5GEMJXtURo5NdVCmLUgj",
  "key19": "KbUp9eJ3KiRcce3gYDjP32vsE6DcPt9hNz1Y5qA4ZxYT6grqU4sX7buaiivNnP4z7S2ESM3cGvUdyrxvART97gN",
  "key20": "618sG9Bq6LyyE7qpZbSxoNsFXKGqzqi5NjVotkbqa6N3R7RKavBJQr1VbrLxujpBcW9smig43nrtkJv5V1mFQm2L",
  "key21": "21XMrBmzbiYGER9JVUMJ56rAW9nC9wk9RBhdBo5dRNK3XHRyVW19VCXj4LdoEv2Hpv3JryXRhKxtZ6qdy6VF5faz",
  "key22": "3VbxCMkcsPsFjNRfmmTgjjtHi9pq6fnE6cEbxHFmvU9cLMJ3JeZZziaKdgKvDyfJisLPRyva3twiewhncfqXhkdv",
  "key23": "2VddBp3LvXLca3njmKgfrDcjBWSBwoaAM7erNqbGDNGcRgrCd3rCMXXioRkphXhKZr8MES4KrUdrJVB7CuB7URLc",
  "key24": "3DXAHxiJDFnKvmRdpDhX6KBd6LPPhq61arHHeAwmFFtNwmoTxLke7fSmLborpH6GH1PCrd6iSQESwUyGcJXjRRDW",
  "key25": "DdM9C56LbyUpTFbzh996q76jSEoaarHGWT4ekBSi7H2HqtfwcZeg3pDePSFQdWBiJ8TkLegFruib9TnBcxqTxQq",
  "key26": "kHXhmzh5hAFti3VTm2A3h4zd9D9SXFeyDpy7dCgrFJCjzWXZPHY1WZmZZ1WR98t1qdJShH9mb79orEMn71rPWgj",
  "key27": "5AEww2rW1PJGNwbe5Kc4W1Ey7oY4b4JghQtPuMXzr4TckuCZrRp3XpvptUNkCeSa4XdJJw5hgVEgeJ5EMF4Pyyqo",
  "key28": "BJnKP7aiANmyQASQaoLU9tWJ1pqBCh8RUer79iJoq3nXWbt22xCi1ou9EXhb4UgTMbiook7ByxJyYJC4zknssk1"
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
