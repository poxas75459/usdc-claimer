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
    "2cBuH6YTkGq9pX8QVxLehUDYFQpi4DPSyNXTgyTSh6CpJdi7VfRy159SFNY8V1mdkpNKRwDeCg7GcHbGGn4qSDs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hnPG193FZMFjqvXn16LskfzECNjSf2VS1F6vx3cHs3HeQJu6LMQq5CKbU7R8KWzDpt6pnyE6gvYvBDLZmFMuRT",
  "key1": "2iyMUStH3o48ygZ8ZDw6sCuB1arYZtRcFmp9rZQskTG2cEz8c43KGU8BDhBaiUMVkzSHfBgeJkXjYCv5s6jC4HAT",
  "key2": "2Cx29BRohN1zZif9rcg3StnmYLww62XssWaTVixXdzgqhA368QdB5JvwdwrpLDMpUdhDbFj2KPYqWPKnojyJw75e",
  "key3": "2sj2LtuoXjSL2xUBAkwEQyrKiXvQ8v7HphxxxjkoXBhdmc8qqiC2mXGTz81Qg9dtX4pTMdtRJmNhweKeqWZ6KWF7",
  "key4": "B1A9oAErsAMgnEsn2wxTbuigtHGhL1eKecJ18GTESFu9DEwGRUERyuEWCj1XDwSCs8v1ZsZ5C9uvgL8LdMFmsUL",
  "key5": "5jmNtvwTmGhPA4DdFceTWKR6VoBfbrE6ZgtgG3ehgVjnuqjvt1WtbgtRa2qC8YxpZQxQEVPRpJnSziPh2bDuWXhm",
  "key6": "3PG1ckMbojhtcU9UyfMmGEVrq16hwBVQ1CujFfaEKZggGQvyGAJ39wdzwZc941ZF9ANrpTPQpV7CLwQ9YeoJVdFW",
  "key7": "661ehnMTTxu5o8ZAtLBTA8e1C7c4T4miyttLd4v92U144SxDNWAmLN4iELoeiXieTSswMxA26Ngu9z67W5YfxyyC",
  "key8": "5EJP7D57JLepJHL4zrLCHKZ2k2B2CrfaAUhmCbNZ5fnT7VVmGEHj1uaG2RjRQkumEgbGQS9gmBY9LikmUvxtwRvF",
  "key9": "3gnmcKxAULoXshMXvNjWvgESpd97xTRMSvXtmkuQXmu5QX27Ji8DHtENTEKwDjck29NqqhKdNY9HkFfvwxJ1vmUB",
  "key10": "EDe4q1JVDP4EHCGUw8t5cVBAwzJungDnoBt5rBnhc1xfHSJjJu59XZvHbsrLjhZUMKsMCmRCpqmnnWgLtZadKsb",
  "key11": "3yEPfwF9j7zRgMJLyCfMzoe3yM6qdH9fkyAEzMzhWH6qFhqu32r4esYGdLRvBD1NuXUrQKujn9FuaixkjkncCUdA",
  "key12": "4p114unNBEJ8CekQeTh684u4KdumYWeGPixrjx7M6PpZDHzYXeJL663JzEAUL9j79ywUnCq7uF5JLZQ23UZ55LYi",
  "key13": "g1WgjKTLrRJdwcBC8bgvW3edQpLhJ7xy3my6eoRH5oeY6WMzk181mGkCHewbR8xNMjRy1YFm3dCpcJkaNgahr3c",
  "key14": "2rHg1uDkjWXA2apSF4w5gF2xZeQQfrxQzd8EWd6R5jCsDbUwLGHNREE34m5sPgCnJKDrMrcp9oAX3BuQZeSn56aa",
  "key15": "5FugFvC2JqZVpeqe6yK3Pt8EVPQwFWGvHuh6ifFLLpPbSPCAJsFz8J51SHpZvtvAb6ZiYCVLEJLbKwvSPfCgj8WA",
  "key16": "3Mcj6UgM9k6Ervkgp54VqDtJwwmDcSW4QbxAzt1FF4WsP6ieDoCMzJgoMPA1gJEBkFPvSbiEXRci1wQQqBz1Q4Lk",
  "key17": "3TeG9SS5E4mcPW1WNtEUqeWPFe9v3Pz8fafwFxn7rDrAp6QLfgQ7ctt3XyTHFkYq3HQJ37LqvpDa9n6UZqbNPHbM",
  "key18": "41597SwJo3ou259fnqMSpvwsSdPNtY1i898Unu2P2tmobFYe6kf3WdspR78KX9TmyXMepeDDzU5jhtwDBDbMmNEj",
  "key19": "5r5dQWHPbFJ5fKaDwG9fgbiGUBuuDvNCUmrETFmmULSRqurpwyjVBrWTRvp1E4rFXqLsreNpjqzZDyXzPxzNxSTt",
  "key20": "4cy2fgvUxSs4KsH6pR1Cz73oV452VQXvNYJMrg8dLBK7T1gaddVmnBsoEuXeg8UU75uVZomi6BJErpVQa1NUxaJF",
  "key21": "4tUiXXRbQW1qyHAGacde6FApA2SNVQrKNMBjpeaYhD2rwJUaXJb1GjswoRDkDGb9h3cNgosHLWhnp16LNcW7Yt8q",
  "key22": "2DZi3dscnBfFuQuYjL9jYo5f84UNeHCCQezdrKyppxvT4aUh9WWqx5rVmtoTzGyjZDCeqT1duLcUmAMNrc5k1er9",
  "key23": "3FTgLTeQPMPc3b4gCvncdrYCGQ69sQXgHrN5WfhERSPyVoaGU6gpWxEuBTvA4HWX8ZvGF7KWypuDUfjJ8sxtJpFL",
  "key24": "33b6CxHCXsRc4wYEq9RPdZau8SDZStTBVHrghqB8LUvSVisrAKfwwTjpax91crmnFDfwMyBY6AzWDQ7wzn8QEwc2",
  "key25": "2qkJtfnTJvBHfDnCf5W9jPZ9R2hB3h7JPMZEiT1xz7MM9e3xh5aKg4VmMAgve1d2SBSMW6TQCZyhfmbUkCAAaRSZ",
  "key26": "3NSDXArQMEv99im5R2QkB2xyNx31D2jQQd99vkofkAaq6HqMfu1sGMk7P7UNYNkPtEnwqPW18q3cUSPZry2ZXFM2"
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
