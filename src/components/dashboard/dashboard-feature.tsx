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
    "3MiZxAqqaz6gmomnSq3Jj8QscUshFjgRCYRa1ozFfgLmZXraA9HNULfrZ6Nj1bspT1R5UfmpvCtJJQpXTx1ecsM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pDcr9JZji7pPkSJiom15njzsVb3y9N5V6S6HiMEkpKtv6UVvfVEodDAmimg2fUFJ4cRwLWEowcc1QjDZgikEDpk",
  "key1": "5shAgC4SXaw3agaA5JkALVoZxnAoTdfC47hpQ5x1w9Xw663j3imd1niHK2r91vDJx46japMd8Q5P26oT1mZuyvBo",
  "key2": "4WPrg88rC42WgMySuRMHvrbdzyWq5KMT6ApMbmSJYhTnqRvyPq31iyQUBkYWUD7gVFNM29tETghDVRzhAUaEhxrb",
  "key3": "5YxazcESn93MKNuQfenppK1os8XnG5UJMszz7gmCDgjUbbuEbdibFMaojvhboTed2rf3cop3pjiu5f7QFjB1GsSP",
  "key4": "2bNoAmUeHL7hFooUxP8iuMonRrvbphummJJsus8HsMieozbQhqPbWy1h3jPKz1pHaV5J5JKq9YoPfECNdcpg9929",
  "key5": "2FNB9WsoKcwKBkk1zooZQv4foS3uz8y9Jyiy2HUdRf1L5xVjyZXA8XBVKWBx85xdtYCRcnPtVKXRHFG76pgmT93k",
  "key6": "46pkVUpkmGTNWYif5xSJjScKErvGJzWcqz6xtpXR2wjkvZ1WuqvMj1p4QWAbShdfqvpzfj1ZwigBHJBzFyputBVr",
  "key7": "2YjanqeiTzeVZME89FoCdq26o57u1vXuhiKwuH31aFuVoAopbYCMuGbczcaxjSEsyMZEH7PgTCGyEVPbFnSHJatP",
  "key8": "tH3XtFF54B17Hq3M9F4vtxv43H8Rg8xbGKCBcNYkYmD6iJKDHyAs7FKq6h4TpDrADEuhDn9gEAChogmxUwCxAXc",
  "key9": "4P6i8oypVJ8JpBZjPCVTHs8CyYzrABZpAg9GXzfqUtPfShb5H2SrGXLGHF5v3e3D9QoKopFripSELkfnDqpXbHpb",
  "key10": "2JtehoJo16t9ASjnTdrAwNpbncvYHED4NpFF6L8zpQNdt1BmKbuE6QuJaxCJC2gZhjDtMtjUYbEQHFsqKnU83qTx",
  "key11": "5Qz8eQ73ndqGnzSvPde5UCsifQeqJGFGmfipRtuX6uEh9mu84qjdvAjZ7Z57QVT3FfzKttcwde8LinMvShcRgNyp",
  "key12": "2M1GwxNBuF4YoMao1pXbQ6JFsWfsVQEfTSX8PEZ1n7rmusUEHwWtSxF4qWYTj8varHRfNfUjtNv1o3yTCJ9L9bsj",
  "key13": "GGbJuZGJdgqk2oZXRg9eE2htMuXqMqyAHpUMbdpQTvmogWxdbHnoFLNSTQqEkpxKyiRN9jqmourtiZtTRCzux1e",
  "key14": "1kGd1Z95dqxuPQh3n3gV8Szw1BGfJ3YgF8UvKm6LLixndFmMyJ1cmFmVuwu5qav716ZWR9ky9fsKHdKvUMwwPap",
  "key15": "NLSpQT3GXTyK3HvgojLRf3GHchyX8bmwAWgPAQxe6DPAXFjy2aeWZy5tzT6Pt1mWkrytLKmTvgyf3B9TRtFzxCx",
  "key16": "cGRkd5v9Tp4rHP5eKy3QJyZ6C9GeGutZuPAptWbQhUSL6Y61qHbbPawYDDnpWw7J3W5YZrFDGiz2zY4HkVRakWq",
  "key17": "4HkK5t6V5J1QejMwsRvvWXWJrSUDDrT8prscp6ErebCF8cvey2xBu3Pq7Jvuj8pE3h462y4td81t2bSBSUbiSmey",
  "key18": "3QBDpT4hKpatcM5cxa8qnzkFg9mbRf1VnvTZuMqxPLoJjaHkMW8yF3FT3ZSYco5zjGGQq7TjK7YrJHWpoxY39eg4",
  "key19": "ViwAZZcVHzazKuSeqydhvi8fWWPjYG8odvsP32ieiXWexEavjQZJcTfZj2jmueYY7ffG6MJXSVREqnejC7Km2Ep",
  "key20": "3Wcg56JsZWbCQyYHd5yZCKDFKqNwpB9RaqK8HFYTXsZ5asfjiu4p85jn3coFFZHmbTjAmDKWNFvMDDWeKt431ifA",
  "key21": "2MymrknkugBNo7KPY8owcAbReuUjtp1Ns1zFMJgeahaMRo7QDGGPEJT7CHtNNAMDFDHHxtGQPetLvaNzKt2RgTpp",
  "key22": "E7YJehRTPUun4tFeonfkdHi2bxZZz779tUA6LRKCmxheqQPv8Z2i1cnwuE3xQp4U3Zk2dZ4UXLXmWVromitrveh",
  "key23": "56RHBeLqqg5k5QGYYmPcbNbCTURcKMJ2VUdD7Rxp1iNrGscRYRbgG78QzgarUeVPp5NwwgSKcT8xah8jEE5NVP4h",
  "key24": "sGnW7bUo3H97KVqqu8HWxaUWMLRNKjKv92jm981m9qfq83ndrvxeytdjJNKDpducHQttJLQyFYUapW2ApNH7Ltg",
  "key25": "4FFiYHhcd6GDakZC9rzJ8PhXeoiXWseZpPrg8g24gmYYbVa7vXLTH9nve6SbAsC4B3eshvSLZ4WRkPqPEsDUvBzA",
  "key26": "3WpxNhdCWmhfH61r3xTpZqnNAx4GrWBQkDtxW73anhVyLDyG7UnRvc1eHqjtWYifmXiTPGudHTFBuPMjgSgTAimH",
  "key27": "5BXLpaj1Zfu4F2Nv8PSQuFokcJAR4oCRTtYqy9Yaqo5BZ55tfRUxARTnQH2t7LgeYzQzLxLzzNHKHqjodBN8QKxN",
  "key28": "4MydvRYFQsnS5hVxXu6tDguyoHbWCkqHoEiZAv7FFXV6dFho19xZGhgJJWuXMGMUWLGixewAaEVCj32YbwsxwSJH",
  "key29": "WDZnWrf1RCgzARNqxwjpmwyAaLqPRjMkSZJsapKGhdsyCM98i2mb6CRStFqU4PfceHgvuqZYqMmbwgeuopNEoWg",
  "key30": "feEavkVWP4tXBPkCWfpQRjgx8XnsxjJNKGnb7jMrxuAy7G4G16pnjfgVDYFVGBWWKvpXfxVLLgDfG93RniPkJZg",
  "key31": "2MhMBREccYau3i8rXEv1CDryExvFvj9Gor8kz97fpvAfrbdiZU1cPQYYgpvuF3gLBp1v1W8vgdZsyAEy4VvgMiRu",
  "key32": "BMxdmLjtxtUsoXLawFXjmu27dVQ2ikLpfZ2AWsddJgnR1s49zFDpFoaExkiijUjEcWhePeayksGUJTJCHUystqh"
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
