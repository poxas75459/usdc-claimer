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
    "31KmroF8FaMwoJakZkfQaDNcTmyXmDBC6QR7GwCPf6769XHFRD1iG4qRkm3Bu6i2Ndu7v8ejPvnMKbpyK3HpappR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPbqTfBhmPYqmT6GYvfKQxXou3NXC9W89MQySNTxwVQVe7NCS7XeHi6r4rM3rHfCSfmwMsY1YKbJuM7u92gTVMw",
  "key1": "3uKMxQ488YtHNDFrrhvTaxWsXWjHoL68AmAoxf878zNiJoC9ryVqJX3kJrW7rF2p2vFocHg7Kh4Q8KN9UzwvWbtv",
  "key2": "4YdfVjX6mjihExvyrAJd9uvaDiuGFbkS9ufEmKhgJFvTgJjDj3eWsPvxeGfE13toEkL2xhzNvrHUbg3vogUG2ysf",
  "key3": "2t5QCiUng6TjVT1iZTiWU1rS5xUaUZ5LYPV92T7o5skojmQWaWcMdHjpGh15Yp1SpCsgrLwUYF3JZFBk2Fj8KEyv",
  "key4": "5UutnYjxU6WQcWCecsdW5iCGw6MGwaTnMB7G4h8q6H4Aec74D4ScPVtMUqWDgJ6GPq2gLxmc12dz9ZZqH2hP4efH",
  "key5": "3ZTxVuhtKKzBHB4ezc74xAu55FTgeaxoNkbBSPa1Ts7ZddK3k4DNggNepSt6s9aYASgqgtG6mMHyz9GrLzDBHWTL",
  "key6": "4JignVrnsHW2Msb4jzAe3edToBY4g9QNRJ5shL2SJY6MsdS5UWfMmMczZkGSWFxxMxGXCbEQ348XUwUy7CmaCrrE",
  "key7": "3aHnxUcJiffqxxzByU5j12aomqWim1aweRjMyQZmCMx43ZoFPUoUMCsQ3gchewTs4d7h9SocNoifL7y3rnPHozCu",
  "key8": "5mQaFDFUtKUB5T32JmagGHHpjgmsTnMJFbVmuMnPTY1XHe28KYzudsotvTkjQRnKxSLSdcYeW7iPdcBL1rUDExrG",
  "key9": "2tz7uBBhJTX7qJnAyMnt56BfyLYPVCjF8rzyfXY1dqqARuEmZyo5PZoN9twF3ProDFErou3w7qJrRAoxg93oZ5df",
  "key10": "5URhsEn6NMCH6SCKNRu5BuVto2CGmD5YPbjtyQGjdeYW9Wm8kUZPCDnJ5shqp6AKgLnyeb8nNFFDw3VFioGzxocm",
  "key11": "2revVueMLvSmjxEQDZAEaNZsZHgeKNCoCLbfJkgGg9MFas1sCNXfotZ5Q4Qhnen1m9TBJfeWiBufpcwVCcwbt3P5",
  "key12": "4i9k2Uvi6cRqB6gFmbUXzzc9UWUmjp7t8JVyXGeEnoE7jXeBVKqVgYETd4iPYLDiyysgRe6JvmwWUGNPDGW19JKx",
  "key13": "33KLiGnvfASTqUqZGwFFWhPZpPmMkigSXkbvoJNQzEqb5HscDW8YZ3oi5V1hRkgnvtbiVoZaeVT41s3TAen7Sn1h",
  "key14": "648qubTCdXbrQiUAyKzUsd8o5E2oAVqxdJaTRTMF87ERxLrPYvdiUCLESV2m2MtiNJMPCc3pD3HPQoGW8tJUuFeL",
  "key15": "5Jr6rvyh9b7GHFXeP5BJh5uVG5bxb1bD8T6EzntmNrWDKadH6ZmBiSw8goobxsvKnLUKUX7ft8Yz8nhjzhHhp7w3",
  "key16": "3EjC9oEGCerVaPcUF2YnjoJkpZVFbDUr8AHuNjoKZFgqRDVFtegLJW4UTtUxohCdUzkgdTe9c3xzBJ77ZUAaYJKn",
  "key17": "4MAvPzNWJvrT4huFPu9QYFXfCUoHijJx841UhdBAcMr8hVNS5ZV8jWo68Ee2mPMm5wZVk9WYGdGC6eXozhSc9UQN",
  "key18": "66rbuTRPFQmngtdN7STYym7njnAa2xa15WrR8N3Rv6hXCTfWLbgkzgAS9djhtwRQfknuvq4HWwf3YEyggzFjb4Fd",
  "key19": "2Qm7DJgeuEWkwRYRp5hEAdbEuzeELuzhHQZ7F78geZFQB8oQttaSZ7hWLNYXUUK7PQmrxnZk29qUiTLn9FjVY1in",
  "key20": "5Wgn5c6N8knQc3NCecJfeHXXi663Cx8TRwukU4H6GQaa39CUJwimpj47ddrWSRDtnJXF1HPdUk4pqEvrys5yYwqt",
  "key21": "5Uh1pPJn2VaHF3JCNzquG4W3vZJNsZ5grH6DMip6bP7VKk1Z89W5M6DsXUxFp4K3Fxbk1J8bwb64Rju6urQzpiFt",
  "key22": "4SwWbSNRExAuUxHdsRKYX83CEoSY3aHBzGP71AY6kUm1kTwxbfHsU9V59hH3CKmL4Pq8qjEwok41RnZ3Cxxd5bbp",
  "key23": "3JpavcFZAfnDGh1MrtobV35Kkk1Bs2mXetnStNLXCyooGn9tsopsFwjvr3NqpwrvA1udN5sgMUWtFXYnpyf1TKT2",
  "key24": "3GzC9QDToX8X5nLbvR9Xkaz9mMA6sDKTY6PSderRpW7UPGmBCx5T3CtZraGoKcA5BditGjfHzve9jQ9TEswwndEZ",
  "key25": "5av6a7S2Qx6cZNtK8eCCW4iXtKqxg885Bxqpt6roasArdYxN9fQdNRAwG8bXC9ShF22CN3ENqYD5ufrruviA4yt",
  "key26": "G24sQFQ7ivsLfJwHox3E3tWN9QTVAmMoneVbGF8uCTkYXmVximYXzMo81VNyfDD2jP9Uzf9QYZaBp6egJyfZwKr",
  "key27": "5gLcoCnjzEDnGMjJigcnrNzABqGKtrq9UNfn6rDa7h3e2ucfkg8U5aC5hFFE5jgMEBqZxAJtQDxdp8v2W9S2h76a",
  "key28": "SpgPvVJnrvVHevyyYV6nnxwaDgUChs2SD4XXxjRqbv7nSUuW7awnx1GveDKxjyRUFHMuiaithRYTSo3yesQPQWk",
  "key29": "HGLyxaGRV2Q6D3PvXfySgizgivkuEbrcPFkdWrdnQejxwJ91jif7SARJtv6XQcQ6h5UPyC9aNWgvr1FV3qoXHPA",
  "key30": "3cvGNJ8DG8d3fMnz2WUvqg51YNGbNkSdVKUzVcWhc6bN1ufZeJawMh9PeJQjUTyssSnDVpyRKn9j2LcACz6VVodX",
  "key31": "3YzrGRFmgQ4FEd3NDVw6Fmn4Atk5JVsxnb7RUHmTUcXTJR9bqt91sY3wxaLAKgsGhagkPh9WunKb5H7UVKcQXWbt",
  "key32": "4ELdx1TFNFPgtaEDdAXqSon3BXG5J6Huxavf8Uo8H8zX82fYHDJfpG4HCDgj3d4XgK1Seq2twC5R2WeCvipGPcEZ",
  "key33": "2cazrP1hoq6EGNgvtxG29MssDh8pT9mHc5F7o9fYdENoD7kKpFbDPxTtTPRomECwuvEWGqcsiS7Twu7qGSYTCgAV",
  "key34": "3TCmnr4aZnMpHRdt4CaevGJcYRmfTAYmgGyaqvCHt1k3irEqrK5ogmsawhainQuHFVs47CbdynjStsQ1Z96qQm9j",
  "key35": "4n4R29s4UGTYEWpxBHq5Jrd5MRxy1DxepgE51GcXoauWM7pQhAtdsFKkDzE6r4NTicvrywrkjNMnvqis9q7AEF2e",
  "key36": "59d3TnVfzQunQqEMXqs2sJWq7a6RkD1RXXbQgM7gqMxbGT7cRcjfsKRA8EqSTnXGkvejNDJqjxz9R7gSyyocN2ex",
  "key37": "NWZYny2NPpod5a6GMFYAwMLE6r4D5sDUbbv2utTsdywbbVJXx8Bib8MGtPigmgSyiwDnG4iFm4ooNoWJihzArp2",
  "key38": "2VBZPV2ELk2Cf2NXp7kZvVQ2qSJxDeQexgLhPurw1yS643dTYGUTekJdRWHPM1aP1rUWJ7sJkeD5Gd9o5FLfjSpH",
  "key39": "bFAdj1Tm7eg4MvviXZn6CAYWdQc5tjDvXhGgvcx67HeGGHrSoBph2daHFNDb3qVwf8t91AQWfWmz4jaD3Q2LjJw",
  "key40": "3TJM242SckEbuXQSG6D1rDXRLokBuj5tmyvWgYgshzYLTPaBZ1uNvKXtW2fH6VMLoyakCMgJcURs5xW1quSiQUvL",
  "key41": "4d4XbS8HaTEjv3R1J3uMHkN1iAfXZytxBehxJ48EstoJJfgEBjeFR9eBSdaSLGCsCnfedUjLUT4xQzYxZRK6o56W",
  "key42": "58S9Ep6NRv8LJbizUGLRabbQg2wK6tYJBVXD4H2NXENPoT9jfV8pyH88Dg3ot3fD1zwJJnZE4iQ9Bt7ffQHtcZ3v",
  "key43": "5DivHx4bTetpXqqVKC141zwF5H6KaLYnZHDeSqaF1P3Z7bTaVYKE9dGFUSi12QKVEU25LoWYrVjrhANjx8ujFMoi",
  "key44": "21z8dit9NDrTX6j2k8qiJrmjYoo4WmgAtTWTsgBGxDDJSNyeuSE9Wa6CaZatK8qLaWf2QVycwnZAi93t44BiyzDv",
  "key45": "5ZbehYicvYzcuivLxTBM4L86VhHf6mtdSw6NPAHHtYiV2AJNnH6Q9vSoKkMPqoKPkwHvxDkAtvNzjfFPf8zau1YE",
  "key46": "2tHaywHTyj4XRRRYf9yjRBrzhdGMi76qK7Aj8G1c8NKtFSrbmZ6ExMUGiHKv75BbFL9hU5BR35MS2avUaCdZTcNg"
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
