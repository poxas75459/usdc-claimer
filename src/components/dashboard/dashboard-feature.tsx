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
    "3H1cMER7g4ndSjttnfakFHA5DdSbnVPkM6YCTrQ4L43XckYjZzVJviRXsn7KUbPuCNNRRw6BFiJdCwPLmaRHf1gU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWYhJQePFWjDpJMC975fNZjqVp3X6HfCirbExdze4TfUksUVDsZkr4Wkk3gFr5j4PSHs3887itQmWcrtZFEB6Md",
  "key1": "3B739LDyLvKQxVLZaqZkucAhdCwgCt472KKnph77tufkPMB3HyYsbaLZw2uxoLqLtHTFn1n5rLbBHsBEMNJAKMW4",
  "key2": "2mHa9RXV7BPfnkdRngAt6Zv7DjCnk8gSVnaQ1eZ4ZLHauTi7cQMQSbgnLCfZnEc1JBJ8WWStorwrpawdc2jgPVB7",
  "key3": "3jD5Uf2v4kEYabXLNhK6iuMu3q2coz5hLd98KWkz4KwM6TsBj4bQgLYwD8tM8tqsJJs6idYVx3ojYqFJc3CMdVxK",
  "key4": "VY7jDW1MCHgd7ZrybDSHkCo8odachHk9DEBUaFyAApShAjrgrQ9TUdLxQ3LTYCikiAJuXiwVvsdjF5J1K39q9LT",
  "key5": "2JqWxWt47si29GVS7Wbc416kDQRUNppcbHzNo65aoLnPXEUsNRD2oC1NHLykoxUCqLdc5WD4NkpYZQhzVNLS3k7W",
  "key6": "5dSqFPBSCBmPSV2rSr2mqjgeEK12Rms6JHfDH3WMfsjhC39rS8ZqZs1T8i7Qn1isSiJcxYYvbbSY24eKeWyg4xou",
  "key7": "2WDAkFKR6e29uRmonttLnJpPqiBFCeAeJUB84pcGv3p57EZuccRwi9vw76zWZMpB2d94kqkwWhAYthamqcHcMwL5",
  "key8": "3euaPdo2KnxVqd8aGDgrYsV1p3D5TUFzs3cvTJKmQE2sddHRGrF1UpG7qYnFjZMzGV2Y6Jsn7UqFRbDj7uw32mDM",
  "key9": "4R7prM4pVqojkGiHACgfJ7sNJoL61oXEs3ECSrxZ4WvTG9MUXd2u2nCPMLNoqDJs2zQSBFxPuhmiiLjQFtorQeW9",
  "key10": "2Mdy1kd3nX9oresXYbnn7uMUZvRdTUNAnNYYjRnTEKwWGLQXKohoMSnfmMnj8P3LAsuvrqLyU2kEQoTCnCHVDHmW",
  "key11": "GsSdBQQiVAsw5sToTvpjf4oyLXU4kwX5JJpTcr3Vio5uvwn6PWVyyVqNpVBSbnzuic3bVykqr4x9hMjWtYLmfAm",
  "key12": "3ThWozHhMvwU8UndmNfxYAEmCoVELWKntEahVxV7SxUgwQ6VVPH93FTqq9Q6swy7zyBXB1LyYu9v7jDjuiN76vUx",
  "key13": "5P4S37jG3zRNfcFco9EVjS9UYf57jL3om5EH1sAGN9pWpizQ1qo1oSKW58pU7pXrSyPD9YPXbygNaz1LHCTFUWxt",
  "key14": "3MfDCSYfRv4yLnym8D1bnynQuVbhRDYLPDBtMG4yCEMCoJCotXWKqK8kyZX154mcLus6wZ9CQRhLRfPSTU2qYBo4",
  "key15": "4rJBgr4qimTpi9DmGX8uP9PzvpGTU7CGQ2PXkgK5R4j4LDJHSXaZG9Rnk3XHFoULrbcUdHtt9rsSs7HK4K3dTnz1",
  "key16": "4nQoJgAXTvz8o85Ev8RiBGGPVfVm7wjepPQbwoWybGAUsHyvZw8pbTuP2ChLTWRUhuQaggPVYFMZa1XGzbdn1ckY",
  "key17": "Em1Aiv5Y3n4gq7T1HywD3euVXPrQr9H1Yey6jNuJysrT1tvK3ACrwbdAYAmdrE23sj6y56kWMXShCPkeQcQM7To",
  "key18": "5emfWpykVeLds6xEAYo3Y7YtjEE2CdYD4dBcVbvjQU7swnxzg5AdqfPE5tsQJMrVUshLEMyH5hYiqJEcV64gFYUH",
  "key19": "4Zim2adCWrW6naip8iw5xmErxi6m1WYJ38bcvDhABVR45ekTnhbeR8dP5dnywTEAQEJKMVaewRPoaaqC1nGjwSEZ",
  "key20": "2FtfEfYXKBjq7MmgU9FRShR3riJxQyt3JJUEH9mzCM4AEo1YgAo171mpGHjJUCRfYkL5DokkWaiyGQC4Gpbcrt9R",
  "key21": "5PQsgLAucHvPUtBBjM57kRMd9C8hduRePvDt15HsNTE9bXWwfTZifzm7qEAnYfq7XAeWh1vXrQZXZ682b9TD6dQw",
  "key22": "uVQQM26DABSThwkeRE2q5mDQRepm8KFEd3JUeZBbfbmamNf6MSJbHWjRUVWChMHBxVar35M8AdYKVxQg5MtsNAC",
  "key23": "5m7XZEawNWgPyH58K1Xz4e6H61kTUCSnhNyqmdGd3bDX1jvYKQEztoJF2apUDZjFojo5mvKWHcnWWxeJf1nJfiZx",
  "key24": "BH7UrnCHhPY7Pi4cAUTEjzcmW9iYu8FEbgN9LT92JHXNjxGC1kPxufQWMPoa8MQCiub2G7ZPj8kCMJe9uw24rdE",
  "key25": "3KSFA8QPhDEM8Hoq2jSXAoam4r57QT12uTz7P2j4UrAeAnEDPpJdnFipHAF5q2LGdeaM7oyrvQgWRMfny5KEvH8F",
  "key26": "436pTgaBpUBuFDi6VWKc9QGA8BiAccT9AXMMeFxgLVVDSqiCYtShau9rZdreoC7UTBdwA9iDhS2VrYTHHVzG5oyH",
  "key27": "HZyVc6GazZrUNRSrkhLngvEcKjGbQTJFiSQmEsqNmg2iVAwujuucHiDkEC5rP1RnEwGme1EY1xRjEifUsH3ioj6",
  "key28": "5MUXu1xyv1ooaJRfyPTMY3movPwuvfj7fmd8L9Votry7fWJwo2eJxtQGWu4aF6t551RxX4ah7NYomuHut2tQTJgs",
  "key29": "64qhTaEtJg4URNEY4qXCpVnLiQtFZLa5CrmuJaxwpVn8UshcRKmDeyPh52JpgGYKB59XDRbMSRrdh1i5BF5wEJBv",
  "key30": "3Sjk3YYkk6wHr1MhuUqLM56BrfkYMjm6PHjyfVedUyT7jUZHkNtfWi9P3ELgcKfbitYP1XxeEngaTS42YbukQY1j",
  "key31": "65QF5MAhvVT39MiMQXSsVxkEDd2cuQRvTjWheeDDbbzbmXNTNYPytTdpdNZfmU8e1uKWPfzLnLZ2PVHNxg8A8bjj",
  "key32": "xt7QgKegpg5UbD1Zy5cEWefU4YDnpVDwUkh3YGWb9R8RhGdZChidi7nvYKrosppYMqwz7EmcDTogcFtYBNU8AAn",
  "key33": "4JvNMFpJuaLtgXTUEAM4h4o8m9Nw99A8QhFbB6DDL58roqVY762SZVFziwrxmKzr4sDSKSTC6y2e1sarziuEVEKK",
  "key34": "67WQrkdVvposimaQe1imsS5Vo1tjV2Ls9rKMs2qZQVkzc3hde1ZKi6psPR3YYTT1SwaQ5UPo3Vm75yXnKns9nCby",
  "key35": "SLgBzWKzGw4m9KFyVYRzA1ftpDqTPnQTMh763mkbiHLtmJyRuabw5mxT5G9DbhWs7ULkoYjwVDyF24PYmbEw2ef",
  "key36": "5iTewHKNYcmGxdjJZCtpD8HmChxdzg2UUfrmKkMVuZBrPeiU5fyZXFkawdsrxwEubNXc2xwC9QAwCymKU94Tch7L",
  "key37": "2zCjkXF7e58j5n68WQv5H81hrtZD7EYVPCCPyQCEjWvfhnf5E6A8hUzkBE7dP3xTiqbQFdryUYJXGdsNmEa7dJ7u"
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
