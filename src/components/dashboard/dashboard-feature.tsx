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
    "2vraNpMwHtnQbC4instqwiZUENJrqRjz31qYcicK8LoNFE5PFPAixpLYjhmH2mGnccrJfHq4hsX8b9YfZr4gTXGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66sSnk4vNa1d5ZfpQdJnxd3HEDaXMiCNc4oGKWN5jJYspcAitmyhopp32ajJvMpzAU92XGSNRcYSo94thoHwcxkK",
  "key1": "4iHfqr4d4wCh3EuVz7QtETxeNfgJs8PFHfcd1rhXbif3XUwroseEUCk4FMMTfjzSYD5VFFccU3kt5CyYaaRc41zt",
  "key2": "31yJdEXoUL6Cvf6zDVe97U79YHr72BE5p57q1Ho3Dq3BjhY9FpdQ8sVEtnYuYLa2MkHGtNvJdxPNAB1ugJebqnER",
  "key3": "31gNDR8SdC2ZxPsxoQLmsKuxtfa8zKgnwW3jBbrRcytsbjyMP7MVkcNpboP5JnVytY99fmZ5yJujU38oBr94Vcvd",
  "key4": "2ijQ2qKQSY5tjrN3MXK5vtfgUQxJBxLAGRywy3Lz5yz3CWfftW8tzkDRjvG5T5YCuc4vn7TAUcHpsW6kWnCRDfJw",
  "key5": "yYNgWndYDUTQRiXBGcatf4iUhLB7caAkusWt5spMEoDdeHTqcBKp6UoPP2qYrBYq5ERZDnK8Q8pVYwHHzUZTEAQ",
  "key6": "54HFUbLaeGQrD94VDa6PrvasZW5CQVrNvb68MpuKSzpyscpkLWgXo3fJSXvdtgMMgdG8dGMCuNjzLgcM6MCGGCgo",
  "key7": "2mR6kz1fyYjh8r39MTjSgb3Qg4VAWwi3tjchEHr2EWhSCHgQBQJixUe5vuUSnE1vKqren7cQ2v4Gvnxnqtx9ZQQj",
  "key8": "3F3qt8pfzYg65DG9VJkp7xrao4Zcyfeep4KzaMedGgRFnKJ41UtqTtZuHvX17zG7hgW47MpPujf9bzpwPeHmWrm6",
  "key9": "5TqGm4RpXf6PZ64AaxBvNGSLdVRechytdEjJWk3NLghtUnYqZ5mRbBj8nnA23RqvEmw7qP9BDrLLCxVT9eDFLFZp",
  "key10": "4B5EQR6WUFa8GjuP1i4etBhuxAk6WyT8XrDvDGmjZxKjWNxAAANowmxrBZgtUozkAwVo3xjctVuv7C7F5sa1cErZ",
  "key11": "3N3hDKWe7sHJw49yzbTdJw2q29StNGvVUo53wFRq5w35xmq242YVAwQGAWcfaCoCFK98kqgRMdKztjdjq93i2kyx",
  "key12": "Spo7A4nmCs6mA7LGo5TezkLqcfkM3JhRNNYebmdDx5dYiyJUvs3MghpB39H1RMeKbXm3SnkSdUh9ysJ1NDR1GK3",
  "key13": "52tn7QwAegdiqZhB4MXHT6T4qXo6Schj9xjjRnuGAuLHsG4Yr3XcgL4JWKSY7rTk54VMytXtG1DJpCu3YEVkGxJc",
  "key14": "4yp6JXoxGULu1UgxNbyYHywY8TTmqfVv5jeZWehfDeTsmFgeEsmQ91RacTnAaV3PP8GpwKR77iqyXRBXM6HT7HZx",
  "key15": "3XGkSCJm8AFUy2dpLcjuH4Lt1fbTowkfWUECsxiKgn1MrfgjdqzUfs6T3NSiA5bZSZLnKxqtxgTTdEM9JfQC6mhD",
  "key16": "pKC3tKhv6SXoXh6Bs5d1m5hH2AQzaHv7TK62tY5RagYXvxCEhY612CHdYBsN2L3W7qmyfMas3kbbphZJfaFMYsY",
  "key17": "4T1GeLQVuGaQ2KFnmGQxQMtDSya93HHqk4cdZNQwsYCuhRBER4LuVENDmxvqEoccgr6dkKJhTSyahkcMcxHDHG2R",
  "key18": "67DZ3iMeJdJbGDge9awkymZnB98iE9msxaQuwRMRBH2CSLk2a2SCfFUzyXGqWmxtgAN5CGMfcL173T2LoMFqkPoZ",
  "key19": "8xih6Y8XBwKxSJZa7PtbjYnZJsmxoGvWUyyNYyj3vwdmCFyefMn45243xdffzSs82W8PxLKUgzCZvtpexokKyJ9",
  "key20": "5dSuNMbt6WM87vQ3pyo6XebbVdH8t4HDqjL724i8twDZ49Ewrt7pv7rTiUrjnwptuESnU6nC5rk96xAxV7UdTi78",
  "key21": "5s7pFfVjfTQfoKUjeFje5YDt6GriksJmeymS3p1E3NWm4KnR1aQKMYorC3ib23J9qPk1A88zsBYjwCKdqbggwasg",
  "key22": "53g8uoLwSiWsAejPHZVp7Kf9PZgo5Ksij15RcoV5Ya5KFe1EiBYWVFcB8EygHpa8DqWkSvSQity1YJRfiHySm21i",
  "key23": "2GDYngY84NsqwaBHKHaFuzU6PAWzP2ccTgEDzDh3VZacKVyZH28wewUaQJv1AyV4XEZTszCG5o4PYWkDhzZLVfjG",
  "key24": "464WtS8Ua6GfCXzwf4mWvcMX4tcM7TkoirjXRnnHrd5u8196fXKCdCjFD8dXsFewZAwj6DpmorgfyMnDWeo5W7X9",
  "key25": "dpwFsybsHpAGfNRNMzGa5uCsvHxTrV1wpDtSvk4ZbGEi6uXhoH4aLj9qPMNPxKnMfgCBy1mCkZ1Vne3KTUsP1io"
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
