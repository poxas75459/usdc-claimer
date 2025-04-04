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
    "2jyzMXSmTqJvn98Jxf9SN7iWwuJZDMpq8sQRaxZYmAjUsG8Dn6jPTrCS1Ys3gPbRvpzS77cLU6ZirPkiy5uMqBLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ezvip92vX4AgmhYAUcPE1GFzZP2VSxLA5NrBEwKZVjojMixgXd6rZpaxBLnF8qFaxSKoJ6RhgLApQuuHdD7WMQV",
  "key1": "5PtbZFs4s6hLMRoqbGYQfVZBdC3WzVgwdNtKdDkZwZvTHWL4MaSCsEZQkG3ke89bUFKYq7i9q33zGJ4foQnmbjSH",
  "key2": "28ajTYSVxdZZSqb4oEHtohHhBkC77VidaRKTyuW1ZqSBC7zmd68y87qukxjgeY22ekoXASvEU837UpEa6TN3a9Ht",
  "key3": "3L6Qf3vt9azipNHNe4XSY1JbnJyMFkAbDJMoJCgtMvU2V43RxMcX6DXsom8PsEWz5MSQfhez6SK5fXuLpTJRany9",
  "key4": "3NU5jFDRvCrS3keSN79tY6ygeTrferDJWcwaJ8Z4ELeYGVk43dsNQhS49bc4xjX9xoXx3bMkRXHYM5ozKeQa5FeS",
  "key5": "5YGnck555sdH24DgGvweWBMoDobDunSA2u49rG1i7tAQbc3aNZMrwsHqmcZ2UnRsTciTqMNEmXpqwMr8NZ3LNqxm",
  "key6": "3h5fuBSLi2urwZBebPtVctmrDZNUxFtT8yQivhRXXxY3HNw2iubpjq8nnFmnzPz72nn9Eej4YRhdCu6nAh5zENEg",
  "key7": "3rGSTjFVSTgGK2gcVqPaG2AgyMn7UysvDZHBM9AkNwEGGgurbENT6rsavFiozCETnUngMapPAVKrE1F1dE5mT6km",
  "key8": "2gdMe9Yj1qYMQqa5BUKAV459GJvmdHJL75idtGHPsyLjtp1JkaUGi1xTfqmdaJx9MtrKXMA67RqxVGqisVfTfddo",
  "key9": "4LMQ4EPeVPDeif2Fkq4AG3588BjdLrGsnUTJiWtHywgYBRPMLRkQ8QMaYgzYtytnvRYFfv8SnLDfnW7jEEk4zXNA",
  "key10": "aJHPQBowzDmXcduajcnDnL3poA7AQumVxZbGAqphZ86v93Nvtp4qsTab2Z3uhkUMbQ2ry8qZNW9GnMrTaEFn7gU",
  "key11": "5rx9ynPimT4WbJmC335icTbzchfjdULGhKBA1Loe6PZcHVqk4sMu3Rq189xD4dJqYUiwa7NVQb4MxbXfxXTPzT88",
  "key12": "5FXKYgs9zMSVakydaCcQeCZNkaxTMATC2SMfqDXikLgksJetHLW2ZvwrVwu7QgYc9c5NNCxjWrHeFzAQ2x1gHMb6",
  "key13": "5FiESr1UL5hpiZZ7veKdHZMcjQBrdfWgRTii8mzCsZBut25xWX1X39jCDWbyNYYCeURCJZJzLBKmHFNJ5W1zR4ms",
  "key14": "3FKLiRX3Saxiuu1e6SfpptudmuSV9YeKy3UW7rSjWVrSsgd2iG6gadJRa9rjvkTQAniZEhtsYx9Zdafcmd523Rk3",
  "key15": "4YzED7SRzjQHDQM8LWNLkdhr6dwfd9uEewMBoNREGjxGRei3KJTkb75JQa4yvQhhfNbf83N42mGr5m53kDGnMYRs",
  "key16": "2AKd9RterZCQJ2ntG9CUDy5681eCndLDE4hiM88D2uaSwToLNBrDpQDANFWqNVKDUt5bFP68akT3m5wRMFg3pLPD",
  "key17": "3TaueEBCL5m5wvQk84wYQpwhyvmJUQz9SCynUm3y5w9QqvFkXYBPF9LeV5WGJrcDuCCR17vzLVMJUXhC8dLjP5VY",
  "key18": "4MAWarCAR3AiUjqcRMM7sx1NiUbp1aqZnsQAzq6tsTikM4UchxdKzbWFA2xJsckhQi7S8uwqTYBf1tMbR1WZtRLK",
  "key19": "TDm2i7RzTFKdbYyPc4AskVE5hLLEafQyjY7cPrTPJPAQwqYhJR3DLjfg3VwApb4EPxKEkb78Ra6uJ1GAJwX9Zxg",
  "key20": "4RaT81BrKjqR17ekpTFRPc97dgrjPJfsBtTBg4Drw7JPkMUXtGyYez2nw2BvgvUREzNQ6kcVPn1XKNtsmdfVS6GU",
  "key21": "3CBrsKkdZCf5pXSRJN3iTyJxqooVQG6T1xLezLseaKKcAWVwGA88og8Ks2Hb896rtNHeirdUMizF3oFVEtxRrHcM",
  "key22": "2avFVVsNp8QnixcAM8ptbG6gAMNjzvfgEaAWhQXfxNNYnHsM31LwcSyFLmauvLgXF77TCtCrehxQguiW2MmMgLkH",
  "key23": "2Qo5DDdcoonwbQdEWA6PDAwxsu6oWT5buDEcRJDJoZcrgvAbtXewg7fmo6Cmh4UExpM2R4xqUrm55LsdxoEGJ4R",
  "key24": "3u3XwKgjBh2rwNeTUd12EqzW96fQnt32uVYma1aXhbHKca8jxhDBfMQUiLsQdNSHfrcqJYPQPjG7SE3jWmoYvwr9",
  "key25": "4EURHPVQkskV26bZwaWJdhmk6GPK4WkBpAecuyCmHNhymQny2AhgAymQE57THTHwjcn67wYqWGsY8esBrtxeJyEX",
  "key26": "MeWuzS2qK1xjYwtvnt3Sstoiv3b2UbJYx8xzoHiYZFimyzMxdaEdZrsi66y1adBFQwpgV8f5YKm3o3dSjPtDhWq",
  "key27": "27A5kLaxThDr3b21tgUUuy4cztexPEjJXp9VtAwHmRusHJBXNHCmARaucX4oQUKoV9Hm8yrExRkgDSdNgk4YyYcY",
  "key28": "3f2DEuTeegcVZ3QToFQphwpujZXzCz9tK8BkaiQBw5fdL6v5Mf7wwEV4xvzH3pCHTHVSReieKEaSF2tNurePrPWt",
  "key29": "66YYi3BFrSDYoSD8f8DGsefrnqXCMt2s7425zqddjGnRzo7sHLg4TnChWYHV2W8Ku8mFYw5oiovwG2rrMutPQRU2",
  "key30": "4q9UoxrgGSr56UfewZ77tdDZqQ4xchbYsgfFrN41aqja9aBuuRa4WV9Gxx35a2aJRc8YbdajVRhgqXN1pb1wm1y4",
  "key31": "zucNBpzm6LVMcviuCh3MdLfL79hUuwmKqzAVq5cpCVhb5tvHN1CLdbfumyR7gpRa2FBPJLSRSm2KcLHPJpQ5aTQ",
  "key32": "2eZzB4Y9z1HGoZoMEKuVLog56HX7PZ1zMWUSfBmWZBnNq8Mq3N9D4e2b4LzTnZ2vDVm6bzarihBcqJFhaJ7wBBnD",
  "key33": "5DjXxsSP23H7bzDCgaKBVxAeXeF7HZwUQPATVYSG33FH1xZoRmsuye8jzyUMkoeptbNoipGZZGe43zxGqiWXEezR",
  "key34": "4gyi6MGdVfZT5Creb6zdiNn59FbKrzqu54Q6MuN2FNYeSMcmL4ohGuxoebTCykqtmoJXcDiWUxcsZwJTJJvb7F1B"
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
