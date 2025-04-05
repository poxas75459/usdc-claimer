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
    "5s1KSSMP24Q2EYkban4LMU7tEZJcf84xjicaXv5tPUe1EQ99kQMyqArReWb6BZTSEwZbHBK7Krv1ZJHP9tW9btNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wqA3foVHbGkXY4Q3c1yGYBcLAhDE45UEGvnevR4RjHzvFGJhyURCkKwLUMTe2ZVe6bZAoTJnLsurB3DwmFhzWeq",
  "key1": "3dz9yYXdRQfAZuYAAa2iH9dDWpahYTE8xU57NNDxjyFev6K8hVxj38WvzhcNJePw9AKZLonTuQi8RRoGrDVAGWwk",
  "key2": "3pXjWHjomGCr22iUMewBnG846LcrC7s24sqxTPVJUA1AbNLh8GGtxi9NpskVRGRGU7v2bPLAKR9vEvgYcEp8Dmsu",
  "key3": "5ohQssvfXodygGPRgYbAzNqvF7SfDSPLy6ajz3aY6NFqPFknWnu51iKm5Xyi6eHECW9S5HGHavJCzhmEP6GCYdSh",
  "key4": "62jG5v7ij5yaUWTPtkcEAS9ZjCbaBBpuN2CotysjAewubtHnjfttgdXE6wd8SGd5R1mSuuX19KsrGMr8Kx4c6bi4",
  "key5": "5p43BTF9zvo7Sg4bPdSE6EuTk9WpJaf1i7QGuQzd3VQx6B5zzDj8poJwJynK7TjsXfMALjWeSsDT3mYduGoBPJCP",
  "key6": "CQGRfmyjwd4JufmF5NgcSz6RZ5BvfeNAV4JTa3kygFAXHG6oefM7uhaNQv6qD6yG9BQ7KshSRjLRbYH3RU743NP",
  "key7": "5skf87xiBaavon3Ltrs3qF5CKtDHjJUeXcgbrNoiUHjxX24x42WQhwiLMcMGh5jkB2N3XqNLHSfiLp7F8XdBBpZB",
  "key8": "56K2GPWKxfoCJ8264e8dVweZ1LeTPy8yGe9KwdM2VuwtE4gyo9u1idBhwWPt2qNZcZwxeq88VM2WTg59RRQ11J8",
  "key9": "3BMDobeZ1GV8qkcSdpE7wxggwyuW299AaRDrh9naXSg4mSsC3Ty7CfG1YWUs7GQGQ8GFjhkJVSQcUfR2MmCCfxQC",
  "key10": "2FDwcG52RWnTL9KG8LbNsSz9FYWUmxmqV2VdeRrxzFLrkKGVRPCBUbWuaE6LTwb9H2qcf672wpYdP4tZPQUDG1c1",
  "key11": "31fp478pnk8pf8CrDw3GH8vdn5XBb6To65pm23bMP9UXvXMDn4mUSe2pyfkkaMrwmtsfSfddyr9YVV4GQkKwc6K2",
  "key12": "2s531LF9fD3TYjcooa4ZnswYxP2EPALiL4WbX7xzSgbaMtaqbHjwP1af4L7RjrHBhkYRjDriGtEEEPSvdfD4gGr7",
  "key13": "62ZKvKiurgH12QsuFrJEydPafD788tm29mA2xcyu5ZgYWtwZKPt2qAiXLrkNPok1YYJk588GvMbvEkMDXj1kSnjc",
  "key14": "2zrYcL9W2WGPC49zcP2No9DfzoFHeMc5P4PMhNrS6oeveNbDgvoXAusteoEoUCm8u86wucC9zCWJupn2qdNb8pZ6",
  "key15": "x4jXeYgAWQHqW2WXYDvmTqYuHQau2RVGTVwyDUwCBKW5LbxQhaXkeRNmQdzJV49L6ofLztJJujwAgo8cTCnciFh",
  "key16": "34eXFXy8skKqmD6p1dcmP81jQ5U3dqMHiJzuuh2szhVA8epf2KzVHfGxjcHFE8bRxi4FETisSvARvgmmtBFm29zz",
  "key17": "5nQkRnENVfy81jFg9vi2hFT6i5p6BTd2DNBvnBYBGhYJR7QDQgraqwuWwxYpmBVHDfAjHHFW7oxj31UTGTD7GYmi",
  "key18": "6zwLNSqLTGZn5EJUHQbyMwHPy289Vu73W9jnHrNXuByjUwjWp9qVGGrufdmZQA3KDgck85TvqqDdctnJJZPM6FG",
  "key19": "5dj2L4XiAXJ5uELrcAMquykAhqty5iLJESSeb6JT4A6HQefpBJxFtZMQtiSYYwLpDSseto6PLHKTrKsjgHdtpS7x",
  "key20": "2CZYXWWCqtEbXfNuUaoqkaggoPgcZfp2CUAXVPi4EoPj12UzFeftmEkR3TnCcJmsdUxP2fbsEc5ainGDs77ZSEW9",
  "key21": "5ut7q7TN7h4hi7CM192JoUhw22bc3PzZFetzfzuqGqfxs7LafwqouMVuJAapZcngnrDeDpd8Mhi4i34HuBHXnRK9",
  "key22": "547deuCWTWU3UtVW4ZrR2uzoGZoVj6FbB36jUXctBA2Dabae43qjtWjefvfqtR4ncP6J5aAF9mWTPRLBpuPJtXwd",
  "key23": "bjLBLGoXMS3Ff1i58ErTY3gGfnDcYyB9fussVd8WGLjjVQE4ejtqqELWFyuwY2UqDKqeVcDFbR8z9MPqi44ZjNw",
  "key24": "R3WBXGtwKkZh1tThcy3dzLfe3aRagksNe1SvKjTQmhTZUazwfjywBnLeMuxjmDWCzYuFbXU1znLQLEPw79QtibU",
  "key25": "2d5gKTWTCKC3h6GfxzTd9dtMAthqj4q3H9SXCNw3xqknoPgAHGhNSkfC3KbaJFyVc9QwCuf4f4xShrgd9eL5MBim",
  "key26": "zeyGsCoD2fN8qTjpSxt6pJeaGoGkRS1wy9ARoUQr2diU4Mp6RU3DxXpV9PcQyJgWwZpctKx2HvzT1ESuhjE4Wxg",
  "key27": "5TKciDELCUoVisjtPhYfZVXUq38ZHEGsWzjXRz8mAeda5bVD5eAzdEjbogLg6jmDfyu7YRS6fsGgw9J5QwTWAy1S",
  "key28": "2BziTSp7Mw1ZucDiHrWJVoN8dqgqDygYoKddrAHipXkd92HLTEVPG2JrC5mT3Ech6TKj49yzuXSw94V1vYzFexe8",
  "key29": "5FtCQfkYeMcaSzGbM7cHZQMSxQA2UZLE9tERX7CjqRChFtMzybbyyNNAn8uzTeWFBE78rLDMYPBNDreLmSMxkbek",
  "key30": "5iYg8BPLwhMjoKMd5C8ZiYBEBFZwPdkD4SkbbcAj9495NGMcofw3hz8W4dan47r4CrfajnxrV4xyedwAAJeqxQCF",
  "key31": "4nfzmnzHzQcVbQz4rUEqt44kPnESnwdaJZEZbCaN4txqcr7sWnvpDUBSb2DiMjcd8xijLVa5ibom2P4u1J6QX7in",
  "key32": "5Vu9vPabjvUg1bEWuERc2DzHNuVgaXKtxr9Yn9BSgZaLTJrQBBBf8seaiAKujz9FqCqrfEuV9j4uARikEkEUFdFr",
  "key33": "5dsgcnhZuqW64SDsCe61vkixofeegwfLipJZs3DEpDj8GfhJSvNfFxbaasKqthWMHiKYg6JbY9mi1TZLda1B19My",
  "key34": "5vrLxAb372zL7XgBccwggooJx4ykSXjAQy5ZySPbr7ZacPTeDGCe5rnvkj56zD9TRVg1bQW9gN9DmjwPX9UjRELH",
  "key35": "5EHW4BMvJXBKgpN49gvQQUhjRUEtX5t2cxRPVLvq688dYc9NZEhJvDmSHnCqkTSvQKY4wCN9brquYA2SjdmFJ3yY",
  "key36": "3kDeymtv72tSDeNQUgzsFBRrZV8zwVSLaYn6741ynkWqT3pbphwqUBV44XYvaWd2ZP5EXPmD8yTmMVUpa8LN5ukA",
  "key37": "57pxkSYJEN45HJWYRGjCHt8xSRs1a545bBMdDiTmoCZY8MkdHj2kZ2Ty5ig7roCTZn2RAnWZypyoW91aYk2b5VNM",
  "key38": "und6GSBHWcvTTVaDPeRtuFGDTN6SW9ejtZqYbE9vtVCWuZspVBNJxoFnnxJ5QNK21cLzDmdfQXdqeRSwXGCqNa8",
  "key39": "2bQ1aNrK5qSaLAnNAm9mdWPdqnAMx1zgokk7zCUowrgCv7ET2rZvZdkYAt2WaKtFvk4bSji8P7V9Vt4XMbjkbtRc",
  "key40": "3XBweviwjy6fM4tZ8UWGDAtawszWbx3grEbodW9fNdRnP3CBgDoDGCHmNgCuCuD1Fy1etaj2ZZimvxEB9nDT1Ge9",
  "key41": "2kS6qC5PtKxQDvrniHfVNcrNbRzPgZDcFzR9oih5hy6Uat1zhCNMwXCBNMhH9VCZCwiEiMZfHtYagTmM7QbQTnr4"
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
