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
    "594cK18ze56FN9uxciAmnu22Z9v47J82RuXp3GS36Ub18VQAF4ebd4QKTCXAr2E59Acrk4ukLL7TRTB2hyEMCy2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LgEPwzEyrPPX14Fhi8abcBGMXyhhFmJeqwRNpRe1NbbVHaA1CkeKzj8BVNpkyNsCexCgsggBdmap5KWoPjzxq1V",
  "key1": "3LJeGMotpSz6RAKPecjDEJxSi83jTQBj4711PDVGSS7YmsuzrpX5piR8o1G3zDqpLFKWh8rvQReaMjX9rJny3VGS",
  "key2": "622mabrkg74ePnn23sjhoT9e4xbSszM79Uiqecf78vGe4Wt8updC3fiJ8zZ49UuFa23wp2emSMAtTQVy9Ujo2NcL",
  "key3": "njfp2vkJidQwdt1nctNmYSrEJHGrtz7qsQGxqTMsg6d1q2PVrRNGkMt6tsavpugvwFPphudH7KwS6WgCaMvcu4N",
  "key4": "4xoQVRwTevNbTVqcZnrwqD5JKPTTBFf4gu2FQhJr9muQi95C9h7psL83rppvJt66B22MkheVyv9d8cXmGaP3Tdbg",
  "key5": "2qV2Go88bfzHNo4zdgYM4aL5sbtbVG3fxCc9Bs21n63gT1xu68ymhrW8f7gmtEdjy7rM7aUfmsYww1PpEC5XfW1C",
  "key6": "3zsKUW2rvXgEsDiJzssg7QMh6HjGfdsZ6zNmeWBxNxZRLx7b3FaWqp3S5dn5vcrstyVkzZfgj4zobNmeSbXtfi2w",
  "key7": "3omCQwjheL1CQgRPRv3minF8aUryNRA2qWFnrH8ggKmi6MmMDzcMhQxshCz6rDPZ4FANZya5HoGdrGCSe5vGmHp9",
  "key8": "4ULpLXgSQTGD4M8LWir7PTMPxxmAP7LCEu66MCBuJXEna2zDYArmFk69w2ZQLBAFjH7sgwJktj4DzeEwWgpqXfxG",
  "key9": "2JeBTJCsMNiz4zeowo54BSihoETqjLd3STs5JZLnEk9bH1tTkqTBNAxpVbHmgtg8xhjA77UZRFUe1QhM8d1FfEmX",
  "key10": "55LEQqqwufdBMLJMxsfaL5a4WLeM2dngG66rU2b4R1sjCbPnK5gH8Rsnfag4rPQtFaEy3Dw6rspAT67qjLZJDeoS",
  "key11": "5ToR4qzJ8wXCHfpSkQnbrkZzzL935ECN7P8cSApk7kSQocLq48jqMtsqRKXi8ZxVdGxXnFs2LjkJ7Jtt63voerfJ",
  "key12": "bQQTCrNG78xt4c2tWLNeroXW7pKSUh3mfgLitYhQCKjrM6Ksf6KQxKr8X31aA93thvJqPVApZeFd1M9jWtrgFki",
  "key13": "3TrF758J6jjBsEooMYVg788L3CpP2okT2kYWgT58gYL45eNL7Np2VLxcB6gqa847z311ybbHB3g5UW4xGgZLUBAF",
  "key14": "5rYfjywix1sB7PtueC9eKJWpxsmC48tpoR28Bc6VKgN7GgFUvLbNZYotFuVGSxCK7pX5qffdZ3y7NH5GSenwxbfJ",
  "key15": "5km6N11LFh1kDqWyDY9VbPMpNLqMmLGy9gdwxZDLdX6C8JPqNhs4a1QTXdoQuiC2bA1naXcJFDCmqHKD4sUjYkJp",
  "key16": "2hFHE3D9Rj9pNLv8eSDK5Menc8KhHf7TrFA62AzUqpockTq9QFQxuZHneWw6aYf1nhzFfecuCMGftQrJkHX2EtdM",
  "key17": "3zxyUt55r4PF9PtND7cAweVEGmdxne9KbLJzJZWHW5WgTtNWJMFTjGj5tVsHTho8eqScNfhS2fVVHSQWs99VevWo",
  "key18": "2vonE7yjUugk3AwHu779vuq4CCFvAmhX1ZihCyEALe893WEjHmeG7cpK4MEuCtWK9c4Hywy8JUhEe4mvuLBDGNR3",
  "key19": "Xxt7fW5Z8w7WAqx7Bg78afcqVTMmnjst599vguoxEkzG9PskN34iBHcTxFkxtUvzkEA2rEGhbRNi3exJzBQBh7B",
  "key20": "5DVc2cz9dykMPzThAGMn3XFrGeW954HyFcL8YaVfhzqyThK9F5DeFYdtPryjfcoHu2M8cRQCoFbBTLTGAXThfF7B",
  "key21": "41Fq7kkK9QNchtL5yN4uK4AHZzEWrRWzScPa2o1XWPxLvJvEBJ47tQSXkmPqzHMVLeeY2LWNPuNeJWCTzmbsGqJS",
  "key22": "2zrFpQDbgWYRQggbPbkCBoRyqqaxhaHEtEWeaz2yvVYMazYktHYADr7HBzWgeis6v9Y9igEya8S3P7DMdr2hP8pC",
  "key23": "4GkwQ9oMgQCrDUiB1PAHAPzTSxHzWmzSGMPrzFaRZ3Y2pbqk6FzKziesvDrdm54NWNPKTa7u3tA8VkK7i4rpqooK",
  "key24": "5k877b4Ff9j2G8ftMVdEc9KNEr2L6ZhLx3UHW467NcePgkGfZkP4yeSs1ceJe3oiBYgbNT7L7WgbYQvUtduUgbR9",
  "key25": "24eUTcFuhMY3zivsECoidowP564Cti2qNAJLkwkauwNXRj23xu3oPstqFk6Zz2pKRxiqXmZjXTe6hFK9BEwGYzoq",
  "key26": "3iifJJEcvHRdoju5yc7kbSt6wCM9Y2e38UC4vymvxAuhyaSJiptPVRWacc1HZJ29dN8m2E7qLMhsPcu1WT5GcLKb",
  "key27": "586WZeYEeSTvRKYEfuXoqH1mDSqTxvE18TMStxvqrADB9Mjd2VshE15T5aDKGKmxSM1YBtDEusnkuYQC66iHrqf8",
  "key28": "3owcdhePemS5vazkTzjc4t8XEsTXUUTunYZWb7XkYxWDgEtbku41BQjFGoBqHtZwNcEJPX69Ywv51nCpLH7nQexS",
  "key29": "4LWF4oK4FMVhoscxMonZCzgvXorXiBZaTKbVrDAdNuU5pZvMU9p8WgxWFsE5PFv8Mio1Sfy1MT7FVqjfvnq9NeyW",
  "key30": "qVp3uet2ZqGJy8PU1MnLAASoZ3eF8MjTDj8y5zJqWCaMsqkCBTqN9Fz9BTGkV7GhwgwSop7BUCRYG1uH6XZHRJ7",
  "key31": "43KLtL2Fgf26eseP5c3U6YRcUR95tJj2sWjYpCLRAs3cAggqbbNyjxYJih3qyL7LbirEnZ5Qjp661CbtAGTZibLy",
  "key32": "2nf9x77pLZmZ2TgnftYw8397mnws6pWnTCqNAe4Tp5aRsMQ9ptyj4HrutYAbYWybDRvwQ5Kixn9cyE2dtiqikfke",
  "key33": "R2qRE9Hxj5AaZKhTPBp6F6TYbUBogHjzrbjBPsmJ3vp9MooLSDZSQUa3RApcp4dZSVmMu1DgonfLu721WT1Ykge",
  "key34": "5GbDxRdW1ZXFrp2rgpcxZEqTBs6ausPnw4fot29sbcRbZMJe8bRhrNwp1ZPjGHP8aBgJHZj3LbttC7WJRx6h3McR",
  "key35": "5XAKyDKenVcW3WjkSUeWLuFkVzTVdXhMzvKWHZveJ6QHp9vF6R6eoUudFQJvf6pxhyphihKj3RncX6U3DJ778SAw",
  "key36": "383VYaLEj18LY7L9CaDmBcub51U9DN9iejxADgda8QmsVKuK4PeQJizv8MwTncMjt2aJuFv6xwh7z5y9BUKAytx6",
  "key37": "3vLvfgCPgHyq5Wmdff2WectNQFJV44EDMPg4mNPQzeakxtxPxLZ5um1uMkpvYBztKxfXLx98xJtJ7WNpReB6CcXP",
  "key38": "4uviXpUnMT5PbnT5sG1Xi75qnRthzpazY4grEnhsNQvsbdPK8iV4xYW52S6yhKGRjqEJFk8XyLxGmwBWX7yEH7VB",
  "key39": "5NcoqbPR5KT3UP5poH2NcDCahjpZtunQy2Nbwm425wg89cB4sVUDUup4jwemHz8EWsTTMnvvdiTZMdyyTdpdfKdW",
  "key40": "51unbXu57j5MjbB5yxoAe9BR5WmNWinjm7YNd3vMvPdXKHFvs8dtjsi6fb3PTwCYLnfDHMASrQwdy62tgySbjLwf",
  "key41": "2sNDGskE7yo1Y9FtCh1mPT6kG35cgz9jTpd3pUU1iiki5CMwtA2HsiUuT8rwad25tPpJjF79dRhryF9PDKDSY9m7"
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
