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
    "bMjB5yhmvE9LsiJ7Sh4m9LiSaDntVeDvzR9qJ9wtdb6FabXrotkWWr8Sfe7UyDKrEqn8fRygbnjCm6gY9JQbQqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P2YeREpLKtCVNBMj4gyta4hVs7c9edWRbHUjoRUiprCsA7PhCfGzncrTf4Q4rKKAADF3nqG5rBcbMaxt8YbTQZE",
  "key1": "x3W4zULAAbaMp2UMzTWb5Sr9n3EaGzJfdr4ZmrE5pXxpTgRoiSyNEP1bXh8Ug88BXs4qDRvbggEUyHn45w6MiUt",
  "key2": "4kkGrPb4yXd8TmnYtEttZdY9N4Y7x5yCjEgnEHdVXXGuvY36hyqxLuafZMv1Tw38KiYDNSSLGWGPoyUoQqxtcdL9",
  "key3": "2CGCoEpDozVWfscwFY2ZrTR96gugkkTcHo9NeDwUHpEzwwXGacFyNcp47LaftTjv7jGPozS6bYQ9wnf59DW72JjH",
  "key4": "53g6bqoQADYGMivvbP3x4DzVWcrUogR5qVfBTLbahZd6zRRV8QRy4DMnbeD3vSbidDLTqhDxfMgdauyQuC99bBEe",
  "key5": "62xmjAPdVd78iFx6crXZqzqB7n5LtQtAmpgXS7hAD9GJo1dnTZYiXGiN5W8X6P6bp9Pij2cVuznbzM6LcsnfQ5gh",
  "key6": "272c4qssGqkdq4mLqtsQ6bDZWritMBozLAUC5Cf8NCz3H5idGSysYpHtAZPynz62pHf2AezcwUKMJ9hocXQ9eene",
  "key7": "4qJZNNxsbrZXwRrA9dMTqCcAXmxo9HoNwSUmokAPjV3n4W3Qwy2Ka19YuRau4nbCPVtNxCdaW2iVAqBhD3rYe5mA",
  "key8": "4PyjTVrW7W1nZtJffXvWxzYGeAL8YrZp1oPRKEGLRdrVn4veHT3iTEYmPmkUroXChRE8YdnE57FCNFqxd3uATkyh",
  "key9": "4ToWgu7B8QascqBfngUxqTwvHDfASyyFMMCdxmCvHCmkab5HPDoCQGdYEBUH9bMoXFXimfEKaYdQWQieB1GL6j2P",
  "key10": "3uxbNrHs93SGEefKeMvM2oxhEsa1RF576vgL5RbxrfUPWwouHkSSd5i96hnyKnqXVDufTWXuh4a4mn4ZPRBbrujV",
  "key11": "2Di8XtPcRaKYHgFpCLtthbmurT4kaAtysZSt1Ff56K5sanaVD3GXTvkXxz6452js7gMvtJq1jvLEwGWN1dQzCmFN",
  "key12": "3DJrbRoig4NWfnKstuuuyffLiefxGj3oGdCCWRMoCfZYg6nCiNLYtkSCn82YEBx2nBQRUDaY1dULHdfrs9K61gtC",
  "key13": "4Gb2DiZ8GL3aHmKLDs9ogjHXoK4zKr498NfGJbTVR9jHLwqs8jKMLAaPWeuZzP3xP3sg3yjDWBoys4JhoZ2tAuvU",
  "key14": "4KXaFcC5mV3qVMn47BtjhhfZ5a1n98EqZBeFrLqvpZpk9ySt5JXCoYmWLx82353g9H2EU7AtTxSrh4XFqBG5tAg3",
  "key15": "5UMiGA6XTd7E9YPc4F4dXRBHmpugHBhBj4hrkuMXe5Z9GzPsTeyFvuMemiiMbbXDZZ5fUD8yFCBM1YWGPtSnL4Zd",
  "key16": "21Pi1ycaKJgTxjiTBxpzogqck7o3y1zdzcAPmNraboTwu2jFj8WYwU7ZKsmG3XjjhLydXRaHNKeeQsB3aovXoBrf",
  "key17": "2JFvbynssxxZ2e36QVge4qYVYKgz7AuThEKfDbSp85QYLRPd14YKERs2UE757L4iRCyvDijBTWc1KHrhckpgnkRv",
  "key18": "3RFUQmZyviV12QQDAzppBfjtq8B6JmjUzfv9UHtDmPQWsiojPBEJNFBX4KUYPEjL9oLi5i5jKz4mdgtbZokbgrbL",
  "key19": "N1mzGfJQ5KHfRLCRSXRxFyTY8ZVeyAPpPa87dNC2sPY3x5jdFTBG4bv78ZfQ4S6QDuZdrBGD6ZxQEcXJFP6hNi1",
  "key20": "BJwTfYGAhftV89jgrqTwwPHDB4tnUzKLQptJWdNtBxZNR8v6NmfnLY65rQaV2RTWvfR1zsuAtPccjPx48y8BUDn",
  "key21": "Wq2gGndwDvnSKh12mVh3RvfWUXQsvoVKv8NycAvkPVEwD9BdMZzNmaZxtohkEfVCYJhtuQsnsMatHK2iF5h1qMY",
  "key22": "2vDeEPTdiVEingXLkAjDDEzhUGi76trke2apa47Hh7VZ2tUryxfnpYpBmet688WEJkxmHar2qhgmA5mrQDHXcKbY",
  "key23": "59phWqp8vfAgjDaGFfZGR22h46H8HCReXjvmMA6khLj3KQzV7kRAj3L8PVqUhctaSzt4FUsd338LLJrzaYsk1PE7",
  "key24": "2iC8hXq4DJgvJZitYgu3hmkuBtoUQbWHCwVJ2gj6qA1XiRxkVbVbBcANH6EzM4S7HVZRdxrdgNAf4jutp6x5rShh",
  "key25": "5R3D1MBo7Z4fRLDeyM8QmFo2YPiFzBSLrM6pfYGN163ApXR395vsskDznTeBhxijRHSTdxWxz3By4y71hu8YzeBi",
  "key26": "3GMUnPdc1Leo1KgHs7vfDFYnGpX1KG6U2x63ijpuskJLthkjbuQYPZ6sCeZE883HUT4BYzHP8L2Dztgq5nm94imr",
  "key27": "55sRBwKce2fkN87Xr6vosLmj8GDEPeyMC9DyrA5m3j6fdYfzNTawRPVCQmF7wLZJvPcz5Bio5e7gzX9zBiAsEK4X",
  "key28": "2jFs1NxX2psd15V22EFFJVu5KjZBbAssBwjuKk9GRXAj1t4rC72tRC45sUKvHVnKBX2NBQiLzfE2Z8bJKGZZyTmL",
  "key29": "9mmdWvA8ec9x32szMLsLa49TrUVpNUP9n9Gqdxk6xXVJXZKoiQ9SAMp7p3YoaKj7iMaXARjsPFXL4cCxa4gEFEZ",
  "key30": "2MoHmJn1ms4v49aLyyWwZSy6UcfTo1bRBqzLYL6EZiDkRVUHJhNRwMtEpAjgnpwQnt4tHpKCmoPizgQzrQ2gNVJR",
  "key31": "4jmxhe6gRU5FGxftuVURnY6KqdSu6SKyYV2croNVKWxwhWMBw4gnzeekQ2ivrek1tt2jeEWpUBoNnipjAf8tBfAj",
  "key32": "3qbxZFndD9qZn4Ly4UHgwSTZYLqb1y65WUgEL3AJXtccj11Pfkessfpxpi1aM3U4PCwCExDguE46qEgFk1JEiZgn",
  "key33": "4wdrACxkFc4PfTM26iHyab9eUJxbv5vpevoRTr9UYmmwFTBSmBQ7wBQR6hcmC8AY8nXxcXfU2nMC1EKXjedBkQbQ",
  "key34": "2iM8cxAuHoprF2gaECfLXzbyfFNn4czTv3AU2xLw2NiuYwcVEuGVBYaJygbNnJaHfyXiKtRmGyeb846UEq7Wir3E",
  "key35": "beFSgb1U7jXHqMKYaoUyJ3JpaJBFn2qrjiJwSgr9dL2jtJSgqJZjAdAVoySTWeJxzv2Kmg4rtAmV6braHtCZwfm",
  "key36": "62rdaKcGAUB344DVxsqQCmRnH5ujUJZvUReZDBr2meJNBFBGATE6iebUNKFR4nWYk7FgP231Lpj4UAsnmRZQApJ5"
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
