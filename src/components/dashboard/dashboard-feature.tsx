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
    "553PB93T21qGVWwyEUv7GXwY9VErbmQVAUKjwYEmqyqbs7tk9XjBcrW2UxDEVMmqQMAetYAFfkVd8sb5WTDmkzaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65fjP3Lj5cJF5XM7GKQkeAXXfmYHqCqD1iezKPuPc8gPFkxCtAbhYpfL9FqPa6hN2nK8yzLN1UzAt6eED5B4iyP9",
  "key1": "2geqZp7s1uxT3mYdHsBgTSGgPwdUBGoBB4puLLb7Tm9SCUDQ2Rf1AZUmWH5fwSswPhwBNg4zx96p3YLJMtctHETW",
  "key2": "5XWcA4N4KDM466D9GB1aCH6MSrUAf611mXkS4Q3kKx32KLNWgJsaUzZVtEoSyT3m8DGtPmFkh9iTQzd6ZhuDNJZR",
  "key3": "5W26ftxxWhS2spehnUc31CFPAWoRVjqtyrvq2aUkM5WD1ouwB4MY7tJGtmUiZMaArM7JZPWLhFjPnrxUdW6otUgD",
  "key4": "4iGmK9nbR3o93kiWSHvwYGhuJ5QG93RCz2HfkjJ3uuB1oLh4RPgCoZzs6XDBevNiDudD6jEVPKgKfjMhEYaJJ6V5",
  "key5": "3BFDKUUgGva4eGoHnqm9tpV8jcA9975awG6prfpbS2Q12uokuQAt8Z9WnMCmG9rRjcyCbe5xqgnosxu1mKJZDxww",
  "key6": "5KEcraUFVJn4jNj3wSFB8n4nJANfwzMYv2RSo8xCnxpvwUJAkoDjqcfj7fkgkRsRNhLhrTDFx4n4h6Ct9gb96hNo",
  "key7": "5UF8YqeRYR1GhKSyFpU9vFcrJ39NMaWpshZTRPwtNz5MrK9sJpHB22aoVwEmiHCkbgsiYF8wPigVdNY5xx4pqb67",
  "key8": "4EhrEbHsA9vYjmyVHqkj1aS3vGMBNcEZpKwLVPrqNaKMRUTAk4mx9Epy2L8Xjm1riMj23Rfbk7SMwbdB8fWgFJPn",
  "key9": "5JP2eXMfKLVpGEUJGWxd2oeEpyk3C9HRFL2DRpyXLqqn9Dpn68cPArU1zh7bQwrm99M1EU5hqXgz8s1B3LVJ4rDs",
  "key10": "3uRngK6yEfNn5aCFPtk2gS8y5cuDqhqPA4q6EdzeGbNNA3d2mfBX9AUMF6JxPZFzDaBpHxRvZayyZfnVMyc3Bv6V",
  "key11": "4yvSs9GJnYo1SJWP2YNhSQXJo8bbBJxGkRndgFm2pYZVxwLQ3MRxQ41HvBmrCKaQNQAqGtYwvXwBcDEpAu5JKmoD",
  "key12": "2EXj5CZQFCnnch5RViSkmYc3dX4FfzSJ2FRYCHcRRV1DoQnEJrCCcWeQfAZWLmY7JNjtE3gnLafi3bLEKf2eLkBf",
  "key13": "2KmHs6yu4Lf5nJgmB8gAKAju7wk8DfcephNVkBEzGeGHf8mjThriEpKuKbRNZHyj6UsTZTGBr5ciE9hNi3YL3qK",
  "key14": "pBRL1cDXZvx1Qoekfjme5baQpAfx7BZS4DNNZQUrpPwbT5kqyofCp7LF4Xm5HnhQapPb7gXtbaYQ6sBwH7tip7R",
  "key15": "42usHmGTHqS6DoxVvFYtCsC3BcJVwJ6YGQJX1XNebqWTLDkdkAcbWHXhqNPncrzgHEysCdhRjJyZnQJCgbRsQLhb",
  "key16": "C7UAiqmDaG5uTJR6fF2iRtt72EaHx1WxTTwNWJRY35Mo1fxnmkB9oxyfe9j2pz9DvBhAn1YiWA6V9GmdTZMoHPq",
  "key17": "3qGBVxrZ7JCtp83GcPvuZCq9rVSdf8wFgKxGBiJQAM6BAAEWisQcmoiAhenYSW3HKR1XAESevvuig1AhHWVVwyjf",
  "key18": "5tNzjcCzBnKXoKNBNMo5euF8HKiBkjHNwMukgCVyfW2jf4fbBiZCf7j5QTxDxsx3jqWaTJ4UmSEUc5GbJrEhNXG6",
  "key19": "4Qm6LU3xWGeKyMDs4yEhSg7emLT8Pr8aCUeqDEvoR781grkjPpGX4SZkAFkGXWRWdAXe21Rr513UynsQbbefW3B",
  "key20": "57gvhfMbs9roYpS6KwnSSWb6RihUd9phkdQdLYaGBcc4u2pUFpEdXu3N5e2EETbXm5gwRyeyykWgyMctRMvtRdU6",
  "key21": "3f45rHHA7f8NippRdQaBckxQkqRYCimX4XK4dzGMbZinu1CuE3imP5qiZrrd1cg3Tz8ijbQdjhqAKbsHmERDAE6r",
  "key22": "5iVbG6BFND76bJ25cafxZkL7LQ28sce9WUTrfHkhYBex4WPMdPnKJuLByNmA3eWi5MeFi1Xq6hjTKRTf1WWiLdHE",
  "key23": "Hdb9pKchzJpVSsjidAZXGyozofp2rCPM7KNVdXYXyvo1Vr3e29eCaLeyqpFpyRr6pcVGVvkMKMbP8KrLoTenHCe",
  "key24": "26arBWdB1gCJFfAAFmu1WZAz5bnqw2tUZTubWu73VjC9dcu5kZjvMeYHn7NCigdJddjZ7fMsYQtykWuA7ggxjHEF",
  "key25": "5cnttPa3XzR9M1qrr2fmCERA3gogFafHWn91H8Fa4tVQP9Hr6EBjT5tESEoTBN8VXQzsQ7jjR7Ar1PQi8kw5JSZZ",
  "key26": "3R3kxMv3oxKUTJcv4waAhG9JTWA7ErWYCF7m2UmG7VWfQ9zfsQeBv5ZyKJFeuv1ma5KFsf6FNq1kmBMoCpYfgefy"
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
