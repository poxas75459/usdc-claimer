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
    "5PsP6ebDTyyGn8whK36MXLLwmmt23b3uA6yQiLZZvgS11BCNrCha82XK5wtAV9xudz7daEvZTg9EpoeupYcJAStQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqAG1YtCE2Ttcq5cGnnfSFb1pqTxWBzK6j1NkBu6aefNfu6V6rqyc9aq15bzBGYaCSmha3yMfzzDzGpBCajWqrR",
  "key1": "z99dJhV4M6rwPzWT4uD6tmUnAcpt5NzciyMoNT7iEDHKK736zRGe1jvonaEF2ZyAv3XrknSMes66CpbridPNfDC",
  "key2": "5k8ZX75B2kbSCFd9nGLY8wNK5rLdXCZ9vvjMZtNy4MHiCd399JAeuoQXmz6qefdE98vGZUxnEXPQ27UwR2fbRMLC",
  "key3": "5WyuQuZSwZGvTJhh7YdhdQGfgUjXm3gsVCobrri5MM3PnMrqzNR2eJG9mqjgTN5mLYrFmV8bDGvnRmzTrwdkRkh2",
  "key4": "59QroemgZRNs7TB6eU8J8dx1DXiBDrR4ovjLfQkqwqDNWP6NyYQQSjCQQu9RnD4BTmmhLSi1QJVyUwCfvGJ57sec",
  "key5": "YxVvFJnSLP7hbLhnbhT16nuL6c4JCmWe8wGp6yMoJxCoJhEShK8Gr43nRvr2FfKaiYRtxJsfknjsC5ZsomhFeYx",
  "key6": "5wm5CmyWV6K6SkKA4WVssqwUcyaUiokmfz9s2sAt7NBhwJXxzYjRc4VmKuXLdmg9rcuY3vYBxxGqY92QFGQ1wT2a",
  "key7": "2F4VTr3QFMvwD8cosYwmfCaeCR9VpYP2hJNzbnqFu5y7bQENHS9WSH7yNCbMvMF3oxw9eeRs5ojVrqDLEXwXpMvv",
  "key8": "4GhMdwPP2NPv9BEWRnbCPQm26RT6d65ciMHVSRzGfNkvff1AYgDu4wsECNEW9RR7aip9XAuP2Fhi8jYVGMa5kYQu",
  "key9": "56JEex8NnpuvypwNkbEFt2Vrkxwo8LCmWbLeb3Z5MzGnAffyYhjdVWsU6W4c9uMhTrbkGEa3dSFpEe4pgFXU2bFM",
  "key10": "24UZoCu15mu5aFZZhc45gZ6sS2mJk9sxHo9xUkEf5VohSx39rd9MccWHwvfUbXm9mJNrxNd8kmTz6Tudm75e6wiB",
  "key11": "2akcMAntNdNd7rgcKrQ1zNkCBYZ7tf2BugEsf5BHHDX7yE9XyUpZtiWb6g3wCtgEZ4nQ6WjUJCsHpLPuqAD1Po4q",
  "key12": "2g8rcCUqXvaf4xpH7sihKfSU9GN6kumPu8JHdKn2gx7QzwD9b31hM5CFzoHnVRmbqMp1axYqoFEh1gB8GcysA7TE",
  "key13": "3QgMitTmpqrJVLtePdybP2M7RYDGLE1SmvryewEYd4gjTo17CTMxYDmWoABrBGQEyY9WpFj4R9PfCAZxweha7758",
  "key14": "42qNr7Dsrz77ULHSd7Sf4UfMY5Sykxzr3c5w9W48n4xuZxvZgbXASkB4xgABa4PiLdPvraQ3HjM154xNd9tbduhc",
  "key15": "5bAQ2FsgzmGSPMZYShH5Pz188wWYtw4BfboS2g327X8YHW2fBpwpMm65DvJvV9vUxgcD366wNtScEUHLjyWHNTzv",
  "key16": "3YFaCYWHFRr8SU1mRNWyMcj6aHKYsXWoKBRpPZksn7Zodq2WD9KrMJWnhJt4VH7jXPCsZT9iVum637MhVzFcZfTc",
  "key17": "5PQRULKYp7chKThXYnq9TMMNQ1iXexhThBdvk48he7CVPpDkwECW9RRa4gs9cTTiQnZRbzHnDcizWAbna3QvE3BD",
  "key18": "yPnbjQSxVJNn5UNnjcVeUyKUmFdiF2BdRSbTw1wMVzG8TxRic5vka3PQZEf3w7edqhZktYzy4ZZ5ba8av64ekLr",
  "key19": "4PyU8rJe7zSXiHpvFQouGMYegxae6dErvFVeSb5N4eEQWVHrf8B5r1j8DsycKaqv9nHTSbTCxHwGVsLfzmAnaEcc",
  "key20": "4t3VHQrQfXJCXayQGud7uxDB3S4RWJ4phgQPtAN35zpPZLEm6GizetnQVBRBaqfcz5vhuMcvDCJGgo7KPLi9pPYe",
  "key21": "2sm2xcdCL6BNkknf4gmbBrZyyASbDb4gYevxKBe6ytbvScbLi49UrbZkzsvRYtPVwLAhvT8vQRt2FDsP3aCFXtoY",
  "key22": "rd3vASrv3QmWr7LVffrifskNZu6DHDSC3oL5yMXc9iGqRTFi8M51uk1XZebBBm5DNFSJ1eig9cckXZnoaTc8mR6",
  "key23": "qfprrkWtbLMDRFeg8Prr2Jmp8HsoaTxHCxVw9rhfPQu7Xr5kCzCmKq8DYHMXomxjqGKxeqWRARo6hFr3M2EfPjf",
  "key24": "2MwnK4daTb3imkmkhEvrU8zczsagHqd9bYMs3r2ZGEca3qmWFtjP2oE1T82gRqGs6EhSghLk7MxXGiPVvAEa3LFy",
  "key25": "2kmkCwaskmsRWm3wabz3VoeQkUiFM1eS7ARGLcaeAfVfaZJpPCddJnf915yVhX3xhVsQXjVfAvg8Ympca29VD3th",
  "key26": "41xjHUS1nCQNMKLEmzckbRheXpwCkqLfxFujJdryT62S95h1oLKfuZUkkukjbwognQvyvqCRHn5fr4EZof6oJVXs",
  "key27": "3jL2CsPdFTUdirZbcoNMcDnMNsXaLumy65kvMha1Waxkx271nRZo6JYK2GzN3pBWGMkwsiMNp6sQcchGX4vLgzX",
  "key28": "4QBcqDZtejL5eP3guAsRGnUn3KwCNpw4CjVR9Bchjx4vN2iYwrQ1TGVJgDVono68qrAQYmtcxJsYU7jMDLovbxNR",
  "key29": "bvsD3cPt4YTCDpsHodQtV1FBc8DdwRap3gphku2dRkXv58LQnh1t4yBXw6q4adMJQv5AkUUa9qTBixmEf71yzEj",
  "key30": "3y4qxaG14Ee48vcUkxgcwt4jtRiQbudubHJTgdqn7kQJD9VZvntk8XA4GBiGEtJPqzvgnwtYxdtd2VPjU8Jta2yk",
  "key31": "7i9A76jp4tKBMWqawW3yZ2ZgHo6E3EvGT9bjx1UZrmME43EiEova4Wy3EXSH36D9kNV63mEb8QpXnk1kfhM6H8y",
  "key32": "38x3v43koGRpUFL42pEsArNhFC2diWTfaaHnX7TKSsv7dBK3rywsoCBpar8mptev79WZMJYgGqzbyhQo8W7XfELJ",
  "key33": "3JqS8JXJSmsbfUtCXydNzw86kz3EmBhwimKDcuLTQV6g9eXH1eaL3YAWrHKSHmxed4rH4KR22d5nrG4QX5eybkgk",
  "key34": "4jZk6CpMcMsepaTbnT8i97KUMD9hFXSHpPEyFK27SkvjQWCbHnSeuw7pTzr8BkyJBfBgiTgnTbpjBXourUUCPHiC",
  "key35": "rtD9bsQxLayYpFTxjAzsTXbkiuV3QPUUR1soUVdZNmG1UtKyGQgNGYNxpuDGTwu7nJdMTgU8yrrw1uVNTQga59h"
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
