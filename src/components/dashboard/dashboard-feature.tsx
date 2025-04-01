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
    "5GmwhLrVb3Nd5jPRvNqaR1RJ9Y4QKUzpFfAsyxYzPMbAC3rEF5PYJ9BvomLG69ztFLMTMwtAuio2Sh2GsysmonbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zgHeDPG3LFjRmXGrfHhUADq1G4DwssY9da48yJXq3eZj1obejqZwsfQtmkYxxiX7QxXtoecY7Noyyjck97s9d8v",
  "key1": "4DQ95zxBXrxyg9wy544ccC9reuvEAJQM1JALJNUd1eh17up9jiq9TwR2mKXPrzctdGSSiYtBeNruLURwATJnDF9N",
  "key2": "25ZJPS7QF6qsVzoRtsPS8SfqW8ZDhYMjpKkAh6vvdo2fSYRToqCsRj2Jgy7GoWJZQgZCvVazpBwTcNWAMAdTsv9N",
  "key3": "4qHqj6QtjEG1Mz1oLemikv1L6HhwUXdFtnqx2mYTTR97ruqkACKwHvThS4UwcZBf2w8HA6aRVHaiMcoWJHct44wU",
  "key4": "22AVhqrdAJd9M4JCaKVZrGoQxjkqGjTx2njDQfXb49MTPvrkPVFqqyZvM7R1cJDsJ1CyTawNq2qN5JCsiZDcNNC7",
  "key5": "5x6izVum2XQmy9eAfxEUBWgbkixVHCkZH4RjXASuNX5aCjqEceiAtER2LQRMNdJSaRdwfBfNoZVtbs2qjnFSGhAJ",
  "key6": "mTJ7dP69q1XMGYzxhkaP6hci1VnmX6JJBX7nJetnCQ6PKsi68DoE6xWz3xjVLMBUH4J3JF2HH5NJ7ezmUxUherJ",
  "key7": "5K5kx1pHw8Km1GZidSxNdDaXwDWjpt51ZZi6stBg3Gvt51yF4z3Pz6qoQbc38QbybhxkATpBM4BvoKmyuLgD6uPz",
  "key8": "T5bUizW71JPFZLrhmbCafPiyrZPG3e3fpo3QtjCeKkoMqh1tPgQUbTAy9syZCfUXwPwWF3XRbBKGAyeCbNRijXV",
  "key9": "3jR12FyaKKzTqDaLy8aG5iTcFMWbJim7Bx1WRgPTuWMeGTBy7GAkqFZb9FWBAmHUwRw6JvNLvZdm2SbjUeexhJvV",
  "key10": "2r7QGVpivRNWyraAu1S57zFyQhWbcZd3G679XY3EbcRqYVX7M8oUDFCqgAcWmDtXBp2Bn1Je48s3Vaos9LvHgmjB",
  "key11": "56Dn394cxGy83QqfiL4xH2H4pWJCSfGJ53Yx675AaRXmJvHAAwZvp1K2ibaM9TjpFbhF7eAyzJcvTiv5Bh5StYD",
  "key12": "2jP4fEvba1FcxEzZRY7F2pZSxrw9JAtdMRwG2QixB1oSDoKnGZWe6bLhWL9UeoghUxddbHyKrwxyGyvoCUJXJ8Rr",
  "key13": "4kr7XTUPUiFKYWgmNNFLHgu4cr2j6NYf9UaY2f6aFGt79DidoH87DZReeDFMEYJ4y3u5vHGSby4VvrowShF1MBuy",
  "key14": "3WuKA4f1r7zKzqd2WLbBMigwbUWZ56mjQtkhgzJTZLHvvxPiPKqZxs5c5DzZM4vQ1y4cMRU4QEELJkeBjgqDg5m7",
  "key15": "65p5ixXEBXiqKsLLtbe6JZ7xC4rqauQVq4wQwwjKtiFknytVDXMSH6MB8EzZTTVXUepq3WT4LELFB1QggfohfwzC",
  "key16": "4myV3zTG9CSh7UBNGEwXPk3oykBxXa8AFXj6QKMZyztmuwHejMtBjUDgN6C96FkSLf6WtRn4jH4PhyiGXFogneNd",
  "key17": "S2eEE2Pa8KbzgRBdF4wQBBWuTUBZPAUJr9TpUb76BFaFM3DatS5mcTzQnpEDDgm4wp6ezjqvYNGwmWpC8zSQM9D",
  "key18": "4sXGL5wJe1dGuynwb2KnVQWmnVue1ey3ZSBWQSzDyVNJ7JMR4dBrr47yG7LrokEqw5h3dfqiK9GBw7M4mAFbvSAF",
  "key19": "4GbBxSr9GKdJcx48BT33SEJL1WHCmxU15vYa45mwUTCsTzb3GiKLUzEVyRg6b3FArzrdbj1irAFHkz2bEAyMnYTy",
  "key20": "XBj81QSXQ14DGSEfDSDU7kZfU6ggY2BpeijSGqQvYQsmhu9CSJVws45AXzMdnDftVu47oTYjXBF5dLw2mzUT8x3",
  "key21": "5rCGktdVY1P8hRA9iZBEkC8iWt8TCv5YECqbcCTi9Vg2wALYyFQNb9mqscbsc6GeEhFxTfzd2UYkVRBKy5VQF3kE",
  "key22": "3gtZBLCBNvVHhkHNYqFceBjvcqP4qDJJkvsHcv6bHhaTysy636RashbW7kW2M78tUzejkZVAacbCCYp3V1AWp6V7",
  "key23": "5trDm1Uhkqw9koEFbDQ8urANmUoLHYNDLzcb1sVQowYPuRYJHuaMKWA2tabfazBMhqPgnhbYpBXf34XX7bpft1yo",
  "key24": "DonwEgDNfVwpswts5HVZV62jCPTyFgqEU244N1tDz3GQMXE45iAvARr71D3rReU57riNHKc91WPFMdC2H8cG8ir",
  "key25": "5LvHq3wjvuenohfH1Lh8bFR53oVyLRdZNSYzVhEu39aDocMHz6wMSTR7LSjfGXYKTEH58psYxEBBntEC5KiCbWHX",
  "key26": "5T8YNQeMnXCrpVY6G8wudANFaEmFe4KaZmM9Sd8BuqkVVovJam7qkTDHLdGBMrn2X4MHCaMbH1G2qWUp5jdurWL",
  "key27": "UkM3KWLuZEnb2WbafrCjXZA96LC1NjQfXyJruXQZyr4sfuzv3XF2qmehTZLeUCP8iuL8QePgVBwn8TZL4GHeKYV",
  "key28": "4QePAwePuKP17NxqRS1SkknULEipru6H3N1cPRhrqc73UWZb3tNLmyajAPqAAb3vHRCxpEZhNDrCieEgFbEpYQrF",
  "key29": "5eT3ydtqD759bZJEfG1bSYue832RkjE9H6SNh9hE2VrVXsK8hBHqFM7aMCvkn2DQTA6GuTLCJb3z53bRWd82m6MF",
  "key30": "4yUCx38cshBSdnfpEoww7RYpAgsdFZVi8yJao5VUjx3S5Qff1dsSEhZBxg45iu95uoLQDDvAHqA7BcCejofjBLJY",
  "key31": "41bwZo4dNgXAPzG95SaQDLinvzSnxaXb4FXmXu5QAKVfiTimivTKXTqk3ge4tHCzxSujMwx5aQy6KARE1aAiyRYu"
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
