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
    "TVE9obpn6BargaD6JEmThTgFVoE2N3DcQMQCXay9ECif91b6XNShhEULifkWfve6PAmVceW1VJEQTxQqzRnfeJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRWQbBnBrWQS1w1bTrVNbP3ao15yziPEQsc7nAG15BSyanEx8WJ9WxU8caDBZ5D7NEy8WjhpemnjESVqhcazZWJ",
  "key1": "5UQKtiB6Y4bv3uJtiGUvHPF2McmgJDnyBggFHfgSFhZDs8zcvVvP6Xs5CSBcNHRLjnxbwtp3eiqATQMQSveDwrKo",
  "key2": "2Uj3zSzNkDnxUQRovLSNG56yMqQSE5xKvwgmphwUFw4dgR6s1vnnCizw5KGJ53WGRjeD4ASxUfM7ZA7Tza9iQWdr",
  "key3": "reehkib5bTJCC1Fm7mqeMbuK9ocPnYUAc3u2S7WjA71VYcvES73M36TEj1gt46sMjBAg8MkDHsLpQ55pRHNsRjc",
  "key4": "4e1efwrEticWt8ac6w4QaKEw2Zm56SArpZw2UFJ5u9qyxtEee4EDyRuPAoxeDH828mRB55D7711LaZ566Pgti944",
  "key5": "3drYCxCH2y1XG8cE3SvzGYuBmRCYfPQ9B3JrhRzEaYbpUKvArvAaYNzAvckQ7V5xio456LWXxdMnRt79mdTXkSST",
  "key6": "5q6TZMsq3B4X5crYVBfEfhuj16EhqXmnyFWwAh6BRvockvMDrbsX4e6mx5x4L6c6PH4HeuyfEpLto7B4n25Nddu",
  "key7": "4YdT1nSLifzA8SGDX2QtBp6dT7uWyU7WCM2STzm5uxPTUqKDFfNyNih87kz6zYytQZNU7KewoLNxV7LCRxDKCisi",
  "key8": "4BzaUTcWXymFbWJkXVvZ3RVUwxD5Q2rSQ3HYSQozWqL6YL7A4R6mSRvvQWpvgYUH7Su3qQSjLYBrg8GF4ncwctor",
  "key9": "2hDSinEqRfwsfn7ZLDidHKk9yUw9ZZWM2SzBjigmPEr2UsXjYDvpunoZed2eknkD9TX3BZ93bCPDFzDgtih1LBTh",
  "key10": "3P5TbTb1xDPJa7k742PpqbXxzT8argSZNevKReRsN8jWuK23HiarkTrwunjnA3QHWFZiR21LdtkDAym2bXfBMtii",
  "key11": "3QXAVfrzRCNthhARnXo5gpmKt1Riab2qDG79Qw1ZkeimPQKf8NnC6PeQPBHSXQESAEfsqpmP4fNMdmcDyS4avMz3",
  "key12": "QHupYf7669wTCkiKPYDGuFv8HvaxS1vRS4qrVJ4w3u1SgCkf1E88ZqL8WMQVPgkerXoxG8A9Jp5RWW7kxU7UuFQ",
  "key13": "7YCFZxbUVR42GcEs8kXeuGi2mKgbxZeAYyinfPanTShM1CctBLwnufNHan7e81c17P7DHX58Q5QgKzQbiEZyTYP",
  "key14": "5Sd2D3nm1zNTu9yQuR7NMgYCdbs2MWn4betq7xx3ZZzGaqwMMkT4dtg6zHXCuA3JJ6vAZoGGwdpMSvKRqX7CQLjW",
  "key15": "63JEKeDbLdLBjpuGC3Sn42gCBBecvk38kCxtHGnTG9MpoSirP4tESbRK83UhRU1VWxyJCvhiShEftsgvPhtoQD6W",
  "key16": "3K2nAhm1LhqxF1tQZRaRPGJLwEzMS2BnjGuWjL2cvHQvo28sL1Qitv7375QWpr8vCrXdVF7xceHo7mKBRbPwbJaR",
  "key17": "46ywTT8tAFrjU3V19jsaL5KGe1CfuRyBikwD8LqeEibz8GWtAP8eg65VcrDKETjoptMR73RerSzYWS7KttcKAhZX",
  "key18": "4TZQ3RkCetBYMPEu7rEwudLX47YqNoJamqUH7Auhmpgg3wmPeUjKLG2dDqHZUmgY7dsNGf9yaSixpJbwYusbi19d",
  "key19": "x6A8AtKNbQ6XRTEHDSVxDsb56DZRzXGJCcsnagoKn5ka1tHQQDRKjHZPAVxmUHtBzhZrFg87A7ce2AZGhHFVwiZ",
  "key20": "3R4YJf8cDmsTtZBzV41TVjBXyTNzyUYYfEGnGxpx6qs5QqceQy9yvdvkDHkjLnQA6QTauP4T9BgBVQseBCLBtcfJ",
  "key21": "5MzkxFs1TJ1KGurMMwzWY1cEu83CMG8QmUM3Fq2rQMERPsUHnnaFSDpY8zxmQsjX2S7ZKihLZqtoPdb44PS5fCQy",
  "key22": "4YNPe1WyTtPVVaWwdaQyo61vJtUFTo4pisumD7jLvRzeK2vMmki3PHvqHXrodUjgBDe1dG7AaDDLK31kyWHRy1w",
  "key23": "ZKWXvzzc6bHzjWLgpgDcVbogmZPUfnsUsqBt3r3NXcbQ1ZcVtLzTqscfaqRpUMc8oKeuERgamBkVvAtAzUmjX83",
  "key24": "4mUzu4yZN1zzF654jFDFErLgrJgYXui7ck1bxQ4bH73reZBWwFDeMpNCddU3f1EMJiFJdbyZmmEbhUa8A4qWrYLB",
  "key25": "5XxRmQdabkkixeySwgrk9MCDBauP45sjCQKjFmqgDbMScP93Dv8DaJiXg55fgaGc5dVW6qGiTRRA236isaQ3f9as",
  "key26": "ZB7cVjqEi7T7ea8Ffo35oHWKzyPmAMo3EaXjdfJy7xWZTaQaKnSSaWkV44qMniSfgquE9eFcPusKB6WCN3e2RRo",
  "key27": "2QEudkf5s5ww3rKNWF5TbkghvJfevVbPDSCMuss3FWRvg21r6M3yM4XMUPiXmyxd7iWk5cAuafNpJ4SYrwJLMHR6",
  "key28": "PJt4gL2TJTRGFNjihZGLMf2yVWR2mtRnERPR1yrhCnyov6wFojTxA7ATzoxD6u1siVHJS664coSB4C1EgDy8vpV",
  "key29": "3oG3b9WCT4KKw9NGczcDr8GeAeidBEzbQpdK9Ef7QmWDBaJ3kqtPjTQdyaTYJqomarwo5AP4gBaR5Svef6iZ2eyF",
  "key30": "2unFnnkJ4FdSHJEieCrMcuZqVXk5U6yEXJioZhM37NeLnTLn8hwobevjsjPc5fTSqduXQRJ7ofNgDhodNN71Acna",
  "key31": "5SbYi9rAEdp6Da4U1H6xdcRodYHzwzhuYrDhTtb5WE9jkerA7ZYMfW3MmB1HAAi78PZoWxAfRVtpkYykbpUj4wQg"
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
