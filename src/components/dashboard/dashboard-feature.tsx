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
    "3EpV6xm6j6q815vJUBuPnzcydWfa8PVWNTnqtsUHHfgfzc8ME83MTdmhZ4xTGNLAZcyXYGCTxqKaNeY1TjkpTApQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DahaREAd73Rj5XQjsiFawzxZQNsv6QeN976gFPwbTgCfFnngL8nsYzsTxyu6Egh5LEMVp2mWvn97fcxd1f3TbcM",
  "key1": "2rsEeKgMXPFotMubczzVdnBFJkrvC8UbUmmCZMy162Q6MwtN6B61BAzSFDKuK7Fd61rGqAdmwTkRySYu685MNeEZ",
  "key2": "4c6pDs9Zs26nL8yKQTcok3PxgR196pSHnw4mrdN4jX4Ep1CuLNZSQJeWEi5XkhfPiSc6hY6U5RiyrNWsDSawpHsY",
  "key3": "4UfryiRyDtbCn4txsqFtgM2eXjvpY41bNc3fh58Dc8LSprsDDuzNdK98Wvboc1tuUcEhjHGX8S8oPEjwZ1Wdfn5C",
  "key4": "5e8xsWHMf1C7hgpo5geHN2XRrPVJdXwyzKnTiyTCV7e63M5cQiQckmDgdM3x4ybSRyNchjcgJFYYmesZe6EtXCoW",
  "key5": "5hawF7WegBDU5TqbejGt4tARAUMDRYk784TUi1yhKbMV2LKtsDmaMf3TEsizpgf4uh91pJJnnLEX29Wryfb92q43",
  "key6": "LAh5SuGeeVsaXPPik9s98S9d3i77sPZJMertw99b3Ho3gb1nqesM8edWuABwMGuYky8dLidL2LhYZrdHeNhjgRe",
  "key7": "2G3xhobacPgbrCUS2qDaZhsQgc3hVZGvqXjdYRmChRHzSKQkU9FuvAxnVdH4X4tfsZytRAzAvaQx8vgjJBWnjT8L",
  "key8": "2CS5x7yd4PzCPRD5pny95bwWyohnPR4hmwcsYyqsWj1uR6BD4TwbC4tAKpfkRWohT4ybC2KjDi5vsyM1pKG2c4T7",
  "key9": "B6qfuyFAoGnPJtv873Zu1ajxfiPh1LJs1HFTgDJrEo8SpxH4v3vnrLL1TbK7guY93rpnDcdPa7ZAGk49B9koqAU",
  "key10": "5HjzmgUBM4bci8MpJyjtoMXqDqsY6TFwG5rdc1wNheFhhTQL5A7iU9yanz9qBG5krgEJuthS57XZAA7DZFKvytAP",
  "key11": "5GSZaL9Xh1DYZUXUsfHc1qZjJDWLVAiJwDPdNCivLqnHiXUk7uTTetYLZZ3TppmqVWYgcWjsiuDDWCuVybdYaf3e",
  "key12": "2dZDSieHNrwxp4HfAicCW33oSd3UPeVdWMTBaM2ch5n3x9AfCBwU3NTqCSuoVr48eaaomRDLHFh8s8PMT4Jed7gW",
  "key13": "2B9CGTqGqPoNJNbaW3B93uMtYYGpDUnGUtpd78LcW8qbKZgYXtqPiTK975YGN9p1yJm9RLgxMHw32PiUvYNZtMwV",
  "key14": "4fq6BFeZvhdsFXePEuxnVrp1Yzsi1KwPCayGNGdTR9vEi46h4igdwmBCKw7SDZ86QHxQ1iGDRTijuJXrTSoP6gYy",
  "key15": "5VPKvCsR72SurZVKj5ojmPuPRPzb5qTHdbuaD2TQHTD8TogmUFK5hh9GnWBzcTxQDJasaiGJnpoZzpKv1AaGRbBV",
  "key16": "3gazQ45UZDxh2yA16FgwfCnVAugCWzccQnzov8GnPn1gUix3d25ox56tALJxm7vRSe7ZQV82bxUfTNcvFo6Con26",
  "key17": "5Sty85Y8va2tSYwzV3msiT1BFTHhMMPtgd6qRuVnEhFPJLsU5CJXb8HwKzuwtKEdFJ1icvFaJyDZQGK1KsuvsTnP",
  "key18": "4AFbw6txAzb84E5YG25TxvehmLJLhUnyrSuv4jgiRhgp5uPrYJkBxwXqmAuf3saqejkNVaHiiSEH56DpEaFzTrcx",
  "key19": "2ejESofff5NPuzPxNGboEtvn5xFGgyD7H9ut3fQAznRrmdWoCiq67LeG5HwjL3XpwPL7HgAesQmXieKc4vhw5UA7",
  "key20": "2dMvhbgF4shuQEWwCoUEKkFunmq9mNHe12AZE9RRwMBeLyxqyocVh3oEjQLgu652pfyULifitnrjk6PHSyzdosaX",
  "key21": "4o5UawGzwuwjDS9yoeamCRAoCGQGhQUKwj4unQgC58XjBvStBWywJDk2f85jzrHTJksaSvrzsfeghNb2MpyR6m1z",
  "key22": "4LAazT5etc84wEkJfSXG5yfXyNE5uQCf76UhcZKtP4YX5g7jWgpaJj5esXBx8iRAx7WFQtfYD8pyaYxpjLR2Lujm",
  "key23": "39fsHZ7wK12vmnkNkya7icajuo97rpLcqufCgAYkMTgNibjnzdHxJAVFDWaNcxntQF4bDgiK7VHjBkzNkn1juxbV",
  "key24": "5bLjDiWhbGzwby1Whux6PjTrBP4LZKW2LrxSPi3txHuDvtr371qN32DzqzSQNApMkXfjy7B3cfPZssBJdUdHu1UT",
  "key25": "4dKks4Sn168RYoKotFDCwJWwrNxrK1B9LMJYjzjeb8WT3chx4hfNPJuMn7WS9nJ7rg9V5U9wRJi12BXxsDTKTLmP",
  "key26": "3LzLkWCFbZmiRq1QZbUpbb6jP2xsrSios8tSqVqxpQyTf6XZ2c6nHnM36raM3CNdAfmAnXxMGJuUWcUAk91cKBPn",
  "key27": "611kcwNJu6bjrpvVRY8aqupC5PZBxsf6bxBZv4AqBd5Tfz62VJbX3bR2vJVzs2kMVhAZTrevUBaeUVwGJuKagXEw",
  "key28": "2Lhe11NAqZKHASTy8v9kWwhNXo6zeQcC3qZ5dXqeSYQhKW7Cnv4exjseWrMe6xcoZiHNeRvv2LSXQQWxy9SfPkRw"
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
