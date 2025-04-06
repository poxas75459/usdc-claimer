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
    "rE8ftWEZvTwvwAM3n3m7uFszY8CnXq4EENgqixEFAJzc1zKaY3ndfxGSXwV3CpcFmZe6UYbcjpfr9nYT8WePWSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53DmHKdCbXh1J77gcvPFSBGzW1jpJrndJ2FJ3u7MsKN5WxE5teRUFgssg55p9qF72yeMzeREajp1xPpE9YqsVbsv",
  "key1": "33TfQBN2ZPXYAhP9yyRxyoaoqoiugt4SvpneYPEL4mMbqpGmvd2nyUmtEfq5wh6qPtd9igcXf5rUwTjLWC4SnWZM",
  "key2": "5eZruAXV4H8x2jC5ZbMJAcaJ7gocHLtbrguprQTkUfeqFYneD95niua9wJHiGkwkCEjX4C6HaLGw6cpNMD97qi6K",
  "key3": "3SKmsq3tY5gZUg6vqSHLAHJNZ6RZ7ByiH6gexz9qi3oSLwu5GpHX6EWv2SQ3goTggY3h21ar4bc2qxnuaWJYe5Ge",
  "key4": "49ptaa7pbWBmyXFv3Pzmim3ibe6WNkLV2ifMrBQe3aYGpHJEpihkBujWme7kpoLCJkkn4sPErgtGscF1yJyQVLbW",
  "key5": "KXgB6BGkHwssNC4HgrFHsXpHx5e3vffN9FBRdy67rZnq94Dp1MCSuizgDdosefp5xruZr1tZbbgoqTotDjBFphA",
  "key6": "451oSm13dbyL4Xa77Kf15X5U6kSG88uwgbMknEPv89ofQY6sqCZgU1mD8KGVHdTtRw4p3XhE4mp1vU5GaJMMoKev",
  "key7": "4hT6aeH9eakti7CS9ju85GiG6NLTAemJqxga8mYySeUQqTQUpoxMYWtMP4YS886gYRMF9qwBkfr69wWG9PQshK33",
  "key8": "5pAXCyJcrjcTx5My86Ed8i7byacbABLgoP5kEWJoiPGQc5Mc8BC8j3BwnvhWHLmiZhsp6mwyge4j4q1URddTK6D9",
  "key9": "2y3ZhuaDfjfka435fqmSDySNgn8x6eF7nsGchTXEiyAiRix1ZAXd5G7vCcNH5HH6H7uxHLzYpsWjuSU1gzvisUVX",
  "key10": "A17TB9Ak4asTZxZcG8aeWbxTuofktkChNDUdJbcHnY4NasZtSkUE8AG1rFnSYo79i8xbnnUSPLy6DUMiRU5Qgmz",
  "key11": "4cqoRrDhBZGrRb6RX4P3PoFj5BJ5e4RQQp51S4bo57rhYaRj1GNz36NYq3cQifyqBXtEzzhsCVUZnPYUnxDSfo5R",
  "key12": "4MzJQ2UyxknqvGtd8d1BsTFQ5EhhfAGgEsU49WeFzuoXDsh3RWWPvmBg9u8ZTZPRyouFBs9rcuYHZkNZTukwWwx8",
  "key13": "2ZZc12ngmJLxZZcnU33SyGVMzHPPuMPdzhocL3gYXosVaW1j281mXNnX2mv5NGNnigLfRZ4PvBQMZWsHSMBDGXjD",
  "key14": "31qYqM5zHs7mALAQN87PgCz2QwxLb14UTremZ1kBzLQC5seCjzdpZ2WC8tpueouAWMwwA4PLdo3SawCDLCscNrCU",
  "key15": "4xR4eokuAjABm1yqz5P7EyNDXSM15vk3JVpNZup1Z9cYL1rduZH7Tk741o4MK7X2QhzpPeTZLmsZSPwdJsi7VyPL",
  "key16": "PvK5KGPssLLAiTJ8JisBnU6tUc9rfaFG5Jbi1YgEkfvsYGphnYYEJvXb2nxFuLE3Y39BtwkbJg8wjTq8BGn8SSW",
  "key17": "5aqzVjhsKF4k6oQ5GLC1Ufr2NcrMEYYBTTjzzRFzhg5RjaeMU9inNj7Gx5vEfVDk7N2mmNV4T1WJ3Yt1SbJS5vA5",
  "key18": "3fjeu5hWhjAfJyNBEyd12uk4eNPPU6NuciaKf4tvn9MFwPk4cjewSL5rF3h3gbFMzgoQbHL8kjQje2BMVb5CdEK6",
  "key19": "2cGaXVq6ipri667X5kab4Z6Y2NMqDRKzEbThCxSfqkNvFRFBzsuFVwrwUk1CwhUeXoxqAmqgDjJ8fGcX6UcM9Kzn",
  "key20": "4Q3FubHHScRTAjpss5Tq3u6deskUhm3t2uBENHTNVrx8Q5UBMohiD9weyHApBuroSQ5cMpkjszoxRsFbkGmqvxJ5",
  "key21": "4vB97bFrdcVKYgjBYn81U3DsTRm82gUX9aB6f1zW39rcKK1j3KeT7Xfj5yyHtbhKcRQm3KdeBuYRJNsVZKNowzPn",
  "key22": "3Bkg2Q1URHMUdGoeGyvZo8eC1QvxtN3hmfSiWrE6UGU4NMJbaJMrH2cY5LWkrGJvkPKYLsNaggrV8Ztidj8Tvc8B",
  "key23": "3uuQnEGfemRUHEWGJ1a2JcPqz6aSCnAdCYGRF7GBL9ej9HxxJSqqApBcbk3zTkDmg9ejmHuQC9QEa7RN9yUr2UGX",
  "key24": "2BcgMRXfcwaC7F3iKc9uW3H7E9wbfiy3iSWUm377nx1SV4U4Fd4YMadVyGjhHxQcSTTtLHCgyckjnv6pK37YPFod",
  "key25": "4FQbMPQ4iR3J5q4LKgY4nuYoNXyoBP8SG11MkUPsTmtWyrJfFoumTscYPeZ7ZaHk6WxHhJZTprJ3jUs7rgrjvBvZ",
  "key26": "4TKs6EJ34xVvNnozUw3VbzDkMjShPMT9ddxHrtL7ZDkdoJJmCi791WrVVbJaHNuAEsAATEMBbFofkvXVrdgHHf8M",
  "key27": "2VUJbWWbNy2CrBhwDR5y3KKwNZb9dr8rHTZ5rz9S6QjZYqo97bk6pGgKAdA23RhttwnSSm8txMJDFzvCodzA7YbA",
  "key28": "5AL8jkmjmpay2CrCvAffFwgrY4RHAgMXD97fYP2EHXAR3xcdaYoSAVWMjApTBWHocRcRS4Rrjsn2KuZieyVvWgZv",
  "key29": "39cpm8yampYGJw1DVGvVSG9VrN4UV6XUYqrbgikuKWXFHTouvQzocTKBA3CAGadsoE1UiT3ggo6PemQTxs4pa77o",
  "key30": "5ZnRsWBSRywwRjuASPVSsMpgB3CookyVnmLrnzL8FKDh2EGN6zWoomr3T7b1mx7MSTSFGcP8nfxhmBoUfYtk7eys",
  "key31": "2jpZbeLPNKCfxAY5XwpSMj36RD5b9kjLihUg9shdJAQ1k9ytoFkUntAhJaZzYPUDpNaWTZeVJsr2yiU27Sn61CAH",
  "key32": "4xTpF7JN3rbqxueo5XWVV5tsE4HVBPVmu7jPAG7D3arKeeTm1KQdkBNzs32ewcPy27BYJJBhFrE8qyLydxt1hnW2",
  "key33": "5wv4kT1jMasjM8rkUyjSN1N92bv8Ticf4raKJ2ku1bzfvXE8cinA1cN76hgQJm7efqs196JMjqW2yrtBnk3e9uDJ",
  "key34": "3RzhkwtoxuevGPQ2nSAmJtUPtVwrGxAT4p14dgMfd3ey4PK4yFnUjZP1kNWgDR7t1F6NHCUBWaY5mfohzmQVSZ1V",
  "key35": "5wTRMVZJ5YYMBnoRCjyRR37z2UhbSDAZG3pUWpH8rTBnfzTHdEyma1U1uNQsbSjWLxviKUpL4nnmftmPKNvBq6HU",
  "key36": "4KLfocgx1jcRzYhmhGZsAqWCkZHeqNoaYzdCPNCjqzTsbmp3ZtFcq7L86wLLxWDE5jCSCj2VWswNrAK9Tosy6yE1",
  "key37": "rp4PbrXG7cLEtaB7SdUCRetoGqLBbUqHvxFzw4r4DHYhj39pu3Wk8M7qCj7rbKzP6yjiVnB5k5o66tuKn2enwPx",
  "key38": "5DbqfvpFL5SoyRrAPbuQs9e2iwkVNLh4uWFQM1XF5Lk8FnupWT92jF1Mg9zkWYBYab3GFKxTgS26wNhHtgv2NrEn",
  "key39": "24y9DFSbMZ6MT3Gi7Av2ArQr6XihS1WQvCPhaxJmvVdx43SkVQa1krZd5bctuPrYPSvKfDBQze5Kuoc1MezKW7jd",
  "key40": "5QKGdm4F7oXwSHYYxGbpHMzJ2A1pxVcxgr9u7ff3iigFnEJcgYQGok73aTcJ8Q6efBZu5chZFWTPpuyfeabkw7Uq",
  "key41": "5fjgGu7Lv2o58rGizuY8c94SK31QwwcHbzVqpa1q63doJM319gwYmPG1R8msQyqLW5pvfuYbRAPmLZjE7dh1xJo1",
  "key42": "3ktiNQLNhCzDpZm31ttpBitN1Pt1RFeNYY2JRdReYDsixncoq7r5pv7Ket4MP58KqZ8B7bfBLg8Df7ophGZM9T2F",
  "key43": "5tiZ8GEFciF2CLy23oNhvWcqL26h72FwAptVGmhNJatMLrrVwYesAQJxecAgngtZu4qnYEAv7FTrrdThtvjU2E9R",
  "key44": "58AKE12d9kNxd7whZFeGRstrHD1dPifHL4f1Q9cHb3n3Grr1qGL6UvWk3tjA7vo4YDmK4ckLpYhbthKF7cN7Nhsp",
  "key45": "inTqjr6SMTpZpMZ9TUEkSAjd43PmRzxirLKaPgSFo7Mf3Zzu6sHFRLTw7wXY5ZiDRtdqundVsBoNTjHyCBx9EeH"
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
