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
    "2MzaMVPpDEB5PaGv66YvD2uSDLLjrhhJHfpdQq9RM4npE85LhDvH4xqZ4g8KK5TNHmYQFnXPh1NQpe1xpscTYjKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYvZsUrcJY826D79fUhEwQZoQN7GtuuwcBKmTwPgd9UbmYmAq3WPxUFE1bxFVqtAQYVF4H92GF2nGpzpS9UKUoZ",
  "key1": "5NXMfFcP8NmLyzRTCN2QBVrNdm2x6AHmUTNh8nSVNmuGnGeyAQQEkWo8Z3USSAu27N8MYA24PhEBtxSXSK8gPF7r",
  "key2": "367nKuTUsZTL6o7bDwbb65SPzzQu3hewezX6JUzuyUBemqZtCrschH7ZXt6yWAKK6vcnaJ9WF3bLLoEK82wxKRni",
  "key3": "3Qn2f2oFvKDTYFJyMtdyP3e7LEq7Wii1r8H6hufUt45YsUcmAeivV8xQ7GaXRMJYP5mZJjWLoXX7ynnpd8hg9Zdc",
  "key4": "5DVoTfdV5BMVg3rHt5fJ9hfnqV3SSiidRKf4vMWzbPu4bZHJa3PKND2haYS6QtXy79d7pDkHqbkLzhoKteV3XZfC",
  "key5": "61bCXJjFJ49RNd1fMqKjrDoamjgn1hjfNcCdmpudNYmzGa2xn3A8ggGFXyxJTYwvfN6N1sPFCTuiQ9ejjxWHaRqn",
  "key6": "4m8py5yd1eCEZJhEqfk1ETpP9SZ3XSmqCe1RvNRJiLXtxTLyeFf9H6wWFqjon8FRxmVp9c6Vs8bF46ijHVkkFMh4",
  "key7": "4obY2QnGYVegdUxVgkVmNwvVgBexHANbAMFZT2241yvz9D5PnjyoXi8TPbQxTjJwb8ueptueV7cbpUqXGm2HtocA",
  "key8": "648xV48MZQjiPjV4XWotHMwUjYgv8FYTW8eezc6agbEqUjuAQEesKc9mLzRvk9jjqw2Wsib91J9Fj4e6zTf4hGjL",
  "key9": "4oetFhc454Vm5aMBR93xTiJvESjGDDMFnzuypzt5C6ZdYHcnLAMpxqqP6Z4w31prXq5BBJedcz3HAPzvGGsvhnKF",
  "key10": "39B8Q6mzoJwyU2aktGJHWeNwFKiTg5CCQ7QQGbQBaApVBZJEPG39cyHFa7dbpMoBKLBPm8h3uzXMMPtzwsL3opu",
  "key11": "3TfNyXceQB5eXbwuKZDxP2e8djB3V1kHqekqpVtChUvALuvA4FwaBQXQwuteikZSvomaEvfp8NDUAwQdAauJpHhU",
  "key12": "4n24Mo7QqZgM5RTkq8FYWX9UumtNRg8tFc27w7hQ8nYjzgNji5vViDqh7tCT5ZwoTcGWKYfEBMiwxg3Rq52dMpKf",
  "key13": "5NAwb8fi13cyBdHsPK8CvPk1twpUGoz9qZBpo8UQwwQFQFLAAKYNdrgevwaK1EE8w4K4BvHhZv4HUTWjd5PtzDK8",
  "key14": "4KYfrFMGt9e9apoagdG3uw9Zp3wcWnMXrDKUHpNjgQokAUfkMhDkwBBtuZgWPFAtDkrcEnkwa8Ghf4onN93E2bAu",
  "key15": "4cwQthGF17ViCwGLXm5BeHRye9zdgTeSM4y8f2y5UDP4mQTmSgWhYsgNXCtyRaVy6oSNLzb5393wnA8sC27MW7aZ",
  "key16": "fteYek3ok1oDGUbJAAAvtQ6MeRiN3QRK5NVh7Fj1d2y856AZ6Ne7U9eZ4K1eQNGnZKkZUtCCJkwyPyUYJdKpfnV",
  "key17": "5ruV5vZ1GomAEf9ggYn7mByYi3aU6RgnrbGefvBySpEDyqD2xmY4Ar3EZDCv2M77LGCkjQkcy55mREqDWNCSViYb",
  "key18": "33wNTCStm7N5HgYojA9sB1o29DsJqt4Q8bLcRoiUoCejMDh54a6PQrk6Wb3HX68BcFUxpi3tSb4j4DdCBovtRDGJ",
  "key19": "2EMeYV19F8q3SiRsfWpDSm2tKriHRf2RqKCuPHig5c7s7YSvaUbfKDvX51r92Kv2kWWCFwHr62gjjBwYKbqaUEmD",
  "key20": "3svT4b44F8PNpf5uTb4D6SV8UCRpv8F3ZEMEN17sR1nsR8gYyHeGazCQukXVmXbo3i1ydsDigc667LQcpL6cseaj",
  "key21": "4zc8GNjw7rNitDWbueHUZfqNpu8jaECPcss3n6GyHf8UvVJS8nQPerqG2hqYx2vu6e72ozix7eH2dKLiH1XFSXKj",
  "key22": "5K9wWwYVBRpmKJJDaDgTcqvMkfrLbpRU2GyGjhrBqqjRa7pcJwsv6RynjHXzYU7pfuuin2zagwZ58CEYsZAHvtXQ",
  "key23": "2aKChwk2Cnm4Ksy51GpFjrhYhNzsyHxNpkc8UYfcePBsvyuWHK4cYwy5B7LDiZhNc8JMGxkUNhoNDAbAtgoCo4am",
  "key24": "3ef57uxvfKh7wdKzs9TtxsZgoE1K7riVDvtkUXobyUfy8KSPsn7MdNgDSjDsJVXyKU9chts1ZJS4aRvJBgsueHEy",
  "key25": "4Cgua2qGaJoyzB2pHZcsmryjJYCeWspPLa8fWXr6daYPg9Y2p564H9kn9mtjyCGBbBuhD8smUbTuGXvqYvvm6iDk",
  "key26": "46TXdS6VryY2MD2VH44wKW7GQUenDjT4Z335fhe3PGcSjA2WF4zSDFartT6i6zvhURUToPnohZYwiioJjfFup4kk",
  "key27": "e685M5sMzUHm3VnrmFW8y1gZrnyo2By3mTAEVdMQ335RVqr4mbhkVHHdjaxuQ2QoANY47qUWcATpdk89e3uxE76",
  "key28": "4vneE3PXQ8JHv2irz6VnAHTkveabRiyT7PuacVX9yJYs5MZx4H3rn7w2o624j1j5Qkn1GkfVnjJFJxU1EfSRtBTA",
  "key29": "xDAijXWJc936uddqTcquHep22AgezLYrSCHttSqiG5hTni3xA9E4D3aQSokWwbhQndnAgnx3c9N1xa6UoTF1cuX"
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
