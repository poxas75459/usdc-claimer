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
    "5abf3Gj7Tx7DSRb8eL2bKqTNdKb7cBTxJ7t5BKoNLGoUArCuL5yueJS1tnKD6UGNQWPKSC1YrZgCL4jgBdZAUoYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e5aTuUPYPA8K7qeoebZHSdm5wRxPP7FDSEGr7L4m9ag6jkfgwL1nyoJ9EKwWXKqQXQLJqQyg55g8dYiLsTZTnCU",
  "key1": "2iGaBaCmz99NRVVGhcGyAXXvZNNWc3GdoVd3wvyisoP8od2fmywHqa5WMEyTPbo8NtTuMMw8sCzpdYAgbLMfBKkQ",
  "key2": "4hgHpB3PdEyFKyS9WaaSoV3r88w3Psm6iyYHv8DSr9awwiMPY5LuwX9VNRZL57C6XhkmjQSz2wNVQa212sVkWu24",
  "key3": "JoRPjooJYVmxdKKLgPhG44BcM841DFLau4ZUm2JckhA8wNciF4XHBM4ianQRkoVvp5zSKkRJsXQpQHG2gRKqop6",
  "key4": "2hg1kCaKrbLpH9Kg8mAJqZ1KpBEngcN6NthFCZYuUtHXQTXAN7MegqTcnqQSnJE86CHwowxn1mz4W3dG63XfYnQX",
  "key5": "5CVqP7GxYMh32Tsm4LHR6YuwJaJu3PqiA1gaEw64wGt1c6GZewbaAtaBrYD8xzJYpW1RvcVyUaLViZnsoRThvkK8",
  "key6": "5b9a9zdDps4T4kZLt7ivypmxqFQJ9Qzb35dGhFmESE8Nwtypk37BNeu9QdSmN47H2YKmzXHV8o1WSXQYRJc76dRZ",
  "key7": "JU7vKbUcawKT9AfzeVVNdYUwM2TE6Fj7rP27bEvHkJx2ecAKYjJvL3oyGQuBqXUMW2oqPxV1TrX4Sst41rPUZKg",
  "key8": "3HykFWfqT4fpZaLFLL7zUjA4VdLaUWbJb1Qe4HvE2A2aichXCUfFLFzuPcdNy8Vn6Ynkvph4erBZdHEwqkv7djQw",
  "key9": "5FnYFDC8j4xprHyrdM4CHUobA68HDrQKiu36mjzQd9Az3f9ffNXVBG8meJBvefzG6ihMVinYmgiDNE2CATAai7A7",
  "key10": "47EfRRgpH5WqpbAnAeFyr3LbtVLWZAuhnaH8JgA6zu9m4acsjFRPpCCc2umAYjrUd62KkcY9JuCxvXFcYeD1fhZD",
  "key11": "3NiWv1nXXC8hVx52VtUci6ufLrt7MYtAWx7EqxXehpvZqSpYnJVvY4gusJ7boHx4jgy72khQPbymWSkQRbYS8LqP",
  "key12": "ZDGUqeBDJfDajhwrjpoGhGF9CtwiSejCRuGGXAeyEEcKJmex6jrckaSdLoeV6tGC153Tqc8g1TyWtGdTopQDYVB",
  "key13": "4F6qensx4xgU9AmQ5zVXynpVfDgA7SnbfLothSXM2Gk127gVXEkScApVGLLpuBkVkzvL6QEdxGFhG3hJ4Hc9wD8V",
  "key14": "3ms4C224aUK1FhWjW1fr7uxXVkvjh3r7P5U1XxebHrHvqyWZjZCPaUynVaJcx1UD6ej5iDRuhbZ63E6GPvdZrPpF",
  "key15": "49kXWTDkVmUBD7acR4FJQnYn6mKQk1YFtgeBAuY9khkgKVnQo4WbQeZGQvBBCGhPb4tJdoFzh92AhcqaTESHtVXB",
  "key16": "2C9sGod3h6vWZFeVMaZ6WFb5w7LfYuE9ejYFsAb96aEgk956ALwxUXwE6HueBhrHCBMyG6qJCcbtJBXUHRuMGEan",
  "key17": "2hEwN1y78Qq9U8dVLiMvmBhaUScNZKrqAZP69k6ECfTLFawa272iSoApfDYaggp6mtq45C8BmnimY3Tp2VWARf9B",
  "key18": "5UQCPcQF6WrC9scFrtK5Yv9UUb3snqFinaF3sQ4EHfN9GrtUzeDxRaaVooW9Mwbe67eDNwkAD6mQGa2JDegoQD9Z",
  "key19": "65SB9L1ijEvtRVYcE3HSBFkYEK3K6dBfcv75DYYuxfGSJg6k1q4Cdg2Gb2PNZfRnbzWyXeYJrTzGpBccW9wBEuAb",
  "key20": "5aojG5YKM8ZArr5NVeQEBzUY718Q5fHSYGEmTa26LwCpxiTvno2DQzmocDhEoHSV8DArmkYk2Jubi4GmCcXFvD8s",
  "key21": "2LkPUTEExSCTFCKKNc6DEhUPAMM9NpbyUJcqbWzE7ZrT2YUcNF9f1X76w9Cue5k8NsXxjwtqas8W5FF54Xbvdvqt",
  "key22": "3JNP2cya6Y9zaenf1oAWkbsFQkDUVxGD1tn2QMgnbPM3wJNAJK2tovG7CdBYZPQ1uqy8Q7ehXszJVCbga7EUHiHn",
  "key23": "25YoN4cNFB75w8ccburZZmWh8ChEj41DuwpbEGGL6wCmHYH74JgGzwJL6a4cFNkKbTF5x9P6Cg2dmmjyHCdgECgH",
  "key24": "iB6oC5D1kC1Agu8gfgF4KEZX3qmqG1G4JUejJgcNPYEedXQ4hnjaEeN9dNfvpoc2WKG6h6PSFbPnCpoVkRsWsGN",
  "key25": "3S2zBybrFy3LU9KMFWfEpZhNPfJKqvemmLtYeZpbFpoE5VwSYZDRoJqAYSkecCXxRATXReiuASaXfpXvM3oymm9t",
  "key26": "2mssMZQgRYgamsjVwX5TssZdQNAqNxfgrmM6ot9tkWJ4uxbvPGLzyco2H8iWzrabCxzH2dWfjgpVtevV1xGVsJzp",
  "key27": "3kNY3qHAPSGWrPPn6acsc3eyKLZxN9q86jCcUkRXyyvro6u3hVKJRnWsCvuJiu3Bth3X46ZP4MTjjGkLvP9m1p1K",
  "key28": "4wXWEoBuW7EeUzKa2CsMFuNZFwxTP2z4NsmUmE71e7QZDcSBCBYKpyoeFr9TbJpwxviNHx8DW8mJ2aPDQH1qwbxo",
  "key29": "D3snYb7C5cLW1mkJij3g4sYfvrpCBBKSf8M8Tn4tbiBqRjn595SG1raPdC4gYGJygbJvTYDQADoWWG7ZgMyJhMQ",
  "key30": "7vgSHKUEFRYiFxLVCvDcEJFJxt7wQTr829aHZ1Zdv1T3jiJwRHnA2erj2hdrr1fEQjs1msgCJkQN1c45WDD7ZCM",
  "key31": "66NaA6nm6amyGRPo248wVyBrBZxwxWfkMyLQeMzWgURnUUqZ6j2XiH6GrqwMftSaj61B94UALimNvFSukWQWrhsZ"
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
