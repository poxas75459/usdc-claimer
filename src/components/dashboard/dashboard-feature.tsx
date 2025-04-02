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
    "5aDBNt6MmBbN84XznhZ7kjkA2dj6UWoe2eZaXLdhe5FeNgAhNuK2xX92AXDAjRP3Ni8ptNCB2iTJrLm5aSxpYFz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ug1MEqMqvApH93zVjqNFrG3pQ7wdGhaZnCfzrzqT8gy7sChceVBwe9cVDoWvKGfE1H2S3kmGwGjAMdZzni3q4U4",
  "key1": "6PiPmmiYrrvxpqFSPa7T3HTeEq9jhJDjLGQJFa2N4ugi9NNuwfUUeWNaRxzvxUpuLkWsEfwNF8rXpqcNa55DxZP",
  "key2": "mqoEpo3hWDbnC9cnSTa1bRGArxbNweBCUnv3pBv3yEM8PpodLshJtPz97EE11T2oR57BZPVZdFq4MhLeBMRBZnJ",
  "key3": "4Cd1gtftKDd49TetAjqcjYGj1N76t24VKADBiLj5NtgVVchDLtXyQvt1LtKZAfN5rF3PUPmS6CSDgGwGW6ekscpj",
  "key4": "4jDGwweuj1Ju5NU5xA47zFWE1GNvaH67earetsMajvPcG71ZvcgmC89SQNx1WaQ8jn2SjvrqSn3nDLfR9ajonNkH",
  "key5": "Tim38gxsBah5wEuLAgryBAzxkVq3hvRQSoGeUj38dJ2JkDuaAKwUsemYUbr6bizMmT9z9MzkLiL1Cuf5N1dhGgK",
  "key6": "3sHzVw3VZASwFFHGFMPibzbgugyWH3nA8zqNWuYQZfJDgXpDv6tW7s8GkgJ1LBMqxvSRRrdfpKBUqhFgp3ezkDES",
  "key7": "2NkPr7nVE67syUEq7omZLEwFcqewNaaeNdhwXfv46a2neGV1wEyf1CzZcZWPsaF34fRtg6B2xdzxvamFNLhQVP8x",
  "key8": "x8jLEzu5PwzNRV2gQbBR264kXfX75M2x9VUrKjKURYhmfocBVR9pEE9tNmhnwuYPD6Lvc6aAVZnvNLWa2T4hoom",
  "key9": "bqACbVAWnQGtj8DJyeFGHz5yKzVrHmFpQ2RGiezzHfaUdyEzyK8trJVDngsr3bRCdnpbZPrmQn8ShJfMBLzWmk3",
  "key10": "2TqVKcbhDKL5WgZkUnV8cjpVcrExQLwzikwyqccVJUXpSZ3ZN84EXc9pq5b6yyTKJBE8Wx5kAnp6rpPME9R7dq9G",
  "key11": "4ktbSbzLx5rLRaPNd3YVqZ74pjfbwMCS6TciBZuDTe4Qgps4HX95poyTjPoFXN4Atag9q1VyNxTxmpg2pN6cP9kh",
  "key12": "4c2urVWf9THqo922NSGxzFPQ6McHpP3kUGXpd23emaZieBSYmjQLuXMDsearxcmqcFGUz4X9xbv8GQp9xJwkfjWv",
  "key13": "4iLnzA538R5Kf4vCe9zBLEFQ4gBvMwYeFFbpWUtSwERQhHFVrvWWPvK8A9kGZZfkb3aywS48mnMjCzypJhj8j1nT",
  "key14": "4owpZeXkpMts1yHxE7pMBUen9SnREJDPmN1KdLZ67nBZWYzHKqfvYpeJMn2LDzVJi6FaowHq3SMhu7SnGYpzCHgp",
  "key15": "4JV3vc4BkHoBCMiy1Wg7zAYpDkN98QjLUmD7aAcFF7hsHoqwsTzSjzd6x6psv6QmyT4CNh9sfjh6rAoesuxuz8ix",
  "key16": "2pV1dFW8KJbc5M2qa5hdSMCQmiR9i5oJnXSVT6LtzyDj51LQoayzNUVekm6jEdeaVXs9NqanQv79Nf5qZm4rHnTf",
  "key17": "qsNaAnryeScvkVWqRRzQ1dnXBU9J8FzANTyGmNETyt1qWrUVYzFejK14jvLJAPUgpEKTZQR28t5nEpSCHV9eajp",
  "key18": "2oJXUpujVcMcB5nQTXWDPaU4gP4N4rU6fX82iyPGj4LDXbsAr9zqRmtd5gNdDLXbZvJGWteNQnjygs32a6HJ8evt",
  "key19": "5i3LHj7EgH8nevbXjUmxCF34CPm2Nin9r2Y8f5YVMkHyNqm3tqAXTFWTqKjEUWM9nHk4iTApR6z54Kn7BpJhJJJ6",
  "key20": "2d3bo8XVZ29JzVsKWGHYiD1VT1ga4U37RvgojTNph5f3pQSLj5aWwP9ovxxQ4FLLznZwA22PBkJAC8UQaRw2sUTN",
  "key21": "fURYJzfdN5sKzeM8oRH6bK6NHKVTcUpLtK52sZjxQoWKxj69xHe78f2Nc6iHN5JEptxhx4Z4mut11HTAZDmhogJ",
  "key22": "2mxda4VgnAFWsJD2sqNeP9XsAzR1nxiYJc9isYmsKB6KZyw4K7ZrbKpUdYSr4rSneWkP9YNqjZwvGrkzApJA597o",
  "key23": "4QVxVphQsuNdckeCuX6XiPvLC5QpFhF3uk8CMQroPLcWNWkieV8jMiWGAjwHfbe3Liq2QNZG2kLXpNBiyEZyc9ii",
  "key24": "3BVZKf8r6HuXPasMUq9vgLw2gyKBCHgcVPxDpV8iYw3PoWoUtLG7MCibD5A9UJZZiqy7my8tn4nKKcbwaWpwe9w1",
  "key25": "roekfD1Jyb4kqhZHzYvg3hJimPsytCb7sqTumv2i5KbKNhjcWd641XaXnfYQYYUMHDv1ANFfLyvmxqNaMukWWmB",
  "key26": "4Ey9CH8PA9Rd4L4eyYg3PpJHmBTEVtnZhEUYQVssGGGpMSH5msS7SbZvASZNTELfgw1Rf8MidtFNdnHnrVVVEkN",
  "key27": "3zsF8rKXzJ6vktB9osjZWjgSC3JfCCQXNTR72113VzyR1H8jhdy8coKSjLgEhi6ZEG4wk3viBVTeSbcqJHeWjtEE",
  "key28": "3n3GBdRVNUfufPPqDsCxEyV9TbjfEGUS7gRQbvKuXPFUxcQam8ACFEiQfTEnDgCUMiyrHa8uBHB3mZCrvM5mE45D",
  "key29": "5Bw1hGRcfp7U4hdZtiRz6zmffCquXB86G4D1y1LGkDs7o4SjErWYRa219H6abDJRsuizS3QX5fVBXX5c6atdWwCT",
  "key30": "3YfhdsrqrLvBegtmTdzom5gWfejPKwx31kX2HiBs6bdPJhQk7cNfFAKaGR6du72aLCMsKMsRd6kkNYfs5b3Tjcku",
  "key31": "3Wcgc2KdkBkPocmq1LnsVEjiyNwdKejTiBPvDuWSwosC2BP8kwygcBi43eiCZpNL6JiGpYdnWA3ju8D5SPkiFKe",
  "key32": "58YuyvzbAgbbLxvX4kYBZy54VK2iEd2uoEAwNdT7efFHBYodJYrvgZ9UJaxfrhj6eSXzK7sFfrvHFhaw6KsgJriZ",
  "key33": "2Na8uroMcuPyiZbs8Fw6ne7jjBLUbQSpkMpP8cqWdgvcBRJznrDsUFTR5cY798XXbSSxwv7UNEudNJR4SqF2aEBp",
  "key34": "25mGRftrSKDCui6qqhvhdSC3fnwr3By3JNBRdRFPp67dXc799JNxWKPARR6oJVQH29kfUNZGAMgcQUHbituyPkWY"
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
