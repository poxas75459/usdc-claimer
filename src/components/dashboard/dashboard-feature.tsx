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
    "jLAMeyi5tNqN4jQ6SPZMQKJqu9vA7NtzisiAGFpZ1wVRewV9KD7JdeYr35GWWKg42Ek1Xu8SKyZZAx3mVqvGqJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPDoVrtDZt7QseuC3cvzGq9AiNvvGwbKndNDrncDcbd71B7TU5wxoQDSCPkdJvCeWpSL147f5dsrfgLLf7ZmK6h",
  "key1": "4EiUzu8yY1RiQPFGoGwVzcZtDNXnMcyYZXCRaLBMcSDVRHCysg4TZVLtu35kX4zuT2jaSfCyoEiz43GofNndxEAy",
  "key2": "4npK4GzEfSicyxbWdKbDFNjZHKvYwsMuzyZN2pNa5ppVXsi4Jm7Bhfg9j6JL27rmafs8abK1iyCbaSS4gdV1v8nG",
  "key3": "28GnbnHXfN8Z1cHMXH3zw43jBvogUisc87SJRd4BTYopQiRDcPY3GH5GmFDJhww8MVGMBq6Nv3rHbAWVM8zLMhG9",
  "key4": "2V92ps18phwetWjBeC4n7vB17pZxQoyu23TS9f3negzZUJu4xVZzv4y6Y4opLbSWmdfFoAsZoJ4hp5d1AW9Z1YXW",
  "key5": "4hfnJcKszmovkx9XNaVkPrEe4FR7AM4hgdx7isTg9erSyozkguUat7CGV3QXjTECMLZ8JmqCvDfWPW7ju7ZLXhVF",
  "key6": "3hEsUDgZc6dBa5N4nRRH1pHQvK4u6Uec9GQueg8uhcSSBDEUEN3VbfuVsvnpwguwmERnWyv9kChwyhATbpqKH9Ap",
  "key7": "23KoMrmMJridKDkARML5upKoyjphU6KX6acneu9ctzKmE2aMnGSszzwPBRabZAzYjhGDigHK7xpyzUrLavu4WQns",
  "key8": "5fihefSgRMK3iZEKJBNohmqir3oBMUS7vxopaCTU6XMpbvz8NRexzspst7Ma5XDQCk5UqLgkT9E4nxxTbyTqvWn1",
  "key9": "3Ms3tATpd7fb9ozHpVTinATzVUi2VfE8s83NpadFPyx1Kspxj1ocAewoMtFwZz25KJ9R5paCwgSQtUegQmrrvQJw",
  "key10": "45hBgHtZHZpuh7xQUDd7KFwdXXz1Gt4qtuEe6tAriQkQNbn28vGA2D1a8aXiVrc2gSZuV6WLtaEvJNkPG55p33XG",
  "key11": "5tC6eRMjVZR8cYn9a4HquXYH4e7DnZBf74oyxD9gPxhtmU4Tnxc919W4ZGATNa1reUykvTyWJraaYj3CqEdCYi2e",
  "key12": "2DSApWwYoVxFjsMzbGFYuXdKMLmauj3gAJP8TnULDVDhwNG9E5yDcWnfUJri722Q5z1aupU9Mwus3ZSwKF5p6JU6",
  "key13": "4yLZt4jCjVWiGXne5yF3FtQi5voQuHHhnURwEhgRijdYHbKa82YdccB1rfPtw2gqrEAJ5aW3ZRyxGR87SiJ5GTGT",
  "key14": "5LZjhgUxT8q67n6Z7v8cygJxo9pZN6csPVbHVUjeGWq5CiaVaKT5vS8Wx4QY9mjZJvY64QZJPKQt1tsh8qD4YFv4",
  "key15": "4Wram5pMCtXXsmhSFCs26JNL7F3SGdWLDd5eiQq3hoVE1erPGFBKSHrJzBTWhMfcHmpbLYZ1QrQ3BGf8xv3xhUZs",
  "key16": "gmDZ41Hw174vRPfKTczuZyzchfduKrr4aM7QcfPYm5HuMUrJyy24ZqvkfqCKRpumVSmpwn9rSsfLzwqLJ9b2CpL",
  "key17": "3bbY5vTjD5LEDi3nP3aPJoeUWkxP8JbA1qzMaRGxezzPbBiJz4kiTdSbFMjRGmtjBktZJG8rWiAQuPESQUvV2TAX",
  "key18": "2CH23KUUXVANZ7Y4EEBHRC5YVt2smouYgUyZ5ec5xwzJuCcABUxgVk26CqAwrTE8vXMeoFyVZELWPkQtBUxSGVsY",
  "key19": "5AYJ7MgQUY6uTkazKZQrPaKX4QCX1uw8mNCjQCi1hv5gMLHyEa6xauUbAjB2RviWf5n6Sr2vkrUHyTU7J9KDBNf",
  "key20": "YDWyrr39EeJm26YcKAZ8WhB8icHivgnb6ALphSaXmAbbj7qBkoky8WQb1nnHFAXQyvcYasXZTAf4mzqpS7gCim3",
  "key21": "4ij9HPJsGc1nH5iHZdUVBQKGFwsXk8aQhLiVooGen6i3As4rwJqupx5gnRvyjMB4n1Q4FLFrore4NbcJWPqBM2QE",
  "key22": "5mzKHBzgeLLC31gUiNDYAbHYHvA8MgnPc3r27kgghVeLkLjEtQt81Zc3nmEiUEEWD11WaEuYCU95HGgXJkEvh41C",
  "key23": "LvmnDHbZN82RHxXHjJqJYNqZZW4cWCHgjySg1SZfS4JRuPR5fjW5omXmePFaB5ALYyrBhYQFysTkDPcSbJANLGw",
  "key24": "5EyPUg3MFwJahjghUnGqsL6kYKJhQ5AXGnzHAYtiJBuFaibCvfubpuY1RnoZ8TvecVJaMjiTMTjmuKbGm1CJZMJ8",
  "key25": "4pzR9KLQBNM5Y4BGmDjodVvmJKVCEomTP3L63JwUo2uHWW9fUgtSyPSGXRb5toKzqXsLNXUgj2cEADKxCBKJLQGm",
  "key26": "3WL1dCptMkdECMxBSRWH5yjhZ4bcVjWL5GMvrVJjkunXTDpzfekfAhLVq8fd1tE8WDqcwf2jF5CsoJceGcLRoGxV",
  "key27": "3NV5SCkXBasEjGHmiiNSkZTa7whAi12Ftc96w4J7Na2AfnyQmV7FDsMH9AQW4F6TBR5rfpbaHjtBc4A5VJkRz6ow",
  "key28": "3FfcHsyEBZHQxxcP9EcS84bzYhyJz1Q3nKdQd8wfaGT7wgsxDpfwEhxQYPhCkXKPXNM5jjKurN1LVebciFL75zDE",
  "key29": "4ovA484dNZKHudgzR1eUFacx5u55nvVapYMbWogE2T7ChNy4TPKQPGGjrfB8GGXjzyvMJG9GYF5iALVwfFCZ1VFx",
  "key30": "2RfqChpwwVDPRNmhHBTsDw8NUBikk26eihw4u42scAZyAHgYMX5cWyT4QVV55gGzPM1wscAqnfLSC4qUJ6yReNzr",
  "key31": "3oyyhpWr9vBdebFdXMUUWRmoLvuvpvPMDNZPT5Tx6k1GP6f4nwFTUEki5xvUTm9SWS4XB6ncconP6fYzb9YyYFbJ",
  "key32": "4w4ScjgpZUiWB3nrN51ZubuJHYFVQCdNy3NCvfr7wDfM7vivhotHUeJVabL7htBm4jqPThgDZyk8Cfras15tcJxz",
  "key33": "21dSGctnqDgQL3rV4ZVRyp1Ghin4sMaF8SVqtjHmkjYSaTL7vSWxmiqNbVCQgMPqfa3zM4RT9xCfi5EDLuVM4fw7",
  "key34": "oyDEKMysR5yK2fE9QZsySKG5uwjrG5g483mrEZFtTvvGVdZiWF3Kq4VCU38WaQuzcWhShfva6e3GwqsFbj9xAPV",
  "key35": "4sXyFzf3LEpkv3DgvetQTBsbTUZUZgAUUxq2uSANsBx122PJm469sBuvL4JbADwW63cHksJHBgRs7HuVJMmdqKL3",
  "key36": "599zayRHUym5LDXbJkiq6amYe7mB3oEzoh3cjX3btoy7W7ZnEcT4SNCSQN3HRMtq86d4cnJuLsZ6eHJYJiS3kkgy",
  "key37": "5bD8WfXHe4ar5d8YMNcmL6PYvcKfT7GYTfrgHX1xyWfvAAPYavDcTsZpwGyEzHGhNaj5duWb1o4pSBpKtb1MafRZ",
  "key38": "3mGCS11cvYSJf3v2B6frQ5QrAcqKrbxa8GdqoMWzUwQsGdAhDePtvxa6MBr2AzWVsH1B9SPopfxdvHAQsKcJmbqA",
  "key39": "3rMGJNWWTej9qbhiFU1mALvXQY21Ju3vcyn7EKBiCFbMr9CGE8dqg5LLtS6bL44qNAAcWt8CVt5zsMa8i7o4t215"
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
