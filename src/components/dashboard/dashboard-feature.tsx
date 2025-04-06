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
    "3FpcwcpZADToH3ZGu2NHuB6qFNFWfa4vrz22KkVFbn3x6Z36mYxkdhojDs4KZh7H9jGYpFnv4aEigEjb297LY1Jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMFBD1jzz7rRx5uxaU9MmzErsJqsspedPFh6p1PJum5FxQZEh7Pc35vMhE61fXxcC5w6WeBkWzbkBGVddUgzwvD",
  "key1": "5TT6kPsJ5JxV119FPX8ouDPFL6cv3Xh4xZsxUyGtiqmD5zGeZbBzviovzENag3rXSPQVTRZ3uwgmSqw3vNXZfX6m",
  "key2": "2FQAR1HqD13YAft3LFNdDQnCX4nTwFQdhqb3brsLctmBiiwXEQtf2QMHqRnYbi9HdyfVhvMan3aGp3Tvg9ceBdLc",
  "key3": "5SdikA7KeVzXdaAkLhvthn98uRJTWwGZcx6sa9SntS22hrjJz4UHA9raE4Q7bqSiDJUeamXcEtUwuRGrVY2Qqv64",
  "key4": "2UcPpQfsxsjh7jud4VtCtNj3udth9KoM3KmUd91Q2s7AbHC9hjEDTQg4oTiaUGyiULX6nbPyRVbZrugrwDYjqzDq",
  "key5": "y2oxCucuvrZPtcdzLgrYw1YfUfEn76pmDQ2GcPCzbzVAwQPAWqAS7xShmXmhztqiCKnsBPDbk1mdauSsJ3uzXUx",
  "key6": "54VBCNPeGb9sUxSPQ188pbsmDtopxAF9zyehBfWFNZRScbNh1kss8cyjKE9X6UHQWMx9y2RnAEFf2E9oCbRdinTv",
  "key7": "2N3d88EooxbFSMi8mRdqZEvzMY9QFskEQz4zcA3LzGh4LesB3N8r8ktxWgLkjxdHNsNrePa6uaWCKaTo9g9WCo42",
  "key8": "9nmwJMPh6ZZ8PHBdiuh62tLwsXNx14cNQmUuqqCt7b6keompvoGpyjYhTYkFpVG3Qdh7QTeqJbnPde7aLBoZwpR",
  "key9": "3Kz61fLRqtWhCDpFTx6kPhHQmfZzg5C8GtWSXj4GXfaNauSpQxiMJCaQZgCGx2h6eoVzPbwq8ZZQNuWYzZbsqEXF",
  "key10": "vRMnDJAsGdj1TxpMZxj38YPgYGTZYMATYVGrsximsRp99FbAcUvogJi6uig2Zf7BFgXLncHhrdL26VX4jgP97ZP",
  "key11": "3Atki5kZcywAU7rzbsefwhwTfiPBwpKQJUVds2DRp2ZyaTTwyRaz8bGddqv86LwUM6BVRygYYMDCGnyR6eApm4rm",
  "key12": "4PH5xaQR6Yyioub2YkBAQPhiG9WjTYahipJP4qYW4cgLp1qoexQy6SwMyNhv1CiXFmDcWmfr4iZHk14fTXBeB64h",
  "key13": "4gQvTg1KXnin8Z9Ct8xqdq9VHG3Gu5FQab4pnSEDWbP2gRrkaHfHDzSXwBdeaDWNu75VmjKUEAyhDbvoj6NW7ShA",
  "key14": "4oHCw8ttDfgpJknMou4vucv8cQ8fC9YGQBDvoQRsr2L7UdXJDeDkUMa61zVNBsCgnfsCxK4voiDrmNgZiMTH4nTG",
  "key15": "45fBzRedxynPznjBx8TJnF1QVwvx9HPuxTjqzqfSwHcm62T6oyBcFfDUh5ypWJqnsYXQYDg4sLswKypZy8bbow2s",
  "key16": "3iehonuBT5V48K3htmuWFudkwLgzrEZM443HcKSYAN9aUi9E5HzyFfku2Nki4TcjbyhSwBsBLZD6E39DECqxYPeE",
  "key17": "2hLvNu4a8tFYbNMHZowR7jVf13NCbXgCsq8qdojRe247zJNwY35buRLyj1nGAudvAJu4XkmRAQGpWyzwvvetmEoK",
  "key18": "4t79YHyuD17BBQZsz6WNQ1wAnJhvxgyJ8zeEvybnK9CKayYwCoNCPnwU3QwghAkLjHVheuh7GjT12AW8RguVoTSh",
  "key19": "3xzBLhe4e53hxwffZSixmndFeejF8ana2gvkdpfVmEeMqF8CYW6azgGTkU7fT5s4yHwSVGbGszgzay74cRjae3td",
  "key20": "2bBLgEsBWq8fRPCkSThwczVb5A72uukxmLerXRsY6Dhact1KoLaUnLKXghTETYYPpdLHunQ18J9o3zzdEaoG8ysb",
  "key21": "5ANDUdkg1nDiWfoSV8PVN6PznMvp3w4TYwaCoLjZkQho8J2XS5FVxeErjqLvsm9uYdEpGS6CC52scTnVQR4EiNdu",
  "key22": "53huFKWU1HgotRL1cnVkqRvzRpMKqu9XfryAGodNMbvHa32A9jSmVrD9iH8ZvMf7CBS2AACLYLwRngdPUwB91Eq1",
  "key23": "4gkasVSR9hjfb1pMeC2t3YVijfeyACyPQJVfQ1N5u6AB9asE5ZjYS72FGCfm1vH9BLxzEwaybHDRyRGJ2A5C7Q33",
  "key24": "mM3pj2DMDv7SDcwi3YqdbdPZBEuwDbvzTW4KLfyb4p1Y8kEZUuQx948seNUttapJe4AnxYBYvWzUiLf1LMibYTp",
  "key25": "2bLQL462wt86d36GLZdJQUJG7pTJPN7GaNUTbFypcvttftPwL1RSuBxkyZQ5uRixWLdTT9uq3gisJnjtQohMoH9C",
  "key26": "22R49E4HHgokeDckV1PUnpekNHpy53n2dTGRLJtgCcvzXTLejWEXDJtztCDZLeuPNoN6WdzPXFbuwiyfNh6zFmNX",
  "key27": "2fKmeycmNi1LrbGX8j6ibutPS2Z7m1ZKngdEMeUwzb4oXpzN4NuVjseBnRXpCNV1XWfUnRYEYThw1pPnS8jcf7tc",
  "key28": "4imkn7WwASNy6RmAJfEA3JdDxSzPmG6ahd1AMmSY5BLZYfoHLqEZC8Gfs5FttobDehrUG3aoDgRakmm1thMw7Cro",
  "key29": "3CGPtrPuykJQqtXjNJFk6Y8kbot9pYWnqkWDuZnA4BGvBwf4trZtettxpwKwhP4KgMYNUV7361EHp4xHUSUetJPL",
  "key30": "rpFHYVHQ9K8inNbKfUS3pzKohc3omnPVwYS659tHFcACFfmoou8SNW5opeRdS47nPWTkitT8uhzMqNJFEqP2apX",
  "key31": "F1EoRFbwGHWSynnLxfNJv9dWmGZhqxGreJN99UyoJKq7Y7y3s8YaN5vrvF9eDraCRDJJnzmrNvRoiykqDRfeVXe",
  "key32": "4PZDTLEeiAUF3HmmSUbqzx6h2qZLLMZUv8K9gvPoT9umPTmKZe78giviFR3M4CDGCPxbjGfjpYSTX9LrD7MVvpGt",
  "key33": "3JoBgTZNNe2cVeUmGhmPUj3GGnjv1oKjZ79HZhZSDXqdb8Gu287WhBvEQuBZp9yJpBCC5LUSF6qYPLW69TKo2hNo",
  "key34": "2eo2oDvQi6Aeu2j7ae2bpSsFYMNoJbmyDqZYgufvfdrsCu6MDNAXv8bmb3Fesawot1j4WZJ9ZAeduMwh7erNHDaS",
  "key35": "5GbYxeLqwussGf2AUUCKEQeyTpvroJerGTVvDD9g1VYBmZsoWiqifugxtCJpK4XZfHrZvjQkRG6KZsLyjCsBfba6",
  "key36": "XMkoCD9KdvhYYWgViTcus3ktVvcRiv4LJkzQDtf8VBsYY62srBvEGDEyMCZUEYmPTF9tQiy43neSsuNzADpSyDQ",
  "key37": "57MQ25eGsbs9KbT8icpXDa3K3SrTc9fSPpa7gV7mQEsJAu5ETgRa3Rdkh8ANoik3UpM2EDqgqvCkbgzNZ7jRh9Fo",
  "key38": "EtpnsfKfSQkRdadhP3Y42y3N2QpshT1pQqYJfcsrCPLPxtrz2LyJyRvGiq4dtEZwnE7knPfxmVGo5pbmUvnWX5G",
  "key39": "3UKgS9B2fe6FQMj4zdahguSwjszn4Cycsu8XMhrnKJk3zHidnMbhS6oJWHcyiNrxhpnPgobimPGE2YYqn7cYRZY4",
  "key40": "4FMVMAGn63TGNor5cRCzYuus1eKpxtGr4abzona3315E3RbLQoeWESCDh5aBfZUJpLkkn2CLcgTCpfHVe111dnTb",
  "key41": "29m215sT262HnipEuzE9Z8r1FWAsZUNEFLn9oJZyBbfvAs5SXVEAvcLM3h9rW8BgWXy2YFxFVRWnDzX6BqNfqcmi",
  "key42": "4oHn888D9AjZ9JdY7U5ShJDUL6NivEdjwdhtkyYhxXLRF2esFn9mYA62vC3jHFg6XXLB172rxV9whgBMJCCGQktp",
  "key43": "51o4rz9uJD5Qq8WzisBZXd6AnasG5re27ExZDnWXvjqgNCfq18qkHFnKMtE56LRSFV2S38XQJCat832DvUwLu9N9",
  "key44": "azBrRen8Lhj9NX4Nd7kAToi7fsictdDvg4hYJJk9GekncBAQGkRbSAMgz5AcbzPhTYE8jZmyoki5s1SAGkzM6De",
  "key45": "4zafQCxjE73aJUFpTsFsZ3fYacGmTUpLSDt5Mwwcv3Wk2JJyT15bYcJWkZ9i1RB2Gbu1Toi3vL1sTco3tQnDG7Ws",
  "key46": "4UENgfQs1LENdnGYNdDk71PGtSp13NsW7w2SR7PGM7qeGiUjmVhxStC4UNU2NqdYGVrsPUJsFmYGFuj8H4BspV4A",
  "key47": "5E6qz5taDHUtiSPLvYhUxeZtn8fKCEL3AygonezM1DmCY9yRvmRsgB4u3Po4J5MY4nGBsTgNQomAiCG69gBsQGe8",
  "key48": "3F4BdGZUbpKfqKsf4TwEBssVdcAYoKWqZay1jgYr6h1XceP2DQrjDnvgAzNNXghmgkaSRF7MKng2NCzpSEWxeVhb",
  "key49": "4qpB5qC7vBzUxeMyDcKR6SiSxrm42rRugPhoLYJriZ9mHXm5FrDZDkSpGv1PgX3kByBoaAwmi9rsSGa73QsNKH77"
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
