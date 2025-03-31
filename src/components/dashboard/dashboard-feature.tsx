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
    "3i16jVFfNV8u4ttQinaZQpMSZAMWQgaX2cnr1wZA8om2Q4pKJJB6q3g6AxGr16ff8YYbKoTYVGFSosLzHUgp5VZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K15LLd2jd5KxBzDAKquwDuWa6Mm1n69DAAx5Pn6SFDHBRFRFurh7N1srEs6E7SsdaEeC8aSiP5p2EMKqK2Nq9a9",
  "key1": "44gfebxqwzKzChBxxuqcLFNTTjceMnnJCDBxrsdVrXcZNDbGqDctarkvg5pyH7jazoQd7DKJbqtdAKb1Hg3wfnYs",
  "key2": "2dtvG8YJkNqVfH6Y7YSnE3x3ZzQUiU9xnZ3jyExkJuzMi1BcivKmS4XUUih4ML6W3tRSdmRo6oJTnGZ9vVAijPUz",
  "key3": "3Gn6FpyoU9RKtoQkaFbiMBdYT6UXwvBirhiMjup34eozF3Xgnk7LBSVfvtG1RW1m34h56RvGpK5Wujv5cbCX5Qop",
  "key4": "4ZAaufDFpgfLP38S4PX2pwyCXuPUnWRVC6HPQtgCtoVBkFpz6euJHxNWe88NzAdrVwSiwhVbMcSErEMegAy9Uw8Q",
  "key5": "4AdF7pJgBiLeDMw73g78ubwT1pAgugQAokZfSiiRPug3jYfya7SWehapgxUfUT4SBKFrQCR53V8U6HjCGxfhdhLu",
  "key6": "4xTnZNUiRCfT7k2ug8kVfua3kHXJSEZHmBb3GptZjz9NEcv4hMoVH3Rgp3JcM2enbv8YfsFQowRshT4uPsjh6JrS",
  "key7": "ewa5MxXPzFK76Px7RN8eQmfqX7Lyyrz7NWtH4MjibiuUoiGUuLGtN3TXeB4juS5mbTSPAWUjW3JmiRQeeKgox1J",
  "key8": "5kJSDgAtobyMvYJ5co2UMDnfuAoGutvSXWV9BTtkUW7xFjXRuhyJdw1tnrjo4XnTLM6vBu2ywVzkC8X8qmKjZZMX",
  "key9": "4uFfmUSSsLhpuDKUbzWuXEBPhF5hf7PhCLqbrjKU6bXzGtmU9zXLyNP1eTd75bnnMxKepMSLwV5bZqzWTBPKB12b",
  "key10": "4MWHteSaNfeKhDj4mviKgKpQEGhEehfwyET7udUt25FqPRSXFAoi9PkPht3YwL8htkXtw5dMq8GBd4KqBAVpTLcw",
  "key11": "5WbtmLj8SGkHZaxqT2Qwr2sfiH8ecbWAct2Hn3EhPLTHjR2zMbjNLEkQUoxsno3EDF8VpcJ5DmLTZZyqymft2WMN",
  "key12": "5798qmQVidVDtVPcXwE9GFwn9w9Gjvpa1XYAX6mHmWjSaz1dvkXzpeAPh9idPax7bW4z63LjZ7PjseN3WuDRWMgZ",
  "key13": "5DyBfWnCLqNLqFD3cvyQaymcwZivafxgYbALqNKttxn3U5HfAw35kj9Z6BCeBuZ8DMSB5gACnV4YLNh3vAnZBogs",
  "key14": "61feK8zSdMmgyCvhSAJ3hhLT4WQ5S2BGaaa3rfcTufP7GmaiP8np6nz4jLcFtEgiYJc8CmcEHNwbohkWzReoHFd5",
  "key15": "4z3dVtvADw9BEZsy1jHLpc5PiViCocwnx6K9m3EEv4BxiGnHbfhZ3SjgAsBYSBEiTqWoUVW4epux2yvMffwQoVhS",
  "key16": "5HUgYdcVZhSa1ryoGBJasrGfxYA2MRwupsGS3w3jbn1xVzqKVZhET3gkZ4vp6nbaJBcGbimGYK3hfBYqAUwYkzVW",
  "key17": "4MsitsHzGy2XZ2NVsJ72Wzwj4fgfhyVxwT2tRM4Ta3gt4md2nfHRrgtP4GkxxCo5dkrkhpCx6FHwuxF1obh5DJZP",
  "key18": "4kdHhmgr6MbcnbYg6VhynPSUxMtYV1KkPH4DRuzkDMWBsRHsRcLQLmUocxpnWT2kGRXAQtK6ZaU4wG5TUFmuzJws",
  "key19": "gKZ6zcD8puAGvF7aYmGpAs4D5S8W6e4Rs5kAzxVgCUvvReAzMdMNNg4tP7LZhRVto2kqat11Zq2SaY9WdkxCWSY",
  "key20": "J9E5aKcAk3ijhbU1v4WhHKjRg8HZKsr574h1LRQKjPSMjNc9BvHa4mUxL4GirVeQaWRJKknoWSPczaEBZgL78hJ",
  "key21": "5HxKMoLd3ymSzCDaafabzss4DxtY5RCqQU9ywPeBSkvetr9WxTQeJM2aBV6NX4PfuXutrC9DkhzSUe1DxgPDQ3dK",
  "key22": "5eZzTvYYuQ1M2emo3VRg8KA3f4zMSbDdPzpW8NA3Q7ZprCqtHu8vQtRh2KQ9YKrMPo6HvFpFMTzDLkneFxtNR6cd",
  "key23": "2JTHLbPyRmhvTSYJkQvYpVGzoJbgKAAGpadNquAPvLbr2HeKGiBJtgxhgxyZgMv5iAG4zymAVViShBkALWdb6kwq",
  "key24": "4EEYCUrhpsmAHvvHKTn276ArQ25qmN9CKGyjFZDoRKTCJ5y5Tzmkpbd7jrGQfadhHX4ZzAJYfJpufsbBGLCR9W56",
  "key25": "3F8s7rpmh2JpbAVifZgx5Van5JkEuqpFngrLKjJBFnhoQ5yTkC2BjqPnEc3jChcLH7QvNjaXUJesAqF2qZGqndXq",
  "key26": "26unptu4hEtjxFVsy8ye3BbfDCRKQWreWErBwXodbEcaErvRNeViv1XWuArDCiAmmC64f4jMaVoydKwSGu51gbow",
  "key27": "5U1VCJWoJCktPVzscoB38neKf6ScsZEcrCa1BdcJ4YxHpgMSa7caxEW3JAjtWDMXGpihX7JNKUQHQA8ZY27VYBwS",
  "key28": "4EvVvy44wKAPgrSte2AAjDxRGbqxofzQ3x35L9LSpnQehhLxxPxrt6eswbEoff4uFQRDybsfaRAM1zA9CtfT4zPD",
  "key29": "2HtHSeQWaGP42gqpM3ARpbSqLrBpRVgZFWspE9YvPpisiz3K2Qr1N2qTuyjtyqPhZPfBSRzJ9eixQz4kdy9frTkV",
  "key30": "3pQn8eRaCf3Dwo2BAqiFTx38fNhmTFRFS2g9NLJgTS4yrbRkDhWSfxg453gjSpgeYL3Z4cVwsZLAojSoZjur9QUH",
  "key31": "4piTyHksMKXXfJKFYJahJdGq5fi5vcGxNNheSuPf2gpT3Du7euB9wtRqJHMcX4bPokDacXmyLLrdVEeDosmUkTbo",
  "key32": "62yeYbQDiX2sQ26exFTp6HVhG1vxNHdVi2a6QwLjbtLfxtziQshib2GZqpFd1oZbVbfrsjYR7PdJeQHcq7cmuvsc",
  "key33": "4obKtUgU4ju2K2iRZ8KxXgtBRBMbUieK4xrSyj1mmtmqMTxWjTmoUEskmyM1KNohnZLjEEMWTPX9XCHKBZuDxWEq",
  "key34": "4EzVhk17Spe7W5uLM5jPLsBpU5w5tqFxeVPuCY5MTTqp87zVkRsSS9j78vxZ2ZjGMYm5XhSULDz5CWNf76uQChoN",
  "key35": "4KfZG85yDQjox8MKhmaeurAGaVqAYrpwkNqTjCTCM8A6jLDGnGTQdizpjZAG5vjtymXUQaUMVW5ivoWxuHbeE5LB",
  "key36": "342hEAv1SqRPhoTWrj9giw6Yhc2Jqp1ZTWTTpiMG637rWtRY8MxZzjfVxtcGTbBtsSTydMbzSBAu1Xv23GPCz1zv",
  "key37": "3AGd245Fs9JbzhTZ8xCDw8BkW3rigwDfVb1JZ3gjKE5gy7NvG9MBTZ3KELhZiwH1XYZcXCWTyv3gv6uyTYtztC75",
  "key38": "3x1STV4Y9ScAcMyUeinTCoFvXFGtDUTp9UWMhULRdxQ4N5HZtFDRu11BF7yX9CkdatQYc4EVSZ5g7n5cqmfUJnEf",
  "key39": "28VErAa9KCuD3JUEY69nFEwENbcgzYYv2rDZqUBV3PiRYjbn84c5BNpkAsQdQREVQR32agmH9Dz7wA1Z6zeU2s43",
  "key40": "5DT6orJBSXmHQUxZCt5cXjdjxisELKKAZnox2yta7gZ5FmySscJ2yX8Rp1otmQuxakq5Nvac9K4kaG4GDA8fMEDS",
  "key41": "2YWrVR32sSt7SPMHdFJxZ2CW3219dxPS4USrgaFqohUcnvdyZPDQ8xPVskhzcwb4NJDCNiPANMj4JoRQZGmyfLtF",
  "key42": "3pKJSkXgKn16qCMDaF7Hy7wJaWXpgu2HgRCfxkgxUkz46rWUCgEA5QzdAWMaFC2doQUrcehfsD99Gvw6yrzjhX3a"
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
