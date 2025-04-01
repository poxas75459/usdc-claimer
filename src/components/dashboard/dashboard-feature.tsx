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
    "4JgoWYxhx4n3f4MUZ2rajGjgqmxrLtvpcWJMrdgMwztyQZfNBFT9iRajgFSSmjvYEWkavDm8xENqHYvqJoPpKckR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27yM4ZQD53ZZDTvycAu7yDDesRS6LJpofV1i8TWqCE2cbwynXtVTAhgdqhTpxXjXDeWykeUMHiSg8x5FmUKBuip4",
  "key1": "4zy1djcgtKLna59RNMRZd91QbK7nCw1KjaU2jmfjq4S6XXjw1Sgp2bwJxbRZBdJDFT2mernzAwU6wodQHQ4togN2",
  "key2": "5FTSob1CQwvQjh4b6BExxNKswvaFo55BAXoJecfdG2dQeCStoBA1tsjPLspF6wvtL9YMzvX81p3czChin4HxzW22",
  "key3": "4PibMewhGvUJDpFE3a9vZNycC4iuEYjYuStk8pQXgxQYvxAYMTzr5sqocE7HmVhCJQVsca8wXNkieYnUbDmPBHNH",
  "key4": "4JZCi2x6sZmwEthJQWRJmhco9qRVckwgtDr1sZgK7aNxGAdHijgW4LBaUYTiB5187DK9TEMKw4uaSTczRX1iRKvu",
  "key5": "4UXPuJvtDuDRjVWSAtsKgvN5cDVupPYVH5tc9aNPAuZG3zPR7bP8E5wA6adrcWyCgsDb2Tzks2e3XFe4QrFpmhfA",
  "key6": "4DsNvNWrAANLdm52MjENN2LHZSbsTANY3nChTTrexRFf2UntuPkc3tZFHHh4iPDeUgdui5YqSohQX7AVKZYan465",
  "key7": "3epMeZ62aAxKJKDf4GfcUMAmpqwTdgkwDqjyZVzoA7gLM8xT75dQPczyiSD43RU3ZTMUsCJeA5qhr6ZujX75vSq3",
  "key8": "2L7YWhMtbtsx1ggZ16PrPoNcNXT4eaXaBYwCQj5ihKuySMdPvWCtiu9pvwnj6D5ryL9gdFB6SqSNpD1eTeQiag96",
  "key9": "sm4RYXacDVt2h5UjWQurD7VP8bnRhbFPnJzM9BC31bLV7kkWCe8Df1QpqqDacdxJpUBSM61sL8jcsuAFG6wwX5k",
  "key10": "q2MCsa2ZSVPeYmViE1SZmzxCCUg82EkLXzNL41eAWvkrSzUVhTjrrfYjAxFvJbc53pnrRNy3B3NoNXSihapvasq",
  "key11": "5Kw5GqXCfWiDhq88UQkakHepjMQTLseXVL6wAHK22byYdzXNWEEfWwresT2ywP1PzYMPVghTDMsdRGnb9RZdzU62",
  "key12": "5BJj2KMNagYH5FJiCUFc95tmHjs6NEh34mcR4bWXh32eqoC4sRTbYpNPfyEDkFrtv7s1o1MAeEvycEg5XkWsQv3u",
  "key13": "5C6XbCGeUvN6RfLxoEL5QA3NyxK2oUXKgdYZjtgizV3hwMdgsHJizUhwCkAvEy1nTmnkzXxzBCQsETuBUhjtvRtt",
  "key14": "3YLy5XxsidQGz2SMLeZkfxoKxYLQy1ozNofctZ8R5htrBSb3UwwTxkFAdqdXLyGxMTvJpAF4bZDygtQmSmnKgLqe",
  "key15": "2AhDvSpPrvtCxDLmK71QyFMm5v2hjoyGBvDyPaZnLw3HFEGwYTH67wFktYwF4GwB2kYSFkNdK5uJ2sY5qe7RU2VB",
  "key16": "2wmsgvDEhz4375cA1oTBjgkXyVLSo5oEwK3kWXJhH9xvAjzUTvtLTqjEGKzJJKcU4Nc6qbB6XsdtDxDPPpcVZRrE",
  "key17": "4PjSV3xwGaWXWc7YRFkp8Dizw4WtPKYYpAerfTAuWowoUN8y7XWFdYLsa7WaJzqRKTjDopi2zRFrUBzZecqDRXVM",
  "key18": "214nfdunzaaYTEVCpJeX1GNb5LWPLBs4DKHRbycCVXUzN9L6aUjadXQjKnb5t9mvCBN2GmcbeS3hBdM7vJv2FUdW",
  "key19": "5RN4nQr2xcjcgjMNC28mryzxfxWo7sBsJs477RyQuffBNUttvaDAgJbZj47cME58b3ShurpXQaWf3SUHcZgsx8t6",
  "key20": "2sGp6pEwYpUXbUR6mE1TfnBYWySsc86e3iWhtqBRgmj4pGKjFrSQzkJCGBhnT7q26BFLsg1g3E6ZfnUwQA2DgEeD",
  "key21": "wEiaxeavSjrQnJYDnsMSbxqp7EsQYqeBPCdB64KwRviDd96fcTp3j2kgsyDwL7t6Ho9D5rEYNsFq5FysjABZAQn",
  "key22": "61k99qnwJKMyMWKg7RmoJhCvDmzPbnCxNLxGgv8Biko3RP7PyDZmPcgSfzAg8HR95tnemXEHXM6tigSn8DRRiq7R",
  "key23": "4jKKzVdVtCBVqgE1gdKRBeKm4u9EdwNsi1fq5S8F2Yvdeyub6EFMoAGvsrvt8YdjZqCsYnDx9iDqRhgpNKkpRQJV",
  "key24": "WAi3voDmWgBKgxC9mCiotq74LCKJ9Zq72LW7fuhfGiCySRkHUKNxzzfHrx25JQ6hhHnrkxut9NUMvdLQpUbwwLw",
  "key25": "4tMyTriNzMMo6ZHMKiiL8SDK5XWnkc5P5Lih34opQ45NtW3DVum47kzEAX7uF7frNsDCm32z87xoo1WF8QhxMdVM",
  "key26": "2dz2YrHqMNiYfTkvw9pyTncEs6jK1LSSo6h5XiZRjE8mXjTeehBnr869kspj1UFM5ySPSmHPBeSxM7whSC72uVjQ",
  "key27": "Sewm3dR5ZveN56LGmmeFTs4JN7uzJzDWo3YJr5MVifkm3sXndArNqV7JWGhU6h4WGQ3jYuhfD19vHNmj7h4XMHe",
  "key28": "4BgwnwX5eyxtimp3gosGKJX3R9r1bnTDYMsXTi8tEmQhfUzFR9yuNX2yai25Wx9ASFQbwDdkbCKhonwz8itZkWBv",
  "key29": "4rHuPCXyioY2KgfwsxxxYdRsrt9wdDbZd5FoBNiKChnzfSGvCDhNMxZudpQ4dXdpWvhg9FSiKn5Z51N7Q87EnyrG",
  "key30": "2ZC9bAZmXZLHnUaPbyzqXRs44ozgysBwwUfDSRHXtm1JXbVcjnC2AmRmDWqaBnwPjynfHDEvfUSJdbnRcArxUZU1",
  "key31": "52htvC2zNAW78iqoYsx3Zh6RbFJSM8WfqtUiHkFsofd72Dymo6V1qLXbccrK87jYg8txoS9Eu4UeT8Lry3oG18XZ",
  "key32": "3aRMdCLctU6cg5cx5AvzhKUChUi5mZubKPV4cTBjM1UQ1b9pwTsthYbjK7mD5XuNaDzUv98REtw6xYw9RJqYK7Cs",
  "key33": "3ceXePByyB2vPdCxJ4niz2sMC8gwtNesHeFqwNswmSW5B39afSQTyawD8exuCtZ5NQCqZh3T6sGmX41UycPtR7HZ",
  "key34": "5BmDucZeueeFbjcMeppKXxjiTrKUzFmMx6Hwuzguiuaq2BeUCeitHHnomQa9rrjPRTEktQxxokPo5WFCHxaYwaAq",
  "key35": "3YeDNWk2nJa19YAhNpdhfz2qZRR2qsuibcpVhTZZob4gavCpzQLottpR9PYT6sJKUqP9FtmToBGdcysJzJuK5zTv",
  "key36": "2ZSpKDLGhkDmNr7FgxYM4RSZqxppqbByfNVBVgvYRva8yAq1dKTkPR7cV8sdiUFsQsPJ5ndiqRtYycfrfiSWtUR2",
  "key37": "3YufdLr3VDmFn6dQPN6N1LX2XNfajycGRADDqY72d7voa7gCTUFkFYiiEhEqKaypC3ENaUV2sZiidqgWteU3RDgz",
  "key38": "2WQNT5ddQfxxz1cFZMp3bNLgukrupL6xD6YQy2xAtP3787Tkr7mZyPqP9tHmtS9FCBqrJd5Cq29mRhHvXzN1XRor",
  "key39": "2XHv4sdAV8WAuQzHLFxWqFdUZKnkjwqYu1hKUUHT3FQqsbJAmandxDTbK7vsbBj6LhxVLPqo9o12gjniArJXgfSJ"
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
