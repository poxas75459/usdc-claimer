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
    "34Bfo14DMMrvhUsFzx4nCVT2fDHbrHyJkWZhCgPvrSkxbAUGGjCBYeVS6fiJWZ3gvMQ9SDe4Fvca2enXTJVRii9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7acyD1pQahGKPnboTDu7Z9kSsR15MbZ6c5Frbsij5TCb7mxgbgvQkvrjMY2ZrQtCSX7LtQqpnDni85S32Fwvd7i",
  "key1": "4bUu3Hw4vpxLmhnKNJrxVepAekJ3JDHG9Q2XigNq5y15wt1zeMTxd15vB1BQtcsw9TzePfG6szZ8PLp7P1vQgTcJ",
  "key2": "5nG1fiqfaCjsQpEobH9uqEuMyncnSFF8FheikiikKTGHKNsCDmtSFhvshLwsNwiMt5aWHQ5CBTwZj92EhJbcUsKs",
  "key3": "62jejfLEkxbUS7GRHfJHYvVEh6NbDYBrnYME8nnde5k82vwmPR1o6Pk6bEVFskTsjSUX7SySdmyadjeHnNaDrv6k",
  "key4": "4tzsJPoeG3ukGxB2e26HH1uAjaEyDwDHzTWugR2FK7CQXK6v42nyQE8MEogevLGKdfzXHRr6samMW781fbnW4Vp3",
  "key5": "4Jf1cnRGJaNnrA8iZbdD15nNRPucgdyYhDEqqojUY5GyGTsQnGK6efS8SvUGQE9hgTyZ56FUi4xZ8qc8DZ8rfMGB",
  "key6": "3jD9bvrgXwNnoqpAsYPEHW4e2efm3GZg3xUXeEhdFuPziMFsgHQi4noGarPyb3KS28byEnjhY6t8WQYfXLM57XpU",
  "key7": "FfV5W65i4CCVHVPPFbVxhd7hfk3FqaJ1XWWMfK4wQQi9XR9i1AzPycza9yWXDWpCTGjkXPedMQkWmFeJ8RqasFX",
  "key8": "KTwz8Je9c3gjTmNZK6j1C4cqnxKu9BpjqE9KVfvJL5sHe8JKKR8MUR5xhpgymzErrxRKbnLi3kYH8oaoqrY57A5",
  "key9": "22ujEzhaaEqZsxy5PYSG16LJVhkgkYcuXDyL7c2vyiZKk5LwECJS2Ff5JpAha4SeGFwBpf3VmUaa8GfhrKfiu9MU",
  "key10": "3jrJqdhtjufrfzf4FUXdqgn55vptKLpWxEnVT7uWTyvFgDthxyiesUXL22BZmo2E6Y4o3MRecGD75dv3WJmDNFz",
  "key11": "2WQGh817cxrNRFDrztcL1M79mXrvgH2P1bLcasXZbQm3t9r5WcBxdErx1WjnEqRwdjfiA22TQ6hjM6vor1dqDgts",
  "key12": "S77NiPiZMAUoGptFyizNPQkMJGBxr5My2CgF9D2dPYYi9DjZvjCVeL2CatKaAzY8uJtfHGP26ajHmpYZxK5GRqr",
  "key13": "zQdpy6wL7BEpNM6oEsddQHD9RdRJrG9AnfdQtsLtt7RrjXJLfkcKVz7naQ3SN1NoLAaD6yJ7ywY56puw7Zy6aNu",
  "key14": "2mnyrXayxm6SUGaMq16ekXHtmex61HxC7f5eTEQW3fVuxJ1GYcTPrp25qNe9JLRxzGYeMmuvzGVeTd7iLFd8M2kB",
  "key15": "28rx2t772Lcm4EyYSyjypckaLkvcGqSGFf1R8YhJYHNhxRRoKeaM645uNaa38hffQZh3K9rW2bER5Ao9dcyLFMdQ",
  "key16": "4JikobdxcyVHdv2oBTLVAiwSRnEb6HNHx79b9LEAP48Y6apBBz2WAKvZDpKDAXpiZrnq3sW8cCrP6Ev7syxHSxMS",
  "key17": "3QLDCF4JS62GqPhck3pEhRWqn3Axu3FMLTzcmDUHTbJiU4R6fL1Z9RueZ1fYWVfDP2wxGRkMGtqa6inxmQNL8Pb1",
  "key18": "3w2jgyWsR2kPESTTG1TnHQ3JxrFajrSxrtVz1jV76JB36QQYUkFVjCwHfBGPxGkDzbKUCxL3NoWQCnMPYXrC228r",
  "key19": "5S3fcModouBxatZ3VXunx3UMogKyk2kxLHq2dizbobvF1FFbWL9kpB3CKimeuS996ty3Fx6UBbdine6L9Qk8vvxW",
  "key20": "pBxyPRFxu2Zv5prw34vSSyT6ikx6LGbYxLpveTmSqgFX9PE9SbPsQtvP2aQFJYZhCbcfVFHHxLFNdtroVS61UMw",
  "key21": "EjA54g85KdCnH4S4jD3r3siWkb2dBb2R1jBgK5qV5SReL8UJwguAGFzL9vJ7dEMK9aZz9N6xPyKSRt42qJq4mid",
  "key22": "2FpyPVzLVdw4jpiwPjvJNxafNGP54muFbwU2BmDsFnv43qb5u3btGLG3SaNyG4Vd4iVXEAXXZZnHXnTHYvAVNDZ7",
  "key23": "tMnTB3mex9qtATv1WPFtEycRAYZtGV43TVxKroCYnb7RSWvb8ysZstCLC4cUHbVTDw22uvmFrudCpSzu7NH5c95",
  "key24": "59ArMWREK45Xq7kxgZcVSG2EWjZFo5CGryX6UgS2yhKMhyFFTzks9dUxk4A3UaNqWsgQpXx4549Ftk7hWkgxCkgL",
  "key25": "4awGKGr8j7EJBGeWmuFTujfYupLQGBqd8Rbkd9mdpq1qfpoqqu6PFpvGnjV6dhp4EsFV314fr8MtquxSYda2YZ6w",
  "key26": "5DpS5QWnzT5LHz97CofcJmyacQqF8rHgKCHm6CwAMrwzFWqJ1scFkdSQJromKD2woUd49wZChmi156R8tXWkfXNP",
  "key27": "2EnbJU4EafhJZbEZUjsgBUcPnYpEqYPsi5yK3kJcEDu5iBQRHpKQSFSq81QGx14ytKCKzZ9DNkczTkkKeZN7Mrm9",
  "key28": "62Lk6eX4v9g3KKHaiV6vknnuu3hTDeTvzCve9c6ndrcEuk7zqdTCrsZLSWWUnWcEbAN3P2dkfdRhxKhDoa3fiYH7",
  "key29": "3u7xJMzXEC7sBXHhMYRTEfBGUUmMTdxEinChaQy1HdTHtziK6oDRJ3V54fEvdwTHmx6a49qE9cpZi3A4frUYuqZ4",
  "key30": "4smBQTV8LAJ9AFZ9xwU8ETFyeq3RvbHq5bgVtCoxKzJx32pxL8TNseXqo5FHibEJX9iedRdPneSrCa1pRwmWSFVs",
  "key31": "4RAzgfjfyfHeTwyZAk22cWYqyPb9NkGq7oKATVohNHo7TV5nUJLEhHXo7ktm2y4BoubGAd6adzHFgqoKAY6LSpzE",
  "key32": "2txhnxPggHJU4uzdTffyYJyDcBVic5RgmkQfgw6RwmcYDjS8zXaqik4FyVV9AU3CxbDWGmAQANedhEmW6WspYAEK",
  "key33": "UuEV2aSqohc1usJFb6FswToevBx5EgAmeZwRBELGHUc3er4c8TW53baioaJ1GavCa9smPEnASPi5RWpPCdi7fzL",
  "key34": "5V16AVTpo2bzMwU7fUmMc8D6VmpVbfgB4GU3w6YWJBRyzAh7YQmd7jZgmwR5uuaTVYvS79U6PjmRMTWuJ5BSXwAJ",
  "key35": "4Xye93KYGsb3X6EgAjdoDxjxNvds5gHezNFpH1gsaC1HuFkbN9YF1TsnDB7vz15UrSBmbNfWyGQZ9jy2xnHvXimw",
  "key36": "WgspQnWWzYDvWSGYvepQfh3YCJhxkrp82Ve6pAJHJPQo14ZjCHgHjwuRTNGj9FRKRiPYV1wner2TdY66AsDsMZP",
  "key37": "4LUxzmfqC9AfRbcQmvxehnCNFwWXaFvAUBEfuUdtPz1dubcMevpdMax6tmMvxyBAjxgSfaEdfjKecg8MZhwr9CaD",
  "key38": "3VYskWpY35P6swtRXUZDmNNq7PCp19arbt4Xu2Y3Y2wNvGjQxxaWdZqj6ELTQvEyH9swUBGH2UeiGKCS4UgHjtuu",
  "key39": "5tAR5BXaMS5DUT1KFDbRzUCroA397q38p8gb23xNj26pH8SNAvMY8yQcpxeJocrysy1vrYdzmPup1MDqajbq5FhR",
  "key40": "2cmtpR7PyGJDqgQEdENmVALxBZtvLZR7vZdmk6Q2aq1sqcXtDbjByMqeQcFeDJYrGJk7RJfNYUFhZdAWDCyQZGyC",
  "key41": "32bNdbpuM49XGeZ5sqAL9nJ5H6ac7fBkStP1bVKxsX2T2348FJ8unM5QuvFSTfv9FwCsifRQ5PKHcPXwxGzKkZ7n",
  "key42": "5JKbyegi2FKmF4FqhtZ9Seufy6MM3p3GKVUCVTobbDnJLMACtz4QibvuzU2EsB7YLuxAdurP8Jib1VrHXwid4g2Q"
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
