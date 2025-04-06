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
    "5FP7ZLGGjKKMidZrSeGU6Adc22fqJmzjJDy8Bsnxt84SqFWaG8ziJbfXogznvSkNhj1yZfteAAAqem7NeAeK3kT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYsLLDpvXFj3ebdfy7ceSMuA9CY2zMhdawCxmeW76uEcRWJSXeBwFcmkkAwH8XEkCsKooK6s2o9JUci6ZEBGjCg",
  "key1": "BrjjU8T67suS8DNd888i7QNVzBNCLWGvcC69beoE5CdDaWBY5L49iR3969E7FWumbiceTnR2hE923ex1XAwADvm",
  "key2": "4BurVA5Fq5FtMYvv5UPv35PG3TPr32tC2Vij11p3ZgMd2zEe4mYfThmuB29o9JNHuyZCZnwrNvK3zP5BiHwNRzPM",
  "key3": "BTLNYtTSyvqTSY2cJURqr213NLCK28tM1JmrJh4YkzQUqsJj9DmkG6f9VgVmEuKMFgyEawErArjDf3AkotJ6bot",
  "key4": "s9QfkUhfoyucxL98XmrJr49jtoggsqGrNBSfHx8uE3EX1Uw1xdeMEP27YYVUWochftfGpGi1RZYjdarGog64xNk",
  "key5": "3ZMkyY2d7dbtELPRccgDHUJbuuTVEiizpv2ovAq8pqYVNkdDHNr2rutGwfdNQNmDhy5hQYp31SdXTkTpVPeKjwpk",
  "key6": "4G4MLGQRF52uXokbiQcQ75PxbT9QFyst7dLD5kNAuv3GsZ3AJmN6tvUTjgwWmsvt3ctQ7s5QFgJYEvVEebxg1xUn",
  "key7": "2qsG86xM4XDSaZXVqEkKtkFUTwhB3KkEummCD3KxEV8sGTqnkt8aEnbnBCoaJhsNnVqabNL3hPADTvWvkAhYHof3",
  "key8": "sV6agHwK7MKMNcHte5aNrXsn1rQAuBoPoKDAhF4KtZ8M26iwoe6rDwZL3EChjHyZ96mvaXULfemUVPw1aqa23fS",
  "key9": "AVEpu1k9GRxPjLDTYQWT9duTbvMjFa5oSdJGGQbmbWjhV4wQteJCatzn5pafonjA7yD77rvS4HnVYEhbXE53rbu",
  "key10": "26Bs3KhiL19mPaH2TBm7xSG1RBrHwTezVDounpdQWHWCwnA8ptPZ1pqWS4CCvUVNTACydgvuz79f7uM7ara4oaSW",
  "key11": "3BHXbwNrWeaD1mHxUfXayoTZEwgqpDeXMcUfBeT7SQkmEz4X2LDkqNhn33iGiwTMwTCJfoR6gzNZ9HjJ26mBNsbq",
  "key12": "2Rvbjx5vsXwDjwxLEbEYRpvL5roXfdnwsmxQMkW3xZvUpAhuVNyAspADJDpXERgxNC6QyTrHcAFwyypKy9M4d3nu",
  "key13": "TFTeWdXyEmVhufkMYZVHms2k5grDbjmcJQAKVxwNZUf3Ur15V6rD6KWbSELTMQitGAfJFNuXLcE7r7bAgAA5n9Z",
  "key14": "Chp1MndF9VwXDD2HCY8px8NiKxXPvDJvYxfmmso152KTfmjYEozbTJVQRSKX4t7YQRqjD6WPPWgcoXfVEQ4Sc4E",
  "key15": "fBruBcjpjnQ2SztvkkXzG3vqo7qke4j9FuFFUmAd4wSwWHs6Nb6eHjKnKDk3RaQ8sbaMVevwgWjtcK7XXnyMrR5",
  "key16": "5Ga9uSZoELAenJUnG28NreqUuSxNRXZyodUsvi1vVi5UcPjN1ugpbPRRxggc1xenmZzRzV3AsWzE7vZq21dHHLWe",
  "key17": "bb4gfDAcmhmEahNG9ZztKTcWaMB3NWw1yhG5uVSxhrCNPSUKLLmFuNb2o7cyNrfQdF1yDAJesaeL47Bcjkd1m8Y",
  "key18": "4eLsbLqf7uaUjbKGCw2dqGxHCD5GKUoRTFiHpsHW6GuahWmTPWbcZXRSq8fxLMvso8aFFn87wrRNsNmirmtmCP9H",
  "key19": "4UT95RCLqwyrwGRpF3RhYaVXzZjEM9wsyQoaD124evAgugu2WqJXyo7Rs2NRD9VqfkCGAi6zSHRfrLK2AJm1WtZq",
  "key20": "5BomMeRSDsvee1a72jEb9Ej8CT7otsnbBuBz3fYEqDn6mLJzE6i4M8r5XApL8fRpCR69EhVkeB6HMxj1ck7VPYZy",
  "key21": "4d7TF9t8JvnmSFWk2jpEL9kT7tpU2J4kShvmZYxCDLHBEiUGhnNRqL3HB74d7uioUqqAVemPFD1MEZPJfEvqUtAZ",
  "key22": "f1v3hS1KPu9NbRAuLvYJZckEtNGYAS12mi6iK7TtkhprHPZXayMhtHZ9SSDGx7wcQHeaBNXjLoCnAHD5N2ZxzdE",
  "key23": "623EtmXuATZtVb5ue3qEkCuU6njpFbkej4jWLSFmMzAVcPN5U6s7Fmzf3Sz8vFxB79L7nz5bmvtpAB2tShXZAg6S",
  "key24": "39wEomAqNHDkP2yEUVty5XHW6z16GhnAX2bfMgkCVTWDHoRLydbs7MNweFSRjhMnVLrPcuUR8guCLsPnbminLBYA",
  "key25": "2Vimmhraq1KEjniZAhSSdnPDEtKfrLt2UWWTLCgTsjj4BCyjPf3PKSx4VsuGHyyzjtTQX7a2gRFqCXNX9NqdZcTv",
  "key26": "5RgeMptockHCJ43CbD5qiKJFtyfQCof5KVKTMmgLAud3fyqMYn2nj2AvtpQku9QG7LFm4bd7c5dND6gN5c5yhfto",
  "key27": "5LZKkKed7SyZqWVR4x1jrvCmx58UeEmBy9pf5CFSAy2e1C8w7DvoRiUdgc2K2ZDTPmNhjwmUJ87NW1f5GEBFP91z",
  "key28": "2xuMBnEv3gXyLrhBuoKenxdcC2D6QF2JtRqXhbpwPzXPjq1wMeMnVtTqMBPvJRZFtS1pJEGtTHrj3uu74av2cK1Y",
  "key29": "59eMWShn7d3AjyLAGx2WubTqSDn3pmFm62UUeMBZH3ncrCGinWVtEeVzdMjk5Niydhk2qjL9U1UhWpKFYDgA1NJq",
  "key30": "AP3KarMe4oPPkbwwnFjYu4VNvEQsUqfaRRjBSWbMkiAF1qPn9YuND9PaPyUoq159YNEStQYvDEoncn12FrFindx",
  "key31": "4tUZYBMjqxQSmQc9jqoyrUDHSiQQg9bCsXmcddM69hNLuHqDgzBibVkFpBTgdBSUjj84JEeUGZJ4CucwFh6P8GAq",
  "key32": "4zoY4n5RmtYKmEtmfFRzHb6jsnAcA28z5EuBi12T5zQC4rEMwSRavUqoGnQDGMxE7NaNyDZiGFrijbCFzFNBCGoG",
  "key33": "bTY2MC614DPuYoQ9mj9mpXwRGJ9wmvn9Jd4Vc8NsL4Dj2yk2MSdGKuRvn7ym7pwa9DnpA2iD5x6J3cPZJ87Dv3Q",
  "key34": "4KYo5i2ZibBzccPc4gW5A64HvmV8rPv4Zde64qF2LQAbr4C6UGJhLD2L6wikqzxNQRwM2vrFgnd3D7LsNgNbGbL3",
  "key35": "p7qEe1gQ8f188RAcFZMTy4XGrzWXCvRupN4fmKKi9B281outbwHRSN4FD8F2o7Qn9GvBtpZLT9GMuBgWv1QVcxL",
  "key36": "4AnrSfpStqvSq6fpMRp6TKognQB78YaUBwHUAq5aksLVQfvfMw44rbEqTXevHi5w2x5if25ucw15MH6btvQAyRtX",
  "key37": "5PPrPtAhhpDr9VHDWAgudayruHtC4s8VfgVwZ8oxo4ZX43TBaS5aYdtVN5hQ3cGiGHui7s9eiF3ao4XtcFNgGtJB",
  "key38": "35v6sovJLebZhksrrRjrAdQEWUuLfSaqRDcezToGv2rNVaTGgptym3VD5oDNMnLZAz7E9rXPzv7wjLCGqzornGwh",
  "key39": "mfPCY6j9hh2X6izmHCvoH9gzz3BFaC2mv4MGr1KGhYkxzuRFkurkwuRB4mqcdGKfJXTp3tUGHxKkhiAN73fzGiQ",
  "key40": "2peWxe2J6QMGbT9fJdf4UQmrtzrGE36i2XDxPZGrfgUyQ8UhgdNY5xCV2hA9nCxguTokSzAf8R4Dwnf7XyVKqwDK",
  "key41": "2Aa416zfVQpfRvx6emQJNtFUpGe1i1k91UrFsUDwyBf7ZyfZabWSZDHxEeyZcVSaTjVnQQ4E1mz9JzkJgZNFuaj8",
  "key42": "5g4D3pFpMajrE2X1EsCBZhAss1ysEdMvyTXLbZBdTL1M7WNpU1eR19i3YsTh2GEH2uHV4VFHdnkYVtKYPYCNN681",
  "key43": "2kcnWgSsgMoA6PxRuibjESmhPpmrqUwNRctiryyvFjoJ2PmxWvcLf8cDkK8ckTcbCfW9SJK6cAHJZEGQpprTAy9Q",
  "key44": "3hWmC2KaVC6EK135EmsTZkAdyca9Wgtey7SKrkmiedCXL2G9kyLPu1H8mtUxTJR8TTfqZYg1n9Kgz5Xfbfh12VCk",
  "key45": "3bDPWnfhbFBx8SHuggoirLGkpfrEDjx77dAEwr4GwW1nBvKR7NK9G27MS1NPyfv65Jy1yUgmzmKuQrkeffe8UZfH",
  "key46": "647yfrBd1mBZK4PoaKPmbg1zUgfJ6QDshWENwKSN6SLP2E84QmjMLHspACEjQe3xXi5uBVFQnUwdm6DB2emwht2y",
  "key47": "3Z1eurbpquGhUuMyeeVKKrRCrLeWEnzi5xWUjo5efXt75LEsEVY5Uu3he2BGTJY3BUreVVnUcpxCXNaKiZBjAaiB"
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
