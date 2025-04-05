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
    "5NZFMxcRK3bhx81EiEb79zmqvb59PE938jeydeo9gohAXsCoyF5fSTk5gxj95ocu28KkSyR98bETkcaNtdk8dMUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvGWapZ1basM4uEmnnYNZk65UkDwSfqS71U7MdBiLR3SZSuCtApJYA3UHT7hM48u7uFMzmPXE3m21L3f19rWYSd",
  "key1": "3PT4WjnL1LVpjXj9Nu8DE7Qwjj1CqtQPFb7ctHsCLbPQsL1H8vx9nE73A49ymtAiufizmMjJiom3R8zAqQbq5o7P",
  "key2": "4m4UaSg3HroYrrWXh7hyi5MtNtZGThfosZ1jCcdpT7mLm7789NAs6xK3VdFNDiKGQyduCtz2RUk75JFb9GPoewA6",
  "key3": "3kTwVsitS7rDi99WNQNanEbGEzF9EoEFoWn6BbomFWSj4LhG4hzNPTKrLCvJJ13XEoJZJUhpGWLYE4f8ViXLrK8k",
  "key4": "47yjdPVRVN4JB6TfXHepKDXfr1p5HTGGCvccrNwL45DTnBhJQ6LPeUHDuMTLAyHZJauERtHKC3U1nY8yxqSYcvog",
  "key5": "4DUefMzZCFkdqZAh1bJd5RVaBZABP7X27rHChHSDQfJf8df5jq4KvZTvvrhyUffxYCoyoKEAskJbWBikYyn46Bnc",
  "key6": "27FqtYGmBmdXku5oFK8FGYrW5FJu9B6DPNC1tu836eo91p891HKjYAdp1VwC9EHEH6a9rZW7g3e1zNPBhR4D44vA",
  "key7": "3ki6Ls3k3KrTTrwmJJ2yWQLjVJ1uqGifBVnKwqMf4QHZHc6JDT5X3TKHrhqhjwxrmQMANM5vkeWKzC2f2N4rJhSj",
  "key8": "2Bwpwe8nEinCznUUkr2SGcBv92wbgGez9Bw8BnYgBQGX3X4z58ty7g2A1kAqfNoJUxZg2PcNRoBr2PidBkJRZP2r",
  "key9": "hwyWa3ivhjPo3rqSp1cwqhuevunpX8ukwtsiT9sKZCU9gdgsKbk7zL6gUjMfjyWRMuo5BnpaF6njcips3Ssu8Sj",
  "key10": "26wiy9LkFBD2ezff6ihCoAJmUm1aQNQpM9JAGypWUTKTTWmTcH59GTNvTpxVrHfH15EEoh8fyn3NBANDkAf6gZ68",
  "key11": "2vuhwJvLEE7r5U8tvQHAc77jwwYWCVnQbVACN6Hu18T5Fi1usv4S7R4iXGPRw1AopHiYVgrgb7WrFGtJXDfzvfkB",
  "key12": "3SxU3YeK6C4PEAdhNxkH9FCWPYKHLmNhUArGmZMMq1JbLF1k51UmzkE3hkhPtMHdUk5ZScXMasJnXNc8kmjacrB8",
  "key13": "4v2XTz8Fh3vbQeAnZ7fqLbiZEfjHWr72Zisk9im2WdFmtzHjLD48ySXYYSFoSHXMXiQJtCHj3jex9rzSZ37ZKGHC",
  "key14": "2SsZ4QJUZDC24qkvyBmPgFhWjNAeGWRQpeivJWR4BMZBFmQfEppn3ZC9XHGscsYYppJ7wEF8RaGNWti1jisU5cDq",
  "key15": "2aXRGrrHvmHyBdVMKAMTZD9ra2wEDpetyjWJ1oJ9BEZATHWaxgAEtN6sBsWDf6qFogqPVeXH8jX8YAE1xNxQSnNo",
  "key16": "3GjqJvPcrA1ZaGBWv2c1ciyZqwrDUBEc1v7NUvxQcPZv4xZivESEwgNtD7SzQAKsN1jAoiAuqZf3wq4yFxrjYdu9",
  "key17": "3RC1jjC2ZveoULPyu22rh8b2jBHJuzW8QrZqWeiE29hdDjCyn4GfP4zed4MyHmcWRHxWU95qfd4NWMr9p414ATZK",
  "key18": "5aG4RwinszVwo5SPY8hRTY9xX56Qzuyv4qQyagkQJABsbi32w6cN4xrUQuqfc3xCJp2obtdT7YXTnnWp756fDBYx",
  "key19": "4sCNxnYSzx8MwV8jhWwjtvgZyBL8Rqxi4RjACP2HzbzNfmzaP7iXcLQ3TSpC2uvNMfN958TyAUNkpegcuo3Jbajw",
  "key20": "3at2AgfBGmiP1MnbwFtUaqe2eQXD5A9Tn7i28QnewE3aaWDtqGmNaJPDchxxdFDSF784PMjqzM1AwfAorQ9cd87q",
  "key21": "5NjZwgx9WGzoWL7o7qiU1qVKNEtgJUv2sSPxYeFBYF2V6aKnbr9LKLgTm6iXy698mmbP9ADRrKo8MYDsZFZyPttX",
  "key22": "5HPxJLvRUpQTNFFUBQBQ5vzmwDCTkg7GWUFsLcFv8jfrH8snUV3noS9jsnhiTxX8iftQERn85ffyfrXCaqcsywWy",
  "key23": "Di9u3RseMT3Ky6jLDdmHLB9rSW9ybTxu5MnC4nQzm3gE27Cwy4bMe3VGGtycnVksG9neRFzV951SEdBtcPg9QU8",
  "key24": "4eBnniS3uSPNiRstvoZJzHxyv1ohN9HSHnhfUuiUVcoeFhQe8sGWPjX7CSWxCNXA1WUxwV6jfgNVSE3h1aDhedti",
  "key25": "3eDPwKYPWdi6Wn9w3V1fK6pksysWNeFTXTjGJRmYSPabfDCieKY74Fw9spEbbprDP3UcGAfu2sj3JZC7VAFnVJWX",
  "key26": "2YwWootmSwNCXhDoPmvVNWyDAFq45Jnm1B7rv5Cx5WHW3SaNcUHwKUabvguJxtGcjFreTE1GpM2FRzppoqmpZthV",
  "key27": "463Damn4GmbwohBKjXKDp4PZz1QNnANLffBydyYgc3oRYM3kPpU4K8kD1jmPuvcuSP88CdNUHikyGTMFC2BDyEvf",
  "key28": "3z159hfRjopnCynGn3qu6eFefEQbeWvUNqikrVzvYTxs6u2F3ai7xho1Kf7VyUNEEE7NLQYjngdmwf5EdJQMNz95",
  "key29": "45jBFBWuSD6G3EpBmriybfzK6Yr4dXZkQB8hFfWLJsVy6Sm7HCC5CUAVMyoVM7HtNU9HGoEiyqkimwczHTKwyYng",
  "key30": "4JToo9KLUPpsEr2L6T98cSPoMg17USUiRixDUuvwfdcZYNWMdbg2pLK5DD5D7AKQZuw2jiKwS4fpZLEnwhN6Sq8e",
  "key31": "5ANJ4xR6EDj3UWENqXzec8Nr44bcJ6mbMAfj7dB3yBDLqeL3VdGNuLfWzEMGQTef1uQfGSD6MwQnJsybn4ZQG24T",
  "key32": "66pc3GZdfoUDdvUtWBjGtVVycBoZufqBkoW4kkPytGBiAdFQ53Ata8hnwqEc3KuQdpvkAxeXoauHtHKvdpxye3VP",
  "key33": "3HGu6sT2PC8mJCYSWfc9LdQreu79Xju4SQYsDcSme3z6jFNsDvYUhkPi1Wu9ddzxNzATXnaWLWWF3csdWWiNRm4L",
  "key34": "Wg7uMj6YFi7Z7dHuSz4Zgz1scJyKAoeMXwYJyCkFFkntoCRnJbETJjGxyAW8iF1uNxL2R5FVyDRauQo2ErfmdNn",
  "key35": "3WtCPHqDTZgGS8TF7ResosuVjZrrUiTPejuUJCyzpjoCn54y1SGd142RdBYVHepWYn4KwhAJ1Nn4191MLquGixsA",
  "key36": "8o2LSrjvPBu5WhvwhPur9ATuaNeBaMRDJSoTkkvJMwjKQ9fHu2oyau1jeULePPfxBSeM3iu3bGViZW3QpA38JLk",
  "key37": "4qpYmQ8kUXx7fP9Xo32UuCCPVwyFQGP37KmBmf1uE6AKbDo4cshmWzT8tbVrpV86GWmjGKBkTzzqthaNj9P6skWi",
  "key38": "3cfURY3NX7XiTcZpnd88zccAWFeDh5Dc4wTfpp27Gm5oi6fWk6g3r33zttFJKhTHRgeBzErAaiKbgX6SVbXxUoGo",
  "key39": "3uLrhypbyi2Gy9aLfavXfhCfZMochne6N2Sx8SswJLy67qyr9FVQdArGTzbR1fPWGwSjT1kSQe8ptBwj6EFkjVfz",
  "key40": "42v9krvgbTHPipG9Dq1X9Dp8zwVhmptUKNa8M1WGbUoNGV5EM4yaixQHGnv8JzQAt7tQQnUEejirRoWsmcFty5w5",
  "key41": "4pHWBeMNowCgmoi1jrfvw2GtvBhQewETBUFvCpg5cvTDMgPfFiajzdKcuaq5nyZxFmhSxvHaJmr45mvr4895wtso",
  "key42": "9MvtaUwsBof6hmaqNtuM64yTGd6HReqHVss8MXGNpipMeS8VfqPHYyLDCREGUBodAkQMsP6K7jVrK5dY4y4bsw7",
  "key43": "qzdNyx3Ufk2De9bk8DpXRZKfHZujDeYqZf4ofAP467rkddRmjoiQCw8fB7JcNEb4DW1XFBj5sd6TqrF33Uihe6h",
  "key44": "3vz6t7pqU3mXxzUipAvJFeVN83r1tshk1zgyKLa9ESUEHaeVG686yG9x3UUoqHvzfoU4CdVEaSSgqxJpFVrXvtHd"
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
