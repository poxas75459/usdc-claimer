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
    "4V3xfAX8AUM8VWmefNzh9x4rxRVYb8ScFxX8UnivAv2eeMxP6BeJ5WweGi99qDeK7HirFVYMJePwi4cL9LkbHQ5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k4x8PEfjt5Jkz7JazpgMan3TrsBcVcJNKNGoGbfUW2mXi9Gy4X3WhyQ5HsRkuHKfxmGonNjmsfbVwWTxREkGD5Y",
  "key1": "67nuJXocGi3BJzdLbpByN5J1HmkeyRLUy23GJso3Dqq1sKh3JGr32cCJrcjo4a24ThkzmBSstr1g5CeJiCfEeTgb",
  "key2": "4PSd2fosxsWRdCBmpbQs5aFyU27b92aHVEjatKfUVXg1AJ2F3qhjyRfDLyjgUj2LStu35QPGVVmzLb9gzVsvhwqM",
  "key3": "4pFurB5pBRTS5Pxp71ot1FscNCF2SAsoNwJhsNMiL9jcAeWat9nTbjbYsaz2kQtjA2AkjqPAuoy33GqoRAVdxxG4",
  "key4": "3mt69RSku7wjLZDUaZDpWB7HxfPtELiKtTuYAKprETvWMjg2VXw4ydqWpa4oqHRcKzzpAAnewUTEKZhxgfnYUehn",
  "key5": "3wGD1FQM9Fui6JwwRZbrqaqxTbhvYb6atnyF4UFsYRai8vTtUWnNRUCs6dga4ck9kKaqorenTLDZqSTDYT6xRQpj",
  "key6": "aNNJExH7seGpxBh1VXJqVFvowd2sBBSLZiPrBGjoK113tNV4qy29yYHYBwznDPf1G4YZ9vMyFGyLVcFX8xKr4dk",
  "key7": "3GGKmk6dCguMkd9QCdJDpD1xhYH2ob79dQA12iAGxP6a3K6QxaqWfQPvVi34K1byhTCXeFSBEgn3masxJgNdH8uR",
  "key8": "564riN2d9MbAjsrNuoyR27X4qgyRPYcqdxPbaY4rN61fBi8dHZrfRjFqWCf5HSy2fMr14mwHPPUYJNPQZY2RzxUf",
  "key9": "2gJuXpGDdtUhqLbY4PDRvY9LfuYNq4DFYYqv8k8vKRQHxAHPKJTtF2MC9JovLenNeaqYbirhf5S6SDFj6s9E6TcD",
  "key10": "3diFYFLrhbDKGCCLqcJR8SMAYMZzeq4u8Yc3CsivP9mhqkaVxu6JigYRh3hDt6SsuCRLCinwR2YQK5WfXURiSNhv",
  "key11": "2z93qc8HAVhmqLmPuF7i9ZFKg1AWZKp2vQ1zMoeojDJBRkhw4ZmaQvWunLJR5rkSwyUHGFNhBNWAabU1fGQ5trZA",
  "key12": "2iVVADBxCjvaHzvw3y7MnR2gqGt8anRHYrwiF7J71h5gB4Fc3iSEb7r6Ff9pk5G5vdCAkFEqdt9vA1fPgDBEDVHr",
  "key13": "41UxzQGc2WpoCya6EVZQxGy2rgtJd353RXJuQtqpba1MMw6d55dYNrzzbDxTERg9spMMbzMRV5RFJ44uyQNQdGCe",
  "key14": "2pmEp8kiy7jyXY2hgSXrzX4nwsxm6cy8huQtQQ8T4JyDAqNkkZ4ztZ85MtbJ15MLNC9GwUxFEDWtNxApaGwFZMsa",
  "key15": "5j8wpbn23aLuUXvwBLKgSm1yZFW1otHFrBhjkp2MVBvMvP79mHdbeBoYfeRomj22fXqVTUcKPSTNhJQtJ4GSgZyM",
  "key16": "5TK18kaeTekgVzCW9EeW9d6vXeMDxCgubxPbAXJ9N663pGp32rv9AnS5VRCkDSPitTNQPKK3aFbyC7KtY9DshUzv",
  "key17": "3LK9ajDXfdVwT1zrqR6VMUjFzzJoQgFr8jWyuXb2ZSoLyXS2cze1D2e3VsB7iNhC6kyrXhcFy8QxamqNKu39FR6f",
  "key18": "4FuPX9HGaRugxFjjtSTyp7r9Yr17ZAEKjDrKqjqavpyQAx5bBNC4VNLbfXws7jiWngAewwW4M5ZGNsEsxn19cgMT",
  "key19": "2d3Zpq56WPGFtP6HtaNhNnBKHUEFmUf8f41tGvgaHcNGeEXUTDuXr3irKeYqZwYTZvLbxS6CUfZrc9CGPuMMEXMN",
  "key20": "qZg5sgmpbtDssfmNhZK2YCc7Wh8a951jWp9xENobSryNZYP21PKDAHvMT1JKTfkEfmQNNcZEP7U2qVCdrqigMSa",
  "key21": "4xZqwrm4cPjv1Zhx9UKV1CwKsHzBsiVoZHfrwmTNPCVWss6RXiFoqstymvHJjZUdJaMX6uqbPEzhsSmjuifp1gjB",
  "key22": "25xBkCYukjkmAWdtQXpZG2KXM1ddUVesh1MN2oACyRxKWbk53TdcvnqaaejN9JttEQgJTLjQvoYe1wQ9yqvHv4Fp",
  "key23": "2zC78i8RdAJsbdgfMndZAi9BkoVCmVnpxdBYoWizH3c5bnbVNahKncwtxSdt4dYmF9inuxVahNaZVBBcsgssYd6N",
  "key24": "3p7ueUc3SLMtrAyWo7DBeX1GqBdBSF7cvqifAuNLT4RVwjBMGSKGpXzPkwDrqbWP4w937dcgwxv8gnXf7F8kN85J",
  "key25": "45zwBNUV8XeyNjFTj3txBQmWbBsCF1ivBNE9DVB5MdchrdoSrebQfGWfbWBa1tqVwhfvHDtVNkxLbd7txUo4GP4H",
  "key26": "WhSzTXzcXKVSaZo5Q3frSdgsphWH9tGoAs4GYp2YdtxWrTgdmWMmgR1NPz7v3fC1CXDbJ5XqvF4csjHKXANtCKi",
  "key27": "2jg4iBzATRzptnqHVrZBvf2ffmQ6EEnH5gCmQW4d7fSG6Rf2ybpun8bECuU9x6HHThdo5rYSCmDhwFZNkVJnm5GX"
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
