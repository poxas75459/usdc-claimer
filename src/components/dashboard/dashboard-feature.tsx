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
    "3z18KfebMcwFZuQfLdodnqYMdEEfMQPcvm5d94V1ME7q38ZfZeuoRMHcEE8Ls9PgJ3oUoziZX38BPva7fY4zbWvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZiosT24oH5WY7UgqG43ff8TEiTi8oAxcwfrS4ozbrPcihwQKRuDeHp3oSyFChdAQeS3ceZNyAXG1w1PBStACis5",
  "key1": "51h93rSHA5mprpqwuhrFtrnQpFbtUcAACPizv5wBapaGdfyYs1eF8rntEv7UMD1cQQ2ZS3xaZxoshtd9ocfCaERB",
  "key2": "cmZRxUPLkTeByspLPjgHWd6D6eWxfFyUdNGe6wsq6ZSDZ2sDtLrAd1mb62R7gxHuL6tEQJ9tR7SfFZLokMUsYNn",
  "key3": "2vooruootADkkc9SCnzh8SfPzJ3xnM79aXFaVMSXyUCDHdCvMLGfTL9T1DLB38eT3q5UB3Mbef4FRWawLBkFmtGL",
  "key4": "4bt2N8R6q7X3CiKGeb1mS2hyKuBg8JPdK4XeUMgpLmd6QrYMEeVbCJ5HCw7B58Dev9h8MSG5xiPbCnMAUfrU1EPZ",
  "key5": "3sXvumyFYbDU8fmgEmuEWCc2FdB2UxrqPYQEJ2eDV7znmKaKJgp3bdNwQo4TUU7Fh42ib7CyjyXjrFyDEcMWja56",
  "key6": "5EVWpaLxTs4PvZcZnpwfP2BFVhyEmMa6iV3ek14kLRbhS4oQqmLuq7vq4bDG4W3LseMWpRqx8AjQG8n78vW7rqSx",
  "key7": "38kFMvaSxHUSyKq7uixghkwpFhNnGWnqszRNTv4cTLH8RZWdV2YA4ZSReh3pm1bRD4Gztww6Lfx3we8oPBMq6qnh",
  "key8": "EnXxGChv3AhZgAAXxPpSMqYFJXwniMRpANAnmrjMcVBj6S5ZK5N3Lg24hUWFX5ho69P51szU94QFSecLApa4U4P",
  "key9": "36Go18vcL3GJjK9dM8hsCV9rkLQejMvpMc7srVBrx1jQiDAdSnj9jPNXx9xYp5W3HtWsQbAgYd8EnJFTcZbNAkEN",
  "key10": "VF1Bb5HT1MXj3mRznu8J2LGK3hFo9HVNXNGjQyuwmY5cmY2W1AjknnM8yMjJXR8JLWq6gkFaowRNmhh4TtQmuwJ",
  "key11": "21iuNn4XuGfsxUoJQXQ2rt14WwRN9hPtXvdWSJFZu63rMj2AGcXPp7R6NFeDEva9fhijM3LA5C35m7TKWbtZBCjc",
  "key12": "5FAL4FGg8YW8EZMpgLcFLFcgx49f5Saa29xHASNSt89UQwRH3sfwz8XvKhZf5rcshsu2XjoHbYxUziTjptyAv2F8",
  "key13": "5bjSJYg3ypHWpDsRU3v7iWtWYhqGnNyQmzpka7JzvaksDYUuDVNXWVW15rU7584RQyWPVXyXUoby2bWAruxHQpHD",
  "key14": "5k6zgQ56Hvyj146TYYtBYrZiZaB13V4srtmX7w8dDoVBp3KWEr58BEVSd3NWscofmjWREuCSYn93DDPZcemfbJid",
  "key15": "VNbL6TJbT5CJ6gGkbr4zTn7iNgRJDZGeA9L1cF1Uy51eSRer2MxHkHF8iWSfzLz2vLeKZmU4uAW5jXky4sUmJFm",
  "key16": "3atAGeUMEVz6dLnRKJ8SHYSCaBZkiK6Po67ha6EP2oxG1Fekd5NyjZLjz2VhRjseQG4AmPDCNCyeba9kqKhdvApx",
  "key17": "4ezxCLXnr3rYr4sowRF9ndJW5nkENEABxKfj9tvWm48FCjWHXnciNet8JuJDj4RKwnxJmhV5jwUTQWKsE88x6zXR",
  "key18": "5oxpE5fKwjy5Q9JuxVZXMBLKoAwCinwrwfQJZ7xVNiMp9QamfuQRFcpj3f1mb4U1vWVbZ4P33SLdxYowHzE3YxEE",
  "key19": "m6MmFRB31mxWoi9pZXLU7crACocqFoxsEHnc6mbhoeVdAtMcAXd5krBqWkDHQajs782wXa9jFZmVd8xdv8mYsp2",
  "key20": "1Es7287MKRnHcQszKvFgrbQRjfisPUd7KP4nKwaieMANocXWpVnYPgjUrJBNZ2EkTHtPvxfDQVCsHz7fYLW6xXC",
  "key21": "617Kq9p83shPt2jms9yd8U9eJNDaksP6eA4G3JhDzF24b6Vk9nFrLaZYhjvCBipdyBULkhTAbwDMS1LmyHhVXTbR",
  "key22": "2EpMZM7QdD4p5C9EwM1cASKcT3RSgHB2F1KrCab5miw2bUsH4XVDPa2HEtxZn7fvzZdcJk7X4YW7ATnnqga7mCZe",
  "key23": "k6XDj6Ph8m9cwfhE1KxPfybhNWPzLnErmsjVXYSzpW2PKSsNBMEdF3U3D6DaNNUjVqaHwRaM1PqZ3DaDrvwa2Rw",
  "key24": "5mYyY7grRi1ex3jGrFD4jvGjMBvT8RtJrEwvd9PLDKbzeX6VwyKtYUppAr7hSk38r51xCmgT3svvuxVvS7iNB5s9",
  "key25": "qa9LVZLRNLseyWdP7dTYeyN5cqMW1JoFgSGnckvYoGddLZCVVYTcrAcLkTmM3PFaM9bc8FKwSDG8UoEAyMLkXse",
  "key26": "5946CycoxKqBDbLtcfXrDwAkoQ8zktXuBurvLtMetAP8vD6bfSdpTW3XyR1kpBSmvzNAYXuThSBKWKfDirUMcGWZ",
  "key27": "5ZZL7kR94Rhkt8e6Yy2H4ubVwwXXLGkuf4utK1FpnqCVETgdLQj5mvgcLsrqDxaeRVHAtCeYCEGfTruErB9MiJo4",
  "key28": "2i9vt9ToFnNrb8E9MSPkLFQ2R3trKSufaXZg88nmWjksKzRiSxrnpwSTkxQs4U8AFvrvnfe1mFHHsLP5bbXqyM1t",
  "key29": "4J4SgSBbfX97gDJqFbHGuVmC4zpHymTUtXs4cjvdB9hYG96Qz7gGhN3TwMByGERBoPdaiJRMTn7RUjBPvBhCu7TW",
  "key30": "25wTqsRMwUASLXVE5xQz3wD7whd1LkR5EMz7T1ffj5KDFX7xyjcM95QZ96Lj63ErNYKbpYutxBeqEmsUsSKey4Ub",
  "key31": "3kUnBCc2seYfGQDar7cfPzHAeCuJjv2G1qc3J7JV9oZqduVRz3Eitz19ESbmnaexxcpwNaZ2Xb5RV4QHQNXmgV6N",
  "key32": "3pyuUA7jyxtnuWVgsWbipXSrVf9Rfk96eTCTcBWKbx6LXW14BAzuEATsx5MPzFfzz8jYC7rwA5XR2LcFU8GeDaNm",
  "key33": "351q988jjPUMwWwsT6BPq8NxccVrQpPHJtcJ7sU1JhzqQ3DLzm54gvLDvY7vEZD9Be6wezujb438QDKTdujCBcVh",
  "key34": "cNxvbBbmVRkDn6jQDRjZ4sGobFvkqjKcS6vgobp7MRAYzsscWQ3G5sPtSVfWgm2utUbB1VMMMRmFb2bC5Xb7ddr",
  "key35": "TWjupiEp8uKv1GBezBBMy9jNMxcs7GBXdQYrVrEKptLSQYUao3RPSVWL6BboNLvo3K2tC2RJXAgjcWnp3UhfLv1",
  "key36": "3k2NjYxNPRtSw9W2WtGzPg4diAAijUrXsdUs949YnXD3rdRjUtxvNpcgY5B84CZwcgnb98X8kjcvFXWztbZt9jCL",
  "key37": "5KGb9197T32MuWyVJv8pwtp7pZKirof9Ef84u2okuV3RaoJxnnTrPfYXKJ39SKBoVsBDiR2u8fYEimSgL4d8DgF3",
  "key38": "3WZFMBUtD95A6KnnnRyjgZBCwB8jKGekEguhGcM2SCfJMx97oNWKTBNjh51W6TSGSX4zvEn1673J217F7KpzJpdx",
  "key39": "HP6nH4qmRZKEi1JPqcpFwcCjb3wq66oQLXWmABPCcN2emtqBoCvWRz3NCUUvqPhw4GRXtNw6wirCikWJ78xfvjY",
  "key40": "4suxWg3YDwegzpR9Hm58Ero8P5xTyb6qBVqiiCgdZ2Ce4knnSanCYZUDXQVmmLZTLU9QyEGnDkoMX4EDw4FCz3nz",
  "key41": "4yfUikDR7Af7DWHLpiwwNPfney1ZuVBZeBCEYiNDMN53ogHs7wuqBgsRWhCp1xq6pxbrpvKgwPbq5TyaHQhsVff4",
  "key42": "2rDyTb8bL8iVs9fs26nzLNYLdtJheW6Q4oM5Sdyy1363DCcWy3cJZzJCtF7eEvVa4dp4gBjj36doMsuWVCHcYHrz",
  "key43": "4GvunGENCFqamzjqnUoxaWYhwUtLGVvQa31mCRnY5ziM1cARYMkH5pUHnHhN8STzS1TQpeiti9YTCeKz5ZrDs8ZH",
  "key44": "2NVAnRowuV7XHtu1ovZ7mZqfkZC3vZb673c9v2tVqYdr1aDCLqcXa6GvcThntwiBUSin5gmwqY6X6sgx5wUSjRzc",
  "key45": "3h7CvN3wJ6zpaZTQDETj78W2K888AYUYkKdP7hHFc5sAETXjwGCrzvrpggpk5XXFe9ivbPvoLceVBLmcXjZhiEtU",
  "key46": "129TccEcrJQP2yHfgBGLxUiPpJ3Qjjq9YgVstHiB8r79uJrUtqzt5yitDGriQGR4YotCVGp3Q1zJo5Ua287mqSdP",
  "key47": "4pjNSZe1CrK2jwq6zpgrXpeDu5LyQVj6Har1WnSfZaqE4j4iMHQAye9j3oLJVUTqzqoSjXEFQ5xinpEERuzdjP8C"
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
