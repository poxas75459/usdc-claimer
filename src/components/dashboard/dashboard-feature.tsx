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
    "PGRJE65TWkmggce5LFeYmqUnu6y88poV8gnAVqeCMLYH11aEhWgXwdcps6KRw3YtkHK89kfRi415Q3Y84fgrRCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ggaoRchj4mzZsJ8gJ9CiESLD4h9VcvktxfHtPKfQuwBbrpTVK9CNVS5GxAYhKg5rPzMDoC8PBDf7gG8oPKzPcJ",
  "key1": "5cvVkG6tqLt3DT8gVtR5f9raewautu292NDeMEvEyruePNak98FD5KCGJSrL6gfZypYNba6f1yaJg88ah4ygw7o1",
  "key2": "9RpnY1ZdcJoSN3VWEELDR7UvKZTZuKY54jB9jSqzPqqiR2FtZoea5yz6pDch4zduiVMY8eHEG8SV9DHCRLquGXa",
  "key3": "44zvdtmdJYkBXryYjFJ6mJnKeEKtH3wXSEcV1w9dRyb7RGmbeEVv5Cn9LDQWDJiaPRpmWbm7mpKiJRUzzYJ4vGg6",
  "key4": "8LCuGJ7frKciaVewzB11GK5fbh47KFAXCmL6pHb4kqAdT4zQAWfr3BtLmoavqRAbiVyxPWdRaXNPctEXyy7MVXj",
  "key5": "4JNySDYvWXoVBym7iau9pBXWCdPWZAps59vW1ZqHP46dQQUHBqfL1wWyAd1R6Chg3doHiXbkU6wkqqsVNedwdcLy",
  "key6": "4FtFcA1vfg1ZC5qfetijA9EGsM7mviQmdo32E6PprF4yj4WDFQhisoDsTSEnUKdrshH1uqAh2MNfSvq28iSTx6DL",
  "key7": "kDQspnqFv8UM52XrjVte1N9dei1ZnV2NRW7D3DUc9dGv2uvd5hJ8z48ipXwz6RGuJrRiNQ5rfjofAUcfF4gt7f9",
  "key8": "43zopHSuyE4DsV2g7rRACn6D1xDYQVsvnSvpoWJ9d7DRdrSBAMQwAHnTxmnZXyQYvf4Zi5vakrMZFBoARxMgEPhm",
  "key9": "2V3WKdrpjJxp9hXT35MPGqx3chCQNtKs8x6ZpYFDZ8qUg2M7qfKMA5cSxtz2j94nXVh6Z3p8jnrTZrX3Ls5PaCs4",
  "key10": "2CRzJyxDVUzT1gRcBwLtXnefG9jAqhPF5a3QqMjdJ5tNEDEekpnkCfG5pYq29u4EeeG1oaP9RJ2Dvk5yDXkC3HSC",
  "key11": "4LaYJrbSqHfw1CUvpdYSHsoPmiGzQSdfBBX4ARhu3iUgtzqAtcYBViZ8xQh376ii25BHULqTZWZbF8expUhP1eyW",
  "key12": "TNFDcdAvvmkXNQG9zS4WN9Cgn5hpqCdW2uQfZJSBAtMuaN61vZGmAWBeyj9XvxGr1x7QgR1Coyyf88EnRZTwmVP",
  "key13": "VJeBJ5r9QLctjC72pLYCgtyAvASfxphhp3fD6wFvjUkve16Yja4kweUZuXA8AyVmFbaWPLT2VxTWXdLgJiFT5EX",
  "key14": "SV61UUN7iDT4yYQzQyfZMuzSJD1fe8Ky5Vjmo2xXmu1B5wV6th1nkBiWapaseYRvAiY9ErgA1YPCoYAGAH6MFfc",
  "key15": "3fKih2icDYww5ZV2Ju1Lr5No2cU2iQA5UUQtHkZkhtL8pAk5UtQfUwB7owfuDApFB89XJZPJqXzq7QnwG7aACydu",
  "key16": "1Gi5UTsdh8iun3XJ9aKk1Qju85n4ssBouT9f5GHpXnosAzUc6XERXvWNyPqcLGBvv46ibrpDTyKBvXLubrkLMen",
  "key17": "62HHwiv2s2CfrTBZx2nuvauWiv9rvyQsmMCjm3ae19NAHsAJRRksRv1AcRcMNxQjpqJas8yPJpcC9vSL2pnRV6ak",
  "key18": "3jJS9XzbUcnhd5oC3563QbXjoWQbswQ67LWBydnEfzP8F6LRsQjEv3mm3V4tjnm1eL3xvZ2xiuHwsrQoCKATJgeh",
  "key19": "Epuj4rN8nxtr6FVJPTgomyMUd8hFNiPyRfNGMRv6ZEznzegYori2NpDdUqh8YUQpt1RT1B8YkFSmaCAzS3K4iYK",
  "key20": "2X68AojANqTBZvM9155DVQ3dEr8viHPubVUhfUUWyXyGaC6Ew7T2xzg4BE7JnDfatucb3m2F6PqEBx9d2CMjZiCo",
  "key21": "4JLnZSn68rHEFNnNM4Ry4yPYAqGrxNsxD8EwqgcJ2pD7bKL7pHQKXVEqZFkNPPQBSxBNtvwK92xsyENHBB7tPEXX",
  "key22": "p5VwRizG2Dsm1FgMkfkrjuthoBrTydFh53YjMDFWSYpGqmYgskpP22UQeGVUfAyaRWcrxHYBaJgDpyMa3zLdqGe",
  "key23": "6VVvY7ERcQeRM2oqvzbgJR7CGVmQ8UZJmGUnP4usNFAVvpcQhJouHL2A1po7EMu6gFu15cYvcrXym2z8H7zbwMR",
  "key24": "42zL5ir2YdYzzutPytqb2GZkwStEuNe45e9eP61HQGnx82os8vPbzF6EF3KRuPHdLd1wsQo1FHf2Lz75jUguDmQv",
  "key25": "2LnQy4DnU6EVka67Z6YjAjSrP5jkmnnU1BTQkKDbZrtMbhYL1Hi2g5p3P2jto2NBjyMa61wb36oLy21KyS8P2jQa",
  "key26": "4QqGPbbgWT7uJfjnGZcRkTofXjAFuFVD4WT9pa7w2P71prmhR1ShTBvzbdKCsbSPWJjhdGC1GkBTCZRj4CPLft2r",
  "key27": "3TGuFEyadyDZ8QUPqEfSUTrekjpoyxzhjpN6f2jMR3ZNpCse2U9vkvirEGLjzr5cNgidHLtU4njGzfeXNejahQwH"
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
