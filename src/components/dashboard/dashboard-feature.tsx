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
    "WH5q7PqDnuZJU96cK3W9EL2d7TcW9r6KRM3hYGoHzue3EkGerYdqzzwytEofYoU816S29uwjhvwq7jorjKCpuz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47cxxFNtQyH8NpSzxyGri4NJKGMJHVBRmtFVXUJhyuq71swqwxG7kwGbaKWvuR4zsyB3e2aYkGGa6UXeMWcSRRQQ",
  "key1": "4HoBuW1rwazTXpqD2PR6BgeVCvJb7VJDBdRtad8m57wib8jp9QyFuiU1pqE7TZuUqNzjKzk1BpjHHRHmCGUKmnPM",
  "key2": "KcaXUfp3reRv4BwTTxGHNt8iPSh7VnJhzLU4FQNQiBBJiVyfE7KP5TpXKU3WRAzmnENn5nvNsAarmWmTRvF2eyk",
  "key3": "2sLM5S1g8HBUPUW2nKLrBbheu4GHYnHnaPdo2yzChQ8VhKrEqeFvEq9jQYbUmSKRBzzrh1ydADJtvbemr1mGPTbZ",
  "key4": "rovqsW4toDmZNs8BoR9ApdC4kQr8n6ojRpWJcoGhK8S9N2FSJX7TbPdGv3SfCGvpgxP956WrKCZLKtiXcYw3eVY",
  "key5": "C2LAM8d5AesfigDVSv1tRhz19Y8ycWCEt1rqEoDqb8kb2vzqQWafJtQr4dXHQGcE9vJnwndDNGGW2itgL6CogHy",
  "key6": "28HYHhrXHhkz6VJBqwbmiF1jin31PDV2NWctcgE2StsXzSFzc179LFwsvCzj2Gb74rxe4EY2eQnQzWQhF4DQfBvP",
  "key7": "5AW1hCwGEidFhBJmaJ8Ri8y1ABBjeCET1aMeUFp9jBntiE3LFtfzTbGzZrNzXAeYXJZ74jmQ71NXJKUxgQ9a8CRe",
  "key8": "358cWLBteFv1Zx9C2rKmLbLr9n1u4ELS9GmAKQdEiK3VYN6xqv8jcAjMhY3Z5BU1HkJZhR8urDCVz7E1598KtUKD",
  "key9": "63ms62WUi78Xy1Wi5nhkWLuU54bLcGnf3k7g6iPtG8FuwXSTwJHWjQKUDrkqi9jeMabw9MWY7tJrCRF6WAjLci8d",
  "key10": "DAbbq4VkvZdpqEU5T3rUmqo8tvt9VemnxNdfeUS7EhG9SSYVxSA9SZAbrfMn8BYNATvEiYhmMvFbyBCjode2zd4",
  "key11": "4b5CxXaJqMLqtv33FSeqj46QZNdPpP31AT25PWQE1UM8WbCYsy5gGRi2TY5RZhXBAHgiS3H7awCD515AGJMBRGTU",
  "key12": "64QUdoAGvdFSb3BQAwki1yZKGbpmR9XsNwsn8TauE7kzTfzZ8Gs98Tzcb6n91SpGar1MipQ1JTzvSCfBu3RXDWsV",
  "key13": "2nMh5YSzWGdLquxgH3sUWQtiacpA8D7aXjrg1asPgaLj8zAmhuHb8jVcMqHnYZNFrxRDufQedzePrWDU4dfCMNg1",
  "key14": "4Zye4hdP4u8ivjGKgLghgqNWVc4YwhBtv57VkGZGWHJGcaXtoSWSyogwf4wQ89Dj3Q4MwZCHTffFAGFSGPMiqcq7",
  "key15": "3mJQ31A8nCjMmqFxBGQy3YZAurgMsK3EfmbabBexn8GPtU1TkzqFgh4aAWTLXk9T89F3n3V3Qn7HQ4BFrRPrHu9q",
  "key16": "2Tbk2MxHVkGjU9NACaQkQRdQ9RuqPAzviBUVB8gzdmu3Y5Hh4sH4W8zxjtMMUgWd3QTNSXd5nwMudjf7QALhQcxP",
  "key17": "5grwK4vei4g3XGJqvvJ6QwSRdsnsBtwfMdcbiJCNFz7VGCtnjE6GMEsfkoMyVgZFJUvQmgLuKcHG5CuGvPDSFqG5",
  "key18": "4yBJevHWxBQ82Li7bL3V5QVE6gFigmmhQkLZGYbBEsUfcrJZZyjHLCXHfKN52PAEf8TaCubM6mvqh953mMpeySue",
  "key19": "63ZbjxL4PTbJQeUiFF7mLu13Uw4a1CLJMttGKnVukiMw794acWRdo1ER4XiEMar8QhmzUPbVUmdhQWS6DAPWLEqQ",
  "key20": "2eUXKSS1fPRQUkS937cJtytTMP8cvZS8cAxji5NvspN6bBoZrbz1s51kx6UHHJr1m9NddFn3AnBJgSqZtpNdACRY",
  "key21": "3MRYFFNknseeCGs9Ec8J53wzFwaki5BSAjYc8wJVPR2yEU9qADzwbZF7y7fscHttpH4EcL2KnPyJRTVM8LVXzmXm",
  "key22": "5JnVGVL1pPrfsbNfvuka5Y9pvWWTVmaTAaArWCZG6ZDeEukHuC6qJ8XmZVwQ72TyQvNZQ7qbvmeK5fimpYMfo7Xt",
  "key23": "3ktCB63T8hFW8CDq2QV26fiZ9xkrDZdPiUMaFLw1P5aPmkm8HixuvCQSXMb6TjhicYfsoJaHdj97tKfKQ8RJ4wVD",
  "key24": "3WTLsfkvBjk6LR2Ef3Bc7HaGwwb8NAVWJsLK9tow1XsChdLEkzWqsuVMxGWEwqxSogATnArUQXT421CZjsBijzG8",
  "key25": "2HCU7gnTnLNzaojnhQ9DmsE4KmvUyTsu9A2CBWcxAsNNLJoSCfdumhZ6BKyLkvCKbFD4aj9wmUfu4x9RvaNEdsK8",
  "key26": "3gHaTSojRPrt4zaZuzcutqrtgiwA7n4jBKqcwtqJbddvHBJxhGLb6YvJLip2d5eiz9sJPanP7X8DEtcAetLFivjH",
  "key27": "46EZ3j2oddFmkSDpXEgjeQSJXHyPqmurUcJhfhaEMFrPGamXxmBreH6CzwyLVpd9LY9x7txkkghioDfDC3Dy7sHz",
  "key28": "5x4fbYoscwzZ8YjJG8YhqDW2CGYTGDU8LzP5PbxAA3JbbXD1StSfkTxdH1TBoSg2x1rupAWFL2nEeBzwWVimngP6",
  "key29": "4qAnNkRFN1mFM3cdfevRhmEJ9H8CtYU5uTYaUG8WPg4BKzJq6JC6LCRtEDpZx5VHfwWw7D8dpSPLAPwj7FhwWNYe",
  "key30": "KNmzEEVeRPZu1YH6YnBWwwPbkau3xN86Xa9pDgioQnhtAkQgFHvhEXb9c9HSxpxP8WEoXpSEstDKCsahNFoXVz4",
  "key31": "4DxnFUHU1P6YThETjaX63wdmMwurHo1QBfJAaQQEcjeFtDRWz2DgGvbtpNqSCFxvkjUJ58Lus6uFCGfvkDjYEoEx",
  "key32": "7xFCN5LtLMf2uEZumKTBFcAWWh8UNf4S2RPAw5Ag7feMnzqpowzgbpz4RKuVnSceGWCMbcMePm7mfkXYq9y5ULo",
  "key33": "4Ftx61gutbHV7gDCxffLcn3rcoMHafV5CBVFjkeLgMftTNa41NoFoYe3iCJG3NVWFEncsEcRGN3VLYpi7yJykjLw",
  "key34": "2Gmcta7VoYp8oD5S5t4W7pzRQ9EgGThDVu2izETGKKBqjd5sVFTj67FoVD3jKQeLSXELuNuAtCFhz6cPmcCaNZfQ",
  "key35": "2qKsQsfwEYZYiKWTN3yZ84FkMc96fwF2B65zzheiCgoRPhQPxmwesdNeeUa9rvs6PmSdeC9NZDKJLxCY6LjSjc6o",
  "key36": "aERyJZBEznps1U1EdSFDgutRGY9aHAa4EHYbQL9NJvBhJNjX3782LwqvpcsZcS6EM7P7Eusg97tAkwEZNgNe4jY",
  "key37": "3PRLXtdoKvz8DwqU1sNiTHFfBJk1CKKYbiaJ8BabiX1xxNgf4QbFnEMUgKUfK2NBSyxhxzpXfpLx2d7UWab9XQCJ",
  "key38": "2Wfgr7rZk5vPzoTsMJdWRSTTfR16SQ8PiG1zCh3RyrDqBgYqxeWJTN6FX73MG3fQk8FCqHuhRWm1oGr3Q7ES6fGJ",
  "key39": "ZsKs8sotWBagRm4XEb7rLBbzPTbVNSgshf66EECQE5GdH1joDNQW2eRTLATmbKCcV4QmVrJQykmyj2xLgcKiNsy",
  "key40": "2jdZEGPDNwVDfL5qqnFXVBEZTLtRJBrXjSH4P9rKrN5MzgFMeZzUxmVXR8c6YMYSJe5GhnPWjK3ihs6QgzZWAJ1s"
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
