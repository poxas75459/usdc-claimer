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
    "38vZwBGbFFHDeUKdc45xGA3TRSCW7fUpEtox4pJ8bk7bV3DJk1BFuByh55Ka2Zn9Cw6nLGjzufPVTRmTZtHjATFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z7B9tEDaysiinnJzL4TJinwwSqeaQURpfiwkjWtp61nhGAMPgmhkzTVx8RowgUBjGvv2L6H5TjDhKwbdvAThhLh",
  "key1": "4zn6dCDia6GMdi7FwmjaToTZCo7f7Gc2VgEJ7xJvxgNnsuCdrrqJrSSDocmB4a9PUAKYpt2sFbm2T38VJ46Y1SXN",
  "key2": "4crmv1DHi4ZqxUGqfzAYQ1ejEBqgctM4fVr4tmhJxmwp9cAANXBr3cX1RYTSniGUA72BBfZLVVzBhyCffqSFunqK",
  "key3": "28Vn4cwr2SxEgiw94TMgchqJ8AiG1GnYVNu8rUs6S5tUhWhNvEkMieb6MXurgvfsUm8ZjhSWU8LHwE1rjb8SdxY7",
  "key4": "31kkeP9ii5NyLdHYg3FHUzXBPt9RmnM5rd4zdNqXqbz5rBKrXZJcczKbYnyW7nTFhaYuBJCEnToWu54qveX8GTb6",
  "key5": "5W85coDQ7ib4LagHqK3oyVXhdefBLZc5G2hJuydLXgQNkPG4sXfB8VDTBsqkR9KKBTs642BkLnsKrWcXJ8umhQpT",
  "key6": "2DXobW52fkd5NtxJvpBzMDY1TmrfariLQo4gziXF6bCefixNJu3WUZ77DsqtfCYP9zzdm9U4qWBNLtvPx3SxNdL7",
  "key7": "FWG6QaC2B8zCp6C9djqkZbatCaBwUrZZaKw169aUzNpifRvuLCtjfa2UmJmqCWPop4PUEMtivbZKav3jwNz4rx9",
  "key8": "5EPdsGQ4gtdx1h4RzLFbmKaTLEC2DtEje3j5E2vZSpvdz7w3GzBRU6Z6J6NdKD46gbacQr1tcseDnkLBPy45iiR6",
  "key9": "fCi4Ze6wE6SyTYThFrM5GTJbfTZcZ1opYFRjQQdfkVNix5X7knW1fB1KwSXqNND9zJCqnsb7fUpku8wATXrqBFx",
  "key10": "3Tk5KBEEdkmVqwFiQeviMeP7yYGTz94dsUv7foE9HRwms5zQy4ddQqxR49VZ3SJn9N4j4c1jZ3s5Lw1TcKfpSvvj",
  "key11": "2zCApAvhid4KRqZLMQkfYy9ktMNgJc1SMpo9ytnTr5XeNcUCL1CVUdP8HAbQoCPDynphvh7BZg6v49hvccziWHTi",
  "key12": "5UgpjoStmpaiyHsFMQ2hp5oeef56yMn11dLsRaM7Kygp7FhGeA4pk46RTK4wgPrVnSrAbc3A5Z92Y5pZYYubSg2n",
  "key13": "35P89i5hPKvaapnjAEmxtj62eZ5PQv9KfGabq9bjWRaLuJ767wT5r8fyu9BqQ4VPxDiVpthHrSgo5Nvhu4549pjA",
  "key14": "HV3UiKXCGZiBZeTU81HtyvKMmr5wJX2vtmWzkQ3gjJ1xjr82qDrfY27k9YKeZTPttE6f2Ry4DBmawgnbsdcJ3Pw",
  "key15": "43rfGv794Bd4v11UeQWyKVyecDHj1whM36u3kiaZZoePDtPDLECc3VH2cnRLVAhRvem85qXEpkJTpSCKs3PonEs8",
  "key16": "3RptkNrWdDzE1edniXSWNz9G6Q7aD4pB4EFkozLExV799eZqrzbHAmfSrhdiE7Zc6CPgb4RLNAJezrqdqYyarUwM",
  "key17": "49FECsz8xCtTFwzJ97CqC1eNZxqt6jsVfBVeGoXeghAHSj1yKip63zfZiPXs8zfqqpVACahEGPpayiG1PyXgCXuU",
  "key18": "u4PcFA8SZxU5gBD4vWXv5JafJG9ksrwkWA1rCMZZGJMQf54aJtCVBgdYDN3naj3v6ttcbDH9zCPMPGN1tiuGjrz",
  "key19": "4rwZ2hBA7q9vwt8KAqpVXp9WVME7H386PebkcfoamaSf5Rv1LJ9MU4dGvpXK4U5r2xd8JwBsSqYsUcChUhdfxFgE",
  "key20": "4XdFadegTe22KWEb59yJ8jK4DH16hz3YU9BNM9TnacYPT8WFLefyF7Z15JTxD28ZMW9n7vzyWc388tAdZdMksk5s",
  "key21": "rZCM5SRx9JCrXJcVYfy3mwdMsv4r4Q88j1BJrVL6Y1T2ZWYNVWCGYyHbbAjiV8hKYNdLrK6Z3q2wYgHL45eHf67",
  "key22": "67WKBfEqKvhMQkde47GRGfVBZsvFchfuT2o4wSDjwr1ga8DA8fL6udn71KgDtQ6rPBDMyjc8jcUJLMruCziDazeq",
  "key23": "4rpDgmBDL45HLZxsUxNrZJhkMbb3Rae8wBLfwCKKHJYP3e8FqJtCjM3RPmXrMUTGaqi4JLCqHqKLQP1H6884iJVV",
  "key24": "4jBCvptck5S5XDW5TS7NoRq1TDH4Si7GvSRNTYBXHCFJM8SMTpQ2kMHtUpabYyTmwKNubc2etyM4mRDgYaTkiDrw",
  "key25": "66P4RppwsjCqnpqvaV2rVDZvzchDbEgdbtEdF6fhY12w8usCTr1eXKJq6qdWawqhUFze1HxW37p1gsGHzP2dzkGR",
  "key26": "57AaaVzcTCZEvEgTDCYQMQNT8ypnkbc6X7eyRGUGQTwoe5ksqosiBZ6G8815B2eiJku3JGGmqLYP88Mro2L6VSUC",
  "key27": "3Y7KbwAXatuBwZHeVPopqi7QgP9KFuCnk3vHug6pCW3J1oibZHhdbnbBnXRMqt5h1erYtBSPaMqfXCzE2iNi2TuL",
  "key28": "4GUvokziA74RpcsBtFpYRL1VMr9KcGifpszKSRJxbrReCxwdW5zYMYP1GkKkaHmPf53ztUuXVFHaAxGx8p9ba85Y",
  "key29": "3UwNQW9y7gJzrmRPN1uxbhxkRRwaynVF38W6xq3ZBgZaNi3ZjNsqeYfGiBjb2yPsPcR9aBHLEMrFm6JjpxJcXLcG",
  "key30": "Q5tiHASk6vw2kVj3QBrv6GHNU4gZnyDinz9AmZYBnQZVaVieZDc1M63deD5sGzPd97F6ZDgibkUEL1DP5hU7z6v",
  "key31": "3hZrW57jPgTCecdaTSA7cb3xyFd4TUK3DV8jTFk451YJninLjPbMLk9f8wGjqsmrDjLnCq41k4scGrXAPNaSWdgX",
  "key32": "4pSweZ7Y192w18C4JjqQBsgp9HMCmSbcBuaiSh4xLvuNSFsA5rgWLN4a5ZSy3eYZocschzLGmUgDNS3H2HMAyjfo",
  "key33": "2Lcy3esaNSrokcu61zDdjzST8AaKppJ4vRzL9qeWXEsCnQjS5s6GVcKF21hzmnB79NmuwfSfBjoPkNuDyBxXM1vT",
  "key34": "47qRzpWCfZP2gq6ZG3Uqi5FisBqMGBcKFF2Wutz4ndyUmoShx2Lir1LUDN9EE7Ng92xNwkkdQGsKuxqFVWaHHg9P",
  "key35": "wTeVmzRxpKvXMYBHpL16VYm5yyFCikHvgXEeGDa4gHAaXdnaNehFbVRLSMzVsXAhMtSBRof82drLHaukq47hVmj",
  "key36": "3e5QBexPaWfVrgVKxkASR7smvCkJmMvvZvFHJzYpuwaJ27YESUqqprXfSB8ntkF3nmEoZWZVPiNdSaC7DFo9Jv5f",
  "key37": "3uspeocMnd6aurD9gDhePTeH3r4YtyCMRhfQXNco4JgrJ6E92qSmksBUK7Lz1njeYLanYzV8LVQro6Fe9yRNhpN3",
  "key38": "XzXVh3BwRboDEWCLqtTWpR3LESkgjdztjCMc2KsRk87PLAwwt7dFJCiX1WK11W2rCnHeNRRAx13Wms65NLGc1PB",
  "key39": "244K1w32KqVXWVjXPJ3GzPyEED8TsCSChHRXrFw6YEXwKiJ6FD3ncVQuzZR5uyC3kUoyLRpJCiWvcTHtzU8izMyy",
  "key40": "5tqZ837rBSGs9KTDAkK4wm5bb4Ue4tgmexWw8ekvkzVjQBc7At2jXBPcWLnA3Si8RDboVAMyLTevrqrBg2NgPoie",
  "key41": "4g2svVjwsgDGs3Mq8wkaoDwWj7h6aGWvjM6x76q1QmKqS6z6fXLQH5LPWRKTynNhno41eQDtCRbJ4NXHnnRskB4q",
  "key42": "4fRCR7nBF7tRfgYKGoXjGynYAE8JKS9puxQG8839vxf2SY6CZJtMc2x6nyzMHdwnKk2mpKXFvn5EaMx6c3YQ3mV1",
  "key43": "4MfjV7xrDWupHCf7pTaqUJcC21GNnSTLzFEwL5c5V3EkTLP1QWouUVMuFGY5t56HbME6WvRr41rhumaSSJGRpbJ9",
  "key44": "44FEFV4TS2xySzgeY4TLxFbWmdrNW7CH1rn9y61rERbjMerAbHUWfJFkQFMphih1LZ6u5BdU98FLJDvXs265QQ7r",
  "key45": "2B9HBkp5yQkq8Z4tLVTHWcnGSwDcvepf91EaYHPuJBYceZ8VZKYGeXEpHHxNpWdrKNzkR6tZ5kT9nWB3qArHPaqB"
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
