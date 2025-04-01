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
    "5NiT213TkyajUQZTEFeK8NW9zvtfaYteCwE6oWhs8sPXKSks3gc87Hd5At14ZwMp6qMDj9Lhs4YkhxXmUSmttQmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vd6avp42BPSKmxkbQQRuuGRFgAn2L5x2oxPzmHknmJq8EwDArZrSScuG5CMgRpxtyjMQ3mfsh6PddCzAxriAqa2",
  "key1": "5yzmWoHT32X8Eyb8XXX8wDYxcYiLBB81gawtFN1iamzLEJRuk3XfBqmDjJiMGR91rRczvyjBc5mfw6H6MhM6jACa",
  "key2": "3V5jus7Y2yTFcUqXTkk9o2GyQsqoddUbDsj8Cam2F8YAkA94TzwXdNP3pecdYfUzDmHPwRQDWjLPqniRHsW1trPt",
  "key3": "GvsenXne7S33gXZWsPEVQ3khVx3XrEdhG2UooP5rmGKfyUS39BYwyWDWgTZ5uzgdFZQJ4NRc1i47kJjUjrsjmLY",
  "key4": "5AiUV2Aejn27Becrrc1WauYk1tcLy4jZUjYWaMhUhPXRMT5p5F6wm5qNyx82B1qdxbipu7HgQAGbW9ySBomFR1ie",
  "key5": "5bAKjF7MvxXsACjspGSSNwRkPYev6VEQ67jvLdhaZq26gkqQkqSFCGYBijtBRJAq6fXnd5YGwyLrFAQz2AavcJUH",
  "key6": "5BayTYWfreXNRypHAF6nTebFYb1izQg3AvEixHggh5nBphNvZC2jLCMPPojKCcmNxChwKqSNRsUg9PThcTJQeEYz",
  "key7": "2B6FmvMmQK1Wmmp8gthbTW4ikpDjSikG56mMcZqXX6yuFQjuZTNn3GhRtmKvYBsKdK6eqFGa8m95gUBZSvq2YMEW",
  "key8": "62HKpgW5Ytt6DprSXTbZoxtRbwYn8JdxFsAn75iyqJ15YSewVKMmcWdN6PZqpH2CmwP5LVk71GUSGN3u5zoqDnqL",
  "key9": "3gs7RsjhMxgWcHepRKAPNy6be8bvV2UVC6Cr7VMzCt3ivRoWJDVAuQ6VdZHWtPP3E1Kuek8XuxRM4wHXuHNaipzh",
  "key10": "5Mcwtru88NxoYAZ5b2JCYr2KsKmkaUJ6syNDRpb2TbfXcPCrP9GMMcR7DzUcG9wT3KWix5BrifuyF8LPiYnUebe6",
  "key11": "2iPhWqc7fWY8EoWvoZUyFR6cJjbZbMSd51iLRg4LKvBjBtpdEDhHgVt2jwWRGYhjgoEyVhiXUn5DFSyTvZ9FtnzH",
  "key12": "3DfqgvbUwAKYfdcWG7XciKp76FGunw5fzdBEBpSNELMhUkiPMNsS5rSiCsWvFT782jHzjYAEfnXiCNXN69xnoca6",
  "key13": "otKvbheYoMqVy451nyAZvoPSDyroczjBjmGx5vWDFsRr2heM5oXedpNK2y1iemmWMuEzmSBxH9Fq4d2w6o7xamF",
  "key14": "peW8K67yvTfUc5YqHnrg1ekqR8b3HF7LzQ4SLPN49D1Di9GmQfBpB7RYHuhmuQDyXDVgNBoXENNaNoif2RUWA2Q",
  "key15": "znu5EK4JL3L1UD9f5WFuR2wEcp4E8FRU6pySJivG4RhEU8vR7kRWoAjLoWZqrAkWQ8iFznCTsqf7eLNGAmbQ5v3",
  "key16": "tHttEnS9SfkHDPXqxy32JHkyNWUzmY9xLH2goXRmiCtx94EnjUBEzwAZcbUXB3N4mEYSq39QrAqGx9NzeWpfeoc",
  "key17": "3q7Pdc3Vj3Qw21Afa8Qc8VRzaLzwqqNDTmvEmAZcjoXBw8F9H93ZFDzn5tYj8NTRmnm7oRMxemG8nVDP74PcJVLi",
  "key18": "n9KvgN5buwyN2ja9x35ohjyhroxQw43mmo855soHtgUqSF2C4NUGoaYHswHTcn92tHa9AKSqhzrbUvFQMVqerGV",
  "key19": "5GTHHeux277iH56T54GFF8MkQXwoFJRSyGFC9qokvd8ZVbRMDhuKcmcKcvioaTFsobebWm1LJ8XFqWTARhn1LB9T",
  "key20": "BDgXT9ufuZqFU7XExZQjBuy94y6K5v9BBXibuK5agew52nQABzZiQ7FPWEu3YJ3S48wTZiUdSzJxPj5wok6HRUg",
  "key21": "33UfzX7TXQfwNFJtyXw5AFVi8QNvS98mS21FsxgiqvQnoeWMotFb9fzc6RerqHtnJ6Ag8XbnwnmJJZ8Q8tDTyeay",
  "key22": "2HJfekkTKCjKE6CZFANk3jLrVsLV2iceJFXcyNZ8TDBZSBhMioyGdWfLiDkdrpChqgJ8EU9xmcLR1XeLQ2FuLrte",
  "key23": "4ho4qkwnD4Wmju8Curv2uoM83MdwLHtrRNZSwpenywH6kKvBbEkrqMcpuKt41Sf9nGDVDDYZZcYRs5MrNJiGnJHb",
  "key24": "3vPaGhYH5893dqdFrvx1MnoRthX6R7dnStUUz9Zz6paiYy7ESbS3q7bZnESZ1f79JMkHUV19FKtLxmGdn4GqxEJS",
  "key25": "22DWuyywFomZucMfYGAMp2dxCx4J4HSBdkyZtKKQSZgb77jWe7m6CpM4ib7uC5pTKpxRPLLQMa8sWzg4VAUGFJLg",
  "key26": "5ESYgrk6BkGe9zRVHgdvA1HXhp7bq5JQ2WRwjhKboQLrrMA7b9k7UpxufEiQJE71QUPVq5mNHzmkytsiXvM7vVPP",
  "key27": "32S5UzD34MLajJhPkTxk4qWenFp6VtcewQrFZBaKDXxwwUQGoKMhwMNof7mYjhzobRwd3qYU4qEr3QZmGvCqycGA",
  "key28": "7gg6YXzPYu85nGNAC1W9xiDePXnmcvfCBU3vFk7RviNstpee1akRrM1L1Ygwx3WBJvfuNgYhTZiTF7To4JAwUih",
  "key29": "3yL8aobMFo42sMWTg3M9qDnjaXiKiFPTnLsM8NU87cGZKUC2uPazdjufRxME3zf2eMmudBH8mzED5MUoWYvT4Ptn",
  "key30": "4RWBvFWfXUqvnAfGxaEiZkqYYVWCX27dU9GzRqampfGv8oNQEwUeFMAotHuxaEv6XAbpGDQs4hvLQjpC3hJCfYvb",
  "key31": "pKKXTns6SXndQMprmAwPzzNDPmE7eyEN3BN9Q2pj4y7PuBEnmHEk7X7Xmxdsqp783LPqkpZJsvUUZzYXLYxZVAd",
  "key32": "2QQNTpcXh2Lw89Xh86nqmUBBsmz5BXngutsyXt1smNQufY1TBxpBrUhEcdaVucLqMTuqAGaHvsWkUdcuvsPLoz63",
  "key33": "3fi7K8XA85QWyjkA5D9XroCQEwwZXVwM33c9YU9MpknyRdN1mPGcWjZGaVNTErQTvvDpbeXpuJCsiZ2f7mAL6EpZ",
  "key34": "hEAULSoPHYx4YVdQ2nReYPLyy5MhWvC7XWiCUxpQHBYwQ66BfjrqvbcxjdQhu12QYCWCdSWbCVx9ziRbYEpTtTk",
  "key35": "4X8tKvECBGrdGdkSqVNTJV6aaYTude9MJShKLW33n6LwMSCjCD2ax5JFbjEbfjW7tWEr9Bn9EpPTbjkB7fYm3gKP",
  "key36": "5RtPQVG5touZp23aqGoQJTWM3iLHHvJTXqxWnh1afiJo1sSYz2iPRz5RGXjYG1j9LvWf9hwMRaLn9dq8rkqfo469",
  "key37": "2oj4Sgf7tbtjV7BZ38H3mqhxNJVt24fZXrS6vyEs4B1WNMpSqEPwwSihBsiCA8MtGohngzkpZY4QyqqcW4LdBdPD",
  "key38": "2K5fdPidfnQJwNWm5tW1uww3TmEgFX5mrWfM7TE5k9Agp8K6umULWgFgqctY8wa3quT6JCbMxT1MZnkLnBQ2Pst6",
  "key39": "2s2SS4dEN83dfbtAgFHBjLDDywiQojVnanJDPrZsFFUsvW6pHwW9dogLpNbXFHvtWYDeBZmaViS2RHzp8RPpHNKZ",
  "key40": "4n7r1z59NFMs5A4jjYna7a2qNeqAZFP8oXdNqwL14T1r9VReQRW87FSFzP6ZtH8dtodQUWhbrwPLiHpcnDAe6u2M"
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
