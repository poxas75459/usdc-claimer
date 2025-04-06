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
    "2WfaQXJoySC6CHaPuZzJJZDdrVZfvzV7U9fcvwPignHCkeirrUSATmiqQ1VmqHc7YEFdPNYbSjahPN65EmgKjR9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQcxzVtuqHcVLREkgA2f6V2x9YLbisWxPpEAkT1NgnEQaAGK27M62VLcJpr4S9hSadpiSXzGPFVfHChB6YGB126",
  "key1": "5bZugieR1C5x5hD5aVZxMgazCd96K4dDFddJh8j6nGPFCRpgeH8ifcFQHpKsUQQ16RY4zvqCHXptMkScrZsc8j1g",
  "key2": "5EZTYhmUGU7DRBt365TtcokpjF6rxqYePUvEyyMYuUZyy4akYQWhr6hEgbmHBehzdhXMZSopbCtCdDwZjhhag5ri",
  "key3": "5g3S2BFjBwMp8dvb4UMKHkjuy1TvAoZP3YisbcSyQRmYJvULAZ37MAEWDkHY5HyarZdu1RdzCJyJWVYEDzaySSyF",
  "key4": "5m2xUDzfJ4aeN3JzdxcQ1ARAKyhd6qVqHXo34Stzy5x13eYoSWBLyWYB3gQMWMWJJN7nWtTscLCrVjYQVtw3cdv7",
  "key5": "3MaR2jtscxaTHuby46bh98Sb44s7Tr7VvFuHUTAMokWzbWqNVrnTvKLHNVtcKTR6kVYEFaZFJPWYHi54dRu9GQsW",
  "key6": "4TeUfv4cmewCQBMiN775XFSw9oveLYPQq4HHyG1FterBSFGUhbGp1HTcCi5g3m4HhvuNmpgnJTnNVLD1SSW3pSrA",
  "key7": "5U6LPLk2D6VUhctqhqaLmZn13WRkHGantC5NTrzhpovrV1hGS6aLcAhcUpTwEC5oMsjado1b7bo5Sw3YJ7abzhxy",
  "key8": "62vpSUbpRnzmQm6KnV1y7S32Qy4ETaoSz8rmqFZMpTnbykAMexxpN3Tsiwb2pQQME7sgSHuh9dk3bpHJYFWw13ni",
  "key9": "38nE3RpE5FUHnLgeZeaV1QegrgtC9FbtCRfBEzwpQpThqqoJ3B1eeqroWFKYA7qG386d8wyaoGBE8jBB7z9f3YJn",
  "key10": "57g86bMKqCrDCwu5J4LmA7kd5rg6FgHuvwht5rtQeaf75h4LujjKfrr3JAatrrUdsW28gkAANyhMwohYcDH6aWGj",
  "key11": "129Z146fut4xv8xBwQcqQNaSmBqC8dcRJhyaT2pxsaJfiXHUSmY8rPkGCpNXowiaMgXeayDozRwN7NbX7HjKnHzK",
  "key12": "PJTcATQkXRMqmV6YxqiNqC4DhJAow1VhhE1jdyK7gTp9ffJK4wijNXLDPVrBqHRnUiLuZBmJGQuWdRSrVbJZfud",
  "key13": "4rEfT6agZ44uTGQGbUTjmSZZHLqZSoQwLzgt8HrZu9SRUDN7MSevVKsRL2Hgh7o2L6GxyuWcbdL5nwG5ns4ABPsL",
  "key14": "4BmTxHunXNgsDBXiC3CUc4S4jKFE1UH7Wi6yS6SsgYEoFvK8JjVsgHp67oXWh3pTD9VtqTtcsMVkA4nv1sVsPypb",
  "key15": "apuHjD9izvQZJ6NwxQH5ejPduh7JVBdR4TPaYVm9qCzbE8u7ux4FX8faYw2m2xzsLCW9YtqvE6rEJEoYC8qmSnU",
  "key16": "28ZdvTVzvqU4rFGfTg1YwhHtQXKGUuhpQkyLp2o2FV4UaATkJ18uiuZFTcHskTa4HtdJd8exuTW1vm81vwJxzvwi",
  "key17": "53ULtk1LdcpENf6PZYVWVMW9oourMxn6qZmaEWMUH6Uimd5tT6d9F3oieNBn4aYoPcUhKRWYLVDJQ8uM5CJVAbbK",
  "key18": "3ZjHvjsCQfDYJcfVPmXqqf9UPtYU2KtXuu2PHZNHPiACDHpiRLrdJ7YYoCzDYWhJ3ohy5m96HBie9i6XyUVomMpS",
  "key19": "3hUtvoPL3SemxrUdi66X6eYFG386eyzeH47CLWCfKb9M3Hgj6x9FZUJr4n9jzAKjfX4GKHYgUZHpQ9tY9L776evY",
  "key20": "3g9PvQJX4FCe215VFpctXCXj3UUuT7WcrnWcZv1bmJf842eGUcnBJQAXNmNTL6Y6yHQcVEaRYh5uXbywEcunxQGU",
  "key21": "KJaoxAZv2y7YF977sWqDYNUkbSGhqYohYjb91UENHC4j3vcs4grfnW5P4jfqAauPZMH6UGjLrcTaLAW4MAd1ds7",
  "key22": "5xSNurtsyK4zCieKVDEMDJzPD5KbgMtQDSpHwMCSxbHMFr5uZ3iHugMW8NMheuFjWEKdAT7b5Ao9VNAb21aZSSQs",
  "key23": "4pHs9e5aLgn4PbR8K2hKUW9fDSnZHT1nw3UDLQCHzUuDYabk7zSvHUQfXM9GUByoMYPaTaeahmxeXsuqed3NotDF",
  "key24": "XfXhjAM3Ycqh3x8yCbd5iBYf55QYq5GbDRB68d7p4iaiQDqXoxzDhJB8n3bvHe9c7jEW8EBfxLydKWtYZJArxbU",
  "key25": "33AJgjeG7aGzYTCW48jHTPCyXfLvypPp6jDVQ4AXNUZZXdQdyW46kUk7CTT5dstTvZxdS7zAqRGSU2W9s9yJ5KQB",
  "key26": "61FBMyKW6BkMeztUcZAUoCMAYtQzFZJN6A14ay16Adx13GzSAMdc4FKyEPCg8yp7sCq6VK4r3Rwnyox9WfF6QSZ7",
  "key27": "5SyBk7KdqtqQp8c8jnBH8ueDck4Mto6a2gWg4N5RigfNHd7C5eciqQf5CEkQVvY7DuMnqtqe97nUF97V9M2bh5mR",
  "key28": "23kw6BS4XHCF2HG6E2FFmBf8SViJ4fmdaUXV6Jm9CLuLZMaSw6YbeDp5Vbx4Z9v2esyTz21WpoGEyRcQdcjhpReC",
  "key29": "5KrJoLNmNe4A3bh4CNuyY6Cv9Fx6w5Tj4JcKW2eAvQQXsiANAJZVa4LYQZ2Nfne6uQVK3j2Sq4DXgbpUsMatxbYs",
  "key30": "VaNG1eXatjWVGc2uwTgkKCMYeWHUAdLAsAnLAkb3tbacQMNFNzqUGUcQXv1e6YE6hr5ajZZcQYNqYFQxHJVuZ2Z",
  "key31": "2JE3KTsyEuHckWFqaQkZx38ja71ZzsEG2gUhbaENM2ACSXCNgx2u8fVc74SCzFjYMeZtPmzrzZFyYb4am6PW5jmD",
  "key32": "FqYhoUQinu8b2osP1vuqtcCumErgcZFe3yD4fcv6q6WFPe26rLTf137ksLjkFjFAn16At8dWUSj8XB3EdLdDkUv",
  "key33": "5u7vmAFourGTdMrXzewUN4FRxa8QLcQKDkbcHHUZWLAqd3k9rsAAnvkGvbpS3Td2mx4Huw8KjgUvW8YH2pXjHEu7",
  "key34": "3RwfTcfeV9ntvNSxhfqpF2Bdt3etYmFZcvaBN2yY8SoBTCgk7LhBYS9X9N2SXrHUDoEUCm3wBHRR4HGoY34hgLom",
  "key35": "4rNiHLy7dLhtRxvao1ys95Cs2o6YRsFPhfB7YiEePdxbCt4aEFWSqWu3mFuGSrAA4WqyXBHkeAU1WzYyZMd5Voqa",
  "key36": "32jkhMasFGUBP6TyjuUK3tuhjS9CJkQ1eafYJWNUSaYgajyiV3BNMHgCk5XWLfWApbpF9DoikCU67aaAh3MEkG6D",
  "key37": "yw1dgGhBMnqHVVuPRsfHnP8aNBwSrR6pMT4qrdKpxRzY5XteBiXz1sNmX3AX5uMoAMXnfw2Nm5uEQ8NppZa1jVS",
  "key38": "4sjquu2iHvYuNa3pd7XBvxED573Tmtz79jD4UP5KwMHhHfqWjm5HxGUyA5tt9wqsDTmE3GhdPcMSLt7aytkLgnzd",
  "key39": "5zeWrB3t4q11R9HBgLsVyV97J4GTEPUnVV8W95xYBbfBfUjzxHTFy9ah8PomdFGjw6rZ6qE5Sbbw6vMY4cSx7Ha6",
  "key40": "2rEvfjNrbNDQhJ1APtiqxLQC2fHzEbFAgZKuwqFYRzdLmTsXhrnuab2CNUVfN1S5TVxgcc1bzw4WErNTzuPyuy33",
  "key41": "3s4BtQXWLPcMmf3ihcxMzQ9fPRVhkVRN7tq8zoLmk4ovZ4hy6Rcp6psUhQAJ6mSfHaqc16q9e7NaxWiqTiS2kMDR",
  "key42": "QREPQuN1FQRp6dbjinTHsnuRhpAMRdSaVivXCpnPZn8DpTgybbSzQStxcULpTLxEEB2gEyVe7kdg8uqnWMX1tDd",
  "key43": "7pUb9QV1K6natUo94epE6rdq8ofRaAakQLJmH43ksPC7Co4uGSQ4ocQGdZFz1JFbDuGA8Xfa8yhodycpPLW996A",
  "key44": "4nreoLBrSZN1PctMisyMwKKqCC17Pjznz7tWd7MEXHwBrbK8WBV2ncUKqjFybacmBHVU5HPtAtpVnRFya8NfC3us",
  "key45": "4pdF99PKk7QnqP35ECafouef5CQCJRhNCp8WFZ6Ygyjhbi8rrSCDRDPqYKokGoAtnJxBsT1aqu29GsXKEt7qEhPn",
  "key46": "5mLaEb7PpyynqqmQ19tMSvMkiewUzDY4TaMprxNgW8n4hptYEW6ukPviPVgCbsHLadyeuGgCponsD6qoUtsG8ZxV",
  "key47": "3YRyozQAiXWs7LqriPXJ8JeaNbpB1xE6eAgkupzHAkiz5vLu84xHA1E8VVRDpiDxr5gLpafxDjPzVcA7F86DqxQk",
  "key48": "44hDBx6M5hh1uB5NHA2SAfoQtPf7XHTeATbKSAgwY6i7WV1tgF5LDc9cwS37bUYm2bNbF9U3eNBfh1Pjemvu29As"
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
