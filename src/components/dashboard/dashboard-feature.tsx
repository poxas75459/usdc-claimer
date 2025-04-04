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
    "4AvqCve1kJ8PaosSo4EKoXcyv3NfRQy6PDkyvN9s3kYrg2cj8cSqyLa9kidpRZq8honvxXQhqT3mDFuF37RL8aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65yYCbJCep5vqYZVn1XsmUWvnHhRJtJBYmycqnsyGKipoE8VaWJfFB8AcyKYVsVoRuMqGa5fuwzMDEZDf42Zj67G",
  "key1": "4dKUz9m1VYSMQTkVtHztzidwxEHdXTS9wh3ZxY11XaK4Lbfae172SkPX5CZh36u1iPSkTh7ddKNrqyDM3oE5PrGV",
  "key2": "3pqotYhCgmmPwvHJ8LaAfF1NDXRB1HmAVptgeYEfh5LntKQqDtMe67NDUiwGtaVhDAcF8TEuMDCdiK8LHrZVBdXJ",
  "key3": "MbKBK6Vk7orEWcaWFopPL3p1GEjHJfstZkLH6b4o9cqgtJCvHt2EMc7EEyabRJyp4bLHsNymDmcLq3gwegAnfyE",
  "key4": "5aiWrcchpgUy2dS83cerVoDbwZvAQGg9sPGtKiBi7XnF91ZmtZE5K2pNsuvbnJLCGrSxqAEVx1aSZ4VsQwVmw496",
  "key5": "2W56badGr51ET5WaKNYvFyt7XXpyJ2LWW4fDS2pQ2gYhtGRTfcJfraHw6vRnkjMv56JrnRfzNFJKxeMkZ5N8D6HK",
  "key6": "h6yHYvNemCmDtafVWW1aKFzT3UQK1Mq1Wvj8DJVigkZ1GFgbuiCc4zUYGvN2nPUuvHTH5rpPV7jXjnwtZEkS8QT",
  "key7": "rim91a2pj6cHY9zAUTRDmAPj1xL5it3bzciSh8xeiuz6BCHkoLTkXFsvKL2spnpkDe2C5Xvc8KAUAdkSM4M5t5W",
  "key8": "5BtJjhN3KCxhBH4buUGmd8HPavoqAtKpq6VA7Aa4cDqaLcuw9ivc3JtGHP8QTRQnbH7Nq1d6TYZmSeSGFVt69xsw",
  "key9": "2niV8DKdxMHA5nNyFwZX5v3KC4uDx7grdfnfP75TiXYycPKy6AmFwCqkpD1RRCJF8G2rtNa3JrvMdUGnBWmVX54K",
  "key10": "44qi7f7m91nAXBJxK2VZPvN4ndWapG2JrVJsKMzddnqrVZvN3XmLZ88iVDZyzTF32JQckbzF1m5FwnhCMxD9zVj9",
  "key11": "2uqSY2NxXJhdsZ9EvjwyrcLf1JDKVbwj9bwWUr7kDLCypAGsjFKKEjWBUrZp6nniMqsK3nZfCb5x55Vd2tTQa9HR",
  "key12": "n4qg1vnz8Brbn1zcsBwXVLnjMsbMhscop2qtGCoe2HyoV7qMRwDvtCmcmZGWwjUiYaMDmRHMASMAUcCwqLhXjco",
  "key13": "5C2iiPqRZCywJMmENugneAandF4Ri78Z7nuC2CKLMWAJQb4PjJGTYHYeKXRcXXyLkvGT7yE4LthiZFPx9HTyxh93",
  "key14": "5QAK4LdQGkYBq9PgWJaEURPAxckBP4ETw5vhfoz5nxqrxt75KUzrUptGRqwTFnBwtYDz5ueJKWCfTawE8oD4qJpG",
  "key15": "3jsjAGvsbnyawJqibBCHbsMjAFRvoeo3HfsTJ4aqekFv61DroQcSEYg6rAY7fSggdkccKw75fWgNsqvVt2sfdFaP",
  "key16": "38cjFHKtMHhKh7AgWxNN4Yy8AnXHsN5Rsfhwey2dnyELtzJRVVxhttWXVWczJFdEsfyR3wZdpcSh8L5tFnE1qCFR",
  "key17": "JCRdLvKtVdpGbJ85r8PDXzGpMg69BcU9RjBnG88iJ5L5XUCBSrPztrVvcWmVThCW3zHLtNsSdYMppF1zh98UELN",
  "key18": "5rkM5TdaqCk16AhXmLSPFVCov1QtRmzczFR7bVn34d9za3undwspqpC6GvsGfJkCzKusBEBQ34KJeMcuMzSDEbiS",
  "key19": "oHyrucsmFJA9d7hkMiP7RGEPtgk34dax1QETavJxCVZJtRkD6wALesEAPc1C8L7jXJEK72J5LZ3Kk25mb3E5KVR",
  "key20": "4yguJgbBiGfrBQWqoxwoa6rMufyVU9TvW8hRW1gZ9MZqkdRdHZ8ucyB4rmprXRp9FgXX8xqWqUrXDFoedL9XzTBY",
  "key21": "RsehFXvD9JM9TJJc3QKFpSPHkcBEEvhRx9bZAtAaV4mWdqaBfSx5SjyunrxwLtG9wMUBZ1btdtjbu3uyxJbWdEE",
  "key22": "M68eoEPaWTeKoRfjghRbXA6vtunWZKcF4Kv2h8NR44Cb2QTLDrf2ZLok5XMCJPqmEvj5otjjqwx6SXPG1WqUsQn",
  "key23": "4gkSSjBm24hsd8jPseNoXRFDWW7ZfhM4j2T13Nw2JFQcrC86Cxxx3A32y45XKRVu1jryJj8izEYwNmACvihTHdGi",
  "key24": "drC9FHj7CGMgoQrFcwM7B1KwRJ25A1jkmVvX9j4tqxxZzXP2xuXcRZ5yitfpzobDmyvNAcCw9YwsWXFbqmvHHvX",
  "key25": "3pZ66AB9G7KaNBZdGza9uSYqBiK5VTHTkvjmTHzXyuFEvH9RhkGYd3xRcGrQE8WRt7z4oy5uXWFcGSrcr774g3nJ",
  "key26": "4qho9ue3XKqQms7gaV19ksNsLxCAJJ5m9LkYSeRShFzPN3btx2Xg5wdh5ZHj7HfiztvYgjvJN1gDfjDAuNPzFutX",
  "key27": "5eAUy8bcgaw8zTJW1k7xVgYnigXorc2bMn4nNobuUaz6tN1Tn8KNQZBoXbPEeQyB3TR7B8cp3UR9PKM47ow3ZgUM",
  "key28": "49T2KNmEpzZemEHxn5LcroHUA8stBF6UL2cHnU7HvkxuQ1eicKq6bBWjpSaL1KuoEfZAvNTEo6KiVp8YZiG31M6B",
  "key29": "2WCbg7uYvm8N7fvJg9EwEG5pvtLpt19gPNzWLaCJJYZ8ccdL2e4aWFpV1ASt9Dxq6NZSPhcWK8YCCpM8v9kKyTGZ",
  "key30": "5y4HPLp7P2tCGqVfZ3VgK9zUKj34FLbrkVpMYh6WZMDRsGasvZWHJs7o7VjLS3BoD8KNnvBNoqSQRqhmqdixZoTY",
  "key31": "qwaWCrEWgjm1eaWvxk5NVdvXMiqrUQuQsS3ScPhGuE2Jfmw2ACGb9Cdf96Db64qZ8Z4d3qBaiv2yDcdakLefWis",
  "key32": "34jpK8w33PN8RBPxraaDzMwT73ErXxpv2P3r3hHn4DaisQhmKXKZ988GKC3VK9T3n7Jt6HPZixRiiZFhLwAfitwr",
  "key33": "3wLJuSPZr3RU6XqktaVjpomDh3ew8gn3W2PxumYAYowE1o77J8EjyWCjBjFKXRyULyuXYXyHjVf2RhPmmbfCYzT4",
  "key34": "UP48kd45swnsXZ36PNJynhLzJy8Lp5LXySsQLvg9chQR9FUeA68fjcwmJBrQUdgKzasEz2LKz5BtRaBx5FKvnuG",
  "key35": "2uTRdm82nyzgzippwkYaEu7ot2rMcZfFWoHFX25EoPrfioBWAeoGKxyrtkXvJ3cb6qMeaZgJnHkCn13g7RQ8snYe",
  "key36": "mYnyzZ7AnZm86Hn6rSeqpq1grNRUM31LA7QpmeudCMHW6V2MGj1ujT1cfJCLgUXa5fY9d5rUDkGGPseggRivZDY",
  "key37": "2MvgxjvPTNgu827LJoBNY9ERL5MLEnodPSkY81TziWCR1MdoaVxZRs18p1i6xyB2JDEYnSBdrm3WYS1VYZa1wJJA",
  "key38": "zdPxnZctAxHNxUWm155LZdUja94oxM9Z9qgo3mf3DvpiuHKgTXbHgwxKAexJqxURnLDFEuRefKZ2i6qKxaK7zei",
  "key39": "2DJnoz2ErJdk5okrxLYhZQ8WLhDKHkKU9o2MUWA5aKMJQD2c3rMrraqqBk4adGU3g6TM5wMB2fSHdQBAeAcHVj7Q",
  "key40": "4MYjtaRFx76PAtKFw7mstnXWMtaZMEfxAGspv9bxj2weVmLEzM1gWj9YtKEMRV82Rc3Uk5CBQ8d7f7QxWj3SMru3",
  "key41": "42r68Fo6up7VuXtVvFVrwKVvX4Hzs5ELFS8mEgE3cLgRa7M6LWZLi1TmPrmhr7yDLUY5LxW6wm5un6DQDeJk7ZgN",
  "key42": "3v973ZtQYhBtX2UJHZrGXdoSD6zTDCdtBTiS4iGoZckjBzcF9F18q37CxMxThX9QRGoQYoMnHgwCtT1CxRVP4yMZ",
  "key43": "ngBMRk6Mb8pACnwQLobJU3jhsiZcXXmYFwqBhUg9ESDwRS73zipFboN6P8vPYTQmA9MyigCzgc6pHuaVkRHL4k1"
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
