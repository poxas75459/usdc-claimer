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
    "2sFFGsfQKRQ1EvP256nhFbtVgssfm1k2UXpzi6cVQzXVHJf8s3s9mTpUTNxjfC2wUpBNwfz1WiPVjqKCxnz3WWRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wkBcwknLfEstWiz1eBZ7mJmZprys9pygMY3xGG1PfqeUQZjQLo5MSWfFVoq1Ni3teAid664QE6rcauABYm71vcg",
  "key1": "5FHPxyU3K7YYtFVXT385jWuAvy9SjCSYva2tdWnk3VWKBdkFa7rUvogHTAcr9GzvtEb5vCGDY8yjkGfboxxBKTas",
  "key2": "2huLosEVHPXyb3mb2f4tDDdhZtvByhSa9Xd58k59tgmLfYxpdUBn7XYd4ykXRm8hfQ4FndTGhWKBsqdNBfBZL2od",
  "key3": "5KifHMu1DQbTdfASXJt8eiXQXwRDoxBekcJfMXLwZ3neuNZRgPZVp8i5wB4x3pA84Ke4hUBcLQL1xcXRcSgJYyyp",
  "key4": "4VBJLCUxXa4KS4yJuAWoYze75zxzZwG3qbXJaNTF2zrGi3jSapibj6EsThJyNrzBFWqoWM8evAGT1kyDDbHMqMKB",
  "key5": "KNenDotp9JrgznWNXYius4b8n73wPmKA5BeYWx7eC6ZS5gg6pmCsPyjn25s3dkvY8JrBKKST8oLdN6PtQpFVobh",
  "key6": "4RFK8Bz8XcyDumNzFSCBmpkaAeLX7oYPUS3wJkDCKQ3QrMvexHQEHxb2dXev2T3sdZgq9Q5ZEojGYqMPRk6huXpM",
  "key7": "5smjsTnqD3pD6tkQ53zjjzCsKqJcNPniA2aobt1w8LS89oDKRBcU5xvXdvmi2HxJwSejCmG8n81Hd1G2xbCKsgBE",
  "key8": "2dj6yCp7iM2aiJRCeAWiuxhyYdvYCPNwY8krxF4rr4QfKcmPaq6po6BFZpogy7mYksLQz4BCxFuqowKgWtQbU1VG",
  "key9": "PdVHmdAuS8q44pznz8rzL9ygUWHUvQDW5EFyPMYTNVyaxUNam39cUex8KG5dornvxuF2WmD3xANKQqWyiQf9FAn",
  "key10": "5oHDyuUdasCe3tR9rBXjKuDdbZMUyr9Mdb6ojVrk9tJKL38uyvirbg7P6ppGx2BDcPXhy6iqdQR6nbN9kUdDg7qD",
  "key11": "2YJHX6gJqsuiSNtZ5QBRrzixuAZ6c9pD78h2WkDxPnK5PoN2yPeoWCybaF54GoRDQqT4oXQFL2zDuk6R9HF3PAD1",
  "key12": "3DMfnQraUPAu1e44NEQbbDeNyFafqA2r8MPsdVM3jz76ah3sei6SxiN5PsdmbSnbrtroiJJYcLukowioL8fsqtTH",
  "key13": "3rrZHEGV5NWYpCNCyRtQ1CEwpw98d2iNDiUAYzFXrEsVC8NXttnm9HzDW3WzTm5NVzCd11m9KgmfLbPh4fqePcSn",
  "key14": "2TcWvzNAwELux9PrP1WQKzmnczSQE7CCz8VQsDuJRzgDLgJDGiKwzq2JaFmUwVKp7dDdSugHVpfEWeWbDFhnruv9",
  "key15": "3FCjuwXyzjq6kjsmRviMVrNHPxuypKpCbhddNwiumj4NQEwg7ZR4dcV7SKezNYS4ezjGEYiCkjEgmVZSAdNnwKPE",
  "key16": "4iX8DzfN5jPwNrqay2GxQc77duGT1tGvniZBYa2PmPMKwQugUsTm3xssFimtHWpzNt6c32BdUzsBStH5yT7zsedk",
  "key17": "3PybUpLoovPpQCyR3vF3enivgyiEB836xnc53cSK3hEsKocSypZgWQqvKNegZEBFGw799rPSSrkf2xdHt46wiNGq",
  "key18": "3TTF4iLASUAaNLUhKBWumtEPEaVtekq5TsHTDw8J8pqf6tuskkBr7578DZ2kym1N6nefKTi6AuiuU6zLSdq1GhzA",
  "key19": "2TJXZNd5M5khYCCUNdrrFKHBbYo1pGqr7RGUvujLPgMQYaoLAot7H3jmwTED8yTmJWsf1Wz3ZsVXFttBS2gnUqh1",
  "key20": "4iPPSwBJJ1VPonSzUpFRXSqbD3JUiKp7dSChDGnNqySMEL3UHK1kCvvJnhZ9ef1aNfmEj81ubTbTQnPmZfFDnHSJ",
  "key21": "4vc81sYEBTd2J6aob4Rf9TuC2LCbqjxAw7odhaweW3HDvcXW2a2jB2VC44wsoQYB8xTRwiZUQRjpL1k2he17XYU1",
  "key22": "46xUiPvCTbNTpoK25TRDaGYYLMiqkU5njorgfWcxui85Nu1fRFQiLTW97WBrYubGeqs7Qs5tuS4Dw2RvNP5rv1Db",
  "key23": "2atBBzQEgrV1B9u87L5GbdthTaskR6vaBtb29en3waLd5E5idFTNenkunheqVj5DC5YtxRK4sJQv6UKfMg3rXLx3",
  "key24": "WcENxS4ZNsboupENoSQQeHmcLexJY1to1H5tWd9hsKvM4U1MQYv62qTPSTUhrEGkQadzk24gvQ4ZhstxnCYnVyA",
  "key25": "drWxSno44MECB1FUkoWWGJ7BpJXn6RAmUKrx8oitW8CShbRPqWwe2ez7tkzL7op5ff9wwvpHkaaWyWZg6ELtJcy",
  "key26": "2wZronw7jFjzgaUBfnGfXMsBUr9ZCASDj9nRv9MDE619BWVd78vBHadqxStXEmBm9wn2iF1oHmRp51dcCkC8nRyQ",
  "key27": "52MmpjukbUSzkXstA7Js48vFjQzpY59RXvWEK3h73AuyshMHNvCk1Rx8bZSDKxikuckrwNee1DBLAwG9vb1YMpv8",
  "key28": "4y6dzxgjvwxwCFEPbdePTsp1NAjFMEZFKhCdirbsENk4DpndavtZYKVtANwRS8Srex14XTszHAQzMmVEDzL8jGXB",
  "key29": "cUctfvDG9D8PN8zcNzWndarbc83NPsMz6K3cRrxgLb8RAPvbre9XoPron7CWLjUPDwSJ7FGMopm1JMKHZJkKVxy",
  "key30": "46pRbhzqdSdbx5mz9BjrTdampnruxkoKj3jCREqXYneETFQnRCb7N6YXpiQ54iJY65DcP3faXrPHianVGTaVgizS",
  "key31": "65P2qwnLepP6sSWMjEwg7MjBPn5U5GEmCm8JZCRbHGiQvV9noMyJsqLuCE2a8VCQEYLGEM5qc5ExgRp8QYWXCUuC",
  "key32": "2WRMgXYKBYx82piAZtUcjaKD7mLXhbSNgDfzUBMwEvcX1etycwTdfhY2Hj52EEfKYb7cZA5r7KYHbFubwkazjMyi",
  "key33": "3tskNdejNq6xdYSweAPhveKFEA5ccvSxvDYo5ARj1cXpG2UdBtq1A8n6TqPBvFFvcoTsKfxvGwDfd1q6pEsHZCGY",
  "key34": "4Jnn93ey6FU5SHuhfPrzQpSQzWLmwUGvifVYSr1am8LaFTyv7adWvtJViAj1Z3soc3CT525pmZwr7SGMaUSbDJy6",
  "key35": "BpSjC9fCYfq4LgxwDD6KcTm3TFUJ9oZFs9Nv4aa9QihvHhgc8Q2ykSu2K1BAukiGkecYtorEQNkVVLKiGyirx6s",
  "key36": "5jJ2uFNXsk3ugozC3KYqmhbejdgwhJFL2TzHHCx2dfZAT3KSJZhRHd4fQLsEgFURmJsKKCVS3troNcusBcN5Kv7X",
  "key37": "2LpdTjsfzgAgzbq8QYVPJXZerm9hh7j3ehDicnchgtVj7Fz39kis8Rb4Gn7EHzDKtFnjD6HJYijDpWPKez7RhGWE",
  "key38": "5un6L4wUrE71on5dM557mzdgaYAtzU3HZ4cooMfNHc25Hp8XvDr3hVxF4oUVdE3ufz5QxmY88cvF3WcB7TPY9AWy",
  "key39": "3WHYFZw5jDBspQDiQ8Wj8aoyHSiKP6aCQx3f9NmrLqCTLAU93UeifrYC782BgEuhBJxswqUvRbGXBq695AvnyGJa",
  "key40": "5Uwquzvf2ZNsCxJQmAsq6YiYTigqniuTJ98ZSpnNM2Sx5QLHctPpnZ6Z4o6aafaD21RN7ixcgCRnUjoezYFcHmqE",
  "key41": "23KQrmXs7cs8rMuEzhnK8vL9Sy61fDjUvu6CvYxE26nWHrU1LWmZm3bswoS3XtXqCVLb6iQUUZdLfeBr93mbi5Hb",
  "key42": "JycRQK7HT1QXNKSjkawvjTwS1QL5vr27xtX6Fr24eTPdMYyE3NU5hP4Zi5BEeu8x66tqpJTxUh5BHodwPiEXtrb",
  "key43": "5b24yLYo6k7NWbSRVTw1fC4bZ5XiVeyaS9fnFf8dZbJoPiCJTh8zC3yBiViG8BJFwtpdUGSQ7fyTiAs6QAUZTcZv",
  "key44": "8nHBKF19EsoB61D3bbtNviB84CPntCrfnMhfpDdhwkjviNdsegztDRvWbasZQLdR932qniRbqNCK4BFTNn7nXch"
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
