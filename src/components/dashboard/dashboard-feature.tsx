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
    "5jZGWovQjdK1G92ehs5ps84kMxk2vMQ11mEBp4XoqM6S7QvKDv2eCJNXecmbznWsjffuHrSBmBnf5zeg2zTVZjN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Hx2BPKKDboCfFeA1ZNPCfjMSvs72zkBdDX2qQriQjDjDGh47XDp4sKGJV1fLoqiPqkWcfmxfDiCeRZ4zyyxwTK",
  "key1": "234dgDe11V2LFrwiVYFPnyq1hXWpSrc5vETgjX2DG75D7dAJm981HjJos6wKtmgwV6wRbPAXwPH8RYL9uDivcwgh",
  "key2": "5bLc54GQQCnX73NeABL6QJ8zCwwxBuGzVY5seYrS1zWpoH6cscR8KShaM7ru2Sd3XSYEGAX9KL2pCPStZzinXF5V",
  "key3": "4iYrnWcRphLv8BbSeHAG9aEtf8m6jixAD1tyyiwNRJa85GLJn5L6DtiwgQUC3tm19TtVShBDSQf3SEzaz5H8c4Ka",
  "key4": "2dARmrfbpcMJ5BHMnMEJ4nrtTrPsvXYKs9kv9UzjPiE7vW1NzpDSGMuX6x9qefERenvfh79ftRVaYHa4xfKbgrJD",
  "key5": "4PaHrAbBMkboDA6qEfUxgYV26HciG9Fr4dyHsuZ64TN7YvVa7eNKJUbP8QEphfdzG43kriYzToh814rMuFkxDbBG",
  "key6": "H8Ve2hKj2NJNZE7oY36PZHPRPB4fDwYSSQtzbYeXfGPmbFQXTMV7THAEYtbTSW1XaTWQCdpuW1aNzovT7nMBAnp",
  "key7": "5PFhw45PFvjYhDvqR27xc1NfU6JhQMjy8Lyh7NkpC97y35yfP4FwxJiPxRqzjLHsMdcSz3mRmBefkFenb7qoF2t5",
  "key8": "3R9vEkGDrGKU2yhq9EcULask1MacXjEqWoBwrJS684qYzCMqPxrNtSbnVvvB1DyKdrhK2BiZwqYtRq2ZpiHvhZy5",
  "key9": "SDTE3U8JxdxKzYWvm6TM5j6NcNWsDGpUom3eU1muUcURYjhp9SSHVC86aCTozJqBy7bSCtdzKytQonDqoJne4vg",
  "key10": "4Jh7PTrbjXzQoKDcVBqKNwMB7F9VYcKtwYv5vs3bb7AbUUQrNQUJ1jKnFd969T5Z6vQ7XXhU55wRZ6QFcSqPqzXZ",
  "key11": "2KnfgReNkcADcXUxsX1NdF38JsvcLjD2CMxbTBiPbxwcCXhak5UgdWgXe4yYAHsy1Y2gLpptZNJX6ENkQhwU4fcr",
  "key12": "Gfdd7LnpfA9TuSZmy9BYjeUZMEN1uZrLxWebvSmw81KKAk4qezhiCXS2iemNPRKgQPDYgvtnmRFdNHXaK9mMvfY",
  "key13": "35KvSo9CjQCUnronkVhk4x63ucfPtvCLS8DAtLekUiwAZkiAXx1xKwKgknpQ5mSG9D89txA8eGjmXHYMpas7B79K",
  "key14": "ybFpbq64193J5z8s83D1nH8gEEoNhkKRnv8XwWZeLh1wv55CkT9zSQEuLMQpvBoWstKQAW2eUUU5f2MpF5cwH4M",
  "key15": "2CxQ9VSqGLQswzg4BnhnywWzWMZA8QFNn8LcaRRGZh4UVxVEgDRnnMDQJNWk9jUycZwJw1TN9DCx6FihgXKKPcQ9",
  "key16": "2peUEwhbyHu26oA5zr8JraQPJTcuu6s89ssrmriQ9b4uxiYJWL9B6iXG4K3heGHsmNznyr57EVUe6RTeTkJbPhq7",
  "key17": "yTpggWHKHxx7dpLuWJ1F1hvKqxe1QHsErW5XcmTUbJppAwaLL26ScSvz6Yuv7RwNTaLZLGAM8CABAzA2hZfdJKm",
  "key18": "2g4XwWRPwt967H9co6aWHaupMcDTeSokHnSD4dDgPdVwfDcs3ZwzUBJUXXiXUBtpM2H1UTrRdHvagkbBtYbX4qZW",
  "key19": "4hcaiDuiTDd5b1JcLLxGuCai1HVjZ1en9SwyDiTZCY535AQvCTuam6MYSZ5RwZrKqB1gdDgQU8eXWiqN5HggMH49",
  "key20": "2SMujSZEFQtJZvLEJ44BmaUCM9LWmeKGbp2CcJcBknK5nGXmANDvVnjdEvifSvy2UYKJj6ELmxHkFWPdCvySUqxN",
  "key21": "JQqBc8gMjdUBPdUJS7EEEAPdss4h3quL4ydTd7Kc9WRxMWzAJrZGQCNePw38QcUTwhMW8iodWitoFseoixEUXRT",
  "key22": "59qceH7HNQP6MDSkXsJHo7EgwPskfWDdi21tTBiH2QCHoF1r4bbX8ugjmd2J8V69382NX41AuVkFgN1oYzmdJQYb",
  "key23": "u2WHBhS48GJU3bPes4sMHcKg8tJGUT4jAjfHpFaFdy4rvmTofitApD4mCzjXxaQDGpwTNiPduKS4yRmibSsbUG5",
  "key24": "4VwxkrRhMyiWsNBEgEEwTNTX9pD2mchYZtViy8F4aH9tiLVYqyyL22nG9Lf7DtahtuySkzXSj4e3eH7JCnX8tcmi",
  "key25": "58SKoVkMkBZzYaYrzzTfHTQ7YnqBcZwmSa1xS8hbD97BTaCr7auokKxA58Nbrk6Fcf7H4LvQ13YPcLXYoFufgywS",
  "key26": "3w6njKt1h1TpZAz39jaQdAvb4tiUJ42TPH87sJReJsHfXgESZ8QGcb5Z6icmvYT61RiEsK8Q1JEash4hZRwpdMZq",
  "key27": "3tAeEapjfo4VwR7vwR5kLDWKJw99ZBG4htKYZcuTYegv1L6AJqxbFSak9GnpCXf18YbF624oDu1Q2M7ZdkCFN7gi",
  "key28": "4Gcs5UBKwtXSRivWDJ3wQXiRSKqBjE1TLdYxyoELnKz4CvgzFkidJVs3W4Qo3idEwwhsZsTyphurf61465i2F9YC",
  "key29": "StKZSGHDFt8Qe4Xj35pdGjcsZV6ZzmwSsBuV4Qy9t5o8zDB2BHDzdtKzZBQhzY3vB1BLqQ4FSNMGTGaMq31whXG",
  "key30": "Zdd9gue5hPeQykKuRUcVYwRi7M1QZ49retk2zadHBGev4YNgAYFPX7fJ1qS15Y2G2RAStLDaqm9rWCrFihjmuiu",
  "key31": "2vBdnGSYQtLjYCaxWhan5tmRhwFPDC2u64F4Wh2NQXz7xaxyFJAXSzkRg1Gc65pJsjUdwCVgdXj8c2NhS6ehTMsj",
  "key32": "5KjRCyD8L4zDNxRFmP9BhzpjysLN11CKEUUX62oUjbVDJW2kK7ZKiJY7vMF1yS5r5HUQ3HEEZwYeWjKMyF5Atz5E",
  "key33": "Ne6BpWNpVuTj5qrsSN6ZTXKdkUUbLs1o3ZaESrCHgQDHtdUMq8CzF3hrTwbtfdmzWCtE7MZkT2nAWdziw4itGHm",
  "key34": "3tzRbXhQrTVwWdn1oXY4xGyNyor3GfmNrUk37CS35uniANLbn5sktnaYKDRgJoFPmM9QPtVU8TMjZbkQnHjfC1Rg",
  "key35": "61vte7xHsUfTNfAhPYVoAy4j4xHR6he9a237o5NgM1rs9eLYvvfN6zxaqrPGukdeQdYQMrVYLR3MFF3Kvb6dM4qH",
  "key36": "5skXCeH1BsSrJ5vF5trCowqZJtq4rpbhg1XQMkrDxLeaauJeinABafXCBrw8v6NHfYKmdiWmmLk1wMWXHFy9povf",
  "key37": "567hAr5tDt6pWeyAxyjSYome72LVkyywFTdyjmMBmu5d1633k3tAEybL1r9Tb6W5ReFnsfcpDYJW1XDv5XurC8YQ",
  "key38": "2iDcJQwJoEBqJbxqZdd5knCw1UpCGyACheQhi12pjzsJBJPJGjpNh3BdxBvJXjXXtjfhxMeWU6m4h3H9ykiKCXUK"
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
