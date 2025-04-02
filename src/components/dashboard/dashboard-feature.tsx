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
    "3nDggDVPZcwHpTRtFYEu8VqnmRBMAdJCcWK9i4zYqVsch5ZF9gCFp6GZdYWGcfgFRNP2XTAFNJ1RwnXHiA1Xeq5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Juv6bmDaA8BYBok9U6RhG5fj5rTKoPqnuEVswyaWVkgKa1X8rjSu1EVqvg5QoRpkGKvoYUwoBE3SGmjr8rmfcp",
  "key1": "2ksgyx2oJV9xHxSmg2mWCUVt4DnHoWxYQNaBSaoESWwCoY2eXCwgMWuVEDeb2rJzj5pMKZgVbJCeScEtbDkdpUc",
  "key2": "5gofU58wf7KtfMLhk8kQxXiAQEhcSGMHr5Uj94vNv2sKvTgYDe7nfHsJzSEoF4C2n63bRiAnMsksdybbKpTfLKwH",
  "key3": "4FD6LoXwYt7h7S9qZ7aNgVXTcckxuxja7yaSMQwvu8zRu4RkvGm64m9sxQwWwUJW7AuvpnFGakUw7oYZtarFAsgn",
  "key4": "4hcsY3vyfDse4J86jkG4jnEMQDvTmzHQoRYvQWmgQGfUhmmcafrWLwfh89is2NLQPKAHPXz1bMMkcQXFN6qrxDB2",
  "key5": "2DAXqMjLDa2e9FP3172BiCbzYGYXsUCgvVaM336o2wudqjd4wQGxeQTd3qxhYnx6U6wXh3xu1NGGXNdjGvfjuVxK",
  "key6": "3efAiUjF9hM6dbUkXVqX4WZqfQ7greT6e3oLiFFyq6dRvUwzp2UnujhH2tSHLQAk27AworDoNMnwG5n7aNxwYMaS",
  "key7": "21mNj6fNfgfR1rt8vGFqQMjQ4zJihNpLEwJMWvBo3d82eVYsVBBbWVFqSEHnUAzzN8KtfM6K5pGgdKuCQJo3X6aS",
  "key8": "Sz89xeBCTbdinex6tZK1sjFEhDyVyYyJS1vpsWwf8RexYHWqdL8916i1UXTmWnBXzSAcNt7MYWYxmfBVtV6oTL9",
  "key9": "2Mw2kqbFtFN87Rn6ALapZdi89JjeB4AAsd3PjUhdqckdh5VmpshR45koD2AyyY6MS4rKCbDKWMf2VFgnswGNQDta",
  "key10": "3xFN562RLuJWa67CnzCP6ypJ4rpQpnc6WywC7rHQyCZJZr6qWPD55fmpYxGZoRzPxQwop6Wxx14zbRFsqai3PFdR",
  "key11": "4r4q88fUcxovbnuTrwXFYy2quuMq5mJy894iNYKgNRShNcvNA1Ef1YCWFVRHG2b32zmsR7Nyt7YrvL2jEbuqcn1X",
  "key12": "5yyZLEqPfBMadN1ZBmiUK7jQmkdBoAFF9bKmQcdCynpLQweGMbNZCYgkwMfutQ62br6EacKbbSao28mAV42Wzbnu",
  "key13": "2TDLpXkrx9Bf1FPQDgkcvVnm2ACBnJGMMUZ1mJqX7k15exKdsVvmFnAbdeFMGPaDqEjxszEGs3DSf1f2KZNS8wLa",
  "key14": "6dPFSXaWyU67niMK11xv8qRVrAThmKH3MM7swWcLhRAP6i8YB5jxFC6q9VrQNCTh8vL8E1dWTVGfFgUhd8nNmhS",
  "key15": "p3DktK5apHdPxX4BYn6VPqEuqwGNp7jRatSyKdxTBErn7sP1J2kb4Lo7yDKm7euVU4k3W5B2FNSECnoGyWBqHXz",
  "key16": "4dQAeeziKhFmtYR6iPSQKGLtbquN7YMcRXx329V6uEuQmD854HVsNScSunb4bgw7AeyQbCGC5WFnZLH7BvdskpLR",
  "key17": "4C8x3pUkhbTQnu2WJ6e9g9PdwUdY8PY7kry2Nj2ceinATWGMqRFFtfYJKNSfo6nxpfsVju38X7gmsQvLqd6ffzWp",
  "key18": "4hvd1RJ8xDXcF88Kup1PJEfT1fJ5FpxM6EgdtuA1vtCSEPEnsJ3bPXMWrcZiHXspmtqtsr2ay8BA9AUdcKtSa6ZF",
  "key19": "3AVgJ4fSSxWoQgLxTe6bQNkKggBnAg8XbFtZAj5137kQQU2atDceFBQB2Lhz78JUQ2p9Bq2oZ2RFssUPywPhpej3",
  "key20": "3FhoVpnjw9TZNye41HtoXxE9wtH4gnk1o4ApRcCMfEkuv91WE1gPv9EEcQgDLYJn3usZEzGEFJt47Ze2THNK5Y7M",
  "key21": "4dnQ9U6dUsVrjY17isX3drbiXv1VW7wzVzHboDesyhKJ1TCsxamGVHo7okrSnNDNBMRG4D9QXVEtxendM9TiAcCp",
  "key22": "5gpFZ8aKF8ZyvU7WSCXYksiTfUyUvq1YGEUAHewt5Yia4xq78pZ8TugnG3Htv2uQt8UKYmroHtJvPEJ3wcUirXok",
  "key23": "4mXpHSCDinzVDbxDc3y1jsyvKLoq1h7nArFRKUSbeyTxLaq6pBZcKUqBypMLuYPMPWeCiza7qYZTmaASweE925vn",
  "key24": "mh3d2b4dEaK3ujTfHufYtmXG1mdAz1z14rDP1XqbgaHAmA8JiWxhZKPttJR5Pbu5sDkzWSUcc76VxjJwtLxahPr",
  "key25": "4Ahi7pYzz2h4Gh686TgGEJeGKrtJMeaCHZH3AyPSxotWJ3u5LyWCyYLhxTC8o1dNjKbcM5Ays3jxphLq8KZcpC72",
  "key26": "3eCobant8ZfjHXPZSueEyEt8hwQqHkXFdWa7U1o4woFGyx54MDadQBm5th3EbQdTvfLqEhBmYzoYXikvaeu8PVkw",
  "key27": "26RgnWNCsgZHqy2cy2TLji6PWx5PoL2pc8BxNhor8BY4LkS7tp2abVC3zrHhv1utS9Xz95SsN27YvBcwEM2wiTAB",
  "key28": "2DtGzxRP2uQH9N1djH6nrE9mYS5gA3NVgksog551wsM2EVktPxi7DWnrVAJNPNNPn5NbtiAXVDuJBszZWf2NQmos",
  "key29": "3wCRp4h7RXNoio1J4zdHRMyC3UAZ5q7bBniFqDbyYxf7HySe3aTMHP3qb8eRMinq3hkb56XxsWw4jnRTacN984ZX",
  "key30": "Dv2NvdPCPjbwg79bJDZLhvFy6731Bn2WQiu5bvvYcndoSLa7jibvcd4sEMDXP5VNW3H95SAnT4Mx2af91ihmA4s",
  "key31": "4w8QdchCpYJwsrdjiVVY4wtmzzHjcUfaSeanNY5gZ7Q8q6Xgeb7QzqftSquhrVzk66AsYqPVPb8KqHTS6aExDzYZ",
  "key32": "4DTbh8Fac2MrNaUiJheCGvEM5Yh2qURa2TqEByyhvtJ99AjMGurY8JEBmygUqKXqECzRC82FT3eFeWGo3yC1X4qx",
  "key33": "4yjEGiG8TJvhcPoQHdt5xYmLSGdKxHYqKf9hbQwApn859WfV36PZhbvr6ZsS4ofKiWiVGjBpcMafS72N3M8HN5u4",
  "key34": "65fD76jzQEAXEuwPu2tGhS3PTYCWR8o1exFwFZXPDAV8t9qQeYiVZ7ivDPQ3jEooydnhMAzUijfDeK6XfrigvA6q",
  "key35": "4YFmKXLL4eagD1nZSXsBteHHYrKxHH1oHKjFstvi43dR5cX3qWzaFoPU3orwxssjTD6vt9s9AgPVfAR1fRdxCAHM",
  "key36": "4wTTSLS3m9Li54chHQ7buSX7oKzeYGyVpGWvPFwgDFtgPfjxVB7sApWuWuNpLFQknr8f3TQunews57PmuQskm8Ad",
  "key37": "2k82yMNRoV6sxdqQxAkRNPHvDjwnJrVuMotL45AqFHs3Zm65h4SpPfN8QDpGxC6wBSAkDnGQq6yMiXqDiftpnkJn",
  "key38": "zrUgJPPJWHcRdLvELTiaA1KyQKFDT2GebWXhEVrV8xbb93ieVQHt3yNAGeYVdRzauhLJ9ANLfNH6PMVR2LZHPyX",
  "key39": "3vQqCLY1fw6sC5mURJKNzyRwnmh5vQ5C6rhrusc9DQ9QakjSUgapdCqV9XoJS5hNijgEPUbpnyHuN4uYDXCXRNYg",
  "key40": "2dvWh8S3sMWcwWdq1v4s6j9TpmFi48bYzKcZFu4vHB5FzhpySXUU2TdWY5xen9vT7pcZ6XitQNdTaTmqkz7NSShu",
  "key41": "WcVGMAB5JzHX1a7ZXMBoqLCF9UeQWQZio5jfrAKyjcD2QRYKAGpBhHzhvu9ewDJeZ2QjSCKJybH6ptci8heaLef",
  "key42": "2JnNjmMzJVBmbajJb9r1BSiCivxgqMiN4P47tx9TSG6mKHcKmzM3LRwAozu1A9ZLMkua9qi87rSJWaEyfohCbFQ5",
  "key43": "5dcyk6n2cRnkmsu8JX923wjyPaqcuX3UoHNawtyYGNKJvHmBRyJoUnZ2zed8taJncyV58fkrPKUSg9SNDKMK6WGo",
  "key44": "2SS7ZERWkvkZWBFMi7YzswxmcyTy2pPFDmTjqXM5RRF1Ape7RPjUSwjLcXkuBu9ZVWZfjFbYu1dvi4HCrXSk5Did",
  "key45": "2qTqxLEWPW1ezYFetVdSq1v7Lkik8mkvWbyoVxsC2UUiD7cnGboLxpR4cGLZn2QmeQGu6TqGA8viRP1Mvs4WmZrN",
  "key46": "5uTx8MzHAv5N1kc7cQTrU32R4egjwm3jS6QbFMeJWA2ZRW7opybnRQSqxPYFBK3qKJzKC42VHvkkNvqkvKjmAinc",
  "key47": "nqrGRhzcMmekmqa8HrF1Nha9wP9LLc7jAcXZFfbP1tLGw3kV4Tq5mpGJAPBqsdxvvcR6vk98Knroa2rA2sCvfoZ",
  "key48": "U5mK1JhJxyMTRtJXNQrD8Cdc9n23nSVsFyTLcp2z8yA7Ev1WmUpZcCFbPXu2fyuq2rHznEopFG9DNU9g4pNC7Cc"
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
