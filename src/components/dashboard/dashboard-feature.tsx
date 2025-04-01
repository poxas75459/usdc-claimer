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
    "2sJrvecNwyt8HuTC4F2FR3Y4gruaRCHkkEMuH2twubQB6rQdk9JFdiZar4dQohFZt5wBQfGp2y8hoKhMBsrgwrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FbZqTpFFFeDjdVaG5CMCX2hgEZQmLmsZup8xgmzEq43fWuwUBSTxqqKRUAEVgoHJLgiZ7HP5hCyohHrvsHDYiP3",
  "key1": "4Ffd9jmnskki6BXjCyzEwEUxxwPgKMuoGvCvVz49zxXwKKruwuUMa5kyRp6pE4JWYHtiTAoyu5aWQBJaBKFFRYmV",
  "key2": "4La5KBMD57bnLQWJLAJTi5vyuAfnPYvPRq6MoB1KKBngpoZRJAcbpKQBLxm3i5PsfDkmb5NEgS7ZH8mXcykhHUKa",
  "key3": "2Wu5iDmbKz8kbfowo9sRZvuirtHTrYhKgL4EFSMxBiaAEe5KLMDJdFztPTyhk9Ttfqikey7wPmGkQrtS6sko2ev1",
  "key4": "26pir42BWHgfBiFgNkjwKXXWba7WnPPzFTyJApCtKG8eLXqHYhJTsnk3kYnppgipRZ6Ffm8ydrKhANF8wEdSmd3F",
  "key5": "5wNuCkKPJDqfsCo49Cpx9XyzmGEggMghJTCLoQPbzgdn7EyTyyQgHNzoLbXrhPQYLFheMSapgF5VV51QXyzUYvqH",
  "key6": "NJzs1CCqhg9AhxmyTTRcvw8qHuP644iusjmBAaURobAcUyTHVJgXJuTevqLCCVyRsEZkC4Vx8BWAeAHWvHPWF8f",
  "key7": "65mUrQcphHGzba762ajPwLmrzU8eKMWe14M8Qf4iNdExioUYUYHM9prDQV5tFoMDESj7Yjs8DF8pRUVCdQw1Q2EK",
  "key8": "3hBHnVTybKB5DmvaS94cWeEorLLgnLSsAvfubkDyjH59K83HDGp1MAAb4eDC2G7HCDrMmUmqBpfoxUwg6MPabm3y",
  "key9": "2tSjkeQvY7EEaCv9JwXM1KKPSaHGRUvVugb2sz5AUg9AKMGS2ApzjwGWNZ8PdQ5epLbkECvi4HyAgxqj1Xx5cEKn",
  "key10": "42uCWJ7cdwZHjhB6BMaZ4YtnjqVAA2x2FKU3N6ZKjNyGYNCXpeCBNFXNYm871X79U2X87pvpCPCHG9b1oWUE8jEP",
  "key11": "5HR2ViuoqTCCyyPzofSMW5WyQvJoXjy1e8KWDAL8QAP3kJHS4224sayeM89v8yXqP9EpGDSAQ2KDPYwnwz1NimWH",
  "key12": "4ZzybgfvRA5tgByC5UAc9atUjScfZ4XfMAiCj8dCkz5aDJA7QuBXrLSDToAPG64Hss7R6MhujawUWZaQouD9eFpd",
  "key13": "5MLis6Lc1tERvivK7qBBLxwkrQGFGgnNEg4QBfiYVbYc5gzEvaehw42VQSRHUL4dnBUmvnmCNo8fKQ76JUa2xCv3",
  "key14": "4rnXUAGJ3mV7grsNNDYfpJgKRFpXtSbAARnWXV5SgovTVdSzFa6ZZRRDga117ULTy7zS7m3MKZTMBh5AoZozRe4T",
  "key15": "iGsYBJgFAKq59Ah5s3CgQtZtergXpT6eV91DkW8LCDD8z23metHNiSz36JWYszW344PFDwBJKezn48poafM6G3o",
  "key16": "88cFJV2jWo9v67ZFin2aAm5j8Aa6CNpwwMEftbsgWV3kvijqeXyFQFcvkuZRA5uEaVntQj6BJYJWGmXQLsKD5Qj",
  "key17": "4h79KKNF2tsaW2Pv6imJLYTMybiAxHLNT5H5BCh3yu7EhhbTi6chY4SnrCpiHLqytqnRMEkCApwh9xjbmMa8NskE",
  "key18": "4t639P9qouVWhfTd8RND4KfBUEfwMYgRexFxp6uGKcwjXjTFyT2Aif9NQaAh4a5fUp5AQ4TMFMd9pZwvsC4SUioo",
  "key19": "5UoTFeBJ5vCW6J5kuK2zG2K1KnCcgFw6bedobjNZRncUUVVEWaUk3CfGdXMZsuEoj6CeNcQKsBF3TqnjEAHwvSiE",
  "key20": "48FNvjp1AqKbAmaus1bEfCxpqP1g4h9aJHVWqq8ZUbkdPVkix3VDLcbCBggaSP4PUf3Wp3uTHS9uRPpbKFDzvoH",
  "key21": "4e9nLyzehn825HkGqwCvCJqs6sc5xR3MjEkKMjiEFYXDdH2LeHR5LYZjBaWC67myNVkNBs3JXpuNVFe1HSNTAUz6",
  "key22": "ffnFDqDZLSoPFN264MbJ4f7kWzb6kmatqQbG9G8mKpEUK6wuhbEw8VoJi48xUCCewpHEUpg9phNpDFPSJauq72V",
  "key23": "4btuoa3c1dckCTA1hdWUhL7o9kd4H6MQzGYSsgadbkxJeeA9hiFTfLQCxtZVuuWkFccFWfEgeJWStpp4DDJjatzT",
  "key24": "27TZikpJ5NuZExRB92QpRdY5FrzMpubn4AM9wiWrsaP6v23bKvC3XEQ7UcKQkJFA4HKkn7vE9SJqXH2eN2omkQMK",
  "key25": "3SybnTJc7mYTWmxEv2joPMFCQNMtq2XmE1JP943PzjmnBEKK8rpQp88MXMKsCGtRLv1rhDPnfWzvcnR39v2JJ7uj",
  "key26": "4Pz3PhNa4whq8nijHGHNRcEMECxcJ5aBGAWgpH7yiiVJeki22NNnAf7dFSzENH8FCFwq2WpZKfQzMFnihuSeSDdP",
  "key27": "2yx474NMahoPgB5eJ8z3mvnW1Kxj7XbvcLUHBc7Lq8gXfAZ7H2CZQ3SESQHB7NrRZE81vU6wKgNmBGXdEUTZ9y1",
  "key28": "3zZEVxDZk98LwxCx3uu2owTVJb6fM1Qtogech9JHqjmBWEMNb946cSu2zasgZ2MeW4hBs3KnjkhUzySEN4pJBQxv",
  "key29": "8gE68ksGQVSzuDtffskwsJ3Mu8f1zVjcHM4LnqYrjnU5S8muCFvKRq47vdedDNJeuqNp9fRxL6tQHY8oSUKFdpU",
  "key30": "3f8QXciYA2RNMK2bcpaZSmxawwBzruFqxQPgEWDzbuVvoHfxd7vV6ATALvg9bBdMABS5dYDwATpkcKPJj988LTSu",
  "key31": "DrNPTjtv72BsGfZzh87d7LhvjSWDLsL3wdR4zwWtd38zBBx1Rt9ivdmuhnRKXHQmU2JANYrgjwxtb51o6fMP7HY",
  "key32": "5JSvqUG5UX8r4BaRz2LBP7AyKCp7QDQdo1tcucdFeSMzZ17sm2fNxifvFsv4S9FcQUNyL2kCmHVQYbYwyQ8Lp6zd"
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
