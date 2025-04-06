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
    "49v61FtjzdToiTp25zirTnoTm5aeymRoU3GaAv3bbXyCBtDZJW34qc5AoGmy1z8ryKHRsMrSvu3iwdwHvysFytXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jbjmtN4Tb7jJEZJ5EPeFDFMTnMMthhLPFdR7ZqUDWEJu5hU2VxLeh4N7MoX2q7g34NoU4EzCQ8NxtBZLzQJcZyj",
  "key1": "y4CPLNBKyjc1XMiG2BH1xeDjF9mRAwP3rAENHEueUYJBtUJvwu1JjmQtRvik1KqFwzzvvfYTHiEeSX9BuU3Pxhi",
  "key2": "hcGRytGrgEcngEkECDnKTT1cMrX4tQFcVZzmNAVkxNtFjLKKErrWuVvW19bCi2dyUW28hy1QeQZHztYbMgC9LTc",
  "key3": "3C81UX25M8KG7dkJmYaK9NhYf73rT2G5cncU6pRyYH7xfok4tdjDXJU5AY4aMmg3j7S1XWNCG7uciHaf5q2e7Bbq",
  "key4": "5JpnBVfYxTXTjHB9nb13xYramgC5GXe5oRSmmrdGnmBKDMfB29HyByW9xcBHYfVVet3GEDP9mNJPneE47nnAjmyB",
  "key5": "5LGp8RsyKWL2Cum3XzTJUfp6QmUjKoi5zGgGrwDwLt6Wgzgzmq8aNgChSXi3apS9Ew1dA6wdcPaaE6oFmHfk2XLB",
  "key6": "5rPMcyp8st2WkTDn3aswFH1pLtpkgCuBBHQq588wfGQuvD41FTCS8StaG9drsUp2kF9XE7T4STGdVurb3hQFAnC2",
  "key7": "hHePkYkatBLFALBywsrwNJDowiKXEgkbV7Jr4p1pEPoDBLFTF8LdSncVb39yMF4zm3XF6dA5SQWxczV5UyjjP1N",
  "key8": "3gC8ygwvQbo5Ta1EYufcsDc1NWZu8BXVReGSrHApKXcynaSW5emC2oNQxGv9Ht9jxEirDdmxUBYdkHYASBipW4aH",
  "key9": "2k5LeYgJGFHquLTmpizuRZAqbNmFA1JRBR7XBeBBuevJs7cjJt9wsZ12sJhmtTZipodAQp3ggvBhrKCTA8JyfSTS",
  "key10": "2AuNUuEpbxtQrqqnV6N1g2CccqF3X8Ho2rjzowEDZyteHnAtnhCzt3c1Go9JcybztSFp9msXNzsEsnB5nrBSCPLB",
  "key11": "3aCz5rNabfyge8eJbpzwSdhAo8Agci1mWXzerajmFiU4dV67GgmKHcZxp32LXAQSx4tNTCvKFxdfKpQkfgaH2Yce",
  "key12": "nSsJKaFfscLoDNL4riQkZJR1zduTLvD5M74aHEx6D7CbUEn3fy2zkSL3hqWNTLPWPrzBmR1DJCor3bkThn3XJC6",
  "key13": "34fJMzTvEoemcpYRTWzuVKxwbtUgqdbpE9XAJNEtrMNMdbVA69uygNZsnq5BXJjpUb5YCQ9a4XZo3DwAy8m9VKQe",
  "key14": "2GikNidjEUmzBWHJmFQvCUhuw9zRqARpEWrWdyVzzM3wc35ftmGuKud5QPc2SciLm6KEqBb67nEUg5zFogoWbWmL",
  "key15": "665N6mL2wDc1JjSuti6t2ZR6jywZWSubgMp8GQfKYHKVzjAsmmJXWm8eU1f3ezNrMTaj9QyM5TcgeQpFVn9rCPbL",
  "key16": "5vBhQVJeLqhoNpat7LYWBaFE1vdQCvYpED4atcmyNb5cwjAjjz9yWoNe3WT7CuGgVhWZq84cdzN4HcnxSiSr2R7j",
  "key17": "2PhHWjpzsBRqSzVXfV3Mxtg8jTHND6L5Qb9Ru1PW7AUuYXP7pZJ7ueXtxkko3ZqsgUZVaM1RAdW98CCML2mTEcRZ",
  "key18": "2hAZ4PKFYg6jW63UWQMsV26bCCbbdypocN2YSjXUHZNUChuQ3rxEWFCFaVttX1Nj36SmCrMqziD514tRB3Kg7dPu",
  "key19": "21Hwed12NvRitmMhFqkXnLRkqkNuPBwQrAnSkv57nwA3Hu4bq21dLvLhPzU4dvwRJ3sCTzXgtJoRwFJr5MFJvmWY",
  "key20": "4r1hyzD6AoveqVHMY6ZAN5tVGtqnerNjuAcG6EdexJruX3BHk8BHdf1PRBqyTeQRhiJVPB19mdBq48Sx2KSATiVZ",
  "key21": "3vg4ciBmifBhDoJRsrCQF96nR8Rtr4aAHN82i52GPLNEZ8WG6kLARv3i4uUVywEKj3eFuUs3CRs1MbXUn5SY6iQ8",
  "key22": "5SvEKFGJzRjbikp1Qb9KHtjL9qzCcxN3qY1baWhigBSQzn3ETin9sggmkS5HfA3FGJgKJsi6rSgs1pzLJZQ7fVC9",
  "key23": "52z6dXcYo46feKQz6z6NhV54LrewoyH6wfEdMJMSAKkDMQWyr8nZxEVqyF2CU34Zz39iJNSD35GUA5DK1gkhcTir",
  "key24": "2dG8J6Ks91uoQyFP8G3xsqYFJTtma4ebbWcRtAhA29FajBxs4KZDFpC2dv1rWdEt58ichxESxLAS9VbyKz6f9Cpe",
  "key25": "vaXDfB9s7coegw6DRNnY86ENGSgWRkuctiCosbh8mG7efcY9mdCxLi1VPpyUxeYjvk2K3RdzKj2wHj1iMbDYjWJ",
  "key26": "312pDDsq2pyiSuq7ciDPXMLk6bJs3Tg6thRtsXPeryivq1w7pRE3udSYwX7PNtBQLupE1bpXK5tfXdvbn8gTXUdH",
  "key27": "Ypb3NmuczA7yazkvzMHLUbZYsvDXTkE8HRdZxYMrTSop7qPPcJWiLA5ZtdkN1bUVhkRE1Sn9RKeUGGUomJQWoRN",
  "key28": "3JbpSDCKuvhD9rSiguVZHfv1Yhpxcxp47PmQpT6PTMCs5raFCw7tAV6XsiSCaooL2qhny2MyZCK98Km3uxNHTz47",
  "key29": "5GHipMjFKFXfLuFnhanXhPbJbYAVnbjyuAuz8Y3AMW5bzsR9ZqKLg3hgGqQQKkJKoaBaLB6GaZZFmN3NJtnQw74W",
  "key30": "4kD4usjKSC1puSUpJHfpKzXMK7iWsyTYZRDX15VCtgdnqV5HLX1bMAkf2ArcS41NP1XwhYgtqKTPdSFu82MWs6iE",
  "key31": "3rYFjP6crSaUcpHvmMJDzu5M3uuxFVPvYdfYAMi5gst8sHmNyNTNVmtH2LusRRCNPtHNWzhkJzgRi9GfmWiRpioF",
  "key32": "3NRF3b5J3NbAKGbrXoZXjm3wmv2vAFWFDv2QnhSZoyKucX7x8SbZjVBqK1dp2kPsgRXqvwCk2WPXAqUC2VZBN5wh",
  "key33": "3T3SNEHHj2xVFSnT9cP6KRi92xTd2HsS8vQLSGCQGzPd43aEPjmtZwaNjPGykxegE4XPyw4wa3hfknRWfiJf7eeU",
  "key34": "5ZhwhvbHsJReysQmhApyT8JKUz4jzTit2q1Gg45neAoRVagyjMP22auPP8ANzswsGZMfyVi7JVQzSZ1tZxWrRxaj",
  "key35": "5SaVaP3w8r53W2QT4ZoqhJW9eLcyNqLrk1AnSZ1Qs4FiHJbZvrBwvt1gt2JCAUvst2UKr3b3hYi8MGJG9MZ29WTm",
  "key36": "3xes1cWJHCMokHsGasGuXdwenoEi61eF8oP4qHf8qurpLwCiFyHZNhspvCEBkby4jTEeihgzxt6BNEALRcyEMNLa",
  "key37": "3sQTrE46HvhjyUczkMYzn31AMbD9d4KP8DLFsev3aD3UP2funryGhBDoVa59zJkmj6NVxRMgNaMvRoPPifEoHQEd",
  "key38": "o4e5o7KxAmi7stDoBiSDPNhGBnAfK881UJ7WHPLjGV499KvXna8iQit4PBWfBvrBZd5EJ3nMA1d3RE8rTQJRsjZ",
  "key39": "5yNyjKu1HyMi5BWg8EzF6yzyeKW49Hmqo7jGELac454bYL8b6oLfPjGnaeBp978Eom2xNhJvoaTPWypNo2ZX1jSk",
  "key40": "5UbcaQdyfQPwUiLcQef5qoqzg2z2qfJP2nvcfKHiCxwdZspmeRX7FX6JLVhcALtcbLnqG7V15p2GkxPCf2uaJ3vu",
  "key41": "2ASS1PX4nFx9yrMDbrYdmcnNt5pmiTE8oMeLrAFFVMkcXcNVDiHry616J2S3WUC2xC38mNS4krehTnXThg95oWS6",
  "key42": "u581YUP9PnXR7eck3sD9ifrRoGVFWmjzE7eJ6ATqJckTgDRUtv7JhTVt8Miho8V1cwfpTVVgtRt48qiUTWujpBW",
  "key43": "5XU8R5KejBdtExASLT4g6qqtdbo451iouZoM65LKJdHPSMLaxr2np8hA7H3ZgB1rDYWVDmBKU8WjJtkMRGt41F38",
  "key44": "38yeKKJyx4wkExWwzAyaBMwm39WMVtu7ipqzdTM5fej7aoCdwMKdM4Jx1cGsJ6osXTP992TZSXeymkTnRDtXyXTK",
  "key45": "5CGaZW1AciwCP1dqZRY4hcWi9qFPMjDd8nsmRs9zDJSKwK2VEcmxh6CzZcUVZtJGSRiJTukT1B72FRwMejj8bpo4",
  "key46": "M6YSRVgwEJ1jwY8YWQnpi49ZDTBs57VGUNvgc7YWUwwVQrQUPLKyABbcTGdki4iknNyqx7adXpWiSYxNHuVuj6d",
  "key47": "2qWfnJNdCRRAaLiLuEp6LKnavbmDNGwp2YQ9KSs78JCN14uLQDmYe9r3Xqqmi3oN82kyH4oUWA9GEruUTu4Ug5Y1",
  "key48": "9tuCBuPc4UVEjzHYt8qgQmsP8GrnPd142fZ6kiGhXQuj2KtzKdLyB1BgrqAwpFtpbyUoon2JYoXeoJNhjUpmpLJ",
  "key49": "4LH6fWWaPpFfA9He3MoVe3gDDaU9fbRAKBLGhQGjsuWyiPP4ZnjzZQJ2HK6MEEhw9vsDBMUv3x1wUJ4jk66VZveu"
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
