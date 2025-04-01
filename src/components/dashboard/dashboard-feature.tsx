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
    "YBawW2PPtXyoFpM9efVjjNdASoBHk7b8GYzAL7qRC3Ffb7x4r4QGWWGcnrVyPrGaVMFxfJaZvmTuU3BYVyL3PpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DGX2oRqzvvxMdtKwaTwsKsti8iJst4LDbWD8HukXfGkDAZF9JjdZcP75fLdhn5Gz8KVgBBQ6L8M9x25UdM2ckz5",
  "key1": "XofWMpghWwc3gG7srz6iRm8815ypXZk1D3fY4wC8A3p9d56ykc6yTg1426ga4v9dH8GSew6M3wHegozMQTADYox",
  "key2": "39T4VhwUtZUNuvznA1D27r2wot7vRC3CHn5V54pV1yjziWDRnzzWKnRnSLksYfzM5A9xPcy4ZGXWXsv9wTW3WXX6",
  "key3": "3rNUz4V8MBDpM1Hpras1GdpZfymTtkXU4R8w2AWamfw9t73eedgQd76NT6RvDFfJo73cpYPQ63MMMs2KiGBuYyLa",
  "key4": "5ceNjNoy7JWaBTKPinhXZhpdrXetvFLCRtfmK4b9uVBWjjhYCrfAF481M3cVYh9TjfNLfLHsw94HL1vAJikWhgRL",
  "key5": "4qY7zZA4pEA49HTTvLHLdHEHXXkg15qCUQjDaLYssbfmKEvu3KnF1HqHmKZgZtoJCMqaKmLBRMFzndctRycSTFbF",
  "key6": "5uyf3LCeh6KTjm8ZazYaPFdQyDYVRSzzWTCoTgExM1dm5nT8rrUFJSJWjvTFxgG26b5fLoitrH6g9YwLQ6JG6wav",
  "key7": "34xChvVSHQttZJ9T7HHzDkZWzFx3ybrN8hbj69Gp6LhmzLeQzw963JiFbGAZoHXDVgpUrjCYn6qdjXnBMiB4RT1A",
  "key8": "351B2JG63GzbJQBvgHf2V94eBzvhzShQ1ABWdGSwRWaUWqhDX943MHXYagNXNzHGeSKLSpu6x36CxPVsBTEcMFYi",
  "key9": "2dkm724E9T8gbG5mtMEcNZDk2aM5qkGQXJ8y7tjrweQAgT6cNv7Nb6M9KfnJgEQAs2zR5AKJ2rLT9ZY58ZYESiKh",
  "key10": "kQa7gXEPZzZg3BYaAqj2KMZVgZuuh1swuPPXSLo9t48HrkLbzTWcZ9wFM97TxxvTqJd6mPSk2bB5WmEt4wMxMi6",
  "key11": "iKn2gLFJaLn865fA2QdjT1Y4oX2kF7uNgqb29xPnQPcuSzUMm3EaXTeRo5YUgiq9QDu1PQF3WBJLNYBhr2UDPNq",
  "key12": "CsgZ2KwhyGfwmcTsUMuxW1HFK652Q2LE2bmkw5oz2tidPahoN9Dm3sWm2qv7jU8mE68g7DThxBXPxJNmSfgi8tG",
  "key13": "4LpqnJutzZCXC8EZCCPAcvaNKxJocgAB55SxuaDHk6WX91eRQ9oeczupjEkJw8kLEYTEFNnX5UxpCjRpgizxiTdJ",
  "key14": "2XYEvpZwjTWzGtgY76EiiBqN1ys2rPVndLF2LJWCFUZJD1XqCXk7v62kAWWLnKcZzcmcYkRpfHx1g2qmJ2b2hwYv",
  "key15": "3raDKJsatK1jH1jzDxRsbPoTczmEit5G7sMCuUPDiqoqL8jKx8yYCSKwn1wvtAmrTbCTmopABDwo8n8p3MLqKjdK",
  "key16": "JB8si2mubBHbs3s93Vt8dadwYde2RqhtKn26yBqQCrmeRiW8GwWwkcH4CNAE2Wm9cDeJroQq6kKJ53wxutN6fEU",
  "key17": "4ifWf5d9UdQFURo6ozDdWJVsFt3ndpjgNzKV4kL34QxbBjDcnH1UaoD2E2VqcnuJk1TSvzJTwBJ5HHiwfHBavTFP",
  "key18": "4X9mxZHgb1aRXvErxksiYnarUZ5CbzAxAobj4trCCNbFuWgXNZXVVuGp5BMyboLF9Gwir6Mcr7eenHjw7xyZZkgY",
  "key19": "2vTXB2mN146HQQ8qXjRh5Ab6BCFmpEK6424wg8oukEUsXxNcfat1rwtYMurqM6JqwUcr7EmuVC9mv1mLgsLW1uj9",
  "key20": "jxxo8WAZZc4XCxgodFBKBv4vm9vqSyN6cE75iUSUv6HZBUVHTL1AEmrLifPtZQkSLg9m2CFxAQxLqquFh9Yv8kc",
  "key21": "4BkcwMMAgbK8DmSr6CYQ6yQR6CzA4arm8M84fRBuno6yCELBrp1yqdndABxVgcJhtzPJXweS7VJ9gtuoHX6BAhkY",
  "key22": "5BaFCFRmHStJu5qSZNU2qPKUpCxhLRtYJnAeZaj7edfHDJZPAqn7rjGJdY59qT7ZdpSr7vHPAC8WZLsnvJeToDAp",
  "key23": "629iDVZknZUfMVvWq7Z496VPGk6DjyVFs7fhT8BTNgKYHX2cZjNvXdbf33MnFXLEjykSK6pX2o3UjSYohtz1cMUc",
  "key24": "7nn5BhwhCV4Y8jtK1UCkY7L5HsZmRrFnnCrF3bXGmtiEqnY21wLDXcEfKbx8Z27w1K8LWXj9XPXJehew6maqjfu",
  "key25": "3TVW2cuK8fQ6dQKHioSpcwjCBPTKPViE1Fg8u8gx6Ay8TA2DKr5o7BXhJaic1UbFMV2Mz4BD8KRDbptnJoSRWsrD",
  "key26": "3HsKP2KVzPpNMpQJmFJuiknwKR6h78mWnTcQtUeYZn7vounhCrtvrJwZiyPnfXdQnxfkfSThZP9Rer6MgsCqmxdk",
  "key27": "4bbboEGZpVxaxGXGPBS5RhkpkmHKLLQhTzaViQ2LWyzhz9PUZnzxDcrB8KYTWDcrULABXBLb3MuoEm4W6rRiSxrB",
  "key28": "43pt7Pa3dBwCvuWcpPcjRgXeP7tJDQHSsx6oxSidzGVw213uaXQzPNajKWEtVaK8XFRp9cbyeXcyvdiyCEJfsUir",
  "key29": "Wc539hnBpMmH9CrG8jS2V2Wqo6jL4aoTWuK5rkSr5K73yz9W9zDPJn6dp66GhV2GupS1YWzng4D9DdgRCRmuYKg",
  "key30": "2q6ykV8WdvA61mUY8J5rkDSZbufd6tYiRS98x5Syb83do6q5xFPyeMETKP5o2sMWJPZThQaLgdRmhf4zp44YGG4J",
  "key31": "5AwZdzvBBwStJwJVdi6w1AjZ3eaoSVWsmp1WjFFLfmajB5Kqwhsg17aKLyG2vxkNhheeMZUN7c2UQgHYFKx61kRz",
  "key32": "5NNGBii5KWnRHxQatuVQquaKmpn8ViGoMbEVGFLHm3w2Tebc8vCzobdUpSVd1q1VHaShx87HhBopVUzVtaJartvR",
  "key33": "2JCkBJEeFH89ZNCDJC84k9kr4r3YJmNTW1YZUD37qUbBEH1V81YmGAovG5W2yzRqRodEpnkaozdFJrAEq7618AMP",
  "key34": "63yBonjcBrPo2thUUe2iqnJ21FkEzmrxe4qkRZy3usLNLCczzbBG1D46ioQ6Nfz94vRZ7S5oxZL2qjFwMf9Xp8th",
  "key35": "rHhArggV1AjmvSWQDECjRcYHuNivCmCkQwN7Ejg98jEizv5WgtydGh2rqAC2mih5JzqS1JqWYbCkdcWd1b9WDzj",
  "key36": "pXfoH6nResxCWUGPrJQBRxWLhPE3GULw2mg1TB9AmUjpqB6Y2wZCQLoZepzRMgXACfXQ2cEHWNr11wPcVZtJVmA",
  "key37": "642HFpQaTAgcKSui8Jtqc9ohe5HujkZheEarb56cC2aX6nAptC9qqbYpKXj2HARpZNhyJYCo9EC6iPM7z1BBt8Aj",
  "key38": "32jyBzD5MVET6ResxEWSK6TYAtjAYrWWH6rkyKEcVeV6u7pMDjH3p4SGKa6ZUtnov3mHvsNHpTKsmbE7UTLkgf5k",
  "key39": "R6yxWmqNPj9TUmy14MELvFegkiYB4g6Ea6EyVyo3RE6VLxi58kRf8jjCj3GxzRaSyDdta2cgmReDqaEWwDxBM5H",
  "key40": "5aMZPU6Hv1ChiL4JCHXFvurZ8k8hgcK62Fi2ynDriAm8X7gEYYdaUuA99GZHuAQRGCP2SPG4HfrcrjFC9Z9dMfsQ",
  "key41": "4tjBu8UoZD4VtWJc1sPLhR6mY12hmp9rwY1X5dmNi5AfjRsgjeVMPjghiHpUoWBmiG5seSH4M2zC8FHEgsprYHNn",
  "key42": "3AtyuQWoLgPUnzUY8VCCWXRhRfBVJNfqmv8ZtqpWYMKCHbXaixRhmpsTU5wEDTNZjmH83s4mynjnkePGHjRMya2E",
  "key43": "4C9VW9keMVzT5TEPsjAtSUKAxfg4CVWStvxdoBWSqLMRtB4WDSmp8SQNT2zwkH5uvHN7JL1gPQsAYY3N72QZk355",
  "key44": "3yXxq5Ss5ZxQJ1VWorHnn18GcDHCtqJ3ty5HsCX65EeJ5STtb2qFo3mZmDWtZoAbLuxax9dwmKYZKsFbMDYQKDq4",
  "key45": "5Ui6rAboLVCAzwWjknryCG4AQFYP8CuKEhEXGW6xZ6biW3bRNyqpHV3zdKu8FvHYgqVWMUnzggC8fcx2pu33oztP",
  "key46": "4TFcvh5tEwh4oJrRQ3rjQCPukxLF9jFgRopcunTXmSgpQ6Gt93xNTE3jx7mN2q3Fw1Ch7Yvhna5sSjroyqNGCig1",
  "key47": "5kGKg6WerP7N4Sm3pFzFfsVC9KeGgXMNE61Fcn5pbamqwWUu79RbgBwR1MBxk42iQmAuPRy1K14Xhwgg8aHAA1t4",
  "key48": "54GQeBWaTsXSrde9fRG4JmJevBLNrSjvJu5UFU1kKbJMUiVGWrdJtKVYQsXebknSEAPqnD56BE2RHPAX2x1vbwmP",
  "key49": "2XxoHWT17hKVpmrubfKt9ynhLQtHqyR64ZJ4yPBJP6vU7ufachLdLhPULTJPEs9mPEHkgjpdh59oPg1wA5tZCZ4M"
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
