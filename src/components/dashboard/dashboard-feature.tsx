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
    "s4jU8XutnsDce4N1hfEG9MerXiz4y2vNdJFD5ZUTfVRooNpe3CAafaWku6UCGhVu2g25n9woz4wa5Judqf91cQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z8VxBuuTdihGWpQqGx5o2aNqJXn5tD9ttu6ifwUKfbJVBZuPzouVsE9QYq4K2sKMngH5zkWzT4zphijnFNED81v",
  "key1": "61Pc6cDbPKQnH5JkVDedTuJQc1j63HLaGETJkodn8QuJ1nMy5z1iTnvmHY94agaMuCCFTcGc9s7a7XNHhJXkDjqd",
  "key2": "2QwYgB6EwrMzpmFTqq4LPSzyvwaoktFQkXiyVYZUrenz36jHLeyDdqBxvTLn2hsvC8PvEBcR726HbY25N69MKzt",
  "key3": "58ZLMrF3JXpKE89GbtXfWR9GtBK76ykDbUjJNj22kBGenFy6AhQke8dwEkTrWG9R9Dp5XStxegX8MBHQjXwC9UyZ",
  "key4": "LfVH9XyCvpz9sYKwLB4AuJfEDWD7759DG9YuewdEwb3hKoAqJWipnP9Ng931ULsrGSyUMU4CiCgJUqBo8jDBMN3",
  "key5": "pKrYbUVLdQW634isGJcju5vo49VfWsMwvrmMLNofm9QUJr3gRnANyzK32bfkjC7hCAq5192F4t52pMrjz4f7t7n",
  "key6": "4Aq1WaQz5v237g1d6PCC4GbwPcnFkpeMA4uJFpcXk96YLBGtQwYZPeNKuo6fjA9hk48teHSLuGzaZsP9EZXtQCoc",
  "key7": "5Gkq9cjRWp1AocUEodsTB1foyKC1XPMmLS9jnqd69ydHdWrUE9V5QtFMHokgUn8MzhsrT2mrHtWb3TXPuvpsFYW8",
  "key8": "3CUw4vzZh5wU1pPJZgR2MLcWfst3P4fEceoZTrecAjBJHGBs2Gf62Btd8Hfa4Fzh2K5ANTcPro6R9ML3CPZAwL1v",
  "key9": "KX8nB761DUMFf7giwD2RKJAFymi8QdLgui5avJZtLGEP1iyamBUWuwuzBXF968YF315T169bF17mjjmTEmgB69U",
  "key10": "5mH7g2TU9xUay15rfi11qccEEQpRDEs9NCELDcEXrhKiLjgKXB69tvVkmuJyURYXfpDrXy4QxzFcbAACP6YfRSwi",
  "key11": "3vkdn9Nc3vwjsEn3pU6epLyxbfYP2pocPi5Y891wQhbYbsrFuU1NgiYkHHejnPzEWGKR2opphrBTmuHhchP3VLLJ",
  "key12": "5taVQC5aDSo7aSiHcS89aBRDPhnHguhY1sLRBdyMQsHR5PveeuAS17jFahwU8Dtxsxvczft42C1C6WHyGN4sNDSb",
  "key13": "46wm9xgwufc9NVqQsmiVwhM8RincyZC4pyNwwVnzcdk4rtr661D9JfDGkV2nWjPtAHLJSULbCy8suEnwnL3msHh7",
  "key14": "2m49dzfxsPRH6UthTGXwq3PkpuBAKGFaLJxi3Y9KonukNHfG4Yqj77bSf533s79UrMN3P7xVvZRRL1ySdXZBoQZs",
  "key15": "5SuoKokisebiWrR1WJmUfQ75GMNCyj47b6apuWHexGgTxLraKscSyZoeoqCEnUeJChX557x7CNjH3D7PSXSkaHXD",
  "key16": "4Hq1pNXAYQnpWcfJkB3FT5B4McAKwcKcpcioCyEkvN9gNb2xKN1o3SfRM3JEehQop4fUNsJuvRZzQdn7CJP9KgDL",
  "key17": "2RPvUz26BjC1tQLEWuUjxamQDLp2d4NjKKzjirq1ujmPPzaf6QxWXWkvss3HdRg8xx4NggUCKkU3KVcb18eSZYdu",
  "key18": "4bD8jyd461HNyRNwCXArbVDeCUeVzQrUaoJekXQuqrEoeqw2xT1mQTsQ8C683kgT4i69vNdRqmig2cJySMGumUof",
  "key19": "512FAdTau6bQopgnKSgcxwcV7cLiRqRk4Ka7FLHWEwkYtq3EdUtm2N6YRXfFB3X7u2znPwf1PfEigwEoxzCrMC16",
  "key20": "2QFyGYdpMR8D4WdXLpDrXyC9yjPk8xAiFcU3C63JwJuU9eUdgiz3WErn84SXRDPEX1fGJTqYKunPdf5nVwaQkX6w",
  "key21": "4Z3xYv6K6QKCL2meoLAM7BHq6y8Z2TakQVXw3nEoRRujbWywkmtR2DGHVoMdu7ksUYzgjcym8HD1oXLc27DjyZed",
  "key22": "5sGtRDbw1M6SZjUziL14UeyyX9tPZm9LJftHnnxaHEvhbxPJYrn4GH8cvdGT5gXmqqFNAJakSpbhHYHVmL2YxhmN",
  "key23": "5jpwbbZ1fjrowXsRzSybS6HbaBA37omLLZkF6WdwKdkHX21jJDr2fzfSU52JrPtg5pQfJ4yGTbWCkGjjBMRFytri",
  "key24": "XPT9VXysJnJsaqw6cBXGUepjCeGiycvdLkoNvu69ngcFtLQwo6ka9W6v6sFobcyF4C9Ay7USwBLH3d9RW2TjruY",
  "key25": "3rG1eMzHUhKyHSiPsAwDs2MmnvnwDhZsUpsMhKLq8LWNM6BEBSBTrwzDGEHfsn6LDLXZPvqpdrCHmoEVprM8c5AA",
  "key26": "2bznjsjancJFNUNRJWmEYdwZ2NhEkCksQywt5aZzMh4TSY4SQEDe8xfSEGtivZATfWWor6U9uZxRHP1dtSZRbb4o",
  "key27": "dDx9cdS7ziNUUuBLiryiRPnwgzKWLg1g8BpzCfTTXUWvdMQNLqSat6shPfEL998BrVzasgzvqLffNnPknCCs3tV",
  "key28": "4YPC7mE2CV4UEHUTWVSdjo7eXtChcvL2ZbjtZnFdsawjQjL1awq1e6UZJsdFuL1FwwnL2XZ3gEm11zWw8r15ktEY",
  "key29": "38LxpZS3hEwnWSPXDJwu74iJHdiHVExGxBm4Ds4xnxyifxpp3otN2KnihP6DPpiWhFP8M4a589CkaECvWtYi4m53",
  "key30": "4mmM8wg8Q5CDvM7ULG3bmRhehqkms8ht8vXn3xQnbB69zbe3qenCsZ3bDhpvV1Jm7JrpDq9VyuTRp9rweBgVzLAH",
  "key31": "53fPqAFDHok5fmnUq7bRjWUPvDg6oRYCeVJzQdJGkHEW7rkknQ8EEG5XWC9UQChLbUwJ3M4jby3C4Nx2UCgp5uoy",
  "key32": "31C1FwaaARqMK3oFuHrrvsD8JhGxrnH81UREwqZjV5MHHQaW3fBh9wA6TmjFroVnGd21sCFqbBMDAnNJZAvnbJ69",
  "key33": "5S1m1F1c4iMFv6qJvPu9b8NiVPXNFpFr4KNRCHKYVZXpaa8NbbpVBuwUEq4Dd69ohgZ3UwkKkEBQKSPpmRaXhvj",
  "key34": "5Lcp8Lm9aor8DbnvapR7VWqUhRbdbHGfL1Ntf6wS5qTFBaqmSpqedoQpqHJSUxVLYB99zvD52jgsBxP69bPrmxCX",
  "key35": "4zCRyCQuhsxj1iYifX3ECwS6tNS99vWEUWmk4zztb1wi8r5mjwo7vhPbak5u3xFibSqxJ2U7wSwiK6ay2kWQenU8",
  "key36": "2F1VC3QoHqXZPy6abjmFhJpZQXhNjKvGoeaS3dg5mMJrrn5wnmAc6B2wJS7wdEMwdWxmmAAA1PCCLtcBaotqxCgn",
  "key37": "4BEcf8koqwmNsFx8LsrNkHbxgpiZkJKg5p4Y9iV2D4B9BQPJf3DEPtK8CEVPpAU6YpymitnFg8pwemMx4TwFy43C",
  "key38": "8i6hGALimQ6vN7Yo5kUgT5km4SMJaEdEkENBBfH8qL4jkFyEakSmZRqLcWF6zuNKp5uCd2TG5HES5xAu79VkDRj",
  "key39": "4rWSWEF5V7YTWSyNf5pB4Eqq9QY12zyk9rviaim2hvas2KEtwNVV4mba1Qwb87ersPyoPCzfcFxS7X7QEoZM2EvJ",
  "key40": "5z3HHgQXYenHVBkVK8E7HduoQ9rRX6Xx9BH3b3uBhgq9WvXsu4TuqiXFJuDdgXmZQavpiB7DqHjFwGSR9dyTvifV",
  "key41": "3pSDCrwFxLu8JD59C5zFHqhTkUDCDtmQAdT75KWHwATXRer8fMm3W6ixnw8kjXGouYQwgERwCgdvu7i5nnpVuobu"
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
