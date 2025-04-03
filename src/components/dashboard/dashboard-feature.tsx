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
    "vC3No1xvErk1ZtVdK1Hi9y1o3N5TKEjKPQ6DQL4PURqDhUw3ALsyiPszDEW68uFzDScBD7mpKYMdafQwbwKbYcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5THL2jwFrBP95iCmb7BC71D8JcWdfqqZW5puq6vkaUmtTuAL2SbEMtwxY8s3NdcH2jVtpSi2vkT5vJF6XPA47RB6",
  "key1": "YYs3Rng7ZuqXtgsv1Zry5cpFhnnZaJszruQBEiq9PfZqJDSGLiKRRZEW57DCPM4cMxzga1BpwAnsNxbxWDj1QMk",
  "key2": "58P8dbSJAqvS1oLQbHNk5KQxWNJapSvgN9Tgue3eky6Wgtw59ccMkuwiSGgfHRFvFHXpvxz72KKZmexVg4rB8rZp",
  "key3": "zhgi2ZQY6aQ9LfwR4t61HTySjgqrtJUjw7bvCsmjM2CwkZwnAnZoRyFvV8PXg7WbYrdkRfhP1vcxSnADpKouEfU",
  "key4": "5LvB3Bb68eDPoGT3RxDEU4zJzdeWvd1JNybHpx9KHUbn9LXmoLXTMGkEpX4mzQHycfQ4F6n7NDX7haAp5UGStq6P",
  "key5": "2sCWrYsuGLWyygEEEsgumFUuZ5X6Db5FVN3rAvTUJwCG8aLhhS553C5n74Fu7d9LLvLUr5rpDG7aLDAwqmidupmB",
  "key6": "2ToePUCadVzzLwUS63uvsPKgEUV5X11mDukAAbU82gL1bTWimMbLGZbsfB7kJ9rqDdHAA28TaWgQJM64XDBasMB1",
  "key7": "329sGZok1pSWe18AceQcCmhqJYxLMs9F9K43CGd8sCk1uz4QRfQHc5UTXkwHge4vxLNoDfNUXngWtpARRDSbDvJ2",
  "key8": "4cpDDBtFUSQZEaogSMUoduEiYLEf8D3JmZMMx5oqW1n3zf34MBMKbQDA5D49y3AA6mxEppBZayVNkAKCDZFSwuux",
  "key9": "5GUGxN5VLsnEcDDq9kiu25xWhvrhevDvm5qvWyku5J1MaWygQ23Rd8ZoX1tPEift1FM6GV9ReVhh2sC9yQiRSsst",
  "key10": "RgyPPXb8gfMAB9PBUpm7bvcTrN3VAwyU4rGwtVkxU2xHVyTenJC6vBMuyHc49EQfNB8Z6VbnXUJ6jpWEDewyVmp",
  "key11": "27pZxnHxur6JR7TygymZcBgSt6zEETcEcqpCZSgWC2jyzvJyxxFdzybHownFuhHvoXdpZeJjUTwJirqst5qHGNKk",
  "key12": "ZHS4XKrcZVxsGn5skqN66BBa6vwz3s2m5QvXfmm6DJdKMTArUJHRXspkE8Fhn4uoRiBkq9eFPnFjDDq2BSmegcM",
  "key13": "48Vj3ftM7o5aHKmUHjjVnJFUAAde9WQwPAGzrim6shrCK8DZXG7o2E7himi1g3rkJBNvkcJzQMfieCLkSdmQbqUp",
  "key14": "5D2V4Gk3XAZHARMxDKzSdUc1MXR46Wtxj3cMX66JopmrAnTvL9bhmqbcJgNpVZf4vKrQMws9W9w3NPYqnuRBG8rB",
  "key15": "nAwzeZxA6nGt5AtfGbsCvzk3okMLawUoD6S1YAjKAgdVuXNCEb6w59STAC69SNbWo2tGJ5ZEYfbhBZjjEWZeLk5",
  "key16": "43AbWzFacHE8FEC23vm8L1kSG7wkH7Vqjyvnw6T5EzBBcsDPZbFx9ZDADQYcGhPDncxhpEGw4J83sz34swaCNSo8",
  "key17": "2Sw1wPE4BqDxS11MxVjzhyDZNxJApyVnvE2siFKb6bxdymYRXxrMETvRjQxGTbjRy2YKZfcHyjPScpmg3v6HK8wQ",
  "key18": "28ZCge9aVYUDrz2niNRRukVH1hmJuUDJe6h3ANjPdN63VUu4T68ESvCoeq2Anb4498SCGkmY9G14JTDEE9wPd1Ee",
  "key19": "25gjmNXxWuZSsXqXEhnwiFcMr96xxZBhprDsC6GzMBoLSKLFSwKFtg5Yxnn2vNda7jNo8gkTWXr7x4Q3tLj6H4Ta",
  "key20": "3y5jiSdYaVeQVUAQTsPjrJzzFzMNKBZgNLCVScNHbxGcN7tYPe3EYUeLn3AaCui1KjhvCn9rJ1frCnMjKSGuhnok",
  "key21": "39FCbnjcKRPKi9VEuuD4kR5XZTzy2XXed5uThYRFDEubiEecJnBg6J6JotuDQbjZLHL1r2KxfXQikBEw5nVKHji8",
  "key22": "4dFUTa8BAoq4gmCQutLS2tzTZbtRoxQX3TiqTYJd5dFUgEF5kjR6cmR8qdLRGzywEukqVR1QZXH5CT1vPjnpzXd2",
  "key23": "5AacxoZppuyppFsfsWz3iNHtMqD6pSgXtJs1v7ZU3UyEgbYqK9AB95PCQjGDo5hMtQ4Md3QRrcmPaLcWMBP413ZE",
  "key24": "49p26fz7onvCQyF5TxjPnBh4R6RWHP8VfaCF4djZWhcKPiVR1GBv98Pbow9Mc7KHKybEJpoR22kVDrERxTV9RH1c",
  "key25": "5vywcafYV4pP2RhZkDNxfb4acrSbHfGUDmDRiv6bsCrXKKSsgGEMSjchKVfi9ZiBWTxz5qxT8JzUjpyfK5a2zyr7",
  "key26": "4wsuhtKafzE2ibBVe93DaiKcZy7Z7bD13FBdw2E8PvPgogqeA3HUpFCyCrnzcjdsPkWRZvL51nsEdU5ayRSaPm3z",
  "key27": "muYWDLiXarpAwvXU1AzppjKXc3nYijbptRVnsovGzfTsxjQGQ6uf2MCyHpi5ZEvNCtwCFSZTFr4PNbg2jJGBvi4",
  "key28": "2AbCpJp9mMicEe2H3n6K3AmW61pDytuibcoRutntT9XYru5Ug8v15W3MjkZfDhDhJnAUSVpmZPiUEikSLdXjhEwE",
  "key29": "4P5vwrRaDNh3nQdJ4oCqkPXQ6X4RiE7pbp9dqYTGt2tHXcFDxqTPLqfeRz2dbWistzCdycxwCvorke6JL1KkJByV",
  "key30": "4vY6Nn6AtHLw79MMuCV1NTdbfo1ibsuR3ohS6q21J6rKHN9AhW4bcAt5gk1R2cgHKtxrwPKmiwsMzuXtJk7HuYiB",
  "key31": "5xPeu8ktmWQTCz1X5SUsyqw1rqSCrhyuRWrLZfEs5hTDc3xLqErWTT6HfL6vaW9fexdAreUTSH7BPYKMfRwjrdb3",
  "key32": "3QYxfdiQGwtmKsDSivaqCwbhtUYYi1kh8crs9pzFFXLqqu5PpmsxQtQXP5AmACCX8tjT8P3Rr8c71T5anvfpmiXQ",
  "key33": "4HFXC1bCzU3RTXGTsR6g6nSv1715tLMwtTBxbLFmpRoBFG3rTqdvYv8CieUuYSV4nH2D5ztZyjJvcYTrvFZZ98Yo",
  "key34": "3UGBzWntizj8i1qXpG7zpzH49uFV56HY8simZdgCsRY1hWyRe5vEHjZy6rTfUEZe5BrKPNmb7vbYSXo6eh1mwXdz",
  "key35": "5YjMPya5doj925887pkbXrSPK1BwMynaPvK7yk3ik2rWoZ9hUUcpPMLfpSCtXdfD8v6CfsNXaWuVcfJfN1HRNswC",
  "key36": "2yeFhEt53Uyoq4iTjfP1u32pfz9gLwqsvoMTSxPFGoZm4u9VqDbGLhEPnGDQ5zz1W4vBKmdu7oHo6mvSawUeNvnZ",
  "key37": "2vcN5mEE4H39UpRfcydS8RX7QFkFK9LQxscXRBLQRatmBZ7nekHb6DbxXr9JvX7dHbS1Lp8jb3V6iSrjq1JyTGt6",
  "key38": "5AgKZi8nKfmsnbNWYwDUjC7xWCg718K8sidUry7HMZTMsshLNqEMjCBaiD9PqmsmrUZrWnSA94bkMzA9e8MVZXec"
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
