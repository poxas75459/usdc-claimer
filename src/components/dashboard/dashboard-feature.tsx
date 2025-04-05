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
    "3eTnEPsM3nqDaKshCLwGSkVSkJFvJ5ZjCKFuLeTw6WvDfjCxmmqeY353tpKnX2JFMWRjfs8pxLonq1QwCwceaGPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfy1YvVRZyaovnAzuMuS6wgh9nEHscaWSrQitNLJUEc5TGJqSSLfyCvbsTLi1gFrsnGbSQDvWCjrcKUySVNMtRd",
  "key1": "4RsMt4eYmUTYuW8jrms1ge5YcjnroEms95rarktRtbKhrXUenjnYxWbnCukYdE2TSCob5ijoTFSrie6R4uhrA7Th",
  "key2": "xQj7jiGvoupz8bQDNPC3oZTF8f5aYRRxpwvvjoS9H721rrNWcLtQEdtAkSZUChihDftVTitVMossufodeox4dPc",
  "key3": "5Ub8AgLbEWM7ZopeCB3vLVVGKHoRUCWfpeq9KNcrxVZPXmfmJCNjh4SNGvHpBpo2YkMgLRnXrZwid2VEszCdae23",
  "key4": "58n8jrgfJqSzcExwa6ptdZNd3SgihdnRS3oX92xYALQHyDvg5uacehieNL3x8h3RRgk18FrxufcM3n38sjfT579w",
  "key5": "2RiKx9ymcoRQBZZhu2fA2smhinMKPwewDZwwuSTChjKxLPCAFy4fCz7sPZohhDx5fpfK143KNQB8twyruQqPJHgz",
  "key6": "4gknYyFhMxcytqPwhQoffgz98heiJUgbb3dArsbgrjA9WAjJNYb28UR5RQNgoDhybS8eEbnUtKNYjWCmXPFjJqBZ",
  "key7": "5b9X9BzUHSE1BwDTY5L2MFSJyEgFHq5TqAyybQ6JPmzniMagEkZ7UjZJB5DpZf9ZSxpwqUuM7YyvMNcArZbzeL8Z",
  "key8": "2NTFpzgg3AkUfTe3jwpp2xKMVURt1QHNsB1vtjiM8wwGcVejdskPq7ihgRSbRuVFBFF9EQMSRLbYSfoCK4dAzZAo",
  "key9": "2aSdcxwSWHSnNfRUBFfc7Vz1VqZAE4ZnsfccfLrJRUqknBae6oLXLiarW7YnzMU6xj211zaezBZwQmiFu18xaPqX",
  "key10": "2KyVmhsZwGtFwZ5nCpfVh9eWKCASnXx98WA9YpkwmzYdvH7KosaDX7xozj5N7GY9bq8GCqC9KRVAPwWS24ZUyGzF",
  "key11": "54qpvxZAWNZr3hQdoE7wt3jt5UVktXRKkkgJ2qVUotCXV1jVaPv6qY8dDmBAxjGX3viehmp8PFYFt8YiT4Vj1TSZ",
  "key12": "1Jrrho42kZ36RCJz4y7fJfgT6oHVX3NJo6qM7mV2TnF5JB8hPqxmeQmnfydV4EMzatVpo23EyMyuQN9kSP4qhNX",
  "key13": "2b4nTf7eHGTv26gVRoLrj4qkCvJWo2kDBqGkd7m4VUQqhUfRP1x4msuBfgjAir23ZeFFBxrX39G7Q3cTj5BrnVw9",
  "key14": "3XnZZSELdPR7CgK8PvXbwVzipQFwiee7W6sNvHxZE1EjUSX3iaRDHhay8ktUhQ32EBKZtYeL2jRceC9Yu2NCKdLw",
  "key15": "2D4yLRQcwvWtZ21Uyz6vPEcXEz6DuztySbg9Yz2xGT92PHxfvpr779rciv7K6HzyC4NysuMvCGs58vCcxTnB1ghf",
  "key16": "26Ka2sq53NDP6iiyZ9UPiYgNhFcARbx8HGMoFbEaAcVcggAcMoxADpa3bpXDdRTM9HHBcRJq3A3X5i5mameyu1ZR",
  "key17": "4QDe4b6muTbKhtyhHFYQH95figadAz5uKyeVBtj6uPqC4RxHtELkRakK4i1MGzUPnrZhZUNW1TSdRAjTo7m2Ku1w",
  "key18": "5zaZQgG5BwQkjE51H2bS5rGS9nBZKyzN5RgxavUi91vZC8q5nceroA3QFfVt345icYBpwjoeoBfJgBFJuCqvQYxJ",
  "key19": "2onv2cHiSsYDmrmdnGPGhe8Fw6WGWURnt5UUAuv8n9bQzRqYdaoLRNf9wAw4U5LBDFmjwznxLtW9ypa63r39tmCk",
  "key20": "64qmJm4Jt2fsJkvQjMJVtpfsdcyRiXbiAiK5eq7J2LMQjk6zxLphtSpVfLgcQJ8dvenwqbji6hDsXzqqXFXxZZvy",
  "key21": "z3PfNrKhYi7zF71YizjVohHDGatVrAJfWJ6NrCtQUr45xVDczdqN7fzfzcTziaQFELncoUDgPg6ZwimHTVTvcRa",
  "key22": "uNHaQty7KA4w3qtErt3QB8G81wuB1PGW3GnYpt5nGY3kBhuXp3XhvUtfbMyJ51vuc6Ezqz27RZ6iX2d4tgwpeaf",
  "key23": "4upA2zH1bYUho5rSXiMBe8x9pR1Pm8gupXSRDxL8sXrHBUZdcderKTVbbe9cDyWdkRnz2bb6UJmAeZcsiaC4nWsn",
  "key24": "5UAQsuWNY1eghF59vg9agToqeCvcHprYczMowkuAEbmRHV8rfYpdic5DhzzKxaH14dGxEjBDHsZRNagejHQDcpX",
  "key25": "4FVnPbCUbzNpNT4JFcsgcQzLo9MMCPahD9x1QhtfM9gC4zfXhEFp94WDjaMFu6a7gs1E5AsgJv57dPHgmM1noVJj",
  "key26": "B1sEtS2bzZZzUy5kbnwmkGQt8ScVQgXrUtUxvVu9cRSjepj4f521F5f2pdBSmaPmQSxfJtJ7ioVBFXkWtnjD79z",
  "key27": "2ttKUivzCmhkmDb7Q4yN7CjUTYjkpmuDQ2JSeSE7tJt7qkSr1Tfnh72SZHLcnxd63W8cuMH8tAK7aXpEfBuZsHB6",
  "key28": "Fn7iiJ9aCb5CoRdjHUfwvufcJ54uShgzdYrtQdtLF51toVsCc65TiAYdNKm6qQGfBwwujxHohG6d3etQ4qTroBR",
  "key29": "4TKtZixi8jSP9HC4fjUKnPJTEWP5wkbTVmNMtimoc4DM9XTwz4BcUmxgjfgKKDj1Kp7GK4YrAKp8x75mnEMSGk7E",
  "key30": "3pA1Lg2GjxCxDnwbKnhj3cRZixYyrPgYAxG8jJ5YWehfj9nKRRsQktsMNMuskikjbfhnnj5GNcRqPzVSSUsNZSwj"
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
