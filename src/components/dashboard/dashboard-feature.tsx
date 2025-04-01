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
    "5u1YegHzKzWYEXxYqbGoxiCXwFjcGcHrMExi8obUReJBbrgDtgaTi2DgDvhTkPu2dbpPUdAhmexpsdRrNgZLmhBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Awng4im3Lirpdn6qUimj8cpPU5PMfc9s9ANe76oLubkHFEMn4fxsb7zUME8BLU4tLHRaLRPVXJjUaBZW9e5cbBD",
  "key1": "5adTACgRjWerqQaBswQarbaHU5bGFhV9JACu414b5TxvwDR4FqkAi79gU81VqKseYQgP3S8AyM5zFrXGx6X9XtAy",
  "key2": "5XUF8gr74S54jDiqKshEhc8WzXTCNDTwdLbGzVew91wNd3pAVBhviebVkzCt8eJxsM1SsApnm6rwd8vcigw38GKS",
  "key3": "1SmZzttqU7vTMAWFjHwzA8zg8EAMtKnhGFEghUu9LEgXQASMpD7nNnSuWorokhHrnH5wc94KLnoGWMgHpjRqFVa",
  "key4": "4hLUfneDFg2wPQdya1HAdkmW9VXKWnY5RoNruDsT19ULDMcNVRPYiN1XQS4nsiS7hrDKgTmvUyinXxxMwrzDLMAS",
  "key5": "5cuZ7MaXj5drRHuECEEpriKfr7Eri7kbaB5bxU7qg2DUS2RMUAND5XZYoqyhmctuLuySeDRcWsqKV6fhSCzoq8pd",
  "key6": "2Y3A9vQQgcoj2XaJfSVawRrhacTydU5izWeZtzaZeGXRUFXBUS1yWWmAeSFqpD1QoR6REa7xePj1c4auGMnY32s9",
  "key7": "pM5d61PL9hULWM2GrUS8iWqFknZmvabjv983gxZrQRbjGMEauWM8tnYHPTDZTTNNvxrw63UvcdaitZSzvCALYhW",
  "key8": "3pWN17B3PA5cQK9drKzVcRJArZVGWSaupcnAVyBraGJ2RUo9Gws6woRxrGF5pVRZXuuh1jDeDhJg515svCAqXGJF",
  "key9": "5twDmy5yPrFex5mdJhWRm7Zs3gKXks7h2Y6NkGwLtWxyP8sUGw1o3tPVNwYiRzq7LRRnfoBoG91z734dwqNmrAQ9",
  "key10": "YQqivDkNCHLwPrSHLWsFkhhokTkhx3tmr1XL921MDfVmwb7TCih29jCnEYAra71VRnJyYmRmVaCY2bWAjx3arKP",
  "key11": "3JYtpFHvcRTYUbpZFHUmLPVJNZy6dHrepchZXsFSZ1rJDHZw4YU8PApMgbKZKfD9SLMj9QZCjZYeJyvGW6wbMW2j",
  "key12": "4NHjC248Ra91xDEz4PmbCiBmjn6tXBSAyb7JzWax2Hoj188i1QywHBeXvFDF5q2GDcWTFC7Ev2JdRtKNAHpYWDpT",
  "key13": "5wnKWVFDZWYq56DLQ6cKrDFiFzttgoNasyFXoHZ8p6iEW4ytcw96k3VksS7npfZXFayBr1pwPxDRSpiBbg4zcEQn",
  "key14": "4MjrKkMNFYTTWECce1UQsvwH4bHSfXhLh7Zcsu8nnPvytwpcHsu1rDAfFertKVz2446ddbC9VdiCY56gRpFha5E",
  "key15": "32X3XrBn7oUMQtRWX43SYuPCXJPBTfcvGUcx9TSz5gb6rnuWhm4KBmwvPtRxECyqucXAne231niid2rjxt16fC7p",
  "key16": "2NnBGqQZxHnkV6C4scZDhVKczJhHxPSdJTfSeTYJQ6MGCaGEkpc1k8pibxWY3JBdn9vCLJpT4sGGeLBETjQGc8ts",
  "key17": "47HrD3vqskwuDVAATFiuohpDadNJn4uTwa1CY9RnL9o8QhA1pQhxz3RdFTYMUZxH3PuPNS4LhSiLbADXW7iRCjzV",
  "key18": "5BUX4zueXaYP6fUYbEiEqzA6a1Z5HQW7xjyF5FL4m3gcY5fAkmo6wwNtyFWU96a54c4cD1jFJ1hhPeAzbPz7ZRaN",
  "key19": "5enWXa2eJvFEkujZ5hAVNecCSPmQAKuKG64yVaqRPfsnmWP8PK9dW2SBskLKk3sKf1UR4KsooqLMKC8G4EePoYus",
  "key20": "p9cwBC95gpcJVBUHifLr1psTnHJNwxHpnXithiw7edhuMVXPMXEt9jWAaNUjYJuF3HunmNTBhx4v2pYYRqSAjCZ",
  "key21": "2CnQJ2ZXimZpQSevrY8df4KVgVoGQqtyFtrMDfEsTgjMBeztWYKqAPLBgWkcxVbDcbf5ZyBiK11R3ZkJAb51MeeY",
  "key22": "3he1qT8rq4yZoAuHk7pryDmJ9EvY3KZTYUtoujbTqnjroDsaw6wPcqYyTX4FCjBfUyLNVGUePswdtrRBiJ67zWmc",
  "key23": "3EhNgi6EAPzmtpfrBBnRD1ANJrKSMPiiqpNPvSimgrRj6wtXKE54jL1JP2THWjXLGkcsRTVTqMrKENzxRRmc1kk6",
  "key24": "tEoqPSzKizApdrEjrKrJhkqR8EcTBsRxbPHCyYd1QjE3ySrvYQkM58q4hzaBhHTaVb7axXB3oFAFEsjp9Edxsqa",
  "key25": "24oY6WyGh1QqwSRwWvecczND7Z9KG52rm7UuqoamVZZ7xHHVq3Xm1RRi7s8duKXVfCnwuqjm6GqsGJYWLUiDEhSm",
  "key26": "4smw6YbehrtP2zuxMzyVaPTYEiKax8H51CJGL718524k9MveqfdAfoENCk7orwF8iUA3NiP7ZLaPSLPtqZLRUAy1",
  "key27": "4xSFje1BWbmLL8q7triHr4gQV5uMFqsL6mWZfM5uafRdiPgAVNNVkSgTfY6pDCMfWsQ3ufcBQ8Z1Bq6vNDDZpunT",
  "key28": "3JazwHAnKbgozeFYPEZeRC7MBuafYDYhB2n1xRfEBgrpfHNAn3EMxunjMQXgZB61sHwz5ujZamToSxBmdD7Rif9c",
  "key29": "4sLrcdRv6AsgAixauP7RPEtvfHEZMMjJGuThp4k62oGhzCohStczp3swqJRK9WM4iG5gR3zSpwdwUi31Li7up85c",
  "key30": "4Bom5CAXSq5kge4dXL9nt5ArsMp32m2EQpMC8vAzDF7RMoW7khoibhfr4ed6oNmEUVHK5wGYH7DSTQCU4CDPhYq5",
  "key31": "5eo57RECu72gAEEmFiranp4F8TXeHbmyN6Mixi4mEQPdgzdiMDwzxEd6wr4fv5SHEXN7Wuvv81DRteQk8YB1Xuq3",
  "key32": "4jx4q18NcwEq2ax5TKis9ndm7h43aQxVdrZgzRnkQ8hJZUbuaUqtkRMncTCitXPaKwi458Gq7fC58PVqmXVYQ7QX",
  "key33": "52ppe9dJWNFUfcihMEScqpatoZ4oLwLT8oP8KjL5Ea7PYToMiCcuakgL9q84McRjR3AnrFbtq9vPQvQuHWmoyzcu",
  "key34": "5ycQfyV6zrikDN9hc8SKfZK9UbAvfFCZ1tmt5Wvz2J91p25wPxZ2kNxbhEWNXpzmrMCLxJE1cpQzcRqtMnnvS4HU",
  "key35": "5EQfzKDh5XrAYSBPeTX73YV8wngxxnJYvwBUewihdWnYoZ7Xu3vdBJc4TM718iAAyXKbNXoP5A4ZqwDw6wtkcSzN"
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
