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
    "36iZsJhzH9bdsf6EdwRM1hzzLxCEFxu7yBsVTv23Yybh4Z5GjGYG6fwyL6eSAdDrRDA6Q4ihNk2RpAx5of8Zj81Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L7gH5m7yPUT7AXERrmgwSK6ZXvK5x79GUgFZ6hmFtuXazkSnKstTc4DtyHiSs6RFavwRedt88H7R6kQZKwPbqHN",
  "key1": "64GEMdvF5hnDgjpgfAvhpyNUri5XoBzHUFRJozuAWFgNe8BEcGgZWWJBS4htc7v7DmgypyXUhZfC6BRNWLcf1u5n",
  "key2": "SxjLVnwxpFx1X61AwrXSLcS76nA13Ss9UmChpz1kWNt19kXPJf3aLnv9tPQ8uniHnFnpcJKJvT1tfvM9XJEuUrK",
  "key3": "5deT89edXsYRbDxsvHQEc88Vyo64WdRCctbsLpfJiMwz5DLL6rNCCF1dz2fpogktiA2ouyi5Aq1EqtfJDq6jYTBC",
  "key4": "35SkrTAyd7Jbgv3UTifgQJHn4s2dX5QZmbJtvM5pGDPu3kEbWwg1SZHjNejVWcBxBoZMaNsrjcsRrwWCY9kBfrPN",
  "key5": "3fk9BAX4uimVPE51bTUvgKos8BcqEzBFqNPWbbACYrGigWhnz9QTcCEvYrT4B6JYXygRdPZHZdJtLkAamZ9e5Y4Q",
  "key6": "2aBVVvUuDREN5Kn5tt5rcKEs3naPbvDnMYaSPZ775XUrzetN2YzCF9XjfsbPAvSusso8KWXwwu23MbHsHXG3QpDC",
  "key7": "FM9weHxEMxCLnea5zvtgkjynswHvGQuEzeZXTZaVSGbDPiLh15w3oFs6K7LM9CFWobyd3XtEy8RkWsCqY66rybr",
  "key8": "3zA7cbPHeQZLyqrKutmFBqKHJS5iMxE4UmZFRYxQ89NN2nJb1gx8v3o529Q74NQN9aCP6jtmCTXxFZwzgUE4vriA",
  "key9": "3o5zx8zAhQJG6CEiGNFSnjgVR3H5spkrZg5Yuod6QujMvEbVb2LuRygJc2hs5DNDaBv35nUfmvPtr22nSELxy3tL",
  "key10": "5M3HETwuUdX8nYxRMovVEnRce8oPpiH4jBMBQxTmC7e126ximhZWQzpQR1K46VZrreLEbFWASPn1LDCoaemkJZKa",
  "key11": "ocTrtEbDK3KqEig8crxD1go7NNLMEsWhLAdPUcUsBSkeLCFJ5rTUXk5oeN74r9CdjJYayjAvUmzgfMakrPFQEWV",
  "key12": "5afv8ttRzk22n6DsBWXuxvmdt5BWK9Bbwaax52XuJUPJCx9DvczU9ogGwhCuEVDgjxuAyNEjSyYXgwXuyfpvbzun",
  "key13": "4eAxiA8PHEQxwKX8SZF7BuiarBS8ur4yTrdZXhcx6WxE1jgbWDASSzyP8iSWBvJYReadnPTRXzQtYgt4quPMH1GV",
  "key14": "2JqujC3k6zUki8XgTDdaBoJE7Z3YwstgSdBxYYNWoFH4pNzBKY9uwfjiaNP1uYsDXwstGhb3faDoKtfAt8s2BcFs",
  "key15": "5aFuhfvgvPQCbqCVwWo5rn6yT7gPezvN1e6VeDRgcP4RDp5HLP4cc5eKKckPox88YzRRSvY4qyt7pxxDKCnKGw74",
  "key16": "3pZedEhabmA3p9EkLVLxC52gjD34qhR7ozjNar5FiuNeh2TT8uVtm9REKeTpDUQ54ARU96ZzZ5xqeridRDBLeP71",
  "key17": "3QFTb5xmQGLtbhb6EbEfWAqhHsVquWHUunRQtZzG35Uq12gWwTiZaKvzuqCgkTj23htTrAXuYkjU9Gw47tkfP2tU",
  "key18": "ZE2k4qLjfQH47xapDfeieCrJd3uPV2enwFyuAtJEFgNndV9hyKe687QAQ3YTif2DMAgGPK3pJPzEkvLHm699hCB",
  "key19": "3aB44KREKF87sbcWyVTYkU4sn5MiVLE39WfHYht4wa4WRWBdzeFPtwBmgiGPspxHcCQMsJ6FayqQBNoW6oAk5pwy",
  "key20": "2xFUpQwfx36foTAvq3nH2bt7qqMBowf9Nrc4VZMtEfu27BjAwhhR4bNCt6s3k13MitBseRtKoEF3MpTov2p91rat",
  "key21": "4sGXy3be87aiP1qZETTPbuqa99dFyDYWUn89DqByFvLMbuFjN9SqwHEAZbxvJkEeEJYpCZPjtZqqeWpiLpM4ABCg",
  "key22": "4x2f8zDDTnEaaW71EhWBAX6yeNFfiaaHkRZ9HdtbeNgpyz4rS1o1g2gzB3MtneTbv3t3FPYCwXLE6hy1EF8gG8WW",
  "key23": "4SryQXwp5yNoCSFx5qRVLNLBqxXKDDiwHxWBRwSwmPjD9G4NydSckKCXTjBe2oPB15kEruPYc6E5RoYbPGuifAoN",
  "key24": "4ocbLEwD9n8WA4omhFJFNg6HkNthMp9rgKvQZhDQuVnXhdng59giJuXMkUs2jaQjUmztEuPFLA9h22mBsgMoW4Ry",
  "key25": "3Q8FiincGck5Qy9BWA1FtWHV2chuiT9WkALL2VHSqRUppc2dSGBNr8qH7rca9VvpsmPpvuMSULi1od4sL8PFESN8",
  "key26": "3xSj2qexuGd9VjHYhXdCktKY8acBrDoUMNpQyEgmufCQcQMJ4R8h3pDugxpKizkFWpQuMpfk6Ph32ydPy7pjj1ga",
  "key27": "nQjiPB5dETFFrkAgguccNUvtVKDzgdD7zGGF9BiQTdoUD5gu4hkW81KPpW9ryQfCzXfwat1FW4jZwmiHYuTnfrs",
  "key28": "4EsR272cfZPk7zMYAJn1rdMvDT4oJWGJwyg7w7audbqr28W7pKBxYY8xUffW62m3gXtR2L8svvFoENVVmAQga5Sa",
  "key29": "35g89rvMc8GUwhEZtwrH4fBB6ULKMWDmjrusPm7tj1vCzDETYBHcLJtp4oozzgAkDQLRyJjt9UB8rC29bESXCzdH",
  "key30": "4KmWfnc8kM8gE5cP1j7pQgfzXjSUWhQtNHmzFfvihNujzA4VozFX4paahpbJVMu2cEqEWVc2nJu3Ke2vDLRwtBeG",
  "key31": "5Ni1MKoayerupYkZVe4FVjY79ReoShnxhcfTH6zv2MnehZAH2je1KGN3UzHfY2SGiq3wVjEkcA8dvqkzgiaGh3Qq",
  "key32": "54nkp4E3PwS1Cw4nB3Bw6RcUSGpLbMdunott343Sdu8ZNDVoZbKhwR1k69CvH4x9BvEmkdMWRZkVsixoQNDeCuKz",
  "key33": "67RpoBh5GbMk9yMgP8HWDy6eKJry4YS4BboovNPAuhoKqeqY3iRUNTjR5E7mte5HCVMEGknLjxccJNtv4cr4kWxE",
  "key34": "BBTY8ThLGAUCWhyGgbStspVbriQLJDGqCKmjzhVUJ7cmzTHBqtpGqrdG2uUkG4RR1SjzK45cL6LqbE2V3U38dbc",
  "key35": "5WshHjJ3PMbrmz3KMD7PsUjxyzmJRheHHsN4DZvnmz5CHFtPGsyA2Zff4uLNwmkTZ4A9jq1tu6U66W6dEH67e4u9",
  "key36": "2bNizWcA4bT1mdwLQDjiQvywng6ixyXJKN13FoNHCgjxsREshjw2M5P4sVPMpNfFhTUB7vQURtqgkerE6BSJC7Gq",
  "key37": "3eAeY3SL4zRbwTFk5MF5cAZcfwtS8UmtGqtoqmaHGdDNCjQLY6yifsJEVzKDCGeNQ2iRrSBQYJ69K1CGiVRUB1fH"
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
