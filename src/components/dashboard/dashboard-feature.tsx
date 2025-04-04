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
    "3Qq3HDW6K3BXCWU9ocRnQJJSbdSewDW4ns7ovornuL8t5rEKxs2HRG4noQCCyssGD4v13e2Lw4H7Jv29sbXz6a6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vhib9y1Wga9jtByKpb4HQnkxTHyGZoonhqJwCzMQGQ4HNbsdjoKyq7PZ8qxF7Z6btwwFvKUVWSJ4cg7hSthGmgV",
  "key1": "5yzgwAQJPsgS9xvPDdCdbWsXXQ96Y5MvbWNhwU3usEyMpq3SzDefC2AYNEr5KyD38FbZZYiy8zVjhZ6XoxZicBhr",
  "key2": "5piVoQQfuUiwq9FwYhpGtCZCPBruugUctt1aRSaHSvAkjrUyDz3StnuMJTBAqfceevWkPqd1LQsLJT7THtnEubgd",
  "key3": "33KAzcwX5nWkXJKqiacmhgRT4gVqYibnoG4pihhL2aGSzvqgGEfJshVRjQwcmsovkyivcDwM4uFSHhE3XLpnuMQU",
  "key4": "4U86rmuKpS7HCQXBtwsGs5mCoDtBCc2aGf3sgFNQwKiiNWCdpw3UbiQFj3WLHAMzya4Y9msbPbHe4KKQVok5NRVr",
  "key5": "PEBK8Soom9MXGC9St6qdXv1WjiDFW1EPCx4PcS2fx6c39vWLUd9Ypgte2w8i94P4zLCdYVxvhctzCSu5VYPUgGf",
  "key6": "vQFD5uF9MMinTHd4dvaVBDu7h9Li3YoWPjCHPMoxy4yojT8W1MtvPNnfCuApWJXEKQDhkizmXc8emywzvhvjXFi",
  "key7": "4VfBTA5LizEhtEayz8JcG1dEeDzyNJUimBAyVe2xt4vdA5jmggYinys15R2MDLfs3H46hdg62Z2FTWYBRsSQ6oCd",
  "key8": "5rdrBe86R2YC9uyxvjRRZo6jmaancuWvG3Ue4AbQ4bpnGtTNfs5wB1ZsVk5mPu5cEWA4YyNh9u2fuXR1tC5DpDGL",
  "key9": "29GNo3cSJ6RutEHYXsQ3yvBdnvzJfUdCApvNuGGSSomxYffLqg7AcVY4mr4c1Bpqr5z13bAwE3N96JCvM4ydJQbr",
  "key10": "n4sALscqjAFF9xdyvn4HXHNhEhAoGT7S2bVZbv2FUTSh4fTYNodMiTicezavJgGU5uABC5A31JY4TKkJCyeCQTr",
  "key11": "4SDNz7mrxUeXPRwpcc9DLyLWVTFwBNpeqvuZ7PjcdQzXasMvJLXatPFupj1rNNG3P3BUckFJaTCdxQGgyi4aUQC6",
  "key12": "46fTJ6aqPFupXpuPmmmirB7GYY7H71XZCVU1J1mHzGzUuM1zRGJFqSiH4DoKoKKTAM35StPM1HqmKZYJjWBrFntg",
  "key13": "7PgCwCNX7ar1JsMZr55eP8cMQm5KDJ4Th3opHfD3u89mpRR5V53sRWcgiYwQqBHr8EVkjVqxDmwn4SWpA3pStws",
  "key14": "3kGG78EMX5FPjQcPYQhkpfzJ7DcpcymeP9es9SG74BMvM1nU9uqf34Pb5XrpQyGntxnHzQiZYWDnFcvgccjL5NaN",
  "key15": "3bRMNXpkPWooejKmMHNF7rKKd3Px6rAv7nvHPq9mczQgMKzWc2N5NaGeiU5Jdbyice9fPNjLMgVeqo86ZK4zFgUo",
  "key16": "UymR7NS4CX6jj5fsZ2v5peg2BiGFuuRc4trZBohzkkkniReAk6fPTaL7eLyNV6cSaaZC52yNWUR3sMsUfSx1YBY",
  "key17": "2CZ1chcfM2TyRVrbJ6YpCZMsbQHS8u76qjs5MBi3NqKrQadAxPDLzNw6mQDH1tr3N2zof9fEE1k7TdPEtQ3QCG3j",
  "key18": "336EMFwHtg9GcBHtEWvrccRDdUSdSb1fJ6eEBD75Tnb28G7rx3uvkpnV8kvBDzsf5MxkNkuxVFyRTB3k9qGbbLoc",
  "key19": "kfeKzQGwqugF6dp7LQ3Mg4TUvETAnXRynptFeK7D5LtUw5XfuUDuKXRxe3Rf6UNRv3dzbz4JJgQj7F77VCHMGTG",
  "key20": "4G89rhFgRc7Pgh9cjqEuaWmJmPU3DEUpCJZo9hq3ouYiZbponinTXVahAaEfPokPWMhAM1rZvBgAFQ6nW9msTWTz",
  "key21": "3xGEYGYCQvqy43Ad6cQfowqzp8aP9JVH8vtdLt3vMoSuDXP6o7uU2xEqw6ukMWFr9WyM6EcK61hq9wTN3QueCGms",
  "key22": "617kR2RzHpRPAo2kBiyd5SRzv1SkvpFoboLgLgLAJ6mQxToURKjiTQNH9LUatLAZdNnQ1E9wDTu9SVS2UfrCsPcZ",
  "key23": "2MEwk7Vj9vh9w6ab7RWxgWVAMiQUuqfdfM4eGaonDn7FPcPnU1yvDMUzp2BQ8p7Lh9wS8ShCt6LG5JZZ7Nvo6A3L",
  "key24": "4eXcGbDWTVQhfMR3kJyoVWNo7ooDVvTLkvDkWB3wPM59M5jgr61L5gttvztbqoQaNc1HaWMUfhwV7k9QatXsG5Km"
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
