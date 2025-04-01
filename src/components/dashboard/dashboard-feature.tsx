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
    "393tkkbef9ZabaddQLeryQrxsRPZHGHMgySfkU9XBV5AmMHJ4GfW71PmBApqpC2WgzDMaxMAbWCq6LwsShKmgrkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MibNfYFHYDGz3BPdZdH1aBGKtThhZzhXsJfUXb9FPLKVqUqbFSVjRsyNura2185sGKAh3BMERHN2zMit4Bkbbmj",
  "key1": "51FQJwKaMUTu3Ae1hqAdWB843cmVMnxPXmPZaYgQ4HGBsFdyFVKxTZMLVZzMvj5VVE4PV1Yazvbbo1a9giesa7qY",
  "key2": "4nk6tmrWZb4GkR2d7WqP6ZBukGZ7e6ivpCRnt5ggzqyfH34Kw7wATrJWhJXeW2GfPsaxRGr5ExHekjsnKur4EM5g",
  "key3": "2Bx3L6buyVcRBktE1SMBPzthhzPtN5qYy7FD2bzwGTHgWS5FHaVm7YU1AjVbPcwFZBLkjESkpuNetEsaWkXahsJm",
  "key4": "27gkEMbjiAf7Skmov9WQsQgcB3tK4shHsWTVvroqRGHdLXLSXywamEymyjDN3d5kMwAZY3FJEsREHDzJm3gRTzqN",
  "key5": "Nus5Smbu6QgT6SXwd3F9pQHUdygzCErWEZJifAdYR2Ti7aHUyhueDmTVdELYw6maFP5jiJXKfJaav9FpCBYqmfv",
  "key6": "u8xYywf45ZHWjEuyiYErVpgx167ASNJcwYwzp5xWK79UhesWWY9fGc5i6HmXiLQ3rh5xPTYdSe3cVFtPFYmgD5A",
  "key7": "4Q4bibNSd4Xy2e3NQNANVfuJTH7n7jrSJZ4QhRNNzfvexCmbbNb6UKjMe62cTz3qPf8bKCq6GokxgeL6vdHHBSwG",
  "key8": "36hCa3Mu3oyPNbZb1gf7JcvLB5Hz8TYw1o2MJB1UNrmf2opig8gEw6sYtY7sLSUzM39nwYg4PfkRUd6jhx2eTjuP",
  "key9": "3oJJbr189GmLjGLVyofSXYtVEEKzTDgvdi1voHnd1V2381EF8ZuNmesNN4ibb8L7hjJJ4VPwEH9YWqXTETwc3TtC",
  "key10": "5PebqEnirNk3BUuNhWh34xyNfVswcELmsoN71zswQx5UT7X58e1kesaRt5HFospFeYHyWDbT388LauTiK5ve5EBR",
  "key11": "2DCvzzPMszwh9WZqCubpKGjxTr94mDcLmMDLVAfoEDYYsBfBY75Af51TucpCkF2dYVSoxibsJAbXqYy2bFXrxieR",
  "key12": "3pWFrJvqxo3uWrH4ooekXXJuqkE71M7RL8bJwZhQ6ycbDVQaZuXTrfS3csDgL4JrXkmUjM5zgoR3rzByiE4a25ic",
  "key13": "3pBmVnSML8ak4fQhqRdt6nHZfg4b96hrRsLnSkQbRb4ofTnxWZrRfJ6sBvxEufneSWZFnKdBhLDtRUJrhYN7xqht",
  "key14": "5tr2LmUL4aXYKsaz1JJ7GP16bwobzzz8hsctC4iKRLB3AEAB6h56tfkMmGhS6Q3vdq2M3pXmcTBoQX1YkHU6FbvS",
  "key15": "4t4ujgxyBL5byaTSzUgC8BFNfQE48U5ND5HEvAG3Fjseyj4jKjjoUMq7bFqnT4XK3tEFPbQLMEGXQBhkh6RaH6Dk",
  "key16": "5ULVkbdTArVJj5wvAjtSiYDQEQExn1XvwEqWP9BX57bDyJHp5VGGHfbAcminGNuMC2pfX9EGYontFTKUDdf3Rf9c",
  "key17": "3fxSb3h3iNKC8dmx84Vm2GUURt5Vgj1DZkpwn91eEVwKarYV1J9rmsZT8Q4bKpo6NCyueMBNLXw9bGcbebgWUEFM",
  "key18": "5a7fGbtRzReikBKh5tCrRnjwQT9YksGRPcq4SEeHe3jrxFXd7SC8tAgvou3o82qh1dJLShT5f6JAyZxvEU7dVTRZ",
  "key19": "3x4bBnzLhaNDQxeTTSqpUqPPc5UmZXdfQbERE6XKVKwW1i2t633nwLfYd3BwKD5avjsCyf9FYDQ8kpsECGjLKYzE",
  "key20": "2VFU9qCajYoqTQutKNDMTKm9iikeUxs6JDTdfoRLYH1nLeHUzHT1P4sLGbR8X1rLM4qnGbNNBuEcwixjNdq1W9ia",
  "key21": "2pEzoHpzbSc4Nz9Cx8zGuUf3Gneiqh4r46EfQD7qhR8JPkLAArT1PdfyLdw6E1Ht5eZV5b9zqZVJPnqj8U4NYqMi",
  "key22": "tjjfXzjZnijucDYeaaRE2r33Ze7r4VbpTe7aSMiFnUk2qw4br82ZLpo9wPibTYyGQeDDQpkJq1DfqowTkFVmqTK",
  "key23": "31QcELGKTUGLS2DUaytziE8ipLiyNTPeLPxStzP41HyLLLk1vXq2TkNnvvVugDvCDP2MPDoNmvCWgpezP8urymUK",
  "key24": "4RFueYoHkCa1fodsyD4Aeh7BQyH2sohJ4ERpiucEjXNFM29ZTvfY9uhUex7asbXKvonQEvS8kEkvveA2BxsKd1EJ",
  "key25": "3zMq84P9ciMREyqHU7gSvVtAim8rR4FsLVfsWCoWiHJ7dqtSaVD27UmZ3mpsfiWKgX3tvDYBoppCst9bvwJx67Hm",
  "key26": "5V2cudxDZJnhSa8vD8R87PfxFH8itS5avNYd3pPeyXPKJykirfiUhqCXAqUtNR3g2FLhcSePSTzwQnqxtRvjkaZP",
  "key27": "qG9UtPeQjZykBaF5RAZg2p6oLUiLBd1mgVLFsQz5ktyRv11g8FCmKD4Ek9J5RTFN9Lwn3jMK4isv4UXJhk47997",
  "key28": "33AtEF3wYTuDKD36h6x6XEi88CHbHRGULhLQYHXxEGzB2d3de2v7Kti6QYQGBVw3CxgDDChkParSK1EjN7Fot1xw",
  "key29": "4sxJMqRVyPb9B2bQTRbapwbKBgmVJ1tDW3wBSmU2SERxfvyeZWwQckbCteMFZz5LmdFarW3PN23RsgDcYF1yKxxE",
  "key30": "2Rtpb2TWvfkWKfretBg6auQtbeY5PHSDDFPW2Gre6azfkdi86St9CXkkz6hzMXKiKptTUkLAxfkTtGztkgjGkfLQ",
  "key31": "5tDewGLhdF1WTdDXDFEkbHMYyPGyzcMrEpYVjVXEvbkAyf97wpUMDHVArvvYDRZBD8ounzKT3RPyYJt5QYvsgEh2",
  "key32": "4rKP66RvUgjgo9G5GrB6BtR9yLsnPvYMRLmJRxaZ4AXpSLLh1RK1sQbeLF71exYLyptC5SLm4VA4ZoQEAnzu8y43",
  "key33": "5hs7p5FbgRbkWvPrAYSZ7MYk3gg7CKHSQ6u3yK6DUbCUXcDGh8jDXUFewSf1bA9VfTkEBk1fHynqtd4s1tfAGmHQ",
  "key34": "4t4PtoH4674bA2HkEAxhgDx8pkbdsSrwvJXtcJApXHrnzoFPwAqH6RXrAXK9XNcLzBYtVmeC6SgeyGtZtxzhifLN",
  "key35": "3jLVcsqZx6gAqPHjdWdpK46F5hpvkdinw285vyaFLALGXtocUo7meMmceqN6TdMYRiYGH6ZuDQLXSiiVEjGEGgeQ",
  "key36": "5pZJGQ8PB6tWNSuyZu5KXeHR5cq2PaswB5pjs9xdXrZsEUkKXogThwYiMimSJTvkT9Bpcc2ypV2uT4hpvAxhTgug"
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
