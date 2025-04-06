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
    "4HAHCxAqkHGB1cmSYirWJSyRxzwPrrjgn38bF6K84uMcsM4wUK6PcxMgANi6P3BCZk5EpHTaKqHSBqEkMFxp7SSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64jKZFRL4twnEnU2WRqPFBEu58j2Svu4FjtEa6Yozwvk1vsyXmTapEoWWHmnhq5toFBWfmhDkphEKNvUSRuiR8Q",
  "key1": "4mBRsYemjhCxmHTQJrKdLSF87k34cw1NbUhFUFUTZCgGqPPLyqrJko3e34YJwARuVgiXwPJ86HAg33yTAnbCoCey",
  "key2": "2Mcg175rFBH2pGuSkrXDUL3RZqs396wcimUWhsDXzM4qroVAzDjfkCVBM2kxc2hLBHARxmtZct67wUTuBFDLGjdC",
  "key3": "3dNa5YE2HDAzZ719LBwybqvmBDK9sibCDcNLLhq7kBb2EQkTnyrhDhsZUzFnAnGjPN4NpUad5AaTHxk3A7H67xk5",
  "key4": "iF4Dw7wKTuoZnE9CeePZHCDHoiApAvBCRvHbLYHeXYti16mkjt7pwzZ9DGBvT498wiT4XGagrdofR2wXpwiy2hC",
  "key5": "4Uy17GFhkDjx91toeiLQBfLYdS9qs5LZzYjsyrXcMz73cQRP3vPpuR2ve9euJLNWEQirb5wxei68naA5C3MXPBrv",
  "key6": "43nHhzjTrqEj2FHJar4v3E7mG8tFM3HD6kLHhQ4tLFYwk8q5YWh3dj216v1Kio9geDwjRyBQCJ2zCWmD8eJGG7iB",
  "key7": "66zZXXEv5uuWpPB4yMXgbB31ounQjMV1HCXCS1EG2hMDLU6KGYBCdbrCUzwhVQ4n3F7GCTubSD89vnsxAFCPahfW",
  "key8": "3LKJTm8HiYPGXwV7jw7xHuYfDmnmdRF9wy8vRt8PF4fc4eDkZ6EjeKun3kHiLoEN9Jf8jzXw1hs3mqD66uqZeJCR",
  "key9": "2mEk58HBtCFyxi2ACKDHTf4zJEZDsdXV9gomkUWgkPnZVvTZuzxKC1ZcQG6pF9ou5H9gitMuxJCsjYdy1UNEY59n",
  "key10": "2ey5hNey3JbNrPGZCoFdnwENaiGQohyqUMBQQo2KXkSSLd7PJDoKoKUT5K9oPpJgrMXEhnE2B6CnvkjYioyLA6zH",
  "key11": "3VRrVKZu4ve97KgrWEPmAuVgogyPhTTKwgXU2BeCsjcmVSMK3TzcKsLSnYV1tE4odBoTJpnkFxr4vCVdw6ksZnCy",
  "key12": "4Zf59TQGCYuEyP7T257NkazaDRxiBao3SEXjGi4b44PXxpdmQAPFmueLYEmrppygK43LAyPMQti42SFpPYf1AnaK",
  "key13": "2pRLYCWFz63dUsFj74NPm6eEGvyRjjkeHyRVpCNkXopPfNQ6dnCZY4d53FUMtNSNqmzZywypJNXwmwVmbxnjEju9",
  "key14": "5AxntaprjSEGb77Yj2zVZmZTQoWQ43jvU9gibbMVT9mUvFCn9pKhWU5Fwr78dGLg4oMqt6shW4E2BgV7n8wZPphh",
  "key15": "2wh8d6KL9eYEHb3G5F59ta9S6WYwowhsDKxCkbjDk1ZKc5eUkrUAFHbf7iHeVn9F91yZMFbUP2vH9CvkyvPmBuZ6",
  "key16": "36MN3wXNEc1uGaYyLpbxekAq2s5dRC2iddtWG7vJdMPCABqF5KZCaeEWLLVqnTMyG5Bvvh4R1jpm9nC8bqerNN3y",
  "key17": "46VYZsXRbPFnW5kTYqiHZPQ5DAR8DwAVd3XVBBFxzvykkp4JjA4rJWC8sh2jia7u8vEwcXXtLfXye2WF23euVrsY",
  "key18": "TwemcypqVNWHKDydsGU2oHvSFRN8NFxTmX2XF4hzezPbrNCBoBkjMkyChTsxJyyqQndhihPcCwmvx5GVzU5chcB",
  "key19": "2fN1fFT8qAcXWqMQuvFCc2iqDB964TNV4TiKegng1ReRUrKEZPA1oMPQA9jnfMxQfYmgVHwartTCX7A9mLqxfBBi",
  "key20": "2WsjNoxnQLnycM8SCDv6r5iGfTNmurLCpw1QQko4S6Dqs2vUf3hKJRncEw5kktHcTTuoGcFMuPbYb2nKfuCQHVJp",
  "key21": "PKA1A5KNjTYWgJbib86Mgqj6YnuqZ8fDxaujKgHKSabKMwNgudPCy8nT6HAvmjSnEQ69XLq6fx59dSGzQwcE5f2",
  "key22": "5VEn5ZdhiHvjanomTNxrybzvDKZE3B9VJT8ADXAmEwLNABxR8Qr5vYfsGfTPud7HQk5ugghADMLdEAf1XffWUCZW",
  "key23": "2sHvZw1sjGoTWiJwZoxUYBdst4ad5Eqedmf3hNzwTFrTdvM2GEaHXjA3u2Q7rUAijGj7oAVgyfso6NC5hZpjwT5W",
  "key24": "vGeMMfQQ6bTM4CQaoz2YucXqBoUdH9uKYYNaugDpuyKgoAy1aeNWzRmrTTU9vpJThk2smGnngbeqgVDVNK57u3m",
  "key25": "2uTJi874D5rS2UVdrXzayCd5f5R2w5JPTgAEvyPsfdRZU5WK1PyBad4m3AD3Fuj4auiRgJPKeU2ZWVCbgroNrHnC",
  "key26": "37g87uWwZG8fUHBiDxxe9pPwFvcCe4XeQaPFJU4F4BbxfWA9nA1ap7qxDKgDUFxKNJvPzgtyQsnHYAtzwZYj8n2s",
  "key27": "27qaxMjDvrnjMhvMNDY8uoYNrjs4XfvpgFmo9hjU2YovXEGVBkAU7ZfL8inoKhgK15nYKizre91TRwVvDUUe9dVB",
  "key28": "59XR4c9MeUbTaZvBPB2XMpnn4Zfp2BGknTTdzXsc5Leh3gBxJyWUTnH4tnPQwUb579bC9RrUP34L2Xqksu9p7Gsu",
  "key29": "38SmKWq5FjZEBDLs8sNEE7BM7fnzYNQvMqcSvSJUriJF1EpT3TnSdDE6HrCtKdCqnhWaBLSHYZ9w5MBYPp3EdqKo",
  "key30": "ge2dgvdZtsdjqTHo256BdUykEgBCJoVDjtABGuZRvLuLketXVyUCYKDx8yhBjqjS9aDYagsMBDCH87eCy7UhCuo",
  "key31": "2hj3nsNrcjuuD7fyK2nTKv9hM2suhTFTAtqRwQxsnGayNgErAsVdjx37XdGLhiz3WKC7VAq81csEq9mQreRarvyK",
  "key32": "2d6pX7FQHKz1ayKKt4BCCD7o99M62DvFr4cJxh8oEUm8ECxDUS7Hfvokqyqb4zR3GcEy7RwyPr2nb75GUeskS6Zt",
  "key33": "3fmc343arcsbbR7EaBz354AVrRrhfghLEw7CQLHnbmN3C6hoVfyH6qkPBj7mydzKufTz41aPoVxHEYuDLrWePgGa",
  "key34": "2xF295QPnC7TpWTYjjbEQCbwjkme29iCn5jYRejXnqHex219q88TeMNcY3YiG9nuySv4Xp8xb2RQbLqeBoCcgUMo",
  "key35": "3WxD7woyRjZWt4VzVtjWz7JZXCeze4UHSgNTz6Qrdzix1gvPzdBw8Jfzwp8SZXFfdvdMUj7qt9B9rzgRheBxDQdV",
  "key36": "4giGTBDKQpvQfrhZiSqozidxF774G2KpUVTo5CUPuun18PRgPVfTfyZEoNf2z6pbxvBSuSt9W28yJtfQwgE1RV9h",
  "key37": "47btyhLE6Ci1CoCDqTnxpRJNysb2tncBuBoKjPYeMKrwZf1RNJXMmFsaS2fymfRrhPgf6iLXWtthsFRX6NYFSjHP",
  "key38": "wfwAn7baAQAHygw37WrXWshAsW4Wm8Jdm43d2WXkA3j7fYXJNSnJTXCkxgswmEbw6DeSAqviBegU7tCrdDa7ytB",
  "key39": "35HG2xveFVLcMtpwwodiZGJLfmBvwQ2FJTboYqVNXtp6WZYahHwXutDTN9VVJmKTaqQBBRuq2wJ76B79mk2Siyf5"
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
