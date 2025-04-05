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
    "2Xww1RaebYZ1GjyN66tkFTjYgmrs52GvduTRJ2hZzq33GNrRB6xyFvxTP9Hsi5uFm32uegGrCa3CoqK7ckTUZiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iESM6YxWaoBFABjt1Th9e2xfHoRUFgJNrWLTMHWXbPbtKUkkrs2kPVA4RUhttUtESp9wzJP9ERs5YLaT4HpVvha",
  "key1": "2iofsXzYUiy4LrXt5MqhQAx35FKsoswFS5aj1fwKd8K2T5SKGpL8sPkfn5fcbqvmmQvqdoQwtFK9S66PP3dSk9AK",
  "key2": "3HDUo6fwUr7RprQ5H6ghUwGm7tqfrvw6dPBVhHEZgdChRKace8udp216MWxKsavWoyEWWJ4M7KEHDGov9fTcgE9T",
  "key3": "3qQYDbzVix3DJf7R3kYj2Ap7LdPsBhRjdMryfPhMedaADa8ahhPD8o8bvfrfY1oY9Eijgq3Hpr16fgsRtXUFcRjm",
  "key4": "4iLJn5dJzEBpdqE96JJu8npUhiAc5vP3rRXQE6BGdM5UfZNMMEfrFLe8XxUpXaFX95TfDCkegiaSZArcsquXzT3e",
  "key5": "3Kkf28H9jHMEF4EQxHHwRmnGQYHo5pitLcG5SBQdyhGeV7DQy885aYMYv4JEQgEyZUmDiAqa2nTCHQ7oMQQDCuYT",
  "key6": "4HecwoCNpgDmEYdUzaXnJNe35w1cXLHh66WWj44ADTBjgjRHAFZmbyueeKcQfG2iF6VkN6axvMt4Vpshao6Axy1H",
  "key7": "58wCRXr57eA11k9EXqAS6QnTT8vi9FHz2xXXeAryisUn1QTVswuPzvMjPLN1Uu2L6f7HTLKrvQvbaGD1JaTSePmm",
  "key8": "14TzfgpYg5k8DvWDsAFkyC9gnXhnhahk3awp6EmS5MUeX8bvTAroESnJuMLG3GHq8vU6LfowB37k3bTSEhQrhY2",
  "key9": "3UYkde8MdH7r2R6r419rw7QiAuXnbTb4JCDeJmiCYuUb1v2A1zsm4PhRYniRYtd8AmqN82kiK7VfeLCXE8SHCt4r",
  "key10": "2LqLbe8wDvx6VdwerXatTw7EqV4bV2CA3BdJwZwr1uCkaidSLs2zzWrWAYiLm3AsRPHoLbJoYQPNpcjxzBak379i",
  "key11": "3qGu9DuDA6WRQr1kSsnhLudWBtduukZzTQbwyQScCrHZj94XE3NRDaxL92eKGtt5ehVBggqBm5ArBDeVnAB9WYWs",
  "key12": "SQeefpfNWHCXyuukPdhbzFWS4JtMgYbStXwdZqweimC3ZmkAPK2SbD81fvvVsEpQwdzNDid44YHXDB6RM5KZD5P",
  "key13": "dkRVWeK4Y4yCvumRmcUmRDA6Td9HJB55886MNHsRX8SwZYW6jrzRqDxusnhbSPhiSkMoNdXfcye4z5peSfF3SgF",
  "key14": "vN1JtwpX8DfDrWqaCW5FR1yBn8GRtDS2Rw6ENsXSqooNBnHfx3tquSV6EjsGpUnkzq7Y69ZWLsZ192AzEX28CzC",
  "key15": "maHEZntss1DUjTA9wcTKzYR1MW8jwbEs9kn2rPridrAvcvgYQHHLz58PYbrXMHJmCjuNWAqLZinFagzsnDi5DrM",
  "key16": "4VEH85KsJdKiWfhX7TZHsDaJ21muyvvM3RjHuYVUAWMdFN2ArudqUqV2xWJrh8f4LssTvigKJ26dK7vWAioqT71j",
  "key17": "SsxUqU7MdrwgXucGmF4MCkph4efREySt1LYzY4hjxDRewQmb8TrPFXWTMP1LE6PybFt3FUYs3jiqAN15S6s19hA",
  "key18": "5kJpqm93zYkfuUwASmKQyjNHs2QAaQwKgorkK4J3khdkkU793ZjRDJmY9he8qp7VeZENjuhEghByktZEPmMYGF8K",
  "key19": "5G5TTEg5Wn2yZTyJfvDjbBv2FtKyXgfkBVAVsmaTi4uGoy9Fq1Xi3zu7nwkA43vyJUfqM2tJPEWt9nUTyqooX1Zt",
  "key20": "azGZJ19JQovD4C6viXad978W6dYVU9bb7S2oXu9f8hfBru9FPh96Y6cdppJwqwCXthvJXs2mWaVbDv2U9JVUz5s",
  "key21": "45Di8KS6ECsLbjtS38X7U3PTaoN9jMdE2cW2qQPes18PnosZQBN8VYAKXCVyqS3xjW9u8X1aUEAqVMJVYJekH4SF",
  "key22": "5sqmbPFdcWbQ9NgvZptP9pGL1HQfRqi1zX9rti5bxR3iDNK2zsQ7apsxQKssTj8xLJciMg3cPZZeAuSV9xrx1M9e",
  "key23": "4pMvyp5HqSBbXKLDYA6pziWb4owX4Ph9BoTRsZXYTmQj6UNmmGsrqeLL9xRrrdAFg7EMaKrCVH3Y1BtfWhc3VcXL",
  "key24": "5eRgsfpv2ARz9R65XRfQQ92KQhvq3v5drZWfhjNKsnvJzvmS39UC84AiuARwu7fxS4J8xp2VDZZenFX2TresXxnC",
  "key25": "5gzck75ErgXZXriNx16hgxtvoX6qmGWvkNctwKzU9UzDwxzWq5msEAtqMfRjYyGuhQQJg4bfEggd1GeUwi63qKfQ",
  "key26": "eRSjvLCyMMWjK1AZrP2STskvNPMsvqmiqSdJy6HUSfJH97xGfRo5WrEBFKNMcFeA5zmbaLHaoiwYBAG6XdnU2vi",
  "key27": "67aGyvgbf9sv6ZuySeLpvvL9TGuGq2TfC2MwiojaR2ugaLApRvETBirAySRjcWBq5hFBFdQP8dCmP7P5ECuRggfW",
  "key28": "5cYgnfPyaRodjLBVP1xq4JkVC5NgG8M9ypxHk5dCc92qEZAT542LVFMZ9J1ewbhSofnjDvpyWCZyk6KF9afyG6ih",
  "key29": "edLWVbCkr1FCGVPcztMv9YaAYjyh7a6iyVp2MjYsfzsv3qNx9VGNdQkznMjAa3Z7CYu5K24G8BiMsdKq7d1BnM4",
  "key30": "51t5xosKFP4DnbS9eQunzmeegZZg5zG8b9vpU6GDeyA2G8ZLD6HySz1gNTeHGAHrkeEDLeAWKwh6EyzcDK4HLszb",
  "key31": "3uUBkTGHxLNjBG5DX4hfDzn4uddQWd1mhxkGTpegZwXoG3iQXZdV3hHKZNg2R7Xi5x7hRGzAUfqzs9yGTs9BbYnp",
  "key32": "bkDwzEUxZHaB2PmRLpt1mmwCAtyWvDfMgEJ62UgijAbDXgevhZkpEKMveHMC8usuqEAp1U3stKXinLwKGJYZtYV",
  "key33": "5dUSAWchutPwaT1LLkhB4ypDaHesZYfkN8P4t3A1yvYAHskYjaomy8wrdeqqfDDaUV9q9fmMP2jhPdU1KVH3JF2D",
  "key34": "5UpTxzMw1KZMnyxyA6UW5V5VwiBc22usobp1TUNkUVgzURZxYrstxm6Sxmm8cBEw9Yt79oTEbK4q7KKbNy1acXWB",
  "key35": "V4afwqaiKiXkfeQ9iKti1UqNXWGc1dBRUCKazva9tih5Sa5cziJi2ZXGEjmcmN1N3wsPf5DXqbSTeYzr4ftcvcU",
  "key36": "2bRdfNos9YRFJqTpBVdwDgLL3xc5mJQKWS9zXeoUoW21uvhCk1RNzHjdqqEmUEs2gEQvNw5WDxBhay5dWWMRGpqZ",
  "key37": "gF43wtoR93GWFk67DVxEdVAdTxDj8f7UqVSzXn5qbCicpMnGx9VvG6UimnsiKAFLcVPwL3jrHeyeHVWrjYWXWVG",
  "key38": "4Lb2Pb8ndo76un11ph5iK3k9VwdQdURi31ECh5EpGsHiHVdwxnmt2BnBX5SWB5DgdDPrVwiwKjK7JJMh1n2f6GUn",
  "key39": "669oyecwsPTSBYUgQpm72YMQk8etVoBrViPhqZLKdYDzHcF7H4Pbyz34cPTe1B9HYZimp3HuhHCjUf3s5uJ5vJoa",
  "key40": "4A8KLi7HMBFWapJ154aVhjVyzCt2WkmYe5PzFCs5ToE3T85cD1DP9ixdxbpNgJUqpntYBC4mvhpJnB8VSgytbxXe",
  "key41": "2mrmgzSq6bfdra2a9NUaHz9Bbkz3qqqtJRvWk4PVdcrMPbKHXHqjswHoSkjxST3FoCLPQpLzGgpbxF38Q8sp6ys1",
  "key42": "5HR16wbM2pYmJVnSTYLyWGtmM5nmo7wYEahebdTXFKqGEyfsm4rqqhU7GnSJn2wSYaiJ1cSriV4k2ExDvZbKrPn9",
  "key43": "5AiJQkTe283nEdQXvoS6gyMGU7vwTjUEboNX9VSq8NxZ8M1qrm2uaCbKkNUYz2gv271QWxbsPufJuvfruD3YQnNb",
  "key44": "3iiuX9CHBUJQYMUqgM4e8NNUi3gfsW3iSBGQ49jojM6dbsC9ySD9G68P48McDmUfDEamdDmjTqtYkh46YSX8VVZM",
  "key45": "5oVGBNrVX2JMCZ8ZsAWUbvECxvLqjoqbgqUWW3yPULMbicNsTaWctDKK6LRTHefMCo7d3Bc4ESZx2VPsVPk2n8kk",
  "key46": "4Xfi31qpFjXhnGcbehgNPzHVKZSjqWTfEyxTuQnkJJGqM5dsRJ3fZNQitwR9fcgPXCd3WqBu5xShSEcbAGkvj27E",
  "key47": "52nx3Ha74uzCvhC6HW5pr3YNfhgebdorM8XqH9hczbfxjmJiaE94TwCt7eSrvW2b1dFzAopC6LayqMeBKnBc5njV"
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
