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
    "621wtzDdQbDXEq86wjta4KoTBshDP81xiyXQak7Rz1UDLmDSG6a1RhjDM1RVm74TfARNE3hAmsRFQgh8y48zRKEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqqE37iSWMRQVu2GkAxeqyuVS8aa3U6MKZNo29rxdVQuWXpoLu6eLKmV7iDeC5UyH9UsBxoPXmMYBteiFY6yD6T",
  "key1": "3jgZAHsqhbwNHfuSJSBjHAZwmQ9x1fTfpKiC1QteCimu7YqkQ6PKmpdV5akVTePPfWhh3GSseeTjHsxa8eNWK92c",
  "key2": "5qwTdVhna36doXSuuCUb3gFq2LMq3Uo4azyhZDyUvVCvscB1Avk2BTzyttVS13DV9HN8qkFKD8ZzSMfmJbe1SBo8",
  "key3": "5st3WFLmPwApm6wBmZQwqxnUZiRykHTYiLbHatGhdonoAHAP7Zn3CdV44YXyF7rz6mdbSMepPJ4YRETkUWmCm4Wv",
  "key4": "5kMAnsPbLT3saDUfVxSSVntpyVb5MjMs3RyBGFPEFzqMWy4GeB1V7A2mmvXQtrTaBdm1nYHHT1HsQEHmcZXK4Hc8",
  "key5": "5az5sbJ7oWkzcoJWDYEkphsvGb2xJLF2nUWGQMFZFaxHDQLVV3UjWe6ULTLxbZrNXLxopLo7fxEuRmBcP8KWGFeX",
  "key6": "4uGA6A3vqjwDfk89sr1oFXHFDzfmpa7NrAAPvpnrqXFQGUT7ZyvwgaFyYZCYBsYtLCEjsh2qcGTEuZgkysakAVea",
  "key7": "2GXw4ydCQSCVvMA8cbQCw3r3JBADgUBqt5gVZVXpb8snsSAY7wuArcW9nRhxLwxbFoNFboUwSBy5HTRk5zgQt73Z",
  "key8": "4UdffFvDefnayYqmqMvfBjZYZRYjBJzekZp3bcatR6Pv6ogZMYpgyjqpypjppvoUiiKAZtV5vo53A8gedFsaYTex",
  "key9": "3gx3QCbePBPxqSVcSGE4ttfeAYB3fANjkK8zDbZk28pTvoFts3efJc6EpQ7QegAMZXqB9jvqoA5rtJsjCLnMoc3M",
  "key10": "56tkv62jX5yus9yTao5BRyyaMtA8CPPFRZABBQ7PXseScjFHEmPJFXUeoaJXtCZPj38NP3kgoQCq4g4j8JRLi2L7",
  "key11": "3zUcZUHwLpBK6MWCw1D47fWyRpBy7JPDLZwFZTyRm7pUZKoQoCPcQSehTVwZa2sD3epSzb59u2K9oUuqqaq7SoY5",
  "key12": "4Eyb6ifc5iWFfngbgfuzGLYJN6kgNp2Vsubtt3e1AQVL9avoUdiDAq7QUeH45Dh4k7MszX4vyH6ygF2edqXAMBti",
  "key13": "63dn9cq3RsbCFZaxG1PssbQ8vkBMTPT8tR6tHNfcSkyNuVH2J2TQeiLmvC6zAjBxaXaqESbS2jhhSNTzPb91SPLs",
  "key14": "5hV5JijHJk15DhUn4Z2sBHjXNq7VfoMnRuHHCvGLys4XsV8vdVJor1Rf7YLsSc9mmSvccecfoSJkzQTdWd2jBd7d",
  "key15": "5CdA134ZxmTjYXapR77GwGjAJZgcDjQananZgrnwiHZ5GY27cyj5SA6jCd1grqG2jmRAp347nyaivZSeQSc3AXiH",
  "key16": "nbfJYRwkcpyX5FknPfwVmMKJV176ve1gG4pr6JywRVYaBoifkhZmM7Q5Bdjts5m9VeeZiTfbfJwFo6BFmAL1T2H",
  "key17": "PE2Zzc2juNcXHh974qUtsjMk1yeong3BerdgnmeQ26PB2CtrnQFMfMdGJTVrPT8aRxR4Hda2bUYADwgGuye1QGT",
  "key18": "6ybKjScnrdhiov4qX7gotvHxXHRztQ1C282sU8UmhKauceJx9UKGBxWEeofcrqQC6pY2enV91giCDAHs99v5jXa",
  "key19": "4ueyR3SJaU16wmfSxh2Np314Lw2dJCVetu2BtU5bRhetxNgap2JjNh6DnLg4yYMTHkNdW5ZEKuQftzj9fo9Sge8h",
  "key20": "2vwjY9G5UPQ6yse7WYqVTgeS11qtVvfAmUAbrDC4TeUf1wVbYAf6s5zfmPFLZ5QdhmbgQjuLk1fa57oDRkf8bRR4",
  "key21": "2CzKhMEPSAqZN3NdhkyvRTN3Maed57tvpYbSxtzLwTNTMibnYwPoU1JHmAy7MQa1XqEVUzxpr5jcYLtFr1VJSYAv",
  "key22": "2df6Zv6ogPVsEEzet2jnqpkPM1cCfeecL7Q7jzoHtVGidzNQugvPsFGkvXEqnpnqSy9MwE19jLMTK9pKsWdZ3E4t",
  "key23": "5CbeSpWmwujQJ7jEVXjQaRNaPb57YWXrZknEKxusqSCfjYQr7VGQPoL72nyemQ9wcVRxWkMBQGvoQQA4KC5HyuHp",
  "key24": "357cZUwYuEXZnjqu54MJhh4XFPpVEg94fBEENR8rXq36mZXUGHqnAbEVVgzMjD7Rbqmyr1oXEGQLECRJHE7FuiLF",
  "key25": "4UJhRopWjKtixoVmPFqAACMCTgcGSQiTmsi2EMoxeD9hjTPg1CQDjqp7i9vRjJ6b2MEeNkWvhfVqojeptq6oFp6b",
  "key26": "2m849UfPVz3iR5q46mS2hT5Jp3K9uFsTcZD1aoCfVyJ2wEmcuNQUdGcegsKomCcJHsyAibt7GB9qcHD23uqEoVBA",
  "key27": "5TJu3NhJJTmFwkKsRhWJuqNmh9CHzxzRuLXCiK8zvxkCQms3K5J9JWuX8DLvddm8oodn4jiL4bEje38JPZE3TuqV",
  "key28": "4FXiEDZPYYLPYArrcU5Uqzheb7VfeLFvkJLCgScY3uCRkK249psykfRYtPBdUsYbwRh4jLSJsfsjYovZrRusQ2dJ",
  "key29": "4c5hFF8agvjazw8FbWNsqXc4PFZiRuUCwNFmAcmXuyUvfRzXmC3GuhEYEcHGH7EggJQyL9SBieVitY87uvosLaeu",
  "key30": "2LR8iw6ZRBUS5FLhcSMxYC4VqsdQBrdWssVosdXJUeSNTFPf1dk8em9TE7YL6NBgPCtgNTdnVLWmYqPm4qJnZeqj",
  "key31": "28NnyRW6QsrgFL2nbw2aWeLEotPkK267zxNBq7t7DdU1uoAp7Aoc8TVhA8AYjEbcDRQJaN7UnkmwukZeb3Zywvi8",
  "key32": "4bFF6392mKNjZ2ZAsnx9Ac4o8eN48LLCBwrtwLMwwpNPTL5LpxHGyLAdmsh9ptKC4Yy1eK3KrqaKHy1KW5Yt2AkL",
  "key33": "MqNZyz8GJhMq1vo46f9zVmDYpVBpcCzVbDpRjhnao5UK4bRwzK7dRbgCV95aYXefrKkyitCy6XJhxwxiUMPS5WY"
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
