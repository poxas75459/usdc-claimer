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
    "5bo1xznjPSEXp7eqsWRhp7NQC8GAtR3y7S1qn73RzeVZMrVgcD9kkT3s4wF3jTXbAkCzb3h3iALM7raNZ4T9w6NY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KBhadgrnkCSacRLYwYNmTZA2S6qYHvE6pkutLL1jCFf6qD9rPKwcZpAm76ZRNUzqB52msNo42tXZByiFkvcbDBm",
  "key1": "4FBkNJdfmGE9aBTPbRiku29LbhXVKRidTtbEXCtrpnx8FFZoZ7wfEu3tg34XyZv2LDeWqDJTGi7tZ1uxMq2qmyFm",
  "key2": "44atBYR5F22F4voxuFiiPJcg6CGUEQmzW8TFWxyDF67VEMtX8vCr8KWzJBVrfFT3CwaDXov85FkHJKxq8AKfGubw",
  "key3": "m3G4Ag5UNdP6V6Fa1dNqRWUykpVWsLQDEpD8TxbWM9vBJMBTNVx5XQi2Q89ban47ovYqyGzFPaN8p4wDabcQYnc",
  "key4": "5YxchomitFLy6ba3YTPHRdH1ckc6Eb2MKpHjfDtaBh1bv8xv5sAe3UpbQhY5vfjGrPCrPd5mYWFCpbsjpGjECMpg",
  "key5": "2dfwj8RJeLG3VG9P69Sjwg9dyvYc3yjbCwF5KWfCg8N7Vg6jMammvW6snBehDQ82v2kRhoDQAWY7jn1whbhyjmjg",
  "key6": "5na8yGQf5oa2BkjJyddCDiWzowJUHLRjgo48KLfpgqk5nWGKuSKyJ9fL4Btr97WhhucosFEXcQTjyz33KHxNbsUG",
  "key7": "42qp6NCDizAXdv72K8BfdrDYJ8aTMh1PouT5ZVNVtqVpXxmVmZehf2k3QSjHKGjHzwA2kgvijGawhzVkwULc99La",
  "key8": "3CnNBnnY6TmCiAaqjfp8Zcw8uzk8VDDUpWiy7oqFZe4a5B5WA4zLhBxpeZRud1rxJJZStC3xXTtyxeqzweMS6XvE",
  "key9": "5UsdymseKjyVGMWWERNxAfdBYaJFQv3fuXksCFtoXUGKfukxeXKiXdx3Tt9WhoUYFEtwWpL9Nckv9U1J6qCAisxY",
  "key10": "3Zj6S3siC53PuGYR8G1QL1b46A7D9bhxQTQtWdmGFMwmaeDYPn2iSbH5Vi51KZtzXsPP9zm27uKUAfxJ6SxDajAS",
  "key11": "2z3QWMHnHucBtGewKEKToJsdkztvtdc6YpeSDXTvMKoew1Hd1eygK6R9VgJQZwx6AGo5ZrD9GAZt6FKBZAVkxsnj",
  "key12": "oVB4DH4h5HYvALQvgk2ixFUUFFLLNMoBvbT9Gj68dqqjHZdgU8uHg3stpERgkkGX2mjzm8fEsRe3qmrMip2rbf3",
  "key13": "2CYwEn8LxPLAVNL4qz7oFGNk9crSQKjGa1pgZQJtaW4F1i79tN6pLTmkLbjMPohmR9nJAEFR4AFcLveUV5zfd7Tw",
  "key14": "5ZQv5pKtiuah2i4btbUQdEKcQJKnnFNgWcgucL7JtAA6iKVTGcioBmQxFvL6X6Ru5x16fSaP83qwPNx931LHGkgj",
  "key15": "5cHMPkRJZYjCGt6WKKDmxDZZYfydSLo1Zfo8ubhQ5btunsoZvinApGKeLTVAk1Cj6QUxFY6ZTnThrSxQi6pkuf9K",
  "key16": "5rnxsyB1YtzPvaCBJmTse6rAiLRqXqNwTjVs7p9xL2enCA3NzzKSPA9xxwxF9XtppCJViJbFcFzgk8Fa5qWrJfXs",
  "key17": "5Wv1yY4riCp425mCCyyB2782dRMMZS5XTKicCU4yRGABc14au6SBoQDfL2giyNUXuEWXaToHgTvDbFFGFychesN3",
  "key18": "246VMC7WDXZpN62mWFgkK6XcPFDYEdMp7vWydpooKufWJNQdasQqtLWDYNjBBP6kijg478TD2vghmgB9iJkfDoef",
  "key19": "jv4eAqkZFKVmdsq85JXSMjuR9SvrwMqjwxoDMmM3sQmnTZQRcFWd2Ufx6u7Lg3ubL5X6hcrHXQ7S5hXAQ8rpRfy",
  "key20": "2BQSKeMER5fxrK1KG2gZS9QrSqGHR3gsQuqU8nK4MYZAXM8awmLdRLmbLGZz14f1K3zXXx1532wP5uqxsiPWCih6",
  "key21": "9zhy91JY4FVa1HmtL98XTxndY1va3fFXB98hy9Way1VhBmQZFUGYfVzue5Ws6dcaG6diyaCM5aH8bxPyfc3X74N",
  "key22": "129JSBYPRnYjrRHAfoHpCDbuba3K2UEvssPbKAk72oCuB3MAAEbBi1mYd7diLKpKPaDbXFsP2RGcTpSuYdktLbSe",
  "key23": "4CHokPFDqfPn3BQZLF9jXKDnvTNE69XvHHXZKP6rNjEwm2nAFzx5THCfTcMP4j1P7mLcEq1B7TpTV79JGGdJCr5L",
  "key24": "4SA23JdsD6zQkaKoANSrqygUQMLvfUhqWjrE9ipTY8bA3miHWj5vYo9ReY5j6xSeQCcWLTZPJE2o1yq2eFktgZwJ",
  "key25": "5QwAve2etoGmfaaQmm9H4y273H76wHBbcEDqQEW9BaTYpfEhxHfspGjLyEaTTBW1yvuMHoMEhVaypdxs6ny9knbq",
  "key26": "46JSrdU4WsfXm3cdDf77SXgffxDEH9LKd9cyBGudzrNjhKXT5aFxEDjbWsVmq8cEM9BRsEBf1HdkoKW21Sw5Bc4L",
  "key27": "4wF4jvdopsNsPvid3DFjckB8PotddQgCknSN6hAJtiWpqScWojVuudswoYsnUkpcr8DbUtGng5THeiKWdGGQVUT6",
  "key28": "5EbCiMrn7nYqZocumdMrt9bD9pMNxnQrQ5rffNFgTsg2EHV8Q2pCPSxqXx6erbvsUwDLCARGQq2cfbrdNtuVMPUP",
  "key29": "TV3ui2yhLmPUE7vYNGmy6v7gRjzNWBzcVbJJXPdbKTzMqfWUewF7Qw42QRfZ8SvUY8FmgySLAqEdSER6bYgyipT",
  "key30": "5e1qqfMuJ11VQqvtSb1PkCkEAQee1cuy5GCHRfE4LThT4UFCLKEFjMbQVmniDT2ybcq1isjeH3WprLX4AGr4CM91",
  "key31": "5NF2ogFJQ4mDH84huVD7nyxyrBkbpoQqdFHiwP5ggeuZ2W3tpQZsag66UYekK3NADJV997qCEaiUmvCPYSHRB5CW",
  "key32": "2x7cLYaCiZcVmgVFYo21NBvivpQ3yQBb4XyeX5vgAgCPrZUAvzzkrj7ojSr4ncQNfj3MdTwjGVapXKtmyxejiTBt",
  "key33": "KhsCXWwyccHxfjYou8p3YJviRsRX8D9uUeqmBhRFjzq7TCR8AbyMHQYfgZL3xkrNAH7tMzTAQ8th6ZVT8TS9Q2y",
  "key34": "5tUReBgY7deL4u8nn2CjiWHbheinpp8gemKmgSn4tLWJnLgJXL4cXUKKRyWrMoXE3yySJGTZrCoRbHHxboDXAYj4",
  "key35": "G4FQPNixc9rYwkAbNNvn5bEs3MjkbpyKgqojupQtqht1mWHBJ3roMkMTUVvxbrvS8oVZaYrAPQXCVsRfiAWz7qx",
  "key36": "4Z4yxnXL3axKaiRqYL6qskXU2Z9ZqduBD4V54vLE7DNGCg5DZLewuUmxCnBjJ6hSZGpwCMe2Hk9NQsschwLFvsuU",
  "key37": "5Y3pf4NRKZY6mb1Z6ob5XAtx9kn3KfFonzVK7oaPXKiERwiQbSAGcBobrVdaH3X42MfQ927f8jCSwhMJKgydJsj9",
  "key38": "4bBDSHFP1jMRzNjCTyNtpkatMH8MDXBQWPHhwe6sipYVwcUCpvrpGdFCTdWVtwQXbpBsAychkksQV9YG8mQ6NPok",
  "key39": "A4h2W5Fm7zFrrsMqVsMuU8e2zYVZek61ueeCYdMvU1J8ZWrMvgBhGQradzW8vxhiV987KaQcqR6WEbGcRJ159Ky",
  "key40": "2TpGR53ePsEYMjuKkf8dR3MgoDZNhqoMT2CcZGUxyEPqPr21mW7U94EXyhgYCw4hqcXk1zKrZFectftroN8ZGm9A",
  "key41": "SA1zqRq7XBsYm9NHxeC19zvxuDpUXAt7MwioomL6B9dMZtxvfokKTWKAmd6eMqdTWVfw5x2dwFb7EmCgMH3m2Go",
  "key42": "5Aq19tC8mY33rbEiTUNW226u9wU9Uykzy3f2XDdVTWPSBTvFXfGg8SeSdPggjmZqR5QYqTWA9qyGwtRxix31nLcQ",
  "key43": "2iknZrsBKYDgvKbmThhhcjtg9eBJazVuMyTLzSqAsmGyNeHRBDXAXbSYQ7jYSf3RwYheBjcZJjEdMWjMWvHki64p",
  "key44": "3xM66wPQwErNMfNB1H9SjT98FJgQAnCBeW2LkiiSopD7QSrKQsim6Y68SY7UK7WT8HUVJQfUyiUDxCg7xHPedWgv",
  "key45": "5M6UE3a5ZgR1J3eTWC6aBk9N1K2xyK2CydEbHHqkHTbZfNNR6nQGghqGqEcvYRyFx2j4UTmob6H1QKE1ko1bmpfc",
  "key46": "4us7r6MwrZ6JmS75eivjeAGxroCymZE9SveQQkQa2PxZhq8r2ctfyqoANwpQdPMxFHGkyfCQjCYYjxmPRMRyUV4H"
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
