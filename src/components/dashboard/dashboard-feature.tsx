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
    "34ksLhg2z82FezVZRCRnf2iutLwraMaKHsgGz6GT1A7q1Dspg7o8Z83FNtFyopKkSUy7E81ukeeHWCEMKxaH4Bfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fNoGLQpJ1SYPhFnVWiKCitEd6EDsE4Va9Qjvu99HyZY2WoW5JktmjsTM9RUPxS6CBXrPDgNYmzEv2rijCKQV45o",
  "key1": "2G5VUArgRZDiTqp9nuRwY7PkBcYLGh77b9ZcDdAssN9soe9dyjWmutesk1cGLkBN5Y8TeLwCZx4i2rbH6GMuthRr",
  "key2": "5eBKdXP3b8MSNkTwouXvWCDvmUDviWaP7RbtackXsPdxBxkwoWP3VE63qfbkVL8NnQLycsMnKysWJrn9Beh1HZ3E",
  "key3": "3sj1vkxo6184fe78up3S5fkx94sMgozKWndQqMS44bmftuckqNpHt8ToTAuG1Cqz1PAUivEZtukrMCyw1Jg6PyXo",
  "key4": "2AkCAPZ97bKS5Yo35DvA7XHrNuZPtRxjt2U6U4R94eLwazMGT61efELX7PKFjiiPNWCVh2LxdjDd8C5AFecf7AYd",
  "key5": "4WfKWKdu6Q9aC88iR2jfLbs3Zuxw67frw4aqjxg3JoQJCkdBFQWud7oDMbqXptvA5FbJRQZzNTKQjxoFn35c3zK3",
  "key6": "4EmsQqywhwooDvZFwnC6GDhzGRrdxZj5A5abiK8u8Z2eVHacGki2pjAHfo5NPALGRfT3R5gvfSRpGofyZnjZ6iz3",
  "key7": "3eHN658ZiwgFfxkidPnPJJNtVM1nbEB6gUmj8kHFQtxnwj7FVryS7iAcTpAGS9tvFJP7aeZSR9A9xqjYXvysvjg6",
  "key8": "5DMoRPfYgxFp34uRGdaezy9tAp7Q77K3KwemowC6yk6ZbWpnLK6fbFgFPyowz9MPWhZHpBoBQ6XshDEP3EYuG9FG",
  "key9": "5cJ4aahtdJzXh5aJJNoPm2nffyHcdnjdE5PrEZukKJyqkWuHbN5RKfb1dibB57s6DD87VEZ1h3j3UYWwDYhASGDp",
  "key10": "2Nykhm2spZMo2322y9ppddi8yhfYcvHLqUDK7g7c8N1rEDzwzhKxEThai3XVortuPvAjRH7NNcpsmoZxrohq7yQ9",
  "key11": "2dKqxbyP4zkGNZPKcvG7ktEbwbjeQSi6xXHMU2SiJ2SVJo7o4PEqd3HGWJPy18k58pUBQMuft2816VKZKRybg9TW",
  "key12": "49cvHWRzGtX9HqtVrSGv48kDTqt3ZV5tBPtSekjN9VYfrrUVXZh8dXZ6qEpoRwtbdwcp1JBx3iHTMCPrGMMkExe2",
  "key13": "4ETDGmGvLKrFzqXxFPz3iV2xt65e8Gmbn6VhnafwGwgL4C2w4fszgSed5QaaEjpwEWCQor2NZ13tv8To1siXg9g2",
  "key14": "QVpsjfHYks4u6Uogq54P8NWwrpevG79KEUwKLSMb1KBp8a6gXSskRm1oY5Wg9DvFe2Lt6nxemaooQuet5UaP19N",
  "key15": "2sBAAbUDxxQLs2bWxjmkE6o53wbGBBYSrqK7Y7Ek5jLYpuYkomghPpk1EPGge48iLGDSTH86NLrtKTtkffSFoYgz",
  "key16": "61xvJtig7hJr6Tyar83pjTTJgKJUbaffuksuTLM7fFMWRaY6Z5L73rsAHbDSadZs27M6X4NBnLM8kx2QuowUFTbF",
  "key17": "4uiuNhnnTBVMjsJRhitCyptfDpDbt3wSgqVHa8A8DRqYVvTb2VNfQ71EYR9HKqh9wDaF4B1oDZUraNh7oPhVV41J",
  "key18": "3TDhAgYH5tJgkxpANqnm7N5FrxD5HqJ5vgGvXMdUjh9cPt6AigxAWhMmGQFRN5eYbioqi3stEVdF77n9RJggziUu",
  "key19": "2kTE1huFBEZysc7gE9RGjwSzSjZLeBuVgMsAcHkzwpEjfdgZgMwx7n7VXzsgC4UsDfpeGKED6G6t9sHq1kUN9Mp1",
  "key20": "pjZCFQaekkMDzM1Yk7zhGq2ykqkee4eUjTUNrnGZjuJUmG2pBX7qdhAFXSh4QqCtxUoDkautv69HvVy4igARfzj",
  "key21": "ctyRNEv77n4nZhiyhU5RZmWDD4g7Eow45puwgYXX9fbhqpJsXQ63SEx9Ys26AgjeVvpBRxUCHCWSWj5TTzVmeNK",
  "key22": "3xEGX1kCkwqi6bvMBLWtRod2iZeQxoBbzfa1VjboGTEJdxtSAhV6RYYxQ1zhVDSwvnLXLX4AXVB6HiDhwe9hqRTq",
  "key23": "47R5sGRkVbjGBi8fyBsVGZbAK86udzhu4v57h5UXdLx6wL1H3W9B6zFKUVxymj3VssHRUmJFancTRZm4p9HcFACi",
  "key24": "4Cu7nXGk8b2Ffdak5Gm9JTMJczSNrqEHu8GmWBrUh5BpSsRzwej6oTTmasfidh6bpvE95rvxgXFTdCdNc3k2fhKm",
  "key25": "38QSmsVRbeGRv5gQp46XF3e1guta9a3uxVhnwQbroTjFxS5PrL1zg6y8NScH4VgWPTRunEFRwGknxCFfktaWCvHX",
  "key26": "5myyh1isuBh8vTv2jyfNNhcZCRDfqQPqwQPQB9jZFSbum6vozPbJz1oB9FL6SBRLCe5s1iNbW4rhGhJgXM1SxZTJ",
  "key27": "4awWERmStmobudpt2rpoKE9c2oTwwDDCc1NaVWi1zT4ojuRQRFznisaGKb5HG75T93KVMwpnnpDKCBtNkUYrMakg",
  "key28": "GJmmg7sRPamYA9FcHjzet5em9R5RMpxLci2VGn2aKcfxNzD8Zh5htkQqRzZMQZMQWUML1c4LcjQF1edetPpbjdk",
  "key29": "t3L68HCtn1WiY1EQ3LW5P7muZvupKRykh3N72LxjozRcCAsKu49e39na7F7m2skS8eCrieF5xie7jGEQM7iqmDk",
  "key30": "3HhTx7iLnS7W9uykUGjWySHE1tcc72TYiSpEjM5webX3WQVzhzGN8QyUeYSfzrqLjeWnfQtGYBDfpPMBs2EKBeCH",
  "key31": "5Yc9S4ZCMVh8v1qQi9pX7Sf8mwN3skf8PK5vNkGFJQgxL2CKrYAndk5GEmNpWQy71xdW8p4jM3AAfwgqnYXAwBzx",
  "key32": "Kkp3FhqYhq7N1Go95Q49P6qHUyhm5d8rPkysDRPs1jrRXzJtXnub3oEWSxz7pMoq2YJcnzoukqddP42DLskFZJd",
  "key33": "3Ma4qqPWvafzMA2Vggw6X9ruwe2LG2SgBrJhSyB5NaQwdNXwHSD5zNPNpuBhd9w7T1qNuxzkNcJJqrVTjbGoRS7P",
  "key34": "3ozMRFMBnqYgAJsVSaZoHQRUWf3gesFGQjfb44eZTXy7VLp5iFxqwXXPrFhA3ns1DztN818cdg5DxEQ5CXRckfbE",
  "key35": "3yyjUvj6vmRn633EocdGrG3mgg6nzBz7CBvz9bpthdZsmjquH8eUP3PsipaLjdcKdhGLMQXx1LUtga3mRps2BtwE",
  "key36": "5YGj68Vpj8oHAA2YGyTRpZn263SYCHRQaA5NfuJmNcpM8dpUakMoV8yfWQbvsvZC3VdFzv5nR46eUcmuToqYCqen",
  "key37": "2zNxjkqeki35TtoJ3hTJqv5Crh8MPx51uB5uZNek1EShQnw2QzumWmQ2yA87GH1NN2Er8ptm95v8qe1FqV2PrLiE"
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
