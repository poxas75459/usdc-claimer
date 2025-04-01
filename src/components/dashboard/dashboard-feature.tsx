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
    "5FhFZ6eWBF3DoV5Cff11jkDujdbAy7UqFAPEngrc5YKwxxN3EdrfLbrNJAsw3jtQXAxhQVx2bR4wq7W2CxJKzmGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbjGKwZkvHGQ2QfS6rjQnVVXFJ2xFdJWBGAMzFp7iDtUEYsYx5Hbr34tydk1B1d54MgGVXxNLLAeT35KMfFr7bS",
  "key1": "4CHi6cZ1gZqBYN1SXwGkBjg1fZU4H85LMbHsAA8c2hqLm6hFG2tczoRBKaoui3Km2FaCbhy2fzf8jNcq4Jn2rXHV",
  "key2": "28k8ZtfGLewzTp8Vib9VY1HuCkhQFJnYsjr8xyzEdajzpNsWuP4rZPFJ9degTKXkymFkz3zByG3bLmQAhdosBPSC",
  "key3": "notFpKsf64MxrDitR4NahMXkuUhn4Ntw3Sh7iDpNMZHWZNAff22mxLXq7vvPxfhDY3vmQeZmrPy436KaRXHnbpW",
  "key4": "pT6w4c2TY3KEp4pjVoh5dHpabiErjBX16RStxYQsgNgFApyWaiRfg9q8BMcWcZmarcduSB351SotUm5WdLXt6Lw",
  "key5": "5qaZEuLWNeyqSui6oivzXCLYRLMVE36BERL7TJ4Abf3XhdmpixEMRMN5tkvp4UE9mWEXMZZmM3VaeyDgqxkENiNb",
  "key6": "2HM8JGF6EPVAe1CdbqnzWNayopHmLPbBaRHegXqizNzfQZZAJudeaYf6qQkVqp1z1SDoFue4ynSwoMFfUbA2vq1Q",
  "key7": "85Zw8ADTHUHSkDHVxduj428fdCdjLTuDc55n2x38aXL1hdr5ph78fXZm3hkjRn6NR89AVqMhC9z2Wv5ThMU3XCv",
  "key8": "4biRZq43DPMAwdx7cD8YAVJyFDjhtczjZ9LuWFz4PZDGsrAHmiREQSAauL8kKS8xxfEhEFKErXsN6kxTKA9fQa8M",
  "key9": "5giEr5HSPvDcrfPJFGTfi5Hwe5yLtVZpAvViUe7xFzfxY2qmYRG3Wzt8mwj2G7VvFw2czYjm9RLwgWwwn46w8vdc",
  "key10": "2V55MHSV5Q2CmiDzcanYitMVMiD8aCJWbGcpa5V9NWknznfV3h45vuKsKA2DzuhVzq64skDB94jJkSQhyFVgatTw",
  "key11": "3atz1mZhzgAVcauUBGX9v3kopdKxBmgwQTDJXTe6mhaRpJBe41TzG8BxtFD6YVtuCSbtSbcvvNH9ywfMwZVuqY1P",
  "key12": "Gmv6znPgDnoQqQYYXm6GS348SP39ogU9THGJCtWLuzALr9bxQtGTJXfrUvjBP9SE2v78urRA7BDVhrooHspksBM",
  "key13": "459nh1eUqXFNXTrdD6pDMw5tsuxdFocgNPgRp3kdRtMVszWNoVf7vb6VBLEscEUG1tZ2fFA6o7VWBV9Jph28Ut2H",
  "key14": "2trNkqjsZXKHenDW65x3u6UvXFygeb9i63qfRtMZPcqLPAp8Sohy2bAL1rcgxUA9CskSxBxmd2CmZvtazpMYRFBd",
  "key15": "4dhjtXCLEuSXNk3afjoCpvuR2YPygJ8UuxqyHLU46CaRCpAh9YczNzreCPYMx1put2wK2wQawrqWkrc5PFwj6Q26",
  "key16": "447NM8ruQNfJiKE47jzLnuzkKbfQz38eeaM5yuhkqHrqoDeme83aTK9ZdzVDbpWZJLfy3sFtEZd8A4FqqgpecEyR",
  "key17": "4UwXPuvoANubKjpBVuvV8YjTH7ZVETwTUbRizKoNphBUGBd6PDNhph1upYv1oYP7qkyKghkKvkXEjuAA7Q4xMw74",
  "key18": "MMWN4MznyXJM9xD7m1vpHMwAkYReq3eoNw2VgocXj3PPZcsmxmZyXx6w5KdDmbsTfURqezT1iwYGPSMGU5jdHDj",
  "key19": "3LrdocsevcHKEFK3P5D2yJGBe3Lyg1apJbqSCeuYYuoN65jzC7FbDw89LNXUKdq5CUoYevRRw8DaUygBNE32J7C4",
  "key20": "5NQP2XBVLih2Ajy3uQUmTJatETU16EtEFzwrUPVmPQQQMSVCitvLDqiLm1ZcX4vXDE5MpduyKCddPJZYKPhpp76X",
  "key21": "2RsYSWW4vXfR9VmZ8he29TNZr3LAfbSZCY5wY3VPaLKvAwNvUnt7k9DhzJgdaw4kxRqAWPfaoeUDJkFo48Woy8vf",
  "key22": "5JouDzsHmfiYFr1pXiyABTuDJYtjKHsi6Qv5CQweUB2uPTgW3nL76Y8X5JDHL1pJf8fJ22AizGiYwwKDNsqKM8v",
  "key23": "39fn5n3uYXjUBPxmf4HDHAjc3rU8Z5MX7khQBSVLsAbPc9kMoQW1c9NcTHjBm9Sbu4S711Pcf8A9WfE8BqxnNxDv",
  "key24": "2YhszUAyCMrEDxfVHjW4FjmhkXfHnv5DdyGLRJoJ457Sb33eXuMK62FHz9cEDYJB3Jcpck4yCSZM41Dus8mgvB51",
  "key25": "TyojwmSBKf8554pKtwNXeWfrbukmtMjR9YPGyLDgz5MCaLSH1aCZNon9rNq6e8cqbjbFoB1pbnpQgD6uaMYxzBb",
  "key26": "64v7mfGS2d79m32q3wFUrBW1rvtpYCQo5s3BZ35oQ1nKCPnwi4NxqzKKuDB7BXaqPSx8GwJzZ2mgNRnmz2AXzMr5",
  "key27": "5Pib8NkyKvGt6qe7HiggffPPsoNpQgpo7ujpND4qUv68Fmc8iXzAGsngfZoimxzbEo8S3CDoKiqTPjh5gNfb7u8D",
  "key28": "2nsDyDVfX2Z7H2x51dyxtpgmbghKmYunZTxSQYYQxDcMm3XE4Bb5FE9Pc6WpA2z9SntzZocRaUBEbKy8LM8yRKE3",
  "key29": "5urC98dWBvDwCSaq7qQejAod3nF7vJd4eFt3CFmgPjUQkbh7dqovEnCtsno3Zwywjsivw7Wz3dU6Keq3zkNvz5M1",
  "key30": "39qZcxPLNEYFFJUQMemXhP6V32ujq32thjL6u9SJ7Rt7vRsN5tAPSCNEBXUbSqnYcABhSy35ie7FPHbS44NwZECH",
  "key31": "3qurUpNPv8D6EE8p55wVMNzXXGWBatJv9wJ5u7B2WKwRSu9hrPDxVJFfRW9uLEh9EKBWgAprHyWHbPo3WYWNwtV5",
  "key32": "2LrTUDWnHhM5XXS4Vn5Z9A3fhfHbdPehobKAa98imecpeMJU5Qvosm5tEfcPJ9bukKdR93yDB6ixsu2K6wXJeYYe",
  "key33": "2xSHcwtDmzPMvsjMSLjAfq1BLH7sUwQ47pWoLGXn2hvwTgWGavQ8pDBpZKNGMtasDfegUtrMK6hqjwW2ZhM8r8iR",
  "key34": "2USkRXgQ3i2fPrGwhpCzRuxu3L4FpFWk9KeDasxySpgXefBm5ThpQngFViqXvsRvxJQuHRMdQo4Fc2KvYjbNpUQT",
  "key35": "5hQqVaWSCgocmKsusML4dUmLJERxAkEukxfeqafLomFR4pX812vGeQcZHFmQLNboyKG9iscYxTnWEKqE2QT7t4hB",
  "key36": "rHgPoYJCwNDAotZUL7E1Wk4YaosD7KyswkyBSGk4ePxvpH2eJzANkZLBCM83wgm5jSGx8Bu3o6m8nF4VMVThAB8",
  "key37": "2yYTaYYCvuEUk28FAcpQfvu9J3UQqgu12usa22BGvQswBUNAjQRdjRR5DQXq7JP5kx9kwpeA9jt3qxN3XrHAQtUB",
  "key38": "35714qJkNbH3HgEtgN6fwLNhb3RBmGzofkxmxqpLmux4ERQwpZabUeCNrjzEtsfghC86c455bYK69LKaZ1oeyCJw",
  "key39": "CueVyTmqRyMr7cc4butnUKf3thZysADrURtfMa49duy25rioruBPpSbkvs49u8w2BV5hH7WXqHvpAw28uHA9bgF",
  "key40": "63HBugNKVvAadSnxZYva52kKguim1q9dxcksfJZWT7WrraCFX33YYHyvawRuNuUHaPHrcsh7zBuKAF6DWcZtcEHG",
  "key41": "3UbYnqbPwAJLgUbY91T1CJZbfgAt3VNwemBeDVSsugUmiMp9GPVjm8StfdiLz7YU5KqZpZGbzmvmFvGhMtMdCFfm",
  "key42": "3sJDb8gnzkYhDncTnhM7aJpS3mJjHTmJAEAG4ki8fD2yJeuQqGaBvMLe98PY1uaihrkSYEaKNjZhUWdeKWxA7dwR",
  "key43": "PmChVZmAR7ZaVuwXo5h4kNmexrQtJGj41XAnrFZQiq9nDoMoUg2BnM6QrMvWwLJwJoihRpT25oDEaDqXve7qF2j",
  "key44": "3aM8UoTqXHgFxqFjeREMRd8X5sWGpGEXrkSZQbQZCsUzuCZkE3FpfK95kyjnX1epxxneXoHT366tkSxSKu5CTrLd"
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
