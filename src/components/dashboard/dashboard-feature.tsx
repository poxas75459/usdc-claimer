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
    "2Tzo3ervumiZDPHpmY6aQKL1xa6zQLUZrXdmBwK2FBbuVD1RaP4QU3DuDCjjRGn169bKJhiU3UEL8cdHGizse7SG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDdR9zd3JDEcReRc8XVT8kwQpRrBBcj22ZiaD84j1r5xe1qcTiRj7RCg33gpKT4APNUMmzJAsyMEXGp1SKEfrJF",
  "key1": "58jhznGD2HmEfw7gHndC2Zb5xQanzSfR7WBCS6WqCwBwdLjhC6uTGaf1XoEZJowFF52V1e9V7FTBGxpMpqc69sut",
  "key2": "4B4zGFKJ2phEmMQY58nXokCVizXGJFMMxxRiRQYkvdR3moB87QNsudAgJborQxrg35AHVqsAFxV2Rjb79DidHM2K",
  "key3": "5sRjt1nJMAXzUVBXzKcJEKXX5Z4edAwnnHRQ4qmyaZNpZx96Nv7pxqfmC5xfExMEAoHPzjFTZ1BUpCTNkFAyBGPG",
  "key4": "5shGk3bsqLXy2rAhtnTAvia3BbtVYsrwuUUMurjaVaq7NAGd1n8422jaXyrud7f5fufsZU2HB7kVS8tP39hX2Ugg",
  "key5": "3XhAgekkz611fJwd9pxxNWTFLtBLDfvKvr7sDbAWV8ABudah6zfQYCsxmt6cB1fHa5dQU9wWWRfuQW2JY7px8VWY",
  "key6": "2qzZZRRurJ9JS8Mv6Lpfxvu8Yim6GzgLLHMgeXZj3XW6zDXHcR1D5Mt4efwaGH3hemUJrjXzvwx8CrZzB6qA1PXe",
  "key7": "eZ5VbGoPfbCZ2zeWhn8twuX3GbckpH8Nu1DnKc2dSDvkjrzxxh4G5446Jeo4CC7SEDhC6hQWQNj6BDQmguoCBnV",
  "key8": "529VCJJ4rt3HjNHMPRzHgSYEm3g3wfFNC6LPyhzSAgRRpfRKEqHQhwp3z12fhoXGnMSSTnNpMFXmVU4HYX7enjM",
  "key9": "63QXGMa75uCggvNJUUmNcmWxxCLjqP2YCa1Dzbtj2MDFa9tYJkuLM2wWZHegzZHUzK5awBAmEgfDNe53SZJJjs4Z",
  "key10": "4PbhLTtmkUu3gXyLR4j2F7UTquTE1CZRh4tVfxNyAaWEEYY3Ar9xoTsMoR2N6ZDvNXyE3VSBkrvouSLgiXqRdc8j",
  "key11": "4biPrJ4XvEqkE4NHXd5SQTXXsqAnyBb6kye25ZSrGZpvT57SsKqmFmHoAkJFX2keTyXVgwJWZ3fzC6y2bt7zVjtc",
  "key12": "3NXPLobg3CarR7eghWQvfJMjcy4F6EynTTH6AJcPepRi9oGzWnU58H7AVaACr6hqMHbVbYXgHiSBigQwmF1rLux2",
  "key13": "5rKkWtPAuXc2rtBKaqepQGw7FjAz7qD4UK7GBLVT44UiZmN3sLXLWzNz2BoS7tmqFbwdDfnnCZRe8uhGcFpoZapX",
  "key14": "qFmnEmK8xAVeFig6FAXwwEStdt3irsmds6nnoaRHYrQQ8tiAh5HVv3m2UwYviKZXQoeyfHCQAfizrZohpNB4YrP",
  "key15": "LYD4H1ioN9MwWM1RZt8koH8PVmchYDT83Yt2cBBnaQ1PiMthmjFAYUZzZJo183zQT8RiMczGRuo8YwgHJPZYvkG",
  "key16": "vQXksQxk8pqBAjiHiCkuie6bTLyuSpt5WZ6ZvW6Z52txx363jNZSpS3BG5pehD3Nc3JZvnexvuMiZCJLMMh8pjU",
  "key17": "5LAbfv5WGf1E81FUimSXGya3np9pgU6TydzMfzojGtVVejEeRePYpyMNPfFWKtiBJFJysRsyhhon5TaqkixKiJVw",
  "key18": "2rA1vgomeiCrmfBFTSJVaeLhWzNbfRa21RFXq9qBXwZHpVVvizk9oqKvJodDVjVXixdhcJAFJd6naGqTcDgykdkc",
  "key19": "54DHNQtLd9ZWLdx1H7rgokw3TQcSBFvimqxyxXVeLTAQphpJHQadQHjC5W9jBfHRMtcYoN8FeU26wH9aDqRXDLn4",
  "key20": "33fPr8wEK3pLdxA9aEJPhHHcQXrBPVCvvsQXgzuJ4wfnRVk2WZ1rZUw9i249wm8VwK592PBVQb6eXZfmmioqnXT8",
  "key21": "2rf33kC4i37eYrXDfbFDAcsRw4JyoW2efgASRs2JU8kdzXcCfY9rJULk6dQBWTuF9NXcFntM3HuxewxKywN7Y7gC",
  "key22": "2pNAfe4trWWFooc3UWUac49H9fa1AiVY9DUWDFtMWjmsfaVyNv4TLxUf1maUuPD8gD7bCFVDQU8ga8fTc3aaNcZe",
  "key23": "64zi44scTg3jWzGhHiBacroiikJYRXkWULKKScbnbtNsP7sNhqCk4B3A4Jwm2UP7WmDa6s5YXkRe8SCvNdedrvUR",
  "key24": "3FkPz9JestDWqHQAV7eeMcLKzMHrwQUutDohTZ2Q7ZeUy2H5eEVDHuoy6rVKmtYfkF18fxfBxJ1im1RrMyGDguir",
  "key25": "5BHTLRD9ozA36HzPSZo8if3td5gAVfJtWMi5ZywJm1viuPEAvJcKK1o8WQaPoWf7sv8RDxssSicdxaQ9dfb9pppW",
  "key26": "3poAABzJj8spEXivCRDggsVhyXLmYgMK3kDDm2eTEs6r9YF6CgSsZsfHo8kmd3i6oRN1gKdaL2NTT78QYsgjJmLi",
  "key27": "2RmArk8EBAMGgkFTamNUJ4VsEkuXi6qXWVuGCKEcuUTA2w231oCfUFFYjDXfGE91iiypMFW1SxMsjG7xGyr3jJPh",
  "key28": "2wuSw8n8Yh1p7zVvTw5HpxR3UM2cxrAryRN5RVWqp4pX1wAVSTVf3A3CTJmjoxq7jQ6mrvU4aivZi9Sv73TZZKH3",
  "key29": "3hye27qBdbd23G9oAunzp9Gc7Hu4WXg1y2EdT55cog9eyfZfuQHfL7oiVgkMjbJLG27S9oJmSj2U9o2wBgcQQXsE",
  "key30": "5Yiz1siRTM4WWwMPC6GnhgiYkiRscTxXrcVMnjpvbTf1BCPBLYv1ubxPRXDAMGRVFxnpZxb3PmSuW4tYvhQpoewr",
  "key31": "4PjrtnVCCgMityni1Fj8eCCpzbjpnxwymrkUmzrSDhBZ5mDiUf8nkw4LALZP4mSWhrETYR3LMjCsp5G8b1P8Ym5X",
  "key32": "4x74fnTfR1RLhkHJctyBe6J8p8TZxswm5UvZjbXEaEBXGPspnRJcV3VpZ1JromRSxq2Yyj7Lb5M7NAVNnCsMJmo4",
  "key33": "5VrBUwHxmuAW9jTRz3eb9vrKwRAroLQM2Nfas9VNNxw4Ec9pNEEyaa274YVudwBQPP6TJdkPeWKNXoScWQTzfhWT",
  "key34": "318hq7GmZRYUYHBANfkye2sqphHqsDNhTKvqGdN4b3t2CkhvWKRoEMZYKDY65DdBNPesyH4RkGmGQrmwxTBq3L9a",
  "key35": "2fNXWYxb5bbYAZ7bvCeMkzoarxRNof81GBxiCdzgD2ydhCxw9RjVzky7J9mHbb18WcmCZD7sCUeraMJuGarYjtWu",
  "key36": "56EFMo7ajgaJXNtsVFM4y3P51H7sNpRHYuf5V8fnP6VwtryC1HW9THGPx49wT14coQwpra6zQYMvKX4oSfUS6db8",
  "key37": "3L1JBcAscMMQ2zkRjp8oK4b47p5zuzZ3zaD6vg1vzgeU5j2L3fUzZ1f4Bi1MkyA3W3VK7S7FPHr4ELrNW9enFmqY",
  "key38": "zdENqdMGShVFLrArKLMfdp8vVL9jtWmXQasxwM6aSaW8LUPjmb4YkHAesHJBCiqGtqNE9hfcD6U5wE1jeBfi4Y3",
  "key39": "2LvGSJ6uRK7sHqm7tzcqidkAfS9JscgbWj7rW83qdGCAxFsknrRVwpBb5J3Lqopi4BeqPoihx8EFRiUgUzQnmqKH"
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
