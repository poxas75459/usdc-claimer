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
    "4ffnFuA7uRuDNprYkH9igDke2L7VCQgo9eRpdruaEoXtKTWDgRhHFE4FmUFeqebSiLrV7t2DUwDHFq4aTerTf9QL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BXRDzrTVLtawZ1Hdau3snHCnNHeKGkrVxyx4ywxe6ZwPLuS6KTSisViqnpKDuCkTkfKcSS2Ktr69dxuRcY99b7r",
  "key1": "4RbpE5ZPkdd3C4vcVjY1WGvjPHJn7HDnJ4pVcViyTp6NZavCgHqTDPKXr4UhCmgpDZR5u2qjXvyBAp9y2xKEZ3WC",
  "key2": "4kFQhmjCe7PMAMd3TcwTrKLcJbruLi5iJZzCZinFCQF8wmGZNMcEjp43f2khpd1SYwaYCDb3pX3XYTXbof1N6Svr",
  "key3": "5TmEVdX9g1nWBRnG5wYqkkrzjei6Q3VLgDu6saFsGDrSbxMG5tuYBuKswYh9cCaZSAFthpyK8RegPSbWf95pqJbt",
  "key4": "2qc8cqGF6z8ZBn1psiaTybCxniQ2zks4DT472kGdeGrRifA6ngDDjc2CnngLFUaW8BTYxJzdnp5qjxCeT4L5u38p",
  "key5": "61paE6QnibQVLEH2CNH7Px2exVBNyrXCCRtHrn6Xqq8dEtGpGssEaEkybSjyBKnsVG85tYmSU8Z2T7BnT13T5FJk",
  "key6": "2sCyUu3UeQWLxNTxUW1Q6qf9e4SYjuvBkFVQPgqptCzvQ9jqruNk6bXgiHT61JWPEX9tRJr63ZqHpH86rnjhfDyy",
  "key7": "4GGFswsQN4J5sNmaoXKbJAHsFsjjnJGi4wg5nEUBqecDJmQtJYxUQxrGhSnmQym4N7yPp4FB4b225outN9zrwjaA",
  "key8": "3RWkHeeLHnVc3ZAPHSbyUygcarhQKmDhXkTQJRP3Fdqpps4LSKyRvxrqEEAzDLEUkm1Lp5XC6kDYMEWyNtXUJnb5",
  "key9": "21bnVihcyynaitqb6JtCBt2fSbJcdPDGeehLTCnTLut6mvx5xwWLqYzDH1B7U2Z2XPci282bWEfzoK1doEYrNyyz",
  "key10": "28nttNCZ4TiFMHunyYjsTR3cR3qZfLYjgEbXK6dDPm4pevNa64n2ZLznBsHDP8tGuVbmMH5tKrqQbP6MV3iL7Du4",
  "key11": "5dnbHwJhTrYBj7z1P8TUkKZLe7D9YQ4ikVdjm9oa5XVvgUPge1CXCSa37GakCkCthDd4kFFuPnmqXVbb6dtYr9B3",
  "key12": "4sgDaednHfjm2N1bfWGsR9H3d48xECJEGHN93nrxWEiPJUg1xNpJpzSoHyuBVVGFePFvYhen4mioEHXcaepE6LDk",
  "key13": "BndavZz4Q5Zp1WdSSp4mNjjzc5xieQnWshxBGePS5MBjEbETMhpZ5VoPxJXGZKwxA484tRveXmECSsdrueP8TzU",
  "key14": "4i9r3ahpUH6A1fB5FgytxzjsUBiZgL3emfiYtz9eWNTkogf7TmTiC1EXq4S6dr5b2ZhkUFQz3Fvu8HJzkBuKpxcX",
  "key15": "4vSYURmg77461xamSTNF8PAa8WB9YAbbK1UdL8qHUv5Z8CtUQRe8HzqWX4uzUnUJX53qNxQn5d2GcaqZp4YJZQn4",
  "key16": "mNknrA1xYJvdyS7e7Hv3bcG8dFzVyVZCTHSJdp8zrhpqXwnRLdk4xiMxAXeTwG1p8VYyMnHg43TbUhFFUGdz3ek",
  "key17": "rYtQQvEP6Q2bqiiwLLqhDzwLGDVx2WgJsRwjk7bSPMN7cMKe9X5MNYUktfuBXpysU8Sh4uo6zuUdvnVsFCP3gXi",
  "key18": "65mbAYygjTBsgwYGfJx6Ye14oELo2krLEPaFhY3J3dC9oopyj9UAZCTJwJwoNMXX1QHfrHqqsZfXCSF5aUsf8NWH",
  "key19": "9JvYYGqRi4JAdwWD6wnPhLdUwTX2bQ5D7WGHnZxpX8dFB6gSKCRJwZy1n8fT5u9NMRZPu68LCYVki7U3GdWr6Bi",
  "key20": "2hFhj8PhAWyvYui5175dcDbwwCpGBP3JhWFwWhnXAvBzswsUMXVys3K1sHfHPXuniJQqGtsc8GUM42aHn8RFvWHp",
  "key21": "2YhpNez5iyuskgxsc5saiXUZRaBvaGToxyVXFHw4RoygGKRFHzcpW7ZHKz7S7fGaV6z5aGThLWBwquhD4WQMnX9u",
  "key22": "478P67SVc68wkJGqZxaQYKvSrrDVyWhBkMb1shQeMVCJzpUkAJfpwnk7acMeFCRcfxtydTzWgDmLTXAoAedwczEV",
  "key23": "3Wkv3qNTx1YEM2zEa5rnpQsjUrMwGEwv37Ng3hTrRhUS8TpGGUaPN5kRXL5xGKNoLGdboeNh2jZpApTZ6cMj57UY",
  "key24": "3Hwmbd1Tkf19q46rM6UZ8mCqigZ7B2yWJ7ivvevqjjkDuKN6RFQ63vwMCyznfEhtP8CQWcEfw1sULoAoUoSXMZ7P",
  "key25": "3Y1ErbFCaGY6mzKL1h6NbL8jm2yNGJiQW1GAAG9kuW6XHetrWALWnfw4CB4SSDqeRMadnvfiuW3SmckLyKCDsK3J",
  "key26": "5kYhWycdjeM3SEwZWicF4uuyG4aQMtJJ5Zw4h7zuRceaMouDknpKVp2WYHjGdpuvR8Qfa27r5aneV8SD4HNMVsNU",
  "key27": "5dpyHVLeXNcf9xCzLpzLGDqH2gTKJw1yEvk9QGdwH1EGgcjNnk1T9JchjFcX9Q2Kn4wG5uJRmWJqYAzUJZzo9sv3",
  "key28": "358QMvorXtCNW5yYVx2Wac33rx4LhnTe8QoW1Aod1VigxAARTD1jqP7GXzHQhwXAJzASYFk9Pa4ejHXTo7SwTt6Z",
  "key29": "76V7eeNab2cvS1uj4YLTLtQgN5kHhjbFQfSqoBSfSDmXrdvSkmy5znFx4A3heVjyVD732DsGMzqizQeb3h7haYu",
  "key30": "2dRvF76fY2N43xt8C7bqt8wCHckajxATmtdKFDNAawzK98eweA7dSKD2fR4gvZUwZjfsHKKqxiFASKtvYEohsZ6v",
  "key31": "4pJP8MR3SLXHurZs5t82cEziYosNrVYE8GQYchQSKxrWiZTw3EWNGv68S7JhHZCnJhx3q2BFeEpHgUx4ZiuaxB72",
  "key32": "2ATv7kwHzCvtSwMj6Wj9kK9hZe53FyCtW4jWaZzN4HkxFdD7n1svofqMuDvjkSFvksMmh2jmZhxFWAg3dv4YWymA",
  "key33": "UL551M4NALs4avt2LEozpvLoophSzUh4dXnWuEv25NSxxo238u5LsRYjumLh2QcBKvAiPX1cShzWEje8oDiHtSt",
  "key34": "4gXiyowzUd7Tft88u2zLuStgu3ye2beBe8ioDtgtcCZKrSLBrhxYtW9m7uW6sVHwnuFJ9Zn2uTCrtE2YWe6xsujE",
  "key35": "5fpoQuY3VgM1fwUNttaaE7zJHeZwpBniWYwzKhk9ZHhWBVVuMvLqMN6h5fG9Bmajh6XN1pwgPaHrBCGp8mJhcqGP",
  "key36": "2b4ZG3L3uUbwXCP8D2MRZxYvyu9cTj12UKHmdn6oWKhaRHDAsYwystBhxE3CR6z1BPYYzok67ch8vcLtHYjEFmPy",
  "key37": "6339YtdrG1FiEa29m59S62MpQe16JhruYcpAqgK6ztvRectHYqbNA4inZcgkEbqVTyyMohsb6XFviNf97bqrcofF",
  "key38": "26EPKnC3ij8RGa2vAbFpPbQQ3JeVQGhMszXoeezmi2r4FQjMMD5aai9jaNkYTw8FJAxyCbmduTLUaPjU8B1Nsh15"
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
