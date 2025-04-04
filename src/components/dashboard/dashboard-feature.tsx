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
    "4NexFHfqjDCcHbenf61Fh7yC5hyeY8ZwkGv2nReGG22tmYdV5o1YkJ9nFXxsD1td6zFjNjoEy99wrW4oGe9UfcpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUo5DY9EDW3LAecuqEGFcPp1TvRMa9iuHHtEVes7oLUNHHvYLedWvffY1CPX7tLCZYLe7CbC1sn8S5GnQC7yCna",
  "key1": "3mcQqMtGjgmXNzip3jkJbaaubVC4YrVMdkzvy9bdJCZz5aPZC4ufkNoqwsbRyDB3MMJJryHPzxwmuxwdbpcbmLzt",
  "key2": "4aewhV5jkxLifh5mWjYjX97unkuYwdFUFeo4ReCF4T2znLbaBbJbC9cCHBJ2BZ49TSVhRHYXuU5WmFE4xQfVbcoK",
  "key3": "2oNSNXLRHvirkVhFSVVYDfPssc69xhHapskDPXfJ3e1N7Rue4YW38jR8V87GrcoWsSjzSLvd4DqQi8BD8Mssf39f",
  "key4": "341k9JFfCZT81pdTcsPxayNn267uFHn9h71iqF27zovyh3oWke3Wgt2AT8pdyaWJKuB63YSX4W4Vjmh7CD9tQtuu",
  "key5": "JGwQX1MEcWLSH3eisp6CUTD6jcTuoTG4xTVM1t62zgEy1LGQ7R5E71FNJfdPBJoh9Na2pjyPNdqdPuTtDce6nGM",
  "key6": "y4MVqxRa7ZfWNEurGthXEw3yL5d2WBzmRfwquWosyBHsh77TBe14vAwhd77d3WG4byV1HQDV7UTNLYuowJUrAFZ",
  "key7": "37FpqSqwwFbJDHZvWN2BvYokXPBkdxmago3Mq2MZTPdgucEqhFEWgMaaoQTbwZsr7DpJkPHnLNqQeT5fR1XTRhvu",
  "key8": "2HXzYWATURDv6QFuMNmz5B3FR4AdibfrHoBXwzbHAWYwHbKmwkjgyAQP8UmTGh8DQ64UtktsHUcJmBCLQSvyK1Wh",
  "key9": "aGSKwrFkD1pKNKPMVYZ87aRPFbx6yt3JVwNFY2mqN4Q1R7mg5YYPbMzg8mwbwP4ktjK2gPUvrYtDhuH9S9AMaX1",
  "key10": "7ycB2Bq7yMhpABJPS2A4HFb41cMetc1UwBsakiUnshrhvP93FW4PeQgJ7hwd1t1Hn5MeL94j5UHDeX5oPgTKPhF",
  "key11": "2LUJgKJ3ghZkfxi6ENpd9Ly94EAfXwNE69gJP2G4E7h816bJno8zYGWrJpjwD8cFJszXLmMLCQpUpj2rvChZ3BNS",
  "key12": "JeU16Yd7JxUyKWyARRj6KrWEXQfeoudmJCQz5KWsjXKdySqiVtH8hMeEYUSbH9uj2h7mzWbnVhuB3V4qbnxBSpT",
  "key13": "5SgPnP9CbNwaeeNKqpvNSwUKE5umPbGt3HAst43HDPfaZnmAU8ZNQkUmJDquZSXYDdkKpS2uxVRuvb32zH2dMAmn",
  "key14": "jUt3WFMZsTmT2eZoMFnQPiz89JaUmHtmNRArXpzUYtZViSXJ2bTg3BeU2qZ7x2uNJ3HQhpgCrbTJmr8QNuntqu6",
  "key15": "3Fjeaw6p71J9ituxvmXRoHaJNACnsWwyFxJSsEHTYRk6pcKbztQ4PLMYSDmYf3bYQiY6LNMsEJF3R5sxMS6Exc6m",
  "key16": "4haQm9TfhCpp43gtBRDsxE5BRK8SD1HY27BuELaQ4HnGKPE1U4rMbXAekUpVviLzc64igoaXPbgedbMGfMbthrjt",
  "key17": "4q4X7eDGqPF5c1HHDkqQAjoc17RPgHtwkY1yf6NrmeetTsmFcFo6QpUuXvDVxAFYcM822f82J6qtE8eeh2jZvS2x",
  "key18": "2RBDVxBgSKUjh5WH8knLHGEzqhCBqCP4ugQLMYTKcd7pbt8SqMgE2rqCpjAQYq2ZGSNcNRx8cTCjM8GKwCDf7Jsh",
  "key19": "yTLKQsRyLuWcSvm4jAND1sDaDLbNxW5rAirDLLaHGeWib1xxAn3AnXLJDnzYAZoDVYP8hVupagX2ze5sn5J2Nxa",
  "key20": "3RxshSAa5mWuGJpZwEeMwwR8J3bTHGtjZ61eY2HJNo7hQBdB4F94cRWzbGQ2PgaGm8TeYLr4vV5dA63FbTFp1fxg",
  "key21": "39dNHggM7nm2kxkbod6tQ8HGSzfC7ynfYk5mzwu7HFykAziHX3RZqeywZYqEVByjrUyWEfSN7RCQqZpiPdsC8rAq",
  "key22": "5GzQUwY9HnzvQWwXB88DSQa6MZFHX93Hc7uy7HXmCHmAs8zdiXxUXFmexGpcxUeVYZWKhCuwTYHfCcAmQjSDGp6z",
  "key23": "5myotcuT9Dw1cCSW1tQTj1BfKKmvLNmiyAdbTZhfE72FtSYAKxGhxoQ6EfV9NgVxKdkjMXqsdKdu7CdKhHyb5kyW",
  "key24": "62tauKk3kJUnQgpq5n6bq38PHTDgVuC4jwH5eFq15C4k97Y8NPhRNwYd3pNSBeoH42hDMjBvkCbVimePvTRvQgqQ",
  "key25": "46VFW5u1Xa9wXvGnsUfPsEX9eVfCxyv4r35NSTSxfTVC7gYkq1U9BAc9ttKRR2jDHUFjXcMJPguyL8pLc2ToSmGN",
  "key26": "2YLyuyFuDySCMMeTTpAmAegyexjXGKMu4x7Y8ZyEHfZ4Rhs61FLfoUE9EQC4bF4cwDk4jZGfaE7QkQR1azeJedhQ",
  "key27": "2Yxzzz1Ux4vcw6YwStHcZm3wu7r8VzAyR48D98MqrepgkCfRukygh6S4ZWD7HKxUFeNmsANxT3DEbMXs5dQwAkEa",
  "key28": "3a3HjGF4XqyTbnzwae39Uqzq8kU4YHBdxAm119keFXdgHLCkuQ88kMU6gw9xxo9PKEXmSV58CXsAbu2kCzP6QeKr",
  "key29": "3Au2TKSeEnUUDwDyqXthbZrCgBP2ra1zP6auuhXi1j3GfQJoGLMb8rkjJWuHZkskXgH7AN8MmhTEU8UowH7iYobE",
  "key30": "34YwAYrRASmDRB27po8biRnLTvpoQsp7eUotxdF464L2G2HmqpPKTPjXkvxTDZjXm59FK3dFJZKftG9VLLnSCfPh",
  "key31": "4X7xqLudUkC8pnzgpAXa4H1aerdyqEF1wrwLUXK6vQFLTAtceii1p3Dwsb58RLZ15VYtRUk27Don4ojRzdFLFFHJ",
  "key32": "59n1tLGa7PVc6mMUa6BGgeKQUnzomVcrQnFvnBmCj7AZHyaHHjFZtQXRoSQUY6xpDu9hYr6cUNNMqsV1N2nHYgm8",
  "key33": "5bv3vrpjKgTgZArAqCXZhPoAquK4ko7SxJznbw87JWNoNap96ZcdkeQVnbuJ3SFRKPhWgBSjXTzoLqdpsxtmjaax",
  "key34": "4nd7dkPeu6EXMymTbzEf3SVXYiZ3SbEwAhfYrqjdGqp2snthyvtEGvNjaw4eBpGWtVB58usRGtGEUCxwCHKS8dxL",
  "key35": "29Nm5LuKqyVBeBPmAw4wy1fEHZ3ckKShRmsras4ybWjXrNRWBWYnJi7WH6GNJjMcLG4T2YuWyiTxTwisNw1WdW4n",
  "key36": "3wzSCpF134pepAtV9tHTzFE63EHD7exrwBVLPRgBtQ2MFWyq1fHzhxVciBZDPEyeSo2K3vJwpGfLq7D8ivm7Eu9",
  "key37": "3vZTR7RzHaRje5SpmomucFrd4PY3ZzRHcgGfNqWjy6D45b966odQRU7EG5SmEKaZWkYd7UzTjTwhqJQtouJqbEWs"
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
