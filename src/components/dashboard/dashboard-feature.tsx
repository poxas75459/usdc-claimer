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
    "3TayhqjrtMDGKcaB3Jgfkcn9XxkbX1NHNrqrc3enn7eUcovgFUBKWogrjhTCpC5ofEXuQ9yDUSEyRw9iUwSRzfdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AGMCpC3kRnpr91ruL8RCDmvSB7HRtZNbwaajASpmtt56QsB2HYb8mASiP8V2EuGUphzqYQ9shCcVtgQxEkQvehC",
  "key1": "2cTqwV5iaGU59YRmMDk1XYj9EEySSsVbuku61MWYEu7tQpC2Yr7ATMBac31YiLLXNtDbvrEWPDRtoWykaFcf3ra6",
  "key2": "2XXHwBB7WAHgjW7hUsQRFbJFZ2p9uso3YXz9fYQmmLNTNcCrK4cagPnVZFeBdrFCHb4DGYTf1ikrtKTeepKHzkai",
  "key3": "4gvY9byohP74sfn1SLmkPpVetCpWm81yHAdWL8F9jfJpZiMN3KD92vQXVyFZZnG34yX753s9N95yiara6ETfogEq",
  "key4": "5BYcnB5Vtrhef7nTcPHs5VmDM2tahdVYGESjUWoY5uRTqtUcv51jRnBzDWb3Xj7Q28Y6yXuCS2qa9hGUooTk617H",
  "key5": "66y5hSGB14oPpF1nUnN3Hqy9CRcUuKZQp2eftq4UwkyLBB1GMfXpoSAUsAv2QQaxo24REqR6uanjD2cAchy858eT",
  "key6": "4GbNNoTBuc9nGrkFbvA8zZ2epHmRkGpWzs3hWMPfmihvZCEwwxYBNTbYTHHoVx9UZnJMemFrsDzGvmBaqr6nYgdx",
  "key7": "4peTX5dKVh47pHjet66Btge9LSbBKYpnJnGfgJc3ZEtYAZbKbdC71tUmPaoDdS4feWoe4puNVJ4n8uG6TqmhgkV1",
  "key8": "3YSKijfBjKGhEVCHpW2smx6f9QGNyAzddSqioBoEMJDbAy9BFrkRSqiR9T9VuyWphYs6gzDWQ9ujnHHrKKrSTmoQ",
  "key9": "5xfurexcfeAKse27ACXkLgcGmKp82QH46Bu8fG6dVAdFBDNGfZjQBrBpgWuBe8MwdTHNcxckLr2S4wZYvGy4BY3z",
  "key10": "3eA5SmBHidGWj9S7i8AowxMFs4ABmowMypSPgFTqXFHPzgKhyyKeLpbp3ovogmcCVoFheX4jkyZnc8kYRKiDaER",
  "key11": "MMVEpjY6CQibsernDcQuAAMh3FGZJ8nJBk6HWTth1iwk7AM56kxgHV2dgC5tYQxB8g3nHT5hxuNPcjnyEJSPhBn",
  "key12": "5yhoCe4f7seRy9Et2jsUBbkYQcesk1HxYUNPxQTqsL7Et3ZSCQ9muz1MbtroL9xNwd9D1RWMTuvvJu1MHcRYMSi8",
  "key13": "1vNcpWjKK1h5WpzVGX5Asff3kPGRph1jWpfzqu1fi6rV5NmBn21qakGxegLSpBCdHLrmaxbDAcWnrVYguiJ6HoC",
  "key14": "3kprzpRmxoedkmbPHTUofeqcjhYhwvC2aRfDdhnq9Cw7oFdUiRjigsn98ChkQZbuumudV8kXMUF2tqmiXJW8h89j",
  "key15": "3e9kpfikNcEhTKNvxZUmKwVicC3aHt99WfxPFvJsA2xc6WB3HPRtnSxP2TK1q7GGVerQFkd2SoiTbq4UNyrtyh18",
  "key16": "59gByEGKT2JkCA2fTYZe9CDgPCQirrVri5M5XZ8uWE6UPjpyeNgHLkJqX6TsRrwpqDCLq4PkBqEM9kc6DfPAPoFE",
  "key17": "3k4uBY8C3dsN8Lj8WZBW3wetQ3q6PDRdqBPupRyvNYdTAqWuxypWzk9XqYm1KKAvdqZGqVSDVgMVDWqK7nJLYDML",
  "key18": "UAkkAVnuMfBKyp2zkdcyjonB2Y3BiGeK8EoiK4CmiuEfHh2d4iGYsAKWS7YBDsLcj7pb5m5seWpE7vJLVgX8yPQ",
  "key19": "3mGrA7WUFpf7n1U83LfShaQT1bf6dqL5D5etcYaZtzYhoSUPT2gjPXqNFVcUivgGXSibtMmPL5yA55tU5AXJWsV3",
  "key20": "5KpvyvABuKKc48yXYo3gabHF71JC8SFSQyv8vgyw6QHxw4LhjNz1J6tFc1Da2SvSnYLNdsHxW3Eu7ECTSu7MGdVH",
  "key21": "Wtu8NaZGEgZT55zXGGxSS8RiUSrQJudrNjMo1eLw5YSzVzeUVZb7Z7iYuxwH7MAqytML1QRGvbvwmac6BcrKF1K",
  "key22": "49iGqftFZzVc7Rp5csAhPCM9TPmCe7PqXaqpHd6AuUUcAf27zTriZxskpKJkdZozAdu2y9gQQr4V9bP4wNSiMxMi",
  "key23": "Ge7MEDF6sL1UZPhejwZtFPj28dHSq6ZMgCmpxAJRnCM5WB4YbihThwufXm9KZzVQLhPfhNJQ78GvJVUjrMHJkfe",
  "key24": "3MYVJ814mP1Zg3q2MTJyC1CCEe58DnyPi1TcXfVfB8oEXmCNwGqDb4uHKDJJggNbYMoWJKbog7YgPCkHW8UYVGud",
  "key25": "4v6swUxUq3KzRxAC9ZXfbQRbzJFdpYyMqddpvChDakHzkrDCZfzT3b3cDfQeaHadcbZhguCczoH1gW3qdgEhBw6m",
  "key26": "2Nj7AHMxje7ZLFT7ARXmfpoewSpe8T5KSJJYTQEGynt6LbCprd3CmtfoTRLGHWUE9WinVpqVyu4LgfFmqxvidnmP",
  "key27": "4JDPSMrHnPdyieusRy6uqUkxEFanJdASufzjiGfwQfCFPtBtKBxMvT1FMiDZLkZ8rh5Bc2gc6yfh5pTtHuCMkzoF",
  "key28": "3fC6VMSS7KUPC665q6V51JWg4fjqU5jP51Nr1C2Qaq5JxkVxbWMxAUWqB3SrMSaFYiMj9RjSEwsDgMhGkibojxGk",
  "key29": "3ZShYhixdv2uQmLwT9UaWMXCgBvm55aoZcogkF3tjLZzmGgDZzSfwUg1SNWKxuabM7Fpp6St7xBQyKKPJHxi5m5u",
  "key30": "5xPQd8wvf1uUqHggQe6ymKpw4iMK2CHEHMcx9PKeXry2548TBYbLbnKgpwuF5CRQ5L2Z4vXdcr7eENQtgdLhbedh",
  "key31": "4oMxwM65jwBLsK5tDMJft3pSze9aGk97eJNqszZg2piDAtg4cotfjPDmxbVGaiWcyqFpx795V7RcqmK83NVwUtWr",
  "key32": "5dtMSiPv2AnvRYRbE74vcP32hmHAoPZF4rjUHj4ebQP9vNYTjnjsTTPAE95V9DUJkHDdB5qPA3iTnYZvDmLPYKuQ",
  "key33": "2zvZQDgwCXHfx3EfbkAZMu1rQAHKRn7cWhUKeqbGTLSkeMzMomas5vvXw1iTG14mrL7BKhf2HfwedZ222M3Q6umr",
  "key34": "3zq3eYe986ofqEpRpYMUABrikcRJMpAw6Budf72EdSDMQP2NZENPK1p6RGYePE3N1DPi28uMkDnvRyaiurWGcRcB",
  "key35": "5RXZD6BShnKVC5zRc1jBXGhBVjPA9t5ztjUe8hzXFTYtQ2JUouDpyJsy4bNhdxaTSLWnuB3cYku8DxwjtvN7Q1Ci",
  "key36": "5qZ2sCQEHkWnsZeKgxMT3nxaMFRoxn5rTZdWn7gwEqzfwEjNC8b8STDCfCG1LZg5WCNXfXiETS1ct6yRpFNW1Axr",
  "key37": "2Hf9zLHm4ccbSn77VtYpaTVRn6fkEGRo4AT43B3wDWybnjBvtWmo5Lgq4AZLvAcSgykzxCjMNn57C49Y4jiLuhe7",
  "key38": "PeJZLoWJih4rHjrQJFNtS3hwDS582sL2qjiHX1MVNJ61NbpGaHdAY83ko638YvDvMJdx6bgbjrzmjGgo1iqAHAL",
  "key39": "2VbDmUUu1JAPdKPYXKKDtTX5fhCgreMXRMeUudP9W6b8fMKdjSaFpCWxwU4jLX9V6cBp26mjEKVqHbev5JzqBCRy"
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
