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
    "5DBrCTR46VTFXNzgta7PUFysw46t89jC4gsfUV7CU2Pap2SJtn6CTBmufkfde59h6pdqgdHCJun331nsKqN4EW1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAcUQcyEbFRfAq7J1DFE1npPvNmrb6ghVzPwKesHFVz2tRQSxPjHCKSrQZnwtQj8FokjmSY4eTq6cV8i1J9K6sG",
  "key1": "3bJbQgDGz4XMR2T1FGo19PyCQ4hE9Cq1eyBotohvXYYQ2QZx96c3LggeLT1ooTwj9p7vUBKzr4L1YH2v63yabZud",
  "key2": "3BjVSXHt4ktDBeXL4FHCJiwCfuhJj6EnJ4ZWMBz8FNLnJ4hx6RdAvDA2UB6jpzKutnPYPbXc3LjJ5C58fdzrmfa9",
  "key3": "EsAhiFy1mj3LZ2AixkKkZkE7AfgnJfUPMktiXqKCVYLTcCNTkqah24hSJ3yYNM7hhB4iHnxVcmCtvhKs6VRqeMM",
  "key4": "2p3dVRhfU9kivDxVNeLHmCdmSj5oYcrr8e7K34KECVPrbmiVPg2bxj6Hudyb31iWcMS5KQpYcNTL9sCoWbpaVjHg",
  "key5": "47yduXxyXvmVoVq8frYXZJEybAGaBD7HVUtgcCVNaorYGMt9xfHULFX7QCEp55X6rMcCbkoAs4HEHfikzcGezp4N",
  "key6": "2J4eEqNJ7XmNST2NP3WaUFaEufTRJTdb3dAWYYqapRJnmNSKJLgvF6Wuz9UhgxqKe6aYrNhcS1RpRSXVwApSYC6p",
  "key7": "3ro26nr2JsFQNNHePc16aCoHA1JYdfmBvd2BgdZoRm5dDQQzd7rkbxLR4pQMMn1t3B7DXmYW35iTyd26MPi3rRzm",
  "key8": "2baCFhn4ueCJvo1GmtiyFhXBD2gtF8qpwRk9VW6Wpag6xX3tigLuHjnXyhzr4yXcyiMQEN482kBBSq5AfoFqnAZH",
  "key9": "2aiNLCjwmic5x4kvWpoqCYvjK73YrPhYPVBW2PyPVxXw6bhf1WMgfG4ZdTTheFu9y3jacgxCaqfiajFX9e5yuzgv",
  "key10": "49DZshiL8exLXeEJiB7AUGnCrS6axxKHi2auquxo4nnGiW8DTQvMum5nT5dtqpeDyPPD5WHghxFkHXNMk8qv4YPd",
  "key11": "2ZZGk9tvhyWnNoaTvsSGT5ZfFTHN1WCqVvjesNzWv8RLwdKVZbEhehwQb4xFtxJTmSoj49mpAe31rwVrfDH2kuSH",
  "key12": "3J19CPGBYzj93fnUgzTLdXoBNtsL3198VtzGjz9CsvZS1RsXfCQByMLuwV317Z9ycJcWs6EqbBn5FKf62tfGvNVr",
  "key13": "5d73YCpad9TmXs86dCYiANg1DVod1dLdtyqGTvAgdZbh8FD7BVY2oSyJrZVzv7FxApWctvND2dg29GuLT2oGRJmT",
  "key14": "3gmScJ926ofVgrwu9uMbaVjN2LctVpbdPqx7nuaWyAY39h2Q1cja9SQ6pmihsB34vdrm8wDb6S8gooL97MgpFv6w",
  "key15": "2qdKxQEpK5Ts1RE3Sp7LFS8iEQbKSwt1ggL4kJBAddBjBEe825F2Xppa9AimfZX1FEZUxT2N1xFkScAn3caePwFx",
  "key16": "3AwQok7S2htBjBGHpZNyhgZE9fuLq84wLS91ywFSMFoetz99MEyaj6rNjT75Vn5shSqmz7vC1HYATbAnkveboDL6",
  "key17": "2cVHxDAHnDruHGwLQmk2GT4NThzmtUDJnzPDYozMK21sEF4vZ8uhr5eLetoFneeQFdnJkUAH8hXAYzMoNShGt6JQ",
  "key18": "2jW8gKFJdNgt9rgT2sy2ZVw1Ry4DvzLpcec7Dh7C2Dtt2UQFuEfMPqb95eoXTWzj58n1N6vEWAswvb7nswcGQ4tv",
  "key19": "5sHPz8k7GUDK943NDYdUY9QxyER7gXBEoWZczUiaMnRsNjWha4vw2uBt2teuXhvdk2sjKpD78SzNwiFPTBLzhcDD",
  "key20": "3A6tS76dDhPib6NA5zDr8mRqDvVVhoyCP4UnzoQ9qbMxTuND7KQHnD2evwA7sdEKHefGJ3jBtVRVmTfpGM5gYr3i",
  "key21": "2LAbcijaoZkZXqNqhdeSisgqqqeC3oknyELVrJaGL4Db8UisafxHoEA1AvytCPTMtJhfcEFam76h4fDhexSgKU92",
  "key22": "5AeeZ7UjZUVAd6zfTkcaGRcZdGboF9kHKZ2SnD79eJfZwhFG8BMFDk1Rk6qk6YmBV91eH8ktv7HvwkFQhaZvvH41",
  "key23": "4p5YUwwm9Rxd77Cfw6sYuG9VNpVvdfsZXwqLie5zrHFZgfsaye41MgECjg2jYLTvvmLQJMHSQQbbWoFUc7LQXfXs",
  "key24": "5gBazwkBLL4S3iAMrapiUDjbwGvmUZtnrLBbXZoKG76TUfxd61BzEKZgB1Mhxd5xESMzE4PhSn8EDUR6XgsyjVuE",
  "key25": "5nnoY3vYqKUp1PXwx8eHx26qRoxeMVndTFALRdjyqS1Y6tKA2R5TSbCWKcyp5j4kd5aW4wCwZ5gUBLQXcVVYNk7U",
  "key26": "5PQbnPuYjwErNeZKsRer7WV6eCzHKvkbhgMp2JVkciAFaCxQxvgGHBMTz7EYJZm57Nf7xLHdydJgHZ9F3tt5vSsh",
  "key27": "5DTRYSpTq4qKCTtpmpcTWFfs6m8gfZpZ6TRRU1ph9QUZQmieBeLDDYuucL8awQjmLvmb7dWTFpuMhrdswufYeVLc",
  "key28": "2zCZ2jJhdCEDdJGsXN6hyrDN2wk5gjZjrHRNVtqbridQQejKZhv8UrZpXHqMUhmsVC7tfdXoX6wU9CGRkrfdkC3Z",
  "key29": "5zJNmqrknq4w4b8pLo3SrKJhdoiEkP3HVMf9F7uB5L5XDcZiNH1PgmfzEjuoPt8mMz4iAFiepi2bjisyYQ7ZjcSW",
  "key30": "5usq1NdRNyerXC9LAd429TSdzoH2zv6zqC1DvLZtLRHjgoJ2on82qBv49GtWcLqbbaZByKu8L4Sir4D1Ldsh83fR",
  "key31": "2Af1mfhaExaT2wuXgGWVoL1UyoFajn9yapjAfHvZPa8GEkXSJ5XXeQ7YttQaazbxJ4PJKXGUsYBtGQA6VAXJTDVp",
  "key32": "52TpdgufWoRbvSepKVza8bkFyXSkB6SAgk4UFuZfuPTEXgr1YLfmm7LEKvLued6Gwb7hKUmjNx6sd7ZeeP6Myqa2",
  "key33": "3NS4u4NAmkRsHEKULuNF3nAUCvNeiwH5qnjht7ig5y4ueaipbWcHM3pM1BjxShcFesWRoBL8FcYypRETgmcEMEeS",
  "key34": "2KQ1P7cs3r1Fd8U25TNGSvH9gwCojjwg1QkcbYZWVhCJA28tkXd7Nuh7y5uef3zCRiQTPbur1JrhoMFhjQ6WVRD4",
  "key35": "nqc4kbzyoHUPKWJQMcDQp6G2QUGxbB7ejAsUXG8TGnxUSgjEvpjj6hjJqHr8TNobYkmNrk8aGZJkATydDXu8DaU",
  "key36": "NZrTXnujTMsbKRbJ8yu2ZuToSHcaiy2rQ916CbC7uHLMutZPK5SdtZ2AV7nZPubsJKYsx3Cf5AZw3vZp3oujcGT",
  "key37": "3vwybs4gYv26fF1u5PazcS9UunkFn2BCTK1fHNL9r3rcMj7XUwZie1KsSRctieszYzP6pN1S1jANjjFjtqDDfbgE",
  "key38": "4EFQpPnxFVfu5u9EWNJ1MWBWoKB1PaMUuYc5X5L6uRjs8NzJH33VuwrQGLYn12cN3sTs14mqpVnXrispLQGSSHSh",
  "key39": "3qf1B7xBJca7RCN9moWq4TkL7A1xuMtruLEwwwpMWMdaJKmXdToFghRLgecmcGkPDEodEFKRCxYYDXK887SDzZqH",
  "key40": "28HHvpJjm1nLcW5yXLrXnZ8V8SYcvbeHyJrTs9FbSbHv2xJcidomVUgz1jwUZ7MDEah61QPiaKQCfSjmX6MXvVG4",
  "key41": "YhtSawVShJ5bgEzoZf5xwtZodMjKByGyFKwjEhEwucPq3xLExVw2Q7ZUTWCPQKGdMdaaL3NJDoUqXfG5gnwPTUR",
  "key42": "2t1UDkt6H2cXW2dwWFHtW3yJ4gsuaFiyzFcz259LHqFrKYaw7fhz3kSZZe8QJeS1r4VxBytwot8S31LAidtAFuWL",
  "key43": "3GUxksUbmGAU6B9PQCugvGjbWDm7uoyg9HZhMoxvyUXzwSnt1bH3jdnK7NZLLSuNxzB3unXJkKAH2Kqp83jg7idJ",
  "key44": "5SWpRQTrCEneLjFXopfPCxvdeeeVZZJiphCjypAMBcAGoHaWigVni3iCebggSjaqTrbboyE2CPeVLWLnuhfyrRwA",
  "key45": "4vpKj6DDDJV3D8yQBtTVe8CkPkTN6YP9peXN3UkbTdp9obxqrLvaxfvqDyqwhEU7C1hobzBREy5VofbVnpAyv8xV"
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
