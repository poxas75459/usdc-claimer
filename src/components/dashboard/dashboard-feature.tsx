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
    "oXZoAe3gXjp7Soqq37ybLaGN2FqUqeenH9TCMSs7atf66SLQQEqPANsfYzbQ4HykooV7Q3ZuvkRcwJy5cYgUAqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTaFjBrZHDLFDJQCQnR8Bh1aV4WPPGQY9BZUzMNak67Ayio4V3Ldm6UTBgtYApeyzWaVNT7E3TQUCGozkZG3raP",
  "key1": "BDkzmkMQiSuQALC8BkWQrTFvHn7xbetUBCWiiJdZvqGsgTfjZTxa7WkbQj1NUZEjEyke9mm5RSRdhG1XSZFDtrD",
  "key2": "4a6LFsPK2PqcBWTQJw5N56qiowFNmhKcpyog6pv6PUNFjEmJU8nehv69o1noFA9WxTUbWdqXZiYyNKyX6Qd96MHp",
  "key3": "24FoZV2p5rBG4q2fGQuwoG52jbzPQM4JoLTMFeUmSrA3CiuSt22if4m5SyrgBjeaKW2zHBFFJfLNehPNHqnBtCDK",
  "key4": "UQbXVmQTYYaAjk6VdEgbgkz4RBvpt1Fwvq3z44Cwcmeo7dDtvur6bLR5DDQcDatcNKxT333oJ8UHqTEaRoisNfd",
  "key5": "YLsgx1EJEnGTBKNvmeBzyPEiXRC5WziYs3oCQ8wJ1mMhVpsYfsU2PZ3FBpJKewZjRwSUJxeu8U6gsbkqpoCHM4R",
  "key6": "4F4Q3cQvXH32TxCWvN254rBig5tn4DZcF5cf7ponBgjQR2hf2bPKSJYtmZZXziGPcLeFr9usB5RzTTe4TUZtjwXT",
  "key7": "5H8SgJh532uBaMztB5v7iMN7iXDeCAztv8ZGDs6r96Jb769nDmdSV1UYnaQ56JcxYSbTm4mfvSWw1uFGt5aYZmhY",
  "key8": "oNqYqr2vkoV53tzJgDHJSeLYiUr6NPbfQLKA9PU14xqFDm2HQeERvYxW1mLtjz1FiViCgThhYeju4x2VBpt5gvY",
  "key9": "3jbufkFZBPTRrsC4wgN7NJvi2Mhj9npbmYz9zyxHwYozPceYhNWqR6MPX2LTBZAqAPFXVYi9w3QWFiK4ETLHkqdD",
  "key10": "FP9y9ccVjV3fLeMWsAvFtuxU5gb8j4M3Yc3BiraXRVZ6HBjgrXDT47H3TvKkwdkXKfyBgTPtyh9hxNPGYwK8RbS",
  "key11": "3eNEfjNgUGgo55J88KAWbbYTkxce3V1PLtjUfwi3akSTpSBxCZVzAZ2zjVuM9veve8SqtKaDWUBy4erX1tmVTv1p",
  "key12": "46PRW8sLkANUDLXcQV7vqsCF4YzyrLBJwBv7gAkq9CFFmLVGqfifGZH1besVwhwZrgaEZ7585DvGc72j1hJv3u4",
  "key13": "3MUjScTnCsKmZTwYV1ZS1upBirN89SqrYwf4oFaiG2S9xoPX9XgXwNZBZGynbPZsRzZ3WVmCaE2hEDBXTErVe53Y",
  "key14": "2QgVHzMgBLN4pK9F7FZShSqgECVjQgKhVnka5TfLpecBpHpb7CeCgpxLvi9PpTb7WxuAQQhpwqM24aZmb8grGpir",
  "key15": "4MJC1q1CAAw4cQERUuJjH7XfRPm1TPbxNdqHCYeQ2Y1iVWkwiPgjzpXNmGPxygu7MAbS1kwnEC5WXPUZ4KJYCDt4",
  "key16": "xvzspdaXYeKpkjfwFfuf1hW61xYQe7ovMkFxbpUmGXVv5K1bVBQwUjCgKTXmTadMmwMY9R4jbMXc24qrc2NFTsV",
  "key17": "5CfSkPK26nAa2wPrJ9edBKjoXRFaMo2q5i42U7j91rXuPxGsaQjUzutYdt7xVQ2CEExCZaj3raRLoayxh5RCYyTQ",
  "key18": "2S975URd2VKr7tt7fRmeTa4A9Gp78mQ2pspUwQ5vNCvGLACWtokb6UfgeqPdEzHFFWeiex7egTCe7Nmy6aajQ9nu",
  "key19": "2CuEXJkvTa2cQzdersQm9X3fYFKX52VeduNHWtDGfs6kS9GKijxNrXNR774sFNqgevhD3SgVkJVoQeXY74KGtcrT",
  "key20": "47cJ9FBnaJsPKnHyicguQ8VYy1vzkKSgwbck2AGkK5VAm9DWgoKce7PaVYudw9ceiXuD1yD1nCvEWnDop9TqEMvX",
  "key21": "4EjZKooJMqCbbA3zZibDRBVKpCVUHJg8ZsYgkg7vXnRiYpZ9fas7x7jejkfEyQn1HqpMuyAQMSHLuxkqmgPGoVG4",
  "key22": "3LWv5daUS6b7pKzRntLHChTC6hehJQT2DUBhLowbvJMANkGS4i3gyVAv95syvJ23dKxwZkuSZripPaAdNHPv6E4z",
  "key23": "3yRr4bKn5HnFYNzW7f1Z4BTMNQMoFA7FKqRJEXSJtEEfikazCypkHHEWeDzhaNQJYUqYPFjZu4d1t8sKjSeYu8Pk",
  "key24": "446sM5MPabrtscvkvEEeXar2xoHqVukBy7xUqTARpaJGcJdhgGUZTQ1RcfepBMFHPhyh1oGqXFxAp1diCbEw1HpF",
  "key25": "2vfa2DoZskXx2iKjSNJwFJik2sPjgecPAjNrtf8qfcx8SVt8a4UeSi42qZedUTyw2ocbSWzdjpz4D62VxHqdtbkA",
  "key26": "54k8r4t1iYUsckAmSJ7YDcf7RExidJTFsbr9puAKQzbGFNnUbebPT5m2Jk6Lhw9tXqqcDt7WB45nq11kHSs7K16k",
  "key27": "67KsinhbBKByvkAxkjTzx4BAcqUPdXrnq4nYY8mfxYYPEA87PWcfdVJb87LM58bMbrP1YwoBNJAvPqdZCH86h5uq",
  "key28": "2YUo8xLQmAX1iSZxQumm3bBX5KwU1tkuFV7bYdkXfwBqj61YNoMNkVZzAnGJNBd63hA468MCG5e13t3HGJkX2eva",
  "key29": "24adkeA5zoPs7x4CNSNy54Lp4t98XwYRreGsXL7KzYpyB1bCa7ZmdkDLoWCSwwN7b3SgSmf7rBhiPFHYHFgrdr6S",
  "key30": "5xevirtEfxBLX1uey9b1bbKGrGK7dWK7W3QoeR1CrFSnz38mbbkuJSGpa1kST2gPGV5jJBYcrfydHRXVX4eJMqy3",
  "key31": "3Xig9H3zCCNygtWbtq37822C3JDterbKEkBs1DA9UrzJKcqUHk4FAASmwJ61UQrHwyzRwK8W8zMxtk8wmUMnWTbY",
  "key32": "3jrr6TBGdrZsrQzQ9WZobxtSTjYekhihaW8tpaGNDArHxgTVRpCL6iB86w4YekGYtdyKB6fHG8N6vXQcPAbGgDTf",
  "key33": "2w6k9sxUBJgmMtbKU2UuVVU4qzHcQmHdTfKGMAnF9e8XeStU77KnuyV6C6MLWYhx8LPe9xJrAQFveUqukUDMrcxS",
  "key34": "53DBhBWBr1TPnkkyuiJ3QVeRC88KafHpDaUTyZaS32BBQJQdbeSZmNgbE13Hg2urHrvse2UfBi6ZxGVeHbARmkdP",
  "key35": "4ifDcBdAcXw2vM25GZE4LmnVKfTxKhvZZXyPW7Wo16dJndEWQy29d9iLJPiFpU73CMLHwzHgrkJRwC2CcbdEoTmw",
  "key36": "5cFZ4kvKb2KUczLLDoJ8N8oJsozzt98nyonTdejm5jYSTgKuh8K7fS11Cds8hPcvtGfrnfDAph5z4AqyuydG15pm",
  "key37": "252ZCzN62PXHu7VQmPmX2p2LfU5bgUzQZYBqhtb9R4FrM1DDa6Lym8275DCMvQB2iYoNxqExVWPvMB2hFr49WLoy",
  "key38": "4ZKe3aLN5g5Vx8xBvuXUQ4Mji8eXybHRBnzq6E6FAZJTM8ZaWKEN8vWjPKURd5zZp1UF4YcCynrxhjoMUWwA5NRq",
  "key39": "35yhXzAmprHs8V15zJF4TAoqtfRC2TLdNRjqaTwPYN7GZ7W9of7PLr8NPFhsy7KQr4fbUaA4uEHZFDJsEiv2Wnqj",
  "key40": "rbZoj8wpVaC6TjWzaCtrSqu5aBbMZRQzQDnLbqH1NJKD8mFoj7yS7LhZ4ay48Qu3DSgHjHZvuUEBXoipKFBEnr3",
  "key41": "CgS3dzPWgsGgtGGUXaJRRrZSsGWJ5Y7mJJA1i3hhANNrBYy5b3W8EsG9LuHZTGD4WvMzbkvjZeYhoSBy87r76uR",
  "key42": "4w2uLaNrdEM13r79dNZ6pU7uBR2CMcoxAEXcNzZtPWp4LvaXNPMhN7RApLdQZg5sWwF9jwrdzTA8QrRJTncCcphR",
  "key43": "3QPqBk1DLq8mES94XEWm5Y5tmqpcXEwg6H9hxcMRHVEnPXojYnUHPuxnGsK3sXdtLPN1Z2jp3mCVDhRR9zS1Mtak",
  "key44": "QHNhfetp9CWhjzsLV4bzjcGP5zw8ZceF1UtgwX1SMxjknfT54mdsPCjxmJ6UhDL1ds568ux6yqRcY9UhEHLbKUM",
  "key45": "4bSWQtPWQzzjC3oBy6J3e886Lt618aac96EePzcgBQ5X3tVxxDdgbEGPQhgnxdgf2P29TVUff51duuCy5j2Ge75m",
  "key46": "46GaGDRWSjERL9M82XSiaTDc1rFi11Avy3Cv3nXZg7bbLbCqVZZ2nLC8XJZWPmEZrkrbZ8nHnR7yiCQHSmrmr6id",
  "key47": "4TQ8rQvv4Bs8zECkDc7iQorAtMfGtkQe1uqgFYVCkFuQ8dsaYE8ksSuF6eaTozvb6DHCdoHLNW8Rex21BGsFhFFN",
  "key48": "ZX32xDcXjKruzhRQcVdKAepMqWa2vxTKMHLh8cVEo9whF4RLNy4K5QPkSo6ewTmA8K1oHnVcMhnUbBxyvfitMkH"
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
