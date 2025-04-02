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
    "3ghhyVGxDXsUbChdqMnVBbLvq8ftnGwAnL9uWD34CRsgNkdAhbdyyqmSNfxqXgicYchm54yYsz5GQREMsVjCry8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CggrEmNRtxRAhr7Pf7M7LmyDWiQi1Rfg7nsPjQv7eguwksPfMWyTUt6HNM85cMVxBrHHBi2chcqTSgZR2fduMeB",
  "key1": "5BXcG3DBAmEQFJ2P5HAYtk1XjFTJ6C25q1eLV8xP4Ncn1TLny3Dnh9pexFzyR5CNkNbNyrx3cJFoPPYxJpMwSmsm",
  "key2": "2kvvipuDp87aL4AWG5Mt1raC8sVcCaSoPikwumbKDLgGRq9pPVV3yyWp6HgAkPMa63sW5jkrEfJYF4y23zdiCVne",
  "key3": "2Lycdj14ADuX7vi6z2yPfBJqc8tzz98Te9t8TkivFAQN4EXcKgidusWKuBXhyf1pH2PaZAcQYJWTRFNp56TKbNK4",
  "key4": "4Fiv4TrXvEQXHuBeS6XnPoVfTuRiigngESTSRyMrRo3FFTWwSsD2ZAv9sn2KhpYAejKefNBiwNyeVWT5xM2Ub5p2",
  "key5": "aSeJFPung5xTa7zJiAL8y4iWFddLficEdJHaou5LLiKCxQs7V6cZYZTCA9XKYdK3pgGA4XeNxKSX1MkTHdBFg2f",
  "key6": "5LkmjVSiFmjrSkdvjTE4PmU9oQEpfLZhu75h4VYmSPtp5NfLgHZfEYhdt2QAo32WMzDGDckFdhoMnkxyN16wtw1Q",
  "key7": "3biW5bJTP8v1fGFSFHURWR6d1Z55tReVqxrwP1TBouD4XYFzn5PbbiiGbYiRhGCrtW6dBqYrUFhT3XF4YfXQVNp9",
  "key8": "3L7KV2AfbhHdnAbCYeKf2P39RbPvC2BVRwFJE8zBggw3Kit3VYY6x6fzfAiM82b8GLzLRd9gjgCQWbnQNUsEbQGb",
  "key9": "wU5m2fMRZuVbJUzpFk1rzTUQMogTruYnorfSGoo4zzv7Q5Ekfn15xjsKiJN19ahxTfyYMCmbJ4y8L6LBqE6z96g",
  "key10": "4LzUUNgPwA6ErYc9o82ta2RVhvkUjSWpfinUtvvh37SEdm2HpQXgAHFHQDhUbhd6CSdanngjgiSVpnLPrBHTmUEd",
  "key11": "5ABcqXBvT9ZCGcAVgnVsKRjeFfQhKTvGqNuvGncGNwaXZG6a8FRVkqj13GHM1iq552r3Mc9YrRYnz96xp7ApKdhN",
  "key12": "3PfRhqBY8oGVnqtS4uKr6GmFYRZtxFxFgWh833buQ3rCHBwDwhcTcbTf7E6UyZHVkAKQhDKug9G9WnEgbdgTaUp2",
  "key13": "5zomtsv81uQu1rjuMps7a5qB7NeKkfbwMh5eZXPAcSH1uySeWZQ9HWkv42BvbkkSBbEBnbs5tHZCiqiKka2jHmfU",
  "key14": "4cVcqurzqW8Bfx2VUsyt8NMwoUQre7XHmrtRQ9XUYN4YzYR8fxijqr2ffr9CcHv5ApQgEbFpUuKXYGrYTBWJXfXv",
  "key15": "2XqtzCk98ToASsJ5o4JPiG2LB5RwkKBFM446YKVbwkvPfzMpBiUBgEoP7eDwJVDRmbnhbS5T3upw8SpfWx2h9ZcM",
  "key16": "UXSPBAhjdvZFzbwx2CZJxPLsrF4t2AQLu2WgRpcw1sjgHDstMXFtWNtg3sKRBT8s9MRwoCBnHN4P4mpLyhknwo7",
  "key17": "5S3jkNEobzEqXB1wVm1wafgNpK8UsfJC43SU34ZCFrUE7u3Cdsdkz9jy7hKsLgHJ8Ljj4q9w1EZAgbVRsBxPqwpv",
  "key18": "R71UN9JtBttxKQnkTPx57tBPhgSQTZqzafL4oQMUaF62qoHvyuzq3DnNP53oN19yZD74LjFN9VTY6gsqriNFbXf",
  "key19": "5f8nrEpgE4ALqnBsUzq4xU2PPZEJ5JfUNoqhDhRHhwX9WsXdQLB53EkRknwB5WRS85NHgtz6sc97JxKwt9HnrzeC",
  "key20": "51Uv1aEE2wDDjnK9RMYLKvbyABCXBLLJAsnacrCsexVm7HCF9RgyjmVzAK7cxzjQSe1vQA39VsNpNCR7N8SykwbB",
  "key21": "438CsQ2gmyyJ9FUKf3ZpbzEPQAc22y3cuqfzcfW3g4tSNgi5yVBpskX3ZW5sURHU15AYeRE97PeNGY7hDmhGtHsd",
  "key22": "3GAeWAYi937LAuY5KvDxSisvsj5qJMWSAMKdUi2NjBhPAKoQdhhrsmEsrQHWgQwziWZRmob8NsyhsYbjyA5Copoj",
  "key23": "3EFa66YH33wccqjrm2Nt5un2Zn6R41KmGYxsTzo2gktKJcUobNqkcWvtbx5TmixTsY4fFfGM9g6srRzRunmCHsfF",
  "key24": "5deafwsotsbbtKrnCcwMby2iAb49WrMAjnLBKxUF79KonTqqSCVATioEx2Rgsx9j1kT6pmDu13EdKvrpbatBBduw",
  "key25": "67eaCraMvky4zmyHJibtH1NHCPLWfawuDhvHX6jnLak3drcrVmpZp8rceM82kqtGRVmjWefy2xXGbadGxymmxdgs",
  "key26": "2G99kTsrgZ3L2y8zK1KDckXoAwPR8a49kCRrC795bm45GpasmjrQHcvPxZUHAdDiPSKT3HkfgPnuanfKNGr4h1Xv",
  "key27": "55QgNyPrwoqaK1QBv1eEc4RadSNfoC58DeN6wNYu53XV1sKy8QPuLoeKoJnSRmQ9AUbhoq7Fb1mLvRtmiwBk4gDL",
  "key28": "3joTZJarR9d5XYCtT1qXXd2r2VKAuCsp8UtCxrj9aTSddeRuXdwDU2XA1tCdkgEFD3zzh8X5P2QH36BUjRsRZup6",
  "key29": "3b6i2gJ9Qdu7d6nXhRNGrCJCAYWFSrZScQuDDcyW4fwRCi8vR6T3NwZy1NUFt3TAdGa2yCDSNTeRgCCevV2fRY4k",
  "key30": "46aLFcsQfa2eGSyahumHKFBfexDmBotjZRXmR9bbrBM5jyhAMNnutrq5xotBdYCwxsWcAhxduFNZy8L3PQmg3Nze",
  "key31": "3GwhtfMVvKMZCUorq7s1M4FDrzRPQMx9V5PPYHAQBjRo6TukfCjeXBUBi7uPV3jEri8yiH7X88j5tfvCBk52fkyM",
  "key32": "3UA2APnpRpjDdJVZeTfUaKjEDoo8DwBSDACh4JyzppR6chnwoqRySWMvG6VKPsGxy9AZisCTKg81Lu2mpZ3jSZg2"
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
