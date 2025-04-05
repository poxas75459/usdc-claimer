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
    "2PKzGC5T24zYmR7ptnaN1BqcjvDuXwTzgJd4qoXo1mqAJRgphUB3BWd5KfEoUaGyZVzyPujLgDZUstnXG8xQ1FYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNfkdKT1Qdg2v52Q55He298hcLtdaYBeydqAqcFC6XAjBvPgMbYWcwFxSitr3DJnR3E4uY5VPmq4JmbvMYXD95T",
  "key1": "3r1VtPaHDW7VGFcTPNs1xpQQTH67SN11HV5xmEAEB5jYzSfskQKr6Kbr3J7P5q53PKLEAemXtVk1Ycj2cPvMfPEt",
  "key2": "iNaR8y6iu9UhNirsPQ2eaSomUgZsRUEe3HeV5FcLcbEz238adGHHNqUjPPTWv2hNW9niZcAxphYmk2wRn7CP6rC",
  "key3": "37sT3vTAwe63briBMzEPr4abknj2gCZDoXCZRMturLuAPY28pW9oXVqMkKArKuCA3s1tpzbwY4iggyUM6D2B3PqV",
  "key4": "58rGGKKEWbAX4C9vfV6xJ1m1ytzDGVafmWry4fxvPqssumMzXhWBmi3pDPAtQd81jzWmicgsGWqQkPpBbrxupxiS",
  "key5": "X5fpoGLipswsiqHWvjvVcDsY38MwAviHBiEpFuCtyeXw3QJje1YMM9UujD1T6er1vRu2mU2FxpD2DnrZVGVRse2",
  "key6": "5Ufi2w8oaQTzH7TSAUS6sgxsFqNUiqivQSnqTwGFZPZhyszoevKKs4ubD1BfJLQPgMii1ZfLb9bzMrjvcBHgQqb2",
  "key7": "5KFSM6EKgFfW5QpRUSnka3dTjh4iKiho1aedxh3QbPZZoaqFxp8amGxUEaPsMoQ3wSz6JLbyAFSAHmwb6cGZZbR4",
  "key8": "4dPTEUMMSDKGqu4E3avSpHmeszv5EqBvVtRn3zkciC8ASQh75WRFyPbZN7WaUBpxoXe8JqmJWZhsMv3pTMWQVTtv",
  "key9": "3r9yGMnRYYRfirS3nGNF4psmkmWdysyNrEwaSXNARPWUcjaWm13MKbGDuF22kinMmgyhoFt729Mmd6RADGkvZ6ms",
  "key10": "25LrVwntTWCGv8w4AAcAKXtiGZaAaDWqj8sWAB2FNHQWSKzozcrhgjdd5xNQQrAsGJQ6B7jFEM5jHb3FeZdPqdY9",
  "key11": "Nnb376svAbZLAQhrNjkTWX4FCgCvr9gy1pEcHomsqVPz4rVPgA6FN8msZJ8F8sd6rqatWeKXsWpw4gifPNpdt4W",
  "key12": "47RYXGiSj3An5X6qDWenwyQ6xD6yoYbP5mF9Wqp8Edt8NvN4Ru2GoUjcXPkLS3phVyr4M2haEcenQ37gyXkNdB1o",
  "key13": "3gT6nUjcKgvSRb4NkC18o2LQCN2MQf79BTUTW7sfc3NLwULLgnj3vhF6GHmNo6Pf812so4zN1st9sMeJqTq7SFno",
  "key14": "3Hr4JZMj66PsgAPdTtYLq5ENmtquDaBAGB5kbX59kpM76R3K183NhkrtHfmJXAVmqebqpNCfLpp6vcj7fUZDon1E",
  "key15": "tCFVcQkUfhNjSUo9Jiy4R3FRWE6DJS8npG4zZYnoSv3ZWyGsAxWaETyrHxidwgqWk5W1Qk6rE5JxncDt4iq1vxL",
  "key16": "3a63Ck5nRDucWWmkSJt8duHPpB2P3jLvsiubUqHLE1jf5YMvuBbB2N9VqP1tCK4dbyDUzVoKFwYzKVuryo41pMnf",
  "key17": "2UxRcvKoyjywrYRyF9k3P3F4q2oNFUuvYF6QVptxgadA4hNLdjyuf19xCJvWBEvepEoNi7dvUtXLLXroEwqXzp2b",
  "key18": "6gmZrV4gcvnzDBKaBYUjjpwKmmLvSZTQYBJEpXdQFFr7UT9H8b8khS2XYqL6ZZvzt6kpcRo1W7GCHViTjHhitzo",
  "key19": "4UrP9phPwhFqxoNxhJucrPfTt5vCBGMYiM9n8xFz98L3U2X2AF9tPE8GVZ5H177R3p3qcFaHW1oXyBSeyasHoPjT",
  "key20": "4juMRHgoaZmweTD3XWsSTXUYGDgrZGeHZuTQfV8CRF8eReFfcNE19tBUn26ErZU3ZJ1u79Pg4PLJ4PmMGP65DZ34",
  "key21": "4jVURaNYoXSGeTNo4sZaLwyccAndmBe71ux2DUhmpvUQkX7So1Z7GdSXbxoq3uFqPuU9qZYDTaqqVR3S3hQyceyx",
  "key22": "4GckDwLBW6QMZypi8SCgh6LQAtWSpA3m9XBfP1Rm7uwnQ8C6XM1Dg5odtwFctreqqXutdgD761jDts2tuccSEVbQ",
  "key23": "3KW5zHqy7wzWEhY97ebgpKMpvEYtDy8jWaDefdQVJCgUXqR47Akg6eFnbo6d6Rv9Jw3UpkNbkkuxm6P1RxkU6RWP",
  "key24": "q3zqhfNErjZy5xA116bcMBGhZzRaEkmqCpJGhQKwyRX2mRYV3ReuYHQq8Fw1JsoTH1JvuUxyJiHW274vfngLFEw",
  "key25": "3y3qUy8j66Kj2daw9jnSV4yJirWeBMSipth4nhWWV5mKDLcMQHBh9F1zx2KWnY62V1n5ALHTtuNemJzNG7DfHtbW",
  "key26": "33XZpeitx3EXMe8KeUvTECYgCJqNcfcfesGYUp2LoqdnukVfZuzgDsexg2xs2PubujwfLTKMGfUtzgFkCNXS729C",
  "key27": "WTUDUtDeG5f6jsxibkUs7Bw6XMEN79sDUYdaSwjgwptintBtu3GWQ7U358aFatkJj7eyUxKekiB8AbNqxGUMwmY",
  "key28": "5Wu15w7j3BCn34ZM7L1ZxkJg5rMVK379j7f2n4uNT19TGhUWULSdFeqDvAo3R98Lgp7LTvrK74WBrnbtnEnWnPKt",
  "key29": "rSeswsRAYhT9xdk8xsPdQXHaHuePv7S8Db7YNFTJnst7SWWYEJjVr4kQwvSwVdb5ms8xYQRyPxZyBcutq2yTSUJ",
  "key30": "TcjQbf1YeZGqyb2VJnKevuYpB2P8ND4ucPgTugZr1sETazPcd9jrYFx22k8wNQc1Py7VeLZ4tLjwiaQM24UfcyY",
  "key31": "22nyYsJhAjGuCzhru1ieg86pLikivTugxoqKPiHRrbpZMM5fdYxdvtHzfa7WqeueXhcwFk8NU2hNGwMcvdtotd6d",
  "key32": "SGhjiidiHDEYMBaHpYeqBLHkeecjhTPbK75TCvJm5XLYCnZ5rHkJqPMDHi7Y5nk3v4cFD5uYdeuf4xRyY6qYdEJ",
  "key33": "3YVgwqVsZ8PTLVa85EyoDN2nNZVHN9sTZZE6hfYkeDmiKQcnSucxf74mpDVH3ngFG9fyggARfKhv3gUshdpkBA65",
  "key34": "34dYrYE4h255DvSeCXiY2Kgd55kbpHSfv4pERyCspnLnvE7KgBRSArzPX6P1VmKZ5FEVwxDtVncK5q4rbv96z8A6",
  "key35": "2uR1XiJLQrMTi3NH8KGb3HjvdDuc7z5YmwgsUzdHxeUygutiPpumcL5uAavNvcuVnQUbDwq7jDhV2iNGTVjr9odS",
  "key36": "47nf2Yv4cZY9kdWnfbv2WQwNd1HESTgMPsBuRoJ11VzaptutsapqbUmsM3JsFYqQEojhxtKKdrrpJkVxfsTRx7Td",
  "key37": "g9xMpXtKmSiYKZWo4SUqbHJEiUALMBtLFtCZ2wHdamKuZ3z9RyoxC1NDBa6bqgMEpDG5bAm7p6mMhPn4nZJqBwz",
  "key38": "hmHSmF3qaEXbiCNEN4Z1qnECvEY3eTVUtwxrxLx9Vry9YDhfcZrtPzjYviznARYhCk1NJVw6s7UzH7iYbpHEVmj",
  "key39": "LR9viKHJxrN2X4JpjK6moMLiMRvmmXmBaTtZU9BAS39SGeganaY5y7FmZoNjC3U5cBgxK3xd2LD6qcX7EQk93ki",
  "key40": "3Eci7jAULmYPsxqEp4WrU9Lx83brEVkeTg72pHMfExpAeFHqfUeXRvu3pNocnaZJ21tvFw7uQBiyze1cbyVgVANe",
  "key41": "3qaqjMs5qAGczBGwsZgWns3Y2u4BTRJxEcUxBwFRfHMhM61k5FV4HMFu375UdkVnTMHqVUdwKd5Zn1NnUGJN6h5b",
  "key42": "51nuEwZjjFJCjT2qSSTaLKswEsSxmJNcyrHYrsm6UsKkqCJVDnpHMwTb9euNAYsvJP8g284imDAW5BYZBYZZxato",
  "key43": "JU6JiyiKLgks7hjbmyhurxaHdgxRedjVw926qxwDiEgTDMjAiJ4FLmc5z2JjEhk4n1wizMmaA7ou5Aabxz5wQ2F",
  "key44": "24qwL3VD3yRD7TTvko3PphyvQtFBTZpjM9QamKGyBzYXFNn2eYtiC13Bxty666WSQDsgzJtozsMEGaqXFqK1SkRZ",
  "key45": "3E5MF8gHAHyDrDjEPkQRHZGVgqug71fvSLodwyTCxGNneycNZKAa6MHn6d1XrZSmpHwJa2vXXAgz78nCz87TrT1T"
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
