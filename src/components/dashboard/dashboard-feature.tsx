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
    "5kfj88aPQswktaGwLbKjMGqctc3yjDdaVTqN6uptHA6pDDFauSzYDAZjM4WjLDqXGA2ST9qrBJV2TQnCPR5J2T6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WPokhXQgA8NcRiHfTYCq3R2jnXiKw7s1ScbqRYNKvs7YqQn7Ft8m6SSgkVjoRbnhY5qtex69vFC2Qbww7tRHk1",
  "key1": "DLzotozcethrZgt4onH1wdFp9ni2UTVb18FHTvNJBV1SJrUecARgoRZDGKsDwuvJmPv7hiH83Civ8cuZnhSeSjU",
  "key2": "2JDMVriS8m2kjGVfBigqVyZxyEiyAkMmS2sbPtL3P4CkC9uziVVN3RbhzRgA8Pfhe7KatfnzdYL1KYGok6Vau1zz",
  "key3": "t9vy4waCLU2hQwSsfs59D1ajeG6bPdJEHXm524Ltmg6kxAV628RwPXKqBHMe7J7XSekBLSMkR5znPjNb4wfxkbq",
  "key4": "3SybUaAT4LPEvg2X1c3SEW5814tX7NfrvGt5ryD2saKW6wTTRee3ZfsurKzLanJ9pTeHFWfadja5CoJqqKC6mQbX",
  "key5": "62YB6JtYmrMA2UPHWphe8B9AnbcRtH1qM7YNA9BbYzezVQd8s4CFgE5euvz871TnTGgg9oafmfUf18NM6AAyqaV1",
  "key6": "5Mf9xDYa6oCdwRwq7yiSt5Uwi6RKPxMziGCA4Zw3RQKdqxh4n8Cx9tBAFctd9kzXkwtx43SiSAZeW2DPHMMRUdWv",
  "key7": "3VFjbESwuejaMaR1GRnjbxTKz6mfa3xrBCpPDpDd9oBFfz7UosKz92Ke6mtVAa6Dpjs2aTSyBgYxqrcdy9kEwmEr",
  "key8": "2ujNNdMr1nUGEZyFyZahkNhyz79iFi4PMoZTerCkSEZDfGnY2DqUeqWbmj3Kk558z8gFCn6d6yj2HLP4pPTjt2Xp",
  "key9": "9FcvUzi4fmZ6FBGPw9suUyAYHDjerNCPyGqgG7VqRXycG6hT73mnq3ciHwUJjvbXhu1TqfYudxddTTzCBGS6xmg",
  "key10": "krQq8bAhBhNv23PQ9AQAFwJ3EnTALXL8js1V1VsHVr6WAkjULzrx5EDNLnAt2vWxavkCbpmKvbKf3aH11RwTX9i",
  "key11": "NK4mJswzUkMbyNwBc7La2i9tXssErWMvQNqxcXJ8AytdgkRfgYVfhpb8Jb89YSiy2SHWmHX2MYRpSkfczr2BYgu",
  "key12": "62XhN9bZcX2DPRnAL8MNHKqBPkkx9WmpbJdQtWDy6yM7ZmMrtAXvAGUusjVJ84Rv5tAZtTDQgorHreTsCFDjhnUY",
  "key13": "4EDkej6pab69NMzcEBcTSKgLx9Dqzgw8EZUEMXmnjqevArYJS6RsmevrSSZS6yzBbEmJJeJTYT7fP2VZbYC9pfjf",
  "key14": "48RE5KAVLq4jHz2pFdQLQAKdLnBAKGvvuMdFDHPFm8ZLU6kaRa9mtYFfVySjDgCRM1JSbuTx3xvkGRnQ6X8u8USD",
  "key15": "4iQ3t7XhTVMRA3ief642WhD6x7ZLNS9WMa6wnpXBH2GkKvEt9r3YSVoWdEGk9Z8ZtSrZCyFL4y8cWSwCRZ57JkAj",
  "key16": "3HTHNmj9EuwS4LWGHemGrPU8oaQbBd9mWNHNzU7suT5hNND8Y57YashFR88Spc1oS47NLPtB3SNWXnwKc2reStuA",
  "key17": "h8vrsFPtBVDNZop6Y4UYXb1QHAmz96ZUSwERgBfdsAY4Y1VmbDBYRwTa7i7yQV8nNtDFuUXQm15KZiEAtiEkQDb",
  "key18": "38LRFRoaXNCcLhcyaYkGSEf9uUxoBqyVohQM8NWojZddmZRS9SM9Dr8wYnYAhCb4WpgeBo1Ni1zdtRXyYmqPkBQL",
  "key19": "32BaiG8SFLoNP1pjWV6gSz4smpBua4EsmmtwJvzJJEssBLPcGXTAkKKNvqGMo7YoDkiadPED9wjEAtUcLzxZDrf6",
  "key20": "4rkktYe8LPaBUMD5XUq584G7eSojRUZ3QUAaLeMrZrnxDogk6ZjdadYsmASxBNj2561vTRCSdK8xPBaGtYCzdg68",
  "key21": "34zjvohCTPdLTuarGEDRpM7HKCrMqg8Vjeu7r6RPGkHnZbRuWWde9g9oboj1SQtkKZPuunABDSXKNcDbuHnCiTut",
  "key22": "5S52sAYGYHjT2MVgMZ7HBmWkyWqv9gMud6GiskJLJEBcyAq3qexdJXZkoobqABbj8z2hnKRQNBzTDupAEoK7cmvF",
  "key23": "5AunqozQ1fZrYBoHfNnFhAK6Lkx4D7iHDzBcCkiKydu1H1STXuXEaBQiCzfCLyyCwsYHMoTVr7BKsRBpegjFXgKb",
  "key24": "124jrYK5mv1YXAxFf3jzuzhkSTeZwdpFodt7F2oDHjJf9fGuE2XTgFCLqALHksYsUgmyCqWKDtoKUUHN6YakG6dQ",
  "key25": "4sV5vX92XQpjRhD5hf2bFtgX5eS6kHTwsdmC4aY2DP7US4o9BCvyon22PZueCsyu4Da8yUib2aAUSBmaHh3kq1dU",
  "key26": "CspPaCDZfGv4nFHLYH1xUywKp9MoVZNdJYX9pvBjPQA6HzaDLHVd7LpQiDgqhndH49MqqGaMFXydjYck66WxVkg",
  "key27": "5axNtzzti1F6ErAQeFdHgR5uQtTKS7j2xmud1YV18DTx7V7LYGcQoZ5N4aKHFfvrEVD9EfcFVXiwPfji6h2FQWkz",
  "key28": "3AvtDLj7yNK8Pib6ZvPN1k7MYgiGLiCoi4fDQsFZWBUu9BKnQcnXb7hALJTm7n2rARSxXsKrFGrjbHtWt6BvG3HJ",
  "key29": "TKgmSgN9fxg57VsZbipDCpip2BsesZVDLzVehENK66EBatMaJuKojw48nstffoW5ee1KoHP1G2PiXsRji1rNcoQ",
  "key30": "3NKdF3dt2D5rywGXRxZ82F79RL2gXpRmdwvT8z4oxNW58c7ZS6Hr3tLjBfpMu4iSHyopDZswEXcodiebzB3t1T5m",
  "key31": "371cQCHuo5xtHym3p8wMZh5efbL13szwyT9cfN4HXyyytgPtBRgYCUKPox64upLANwoVk5YYob58o49iV6eQyb92",
  "key32": "2pCZxpPiezfqvoLFB8LMeQQoZXAB2b6hr5CAoWZWuGYW39poBCHYsoYLN3PfzDm6qL9eRNneVxYe822xXfon4rss",
  "key33": "56xjEKwentFeT1xfhJXiiicAGFx7r5DkkXJgakaugKKmhhKFFq8dJaQphLUFzbSpPgZ56BFrGTR9JA8iwDghnXoF",
  "key34": "2U8isZ7pjUzXeoCd1DzUm9Mxfou88cnCETjhgSr4tA8j6CSuyAshpCojyCcL8K1inEgvxpbjqeQiyLpavTjgB2S6",
  "key35": "61bg4dGavcLTT6ZYKbfuPs2fugpS5iBtByteMMg2ws7iJJonzyrosAJu9b5fvQ4NetDQMuSZjTHURLGbenVkTsv2",
  "key36": "5x4KZb8RhqtxZzJEPQekmYqyr41gzkMJ1bUkvXbwWHGj6EeKaeih6TwrRxQpgPA96Q13MotHUQGDTi6jVKKQ3eey",
  "key37": "4ZeGgWNLdQ4aaFCnUucADYHF2W8aFbFskK6zyQ13Rq4JRbe6k71nzT1RCvx265k6cEa1zWHzXQWh4TsrTz5wcvEy",
  "key38": "3hCCavSyoASWvnLCiQxWYh7xuqLeLz1ThgJLNtYWVovzrB5Lb3xb5GfjhyUMfErrJpAZrsn8gRE54idbotYeVdQp",
  "key39": "2g9i5ezejy7Sq424V8rU5uxzRH6ntJQSfUAfSKt9hrfs4gQ5NqhMQzJ26XDKPzNrxfanWL532W8tqQMAgqVnz6Vy",
  "key40": "2dpq8Aw2iAsNtHhFim3WUeYa1v7NTbE4yANcRp2VeWG3XtMeztMjWM8sFe5F3YFkSZbVUHaMs4zijAwDDznKmfkN",
  "key41": "2AUtovvi9x8vykNntrYKfjJaTgToYNE8ruWSCqLKYDGFTcwUCNMLKh3m1WUSkgpUFZXtmKPFxe1zzHYWvGW82ZXy",
  "key42": "3PqU6bw78ZASJYTztWPYMnCii3anLXEeypDKSwMs9m1itFupnrfdkF6F1Nj5DLbKUhHUZLBf6JjDFYyNrwJWV7qJ",
  "key43": "2w9Tj6EjQi7PWLn5Y8zZdL7Xxyg5fYsiKfniMEgTcU3vENS9zxX2NHPG6chZqB2Rz23yxseheLknZcq1tMaJFd92",
  "key44": "4H3YXS8WcJhCtFdEkMG344eTfW2GuBpDvm5tB8Efpt43Uy4kBg3xCUpjxEiXWn7G5cwrYwwhaUAEwsLGeta2kH7h",
  "key45": "52Z17tV5zyW3n28xPTixC4aP6TjNJxe32G3L5byukhUTDM7DKtJviPWaH4KLJuEKVmP8L1wgP6PRtGaJ9ZMpZGkX",
  "key46": "5upNKEYSR3wyN1iKiWvtLnuTujoZwHPkNngfZ66M8wcpJDuGNGkY4Q8uds47gXhAuZ1duj5iYHhTzotLR79uzkoE",
  "key47": "ofrNqsLRabsUvTE8Zxx5KLLiaGtJzVqcyivk88tzHTCstZysCVbjH1KZZvC7Ky2bSFqxA4Jt5GDRgvABpjytoV9",
  "key48": "3u1aadM2idZpuSdnkkqvssowBmkh3XHofaKXEPZ7zBposY6A2ZBnxm93HDbteoVA4a5PLBPkg8TdNSVDbJ23YzVB",
  "key49": "md8mRrse5R5nysrL5srLZHXicH4LBLZeUkMJt3hNdETB18Zk7o5v9U1MiJXviVQsYTCVKP4jNuBZU62BEF3i4r1"
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
