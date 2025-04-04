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
    "5g1uKtBzhdXP95usuhaBCwSKtQ1DxCZAjx8UarkRq4JY97As3Fd2PYaqqB4moEUuTxppD5F9kWygGBUPEvF83PSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjEYPEcrfJjWBjn6Rv54uP9G3VxSVHB1GiAZgGMrKPmubChJMEjA8gDU6aPa4KVoZFXng38K1r7G3AW8VWLjwZE",
  "key1": "82wUQR7WbXSxPAjDxcu4FnWkxZqdfFnTQbZGZ35csN2b1zWroPYJLM34cAgRUvEkRNd96sbvF8NSimrpjNb3bLi",
  "key2": "hB3R7FBG1Kbh3Nwvert6aq8FfMR1ZjGyNMKfk4BjV2M5X5XbDNuckrwNuxaezXLndcTMQ8scxALFiLHz5ekseUS",
  "key3": "4DkieKaCqXqN2WymaM6hNfSScE2PJBbqn69knR7WXR7m2yBNsKXDifJ5ZEJCtxXVw1cZCLCH3xhq4oH4Pmv3L1NY",
  "key4": "2Zsrit7kFEUhCW6eCoNu4xB5rTTHGKtRmwpgD3WGXvDMKSSDJP2X9CzNgECMsXWzW3gNw3aVnARzMLJuyMhHLToK",
  "key5": "3BnJea37ehbeuk1iodSxdVByVAiW6J4KmuS9tjS9pc8JLNJDqo4SgUbK4AEq9tRd24rB2XPDfxbLqrcYwFRnQqao",
  "key6": "3A2cjY1MDpXoVxJJ9tMKi1wPpp9SA14DzdBURvcL9RtiFRDNVaft67xLtQMTan6TfdWFXuuhScD7AwCqnUJq45pn",
  "key7": "418dvz5qBbW7ecnp1NeS6Bwb9yK33Xgf7V2i1Gv19MwRy5GoT1tan3Dg4TEwwPYYbxFtSg2YNPHUwz6Qqud3hQwN",
  "key8": "24xZPHmk7YvEVPgeDFtTZM4rJLjMcXCZqA8WY2yczoXqtuPen1KnLj8odc8T72RbnVpd3hkvpN9hWQN7xeef1ujw",
  "key9": "dcfDS2AyxmyzMACwEjomAT1YoYPUMXnZfSCt3V8YhQQHs48vHgibfLRfg1zE7Viq5b9yVmi2L1ruobTjeJPjePK",
  "key10": "5kqcKh3uWp6NPrDz6r129dziaukuksvP5LkGxGkJkjsnFPaBokLiL4wfsnYspmjVD7rpe4cEy43YPFESw64NfXtQ",
  "key11": "3ETS2sbCUeFcuohAE7NsprCzm7XGnY1ux4dWkGsmWp5em4mjSnJkgPG3jpMfjE46up4qXB58ctHiQwJCEx1eQocb",
  "key12": "4FjFeSZ9qE3AYSHgtQ3cRYdhjRhPPCyzwXPrRqppYAW9UWSKKVKK1w2irGFTmZnhhXypXXHZcAXJrWVBZ8eKQkK8",
  "key13": "3nk2HSvDKm77eSgEqUdY1QM47XonhVcUGGG8XcG6JGdaSEmGQrWQT9TLsgxDZAQzfn9noKrmMAz3Fk6rB8LYbpgB",
  "key14": "3UtVzSQtVzdJbVVQtxS9CTWkP11TSL1tP5bdZu9UdiRk6g1xqJPWMXKyHuK7Cbyj8sELZT9f68DDRmXz9xCfMbTt",
  "key15": "2rDGjd4AQJiBaG7SQZZRMuUKt6v5R5e48DFyjKnDc9ZXckLRRoXD2AJaZBPwwxSCZqpgUrsirGyp5FZjwyGV11nS",
  "key16": "5sCbe8LCZ5FioVD1S1us5rdM784DFZJaw7YfSo8AeDQsXDQkG4QsRr95F2X2izvgVtZYo4HGNakWaVPSouAD2jf9",
  "key17": "hzetFxQi8tGemCXfKj97isMpxqxKbvBCL1ie4o7Fcf1jvCAQ1jiqktKJbb2kyN2ribxjzppnE1kC3uGXP5w3yPU",
  "key18": "2KdCpqVEUPRZ1WAL2BKED9F8CmVFZHPR4etH83bqR1NPh4C79yMNMzbFFqygGYwExpcDuPKPpigLT15GdmpqRtPC",
  "key19": "2skaQ99P7GAV5yEZpHgniDvbdkeiRdwW6yAqsUs4PAXgaHTcQBLMWYmNBQ9cs5uDrtf1KwCgLXXV6USkAmg2fUhF",
  "key20": "4sh2oPWZ8M46uSm94KuwaGdnmXrjPcoehAGpmKqVHKktaqzAjg7TA8N3rvCg8Nak1rPdYmN9Ga4bXSQsgwctQ2JH",
  "key21": "2kJWLqcXfJpoHRabxVY7Z3eb43erZYrp35SWyAK7JZbrPQnUF4g9AkcKZeZg6xdiCQgXvjVaKtqhuj4Q7Rk45fXm",
  "key22": "2bUFuJCrEzeY81aDqY62U8VFnbV4akr9FPys8d5tMWX2F9bx2A51oMub3ymQUgDKr4axX2VywbDLs1dibCWpVYAX",
  "key23": "3s9RTPo1DZiCWSFMpKQP3skFz8CD3eyov53YVuWZw291xQXhogdfx1kBWPHV8mXEn5m5mg49hDqXsxCtNpHhyJCQ",
  "key24": "biwcb2FsKP7GyHX3SFixMnzkgGWb88JzjPCMCuxk5BTmYaRmRDAn9jB5GkQFs8yzMSCWHXoo5Vc75bP8qxZDchu",
  "key25": "3Z68W1WcXxHTy381Y3AoXjpNfFMiataZCw6sXVc3xBKJTW6Z6Yzmb8uogzRMPPHZVuucsnYM5t2aCVtD7dEwyzRJ",
  "key26": "4Afjis8XNQNTCRp2QPwA6eHhNyWvSAu4ieoviNSxpdQbkBkZpUgitc44CvgRTszAGEGzYTknDJ6kjeHtb4Y6Skyw",
  "key27": "55qmqMspKyzivNtgKNbFb4HvwCUAHcSdTZ81zYuMLkmVAbMHNkXRFyEpJB3dmYFcbHa61MsotuBMa1386SAyyJrj",
  "key28": "2Er152khaWETLCLkkGxsnByiWmu2KbcqHdjkeHtNxt7TZuSpXttFVAshHJP9pPess5fFJUUJ7eh2fgZB96N3CpPo",
  "key29": "3ghyKE3kdumMJJc7TCGzWMxcCjBqb2V4fHVA9B33uUDpnBrofqTPubvXPnZ55hF2DHyNS8Lct94Lc2or8X7Bhv2q",
  "key30": "4D4Pnk2dXKiGdo4xbc8VACF21fMaojusj7aJpSYAce6AAm53jVTMAyXcKaY4oMB8WtgcuHduYdWDywkmZ8dqoVHM",
  "key31": "TzebVCtZB8JXa2LwbLCan18SynEXiE3FZyH5fUYfCty3ym93vELkabMFZqcKYKfyuEMcAQKQoYm9xm6UXpvBa2C",
  "key32": "3P342Ggq7eWLKbcYvYjbxgMCdWabuVsKw4WTyRbAjsHXPwnNPtcTzGmKMQnpc8wERmovEcAT5CiBHatVzUR2x9hz",
  "key33": "3wr7MeJxah92mSMWL12FKdCSNVHKkKyNvcBk33Z2FeckyR1nTq4BBXxmJz6B6RiaNkLspWzdtzWsRh5Xg1CHL4v6",
  "key34": "2GRr58cJG2Y25WSMNQbzTqV6hzbSbcP3Pzj1mfTVcek41agJx5T1DuEbennnwSgdB41EYTXViEy3y6krVfVcZWiz",
  "key35": "2yCwp2kXyduC2Ji3kDED8hpnBhv9s9dNbJQe1dcKEv368YupM6sLjwZdoDwDj5X4fmikxfJdEazHfYDmCkLuifGe",
  "key36": "4gmQfWwn3mF6H4cDLhTk1f5vSUjtgDK3bfoYyiTkj2xrMz7emVrwCMmu3N6fgXdjjsUrPNrqTXGaqf3HMVW8mXyy",
  "key37": "SBnjxZRBSrFnR7hqxTHgDzYFssQZ4nUeEBoYP8j635FcQAXvBeW2j7jtFtBKAA5C1BW1Ui8e8yozRjWghvVG6G5",
  "key38": "5SwgUb8x6zt1ocehf1wDZ6eS3QSs8RoNyLC8hz33bCmTHPFidmCrdVScCverWMVQUGXhciDJC5cn85fGa4719izd",
  "key39": "42yzpmi9KzhV8s4UWN8HeYq64nBRBpD1PNnTjd3QU3HGLzmyVKPQvw2xMooLhYrLv4aeZMqtiWk4CRgpUdjLr2G9",
  "key40": "5jHmUGYocavmCxpnVpFqzakxrBwMEY1ikbJirSntGRbqsgtDedhxVAJqJjKibY2MSGQk889KokDPPjC2Q2Jyyqt5",
  "key41": "5h7S7j8H8dXFGjXUCp24Z7qzFwUVD4nAfVhEdGLJ38B7n8MnCYMNkaD9KVSyhGp4FA98WuBhz4fmdS5P8jbdnVE",
  "key42": "41NGzua5QsuX9XskksHUakHbxzX8MDGcyq2zC5xzqL1eJpFyF4VXCAqasBhnYkyZnXWeiXE6pMyKfbPfPzQdewAF",
  "key43": "5eABmo5aQPYie8ncaFDW4qQY9HP1S5sAqymA3GXYd8gPEEvYWcF1pXBCwa8FcTBSuCeHpjvbSoyahnWb2RiQqDpK",
  "key44": "2nAj81UnUkMyzfHa3aL1BhVHT9Z6oFcLJdMA2TUxXnxEXvR58xRNDNWvSSir7Pfp3sFSZhXxiSLvUx6YxbDyGANh",
  "key45": "5o3TjyvhPYQHxKrs5ogx474WTHnyz3U1bBdUmk3jKar4wJZSJkUgwu2GyLk928in3rzZrHUEecRqf8sFWTCWwy7v",
  "key46": "dG4F5XT7P3m85qV95K6CxGDNKtq6VAskb8anxQAZdQKuzf93jFe7FbML7S8yabS7DYJVGMN1mxuySXcX6k7ab1R",
  "key47": "zeuBZjqJFtqe1771Caus2b8wVkkiRXCMRcpkoP1NdPpYdcdPSkgpSmxZPT9WwcJrQTHUbAkPmR1LyFL7wKwcZk1",
  "key48": "4zgm8w8jXbjRabA8Mhm4MYyPrJ5mQWfEBVs6gkRGp2HoffH3KA5mv9o9LuKaQ94LJ92uLft8Wm9ZoivezZGLgo5v"
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
