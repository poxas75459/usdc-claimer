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
    "2vq5XEg9v9wxh4bSBjTKuxhbmNZ4hZyxLZp2p8Q1JfqdqeeVijGgfpqEuNET2GsFjcAcE9vzBNNQ2Av5knpN6niv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32RSt4Ug7PXxCJ399bQkKEt1J9J2GH8YpUt8TK7Lo1Ewz8tUmbdFUSUanedyrpVXaiMfWUiRfGFiz3y6DtfhMVL",
  "key1": "411EQSBErDxniq7GbBnSkJPbsEja8i2E5JpEs3kPBdpPNPoDZj3oTC7EHdCJe7W4MBM3FEgQHugVKJGtkA6WKVwh",
  "key2": "PKYj2YHquhFRgAQbBjSY4aWUQ4CZ6n7swDEguBuqFuhEvqNeDqmDJzvpDRN1akGNBEZunFHWwJvpLSiAvCM2HMW",
  "key3": "4i4ywNp2acTW4cdhFG8bn8ZyGNSqENzjjihT6kbLoVH5yhJeqGxPWtgxdwtN4HXMR8MoQ1wM9HPZTENKa5GcfWGC",
  "key4": "4iLD5GL34ggkqKzmKAgZLAy1BQJTae16KJ4zcxWbgWuVnwJQj9dquYvZG8cjvgByb9VzeSnYSoT6KJcvgBLNrkV6",
  "key5": "2TjWFfsWtLYA8EWqoBfu5yBWLP68ickubYTpGuT7QwwFErj6uM5AiB5ieT76zhHbKpq1E1k17WrEKfydZnRchicx",
  "key6": "5q1QsBYEYCP7w5bS2x9TYqFt2tzf9ws9dSU5uy7UDrnG8mCYuC9fLeRS3tAhKPPkLkJH2GPUQMngMCzvcEpuChdk",
  "key7": "5UVnFXouuj37fBRt4JVWfQQUYsG9LRqj31EieBv2mEonBgabWRZU8Py7ivkfjfbhmnJVe6mEabFhF1mEukA5KiZ9",
  "key8": "2UohM5Dd7JMAuYmRMWGNzsSLS5idTaYPyDX9cSPobhkRpGyT488cyii5i3tXbB452uT2mxFtttv2eEzs7741sCPh",
  "key9": "4mv2QG7Bvr5CVBmkhmY4petX1k4kV55E86EX2tM5p56VkA8KMDLiW11bMjbmHzzsqvwqWqpCkqPRjD9xnUctTzuW",
  "key10": "fVhR8JcZrPpX9qyDcU6psyezVvXwv1U2xKV391F4RgH3QKWgUi1WHpZB4hj9zU9d9MngCCC4U5EHhDVHCCqLd1Z",
  "key11": "WcE7Nr4Y6qTjMcT5iZf2T7aVW2vkjPEW63t7qwxmSfQT4cSmqhcmP69K3i1aW496LoAvS2Q6ZXppiSiGvArv59Y",
  "key12": "2aXwFQEawYu3EdmPWH3dY42SRtmB9RzWVkXx2nsH18s4CvACDJLi7eZPtmWkDtQDVB1jEB8yJK26WKkpgyTtVpm6",
  "key13": "Wm1FxDVhptLGbhrMcBasBD7yhXmUsnNhfmhk6dnj78ThpEs9Fq9128qWA2t7g5vkXMuWR9z3o5ryqgNHjSwdZzh",
  "key14": "3HoGKkJLLpYHkuKUX8HB8pBNG1wrK9fYRVAyo8fxyPm9r8zQxRMVh9Mj4yhyYmR6xpFE4zqAhRL9kRbVDXgy1fxd",
  "key15": "riqMMA91qCkmzm8gpRdu7gL2Ki8g25xdXGpmASsFPoB3k4dfVqdNBExzKETRiQEWV9wNbXXG8ANga5SJtqkvC6p",
  "key16": "5bxfGco5PiTTJVXghSVgi1XtdorxJqv1EjVcgbUwiKeH7QUhuPdZQhd1nirQ9mjhnh66SrXqNJBn41yZDAzrGhCL",
  "key17": "2u4LXtC8cyUd5oCUNfmSmscoZUAgeFoiDK1sEMJ479w5o53A8kQPPhC8ZWEjmsUozLnBdU6rVPjbdAB8SU1PMwvi",
  "key18": "e8928bVDxGFTHdqefo83BmQTagexkyrDLaFHnoAWyACrnrz6AYzdyc4sNcFTPBKeV7cjPQ7o1rQdmwFUzToB68q",
  "key19": "2LNrDwSmLYrXdCnK8vukd6CcETrp9B3Jd59EnwYvo73jotMZzqCfxm9THdvhHUMNbvQ2DDLnRzfRhPruNDi8Dg1L",
  "key20": "2kNeuDPKCb6dBTkVAtFnjaTBZBkBaa9JuPeLE8sw5VLpD3qSgeSyB1hA3PoZyoJUusbceuLTSvB5ccxVDWQMzVE4",
  "key21": "3uZEhmWUsnpBYY8WTiexQadRhQTGL1nKqMPjmunGCRzL4Y58id2wrQg4a96sEYrRV36pvpS5SA3E7B1UErKEPtXx",
  "key22": "572YVhUpDVJK3wgD5WyUtP1ZN46xh6N3YcNQJiLshGspSpu3wzrE6dykuBZmpZqKUA32kU7LiiAkrjk7cxD7cgz9",
  "key23": "rDCcN92ZhNvtxA1dMTmHnDMu5iWK5WSjPzvNHqvsvQ1DfSNY3n14qfStXf3LUBZBGz9iTXdzYvXfh6CXJhSdBZM",
  "key24": "3hn55QJcNNg9zSaS3QnLmEn4ekupU3How8TgfAbHG4sUDQ8fcA15GFMVcb9kB2UTfD4YjmCGuwhGvSgVNtW3UJmG",
  "key25": "62GRa5gapX9et3eWxsoq6yjxgCo99siSPnJCqh27V1Jf6PbMyA4j62sJz9Pj2AMd7HTkkh5KkBQG1tTxk1GUWf9F",
  "key26": "3X7JnL6M7kvJRtPdusTxSsT1ePSjRQd1AiFi1fMYA2C2bGGmZV7RyTPw8HFtGAaGLjK9RGtydBWgNaRBdRG1UKBr",
  "key27": "5PL7vKos2ibxfa2AB7Ztxm4nDK7Pd4NCTD4eLYP6wQvy4nT4XSERYcScEzSiPkxC6CXGadmy5B5nPtPSBCNznGdg",
  "key28": "3rdhwFSjNqA67k7JJzGydKhwMA1iZZEpZq3WcSQ8EqqFMEXxsz9LVn6UeDhLJ3SwGsbHksgrzDxMvJpZsfUFGbba",
  "key29": "4gomzG41X37cVBSffidqsmu79sYruj9tHGqSxVvr4QKQjt3miy6eNDgZcW39jPjKuGJ2Bw5wvrJNhUP4YcKnCTiW",
  "key30": "223bRBXyV1Js2JW2nRTP3YRkpmv6gWfKEfhi1oyjELbK8Cn4mS2EZrzCsXcw3dYmTX865dCPSjtK3LaKLkf7k1Ho",
  "key31": "2DYWz5S3hyBsN1vG7Q2aryyV6uVM5sDEd3Tuf1ueD1mWCvQ1gTHUEZyMt4RceG6eHLPiyDqgqxpHskJavFoYccL6",
  "key32": "HqbHUdKWNWRTBje2XsmunRVTerJFEY2YwC4U1YDGhbucp8Th1kKWWvoS1ngztVtoufMfQefMbuQSgCdwjPD8fkV",
  "key33": "5MTqL7CcbRFjZ6YaTGnHGdEaDBQp6T1DiDNiaJ4sYkSfmTx9eTXQqeghd76zm3HRr6YM1p3gij9ujtm62348eFum",
  "key34": "5JGtNGhMJP89cAqhtN9B3tNHfyipmRRRr1zX6aghACzpsKH4UDD3eNCEy3HRYEujTtizKJ7XuRPdv5KfQBUvC1ND"
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
