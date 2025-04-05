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
    "35fRY4RYUr8PyYrY1ZCq9CHPUsX7TFEzshMEt9DnNAL4m5H8PWRkt7Qx5s7GbcQXXW9HxmNg3UxfDxy5vFcQ933U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSd1cZUygL3K7ZMzBenA2xA7ZsXrovYZuhtnuk6rnc9VWRWVEMB5y2YQVH3e5MbfYUMcfdx8E7gKFK2yPGTcveZ",
  "key1": "B7Cro7Yo43kVvvZqAp1RtU7Qcu5hAxKYRneEsx1wJvJ8zYqgLgFzG9JCqLPZR1KtLscSpJqfDkyg3ZxHPCwgsty",
  "key2": "2p6firsWFd5H3tSMqRRU36JnsHpE4rSYu3cbfHdeEdSBZd5h4LgV8GzSBT6ExuivyAKdJoAhL98KEktSFsDDHb6k",
  "key3": "3yTA451LRWYizvoNxD5Zynzjxk9JSjUY1r2bpU5hksnp2qS3PoLkDRvve16GPpiEDjmXyVJR6aTNt29nyGCrrMVu",
  "key4": "22yqUfU6gXi5R7WRQAUft7hh8sGDvduMPnjCjmaP488bma1gtH9nS6Ur28b1Xd448STDVwPCcZo5KcYztGg7xQdt",
  "key5": "66L1bE6X1cdbwddx13Tx693Y8LDaVsENFdpmVsizHMqX762ENzN344Q7mkqHn1gaYDDQaEZptyvEW9xxqsnZ4Ed",
  "key6": "3b674KoySdxd9kuupYmwrGGLk5gWfH5ncGb3NrRa4CBYwJFfVZQhtWsocCTfukec9tnhPCKuGoeuNNx5VH48VB7L",
  "key7": "5TQXpBkWefn1dwWkerwSut1njoGg2i7Km6WVTBr4iuK34GhzDDEfQpzjEsBgTSd5vCDSxCek9Aj6Ds7fWFaDHdf2",
  "key8": "5wigC39LqzgTZshEQNZhbFMsMZWMdQWJUyZYffERsaLX3862BCVugy4KB2EDXfBo3c2Bh76DZd1sWdMAqBnRCtF7",
  "key9": "4LanZuByPNA9AS7CvYKynau3rMRwrBZdbN2ZjHLYV4SefWpupUJxsbgfJ3cJNma4YbHyddGfKbAbrMHa7h2tq1r7",
  "key10": "5o2AAtTRiX5AP5uKXYJjc771GUD9wZNcmGJ3Lkrk2WEopE229TRH3uRWRkAjKWHEvc8gfYc62jeVtBRryXh9YL5u",
  "key11": "5eDq3qaGXWvhkhKTym3MELoUCrsu77GGQ56EWX93ZRgpR4wvmFLN1jZHoMr7C1zXskRikTCd2qHT5AUBzBDmCAJN",
  "key12": "59CnWVHjqTmXMzfvmT4ijLBLPdWJvfhWFZxLMPywZMdqLfRymbRcNajXtG2wJ3ZCVEWEDxirNX84kRSRygAPihsC",
  "key13": "XNZvkBXdECnhcbXMBX2gaqPcMdcmy19g5zbMidd7CzZjBfmtEAnfykdEVJSnW9y9EwbUDkbtjsN8cJ7ky3aoGEk",
  "key14": "bGDqpdahtHnKAMmWNYHGWKnLs4y9osTRty6GjCNxaUB1tepXxhowsxmEdjkUbYxafpmsiVMi7H2m5tVnY1Fysdy",
  "key15": "31XAuVVn9cKXhTqoTypUk8SHpVf1Q2ZW6q3DCxvgwSsZ7tgK531JGBQEdamvAyAsXMLrDrfLURVaKWKVHysnqLoW",
  "key16": "2JtBxZ5nQSsZWQGJUg93bXoB4EX6MtVg8iBpkYjkTSbNoK9VuFs951rHZMHaKPEKKCEF8awvBpvb6eaeCj415yTX",
  "key17": "WCn94pJjrUSZr8ZrSpsstudJvtpEqLBWRi77EydKdp69YGAKCpmMaCMrjXUfhXHmzu2Qhv8LdeJDHgimXhc7eyZ",
  "key18": "5UbsPupcGaKY5YnZRBmmKXeBYW52LqrPrhxh3oer855fLQCsaYhiZWittrEMespowSe44fyUtEwYuRmXeTRPD6ep",
  "key19": "AMg3uzuuKDWP59Cj9Nsv1s5KDAVgxXckjNh62t5qFkFSMWsV47YSoj3hfwDRkLMy2ZJpBBN6azNjbfvNff5pQAt",
  "key20": "Hqmcvhh3GpnSDPNFrS81FvZ7FERNHmbr1aPdp6qAESjCBdeS2zxAsoHwf9JpZ3ZkW7G61BFL4BWV9j95cLfDZc8",
  "key21": "5XWQxtsxCU5nmvHDrygWfXEGy3Dq5v8t3sAmiRteVEhVakDdc43jtyTXDvJSP3i56oaQ9MnyoLaSaJsKbFpuPace",
  "key22": "4PkqRFFnMpNSYkEdgMdKjpMguRCoiHEyEoR76NeJ1JPZvCHC5XHvVMKDJppxL2c8VfizeDB4mRbmzhiwJdBfVnyB",
  "key23": "5A89YuKTPhuyGvrhwoWrTJHc94cM63sUYdqRHTbeEQgdweHHt2UeUXtgWbAKFRdVEZ7FebMvRucrkeBgpcPJx2mJ",
  "key24": "SzhYqWX3XB9evxFKRb8B1g8F1GQBnMvptEKvovUvZMPG7FHHPSASHTE5ddh6cVY5XPDbEZAHwAHuqijY2sE2F3x",
  "key25": "mcUdodZd7c2QedTHtrhTamfeDe1QsjE3FRN2zxmGRXz1HjQbR17LXg1GowJyXh4JNWtWzcY7LSFaFwwu6wD6N5g",
  "key26": "243NLNLhNF71EDcbtXqamUarjafGuTcAb7MuXvAXFttYHmJrwDt4jb2bKBuFRzmC7JbeBKHoK1WcphsR9bLgtS4T",
  "key27": "58SbByokgsqPpWehcyThdSzBjo8h9gY9AFBUbqWzFwHm6iaUQXY5hnSfGeLhMoeBnTt2e3BEFQE6fQjTymWuP8Fa",
  "key28": "3CtiKEYjjReCe5sPUG3bqfiBBvvPv4AvrmD7hNJ71UgEb1vGGgQD9CTwSka5M6H6t5P6qF5Agyughk5imQQxHe5t",
  "key29": "58Z2Xp3BQCQqKyP3zikRZ5byDgnb57nU1YWVdt7mqK8s61kqCz25ZzDynqa8qSc2CkobWULXoWYaHaUKB15SjTu",
  "key30": "3dSdibPyF9425k6rGKHtCaTUuHSQS8aB3igACEok7AKiw5Hw2VXwpDziR3PmkFFHDNJicCh14jnn1eZiP3drYzz",
  "key31": "435gM6vamTxNvgGe3xDVwmZe4C5Yc4fYLY29LMAA8if9Qfj2AcSb4B4vtN2cvboyyzUweS7dYEr4XHFiHBGt4SHc",
  "key32": "2FLLSwDhetBm5jtAEwbtpsn712pPj4564X9dEaJNGpcSkuttHpgFm3bA7Xxwd246svWCcyytiEcBMttMdhfDrCcJ",
  "key33": "2rzn8KjS7Sec4MS4aoib1rHoTesgrANePVvBchsejd4oYvmMp9SutVvizQpTC6f9RVR2fFAHWFUS8wqx14N8PpgV",
  "key34": "3w2LRaP1KcZ9a6K6KSZF6BadTC85HuqGjnKPdCBvPLSXAzEdnGUrj8y6TGWfvpsQsCGrboJT7kjHzqrXCMiP8QDL",
  "key35": "3fXvDXKpNMLqbMnnGgHqxc2mP5ZJhJAr7Fx4zT7JwyHraZLfReMSbosFRwJW6wv1XgoPjYu9g7MQs3jR6Xe6Wcgv",
  "key36": "3NeyE2dCeaj2EMnNMsmrRPm3KWrjtYA9Z5M5WMbf8ZLAkgYQof36LAymfuNGepVFKd1XMHWG7fDpvjko81dTuFzm",
  "key37": "3Yivhk9UYuh3w6ccnk14m1tu46D4E84Ha3GDrP5ocDDTcM8bMyfzVz2D2bM63nzjTyacMSvsmrQBBf2ULJgkD2JC",
  "key38": "3Ciy77iDd8iHToJLhdi2ob5STc3UkrUed3uGWwmPAAdQZrSj12r9BAdh186nmqVfhuTVSWFAHFFvzjdzuaGBuq8e",
  "key39": "3kuHZd7zM6F1Ypzy5Nx8ETMX5nRtRNuEKc7n6GijAchUjAsAKfRJWQsUGywK4LGm38DnrPYFekH28u6iA5m11q3Z",
  "key40": "Tdq7uEtWxfnhm7pjMJXtgq9kJ5nPKPHBHggnSeW7X7GdyvUaxXTZZu8bbak8ctKh137v8rUzA5ENLouYg2aDJ2x"
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
