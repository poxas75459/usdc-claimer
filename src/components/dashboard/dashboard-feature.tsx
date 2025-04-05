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
    "4HwZPpnpre57kA7whHMMMEz5CsEnAfFpSp7EjAyWHKz3vDpeTETbYLBXa3qnRj4KLjQMFJDnNjZvSHdj8ubqiLFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WFhbyDf8jvujCxP5ujb17qb8tP8f83X8s3ipMvULpcniyF9ijrhyQ7wQc6STyHTpEWe3L9MZC8sQRpZLF6ori24",
  "key1": "4VBsASpRxqoZ6hkyScbcee9k2t1XTLMQZ7xhbnE2QcBTBPVpRuPmCNs2vVPabce45BqzuLyWKMVybUXANZ64fENy",
  "key2": "3guhy5bU7noyhG8QqKQVhZbd7ASw7Jh8D6xPzaEhbBgyEZrFULjpNPxh5pZG753LawAcAg4rVGDhCbJoTBxrXGz1",
  "key3": "5CHoia2iiEge8TSeH22zPnkzhpD2kNktRRUet1TUpASib9PimRhub7AP1VBoD7sGknuoE4THHvxCXiw72ueWqP2j",
  "key4": "521mjBiGZvahx1SPPz4rTmdvjrWRS2zmESn6gGKtpLA1d9N1FB8jMMLRaXCBXBbd8G5Z4FgimtZSNKTYMxfc3C26",
  "key5": "5ZdrCH96QcgSu1qs44oTH6oMqPbc5MhhitAi4sL34P7HB196KqLqRnHi3DMqdxjnfyLpYBYRxiDPab3PKoQtSJCs",
  "key6": "t8g44uSr4974KqoNkwEgyqY8riu7WXZNE5TKipgQbWTF6jQps8TRoCuT4MkbDpaBwAWVy67ifpPC5zJrCzoJafS",
  "key7": "2U8ozKiiNCxxzFFuzrTvdYaTAep4NxZ4nb6swLyx9NQwd2Y875T4E8Uz8UBkxtRjxUwx7rqw5HPz66cmERDGmUYS",
  "key8": "2tWv2ZcJJHUuWRQ9kXNUQudWG9z1reQyU7cJ9SoANcLZk4ynWVyWj1JQgGkH6Z79zJF6GqTQSteuahumkV41FTZJ",
  "key9": "2duhPz3yTd5KroRjZ6u3bqBLRwpTZc3Esvr8WUJnd7hSk17GRN74TKRMSetLYHDfrQwM5W2BLCwU8JRyrRwzbPk6",
  "key10": "4HbkaRDJYrU2k1NzLq2uLkT5wLgA9Zw9sbUNzLStaGuuaLUHcuFeJZoihK2mbwm9jH9usZvgSwXasqn4uhX6Ydo1",
  "key11": "5tBn5bDcZzUkoA7vuMEHncZzsaWWRjDkwbfeSgVbUAMj4Fr8RdDnZy8kuBMZ5NL1KiVhXuxYhQYYWch4dRyrULru",
  "key12": "4rx21a41hYLQmZrFFzcRN69WXCqVhdjUYGHkfuDtah6dX6LmcfLMDeUXtnBfVM9Lrc9Rnk9ZXbWfFn6HuWAsE556",
  "key13": "4tVHfkbzXuChkKG1XkhUnPyFh2dMKsxbUXLq4nN49z5yRCRFgeZy6kPCG1hcn69LoZ9HNohL8zU6GW2j7VzTapHj",
  "key14": "2c4aQvWFfts3TD5BtqYFAbedvLYSePBfNns88XDQjjRykc7iGcZpwYd6DCntZw33cEgK7wEnhwspHZNhqii3hTod",
  "key15": "3kUEBnj5Swpo1WMPechGxyEmC1gVroY4sSqJiWXMuJjZGUiF2AZ8M3f54F6jYqZKoCv8aD2CNUPvmTS6ENouCMJk",
  "key16": "5evQ2yVJsKasD7kSVsMzXgvGHBfGVZjtRsf8shEaoZY35DoBtwupdjdehyKTEvoKi1WaasBbtAp9PEnapX1GA34D",
  "key17": "3KVi8YfYg6A4fpWKnbAQM1YYHqTZhXqe261ar4oSA94bwoN8HNeUdWoaG36q32mVTGtSNsz2DMKuC9UmEp1iULZu",
  "key18": "5zMSzatkGnu9rMuf8DjocefUEivkMXxLu33yfnScFpN1c5pTBePotTwbyZXaoTZQ6r3Eu4s9Et716XEtdkTJZujV",
  "key19": "TShQbnrAvjGTyMK1wwBgcJvE2zWk4qA7J8r9CWVNV9ELHZ6PZHXkJjHXJnj89GimrKnwpCRr49LBsbCkjiuYxTS",
  "key20": "2H2FdimkgmY9ZaAKqTqhojUUQ3W5zKtzHuJ2zJHeA2Z1L8qQdmjAzgaMoFAiaseojXJypVXdKMmKuY2xYXdM9xvf",
  "key21": "YYyN5YpHbqXmZ9QvnafUbmvG53b6hhetc4xot5PYVAPDm9fm4M8sq6z9BzMkaTNf4EMfLxjvqopK2QshMoDQ79U",
  "key22": "3XEiSnGLXdtKFJXD9aH2XvABu2whgZ1P4rTbhKPNhrF2Rgb8nzxuY83ZbGBFAyiidrnj8oRKvhvUFmbTupMfXEvT",
  "key23": "661dWgKJUtarWxfeDZBzxqqi8gG8kN7ma1rGi4rnwvMMgSdEX5jQfRM666ay5UUPHgjXu41Wan49TTWaF6jB7KBw",
  "key24": "4egDzLGxuRLFFfJkoQuLBqegsP76FM4dK4Da8DpMNBmyL2tUrXUS6ivKh4GuLmH456rqTitzaRKyEejPKvTn6AC5",
  "key25": "2DhoWqM15u22xXEZYSFbkdXdSVtA5CQznk5togAxsAxJkqrEQcC46msnEiMYT89PPjdRAZyTxM584tiuTaTBJmyb"
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
