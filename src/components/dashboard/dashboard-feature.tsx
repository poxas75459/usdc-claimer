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
    "hmqLqVtzsUMMRVyYai3aaR5oejAvbXQLdPstj61KRe2qixsTgo2SX42SSPGDvfMHWCAsQbq4Nyb57iVgACEyDMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KXccZv226vjAxsRfsiEXjDZuHCknRY9DMzYg8vQ5WGB1HHCA6d1hALtwNN2uG7zWLzPeGJ9cgKEwvyhR8GQGLH1",
  "key1": "8eHRchgRPuzHKjyRz33dxWFeHvh2KH3zWiUaszrQyjpduL1qSxDLKMTXi6S8iGGjJXNkcufbkGosxewjhEtKPaQ",
  "key2": "2R9qnw6AwrWUS59Aj3vd34C2ypq16uDbmDVcEbnamYXSjmq3jbZMGQ7TZnW8vNEjP8fSDF1VVgxg4T11aHy2Bkfw",
  "key3": "ZaKen8D3GcguKoRSKJdixt38tusVouQM2eKmuXoGszVcQVbCaXkxde2LPcKT1v6y69s99prydPxj4hPTZCT4EvU",
  "key4": "5nekEb48DbvyNHVzXM5oHm39c29dhU439SxYAU3Bcm4tXptu7secuT8v2r62dnK3jHgnM9fL5YqpCTCDsYV4fUdG",
  "key5": "Bf41m29u1GmNcck6TpaSw42w8A1qn1Qavn4PF5TXTbQsdytR1EWEc1GyEGRcueRwCAn7Tzwi5KrguRv3MBDieEC",
  "key6": "5yW3p7vRG69ca7qTcKYKFpnx3amiNMr98ba2ddMqqicJuy4wUDM6fKywburWRQBU5NkfmR4tPedpsAPMWgRCN3M1",
  "key7": "y2SQRJp1N2LCB967c3NDvCPcbh5GeDN29UjsfZd3z9ofFerem5ddnKmmncYEVN8gG6wKRnKcwqkqPJuVgCx2XMi",
  "key8": "2BrFBE3waCK1JyiLTNJuC2P7euy3vJuyWxVg6UQMraNcBsjH2ugb4tRUxVjr7c2AsE5epnJA9E44jhxNhbHeMrrL",
  "key9": "4yoVjcv1jNtstsCtfckh9D4w7A8tb76zoEGbVnKzRGY5PQCjYAVzSr4ZrwZaB5fkWRQczgYsSN4TQUfdV5neUUBK",
  "key10": "3h12fjcwbr7vezwhK42q7omkLaCUZayXpW5oBwzdYdA15uZ2ofEaHiiaY1vcPMQEv3SVY46hy6N6dBt5zearEEPB",
  "key11": "4qKwUaKeT4MReRGp5kZDXdqMKpkVh7Qvu7J47jz2BiGz67jxewbHFkjisJtDKYsSBGsuUGvHcaJhVxXkincmgNX1",
  "key12": "4QbDCCqP1Kn7faoEZbVxRvUXuzJLutanJX3qN6aov9u6DWGpLCqybnHQrCJwdw6s7uZH5cdLTV955zoPRfY1kKzr",
  "key13": "4eQMZqWnPiHUWddeb7MgErHzKMfZYPn4gwBLg7gRpexxrKPbuTPmw7CkZypa7q28bVi2ba4p9486Dx9yMRLmxzkM",
  "key14": "7rUVqttxtFYMNtMjPctxjWb3hFe9jzUeRpqJXdVgoXKQNKJKYQhnp3o5oXmPg8MbdoRUszWeCi9nv9xNwfpe81E",
  "key15": "4J6AYFfho5eaD7xBVUhdAaLWeZy7bgiW6Bj5txgxyrsJE6rCEykafD2oAA3zT4rfcgu7QRYEKyd6TUqW67JMExwi",
  "key16": "ok3skLy4pLs3kVG8RdhTtmzhXHw1kEa4CGoZVfjN8uiCDeh9egnT9KWFyzJsYrwVScFpQtRiGCDYpF6k96o6YoH",
  "key17": "2wo7T5qZMPnwR3NPnixEkXmGWmBPWW6X7WyhkUwWQwzdNCDjrGHPo1bua3JUe7RDeXcKKFcRVor56kbLwmpCvj1",
  "key18": "2dSgSfj8F76HewbVAuDUcCG6ifUzgwZ7rgY2Ehn3qd4YYEFTVrzMA8LfzARKYA2Ge3g1MYHbgQausy6kkGUacfyT",
  "key19": "ahcLTWiD7ErvjjZAcVkiPE2uwDnc2KdhKi7XBDGr8jtsEs3FjzVX9oirCQVzbjNYLc5dGN4p8KuU4zozeg2NYJ8",
  "key20": "4TcanJc7KKr5zhFD1oU3LrGMzsJVD2xvFJwEPUtoqQUdAphAALzVKtkcNhKkohp7xqxhnxsPS1H7PKHEhp6CHMhz",
  "key21": "5WE3qXk4BCPDz5zMQY3wc6zvY1AZAfkRiFqWhFxBYqaL1SrSw5yTZ2GVLqbH17L5XH2yXQrE3gZGy84PrbsRXbw",
  "key22": "22DJxnMfekzd8ZpVQJh9UVW1MmTgyZVRhhpDPjQkq85TmwTPsizxfDgP36REW4yvTH5EPdaHteUhmKMgwBv5TkRp",
  "key23": "3NG5kDRQafJk9N7XZhi8emXQut1qMjR1hGboL2b2kjaz7nbPJAvL6bavTVjpAWtPieMuT1rMYn9yNHutidmJwDYG",
  "key24": "2rV5NsDaXEDkTdZdAG825M4wprCQoAB86RQRLcLfzyV8KHyGzwdvgHNK9NxKvM6EJ1g5HKgnXkB3DDGSuzGhSXHc",
  "key25": "2mRVthyQ5HMHfWFTktaVjKPKc8iAg3wRnK31Fj9EPofvrMobmRXGGcbjbLBPkAJQU8vrjJigajQZ2ZLbQ9pg6fHQ",
  "key26": "2W3xLuacZ6MxoJEw13gPgUE99vyMEAmEDXr84pnG5cYffCU4J9GUVczSt4wF5k8MfDfUJnXH8bSMSZgYBN1FdkfW",
  "key27": "5XqP1dXVtbstf1MXjZvxkT1X6tWFF6rLHyExJDJrtkre79sLG68xPeMyMrJeWkatkzcrBLibqrKppEkfqJm4U2K4",
  "key28": "4gDL41AJQPRD41VVhNhCL4AbazRspArRFMHdKta1jka6uPypfbZ9KJ3L1SwZ7XUp7m7NuRUF1VesbW81LVN2vjUn",
  "key29": "2ptgFFmhXXwsyMP4npkBY3iH7rDcxB1zye1EwZPmK14fh5qj5uFhg2Z7pn3vWaFiLSonmXZZpHi3kKju4v5recw8",
  "key30": "4wZdxBoiHFNrKYZr1o1sB1j9qyYNgWF8xkJnnFZrJtwThHft3LgSP5PJQC2JbPdSoDwpBWDdcKNnWJKjEtj8PwHe",
  "key31": "sTBzwyrreMa47U48tBZ8bwhBhgLfWrNMZG1WMjGCyq7p4hzWhhjNu9cJcPYdigWBMJnLQvoSoFRYjDE7gwCxxc3"
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
