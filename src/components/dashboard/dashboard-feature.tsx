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
    "D4XLadRfuWRxce7ZHfMpG6MsVRT9BnK94mXpNgazb7YAHfWE5yRwN1FX9uJxRcv4Ls25zPjCCeFYe6gxG3V1DBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mics9y3rSmej3bDqhPvrJR4b7r2btzSD4Cv2JygKAYVassLtQdMwT4tmqhfV5NfJ8tc97FKytT8yAZnrzUUJLre",
  "key1": "3PpsDjZb4oo7UJLnCQTHMf4Shxtzq4a7Fwi495f9sixM6eaqZAjSxSXkBPv9uPkbQmSmRNfRMaEU5gDfLQayYBhZ",
  "key2": "4TRCrahviVFfC1bYk2sf1QGfcm4E3WyvatRgsd8HRQKe93HtBZAtWBWyugJt8SDZ1WKhjZKY84CCkXpDyh9CdTyQ",
  "key3": "2LL3vNpVvu8TE8HJBEoRJ7RSn9HKRBUd74KuEtByh6kYg7aRVfDGcBgfh9WJtYhFGehvm5zSxCdE2b7JuAyaXYpC",
  "key4": "472jnAEUpWffjY5Z51L9Efw9Kct3WjqXg7eo4Qyw2gqm4VWxYSrhg7fqwaNhBrS4TzLEPHBzKirEHrAJS6mDCDxh",
  "key5": "svVxrt2b8JYuB9qEPuFHaP8UGh4WMFpfGKc7RryZ2n5mUtCYNNPEDeyQSyQ6HJnVH81ahSNNEjNWRZJmwJdUHL9",
  "key6": "3x2CZiTeExCNJvHdyskRpHEkRFcUc2p3BYigk7Q6WFrSEWVJHzaV5k62pTcAx98778FTxxD69cHjeL2mbx5KW8PC",
  "key7": "3TGtn9yhzn57LSFeWst2z6tyuLqKWMfZYDyuiaZUCBzcyaEpAT7J8hUiGFvwk8V2pWDjLxFxEANDqKcwadTtSUmF",
  "key8": "2crFQXyozM3CSRcxCj93m8HCtWhwojwENWbEuz1SvrFYTymnjiXEPH41NnKPPX5hhLSiUX6CfTJnuvrAyzMyKcZy",
  "key9": "SNMAjhiktXYyRrZvZhHhdEqXX65PPJTTXA54jXBShQ3QqAEfAsxwgzxNtbMTQPFYAcMLLK82w9Wobm4AwFiimfL",
  "key10": "jA7JtENW5RtoRPDdMcPFCTEX2W12VUpfsWzvSZwdqBHeMJbu9fi2x5eHi28ywMZsBGJ56d8zegCK1i1MHuwMY8Q",
  "key11": "3mYi65LZ22GKK7G3QZW2mLvRXGD887Ev9RKFZVRLn3Xb87vzLqN8CVBf37ksGeNo7ZgCF8YhoWbqDooUsqBSWDQn",
  "key12": "5VbF3YfTGdKQzmx6dBwj85iVj3STriA2FUKTUjYF6ByMzVTMF3VQZLtUu7BAor7D5UYea657tK2uEHK2azLzWS6F",
  "key13": "2mxoNPavEmq5gtxnkTZokMwXPwQkxHbsUhSeUkuCo6qVcSD2bra9usU4Urh2Rw9NjmS86V8TJVN3nneTwS94FYk1",
  "key14": "5URPB5iE4NFgTcQJSjAtcgefBcJGBiKPhajNpq3sj97QXLGAMkKdoEEWncmA1SYaCV5KNV4gRCZMDsavhvLijfWY",
  "key15": "2hqcnvNQmJns5VHjiQ7yuBWCYxNdvFwSD3pCM377Sj2yz5P7T7L91owUnP3eTkqfKeFuJoEEQCtYBR6VPqWrHBph",
  "key16": "28CQFa3qfZnMDbvSYE17BvwmjFrdgdXMzugDYhEXqAHeH6asdRG5xiTX5Tb1ctep1Z9zxf6czPh6k3fdKkN1c2rS",
  "key17": "5uDnDfEdQBUEbqipevoe99onUodEsmwFHb5rwSxa169Xx3nxaABfz6UCR3LDMWbUQDEojina7MhuG7UCQ9Fef2cT",
  "key18": "2rCCKuJo2Gghqt3iXuBPXCTBku2tWvvzs4Gf5REwKNjZFSwjK8pNz8kHT3kABHcEdSv7fkK7r5Cf6xVQRXwkmKEx",
  "key19": "4kUX4b9VHheCdFRAoNxDDU9XSJk697KgvSkXu1hnFPYigWNcAMLAkzhtV6LfLJAEbQKKaGsJHnVxWRctv6ZdJ9H5",
  "key20": "4FSB8LhxmgQFLcwntMXqvNppUgpjXwAR49uudJNHZfUB8h8PYMgz7A7xDLVwLHsDXAw6XfdHFLDqEM63fubdSYr7",
  "key21": "4hceXCtUcyGD3J4CcBfuniqRMQrdkLexxLVxpog8yewbbm2BCkuZJGoNN4xmQmGeZLSJTN5q1Y7mMDBrTKuCvjQ1",
  "key22": "4kemFe6SKLmTB96kKKa5eBbnVwJemzZXmquTmYtWeA18Tvo4JFQFhKVCpuXPHcBdznGdLQ1qebcvRyd7bgMo9tSv",
  "key23": "E2AJ68NJcghW14T8WLdsym82ZQgcWTe3zhFgTZoGCjH5ymg7X2Azr4sdMwoipnQfwBot9BWjobMevqVXCaSeaBr",
  "key24": "2k1Cb56QHNHEXSv7hvfWR3aq16Ah8v4T8dPyxtG2JZwVcdtxggxzA9QgR63maUhdgiJSRzgQFmTKvTrS5dusihcD",
  "key25": "5psXmwnphpiaA2uG3GUqwjEoPNZyLA7KP3VRALwakaAXm1MCoPHoY575EbfXdSE4fXw4qqbzjw2BnLzxrpzHf6cw",
  "key26": "BabTXNqvvYHe8rEUu2UveXGnWeZMPmf5qZk9ctkKTb84M2KWqYnJiQxoBwqH8UroaS75Q5AnzBVjM3PxsUie9M2",
  "key27": "3qXvir7G1AedY5nuMEvoc3gjs37Aws7XCtJvG2NQCrYnotbEff7dBsadV2Z5W4Kn1zybM8dQK1dszUSHjFwBKfA8",
  "key28": "RZwHDAzvLB83d3wfzZsUyBu2hFYiU51tK4vtehF7o6NHAd3tonZRHxmDZSdDCALEFTrq8jVekCAspenn2mFUPd6",
  "key29": "477XesrpfqiGuqbopca14MVKobnSki9VoPzH6Wdi6KgwvRmFZcknJJGp4qYir4XZb4ckhEDxrbQ8gPuTuCaLjSZz",
  "key30": "WmYDiwTbDpBHUw5zWp2wBR2jU3ugPzthFHC2d6v6bz1gXh6Lya1YkdQPKid4cHgYdRpnWPPYE41FzBaRCrY9C4P",
  "key31": "2dxao3aZXftvXPHscRumj9pprh1Ma1U2XG7JUnMcessnYCDQw13GbLQzHN9RoWcyPrXwHc8cF4cuZwHeArzVymW3",
  "key32": "36BhgfXegwMDoXJ55XdUSoC8bK6JCtip61EcGuR8bwqaNfwko1SboaKYbynW71EEbUwCsSAh27NyLviWc6La5fks"
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
