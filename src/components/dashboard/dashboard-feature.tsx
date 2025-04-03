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
    "2SnwcWaxcfP8QvgXtpK32yKsLJFRNuJuBkKjxS1juR1WVuid1KHAiFiNAdzGco2mBjdSa4Qr935JQ1PrhFVZnEoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XscQ8ir7YQoBtJeEMNQsGTUCqqqbKMPiT6ZSvktMwWwo6VNgBe95vaAMYuVXhk4CHc9rg3MYpmDdfkE7n6e4Gnq",
  "key1": "wxLUjcL8cG7RpU3BB8a8AvHQNHukkzh4w8RC6CesNLcbgogD81xfmow4bHcXoogf3E5MEmh7SWwqXFHTxmB4rjt",
  "key2": "4HGuqYGDCMESJ1kpxvheTKGUhwjgbwnW8Y6Y1cNvhFrhkZbqdnZjYLsbBkpjr9paHexVts7Eubd8Hu2wYZ1YtzWc",
  "key3": "SeWgbhnvjyfHZYeX23Wb6C3Gz8E7U22USa19G3JQvhBMboZPBTxPt3fYMSjofPQRyX2Mr1juiMBpxJ2QZ6FHouq",
  "key4": "5yxSStzqP8CuJEby9kihfhyWPztHYM1V21SU2gzdcRMvsjpHNfnsvhR24MXNiMQBV7mpQer927CdgFLHcV1eDN5Z",
  "key5": "46gnHLwZedG7H1WYom5pFAL1Ji5tzpBZJNrVoS5rm1a23JwrewVQWqthgU8zKvfqY2fMsmxx2F8PA5mhPfRUMYmH",
  "key6": "1k76usgRhnHZNEGSx2sBSkGwEHMUMthQZcAqKffSMDFA34edKqdjMFwSDdhJGu4fdfyEWHiCqywPriWg1Ax5MTX",
  "key7": "3uN9QUYfes2qq1KbVzXibePYb5Ub7Mkrj8HLgT2cdNQUT5XZVVSXe3xLbQC5PmSSqL2TUn9irEhkf2FcWPZpnyze",
  "key8": "5P2gu4yXxEXaZAX6Vf6afuFADHuyUtMtRNAuqheu44tS62zMeJJoV9byUyr7Aqe25ecniCh8NwqTi2CT16hjdj1g",
  "key9": "5rtemeJcPgjQtCcLE4TbUziwJXv5PToeGhXFRKSmhQPjmZEYyjViKEsgsjJM1anR1r9Lup4VsfMY5VZENoiSuepX",
  "key10": "5vdpjy2pdDXcq9taLneQ9gf8b9SL4kivC6CxGSF21yGr4Fix6KfoF2AD1P1P53HwCYhme74tNh8G8mVb1cxCpgG9",
  "key11": "2bn1mc9fmq5vBinxYr16N8kviAM3uVEmDLpKsTrinbSV3qdYnHT2qQ4dC5PPmysVitYdbQ12wusuQworBQaieYC9",
  "key12": "21XJ6s4xJbfwecs7w1EPBS2mby7rsshWGhWj92HYQFvwQpczUeCyzsUgcd4CMJkDHyVkPPaj5Ho3mq2rEHBZYT42",
  "key13": "4mprxA27FdLf5381xjoPnWhcN2Up4ocU9WiTFXdmxeKykGz7A6c56nzs5aQr9C8peHYfrtUkgpCWK1HQQn28HXV8",
  "key14": "5upn65Gkw42M2PrPRzyrPXuBzSjYxyNfdUQunek86tEwNZUgK4FzMkRAAmg3hXzXjPQ349ACPEwGcLcWC4qiLfrC",
  "key15": "3LGCKMHtfQ7ZPNrkshtdfPSpxEhDhzHXjZ8v4NG1DASZGf6USBoNEEGsgNaLKcDAfQK2haXnVeb5s74bcTPxE6C2",
  "key16": "4G9YzBpm3isuJCSnGmfd9iys4hE1qsPw8hzW8MozfiHtwnGJFghNa56hHjsXtNAKw873R36mzhbim8u7vFpHXYT6",
  "key17": "QHmD5MzQBcXsxEoVDYkJQRm8iZ69BQmHSnvrxzM36kSaN8V2dMAeqGnkAKa7Xb71w5Lo7JYKjT9jXixyBShVaZs",
  "key18": "4vJBCGbbGPDHRViCwa9Ut7i7rbbcDCreZeEpJSYsAbjc2FBWEMhyXYoHcFcqKQ7Sr96vQAyfHsRA2TCTabp9iUBk",
  "key19": "5Wo7ypHGpn6Q7KfDh4s74sxN5grmKcWy4sscg47qSfp3qJiwZFWPKomLMheqzv7SXrm6KDkfBBCxoMbSTMF7vKAa",
  "key20": "vfQJrvs9HaeK49iCxna1eiTYkpkBD7fiZioC5aP6fnrZjF2UYrj5mKJnXj7UfTucLuwJ4AbFLUYXfQ6NLuD1EFn",
  "key21": "5E2UwN4Va8A8SY4WBHoFT5NqG2cAAbbzKba8ULf689dozpd4xeu1vqKyDoc3TBxoh4WZnA2cTDQXjaMVyQ7zAqYd",
  "key22": "2VFXvRoYZDKZLRCAkj6qcmmFieFjs7ssP5B3CixD8X1R15MohpxNytnPLmB8HetCFG1AZnDvcN98cLdC9b7Ggj9P",
  "key23": "YtMwaBihLFXh1w7JziiqPcCuxukhY6y9L4pk3iE53pNscohen5gT4YX1zUffexdckaXid3LgH3jbpQAFxaHXnH9",
  "key24": "4mRbmCtE72QSaDbDty9SU6VLvdS73PyqTtQ1uuwd17TAkS3ybUrdyYjwysrnyQEueqgMmWvyFePxYsnvu8pFkKM3",
  "key25": "2qjvyWJp4QMkZLwnZCZc8KRfkyC6Dd4dhi4x2H6BE8PWrxNjqKZaZHtn6YXWJykn6H3r6af3dhdcbt2QBFgKwQQj",
  "key26": "5J6S87TNfWDY5o8SeSry7A3ph2Eb4qakBiAFE6w3DphRt9wYCsMyobxYpgCX9mgYuXjdtfVvqzJbt99anT5fffQp",
  "key27": "2HKwTF2gFf4roM1is6P4mPmDbHaHUvEmoamdVFLGQG7nKSCHxZaagjAAqGPvKoz5raHuizQMyYiTBsQ1P1PR2rpy",
  "key28": "3HyffPrBifH9QQHBW9fUzYbGvv88SWZUQ2jaeADe4qhgnmWeb4eDzwmk9oEvePhziWGfzUokSBKKdfMan6hBuQfk",
  "key29": "4H7x5e38q8eMDsECZVEryw3QvhhTpwiaL5fkRb6zA1424ts1HtCjmrrVLbnEXDwvowJt6opQMKmqPD1Np1LgoPiR",
  "key30": "63yvEMWgUEWKeAKEm1nB7PiY8hBKxzA1W2wnJgCnTYTgkMPmSDRea7DEJVLUuaZmUSxhwsdrc9mX4TQUq746rgzb",
  "key31": "5hds5V1n2H9Vu7uvVtSPKypCUuNE84tmB2j96yaXiHsqM7GVXRQE2hrYkGYgbBR1zL3mPTrkVW32MUdgBx1SsZqg",
  "key32": "4gjK7dSYbPeH16dHayavFaJQHQfaAzNabX1cTggY2HEHNdS1D8PNBpsQMMo3zyxpbM99vmCSG8y2vGXqbpmfLvG4"
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
