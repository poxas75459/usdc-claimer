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
    "3kQvsxANWcTN7GTpXgtgkf8SEqZrMpSyat7MKUAv4Yr9SBZcxjRSj86MqNZZrPmnQCJFCFdwVZ8cJSqvmGZUvqSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVt6F2fmRhbTUK3jGpJMthBkbes8apNnd4Lkexw1WVwpxUJNB3D4Y3RLkDZuVBVopR69i5CeeBu88mf8o9Jqg5c",
  "key1": "3MxjcaV2tgTTEPajeXqcqT816bjkk2KjS5DbNb2ALyyyjdcJW5GNmmVVh7iuCZzQEZ6p3yHhfZ2gZLg6unyDjHMt",
  "key2": "22pAD9GtpLokDWdid7MeRdXU7267ASoMbvwbcwGsKipCUzHkaJgYKdvxdeZoh33LoSEqJgyHm3ng8X9ZcE7Vp16J",
  "key3": "3NvyfxsKftG9LyYUuj28xF2fwXxqnKbyeG86trjVyvDm5V7u7nkpw9nFfu425WpFLyige4TNi2LZMEP37Vw449Wb",
  "key4": "4NoX8xXgkKJyEwMNJwVTYsWhvQ9fXK623573nwXkx5Uv1DMqP1wJehkAv9YwcqeCjWvEw3cuWw46y9fgRW3YFoBm",
  "key5": "miNNqwCknKSC17rSJE6JmvuZo3ivcbZD4YsrjiHxd1vmERVqCxKZKFp52dsUHYrvKUV9xDkcqy1awCPSibwExz1",
  "key6": "5ie9QEPuFbNUyj6QaV7TatuqvcGzuSQ9mSzVUY8i8j6YwRoTd2cHhBbVCD6BnV4ywSZsKaLKazzQZtM7yRioKwMF",
  "key7": "5TUh4uzJSknihB14BoPh4vWL4q9iWgaG4Q8kpq2fnAoC5YReuYbm88bVKK6fwPRQpbpRKxQpRa97Em1EA8ZA6Ppy",
  "key8": "2dGNJc1zu4DvM9vqw4FpGs5uJdrKcrufp5XdZ2RsqJkzcvZXoTwNhZvLeg9H7FgEGdmjaprjV4zRM5zSHz3ozCvk",
  "key9": "5EsHCtgcW9CMiArezJHEZbnMK74bPrn8ZHmpNBRpgwZrVyLW4zbSZh8CWH34RWKyWnJg1Up77S4c7NwrPxhSmfBC",
  "key10": "5BRyN7yqEmveJuyqQv51cxSsvrskFPo3b3RVQgo1CujRM8Pi2LsKQA2mrg7dJToo1V2xUWu359monn5Rrw2wWNqd",
  "key11": "5qJno5Xn97NcmADbugzhRjj7FoNhfu8hBRzy2g6QtbbiBpN2PDd86ndD9kBJMd8kkrTAnqMwmsektxL57z7iAXtV",
  "key12": "2MLzJpnMET9cScsjrhA8QJHJsVSpNac81egwTctKbiinQEdUonjDZH5gz7d2QDDZzMipQgTeQLhu84ZfZkoU7y4c",
  "key13": "FGpdjmayz8GBsa71MhVrYTmufBBa7DzmVmU9gzqoGjDcWRC9xT9jgqN63R5pLWn5VJR29Es1foSxHA3sNzzhNDT",
  "key14": "AtyNkbnzpb5M6WR7EwEYBUX2SC5tE4cb94GNYSzzWriKwATga3TwiBS7cY6sAJv2JanikiWq4NUB5GsfAVqhCiJ",
  "key15": "1gnbpLwM1zq2wJmWDEDsX99q1sp5a437SSHJRYR14YtKAJPuHtPDZQiGQJDrbrzPMuKdAZPapCYspW9BkVH6zP1",
  "key16": "261pgtrS5Jnped3eVAtHHjQ4kRvkcqUSS72MnWyGbgKEDVJU1zcs2ZahxgM9Ci1qjkjbiNkxwsi9evLDRxCi4P7c",
  "key17": "33QU65ZHdjSeLPHGycDRV8ZMoJ8pPc3YwH7txRTDMRqTL6dgA5VwAfoMCduvDkbAeKTJjbmERBBTwyzYhbXStssb",
  "key18": "5neancmzbd2zGrmh6FwjdyVMQGg96qwEtoh9DbsQ2ewtdex3d8Xzyd85jdLnir6hA1qgwfkwq6NrZagaDPbHaH9P",
  "key19": "4EkHWcbQg2E8kruB2jdSpRVZWnuhu1yqtgkmwf17JeCDkpEjtmVV8XviFfpiszauCLhvm2Xje4Wcrs4iBha4Hnjs",
  "key20": "51sbMwcUb6w6K7CWV1TcGgaNFYvhbuySL4yGzxx9W577SHcvQRJCFn62uXsVNEZXphpGyJRh6SsibmbV4RCDToHV",
  "key21": "558Ku9j1UbFgC1cZrjusHdqxDxyAk2HzsLe7ps9UW33VEtg2Rqb9fQwfwxgVPzkRHw6AD2X5WBokkhbTU3owetzB",
  "key22": "65bCK7a5j9aLhRP7YCnRb7NV5Qkpmvu8fdfDdeYq5tGKh3dycFkH4jggPXXSiDFwgnZr6MetxZyJmsPTjo9ErS5F",
  "key23": "ogTEVt5sXtKrA1j8bXBNGZYGYQe44xxfFDaxbxUks95fLdamKoK8geSeDpuroNVhhUSDhCBdsWeNHT49qz3q9yk",
  "key24": "5RJiMYkFHRK73zM4FYsDynKPdM74Rww9GQSW9TbS3PYQ6A9M2caNHkhhdmn4qj4HxfcH3J1PysN1GcKgNVJyaMG8",
  "key25": "2WLWprnd5VsYYk3Bag4VJboH3ZynuNviib6yC2DKwRWyBXehh1U9PmQyTSmL6fXmjWCb33Xpb4TrpvocbxANsJjf",
  "key26": "n4qEUx5YFRWsbN9dadNTf3onhMLT2kDd8hGZnNXS8qarakdwjyzKTxKAxXsifbvoVL3dcroV9m8ee6KVsQSYRr2",
  "key27": "3A8L58nVubbNfmjHnsTFcXJS4iapQNN16MH3otiXa6uCN2dgR2vWwX766FctZgoY34qxyHfmkzqnj3FWH4JAFRDw",
  "key28": "5Hynp4G2TPJrvHyturYZ6W9h3vwdY6x6nza4oJDnujCMHQxefHzjBsWDsUyyny9X9g7bPZyCqu1RLjizbmgDebFL",
  "key29": "2Unp3A4yVcXHoqhxrTdah9ncsjzUqMF9UL4J5bXKTXXXSSTBwEUfg3hk76NsV4yzbb4kSTkjstQv3Hq7DahasTkS",
  "key30": "64Hz4Niasg6jpCLyAnF8NFtkm4Rz9Ki2HcEFSi6gwszWDbTF8sdWYNVEDgLNka78pRruS9cufh5XRakCgGFBrMcQ",
  "key31": "5k2ntPifwPPHfgSExepEnNYogvcnpsRnbc44R3Pgs7feCxMKHvPokfwmiKC2y8zC5pYYyXq59THofN5ikBHMjsgc",
  "key32": "8aQzZLdVf3nUXkBnyTLsJ1Tc3kXXQDB1VgykiBmcNhT5rApCfjhZWRq3rshaKYNheyfVR1Yg8Q3LHGSjVtK2zWy",
  "key33": "45qvDSzGt6M4khUgeN7HgwnV1GUrCWseU7fg6wt1CwZBUAxYtH4UmJpknuPGCoDzMcAwHSadWQhRhq9eBz2N1arT",
  "key34": "5ppci68bCfDmxXbeU2k91bmtDqR6LFA5mntfS8CYJ68hsYE8qANQVRgNRj1LGnuG5uGnWrXog7ViU35mUNHgRXk2",
  "key35": "3xCmQferKZnqiJNpv8hQAPSW3XpEhDLyVLNjS215Yi9Y5dui1s3oKVoSSFK7RoUXXN7Wsa8LjzDLpYqtF4AXpbK8",
  "key36": "3sGq6oDRrJiWUVTezMADA3jAU85yMULviKcHJZmmBvoPBLqCxsGzBVAcAb654RJ4t4xYTfHBgnf53PtzUpyrdKiQ",
  "key37": "3BbkGxkJYYTsy15seHveQorpJ2bjKEnCygXSUtE5kawbLuxfQUr7A2h5N6wNp7HNU47eq1pmrMW4ofid77MqUEGZ",
  "key38": "xSx5aXA6c3F82n3uKeeQgoxU4HE1bsZ4ZxdGM1L865Kj1zkLAZve3JtXJz3t1wkWPjsuawStNwnqDugiwk9Mc7N",
  "key39": "29ZpVNfSAiwZyp28Mn91EeGj8PXyPEEP6m7dLpTB5dCvVZ2PywRN45549eZBoQA73dAKEFNdACQ4zDLXZyetxCbb",
  "key40": "4M5U4GJYSh744w4BTPrkApxBhD5RaT9DaVV5Dc2pc5RF166ef8uaSRUm1AihCUc7Y62LC5faW3XkxdSuFkrouKQP",
  "key41": "4kA1tpzbojWe5Auus639omLtahx9936j76LwqJRPQP5ESkMvYz1nxTPj6cxtGvnXVnocesEdrFSSFiqPJVXrBbaV",
  "key42": "52Nybs4qU1CeZt5RvfRXHSSkymYev286bAAJcN5or6TSL1RkuwxuNW7B9hrCtjRtbEtT5tVNugieWv9o9vHFdT44",
  "key43": "54H12V5roMK2dg7tvKHDmskRqsqrQVxnP8DTeJXaL8JnLoBz8wJSLNnJRxB3wkHLfLCBwAJqg7kE1RoskQVxnFcB"
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
