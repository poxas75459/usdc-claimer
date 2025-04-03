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
    "67Ag4pR9bKZJtZTWmMGoW1HQdXFPeURWJ1nP1aCBsRHM3tmQhteWidtmPqvoFGcNKvVJdeAuXWwybyJpkx9dWDMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nho8Wd6iqDc1vtwYUS8pNt6W3Ces8X1MNSkQWwYL65SjWwn6Dy6v5Cc5RkTKzc9ZQ5ov33p4CjFnEh9vsrshjCr",
  "key1": "KB318Yb32nyJPGWeAkVQM5oTfcRpptSLcH3Sxuh51D9s8MMGLxP8BV9Xpx7GKEBoVbhRirQrmTCahT77ncQ6tBs",
  "key2": "5nt7KuVyGd1DwpgekyTUVed8bLFdG6Uozdb7eVNeWP4cSysiJYzthSANvb8CZNxY5sqADhR753VvMCmkiK4Dodq1",
  "key3": "5o2AnbmLqqPLjRLDvUm5SqVg2Mo5Ta93Drf1TrMWCjs6YYqierMthHTYT2YBbStYsMazSkjLMdFJWu6xL4197EDb",
  "key4": "HtSyrJogTWy2zvfGuitGvVLDurjMW5JZKzU4AQez3JEgeGQcvAiUiLRP9GcU7TgnqgMyreM4rUx1TgbBpebgtce",
  "key5": "n3v2EtCG2bYMawwZrJtUXcmiHPRDgxoApnejV21QLEA193CEz3aNzzABS1X67bctg1dNEr8MWMYPHCDtmBsNsF4",
  "key6": "5MUiPvskLAVJzFhtvF2u6DJ1Wr3yLkeV78ZCHAHqgHdWHDrn8bP8kMSdWskKRjGjZZFWfQjPP7ig9bc3sLWgjzZv",
  "key7": "41J7NCho1RW9kZmJfZfh8FDB165mQ6gnJzqptUAMBrRwrk8BaKfJj7duu5CBdT7tK8vsAPXCR2kjNFeiF958befA",
  "key8": "5Xxjqsb5o2egcRtfFURv9apNFxtz6WpB5kA74Rj1eYVFBVhUZNoHKx62gn1R1EB9sJ6TA4gUW1iZ4tvTz6xHpk28",
  "key9": "44j37RxQGZQ5TJAZdoZKjv42rwVhn1ZyytY3JR8Y5W8bYEbJbYX3rrhkfb8maduXQTUXfkp8rJddmWavCRrvyqY8",
  "key10": "gTTW4xTw2YrfnEGXSzPjpQkVWwn8KyxHjeAPkYrvqYDpWXQxj44tKXGAQKcJMK5SWZhhk8Crnc6UD2ADqmeqaZc",
  "key11": "5bvk1GAqA77Y3R2H8Jufozi7CzgYz34CshugRb48aBMiyWxuPvjoqVuzxztGG7qY5xLcAGAYnzdZBMmUrSksuKJA",
  "key12": "4L7Fv2vqVU2bQBG5Cwosn3xBB5NktrA5zKEAEos3fv5XjVpiCRUwf7JkCVFC1VyhDswTXhWsmY1ZCa48nk7L6uyz",
  "key13": "3KLpSUrFd3oLwBEtydWcsbPN1A6eyinq2XLDZhjZUbzP8q79XK5C6YbwUNCLvNcwFFv43c1QiF7KGdvufigmp3q5",
  "key14": "8Xsb8soxeYqTXUnbHAMjGWGFA6rUj7mPWWTDEoxVCD8fZ2XZMgtmLVN8Y84b4rgUS7Vh3ogGPTreL5PAWtNfYS3",
  "key15": "WPHC8CMoEj7T5TNkZMneTZwAMJTMjoVcT9TowK5zRWsMTo3Y5uivsk1f5PEDo91MekkSBsqHxCd8UzvnC873B9b",
  "key16": "3r5FJfDApL2SgwR3fpqTibMiMK8n7zoxuNYnk7Dj2uDReYcLBFu6knT4gCLcWWWsp2chHiMmZJi2QFCcVCFuK8ej",
  "key17": "2pYWpdkgZgt82KTge4S9BU7Q6coaSS4vqybC3zkRJBRkwmPCL9cNEESPcqhMFtQP7CqdNDbk9MkPf32hznqtkYf7",
  "key18": "3tTBytVcbmyjVLYAqQrtKpXWvX2kChhf9DGt96BbTtRyHtWBgmSxrLT6FA2RUDUzB9goKBq4ciqq5MhZLfCjniDL",
  "key19": "4EMpJ7Miu5ebL4bspwBFKfteTP7UB3jnvBNy4KL33WL2HhVjh1nCiMX3SnFYizZjKM3iUg6TuX9hHtiYzEaCLVwP",
  "key20": "67gp7BPouTsuGPSTuUSs18jcTYe2R5gqPpannK7b6q7DUgmEoG855MeGUrgiZd9BWoHV3iFivZ9EpGDxTy3u5rek",
  "key21": "5bLosDkZSJJNsk7tVdsYCs5f6DHr312h3PUmtKEXfqQQ8zyASpENgnDec4MuFptSsxGbSUG7XFWRUNi9GvWdrdvL",
  "key22": "5emfmXdZEjX68vKYt2JM4CMxWyw7ofcfHBkhztK9gafcgEFToqKfUTvgeLx9RnozXV6udHimKsXFBygjrEfXUE92",
  "key23": "2asvafygjrVLjKu4uDSHxnX8MkG6EanNPT7e1iuYbVW6TF1stJFA6rcnTdUYLWXrZDm4NkCCmrAwurpTYtVwQsmG",
  "key24": "64ExDjke1PNUvbDk48MKMWoKXAyt1For3d9eQjnzWisSzBGV59QSJ5uK4VAKo3Kjfu8x3SRMf3eBuKEGRtC62J57",
  "key25": "3Z1eCoQ745P22rNw95GfHJyn9PyRcV7WZqKAgS1XTnsdAcQMgwmLQjp2LtQjJq8zMvrikjBfMKe1fgyuEYNLQsie",
  "key26": "8dgYhGKrYtbFwBAJtNhxTh87j2nEk13b4XANGQidws9nSn976pDXVMUWq7ncwTTAwTJ3kd5z66BQnrYnJuubYy9",
  "key27": "65ZCoThTC9xzjAWfSRFC1mLUtVuxZ8KDK8DdZNZX16bdY32CNB1v5ZEu3WrGrSzdMfXwVcr2GvQ5mk6qZKpZmNzP",
  "key28": "44DLWhVLbA2qwCK8RtbhmmyLzpAkHA2J88F5eXfd5pnTtM9tFUSumXur4Dyppcp6J4oMNSQLHPZHTRL5d4DaUmVY",
  "key29": "3Ss573HWhW42ADjCK9T749FWgnz7qTL2fTJEEzPtZoFabDq93bUpw185xZVYbEnnTA89ZuNisCgHY63D9cn499dM",
  "key30": "4neGmPWJs84Ue5wCigTFth3rH4sdqwindbjKMRNdfiMT7fEj64BiejEkawj261bGasbUjYesteGJ4pasW6S8psVP",
  "key31": "2FnzYK8Ez3WMa7nRj3vbZhkusdn7QHwe1xMrSiBXvHZ9Zrikr4SQKNt9HxfRYkAoKVBrEkvKQFuBiU8XF7TKBRan",
  "key32": "4dWVXXMM3wgotMZUxZgT64Hy4qxb9mJbTtycaQViZ9QvpdfQk9Q7HjQakoTeV6Sfs33ukZN1XkJ7ESvhGehaM4Xf",
  "key33": "63cZ3nFWegi8coMwhzcefdLRcpgME5V3HryNu6GFAWeir3fMyHdsXT6qq5NjfNFrip4eTCRCDEWJsckrLUiqmQG4",
  "key34": "5EnncAoKWVXUeN7BnDyjTQCUARxGiDrHuboEux7wNS3JjS756S22aKnYNMmPY6dYJW4t6Gk8gPNjp3Pv1dZ11AHF",
  "key35": "HNeMa3VK94uHNAEwLLPuUxW7YsnSkoCccq1Zq6PiiCcRgpzfozUxtr2FMjQ5dLPcYvgyMY5XEpRkm1UaXt3kwCF",
  "key36": "3vVo3c2f7547SdVQKKNbbmqrN46EwFr5ws2Gm7cT73eYkyzRaSR1YQhS6RyN8oJEFncxHwzBsnz1hoi9bPhLo5Hf",
  "key37": "3Xc21pAFm5W2CJzKuc3cCeekHZcr9kP51bXKmEQ8zf82Lb5wQvc58VMJyYKiJavQ9g4nxQjQjPXPgEvGz6vtXqSE",
  "key38": "2NT2DyL72jNZ49MtdM4Dqoo8Nm9LxAqvUjUb5H5ixUrjcYesWU63uYtPjUqkJnTCsKL7ixDL7R5z3dfed3wjjWAf",
  "key39": "4nipWUgprqahXBhDgqmk3izA3Upfe2VwgSpi6xDBAPeZKudJn8J6BhScFu3zXLM5LXq1wpGrYJ8XzQEpH8keCh8g",
  "key40": "2fQTkj5qkyNfMer5kdUhuYw95Yt5JnHh1KhMqLjHcaJGkZhyLipawie4oFRwQk9WGHWdG2p9ixV86yUnTpRAJFve",
  "key41": "3QoNuXF1uCUd64uu33DBfxooH9MbzgN2ZBNFhSzTCmrwo2qbW7zj7UHukHrK1c5GUVgTCqf2dyyS1MoVex783WMx",
  "key42": "4zyZadE1FtZtStCqWNaGKKkodQKfSMqyRZVJ8D3Zyc31XpFNvbVaotcv6k8rnhM5F38dyCQbXLFdoqtgr2fQnVnb",
  "key43": "WUAjwzrJCwGCo8Xyyguzp3TgfF9A8h5fc3gUprzXAwkdRq5h2v2WYU7VJYVwGMBn8wSngwAFhhwqeufGNgpFXva",
  "key44": "b9d8X63DbasC2ZTVoJ5SWF2bKqY7SNHka1CB5RWFXedWKZipokuXSqBucWzxhthsR3vDTXATYQ6kaxHfDKPKdZz",
  "key45": "3ripZTkhCuiYSaXWUhy82A7rehFdbhUJoM3o6k9XYCYRb6cezFYcWcD5dPHpwcJgKjn7UZaY4iVUZqLyTEEP2Jv5",
  "key46": "22nLmuLshx4ag2Dgr416TKBMdyhtYp7bMRQsus1AmKkyaw1JTAriQtHeBnP8WWtVBW8vsFrBJdnJ8svpPcNn3Y9F",
  "key47": "3RaonbS6yDhSLDBKHYjNwSjzRzqKrRjdWtkAT1SPaP3bsGqrungbwJqXHF8JxkVw89BECrYEGau278yjExjCjN3s",
  "key48": "2SC21JxNxbH34SvLoZFwE9dHfzdzAQNBpfQKqNNt3qKE1Pj1rnED15txS1ypnZCz2xkASWXV1QNR5oRNKNcQhCbL"
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
