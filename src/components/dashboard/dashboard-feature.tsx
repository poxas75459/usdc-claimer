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
    "XQ4i5jHKYczqqcV2hYdZbCvYSvw9xZj54wCqNovaUfh9oenC2EYPy3MVFDqjiT2KzpYCTGgwxccWFA4aeFmLU5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gaYYTWnFvuxcbLGNiXnyENdos7da3tuXF2fH1teJSCTz58yvWZhyfcdiPPxi5vtyGxjj343UnQ1QBicLiAtD2dE",
  "key1": "25ryUMNYynHYGZa4psL5HexGtApJiu2GPaWH7oBWm1fGDAZRHr9iU95td3Pk7qAQNuimx7ghxoWHKmPwacBbchmG",
  "key2": "2QVNAJB4NjbCzhp7V3aUoYrTzJsdBNyLceqH29s9ogGp4sytVhuahxgZt5ruEmYFUqDCZAcywCw2ijRMZNgudHUo",
  "key3": "2L3ihVQyBC9r3XGdjgs8Q1QzwQzdfg5T9V2wadeZpj1m4r4iDgLbwEsgW8pKfH5nahDNLhVSzrjiBGUg6ubumyX",
  "key4": "5Jf3YSwefQdtuByx3JLcxgpSmwLX9CRBneBKPytj8XdkefuFtJatEyfYzdVZsiFxjFKDEWearXVspckQPkdTv19",
  "key5": "Cf7rLiKtj5DmWk5RE9CKLP9EgZnsEayV9M2Vfo248Tnfgc4TXqGTYUq8W6jEqgPHsj3q7T7z3EQActepRGcnEKo",
  "key6": "4ymAHuVUJJtB2Jab3XG3z5kw1eVVEK4SYvxmAQ1CenPWPW2p5dEnTdGEnJun13GUsMeCZJvW8GhncktLmPa92kpB",
  "key7": "4QaZimnSPW48SZ5htD1wgK8LJrfEWBCZFSscYpB3DMuu3BT7Pdmjt5W4cBS5LcwasHAp48y5X7an7KctLiL8nVGN",
  "key8": "629yAa9LNgNSxWkbgVLF7jFG3Sk8hka9hPQScRMKMN9vDDaapaC7M5Ajz1z3hJi8DF32uaiFKAT7LmeaFhLPsmvH",
  "key9": "2Bdgffs65br5zv4wPjijAx379GPknK8dR2Mx3YP5QynFCHEw41xNYShZ3iFYqE3VKGxWrU7vj4HcS3xcg2TV183x",
  "key10": "4JvsTdKBfmwGUs7LTjyHKcgeeDGX3sLyn3tC2uBNfcaHqM9wVyQXopoGXFundoknbUAfbJVFiNub7eYhJEZUdcCk",
  "key11": "3v2r18YAGSLV7wZNURLYizCG5QFZ2gJJALR3HVcdQtZjmMmrWDV5sra1yxmfpP1ZJ9wyUW11WoLhzMbZRdCMAJdn",
  "key12": "5DgEYSog5NYNTvF157vnwuDai8wDLk3E4GxEMYfPuQJdcpceoBtJyCkxkWK2uF8HnbxWY2JNLz3MmeafhpAjfcMt",
  "key13": "DoV2JcmXLT6rwDduhCbaeGqCr7mLvmS4wSLv8ChE6Eq4XXZ7HgSr2oMbFoV71xebdA4HLCMV7NmdiGmHjVEsaee",
  "key14": "4YDZEQ9AiX6qa6anKYtyHapu4TA29XAG5DbTsN5mpsPSLqnMRq5SxR6ddH5dGTViRwjeTyJu7CziU6Cor3cWECPs",
  "key15": "5vdXRMo9UKLuNW3EZHfWAUh4ChJRXR54Fb72w2Hr3vnEjF8pFoUnAuvSkdGELTWNMN2yB3HDJ6Y3kKgFURBJyPrT",
  "key16": "3Xt1yQC8TfdKk1gKfpPcdfsG46uXE1GVqHardgBNDwxzmUKVwTgAScNUuzmzwhiN5uD45y1q8fLvndQ9rmN9Rcud",
  "key17": "4bLVgx9Yp4jUmTzqt9oV9koReTFmTfXwhsRygrETz1YteDPR5JViG6BJUgvtin3NaY7aTHrNwPCdWu8VVRo91e1p",
  "key18": "x5CXtyEHZyiXJJMsaSoueGPESDQ4X5hRLsuPTUQoPogM1qsrjcmr8SDr5KPHf3WRgTbdquAjs4yMCwbFkE4TdHB",
  "key19": "3NEktUPq8q9zbGxrWVxJpbNmyWM4Vvx7tFer5NJv2EsSmtqQ8E6vKUC6ETMV4toxtLMu44Cey2eYxG5sCmtvwoQj",
  "key20": "5ffB5bQKRoeSyTPTNpH19kp3gS38H8pLq38HNSTe8ufH9rLhcKAApywmx7Rm5sMMGemdnxT7dHFPhcvXdiJxP7GT",
  "key21": "x8H128vJZE69nHJxUWwnVYeFGUwS6skQCgZ7sP564aZ4AvYik5uD1nmiTiGfQSgjp81BHsDtH9psjAG6V6BMK9a",
  "key22": "5HsXBCafYfV31rVP8VLPSo8fSKMgH4qeafifZr9X6Hd2LDVkVnEBjqsLsJvMb1gCUNBGiRV3EoGezPpcviHLeuaD",
  "key23": "2ibe4fZAzjRs46C3Kp7H6A89X6Siy8oHUSTaN1H94CdqeH1jznXpzJzGdBLd5mQbbA6vS4tNxEAiqNat3pgsrZcV",
  "key24": "23btn4waL2uzZgZoNuqBgpLiyWHz3MCAbd4CBAVBza9hYJfwgBBnYuhSmmtrcM3RieFJU5xA4ZE7HeYbKCmzQH14",
  "key25": "3UJFFoQujro6YBBZVtR8QiQ4hxGQT19Uv2NT2REarTyqnBXtAV6RudALXSWHpEsf6xMZyCdomYgjndqYyMWaYaP2",
  "key26": "2zxSh87TCER54PAMjj2Rc8NwaCkgCJvQYU57fAgzyCKThVbNbTKHapYkeJt9TnPANPBZCPpHVGCarvrpEvkftA8V",
  "key27": "2QmK4v8xrUkzr9zeNL2DgRPNvQPLGU6MfqYhqq7XfpGQCX3V1o7W3Z8RRmoHjPgQWZtSqDAmHinrJLhys66o8YZw",
  "key28": "Ea8TSVc47mn8ivE785dfuojG7FjH56ZrwZVKSEDyRcaAhi2d1P1ma8gu9daogmtPJ3PSAmWhbfbfA2VUbt7p5zr",
  "key29": "2CwCae2N81T1zx7GKEzEbT8na8GYonAURX4CHZuHiLEYRtTgRtE5Q6DcJDYkzvz7uZQebagvMLUFfS8idDxPhVzr",
  "key30": "5KZfQcthg5bfMTJTDkEvNJwqJjTeGj2rToUPadGVV3LQfoSHsMA69CREsWf4TkuX5V7H6b1vW6e7UR2awggHdb5W",
  "key31": "4PhxCPUezYKeq6yCS6nKDmsN4CQGi7sPESYhK1kgKa4JE5gN3q5Gafs9fo8GKwS9jtSeWoGkRtaTz6cGk9ECDoZx",
  "key32": "3nFASzVgZ5NmD35DKp9Rz96K5xd5s5h4Fo4x5VvBwqTDFtvsFpUfogrfQZKLFnLAUsXQ6dkc2b1KwF4vpshZBSAX",
  "key33": "5cjwBjdbczobSMVQqro9Anb3edQcxMrz9FjbefrKkHZuoPe46BYPQwXJ1VfJrrJrPZbHWaroCZXNQMscNQZHPyBv",
  "key34": "3RjHKNdohTXpd9N5PBeAFzEeBaMRXuK7LNCKivUNXmDGrN1dMmNWaQQypVCQFm2B6HLLdn8Kw9VYy5oj2NdPimfM",
  "key35": "2VNFQpdomm9NiTKJoY3aTuePrf6qrK8ZpS5sEt8KxKrBY7Xpe8EKskHGR9fkW3TBNbUSymyGiaA7CqTnZTnApTrY",
  "key36": "3M54Fc174A3MnqSEhGmDYKXbgmaNnPxKqQXeN2NLvFEscH62JCJYUdCgRe9QNypmUTjzB3vpnrfdLCweF9kTBS3e",
  "key37": "5aAtjRzubtGqtoisd6QgrzZPWxwMjkwqRLk8uvV1L273d72DWNDQpvaGX4Z9bh7d8v7dkALMeqqwuzyPayf7ztBG",
  "key38": "2UXu3pcBwf2xBAdpaAh93D5KHqf1ym5tXJ6zktt31JCHD4zNqTChhAageo9VZeKFzjbhkpesTECFkAiNskAoj5Eq",
  "key39": "8p4MX1jAqM2Ebj15QRjLHqqYL5q1mMgJ7FKw4Cpoc8t8qndzYkSx4kpuUNW1QesPNnHV1PTWvxT6T77UK8XZJRV",
  "key40": "2gwGUWdtU6dHTFCJWyyC4puDHvuTjBVXCRmQvZ5Eswyjn4XpRMUsSuCQJiv1MNm9DL481hQMhfWVAYADg9njAFrF",
  "key41": "2PZ1Lc4gpanoB4poBFtxAkVshYABhH87TcmTWFupnEfX6w4iaG84zzBfqKVQQGuQSCYGmGkBjYbyLWgN23CAcYPt",
  "key42": "33zQcbyxcqdnnc6rxH2J7mWJLfQ3dxp5KYtwsVmWubbbsaLZURyhq9n57hbFo2BAkPby23gP3a7aAeLTTNJ2Z9Lc",
  "key43": "3PEjyYWub1mxu2MoegY8ioa9KBccwmnwHHzS6XExdAvzeidxQrU86fYayi3xi12UtAgg33xQWRQJwsYJ8CBDk8Vb",
  "key44": "2YWFqmZLdV9PjoSbRUrUscGjngGs9vMkL4MYcb3W1v6nzqsxx3aEybrXZKDvMmfyXCikYKJU4xaszkqRVCJfZV6u",
  "key45": "2UgwNqsrN9418Kcvyq8zKJnNjxssnE4rGcYUBuN2rANDW354U8Qh7HWKskEcF7Yt2wuqWYmhCyVY8r4ujXBb9aox",
  "key46": "3ZXth1ZVNrWzEvdBhDR1HHxswGFvL9XaYMdnxXPorQGZH9Wwj3q5P1EUjAzxe5pC4iFUdyhsXdcaNhsiYEnrr8uJ",
  "key47": "5Dnx47fxcaJC8He8LcGTt5CRqgHzCxWEXryLgAoy8anijcr6aMmo9B7XTM1qZaNEZE8nyoAVbHtTxzGymhfVcU9F",
  "key48": "4goa6LXGEqVdgC2ypop92wQAuTi4zJR1K3QGVqjsGAxcV2SBGejGbUieRgyt6GjaeXtzZjKYi14UMjbFQ22yijHy",
  "key49": "3V22rpiXPSQiyWiqX79rJs3DHkEUhwCHnpq9rhsefoAX85gxy9Yag7fNNLRaCur9eBKCXpTLWFcY4riYTX865JVr"
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
