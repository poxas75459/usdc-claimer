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
    "2R9wNPUqS1rvRgKnomenLTVxaVNkCT4ZZJ2Pb1869qZq65XVXBH3HYKeipMP77vi4WP3PrnvubLex26cRC6MN3cb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMf8hR2WejVv9ewup5MQad1QJuGjbfH8zTgDRxYBL2aaSZQxV4DoLWvTxEfQTiQ2eznUCvQJxmGDP68ZwqDeja2",
  "key1": "jLy17AhDVpbY48sgrHMirNTYCZcjwMJ268u2VnwDSXh4x6VHn84SeTS3JzaBV6snTzstq6F34r16odhcJTdPRQh",
  "key2": "3YPCQK65QQVvmVTw55Tcx327Qq39gMWbULVCKt9NwH1DawyGyP7mR4ZYnPJZaJZ4ATEuHdFZV2fRzZ8sL13fBWMe",
  "key3": "2iebpi4HiTzsUqS1UKjErTfcaRPdyerhY1iwLVdDKtzbixTpT2jimJthNg4U9L9QVW4ByH7jCVFQxQak2GaJwN83",
  "key4": "3TS1JxsLvUsKQcoRrde663zgjLLd2CV8MuH6mQEPHmrzQeydj6iD947tTaAMCKpbP4XoNrPmjRSfGzXPu8Dd8ntL",
  "key5": "64w5W8GcDnuoYuC8JNqWkobnUnvBwjAXnH79c89pyHSfJ7u7uWuiP9Zqe9fQ9DW3mTYYbUaQRfzEc4xtpzV3sDPD",
  "key6": "5iEzsnyVy2CTKrpypt7skE8uU24M72fnrs2n4V469rsrkWaDHRowmZXfCBCMCRxjDZUpvwUY4ziHY4n7obRAdun8",
  "key7": "3HTA2oK2oPCvFVMfHz9n2uWyMmG91SNqoc4aKGJzhx1HfajqjUjwRGaqKeQ89taG3FpqBoVy4eRDXL5uAifSw3Ss",
  "key8": "4RFfbjgzQb4okubYzBGyaSgUGMPhxGCZpHbdHpQ2xSBctf951uVXUdetVVF67QpHZ2GBkc9rao8Uo4y7Hugh17ob",
  "key9": "ZRkz4NEUU5yi8ZHW7cXWTjqWrqsT5RLc4VkmzZFAsDMEHChXJ73BdyFieZC1i95UyRtshB4EP7pDaCT9EfSASqX",
  "key10": "4PxVq946X6eDvtGvRXJPtrdR1koto3b2TwV4mK4wpdYhapiLWGHuNYUnxwScrzwFxJuqLCiQzNccMq8AGgkCwPd2",
  "key11": "3UnR1R4a6VEWjczzTHZ7bGY57cijoDGXaAAciG1KdatNGiJZbfurKHxkiWgEJBKdfwsoCZZ3NkSDnrCtYPz2Da8g",
  "key12": "3AEsrhWFiRGhXnbJZhWzpSfHtF3whoRqZD8ySrWwYQVas6ZzU1vnMLepnpzYK2eWqCvq9aiFzkEe9n53DUsWycm9",
  "key13": "34oGS5Da3z6Jow3HxQSpPpZShiL4xv3q9KnHKzL4aPLmNuyioYciqZceEVfE69Mvxdbtr8D3vMBBcVqDtcpMvvqH",
  "key14": "5se75NagsmGzAfYQuPqGCNNwv8ddJrTGJxm7FkTxYeBRqD1jq5Yj1aWX3h4vnDssieTtsfnPKe4YZ7akcZFhKQQ",
  "key15": "BZwY98svnZvg4P5qACSmKSKspAzph39xna9DuQSYSwQANQuMjqf2r1vhJPUcPBgAantkNzUWJNwNGE3GLUvxLbS",
  "key16": "2R6H9CTExp4RwVzgEUP4mRtTduJ6qVUwdoSLExrM2sejYyYEh83pHC7fTpYPqf2Kj3fD6JvPvPHXPuoLZrq1uGPo",
  "key17": "5QwnBhBDzX6G7ZtYmjL92nMxsgPKrcBTBtgHejavAUtSzYc5HYM7JJ9QDUaCoDHExNb5dreWvq8551uTgZ2e9hjV",
  "key18": "5J9Snhpm491RDJa4rpWvSM5E7qYyq7yJw6qrscsyUsr4jpPMSmLBiET2xdamALFJ4vwi3uA5j4fJGRQ5fbs6g17r",
  "key19": "dTiB4wX1TE4PVxkeaBq7sAyKexjG1ir7FGG1xturFcp9rUckgwfWui4ra498L2g2SzyXU2dctjytwG9ZXEKNXJn",
  "key20": "aPtQ54ygxnTKyWNoJ5CtNWxgAF4h8MRqjYPxECt1C9hDhdPQ5vyfRqcLALq2pAQAXdKexJTKATG2DKBCbqRZFZw",
  "key21": "4e1iFbAJrwuUNtSN3cjQAWJYwAQd8U2n6oxAq717eK4hB6EZHxyeKC2xbsYYAUcnR1iurjNaYwbsXUXAqKi7fGGu",
  "key22": "3ziRL3crEJei64pxQa5bv5x7ahDKxfx7B6ynnjLpBqegaHmcZjbMy5zu7TNjbepxSqu7WCDxPhfq3fNeBm2xio8j",
  "key23": "4QKK31pt24LsGm2uYmXMwMetdUVGHwoFuzUTvbVtyFVLq6iFojJfNVb2XeKMstvhpVvGsGPoViBaWc6BeWP67yy1",
  "key24": "2RznUsKeWYVirRSzZrQQ8sZYmZicXKK9FCnwx3SytreBU4jLfSkTVRqjGoxFT1uiyigRhWNmtmGBbHpVn1fudW6P",
  "key25": "grgZLErKSHS2g6j5WNosHFJHznQ8tB9Yr3xn5Hp8gmbYfHxghJFVHrWyCeXp3mUug8AdWeZpoFbKeD7TptPaYqf",
  "key26": "2uyknVEmdfE35rfvdazcvqLo1YmuwEgzrM4aJZkUW6Pe9zjkhCwCnt2ADhXXBA54VwyF77d5ajwFpVZtun44dZAJ",
  "key27": "jk1eEzHNrxKYxxcUCqzbGZcrCSZ5S3jmcaudteYJngPKj5zq7uR5uNzzbUeDEJWEQSZMsjJBZhDMgUwWkvSQ1mb",
  "key28": "P8HNMnEn9kLptz8ncKjAi2x1VfETPWoRpJVhg5DX8zgpMPeQS9peasMtFb5hkWdnJNcvUcmU3tn2Da8osnVMbUX",
  "key29": "3d32fgK6qKKg8pGUGyJPN1TBKwRawtEG5KCjcAAJYKZoSvvPrGyx6CE32dKjkbHZEXVM7kbaHiweSM66DpaazPm5",
  "key30": "3tfoygLtQC92tHbQF8bV9QP9F9nSbU3K5MwmQeCnFWSFuW3rpgwWkkN9iN1EohH6tt6HFUUMEnVwQHy9twYnqpzS",
  "key31": "2F7WCarQSFLe1oT85JWahoFRNddGWQioGvphNTz65uQ9pwuaKvjEWEqQUaN4DkeGPmk4JHoC9PijLyzMi1uZfdRx",
  "key32": "5H7oJaFjj2u8wCxHf59JLoYZ8zo1gkJBGj2MVyNT1yUNR9oRXcVLm8Lt45D5Kxqgipn46MyDNbM7VVsqnKqdZ3XL",
  "key33": "wxzZXXL5XL22L8EDgbjKwLsH6QU95ZyXS3mZtHdpP2ZEirh8YfnUEPtnCdfDMtoWPvNkZ2iZYxMSnqCGg3o1gaB",
  "key34": "2qmpXw4KqcHxY3CkRZNqzQDFB6aqV15BF6dJf8LK3jWaaSVRy7be23vfuTVhsBpRFUDEAGwQNoA1Bsm2Rh77nFvj",
  "key35": "2nkGS5V9NkERxWv1o3yENL93FoWxPvts6pZCWHTGMktt7s8bF4AiK5U3JXWp2gTMJtt6Vok2gEqLoufUvJDRzVn9",
  "key36": "3EY3XFR2icjJFtdLYp5sY5odQcLze6Ad81yzGTssjSGCwEygVXjfqg4hDjTcGAGSw6RLvGS84bsw5TSRXgQbd1Gp",
  "key37": "5pFmui6cqYAHc9mbpEKFRsUqtsmWsvwyAS9xL1Dgj69NwGgtyj4RVFNKzKGyhEaPhq1eRa6txjM1TWhYLGkWPsfA",
  "key38": "4PGdYs4AsxE61a7n5Y2t2f3EpPQumGFKp8SSMsk1PMrc6iN5hjQsjs43L5fjZfLYnCq9dWANB4q7nuF1kqina3Gp",
  "key39": "3RQcRwSRdBFFHixBUU1Uog87pgYB9kpNwgBQssqpDixhtYw8d3aWBsSwNQsq2jj6rx5wkvvk1jAVHpqemiH5RcKU"
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
