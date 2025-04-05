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
    "4kwhwZm7t51PBLiAwaMsgEtXwgt3d7NTRnXHGmmbLDdKuwcsSL5PQzTEwDbK2NGv2jmD6kXe2EgSLsX2Euwjwn47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LectaxyJHdvMs12rHd3JEXP4PfzPc8gyq9JXQEgzLn8UoSfpXcV1Gho7n3GiCFEXwZ9RgWDfe1Zoa414kF7ptAb",
  "key1": "2JPJuY9FbaHTP8BZKyPo1nX1bcoXxdgZPepQRkxVTZ2B8Fx3zXLAruK45qrEf8GPZRzfezWv5mVZpmsm7yxWFaBU",
  "key2": "2MgvJDpBci5F5Jpan4eqjoz9j26ULuuwGcXX7rKNtSph2FHQPma9fZFWE2qnLQtsnxJdGfaJVgkixwjAxyiideMp",
  "key3": "2z8SCUarrfaGwS6nXhZyFXZUSEgBEytYEKiVBeSziQYxGgVhDbSePymooFTeaFKdmEUfVxqaByyjeMYayQRYkaC9",
  "key4": "32v8RAkyhnJDSaDHUQxcMBAjqxaGTnrFJfFLbT3qdRHuf7S59ioup132azDpxxen946YF2gsC2wgEVYZjgSYtTx7",
  "key5": "4KYrvMHDcyyWDUuYq6qNhFGXZgxgBXRPmbh4Tv9AYr7w9z62DTmLmdS9UKrQMeDrDGU7mDCfKBNzzEn9dw9sPL18",
  "key6": "3VqJEEzP17M6jeeRh4sqWjTi8UMExUtDzcacLoyifkvmSNyhZpZQe9tMfACNXhfmvVhqukCWUCcL6cVvCs5sNGWV",
  "key7": "5mGKunz4G1rR2rJcrhM2ikJVpyrqj2DHU5pMCrd9eYwdkv5taUZem8xummrnmc27jFB2XghLGGHSDnmf2XxjuRix",
  "key8": "3rfEoiZbSc16cyKqXn3bV15t9iY3tYKT3d5Nq6y9V5XXo5boxm1ixNH94S1Ket4bzqwjs7BgiPENoaxDuT3HZuCv",
  "key9": "2u2dztSAXqkvoAwFVY768RQRQRzC5h9SMdynSQtUBn9rQ8Tyxj7C71eF4wvD8JHwVSwD7uf3nQCLocWUqdRY1Lit",
  "key10": "2xJQkYE2BQ2xNsaD2n9yWErrw5qwabnvgM9Zh62b74vT2YYX21kb1m6q8T4edq4sdwudVHHS1y8NhMEFoFmF5SsE",
  "key11": "5BJgdfCx1mPCntDR7RCHC7auBwxFtGYJsSEawZuJudQz2VWSZwgvUDXdXEdDH6cLE7nQAqCwda76eBruGjE9qfcu",
  "key12": "2GuJQinnZbxBgDtKfCdVJyBqJQqpWcVR6xnPepnRXqsTSknygJANtyB1oEhXKa63pkhsfqCHFHVV5rexqimXVE93",
  "key13": "4WRgJES8zLG3i2obhzarJNpTL2MHCPdZnBwJNqKc7JbNYZsTHXNtUMse2HyaNP1EsK8h5isk9hw5P5eREWqthwhZ",
  "key14": "31LoQi58BYZMhRCzjoFr5ajSdhf9mioHrd83bn8bBwi7ieE2uZbexgPmUg8CW7tB9FMXCpzUhgHUG78xpYXrTVda",
  "key15": "3cSBhSwkFUA7Hxgd7L8XP3WfSXaCFiTyPGmVYBeZSDbWtYTjBnfhRkLbxS9HnN4UTdnPxBsd9CnDhgzmfRxUqa5F",
  "key16": "3DgnWpgFBw55kKPb4PQMV55e4iTg3vSy9uHDRmnPqGWjvEs9LGdkNDyH7v1oFmePdNM4HgwVRtw9igoi8MmjYy5H",
  "key17": "4wUjp4jqqyBkYyPu8UCZvtiy77LxVyPgoejhkFB7e3FooHdQiZ8VNuvnQTfhQ7huW62KmvT5dJ5BGVnHbiKyuT7s",
  "key18": "4uM86eQxPWPuw218fgrnVeV5rHFKiiwxGF3UrdVcRuepVLeN3bY6yCJ6Wy4xv6sD9tWw9uAYpMA6MoU6bWcPaWg6",
  "key19": "51QQcQVfpGc3oPecmDUQq6L1mNuKvgsUD6uj8xgiihwZt2ZJJMcy6wYsfRkBa4cfvAgW2DBSertYiggXzrh26xyC",
  "key20": "4jq9K74WNdUkLJqN4P4pBfX5X6Bc1eYe1r6ZcSpbiD8Yogjk3V1Hkqi2HyYrm2TfzCdtvEMiXcCxvGzTT3ijLjwR",
  "key21": "5baQqKWM26wcxkGnstgZrXEuHaRkESAJaBQq8YHhJNdo2aWnYree3ArFBQTARZBqwbQ3RoPdQqBPWuE4DUdmkcFB",
  "key22": "ayVcwpDSqyHXL8zFRVUZLPJRphYJ8zXxhHdBis5QaEcXsZ8bD7EKTLruQzpbKEmjUszaSnfuL9m4MjivKWcgrY7",
  "key23": "3dbkPaR5zDFQCm7pQe9nZeJns9iSBFwWQvMskHCDM3WKyJKUseU79Y66nNjAJas6w5jcNoUhPnEz6sq6Gox5idWb",
  "key24": "4LcUKRgoTq9g73QCJCnLbaQHNoKy9sWCfELpDFkat5irTSzxLXMhMsnDMzAZ4doYeGoGPoX8mgC2oqjVEQ4bj57e",
  "key25": "3WHi8cYvJ29KCqM4uuWpEQjENy2umMMMqjMTkR4d9ykNAFdEfgvhW9ygwS1x7v6u3AzUzZx9niqyngw5NS7NCyDk",
  "key26": "EYVF2TgedmqXSJSxB3Tv94FoykR8sjpFwoQDHD1n3hrYnEUGdMk3PD41nV5QHHH4pPjgutMWoRv3ajMGsPSEce9",
  "key27": "2fpjkPqDp4NenXayv8Rgq8C7ZcGdv3xakFgBtK52u9mddJm15wJtjdEhD9LQwckKYUsMGpoyNWZEU3JkV4nYmDU8",
  "key28": "4CWPp4Xj1oQPMHyYTsUP8T9Ku5MLHZfN5uyvitCfHCgptZi7U111H5N3tBCKm4Ryq1scChTyJX2YHiMN2ZqEc3fJ",
  "key29": "zkgR2Ksd6v9Wi63SETUQteFCTsVfJNXjV96uQwJvEmuXkwcHNKNucfh5upPBWguWxKxpLLmpzMQJeXw2A1pJJ14",
  "key30": "F8pFcx2pYLFjzXzWwSF4qRwcZ1Hnj2cYK6YhUgtqoMGV9UTbo4sps9Fxe88VxMSDYM3XCd2zB5HPUBwHuuQExCJ"
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
