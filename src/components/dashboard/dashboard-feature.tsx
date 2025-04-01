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
    "3zX3e5xPAt3NdokSn67Tx4B5aVKrQy9XqBtMKBQvYX7B9zyVsvXHMLSN6h2hEPCZTR2MnwZqdyofm2Pxz1uFuzEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7QwdifczKa44Ky4cv4j5MMghFi5zjLEtrdZ9WbWp7T1jhL4gfHGcrS4pNWaAVnD2H3QoFuA8QFP88o7wTgZq3C",
  "key1": "2xpqyJJ1u2pKPQp5m2Lj4M4sqZFAuSToMKYtD1CeuQG8Ae3q69AMUd74rh2GPfZJPiUhJnseDAPi6GnKZSipH7SD",
  "key2": "2QMeNbyZmLzfboPcoUXBP9Z6AA24ryEu6eHhkzt5q5Gzjj8LtZqsVemqXwTD1mV4HoKfMs89dVcEQ9SsP5Ts2u46",
  "key3": "35ZygSdXxg4X43BMBKgnLtWrsTuPy27HH9w2uXy8eZeJ6qqn7En9E57Hpjh8AJZmgNuAjPBGKDnSGGcL6YCQc4vW",
  "key4": "2xaaAWWPFrbby6Fun38xDJXDXL9z1qHba8bkY27g4H4jENfHukDGL7Bch96nEMvhpVitrcbSFoBpi8bftKaqVdKw",
  "key5": "4GHn64zEMDyBXuxkBBvScm47o7uetxS9tQb8wN5t66gbXpMjXMC6RJLqUc9LSuqaUy9NsZqfYoM7XHA1jgLygf9J",
  "key6": "2bP1uKZaxJAjmVADqbkvrkkhyTk65sYk9y6LZCvegGnY6NpAUA1NFKewJv8v8xQ8avdefUvPmcua4BMsYbLHG35a",
  "key7": "4HQYndUhV2j1vGC2cLNATLjg9DhenmvH9eDMnwaA26uAvwF5yPsfb6XtsYUdA9reGhLtNRdw5upgXpj8wGz2GnBK",
  "key8": "5QL8hEJfiQV13gHNmAuD4zZXYJaxxtCAq9Q39768Ey8KZJaewdQFjD3N414yxTDY8ah43sbRtJNWCGGLJyJG1WPp",
  "key9": "4ZxLEfmnsimngzWCqJR2L4KLkRWFAW7K5mnD4UXJBesb8wwYmETt9KALUjyZhBNwXwUEAwkYo7XsUYFz2ZyxcVog",
  "key10": "3qfVdW2phHN6z8wscWtRzzBKNzQswxdavhVSAXrXMHH6zyQRkAWgVJhoUwzBzfyfRcrE7RU9Qw9n2JBvzsABjQd3",
  "key11": "3t6B267VUd3PhTuuPwtWwq4rqRuMNq384TxhBZuixSmZdhqthfEfX5KCCq4WUY8YpxUmPgBakMad6Q1tpegS3gbo",
  "key12": "anQXyRdcLXc1ZFYnzkzfCTp69ECgg4qgoy1m59w6GuTCSkmLh4YCmku8xq1P3GaKPXBbnXkuuupSkxA85UQLpaf",
  "key13": "3DLjg2Mc7j2S1acMWw7gUDd4whRe1W2PSYWk2uTH919DQVXzBcVow4NQ2jYqZd6XhaF9bdiAMWTnpF9gbMx6WVqj",
  "key14": "4eNwProW7QPEFzKG8dVSX71j36VuzdSR2ZbigiZ5fCY78C9ACJnkJ1HKunP9mZa7S3HBbKbbgNdoa5XrjCFtFdZh",
  "key15": "5afU5gPk6a1BjaffMnWPNorbUEEvBKk8YKS5Qzt4q7gUk4yRGeGG8kaN3LEBm2HdX6FDs7mkNXcCYabPSunR7U4P",
  "key16": "3oXbFgEqPhcNEggWz1nQWkGQp4LLP9rbDBVWDyVymQ14JTQxeHJmgroHHPk3QrP2n3XXNZKTB8bXcAjS1iqV7Dyy",
  "key17": "4mS7Y4y1XvewCfD5qvLeyUfKYjQjZDsZayZ4yEgo89fbeTU4UijhVF5zjt5xrKNBV5koqQPGwUB1HR1YsAiuQEey",
  "key18": "3cMdFDxo6b5PSrncQU7x96CytRzRW6dPUgCqbtPNHhxm6rMX7ahtzTKi1yg6615xukSnCbdAsNJes1fwEvEspHXj",
  "key19": "2XPydiEbrpLYcyB7oZwLQUtHotp83kmQBSrccxd8nt6kmNkjv9stM41PfDkZKqN6yw4MxKQQBBTTYL9ouBkrQc3C",
  "key20": "3prcLgURs9U6CmnVyzUy6yhqfgSdmiUq5nGNbiZzMhPL7MzawXCDMkcDqSTPBXm1paf8SxPNy9mWGQB6NgNRiwyf",
  "key21": "EbZa59HKnmmQjsAPw8JheqHsE7ibAgfkSonmwRGhQQQtzBtWYcuHvUZd19ryK1BqQyJcxL7eiub5KEKpz8EJ3st",
  "key22": "4xPRjMFXkSvox5whRARMRWWmPj9pjWP6wMvZW9yLgXaQz2VMCPAJaZuEkqhGzMVi4wVaNTxmtwXD1DgkRt8mdnPV",
  "key23": "5rtoBhUnyhwW8xBbU8UCmNv2vM8ZqkfEtugCGM7urSi8PkvSNMQaEaM4DJjADmamU6TxcJPyhDjVxke1jN62Qq6C",
  "key24": "5UBWMMiEwJ9zzwSeFpjyS2g4UDKyLcFMMubaBf2MiwNfXVQmJwiFpu5FDqdsK3ZrxM77kHR5rJp5VHt4ygkchvNe",
  "key25": "2LKQ6NTEELk9qJigBgv45R91CwWLCJ7XVjzmKGicZYeLZipbD9LozUdA2ESwqHme8HKxQHf8DD944JrD6cEdHjxH",
  "key26": "4HyMEs7w9tGFsk6sTe5fJuBzU5BprSGnVSBvSBdrZRtz16g267R57hTpxzt4MRyU6CJWjihKVJZnzNWhPPgvMsoe",
  "key27": "2kbrjZLmSswv4HTY3hwCm5NhEFSzuNU9xnHftAuaV5eMUhKrkQnQaHkBawdk2nnQ7txv8VJDEoyYhBKxCX34oK4C",
  "key28": "5R9iLboGRfcF4PkqUQHuGNRe1BL99L1qL8ajPLgpu5tneynwvoBxUpxhZ4bmFjPJ2zNxecYkjf4rSegGGdSvkQ6z",
  "key29": "3EhmLt9oNiJ6Xr8B1uDDEUA3NVbhLbKogHPLfN71sBiGLZFstg2mQTkwh7zJuYVNaRknsvkCska5vtzvHpWWE5wi",
  "key30": "RmU8GH7iXaP8Krs93Ms1BDAnahQK1ipL9RnVPQdBqJofNbHHARu41ihz9ngwDVdsAWAEYjPhnQ1XEw2ixdF9Yyb",
  "key31": "49qWcKViasHbaYzGVjswtLyPvLeeNSacPFQG4itKQbbPzXTNXPsCKDfNXNgz19E9Pq3j3g8ewR3sMTg5SpKsbdAg",
  "key32": "3DHmSmsE7TXmyzPrhDf9WuJM9XaFqzMkLZE3cJZMDxbzzbP3CrGtaCo4yM4qFHigSz3YcpzVtUHQ7F2ubfRtbGsk",
  "key33": "2fGkekkAVASTqcpH29uWFr8n2NisxJANdCk6iXTAn7ixn8LrEc45oncP4qXDcYpd7o2iCBqBNbCYF7UiZdNxdNwF",
  "key34": "56QTgWtnf755KQgU7MXrqCwN8C6MDDk2kBDxb4qUuk3YEY7P78VKjCsEDX8x9PGWCtsYGxLVhQ6ofybzv727drm6",
  "key35": "3PVZ4iZ6PM9BuiQnaonrxnR5NUi1SsEEwczxckknQtZo69MKN5nJM65TVUShLTV6zsWzg2GrnQRoFdgUXrwEaJBG",
  "key36": "5GJLgA6Ch9vVjuFwm3pSZvF5fX8wqe8HazjtMHu425mahJnnqFsET99Xakz9ktYDFR5fzq42LX9QhRvwRpT4ECHq",
  "key37": "2RUDjEpRuGdLakbxhiH8Wg2rYKPYk4kx8dJkft2Q3bCSqqmPg5mPr6UY1DhbZ7PKN7gq2Ly49ixy7pEErtyMGnzp",
  "key38": "4VqUUH5g64zNZsQeAQWkHTYD6Cg9uM6zcFoXSk2Zmx4uhw6NpY2ZFDsDqgjPVYA1caDqERCCjo3eFfWcuScvNtgY",
  "key39": "4TCZQ9XGapPzwaqKic9AMUM6rTxbEnyKwFhVbF1sEo2v1Ly7hBQDqpTQEZXew5S4HJAFmCG55fQfk2jTMd1Qzdca",
  "key40": "4m7F3rdFcHUAwoppUE3GoCPfoPN4xfE8pHD5eVST98whaYfWqVMR5gagXsSTD1xiCMrRxnpt13FqaBvv33m6HAGp",
  "key41": "2K855mnbtzK5vupDqKTAptJVu279qZXsuPqCZ7XGAFMHLSdzXQpST4YUHWmmyygMfVaMmX242VTXVy1u85zwqZDr",
  "key42": "3qkcscGMrrLSSwquFqHCg5GKviJHbNyhAQcF2vUckmx7bUscMpkwkidDNLzDYkpxNhofzVVfZgmq7P9JusdbmgFu",
  "key43": "3qcpEArivXZDUweUJrZixXUpnRCmBGJVaKtiMMVvcW1Rd7h8poETxGQn2LEHY9L8DsGxu3jkM1yDujNCPozz55Pc",
  "key44": "38euDe1BwUgSZbNWMXzLiax6iiDAZkDr33yXJvJ74UmeRTYmxQf3u9ikRuz3fd716PuwzejK8i7mf6RFKmywFTMA"
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
