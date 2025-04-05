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
    "4btXvcZ5UeBzwBmVyhLuHmVnxGxuemVT2LR94yo5GuPR9yn12frLszxRjyYGUSo2iRM97qgvXiXjYR9F5ga1mjwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6124p3e7M7WfScYkWXVsMDXANGVF6iCfmHidgTUGHYLsvriUZH9q5PDJb4h3WrPt1gmTNoEiigHHNjC1dXYkHdTh",
  "key1": "2zwd7T7EVe9bvXGWRrzHqsh6PvZXB1Z3san7KGsQnuf2kRJaEKz9iiSyc4MBPQFC3sSJvjQa7j3hohjUvQUAeQTe",
  "key2": "3bRNU6aLgGg9g3qXTzaq8vZ784mm6NjE29Cj4YqYNV2sAEX5KKhzbwzT4kmDnhnYt9ZjnaX3jSQhTznko5EppBbb",
  "key3": "4c18xj1pNfLTy9poF945zSoTAwybEajru1gFYATXVSKzryxYMkWKDv5bjPDDSir4VJq6kEPNdQR9sc4UnUoY9CTN",
  "key4": "CrKWh2TvLXowDPMPkzrtHvnAgfXrHdhSie2BRMCfD27Dzp4AmWR7pYjbQcP771YAKVFTi4e9rQib7fgPgLuy9fU",
  "key5": "ePXtPatHhhg8SpLAjCzfEdkCfzD5HDHNPiZEaJnNbTYdKwZE3Zm2boSz4pF4fW9RJu51X1hixeiBgPv5PqES2xy",
  "key6": "XysLT4QUjQwWcLumzTZDAbrRVhsjekVdkQ2F7wnQ5a75Sa7MT169W8xrw2bWEGFrzh4xXCx3YzLZpFcikzWMsAp",
  "key7": "2TpeJ29HpNjkDNLFRmyZ4avF25QF14YDgc3hugFBPaqphK8W1seYHY1uTUaRLScvcUPByKgp6Ukjgh36zCeJuwTT",
  "key8": "2LFvmFubHxzyXuKKsFYwqwVxRqdwmX4N1zRxZQ3NVTMZ5P1ssHZ66fFqvJMpBPawkHuvNAwYHSCMRmRpCAQ7nBM1",
  "key9": "619jqhEiqezJZjbNFMCi6V37HkCpBGPssiX1bxu8Q8joMWhYTFnwkvmBrYinjKdowpPmD8QZZuKmirYmuzoVVXF3",
  "key10": "2HYWCnrrDYgrS1VzMuyp9YSDc1G6YKnchSEgHraGoFGPjwNHQLWHRfTZizpBRpGKWhfpx3ctmKa5Erge9uyFEPxr",
  "key11": "bxH8nFvf8U6NGYAi4Y1439Z9wBjYWYBuTNaN1VCLv2mAEM5RZpRgax9TuAH3iQEe6N4zMW4kJid6QsFWeYx46ec",
  "key12": "2UDT8csRiqo4NtnU3ubhnR7uHJSgkSBWLMctxzDiZbFi1cYGVpyF9b6YFRb83HgatkTvsBUgUoWGW363dWZxpyjR",
  "key13": "5nhH92BSx6rnJb5bWnA9wg4Vu5VPRtRrricqCtwJ1KRUa8bzxLUFM4G2jCrmnFftKHQ6GXGgwsq3LMV2G6wZHeUZ",
  "key14": "DiAYVtFGmW3XnnNfeHmFmUK3sV6wGMu2QLEZFTUeBVmEcyqGbVka4zv89fEBGc9ghCC542A4dYCvuPxEZG6hBnU",
  "key15": "5AhUpWpZ94MxVy22kxYjduAsFVVcyxrpouoYPtoNAzg4xQKDHKS4kUfRHKzUqG9iZvVJNiuBnJp2jLLiHQ5iKXaL",
  "key16": "zTHRwJdDMV4yR2NkFa127cn8LbMxX2L8rGSeGwB6WvVti4M92vNk4VA2uP6BWbJzArt2BqREd579nZn7AphofUN",
  "key17": "42iNHeoZumtLkCdSw6XmJnCoHrAXPsVjRyM2Q3WJeCN9687mVtePL99wFi3wJgoEybF1Ers2dcYnnwidjEhWR6Y9",
  "key18": "3Lif1GEGkKwJL3bo2pKG7skDCR1mPk5MeP4TmXEusczRKwdCHwuZC3QGsHZEFStWixs4VaU83jsZpr1LpzpThE6w",
  "key19": "3dpTJf5joTacTGwZ6VWWMRmEUFPGEm97HJK3LQttdJgHhuKDWVne64izoNo6XwJoGTb5UwLRH83LAJZ5TnVMFhsP",
  "key20": "4uW5LuLVYWudjkcLd8zkb2ECwERgaAnhjnG47oJzghEF46bCA9Zusy98oGEBTd6iqhDJYSmprPCdozWcXKGswv9G",
  "key21": "WmFryN18hE1Dj5NLmfBhvhhQEWgKYVRUvoRjgkHfgQmKmR9Q9yS2hcZKxqxVXZDawRG21kkh6bjHnbxH7VEeAKD",
  "key22": "59NUKiLkVdWcPLq8ug4p3dw79snJ23st5LS4oS3MzsZRMep1DVh8d8QGx249rFPcXgHoGRmG4ic2MyqJTCb8LzxX",
  "key23": "4RGnbQkLMaH6tMpGj5cxpvxoCzTZvwqkGwmCguqf9ThyAoJ9Hq4qZkjD8Xjmd5wRsWX1yiwsdLPmpL7fLqnWN99P",
  "key24": "5tyChgfQhd9nf9nbSTZCKnyCULineYYQMTtWhxLomVpWPjradioUfd47fCrdBUXGeFdN7AzNP399agZJDrc6HuDB",
  "key25": "5SQeDCALPgzhiixR8aXkKXVXHKi372Jg6FjqvouuPZNDyVo5WZ1Dst1KoCxxm5J7zJCjWrBMExTpX4qN29NnpJnE",
  "key26": "4mu3rsv36bKTUcYkVGHRch5uAxh36da5VxL1J6Gzvu8xBQirNRMF5ThjShKcWBbA4fCyf2Qmp9ULakeLALdxoH3A",
  "key27": "2BBb5JeMUzYoi7Qb3xZT5bBEpDgrqpfpKVRQ6S7XTPFRmxTGipAJKvdWepCicymuhoMbN96veEtxWcCGCHojMDRq",
  "key28": "35fC8MdhecLJkRtMKKaLWJyXYNpC5p3RoJFJ4epT4BbcwJJ1DBAonpQGejXN42XXHx3jwAb83NvweZYVSdXt8kho",
  "key29": "jvgz4SjsUBWB9gy1DGW9EYq7qvPpdwXjKg521T1iR72FbtL8QdomXXw55v3yayzEqk1bSDybfCBJFw4FBCoTjkC",
  "key30": "4kCkNKznb6dqWxR1FAsCDxaQ6bT95CaMVZRoRqLupuvxoASKqwNjURoXqMEtgp9zBehFqMHbj9bNHJah7jTCocfn",
  "key31": "3oXUH1X3Xdv7Vb4ciXEESVhJjgm1ugjxpZpyYJwjBZZ8EEQcqCWZo7fAoD3D2yaT8wHPvMB3aQTKi4AnzS6y2dr5",
  "key32": "5fFBfJmHLbCUtJxreBAX3s3cYaLCCjTUQzTZPGNNMY1JDJgQJxDStwqhYyX3GweMPvzyvoZmLRgyyUDpfXuMEwRW",
  "key33": "3tpN92ceH2ip5vKrRMBVUwZJn5PmqAWfb1te9kPuC6LWzfb7coWNKayVBCKu1votFX57y3qQT2GzRvGNmHe2bj3T",
  "key34": "1kVYZheunLiLqSBKSp2apFdPphh858uiT31sJRfgf8FzKRsf3q8ZSy5rtF6GZKNYSkvAxhA88heM6Vv1qQYDgE",
  "key35": "2baFQ1DVrDVDyhZ3WS1NBYsDxqi451mJ7YAJPfnqnnCM3ZDkZwZ8CgvXPFLsAVkHNTbeGgBEbWHbPE83SFdPr8Zw",
  "key36": "CWj52XMJdqoof5nZfzq1ipjb4uFUxpJ5GrJeczaxhecxH6YNHcMDkX4eAbNESt3n9EguGajcsSrMZCvMxZf5PdZ"
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
