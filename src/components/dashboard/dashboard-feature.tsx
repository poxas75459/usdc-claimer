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
    "4H9mSKGbKov9GkpX9vnVZjpTLWoVXfkvAJ5vimGsaE5yBqn5DNpYYYfSkzNCcQaJDJD2oavQWU9N7h42BNYcrsxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caUQJtsxknSfy2Fbk9rajt17WEDce3ztrRL4V3uYVv7iAtBs2spq7UDZpYYNQtHwmescABKb3MviAQfzBUK7N2G",
  "key1": "4x3w9jKe6Y2HQBi9KTAZ2SKSJsbJ5T6QEmrhQG9cNs8QyoS9jvTjCy9gon5CeZzrKKRPFfjMEiTsVDTg1guQjLym",
  "key2": "5PeizAJrow1CwarezvbzoZt6ZpVHo7yEVgzeSExru9qwZTpGURkU1nmfxfcYkL72ZncN3XqJsAPQK2u2XNjFqZ27",
  "key3": "3Q4ggpNvKDd753EAq2PVvdpqXYBTVS7dP4zeoJrtEbhhhfa2d43F6DvvLeSVuFaUnaLih2DzfKty52xkrGUmGHGk",
  "key4": "2wKFKb4TAtxG4fgs5BMHjxMVmZKCkqALRrKieWJHAPVJRapgHgaqgcuQa36WDQo1h3XR9TfbNfsqHe5jp55TRmBb",
  "key5": "54tnJjPWuPQyat8RmYvKTPYSttoU1hJfTJXsu7ijsWuFqjkwh1juTwRrLV7BDT8b43H2X7RQ7hGFq98y7wSwTVeo",
  "key6": "2gYwQBJSGSzpm3xxC4bHrcY24vcwUiMBHAjE7oYgK4dJoreC9cG6QudnixWc7PYe8snXqgjkMTEBgrTWSW1dWMcH",
  "key7": "5365e7oY5VwUw3CV5ek5aSMzigqKcuCNGcBzrMPskUd2QSZ9jPgMp3t6rzvyM7dzdozpHsPWvdZ7Af28TFcLGRA",
  "key8": "a5J7YmmPMU3KNKijHrjzLNFdFxS1WUaKzLfBzqxb3cMCzPDB8gWrrrseC8D1De9chvAyT5r2FLwBRQDNEVFK25o",
  "key9": "29niugphcxKrycoTZJuHbsYh6SyYhm4SA891NxcP2aePR1rGNau5tm4Gc7SMYChSy7rton9SoDHcePTiQVbq5SFP",
  "key10": "5g7wUvqkWRTSqe7CMDMNcKCADFzjw1KJjiFLH9HZPyAZ228ktjCFWYem8Kky9Rexv7Lc9UbHT5dg7eGVp9SkcYzG",
  "key11": "XmkKhSxBrzr5LhcaiMN2No13kzugFLx1daaJaz2Ps5JZ2BHzzeuKt66RKpqNCd6zDseAcZr2o7npBuuwdFkY8Ac",
  "key12": "4Bps9nj5s1QUSrU2yxb56KDRKcCnbHZHb5Cuuo41Wnkau3hf9kGg5U1qNxY65VVeiHdHD1eEbH4mxk2aZcMA4cP7",
  "key13": "5DYCEurAgBe3EohjVmyJoXhp2VRHGthy5hD8AANt3DzioFdfVmbJpZaw4BAVnMM6TdAnxRiXWocEshd7bcok8gFL",
  "key14": "2TP8dxcQZDZhLqchfNcCHzCPb1XNAWPNJKzpCrCmQdQuYTn8qB9EvxnCpL47CyqvcbkNKA84McZ2W1UhijNyhuYJ",
  "key15": "2C5NGAVSeEhmnAnzqJ6VmB7SB7cMmm7MQrYyehufF3jAuYZbEnxo4fqGJBNum6cvzsiyFpnSDnuF5QmZHX2sfY3U",
  "key16": "5kYAQQ6TSXFR9fPcgoqiWfeH1UeSyRKiFnQg8mPhTkHcLaFkyHzhBoex9AodBn328QevTF6bv2f9bfMQnzZPBeS",
  "key17": "476Q2RSLpa2UTUTKBkQdRFt6SpomUn5t6fkMdeTcWGZwqaGqwxaEcYM7SNhMHiGYRwxzzSRuG5FzPgvUBwReVTuY",
  "key18": "3sGv6NR3pF8wDbMG87yNHirFr8eR4fBqGQRGqSx3f4z6r1QWwmsXex9K4ghyf7tm2bm1d2Btgycxo7NxyaJVZcRo",
  "key19": "42cn73Lv5wBYo5h5tULG9UdHRPz286zXSfjopR9KsdJTiFPwH8mdLgXc14tw4iwjyDoTk6xPChQaUJZMPnTfwfYa",
  "key20": "3FD94FTnwyWhJFt6pEGfxxekHZ9sbtjJfAMkuyCgDejKacJbspShuiK5nVWJSkLVE1c3ZFVXFbbKhqqu9S8Fx8du",
  "key21": "E5oYaXupQ7rKR2bGYSzdkr6UJ5uRGo89jLpTDkjuV1uX6C7hqVfXYzW7WEt6RFgH8n7Wp2TGtuZ9d4Xs5ykR4VB",
  "key22": "62zMnUEhQ3CxTTtT8W3JkFK7xYecDguNActWF5gQ7tHpDktCkLdgonqVgvi2WCjGfrxz1iY61CGXLA812cH7fTek",
  "key23": "5EBUyysc9XGUL5KLhS4PLMRewgaNRK3r8WTcQuJK4uqApWc2yD5D9Ri1niMHcVnZ5koSjvECjHHHhj3ToBwzkCQd",
  "key24": "guT1FsWzx57ShRkEdQnHyxXcaNsSMYMFhXqsxdK4Jd5p3wgmAoYm9PBG5WrCux89Z8ASzbvuxXNGevkPJtbj17Y",
  "key25": "58AShSsnLyXNhpRmwwPewGAKJ8fgybV3deVX3kkBSimkJFw2DjMxgWQkBWHGz9JA6xxeWpbswo1ZWjaz4Y4vX1d",
  "key26": "AzJAzvcTcySGAfP2LJvNH3nqJVKBmt6wMVTsmKFKKJhsiTBwojv5QLe4x78HKMfWT9Z5kK7tvUcLRmLwgHCcboZ",
  "key27": "64QySUgi75oZkkq6YQ96hPWGAspTYuqC7QcC9dgis3NwitrXMRemKtFF4hPNnanSg5qhEDPUVnF89TgssrqfJMBW"
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
