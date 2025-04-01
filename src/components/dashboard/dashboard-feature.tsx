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
    "4J8kCdenMgWbJX1vJb7qufrqmZtoNu7vE4RqhMXWXH8ZhmZPgN8gram436uvGuJqktWccFcBRhnUzfwcxw9RbaKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTmJHFxy8jXhsCrYSWDjBbgqJMEzcsAfXiuCtk3C5zWrFr5dYx8TQ5RjUnM96nqv3mQqZTrxUZNKiJ9qKLQG9o",
  "key1": "2EKrDi3xuJU78N3k89YcA3w2Qc5hYRBkQFfKfYcRBfdRubQXimGcdNMPFRgPJZtRp5RXwNfZ4iREDikUkbbiw9iB",
  "key2": "3GLNNQqY7oHUG4NtKoBZiCHqgbtqSndA6xqazUqBUT9xJGr4VDCrrauRewhxsZVvHNqyZ694zHU76krP7o2Y4Mfr",
  "key3": "63tN1XJtzcyqoSxF8FND4wjimv8Qn1MWGy4X6XHR7kh4i2DdV4dACJKtHFk3BR7aMGXtDVF8PVxDdAMcJdWCh4CS",
  "key4": "4PVUjT2aTefWVGJxBSaDRLUkA8MLurMBEYNK3mzT1CZMqUTD1mJ56X78UfMiSd2RBq2cukDvzrGMJnJ4re8zrVMv",
  "key5": "5s1ieuSfFRuhjXFJPmSD1PEiDbrj9R5BPqxcT6BeBq8zeWxbLhdCD9D7LA7qmsor2wmoP6ivp1ZDP4Q7iZHVMrSg",
  "key6": "4z8RayacPWF1xsRw9v3NSS5kTv9g6NL5njGz4DqfTnNHt3TGK6KMmDL9ro4wCdkHNFPBpePxHT9rmVGsS74S85qh",
  "key7": "2n9huSDRAzcDEkfYQT5dNYfiG4nyVUNa5fvdLxrxHUw2XUh7MooE7Xwhmzxioh7xtxoMASzw2Lt7G9T6zbtLphEc",
  "key8": "oTh1YgBsTHmNF8nEAwPZGsumzs49qj81g212K7G6HzLqqLSPoQ3ybHKtUUJZTdKhGKUQt9K9AneKh4X5ijrTJHJ",
  "key9": "2xq14ckiCpi1QiZVcXq6ZKUaxqh96s9FTCtfWcAFd4V8GPLaK7uyLcu7TooxSTPmkZZeCh92NUHemHmmE9wu8BP3",
  "key10": "4RMeoQqiDLW29iHqkiia4jAE9MqRLpZYDGXeP6vCFRSkc72mBxLXPxszZAku6DjivSZ6WqZT13wzrpMQEoZKCxcQ",
  "key11": "2ntCN17F17tbJFXMALBLqeRneePME9MGaPHfcr2PZsGuR8sKuMYGwcfi8iciuHKTz6KG1z7yQGkY7rNw9MqHTNGZ",
  "key12": "5rjNcNMGAXwj9qpYe6zCEqPC9ur73r4Xwr9BGeX2MnrLfjDMBNzNd22Ub1jN6qFCcREvRVD38amncqFy4ZPZLKT8",
  "key13": "2RkACNWhGn2SzXSXi55fnu2VmLwhbFsSb8UhsXap4Ht3gcaq4S79HR4mU1NhxpQXprxPphL6uPphi5QaAYhSHWc2",
  "key14": "56VZuR7oUgdYijCUe9JHg5ESrmjoBHAKPegLcCJQAwjGkr8P6Z7kY6m2WNRWWDmNJHLkBPWHus4gBp551m681htc",
  "key15": "49vPNCAzNZE1AU6MUpt1seK996HHJs5nSoKu57ZWnE3ypFttyAWFf7EU3zRPbtNGC8W3RjAVs6WDp6qVPpmU98XS",
  "key16": "47q4fR76AbxM4Jbpkvhn21tuSsDiFuDuvvf5c8WeCowoiZomVGxZ6TvwdrdMwZH1Sjmk8anJev9tBuiJWBby5aYz",
  "key17": "3oKE2nnWQ6Z9B69CJamAwPU3k9ic2pTWYXsSQP88FAmknG5eVgYeuXWURUVEXQt4ar5ZdjXHLL3xaAKR6fvHuJm5",
  "key18": "61qQ9XQ5D1N16oEDfMV8W5KWwb4Sz9CY2cHaWeWuX2ipDCGwh9wj7uvJ8569hXcasmKgzCUY9n11VkoP75EovhFk",
  "key19": "2fT9afr95LACa7AdHFhmy19ftDTkHGMn65aH334hyQdwKKgBwoVzAdqCbYAsiaSQnUVAPBLWhFrvZyHBx4FHZpgk",
  "key20": "mVHaeKoz2yWaXD4BfpKfVjtiB13qYqdgc3gEB6yCfyc3SVbXoWT2JsU37qxwa5mMxRgRqmB1n6jaoTGBvi7speN",
  "key21": "Me8hsnyaeyKbDibkGgcCJaDhCag7vBMykeUSG3jT6aWegzwFp1msW9xiC2Jfh5AHTQoNYREi53B8J7a4hW6uBus",
  "key22": "2zkBhcj48tDhZoVfBTycQBvdbQBv9RYjyMvKZk6bTFEKKfSyQZ2AcPcfcTvasRFrUpGzZ7iKuN4ySoGFsg2mFdc4",
  "key23": "NVQGPmaA6uU6o5kSfkHREGtXVdKjJE93cd7wJV8fSXUhj79jQdWvacuXmYmZHvsBM1DVMMEQ64RdanBupafCxq3",
  "key24": "2CxpQkgCrLDY9bhSx7cMaqjSVmLQXo5g4eFW8jBdJCFuAqMFRLWkG1V2uv6gKKb32DXs1aYJFXwBPkfnnYnMm2nb",
  "key25": "33nj4sjmxL3Gh3AhpQqLfif1Ra91AZD5eFzFFfT3qJZBerPKyakpAdCVCAWRqUYpHEoMXqzcJV5wZt3f1hjyVATT",
  "key26": "2ekgiPHyH4MNff8KAugEuwLSRvs78yj4iFGfDJL7tcYnoZnA6SAgfuaYd6WzpvebkCZZvGfneqfxBDAuDUoRphdT",
  "key27": "63p6yHs4zpoQcHnKmkCjiGBuhcuvrrwo46ou4e4kLmspS4qQJt9rBC8pX5AQdihDoYYN1wDoMFHDn2aUu2sWyrT2",
  "key28": "5qKvNcqaQbCwvzVxFCC2AGi6w5Z2GmivQpYj7iTZxEiYeAup2T5qBGbgvkGjyfvTfMZup7fj4U7Lj3YfLfuPdu7R",
  "key29": "5ahzgDT5twU4cZw2Eh9jz5Teui4EHXXymBoLd1YRmyvwZMT8x1QBWNH43wczQx9A9NkZXBkB3vcbbSNjyk5ZaWBU",
  "key30": "3dnxviHc7oopKGpSsbDdLiVDfdnQqHMJcU1Ci2wTwXSByNJtjqXr1UWdvoDiCNxXwDC4tTeC3WoAd5nW98Xj2bhf",
  "key31": "62ymiARdLzCBucJnPABvsbu23gubdmcRoNhV5RS6pt9eaAwWwsFddWW37T8ExXdAGvbk7qfQ8dPN2fST6s24z6p6",
  "key32": "1WhYAfwcJYqVCkqSMjdEm2xK6eQdpfvWevTCNYiLEJVenMsgDy45Yvm2cZZsvZ32qCVwNikC7hSN8WrFnx5FzTk",
  "key33": "2mofttqdEbrRtsLyewAJdiXUgziH2nPaxiYFXdX2pz71u5ecnVkeWEvy3gGxf2JXJ2oaV8KFYUjbHiMMxq389w5c",
  "key34": "2v1dRWzAKFca42nWTNjk1sroftG2JFDbaGFP5akL17R8ZGeQwccRmQVF1fbtSniLt3tkqntp94Nw7Gnb1t8cNbGS",
  "key35": "2yrdh6RLdBiCBbnnqtgZPgVSNL4tY1U9t8jvKfJwBaLsntMSMAsBboY4EEZxjSD31QcgpgJrcXmGFdCJu1BSxxw3",
  "key36": "3xBioxPXpuvNsGXgKGqd1SfE5sNqu67oCP2rDfCL8c3YaG3h7KQZL3AFwvg18UweNLFqr2co5cCUDLSRJFDqmfio",
  "key37": "2zqivn8zhQkocbjomhwRMHHBMqCwhurGJSKZPURadm4vKB4NRfDfvAJh8VPdjoCPiHuPZPFZiDXtnzYzwRVam3s4",
  "key38": "3Urv89Zg9THzuc7vcVDX6Lco4yatJWmivyGBCmYqoiefsRCKsVNWiZUM5sbC7NZGobBYYivSx9RiAm1trn9sDeVY",
  "key39": "4VH4BgL7Vki7Y6hQFr1vprAhxGU4z4RBz3FL19AA5ee5VQS4roEeu2rY5SuwM99JQUznnBGZymG779BsMXFYZsx",
  "key40": "4XBvhzMPqWXEMWEWgBUyng6ntsY1SHPFcasn7mATT9PgaxmzNx3t4N8jVjJ1p1668XnfSnYAAgcqNLTxK3tDzmz",
  "key41": "2SadPiq6kQEydRjoPfpBHKZdaUjjbs7WAaLGBKJ65BiqCQDDi65ALW85cEYvdNP6ivTNkJ8sftUQyEnaznTFxwZb",
  "key42": "5USLVTduZQth5daJRx9ZJLWyGWZ8JuSnJvceQz5u7MyVoFhVYQPWJkEUaphbuVfAAquyty3xTUvSUTCUHhTvK65G",
  "key43": "49VridvpjJuHgGh1csQ6fvV9v5arF3kRCGDAbJs8cojG6EVjBN8EBkGTingqQCsHQ9EZoAFZapmdvu8rbHvXvuej",
  "key44": "tyb817wHCGYxQgpR2QMGDZ5ZAQQQ448H97nYwukGJZWj9yZs1MpFH41qkbbcnpKcKrB7ZDJwDiKAfEu2b8eAmNR",
  "key45": "24Q2BnpMbUnHXXTvyMPacoySRHP5t1dyViQ9Fu8y6R4pdHwvRfTgPKZYc5auXy5ysApEnMT7WfyRkiyVPLEUzCHt",
  "key46": "4JDrBZCbmpzPQLCf1MpqRYqdjHU3HuaJWPhW9og7Mfg7efrvhPBqj1G5QyiuDAqZGpVMCKVVv9frpGKF5ATYwYyL",
  "key47": "4dUpmnDzPbzotWPFfKg4FcVSyRTvvyeNuwBdeKC46PYm9rYjjVGP18VBhvTTL4Hr3zWJFeaE2smYQAjZxS3SFqJs",
  "key48": "4NTGVP4TbqaqRhJz4eSpxmAWoG6mMZ9L8uVMvgVQJgEK1hAtqWXEfs2f57bR1Q2wptNa54bzNbjnmx13cbTpNtbH"
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
