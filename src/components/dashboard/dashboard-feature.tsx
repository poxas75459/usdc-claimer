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
    "3YE7QqiNCzawYqALXMasWth8aSoKCm4KVekRbTd3wFgtkX583qYRTy6PjStChvuB9GHNxVbBuHoyyRDxjGaDKK8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WniBgp8GwWoQu2YFDjSbxY2cb7AYnL2AqVN6KR7tL8EGHnhwTG7d9CEo7cEgieeYQrXN99eN19buYErJGu8s2iU",
  "key1": "44Lvt6au4LZeMSx2dQVTB95QNBFtRuyQSgySiaScG9GALjJfURQBxtaxQABQjMddj6aMvNPrpSi5L1esBcDE9YTV",
  "key2": "5nJox32RYJC8B1mpsH9NXMGkyWCXSDHvwQfETg4yCSZiFxTY5gwvyv55JoiHpxb6dzKPvhS2EsFZbmZzwQM3GKwN",
  "key3": "2fkEvRMHhFDamGaNjN14RwoqKKd5R5M1Ks6PvR6Ez32dWHYrbftHL5JzffMZ7gEAyiBeGgk3MMm5ucU4YLXsFmtR",
  "key4": "67RheZZRhzy6WUxrAR2ZUscuQV9cvqVvdSGJDGDMbBsLCuuHM5asodEGcCBR3RM7dXiLU9YHT4YLCosvN4nyqqu7",
  "key5": "3K6KbWBT9rP1MU7XWAhhtnKsLWpVtCE6XSkiVgvPcvY3J8jvXDHfQMc9JGcdvSy9yQMFFtmCdQp3PyWLMCxC4yNs",
  "key6": "2gLVM8hDuq5UGoF4KNfoMrSz5Mg4dAJ4X5vEkWRiKbyaGVVnUqfUpvUj6v5MgtDGgWrHkR9VSbnzKYELJZhyRijQ",
  "key7": "31EdnkHDYuUHaZNuYxNvUwFDvnf5PKxAF2ELj5TFvApFyBoDX6BW5gfdJ43BKqyFBKmNev15CXzU44AbBoTuPMPA",
  "key8": "4ZjxWATC69kK8wkqxQb9ugL8bK42Yj82tTJ8x253bsgmNEtADEp4ubry6gZi5HrWzZTU9NG4nx133dKGUj4h9GwT",
  "key9": "5vbUMZQTwiKa8bnmMfxkA9xM4Carzs7cTcJmSb9u3WBfZWEUrpJ8AxheTGpufShXBPJuW7bhGUKWcuTVPwBUMWF9",
  "key10": "5K41nVzYsLPPTk5f5RpCBT2DQgepZCUwB6mCh8WFZNrW91aeTmkVGBbPLVqVEEA9jRURUk15AcxFTXi9tNdJLh4q",
  "key11": "CvCDbMSXXXjyVDfFzRi1A2FKTZFywmumGrJzeJs6bLWxsd1sNZpEKNpnrFzQ1xZL9VXfagsehy2MjnUyZ7XThYw",
  "key12": "6gjBKPX9TkDRtUuRzMkwnU6EtFRPRzs93naLH7Uc2DSnf1L7FecgjuRzn4o4LY2Tiut5FCAtrkU9jy8zjXPvgYi",
  "key13": "MgG22bbWbWdUxaTnXhNdZPH2XcpgsJibD535C8WGxovgPWBDoUwRV1oY69TeGitmDMaZEV22pDzznoYuXh675Wc",
  "key14": "4GPXgd9bKmQf4bU166WmbA95bJEL8K1y7Si8fUtqxveKgxG1otoqzgAUtzffdptqFrVmjzRmV13Pm2u2EQSuWaF2",
  "key15": "c9W8mk2wkFH4ZQ1sugfZQ2HSrXWUVTcyydRLCMMwTY11fw5gbUpAgCcQBdA3XTtJRNKPSfPLzPsUZF8magCxCEB",
  "key16": "3RzZ4wHWjUzPfdzeMVPePs8hRyS6HGGaodA3sGgDcPWpcfcnQQAFiWbqUD3UfCgReTP8PPUFosiRwk3vaEPtsWcp",
  "key17": "2NZXtZcxvKw9jEHa93ZNoMGeyLyQ7kRydpV3wBjSPVCi89JAB1WP8i9L8dCQvrraAPd2a7oA37vXpzVAwpgWSpm5",
  "key18": "2bS8hbc43zkVM5hyuYbDzkVfh7UcW5fMUFEEQL6BLkbmNCW6W6VFLgrgsCmPKSSd77LJyxzmYcHM3iqqavssBMqv",
  "key19": "294ysX9SSbL6DVcZs4mNXpR6e3tq5yGkBBWc1JHMnHKYGoPZa1SJsBbmhFTGeZ2tAsyPR7DPPAMu1NZ3sZPBizse",
  "key20": "DyKTbC4kDXdaQMn97NCm8u2LQZ8xSc4N1EvjQhVXLhTdRNVsNzrqjCnG2i11SXfCVETbXzwHNa3jNwNjDsVvvvT",
  "key21": "4nw23SLyfyKKjMFZZFbdiKeSP2Sr61kypMTuzj1RGx85Rru63U9tM3PEjZ7U6CtJUCwNkkuKwQ3VaJjNX7X9gqrv",
  "key22": "3hzQobA3VKmFsuzTqaQ3Gj5chSds3Pbh53ZX289yNAwUFziBPFVsaQpkw2cy1VhrcBgfL5ATrpunKv9G8AdUt9p",
  "key23": "3Uv4YqYNFzK43zTRSfeqp6dXSA3sceJ6PNk1czGxp9PCUGuKY3sCGHG4g5gm2onMUJmqVhERbxaGfk1sR1aMDfFP",
  "key24": "4HVC9KrhnxHzd6CB5cwXQ6YUHBPn3xKfnCedPUi2zYGsr5N8hYbc7ZuT8djMWmdT5p9m1RLBGVqrqPgYS2m9jTes",
  "key25": "5oussMRQYpPnyATC3CvFgvzM1DVVwygkLt7Mx8W4BbvZjVxTLv6gHieMshC9NzTEz5yYQ2n6J2sZGSP8YwxPcqe7",
  "key26": "4oVZnfdLBP5rhxYyppujxu58jTuS3gGuTwJwPM3VuhTww9jTBwMJGjJyjtTABgF4TtiAr9tMFEH4T7V7J9s7DMTm",
  "key27": "yWbVzeNgFEpAjnajRC2aLWZ164Xv5rJdbQgZdC3SybUqTXUsDd9N73EjXAdHpr4DqRVrigtvjsi9hpeyQdiZg9W",
  "key28": "Fhjs2bunPj9seUhhdf4yb3sY8KaGDyxH2BvrJJNDGN8VMYQ4g5EAqbf8MxmcP91k2MS72wvKZ2grwYYFcEGQbZ9",
  "key29": "4TMEpe6ajnBAVZJtmWftwNDqMZ2uhHzyRGvaoU8Jn7pEoUa2YUXNKq1PBdaANACjchiMPzSLmyCikV3tfReZvd2V",
  "key30": "5X9aSxDL4hqdKy4pCvKCAWGD3k7zUjrWUcMNpa9Axi3YJZ7gMSAV3xLNnFxA2vnvnPfqXBd5HugZeUxa9TBe1zFr",
  "key31": "5wqpatMqE2oK3k4Hgx5xWq5kPV6fwNEMnAqRptpujrbJVUdoKVnt7uHgNRuF7rHAHtdyD4qTSp959HzycpYv4WuG",
  "key32": "6y93xrB7jW115Z7NjZj1ebG9am318k1Trpw5b9rjpgFcbH24KxEHLq8Jb89r6UHfLcERtCXbN3MXVTrw2yhhAnp",
  "key33": "2jzBt3JHFHYQ1aix66yg6mwhzNAWUs6gbKEUGt4rNDhUaP8vYjhRnSMbmBxvgnBVGmBvftUKJeaC7MAFNRyZjW1w",
  "key34": "6HsEkSB495ihpG2LAYfC1dChK5EpEizM6HXvb4HywGWhRMxu895obW6p5HxJ5ZqXcXq7FtkMbz8dcmrrA7QbQ5i",
  "key35": "4dTGRCAPctWFzERygepTmS1G5cxVG9e4QnsaU1Et4XwcBd74vTUqtvkTVPE3qbPtdtfDMYoqtV2pkkduhFBy3qQE",
  "key36": "3VjZR1LiCDEM6vK8CygJXfKFaNRs7oj1b81cbG6iDHX25bndyBLV3X9Dg73m6KRCxptcLWzj465CdiKu2BQxbeBz",
  "key37": "4tQgb3j872pvv524jWeeLjbF5aRhEZSoQXd29uFXV8wA47Y9kH3tHMciDTYNF3htxBMdCtPxTmfM7zaMuUF26XRY"
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
