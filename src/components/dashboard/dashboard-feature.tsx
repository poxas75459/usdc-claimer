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
    "67h8v4za2tBvkq7rRRntFaPD6ngagFCCmtfiaSfzosfu4aMAdtbZ1143AYDsv3n39Ph879Rxvbo8dbms2fGtmexe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PmfShuDsxyXodS4mKM2FEP1W4EvRBBvWyhFkmKQod9tNjsbbVVh5gSHvUHAHin4LUZzvdqwfmu51KXvRwWkmuqo",
  "key1": "5BJHwoNRL2bwzPFei3Y6iXK7ZoCoeR59BWi8LfXGnHizeBaWhFhLG13UUmTyxuVTywqMop5zd95gD3GyjhYugWDu",
  "key2": "4zU88np4A4jHSDnM66DQXEWkuFiDAw1822oynaqAt1B8e83Nxi4kuAth479tY3zoNXJjmNTmT631zyTMMosonhVq",
  "key3": "5xK1kcjgPczp4H8tQGhTAd9A9UWxceMckfWCNxsFkLycRWwz5zjWAHbzHPAfqeuva1RbyasEzgJYx1b7jZdcJ9St",
  "key4": "3HMM8iFbaQFGHxFWg7wTea5gbEZ1QRdJsPAsogENXtjgCD4Cnq2g8fub9qTQqKYhB1UaLwNLCutjZPSjoobtE37y",
  "key5": "VQ5nE5EmsGSzcdjhsgBgFD6J6JouRHcJAjPjjHXGbHvc8WJ1Ni7ZWDYE2dJR9UHc93YRmiQztvZu8ucJML54VPe",
  "key6": "mMS6nq16M3nDwGFinqZ6JgZjLWTEx5uEHkPMqLKWUkuZygikuPumTpAFFVU5d9qdHjgSJAmukxvbX4FoFznEv9F",
  "key7": "2tAdc58qhm2Roc98mXurJ6vP1qY6EaFgmr3tsn6Amt2ZRX81c5jjCxrNGhscnTUvQvUQcxx6YZJ1Ywjk9ND6fHUX",
  "key8": "233ocB381TLSutZwMBHxcyZB9aekXgyaTRkfy3G4r6LBsWiqE5wAuppxJX8veBRsHACezL6vmF2gB7jKPqna1pjX",
  "key9": "65ceRrAEv6DVtVEncHFjMzNMuV9B88BwNjX6JXQoEUKttaXhyeQ8AwkNWtuQKufDPKjm534z2Td7jao5cf2Wsy5Q",
  "key10": "sXMY8J2vkvyAwAU5eqGaj3ptB4gqyWJ86bq7sb4cnbLHuP9ekthjtvArSj6KXedskuu68RXpjHyvP87BktXbKsL",
  "key11": "B7EBiX4d2nb1bidETwvQyt1a5XU3cVEp47X4anp57banyzmu5mhzu7RWwSsXfbdfmbrtXV5ajPx8L25PYrhnkZf",
  "key12": "4AhfF54hnRCWYyhL8hJzoLyuE9X7AxaMKQoCFy24zL96xcgpRk4y9T9uqBu31JQ9v9KN2T71bvvtZrvvni9bx2PT",
  "key13": "4yuXdR2VzijjfnMBGchFkJn3LenbTMkELbnHiT23ZeFDY2g88MMecbJw99bwpttFkvkYwUXxr3DfFZpBiF4jrDCy",
  "key14": "59LEw9aKUxhCXE4PFjAM2FHXkmWEqW3VKdojEACgx5Raw9oe7j3BSrK3zKDbGrKcT6joWPfFutFWB3eZNtyQ2W5n",
  "key15": "3hw8MAa9NA1HNw2dV9bynaiHUqRSbBQp5nD1dZDtQpFvDV4ahmbWV2czZ53kzTLgYbzK7c9c3fs1tumygDFFLDAa",
  "key16": "TzVoKV1QBv5wkkjqwo96nPcuuz6i6amF3iqrUe3Pjf91mLuh7nneQok87cMMyHVpg3iStuTHQbofarLY7DaffLo",
  "key17": "3Z2JmGXaVG2yBnjHrWew8ZDkv7NKNB9XXzbpfuU39de2ZtRczn1NovrMg8HZsCfzoqcsrbFjdFaQaNq3dZBdwJdn",
  "key18": "4oMA6rduVUenfLscTUV9y2F3pe1tyGDujNt6nKAFZ1Dq44YnHnxobToLsRmTR8eHihNiidHAdX9MBgzQbCCsX9pu",
  "key19": "5L89QF5YxmQxUJZg6SrtC6poFuVEQoK4VuKnBvHhTa9Gjbo4sQMYTq7cenGVy759xovKakzAzTogn5t5p6DaC7s",
  "key20": "W8kGvKwnNx3pkFJhVM4Y4WsbZP2CdvPBxwfFbugoCEcUBEHfw9QAZerwiTSR9NZdsJxgtxE56fMQbU3n1A9XNDV",
  "key21": "3xLWx8xMHdnAvzqDj6y1Ghq6vf5nNaviWH2TFNp5Fu3cAE3redYstLYCAQXnYbfK1W7ABKwgWCWV3YE1P4joH6zW",
  "key22": "3gbAFXbcMoMh7YrLpU5SXioPG48vAFDN5q4Xx4WbesJjgvfU4buguVddJ6GN8arXbfjnzUyRFuE55F6Z9e5W8w8N",
  "key23": "2pSSwjnya5xVXtwmqw5y7jHsZWCgwd4vG22r8WVbNWQ6FNiAh5k6dpVLCJdDisRUDqmYWycu5gVBo23xuVtatePU",
  "key24": "2hxBvaamhF2dCoGMY5gepAucuYtgsyWTKSF8f4CLasdHNKdnZeDjKg74Wij4GCToKLzwgavehRLXyyVonPkX7Dtw",
  "key25": "45s6doBRDt9ydYs47JizzZkmnSUGLn72qbLWUuGAbbykzP7YEeVz62AS3NVJhq2zTo5kBFrTU81MxeD5bzguGqY6",
  "key26": "3oxr5G5aXPfiSMXQhe3jr4by61mEkEDPCu6dUX7ART5bFp5srdvL5XSGrmJvHj24AXeM86e3XxHPVbFxxDQsLCSD",
  "key27": "3HdQGWvhqJZkEjJUT3dmgk1GungkHRsq5fdsMbeH5q96QiiXTc73YN1qPYNETuFBYxUNDXgZePEf8wu5wYCvwbLP",
  "key28": "H1YnS6nUPS5obP4cJh2Tar122m8GDVKGx7ozHgHkx23WzbedVbjh1FC8mVPas14zDdmm3aMawzpamFZgv2n563F",
  "key29": "2RsNoftvMQvMp3k8Z5XC2T1ffc55zE57SDpAZm9SRVda57kMbiq2bymf8xoA2riFByB4UxiDDz1dygiFUXDZ7L7p",
  "key30": "3DYAAJhm2XwPA7WEp6E5m3GwkePGEtAxxuAgHM4tmgoMcDGzFxWAtRU4LWuU3SiTdtmMpvjLxC7je9qfWhhiErUW",
  "key31": "29vsA9yBrTRc9sSW1QEaVYRQL1CsELsmjPGVmAXUd3QkVme7qdd3PVUdVrJ1okiyYwF13UFzJFnMv7Rd4e1ZnCyS"
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
