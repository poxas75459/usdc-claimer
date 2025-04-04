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
    "3DaXhGJNvprQgJB7uPUEAYbxkUprUWkwcmo16QCF12rMwDRaZdJgBqskWARvSZrgiTU4fT5QJK7oBJNA1PsWWEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2goyVpbaxTZ9Fs7NK1CA8KjV8gqURr2g7LVkBxtD1i77aLXCWha1T28qp3mN1tXLEQsKhZL2NALSns36CXWLxpeD",
  "key1": "XYNQtJ2BEdHHRUuPrj1tRewH5NYvYPqfzDAQpxP1C1Jd9F71kXEtfH12WEJE185BUxnsAofrHUqDLGAyCXEvFXr",
  "key2": "5jsJ5qLWUYD3XHUw7VjSD7LPEsfZBgg6dPV2K4AVcAqAdUZCU784LbfuQR1CjatTwjvgY3Ukp9DjdfgfyYX8JxW1",
  "key3": "2qYU2qWTeqsMY48UEJBUePrXBmntjsMCcG37vkxWxiXcGPaNy3MnnDcfTC7W3Xo7JuZiC3tfnU7JAPz9i26xqHCv",
  "key4": "46G4FF24SZn3Aotc4jAFJCKBUgGdHCSgc9rLx7SQnVcQdPBmGCCiy1ewRriHteU9d9yd8YDSd2cyANtzoqyK88qf",
  "key5": "24NSvESXTSeEpWG9ghiFt6Emybq4og9f2uoAv1vEiF34KQ292y6Hhhmj3Q7DC5o9fw2W8eYm2ah5Z34ik83RC4it",
  "key6": "5Z7vLuZKPnye58KwwBZfNeKCfqyeLwrJXS8cqEqNEek5vvK5FK8YRzfqm2gFuYDntB698Q5q2Tckoik8kUxQgVdY",
  "key7": "4ECbfs5gXQ6mFDVMMChF96ss6DatBb5esa8DarhgKQnkAK26K8uBHBzEkyiMgkHCo9dxgDgqUNYFRV47t1zVoBGb",
  "key8": "65u79di3R4rZzEx4ubJoybA5YzKhYud4aV7euymK1DLELSCTfmDrMPBS4jQFmQeeUGQivzX57J1fa9Dpgi5WB9cX",
  "key9": "4F7qkiDGVMheMasBermaQcFQtzUUJUJAsfDzuiFgzCtnMhqULCYzX2bN4NPsCDsEV1b4sCBS9ehoBcEK74j5DKh1",
  "key10": "3eGycnshMQ3B22VE6SJHAT3J3G8qnA6hRf4VSv3hp9PFLnhudFAUXNNCkgVuxLq6CtvzgbBwwKCTMXGCZnQBXWdW",
  "key11": "5EkUeAd5rL7zPZEdH7K8gQ7jz94TfSQ3MrzMzc7WSUdgYPV4p17B2SZeuPxXqKGABh7KULg1yNmh9tryuRxvfZqk",
  "key12": "ruvyPvMdQYhc4RpEXB3MDN9ExBXnyJj77tYR2RuGB1mZ7V1DPHYb2N3Fs8cSMFxU9VsfAKEqj382shM5eEVJ5eD",
  "key13": "5SviVWqzVZoMgMnrTMN4R9iQaJYmgQAAdfZbdufxMd6WRWKaXCJYrnnUbyzgYSAGFXyqK3MFNMzEMSez16MYMgZ9",
  "key14": "3FrQ3LSPcmw2khSLyAq3PpgTRMUhQEE7yJmgrEbdpmyiJyCvC3AoDmXyDnYXrkxdwcTAEpPv7uigKWhxzK2VZREr",
  "key15": "4hxNAW1ojW1m3YXXpK9tLqjHDkRqVXdZhQTPdDyn55aGQAPjdQ9Jrou6fLdJGciBotz463aMGU95L3dJaM8KTg7G",
  "key16": "32dB9xKDxdC7m7tvnaxf94aegRZETD64iRya27Ym5BkHdJbkdFZ1idLV8G5jXu7U7K49oGDURy1GTuzHVYooSeJv",
  "key17": "4PMLUeABwXNh7NUEr1Qsvoc4AC5RY3V2t3ps93B6EbMbFQ9L6NWgA4E5k68DAhDuc9169g5aJQRe5h1eYLit1Lc2",
  "key18": "MsMsS7fW4kY37SLKvfZUP4m5pC3jtC5VqPVPd1nGvP7Nx8FEtTvxotF3dqYcpTQgJHE3RsZp1LKon7GZkyiYPQE",
  "key19": "4HXMKL7GWMRWJ827aFH4ETcRYQM3fheN3kAoDiuGKdrb9dS8bMsR8ix8UpHw79BUzZvdBJfi1mSafSjFTWbzY6Ug",
  "key20": "286mZWcJFHHAQxDd7yPqDfFBE2h2qQUwHzebL5oLAnB7zDw1rXkGhKXx59tceR2xFFqBpyexi4CzMjRzi3YwgAMd",
  "key21": "4JPs2kcno7nX4GJyJhxVfgZVjEMoLEYLoToSQmz9Mwyzfm256Xgr4dUBccoKyBZ5pnek3qd4A7xvCgBvqtZv9pt5",
  "key22": "TqRwk4UkuxeWcxUY41MFGmitzzXsih3WPknrFJPBQeKH5jWRj3MbP1dDHcPR3fZJRUScQBTZe9FLz2vv7JSTtqY",
  "key23": "4QoSW9UzqjvoYXEdszfZVamnGdoNBaZ9jZXWXma8x6keHcburZkKmi6dvYGNqDhqtVJhvwoWWZtLWaWidzQ19DY2",
  "key24": "5KJsk3CC3pTUhXH9rfE31YoGcesNkUZ93J212tyyoXVoJuQaB6wEXQFf36kqMXQcGEjW3JDgV8zF2ZQmmaMbBxNz",
  "key25": "2fyVmZuNvJ97Reo4cLbPuzYVmmy1gPNi9oHoGVchumFFeCTZNvoFJ523RnX1KiEsNeP7NeCS7JJ2PUxwRVAoNYZW",
  "key26": "34S7zUTK9LjqmVq4NSRcN3YqFuUjuFEXHNhfQQbYExorKwHh7oJUMvWikVhpGUne5QF9SBf6SvrjHFEgedz9qyWB",
  "key27": "4eV8MpsczQ36XhJNTZxNyMX67ZinZcfJ2U5999r1o6xRad5oqHFS12PdSXPVKXj1jZ6DAXSkYVAF24MvPs4rVnp5",
  "key28": "rXoTsrgZXigsYSWvMeNGiEfcjNyZJHNUKy67pDQaYniN9vY8Q6KbaSJ3bzU8pg36M7wRXmr2fQm9Eitx6F2DLzL"
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
