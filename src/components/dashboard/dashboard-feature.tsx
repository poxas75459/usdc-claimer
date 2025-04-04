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
    "5F652pnPGEJbckNoa6rNtf1221Zgi4NNLob8m1rWZ7cdmbjkxxvbHBiBEGRFoKdLjgcSLdHynT59tcpTeRhhWkqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HAFRo2UWQusK4QHo3FYnFD5eQyVC8hzLayEtbjVp8cZ5JhzQfToiwwjiYDy6kY8QMbyRuXe7WMD3ryS3R2mzxLo",
  "key1": "8c5isXRfbmnfwCcZG6nh6Ki8QkdsJRnWWmgDZcgNBGmTZJCmfq1V2oeWhWyAkTqi5ETuqF6MwpvDsepYtADQugW",
  "key2": "42CgtJexbShwirurg2LGpi2zc2b6qFpYUCtew4FnHAzcrhPw7b8APPTeWyBaX1ZmAXJTyepEnosZ5U7bi6iZDTD5",
  "key3": "3xRW1G6BDhBdMXstdztr6NsjPJUDmK9WM4MuNk8uUWTLUQxtN2GG9HsXdUuaiwPjsXeCCJAPmtwE9xa7EEb3mf5a",
  "key4": "2ggo9svd372tyDy8ndhGW7LJBp8ESUeJEPjzVsdUZLuCsRQwYfz2Ys38X5S3J9WE6p8ezEGUzoJiZJWGpgYQfGbx",
  "key5": "3nhx2th8TmND1eSMtRGzto6xF3du5EzwHDucz3WGoF4iQifBb8Tirqr7L5b4XXpoKNitvx867vR5hkGu6ig2uB75",
  "key6": "5YzD6zSQX13psHU3H8EzgQDaa2asfxpKnbWwJW47fFKTi7dikyfe2RUNYhJp1PCgX7ufek5SY8MWciKjrykZVjsx",
  "key7": "4W1m5aaWJfeizVLC2cy8pn368bjd4ZMhkPAM8khyewLM8F38RXF2YSQ4Nua97Fm7RWcwLtnB6qHaoSP2dQgeaZgs",
  "key8": "5mgJrauXaYLKw6DrBxvMCeCd5cHwByRVWKictvuXiWhbdr8Hp2KK2FWBsDG6ccxciK3djqYtUf7xpbJ2WTEs2GBP",
  "key9": "5QnhUX33CFepBbY45DdzziDHjwyiji3wELg1ZbTDRF18UZhz8qnB4umKL7JEDZGmk9jDvjLjZLdz1cDqNbf9dUfr",
  "key10": "3UFR3Ac2Jahs5tobJDjPE7sfJTbMmmyUmLbELtjdM6dAHLWxiBaoAzvezu15Aqfz2QB86BqrZirHoG2BUmzoquFT",
  "key11": "23ZiuwsKL5MWu2PycaVoB1LAAEZNM15MUAFgKHMRdKNA2bQUYccdFjofKjYkVCmmkk8rGME8UvRX1bxVBF6pxQ3T",
  "key12": "nY7YodFfybbsFpE61dGxJnrmuErRDF6De1Sr7oA7emeUajAPeuBJEFfmumbc9WkHV83pAEHwhP396JaYvQB4Tq9",
  "key13": "5LvCAGX4uKqZFPWMGfRPk1vsHvywyckykeD4HbzyPsvUtdzpUKiCXsRkHeYF1c4BJkG8kxwvLHJr5xV4sVMGJVNb",
  "key14": "iHrRmrQjT8GAsViHUc9iSdSHPe8YEY9St6Gv3hAE2vVzgpKkcTwFj7Fu1m6SeEKAHqWrNNcc6yRzz6h6uAD9q25",
  "key15": "2GNpa9cqmNSKVVJHTwZiqJBG4Ym1GawhoavgUfRJxjQxsgo6Rrb1h3sYWL9hBzT4hpbJWwkcupo3KKdTzN1MKSZT",
  "key16": "5JMhDbGNLtKKgWeJJhFo3stsNWKJUK8yJgQq8tY5UmKYtgtze888nbH1UXmdhKU8eqcDg2Kojz4J4svB6aMJ6Grb",
  "key17": "5YA2Chhe32qKfJxujKUbC1uAWdSqbLoMqP37brexWmET4qYfv76ofUWbapvhsNogtSZqE2nDFDf3jWNbe7N5uHJL",
  "key18": "2zsLx1BghwBkMfxC5jB3CzkKs1W3CXjTNVAWmMoGy4LtgXzKoZQrsBv4EgewUhV6xur6ozEuPYE4UdCndKzFjud6",
  "key19": "3hW2m3bppnS9CfV5X9LGAyJivrYGWbQxVsvArTtrCxgTWN1FVeqyBjNNhQjCHuRwBrYHMccpc2NziZsn7L287pEK",
  "key20": "5w17GR7kzxRu9GAoh9u3hmg7T9NiAb52XaM5UaWfPir9iXsyapEjCJdsn7QFVfAvQmbLUTs6bQcinEuJAKTd71eS",
  "key21": "5qiMrVS7EJvhxy7bNRBmDAL7FvW1WVhdr66ZQpfWY6TA8Lt85ZDvYnMzLMNoPALkeCuXEG8ban8fDowtkNFDEtSv",
  "key22": "3Udbdaj9LGyRVjnC2hn7Z5eA7ADX1MAv4bAhrnbveLvyrPeBF9dFtRTM7cMLr1EV3BtdyCezH4B4uURZmHFC1X3q",
  "key23": "5H46UgZjbM93wEY3mokaQmp6Ljab7dq3gucsQFL88sT4Qn7sd7JG4okB84amghnwD4To1UcDHa2jd6x3dXfgbdMX",
  "key24": "23ZuJg6F1Nb6DawveCWBEipp9b6AcVAuCWGR2GFhfHHFEmFHmWvknksrZ1xB6jpLvxA9nEei1PFcXYtM6H5EzQ6N",
  "key25": "GUYUu1SfpuhFwDWcAdvTEh6M5hd8JrGLT7spSCmxSepcztjssCCwogjp3oAGAnLLNn8tsRfdiMZ3x92J3YmrAbr",
  "key26": "5NjVfzLivbTCTN5dsANjDPDQa5kCQQyUNBBz76qHe7yTBJBVdRSDtVwtb5WPn53AKaRP4bhRxqphejmAkxAsbEmK",
  "key27": "58YvEAEpJfqxBj6MfTvrUURQ69Xg9d4DPdigAjkUpTpyrYKQtMyMiU5E7a5arFnMA1Cc28VHfZgRD3fWfc2hqHYQ",
  "key28": "5xT3HHso8rzrRvHLCeH3ttCVwWyHSNoQjddQxPg2kQubmSfA77o6YjszEd9uyivJL3ziZvnskXYeoQXqQvTyJMvE",
  "key29": "5K87SKTRJp7SSrit4WcJfCJHDkrKNqvFoenkysxK9dy14Pu9RgY3NtWu76fRN6AmrDwmxXZmbvbu9piq4pE4PNXJ",
  "key30": "62XaaHycbd3hgN6kKbj3niPWi1tAjSzDdfJprS9egLeuL2m68pb6ZSqsQDSFjtxvPkUFhq1c3RWUvtBMkjjJdnoR",
  "key31": "2fosczdzfwQkMdmuAHru5cMFWcUDN2tEx9QggCmVWLToZgTcAdgPfxCSx87dfxBUgeuyXD4AfosGNRFF7XScMMs2",
  "key32": "4Yvso2QpvMGtgGGLwti3EZ392kmAwYGH8PG7MGtpQAFYZpyiBqGc8HLPX4zBoAAnwG2AF5aC191MJh1jfF1RxThS",
  "key33": "4oxAogTRejnik1GdpTacCt2ckq1657Y3oP8buDwjFk3Bh5b7urHi38uGWH1jLgYU6EbscjQzvhpLfGFDxGyRDty7"
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
