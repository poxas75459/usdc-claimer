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
    "4jqwCF3VoL5MHfWUrpj3jiCoCmxwT545vmFawMCV1vKLmGyGvaD9RBEbkohsFUcRykVgoLo8g6Ay12EjmacpCLW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jz1WSLbNcyGb5k2hignMF3DUvVYAyqfiH8d2LpZiVnHSGqwXxLDjQZPpU4foFLH8dh9kKsKrmocTQfdiyymSZu",
  "key1": "3h2tAu2G4YuBqcn6dQaofYDLKwM4umjrr7u5FrhFfXcERVa4XRSP6rrHYJDzz1ntq7F5p7BcnKK31FuhrsRHFcRw",
  "key2": "HGcLHvpyPFDHRcwEcg1Xr698xdAoEosc9NLucDEcBhuwepCzHceezF3uE3fH6hfpq2HcSYbE6gHpXZCVFkkgAcy",
  "key3": "4UTi4bKL9rq1qparscSDRGuVF6bEsdx281oEACzjiJ6gio7wKqZuW91BfAu832JCbQeLiKSAmJ4hySTTQepkv8GN",
  "key4": "c28CXFng9nnBbmz8NhaoFTxKUmd1rspYnEZnPDfT3Typcz54MTzG3udBfgZ6U6S66hNrnGrq9N4CCZnU4t8k3Ga",
  "key5": "48YKbf5bL4XyawUXJ6njqJDdt8rrKoPRPK8fs1aJ6JyZdFeirmTyHQUFgTXRLK2N4K5LDdvMmgy1SZ4pfhdfSeXY",
  "key6": "3SxLM8u8BnR9syENVsGHVqZNqtp9jfqs7HbXzweQhQrnUqRLr2xkAQaFbPzMW969Em6pmyMZxYucZ2gSkEupL8u",
  "key7": "2ZwvWiNrsqXxAu9CnQL2cqoFdFQNy2WygwXAAPa7sED4ypYEqCoaDx4zy4Tico1h9owg5YHJVx4hqdgtveQeVByC",
  "key8": "5M5Ei7ywkWUhQa9GEgaTo9SodadWAn3mM4CGc4GS8tJU8fzjQ8aEXZtZQD8x9CxkpdpCDydrBSCdjWGz2WTp6YSV",
  "key9": "Epbag3f6pE6VdSXLMwm25ZNfgbrmTyFEJ7LB5k7qhX2eRrAeCaG13yHEc4xLX2ySUpZF1rJ7tz7mt9kCNeZdueb",
  "key10": "3WEkhK2DnZZdrMrUyCq19Y8WFouL4K1BJ7knVCpgUwNGXpmMzbiwHt3qdobyC4YB5FBbMcVhnvJJj6vdVtVdp3Po",
  "key11": "NTGnVjJXWktqtHdpx9mZM3cNuTmqtYaj8ax1FAqzMfHvWDMxHpCRD4gkKiePARJNynAmcZFZfiBUYwkbjrCUywY",
  "key12": "451Kd3aSDJaRV3pBwqY66DzdaHvgyyKPNSZgSKj9gWyJUu1m5WbgE1CvH1V1CgHdHj9j5VbekkNPV1doTq7swC61",
  "key13": "2WXgeoq1rgVCTEeFcieHA8kD9QGq5Xw8n3CtWnoKGPaSsCCHmngwiTr57RZP4vThLgA11kBZft1bMyt6sLscx7jR",
  "key14": "5TaXLVbhZTFkNG36Xyo6weJggJ9ieJ7dSCbs8NCawSbRRnzYSjJUPRkRzLZ5higUbDQsYjz3Etk36nyLENy9sYrV",
  "key15": "5Zvjs9rmsgEdixwCecrgviKtCreGVBzQoqDzw7eyAtPKVeADowzndnjGiqXsm48uJvuEK8no84bj5oU3pFRZawc4",
  "key16": "8fQaqhKm4YDsyerjFuqq1MNpz5jXZRndoV7kEEiSLVG7Da5cGjQ5Xrj1sb1buN7fGWGyNgfohZb3anJVjLk5Nzy",
  "key17": "4G7QgczX1fEhDQwZTeNJrnTq9mycDWE4bq5oHnWBWYC5J4HYHy1nLthNcXR1B8ci54ceeZ4pLHzr82y2Gy4keGZC",
  "key18": "3r1iHAKbeR9h47vsLpsnEuXDwV5JwEm66GDThMucGvubXnKSBVzVQG2BEWufUmiS797aNVoDFd3gYBHMMCkiQ4Hu",
  "key19": "2XUJxfNBMzfSATn6jQU99JdMb4ZLBDvUNxnxi6Y1G98oSV3bwEaccrc4Hmey7iaogV8sGn8xLkhp5Bpoc9FvtLze",
  "key20": "2rVZzpzZZWrtTv7nhVbWvBg1ZPbbqT85bpGR4exCXb1zJZkrm8nZBERSGF4LeeByDxdoVB2KMbs5ojcaspVZDLns",
  "key21": "677NckH3bFNcGmn8HCfZCH7zpBqfjCF8TUVKCosXG7SWw33JdUh2qLhtAwVaWcbCN6yKEzjvpCTaryNb5oB8AWy5",
  "key22": "2LCKpcBjknAiVaEaV69a83zePaEU47faxNzK4fVmAVcv9VxtsvgXcCn57CbeRxCMjfQxZMi4rFaa7V4PpirNEhTv",
  "key23": "2kwmpMc3yuLn5xgtbXucZBpcG6cSTWMn297y2qzAVC4chyMnjH9QTyvP6rtGZhNBEUbwL7bCY8xh8wD6gUr2sytp",
  "key24": "5KKMLAghNBZvUvRTvHyD7fQtauruGwsYx2ziS3xThhLV9EFkUr2P9vSCX9Y44jM2MwDtqNDBcq2kWfXJHHNiYPnE",
  "key25": "2nMBzSCreFybYLvtDeDB35CZCXnp7sC2xvNyTbL81eq2A9ZgMrPFGD5YeEopnh2aBn4gziS9qYF1ViLeY4Bz4pWf",
  "key26": "5cygh29RXReqeKz7uUEUiECAmidM8NkKsZffsGYnSwTWXrTdFzFZ4fEWedAv7Siaia5HY2xu2gaQFmcwGBKMatwx",
  "key27": "q5cKbU4GkarHNYmELfB51myfvkC3dEhkHoLpTU3i15KbDCGbRw4M8tEpUAi26UWMaxfmipqiqGxwUZVc6Y3SH9U",
  "key28": "3bpQ2MtZoTYsUi7eXdEADc5k6FSZmcdtetfQ3HNBogxZnDMULfcEZQ4iW5fHXBBFtLsgKi6foEpgf1LdpwCjLdMF",
  "key29": "8WNatTnoqh8UHbTV3WecsYKM4AXDgMKcXMq9tfZKcS7KUwSq8zDTHoAQQLwjAgNyRbZnVtCXgrFAGk1KqBRAffB",
  "key30": "5uNXVXFLbn8wGSjdSXqpfBsauD5sCWBUBhoUzSXGTaPhzxwuVSKMBFFhTb1gJkda3hBe3tV4Q6rFX9BJn2W8Cdop",
  "key31": "2SSH9pKgujAzY927Ag2HCW5j6Cvt61BemjizhA44T7k3HmmrUa7pvaw1pYzLcAaCYJkwXdohBtEqApQrHDLqT3wq",
  "key32": "4VLe8ddPkXr1rGywkVj8G8Yaj8qZuCJi1mufXz99DqvywW2yw6oRf3EirtmWi9PJc16tjZTRqrxQqRuGT2FwVCMC",
  "key33": "2s6AvLB9TbEfFWgEWxXkdPp9fv6kcUYxdvA9QpQmNJ256EQXq5FSfcnYRPbiWs4MbqKqCTxdc7oAtvnAw4jYJ4aQ",
  "key34": "aCxBuJGzodK1Y2vn4hRjnirjVXv27bJ2tVz38p4uPx38mPff4nJD7usWvieoTajQVhxmkEkXM7xrkmEYizmRvL8",
  "key35": "EZz2QHJXPH1fgzUuEwbX7XWZQxLmYZzRFqYLcbRvb3cL2b5Xm3wtYj5g9FT9furq1aobDegpMJPr6nNWTKvtgzT",
  "key36": "31iuXNbV37mTVkTkuPvsDiYCGv2Pah525mHYh4A1y3AHwNKPXecbnndEef97bvCoQhwY32xYCjFLYADbyHbgpPLJ",
  "key37": "N3mH3vEszMD8RzTeHhLiNnuMrr7iUhNUp74aByLkzqtVgnpSizU87gaV6PnCnBzncNvN3RTU4vnjwvcow4aRCjB",
  "key38": "28QsHHd64thpN5JWe66AFRhbJDg12ivwb5XpXqBYCNrbnYLPiyRpqiiWtGdZhXPNvHyUEfC8AyqtAeS8ywofX2Ks",
  "key39": "4B4cbMsAoLwezQYkobjDTFkfMa2jEfG3Kn2fSNp9rYFCgvqyqViJXUtf4CBigNF7UiB1yUMTefpJpcr6R7ftghN1",
  "key40": "19HRsJkqJqCkaTrZa86BTzsnFKSqktGF6UFnc3DYrHfmuwfQ1SQviNoMzBqgWRzVsyyVbsZVhzqmwzjBsvaayje",
  "key41": "aQLnnGNZSXVuAwXraQUFuYoVEhktTknwYYtARkiBs1dvp6dR9SuQBAcGL2LUrcucXr8UnQMrdw4tAzqy2fKzH62",
  "key42": "5cEAxo2JFZ3bWRrwiaZjS2eFNCa7GQh5LudW62n529tBtmk9vVZun4pkjUPXL5Sp3482mzHYzGabDHt4EHYboP6M",
  "key43": "5aNcgbCfQSxH4ybFAvYSBSrsF2HEusdnutxLG3FqZkFv8G1P4xXQSNp5CPN7KyU8eebq2zTfZUC7RaRLiqoSDPZo",
  "key44": "PnHDVYEXHyCZ82WX45kqgMxYq5ndV8MPicwncDDVCvLGXLD4o7YXi2SArzKmW4eryhXSa85UWnKaxDy5msCn7CB"
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
