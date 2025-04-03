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
    "3JBq6ogJvEpsewTXFEDC2LhcyfjUH9Qqp3utGQJSQ8CCZtARW7nXNL8W82SFZFrXjdrmomcBSjxLzHMXbQyYaT8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cRyQNW44zjVbPRdyxYse2yNnXaqa337zQagPmm8deo9U2GhgD4ykxsdzxhQU32HH7Tmr8sjgf6rGnh6Y8o7atqf",
  "key1": "2kxiDrGorRvhJbhPUNosAVT3yzFaCk5gr4vB1UaEWUATw5sgGVyG71PH6Kji1dYbe86AnFUYWjnaY4UHWqLM5766",
  "key2": "36L9iirZvW9tZ4NKSPJot4DdRSFuefSYNA4WfqKiFTs1hAmXKqtzZmwbG71mfjYyDxdjFbi8NbhKV9dJBfXHuxDx",
  "key3": "3QBHyxQBtZTPukdXib7gpj4tbkmHVdvpwSnNxCgjkso6uBswLSbHayLRCcMWHk7toZNs9Fmojkrkoqf8LN6XgD5N",
  "key4": "4tRwaSKy7peVakKY85LxmtJexG8VAB4EaQ3V9kFjYRVZxSMnZihwLwsALR4mb2QWfPvQpcPsjkPr4gLJ4hXbzLRH",
  "key5": "2q1Qd5QqvckiuxV9H4XUVQ59U7CErpn8QzFcxueg1WwyouY8tERNGgPxisJ8LfpvH9jsXoeFvvT8W2txqCE8uaPk",
  "key6": "3qkBnA77QoT5LLF1dgFS3CiEbsrJ1jPTk4NGq7vmADgx4pSvk2WWr1c4q4MxJEw6rnT88M9irRJ4bLxBHJ1S1AES",
  "key7": "4mQgfjfppGLNL2gebfRDoZvVFWQpCaqHtimmDtuykyFPAXdRHATHDS8JVdFF7yPCA8rfz1YvbuyML4gUCxjBUJV6",
  "key8": "3GjgwGWJRSMt9zpTa1bN72mHvkV1x3XAheSKkHcbec1DRUuxrvK8HskPzxNTMueEHvFdXmMpZqWocoG5WSNdRwgV",
  "key9": "44PUnJVj6dQfG7kTdXDWq6hdPfUhgpn2WTrE8cH8jDTeNe4aBFnHQGBeV3d5hfei45EgkRTsoZrCHTWMbw17GCDt",
  "key10": "4CNQxtmvL8LHhXu9XivbmgQMnHJ8DMq9XdxcjXjG9gCfaDyjrfK1mrYCyzHSSACBCZBY2qE2H6FMdkttgQmtr9mH",
  "key11": "2BcQjCtSHXSkAqYGeNhBguVdoeig4d8wQG8GpwxePRXGtaSDkam3pw9Uz8Q1ZkCmk8Wu9WRqmeAWBkhDvJjsyvrN",
  "key12": "5rEq3KqnjBfacXB8b8CsRphDkBGakzadqsM9sznum7Rq61kxniR3dbTyLcG8eDXNnpJPxKxyqWrZetSbMWQpWiTK",
  "key13": "4dJPgtYvtqptHfzrgYK5WmwQBkes52BDM7ykA4JHw8Drv83PGCDPc24nL5wVCuEyvakukkvXhmUyaBqSGbm3mGHK",
  "key14": "Toob2Wsw2am4zBXXTdh6uZEthdYJqdq5UW5JLTTqnkcByPN6V6ums2BhMAodgUcxuZg4vEt6hGf1KS2ponoECJy",
  "key15": "225G9ZcGiAgjTGUW1Enm1ouBxtaG3CW5PxupQKwsCE49wzApamLbP2S97x2n4WqDUEhHZmmrQ4YQHFRH5xM3ZujU",
  "key16": "2BzsBW8CtYQxACkVTinmuwAdirk1i3wxovE8yWa8s2omysVERgG2RWg5Hx2gf4C6HS3jUmq4HXDcnN7wdKDJhPa3",
  "key17": "3N2Sn3s3zpbFxpArJ4hAe7pJiij2vejBEwFLHNFNWXDD2x1cVL8A5WMQG1CsSsYpy9kcX3tzHcKYV63Vw1qyqV8F",
  "key18": "5xx3NKh8SySVjZLg22iZhzEnRyB5U6E5PDn5jRKfSHMSmMVqrGceSHU1xrCuvUZGcy7nVMhmJvYZYwPdNQ8Ne8Ve",
  "key19": "2kSwJNP5S4pNFRVpHjXgnjY3JDA13kiGdjL6eJBwSXqGjNtdiWUCsEjP2HcgukFnn3amnDyEQCox3tGRLtmB6xue",
  "key20": "3QCBHtmek4pTYztSgbcJgzptwxQmGNiq7MB3DBx6a7keaa3EQ4eDydt2tGYxCgAkQFmwRDmq62s9vWpUdJUNbNTS",
  "key21": "hrpT3sWXHeJJ6EPnS9i9Vj5xrjuGSeGug7mUoB948atQDiGWgDiW7GuSvb7MWFSADruApW8yznq2qUsC6dDVXA9",
  "key22": "4NDVZkQvFQKGEBDC3AK9FZWrfaTq5zSuJWMdWMCrxS1DBXF5XmjDs4z7jiMBmfsymeYxHuQxbo1J6JyHH13yDTSH",
  "key23": "5rJrwEJfrJUwymYCSHUL8DpLY1HEfQhsF9m7UjUxEaZMDYvQ8REKXRHUKpHDPaEDsGv2G18UnYHLvyTRsLjEB3S7",
  "key24": "3xcNxy52oN4RKBeeRgbVc8VoAhBZkFAJSuRwkm1x4PwxYNWhSSJwnSWQf8bqz8tfFrBkf2U9SeS8ccqWiSBThpdC",
  "key25": "2N2GTF28vwvmC173GGxCaxyWRaqdNY8JJUqBfxA3q9LuMUr6KgjgjheLfspM9gSXzgsHJo9wSb6QLym5367D55hd",
  "key26": "2gxTxq6PCBJiCKGNStwri23zQetzPpXKJhASynoWTMRb2dyj9bSCJp1vPHTZUBubA8kC773xUs5ijbMsL8yw1WAz",
  "key27": "3C8sysSdoMVT8wyVaJd9iGA9XBfACJ7LwRKDBzqC4sAQXEXmCJ94q6eX7SDTEQZ8URJp64VYfE88uZ8Z4nHV1dDZ",
  "key28": "4UeCCM3TYA3Bpuh24y9EvrKpPqatQgMzNSq2SgVEe6gV3xTRNBvvfGfZSx3NAyT7QePUvSydMatf6vAC1JiD6b36",
  "key29": "48HbQ74Qc39XQc3gaXTeBSiYZfBGTrV6cDhXCgp6RWdgeWD99mcy9eZS8orGycQwqS9FFvRi9EXAaQ2GVDG5zc7d",
  "key30": "44ddC3ctv4wywGe2n6qTXbZZ4tVviu9Ek8w5dmCQUebMGnmov2vMenLNcWZRjajzpsxXP3aYyNq8LVTMDBTSWN5W",
  "key31": "5C47SGxDtj8SFyPW14A6YLEWTuWUtzBFAwnSxhZ8pLhFxj2S4NpNm71epnVyokXjRhiKYFqhYwkupAGVoEn9z2BF",
  "key32": "49KoGdQVVyfUVVdUJpktqFh3XFt4jngSTMEn4TbVr8Rona2MwT3aF2J5bYZLPRrMmVRKPTtsmUQDi1wisoeWCD6B",
  "key33": "8HZT7nqCjTNevAx5kwQsTyFpCp8272h6Mu4MbkjseM4uN7bqg6eXmw7GSwaykn5ubQuZjkit7NXkqj1tqBRq1F4",
  "key34": "3tqTHGmWKeGZQ37DjKc4929EvtPLRE6T2xzSwTWNrdQJdddgBQTuLtLt5FWmzsQKr7V2AYUuFr15xYzeY5TQR6Ef",
  "key35": "33DfKAaxK1yXpy3SP5rrG5yGzgH1bbDR6xAWyJk3DDUhJPBepTFnJTGdQXiw5bn95bhXoBHUVHmdQV58p4rWL5sv",
  "key36": "xcmqAY8vSuNbgDKXzFBjxyfP7ug2gciaiU5AUawKghLw1LiaV9zCtFDfG3s5un12YUWfs8aRC7ozFnNUjHr1Fs4",
  "key37": "BB3yS5YfFFqQt7DDm2fsU3iVHLjrrSRVR2Rw627esiHdKq1mm6UgQEjLQ6QXf3ozinAWN9rsVqvc8uTTbUNmbkk",
  "key38": "5Grb8ScwuS7ntaVEgmjAYhR3ds1VVVZmnjCU8izMhZevFQVStGag8qgVXztmrGB9iq3WAnsyFapQrXFsrcrvwGka",
  "key39": "5z42Lm3TFzovvFTEJn5ZG3rzhpEbxVh2nvbaz2Bi92Psbn9DR8sAr1VfzTcDA5UJW5DSvCtPe85VHuiCoQ1Emws9",
  "key40": "5uGe7hYVFEP4chujcetmyPw1Lq6PCNQxvAWcLbznr13fWAaCde3jyeGWRTsnyAjgzju9XsFvHtkgyqTqkJkqMoVB",
  "key41": "45hjk4kzv9Yo8mY9cXqDdAP5LGqEtaGyavuGjydrxbRjeTYAwaL149chc87npQQiCkSY67Mha9bHFArryPRqP7jP",
  "key42": "5Aiaa8uB4JPWDhuiLH8fyWaubfzp5b6XKp3Fd7KJUcskJwguAq3yevfsdTPmW59GwNLB1MA5qhxeLCfLGR2JnSHD",
  "key43": "VQy5dTdR6NkMUjfM1pfwvfgjkTEt7uJUsAUHmGrt27LkH8Fjr7SXLLrY6k7Q6b4TbrtXZqnSUtTUCG6fHw7oP7R",
  "key44": "4QSfv7FzmVhLVspgqQLAVE54xDcHDLobCzagBzifcEEftdiByKrsfMiUNaxdLKarAj6XsBqcMGJW5uDD9hcYWdPc"
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
