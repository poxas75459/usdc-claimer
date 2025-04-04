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
    "3ca2n6zhrhEkNEXxb3pbt4HqXQniHySdkr8RdTaPe8jBxcHepbJWqSSLjWngrN4rD2eCSDfWCLrpFJ1PPSMFCPCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vR1W76vG6P2ZRPP1WUoULFc1PvpjbVmphyj4f8C4frwc3JcJTfuo5JBnfLYn7RvtDn6eEKJBXZj34u5qdAppiQn",
  "key1": "4ynyWpPyFr9drG95htCeJAZu4BVSmBTFfKe5pGFWD9QiWsp3L6U9ipXsHc1SrJxcijhetSpAny9ZR5ZzBV2Gah6S",
  "key2": "2p5yV9ii9zyZH1n6qwgxrcLzvxh4fH3o7HY21QYqsn1i9eeAPw24i5Aw6epopR9H6vZMGvSa8rfJeFvytxfoysS3",
  "key3": "5WHXGacLTkDXgVkSLyRNBZktGyR6zzuusBgvEQzQ7tgC1m96Q5FPxSebQwMLvdKSZeet2etw61sGP8HuHvUtwhcv",
  "key4": "5DRnzXSUCKmUDt4uRSAPMUzFiRh854AYUPm2Au9jWvjWjKjNMe4BmjFDsTidQjVVN6fQw15fXRgKCBhc5qEx48aF",
  "key5": "3DycyCob2zvR1QG6aAr3u7tFsoNRbk9vFPrG7wc3e2thqdLW6Vhyej7ZM3nQ2mdEknAB8qvxDMGbDGDNDjCtqVur",
  "key6": "4cA25NbbqLgxZ4r4srgQ4gtUwQsbEJKsjgLjdXJ2ox6qfsRAHCbd51yriExr5eEUCtzF58LnSRyDz2tosCzAMZYz",
  "key7": "3cEcXFrJV6rjVspShTQb7o6azrTpPgsXk2MQNQA1DCVE7jCc9Bgod7yTVE2VDeZwXs69eVvG8FEmxChAzrZGigf",
  "key8": "4iSW3a6mD1Lq5TeErWgWXi2dZ8iq62JGbjV77zmJ1qQCF9RCTZG5jMEnFNjh3GbAt66EHJFnNjFZF6Fh2xoauWq4",
  "key9": "2LdFfTQDU6Wndmx6UDzWTQmVFXNSzFBeeUDvacJzgJxcmy4Qhx5NevPR8gTNDLcBSGcDyHkrsuzDwvGSrKadbWvL",
  "key10": "37VCpvLuxnYPXKXkqyZvhivcNwtPUQUgkDqsg1CSTqG365Yo5qNa1vjYa3Zr3NkfDgHW7gMuoF2wSu1JU9DLuJuR",
  "key11": "24EcYd24YMYj7PFk7uHTniyqvpuUhK4eBxvLMwJKydA8RNsSvWewhBXDig6ovKkTL8u8g37ReSw2WDorLEJ6BpQF",
  "key12": "5rzebcZTmyG5JE8VvtMkdMxKyP2VPM4A9wgPKNgySoC4XwfLjkptofUe5gsjhpupH2FZPoeMYMhkzN9L49sN8rA",
  "key13": "59WCTmw7Kc7D5iv5TidDcrmwyAUr2q77nBQ5FacUoi6qEWzH9PpyAxWeUVkTmcNxLjYHuKePZkAJSKsP6nJAwS2S",
  "key14": "3R7gFdXxs3xe8HioVZZQ5Zjuo5TTvUfCCwDsKYYvmMjtF8fbAbntrzLHfntgpHyngYYJhHUPCFEHo1YhD1j4ESyp",
  "key15": "EH6hyiMw57FmEMsWgTZnLj2bABQh1HfHZGsBnUzdioBhaXoPB8PUhD2a3mTE1RdjrW4q3VrW5JRveCGw4SEkSGo",
  "key16": "3SatyYiGCtT4EB6vAZQXSs3eMf3qMKisGqK56VyFzANPLM4YaD4cCEEwiBmd2rPW8q83TpZop1fJarBMrKrBYkEf",
  "key17": "4qHZGo19ZbqpaxANz4ieArw1YZdDbWYXN1awF5Df5J8eo5Xa7xnsrFmRaAsooESeBCM3HXXyPcGvzeaCT5CbSSBY",
  "key18": "4Ttkdtt6bmoDmTwHmurEvRLvrCRxLA7dhC831hxyNAPnp1GaeUk4Lq6mN8C2LB2B6Gamf21UqhoFRgk5R7HYjrra",
  "key19": "645uyKgUPJgzNowoURB2bpsGzECHPGCPLXQe4TL4DzxuntgKsbwhqAkz25ezzTBuPfd3qzZ9B9Zj2aQygVkFbtZF",
  "key20": "3ovUPiNyCkmrseyPB8mW56HSpgm5HQ9EjB39J7LqQ3Du1NNWRPoaMqSJQE4H9oAVHgK2jetjCWbgUg1f3rxureZ5",
  "key21": "55vXN9mW6whfXh8wwiRB4xGxBtHJsjpnsNimzkcD9F9CAZ8YFhzSXa2eisPQJuV1XVrVkWNtrdZnuv7o2SsMPH6k",
  "key22": "2wejM1WAjaEpMHQ4V8MdxtgstQ59q816Qn5fQCaTnSw7QyVHLBpENduT8nKhnXwVaBbSmMTBpXiTrPFFvXXbrJe6",
  "key23": "41GkWMkPQNLikcm9psM57ECTqHxnieiJjJqgMandYkH9cW9gnwuCy5yNYASkXmor4aAXD4xvD9Qf1BkjX8MerCpT",
  "key24": "39EUJ4dhzfQuYEthX1iE6bnBMa6efnNssnLGUiabA6Z8KokrX28gR2ZuartDFbJUk74kMENJhYQhZNQzftQBvmBs",
  "key25": "zZ9s1dLE4RREUzhJV7SCZNALZhdafCr2GDaydg4vhYWdCvQgLrEEHxjiKnXGp7wB62HJ2tHfYG9t4AuCx8BkR3G",
  "key26": "5WsmtLbMbGSbqKwAkVptd8Euh9Skv3rKrpujeKu2WT8SnbzmceJ7o8Bm6r8NnJ1X7YQSwmJ7AneyCnZcD4SUY593"
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
