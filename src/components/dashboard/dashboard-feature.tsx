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
    "of2NceAHgjRtzoaamZyA7c8Jj8HERGXSPquMtN1uKzXdxNH1qYMA6XhF5ve8xQd8YcFFfR9xtzQJSVkovgZpBgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SxbDFxLtRVPshyfXoMU6ucRPaTMeXz74yG1RajXPXnuJ7qVH9CKPQ1xqaCWRGKXqjL4BVRK8JeqAxNU2bSML7Yw",
  "key1": "2F7hNDgpvSuLG7CTiPtoCvrdXzwBbxvhemmnJWaE8bktKjQgXJY1ocuittRe4GC5KiDQ3stm7mPZfNdxxzWHWXSi",
  "key2": "5KsQq5rVijbNSv58PpfZ2aW3QefFNjAHApixFvkrD7V8CJ1HcNV6UeAaL3Wm16Wd1cFG91AcTcj3FcQHrhcKRNN9",
  "key3": "8rpojBcrPLrr6QSbo5mFV5mhd78wa3kcS5WfwZ9yaQD2mXcgvsuYmzYmj52FPkkrZBDkmZhKwVrKgCS2E2mSRTA",
  "key4": "5zLxRuaBugnN8b7iByxEpm7Fc98RcYpfbQMYTKoLysYN37m9oaPEJWY7GdSghkxic1r3oSdtixjE2CzoyjqeYHvN",
  "key5": "3QkH4eoCBE9waY7jPipimHm4tt2yfHDhnAKTLPcJQLg8VwC3pCtVc38wjzVUtG1DzTWwjUe3pU5AxSx5LC6BFrdh",
  "key6": "5wfvjf8onXSXFvFY9DCpLTrPrkuFxzFRrMoYTCXPAJYZmAGvpvDqwDJ87CXPGdR91wrTcnG2Fq9tfa9BQJvyUzxA",
  "key7": "2VfhgRTbfjPE33fFh7HFAPp3tJFK15rjCQcYJ1QZVzFKyz8m6u6amp3QL3jqZo87YGaAq99SEJJzqU2zKHfFu2y6",
  "key8": "3k3chdiKdjMWcUjPP9srgMHdhfjqhPUH9ZvqHNHaPaVjfhgensgpSEKyxnYvP1xLPNAyUg9sF5yTx7cHDLFXKWH5",
  "key9": "4pvo35Qny9rQFsw3gS4rVmFfqY6qf2VSrzKAGXmXMgJF9yoFDKpcoWkFmWuFKg3ckUcu5ToXjHGpakufRPsnXL86",
  "key10": "T6vuEKo9tc1MvENxitgyLEjapVt2jKSNmqdVGQjKLaA3PtXzTMYcNBH9mWjXrtAez5ePAw2f9p8QB2eRZXva9dK",
  "key11": "5D1X3WJFxpU49uMYYB3jnWBZUMvMhBm7G1tbr5HQo8MKsdBa5FfTumMACMd8J9zvv7iASYKgNPsfDaPz6jFC43Qw",
  "key12": "3hzT1vYxw9n5SGNQxxmAzu8ZYyvuAnA82fzXJtry5Rx2gSodZEBjet7TUWXpYyq87cfRTuApgT2BVPcMz4aifmU6",
  "key13": "3carCaK7AhTACJ2DsDG9X3AdUk5NDPyKrZGXqYyujgW7vi3UpdWXgUA6tvLhDhQyug4g6qin7udBwvhZiwhEecr4",
  "key14": "2gyGyG61RaLxn6zyhpWYNrwwKY4CpgxvqxRraW4s3PyHYXpW75pxwvKrrhTwB2ZtKHCps7hmkcmMZo2ckxQNeTr",
  "key15": "5iMqVA1DfUEST1g5ktqVY8Ftw1cNZRUjGcGavyanm76DmRHrTZKU36kKYRAfivpkgqMFMKSm4rrokGNx4f8si5V9",
  "key16": "4XPr2PRbJRWtLSXvVidnH4JvWsfXFkSiEK5oFa2xro6iTJ3HA8AEdLN6fJ4qPvdL4c1SBPcGuWCffe6ZKzThmNg5",
  "key17": "2uxRpAwBd5Rwh3VB46kVGK1hFJzV7U4dYSp7JrYSUvH5b5sEfKu6q4FhEjK64yNXE8RNFjkQJybyyDJqP9ahB7ar",
  "key18": "4EYwqyip4GqwQjJRQRWEWaDFPhCeu26ejkxexUz8hb7DmDxgcwTDjzujtoaXJKEZJJR2vG5fBkzp8X4sbjif7RvD",
  "key19": "3rya7ffGeiUznGt16qv7mFAvTpijyoJeumvfuPW8J46s6kN7RUjBw5SrUtNguzH54xTimLDfpdvtjZJkfndCQfqq",
  "key20": "hE2SLsxUg7tvmer6nEHMkBZsE9DJUp2Mm4aZHVyXHcSfXNADtFQ75qAJEXWu6mwgWot3vXVw9rHbDpc3jvhgj7j",
  "key21": "5u21jpJoK38juMvVRxFAdmNwFjXak9oHKq3fMZksgaiLCT9qtLesQNrTiE8CGvN2ekFFhDmx4No7qracxwrWK5DM",
  "key22": "5gNkg1FurWEyASzjq3PAo8v4XTekJ9s5pchwa6o1oVKMu3opYqGRyhofdJu7XVxqfD4SDACCHd3nsjMqAT1DN4wU",
  "key23": "27aXtreHnEJogHT6xyTsdUC3avohH2XLt1FamwMmfmxnBjcahZWhT5p7XpQimRJdCZe9xbzAn5FhEBtbAfcxhgny",
  "key24": "2m7ttX3GmjrGebR95jx4imQCjnTK3oWZfHy7GNM51Ax1dtjHEXm6T3QLN1YjeVq64FmQdwH476YJ95CTLwCjJ43p",
  "key25": "3RTpYGrDc4q268tYNJkZso6aGg9t7G6aCj8xjXKyaM534gHFoquBuMq613G5vzYtnUyHkSfW7EkmhouyB1sew9y",
  "key26": "4Bk25AzxofWkmprJNoLytz1SnT7Gq2jF1WGNQXQp5pUWZJPs4uWgF1mT3BFQ95JKXNmvdLaLD62ed2UjNQHb2BSH",
  "key27": "2uVYT3Am1zeF5jfCuMxoLA3PUGy9zZpqESZo6rh2bynP6RWCKqcaJqRMg3j1so5S8ne76guSvVZmQauBghD9QSn5",
  "key28": "StSmzfSuHpAUdcydj8asxQmhdD1frBFX2mLegTr8kwSJoCEnwg92B6qfdMSVmRRvNWnSUSKtjzNu2GeBCfTiB4j",
  "key29": "4nCfy8fB4km2qXLMFHM3aTHqujqaBB3u6DRW2NcRvDERxGWxHqQDpJCw6pSACQ4KcsfyGSWiDYNznLDXiPVpJ6dD",
  "key30": "3SKLX8NnRtEUdBS9u2hN11UFGRRMEPiUE1mKVZQCGUEer99Hwtexg2ToVzWvzu9khWdqUD3JCEtnq7JwSMdgt5a",
  "key31": "4LoUNpcru3Evy287UdeyaqFxno53ofzf5vAnHyXoZre4RqH4xWzbwYHSGaTyJe478572MHV7MhugEv7q4FTAJgcT",
  "key32": "3nYha3Y2focpqMtZhmhGJb1rBHBWgaoKTY2ucQ9qJiFtrJzbr53sPzRby998LtqnSkNsnMeTUgQFFCfnfkNMHQVH",
  "key33": "7y2iNpwKGj8TaNQDTHYyJT1M5zG2ME93j8B5Lw5tJvb9sH7JpCBr12hVRvU9eCwK97fXdvdvsxWJgMw7y4PzFFT",
  "key34": "3M4MdwRmm9HL4tfo7hjoZF8pRNWbUq8A3BedM5fu7rNh2fgBUpMHoGuMzmirRV22YkBpyvn4hrpysm4GAnZqDycK",
  "key35": "33v6AP3bfotdhU9JCBm5YoagjUUZWbFRp6Ka992gtFoqfib4QQNdHckESDReusCdi3QvYuQeT9Ai3JStZiK9r8Pp",
  "key36": "4vNjENHZGaikCqjhrDjPmSds8sapGEfgmybAFhqtfTz2WFYYpY7aKcR5eMixcxynH2rYJiHaydAFbJ529XZReYiP",
  "key37": "2nfQxri6ydpqqs5FmSvMAWZCjVLyf8NfrCVuEhaPbb4U7KMYLteNm9z94oij4Ec4EEygLUADj3po2gQxLzSNBDCP",
  "key38": "34KAkYFDDPP2NhMnEht5bpxb1cVRqn1ba3mF6TRjYCRfiT9uuabYT9TyBDc5XBGBCp9Sq5L1ULfd7XsrXQRL4jGC",
  "key39": "5PoXP3o28qhgqchZJXyQH8iSnhsFDtm4Yip94vchHXqJp8BhumcDMLyWRm38pe6azKPAtdZkt1p9Xm8y1pM2B2LF",
  "key40": "BJNaT7KkNBdMeYzBjHYmX5FAbnyobt4TKKNUHx9bhWJHj4R1bizgEtEB2yWw1mjHSDtQY8gfRfAPT4cEEyM1VuB",
  "key41": "2jEeXJXX5YXJrVdBKaG3GFZwAiwUNdQvzgb3bq3zEqkLbE7CW3XuYYATb9tcdKYcf5sw6GkL1suzkKeTDSpM3ZAd",
  "key42": "t2g6uwYTdPztYyy9SCfusa3D9QgyVo9MCaLCE4ppeeZ5WP3G7wrCvtNNvgMrTceMX7BkVB7d3Ji9zmBuTYEAffN",
  "key43": "5gpKtF9Dfmm94bjwX9H48omCTmJVuy44xzn75xtbCMdQcS5a9noi1SkxPEPpu14u7ZZJVDPFjdgpVFDkP16fWMCa",
  "key44": "3ykrUr4SkwJcwKV3uQdQtYgHjaCzEKbL56KHr9S3vSzK8rzUz86ZdzjTayHgQY6RUWgFT3tvEpsPkchC2BPqGPDP",
  "key45": "e6tJot3pG3dmiG82bPsacGkscb6a456Y41gZzMVgCMwJWpXaLAuyMyTZXvi6bmVdGvq8ya9To2qXfzrTtAvJFgf"
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
