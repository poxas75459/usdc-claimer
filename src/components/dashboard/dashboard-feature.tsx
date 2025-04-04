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
    "23n36M5uhyyqDwwuvxkkCaWC5F6rj2SjLgPAFj4g1iSwnLxtGHfwpQakikwgjcBmKEim2nyRDRtf7QR11jLAnxza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x1UqURD5y8uKtBR6dEqTkSy4pc79maCSNSUM1AbhTWUNEZtfhLVtR8SHJK527ZHkfPsb7EZQnAzbybtKZvwZDcW",
  "key1": "5T4aerr49KCLD6Gw3dXoFqGVGy4iYUAsCrQKeAAmNNYrDxsaF3xHLefu7AxW1cGMP5wVyWaGhsMb3dtctkZfJx3e",
  "key2": "z6BozLTCLU8dbprAHbgEzXJJzUav1YYSX6yGrAvzPCF9QkUAcXHBnnP5s6YRHeC8ECL2DvEZZuDzo2CVuTW5fmD",
  "key3": "2HvAdMAu8FGfJ42x57gUb4zvzSWixXAtBX96ViCjYi8Ki61cSewNQVVQy4tZxxFUzJoELEC58ByqDoui4Xz6qyuC",
  "key4": "2Nm5BduP1iAnAiuRaH6y3eXdrfDpCYAcbrireaNYx45VbW7ZhgZ3WoeVJbhJM7tcyygJBDfQ7KxLA9BEG8SLV1AJ",
  "key5": "FjfZidTwhSA6SiXqSPLFtuX9eS4xiR6zXdhutqny54KJ1GZYhG1doPTAtGpYy6dGLREkFqgArBa3Hv4oZQHNrFt",
  "key6": "3Dt8dh5Ldu1b3Yxbzrw8CMne5YHYtmy3YxKmiyu7s8zMNo5vhh1TS7MrJJAcYfAxVRN4zCo9zaXETMzNqjrTHxY4",
  "key7": "2nKGMdX21PJi5q6TNsZaUVeWzSmiKpdjbp9LfyK7RtuWuJiKfBSWjgTn1diRZkcVor3zD7H1CpNq2Py7LnF6Jqpc",
  "key8": "4LTckrxSK7xkYXrUxvG7Ym8gBjSEAbkAQXstTw6zRZFsxHHVbAyubkUniJdRe4dWH5WkUqfJwkASnPgGH77JTSZU",
  "key9": "iHmNMHP8fRWE8WrRjPtSZZLEwK4XE1YLE36tJ5UDy2f7e5ejzMD1bbcikgi97YjaDj2kBBKsH2fYCVDRY6Fwn6w",
  "key10": "5SjCMaxNvRStC8kAKgWqfEegiZUj3nSAwxi8GZWDD9n7NgxsXWHZhD5dNw9vAP3YcSZg1dQBWWyuPRkSuEBcRJZg",
  "key11": "32MUVxTmk4WANemZSDGoN6rhQ4T3ZLo1eKnSPnQcKTrKb5GkUB8C3NmWLGLLE95QPH3pr3wbESa55KxGMmjcKEAt",
  "key12": "2R31fxLCmvt4JNTJbK2GmoZipDKqUBQMQtC4xncTP2FBQRtSaY6nM1ercS7z9bZvGsoZKeNEqnRT8uLRK1cWqw4X",
  "key13": "3W56o4zUaSz1kuUnTTjh4NixzK7NKPRos4Ujas8LjEwPzQqBmL9Pntn3UA1vvsUZ5EfdbyWKGCbdqPc59xzEKUHK",
  "key14": "41RDtdWqKDfeWS1KJ6t4RjZh17VxSQKVkV8jhUZZFcUCntgB8y6KUafmk9BMEF5Q6jtBYKspk3eyKX9cR4VrmBL5",
  "key15": "5Wkt69JM2e6xo9gk6LPK78CYo2RpapES9xxaRdEita3SGswJRHkkWnayAxvPBZf56aaAc7d92q9mj6C1qddrqTwc",
  "key16": "NiTKZF3ddwyjmqqWFnyDFb5B9wS5QzPQh94w6hh6T8Bi17kruAVMrHDHwdy5a1fxeouZu3jpSgk7pmiTteTjaSN",
  "key17": "3UVaxSyLGsgSS3QMquBhAFvHxtsRwDaeyQ85ry1fwk8yPChd8EdKuXUFRvszJZKvFZZWvCFY1wYSVLFbRMFn5euP",
  "key18": "2x4vEYCfGCv1uvLWjoWEBjWgWmFBR2NqfbwRea4FcwY4HR5DnNTsWbtzumAceP37CagNyWejBNpTtPoq9XWPp6tc",
  "key19": "4ms8aKLuQB4TTxYyGaKzD35nAXYJPKQ4AgKMQiammRjsKpv4rJj16qqZeJbgn121JMgQKde9aYFNVuUygYukyXSU",
  "key20": "26XdfWC4553cbq5kiDPpH9iD29P6aMw3R4PKtVvHrLn3bGWUaFWjPJnYXg9gspGRivoKyjMbXoUg5Bv1Sq3JB6Cj",
  "key21": "uWezCVUWyBnirD4FhoKdLhNnJSG9b5scWkjDjSTH7gYs2PUELofHYN5m22HUSKSwoByctQ67d5FMurFAF2EMLkG",
  "key22": "53ynivHhtHMp1Skz1oYZaT2hKRw9cacnrC2YDaWhj2t2DxPaCxq4tPwrgqt6txFYuYkm8uHnc7z67V9PEvTQhHf1",
  "key23": "5Kgixzgds5k69tWrR2ukbEYhotcoaNKRuugXgNp7diUdNv5QZrboLABHv4Pr2jmWgmMGnaHwsEzHiy9azMHpcT1F",
  "key24": "64iEaxhwQyyRnK2HqcJUWbhGUVwf3jnz9mQpshym5m2uUJdxFMoc5HBfChisSmtD9Q8pm21vvX2gsnGNy4NiAsMM",
  "key25": "2FuS7TsLk5T58LNGGe7CCCJGs39cdbsTDNwxwdKbowSicCzD7wxmFnX1t7ZBwidMhqYAsad6EU7t7cffdDRoCcpZ",
  "key26": "3nZCzouGLQHjLcvjMTiAjKrwKHGNvEzkGfJCbqgoMPds8hf3wWJYZ3ZC8j4SMg8E2iL31e484EytiVSHYn28rqCb",
  "key27": "2yoJB2iFJzbLJSUih2q9zwQ3TwXaqBe9vsLgGCGewS7d391ZeQP4hhWyYhuexeF66AzdSq2G7odpeSWY4Muixdwv",
  "key28": "HNq8HR4e1VyHsc1KB8nCNXhme5XCBKAvDL7kM1hpMM34d3r7uq5qQC2PYq7mX7UDn2wBQCzTyY58fcTthMeeW8L",
  "key29": "4Jm1jenNtrvH2KGi63mVTb4fSD6CFLEyxGjzGSMURfhbNjQMb8Pq1JUw7diTVNskek4aeZPYKdm6Uj6hVjz6gEYt",
  "key30": "jbtT3JZXLFdbTDdccQbebiU9f1jbkrdbRxgcZWwEft7feUiv7EoqFpNLjLqcf2uMrNdvgrgf4z4vm77FaFvtdNq",
  "key31": "W1xagfLwcHoomGrrw2Uukw42Wbo7JAc2ZRNWn1VeyDJVfELkVpag2ageXPiUASWyfJ5CPeKGwvV51XXRDdRQBGy",
  "key32": "4PSEU7meS3aVorig7B6jupGFn4dyPgkwTpc9fCX5cfrEtWFi3nwUubfgA12MDEmyb5vUdXPHBhkrGVsuSEhnhUCy",
  "key33": "5gtcmQdoDxri9bz9MHDuVNtsghWcWU5ThegHGLxQi71LtJzYG2RLHmKFL3qJsck6Hb4ewVGbGPAzApNKcK52c65n",
  "key34": "3C73DKpoczGPbF2d6ZkWdiVPNYCjGinTigtPXVaUNSq1t8uo3XLSixLG4Vbq3THLfUxD4w7V7c9jdj7Rg9BBvhXM",
  "key35": "4RUno5CydDVnp3zVC1fEHnjjihBZZB8t2wNT3kZnyBgMfkoMZt5Qw1MbqU78cDfNoY2xmjNApDsmhQA8VQu93hmR",
  "key36": "4cKyVrL1sibkw8DCV5FafF6jU24SXteYfGfhwbVvuu1qjf61YTRqaWxyNVqhUQPApA5RAucSbzHQxZfg6n3DxChX",
  "key37": "3xfvotyuGc8cjqqRBsbzrUroaRHkynT6YNJrD3795PtspDwz5CPBctp84M3eytg3aX4qpKuNSncpxqKEWMU1pMqU",
  "key38": "5KH5fSoMT61WqPnD1QUU2qcEagTv3myZSVMTtj1WRmvG34ca13FdxUhkF7BpCnseR6NCF8PX7ZVYAkc2wSpYUxx7",
  "key39": "cd3KLw5zfgz8bRVcj7XSYj8umYn3h9LdtRpp9UVsFvEc39NzxDV2z2gjqjQMu71CbqiUFwDoCgNY5PurQLEFx6q",
  "key40": "3t2skoC3QLXCdXwhd5nCDRR4hs6CvyjjK7iEwX23qAf7QLWfjWpSWKqEZmqkcNYoa5m8ZydWZaawrCGTveoksS8f",
  "key41": "TuUs1vimrJ4DH7rPcyy4wjVM1BMrxjUPVF73uAKr7xEF8oHu5TfKXXPe1R3Tu6g9NSnuCq7xwTdRFEhahBZGk2A",
  "key42": "415KTyFVNN3PpBkYvYkdTkQtWDW2qF4eUEPvEPLJTv24wqqS82wbvN29NnWPTrYVzvCGEUQFATEQVUNx8mX84jVe",
  "key43": "26TZHi1WU3j11cJMWevK2RSx9Qr9MbgBAktSDbTA6bb2mpcqhMS7L1P37sL2ynjpsfd4hygHHJVPVJr9nBtCLiqm",
  "key44": "2JmTJ6PhCKEBuPuSg6LUjrVyDeH8ZY49Rb5iPVzYRwYjBkswLJhus647foD5hohrTLAm1asJZ7Aw2MpfjqY1wRHx",
  "key45": "5jHPE2gQzCECiC3LrLLpHC71iZbdJQSrxBME6uZbo7SbAeob4pVuxscWq61sjJ41dQ2mZeSfRUugH3HoSApq4yeg",
  "key46": "3wUxo3VbSeBDcG25yxXnMSTEZXBwwuXBwiGsmFnQibw4669zJGURjhonzA1KfqYZNN2yCuYMUJddY3CKRNmTA8VJ",
  "key47": "5K6aENVbukLqRLCac8cAXGqzSrzxcQeEd3n3HjZ2x4wboFQyy6Mn2GG48UHDXPTtf8GYPKorsFaFC3ukZMo8DzH7",
  "key48": "33uuVDGZKgeDEcJC2JS5HjS1Qz4vU3XWXnUwuevfiUGCJamhXmYscZt6rNBoTuTRuWgd4ibNvHnsovkfJUhFu2NW"
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
