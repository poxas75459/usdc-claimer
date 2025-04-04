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
    "62VX6UKGFH5FTuvtdnHz752mKpCds91URdAda8T2WUb6T5nMPdnMz541L45Qp7ZsXA1TrjRwPLs1vDsm4MCLSvda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4Y8uB79ebh5zE6rsU7tRTx2C1BykCvKnFtYUDZzFoRFH72ZNBu3xHiMG9qZEK7J5dN5fV18aRxWFj7A6u4iPwe",
  "key1": "5eapwurDpgh8ShxnjDNAboTxAmrbrouJkZFthvxzkb5e4GzwW5QY3HedwKtj6fsoBjagfrUGTnHTnsq2sRNgoZ4F",
  "key2": "2d4GVmtqT3CnBKQLNJCQKhLWErfVZ6T9LAw2mTSxmy2xPxVSkMJ12pYc9PmKX5M1EQEd4SEmpKNbyqBBspXqp2Tb",
  "key3": "sKFdoVGhKQVwmBky64arWhKrxPjtSH6bcLRxAq3txosdLeUVsDQi7KWHmSjjNxaEoRUWMy79sFKBUqPfkrF7EE3",
  "key4": "62K9TzEHhRSA2FRiaGLz9mf5sg4ysoW2pYJJWnQDNA9R1xJaLU7vhtcsbhyLwioFE5HB7PdK823c4kNcuzHiE6MZ",
  "key5": "eM2imqxsevmpZzMrYyfQPPuwpoqY5gbQ8G3XPtUCsTebvz8w2q5wQwbMUTmqqi2bikcjsWxx3sxCMGrWDXN1FiQ",
  "key6": "3suVZMZQsWXwM9ms3avWdjtdrFcLQV7iFeuFHd9BZK1Y7yrJa3utSVtrGqUQoeraQSAms5RUWXo4asNjCFXWBfpN",
  "key7": "4uaon4oSM3kSgWvFhU42pN6EY3m3xRZe9vUFwfXTcDx1XjCSkZHMdQeqLG11RJNLNkUrKDoHLGKCECsdxC1ZtTRN",
  "key8": "i8d3YGDHHuR63ujAwYY6qR8nk1ktRXWeLRNN2NqnJqSUthE7yPQCD1gCmhBKAm19gmeVAhFX2dCozVj3XsopacH",
  "key9": "55jN5uK72y7PS91s2X5JjmTbEKpba9vZQbyYFF3pqyfnXmRndJNFuTu9cM75byBnzfuxNS2qnMgeNarqedYujhf6",
  "key10": "3WL34JncYz72GinKognUNpoMh7zGMPG1jbwdPQNyXEtXcVSeApr5GdwwBgZrRTd6MqCzyhDXjGenVEcjbhcRHWrk",
  "key11": "3FQFiMz89TjvKJuGH5mFWMv4Kyb2xRCynnA6RWuJKSU9ewsoM9xBpW2wPfmZ3ZeQormuEMKLtbVHgsS22rb5hvp4",
  "key12": "5GoFyj9yr2eMXAnV8FiTT4rLv3wxWWS82nUwCMyyV1jPVQfQYQTwsHW1HCvJpbAhpLGrtYR5dsFgLLdKUuBBcTig",
  "key13": "qCfaZdW7hgENYE85Gy5VoXy1sVQo6899wiHZuDQTVoDjY8k5ntvT6s3hJoPs5hLaFpdNzXZpEYcX3MJncuAMf74",
  "key14": "4W1XuwGhnwbABMG1FJNN7Z3HMTG3TM43Xznn4Adtd8Zzsdm5fcR6J4unGYK9nrAMXYmYXyNT3R2bajKqZYGEgtWy",
  "key15": "4hdWghn8Qe5419KhTFWc53xys2qzUSM6Wz9nzXyokk6PDcx8d8ndiQtmyg7qwVszWmeeLFpBzLEkrPYS5Esq1o7x",
  "key16": "35w1ynRf3va18XhuZiAfpZTKuVFbfyhfRJcHSCgPE1dRdhsoSKECYrHV4DEdgKtk6HUkJNYN4joUyAk26SSReuPL",
  "key17": "5gyx5RhLfC8srL5TFoR5jj8gDoYGarmwb8EQfwNbC1Zm4kyfseGWVE3AdMv8EwvCbm73JVopfWntaazctou5oAU9",
  "key18": "4v9rcbPc8CXQ5CxSz3s98NdaHpWaSPJmJ7voVxjJZRyuJGNwoHzRtMje8hxuEiGuFfR2hjMNkbkCDzYPxDFh7K4X",
  "key19": "RgMYhZmYvj75rY9tMftrK5HdW1SavQdrTWx4vHCwQAyA35rcwEch673qQsZXspSQup7tT5LE5inR1HM5ktabTUA",
  "key20": "3WSE1KrYKUgDnxkcXrwK9V9nieAs2az8LfVJjopGYfNi1ehWGDZJ5aWfXhGupimvWkmqgZV17CCVLMNCtGARP44G",
  "key21": "SwZoijT9DiZXu4gj4X9pYnJNi8cRH7Ekv8qEWw1g79PrTYQ34ZYwtnENg59rMutBCbBkGQe28dcFSryzVo8U2j8",
  "key22": "3VfFb4fUu1cv9o4XMm8UJ7zpzXMcC49ay56RaPEMMoxTHPXD6XvoFFJuJoCd2EhXuiAuV7QDt6PAPxmabvDjZqfb",
  "key23": "5PMyF3siUjBF2eLbCM1hEnSd8ae4PSw2pHH98oPoi2As81syqu51MCoQpHfVjkJnq5XCzeemvkEFBsJKyatKhcw1",
  "key24": "3zELwXJjYo5oZL7P61wcZqiynVuBAJ7U9yPG7VQZYyD96SXPE69HdEyuTks94wBmagvZWsHZrFVR3LnriHMZZ2ik",
  "key25": "59MURwxj7BxTPHoXafZjQiLFtvUHxGcG5b66wR2HAtJh6BUT2csMj6aR2LVBav1ijSaQB7t7Pc1xC9aj5nkA1m2W",
  "key26": "45acHomgYLep9dzLYcNEcEyhwqhLEAkBGtmkqaUptqoHn8SX2R68NbZ9B5WFqT9cEwerKxBDNa662x1jUiEML2H7",
  "key27": "4jcLtc9W898ysV7hqwWb5jPa1m1GRCZH8SRPfp6dNPQhBNwjB9YDtSC6z7JT52qbgdSCTgWv8Yue9QCqMAS6z5H8",
  "key28": "4zA4oMnyUmWcN5nPisCqSsRWLWRmArTL245gd3o62yC4YFXV9bbf6mNia1JMGP6KK9VWtD1JCUWEsNqBubZgaqaJ",
  "key29": "3vLFwSvUbS1kp1usmqk4sr6viFPoYFJpggaJNa1WQX8SZBo1QjRQfy8hcoQZGDQqe8H3GYadqMCn7oSguibJcz49",
  "key30": "2ck4NkzVyvtCugMPSoA9apJg6gfVFcMHPcjAoTqy9dcjNv6HMYWh9fZ8vzK6Y12sZyMzgEgWS6f2UihMa61rpVWF"
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
