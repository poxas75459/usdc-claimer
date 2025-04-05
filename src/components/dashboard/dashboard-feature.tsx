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
    "3BJvVqDzEffy6yDXUDBRR2xUm88CATuuBuDXqPvdMgu8SGpJqxqCvkdHEG8QLBfF7t4fDqE3XwzNhBosvefSvR3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zybTjYB1TmND5Aavyk98zwDX4aBv3XT2s3dXeqvGyos336J9JrES7hueWhkFXHqyALaSCTVmLHZW4W3ogVPxdcZ",
  "key1": "5ezyPzPVBfux8g3Bs98VhJxs5zLLEi4cvXKZvQ5tX3Pp63qfHFkmzkaPhfmkvCLVZHnW7vbfjrVBLL8LNYz1SaMk",
  "key2": "4YM9P5JRMpFv522pwGnsRsY49cxzCDHys7xPtjebNDSGixBCuausVF6eGnTKEnPzjC2wHyCs3vyXTrNjhiqGn8jE",
  "key3": "2Mh4Vxr36onWNqNML4mNasVT3qVZyrx5upSL1EJuBpFdXo3RDoF7g4LH1UQESGJLZdUXzzzskzLLcyTwoApSFY4p",
  "key4": "5sxYKRACMFFvEUvLTjSiNmoXtZwQCJ6BdNVpkNvK2FBTpSgZT8WywagsfHU7tpXNQRyeJdjNn55KPGKwMC1mz1Z2",
  "key5": "4sBXFv2vCTD3J1P6rxunSHXZqYh4gLFy6seVsPjeJnf9ykt7rFiySey4mMtkLBJ7twXnRRrreWPxjyqoJiSmxcwg",
  "key6": "4JXiEEHssGLYNz58qc6HZEWYnKRq9NqKHHtSiK3LcFhzRdL2e2MxhvXhsMNSJaPyEcWDbgr6FwirL1TmQH7fuaUo",
  "key7": "eXqfnxWRkbV1DHxhk5VRCoXzotZYBUxPifSqsJgWJxzqDZR6Ga8uSbgCM21jGApb9SwMZ92kPKpCsTFX9jMY7M4",
  "key8": "dn7wrt9d8hxqqa5iGVmTrXmsYD8MHcMtKvsFrJk41Dt4S9DXt6Bej97zFJQNVxrEsuzNJfcdnYFLnP2H7dYbJ1u",
  "key9": "4BJxHLb5VTosuNjc5Cv3ECr5dtobRQzX4akRBnXMYf2azvcMNmr9ix2EKh7MJ1SmRBj7ybzyQN9zTTQa7ue9Jemx",
  "key10": "CcNaXNtppBmCgM925J3gMpQhYQvUxjiMkzKQNtMjygwaMiY6e5bCjmpM3Vbekn8L2mzqQzoyz7aK8JiyTn5gPjN",
  "key11": "31evscP3jeTkDoc3gkH6TzG4FgeixVeLHqKwezFbUCCB8UBgUbaDQK2anMqnZNmjAukKWdcCpmAXX6vmX3XabWC3",
  "key12": "4N9oq2o9DuEz2eiAttmUyBZzoheMr6Uy7CTFdErip3A1u3fdirGXmW3YUg2MxDgkCnPBmn4isY4GoRN55EtcNi2B",
  "key13": "2AHfS35a4bkuMM6oTgkDQDk6aS5aDHfVXfHgRcyAPTQC2hWh7R4KdH8wBN8pPb3ZtgLzBnisKsJVR6pBzvhBuNRp",
  "key14": "5aWeLxUm9Xdr95Ko3XtvCqeCtkvsd4sDNwuYWQQUbpAz6fQjJZt8jfv9jj8pB4mWG4FgLypfgphvw7tsaq2T4yJT",
  "key15": "7CRUUux975kaVL5ULjmeYqKjrHqYfkQeE7fg82yC5rxpkB3WG2CyrP9EqGR7AhkPTRg7LpgsMmUonvAY1Wsw1WL",
  "key16": "2srjRUFErdFMCXRbuQsYxPzWW9SFBhWqDfEgFYGJtsopAFJAn6TsPmWzzfjSVYiCThhHbaUjWeFfiQcH5idQU6uH",
  "key17": "3Qdht5sWS6XPtX42Q89ThmfTjPzqW1cD965txQkkDpUWunr6EJRaBq4FYZHf5bVRYeEqjL2E4fzTDWtnovPqUq1P",
  "key18": "23JeEeDxh8RHcwHNem4HaDooGAmZgw3qX6WXunZJCrfa3QRD4E7KEeyPU7eS9bjUSs5qCzyH8dhvHekNB8jFUhvH",
  "key19": "4HBAZE839LpGWT6RQdMjVPnaQr277HveFZU55a7QcpDKKCzA3pJBh7u7rULhvukyB942MoN6GvbX2J7gspe8ptj2",
  "key20": "5pQwtKPD9W6WrTdFyfpEN48kcEpPYbdxHkWH6iztJciGrLXZsUVV6ZpJinWd5drpGZ28YmpkJVWyEsWYjC7DsA2n",
  "key21": "3vysuD58J3HjzCA7GGvy9sE1vDbbWeyL1JgcqZyQfizjKvLDscgV6ueFynd8XSTfK6QyWrpDK8kehcRimiNR9PeK",
  "key22": "3nQFhoyUizm1pYG3dBpL344Vsf2KNThiVXDb2ihvKXfpFpb1tamqLKGUiKcvQ8J33s7Qv95v2Wa2peB798B4xbts",
  "key23": "5hPXKRSg6jiaJ6riBfVgKQndKad3cda7wuEejf2hNmrvwLsEnHQYJkAvq2eoUXe8SEbjeEmSNKPN68oYh6Tu1HuB",
  "key24": "21gTzz49cJi6mpNGRNnuZ9P3SxUQ6oMBttGLE1mPEN63my5E916d55mHPbJynSUPC3qmtBtDBZYbtWSVTX7hSgk2",
  "key25": "17K5CtcduV9tRzdD8FzbWtQd8uNvYcxffCW6frLNTG7m9fc6wRByKudtw2ZfrGjVATJVsZ1RT8vpZ9gKDYXB9Ho",
  "key26": "3hRA6q172Kxx5mkfyBp6gxKFM7KW9QbN83epaj1nMugJG9LhGntCsHmgirfadtafKyr6fmGnRvFvi1s48ZvQynMz",
  "key27": "5XgLDgJhgv9mErSRduviy4tA7nGuRMq4NZ6eiNKkf8sCSDRvNs9LhWekwhNxZuD1BEReswEoBv4RtZoqZgif9Q7d",
  "key28": "36eWta61mZCcXQcS9tSpPBxBxpEsgFwwsBxnkUgBcvmi5QjQCj9wG4yQSnhWoyuLkekeiRVvLb7aRsYA3biJcedr",
  "key29": "4FzbW1EX6XP6r8SCLye2zB2mceJwXdM6RJXj4T6Wfg7AztdHHuaxqkGFP6gymFRoQ6yLcRj5nNszDyET6aa6vavx",
  "key30": "4byckcWVoCfpDakRV166JKPDB4zniZMA3jxqDN537j7PPEBudGpdRfcGQ3K5VYapyXKnytLBDXY6Wtj41PxF6EUE",
  "key31": "32jMiYUATanoCLLJFs6azbEQpG3NNgkUcSknCaoB89BTskSedS5EQsGtFcrXisw2QBrQWLA7QZaURJuoF8CCbwat",
  "key32": "xd8NU2SFPjtvPbRJoEa3k7qwZyoTf7MQ9mSGCTPJqF6xYjNo56fe6VbsALZqduUmJARhN8UpPaw8EMe8kXrQAsN",
  "key33": "2M9bdEmDy89gSj2w2aKmxidY75GvEYgKBMPfqTksYyVErHKLkX67AXinSpygzVbLKHGKRT9ts4YsQhfZUbir6LyV",
  "key34": "XyRNWYBN6P9ZYuBDebJmFVBhfWxdchJwbCRbfwMzYdoqxqzLRUVvFoKhPVLbeDRHeq5UmwviBXbi6TVwiZtkctg",
  "key35": "5GmgHc8xeGvez5bktyoBUk5vmHz6GjYGDsU3WT6VQXmEpyeJjf7eT4gqK12RBm6ei3sj3M8yEkS7N46DooRaRfgN",
  "key36": "3ubhp5kBvUcEJMinZpXUgvRbjSHGBSJ4RGSUSH5hCAj2kdveTTvvJJt8NJPGUAQDc7rmmmKy1E5nbZ6FZiu4yJTC",
  "key37": "4SPRJGtSoF5YbJBgBTrsnybXNi7eZYdsXZs5fmTEkhMcPDJ6Qswosaajb9EeGUsSLhpeHL9LA8pVYzZMSBAy4S2V",
  "key38": "2ajEQdKT6imwc4U9k72LqDhz6fx4eWhw7tM3zzkQ2pRqzPMX6dCUfkcjdA7F2rAWY1sJ3P36LkkkiH5yZPs7eaAF",
  "key39": "59EbPYLcr64hjVs2XL7zqy6fMH9KcXTaVyen8D3L1HkRtWeGtV6njnXXZhwNMPfy1frNRXBVsJVd6PqXkgdYJDiU",
  "key40": "4xzya8C7gkoNtRd4QQ8eNSHkMpySe4DdsVaGTwtKCQCbAYBksZzJFpbjLjLUTk1nNBguA3Ejaia6owt6mYCz8Hwb",
  "key41": "3ERgTkbChYPeJnFqWPU4ZPvABdKBWi5ESzdz3TK21zyaE4MUaVBDQt2ZhJWYDY4xAtMKyqbExHJhDnC8ZZ4GGxUe",
  "key42": "2us7GYMSNyKjW1UKSFBrr8c2A6iAQzYJ4rFMRpL3zhnMvP1XjAxHhNzEDrTrvy1tRKJ9bNHQzoAXT2PPQYdi2j7c",
  "key43": "5b2C9eNhZSsRWFbvY1mdsnAiHPdNFTgogamB7kX58unxrGBgy1g6qeu5jo2Ew8s6UiVmd9rYDPsV8rw9PgARBdjU",
  "key44": "LUj6YycyMYXVrNwet1u4NSH3Xn4JU2Wik11jcFMWEvVRgpDzHUmwiVYykSVgnKQWCGtcvVPyHDKaoSx4fNvk72G",
  "key45": "5hCGaWEADQjx5QP7PR8hHECUMeedXWA4keUxRWeiz1nTNj5PwQXenYhnpWnLq3wDFuRVxcE1STpZt2LGdwkRcNHZ",
  "key46": "3ENdQqvpHQ4Rtx2Z1HVtR3MW4BimK1Fp4AK1bA6se4gnzMi49biCBZjBVMHxjG9njGBjKxPuouJJg5L2FXxD7JV5",
  "key47": "29d7bwpXJfeiTwq6FqKVf4rqfDhuzPXsKmbPb7tw2bfnyXx2qDcV4aXdDRi9E7MnN3EVZVBr4kwYsqLvs4AxZxdC",
  "key48": "4AVkz4S6SuA18Gq6wZhfM5mMgjgeequF2JeVD27eLDT7cAnGpFRoBaKN75jDVVgesj82uu7PaQXP81J5TrcPjZoV",
  "key49": "5DjCGBBkuiJ7TuMBkjvgmCERYgbFRs4oMAczfw5dzxZYdy5sBe8Dkeo38cFhjG3bb4vjW9yu61aFvZtttHffv15V"
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
