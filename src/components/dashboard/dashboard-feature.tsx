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
    "5JeDA8avpSL6vprDWpZLtsGvTHiuU6LhZPoGaxXNejdgXRoQ6ARN8SBobTPyuVJmQsJXNPgkc3Aj4rMfqxXbHhwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cHi89VPSYy3Vhvovd4HaYho4bW8XSzEkiNYvr3Ankg7pBS2EMe7ttyY8Eveh9BFUESZHHXmU9xsJ56kNP3UBLsD",
  "key1": "3bxdkJivY1miwRqaiLWJSpxYTskFNesMSB9jGNYHrvU2EKyDAkWutAKEJgf6q6AKQy4tSzC5rAxhYY56Puu38SFj",
  "key2": "4f5SxqucHuHAPL7Aag2uSy1N1igKoe6DzuFn65ooBpovddqZTyAGuST5S3iaEm6RG8YLoWLbmALffzxt7cMiBeVH",
  "key3": "5r6St4VjQcY8bBFm9NyHbyAyPivMtECxY1i1N2zV2JouUZW3rCwW2FYJTWA4TygvdBwi9nMPWeKR2kfZSYgMdKXQ",
  "key4": "d7GwJ8SDNGBGh18DWA6yoPmebnmAff2GuaedpQgXtJYiz4vmayxY9p8tYfbs1mTEeiMoJ7pX1SPGe7MbAyiVidA",
  "key5": "ScM6atvGiv5PQt4gh9mzJyLPcUbGaCGTLELFjWeM5AZQv1VSEZBYj2uY6BNhkyqiVjbKZC69hqM92teXaUbcEfm",
  "key6": "3x1r54ZLfNbCCEN1FNCsSmJZbyg3ETSHjRFPmk5LtuSbYAwxuxrdtRZVD7iRt6XdtWLhiKN1opZTCeTC1qB46MsJ",
  "key7": "5FwqQmhn1oLcSgQFvKjfnomex99nbEbzwJ1jAJiYEM1zsyf4MKuzJUgEpEkqtj3UQ3FN2dPE8nDdmc9BKqCVuSFR",
  "key8": "67f9YCt38VgpDHAtrWKAkXPtgqfLGrh6pjfYyb6McEVTbLcsRWLXirrHA4isHTe9TnehSDRzVZGicvptPyvSD6M5",
  "key9": "2iQLL5RJrgcm7y7SVtMzECShiS8jMcssUpbP6zLYZRzFrMMMw5Ru1xsuEiTb98vfcC5Erk1VJBDVJ2FK434m64Jc",
  "key10": "3JSXvsJ69MzEGfnx9X6YT1RiGz4CSrCDwUWrdFfkSmog1aHzWBQggeow3TcVVJCYzFPLZ8rMwg18kCY2oisHQw7T",
  "key11": "2XEUUB7GDME8iQWpgBfaecitXPRHAHnAFpHwwHNaaroH1aKNjgPkcxtj11So9sTUCynWZDot9Hw9GoEiFPQgbkJ4",
  "key12": "3p7df3FWFy3htuHzPDNuudatmVhnxpfqvLYRrZewu8qrbR9JbNz61iVHqFSYi7EGUv9WRsYNCwijK2D13JToLcGr",
  "key13": "37oAXwEW5mJEfYAZraaor6Mx7ZwjzkAexuZPq8y9rsmEUymp3Xrmziitvd5jWbx5BYmw7Czp6MSXVF8REp9tw4Sr",
  "key14": "2o1bUGFmrmrZWMFp2xvn1BY3dgErLQLppep669i5XEs93YWRRJj3toDvLRQkqPFotgVJWqDRGHMmzm1wQvFEpdvi",
  "key15": "CcfkFqW6NHcnZi7923KYgYayNCTpDim2V2RHwm13APzQAmxtUR6eoZsp5BeicLux26sSH7m3zegComnvcGMzhCG",
  "key16": "2RL1jiQobbKwrmJS5HQFS1RKccoACB8EsQRNbgU47qEitjKvfje8X2rRiFaN1hvc36XQMeCQJhL9pKnC2WRNRe27",
  "key17": "3mAHGzAtRj3zCc88oavWUWbZcV45AigwLtG8yrTTXd6NCffCbYZd8xR5XdgsGg6JGgaWPkyKTyxqBBQeELVnb3ZG",
  "key18": "2Nqd2hbj2SHZp4U7wSoafMWevRbaXCbG89rxYy894by2ehzV6gwSkSNxhvRS4pFUQkUDLztENJEvgcMP7sdkFs13",
  "key19": "3QLzNkj2sBq1zeUXEunY1pVsAptuFPz6UFvdgdhsgSGpTJKQHuMDZBAturYhNL2EkyS3gafqdjwHijpz5qw3grJW",
  "key20": "2egbQ2faMSKEY9gvuee63RZkGEVUrdkc4nmKUB2E7h4Fvw2yn6XP2PXM8A1r8X2co7ewFhY1XgzvWGtBLeyFLP3z",
  "key21": "4AHV463jC8NQuF9hAVoodqbfHVmm5EXinxPLjspX3NLGvJyfCqTdAHLtb35ayMLcM4T9B5pL3joZrDegxL1UjShG",
  "key22": "2Vf8URYvuJoAtFgw1TX5mqyCyAt6D9xnu4mSWX7Q9bLQCTwB8DdD5VXy4LkBaPHL87LrhRXg7cE7bTVbjVsh3ik5",
  "key23": "nVrfmiAoA2j1ymsi1Xc5eLbhjKHPkhLJJa9MCVBTSAf9izQAhDpejJPSTKLMZbC3WDdQpxVK2Lsu1A9T34KLWyU",
  "key24": "2dW91j2FaFR5PqbEgbuFY5NTwrZJbVaFdThPUb1wfygFkyn2dtP8QtvvbUrNzQfzFKHosULpnj6HYfUqurNShTG5",
  "key25": "2i9QcP5zoMr8yiZA3KGM1ZH4YChQZpJS1Xc9P4jcsjw5Mb4kCob1EPr3YahXCHZTyvARkMNNn7TLDGMLZjEav5Wx",
  "key26": "R61asPZVNuYgAnCv8nuYycsAjbfYPLiyv3jnuHk7v88rqguKsWYrQ7X7b1gMiP4VoscCv2yF1WijFDFW5SSJeWj",
  "key27": "zhUND1eqi6264iozV5otDmjUd83tVMZZ561ha37PgPPENZh96urwjKZmx5ssVXMC1VuyfUhxhnZkHhjF67sEvKE",
  "key28": "3c5XcZCzXi1XnnLNZL7RiMSGXrrU6B3vXT8iWXFoYR78JAVMiSA7cCdaFkLKgsUMXdrmMKRrWKK6HehgpBmHw6Q5",
  "key29": "ReQTG5TtgcNWBMz6TeYq1ZnZgWcEXhnvoF4tsZUqHM785EBfQ5f3grGCWbRZnqbA6VHLR35u3g54ih4WZLAWgeM",
  "key30": "hc654tjSLHPgZG9GfKDQtm4n3xMHz4Npb5ZfvJZTjabJVNMcY5f76pDFzyN2Ffmw5xCk8Fw2866pXPogQM7raj4",
  "key31": "4vaXZJjL1oXc9ce2rrhQurgXAJXTpvm62JpPwKaxfU13v52ZHMiYNQGWE9GGZcMrG8UDTEnyZegkk31FAudRQtMv",
  "key32": "5vLPFzBgk9ZYTe9MrrJMej36sTmKvRBYaV1Gdy76URChcckAdTGPp41yBT7bHUtNk6B39BtWrEiaUHJZfZWq8A8U",
  "key33": "4PVhPvcM115E642hNKyH7zPYjk8PnTgkyFBS9VhooA5Qab1YVbr5HDCcXS26URhhGL4JiHKKn1CSHUH2G2FZaBmP",
  "key34": "24VnPJkj6cdnAwXdRmH1b5292cWtYScNJJfFon95r24RtC78QJesUKBeVFd4PVwJGV7ASpNuhupmUorpnBmeHpBU",
  "key35": "3cMRi2PMWv8RCm7uHvLgNQFARtYMYqYukTfn46S5XZ2xrG74bKqRYDv1UH77oVKfvnv173sX8KAMnakDuW1UCPGP",
  "key36": "5GsTZ3a3TTfzJtYS7tPDUy5nutLfEuMpJqXqsMs29E7Tj9cbYaiTGsq5LieHL9gifyoBndR7R2EjgVnxbh6J7oyC",
  "key37": "5o5ev1ZfBD33ZRGYEfSQpbpLonphdeLuiLfxcu2JSieiEsHyR9iuU44oXA8qjksfvUrnpyDKspEi6RzfgPWDSvUS",
  "key38": "2ohGsMUcBT4LZDTCNjDADy8A2v8Nn6cyxJJduoiFHGHyG1ChSQ4ZCqcKk9CXJcaWnwp13Dwh45UR4q5eTYFB7GRW",
  "key39": "S57gdZLJc7Loj4VM8VkGDSVYNYxKvZ7TaPiLpkbRt5cC3ed6535HgjXa7WZtgUUsNuybM5DGHd8rBpX8cjDcsjj",
  "key40": "2KUADyYvvKkVj14KrkYJ35fpFatkaEMfGpawnnAg5rYzmVh8CXrErg2cQXvaouxdMQFiBSSy13sEMWicj2W1LDV8",
  "key41": "2T7cDmCU2v9GveB1cSfCdHDZ7aru7QtuB7Q5PXihTMqN25env2YDGydAQWaoxezTZP5SEB6Sf1nUdKwGXMaBNorW",
  "key42": "53krXDoVoDvkEyP8myxEBPSzzgEiAgrxQd2346sNc4zoHDx4frdaTnBKCYmP7xKjkALvKSCFyJUbdmSahgU7VJhE",
  "key43": "2eDRKQyziCjYphowJu8LWcLLBE3QXvKU1U61gJHHUAvvGkFhAioAqk8FcmhuugK9t8iKTZFgAvLs2qYQEcg2YRgP",
  "key44": "eXtmWAGT5YZXJjT5SZV5AViTpga8nw53rKTtqtiZv2jsQXNbUCyg7iGgXsqoDktDVQuyF99wSKdDwe3fYEmi8W7",
  "key45": "4nPCppxuUzJRDvuuXPTLMo6ZhXB61v8Q6jMehpGTeKNipDnnwhMh9pcDvrUG5m5zLitAsr8RV5jA2ePdMi2qrhfX",
  "key46": "5PT6tkmfsn4W5GR4asMizujjSJ1y17JAQjEddVuC6mrRW7njgjar5ZNsnRqQcJ6BudAACSkou25rnqaraTjikxro",
  "key47": "5hagHxqsCmVz6835AmJt88JUCdoGMoYaxTCWMaKKioBd6RpGBLQvxf8dvMwPwsBBeMyhUdYVsauNfSoZUHTsg4gg"
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
