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
    "43sxuXNFJy17Be96CjkLWjQbGRASdeUw4H4uzzNot7YBC7waFy1S638SYtsBhhCeDGjuU7Cekwf3GPWNas2ULkGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZPqRcfAGh9wZH7NDNU4LeX8CZgyMwuNvd6asWf1i4M4VKQuodFG3L76pdKeoLf2RDx1g6EnyvPW159Xey14bZv",
  "key1": "3idWQHE98TJmjkUg3iRWVat9ThKsJEmjmTG6Qbm1UjLwMC42nzuxrv78EGHWGKk7Ge5ryvmEzakvMkehsQEvZwxw",
  "key2": "21qii7GzmfNvBncp5gK2T9VZDbvPt4JrGT1etvhh7CHD1jkdCMNpkAwKzAQ9ph4ZoJruCrUdGJvPBwAPBH6MS5YC",
  "key3": "4fsbsgAGpfKuJvJLV4pKVzrFPrp8zt3Y9o2zUptRxNqL8G4BR9iLvC5qyTettM3mM667Zv5dm1HaakWzq2iwxFWA",
  "key4": "3ExpSPAs7QqtaY5btRpKdFW35n1HnfchrPx68UbiJAtA5sb6H8A3M7VYsb5cS2YSZbF1rPyevqJ42JV5m3cW3HB5",
  "key5": "2BWsPB6S7zHn35Afn5U6mpfUTXd8qaQXCwM38ocV8YTdudtytnWHhfeW3BVkUGaf2s5GdFcMvFkdzJFjPR9REizB",
  "key6": "5yUjfGx9mkMRVqBLs8AYQb7PHAfkN4sn9omk9PTKMBKobHCczrS5mGYmbjZeXGt6WfD26uNLywto78Y8cAoKbnV4",
  "key7": "GwPrE9Pzqemvuu5j1wGTihA2PXz5azAS9uHuJTnNeaa6UnymQQ6sn1A8CA8o8F8tyU2CF7WWSA8ycjrA8MkRmnt",
  "key8": "37an8P2LNWu8LEzc4PgSuH6LCfrcyM9caGkjgyW2dE8SNkALnys8vG2DNTdJQwEFRt2893MmrQmhmBkTkdDNTAnB",
  "key9": "oDRhJJqSvdBFMZe73ty7H6NcYvc8wHzazM1RXCFce4gSkcaWYp6q7Tn3URAbsRwai2NpVs7en271cv1GfdbYPgG",
  "key10": "5g1C6SP49p9HbFzTBKKLdokQ3NaFVGYP5pGV3DnBbvr5ghfZWeNSGez45uiqhRdGmafP1F5aKx3hRGfJWjbgs8NZ",
  "key11": "4JEjzZdqcWqPX1DBPwpHdGwkT232kAVM7h7bYXV6ej3WULgkWopyBjeXxxWrC7S13iqvAM6HdW5pZF52ZY1c2ps6",
  "key12": "2cD3iMQMVKrEePBAXYSBRgNRr5am6NGSvHEUgUWpiL44Vb2VCKUa7AwLVCiTzggDwKg5mWMcj8hjUpV8ncADSE6T",
  "key13": "2kfFPBNunc9MGtzsRXXMQv655m7g2Ep2YYMArQ5fRoNQ265KvrgrBDPWAYymPdqiVqvrJwecYp8SoarruNpyTgm1",
  "key14": "Kc9T4Lud8wX6kY2QrfQBWNTenLii9AyQYwr1SoLeaVw7dhzb7hP3JrJhSQ9CW8v9ioJ43vnGZaPj3cAeGwr8D4u",
  "key15": "YbqwBwdYpPUmA6wBq9ir35mDxGmdcjAYTD11DvsQreWxcqbPJtBGkm3UM5LVghWCKQ7oCQLttMg9v37XqTjiJnq",
  "key16": "3wLaTxGudS3kyag5Zbvf7uZWV97MDCu9ozWGghKgPekMAkPVZnSBCpTGqtknJ6gYFR4Pz3TSLa2HStuFjDoD2Z2m",
  "key17": "4MJ45rXM7Tp1DsmicdvnFcJx5DZod1rXfNY4KGy8dQUqJ3DfA63qs56Bi4sh6rDnre1DQCusiAYhNoLwX8CKGYFD",
  "key18": "35E17GUvwFuceet9zoJnLgDDzivrpHLdALqysqQcDdJQnFTAo4CWiTUFFDp748oepE5dM7cV5z9jTV3JM3EFG7GW",
  "key19": "32Ji6yxpRbgrHznCX94pW8UDkCkBQzp13GeiporhrpAu8VdoScRaQUTJX7zCmoqe51jXYyumqpH4ig2KsHR4hPdG",
  "key20": "JXU5ThKNZdMKxwFrAYSKixx414bx8CrPa12jdTSbuPyWjcWcUKtgsLZvB1XhvjWeKVXPYV1PYQdjh4YuUuKLRP5",
  "key21": "4hMaUxLf4amgQJoLDVJeLFTyB7WC8H3V8DCKpuwN7TWjybaWtk8h8a4Ym6o7AnxsifE1SLtH34v6dpX73H7RbvFu",
  "key22": "36E2jWEQzrw8o7LNq4yvjKHyepBa6LaebscUra43VPnpS34AZiARvfKPmin25GV4L44DBJW9PzMqJEmG1C7gtT7B",
  "key23": "5guSZ4wqe744NRPgMUi8ocEMuBGAc8jLdCJN3TD1i6ssGybtQr8AUXnBVTUApZv5cTBDdL36kncqYxynGhP3xQDd",
  "key24": "5PjiEgDGZhq8UUpEEp1TCosMPK9uugKLPRim6ayfNzBwz71u5WL2XeLFwU6fozkCsxg2dSrixr9cXWzy9hqobLem",
  "key25": "LQuBqRx84deVmbp29KvQt6ij1EKGiU9TZ9cLYQmnWbeEtB5a38qdecifx5DJ8oka38SBuUc5kG8oCRaML2eSce4",
  "key26": "3rDXKh1xvAZxkTQGMwGypxCDVf58jHvnbDzXDK2YzPXUFJ4NB1nZJXxCf4KuMNjixUoc879rZUmt8fAwXidVR1Pm",
  "key27": "2Zr3vF4UjjWpTjCoRfcM6HWHkFaWFGw9y5n9uukRUi7cnm7qgtUr9THYGnLK3aSRMyFzRoMahuannu35a57Dvtmg",
  "key28": "2nJsmWV4JR2FoCDRBawWTjZsgn5k7d5Jw7f7NvdNjAos77Z2EA1PvH6zbDwWf5Eaw4pfcF9aawhvJt8bk2t5ST6p",
  "key29": "2FJgBkYHutQPjj4w2ApDaCgFYmNn87gQMY1M3zQAG4cyG8ujxGpxjqkNf7Ag3gGCN89C5Eqrh6MqKchFqvWWawqG",
  "key30": "3VySEy5n9gtKoDiJkJqZhHYcxDLbWr3Jmj6ouxcHjMnh1LjWZ8L1JsAvGVkJTsn4Bsf4vBu7iGroUgaKH7zLcLmJ",
  "key31": "57Z3RWpNFQcJgSeLnrendGZhw6zD5iceFWqwHjayyqj9PFpWhsyzZBsMUGLEcLRKxLPqCwAQtQRN1uCGDkWqwa12",
  "key32": "57zqa8u1YyaRpovekxg6Bzba2Z1nQES2CKpnMmvaYw7ny16AFK3wke1oyj58snVHXQgamq3NBaBFnmV7D7387y59",
  "key33": "5rLHsLYSm1vVQpMZqzfeXYFYdDoTHEB3z8ZMSfu6HNTMmBsrYDcY9QZRiW2ozVBxkf6MQefjuibxd3tkea9aTiKv",
  "key34": "RtscYVNEGVYWMoWZQe9c8AGnmUFHiFUNLN2kchFLgZqpnD7N2QMnZazHJJs15moh1roDErHhcqzuQfoLp9gu6tb",
  "key35": "54V1mcUATqKyRdVFF4FwCaQaBxNgsLpexhFtAafQXD9jDcEuTs3Fyy9k19JiKUJT4vHxJ9vLdxEBLFVxRLiUjxek",
  "key36": "5dkMEHz6PYHm79KGo7hFt7Gun8xFbY2i5XuDskjkJtyYCTmDMgZghvXP2LFH3Mxe3wkULR3qx8HwQ1haEjzrthjW",
  "key37": "CaQzLznW3ythsnmiXTQnuXqE6rM55tyCZT6n3pCxt5bQk9k9LnXokNX412KBaAwy5czyWsukZY8TPV7o9eqWcQB",
  "key38": "5ffyahigquzDZ3veHsMVrQf4Fzw1aXSqJfxNuUaKpqWucXuGg3iBW4rgSdSajmNtK9MoynsDsTbVjkcqZfx1FPkz",
  "key39": "NCrHvb7ntbPhptJeYCpS95BFJnWCwdsxF7Eh5raw6nErGvPbKBAjWocXAHkrZgWxK3ZmubgZuC35uVUAX8fv2DD",
  "key40": "5e8xKPtSxGPdw82iB9EDawzB8B9iHyf9fDkEVuMJQH3uQxGRVqD8PPAi9M2FWVy8SyQueCcncNhRyxzWucw3xgse",
  "key41": "2bHpruLshc7AguxGNDkEG3ngRZkHc5VZq7TqfCGMSoDf3fJGDfFhooo4xkkDbpPZ7MYoRsNVzxuCexpV1PZ3sWas",
  "key42": "5CTrJPmgf8sJq3Mem4oY5wzWpb8NC5gWPDuRnizRFZu6zQdszwzxbgjZM1nYgSiVrVnrKay39QyE7rQGoY3DnRh8",
  "key43": "QMbMiyz4wmxb2ZQp8u4H8VbgXA3xpZNsm1pEwMDdw6DKUSMiRLb5nJL4VZ5FSY5cU7Pe9ZRLYmg98Wi3nBrm4vb",
  "key44": "4yFWqzVeT9fXfVf6mz1zfqsrd6zhn6R8AZm3bx9RtgPWJTFYZEVmRoFVJGM8sBUqfBzm37WDZneYRbZPG2Zdpzc2",
  "key45": "2c1j1eYQTeV1dnNgTVMPVsP87Y2JaDJq8Sp5mSrCiS5wuptmYhnT6Q2wfX4EDcEDbUowz969gggu4sqd3tLRHtQL",
  "key46": "FxkH2GHY1aiQZMX9dqdbdx7WC7Jw4MPsp3nxWKY7M1appz5rxuMjZxA6THtAZuHGcdnnt6Lnm8Ru4c4Zxyduoje",
  "key47": "4qf3RyTahwpEX75c6MdhXbzonuZXWnuHWyL19VZA8K4FEH9uFeRRyzrGQvE4G6MHSJacyiCwCw77tEBgy5iTneon",
  "key48": "NURK7QSjMrFwHpFUdM4p9HdLmWrgth3fG4GK2ZSe45ytCKRn66KLxeCn886sDRsY3nV4DddQNtkvXwxxP9g7pKV"
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
