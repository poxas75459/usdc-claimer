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
    "saXEqA5Mj1zc9FbrCjS38LKApTmENQ1pYmuukB1Fj1XAutFcgqJEkT1XShjj1yqC2yEGRcL2sF8DcUqbypCsrRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMQpKrqjceTGFfrwxR5BqfnqMykgRsemCwFEn7B98aSyTQ59UwZaegXU2dGxZdVG72oHyqQGTZTdreHfQEZ58Yu",
  "key1": "2rs5Kv3oq23ajHQoHWkqBQBbNqqrYfraBMh3nKNNzx1Zb23k6CoteeRm2tqNF6qkTYuhf16w6VnDEdFytfEHnrrp",
  "key2": "5R6gJ1EKfxH6zzAVmQd8uhvGKJBYPSwkPKW8gw9iv65r4Se8fqzVUATC1ufqhMdUAqxH4oYQtiY8ZBUzTsqFcVUE",
  "key3": "5NGJZ1tqonehJWqndXCH3NseYY2kXwzkyJmrK8rzDgTkjUZKozWa3oXb9ByE9qwXmRi8xbVydVSDywSwtF6ydsUA",
  "key4": "4B5jYku5V3KCeWkhffKheiSQ7uokwNbDTnXXcHVj7BPRfvqSgHRYuMGVou1s7DzYSJfjSj33zvekq99k4CovczHN",
  "key5": "4qt13bcu4Hwpzf83Q35eDruAobLqsa9hVKG9n3eLiyTpJyLeaT6W33KUPVQT9AzjU4FYrAn1wL4RcYEAanzs7uyz",
  "key6": "5fktCKLGPLAoEbJCbuaTo4ZU4MjPKpxBFcbtHzy8An5c93cTG3vCQmLLDy9hMSf2eCRDbnnpNJF8kYTD4rB9NNpk",
  "key7": "5q2KrHvk1PK91N3sfp9BSJpezyBc8aLXjaJQo18i5tWCshnnFDSZbuWHHaCPPFJrnvXpP2C9vEEJhQEeTdGZT2vE",
  "key8": "R7GtugEt4XBbAi6DNs8bWBRcgP5eeMzDGjhAZAimnUsyq7L5nHAy8x2JmBWbgebATeiLTQrQjUqmzFd63hCUMPR",
  "key9": "4Hv9qrFETMHNwkzLuQNuhHyRsnk8JckzeRWJqgxNkMDsuf3CNNHrfevDTLh2XQ2T4jMxGkfn3PvqjxEdKL5wyKz3",
  "key10": "5rsnnrzBtuoWaie6ynfT8qoCpWufnZd5p4jwTCijX7b4v4mtdP7dKtdMWvBWG18FSwvCVrkcGsTmfUCmKpKEPb8m",
  "key11": "2UhbMfFDc1njyegLt7fTJbxvhaYAvjZdAdG1q4Y92RMuQtnS8jNrKdkVaKCEGC2wPXSi49RgfBB3rf6gycScPmnv",
  "key12": "3cs2hFJutGi1KJBA7AXpMLd77XZKU32wWsCaKyeSC2MD28qNM12kihQZ8pmZU9T6jAX7HXMjfK191FUfFhybas9f",
  "key13": "5KLsybbvi8Gbq7FZATfnypA6BpDiyzJumCwZ4BBkmjMm3NbkYmwiG9aAcjPJrWm2i42nuwqu1VQkws1v5tQZAyML",
  "key14": "3k7kzupp8qZJwyEPxisnse5nX43sDsh8hd6q9dGUrqVbM2JWHLVphQ3akdA5Lp3sXExSYAVYT5R4AYhAYJMEoSjx",
  "key15": "4C1E826LrzYDTW6B5hobNVy4jsaXLnSAeCdpa1Q1ZcnRd5Rq88udxZoN2PcAX7wHJFMrMpM23VnAbRpCE4aCfKvg",
  "key16": "67gkoW5mxvzTUzQWoKjQ2Hsq2m7w68CLHNN3cgey8BBFuAhHudTw3a9JhMKQSY7cfmyWdvKm7jXLu1m6z9W5x3mh",
  "key17": "2ogd3nFpSpoVcdTQqSMc4uQzo8pqoqSXhHhk1LUEXTtTog5qnmXCittKP6yGEef3f1qCHtdwjGauBhCHKSgyk6Xk",
  "key18": "3JYvNXs2zzXxrm9u6Hz6NJB1iWdHeABminFCNDXHWq3ukxiRgpYmQfn9bs2e3RHTGasHCT2GVk2ktvx9wWq6Rsfe",
  "key19": "4LhS83kPfhK6BaHFCyvfxE6FHvt7oqzCFhz6mExdcCzM3fwGjezihgD2CEf6ycRimVhZY46AVbzee4AKRmSQppTK",
  "key20": "nUUYpRZZugVbZPWopE78Dr76TMsisBZwqDKZvi2fFgtcPytf1G4XZk9dZrwPqtVzSJKpsPAPaPAGZ5QUQ6H6YZW",
  "key21": "64NKWv8fWdtodtRVj93Ppr73iDFCLRSZfkWppW8NGQoX55mn8B5vdYkEnQjrKV2ip9NG8R9X8ctenA4ZsAsJwAYj",
  "key22": "5MsoVA6Pfhm8yArzTQh1mjyU98f2efx7pENChpVy6icwpNbRytkNn1sngN7Hgv16e45qzvr8XftpWdYSTyAX1Usv",
  "key23": "yNwsFDnRYSvDLc1XAdrsajPWb3FsD26kKtJXfUVG5qU1eKDeroXSkymdcSN85zDRptJUq3ZjHVkR3sQz1A4YgWf",
  "key24": "24oFATqvx6GyA6hmTiJnQ6C6uz3f1wZHiLEVbM6Qib4sBbdWUoFsA8yUUNvywvUHEKLAKF7szVq1jA1mov8m5MNi",
  "key25": "5r4KW9csJzbDyLWgnGRNcK5VV7AdqC7T85WNQ1bfdjeaMhXVGbsopcFe1PfEEdqkHU5wX4nNpfdje463gNanWQZF",
  "key26": "2ZE3bY4jz4ZQWukMV4h8ihspnXtPdZa5u5mJcEuxaGt3mbyobMAVgzLaLjdJQ8R3RKm48qnsHZRk1EkskFLd7mSr",
  "key27": "3WUvfU3LZpGwB2L2UihTyKNfGWfAueTgbH6UWmniQJVUEVQA7zn6bB4grhtUX4f5Q4zvKkmXLMiPH7kLfovBSY1o",
  "key28": "511tJyoRLYuzYiYZh1RDM5Szh257B9acuzHGCFhx4rnDwctDumvsrJRVuRmjZtztPKPdYyiSWmrqcqa5sowYLYyr",
  "key29": "2aokTy54XbPRDxF8WHS6uHv33SmpKWm6UTxcG78aaAmEX5qMD4DMxyT9GTVhjrEif4wxtpT8yg5M9sdSySjZ8xD9",
  "key30": "2vUXGbiw4a3NUK7VGuLedRGRUv2kiA9zk6RJ9vSzK3bWZgUec3Rd1aRqKihosEEvjH94wA8nwJyP2ua7ri8QS5gt",
  "key31": "4SizrZFxh7ZFG4b6hcmF7ZXpDuWK32KueNdNEi1U84hc9tX63QnE7t5FpLCunqrJGvHNWci6nfspmkXPZWaAJ8w6",
  "key32": "VfAp84mBe9j58wit6NWVmCHJdDhoGUfJhpGhCE1QXtDhpLTzw2GaVUdSesQ1MqwVkoZTbUJKt1ZTtH31rsP3SGm",
  "key33": "2BHyjxaWtRm54pSq87u2RZEEAF4t3gUgz28DzP7sfyfPHnz8WrAGBuWobdtk8gxAxGMPhiQrXgECoRVYV2QWCNfM",
  "key34": "51pACuacUR4V85z3po6RmquaH1ayHmG6S2R6Gog8Q356LDJBiaTWyAhDJnejJpWP2cBLEqd6YkEmjyjbUgyiQtTt",
  "key35": "oKGUzBJdvRsNvD3nwGvhnzGZhXphkJeQv4kFNKga6y4WnMpR75pKCkR87nJRfaTzcB8WhS5ZVSf3UK7WG68zNxk",
  "key36": "2UQDTEGkyd533FoCD6XvVVfd8FzGbBgDcJFF9cDB7AQDEiKsEDPiew2m8QRzJA1iESAk8SH5uZWKRXAmiWeC6GGf",
  "key37": "2BXAkvfeMDLLC4FnWCXanCp88QuJjoKV9RH7MC56SPM6o3hDk4xVLADXy8a3tQCCuHATcShpxdpoM1LGHBWMtCiy",
  "key38": "2ccSLw547whGuz44bFx2tJaBFCJc1gZ5KMfiC1bXui55wMVcHfD5vfq4UpmAc5aydiEfXanG96kuyAPbyTNN9A6A",
  "key39": "5rZe9azuwKbad266nXt25SMJLHyfgqMEJ2yys3qqZ9if3zE7EzRC1iYsow6jbMfbM9Q1EXg4HWvrX9Eqg6Ffmu7W",
  "key40": "4nvR76hMUHsdgngWqRx9J2o5riqxbyV22TeX5FEKPZtkkxJm5eJPhrUpFgpdbAV3CVNGPzPPmD9VkHBT3nwWotvp",
  "key41": "2uWVxY61tHJaYJXEHF4ZTE2wA4hDeYnkGWg85GcNhmogUDEqRLT5PqgK4JM47vfPj1M1JoWfPFNvcuyqxkRP6FN9",
  "key42": "5vZUN6ysno2JavoitK5cxuoL8w87tPUbSZ8vXo5xjNEzXcd1fdTBPEGAmU8Rm4ycNSToWrxcgeFed7RMBEmUQocn",
  "key43": "2bzNK6FQrFFTt79bqreNnfyDNTnVw641owWWCtAgQ55AmoQPVscjr5ojVJiprBEHRNn7Yxp82HEQzkmzXK1vVTUz",
  "key44": "3pmQ7SVBGETbeHVaKt4PW3RUmtAa1bsbd9xH3kSJKvq5eQwLq4bWgbjNsBeYCqfh2Dgnopx4SWKR2ZA5xzNZSkJy",
  "key45": "5yLms7quy1d2BbjBZFp7yry8ujcsSvXcy3XhrcmRgyLu89oZ2MopNVv2KsgPqZpHHGxyGvwup3GTvAN6oSsEzcd",
  "key46": "3mJMeWCkQei2MAqCNSGUG7BMqUMMsPBJmE6BkqPAQLvtnM92UofCsHPgT4KASTAMoZYJfL46HAwQbSjvF12BqkoJ",
  "key47": "SM1vb8YG2pa3Muqr1UiNbz2CTxY4SqU1WzmCUngxZNc4aqyTjFHyGVTkHpET2SDM7qviDzhVv7K1chJXfJkJvAJ",
  "key48": "2wCLyqy6wz5kAct6TEFTxCjeTdoyj5F6KVDzEvn5zJRpCbgvauJr1kRwUVqmrc37A8KswnaNgjPtzMxS8zxggFaT",
  "key49": "wuwygdfGYPiATj4mJNGWdYxvq3FwBstbELXWAuRXdAF5dNGznS2nibMsWCZYNiYrTEWNfrj5WQkTApq2d7HxavY"
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
