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
    "2QMqS7U8SBGqrdG9rbTTc8YTtyC2mKPdPs3Xxs9aaJiuMYKtBn4mYyrXtG8jmsYgWaHmTo9UGJHPmehGLYGu4rCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykdAiBadiZ4yXt77GnVu4YuGjU1asJeGRZX46WNg946N2BBgpF1pbBGA3vQwiKxvy8kJu9iXEVfgB3a88CgMeQF",
  "key1": "2xNoHidU1RFvEwuDtA8nqxtdD1XF2RwfHgB7MyQ5o7i5xwwenJj5EZxdRpidPhQx4zEraeF4tM8QamhS5n77pmux",
  "key2": "3xYaWwNt25FE2Dovpu5vZo8U2yJUMJzA4UJo8gu9jDjhRsDaQJ7KVpX4AhCAP35DHmZPkjjHh251zV3u3yqNDp7c",
  "key3": "3EpFB2Nz3MfHKXk1rBRWqqaEotxVvcVUVLag7K4Wt45H9RExBYM6EH3fKM9DUpzmdvSLMCp6qfj2znZZ5aZreuTr",
  "key4": "2MCTK9DvJuFVusBj7x4qTyERkDkDirfkMaHM3bvoEBJ4sTcQkKcYmKUqrH3MCPrs4oNwC6Ja2ZSf4L1E8FiSwawR",
  "key5": "59qJzd9BhrvuWPq1Fk9s6m8GbiTzRs44X9waRwuZ9sCb7XzPLt4yKqDjMnvwb7wr4xX6Eznrcvx8dKEtiUXk6RL8",
  "key6": "3FhvKtS5p2nwxHvWzYDC8mt17T2VeLgrE4pQ7vn7YFY4drkTKNM5uUvoKf43sEimSv16w4osVGQVHiD2Ww4E5EJT",
  "key7": "3Gc9JC5Sj5a7VVD9t8F2wj3Lpt4FwDUWh9LPaLXWjW56QaCGmWdrJ1JHMVqrEYWWy7pGy73W4bY6GkJFSjcndtzc",
  "key8": "4xQFXSQk4tXJjLWsxp7Quay8MHMjKRspdnD6CVBTSxsCAXH8oK4PJsTwQne97t3nVdHYXEZCsaR9fCyX9nzbU28F",
  "key9": "2cL6EQ4m7er3dnf6U2BgU37bhv9rgW1JR3DET5ND12NVqSqJx5wrB3kN2GMBo37iJxAz4hiEpBV1bjuZ2h3T5dD7",
  "key10": "3qKvvdVMzLTixezYxdv932Y93UA9KWwQLsUHpZanRSkGYYW4d7dnztNvBQyqUWLXvxSBGxcWPgDtU7qy4SA26733",
  "key11": "21sePSRraDhjiju29EbJskFiSyALAg4gunj4GnCCjQwT29C59QAHvq9Cv5G8JMuuydKQvGuiQF1WykDgghXE9utj",
  "key12": "2En8vhepc4Ca4azJs5apZ5w11LUYjRuGgQHqeDEQBXNRCPGhLne6GPqrLWE1dg1Z6mK4zwEY6V3PCie9tbJP8NoW",
  "key13": "neSymAZPH6E9KrTEqpvHurEf7X8eBVPWpbFBToc3N95Q25U6ixP2eG53Lee8YrrQwqZQSUHTcZEwkxsN6EPp2AS",
  "key14": "4sPR4WVoohfKgAamGJUY4FuAtFTvMV8zKZ4pfR2NLcMPPDye8BDzLS3XKpPsujkMmQ6LRuTwUmJVLWAMhatRJtWR",
  "key15": "2869BR3Z6ScAt67xaHFSxP4ewLov7pwbRQpoRNxisG52MHvC9qHKqKNkBaYjvn3PKw2Xo8dodQCFEk71A1M821pd",
  "key16": "5E4S1dK5hrKXEpTrjVRvwFJwozri6yvedX9nYQ63KBLrMwTcU5oNahdmLJZLGwFTnCLSwLE45LychYWbSttuJDBa",
  "key17": "afWkAtQTPYEGecf9puprRMbQDmy6p2hv5BQuAuLnCvEY9FgDjZeKMtHPx4DPswYZ9Z1GcR5uKjPBxJexEXHer3C",
  "key18": "4hvym3XVC9uMSvve7LaPH9gyYyaVUQkJ1CTs3JZT2rUz7kXiSQhEZRd3h9CjYDFPEqrs69NqdT1A6bcbbEHhURmF",
  "key19": "3bmQ622tegseez2tvB1ZVF5hJ4p924bqKA4u7YBxxWesNXN9rQz68iSpy4fo56MAQ2Ho1qCcR9JMrqeEWkcza6Z1",
  "key20": "2XbCd3Xy7Sne1zto39zuLf91LjqZVoDbCrAzt6xYMMrW6v6o8T4nUwtQqkVvjkZ5z22mWtjWTRPXqsGuiTBsZjWa",
  "key21": "3tuica1KavfwVaQcMXoc3A2qqKYhu28U9JBJNJJNs9siDvLfe2x4WA8uxg2gUNRTLVXC5J8anZNw6rTJYJL7Ldbz",
  "key22": "3mV2HZJKVbtXSDdz3X56z9uXqCLToRZnQMTvisiWLESC9fjxw4GX4jZtL862g64MLZwSZ8KeuZVQeeWm7Thaap4G",
  "key23": "5TkQHP9wbdVutg5LUHs8oyc4urFnreLT4AHHzh3JqqET5DtGdZ7efatCFwghmzkNcNKyAF7Dfwb4UkvF8Np7ebLS",
  "key24": "4arQaCaBPLiCiYRzdhQqrBgvV3BUHH2EizYyosC2XgDZMa6RZdX3UibzLbDkWNHk9N51cHxyTbwDz3CyNcSGvKpj",
  "key25": "4L3kTM8Rgmi7BihNaEPct5Jwgt8MwmRBRwuRUwWp2Z6DF28oENMx92AHKaAZZvoMnaSXfVnQF4PzdyK373UUKhck",
  "key26": "39qAntAWttM79e2p2y66VKR9id472UnP81eK626kWHaKZbFJQSz3HUvRosZgyGkotTDRjE9yNueUaqJL5PyC1WFR",
  "key27": "3Yra8dTVsviV54ZL9xVCneJzjrpydAYe34r27gKuZTdbj38F3wt8kEytYJBVxkWXLU8r8tnvZKZm5dMzSFo66Q4H",
  "key28": "2s3RyLzWZd3UNgmnqMPLfGiLTBu2yHm6L62q6n2Pnizfxp6pgVTejQdyqbKMxwkfJNJDBeStjY77doQJ87mBnDum",
  "key29": "2MnUkToCZyC5REacCdFBWuTR5S5HCPxGWConwhqX9w35H4n7zb9SvSgCw12MKKo2RaNV6uw86wHiew6s21ptyckq",
  "key30": "3aj6Kc1ZfcZ7fmqum5zrZP3idmSM8W2wrTLCFVSjmrbLxMWWPxGDx4XupYuQUqps6d3fLpFPtxS3j4wTopauYJZM",
  "key31": "54UWymvFD9xiiDC3SQ3Nojw2fQuzQX6J8xm3furBoYyXWCDbxAtXEuirVKeD4wJrrRXKzGS4aFc1SBdmLnvK9Vfp",
  "key32": "2rC7SjdHqaWRLDJR7rdGRtuFaa2tPRfjXbAmYJhhye2CNUUsiATZtUUxej1gJBebhho1Bib6v3KcKNXt2ixPQPM5",
  "key33": "5WXnEEdsPtvERds2CHDjJUc2ZmH7MA9wUEUnZw3MM5cTXdN6fAEbYrZzZFxjB2owCbc7Q2mmpz1PVw6f62HkoXqk",
  "key34": "5zkNYCntfyGeccCj6dXVGW6BuQEvDyY3ibA9C2JYtPQArXjaqzuumTns9hcY9Xa6AJEs4eU5QsjTxDcNiFC1jKke",
  "key35": "2TJZ9zxzKPixDLWXMCSZ32mkvvX7eGHcjwf5pHkR3QGg4JmikoAcDwbP8JWBhF9S6W7HZhA8FKL7BCq72SMX8UBF",
  "key36": "z11UQvCuVFygzecXcmFxHE6ktqkWTQuBWneXh4so1MPtwW4RiXYzTdDqFb25Rr23XuPgFaFR6B4kMVirDdT7jBd",
  "key37": "24gW8NvG6uvKHd7r4Jvn5KsxjSsmSei653swZaC8m9VyrCnKJnoymXFG9HrxmZNh4yD7bTX4ndATqfhpMX3r72s6",
  "key38": "4Y7UdHKk5SbGmjKQtq4bCLHU9sPKBPrF9Ln3gZRQjKy9z7eU7H62RFxB6C21ULb4BruVka2DrgfYyoRTna7uEF5g",
  "key39": "245CRj8D9srWf4Rkgi8V59JM8NuVy7vhkTfQps7x6AjK9vcrG59hdUoShrfvfM8JK1dwjLU5MchyZW6x3Chthnrc",
  "key40": "4C6mR5gMCuFWXGcqiKv8iiQr1n94bYJVrypsPsoJaULrd5VLKzQyCuUpNAPqyxJoLHRDeSVEHQrTbaPLgmE1hCCV"
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
