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
    "34K4CbCcpBoc1qEhoJVyEHqPZfnviwdvrFMeiD4VTwwHdkseU3xxKPhhyP42Lq2M7o7pEvdaijVx9FB8J1WnGkjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAUUeUsbqHtrSn45mbtp6SHSA8yKpiDCN5njnfi3M9o5yEqCBdfAsqjGvAZ6qWiNXqhhdPfFUpzwnuxhUoediWC",
  "key1": "2c6aeSzvAhqf9BXtjpUUQn7qMEP7s9z139KAnm8dV6t5gJvaAXrhKiJ8hQFJeow4PjGsnnqo63YEehxZZPECCZyf",
  "key2": "5yrYJQgYCLa9Q8cFUM7WpVtjmj2suS955isQNd5RQCjHVyBunJXswSAtKvEirFAhHPcKBMeENvuDHwkfp8Gdqz9a",
  "key3": "2KZaaMJMff6g7b2BRG5TE963vk2Wk4CQkneaanBFw2J18aYDhmjPs8oMDwNq2kYYtdbzRdx2YczXqHpV7kj6wwB3",
  "key4": "2pF6t1ne5g2o3jQgMzMrTuhZmAqVNs2sqv4o5BqW3YnTdeenW9SNPdnzGKZCfrE1a6bGLV9amNk9XCion7L178kP",
  "key5": "457trzgXivQXjBhcJvw2LHrFuHmJLoeq4ng832dVQMVWE1KYZdPV48DhUFSDGAJNTxTHgzaePjCnUkRJFq7tCmzR",
  "key6": "2kAvAupHyVwgDQogSSMRtKQ28UHFaYoC2dZH297hQ5jUodvNzyuHkvof3DrJajU5uJEevUwmE5pNBkniLTQe84k5",
  "key7": "PMkQjGQ4PMppx4Ahh5At5RFYLcbfVTGFVgQYNSSciAyrbF6nDehAYQXf9GLwYhddrJE1ewkdpuonNf8qLQrUfVK",
  "key8": "5oNSZ4rob2yBwWgQbTGfCyDvWd1YwcX1DsFhKkMyHezpnYU6CCZDDu9t9yymm6ssdgC7E1qoUZUB1NfDRjyX9hoA",
  "key9": "29Jkiv3TVtubSuZK7mt1wh2RnzSKToqTQ8zkUzYmfwhuQidjkFBWKKHcEHZaz4D4zqkPok64WxfcqJXcMriT5yAT",
  "key10": "2q8TyEryX6DxbBPDGpKXs6wyuW5BTCxsTFWag7x3DFeRQp2ZZD83Cm55YhASx38JGwE1SD37NyS5e5XfK85dryM7",
  "key11": "5C1cn3aaUKyKQ2aZN6N3u2UNurnewAU5QMA8hdKupWbvog8XAVk3F9BvmrsNN7n9vm9hZKdfqyMiYoD5uGZzzzhB",
  "key12": "2Nwi7EbwL2z1pMDozmQ3AxWj2jGTRnkc5c5kJxeKew78d6z6ojG1Kc1UpRUbdvsWL2xb8oJNF4sSWCsswE6BKm5F",
  "key13": "4yGxNPD3fkFWfkM2qFq9LK2SsegtyVHYVHteJJ4wytCYPNKEKKptNf6RzfqwUFw4n7DMZz2MKsapKvp6Svwtx5vc",
  "key14": "4ytVhrHHt42j44PGBeWuzQmo9ofMX89tN1bT8SSpX5NiopYEG88NaBf7sMu1EHyJkMUBKJ7cpmpnZy5BgrgFmQF5",
  "key15": "4J5y8NfxBopTZunJ5fvgNmBMsHHoHDjracqoMyS8pbcyYYhPkKmyJKJxCk5TN8f9srRe1BxMAaWKsMMZfeVEYNvS",
  "key16": "3XVrgYzRkbuFrBY6QqYDKVZ6CVwhyXYzuXcFMRUkRFKjkxntQuzsk9WmZYujKBqLcRTsUPep9gC9riYZgTnbPrgk",
  "key17": "3fsBBgqDwg2Ncpn75uDZPmWBEZi92GfQwHSuym5PsXMsrs6xdHa4brpAyAuDKnxeNbPfUvNiAVEaRmXZjChUX7zu",
  "key18": "3GM69ZSqwvxyDArhyJLNwKVByEydSzxQT8hdvTNo2R2F5PBYZg94tieTTNECqcLN1PmjhYqn6MxwbiGC8SHQUdYz",
  "key19": "GiXd35jfiRiHqVcWtD5Mi9Zy2FoiVWet3jr3DrxSxVjWCqpqiE1WqnVH6srXBCeEfWj9jG5fPhk2doT2Qw1HS8y",
  "key20": "6dX8FjAZciCXKQFAiUBEfn1nNsJPg6qgrGoiVe86fDTQ4fVRAjKL9PoQVfkBShqsG9JC5ax5FBX3pDNqtk58DaS",
  "key21": "UcpMNTQtubjCjGy5Pom7UU4qjfY2W12Rx5Xf757vYyBuytUdpRE3jRicLPc5tHjVFQag99jf2Hhaq3sbXHBA97P",
  "key22": "5v8m43gKpPWmriB5GZqZWWC1UUQFh7GEudHuifLsCPPGq8i1F27dLPZgPArMKXNHpjXXg5g1RaMxsT1RUate7uAN",
  "key23": "5FcYDBudTsfyvYuGDeBeoSytSiXicYXDeEoJjTFYyMpGV4hE2Hm4GvTcuUzWMouv9yAikGna4d5h6phv9GbrkxYo",
  "key24": "3U1Cjwk3iQR8C4dQHxWwooQjSGxTwtHt2sKtYJQwg6GBJ48Eworj18cdCUneZdEnRao65oZD2bmyWzLFYzYKnahY",
  "key25": "BSe7UcPitJsFxQQfkFyvbLd6UK3itJo45HrqsGg2WD6U2sftWc2kuieU2odRMUuKJGj1VjbMTmgugMLAMEyKyPJ",
  "key26": "3MFQAZqQyWqy7RCZKA4fXtHCGKP1oxTS9MaDZsNRqcex51dAn4Wpa22ZY9YkoW12ewzyW36QLoCUPzep3Qgi1QHZ",
  "key27": "3s3At7BatDCutBNpajXD9PWPEsndA21fXrtuiXfXaycpKJLrQDcrc6z6gF4jVPQbVjHTo3vk8YqDPE47xF3trsJh",
  "key28": "5FJPTCCsPm65oqEgfskoZ7HX7N2CEfBcDqHZAvthWQ2Bqdy66sHRFFnMAa5wWA64v2rhGpzbBsYtC6tvJUJsYQkz",
  "key29": "22nRbyaLKdHY5pwR8wRXEGzjCyTmxjpb6mG59xCw87nEddnQNsg4tdix6ZY2kHjySWgCQ1KGFP6eLA6hXz9yk5hn",
  "key30": "62yb9YNuWmAQdev58NgMkXvCKnDmJ9DitLZKNe43PuQF3pZomNG9LDVLSNXscGnSQ9r9Q39cZ5jwJP3BDEKcKm2V",
  "key31": "3w3iP9AfKKEzmisGbKDB6UmdMLbQoakwtTUP3DpLVxnRr86sZHDCqX8CqoVVWmEzRtgeYhY7cLdhZopbEStKh32V",
  "key32": "47DxATaLPyz7saoKdEuL3zhXKXXxXt857wNP33eJmDk1RAo4YfMm2pQAHorS3kjixs4zSSPsU1gwchBAX4qxHdGE"
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
