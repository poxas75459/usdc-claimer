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
    "41A3GZg8i32Dipka7XVFGRqS9FEcDLC3MY3sg4YrHkCLNo3GwT8eXHbh9tdJQ8HYwkgA5EX8TtB1ECe1pze2Epbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FCudCEqzSMjv8ooiXktTXw5UVzzJRjYbnaTisuSNFezYSFfqKsTYg9PCF6HKfhpPqxePFPBRDU1ChYuagkcpGr",
  "key1": "JEiNvaUics1ZkW2Z7NK3QY8EWNLYKntAocEtxisSsffB3NJn6JTKNC8jGQXpStKGkNUgcRuJ1qXi5nkHLm6QKxr",
  "key2": "27c4PBVzpr4EW6VZc4nCgibMGxY9kiVVeZRnFrxzJgffTgeWrdZrBaJstkzXZMAuGrwVrZAc7FQyaczBfnwy8LRV",
  "key3": "663JkS7VvBx1Q8ADqz7hq3pSotTkd65xirafN5gghFnre5AExq3Qf4HrMcVgJPUo3SCRm4c7ebCvxGd9zyWv2fmZ",
  "key4": "2Zhzfbm3gtDLTju7WcWN231Ljo4ckSg7NNGeSrTYoSfXqtivbDYQnEH1EDFhFrAKW8bEdWfEFCnW68dMUWuUc5at",
  "key5": "4rXsF2A2unCf7tws3TgR4RKcTTpjWxTewaTZzv5ftGbH3ZqKuEX5CBsMrKrz3tSSDu1L36ffMwuMYPwEKjKUpF6C",
  "key6": "4qzGATpGsK4pWvN3frBXvZbo1YEH9KycAgcDeo3tV9sSdvHuC6j4UudXio1gMTU31JfpBuEw7c44M1Xy79EBgmnW",
  "key7": "4U2b9SzRkxk9vKEB2ptS48hf2L4Khbjk3cbUga93Y5DeHzzSpKiAUiRWXH1J2ZqhygMLgZpXJ7V72HsU9Y3cjoq5",
  "key8": "3CthoWio9i3DwE3nLaUvvMvTNUkv3W6Cte2E9jK6M8AsMhokJkxkGhacvXYzbRQFY2PmP2FCnxzi24HHk2i3sJEK",
  "key9": "ZFm67YZP6Q9wYBYpWZBPVW8ikQ4EsLsw5yyMzjaobqTqPsFjuWEcZQZq4scZdMhH5vaZ8pp9N76VgZvhQLVBJER",
  "key10": "2AH9KziLbx3T2UQosBCyd7SkzZ7ntx7qLsuoUHbVmtmSkUBpuR5xqwYfy9mXDsjZ8iQbqPZMNYiBLbPRAYYQLBgo",
  "key11": "4cRofiJona9AMrEC5o2XEjwqcRJc5xoecyL4AF5EpkUKgBd9SsMRECdJZ6GAgGv9DJGKw8XctoYXxf6LP9PSUYgV",
  "key12": "5BeutddRnUz7wSyDNegSsrotBRth5busvjKMBDEqkAZLKzYq8bubfL3sKWPRv8kxA8mErqyusfxdqf4sfahXHyXF",
  "key13": "BXMMZcgEhHXHZv5zbjVe2U44w5CaHTvGsQf9adGXSgRydVw9SgehUN39Bzs96i9YGGAQwmA98MU6kqr9jta8BVr",
  "key14": "3DsnMLqHzRBmmgDGssaBiUA6x9YzDubedxeryKMx3jXWTMsCMw4fCFJ9ThiXz7rR1KdjsuXcNJMSZxFu3kXqHoHi",
  "key15": "5idjD6Wd2f99MdNvzGFuYY2nq1XWpq6q76q8Kby47NAR3B7ACNjSXu5xVMSrmooqaXeE17CgwnJLi2atV4VJ7vyc",
  "key16": "3ub2iwx7UdXnaiKE3LZrP5EuQTyTeM1B7TEzJydT7ZvPXXSXTDwfL7VYmQGYzbNsp5FkqevxEazCzV5XmeDRkfih",
  "key17": "Te7TPmhwxW3JiArtV3543xdUrtfcRKsQLYTQuMgrMZRum5PD5m94UcvDjek2tn6SQFXDYLd2tp7bpRXzrsZnx5B",
  "key18": "5XNgdWFwTvz3PFehME38aQD3bGfHYKp4AWfpA5ddnJGL861Q7fT2T7d8x2xxoPSMUU52UcBV8YpsPu4NaP8ia6se",
  "key19": "3DbEQepgtz7JyBeayz4hVMYd9QtqAiSuuJ2khv78qktgEHrZ2XtXsmksCnYKX6qXAVBQdn2XFEP4EXrbWvY1Jeh6",
  "key20": "47WdwEnDKtHpF4hUmeMZ4av8HH71aT7oqFbLej1pQsreMi6cosrgJrtsewnNo9AeqaFg15eXTSpZzWquyWj3Zj8w",
  "key21": "5p1SJkMF5DTjgShUhhhN4hUepBEga7Zi2L484EpgrcFp6mFAn5akhnXgqoaKzHASHQQQo2s2mX5dae1Q2rCGYQ8H",
  "key22": "kdCbCRVpAGiNGYVPMY8e8VPKLkjB1T3VKHXg6dGpCdBvLuQVvS482AtDq33AqzPxtXQCRAaVnSBWDquasje3SkW",
  "key23": "3C3LDA9t7bhnFLZmLPq6TRCAaQYynif1be7SdG4s7WbNuPeercMq6Rb6JXvy8YykbqV9Rm5PcVTeJmFXSbDeiRBL",
  "key24": "23oNWToV7qRvPn4vf2YDg5UTLHZTn5e33jbW35RDnVMWo6cU6sPTghPCXLUMehEdgdUZSzzujJFLMw1bCEiXPUUr",
  "key25": "3j2SK3C53okJs3PfhkXVBiJtGHSKDjyypVPofjJDmV5afGW6F9AREkt7pNvT43P62hVFmDuVvuUyy2wNX3AVA525",
  "key26": "3uhuNMsphzE5LfwkoEJrfiZHSQn9TVdwNRqPVZsTynDPvUXe4PKrjoLhYrqo3buxcjKskfxX7xgfdkFPCRFzYuFV",
  "key27": "52R6kqcHpw8rwvJv4gJGZNsdcgNJ7wgN7T8MbQ6SaCGHrPA5gHgB3KqiH4C5bHm8YJG6zhj3XFAypwojAeT1BNMb",
  "key28": "5Q8jWC3igS93u9LAR6QwQx5tnDfV3KETJDrwV75Jc6SrV5otxPhbB3cEP6eNeLuJcx1mkTxGwFJpb765hyeW4SZR",
  "key29": "62qjcsezTX5PK6UuVdVoZCkVvFR9z6PrKWpGaw4t9c1KEq5ASwd6Lc9Sk39WyZ7ckdufbosayVTrp5cxmx61QMzK",
  "key30": "2FAb6KCiJH5M4S1djDJ2hAL2pD21EqoHkUTD9L5yGU8SCCVRjw6eHak6aq12gTYXUMP6DXvYvJGrgw8vQarKAfis",
  "key31": "3NVwyVWon5kT8SXuzuWew16V4upR61ayKhCK1CfGfa1PLgGvW868TvWK7yjHMhRVfiQ9CYL6ZF5DA9CzekHxeLBL",
  "key32": "HrvR1z3e2JrzDPqenXsPuGpMuYNf6TS9SxtkkgGreVH9jK1xSvNGqi7PTKdwb4EWdCUvoXhddXvVjpxagrC8ar5",
  "key33": "2HrcsKyMcLBJj8i1yuWKo9xxUNDMR5RSaitsztHRBe13UBXDDqMZwn1xxmWcaMYgc85TugMUsjm7CwsDZuihaX9E",
  "key34": "2ET1DjmeTXtb1vCPHHqceBmDMMULKEogwxPojPViH1sQ8oj4jDkg4aTUuKp6KAZfjrzxpmFihwvFq5JH6Pe9suLS",
  "key35": "2NQZb3uYHLnTuRcEF6pcEWMiTacAZNGYRUGudvybJuFBj1rpGpY1ZsANUWQ7mzqTCz7vBF78APkFtfZMhTqW35MN",
  "key36": "2qB1snzjS4zHFpKezS6QcfDt9FpKXrv9bkBymzAWUnbJw9A8d9QmihRMuHC9zpA8q5V7YKpY6ysogEWeFpF6t4iH",
  "key37": "Bb6NDLNSGhFyrffDNwj8SsKJNKi3MokEaavQPtzWm9U7JFDCeiDrx1KW9MBEjoRS5yGZzhhnZvFPnRAASuArNgW",
  "key38": "4rf8JhuCkJqB2szpW3ngvQcTZxv54HtX73Q6Bhbp1RiXyV6NC4BPHa5uDK6jDgmw85SS1S1m4wf89oYE52Mca7NJ",
  "key39": "2sKFvTGSxN5smob62x7eKuRdMXYzAMLakkiCvBYbCfW8rSjNu4WR75bthQQMofDMrJmE5hFq4HMwMFwe8ejNcu6r",
  "key40": "48oFeJR2iVWuLKn7hZTZe5oavD8KRGgCeKw2SfGszdrUKkrbz3by73vrRycami2CxtuccEzUUmHpAbXi6BobDRY8",
  "key41": "3HviF6zaeb8xMoXsbwoSkE8x4q3NuxysCm8cSPDF9uSDCCQaAA47LBEmm8ysyteEzTDLX717RttqX2th8tEemWA2",
  "key42": "5ksYkHhNo7uA5gwhjubF4tb6pynfV9Hvadw5FD4kKW2UsmEYpLzRLWJnUt1F8WR9xSneKKaQYbVoz2FCMJYo4Tqh",
  "key43": "3Jmai8QcmJXqxSEErs7hbApqX5y4A4kX5qTJEJx47pgux53pwpNuQPPCSPShvMHiP6biX6h1hDXQ2XdxPNZ3RfZZ"
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
