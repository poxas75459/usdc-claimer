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
    "25JStVeUKGKrPbRHFbuLCGS2fzDQHF5ATcormRoKEEwbbWwhULMfVU658c1S25UVRqsfHT5o7rTK6mNTEbCrUjZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iJ5hAtWFXXAWL5CHaaKg4xfKCUpZ34KffpG2j1faajTbrYARteKwqqB6EsRPSbdKLMtYAtFn7f7WbdJ3aJhWpAf",
  "key1": "58B3iFCjMuBPm94vXf7AYa6isEy38LU57F9UzG243NpVy3yNzLeb5r869TA71MgwegGF1xwLdStvJ2UWQBFrujt2",
  "key2": "4Qae5GQVTrCHo7HBwd7nHLSSGBgF2WZXphduV93FwPpMombXhn1j9AM1Jx49MXpknFyDnMZPHWS8gTgFgNw4PdXv",
  "key3": "3V6fkSjzMf8wtfZu9Cs5hJP8hqpT6BmWXQ98HmywU9GEkvX3N6mWikFgCAd8MV7g4w3N8r8rA6QXZ7hNKd7oqU2L",
  "key4": "yp2fcgeiMTkyhyDBSgVwH2BfuKhRb6hknKhC9x1MYnAXkaPqKPhHZhreXNuJXD31zhcvSc8svGavh7QcSzP4a5d",
  "key5": "5jLK3vBpvtpBCiuy2wwgcYUU6628acY2v7tmHnZ6biB6rsvLjXXiee1ipCx5iHAJNRkMf7D5ZbB5jQk7fVuZKXvr",
  "key6": "S5cBx2LZEjmFt3otcosrWoKTVetDdab51nqq7zDGt3zYpAFKA4zagfyKanya8U4vFGSEedA9axQFWdi4rJ6wA5M",
  "key7": "pMjsLyUp7UYVxTXdE1fXeeBS68FypeeHngCdaafHQGY49rQkP6xMDTXdQuBXHTgN4oFhhQ2vd78kuR4SWyCyKvJ",
  "key8": "5YRaCF8kzBZ7cJ5kokJ51z1CQFXN4RNBKWrb1xH721arNDPhKj5b7ZQvKHceUz1SS9VHx1riQZhVdw1yrBYrjQV4",
  "key9": "5wtQ1NZztsPK4MXBNQkgoh58D8yfmtHqcXNr1q1g7wJLWfcySE9AH3AijFxy5sBCAcymPLvLXLvQuQ6MBQnHHCEp",
  "key10": "3z6zCfJcZCbog79d651QwYBRx9ZKUFGM1SnaQe2bye1w2Vi1xCmeosLc7pBwUfzruHqGjM1njgZJ3ztNoKR74jvL",
  "key11": "5B983CkUvpZqGWsjV9yoidcbkB3L4WcJ8G266wL5darcFtfyUgzDM8XKWgn1qwHXLvgGr6VgCqzpLscebc7Cb4K7",
  "key12": "4ATRF9HgjjJ547SRkobUeRhbySSoTNzMAKqf1bEKGmzmsYXLAt7iXwRiha2cPiEYzoEyzuJFwkCMFZLYN2uQkpqh",
  "key13": "2ZLpb1LSr9C3X6aRayE5yqj56idBdGh2TgJx52QooJSexszkEWEXsbqajz83oYPSkkULgvEEfnNbgs1xmpnsa5tr",
  "key14": "3ysZcNjpwebeV4EQGmMVh7Pm1JrW8Xs6vBJFfy9w2HxvQq9EfkjkB629B5GnTDKDHe8DsEkpVvHtkpL2EAh68CP",
  "key15": "3EyypJpRiYAYb8ZT9z4NgCBSaW2WR9upLdNKXWKiHdwsjTtTVWpH67gxaUbFbk4WgRL4Ro1XVxmrfNCgNg4dPHNX",
  "key16": "3wwtNXb3Yn1cE8kyWH1njHs19m2remzgC38yLLTbUsnt93vtgeWsfsoj7zBDzx9BZPChpVcgcxbijCejbByRr6UZ",
  "key17": "2fisSGKsfEE8PecaWw8pvb6pCQpJsRSUVozF8RY25M8Yj2YqofcKi5LuNrtACYDjACEESytJne6DuNqzWyYzYyJx",
  "key18": "62UyxkSLeeaLNQb9FnTGPEDHjJT9JgHFNaWFp7kS9hKey7gxWfeYEpjxJU25i64D568PA2v5rBHpsg5vrNsLhLNN",
  "key19": "5msDtD8twx1uBgZzofnKRMMaZgmHuJ4JA5Drcc5Bc6PMXmVeQLXuxNUF4qcvLDsAAe3X3GGztFRriRXAXKgBeX5k",
  "key20": "3b4H9XB7i6QPyr3UPv3eSDP3SDZcjCDqEE24rbqbWMPqFRxRK3kK481MozXD3X5Md8eCuJfCdXwPH5XBAfRt11YA",
  "key21": "3aUgLpbjSmiuZX1f8bRuzgdWZjUvcLkJCpR7GVDff7ZnakWmVt4JgLxJaQtrPUZ46HsrsC8tQRUTCNZXQZtGU5jP",
  "key22": "5UuNa6dshk4w6E4WV1vtGSUb7hnUnPF7Bd2GKiNi3YuALLLBXjATGoZ5XBws9tDVhwBc3xracUjVXqbPVK8QSZxP",
  "key23": "TmGN9dpNiQfHSFYhHLRA7Xs56KAQvVR9AUFKGiKZHRojwmfJsm5bQjtetdc51LqVDQU9F3UzASnbz2gdxmk27iH",
  "key24": "3Z4fmn6Q3vyAkdbi5vUips1WT4Cm5QhozAsRqisUpsAnbh5T5nDEjrAJfuVMGEKjZ6DyD1PPkwTYP6hha7RuQTUe",
  "key25": "4QEj12dJrLCrXRWNx6S2PVkkZfP8ry2KeGTWx6XndXo87oa6shwLqpWyWTuE6RCtx8BAditYnoAzGbGQMrc66mL4",
  "key26": "4HKNNyADsc7zt4citxHvbmaSZ25ctyJzGsnxMVnjBPYERN7bjdkR2yn5a7V36EwQBbnDTB3SQfy2BVAk95zJAAb2",
  "key27": "4rdrpn6aPUeP8w8Ud3afDP7rFSitaenNYPhKm8Z27uenJJPMdSfzrxxQzUMHbwD9Jf8AnZQ4ZbcgjvPTW2iEwXwL",
  "key28": "5f2Zk1jg5GN3nkaTrPFguRsngiNCvjetxx4QEKyJm3JYwfXqnZF27FUdH5dk9cGYAj1eeXruqUHo7J5rdHdBNZGu",
  "key29": "2sAENEnatvs5Fg5AzkFu71UzC1N98iFTTz8C8Dh5m8mE7wvewE3juZivUYVMHTv8m9FAaWCP6Nh8TctnYVgw97uh",
  "key30": "58QUFdCSbmq9exmRydtsTL3EwhrZWh2svgDy1tW9bfiGbYedFQ5cfRNDS9muAZHqYwcA5yqutDAKkA5va9tjWn6S",
  "key31": "55eirxsNXqd7z9dnsHyAZPKoZH3Cb58EEY3ue5UQMdp3eLXjYzoG3AKYPUhYuZBy5tGZnn9623crZBGQKbNc35He",
  "key32": "1gGSTbpLe6z3o9PuAQGayb7vNoJaLJs5YA9ojL43von7i4kP7KBRUzrJddkFwgNUZUd9vRRYhiBYR7amasXb7CM",
  "key33": "3RhU4dA6LQLZqVU5rj3HwqCv4qWd1PduoAPjZLAtJ42C1T4cdQjm44qhLnazBvuj6XcQk61hhmpVyjuzKHm516ZP",
  "key34": "2XVHwcSsUDt7YMVxwJAnWxDntdZkjPyc9mZatvpyuweweYWXKxLG8gZn5C2UTfWFeXYSG8U9wnE4TmYPTf4i1baG",
  "key35": "2erqwUjbVqWDvCcXVZBhAmb4zi1ATvAZrPcWFxrGoQx8ikTtwKcryEMjtqB9RixFWUyqPX4wTugcSo65gZtGyTMT",
  "key36": "2vLfeGzJ9MjseuVVvQ18FfUxv8MxU8umKAGesbVrWL1unQCBju4TKjGEobX9NGSbLmAZELuRv51Ci3XGHtGjTPtq",
  "key37": "4akXpLz2goS5X9eWBF6tZEu5Yfdc6Kegway3u3QwKsPKSXJrvFsBvmyUiz5rnqGnke4nZsWhYNNqSkQRktXH6wgn",
  "key38": "2fYwsi98oFdTYm2XaQ7rUGdx4fbhiTSGhwgH71nx78jLrtJDP8yK4JtPnfktyt86KZtuDpRsCU8RJCWcP3D1xDjV",
  "key39": "2zLuwU1XPSJcwxvE8JtwDcypRBRJgBbs5MPZ5Kno7ksuim3K8C9EvnaTfdzQRsEnS9ADKwKUhq9NjTgGgxZYizgX",
  "key40": "4rdgaAWVHRoFGfLocxZT8GXXnSQknYonbsrQ95G3HvcwA5UH5vzqJMjuhBgwMC5FteTZTqU8ZN27D6UhNtryTWch",
  "key41": "5jUWfprjysHHht1YA3hXu6eFPFp1buXf7RGy3QbHoNUJF4xLHbgLnaVXCfP1uKJMi5aDRA9umaRwF6Nm4WzRMveV",
  "key42": "5a6GKRC7nop1NYL6W5iKesMvrbP6x8Wx3VGhShvsMJ2CoRdfmrSFDpUEAqbT4FdZKghpRAC4wninmwP1ECrSE9qm",
  "key43": "2WfVh6yizm9sr7FQKcB1uboB2RUREexVE6GwiB5jA9ZWaP5WmmEfb42m4KTnQ4vsATdiVorytcNia3PimwfjFknz",
  "key44": "41YyNGeMdX6iJe2SMkfeQjGNzXWT97QrijXeZhD6zxjU4vkc1q3QrFoLrj9dF5tZZsihPXAmUWgmReCYthZxGGsy"
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
