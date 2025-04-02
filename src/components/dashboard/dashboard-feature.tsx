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
    "612eqyvF6918DG4nFzS9zgXxNEnLqa5ksxtN1EDZzREiTPTVw7W72qhJiDdvbxHfvUyUQnNgBobhZCrqNzgmWfWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n6EShDs73Q2SoAZrD7w7K78vkx3eTLPKguj85i9S3SXDVyVTLdCZk14D9LhXRaLwEY7q1Eo47x8XsqgGRkmpchL",
  "key1": "3iDjnPUrk7kG3kt3AqfMhgib1uqTLyaJFNwJ8zq1s7UQ1ZvBz5t1fd3xX6Y2mVKk7brQAZ24JmJ7jrZvB9JhcLSu",
  "key2": "54dkHWjxhUrFyY9LQS92aeB3hVURYVjJFoE76Fc8FHHPyWdHdCFkuBE9yVadhSU8urPTSbN5jXKKmSUMv5kfvJxA",
  "key3": "xgmXQ5z74ehifVKDjcRRG3gojWbgjs7EkYKyXhkXoR8nna7ys5JsS3NS4EqqUQH8iPfiA8ekLbFNWT7tcZpaFPV",
  "key4": "5Lok7yUdmJgnoc8vdYb8aUAekHqwKAAhCMjdixrEb5R5h218fztw3LFyUKjRwwr96etraWinc6dRQTVxLonupSSU",
  "key5": "633YbpcHVC5eU5pwSkoJxdKu5ZJwdFhayw7UekQ2vhKXMP29FFR9egQFpLRxfGqADkqMMvocVN7x11aw7yb7rZnc",
  "key6": "4B4tL22JFD52eNLrtgPiNWnzi3EuLBbT7cjxdJCM3sP3xmeh9GDm5zcoHvHocgWXk26UysqyzfWzaPf79SiNJFy8",
  "key7": "2c53xPLWZkBJMXfSR6ocap61cdWTnmtEXdDhXU3a4R55FgjobNFuuXi3CcCLqugUezrv5rMEqB2fTSKJC7B2aKAy",
  "key8": "4EykApP3XHSXi2me7w1JrkqYb7RrmKq4wPYdyFSkNvqyZPEwcwWUNiCGu6DnpnEtXRzBFXt6kSAW3a2xDaJQaSCG",
  "key9": "3KTiCnvDjr2nEfYZ7NaAUTNMHQJ1LRUfG7tNjxS9nLH7GscFQWLvantwjpUGYsicHqMx1mHr6jx6dsKQw3zqYZqM",
  "key10": "2rEJvvPDJA3FnFYHQ5mbYbW2xphSZAcq5nnXeV5izjKNnfg6Fj7RWeR6fKFogGnUryBCBMqTNVd833HeNNYooRoF",
  "key11": "TugEsuLfMAMUZe6BJUkrSrp1t7GmmmS9GVNKK7KHofUJa6aqLRJnFdRV7K67SShNoDRWFo9H3ZnZZb5FHPeac2Y",
  "key12": "2dLaRPkBz9xPwgJNjaqCbmhtFLQ3h253wi9awEAEpgogcGsrWKL7UoENJCZb4nLrS7ooW8bBNqjzVa6z1sRb3BJY",
  "key13": "219pWDKq3RQnpYBvkGF3V2m9RW9wR2peqWi6JByqWEyRPwcvszqY2QNK6TFc3m8qNMq1X5XDv9r8P7uKywV6HLPj",
  "key14": "4Z1CWjcWNbAAWZC5M58RgN4eYUCGeRGL6YbJSY3jyFmEbvJGCYVtnJzHYtze3ZMoJFRDNrUwnXfBjrWvYFLFG2js",
  "key15": "5BmsdVhfUA7tXzbjA8rEb3BLxHoHkubfCEBu9qSrnktSRAMQjLN37R1arV7dp31w7V36PCLeW8CLZgnACmWcQUJ3",
  "key16": "mMJue9JcjHTBurGyHwMG1Tr2ToKxexS1pgzptnuSjaY3btpHb7aUGqzsJ2SaLroqaVtS52riqZ9Pa2Sq8hCSL17",
  "key17": "57dx7bjxxN3XjbxQi8MYyyZ5tMyaGJy2oveRA6u52v3kj5B3S9nvnB6wTDYYJ3q2ZDAWZsgUqTXXdTDdHLPKbt29",
  "key18": "5bCTegc1NRwSFtLDbqkQRkR2CrXvvGF4qLPFNU5iioaHebbEJBZ4FStfn8GRNfqhfXmcmmZPrKedxWYG3fnnkG9L",
  "key19": "3DHwTCbUeumvG4ChRnEPuWVVPD3UdnJpjkUjj9YxKPnj6wgsN8WWoRHdzshkzn6LwS81fixv2TorJ8hwm6u7jd5t",
  "key20": "n5s3AoReoLsvgxtbnW1fienFpcBHrTh3rZF9wFthvsTV4yy4XTqVpB6ZxFcjTdGWuaYJQbmLY6AcjdR4UnqenGB",
  "key21": "9QD3GpZnKNz98VrcoyYcXj6kGyQ5u6n79NYBycSt2obYd8BfkbnmjM6jQhjjgPsRRSnaU5Q2uugcQepmnLWMZzk",
  "key22": "5rwtUfR9GECW96cNj9Eb45TRqErvEzBj1cHBCp4MeqsjjHsonG4e9atJw93S1T3PEnbHAGCeBUmDWdWLxkFdFdFc",
  "key23": "2TXXQ7JzDoPQprMhLc7GcfRdnWhPnezPRT5efk2PyiC996TsPVnvwJab9VmaeQ1ivh6H9YxsCvsRZ7AR3TLzvFRd",
  "key24": "2x8BCu8Sqx6WqTwbUpaTFWnt2w8jGcrR7mRbB9pRvLExKvab4kEhSU6YRLZK1QmYncdzyUUohyTtFNaqeTi4aXMo",
  "key25": "35VFQEQ4TwC5eDb7Up4ndcsVVfjab5iacYEoicVcnxzZFRqBBammNbJKw3ZYk5npy6tLq45Zgr7agT9XJuAYL5jy",
  "key26": "5usUZWqRxdtpR7kJxeq6r7pW29aQTbybbxrBSLAGNyZQ3fkeYMATJChh1RtdhQL94UJTXRqwVV1nZMC3A8VuqBqP",
  "key27": "5TXdbMMTLdgcM4KsFChM4PPDkwpURfbEASjYfwYahPkvdSnQRsnQh6GRXTjM33rGDrYLWNR8rEQVAvudCvr7LRxv",
  "key28": "3kQXcKqTpeApUFDTXPeCTdhtwnWLe9k63tCoTtKf3eSWbXdCCZuGqd2t6AYAQLjJQFjdJrUu8ouigkmRF1NrKBBW",
  "key29": "2U4AZ5MX8GC2kEtXYPjthBV51Cb68P9eCAtiTzLBjnEm7uZqwkvNnYLR494xT8E1ooxomdWfzAEgmXVqAB8pqUn6"
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
