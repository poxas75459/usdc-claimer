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
    "3RU6wdGXnGawcbmNAfURhzuyoa4u89i6qR3zJ4cBQEmyLhwJeWUvtZj3ga1pT1sPyeGyFzXaowBTDcYhxrCS2YUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAf6H5Vkaub33pGvEdADBvdCHrk87ubLXnxbQG1hJn1mChrgwKhWTMQhCZK4ZdWmEZ9toVUNV9xRdaRkdeM2RaP",
  "key1": "3seZfWaxE8d8mxL1bzxSBD7Eho6TAFMRxe3WBygaaaA27hq8z3NatXDvEw3oEFoG9rQZoE9VnnfjfRvNvEVuBQi2",
  "key2": "5WVzSDT27kPsMK1mUc1MgAh2jUdhw5cAPn2jnKwRb9cnQx5C8Bs1LfiZKN1p9T9DuoRyCae8jEa8Ni3nA58tkR7S",
  "key3": "5Kim9yGy92PSXreKAbbCZjJh3VMBkXZADszMUzVX7w4ZC9TPVT48CuQcFZfwyerPhRB1TH1GUhyRjFcNBym1SVBU",
  "key4": "2JbPZiecz3F2JxN8qxddp9CFTQXYyRs3xSdgtT9MDhRQF55LPp3JXxjVgFbgryA3YbqdWu3RxDpf8H1eAPzMDPjZ",
  "key5": "4DdvXF5Ygaz8CA4Fh3pJ5jx7HevtWwLGVxeZw7ss7xWFanxMMn9bk649n6zD25DvjM12EpKdQrqBL9tKfGLZHGwz",
  "key6": "38SFTKyppGKJUq1TYQQMJDWhxQzvoxSfCmP6mfWFJtp2MJeCVRJfVxQ43NMRXzox8u79i9a4kGqUGoD8uCSbUqzt",
  "key7": "kBsWBSQJ9DFwXYB7YN9CtJatv84bJ4csUBkJg3VCZzF6Ek4YtKwDTzMixuJWbTC2Ey1Bb22K62ubazVE3d18pqh",
  "key8": "86saEQtwPrWgJb1WERKpVVYVVVLJZLsBtY3pcWXso2Gc7qwdZnuQokwvFDsW5CqHzcffjyZjiursERz4KeXviyS",
  "key9": "diYXf74f3YgAo2opEiV3dHVs6zgz7VqyK9Pjn2GGDdoh8ny1VZqkgU5KV8Ujw6whTnzybH2jBkDRkniPUCaW2YS",
  "key10": "2WmrAxbTsWhivDgoA3dpSsa52TQFxQep2Ps48gBjviDCfT3J78f3CvvHFmnUMfVxk9esiPrtcrNm4NP755UKr4Xc",
  "key11": "3oR9CVub2TPaQNXenQGGeX8DKX7Rg8MTmvdbaLbHaGMrR4ac6ktEYwgZ9wpX3XBvxMXjoQh1rp2dMenETtdsBJbA",
  "key12": "2MPyQs2FHcNy44a4dh7ymfxBezdR9LD9EW9NWpHQFgmP8m9V1HrcHp381q2wjjzHNxh4o2dtJzTh3GUYRB52qbWv",
  "key13": "q8LWcXQE6j7LTUJm4sgrdMKoYCmrxDcHwyk2wCevGekQLZWheUJuxwsSJ8esyPGbUeUxCdhUmGXKSK3owfWkQ4P",
  "key14": "31cKcgccprs1oYcc9wUbMSGM6E2uQZ1JfPMQ5DVYoGAvLfo3XfRixB2DjrYxLRsVWXyk3icP4EJsRBt2bYjZris8",
  "key15": "3NMECucKLTw2AoRNPqPbMoU7fwE9N29gyogoWe3hctDpABk6pzTfLm91LC6M8NzMpULdzrkekjBYHRvvs8Sn5ujz",
  "key16": "AkBhV6qyjBmZoWKXvYNk1hgghto6fLEEnqwehMWgS5VrawuDnZDoGeJWYPKMSNPJm9uUHYSsF1t5A9BCS8NA47e",
  "key17": "5FbvHephKMGLLaLtfnWUnWBwHsi5S3SAjqpBvSZCefH6G35REo7PUctRGWsssNA5aL42ApMYtdSwVCqdMCMSn4oC",
  "key18": "2fqezMiHXE1KMACogVNx9y5wUDpL1uN1nLbcar6a9tpnhMBk1R7iuMpt1vSB5REEa1J7588HGJqysY2nywA8qd4M",
  "key19": "4qeNc1ewDv44dGsEujJk1T7TCQFWKCkCtjvhEnHYHyWL7iASiW5qrjMj17cAspEtY1ftDq7sG5aXia2v8NooioJd",
  "key20": "3bUQ3ntGXkRbby7PobAYMrtma8Zw9ArEESBnS1hnYMGjK6wa6terqBkXrzgU6dKhJcugtC1kvoPNt83mQV5doU9w",
  "key21": "4bQaZ1RE2SdimQjGe4b8aNRoMDuoBNuUbbBoqd8FbujsQQzPb8XM7zSZ8BtnWwr6emsR4tDYfiiwQDBwUEHjr1nS",
  "key22": "3DxcJRwhNohBrhzYmwAu8Y7uTieFXWwMp5DMVAFDGicKr297zBPSFBw3tGfabnDMnzjvtKhozamQcZvaEaLKwxCt",
  "key23": "3VQRpb81FvZ4UCsxkQg14mbmuGkJHy3mo5VoN5Lpe8QCZ4Vo4ufsRg73kqwEKpM4C4LmRrMHejc9Qcix86KtDX3J",
  "key24": "63MFC1cr6b52FXa4iU8jVZaynm4KvHXMf4jk2WxuYMLyEKNXAsZcJxpAfA6ieLNmHxF7zyvgiN1qKsQPg6nxGYfq",
  "key25": "39vsMtfLcoRNeKzYV1rzJVWrMigUbB37Vz5eSWpPA7n1Zsizk7azTqcRqQg3uoTsQrbLu6V14Q4MXqw1NoSbK5yu",
  "key26": "4MTEcAcwtLioBSZ3GBHWDuxB1foG1FAXzUD2fjWBK9oazChH6kMh4RGkcqRXbP48Se4nQQ2yadW6Q9DxY1DSLq3v",
  "key27": "3iRYy6RcFa5wMY6L5k6JPzf2Nk3FjJwd6iWzL9MSZCpdfpAEsGcSgruHPaCo3Ywj4CsZgEbV81rbRpBX1YytSppz",
  "key28": "2He8A5K2DxzVLUzD2Eoc9mh3k5AvLP5gAWSzL3kMnKLKsZhUmaHbpXQ3HjwNaCy8uNv7LYxPH8dsieg9wFm7HHVy",
  "key29": "5hAzi8nd5eyY3wkzyu8CzuFHZhtkX4WY2Wo4JWYxsJUZ2nxobTDRuR5hkhwf29sx9ywAQQsXReR3P8F36YLvQC3W",
  "key30": "62vGNNSMpQnf4zQq8PtPySwsNMZynu1s4KqsL34HTvF1rCTC6JNtqmFrH1vKeQn9JhuMQLpX6QfXLRGBBmJKi6Cm",
  "key31": "2sz26xyWcq4yLfRFbDBdRK5VoChFfrnemKSYHcJEKSKD9XvfK6sSvJMeEhmxiPSuB8yBZmfQn3WUznawgrmxjhh",
  "key32": "5RZxuby6YGQJPi3s5mQbpsYvNuTeHhhhgy6Zom8X1A6p3xdyx94K3SNKdebxSmVf5uvA2ZLAjfX1w2CRs3pc9ndP",
  "key33": "PMm8fGsYXbRbNjkp4fs8QpLuc7cfYdJzMeWjipE6HdCDndt6xMB4XqFEVnwVsZoff5NaH94zP8FNG9XRhzWeFX1",
  "key34": "3j8oJeVfoRGNGRXDMrZE5LUdbSDbB8JPe3Fj3KE1PZTec1pjuoCdzzfMrFkFbitUwTYHu59e9kGVNPGZYy7xEWwS",
  "key35": "4EPZz6cSGBP7MhJmhG5vrFkPHGnu25G2hyAQ596rLpSxKgF9KeDSBsu8ZsLnuPnZkmbYxtBeWQqn179W6fvgYNtu",
  "key36": "5wonf1um51m3wyozqU4uwLABuukLWhdtKDWT3TMYwQ3yVL84DvjDk5dkFqDEQfEPGc4i84xPfNPdXTdQ6oeogBJJ",
  "key37": "2HxP5YScATdryQBdvsNS3Mti9ep4VzABHJPD5t7ryhYTcJVP5DqCQMoXiyEUasuZxQiw7eVRt8DtppYFzGgTd92j",
  "key38": "464qDdU5q3BmLGdzeoGTNXgurgxQ58DV8oyFVz6X5GPkcPMYwZKW8bDYF2wy3RcuWn4bbzGxsuNGm8g48P4oYm8L"
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
