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
    "42cdVUQd6X3zwPxKtGoMEdKzppDFUfzAoNEcZcJU4jezoW5bbAVuqDmPHmJLKGLLAGrwFrDukQLixTpCTsNZAZFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zFhEF3q5K2GL25YF8g2qDAci9a9Fz8g6wHXmDEhmN8BG96KuvvzMz1YCoBxkmkeLYEtWfJqEq9gRKyc6mpWGrnr",
  "key1": "4xmEdJqP6R23VSdBcCxM2D7TrUKsf8dfsZQXz3tBDuapP48196HqKzP2W9fSHDakr22hKADR8rA11NmZYQ3P5bDj",
  "key2": "5xdxpj4uUdMKCVE3upEEqq9TbMQxzamtr6334BpdT3tqsejemC7hXQnDbyDm394ieftGQjHkTFYS9kM7ox1a6dTi",
  "key3": "3Z5bZoUeKUa2cpTSFyiCy3712er7cyNRc76QBvM1xbb8XXEHgdb79JRCfj6wmPkU2tuBxhhWCcTiFiFhMjmBP5bT",
  "key4": "5buYLvtG7uFP6r944fqT84Fo2zqFEpPR9nJYBxk3XGfbybxzKWNRyhTLvvwi8AhJ4SJvmMWzgNCaNBEqErgWUGCx",
  "key5": "5zKWExpcTuMktL7aDComM9eRMKoJdCpLjhJHmhtNfJ2iTGvbvDi17WErQT8422zxBePkET9kypRK7UFeQWj9p9T7",
  "key6": "2atCuQe4m9qKWUsCn2DGajV3ph6B78TaHDTLCGk4Jk4qtoxdNBkKFhZj394CEAhPX7DbwuWfhoxHyRpnDYydB1hZ",
  "key7": "5gzfpmQVAV6rUAECkVrfoDwSziRmiXxJsW3oaMeLKmNR2SSEFfmRiK4iS9ijVGtHFaaqUc6Dw5KR3f2mzdPqyEWF",
  "key8": "wNsdeGs5yLvDuH1vYGBGA8MAPsbSbVW41UCJXZ7oNheVm1bSBsvrHAEWLsjoRcC6HnDEkdtbBFKhma5jKzaAfcT",
  "key9": "4p6gWpLQZs5YhKnm4kuuE2wBGHuFBPThzmsaJ6fcqxbecymBhQoYe5TEo7inceW2Rs5mQ1fJQQPfJr3vunvJwSsv",
  "key10": "3hrV4LQcrCorjA7NBAvnmRMN5MLzZGSUfM5K35kC1AjVoGq131W55gDW6idgZkUPcesmdZNHEssEixgoLe26b2nE",
  "key11": "4bL8pGYQidjwnnvDUrEAUH6DzXuA8wAjuTBiV8P7K1Pc2dQHE4fKQ5kDV8qVVgCov3xAWx78FuGpGVQhiakvDrv1",
  "key12": "4597sEuJr2k3hbRnBpwwqjRezqJjXBZKstYxE1mDFzn2aBD8JpU5RA4FbKoWwpgR9imKahRgJ9Fi3QTw8QzYn36C",
  "key13": "59bWUYUnxSsd6YQ6LQ7GWboX5pze4c96XyVUroJfpveH9pAAjh7VGEMkmLE8cMB2njY6Z1xVncneUknSwgAx75X7",
  "key14": "3v3b61TriEfM9qLYWKnx7MZA6dCCVDXHzx8nF9orRDFd7ZDF8NYgtBiBJNCdCW8yQ4opEpjeb7XhafLY2Dk1pEcT",
  "key15": "5R48rezowHqhumeKettKDBCdQM1w5LpCn3gRLvCEPUbP3yQPQ9gpQhNiUyvKhNiBbxqGSVziiHaGfKCjnZnJyB8M",
  "key16": "4mZN9Laas4waVZM9vYwLsGHHtEfaQWw77saJX5jmJUWch5pmwhjnhiA95aToTekoGj1a8jUwcqX2LDuz6VxJQSNQ",
  "key17": "HS9GqukUPDfk5G5sd6Z5mQ7cEdSS5vkYp3vn6RctjHQcvn4FjoY6YCVJWViEq8GpRBc1sYpuPKXnGNB1vyHiZXy",
  "key18": "2VARKRBTPFC7Ccx8p4owr45o7j8iikDSKcX9JVp1mnxgqNWqdkshEoGtjHxQYuqgrmB1dkHAdkPoR8NurWQPNwYH",
  "key19": "gLhjj4E9upMNNLZXkCfjo2Kzs5WMjtkFrRt6VAGJaktEdi6WDLARRJUxNTxxFbefFYrcjo5qtnRVJ4rZbLWUiwv",
  "key20": "3M5zBsp9rF11JfHJZgQxATVxnTGvWVvcRHq6RXkDocefzCcjq5DoRaQkPJHv3mRRp1TxMyLU5F6ZH9yxWrC5FJyi",
  "key21": "3fooj8k8hKvswqv4MUKvx2JVPy6c8hifZBbLUPmJBnnagivADvKmG6FX7mWxeqUK3oN4tgJTcq4WD6UKsFHK6GPA",
  "key22": "36GgndoWVvj481XvuGvMwUgyAD3RXBHDj4qauds8vAxXDqPCdUEmT3APK85AaJJyotMBZXNqCpEfGV5ATMvNA7ZB",
  "key23": "5jqzXvJbRL6YvuEK16TC6UDvkjq7hxSVnkJNTvh5LaHkTKuaAY1ToXF9P3t1cqJX3jQU2ovrRM1TWwTSRgTeXNs4",
  "key24": "3hGheVfTnA4d5JSEg1RJsfZ7ebwQcauzaCZYmpnqjdbi6EjV5wp5F1U75CZqUDX3Me5CVmdsSimeT9ojcRq4SYEf",
  "key25": "2wQ8HaGbStd2NWcGPyUNtdk4by8wBfudUfsW5qdx7X8xo2RTq6ZiyPeBGLMHtkvyLiPJpfSLmfCoQjwzXALvR2Kv",
  "key26": "3LJ53ZBqq6N8wBJe64kjg8siSE3Q2CKXmF9c9jbNYDcKD4pVoyh2iYEcDys8XhNE4n8rQSE7DhtRPsGRua8JSNdC",
  "key27": "4R8NTsYWQepv6Dax5i9XX427nzpQEVQdi5keWXK4X6NnWKdXhBD5PguTdLSx2EfbYFrSEr7ndRDkb6ZfmFT9RZbb",
  "key28": "5nBppQbmdD5mjEbxtvoGSqcCNpzhRv2BUfgfyT9TvShWg16r8aVKHYzwUdCBzb6jHVrPkXAnVAosfgjo79J3JULR",
  "key29": "d8DJs9V4kbrGHzEr5CLNEHr9vk5Me9EVPhDVAa4rofVTT6pN7wR9MAzASM8gwU8C2K5KjN3BJLwANENZHGMBYKH",
  "key30": "2aKbD7daJFtoJRSUmS48E4wSZiLqviUyo2zmFH2Xj5zmPggLJTf21vHn5aLPtaCUvennSHBc4twj9yoSS6S9cVon",
  "key31": "2uVCRCrnVHZykeH5tc3BQXRjqWhFggSJ1mia9Sn9taqZ18jNqpC6wDCGR2MysxfFGquq3adWN7MAdyYK9bgK8xvt",
  "key32": "5tYMt4oeUKKA6qY6YCEnWBBSCBgqn6nt8EPxny71jH1kgzfsbAvVWcxQGQgmZEvRWoB8CmxNjX21B7viWPX9m7io",
  "key33": "4F2E7WAhtizeuuJB2MKRKCiCL5SAvNMtZ2NpJB8BHkvegkYqx912zcxJeMA6poSAkmutwfM27faL8ugibC7hiF9D",
  "key34": "5fPan454HLWxs1DcboLt4RYHyEeVR7RSyNNEy5E3DYHaeocwUCxmKpR4bn6ApDGgsziP2toUAoiCtCZegVVJudNc",
  "key35": "5sCu3XFJTD431kugAyp9fwytRVd8tJZGH9jmweByudaxh4KZhcyCx2Jv75uRL9ntYwgnJCFPSrXyobpPrk4uHqA7",
  "key36": "56mbfwA25oe7Rv3jcaNmc7SD14zF6MZoDpMeAQrHnawKo84goJgY99ENouaXCNVnneGwsEeFUcVeY9A36n34AMPM",
  "key37": "3hhyiaNULjCL9kipB25DvrafVwrwLx2Ehvn9o3LA44b7mH9wJBA48s8F5MBinfiFUbLeSofDz2FzZn4i2yVN3eNx",
  "key38": "2XE4oYgbFXfBTeuha7cxqTFLNGqfA2hjsqcN51iFEmndPPV4tREuzsV5ZfWPuthbxN5asa1GjXrWpuTSeJJcoCaM",
  "key39": "4j9sTff7DLpHD8v6tietKQPWFVYhEGD4Xfzw6TUsAGBm3qDzihBc6pZhjKvLKLLZSYAXFBUMSUHAwioGXTVDzHxQ",
  "key40": "2PagR4LVJZus5n7MG8A51Wh9NhRCcnCz2u2tnQdWru1FYuTeMtavqRzhsxZjaNVA9nPE41Hu833N79zEqnvXmWVT",
  "key41": "5gEnaVLdMyotXUre6rcRpgv3o6tUFfLBUeTDFHTyCs1LW33AwjpZnBwzKpf7HbWsmdPX9BxDBhXJCXMuxYnnzqkW",
  "key42": "3p4PySwJTkBYgH4rMyefWsnmzDZLwyrJqGDbJsVziQchfpXNcdhurqjb8cZMWNCTCMjis9rgyQ619FrUwW3qkhrf"
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
