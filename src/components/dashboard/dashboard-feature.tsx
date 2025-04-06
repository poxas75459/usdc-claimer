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
    "5wAMsTqMEpQZLMePyMBYYDUR2zP9wfoJyGkYsd8M2zphdZtRL2Mn9JFe36W8qoHWRdswgVPyLrqMswr3xxFBFcdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LaDxDvZmmmSEJmqTpZ1u45Gy2sZxJF9KQhY5tveaBPG2ihbAqe5vYiz5KLp792BECDmYw1ctNC8UFtA4sb7EpKM",
  "key1": "2Gg2E8QApe7SbXUXL6yXbkeUkHZoTZEZL2rai8m2koP4WyNJwBURnxSpzDsTo22Jn6uioc2S8bQVMAyUD16sXCvy",
  "key2": "2WHnJxDzfPLbaqzp5ekgTbiJAoWfHhUEdjw6KnmLaybHXRansZtgopwu1YMqc57kCJHX4VBRDZ2fqEMHvmgpsHfB",
  "key3": "3En7SWuLPazEFCZdPjwnvne3MREkMHpetWwtbsz7zN88N513q6vymS4jmHPZ8x98qrunn8cMB147zw4QkDvQvqXr",
  "key4": "2ZCMS1LY7Ga9TNx8fvsxuLm343BaDbu4qczPTM4sBPzRrXfiaLY6kck6Mi2LbLY1q6R9WUKjryYjs1WiKJ3b38Y3",
  "key5": "NT1DQ1n6Fx135otkJ7adnvQuP3BywbDyfwoa9FZkgp2M6Gd42D9E6nLLHsKmVtoadnWPYVsMBDsCmvK2Zxb4haB",
  "key6": "dLGXEoRWcZXCna6gaZQQ3ZgrZetGkMbWc9m5ke5K2WNwEbyEqGhxkNh3UKto4SB4eH332qS2kSeZVezzsotBKMd",
  "key7": "3m2sizLWbGcfkdaJb4275fdiiTDCK22kZvt6XXNVq648pE1Uu8ivDXaaMZawhTg6h5stJF7iYkMdmAchmoVDdgzv",
  "key8": "4uPMC7PaSByb5P7bQtsVEzYxme9EmMwB1siyz8DFz4KHAHYyT8hLDnmUXX8DSB8J5bCTv87hJez4kxpbni91xRgY",
  "key9": "aooMhzqvHhnny4gXYCB6MtLmh3CMjU4zawhFJqWDyaXZdaqHZXSoucGTLZHXozFC7LBGrLJBZFQPZcKSDb2VCcD",
  "key10": "5r2DcteDeDxVRTXbuxjw9y89Uzq8Sk6Fw5E79fizPuwLw3esNcZ9jnevxLmXQRoxVyrRMQTt77P6jVMVL4wdmHYu",
  "key11": "2ACDB1cVPKeB3Ad43SzrT55j636H4T6jJCuwWZULnGikEn6zigZffQqcavwQWiiXwQkwdBKVYh27kohsuC1nWcVC",
  "key12": "2CX5JLMD8zyUD8t8b8YMzviaKjh1nUo4kz5eoCQAhyZeS8VhtZVrTynvEMeX1VkUR3ApY5fiEDHMzLcNAUHxs6bu",
  "key13": "5LsFFWEjvDjXaAibrRvniAgccf3dGGBHB5JRNbcXVJMpZUAtep7ou57FKCvht2Gik5fmWCadGsuCqYhAAYPXif2Q",
  "key14": "2YkMKP8N1X8jiK88jxipfQq7EcAc9eQ2fbW9j9EVBZk5sj3mPEYvrx2x2uUCkz77tu5gAZP4RvYgF5V9PufiTJqj",
  "key15": "3QC1LFAaEGAr6WFM6uamySuuR3pgeEzCMEDE24GwkmtiqVHbJu9bVkkQB5p4P8z9jDigTW5JMG8gEw688xBWVzuV",
  "key16": "4Rj3dx7PmjYNhLrevEu2Z7ydAKKkaoNrWtZc4uqiSy2La6VXnCwscRye1VsfhivreKEZikRvV8najS6y7R95Chi5",
  "key17": "49T2Hwq1MrbLEpkf1rWhqTis7g9b63SBMzBHvwFmKz8kBqUEfZe9Q8PdfHSUo5bf5hp8b5Y9LBdRC41xXw72Rf9d",
  "key18": "MWEKg1zJhsxD7rzceCBgXix2xgdRYiXz9HzfoY3HpgR8NWNASmKQRMnjmWHPdDahf1peoViVHEUwgFJprWr12bu",
  "key19": "5p2YLTrLZpJSVXbxU2FUfjSkyJ6KicsRpa74M5tbhsfmiGHifLVQMGDDQV3bNjZ611NTXwRm8cL1nXsovhLGq7wz",
  "key20": "57eJZKEEnp7p3attSHhzMVr7ZY7AxzYexK5vgm6BGjaroBGPPNSUPNqoXsnBtGE7Eg8m66BNi7jzgH3T9TDeTVEK",
  "key21": "4B5acJVf8a3GHtV12KCnjE9TqbRpE5Cayqff88656NGkUbqUnyrzH87vE3NPXg4jDANcTV6itqy9qwxCz8VegXPa",
  "key22": "29EoeVKZtupdLjRRLcE6egsB7Ps1yizcRCwG4f9qxEQqpPkPuo4fSwriFZRHMm8RaGoJeXUqMoczPMzDkGqY4Zcx",
  "key23": "5EHR9QBYehouqW3LRAZJRSo4oweDMBCSNGRrkFtN3QvpX1GhQBgBR7axkPuq7D8Ne6JEGLFh39XofbtHDmjzyLjk",
  "key24": "i8uBrK28QqUHLbNa9X6gYeB1x3YTRj35GFEUenokppphHcYTsH8e7cu9kepXs4TMygDwNexdughyuxxNQbsJ4uD",
  "key25": "5vrpgRbbYThNToCb5JeoXspyxApRshsdKUngpY2Gm7CgLg74T2XWKSEUnRM6zA6GiJAhzKpBidUu3k6SDcdp1kT7",
  "key26": "63AQvCaUqMXbXP996UPHqrAaGtY7GbjzwKvy9f5rnaaNwvX64SG2CUpcQr7qFLU6euXWixBupzHwFRPNUbt7eL6n",
  "key27": "2RnEC5Ba5bY6Hw6ZdKYqmtJaekWwVXgLPwKyRvHtJQNj9a8AxkjhxtZ4yxmJWQbtqvXdcq6niHCBrTYfrJht72cF",
  "key28": "5AYX18dFH1XsySKJEEwZjqa8P2XzmpSZn1GgGbFzkaPQZCxNALCSp9sHuB7A6gj57UnrkcgsrtEUKXdnMpCUZcnv",
  "key29": "2eueci8RjUu9zfEhsnyub4FfT63To1G6D6jpthr4d1pU7HVbZDyoHW1brD9wA3pV2FpWjh6oczTZirL1PNkqv5pv",
  "key30": "5PWGk1a5q5SEoV3BGhZdWF37yZN1aqjDTYNGCR8gmkx7LQZVzVLHVADZs9xbLJn1tzmsCm6q7ddPMHmGfUfk3ZXR",
  "key31": "3SNXWYEH32DYY6N3JkiWc3Doqx2kt9GRohzw4qBTqxi4peVC7P1T5juqHDmKgHeT7FRDh9K3mu3yV3iYtsiNzjvD",
  "key32": "hmi2itAe6z2syctrDj8hnmyiQo9PBWk54SpiuYC6UqK5t2tUYghVjqQ1qnHiENcQSa2MiGEWPGrPrJKCScag4F1",
  "key33": "4N1exUGLDwgc98XzJvxCwenFyE4BodfFAqfN2JxpgPC7iKtkJ3U3BWuTGRabDqxr7H9CuyDbofKcfrJHbqT6joMj",
  "key34": "2yVAxcMZC81NKuwSuMTu3FeYRVTZnRxdLGGvqU4j4vGw59q7hsKDzr2LW5LM1Y9ntR8GAvRoi4UttzKbk7Lt1y2o",
  "key35": "5YJKFAKnpcWhTWwN6tcFkXbRhWdYKabwpzECvovKj8tixSUSUjrQnuwcrXCeGQfUAeFZiS1bLa7rR31kw1VMjq5V",
  "key36": "233842TurjUao2Re6FXJN9T4oVFgTMssV1CwdgyVLGDh1LxP186E1WbWWVibvEKb2t2rjQYcTH4qZwhZxCMhBNUM",
  "key37": "4iDAYZbPPhFfQ4VCjrNTZBpa1sNaxTmN8iUYw9dixaBMorxh4aWm4kYophM1sfAqMmcHPKFKd5xknNTAjixFrDgA",
  "key38": "3xB4LD2ibd4tpD3KBDiTtEvH1DfquQ64Q6zcULhRXTGY86Uaa1Dwz5C49HGv1rihNYAvJSJz75kCSeUXqvfrjGxT",
  "key39": "2XR3PDg7ST7mYZU83yregr6VyZimXjwH7ksX2jd46QL8GoFWXsQbVXokqPzuKswcxnPDCLC7ZFUioDJapDii9tWf",
  "key40": "4upj6W7SmaKRXdZ2PtLULvvLBxW94ZHsVMn4PQQG2UbbVy2x3yKJ3GXYH3cH9sP25f3iuwmasfRHeexnVFKhRhnA"
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
