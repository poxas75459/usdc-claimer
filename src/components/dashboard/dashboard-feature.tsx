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
    "2vDpV4b6wTKmB7D5pT9vDSU6zK9jUEmEnhq336tG8s6uZv51mh31Tc3rqMLpw5DtjR7B51GaqaFYkAVHNGncJtso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axP4BF7y7A3dyZEtFQc3KmRq8JkGNWdeanYnaMN12CNGs62vqgt9KQLS1tH9QjnxWqSxHsMDFEfmg8qMUp1jp4x",
  "key1": "2JBK38RG5yCvmAGFiK7HfrWJUZGQa43gUWBAPQwonMSN6aZVvHRGgt6V8MxBPWgthJUpyESZeStwh4wyrwEkDGAw",
  "key2": "5eKPEGiLzAGsUUGhZwn567Bm8pQvDADExFWs7PJFJLrWzcsB7YtqQYpgSTkyqQ5weBTCSjkzXrfKyJuNgFLa33aj",
  "key3": "wEMVYRxNqWqMuijTYm2BWzLy1aPX8r4Ep7t885aD2RM2dT4efysUxvNgiHFXvXsabiTdwwfXKEeyUGyqPdP438H",
  "key4": "2ifxoY8btp7DDLiNf5aLPzkFHwockSh6TgUDKiWCMc625pHKgPEznGArubvyDAts21csT1xpXcD7vL5vwkrELxTX",
  "key5": "DuqYdkCFtkdXYKvYKoiCJvbEHj1qrDo7UNa1L8kYXWRaewVmUwu7jNkGCuNnmqQmoBErNVuKsQd7rn8GAqsV8Ks",
  "key6": "255AoMwp3TyvdmZNRN4v1erowJ6Cm4yd68vuxdq5LpDFJyfJ7TcdAidr7EsUasfn5pe82RHChN5d8fZi7HFH7YfR",
  "key7": "4bcocYwnRZ31SB6VikLKe3whNcDUbuBM2grEfRM6EXcXTMAEvXdaDm3dnW9fgnve8Ur55AgyyYqrCZLXq1xnZDi8",
  "key8": "5zRJtG14Jrk4CJEH7wzUewKyc4vNLRMQktV2M2TbPab9mYmjqxC8kcJs8ysypFUwfk8b2Va6pJasNhXmL2uDucYu",
  "key9": "5TXmy7Pka4VqjoRZVv1K1pg5YfJAQnY1G2g5nNuK18nXxfYubJBEQ873UktUACk5S8ajQuw8eYFDTTyQYT7QYWAx",
  "key10": "51bmKfPZC8gif3gweWQGfupdhJa9nYMdQzYN1EFmfyyJefjw1TsUNDpFZnW3FBGqFp5wyd77PwMPtQrMFTMECvXr",
  "key11": "6qoNWPqMvbBBtb2QLnPVgrWRFzE35NmPZEBt26tf5TZrWYFAtJzRCo5aVXaWbosouq1RttTXUL4f3yJK7Cqt6yU",
  "key12": "5ReuiZXHgsBkiQ6aM7EN6QgCvze8vs1Azw9vMKvBh7wRbh1KVMPGCMes9WqPwFvTE3a11LRWJaGKWYPtUaTc8GJ5",
  "key13": "22BbhBNB5JJmZc4DAAvrLtQpbuRNArx5vjUW8diRYkNfAGXrELWLDMj6nNH9aW1vRvG7zojeDKshtMqbjQmEx1ek",
  "key14": "5P5hZcEtCY5naQmuXFc6Ma3qBVcL6wZTaLmoFgH5HoGvxjg32zwNqoemy3ibN31wCu8EK58K3w8k45ybotcaqnqi",
  "key15": "53QD13sW1ZYmyysd7B4iTsYgZRcG1Nkvxa9JMEFYv6zzqmQRB1VTssdx9EZoVtAogo8uZbqRjfoNM3rHfjwUPUtE",
  "key16": "5AxPyyCVRupQoXo9rj9rcRJeLAo7C8ZrLj4hzQxw9EE5qoJqpqBwBRk567RrctE9PEs8tfxMNKdxzYB26DxVDCwj",
  "key17": "1EdYsmRkZAwFTbo8xezYvZSKTf1LUsHHv41h2qN6x51PPsFmyyULyRpLQ1tytcG5phcJozXEDL7tZAECvj9StQf",
  "key18": "2bFhKeifXzQCbZqk3CrcLVHduWhWAzffQdMGNGQPbWRndycEkKoKYE1bDvvapCdL69oPY9u5KodkJk2FyJHSPM8T",
  "key19": "4Q8r5pSWo9ApXpC6pvK9z1DbB7XkGvW9FqcskaB3ZZNt4Apb7F6EZvcnHtjuqUKg7DjVKCrEVEggNeq17p4jpRjo",
  "key20": "28k2uFi7W9DM8jASgPQ7myGSMEzovLazngRe1WfNqwM1RaSmFF7AUnM8rWSPRZ6Vw42zqGNGENsRTzRKzjKGGSMm",
  "key21": "33fWKCUpWhDoiwH6Etv2djdBU7P1QjaSor4XFiXgS5oNAEm2zDQpG3Cc6zZPzbt89pBdvbxbw7KTg5GUYTjqQ2yw",
  "key22": "4Xey1AfiRGKgQpAg9J2B6aUvzuG443d1XsWcqxT4jPqfaqox4fVyBbL5pAQivq3gnxo6BeUoRGTr22EkAtgo2WDc",
  "key23": "4fAyaTVpmdDQBrsQ1M5UdnS6JCAfciu2e88J41X8TQzAXa5UuVpnqow5L5TcWTsgcP6B9PrmPCdHNx5YCdJf8fWi",
  "key24": "5EeD2bhWQ7y43yKiLesCpV5QcwT4oL5PmWg8PniUZoSjRiKe2jPxDfqw7oHAweX8oXkL2YjPVY7StuSwajWWhzXy",
  "key25": "5LSftS3EbXzzeRvVDcFTYiYzbfrJTZ68HbAwCHwucWVpwEiTvLVjkHXD82qchoRuEsdDb3ZpYqSAhwguxXQLjiLT",
  "key26": "2U7hzqKpr3Y7WWfbYFJAXh1FC36NngdYsGFTGg7hwC3qXvHT6sQ4neD153hYFEcnhEghgNVfBgbCyWYfgvq1HZfo",
  "key27": "swkKZ3LDLWjrhkrTiMviJPox46pBtRjPALuUZTT4pvvZPmrHRtWwYX8jA6fXo4Cq2P9P5oxY9ZtLiSxFbCVXYj2",
  "key28": "jG35LkFyBEWYHjMgVv3Btb4WSPAEYXeCWPrXofyqZV24AkMKmo1yqzetiae5xubm7UmS53E1jQ5E1dNv8pXguah",
  "key29": "HeSWBKSvgwRFAwkYMv3vRrG7jcp4QL2t32d3x95rJ8Fnp1nVLWiGD7YqmyVUFPfdSwX73bUUeLkx4ks1HwfUNzb",
  "key30": "2zYXniYCd72RWarrFvxBawzYCod8bYUDMXw2TXPMDAtMxBP47tM6PpbbJTkHy3sRTDEeicdMqWJmnV9mJST4UKzt",
  "key31": "5obPjcQnZhk9khGGnCaYTbbjRKF64aBzx6VqzfiJoT8S6fA6Fe6q852kuMN76DGY3m1MTAbJY3TVUobAVWPQCTst",
  "key32": "3tJBuJmNnmNqbJ2t9z2QQQj8BWZ2XyvS6JbgEBW4B2r1QiXy6AqfavKbdSqs96pA3F2etchiaUH6pCrofqTGEhtG",
  "key33": "5EKUcLP5qdavd95gjWzgsotg81xQUBqKDorLMAtDXdgszgYj74qTxrd8Ba9sXrEZBHTmvxjsCmZxfhSXPRqyzyKt",
  "key34": "HVW1B8ohpjNqnkQTC1GveFJyPgXWtX24gsbSuSNWHBsYmNg92Z9YSVaoY6JhhojAsKNKR2zJD2HnQDnWibJs7da",
  "key35": "j1LdKmkHwGSrzM8sULfZ5edtsD8NB9GuSCQibFjRPNma8MQL1EJYZoWZngkfRsXeQ1YbpmCqp3yAZRS8V3MbrpN",
  "key36": "3vMVxARcK8DZjmiSWLJT7rwVJw8zg7XZeMK4WuXwyUrDz2LnwSsDjgCveReXdRRNb9ENZDSDFDsCtFvgr7iuetpw",
  "key37": "462tJb3QeGWTAW7DVh9aS1ZKy1EgZA7wfjBsT8aFHQuZpKc381jW8UT72UeynVBdJ5FZDLFpUBLqNcuZEN2a6oiL",
  "key38": "4cBtPaBVSAdthpFP48hgQT7AiHkBMdwsh53b4f1sLpPXUYwLbLkqPMHhJ6r7h5cjgmEqsLorDNZkGe5LpX22ha1s",
  "key39": "9iMFqTGJp7e2RDZoyndutcEy18y1watMjZVHHZw63wDSvDNuM3g5VeVLNovnGBb8ESDMYuC8STTFr7DwrrfdBJB",
  "key40": "4C1kPFk3xpaxQmvNMrQ5WrTrK9SyRU5eZPQGQ7Sj2qo7dyoBJUMvrR8TteDpVoXvJQ6fQ1tdr25JUjgKnRUZSoYS",
  "key41": "3TrcJixciSHCa11dz1kSRTVzkJD5wGQH4iwTrkHFNmRHeQtGYfGUpRyB7oiHndeuLFPNog7Tqn3df6j1GSExpgGM",
  "key42": "3Yx4r5CvthsJC7jQdrbSfADUkZwKnjGoVEEF1gs1XvGtigEnNspYoxq99td6AbvfkHDPg1eazKjdawjB98NNLTFd",
  "key43": "2YQ21dHstJb2nMhDg56emMZCvqQMHYkMwU3JQnBzmAFehWtm46k3zah2RttNHfJ36fQ81TfVXtYTLtwQsPCLUhv4",
  "key44": "3epDwrv712sxhBb1B5f53ge1ppZBCejeL4p6TfsE2renCjCsd6S53EqTpp3P1vYsj6fvZem4JNkon8v2EMfmVZSe"
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
