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
    "5r3JLM5WJGCz6ht1f7HfRTDvLFLvKVxqBGEjz3tDd7Ypwc95U4yKeaaYoYuzW6asJt4wukTBhPRmfzPo8jQaAHSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vapdHTV8ZZSq2xe14hutnnc8GyuVqX1iC4861xfVFFv5ymxnkQK8cUJxHAckePH54QNtDaZp3qnd9h3Z81yAmFT",
  "key1": "4SaENan29icpdar4RjwurAXcHcv9Mh5hUWpmovFenpY9zXzhZrvZquTj3eiiprmFVaCRkGBXxvy9mqMNaH1ED3dP",
  "key2": "5pje6gBpsGrDf6vhLzQadUVCjvCWW6nituYPBffG5D2f3MbsL6py8hMVrx8hHW1vAEKDa4HTnxqnB5ZT5CkzDBQc",
  "key3": "6magsZT6CSx8UiFb3DEPydZDxpXtYc84AcY3JXXxLB93dkhPCeysjHGKPyVpxjS7uwoNzNoXjkapdFP6YsvJwKe",
  "key4": "Nzz72bULxipZZwA2Ffe1FMsVbiJPqPdfxKrxV7f39S9cPmTjMVQgBHRvGmVbAcTYZdgZsWvRZDufdnFTbiwgjgM",
  "key5": "5cdKkFw6CGpxnEAP9ciPDCbdb5y6RhahAuSMaJQh47arkWga3A63mEZptfmqSH8WohQ9vYt2puS5Q3ewyX9QXqnq",
  "key6": "LCuqzeUFqvDYJyTrc5X48ofyLQDBUawPgJkVmyXifFaawVs46wJJZyuA1wALAWS8a3C6YLsEtw6Tk2sjDU2imWJ",
  "key7": "48R4Vgx8xEN9dCa9xx1HgGKjrpg1tcMCPcm9JUMQTTQvWXykRswSZnQLjppg7Em4ZGF4hKPoJYnor9HwsMpR9pN7",
  "key8": "3CqtTZP6ytcptzaS2jh1YNt6nupvo6ysC7B2Th8CUDMJAHecs5tSizJMVV2XrfTtV2BDPe74hXndfQwq9xMLZsXN",
  "key9": "2nRci6G9kfr6JeBf46vYpbLsfpkQTMvPV5RJywHybKTbsxAD3FkQFSDs2VVtugwQC9cCj9vtf9N8TX1ffakCoS4m",
  "key10": "3UURro89ptjDHg9Zwj8A6DYyFbAdWQqXqR6hw1iCaEULsJVzG1GjKwg8f1rMijYvNC74QEveqqUCZH5WUdCZn1c",
  "key11": "5raQ4t3X2iLPvRkK36iQkKhkkxqBrnBN1b6NJMDmuyAoXvtoJN1Xz9JL1qNaBvrNBdcj1UqxoVKDqpvXhPdYffh2",
  "key12": "B3f4ZQ5en3hMoZdRStwRvwrigdVje3NY6E1X2gwDfbCmVmwXYYoRjBBZtqkUQRApTJpHMy9LGZAB54RYSfRwn8P",
  "key13": "5DFMLYT1FQ2x3uFBNRYMBYkpLDBNuGGR7p6jEjJMLo3YsokwkvJVP5U9CzjGS64vNpjJqqSQbgckMxNpwMcVquWo",
  "key14": "4mPyknLC4jwqMrTvyBPbovbvcrFjUrm9KAhHrdqqmKBETFGd3rve9mQzoFzS8JBmXjN3jePzEjo46k7XBr9AAGs2",
  "key15": "3KCoCVeHwzipktfLjYQfhPfRJJedtbnH21a2BmXc4GnYCZiP8JoCkg1K5KRVmFyvhbGW7U1YAPx5HVHsWgyuscdh",
  "key16": "JEoUUy7aHFLXjxJr8RUzLqJYLjypUSJFwCq1qv2HqVLjHnMg7SuQoLq9Y9oKWvzoB3Txa4kz9SMTku9YsG9vg7f",
  "key17": "5Xrk4V1PNQK35GHiBW6UcNJagyYqiY75Q9JzsZhApidGy8VaBL8AHibyBD3ozFb6pCA6GyqwUnZZ7yMkASRPXbMz",
  "key18": "37W3upj6kqbtAQjKUSGTvTZHStoH2ZMjmVMBZ269jk2Y8MVQ8w7mQ1kyWe4SARQmUgYicAmerP1t2BfU82fodGKX",
  "key19": "54HsfPKaxqp9MXAWw1WZP5pXCanVEKjRBm7zn5aA17WszBDdkYaWvFYnt8ExEhRfyrRysjmnNmcpHuPWDGTGtctP",
  "key20": "2gzfzatqMD3otMq5AGsswG7GUzGPdVVY3Ek5HKp4wRTtfn7Wc5KiYtxtM9tQx1RKKd5tNGANuTmYfLPLCfUP2Sw2",
  "key21": "5zPJvYnmp8BbdunukHjtezK4oHTqWMjmwtyhwtkzUDQKzG5NWTugCEmx9s38Z8jG4m4ZEsBc8A2fToJrThceQkyY",
  "key22": "5CcL5yss26cNL72UjT7tjr8Xk4gcbE6XZPPixras9BtRGDyiYZbEFizhGUusk7MKqAUaAeeT3T8pd2wmCas29J5B",
  "key23": "4Rq2PeUZJ9B19Rgi5DadHRvVRyffosRr8Q7X6SktPcb5iEgtr2Ux6xL9R87AZvmgrmuX5LEcrTvTpnWa9tpa7zJh",
  "key24": "3EQ6N8PRWwQ5knojsmtjExHGX6aGYvKNyHDbE1qdVAnzQtcpeTEG2q6JQ2xuyt4Bb7prv9TV12Fg1kQF3isUduGm",
  "key25": "3SAtA8Wx84Bs3XKX7RKf2W2MnSYyEvtysPxY6Ppad3BptLPrFzDkoXQFJb6n2R4Lij3M2e3XLbYNTJdZYuJ3Z68Y",
  "key26": "4U1hRKs626KnRQTtDcGK4qm2HCWeuFP8ULEatwxuN2eqFPPsmRNoNz5CufjouWCD3GRn49svzd4wmg7ddjVwtGMT",
  "key27": "5BNNCDqqgCbbJfY6ZcGJ9CsaBSpiE3W2nFMiRbks8MytuCthcNxTATpGjj3G8yedtTuMTVihe46QzoXAmpzEJr3x",
  "key28": "3mPrVvVGsvwHqwA3gcFbawR3ZgDh8y6zcQAe8yQiGdWK2y84Ykb1rtKnMqAj8aAZKiix8y62pUbzGkUsa3Vsxpif",
  "key29": "2Btand9J2LwqZPauscabXaQQArREmLcbp9X5Fiw7sNVk5aFUQQ3qUJ3dApaGbkVfepEKGup5h6J8oSX38K4e8dhm",
  "key30": "2tERfEUoZwfhMJS31CoeCbdb7e2Hvddm3NVFTMnLRHnho3QPXSwA2zu7qFn9w4jLoguqaGB9bRicjGXaWQjaeQYJ",
  "key31": "5xHbkfi8Uk1QYREdfXk2k73fmdiAVsk8sjwDvYwPF138CK9Cqv8K9k33R6fD5gApMoW3KWsPRx9GqUB7MyJF9XfM",
  "key32": "3yUnPQxAZxpiaK2f2LCt756kem9k9MpWsqcguZBpvJqvjx4RZAjHbCPdew4EEipWEGSHSkdFsdKxA7qoXRRmvimv",
  "key33": "capACqnxHoTrQaNjaYRsYTiEKCbCs1MWsaHpcuefJXkXEZaqkksoyudWhrcbvYEmcGqaWEb4313zSnkt6X2RLXJ",
  "key34": "2FyPgBHCp9cVs3PSn1jjsHhfKSPRxp7iUqbsziMFMF7hiztFsptfpzzaNEJrZ2DcmXyWXbp9F4FvD6VifEAunX8y",
  "key35": "61QnrPMqRXwBcLkZBRDk9cZLoQsZXGRbCnPrmwpguBW8QV1fhM8Ti4TLYNuY63E11ZQmpfbLMTxem8KA6ePRLyRL",
  "key36": "4Z9kkuTUUxbBgqTHA1GkabLv9FQndjCmAk3ZzAra9ZAq8jQLW8cKH2vF2ziyJdpRge98MXNkUM6cKVUAZRUVjaQA",
  "key37": "2CQ16S2UH48NA3o1hqRWcv5qHXq1mSwA2oWbK81UCPb1q8jiNadL4n11KgGNqZwoozjTkCUyb6AjqyrWCkEUYpRt",
  "key38": "4hA3TQGxRLZRn4HjYCFUBpCHczVM6QhqCYVnR9VnhFnC2xRWfz5dx81ukjwmeYh5CPinmgCFK4i1agVaAabCcGFQ",
  "key39": "566WdpN5hxVtUVTSe5xBputrYCdxT6LU4rzB3UfdbrtFJ1FZKgmqi1tKRnyZj1q48y1boxgj11qvE3eRNsxkhsq1",
  "key40": "3qr659KaAvYg5DXbsLUN8pdngscxqc7yRvmmk2wxY1opfckxbRGmKvG15ZV7FqHmtUgeLy8TUtysVBKn8cpTSzuL",
  "key41": "4WSB7XKH3zzHdvrQbxjCEE43qKgm1a9JruYZ7THtAiQa49kG28KipHHLQ6jMzLFxsU3ERmXc3dY9oaKnP5AYqDgi",
  "key42": "77aiZ9e8p8e6YtxvEhrCK3tJrkGn5RY8VJ7pgW2XQpJYbiSb4P7uYQn8tx8f7ZmuBRuXY5WnSTbJTRbB3uKFDyJ",
  "key43": "2kcCpRuduz5soPykPqmveTgaYreJXujuEUZef1K3BpzgaWBgg7rdgde7Kht3m5C4GDw2erGrEXBgArnSyFztQad3",
  "key44": "4sPdwgLrM8jXR9WFDMfcFiWdHGDhgSEPee4guuQtJpUhw6z6qSsgZoLA7ESmzAtMJXDagoULgjo1Bc1NeD7jVhcg",
  "key45": "26NK2KuWgDK4gYzAJmyW1EDUyg5TLYq4JoeLZUEPZz71YEj4BLW49V1mar5hh3QowW224fionpEotpmYxyraMtYF",
  "key46": "5bKXDMjFLKwyXarxkwAFDFVhsReFQ1ifcorugDzfc6Cn1ihtGSoNT9t3pxUTbbfc6dDiqo4StpoBWW3M97G1jgEV",
  "key47": "39V7pxtsXEmwQHdQChfNFRet6gFNT6TGjbDmPvFxh6PFRSdfgpRrvhfphPvBFzJihquBSnt5mDkLhqrYZtpEe6mv",
  "key48": "5i5c4X2NJ2TMrckeGom7WkHpBnBuJZSbbNkS2iwNSv2vaTZmFD4HnpkRiJ1ncVs1qZYKRAcLegjd4Jj5mqnpM3mX"
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
