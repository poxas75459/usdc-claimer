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
    "5FKRV16HtX3C3LnZB6KjtbdeH2TLvhv9YQdSXhSmp8dcUBHVAwjXxtCNd9874tzoXudbvEFiABQoTfvsewrXCQN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Boq8h2L547yBMAG6aHhLp7dCUQRrYXZhKpnqgWkwaBP2MujfhjPUeBma2zCtVukd4f2fpW9M4CJLqBAVP2BfNf",
  "key1": "4viMT5sw5wUXsJFDVX8qC2EDeZFsKE1wVhmrfPXxX4EAPYFwQtXMaKgzZuZiiTFBsEfNwqVwH1hc3qFn98AoqMJH",
  "key2": "3yAfjZeFS4pN1hhxNER7Nv2uJgm9YYRYE4NHy3nLzsrokmffbr1mXtbDEz55MZRUkSkXzxvyrXmGS82zrLZuPzbN",
  "key3": "2tDYxRswN9FNVg9FKWP78aCmrj7Mo7bBte2Rsfdr5vaNza8F4sejKkhYzavwAh8zLn3q4yianAZKCuxaqQsFM2hC",
  "key4": "4dU88x1V7HUUgXWz2uTcY9zNQKhzbHW4rJvAkZ6f4HKqiW1J5MQnnajrPkSdU5zTpwQAWyqZk1Yx4K1LTF2tn335",
  "key5": "RUYQvg1WUhQZNgNgD4MJyCgLpNRyNDRXMYVeKw8KjZNE25vhKHn6gyUmUQi8DcZRi8CaqVaZhSCUQWWzGKnEMad",
  "key6": "3eGCZDKeJsZVVMRpS9LZPheRnuN7s5gyotzMHqsW4wGKc6rNzezvsJ439XkXqSKZrJQicReR6FqVancvhjW61eof",
  "key7": "hXgfZnsY1mmCptQQ5TW3bUYkNG3qAqUHonyw9KXeu1CtCe7AcFUnZuoJHisU1iepxwguJcjZthPGdgwZFc3TZkR",
  "key8": "5KDLwFGsxqBZSupBVbpoR4fNwim2etLb4AfN6VAgNRQPWPFNK8zfVQjt1ccpefgYryRZJkf1Fci9GKv4vMFZgHvn",
  "key9": "tjGZiPQ8HnN1paFgkcoHk3azdtRqE8McHgreUz1wXWT27Bdt9U29F1SqumizN7MdkQrAUGTszhkBUPMKetxvEiU",
  "key10": "2dePHHwKZUeY7y7Eryz7b9g6ysx1S3jiNLAi3Zw2ACuA6XqgqUKYGsJqKPQVVcbJGsnFBAqn9u4dARMiS36uBjkX",
  "key11": "4qCLqwxJ6RuVc654XN2AKzyMnBvyMbh7iBpP4xwxeHNUv8mDUSbuFgNtHRKwH6Lf8qEXcM2pPqmMRDorLTkiE1EE",
  "key12": "4UJwmA48DdZnpymS4mwshc7gSUGaBUtGtwu4CygoitrpjKRBupG99pg69SwA2QsdE56q4kSVScnVUShdF1CRz6a6",
  "key13": "1DPSiSFpkTzrLDjNZYyko9p3Ly3aPVT1b3Fjwy2pBAEuER7otPyT4zfdo2QEFvGN6hYk8Pb5yWHBhu8C4PciFsX",
  "key14": "2QTtaSF4xAPXSWfLLqR9RTw5DUvpke9MwBM67GLpYqB9PQVduY4tjQTghcRvrhkyYsSt19iVhR8ZUcyyqqXM5jHy",
  "key15": "4krigVBar4xk4JvDf3T242U99YLMutps7yu4H9GPn9dAQNy2b7ZMXtQXy1Af81D3WbgRRGTUttC5nqL398eue4tZ",
  "key16": "2XcF288a9okFJEuD6JCSbjPZv15BJ1cdcDffL7y1234D1WdfjbHN24Pck8AVzsV7n4QnzyEfbxe8r9Fa31DC5zUt",
  "key17": "3kTUjh52eweJeo6CptDbhJN7yHraZGFBgRqGxEvecA22AwPeoRw1GHS2cDdn4uZMVFo5Ph1bEqQySB8QYYPa96CD",
  "key18": "3mNUCNWWAUVkwsJKZjfJxxwuSro8n4yEM48CESiC7N5UwjTvm6SxYJGeN8R9axb2dqfKHsH3quPpuCs83NkNVMDZ",
  "key19": "2qCt6Z5y19eKVhPHXFMX13xw56aPhiKbr3sW1XyhWuLs5vDY7isCsrgFfujFN7QAMFuxxYjesZUvtR9dzFWX82i4",
  "key20": "Kd5SrSk8kQUK6TPubvevPLGxxnFfBdMtL59kdNJz6u7CCUfPT5PfUdJYY1yyoPfbM7fyMdB4Nxya375XAHE4p6n",
  "key21": "5KPYWapMBiKMduCEJ84ntjVuLFB6tpBfhLWvnS6dfz7J4qDky2hTFgtief3tbmEJgNdUPxxAXPxnFaa4XrJHFLgv",
  "key22": "nhKVZyET1FmmN3cgyDez24suAUf4cBUFHsw21nkeRrW61NnP155HRheZrsrCfE1ZSjRwQRgfDvHHGzhHv9wC7Kp",
  "key23": "4ktTLGPTSLfJqucxT2zC2HVzrE6CZEBqBAcrnNq7qfyZMK58Zo2x375GaiXApTuCr9scLk1D9tmSCtxaKEoksm37",
  "key24": "3fjKiAEr97BDuChmb9Kc7aT54aPXChxLURASXv56N2vF8pQbFcceBESJm5aTe8VF61WzKvb9pMzWG2NDAeYnBCHc",
  "key25": "4m39qLnv6EZjJY2K7fYqYRzjfLSwqukAE5EbE25bFDFKmbo3qchQMSaGtc9Fwhx2g7SWzk2gb5Yyg3ubyUtQQCCq",
  "key26": "2Fuc1p6WFpsyupFPEY8qEJ738kcZJ5u3Zt29LzaUEcGpnjKTWCZNHNPtnXaVfGLhc8gnjL1S8ukSMXs78tcTtBMY",
  "key27": "R3VYWyxZnWg4vQWyXKDJyyLypQDSr9DcNorVcv1XDdwE2iLmfnTzMqr8ZQm5FhCeSaM6ajPyEpVFRZgWWEN4fPk",
  "key28": "3ncpTreXoee6hVqcCBNCodqvqFHmeq2au4ZSJ8u38QJkAYGqHdu22c2sAn3cJfkqRCzUP6t4GzFeLJ5z3zaFpj3L",
  "key29": "567KKZerdRf8UhB8KqCyoxJSHoRuBaqBvHd1dr15DdramMu3TaM1rJC1QdHYu3JFEL8fBtknGBA6oCVsh1esaL5R",
  "key30": "T4auqRRLYmcNuzDYxCiVRUitCZFJwYbnhtAq73XTp8SPvbDw4DpdtXgGJ91Hwt1gefA5YENz34DswbLo25pBkbW",
  "key31": "2VRPjFQ2LYguRGfjEQNdCNCQBWAJWohebaSK8GyLwTvrAKunJ5XB7WBbXHPEXU6Rf63nXDYtJPKWSMBkR84pLT1z",
  "key32": "635QMWA6f8jeXLkWSptbNfw3WY5n3ALRyXHGYSRnvXiXHukAtwFAUfVQrp5Z5vGmQ1RVcDaTd3oeXyLQp2CTw9BV",
  "key33": "56mpGdRR3wRr4cGkhUBfK6Edopei6B3WsY6BjmPm4n1x13TNZ65Mcf2rkenUXtHeBWVYaWbkjgf9NVGpzyrDyG3v",
  "key34": "5PdynvvKM3TddQWGVxHgmbKcTqPM4BCAbY1iWxJ4w12vM97rUjpte2R8FBb5cbFFd5bc7wJZCrctCeZDeQiZPJ4T",
  "key35": "35EnCf842W7N9z9635oGzph9q2odtvEoFWtUD4272jWQdx2fxsTgMAjv379REggckiRdSiWt5ggMbfHY3x6JnHgT",
  "key36": "5ERrkTiS1WCfJX3oSYVqcLk2k9djmfuJMvqDBUXmeMVVDzRRA4Wua2j6iNFo8nUTskps5QJYTt7GFkiFvNyJoKJz",
  "key37": "4Awnnv4jAwTteJGiZ48BqWhLnjLcEdohaoffU2GZPs3VouXr4VHi5vLDDruoA6f3t3pd3UNNCkXTc4kmKbP8Bx55",
  "key38": "4H3B5V3xDeYqXAnvY1WNEbG7e6tovTtW2mXF26ra2m8FFNamNnQ3qNwMKyszHJb7Www16MectG4veQyWZ5SBGsSL",
  "key39": "2wV4hQ4FyjvPHKNiMG4haoniphEnVU5WKHqw5rfVzcqGQexHmtf1J8hLiipZHiVdP5AqBGdheV5JiANrzZNALMX7",
  "key40": "Keai4jZYLbV116i3np5e4fKLHn9PcmBVm6QcRtEiSR4A8KjMFqPzMYuQyVCKXV1TaxM95DnW6gYsJKC91jtGrHK",
  "key41": "ygEpQs2dW6H7UovUN9KBg5qGbRiThw3iwjP8V46LmDRzTNzpYjCNjrgKZNHgX6XSNmt8JqVhmbyDbzfR14sbpXX",
  "key42": "3hm2ETqyrgL5GN3UiUYJfXEhpth2c9WbDLgDgaW149kDLZ1KRTT4eDfBZ3V8n7QZXjr4nJ4LUfLqrb8aSCwuLRMG",
  "key43": "QBdqvWrz5Sc7iDqStgbcatn77TBqVK6uMnxnrDe1gURoc8zz49Ga1fbmbL9BBRQt74v5BB45pHwpzi83x64BrPZ",
  "key44": "4sbtckQUoLdvDxwmmW5qVTwdWJGVhgkYv2bPE1fGGa7pmnox2L93oB9fhRwUsMZrRpBeCzNvo75Q2eEbVuT3nLw4",
  "key45": "3g1FXG3T6HZYtPFdV6HfP13xkXKKNEDKiBRa9YXcVZsdx2kCNw1qoEXk7ywJG6yQvav5ZYB3xKVmPH7dSjFsQs85",
  "key46": "5qnMz4tmLrEc5hikePQbHNFXPmad3MHcV1bqA8WRiwhYUMxgPib6VA8TbtGvyG2i9Jkr5L4Ry2x7dNXnZfyWM9nY"
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
