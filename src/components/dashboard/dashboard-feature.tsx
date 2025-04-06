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
    "w8SneYKhVQfLVUTigdKUp8tLuuHqShrnppn9PK85qQBn782FEC921WFHVD1h3pa2DDrf281iZGWr1KCF5wKNxGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ehbo4iQDpTEqjgzMkoH7EPipJ9xEKGAvMiBYAJz9ECu3NuWvXTo119cfQNK6vdsHbaWnAP3Mk8gT99NcyXu1pZb",
  "key1": "2AZGEjX6co5qpwDiMChuEHaQhiAjWFMGatJfamUAZ5mUSqp1Jb9nhXAfB9pfFHvU9VBtfoRGDmoGWdpC6TzFN9La",
  "key2": "3adGxuYNpi8eUytj5FnUHfwPmKu12qW1kqet8MMvnKFDPcB395uZDo7f7NbVfrAQJus1aMNDPfgXVXa6NmfaJj3o",
  "key3": "2fSn1R6HFLHMz1FEeLpb9CbfaNBuegMn7GiZQuFiRyYoZsjdaioEc1a8XowfNJaxxNcJ7Qyyb7Bbqy9TkJu84CBd",
  "key4": "4D4tpztqHT66veeanNeSfo83WRLjRwkEkTiXo9RxF2q99ma7mneDhaudwhCSFqkT6Vw2gngASskwdrvLHERsZNqy",
  "key5": "2apcGx1VkY1HcRL1yQh2i5k7EayuBnzK4kLKPdekSx2rbLt2oTM5DZ14RbfNWLh6gbwkS1kWy8jcuZoj2ZEapqEU",
  "key6": "23FLSRcjMrqoQ7WX94P6daR1FyLpJNofKsU9Pj7xRDAwEMc3STs7K6CQPwpsfqvEVhx4gb1PawZwxYUf5CKGKtNi",
  "key7": "3wiMbymHxUdk5r2wsbeGQU68cgVi9EkRwj5vM9xbEG1ZGgBpPuWg9fBxLf218ZKzY9wfCQbs6X7MgnQbn8mHfaMS",
  "key8": "2HsapLMbpXThHQkj4Pg45pZvzErVfS7VtVRffKdnaAVxP55gghC9Jmz1SMvggsT3En7GrDh3fJBdwXBALSoxHEBr",
  "key9": "2TPYhLM5PuW8LpnyvTuRrW6Yt9EbJdv8y4agNrVivrEirBTseDa6NiBv1cg5JSfa6165AL4hpGa9NNq1BKpQSVK5",
  "key10": "QBZQC2L3WvaFWpuyQnjv8EFFigg4D4oq8ZVjSgm2vLBPa1juTz7v97Wnv2aJBi3qjZ6HQGs1fVnvj6AHJz9ChrD",
  "key11": "2x3BhKWA5w12Mx1KuenY72DtZCBtYsoQ3HHPbuowHXudnEA6gUorgHg2iW1sKo6TjufMbrDR2yWzfNQcR8saQ8zs",
  "key12": "5kE4Zf66KTMHbNa5n5obYxsWFUsPBrWCx2gxxFzX231nPfQa3Tq1p8Yg8QUyeD2LDQPp7AHLNCuCSDmQAz8qDkND",
  "key13": "4Kpo9ha3LzE7oLtQkFr69SYanpSZjLpCFvD4ZxH4gkZhXA5qroNfLircXFpH3eTPT8535Dg5C5uAPgQyH4CNsoAb",
  "key14": "4uEFmHmcy5hJoVupAGGxYua9LYHSj8wJByFA1CjyQSgPattqTxDdPtYiSzvqTfXi5QK9NnrK9hYkVMBpiubJbpSx",
  "key15": "4P8YqSPxYANNCWuBty82WQD2pTDx7PnSrKNVv3bL9TVKQfyFuribwDLvoNcEaXEhFGQ2fnyB7ovQ5NRjsXfr8QN4",
  "key16": "5qeAag6E1JNJoNwn7cVuKSe2weRkoZ1Cb7Hq1NBg3ErhxVpQEfPVHLMBdoHigkDviASvpQ5VYN2QLjhgwTwwsh2b",
  "key17": "2YCpeaMGM2JjBxxs88LSnw4Kd5e92ESWZUSvJ2wA5HLofs4CNAg9MdueQCsHLupH7efzp6LR3p5WrQNXYZxkzEJE",
  "key18": "5qQHc8QeLkcmTA2iVbUk6EnFwgJWFfe52yXwq8ZGCeXtbwevsfoBjcwjUudpBYY4T8XPrPqkdrXDwy8vpjNdgzKp",
  "key19": "Dx3k1Dp1vuHLDwc9RDhQuAZeE3jb6q5ihySX9Dj6VuHrXQeduDvCpzuPQnKY1W57WRLYEV42eEprPgBK7MMCo3K",
  "key20": "2KQMGHCvF55j9s1KkPLP6rLWhZ5rruJyMfyVD7iCzZY5YP6kYAZ2ibRj3u8t5qkV9xmJPMuKXzw6yHbPRw3a8f5K",
  "key21": "5NSvLkMrxpJ2q2LfpQg8C93eEFF6hMbHW4tRnJJptqnWGvHAoUzBE4aJy4PH2FGDdBs8FuQvsE65r6oqcwXrhggu",
  "key22": "4crfRVSnq6n4FP2ruH5dKjuRaUUJVUNvGCv8i8vrbiAcB2PNHdDaeFAR5Cw5MXQo6nbmYnh9yaRbJJm5LuqLsPcy",
  "key23": "67Dvv2CmnHcKDaWwtRqQnoHG8MujNyYYzgsjSPzhBSboE3msyvgJcYg4mXag3sCrNSvazc12VJ9X8u9G9tHYZ2TQ",
  "key24": "2h49KnxJFHUzpdvf1A8NY35nufo4CMyTa98aisyuQDGAS9ytUj3WL6BH8sMVBfbwMTM7hbAeHMWqLVB6R2iJSsL",
  "key25": "3bx44WQwnBfTHfceoaDujZB8EUTXNkLzbG2dVV7AhovTDR477mqwthT9G4PdjLdcWbh2W6WHuHvFkbHKquVPH9U1",
  "key26": "fAW8iF43TjBX6nfAwK8jcr9KTtz2NMyYgs7bRGNxprM8HpVVsJwVJC48DiQgaC1tFA9WGLoYDaaJoVaAUttcSzA",
  "key27": "3Rdsb6YK3XZcVausxLBCh2RjV5LhHyfL8GRWo9ZEDi9DfQvGx1XiD5gnX2TXcfQt7KEhYCSTJtUxsFUAzNLJCbPE",
  "key28": "mDQrPy1AF6K72EWkBUd1v33XzCZ8LkEL63owH7xMFjffcHJA2L1HYpTWcWtSFvFFTcuhdUGdsXDJgbvhEdTtrUB",
  "key29": "3AS2dBJb35ywyEz9hTzv6NREnPYAY2KTto9d1DS8usyeNskRNDvkN5hjoxGy5Xmn7rBjMfTvGxq2HiorkjV9QJ7L",
  "key30": "V6TuuLFS6sGV4QKQ34gPfUWLo9kizp6hdTToPjhFzowpw91nff79H3RPxgX4CHmkGQaQLXxd1WMNoNZsz7ZL9dr",
  "key31": "5UibGu76oDpHeRy9WVKkGGtCs5ag8eB4d6zCzXT9aHvJD3eebXR88oQnH7XwT2BdroRNg5UGU1WidtNbrpwRyFQp",
  "key32": "4PQkVc2Fcnp3zU13CzXH79Qch58VDit5g2r4dvAxpn6z6x2umC24W1MWy6U72VQRTJ8XzMUtMEauVryGT1awrWqy",
  "key33": "53wSk7Xx4Hf81zq4fP42gmsNeTW4Mf12gSZuyszxHB1KndoKzSeN5MmgmZpQ39aGEfH9ohvwreoq2wyLUSs1wCKp",
  "key34": "4aWmhReE9QQoaVwHUMNWpbpnBnAmR28ZLNTwm3xgEWkeZowq6XpZCYbGu13gnKuRsBUJPAet34mX4yUdkGbCJWxa",
  "key35": "5WeLvLcv3UtUKmj82bAwHsKN1UB5A3qVUGXHGTJuGE2Jo5sJJQ8eHuxmBFd1ibRYwSs3f7hvRheTTKP34sxYqGWW",
  "key36": "5Ai34JRsQb1A9w4zgeusTkQUA78z5caWjVbmfa17a1jpamnt6nsuk1jsCWt2ZfXAyqYz1thRB1GYba1mbW5T5Sxc",
  "key37": "4zAP2JUjqT3nCofAncgpW2ov5Ug4rv2RJP8avAm7sJ7fYohERpdMmzbXt9HCSCbMv1qvsJbJecPZTSyYgFwzM7yx",
  "key38": "5YWURJcc6QBCz5vmvjqkXzpdxAyu5jJjYzXZY1jhavd4x9zRGqTTCegBKmuPnHfo23NmqAiDfqqMyypSCfiKGm8i",
  "key39": "259qwNfjkNeBwDKuEG6S8cMmfaGNMrfX48LRxrtxBqwTHVr5GfZttGddqTB7nK17mcUsFAzKsFZy6MdbLbLoEdHN",
  "key40": "4G4HDbTpSGHGwgsCynhc2VxEFxnYbkHk3SpMpgAJF2CX6PTACvyunARNWFsNuj8XKjqAaxVQtv8ErJm6cYT7k6xs",
  "key41": "4D2M9a1vkupopNg5gbGbje7fgWqx7EqsfSdcaSpzTAnjBq8SP6oWQhrGUwJ2x8oWivdAy3ADfuuhq4EqHxWMkyG",
  "key42": "3AK5YKyyA2X76ViarSzAd2TLybDMsnm13R5HNiXSrVXdXeR3WaiBkMjdVZmYfWL9STvEgV6N9NEvg3pcDRcp38ZN",
  "key43": "4Ayk1SMBK7kcNpkmHLPP8Nkuhe3kR6Njw7hCfazE9gGtjZWWq6F4H4HdDABMzw3eHSU9ouXum4xPvBCijYDwyftU",
  "key44": "5YbmD2a32kHQUs5PRvvUowmNW7au1xg4xokZEVkS2ZVDRaEhPSheAS9wa3aWuDwXpGgw68QLZZfCjvkYYHznCoiL"
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
