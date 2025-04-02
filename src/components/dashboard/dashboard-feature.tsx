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
    "3j2NE3GhWSbksFkWmGtLu8vL4Uuqri1Pc9JNuVU7dqyBXZXXqFB5zkXyXYqa7g2AAo8BU7DaUkMAXityLequ1Pom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6bfanjbCFvYAKgB79Hk2wUzKyaBjudSS3QDmSL2kRjQkzRpRkXm472sjWneBcooAVjwgxsHVCjRnDFByWDY5yk",
  "key1": "568TULq2xYFShuukHPNAGSX2L1DD6Fa7e7f5oJshR7N1dBLiXtndckDiHJd9BeRx4QWSYdiDvAp9ez61v3zfV5BW",
  "key2": "5ACiWPunrioB6tEDZ4TchwbjiA1EkDocox7jVdLAhqzQvdinxUqdzep41dmtpG9HXtD1LTe1YGDeMJJFiaapoHoz",
  "key3": "kwqMr61QGRwMbGVmMijAiWQkHgMmBffr1HRHEcFJoFNvQWnHwrRPSGy1jmpYJ7mgVJhqJxo3KdvKY7WKAmvG2eL",
  "key4": "2RS48KbbKjyG7z5H9ovCjCnZsgeE6udq2jz58q5EdVvev5hAbKEhpE5WeojxrmPUBgoRA12N73NxjSCWbX4L8xea",
  "key5": "23nUm8LYK4FSShMnWmGGxQrNZmL8xKDB5NCEdUEohCL15LZKH9aDoi9zunwQiudhVG4UsgmNpJ62qTVZd9qho1Gk",
  "key6": "CEtdGUMjMXUxpeX7e1m3xxzN52gn8XPk6xMNGtBkJzMc6NdkUDRftuyHYAPorSgK6wGaGvJ8ZJJHiKYZLffnRdN",
  "key7": "hPP69v2iGhF8DhZ9ALJCCJqZgZLuXFmjtLdNfV4edSciq4KFbySpEGkfXNrqdZx7ev9QjhZjXgmtyZtBK2bqK99",
  "key8": "3b6jqAAMV3LUSFFzTRSmkGZBqjCgFjbKChQ4zVpEvTivoL2d9x6r6pptLSrbqLpAdh2BgJss4SUK2qjjfD5qHMmn",
  "key9": "PK9wGrCDa9XJqcqWBRyvvEy9xpddRjpuJRvvRzmmRx3TR6L7zYyU6LZMUm4vgBzbRoNCeqXBujkYKi6bMdWVx9h",
  "key10": "cGo5PVNYFecy8GY4jeyMJSTdoZDD4tKPTHiRH4kyT4ncvoYEva6GZeLQNiQUrB65Pf9H7qEubMfMVBUddyUPJhE",
  "key11": "2XzXk72rVXeRcwrAxQUWmBYhkzF7JDC5rh722sgaod4hyj1oX6jZqm3MCi552kUmoZKBXUhgHTJMEwAcxvteCztW",
  "key12": "3Tkgw58KkAaMsEbAkLAuMYDoGA5pcswrcF31z5p9bLNgAfYFs9aRdGbTsxv8jx65gKsw55VTmBiE8rPDAoD6QwNm",
  "key13": "2JqrTyeVHdEjEMW3N2D7SDokrEv1TN8rExXUg2XeUwTbiyv3ycqZSV7BimEP5jEmZ3D5B58cMParVpdX1hht1J5Y",
  "key14": "64sj96fuR7rz7GeFAv44nFQgsABMxSd4uzYmx9jqFQPbyzhjnR8qGUeCcvCn9qmmzLMeVC8KRy4RYNpCqXdhsecn",
  "key15": "2zf4CSnfcBtY2CtioaPivU2EvUkzPwTEb3rCD3PY5QuS8pAwgNrPH91Jeg5acay6cNwvExc1aVE1c4b2WqpiGeNZ",
  "key16": "4Qb617pp9qbcY6fahm6SzX6Zdw2ppShazBS4C8WJW8nj8wQchnFTKAydvanPjWhhKkJRAsHPDD65VFnbyL4wpZiY",
  "key17": "3vrLwKjCP9DNmDXq9dw7ntNqpkCejU4d93oEYKcDBCoZotfWYeoJNKggmpGMrMboyjWQJdTR2ttFREBJqeKMEa4r",
  "key18": "2cAaW3DbcVTFMthRx8xRGjsrLKc641DstH9CHE9ZV7st8Nvk6XyZL6KDJtnaqw4hSAwBht8zeuWZS118ddsUjnma",
  "key19": "4knE84oNAkcffXKcto5tWudgneQ18R9WgbqN66Fgx1Q7YJ1dcHRexhsMSx4YNSbvt79ndernhF26MJujjSVU42Y1",
  "key20": "xfi27QZMbrTUpsyqzwrKgVGQpQw8tLgVSsPDZLB5sCH51rVhJAddxWMQDxYWVxGGsFGDRYzU8KUCKjdSdzkDYH4",
  "key21": "35BkHZZpXqrhRafmoF1Cdom8G8yjokjrAuq4SajEaHo68KvYuXjtvL32Ky9ridvE8pgxf6KVbs6GrpRrPDFAQhTd",
  "key22": "xjRcZhaHS7p4QUwtKrfCVnEAwEypuMPCTL38PL2XZEKSdJZ5cyn5aS9eVcqX8sWuwL2k9PSberNHdCttKHLJCMA",
  "key23": "5jwVjFPdVvmZnBFi8uVzd5PRr8Fq8AmF6M68gY6UQUF659Bq55ts3YSDkEWUovj5pBLQsBDqLkRge9BnBgB9D1tD",
  "key24": "4M7xmUNR5iUonzHMFhmVsWA5WCQHADu2WZDJDWmrgMfXLDKbGTdHaVtPCBUT9x6en3z5gan5fyGGYbgp64ERScms",
  "key25": "P9UkDZoQmhZjkjHHr8raWfPFu4ixNaxKmUaBTLNPULG5afML2Jw852HG8XpgqPeKxCHNaAGtiEk7oecw3eK6Ee9",
  "key26": "3kFeZp6NtBkWkCjLfsjLmdrsF9U34vEwZN7GRYN3TdcHHTZU7bGmKdmZVgVHmQQgKPu55QpZ2quduwvYfiYmo8Pb",
  "key27": "5nwmDtq4De94qapTsRewbEhhAvr43zPLzMn2qALLY3eyLM6AQepMhFvt8CkwfGnhgg46esUTNkBbE5HWYYwHTV9P",
  "key28": "2eqaxdYqfdhxEpJmdSdhdEChBiuL2fJscguFmm5HY9QnYd899y3AUcve5i7TmUq438k4gw6jfzuJGNqqDZrjyWcA",
  "key29": "3pHUHCA9qQmCCAsFtpB2j524krawiQBCLCVrGSHu4cYcfJMaJKMvUKAAX3DGrmSbtUu7RebR1nhPixoaZuk5ZXLv",
  "key30": "2SWPzynGXjRqVGegCAZyCw6yPX6Q284xYh8EXLeFoshcBnSEnb7qy2EqAS3Jy5h7P88cani9g6SxqL1V3uQA3pUm",
  "key31": "3n68Z5hPRBp7Uy2LHduYmW3ky9dxdjjHihZrR7X5JqmXgAyZZhrHF9mewe8nReXGWQZs4BH3xza2pJTpUgTyg4fd",
  "key32": "4tx9thDcRxqD3TsesubzryKXfzcdTv39QGedvZHDWtbcdynnEiL2fngKNCxonH57gdoVx172v22jYRwJEwjKWAQF",
  "key33": "3axaoCT7s5jpzA2HDrJqbtBuQpmTntMM7B4DsRc2S4fPoQcyhpJwcCTp73aKZvWVp5zv118L8KBFWKaJ5VotUKXS"
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
