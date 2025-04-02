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
    "5cM5WJNoXibzmZ4hS1g2SzeRvtnsUGXBALNf6f6dfKGNZNqSCDdLZ8k4ySKfmP8aW2h7EoU2qtyK54hSMAM9FhSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H1b6h6b3VR1P3fAhpKZT4cyiKqAvKfdcbmNdRN4YRgXhqfNSk1a44hzdBkqGcXFqZz3FJD1YySZQp85U1XLBY4T",
  "key1": "2yrdhZ1bUAJJngJSb1Hc8FjMdLbVRvt4nXvbeM5UBsvM29hcJAN8Wo6XHvU7AgyyDr28zVg3Q726ryd7C8jjQf3s",
  "key2": "3eFTEuApDRdfNasZ3MbYETg4rwPvrYcwcH1be5LBdc3gNg7MDQsCDLTVueGweinJr7PhxWHVp4PCBBGJDdKrtBsB",
  "key3": "L32aLhwKUtRr5dF2bNkfXVbDUkwsCWKEQEG9ygoZBfmhH1Ticy86HotzrN1MCJu2oE5yWJqUEakfWB6GjRA4Z5E",
  "key4": "2s4KFWVvfW7C2AGKEnN61xh8uGNBVkKa2vugGV24PxkDJu8VYzGsoCfFGDkYVcQc44jfVfMEscm3shCFntnomriE",
  "key5": "2nx8p3vMjxUnD5dunMRRKEd1TNUFq4vSpjYzjDvBi8kHGWv1ezobhLjX3hjFdiFxsRMoJ5ZjejTzSPah6FLaeXDC",
  "key6": "65cWz34PfMwRUR8aKgNKD5S2RXnGDtPCbyJpiYRoPYv5adscRANHrakDbZtwoPCKvZv19d82RoDjJNgoEU5QHGTm",
  "key7": "HHwCA515vB8hBCufup9175MStnpW6NSWBUJ2jApGqyG8mgoJwm2ZUTZLQXQv56xomgndSTR5STyJb6cUMarQ8GH",
  "key8": "4eYD9PvYenWgZWtUys1pzipoHobWS34fNmX56ynNX5M9YmrXsKESDX2AbsHxvnMtZ7w5nZv1YQceqHNgv8mNQzBu",
  "key9": "614JtDnSgBuPLa7YwVbjSJkkk6XJSZmqxF3sKhymZAzE5eDQVrvTqTPbKmoyfw829xGpaKRdQtXmsajLh1GABpw3",
  "key10": "3rdZaNXQhTfDj3pz2ZBRA9vb5ZVtY2n6VNUUP14e2iDx9GFNr6dpqFoD5fFc91xDKryuns2zFid6vGBCjU6fnzkn",
  "key11": "4Vn6jNgYaZe7x6wJbscQ64X4T9aFZVPsVftZzn1xuwg8mt7zQqLEhXeEJHzGfthfwRmXtihNLixYrMRCBp7jMNNC",
  "key12": "3Cnfm5qMVPhK271x1LtvKWy4uSTT8orz6WdYQE6A3vGCKZd4G5TauC1MkRoXb54Swpu97TKCMxT638TrqPUDUnJq",
  "key13": "2ZZMgwetKXtdaddrEX8ncRUQNx3B5rTERNug5mzMsyDnNNgc33ou3iKnsLrUUacs1of18Zpmvn7pWvfxZjMDJfFj",
  "key14": "2SMDZeeXDUKEY4fbM5yPwBUB3cjuZuMreRtMHfKUxDL6gemJEHXTSDoP2qhcZ2QXysYQSFtCwgR9f8uZ8XXzhXZ2",
  "key15": "4yb9YFwHpQ6zY2j4aebXk4A94h6scxJJQjkChNzsSb1biAjurAzxm6D8J11n1ED8xb9z1m7iQmDyxQYCixK2co5e",
  "key16": "4TP76n4na7FYcBH5JjwRe4r5pZsi8o6aLzRYZXuQVTnzJb7SgDF5ZCswY8nxQ1t8vwjceNeMdq4xCGpRX9Ltw9j8",
  "key17": "r5ExDVNFSyxEvUfQB8mMuCFc2CqYLwk7UcvB6qSfL6x12PWHJqRqaJTPiJjMAjdQztD1kynvN7eo5aUSbTitMeZ",
  "key18": "5x7zasQTg4z95TxECviKaDDJp4Yh1cQ2XvFupVVYwbbkZkY7mNBj1ag1ZTGSqJRFvPrmtqzujSDUp73MJ6f1nUmH",
  "key19": "5CBcVmhbHsGLvk9aUX8RXMW962mkhwsNJfToMWsHTUxhhYyC4A2cyua7d7wBWUPmKtzepMynCCK4fRLqSySdvuQy",
  "key20": "5foB8RKVr78ckBUnQnd5kQ6m1hFgzjLqbYasgUdYGa6n6FEK8DPFWHwBiyeePVpKA7bQHGpGjorw4yspF543TYMz",
  "key21": "5JJsUzeZx46VhuedAQPLLpi9Mx8i9mjwpecsjaUinaKCgYi4Y7fADVhVaVk9vvSHRQkADkXviWsmQ9xShhAqAS3W",
  "key22": "4M6vM3CWfmSmbtf6ZKGEqVCgQsDU8DUEX1AQ8ZxxFh2UQ5z7f5RC8sJTPe7Qe4Jhn3EW7z1F6VB2d92VqgLtqhPf",
  "key23": "22PfPnCcjQgCDeDuxvEiGpYGMNHeyTcQwzezamA9roRqyrgGxMCQT1FeAH7FLsfGHXkp4LbUZuWLYhsThnyvQLpi",
  "key24": "5jmNE87NR1NrYgY3EcumdnUWzx7epVt8ytFZhuvRY52gwWcu7QJv9PWxkmQanZNdW4usK2ps4SPjCDwoxpda9KNL",
  "key25": "3M2pKiygKRNNQtQ7YbJZM5o3GVvyVj6d99HXZrMDBetgHJ96ms5sd6XQFGtP7mrv3E67mni8YnwsaPq8n9DA5TuH",
  "key26": "3qmnnhwjrxrp2cdPeoRtDT2yyM4yqHQ9jm8FiBW6KN7qM7CYDu77z7gNsfz7Cuxx2eDDAFwT6c5qL6nzc6b8Z9BR",
  "key27": "2K8YNeqa8FF9wAFebcbUpGXKjzhX4tFQAWcMmACoGb6MJB7UuTWyP1aZaSgzkvWQYhCCSt6UKNptST8PN4AjEtDh",
  "key28": "4SCNAiKjERJncVJbShwxZmcqq2QoxPZ89qBfFV4ZF2xmDxrCyudXj7kP6e3TQE6X6j9ube1qvFvhe7GBDCdVTCba",
  "key29": "tt9Vw6wgPHEwNYpfacURECo6LsaKnjea5TCaEPWmBXvq94wXnkch5adfHnWpEULf8haqNPRSaKtimnrKSiPh5Q6",
  "key30": "XUcPHb4YNSUJdkg3yLnsKodmnsciAMNkHapVgxa5AFvEd9hikzndLEV6dE4S7rXuC5RQeQXzbngaaGZCQWkSuPD",
  "key31": "39bYVH48Zec4SGLPSF9YUmz995ceki8vmFM2VjrbJ9rnhMqHN6AziLmvBAQtLRfx8LwVw6bWTeJ1jFXQ5MwBtThw",
  "key32": "2p5cxcoaj2gN58HtaMy4iQ3orM28fYSG9M8PiDvRiiL4q1DxfCZGSVGEordmyQAkY91eUaFceCevBCMmvmzP4LP4",
  "key33": "2to77t1Jk6KRUh6eqh8cZEvqqtXk64bWyGvuDhAzXESgU2vhvRaThd14aQcBxcAC8pA3BqjJmTUJcuT1jjAyCRHG",
  "key34": "659b7PsuLrzfZJkUvSwoxzVoWM2XPfWNZWNWaQbLUQx5tK7pLwY1HKHqxttgy3adeVus2DseKEyb1BdnCF8SCYRK",
  "key35": "4qcS4DX6jAZRQy8V6Dbk2ZHVkd83erTBXNXXqYfLQEJxCKUWoeMKZD16eHMPF8hQVJncq3SZJ9cFy3KoP5Xr9Zc",
  "key36": "5axq5ss4BVihzpmpUEZjxhG5UhZbWbYqVPWNLMT9qLmhK1Jm4ahuEdJ8bdjTSzuk1uS2crXcvZqQL4HGQQmVj3wD",
  "key37": "2PvrBQUFi24q35Xt11a3AHp9225zTdFuBtP4sPXdSgV3xDQJyhajRgD2rCjJcjePLxsKRZXZwqGdPbCrTjNqk79Q",
  "key38": "4D93nLN191E6T5vZ812cJhETgtnoKPmkeg6rToQpoiptSvntq9S3YbZECbmKQMZ95Lh493hY5ZBXDfDmHf3wivaj",
  "key39": "55BCWruuMAcQiFRACrJRqu4Z5Bt2WbqfuX26UVLzfeXyiET4Rs8hdic2xgWesHsFa4oGGDDcw9TkRw7yaZMEoqEg",
  "key40": "5B4KfzBhKQ2GSt8q2bgUFwZxeT6uBpEVYmhezcYZLR3ngvQgKshk21P44EZdaiK23sHbPLYLwqQkF4od3ajmb8bW",
  "key41": "4cTWCaYVh1L64diWpdangzvh9JL3oYMLSHrmpLBy1knZhPBP1JA2KZm7DZXPMLa4YjAcs98gY4x5LjgFcmH18rrD",
  "key42": "2TqBskE422UbNdGRNcs3MZa3zUWYTtXEkF3tngERY4sNfsTEMkcZBz2X8aVgPScV8VgQt95P5KaxurW1ZG94kdRE",
  "key43": "4ZzkYMpgLsF2faDLMun5cpjKRbpaNw1K8CE5SQeWkJXqBBYaFfQ5uPPXpfzniwrPL8pcgFciXbVtmr7889v9gxFm",
  "key44": "5duPy3MqcrmUwGEsL9xxTEZFeEkESpUi4MDfPG9CmBsiZzyLe2ZTLQMyNTKuie1u9n6xYeusBydpd63DiZXiC5z1",
  "key45": "2t8QJZr9Cqf4q7KVTr6Pv2SktjrE8NmSGrNMRXRSQqscGLx9uykyePX88ovHCZ9GyRBLEBWE5TJzhVMhkrz5weVV",
  "key46": "5HZGABvUnpbL9HsRnFmFjacoj6okwoxjYmp74gLQP1bxJbU55kpBAQ8sSijXmGCjmknYPke8YjpPr1NqYsFUAS5G",
  "key47": "Vmhjcys8AA5bdmhwSyuxab5S3TMAr3QrZW2WNRhMH2YrffEGgGCGCu4KY3C7B9sx2MrR1wbD7TSHN6YtfRbuWaS",
  "key48": "tAkXWUALzddej86AUqF3UrG4muPFi22JBt125ABbTi95ca38HPTKpYMr6gsq7X9AX7KJFY9VgvQTVQ5rPSgm2CV"
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
