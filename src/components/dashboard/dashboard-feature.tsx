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
    "54gEFL5qTDoMgZ7KuATBTX5TSdDMckWXm4zDfVR7AtJT71DPSe9CEzKvtjjje5hsUGY2cN8Rs7WWCTvQen515QRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RShxvLrW3iZJEt2f1BFzCGQmYMn5mGmNbCa4SrJkJXv3K4GRfw7NafkFqvNTEdhbfaxHi71SPZtqeudhxbQTJGW",
  "key1": "2tKScs1qEzbT7bg5y6wYyQXrpn3DUiLvVcEkRsgK2io8qfYmitrdFUvFCbsGh3T84HjfhgDN1NG9vrqQVjYB4TUf",
  "key2": "4aXfEPLzMF3sgjS1D735YPtmD3Ye1A6pG5XodJdkWTyGmF2N6yLGJuWwAQQGVvvmLkgAX9vsVfmsZTsPJ91hgwSo",
  "key3": "4q65uNVUsftngseRys9Wte7BeuLsUQZaGgRgXnAPMdHtmPwiwrLzULGzeQivSeJEtv35JcGWpksNQTKzyjicC4a8",
  "key4": "2pGid4scQ3R9BxHt1Vn9hFaYkDt7Q1ALsqaGhDpU3pgL5WngbDB8axbRqG61bg5QzK5sgRYA5oaHgyx14C5yLYd3",
  "key5": "N6F462z2xW62ELWDXY5Ua6ZRPU7Lh7yPnPPTepTXKeMy61NhjZF12qA6BBQ8s7vnk8nEhSB1wtAHiCMbDC1KJeF",
  "key6": "2up7URBZjUvjM3kws14MKjUPrBZUVCy28nWM1JUUEe49u2LNrcbBKiKE2acoMNnhbzYFtat37JmrutmPeTRbyDAR",
  "key7": "3QWvY7eWGQHhAq6uh9rKUxSacieNRDWLB8yHVGBA6TBQKW6FGbA4Uj7spnGSRHK2k7EmwJ7WobSsjMLW7e2NnQuo",
  "key8": "wFNNJ994S5GL2utgWtf41ZERQiHJKtexDADpUXcb2PCt6P4TBSBdAd83ngX1LtBR16GPkEMJi3FNYAnmYRUF1gy",
  "key9": "4WqAfyi67jWcvxqHthm88c3zxoH7Zv43nsSHa8n5XnCyn7iypMnW1AFDbBKaY3dcQqgjJKNaCaNLhHxWKM3NiBKF",
  "key10": "287VQB5iTdVhWRBS9JS8z3GNuDp5Sxua3k1CXgcexKZB5w52eMyDRQdqAqvvXmEfbNUREsZA7tUy4brHs2JpoBB2",
  "key11": "5wTqEkETuvnCQBf2YjWW8KgJ58G5EJUez4i7x4guXGBqSCVsREvTCSUwCWQCqRbyaPHNPvEP9vhikwphNhHKJ4Vy",
  "key12": "SHzPQxvUSn6otaASLcjn3XbpNmqkYfraUwiTZWxPHBMa5th4Ah1S6pThpN4udpm9ZyMb8mXfY8wSzJwv85EKWo7",
  "key13": "hVMcn8FyXPZowkwWerZepAzD83N8znphStgYoRLBCzkLn2Yp4hM6b8PiiycALSAQkvDNVaZeX4iUBSpPcEsMiUq",
  "key14": "2aJQ9Z8dU8vhGhxtVQFAn1FE9HK1s7NGj7DG124rvTE8JyQQMMh8VemEsCFRkbtsWtasvyY7CVCsJujXeLmj7HMi",
  "key15": "3YAzgevbyR9vgNBF6ogRZ6T68JkJ95jAT4dxBuvVndaFdKegmZ5w9fGUTetT6bBjBfaHw3DoempKBppFD4PKPEP5",
  "key16": "4fCuWfjQmcrM5RHW5W2nFQE6qW2EFWS44jXH5DGSeQAaCAdXqZ8FXNMs784KtF1Tq6c3LAyKdXQFRsknwT98AmLz",
  "key17": "25QwQZHFz6m37S1Rd1zRELVBsPjqH6xaquzvMs3hYWPozbgoshX1oLmS3HoQfmuTGdJYn92nEMgTLiWoARrxXxFf",
  "key18": "64FqXsDXzWwoCRNzgCdhMM7bPjYaJoshQwjaLwQD49QJBTi9dFiea2uquoj8LhvodMJatG5dmWr53UazzWExjdgV",
  "key19": "2viEUJv6Q3PpwPcJ16jxHbF7MQHJNEXccV6adDxM2fbo9dMu4U159XyQLxE4Nd2YVpJzHy3HiduYSt8ucCCVCTn4",
  "key20": "5ZbRB9hrD5K2pCsdAhggArh3YPiG6rDV2YG9dQ9KNQNrDmtEYsTcV9KCXVYDBba8iPT6VteqrF7SRzaArC8FejvE",
  "key21": "56BzEe64dnJqsQk2SvFWtovt6fQUkctAfjXqyeiwSWX8su1b2kP3S1C2jYekzSihxqLqjU5sXrY3Tq3UTK6cntMY",
  "key22": "5LxPJZ4FGm1cVTjLtNCfmZX9EseAKj5PbUKSweGPGggghTZJM5M9YEkeabXdZJfbcxVyVXmewHQw4ST9K5TLXJBS",
  "key23": "3eAfTf6QKZa2qJjVu6eFniMkb4qoDGaZj3uaiVcDTtNzuihgY5xgo6i5T8zfYxWoXaDRRTnAG3i2sSm3c1wcN8so",
  "key24": "2nACvva8D2zaErMzFuhBCu89jSZn9N6y6hw8dXJx2CAAXFmCAFEdc5mhiDNYD4JcrEETCnQRvEvpTnyMbybMH6dP",
  "key25": "4UZhz2oGH6V3ga95aAUgPXycgEx9nFgcCbGsqxXoNzXPNMWJ5CeztKhx6XrqE7Yx84DSwnskUPvBKJDoAU8DWCFQ",
  "key26": "3SPt9XPYXCz1PtBj12fX68AynvtPw1neqPHpTUfRxSQw4riLSg1TzhG32kDBfZwQ7uGnNmGup44grGKtk3j3jWwk",
  "key27": "5xrfhF3DmU76YCRffGHqoPfcTmSiowvpy2CFkGdube3sRxFadq1U3A7fk7j6snBYDZzL9J5iSGqF8Er7JyisgqDx",
  "key28": "5Aecg5jBEGZKtPG77HjyjC3pWTX4MZctQwzWQF7MdHrXEfWYEwWgEK819K7uTJipBNAyGuhkSivTQH2pGj9s16cx",
  "key29": "26drbsBd6UPM6fbLB1F2wUscmMC8XFnKuajdQY4M3iyE8QDN6W9RdomxGdPWsXikEvu5U9xKfsFpnLzbBph2ZinY",
  "key30": "3VjBPSDn2Pj2zAnhQWvawdBqWRa7LFqk5m9TfxL5HNxvKHMi3D4B1nsT5Lfb6aqcCWC1MLSww287YMM3xxFcM8mb",
  "key31": "4mA83UPrcJoP4swUDP2M4DMpwjGqrgCd4zpzEMNZeMAzeBuD1s3GMv2qqc9UFe5Rv59DZQbu3JF8PRm4eNJ1ejmq",
  "key32": "Sz62wPCwF5kg4uA8CGYHiq5jUss6pK1ahurQWF4LJ5fJGyEohYUzRms7HqWTW1xKjTyrSASAkD2j7WD5GQNUN7C",
  "key33": "4xzomUBEwwuZ89ru6L5Vq6rjeo65sZfLKhKpB98sncBEGCBW8KX3oRHANVrktygCZTXEZanfrcPY17cjGD7eQ8DH",
  "key34": "4aETUv1mbFgLSUQywdV3DmzPa3kMD5WNbyjRoz65JVobqxg2cV2yKdZfbKttFULWHf2fte7o4AL4A5zmX7fLmCWq",
  "key35": "4LWrvYqAXiAfPvyKfXj9xD2pRGn25bdmBNX7c9N7MW6RJJKShEhhje4Po5KP88LNX3ri8EGNm227dVbPCaxqcqwU",
  "key36": "2sJXRh6FNC2NMW27Xf4bYyy4LqrB7DEnxzsWSn4PtBKViRMe4MgX6MG3sXePg8qf2vQidcFrLJEyope71VHg5oAd",
  "key37": "D8KyoxY4CpkNuuXaz3w1GEWyiY6ybNLRaFKXn3qVaxrJkbLGXo1GiXep8qdLNuY38Uqw3aH2BVgBTLAABsZb6P8",
  "key38": "4x1qQUNM6U7HRfawHZAey1tbupMNuaYCawkdmqhmEaAapmS5Gs7mY6C4FMvfqvLTNUz4Py9Le3rRPG91P3dZhgi4",
  "key39": "4wj7bXtmmDVVfyRv8kKg6WUUeSfX1Bg6aBTrXNsLs2YafivGiRZR9s2YULcpjVKMYeGApWCSLiFdPaRUkfpsbdHz",
  "key40": "3xqtzdHQGoZ1X3sVSLMutUxYgMGyL6fvRX76DYFjSLxQJdDChnCbqgNQhn4en33VLWJkwcRCZKFjXAgFPEYqJy7u",
  "key41": "3dmqp2sieGjnPizRYD7cf97SHLLzY2iSYx84TgukQ9FA8imfJKe8BdsDCRuqgnwL3qrXRiq7GwLKn5hFo1evrFtS",
  "key42": "YBQBCLcSTbV2e378zx4azFxyHtZCtg72h8ZZChsi3ThsMs5fZ2DtHj1yYfkpVT8iwPuTa9VyXF1NNG13WSkN6Ze",
  "key43": "5BaQB1S44xwTRZdaLoY8dXPUD3S1ooy9apNnDUN4BbvA1MrdWZuSWPprYzGdmo7meJssBJ7QSKDhpdGPZTTSS6Ue",
  "key44": "2mgvUtJvhpUxYGBx84jqhsyXkBoF7xLSgqtY3fXFCUcXoxkeDDMe1qUWsZbE7osaPaLcaRboEQCY8J3dFHgF4DDA",
  "key45": "iVEZduswDogzTRT2aqDnz5wruXdnQeojSZUNoMNXpzue4FPwn5TJ9G3QovFNTquHK8ixvBMYDFt9SLU9ZHPYyWK"
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
