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
    "qwcCLUp3cK8P36Yqz82TeykLC1q2emMb4tZdeELqHny3UdFhhmeYtWD2fLRXNNB1v8sRUrDm9jiMHWjxTECFcqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGoGkKj6v3ozkfz9gdbngfGSWo9h1gohRjT7d1R3JunFD7kUbhuZSUyFcMWgoFsvRq7eAtGB3jzsRVekUuM8w8P",
  "key1": "7Ywi5DTjGjZEH32ixN85LFHTftoyUBu71iKFLhR89U6bBuU6UaJ8nUSvLyFgp3xmTBLYGUuCddVRFp2DnPkzQYQ",
  "key2": "2YaRjbGETwcqR8rPM42ihKcUDogSuFjQd4UauNipM6bDdHh31gNmdfUtf6RJfxSaNbECRogSL4RbVQuzUcmkZx9v",
  "key3": "3yiVDUEgJBSQyMuy35GFZpBdz3hHYrEUw5n6Upy7qjPJS3UvrBeHnAvx6bdR3PnFtvjNKJYFJNq4gtzuUPhytgV9",
  "key4": "2ehZRF7xDdNAS4iCLeJRfXmzqCG4dMi84W5jTRr6btzCRfaMvKsHB2CCJGQyF3PJ2hqsa8hvJSkK6pT74Wt9aXq3",
  "key5": "3gzPNAxoKPaxGqMZjhCru74ptBjzGUhZWC1VRyXzYaPTQ9aXQBjJW7ybSM7RdpPiNTxJbNtWXuff8txDD8Yguwbe",
  "key6": "47riPgVnWjTxbvYpU7DR7aVb61eQnLxsp3zT7W9hpqULwqovtqMynRL1UeGCaE6yqdG7mfN3jHGd6sKCHZrHS96A",
  "key7": "NqEfSRXZkceDA3y7Sgvvecif5itg4eCXtVYmTBvFSrkZN5vktktRd9zEyXeGgUXQ1YfwJ7Utsy5Zwmi1mRi5mmZ",
  "key8": "5hzv6UcTk3K73YXcTJPDwVo8HzLp3xM5VK7ZFaceXSXLooFukmnXHuwTjdagHHsPJfkZ5QKiKKDczKdYVYq4qPCU",
  "key9": "5jF8ua7hMWC8E9kDiynnZ77J5FYn4usUsEdFZZhavnc7L1RvZGxra96zbr5h1pLwPEq3EsZXfRVsmdvjb5cbSBDt",
  "key10": "3rEs54tAXgwsRSmaJybJGbBdv1mwcpoig6XeiK6LKxwSqUZK66vARqN1oxQdtd2AgCxcL4Xe2XJB66LQtdL951ac",
  "key11": "5yEApaa9GRzjGvrBgYyKkPQNJ3BJqkLuXhUJ4Bcj2WvfqMUc4p8w1dpY5HXZV1Lzoz8BCa7iuuggbD4uNbMDfcrL",
  "key12": "23yDVz6ND6FcVavdyoac8mmMqhLUoZWQTTSfCvy9ZA2g6rBNdQoKqx7m6sj7fS5gXQJPd9J9xTsgMy9uk34b4heY",
  "key13": "44eZqCbekkRm8EQU9P5z4der4MoC4QgYpGKHGGy6V4gvtM5CpxpvhefgSE8anmy16dx8SJhYEPkmCUV7k9HsZV4V",
  "key14": "bmmzGN2JbzwavVY4sNpwWetUGQuLvEscoCRpjWryuzQmacKEmTFWfWyUnCRY8jo7h3NUqzCxCfV4rhXHpQ3T4SR",
  "key15": "2uhJzuu7f2NS4am7chKTdMFR98s2PaJC5jg8cX19bTsTwV17w1aSb1u6JPuEqC15Q6e4MQPzYFU6hPoPZ8MLzmu5",
  "key16": "45egWkLZWJFcRn6d8EMTaEKXKHYiotDcyVBq9mKKhevjpo33faRV8tG6SXqVo7DTKEjMoyPVLykpr5hy9HQNXoTw",
  "key17": "ZD5HrCfF8kv1AByLERpVbbP3Lnz6qpQWLrmnM3vpfaPhCgK6Em4K1AWmeUgMMSouwrhW5hZppU3iaCz37VKDdLC",
  "key18": "3Fv1NeHCPYWYB8N7H36daS49vM1nW2JXtrVd3a47u8FrUKrNR9PjUvVGzdMt8WUBNqqkxsSSQrku6wd8j7amwU6Z",
  "key19": "uzP3xuGRnnipeeUEPjPTkubUQE18wB9ircX3e6jQjJq6uhAKXo6sgdhf1XPvkxDDWwgSaYjhxWvu2p8eYQWVbSq",
  "key20": "5Dufo1iSZ1D5wy4WtRk7J1Hi4BPCQErRqwx6EtQbi8m6Q7wAmqZaQxnGVVCTYY7jPnL2Q4X1RaMFYZEmQgiMxf8v",
  "key21": "3hVZu4AEaQPcEcz6xHKMZAJ3gHDk57dHrnm2yJRLo5vwM92Dsthc3KAZGDf4jbqyWHueuno6JanVVn3J9Pvo61Fa",
  "key22": "NcWLSuBFugnR53FWJJGZKPN7iVBKfkRn1K2ZeeGXtWKWhCHgz6o9W1ugvvFgpixbswKEZ79eMYf5pMWSNuNTJNN",
  "key23": "2zoLJDUBifLB91m2XbqyJnpRpAxXTXJmkrrXiJHRWJkgWDaRTJohmuGFSnLt9ZdH1SNEBCf5qSRoDP4hvmEnwmFs",
  "key24": "39WvhMfRdx3zjCwVfT264JcWwA9n3rdvSFf5FVjazEd4qY5bzzks8QhS2i9HBPcjGKwWmvjkCmgMvWTLbYRjrLcK",
  "key25": "3BjkapusmFArB89hU6esYBm5QWQ9xcff7nFwHnCdpCWXwgSrYVNaXERBtQ9WVHPrNc72MFAoeFDRrtBxNrEJuAuu",
  "key26": "8bCbFpnEgmz6giXzVZNuPdpgpotaSHTr3v5PoZHPaoXi7N9wvn8r3BZBmREKSKx7bK97uGxpzo2o6Pw1JySZSwf",
  "key27": "k8mcocSkAKxhjp11ReChtSEUE9PHsgnudqDxrD4q3dxnVwZfz5WmNrsWpKj1CTCQiGh4Ls71A4qPUsG3ZJjwRPs",
  "key28": "4M2EQfqS8umfFYrt2oCXhwuVwuJtYWg5hLuDujYXcyKGAixaEMuaNe5yByNjtszxbPt3ZWoQW92pxQc9YNRUGhgi",
  "key29": "B11YDj9iVMLDFaUq9fKmHAKwwnCtQwVJnxJnA58MRZNeyyqXknmsaRo6fSXrE7haYW4hPnLWHAL1AnioURyxdPk",
  "key30": "2rTd7m7dwcbSRUo8U3RnRiQBCWxirripBavtacWUCV88EvFkRH83ezyrbqHLGU6wNRNetWfLNCCPQUnTkRYcFqsw",
  "key31": "37DhDjapnh3PhWLPa55igKziCB46Y61RapxFMiEqXRX2TqACKxovWwZPJSPnXHPpJgQJjYpzYjiczB8QQzmjWB1s",
  "key32": "3nmXqLddjJ91Fir1EpBVvN4vH16SXkW2dBtxutdDgURkhiE9tvp8yXXyV79ZXLZ64SDQkbjkYCgBHkut9LFPyznX",
  "key33": "2SM83R13yqQz2Pabt2rmVzN9K7vwssp5QPtHxb2VUjqvWpAQzqEjGSWSLHP9GzzE2JQwCEn5qdaX6aEFZvCzdu5A",
  "key34": "2Kfnhk7oz8GQCp2QAZg4LF1D5mgZBzcunNuYK1vPRzaYEzUMFoFc7j2s22XV59f7wY6ZXJKeeh6BjrHe2QpG1VHc",
  "key35": "1jbKYZGMEJBBGv4DG2uXKkUyC5GRCUkUM6ZhicRmsQfWdkn7efihGn2M96NW7kjxNvCSXRC59h6y83KRPhYXar6",
  "key36": "3qvW44eyyyrR5aPiD8f87KFAvqkF4ZmyRTcF1qveD2AWeiJPcogk11WeF4DJCfJ8hNGQ4zuEqjcaHTdbfmdpLPwK",
  "key37": "3t2GfNi3FjDwfY3aYJTBwtkUUrcgTRUzu5X7aXUivk8JF8XTnoeurwGqvfnuNRcFquCfGip1Ux1283iwAgs5Gtq8",
  "key38": "2kWxS1GSX4Ed7fcaTfeY83MWpCcgFxVbfwgqWFBycPskaSqUbWVisdJLrq1d9a7HDkZgbhsonp5qiMco9pnqMLDc",
  "key39": "4N6XMFRUPSv7gzV9KPSS4WHFiZM8QrcEgKCtV5oHyqAaEGmtMXPLdrNjU1EavpuPoxL6x6N5uHnnXDn4DK5rVjBC",
  "key40": "SEhLqvMBKm3UY49qouvcrzvH78kGYXnTneoWkZfm4kUeMGbdPbEwVF4kekBaksBhUSHSCUkc3eWUEdBV62t1QZz",
  "key41": "62X8m3LFfTGFqzxc8bSu1d8RUFzgTrmWqzF2R9NjZBpSQQzbmLLUHpUwEh4JyxnvnjEt168K7FUASwfDkd77oPHY",
  "key42": "5FWhwUTeYj4vfZ2YBDENrb67BQ17Zi43pkYPrfYWGYYzSfArwVsqB4eVQYXCn6kKvaqG1X52aY5bPpVJH2BWdCna"
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
