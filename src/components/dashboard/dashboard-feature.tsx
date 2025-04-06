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
    "3kJxbLw9mb3hqxq5DjYPKqQtTnyd7khcgusbrE9xhPsu2qponTiwoALu2NnkawTN5reoNMSGp7P4PGZCDPmtHmae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ys8cNa9Ju3kSqCCt4WmkQzTR2JvQi32YMD9osbsH71B6NaVy5odJfLin6RMyEYqmkPr7Wh8KmqegFogP5c323Sc",
  "key1": "5wRPGeDZWwF1wtSboopvtmK64yRZYdCkdeFXRRZebN23cpaQJ2JcPVuoms5FfauE7qqJJk2feWm7Hjvf4hGiKVEm",
  "key2": "cyiTzine2hUUFXXhDgQRxMRJYzaNPJiw78N8PrnmPMbcPXFA1irXAAL24DCr62vpTHqcjLfgkgLYCLg3zVeABpk",
  "key3": "4nNBEFruBWeLWJiqkBsEB5sKHwPCtKDhg3d4LyfVvxyMTbCcptjSkZQb9KV5CLgjmuVSxAVvUYbUck47h5csq3BG",
  "key4": "62VxaVddX4KqcNMX8VvksdatUhTs1rZ9hi7Z9DfhQZAUSsYVAQpgdVqn6qyRGSyLnW9qTxU5YwMstL9aGB6G3YCM",
  "key5": "5gk6UmHgdDyVqBp2daw1LkRKuKRH5gj3d5k8ppLF19BFJbLAK3Hc8nVTkEtm3LsAzVgfamMMiq2tcjSRJTmiSAgG",
  "key6": "5SvpKJdtjbCiVWqUHfjrtjwVPxq76C6aqSVASd39re9MrJRLqEFFH9ZvckxT7iL7nTh8d9yzfUL4PYnuy2zdjEcS",
  "key7": "23NsnGrHHdRyJ2YHetBgaU7nRmxTRp6JbpwAu8a1uE2PRoQ3oa1swwiNJLgjPwLu91myaT5yWa1y9xqpxsU1CTZp",
  "key8": "2GSsc1vZUjvYQ3BmEMB72GYqzhNRQu2UGH4H7tjiRMg7yCpDsWozPJRTmZDe3vxePYjETYoVtBz4iEkL7jA6xRkF",
  "key9": "4eTpCF9D3GT6aeeusYyEhgboJCN6Mdj3JEKA4L8VJEayAvBE23kNzVb2noPusf4vxCczag5fSW5wnQ5r2t73ewAq",
  "key10": "4QRjddEgMm6cXj37z5BeYurR1j1TBmAs9S6nBFDiNzLy9U6AAZ7KpjDQvTo6uuEcKJuoPETAdUAte2iYfwiKzNtz",
  "key11": "23VMxxNXZh2JrqFsKF3yxmReVrzqY5vWnqhUUNEogi5iFD6TYbVcmKjqJYoViocd5pYyM5tCqVWTXovPtVMogCNo",
  "key12": "3hzZKHMJswgNCmCr7hYzpWuJPZSd1ibkBzsCtf2egKZnSTgXrhqv9W8k7p3HA5sB9FmyvrBXYvP8g8foWviHLCn6",
  "key13": "3LvYgJBCYTcxaGDza1cwC42fuvnuX7KQzXWrmgu7tHkrfSWpw1UGrkK6WYCuCvvLqBNra5bnpkDJDAUHaUouojLM",
  "key14": "4zNiFrHpRiuSukNG75XUHqbZTCSWpEx9Joc1xHVAVa57poDoL1Rk7BKqJQqJdjYV8SfbioeTjUC6KcDzA4rNPS8u",
  "key15": "34H94XigDurB1fut3LbWNyiHgCRhdKkL5KXr4QUXXqXNSEM3AVdLkeox7THz2koGbSwnXm46gKEFQfnX6qndBb81",
  "key16": "5hrwW29AoF2imsLb5QRUBdUWvRZrLtexMfJxvv92aXrEjE1zCfWzyGXaBPM3BA27H9WuBsumyzV6HKUJuNVvLZG",
  "key17": "koDsgT3FeYLQ9FbtykJUJvYjzrQVX5RZoS9E8yMsGUD3pw1RtgGAm9wckXu4Ek7k5GnQw1x2qEsmAD3iVXQuXfu",
  "key18": "aUe3BhNCVwsR3QCsqK2SxcpZ9PnHwnz62gTT3eWQ5NA7HUpgYsHXPrrHAeHvpCLsfN4ZgN3sAHYYejcFcVnihaE",
  "key19": "2K4xJt9HMMf5AhsNTGussTdixQppuSnYdF8EaR3RiqYJbptywdCk2DDwzXmNQHSJN293D4p9g2xdX9J6zm4DSopD",
  "key20": "KY6CHiLHepf5c2eKhCpSk2H1SWvYHhDXD2BQZLt4b7x5Attr3FQqSJh7U57Ek5QaEpRXUGfRMThuvz2yg7PLcFG",
  "key21": "4YrEp2gRmBPp6e7WzkySao9okLh2ax9eW1AqFbJQVQ7efMAUrj4FtSbSB9dn1A5XMJNQ18aAfwB2DWUU859F2A6d",
  "key22": "63KcqwXx9XaMZMGkrE4yFtUEdTswEyMUu61vKBw1jfbr9TPWtKKFNNzWk3TmgJw9EgETarUVA6AiotXwLppvhssx",
  "key23": "3xBbRHvVtp6EXKCFrRiukZAMeuR1dBxf8PmpGAHYbvWdUp4b5CCp19yEane3vzh5LtUCkzM5fsEtwUiFRwy3yhN",
  "key24": "28SYpfj44xYwRfehGJ4W49nLVhRJNrw3YufvAfC1p4gT6tY6aGZoVjFJ7bioBrrvH2766XB3fcVGFN7ATCyvXmuX",
  "key25": "5nouvAw6cTeW8tWekjvXsuksZAqYchzoUmuk3LzC92np6owaAfTp6mVZvGfUQYVMHnGQx9ZhCjwVEUyRgGNKUVBu",
  "key26": "2Zvaas1wJREvtEYa46xrfxSWe8DJqGhzpZ3f4rmkDdXZydn3jAixVankcR12BJFajHKRLdNZSpyo3AVH1L7Rn6Gm",
  "key27": "2XHNr6dUCAZ7AwpME3ni9xBWzTvo1d6na4cyipVzUtzJSZACwAUutAc1DLyFVwqDCYhYTyyW41X6QS7AZUDZTnGh",
  "key28": "5Z8cnJ9xQtcuPHZJXdek2qvPKHCAfQteP18rqAtjKh1aJfPbpRHG5a6ixFSV9kjh2D9PCNPSEHwj1X1nXdbxJhb8",
  "key29": "42Wa6VKKqxRSES9mJipYDrdBgmA6YmXTbmxuSwLKbeVBRnddaPfoKKgefa8HJ4bw1P6iyyeFprkrwZ2jipG7H8YT",
  "key30": "3p6qBZqS7vvaao24vZPvRoJUWUSgdwk3a3RbtT4VC4Vdi5LyLtcdKbrtziqXqRxDEUCyCcFM38xMrSASP6sK3c1j",
  "key31": "4YyGvjx4gynLM6y4qFg8soe3TtcpKpNZXp68PrTvQpQ7TkzqzrX36BqPNVeQwpH1RLDBPSzLVETmoyWUGTx514cv",
  "key32": "67ey44yu3MtRyRtSHHz9qLhZj7mppnUztNHmH5AXF5U4remymbwsBqNw9xUZGMqWXwj1MTx2D3GRvn2pMHqb8wLw",
  "key33": "54UfpposdoypiXJK7MdJWVtEUkco13VJpBGJJLiGcqzWLUfJQycLSVyqesZCgApqH5a8UoK5ftER1VBSjKHxnZ8C",
  "key34": "4E9aV5afN2yaM2qXNZUL6nY14xxmZubf8bgPsHhVjjYAaKQNPm6BECcu6GPjGweuakZ9MVD5bo7n53Ze3oPJxKSk",
  "key35": "3bu1yd1eA5mGdz2y8uFSkPfgjacqMH3J1vRmS6o83f7FEWRKXLbE7aBLPHQo5kFsMhXJwWokwCpV2q7cPmY21Qjn",
  "key36": "5T7XATdpYWBzVE3JtbyrEETVAbcpgxxYoa1BmKX6wT966G6kfxfrAHUqSwMLyPtYp2wsLksArbjsCUuoKo6WPjeG",
  "key37": "3rPuYnCG73EJGRE2BZVcpitE4WDdrK1NaamaJktwSd5BWdw8phaiZ2T1nmJoic1J8B3mQFqo2G7sv1vZgYG4MVwC",
  "key38": "2CNvWwufDSAjQrMYvPMKisyBFDpTVyvu6wVv2Za1QwHjcz5MhHXCJuRWtLgwjSVt1cr8AEBP5GhNJ8WY5sU9QVf8"
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
