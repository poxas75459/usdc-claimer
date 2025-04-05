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
    "4554KKqSWkCH9ivBFXDDrD4WSSQjTG4eYcwJEH7RPNPQWHrGd6fuz6CAmmcLVUa6aXVZjabXn9HKS34GVpfaJJgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkkaqqPw6aDu5rX4Hs4m91DZBg4hfnSWUKHPekRECXL6X8oh9FMYyCoQmR3jkVVBccRF5SfuSuczzxhTP1KfGpg",
  "key1": "5aXz62AFti2vVbcbzMyHBhyvWzD8zgjmFjnNaJeWoGwuwS5SHbQeMSndCmXRZWtkLyzYZ3MAtjDR1ByvmvVXNrUa",
  "key2": "WXtSxxJfnQqUGH6GkLVrd9hqbhW68x2zsDmrCMDXTKsD7MhELs22hGxQZpuKTnkb4YMveyHDrhnCeRRjBtSGTo1",
  "key3": "3BLxhNRuKabMLhGJRoncyXcXD8D3gpvLuLrQw6G1F9XiG9J7QZJ4eyzspqBjAgVvFk86Xe8L2Ra2e4u9zv3QwsEP",
  "key4": "WcnpZ5PmVViAoDkibh1TnTfZhVAqUp9iMMhKZPsqcFKjmwq5LabnKYjD11XgLjQanmue4R4B6nLGfVMw9UBhPtc",
  "key5": "356FyUSH3yyRQVthUzyxYyPBrzJjSwzU2kVqb7awoKhKyCsLeVqd7vivPcfqWaaRxDDirygsXt2wtdt8nmn26EcC",
  "key6": "yvzfaxx7eMekf7z1N9PgtQqaVJnw8Q6S5CCCc8R6YgAJJ8D8QkFzg4S6CJZDPECFPKisgXaji981kZeYnr6Uwjo",
  "key7": "4gJ8MXF26TvzeBnu6w2aqxW81AqnZLyireKHUgEMiQbCEECHsMJXCgrC4gjwwJZBSgpX7ZmrXtzUfK82qtJV76wc",
  "key8": "3BBycQhFbJUN7rfCtDUSJC4qb9E31AooT3zF21DGXF7VDNpQq3qFuAzx1tVYMAacaqHjioFsvHnEsALoynt1hXBf",
  "key9": "5kaR8ijeXNptVhuadLi9AhAsH5ZWyZURUpMcuMGWLHvnFohqWq1UZcHrUH3G5kwK8goYDu8mwRYLEho27kid6SJS",
  "key10": "4Vgt9GE1Lbnghe6cXbmYd3Q3guq1fKJAytrNaVVisR38ejmHHaDazDwgP9GmpM4DCMxjQJqdRa3Ksz7XTUsQrMHz",
  "key11": "4a5VkjE6ZcbEg1FesgDYy2Xm3nhqTDRMGbaAZozWV5eVFcL2cFse5NQupdSGMqCVZ3JbQYBcwrbc3KsU1U9CBfTv",
  "key12": "5BXVF815EjKiqq9QrvJWGq1v5DVgVcFz33bn4evzEjp97FCnq7wYt2FU9ztUai9mZUQJNu4FuqisE2rirridPU2q",
  "key13": "52z5fpHC7fNVMJmjD5hwgr4B59wvuf4XpMqhT9HvaSb5sUrzqZVsaxVw4RXedp4jMsUax41rQah6We2BQraRi1UF",
  "key14": "2nDf4pkEY64qb9ZgVhabns4htxyNfrLFeomwotNWu1RBFPcwJNwQN7ZVL8WoupK9wzvDABMNEqdFbxjwP8RykEgG",
  "key15": "2NF7rYZLBhXKpayKcCh6HAQyTKbT8AcWoARvUSyCF51Jx71UW1bAL3sy3LVx6GMywubPNLKHmv3JfmRkrJAgKmPu",
  "key16": "2jfmKnZHKhjQC3PZPgb4bsLjTng8uabwETU4fb5nPgfuzU5Lyi7Jshb53m1yTGGYFg66zEWstJis5emzpaMGi6T7",
  "key17": "3r5Xf8qi5LmVFhNZrgKTYvbwDiugiS9UtiTAyAiwXpfgRj7K8SKUWniYMaNGmcNbFzMhgo4p4y4Q5q2ZJBwZg9be",
  "key18": "3A9RmcHTzk9GPywDaXge3qxtUCDb16gDuCVAyfyCfbQZiMUFAXyTFSczB9Htzoj1PZeJAQoL7uXoYFcsdJF8C5yn",
  "key19": "3wWABiPAgsw6WvU6Dot5wPa3U8RQ5o9QVeDv2ggXDp4NrxMS6HfkXfBhJFDxPEUNq6BJimobk3emHQ91QDxE148t",
  "key20": "3EPF5cS7sNzCpiW4WYt7WHqH7UYYmDoYLbEioKLgZVNPSaHMHsyfoufS4EpBwwJpThk3a3EkrgfNcPp4XxBM8qAN",
  "key21": "2bMMKHmuPsHpmTpot33zh5iKvZTN6WtrvzrQtk9NG27nZHStTdHvTucfoaduf8aY2Jo1Sk7dpGNF6HMxixr1Cn9K",
  "key22": "EhK4orxBubKbwZk1z5sa3WvJKeMhgS7Ykk5k6H2QJvrpqQGCaCWm9NLKe7V5ojVWGVbYwUy1F9dyyjEYqcDZ6JT",
  "key23": "66PBkkWJNaZQSg9H6oXbTHroNT88qnKx15ZEZSqPUaRKgTbXQggWhM7BuG2mQco9gYogW97Fjyu5Lb4rySmvyBWz",
  "key24": "4ofMfTes9aPFMfTa9g6Cu5adUqHKsmqMoapDK6JmzEsWYFVVRZArvRCofq2pZjGsayvSwm3w7g9PGWuKpJieoZpT",
  "key25": "49gHeJ37XXdqKaQkvfdHTDZoHZZAujycN8fy7Tf4T6Q1yDgNW5wqSHySh9hMwwGYzW7BZvmWCtwZ5wJo3HRVQPpM",
  "key26": "5dFhizZho45CAcY6sJFKSUdW9q1THfae7BZeRuD6vCqeCRU9j8nShVnEZokTEqNUQ91nLXAjqpAgMP6T8kDu9gvG",
  "key27": "34ZE863t24Mk5dehVcs6mmCXXQbvU3NiiXuFLymtGB2oFjz8M4Umu4LaDXVwofow3NcpWbDecfWBf2GxNEg8eSog",
  "key28": "51oAvdWiVMMvVu32NXerjKi19MZmC8oMHfNSGmBmffxTKoFdoEaUW1RyMBiD23fW78sGsdKVV4Gi1s5ChecgMniY",
  "key29": "58EFyJJ9LzPBsYqjkEmybcQWq24NxCnFtdzXTmAtCUCXnq2vrWs9mGe7CaV9vJU4jEXq6jkQZShUtBwEV4cboV9i",
  "key30": "4KRcsjzUVVsR6VHtkwn3bqgNMDRknKaPyuWAcsVntbg2Bfvg6q7uT3WhqaeyJgic7ZvwgHwpNacMA7XLJSwAtuZi",
  "key31": "83PpmtrFujFofCu6dtF4dMmfcaNxq9CdxB1ZSyyBgAswFTwXKPerbNXMDTRbqa2GENKu4aHMmojMLLnPM6pvq5Y",
  "key32": "2DBzQwPcMvPm3HjT1pjSzAmnZejFWqQmsr4u2WpSXkCaz9pbszVeZiXKJd5mYRNC1ViUdRMDewHv1GT6Ys8fZi4e",
  "key33": "2kuTzmGTN5RvPzXHEsje8HA5e8W9W8nZvL49LTFZBqwhMEBx6p9Ufx7fQeTjRPfGjGH7Cn4pE4kCAizH9ssPpgZv",
  "key34": "3Cm7xYjggRwdDTmJaRyZk7ExBRdHE1sqwkVovfpBPQaEejPUkCQm8FJRJhoZ4vDdLn5CE2hMDybqs9x2GhwomgpW",
  "key35": "AUQ3nrZyCnvVq4cMM48nuhv3aXAcEfvMbtdaBZRSMUQ9kJCrKWauQNFKiaFDz3y6VcwvGmiwjux43vTXcL9mFZ3",
  "key36": "4eBnVTCQNxYqtPSzHuk9JkFpDBYpNJdsVTk9pYRbYTo1Nn4GKV9ZznnayuhdLGK271GJEGqjYiQZ7CnCrUvF2JBw",
  "key37": "MZepwiPtZU6YLu2tF9ACKAb2WZDmEX5EhRon1Xaz8Rp488eoa5doEbwA5b6n1vnuDQULvZna1E6TxV7m22rdkNw",
  "key38": "57coevMNWUHFN7TSypj9D4wvB4chddxjSWyYvQpQgYb2NJfZeauCE9yY8RNNnxGvr3hHFk4cwvLW11CWwJPhV1dP",
  "key39": "2mRJPbKXSYQyn9LgU49KVTHipnFZBVuiyZ3pYb7szfvd7TJEdenvWSN5mCpPXDjAxVL5a46UH1UYapji8K7xR12M",
  "key40": "4CuN2rbdkvxefLNKxkEVv8vCpjM5m6u6EFkECzLG2P4xZzR6UENBJRHtMC6u6pwNnEwUVS5T2DpWoA4Lk5131KCt",
  "key41": "UPbubxnrfkWqW1dTLe8iXCdRoYqc7L7z15majeD8XxepLimtrssRCVWQUfaYwwkYSoFczL7YVEbW8i7S1oHE6TJ",
  "key42": "4dVsMTryV5xeRFSJ2S2Wwg77AtiB7V4B6xekXpwCHzGPJuLRNGBR1qLa971wCfGQ9b4mgG9BPPwJGBqiXkair9MY",
  "key43": "3y2BRfTnRDq9yA8QyAimgGCUczoPPa8xnVmZycErVdc7xDNsfJ21tSfGApHocuFshGLaK8V3KEn4oBo1x2EsHjSm",
  "key44": "2YqYVaF2njA5oLiZDcZASw8BC77pXkY5JeHHHf43zN9ZiED9dYWe3we5JyazgKYPnsG7sMFKRnswK4fAtstCJa2N",
  "key45": "2NF7QLmmX8JYcnhjy6D6xS6uQQCjKptmCcrJEdjBFW7YsMK7UyubDLYAPFidkcK4YVHdX69dbxJqQBV84gFLCgYd",
  "key46": "3hrJpoY1UngtCXtEKe76YsgGULP2b3Fg9vEaUiZgpRpww2u4N2pKLACrzeycX1cVoCF3zSZEAkvH6xWGheyyXPhm",
  "key47": "EiJnqw6t8PHxstZKqF8Duv1UF8Eau2udpwhvD3BijaeJ92XzAAUjuot5UaMaEWmcBGWWWS4SV6v35tuZG59iSMV",
  "key48": "2P8EzRFFq8Vq4P5hTuaCXwje49b5jgpNJ2b4A87CXzXtcqpreSd85a1WAe62nK9bBp9un37aY3vgz37NKJZkXdpW"
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
