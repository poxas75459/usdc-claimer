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
    "66mU4XiJofePcZZCBpn1fYU7sbtFrcnBzUXhUxPW6RJNFtyupS4a9xsqxd3mWo8F6EdMPb6o5fQCQ8WvETaZ1oQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2wfCsMVyqNX7BQVfQpMJyvjuf6bKb83wDufkwywsvVgQawYwQ6qFF8HqgZkZKZc7TTrM89v91ZMwNbfLKACBen",
  "key1": "VRpEtYJ2LrZeu7evsFpipDeR6zuM8wStESdKTkqY7QNbJUGehyNiVSGy8BY61HdDgi695VZF1dKXAPDNqH9Gdwe",
  "key2": "2sLN5GZ9YHWUPAyB1MQs69mZas4tDLF6ewccH5hmNeETjCZhBAB8orvgCwo7eJK9jTcViMbM2Cbp576NiQETV8rk",
  "key3": "3UHN1YZhjZejVjPTYoKv3rUJoMrMQX642t96ucJs8FjBKsuX5iFqdaV6GT9tPzy12rBnvtF45hDWCRpTgvbJSyRF",
  "key4": "3ts1dTgF138ymg5YCZoJ2EQSgQk5QagQy3ibdoVLEL6gcWurKqh3HGG8tZogHdXzFRhMhRzt1foi3GmDfLXAwARZ",
  "key5": "5MKWzJv35gvccdnw67RhCw1wK3RFzzsRCJMiXTYTFmmxXpupFLP856XvLpt7E5WfD1LBo2RXoFGkXZags4dgpsg2",
  "key6": "ACddi22CXsL16voLDHYoeVrJUaTDVZ5GK6RnJ6pTxLcw4yE66WX55ZYuMWbbK9Ef5ruzyGpvW57wsiwh4zLE98o",
  "key7": "2q3nfFB84Mh3qFw2dX3CuvXVL1BimrJShDd2qFJ6fmS8ThbVz8QGigpnTKEAv4Mhdprzhv1LNi95phSEfcqfVAFW",
  "key8": "5rGXbMNaV6PF6LBpWT94r2BBxnViin7gQRqV59qDPfYxe1kHieM57nngcH1uUoPNvjC6UeEsspbKQ5RwBtnE2UTw",
  "key9": "3heFPpKonXEidBud5rMCg7W9jxZfc3pzD9gtT48xwQcHKRcNhXzsVgsPFHHdMjpsffC3SCrqJoudjhhjAxPqywcr",
  "key10": "67ZE6ZeNqv1xHzNs7CDNQ7rGsnzaR8BhCpRv2nDYVbXM7HpzNN4NKN4h1iyQx8jVFfA2qXbLzL5kJDLK3QAuNVEQ",
  "key11": "3KAKQkGdntGREFnQwTdujw4d5UVt9T2DQhGgXK1icjnMRWsDBaC8BRCaofsD47yQZiQxe1C4EqJkEGQoRiUNk6Uz",
  "key12": "5X6GtfWBrvNdXDBKtTGquvUhDCRhLCzdD2L4odNkQkvHXfBRLJoCHHaCdsDE5oaPPLs2i5JY91uHtdR1qyZiDgep",
  "key13": "hbygkGeDMLB61GErnPNyUq3QVWDzM8RHN6DQZRrmDRx63FRmDDhg5qDgZxafrpdZFVJ1aesVz1eBkk9Sjn7EZsL",
  "key14": "3a6V8XjUsTXQbxRAZfTp6yCUrr7zSN5vjyGiVWg7aLzETZem1fZPRtZcwbg5L1utj4wqdg7ZJCHodK4SFVkQZpsa",
  "key15": "3sSaLZPxN4DQ14R1ewYGtpXxDoGWdJFVS4vHrCDnJcYnoRcjZbK2NkXREjjJbLwGoPRuBKeUUMRkvsdwfxiQwdK9",
  "key16": "2gLx6EbTZVjhi5drTXsWK5DCXvFtMCuQutPvCjAiEEhg9LDNrM2wbHUsdpcJVxFC3RkCgLdteQgzDZHtEjvMV4w1",
  "key17": "2HWzSGPsGJotHzDmdaENEE1756zExohy6ibtD5in3Y9ApnQUCZdHHMPVny77JdQeoZknsm1qHi2iiP1AwLrfCzGv",
  "key18": "48ps9fz9Qjj15spxKwhCEB5PyvS9VEGwjT5JUNs56E1woVaf6SGFfRMqKnvSnH1EFaMhwj7xwWq2jXn3B7uFnB51",
  "key19": "rNu7wfoXJAfJMUvxGNXG4CBPudGqszjf4MFZjFaUc7S5hHg3DY8ztyy8ho6Xs5zVgPBJNozh33wtBvSvCuNTJY7",
  "key20": "d3DAkMpzCtsm6iyHWRZXr6VPHEktsSssNvGcUANjjqyeBkZr6jeWLvnZewE4YxgLMkHb9o9DMBZX7TEk6TMUz7n",
  "key21": "2LvTPXRgMfhpujQVqSipBxWDZAHaVyMMskJz4rwiHgdsBhoquRiDNduZWSzBs6ZGQJ38Lc9bQJpKwVdCs7UT14c5",
  "key22": "3FLwT7yb2akN7BuktsfjqBkfx2Pq19yyQuhcRfAAXD6dqPvXuwx3qAYijYrGRqqYKXPxghxvWFhpJuGDweo77Xs1",
  "key23": "5Kujh3YCYypZMYQw43sZFvbzYKUSXyCKLxVgRxYh3ve4rDF36XdNrKtyGUdXAMnyV7LyLZjnqFopmWDYjJTCvvWN",
  "key24": "3oyTA1vUqvb2AigyvPJQ9MnDvKxYHtfNxaYS6XwmudaLBYiD8TRMNqMiwk46e1iQWeoRVDma5mwkwpQwL7VAfPaP",
  "key25": "3Ru6j3pg51uaBEbGDocn8MDU8r3xMTknn3VGjKpNGEPaTf7yYGnFGkbjzrhWwnoUkW1viWnbvxbEritcN9sp3i5V",
  "key26": "4DouYTCZ6B6vwG5oEaVfWPQwNmxXywXo791c7VqzaywibEdUBtZwCj154CtJB9uxoXqoMmLHa7QUyXVJwhDYr6w6",
  "key27": "2AuSq1eAvv3eWbwqG7JjjCdXpaqoWgRZhoJmUJLwU24sLVndubJ9bGfct8LLPmV2SLnFQuwCc6nuhVaykCPY1vXj",
  "key28": "38VxK9pYCc7kYcnVC6A9hb7iyUfbG8B47GHJpiB6jBn7CjsjQdo8A3BU8pG3d6SfHnmwCZbZEGuiXpnB8ypXjtXW",
  "key29": "PMJhjddroErfsaszRkFFfWH7dqjY55NggBh7tPbvrmZ4XybFnJtNYPk6nvBuzzbXu75QBuUdxYXRrK43pP8bBYW",
  "key30": "5m9smCARmVQnviF54LiKhNmcex1DX9RXUc9KiAQV5MUge7RsFrr168CHTtq2GijbLhiCHuDkYCyT7ZovUp9rUufj",
  "key31": "3ipns7xJUSpNX58bwYDyuRY2sV7skHVobCLMAZLmKDchPqHsaV4U1FAxzDpmwmFrzewZ3g634aVwjKYUDkGZZgsE",
  "key32": "65Qe35DsvfLw8z7iYhYtEur5fVM3nBw9CgfcSytVmGmdrDuSHsiVhqWMta9Gas8trHy6fLW4yiQBeixrDRxi3Lj3",
  "key33": "3ep7tiWLBkaoNRrzwACfbc1GzEFusaUn4nuFK1pL6A6FUVqxsUa6nADqGrW8ksxadyfCmctg5kWfBrJf96RuPEpH",
  "key34": "4fZeMmDZKccfdBGW6q5J2y4a44k7cuQS3PJu1XbmnGaCaAVNQW11cBL7aRfJ9daXPbDWxBy3rsEfv7zpF8hmXc81",
  "key35": "3xPJUkydBChZHc4ZRf1svfNoM5DmHUiyP19yby37W4CWYKKuhYbqJeBKQqiVMMDTxSiobZLNGyrQW4qSo4NUUsMM",
  "key36": "56Cgj7GubtuUEnGrs5zGtaRCTyD2TJbfSZ1zxgpXtweWCpQn3qLtbJSQurYqvfGGrUjoDFuPiAYAPvV7UrPdRAcz",
  "key37": "3n2e7FDoAEX4qhHN6kaYYBDwLNfGZnhc77iHAkGQNqRbJeU1mPLsBGT94pkEqTa2t8K6u7f8M2MfiR5LFUEm1WWp",
  "key38": "2zaWhA36cZNxjh6UDNVGbDH89Nc37oWqXUEnsQ7R9KqKyjij8dF79Bd3wvBBjn5Lqee8h6ugHDW7mL9wivu8UPCv",
  "key39": "3ons9zsMpPVXADUU3TYnSWDXMjTfbHmAQLf1hX7JYvVCivkLd4vPFhz6vp4je2J6kBH612jaoDcMB1h86D4WtvH1",
  "key40": "RVCCc7G1iGdC7k47RACY4NiEDP1TSdGfhQkzqAKw9TQq3YAeVJnAPeNLV7Hu8EDt5byP1Y5PcEjse6sqhn5JaoG",
  "key41": "2R84RuepKmkxvquthUzjZnHkTrxvZDXbE5nAZQvbJNoW2ecuHhvNA1yDeziZ3ddTs2T1g47dCP4W1EDThy3YtNB8",
  "key42": "4KKFCFj52PghzY1KSamJC78utTZsuk4JPbr4JE5jex6yk8KiM3xPp3R8ft4J2k3VpmLwh6nvKPgMWkMWoHkqi2My",
  "key43": "AWqizTZUa77igCo6fiA4jzaGSGteFj7fukCVW6s1GsU19926b4Qa8GNa66gKL7hkVzuSPJSsMeMfN16PemZdknZ"
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
