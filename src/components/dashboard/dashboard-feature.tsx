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
    "4CsNWuxYWo2u29ijSgpyfxw8FZ14qNvEgpTTQb1VqiiVoHTRCG4XrjAGn1xeoxes6YUdCG95dtbRxZJdCjnuYXkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWgeJRyST35oiNKi4gg44taVeHk25TFR48BvqKz9HEzqUbun1CVtKsDj1MoWQVfkKhVQe6M52EkPkvqjbTbjDLe",
  "key1": "2yUxGJ1FAeoWpWQ2qJZe1zX6iTmuKoTP1Di14ChvQMh5wxSNuJsTzKQBbCfeax55W4jo11ipjoAAzektvFo69vyd",
  "key2": "6b1ZAEYBfUf2apgGMchKEHTiHNuE5Wjn4KJX3iAMZi7S2uCCMBjh9tkVXqCspkRXTxN8Pofq6TdCAiu8StBDf6t",
  "key3": "61v5LaPhb6EYDTLYijbx2CZsyXyAQrxAKNsMYVPg8rdfLGk3yfabPpgq69BbyRLLgxhmU9pNCgqs3rMDgfAwHztM",
  "key4": "2FvC1gwVoMGh3aPeqv7SgZpHk1j2fjdwracT9BkrALWxbLYXTECPV4XyCEYCMmgxr4TDUtCBST6bWDxyqPWa6sfT",
  "key5": "3yjt9N6Lvo4HnAPLnNcenP5N4ZedxGEbgVgZpW76ASewt6ByLZYRETPvy1LPSwcVRADcnD31VFDnRuceQKqtWmTh",
  "key6": "5w5GQ8GyQXcAZvZLtfVHryrPGRR1cXHjd9cVEeABJFxa2Q1patABbzmcjLvSzL9KLEnHrNaREFgC8jcBgVcPz6W3",
  "key7": "2Lpm2djzGEb5LM2ogasAGJHPvibUzzqmVmoXVwd4KwCqPTfEVcngiQk5UuRxGouJZzX5BKc1r9gue1qMEL163o1A",
  "key8": "r1mgiGknPskpGP7nzZHjmp5p1UeUQTGDpnR9fLUr1Zekw45n8bPndZ7XcKTaMGKbMKZM9KXzX4SHejUqKyv9oTj",
  "key9": "58YPog5YhfwBacGn7DXQXtnsXVCKmoxFta7hcaQzzemybJfaqfFNcxQ5sGiEUxnmxGGTihdCzTGQ742BGnBVtZ3E",
  "key10": "7VjLqwBc617JLtdMzZH5BTXBBDUMyxsmtr4BSF3NCGkqBke4dqkqpcF3s47ynzMRLpfpmM9kLvsjbHmaRCN9ae6",
  "key11": "2MVyLXQH854nVMq5XG9EBiBamtiUjsWBiQVt9QTPpJKtSEjEHYnUuAyFWPDFyhtR5ynbb5aqKticfToieu1W83EM",
  "key12": "zrpr73zrVSz1rzyqd7Bf9Qtkp5iV1NyUepZHwaZSk8m4YaJu9tRs14FfL976X4WRYjipPoLy1ai3FYzEboeDiS3",
  "key13": "2rKbLtCMXEmYEXRVsX91bhdMf4ePmBAYEVac68zQ7BTVr6cQFxkT3mQW626hrixPg9z1ocB63Rt3LEH6ZtBCSEEr",
  "key14": "3N5MV6rmhvPPakLQ6FU5mv2By1UMrEPeZQH77FGSkUT8SATkJyENaENnSGC2NKUUH3M6JzPpp5fcbKCEbZtUXTLT",
  "key15": "2RQgWv2qJAHSwaQe77QDM5mfGAzKm679efj4QAkPNVw8QWw9H8gUE75NM481q5xcewamqFrgyeoQH7YKH7t4gWsh",
  "key16": "2EUWCrJjXtbx8BrANa5qhxzifZNd1TqWK2Zi3jEdKeraTJKrSMv8tztSJCEM91JBaeRVjcJfKnAdh7S5kcjfWZCg",
  "key17": "2f4SxSAjtwySkiFyGpa5EN7yZXTFnJQ7tum2QpeZcuYeVgWtCZ8HM2ymvmpooBxemfgFKF3g1Nv5xuJtpSuAaktU",
  "key18": "3v1UMfFPLPMeaPogbAd1FcTYWPoa9FTkDm2wnhGysNGkve7zrzz1MW4KEdmS5kU6svSV8dkBKyKFtcCrKnXkCzVZ",
  "key19": "5vW3njcqu96nGBQRLRuWVnMPD7q2QujnotcNZGahFRWfwrB8ezy85UiSqbnSMnm95jiHsmLefXiuYiCfaoZnWpPp",
  "key20": "2na53Q1N57nMk5dq2DGzCLGpExvn2VoDsoBDyChRGxvmPoyJKaiJcoQ8uUMDzrdHbscZbY67ibyYTfDUXG3fqjFo",
  "key21": "5vKeEpbdtx8Y28Waukfyyw4NJvsfTcG3chNWKy7NKU7xdwPX3svxzRyQbmqHfMEicvVnRU3AmpTH9Xa3LF3f6dy8",
  "key22": "4tk6BKnj1ioLhn5gWcjaXBKtSda7g2SKh7vicMBNkRNWRbgpMCd9xQ37eQDhGLMAMt8j2JrNerY4X6Gp6GgKaMNN",
  "key23": "3MWLbJrSSvsXeqvCq5FFQCSUUTngNN9X898q3hDhTmAFox76v48QL8KnCv2EyGEPW2UFrTp32dTLowQpXTLyHmwh",
  "key24": "2sLnY58fv4iYaHY9JLstFR1d3o5au4ZFGDwL8Si9cMgzNismdg1eJpo8t5qWC8MZguFVqhot7gb4tPL1S7vgR2jc",
  "key25": "Lh9w2szGrpRXFvtQPgv2npAK6YHXCRZfChAwLxihFUhix8n8wszTTHCuaFfZAC5aL6t8dJRAdnG9Wrgf6t6PTZj",
  "key26": "4124wK6DGPRjY8MZ5TjBzwSeTDVa64LS26Ns2udhi9enbiuhKhS13VHVdx18S5NQcRN3JkRphNMhEiNrhtu7HzmF",
  "key27": "WJUEdL7cbBQ4VALR8E1AQqyVa2tWGLW7wHnsQxGnSvMTCCairBrjYbK1Q6dyfbBxR1Xao3vqh72GmaJ5mTCbkVk",
  "key28": "4wKZdUvxAiPyy2mvRHgmknkz8JYnGTb8Y5uK5LbK8e6hxpvRYjQCLN7aqgEi3ReGxQ3rR2P2axR9gRi7vxgDzomB",
  "key29": "3LwuFeDSWAknmNvFicuH8ZRcgDTFzjubciWGKb7aa4yA7XjeSYrJ84bC6iBtxVsnSjc3W82H5k4hknMNrcC9T1NB",
  "key30": "4nR9GARxxHbj2B6C2LqJScGrfcbUbPQyvqSTJoTan9H6LVKjwfihBJsSoZ7bwStZhaJfeT3szG9Ypxj6yQ5riVER",
  "key31": "5RCcK22a3MkXYtbgLzWT2QqxJsr2WqUf2WfyWZvbkhTWnyBKQST8Dj6mKsx9A3hM27tJotwGNvkmRszw2YCVvaAb",
  "key32": "4ucf9L4KDvdsAWxaFgtXbDcTwtcTTXMQ69FVkpT5rvc5E8GxESnGdjCvzaazTLqjFDy8cLRKHrCu45JXUac4akfL",
  "key33": "575cveJf3niUishykrP3wqXwgHuxiDYcmSZPve1C75F9vvQwTh3LPUstTNtF81MpYnkqkfVJYPQgARx4uz1njbp9",
  "key34": "5a8tdb8eA2iJqZuEFd9chaLBgXasEKdMdS2j1ndTh6dP7sgWtM6C3NrKGCkyEzfMAF92LNbagozmXyzd4a8etNZ6",
  "key35": "4tK6QkMLpYx9dfVREcyaKZbv6XtuFiSPpVEdvZSNcnqaMkx9hLFE5o1ypUhrZXsEdQTXnH9NLiZ6T4Qe2imdtqMF",
  "key36": "4GEF2pNigj5XUjibidafxPnct2JbMZbEf3CTmtBDkX8CJ2TZhzMaXctc1FygAnRefAEwuGfzMvuWMtrpqafPJsNZ",
  "key37": "4A3YSiphBYz4z8cJt2V7JtGcCaiC86E77bng2QCbqEyHeFBjKH5dj8nbyGQgJRRUjWFNycDYkV6odbmhGC7rv5XF",
  "key38": "3cWYMH4p3pCseyADgJ21YR63NJWbVS6oPoc4PJQMfMtWUD56KAHT3dTfJFpi9et5rUkMejkukFQvNd5ntHf7fECD",
  "key39": "2io3sNUa3e8iNRBb6jVDhuNRxWC2UxVq165yEKuw6qHzovQLoS1ZK3p3NkukdWbyVXywL6bVMqke33RpNsFDScXV",
  "key40": "5atjza3bL34k5RYK7GNseBuxKKtGoKjP5L8DpNeS19dxZxTJUv9q6H61J3RZ9ZMWtzrUrws1jACKBtggyguwSTzZ",
  "key41": "3pTRAWdV36gpFWLEDHNZLJBUsK7HKMuK7Utn9UdHKp1VJwtxgCBtCJZQcHkKc98Z73mp7PcP8PW8xAAs2xJ6j4vr",
  "key42": "2uzJPPfULZoeBVYYDnvH54ZHdK5NbJxbC4HH9t9gYRP5ptoVSTKW6BUknU6hzmxQYnaEjVUbXapptAb2VNRKY5zm",
  "key43": "3taQB7MGsSYHyWHaLzCUrsVAZNRUvYjsEjzdHoK3kNVnbzLG6QtH1WoHGNUSMjAVYDUcHeTLfPTDdGBKRAiMs2oc",
  "key44": "sF2eEBbbn7UntbKZdMjFoc57EBvUfshLZnVVQ8C5icHffnPPYnW4DAqMtkSWbNsADfBGwmrHJbo3T6aGW2tSL2M",
  "key45": "2WqQCsHtGNJTnHA5amvxMbBu8MyognLwwqrP8bQ42M6CrgBHQfSVHbPBzMypyS74tGVYu3VHcZvL1qiuBG8ttYnT",
  "key46": "5SwQEwXw3FqH4eeNV8PvRWGykBSTUH5dnTbcvvSVMQ98wcYRSL8PngVsuKjaPcsgkMXRut6ukBwnJvMoCFHkBotc"
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
