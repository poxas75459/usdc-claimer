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
    "5pE2ja54NbgNYYwCDGBJZjCV1CgoH2vj4DAXB7Gk9kbSKz66MGR9EngbdjpVHRpSvz9VNenxasPEwSt5eSGKgTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ToapMrwiH2QzFHYGeWsbzq5L6EECKHKMscgUd1LocPCvRM26S3wyjocP9mfbejosnsbs9hPX5Dr9rdQ8D7Xk8dP",
  "key1": "dqLo9PzrQpxUhP7rbaj7o9We2fMfte62npES4dejZahRgsw2mT9vyyj2Xqs4w6vRGRwWYxhzkfZ5LdUVYUWMyuh",
  "key2": "4KL2yrm5Kc2DhJhaUZCHWPq44dJRJyNXFt1LHXzCFwSVd15asGDe89GWUiSrtqX59ShM5oW8tgbLqbzgcswQrZ1t",
  "key3": "3pCXTSceT9G5ZQNS6LUGKqyLLitF99DoA9hxrZB7dPmrjA3GMSNX1KeFtWCLqpZRdA2cMpiccJJmM3mQf5WabufM",
  "key4": "272QR14peReuLC67asHm21TpMr87rJenrfWZUVz81TsjezQVnAReoF4PtkVY8LAQy6FUraoG1RZLiLoVZcTvtDrR",
  "key5": "v6rPsAsCDj3pNRMdXqrwGpLxykQxcTR5fdMeFLLJY5iWkGH2yVbkjRiRTdeUq5mevx2ryNwhWdM39pEuTjbmnxe",
  "key6": "2fbR1kTNjPBe574bDJJzSbCHEQarHGKtq2AH4rgMPMjQ5KFrLE4HTBewmeRQkF9vvGZUaBLpFcc4eZBQpHBD2XqJ",
  "key7": "xccyiVdK4aUFmn12y3cHLhWSQ1SJn6ui6NWCjfTLPHBe2K95RjL8jh94vWGibCno1TN4GpW7vtKLxcUWr72dHGH",
  "key8": "5tRc2pDWYeUS7tJd2FdEiW6v7a58P5MGT9WxzRCcJeqFNZytLF13cks4TeC42hSP4SRjvq6D2gyPG2sCZuHyuCP5",
  "key9": "5KKTbhPHeoNmcvihnuw6r5wMqQwc3Bo2rEdryukdQpVSeRA9gSWdxR9UHzoXBqYiEev2uyAxzXHR27yyjTNmCsvo",
  "key10": "3o8foVhs7JtXu6gvghztUeQiVGkNz6tyZ2ewGotPdNJLwPAyDLbNKmrDjhLaDYqtGwCoDYjNZWQHGtNa2Y6GrWi2",
  "key11": "4AYHH6SarjAgam3yYRMBajvpYKq9iCPPYEpXWw5LBRW6bDm5L6aVJpQ7AbRuUJ2hbUDn3VZDCsbj8t75LXR6Rcbv",
  "key12": "2cQz1Lkc1ccjULmJfstzBwnBxmnrTiTL3BbdattqU1pRdZZ6iG3AeVyJZpvg6C54KZWVn1XniZW4MkYobwk2JEmB",
  "key13": "ofkQii4qmFTuHmqXoQnSNncmSE81hcLeUySNeX84wBRGUUnB9dUMjCr27Ekhnbv3r9ZWizKJmcLj1yTBzPej58o",
  "key14": "2pzo5XG73XpVi8ZXjryvCSdQ8xkLeR9h9ZFp5ybwdANoU6bGhgtVtEuSDVA6SdCXdvB8ahimkkN6EwoJEti6wwhx",
  "key15": "2Akpc19MsVrqDdqLtic3X5Fo4qVRiA2GeFuqX9ykb6depmF6u4cb3Hb7uLPdzS4iKrwf7iHUqhmLEThSA8kesWeN",
  "key16": "5UWFSiLZxjia18QpkW4BNpBCbZ63xR1WX8SMLf8NkH9uNzXWjuDKU4yEUVdG4QXAfRoG8CpJdyXpUbTg3CpacGZU",
  "key17": "5nW4o1qSgwSnPvakAnkn1qK3qAt87KBHZ9J5R4t3Gb8i5vhvdqSLrvXu65foHHuvmD27SNQLGgen93FyhwLXvqX8",
  "key18": "C2FqLuErUG8fMFkwHzdYoYTa62Hk3rWvTBehLVcK2bJpRSDZRumxQLNfEYGq8mZv1EX5pikUFSmYZny1GqLQnbq",
  "key19": "23JaNsMXfR8QEdRDWGD16KfKaQ5nQmx1e2sCDrBgye8bM6oUCmbRWqBDgz4U7ME1vyyswdPtJ9FCBoa4o9z1p4UJ",
  "key20": "2V8DEs6qWGbD75qkG2XxzJnK7o7Mu1VKeLz8PBo7oa4K3oiRujwQ4H5bP9tR3pSPVUtD47EmeXx5VDEnLvLpsD4u",
  "key21": "4xSPoV2hL2ZoVsswmTuEz6tFxa3PggRAWP1Mfz1zmBH9pb1gzuuVj7FnDYxbSNoZeWJHpxwNqw6haNSHjE8LUoNp",
  "key22": "5KdSSCsHRkccWBpSD1qt464ZhfXAZQhja3tjknH7u8wLU9hH8dtX9uH8w8pwj7Cqghm2eyCcyMqgr8EJuS1DcqL9",
  "key23": "5qRfsHj9evb6ny2rhVmkuzjgMjFffxAPrYD3DYRYPqEYy8T75GfwL7wYawHZcv8j38M1ReLenyMHNwmnL91SPX5j",
  "key24": "qwqfA3p38QgHYA8LE2KUZ4zamgzt9phaefwxr2aZ6AXwZXq9ConTZoFGskYi1uDEAD2cDGGy3Q4WFhztokeRArz",
  "key25": "3bmhthoiUNaptJzVKczVhtjnMJ4uTvDhH689tsJQJsAQsAvFP75qehQzM9cUkTHrxEpQWUWkHcom3c3pvWPaJhqd",
  "key26": "5mu8dL8qUdrp9o1R3dKpFfv3tX8LeGQf9E1ipi4zUA6oiZre3vhzGEd5tL83LFFh2Lq4hxmwazGH2CvVgjfkNuSi",
  "key27": "3rwX9VRaDyVVZSo9HsdXgyis8pd5eYUrKrRUQrqofXKs6Wtv25LkPZ76gLr71hLHTQtp7gKNykv6rjjKMiFDk9gw",
  "key28": "2wFfotpNf1JStsPe79sQRkrd3pYH4d5TSS7Rwk3LTWugD8i7iHErFHFSaGMdTqX7ACjaWM4JUhqorzT2f7K35Bof",
  "key29": "4sWzA64BdcMyPNopybB4VHTLmcjcJu3ZtVftfXLnfS5gTmTBcJCvJr5VU8YUn57qEhwjRWSVT98g81Dg7p2cmpb8",
  "key30": "4pKvC5Acni8vjXnsjvrSKGyZvrv7xCHZ2N8qNqjsbvCsmRRVs2n8fTuLQjurRAihcVBGuKuiMGTMYTpeWN1AfLK1",
  "key31": "3u2wXWLSWMt3EXZ3PtftJ2YQG7NYExBjk8GheQdWRtkv1ToJ2tttN2ueCcjkTD1wAKuYwu3M9AgCMnKM7CYJsX5E",
  "key32": "cEpgBG5ZS6DLkbQqaws9yXgu8ziBD7Voc55u6HRy1pmxyGDbDT9Ytjovv8Wt2C1JRhadfRQcoCSnwtTR597Ftb7",
  "key33": "3sywRACrfCuB4kiQ3G6jjdUKAVFJhAbaNZLoh9CTUaXjwGzMxCsm6YKqRHRUGx78awA2AyQ6J2XDvX416KpKTPyd",
  "key34": "4tWKZ21piwRzJf9FSkTTZNQUrQgy4idhfkx2eEVeSo8PR199d9kDJsxe2fRWRd2PvND1t75R5KjcfopQgZqV4Ugi",
  "key35": "2q8WZGfkuxDFY4J7LSL37KWn5QX6CZCxZAAKCspMeDinNdVSN5iohjh258rNvG1sWUTZWb49vmC46Hicm6NtnGRQ",
  "key36": "5g1hxbNtS4JHZkAcUUrVXaeaMKv2couwGi5Sffx5q7JfH2WcizQQ1dfjbgyyne6LfsPsJjdLxwrkF4GwyccFqkst",
  "key37": "4fUmGsX3rmwpp5ZAwtsug96Pz3RsvWfktQrRsaYXKhoznNg33mQPNavwK3XYgXZamZwtW7GjU9jzsZQH1niBSWuE",
  "key38": "2WWs18iKC3tYN4djdwR4u9EQaunWv2qF5eprLLdnDHhvQ38f3uvDAwWUiHKv4mtURC9SZzqbkt6EHyQDpxyqXPqT",
  "key39": "5xX4ZVnuEiFokZbJLtMi1RW1SX2nMgMKu4mci27ooE5oRf7jAo3FztKRRLTfYpCPVVz9hgw7yZVuk8PTv7BbKp7o",
  "key40": "3F3hSR3P1vyYKv7aCJyG3TZmVcJUo6FqHpZBY11VZH7UuzsqDvoQB2UJx5x44jF7yf3GxbgjogTuE9SxRwu65vvz",
  "key41": "5L94qXEBAKrxMKn7X8X3u68Pt6rx3sAKZt7FxvEzjXQJCHXz9aNkKjKzvMG5QgriDpN4wsJgdHB83HKTMdNCnoa3",
  "key42": "39hDCPoLdfXNKkhTLZC8P9gCu4F38QchUuHaYhh54kkq6ewR1qmvT8FV2qabt1TrGhMTwt6T8KD3W8k95G4LoZMi",
  "key43": "5n6JavyBeMF2QWBnD13aRzmrChxpM8J2MqYV8pbWnh3LLQ4v5X1V8kmEnZvQSdx7taJg93DANZFpHB2sBfnjQGXR",
  "key44": "5mYGnK83jFAG2wthD9puNrVNzqz3LGpCjVeDiTgAhQyQ7TQSeY9jZnwysixTspHwW5anFbXsJWCcPYaUx6wkAuXm"
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
