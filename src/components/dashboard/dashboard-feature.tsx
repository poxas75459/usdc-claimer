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
    "Xcv2wypV8ZGzWy5aaysbTR5fB433TaSCFvpnht8Lbcr14NU71ecXfGaJsNSDUYwyqSwcNPbf5zfMhCsa2W5ypdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfNRUAetT5Eeh9K417PVFhLZZmXm3EwfaxazhhVeJfLv3GyFmRgggANHpq5cyWSWgZe8Jqzo58Nrdzr5X2cN2e4",
  "key1": "2RCjNt4Lt9vFWR7xQxdE46oRbJBuwroKmaxNMoXgnTW2ew1C5fa6LnvMRUScZLbV7aF4inYsfoN2b2a3NbkYZcdd",
  "key2": "2r9HPC4Teky6brMhWj62LsmYXRcU21ijmhLrEsGq9F5WAgodagxWj7bUR3USjyAckYq3EtKpWbJ3k5tAwmyNqqEp",
  "key3": "5HFnYCYRBzor8B497jHdgWsBWpDJxaf8gWmpai4H9WCTcrMJHVeZ9KjnHhscQJjBr9btXf3xSX1Jt4EdfaaRBoGD",
  "key4": "2qLMzbv9cm6ioxY73RKkxkUge1GACK2hrTGYWLE3Z6PC763bpb5jzoZXJDP5zamYCh8NJqtHjNNYCKi9aEpMCtra",
  "key5": "5Y1agSseWQYJa2WabLYw8dMKBQLrsByr6Fur586P6Po6sux8QH9WLepkMvoiuBH2puKcr8C5Ng8kWSe9t4vMGML6",
  "key6": "3u6xmxRD1E44UHZAUU9Z5TnWSzJ82TksiCgHJoTLiNDMraCjiAvhor9obcY6X6heNB9cLeMgm4iFsDYSokzyJoBr",
  "key7": "3m2WwKJjbXCPBL9JjHJbBtZ3LTHdxY13oCiAxaAGXuNtvwR8GBf5um8JVJL2Qe1h4kF5dsXxiPfPi2gZkCfXtLFj",
  "key8": "5EJB7UbXSPAY3uP2qLgn7Knz8J4Y4FXSz1rrtdrvHXhBWUsLvxEpTBR6sZF7i5979Hbg7NqDKyJRdtowocPezgCX",
  "key9": "S5m9r9FXdgjQP9AC8sxppa5VPsu9SGGM8Gymv7oiDaWBxheDmFEPGyEMjQkH5NUPjppkncayTzkswfnw5SEPPM6",
  "key10": "4KNxpdKoojYvJ7sPdVHZFZmAwg1MEtC1rs9N3kFpQezxYAxjYmbgavx8ZkE83eQZxEQXgWovsvUnt3ZGAYKyhxy3",
  "key11": "3Y7RcGfkB6gBqQVn4iZvJLgzUpJzEH7BLNT9NbN8in6i7UyLq7GK6mWLP7ZpK9fWLGUksNxoMYxFNZuJWevbPTNt",
  "key12": "CNkARkPBm1eqw3rDf8ief11r8NgAFrsTp87BdfWqP2XhQnGCNwMtXcvTBzvWaAHAcGuja4T1wwPgH43iobV1B75",
  "key13": "2uuU14N4nZiC33Bz3GQZG66rAxdeEy1pPFWGT3DybMJBh8jKUgxiASh2wg11Usriyo84ZHJXyuCUih9X9VnVVvhc",
  "key14": "3iTCRifoTYrmAWseq5hVvVyH8FdjZM9VFi51wVKAz3zcBRmpzLj26xrSQGqJ4tk8rQDMZ14aib3LWqg67Jd8BcLT",
  "key15": "2C1idhzTusypVKKbqgvB6FxqcBsddNzNaLo3PCPv6AgsKXoyvFiU33jsLTqFdJKtfGHFqnn2vmyjVCtDyQLGuyLD",
  "key16": "59hgep5LMjHCU8hbPmV7pDtPgctaSA4drUPM9DxZEqZvteHY8Lhw2JUoD7x9WNNJx1xeh2389xHRhYBeDW8ogbHY",
  "key17": "3T6NLqQvasg7t77xQPwrBd1cEyY49x6UWnFwMUBrdUmziiEPxREAouJ2GktRQMiyd2vna9t1f8imtXpD25NE33zM",
  "key18": "t1WKtywRFPUaffAsyKFh6NeyeMKF5QC4QmCpKtJdmxBf4Gb78gYEcJePtfoy8TVmh6Y7U7jDccX5qRTWVvMrmrW",
  "key19": "2LCsoZzggUaodTnFrNZR18VdtieTX6jB1H185rKVTxuCrfECzU3LccJp2tCx23jdBV4GURwbMELYWEZyjYcFkF8H",
  "key20": "3B3ZiSEtrM6PV3pfT6hPZhs4KHsF9ma3MdmrEjRZ2JCgg8eAtVu8ZZYRe99M6HMwLJot9txk9Z8UEeikrwowKWTg",
  "key21": "2H9cJFkHaSRpnDtAATKogLWwQBkw7XFqKW3rdsP6tjNa3Uij8EBduzFimz6pHWADRAHkSrGseyAneF9dbrFm5rPg",
  "key22": "52raAdup9id63dTHuPBJYA2wjf3SMtT4EoemwtaNJRfmGcRdpsD4fCRrXZATt4p6ZGo1wQngaGrqNJioYr9vPFFY",
  "key23": "3HB3ALyx7omhXtBc1rc8fVthGvhMaG9UTcHg7ff7YVAee9Z13nMy9PuoTY1Xd6mNjhSgVFyxzmkwjBFH9Pyvbqtu",
  "key24": "42gAN7cqnxM8XjJZTqBB15qziY3v8qMyubSBPXdLZM85wetahMX4CeTr6JUj9UUfJXNn2z8gGAjngET9EjATjwtq",
  "key25": "5zp88APPnjmkHjBQcMKSPxpMUtGq7tDSQoE1eLLiCpx3oM9MMLjZPgq9h5EpCoDB5ksNXqLRvtCH4XRmCY3XWNvo",
  "key26": "idV2euaTUTyCYZt57mkbQJpSvwzeqsoSfZ6jhheZivtMUgZzRPrNts3VsGqa69PVMnTq7HqtozXTngBXyrBmZKy",
  "key27": "3QhgPBfXZzSNzQkJd6FfcuQ2DTkNd4sJZTcugqEjmAixtne8iFeeCaTsgJUPqfPiRH7GgA8YNwSHT2EnJnZ6K1ev",
  "key28": "5dcieR9ZEFL6NJNz2ZX4TWzCjexEarT4RpvA1J2yk94AWjTZcP4Jhj7SAqWSCCcupdoQLEbme3Dwm5FESfnGuB5A",
  "key29": "WHwrq7DYnejRfZ8wGdJ1fKvoa3eEhkhkkyPU6Moq4K5VjEnirPKraBfjaebRXgBQ6yVCgrgW3JfwhGvJdEeaASx",
  "key30": "3mtWhN4sfoWbCHggAsBbgL6yVJM4yDAtYoX2b99wERwJMbmeiZ6GM2t7CpX9HVz7dimpgZmrmhwVxBXRnaDNGur8",
  "key31": "27wsSitZJLA9SwHv4oJew4zkiTcFGTi9y8oTCrGVmVFjvwdB1yLBFsfafGj64bwfp88Ka48uoiv17mFdCiWqrKvk",
  "key32": "3hkiUjf8SzVzTT3WvzKzJ9UQCUsZFXZXcxmTPRceQW3xLgG4G9b8eyb1gWjs4dUavk43E8N3XW8JVmVCWjmKfkkU",
  "key33": "2E5JwvRCiBykJ7JG3ZniyaRXVdK6XrZ22zeVdtaVTWZWZnTUoerxXG9qn5ezGvFb92BNPrQMZmmYqTGBcRhUeCtB",
  "key34": "62B3h1JsVnUWZ9wfLU5BqmhqLdecJUWtg4CRQWxKfrPGVh8TogwwWD8Ki5r6xe9enecRVt6kXA35Wza7oDXNRaJK",
  "key35": "v7dHDiEnHGQr5X1bL1T8FQW5hbkRTzXVGQJGoBkTyYuVaqXcB2cALjHtWJSx622mGZK7pzBGALFTnNMizceXcLt",
  "key36": "9dMWaPeo3QBxoBWKzgpKJo5yaybjBeC8Ds9ki3xtMJk5sNw35au5urPx1z8A4HPxWUcngniEAsUB83pr1aQW5xX",
  "key37": "4xSy9WagBrmHuKktjuHjgNXsaPQ3cy7jMdLsHNqnb6PtuM8BfEjT8WBayqnNN9CTyFDuRH1wHZtcKrFDit3XfNr3",
  "key38": "4dQ3LVVfKo13hit14dsNKumQkbtx8iQKvJPhWJmQbC6g8Yq8nUANSCFeoWrGNTSeqHuxRKo8io6e4m4jEzg3PNuz",
  "key39": "5KbXpVhkAj8cMw5tBAVRbq6mjSbWZ6FMo9zK7G9VQ34joxcwzALkFpRSYX9NGNRwQmo6iHnvFQynEwyB4u9N2YCh",
  "key40": "2e6DeMqiHHXp4dANqCz4G6ysbRwjxFyHT7hNSaG1Am64J2phyMrjyNZv84Kw4THzht4gkmtWmPC9h5QWAwwQNXRR",
  "key41": "25zh4R7drw1qoH1hYtrmvdyxvZnLeh2YourpFsiFjVLFpDfQ2oDHk88FTf7Uie6hCmrfCJoPJHDnpioaKaFrmTAM",
  "key42": "2oLeWXdJ9UGNZ3s8xMoggZjjoZwAs1noHMpXt5NABM3gHXfcjgipb9zxuxddWKCtAyESnfsaZuVFsgEjfqsAT9RN",
  "key43": "4B8zSEZ4iMDXPaVbno6r7ADLPFbgcd5MyimqirfbvCSKL25p6MC6ncZbg9283iBArDXDxB1D3b8qaZDAZMYDVpDn",
  "key44": "3EkZxESVrUbaUAw8MsvJzqhvf82z3q7yjNKvFf1bDoRmW7LLNWG2E7qPQWaCArL6YhAcU6o8QvhueDwuEBgUrbEf",
  "key45": "HXV538M2EXt4pG1PpUR56YjKBy9rhHzVMb4LemkFoMdgSxuAELPHqSkHigVbohnZwuzFCpzZsaCA9Zfg2jTKQ4K"
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
