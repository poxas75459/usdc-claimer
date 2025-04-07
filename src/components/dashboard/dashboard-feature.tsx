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
    "3MzfF5oVex8bYNa3JofqvHZH6hMquHVxRM8vaSM9ypKd1p8W7WWHU4FvQ8LihgYoWTzQNisUDxhd9EhQ74746gFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xcNxgG5vHraAqxdBwVaihDZi8fhUTaNoB2UmZd59wKqCLBQRnxx5PeR6vVTVKUmR6obnqswHN4FBEz5tfqQg7io",
  "key1": "3k99cvpnHMbtSGBHFZPFkn62d9D24xPf4H8BYsPLh8DygNLiHzpJtC9WuscFQq7xh8i1seTawYH5F9yhkT7xHFaF",
  "key2": "3Po5FfFuWbqH4sa78x6PY1ha9aPg9UQtmMYjq17CF33mgqHJvm5daaS5eCvcYz9wWwWo3XtAiBiJfkVf8Ks7vFta",
  "key3": "2q4YURA2LsjDtipg6YZ5ybFGYAT2JgN3n2cKAHjoHkimCjtnVL4EjxG7c3VAt53E3WGoRADZ72Dv1xk5DiZDi2Sh",
  "key4": "4B6DVHbQuBF8QqU45m1NgNkWFXqMxB9U4FZ5YHn3kDmfdTZgDSx4V9bngXo7AUKWU7SqDwvoaQnwcm9cvGPf7b71",
  "key5": "3KApuk9VqPWSdyroKUHAcszA3tT7i8XnVDjqEBVTRB5AGneBkTnzYpsRVDy9qxumZ868a3WupC3qyhpd6JLeDV6W",
  "key6": "5mhDNndpvApdKXDtk56S6e4UzjM4yenKtVLn5ng1tZvd3xSa1ASVZi89grWarBKhzb5aKfnuydapMhSdTFXwG34Z",
  "key7": "2r79TvhM2MUL8Wd3CirhQ76cfLAbN11CHYCvdVYS1yukByGmLDosFZ8LJ6a73kLEiS7cksA9aYzNsqadhzwifniD",
  "key8": "wx6xpNkVCHMDCYmeTav4droBnnmw3DPhNLdBsRNfbEQDc2JKYPjvA2expGc1Ftx58yTfhcpVSXmu4766C2bawPp",
  "key9": "r4XKY9eFPttRc3Tp4GVLootfnY5ttSgn8e6WZLdFqcUcKr8uyVRqFr9x9niR76DVS75XSHdxoBtkNTrq784yqe3",
  "key10": "2TC9XCU85YCEpz4D687H4aVTNQ35wbGn4C64XKPFR8acZYXPsetxEjbRoVzs4D4i3MWbwLtPsHJ5LiYtDC4rbdw3",
  "key11": "3bH3BQvcEgAcpUGzJaFWJCDXXndBqGcatye3Ch9ZC6kDuoazUVtVFWWm678wHysUdrCAKmarGSnTTN7esMVheeCs",
  "key12": "2Zk4K1vwzSQ23PAGzzM2BTBjB2WzPWgk1mrEfotM6WdrvF7tyNNGzMmCxVGLBrR3XPoR44r4X4veLzzgdEhTozsx",
  "key13": "2p5ZF6petPWTuP8VFTRwsgKo85Z2yXMRwd5GwWu3NLyzH2HLkqqbnMKJ5PXnrBcWUtoZ4RbXvC5mY36A65FHXYxR",
  "key14": "4VoJXd8RspRcdj3ZRnPADf7StfVLwupoJxgKU2BWdBs8JHowDySn3AJtntCKeYLoE8KFJPcHKr67DmqNknCF3jFo",
  "key15": "2RvAc4MVtU86efM67NA6z3qk4M9o4sNSZMGMcW7bXWw3xMnRXxFLnrFBcBH8nhmtg7syQRMmopazeaQ9WeFEKCHX",
  "key16": "5HtLMnMr7eYHy4amHEcnN2hFY9ecWPxRjb7wuCKBmc3YaqqX5Khm5DpEJ6n7k9gvb3zqeUt57fBC6HpxU9qf9JiS",
  "key17": "2Q6WqgtZYfvSVqKnC4Uw8uWXMeKdq6TVXcmc9o8yA9rGTLDTcsKmzyDUA73Ecezsbjp3JsnZXN5hKAzJWFHM3r4d",
  "key18": "2eYvg1MX8ZVardmHxiaH4DL5ib5Cj6hth12vzx9m9YHmh6BB4ZSmMQUesYGW5Y4jUsQodrk8nvNsSrTHgw5iyx4C",
  "key19": "4Ca95uZghXFNUCtWZiHKxzGFJr1AUyiuEcKAFmNoXhV8hrqscU1ApREt3jzztVzwT4SR4gS6Q1ZrhGy8nxR5VGfF",
  "key20": "4qx2qYmF16qTbG4uZeR6ruY496nQ5PZM4cL6aUQJ1ZQcsXGt6PHkQ9mEKfenSqxxsdQDPKjx52BkACc9R82heeJ8",
  "key21": "4FimUamBgCM3oxW5LmvWUx9pMynM6D7zFPuc117Hw54QiyCXmGSAKzHdAuPbndvXtNQLemJiUBY8LPAiPDoZeqD2",
  "key22": "4smpmQrUM1SvK5CekczDom8oS7ebnbJ92oxsVjLQp3FMiEAuLAJAbG9aUTH1RMFf6244Ha3CxoPKB1L8Ja2HxhfD",
  "key23": "3FCHSLJzbqWUVutEpNPRxmk3bXVKoCuXFZg7ZBm9f4ziRYQGocFFmNd9H4FavN2SsrFKDMdtJDfTCk8v5ognVEjY",
  "key24": "Syujk6kTHXK2E7bP6yhgRWH94G3NTrKxMKvTsmdWMDmhaXjPeyXT1nAPPf5qxb11RtMd4cggp557fdtkiCzKQ5V",
  "key25": "2XjhJ6wE5Nhv9S5h4V1Df773dEwYetw5DmZfH1goKQE29GTP6vvEojFn4CT8ST9neQtPmu18KwBxWmih2MYyJ4vj",
  "key26": "6675j35KatTUdzq4RYxCDugWESdyesvipzfmpGBGBVDyDnnDc5VutsaZD3vJPnbwoqUPhTXTLLMfrtgToS6ASZdV",
  "key27": "5xeoDGEngeBTenSFDYzGR9rHbuBTcPGPHGJm2zjYVxSWJ6y6ncKnEq9WGcjRCoHBmKzfLPnqwCR4mrmTkdioUuY5",
  "key28": "5YdFex3b5oXFDxY2goHAoezC8mcjPYDCdy2mdCLgJ17hyasQuXBX3hKn3WexCLKX2BA47psNyi6mkHYE7jX2bUH4",
  "key29": "4Q4FqoFCExMpVpRhc7qgZDuHQPHk61U23sc9xbryhTMb5wQX5SXNxUSMtPmLq6RGuXL8QkvpjP1GcXAiLqWhQWzj",
  "key30": "4fQvJWVbTvhmt7g8XPgqSR6naU9JsiAxSGB8inw3W1UfFQCFvJp3imCfn2H2FU1m3m8FmJ1vPW7y6UxsLtuqaN2k",
  "key31": "3QWWfrExQ6gAaFgKZspK6Apdn291jDDH7PiDWc3K2Esy4uC451cAmqPjunaxBNioepZzNccuszV374dNKDYVRDhk",
  "key32": "xvmULbK9BYdYLhNkRgF1cQCXC78qtCGrgr4Fic55Ar8fP4VoZ2aHpD5SqGSZUzvQWb5MTuqgn8Qg4ugvc1ufZHT",
  "key33": "5KUgkfZZk6RrouUD9ePVdwatemfz7N37iwQoQKKyBiPMowxTFHsxH7ZRy8B2gYJapYAkVZrw8XyFDeSTn6wLjXTB",
  "key34": "2ueFT13u1cH9wtAaxVbkgi24z5hAXhXJHopcgUdjx8eZjx4F6CUY6UFKJujxGHTSaVhWNLKZCEdkWh5UEyzF6ZYQ",
  "key35": "qunCG7a2pCSR8RG9VKE58JoojjU4eLDQPAP2yVMKX8xeqB26MgyyF9s467ChKxDn5PuaMvmfE1LNR6icMeWskso",
  "key36": "47jSMVCvvEoJiay3TX5mNA5TP5ty2pgihkBvfDVmKo4ZdbnCZTGsvApTbJ5SPTdC3NLHR1T5X5CUpT2hcxqC23N4",
  "key37": "53uD35NvCsr9FD4Rr6pWCxZXLS9HabxBoadwS1ib7uAzAVk4SfCkXWuDndC8oqwV8kosLvb7QJaMBzEJbk7kp6ko",
  "key38": "3G6vBcs3GuYDJ455mquMYyLqLYCD13M7UBzeep1NokaaMSDnPBiUyboMJY3CT63BCzV7BEfgPyKyzYByQAvB6CGs",
  "key39": "47nXKK3JqMVsiTaL2vsBca1uyVBcvhM51NagMNrCsx3mJaBygYCX98m867SV3UST8XTqo1WNV9EuZ2moFK4kD2Vu",
  "key40": "syHn69FNcRK2d4zmPsd12KKTaSgRP1iVLyH4tn8h5Bt1a1AeJjcG15KXhRLUWSVdn1d4wg3YED6yBPDhLgRJ7mY",
  "key41": "4s6TfC2x68cmsVqBukow6tsjaxrcyn3nyvcrkcKrKfD9ZsyGtAmpgi7NMizH1CZUBFf8fXjFxREvWkr85LnX1Z7k",
  "key42": "gHhnmwRgmyoVGq4GGknXPTBGokSob4LVEoATM9D7kaGCmWL8f2jkttQCEnG1SjupqECNRUvSEZLFqmEHFR5XU4t",
  "key43": "2feFeYZw8Y1zDUqmhFuiAMkQEXmJrnXPgSATPSWZUbrqSdKYXPGQuwCZJrPRroCxP1tLFrwQ2KJ7uvAeHY7SeMZ5",
  "key44": "2ghS2sMkz9n6hs6gdSCBrzTGpHSuwfkdzfoNCSJLAovGLLhzFLXfBx7fbtkssKRxHmUwtSu1JeatKSL4xfF5dfLQ",
  "key45": "5uCvLsgSXKQ7Am4KXDWxvCRzZFPFKqZj3cBwtBrJzCPYVJUCCjuD9AbtCgQxeZyRUL42467oFV8JtmGta7pqgajy",
  "key46": "3pn1mba6zJC392WVj3YRNXQxQ9fjPJsV5p3qykZeaeHsRAVH47yjFh31PGFHWQXt6aNxQ8WkeqhW3xxT7cvWSz85",
  "key47": "2XfntV5fWxyFaVZv7DjHNgYWAVkAZqheRTmxeZyngRscSi2vPLBtn4snvFUwWYNWE1tkzyvH6Xzacr3gNu977DR2",
  "key48": "3NRzoHFdDs3SYbFzJKWoyiApgdWYBWTYCn5gNkt6VTU2eVyZgBiB1dajxmFvR6sWB172cAipnG7AURyUgtSnRQWb",
  "key49": "4JawVF8ijPWSKmCQQA7wSWrUjznNNdDHMmNh1tPuV3BkDaxQyE5SqiL8fo8Vn4Q7vmzB6TN4DeH3A9GQjzx9R821"
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
