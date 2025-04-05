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
    "3iAqNieorg9wyGNYYoF543nmNSFx6FYCqZ7nNQgtrsXnVxLvnhFRRNfHyEtDzcqp6C77dnbqsHLqNDRB5PUrGgZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EjkqdAhCRCuBPJNtFGNmchPzGsKoiMjUdcnf2Z1rTJcpd871iCru2cZxxkorPQs8DWaatHg9DCnrmETZmeezKtd",
  "key1": "5r3Pg46gT7z8F9d2ELfCmQwamMhriD2nJcpiED9A2EKHDWUNx8mG4AZmkFvkwxyKYX8sB8cXyt8Zq8XRJitNTnG5",
  "key2": "5FfeaxBhNJNYigHUmD3ncN9ztJfWf7QBsqAJ8BD4pbhWBXTT7ZAX3iuEFxai3vdGy7yFmTPQLh398cmMumMj1fge",
  "key3": "xvvARdVP6xoKFzCP2N1qsmzruwRKc64mmB5U5K7jNJSqpEvFkk3Vb2sZ23TwTCya2znHmQrZqgkEx6PiFkogzVe",
  "key4": "5hwzDXtPvpvFexDztzfq8JxUQfJm7knURuPMSYHvj5oruE3tYarwFGyUAdB2tcymYbumR1ZdyFX21fzbNkRy4GTY",
  "key5": "38nKAu39ZJ11EN9WpKu1F2jmcPLCisF21y4qxMAt1j9mAGVdrZjBNsgFmY8RJuPw5ZXvsvQGa8AMuTmzEm7PgNbe",
  "key6": "5kWxRWfmasmkqQtpQ8ERw2AvjFBQPAMpyp4M78RdZK8CqQgTBcZkBuUg3PRvNTMLPmV3ipKvFWvHe7H9QhDw4U9a",
  "key7": "T16n1yer1nQmfdPgBKYVnMAS6iyPS6UsWM4TWSp2pPiKgGgvGsbWBSChrMgBikNLwytjm92oXrkd6n7sz7PdBYo",
  "key8": "wkVumQuDdjpA1anhHS86VCgUudMD1j9sDLvJ6vEE9LHG7VwG6nBtsF8hLKqPYzaz1zqhQQrWMTzBBtCYVr13u1K",
  "key9": "2hmhaW3YPnmYCLkcUz8VPPy7nVJYAKAB5fsghATykbZ8oPSpSKdawANw1mkGYcRM87umntucXDGVYpPosPSDTWUH",
  "key10": "kDDbjYXjPzYpGopeQvtEfvXRy1uhqx4kuH3cm9tRbwUHcZqiPhCMRGMrnLoLYqDHef6JS6StfeUafhWaWNj3ZMm",
  "key11": "oditWKcnTj9NEMcr55h2U1ohmQdftJgW5kvBACLZ4Km14PyU2xh5uEwbywCTdrpVr6JTNWwPUHM2QWQNq4h3DxH",
  "key12": "4HGAu1cNpNAcPLjX7kWC2mBcb8J1Zpeoyy4oxSNrSYPUJKn1Fb1VE2avk25xxSueevmvTKRSPwr2NjqfD3qFTCu8",
  "key13": "5wBfXpTrzzE3gppsFTiRjecYyp4pMe9c4L1mGCjGa3dksGu4pWbMxAru7vTUzKxnfh4ebPrRZPy5zAoiQgbjZqMV",
  "key14": "4hPKQ4v86bDpYvoW1wA7ZUX4EjPvfihxEUb87rvMJc81THzxVN6LYAz1XpdmsZ28JV5d43RxcYhk8zy3vf5MxXHD",
  "key15": "5SpP1DD9V1MQZaHAb8EcGosuycTwtKEGWrxujwgb7apYSeCNiSnradjMTcek1Cxb2sQDuUYcBZCqG6TtumfqdFkv",
  "key16": "5Zu8qkK9Uf9T3Vj2jFsGsMqB7fCK4E9thaH5Jh1seZJcjzzjp3VDEPSXatNBpQnPbSYaJbCK8evfxBikSgfQrLUk",
  "key17": "2Vwtnyv2TN2uZ1QfvS1QCSwdiAUapXUu9TVZK9hM4v4Eo3DpDsRdjHwibF8A6cCNizNKtDxTrHuVvyBzBNg1zaHs",
  "key18": "4Uneiiom79XGrGiHNRE2LFfhzvytY6Zfw5bHYQSt3NqN9iYN1vFMHbK9pR8jknhB3DgMJCLeJz5w5B6bPEVnMPfj",
  "key19": "2DsHvNizT2W6Bt42Hw1HztTs8Sig6ZUxFWd6ZpJWZydES22RDWgFcAnzotZn1NAGT83jGuZQYEyAuUmpmhUmTubk",
  "key20": "5xd6xAcPfvnjJbTckDh9HDs6hepNXnQgQM6zSxBkVDMjA9QxhuW6iUwVQKe4VbWpPvuPWGXBgrBwBmvDfccACwMu",
  "key21": "5syrHqKrSy4LAGSFwNPP1hp17Lymp2zbpFxmqGoFJvoAbxeDjANYnLN8cERGCM1cVxW82kTzgdTSPsbh9mmjH8FB",
  "key22": "62a9hn4oK9NmcJ42nh3ZfMBRUtb8YBJCZaToDak2FGMjhgKeZYLMJiPgDzwQd7EXgB7rwEtWXubBCzPzckiCbNnA",
  "key23": "4xdp6LPxY6wk6bH89SVDqg3ChYcr8VH5LE7t9eXfocZRapCzAncvCxMKBBcNALPrxvq94XE9hBqPyG3ExWjLAg2D",
  "key24": "21f5b8BCFT7gtvHCYf9RrSE1N7YSUhkf5xbhKDipW4m1sYJmES91mH63wgF7vfPxzJxmH55G3h3SJQq1N6WgZerN",
  "key25": "2M48CxjxS4Jbhuhsz5DefYcFVvg6d457Htw3rHLe4ew9CgyBrz8epUuL4aid93DLpqKj5dA6mZeKW9WjbyPzkccp",
  "key26": "36EbE3suzAzzow7ChYLbx1fXykAf1Vp91982tTSmUtw6BwxnyXUNnZKei5Sbo8Gbj8aJrY1mTJa6tPjFok5oYNBr",
  "key27": "36qrKjhzr5QadMFk2iMPGwbwznAP9eCQGuDMWZx1pvzWf7T6PAmdXoFWsyLT6sZTagnLTp8iqjKSWUv6xMCT3GJd",
  "key28": "319qeFBAUFStMbUXPUBAXPynC6AyLhiypNJES38bc3ZEFCaJ4JJ19qhf5EdbtYuS4w5ztUV7HGDzVJzsiHfKdzKB",
  "key29": "5Gd3ADkJXJQY67q6turb5Ze1SmGpeVarcYt6z5uTkpc7NJzWUoywh6t4nBUfoeSryHEkYTQWzTKg9NJKXAVHKhZE"
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
