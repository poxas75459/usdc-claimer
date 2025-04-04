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
    "66jkeRkGbZeJ6sg27NXkT1HKkxFBvkzEjEfTwXXpDPvQ7BvU2P1eeV6bcUD5kbcimHyJDRwMCjRsyrKPiWzDGddE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LGueFHDQAUSsEyLRo4Nz5R3og85GyMVmzuqRq57WbSxDjwhk3p6EoxdunmLwDdTTQmfDeZCPdkLCDsheG2etN2C",
  "key1": "s1m9zgwSi1eaRTkj9WdseAjXWiV3HVuHdxpPyeS5cL2ZKUtAGp8vUfibfibYs3x6BbPUST8Sf9VVXR2JiV96JH8",
  "key2": "2te5qtXKKh5u7E3mj3U1gHLb28V48PF9sfaNhBVBh7ACQ6j3iSASAApRbyS1b6WM8qGuemYNCgF4C5JTDCRNNywf",
  "key3": "5DYz1rB1vFrRV8ruv8u2Y2hN3u1PAKnx4i92uYXSVUgUXDiQkVwVcioG7NeiZWxA1cxQKjGc9siEFDAE5Nx5Jqf4",
  "key4": "4vqX7dmupbfvJw4k7SQ4ybzXXbvfDttWG5tgfr6YTQjZEJXZBHXAe441MS1CudBm3U4z6nfJ9ajXMd9V2SU7BRKz",
  "key5": "5ir7AcNfgd3RR2p7pNSgTSfACeAeyw7ygwaTwbZdvAue68dsyp7UAzCMmXXekrJ4Xw9n8nWmsAJVNhjiZTDS4pCB",
  "key6": "4F1MzKEQvnX2W7eByNNib1vsBW7WMxVr87ZqDMMXgu9GhqF9Q2tnDHbWEKkC4xpeizkz7vbP5eW8xpSEhXmtMM5D",
  "key7": "3n4MGePFJNqHigFjwsdTDETH7qqQLkna9md9UxXZUFJi8PaJLb3UiCi62HKsMZXQSQPmcassPfVPJx3Nf3LV4RJJ",
  "key8": "G5wYqyey1Wf88QNgtMsmyCJsyzXQRCajsP2ZSYuYp3UeqT3utU4DzCBgUjSgBKEanFAwo2iP9PTE1k3BNBBnXsE",
  "key9": "yTHKT3epjoEThPtnK6qgFVx9CTJn55ytyfft477jNckYNd1wqpgRBv1LBheNKHWR5xqnqX1wAtZbBL8orR1NK9h",
  "key10": "dw7ZGdLmA3HRcqfRA6Ak8AL5CyRWMmiT4m3vyqc1psxkW4KDq9691aRU6Z5FMG9Byw5sz1xRp8GikwC6fwDPBkU",
  "key11": "5xeisYYBo2hdJyWssEaQGZPUKo9GFwA2eZbaHCbKmSeLJUPWcANBJihg7YsZZ7nEb1qgCgQ5szr92wQXkMPJ4KF8",
  "key12": "iE9XbXMn1w1HrEvLdYk5tNqxGKPccZ1TUercxHqYbySGPvwoYf3jn68GvBL5idic2EPCoMj9cPyLTbXnKsXFJVB",
  "key13": "2xTLW6zG8VQRQfA1NEjQBQ2nrDV3y3VRFQsCQ6s1gFsUNCRgde298Wv7snprVZztETttXN9iuzqJKruzpmoZDCQ2",
  "key14": "44UAi2zh5tXVRdvahVzBQFMz7Rvmfr1D6Yh5c45sNDVT83Za6KxWzQkx2UBreU7AyrwKbw5zoJneE33ABZjXJ5oF",
  "key15": "aHzBtjXxaE8mEB5asr4d62ihJaLy3JstfFxfVq971C3R4R75T5LtQE67SFbHe7TrfmZpjm3YeVn6WKryYUgpwTA",
  "key16": "2gcfmgsmWvGbXnvB7eCkDoUqoSHFsvwDdYHnwctoar1WZSmua5ANGMawfD9nnLGCbL52jcfvx9VVrKDUPT2UuMT",
  "key17": "3K2rjowa29yenHyxGMzBQryPtrvB6HtBbk6jVr4QgmUiWfyY756bcxquWzudg4GAoEcY29iFRs2tjPfxLRSW4fi2",
  "key18": "adQjo4A9zwWzkVuMzJtmz9f5LxcJ6b6ENWwKmPuHJBcoaTLqV7B7mERrxusA8asGK7jg9b2HXLkD4tXJjb5AEkU",
  "key19": "247gBR2QVqEAiigQbyc6ZGrf5kt2wmcumCGHDV2NagqCQMLKnWGnjw5b1V5UwywEuwSKPJYjettB7GCh7H6ziJiA",
  "key20": "5aK4nhToiaN3DwxoXX8nXDzDSv1LK9Q2xF1XC65tJF36VzCTYTsHkDmFFSnUm8suCUs9cjs8FFMFHBwcSRGXJxEh",
  "key21": "625rstCeNpjJWKVfxLVo8QTtVLKvy71PGynAK6FXApHTnRxToouDbwoJdo7uzQbba5KZcFofXYtnWNzzgFE97Pav",
  "key22": "2nXXfZ53KQwZg95fRQfkUuYVN6LP9p1DbziMuJKKGvNkGCVD2KtqswQomwC4m3c3U71oWMW4hhe5W4mcT6hoAnce",
  "key23": "bws1FMzH9KVGfAm46RVruD5wL2JLgQ9BJZYX6TQ7ukS3zQJY1j7vXMMJqxqZHfa5jrB6mHD4zABksfFWjXrktAW",
  "key24": "3N82W4cnsmRXC6MReutCGA3hZyzRvJvSiHgEzE18EXaK1kqqiqGkLFJGgpE8pC2ueCzJyujUFY6D3QyL6aGj6dtT",
  "key25": "4hGsSXNgjZW5TEW9HM5K7m3qiWVXiwoXo8oftuesFk2yUHZHyK3iTXatP229Jefyh1z4f5iTnN7xXNowbcuwL8GH",
  "key26": "5762KzbNAYH3Cnpq3YHEKg5xjNabWfPBz33V22eMoT2u7yDGZHYeV8grWuTqXGmn8mBfQxijE8VeSHeeu7es3CRz",
  "key27": "2P6KvjVAfDs8CiSdk4JWngyCosfK6WZiesn23LeLWvo1SL7K4egr6aHYr27q91BfbEp4d9J4adPDkosGjKytoak",
  "key28": "4kisBy662axMhubNe96sPUQx6aEyyLjkcDmVDEai4uTkS8DH4JvSrZCw5EczYsbUVMf6sGxAQqjBVa7XrQDrM5Sy",
  "key29": "28VgntMi3BvuLWcskTsCke4oxv1fVomgA17pbkAYmaakYN3k5rW9PnXKbk3y3H4nXR5DMGLsvnguv7EDoTcsfLY7",
  "key30": "5kzxrretw3PpKsbZGYNsihPUhZ1A8PW1JeQ4vUmWRfVjXiy5gWaWdvMy9jCCDbJNACC8bpsBrQg6uxaktrPoGWEp",
  "key31": "5h2U9LJ7PuJwsEcYTqqii6baiKKn4n7KzRCyb25fPnSNqZ3pDbzTc392YJHiTePdm1X5ejQdFBSj2VWDrN3DALNy",
  "key32": "45A14e9XvCEVkmqY9tg9XY7vk81xH9w7gviRfKT2Yd3j1A73uQU8ozRNQDj1UJEDjA6ikJ5F24WUJHGqF2Zm86Bk",
  "key33": "3LZq8y9EEgKgPsACmbbjWbX4iMkBfmhZHqY5MohALf6NqodAQNSYjEJHKUbRh6hevMpozTLNqjGbfuV2j2bERt3F",
  "key34": "2fVjTdS2DwuYwzgo3nRLNti7bAdc8pcSNuZWVTcbHqiKNLaiKGyhdzJkRhuRb9E3KnNG9njJFbnYwfMGdY2qYDA",
  "key35": "56Y14MWNyTJKMmacJR5SzNi22yfYmuWcyM1CEpWgdGnfGjc1MWqaTwTp1vbQztZxaw9XUzkdjMr3H8svpHUtret9",
  "key36": "2Rxe8dVnyLcWRJqFnVEaqet6FbtE5jgve7T9PuDVT24C5SY39G7fkUSwawoQwY5ce3dpXaq8N9iqx3Pmj1v5BH9g",
  "key37": "4PHjcW1YtrjQsFSy2LQ2XiMd3EBAMPZpDNryPTEXcb8tsk9D1SyXPxEsPpEmzSPWforN7yLQxsn7SscKMQYXE9yX",
  "key38": "Hb7DCNb4dk3kyTBp4Ka8DGDL6bnKgLR7Sj53t1HDzGabZxpNBZ9fhiEJY6ka833kKDYa1UYcfquERGUdQVgWa4E",
  "key39": "4rP5BWrfJGVxpbCYqaxdj7MRnh8X5Lr4JXn6wMCcxbP2ZmS52tDTaEs8SgAjJoS4fp9aYkVj5ZZUq3yUgt7A4Z7",
  "key40": "2Ek2KP2dwqheFVtuAkgKzi7pBDHVKmPYhYpxCnD2dTgrSTTWRXN3fumZPc987ZCR39THY1HSt1azjp4J8HJxML47",
  "key41": "51SEuRazDaPx5hn4QYUSHKhVy8Faw6X7GAYUZeZ8g2e6kYqywUXh2VMumLTF77nQunnBSffAkZAinuN2LsYxej7r",
  "key42": "64A6kW1dHbnsuwqaHjUEqXBDcwRmLWeFACQM1VWMepQ2dys3k174fhPmYSryoq8TvDuKVdvYXGht4CdASK32g4tt",
  "key43": "61H69A72q6tLtu6FX172tTwsWywz9PRMgfiQN7Zv6GRLvmN6GJZeLbJyz1sYKopkjEuBseFGfgeZxyYfaSsMgvrx",
  "key44": "66f4hXcagyjQHva5dB6hRRRAuXxLx2xrRraMaE95Dme5qhwkpxtjgPi74t7QmCPAzQahd553ajCaTjwUa7P8LxDj",
  "key45": "NkBGYsEx7VEFF3E3xBW7UCXHBcNdRmJ66qyynJsJUqYQsCrEbmxnXwamMaHe32MuwZ7mTdZxHgADmGYiGEyGVjq",
  "key46": "w1J6ckRWEMb9CMzfzziXc6S3TMVhisrA92P4reG2gdz8svNhSuSXngvs8gFcE5hGHivv5Wgu2XKjqVww1rCnLvH",
  "key47": "3WgTdycmLtZvvPrjhP9eKZtvaqnywGDncfASw6A2A5QapAJpPdPQw7ntsdyuB9DtPVd3dfAsVtCz2Paop6AV4TiX"
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
