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
    "5gg7Sc3WQy3p8QRAkbtqAPVAWVQzzwgWE2dDygSD6euFYrvqJNCg92c7gCTe25LXoJ93jZCeq6F58du7wRqEp8qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZG6iAt9kNcDnJafvevb1JpczPVBTun2wSuvBG2n5QTvZrVtPG6PsN1tZSVrnymWjtFXGSg5KTjLZJ1KqCzGB8Z",
  "key1": "yqbS8YvgQgGsQwUcKixQVsg6tYwwNpsmSoJGUYQZ34GmfnVgumsE7UXj8tjv7iK9aMxUEYuEKKkmfxa7t6Qq2Ea",
  "key2": "3TefzNKp49UZAfNTcVgqba7yfT4LiQWoQo3x8qHbydzfyC9dfgmZ6WXqYMdGmtonkhjAtzuKnZdRMgu2npvPPvoQ",
  "key3": "3Uqp1HRLynSycmpfgCrcNZPvDG2U7mPGYCjJbpY813vWtuyxDj4LR4ZjRscdUPL922xdZSpUo7C27LDhuPAiW5YJ",
  "key4": "5MY9J64kGrMVanxBe3eC7YdqfeGkShHjoE3p3gEg9spFBYwpTMRf6b7ACBpuLjVaPPDfpZGhKWeDViPsueLz7LTi",
  "key5": "4apXdMnkSQAQ8wddDPj1sTg3eKhRrwZAbztXhDThGgUpRh6LAQYVQRzVkesBV6oVZenqVZYzK3nGv3zhgx8HTEbp",
  "key6": "4hCjvN1tUoEZCqDXo3q4r1MA6A6MijinLdr1GhoLrEMjSQdwbKZ2MxX5yZXCcJcMyfPwx461R5BAmS43wHBjUNSs",
  "key7": "4jsgGrEvvJwTtff9BjP138Y5K1XvMSUEte5SykaSVT47rPENwBm2CVLWPZmEnAgnorrtNK5LeUzzGT75Ny2SFfNF",
  "key8": "5MNGC8DVPjHECmH2thPjJh5PFq6t1G5Dy8B8ARrsZAg4hSTcTv2NnNnLuZXinUh7xpNdqnbZWb5L3kRp8DLQYZ57",
  "key9": "3US3YhSTxASxrbjH8tQ9k148k5TfGQAYZkRZaqmY4CPXYtzWeBE9G5qdGFzsy4pwKEwKJKD9z8vu4YPbd4akAkfu",
  "key10": "35vQ8qSYPhx9VdH3F2LuTZJ2utFd4Hq4LB2tNubBgsif4Vjqno4Zqjh7v39ntSffmCDCkkvqF3hSTmbnqqMfEhkj",
  "key11": "2CLAYbiabvYjBiMxjb353cYy8EqtYFnizrx9m48qFJb9ZLchi3VQNJVvdCpuepzVWgRvXrPkBs3nXAYnAEnwJVUS",
  "key12": "3bg8rnacnnNkuLwevbac6zmYMUZxFRvUGHGsARH2HmfjByAbFDwLgrSdXCbepCGz8FxuLKynJ5MYxw3ywfzhbuYH",
  "key13": "2K3KZ8sRMsZAxtmPkYof6RScEURV2ftQyEzUm4YbxyucXW8dJvRWknJ8H3Toj1ncw5WD65S7dbtVFYnB6kV9vG9s",
  "key14": "3KWbrNwdDv9JJSj7Et81K8u5kvLEhJ5GV4kXfpmNfHvJzs9NdZAddnCXZdkURCAwCpYrYgKXFWN5YgBHn6CfeFK4",
  "key15": "4kWEF2KB9H9GdLTXYTNwpeKd7FLBCYxgZttb9tHWLXdYpkVBLfBr4xnMUCH1MkGt5EbjRNsrV86EDDi4emXuHrAL",
  "key16": "5Wo1ApaD1vKZv6e4iUKtDioZ3HdGXXpBXG85kihnni3aDVCTy5SDYv6tFcdWpNQdUgG9cDdw8w3JMSDzGKsqzvaE",
  "key17": "5Z1gebgiQKEYMkGBqRqpnxbXA2Zogs3BGTviMzD1eZEEQipt1BKYZa9iV8RggrjJPL3CPvp2k1XfGkwguAMoYTkt",
  "key18": "33XiF3ZdBrBYzMKUjmExjSbojFyfoYVjJ9bzcBMwiVhB4FyN6m1HwNgRVQ7SxXepBVPEbSkVDg7MpFSmfwqeDmFC",
  "key19": "2DcHjvxqZoR686ruqezrtPcgUiExXfVU84dZGg8q1qW95fSh2cG4VbBPrHQf9PGZxhmcaPPAquXpsrwdxYuGtDgz",
  "key20": "3NSjuuTsivxyj7yu7NXFroYPZfsYMd6KtrzFHj2MAxJ4QKQjCEidkL1nMgbbHart9LkBLDKkw5Qr9wd6WhoYo44v",
  "key21": "5CKuN3GKcou5Wjx9dracy3hUcM1iXHP4Z2xVrerGzb8kYsaXQoRrGgqTMzewxeMZTa8YvCettxntR1bAcPTXxeza",
  "key22": "3CcaJGEnBTM3syd6kiPurSaLTjNWTFRrUj5fYHGoy6HUzisHGSWUnb4p4FyEF5SJDCAKCWfxe8VFaDLueEGc5xoA",
  "key23": "2nkqAEbwc4Nos6BgZyU9jKcuFyAtpdpk9QQr1J2fnm7Y4CkLYrME3TQu7JNvCGrm9kNCGJAvGDC2iEjV1G1raKAG",
  "key24": "3J82SNoeB5oUPeCx3tPn1YVBWRMixZB7vSbhC4uUt5mGMw1Yjcgxk9vjureyyXn9a8Jjc7LeMCpxoF1dbidMJZf2",
  "key25": "7fi2pM39KSwxbDor1FQFYydDttLpMb7Ei3t27xXeQ2cjJ1PrfgRyj9ofbvuMQgoCdrAjd5XK54YtPC9wrKh7xGK",
  "key26": "YsAph7b3tJZg6TNFqMCBhgNbmktFzYXgQA65itD4T2mqDaDg4YPxfRqKctGmxUS6LGhxxFXv4rnz5w1fyhYky6j",
  "key27": "2H1rDxTLZbUoAXEkfnhbwuYtpP6B8AL6ZJsagAPYmueNwRUvYRmut6CPAXHhowR6PWmZNRabepHeWEApTSA6F1FC",
  "key28": "5dwkHSTF4NjUgZ8pfL17S9NfoGhP1AEfui8zDbBxy65oZFyTocT6b3Ho3BFgUiogT32Syb2ZSPxvHGXUJFC9y8xM",
  "key29": "xXX2qBzzVwyqGt3oM4nmdpDsSuUBUsfAGKnAUEAQZGjcsRmKt9vm3udE9yghCoE6mxcShuKC6KYBLByJVoXCL5s",
  "key30": "3i6fXScqrBNPs1n6MQQTGPuCNasbA4tZugr1zaGTVARhxoAvFc7Q4tg4NAKSYZcw9PHzcoxpNY3JVyD2fjS8khzo",
  "key31": "5RDU5QTMJrP5W6w14xbdywSqAKWR6XCriEbrszfyUNxC7ZVMiiiuqz2ENfDLA7RgybgqHdVBGwoaNGov82kT3rJw",
  "key32": "35oZ9CbRf9XxfNQ78shQzAiiiVWUeuevYNLPGwoEFaNMkbmN55f62LHTH33sYSmJZd82u7zS6QwiBeTZR6wgEovW",
  "key33": "ArtE8kKBYyT1DoEz163hzUKtJAGS2zMGdKaa6fRE2BABUcYuxvgN7tU8YkFodiZxAfG9cvesV7VXZxW3sA8Stuu",
  "key34": "67opQGffFo6Enhhuzmno2qbEytL4GVwsEX1DaorJATL3w4pdYZoPow2syysN1sHJGmbZvb677but5JG3cYGY3MYy",
  "key35": "5E31aMyk1kY8gmoBQGbrZSQiGXVwn2HcNRLP689Vor6iV8c4Hvv3aVMwPjXvtD2FkX8r95cZCCAiTo2iuVR461Yj",
  "key36": "2iMgDzJhb1Wkfw4Dccv9DPwLfe3Vgi9AY9wkLZ3i289zHWUYkPE5jtz2EGBaaLQvefxtQ9b1QeVqCHfkTM6oMSEH",
  "key37": "4eH3fT7iy1ZdQir6etStCTXTuAUgBkF1kKeUoFajqqq758ru7yPdThXM9zUqv4MVf79MLYCGYXXFbC9RRPjiC41z",
  "key38": "3cD98W8JFkG5viUkHiSEEmitt3aKCeyo9WpVdiHVi6Ub5x4h1np7fcTrkTgitTF63dKpbq9HAuZ2BLfmEeCxVz9Q",
  "key39": "5kP7cwv5okpk72k4jK1SHCsjYtKSnGKUtDx2ioTdZMeQQvFvSVwSes2G7pcAocTxwpqh8bJpsp3G51Ri3yShCbYx",
  "key40": "4RLmGAZg5Tc1hWXrmo3Ess1YwmNrqMHyNtNoHLQBP63LELpmE2XP81YWsqtVsxTxFA1GUWetNqy6BEN7yJ6EX8YB",
  "key41": "5t4QreZCQZxkQWqbuvpjdexUPUn9vKt67qwenLderguR4S7x1s2UheEqAdLvj3snZqBfQofqAUirTB3uU3dQxQLC",
  "key42": "3RCEmXtkThwyhFZo2jLHJC1kMadApdP3euXrrQvscbCp1jJ1T9J98RU2wahUXs4H6G4CyRV6puRv7yEc5PHsvc4x",
  "key43": "3Ss5hbEmyhyvjuJzNkai1uRg5T9fSuLhBKcFoNzkVLTBBvreFeHqrwLf1Kps3jcGAeguiCrZXZHUB1H9tADzb8E6",
  "key44": "2QKbut5VTXyraDnxGAHCq7kw1cBhjTd4fVgHVYwXr5cUA5E9RAKeK7Yxb7b4cfJb7BcZEx398Eg9BY4a3BN3HFaW",
  "key45": "4pmYG4wLZ2HBCpkUirHvfYBFKYPGersXm3oyVLhdJipK2AVxGWsQHroSbcsVM3qnvbmv5hmuNdkV7zBuCBPgsKbk",
  "key46": "2qosDMuVAHSauY1JYWpZ99arQmyeX3C9mtDrKx8gt4eGfB71mAXWARG46VgFze2ohy3v2yACTRcxk1SL3ms2uQC1"
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
