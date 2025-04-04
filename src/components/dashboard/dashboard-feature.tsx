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
    "3mDk96umoJ3pmdKYW9FmddLHWgczN6Mg5RoRPz3w1zxzq4ChcW76yTrYLhp6u9y11sHR8FnFqKaCGqA4WJA587Ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUEUyo8VnVzYNcujpzs2G5HFeYHB7mdNKsHzjECmPQnVCXqQ6KymHs9w2UEXTJkFai17wYYyozgdmxrmzuYLpEx",
  "key1": "5JaLmEmXRpKbtq8qp4YAiRigbLkV1mUVSBGfzaWWc6wrJCuQdy1Hrzonw9aigdxPbnnHVE6VnFv49wpU57ZBd369",
  "key2": "3EXdPRyxEkBUDwgrs2NmT7nuerD5GFRBaRZNjSCYArLDWrjc9EEGRPgESuyf3NeNMSkiB8zfRTA2LXT6ACyEFAan",
  "key3": "3oedoTP5w2uh64k9De2vL62CkNBUpkrM8sCUkh8naeGxcBX5JMhg14gPHt4pnKPSLXSrASPn2dp5FdoeUmJYePGX",
  "key4": "4MyExoyiEc7uCCSodGQS4SqRBT7VphNGiuTwDNpPuEcJT61wMkEiKzBfHUP8k75iyVcUgr3GLAUWwwugZX7LYR5T",
  "key5": "2187TFqwAfqhCu6xM87YW2p7k6a1sRas2meXRZY3bc3Xzd354rTufK87CboZVAxRR4jWnFCHxx31494KcHR2tuhq",
  "key6": "tcaqUuhsUmyLkrASPdKqta9tjF4UfvAuhNDcod2n39GJ3mTXXXWdm1PV1jkXLgLvjESeWPHHJXD5ynqjRB6DjiY",
  "key7": "4wkU1cNXUJ4sfm2LVgdvAGqyYz66i4oRhVjvfskmqS7bpJFBTstqbHqzk6ea96Q2pEjtKFjjhrXvqdw7VDBG2nwe",
  "key8": "3PyXAyXatF7ALpA6Fm3msrucRgVr4eaj5nHHTcvQnwscSMxPpL41uJgfJqXgCmgaTHngGbZxtuTkNjSqB2Q8GL49",
  "key9": "5aS4wB24tasydKcpDriH3vB9hiPM3HSGGs3ZNN7EF79ted5oqF2yYnCuU5jJqCMy737C2miJQR66mxdaTWkXk9A5",
  "key10": "3GT77xENMroQhLmdEwvMMToXuHw8Y32ma7WEWiCqP4pzpJZJvQkWRnNunPPPvvYmQg4VTEB2f3nSDPKpdsg5QQoz",
  "key11": "3jw9SR622nYz1SKfd6K6EEWZHrqQsQSH7uraE6Mzg2y3Wb4vhBwCW2UwUpu18tP75wh2s9XrtTByYiBMZ7rrzFro",
  "key12": "2mkQh4NgMa2oiLSssq5SKGhAF1WinuYTTyumsyP3bqnsQoszgGrFawFySCzbS52irciFiwMnz1sMGw4MTe87GxuA",
  "key13": "5AJmrnjN1djaCa4r1j9Wc4G42KbAMQw2jyocWNxqxvJqT1PGH36dZpHD3xikyf9sASbL7Yqjtz1YvaYRxfVdJHdF",
  "key14": "4sQxup3NTKeCFbiY8N4cjvQTikmtUpqN2W1xNmr3UVzBDwXNwoSVbBBsdh8TxFZB7GRV5irdfxGosrMFTmZwGHwi",
  "key15": "3z7n5tz4iz5MEhXaswPDHBkLBVjUMXhdYf4ZLiJopKxGKHmQTAmvAURoD7PRvUFZz44ewrcyDgsHPgDjLPf72kCS",
  "key16": "3Vj6c15qZBa9KxCXET61wivM7xu6ro9Fgiop26DHwZJYYNNTuh2aji4AVBjwdgnGNTR28f9ZpVUgQH8tYS56qaPg",
  "key17": "5DQH2A8uMfp1RpD28uEthdVhDK1YX9uZugqGf6WCALkZenn8zb91EsS439MoFfTwvpzozJfdpoKSMgy6Z7xxUaBx",
  "key18": "5TK2jkfaTrtxAyyHb9avQt6S535zqu2V5MFTKrS1FPEp6gpkPtxYnFA3jgYdyj7AXGmyWSGeYxcZuYJLL7hQFZUE",
  "key19": "2YYi4U9rNMdAKPCf1i5t64eWfCWtD5Q7tGmGkirsyhXt7QmmYGokNS2qJJ5gchHhK1T2TedCfQ3m1MJuqQWqiHLS",
  "key20": "3npEtjnXdgaPu67sf1mxxSjXvWWaM6BSmHFSFH9q9cGzh25oD8qvmUtEt1B6HgxtyELVBh3pq5iZN8pcvBBUA2TG",
  "key21": "2kowc2CasUcbZYHLCVJgD5cynYFr1rgZsK1ehGi93MZhDne5uquuJCozpY3vg9doLVzkyHBwjQnGSRFEnwUZY1xQ",
  "key22": "5oLWyL1CCVD6qp7xzmCWEnGtwRCNRvv5qgpe5ZEfc13RfWBvbN4ypqgpRFCqv7WJW9AV8tsiYMAdUAQowEP8UZLV",
  "key23": "5cXCp6Nxgw8yALJ3BNu61ywk5y4fJMKR4DS9nR6kaxhDaFUkFMnPoGdkCj4krbwehdmicvdjf2Cmugdq2cuxTmj8",
  "key24": "3sQ5RsjV1ApPJhoSdknNgnGZha4c6A4REH4tM9zr3i7rCZZy3dYoinKK6USsoycBL32nVGrRTZXZ8u7xjbHqmRBw",
  "key25": "t4CLxKQjmoScJvpyb7pcaxcdhDKYHnpMcshKQohwntve9pSn3NM7PGTDTDxS5DhNev4JeMCHh5yGtsF8792nVkf",
  "key26": "5prc818wUGg5kDaLkPuNVrUn7u2X7Dkdz5AQuM3i7b2dCkg6HC4kFtvPtXDT58CfJKRcoj4AqvwkbPLYt1UR7tN1",
  "key27": "fkeThe8v4CaNAFmhsD2ea6BL8FcERpkvUzPYW9eg3xZk4bhw9oQcAJ9EKs47WWt9QHuWnooMUjQUVoavTgZV3LS",
  "key28": "24DHJPESJz1zs1eMvD7MtLBjfFjQ3GMKq1AiGSXmsYyfaCPcNkFcUAuWVPaau4Ajh5R7y5JV7NymERjrB5dmd1pp",
  "key29": "52DXuQikgwV6hvv7JNqgYi7hCUU81MGqFAox5PgetX9op2akAZNgStHEoA3kN8LvR9tJWBLmVbbLEAN9UQ4YeLfV",
  "key30": "3AED528WpLvgJK9HCw983E4WULmipAYjyNazTEPC7sUptxnYqc12yqDBjWQVrqx55hchumfxFRfGvrAPbFFnFEBh",
  "key31": "eRaZ8Ytk53TotKyUiuZcpKu9uyTs2wRuaAJcke5KQtg8aQWixtNJjMGSr8RJ9Sb48UX1kG85tuRHq5fzYy7UYHn",
  "key32": "4hhBG6xNNjubgTSeM5puS564jAJcYkWi9U2E2q2H8TyQwmq5LfUY3V4wkoy51o4Ha87QoHeeFsUgtEmAFwPDNDJw",
  "key33": "5c1ePx6uwrUQ5F6U3N3AB6gjdrT4yjAFHpu8b5YjetUWxrmga1Gv65VKspKyta1fNRkGv9YsARS4Ku5drZMfrC6Q",
  "key34": "4ufCUvuzzg7ZnkK97kqbPx2ts4VoocvEtZ18PsH7CqXHxUoPEK73w5b8XsW7igmHnHXx9i4WSSQffbQdkKvcb34h",
  "key35": "5q7vGDW36cP1srrVMgyJiK4Zj2bKPHakLE19MVc6PqeUdnYzX1UULwYTrmLaJNMPoTakPq3xjQ6KRZmHciGdhzt7"
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
