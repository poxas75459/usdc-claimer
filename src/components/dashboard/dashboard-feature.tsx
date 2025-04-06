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
    "2XKYsV2ciPnDGRyzLk8WWBFmxoRgSZkuA2Lsuz3sM9tJ1ACXKTJhHGyYPZDE4kv8SE2sjwUqyrJP6PpoVEragpGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QTSouxQHQUx4fcM7MykPy7azeLEJpFuk6iPfVM1fdWc58rK8LfhX6CZujhQNa9T2ZmR76dxqjePXiuVqZuKJiYH",
  "key1": "53cmtetyUHoENQKeVZJcZXRTd9JcMod8ABZDW2mQuc9sT4QHfYnZPfEX1MeWzHHQrrraviSFrDeCQvAwMmPQuswk",
  "key2": "3E7EMu1UsyY2n9ZsRwx1TepZhu4MJGUnRgWANDzP1z6EXwUnyAdNAeGhPn6ZRJizb6CRhToDxJEj6b2kQEyL8wEY",
  "key3": "5txmRUw3tPBcC55sjiSmuT96Rs8rakcUGKzsA83oxR39PQ36qBozbVK7DQFCBABxyHPmKhMtsne7zNzp1YELBQRC",
  "key4": "3EreovVvddfuubnNVqSJr4Lfy7FhixPGoyWhqZcnnaQH91pgvJ8HrVBPq1vitQpKHwmnXpB8UoY79CHNNEMvJbm",
  "key5": "5ZSRppYjknoVSiXJcDzLyHqe6caXQqKMTqrfj5j8yqxN52o5ikGrshJx6czcewKvTcJkGpgCgEeanzQD24qrgr1V",
  "key6": "5G4hsPwmGDgu4yDSFqSmBE7Bq5RZQko3fmaPXGLf6q5yYe8Y7bgMu4nJkZa6BWKQu8BjcDBLe3zAvzrihBzGs5ue",
  "key7": "4gGgG9H3f33RpfP9oHTJu7knZv5zCvm6FhfVn8THFjpwEQ3WjcmtMFS1YDETC8mJVj7t1LBMwJcTdVHACEKnWD6A",
  "key8": "4mtAQAQsM49DtoHE3Z1DSC6sVPiyCbAENv72Vr1pGXFP8rMpv4wgvbiXYFUiiHMogajjpioBzTvyRJoFBwphPSTn",
  "key9": "2aWHcBkoGyws49uz7BE1dtmZE55VbELeetF1NA3LoDqX47Ty2pszzQmQn8zXZ5woeeMagwQHoEx6oJgEtE91j3xB",
  "key10": "4a7YYjpB3yBaokrSnPz2afUfbRiBnqBVm4QTpyisZ2NNYzfxPYSgpKXpafsmv29VqWe4zPT6Zg7fX9BTbcathsU5",
  "key11": "656WrsaPRW9AhUTntqoWz8LoxF992q56ZGQqb4vQECw5ChJujr12zNYHYKobQGtJP5zkzEEjgRQQMDAAn6HU1JL7",
  "key12": "2g6mCcdc5EXsQWr4zfU5MiV1ioAx2ECc9zfThR733nY5WB8QXo5Qw4Pde41hJ6Ux2tEMGkqXoDW4T3s6trF6emCv",
  "key13": "5Jspz613Nq3X2ad2p2RQ3snP6AkQgfc4Dp64KynCTGrLGHyvnUhqXVJ1K8VQzixoHMkYRAaay1UGhHziGqqicwD6",
  "key14": "38XiHQcAVMFcZMxcuBrhg84tMrRrqJQNL5zjc4tyfqFkKTyAjpMarizy7rojGPxJigtnCddC3zqqhAw4c9g2ke9",
  "key15": "498jpGZVMe3dWXdgy6GZzignRWWf6wwrtQgmybLLLz8dZcoEekJqDmHir7BhLYhxysTnUNdao1fyngzzSWHgHGBt",
  "key16": "4ppxZXtyUY1oNaXJND8Ztf4FhbSQH7tjYvdj8cSFHsut1nAnEbPSozdjBUyd6818DPbemYCDCHAadCP7gJtZ4edT",
  "key17": "4poh6D8EeuUjdwzbVoqhmmZ2wTWE94SK9tijRzXVGyiV9dBcR99uuVeiApA826KGbdotPLbXc7fVgcHL4s7PXJ2P",
  "key18": "aDSdAgagztxYivn52HqZGeK1eBZSpac6nvh4cCYftjSEx3EnzGMKiqayMcqPkRvPpeE6nQtehKnnBp1C7vBmmyE",
  "key19": "3Ye5eGSR1YbhTg9STU5xJAB6aJDvtkWa37tBgdd4WFCzNi5DWjApZiNd9qafyAGnNLUNTecycroa1euuCZmYRJ8Q",
  "key20": "5NbcetayUKNxopKxP5SYXPEcKtXqeoeBkrCtMXxefMEb57eGtCCL6sq2uzXDudZkMoUDwhPU1oXLr2nbNoHjUZqU",
  "key21": "3EQf2wv7t5aPkVbcccmbhcunhJc1ba5gtF4FCcu6etNjwYEMhPys5k3iJd21xmeFLy1CTeAP2MfNSFRvtU63gWQE",
  "key22": "4Up6s6AQsmCVYrbK6vKBSc6pQk4vGML78Vs4sLGeow96JgBgqbiWZdYdj4UysDbAtcmPrAagfV9tpKDFgf57LcUU",
  "key23": "4PS6aVvbzTEQwQ7rh9AFG37vZEmw5V3GtULsfyqKbjjcnYqvXniJfK9YSrfH3UQHGvBLTAQVaH5ttXdJotpth7VC",
  "key24": "3nYr3YY4uwwENT1M75GqHgaXQSRVusAC6AjWGemfTfftefstqcTzfgV2xKpB7WHiQyhYyBgZVbeSxBq8groHzwDF",
  "key25": "4SP4Dtig77vzaqRNL9xV7Z5skPCHnHQNj7vSc1TcXTvJQoLX6Yrv1xawLLJeKBoSWcc16Maa5cNLqxDC9nVmuUvv",
  "key26": "4S5YJZwgfv44U6KW4GBtsuz7jaaML6zCuXHRbf1YXkQx3Hq3qQ7pds1tCH4mpeZbPtz9n2H8NbQ2CcFawS1tuoy3",
  "key27": "2AEi7bsF9WvjxnyoVV9j1D9GbKgJuPRiQ4PB65wgay4WnRQTfqK7F2a4DCTFs4NGNkcmDXeaSkWq3dDgHmTif4vm",
  "key28": "3DTAuk19MsTE3z3aAm3dc5prEfbcFBvRipXGZdC3CVARdDXo6eHLtuKzm1Vr7BrwxWBq9ZM5ZDXNZH9J3AY9gkbG",
  "key29": "53qqV5aKqEcoSPA6Hu6bqC9zKRrt1uBC1if6pjJh7Lqr46cxfY7YtnEyLw5NnbrQseFSDMsUVZUE2nuTW8oQWjx9",
  "key30": "63VBV3e3xjMSH96dyrdJf1S9M6zPjbG6UhAgXsjxXwgeC61yq4B7xDH3rTDVRiq37kcF2v4NTKXNgxbCXGr4Zvrj",
  "key31": "3yWtXqCmiEGoqqJThVb7Q6UwbhDC3m8nZbmqL8u44cwbpqNrvTLRLJ4EKWmuPnFFcBsr8Rj569x1NoCkW67BaFFd",
  "key32": "43nm61DvFEuECry4Xc5gdhWAEde4nG6GgtRMYVzWc9pSdVJ6PFNGn1NjS4PoMKk6Rx6MT2EnrX1C6jjc4JD3HZNu",
  "key33": "3dDzN2tBiCTos5q8As8RTegbXoMKEjXT83qvf9rCMyJWrmh5pXj5QVNXd1LNG4eGPtL9JZSYy58PtxrnhMbwsCpc",
  "key34": "491VAPUPevNXPuftoE7trx7tpmBBjPzYnD5Njn3tUUpcKcKYKeAQanoZwtowwW9PEqRZrZAEBsWrqNifCpKm33a3",
  "key35": "3eJ1cHi4pQRJKUdia7Y34tC49JBZXKxPzyreWoNVYGLYDhsw8bU1eRVZDPahsVyfwL2NG6JpZD3PCbgrzNYCDx4X",
  "key36": "3c7CLUT7AUmksZHvt28yFUeifHyLeLce6asJW2VhfCUhf7v6wZ3wuGgCp93mGZdfsNszv6Zk3m82C83wp1DjdHn2"
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
