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
    "Ah8nq9UdGX2aGwJRQRukVAcD3aJ6zKvbXdzE6q4xEfkp4vMp3e7mbqw7s2q7xC8dCfaBDi9QDS4TV95sWHnLm76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gmRxfFGyt7JrFWE5D6yTYbHxCpJGM4d5R4FWzFvX548JU76nej5UQggQTzuVdQ7y155EPqwzfpy4YeXF5ZRFgSg",
  "key1": "4QbBDp7ZHHWtnQFXp3m3whqc97aUYj8paCxnjtACa7GVfAkcuuXxoMgnFHF6GLreALmB1abSb8QcNx5apFnyob3H",
  "key2": "5CAP5eoJB4132KcUV6aMbHNsRMR4BehndY6KooGC8KQtc3KUCyVtspwrCehCecJ5EBwg3wTe1qfBrVP2SjVE3jV7",
  "key3": "4BxMhKw5kkV5HfT2sxJmSd1GCHv4wR5fKco4zBWeGzBDpsbczKQXj8EtqLWeRNutzTgjs7pyZ6AyMTt7sDeKjx9D",
  "key4": "4KP3txSET1DTu3NYK1H1tVj1ZKfZtTu6yyZqKZdCgMiKuiaHMz1Ugyo8eDgSZSfnpknMSmZV6Uwd8GVaN6LxUBM",
  "key5": "bvxULYBrdTPCzAebGopp9i6r7351addmB43Afk2jtQCXWGn8xUL7ibuDuAe743LVbtEekSsgV5PB3VCTghBEpvd",
  "key6": "3WavU6Tiw2gwgDXVe3NCRJtAKXpjQKvpognm4DQqCNvuYi62Ta7WQAmck8HB3t8v8wtDHs5o3tuV2EuFiGWzAwrL",
  "key7": "4nKAoUZMeoPkjCih7syeHKtP5eFYY68yXTrPhEgHpxdYSiiFuM4JJyf4fr2EQcXdma6ngVJU2eq7DftDQww2g3p4",
  "key8": "4Lt45A1MpR7uWRAQUfPnyNyZfdtKzNn8bTea71WA61i7JmJY2jNaYhfUhx3NhDXF8EgMdMzm2LNhjsuz5iHtH8NG",
  "key9": "NvAXhnVT4GB53rDh9oK1bEqZN4UcHzsPdSSj1CDCWa4qpWyfEp1pL6nfxez4myefx1jc1ZVXPmuT2VKnhUoDyFS",
  "key10": "xbKvJcdArqUh6jspB7Cq1Wnd2RWBz7AAQcJNfqvYSRBkQZRLF8sD6MJSV5QhV4smwcTWAMb22J5h47Gn4snTin2",
  "key11": "5sUAv5w2j3SyxWQzc3SiiABQYTAfSeU6bJzDtmASntvBwSE84ZtcNeW3iQ1mjtk2Z6ogDmtrN3S1GqL7vJ9TDMsa",
  "key12": "58Pw1r6mKVpzt8DmxPQJt8FPcav4r2wyzatnY7L2uFqs2xTGhgxPsXTqoVbCQ9JV7v89MRULUTRzRue9hYzBWrMN",
  "key13": "2Fw8n7S1uPp88iQh8FdQub2gpE2Rbe3F4oeywTB1Ze5ua1ZXVD8EF5b3CcpDA5bur8vX1TcNUQqti3L3FzD9UzGE",
  "key14": "2ZoVuRAvSrd9Uvz28PoAuVR5YWceYsJCAZQuARb8baVxQQYFcv6buYyaQ5t38qKJ62DnECqwtAkx1k1C8rmM5dFf",
  "key15": "3ugrPPuGJaQ5zAZy3eD6SD8jr5xW793uNwZtKJjm2Pnoi2oCHf1mDxcva6jHACRkvDDnrANRRiw7zeFboSDnqAmt",
  "key16": "xCSMAfoJUvraAceZjfVVzhGqsJ5rSnzM9Xvo3LWRYT5XKabuerhNUaTMGHXQ4iUeZ9rcaEB7afo4apk5n9kSyoY",
  "key17": "3rB617uimX7kLKoQ3GQPaKW7KZTsHR9b7qGVBcDYFfueVt4tUXNJLa2zLBhiAh4kzot4BXr5JLGUQFsGTsZJp6vQ",
  "key18": "4b1Ftphtn7bN42CSzMLPm8QHqnD8aGLRLuw2pyF2NTBQuRpJqAGshz1WkLpVkoWhqdLWDEtTvRzzVe1N8Y9HKi8c",
  "key19": "3gQULG5NzcELQSmkAMnQkkrLqwxbUNshomUz4Mqp3gfPacG2maycvAfc4s7Ye8vY6xjMwdan4LVSpSj9g2SB7kFu",
  "key20": "5xvn7JfyUSPJz42TeutqEvfjTV3sm84NS1dNEaEWkqkrq6Zgm5ZfoaY5zBrjkh2wxzNAkCMSbWRwsR6D6xk3xmN2",
  "key21": "3thWm1pLN33BrZYo4KJXc2idQVFcSWgoRhwqibgaSKHZPyB1bbkB6YS1uxAwLFQ2HWuZBZ5qgaZV5yCNbrFv9jyU",
  "key22": "5VPHt31CoH8dqWpcpiLpVcndNXFHkaQ4jznwcUqiCDYBBChDs5SYAoudkZSVgqYnH2bFH5g8mBQWmJE1PjNznGpz",
  "key23": "nsZU62MoCjAi2FpgeGrgmgP9EVx4u6DxSYBNeX9YcQM6RU4vbuBSZQRGwq1Dj9VodtqRJC7Z2DcA3REQpybVaap",
  "key24": "2wHL5hzcXyMNhoqeyJdQbHT4bVhLDKatSzqKZ6JwirfReCwkTMizSbAADMVYXhAaU2H7oApaE7c1amnCMgTwr3LP",
  "key25": "3aCvKT9hc7JxxLy5Jx2Q85nu8r4LHeouRWYYcARydVFyEczyrf11D36sJqDuccP5xa5NHXYryXUTJbhSEaeD5rBm",
  "key26": "5u6Ngq6ngqsKMpXobYqvug1bcZoRwcUxKYrVeEA3Yxr2QzSMU36ynTcJMmovLKEhT8nwuz5ZV7w8j17M7JqzNfjU",
  "key27": "4AvCpjrzuAgHC4V5q6rnJGeKzMpfMZ82yVfA5AA1Se535vLaE1qusaHP7zN1ShyRn6CxDDWPCP83rWWPMziS8tZD",
  "key28": "5PTPfisgXKqQ4zeZFJX4jHEzPzww5fC5UdoTPixSfkWhmgAR8Ty4YU7H48sw33Gcbwmq5vBBDC3gjiGEcxBQfQvB",
  "key29": "4b2Y2omeKKHyTWxpS8tHUnvBRyvRRmVZ7Anhhh19rzZH2Q2wWW65Rfffv7EEqTm7AAsgoccApsUZPso1MmFibreA",
  "key30": "5tyY4VPzZidXuZtvJsA9HLBYXp2MrKF33qgmKBpnLCYVpTDWxw6cNGcjfmqaAnCQGz6smJX9i85FsidAWU2Xifym",
  "key31": "49vMJUuf8D1uath1X89bHdfTnYAkBkxuAkTuUBa8dHqU3ZNCfSZUQxDbh6AyCNZ6m66CQUwmFAjcTkk1taS9CfUw",
  "key32": "5SfbXW5F1q21BAmUvE1pdiPeajQLhkJUJQr58PwSp4Vr4USyPzsY4q5dKHT1kWuV6w5xpRipweAJExGV6MyQVeiE",
  "key33": "5qWdAduQHC5zdAzBcAHqCJezqv8nNtJ7rfYsL6reSc41Vs2xLzQ64rebVKHWr4H1Cc7AzBFdQrp3vnM8w3ebUA1w",
  "key34": "4orxKcXHgBLReDJA1YWnLHFEWdJt9Hp1ezQydDBECW2Hwqnu98X1QqTLH1am2CUBq2SR63YDFneTUvPpq76rGJEW",
  "key35": "3jLPTex6qBLs2rXzJvR7davYXb1H3NjiXntcYALuDCXAEgwnNnGvdL7NA2N5mvcPhParot59XiUvc8uGSKjfHpG9",
  "key36": "SQqUQqbNrqsafcJfasiztg9t9WWZNm33Jn1k9DQZhpzU9RtVeewY3X3GMBJzfD3XLDNARmu8T8fo6UVrKQkCK5o",
  "key37": "2qLsa7KDvbFnVRjwY6miLR1rzM778DnwgYyvmcWVgoTbPmLJJePvmLWRMxPNhJ5NKy3NaEwacJ9kzP8hKaamg6Mx",
  "key38": "5mJDcMGo729L81JzGeXxt7KacvfijR1Seczd7fGHhq2K21445K6bo7J9cLr65Kg9YeMy3cNcEvdE7qiazDszig8c",
  "key39": "z1C9JNN2YrDca6WGKc5BvcJDxASz4jY9TPuSiMUfVV7vAUcURfC1u5ckYbt5HcZryctPKmDs9SXmMVjD72hk2BS",
  "key40": "2cXXDA6tb7AtcE4hqnaYUx5SA7kvnzJomPdd1KjVz2EipxsTB53RR5bYDEWx1HGqvoeEesXoJJNgvvC4Tg7cZzXq",
  "key41": "5AqMUFMmHKaP8jtuupZq3RPmqF9mzHoojC93zPhLq9qwNu8BCjpswWfcJuuepqLJ8mdCnrWATypZEVGPzdra7tJH",
  "key42": "PRYQUreUch4Q6aKob6NYY2DGqgqJmWndrygHmv5LT5CdX7vZcNjXN25hPxVBx5PCg8xxyB4V6DUhFJ7Ga57CtCy",
  "key43": "5gz1ot5V95a1vMcrdQESWma4KsYwbPfVmf2PJLa3aPNEzYCqkFuhFVhS6ioBd94SNjzckmi5vLEciyM3nXoPR2q9",
  "key44": "52d8vSMkgyzQXf57Qs7SUryCxJc3wXZpDhZLWncrnfECQZj5GYV2DFz6TWaQg4seUTwbKngR4nk4Dnuqenn4fhre"
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
