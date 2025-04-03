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
    "4g9gcdmscL4UMP9tps5ztNtB92WdBuKVDpb7QzEUcWjg4SLu9w1VVsf54bDqJhmdpiAKusCPVTByjWcH14nbziWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDbqX6TB4D64hhjB6VcHuA5bdYnN1Jo7qkoK4bhE9Mv9ncQmpebLDJt2vJA3R3BVGGDw7obiKbnzEU4KAS77mUU",
  "key1": "5KsXok5HQTcTERZ7qZmxVZxLBMv6GV2S8b366m13sDVri4swVotfvVYcGeCWnNdBuFAq3qgadAegX26TAq3LjDRc",
  "key2": "2nkJn5VyrMmDgqUw9bHkCeG7St8zPXYneimTbqzgHfgPdPBFKafXesm5AAkN9F5MAxRmdis4xxvKXmURkfDr59um",
  "key3": "2h2oxG2BuHnZJmtCuMrHKddUh71KeeFQ6zrfdaJnr2Fw31pieJ8S6z6GRZknrJy112EUP19Ay2nuhFPosCd71bUn",
  "key4": "Hd3QVdB8B7BA7FJuXYq5u4LcBXtVicqi3Z9hYN1R1SPwsCqYc2Gsghb44hBfMHmee6djRPRWFJ9KLihL5WRYba2",
  "key5": "emYEFz665TTrw7DynzCWRHYb4KhzCJAkEbkPaBssUpzdGtyjhYbigrZ2tBJtmVrishWyddUDtDZ2piMazioTvBj",
  "key6": "2gqyqQPX39UbRcsC4RyapAC7yeEWw22reb86DdJvPAENFnYeLP2rsTfVYTz1RGbYHq9xf64nizMZZHzRHTPg3JmF",
  "key7": "4XM3wAx7TsCBR7YrLk9zLQAmYDbd9s28eiJXpLY1MKMTvy6PCiohawgHeNaBAqryNSf6ZFxVxxFJTjykufPxhyE5",
  "key8": "36cEj44KLFDZm6ASn5M9NUfiXHoq4cCRJ2whwRPr6WMh1CGrNva4dswTqQsix3TgherFTpwgha2auJzcGv5t8XK7",
  "key9": "3X3V8ZnjHqUcPr68kPuAN3B7tHAsMM1t2Xs5D6JhQw97BuKLHD4uAGkaTvR8qYMWBWuHvLLwQ1CVbv2TqbaA1d7m",
  "key10": "4MPtKpcVvF1HA9SkoeLk383Drxiu6koPLZJEa8MQGmQso6ViEVordZBAXmL2RZHSp6L6UVXr45bJyzjZXaRXvqN",
  "key11": "3sY7UJkJzf6STCfjnJcZWVbQwCZSXAnxVXGYLytPLGEVuxpbGhj9v2oEEXYHbzJtD4Szo5qqVTWMq1t4DEvsZkY3",
  "key12": "2xMHoJJeFQfnrNe31MBvu6PyZjkw6NPHjH4Hn1TAL4gXNHgU68M8w2GBA6sGTxYJQrdiA1tZm6XXtRcvgschQo8F",
  "key13": "5ocL8Wr4wZ8j8Sb9R3rrh6msVQzL8KfGw5jAWPRFQA1UJBkFHetGJcvCY9b4EamxpXPpbwt9ojd5EQNC2nhduTep",
  "key14": "4HUygpMtjHuWBa6fkP1g2ALE7ffSKRnYVVNqRcZ9Mk7v4et9zCBUwQ8AfWgLzkPMC1nx544dZq6YTcnCwGBSCzQY",
  "key15": "5CqQAZix8mMJ6AidreUi8pxKLezwKbfDq9TrR1s4vSVfuQ8pDJrvTBqf9ib6ehqmcq2Gu6L6SEoXisWNErHigvai",
  "key16": "2XS4xnNSsD8upZgzXFkiT3fLqfX3SSLHGJkUzH5wWEr8yQEyfi5nqbqMKXjKyajvTxo8kTLAX1dg7v8nHvzvDn3B",
  "key17": "qdEy9Ypi3yweJUENp2QktnH758Z9nhe3xfbtfHwqY3ucncT8e8Kgx3tFMquYSDHeBNWmFQunVgFfCTx9oCXxWEX",
  "key18": "5g53WW83rHS496Rq3TyZGNPLwZW7bAnzNneWbUCGfEVG1Xkr4MsshZjDq4UZnAxgBYwdycMoJBefv3kQBjePtvGC",
  "key19": "xSZFw8tmoMRKWMgiNaxm6YpQre6gU7KnMyUj9e1EH23SAZTQaMwQJNXHUAQ5cs4uGkBJGUE6hPr4ng4uyXK1XhQ",
  "key20": "BojWPqeUZLh1xLXTvDFqQU11xEDZqQqjbkVFo9EyeWtrBd1UbpSZkSQnUoCQeFdxTdWCVdPadLPvEMF65V8pC9J",
  "key21": "23pTWFP4KujAwajiU1Xfj6rBTXHyhTXk9Tk5fTCoqHC9wer8rHaog3gU1Ea4MQUTGqwvb4JL4KqnKsReaUwHK1Kx",
  "key22": "5Cb13RHhsAhVhbybYWXn2FULdhQTZwMen84Ndgzpbek61d7VUDZsgQAG2AK81URqiBXGHQJn91aoJA54mmFkSy8P",
  "key23": "cAosrmo9ByPyPf19ADpYiC77ARTihNNNzGCkj7ge11DT5PJ9DbMeXHa7cBxDCZX7q7wQ4ztaFp5Pi9dNdPM5J9H",
  "key24": "4HNJuk1dnRu3PaSKo1tXHr4N3vrLMHHAkTcqmSLmhtetYE5mU7ZHadiVcvM3KB7xKRjj6HbLqBsSepMpBny2T3nn",
  "key25": "2YE6PzvRgrqQ73uoqzsuAeNJ8AyfbuvLc9izNrCjTfdF325iBLGHDHea5qgdCFxP1fqSmBe3nbP1MLASUskBMndR",
  "key26": "5JXK2oc8e4uA1RW6MhPX9THTztUX16przD9rVWXpFqj5aQesXeZPoYZC7NXFZ8bvwCG4UKng6YYGAjMePF39oYP5",
  "key27": "5Fav6XNq9yWNDt7CDUWbRD3snMMAvYzdA1jmTUjtpesBQgV7BDTwYAUQS6bUNi3Qh5EC9hEndMdpALo9kfMU2QAC",
  "key28": "5T3zwY3BFdy9wSHs8xfMvUvoXtQcS4DrCRYUnnerUatpPLJj2mh5ypawuTP2xa8FJpF3LAN8dVdMP67GgXXA6hbs",
  "key29": "5kuYV4Ma2SeteSXppQXunLxtqczLGyw8NUx2e6gCGdvBGy6gUAUHJQmLxKBDQSWEyQVd9LpCWoJkAwRDPKJihvuX",
  "key30": "57S15eg2x1DKTAk3z5nGvwqKVZ1Lbr68AvXupUR6kRbFP2hqrypT6V3WorQUBfuh6uieTSNSzaGG6fh1skVqZH69",
  "key31": "2KmqTYNy3HeqX5ZTVpbaJqagq7SfpjtDQyhGKvbXErGJA6CC27s3tLvw6xjYuid4B9TAwToyHvx4hazK62QPi24C"
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
