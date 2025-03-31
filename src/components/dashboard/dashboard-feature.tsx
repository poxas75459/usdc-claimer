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
    "mdvmMcmfbfqdMbeTMLbU6TCMjsLegPGrn9a77aDSJ6QxRnqYDGfLmz53cpNpVCXQNJH5nCvjR7nBc3x96MGzgyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKiL7nqLoAvU1zCFX2P5WU7VS1gdF556EnTvdhU9oNX1pcT3XikJrixhkFLW8W1PJRG1ScEVX6TZA2e6YtSJvYR",
  "key1": "TKMLrzqty5b9FrLpwffGaH5njx3Sw2uEJ8ptbePkKfKFvadC1AaaHqtr6kHbrrb1opEE39jY2ayvL1sPTbDLSyU",
  "key2": "558Zq2m3g5eC4mbh5683pvdvw5o7AUTieVse2jCAkjYkic9tso1JNTJgwW36vQRdxCFad78UVGNc7mLy34pFRU5o",
  "key3": "s7zEbuiKJdLK1LrTdMo9dyDmp78XbbnxYudQyUWPxDrHy3XhRFz7ummehJ2u17JvyVybsdEVvSyhkgFMXj49THY",
  "key4": "2B3uGqiHNUudfNXe5ZcwfdAP4t3CzH9SwLkU6avTD7CwPFfahNf1ZV3NVJKtod9VFRmiaffquydVgyRqjgzvmo2R",
  "key5": "5E2BurNw8U63UsDqEpfDT4whAtRz6jLfvhWu7Jm2wEvV6u9fZgAL8THm7kPf3wp3XpATrE4UzjMkE67GqqJttX6U",
  "key6": "5cXcadtPTbWxrvDy1zEi9m2Fnsi5CnTaTe9dMTSxhws6n131rj2PRUPpUbqG84E6GHZe6N9wMNHS2447yTc2iUU6",
  "key7": "48axJz1xTork1DdgunqfyLPJF8c1TdZjU4tHg7axiqzEdSMZiWCUKtwXCaVr1CtG6YsDSt21aDP2nzi63VC1GG6v",
  "key8": "3azFeoGymMYXyeC5rtHKSA7piYP6zjQ3mV7xJUSGEojepoCqk342bbuePW4vPWjkabSjCqKh6ecZX4zHVfKSjpC2",
  "key9": "FknAFhPk31CH5zueY6ZV52bTo5Kv87Rah7dwuGS53CDqkvFVx8fhjB2htQp3oc3qJvVzcmc4fqWWVD5HhHCuvDG",
  "key10": "2fSQr5DLqWEy2M6SGPaz6qynzzPGiNMAyQTN6kUTV1qvt7tJNSprVFApwd9iNiKTRexgRHPXPE83GB5HXVsEiHtY",
  "key11": "UvENRs4KiFfmH8u7ypUsh24PQ33yByM8RNDy63PXWyVPbyQazB1UASoqCu28PY56SzY6Y4X3gLrX1PgHSqJ3RZf",
  "key12": "23duBYWiH1YkrFp6W18d9gEvewZg25qzyWpEG5jbdfTZ1nR9VnEMDXdtjg8CMUCFYuFgS7YLSFeByZQxXZR9EDaK",
  "key13": "Hdty4rwjtz9dTdauU9PxELL3K7SPKMjaYETuhgBZDNKanoBvpJeiDr5sWA13SRCQ5jajhTzRi4rtsmRLXuGSjjU",
  "key14": "3sMdChnC4HTdgoX4tjVxrUmoZY3K9jt4FWCyAjFzP3bCMZHSL1tAoTwc8PGv3TimLJPcCpwDSRTJ9nNFM3QBzeCf",
  "key15": "31LKJ9i4aTz8AotUwKFE2ZgNQzUrkZNgXNq33miP28LLvNGWsRcCpTrVzrSWE63JH7JBZRnp4XJh8hDZgqWX6sky",
  "key16": "67Ysfw22ZHWRqxtK9HRYRAdxxR39qYV44RgRXB8QeGfpq4MYZuwFR7Q8EM4murCtdHL6cGbsXXxt4oDVfjaUwqg4",
  "key17": "1T7qu1gQWZvsRhPxmVz6vk29g7Q9wXk939UKaxv4esjubk5jYJ5AcRdNFqkXt9bpba2gozbPTgjkFfPbgkwQDLC",
  "key18": "Bxm1wyVfahXAfRMRWXqtBxJBp6shKHEQBXXyuzqnVJfuD5nxa1oLuywGequB2WRNcYZ3iNh5bztWvJZaRsh86Am",
  "key19": "5Zoy6V8U8i9pGe7ocE2ycWiMd295YBuSPSuj15wv4KtPA1DJYtZo1TcihRP3aGPv8HgoXe1ATVwmJKPhmFJHH2Tf",
  "key20": "2JC5oQsAfHwE4kDk14XCCCQXXieaDVhGiAhd2iRC2Xttkauorwaj56uQzgT8U6K2SU9TFwZPgsPHRJ1Z3YSVuf4w",
  "key21": "5ypdyJvYoCwqnpdr2EJJg7CpTjAAeBLmmRQgZL6XhVthMjA6qZdaAYutj98FzGURzKPy3zTsYKkiRDbNwU9A68wA",
  "key22": "DtQDDnHSk3k3n5k4U9TdFPB5VKYC5LK9dYc1fLdtZcMESzjKpHSR6GZHJzAJnNWVmL41qAVdCn6koDBwpwQUzaM",
  "key23": "2xSMoB6C6EE9yEN8pUBhT87Usz7GFPmCvCkBpYD6H5ZHmnUAjbQowTr7T2iKhW2hv9TXANqNswouVR5TEHZDYDJ3",
  "key24": "ztNXwNLKydr6DTrvAPnXjjjaQDdT8WRpuDTQCeYxubUZzFgADWgf9gXTKFbihcEuKRQ2wrYfnedMaDPnvSksnNv",
  "key25": "haM32SNryuhrwDJMAgd27aF1JJuEZnqLFqZ5DEYm9fYJW6649M6pmupmpSmcxW9ZzV2YX5CcW8J6rN5EMpqbsng",
  "key26": "cz8fS82epx7CgDsHgDd79J35vHc9XnNxchkMsRgsCu3EWXD36TUhGwBHfV21qL1zgLfvxGfJUgxeaKLBY9WkiND",
  "key27": "2oohxMCU5Kb2FV3rJWEFhmxfHKDpM3tvBz2m9wM6m8T9ahwBhxqdSJ6qm4XDeXTE5NGSSYWE2JvT2mq3hYpjPeGG",
  "key28": "8vGGXwztCXB46RRxkQCHisM3MPryxqNH7BZZzFitoLiSA3rcqpw6y1pW3JAmhGpRiKKu2ieFA7pYCF2v54R48k1",
  "key29": "2X5BqRfwPEVM4i5vpQ82Unr37YBx7Y7NtMumgEsvgerjYPugyxJ4yPtdmPAtNBcPyeoPU9RBY4ekJhEz7jdUvh6W",
  "key30": "2g2bNJvi5Jpk29YUZ8KVQJDj66cEspHxgx6wMZoAqLuguNvB8D5kXSFmg4d181mvBP6tQcKQEqWhSAmSVqd8ML3W",
  "key31": "31TvdMfTcrrpD1h7Taxi64jWXR2KGhLzS8sU4hLWSsF2KpLvWQDkEHUiBUbLdNtDNKAZ2SwTYpRy6CHAcXF2iLTp",
  "key32": "2FuQZpmPhmxmsnDdNn52DZyGgbU9dTtAteJi8CymfJJw4Mjsu8dFZXrJRQUAoFf5APXHfPjWQJPDtf9h8t6djGD4",
  "key33": "28D4g2gkoQWySC6YJSXc63S6petYGobdX3eEKCd5imjsPN1jrMphQfkZnW9gP39yZXi4eN7HHj3RJDESPywn6X6m",
  "key34": "4QAQBZgzivTRaumzRm47k3KuiRSRPRSV98dHSPirx2nLk1eRLWb4NwiT8YpWWp55kWoS5dzvcXMRApCZ4wgKjeKM",
  "key35": "3e1NLJk1Ug2xVAAkRq3tGVFEzvJ8qrvGvH7SH44ewnF4QgCfLoDJJgVnViaYeLSJtF15XHCJYGTf8epMVR3w766L",
  "key36": "4mXA4ZbwgvEdsSCKSKQvZQwi4UpiCEwaBKejB3coAzyJPpQWU1y3nMTQXPgG2WDeocgkQ7Ko6qrsZ1NLp23jty24",
  "key37": "2Tpqn8sj9vLhLZkitS3qt6uJpqTWW1FhkmaXSNWGjMCWghvGsUNLTXmWYdSpZTSDhBvGm6VGiLBgyTQ5wPxpUxS1",
  "key38": "4U39M684Qw4HbxY4Ajw4JrEVjdvhu8WwS543ThhA7VETFVp6zfLqJfeNrkYxjS1xBBasp1fkPonYJHCjYXYqjnn2",
  "key39": "5r3thRMRr34WfeyYPMSJ5XdodWLfTPz9v1LvhCo9U4CfdKdt36FazNpU8DjTVygzisMzVkAp1KGYZhv7HoGmmXXr",
  "key40": "5nVzajCGTvvu6Wo1RP4qa21cbwygw84ZTehnRhCt8ZjNJzna9HMkx1UHs6jXH9WnKoqxGejvMcNWgmxAx2Nz11D",
  "key41": "39G6MFtq8BaenFSr9wUJyDp51M4yjozz3wMpxnLgE3y86AtAqfi8YBsrWsxroB7RzWX8wAivK43bKSBfDGNU5icY",
  "key42": "4fKwqdp2gS6oLviVrreRtXmN1rCV4pDUVKQA8wCD7bmXNadUjXpVdNmvkWGGGzb1mhbzpyWzzrBYrCp4cS4a4484"
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
