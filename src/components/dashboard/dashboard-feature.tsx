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
    "5ir3BcGTEPMVW69t2mQni4J77J7apDfcFz5RrAH7LSAEV7MN7ETZZkMfQDho9wBtEkWHnVANhuN2hrg3hogLcsWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oikCJCeGVN3ZM9G1Gsv8cUMh3sK31h3D1ZPNUbghahrZoDzcovpcVC8CHMuGAFCYF29RyLHrEb6VLvKHqfE5TfC",
  "key1": "3ijbqjGTtXpcE3DUJxq9noAsTUq7JDVJi3mLXLUBFSid7BNjZywtTxBPNVVAeFXV4UUJfnPGqTJRoZsfQCzhtPZd",
  "key2": "4mGx7dwnNPo5B3GnrBQ3JfDwej4DbdjGdLJwKRAMaksCJea7hrGs8cEWxDGfobRhrfoQYWDciCtd2tgGTvVWDNSd",
  "key3": "4twUSjo3x6SVLhUg88D2yjrMG5V6BCjdEgFxMoJkjyjWvJF6ZPzWmeT8vwQy3m6a7RE8XqpejCd2npKBGjMnbEEg",
  "key4": "tGEsN6CBgmRZZQCkBdLajK4j2QXzdmK2tr6AYttoXJStMmJYn8QfGqiDBbwi384PfdDemAJ64pya1ffBJ3wUqwA",
  "key5": "32bwPddkAY6XwkCZuXr8y5EaS8puNaedzALwRyYi4Gqhg54iA3EJzcAW4h1ZSQ2p6vrXq5Eqw7qziNd6MdspKAab",
  "key6": "v4UToNZcz3Z6ktwQbZdfW9526AJ6QdvmE2Fx6T79RC34pXNFXaEnxSxM8nWEHYyj5npXvpyqMAuhAFHSGUJkm73",
  "key7": "3rqatbkZQk5YsjRX8CEFSykDi5MoKydd3fNDtYT7K6EYKT3C2AyFKj74LnCwxeMATsW9P4R3WdnjbWwGSbS4q15d",
  "key8": "5ctWJ218BkSwjBfwWJ4G8nrbsX7LcBFwhkiw4ucQ9pgQiCMjHtKsYRGqAHPp2s1q2y6AbrFaJ6q8qCq2xN952Yy3",
  "key9": "4CREUde2DUUjyfLCQ6tjtMN9sv4kA1S9FieV3A1xw9uBpvZcojFebnhRN3ZPXBiREmiCJiyvhR9EVtPjobH6uBGc",
  "key10": "4aiNngp1PyBLsu7w45z54x6gykmE8CAg7kbj96iWvNeRN1CNBBiKiXC9qKJQm9HHRbioXDXmDoStLv93FC5ufKAp",
  "key11": "2s6AvsPi4n3yGqzd7qda7c528eG2ygK6BR2aqjYcWRV433N7id4bcYUE9G8eDvceyums3eAFS1mWXmWwKGWJVpxY",
  "key12": "2kPfabz3E3BogCwS6cuCnWDBV7dMEouKCD8d4dQN4xav8BtYnhyzWx9z8DhoD3FcgquScpFgFsQnMXQwnTRCtYa1",
  "key13": "3K786ywtRAaWeEGXcypwdcqCG5AVncSocf4MmgaHKWB8GKyFxpoY5ywegjKzzr7E3P17cvs4RBzMBUqyDZdpdnqk",
  "key14": "36G6427zJhQeoH2bZUYHUegV4LpYsxMDYWnNgQzR7YzJNHnomWhUxqvU1qXvgyaZBDBVhHSdYYGM9guHnXpNHHVK",
  "key15": "4bzpyDNBhudSRGbz1A4oDiyAuZYhwqU5EnYtyCFGUHsaYFK2vfNwxTV89v78a6T5BwawSZCWYunXBEpQyGXCzS3U",
  "key16": "4Vq5kf9g5PwyjQAhPsZsJ2NKpaBAp3fHE7VPwaZsrf63Bm947c4UG41v4BHXmsUWncx2pMQuLiQs1q7t51PBGp5k",
  "key17": "54DrbRmTfezjBe3NSfr1XcHanbguwhoejbJPqDjjBKzF4TphLXHxy69ysKiDURhRUhJbZgVY5iFQ1u3E53L9xwZR",
  "key18": "1BHqzsdHXBBHggnJCJ5qFySx6nTgTM4P1raxc9SHhr8brdpva7SGUzqp16JdcmBqt4QyFiREoPvHpsEUVh46MiW",
  "key19": "2vfRC2HG9TEQTTokLbWrGCGKi9SpeQRtJcupu6jsYs8BcMPMr4WYdVohut8JZSNKavUcmzNXVVxKJWM1hvY6C3Yt",
  "key20": "65MnsJFQehcNe284dvwAsdDRgbKp9SA8ZwUHn68725hkDRRF4ebzHxdR368UYKAECqr97A7f2CjRWSpeG3A2YUBX",
  "key21": "4o17juArJTvy6TUBHSWaMGV8ottHTAcAEEKHtirZ2kAKyZZLE3NzxYuZzKgjqmrAxg3AxfjWMpjHBNAPBEHABQcY",
  "key22": "2Q2pZUbvu5677NpAzJChPHfHAy33GRtm6phFSFoTyaKAyVt1aJjJZTp5uz9nY8WpXEnH7Gp9B8JAJ2xLgwgBZAdW",
  "key23": "qU6mCYKa1FuuuCUTg4qBjNUWm8N6ePARv3YQ5MPniB9Raf963moWiFb8oo7frG9WCMktohzXo5XsVZRQoxAqRmS",
  "key24": "57KwRbgfS3JzHE6FRPbqQfzWm8QbFTL5LrXYJcMzrxAUqfno23ih6dCPk3xAXvw4kYMSpLNMv2vVsZRtiRG5HYYS",
  "key25": "4Z5Y7vcRNbmawGrCDk7GcEG5SXjxAXh3i41b573yuBkooXjcesEWbP9mv9kQqRDKQwwY9YdGamSAYQvoe9G6b1bg",
  "key26": "3UNLf7zqDbde9PYfWy6LoJHUQqgQT8jCq3yfxN2k3wiNECwCp2GdncnrSkBv43mq3rYqc3AyXmgnmT8CeszRRPgV",
  "key27": "5wkaHrW3CCDW7yfRRCzy4UJdKS3ZCgGugVPXYrXA67t2etQuGpwHLfYY5H9b9cM7GuMALdtmUmuk3NsWZ3UiL36P",
  "key28": "363ofABo4LwoeiQh4NZqdKi8MJ7YsKvXcJxTT36jTvUZbHYHxvyXpSB6WLGjxfErwsC1ZnjjRofcoCX3UTKLpXJT",
  "key29": "5yzigC3qCeVUUodg8xacXXPU93djqyXSWxSpVzHSK1KhUiYq1weHDMwLvFtuqDiMGroY9Be5CQvBmir8EnKpKHvz",
  "key30": "4YavVfPRiDmhxBBcKYAuWGLx6kZE35STtd1BBeRvM2LkiQGXcy8mfxUpi8MeZKjNUjS3W3GGAMgW6BUVY3gbMxoE",
  "key31": "5aXNiUsQDtc6sRD1Xmq3EgvJA1cWbMER5debpNaFcfSc2VifEWRxVjduX1MPbLkRokRaRsab8nEDDy32srEouC6S",
  "key32": "3mXAyRqxtZ1auS9zKLYJQfUrAfoYqB3o7upgAUfPwJWZQpVgkD8xbkSQivwK5QA3aieBUu9VWrqNkJdYczj8Ruzp",
  "key33": "4EUuLvit7ypw17qyU9aTxQ3KNmgnyjKc4i3mH9Xz7UAUJpsuK8cTzHcVjdJcedS8jGpE6BKHLXgoxHcRiQH7U9kS",
  "key34": "2t9aHRSzL4KKZ2y4CA2o6uCrJoRrEL7EP1kp2EBVM89qst1FR7PKnUQUZ1kqMYozQSVqMHayAo5gK2tNLDpb1i4x",
  "key35": "3ibj1xz8zbUc1AZn9X1tV8bgSrsnJ1xSQucjvckpz5j4Uo3Fe4L6jnUchkz1LhoWXphSZejqQg7fT1oLWXW4ih7c",
  "key36": "5wLD1e8tAFHP3J7u3KR3n4QZBkqqga2P7RiVLvajCgui72UfYHC4AMvcYqozd577fKgJCMzpSgjW6zpkv8Rh4Ao7",
  "key37": "4kAdRjVL7vCBckTLG68HeA5KZrT7P5ir3h9amNVQ58RaUFJrn6wZWTY7VPmiDKiKw6QyHhEzA3fFqFoJcbVJ75yY",
  "key38": "2Wz72aoanUkM9rhPWaMvpAWH5YsEp8H5maGUZqAMQps6FdfGKpYuexhu7pxchbV5T1rNHusAB5n3FLoTGuicMgkd",
  "key39": "VMjWQQn91WYZFvTCsF1iSDsxV47GdasS15pqwwejVC1mHozBLyTEjGd2jknR7FxvtUupqWmNeaFDzpng9aPNKzE",
  "key40": "3ATosTEtDgPWRDPn71Yoib12GK7b4P8z8kKzFZGmypq541xiFufb4bRBjARFscGdmJoK4Au2HQjBuATjsALHZfqX",
  "key41": "5UJgvNzxVsUgoaC7wU3WSLTX46SoJRep7sdU4DzCbCw9Ckh69UTFL246RLGKFykAYp6cDp9djcAe18Rqfj1MYQtS",
  "key42": "2jPkNyxYRZazh5LLxAeMXVoNsJfjbf9izoBETis81QgYoHZ5M1AuVFiLyjKo8iYdPCQ5D19RDz6WUfLirJ29fmef",
  "key43": "62M7Wvg9euNX7QyjstHgjg2BTRQhvtjCdN56cwPaxzUGkU8RDDXDvbvJXWbYx3HdscBGjModm3bNJ6h4c5cECbeC",
  "key44": "3LoShUcoRP4BAvh6e5ETKEmfAsJHCDQBZ5jdcB7FufbLZXaNCQNipre9NJCDmTRPXqA5tBA4feBzd4ATUvWHgC4a",
  "key45": "3fPUXRUc83TK3nMMsrTnfAxQmLXe7RQEEQQg9GddJKYZB1Rc8Dfq2e7nWzi8BQy3UMiyHx1bs49UYW4sCzhyCirq"
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
