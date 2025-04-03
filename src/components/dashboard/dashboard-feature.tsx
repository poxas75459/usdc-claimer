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
    "5NwPuks9nEvsu1rY9tpDJFzWTVE8vSX2wysT97aZykM584o1Wnuc9AEQvNQoPuntRDnm71zvru4PeG4n1vAdetf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y57qsX41LP5iBboR8sbQHLsfXnZEzHUsu4ZHJMskVMun6ug6AvBMdEPg1R99PH5ct4UQUA8WewdLbUoqAcbNbZe",
  "key1": "4g9u8kDpUzJpNTLg3BnJ4YTncLDS1JRncr4c5Prwxemdi76agSPTTxtqN5FYc7YRpXJhmdKLKEWqioGjiph2vZ9d",
  "key2": "2hf18UUf88m7n6WBTuNpLcG3QuECRPr3btx8BFvFmt5aXhLqRNW83Kg1YoqXd1PDNu5o3xo3tusC5UnCZhBf9TGQ",
  "key3": "35X6obnj61NHGAxnxcQGX4mFZTXT2yFHBgdkJGN5D6bUk6gDq1pSHdaZcfDGfd8Z2gUbpbxKQcazbejCTkFhATzz",
  "key4": "5g9Dqf5JqKmPwpf7NtiBE6HZUcB2tg29XSZjFPX8pgdhpiCqttTbgevMpDQnXvUnEVaRdNUwko7ETqqTpfKYvYux",
  "key5": "3dPoFV1Sf62o5y5jsgtTVndmSHbJMZaSmJ5GNwqzJBemWAURF3XTgCSrESavAKA6HrjgGVTAnwuS9DscQhjycGMX",
  "key6": "39HyfoeSVfp75x8TNLvB38Vq71DiuHo2Jj1cPce6Dt7qytoLXVCqGUmMrwDAXEz4XZxPuJpvmEVLs7Y9kEHB5Fce",
  "key7": "36zbf7BfVVwbbceCKkN2M5LGS9srTtgjJrXjmhvkmgh8YKBEBtkuUnJb3iu7NGmsVevEEn7CdUWLdwh9hwbaQfvu",
  "key8": "2cQY5vVwaLkqzDaKoWKQ4jrHh9E4vZ1tCZsEm8jvShNXjeHB3RneoCNKK9TLiSFqgfBeBNfiSC7unmXeh4JpFUye",
  "key9": "3zmKFMCm3KnNea1oYVzLQkm6eRLbo258tEykyAc8W1LaQm8Nsu66UzCGtLYBnYgom6sNNKFF65agj828hiF6Qagi",
  "key10": "5o6qwJPv4HSm7TCtsGTf5ZkyMsy9Ze1Jqnk1Cm4wjUox14XcMFCFGHeMYCQgcQxiAQZwrYYFnnV37knpUBGeNAj7",
  "key11": "55uHy1b5S9LxaNSAp554L3zqpGMcM2N1m83aWRuMrEpS2yByCNTe7x5zo2THnpthVGq36tqTWBCKd4ZU4AM2ebBc",
  "key12": "3f3CAsfHPdZ2CoEdruJKiugHr8U3N3Nph7ZDQSxMQixMBQtjtsbmFGqWR892V2z5c5i3zTSd2iWVCweWGw1egVuy",
  "key13": "22piLA4a6VgdEH7WN4tvji4d9R4AZceu7NcqZVif3vJLJGb8aoicijJopdwxUJyWNezhwSB2FPccM3GznozE2reV",
  "key14": "5NAZzZX7v7Ad9rkEoCEcUF5aj2Mkt6iLW8mWzCcGs21AZEowzgGWrVtnoBAy8ub2k1YFiH6hSvUGsPQGWzfSkKVF",
  "key15": "cS4mUJn3rbTxCzNdhcGG6ux3jiMo7Bsd5BwZMuBFKfW6rFdN97DYA1zjUYQQUJsXW2Sb9jtxK9UnLV693bfLzmq",
  "key16": "35vDBUyoF7UwCHpGjuH8icAedJ42onDcc986yU3qq4TinafcMAQs5wnybu1CFNeWuh8y5A7LcUpvWvj8W1YtYWVv",
  "key17": "3vfwPav1cQ4GSxMDpjqPJawXgCu5xZfYnTecKzR7gWfkE367d9rhjjYwcZVtQWm361gzWdQ77TQocPmejappJCN1",
  "key18": "29C78s8orwA8BGScqfu9qtA8n43JaCdUm7aaWwj5x3akGvbvZjwqRax39inPweNzxnS5rPd4e6R2F2uBb3wfvx3m",
  "key19": "3qYCbConMCjpHcDgpd54jMvseeCYV1o7eEVrYd99LqeP9gywiVvEo79cGi5mQMnuMvaXg1fDWNb4fVbZQ8sNdJ8t",
  "key20": "565JxU2fPEqcSYC6MttkcL8JsWK8mDGpDCgX4GPRXND4oJCrfVk6YBud9yBqU4KsAhSo1ST9Wj9L2JNAdQLHLiQ5",
  "key21": "3AhV3z7obd7S6zuxLvL3oquagoADcakpyf3KpKeqPFmioArwmD3joAtXrub7bMHevcsbty98vnPXaUcAnqjryqZb",
  "key22": "5TbmCoyxrv9euDD4EFEi8AgcSVSPPBCpdcoWGDxfApzkPeGBTyU78gtyd4zzSm4qurr7qs8fuQwnyRv9SGyS7NnW",
  "key23": "3Wdztc3DqcA2HM2wpSdEQMwaRV2SmEeRnKGQj68ZsqCYVGMHyihoRcs2wemCwCTUVt7nTWKHtkpYVHD4qGWhUPeE",
  "key24": "2pH3GfhYMYcFgvHKkBH1qXWGQAvHAZNENP8RWvYhhQMQd7JhRLPdtv6LmZMSVcxYD7aPwk6TrxKdb2fSFpg22yF3",
  "key25": "65kiNjFm5gHFbxfWbRmcJR2aXy3VpNQCNfLtSABfRRVUvytsWoCtS6Ssuhwij2YKtqAKk8xmqwGQHkYQKyaF17Ws",
  "key26": "3SDY2CMb4vCEb5BAFaE2okHNtj2dvKUcAB8kyc6hTuKgSi9e6VBAvsh9pnsJChJkusDGRtoQ9Da65G34Bu4V9mLG",
  "key27": "4Jiwr9gLnEKdU3B2JDSX3zwaVBxR3eN28s2RmUDAtJ4VJR5vdDGSTVjHkqQX7sq2hevX3xKWnenjmFTP5yN6PuRL",
  "key28": "5hVms6yLeXmNns6qdcuEomV3aRCtyoTMFyqZ7nQddmBnWFadNfecqWQdDrTkc8QwxnEXtNHDpnwWMpadUcN8K4Se",
  "key29": "5AHw4gxayA5uc6o8Gz9sXgUGqkVdSjBVSjhjPUk2mh513D8LYG6fgGkyXgJBPuaqnvkbUmWnnddJQBnTuHBMCmPX",
  "key30": "4GqNMyMVkgZ1b1NUArXqxeNHf3opiCaWeDHVehJo5UXJx9oyV8EhSUPzsfCuEDR5d5WE6P7ACdgRD9b1KvbZYH4r",
  "key31": "3TXrYQCd6hyYpJBZ83jsbPwh9mEUrW1MWovd1x2z5XsNFQ65CzeuQq1qHAHtngNhShZYWJHtRyhNkuWJ78bDTeLP",
  "key32": "4ticczN5vJGHTisd4DuH8B6B9paSWUBV6DA318xDxPeWwPTmN4jbgjmDAGAUg6oKJ6WPnWmdqheUFAvV8uogFdTa",
  "key33": "57ijoVCU7n3tFxKXN2mnzwdYFkbof2qrx5ykkGYqiXtvNYdVH3tLpBGc5zGakJEM2c4LDpFJVQw9ScZxHoKPpToL",
  "key34": "3quSitHAFTqhJwNUoqbSCVRRot6UCvCDVyGhrM5Km9M7yKydyW2yrXn1UXkzzZg2r2SU7iugGDmG6CeuMfZpbGCS",
  "key35": "4TbP4xhXt8kExaGgkAhxMsrKPEqrdCZGq4DuPdanvUWPDYzdDcfKaxJpim8GXRx5EqXL2Gq9cGLDfHkZ8Kxq6rnB",
  "key36": "2BnEYD5Pr25Wb4oVUjKW7586SZA3qe7QsHMWBZKQ9v3wAyWQQHvye6qT2utSpCDGmyqA65HwEMYm96vNQezEoCMW",
  "key37": "2vckWitP57XdFo8svNnnBScJULthBTSJ4BdCvwKBkt2np1tmx6c5gtsdYc2RdY4qA6UzgH8ddi4tDWiDfS46uqi8",
  "key38": "61CMYhwaq8RVRTjqY1mJrQJmFzwnAiqgFoCMuTZtA7ShXzocQryejC1yWouG78dbq5748CWyxxLepNpvqPTqTc4M",
  "key39": "4CB52GGNUtDZjsnRHGczL5JASiZNfNx2hXmF4hP1S3iR9D8d8e7uyNL2UuFjeYC15aesPqHfJf8dan3oZbmTEeG9"
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
