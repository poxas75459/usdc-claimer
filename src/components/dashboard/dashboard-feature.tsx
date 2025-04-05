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
    "neYMeouFuCqy5CkUV1NdTb2EpuT2Lz8dzd1inGZDMRGBpH7DCG7osbmWj8DrbNqijAd1tJR3jetc5tTxiPFhrad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CDbzCzf995gtoQ1Np9TCD4thguFFnrgE8QAT7N6AKjpeSP82yGQGS4hfUdw1BgHTDA9UbdS5obs8WVuADjrJqRR",
  "key1": "3ErTGbNhpMYa5YpiQqDx4NtxpSU1CbbKx51sANBQMQsVeYXG5Z8RaiE9kK4Hnua6GUKxYJRd4bwV7FZ1AchmRki",
  "key2": "3vzHC3agAjQUoufPPej7yN7ma1bYwCcE81zonJa4FKkDtPBB5gupwocRkoFK4gxpophiht7bXFkNgM2ZaqBAnFhw",
  "key3": "3rV8SbvDsYW5qXSsmuYbNEN8JyQ6yWzHjeiexwrVUS5mdiKqBPNX2FKzHsDpF3ZEuS4MfQCzirvq4FZAcsNq1LfV",
  "key4": "65Jroeito6CHrPppevVfy793Kmj7aNm7G7ohd2KaNtnvkdsZM4uTH7Q8D9zQYXsRWeURpmXajmhiVFZu2CFt9u4B",
  "key5": "4q1mJLsVzipHGEZy12FFsSpSJt3YvKh3D4bbDMYuRDuA4a536GQuuydHvuJNgaVPbmSCG8mSQeJEhAHhu55ekSmV",
  "key6": "4tZs28xyPECwJ61cPz9Z2CdcXzVnTbeTArV5mckwij7LFt4qjxsA5Xz1Z9XufgbL8VuauReWySZVkfAQSxotJbXG",
  "key7": "4E5bF9j8oe5MWExVvjDRmMrZPyjM3PXGVPKqwPdbtkx5xGAs2Ho3eEppvXVJRV5hh99trJ8e6o6L7MWYckxHQhD4",
  "key8": "Hogy46YNnbpuPQoHKPd9xvTWkbRwT8E6sFxCxVREmme7c5YeFbMst4jmwVFJA52ZzddEsdhVbHQjhs5R4WyCvLL",
  "key9": "4mnGCxMCY8XgjedHer3UB3sDUvnhQjYppVZzCHx6v7TxJBt4c79Nf33q6Y6EzRUuNk1qT6SDtwuUiCtxXzPrRtBe",
  "key10": "3NFPCX9atpG82AUf1wX9UJVqcj6uXaL3DwbtVf9TRiFNJabpGj75wrwsVkFiZvwKjy9NQ7VLsPshnLsJgkLBAfvh",
  "key11": "VppNR7S5MXpHJ2p8mS6QkFvjAvzc27djK97YR1ytajTpivXEmKw52peHYRpEyVZcngmbL6tgebSzb1JpWyEyHzU",
  "key12": "52MqWYzJSUqzJGuFTPP1eubedrhoeGYbFc5PTxhnpxHXXie1xZYnQprXKLqNyxZHSTicziM8xoxWYbZqMCrswxyT",
  "key13": "2RnUqXR4uYzbDyBqn7gZRXxuXtFhRaBasFpZ68WhPTp2cYctTz3pX34CAEak21QujExwm7oshByg3jPpVsRDtdJ4",
  "key14": "aNT1D7UQkM17GLBtu37jhk3HomHU1ru4eNUtpo1H3H5mHYvz81R85Skx95geq7gTQNBdrEE9PWvJ2zmJvFxfFGh",
  "key15": "3Ty1fZJRWzDyg79MCoAw64AGyUUt5qEfMT8McZPyH2Tbcgov232y8zC1KU9U1SRGftAVj25MELeDV7WsDsmgbUT8",
  "key16": "4kNXak2auNuDGNbpgXJFVtbLVTP1T3ZrbpUJi5eX8aFhWtAtTSNYiWYNExUCLRpDVqFNp7JCjcwxENzCjwxFYH59",
  "key17": "2vsJiz2FZfX1k66u8rppmXs5G5HBC2HbHJcXrqUdrRLmHurzdw87U3YtjEEmi3geF5EUtGMAT9tK2GLgyQ7pBy9q",
  "key18": "ocGjn8avzB7t76XUBFAZjbErSQjNBWzLxscqVNBiApGCSrzQgEvBY1aucEBKdYi1YDwS3pMKhnbz1cnganEjDKZ",
  "key19": "2tgHJuCxxM7N9hpX6kMGxzbJC1XxRUrrSxJgPwCqMZS4ZfDxZHsB2tcxLWeEeQTh7sSNomEWrvhTTu4dYti5KtjC",
  "key20": "oHpAc484W9av7X2ZjH7LKgW6vPwWiZpcL4a3SxxVon15VgYXZ3Vm6DuDGmp5dcdR1pSVY7jRY1VAmYroo5Q8giG",
  "key21": "4JnZKAqHdCbgh6KW62WhLnJYDSUopMk8XagVQtNr3HJpd5PkkgtBdm64DkLT47RaP8mFmC4zhzCgPFLdhYJAaXti",
  "key22": "3iLBHYGHTpPrXBjfUfTw1BTHkPkziMSaFRWrB8eAWd9NRFsQSMZCtkmvazM56PM2igbRF1aDDQginC8ocJ2cicjP",
  "key23": "FhULZMJwu76GJVLXCsDzFidADrUT6Ua5JA9pepa6wQaZZybCw9XkbYsZfDM3Ej6oZqa4dbH4KDtVBXYJDuziuzb",
  "key24": "Xo3hJoA7UrVKNGAynfPTg43kmmzvKhdRMHw21ybaxCp4vSdmYvWhTLKdeDc8kjqKYq1yuTdZHSAe5NAJdEJvJFN",
  "key25": "2rUieiMVENjKkoAiRLAYKnfKBmULcmMnMKwy4v7TYr8xpVmnAtABuJRZ5pCQw8Qkr76F1uWWbMDgUPqDCgfh12cE",
  "key26": "3GFHBi3oNGYVLRwgeUWRWLn286He2QtphsZ6XRcgQe9NbHHJgs69bRy6188XfZoR3D6YLNBz4kuqZVYgwFn12QVo",
  "key27": "kBv6g9jJZxpTuFi8EiCyXPMfUrrW1zBFDkpYJ1UCvou2ZvuCxN5aQxfFkuN4vRp7nFrCr91kfDqKBm8DUckaW4Z",
  "key28": "28ikaCBaXsfQqJc9em9P7EyLcsxUqpwRSsNLzLDDmtEVxzFjN4ZTmKcT9j7kQKTL4qPhJ8MdahTJCqjzQ5CjeddS"
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
