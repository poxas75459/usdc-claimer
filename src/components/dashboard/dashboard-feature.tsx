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
    "im8NHimC7EbcCvnPV1JjxntJpgKkg9QHVNTg2bWnAbRdkCN98CHptx6UHhubpRjfSEFUfvk3pQx1WNWTjB7J43z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FzmTAPnrt5246JUg96EJHx72dHyjLaarE7oR8VycpywdVqwQqEfPvQDJLraAYc5c4oCPU928KgHvPTbGWfthq9f",
  "key1": "5u5UhvTUiCU5J1S9KKQBUjXKKwg7ES4cDgLQx7RhMU5o3byBhXo3XoatS2kitvRiNtUEbTGSZbAnqmibPLWxNhpd",
  "key2": "2pB1znfL4ezSKfio7LkFEbTPwXvoMdWyMhgcgkchCReXsBvvKRMLhqYSgeL7CoaWjiL5g1jt35fTyEdhFi1ypS8m",
  "key3": "1qW8ufB3extd8Z4z7JovUF2US9BdZrFoNUFtPpmNDfPQHpVVH6HwkpDohoM6Wutmw6ivxvUeDQWg6eQMa7FtBGX",
  "key4": "3gdqEG4UuT45pppRQiD7mhUoUj7KzLMw7qUEXTF1SPwGzyjsnz8KuZyHoBMDJmk1gsTwFp4MyQjQ96JSLNFqp2PE",
  "key5": "66i6q4F23ydAmvP4NhKz9DrxzZyazzuUjqsF5Wu3dc4MtLUv6fmGci88hdjGJt9WvQ7ej9yakQNUjpt7PBmEeHdM",
  "key6": "2kumsUqK2UXtMXVnTjz1eXoh2MBj8WLeyBqGkwWceCPv92WLpm9qUiAeZsbHai98wWKzceuxuP3hiyMmUCard6hk",
  "key7": "9zAyDZkg95vG9Ho2pmzT2sWEXDK9s6PmsbM5JsjvH38T8TdinFLXka3vZVCWj4NqiVYyum3R3g6ZcwR2WKJTidH",
  "key8": "mWeqon5ND8eQPaXUBkBvmenp5bhZmiqmNjt4UvScWALkt3AQkUoxNsM7fXBi8bsbNup2XhWNc8qk6py5TiyKiUY",
  "key9": "5k11YW9pE36VRsXdorj1SyCC4NPVq29MwERX7Um6sYxbstj5VdQmAF56ewFneubG2fMxgSZXqSuhf8udZ1gMYMnz",
  "key10": "3DC9jVKhELapPMfj1Aftuq95GFGWKrNXVvM85Q3TXpGN9v5vRLkWFP4AqTwuy28B99vWyLcRuvmKkioVdbYg1ubo",
  "key11": "p4X8VcLmjTXqmBikoEPU6UCv4uoiinfpZaGTtDNFERKvChVAsK3hEk9DTkdTTrbVMGhAwnJKaL8qAZGLJuS1T99",
  "key12": "63StM2omjvsPBQv8LYU3bgZz27ZyAmDk6wuMiiGvngKg5HfbZQSucG8YqLpvX4C9wWBpLghyo9fi9kvYdZcG5P5B",
  "key13": "rzzFhRtPaSpYiey4TmM6dZvSebZD4UesLq5t24surMKH4bMJZnZEtPE4LLrYJ5DSxRNv5TzHuCydwynkaeN77sG",
  "key14": "DR94sG7XhyXKUEm6K38JgyC5n2jxjsgcKHpM3hYPhc93qvdTtAtwEjttDiW3gUxSQkrZ2HHKgQ19SdehCR3NwFx",
  "key15": "pNJMiBTFVRkirM99pi1Ng7oQEXH9S7wHFoMZPx7L1tdAftNEZMTwvRFxLsy3ksLZPrHMnjCUHFQWKT1HBsTPtPZ",
  "key16": "5MKL482uuKwFJbT4x9xCZDLbXrCUtJNeNya4CvWGFMM7yxgfJn8ReBmuB6xHCGqCrTt15ntUQFipLW7DUz5P6sER",
  "key17": "3csK8FWFmSLMk89yMKRXZVaXNVunJqJd7QLNNsgZWyNodnn39wp3YULLCWqghBmbUtR1s9bhMbpHWSGd2vDCVW6L",
  "key18": "5xr9UVidU22E2BawaW3YjUUsd8QPK8m7aFSNDcKi8xX8Y8Job69bb5pFQ6WyNpf6n5EoSFGESABJkkJDqKUPebLU",
  "key19": "45GCZKySzBymdmfhshRvfKtSAfFUgDYBNmgWStnsVv2CW6uQugHkC9jTcPPmAncrYY1FGqB2BoX1eH7u7vZGx6E7",
  "key20": "5hrFUW9cvFEbGy5kk75EZhQLnoZ94qdDfWACxGGx6zdNLPqGBtnD6hXVJpkatKiP5cmrTndmpdLLTgupaPgaR9ko",
  "key21": "3FYdZipuNjGKecTTR6EPujzyzTBtBQhnc6cfDjybwBSanLCgAuxeVshRtfh7YCQxcpqqwJSjCuo1MG5AauJvC5Zi",
  "key22": "tTK1KsjZcx1XXpfg6oMaVZ6fH4rWfnhaPRPjf2TTsopvoYxBeGq6234FNvAmHNAG35GxJ5MW4Hf56bsqFj3VVFn",
  "key23": "4i4fGhBCo3H6N2UUCXvfMgfxf8CqcQf7WUzJrMGtSeyrmPFdt6BRJsN396kyvaCLCmqnsERvtCkmpS3dTNBgiJdh",
  "key24": "5tU1JDAXvYUagCjhnBUqpAq81QMWVUSMSCN7vbCtN1hx1dgV1BTwqFcu5EPwZwmEeTxiopxW9DEyX6zxPeJ1RiF8",
  "key25": "4iH9Tc2MtEdPGsdoSdpPjb4CssMMFerywaiqiGD5tTK2U8kSpC6riz69AXR5vMiJtNzA8438bJt4ipAPfSujDcNV",
  "key26": "2hbiAFBzyRGw3fvKCcsz9dmZ9PukNjaCA73fSPrErWzUUkRz3Ztz8znrjmshcNkyPp5Q4Z1L8zepwdZPevjPPu4i",
  "key27": "5aPJcWQZWvCpRZXpUS9QpKp7DmdrUxwJ2u1rYdSatWMoKMfbECCVeJoDrdVNzfWw6nrzS1zdk62aY954oJ2KCcnj",
  "key28": "2mvtKFsTbYRJydFcY1QxkfPg52k8FmDZfrfAJKw2DsZEScVg517CCetTTcuq6LFWz2sTXVeD27xhvdNymn3XfR9p",
  "key29": "5PtnxHSEijF2dqAR9p9n8u7rAvBnziUWJnsREVE1xe75i3PY4Ft5igt6xiAKMmTaba8bwM737P1RzHhsZ9wzyhGk",
  "key30": "4fxks4DxZdHMvR7vDdopLuFbv6kPVjQ2QEruUo14wTW1MCY94fpj73Aa9nRVcYupR5R82TBK9MzPsikos57Sodj8",
  "key31": "5DwxajRxPJRXoaT6VX2Tsizgxr5LM9bv35PWmJ1tjSFLh2voTAyeBCeSLxU7o7D3HfiYaGDGrrLVyMhj5ttv7y6b",
  "key32": "3gnqAVtnzRDfvQyjBddkcvtdsCVHdWJEgdCAQEWmQqy2MN3ZJhkTvGx9Q8uUFVcDCRdo8ameKZUMWzgpMkUfAJHw",
  "key33": "5EwFdJw1yN3gv1G7nKoQJQhZKyh2uLjPAVsDdZBk8WwVBeizZP8aeirbEsyLgbNL9fad1HvNmuAKsKNKjCCsbHKB",
  "key34": "WVrhtpBvzP8XZtfkmR6vxRnDuNKNcFGX1BGWsWBBz2CqWZ5Qc9BJ4cAT1WXqGBLqRJEdFZfYYb9VBBoaEaCd9A6"
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
