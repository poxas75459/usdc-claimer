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
    "4fUYuwGZpGM9hbva7hX9WKBAVS8tzu6yXDNieBtZYUvN8481QHvEd5kLSY6WpR5FzQXusMNEoUS4JXg6Xi3pHyAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PpbQjpMS9DF3bMSfU4FgjPaMmTFU5zykL2dUimgRdCvv5fAm7SukBDJPRbcpQssbLLubmCSuk2qkWwAVnfStDwe",
  "key1": "4U1ZvbEBeHR66XryzwDxdx2Dpb9QUG8Vxvt32TVC4scmg2aJYXku7ADGWA98uRwHhqFUWneecNV5k7SwQJRZvCsU",
  "key2": "4mzeGKKSSX3nXsFgMUa9k7dC1N3CxVQHxZwxbz9yVeJyhw4vdb26NkbHwez8LJeK3wrGbXLT3Kg5smfHdtNzfDU9",
  "key3": "2gywBausBebMiHXbWos3bCqFEikkyx97TjtJBKJhLSW74RTBRtV4naNX5utFThsSXZxhfdCScUBccrn71iyMzYdv",
  "key4": "2VJeR2ffjB1PfvcfNngfGiK9QckjkshBNPhYDr1paW1vHddnXWc9RHMiCPupBqQEC8wqMnyKyimg8upo8aRB7jj4",
  "key5": "563PBc2ASFXTbqkXLCyy5maCtUJFfPnpLZkUWnF2des7m5Exc1WDzwaVhwjZW1i8PmerA1ZLyhwHXyWC8nb6aw2i",
  "key6": "4KNdSKric1KjtECiqz7Vu791xX2ZCXRax9s6kftmeG6zsi12eHGYBPSmhDDnemghE5D4L7LvG9Xa6zjYzJdR6ozP",
  "key7": "4k6Kc6MCc8bd1Ueg2zE4yBK9NBgNjm3nVCeMnePy6HPccribUTEvKgKqNQwhNwgsE9VHfFvvxxx8XXYUZmvAXSwr",
  "key8": "2ZJ2yuVpcaQwUcr2euKUtJjLtzo1BQjKgs9YkW4DLRKFkq7TdKKsWG3ZXJJdELQTSNMxSMucWohQtmRmzmpcuWgZ",
  "key9": "yZp8GXR5Zf7x7Wfd4whbXm11U7mb3q1JCCW1pLgYsPhpHyeiP1zRHpB8HmPZj4H3CCNA3mXjeguhhjPSB3L6pn8",
  "key10": "65g9yQURg2gFXJkA4Q4jAEGRoLxGW9bos3oYTmrfagUPBHXKszhmmForWAp3tLwSa45YgdyQwaxZGQRoiM4o7xd6",
  "key11": "WiP63WSZejT3gB2hjwSqvvJ7dsBFv2oSjAT22kGmNkGwURXacPADyx6bexACZkqaJrbbtDsVWfx1w2pZzYApEzT",
  "key12": "3f7rYeVtP2L5bTX6oBgxYN6hwtXqdUVJnWjqKoXVuHRZ9wTvEgy8bY9dzYNAhniFfVfc6SMigkaaeLaK9nSgnURP",
  "key13": "NCYTXVr7Ub4rZwagcXSRrQN62XMsgjN2kJ2oFZ3GYtH5Vys5yr8KVNE8GrBR2QZuK7TT8AdVH7LnjBpyLkWkD4A",
  "key14": "4y5KufkFmHF9HvpGdBtjHpuMvJefYvSwqhs5iyrNj4kDUmcE61upEeqmqTzXFyZKYFcuQHS2ithaiPuYbWx4TnFM",
  "key15": "2Rb6GMJwNWiUbfLratiBGPhhsy78ESPczHJE5u4CRndzKXPqczyKJu9L24hJMMTnvQCtohPuKqTJEEEojCERpX7m",
  "key16": "4zEvM1ya3B1bTzzU3uRDJHqBEWuUAwyqxNc5DpnqZ6hAziNxcCkAxWP1wspej6N3Hy83ffGweNbpyeasAKVJNNtv",
  "key17": "5XD9gDp7a1n6CA2FZnAr8m4g2As28dxh6nswtwgcEByw83b6m7aFthWRy1hSQ6rtpAMe4NJG4SVLHLx2YPUH2n7g",
  "key18": "5kNVk7FG7mG7QUvdE76GPoAFeNdXG6ofZo6Jj8fg1yTZ8pFxBeXxuMcyJzYYA4vC42iwwjM1kybsddaxs1bgyGxW",
  "key19": "36hFp398ykhVSU8bF2mnSdb3mvVtBEnDDE8ouqM9d2kowNGFi8FWNGmSJppQzoj5iCL6tAxRdxijFTgSSwnQx9WY",
  "key20": "NKkR1tAfJ4Yhu8BfHN6w6ZJBcdqWehSJutcuxYguMYkmtNgkaNgYC87FgcQuktt21RMvBbLenrLnsgMR5ZNZGqQ",
  "key21": "3C72KyvZgnExtnQWo6xeFxLEbUPDL9GrS5okPZ6xMRhM6NjHwDGwmLugUyCWHJDvQFLa6JfEjn7ZsTA62coQHrDa",
  "key22": "2hXZQaC2MuU2mwuGhXyegDhZtohpzxpyzvxFvq9VVzjxRL2A4voM9BC8Pji6kcbFtHsFp28BoFzTxE7hqAw71v2C",
  "key23": "25bo6a7pJcGCuchXLDxEfDokQ4haNeHwj1W1HiuZD6wQwoiBUkbvFWEp8pu7bViiaSy2gGXCFPqyq14pq9P4DCh8",
  "key24": "2mq5XbL31ZAKHWmVp2yHwz3b2HLKBk63LCbSLbhKY6Bnp4CTH9gXHtrt7oCC1WY2b3MH18kJ1SkfgjjTzbNRzqBS",
  "key25": "4CyM9sJy7VVuaRZUwoXL2H4Q9tU9rqLh9s5AyTZKEiP3r3S1vERF5yFFFCzxD8WD6uarGkzaet86xgzitr34YgtJ",
  "key26": "5ZTPR3eV4ocD5z2oMyd6GCEdDkCrxJsuVJdmNGmGUJuuWujKu9TFRENL8U9NQipwnw5pQo1EWQ62qB3iUqqFoa8q",
  "key27": "5MXkiVLEaT1Lfn99TZPPcpmQmbtF3jE2S5MmJmGH63GH4yxFqGaqjmNsgzw3YDeJHnJ14SwjtJncb7MmbRrfnE6w",
  "key28": "2cnUYtPUvHgGBK5kSnYxKJgCavuErD7kYrzSYRa524Z8WBgYgFqQCbEyV7cPwCSiU1ih9t5SS1d6KmXxK5LoZFtu",
  "key29": "4rFu95roHZZjAbQ6EpTKWVQaQAv1UhrhDEqkxBSsxdL95N8JbiKVHhfYp8nFQehy5dv93ehQP1Aq7UdzCGBPjVBx",
  "key30": "2n4tY7mteLZDtMyud4aoPuQfJbzLv7bbwQDLKtBrHpoUydQ2unjgAePGcZJGS3xVkX5MEgCtgcPnCM5xJi4preoL",
  "key31": "43BtpdeNW7d4rrkpkHzBSgUn35oAiGbXpJu7B4wnU5KLWk5kvyt9YfDq93cmUAhJhVjrrxaPwnRoL7kHq2a2Tcsx",
  "key32": "4co5mMUaw31fdcwHStuv975x8jRcNYRX1CKhBfYkfoRPXrWbwLfa7fM5DRYEXXJ16eyXaAbKusKVC4tRaFon3m21",
  "key33": "4VBehrTrmYymB3YviHrKp7vWa6SWtRcYxNBaDD2Q1YsHUtksKuf9gz38f3onZfrJUm9bvAqS74aSiby8MXHKtQrw",
  "key34": "3Tk7YdcP6mkXJDieZNtg7EnaZCy8gzgb51vWoM1zaSGnFMze5vheJTdP6F3AWkggZDKwKszjvhnQs9CLqKWqW7sF",
  "key35": "42KFK77CVYMzASXBZHnaDY4ekDPbq6QnLX3d7WgduxyegBoPWgeszLBMpGMJuWrungvXwsPkTZ421i3ZqS189pXz"
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
