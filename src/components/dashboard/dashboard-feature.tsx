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
    "4DDZikeurwZs2YHHQt9ke1s811V2ChTDbXssULPsMAGycVmJPCoHj8uWB9WZyvufsV2DeLXHhAfv7xJpo7Prdoor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661qWRdcPEo7ouakWXdDpv8k2hqmjtbL8A7xJTPwDn3Ab8AsxZYF9nq6wsYaBX8wYvEWvGmuYWggAmGEo8EVfRVP",
  "key1": "61p1yMVxBzBvY11oZ3YAK4kJ2ngZRUKX7oB1D4WRQuxY3yP3sPgZzJ8KuTvoi4jDXbpuJcdEkipEWVTfiK2D59JB",
  "key2": "3rTGawDTREncvPWnHbcxni6QxA7m3zBp9719dJLHcuk6zittB8nFucbvSzwvZyZxGx1jx2Sbch9g5eUvRqZZpLbM",
  "key3": "2nJx1qWD378NXT9qvFcPbFiSmDuiZLBfT34NP9xVwaYm17GqCHVKBEJJdHWLM6YPj5vuA3GETiMoDqMKg32ECB9M",
  "key4": "5FZ2nH3nd9eYxvUpDanviiMRWRJtfrh9Fn3HzLEoGoZWbpbnqCSQSUvgVJMKPJbw9ADBDvj8cLhWQMX67msMFBC3",
  "key5": "2aHPBKjFFqh8y1ZsQpZt2oi48NjPK5fSTyJdbrQ1X4X5HpMBVtRDfqoSK1dPYoAmAtUdTrL2etXbaEZkzoX7JBsZ",
  "key6": "oFpSyCvQnXtU9gqzyHWqzMBuyuCCz48gVuw6GWKfH4q3MXDwZTg7DAPJU4KozAGdEPsfmHJKpgsriFnKmSL7k8i",
  "key7": "4C5yDzyJQQehhR1e3gvm1AewZUkcpx3wPS7ZPtCFMRcibhUNqNRFijFJE464rbs8RLa7hRWnZ1FAoGygyfe1FKAN",
  "key8": "41tKqKYCfhgi5Bn8NN2FnHLyz9eE1wnNGKNg14ithEax7xdJCge1Cn3frtcFghTv8dwHgoaSmwNsUaAZWBB5icf3",
  "key9": "3qPeXdvNaVU1R2VTWMb7nPnptyDi91qPHAD7WTkT3xfag7HBGAmdLhaxZHaLAxTfqT2v9aWZEcMHnYT4wXGdS9tZ",
  "key10": "5raiBzCvgHyprdgscxrTHH5vReUL8QV6JpMhr3T25iGfKyJgQjJHgfEJPvgDXAG3UnBU3bzEp7B5hJ2EJBGJ17PQ",
  "key11": "eF2m4ggkzj3G8gAfMipqYFRRMVFz41Z5HUZVndCGp1JtaoZcgpNj3WCzWxtTN5tLYmXTrAfRDSHeSEq4fdZ6Y2x",
  "key12": "37sa5fdeuqYB8BBEPDdFqoSGjmqxHoteBJiW5YQvHaFxCSvrnZQZhzprymAF4ApmtHoMxsc8xa3VEeDwkFpHBS9B",
  "key13": "5NFEyd39Th2ksF5pBfERCLzq58DSkszHom2ZTdoeLZGonXNAYCWSBMKKeRPyPpZzVBhgmNGYcVLLoCh6HzLnPwJy",
  "key14": "5pjer6uLHb7TY5y25XcYSHb5LKKtXnVNEMsed8ZwJ9hGC7zyZ8hHKzghjyiX5oMSJ9kn75QA6kBQ3Gn9FDh7FZys",
  "key15": "nnMkgVsUYxat8Ctc94YbhHC2GjWUUTFMi7TjJMrvfVxqj5JXBMBYCMZETK26bnsQuzi1PLcFDjUn8t4ZUAz49k1",
  "key16": "54iJ4ezPkxk2SssctqHipDaDxqGEMHuhSgZJWSdwudTpTuM7D9fBaawERcQA2tGY2nUvbdyiPdoZERarCpc7wb7k",
  "key17": "58orbdBSgHv5Q6yBdbGovvEB37nP19wvLGv8FVw6GYTRs13LAJorTFUosMPUD52RKjYHipf6yHG4f4KjpPPr8kci",
  "key18": "5UsUawssGWpys3d57Njvq61sq7LsmMn1oTAN1hBBde1C66MzjUyB6VyVdKEHrfqfPeXUSxC2ti1AgkWTUy6CxHmq",
  "key19": "5mRZvgBD9Z2WDaS78mqLjM66kXiu3FnXF67StWBm5fq15dYR59dpMDnSaQVqiaMCN7QDfMjCcNcqWpPS2LcU8n8x",
  "key20": "5njSTjNzdJnubFoVfjePQCGaWRc6wVXY3EygoE8mUKdmqntuGTLE4s3Saby6FvhUdAPsG1UvzxxtycjEEU34hF5G",
  "key21": "4vsSv782dpWTtmKkSoc14MbC321vSUb75oaWP2c9CPG2dBVLjywWKDqZAgEgrcA9EJFwhEjTH6wvjnQFq9HNmugR",
  "key22": "4Lk9SXRx61em7XLyHtLxZSKbAJUH8nCJGH31CikRsRoc5RUezXkuwZ6T2M8sYzu18HyzHgDune3ZsT8x2kUYfFmQ",
  "key23": "1ox9EYKVavmnY45zHYtn2DohbKsiCpk43mLVfYfq3X6bYnNZtJDHh4pJzojMSTEKqfgyPvDHNpNSYjcBdtSWaEx",
  "key24": "5xCEf4jGKtGkW8KJ7qKjMyn9bdx5yJmjKE9bjiCVAdKjPZq8h8FjWiGoSyqFzKby56AnkG4cn7vuum2YMfPToQqf",
  "key25": "2nSGccq7c3GzZ3RQUxacmZqTo3tzGb4u9vDhQw2RBpk2ak7myvXbC3K5uBH7Kvo3uuV6hmd2ZvS5D1F7r4i2uuvn"
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
