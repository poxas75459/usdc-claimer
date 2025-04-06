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
    "5N9DLba2CE8Q34vnjp3sXBVGHxZeJyJU9VGVEYM4eZgkkZHxXmh4yiHiSNcMiyPFCHE3cmdJignnPbAioeJEWLCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdgGTpSqJatxCHNr9oi7hG8hrwvNpS6vDF36q6W8ggGW8vRriec3a9yaLyqcb5p8XTTY13JdfZDDmjUpDhgBbLu",
  "key1": "44757TJ2Dif3sXna68HgvjpCr3hqooFwctitAPFdgB2Hfnsin4gemXyJrJ2CfGtAo68VpZ43Sm5nfr9KE8rXixN4",
  "key2": "2QGhWHTysiwi3SSjaYHmvhdnDN17d9uBxAK6k4SwNFLkY6xoByn1MM5LgX2jgeDwgBKygwTyQLiMQ7P6mhWBHKcJ",
  "key3": "3DS4u3E6VuDvyLZLtKHcqf7QudqRh3zey2Q3Sj14WxhE4a6JKGAMYMF9s1nkLK5yGNms2pVTWr1PdvwxcCJdrNZx",
  "key4": "Y3SC3iUeaR7pNLRBmXNivsng7YHryNegQJ9h5zq3XQfWCjp7ZwXvSNk6HKjCsv5wtN2Vw8MFGxSC3BqA8ZoM2p5",
  "key5": "3j1h6zKssEuUSyvBazpbbM64iLmdHmJU8WQM5y6X1Sawsrb67GntEWju2RdR1kKLdmp7j22HV9qeg66pC3Gs8CmU",
  "key6": "4Y1TEa1YE7NESxf99xDppqrX3srsjqwJePGcyv55WS1w3Wi7ZsXt6JstKM7XvwMA4heWoavKp7UwFgz3tUDJH2iF",
  "key7": "2iSpG4g9hMgwZ4pZYqbkHaDY5EfD5PFSSpnCYSs15fkMrcorhr6R3DDuFDvB3mPkBknNVXydBWwDh7y9AftiYFEd",
  "key8": "5CEQFFHs5QfxiFgjWaiRkrWGaKBpVTyVCaLcs6jNgivqRwR48eAf4o6nYp7aMjgGc24zK7GyVpKevA8X2NnTUmzr",
  "key9": "47BeaQEqvXdKUKAq7DzfSMNA9FUxA9hkWBmVtgqSa2cmuMLsHcYz822tU6FrpVWBpB8HDmzJzmnvwrqEeMBoP4dU",
  "key10": "26jaFSv1SmZVS54vCGkqeduQjWiksvGLp1hYEyzKab92kVVW43WR6vn8EB1hLWb4W4ujW1oPhoBmE6pBcpgXoaFA",
  "key11": "3KNirQoTcaFSdNktQyvB9W9wyYYYJHSgaA9EHnvwGWzddsqiDPLSbaNGhHPnxREkWDq7nMa3XZVJ1v9J2zXtDMtU",
  "key12": "2a69hcnQwUW9HHuZvYZsNfTEpxBjpXrhQyXexvq7UAf85hfme7a2j6mMJiQvWY2UJ1MKGNgE3fKnyAiMi1Fgjzeo",
  "key13": "3gPgYpt41oEEiRaLbN6HFuMH2Uxrnh1sVeEPVGfszp3pbivZjZ6M5AabNgPG2y9vv9GzfkqEbEZ3usntKgKuQcWQ",
  "key14": "3E5f7rtVvTyDTEAuduvaP5FxsQJ5UpXH1mowoHz8QFDaZG7oYQG3cGcrTZvitpR9LaMbPtvypAWDtwGtBSeTfn8w",
  "key15": "5GX1xyXR1hua9PKFGJoNmxJiJCVCKHRShPNCbAYkE2RFiKw3xH8iW4jCGiDrDoTFHqGHa6iFwdkf6Ca14JKUZBtw",
  "key16": "5ri9XJTieXFxU9d81NL5vztTND6es4geYPaJyTQiUUhVqvsFwjVHCMM1rt8Dxpc9DcVC8PoYj3YeHHu3zhDRZ231",
  "key17": "3d98kvqE6fPzPztyQUKwDuXD4acknkwAQixfV6mFRb7hkXQEtdCXYyWNZKJW9Qanrjqd6t6ZRUWhjCQaQwCCghLt",
  "key18": "48MqkycZEsbYFDZcLirCnc54f7vg3J5ZKuHZ2KxNaFBQRUPtccfHSy6fAhfGApjFDPPHRmB2BUAt2KisM9pzuFTt",
  "key19": "67Lv8nukPbTBZPUYzDbYNWZUj6LCJ2wqtFYQ2wuCUS1QAxitFKjwNTUUzZpPL1sWTLw1VrKwYhZV2jjhCvTa9MdN",
  "key20": "3fjkZVKG9hwPwKUEz7N2hTfBiq6vvCSZmQjhHQjwuX87CLBbmit1BA7nnE4FjAeR8tduF34hf6GiZfBWtjGjn5y4",
  "key21": "3GPRjDTKdhFbn2PHM4X1MkwySEmFGayWkDqXHnKBjC4APU6DUX9XoAXeaCKzn1LBBAFTPkHt2eMy74XeSyDcEaos",
  "key22": "3s9mfLUYBeZM9cnf87vG29gD8SDEpCBZ5wzZpDfAR68iwJjfvE9RMP4DUtz34xM8dnnoSXCdHZe5S4QdJSj4XsjH",
  "key23": "2mXF8dYyESMGLPp4gB3VmPLMGD6L6oUXUA99ff7K2iHcQ4cdg94CY9GUZR14dYJG1RwrbAfaXbH5fS3cPRTuMfBy",
  "key24": "3KDxnsxr6fwMLHdzSF6r483DcxokWGzpUxmJPp7qf2XXDgvCfRhto95km5UNpusw7gWNfTBzJBwm6YR4wWCMaTYG",
  "key25": "3xDTi59C4HaNXaxPmoGFmkBjnFsRqZgM2JdqZtmJG4yed6E2DDSiP8ayzTWysZsqgNwHCMkkXj66Bo93cUbZDq6H",
  "key26": "WDD2H9xcGKGsY3YhyxK42pYP5QCMFa3aLXW2JPd6XnMuaqT3W4r33iX5wQpdiFMy47hUVqc7N6YRUtucbGAbzN9",
  "key27": "25nMxWmworpnjcLNacFBWj1MrhrceALG3TBMGQBx2reZyLjRH5CRY2GKqNsipaxoAWLP8m6kx4W6nePkXsMKCf7G",
  "key28": "2h8HhXXsyXnG3mxvEiPpb4ouMYh2fAJ6gABZiewsdU6q6zsLqwX1zbfxnXRcbcWSiGe1CgcLj4ANjnPAqPHVWCJ7",
  "key29": "CWGMzcMsR86D88sYrXo9QRLi6zDRSJHLuUdv6GLrP8x1Sv8xYuA9aKepVXDhTftYgeZb2zwXxTu3kS7DNCVZ1WW",
  "key30": "4Y3bABE1styAA1zcgUr95HhsTf7MiJNK6yupMqnzyFWL6gwFrLrn14GXjyVrfHrhb9tDkeMnPghiq7hhYs9arnsA",
  "key31": "64wQD1D5hqC5EnQMFG7REqyYs4oioUYLYkcZX6u2dahQSdHMCoBjxUmnWNurSLMjzAGqj9MyjbBrhUGyeAbhx6GD",
  "key32": "5AntCFFMCdwZ8iAbvjQjENp1nDVRahswoT8ME71hQCxR75tBbCEwyNVcvtY3yqWSyFDMKfqiAkzKrJUhy4Bznj2X",
  "key33": "PEMkMjEWvEcU7GhuUr69TkxxkupZUgcMv9jEtCSG7r2jmAQuXjXdn8mFqzvcsa1RxVjLr4Wa86i8fDuB4QYgNjJ"
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
