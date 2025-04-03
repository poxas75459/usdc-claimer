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
    "2bPFsERGtoEGx7ppwZChKYNrSQsMJEmJwAxK3KZrEfzZCF8zNLVP3uEYHKhPyWhRmQUosbs7RDz9Am5x4p4LGg2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5j5thopPCsZEbt8swmLoYZ2Cv4YRZf3Mp32zUY4a8aaHwS58nNnQVp2B9YskdgJNkGGVUCjwdjeNK2aHxKESPd",
  "key1": "5oNhiRMU8CZJ5YKJsin4hCWydYQgHAuTEGrbsXLzViKLGMPLgBWKhmfF9qr8DVnHQ4JrAL8fre12oSBXREN6fN7W",
  "key2": "3EtRetC5vHQJMB4DLadFBxPrDAHP8FqKqVrM7Z3jUrVi4T3fN4CEEW7S911MQiVZGF2MKttJ6UXn6Ts9kPLBpRx2",
  "key3": "5w8foJyemMyhe4QJ33G7jmZr4DYaYHezpvjQEqaNiMTo8tw8z4874vztPgCKNZKAoABguL9uiCMCtKqqNLRKL6Yv",
  "key4": "2i7fgjqNpkviLSdR5EErHLkaA2ydd4MdeE73SVdhCP8VMbQz749qChM1iEzQuhChuRdfJyqwwMmTjF7oSpZ7VaRr",
  "key5": "5fFhzBL5JYVCKAvgsxFHVrs1b5eLdm5YmvGDiB3PFP18NXaorgc2ytuxinGvz3Jr6t4ZbNiWTmB3pJMn1jj2fZmm",
  "key6": "QuChrUJbuQGty22mabMzB4FU8b2mtrrcBmAk4eADKERN1xkuQDWkjAadiQZKB5M3c22txr5JaESSjpBXuspo3tB",
  "key7": "2NucEMoUw2JyWCgYUqRr2MwpJffjgYayCEgrc6KYL9UDefK63ipR8z5UxncBJdzNwRHEcXWoSnh6jQnp4Q2gtBm1",
  "key8": "23WBv9LcxqcYM6MXEt2gQ1rWoWAxoRmWRA6wzUTvQYaVhVw9PdW3jmAh5W7aavg9c9CZoHHkmVszgN56maQsdn5n",
  "key9": "35jNvH8h2eBrcqEkw3n693RKmSfcsk1eMPpWHqLyH6kyaj469uyYgW8pdzDUej2qGus7JJskGsZj8ALUxU6B6TkN",
  "key10": "2be2JwRfbn1yNFyHXHSaqsywMXoK874jFKJy2dsa5orTRGASCruLcJpeLz3vMac3cDtXbXJ8d34fciiboei3mFT1",
  "key11": "2pxUUbLNAvhShhVJYfcQ1xP69JX7yBQWuMWKzCFM9V6WyUsH4dcdHai11FXvJWbAXt1VqCZsfTNDnSyKzWr2URoq",
  "key12": "4XUTXAX2wd34mNUfQYwdmT7ggu5UZa1HdMUZcXHspFP9mRQR5MBn9F8rW5r8dWPtonnmt1aQV6jf1Zc4tkuF1oSS",
  "key13": "3pNNBhXE9bec9XF4qpXsyKWfaXAZyH3vQBMT25NVpfBdYR3ZFTttFz3MPjfQXS5LkFRa6EAZM2fJN5WoKhRxYEdQ",
  "key14": "k64R7LyhRaJLemtXsfTH5A6KgmCsmwYrmvwVAKoCHNwhQQuFA6nvmF1ZqegYG8e2uJrH5CBPysesG6cFR93q18v",
  "key15": "5QVqHwp6m1rzTCBm6DaH3zPpHLXTdcZQHuPW6sSD6HMmmUzFUuxodS93zz4VeE6Bfv6TrJ2opJ3ios2sDThLMzv8",
  "key16": "VHmW2F2A6AzF3Qf4cDcm8gTNgrtRibTuGt3s2QBSHS1L9PPb94AvuvcPayWD3kN4XHzStHu75XkDZVekhiKvyNL",
  "key17": "ZtD3oJGiWSNiGp2uy36r2fdDDxE6kXfCAWCJe6c2SCaFALZV9v3Fb4eEEkqVruNJcQAPuYwR7jSJUGRmBYnJCEQ",
  "key18": "2anxgKUhaCSFHP2fih5Jr5uL2pXBbcWefmZvHjrisDB582uv6PrymMvk2H4JfNx36SDYCAVexs689SpYyg6RYPCD",
  "key19": "2XLDk3UcAeoyZVmtse3Fjb28dZDe74EjWMFZaJfrwmW8vXF3669uCeAspTRZACP7qc5QKq2ZPdXUJgEjKN7v1U6A",
  "key20": "66yF5aaYVzZ1XqPmvyXeceoBRDzn5xuMeV5wTsUiva8qKgxgaAjRGzMGdar9GDixdkcXgm8av823bXRfWF7pgPN8",
  "key21": "64pgcAE3jHcmA7vBCyu1TdGB1U5x3QNMV5jcYbgPoDsXeZ9A48TNratLpo8DugsJ7WKQKdXatPN7o6FZ2SMTGXfk",
  "key22": "4BT1zyme1GdkXJxkT2g7AHhDAKHLG6491gM9pHth1dqKPL9nQEB9G4PnWUqt4MuWx2pHSbccf3meakd1uBX7M6jQ",
  "key23": "29MhuFJvpGggrrbaYm2JCnUatvBRYHAbgtX8Cq2jbbino8JtmXKNF5vpHUrkFgsMyg9EmaQrrAXmBit6BEt2ANrx",
  "key24": "KzQaayYzpucWmVcpE7VVMEGkF9tv3gQJHyjiUTbRxXwQnGHP6iN57AYzWvw4Svsogi6A5j2jKd9C2dtksUwWKKV",
  "key25": "4ttaPmLoFWVWnmzFyYVJtEH68NsK3J1BkeCmkqS4XK6mZjFhuGrTHj5xRj8bdazxukqqSDrmsBATUjTTQMS3g4bZ",
  "key26": "X2TduBCayHG2ze744TMdsJEvtZNzsgRruXdCCxgtCBfFDdyCpJBXpSkaBSci5iJPZL3guUBthz171rGbaog2qhd",
  "key27": "3LqrmCHLWww6S4Lnycmc8RxPsWmYS4YtzW6KYamuFWDM4nvvTdP6wNUyxt35QijW2WKqPFu4BbouDmFoiBoijco",
  "key28": "5R2mR2EzvMD36vJmHWWVwq1umG9fYTGAjLFJ6RHWcBrmicDP2EyfdSts3YMk1jqeJwgtkmeTXbn2gq888xiepoE5",
  "key29": "3nP5uTRYJwJrbHMj7rVFAHM7tN32mxVs24Lh7V7E6yQoyhAYN9rPTLBS27GUDmpz8a4MxDV5mq7H6aXYSvMgjDuT",
  "key30": "63scU3uRLmDP8UeBUqNyhbQ8qiyia16uoww9kJiwTi2fG5VconKV1SqvCzk8K29Y4irq3gcJtzBUL1qwyEm73L6X",
  "key31": "44VbezL3sMcyGv8bCpjytwN3bCeArP8eKk5hotC8HsjGDg39U5EdRb9GjZUMVMnbqTtSeay9nrf8tFqYM3CCnrBr",
  "key32": "4NjwZQ73NGSk5YRsdBD8WiKXMWeiceks88LDT41ADspwN4n61Cnmm9tb7iaFs8hwfCbMpdQXMZifZsJEEYskN5Jf",
  "key33": "2tLEQhcsATsH6suxLr8o72U7rzWxJ5epDWUsxx974if1P7rYvbpQqtYUaGyCtUXGmhyUhiYTRxoQnonBk6ecDJ9Q",
  "key34": "5FYdQ55jNua78yFWUENvYHLHuGup5SmfijEKx5E7nvd9QHYjzgUuWffTATU8KeFTWHoeoVEFKDQxGznrnvYdNao8",
  "key35": "5y4sJ6oZiZmhJ7gPk3G9qt3Wsf8rLJ8bdNg1FpBTBKi7xqrDcdtH6pYN26jBYMWwNFGfXYxTVcxRgngUcDWcK6bX",
  "key36": "5f5guVCPFQ2ovokw8y1xjGdsoBWm3fsHXSDapQX5NBkcjrsnhZndmXNkdrJqMLhXGsCtSmKjfYevfv1hkYuCirmy",
  "key37": "huZj6geqo6GzwKtZmVQXMPZruGUaVoDsnJmqhtiC4iudAeaEy2QmBThcyUy2gpNuSE1fKBwmbdLReNyFm74bEbZ",
  "key38": "5NJxn2WqkgmLtVY9TxDjv75Sm5x1n8nWKrhf3XFk5W1ieCTUD6PMwfTTFv6RkLxDNfxt2STHrALBgHCvHhb8x21A",
  "key39": "4NjsKfN3Be7jDmDiGxoyFtGMFvVvgRP9uTkNaZ6jsTFi6usi5f39XvKxQ4SXnd5Qs4CGmMShHD1mXJu9oZeJWGez",
  "key40": "kBRpK1MQBZLyDTFGVip1YSpJuC7vAVWhambcEYg8JiRTLJpW4t47995GkvwV3iXt72MFfEpbPpVkDYe8voCY1po",
  "key41": "2GTR9w2pAygQmCeJRH6Mv7wkp9S8Dg2ZKuMkzPTrSi56ZhP5Sto3LcNZKwoKvtwWMW49Xn9eYHRyRhB4MyFW5J7V",
  "key42": "Acz385yRiEL5LcfvfH6U7iaY4oXZBTtUhsyuwhAoyjHgStd1qfFK6eJKnebz59AtVvbGzWCKnMuLMRYu3jLweiD",
  "key43": "3HGjb5BM7aiW3fzQtpRvwweinTvjLf2A8USJCt4u7ZmMv659vwWXMtyTkCkT9UmkzNCFrLkrcBYzAvLYhkdpwYcN",
  "key44": "cn8bwAvGmr3wSJEFVfyaP4Hx5gYcqYndX5mWjU6tQcYgk2rEejGVnqJ4J6cQAVmgQ8z2nWJYtJiiihuM35xvFQX"
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
