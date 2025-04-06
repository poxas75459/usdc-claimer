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
    "3ouMipN5jR8qf8voJwGuAbsDSWGJGhmeGUACBVdeDuVJLqyEjuwasqqcEuM7P9RxEfW8er9RAYMuTxFji5KakxzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKEg4VZfaahjbX11pU7EBK5HyBhxEPoS9twDFTfz3QVpNUdacwYzfbHcgbKCp2nV5uqAgaGwmo6rHYcdfMH3K2o",
  "key1": "rKd1XHenVW2yyD4Gm467ZMsdL33GW7jSvTTSnQBrpp3qneEAj1eDTLMteBP83LDvthsXhY8bFw7kKLaSq8YCoWW",
  "key2": "53EvfedsGDQhCxZ7av1FvchGDSNbWWzGcE5paraV5Sm8BGeGEYB8sgzH1ghXPiZu46QW5iBqUbmePVKqMxECYpHG",
  "key3": "5XNegjUJSuHQCPJ1tas4Q8rxipLrJ9PmSUZ2T8QHVdnedG8tkCL8WEjjaG8SHL1eEUMoqsWjUiPdeCRLmYXgkKSB",
  "key4": "2zvXUBPu54fPpc8jisn8o558dhMVLGsaCFt1FWFokMmkvUFmovg6Z2s7KKL9jMqUpkFvsQjqdtUj4JNbpDLpt7U2",
  "key5": "4yGryo9M7H45zLKjEgvtMfBnUKrVmTYSqpP5VSKoxWQQPcDZJ7zBRdoxfRMmUGpJ2RtVfBWNxgt7D1xTkouagQ1R",
  "key6": "2jg2NbQwTGqjz1mNZoonQqN4XB9LewRi5SeDdzsx877qMbBqcfshwmSbRt7iRwbpK3wu7hgjpxEgEwyjEix31KJs",
  "key7": "63pPqvPm74VmK732rZ7GB4Y49nfq7eK676Zyba4yHUM4E2TbiVS8AvUhiaxDWJ4KFUeqVD5XVLX3HykazA8xpAQk",
  "key8": "5tGwJAr2u8po4hLkXHRbupdFHX4S2Hon5jXXRfwxxEbV5uBZZYvpGXbk6a4cPhppQzyK7etdo7jVHKPCQVuWzKtk",
  "key9": "GnhqaGK9F4yQNyMnnrPKR45Lgc8GRCTPsnU4gtgr37H913n9HnLjQekbr1ujLM2JozxsoiLVkWF5WmiUB87YquS",
  "key10": "5dKo1RMnu7MjStKXx53buRHEoaqP17rCf2xCEt7KnUSRoBLzXhdscQKGb8LLce5yJaE6LcG6qyKxokeeaVjhP9ji",
  "key11": "5WEmYBJc9LtLxs8ZTrhsVeP9Nz66zegvf1x7zWXS7tNsusDXE1TeqUMFxiu7CHZ6hHVePhGVrLqr2yDLYtTiNJei",
  "key12": "46AA5chhtqv5fzp7UdLCZobGBvP3HeAPYHfQjtcuJBHqxDSPizi3fUnY7b4CKgCwWXDXmxLnmz9tJyG7BvAEGzkx",
  "key13": "5FxYTzpBHDyq8iAsY5yQU8sk5rqgk96fjVrX2yeZgtRBiZZeEHJhjYFFs2eDNagxsjLMgP7Tj6ngsJMGYxJ7Mfz5",
  "key14": "3cA6JoZL6JPysGsgES51Dtsn59onXsaFLons2Tu6wgUgopMkonogwQwqN6qSMBBgXQ1qXnFcX2DVTF4892eUUXPc",
  "key15": "2CZfdsLwcbMiXkn9UF57PHj1fKtgaPCjmQMJnEiei2zRCPvofXvBCm3gWagqF8SpSTaHBiYoEMafJX5v975UqZNv",
  "key16": "jLXQhCCB27BLP1H4hMjBiScwUikqTAP7BYampyZQL8tWc4M3yCnegsKtgHm1yXp2waJUbiCrXjqnW87C8Xft9CN",
  "key17": "2uMX8BBYHXBsQnkdxJ4oCGk2dWqJTpZZ5bq7GxSdBQm2yKg5pgDV43rdGreW2JZBHFPLnPGCak2wnhYoyjdskK5H",
  "key18": "2NV9CnjwkQxhvtsNRj5qx8o3SmzTyLEZKi5TNGopTGibVT7yt3LC54aPibaqatFp9J6WJWujBbHr7oH13NsuRRiz",
  "key19": "4RCDEggoteQhngdmpZwD15hCDKGMe8uCZ1M1MkjtkpmxEpGn72Nz6JY4DC3uxcWnPLM734i3JX54DRaRWV5L7eJ5",
  "key20": "5VyegdvpqHYHicjBmQTEvTtjo9ChWFBZ5LFR4qAMgDGEYnLPvhEwbjjnFJchSPvAmueQNX6hK94uCAMJn7g5h5T",
  "key21": "3kygkaxyTMhV7sosLoQWhnY1GwZy5ZyEKRdPATNJPybcZkKtGSyWDUneweWSmD9W1tsM3wiaPubnTD7FAzGqNnTR",
  "key22": "4torcTUCyEpFFtwggT6DyTuxj3qLLFiVAaingsFBa7gcuB2cGQxtiXGmoW9zhvaRZscugQhGesNxfnsHw74tUoqj",
  "key23": "3RDd5XUX5bQSAiUuF3X2BgMpVfXhUnZH6t44XGJxhqktX7ouHtaWGfmaXrcYWPJPKyLVnUS3nghSRRJKCJVUMzpA",
  "key24": "iEoFyX4eXUcxHGMeWLgK9XULjo9wHjWPnKHcBv4dwqFZHFNdgfvJp24sYNiJGokdMaRFJZFscXn8wt4477bH663",
  "key25": "3RFuDbHeeApecT6bqK7FF2uXLK6DZ9XMfk86PeBLGk8jL5iBWhejYSsAC9HqjjNbYekKSMmtFXq7drvyeNN4KrSR",
  "key26": "5MhPfVD8EgfpiBPPjpFc7bjNoqA9iyiS51qVkFkFcGVKVLJxBr4bA2aJsowRTRKTvUJcY93uzxzxXW5xaJ5HSNtK",
  "key27": "dwhZ6Fx7PZkttHVoFzm3iXjjoDbMMTNGcFWNSCM6cSxsezBQzuwsRV6B1XLZ4h8QQqGNdF9kCPDJ8b8QqSdFtQk",
  "key28": "2NKp5S3u3Ajqb9wbcvmkpMPZ8xmXkJvouCJ683t5MN9LXQtfVCKgFckwL22gt2uhwZgmZwGqyzvEmpZHC8Hk5v5i",
  "key29": "5xsNGEQKXqeStT3Boxjh326BYenTc7aULE4oFkiVocVmp8pmqEstejBRZu5QckX4hbHo394sxDxoRCB6UNXswc6E",
  "key30": "dzNVrk8Ydf5UPaiyVV61HMpTuSnBAFQqrXpPVMrhD4PYvoWEEuC5wgSciCpQ7ujGvcmtByBCusQKSCiN857WuMG",
  "key31": "2BaxhkCizg43ro6E8BU8BCtCFEYkqQgz7bVbbcFtwvESRLkKb63wTGV7sc3ZJfbxSYkq8FYrfqTHW44dnZVRSxD7",
  "key32": "5VzQ2Wjojy5x8bDTuZ4HZNmiNjWXFYeY2MHi4symnLM5gQ5P5WLBVpVoCajLp9Ti2pFQ3JiWHvLPgsNeS1BZodcT",
  "key33": "5oDCv6EXmMS8xuF6qWgcrXXch7W1pQ5MnUM48njYU9YERk1Hhjgc4wmBGFQtB9sxCwZjVQU5zeY5zA4zAujuEFhr",
  "key34": "4HjBTWSL9MdEac5Z3F3vfdY5UXuCYVos13ejzpYtyQ1sGY3GMjZNAC9VL73jCZv25RAJSDAaUm7RiQkRfJ9Xnpnp",
  "key35": "2EXJjvbrKVZjv84i3B4fKDAKmLZUi5NM7REv7C97iG8E8XvCdZDScx9ZbxTC2JEuZFU2KELyMrNgVDC7e93BJh7N",
  "key36": "5Vr5eESiN8ENGSzmXJn7xrouabbXaXou1VdJgx9gPq1dqsi1icB9KXrqtjmmKwR7yf4UZHGJTzxzYqP87Wh6eBD5",
  "key37": "5iUPBEprF24VHBpBkDcbL4k1rverjfYbFgrrksckfEWjUmcPKBCJaBANnDa9yMdWwD1vtwsqZyqnviSev8Bu1qDr",
  "key38": "4bXpN8MpwRpHVkrQJXUwQv5spkxpYwaci8VrFPmnafRHHHQab8V5A7M9fbD6gx6MGdPyyA33rgGof5b5YiHw7NwH",
  "key39": "Egf8VoNrQtAEve87xa7sdCCtbXJYhEy9vPvKEdXLpLpJmH3HHatRbr85betAr8nkfvoG5EdHVaupFAckHjNXQtG",
  "key40": "M7Qd5aD7mS9hjSPj3tFaCzq53Rj8wCtCuZoWswmFhxsUtjbAtp33zg3VxyZvmAduNAJfHYQwqKwgBKtNMVkRCJs",
  "key41": "4K5NsTrxx4jg96GPMc86Q2gCC9hCFhanpnbcVWvighJif9hv8CagzVfxwm5yEzzVJSn54m3HMbiCThP9PWm6URoZ",
  "key42": "3cLt7HpveSVmaQVDd2TFmn8b3nZjbhcD6UBZhGNNKHNzxJTSXcCGFjtwr4RbkGYLYpiiFAmveRi8yGY87mXSybTr"
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
