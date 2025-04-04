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
    "5YR2bALk5EvJhrEy2hVo8kGDnjFrRMozWUkkmenLFhyDu9djc8ZPdu7C5NJ4r2nHwMEHWSHZoTQd4JqJAveqXtM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CoSktf3Q8f331nzDBTN3gQJ2d1FvjxQbskRSJM9GJDBzdqJkVJrMdiBzVcDEFSQrWtaTpUQvipiENPuXncdvTN3",
  "key1": "2rJ3z3SKjeBd6Nw7FsTNqa1FJah3rUUqd4dNRA7DC9eDiwMYYN8B6RoiRw2oSa8zSBd2YNCb8PmCSgb6oMKVZC68",
  "key2": "4qSviKSszeydQtdDhX1b18M8pzv5pfeJK5WRcLpofuRVsf8XfoPWKm11X9J8PNx7rjg1knxFBwH7UHVy3Y8FKFUe",
  "key3": "4BN5JCTU1Gz5smTwCdyPtn2GeMkZYJBS24mQPB8hJNma8smFrrE2WBCpM2mmhUU7tMa28AFCK2c8d7RgCajiAabs",
  "key4": "4y2cC9ZfMHCPX5A64xqgYLLDMAemskPwVZvSxGCvB7QPCZQcTyNHTh9v9S5z5T6Ggeq27eTx8zZFGV5yyj8tvps2",
  "key5": "21o3i46djTwtzkAxfVJoLcL466ZWXxZYsDgMKmMSBv2aFAT5Ysi6UXBUGKHSJb4tyXSdhAQByiSnuyrVct1pvA5V",
  "key6": "EJKPhNkfzZR8yAZXSZ14vjZ94hK8w8YMe37Jrm17PPjrEzKznz8tw7WMKwFQvNXWksC354fa77G7GAp3SaiWaF4",
  "key7": "2aW354TNpBGNPhUUwtNDHEaTLS26bg5GzqwmActT98b9zvvWQBxmZrTxth2Txr5t4UZRnSN4u1xRzYu5SBAgodWt",
  "key8": "5UJwLQWMFA7hu6xuiChGsGNoG6mNS9DMqXARLdUfLAVUdSgh8Ziz2n2zHU8uB2zb98RAjmDMe5yt5HFkeVzoNGGG",
  "key9": "5J88ui6wNdPhCStBC82e6inscgSZG5wntrGZWPbiw8mJVZJKiYkdXWLkBwagNknsu1HZiybTgBuhVdJoyjNEQxRH",
  "key10": "ZAiFn3MTGFwPL2gi1hQvciqMtigVFyivLsLYpkhdoKKSprsByQL7nr1dzExTtkqDnx9nRBMVwE93viDfo57t4xp",
  "key11": "YJLHmSUwQwXkAuNSqE2gjoMNfzRtm3KyiLmPZMfDqrSi4s8m1KjuwZAUuUqB3KgW2V5VVWEhuFL1yMbqwV62oeL",
  "key12": "3bTQkkrBiAL5Jt2CB7PgAGn5hkFd5TX87Nfk5oPGhgjPYMQ6TxESJnqC5pZiYCbzv76ZEA7dzgXgsFgSGixNaQVu",
  "key13": "GeHSwvoRqa1x8B1zn67zFfBFMAJLDDx3Vu844tANzMGmH9vtx59wkfvoeoe4W3y4LTGsPuAMJieFhfSL23PDs2M",
  "key14": "1cncRiXk22Tc5uNyDJKTQA24ZrJttxSM6ofkFkqVbJAnL6YiLmEwhaHhNgVFGECsyyKnzmkVQuCoqvH3FzE1kVU",
  "key15": "3q1BQPZEBRdJnfYp4A8z7PfeXP6C6iWYeySwG3GLh1ghbdHrJPXB4ouh6LXvHH9MN4duY6tT67mJA3GB1oxmxuZ1",
  "key16": "45MhP9SFdT2oZ9M16wFk5nYRQWAhRpCC79HBCMy872TqWB2SmfAaPwvKxcS7huLwEjRuzJzSNYWQcBtewggZiasw",
  "key17": "48sBF5zQJrbygAXiAiUsyhe6dPy8KXTzfoHPbvtBZWP7cgBKpJ1gr7BDDczxU2GYJZjjR8YwGa6aNFSDpedVPvJn",
  "key18": "3b4Jnf6k8tpAPP6fD6VeXZqUiqMbjv1aaNG6Cc26o4JjqqhF7KQE4Qeb8JajzkzihWCX8cZ7EsnNB8NevEWD21vG",
  "key19": "55XbyyJuEGbiLt9nLT8QHcwoVUyvVffM7TZ5TmtQ4KaoVjzR3i6S3Gw6cVjeHp3jQ7fk6NG2XxPL9KiYNiyAA9rf",
  "key20": "6681XWPayr6mJUygCYoD5LdXBS1krcyJDArxR3UkBAPx6Y1AEdS1oMjarKzryNTzxMYmBmrFPUwhNfg5ujwa3Dwa",
  "key21": "4AszuciMpMhGj4NC4KVVMvr14B3wVDomsmBcVxeXifzFqivZfd4iZ3UWTZNfryiMnM9aKmoAcFB1X5313PwkDzda",
  "key22": "65FCwsAQTQJqoYTuem8hQ9PCSH6pWbvhgBQXwTKduj8xkv9J2DKCJi84xTgxqM94gMuuZUqNX3gS7h5sf6yFa2tT",
  "key23": "4m5cH3CM5o4WATQXFw7pA43LNJaqq2g2d6tiVAci2LuJKRWrGzibpNk8pdFVB8iLr8cRUjWyNcqvuuh52WM5ZeE1",
  "key24": "3CyLcaUAQgBW9d9KcehRWaL2zz35n1LP84X1VtEw8YJmBypDKeKwGf5wUcyyvKKz1azgkgJGnpgoq6Ri1ZuqjMjc",
  "key25": "3cbBBKZBWif6FwLxWbZMqCQqypqMFpynjzy4AGmk339CdBmYeAd5LtgzAsMJAi6o6HJyohqYnP532qvBty5nRuRG",
  "key26": "215g7zegWWTuKGUpzpE1FLS3xHD2oTtWgmAL4USwkw5NByxikNzQc3NZfGXDSpbwCBMiB88v1L7jY8hLwsJMexah",
  "key27": "FW3Va7qnjbDSQ5vcVHGMqZEQEL8muAdKE9gMxhsKnJEiWJYYEbs7JowiUKy96QNNyqC7oNjMDfrX4sqBUuznK7s",
  "key28": "5p313DTtHufJZgqnnV7EKTfxTwVWYY1F5TcqXgTTvAc4sAYSRFgwT3H7wGBw3g7NYNHcuexw9nRmpi3TEsAxMpm",
  "key29": "3G4u8BK2EswyjET11UjUVUPvZAqJpmN1fZCWSHZ3dtyQHsv8jwPBAbrU74J2ff3Ad9sSDgcWBk6keyS3jkL5Yac8",
  "key30": "xWfMQn7WHJPWXgRkEEw4jixAXXpwDhw2TfWrzHgEdBc4cWh1oBeDiSZyK2tUaffKsdnJt2jUm6QpPFm8V6vKYNa",
  "key31": "2pgGfTbaR8bqarpHHZvmNviAzDtZkR5BUmBFazNVB5ogV8m4Ev5rYLtGVTZVNVGEJNzwvZresnW3rW1p8v2BhSkF",
  "key32": "ujg6z9Qyx3g3VgPN4Cso2svEYxfHW1LkKfmtACDtAYwhqV1ZoMhE7hfwKuH9uqQnppPQKg6SFRWZJZbppAERY1c",
  "key33": "9Jog5T3xNU9pLhG7E1me22XUtjXmxcPeGACApStjH3gUrLybGqVAxQNKYJKUBnzUY4cz92tJjC1MNGEXjTwaSd9"
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
