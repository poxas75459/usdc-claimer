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
    "4SJjMieJ2X2hT8dC1ZnLn9D5CLQtf1d43oSU2Q7dzDBJ7mJRafFMUuLgH37HTS6XhTkZnNhGdVmaHJP9JJzSJxgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31CdAjc9zgAQsBqFobL1r3r784weQBz1n7goqNLMj3QcAAJikRSjjuCtNzrpsjgkX9DVSA1LjH3U7wewuXnTS7rT",
  "key1": "3kqtCATCkoRz4v7qCzHpdSuzU7SaiqHuWE6YNP6scdMYbBasPeZZwmHD8ay74kPJnaEoRSfYh3MLkN3M1kGGQTGx",
  "key2": "5p1bY8WfYWKJnsZeiQwUkvJL8qgUr7fCn22maUYWKwDyEcqf2FgKJZSgkyjkThfG2EabYbSCYzy8Krkja9RDziQg",
  "key3": "42kE9LU38XLxtDScZcBF7ZBRjR9izy2tyXZ8ab8H8ZqAkz6ri3GWxvJmZFUR97uWUbdxmq5CfV8gVCP8RsqKkwMM",
  "key4": "5taVz2urdNqvPvwQNHJazb4cStMEGNJuEY3UFkYynidcAKkZghfSgEQ4aea5GtGZkBQKwdEuiae8y8d9ePJBaVEq",
  "key5": "CKEza63WkeA3iyvJJyjbK2yPUrx3Ag2VSZmcYEBYDpDSceZnCHRnGQnwDycMmxHmUvhGhCtM971S7HLNGiSE8yR",
  "key6": "5H8J5ABVLEHP7b2RbH8e9mF62Mno8VUQVLLVrmmS51Rre47UXkK5VFgAi2bKXsNH11XVDWLLpB7BpMwAmUHtBGaT",
  "key7": "5ikHejw3msrvLCnou5dcqTAGfPbztYTqkEnrij8ubHNiHfuA1FqL57dHtHvDaetRBkutsFGShqvLm8tyjNjTSTA2",
  "key8": "pa1JH6iZdyPCKpDxgRvTEs2ZPSLeeTa8MCmPqsTMvyfw6G42FHSH9etpKvbFJsjToEPVQzmFc78sLgy7sUjBjwV",
  "key9": "4ynHzwEzWJq84WvPSEKkqr9GauNrpQgX1he59tMPnmNsZdLUoPf3AU3ggM3RaT9rSMNiVxsn6LcivLjL7e1YxvLE",
  "key10": "49YCLws5zxCxxx8ZU4htcCXnopuRRaBmPX2SdQqqSvrkJTjJNJ1TeXtrqqGkX3u1AamjhCveisnwBSkcJMxfAAXH",
  "key11": "4QVVZrmkC7TX6B7eQAvbRa6bye73nqjJPcW8GtGkBt2KmovMwoTAK94fxNd7E95F7efHMddYyJXeQhQiUfoPYGZu",
  "key12": "2h9g8ZhVxxyJ32YKeg5JsQSvy9fdf86u7FiKmvUgjkHtohzrBBfouKiLgEYv4SSivEZfoGN15MepWESWmszJRdHk",
  "key13": "22SMH8kJcYYQWaNFjLb46FhKJy6RoThXfKtwBHdVk5uEBd3PFXax2y417UPxfYyC1btXovttv6u2wJcSiyYc1wpu",
  "key14": "5QzyN7uDzCpCoYh8nFKtSEvTLLn49BjDs459HMbm9onrwT4MUYz2UuJtFPZnZrTqoRLUzhhH2PU2AYJGvkrHmBk8",
  "key15": "4WfmhmrPR9JK7zESBb6YtJgMWEA8r6q1WyGfBZ4KoA3hpRREH6yvw8RXJGFgzvyMv8W1qZt2d5mixFvSq3GYRbnv",
  "key16": "k9BTT7nNUMXUVYdywU28rheqxCvn18gk3E7pp5XU3DVS4RLwj7Qf6KR2XaNezqJWbGiUQgPG2VPiYvx65WUAsPy",
  "key17": "4ySmZrPgMzApv3Bq7EGzx33tCBfog9UKTNcy98G6xib5s2bZJBe8w3uMDZVG2HU77Z1JyBfhAafXJ7SsECbx1qVx",
  "key18": "8Cn9Ym34f9k5HrSe61qZ3t9Es4RKFALDpKhQqV88H2PHnDaUWhsxcq5r1U34gX5mYppLnwzod3KkyF19Co2kSK4",
  "key19": "2mRSba48HZC6oPh3eESqN5M8ESxeX4YGEzZ52A2KsCQhtFpZDniLhsuobzA42TRc6YXGQZBmdohj1xMFZbLz6EMf",
  "key20": "29aZXUZ1cW2K4DriavWPGerLYUAHmVJtrrkMXxGAT6MXFDN7FaGhffG9dDymE9Xdw5PRjRvGnHc6pRxdgr4PgkHo",
  "key21": "5k59q97p9CDt75ApNy6wxD2MvHiTHrzC4TENfjTDqG5fjZ4RCFvWY9zoPS7M7mBM8VJpeffMe7b8eEkyVx3X774i",
  "key22": "2wSY17rNXzEq25Ydub9N9gi7wqpCmgKvguz6aCakr33zwmfvUyazV8yCq8mnkyDn3g1N6gTjCiYbxtUgD91GiLZo",
  "key23": "52guQ9LThMkBVL8NQq7VgFJ3nJPAkwhYqACn92ojynN574ftewsRWnmByjQBNS7bYxNvCrfYzR9P2NiHTscePcBp",
  "key24": "5dfzCBZDDRoVyfqDJWaudutnQ3sUcBzanniAcxvCgiwAHZ74xXiKqGcf6R2NeJU1x59b3rJoFxNibYaEofSwG73r",
  "key25": "uLfhSQaCh6u1FD2XmDd5z2PPM7oqCMrBmCd1N7Yz5v3tyyTULHsm2Tmse61V5JorX3iy5k8uwhtZdC9CN7Tduku",
  "key26": "2b63Qng3spM2TaShJbhfNJrHS6FANRPNe2k9k7rwXHzxF6YzbXZoK1piw9MvEYxYv4ntFhpTK8BEx77HtBmBiof6",
  "key27": "4DCVzQHwH7ztZh9d9a1DWRx6JsfU4zDZ5s2WYBm5eqCWFUrk3s1b68VtnxpVpnhmqT67P436MeouMvUzmWMeLcFw",
  "key28": "52BPkBnbhqypBv3nhghf8Tv4MhkwxFw82jGFY2thNqjzRqRUY9BXGnn9DSXPmTk1AFze2S3QQvCSjdWHZwJxwKne",
  "key29": "2v2xpgkVzGi29Pk4dNNoNisLu2AFjLzoUGPS8hdB4QyF2ydLWRbn4PAUYuEYSgFiZDgExMMNyfWgsu827PXBvKip",
  "key30": "AR3Cp1eyUbhPz9H3ichHiLP5MABHDFz2xtreej9C87pk8fShqP1pejqBGLcYfh61cMzZoETuQskGR16zEx8Z6U1"
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
