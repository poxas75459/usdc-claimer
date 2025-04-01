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
    "5CspU1KkMdDJzz4UpyYzpF9qkC8CF8wZNwEGP8MC8XqBVayBeJhDEV5RGgU8efpm87BT629eyxAuU4chjtS2MMya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "da4LY5Yi2nSBMhuNiDtu9mPthMBNRvuUkrk3pDfsiXoP4DCdCWCvF8KnJP9rzHXvzR8afzgDJNkHDYmL4r6BJcC",
  "key1": "FZtXNgMVJ6Rk2db9SQ3cp1eLLaV2Yjbeea6KNJHUmy1ypGo8wbwYQkhEwyguaRcaFc5RaarmwH8n1z2RbZepiEd",
  "key2": "4Mo9S9hLWfRNLPmfN4jgnPsxs2EZKV4MAyW8dBC5oT4surwJK57HKfuw4qQYZJLjMdY4CYPjt6EFaNycYXExbVxe",
  "key3": "4cH9rP2HT4JvrWqncvx6pfDjHZzPbz5pZ1wpZhv4TcrHFiLiActWisHR3CYU993hkENuQ3MVjSMUgCYpGdgQW9nT",
  "key4": "5xpH7xeBUaqW5Pfg4mTNeGEouAPn9Wnrs9GTSS3UgSGxPBTPW3V9pcFSqbAL9TxjemhwgoPUKH1fehd8Ce7azFE3",
  "key5": "6CiujZuwsdTNcEq98gP33CdLkzwTLswdZvB7XvxgjVQBcF46xv69xbvuBPWJ1JSqsaKMLKJniHbDtjPnw76eiek",
  "key6": "22ZaRk8stA6hfJbzYQeCuhVuNVtfK9g8A5hFEMtA33shDRjn7hmGv1keJc8gFb3v6nRoAj55q3gLrna5ABKVAvzz",
  "key7": "4iehNuSAXKGNNmeW323bwkPWTX2GQL2Di1rcYT5wMxcn6yUtPNiu2tmAnowXdd83HiVZrWDDhzh4FRi2osA6FtmT",
  "key8": "34q5KbBBY59PygKnWoJ7JYbu3hy3XZJS8RCFkCzF1PLVr5Fu3QzhXDEkj964ncTtjTHUKZt4fdiZwuGvA14RQskz",
  "key9": "2QUpLR3KB3EuHCyw7yb5xVvk6hfdshVTEoPVuVtyQXGYD7HXEtSeCkMRAXacs26QRR9L6HG8WAzmR4eQew5WpkwL",
  "key10": "LquEiZC8aoMy9zQ7GkL2Z5BU5jswTbKSG5dyytQ69wBketSR8xyQetC4murmDmFiyLxtN7uiKzY4HyeBJXjUFby",
  "key11": "4SwZPPeBXUL3sS8GAdRCcw6hEKZKXJgnazr13RQkhdj5w49uFsREecUvnoAXFrJhWBYRCnxdDEuaQ31qkNSoEMGJ",
  "key12": "cHvhRTiSkpK2qBi2W1LwJYncD9ZmNPivyzLpBGr187ZAeYsu9rPZ86CSbTRwu9Z6VLa5kW6izUrXXUWTXLSD9aQ",
  "key13": "hnzPiCHzzZVvn6qyV4x3kqaQ6eMBdSxxXkLF4ceiZ2tfJu7HioNtUTJHgYL8gbYUAMfuUyvuhmq7cLjaTJsWxgG",
  "key14": "36xLj8xcaAmdf8VwXtA2dStyE4eseohyEPgsjhV823eAdU3uGKX41HUBBNZHLa1CBJ1NJK7gNtcCCTtz3AMhtrun",
  "key15": "37Zj4ToWCJ3M3epxHK6UxWxdhCQoWYJfZujsxAxn3juD2yEkPnmFXT9MLMNEGaBa64mYYeWaF4Qzuuntk2gYwaMr",
  "key16": "5fa8ZpLtZ7qJUVxERp3APrYn9DTZQ2wBN5DSrqs5G5jQ6owfj9yP7AUc4K9m9DcXbmtj9cBYaxXZmunymwW2gBx",
  "key17": "2uJtshB2cxL9YLRut6BrmW7NLAE5H6ZpVwYf9VLaecZ1UUw5g56G4nFvgLcSzv9vNz5ZYvapcJTZCAdhXNcA3cuv",
  "key18": "3iD24q85xVdLqH3qiSR3Wwp6Jf5VFDdVMBP9qSknZ5U7HEpQ9hwKY1arR9jRwwx78HnLCuRJynrGqH7tPXj8M7nB",
  "key19": "cNU2p45mdsdGfWZweQQ2D336hxh7gxiJZsvKzNgnAiarBYfs91FddCkxbLJiV8rzUHwv1k6j5n1zpjWP7ePvEeg",
  "key20": "5mTKXctocA19MguMKuUV1cc5dEEn3jsBBoqyKbAiMGX21QgoJFuQgmRRwWwawxEEBD9ozATHfScH22GC5gdiVz45",
  "key21": "5YcqMzXwstVjQ8GdHKaiVrw3ffFM1MJ2fiRu1mrbpWs2ZYC8SEyuyWipjcNhmB7m16VZzGjXjxG8WXBjPxkAEUBp",
  "key22": "3vJAozd9j6z3FhSdnXrVFw9RB3YxZ7UtDejGmCjrn5JwM2qRJr2WKwHmLtjJdLQoqqaQLbLrVVYvpyz6fV8mvYp2",
  "key23": "4699UMuo63piLzCCZBE6eW7dygtowbjNtNugrHPuyYHfJCXoi388QjLFpTE8uv8uehcXfqWyCPsgpJ7o9JwiMoRM",
  "key24": "484hyh67dpRTqSLhAUwdxrWtUzLg7VU9qyu6gQKJRe9QpTgi3nc1QgSnc3zGytXTz6fAKTyV9EFu9yNtGkXgCFJa",
  "key25": "2Kt8tHhU37YyRYRz8rrcBA1KECrScqwNukaWUYUAy3rtc4jk1T8QCeJf5oDvtnJVWgij5hcRbwDGfavRrcdvV9wC",
  "key26": "41tvs3Z9Q3NnvVZraKxqV382wzdq88NB9uWnVj8Da2P77goMatdKkgqSuXGMP59PsVA7K8ZTUh1vngEmpLMYQdr8",
  "key27": "Y8TLmdqsJgKWzPH8773YnibkFjjTV7WF5gwq8R8gdFWytZkaWpatxSd5fE7iQ768cBVSsn7eAQC7xxXjPCrDfVq",
  "key28": "2XgdQCixtXYJN1Ur22etpkb7zcTcH8zmSgdui8VGgp1pKR8n4AHSE1wsgS3d7NH2VC1LnQrSWCzHp5dRSsxpaeCT",
  "key29": "2XNDHQa4Ko9gjxDMRkY4MYj7tvtUrjq9CnntZZfgR9W2QNWgVUsiTwArGySQRC9GMaa3LNyTLnJjUKFRHfEyjMhn",
  "key30": "5Pp5Gm1qupAez2mT4KwJLbzfgRUtLqJN5X6EKhKF8bzPCia1kc44nNhTK72fBiYWqweJpvvzRgvaKdG367sWkQv4",
  "key31": "2FPDphD4y6S2AujSV3M26xr5RjXyu99QCjT2cN8hW4bQe9qoa5JDVicWpLUQGZW8ZPQfReUyQRitRV9t9ULiSY37",
  "key32": "37gKCSQJC1cpVCC9p6b2J8qFQhrF1khXBREedkUtBPHrqArk9ht2aSbUBHYUVkguy6K9FSUYgy5Vb2vriDKVMc5Z",
  "key33": "4bMFMZqjPtWx77oFVLvpyx54wk9xy687iRaSGFRL9RSpRugp53JonvizEBW1sSLJUoawSP6nDZj5rQNVGWwDHeJ",
  "key34": "Jhd8GJ3rnVgoJdnrFdNbJGwJuxBVrhC7CqDugcqHrUWysniwsa8D2YrJyUCD3ofxiHfy6Swp84qGtwGd5TsF12r",
  "key35": "431u2eUGBqATWmCB2r7LbG87rpnksC3GeNiurMjGqSGDfwQ8qoeGa45gSRj1jSzGJjYGMZF7wBYKbkPfwBGvhVeu",
  "key36": "d4EUq5gq1UoFua365Fox7fhTNJr7HFs3MTsuuxnTuo2zKiCPmff7c1NG1ngtncoUzrwCLyC7QhyjrFjzMxkGeVv",
  "key37": "zj3bUoNF5a25N7LifWbvXjJVQNcDB2xiZ27AxSYQsEYXn11nCZBxEivcfb3CA9sZb5xuHdzreDTWWTHS6Ysn536",
  "key38": "3KDWFByNnMC7imQUSQNBNc9KRVPKY1b6esW6WZrv2bLcC4YRJ8sPSAUFtUxGyH6qcJxvyfLgok36AV2XAwUU4JYq",
  "key39": "yMRvz8vmKjFyKvYe28SCbRnnUqoMzJERRJgSzskYVyzXZiy1reEXYQNM9E8A8Be9Vdrp8pBnxzwJ7uLkMDQKkTA",
  "key40": "2t7pEZPHbTs8PGe63zZVuCY49g7wEV3w6414KK8Nk4a7oeChyqRdEUAVLiCKBbsXS5ejZXh5QAuySepgw8eoG64y",
  "key41": "61tLdpptmgW3Lz4jZLHfFXqZdokAswn5jYTPwmdUJ2DPDJAUHD3X91NKkFMSjMmQDY1aj8DN6u8B8eFF7Xw6GmAB",
  "key42": "3JihyZnWoatgwimYXNdVpkwokDH8L1ZK5G86aQCLRzYmn2FN4mHtu87uPw5GMvtttPYrmNoD3b4WjC4L7aU97u5p",
  "key43": "2dazVHsnZgEMvjcpc6MMw9VMMDXqrZ4cyJsJUd5PkbZ9C6gxWTRmuV45ReSiD3V9iMTpk1rb38pBfpBTuHBmDniv",
  "key44": "67Lzwnk4mseVuVwnAotbtZcAGwBdADZTfUA9m5jr4CPjJSEhvgQVHRUmaQLGnHAYNdQj8YJTLvGLTrZ83Ay963W2",
  "key45": "3Mi9TRnDgXGYMz48eeevt7SjFTdrWQyEErfpmdupSZ1wMsBmRfjcH7K4nAQww13ye3JW2i1npFupJ1XYVjSFLo5G",
  "key46": "5jPvez437SXYsYEo6GiRAN9FW6ZTmgsyzUvMocmzUJobtguFtkkiqnsWYrjZfz12mvALayWQUfFrfULvDYyWKgsm",
  "key47": "5m92inCBP7vBcrrde8LvcA4aVnQ8qdw1hgUKv439vsWjyfEM5mYB9SsxzEL25tY5J7w7Xect5Lm5LQotpZDW7nHV",
  "key48": "3oRkTePs2bHNTQkhxQhhSrFKWBj8Vnq8ffPXQ8cjwt6yTULsbbrYumVYm1crpDfKbnbub61fq3DM2DJ9UXiBHiDT"
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
