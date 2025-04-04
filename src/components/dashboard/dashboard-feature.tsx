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
    "5uqz6eKNEtX1vZjZa6zho1aUKBQDaUPEk2ub5XM1DMfnaH1NQijGjxfFBKDiaLAyvq8ESsJE4K9mN3U6RQKaxbJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dnGv8uEMWLQQCESPW5oYxAj6xMk2jGHaVzeS9Jf6TMCTVSqsbmghwDHfhzJj2GQGJHg4vQwPnU8a3jGVbhpfMVh",
  "key1": "54FBostSxjDagMi9mq7ZvLJygopdsUEZbMbPwJighaRqsKjwBdk3eF35qBwsAiXrB3rDhU975N7pJ5dDMFrWud5L",
  "key2": "3zpKEp1Vwdi2hHJJ9NuVLekdanYXGWELAabn7vSShQiGD3VPRpy6tjSjen8KxVhwKVjaUBXQK2Rqw89C4MxxGG3W",
  "key3": "3DipLM4JyV1bbBdPANvRRXpioSED6zVTMhMwDmcujDzDSrrcUZGAMjwcJxWfeX5vTpcgYK5ETsfRWxfq66aK7bQW",
  "key4": "2CDSNjaQZY7hncqT3LMhB7w6ZrhiyNMiQBE1mdybKnsVLX1Ag5WV8UFtHNWXJScnyohZA8wjromCyjgprn26YRr",
  "key5": "4XxzyE8AEFutQwobwiQjtifPCkqmDrMLGqj8GsffiZuA5kxCPwfqYxWvy8rdtK8vsaaMyocxWxEtYQqPsuh4AfMT",
  "key6": "2B4dePFzZ3QXda9EdsAWMUuN1i86fGSU2fUgYEuXCFRX6nZpQ5Cnssg1q3rTHianJDFh6XbWtT2xKx1dmDbFsMvt",
  "key7": "3T276swwieFV3wAihujZJrTwhmPaW7FSRpShSLPsKUDYduGoXWLBiqVx48knCVWUvv3axNWSs55Fn1A7yoEzUXSY",
  "key8": "5UZzuWjq6sjCGLoatJ9UU3ymkdkAKXnBtMKNvoEG3WdehUGnrWHJHXCHXaVEMb4RfvhWtqUqJk2UNaJgZfQS8psF",
  "key9": "2TXeDVEAN97ykpDzwFsYymDp1TRVJu3sFcqaV8rM52WFYQ6XKttf86g3DakjHMqLxzRSUBauXVAETsNpKvaTMy2Q",
  "key10": "2cf3Yzg6mz5GRuqauRXtHDriCkxPioqnJBnzXcZQGfYDurqbMniQpcqTcXTKP4T54Zb8iFTty3FqjumwsWnXvyge",
  "key11": "47SMBJVJ989VdBsbiJy5VbDgRWgk12URvEgTVsBAyezUkQY9zKM9roxfKWtmvY6dyrzfknGszE6rvaML94Z1uQEN",
  "key12": "4oDSporJCs8LVHUs6nTb7iBSKkLYX1Kbq16U4thBBqutSA9XjooQhD1enH96NaQ1pLbsZ2tsPmKGYyEKXX6hWi7j",
  "key13": "46VrmhgKsUSZ3U3mRDVKgox2K5vSP7K3dia5FEDDTkVMtUjdWMT2WW4wnvGcpptknKBzuuTaVNsch9u2C2a3mj6E",
  "key14": "2HVToLR5epTho37itdcXzbPMkXZE5UaooQADJcy3aEjLGiLbVnyhYsfrn9hvoyqfA8JnnQ225umpkSd6yo1A93u5",
  "key15": "Yf7cFUN1nLNxfGagBADZ6dc7VsfqQ3RMv2xFBf8H3dMugxhPLtvA8monVVsmovRQsB14kyfDR4gsyukXhiVhJqD",
  "key16": "63vhxgtBbXMfE9nugu4nyiPP94dHC8LTg8hWchf5Ye2KvLNSb2LAR7G4Mj2d2jj8B9iPvajoKF7T4MzCw39u56mn",
  "key17": "4kxcQkbnY9m8uXLfKmQxmNf5Hb1cLNN8mHYV2qKRYuUDDYQSBS3WNakGh9W1G3rdwXaYK9YbEL38NGCu3HpyUFv3",
  "key18": "5TT4kWGPfX3zv8mmtFQcoJcm5hCbzp1r3iCZGdAY9PbsdkrLrof9CReC7DGq21GcigxwC9StMPaVtR5oovcvaEsR",
  "key19": "4vzXV3JnDdwvH3uqXjjDujbQzTFcB4VyxsmDyj3vGXwBnAMP1uJAsfrpjPajR3NVzTx9HS8SAitsmeKGgejYvp43",
  "key20": "4BjihzowjncMHgY8yFWY4rzYoyiWcPQicPAwgu38tLhH4V7fBzq72Re4rvyW6Tr3mGC9fzCnt7KKuyYJ6vjbvVzT",
  "key21": "49SzCH65fsHHDF9eMnom4RBifMJ96EWvVr4zsajuUM6fxbTEvNoTrwk66a6v2bGS9LTDUAvSGVuKqfky7KCmpS4S",
  "key22": "67FJUoGDTZmuB2wzufVdizWUjDDmKaiJVHhiJ6HY4u1xgn7aeyqyHYczZoeW3JBYbq43VPn4AwcDva1DSNowjhYx",
  "key23": "3oVW3NPLMQBSL1XKtSZpNsSCSUqzw1cGqTUDtwu3Z9QxQbzk5Vg6zAWL5Aq3sCWv4RYW5W4i1ZmvX1jeGWbuozde",
  "key24": "5hvunmFQPV9MCHLcXXdDsHrAXWKc4ujiFUFST6fUUkwCMZpWf7Lome983coY8JkmeSA37t7cbynkfY3boPMXVvAL",
  "key25": "34B3srS3MwTV25DfRqkHpM1kMPsonfnwPAK5ewBnverZSwxuAtvMmnQK86whYuAqC4CAzJk42SZfDrwmD8FdZSP2",
  "key26": "2jKzneZMSRfjRYkGoqahdaqTH4rhh3Li7avoxYCvXbKC8Tc9rjBWwfdGHZMFd8ATKdp418fH6h1y6fM6ZFRVz2uM",
  "key27": "5uiHcVGWbDNC3WRw5eCuFvSZyTAbDu7R9fgMdBSBaL4JEXBjJhbEsHETvJLatjtsbj42ARjmFk9gDTBqM7g9bA4u",
  "key28": "5SL9NMt43gMyuKPXZf4oF1Ehj7zuvxzUaahwyAbWVEuytS2mLJirkFeMcYxYjQKcSEvK9843uniA8NFKTPtGkF2B",
  "key29": "54pcmovTYkjUr8uPn3QyFZqgEasHRi62H4RAeoZCenBVjd49vQKQio8erXuVu9BrtnytHVegpmZNvMM4fJCDbjKF",
  "key30": "ezrBvXB3bQfvef3thCh7urQX5vzWMfbsringHzAA387beL6ZhuV755NKrza17nAZgdFikCFDRtKRhCEX95yuoM4",
  "key31": "3xcVZxRpkT3DMn8iXN5xAhiYN4ibmdSkvWGwHN1vqEcJukVxmN6yWLqktxkPG486jWGBTrY9BrgnMKP6LpXPJLVW"
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
