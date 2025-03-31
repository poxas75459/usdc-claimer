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
    "5AmbYD2URmYEQyjEo5GjpxX9tREcQ4bAQvJmc3EABYnLNkALnVynuW3BWiDdHqGaeLM4hoFqrkWwcLCWqtJqemmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGWjtFFR1Dj65HM4CSE5EJedcwC2dPw3guAe2ovvUQT7Jgcm9HN6RLYLah8ZQKoYXCbV8zyAguwyQ7wkCPMEeBK",
  "key1": "3UUMv5t2ceuicEx8TiTfegx6F27A29N238fqYahNCeowsbxhoxnGgmEUq7YUPe1Aiw1DczwFzR33yGy6MBB3Ugza",
  "key2": "UQU15BXcv55eg128v1TKuznCvfAXuXKGPhmmpVtEFC2kauWQPoi6qH66fjXCh9N9gESqCQ7zkLo9eBd4AZhCQV7",
  "key3": "tCFo342ihDbUHHjycMBng1cAYzWjMwLWCbsJ5Q7ne3JjCuBnTYXEEBypPBsJmKraCVJuSEuXsDj3PUbEVguKsNW",
  "key4": "3LBSppQrVUmT7r23oKtpQNSYzsUcdSjUhppYuwRXR5emfzNi77Q6MFRnzXBa3iS2MWHgQADLtRkz37nVDAMBhhtW",
  "key5": "5cj9YducxDijxSU1PfBkNUoU4fNWbiipL7nB2mDr5ByTQ7Psp2XCstpMpdQEqTZ4Z1SSaWqYpS96UXeQAG3VSPda",
  "key6": "DoaXuCjLwdSzyNvZqwmadjmeN88FBqRYxM1a1v4HFMpDaE9URzKTQfGmAynRwXnAttRMKHgqN5TwE6Dh6ijXmi4",
  "key7": "24RZxbvG2a4QPNYAu1aCxaJ7bw6U4qdNhBFhJnRK5vXKQBNjmW6GeKqRABqCBx7dbA4q1wXNEhySTYMFEVA8aS6q",
  "key8": "5PqMpcvd1QxxoQuhCkW764XwQ8pW1YDBhzGzeJ9PPGPmJzrWKCffcFFKnaPnv9PGnQBg8LNNqLRirzqPG6kidiyu",
  "key9": "2t4X8WoKUAfPeMbFR43MVDXt8D9FsofiKCfzP8HxWzDsoSUya5qgCCrw6R4cQrj6HUJSHpQVQvYgaAu9ezx9cZ9z",
  "key10": "2K6UESDYMYPubLucHreAygixYr8iLXxHkmBjGqzhAESggJPi7qgS1mERDyMKzAq9FSjJRpdppBDR2cc5dRDSwkqG",
  "key11": "5pKW5AQoU5a38m69RPzuJWjR4hkpduPXNKEXUHuWRHFXCaa2LY8964XcEpjLwDNXCZFKC6b8ahRWt4aE7ZKxnFbQ",
  "key12": "2QjoMzahXZb8YoevjAFpBPzKBu5H2qz4YjDCamhL2fnLwSzEHhVZ2jFNCZA9GCEvVDLKHNnocDN1nFx6qbP8xbWL",
  "key13": "2oE7viiin3pwK7tAq4mLpJ1832hFLbcA8ifoFhgVT8GuagbMigVN44RmKaxrRVFifbDSmWp7179yvTK6waY2oVvM",
  "key14": "4zruAvzLxDbzdbF3fp5NSxAFRy1xj5fy5pytvmvKb3zY69m5maKj99JWy7CimcUYjZzLsJoD2KWBuqBX8tzJyDcU",
  "key15": "3tiRw53dAGKjRHjvmvtGkdNkribrnjYqDrQByfv7JNKjmkKwfobQGFb8PpWMjRgh21zLr5u3FnQUixPex41cYN7h",
  "key16": "65jn9ShQymWJNy9K2FMRpCYXPLZUsdzTegQj8NpS4eTXN1rv27o5syhcUS8NrGGynFVu2B15Unyuc69QtXmjiqxo",
  "key17": "3wFgqJcJWRLszKTJ8TrCXRNHEqF9T32ab8SBXMq6kgEasg3wY8ZpdjEGBGU8JoBoHcBKx16ZWRjhS48KjZ5j37X1",
  "key18": "47zn8jpV83sSL4xuh9PHaJNxpghUujbf9L5KKBBiiHQZvQKFr25aYFuBMczADceftN34LjxBqz8YtBJY2Jd52WEP",
  "key19": "42j2EBK7End295dXqDWdsrKCfRMMFp9z2GP1fizy9CMW6KsLNpmx99ZWXxjo2hPGFsyu1SbUrHvMtoGZ7GepfXt5",
  "key20": "3HpmJYif5WiW1k4RbCDc92TPGrcboSnwEcYvj4x5RSXb8dtaAgBJncgFH2pa6zfThirFxsrtHXRdKHCe79vxPCGG",
  "key21": "LN2TALVan525tArcxV7mw2CU2tC4s2HzwLjjjKiYaUrv4bwa2JG19PNc256CjAFJsA82tm8uod6zbG26jZjFDe3",
  "key22": "2yC4Ksepafbv6hVacc4oGpsuQ9JEQ91gNvSz8WoNYqLPiHSGiWo8mMdCiMs9MQDAdmy9XndVFxZpPjouxLX4wSen",
  "key23": "4CXtV72XAhawe2Ws6RotDXCbEFZkgEhvZmyRvGtn63RgDayRDqePUtZdHcBPm9FSTaQcoKEfaAvgYB1fQ3za61vn",
  "key24": "c1PFYVi4uwCJxYdXNmuqexKBzKSXckKpKN2os6yhFybvc8QU9kDtb7KuDukiy9W2nPxTaheJKhRpgwdY4EjDbnv",
  "key25": "4mgSKL9ijUaDFuCsU1tZkBZ3jYY9Hwz4moSg48DbWnwJnde19hxcYnCkjXAUT1hACE7EFHaSH9dM71Dyfbe4WJkA",
  "key26": "4hwm4p1fdsF75Lr57rNbsBfwmgpbZxnX3PV8nmPjWMatGwxMVKb5bayEvYQL2CTCqJJNZxRvFrK5KCeALB8YwczH",
  "key27": "xEf5riw5WpcUufzRHFeYTLp64QHqLDJerhJU8exvFFgk9EMGmvSXMgGbxEU2yc1ngm3QmZafihD7yf6aUfX1vfA",
  "key28": "4TUGsMkLDp9KwzkTz9aNDNkiB7cny8zqrNsieHyknG5zxq1VANRW5YHWy2Hqnh1gA99bUuegA7XzxepJTkXeUVKb",
  "key29": "gyRw4tLhgkKm1Bgez7Uj9du8a5UegsNvzUULSYvNwdQ2c9KtWnT6TagdtvnHCytxSojSG1hSftNrNZHUjhufVQ7",
  "key30": "5kuepCPEj1vpYeCMUDzcs86GaybDE7kGVm37UK51qYMHiuGhWZDSLdSWzpssk6NgTG47tGQGibwi5caWfLj4brHR",
  "key31": "38NyjZXFwaFX3Gt81rfhitLTDCr3r3xyFfqfy5k5UjLCr8WfygkSxmuf1Dddg85HkBSgmTvZZFAggA1xpJdDHzqM",
  "key32": "3uhYiZymNCFVP3z1RwY2bvsCpiApTj3XjTTzFhzpMxATB25aKDd35XLXeuy4xLLYiPh8US1jxktnPKahQEqQXbMi",
  "key33": "3WFSifsR87L2NUr9hLmC11LEWPdzitQJTcTXNFCNiuivYpfvnx4EAW6HmNdygvLV5xzgYfu2HJRHWeAuvMXXLAK6",
  "key34": "5FSdk9U9um4vWXEHM6Au8pbQ2jhk7FYN2XDwjWExeYGw5eyDT3gzz6SZ5j6Ey1DxF1HH7SDdyAWAewu3eT1Ms91t",
  "key35": "5WZDKNAALRpigDGX8XNeDcSFmFtQMzrDv2jKLpYkZ2xns8ThEc3v9oBuuZHrciRk5may1at9wZoh8Qbz8T2EW8GU",
  "key36": "4TTHGbMkJe6xsZupomqcFkrtLsfG7q9cLtbQUn9Mn9WnGS724rHugvUAdfPbsnw5y2ZvPB6DjHQLPuTrYFptG6VK",
  "key37": "4nci3fg5zPQaz65ebq8BDJXuD3Y1VfPh3rM2ZRHBYh2BeyZE8Ap98T66sW4KpvYeifxg9WsBKGuxHaR3sRkrizi2",
  "key38": "3mPzrYGMgE8jqVBWZjvcNB1Ko3VrNhBns6BkKcz8d5HphhZowJGBykydK5w79cEL6uydqf4EkHD3CNKYpZZDug7v",
  "key39": "4dGw15aKwT4TPGR6QX7sVSi5quKPovtW6TxxeyhoUKMgcsiKUU6SHLiEu2Mn9G9KsDnP3upcmNY6TbvZyWNQuYds",
  "key40": "2x4waoxbpoXv2a8HDHNAP9vTN1y9H88cWs45axN2R33AKcnjR1qYBuRMebdbFP9eWSTQRq3F2WwaK5QRCkDz8wvC",
  "key41": "2LzLvMLCu3pGdMWUqqhUeX5Wxuu51QBMtpn8zYDEL9jpas1i8DwZtWVyCmVKQ2xA9f9ikhJr2ChNCLqgCVSQ4jPj",
  "key42": "4CjamMG4KzRkPTcpKkHgHG2gPkn6gE1XkhKT5wKjAsArFPWQjEoXDmbZpkaNDUcjAvbjxd19MPJ8AbRiGygpsLA2",
  "key43": "3wxQkEhMdjLq56dy2beYwWdXxUKz3UcJ86VT5GbPwyxnJQq8cWuH7MDEvDoRCZP7hexXinBfZ9qBzwF9tx4E3Ydf",
  "key44": "3EMT3kmtvfKUSBo48cfTcr6SjCEQ23Q7tPCFytktyXUkh4tsEg3LXxUEtWVfGxJuMoHZGywjeeN4k11bx5n7SGuK",
  "key45": "56uL8rDq14icQcJ1EN5kKfsbNuC7fiErD21pTppNzNXxiLfgospNos15qgRASsK2BDmhv5X6DfNr2Z2i46Q8VDqr"
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
