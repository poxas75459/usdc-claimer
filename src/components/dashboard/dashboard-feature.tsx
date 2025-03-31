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
    "224tZa7jj4MUG3bBxSPfwdvLB2o851FWk3b7QjFUTkNHjNqhKX1h8UYewAnB2b5n9jmc9RW8xiuohMQW7xT8WgFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KJwQ51ASDfpQjJEePzUZPTDwkJF3CXgzpWvFZqq5REDGFWURKqP3PtdqYpiqF4MTPf3HAgoK185Na8nhkzqay7C",
  "key1": "28D35DGgjeQYd1Q7r9kHn4P9qq6NyNL2cLFR6xyx1nEWNPYBz3koP1hzfKqcK2c3qqmfDhkNT289ei1LXDRknE7T",
  "key2": "3WhnjXpDPQvFJjXwDdN6kw61H8BNRfv86xL2fHHBFiacQkfiZHZdyKUzRAaC3kEcNroyt977xxdZDgMXiRnMHffj",
  "key3": "2dtFRpjbU4Do4tPQ9MjXK9j6ZyYFWHSqbeeqvHmeExtj3C1qro9dVeGzoiHJz84hFgfbcRrCinbC7CU9DxKNk4Xc",
  "key4": "4kmkXRoVuMV93sgTGAw9GUs1wmQMiPQPvFwtftPSew18VBZJgQhbR4Le94iR5TWg7ehDhzfcNrzzWhEyZtyDUA3i",
  "key5": "62HiDZTmhWiy7A27ZyMUR7hGnGKTaqtS19AaYo9QQZDZUrDA78zuzujZSSPuLRHUCnT5SFrx7rHMW5VzNSeX8XHQ",
  "key6": "3Zvp3VHG8bknDn992nV2hKFm8vLoFFkfSF41b2xaSKYrZp94YfSd8tFhBGM6TiYprbV7gsuo157gjh5KbWb5YRsA",
  "key7": "4isEgbefqBkquFub9s1JGe8daXoo4TaLvp4HamKY9FAWr5Eofd9VViBqTKTSfJzGmzQBnZRwRjYmjmoAJu3SPHZM",
  "key8": "2U5YiKLu7SRi4iXfqZnNcAWCwmje1QzZzSapAffpoX2jizn5MTShyhWyWWhrPR1bLLq717saAoUUQjtvyKsWpsDi",
  "key9": "2nb9GL6oUddwqoCmBQtYry2Wk8rL2JTVC9oEjxeHCT61eHy8oenfUQNCikmwj4nwYhMmqbLVyuoEJ1KNHQ1BGgNN",
  "key10": "iCbXPJLpsWSb42HvixtUPg8oDKijgtZQGKnQshCHhaFx1MYthiVYMGqCPx91Fjb5uAKvdsYQM36RRPBZM6y5fYx",
  "key11": "375GGTS8182gu7ksGa5LHpKQMJcxQRxLVvbo5nQ8qAocw8wfy87vDfBEwqbbpziogcsP73AbA6CzQWVw6WwxWvv",
  "key12": "3rTjwrqxWAYwKDNqRQuDUfEvMNUaWokMvPHc87soTffa7XkpUKH2h1VFxqTahw3m6byEggJskZteoBnRav5L1Sry",
  "key13": "5x5iiUqmKdHQR4MTU7WcNUE1AcRyac9DV3jdyhStecr9gFkcQ94SvFb4aTguYbwCbZy9dLY8JKWhR1qrXgdEHKiq",
  "key14": "3h7bC8Z4E97BrRKCd68VnV3ogSfyGoD7wP5HHPjWrihnQNnA56KmNnnxyYizp6Kz84mNUoeF9sei42SQMqv9y2c6",
  "key15": "28BZrnxt3nb1KLag9xM9DtvXCgeVVPZvMjFTBrciRo4WcRvzrpV23cL2PaHNK5M43oxsRd4kXaxT7wF7KCJQXSkq",
  "key16": "4g9Wvpu4imvTYWQ3zfFYweYh9JykmRdAbQvoQXDacpsBU4V7mEdE3GqGTLquCv9EjuATRAhQXM4efQn54jZH4R4N",
  "key17": "2EKFLsRwinEq6UiJSu9kFYgy5zAT74AqYq13u1KKojsffUpFp8yGUTftPA7MSUeVYqAWQLYBBM8jN4CbkBJCe6CM",
  "key18": "3v6adVbBoYr6bhWTgoC7SzBFRdiKoSeghF5bmWo5KVXbtVjDNQn62TG3LHfLLkAzPba1fxihA59cPbC4wa6QRXYF",
  "key19": "3TuQ46syYqV8rahUXbcKG8dNRxDB2sFuXPvKVierRvmTwMnHmN4eodpzkMfu6GSNpExtH6VPdHRM8h2xgEH3B2FN",
  "key20": "4HE3xj6jw3LrMynSW7TfLQnmaFDyvtG9VSn4d5QzYrECbLBbqJGJZK2gXgi8pPxsJ6Da1dNUTVymT69cRUxx3xGM",
  "key21": "59a3FZgo2L8723g6aYiuEQaELZdMih1VebdgiTN95yvp2BkK49uAWyszP3mCTGigW2ptPYUsQfaXbXeq9vr9ASQZ",
  "key22": "5vY117aTXSKe6wAQ7C4ztnhMWo3xVED8t9XMZnqykQkthNujWpPakehfZ2bUcUZTJw7ZbTPa2tHz9aTxY5DwL8cK",
  "key23": "3qS4Njb4Dadsnofbb1vjVcw8rAYe3NvTm3nUSueLFyoXHmZaGXnSiHyhN5zph1PnJWPa72ACGAMuW1d4vTXgP3US",
  "key24": "5uZHfcMxwsCWz25yuhVADxm6DaibBfniVtumbHAzaUcywoE54tvbvckoURs2XKi2xgypz53zKTALpjQwMB7hGeh1",
  "key25": "4CYzpMGztWYpJXbXKsNKLGcksD8EnKhBq7wQwtdMn9J6smtkTpu64pTcL7ShkRxryiRtZd4imTR8MWSoN9iURNZc",
  "key26": "rdLDAfj7bcwjMFsreawp43xFmKiBexuvA5Y4fdF6he5UZYyYFrVZmqx98QmjA7Cw7ndQwWpswCmnRCpsobDGmFh",
  "key27": "5E9CGB1n7fjotbzPKWLjUGUrGTxS2Bx1RznnwHRtv8BBtUp7iWxZszG4co5PLtKFe9yhC33FNw455f7rCnqor96w",
  "key28": "yrMzjXvWjj8soVcbaGHMZkxQ4Y2s1k727k64zHbFsivz67heK7x2gLNRQgBuzmkmb9974pX2o99ndraSh2MUuNk",
  "key29": "3DjPCQ47rtSCtMGuPQCATSC27PmcZNwCLpNYsXe2pLdHwrQL8wp9FxxaSBSMj6j5iDH3KhSHW4RXmLDLyeuDjBaG",
  "key30": "3R8uYF7JUQFzv1WhmMK9a7B5PYTkw3wc7wY6tR1qY89CexK99dUTUKzGR8cA4Q44PLRKj8dwJX1vgzPafEWm18uw",
  "key31": "32CyWB2zmPXjobTdvBKcTNXtZCEFZDkjU7UVppFoTsSA9bWZbE84eo3p1Y67EEch7Z3EQRHFtPTgnrF4pKVuNmDL",
  "key32": "GYRGdkFYiiQLBj8945PJB6W6xDwk8qGPYhD5bK8WZ89DCowS49WZbsbSKqDvQTN5LEHhZpYYiBgxyxixoZZ14JT",
  "key33": "3z1MAiTC2oWtgCk2XJbnRzQ8U3PvPUyP4USjyxjzJGnmZcyqNUwzu8ZBkHnW3djvWtDMJtu3QT4NW5ZmCXN29NhM",
  "key34": "47LdqbumuZm43HqURyWCyqtjq22cZALCn5aFVqHa4GXKFUX2XKy6LgfvdqCehpqwvQzustDpCWMzF7JZ91VkrGv",
  "key35": "2oGKam5q9L8rhqXLJZwDvhd6d7L2uLoWoTrovZY3davAbxZhH7gSzVGNXeoNjKbHFDubU6rxWGJN1ieZBSZgFfHd"
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
