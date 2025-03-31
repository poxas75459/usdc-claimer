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
    "2DvWP92cZ2Dn5Lrfoiyvt3aqampG7iAsnuchFaYnBrWWLzSa226tzZjU5cNvSFd8GKnLTdQPccZTZJS1UmGf2rLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63iUCvTNrAmG4RJqjngRaYRdigAZdKGpSFz5c22NMS4ERmjBhDBxkwh21rC3ca6nesoXUMZ86YN2H6sYnXWt65CJ",
  "key1": "3UfpwyFJhFjJy8jSNNFsaTHQmukA7pGwUqWhuXydrAUSFndRGsEW8f1USSssJ8MyKyRWu1egKP45VJRpfwyMYLA1",
  "key2": "27ozgXtZ1X2NZ3UutRdR2NkVvcCYvEBY9BbRLWXZP7be6MfrN8UnCd3rzZnoUzKvQnEvqf6LokWMHCDRmrMH67tm",
  "key3": "4XySYVTZvM1EBKQurCNYKfQTBhDqZNFuandQCsr4RJ81NPVxPJMwC7RbQLZCEXPdGawDqaSv8LcFR1QtNBp1vo1T",
  "key4": "sXbUxHN98GpFMg8rupTapdL1W6WnjKLDN4u1QBHwJVk4T1qEmyFhQkyHraFjaGhtgEcKNcUMWpmgni6SB7NSWJV",
  "key5": "3qx13meHTEtjMVCRgCJ4ScLy1ckM8EPWvMMxrTWuLyMNk4fPZQKn9n5HXFfGSu8pBpvmykP62ancyM2JYnRDtJzB",
  "key6": "5MttZxCMSbRhE1ppx43LDGYTcTWsDQ23mTBp6FEc66uYxUiweJLwerNspbfWM2f4zZgcC1tRYdzM3jK8gQBTJsJE",
  "key7": "3eaVAznfpgNpAUhWJbkrXkajE97RAqCMedwEgXjFHge4WNJvezBxy3WJTDuVztFY6qKD4tK2D8YtvMLL6UgQg5hX",
  "key8": "2t8hMGVFaxue8oTPnftgEkUBXsKb68sbZCJVATUArUFzdy1hnQpsYibanXqPpNx8QfkFYcMahjZsvdFzQGtDXn7P",
  "key9": "5aTfyTv7fLmdYF8v1qNdXHhSpHBuTd13mVfQzuq2iRtKff7tZVrkfdrmGzb1pHQk8yrD6DSC9seH1YqMwXy1z9ht",
  "key10": "3m44gmRkGu1zbmFcorXNSZtfjSUUFAmcKT6dnf1pYsNnbQLJPWxVH3fW7bgUN8RuXCC3hJT5XvuRjquQ6JGK6DRR",
  "key11": "5G8jBgvyFpJuNfbpj1gdPhA7DNhMCUeu2p8LFUGUn7e4yvkd4smw7B5zBXtkuR4iHWMQfwJyejhaQ9ppWqFRNg6S",
  "key12": "2uZWCeJoXjzABwrQjwG2wdUJ9M6eDA3D99AKo9mvGGy35jArU46ZWNcdw1HhaBQXRfj2m1xPHazBgrnq3Rh28hmm",
  "key13": "u8TNu8Nc6puZzGhie12WyMmy1TbmFm6MfExR1aTYjmGSuSJpcWd4Hyix9ggtQs6eDrS5ocLRbQ3Ve95z4ugBobx",
  "key14": "5Fj8kEfNLSnQXL4GhhesU6tyKVgR78Q8uNaYcQfKihV9mxtsr8BmepXXgu6rgVax5XvtjmPehXVSod16892Nxu4E",
  "key15": "4g4Fs5gzAjpGiK73zcfEMkUAehmqPc9FVhyanhXTPFwNk8C42Ec3hKFK2YXsjT85YCkGrf3176nCm5DzhvSwsBPj",
  "key16": "2kEoagzy6t33nDzV36SbKxgK2AHcwPunpz8tfgiprwUYnPvib4GRnMChg2fsMQR3Mhfnh2XvkhYQGTGhi3c8rSnj",
  "key17": "3bZFHMHGbXfWf6hbhKUMo8mfvuR6LQyUCNitpdZsg6nx6DJJbW2NpkA71B5VfcyioTTiZe6PtP6Mjd2esS2so3YF",
  "key18": "4PQKiWpNGPRGxV67YTtHPv25TDwgPM9GyjxeNzHJBicwBcCU4vDP4kZd6pxGYbcvVugBtRA4LDADe4maeS9UuQNR",
  "key19": "4HD6akcthx6aWyHhrrsJX8FJ9Sp2ozkFYccvVRqaCM2LTEfeL5CvdzPi1DATMN6PU1md1fpkpPTbgMgjP7TfjgUm",
  "key20": "2NcUvZqD6rsRbqJ82cpHe12VNLAEPnGDKwBbKBuv3ZzNw8AeZEPzM56e99kwBJDA48W3nX7XHeBSvfUMoTVnb9mL",
  "key21": "59x77MbizhEXG2n3uoFmgQxkKgM4ng2rDuk1TiiWuMEkaLQ29TnjBwE2U5wrd7TgPrCqbDW7TkCTPmLPDTYpByKn",
  "key22": "66k2BQnHzMAfjVrK66ntz4ywHttY9ekgwLEv9Tz2eGyFJfgPXBFV33tnL8HwxrUTt7tAkBRQhXLc56HqQSUKZwtA",
  "key23": "myysY2UzZjbjwxSiPWyXB14eDwzPwmHBBK7yfLbU7ZLS4ZkeZR43hHyc9bRpufpTnYn4qRYnTy5qhdqFoJZPU2F",
  "key24": "3ChtSBzJHJFMcaaTNhh55WXvQTJtJ1XZf2uK7Y15pnYaknqQnKsNinuj6wZScsRK9N1mGEjNY1GkbGBQN4V4RQKp",
  "key25": "4gLACdzSPY6psaEMUbKhhyhYHtjWn9tsBuT8wJWfaoajJ1KbtYNhT8iMYzkrAtQd8LdxAZa5XgoR9y8h87eu4Uac",
  "key26": "qvXBzorA6hVibdmjenpayQfo3vTVkNWx93fdcPXXiAm7DBsafKHpKhaBbrLETx8qn4WMmoTefPtMhtCHHWa7kqE",
  "key27": "5H9jYrpNWnonoeZofAawjVvU1ZKJahiAX2j72gQkcnvWvpGJm5k86fJZ6BA4YvUpMVWKHZ2BnwhFcwqbcSeWJ9GE",
  "key28": "DBqgEXprQ9uz21SGgg8AztmGjvshVSQkpo5Bo7CKahAfJwCpzVSReLepuwFTVHto2QnTHJCFbhXXhFxteECubW9",
  "key29": "2pLeULAdMQNe8PPK6jcgvvuJuF7hCMi3tKpojbfV8DpW7LkGs9jNSHQrCj9kjAjBSmVDpHzPAZNMPkqE3Dxu8PpF",
  "key30": "s2Dt9gZSzGBHcf4F1dC1TsRjjeUka6eauZ2fYW13FdDZa77b7PZLvzVBFUw39CxLr6HunoEKunm4xAj55N4KpW5",
  "key31": "3SFpYZEyRQq5jw5Xc2L5VyY9z2KCRsS8FexGYSQFWxrq6h2CAPaF7W3SdsdDqjBFvBbyJuXvgNSxwu7qEE6jaf2c",
  "key32": "ikaNEogAVytYiSdVwDPtEEWzwGPDopRwzcuYzpX2GmMuuzasEEjBRmpfvsDcP8Kr4bcmomTKdMdkeSTHuQioatL",
  "key33": "3qATPYJoF78QPtHTNHP5z4ueEnmPe4pMr5XBp9HeebKMPV6EVwLbxkBkSEe9esdsbmiPE1YbwQtvd9hiUDWpzExU",
  "key34": "5dUeTmhtBouPJU4bTkYvdt5gErDMfimUhdrqHKWtVo7BPAocLB4qUcPi19m4cZ1165mLBGctRBGhhB5nZUy7EBM7",
  "key35": "2SrT31GUYWbH7pYp4w5gkpM4GBpffgbsBhWAuFpWkkSgHJBH9T1mjZyX7EQMbdjyKeErWgK8B4iuAmmyTW17s4EV",
  "key36": "4oZU35SVCk5bcGiTBbgFEgf5JrXtLQtYnQXQkFRqPZe6cEE8o6AjfBDLBDUjhr5ZfhQ1vPVZk7ZutUxb1RBbBDYZ",
  "key37": "2ddHY3s1ULnTCVupkSTYtVb3RZiy38XWRB7zg7YtAEHscCjETXbbiewuhswvkV3kFZnrM9Q3tbGYAStuFyA6VJME",
  "key38": "22EtiLe6dnEvi6V742SP8NnF23vm6dhdh6BkpXGeVg7avyFotK71XrDZMxwEggnrHQ3vi55EX38WcQCmyW4HKi8n",
  "key39": "235Bnebbq5Lz6B3hZWFD4Z6jPEy3x5o4zZzdKZueiR6wju8W6PebWwHznM5pFeaTbMuVUgXxWQameNxG6XQtgAeV",
  "key40": "2nui7aqyx3ZKUBbVMiQW8bNZrz73Vk3DCYx4c5MLXzzYZJcvznnNMU2T5qdCPFGUgFuy3x9pfZzDs6Yv2jV7jFy9",
  "key41": "2D2y3hSbDeG7JSR1UvHyFyQfhm82uwLVDwUwvLBr3GURsvaX43H5MyJtVznTeB1tCFFrru6KL9St6sPHBzQ8ttSd",
  "key42": "4M4BfkgADUqBmCpRfVGwb23fZsR5rh3qRuncU8wuBWzubrZ22EGCUC82AeHAa22ieQ9iGky1bMG1vu8Ht4AsdiHi"
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
