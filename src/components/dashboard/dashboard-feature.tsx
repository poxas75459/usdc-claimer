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
    "2oTEPbSZkDvjdLEASVwYiMZ3ADMTYFHg4QJqUn5peSouQL5fV1GEatgHayTG52KbyTN9KuooZDmXYrEonQXFJ6be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wSCSJs8hkktPPLK7hVPAJaEngEa5199smLoRUfhKtGAKUbs5yDN8Pcc7YEAVsQ9nnBtWDxiaMig8ZpVFwmsqjif",
  "key1": "5Mdx6gDnsbuyRF7jPbV2tmyVYWRyCw9wNpHoSVmE3Mq6DDbcqHwjjjKHkoDUVenVgPLZ4miPtqEPWJqr4P8WNZWN",
  "key2": "pg76rmdM3c4yfoCgBrnTJsee1nhek2f7HXGp8feRUucGVjA2vfYc9AnNNMEaDn9p5wax7RcoQ4pxw3hVaCgWPFU",
  "key3": "4j39khLUDKD7GS4yz5kjqwBm45gQar9do5DePJnLw11rUU7x9WGCYzkhWAitEQysa9AT7YWM5mJXipDWgEgzwhgB",
  "key4": "5RNRRpvS1Q6VGnTjcgrmLfsBpxLtdpzSYbY69W33mchBVWxMVVGsWbrnvGJPH5ni5CrRYe2G56NjxxmyXy6JVwNs",
  "key5": "3BFYkN1So8UoApmF3NPe7LiKF4oRaL4NdMUtKoPHzDWTASiW9QMS2swX6CaNMbDJBMDqgJkwK6ZEjFornswaTevN",
  "key6": "L1c4CQYcUp5t3xKMDavzbtMiaDWrqu7xRXaUqb3QPPvsccNomyYnroscgzDicVCqWXbMQgUqaZKj1t6oGvr3jtv",
  "key7": "429ktM7sg4vxXMyRNGGvYP2cAkWu1gmFpsE7G4LijwZLJsFm4jjG96F7xFDu4KYCij8F1aAxgXrP8Uc1FqHhQJmJ",
  "key8": "38B5ffTdJvZiodN26WmioWsbGYnq5q6r6GouGc5sSqZQ15ZL2YdH7av1DnuWS3f22XuRcvgPpw6xTnynTrxJQoti",
  "key9": "1wvAhri5tNMNvSohtzsnYCatkK3Jx2T4eZwYGGPdHEZ9FVFf991F6VXxr3Z5qCZyp7pDRz7utdMkW3RcjB9ZqoH",
  "key10": "34F6ULJSmKDc7WxssswxkzRT42uVA8JJU2WHpLy4CRFvU23ByYMzjNWW8FCjqC1cXpNrLZT1EEFQBw6YARou72gS",
  "key11": "4yog2RKFdbKPzwdJPWai31qYuvKWmPkDCfxr6DYu1exD893H7XjBsvM9Uzz6eiuhWNSbsSSzSpKT7mMuRVo6oXZr",
  "key12": "2xKk18AYWdhfMCGmyPHfYyLDQhPGmMq8LXWesi3fqrKH4reTvrB32h3hccos3MMqefJjrRYPrARJ3nY8vmW2HZDx",
  "key13": "2WpvTBRGUqTfJpzzBShmxyBxNLPsLamjF2R2SXdtiYCk2c3cCLHc57c91qkMEKpzBoiYZG11VQwJpvSghdsdPjua",
  "key14": "5thRBUJNNMVKL361B11hxi5L1pHh9wC52VAzzwAbwPSgAPzvGSTLaQUBypUHoAjNwgAbrfewfHrYsxkLMCweLA1U",
  "key15": "3fjHH6kcybwpWkCx6ZfxwGHCocfqMFsnb5tvKhsGRLNaVh1SsavZgY6wReRM4vbhWZdkh993sRW8z8PWBuTAsbeZ",
  "key16": "4e7iNb9BmHYqjVAjAD3Zzi6qkoh8nWgDoe3je4DnWn5VL6J5zcu4zqbZo45bbqcV4YA3yNnhHBChALuKrqqrUvdi",
  "key17": "2MMKT8KAtpbsYF23LJYX1hN3gG4Y5z5NUAR8r6gtyTPzcnRMC8hhKCo1WKEceJ547XZa9JoyVwgV77e1qAv2km48",
  "key18": "3TajVwLRiWuopi98QgkReBZFS64Mw6VxCn7tc5VjqtU3fridGzpQRgRH3urCuMYeJ7aCHS89Z8pH7Xb9k9xZv1Xj",
  "key19": "34t5Wk6gosF2rvkZK3AqonKwgLXY2TJSwNjn8BcVoEZMdUmXDHX5kFajANMfHz5ugue2m3TFtwun6BMCgFPMGnze",
  "key20": "5LJzePZ5ezZT9BAAz66FR6ZixKm5sWi223Vy6By53hav1Zvtfxhx8a4L9cSV1KMbzzE42i6oW9xqgH2p6ULoaawq",
  "key21": "4mLCnddWUZtWZ5UGViDgENFhtdwAP2hiXTZXAwZnzWbEJmwXEBZTsP3JUmVDeTq9bAAynsvsEobBozRo5G7i8afc",
  "key22": "2KiYmJ4QW4oMrV4FcTEy1vAioNA4HKAaLSaL6m59W5dhtK5mGwrfujcofdpdNejDvqcYNn8FEXnrCDR12Z254zSe",
  "key23": "2s6Y5MpZRbaaQnFq6zpbMhbmKxZ45hASeQwRAyoRh7uD3ks7PiY8Xuf5qBnAd4vJgyuMg4V7DGmGwPBYx87QjduW",
  "key24": "54w9PAQSoc3jZLNh1Vka8nz4fTohAUCbz4BgvZ6PNLKCywsUyyk9cDcuZVhZwAKkS4mT7aWNbwBCBG8hWYH1D8t5"
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
