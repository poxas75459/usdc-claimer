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
    "4V1RsJLdAPDg3HJoEYLN2DfPq1NH2WgvUwEXmWPDs5qe1td71wgqu3JRSMLHxF7xGJmMnhqgQkHzhVJssgHRpz9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TcHUAfv5iVXJADz7k5MfWhRdLJNhHjXMnqnwntTzp3rwS9uPEAJ5pQfLpZLKdfZnH7QfVaUKkJAEDQxZFqNtMNh",
  "key1": "2LtGQ7Ldv6Ja5c4itdDEnFQujtprZMRFw5ZibkzAEf7AQa8hH2Pxun6mGdeLDG4VwJguGwMWRkNhjRU64H47BjjR",
  "key2": "2CqvDwZz84gg9LSnDKizZk5UixZv54ZFiFNMnBoyhWVLBGXMd66zwCL5mE8sbcxEVw3RSpJiHMVh3SrVjC5NKWk9",
  "key3": "2Apkf6gaehDABt1rzozYjBvbxr6Ju8sjV73CXo4xgkQ9QopSjwKrpF5uXADBAMfXzkVhDYv5EfAaQMaV7Mokg1Je",
  "key4": "4TaGT4NXD5q4wV9yUmjHCZ88R5FABHrx16Ya3aLmiRTffonFZuj3Ags6VxAHtEeMyvCJB7k6hBijvrbZJEaDhrRC",
  "key5": "124zhoNsJx7uss5Pk8y5j1QWKm91g49UcJG6oBzUv2gUcnUEPnTu5dKgJPB43MXssXP9dZvZveKF5FbZ8fDmG5Mi",
  "key6": "66nKDgkgC59pDnjfQk7UooNSPtQ5t8hZQ4fqt3p3EYPPDASbNpbW2MCfju2R4qj4dwqn2oyjvycpAejmS4CsVHi7",
  "key7": "otDzZuCYSw76J4XLEm9cFpRA5H2DzNxSb9gd6saWYiRWxNjuzkeM88QyBEdUXDdofqXvXqr9CF5RggYhigZQfMj",
  "key8": "5WgjaRnxVJNvPNYjrrcoo9APYhWHZre438aXLPXPUdugRSYZkBE5Gb55E5gk6cNiZfMaKy4wVd5MTfnxjGTHvS3p",
  "key9": "58PGVJTK5qwnhiErwK1evDhqW4M4RdsBNa7JYny5MbesuESp56DkSejfakHD9TnCm3tHE8GsBewvj5jYvzAfsoNo",
  "key10": "3bJB7AJBgRehzVUrmTSZuGiWMkKPLriGSX8nKE9MBNxW4vd5XAqr6GbNfts2J8b1kSPi624HYnZM9F5RJA1wqTd1",
  "key11": "3stNE2aTU2vHmWSHYHG8PsqAinZNL5WkQirFAGP5v1qVuW8VFPnmQjWPnws9bTTygPRy558zkzvz3Fp8vfip8Gw6",
  "key12": "59SSHL28XFaNKiY1CRyhbrodxw8o7BxQepXLDpFvFQ9cFnMQwrAsMHtPf7rp3LyBpyqhys7nswN5365JFBDipE4N",
  "key13": "pxnpGubT3sndbMCr5LxfqYeqFtkU9mEMHmjhC7VaV7xunV3RZDQHeaLXjR9naryJeCXswYx8pECiLwnWn8cWsRr",
  "key14": "4Ct4bcAeUifRgR9gGKKnTqgq9FRJgMJdkPhYRCC2XUagaxDYjCoNLjKH5GxUqWga9AqDcGLeiGJKuXQ2mMfPqbFJ",
  "key15": "31xYhKB5RSEA1BXET2KmZqB2Cy8sj6mJEr5yGzksm4PXQBCeDfEKQaBWUqoho5FiMiMXqeTAqr2qnzNk72z8BTjL",
  "key16": "3spvMbo1gqtrcioRfhB3JMiZA55w8e9EGR9pfBx2JHaruk8iZw3zdZgSgG88oemY5JTuWofY56z6r7ypSquKEuL5",
  "key17": "3LHhLKm4TL4GUMP1shrpayZMyufiqK8UbJGXnSF7zDPriMMkGd4FJKuGpnY5NRBMXMkMn2poqfhLfU6PxyYeCfC2",
  "key18": "MpqxZTztPFvnfy3P1s1DK3iMAmrfwwGZyHX78PiURykXebwHqSUL9W1BBws51NSDW1BmjbMhcP423TETZ4PhV4j",
  "key19": "2qKJzmAPw9fYK4f8zaLoSYtXGCcDRQGzi3rCvJ8MaTpRVLv4a1MqXgFYHsudDvgNKvY7r35ti8vjyRDWbCo94Xc8",
  "key20": "5KyqS4T67jZvWGMVp7mB64GXLFenhha91avrTQ8y7efFZ4jdiW3WLPN1CFqmvYfBRBBd7piC5vTs1aRY4EZnzBZF",
  "key21": "4TJdQkWG4u5UTLhXP4yLdETVCHMRLU29ErDnFJFMRZvwBcsLLoHBvmMAjJo2UumwPKSNWucPaazAPvzQXMBq9eNw",
  "key22": "4ApC3kqxrwABY8Cjx4gvivab2VigjpzGFg57ATKsRbLn7ZSBeeJgCM7mvYVUb1kg4ghrdQALA9CF61vf36GWuCvK",
  "key23": "zuL7HKi46MYn9E13dfxp6WpTJHRHvU2GqfjvZTFPpYjv7M59BZVbDVAJ5Y1HRuysjaD2ebxoSX3GGiJrtYmFQKZ",
  "key24": "4jKqsfJUNbHRGkmrY5CodaE7xkpjRzFMPf1qHPoRWwpVzivAFtySV2DMKgKBUwBqioKt3f59StmzRT5rNnki8onx",
  "key25": "2Vn8mNspSTGBntT5hsfMDojriGSVCj2C1WMg2cdmamSen16nMLABjtPPBRyPSFqVNcMYZYSabjrxvquwMHeHbzYj",
  "key26": "4HiBRLuW39T7MbVwnHi9ou4gKLj7phVymw6kE2X6LGffgoB682MeFY84rESbGyaPGit6eGraRuRju2fvXoiydQaX",
  "key27": "65YCcuspCtCd1u2EdDVsDkzKaFRiQk6eDtzKk6fLny7YdcA8YX9S2CM76m3neFmrTkc9uW4pyXz8bnF9PsAMjwNT"
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
