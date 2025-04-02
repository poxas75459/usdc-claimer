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
    "4aYisNNnS1t1cR9uoQSLdcxz3j4aGLd92uACPfUwjos9QiDCSyaYV8rVSchsxjmUW4G8yoswkTCDz2Vf3R3rhpaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "naTAPSn9hGK9kHuWnyXR6TkS6s2gswbqaxGaw85ukCWu2mSXDe7PbBJ8spZbcXeZprTgzy15pxH3Y8HFTn5p1wj",
  "key1": "2bJ8J1FDbzYqVwf8CdfyJE3vUfxSNXfJjGSJr6KqRYdJ42w2ut5LdtXZ7xurG4mmPZsiP7ykwpP4FUUYVwaVwEBa",
  "key2": "4gDikSsfq8hBggdT3zX2YkDwzDSAtLhmhBaMcuRrXQYeyncGCh2zv5V5N2BAzZFNEfSSB47bLRiBEjda7R5BfuoQ",
  "key3": "35PRjyAoBZDX7T9mkMAL1Y46RNDWNHrND6ZhkebnePg1G6fV1G9TQyWX59kkcaxmfpRYGB9ChpHXPNa6k7mDytep",
  "key4": "5Tzpk8AAJDsQRBJGH2JsyQ5iwXEGuhjafTxBeULmiPajKKwsRZ7FEavLorm7gy9dZx3JRx5PTUiLHqch7WypHGgs",
  "key5": "25kzhvqDj8T134duPRCyxteko1YikKEndhYyezD7Rgp6BCSSs6KSk2CW8f72BzA3YTDQiwLfjpE85q5BuZeFgKvK",
  "key6": "5uD9dMh7BvJ7xYH7QE4rDT1yhSA29bSBHEc22MhVYfxq8X633NbwKchekENcPG9Du6qmB6R5AL9Yie9zF2c5V3f8",
  "key7": "2zLeSZsMh1UNuCA9K91FKVYPrT6u4ikb1de54pWZRx9HuwcEL4qytM7o5ZpBYdoLUo7rTUf73fN7eLHgjpwXqDjN",
  "key8": "5fK6B3pFvWQML7R1bbq5WVcFeYjgaZ4uHHa9Cg2TdxJDwF3Sz3X1nt8cZTeSYQD52t98Lbqu1V5cDSDbvjUtJAiH",
  "key9": "34mQX2e4bNSoPwbAnBNR4wQi2S8jY3JJ7tqohxUMvcrfoPFKZihHP8RAHbKrs8CmHg46RaxCW7JmPLXNdCzTesiY",
  "key10": "3RM3sTE9EhDJaGDhc2sWxzMJ4EBKpZeaCHZYoQ3VKdRYGM4VGzZabs1ptskqh1FSjvWBWd98ko4DXCYVQJp7ujd5",
  "key11": "2AxfgwtjyDW38Pq4im8xiJqbsyTq5sgRxKLrpGJGqEJx15U2scNc2Ss16tZkce2euT3jDtJFAudjYYT3UmNHk7DC",
  "key12": "22cg3GSsnDKdSpkL6WRvydauesVgeV5CNLdg7JcqRTpnep1C4WT7GWb5wMgoQaMkScCWaqQVGVUUjEjGUSHAm6ed",
  "key13": "5sxye4umEMxfyYdo4LUgKFdn2AWbZ491ZUEndWvsZPkKcQFGRYy4mNyfrqstc2QtbQjxGAxmk2iHB6YXYdECALVz",
  "key14": "5LytSypWaNuvdr2cc5zUdFR3EBfsbsQe4v3vTbpAX7QqQkxasHMFWBmnir2aGXWMtyKFxWUWQAjZKV9zuPNhRCM7",
  "key15": "3w3iczcffJbnzmA4d5nb1E4WQQ36hS6ZDRXgdKRh2eoGJgijZxJeJEpxx7PECKavnhiEyoUnLy9g6xvVpUyV2Lum",
  "key16": "3PDzSGJiNd8uWp1JvsUUajpu3EZc87bbYWL9fAL8QEEabHjR8HQsLFaTZzuoxrAGP6R3Hhs7t9NCmWcY8QSkt9v6",
  "key17": "4m7jtvCKq4VLoT244R1LnzpxxmNfA2QaGHCVFA4gdpuX7Mpy8Pm6thMGsDchJMS15VYpv3tfDbVeZqAXXnAcNKkn",
  "key18": "2qhk744k29xBxLG5PZNTQyTAAtDEApjksp5CTxKRdazTjoYADPDVJ9YorUqGTspHrg9HE8fneP6m91PRHqkUBM2a",
  "key19": "3DJdsKuDSHyKy3BNaJ6uhvSNxGHSyTJjdF6w41MHuXdDTnvUpxN3NiV39PqkgmQ1VjmzKi35ThehSWha4s9sh4Em",
  "key20": "Mkjgbnfj5GSd8Mhi6kuTWguiSGFpqbe4yUdHGbYAGdCisMki9YHUKj9oUcAVaaWb3q5CE6mVzBQYZLnpV8rn6ep",
  "key21": "3bsyUc9eEBMRPmLoXtsyK19BVsduWgvyMnT9kK7BgNbEF2XCmvWjuBXUmP1M8iEXK4nbPqnQCMLhmfxF2e7yPf4b",
  "key22": "3syBAxZ27JhHeg5LfTMFRtBjwEBaxQEc5EwuNbzJN2iWGHkMo59cS2pq38X7t88YjD35fDobN6MdKnVbfiTY9rcx",
  "key23": "65kA9DnqAw31odxcBsjNdZBFhhGeKYc7WwWVpojeCPLnBTNxQpWEE5VgafYV4nh87hvRX2gnbKkhievgJQynuCUB",
  "key24": "21C413exRKEzEJiDpL9Vh6NsWKN5mTZqvHGv6sebCFZLoA42fABHWBYHwqGesDqaQsH2QfjkrRHtjvRJXoYnpizN",
  "key25": "3fqtHJt59aVEB6foTgu6ZbJH7C54bo1ar8WtBmVDdo98kAmtab2h7gx7M583oY11BKMSUQueervFWWgXWiaEc6gR",
  "key26": "439QcEd9cRFTuqVR65GnUtGbMGkX3Rp5gMWrbyhGC87VxjP58kSHU5JSaZZArw1mgdC4UcssavCqPpBPFxAsJggp",
  "key27": "3EftN2Q6GVYWQPMN1kUML8ysMLpV27YsHMan96eVvXwTdk1tZMR6AfnWjfy7XEtZY7bjRgXbhgiJfHcXFxue853e",
  "key28": "4aL1ZqJdWGuKyFfW25Fd63ReMDgz4QkK11fhiy3vmdg1WevpnSPydD9T9A6KmJJXK5o1CfkPvfa7PgPvZSju1ZGf",
  "key29": "26eYUeVEW4eZWGdN7UcttEtKrZ2GJJpsPJawYFSYjTYh9KVnBNAjcNnNuDeYSYEbbEkvuwiYxQ2SCz5dPFsB4w6N",
  "key30": "S4WoVmgZiGGmk5hcSwK7EiyqMJAgQgfyF6236uSvQTQhMtShyUYwsAqbHRYZHWjjQrrRRboUz2Lm858tuj5U255",
  "key31": "4NK66gTnERWNjDrdiKKwmKBs4Kcduy9VT2D89L2cQH9YXeht9h28oBG6iyH3eFXxQW3TvjqRKSPv4WuR9fKmqeqT",
  "key32": "26sqwW7LcGi4jcUvbnDbKS62SK94mhzBWMviBRy7HtYKBZjhbzA5JepbcdJiQMhpGC7QWr7csWiexesh4h11daHe",
  "key33": "2pNxwNbSeh8C7iyTLiYocp5epomee1K3kSQC1wSoPPRs9T7Sbrs9RDNJYAXCZDezfro6T9Qw3zfELgfbbcNx8cps",
  "key34": "2J2nK4sr2N76DbU7WYQQnSUBrpmnwhXZiSP3iS3AphgmkWTGe7FGu8LuDcjXC9H3Rd5Ac227wqwPa1r6CUZGfxDC",
  "key35": "2ekrXrJhXAC1NpoY1mK5LngmG74iWUYqhrQNw5LHMm4rdvcVYHniNYGD1wnqN6zjEhnGk35zqxKqYgBSh1JAGrcq",
  "key36": "24scSZxWAV7ZsXrn9cJCf1EsrGb4PAR6tD2KSGU7jkkbp5MJR6ztGJejSFSKgmGdy8moXm1KVLmH2dg5oAbirSH4",
  "key37": "2NMGFVrp9D98QcNZ3NyULLwNppE2qn3Sybca6BZrYDjbnkfp2XwzmmSRnNx69J8qgyBPgxvWBFsx6Z76eU1o487g",
  "key38": "3YnSUN4uQyATvKfkx3U69Haf4EvnB69DJXyLTcNLM9pSJxN7H1mpfdGZhG7qaznHhXxTnHEmV51vF4X6BrXPTnsU",
  "key39": "3dLayxoyqSeZmQeVnAuoxg944znxrmFkzP6mvoSrkBjWuruY4bTH3PVBpY7khmdC8YCx19fnKjunyTBk3X4yvanW",
  "key40": "2u96MyQbSsx8ifohzhgvW4Fem5jWHYCdmyfRLczvr2t3rJJe8pzeAdJrc2D3xQkcbWdtWGjwtThhhkc4ApLjiSca",
  "key41": "5e4CyUcKt87tvwcoMkzMC22gExr43rhYQP8J6rYg5z8vrowzSEt6ih4CKxnL3qniYaz7PQ2VNU8ybPVc9HnUSCMT",
  "key42": "4WntQrutWqsTSjszqed9WjBXV9piGXMfxzDFpxUqBQHmb9nz2H2UBqLu1tcqfFBRyoKS7vi5BHRfsydoJinMvoDk",
  "key43": "4Dpcc6ijudGciqyhCCU5Z1HEG2xG44Fzua7KAesYX7QYaeqZ7ENSrbAGAnCCg6giQxQNgqdc8sUwMW5gZi5x7nvh",
  "key44": "2GDVo6wLzsHMJKzxCzRNc3mUsW64FPPPCN1gHXeuxEtX9NhUMEi4JzkgeWBMZBHkAf8TkTr1bYaAcBU8Z5CBKA6f",
  "key45": "5LWY2cGsX3vBh2qitajyTUEE4sr7Ecwfeggo1x1T4UoHrXgxT8HD4WAznx4c8UBhRnGifusGiGroWYhgkf7xwi28",
  "key46": "49MMS5Ys5xkgbFRvtrrCxnBLBgBV8JY4n29LMgt8ygukbCuDduC8AHncEzf3HCe7LgWqDEWXpBtvfUdHaBQNfzHB",
  "key47": "2fnGeEKMJ6VA4BVSonFBPFYeiBPVREzEU44qYby7ccAhemqzCm6P8FbhfaakmVbdh5QUuHFx3bSDLaryHC28THwS",
  "key48": "4RUj8M9JXpmvm6XW4LnG9aZmFqXkMGhaNEwQtnEWkoXHuRFvDXRPvsw7WiVXVWH58VfGRejF9FVPNWDWk5zrrE6d",
  "key49": "ik2oJUxCUm1vnLrehmEi1n29rfcVMBUVmAp6omGiVocZf6L7X1NGjf5jg7EBJ3FQUfh6giiqp9hgKnCNvvedQw5"
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
