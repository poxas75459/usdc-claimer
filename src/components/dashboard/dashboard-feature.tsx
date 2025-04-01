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
    "3EAS79zR99DrghKEc47qQmsp4A5MfmNMeAMNv8pBts63ua7s7xryLsfzwxbwhXse9tScQKNCikz9WT6rwx6tVHRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PRcUoZ6MVhCAi9j8hcnTLTJAsG7DFK7NepUdrwDSDJnb6hJFaFKkhstmWHDZZoXtP6hL7K4pb1QbyYDBeYc86mp",
  "key1": "c3uDBWv2GfuEZkEEENUz4ouCwGHKmf5hgHS5ND33zXNipMavvfZDwFSYr89xKyaWSxVXyekqQLvFihigJWtfqFw",
  "key2": "3jrgyFFKHTwTFg7UDvuYLRirUiqunUCHJqaZJ5TvJhDDqcnooEnRr3Ai74PFAwVPay7z3pXL4wS79B7drZbMoXE9",
  "key3": "4CEN4b17JfPTN8sFgWeX63JPpb6UYFbcK7EHBXqaPpqVnxxaMV3Wgb8k6mFB9zbMgePySCniq9YA391518pca7MG",
  "key4": "3WsYehRgvvSp2hty43iCvwrhzJiHe6cWT43oZdskVit41a7pdYXTnsDimt5WfL7Gogh6VoL3uxVnHuJQERJwRpeK",
  "key5": "4Q9gdn74Bek8SmcYE1YCiBttUnEDgjtzkwCY1K1LwhnLPk5871yfPet8zvqiNr3shL7BNNs4C98e5J9ExZHJ2mdj",
  "key6": "25v2w3CiiNWexnx7goBoWKjiZ8VpYsRVn2bFzuXEmRrZU2ppFBgL1DjGMBbtn8HRhwH2egD6qvEGNvVwrPw73XLK",
  "key7": "63JbTktuR52uFxgNvcVPYRC17HJTreY2gyV7Tu1vkyx4ESCG3aLFAfjU1aBN1aGgGtEiaQCa8tbxJo6QGdGuNHHa",
  "key8": "vH7zeDoRyV5xtpjJD9f69Wm9XJjQup8JCWFSmrCJedA69iEP8iJKBwgY8fAyA6Wn7JuGKQpa79c5nToFJgnxGRC",
  "key9": "3Lsk42SfxPRY5DGiPeYGeA5owv3ATCuZ3dserrHyDAbCQ84gH52YSQ5YCB85xyyQCPNvmRsY9UvP397y6iCb8yZA",
  "key10": "64c4Fc2sHgy33k2XkFhH4NKBNLZj8KZaYZe9FKzUwisjxqH7FMEMofsAXVZ9GYxhZGm6nfAEkHsSRpjwiKDQfgu4",
  "key11": "uqWJS2GHVQu8eGLPPs5VJDV5NB5Y5366W9WBDaLwa7M9PGLthvbExbhUfRLXLyLRxKCrHrkz5LR132iLtLPpWWr",
  "key12": "5JVfzxqDQsRSS35NSYMnGMxpNutGosaZ2vW617rcAiQHPy1KSr5Jcp2p7gHh1qNMMFWse4FHhKh9A2UB1EQ63cvL",
  "key13": "44cApvM9cPWNTMfwLZW3ZR4eebeVbzYgnE9QacPyhacPFSiGXjh9RHMZVcHeCrCAChTWadxFctjXLK7Gk8c7yQPp",
  "key14": "4PfenJeao4W7J2KtrqWm4U89TNuURzziDeD9MbiGPgbvGfVwiWL7rue6GUxtKZZtYj9An7SQHHYCXtYyH2iYuzXr",
  "key15": "4uMxwjug5fUuBP1RqDMUNyrwokrqWrJe3NJBS1uZmkUf2YwwKGegcrfPE97WwknEpgsXATJTvDmPAjkQZevgWsE3",
  "key16": "4hFH18bQi9C3YkSrKpzcjTrocB8QETDNjUXmypri35kQ7Y1Pt1AZ4DiVxm5pdSCaELQTCtZWXH3kCvD1tyjEVmvY",
  "key17": "5LQevMmxLdJsc9bfotE4thWy8R2yPQCBP7rggVqxoFgVMQ6fBhRRQ6Nf3g3PhHU4JfkDywT7Fw1VXLBDHj3tmgRg",
  "key18": "3LKwGE5k1SZQpSw4sfwLK6wb9S1EGk82NTKpVApVaSaZoJL2tAwHxVZ6sJEEErpV8j3qH2nHZijGhiXDZqVweK4L",
  "key19": "CaKvGyiBemZ3xCDqwBPNGLBSCejcvQdLqykRkMgWeor3PniVHg3bnTDtZJirXd7hz56e47xp1zaeNxzrJzkVPZu",
  "key20": "2LbEPFaG5aaeK1dfViukmWEkXn3oREFxqBRM1NEoDBFfE4x96uhtECHbHneqe1KofXeXL9s7fFUWKZxFdftyKoeY",
  "key21": "UavEBCULucxCzGzzKKvDK3x7bLrSr1zC6tnjiZUGE1DDDDz9ygAs4YRWdugW1u7xKBUpNSGxusyt9p82CGrp7jw",
  "key22": "539xXKT5jeXbE4DtocUFTau2rQDhFx6nLLmSxHvsf7Nj8hyku3yNsYjYSNj75jykeibamqAUF5eeuR3Xp47YPdVU",
  "key23": "59n1w1FkJhArXzM5UT6d1XTrpEWs5eFkESbNkFcgfiv5P7SK2KC1ojzUSeMnxG12H8ncb3k3JyPrfz5HYQmbBuNx",
  "key24": "E5pe7Nd4aJknuaTtTXCM4xSyZVxhEEwTmLQ3iNdorvBShQkYnDiQquWKBTJqPkECNych3wHgutRaCQ4Pxh86D3r",
  "key25": "34knjs5qahoKqb5N643Q32Z5zqfcjkZuNgGLyevsRE9qytfEsAuKsSeQUgLHgQqquR4vKj4rUN8futAxVzkV2A3z",
  "key26": "4QWDx4i3mSBMZdMvWYqpg78ZqdfPTG3Reza4SYGvvrHNe21FFq4MtqSnYdruYigJiB8TTfXbgjnNUboebMShKMUh",
  "key27": "5ehbPKngaS7X1hAH6g79JMZKwvGYaf7Ujs1pZrof8TrMryn6339Z29PFBMb3v3eAFggLYELJeeDWARAGwNpvzCbY",
  "key28": "2j6vhbCGLYSJtk8eVnKP3e3RD1hyWdhB1tiVKRFWRdmPFAexnF27DPyRgEbxEDU49Np1vBD7gvU8MCR1CSs7J6zi",
  "key29": "t78Xh9FQCR5BgN1LDWrrYQYN8jH5CmMQV72fyo7fGp1uRBijpnU19qFP6Hoaov9UiEFh9z8z5DSrifVaBEV7Wrg",
  "key30": "3RaqA12DoZgAeBkYVj5YnfWTdBL1WmxzAP1u87SbPMpcacFkA9SEgoPoQH8i6FFfiLQZaVRPVwxRTcs53TMBjeA5",
  "key31": "dX3GsWwLVQjfXGBDockFGdgsF96kBW4GuaChajd7NTPDGrb9mX1KKpF3xArYivnPnsdCh3cwiJKqqrcawMxFPFn",
  "key32": "5gCa6x2cBnHATBJbP5nLo15gdHsRvHax4xatmEsgYcpzGbsfz8Dv5T3RKchGrBFDQMzTAKBfcpPQtsnrtJMAY66Z",
  "key33": "2iH9BFrmiiqNr4d9gsCbnS9FNLkkMQ2ow8wHP88o3krwhDohgpLMbFC313fQujCG1bZT7HY76vaNvJWxstbPtjFZ",
  "key34": "4d4VyQP6QfZN5DHtNHD38pKndyHnNqrrfZngi33BvkULGNhM3zvuAJ1UjmKUtz3xZvUVTnwwNXDuAF6WA7ZC8h7h",
  "key35": "5hWo2QdMJMfBhcv7xix1JwdQXbNjzTa3AreoamzCu7bMAC6EZWtWAJMoSUJeHzFMrKuefjk8BmurhbVPs3U821UF",
  "key36": "3bW1DUMs9XbGux9fRBJ3g5dqkVSBauyWxzpAAdGZRFq6rXArBSnneGKcMFgc4iDfAv5yZKTKVr6z1ocg95ofYLUi",
  "key37": "651aFk8PuEfctqn5kmKu2roxciFfHZb6HExqoewt3hBMYwN3Jah6o84DYufe2efPXMoThSMXg9FHcNzSVAPZByJf",
  "key38": "3nYe4X4CdmVzK99knrFMAhAr2Rn74wqeWbUdkzJTa2ZasZ5QogR39dfCuoFTu7CyBAQEdxF1m8aTdCrTKcQJCVek",
  "key39": "em2fLv5jfWCKDCwH4zprfBeMrva3GvuHz3SndfRbCT2cGCZjfgR9jTfRNxB5z3yzieVBHDXpvYQaRPdYmfMd9zS",
  "key40": "VyqP48eLdN5Y8c7xwoiNmn4n4NBgn8r6LuZuE3J3BUfpwUtR2gDtVDE2TrJ4pA2N4Fp6WM8vRxgSPuP9U3dF3F7",
  "key41": "3oPXaQx6owZGc7o2o5UQt9H4eZYDsHWddrteUsMedUag87nVqXbKdZLxUAv9EsMfa2idfKugZHDvSqtJzWJqQkhR",
  "key42": "2qxgkY6yURrN3agm9LgfvwZTvit4JqBtds8jgLKE2GrBmZxmMeQWufjc6MXpkGDFeUWF9NKbabXBFQzfsEBbzXdE",
  "key43": "61PAnTN8VkRfBkrYbttTcgyLFsGRTj3Ji2N4SfAit9sPv4vxopzqYjjpAWLr1432xXdWVRREZFRmwSPtWAr7DUWC",
  "key44": "3jD1SiS3wmARRnGoz2KB3urAvcZDktPsEC39aFFu1k3p55fQ3z4ixwwpRnjLHya2QKaKMacQgEPNEDbeQsNCGcJf"
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
