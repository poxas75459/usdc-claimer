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
    "3Ro39Fzq4b6N48jBY8qXhsrjimgHoAN4Tz7Y9q8JvnqRYmK5unuywhkCsq2G8a9iQcrJfFcjhJGaVpeEuqgnbvsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBHYer7fohBQVRwSaXq4aDQuQ3j3uZBeszBeyoW4redKX1kEkQNh759tZtkWvjtUUVuH3X7dXr5QAwdVc5q5XbY",
  "key1": "2iXJz7bn3rWTZEZ49nVgHnxWva7UQNCroo39ZdWtCVdxUBXJnL6k34hyzHrZGXFuUE4t1NgSnr5c2P9Fse2kQqGN",
  "key2": "4hRbqdeG3WYhCvAdC1Y68V2xFaUWv5My1TjhSXPS4QVEgjuLieBbvUEgkLucTVW9PzFq6RgvgbhhbqS24uuYTQ4R",
  "key3": "2DfZUVnA5mxMciYmb3oSufMPwqmPw6cno1qvs4dkAxngBnKFzB7bmhMrzv8J2zHUqF6SWDVbN38Y5vti5VMiY3vQ",
  "key4": "e6gtPAu9SGt2tJp5a4QQLWvn9LN8Guragw19oPoY1UnNM2RatsKKUKvNqyXs6mFYv4CBVWaZMFrV3AVmg8uwuyw",
  "key5": "2p3bdy6ogZy8t5zEw1uSW5wws11WZzYucnMgwtFuEjuWDGN65884MFVqqwHwWZHgK8wXt43pPN6thaNLVnMtjqu",
  "key6": "5oLYfVEy1JscAWnC9HaXqZjLzxdoA6ddTa7tfBW9S5KQoQjtkoFj48V59GxWsyjrSGZTyP6T1vM6tJm7DEoiMNDA",
  "key7": "3dreyHsq91vh2Mk6sbcoRZqyZP5ckMgDnZAuHureWzm9exvWtckDgxfvu88hHRgmQTvEndKCCaVqJcHXQhDRRqnc",
  "key8": "PgzPnK7SexfWx88RedJnsJVMEhKhvzVYaeGcSEodF1y9PYztQLPDupaNLJs2JuU7FxdN7CK1vA4uDYXRtDiWXWT",
  "key9": "2cuAUt5CVyat71v8Tp7M3UWdrsTb8fK39mAxEf6evTKiUigu2oFCxS9U63EtXFaV4m1CYGBtr3ziaEmSCErDc6gx",
  "key10": "2cgbVgnqF3hvzGpzewnJAq5JUUcuNnXj1dA93KZmWWMJghRUhgDYCY5bKf6etcqg6KKECu7tcaHijSE3qZpbhWVX",
  "key11": "3RBJ93NN3ofDcfw48rKf7PVK3feuJE289R6fA5cQkp7R8kJuqgDmxfC3UcXydU5VsqEbkR95bVqy1A2LjsgiEPRp",
  "key12": "5rytv9U3YYktqg7hRSdu8qZZzXhxHYkn4M6LY82Pw9thGKKiYuSPYRYqHXprN8cwaFaJ4DU91UQFLVsw9FH2q1CR",
  "key13": "3Soe5bbwW8XwH2GBA3T1PUmgSRX6hmWEkAmsnVaapxGwTZp9D4e2fBm5PShpUdeb2ZR5UnN1EXHH8Kn22PnrTWF9",
  "key14": "5PhKkp1jq2V6tC7SbZQ2gMaMxvXyfzH15s2EVZPPS9buec3NJigBHii4sVfJgFpzw3hTPLZywLEsEQhoDZKQg7be",
  "key15": "arsZPxToNQH4Z8uDDsgPLudLsaeNHex2JZEisfU5heeioNmUNqNRFmyguMMHS412MYTkvcm2PC34NL23uCktK5J",
  "key16": "2PSCzz55zY1apz7dqbqM6jSdrC8HFuoe76kSLsDk86kqHZQeR1UBHfRS4sFL1H2TY9WH8GXNm7QcEpz7ywPM2rK8",
  "key17": "B7owZeN4Cek6cDy5jRzuf5JfLavCkGcfY4d7zrYQax9K5kLNFEP7DoLpTypFQV2oSZuDk12HHS9zoQvmFAENuUE",
  "key18": "GRdnyL1AeHG3o6XQ8avjucqZCVngpzVTuvh3upyD7wsY94ryfcfabWz88Md5z2tLhatxMuc3Bpd5HPieCCokBLo",
  "key19": "3tcpcNpadZwozRPzWPkigDzEdgYy6DYWSwvZT8YHqeKSrDksqkveuxHqUshLcAoJdUwNr7RQc8u2m4BTg3CWnbuq",
  "key20": "PPU1fRkTcJmzsh8bVgMd2m6CkPhx13aM7cvMwGSXBGV3kYsRFKGNbnJuJBSsW2CYnkM1AH3jARju4x5V4QoiDJb",
  "key21": "5i86Lex7HeAMd5xSBL1a5YZ4k5TZdabd4Ni2LsN8YNaAo2RUKsJ3wEsPiDduNgYLZUbd2iqserTaCTiWu5z8PAGu",
  "key22": "5GhMqeLUbqLdcukL35omoSsbeNYripzb14Rs1vkoVKiQLoqwhd45VUbZ23TRXva3nquGzaBUJzxu5FDpa2uVT6dq",
  "key23": "4UEUehkKPrPe5hT537AerrMDbYNhEwatJLy3jBBUbgBSA3TYvn8KsdjBVxrbqbooKAdACrmxsSjjW4zuVUzR3kiF",
  "key24": "4rENKD7y9Qooumtv1EPK3Hm2s7TdePn99g2dJFNYWxTAN2Lap8kHw1EynyksuExE3pTT98NfCmoZCoDSKnXSyDu3",
  "key25": "4eRZ65Xw3A6EmJULRuXAieyHLDG8ZATP4accChMP1vzMZ7CGQWXY8dAhttAVxhLYKUK5hLX5b3Xpd4bLngCUhRU4",
  "key26": "CReRyqfrdhoL2oRjxPjgb5AvshrPcLPxKg4Sj5722azBFti4UvcrKSofuj5jFLMwCbHBqn5gMvbDhR7uZ8wFNNE",
  "key27": "3Y7eGC8HTY8i3Fbbir6ZQyATchKdtngrv188w6gQ9Q4BNQdiA9uxPuwhafB2qKK2y29Yu9BhKQpAsrkSSNJMJwbR",
  "key28": "2sa8UFTZm5PrxBjYSvXLMmNxNbtbR2tGYMfkjaCD82FwiMYfa7Pmgj3sGbo29AY5w7V8bUoGt7ayDNJbQ4X8MskW",
  "key29": "ErQb97B19zkzanhYqf3XHVxSXmbAoBFWWSvs8mqE79YWRTG18WMj8qzQBXwuUxsND8FihgQLArsyffgWbi4y4j7",
  "key30": "2BwMku1265PmMDcyRQcRRakQmL4ScSiaxmNganYTxq2zWNQw5oSf57cs7e22JpxhDGMa99KoNJ2p8Dqj8jKxMUQw",
  "key31": "55B8pMy1bXyCSMubwF6wnrqW7cpsQWejneC2oyWvUW4szMWRrzjkbNQxpry4avotRYCyCyB6ETGqjYp6PaTXQZ1u",
  "key32": "4QMBpxfwt7gb5h5TdKrLCA3y3Th2nTjJck1P9btFTSpwP8TsiWHRgxcS8uwdL2tuUTt3wJtDgnDP4Ccyj1yFLkaz",
  "key33": "3RYPiaiyF7TgWvJC3zSpNAWHHkecfHGtAgz7wztPNw4ppQ3Pg3DZFSs8w9UKY6ZgY3S2BkBmnc31SDcnqBPeUayR",
  "key34": "3U7oRADC9gGwgSgxvHKgKa9aiT7CiarUQXNDhxTDpgro1uMLWnnTg9wJFXiuoHZrxq4VLFSJg81yzn5eDj8deFdr",
  "key35": "2f2iGz89qZg6CjzqLDsyVsYV1Fzm4k23GXYCs19VLE3973C2C6PdYHg8S7Ex4XBmn21Zayvs5WGXVBgVMu8ptFXQ",
  "key36": "5hYCC9YKxocKHzmf2eqPoKdHyn3E4Lzg7fKg13cXPEGZzt3xDuKAWmYTuFHyFcHs1McRGtsK5SjEQB5X91GLC2Wi",
  "key37": "4AEMUcUtdxeSndYDqahv6uHpQM837pUGxkJRjnVv6h2onwLYhQpkq9NvQ62tFDR4AkahkzPX7zfuJK9iRmZvDnxs",
  "key38": "JpturSrSn7b8vYPoEFJdEzyz7yx86aRgQ5m5AcZgHBrw8EjzvWVigQTfFv2E19y7YLfsy2DXN2aFr97oAeC93LA",
  "key39": "ZDC1Ff4fw8kQdwGhxgVtbLd5u6mykhSacBFzeGHufFWdJnwwThXudMnKSGzEqM7VFPdoxZHbD5LfN3BBGAx2NwK",
  "key40": "3mvw8QHMq9oAiAmne8x2jKL7SfwigwqsJ6wnAf2jFcLMWiaz9dz97pUeULdgSf4Y7eGb7nUh1npNxL1Qkwed7pKE",
  "key41": "5zTmJZZAqsHtibSdbkMYuurcCV4KTriYtEPT8BtKhrE1Tkcd4Xi3BNkeYeTVoygcBZvmf8FpCs6k2FFmYNDtHQhC",
  "key42": "2u3C4H33eLbmtDUQFp88F9SVLH7QtVALkJtp3pxst6hNCNHGwkGn3SpGW6kvSbwegxcfKG1xdmCFySgKLdoQiWtF",
  "key43": "5sS6AAMMSw4xtiGn8SWDc7UExQpvsCSH6WayQSQNbmMUuwUdtot98ZRGQDi6uJwzXQy3kk4iQGNsknsXcwV1yCKT",
  "key44": "BRKQnqscMAJjUwzMcR4qSHC1FhtSYP8DTaBrrZX12eJsoU6eK7boThTP5zb1SbGGn5nnZ9kQC2Rrhxuy1LZXCfA",
  "key45": "3cKFLQ95DZnXSAnrZvz72yNZxN2fM5MDCNfTdmUgLZftcgLFLSRAqEFvFJ67z6Q1dtsv3YoeDjkK7BNvj1SCri5s",
  "key46": "5KaEe9zHV7Qzt6FSqMUzxMah7gi1muFsszvVmFeDNpPWuiQ2A42ZeCT2yQytAoFVuXE1Q687P7jhhVTGkaAtXUE7"
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
