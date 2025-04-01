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
    "5q9YEt9DhqGRB1dx9EmXJvVrzsAjHJdRRcz6MrgZ7TstDVdhXoWvjuQsDZoEmHY79f3nE2fqhgG4sbUW3MUz9qLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SPVVRPK3jfguaXJtpkG6McuWyZpgCyGsZdWmrRwVoJ8HCqYW4J4VfstR7QgSVRxnYnQ9yRniKNFwrw2UJ714MvY",
  "key1": "4YEPpUEdT3UFoCg9Zwgdq8F2VGmY5F5xw2Xj9VCRGLHfiqMWaihe38K5cZPeK7uWiTKw8JPDStWgA6HxLB1aiqE",
  "key2": "2omH6QfRUGjf5fSZ5XEbM2AcjrQHeMX7qaWa4FrgXYV5X8Af1NzRfo8bv6PbCAQ1njbtvN9nttUXXuairJWJsiuJ",
  "key3": "2WjNZh4aoRNv7qHCZDTdnCGt92DNomSadAML5mahj4Uf23tNWwRpM5m18q5zeaoiayj5GF1GFeGrnrbHouHc1Xe5",
  "key4": "bERssnXvHAcKrquWM3StoSEpjmswDaAmQCYWENr9MzYgVVC1BzcSNvd1RtEyRk6MHqcWcScw4mvWQEz8SGTcuxZ",
  "key5": "2kLGffxjhNbtvnooC486EZmJZAZzxShYVSLBbQK8P1vpL7xRDhVTq8XApmVWQAhTKXs9i7njtYJvDYpNZMxQsWiE",
  "key6": "4RJSBKjZ4yuhv5ySxXaTAqC3UFv9MbgV54nKj4BaLt4nHPWYdDDxFwLfvrUQhTc6p6WTGD1AhKQFVynxwagjYyy1",
  "key7": "5pwLufo7WLVqfhwRqGZPQ3gke4vbStDpDVUvAG3y5HxoFF86mkSiSN1B6tfhMMzzhKpWbvdG7HQwZPBWxfKJsT6G",
  "key8": "2KBxEY6isKz7Db32xX49MNYheZdbB5nAzTWUA3qEHMzZBfGVvTEwv4z6Y99z4JKYXeJtxg7HCXdZhMbZvykkNzKm",
  "key9": "64DAdLUdGeEN4PiMreUkB5atLHRRSfpJ75Lg4B79pnGycddKjazMKfNJFmtDjAaLcZ74TifFBLLgvjwX2y5Z1kvK",
  "key10": "z4sRDGsmcrHhuKAbabvQHnxCZR4bWjY9k7PkvFK7F5C1WR4tT9bt6yVF31m8kvaC8KvxMuvzRjLne8p5FrM85ZS",
  "key11": "1ZCYPxrPUJZq3yGunvJjnZTcFfXrSZ94uNrKArE2B4HoNrTKpP2uiRK5CKumjJLcCf5VAqhBjauU3oWQ225eo8N",
  "key12": "5WECeQdiE9bXWXoxnDKYgeMt8ySkxBGfkdkEqzjc1mHmAwYhwqdD93nFRsjB4GFjiihBwjMC9KXMvLiNdFtupXu9",
  "key13": "3pPHCF9wfkWrXa1Na2MtvwL8A5z2u2jxNbh5isc3YHVgk3HWbL9Ks7RYSJnxvZU4qnbYCnRf8YPTs5g53NdSvaWj",
  "key14": "2qGorTYtoveTWaQ61MPaL1GqAgLrsnUZqoj3R2BVoP5E3EurB7wiK5wRdsbHE2zWQZYvHBMmxr9WEkj7yL7UgkD2",
  "key15": "558GMwcybtAmAXcaokoxFNDXMwZRbGWREqg3jXChFEnaWH1Q8FphbBMHuRoCj5iXPoA4ZfTVozuVgjZftpyhG6vB",
  "key16": "44sqa4nkJwWuiVYqXWmvm3zGP1pPRFXYPNwjGLBU7LHrC3QRktapF5B2ATA36ejGV2CrUhFUduXCN58xF5whtYsY",
  "key17": "3EuE9M5mx5pzzedRXcnQoCWhqVcMEXeS3UvstdLV9kyv7dXDgJyVfDUzvi6griu1ZHUHMjunuaL1zqzwetxT38fx",
  "key18": "3YJBiDqQiXwv6vYSSbEYdbtcsJXB7MVoUrpzh1KsSN3m3vEZ6xqEmpiWkuDgoj1oUBzMzaYWkccs5V6PjL3jRNJh",
  "key19": "3MxyQTDxw35b13uMvrXs1GsXskAnj8hCRR2zFB58paztPjrcGxYCjBFzzN6J2rcyrDRd8GT3cT1i9qVc4fxShyb5",
  "key20": "2v72j3D42t4vmZ9dUwnQPgfRLt3uKXBJxC9Zc1VzZtiMmonfWkp2fZgVxiz2obcQKuVrfuKhME6p87478NjQhPUJ",
  "key21": "3G91CMCLnrw2EG6NyqVbWCDtVeghJkLiK11iSx6jzKe8u5hw29LRdWVRVJaCSjuSh9oV7CgVcHWQnxxikuYo6L7m",
  "key22": "24MS3u6RjwTdink31JGZkhhtVjPcyvrTbxr6dsfH6X2uy94eB7cH8BLf5MejKiccbSL8AfkqJT2SZ7jiRFhki1TW",
  "key23": "2ha9MgPd8PKsBa7nhTzqgJ2hssSLht3fKczPATRLy2KZ8pAo5dtNgAnZJtJjJFFojzsYVJnAcSDaSX7uHr8Bocmf",
  "key24": "4XF6GHg6s9EXXVDk1zLkLYgwnfBb15Py8YHbctb3m5zyCnuewewnkh73jpXGwToVUzwijhEwAmiy91da3MkjfeJs",
  "key25": "4d6Y77LfZtbXKea4endu85BszUtZEoTfcWqdELKFZM2qihY5jmK8uwuYTSJsLTLZ25w1Qwkg3JXeAgjdrvN4ZdLs",
  "key26": "DP17dqsEAGYhcu6vZSWzPeG2bvVsqetUHFnomJYXdoKdHMig1XH7zdro1Had6yr17ohz5itV1nnBPLwVMy4ukX1",
  "key27": "3nGdQfrFTR2hvzU8b4ZcScJpGXyqoTGn9cefVayeK3GTd392tB7uoPQCmqgDX631QWZUdruDveavkwfpo53JLTnt",
  "key28": "58U6PvLFXFK7F2cjLR42zgcFYmYAcVBi5rLboWRD4trmWjfh1W7167XrxgVJaYngWRuNU6P2nW22dSFuu8hCq3H",
  "key29": "5uVPr96oUQT33hRRtonvMRYodDYAnSakXrutt6Pgu9tDQ5E8YtRVrqAkj88aPXWK37ye7Y9bkPqJ6rfZKrGhh1YX"
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
