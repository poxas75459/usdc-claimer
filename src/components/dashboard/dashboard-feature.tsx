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
    "GEbcNhGcBe3Tk3uY7JAzwBBabEEn7XcZC9kGNK8CxjCmWZ5J1Rup3muC843WEbaXwjgefsXDfcCxRUBtvWHQkDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EzBQWPmVUnfTFJzKvscCqbMFWxeVbBWK6ZAxfBUB8wjFjzFuLs4j72CwMHw8o1JD6k2833xxjTW486HjeosvFfp",
  "key1": "4q7pUBFFj6147T1JFR9BYtgfcvxhbg4cm6aHwcx28x6f5SPreLzXx6tFb7UFPgb77DmMNrx9aG8Gfgkm8RZENaQG",
  "key2": "2CCetYg5hnjFzWhnb2X2nUbuq1erXFJ8eLKDqmCJhsxbQCUxN8Jrb9yuytuFFTCU1pL26xDdQaRMdtUwqXJ5zBes",
  "key3": "3b6GnMZX4UcwoetQsm6kttAsNoFdHkEmUiXdMzcmNxLkcGcGZm2DYWQUDgQYuag7ToiLB6uoNsbj7NkhvSTBvf5a",
  "key4": "5LCHEzVcq7AR8fgSRGfK1QWhpMZ3jFK5zFkm8RCRf8QdqfMA1JzoyqKYpyoG6mo3A8WiTPybDDuS8bDxENqKRSVs",
  "key5": "KiW3v6sXnKag6ynxGjjtDi6sxqFa2GtwuHGbm6ZTR9PVBWN5nDxqQnxXti4eZZNxBYdXrc6ogUE751TakWAKuED",
  "key6": "41QhSdsvbELmAmoYuM139ivtKMZHsYfcdgFxCy7mmiCaHzDaJaFwapRJySKBPyr8b9e16diQtknQFC7Eir3xfYE8",
  "key7": "5Hy5y7iWKRvpPS8wKcZUxvehr2vp281kuSQmRAUuFQ9TKfFqu4ZTCjtGBaiiyErNhdy8eUUmWMKPzWfzdGtdUqb6",
  "key8": "1Mg6ChbzHv3dgxoGxCPMdN7dBRj1oCMK48mkBdpdY5tBxqhpSxBoM5xMqkJYrsQnPjJgxPwKJBK6y8Vu94Jrh4B",
  "key9": "A1KvDo5gdHw8ufjWdcyUpLSXpfXDvQGGPsxxLj8WPP5dhYSjyfyW8o2AxwnaKnAQ2sEp55c4EFT9ZafAYFRWGxo",
  "key10": "4My8hqH7vL9TvMbki1AkfwSiECPdXxnC2fZyrVGnTxziFPVzKHg1JZ4N1jqxwuxoix8atjW4LiA2jek88Xid8GxH",
  "key11": "5eAnwQbBKWCNe87wbgf5ayF4dQztodVpmdaKuNSLGX7FR7EpdnkoLxi7jMYyCvNg6W25k5CDHyhoCGQM22cT1PJg",
  "key12": "fzS4HDkhjeS6QbefGsh4sMXhtVMiYwc1PuKcN6qEAo4QKF6M8BzjLKYVDzbRtskh2b6mJ9eQvWEGnesmRoHBVUX",
  "key13": "3UZ7oewRLXNxKztPCMmFQodVbnhYWCjdhdgN9N7VyMsWPdGPjBmhhftzrVdCvrX74d5NRtz73fRx5jSiWwZbAe6Y",
  "key14": "5g98DBZjX7HGKsUL7m57apraUvP89shspJcuW4n6kk6urGDFkcjet9uPLmx18bkZFx8PLNu7xsLSnsjKstrq6ww7",
  "key15": "Gxbu2N4fcNEf89QdrjhdoFRXykvvhLgBDAhCUQN7rsbH7guznUfHAqGmYtuWYUs2DUgk2btr3BPdiDoxBEpbZsx",
  "key16": "axY2v9mseJtWW1qN7Ayc1TYVYUVsszTj3HYjBMMEysgcbKhgtz4gEEyoXoWJWn9hHEkLecbodALeEvsJqY9R3F4",
  "key17": "5F62bz7iwMuGqC6Q9Wt4ydiSGtYKevpSU4y54ZDpounn5gAAmHgk8viifV5kSXqLxV7cmMdcEkhGN9gEmSubtENT",
  "key18": "5YbbJxTvPdKj6D9YDqLgjL3KEFbJjrw4nwpaffNng8uFP7NWztobpP15RYaSUttyygDyWJnjB7U86QF7Vcs8WZvV",
  "key19": "5rKn16fkrRdXnajQKBKRdSiVATGmrP9ytDcjEaGV1hYYoP3iAZKqcxX2t6QxaeXSjaTBa4DhVeGy1EXfnzxe2Hyu",
  "key20": "4mKbK3sGJdKLWtkT8N4byUQfAnZ1dhShmd7JweNsTTMumgHyDhhTyVADTFy62Hd3WuKkuq3wWav9ggHP3Ud8Gxpp",
  "key21": "5UyeRXbp2mn7DfuevqeBSqt5nfa8nrFuHyTQJtN7m9aYs6sdcPZKwbCpJpyNMtNCzB5Tt8w8gAkHxj1HAbAmNGQV",
  "key22": "QEAn5DYQG7nHNvjQi1A1xKSr2BTPv7y6fywxTo6JeqJkWKZpthTB7Cg366c8fN5xS3XxcesRD2aUtcKXEXGzrhT",
  "key23": "3mUsUDngiAb4NeGHEbxZtp4dNjWevo4U5PVaCcj4DGkknEkjgC86K92F1bSvXEXgwWtWt7qPUjc2rsvUarpUMR5c",
  "key24": "35E2taXbryYYXxwja5ZvXtqzakeaZvzmmniks2fjn37Y8tpYZi8XzFUqgmrmPAT8uPijtRSFkzHVRKL1dtsQVBuk",
  "key25": "2pRyGPRb7QTURB773EGkXC94igMvgzAHpMNQ1rHrnNLuh46fFwTkAPLxWfEtEW3zwkP22HQFzN5rV2KKXAkGTZaG",
  "key26": "3AH9tTjDF2BeLuyySBaGnRMpQ8tUPeLhUemnmqitZqM8DRUWiXuDLFv6XppyEc4UG2hoLH1JS2b8GC9gZMndPmc4",
  "key27": "4dV3PQqYijhBx33LWDxrC5Qhu8acXfuej3B4gx2ZgGd2hSLoFF8W8dzbfYLLKbxVHBbQzsPDyErkbjdbBn8pk2ab",
  "key28": "5mVX9v4TkSnnBZBdjhAQJxCtD4p8dpeusG58nSKxgxUtjDJNjdNyQyvihnoofkysoSTphmNp5rJpyLiGZBkj1xTG",
  "key29": "H7yGwK9FY7weY6YBae7QMEtccujxJXHrHqVVkpK5jTaSthj6S3qho8wz2AFixSez6VfjFrds4399FbVJdq3agFF",
  "key30": "4EsZGZDmYtrHRqy35LmyiDkga3MokcPUDDf9JCoZx5HajJCLdUmzFyXtoLjKf4exRRnkDNKXPUuFCdnB62YDEQsA",
  "key31": "2AT5tuigWYWQsRaNUo21Swz5JhzVdL2kx2ZdctNVcA6awAsFJ3bMF9zDQjDxambKJEBSZCfsSnwZUhgQ2BEkoXpF",
  "key32": "qEN8ftSfUJ8oAZcajNgN1M5oeeojcPN2YgFZtgX8jkSEFazZhm556fcTtZ991xca6F35sBMZavMvQGvH8w8DQRt",
  "key33": "3D1aHL3GZc3cvrL99ZqbGwgxDtMW67GqF5ojuBQTPq5GtaaYhWPXWz3vdKqajuA5EFBvRmpbbcptUJMxHvXz7Zgp",
  "key34": "29pmJ9HsRwAtaBDJoKPBKAWXZXCMiJjB9ZBsf6uz1WsjxQS2fBaoFACo6gn7EuBxsvBdHDMsxHgPbTyrFzEdc3H8",
  "key35": "rP8cJPQeL8kqXXUjb64NUD7Ebx4SMShC26ETLGRhokDETW9WLNJFgzhCoXsTSq6kXhiq4q1dwvL38KCrAjnHvzY",
  "key36": "5NRMXNPCoyA7nTLvUHf94QcPs7jeqPGDuWmQk3fQwTtLt7Eykab6znJ8y8wsvxmMgvhTwdAdXJJ4W5yQ7j2UL3sw",
  "key37": "32Qsr4ezt9oS58YrPHgnmj61isLJ6HEk6aYW8SMWEcsnVs1x86YDPyQH3nMpZQwcggQkss3z66nE538J8ciQpgku",
  "key38": "4EeYof5nJLmxqEXowxBK1TKnBixiyPgnLGEWvrUeFf1Gzsg9oycV428xNUUXNZavuPLfBpCAEaZ7L5NKhHWDg1hZ",
  "key39": "3FwurQ4jF2bHJioMDY51MHmZgtgcWUWqKXPJE93W2ankPSUTpEz8xsix4URxJap7i8qAv5y732JdECpK9eEnSBvR",
  "key40": "7G255Ysyb3nRWe1U8SDLtfdfMFCexUJDhzya9v3gjHbuhGF6cvnhSbPqdvjjehudPjyzxisoVGWdquRpGBUKwoz"
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
