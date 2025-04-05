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
    "3KNLHMySZtKRESaCn5DJ4SgfqrDvNQ6hPHScMnJ97jGWKKdZD5skUwdaYSSHaZ9MXeAciT2DpzauFBW4qHponzQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F1PZe64ghQALghBaAWZN4d8r3sXbTr6tUhaLSr76gZfiNfQ4aqe7pzxL7ichu8B2nhR72WAP28TdqM8m6moAL4e",
  "key1": "2Fut73oRFfHX2jyonChKcd8NA39dY66sye3TzxWqgTNmd17dkFEGXYyibHUzmzG6WDMFKfi8jSXb2UfmVrpHrQUj",
  "key2": "oR5uuKNVE4PuJVZBrDNKw8cWuuo3DkLnoGNQwfM1jyWq6xKyM8YhJPAs4V34NyzK5VAN2AAhRBdRa1StxvTaVA2",
  "key3": "44pVLhKDTkd26NG7KgBnWSYCjegnb2eDtm5SD2f7iYxisCeU3ABr72sD9SYtWZAH3K52WAs92esL7bpsGxUyifYz",
  "key4": "5heufeFta9mA2ZeEwnbDSoM7WSqeFT6AaNE9Pupkro3e9ZtHgfporwQDqASaAsPK4WMEfLJDxnbfmRF9QMp4QcVo",
  "key5": "46WzJJfFLpvHneMehFg6VKBXuADXkYy8Fkj42TDPr2FCh4ketbCQmvETc2HEK8dQJz9tyS4QN34FE2CfQJbvZ8aP",
  "key6": "3HXb8Y5iRg7yEEkoyu8uG5D7RXQze2PsfhX8XRDRGCYR5Aa5V315qrw1XAdfXGckKexp1SjUYED5949WhX2FnUcP",
  "key7": "596FJspemkymVqCsS6S8XJ7J7BbEtmXXkUGmC5sVv9rUENogvrFwPVccGwi8dP6srEyW3vKJtvbptXkwYfxGpyzw",
  "key8": "tKbkascpAn6b28uqKQrYkrTZdifi6kG9ikvk1ZM2FMsJSUn2riMiDNWzrxEXeLfYx9XtVmp82yyA4a3yrgHDmFU",
  "key9": "4cVcULqcCCq9HpvfpaTu9PEpiJUgbG6XQ8zC4vh6KDoDGCkZimtjSwpEhW8kys6eZnZ6z5pdqVUMLSFhed16WZih",
  "key10": "St8t6vSBdRtQH9UeEKdsdiad1pbfJzejLpwbWuJmFqZacXiQxqMG1LASgTMNJjU8hcby3BpnxL18xaVpTTkaA9e",
  "key11": "5qH38Gau3FEqZWJo9dVPADKJfz7GGuM2r3SpUbVPfxD4V2ot4NPB917DHZJ2RsUaoaWaFGH2MqZwLAkdHZz1RtJD",
  "key12": "GFeDF5CGYsgheJGwaJdqa9PpV4MHXGEZHVPwTd6zDHust9FNAz3LSRBvQZ3gdAinFoicbSCkfrvahzQ7BzMwfQg",
  "key13": "4Y8eVHXYtAt4auDWwJp1qMvfpq2FpZNJgU8PnEeSufuNttTiHmnFaRbRJFjjYTn5munDWJg7Qmi3j2A1N8dhb3GD",
  "key14": "4Ef5Uskf5SHL7WegDNFooiWmYNtE8f7hbcFCCXjtuvUreKEqkttfQZ3V2V4q4Uh8fB5JP121XzvPX7so1Y8Xxwhb",
  "key15": "53C3k4PE3GfoNNQdDPygFrwLnHoGn78zMKGTJQKYSQYUJ6tU1AbHMiEdPwTfBPbZVxVDMRZhdqtrsFRFE8odKacG",
  "key16": "3oMcsgVUnpFgPMnsTbmknrabaWmW5YvpvG88ykPHYgHZz4AiRfs9qWCdYydZG4dHJGJY3VimQwRTzKWRfHfKtpmC",
  "key17": "3w7egwTKXxryb9xibEdYVKCmpJrPcwDSgmU82oXjozht51Na8EAmtjfcFmHJD2rfJEGpii4d1e4tGzvHN3hd6ZKA",
  "key18": "5ZRA1r1f9R2xxeH5tiYvhZGvg2Y6wHakt27RjCQ5FyTxrwCD8CYArVaUS5hiVa9ncbaG9pM7op4iiQVZmrbNKpA1",
  "key19": "67bukXQcqbXGpnKJMUsYNwonpkGcmkAz2E8LuC9kxxGEJbP9NvVb16iJFMWCxpMemAEq36oxC77agD2qqwpWfGT9",
  "key20": "63VAgWny5wNHczXjp8wqJKAhpCQHdaj6rM51TYW48P8HTLYuKyhfNcsaBXjaMbrcvf3kKuwe8qXkG61YTMyPnYJB",
  "key21": "2cWg48kWFe41jpXcNkWGnTxeihjytAkegT8bLy7VRzu5A5V8TjND6YGJeVKkTxHwks4M2hZpaHeApaxwX3tw4Mwm",
  "key22": "2yY8sqhZSxvo96QNRNkSwBo8NQ2TKrYiv4R2uVCNJ1ZS6xiQMCgaddprjb5uUTCF814bRh9FCxgfPH9dqeK4wyrC",
  "key23": "4CKuqySsRqHEvfmSg2ymttABurYZTcXNQxaYUis5agxVXdoHPtTBVytAfb3jiGLr22V1TuoWN3QoqY5dLxWECRc3",
  "key24": "3nHzP79TH4QTGjtVgNxjBEp6xwfTMivMLPQRu3whfUUKGysHHm27iLzHqmiQL8EeqbnYG8cp89sFfScxmvAGKbQx",
  "key25": "2pk5ccvLg9PcYi65UuYohFPS6BcLJDCdcG7hEyUJ6xpzonrDumZoTWYipf7Au1UJQ3sKoq8MxstCURVkvxLjy3fW",
  "key26": "5QaucQ15FK8iQh5PehVh3fMTLxupeVio7RnZpeXNHNnMQFs2QoEMYVM9a9UhcCQppiRwHgEnGLvSDdWqEezDaueb",
  "key27": "4C3ccatf6jJx8bbWi1iJP5VMJcSM3c5L78958XGN1y877kP6YcJA8WN5KQSxBRXvK3BEgQPm9brGracCxXt8h9LA",
  "key28": "2KysEP35Gpo3gJpJXvSDUQo1pfMNf6myznK8FRQ6nJ7RMtCPxDPYfKSUtTTiPD9cpPvHdJXqCbpexG6mnNxVwLJn",
  "key29": "9kjy8uCtYfriz1iBU6GMDDy5zMfE6SBRmFAnsqPXzziQS3wA7JyPHNCVm1Rism2faLJN3VG7ComPL3kUxYfBPt1",
  "key30": "mmNhbjRVM2ksVTj6othm9v3Hm6bgu3rWhrTaZPwrETc5whaFazVjTL1HzSzwgJakMKL7dn9LD2v3w8pttM58o1V",
  "key31": "4SHB54s1TkJ3GXNF4zqfXJNTgjzWgKqPT6Z4gZWQqi8i7Y5PNKyrU42UvfnwYAoxNpsMfSBKzneKo8Y56jrEmbJV",
  "key32": "N2pr6eymLW3wR2T6js3uVBGXQiYnTroHJB16S2di9gAUfJfCyNJjYjPWFi9oyqWvY9i5Q5CKFPsZZQewMXg3hta",
  "key33": "2ZdLFKuJswpncjo6UPVEicxTUckmvgtEhLaEn1ffAu14kjsSnzBVas2xaCow7BTWVjFuDxxBxFAP7rFnYnMZAmah",
  "key34": "4wxC81wwbxL8oU2T2dhTUcDDgJK7Dc3daTrqKj5GyX54nWKWSQuLmQSdNcCzBEtgMdxyMK9Fpq7f6T2zMwuSeRiq",
  "key35": "5P41RywZfAEnzQ3cmTnTFDKU9Z1eoDC8c5QJC3xwtpeRr5TJkg3EanxuRYh9kTKiFQcPNvYgsTpG7KdXfx3X4ReJ",
  "key36": "61QyvrhKzPvpBv9MdyJJPfP83uJz6tzFAbE5VuRc8KArfH3X6YYYSddDfLzuNN4NaaF2aSSkZ3qAkmucgC25JBNT",
  "key37": "5N2HZTrZ2s1WPaAkNjGVbGeibqrtoWmNtPRUhhmDGosPQeQ4YE5gnVNW4YQNuUbGhuj9suKYqbhFGT9UeGQDxxM7",
  "key38": "67HQXSEkmMUJdf3o2a4y2cfLikayqifyeqJ3NzMo72USPPhKc2LDNbVP2dH2aW2DA1JpQGtMxoKSx9X8Pqy1pm3X",
  "key39": "5iUZCgngKFGAhxURZwZDZ9aF1qz3GXYmgpa9pYGCEHTSMpbrJAFTcp9nmqKWMVi2PajhGTjQiajEiKxRfnZLCZkq",
  "key40": "43LKvK6LJdg7dT1qjduRuns1AsQWKtwJCmYdZLcijkavLAY2Yxr8JyZQwxuKVVZrsMj1DV5i9vptCdmBskUaKkUN",
  "key41": "33QU95NDv9KWpE6wXx9KdRdHK7xBfjWkhrCPxzxWFmn1Uz4BwkGqBEiFehvqKZw6ijg8wz7yALTGNr9hrbpQnnn1",
  "key42": "55X9gnwSH5aaqPRWzmFkVHdRq5s5Km5pkQ4669XYeM2kKNHTyW4Yi59ZvDa12hmSwuFAhBTLFAadKdNe2xqL4NnD",
  "key43": "6V1h1CLT4WcX8XBrB73TvscYbmmGEgMbjqFKtxENN6SsDe8AE4DFJqNHLCNoXAnbVBDTzio7WjncV6Ga4rHKoZP",
  "key44": "5RCXTaxoyVrKmHSedJBVNPQoxUgkbH2rf6Qd3oXAQ2yaqADYFGBokyqHNqD6Z27mWEbUePGnArxMxT1CT7tvUWni",
  "key45": "5bxQQM9pnQzi8JWYcAmnekdiVZyA5ULCvJop5U1gGJd6KGfw6FirtEsR3FnfmJMaYfneFmUvtcqSZcJUka2WLDf4",
  "key46": "4GcjVSkjFW436qsDLArbmPxzNJvBL72MtyWTNrZxLWPccCtmpxYFwufiL83UJg2H7PZc4JS438xR17yg9zgk45XW",
  "key47": "5yLth4hZL5b3TrHjV88KTrtkhZpjAnvNx6PXWLhyKoDhP7WApuZaBGSY1vqqSg279cLaMZKNiWzP7cb2NEAr4fpQ",
  "key48": "2TubgQBAs3WnZPAeg1xrgH11qyhd4UQ4t1CSN8Jd51ouCLqhGefn2Ny5SD59z4bzmXvSZT4kUdjM4A5Z31b7AF7"
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
