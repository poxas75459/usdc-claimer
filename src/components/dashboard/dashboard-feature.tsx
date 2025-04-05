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
    "ku8hX1U2cZN5giXTthwaTUswUTsB94j7szvBhz2jhoWfSRLRsByNgGuHFvebFkrGAngBGreTrqJcbFDCJpv6UJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36w8pSFvxLjCbeqYNGKNhCaPNj2EXYQimyuTFuC1x74nVoPzheX3r5WTRuLvVbgmwFigzkxT5y6DVdV6BSHfqoPq",
  "key1": "3x9WFCbdFN5Aze9RMFYFfc2y5ouyrVTSwgZUsUEUGoa7pFyxhnc1b7wjy744AYa4LNY8oUrKG4Q6LUZLPgPGcEfT",
  "key2": "3zbVUBMhSgXyk8MfLXs8Re7wCmcPZrPDn6Nrd9VJF2Yekv6t5mcVRCdHJSbEAFpqHwv4LqLSwWziNDZKMNbSiALJ",
  "key3": "3zmfugX7g8d78bgV7YSjinQcyy6jfAe9JGBnr4CAwRXFCjRE8tYGwhom3GxqjbYeTk7c4J1GB9xi4qD1gqVdsrdP",
  "key4": "3MMufKr89tWi4dQSanxKju8HHwCvHgkjYdQwC1pDaa4qXezQDtN5nPwMYs4Lmhh8dEsW3Cb98LFx4KnuEyZBiXZH",
  "key5": "2KcRYNi9PPqeTNEcBMQwDA9kqjJRH7c1eyraxzetJbnSgPZ3eNvJDMJgfsLDXy4kj3ScQto5QKfPn4g67Ha9578k",
  "key6": "agy8vvseG6gZLPsUdhqBSgw1ftct5MNHQaHiCD8pFW2n1v8fQTvvbRpzoDQcvTtpGhq98fWrvLBM576xCpwJu2n",
  "key7": "4P9KogTP7gMQZYYeXR9LZdtdM3KgvUZHhY5WNcBzysvXT13z1GJT316T6nusFWDhnsyEeK3Ek77BSZWHDBWMojou",
  "key8": "BT7mcUcQG7JQ6ehfUoH53PK4QcbV2bXigSBQkLemJ7if66mvxaYQJUWdtKCV1stmXsaFJ8q1JBfEXWnhzRuJSCB",
  "key9": "5yuHnYgBNqYX2w779WJLGGdX6YmEUKgxyJEJNvw54JLMAUeA5WSnLMYxGzti9ZVNJs4DCuzhE1aCTUBCr7bykxeE",
  "key10": "3U1D5SPuMntqbNXhJ1GAoMgsBEqvvqASjn8RSD2c5WcHWbyq53ZQz5K6S5q7cFriPc3PsAxxUy79oGw28ojNntsa",
  "key11": "Rf9DAtFQqmSXqDo5Se97xGaAJ657tsSkfmrM68CszX4tUSbAMYfb8M3csCvLTSdLeb1rhHHKDDYkEB6HRVEBPbW",
  "key12": "4TYZAQPjRh4L12M6U9Px8ciaUjZZHLbKiP5dNDm8jHvQx7eEJhWUshcaTidbT98ZBFt4XzEzkAXZywQnWaFQknwh",
  "key13": "2Xiu1LDSeVzjas14uAGCnL2r6ATiupnF4ASnf7EFBAiVPV5ZtH4uGWFAtDJ8KQ2RFCj26GA7JFyPMLonZpwYZNg3",
  "key14": "B3Xavfx8ynVkeZojcV7AzzqNW9uJucFDafTpb2j8ZUbjSaiDDFzkvQC3sEG66DNzexCAyhakeYrFabyzwX9Dapf",
  "key15": "QEf7ZKR2TAkJzWTFHrTb4GiFgm9jffS8ZSq4y5SUB88w4WGVLuwPL2oJSW4NSn5Vw1cVxJfTNTU2YCEyUxAyJgW",
  "key16": "2dN2P8forVcYve8kwt4jgG2WMRAXmYEo5x2nnJyWkYDqJTUvPb7mFk1iZiXpq3YF3oBANNZTCMc8E93dnAAWsqaf",
  "key17": "QYYk4iptKWVxrn9gRubmkEH8QGH7VaLtrJFxzmARxfLo3HSPTfPPhLqzzCL4tw4tHneKAzRRdt7sdmx8wN5eZuQ",
  "key18": "54CL4t1yT2shR7jH9QKBBkdKhksqBucT1cqFE2jMaBb1t81i1Rw9U562QYzd911wNM65QG8v1mszNTjptV7fqwQp",
  "key19": "2umzjaxAk4g7LQV34dXWpAJ67Xe4f9VhuErjkASCQzEL2uXZzagzvWe1qqGA3aCj464pfiDw13LLsctdD4bF2e6R",
  "key20": "22NusYStCiLVuQconSgNp2vwXD7p3k9ikKH8AKUM11p8aufwHD5q9ep7wyNF6Ewd543GX16bbPu4cgWfzFG56Ye9",
  "key21": "Xtys7zSdLsPEVkHZx6mupQ9xaT3ecPQxLYsw1JuGn3SSqi6XvQs8ikfEUf9Gf2T74ReYd7oRVSanQceXpmwXo1g",
  "key22": "ztAQjVY4SNC1GzGjDgME2Uh3mhr3USBEn9nkQeLA7ts8tXzFUjsxeCgtrhPCnWSgbwBvTm2SssrJ6F6deED5Ba2",
  "key23": "2WyWXFdtJmPmwCPCz1hZ5dVWB21ZaYjYSRM6LMxXqiAk6WUzbEPEZsKnmA2tUaaunLsrTVRjRdm38iKNpA2AvKSv",
  "key24": "2xc61s8gDgyvTpwd5DZfKQ1t69SD38eXkKnfRXaytk4ekLRwFcW5pbZtqHhv3ih4kWJFuUxb8SMc4jNx21tjWJ6b",
  "key25": "smPxEqTL2ABBYNwc3pyMNVDc95xAnV4pm6evULYDw6Pm191Syk7KE293zjPYX9FFHLqn4wVrYxV4efQ4qniMmao",
  "key26": "2vUTtgEuCEQMKUjBoHLBadMFebBp5UMXPsLWmRmyFymPq2sfgtm5fFyJdcVyr4aVRwTFHM9gKdTCybdC3QuiwJLP",
  "key27": "4QqWmV3xDQRDGpUktARcbwGb7cSAo5at5V1fpQj9XTZpDZBuVo2RBaQv6Ehg1JRLAFvfoTLt9z94SGRSSnXzhUbo",
  "key28": "fD3SL8XPsJaADVC4RmmtKea1zboA3CeFRAQooD8aQRWanHRP992ZCh3eNR6FTrmGERzupmmEmH7jTXkmxSfpueE"
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
