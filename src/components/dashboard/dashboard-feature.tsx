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
    "vv7N4vEpLFCKWfivKti1cQoCXVCMBxJb1mP2KmwwwRDey63tidpSQZQDwFWjHUezvDTRJfyW72VvNnhWnR7NUYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjuGn3RkdRNc9fxscEzQjLhBKHKfqW8CKF6NqGGs57Dnk9wZgY5Doqv6JTvvqooM4HZD1xx744tsGcvZvFsfE9r",
  "key1": "3diqiXAu4ZBsHnVnQNbe5ce2Xt1aK9QQG3XZVa67vCyR9uXqK71oTekp1qRLLBAZ9oRCcBam3Lg4j89Lrc5nEHkT",
  "key2": "5iqNYFEcMgX4V7ry8f3HvYQX9SFKeWnCukE7mKH1ZZqm8dakrA2mxN6AHYuraSaFu1n6PmXPBJWP7t6gYgNjHwjv",
  "key3": "4RZuNeKHYnwJyeYvbDhACUngCyTowB4PXGawX1XECx9gWY1chBY1VNmuKrrn2BB6ynd9HUSimkHdWnJ4cHbUeFSr",
  "key4": "4JDb3d3h7va2NjXchckX8PXygL4aVrRzaCFLH8UWPLF9AmXsuTZRU7aeVUMmFRKnFEkCCExbPUEyNTXoxZbfCgy4",
  "key5": "2HQggCwxH57sBheDXxHHvagEgtLJ1obXDrqVM29eiDwVMjC1BMwA39V3rzJEsg3t8PYYPEAFy8TyBNJ3ZJCprZwZ",
  "key6": "NvRkCjtFwSfAzTT6zjTZBMB3wWEN1VNXRZAy6rGGrnaVpFcLPSZvMZvNBsKaNPyVZZRov86m6JjiEhyvgxU561R",
  "key7": "uQ6r4whUpNinimpUbxCAW8heQjkpdfHTamTAFm6MGCeZH3wZicHzNWX7BPaF2ianZob1fd37oQTSfPfY35YR7p5",
  "key8": "5szFiQXKW5cJwxHsi5Rtd57AKMRsV5CUMywJtrxk3RT6GZ912BNPRBu4h6g8AfCJdm5fbwBxiC2rixNLxe51B2SW",
  "key9": "5dbZFEWC1dLzxxqNLb7XzN9Ams8rkJsQdtFAg3QvsU7G7S7stF7uAhMLYoRBYUqQEhRVZD4SjrH738ieyHkx7z3y",
  "key10": "56zKdqQPNHp4JqNrZgXpcY8BEP2fTWZg7oDVfnnvqcLeAPsL4YUfUahCRryLcnEmPFHt95nzXJt9dGSCr55aS3G2",
  "key11": "tygWjB8KzoSoy6cDhdzicSuzJLMTTvMsVAhjs7xgmXfZt6HD7GnRSdjoknWbGPkKQ3Mz39wPRhVxxk1bo1avBAL",
  "key12": "24k9mr9NWviRcbXBW8MuDijfkPxs16JL879AJRiRVSBmgLYjNyTgcxj5rHQLqWncRJQ6d5FLRX3EuYUtQhhHgwSz",
  "key13": "3W27LcDGBjXmxYqy2oTDYfRXwseNFzwz2ucYW6BugRSTVNMj9G8SVntwVGY93NWBYPTY43Qn4ZZWNL5a5rw4dp2p",
  "key14": "5LDRDnR61HqLUYzMy5RTH9vfYdKTEpYTk4GNEkcrDyA3Cm53g7Vx7CxiJGxgB7wBxSNkoHj1xvzD8m8Xsvf5CCMY",
  "key15": "4pBWVqJovGvSGDh8mmeNWaRSz2BCdh7EeHToGwkD46onwmYeY9mjaPQbSVhDwH477WJiW9AgYtnYjuacVLpmJj5L",
  "key16": "4EyiDWkMX2avQPJ5EJsW5STDoRBuJa3qrvAzFLZcJq2auo9oHXq6sFbeRd33exc4ra7L1H1S3Wch7H75cWZBVPRE",
  "key17": "5hsAPkVzpjRMhaAWpK1pfbXbeHNxm5Emz7qcCMy1JaD6BwK4KU12seGBj2JFUHPwLE9za1Rp34QLLvpTxZRvsDiQ",
  "key18": "vFjYqdHfayPfvpQCBkREvhaWyvVDhZZU7dr2LQ8dhXJNfDYFofgiqwgAb6tsJGhJTX4XAJxYEebN4EhNz8sQzQ7",
  "key19": "3ovRWFWAhSLg6o9d4dC5Kx9c3GPgQqpWyGKxRPoJp3es1yUCPArnAgNf2vF62HBkn988Ljth29eqdCAtZnoRsiyN",
  "key20": "2vp9NUbUyY3NRRMfaYzALVZY9MntRiBHdBLce8Mtegw4AC6EP6Ms4Q6s4tbQM6eYRFL8Jaidw125ExPc3N6JzBVe",
  "key21": "5H1NU4FZMGjf73wq5t4FZcBZtJDAMw3zfG3TJt9AKHUpyJa8r2of313EUimHGBEZ7vW5E1m7LorcBG4W3RLEUUhM",
  "key22": "2tteMxVxMYAtqFqXvbEY2hxVpJogdttmAbK6mZo2Q9qxRno3H5L3fR3V9QPhSe2hqmEZuUstmqWYjkLHdo7GydKU",
  "key23": "5U162SCmJbWVjrESptBLLh5TPua1eo9kRWD9wxELJjwoyaNNBpYfWiJ9g33iViEmFG5iwgtuLBV9CTbW9y9Jg3mx",
  "key24": "23eN56ARsp4L8u5h5wrwXjgKBYSjHVF4bVUtQXyeiJWLY3T5nuijp5WZYhcmJY9ZZJgQGMiFAyLJ2zDoCMANxrtU"
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
