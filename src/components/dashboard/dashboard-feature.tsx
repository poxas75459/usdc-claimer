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
    "2PZzajEQyvCN4MfBKtjbXiztX8ncYAnNDdoSLtrx7ihdwJ8GrzrWQTLzCRL14ZaxpBn4hKSs1BhAJmhLsYyREo9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iDtH6cKPE2cS9X5ddv6JHjMiANiuD32pnHeYq6zqQKAQuhQMkWRpvXy67oXRncVPfCWG9QtUPTLVFUiFgnkxSPu",
  "key1": "V1UpeBf88LfkF7r57GHEeYE1zN7jp67t5kYX66N4SSVfKi8zyZD7JBcVVHTsvrG89u6D6WVfSxVMieNEgv1qccy",
  "key2": "2ve5NMen8tqm7bFtNHTb6CQERUGDFrHyoibP6cR6HjKgUUZNPZ62wDeuiPRxaf39D8Nmp7d4QGYzN6KVf3p6MqZ3",
  "key3": "5wmrw1fZMi4SYFZgXEScrFHjJ83dDPXpq5NskaSeZRRiCqMzq4y7qSNjqkc5mzyyAQgZKTC4NLJ3dwQ6AM5P4rQj",
  "key4": "5HMxSJUUSQizvSvF87L4pf6GgoGviVbuuwDq2dGZ1iYtKVj6DA96sKBCfn5gVYdqTRYYEmAFmXaAUNV7CCLh885C",
  "key5": "wt2YvBCt5YHsFZdbU7cv8V3hLZtMuDPDzgPvjyDH6U5ZKYSnZZNxpg2DvfUmkkfkcRx1hPzvTP1E8Z4Z546YP75",
  "key6": "42AhR75kkFB62b2ysRp6hyHXE8yBPKprgU1hifDbVEfFUK7YrVa2YXdgub8eeN6W27vXnoCcqmAZ6Hse2rmMtvhK",
  "key7": "47jcmSUvs1UHwY9LPy11VSPkehxHu7YkUh2a5zYVpbfRee5J8w6DUxN3YMZESuq8Tz1zhXT3yyPYNcaHTnXZxxJA",
  "key8": "3a7L5ZsrtjsCuBx77sUFp9aMfZ7dHPT4NoCPcc33weSYVKN9Ptg9Vv57GBoN8ujrK4fQXzP99TMpEpLxMZsMXBPq",
  "key9": "564F7Dq4nYYHErY5Cq5cmnWNscygZhc6EdTmeFRh7M9tovMk9Nh4cph997ctU2oyDQ64dHmE1jUPo6tQjEE5BVbq",
  "key10": "4ybbU2XFVBnaM4RazxbVAJrJyMQgkg33LhiGuX9CS9d5cWonjNYdGp5zxp7Rqr2u9WmBCXeUfUaFPwAxNUwuN5wa",
  "key11": "3XhDy9HCo9nPYVu1SQN8MCTsjei7wdguRMgThWqTzLgebY4rxoWDszy5pRynXXwRYMjmz8vM1QfihxwgMtGHqcmg",
  "key12": "4Tsv8JkoZ2WnBML7sbnTpgA1Bnk3QEhrk1LAvpPesMwVzuNCCGzuw24j38uRXDYa26b9HyuuWYUFXJPBobz8PLR7",
  "key13": "fugCQ4NdH7xLWqpbUYv8XKdXjRY9XhehFUjXHGmtPeDdTpDZ44PMn4NAHDGrzteGiN62fGVCtTqf1Jn8GH86kDB",
  "key14": "2ab2sFqwbQfViCZsuRPvvhorEroYbKDVNnieNE6MW6oh9Ybx1imS44Fn4GcRcjQmW78VPchRVg7TM9oUbjoQSv6t",
  "key15": "2nJUqRv7YAwV8q72gfJvYM2q7zuknMTUxUvkwX5XpzdZ2Ripvvp2mFxxZbg8R6h5kwCdnXphJ3g9eNbpD1PD1sMy",
  "key16": "vuG7gougKhEuMJ3zHXSiQ9r6xGtFHPSrpQdXJS81kzGEszWbeEwjpggNK7yTtCybK6dGeXYhk4MVyrxmnS1TEmN",
  "key17": "5ou6P2b3hwvAYm2E7cw2jX2LRU541nVvua3UTBFrBWEGPYTT5oeWy2f1MaK189wugNAXnwtZqRPxVkFjDVFNk51A",
  "key18": "67RVK6kTvoQphy5U2TKVoaC4LWo5VQSkWoidZJ14nL25JRRdCpwRS1drZcTDt2NE2dFGHkvSbNdHAvrkMT7rgtuW",
  "key19": "431HQSFdSRT2WMWW2hzBJYhvR9mRBSpXhuafz2RW8esiouauvkUHcszfjNzLg9BHM52bYY4wRDvmA4pP6qEJokRt",
  "key20": "4p1cicqj1sJaBzDzMiGJmL8MccFbMz7tKe2A7oGN1ZYNpKwTmkJk54RoVGPEJwUXuMPaCvMrHABEnFFx9DaVR3wX",
  "key21": "2ZdMc79cqsQu2ConXshK7eoBzGuPesiLNFk7151sq25uFCCcDMPP1JkvFEpPcgUaeTQAyFHa9zUo3Vasn4133q3j",
  "key22": "3gkdRnznaXmTj24xFwnaKpP5yw8dkRpgrafhubQPHsM1NCtf9uwzQwdaQKPYcHUYzFHvrv4sLgNnvNJGiDpExApr",
  "key23": "ujWx7tukSBqho348ifkwocpJQQU3Wxz4dQuLJKeHVU65Fgwzg1N6mcA3HSej8RSbm33E95g9AHJwhARCXGVGeR8",
  "key24": "5QoMkLvcPCfy5GUHV3AN4q92R8uhW9MQLj2n3E5iuvb4aA3GKTBikvZ45j2uMFcgjzvWAMNCpWJ5XqAsni52eRne",
  "key25": "53TmNpKv3udFn4yU8dVrkYhox8GoYnQEA4N2jTxDPs6TCx8VWYh6dGifusF3aEuyYCuCxhj9HTU4DtghhaVPJeKA",
  "key26": "sL4deAPDLLDLAmw44PXSokHmutSfQYbqRAh9FWS93ANaSQBLwiuQVja6oRJK6fWKX54V5MNp14DGcvotvuS7Zup",
  "key27": "5TLg6S4T81AQQh4c8NNFLS2xRDHxeQgSVJRw7CDt84m8ACscHFEsBYkvStTE9NpHQFSk4WgA2t63RJK1Jo3KCXaD",
  "key28": "QgyoNJmAjSZA3gnUcNHyG4veEBhPxNt8kkfpAmHb1o8XEhx87zpunBAMhwULoGgU8eEtM3p6BCjuuxMzw7gs1kf",
  "key29": "3hAsnWGtD2FhXYTR3cfq72CfsgvgcqwazA92WrT6BQA8RF3LMpKpB6uGiTYZ1mFcyf2RXTHenBDMye9qV12naQk6",
  "key30": "4ghhtLJjUYM91psotJiPeokeS5Zwj8RbygbUnZZ4jPxW2VwwqxduMLmXaHiWFPHDgQ8KWTmT51pqPA3D5GZELzip",
  "key31": "25tancHHUF2tsFN5k9nGe22M16hwB2ac8etZaJsFDeAdSB7MbtApWcfzJ3qu6ojGMpBCdumrhfkL9MmpKRobvFqE",
  "key32": "7D1jTssAzi3KJXJSAegZJeg2QBEkDzQYpgNWN8MdcZ5YaAzNgC92s5UN9WfmcRHvmjytQdqufprN46uCioRUkF1",
  "key33": "2WYo1KWw169xF3k9L4PBWDFALGNmnvUWvr7UYHsDQC85EQ9y5Q5HdhbzcZ4qf1Q42M1V3mwFUz6EPSo5N4PaDcfP",
  "key34": "4GoV6oT9MFMHxPHoAHmKuF5yedXiQL36nLeexhDSqVLZC3f4qNedLEb6FVCmSGTz5hvhuYCFPWzB6FhTTbCnFDjZ",
  "key35": "4jCiDy4x6BMjmZPAPvpJzj7bHkSAMc3ki9V9s1SizKmbJ9MeE1QXX9Qp9qdcXN7qS36JDvgqxYJsvTYu9Djqn9rT",
  "key36": "3j1XHtD6xNcHq63WDRrvGktJC6Q5rtkUJmbiHBeoMj9DecAZ1cDQ1n6ZCEUiBbhBEmKLVsPdSxrFz7X69BtkcVpz",
  "key37": "4pssgxFKbqvVQk8K6iN6TrzMvhsNP4jSQGJgxnME62FByGg1KwwiYNsXe438ohgFdeR71VphrNGS7r3jtr1KKs5W",
  "key38": "5uXTdwFFSpBaKGEwUuQvAjqHm2UFy2swa6VaFxcv6rMkab2iejcHeMMK64eKCK4wzwgxaHN7a1aVKt1hvFawnnkH",
  "key39": "5e7Yv3pPnzebFW9kCj4vMzr3ajJqCr37Lv5iSFg5NoRYnxEW8Z3wViZFMsaYV39sbEpkoJu2Lk2msK8NTQyccv3s",
  "key40": "4wQXFCyjoSX3JSo46Q6YhEpoSgYr4vUpLsDFdvy5H5HJTFV73Vef2wNGc42g3GRTksC14MgqagdR9bMCeiqHAGyt",
  "key41": "fmJEPBz6KhMJcvatwkk2T4oXShAuxHgpXfA7EEEj4co8oU5mDEtLgL9z5uA5PR5JeNDEcMBymW14hhJWM9LkBmz",
  "key42": "4Ni2jAwRhikLf6sQvt3FthMDgk34TAuuq3GcQ4W2Zf3nLstJi1eLAK4LYBqMZucEzEScZkjcT8A9JBp1zT6GpAz6",
  "key43": "3jmupKvH6QmqdEkhqY1n5fjN3nCj32cVaTMartt1v2EAxkBHMby163S9naDVhFRtNNQgWi2BTAsVqvT7KkXwBt78",
  "key44": "3ywsqRa3ApfhbmuGLAJ9boeduputgAuuP7qFypsqkmaxToZSWEv3oJKET7VaGt2SGBBQ88oKMnr9iM7fcmhnRRGN"
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
