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
    "3Rrmki85gs6k1wMMBTRcGxbFVGu8TL2CURxXtc5xCA62YXG43JG5HGx82nUJdvuCJNQdUhuPW4zhz8QgmAcWvp9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YmDVF6Jnh2ohJJrrJRUdPhv3W7Qx4sFCJTQK4ZzHoDXoMuKUbmYT7YpwBqFLnJP93YXCVHofcz4qbpTmCXkUuhj",
  "key1": "4b3zPH7abME6UBEiV5PTN3Nit2W7NkDrT4JFw1ncbYDFv3P9gD6g3Vupt54PJN7CCTRQJ8h63qWJzMtVYp9Pn24h",
  "key2": "x8MJJGEqC56kzyL5FtDxRLyuCkz21miF5cAWykJPGbGWBoYtcPrAsFKn1BHHyEWjZFKwh4UmT15FDj9CVfLQ8di",
  "key3": "bSTg2xjmFd5QUyVrp4ATghZukwCSBwK1iiCGfj9fdQYuxyJLyKTrREPGcJr5wjzZoXBsc2nC2drSoGiSkgWGQq7",
  "key4": "BbGJvKz2Ds74Rta9pREtFFpam9vtVuZyDfNyeyjbE5CbXyzfhd3ykHy8MtQUUgQAdSX69pVikVsLm76DJzjcpKf",
  "key5": "xfkNwRGeiCb5u7PmqgcSxSueB1AVbVEi1kqeZhAas5CxknrtSS9SKyyVpWMU7nDrEBFJFhdWXrV53VSNCwqodwo",
  "key6": "5uQEimjXpVtxM1CQfLzZ6m7bq5wHn3wPzDcjh5uULXrGtq6DFjAg2FwLSJU1JDFSQcSxtjxYnEnyYTwbEdhEj56C",
  "key7": "3Swv8Q9Zrs1MvN3t2j9ZaC8NjU9ZXvsiQtJUFsXKAPdzwtXZeabQNkyzXm7VKUGw53M9AQSkjC5p6hEGJgu66UaR",
  "key8": "2m79SBgEA9qfShCsL9Y5MntaAAhMR2Xt8YtSbSaiP1zndtucBN6znGQJqjkfyug6j4WW1b1FiAFYB9ArXxy4qvtj",
  "key9": "XBHgL6eftHPVEJ6iGkWDeRqNbSm46k6XskmCw73yyDicCeAy68VbQRG5LrcHx4nCYErbADRyCmvp6w7gpdcSamu",
  "key10": "3GHZMEh5z61wFfWQzkCyJrMTeq9N8WAqVRtn7czcVYvJyVHHhevKyqHX9Xg46iA7TavKrJjdsFjGwEDZmP6BPTp8",
  "key11": "2uz6BsaHKvabTuN3oz2cqn92frnqXvPrvyBgGbV6edZ6TN8zjnWZHFqr84pkMvTX7U1NCziiGtvMCUdGJyeDiYya",
  "key12": "4hofgLbTm9o3h1R2g6f2jKU8v1CH9EqJGmjp8tzc882HdWW53P7BuQvYq6jKSedou4QbjsZ5w6cesg39EqJ2j3AH",
  "key13": "4Vxj5VE7SeDEtTjewS7ZVwTCVDzAEY7e74VkHnGShGyiSmKeieodLkbugeV7pLLM7SDd9Dr3f6ZjqbNhz6mX8EtQ",
  "key14": "5KSR9ZyyzpcpsiBh7c7ckqSYyvvu8JfFtTajBhbWcLhdTFsTHtEsfShieEnJL6cSSaQniaW5FaWvf1qRC2iVAceE",
  "key15": "3BiYQQPSBzwfSZFe6K8P1eoK3zEoQF971DVFW5Eunx8doqYxgf1hJnFnm3fv8tdz6aqLJnSP8NiRHffHmszFpnZ3",
  "key16": "3TRsq3wWidoh7wC1EkymhftaYSSjbEfk6Hk98czVUHLZjuiPKLxNhdewx8nFLvEgiT2RLVaJhGF5LTGaR1YG2KCP",
  "key17": "3m3tsKdGgrS1JtXakUPL8yA4VEgTiVbgp79AazWWAvh2CsFP4WEaRzrcfS18Yrxh5uBDaK9Y3eJzfVH9d2PbKwt4",
  "key18": "31pRaxUzWkk5Gx5zoHsed4e1JdB71pfuPGqd4yvxPTRbf2ueFRvTXEzRKr6vEPGzYgT45LbrgjrauGMSpy96Vjzk",
  "key19": "2fmcM6EPEZrRhp57StUJiDfwbpWWpFTYuHVjx5HczVmwx7KjDDcqjLLQMyEK8VahF5T7unZVJQNjd6xScStggrtf",
  "key20": "5NKTQGfWNvDCkDia5E2LCR9KFLYc5DAf1yrXKNzdJgj16pFFjak8vC72RGUg77SQbEZhqtJZNftyWtP8zcX63tsV",
  "key21": "5SKSnq6DGTZE1e2arpkHSERJvw76XkuTA6dZuXsT9VHd8AkmWQgcVqJ6o86rE34nBzN3Ude3oz6yo7nV1UUknVZZ",
  "key22": "5WhwJ5M9We3qNfqUitW77Jz6LsnULRtSdW36oQoDN1rqmKQQBxPNJsWtsQQAJBGiS1vc4qhPMZVonLgDnohD6tZC",
  "key23": "3gZY59tCNfmUGaD5v9aP6zSWfQDaCD4LKRwCGTBPmQn8GzoMpCzn5pCc3DtaYtRxWpnzcmfncKkzpVrHMMpNxYHr",
  "key24": "2XBvSPNUbWt7kSU85eDA8K3pnovFWBZvzHZnw22wuGuUjsLVBDvrP3XaumhpWTTBJqf9N8YpbKFHuaGHikGs6Bmy",
  "key25": "9mqdGLNbzAWTJje29KBpNFpU11Hp1K7XeXYAXuMQNGwX6cs6s6a1dKojyDcKfKBD6WBMujKyD28aH9D4JDZnx1Q",
  "key26": "44WE8DkTuAxonGGLJ6as7JaHbPD4FeKVS8AYBnaKrNsv6qT6MbKE2Xbpczr97qNHSR65bNvfP5FEibQKnXc3Tmj8"
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
