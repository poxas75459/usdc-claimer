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
    "51iUp9qztNHHrRsj9ngiKGsxUWY7wFaZ7uAgbXyCPkNhRsMRWfGMfdWb1NDNZczzwMzZY6S7TizEYVS3UUjgezpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TzdxFkY2in9To8MhvokrrUEE5GUJipr46ZNRS5p4cPwdY5kBa4FmYBDUhG8WdgLc3oA5iH71ZmjhCaxooMjTZND",
  "key1": "4VAMvtadiSaXBF9a9aepFFCygDambZziVU8vhYhgNsLQ7hV2Krf4jF4yUPEUY2x5FczYRAgEyfYvEnxm4fTuoEQh",
  "key2": "2dyMqAGtXaagC9aPWBPjLfpvahsUovXe55RLkqAyF9wSNMVC1ZEhK1GowhLweXmPqxJDdX1j1a5yPuf9hvLGFBWH",
  "key3": "42wsPANeTWPsMUedih9hRdufLZ6ky883fWrNvQZ51c6C9keZtS7tR8t2G3v5Up3BUXszpfKoGuRD3JrB4mYggs62",
  "key4": "5ruuzy8nG4f5ZXMoUhotZBUL3wtn5pD4cD3YwAyFp77L8C4zKVzAMV8VbufjxpgAnspQ1GnNo6QHGSjnh6z5Sb7V",
  "key5": "v1JUuTK3hYzyydVmrezqBmMYNiKjrdSg5UCj3cp4Sb6pkg7yNzbY6eKQFor4mfL9oSDTMmNKN7C3YUywj5j7T4s",
  "key6": "ke3aMu5bZ8ye7i6JBRaj7cirZRknGrLhderWN2cz3NWaJavAj6MoXPqzP6ijpsF8MTeiBzLKqcb7rmVLyNyvsYR",
  "key7": "5zvYx8afwfJhHmR2yTVbGyamaKY3gr4yaTcCscMvYiN5NC6ai9oUjrpTCxXrsaB4hxaZqzj3CLY2g1xisBtthNN",
  "key8": "4i4uYP4YAfUqBjzcALPKdmyzqFCcJgsghuvLtXCBD1wUZBt6YCDY5LPm6ASE5hJfqoGW3CcSazFoixFdTWF79fx5",
  "key9": "2Gbe9sXtSvMseDE5eYMkqycFFQqp5gEjEiUnpcASqvF8Q461FEqXRKGo4rAsAWtvNsJtUu3qJ41dmJ4Z8tJ5NJkt",
  "key10": "2mauZEuwG2GPYLQA46s79v4xcsfpV3ptp2Vs3VwPzgfKaLTG7cys2PsRSpKuuAtii4su7BcydSLahD4FFoG5Dvd9",
  "key11": "43XzQ314mSGzQ6xG4AGebBZiXD9hwmhKjBMEKYJBCacy8h47xaWCFVR98kYGgmCRx3zMYoAzezL6L7VyZLJ3kPxx",
  "key12": "387FXkQja8W62Yc7iYuDE3AWHb1t5TLFnbg9pXvvjaUtEuaeep65LLqm69Tte82zAn5GrEpS2f8J5pdJe7oF6uo1",
  "key13": "EN6C3v8h5ttMHTqJnhAcaa2sumKxEg3wQvhiwrTVoNLMSncrEa6RANr6f5nP89o8jMQa16GZLXjzP94cC7m3cYg",
  "key14": "3RWKpkA5ty8qC5PYRDhFRQe7rX2Lm1rQvvMtoTzRGVwJkEDXX5PT4PUwk5J2MXukhS3e6yQE1u41d1aHiy3o4bVB",
  "key15": "3XLegLix8f9z8v8n6AMruJdSSP8iY1d5TBR9dcVxxrdiwcJcnqRNWpdoHKF9oKkHPMG3tHqjHCdD3YzcNBeyPfdp",
  "key16": "5WvyWgCWhWLGqAaRFZCqMdS244g3Yi38fbCP38uY2M4NgcLwbtqpbZ86RtLZDvawzfvj6dyKhHMgSWNHSmRhYRfY",
  "key17": "32WrqYaDqzMiUR7pZqN3bogDDLjyyWP2QfEqnZ9qibC6aW6Hfv2rU7gmmvvgkAmPnWaNxjvd7WhYdivN9sS1HhBv",
  "key18": "5bQ3hGmSRyY35Hn6Uvw37ZV2m3Ht7SmcZEXeXCuMcsQBUBRePABcDBxBbvJyXEEnRx5N9dQpq432Rmn3b8Fm5E7f",
  "key19": "m6RAQx4FyhUvHZBUF1VfS9NinojBK7yesqho5BxyXd5AtPGJ5qgsJGHskXU51SfMHh8XJ7b7HQWuf7tdVd5PJP6",
  "key20": "3aKQ4x1gDM9WpvBDur83HuShL5wM1AVbfShy82dGaquZgWFjySDgUabWo2XsXJKfKhduABVjBcPNm2qvVS6AvFZV",
  "key21": "4AUcb7yAT4zQB5AVgaJfwutkBtcJAfpp4TzexPmtbWWZDQBGVKcb15U83uYFbbmpBzSaG4nsSecqUKvPbQ2LncXR",
  "key22": "3wtVkMgGsyQ6i2QUdy3B4DJtMTefVJjU4j6bizJQpFFxwENbRNe2AMzHzgdJX7B17PTRXLEuujnPFDRkrAffxKso",
  "key23": "5Uyew1Qt1xvZb4DCtr18EG1UTuvyXphyHK2oFL7XXdVq1JyYcaG7Qeus3VXSL4zmKPr98MQhw4aa3ucxZer8ymWZ",
  "key24": "2DjcXUi7PVQh9phmgtzd7MWPErubK8hkGR2aSkkwYkzDCU3Vka25o9Jd2XzyMHCaMKinVLWaZrQJK3WHJ26QDzCf",
  "key25": "4uWKRHYXfz9sAuxrg7PQoLcuztnwzEnLd7wnjj9sWyc3VCbpr3ffzTJhYrm5RXaaLb7ezugkG4yJjDst2uS2EVT8",
  "key26": "4vsLzpsaCWLySueJNEh3aA9tahb77SLMMRmXKZ4yTgguWQVMdu7JwTuS7d5QzfqUsUDyowwKd6hgLyXy5HfqYGAe",
  "key27": "4RypgTJnewuve6WR3yUhD2FYg9Az7ZecGHsZaJaswcjtuZMvFqBP2fL11tnaQwtwkoR5uha5M6qRaoHwGEMUXoma",
  "key28": "u1LemoBmbrQYkigDb6AJz8mb4tWXonk3Avke8mxfL9qZsZ8SUSjqBxCBHXN12tFFLwUTZzRnEdAhrh6ycfYHX7U",
  "key29": "23ojHFh51qRPGtVFTLMbAzbmWxnmKzMp3dKMDn496fa46Wi7vNFSww2TvdtTcwjhfLxHPyboAgkZ64aESLSLsvD8",
  "key30": "5uYGhSt38y93jPSaFicjgY5gkGhoxmzGRPrW5QWoAEWmFWE7ZHZMm3XcfNn5FoBhdyWh9NiW8dMiSNbyNGLztcnC",
  "key31": "36N1Rx9RKB2ZUvAR3BHGhgTm1sPx8zDuMyV9E9WqusCDAGNmP27kLRTDuvdJbtrr15XYnEHkFhEhCyPcRwNiVBtw",
  "key32": "4Fw8SGS7FPwZ6m7Fw9y7XzrtiE2WkxFwpBWK6MEQVYhL5NmnYSLjQpdcVfxHCWcfwDv39oD4UbA51FVUfWktc2L5",
  "key33": "2MCNP4ogHwrAxg7z85vfEE58vYh2ZmeYTiVQiFLKsC6n5v6PGvmGSnZFnzcQfpdnH6QTTAXkH12ye1p66XVNKfB4",
  "key34": "5nmhA9PTkeL3QpzuauRJaEwGrxCS5Jnvy5pSRAotP34D6wweV85HrcZcspiAszEhbXxeEoxqiGmCBGb2cEjKEPdx",
  "key35": "ygtcPSDe2bYVKzSSF1t49f8E21cLb1i495N1YAnWWzYLtaoU7bcg8rbmpMDjEjVSMjJwS2rqZTQsCCtymGBqY8Q",
  "key36": "RUGjHMVqoNSHqB6k2MNMhhjsECnSBcGbYXru6CZKHGdrEdEojE4i1yC4uEuLBUsmwYuebrdCrKdtemy4Pyff94o",
  "key37": "5rZP77iATx5qgF4eXsGgBYaZjfoMDT3wSVSxu2qSDUsWqm3reDexvg86RpVZFLgx8Mbb2ZZ2Zt1yJXmV958GCKTj",
  "key38": "5XCdKcU8pmEQA83JfZC1R4ZYypQTdDJ2PNGRpVkghUzdZjYy5hjGtQobJ9YdB1zWUe86o23gDm6frMz42nMm5sQX",
  "key39": "8wF3U5uJL1E7tEaY4XX7mdPRNiPfCxJU6STAiPkTqM6VWSCDyX9YMJ2E1CGrsGmhkGxefu4XBQRhbxAcPj9n69J",
  "key40": "61U3yEY1W6f5rEZWgfTjwSz4zNhvWvfnPhd9twKRXurzBL6BTf5Xkk2byMf2RD42VB278EJmcm4dn7XvDhGyzoDL",
  "key41": "4nZJbVxS4NpbUZGg4jXVnbSjrBt6RMMtq8u1dZHKibFaF33KVqzc7z4kySp3LoqkVtsmTvJWVYxB6ebYc8wV4Jf6",
  "key42": "4hHbRv3p9cr5ubyn1hrYHx9zsvHiYUw4oFA23KQ6QTDu7PUzJ1KskUsuD24KHvQedNrSYJuWSZcE7nY6ajJALqa7",
  "key43": "3ykeiGF5V3NfdSWpm8Z9CkUSBVBgRXrVfukECEwodr7H61xtLmppxKWc6gzwqkNEWasauDoxAvYTTpHbwmciJ8KX",
  "key44": "2yWwHtMVcjRFiXMN7dQSeAZkzAoXgncq8WxShSHSHPQ7tfb7e53qMYPEYp5RPH2CCJFm3c7CDDfsnEuhwdTvqAy5"
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
