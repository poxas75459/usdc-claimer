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
    "27WfvuTkhWxUseqvNTgt6rnYMbMVjK9WoppN74ajT3JEZTkjMy7nnvbncko32W3ELFtLSm7wEbU1hWBPBo4Ctrvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qmeFfqcW5Q4XySa5GuBVcVo8fL5ayAqxusS367HHAD8sgmtpMwzuTERt25QrTMor8dBrsNh5fPV1b9NGMRegmoH",
  "key1": "2WgcDEz26E6CiFyYXGmguGnmACM555PPvSWKFghALksocv4Z7GknwXL4uWJX2tj7T1s6FYCx2bFGzApoXCWWjs4n",
  "key2": "GphAEPgei8h2wbUZvVpGktmcaAyDW1EwTRimkvZx1KYPecJ7SAiQ9ttC4Bc9ZPaAu1kaCAME7fnRnBdZjvMxyGs",
  "key3": "2Dm2aV2B1QjCT9VTyZDhCiMwTuqso2RhBZXsDuuvUX3T1cFQKNMi7ZCzfAYNGYb5pTh7Ye3SHFQuwdQjV26k55fx",
  "key4": "3RYUaaJKXxuopToZQcQ2wBSVhZrMV5S9126ZryujhuhJiw6AnDRAYMd43WjcckBY7RazWKCP7kfVTuS6MBGGs76F",
  "key5": "24c6xEz7he48UZYhWAzKmpwWEs1k3jETuS23rpQwahmdnqFqrxKsUYWBB8RkSbCbNgCNAWLgBbVNxRTzGnjPuexs",
  "key6": "3knPLm9ZoxMGEV1jrgdqqvPz1coDQA64ezCfmaRejrc4W9THzr5mFbw32ygZBMg856jwmhUeW4WYspZrnopLRMT4",
  "key7": "2dM1JYfDwiSNDbLiJTZvyJhNyy1uxvh2WHNyuda6szwW9brLR3VFexgd6PCTeoKhC5bE8ab1eKtU1duLLABZDe35",
  "key8": "8dpbWGW1HAKMiJLibgeEi4zHdo1vJ6PPvW4Q29pePBsmq1yYy39EKNYC3a2KRm9BNKd4faHRsU5Dz2ebbe4UaBz",
  "key9": "j92WbA6DNHorvQzCvgFhCmZZyV3ZVh8cfyG5GrWhdCeRUTDTaqUGwTuNVN44PqrMisgnk58Xj71xkYWYR6gsx7X",
  "key10": "5GCiQAV8tenGT2tjgJeBVfU4as8K2uf4JaD3QN6w81rawBoMT4xpE5vLASyHD8XvtbKUZW7qBHLiePVNoiJiu7Ku",
  "key11": "2CRKP1y5HsbE3F4EhEog6WDE6J6A8haerTmDUhkjLWa7dkbxWotLeb5En9mXsfJasvMboqSrhrLKf8RdvS94HVz4",
  "key12": "4NmkNBcYWXm3SxjcufzcpjJ9t3eFcQDEW3FqcRntqXSKRzWjXKwaicqCWsULjVznFMjpBstrThwCr4hRXfnLWdgb",
  "key13": "5LdaHqqUZeiiKvis5QNBMrnnSuSckKjqbA85SorN4pBGkLdF6Pte4LzM4fhWNpYgk37LzwGpNw6UMyoGNkoMs3Ey",
  "key14": "24iarSmi4J5FkyNVQN8bC3Cj4VSf2zRhGhVb1Y7rL2TEnv51JC79hM9FMweyTXhUVTKE3hgD5GveV2k3SQDFiowi",
  "key15": "mfCukCkBxYyhKJsPgbhKfoR2Ac5HBW4gQtpHq77QhWXF6GZse1MTLvYkE7GxoVREqBUA6CQAB7iW9Fm8eEuLt5o",
  "key16": "tfAauGsspDwSUM6H3XW3RQpHVU1KnczYC3KnGRGncSGURFec1XY9k5UBNUrHJcEWg4MNNjqp3cWJpZFp8sbXauL",
  "key17": "D6EhFZTHoJnY8NXbTNPVtwuLEabwzQxJunufWDEKuaj2MMbEgvm8UGhgDFRiwrnuD6MGGjRea4AAMcVbTwz8n43",
  "key18": "adgZFFeC4WVVqyUuZqaQFBJuWx1e32An8kMvjaU5ywKRJVBTrnhR6qAWReJHDiGjpNpBzub5RXA2XNBddJ2KDPK",
  "key19": "4HxaynA9xQcrEbnHQo3fRwW2pC36SP4kou9dQaSoezkocH5UrL7FdtxSAyKjDmEhEMpRW4Z7DVUJrTrtcgqht1go",
  "key20": "523SeDfc2EQQQvF4AHzMiJMaBWEwbZDGeQZUdHcZREq6SoUxXKcKBuVzaeckYGDa4QAarT7zYVkbMsuaU3HcG4hz",
  "key21": "TfzZx8SHC6mRajLvDMzYDi3q9KQNdsCtLs5yyoH9mUcEY1KVyx3DTbhjJTt1m8d98hv3x4yhZGGuwksynZ9dTWv",
  "key22": "34NkYNwRzKQV9Scqyivavgx9SPjGPWVytgwYVs58tLZ71KSJGBj6niMAUt4xX2DiaQ7LLc83KKEyaPoC8MKcCfxf",
  "key23": "4QhDLeiHYvKpynRdYrvLLHBngLyea3yVuvGZgdK5eVmKMMKaNjTf3zYd5LVpyYUe683JfXPkBwnLstRmkq8bdYQU",
  "key24": "3gooTmteZsJNwxwUiq3C4DmfaP2CRTSqEjBoiGPmHwYPYQ3BVeCNm9pKBCFWW41fDBxp7QW4vSaUyKsNqD5Xfq3y",
  "key25": "4FPwtWXDXmCnyfnP39YfezGpaSwDS7NZKft9FH73YrDfYHaL6nQPSdNPUkpnrVXUrVyTxxiDqtWXX11h71YoYqJh",
  "key26": "2RL8xhzPyhsUCVg6WQXkmpmQmsvcNphAhafMVo3FNgtgie8vtAf9e9X1CDjb7DQFDkosHZgHdnxvfJEdgKheFnyX",
  "key27": "33N5aUHHiH2322i387C9nrux29nHUhfsiMTLUYhormo86rxSQX4jdnkhtwfeWKMfaKdMf7PqCG18ArM3XvSh6zYK",
  "key28": "4owf8ux2jWS5eRjf21K2vrCkwqoDm8mucGuCacpURPv1MdHAYBYvH8P83hDGHLkxbBdYcXSqnGa9g2vCYSwQVEZQ",
  "key29": "4B42LfjEwYGFXTGYxWZ9GtPX1qJCU5mkFbpg5rTt2d8EYfsakgkJzhp8nZ4RQ5kEhCurCfsYmiZa4TWq1NcTZMtx",
  "key30": "4RebqWr73Y3X3kU3eYs8nEUdLvDXyjALj1wuNcQmSMfnc3EVfTsCUWmjaS2RTqQmmdrTzkzhMwLMUJKBcgPru1wM",
  "key31": "61ymRd9ZBmDpqnoZet7qg8mpdPWEpj74PTZpHGMDMvgZckCJhYyfmqTgsaHrbePFVUAfYpkuRunjewBKxWKU1hQD",
  "key32": "YcVSWFwMEdrVxJJLoQ1nTwjbwfzBNaWFsmY2jzDBNzyCEdLsgH8ba6qbHfeNh9FpwcMSy6NMomACKUm9GbDGMmu",
  "key33": "5rtWYftkpbXugWsQbXSmw1vqABb9zg7Eyqm6oBUibsSxxUJE98zuPKk5tm4a7h1FJdbuGo21eX8X2LCVFB1uEwux",
  "key34": "2ZMCk5NPzenntmDyYiv6VTQKhuKpRtFhhNKh2JUYjyV9uuPFGe1rKuczgThUnYuTnETXPuSixt4pQmhUjxtgpCzW",
  "key35": "42qKgcGf6kEQ8DVPVJhqsgfWtS94ejPQ8XrBfsAEiYYEXz1H7wdds8y1jyowiJV46vhei5LbPm7UUgBCJd34nj3V",
  "key36": "3WSpTkdtpaUCgnxpkD46QupxsALgXJ4Dp44L1NVZeFtsXzctt3LWzCFgCEdnEo4G9nCEfDFgk3D7U6qfZqJg3SyG"
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
