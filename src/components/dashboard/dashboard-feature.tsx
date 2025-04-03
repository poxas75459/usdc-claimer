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
    "2sbUzdaPV6LoJiMZtiTdu4rwHWvebZVuPGWTKq1HVh7UKUuWojrXbwjHUBwryXqC38hTuyYuzWMN7PK2E4ihHZbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sD1YCvzeWBXAfe8KZPBcKWPRUqjRHbZk3mD5RJCLp2P9aJa4nJZt5xgVQcUxeSjdyeg29XgndmtVownC8JDHLco",
  "key1": "4QWPx3sPN6UY17oTH1w9FPwR1TUkMcKuwPvrCaQKDu1F2yfVuuMzpJAWZzUvQQPxhm2qWV91oXfQCPVMKmvNa2wC",
  "key2": "42qEPwughVU387t6vEwKg7tqMcEKHXJbuTwAMT3u4xz8cQYaC6WcwC5dNjKtMiPUkaNrPi5ojRJtf23cp7TLu6kE",
  "key3": "62jKpvnYWHrxBucBCscrjGokSZ2HdRH2FhJN5u5987D5XHJKwTjAnLTBY2FuUrz3XiybKv1WiVNkCgJxz67FhhyB",
  "key4": "5gP43cWjjDHAPuXCondKnajMmrctskxxkiFV4WTozn5gE9Xa88wBe92JkQnDZ2wcaXuyxgrvUPoCg9UmJGPQt6zA",
  "key5": "3UTvehWi67Sq2V7mdEw6NNQ7Z7xYVBkJVA775GRKcPpseUgkQuEa4wxvsrmqeWQQWfeuMfeNLoFbkmPxwbXvgBj3",
  "key6": "2PWRdYp2Sx62siwrAAwsbEJ5e1neCVzCw8ZriH3GsewAB8rxg1YhDKiSJYGDbVp5x8Kys3dWz7ZThgJuNWphERwK",
  "key7": "vhVsTGq2CqJh8Kb4hDuWGA9tzjCD9KDqJRwPD6wB4Kdf5TT8NbVSkqxDhLwfFDMCYF6ZjfUnytyzzoBvYazYGh1",
  "key8": "39tHZqDg6Najgnh5uEGXPFZ3dCNM8LbZh4kukrp9W2vWo7JEXrHuzHARRDPACsb2PZWaegqg4hM7URzsTEmZEDnb",
  "key9": "4QVNsJchJPygtiHTbxxWknQWV589EEbYbQUwN3UgK1H21RmX43tTwLLvW7UioyJzp5MbA6Y8G32k4nGUQhHBtTmx",
  "key10": "2y3ueUjeDXb8GVojNqCHbSrwFrb1B99wVHgHQbfL45X1nwgkmaLFP95fhqCqWLuduYusEXAqwpB8ikSLHgAjtFQN",
  "key11": "2dHpoziSngzLBRCwDQwY2Lo3fxJHaxC1SAuSkHgRMG2neVFQpU2UKvsNcLPxKUhw3p9AV1m3mTX3q8tfMUd7Au3k",
  "key12": "63TNnrLyG3Tvvr4RSyzV2WFQai7cXDb9jABLbRyGJiY16miJ1vYSa4KcR9WVkV8WkaWFiv8BuWzy7DqUabfb72W4",
  "key13": "4qPmc7euwZ5XCvcbDAkwnKr5mdiXmXYnAHq2gt9tW36J5ZfwkB5q8ubz44y9XBaqeZ5Q5qRfS8iY95MDvrMAEUss",
  "key14": "ZEnbhoKV11qaKMNBfqJdy7md14jSUu3Y5NKhoYrtwbFaBfU6qujhNmgDpMmef6okC3vbrSTQ16UMKg6Z8DgeBrL",
  "key15": "3oGWm24yhVYEeTERYu4dNujaFJXkDyGaYaTb8gaZgZdtbcyDCJfSLMnbDm22zWEE8FHpdRMuS4bFhzUGeZTN2Zyc",
  "key16": "2ZRcinCsSC7UwZBen6tTFnY4LA6yBAi2V4ky2TJppx8sKZf9LjKo9fi2RTKzR4fxoH5Lkk1xKFqpPrrfauaUJKqt",
  "key17": "3f7nKsHyQEf3E6GoMKCNpJxohyZPcrVJEQykJG8evxgvPjntB3DTfc7woH5vCwfSJ395r2G1vDcc5vpPsDxLSRZo",
  "key18": "5yr9Cy5XAZiato1JtZG1TfgsJx5SUgUL8M3z726gtfGj35chXF1n2nWS2hRyYhAoVu4AGGY2qn5bqakDKMgcwdHV",
  "key19": "4fRo8WHBXyRT48nLWzAVpC2ZJhfWs7JXmmPcsExaFrfdX6e4MbSgTsjqYBqUDESybroAstmpdvfL9DX7rzmLcWsN",
  "key20": "4QmXHQAXg6bFJzzrW1Rc785U684AE8A1ZuTddNLXxByMS1MyEqREAUVMyAe4zPrNxrD4f6fGysEkybVeyFAqnB4A",
  "key21": "5zcD5xs8U35vSeokEwsSH883rH9C3SB4Z1Y2YefsgtnYCEuWKNisvGjfUUYb6LNPJTexsZnZfV8AwNHGAiVPfbHT",
  "key22": "NbyRTcsnxRujxMFyuQ96nyC1rFKnf66R3sfDyF7Tm98pNgfdkaNz4bHKwqxLahSH4p7viS5YbTQyWU1h2hZdWjH",
  "key23": "CRXSAsemWovHiravjRqxjT63rTDPzrK9M3Tevz328GNRXJzzQM5vDuoNcQ2Uxat2eCWP6NoegtbmBoqCjcaSDQx",
  "key24": "3vfADhwFrVX6ysNBXyrnMorRnEKLyqDDogjT68e1QPehJBVrFVegtMMXsHdcLP3veEXjFrgow8k8SJeTSJq4N4XF",
  "key25": "NnLnSdzjfhYq4cjJCH9z2o8qyPYS2zcb7WJdcQ5rHgDZg9P8F8Wt9cE32habo5JJ3ErxdVqNhHcXcjh16qXfmBL",
  "key26": "5gTiyKkn8jLYfBWwxzHrgKAQ1ZQWqnCjjPG7nnJ3eYDeSCohpXCnsVAXqdSYz4HfF3Pkkt5WcRYdRrevamEAstCE",
  "key27": "VRzCUyHXFiB5hC6xkiZT9P7XVtNyP3t2wXo9tMZx95Ujsw3Q6Amp2EvqG8c2rfLWtYb1mPpGM9dy2yYj28UDpuV",
  "key28": "1uLww9yPZ1QDMmP8r9vToKCxCsDsfwCcv3tiCvoanTUvKy4RbKnAMBhaWQFVRB9zDG228UWiGXoRcwPpAH4Gok3",
  "key29": "27nVYqaz8a77WCsgw93Za6dUXdd9q6RNL8hiKWMGRm6Vm924MuAk9GKEoDpLc69B3CRnfB2RMb2ETB5swYN2jNq8",
  "key30": "2KPeienSVPSjDyFHK11KqBhzK4smD24uV8HXk3VdcNv7ovyNVXdsGmZvjs8tJ86EqvPXtYsjNcY2qGiR1QgH1yJ",
  "key31": "j3bhcmZhRsE6zJ2PsTAYwpEdUzPF3Wr3pDef53H3rikPWKjUnqaifMgumrSa5o7RVHaGzkmR59dmQtopnc8dUcm",
  "key32": "2LSZ4pnGHXKKqXbFstNSDffJ71M4orTgedoBWZfkAL6eiotNAk7S3EGEjy1z1jC9nGht3Dh11KEY4fbBjJcDR3sw",
  "key33": "4Y1D8JvhNEBnXTDxVR7og5wHESRgcXtAPfxVSrtAemXDcfgo7M4qTwbXfqsTVnTCXrjKT4PxhxPNx6n1JcMrDVS6",
  "key34": "3P3EXmemmjV3o3cRLwAry3zWmoGBJgQvjD5QbYTR2LUHtjWU9FhN4o1cTxr8uUMhJeWSV6ekint4kuRBoEDhQpza",
  "key35": "2NxmhZzJ5ZjsuVh4n1CTdDYCt3FNCcazZn6D2r49sCtES5V3o1dKzTF1ART4TjgKHSq98eiUcWmWkCVND5ocrq7g",
  "key36": "4GdtTdjJ6ux7Dic4mAwc6rUACHdYGMZUfCt7JL7VdZVkiJw6jwtVnqWTsZGxxVzNU7JpvN2LXqdR6xZA3y7oTicR",
  "key37": "47BZRsoATiQYrNNWR6xdBJXBBijXX93qu6YApr6gV8NbVqysgCeK5eXhJ2f5cRdQtf5vVgrkBo4Z7DwmoCTrudZD",
  "key38": "31nbbmUcKUC4GkEbPa5jLAdKBXodoghUiZey4xPE8RMrk8AuxsVrCyY5ArJmuopHWh4wQQAzH3ecfkVBSGTdvxE6"
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
