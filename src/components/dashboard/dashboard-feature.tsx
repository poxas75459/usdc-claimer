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
    "3r2tp8rL2onjRsCmhjDYUWmQqdqMVFfeUF97nKpVBQnyq94dBzaoDKN8b5EzNqjE7Mwg8yf5f3RJoMHq5CFCVxnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UU5Mf2Qc1NtzBAVDt2aTeg7WK9awF8ukrdiKkjQavdv3TpxQQM1q95RR39tDxJJe57f68aoK8fzEA1UDq5sLfvE",
  "key1": "8CCpMkLndynrZ39o57V6ync5GYz89nMH87UVbUrnG7K4DdQEPhGD4TYdDRoTAULH7YS4xLUWz9jpLdjQtMmjrPN",
  "key2": "5nXEwkBKiMr6Kn8bDXUoD9fco7cQGb5srMD29BgwkgdTsPXYS2kpgB8xJJisWuRhfPYbkfzhPuTzU7s4oQbgGfFt",
  "key3": "VCLLjbYxQyitSTo3cCGnoSdYJSUjsGT7F4Ar8W3Z9cyfT5eQfrsKTm34FWr5TJATU7anv3aHr6Ucz4hiMWeXF79",
  "key4": "4R3XH7SzsjmZyrAaPTNg2SbHEyBdt1pB9rKk11H45qzKHAUnyutqwvWvbt2RmHjsEXguqHtpB8cNgDZzc5RVRi8j",
  "key5": "AyENeV8s6uDPqDpEZY7AY3C8PS5qaeznYeZ6TLEYMf3rs3Uya8dQfwLcWcNn9nF7WfSVCPEWHi4xFnmph1rvkds",
  "key6": "3fDym75rS5cJ7MPYeB5vp2BtJohW5MvYho7m74eRA7agPjwo5RkAkWhvoAesgCTZQeGuqeFQotLcTQrafN54Sweh",
  "key7": "3ktBoVCbLBSeEGwsJSoBD4YMxRvs46ZE1TTsrsNqEHW9TXaWCnXRYHFtuBaBaXtHmbVQ2i89z5aJXYqXWdBDvbbF",
  "key8": "4VnRaiKxHfYeob1KFL4NE2w3fcZWGL8eFdWE9rvZuNAp4F6byj6rSzzFBJWxdoMj4vUBNdXimptfFEyk6AtyFu5T",
  "key9": "5wohQCKmgH6iZNDpJZmHmNQoWQxLvAW5qKcXbQmapft1Gp6y26PTcYFqjqSkPiUQSvNxGiR5HWbeTgQWhsAisBdi",
  "key10": "2YojeWXEQik4Tw5ctBM6cdQWXqxNn5QSh4gkrjsMfZtzt3adGCP83GnfeH6tcXTpLsoDNFuSE71mZ3QKWgkuWDcR",
  "key11": "32r9Zt4DwWd2G4K51mYJzBUFHvezqJKnNiAUgHQEHpjEfaMHvLx9ecSxaQz53KzRmbSzVj2zDFpFgh8GQYp9wicX",
  "key12": "BhP3sVrc7jeJFNoKShwxDbkkK27E8BFKrVUQeVGHCN6GCJCitchqazh2HXHmx3iG6H4hY36FtDUW3N7atV6VcXn",
  "key13": "5YHYRRsnTXFHXvgjHJuacuZW8REjoxvrwoJasRKvvz7kQLjvtHe9vBz7onG6Qm6XeEzpvfVQVTva5wN2xEz1rA9J",
  "key14": "5eX56oj9G6PgHk9B6n32b6KN87fdRWszAyEExf6nC71FeKcXCtZiRzxjcPMUdG6nPMKJAwjLqu7327SEqCTMteAU",
  "key15": "3odL6gtKsXTTKSKk7zVtK7KWSou9fSXYmrxtMGRbWcmMtEDMZDYyzTgtNrLkGadGDYPvZU44dCj4xYArUmkuPjmJ",
  "key16": "4ESyAHi9kWe3YSJZVoHhBqk7SejrNTkprmeUywva4LUp9v2B1MGmQJSo6xmYw2MzdTssmpynvov8Eqj7FoanyJ8",
  "key17": "BH9zMmwtPJAfFLBZfkB8oPi2tpF84L9QqmLHEywMNTFtSFdAnFqwPdrmyxhEGauKZAY1FU7QGixqHgP1KeqZCof",
  "key18": "5qCyE5kK189anh77JPGS3ihCcrEdHEfXvBZjdho1e8gHfuRGYUyrvDRcrfnqWkGe7jS1hQo3zYrraWLuTLQZ2EGL",
  "key19": "3gvAhYuNKBVsYtDfekTM8jeAR5kLKei8n7p2whFU7ihV5hfRCVWvuyPD79SXo5BHu74hcFBuqxN3JoPossF8HfDX",
  "key20": "5nThKcs4b3zCyudrvx9LDVvBsfRW5yfrVBEQGVigGgiFXT8GQ82GmwYWTaHz1c5QR1WBj62wrsWsf73XPajotEVw",
  "key21": "tPcGoQ1bF3QKiYsV5bGZ5dJWt4TNSipuVpXCcV9CYmmr2vTFwCxm1uwbkd1ci39GTcL8t4ZJaEZof6cj7gCXbTL",
  "key22": "45JyvPyzTVKBtpu3VML9VuR6Vaz9CBFwRmB9TLgTDRHiwFQ1kZJPPzqZRkVA9Ej6AmBoL5oKhKZwkroiZGMufTyU",
  "key23": "q37hrX8ZkCn6JWPnL3otd1QuUFtRbg8wH8cngkwCnzd3at54RQVhUcZmNQudyVAM2vqumadpHsykFHXb6QDKHsc",
  "key24": "6NBZFLXzYNQXANcZUguxZC1mHpk48Mvhq8aA1tn8xYFsoQgeE3smu5k9Xgixnk6mEptQNHnwM3KCRHXY4i4X3aR",
  "key25": "65oR1rcvWmY5rm1DeEXwrFLQUNL1e3Tf3PbUq79D75QborgQcd9prNPQ6BVPaJMB9FpBxDQVoX7cTo5D6HDB8t6c",
  "key26": "5t4rDYBnt7LXL6vZQ3tRh7FziWTUMvQnYJzwAd2nYhJBdGJ4Bg7nRdNdJxr8P8u92YZ36QJUgQY62LFWZciEmU9s",
  "key27": "e2mjeyxNsxHLDvHoVJKDfNedG1fGqUPRHeC1h5SsCTyB2FKRC81TrXEJmVJtYZuPbZvEiBhknKmuyjwB8TrRcBC",
  "key28": "5bkRd9i5yWk163rckZ7sHS7p2s6F22EBfiUhMvnTq8Z7zDEjRCzXWHdqfqMUx1b58Zkj5h8Bs8dWnnurdU9j8SN6",
  "key29": "mgASZ1Uhni6PqbnuMPBxWCKggbnCZ5a6hmtY5oqQnpXWxvUa79pmBhoKKBVxFuZFNUcT4fxTSKd8HC1d1JeKS8F",
  "key30": "4b4dAZbD7CjiFtZ8gi3TnAyYEY8utuunWDD7AZNVMsKgddm7o6B1uHCqyShSDLFQExiNGxJXsVqEw8HXcrs7F236",
  "key31": "4R9t46QuTyNgkZKF5sGR3p7YsQaGqN7LuAjVh5iRTVxL7VEyWBTVGXnqRVRR2zBaD9KcgZxwozp9JPzDr9GtP9Nr",
  "key32": "4t26n5anccuZMq8xZuLPRXGC1DgMKH2kTkDpRoa4mGANxiQGVXxVhTGCdQCMXbM3fNxyUbMPMg1apGdmsm5jcimd",
  "key33": "2DTcJeLKNMg9isx4xCdo6nhdymjh6zcn3Bfuc7gvCsfNSbQrqd5ns8ttPWTSsrEvWT2egiu4s4uUE5JJvaResV6o",
  "key34": "NdZNK6ZkjGKQMXdhJnMMhy1RgmtgkZqcLCjVoHGXhNAtY6Vg2rzCUSagTM2PDpA7V2oaEZCC2iYgCeFDwUzaQts",
  "key35": "z5uzHChM1BwUNt4UGv2JPr1KPgu9Y5KVse1PfyUiqYMPyAXQ8QaZF9MDu7AvRmTfPQ6i48ZrnDBtTpf6fqxxn5H"
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
