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
    "5YXfuutep5hPv7Bef7GrrEE6XPd1MER17aa5TD9ZyfQ9jpj8Qp1tYybLQvafoeRg3tdXurAc7xEAe2HWmc3m3b5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VnHJBgUjhryM2gXiYrN11djqaFMXnef5zGivbjnyrmMY6NDso18pod8fPp4uS279TZXqGUBUn6otyaaSAUD6Qy6",
  "key1": "5TAmfcFKBKi2v544YgWFoksk2Mn6jmFAwHX8UgvahyKrLQweNowEBN5GF6dcLTPExw4g7r9fXXjoCqbUfWK2Gvye",
  "key2": "3m5cCDY87qn719xJDXAFkDmowDeA3fTWRnDRCqnoEfNDyMmTidtLMYCfnD7YbsHVFoRTLpYab4xFB51tREK9VEjV",
  "key3": "4ezAZezemLcBaVuqDFGs35Aebyyhn47xYMQjEx46zVhYBB6KPdGjbCGydL5AURsEhyAQ3xJmy2cKAHwqhyPKrhMC",
  "key4": "2SckNALxkTsEefTxH4dBdQziDWgMcu2V5UqwvJ1D6kR3fSjpMKbAedUTTr3v48tY1u7fmyV2DpR5ZbKQNQxHk836",
  "key5": "5xSuF5r3t2oGq7dHtD38UsVygKrvhcRyxdUYo9rbbS1Azz1wgSNtXpE2dqziNM8jeyxqEyWT8nLWfTkAtM15rJCo",
  "key6": "2v8p9eanzoVxRaoWVWPXsGVwUHArmzjccT8CZxfimk8eQQAdTZdned9GWNmMmWf1V4AZu422sqiaiMf4HMC4C3qo",
  "key7": "3cZecS9oVqEZ3PeSJjJ1Agv9gByjuZ2oPALhREGem8hvRrZ7LGqdHpPQoGPuga3vE9BDQtrCKy2cEEPpCQkEXLqY",
  "key8": "ePaxZMGm7FvEwR4YJ8H36oGFgtqLVLBLLvs3tbg2BdmBopy2mFZAHWLHZXCxQaEbKz5pg5jZUzeeHrEuXQsDqtQ",
  "key9": "59juxfvPW8wNdJcGJyz8MkmvpsM5Pbmwhyo7Ds5tBUdW54LoXnL22Ze25aSoHQm7u9JDhRKMYrb9NwcJfteZeknz",
  "key10": "5ce4Z2gLj6FUJTtm21TM1y4wDTF5spB3oPcwgh38AyndjWbsVtsAL3UF2SwG67zrU8z1RCKc9by3koDQYKpeyu3a",
  "key11": "2quJt8QNG1gseTZ3qD35Xv1mVurQzKnCRVBBrRLrwg3GiRqctoDry7gEwhb85grhg3iP7HkbrrnFifqhpT3hrY2p",
  "key12": "4vSEFQvnLmsr6x8jEeSfqyXgF4C6pSmeef9HSSsajeC53xsDZbo7gTnrcC9L95bsoCX9XGPYmC2Va5azrdZHJWXK",
  "key13": "4PcgaEwJH95qQJReiYzSEm9Fx1JwvxTq4QLk12C3vfv5BnqmQHBA1vQWH2fDPbwLHf6AmSqymtwA8PiTaqWrv1u9",
  "key14": "5Q25UKGxMXU1yTSsrs3VEfbqzFQiAq7pUhxo7ixrJPGGgBiduPJSWuEJC3LKZ4SQ5R7jBdMN6C4PxTBEMpy1d4zN",
  "key15": "4xwnxUVCaAGVtcuMLCY7aRMnzdbamafqFw4NfDiU19RjsWZuu4C75aSd3bMRHJM4CeR1o8vVKt8bc92HsgXyHVaE",
  "key16": "3EfvuhuzA1FnBchszEj9BiuouaVmKD1a8uZaSf5wAyYuqHuMq9h9MgkDP8QBPCK35kBEhg2iG3P3JHgRztBA17i7",
  "key17": "4WoE72DwU1mMpbbsfNDbKbBj9zBFRrYLyyThMqmFmRRgZiAQ4P1cqjDiPhT3mMppPEr4qsk9CCiNfbQuXMy5Was",
  "key18": "3BE62kooXjFQvkDDz5GFhuJxuq1VpnEjNf3bH15fGQxciz5Vct9vjpHkwo9Vpq7jGmNUow2tvc82ttLH9V2egBjL",
  "key19": "DvvxErYAYPteYT9rxmkz8eZnky9anEFmb78D1UCqCDH93BcwMQHXuxDi11MpHF5LavW8YkyHA639k6JjR5EMqT8",
  "key20": "4aMfSSHTG2VG89DAAqsJ4n1Lk3aXwQu94dF31vXi9hxotQZ1d21W22QS7UmqjasVSXFEjVrut56mhEMMh4F5b4LA",
  "key21": "3mAfJDrUwBPT1GCmGvk44TEVckCuk1qCdFeNEKt6Bk22j36fPh91TJV6tG3qsZ5xAhJgapxxqr8Y12wrHjzpTk9q",
  "key22": "4yWv3CoR8bS5Kvro5a2Uom1J8nLAfagPMzYTsztnGBERwdPLm34p6m1vvYhsU9Fkwt7JkDy6LAazMyq6woMXLU4D",
  "key23": "zfyqGCUW6NmDN2kUpdZUp1dPwQWrGdTYrtYVto3yBAbUeurfJL8Am1GVLZ31NvhvYf3nB6xG9jWctWV8pZWVKdd",
  "key24": "3BqjQUBs17KD4VN87prmmFybdaancCyXReVRweoMH7Z8AKYsgB2tZpvYYyYabT44EQFbgNkVLbfd97uHQoizXoGP",
  "key25": "3ntjif1UAcpRXj81LvdDXrV9KKbXVVvjGt9zdURj7TBKSkAh473vbAuZvnf3L3XuwaUkCb4LxMoCe4QAFL4LbNmD",
  "key26": "VCQMnY6UoHVZ6bM3ZMmgiqw2F6PE97cMcbA4BtAZ8LqKejraKdY7zWPh7muFfQTzXGnVga7MXUnqSCmXhT1RnvT",
  "key27": "61oAhWmYmvHr732kTkmjNGeMWPxA2DttwUwArDgyrb3begH1A9VYuJJUAQD2e3srkPvBPW1oPxZD1sHf3aCEKDSr",
  "key28": "5YRJQ5bkTjSZ4ZeXPnJZP23UFmCHzcnvH7wGjpUYUiFHzpcjAWDf9iUiiV3f78Xz3axJ1TVj3a8195oyqaLyufC8",
  "key29": "3ihAEGLRNjwtmEqS8CGmXThkRfmkcD4FgkfWGHvrz86kiMbBxxWFoeBkXVoT5zNGM2GpJvcPyua2aqoTTCSJvmJL",
  "key30": "2xLPkodMKv2TtwetnJvDtc4ctCFtwCtLv81MDmxVE1zH3ZjNZRC4Wv5zPkz3rvQjoeChJggZNEnywgjetRHPT3i7",
  "key31": "5AswqzHBpSMHUa1r22xphF4JNLzQVQ4XnE2fBzzT2ZeNPtuQd4dxV8rm99NkTL1ADwc1aGnBhgMLkDUWYKKzohPs",
  "key32": "489hdV2xCPzFd9mjh4kNvVJBjUZHfZirLJSyx8GNTo9VrbdhLJrJYpXmp9cgWZ98jDk4EXNoY9hYGK63N5aiNsnp",
  "key33": "4cahmmuZH8tXCBdXHAWjSZKnfDtPo4uk4dR3H7NNY23H6Tc68QDACd1UTLyY5riPQDyL9AybycRKeb4BNzXWsPLi",
  "key34": "2B54You9tZA227pYBheyaTvD6bwovgMU9CUzwHqmVWWAxKDKY2EKAMEkVd4UkaWGqUEpThbzAAWmfmvMhD1ZGumX",
  "key35": "2JwjcGMKvL9syz5za5KoPJCSNFDwHNb3KkLjTwbnPzs2oq15FzzceJKftiYgjrnddPqp7qjiahGDfyS587shHyWB",
  "key36": "2jUyzHBkeuSufeiMFfS4ExgweF6GFmUHNnhePYC68L3GDzU8WuxoCGX7Jarae2JneAD69Esf7VyXbC7RARoMnM8Z",
  "key37": "5H559gZ8Fq4x6Y2oPtztAKUZgMoiGb7dbxX9CDF7P5aAsTDdeL8ncQagq9e7K5YyHRHPvVpAYUtonqyLUAHqWafx",
  "key38": "5FTVJ7Wd8D2Nc6whzgwRztezC3c9Fs3u7ySAwTukKFvaapE7jcNBnsQmWSwZHPEgAXRuUc28tdNtyis7SSj7BWMQ"
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
