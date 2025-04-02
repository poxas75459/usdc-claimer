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
    "2YohP1chpUyfr7M3eF8j9UNT2DjaaYJyqjQ5zpk1cZ3PPJkkvAwSr3puA8D4vzTqwjnCDPZG4QqwipCtTR5JkRom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVUfGRu9c2qmGuaHZvbhwcWbbQUwAn4YEtE36oZnaKHD4ZaU8WqSsPVByMfnUta1jSkndPyuYY9Jg9h8bkqw2VL",
  "key1": "5Gbag53Ak4SZCKpDC79b6Ttk8pHqR6EmnDQw9iVCXGjLneLHrDV3sMtsvKfiDj9SkrjxWRQXnrQ8C8jGG3A7zMD9",
  "key2": "5pvGPkCmRHaAAgxo1vVLiUruoPc1e4vDREGBWfXCtjheKpcMFTnMMhCL1YJKkQAM2hrBX7XtWQA2wShb3RkNwGSw",
  "key3": "42ULfUcLn8gc3pZoqE5SgcMez7AYG3QtX5wfCkK57ymrq7TR6MRkwFeNMBLA97QPU2wix2U9C1WvBvC437jBKdeB",
  "key4": "RWqaUeGDVnzXPSne717aojHwSA43Tmry1ciMHDn3SB9KcbB6zUnHMpLzHjkFbZzyh5zMh4XKWqPWEGei8ch2X7K",
  "key5": "5zVbyjG2CzCrfGnSQxMEQno1BZg7QBY8xBmG3KLUiK32sri42hCqQPnsZukr8mUssFvwJrMD3Fmi6NGhGVfA9RhZ",
  "key6": "2YbrpYEf6fVnXgxtbZP129oC9mjfyMynaNvYpX8oTrfWL8eFsXN1RRstBqLtoM98KC6VNhUfcEoGtbRQn9av6ss2",
  "key7": "wtHHEkQA6He6E2hAkrSukjSwHETDjEdnn7aet8CBtxdLKUpMAAxCvHAFNR2toUHLp3qFMCtbtwNiV1wQJ5NuKwr",
  "key8": "4frtvN1F6cCnLoygiY9SmbU8pqvotN1vLRLV3oTtRugDXyjcJhg9zZoGgm6MVM6QhYQFVjnpmhm6TpZKWggPqmyU",
  "key9": "399wpHNX8cZEtC97ar4fcTtpuQmEC1HE1PaBcYwbLTvQMJP89Yuxc8aVJMfaucYPvrSnHsJ3Fm5wwae5iD7QAaxc",
  "key10": "2QnVyrwTntaV2Hrq3kFZdKhx2DiQHm1uF8h9n3SbzEEpNhmNaseb2bw75ByXFBPiPBqguXGTmECzkAQUFzJbBzZw",
  "key11": "7yiypNLzoQNHvwEVJz45Nx6SUAnSfLureduigQwEB6UZUPs7fXLNv3EvDPDqV8GcfQTghjbeEX7dh7JnVWoru7E",
  "key12": "4XSTy4xigKJHHqJcQr2zEPwpUSjKFxxGkjhT1pd4xBqMW5nvyLg7BTE7cCnoTGtU81rXAnjerJcFLAtYrZVpMqyJ",
  "key13": "3RgjHaL2rW8n4sfqzAgnb7fLCSPZWWz18P6TC7GqYxdZTZNoUUemccB8Scsyzce3sSGNHergyxQwG7JahWryaD3u",
  "key14": "5y7aKDtFZTubUWcq3JxpvM521vxV4QJvbvTo8w7616BxVmpQR2RA185xtRHZQz3oBk5NzbfTNFc4mq9dzEEMZHgP",
  "key15": "31UEtMreyGaadcfkh6rdwzWFmjbQTArSX6JAtDkNkNEv5pEDfXF6YQZBr7QkGd4hQyZP3qBct6JVMP8WNwdo5zrq",
  "key16": "3HwGx7xDntXJ47Q8nC8LwUcUECFRNtCrWobe8Txvi49FwXbmoTyQE5wtAFoz4Wuke59TEDzp2TVTbC2GcGSBbnCT",
  "key17": "4rAcLAaHV7xyDj7zhQmUUPgThutTPpymvNjwqJDuPdiyAvTQqMeUUtHh2GoXY8bMbUBzBSUsMGHQNfjcUZLhXsDs",
  "key18": "5Mx8XmCYzShQkuvttGJLsnc1giUqscaPx1bff9TTGqd3GrWjEvSV4umjKrcr9UX29YA5JQfG6yXBoUxiFFab92D",
  "key19": "5778Rd48LkSrQMiGauA36vqQqQ63sktHPyDCAYkyh5jKhczfUigXC1bFfspVo8QEeCqBphtmR71EFkhcc9crup4E",
  "key20": "4UqvVtZ98RR94v3mtqNBVArefx51nVikEXFPVFNxSc3kpqCxSaQAvTRof5qX5qNqqp1Gmhfapf7q64kjvfSGqNfM",
  "key21": "2VgTTDZS6YP9GLw6eF7RnkqvKHKwsfymWwu7tPfEzRmWtfQKLrycnZPcCearnDCCBY6XT5GerjxsA8wqY9dpye3G",
  "key22": "5jEPBRKBhB2UeXQBTmqz5BRy1CHbCyYYUZxKk7FyEmaz4NGvFa1zYUBR9ecQt3cMf1fa1k9FRwc3wTd314vt9XJR",
  "key23": "gaUwftiu2GWrmVfxmoM13FSyHR8Yf73KY1W9TaLSu8ik7HakhfTznLrRXTD4E9euGnxVPRjECPZA9MrVB54jjz5",
  "key24": "5WuerTc499SbPqdNi5KHebb9J5hgCZJfEym8aebQTTP1UcjTauHSzQETt2FS5fL98Z2Cm7K1Mkx4DaM3bXqmNjmn",
  "key25": "2iHu1veemB25DvoJVEss2fR2zJUZHKQTH3wu6SWn2godMgBdJ2w7aWWHu4AtAxe3CqrHsYgb65TBAZ5MvQQ6x3Kk",
  "key26": "4g7M2UL2pTeDZw57ACg4dKGw54BGCuGT4AD4pCbe9hmVks6juAjhASfcVomydFuBG1bxMzr4CkkBDbgBVXLjZ5aJ",
  "key27": "2TUYUuWpW83f3p5KmXxT4NMcNKJbzubxzGhQP7AqH6oWUCf6Xiq1SsJxULWQRrd3o69zWKBzAdtyuHkhDxFdvoe4",
  "key28": "5Wtfe3jViAuAaJxXMW29dDPhut49cehjSCN4vNU4CsheUrZPnF5YHkT6QkB7VQGyChwkQQuCgpZT4ST2cQ8SwrYt",
  "key29": "5LX5yQphb4diiFnpQXKGS81SM4NFCRqr1s1b8Dd4B4Q5Zc2ozQkf1HTw5XirDjyv9oM3TfeVteEXdjCcW8ZX7uCF",
  "key30": "3ratNoFuuseWkWAdzkr3qJ4dUEpAEJ2n9keRCR4Rv19633bMDn2twyZoCE4uYDDYZYFK5Gh7dFoMMmokVUzzU2kJ",
  "key31": "54NkY5pq1tvc9eduQMtWFscNYpjs3AAwE1jrFSz714LhQ2SkriHEUN1pjR77cc45S49Rw81LWwv49HFLKpdPioop",
  "key32": "4h2wJYGiyU17wwk3yHFvRi3Q1iQ4m5XmqhZ3AKEkz8HBMU3X7y74iEbHT8GgwkDkAoBEahU4dp1dnYjyYq6rusPD",
  "key33": "4Cbk2L5FPDSLZV5Bb8eTdnod6PKXnbwqU1ReqZWWE4AHdV3MfSqSh45jmRQmPM82ja4GZnnmPH7iCyCkhxyC8ieE",
  "key34": "2oziWgXkQ8YRYQUnVZn9cmQSQrcBT6sqJMFVegFFmU7aGbWw8TSEMdPZi2VchVtZUt6vuKpxrMCHJbwShqVWNSoR",
  "key35": "dKweJrwhFt3PxYFYuinKw31HXsqV8qtURoX4ZQGShFYMKJ6LFnq9XmNQSUpwG7L8QkK8s3c6mnThbfcYiMo72fJ",
  "key36": "nfB7veKiXmRBfB4nJx6LchX2rgHCEFj4ucqYYmbHcY6qC33GR61KvCDGLRMRRx2jrEhC54vLEfetEywjBrPfe1J",
  "key37": "2dBTJhEmLfsqSDSDm9pfYmi8oejN5RYtRG7nsjbKmUkVWTBTCUEjmkSorWLvqMHMfMUBFj6AUCXNUVPs45mixrr7",
  "key38": "4dgW2pmQFSsR3c2LYv7AzvRzSLYN3TbnUQV2TC7v6aPFjjvEmgxYLsrwS3en8SrP1bGNry7FKPNEeRKqbB6pznAm"
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
