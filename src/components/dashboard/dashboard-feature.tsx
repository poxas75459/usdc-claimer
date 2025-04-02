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
    "2gZAJp8by1s2jkE59DKwMbdf6CkLB5EvGUE7bNSzo7ky91Gm7RNR4ja9FznUp52qzhFHiDMjp14gWmCKdf1MTNQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mn4hqKC2zTQsySrvnGbo4oZW5Qy5dFJEdz4J2Ue4iCCtUtQdjL34fKRDSP5QJaU3gKfsfVQggurRibrT7bx1szh",
  "key1": "2tzMrbbFxAtYj9HaM1xNZ4Mpqg9vt395DrFzB1gjefnLp8xEbcx17ZymCi1Z5gL8L2d8U4Rnmpw77LpMuGzjPahe",
  "key2": "uCJyQS4uV2xm3RWZQehJPS5TjcL8bqfFkNxFFge8jmwuDE3eCqyWAeYZ7NgSwwXxzTHDGqVQY8T9eRtqcBxuUeo",
  "key3": "4XW4pwiWAs1QTwfRCvXfjCvk2J5qEZmEiB8J3F3kdz6SnvWgFsgFbsW1ZDWGCgebtn7v8y8MfyJzQyz81RoVJM53",
  "key4": "4LDKRyNVBLXFb84DnYEMX4vu7SET5cytHCxuzCd5ewTviWDyjgQeQQgwNyTbSqRSr7pNoEAxQGFNd3FCSzL5rVj",
  "key5": "2AMsJvXwTDc4KfdPq5m8A5Gbjc6xFhXhxZYESbVbB7FJ2SPuqXHCdMy2Q49YCGuReU7VHuxSyJPmxfBu7mBawpMv",
  "key6": "67CSy2vvyZPuSdLPvySS9PN2MRqDTmcD8QrFfwbRJqZdZ68DaFKJmQmb63cnc3cvKUdbPPqH5u64VLNuoeFWCK7k",
  "key7": "4AGmSQoBRpsnhAQVkRdCsQKGMyFB6SNTLVpqsVHa5wtmnL9uam4A6yztsoUtrCw5nP1jRvo4EGdDHT1AiCumpN1H",
  "key8": "4CR6pyE3C9umUBZXGqX8oQWzFsQzo8yX5SkxrqotppricndzKGaDUKXax8RoRHAiy4NYb3gBQixTQa1qNxZpE8NX",
  "key9": "33jxhkWMGRA7F3qRxR7A7nGwbM2mjYJsoEZWLbxGo3gtwdrFLRYKxdhNWmawmzV1HhbWSiPpvMphRGmpoD4Xa61V",
  "key10": "2SbAxyuFYpsZNeZHUgTUwtoK5jDJxW47fmLuJcbgqo7QuJS4WuwojfrvZRJBQNzY9v74YZAZLht1d8HWbuzCp33w",
  "key11": "5fMiKYLeeygGbcJbFwCwC1mH3dTZp3Y7WUrPPsZFNza3Ybz96WGGCNZsrjGGFNfcaZSdo3BA43yEZ4ciUsw2ygVn",
  "key12": "4UeohfPF9bN2p5ZbtMphiJgfP5BXQ9ZLD3J1W7iM7r9eEqp8KgYmzNCv2LH4UBfVoVWsqYjTukAsKTuGHmPP4Jje",
  "key13": "5zWr1GnmquAZnmVwwuhELdKvYf73ro75hVRykXdEMoV6PP8P4ax6NwCvEJGAYxdT63dh9zXWpLaJzjYtuen1Qa9Z",
  "key14": "3yR5k1BxyTLXGzsPDYDpVySFo8vUNG5GSc6YgNVtgEpZkgS3qtstGAweRdLYXZmZr5NX5x3MWtTCwvD4CT7X15mL",
  "key15": "5tV4p3s4vPN3NwqHrDjRkcbQDY2ev9aFWWAJyzjaJ6J84XoTZ4KpKePuW6Dvm1MQDm3RsnPtFRhXxJ4fhjScPufr",
  "key16": "5TcfAWiAQ1Ris88yNA1Rd34etn9sded1UHnNrfh9zyPT2pkU3zdwxnXwEQ475mK9SzwFeytQ1jN7zQ4tGurDUCCk",
  "key17": "HQXshhF8Eduqe3Fe8TvScG2oaFqGjnff4LYS6RK7ikNeFPFisUrxxBpdfhwMEjYFK3D4txEsEBF9QFmZBsm151S",
  "key18": "2PSVGy37VFWcx2zQFixBzKuCcBed7m1VwxfsPJ3jEgpCnLsAqifZKBmLyuxj3M4gHJBjj1VEzxVfLst9usDJRCdn",
  "key19": "2GarviDwUWzQXsu5F6coiRzUyc8EfCauKzTvVinTx3di5bLwnkCBT3u7Yk1BiJAq5Ph9JuHrYg6hov4B4ovbPbq3",
  "key20": "3sasoENRJHYs9mTsdm7pCA6vhT8waigqJmi6z4NrTh4dubNp1fKXRjXE9LXshouhQSwWHWBsroGWmssfARKF3JYT",
  "key21": "4iZ4rGnbBPsdJe6cFHC4mnziVgTDQ87zH94aAWqkFryMBnFAdRRkRW1NEafHmj36AR74S3fV75rEcbFu3MufhBsw",
  "key22": "2PD34gAmt9XnGj85kmd2H4oyAenFwkmBmFYVNqZw3gM7edZfm97Sr9JzbjaemzWm6SHYp11gMu8utSJdbjbNH5Sk",
  "key23": "2ZrJHnC49fDqbZg84bpPXDK8JgfZcu5PVkgR9NpeHDE7Ysa7rD7EFJeqNFAKug93kCdNq6wEgYZt2Q1ofoc8TenG",
  "key24": "eB7R4XxUswciWqDAVAxbqoNmbNrwgMDqPNpw6bo9vdnhqDgRvGVE52HTYgRgHYSDML8GPTD1rWTynNPCF9Xzxpm"
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
