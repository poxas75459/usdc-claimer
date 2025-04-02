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
    "63VctWUWXXetzGBXLzZJ4kgF2A7dL7qVH9mjwT5UxeCa75mG3zPmjTp742fV65dJU8w3A6wetJEcGjtyyuvJD97u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UGY2cQYJutmMuQfNCEdyCdUYMwP7UooSnk2ccKS9xp3RAbSTFKLiBePcEoQwNnk9p1eisLA5Mn494EvJYyaKvt3",
  "key1": "5roz2UJeb2J734Jm3VAUnT6UJQC5ij3r3JDAPQAP8ZErAoJTJ33ZZM2JX5ADbp4j66umW1y8gn2UUEX1qYKrNVxy",
  "key2": "5DuLcoki2BfoRdVS3XWap9ViHNfcG4aJdEBxGCZcJbKE4D8dgQc17tgGJTYcizLwmk9mv2cyhtpjDjv83rewdufH",
  "key3": "3vuGgNGBXAgyrrs47L7RazvYogkrwiqs5vZGoSQFzkV5Bduvk5xHY39eG1jaL9sY3WFVv4DiumnqnheyJiESRn2M",
  "key4": "4iYdhhn16LFepuFpyoCjzvrR3rMn6di8vixcu5gL6kT6WMuHb4XBH93BRtxRDcQ2ABZ3pzjHWxNWsgGaBXn1GZi6",
  "key5": "4SrKvL6dJFC4o9wP6orz92G3WHWiZxsngY1jVLFHG9szKqLXV14Zc7rfVGLmqdeHo8tciETAtciv2TybeBXA9tur",
  "key6": "46BtqLfBmnaUB1UAbUHv18TiiVjZcJSNkjdAAYFnj7FrdpgMBkTbA1zskwShdSVTcLTajCsaYwczJmFYHPYKbU5r",
  "key7": "5pc4H3ZN3W6AVmFmsbU1MQp3d8XQP5wTPjSnUgZbNPAVfrrPu58aqUQpdvhgZgQ1yNg74gcnkRiMfPn4ApEjTHiR",
  "key8": "2g35qG1YyL3VjxEjAncaVTvG6KH8r5Z9HBPueHNyajmyxG7g7GkCzAjTcVocA8dWruHvPn2PNCvo3kNV4QxrHmzv",
  "key9": "5rb3eksW15axHPZqXECVECzws14U9rFLu5ysv78jBQQ45bhfZRoo8WVYRQfGrV5vCBKDwXbk1DS7teV9Zmm18oyJ",
  "key10": "4Yq9MowkVSZiWBqxcUbKuRwMdxnZWSgtmvGZ3D6GDchuyEeFMXdmxqcAHA9d4wuru7DZR1a6ywzx68EBa8AxdpBR",
  "key11": "2KC2rMYapoFtTos3awCsr4PtNfdMqvTpTWSmLHWRJgiwBQKBUj8p9a7P3YGSUX7zTQJpo2abYDMhg3pj4UJbz7hr",
  "key12": "4Y1U2dUgBM71yRMgRw92zMsjmQ5FjeruduuJufCdvS8KaWucQv6cyt1QXZvKVXXWbpzB8G7JEfahXf9k7XZAikmi",
  "key13": "2qE5HVi1sWoyjdMpvfvsMyTsgumhxGgDUhn1mw5NZTLro8noRQc8Jh9frZgbqq7HhvaWjbDjtaCQJWUyTQiKo4W6",
  "key14": "3yPGErQCzCCtRYQFLUZnukbYqP3RHNj9x2pGnu3eD9qdDUsrThQkMzCBnqKPqPApmD8yz6kFE5jNEBcfdpAKvH5b",
  "key15": "3WeyQ8J4H1ZeoLhGyv7e2UjWk9rQyKxvwyshmf4zH6WaNT7pFTrTd8SAwhmqjCBm2S8RLkik8QYsqioyKdFJtQQY",
  "key16": "3We8ZxGkZDcBvXXVCfTu9k2Ae5oY7jsMK61QM6JBsqCz9QLBGK5m8GbJdLTBVhcVCEknETYrEQvWS3RqkSpZZy3a",
  "key17": "21WMASrDJ2HDameF9HmxSKgxqLfct44id9eSQQNfofMm1qpvzWRgTsK39XuzzaEidqyN1esH5bnqbkmwyn42W7dw",
  "key18": "65QjsNUtQAzFqTwYmC6JmDUYcijDSNBsq6eeXUVUpsWoDFVnum8sLbQsLn5CJsRrvHjrJsc93siUNEueRwPbL5B2",
  "key19": "2xb5s7pHHx1afqB7PP51NmnVcNxBqbbgk2HVc75p7enaX89Sg5iwx23mn6kqHpvRLMEHtBzMwH2cAbC1ZUxqWoZa",
  "key20": "44bujdGRxLcr8R24im1aiXVUMmH3jAxY3acEzaEEMq9b4UBtnsLMyWiY59sY18JVL3Sj8GkP8RBcEnfb1isWqCTg",
  "key21": "4ECGxyR9tRqZR4sCBWZuwG65xH44cCfkmT1dYbQx3J5drTnZKD62YgVsQiFaHi52K5BCQbEA7GpiRQDDNwFnTF12",
  "key22": "bY2J4PZqDVkjB93vcFCjGq3C6wUqkkFoUg3xbDFQQKX4fmQZMEUDYWqsbqMvZMHaZsRTGd4FRDpEmEq4LX3bZ9A",
  "key23": "f9ivoAnjEL22yTkXksTgegjwHC3Ek81azsrpgmBbmtXij1HctQfTtRMiekps1gmKmsHpuSFEUCYXRcXsHDf6kms",
  "key24": "2K8YvghVLhHT2LZAtzpq8r4PKnLZFpZLeZVpTcHRDxePbAYKjxBD6Zzh6W7rVNqbVvggngJU93v2Ddn9YsVwNhqf",
  "key25": "2t2N22TZVQJCaUiVs9YXT7XEXWJrx19mKsEHpSrSxoJC2Snxd5ZeA6dKGn7cSCE2xkBmkSS8XEVAq3BFj2Qrq1qi",
  "key26": "THTD6Gpaek27WEqiNydwxLwnrST7f1Aw1Aus2X2cLBF4FaZaE6EPGvsTaFHorRXV1yB8sY8kSdEqasdedvTasjN",
  "key27": "mu2wV1d7mf4f1LBHnuigjVtPV3rHWk1zXjhN1BrPi429jhZvgAaErjjcsJjRTay5cpcsVxAoER4cxRHcX8YgDRn",
  "key28": "4gcLkSv11N2opqDqWGvUTSDHpqF5q4w5R4ryEcSGWGRwwGuvemQttUW99fL4ARS6m19gkduKPGM8cpXjuyv16vzP",
  "key29": "izXmkKHir549aiKcBBdkTi9JWfPwYD7ZAst9zeBsKYAtunVACDQ6wMUxYC5YxaFEP6KtvhjQxv6Wbc5KybkpZ4E",
  "key30": "514kG5nuvkmmvBCDKssnDvsaQq7tJwrQ6VwntWCHCLaxJrQ5JNNq9RDXDKJpgVT17gX6U4qLVKEQNcx5o1ZxtXC5",
  "key31": "34nAUUL6wRLPyBjBwp4NhFHgiEuhvMQaiDFuPHXNqojKQVsoLhA4wnAeofK4gNCP8eCoW671TNc55Tjn4G6BzpWF",
  "key32": "5cQrbYmeJZvPnnFLPye7wa7hkGU6ipGUpQPM3Yif2YNu3P4UVymnac2tk3mY5X8Mg3oSLcfZsEqWAwG93YFYTLVi",
  "key33": "2bPJgJbVrK3w5Vq412LgTWcMygNZiXrRK2DeJVvZmAqE7AB7otBHLg6yb2zXvty8PHFszsYNErSgWKwHi2y3NBMZ",
  "key34": "W9vd1uDnbE2pbx1Roz3vUGAvCKGuDpvP5p9LT3KHS5aEjJN6HF6BQPGjmtL9GwywX7GPYhBg28EPwcWymqGNdqs",
  "key35": "4ZExx4J8M3XySwkQWH8Ba3wwxGGPq38ZgYbJPMQmVUZWyw7o5FJ2WSnr4H8R4MrCTK3tdkZs5jgDxzTfSUfjGzkK",
  "key36": "4gekerZkNVHaiYwaSfY1KEh1SqDyrPXeU1ydSULsMYj2rdCd739zVEYXeVdANzLGM31B1rC7DMbkgPeT3ujub5qz",
  "key37": "5eugd4sENRX5KXuYaKDSkiHhX77pq5rue9LwYb8EqKk6TniToPHt7RTu3riA1nmRyz412rT9zxgvRCTNmbRXyfxS",
  "key38": "2gyvGUVKM7VB17bBNEzp96xMMnUT7L6pTo4JMQ8XFELpYKReHvJq4n3hc8knLbpNZyPbcrbVc7KBhrA1JjheN8ag",
  "key39": "66Navaxk9aKDM8rGhSyCN8ayiBMoQZhUaShe259DNNgSEsvpqf2CPaRpbfwSwdzkStUUCiKVFGvqFty38R84Kudz",
  "key40": "2WcEuyabpJLSjQNYksue5HPyT83nGMtCteMngo8KTN4f21mxqtVmfDmgi3acmkUrzFvVXWrioBUTf9ngnRxGAr1r",
  "key41": "2vWP7ZzMLUTVQQJUPQqDxsWzJaP8EZA5rE4v9Nq1v8r9h3BLfH91Yac4AyagcMt9MeHX2uDJAekkuJgtvoUuzPP7"
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
