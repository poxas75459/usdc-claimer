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
    "2kxkxh15TyAvUzQ5PCGxQ37K35vyrBQJrPmFQmeLn5ToNA3hKyniZ93ZLaE9eutyPcJhaAciTHBYbFVoG3yhmQsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhrcx2Z2fEUgt5yqD7Yeo3bFQbLBKi22CBohrbCCMe12rygtUY3dDGFc914nYyuQRUuEN2s8GPKneif6z5iQcrj",
  "key1": "37eHK5txQp1XsUnhE7Wa8T6HyesQgEwf48uRobHCXwiHk9guZGJ2gFkdQ8PsyukPc6Gehsrgsi2ciweWKhFV7vv4",
  "key2": "5Vzdt5yi1JHeVphY8YmCosFYnztb1yaL983XkDfbxR82Yt6cVKjMacAbFQMNuexNPn6DhrkiLcUeotpiVnPsQJXW",
  "key3": "51UNnAgZbkT1WH2cSPpSR75bitTbtDRHHuwQ1hfa7DMtyCRfAyjvzNHn1TBzqtB3UtX1gZzHStixEnaYBrdT3kTV",
  "key4": "5APjTKQDirzQQvpdTBbJZcn4XM5onsiALwftFTy5NC9gYFnhAjV72egJkLYtQcCZSn77eADN5EvVAzWHvX8Diy23",
  "key5": "4Rt93YWAAmWYDcUizEA4ZAxq2JPDitpFg6Md5wiuyi2sXNCf95LLWLfyfALCzKZgjgGRteu9PKSzgEZj82VcvSHR",
  "key6": "4TyNev9bgmTT8mSdcyFc7gvzUWQaYSYVaa5pJ6vFgKAkTphnQ6uPpwm9ZP6baeUps2QWKttuSkgSGq28BQsLmbRM",
  "key7": "5a79s1PYgSA4ez6qaga57di8f3JRc3iVDGemMZXRCuY1teGfwKbHLJEyex5814GJzP2kHssKCxSLci1VV38qdr8M",
  "key8": "22aZGPFja9TcfEjFeiYNdi7z4PQ7YP7Ch2V7dQHCnj79gazWsuf3UsxiDoTH3csoWxheWQnB3k4BDFLWt9Y4gMaB",
  "key9": "5hucZq6FChqDhBtizxzg71CX1Bvrdj7ZRwzi8v22uSb2h9mjNPf1k6Smi63jRgRQRDJDAmptAmFQHvvH4bArLnWe",
  "key10": "sm81njGAqwbZmWw8x7ZnAQMVmuz1goMA3vfN3i9isUe8PYYqzBpntTLL65aBBgpuxTGxMrcgYVzPw41X75xLqZp",
  "key11": "44Y6mQ5ch5W29UrHEFGReL1ftiGpK9z3JfBk3DeyF5rAKuR8pDSSYXh8Kx4xt8EYPCjo68mEMixpVHLM4VKseJ5H",
  "key12": "3X7UM2dMEQhDua57BAeqyTnJHVa6QQBvBcF4C4Gy4QCqbLmodS8f3P91pbFZBdQYmXjgCxyStdUjAuRDU1nPV7aF",
  "key13": "4MjAoCJvss9Do1ZpmJZpdm4oovW8oDtdJwWuyRaV7KKPhCqZjjoiRQNcUJNPEPowo8CmR53wrek5CqNcpRgcFmCE",
  "key14": "5nY7nauA4hX5uwf1ZHCMdLX5eLg3dASvwYbg53L15JYR9VhNzdwrPQ1xZtpPuvK74jvPAn64cTzU7YHm4qUGVJax",
  "key15": "3Y5j5hhMkbdMQDfoMiFsJbKpo41uCxn6THxN4rzFB38S3ECyTeNqcsMrutsRWzpchWidtyStLeGjm2dBtp6JUbm5",
  "key16": "2gyJNzDWHfrhb7aGJwTFntMvTp9YQV9yFCrQi37YJKuxa91MQJDSBaXJ45fnGdLtYqw3YJwHd9viKzqy5SMqCQ21",
  "key17": "5vYqXisNfYmf11x1WhMEjkxucbj1M8EgBHZ7AmKqoxhPKjDSatBQs77iFCFkcCFtDc7j8BGRDL8YAhdvCkHCWTwy",
  "key18": "5NjqLywNDdtHDsVe4wmQ7KD8SCyKJanTm4PKB9dW6KyuiP8BrmAePcEHvfGE9AK3gp5t2b5L7tXH5tgNN2U8gGf7",
  "key19": "4bLhtwVb2zM8DaK3GoBWRWgnwSpZ36ZQxoS3q2p88nc9hYd2FgTAoRWsSE69xLGGMVLcdSkbwjV3HQk49yHfqWP",
  "key20": "3mh5GvdJyzgk7ee755vQjugkztk4EKRpJtTzFLiGNqAFRAg9rpyVFwYCnetPkMReo1ixPZXYCTf45JV9bM1czRFS",
  "key21": "LLaKUB2Xkm1MTFygCX7pESxaTasXsh2FAKLZirtw5mHLjLPZXGyk1q6JLDzK5o5xJ4x8cwRyVDhbJUEQiXibJ3J",
  "key22": "59SeTqBf4vPwAytwtsEr1gdzizZ6rfph39zJz1VSSPcN3n7h1XmuQaCsmiN26Y5TmgT6iZeXHytCxjn5kd26uiqe",
  "key23": "5MVUe2Y2Y4YzooWsfxH1EKSAkLHcYnfdvYTbuDwGM4vbBdz2dRWecRWV1hPEtf6mvWY25Jvn6Xgb61pDA6bLYtc9",
  "key24": "5kDJTQ5KwLwtGWQfj7uhRohYLrUr99NgeUFdn4hFRAmCSdBgVB5QR1NsbmynToe7676y5AZg53UXm8C45ehRLWQt",
  "key25": "4dfMKn75qLpjrLuDbzD3v4FmQnpySqYcBEnaHRzgK558PkziyQ4eMXN8DbGDNqo4ow9p3FTf1yfbY5wEXtaKm6zx",
  "key26": "4f85dmYq42KUcRCGxyxLKnH2PNhZR9r18RjZordnKkEGQTdoHNfw4usPVcQrRhkdK4kJQ7gK1jPva2sWuiaQieMM",
  "key27": "68i85jPC5AnoaQNbQaNQFeWvF3G4VxmUJohPLnGZfZqnLdnFcnQKCx3jUEFfH1Qws5cEDNK2pYG4sVM6WME9Ykw",
  "key28": "crrN9HbF78spoWrLFdY87jtcQcpmzLT3rPrJ6dWCwVY6DUop9XmzWQQBfWUZnN5KKznQhyJkCVKKJYSsYyBnRSX",
  "key29": "3LJt12RYXRfLUt36pTzGnVh79FxJfTfbEfNuKc6XqcTcARR5hwf8gk2hyicpFfejVSpjjwD9MivUdGUttP5o3nCr",
  "key30": "2MYxy9tch5wKUGkvWaqjBMwFyRJGY2GHHhFExRgQAGAEajxPsEqnkdzKsijJt6bHZs8g1b7e5QkvnLSAvEqLMEKH",
  "key31": "Mwkc8YZ2448ezNt8GQrTTJsJiW2ENTRmc92GVDoXXaNpuXZbWD1sXUtjwWDFqSaUToDauXBRXRfmfoRoMaEYVFJ",
  "key32": "2xscg9EPFPeb5DxoHuivFLe3bAnGvud3zrpwM5MQVDC5wku6PRWbtM1Cxbdb9VG8cqMwXZrPKk1PsBTXLMzdoePB",
  "key33": "5EomqUd1AQJwAWTmtca3VvjAWS8ihmKBYBowVs6h6JeKpxo594Vhqtdt3DEWw1ePpfjiDi7SN5p5H2PpMpkgPBTs",
  "key34": "25MX7SF8wEmk7qNnSmuSc4fdnpVTzYmbNeVMffBpw3oMQ5B5h7E5YCwfM5ubr9j5ppED3oSyMPuUSFWryzGkKLt2"
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
