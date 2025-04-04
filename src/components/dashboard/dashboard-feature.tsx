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
    "57y9PzXa4J7u1wcvfUxHsnjmSuVMsan3nSoF1iuHeCRrYWYvMPkQHMPHyE8JsQP9DycNf3U1vy3pb5XksuvHnjWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m6Sq1uP76BbudPmJtvc5tWwsSXa8Lg6W2a1iKkD7JXpczCGRBLz8j4JGQEMJJgq51fmm129mJWxrEWH6ScScCCU",
  "key1": "3iB7NrDSnNvW3HnHJpifjdGshKB9kR86vjAYb28CziEzyq8u7gb6K4goGcGW554DyBGFWXFLFZVf1NAuZpr8SWDs",
  "key2": "61rAtYEkssYWkRjfYzf66ZStRTxNvouaojYyTnqgPX5U3NPYPxVUwvFDa8yT8shYfyp6cYaKJ7nAVRn718F7jUMZ",
  "key3": "3PWUD2rwordVRaaaj2mA6MS4SLYWj7VQjtUmXy4dmnDdxe4ZychxQaDzxWVg5QKbBZRREN5fbPyBhVVB6TPhMSpC",
  "key4": "4Wukwp6XFpoMybN7XSgY3CCBy3b4gacqNNBmWQcs5dFtEGHYCgDZPR1c9oyL8VFiLR33Xq7cUaQKV4zjqCHwBDis",
  "key5": "56av5c5u645HUCrT8VXmTPPHNdVJRAY8BmkB76Y5B5Fjqf1it8jfaK11AJVaxx94J2p71X339mYReERi73kXyVBT",
  "key6": "4DQ5GDWsjYVRLBYQ8biotY3c2qBTUeYjMzLwKMj9ShfVYYmXrBNjvn6kbgAE6WnyC3YLmzv7bwcxKJvo44yaNt1",
  "key7": "59ym5z3RgXXyuhcMmE4v3saVdNvn5fhspG6CgrmE1GarT6gJWvLDUmqUZ9XzkbAWJs62W4TA5NfKmZTtad9Er8B4",
  "key8": "3i1jAADhN1Y7hmEjiA72qA3ib9fPDVjNQ1FpeRVtTHjsv7TYzGa3HrenSSRQGe6TGVYE3QNdAvy8WwzvgZDj7yo5",
  "key9": "5iUCh1BVxRDu1fPKC8NRzGCnMc4Yh8n3r35FBmZbUzFK8DTRPTTP9ueDDpPkURECwVYmoRduuzDPg9BpYSfZ3LJz",
  "key10": "4w19EcXLREauB1Z3zPtcY2Nuha29NGGrkYmDb9EUtJrBfo446rU5dvRnXubSwaBa85jLecXbRLDW4PtkuiWxT3go",
  "key11": "4AvCMtkaUjvUDNfuRUqEN1EC7sDeiTat8M8LRUGCVp2MG8dE4Lvm7GcNwehBoqrZdJkqJ18bGjnuy7x6okS3Pgze",
  "key12": "2pbqoESeiWqozxsuch21tJuXKA8yMg6qmoGJFP2JvTZBaXHcbRN2LiuL9XnxtPLw3fcv2A7nUtZTZhtdPHZ4itwr",
  "key13": "29N8wCTzFDU2KR1RNKBF9ifZhNBuSBEyE2AgS2XgGiejXmRcF6xrV83ef25pJ1VhuXUYZou1NqqwnwJcWXmvZqsu",
  "key14": "4X8JJBDwxBVokaY8LoZrSEeam5RZW43SwFAL2oNbKdL6W5vG9wK3Xky1ZYsmr87ebu7ZE6VrCktr4Ct1XvVNKZJs",
  "key15": "4DWf79sZ7M6AFpJSBCfo9WK7QKLnz4QpWzcuuYLVsdgEn8c61rBKg1y5S5hkh1AS2xuwAvyBVPc5LECLMbkvA1bC",
  "key16": "wrbBbELDbveg8Krorkzxm96L3UJxnG4uiLNtdjVikvv5oGh67vALktQHVHJ6Cny8pCrMAm4ecmMA86B4Vccagz9",
  "key17": "2sqaaivTraHtGFCn3uHCjWJNeL2ZjdqyEfbaYWTySX9ENx8k91SXy9fdJ9sgWLm1Nr2Xh1g4BDKttfuTMSgHq2sw",
  "key18": "3KEum7aZ3ADNHwM8NyDUdvdmnRumgZate6uXuRb8HbX4N6bzHjZDjXNpc2mouZi9XDBqN6eAAkzVye2gc2wMcneo",
  "key19": "JBwaa8qfv8M8Ch9DgMJvALtqX7AcAkSjEJqgHRMg3KnprSrqLF4xiefW5AmQ3YPPVRiX6xigDSkzXxREDiaWgiR",
  "key20": "56ZohdjtXTmZLBwfwuizZuiaar6S3rrimztPY4VXoyUSENQdWZyv5AvFvMK3sbHjbDryuJL4XejhWzQKDTC1hdNP",
  "key21": "5hbcE4Zvfq69GtMuJqewYVX8PgkYHE4yZH3JqtRRmsShbziLr9HnWnqiHdHZSxbDwJKP3mmjx8RJNgfqPPZF2L6Z",
  "key22": "3nnh5Xb2cxCGv8ijm1TRK7ZGtZBbqVkn5KgpWcTe1Bw4sxjz5L2Vcxh8acZtpDhx2xdvP4WegTXdWK7hbChp1hEC",
  "key23": "4d1fNiwX1cJRqg9MLe5Wv5Sgp3gV2TReGhvyvez6Qg5j1ZFG2mWPqHQTeVCKH9G4aqwrnZjMYyjk7s3tu4N252mG",
  "key24": "d1XtNmWpq7aeGydjo35sedgdQpJGzQCZNFDhqBeyS7DvLZsRWScVK6xwKQgpTAiaxADZ4MD4bkHebafVoarpQR5",
  "key25": "5g4ResuU7KzKsp8WZ5PDM5bgwbEi1Xhp8DQNNA2sAk7JdBGmJvuLpDtV12c7CGdkmpMiTqsGSeP3DeCZ6aBNdrGy",
  "key26": "4WXyJR8UMs5qmnR8FVisCvQRfLbwgngGC3u7QuCoRsNbEo62be4RtbdnppVxYR5261SkAvZK81JwdZxTic6arDmZ",
  "key27": "5wtGcfnTEpcZrvJHXiQ5mt1r3btfV5YngKbZZmz4LC8ZwnXSNFFEjioCkUA1KPdTf3ZYniUjtWveDiXcU7PDpY1J",
  "key28": "3q1LzFqEhqJQxsDkLEAV2yoAz2cuzSCUDK6rUPwqZm7EMi2BDbGFKrdz2VbA3qCv43s3CDmkmKtT1MY4BLGzDktn",
  "key29": "3AnGAdHU8cSBEVaFDDDKBRomqZxqikh5UEXsszg9hWXMejQmdQ5fHYow7U5WzfGEkQT2CEcFdZhBp8NcYG3BPCpv",
  "key30": "3WaH48Mm5aLDRaK4Les4XiVfAoFndvfru4D3WmbxQyx3fHQzvygB9iVRSXW2haRS2w7CXm9A2EmfZnc2roqveUdS",
  "key31": "tvbgmVhc4eXDvHZYuDJPvJJuV2eNLqvpN3KYiBRnFKnwysJQFFvkurFgNrx6kmcRdGnMAEthfiLwEvYq4TcxFJ2",
  "key32": "2s37Lc5xW7RCBRcZ9YAMr3vwAEs7gzGrnmDz4DKcXEFmQvtaU1JXbLS6XJ8qzMLynrjti7BNEHsDY2gzyFGn8Tig",
  "key33": "4aYwQWfCbvvgEiWzdJu1YPE33XrQmSEAv2m6ser5mxvAmPG8qhRPrX2CvwCgvXfPFcS3c5zP72RrZ7wj4gscZn7R",
  "key34": "5WLeevCenwvWAFWR7yQrRwDCDJ5TgxxKS4jhauXdxqBGdEbeG3Ybt1BWgPJNTjMXrKTCd1yXE2VdwQJ1QaFTJ2PK",
  "key35": "RgAEFnFSpPtxUQWPtE884gGuB5d28GwNncF9meLkSpTcguE1PLZ2soScBqjC25ijReZ2dKqREJpFtRLbfGSgHgD",
  "key36": "5cGb1cSkp9vLZkjg6ir6TKoBpXJCjWRzn99fCyv76caFhWrFSyzCXVdfmUM6neRQYW7gEZNsUwfNdKRUc5bdJrqw",
  "key37": "2veSSd7PkvP7WD1ANgngSkv7ChLMye8AVb3mFAQLCuJgurFkfCZZGvLiHRP2yhqGUsjG7a7ghbjaTzGBTbd6UtBd",
  "key38": "3KgpcdqMs3R9DDTykCBNX6AV7DmmuyWTALcfg4qCzzj7rrQCT7gdk82V9ZwkSK8j1RBsUP9QMBj6eLPGSLQ3Z3se",
  "key39": "Re8QG4FyA1D5qShyFko4x5SvWe13w1svA2NY2PBQeiMsMjacCcPpJu4FpdhMqVV9soFZ1AroLfoLdH89fQc27qn",
  "key40": "Aw1G8bgMyhSt3BbHh2oRNL4XLfn5Zf7qzowEnDAJnSLCC2sAso1Ep7uHWBHPi5mt6jKV332dt8VDUJSp8UNn6Jh",
  "key41": "4cC3kACvrgRcosa1gRrVMgtBVjvVvUMLt8N8NWZw1z9vMhPc53ku8222m1EUbAUaCYETMjx2wLL25WDJqAd2tvGL"
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
