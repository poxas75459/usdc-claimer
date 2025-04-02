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
    "5YjtVQoMWd7bMLGVhx7W5LsHAhTC5Fwczunett8PdmiUeJVw253NZ6rVGF3VnL9eBwYgVfjxvkgDD5rEkxKnzVVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BAAKY7py9DRa1yXLAYcr24TDPuFKMf8WGRNKkxJpZkfizAp7cGHN9CXWN1f3k1MmaWUnmvuiqUuc7bTa2bLrv22",
  "key1": "2zyoUi5LBJj8KTroJuzUQrar2d1bRycvN3iN9mN7naqf7M9YZHaneyFJG2jx2oxVFCxpcxd7wfUwEUMxjuBxZB6d",
  "key2": "2c8gxWagn9QMRNcpULaMkZu7T2ZaPjXUyr3At3rvXf8dWg43wAB8xChXi57i7kdjeAbrZ2srSv1xnhRnkR8izRrH",
  "key3": "3N7DFEtP3MnRQDe1xsyxThsUvyMKvQYmQdwNg6k3A7rSB9P7CdoP5MW9oY7iAApW3ycxQnN9PHZ6k1dcdmf4PZTJ",
  "key4": "5ghbwciB3Chb73vsrpiKM2qKv7vCb9FHvEUGy4MoHRaMZiW2EKKE9qLEhbGxW7k8X76s5oaRJmFUSx62Wy64kLCk",
  "key5": "3hJkZJFdWMvcEKaMVMhM8y31RzVcqvpdTyKRTcxjAbqAf776Eujj1tP245MvqoVRKXqNbxgj3rbMuZToMPyFLspP",
  "key6": "62yJHY237mrzYTuZPQ4iq6yy5aZaT9UNu2Q4sohd9LKbsSYyPkT433Kov7df7jwodvcu7kVib4aA3M71f2wZeiur",
  "key7": "3QhMAU8WRbxj8oMBTRL4dmG8jUxqHwD3hvikkT9npQ2Pn6oE5nwxtvgioGJtQtcLUbXPey7MKEN8jEdksh9vh5vD",
  "key8": "24QNoTVHw6dYzonr24EGbS4nwt4Dw9Cag7yYjdD8iYVQ7Hku3bvaMZRGcCKkypw7pKiDEyPTNVgFcJiQx7Wg7u6J",
  "key9": "MYr5dkLEGgcgkQE3NFjYF5jy64sVMdeNZNxc8vVF9Fkbqh8bNaTnARPzbERWM69XYPwrP8FAiM4wMeik8DTifvU",
  "key10": "kf3gCvfHZnjVzpR63yrMdBPFFQVBz8uuST4oxKrz4aB1bNsJZdHf7E9y1RX1rkvGjXB5t8qMhPH8FepPLYcGjMR",
  "key11": "3SjsQWNkthKiQCMdPtn7ufUhbhgxKFeytPFTxn8LTbNQbCs38DPWTVdj6hBBTrJFRqA34kq3Rntu6qxeN8cea4nz",
  "key12": "5HFRkxipB6xCoYo1ByTARuHgKDJi8gXff3qbZP7Rg2ua8d4cw5w4cR15ru1KgbU8T62YtbKfTCT74Rcw9ZNnk5pH",
  "key13": "26HFZ8BsePM8ZXgHRPwWvQpN5sG5UasJiiiXgJ5hLEqScnELNcarXVevpxM3o7VGQ3scw5qFeADwtJ1siD46dK2z",
  "key14": "2QtSgptq83C6tFifmB2fTbynhxFbfqHqSMfqPsRE75cuw6V1j6FVJYofk8z3kPJLZKKT7AS3aY2RSN6ad22iwQtW",
  "key15": "2PVFMQeWyzoWuefgZoZvqxQKP5dcFDvdF3jVKpvTU7E8HRqQKMvBWPwYcC1GdVk1rKHv3AUTzBVdEyUs6i2cwYAi",
  "key16": "5xAs7hoMRQHtGuZn81Jo19fwGhfff3563xSbk5NUNRsZdMxwUmdN14sUkXmw9dBzPar7pe4EWvJiKhVAuHLXguQb",
  "key17": "5hPLzdNciwNTRxLJp8DyrU4Bam3AEWBX8Hd42jdA2t9KsTXWq7GLAKteiDSNpieF2nwWnQdwjNUd3jmSCHNcEkJH",
  "key18": "5K9z1xTRfg1t9x6Ed7nRrH6q9qQJ2RifqCcK7Fwr4k6xLLmz9GXqsM9sanWKhDxaCFvZwXbSsMjJUMUAu8S26N5U",
  "key19": "21wUpP8ZW7kUYzC6Snv3eQS25wkL3qa94cd8HtnJvzzm58qkBKffoqKuC3GNg6qXyyQkUNUyPEhKn455mKJx2fxu",
  "key20": "4kyNeZwNQs1toJNWupQTDPPcfJeieqDQBuGVXEAkPYcNoH2tMxsaHbkgpYirp2EV1LSQke3BGhWGxVMi1ve2GVWy",
  "key21": "59k5HdRzxwCnR9TsmvXPrPVcD4db6RyoKwsAu5TEWHdAMntvoWW9wkw9UEyaHkSYV2fjyGWMpaJe9WSZYUf6JAGM",
  "key22": "4itSwzVQH4JhUQfZxq7E4dKBs9CCq7Pcr2BMvARS3imm8qzHRsqc5Go9tVvdDwDNTCCMucRpYGhcJwakgKnSRHGH",
  "key23": "4xLjkPSo6aX4WxRjoi9WMsvz8B3td2PkiSxFFkghFBkXFajndDtuiHaUidMgm5oYnH1nAintpFMbaAdgiVJ8ShYk",
  "key24": "nGBWfGrntVPqFxgD4Dw53NNcJjS4U2VvHA7Czc946UTdsKokJ9zccD4JfC79gEudD93VqAM4PPvmNrMGZyebvoo",
  "key25": "2LXMeiYpQE4wZnp7tVK4DyEcT9RNCE9eWydbPQD1xVbbt7xXXKMk4kNdDG9FCi9RnuVqUVR9bDeoXtweZq7LEdc8",
  "key26": "5rwKYC5W9Q6MstSh59kYvu67h8crCbiDhXBZNbSvgD6MkzVZrm9dLY3pioepceAutKQNwJWPCMiJwfXfo7oPxgNe",
  "key27": "2FvoXAXziGhf1gza35E3itrBYvescG8FduzYvTwTccCJRaMbozq1Zdqwdk94meztYRrE4WAXDffQ1sHg6sJw5RUK",
  "key28": "uLNAqPLkDGJyURZUMzkcRBzeLRz848FCF1z1pF4ksbnAFg5mJkjxWTTQvhEf6QzJXyEkydTZuAfEtHp4MzaUav1",
  "key29": "3MTMULydQ4WMUJg1XVgcvMCeeNyu7hc5RabL5REB3xew6PQznboDUbkXAmVpnVegPC4rHKhGtiT9gwCABJEdqJH",
  "key30": "J5BjAMLo1XNTKPxh3ziz1ic3VabtTsXaJriKLvGnAoL7EEy4QDwAxT3WntkKQ8Rxst4KTBBbEmLu9mHa6b9sbnQ",
  "key31": "36s6UhATkZjXMFvjczxT79b5on5CPnWc3Vc3FiLxYqxxbWFeqm3pF3WfyAyJQcK9K4JZuJMCe33gG8iix4iShcd1",
  "key32": "2zUSYDBBd8CvvECEB8SU271ERadY1M2ggYwUyUobf3nBiDpxjZcvTVL1r8pBuGZ7gZW68vVJeysLZJhoWaHGu4JH",
  "key33": "56BEfS569FHU6BrmYBoMSg5Ruf8DHuGcELZSZVFDuyqA2DouX7Rvqo9DkAmaWHabZgedq2PUfSvrsU8qpsTqxYrR",
  "key34": "2ifbLZ5NHXGjoi3izQf64GUkGXtGRTJc9KqbduRPwE5YTX77fNcxmezNEmCnWcVVTMPpeeHVEM9QPuW4tvtRmQXP",
  "key35": "zMwUwwmJAuWBhF3cFVFZtKwJSAjnuvxEXkU3bvK9xJMYremA55mv1v1LJyt9vW5xHpMxBEib9K2nTcnr5akcBmo"
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
