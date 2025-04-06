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
    "2aTvip592DBguov1KZUngWTq6fLNm3yYmZCctTSrWAMFGd167MDQrbXfskZB6tP4Y1pubdbmBJfcjVYGDoBJkDew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECMREF1UVPvZvrsSHKm4YHd3AFh7LAfY776ULXb5oQXQs8xC18SakLZ3hrD4auttLPq2Uk3rQVXD2MTCwjoC7nC",
  "key1": "cznLv47xN7odgsfT4Wgy1vxEnVNivqtCJTQZtuPTcAoJ4SpMZ6dXryurEsvPu3H9eD2YBsuLaivnTUuVWx8NGbi",
  "key2": "5i5jnUM6X33ig96nbEvyYpktLHPZoi2Kkcfg7Ht19eAwL34j5gD75HNw9PTfEEiXirXskL1W79KVNPheXwwUuKfs",
  "key3": "5nAH3K7Tqc7DE3Mz5mqfDu2ZcAJt6UBXK32Ba55fsjKyfhLpM21GRSWyZ974itpgYQgAVox9SiXWzAf7ZAW6Q5f3",
  "key4": "64g78byVym3fjeC5TRRoqAgurMh9bg1nJBYSoaoCoWdYfUD1MozAMcCnXH3RKZMdSncZSM64VVqbQ3FWF9X6fV1L",
  "key5": "qQr5zxea4qqjmq4PefyYzYqi8StakLEtksYUqhAoVdSZxmogJUzLr7XEAsrWnLQpUedBmj8S8ACLF1kdbSyvv4i",
  "key6": "5C4nuv8Ga8LK8NAeRHN5GuCoe6YjJWBLwJhnK7xjwNd1JvJtNHDPowvPrE8kBHG56kykk9H7G9ho8MuqJ8JwjDop",
  "key7": "xATSGXUGDNrF9P3EK7wZbRUggKVa6g1t59iABjVb31CzWRNZ66oZsKuVUYhbWZxATpMpq7uSNTQqtA1mHZxmnvP",
  "key8": "3Prrqy449gpUXUJXh4PmDDzQhXUS9tR1pV1rBphBnHNkYZoRSqmoW56RxGsqoXwzK3Zk65Kkjp5myqxrbvrAnedX",
  "key9": "4B4KMSiibh4Vf4dLHiCRMhdkx379S23RRzVm7hXCLguhdFTHXoHGNemaE3EgmWfwDyD1zmtmQN1d4xX6kGvK4FAu",
  "key10": "62PUkZpojSoTeH8ELfeRZTgp36qaBGZ9s7LcXFmP4449KtimmpnyL5fHSDdidSSsmutRyp8NKxGHSZjGrM8aWQuR",
  "key11": "368CdMvGHNmpHrvUnQXCJX42gydLaE38jmFLTpGyFrrAPJwjdarpJwWC4W2AQFLiGzVUfT3bLVR6UKv7KQTzts4f",
  "key12": "449rvy7wpvK6bJFN7iP1bXpvLy3D6Quy224zTuFqYmk5KL9s6TBposUqNR5Pqnsvfoafrt8E3nGthwXwim6F67G9",
  "key13": "46utZDDnpKW9vHG1e43cdAT7SkinsLrp8BnxPAb8Kd8eAAMTh6tCUVj62kkR9Pd7eBfVzYDvNKjPHFZr9zi6AM4N",
  "key14": "2puMy4JuHH8exA98THjw1T5rhJVLYMSpwbT7mjZGprYTPUsCv7mZLp8ucTwUAWUvhmAg34SCvphW11pbe5RUGTzo",
  "key15": "4zrKmBD6mRLjsUKGMeWquRYHyREv2YnvjvMgnxV2AgwMYbyBRhVa7MxUckgfxkRq2UyCCJiB4eJnUv4cuhHf8HZ6",
  "key16": "N72Vde2ZxBZsM5G3MPKg9mEdX7wTG6yo5o5tXvGHrgibFr8S9PzMuuH1yP1NGQPabETkRajMqJJunZc48CUMFEF",
  "key17": "9Q6c8bRhG9p9AiabAfEdY7MKXbDgsECNNJCSQkGWB6oPbxpxWbiR7HyNAKCo91GWx4RW3vTkK7M9Shn5aUb677T",
  "key18": "4Q5eiPxo5b8C2wMQTNGHEksyaYkTk3muLJvAKKrGtKhUoFhoNHTCA6Knonfc6ocruFm7NxPfknuK2WndHPojvVr9",
  "key19": "4Z6TAYtYKgjJ57hNZV8e1VwcHTcH6xDHsKvV8YFfNLooRvNLzCTnfgY4yPcVmJcxbuftMjirswC6eZsXAEkZfSEK",
  "key20": "31Su71L7p6GPGAqxzmavfzaSVTP9J7X842SSL1pgyKTeMfTZuve8Wfi26t5J6XB5gz6vB2eB3QE43ET2NYayjJ4E",
  "key21": "41zVFrpbRQJzMgVk2gnSCm2ELQCVsdzZ5wHVWh1FjCnNgvfZFFQadoXKsgEMR5J7e5kbKaaQChfRdz8n623CMQ4W",
  "key22": "5PAZtWoxdrYGhUF6YnpycJP6vUNjszFy8PKWAGaDieiVW6uJd8YN3ara4hUk4ifrbFn7SxcXLbC3HVNx7pZbcs8Q",
  "key23": "3uSLH34TofhqZbKr3V3kDiE7aTzpNMZy3xvdA4shSGNRqoVaJaACFDuW3ahM2C61bgSJYBNpgTB7YxNi6ZUF6V6H",
  "key24": "4UNKiaqoF8xyYUMkSkbQQNpjkqY4Up4xsAA9Yw84yH7WMbvE4PiwhzpobVqzt75CqQvubWNmwTHGwU2rrrsaybVe",
  "key25": "cu4wQ4RbdrDdPh8T3LpK8oJWcjoYJAkpaYZEtfhaKvx7ug1GPTYuzoLZpqHBUPa5gBhvd2rQt5MwFTJ4oD6E2tD",
  "key26": "44rBrbJe6gPeoX7z4R3nmQQKh8HjrVuhvcJazHU9tB1tkjMYa38u1EfkBLCFJu3r2ZupbNPL9vH3yQrT1RT2fZcG",
  "key27": "sPHYK4WabWpwA9oAKvNZ1f8VsbQK5e8HZcnKavGC7G3xxVnjqTNXTGRp3beSJGFQ3qDUUF8JPJUMQezBta4tT3g",
  "key28": "3w21YpzqUWjADxYdTDWte44BAjDZ5JQLBYXEbyAxTCXkbbY1BKFdRJ7G3a9MRF53AH4zDT7DKe1VE1TcJkHYyEa1",
  "key29": "4nRet7XbX6rNBRTByW515n5tfgq4DSr1qb4j2ZVAziexJiGspcu4s8182MmW1ThevFpmmEDg5EnK6GGtVYdv8VbV",
  "key30": "5UNFRckkB65pDwwb9gDxYJEPQpZH8EKR1BCn7LJWy4uvAnsXxUbHoeZezaortKsiqDxRnXfHt7bZwHwQvMQwLVoA",
  "key31": "645RCAnM8Bp2gFGUpzYr9WGCpVjWT4c3tQHFRy5oTUntSQgcTLMyaepa1zmoDW4Wxa4wqNaCUUVW5cMspPvnqVFg",
  "key32": "ZXR6pAGTrKT3ficLhsSPsJtbGyvc916Z1zQGgfVxwmCE6ScWWkyUVbbE3Uw4CFRm1xPuS6RZpQw7PcEwGiPzsdJ",
  "key33": "2mt5kAhDy4BXyVS5LLn8dFQsNTFHdW5EeQ2dcGXkG4JwX4zPB5UNidzrZbZvRBqKSkaNco3vDmYroMA8sDEa3X3c",
  "key34": "4eM7ccGLCuGBr5t9R62SKjeKiQBuMgKfRzshKCU4YCqSUqXifhXCdrSzn3E4vcjmb1ABUJVfrSB2tKcT5Y4AYrig",
  "key35": "4VrWHtr143KwtXDAiafVWY5j4s897eLqyijzYPRPDhqKEYvfHT9pvwwoBw1dqmgAyWP9LBWjfRazRwpsmzAS7Ui5",
  "key36": "3qkFPDSP7DZdnqMz3YcTvvdbT23D8QwKpymtwXxozGE7YuFeAHGUvPs4fZQM84YKFCPVQmYivEWvgkeZStdQKJhz",
  "key37": "2bQm4FDZCJ5hxYRVNqaKuJV4cfXPhJT5GDvwxS1Q6EdwX1jG838dgK84zis1gzKo1KTN3QA86N8KN46YEidD6xht",
  "key38": "4nMnckkPhXL5b2zd5VoL13ybD9nbLaufx7fPUvbXfw5N9veh47UrVYK7KraKCjwQBgmb6K3H1K35hU2QJC2FUh3p",
  "key39": "4DC1kmysXuUYeV3zbo94seaYMrvjpKUaxMa6yJAThbxiFtv23NWssJ6RR2VfeaEL4oQkSM8Nx1bkSXNaFhkkcuku",
  "key40": "4eTA2wUWwRCkLDtW77esi3MguHdwV9Xi3h9znHkdWnBc5nAaYtjVbYkUhrNry9XYPqRckRYvX6HDVzj6VwkQSuVq",
  "key41": "5t34tUfC2oQKycEGf4iCpwTmngBWHS9r34ewq5iQD4TZ92BPvwSUjP28YiE4EdnmDdP5ssVYF8YsZkkEC7EfDBZ",
  "key42": "2JQvZ82PaoPmQw52TBUt5kpPJxbUvquboCUAiojhBXYfu5QYJ8HQ78f2TVRqcZXixrs5osLb18Ftfc4WZx1ufKmE",
  "key43": "3DfZ7d67iLhULHbXeyXoNznFZ46Z73JU4TeXHbJq9kLSPBXfsWnLxJmj2qRATdJwfxiKrFGQMU4nxEcDem8jvHgZ",
  "key44": "ipKtEYikgVMdGKQWsYazpEvoKxU6vvs9auivhMnSPKpg38NLE4WLkS7vhsxKSrDydfM3x6swGptkAkyapLhcK9U",
  "key45": "66D7HSKRVrBoohjfjpcHtdhsdcNAhEjFgZ81WnhEmetDE3z25sh1XCcsUxbzTNkgJmbvw8RXsxYXToCar66f2fZE",
  "key46": "Eyt5Ze627pPyZEUZkNMFce5nrHSrQJpnx1yzBAKqDzY4Q794aFmbkhSrQxrYWt7LV3Wa37Pg3j7WmUpKryWPBZK",
  "key47": "27BqrbtYfJ8hbCXL4KQdkcxizZe2W6sFm9cBTsNkWFzFDVkb2QBhGfJsXf4in4mhXmsN8sunojfdpCHV6qCkpWse"
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
