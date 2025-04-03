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
    "51PgNS2kSgEi4p4pq7AwWvWGXkvJCFZo6M48ShhWMzH6ZkrTENpNJf3uaiHGmjmVdVGctD8X2g7HWGVMs7zH4qbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61RCrwoETMf8XqDHPN8ZCpvUzmDkBzqUWfh5CgCZDRtWo48bNVF8wBQbkry6ynRggiyyDexa8SGgc4iQiH4kBDxG",
  "key1": "5164dAwL5YVX2CgR6hRGBhAsTEhTEVzxo5RcT9k7v8rdRCzQeeeQcBf96YRJ2GTkA1vUJs45VvqhxMngshSt7XPS",
  "key2": "5J2fJyCBcRDjwjAWe9thEk2PbT1o4YX64uLKQMNUNoZxAUmk9N19GcR9tJoVtd8Ar7FHgJwU6qfKtNwY4xmZAsjL",
  "key3": "3WnhKggumPUSaZQv1qZ7c72aT5TrbtrRLi7KgHfVKo2zkutPLm9pXhuotLbLa2XHg2Q1se2FGUjESBr84LR8PtwM",
  "key4": "4g6eCitmAdutmmNsSAhgLJtbe2E7fdaW7bYLNcYdnidFgWG19nxDoqdJTnDdDcoyN4UexVGYjNVWreNNf1sQqdDz",
  "key5": "Vs8kxZefA42KPPBbiWrDpCDZbSGfTrqpYQftHrTDzDKbtBZCrhDAx4WBouo6C6rgra7XEYoSqf6y227VTEqLRfS",
  "key6": "2vHiYWTeewicS7tfYLzLPZfvDrgEXsmSmWtvMuuSNSD5jTWt6xcjxonmJaY17wyzQKHKTy5LfBAVKGVPUEbLnonL",
  "key7": "5mMTEVXhJmpzSFnSBeejJPVQyLUyBKL3s2ojqSR7HW7kezDB1qPtj4qfh7AJYEgqrQviDNjkqf82uKGM6LUAwRFR",
  "key8": "48P3SidHX4WoVSaAhyULeuN1af3d9FHDQB6p6wBWW8hhntFDqxEBcAV1G1wdJtQiQFKW7DqNwqYVvcQ5QhRQHEkf",
  "key9": "5C2R6i2kAso6h3c8o6J18FKsvh5Q95dLwj2NB2KpWSt1QmaY1UWW7bGNydNXn8o2EpShuGi4b5G1aWogmduBZzox",
  "key10": "4Gh6jQBUpX66WkCYpnwwQ13yvwSfphVyVgcUhJq4dhN7eXMjr9r1BCFM33yTiZ8AwWJkFfydWT2p9PZPwkCyzJnF",
  "key11": "4USTfzN9aDyGVBXu7uR7AD4PBPKdqzBa5DYCeZmE96tFNt7PSJKoM9F3ZRYBDGyiwBzEGV6T73NFXmKfLMaSwu51",
  "key12": "58CskdsRhLNvbTnTfeXnGeT8eQMHxjHktXNQTZ18WXF3asrEsQxup7jVsPMqtPgxi41MCc8TjnCyA2zjok5tkZRF",
  "key13": "5yRb2x8WUWnGgoxSdpeXAWXyj2E9fTHFi2R1v1b7NgGUKF7R8rK6Gub63t5yAHRPe94J8J9Ky7zy9GUXjhVtuXeb",
  "key14": "5nYCGpy81g43a2aYBTyYJ271JJAacYinksLTY4VU3YUUifQFas35xQ4fEH38Mjh43W75wFFQH5eiKpZjJULJV47e",
  "key15": "3CK35Dn6Y18bEuc7g5xCw6jNeQGMGSGBzswioC1Vgo9WidEsQxsnGiJuUayvpWUvtHt2J2BRFuZ37eQFVT8vPT61",
  "key16": "4UKdeYBfXRa9sK7kH8ZE5upmxvRg7X8ZHy6n2YeukAGsnvBZNboZtumLL2TDDduCwLXyWuR7o4VvECDY9bazDTcB",
  "key17": "1bCoVzJ5kGXrWoNSDadb3hYdS9q6f9wkQjPo8ARMZ2xVzBd3xnJb6PaTp6SJhNNbAHPNKXELPsea7Ju4Wib5PJf",
  "key18": "MbzRXTXGsryxX6pHKhHbgSY7C17iZF2RPxNpU18UmdDMudohUqGzJ95yzGExeHmk75rMXXDWMDgm14YXv6vukBt",
  "key19": "2spbf5wHyt3CuPneiBCtCqKyFtUWApi3fmDQn8UPS1wwdc3JZ1kf5nSNqoV7DAJ7kY4KCwmaQAczPbd6f7v9XF9X",
  "key20": "3Tr11SW4wqzdERSrbkJbxxe6QLCHKzKfNGmSxUKvQ9NE4LqvT4jKoTgixtNjmMmhHirKDaht9N2ekPiLTMzDCs42",
  "key21": "4KqKQDH88H38QAEH3TFJh1gocpdGqaqx9VKpTvscJLjAajdW2GJ8rBUCi3yX7nbC12UKShVT9aZKFtw6xRorLLun",
  "key22": "2WyQPxtkmDGoUTVuQPca7sH9iF7gBCZLM4dzvjS1ymguXaGe4kW3yTVPYCLiBu5Cw6UWkAyS5cE8vRQe47dRxfmW",
  "key23": "3d9T3AGCY3v9yvoCRCyAyo9Mt7yv8vJPJ2wRAr4Br3NyPvwywyGUa28PiGGxpGcrZyQ985nF8Nvcuq8fqFXUwiFU",
  "key24": "5MRRF9V5u8qeCJzxuHtA5sAzmHH8U8T3w9WkLsWJYT3RMYBC7am2YSKzWZw32zhqX2Y88x3yY9X2GVKrwg5nTJT2",
  "key25": "znbaNRBRfHVvgqQE45EfhvhQMtagEbWfW8or8U3ryLdVAxBgcpxDfMdPRFhUCpHigr6QkJ1BLbHKZNHWckbNRoL",
  "key26": "5GqL4RDNia6w8DRPFdXnu3GNZVyFsYEEd6Sf6RY8EbDK2664JvKVK8qbQ1wgAqmgeeECowc6vUcnkQKHoTsyHQX1",
  "key27": "41yxZ3v5ufrxoXgnKeczKzqSn2nLw1mnsD27cy3FJdUGw9TAsPor9GJqqbtENbMrfc3FkikwMT85z6APpTQntnqu",
  "key28": "39eLWcVgbw8QPcqC4PhkAAMnfERwXAkPXCCD2NgN2wWCHBXtmRgisdVKXebnHxXyWsLS7weCB98Ukd4LZW3gssAU",
  "key29": "xqbVc2ExAHxBbKsZu5XF4eaCCjw2J3JRKgbMkPbQybzkmfxSF3gBE988o7YnNgL1cQpVb3ujhGWyDPGZuaZ58qQ",
  "key30": "4q13cQyDk2ooWRn2c6v5VMKaM3i3ZzSCLMa28kBiWGz8NoC9NSgth4U3uUG2aNUnSBFSUK1EH7TeAP7UxhVGN1AH",
  "key31": "3gcxbw6DoRAXpb9cRK5ZLkwKdSa7PyFNYwBN6iL4UmPXBswtmP8N2cUUnHfmZh28YmPUQGBVM58ND2JfLJw3JVgX",
  "key32": "5qKELGxf12np96Cpaz6tkaMQDag1dW9v7GVVUxnM3eh4928tq5ykAimYf8xbaaUfqPn5cLtordtNWDGvnhxgeq5E",
  "key33": "3thkF6jRLoaiGcsHqaTeUgCPmnjtD6efuFghxDCqjUcSA5DkdnSLbViQa1Wxz2ULLJpaJmyKZg4VxL3bpAK4WLH1",
  "key34": "5YcpZgdjgxNgTmRFob1jLNr4XZ4hSeJdh5o3AEfqpyAvBP5z4qojauJC8jmCSbwjxFHcfkxmkNQkjyJryH5PYSJ7",
  "key35": "3vTNPro9Aan35TefRcaXd2kmCrcXDbL3mxRgWnBm2vy65eYhJrigjKk6h8V2Dz6khPhpTqqehqzsGALxxupoqdzL",
  "key36": "33ncLwvFkn96vce6a3pe6CaB5jP4DV7jpeR9JQZudaMk4fwLgb98rftFoMnzubgrDS47jNFH7hYAfzNUujNG1gdS",
  "key37": "2MMLSR97pJYaBniFLqjLCj3Lv5wY1c5yYYoAJ1kfFMvS3KUzkQDw6KRao6RGYjWStRPDnFX9reh3ThPdza9bBkLn",
  "key38": "FGy6MqBsv3XQLQR9TNgw9g8JRCrgbPMAtyZ9iYMH28fL7XHHSzxrbtVSK5sKri81F1WXXuTofx15Rcjzz3DptGd",
  "key39": "4Cc5fzd3pWVnrfXR26A3zLH9YkH76xFaYuM1KfyS8MuKPtrFjeuCehP2NQg4HV9eBMNU2VAPNX9fqmUAfcyh7CN9"
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
