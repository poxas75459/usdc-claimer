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
    "2LVKwiFELt64288SAVgZ3VEVT2iEHHJaPWnPpQDdjrDiX3BaAcosZCgPzrBV5X2nR3u9STdz3WauYzfhAjdfsfHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rUFnEWkt1foKT7LJG3D4GXJ11DJTaRx2DATP3jc8DwtmpBYDfW7KdT8ZwGzWCsZgdNrFHZDMmiWsnU46n4tCgfE",
  "key1": "59KDeiLBXxrNkUxq7FXANEoCKshNcAu7TrAvkSBDYWHRxsxV1yqjWdSj5YgMYghhg8y17HPSRwYRgZxdBj5GrRA3",
  "key2": "3bErm5XktbWq1deGuDLhMHy5hnWPtdnyhp9Z3NiiJcEccA1mVwEY6bjw4g7W7uxunY5FAckHLoozQogwb6231bWu",
  "key3": "3CCt3AhRgF4VfDUuvM3HetkiEkUJ2LtTXT86n3z1huHkHUJ7CabR2Zk4uygayoQ7VEEMU5aXqifVeeFDwr23quk7",
  "key4": "5i1QVdE1NLhtQjLNKxMTgSPqDka7HM1EfER2hYmCLxGh3S3nrDn9dojf5sohFHGGZfjhxCXdJFMfXbrtuKqRcKAF",
  "key5": "2QGi1grDFoVcW93KfRfik1dB9zo86Cy1VemGFC8xeWe2Wsb2HsSicGdTwfihgG4zMEWUnuTYZfXfxJonZuWjwUxN",
  "key6": "2JH1QdSZn3PXefLLP5nfMbkBzdzAV6TdT6AGz5ikxCUcxScT7T47qDQYACedjZf8KGvjSVbATwQtcZX7NUitYgK5",
  "key7": "5vm1EcrSY3pbi19odzg4wwAc6BDkcY2Qm1rQWjaz1bJsTNkbiDri782gagwBAD8tM3PVGSJSGYoneJZdrz28z2XQ",
  "key8": "5Cumr9ZTQ5LqRGiUKj8gRnG1pdxFB3bHszUrf5XbbC4X2t1PvFtDU2iPdQZptL8jU8wSMPjWDP5XgbyWDdohUAGk",
  "key9": "RMxAZt1d8fpJqGJSWhdNmFRUDCHgB9LKz7PLBqU4r1CSZX39UzXgSvGBgwKjne9zeMbZ21BjADJ27hnEzEE84ov",
  "key10": "5grcB7Y7AveaBeX4B7Ycr1c3WzpNMXCb79SF1HRXsAJcBTG1JsN3aqb8ncPP3tYnKzzF1oBVbythx636fwDVzHZw",
  "key11": "3BPqoCXq9tWHZDwdxcNr8wshW6tvydk2ag4qqsnsDsJzKaVs1mTrz3F9MJohPhECic7ozdZeLd7cFrKBpK2j2MJn",
  "key12": "KfEubvBAnpLNaFp2kJi8Usxrq8EzTkbyjhoiAidoip33HHJcrNSy4udy6N6VtNJuFSpbUAfVgM5F29iAUZm4Vbw",
  "key13": "29QvXDMJ3FqDRbvUtyQN6R7icFgvM985sQhqyZsK8m8fq2Qo1bzr5kjWSYGsd1g1touu6hvgx8GVHeFH4L8h6Rhy",
  "key14": "4GWoGjSxk6v86qBGoavANYHwgRefNXaVFXg5pxEXpDX9wjckbVhJdnMSDMragMkvAnuV2i5LMav5hfH6qZySURzg",
  "key15": "41Uw4Axc3BRjYgvj4YMpWkF6StWocMbuerTf7dZc1iSHHXSV3YzpMcHVH2KrRyv1p2VDFxGvBdNpCzrV9rSYAZdP",
  "key16": "V8hDJJ7wHGtnEZVSgRdBaWuhAJNX8gzcY4XYxfN9ijupGYnTtrEP9Yk7Jd1GrKhB6VE7DzjX9Q4gZWKNAT23UgA",
  "key17": "43QDzVhSDFxFZBBJDD2VNRe6y1RNdC29vwE1wyxQK4VS62bmA7nAEo9ZHN2kQyq5VD5LowsAJPj1U5whhcj8YGBA",
  "key18": "3Y68HfpEy3WuJ48S6TgEX7qa9z37s71FN8nbFcTshFy3BJJQQRrwCxzRoxP6qtL54PRcoT43KuBAEENbDFcoZWkU",
  "key19": "2c3Bj6TCMoAxrCjGz8Wm2TdpyfXai6gdiwiPsgJLiSf72z4JLWvCQpmo48eDTctDY8SNTK4jGTdznbEWKqWvabN",
  "key20": "48JZLenyF1X65gtZqHCSiwsztmGPgs5J49tPSeLX1cMdV7ETvShcnYLtyTSCGW8pVeRhLoB3fJE2hVqWFyQPdmdX",
  "key21": "57NX96iYJy1PrBqH8swVdJVuQ4RaEbHQKsiTmirb7w4VFAg319XS9nqVkgnaHC8jRUzdu6xxnL2iuD43LrhMfp6o",
  "key22": "wPgAMs4h7L1w8AaYzcSzqwurbNrLj5aYiTF9YUrVSkYbwAP4gSZVUmjiiPxaegPioxBWm1eeM6vEpuS6uG1KuRX",
  "key23": "4H2Rm75WyHk8Qj9mkuxKUaZL5VVc5BejvFkwEcPgbwz4bvjJ4Te3Brnsexhu3qo6BbnRaxbPm5FYNvomZG8tQYyY",
  "key24": "5wSPm2xd7BBcskBZneDd7CJVj8pWoFhYxUmmiQDNJqor3ZnGuvjQfhU3StrJAnBBCC3WooAePMuBZfMV9VVudDwY",
  "key25": "3rKnRndJZHEL7BSCXiC9HhNavU7EpXRir1baaoK7foopSr8rzRkBH35LFNajg4JMLQAJv5FxSJgRsgUuKXsmVLbT",
  "key26": "4QHGDoh5nKwf6hJiV9RnjR4SCy422CixYhTTWfDCffiTmvzZr1xBpnPBdbvnihULJmEuiPC6yd1GeCWwFDDGYzLx",
  "key27": "57eaKQfAautN9DDuRLz3DR4RUDPsBrYyXQp73SCs7zfabk2QKJroRAHXuBKvQWv5RtCYo4bkZxjKGcN3iF7ZbBhE",
  "key28": "4zuuZWgre7V42GL67aovYMYE6p1PJrbiaxp2gvmGN7T1Mceqoct6oXqLzBJ2jBzBQ8BcD6my3cZu2qrA4PnF2VPa",
  "key29": "3Y8g4y4vHhY84Msr7MkqyRRzNFcyCpif9tJNxBGDsUJsCvhYtv7GLJUvzoDxhbeSPV5z6KwmSwkF1Z5XVegptKrh",
  "key30": "5yj1BKrZfba364pKoUdTQeymp1inj5fjYXQxRnhqgtTXEGE3DWqeNgZ4yiEKhqMYTeWXKXEBhsgjbJEnXwqWjuL1",
  "key31": "3GwCh9itzh7484fM6SjtqPxYtg6Y2Mp24QJ6bL9gJmXchm6CUdF3dZtHXG4BWCpJpvtd6FraSo22oqjdugnojYmj",
  "key32": "PiCx4xgUo5cM6AJgniqsJk9P6xkZCiJXFeumNWBq6hHKBw8y7xQjEpHaZBPzEzG7SfDuDUuid1r1kdYArXrLACr",
  "key33": "3TYu7ELA26STX9zZzUxc9LLLsdh9B3CCJXwR9ewVdwS7YAd8zZFpJsmn4o7SHTzQ8Viyhd7ttNfYk2Y5az9M52X8",
  "key34": "SAmmsMhCrCXDdteEEqzC1fx4uVJuZQUYGDWDCKqviz3TFwRa1sDhrGJYATTQF2qLSkKxunSk4VMrxthTmyBkRwN",
  "key35": "3bP4WdBusv81cG9YWsfsmZNztq7mveKYc4sHfLXQDBmaaBpnKJu4nZe9aArHRBQxuDjvqGkWoPis9JQXae8xd8Fz",
  "key36": "4haBaB8PUmasLeJxvjivrfc7w8zbFVoA5HojgXLKZghAA5D46Zz8RiYcZgdTG9yJrguKpVc2MXPTHJAtJiJzy8hy",
  "key37": "3DB4k7X3eu6q8cXi9YyUPfkoCKeSwRyVBKSTCScyARcjcLnCdGi55JvzYMNTwEFosqABtjhodsTEDEAhM4Q9ipE6"
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
