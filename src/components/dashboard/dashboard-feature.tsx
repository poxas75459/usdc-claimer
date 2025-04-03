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
    "3mQaZHWCf5FYwjnv5j265xGm1obb6ZCX6icox2h5FK9X5fa968eZyupJdZzxpqYyese6ZXVN4tR9oiG9QsB79R5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZ2EqP2QSzHdK9rJNzoHEqn42H58adtbFMYHamZvuML8Z4sp713onDwj3dzCDnSxUxJRNRg4WHxQBUr3sfbUsoL",
  "key1": "3w4G9mK8XQLXjf161QR5gEn6V6HPx8h4rqcbKQUXXnqsnnCAANiJEADsXckUx3WXRgehEZj7MkDKfcxwJVtFMS4F",
  "key2": "676wnRmNSkQxCHRs6uH6fspVUaTAHUpwguugSSFYoFSa5XenfPpazehG4f19fgTS1GsCBuUfjXLm8bETdubcuBCz",
  "key3": "4A2kfPUY6MPVJcimS55HPZ8nnbNzawuUqVte4yQBdUmfUouk4uwX9A5Vk8n4ddJH1d2cyiFRoaKHegQBzbhP5hhz",
  "key4": "3yhNeygo3iJZhyyNZ5zwBCsSDg72WcHbBymRqPapes7JqqmFGLvdHXnsda26eKcot3ELxyjKRag6bK5mTWudQcjY",
  "key5": "62QykCDkU1Kmby8GNb44fgv5nwqpx696ScqxkyFqUrjcixHBD1Cqop5xZrYp33oZjCEr23vQfy6GmzbvcLhzcz76",
  "key6": "oJUY6GX7C6e96sSXzqHXnrQykZvuVHQuAhpyiN6dqbJU9rbYt87xCzN4iu75D8o9FatetqpXtKCwBctRm4jmwCU",
  "key7": "2Evf5CmHmbR2wwHtfSWiLLxokwn2bTQnsZEjBXbKB748Dsj6hEdFwfNeb9eaLdECBhUR5Rsc3aqo9sg4UZ8ovWJr",
  "key8": "2ewx3VpHfPiuJPwRBVEzZpfr1zXC9BFnVFaSzk1kSKTajBBLrV2ZDKdSCnP8VmdPSWJr9CEftRFPPE6Vf2w7PUbD",
  "key9": "3HDTwJPoL3QdqwDGiZqTxZpNiMZ2BjWESX34aM37JspTtnBHXhpocsKD4siQKb2JEU2dvVT8YbVvb95xWcpHKB65",
  "key10": "vGkuVkubKY5vJvhrUgQ1YwseyPaUwinYSzmgYxfYbGvUNbNM255KGLKVmFXvBHHGPNfTdiKyW6vgjsndfr6iHyT",
  "key11": "2fECmGA9FF2dZUkAJxwRgHdhk8gvB625PyjQy9HbxA8fSwnf9LSS2WQbvHhfGDnL3FsegkYrdgN51sEstT92D9dg",
  "key12": "2eL1C2ZvFMfRzQyFFgwPcy49cMhLyakb6Ngkkmz6KxKfngg8nQiX2zHi93K9vsmDLenUGE4vxQwRXfZyw7XW6URV",
  "key13": "4foTCSDm5yyaSEqKVxz6RzJCYRLg5GFhRhjG7DF7ZEj7N2GLCNneEjMVRGxbUV4kfXzCuXEbiPT4z9hjCcLAFTt9",
  "key14": "WRLZ7LBDb8uftmbU8Krv4Pmrk8gTmsMuUZLLrhsgtgiMUCwq3ZBuwRDd4qbGtpsJUZ4WzMQ66hXV2ng5jSp1xUE",
  "key15": "2eL7MYm3ZS28KqYhc6pUAhSSZ8duFYDmX76wJTgkVTyx5b3jjziRWDMKSsceb6YFSasDG3Brd8AkmAfL6ubT75Hd",
  "key16": "5ahoypCDESHcZA1RxE8pF2ivLRePKNj6jPze2YqSBnJeXGZaK8us7cHv81ARLT7M1d2jMdpHes7dWnzdoyty6yB",
  "key17": "526fELdzfU7gGz8Rjq4qzkjSJLamj4pn6DYUGaY89TF6xYUwKRnCr44R2nAYFZgzu1gVerKBTkwBq6eZA5BBkYvA",
  "key18": "VkvWj5s2icVyokT7p5qq32g5dVMfoKbNH5tnY6wGvkeEKPx66jLurf2VZKYkktEaWUg8VKNAC4ufqHCDmKQ153S",
  "key19": "2rnshWxtLhXde6VcPmq4F3WnniM7mvkURYkCDCmAVqd8bzZXVVAN48W6gTwdRZweFDepm6Ld2sfVDwQ89ZEuupY9",
  "key20": "4YSvTSqse4fiy2AWSnQ2PaNUuNMWN9fr2LQgDDSEbaJ9PBqKWnCt47KuCHQtxNUsBRgMRePxz1eMjcDbFfv86rD3",
  "key21": "2Kp6ijw7EokfVo2HoFZxqeL8o8tdvd7YrNFAsVjRPNX8aJ9wxwCbD31nHDAXexB8BwvFBfY5QKRfpaxL3mjDNkjm",
  "key22": "39GpuVcZVgoyXrAY9qF1qDp9QPUht4dJmfqj941VE28kZ74hKNNaC1m1bB85Qb7odXf1eyobCGxbC6iRoSrA6tLo",
  "key23": "3PhcR2vW7MNaGhfKqFrXzFprYzWSXpcWDMYote94tbTYnXUKBS8MrJfVA6cDoMkZoKbgC61ALEMiLcM4nQcmwfdb",
  "key24": "4nNwjGqcXwrAzVvK2tfxq7fRqUXp9AJJcB1X8ir5yNGXjeSKxFWuo84KkUiKDQjPj51TFBC9q1voduz9xEtRa6WU",
  "key25": "P6sL8PuVVS6peEKSKrdhAdoeLYuSFg1GCqiFjrJ3tSXjazjqU5S8uPkwovwVLvYPAZFw4FZtuxU4AqYgGHJ83ih",
  "key26": "3azPEHyg3gwfiNqrSzMx2kXWG8dotJHvgz6F52VYdHJ1nwpianYg1BmJJr4LENW8xqUnE3V8FbXhYErr3VcLcQoJ",
  "key27": "2ANSJ2Dqm1RxvfGsoZggUVMgYgAy7et5mqbtmKQmkq4tZtFU9zsNa3HT9rBZWeUGrSfiJz58LihHkHTTbYiVsFpw",
  "key28": "3MHJQSLCaf7KxERY94LSbKMkiepdXuQDw7B1HHMcTUqy4r4A8wcx9BuPBLdnnBk7r6Wm2KY6HQGZ4rqUgpwojfrQ",
  "key29": "wMJKR2fNn4spYtXKaNiDC99EZXHpnEPtd7Tr4juD9rFQPa1NSGcDLchoec9TjtRzaKambG5qfsUPi1rgUzXAJdn",
  "key30": "29gxKnNYw8gSz3a9KXzF8mujztAbfmLNkipxbYSxu7Fix1HhaBn7eRVthjrqseHeKe7cfy44fsxMWVX6ZkyVWY6H",
  "key31": "7Xos6s9kV9xKzieLD3BNEzRvgZtHPSNiAXBEmhuFcK2fW1hex2BTxDTfr3w6SgtCwunWmM5tNNzB9xMCYR3vkXa",
  "key32": "3MkbrWfXN6aVXxprm9kRRY8srrZqdCGasB2wvV2RjzPBYumMA2rwc1uHewCqhGFwwV4K4PM7PR9rFTqfkhkWue7c",
  "key33": "3Uuem934PpSQPiqZU32YcN3AWPKXGAT5WWHpVFRLLUWrSu5AwVUcEZuv5WkaBZ631o2rGmaPXo2238EiphtsV9MP",
  "key34": "2grdS2eShv5coEj2XBh2KFwz5apBC7avB1B2synCHzkEfLdR7dnFFY1CvJdz3WXvPfZwpyBgabivjBqhV6vuvU29",
  "key35": "4UNytbW3t2hJxRkti1j5UzsR5poYYSDHbARw757GJsMQeimx6fXMLm93q6P79iwHg79auvowanXsfbf6ES7o8JTt",
  "key36": "4EU1dP9Cr6y9L6jDxyhw9MhKiyW8tuL24s7ynEihB5URZL7pxcuzfb7MjeDA3dSMmmyP9fFMMKQ9Q4romzyFDFSC",
  "key37": "2Z3ZqkycYHMNFm4GjU9KAAbk983QjTY81jssJYV6p5VkXfdycoFMjRTbdpdJnx32TEp934WEbKx339nv3F3teQfZ",
  "key38": "2shpgjuawa8KVCmsYT8WjVe1btuFC4RY6fCnse583Leb5aj2qaAMDQdy8EYgWG5pFUui2z5keHwHMRBPvNjqFMJr",
  "key39": "2vhYAHpUNjrY3V28SV9WdhNXgNFuSgZqyELBjwZYpZqp39Azzi3zeH2v4UpMsaELnWdh4UT1nCN7hXxmhfUMbkoX",
  "key40": "sH3iC6gT49zP3TDcnZvmoVR6mr1hfymS7WophmSAp8nCpCnhTREdGNvRCvg2FLJhAjddkDjMs2uxJ2navSFzgGw",
  "key41": "4E51HzWP3tLLV5k59zHASXjKnV3K5yeEFmgbF3YMvP84F8VY5SCpiivTYWmJH9kSZzrQvA2eNe4f25o5JKnvxFco",
  "key42": "3fEVxBRD3kz11ii8eeT8X16K89DuGVhTDdppun2bUhwCaRNAiNysknEocYU3cdW2o6PjjzShB8WpwbrqD6rG89HP",
  "key43": "4x6oB5ZWAr1Uqjrnv9QGy1UAtAzYGnTShLfXxtQXGDVC5EY6QcfDx9VRP5YqYp6VSJNjeJm2S24wjFrtZ7in2REX",
  "key44": "5VRU1sinYQdUj6mvcJvcHJsPhg87sJNEUyL17prHNH8kj7ak3rMF9yzVF2zqt395xv83ZkrSsNSwbCUiguiQMcrV"
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
