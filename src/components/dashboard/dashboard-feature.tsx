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
    "3USeruBBQ4LNgrSqKF4C1hg6FFW9QTZQdBykebWhtSWmSFFVmnHvzpEbsSf8VTpHB4znKnzyD7YcG6Q8NTdtaymb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJPN1HLa6JDYcBXLUwqd7FJNsmptmwnNWjsN27tXvCRegHqbb3aL3ncSobFBMLZ6MxzAy8j6j1qPAwLVzjB5E4H",
  "key1": "488GL9kdeP4yk6GtYUpBvvL9vjHw5BsuZUMnYj669QBHfvQPhiuPcsRio6zERRz6NLwNJLgXaHDjKEZ7bpDZSjVR",
  "key2": "33nwbPRNWHpxPst5rLZABxo3CzWkh6esKh8CBV5SAbF2GPrM4epRaQw5HRZJSevYoNMJsm4ARHsPa2GKqyAtKpqU",
  "key3": "3msXw1Y8JEiNK2g4P3GrtssvNQHwXAhuKJhiytWSg7mGQ5zG7uxUTEHGKPfqKz3b4CRVFMQGrNB9EiS6hVUvEz5a",
  "key4": "4eRXRNL8PueMEan9qtrKKkuXcfE1pTLmbEEKJY1PQjCcd4YzmbbTQmGQMVNrkSqsZ8pwC4hqwnE4m3cdVcAAJHq7",
  "key5": "LN9qv4V7mt92fKhiHSL7J43fhy5qZym3tdq9KVS7vLjQnEEvekXXFjkPWBTmi28UWcXbLfZoa8wGeGoD9PERUaG",
  "key6": "2EbMagevqrYGV5MMPgFcG1NUxuqf23RXTxfhQXpUa4SRRXyrjkDcDyzE6g3EQ5XGJawAnCCKeR2Xan7Q7821reD7",
  "key7": "5kPyYsvAknKTXg8x4yYmNKgQGLjEoz7YwwDjAmXtk87Knnb77y3atrsu1AVs2L85VGL8UkocMUvMAFuRDiani296",
  "key8": "5hVdMCu9YdpywjoMmX3aEmLnnf6gCDasf4AHgFqb6Kz6QCZ5w2Gp71cgRN7vbzeKBpbCat9j8pXGXPTcfMPseYxC",
  "key9": "62pKf4kLTPuZUuA9WVkKoz3DR7GT8WwhtGFJdXUt2vHeLEo7ZwCnGWSBXWTXVefXaRGX9xPk8bNvacGuyKfdhvDn",
  "key10": "3tp7DD5FXG97NrGQaxXz9oaNd87eQs1tK6N5stHBaMkX3k6UivPfG3WcWpRdSBwvfA3MSZGtZ6FmYXgFxhGHXUuG",
  "key11": "45yFzmW7c4LzR3JXofKA7W46yy7PRcUkJU31VaXmNuHqQM9px6ouLQPkYzhQmJXUHR55tZhd3STDa5XoshrymCGT",
  "key12": "2A3YViK6ZFZcxLinGNXZSo7Wusudr6tTJRsnm4Ui2ZqswmaXseMgJ2wXWpi6NFc3oFjXvH6f4RSFwEo7UVWbdMhn",
  "key13": "3JxTb1aMeFUAgD5GH6FjS86ebBGZNeewBHsw6chQxovMUNuoCPq2jPeDwzm7tRcSYP3u7YdkM2AZnrVL7NSwBSLj",
  "key14": "2aDAM1ZytxfTXnZqGccCzE1LFJ2PG3kkfni3PXZAgnNq1R1DjPZMsth3ZUoWVKYE8vyLWDrQqCi1NTYrDuErBqBv",
  "key15": "2bbsBW65hFG8mGCZtFmejux5Tgr4kBGeU74P9hEPf13pCo9KhMgmRnVy14FPXVWp3NPXu3gcL3im9zavjt71TqT3",
  "key16": "kV8UvdxWnyhxMb5nV2XPyq6GBLkwz7rPtCnZD38ZirMeZhq1kQ4Pjm4ovoRXBRNe6x4bvKnjiyHY1fvyvYqFrAB",
  "key17": "2hVcPAQMWZSkfaet7n4PMEo8mgMEmsJvXPhLK9Fo8uhf8esgXd4Xv69SNKTU2BQFdT8wqwnPCq85mNnv65C9TPqX",
  "key18": "5w6ZcgaU2APpXo7GEWo2vA9sDdsaWqrRFNuoiYex94YW1EESPsBFi8n6pFgjSL4F6QuhU5LbirzsRrPuvmYdXPos",
  "key19": "3NvgbWmtyZqpG74Pgbzp3tVUR6d3y9ELJcLrNK7d8HpHaY6sepPd4bVMsvA1oov4vGy8qBnpxbaSHsZDJvdfQD9k",
  "key20": "KbtwdCKvDjCuc2QC1hxDvEBLuktBqg2drcusEhFRXpAxvBtdHqjYEW4eosHzUZBCJV4y62MLYDndUjUfich3f44",
  "key21": "2sLikg58FcbQBhoo6ZEt1Zq6fotxwhwyeCsw8Th9PmNWpCtgKF3qnioHhfimnXkEsZMhwdZQnQwQ45uXA77GBfmh",
  "key22": "2Hc2Z5qB63gPGjXtvKt8ugvX8RJA3BzKhbYRgMDfbfbzK3tipsbTBLQMZYLknXZ4pcmBgdjvqW8xQzjx6EGi98GH",
  "key23": "2JQ2ZwCiAxD3aumC2qXmM8okEX3U2Hyqa4zC7HACTHZmv5vQpuSwqbTaU6cyFi4EGz2u7x1YVWCvB2oXSKrbowAG",
  "key24": "62sx9Qy19qJwKEC5dUB4iHjERWUFte4S1puvpt6fUruphhgz5Mdgb9tL8HpvfQdadxpoJcTqFPVg1qgddeTQATeG",
  "key25": "HSUTTSGNAa4Sg3o7isZcCyQfvp89SVVNRyAnsrmBA3dnj1vxFEDnuhWAeiDpetQXC2AtqNtFQLEwPG3ahNunnsQ",
  "key26": "3pEWz5YFVT4acBUEt67fWEMGxZo1Gu9AGdMgY2PY3ob2RuRihKvNqoZvcZXGbfJGvGouD2ftBan4ABADFe7n79AK",
  "key27": "2AZXQJUyAahWjZR7gfKoDXWTTAQRBH24DtWtZ1uGHBmWmi477DDfzaBPg88eNLzLrXFm8uiD1HtgZkwer4CHkp8h",
  "key28": "4dPWvGbvVHDUAooNc53uim12dn7pPh9ooyLSZmLih6qGK69BtQ9Cf2q6QC7ssrkoHtijF1471Cw4DoaiGdzrzMic",
  "key29": "2yUnmScMLL7eYCaKp1GjQe9YgSwQ19qqhtDRDMATh66io9qPg9YTnpN7L5Uh4ZtHfRaJuWLSsP2gQxP4KLR1bSKF",
  "key30": "4qdN8RySEW3BVprtw5HBq9rD77eXRDF6B95tAaXhCpZMPaXKA4isA96UyfbXYHzN2dGxqbzB8Gmp6afrhFZrUTN3",
  "key31": "4ofoyHDdTXKTgHRsJBAaSAVmECfDGoxgagCv2GZMxsATyXNz7NnLe51NUanWH2h1w7sdtTYw6nQdyPSriWJMuZsX",
  "key32": "3qsGQ2R1iDaDvcuHtQavaCrYjfNgC1enj4eFuSemiPH3KT9YGGviaP3eskuyQ12SSrknw12wsKCCh5VSqcCXvgTN",
  "key33": "XCjbwf4hxv4DBpqQrKJqpSQm4SQJxdmD8VjKDcxKsyheLj3FPt2gU4wJivY35xpcB4oo4VZVPD3gJbBEG7rbP12",
  "key34": "2XmgPNnsUVAYo1zo2nv1yVLjTEpxeeWuEWJNcgbs5j9XWyziUFBKJXyNeL98osykyq8DuJh4mSioNPzVXpRKqr4z",
  "key35": "2ab4QmzUcj3yP3LKf1KsynvGC4vEXtSxKNTTAoHdj5dxwyfszG6g5MHgieix1FU3aWMYAMXNh9BNvFabihUAbKhw",
  "key36": "3ekoAuAdFgK8pFMCwLKdRktuADvetpzetCnp8XQsJYFgRoURrF7yn5deB96w5MUnrRK8jigaobk6JeHnAduMUe9T",
  "key37": "3Tez8S7c4sPEtvqfcuVxKyYqyVTCLxrqmpGJfZHkh8hE4Rh7QgEdqpJkUuaDyVZsvgt7ZuGxapkuZYcksH1iVFUD",
  "key38": "3A9G1owErKxeU4ahD8eR761x89r5Nt34HQsy6XbD71eRcBcaBNyqCrWZ7M8erMWWd7bioL2fUHT3BHsFeaf7TvyJ",
  "key39": "5dCbBK4a6wHaGJMjA9uxiswN5ysQidWPuhKMghxD1rkcpZ8LK1YKbwVURgVxaaqhE7GLr5cXmneHZ3RpQfTxBxz2",
  "key40": "23N6KcYEhSdif8kwH1Jib8s8uFzhsNNz86CfCpb8bAeo35mUoNvjS2DurzA4HS8QdnnXxJ4aGfB9VMofDkUNynHJ",
  "key41": "4Go4fVC51V5uEBPN9cBWda3JE2SxfDwrzbZqPPEFj4LQzZTHn7pRM4YVefVyLWSETyy3YorVw3yEF37KtqVgUYCM",
  "key42": "5M87LybZ177U9gjYJtqUx7me3oDb6Zqjpjum8Vi63DkTdp7jXza1r5cuvvQ4MAyYgjUCtYCD25WBHEZW7fkhSYLr",
  "key43": "37XpAsgCY2cM2t2f16qfejJUNamwq1hz8a5qf4W9UciF1FepkYi8DaZvxo3jfFw5NGhevFvsNMv3Er1BkcUPSMP",
  "key44": "4j1YP5b1LYpute3JLiwv7iyH6cQTqgSRkXFAfHLKhiTB9FMED6RJcfRuhQ4njFp5z1siViGCBq7bmz1NVmS3BDzZ",
  "key45": "2cJw8ZtR8w7Vq5GrBSEmjC1qLqrU9Bz6csUtFPg33nkYMSSNywY987Tc5eP5G8CUoHLoXoMRjXLx49NkNfS3iXTg",
  "key46": "4mXcmBbwjWM6mNxX5j16d2BhYeCdnFX1wHGndQJx9XnbGsnhj6UmYXaVN8oXDDaG73rAJK8aWzr9UUQxqLoMbs7K",
  "key47": "3evuNZPmujYAuKddWYT7LuZdMb4PyftutkMvUqbg2PHqQq4vtXPvHnSyLS9MGDjFqHKCeJ2DiMPguLPo3Zs5aZna"
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
