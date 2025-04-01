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
    "3CpfEWND9LbgSbjuybBaHakSkG4Az4MPBvP2sHQ27MuhFjHy4zwoKY3utqeW2Sv3QreoCyDMPxHUKtGCiRKdvoeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RwRNz7aXftqRi8Xr5tRWhmszkaCCVtptsoHPHbCEpAtQrSjLTjtKEFgu5pJPTP8W6VXcMvp6GX5zGDSTQTnYHBP",
  "key1": "5yevM1m6JUQMEoxDAgRBZWdJ4Ge2cx92ZTPi7fEyvRkkgHNJ5846Y6Uq2on1k2pS7WtFZFkCtBGhc7sevJAtpuvS",
  "key2": "36uM3GmmyuNWcZK92HEtZkMNH3qFpjLm2ezTEpH4Ti5v8YYiZYt7mKXan5ZiVP3BJhCc4tr5A1facRVEU2ntStpn",
  "key3": "5yTgLNrWrNC2GH2q3fAgxN73cdkKeXMmuK5CvzTpfr7kkurnhn3LbVsHeda77njVVCJpi4Ua2XGa81FxQ8uW1jpr",
  "key4": "4anS7recWTKhuB96hEUd6z7mEVZmP4deTWJRQkDUFSJoiLW9zGBL1b12Qa99JtFPtEC9vF1UnDyUnUwcqK335X1z",
  "key5": "4sMnv81pfVMM1vJyLgqMkZHrMEJNGmm9Y2Gq7tPZQotahxvfhkqmLN2uMJfkjTFriqxQMzayBQwrpoivoZr1r55J",
  "key6": "3ECue9GCSZ3Gu6a5L8mfsNdMrqmk72cYV2qRoaaKo29WGeEyifYy27FescYoMvQ7y6xS9jXk4a9HGsuNTGrtoehR",
  "key7": "evuYVpVLcq69qLNrshxrBrs91zUv1F9HN5Pq1r2tq4xLz9YYm6Sag8YznnQg2DAAMfrhUSodVLvEuc3vXiEp16v",
  "key8": "3CkaUPTKZzao1FrNNxgKcrcsAnZ5b91MYsym7XhJubHQu3NbP3LD63cv1QoCNQGs5v2iEhzeY2RGsL4XqWzVUyQ8",
  "key9": "2nGPTd142bmmSQHp2bMFS6APmgPpYGgKkL5Abhfq8D96amDW8s5aUe7dG2f9yztYG33tWzCVmPbCMC8fnpdFsgzX",
  "key10": "4ApkShCtfQrb1v5efwj9GVFj13gCKdUSm48vzMLUkkLDYgDBbDk6P3SeCKKy2WGVXpT77LkWUzectsFLjnrn9m4W",
  "key11": "55rRigiiWbWJyLKWBy1KtaXFw6655UUtC84he17mymPpgmq21oJAaCHkiQvw6z2GcNcfAMcmhNEhxDaEQrr2Bgn6",
  "key12": "3dksXv54YRKkCGCPspAjUTH1S5bfmTr4jXYMP11farmiE9NiccqU6WutfrcKsqRi4fUrFiDgbuvbvtQ5PSXN4wwm",
  "key13": "4Y7Q2rkV6owRJwLCdZExwEAK1b48tzu2gQ4iawmkQcxYWcdvCavcbyAfRfLgaPTHpyXf4Bq4rBmbvg4ASopXoa6L",
  "key14": "3BfmmM9Sfk3RghtTULK2foNbvFJn4hodK3mC8dCG6VrKHBz3uT8Cr7Pht4pCZfENzSnTkYsKDoH7ver5AJDyzkdV",
  "key15": "4o6eDjYfG2y8Sx95Brbh4YwdcQQAuVmq7MNM69w7aS25ryGH4b1TAgB15957sCFRAKB6YgrCeREon3exobe8E4EL",
  "key16": "iU4qMbRaEW7u1JvibyUefz8tVFHGv2iJKns29stCLcuEGaeDAJVdQqhaEUnKtthBrtSDgtc4hCiPXscmNdSMsE9",
  "key17": "4makmqX14tQUxL6eFKudYmnd4BhXqnqaZ5bqnxvwcucm32Lm7SmMSLrLh9WT9j1pZW7yesy86c8burYL1xfmkNAN",
  "key18": "61ofr1QZ4gR5imwN8C7GQPDMfNKL4M7sdbLS1nGEV5mcBijjWmxyUJrxBFx8DasvVtNM24FQJi2uhH3BLtfDvHnu",
  "key19": "5FZNupzhMfYo71mLpAqb1diU6wy665TJzJx1ehNKTTx5CzqUvZEuSiataNyG5BTQFjLdD5AsYLLaSiYUAwH2bRcF",
  "key20": "2cqfwRYN2PugZ7nxfmzUAinDgE4VbhUYyLNXrigkuZvZwDGZTqfPf79P39o98wThLSpMp4ZU1TwJXU6GkR8faHV8",
  "key21": "517HXGZouLqwEKJznyb8TcvdxHcWYEw1NuWYXPiz62YmAqxwTejDx7PWekBJCu3p591YwmLwtcUrfH63MueNwEtQ",
  "key22": "3TCkHu1Cx3m3RPoUqVgJBFuBeqqi9t9B9v2gneCEX8Vka6aARAm7emqFthc3yFQhXwKooyEGPri8CorvwDxJsbtA",
  "key23": "2ttABwEumoJPRT8A5D4LiSk5jgXpv3CvB6Z2eTbWs4B8zuaSpGB8QQaa9wKzCSyfnEDiMFSCWqPCo8oNUczHd5yT",
  "key24": "2fAw151yGnwvCg66jyLLWF9ghrNq5bk3ip4YmmfJY8oNVcnBvvgPVBVZiGcsFwu4wNpPqWT7gcj5K3PqHBqxPvWb",
  "key25": "36PivCvbaaUirfPZdcCPhqoTBNuAjBhCUh2dPAoPrTkLM2FNrhYWG9XPXzPjWiDk6YdJKQLLQfi1oA2MptRjuns9",
  "key26": "5kXg3d9GidyJ1sgM7bpa127YkASGr4crd8QQjtWxv1YRB4tabFzxYww9fjsQJMxYekj66vwsG3KcKvdtMguDfbXc",
  "key27": "3vYMHoMXSZeJCtVctN9rDH4upjssFRAsUykqXZPgBmW6eUanazvA8RZryvXr5vyxRRWVNyeoMPb3nTtZD4vPgeQL",
  "key28": "3XUW3mtDD6f4nZr8LKVe2j86EBUUFjL5maKLMr7koLkmKcw2jHEdeoZknUYq2a2YDaFPMRWrxibCegH8HC4aAQq9",
  "key29": "5HV8aUmeEnfHGRWkNUThg9KJnKHUE9ifkdGRPA3ezzPtVbeksDSG94WphWWXLC2L447Z3fEKwrmzJUe9BnHLktXd",
  "key30": "4MY3kbLjTorv2hWiXDa69EfDmmHQxPHQDZbwNmyukDZr8zzYhj74LZnUyA8hizpiZcMaCWkB112Vb5yMfCSj5dLz",
  "key31": "2SJQZjEdLwuAGKzS9GgRCBeVbwW5DJMg2dtNm4Aerzu386SVEBKPxKWpKgHgnnT3A94GLEd9q2GCPV5MarFnU2fz",
  "key32": "2tzDFAE49Wd8bc59BiKdnjrFScMJ5KkWMJ125CiQLkGnrJ4tHZtbYSnEfQe9WLsVfLG4YxitZviDoi2w8sVH4WYU",
  "key33": "3xnVYNFyH7FUwKCXEz6dJ1pcryGqF38BLXcTbo3zcpQAhkQLqZpPvgYUNxNiq6UQx6jkPtoP8s9jPntbtYTMz5TF",
  "key34": "QSjjtGnXM2yJVnpXMgFW7Kzq9rd7cpGxhDwLv2eVGpNd4NwgYuHFt6hzQ4XcvPwEcoBekUVoBEb9vGHQNVeCvrC",
  "key35": "2vTZxrvZkGUcowEeFcKm2BizVymH4cj2bQHKpxSvgXtdTgUAvRyp8Z9F1iaQD2wp4DvMFV6E6MDANo91tZdG57Hu",
  "key36": "uCVKfgPToKvHh3kBp84agd7jSaipfwWJResgj7mj51rQTHb7rqUjV1EyRB8qyKax9tEZERKF63KXPdQB1ZbweT2",
  "key37": "EPN4JQikK3gmUm5SPyE3TPzEbqh9pc86xTVPNToEsp5RkMJ41S7GMBCCzVYVdTpc41gBCDvuhyAigdasPTJXQVT",
  "key38": "2Jne72baUPw3w8aMiF5b6uTjqrZssgd8x63bV5KywFkH8oyXqhAFpnqDG7aJFaq1feCSkcWGq6yfpdsCbQEEnt3r",
  "key39": "3BWoR88SHpmYWtNDySUixw33W3xr74feQUaJHvmrh4mw6gctLG3gGrRQ2FHc6wsu6VDzfJfYqqbqJzZS8EaEwqDL",
  "key40": "2bjqz7h2kTVeSykftfV8CbYC4eioB7osRnxVzNCCQs5AqnMhZQwWrcmTu48uqtJ4J9bCXSKLcgNLy49u4Tqio9pF",
  "key41": "2QJhQTJk5eS1gZqVCEWBSJF8wuRgdmh2ZwmNTZPqDV6RBZWMUhVjpdouUzqA4XVwHCR6HRCQHjvftwEDnX2SzkTb",
  "key42": "3tg5N74RSRizYu683UBN7NVAZF3gpEMn8fzJaA9cizJwTPqnfZcgBXbVVgYdaN6s2YKgq69tdVG74MrJDfttTJb9",
  "key43": "3pPWav5moM6BrL4bQE7YCPBx6buMqhyjL4jkrgQn1SNi4iH5ZTpeQ6Z99WLi8JZu3tvXLJUFowqUZb6YjoB58RUr",
  "key44": "5MPE4QjDPXoBpmuDAaQDADUKw74Au6CymWuv8XEZcbDKcTUiZdxzXi1xpFwq4Boh65CwMNtipqCzSN5RYJFukUYa",
  "key45": "3tfpzLMyWwMSLhpAfoye9jYu47hbiLGRXoL8XXyXDSvXKcD8StV5Riv7WbuFExkeKr6cRSykEEQjDvFfqs7R5WGS",
  "key46": "4TPSUBXZeZ9vjrwkwUhCJLxDX6BaednLm5avqrmdPXsSTBBkkyzU1YN76uBqEgrjRtwDvdgfmEbFky8FL5iTe6md"
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
