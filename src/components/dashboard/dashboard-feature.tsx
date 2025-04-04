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
    "2pkKjwkqszavSJGYbiPaKtuvosBvgAhYACK6H5W1WXG7V6SZchZTuUNKASPDX5eQ1tC2VVC1zBBFc4fyMr5fJRDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwaKLqM5FvVyJijqgrcUGnxTiJy7VvJ12BjzJ3RuNYfb76jisW5omZXSzJj4zefEg6kN4qkcwZLsrFs1umkCzGe",
  "key1": "39rdykhP6yVuZNVFuVGQFXdEwKp6xYVqWAHB2oLMHiXZaHQzuEFgJwdPFL9oyiYh1ZtZFuU4too8K9ueKyAtxeVo",
  "key2": "23EDUBuqL12j7tz2u7NQ9J8uXBESXmdTvUXeV3GTn8mH8dprqhKbvMpCy6suxLbYNmTkH15GR6VhtxjQC9ew2AgW",
  "key3": "5Hnbz4D2G9hmtArKfdwLQtwghZc8FXpCYwfqkGEdmC3CA3kmjNtoTcGQ4YSLPsUS5vEcHskCU8S4ZPZSZqQKyvYf",
  "key4": "5kdWCLxdHxtD8kKG5Xpt4FPLC9dVcbvPuKhyrMqSRaeXfDMZYM8mWkcbN2jdpJfJxxGYfX5H8ZgPJdozJueYCVxY",
  "key5": "2BCNW1vquNfLb2WcqVN8KG8GKVQSFBcn62p3W5HE9sFsRxS9QvFPWLt1ZVtTb6J8BUyU3LWQ3cCq7dnRRNKr98AX",
  "key6": "3VtxVVFAi4Kyz5R1RiuDozfQQgeATeDPGYctCYkrJqywmLaquWWA5AAkGbCkfAjZ1AxXMN6kW1K1bfft1ncN9KT7",
  "key7": "4vYmatH79TZHT1XuZNqKSFucZG3pM7UoHKGYLNaPzx3qWQXXupRsWiY8PfAcfKZspDKgrgyVS1afL5QiDfAW6TkH",
  "key8": "ZfbPJx5HKo6XDJkuy1SNknQRsSR7y4tPtaA9UKJq4qL7jxY18ttYtczMwTxe28qGfb9kJ67SGsNqcfRJbkrUqxU",
  "key9": "82Uh6Ht5XD8VqWax83BADeWWsbvB26e71rRmc2bikNa6PyQaZo7zAHjNdxT5VCT86MWi7ufqa4duVPkJawv3hes",
  "key10": "5ZXrQ3QPq7ZRvqebgpijaYrb5vrMryPzo3uceswxMvG3jb67eEFgkVxgbZKFjtxdC1VDRs6XLJTsBASyQgXSxvpZ",
  "key11": "dJjrhvYmiYTjxGz5SaU5PhKDUHzetLNfjA4ko4uU4spzwVvDPzUg7yPgMDUCCKbWMZqToiD5ASJQZamQcjfQ4Mi",
  "key12": "sR9NziLcPDGW8EBKHosVoNGJ3v1xCUQSiBRWbNXfCyHkkRQBu74buHSJqfD8vEAx1NLrzB75DzYBaAPnvR5XxrZ",
  "key13": "2WMwZjXThcju6EUfVERBW6rCriVLVRPdekiPFB6ab2kiur7VgTZdp9irbVUNpLpzS6BShVLmREiXTvDuJveBxQQn",
  "key14": "4c89kPAw8qCbJD5guSsjwBAjBRhj5enEDHXcLzfWXrvheMFVT4SWFR6ZQJB7pp8ua5kXgxGJArNe4moUkbPL4AU7",
  "key15": "2kprwWc7V7jJYbzr9FjBJfAtiqJWHgyyfVhoVQZ23vgSMoAGnbzsKUYHgSFjLEJVCFUKzJuzx98aeNNjDxpESwqM",
  "key16": "5CJ8tCaghf7cCq81L9kyTVtKJREDpS5i6ELKSfrdrSF7npggkMKJRD87qz5iGnERybNg1cqyx2iR1xC8SpYsHBGn",
  "key17": "3tcLQu5WQ7MAXMqPbJouK3TkRrMAH2vVHq4oAEvTty4v9iWB6mWa6PdCjHF1KnUbv7ob6dvimKgkyNAcoARa43zq",
  "key18": "3uHD1ZkmAVNMEGL1SB1xTJe9ZgXjefPcpbfuvJ7RVjEFauHmAdBuQJ3foKNbu5YnXxk8zWycyMpZibFdBCFPxec4",
  "key19": "3WbtVynHM8t8EAHv6AZvwiQVPoJoTZpzEN3vHNUXuk7LGkRJbkPaG1UxtcSFXHHLAd4aVngPKDY9wWRiho4ovk44",
  "key20": "bCRayihe8FtAEAf8QHjmQ4HgoyzK2BrbaQ4kZcvNhBzBWyZrtcN7weF6pEuGeseZtM8XkuT64zDAobHU3vXfKMv",
  "key21": "31U7Zqnh1zAKESesT2roo6LFjF8JoJxu9h9QA5fkxcDTfAJr98r9BfMN1AjEhpvmhZnd4SiUTwh98r6knGnnHoeg",
  "key22": "e2WjAX4uyfVnyte3q2DF8CopQVsUUVXzYoRJReXgwJsgPgg7LuswPFUKGL6pMcBVg6HqtfnHhqKZEmSRwzRc1Ge",
  "key23": "52nyffQSKoyv2uzevMpWXeFp7zokWYFikLcBe83HHYGy8rHg97sBBc2Ep4tTPFCWNY8GrQkwdqcDZYdHsDtNShnC",
  "key24": "4QvGxi7GP1SbM85NX1eXNCpu2hrPhoT3osbgaLAWB5sTSx3T5eJbaz5SUdc1knkiT4CPdhJ1CfFsVrupuCPPmXxz",
  "key25": "2jLBaZcyW3gtoC6bgw81bgfiKBhjwFE3vbVWBggGn8RRecjDQ2jqqkJcx8oyC4oMNcudbFVwcXdoqDQnKCpBEbKJ",
  "key26": "2y1VyxeJWreaJekCAAtfjmsV9As1Z249QLEGWzYhiXhPW3Vm9f2cPovPzU8mzu7BHgqwv96sTmojX3t1CoLNxU5J",
  "key27": "4j5AazM9VseQgi9J1H1mKTcg9EuNZkTS8Rbzu3RpquerjmG5rBVYVES2Vgp7DDSVoK7kdG6JV7RpEPEJcLiJyYLE",
  "key28": "56z9FaRcHz7uJpkyDyHSeKEFKdq6sYUogGqwsa9RUo39BJ4gRoQaX9v9RwYwWouKDjHqYa9vpfPHjYV5TEYjQbwB",
  "key29": "453kCqeLUGwkZhz3W1tpP4UvwjD8Y72oW4yNarhqpGzD3bAfD8YVqEzjTBkHBbf6KY8D1CMXCv5md2LSu7nR4tA8",
  "key30": "2a8xc71mWUYfUoGZE3CWWbUJ8yAx4pZym4wDtP6hWfn4FRzoW44uWWDNkNzJc46BgXvpJJhqTKrnsafUbja4VpcM",
  "key31": "4iuDQxVBXq7VMqWB2XayaZYH4teEz1feMTELXRSBwpqvw8xzJ7o9une6vn6w8H2P6B7TDeps2Af3nHdt87CprtQ2",
  "key32": "3LRVfMNV39KafYxbvK6xPCokfrg8mVgynNSgYTpV6n4pMPcUNTU8mEQ38iAP4heY5npibcsKmWop6PbcuirkHXTC",
  "key33": "24zrq33iKKpCKTE8GF9Fgh1kgowvbEtEoqx5dqL4qrSLMBToWtN6b1VuKnLgrrxdH744Uwfq9k611TKU7ChSVTe9",
  "key34": "3948fxeDftrk73y4ZvbaQ7H2H7DYdgwP37GZuEDB95Dv1qTpwPDMCAkb7XcUSxqL4Z1aoGuLXa8TcxnS4ZPUmxKV",
  "key35": "SQQWXPgcSa5uX3GnsRpZ2GDc1ji1sdQgWQLD2ogReMs57AH8GTYASSkpCY9qs2dJ7wTumpspuskktuXbuAYB5Za"
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
