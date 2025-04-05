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
    "2grhgGwcnyC5AHm92fp6GurHiMgPcQJWYcVwh6hmcFiM4Xg8UJNhYgBikafvQYtMkUvJ5xvvjtWf9s2umsbXWM2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFUc8nac1G4ihtxpiJka6FTh4teyTRYVw3JbwpJQnA6PVv8VckGF7qV2xEunqKr6r8uCUq3Jmd6he2Lq88quALi",
  "key1": "4CCsLaaChLbDDXsCho1aQKMVqhYQDhHGoq5fw26WSmzceiExbucvnq3UtQ3ourkTbWWDab4HGSuEv6ikJrLx9m3V",
  "key2": "4X6paqygtaNFrDAuAiPNa4mf1rc1xucavVAMyviXNfdFvDyNZArjsxLp87ZdqRpyaaqqk3QkSQvt7MQBrK8TChs4",
  "key3": "3qQMzv5Q7ahSbBWurtY6eMUCEUMhzcMV86Fmd7pUv95TYniaUNrEvhoxTPrtRYC95AzzhDWRFrdRqjrn8PK7EytD",
  "key4": "5mi9RXzry5LLbHW8nVqC5p3utFRp56hxG7hfiPUdsxU6wqTe38uTDg5Q5oF4LyLVz8QJa9ifyWezesrBRR2zvmd6",
  "key5": "4nSNozvFYny2Di2kWHUQ11LNRFS92GmM4k4JSuDtTL7cRC1XcAiKRKVGGbM2TaQdUBFcwhnQuXYq6rumJ6vYmgE4",
  "key6": "4WwGme3zpmbMbs3GmcbJLKD8kJpZFtppw4Z2PMhn5L4bWnMgYLnwTnf3BGMkZG8Ceao8WcUCWz7d5z7HguqRH5wq",
  "key7": "4EZvUqcEsPwpng6vpF5295tEZTb7LgBfFgzTSo3Y8yp67ZXJDwLzprcn8vkxYQsWjZ8W4wRQUjrrAxLFqLrmA5VL",
  "key8": "3dqieimR232EPomTRgEPkQhs4JKAYqankj2kZtCdsNUbhnzBTKUT5ziL81q887i91jTYsVHfKVwGWWKagqXmcrb9",
  "key9": "648FYJP3uwFzNW2PycyqktWHKgU2Mwv3VSoW2v9TwxsugkBZRwnSaa75har5ybUL9QRRFRH1TfzaAHfsSsLi4D7Y",
  "key10": "2bGDKygvVvuP6LdvH9SAf8UPLNV23EfPt1rgDvcc4JNW3JWZdYvrWA5n19iWZKw9naBvVtiSZHC5oetUEEVZbP1T",
  "key11": "4UEXFd4AA3qNAaRnAt8Pt3TSNM31uTzqkcniEtBFXoEJkezJTQjt3kfWLhyC7r8n3wKxhfvwSDZ6rhdrgNW53v8q",
  "key12": "VDR5S3joLS9pfLmJnF2QLKSzP9yDCK1si51Gs9yzXkbrWpTX2y3sh38Bzu9Hrf7ekE3NgTEE7BZKFAZo2TPuEAs",
  "key13": "27UAdp2pH9P5kX7mk334XoxRoV1sRGgCDYYGZNwQqgrEAw91kEkDRRGgSGBo8Un2wTqWRSbY7U8n82ekZsUrM7qk",
  "key14": "5kgAFvJE5ewq9Y2zU5c8BNDN25XC8mcB1hPvo7Rc8VUzqL3z6p47rnKa1GDVEgzfHm6PscLU2uNGm4cGybD83rMh",
  "key15": "R2BQYKQe4BogejKNcreiuEJNV7gLX3wxtKduF3xqJbJUHkJUmpc42sRNW9wSYGjsjs4syAdZGjeZ9ciEr128nS3",
  "key16": "5pbFGiubKz8oG4PDv2EswuSxbEHakdGzA4tdU9R6L9Fh4SjdUNUnh7azdDi9jNawuKFwrBD7bwE8bJ4FFp8oV94f",
  "key17": "4VpMeXojLnW9PRrMWqeHUNWiUuKcuPQhMsTF58DJyuhLTwfoyp46HN22GifhKxWoB3ZR1wbURrSfqi7e8vcxLRZL",
  "key18": "5hJiD8ectaMjSbnWUFBZfbPetN8xGHr6YKP5GHoW6JCWyHXvN4eBf3HsTrBmMf9FWpVkupzHjTwtdjhMLTXCnFAv",
  "key19": "5C574PbPZe2rFaWBzFfmLy3G2KopuHfep2uJvqCqYy9dzG4VRQt6JP3AD9xFG6ojzWK9GsYQtBa9Y2aGsAFxJGNX",
  "key20": "2ZayioSbm6dAbj38gMfKU18e3QVRVMivR5sEvfM6MJb6hE4zrHrZ6oRmiRDVsERM1DC8HB9CMofnDyf6x2NR3Eb9",
  "key21": "puPh2az4NGtB1vfSru6oyZwQf1af2Nic5T6dcgLEvpvq6v4Xo4SsdmjjUBuBJsEqPDZrhddt9FAqHQQP3x1wnQT",
  "key22": "4nyRZMX8jGNpwVCayQjNUbMg33YFaCtyYczUaAaYuvMr8jMrm9vUUog169KmXALKcxUXMqtBQXeSwef4SgzGL4Dn",
  "key23": "4m69c1UysYHcSoLFU59orv3QscEv2mCy2zDWwfLwgn3VFqc5vPxdSDxf9zi8ZRXRYwr7dWc8SHTu1tHuDkQeYfxt",
  "key24": "2sPuAFTVf7onknJEd8aBhETW8Nc9QsxpVnT6b3D4ERUj1DUzu7mJLWoj5ifWfVhLguTSsAvYpaPVD9DVjqGBQtcd",
  "key25": "4QErnN8bpp9QGtkgL327EjYaYjr95RxZcCxdhpCNutAMrgi7njxGbXEk4FfU7Vi5KN4vb3j8ED4MAhSQAmYmH2CM",
  "key26": "25GfXH6ikR1KvQincbktzEXHgTYxVaAU2m6qpjmaCLzJy5tELnVmBbzZfh6CMk3p5Y65Kiu2qJiLXHASWLg34yQk",
  "key27": "2moUAS2av78KcPcPeqz35db3dGiTDgzJ3N1wdth6Lg3SwmRs2vA39nVMEqLQjGXYruKmmxJrAuoNw7kEyWn8Mixd",
  "key28": "55SPtaaGvQTCkgqytoBAWdMyEdgnHryoeWJBqjraycKiuCjJnSVUfrX9CKueT8DmnjMdhjr3ZByBjKenMnbr78PD",
  "key29": "5VjCcsTg3mVkWHHjxmp2Gj68Zhvez2TMYv5KPeSTi2fwMzPbe4z4ExFsqRsk1Qmn1St4rLYm5yBiigzJmN6iiVow",
  "key30": "2h4wocaucPsnURVfssUB8kPg8wTWFbqT48YzSZWDxDH1WgfagXLB1aDohqHE4uyd4gGxBSMX35KmMjQW1mYMBepH",
  "key31": "3wzFxZVoQAGh4MChx1BNnp9bkvaJnQKLDRHUPpxgdrUpKnmXcH5EuZomKvKZShoTvbR4kJXd6Evo7qy9kyB3UpE7",
  "key32": "3HGDQs9FYq6bBu9t2BWJZRJPu6jUhq9LMcCT2MhcaAoi5E86tz9neKt9GsLP8YuF1xtRRc872AfGZaP79MPQsbiC",
  "key33": "57PUDM28JYRyjwAQnxqAxwTpPxJ85z86bnSPW6NJ3zFT6vrPkHLcVPkMCgz7EMTii8p4gmu2KthH13XP9vbmaQ7y",
  "key34": "5dr82N4wjX1YzCvYAoeaED8Cx8nq4TowEFzy2M7hsGbiUb69KSmhm9KRHGkFEdeo3tW2sBoGDJhzfhq79dynRb6Z",
  "key35": "4qaykjsHV5U5561tg5TXoitv88HFHSyMdmsTnUzLLZ9d7z7ENBJpKo2DrnRxBaJRLHniuJNyDuSm1nVVs3X6PbRx",
  "key36": "3mwm6qxs6JKs5CLMTrFg4LRCd3wxQKnCLvQ1uhCywRq7USgnVAtAXAJRpY53AJu67GYMMJF5sNNAnS9K4uJKfXhK",
  "key37": "5TGP1HmkN2gsPoNhgXiVJMgSoNcepdNVcNZBBHooxV4AceQoZkorxf7Pq72ruMmQaoxVwddygvpMEg1UzMKZV9Zj",
  "key38": "2UHYXGLMuTgcxGStCyrpcudQzr9Yc3kkSJhSkJtcH8UM91UG8BNkumcmgVV8FChRUP1zSBZHHHAfGhGdqgt3DXd3",
  "key39": "4Z2xuTLvbbGNdUqbEbrGohs7PG3Pme3Ysbj3y63iq4ZjRPMmwxyyoGHicFb7yMmqm6sepaS4zWnzmzWVNmiaioXR",
  "key40": "5QGpFADp3arhaKsjB7QjGnwyJsyx4kbnhywqZyiqNBBqeUMHjtH9qegVNrPydy7Yrof5PxPFbCMK3NM3uDy8avPr",
  "key41": "5pr4fYq5TZFKgbuXBxT7GKjmruLz7mdMaezPyimHMNNG1Xo1ktH6MXK5VzyNjz95JqwTpKHiVwWBfHfMKCNYRuiw",
  "key42": "4tNozQJXfwaJUBJJJJZAuk3pAaHjceYkYFxyM3jtXqTdX3X76EMHvLdjLZRdjnfrUfpQ4ze84WLJnGorJSwU5dud",
  "key43": "5GqXzKwcNCddfY4hCJo4yxWribVDQ4mjseoGsuR1ijQ2ujoGNB9HwAChMcmUMb1Dyh1LcrdngSoxeQApkim9N1F7",
  "key44": "cbnHjLYhubryFP3dy2Bn6dqbEVG6Pn9jb1LH6V2NVUdsbkneXXngS9ubXBNyYaGX6wRjsrZmG9yp5zyUMA4xCsL",
  "key45": "3FECD5oN4bUkHo4JHJSrstBr82iSG626YUGe6Q3ZAv1VWuWcW7pwADnw2SArYzbeLRAWx1KVLkWucL5Bqti4fymw",
  "key46": "63dwsNsZUS5epGUpgwrFpJib83hp7KXf69PiYbxMKnJi1JP5WHeFqQ7NGsDkke1cw2UXxT97s7ksw8TnHqmmXsUG",
  "key47": "5yg772XhQ6Ed2TGYFFtgkum8W7nAv7pLbTsVzFqCe8RCMMZwGS7qbxw8EeLNVkCgD8mSLtWPbM67f7yxDMiHQnjQ",
  "key48": "5vT5tvvpkVA1Q1maTkB2J4otLuPwFJfr8KjZLNCzXAXR1AjekUSGdQAm9FHbLigChhJXRuSEUC7rctu2Zae4xhhH",
  "key49": "3CcMnpqCZJ9zPh4SMebHg3ipAEGHMrGF31KB4RTKi36y2RD5eXHBEWT7raTr65Mkb2BEUkvYABAHbcqFXpQ1mRyW"
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
