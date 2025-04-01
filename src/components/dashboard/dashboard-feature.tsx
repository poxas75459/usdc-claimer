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
    "52sYkpeUotQgCGeGZb8E4GUzLB75jWuXMsHAjNpjWxWnd5XtU2KrAi35y2wKx5NZc7afWYKKScPjz76VR6BMvvbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNHw3HVAQLTUEqbi53aiPwBBodHX7PbbX5WnY8jDbuk2ZLve68sigmqxCdeLv2qXHBdbvHwCiDDQ4PRgbPKzBRH",
  "key1": "31hkJzHA4LdFJQ3irRu7jxSFwzZ46FQyii1XQaMXLvokqfsXmQAsjyPgnS6B5NJcwb8Z5M9GgE5DBy7Xfpy6Q5Q5",
  "key2": "4Sg4efbFDMpJUuC7yhinCkiKEWLzvdh97JreBC2Ra7MdVUYYqsB6CMoXetBpm4AwymWd1AsdJ6KWDdXcU4bxh87d",
  "key3": "2iBs71hkMMVDp3uqJ61kgCirx68fgbMx3812Xk71gL7jZsxyGvPHoGPmtu7qTCrZz1QKhgJqpK693HLapE1EjvYy",
  "key4": "3s6oFCrn22y1Ws158Nz26wgsvqj223wjVyGAuyQjfHGLvLUbJ4JSztrMRcuYFZPSDVrpg5NraHB1YswCVcyzTKWs",
  "key5": "K7s6zkhVsgppSoxQitFWXFazjWmT1xTc1RYwckm2LxMSSQrFbpwCN2wJY6yH4CXPKD3QTLR9t2p2UFH4maGbZSx",
  "key6": "2FMRYhuZp4p8xRfF4PuuqTf4YCYdBJERNRPFxB3v1gv6tgiKHmuoo8wfeLCwJ4xGRyNpcvPSyubS7RuHXxwXMKjo",
  "key7": "2yNVSQS9nSa5Pi6MobStPSfd8e6HQsjxkTnPQcea8RrFiJpkaEF6MPtBShs47n9ziWt2PK9FD6b1FUBQuLMtyUZW",
  "key8": "3oXjw85y1imMc9qYUHCHrPHYf3F3hhvkHEUBnFqeuRFqWwmSfmjShsovQN8zzjcCcEe6xXaTAMzhSHNWkNQjNRrc",
  "key9": "3FpXq2vxogj3VB7JRSbBvhuBv4v52j1QgjxpychV7TXecv1kb8Vepx5YULrs1jKfGq1RsRRZJc4ZtV9pahZDfZdU",
  "key10": "21sLy4EK9kHQWikULRhySCsXhgFVmSueyijV8kADUq17PVDJhWnQ9AZZCh3fF2tKZuHFc947HU2Y5RifEuEbKZpT",
  "key11": "3WJarFtfT7Jm3ZCuamuiLGAPZe7PE5i3tNgMs98ojPjmKfSVyk49KKVw9okQ8PaEkshP6Fni5PvLpKteEcTq6Hq3",
  "key12": "5LYrYZc2b18uLkvL4v8YX9wkrVNaRSYSWFRAVBsVt6kdBwWSSabwAFWqCSrBThkeoL9e4B5YWp136gAQiFxHxpvG",
  "key13": "23w9R4wUssnrTBzyMR38x3qcCxMd8hC8aKyeGEfw1MNWahNgoWF1ikFduBUbAiKEVEG2dQwUonHB7TCinSbVRHmE",
  "key14": "3BS7udFNAqpUoqaS94rbweAydgMGDn22FGKfK2LTk1wuyyyyHbW6C9eJ2PWDC7WfRm976SVoait1FFrnNFo5wMvo",
  "key15": "5BDo67nZN5fW2zrzP9EsbRh2Nzt3YRNUkDRtgwon2TcmqD1d5zgGwBB5F9rRcfXptrg7sQeVm3gWTG9nfG3xF3Y5",
  "key16": "3hFy75gcqNxJf93kGF5Zi3WusFQRQHpkdcvcbaVqt4oCRKREpsury9yBGtpsVsdgBVM44FkPuRaT7dctBZMiBqZy",
  "key17": "r7gyyWtp3a7TYaMZ73vMKjbqUqtr8xM6Fh9sgUeJBvFRKRJ2Fe1oJHcrozjTBwBYSiEMDThgkztuk5QB14y7arM",
  "key18": "311RNk3QY816e3aUMWAJ4SvamWtSx173MhQMWoUe4LKDVhy2xh2wZZFV5P9WRqdUtNmqTD91sktt6ncsJEFk1xdN",
  "key19": "5bqPe2bkZCYLAU49CkTCjjhg9aVqC21QMMqjjZXMKvkRekX2j3GLFJJL7PuCcj3fmg22X76mAJhYNHkrJKDEeJXM",
  "key20": "ZXE8wvEwje5JTagQC2N1PHowcEkmPu8nFtHwT6xR65hZ5ywxjrzhTaLfGe7sPtQzYAhubKLnPLntdPCorq26zVw",
  "key21": "4HymuSwwE9v5i6r1RcAdknFEkPtbErsudepLBtMVvgqocAfQ8BypJ6skSdJrnamGz9GtU4tsvfLKZHwY1EASNhVQ",
  "key22": "PHJbGZ4c6Vk5weFs3Er6h12NqXK56ensMKVKDKjuZ5gHGY3hca5QTYLfWK5DkJw3dQeUeDDYNHXigBVf3p2icuN",
  "key23": "PAsUrQDtu1KfYSBK1myy9YUaMQiipzgJsE48EomE8NFthQqLjXe6YsNGVuZNN73cBZ5GnPnEZR4vpvKCwqG5zLY",
  "key24": "3AWrHLn3dNZHSPgucq5uBrmCq2DRGfyKLjoKnSX8qVFek3i1T79GVbuLpNB2bPefkydWpMJQRT4bQWQPSpD9UdnF",
  "key25": "3XFaR7zsnrRJaa9839Pix3KRtPGh5DK151o567ghCLXEaSyF1Qso221zWJaRWhZLwEkLyRJDCHx5shyFusi6d7hA",
  "key26": "rKGwjgNFaJU9QZoPBknABWcBBsdWugZedhgMvjTCW4JAiJPjnX3Mu6CfdSzKBiRLFPxb8VTzeaSNL4U2Sztxdgh",
  "key27": "3P9FGeiguCct332pzYKWYZaQSq4MyMxaVYx4ahtmSPXKCmTRvGkgBX3zvg8WdzzHQJxWasbaxHUgrQnqHoYurKYi",
  "key28": "4GVNYtrYdvrTUxGLehrwXVBZECS7nMjikHDwxGTf78fyTrcBwWPz1tg27HG9ART1Qkg7BJSRLrkLmB2foDTEdgxP",
  "key29": "5rSKhPgtzT9pHKF4ke7DGaxGyf9rvB6GxyazwuzVJjY5J2x6UGPtjjgiyPDRZtNxvdX2Df1sLoJuJxPmv65VhjoJ",
  "key30": "3g4pjiwu9D6USRJjwS4G8wyxxJuFRJxcGHwTGYCeDkQbeoL4EoBZHSvYqmybXqpey6qGAbvpYWPxB7qBYf258Hfe",
  "key31": "2CrikUmvrSTSE97gHHu89pMaeU1niW6nFAZfcPF6b9yDHgKVSV9TUpRre5vZR2FRT9wPmKRj5UZTbM8Rp4seGAHG",
  "key32": "2peatW3km3iimWzLb7yJpSzpsaBrPdWPJgHZkiFFyDAju3i9TqwWf6svpryvrFp75m7waxooe4CB9vBH6PN6knDs",
  "key33": "63rijBCkNNi8m38eziZML4qh1xGCKzmvvacVKnkTJw3nRk3eWamkcdPfqdXF4Mh2URZgeJReu8sEaoGimS9tcXmm",
  "key34": "5LvYYy6isHfw1RFcAYPqatLrL54TfVv86SrMj2bjPAr3u6jwZM5yMs53GeC1hnLrY5p4yda1NE3tBiMnxCn3cxsR",
  "key35": "4r6e31vJ3PycyoarjKqSEmdDMy7Np3o1ydr5VdSpiJGtguFpVBvNg9uaJcfjdrew8HJMkyxMGpTuAw8vKps8UPmN",
  "key36": "3Ztiir6WraJbi3jNp7B4rkmSkSXYpbnbTGFL9a3UTfAfyZonZXF95skM6e3zmbw1nSPUm9Zsw8K5pMBnxdk4VKsB",
  "key37": "4gMYmm9pqh4M6FR3W6squhD2GHQobzoJ9j3iHmAE9oXMhCoF4w9WJ5PxtkBJNtcdgaGw9BZt6M3T7jzsU88UMw89",
  "key38": "46GFrdGfb9w2CDqyieXC5EjHyQeDMXAJ9qpgR76egrYEAVL7ifP7WikkagFRuH2krrsxn7SkBdRTvXcizycn7VJC",
  "key39": "5HbTU6VBhzdPxWqf276vGk9V2cSi1Pdt17x1Xtb6JhkM1TicBp6KS2gfKRDnhsz2SP5vqX8aWzaYjT8DtLrZUTK2",
  "key40": "4vZaeFCfSonZxyVcB1A9Z8jmcZWevA9jiFbDhMvJ9Hq67QZXYAQo2yFmSywpDNnzC2auXaNuh5jk3m1A7zpynrJL",
  "key41": "4uy89Zdd7vbH6x997unfTWg6zzLHbKJGAHCWXvcZtB6hdUZQH1fg8hmMutN3mcZfkU1B3of1puQtrZrQLvXi5jCc",
  "key42": "65VX9k2e1ZbwnpUSrwPsrehG4cevSzf2Kpz9WQVJtbZW72MxpinT5EQx196sGRy5SPrFaqRKSVcgepYuV3DGpR4W"
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
