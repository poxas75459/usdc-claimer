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
    "y1vWXA3TDWuSsxNRYEqL7txoVQKqp2FQYcHtXUchiN4DaJeRuj1PNy1iLBTV68pXNdRqK7pjzmH4mFYgbkwQ3vF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnezNqyaKxCLkmoR7WNASHr3aFQraznMVNUPF79UjM477MSyWgQW3SaPrnecmzBZ5H3YMnxJwyFgsJDjQpH6XaX",
  "key1": "2GcdpWSY6F1URv6nLh19STGwwwGyt4LVRQLJWbVNJBppuNcx64KjgVHA2H8FnqMixpiNhFJpEBBQhc4sczjJqVvG",
  "key2": "sS37WeY8L8zSjjrWRMbbakU4mCeN1rb5svbrTYdLL4VbNL9DHq3xLJqCx7y19B1LMYHWr1VuEkHdJobbFi3o4en",
  "key3": "6669mnieRQKy82cGjNzQmWxC82jeGMAFtscWnYafUcnP9hqMQAL4KhY52G1W34FdCctayLpqNxvmKmFY4qEBVGgf",
  "key4": "2HVQRPiqSqDtDMhAixWBpb8HivafHdcevK5dGBEE8VQtkvZ3tjc34v4h73jmCTnkVAomnYFswWR1eWLFMmAEET3n",
  "key5": "3fB8PKT1bDtqU6ghs7Q56XQwsMuBYL7jd8oaJEsjwWcm5dTqbuJxvF3j2KBj2qkt4Xd2w3Eg8TfeBiEYjKgh5zwU",
  "key6": "5HFwDNQk2J6KiGvv5J8GEVJmMtJwAXxQ7nHZuCFSJLPm335xebvE5gmadUhGMxr72H1aT1Y3HKwwGDnY8N7PfpDY",
  "key7": "2D3qaNxymwhtEJFnSuFTnLZp8dCBXgGRxKjqd8xSYiWZp6gbCJunfHcEYqpkN1iCELZbo9D1kgiC6Ty3QT8W6WP8",
  "key8": "2poE2XSRbPCGmM8cmEzXEfYXZ8QC9DLB7fNSvbMD5HBcPELNcqrX2YuHDBypnAfos2AmqyuQjq2uqa4ANABdXjqa",
  "key9": "2od9oNEnB9EvgumXJ7zXpUvpCgdsrDgSgAdVDVBskSB8J9hm33YkX6s7mGPQQeVAWE3MghKfXaQ6fh7E335brDGh",
  "key10": "3R7BvCSwBezCEUXvptw437onpgAeGzL5QRd1CLSgp5uSqDNWRprFSXzXQNUzh5RWhipfWYTd7bdmKc3SpRKawhzz",
  "key11": "3SYbwFAQSqNearXHu5sq9PCsxNZ7n9xi5Kx2U5kCkYapE6i5CparsuW6g6RWihDzTLqHqLdEx4CXgw9t7J3f1ZZL",
  "key12": "4BWbQ7TXicw6mieczTCFXw5piB34jRszMbw95cEgtXSA94HMMmpPjcmcgnpRccGTUZYYQFzXpCzku96brzPwQbEF",
  "key13": "31RiJ9pefsjR5q6mZfvFThc2tQa86dvoUHzikhdDP7vWry3kcgjPNtwXgD5wqBU6UtZrZhbxW7dukZ6r5c2Hz959",
  "key14": "3GEpD19cjfCdyUGzVxY7ijwT3L1tTb9VJkaQBcD36gooRdapqAPWqbpjVN3s9VxJ8F3iPGGdFsLj46X3rMivN9mZ",
  "key15": "2yQs9mu18ejppRNrUHWrgRSTVSYxzi3nAVsQt9SVSuph3dtVBKtp9DeJG2kEjgWfWdw7wCDNzq9GVVwftErKhPTm",
  "key16": "3WM9BBXffBP6dMQivA8Q8W6RPLeqzyw8tmjRp76GNpih1ZoRxxSqvwWMFBmjmqzU3kd4LQakF6JxmytzsJLLGx8c",
  "key17": "2JDyx5qBB13V7Bm61XJi64JffY1cmxjYKYmociH5urM13BivbPmM3wZ6wTmp1tWpAF8pCy9sGaCggDSzbQDiqLot",
  "key18": "3Gtb8pef6sa3gwAxam74BA3DGxuMvmqd9cbAteSwYDepYgVF7xHcqXwMhJL2tfukquRfcd795VewEcjKGkUaB1iQ",
  "key19": "4GPQm5PycGDNh4TPLn7p1CX5Hg249WheQaczeKS9vNwRgfkti91LdHLEPdVApPQtBDB3L8Ne7H6L7F35UpmLsdPL",
  "key20": "2hCD5ZDQkDc8SFgGBsrpZYXaHDkrjh8Wr1Jn73shTGQPygqsXvN3fZC1MUD7M2EMPGfbsCn4et7qgQ91dMs5HKMK",
  "key21": "5RphF8d69uZQ69ZnP1A6YbLki9BUwQGhCU7AeBr1PtfiWP9yDrRg1oPYondFRfkJi79dbSkCbMy3RdN5J3AErqEz",
  "key22": "4KHoqf3hG4BFW9Lu56dg14zjPFPUhvLhrp9EWi9SB9aigngJwZcFGkG3mE5DcCLt7h6Z3T8XYcUeJwAEUKbpDoJR",
  "key23": "vgmLBbVAmxUCXkGRiY5eDCykuaN1BJbfcH7ZyWpbkScDPVgoSN9XZcfC8hMnPrUMAsA2q2foffifB8oWtTC8m8X",
  "key24": "23pevNnN94ayFdNbAbQ6th3N8dSpMQJRAVrjx6ZPX65eZPJVXe24XF1ZroNst25CGdsfy9XEzDjn24ngzpHsYbw7",
  "key25": "5sP8qFdxTX34NHDHKF2Gvi8EuveLU81PGw62WzVQFgzSKDXTWVLPecRS8z1oWhjC8xKi98PijvD2AjsdCauTrF6L",
  "key26": "tyG8WateHoJR63FEXDzvLvWDqDHfe4wSXsVMsVprbc2iUTfANhbekMw9GyX8z5Wb2EYrDXXw7a4TVWENPELBkg3",
  "key27": "xG9rvUPekAk54si1MwJCbdxpEEs97zXzkEvtAozfn1HJnLLZwb3fgjsPB5NtdJ52io3GxxiL2aNgk9q4Kt7vhHb",
  "key28": "3DnukWFJi7fSScRVYJ6LJSLhY4iUPKMTusFYxv2FSy6xryysGMoQ1WmJv1HL8qFbkwiH1LnFY787dLxkF2iER91g"
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
