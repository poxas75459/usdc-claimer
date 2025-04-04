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
    "Z8hbBi7s788wcYG1HSumVAYoTac8wV1Yw1yfAmePuuJVPFZqJKmPboeU3e2xVKvAkUP8CB6MuCHcjAsg3GExBrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o2TWtrskbgEtuFLRBQm7RwCfoDTjMXiXXoX52qYCK9X7gVGLDkWkAj1EdC1Ru2ENTwyf9PhSRX9dAAPTdxkBxk",
  "key1": "CcX8TzCRWqvNKwr6oyvR93DXvAvgy3mGno52xeAuQWh1rnbWAYDapw6rwTaCn4FkpxHCiwmL3J4b14zRv6bCMmF",
  "key2": "3Qi6UuTFmkS2k5nbfG9TfmCRsVakgvkK6MUw4JRffmvaua1ZJPurWS5tibV6d9XUPnGrC7xztCLo1iWi8zEwJb4d",
  "key3": "4pkR9YKpfgQnwAjVJ1KYUFj9CBMqd7aeWAfWLVrXUvcNkZQY7UgtCXt3p3Rz5zbzAfyZQzWwB4tD9jjbmW68qZen",
  "key4": "4occKMYxWxsU5NThehepqxXdHiZtEPtoc4LJFejwQq2CCPhDjYYjEov5KYWnpiz1Wc5Cr1hYibvTZ5NxT4VKWCrC",
  "key5": "3qcc4pXUJdA1WEhUbScDcwCJr2QkEHjchr6BLkjSyUXP7EjkBDtR5SDbmNPzMGuKDiDgVGuKL1Ed2nN9JXwWXKVX",
  "key6": "4jU7urTxNHDv4hiLw8XyYsXZn2S5tL77ixfpSMDv3webjZf3ikGPa8x2k175PmXisPteQMcFzrzSg9f15VPjSB8Y",
  "key7": "4tCFwyvfCH4y9wffYwwwK5dvuCjRPZjjPz6wQRXnyhDbwpvgTdeCLfzbdTfC9u4tDpB8AMVjQ68gLTEXuwu41BA3",
  "key8": "5xt2D8c12F7s9o8edzy5pkzzN6S7Jp6MPP8rSgZiMsdDCWaGoQfyHHkUgpnbLj1c3ESHGtuboqh3Wie7oUAxikZR",
  "key9": "2QBjXznC6oXfCiU3gVdVR3uSGEr5RqXjEx3mwUdxErCFFmixehcZzk2aSNU5hXqfYHEW4SC3fyX5yk7ejZXBCvhj",
  "key10": "5TBtHcu94pqL9RNf3K4Gjad7wcaQbrskszVx2ycsNEkrrK1B1CGBuefE53JD1y9phkf65H7aNiEa4zaBWvCzqxER",
  "key11": "5fAQwPYit8GY8mcAaFzNAX2DCD9eHNXdXKuonz4LT6ES4GbzFCr8tFXfN17DKfXYQfXNM9uvHhVisA1Su9MhR8CL",
  "key12": "4kqArQefr6gvRBjcL8TxSqe3WvWrJfTqrJz48ZWh9WegD5qXCFxdCBvWVczR9ES2LNKPbAKsNCUioMty5sYpx8o7",
  "key13": "5toccD8XYHjQCTrsJRwwX4jqX3RZc1h753dGxfnunh72ELG5R1iQyFGcd3BDAySDg9AhzzyMWH7THngNJqVrP5z7",
  "key14": "4iNo3cYENHs8WRoiqdiQWHUeVF6psuiXHZEHDBZhnhbA4aquKS2jv5ADuqELFWoyVFJwPnjesApKzjEAU6H7syvH",
  "key15": "4ZhZeh7hTAAPyndniUHcDekQtTA4Bt8NrNxeXR5SVW8ciRSxr1Nc5SeuvGs3oLhcRUAs9wsMmXKvCDQiYJg8Lf6j",
  "key16": "4iLYsjYjNijhE16SsG5tdArJPD5w6eAWpEyhxfEubiPKBKTwtxozjUonDPYWckzqRqzGnKW9qCHh4onRMjF7vc96",
  "key17": "2LDzozGvAKkF943gPLifX9VLRKcKfdTLcV8C8vPNcURA9sw2NcssSEqv9F4XbqDf4r8hzYnLwwhrP5WxygtYXx6Q",
  "key18": "4qda8FXEgfFJ8sKCD98ZC1Czqtfqwzrq3MCHwWY4QQ4f7NKpgrBMTgfcVTrBnQsV9ntaS2VPrLfWb6nCP9XhBc6B",
  "key19": "2kwUMRpAaxwnUDSa1ZkY2gswyh92bNVYBEZaSd9BqAkEY7Rec8NB6VB5fz9NhxoZjyL6ZuYGoGDeaVJaZnXo3YwM",
  "key20": "52LEfdhpiH5TTdVuAwLETfnmXjGDWkbyrCTmYvPMrmTyW4wnzpHGkvZoKx5DuSmErTQMfVsb4AukySNbhibnhAay",
  "key21": "4dhqxS4QR2aZx5C3swYei2jYSzBNKpbEtFNT1KaSGRY3AE6zTUc8SRxRd8LTYu2T6z88kEx4fRocSQzoJRpoEd1Q",
  "key22": "3jPPHoPFw2SUR67GtBkz5ZuhGmpHUE1fGihvo9h2XscY4bANJCUzAMhPTaszjoD9rqMkvFxSFPbF4dbqwLamYrZh",
  "key23": "4cHzmMYdbpvDN13MZfkTRBqpYiisddQN8mG6dYgzH8sxqpAPMdUevX6njYDQ1WQLXn8QoheGC8eeeanQvCXxroyt",
  "key24": "57mW9DWKEd21PwTC1D1kQGwGZeRFdL5JQVgBC6kiq945bDviGwS2Tsk3c7u4rBZGBGPNLW1Z3FkCRcGpdSQYjFSN"
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
