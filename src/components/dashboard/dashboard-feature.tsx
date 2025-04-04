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
    "5pSZj1n6AaXzw53RZkujFm4bAd4M769ik2nePVpnuBS8oRwDyLwGisvsd5JFWvkRPUU92u1JjKzqsaHaQFasUa7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9CGW9p2ArdDCxaA7kquGYfFoCqSGxKzz8wQSgJuM5RRMoYkBewLmyB2fLcREWE2jmkDd8MJXgx32vuwYnhF7BW",
  "key1": "WAmpDjn7fkNr86rwv9X26UED1HMTuLfGNkf2oFk6ax6NMyJWtm5Y96oS2YrmT42NGtAzsYHg129vBWQZnLHy755",
  "key2": "5DTGG9WjvgVdnDHdiK4tpB5SzGH63FcQz5bQb7mFNQJ1kAkqiqdyXj4ZjRudiKeTfAB9gjpdxUmvyy96v7o2Avr8",
  "key3": "pvXMx27APkd4sJcp7searkMFXPfQwz8MetZ9SW7w3RgLq7TJuqsDDejupXgMPgnkyydxRQFfuerbUV8DpE1QKjw",
  "key4": "2NdENNh33m9JXFdMGKMSaCXtJdJRJTqNyLsS3D29Rr2K5GzNkaAEUY2RQKbj7KnABPKv8ng6VWMdoz4ieP92HmWX",
  "key5": "4GNS3H7qn9koq63zi4wEBfpgxhGM56JpPG3VRojYzqZaENFbqqmkTAwgPJ1rzePGDVQAPQFKnWfD75D7dT5GFQkC",
  "key6": "3gtTstF9of3jT9DJscNA3wZFxLS7TfDwZyJrGwqn5Z8fZKXuhGJ7fbEbfC9z3FpnMPePpE6bmWntq3DpHL9eGiaz",
  "key7": "43GC5M5d93EWX7N1eEBfgRkm6JjrSy7Mn4s25AryQM8ZiniuM5SjnT7ZmRkcB4Y8WqNKWoBfpu395ctD1iX4Mc6m",
  "key8": "3z9MDyLVme5QEdSXt3r3sMk5t1P8pgixW8ysj1t63j2ayn8iGpi7KUsHWddwoRpsM5JbWX8Ps3YfBjVhjgZiukcA",
  "key9": "5TEJQDZhgApbcSMdko2odiGo6M3LvEBaxGMbrYQqjoVNfvy3MWqYtVm5ZSNe3SU2heUUNwVtpCeNH6y1L7SaGAp3",
  "key10": "5WTQcGbKevwTANgmi4hAXpfKxcWBMdLR5idxJCXKvmGAGBXvCEerA8EXwhxSsUGdNnurmetq6baoYRqPtxQTnoqZ",
  "key11": "66Zv8jWX2VpgbKuqZULTtEHRQtnvmsW12umrkzt39zmXRhio9gyCjmTHPyuARCacGBQoMR9McQeczPqskmEmtH6B",
  "key12": "58wDYzgxoWDz3XV6J6byKKNNXkatD9sivNzHGdxC6WqE1MwSEGutEUHU9tE8HeXz4r556BAxTWRGhJuqNAyZ2qiB",
  "key13": "2xmnXLJCbieWma8kcs3aad3moYCuDFkwKAGVyEkK1oqe6FLjn3DDHaV1iebzGh5eCqGv55SXs2DKuyVLtPXxNNFt",
  "key14": "62eTwWFJ7kiUVrNQnzEf2RSkPDqKiY9nGM7au6Vz1gKAFQqwfHcTVhbLbDxAKAyaxrtKxp18VDZRQrsXf1JRCVVv",
  "key15": "5zfVB3c8CSBY4Hgw9umcLYxGzCKxHfnaqg7cNQoapZcHhMkLP4SM1U6ubwVhrxStuFdxxaBV9Vb9AMVTZEpDqqsV",
  "key16": "4YTNwfRQSa2TQx41vJLhBsPk9mtNugHpJeHALVZA5MgUTotmmYyrmaZ6UVZW668ajSht1afhp2V9HC2x8aq9mXhc",
  "key17": "5TJppNS8X3ZDfAat9wBdMq4nnu9MdPNTZjBVbweYL1pcjhkt7yE4qAsaki3x4ecUnT975tEJxywWu9R2PvoYZsHZ",
  "key18": "3r9M78TxAVziKqGPf8cfx8xfkMDdSJ3P3rCXrxswcxfQUEc8HUkrHGSZb5nsamk6t1WTFw8ErBH7g6xfDsH6m5S3",
  "key19": "4QrD1cP1NdVBE9gyTohC4AePgePe8NfSGLgrs5T4xnFcmAJYzZKFSKRj88BUWeiuWjZ7eHoJAT6YfGRet9EKX6UX",
  "key20": "jfxRfMpCujTeA2i5JyAn1oijdF1QDigmsCQ7FhmdDrq6AwjZykWZjskib6qbK6MZoiSAZANY4UdBGpwBznXzqMA",
  "key21": "5YHjMf1HYjgCky5HebRhjDYRDkHhjCbgNkdmrscQ8KurNQ4J8ALqcqC9QSsKNvnA875LtAyDSht3d9FfVeoZpYAn",
  "key22": "3yXdDk237d55fQHLdPpDoWAL4C2crFACGy7ocUCyqfas5rcPXrSPCQqh2xBqTiz53K6fSEQve6Y4YvAkULBSkq6U",
  "key23": "33R8eeURhW4Xu7YgBgam3ri3iNU3wcqSMMctoFLKZTYw1rPM1qULqBZDx6s2uUAAp373L5wtQuD9Jz1eY1MsND7u",
  "key24": "kCgH6pYHQYZjQwMSD1aBHm5jKfa5aRkbcnjyHcnHFQygi2Dr878FDqPUyfXhWJwHTnNFufCdiWuQk2AVFxyR5TM",
  "key25": "3hmSHtzCxsbEYYv7ysJooBnpyXZ5643yfwyiRr1BhB1yGJLJFJuWaMHtnGyQtBFxy78AhXdvGK5arc7Z24oPZfy6",
  "key26": "4wArraCQySXSXZw7zZHNiTUaAizuso4PgyHT9azd2tGncAhwFVuKv1U3bjE19r2mzdwgom5zS3DZgEaEdC9F2rSR",
  "key27": "56WWehPiBveVZtoF3KSUa4R5vg3j3WArLjABbUrpDm4F8g5YCoAiqaoRnFSDmWb7Qx3MUfhHACEcM2kpHZtRAXpW",
  "key28": "5PbUwXZfqdbkbsnDDq3cWgLCccpwJNBU3HiLfXe2rtGgUpiauijdmEL2jA9zRrgQFC3cQcoHk8ZgP2Dm5ipxgMEK",
  "key29": "3z73GEpRDfZbXV16wKhCJnLVystUGQ5x7GcXEYw3tWdJ5zyep4jcxAaBFWRp9NCEXKdtFx2iFj1hdM4UpSWiH9Rz",
  "key30": "3KXwUPuShKVW1HCtQYVpwAh4TVuRv8YL9CWaGWEMMfXBQsEVmVSF7sy7yiyhECtRBPapqyQ7HEvWyzv3Y7EYj24Z",
  "key31": "My99B5MVSPCHvVA3hUncZWhrZxnwTNr6xnsMD9WjwcT81Jwu7F9GDfFskD5U3kkgggLKvR36Sgz32XHUvVASCTd",
  "key32": "2qbXoiF6qBv4EvoM6CGt2MXoVaULMUBesavgjSVTe9qq1TNzJ87YCcFdWnQ1tn1368N56ZgTFw9Hw1S7VG5K6veH",
  "key33": "3UfXeKKhJgLLN8qPcULoMyfvtDGs4APQJJfHKaYo1mivQKLZmr9txzVMRRVafcY3ighLT2BGEN2ir9dHX7E8oqUe",
  "key34": "4dBg2untVByf7ofPGKf1Z32JbYVrADr4cP3eC51BZ4ivP4Q7JufG8SzBHHwfTHaMi6hTmdhF1A4zgAWyHRUiC8VP",
  "key35": "iCmj2U7HWxS9ULZRP4Pa88fBaCrbmSNAJUKjdQ3CPL4G8KDLbY5EN5A9ApGQgHGKM7SKicZM7nkwY92xHjbRWGL",
  "key36": "5KNXsX5Psu8QZ7i1DKZt2yzQ1XGrM9K5JkPJXutCMLRviMKQ9PuD6SHJwsKggChC9xPJDfeRzrd8q1VrQveXLXWj",
  "key37": "3PAVTyjyavBfFJK9uw9SZTKWdJLtvzT3fJ7ScX3rwVv5DTeq2kRcNB65kS8MMEEjbrXcjCs2nM6Z8DSjuu2sK1ot",
  "key38": "45a7VttMaq9PgSDRVvggmXqN63P2erNQEomv558KBUwZiiMXLfJFRcAwyxsCQFfpweqw7W2kru73Ys35rmQGTkgB",
  "key39": "5g5Jj21Tyq3Zb41QGZJHk8m7H5W632AEn2RZNGBJhD3GmSAKXR15NzSGRP5HxkMbt4cQz7n7mQojVcrPXL1PAaXp",
  "key40": "5t3TbzA1mswF5uAgp9ZPpGeFPZhFxAEZxvJWx1kGfbsMECEpsuXGfwmbQXSgF6XSjfPw8KU93t1zEWLpaVepbU5i",
  "key41": "4rGgfey1RpfNYuZmKj38qz5tWSMDDaLJZmeXzE7BE4dchfWi6ahSRnveFPi5mzac7sxCAnbpHRGPBceXceJGSZ39",
  "key42": "5pMdKNkPsHtii1cFXjboNweUgeqE98xBAtyjtdUbqcZrUz7tkgnkeKGVetsWmhtEcGp6y854qKHJJRguAw2fZMAd",
  "key43": "i9ZqNToYJ6TZgqgkt4qzTTjDqAjLtE1CgegHvfvf2fnZqQqDQCDKVffCtJPkMxbYiLUnUU6b4mewxNFB8XXogt2",
  "key44": "21AKBrqLfYYRbpivrK4NL69eXebZN28W9D2KyDVBZEzvU9NjWQrs4fzv1BQwQ4977ZXw335ZFn26huaMXHQfLYoK",
  "key45": "2p97xPjsTuNmKCvw9cvhhLWyhgECXi4vpUBX2VQcUA6J7DJA8k3WRVuGJy447hji9g6fq1DCZK2QA5Zipr7hmX44",
  "key46": "2NrPHTqQuaAe3k6nweBFHix4AT4qvEN6n1HadrNQ8xiKUTq1toxXtbHwuDYC4wv2QpLgvMZsEXtDu2UXjvTqTy6n",
  "key47": "5XC29C7c26qE62oMZGx612rNXmUHs8vp7gsU1hJTTiKbBGoZqjVnJdnN1y943vC7PXdcagcFGa45SBmDa5WGKjVv",
  "key48": "ATxxviWDExufyVKbJ1kB5MqGejvgYC3fGPXKGRHrZ7evXosGezT3GTwxnBJx8umzPQ6YGwZRv5QQtRLsNUxTPGh"
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
