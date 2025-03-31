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
    "5EuTnLAkUxbvrGGmm3m5331CQ68FY9uDCbjFnVtWyLTF8V7mjKMuXkVUZCoGCJkbWRKprH6npidT4vhhHiD8r3KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65btwMvTRFv6UbDuRvFKLpbfZyw5QWqXDaQdg28mnQAKJ8BFmFa7r9m2Zk1q5dAi2caJVti8Zmt86nQX445q1NwD",
  "key1": "TZSMUYF7PQhVqXbAChcLPezUDsSd2W2rYMrCTJZArKnjkBwZgg5Mce6wBXbC922ipCYJgUuuCpqHtPVZofRimhr",
  "key2": "iFeRBAAcuPW7uoXcApMd4QrFgHm4UTa6Df3rRpbb9fKZ2PtGa6An8rsZUMjgSda13aKwd8ttwauno24UfKaiqzf",
  "key3": "2cjAMmeBHk1mcjvMcqe6Lec3ahsbyhb3K6A3vYGx9jKrjR4LMbRVEEvp6pMZv5s96NWnrYq7gjgdrn5Px4dGz22w",
  "key4": "3YifBpY72qDViCa7fdjgo8dMN2UDm4ybxNJSBTcHg4PMGUs5pWVDfuqBZfFxtvq86px5dCNTpDqBW9u6FJHyxZCe",
  "key5": "4JpuriFD6yeUcjtVRDSjBY9xeHMNef6iGetnUZPJAYzDeX7H6MB4mQYxHXQWzuagVTT8vyeq5cGdiY9DGRPUT18i",
  "key6": "4R1D45BLbgbmG3KbWrJS1JUfKHmb9PqpzPKFqmBtfymR2cj5SqinYRhpaKbyJcHc62M7He5TU9c1WP5QKdj2n3aB",
  "key7": "5hCPPTLA9UMhP6TToccJgAiTxLwt2UmDEnXADRBVV4G3JHBvJjwSVKuYKWKuAgpcHnjxXAgFS1QsSmE4Bqm8xePA",
  "key8": "4oo5M2SaFAkAiyXik2yDCDMqZTqYPGBNAwtYEz67J6t8ChquLY6mbUkvJ8CqQQMEgc8rGcEuYDc4c8KdqdaDSDo9",
  "key9": "63F4EXnqy8XDPrADn5Lh1yX6u9UK7G9emNggHvDuDA17De5DXar23aoPtVUk8f6bVWquyySA9p14NPgQr9mgXVrq",
  "key10": "3AT4hzM2RZTZMvXs8iJAHy6p1sVi3hb4Siho1rZzw3bdYzPQ7vDv6q3Ja3sXMkVX9a7ajH1XjEtNeeMZ4c2wknbA",
  "key11": "43MRC27eDgeYB9dBemAtirXdmHLJBrh2zGG6kMcRfrzXCLTaeyaFZwD4UUUiARK8uXQyFPds1ghSoGWBfr1w3NZc",
  "key12": "3UNWtHqz582KaTPfDuMRuQocQaNXYSQg3ZPBM69gHMYy3rjYEvLm4YNrxoqVnsVzaWpkDiSvTzQMCNjsExBBS5fx",
  "key13": "39osbBMxkpFUD4Pe3oJ9qk7UXxycaPoL4AHRew1TqMSecRVLK5ihrYqTwd3LfgF778Udm1UwgT9uF1D6dqmiXSsP",
  "key14": "5S5h5T2bLUgL5rQTgVJobSUjTDA7ojkGCvXdiYPybmZqoTTrwVHM5L4uHHAfQsbQu834dCfXYAXGmKGnLYS2bF9G",
  "key15": "oekDZpbHBoU4aYDPdzN95KfCZjSVWVYc6VJKrssP5QHCa5LdBdA94vQHJQdoJyfGUuPuNBevKKRk7NkfTsDwCMM",
  "key16": "5uZLRkCTZpMkuN555AXamNTAmyz9g8DyBEoFFVbDZq4h6rumtWjrrCm4cNCp7eFaTsQtM3R9VY1GGFKz6oTwEuxi",
  "key17": "4HM4So3oNhYybfoRfsTFgoZHMu1kqvdjq2hLHDGsWm13PqFwRNnKXN2rfTS4B7YNynAhDChk5CSgskF3wnB23sru",
  "key18": "2ANA2ua8e51vFBZ9yoSb6Sr7p6uqDzVM7eJFd61bMby5Qo6kWSHWYv7dPyMUtC3KQ6vDdURGN7jCx9M2x7oZYeQ4",
  "key19": "53HcNSE76d9DmJZdv6xATe3y3FY5zGW43DJabEJVs32XBmagqEuHDpw8Fc8fnyn88xKEJkMUU5mX4d3i7oAvXQQR",
  "key20": "5WTgWTPWUSB4UCUNevEp1id9dD71H8TA2g7wAoqLREqHi4pQskfkbBfzovtNf5hYY9KpR9p8ErJKc4yoiiFuiSWM",
  "key21": "4UfJw7GpzVZEmX2g8NhDwEnYKJ2au7DUfBai7VrjZG6wudqCntX32VQBwiK8FJiUaJAEyCioGGKQECGGen35kVqH",
  "key22": "4v1pXJUAjTZqmBMoXr41VDGV9B3s2ks2NgngWydZufEZ2WK6Ppic5APMYj5GfoR22g36MZuxM15abjymC8f4429b",
  "key23": "QSLSedXDPgG3pWgX6KjFdUuJ7EtR1b4rpC7VnHNpCUapuz6XpRG47thrBSJeJTckX6Z9j4PNTZtcXZ2v1DDMfiy",
  "key24": "2eGbBPDRvu7k8acfo3kNq57zwCo9RwYcqi6gPhbWAQsWdjfn6hggT5FRNwbGoZ4rudR6iRgA48vWnW9kZ35291uv",
  "key25": "5CxVGp6PfDEK3cHsWJZdUHFKrqabmPHZJfwTLvHJ6zLXyLei2rwgi1px5zqRhJKYXYVYkGprF2ybqL6k4oZHh828",
  "key26": "4c3WV1xspYKBNtPDJTWQVDxn77Xrzb83vuAfMgtBpEoXiP3d5r3ZLvWYHHToEJQYZd85nm4aJwv9sbT35GhmmUxU",
  "key27": "2spg3dMrVErUNBMtxF4KJ4xZsv1rsueMzi8w9jxjDCV9j3PXNeAohwibfKegpfz6cVzp53EZwMW5Z1kT3SV2tRXq",
  "key28": "o44c4a8Kfk7MDKmwHqmnpRUaeHttD8tTFochqvzKqS6K6L1qdpob8e5qVbbAj9cCjM4PhVzZ5BUYuXn7ZVe8Q7U",
  "key29": "3BPiBEud4NL3PkBy6VoPeQcRfXMvHyo5pPHbgevJYwxPsx1HYbsth9PgYVW1ED55uV9M3b7socMeZLW2RgQ5eCYN",
  "key30": "5T4829sZgwkP4Ph2sFqmhPRX9FSyQQUkC9gCSLCttnqX92x4mMHm2oabcEFDycRMV6qPnrXTtcuJGRgj7DWkF5a7",
  "key31": "44Pjy33k4zoqP1bfxYvxqpRzEQX7heW3Z2jTgGY5cwK9fCz8GKUFBa9KKuFjiWvqCPAfgSGkFcPowDziiDjzsUAD"
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
