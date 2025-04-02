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
    "2jPbDDQ77UwRxGp3WLApG4qcoe1UDBpb5g9VUEARm2zK7rpiNsfmxeMnR2gMp1ux41DxdBNRkGK6bv8vHsZ3pRJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qsqJDfTP5iXbHxsj2NYgFAycdE3VdcJw54otQY9pmJXMBKrymqHmR2u3njELonyhRbtUwRyhxcEBFCzkgo3kYNr",
  "key1": "5p3BbWBGMKwsRXdBxbKBeXDjLNkRKGgmjoHX7dbg96Y9Vzhvr9DZ2w6XLFxUSXjXgDVUCwxZbTgE8X5FeVyt7pxk",
  "key2": "2zT3rBZGb2xY66NT8fRWFC6ZjAaXBcb9cfgctExK7xA7T5L7y2dYDA4Nxhm5xuHfPLBgxHzasogwhBScDKk52uUo",
  "key3": "2FvYfkP5Uk7uuHwuYeu1fcwmrwh9WtiCzsvaPpmrytGfRxSDrK2Nt2RXib2nM5VcgPhWYhCtqkYRL9jepeLsHux8",
  "key4": "XXLYj2V2CNZbFD5o7TTFHrXBCPgxPHKpF91V34Axu8YmtQYrSru2ErrMRPiWz9i3fPZ4TyJztJBKgbENpxYm1Af",
  "key5": "67aDt1XbetQMSjPA3UdpVASQirzZD6fy7qjeBq8NLASQhzi3s3zD5MU6VCvtXumjoYrLVeMSm7FysyDbnF8e2TKR",
  "key6": "1YvSfHVWVdi3BV7oDtzPYqneoHM7TxnLfs4GsteiUmQddKbxmCj69ZQWxQV7eA1435teAjv7n4McpBaprrJdVT4",
  "key7": "27uS4Z5cd96thUAWw5DKFLZsy3fieQ4Qg4xP1m3RtugDaZovZvx63BwCgubPWzyZVK7YJNxg1TE5GcnahstSCxsr",
  "key8": "5FM3tjxYcQAENJFwZobpwVBhZfSNtxHqj3qnA16hTCMGzM2q8Np2ZdRZBK5C1B3qvZismQoow3q77uEjJc1B8CHW",
  "key9": "3eZQxnm6Jg1Ctz9owJABtFAhUVQvLy1jz1YvwvppvqkSV5HCxgynnXZHEo8BeK6EmdF4exmfKNF3bf7ZWEHaY2jk",
  "key10": "44dav6paRgLAGNnnUpKVZUyXo43VjTCxqQ6Ks6UNTTSW4HEnj1647AxEzXH5zczJFvVrVXbQwCYhFMkpKFJQgWLn",
  "key11": "RmWYxNjaxpt695Y9oVk9phDaJdNJtbPjf8zjtabLD3t73mmje8dukXM2iqT1RCsyb4KJvHZWTrsqP2BxbnQswkg",
  "key12": "5GcaHYYS14GQMRGyW94eVx4tCML8jPiCTbUd3AR8z8NY8bkozpu6E2UDCEHftCQzc3wg4Vo5bhpg8ycKGez7a9uY",
  "key13": "4F5T5AwpM48ZMbbtrMEW7UoDUspEjys2PbbLxQqk3wgyKAqP8cNHfB7jqLarReNeMoYyiXsKG2M7pGi2AQ4VNkUy",
  "key14": "4uHcEeZJ1kzV8QqqPqDvfLJfv4AjhgwDWSptpMss5Pbm9GGdvipbJa7wuj3goYx2nks7BVJw2r9hqrFg92sZSye1",
  "key15": "4i6HJvehmZAXywLKmMj9cEV8iBHUTeYegAH8tkqeaXsovrd2yHE1VaaRd569K48rehiEKwsGZtG4B7woMJdqP8yM",
  "key16": "5658XaUqeVsm8jDJXfkXVAtA2WztSgysUub3mty22qtuaSdothJ216DnBTSstj5q5X28PNoFfw4cBBPdWavQS6s7",
  "key17": "2gRVzGyYrf2YADpLkjvc5pvT5Ra4TREyVETbzjyUNozp6kRzkViwxkK6Qg86RLLKg3s9nj37oGmEYh7g6c115WFN",
  "key18": "rfd9sR2Gcxd9j1WbUi116ebcEPPTnKaNvRvZDsPnXhrEj4trc3dgM9NtfdX7kUAHWPSAVpdX7ka1j7CEtwaadQH",
  "key19": "cW8RYNrRZC4up92yLbPmrG5kLzktiiRRJrHzWkcXVwUvaCuKpGB2e48LMm5koGgoowL4sPKB1c88hySu2Gmarat",
  "key20": "2thNYvJmf4ppFbYcoaAEhrhVqK3XokA6ktyUZZRXWgZnZe8hLuAm6QsdN8saDf1geEiUH7Ck5hHsjXr243QjBzcr",
  "key21": "2kE7ErC58t38kDZMC3rTvWWcDBDqmc3YN8tLogHbfpG2RHwyK9gGpCXyvCuCBcZKxEpwbk4wvqhLQVcNMp6idTah",
  "key22": "3pcgmV2aHcT8wLCh6ubEZzwHoH5p7ZmPnuZa3nWE5A8ZVjBNMeR82dfozA7tegKC1hnsgP8eA2d8mGHhdKRZoJUP",
  "key23": "265G38X7mogJsE3pzJEnsW1UUW19ayDhJKikzYgXZXm3sj4iCe52Uyddi2u7e4Go43HuBMWJujbXT9ME1fVjMvmo",
  "key24": "3nManZBTWQgBirsbpQEfEUqvDxvFp7Ld6NepHk4u7eMU5pvPTY9zyzkcn6j6h8FzHenDtj6d7Ee76z8EMY6SuoYA",
  "key25": "5HWiJqdp84jJLA1JeQXfTMqHHJ5rARVRAYiG2tsZ5icgVtu44fXMUFBvBSNafJ7r3NodqKsxmXj162RAgMCs7jLY",
  "key26": "5jhni3yTtgNoPguMzsuH1zLM6t23oi4wKUCRZqMXGCFpjcgN1YbucQj2EV3SxkuSTLCdN5eBAXjvqgxyYpUoALk5",
  "key27": "2mngPiVvrB9LGsrhNUzZNvuW5RAdCvPokMmHrFPBa1nBQxypZJGkGpRVEbJ4SUR1MDHouP1nTfrq6vHM5W9DJtEA",
  "key28": "5CFxxCnTNQo1wANwb71QRxK2dNrUqhjoFnCiTapghjkTmJJVkeQStHNQZ3EjU7Br2v8Ux3RdjwnVuKtrExzhzCgk",
  "key29": "4V2zV99i4mqt9m357zfVVJ4DrPgSyD4vBEXbBcVUBxJKept9TUhJSuVbUk1hVuaACnY5HcKjHNzbjTcecKCqiXA2",
  "key30": "462cBu6hjJpiSqqvKGTTqwnFarWKgydbfwy1RJqPQhYbSeNPRrpRq6YLnfVeauoWz9hCitYuQjVMJUTB1J7DTR5w",
  "key31": "DB76RpmCDm6WRqvuatPRiXihNd5SrF2ceNkimvc8H6w7eKZ7xZ1iMs4wQtGbWVjzo3kwY2shi3VcVhTAyuUUCHd",
  "key32": "2fiZNeMTXZ9z4ct2u7QWxnXsWHx2qiP2Mt18dDgEsu8fFkiuSFfkrCTtfm4AAXHQTSB4gkmZk917GJDoqwXnUXgP",
  "key33": "64cSk9URwvqoMBrVyH57KK3vUVRfb3xfCp6DY9gTqWKhBY51JuZQR2GUpYbdSHsnoQiwoBcAWpEkZH1R2KGD92cE",
  "key34": "2LVagTgePKGxvbns8g1PThDDAqbqqmrux8xzyGXvXJfSmMacHKthQvRuKnDL1B9osA7Fng9LT94Pw9YzAMtQbcLK",
  "key35": "3jMgNBs36fTV8p5WpLLusR89RDPvV4xy9R2byQtHP5XPHvoV2SocecpgmhHLwrtSzHwD1enVYsPGfGtzJk6ukG7J",
  "key36": "45gxoGZUce1b6s5LiBDFQs14jBr8Yhm3jgVQ87irqgnAuUV6GgPt8mKUhfAEH4XR1TAzwvrNU8ccMhgXVVRN7zeG",
  "key37": "5Qfxd3zngqSXCHNGneGL9kYFLbJgKm6WQraYBsEywrr1YdDyXX2989CiThBH27HGqU6cLXDRRtpfjFLBBH8hWaws",
  "key38": "3CNjTD1Qy5ZVmMkyTY6RNoqDqk4gMPrPZFZCgXe62T4EsfWZUXjsyk8UiK3jN6HcvM3QcTZaaVYH3YPiWePtUB6y",
  "key39": "3t79f676g4svfUG4TUQn9T43V9HvKpyq11YLsAhUubhCF8wMD6fAqm7xXjYcyNyXghi5wz4KrVwE341ekGModpvm"
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
