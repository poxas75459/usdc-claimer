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
    "2BR6tVG35qAjsdwb1hLrQxxxVBdyMAmKVq94ievkhSeysqQR9v44RGnP7Mdqe4C4gNBfCdy1mNEujsSqgjaiAfuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRB1YgPj8FQr79qkJFV98d2Hz9aZiBzHiVu1E7ZG48XH7geu73rNb3mGr2Cnbxs2MX5487Xxp68b9yWQAs17xA1",
  "key1": "4JupFbm77Q3U54MqdW7bRpDHnqz2EULn8sA3nZLN42z85Z1GVakSYWERvxAPEsdtbWwCR2NBvXurrpo9DNtYmJaf",
  "key2": "5BmHinhukjzYtQ9TYwv5n2jxfn7Q2jmGU2HvxnvfBWBhncAmuU5ALyn9ZTeMCouuCCsK8q4z8KJe2dgaUXmnLrjw",
  "key3": "2DQNAY9vdRRxHXFKHkU23CFU9CDT5b6y79WSiyco8VZfUE1uZyfostp9mPK65FbdwDLANeBN8EzMmKEA9s5jVFXt",
  "key4": "4ZHp1oLkRZMSXLzsLF6G2dxkN2XP1v3eo56yRE4PHWC6RochXmen3RKM9W3oq1MPQ9TwnYgMAMomBZoWMrArUYwq",
  "key5": "6ZWCvknhJ6ynoGsomJzCc3Syxg3bAsjvx4KdezzGHjkDbEHyz1jfiL3ge1RvGFTsSsyCij5TYTQshrPXjxiRzW2",
  "key6": "54so3KNNQoXqR1zx2JD9f8gSJw9sjimWnYs9kqe2ABTWMTzX8kzLM42sGV1rMQSz7pL9Xw6TNQboJVDxW22nMpSN",
  "key7": "3vKZhytvPYDAZ23e5VH9fqr9e1Cw6wxzg7S5BvBouN33v9SXY3crUFexxT7zc1CJomJiuktVhkXr3jc39uFLLaj5",
  "key8": "hsrtoM8wmTTosReQ2C6fsCSw5o5f4HDoQZomVgbtwBu5CiUF9QkzqD8ZEUsf8JxHGfhK7hw4dFnZokmZAi53N6N",
  "key9": "4jPjPUoo5DTmkAi3EnVG9EUQDeM2mrQdGU23MoiDGVboJU6qYDzE8BBsYKTBGNYsN9GZoVc5pbQijdxoS4MrCKWW",
  "key10": "2p7cGRTCxwJ6rT5TGMJQAKMC9R1wdJKHjbAjXYspfepzVgo8L5oBayYdnntKk7F78QkfFMF3Fu4YSnaAbcdoi7Pp",
  "key11": "5MJ4YNCmPkSEqbwDuBWBj8PhcpSE3tvtamgEiuiMsw3UF5YPCt7pZjkYDQRpfKQyWnn2fW5twkpbDjC94ht5VQ7j",
  "key12": "3zKNGaYarUmbL5o89YfTLLjQewmDzvwhnvyCtrs6wA6wmSP9NASDo41FT8VTqeh8jztds9PTqsiWaWMuL8dRPaDT",
  "key13": "5fWYhbcP4Xp4Fg6UVD9d7iicjCW5h543L4gyBKXi7WDMuHeNusXWdt5eexrYfkSx8piuCDg7G9yjLSaT839GQzui",
  "key14": "caYBUZ1FLnrz2wPBJBhDVf8e1qzfdRvCYbFTXb8EcNGvgmv9REzubQgg4XxHBximy94FmQMMc4jvvHYoJ5R9k4j",
  "key15": "5sGmmeVH3KtWmSfsH7KwjKUikeRKydiQXba1e48GwAKtiVef2VZYPjay9RdWQxdgTDuXoM8ZM1ptZknpGTpXxNjv",
  "key16": "4eRXkMivMToNj1JNcvhYXuEvz4B9HZYstYPFkEojjTefhtkCw6rcEU8M9XfQXNCGJ3HF7R49AHcnt141omtqgQ3j",
  "key17": "67APSLtAYjUsKh4Xnxpk3KUUncA1i8MoEvifVqLuZkZcUzKTys6yhtdQGRgTz1DfH2hxCVXigEyg4YFQLSpfC6RC",
  "key18": "XTub2ULc4npBAXMe4sYjofHhoFbRqaMGzSGyKDnWk1Gmjcjbp5Yaxrh3M1oLNxYZc3rVYc9p53y6jG6f4vwj2L6",
  "key19": "3U7L6iq1ZgVzi348sbtDfHvE9x9LqGYuGcFvfcJn6gW9FnL8PC7Bitciq4EFJUn2Loq19v48umNALSMT2nkuduW6",
  "key20": "268EE9ZfJ8xUKfdjsamcqH5ZpyYc5kskZdeNRABapUYf3BQFLRwsF4MPEHEJafiVXcjVtwrJvtVWo48CVnDUBhXp",
  "key21": "4osbvncxEJf5wTGJkF1CAhf9AuUH9m7nxDcAzC3LDPaib7BM6ZfwkMHuthpsKPB3cVn4Awaq41zhyPbj6GEQWDVa",
  "key22": "22uH2WcKrgHPEyVDi3qsfkVAypEfhnGDoYxBDn6A8oFJA4dLGmP99EYdhqH618EQqAs8suhd8oU7CF7A8HatxAsD",
  "key23": "hqg8WmWcq6C1SbLVm7P2NURGRriNYi2xMV7RML7z8WxKArvoVtGBtxuP3cozt2DQiuvG6QUcefJVsuhFo9uZmR9",
  "key24": "sQBqQoqXwJnjANMNDTP3Zrm8arT2ynz8h1sjCo1XmubrThDPTD1dXnPLDDYuBx93hAbg6CU4djxTCcqv7Cq9sKi",
  "key25": "2NpcBaX7QxJLVEr7gcRpmuGWHjbMusYmd333U6wwRWviMmW4Sx5m4gky17WpsafrcrEyBxVJQ9GV5s5N8u77dmUW",
  "key26": "4jhuA7uGesp8qcmAS38JKcBXjYjyuiBta6bzP6d2oArGigwdEsv9wkWAMh6ptNi4fYpdNLvBsngVUGcKR1Q9dkvp"
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
