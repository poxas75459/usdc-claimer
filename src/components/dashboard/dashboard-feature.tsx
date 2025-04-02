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
    "4frZ9d9sSu4YgFKivrzY24nx98erax3PPB5rnZz5eqEuvRHyAo4KomckLunoUoBGLFyjic66nLXurDnVA4S9EKhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66WTqR4vQyhdQLWaU9H4Qyri7cp8xK6bySVCXsBJ6oYjYS6iPtmat1jPqGW2vy2ay1XJvYNY9mQczmhsyuXbPHxH",
  "key1": "2VAbTTKe9zLUKTi5Dy55KLYtoH9CyXA7eKskT6bLJRCQZ7P8pkhi56RJVEYnUWK9PePbGZFrW3rLzQUTWrps6rCu",
  "key2": "3nzNJacfHTXtR9deJibjgTzzdrQYirkPmLPf4raskMcdZJU9iL3pcjys2tUu1pmTio4VJixZQh8FGRipfXAT8ENs",
  "key3": "5wkqJPnbXCkc1qCWmLcVsdSWVovmTcgdAbLcvZ9z6U9GqZ3Xq8dDhyPN8VqVAWQPwPKtQGAbcFzKDoJ85fXgtdm6",
  "key4": "pSvx8uaWcbH5RmP5fszfgJVDEyympk8DPrGWf4z1UjrbrmYZS7FRpodJmHpPXD6b2Wfwqcw6a3WNv3NCaEJWmJf",
  "key5": "3QBiR82VCwu34TgyaXGEWkBtESNCno7fCAMKySq1v9Kd1iy5Gay87mM4JUzhiDMRftRtJ5ChjqVsBSuCH7JcVeZq",
  "key6": "2r63ZU67Ww8iD37dCANePDttSTD3FLuRsuMhmwfX311iSvi8FmnMeFKAcoGYMBZwhDcEQcAw2PsnhyELZXxeaXca",
  "key7": "64gidmzxqkfv5PVR6oL6qfJd7oRvjomMUhYig57Pxg3MRgLKGbMAEaN1ZR6nZWrH8Xxp8BQFVtRjNGdpbBqHqKCH",
  "key8": "4WtArTSWK5DCSaBAH9Zo1F79FtwW6DPiHeajhcHgS2w3SejvmTbZpZqtheq3rtvMf9gQ1MgTNAMiD69JyA7339Di",
  "key9": "Eh2PiGHbv4XLQWYDuF9LtrDnvUr35VZ7sj73MtBg5vteJZ48KpKSQF4oXB364imQ7vyNTg3wMdiBXyNEjgciUbG",
  "key10": "3zBFg5tbaU2Wze9u1ijKJEd3timzNhGPqsNCtZ9gG9Ng31sWjihjHtemqjeHKvCC3ateDRJA7XutNPwknspWmexi",
  "key11": "2Fw8hW8UqvdvTqqq9RDPatU2K7P6Xs34Gr3sgzZfPK1v1MQfLBdB5on9ezMtnhsGgnoTyFUq3JdZAy8CJmvnoSx8",
  "key12": "5UEsCxf6HH8XVhYAHrw3wYkjXKGYNgNgPfY8JctcDgsqkDFhzyjZiMR67xzdXXTJRfvbPpTh4DnjbkvgiJhCqsYL",
  "key13": "jERfLK34Bb2vAYv9TS1sRd97u6VgGozGnZ53boPZBbYTsc31xsxAUASZkP3mXBhfBRCAGZ6QJSYAjDULUWn96nF",
  "key14": "4Gn75VeAWUCJD5gPmnoq7nFeUdy4rHuJJYnUnUFqHh2sG9Gka1RCMoTK51aLHvF17N91dGFfpWsFpffEhCmhBoU",
  "key15": "32zTZBZFcYCMQFm6rfLEydty5YBmGmCUKCVSc6yn7SvYNGShV1vQMm519Rojee3zeqHRH8JptRYZsPYZDEMKWKp9",
  "key16": "312JofzeBNrQdkoD6nLrQa5RdFZ6e6LC83TNqY4vTbWAXgU4JzUok6husctUPr9CZC8g4NGCXDCfGQFsJWesmw1Q",
  "key17": "3DmkCtDbCL52i863gSxGEcFCeeWFA2rH64nNWus5qtLmS5ewjDzymzTzKzfEtqMqtQErdsnv6moamUSEhKLWHq99",
  "key18": "56rpACicsd3cEkGF64J5DsjQDg8MFMHehRBAh3WsRqrjRESUeBRPqvg1nPzSmb978TNV8XdMYxWnZ6Nax5h56SNM",
  "key19": "BBrPkyaA4GcTDE8Jxj7rpnoJnXL3SjALXm7ZfsSRt7eYpZ9fRDr8VwHmWAcNeEUAPTHJ3t5PDAfGEmUpCDoeZNr",
  "key20": "32QHXJqrfdWwgYXYX4CLdK6WFJ7Wf7iedSyzx24tY9YgPPtkwseFD6tHSAFw8Tkkkz548uRoCQ6cmajHe6RRYcYJ",
  "key21": "4J9ngHZr3jJWM3U5567m8m9GE2Fvf7LzcLcxJRXvCA7Kgre5cxwpcUPSw2aE3zkLkoABbFUsPRXhocBy7XhQCUpP",
  "key22": "2CfnXg4HWigVtuAzcyAucKvSkjUSUBsv2LkFnWkQAusAG8WgedSzRME6Ct227MGAgv4rvwBNUzv5ZhjcLL1yvVaf",
  "key23": "4PhPNoL21rchvctNVvF6ZQ31JSHm5GX1HZL9N9EJPHpi6oJ1YZAWV1DwG9ik1tQiqtdgBwH1hHbhwG65Q1nmYeqF",
  "key24": "4kXtXtgDfQu5pEwHYqvr1QtTGxZZsC5tfQW6hjmN2D43S1QX7Hdi3FsMuYr5EkGAuuiqayLbcmU8jeR4cfpU5rxA",
  "key25": "4vWZzM4XbeGjaNQbVBhWx5yB1WaSraptyxY1bSS7J3jbT2P81bMWSxKM9MdQcjSShCnPmB545oZ8bQ2tMijqdQkU",
  "key26": "3sby9upk7AXayeoGwRLGag47GHdDiCmzgL4hsJNGxvgmkGYp5TAD7UrhmbBqm839xT38sKxVNuk8S9Fme5dKh38S",
  "key27": "63Xf9xgzTkRVYu5KKbSY8tGd4HPbmkfCbzF3W4pSy3ZP2mR5hsaFPXJt8VJ2jnMXiTdmxXmNchPb5UWBcQJho11g"
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
