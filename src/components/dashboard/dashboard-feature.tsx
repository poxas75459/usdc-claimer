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
    "Cw23FR3NWgeSn958bWdPgtxtSn8Fu86TUKNgSRdQyFcSDbBCkXrYnfo7iEJ7h72ncN9kJ9hjfEXED3H5P4epfqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AhEeUyXomXYL5c6XNLpzpuV3jtZsGaGR6FR3pmpsVUCyc5zien4Ab4HzBp69BtLtcTz1LFexisrhnvPEpgPDUrg",
  "key1": "5dw4hfybqzSHSCsrfaPL43ygasYKnMDqm8Ro6PPZ1hY3tNp9gH4Lg6DeQemCdvi6ugVd6uiXYhNPUNb5tQ36o2o5",
  "key2": "sT16UhvJ2xCHijLK4X9DDjBLfYuUL4Gpgv5hVEx6fevUem1czC89W53ctdXznbxqhRT4guyNpiDa2hziCxpWdCz",
  "key3": "3iswV8x8xGn9X9RYwV6YNyhKSRiFxLhLxk5uoLiLayvaL9JE7ZAMERSAMJaXXFMJMKRMEyXnibdgxcDRX7u77xSu",
  "key4": "37MrmzKgE3KTCfrhFtKdxVCApusoGUbe9otepjvvcMswTcvSmECjuBQzEagdYxtHu1UowzunsuzoCGFv4tuLUheA",
  "key5": "3k6V5MJPbJm7bu89YvQiw4rqRXq6aEkr6RhynnxRJX1LgpXbCDY7CvS6BmCt6VX7i4XnwLigmB6GR2yyjm7CM2it",
  "key6": "2pSyQk3x2ea96GvjxNQPEbHAebgT3rytZoAnCxbSeb44fjyKSvRtsjxG3ZRQ7Smvuf82hhJgrZnrQNUbg9JTUQjM",
  "key7": "2EnoTSQptYiFBDcQs7Ewoyt9qc5cAPbaE7fbY31JL6AEu19PWyHqjGMQH5s4R1Zhouu9spSM2GJocaV67NsjXkKv",
  "key8": "39tMheCBCkBSWxUCyGztNEGRVtmaK8HUQEAksPb6sNLx9WJMNJFCRPdPhLsLtLfvAQEk37u5tJbyCAZJTY9aVc5k",
  "key9": "5GwRhceMVCfFCzQ61dPfbMKnec77Bh2u5WqDmRWssWmS5u57gFwcSXrqAuJx54sunXiowPz37wNQaTJoXLNaj1eq",
  "key10": "2aT6TjxsHSWpnn4odFjeehXDrsidjsrEfGrJhNAaCwXWV99pa6mhAq1Hhq77FhqbhXxswSNGvvNK6y3e1EnHerSQ",
  "key11": "2MQ9RTs3fFBKZ3RWRLpHTHHm4ivcKod34XJgujFNmG59bqSU1iZfYpCK5mEsGTMBpm8j84knVf4nMaiWqFSNp3E3",
  "key12": "2Bop7pa6BfoVXyhnsCdkzSJhMf2Cb48WQoiTyAez2hQkFM2wT5AELMvx13RazD7aQdBpz3fbnzFaSinKgKZw25c9",
  "key13": "5GMfJPuvSkQYskSUp8kBTrMmy8NSk44R54gL58NZbcmwsFmsQc6YHFZ3aKMcdMMWFwPdpx96D7xEqrz88ptSjFE9",
  "key14": "4y4Jz3S693dj3YWn6sKQr6vE8DUX6Lu1Q4GyGHb8J75pWbYMPjmwMuix3xp2noZ3Wkg2Kk7a1Bhq6iyhuECh8H15",
  "key15": "5tdv8yCAg8vfgVmZN8QNNpBLG1h9v99R9bGU7M88QTsH3j7D1W5c8NFiromXXmNW1eBzUUAnDk82UfUi8SUTYNGb",
  "key16": "3avcM4dUctVC2ChYR9WMbhLkYGm2QSW3cH42uoX1bLLBM8vKhDCh3fCisNpbpwmfNcvdjwfg979T23289fon28ij",
  "key17": "22K2ZhB8xKdevEZyf7rzSZ5gt3WaeQRQm2ZdnJ7rQ2ik6Z828r5ud2HHU1TxobeBVgPZTbYrDPgPBgAyW3fdidWm",
  "key18": "5GHSePEP45zkdDFdf47mTq1N5fbdT5tg3gJ18iuGZcsQrghHNhLDe2kcxvBA9keC5E8pKf793QAKMrWeBDzx1znT",
  "key19": "4wSwyVXNZBVrrYUJuTQ6uhHe7nsct7vXqFPKxD6frRQviMJZDMAMuCNAFHwjLNrreMB7xvUFBbXERP8Z4oFhQsgB",
  "key20": "4tUcejv6RcYL55vHBzYUH9QiWsqge5WVukiJAtGNjwckNdBQR6vJhun4gCWueW4NwtXLeXxuD5MdU1dLyt3zBf78",
  "key21": "iH67BAGFjWqA8snt2gSqviJmbCcgDqosccm6qgmzSKuJs2PunNTTPEzKZGHXcx5cMmiX4wucQcS8itovC6QxSwX",
  "key22": "3YxV4NsbB835DQA99ymrU6xRhPgWZpnZJRmaFGd4t9mJySfEXoBd9W5L38PiACQDYGCLxFat9pyHB5hSLWYoDLRb",
  "key23": "5ArUhBhMhqAapsHiHTFPLE6hm6TuY5jSxPH4M4sU2B89KgLwR6Co6n55iXgY8xV3pQ1m4okoLUT6fKhQujhobqBA",
  "key24": "5y5vpnrqEvP5UouNgJQ67FZqoweNJa15FV7ET3jSLLCitt3WHoDkAufn3KPzhzpe1u2kyq5XLnHXL563YJsK1BBf",
  "key25": "2HsXoMwPB9efDRZwYDxCf4ccnuT2GCptHqAWsNofpr14ENHdHdvo9XURt1RGpwTUUJKvpcVtXZueUMJcscmVCNvm",
  "key26": "2MoNiw2mdHDsaJMLaZ4gxiwmMDy35YKMVxm7iZ5MwCRqGko3KzEEewpen2Jwp7z25YCcKjEZEeTN5Fz1rHNp2dr1",
  "key27": "2qPZpzEi2VfiJydYsZnMSZ28n6MWYRgPfpqX7xPtimTBRpB5dDsccxdAycSrRjNwTFAyTMEcm5msuf6VCEV548dK",
  "key28": "Uxw5NpsYKrJrSDCkxm7wX2zujKdKD3dzpf4AivgiDayXqDsKxUfRrWEjD3tGHnrBmhcXr2yEQA6g5q3mGda2pTh",
  "key29": "shu1NEzuSiu9fdFNMawKx4ygq8rEBHemd3E9weuyAte77ZQqFiMmyW1j9KGLWZLdQoouEDZdppa884V2fDaE7z3",
  "key30": "5M2fkrFmzmcdSK4e7VkTLAC4aAdJUjyUsiBvUCwByMbZy79kTnxDpdSNp8MXmxG831GWqG4vGJDTqhuY6FUKWzpC",
  "key31": "4udQxALAw7wVUAEdrYTHcguJtMthu5whogq8Atnb6wF1EsDbgJZyfRXBjdvq8c5e3RANit1LuvBRNppwuumpLPmk",
  "key32": "5iaGWVJsgwWSfvqym5FfChFWfTUmajd13ogNV87VhUrPLoQKEuAhYT4Q5wnYbmg9PDxuCgziqC7bcuDV7D9TepQP",
  "key33": "2pkHMjMzryRLh1muN3LQje7o1ibyfYRMM2eVN5TRFBtLXof1Zb6NZDgav1VLg49HjFWJuMu5peXFsCwzLjmbrbxF",
  "key34": "MvStwve1xaUQkTntQHT4wKACGubZe7wkGkE6LwaDY8M4KkCaSHA8S87mNu9W3Vj5GDqqayLUFSkcwQsxXHq5Ynz",
  "key35": "2H11W6iXSJjjSiRPXCaaVgmxtkPDPkHmnaEDPLrWmCsUQd2djsyS456XE4PtbyYDrZW5c67mitm6v4XqDXyeRE7t",
  "key36": "5Nw5VdEnhQifHGvGuNLY5wqNwSghfdphm6Jr34tzqd521WyDpvTTH2vZ4jMZGeQsYwg4FeWmRiwpYi8PwG2cbgrz",
  "key37": "2PfsZK8YVSNd4LHHSMmUjjwLpfgDyDrJyEVw7a3TRv1egMdcAzh8mmAm5ratbcocDoFdM6PJG8hbXbzGxfcEC8s3",
  "key38": "4guCQ6LHVcq186GBfg3gXbFefzvKvBwQSCNceC4Xb8CT3yFVu2KG4EgV2iEYLkER1LJnxdwSxpQ3ZRW3pDhbGXAN",
  "key39": "5VBo8zoacQbqJub3KkrXW9gwKh8Jf74t3H9MdAScixz98yrMEgDpHP8y6xVmapWHXBn8UcNZ1ZYrENpYGRh79rLX",
  "key40": "5LsLtnsp5BvcoRmwVMthAEP3n3vhWSr6jDcGsDoWknyBpirVjPmXww9crMLkovw96oQudVGM8WF3Pf2vF8LFiufW"
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
