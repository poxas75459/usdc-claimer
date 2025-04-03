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
    "3XkmNPJSdUFYiBN45dxeup8WRCMRCvehHvEg2breqLV4iFsfrbnPsztNHr6Kx8E8YFmSy4QMvARsv2XvbDjdouBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CStbFe5GCugGRQw7nkADqkXqS3jH6DPSXsCNzMYYhiQ5JAdANnTqiJzpJJBnKuEDKkheoGiVMufavSW8Nz2rgua",
  "key1": "4MExbKMerz5vMHNHtX5EhjKmn45QcpD5eLrxJkNUhdLdLWwRYe6ZnDTxcAgdexWP6MDzLFUBLXpCXQCctaCKxqjJ",
  "key2": "4dekWRH4nBu1XwhAQfgNVCd1ZfnoXwBPoACaPKKqHqCTY5Kx7kSAMfRG1dNru8wD3u2oHqtVBCz9vJoFQYNS61EE",
  "key3": "4xpgt4cdtSh16EFd8TaNJg7STroM6LnwBYiXiyhdQbTpX5R3eeZ9329EEhAfKmgYvW5nFhzkJjEX3WcPTdHQrWQG",
  "key4": "3CbPJgCPpiCptnkEDiGGjqnK85WmSpxL9K39BRaTi7pZanocrZ7QmSoLdhqkd8EFdzAtMzYttUrTSbCk3QX4upg9",
  "key5": "3XqdZx2BTysz1qyYywfaAnv9eMQLQDgxGp44edujRSDUsfN9nEUqnTfCe5Pguj1L6sNby6LjrKnqt6Cjp1kQerrH",
  "key6": "2dhpESBVwJt88kueiVuG3H55bpcfkwEgyyPm4zdqhkVxFTdbqVNqNJnnAEWDwxdk7stccKfAsP3be5uZGW1TNLt5",
  "key7": "2SchRU81AGyFdtZZMyVGKDyeDiJx24z87SmTzmBpZXStXqm3SU9z9r7w2gw2tPQynuVTGYxAJEzVmt7NqAQj5JJ4",
  "key8": "2JNpKssoZKqo5UnCtru4DS4eSZx4Nt6jEyPfrrdyftheS7cWXKCfCxAGJizSjX9CS43qfCAovcqPGPJzQPKZcZw8",
  "key9": "4rki8U2E38c2618oRWYMySzmjNHhXzSSMCo2jggwkPs694LCMCGLnHp4Cv9x39arB4SW2zFNp5pekxStv4dHbGne",
  "key10": "2QcHcDX7vyod3ugdC1Q4eRTBxKLreG63UXKiGYvezhaNZHYdkYYSSnPxaWiL57H7XXvk8GkTsDeqYZEGsKksfSMP",
  "key11": "5vLZqvy44XV95D5YHY4ooUtYoNyZkyQgSMFFxyQoDcSzLyomSH9puCPbVdHG7AYH7mfxu6nuYJWnV8CyvTro86h5",
  "key12": "3sCqvAR2NPtqpVXHEYqzQar95Zq1mYttRv4jv4gbeHVnVcGCcLvVZShkNRiZFo9TScrCGuzAYGcuZWeS7VM3pByE",
  "key13": "3Bt1HcSheyzjUm9zchiE13uXnSniuwsP4PHr2wKkZWoNTByweo256QsgBryAWNECE4uvSX2FWJ7ZcwMCSxWRTicw",
  "key14": "2AjkHDYy2SL61iVMhMBX7dMnKZkKUh9wZeJauecnFV7h7e4WTmyoirPMwmud2j8MTFdXTqF1ufPeGKss6AMJEjJR",
  "key15": "63eUmuUeRuGLm88AksPdbfRa4ygcP4Jz79gxNtEWQYLaPvemxNGXEVBpzfYU5hkBAbczY1yTiXc9qHUPLnazBw7s",
  "key16": "5UEcVUKDV6ys6nrYWANfySzpov4tFFQeqHwoqJgfZ7ZrsRL8NUjtf2o9QGFYQxdpLfxFuu3kgg71wFS6i4Zk5iGy",
  "key17": "4NkMxSz1FY48NbHMjGP8vVfU7cFLP9eeiE8KSTzCRAmwY1wdbZSNfuW9RtEGGhQsLhEGjng9j37rz9DJssrWU6Ff",
  "key18": "4F2JcJN5NEDLStnoADogun16Nsj2QKu5ajwGf1z4uFYink2eXT1BC8YPWJpztY1Buu6a1YuDvf4fgJVHDmLq552z",
  "key19": "rpiNygS9WUcQNC5WxdwNCJjrdJBzPHM6yPkoUq986y17jwMeknB5qMgLdMiRdGEP1rBr8WGYo55K3grMFtfard9",
  "key20": "54uWJQN1VndEpq26dBpbXBBUSKbUk3iHFodnoeuUYm99p2tXthhFAxErNyzvzJ2TxobW67Yvta6tZHX5RYywSyfh",
  "key21": "e9kaTRkSRupJcJkVFWKY7q6u1MziHujgfniyMCyUnNxN38UGbDRYjFovYwrmhxeP8HvJT2QjvT29euQPGSZEYTN",
  "key22": "5ctMHJ73A9y2VQrdMbNiDTgeZnW7raTxFWn48pZWASpn2K8Q9iV35qcmhFNia9EpE3B7iVK1o2YFA293U3e63PDc",
  "key23": "3ZMJhe6N9Zd5VYeXxBfNJSa9DyQB6UHRc4dMureFmmTm9F4Shs47tAMWm3MXVbJetm2qA3TFG1cv8bPink1HLoWd",
  "key24": "qfLJ9C9Qqc6zgjmXxovtRuvvkEW2Mzv6tWjH1KmQg4cnb4nZSwWKfG4AtGJUw6bDfSBLc3SGbuPPY4EAtwSDegT",
  "key25": "273Fs23gSyrfJtz2h6oRY283CnjKGfFrwsvAXfX8hf55B5ZAFeWRQD394AE8ZTovfrMrVHBEZp5pK8zduAqAJuxV",
  "key26": "3yEqoKmAh1z7kRjGSEj18FkUqUi7LhR4VkuvPDJs7uqM6B5Q9TyWUtFdMfZvM5VjqNHE6qyXGEp1VQMpdJqp38Le",
  "key27": "2nbyMCxuGkmDrTMb6AWk6Tp5hZyNSQoxjkricXoZpdDVKYyV6cPhtpxDir3mnnmVW5XeTzc8YJCQrToCFkgCqKK6",
  "key28": "5qy8rwozRfVYUr7dCgKUEuwiqqjVa13XJLBnEYEAa3AmxPwQZgwc34Z94fVtV9ytVyWQgUUDyf8mUNqqJNSdFVe9",
  "key29": "4T64QTtjdoNuRTUJoZk8A8tUXatqq5e2JAC9G7YMutTrinCj28UZAxDaCvQJyKJUARUeUoyRPSWb3nEKEbZJM2p2",
  "key30": "4PQbRSetubJHBfeEav7kpsMvmmtt1BeJBavq5UVJLbrjyURL8rA3pgWXe81HdxnZwomQUdDTV6Nq83LYX8vpmM2S",
  "key31": "61xWmVv8AWc42qCZpN3TwLjrktvQQikwfbBBYCpVQxXq3sYnKjbfnvwbGniLgd8vCewEUJPb8Zi1uq3VgMSQCu4R",
  "key32": "5CxynuFzsZs7XgoD1PZ3y3Y3V3pFW7BB3LJiYjNjDf4CyKJgpWb7YcVbDHjuWoaVzHQxP2rtTAe1YJCLiUZtwD3J",
  "key33": "5kouBZzDzv4rX6mqEPpMxqcyKSvbUXrTtSB5ssFWPewhix5tPi4K25t7J2tXHncDBu2oYpZPagW34tyoYAfb7y3w",
  "key34": "4QEzgpFkqWce3ARrfBqTePt9K2RSbzNHGS9iPmum416H9zD8V9W1qShwHe1zLXSpGwrRW8u7cVMo7K5ckvaDbzJx",
  "key35": "4DWDhi5Cgg4P8KdWucYLkuSGvHKP1yzjYGGfb3KpacLNv8kbDw6M28t3uJn3ryU3m6U3Y7xxDQHh1pdr3KmVjd85",
  "key36": "58io5Z3LJUVCBg8yQxfuezoqXD8E3KzmZNCA2G94YTGj7QBbSAWB97uwEHRouf3NiFRFbX1uXYXabpSDqXyQf8WP",
  "key37": "dyrTw4i2PybzPGCXKh6dDWRfx5KBi1cbCa1rNPcwwyweUUXRscLc6cfemnZtgiNASSNXuswWJkSHTzvusLnKU7y",
  "key38": "3M3TVcbWXk9urhfbM4bcttcUaKscEh5xsz5qdumetXu1r1ujr7soC4rLoCNzzVX5Keh7W2fGcZnoMQx9BL8PUyNo",
  "key39": "4XXGzjMMKGJaMerPww8i3kY1rForCRfLS5CimsGQRJwtD2uBihon7CuwCxgfcZjaQFA6GAotM88Fj6yD2NAteBgM",
  "key40": "ohQDLZedZFA5UTJgQX6PfDuV2RmB27DtXZtjbfUTb8Nd9tZ9D28YoVkWxypBZydpR9y1oGSvAmNV3pzz7JMpSjD",
  "key41": "3BYcMeaS4KAVTFaiMDKq6hLY68BiEjfNFzimGSmBJ7n1xgt91w6rUFSFkK8kMk7VUd9nkrU6vc2gjounTQnmKXNR",
  "key42": "3mB5StyXjSkVfXACY9H7DozGe4G6YKEPNvBdZGUvGzpWFMkY38xUPeh3BfNcUk6HWbQms8T4n48PMQVbeEzJemss",
  "key43": "2yLjPqrcYYa2WVQedPTHBoNmHKzkoDm2R1sUTzrZgZNKSJCoqBo4PfurnUDE3hBiGoo943wavBbuRMG6nkdfUy9h",
  "key44": "2DNRDonnwgxxSiGVCUAfM2yAK44GUmjgqyC8H7CCsG67us9VBgLQng5YXqwn2FPrRDmJwicdutKVNmEe89cv2v9P",
  "key45": "58h5EGvgV5pLTPEXKr2LRZtD3Z8Wv74RKWysgn8dRVod7dxKDvVjdGAcPYCTcDHPDpLQL7hMqqvrdLxCMEsLbnax",
  "key46": "2QxDamiVsRsk1wbPzfvfo3TA9ERV5Vjpkb8zHeNxfajGQw9QjPqmmayjHtG9zkwfGX1QBvHQnZNtdcyksVkKCrNb",
  "key47": "5dTFr7BEG1jKRAj8gVKVWwR6wuVkHGB9dxBAups33jCALfyCXLLRD1eVBhRfbkyoDYfuz6CiYwQ4rHDAmSxg83fk",
  "key48": "8GY5D463moLFxtd9E8RUPnoqg52nMoCYRFMfKA5pmqXB9UmWg2vBypE1Z6G2cs6sbMTapZgmBS67mPSseGb43uE"
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
