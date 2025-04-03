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
    "3jRqfYvDhMbo1PZjZMFbEG794LrxLP8Zw3WB4gbTqGvoTeDDRR7moP1TjLxVzTGWBFyyTHCGK9AmNbvrkmLmyhpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVUdz9mq21sNhf6LBPaJyizXTJFDjHxkKMs4pZkt8p6KEH65sVcbkt25pXDtxAXnFzoUmqmk1HS4p8w8QAoQtyy",
  "key1": "2yP3fzJcvx4B4whePCnvdWRhw74q346BNyH4dGK48DUhRBe4RyW5jo29yzUdWDAfaERjN5yUE4SN3GtmZePUM51U",
  "key2": "5v4sWbhJWwqLXyNKsvMHHcmKfDZvfoBr5UMSkjVJRrnDAn9Z77dTYR9yHxamSMPax9b7rapwHkSMpnzhQRYJZUcD",
  "key3": "3tCZMxTKdwPFPmfMmAkhccKSK6pXJaUvXFiD9B7JijhFHFWgTEAtH3M5cU4XViFFPqoTSdgta24aQeZiZq6KJsPP",
  "key4": "5W6QBawSdymdKiDGVccJPMh61bEBo72Ec8r44jxYD4XGRGvjTUHQL9z5j8sLyECfJ1kF6ovCNq8PARbSDdoiwy1C",
  "key5": "5oWvWdNvSMyeqHCSYNgA4e8FymUQMeDrNK9KdoSMRQftgGtJM742TpTRc5m6xp8iFRuhazBD1WEkpHGQfnthGRQM",
  "key6": "34GhNvmVU3riiUvDwVkLn8KSgQm5TjkyfBjLpov8HFHpMgTLXBZ4ysKhWGsmvbHW1X4QEtiUxWPJJsPiPBzKj6ZN",
  "key7": "5jXYLK96SXCeA9GxmWXzaUJo1osyXo6LsrPjbCSVqrQtL1K4gFijXyvh32PG7cU5NveYcvRoWL4ruASoGopcsjGA",
  "key8": "Utu265LDGsvw2MBUdZMvSiVT6Mi2ZBpDR5VL4ovsBSyYNiakG8sqxzFPv2RKiXYs1cqXBqUKbpj9amfjHhyeV4v",
  "key9": "4ojuqbLtRBMAfJbDv54TJnwj7zNmCceLnJ6okyF9N4CicEjqYSWF8pBi25mxzMmGRnvKqmSEzYz8RkfTtoGiLX97",
  "key10": "5xjjti47LVrHtZrVTi1W1PCaGmJQmha4uXHKgwccpNyTWpzo7UeZpf4ogBUqD39MrKNHWRB1dmxqTwsXQK2WEddP",
  "key11": "2gqUgRMf6pv8sBVzcwQ6aVGUgnn9mwPxc9wGJmLJVwwoH4Y49e3SKFCUuC8VPDyMmXt48a61jg5LRTQLHwLz25P2",
  "key12": "jdJdLPxk1qm7p4dpVnZT2aaXeNjfEB6sDnjp4GNo47Sup3iaJ9b3LYornMQMUiEXJsXg1JpWRc6FzRc7xSQRQiu",
  "key13": "5KQPS4Rcty1HLCUrHkSepmqS36dryJPjKFtSSbTbLVQpGCy5WCebViLDjsMsd7BQkka2JqTHu9CkuPjne3AgY3Kw",
  "key14": "4yAQhSXdFVYT4W2Q7WwVerv8hrxrc35WYeKzso8saZTpycuAV6DfAegu9Gj2mzDppVDvmQ3PWfeEp7mp8p7DorPD",
  "key15": "5HgHb2hMhVoWnmHf4EdSFsv9piH5Xp5V3AhgbqJZ5MW8mcK6dPHiXcnVVQpPujWipLxfCSVMRBc5j4qvBam8MXu9",
  "key16": "58vXo3LZKp1LBc7bQp98SY4Qz6A87MjoDgWFTtEdb6viQRBRBaWwYiseG56pX6EGDdJ3P3Cya8namZ5rP6PXs7Tw",
  "key17": "61Ztxog5RQX4BGhPjTxwjQzrfcBfL6ABh8U9RWSLobvtgStSLcAyHssvPGmTTRbQ7LKC96rL1XqL91QcL1KezUCb",
  "key18": "MMLDcpdAgEZxHGnznt22wmU1yG4T5LAW1V5BftbUptZ2RpXdvrJ47snUwNY3ZN5GxW8vDLcADd5mu8tPH2ULnYo",
  "key19": "3T7YNfk9VjYLuorJURRX7fUS4nmk1CRqYn3zb1gWC8uCFZx9drGUPG25e6YRAXS7b2NPK6jWSR9doLtNmHRWmzmQ",
  "key20": "4M74E384UpdKoTuDyEWK9my2aPoxrKi7FRWh7KgWP1EW9Kw13vzn4865K7G2avKLVHnv8TyVZiG8hxQSRUR15Mzs",
  "key21": "rYbNn7Sr4Pvy5SwhtZo93sUHK1GjVMWa9oBPv8hETcS332FnNwXAw3PxCgsdFy3qZwD5EVh6vGNQLxTx5NwFaXo",
  "key22": "gETMDNpMvHpz8bzhxkjDEPnuHzhXc6dbdG2psXrHGH2WbLgvchUMZmK7mqpNdUBdetbY67SLspV6F7kC8cLci6k",
  "key23": "2BcLH5CbKz5VZAvfFsfHRckN8pP5a32F2ACtGTbBky8Pbtt6ozE6kS68a9C9DVxqyNyKivhN8tHqzU4LE6NazKrp",
  "key24": "3kAtGJGAKZP1w6US6Efgq9GE4nXsyx97w2p6iZ2KA98XkPra7JwWeMTBDk4WVKZUoP8s97FsELTMWfvyffE7pkaE",
  "key25": "5yE1mHcF5LHP1kw51gNsaeffitiXNBk4j7NEFyQ2PjxiFitZ7jdRyZ7epo4MLz1yaVk6Vct3QoPqVJq7JLfDW1q1",
  "key26": "Cx1AVbBhEKDtdj1tFry8JidQXbSiGpjaQZUcvbFFoyb29aJfhwaewJG74hhK3q6Kr9uiaHw3pxhT8BSJHeNuyH9",
  "key27": "4EBqyXhuxHyXG4MooJdbju9RJgb5J6hySjFd2cqkkVMGY1jpJf92aBqEy9SZyXWbniH6r3eJYENzRNcu8BRoPNvq"
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
