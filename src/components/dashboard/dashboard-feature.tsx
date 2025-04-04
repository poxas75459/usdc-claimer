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
    "5rqjxaDPaPf9zzRKSz3YaASYByhV82HRRUjinpAgNwHX6eRHGYaKG7FEEMHQ9u7QfVNkGEBWaapS2SupxDrfjTBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sjJ5odnu3XnhBecR8XsStVmFirFaWHQEz4YE2adbXjPs6NzV8fkcXFHvTUtnjUR7GxZndQ9Nq9Dh9xUAG4HfJzm",
  "key1": "27pzh5L9hEsg2U1i6ADPARGrqjNYnNKGEHvG2hcdU6pLyd56pNbjuoFD3Gd7EgNKuRNpZHSeEAwnCFhCKs8DUbXg",
  "key2": "k9LvA42wQCjZjUCv6UQG7LEyt1ig22tiGk3yK5sUmSWkzwwwpJK11fmBWy5BUVbkbFVKADtqFP4HNvkSsTvNuCN",
  "key3": "2X94ffWKjy74rxzxtzmvC9yPcR45D9UeQ7TPwady4BNcJQARTFJuRJ9sxZ5pUDKoWFZp2GCx2mwhPdQXkuTcQLN8",
  "key4": "4EZSzTgZizCMR9KvDFxS4NuZA4XS2Gf19bcgZiJdh7mot8iHLkDc69jd4KtbFPuMHPgvF88UVGukdNRFTe4MkDDQ",
  "key5": "2GxSw2iHN4zQ3vvyqtGpzx4rnTCaMjaMVUPb4H3ZCvkYwpNB41ER9Ckc7jpkTaF4iTywo1sYouPNiu8Ah9fMomKx",
  "key6": "3cviQQrsFog9Ar4g9Fnfg58hgMhyHgC1dNioaj4xoouiKj9WpcDFqqLMFKz74GPr6JuRtmxMpQF2Z2C34cT4yEZu",
  "key7": "qC6nvVEUg7oEn5WKTX43VS3chST2FVra61Ppv649d5HwygsRGjun7qEpeXRytkxbLQPUj1AnMW1TKKiZpyfpspn",
  "key8": "4GGLGoMh2ErAptCSYvXheHNtgcJp5WZW5mg7ZmTuUbnCg3brAgCMy48D1j18o1fWub1UjD6Yq8QDNWDc4LtQ4fo6",
  "key9": "5Y9KyVzd6uwMgun8yJS7gmyvsocd2orHeWtvb6FGRRXxgjEztyheQPc7yURWeE8e2WzLUsDMR6ovzqeSWurYpbRo",
  "key10": "23RJ49LWf72dKQM63u8XxFQMcKbWMexMgQVS4K22hBr6bgZxqPdHN8JuFBQwm8JDCbvfxVPYAieAt3zHmDKutkv7",
  "key11": "27VaED5cFe9mnBYkqkPYr4G3AQ3sKgTTRviMRJHYNLVC4YeYdT5FFbSQio25sHePHGG5Bwq2rtRo5nR3PB3FSpHH",
  "key12": "5maPzMzsA2Exi1sbu6NmQjbkeNxztEHnqTjkRJ5FMc8RLCXxR9YFjt3EPmqw2UUHv3eEcWYaEnaABTj16AMbkYD9",
  "key13": "5hcscqw6vupfJb4WXpwZ3LbrQc7vGC8UWzBJBkqnb8mnzqbo9FNY1wV3KdYuc6G2u5puxgZQpT7wLuLvt1WRmP3Q",
  "key14": "2bWiPLKsXhsnm34qShA8piSHubKDd3zrwZoocYYbAxZrweoMFnKKL1of4zY9PnqTSLZMuCfF2nCBTxbU2NMg2djB",
  "key15": "TU4APqBRn4FCYsLBhXTazXiXK3Y6xSwNaWWSaaALq1kU9ne61oVUtvaUuv6rcPURmZmoQYFAowWzbNTr6KGYdDe",
  "key16": "214KSS3fdocsUk8NSRHmn7vhngDvF9QTfQvje6EN74oBaTV6zLxuDwUY9G6p6MgGXa9zLkKommYrXEHfDib8QYwR",
  "key17": "2wbgh9n2p25i2nEC4nvogCUyUVaVyZ5sky6kcvsPZxQZDNt1dEVYVfQKTV5eqMEAQTe3UD4zb4oEsgXt4FFNzUNr",
  "key18": "23H8Mfd6ocosM1ocw4KB94x5YQx7SDZrTDJ9Yb8MSuYXTfs5bVY6humvLUKkkvFSJJ2muGmdt9ZFB51ozfv6n9c9",
  "key19": "5dgrFLbm9TEfCtuGtjKgfizwcwvRqyNS9rTjKDVvSwdn4HrJPwpymNZDSsKdsJEMdgjtgT1ptpJLpV6MFaCNfjT4",
  "key20": "53LzzffF2a6ZbKmhQS9rnZBugKHrzWTETHLTr2YrQniaLEWaCi1wKAoy35nWmvdAWhd1niyTaMVEH3W6mzPsUMHs",
  "key21": "4LmExhUHgFpehU4cLExDaqr5BtDGQVAb6WxH4w4bxVUfuh5ozFv8NQWPz1F9wKUHtJYT6b8cHVHka1ot4ejrYeEi",
  "key22": "3XPtdRvUeYVx2qf9HvPJF4q32f6jfKch766uGg82YuPZEQ7qLLy6jBgQwLNW5cFYs1eR2K6S7ghJxw4D6vPvGTda",
  "key23": "4GLGLiMZkbBx5MyT3SFPUjQs7margrCqZmEaybuS7hLs5GDMSTS4nroyE33g6qmVy1b38f498z7njQjMX1KjEwE9",
  "key24": "6vhpj6kuEZAAwHYaoA4FRtXnfwseR7uFqfHv7mmDehPp8UiFmH8DzcF3VGhHFNFqFvzJqnhPv4kUYyDRgWrTENe",
  "key25": "5ccjVvsxas91FEmxPYDFdmHcT8cbr7YE6145ZrqF5YE4cxJ8V1Ub5qmEurqDRYCqhdCfVQiUHpswnTUkD9TEk6U8",
  "key26": "4rhUfkbeqes93a2WGjjm7794GxT5RiZ3ZZqzneGmsP3cJ8Z7R4eqZFoL6NPKQzuKxAfCgFGkvwTE8juk8YJha6pd",
  "key27": "5LHoCrfDHhrxrPBF4nbzTMRUCKTRtudXLMfR21f3fCNM7tjchB3pv21mugUMQtzimYSahaq16VSLYHHAjmdrJCxV",
  "key28": "5EnuWnNhZoabNBiv2bSqNcqZCJCfF5zTTjbP5oVqPk9Kyx2La7fzyJhQP1usTjpkfLY6rag5LQhka5YL1EQs52f4",
  "key29": "41sZV1FhsZJJ8R4pZUWpKvBxdQniEgW3QoG8eonb3aEfQrdiJpmP8VzqHd9TPpzQNRTTkwrg1RmgssjdnuFwZmNt",
  "key30": "5A1LfjUv85DEtKACAoTNKewDjYaN7gh4WPL8n75LsDh1iBQWRK4oFPUa9qMxMLqYSURfRbnqZkXWt6kYoErsTMvD",
  "key31": "52523w6JyeBRcS8BDP3fxX1DaX5Fkb2CTGQz3D1f9jD7Uoz9RGsazbUmGBZ2nRm1Hiauif6ugBvjsYSgyve9pszP",
  "key32": "3JPhNABusPJjLwKo49ppDJjBrzTHNgG7NDtsWw5iCwiRftn4xsx2z9tRFE2A48rjUv4zykBAZesuzunvy8aNX1Em",
  "key33": "P3xacH1DRm58zai8P3EUYCVsvt2zu7QB8CYf6WW5GHMXoLyaUU4RrXzwSRcbcSssinrzLi7GqfMDW8gozjD4Kbm",
  "key34": "e5VX6PqfXfbgRgnQVYEEVoxittaCN2EDGkFuchAoGMxNmgWG7Fc74kEFuJ9unqUZbhzXEJWZowJxXgaiMXcNDoQ",
  "key35": "3SVyWKQyXrmA2FvbGEAhpJfgjLPxfSaWeLNtysTATxqibVHANyMGGC6eiK7kFTPKdTcNMcpWbsaijMUNFw84btuE",
  "key36": "2HqMzw4ZMjGwtSHsTkoC2gMaM2qJLsn3cjA9KXYynRTc7tuZYKaxW1mHWAk9hiiwmCjwxkYCHC3BjPn9GqTpLXGL",
  "key37": "3cU93bFvsVAH386NVWsCyBvPrF2x1PRagQMNAaTEBygB6iiH29zh1NJKGWWHdvCgiwVhzDNgvjesfB69UEwnpDeH",
  "key38": "5p7hf6SyN1TjE28iwL7zCwa4sEdQp1EJhvxCuGrWX3nbJmm1HBoFay6uWTjTzGti8CmTdnMdVwrK1ymLDhzhoLgC",
  "key39": "2URDReV5RZ2DorwTDSXoqzMmEyBBWho66oESaTqPqjyGcNdH7Qo42gaycFV4chRz1aD8paswcmauzm2mKKYTTBxK",
  "key40": "2gpJ4x6N5MCX1ZoLtL15fyqV64EGuwmeQBqwn2SPuCymVwH1iNtvjeY8yGqRsdTe1jHma6iKMa1E1hHFtNaAS5tr",
  "key41": "4kivCCV7uPDJwJpKdtwdwQBk8kBNG1FRmk4ZrrfH6kUwf5ebYtkQTFcQdi3e5oM2PncQvp4SbAJXJ2uuJvXmQNX2",
  "key42": "2QmXn9gfHGFCjM6xftWhypxzLAEY1Ze2ymRAR32qKwLXtpkiStjWDqgLRgiR8ztkytDvUEK4niyaV1fNcW38ZCdn",
  "key43": "3tBNX81uK4zhR4zX2UHsmoufcGyf6eSzkSSrgeehvgbde9nkyWAtHVpVjp14Q1FWpqhujyzQek3gFW4DUUnyDo16",
  "key44": "2mv5CMqzjJLe12sd6v9NWjrV4Qt5RUZXrv1gxgZkDFBup57iPiRZn8up9H3S7uHFv7cnMxPcdc1szgCykCKSVgNg",
  "key45": "2BKMT8ZjGPqdtJ6yttvpBBuUQ1t9nhSmb126C6Kuwc6BX6zDkwqeKzLMRaLbBMNAu1d9SabTPXHxtWU8frgKk1Km",
  "key46": "4Cs3QzX3aC44QhhANNsmvVuErmrAbk6pPommsUNHEg5P5MExs8hXWBpJhes2R94o38pFq5bbvy5fGyvZyL5BCWuE",
  "key47": "3wk2RrLGFGiXTq5T7bKdEAvx4jRcd8NWgwyTyZXYV9Ydzz5JBqKAuV86c5y5NPz8Jcyh44CVfu4F8Z3cxqiUr9HC"
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
