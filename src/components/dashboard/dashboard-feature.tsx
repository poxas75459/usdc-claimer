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
    "5snSWhTE1Xu5txyNHCv6W5SLfwX66R2tjYHpoVKS4kYvcs8uBkX7NsyAK9F1QyzxxpuKBRzSiBLPSkkz2UD9Wnzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MoXXsBPpYNJp16gaveQt8SrSioWwVxQRFz7es5DoSSjHESxb67KR86qfUyHyDb7zuLNq6T69JYM28FcPdqjze2H",
  "key1": "2R6WHfD4p9krBeK48rmiPMM5YvT8za9FAQSipVdMYukMsPGRzNxix5wU872SvBzDczdmZz3CpTZtoig8FAeR3bKM",
  "key2": "4k8EdivBFiwCkeFJRMduxCY5ethxg1b4zmo5gFZnuN8yMtzA1Ap4cXZb5MvZB5DJrxrUfiHTYT9RkYFWAZiFR1Wy",
  "key3": "3zM2RrTpWsYBmQeUXmWFAevAuuTitjXe5voEWSp83sibM6L3RaQEeQGASL4AAFwC7MiS3beXaB5cx5mrqSAFvzh7",
  "key4": "2CdRd9ZiickCA3ewaAZXJVAAjQApsazCgAW6rbrgmdVc43NMKS28LopNJTMY7ZnNTNbms4nnY5uWfZbnWt5izd4e",
  "key5": "3jKGJoTgz78guLnn94Si3FXjVfZYbma8kD3fPi1MDpC7v12EeH5RYf5gmyC8Xu85xPNKxNF3wX5Xs7TUwDtX3vFT",
  "key6": "37QP1YjKJ7PLBiWgPTnKsyDCSiBkDq5LLhonkvb92SboH9Jh2wmsUicqUfywVGKvT4NuwkhVcferWvuPffuMkagK",
  "key7": "4rkWLnYjZHH3BywhmAi8qg6xynd7gXTkb83HkgDv8bZdgSFDmWpsQUj7peHsp4PAN17eg8g7ohdSnvAwVNFD1Unu",
  "key8": "4K1366w7Q3hhgV1xNRoVQDzcdg5vJiLFyGqqZaaVPQYGonFsp4P1M4YVvgQQB41AMzRwVDQhGfuUu1XTeNdbXeqw",
  "key9": "5PGzgUDMduJhyziUNDLMjAgNJxPnnniteEH7L6QsqPVxHEHUzhLD5QM9iF163X5CJLbJJw6nmyLJxC74pBLQG3cD",
  "key10": "5sgueKXD6JJEA89mKJvHiE7EeUN9NY71FsGFpeCPUhBtUP8V5kHb4JhqGvxXN8AZTXSvAjE8fntgZvqehVjKGu8k",
  "key11": "2byrThYHkdzkfhUScsm39bAtuXd5LF2GsY9kN3va8Bhapw3DQTMTKW3pvxf61eva7RyLgvfzKuWHUjAj32DZzGt",
  "key12": "5gpvXdVqSVKKGc2U2PDmzt75BqBxTws1mTVtYy7MgbUyxBacuLw2fSgAFkZp7pedJJ74v1v3BnSzDrConGwq6Fuw",
  "key13": "2Q4rPTVPV72rGhNBYsM2C8qA7hjp1Ck2GiGoyJogjmhrR4Kf6cdyJiHd2emGcxtVpoo5Y3BVgNStQpPpSidEqDXT",
  "key14": "27oMJNxopykGyn8SgyuyPr7oXGfyA3bvV6wBVKVyRgUnUdivb2BxsMSYfmUNFgSDcjVnfbQCMiashGXSN8JiavyG",
  "key15": "2ddLECZ6jf23y1PfYPHFd1FEfvCh8sufawXCx77tGpRNGBqJdQBVCyBzLNvkkhFdqgqHuW6tPgTzw7HVxHgowkCN",
  "key16": "44y44nwJwFhBSb599SqBSSug6X9muXmVwGGmapH9WLvN4YredxuEUh6SJCyYU32XT9NRoCXdQ17wawetEbJwU2Kg",
  "key17": "2i9PnN7uQ9aYi9ZAkLXuRyzGme6GuJXWzyBzRZ6AnrUpfnzBrTh8y6Ge33AfSEE33YyLMCi61qGS1DpApMtMsXke",
  "key18": "5p1JZFPgiJwwQQSJTiuPvRf4bmyvPvCgQP4zD1urCFTAiWxpoT6zSzT6m92sxAtNf5fhM54iYis2PaQv9J8Ao1SU",
  "key19": "1FBkPRi5fmev1bVvNbcVDD7aNY1Pb5ZadhveMnNC61Hv2qvWpF85tH6SyqpDePcBoDuK1csdUVksnAQRaEbqkcD",
  "key20": "bvPaF8MEAWN6PPXCjFRPHcKDxfE5yMMdpuxAMtRRh8cy2sp6RsPkJ8D9pQM2mGqHBK16Lz5PEEgRHVNoEfYX8cw",
  "key21": "65RYqSLt6tboh8S7vbYRGw263DszHgbPQ3qtwZuUgcbffUKN4Fqi9oDDHFqp7jwN6eVnJZcKy1XkNtp6fqsjJV4Q",
  "key22": "3Lt8oRtWnHEapErvYEyJDW6xPTNHJsKtjkJmDwRmZDGmc4DUN3PjrNKHPXaUBeVN2g66TLmyGnDgCArSairSY4Uc",
  "key23": "3SiaZHcTtFa8QbDJFT8JF1rwHEaApDnJhcXWWuJPaykpfpD5g9Nk9pTAJJTk24npRE5vNYyrFsssiQE9DxeUj9vq",
  "key24": "24rXTWtU5coMzVG3uXzQ2ugxcsnJ6QrJUcBM3kpj1sUt6QaEBDsUBjPdiKJcDZbeEgR1W9Y4HN1K7NA359WwGoUp",
  "key25": "f4TX44zQueuaKjcMjpQpcnwuPXPKRc1ATRp4xBkzZ49Ep9E5GyqfYrcmkUaNcsJyBjhGYWgfaZKVvYFsqNmjyGf",
  "key26": "3JxfUarc1e15Ed7WGjjnCqecWjhV9mJcauDxwsbY2n71PbYEGqjio123S56fXPZeJAi84379s5xEwHzHfK2oii5g",
  "key27": "NFeoqeGhcpU9gxQEyK72iWVPVjELdE6edyoRDkAn7c2kMNAG8717ZX7wexxWy5cGjF32zK6Ef6JS8ew2C2YszpN",
  "key28": "5owg8iTqwDb5xZ23q3yqcp9Zr2hWmEtBsNJVdu844PmoZHVZcaWU3akSunyXLNMadQXsw9YqPitqdbYP9SteZxWG",
  "key29": "33V1XtU5xheB1U1Y3YVYtBcfkFJFmvNthyUrkWKniD8aAnT6SjDXmxrFzU7sa7Jv58kX6gkpMy7swAhjvnK8BiZK"
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
