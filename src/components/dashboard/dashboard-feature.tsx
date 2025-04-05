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
    "5zntXDsBn2RKKotUyEkSfZTeaA81TeLn4re27ZkuLdaQ977ZLpY4TNqNAhodELdBPGZTMmk1cMF19CUhaRJWU3YV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQUmg7ZymgM2BZwqvpZZ7PnrmjoPkS2NJTF918QLBvbtRTNNLPjQBSH7aFFoEGGKEJTtYUyYQdcYeXhccN54y2p",
  "key1": "Gr6Bb6rainFpmWK8EcEkx5ntJSyE4C1xtnGGd5viZimoLBcLCM5UfDH9cak3wVUNLGeHzGvbkp8DaajgdNxQMUv",
  "key2": "Cz3TvFce1wTQHMfto6Z5CWQrFRsK73YEFs9oj2jATXCHrQZXGsqTVfNbjhxYM2TR7uC7kcAPjE2zGmxMcUSs4jr",
  "key3": "2UAZyNaRLYpKado7wkCBmU1MTsERZ1xM9rtewoWjWhjnkFArU6bLXQMmFbUTEHqk5uVtEZ2KcUX8QqZrzQKrXsPc",
  "key4": "3ynTQf5kZagTStPNanyPHKbXYF3Wrhe7eYB941ZgZnjPde6wEDyynYhGUhziLwYR9tfvf3bnVaHNW82SiiNo2XpQ",
  "key5": "K1tg8QNgLEc5AENtxzUQKfW8oNSnciKDNLQhnKKPw3ZFfKAUbsPqmqifhLw53exUTZP1f9t4fqmFd5QzqXyqk7R",
  "key6": "JSNckJ1NPn4zco1gWCR7t6D7DYzTPcfupVqtJvVdmm438iJbyptyUc8ckbrwVAriuCJSUPJi6bJ5AacXo8dwzrb",
  "key7": "58pFadfnsLo1cZHcDyCc1XcQ4ZY4SF4ouSwyA9Xqe7pkUAuNQFckjRfsfjioGMF3hQjN4aMQhbDvLtR2hXVt7pU5",
  "key8": "5P1ia2QD2WhLtaLeCHohMd4xhDbat7XZv6ixTG8C5piDjWXgeKXeG7nBzSRsQdyU2FHmbg95ywEg3PkdjhfH1V7M",
  "key9": "3MwYU4Cr2DhAXCkp3Do4pKVtjWhTgdJikDni43goGX6GQUSw6un4jg9N4KCn4PTdG6H3CCtGv7v2owUs8dZgZesS",
  "key10": "2wCiU429xG1wU58pXtwx1fyJSK6CBNJ4zMLzK6v1HrBGBWs4DDeKYu54dXkE4datocKVVwmERyfwZnqAYThzVyU7",
  "key11": "5RN5hYYbtaYC76qCdE98dPbbSbeWQhr8N1KQp6VikFWteFu4k3uPAVBM3HDaWr2Vu4NMt48vuYM3Fzsmabi6fZ8h",
  "key12": "4JnXCfrAmjTzwdUC9d8FtQnCwHqdtxGzYoYgh8EM4gm7Qiw63br5DG3MwfiW7G4P8Vx5WgqarYXFcKwJHRZt1L2w",
  "key13": "3rantXa1Q1rQFLimPoiZrNvSCh3zpLHQcnkjftHBdNnQ5LrzgyBjXAoA385zgJfUbnLKMkBCTZr8Ehb35gz3eUJc",
  "key14": "3csBNyLcXavfbaMWWyBcR5dtJxGMz9UMeHeF14BKVRP5Ubt8G7rMBA3SS4siqqam7Lyku96oDRq86kvY5D9aX75F",
  "key15": "2r6sQ5kQJH7fwcjiGx4VYXJg6gqYzZqX8jhBFSrWtcAUxKNhbp1aC3zDQD2JvBPnmSUmhyDGLaeQtj5Sk4tFKf3q",
  "key16": "Pp6Wu36rpduGp9fVKSK2wDxMGdNHGs62xsHBZ5vXvYqM3xuBMfjrE5EQpQQ3Ro7N4vvuQGjQj75de1DSbjEChUx",
  "key17": "c8vXm7nnymHUFKVjTKyLSsYP4uUJWd9TuL7JAVbcc3Hn9S23CaspS7jNf3w6hn3txppS2KvJnwRL4ap9FM1E4Fc",
  "key18": "3h3Mmdy4KusSWKpCK7JBmc4PmMcfuQdAbugcUCpxBoXNJ8JdDhBkaRDG8xrN6fHD9pPAHVJr3i1dCHKvHBxqed9d",
  "key19": "2dfHSj7Gm211SwnuEptp7to375xUgPVHLz8eXSCGSrm9ynQ7gr227jL1xVwNcpLrLySuEj8W7yDH21ducRq4TRNr",
  "key20": "3XeSw1x5t8majbKa1wKJFJjzcHhcWFLbQRRa8tFiX7mExEHsGaXBvAWZRMTz2ANQEjdZmBbtCkEpFVLqaAUWwyeh",
  "key21": "54RuX2YGw1YDqSnE5bQQN1We7rJ4Jdn8UU7BxgFnXKDrkYgFR6DrAqvzCPx6zJYYnAgqdaCo8bhArjpvRa5gMvsg",
  "key22": "4X2TNnPKdjv8ScZKuBV4NpzQmMr1v8X8ghSUDcZiQBZFvMqE7Z6Ve6Dmhp31Qb76vp5SUAhdu4KCxYHZnkgwtUvN",
  "key23": "3M4ogqS7Gv2ywCbb3363juuAaVUWwnPPAhDo2oc27Ym6SdD8eNoVgMhaE5umYGDfJCfs18PrZmxaUGpanaYGgrLP",
  "key24": "4iNWvkG8o9wFSqPLt26VgkRbbQEJcL2gdUeqsu4FsqE988AWjf8bxifwz2WSsVzFd6aWnWmMQA1MsHirhMECrGEG",
  "key25": "3C6DmQ7yt8STkq4Lt41QuP2cVg6fVanMssDgFuCKzgdsBerBP1waicDKeNDef9WYQSch8YZaQCDn9z33PNDPcrcK",
  "key26": "3chK5JGewRYMurYv8XxbPB3CgDhUMsVcVU4TNzh3Ma9isbdvgLFhpYtc5xYdXxRaos4vWDfmHXmvoJXqeeWAGoVn",
  "key27": "4wpJcyCkgWT2svGP7HoLX2JbEkkVce9qsCCEqLxsyssHVkiJX68z5jmqrk244ggL9PLVs7jymwcJnpb4hbsf733k",
  "key28": "da4vTpHGrjgi7PtoUYMRXS8tVnrPp89XamjgyLxb3VLzB1VbzkcCkEeAL2XSUAmjNCobXWaJtjnLxyck3UTxQtV",
  "key29": "4LwGyhHjmTfQgcNJvm7CY3L2W9gWAhQgQGbMGNA9N9Fe4UHCQRbbf29qwnwgJZq6WzkwmssuuTKmuEFnuqCKu215",
  "key30": "4WWSaAjouae2Z9dSDSHbimmAswXQfcgNFb2XLohWKMeDdyvFek5awJGZATBH267eRTtXNS59CbupnYakTdtyFtgp",
  "key31": "QCiCX4sGcEdDHUhGXygFs2kXHSXPf5uZxM9sqK6sa8SWkyKyFjycjx7GdChzJ55ViZ4zbta5wRzXytZRJNCYvPT",
  "key32": "4EpqLyVMMTknD23vfaRdNcsgwSYRJ3CM2Bj5cU7BqpSNmYzqfGSoiny84C4xdhr3aWFAHjyAHPyaeqTPsXBRJw2b",
  "key33": "tNcWq9zgpeK4w4nYimidRhmmLWVqXqUzokqmigukyfwnC5AnySyB6iabQy4i9BUefkkgJiAV93DcjmE8yUjVTXU",
  "key34": "3yzyfjQqvNZnSBsvd6meGGdT4HDiG3tRXRhWHnCH8YSFzgCbNyZXhDFLWa9iEQ5gNveAqsmBhaKgKjviVmdr7DAp"
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
