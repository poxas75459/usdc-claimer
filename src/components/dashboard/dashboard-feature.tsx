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
    "27wZvehtXV1eBfy5KQqr5wntAxu9Qw2yGAq3vYhbSWpkgJRyo4wgRTpU6C7ktP99faZ8UEhMfRs8XrJUV2r15yMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TtqyJTSn5HVY2AmYoopvnpqUmf6MqZcWbAPfrDnq6asxpMqm2xruH5aYGoG3VZ72qZ8eR5LZgxT2A75wEye4ymW",
  "key1": "5MHiMMm5d9UHbWYyEVKhYwvMLcxEjKMj98ySFsAKzJutEqHFNnsga3SUhq16afnnLciU9pyQM3Y7V2FALwQzWUU3",
  "key2": "2GGACH5cUEiVptQgtRAvYEnkULPfSGCrbHk93AoaMwBHLfepbGMfiUQkbFQuEpBw7M1FWYcsfkjGKx6zxC1aco3i",
  "key3": "XRJ2FEWjYAXMdvbYVKo8nFtS92EC3EACcN4Lui9XR9KMatXD43gZehpAUgMCWeB1wKQLr3YcoTC1uzxdSnwCVkC",
  "key4": "59WmyPdqaPhYQ3WWja8pTgNVV9tB8rc95ZfirAAR7KVPY91XRPXi51R1D8DpYBjoARLPsPdgUzvqQ43quRHuHRzp",
  "key5": "3S6vyES7iANN2c1pEGrLHv24SduiUqMGjv18bjfi79zhv2CJ7QEub8jMDcHTFPjqXiwYfuSKcvV3MYpnk1JbYjak",
  "key6": "XsP1QpDaQRdpF8H3DNqcuXrCkC8pG1UHe7UFCxBAuTBKYtzXUPvuXKr137MykKZ35jkPejbimBxfCThyN22iuvC",
  "key7": "5KUmZF2e4RPVrN68dgkTa7joKDc8fBe2rLH6QAmorXwXLPyRZ19y61ovDp1gTPkJyQDLDUVpxYX8fZNiSyoQAsjN",
  "key8": "JVpkAQswcqtjs3yfToQo9D5GeT2xN876FpMBCSgfFRGMw4iFgZ9vT4w1BBYLmRHvEa6NGHx3ZuJXP22g1q3x9Ld",
  "key9": "2EGiwdTWgn4KkchJNRBpJLLdZPme7FwYKEFgsTZmPHQBYMoHyBLa3TGkJ8V1hJoV9VdasDLN4htzkorX5XDo5LEz",
  "key10": "4JqBMZKLQriwyTF9eays2WgZNPydQ3yv92derkygCmV6XwDFHbVcKEzZXvmGrUw1gM2usiQyMKYgDyC9bVzDocPD",
  "key11": "5oycpm7VsfH6EfhCxY7KbjMG411SMKMGQeb5kAPaXDMm8NEgAPbCzsaMaHwmPvjrWZmWmmELPMRKkE5qsyDRLKLa",
  "key12": "25dSk1YCdwHTB7JhjEAxbh8mEfrD9MBwPV9wjeUk9KRHTZkD5zQte5mwe2K2HCyiE4VMKvf5gFj9M6pUYHRsYP1e",
  "key13": "j84Q21GjnUUGPf618LhfqHJrhTYFj9Sz5tNBxja99tM7msDMqfGwfjBWD1TGgiT7oypgyVWYgHUsdnWySSpFkqw",
  "key14": "L4jRvMYbUfDH4LR7Q4oGWm3Mun4aYV5WS53Uumw2PphZdbsZv5dDQo4svrs197Grg4MsinzQQB8LxE7GcXPTrE8",
  "key15": "2T63L4LcW8YxVW4YVZuFiMfJFXFg28L5f1sSAzLd2Eq6tYMbRoauVBEtFjpmmqdau3YFB5EJiD5j65fAVVp42D1Y",
  "key16": "5V5jYL4a2Nu5rY8aN5x52t9waL2eKRd1aPc5p22cDjPpZRJYHz3rxpD81EoQbEPn9sx71htVq8NC6DnoVygq27RZ",
  "key17": "5HPCLqQsNad594gc6bWnv68JS5dooLwdkmQE19o9zTKrFcFuwco29EAdrAnTd7ZAuPvC8gHXPYCrB9AWQBR3y4o9",
  "key18": "4d7v7aq4sPi4ppFHCcESuEQUaz5tpAPtLVBCkNAvcduHrd5Vn1SR3B3w8HnoqZd2rDXAKP2MaxaenBY6Q1xVBwXd",
  "key19": "32Bxtt1tw1xCYfKL2tVckRu1JpNKEi8s1dsKry1BRABxbHUTxALeTA8Re7TYebq5Lca1Qxvmj4ZRQGFsGr87JfpW",
  "key20": "2o3Hkf8jRz1VKVEWC1YdrwKFV2oNYBXerLGW4moY2QTMNqDGriPLCKS1bmZRuZrR9VSRW4KLiGsmTATWrSxaYGAv",
  "key21": "Duspukk9PUsXNQR9fphniGUkhod78XK4JqJCvyEtdwpUuhideMs72FDPa7MMUvtqWaefX5KP6BxMBpnVT9EqfEG",
  "key22": "3GYAWqQz3JRdcqHjgmxVm4LEYPGaXoPXCHSNUko6tnVu8VZX6KTg9fxEYNDLKzSs9Dp4jHBUuF3eVUNLFaZEhqKW",
  "key23": "cuZxg2DJ4niGp8bUGWeuKvcbZpD255GJaLyGu3r1m1r3nJKp9eqFpf7KBpXoGvEASJoLiT9cb4M5kFxSibK2Upr",
  "key24": "4b9294FjoLREynS7GJJChsJr3xm22GKgXaLs6LKgFKfKtYn4zYeTTh9xXMjYm3eVbG7ut9Wx37ti9WcHLzuCHhh4",
  "key25": "dR3h55KLCRLdcX1s2voLQNrUxqRuUWdbxFTsYEWdrmDnBp5z1i2fHdkqfzReVjokTvWNDo6sfCW3U4pnxqPKDsg",
  "key26": "3AAFftYvByU6isFiFwhEp5nLLAUbivE8gvYjPEUPB85ifrRCiQumqHXKmcuViTb5sQZSUAvU7TWMuhT4RSue72zE",
  "key27": "5G2THMtXmmtUaEYJRSQihvXaGAb4kZ6E7TPWU4eAgUMzJtwovBFe6vKxsdQpZRFrsDLsXYMW9VJyGjeKxde4QLFG",
  "key28": "2Dbo1UdM7gkiWjLrVDXFcUM58oZmkJduBPnFehWyjJA5vipmCVBgwZJw8mcAmZ3jatqsx2ay9DXy5RxyPW9JowS5",
  "key29": "3YvudxpvBqkW2uHo3KVnMmaK1aL4bj73Hb4VTKpE3QZz1xro7d19F393XAbVuvkTkzcGfsvKLjPAB7h9wJYWUvzR",
  "key30": "3d48Eunsv3Df9Y5tTQ7ZqgnNmbRYsmYQR6GwR9JytFUoErUY6ZQrVjbyu24oZkeHVrGwh81r9ovoxcV3cDnQ8xqk",
  "key31": "4uNpMS44iTRwjeknat7Q6oYLjfv37iWPuabCJnrp7EmQ8Hq68WZHBbYYB6TZY6qN3GqnNspozmSnqKztMzD28YnK",
  "key32": "5TLMfNUkNehjWqfWSVe9tHCiJG3HwgkmkEN7FZQUfwZ1ejEjLEfFMY9kW76pAX4N7AGkk5Hb5hBV9gWYuo89XBay",
  "key33": "5XkErdkAr8TRhXCcn5ZVcUPG7jwXtXe78u2KPTEV9gVhfAZ1cnwDTTLjYgx3aRWJ8ZMaZ2ETLwkDzCaAhkwEDRjc",
  "key34": "5ygX6giPkRmbE3bxbpZHuxhf7FypJaafNjnCnGsN9CzXo5PLYxzdepZFvxKqwxfyhyPkD9mPMPVNDwgaGfBEXYsH",
  "key35": "3rGayxxQARkgwE6g2W9ePNWFzaBkq2vazkiPYjcpE5Lumx1CQ88d7oJEECDKoKZMQWGrmW7QgaR3dmJNccNMGWeX"
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
