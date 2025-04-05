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
    "2mrdvMhWKs11xGo9QWM8tR8Tp1NYGqhkBi5ezCXpsYZKtBRsGxXvwer4FVLqHxCVXw5RgXReJy55RdrABpARuKhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aLVU7RdFyEJDBW2NK69ZQjAirm6YNHCr7r5oZsqsjeenA73HP4aqj1vGH3TACFbUUG1sK1eD4QKsyaWSZrCJu1U",
  "key1": "Z4JUvYQxov8i4iuXXfnhjmYSxzqzY8fHP2NTqaehEe9xEysEtYpce9Lnr7dEXfq2uGhrk3nvoxGh7VaqEb4E6WD",
  "key2": "4LhFVxX7Y1u7MjA6twJTD3gYLnznMgfm811dMK53MFdoUSPvw6xARzxzCJktBYHDY84TJMscFRN3rPwX4tE3Kg7x",
  "key3": "3NeDEYtchkHXumZ6sgrgGRBEEUrC3Xq6gkyQFPXex7V9zCRKPUYMpSfXvycAb4jMSMTvnx82h5nbwnNdkyziKrWi",
  "key4": "3xp9jT4wR4SBWEsTJxJHEe9QXrsKnKp5mfxP3xkG8iwMJggBHS4viNWBqj7D7qLbZZZmkiELjb6LTbzV6yuvqTq4",
  "key5": "3u9LUbkL3MNzGoR7bdf7FqAheDkK2aGzmzHqJXhWBdAYNEardd1MLRSxoZNwRrJtKrAMR4aM4hSz2McKAFwo1pEU",
  "key6": "L97dMcV9LwJPd7wF48F5w2DMSqKoyXbNHvMsfYQxSuCCZmDAK6sg1nV3FiEiheP3J7FbFZPoqrYYRa2k1EXS7Mf",
  "key7": "2XoxyP34TKyXUPArDqjkk8nKLieqFk3WYitYobWxuoG7xdyP8jx6ZU4kWQcEw9NbjToD3AW6pskWgtxoNQKECdNp",
  "key8": "3JNf6hVfgLj23mHQDg6Dmm2bFNFme41WdomjshA8Ux1jppZJPqSWNYWJ3bqfTQH5eELrsjkzWELJbMaBHabpM5B9",
  "key9": "3kw1pjyH59S6TrwJbv3uSnSfqVtgZo9W6rZQoDSwbKuwipEMzRubjf9XSEMyHBMZHXWFhcT9eRsghM3ayos6KgGn",
  "key10": "2dRoeDW32P7NDwHrbhRatL3y3knvHyMSN3aNpJdCuvQF4b699MzjnP4QDQbdHLU7Zq962PPj99SJXHwtQu5kqkzF",
  "key11": "4ocQKVyUDibKffJCzuU6RgeGjrFjBCKhSFk1CMZQKkzrzHhtd7frjRGje4SVdUSW69CCq9H4yqwuKwqAT7wTfWah",
  "key12": "5ZiUBe8jNpk2s2JQFxHVwF9CJFJ58GJWXKdMsPrfmuQgP5CV9FBexmWMGAVpXL3xjad9De6pxp4cjkNrJq38VM7r",
  "key13": "67cR94QiCT3NBDEEH64RKx5dYCpsdMMYkw81fhkDRwaA75Qu9CLNDePYLUwCxZGN9wvdTdZbGreBjjKiwayaP54U",
  "key14": "2pGpn6Mg6tkc5XUnBERGQxbyXCd7dkk72A5KBHV3Ph52qqn4A1n8AFMrXQKJd1QC3KsFWNmv2WeZt9qJgQXto39s",
  "key15": "2vLrVFWcuNJUroR3gfWiK5TA2u7eLn879axaKgbQ7oAb6ugbyR9B7zKH2ZSv1z2WRb5yc5mYHQSkVvHCUTBaEQv1",
  "key16": "3W3wHR2NzxEWX2uYQHHmw9wXZXwApGUs1cucWE9Z7HVfDoxXeRDu4JeLXH41SYFSY1zGSosjVaJ9FHyZTGZnNZp",
  "key17": "5VurVKLGwUQxhT5TFcrniLBucEMCwBSyfrH7uUQ62MuUAqb8syXB4vZ47jzm2P6VCzeQzMTCFLWjGPWJGn6RdsCQ",
  "key18": "4K6Bgij1mPfKe8LESPyL7mJdqeHS7GLP7nMr87uDVnwkV8fjhG9KWGbYviS2ai4gTduZmpSqKy9GPqokevfZg1df",
  "key19": "4b3N1RkSRcJNDqhz9f6bmXEQqNopv71yd8FCnBVLFxadBzgWoxfdP7rLFePnKDjRnGwxnEMK8eeq6gSdTTBuYcMr",
  "key20": "3eipHpzfk4J88FrQaY41z6eJSgeDgWHEReg8R89FX5tF3oKXZEWoFXK65sMQmpwEpszVRPw14shqtSg8wzsHaNm6",
  "key21": "5g5KZKjGa4oZu8KN9wdtgQUg9XXvL9qggffU1px8TSWhxexxgnEFWmtmHf8FWN7pWXRkyUzyw38jMTEq9wrLPgBH",
  "key22": "2gXH6CNArRDwPwE1Y5dmR6XpcwEXPWarr15P25VA1WzuqUR3TsozRnfyhABBJKVyvgCuSkb7JZFenyLwguktBFJd",
  "key23": "5CMLKL1fTfRhWUjrNvMbzUNq2uo4u9CDtCWYKWoARWumM3SztDkF1fATV6fEBrbYBsT64sXTRNX2H1WXhBqZw4PK",
  "key24": "wkGhBKJLFNYyj9uogkUvGMMAHiypXqD6kWR9APMAW6uXL3ZkNPxK1Z9Kz7x4oX9rs4auZQEiiHzLjisBb7Mxi8X",
  "key25": "26WhXAkhunohgd4ViPMMEu473viBJ1pTRgF7sodL2hLc5qYJucQCAHjiiSRPH9B47SJvb9b5nxWhQvkjFgLLG4K3",
  "key26": "4NGj4d3NtE3Qv6M7xqyMmsB5gRJVugrgipG3jkShRUQ7ygMtdRWX3p5ZsFyChchNMCEy5gmYQaHqidEuAyY6smzR",
  "key27": "sP9nuVce84wouqK5S676NuoT8ZQnN9beWTuuvwkStA9DLpqS9aDBGQHZoRmRNHvJZpKT4bxR1Qt2ZjXtdRsJWmK",
  "key28": "5qqXtP488kUFVxrYrHVNsk6TUpNu7gVjA4VyRFC7D9sBf8RcPhGDB8U8BFP1LANkDjCHC1uga5j6mG6oNVNc99u8",
  "key29": "wqonMez4rYD2qdGVVb3s31ucz8dQghecx75yi4d614eCzxuNcYfCVKXcqVgbEjzrrShaQrpXJfyyvQc6Fiudegm",
  "key30": "3p6Hxvbem6DLJ8X3LHT2KHaQ4Ge9C7S8m3jzoL52zCuJHDj33ycvtMf2zwCCwfuFDUvma1dBX7YYHtrR1SdB1N9U",
  "key31": "4Hw1ougGH1e6Aj3DjdVnjWx9tqoqGTyHz1R9hZerHF2kwB9YV6RbAW8KYkrektoXNwvcN6ytrBd9CWB8gbSW5N3Q",
  "key32": "DR6yrBxZVA8BhiBd9bxmgB4dhw2GW2QMRNQazqVuW48SSLfdsQMBGDcZLxz6UG8Y12zKKUHZZ14MLU5myHs725x",
  "key33": "2SY42zQbUr3f8MgR5BFp3Ws74L9rBvtPez1fVcvGeDtYQQV1QfPJHNVp1FC4MU78dWqs8JrbrA2ypDZxF2wbHqDH",
  "key34": "2DokC9PymyhJc134f53rZkrBWiZagJQsCHvXL2QsQSWxBzARjRYqE9L7iv2xq414woWeNXnGRwrfKwU6DYtCES5X",
  "key35": "2RenNqmGDCx3KuLWrFC9Uc3KkpShKJ9Y2Ewhg8d79kxgT9M5mxV9Us3CEhxtfPFXgEp3z1vUbYRbeYMdZGsjDtpN",
  "key36": "3uvoXto5kPF8PN5jnRNycty5vyByRHRi6nSi85NwdSmZxhLjPeJZRwPsAUg1mvbLHfjpmogeNyd4SJCEg8yqxqVQ",
  "key37": "5Bh5fZTYexT8fwT6Uj7HCv1gPwhvq21VNwGG9AVrp3S9AYYu5ezq1RNfKBS8FKwCUi4CWqa9a6eJKDWy4eQ4kLF",
  "key38": "5beZhebYBo9jQ5CH8aNkKqpeiNayZDqQNHKJs2XUUJv5TKN8gWyhXQPN6aaavGu7E1LZo5yGWBWojzBnxy82zADd",
  "key39": "4wKDECVfUyFuM5rSVgnretGBrMi7DFostnk2FbuNFqqzfHk6gtBMRbufQdtrH6BJjwdqwf96Gos7HSAyFQ3A9WRF",
  "key40": "2vadWjKePKDcq8MoQWWqHBVYY3fTLBxKCJeqhDk2yq9Pi6xhZTvWPnbeb189KFan3g3BF8BX1L5k5aMPSYyVt5LJ",
  "key41": "Faf4PaFutgDHYu3L1UMPH643E9t37EQVPyUNfvK3oYq8coxEYKRCsAM9vagjAvbBnjrE7p6dNZDeFPYVckTgb1g",
  "key42": "JTZrBAWBDngC6JVRtQB1Te3Mx4wUfmogYkH7G1SGXjqQurrtQxggoQSJU39qYs2eybBnbigyLuYFKaV1qAPxPYy"
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
