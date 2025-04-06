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
    "2FDDxfv77P4WZM7R43Mfix18TiWKUezhrgW2roE6xJ5FjwxSQTnZeDwPgWvuDNGzSiZu8jKMHw4PePiVkQtzHfsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yhT88d6iETdukJ138xq1bYmYAwNFAJjWEDBjXX6dnD8TEGpK1cPJbiLUpUTjnTh7jcmRuhyaK22AQbvxQiPa3XW",
  "key1": "NEfpyf31Fmyge3cLGDSvch3BVe7uUzXbf8mEhXjRxWnGut9PGydoRgaoeaRr2aey3hhNkAriTN4TF4m5a36CfvV",
  "key2": "zbmqkudRR3gKnU4wRax4f87CMyPpLswQUBrLiEcS3sPGteafkB29jV8Qng2iQuboviWAJMuT1Kgog8aCsLatY5D",
  "key3": "5nqg86fmR2DAuoaVYaP14WT4QAdhGgbNxWgwfDjiGmsgsaSJj8PyavsPnHqVnm5ivtyWtomZ8CjnnqhhAT3R9jp2",
  "key4": "5tiSWqHPWEH4JVg9qJcefcq5JPzRsDnEXnScSML7oh4ggPfNx45QXQMFP9REVYxh2MyPnCcmZ2jvYq2fdVx3ANCJ",
  "key5": "4hhzCYXp4zJHG58h3am7kAPwNzY5iamA4652hJbK3vrJJhBzYnKtAJT9fTpvZxGL8qTCynxEbDMi6L1JjEQ2L6Bx",
  "key6": "5o8JxxmYdKQ2cB1XrqYLdZ5bY8nR7n9NHbQYkebLGmSorMYbS1fxWNCcr9XovBCnJFC2NYMBrTDQ2vdGRtCXbJrE",
  "key7": "5johfXQggrkwBrH1Dpr1yVcFqx1Cmz115VoH4tUwUNHHTknu4gDtUjEgap1QNprcj7qyE1WVpMXVAJQJe8vtRBcj",
  "key8": "28Hy7zeH7rhCMvdFPGkdhcrv9nebNRY5X4zUZ3g5vuCRhJuFnPniZJPTz5PMcBa8TZvB3WpxdxxDsS3CtucNsGBg",
  "key9": "5JbDbUEfYDtLsWaZ5B3iUsrRh4FRBS4sswA3mF9qdgpKEKWPiX8SZh93gTMhiZ5dsREKVuu23nujw7T3jmuMuNy6",
  "key10": "2neXPVpUfBVc66CgUykAPuK8J4x4KdagWcAs4MLK12ppDp3hB5j9n2SFSVa7BNZ5MxEQHoa1sH1jFD9gAi4aewF8",
  "key11": "unsnqV6QtztEcx1xtsybbC789GBCKSvYkUfFPS9AjyUkWwatqu6dNLXqjF414BsMDg2ty59Co76HQrjKqx8SePz",
  "key12": "2TxX731G7HQ4S77P8PSqhvCPcrCCvRRY1WmYojS4p2p2t1APTu6k1gpZWAkuJLEoh89S3Zw7DAAjXhaJxeyW5xG5",
  "key13": "2k9vmB9CEHhh1j7enErdkaGxhzG6rLcbpdiHGyWFwNMv65ZyYmL7xRhXwp3h6nkkvKmRBrPqia4vt9wQDkwZRPnD",
  "key14": "5yr8pT4g1cizWuJCSkuy6M6M9wxYUsibT2xHFCdrAJ6V9SAihzWmy5mzF4T1g9oxgXjHqGkoB8mUJH669rUwxgjE",
  "key15": "4KhBd3YykYgBPqWAK4yYNNFKekBPJBdFZnoLHpjhNCc99oq8DVkVoyGbgwLxEdyzb6WrgTZcJ3RQjsqjSiYV1JTe",
  "key16": "64FWmfSkEL5ixFRy5nt6WVC2RAGJXtZvxTPwFNzPb9cZ9jH4KmojYoi9A74gmeDg3afmbLXtqLyVmvreNwo44sRN",
  "key17": "4itLB6Egttk5BdiEKTv9mw4Xpo4hiXWwtn87523Mh27xdXxSutAF4PkbHcxbxdqQAju8W7dzeCJeocxBpuf7K6UK",
  "key18": "bEyBrpAbMGPa9HvdxNuaYV7r6wiZdE6Pio1wZQikMNWSEFyh1LuMq2vNkJ7browmapUetU73aFaU6Qok89E91cN",
  "key19": "5gXVCANVjvJVzfxBb5NP6QVj4EeMwPSeoXNzdvLo9t2gQGMTdQ82dfp1dZyNAzFds3kYo5nTyS1yufQWTJM1akgy",
  "key20": "vgMNvUEfjsYE5gFWLQ8sKEQCrhddwyQqPaBT621EeeA2AAZxRZT4PJAYW5qMRVewDe1xtuJ5wzJXMm3rRydo82X",
  "key21": "38Kv8s3RkeJwetLLwBx9CZjgwYR1fPdgoGQQrsPejUA5mMTjFu2NmJtTSfq2CAgriNcEZkhVPFHgMd7yCvbnzAX7",
  "key22": "3WDG3Bj6ijwrmqsKJPXib9QJkzVxkyfcR5ChLqA5WE3Skv92YiGKVzEsrcmwyB7CEkHGPL99vFke8FF3nc2RMtLc",
  "key23": "3VpPywodveLZeQjfPrzdxrZGyUW8fpwmQGCoMgJzzJwtYGt1KFR3KK1JN5yjF6pWcABmukv1QTNEkCeaQsAYirmp",
  "key24": "4SBhXGS5SLsAzgRSzATFCQGButiYKUZYFJgwty9ZSFpeeRkSccZhBxC2Z5dZs8hgg9xHJ9Khp7CniYBcKri64HCP",
  "key25": "KzZLk1g7U7PbtKMqzZDLmsZ9XFMJrUfy7JJC3gLPxETW46SPkdpLGesuQKBdZhfHP9nHemrkJ6cbhgd3ynR2d95",
  "key26": "63W5B4a73G6bYbN4qpnGiLPdBRLMKRbmQxAyxeVZ1eKkRATi11YyKZbscJzveZztbDBsa5VbnSRNzC2p4k7g2skH",
  "key27": "Q5vmrYr1oEaoy18Tnq5sMQJf8tUAspfpemdzHU8BuFQg5L3FGXwCWfjTxsom5LjsDJxwqakgyPFsZGMUh6Bwt4r",
  "key28": "5fKBsjEeaUPFHJKnoe4fuakbUiPwMqFnc8NEZ1TwTUooPJrbr4fgAwCx8pB2Cn7kLzzqKYjaf2wtbk16gmKzh4qz",
  "key29": "Z66YsyV6VDCXpGi4n3zC595g1vSjdkXigLMQNNtEMHVFTN82xNoM7KHVBG2DXa3rDtsskoUw8jQJrxxCRvQy8We",
  "key30": "taxPFyQMnPSKtzx3jUoNDvBYo3QLxMmq7Bq7hcrtpzFB77sWRydDTEbYsqKTJpR4LLDEYYyiE8d4Kev1vccp76E",
  "key31": "5ZmY1qm5GvtNfcezx6ePrBuRpjAvbYFHgrFE2AT72RZxNyWoQRiyyQPJEQzWM5jM11TsWc83eyb2AbFRB9Pbs7SX",
  "key32": "2rzxDiuESoqSWw7eGJ7cSPxBtZfe8rTjx69RAK3BTHoSRmyyhjgBXt5Xw593QCtectpe9aiEhMYe6cGWB46w9atV"
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
