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
    "5QnMvJmTJGMqfaivCpzNnQHbMkj3ZNPRDT2jzGhkudqzLAsZ1rgrcURkypcHiwyaAD8mWhHSWd6y73TdYqL1Hq7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jogZPDKiHCct6Ncr4JF3o4atCB4cQPuRUDgz233vqLqD9mfKndV9ZdDeVX2n56UDUKnTqBar2A8y9oBZa7KEjpq",
  "key1": "25hVpNrYTb1TyuN45s1zXsgY7MszPxFGA1n1qr2EPVMPs7P1jh4qVryAVBhKmn6f9E4Ji9Ki614C66mAiWtwAuAC",
  "key2": "3oyGpbWc6Dj3PLSEDszrnBtyRZotXCE3zWXxyRJqm92aM9Woia4fDYYQz68qHZqggK8FPyRQwQwTJrTLDVf74W9o",
  "key3": "mniPjTWBgBY8pyB3ZL8sD4ST4MnTwyyRQ8ccWundYwNso9DdC22nKh3D1HgiHCam6LB1N5Vd2Em5F3ZhV5ouhqK",
  "key4": "3Dh2Z5LenajibF831st6n8dP3w2fwiFmRqBvYWSozRJNMhvob41sfsWbabkRv7gGQadp6gf1EUfZaVZhx27pDheU",
  "key5": "3RidQBDAn8xRwYhBGQ6VGydbnfRirBxtZn6rKub5LmuZYUjVxK57iHfkZg9f8HY3uf5755r9dtiLgfCVkVcHDbBz",
  "key6": "23Xi2BzLkVStAiYp988cZKqCQMuhhsZqEwt7PUtSfkyRUAoPySMaqN5QXyFS1rLaXmwrHZVDcNScNxVe54VDPf4r",
  "key7": "4R4ndehxdMbQRm8D8ai3mF13BgzwWXyXLwStNQqLARqpQJ63JhwUnwJkeAS7iCjfhVbwm6f71jz7fpmnK3daDiXM",
  "key8": "4FE3BHUyNo8zxYrFNEpAn7nHNeusfCjqwmLM7Jx4pGCmStFkiU1X7euJ3VMYjB4Vv7BJ8Egyp8HfPPJLdxZEthg8",
  "key9": "3qB2SBV2mmZeqjSr4nHyEaZUKPt6mqwNPv7aNXuMTEza9qaxuHHVyH1mkYULoDTUCa1J2hutZVfSPEe52xCBDr4E",
  "key10": "2G3xckDsLokPdjpYGPtCPDZ6brHnRKB7DLGMWCFZB3gu1dCZN2jbPaCsF64yu8AiJRhaQXFuXTgQefqfVzA2Dvtp",
  "key11": "PthdXb62SCq1dh2wJ3Uc7wSKUFoFTioZ9yjwgqfPwA7SdGjXfLVSCXWZ4skgTE5648bEG392ZJoTQd3YxP1g4fr",
  "key12": "5z6KbPm9qftD5r8dCHv3hRnRz2a3Q6w1okVHP6oLSMKuMzv1E2trpZRit3kGt15h2xbKu1qcZXj5T1q5fnxKjL9L",
  "key13": "2CsY7fFkVxYsZC9Z4DL2ULgXg7qdMANM61HvsKuaPv1V1FiVfdfzNuASFtao7cnjKQjZG7Ju4Y5iZ3xXffiULuv",
  "key14": "5UDbqYKvGuuVmRheqzN9b9VGPdBwp8B2CnhRif8C9YycipV5jgvobCoNBPPbjFPcAgsRRN1mwrjT8hBHHjEUKYZG",
  "key15": "RfreakiNCSSUmVcuWy3HZ5GdqzjKcNiVgb8AhULc5Ga4quV1SwrA4cyJda8iN9s1KuDgaxEmRUPJTHa1i9sfGnh",
  "key16": "3xJ5ReTW9m5RJLPSsKY9w95dQTs2ufwzS4PSkkEUK9wvt7a8jgUXa47yaSY5MiVwKygUYQLsLgnfmyAU5D5izNK3",
  "key17": "2fmk1s2XqNSd5eL1aBDP8qLAkvPJaHZiDj7dYjPfdyGuxVUV2DoDy1ygZnvEJVZzYHWqdhF7ibzRWERNAQAVaX9Z",
  "key18": "t63MnkNHPjPSaSyahf8WhijLbh23bY5WvCsc2ztJQ5ved8u2FHZaFhsYq6g7N3iADtPQRx2Y4PS1Y1bLzdvfnd4",
  "key19": "3KjmCoeUFqoanubFtnjJ4inGVpza5nr6MKQZNpYCSqfnrW4EeRezjkYMTjopewsFuqhq9bc3iq5ykrTfYwYaegoG",
  "key20": "3rK7tMP9pNJxfQDTeEjmTfo344uAvUgkM7xr7J48YqR65rLPCC6soExRUBTxTYTEUpxE99t65SAyv6vMENEHmj2T",
  "key21": "2Aeos9rVQJyfTefgePt6JPDVzFoHmd4QGpugXSQ36kuHT8zaiCyW3apCvtRv7zke7qJTkgw9oPN2s9pbHe4iEdHF",
  "key22": "3nKk1THb3QYibvRjk6Gn2dvMsKNE7z6ezrnVjK6eRQe26K8XN7m7xtXAgduRUQRbJxAfPW7iLTUFe167g28Dkyd3",
  "key23": "m1peQa9cQhXrLur7PMaSBhHSemweA8EjWvEUK5bAvWehpwQdTX4gDpwFmhgW4KCQKHQmJBfrTzFVBrKUuYRBJJq",
  "key24": "23iUSYWTAYP1Z82i6CovVzavfzqJoBnyGwJevg3aAhDN3xj7iv8poXsLjpMTs61vWqoE7Jzxq48U5gCZigZNaZF9",
  "key25": "5EoYAv6fhiQLHM3wocDWnXpoqdxdygrVnWetdDAsPkpK47gEhV2t8c8XqLf6S1zxZKqVTLUY6FkrgD7U2a8bVmUv",
  "key26": "4ZagmAQpPK5EcCTXqBid1HZRP6kyaRCtwUuEpX2o3Akw9aSBTqbY2t3CMabbbFbiyChuKhviDVqPnVLbZASMp1kd",
  "key27": "4ESToQQ8rBTZHqNPqGnjaPpuPN9YsLvsAPj9tzX8n8wJ8D6LjiGe61U76KQANJXiDyGuC9nDmqXqWNdLVHFMacEL",
  "key28": "2w6HV7J4H5W437MaMubfmRCjymEoA6pnh4CNtDMF9hjT38xL34dqtdq6sB4tPGXwj8bfTEJ96cDFaUwcE5gFnMmF",
  "key29": "61TtRx98An46gQ4WRXcQGxNvrGE9WRrNJWEGVnGdennw3VwnvAZy7V1tH2XgWSGvrMZfYpVHXuJSEGTVgTdYyDN5"
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
