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
    "qaLXKeY4bfqCGtJXfndtBTDKPnEpTBVwSCekg69XbxphcwmsuFLetEaKQdCuif1tVcw2s1ncatFV16YEFfi7tBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XjFpYdxUVtLUFszpEw2Rb5UqqugSKJ7bc3hvUrNsoiB6Yisr6uYKuvvSVJYWVJy5kNbNoannvrPUsWQs96GFJXv",
  "key1": "T6AJhXH42eZ9qLBN9bAQCD9xgh1kJKMDxpTtmjC2o25XfJmm4cB98od6CEwUtzg4hpcDu7rzUW9dvjgP8aSgNqT",
  "key2": "3uaDKh5obgv62dcCd9Pn7ngF2uMJJhVjNM2UrBnq7fnSRAFD9scR5EE8c9CccsyLdpTKFwcH1ZaSehxoKfxDDfe9",
  "key3": "5THf5RMRcqkU5kQMb3aNtyTQoXrT8JY2mxJA3cWhswvyFHdNLLKP8q9XgWC3cMyoGgUaKt3FwijNX88GG2QFFKK8",
  "key4": "39rrwMNzMNNLyfesWaCmKNExPUsJhsmWXNbifwJPN2qEq4HWtH4GuqQzkBRXDVmZuF6L6omdiUANeiRgXUzo98Vv",
  "key5": "3FWSPwySimecGexsMrn1exmiwzPwrsUqMfucJU6ZGaHg6zVjtSi9toBwtLFUKnfQeAgMMtc9kUEfMJTpxsWxG122",
  "key6": "2e6WVsBcUfhCjUpBSWHbzvs8dVq3TwtyXuYEVQzwURB17TSLFFsoLQPvmiadkHmzQ5mdxX6Vc4ufiRAGw8FmvthP",
  "key7": "35jf8T1nEbHgBaUjYmWbERHCeakucQC3v3NygnDV7KYZKABToZh4hKyDqU4m2XpGJuCVft9FkFYiV4cAi9huk9iq",
  "key8": "ZeRnRWEQ5rVByrzVn1vQxCrmxHSJtCvbwLS64GwUNgRHAoGk68bwCS73SA7QBT1Ljm1edjG2KF2kg1oFJnNeU4X",
  "key9": "2YfggXL7Ltpm9xshWvcZdfPgS1X4TGT49UMru277aM7YJpGCQhZwVHdYkRgEk63eCAPhMUo9MiQ1u3xKqPkp6LDh",
  "key10": "5WtVaHUt8wb71wNVrKH8ALT8EaKGAp6CGme8BGF3WcbYcUuDUYq5KzXaTrC48ka5Fr6tURYGwTek8sVNCF7JcAMZ",
  "key11": "21KhDSStPnqyT7daZu5rDpTaBPMnad5M33HjUVGRfqMosJWYajgo6XcU5u1Yd12S6uQhP89jxDNq6zQCUB59YMj8",
  "key12": "5ov8rcfyferNbfynaNriWERz9gE22H2hQwUNb7Ms4Z72qS6uyDxnn7Ac1ywbD67d5pZrrapt6eUFzYuZ1KS9MNvE",
  "key13": "3sdYWA7d9qvYCq1r9pXTFa7CwqHtU39FuF56ydTpvVqvE7BMgpXhYVDiA9U8W7SdzVFzz9enLVkz3JrnFuE9xWJ3",
  "key14": "2Y8XFB6MY8CMNaWZr7cicULSLkwHNhA96pEzSbHuHdNZz6S6q9Z8kLzoSegtowpo3SMrdr3CmymerbFxmFbiGuHH",
  "key15": "5dBD7qwN3gZSZbHNbvdWDsQSgyMKWRqa436WqeyQ66DMb7StkRhriJN4cDdBbzNRJfnsboL7BMyaWEEyfmFm91eG",
  "key16": "4jmeijPav8uJHHM8oyVy8JkMNYa6T8PswASwnMSCnpMJmiZ9RZLvMZwa5VpMR4hCRXwek4NJkBkr3EsVSmGTkRLg",
  "key17": "5PHSqLCL6ZbhwVqPp2AYkAcJ8PtgvXVXghUA2aKyATRu7FR1vMkHkcfJReLRVFvmjsVVoNFj8VQss6E1PyqyERB",
  "key18": "5jbnc3P8ebYh1w6WqKZWpMT4Q5h13SDyktVmqRWingXiMgp1U2SjXDnfoMTJtZSapEL7mS6JpnyPWS5DQ2Zecf7d",
  "key19": "j41KRL3ChooJFURzym3NQXpRu7AoF5XwX9unFEv89CSC9b2Pb444FZLLdwWJEaiDdZtj6CvsoY7HrqNAeiN3WPw",
  "key20": "2mcDSAyZxRLFTk1iYUHFMHcY8oc3pUTiB77Y8aqim27NH4gbQCwP5LwNFKzLE7zH33Shydv2jVPr2HmNMv93MoLk",
  "key21": "5N6cT36PXwbpKhNJkLLmsJyE3FmN7kST6hpz8Nw8okRZ6nWS8bWJNNCKh9KMRMgFKFoMD3VGRjw3jjKfn3SU8o79",
  "key22": "4j3ct4AhqGxwqJeiKcJrbTLk3WAM6dE5G6Hi8HZgUHfuHGWUAao2vKenbQgLW8vhVWUSQSrC2gsZktFZDuJCKgNT",
  "key23": "2pNUAbDbx6gPhRyUid7HpzRZi6gs8CGDwR8YeMBs373jaoTBwzBQAcZM2n5RD9saBt4c8SCseJ2jph1oaYq8jwms",
  "key24": "GGcdjTphzbcYKaqeLJtLHtumSSwGZLQk9bLp8Mbeo6rjEJAVqWWL3bEKSzi2zS2HMXUiTWNMnxAAdWXL6sZXPfE"
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
