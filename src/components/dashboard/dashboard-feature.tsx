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
    "3fs5K9MaPVaRPkQaNTSoatcKyWWCJMKTmyzzELHHPReozr3DAkxmG3CVdWpHyNSS4AXGBADJujzAcWP6EuRSKzHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEYbhK3LXsp7evkwai8nNfTp5Vb9WSKqVtY7XUY95FKcm26PaaeTe2MF8mHht7th5Q3Lq8W1KdLXKRaenfLyH2r",
  "key1": "Rcmunoi9R8rQmeb8eVeyFukwuxZnFTLAvxCNSDWGryEokJAEgeJYwwijLDWpVJTBStoo9iHn1jwnQ2aauwLwjsS",
  "key2": "2hgQ7SCebs5dXxfCL1iiJTveB3RU44V3DFWXJcxYQ5km14C2BnuP5BxEhgx8H3UME8xYi5VLRuCXtVcLMraU62y3",
  "key3": "4ew6T3myMs27mtnhQP9dNZXxQvZ1gzKkzGz2AJQeJURHPfj4JGDD5eEyXR1zCLa7M1REdbHrqYNo24afyXwbX7Do",
  "key4": "5iQmUgo97WCdhgH1Fp5q2DcEJB8LiXnKTCXgu2MBYJok3xwPyTyUo7zvtchntYjgdi6PbDH6qasSfBS3vznzzunT",
  "key5": "3yqbGJxrF3DpAc1FJ2q4wYukG8sSEznRTdccK56aPFxzrjfxFD9SLzSsWoowfb3woM6QStQrEcEcEqFukBYt3FvA",
  "key6": "5BtKXjuoct75kVdCWqDrpiDiAAWJH9DfzG8UvmZhFALWWfBT7HBM5yZUDjUcCGhsbrBEd1hnshizMg1KhFQpv4nv",
  "key7": "57NygEpmvRVLuVYoJTvGbTUdbGFQSKZfLFHHnDMoQw1tRjPy4qMMTRrWS4SuZgj2MtZQttC97CuMSJ698MP5CU77",
  "key8": "aJAaEoPfruvCTvNU2CFyg2MDdaU1wkxJjq9hoMUwzvEgHFFC4FS1dpi9LD7kQFEPnVY8gmiZ7ezhCGt9zhr7iKG",
  "key9": "7zwbUzS4YrUFaFhUhWVMqJqE1HMtmxsssrKtxRJad7HC9uMLHCSEsPmLwVreNj64EokUdtyEGKAo4UhXx3dWE4g",
  "key10": "34YCBVSbntZ8DZrA2EdWWzNot2qavwqDreDoPK4KuZz8XAnVJEfw8xefLebMT34UAssxf56HhZN31rDdJJZd4rCy",
  "key11": "3pNbcRkzH67sgLjbDdJ6tM5WoiReW52hPhGX6bU3RybT9c6CTva7U2wpBqF4X1cqQXAVuG6XCJcWxWpdj3N4Mbdh",
  "key12": "5D2WniBUYHsGspgG9qwQto2Biv5ejEqynxXAFkUdX3qqtqL6WD1J8wss5fs9biBdVwBMK97RE7uzNRg5ACo9siK3",
  "key13": "2w6zG47VergLYqtkgMAQ3ux2G8sZSYmzJrTWQ9PqvzW6h7YdhigNwf1fokSuc54Rn24tksn8k4aoBaqjtdTxDaLC",
  "key14": "bKxvmk2DMkjPaFPaHBLL7sp9bQpqdz3SNQow2JaetoDTXTcjhp8Emyop24tTuH1ueW2rEdrbL2iEKguEUQn7hqs",
  "key15": "2urZKmDoZhK5Dkuae7K4ceemNo1TyuLf4VfMgWEHJrqCBTP7tizSemaHihHGoaAAhVL7PmoXtWaTJYdBuNT4JNfo",
  "key16": "38a3gSfzKFEWn4na4vXxGtkvSewimrvp3tA1JjdGfHtMsU7D3Esu4mWYKdPzoDmLTFDdfN8uSXMdjJm7VhW9nQuq",
  "key17": "5SDwVhhKagAJqRUdPJVGq5Z1PHBPN8MVNWvBJUHAqNkurFqoJT7fYTSZnV1Bx7umGwxVLEU87pnHiVjy3tLoZFfp",
  "key18": "5GbdLbJC4Te6QGsfY9T1uuXF9bgHcm6aoC2v1QHBXU436gFgaKgFxQZzXcCWpBkxzDkKfw8kcxnrKhqA7s7Qijfh",
  "key19": "2bG4BRQein2f4R73YNjrUZBUKoKR9ZFEtz3zhXQoB8kGhMw3rFcPXf6fENsm2jAhqfjaXirpvhEbczq8a3t6fc8a",
  "key20": "vRCXaLbfRGjpem2t4bh4tWSjQrM83jxz4HZeEV7fucQAGofWdQk9HoZPyHsp74o4vPqdWDtQdYYuoAyf7KSizS1",
  "key21": "2d67SJcJkNL6A2CXYpW8x8jCrXUXpLC4cjRMKShJvhfu1EizvZKmHN9vCZdmECUhmZj9QHTENAyLF4zRvEjByuvU",
  "key22": "BL1yo5XoKZJJsSZ44yNh2fGe57qV57zGfzgj8rA22Y1B1H1BXtYEahVnHrSc4JRayH5uPsWaBdeS4KGaVUeFtpZ",
  "key23": "3TPcpHunx3GDfKVugVHbmsaKBmMMQRw2xsKeEWjispW21TEQtGndthhnmxGSACZUBrmXKCcq9WL19d7bgDU6JGpP",
  "key24": "XWQogYVXSCPwvW7RwvczRiCdpJzDUkyj3w1s9wLcn9fKrcfeNug27qjmjod1zEi9WZvAw2vohfDCN7MApKEgoUE",
  "key25": "C19zV37jP2WbS39xtc2kxw6cVkVRE1YJWFbHbuwb9Z5d3qeeUB3YhFsv31THZUT34MBq8EVjjEJpMYGNmvYB2Ws",
  "key26": "4YtV5H7Epjs8zf1RhTWRi6arKc4jaFB44hPGnibg9dHDq7ZBD3BHDHmz3X5tNC41JuYj2DeqpKAXS1P98uu7V5aC",
  "key27": "3QMaZKfEysQnfKY5dHpLkBHYbRL1JcgtqdnzjcWejkbqSQYXARVVEyQGxHtqjSdvpymDvZQWjwhHxEmuPNmEpp3e",
  "key28": "9JMB31V9C9343NUc8TF2uyKEw2pWE61yEdfz6y91gqdW8wG26YwrZdFbKMZyCZn53jhVumAbh7KaGVMDsoLyRLL",
  "key29": "3K8xspAREupRkoJ2c3bCyqfinFmicS9xfv4aWmNEAMigYQNsMS1WchjBB7bPJar8mKAFRpBUZ4gw6bxq4KMsZbYt",
  "key30": "U49WddvrGw5YoxUMRMcoxSJmWhFEikRi9vCxdVsUpN9YQUduwC2VxCs1g8w9YaGchNH2g1SrJKH1e1Fzft2SYCc",
  "key31": "2kwu1XgGCh2zt5MriMbfQv1GWR2dfRmVGiLUaNYmLDWEeKUiE8rknQnp8CG8q543hdpQXVvgbV582G97sEmJDaFS",
  "key32": "ko6KTaYWxgby2LKuoCd79KSTtEK6Kwyvvje9bbCveCrgx1GUvcUCLaEPworiGuoRk5GBhvXctKetULiuy98Q4eq",
  "key33": "3hqajRoSqA5imtvnZTkybCuPjxMtosbuAX3HdE1BaNebmjk8pqBZS53XxdYouXqD7xf1Z9STVxVhgm5Sw7osTJUo",
  "key34": "4YdkZDLPWjxGRA9qEi5Kf4owpp7PFCpwrUJnqHuRbHKNzPxWKgGW382Rj6tSuKLA825mFtiqMHVkw9cuRmrKyDtP",
  "key35": "M5TDSmABt3yaTMQsWkAsTShcw2JD6vE3ac7s4vAUWxZyPpWqmyZDgB9PU7XCtTwkyczRLATCmip9JKeT79YCTEh",
  "key36": "3tTvx1XFDMcwFmmYsQs8RtujunfEcgjnFJLnQGRnbaLsijkMjSPteuo4TdhR66itGgyszHDfdMuKZTontaUmaA8e",
  "key37": "5WNEUmwPLaZX2AvWdTMxDGBmQYgTbZgFz7G7WD2Mi7j2QXrmXrHkgNx1LPTwvZCQFQ1btoTd4wpLJGsjMgEzR9of",
  "key38": "2pEjn9SkpCGBqiRsoeabfgCz9nsYvGCJBsMi6jRPtvXc1cjtYYe3DButbVUvYCkwwCni6x1VqsNCyY3vRFSnwzeV",
  "key39": "5gWbHBuyARQNVEwS5sHMhgGSuBFaFT4QcS3WShgNrXoGxSmBk5cGoSF4BduJM6J5dHhM93s9wxzySQDWstVRmuJp",
  "key40": "u43P5XXKxW7jPhGWr3nbgw8hM8gond5EHpVTDqimP85sf8grKnB9nSxYtGZ44EFRjaL3UuHJxvo8rTNiTiKfosW",
  "key41": "3Q5W1WLFEvqYe2Tob4XSQzyzTbQ2uWhaxWwTB8wZ8tpziNbFLa5Azf9QdeC89Cq2oGZaJTPUt7qZe4sYDjqQBUt6",
  "key42": "5k23UpfeCiqoaJZBRwpZ8WZhNSMdr5dZ6g6Z4dTLqsWSfnLAf9bgi7AjcEdaqNhhVRfvoL9Bwx8NH8Qr8r9LcUTm",
  "key43": "4MNTwzkaWwu1nhQXsbWWYoxpmEazkYVe2gJquVjJuuC55kZQwfJR19MKN7sMWJ2RvvT85XgCGjLkUZTyU4qnzeN4",
  "key44": "64RYJxgbPhnCVtx91RQCpztbDh5GXPTVLjJ5T8bhNR9oaouAN2f3v3tWSnjPhXH8ET6f12ZFPdQG54Tr1xNJHd8f",
  "key45": "2VTe5HHTW7Zs5JrFYB6WwcB7A7fmVR78VdURUqDWiU1TumWwCRzBuRYGNoyGSYfiHnkybTuUkQZzHaUCypV55sQ3",
  "key46": "3SKodrPLvoBfJhjszAU8gabM3dFYfRoBBatNBxZMdPicBmVyxvAyoLJnCTssVUkQjthMaetaLD6sANfjcA6q7dzN",
  "key47": "3wdWX7qLX8APxzksYizZGVDXRLZAkzcZmCckqe7MErMkPoYcsQweuW7hwjULUkMTfDKuKfaQ9ziK4QzAAPcS3xoX",
  "key48": "4fhrgGqqj8E2ExobcM9hgE4fQn8ewgqh74m51mNV8NS1cJQnYiGTgS7EazLQRwbuh9ju3Rbau6CCQJ4AVazte6F7",
  "key49": "2x4oDe4EQncZ4jiKsReUxzERoBUKG4Aa7uveQduxc69eY2WmQdUYbrgTR2LbZAp1s7nhta6Sr7GtBpJ7LBArSEww"
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
