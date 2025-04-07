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
    "3PXBdTGWcS6jQAfDYu7kU4ii4TZsAn8Rtitm271f8bfrLCZnFeSsGfNVZ6hMEeD79N7uxnFCKf8bb8AvG7pfbDMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLqWh48Lj9zhJcDoz4L4uj3PBBmEyqVesQ3WEoqpquCoGGYUuswT5rFNSVFZTPErCtHDFdWvQiUzrWt1GbLKzs9",
  "key1": "3b5MqfVmi8RVjX797gBqJxZigPyK8TDEhNU7REBMYnp6fcDo4sbS5QCV4tSySPZJDHLzs8nsLtMKyqYY4Ew46eHe",
  "key2": "349nnbxh64YoDe4pSWxo5CVfkg8duYXRCFQGU9d9QBJS94gEpt9HRsok2nukNiw6GpPM5TcMLefKcVdWEi3uPFZx",
  "key3": "43Eg4ws5h8JQVuitqBeJ9224efRXygYX7ySu1TZSxcFriokBX1t8C7T4qJcRockBS7sQUF7v1hQ5dms89JVWdnuE",
  "key4": "2Wj7mGKELyoXQoYuMqYXAoB61X8EC7yVmAuUvirADxyu6boD7aFU2mRf8zfxG9XktyaLmjJyDMhzUu2Aoctr2Naa",
  "key5": "65YCFoaRRPtgN8UxnW8bxkVR3A4hBXhVMNRAGzLwstBXLkfkdTbFWvdrgjBfJWfFtgtM9wbVHsVRtnqyQTMqQqs2",
  "key6": "3ubeRNjac1DSfTiqw4thVh6hJUWzQGPWC6MumjLMopVARBxHimFEYTweSAJPbwVt2tc6i6yQZeJX8LVuyJ4gfDVB",
  "key7": "4r6VeRWDb97iq95AENNvHdUojvT7vXYwXEHWfy1DBAxGkUS6ad2peULLCnvyUxzXSXrUB2iuiMTjXXWb6ALpYAKc",
  "key8": "4Knxqo2yKGsKULA9WCFKNbcHeq7BqU848hA4Tu7WdaQdVB43abBH5js7KmsEgZoS5qigqZ9LPBgWZPFBU75uj4d7",
  "key9": "3QVSwEa5t4wQL4hbFcB36qgG3oR247kEqQXqe9RNLVzTQWXzmHwr5NTXKhp1mz25ykkduM7RZ6YFLGG9uBN3SBGV",
  "key10": "54Y7oUqMq59Z5bTC5rJPbZoVYgfNo2fhjRrVJJhb22oG9BCwFRaC9Dome66azEm7T1jfs4QfsJnZ2WFCunSq7g3Q",
  "key11": "4nDqQgxiWCbs66oXoTFrbfzuSxXkQHFyPHbLGgXQWXyuArFRnAJEYQbxgsrY7DYo2LPz8xpsuuN8QokkS5Pempa5",
  "key12": "3e51LtjjbVQaPYBQinm5qfeNYtLJiXt2EgKEU15pomsy8hZ9updumq2HF7DosPNhgySruzVNE3JqwLEvPNcz2ccW",
  "key13": "51PouUtuo7xkeYpbR31mgVrQMAChLXcfZymYE8KfYqJBA23mJa6qdYfKNGr8SfhozXz5foZUqVFaAUUCiREZNs7D",
  "key14": "i6pr9SGLL9ogwXV5g6f6WGcSMpanMJyLzQwiJFdaauBiMWyeNJi7ykdT6vPLWEAjHnDYPGvWT25auEvMNJCNbie",
  "key15": "5EqVQHxH57UrvutWeTNC16oj23nr5m3cEr15nZ5HhjQqbiPFxRqBX7yHNgZpczfYLQTsZw4uSRjQWbA1HAiJa8Qt",
  "key16": "2a2gwLE13snaaKGU8k3hb8AY3ke9NNphanxdahiC9UPrBEYYi8uPNnRxeE6p7NFznLq9uVgAx9e3f4yZYg2djDrE",
  "key17": "3pdJjuvcJvC4kjbywDNFncC3EpqqM4h6Dsu9mtYaLRZV3zznxcfvvi7nQotSQbyo1UzHoa6yLqyAMzkxtbEEbFLj",
  "key18": "5FqQoB921ux4Dx9Jq3sk3cLzrx9ZB5LBEoYtghrSM37zzQS2syu39Udged1QMEShPsj85nj4m2MwKmcgVAduaYnf",
  "key19": "3xhjarpTmK9vYZNFVZuXxR8UCHzaFUihv3A4CfCAM1xqf7QsrTZe4h4JBouwfnbn3BQJLW38YvTMHnyvieHYREWf",
  "key20": "3MyQ7rhkYgVjh8rD62RMFYDyPeVqcewqPfJ8EoRnaR5WXgArVroNZcCnpkDifmyi2o2P9w9JraCE2UgYXDf9nYC1",
  "key21": "5S21uCxEoMA5QryeWHc2ydTqtjmPkSq2RjcpJXrimxqBhBSnVQHb9esKRgsadADcypYWD6AWGRHg5EXDAW7nPxKc",
  "key22": "Vskp8fjaHE56E2yVVFzZuDcnRS53HQDm7xWaK3j8UxBFvK64VQz4dZypVKA9P4rB82GSdoYPNkx4X7eTaMux9nj",
  "key23": "Ke6GqWh4vGGMib5Frj9m8h4NM5X6Wo6kNfuGKHszwsFaCTKeoXv4J8uJkHuwfS9EcWL7FxtzHjmvWaHQ9Hnwqq2",
  "key24": "3Ur5W9VCLcGKgNeX3squAra9DvctCJRdwnH6s7amibYpzvJ9zT9bPXfKzUyfyNxP8xREEBFPof94qMRAVdATjYaU",
  "key25": "4t2DDywxufMPYcSEXD6z2T1eiifPaXKyGtvLkve8kWBkQ3XgUpUbAufFhAuNThTye9AafKKnQciMMYSom2zoJx4z",
  "key26": "5FyJaSg3jE33cjYNmd2JAbG79iqNbaNz8ahakdU3TR5bMy4jdaXgaeKw1xnAr8M5cZQcasSyDrrHjYwDWUU1jb2K",
  "key27": "4RTeKdutVXN2YXrfNBtHAuHkNxZxBkwYjB2kTWFpcgoiAAEtLupfVY7w4XxdKCnSmzWVpsvUS3GyVSPJyGJEixgb",
  "key28": "5vkhGteuthtHKPR5m8XEfnzdptJ39JdGGkoUUBuoeM5VixmM47kcnzdRZf2gS98kVUmWGSDAzkfxjsKiXnV8TG4G",
  "key29": "4JmW1X4PVkWwe6k2ev22dA8Gs9eFjGi9B9MLcQ1YjYrQmT2Dneq88SgdFS2wZJPGH1HojXbi2xBxmPmJvRjuPPCw",
  "key30": "4BUguedLax5MJbaAvvaaa13jangSnL42U7tLfwQHWLyRoGUGG4Qp7UymHmuaDvHUbrQLNciXBeVDDCTAVzWs1Nb6",
  "key31": "48mHSunzTqZoRtkLVQpByC2dayhXcX9x4fAaC3GHzuq2oH8uCmYEZCmyuHzwuH4sf2M8ZvFd8T3hxH98Ze87f3wG",
  "key32": "eiCnawcHmK19JbQLFa9zPtVXJ4Rvu9MaQchT7emj1c1AXsUiCV8NVm3QFbsJXqYs25iWSpJKUPs3ybs4NLMUxBe",
  "key33": "2e4QMSU7aNqGJKt943MAKaf1yzR4sFJAoN2oKUpeTCW3gSeGUG1aqd8efxtunY8n1zHfKnvz9fckjFWE9i4taQeT",
  "key34": "3p5f6sFKmHZhmnHqNVxLH8GTcnBFbEXPuehhiAVKz51w4HKc56w5MhNzDCrGfcjPqZhkgF8GrjY8JZpxgWBEqqPH",
  "key35": "2Pvw8orXJ338jSdmKgJw13WU8tPbKoyC3rYA1MQTYCLcdqZotQfAuXWWZQkpvRkcDPw9Vt1u4txHwmj1ZmguxuhN",
  "key36": "tJLtnDb8XTn97zeKmGDvHeWAHQjBoVA7y7K684dHxif22ffkkd2Ls5tK7vq6QJxFFjaU6fDBddZFs6Nnbnxruze",
  "key37": "634eQyFQybMrKhHexYkevBEhiyNR6vG361eZ1p6qxRj95WUKVitq8Qav3wKmwerXKTP5wkrSZhbds9Rkb8r6QKbi",
  "key38": "5pPA7MaKEcUjDT6UbB23YsjExs2MQefCk9JXbg3YLfvNMcqUu58sUZkRNqrFPHRtNteoBWhUHeo4pTp569PoCAGR",
  "key39": "618XzsE3ENXxuU4g6ZVDmigFUU9eNwmUwaqYM6utDb5gn5uwc6Uqvz9mL8NJCmA4y827nSzGwe672R4ET3zULq7z",
  "key40": "4c2q7VamuyAJtEaw6CXSEE3a47TcahrhNQmBKm6WuLkrXLt3J6HjmrZKBo9bGfAKMaxRpn6Miv5HfEgR3KfGqF6t",
  "key41": "2mBNLjmUr8EJ2Uv2J6cZs2p6Wnp4f45pZHgbphuSrvD5QATPdEg8yWCRAwEeBjfyULJKU71pBuePn41Ukv64fWGk",
  "key42": "4f65WnQE8UUJ3WzudJCqZvMbCjN6wUaLavvXZA3LLn3E58pkzE9fofXeEbcZGKUjBQ6MvNy1ipieZcwfAqM7vvu1",
  "key43": "3dr1fLQfcqxJvmLehq1a8zwBzGsQv2tk3cfiXqcNWcb3i5EiMRe2AgZsAwrrFoZcKtESvwcAfB1LsNiW6eywxQKP",
  "key44": "3q6pb4QCKwAXZi1AspUn1A7MPWcfRw88BfoJqWnLaJP5sbDq815zdg9fxDvtsDQnCcNXKZmzRqp7b6WoCi4tEoay",
  "key45": "3NNcwZBu293eyDxtEvxQtTawomvuo3gvWenfMsGmJgYqLgKzT8D6JhMYs95bSqCjKDVgsTyVA5S72tK1VKCS5wDh",
  "key46": "4GgkYjDkJQfecR9uVAjBSgRDmDphXjFx7nxfRMxLFJw8G2FwEivbJqxgfMhTpEjCPSFjH66HE63883wgFb3QzF88",
  "key47": "5gkQ4URQyvaNmVw3t2NdoLavoojZQAwe89rXcBsH399jkBjS7Tybpg2Yvr9DtHjoSbg8Bom76sszPtD4i1gK8efv",
  "key48": "HkB8GbREraSUkMLgJHwhqFyadTRFTpcDfLhjyx6BKwvWw9vbJ8o3Wjj73M7DaNJJ1iLmXoKiYHJCQvaS5ihWuUK"
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
