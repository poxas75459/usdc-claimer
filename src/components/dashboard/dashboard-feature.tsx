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
    "wX1GQuFhs4wBwPvr2sqjqugJT9dfupyCP5ey9TzHC13S6bsJVVJS5bAqxvJZ8qMtbJEjFjCi5p4MHLi6AxuFxRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idjjgwJS5Tx4RQSsiucB2gSEEDGLvrXvfAybBJEVS3h9C9ynx1Jg8C5Qs4oTAUsD5dNdX8tjFpUzRCq9WcQVoSf",
  "key1": "27SuCMwJrkZe6bKgCwzzwHeuMuikcMuamFxmRCvrzZxKYBuBLBh7faHryNeD2EDLKo855LfFCYLuNNWhFDpjhXsP",
  "key2": "kx5hBrSnAAPqb1bSm4Yjtx6HFY1yhXSLNNjuGvRnCHo6cVf1XsNfzZDJ4jx9ioJ1G6ezmjiDGws5rriUYG8p1j9",
  "key3": "3nFc3m29uuQs5ceZRGp5SNajWoBS932DDZyUd4mVR3eSMR3TZAURnj4CgDs9c4Ut9hsyuRD8SNArbHPJXurWMW7C",
  "key4": "2C6tutJSSctk4N7nXJdPtZUfpHaBonYAWg5q3sx2CmkeUFXUNvVQ8p86UsUEjupJ9aBgwRxzqGXbEkfRixEqdHii",
  "key5": "5us2RTiqNNnv1ggcZUGhcEsHY6qTosmG4YhS6HnH82Ehrerq7RSCeeGi4EQKrNhzzW2BsxugsAxg7Es2sJX42gWW",
  "key6": "1s3wsArC26LF1EboiXAjovHsakCiD7y4VFhEbz41BJhuxGkg1hfiUvgvZDuLnghCsHUntNr6KRZd2L4XtFjX9QX",
  "key7": "5KhrRDeSJGHQWQy9ppRYZkyHpk8krBLKtJSUbRsZ71B64xTRuXxXUbQ8yw2psbiT8mRxCBS1jWmAo2rE6LMzVbTX",
  "key8": "EwABizWksKMxQLmHUE3DdE3aoDoM725czw3xqYMZvTEPbNLKP2wS5zgx5wDCjWmz6V5WK4g15ajYyXo4EskjRiW",
  "key9": "4BZmbkmxSAgTwZHXd4chiH7ah29Kb7VDz9L4N7FEuVovrvMVE8sMofH6jon52pBP2z15z5uTCL83rZWvqtW2LHTf",
  "key10": "cQiiA63XhyBQMAGh8E4DmNSncHuat6x4EG8M2PjEyJstRBib4ZksHpzc5ewcXdBJQkNcehwgfQqutW1pQdS13K5",
  "key11": "3zNPcdQnwFKxnUURgmc11GZbde9XFXnKyXTEoFa39bJbN6jagAzLpKY1e7sk1KUGzDmapFcLfWzFiZfV3q4GFWW4",
  "key12": "4xcKJkVYJmRHQjB3UxDpsJzM8cRq1PX1pBLmxaWrqvmSKfnWTBoApdFsLSJ7KyBKe84N3vjterhWVUiZk57Shh8p",
  "key13": "2jbQkKqiRJDHZYYiRC7XK7ugtg8TptTZmLwXKB5oWi4H42UrxhVZatPMkDQCS2YisTn2ohbFZNzHhBZQU5ZudfMw",
  "key14": "4eV9bi6gAiosNphfnfGSLcBhM8Pj5u6gZ2bKmZ7irC1bWnW79yoPsQYQ72vXpFQzddnSqcpQu7NnVDgq3PfPcURM",
  "key15": "o9SBTDbMsJzyALNPAtXPawDN59ebTj7y8rNhXE8k8Z8P4NTQcMzqNiTajd8BUzPr4P67dzyayB3zgkRyJ943TWB",
  "key16": "5MwkemytNMyWock7RohX8FrZxLV56NKzLC8QMxnkkFyVjSKyZZNxJLmkAKaBTshVBMBGMqmFqCBrUgYBA6hJ6EiC",
  "key17": "4McoWnnmnMGuApxDXm4YEvi7KMviwoMSWHWhbepEseT4yVLRBiNdf98Y5gSq6ow9aZTN6PdgbvcSPN1KJAGf7K7Q",
  "key18": "2PGbicCPd1uLn8Bbj9o23F3L988AVujXb3f1XoqmeFDcfBK9MhNMPdPyUcpZ6Tg1qQAdocDJM3esdaDppHpD1MpM",
  "key19": "2WWKdAST5UcddPrJQDTxUrLyUGhG5oru4zvtvy8WPZeajkTaQ9Cz7qynu9daZZfu3FRNuuF3AgXVeUpnG3PwjooL",
  "key20": "5eQ6hUShx6UPA8EehZjqKYEHQi65hWDwsVBvWyMS2SbD17PHtpS14NuYjn7CrP6HSS2A6jFjuCkj4jmH61jheK3k",
  "key21": "2n59gP4Qpkyp1V6JzCirA6xiScZo62AfuMwoytmkJiaUSgZDiHJ5WfeAJCnmSJFLbjBcybL5BKd4Ji5Q6bXJzaRh",
  "key22": "2FhycPU4rPUxnute4KaLQU35Enp48BPDnfvoTUieZavvbczELwZJaYhgGMRmASb2umN63rP7w8ThfavQwXEiWSaS",
  "key23": "5uDaV6Xrsm1i19yW6iTRUKf1HxKKZm6buckbGAvRaQYaAPmkAPAxjrDefMa7UyzvanaybPjmSF9BdHac8a4B9xow",
  "key24": "3D2Q5JMwYvHmkgBndDRRBbxBihqwiMvkkMk8FcomL95Ef83PdYS111EsbRh6539rAw38mYu7tZj9f3sZrDQjLCBm",
  "key25": "5qXRCC2BSMLqAWwm1RoPnDHqodJMsuuB3jKs74x8QcEY6VogxqCthSgC1FnRUhNCtBiKZQj5WopUTnZKrHv73MUX",
  "key26": "nfHhduF9G5sFyoQY5SBS7vKfz9yi4L2jdT1QP6WjQuUQRLZszJKTy1wrV1j4boUBK1LxHxATqhoft6wb6ywC7rC",
  "key27": "2zVjfApTA3zbyecK43WpAayBKrUVCnucoM73svzrke5mykbarYmsVQqfB9ePhhtdJhQdTSqzKbUh6aeAVTKfowB7"
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
