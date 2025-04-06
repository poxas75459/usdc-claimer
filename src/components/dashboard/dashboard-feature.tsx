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
    "4cy5A2mM7T73SUrUNzGCfmhp2zAbxpdrY5QE3aVy9rh9y3gSqQgdD2QqTrDVM1X82quGD6GoaswAkQYxJGdYHVBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hauqkEAeFbZNoUj2QS8qEejLb1SWfyvCWwhLpqD4snC3AQZbMCvYY2VwmimP77ZoSyWKEr5Lbn6Kx7sN9UesJPt",
  "key1": "5oE6JmuCm41iPpXb74tZYHYkQ2gErJ3bgCV6YPy2VomjgTcaNGGd692zRdUMm5cZwUT3K5LuRjJT1YTUTgAPbsTC",
  "key2": "65um9tHEx2YiSsVzXJSs7HGymxJvBm96a1jrUrDBKgiKr9Arkc9MKXviLaWSbvamTLGNvPx2KMTitJxM9banwW9N",
  "key3": "4KNLnFzyadejh7NLLV7Uw9bKG9kzJaLQPQ6Kn5ZSMtG8F9EH9MGWQT5BzoRnrVGsNNjyG63ipVcJhuevwyXpB5gP",
  "key4": "RDbC8qnQ9JqKJxtESCXLxARQVy4KP15LnXn8W6ZtQM6T2kEcTRLjriC6fd2Px4gz9LKJPNPyKWC3rujBiktQP73",
  "key5": "xjR7BokfKEe16yHpYKQFHQxrSVDhEaVvgEhZeUdmYRnNLyyw6KXH64BiKaA968zXaY7AAVU6vUsY9Gq4HL8w1F5",
  "key6": "2JjPivAvLKV7TVeRyCNFM4Ymbd5TJBtrUfWf7SHxJNqGtgBksrNAu477zC9UEj8uXc9HwQ4QkqrsSbezMxn82zj",
  "key7": "28wQCJL5EHHJCgcTAgvGWXkgX3WVteb93TwxAxN9CdydZg9n36XCc1EmKqvNCkhGf7WRVxSercHKg9bHe3wUbVsT",
  "key8": "3jdxPRhBvaLfPB83bkHG45w6vW1vHC1bz4YGXbShDEYa4ydokHkBahcnNx1BwjxpnCFuZLJoccCuKGZACf6jdzKv",
  "key9": "3gT9R7xDZRus3zTYPvp1RqtjnPwr7DDXNj1q9ZbFapQh6v1AeEZaQRhkrSSg9VV4jVd7RPoGeBEi8wTfVwQhRVUP",
  "key10": "3mKEBcN8PpdJTbRLkupiwbcbexbe3myzfE73FmWJKgcgwk6hBEohGKB4RWusp8yu7KLEPg7uNSeVpDnxMcbaVKzj",
  "key11": "5MEh95p6Tj1DdCzTbEQrjXAheQavfQw1iVtQJpCUr49egGnyBbhZebr9sTMqxgdJ38H3SuBp9UfN8reJm5j2PMRG",
  "key12": "38UgFsyMjNQx8pD6jKV2Lib69K9G8qqrPs5zG3uiaH4jJ4rg4oCUrAxbg8nXSNrxaH98DtacmTESkiVuTAhZG7uF",
  "key13": "4YzUhmLNC5GY4srDLJtekSD6CWK2462GkbXDCrpXkje3oK6eCZcpdczYLjw62ZAMKz6KQjsBDasEyWcNM9xCfW1Z",
  "key14": "4g8P8DdfovBU7shWXGKarL7McrJxkVgN5Xe5CDr5L3JBJCvywYefmXQ7eUpHcX37yQ3s2iQDobajxo6VGWiz9GHb",
  "key15": "So8yLfJXC4t2ymeaoYiaT73Bkj7RdNVvmNsRJ7M3Q4Vocx25czw4mpALakBN58ZNohtozqqE4Lj3nResrCjRXgh",
  "key16": "653CCQYyy7VMUsXyiGkF4TqfHHLkL18MT18ucccAHD3WBtGQF46NAaygnhZ1VdTP2JPoxgEw6pazFG2zFV6XwvZx",
  "key17": "5P1Hh9rmqAfxQcr87ipCckU95QcUoxbg6MWHFmwqYNKERSKjR4UQ7TGEa9qHt5J4fVsduTZobf4pyFL3319PJqkn",
  "key18": "WF5344PDhPC86RreUGiXMGR98Cu2cD6pzEvMnpFbnhLiZT43ZMSHuwAjLPxFS4vM4djmno3uMXCDVUmVL9F4VhS",
  "key19": "39E2ptw9CfYStEnN4h9aox8hXq3Vcc9Mz6DQWsoJDDnvSrPFw4WnY2SPfNsHoxhpNA5wfiPHs8ndD1PvEqKJKLZa",
  "key20": "4b3TWohActpt8Vdw96dxKwFF5ZtSfz3W2iS2YniYJHb8aCTH2AXaduKRi8k3LqttfSZ56x9Tmsqn6nrTAKAW6Fw2",
  "key21": "4VziZBDJiLeeh1ESVtFDBLNqWs5WErkbfpq5K7L7nbnC5xeqBffcvhnbUMjFjuVRLjJLrQ3Yvy7TfodByKubRPGf",
  "key22": "3nbfVRKPxHmPb3DbU4gnw4tQCbR8HKrmoKNTAgpU9Z7uXeoYsHGoykDi8Df8G9AK7uD5rGGoo7SnmhyTYgbRwciC",
  "key23": "3UJcJpSegRUFmNVrJifGiFFaN75bYw2jybARVXCE9epCPgJgsdzf9ASACQPJfASE6FB37PX9waguDbVzCbD6WCG6",
  "key24": "4jHsay4VTZJ7EWKPSukowcLNKoXegygd7YNAYUkdsx95hYGrtun8xt83GeqQfes4CrR11BS9GmYHFPGDasXt5saT",
  "key25": "5nibKE46omgi2strYPSZ8SgDLWxJryuGwSwFLeFkLsKZ6hrUYagJwjvA9cy12zFN6UZ8UhzGmjSVtQ9PYyPrXcxe",
  "key26": "2AGiNivwb9Kq6xg8PSSKtucaK5wsoykUHXJDSpae3eM8JtCdL6GUX7zVhAxtVAtGAZBpvJsXJzCCSUL3UPyyFfKK",
  "key27": "kkj8UbphxBskfoWtuvxtUcDis9Fc1NJ1kgzu8fv6FMV2SCnmiHuqsFbAKFUCi9CNVvw7GZrdc8Q1CGeFpu5Fsa6",
  "key28": "5UtZzqYAYnJKJxPd9z7rFPhSniZdvLMctsCRkDovYaVKg8DiqdFeiHpZWCFwPXMzbuPAhSvwM1ELGDdFTtZHWHCR",
  "key29": "38NZHHryxaeoRrFQ59ByN9yGcwvpzk6EQjxj6AU3MT4whwFaDuWLXDrbrT5BGMyHr12GZExPx1aL1Krox2ANQhiX",
  "key30": "4octtsqqKFmzPwqHam1NWyYxHjTjyMHNVFDMDekqpPQwqXNPczSL36XHraBtzV32kCSNFAbhLBHaaJmnaDpDppkK",
  "key31": "5CQhQR7A6uzLztrV1AWwuPFu7s6jNoGEyCHSHCNz925uQnu8kdPBq1mZPC6hrYaCMMaRkhjVeR13jqurQQEiqfif",
  "key32": "jJCTW3XiR9Qh5u29atvEk637yagjCVL4T5TkvvbJj4PasMiztL6TN81pm4tY7deqsnyRSMsAQc5Fg9a7BGjFZKh",
  "key33": "46Xkmti6MRFwjihLbKEpxtkiwFPsWo3KDV1HfNowsuLjWRiMACDSjVi5YR5HL7PUMQkUQxb2nm3g7ZaiBQhKUev",
  "key34": "4ARoheyVBfuP6JCeCR3Yv8o9jhdxVLniS9UmWHr9qRdnAnY3b71qUZiVFYN2uw3WQ3yvdQniFHxcpFV53BoEobUQ",
  "key35": "3yWt5rhcAC5nYUb2n4QcKw7rfoqGv7mg2CPh7P5hYrYJvpxv8suyVvSPbLJbSUfpS4N8JWa1qz8mti423onFCkUW",
  "key36": "556EBSzA2AKQFxLiBR9bz5bGWqtnWshPt9CSPcZhundo3NTmUJJjXExxu5DuJwJuZKeHG1EzfqWtGwjyn7r4bERT",
  "key37": "3BwkPgKmkwCNRNav2o3LJgjkSjMBNQNi9hzpSDLwbqLpHS3eX7TZ91bjnspGd5BrypSBj4fHuwpMfFsndm9q44NQ",
  "key38": "2ceREJSZPMc3b3GDRUg4o28nb2J5fXr7DMPVeWpRBnzH2iE72sPdbYjrGrnzgEtbArAACp6rqqkcc6JH22Hh4ves",
  "key39": "5uqsV4p4BbBwWG9R71hizyK3DhmzQaqv9YQ1gFdGKtDJqciu3CCn9szZpoBBg53trjgWC977xRrU9BtTxYf2tEyf",
  "key40": "4Yx8AcgL7rWzafMHsyUoM6mBuQ3vDn3tJVYrWry1nJ2UjWp6nmaFxf2q5zKe67Ss4GbCaD7TrfV6gsSdQ5gKByXG",
  "key41": "4ZvGFnupYyFrr7abcQAHD6rgTnZCdWTEGZcyoaJEjPcaiRxKQYJ7baL7GKN49qXJLt7mdiMo6yGVCck9RxgX7rXb",
  "key42": "unMdb4AqTofn8xabwvkwLLEtmuhMQu1rTEHVpHbAo5NxNU6YFc7tDhrMGjJXN1mnVhtUER9ZX9R7qR2m8uAzAxj",
  "key43": "2eVCL1xmfShcmuWBQ1wFFRx9z8FRhW36KD9uVJw7iabbR9Gyqjfc3aQFRmDxye63uVhVWw6d52s2FkZqtXhRtAgm",
  "key44": "5dp2WrJFHANQmo4wy9nV4nKannUmQqeUf9s69fd79zMGthzYnjeyKfNxHDV7a3ZxzYFtjigqrTs3VUe7ydh5QdRR",
  "key45": "5yGVy9hq82K8AhCsMSqNL9UmWQSmYuavG2dHALRzvm5pDAYYdj34YPXTbZxJVDPwEVKmhQfE6Sc7vcU1gH4ZNM2",
  "key46": "Lykv3VUt8K4qpj8v4e26vsU4KSzf4wGRSiYZLXgq97jZdyDxAUUc57AbiJisj1bj6icFHfnU1uBgFmgjbdhiiqk",
  "key47": "4bEtAzGhQn3HPEm8txTw8fGkEbM9RANfJhW9r6czTHpLrXQ1vD9RYX7J5mTXhatrNULEg2Q5JTgwcKUN7BLvPB8d",
  "key48": "2hbeYQFovdVvPtoCTfAG4KQB2z18wGLTHdYc4Z2M9ZP4GAxY8fLCJvrx6woKNABLQnmCij99MSRDGiYGvDZJuJuZ",
  "key49": "5zMAybCdsqeUsyvCsqFYumqkrQTCNDMDLdbtwzF5CZgZ6Cz6AjtYu85UF7LEUdKUsyse2uQC43X1KZEM1Q1bHqC1"
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
