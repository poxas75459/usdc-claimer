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
    "3f1VfGirARaGKcR5muGi3wVmyLrkQnjtVro8nHnDS4UkHciiuzAycoTGFu5ZSHkoL2j5n3rC7Vjk2NY5xuua8x2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aME9GdRynPnTwwB1JkJsAKo57heMWZ2Je6SnMZaA8c3CTPhzF22qmijaHWegu6t4nraoNThfFpmU2mrRTM2DBBT",
  "key1": "5g2XUPH4r1Mv3gmfix79NWDdxEc8Eev3BCeueNQPE72VW4gZRPeYd2uTrjua5YTt4e8a1KC24ivouQCApiNdSM7e",
  "key2": "34YixjWg5c4QjWqQK6AFF2JhHapqAAMhbPWi1D9gissTsdhNH6XvVhF2KYA5fj1F8APQd3ByhohEUTNQAkbHxAzK",
  "key3": "52hc8hQHsz5U6SY5o18Kxj9tic9pV6MDz3HmktDLuCvXKVRfsRu21owDX5QZETMAXS6M8PFMy5Fwgb8Jx3vivXmx",
  "key4": "3LHqhcAncqBWv9yG53JvyMaTFhS9BqHPpeTbRYiNjP153zF116VTqKua9dVtzZ3UXcS6PuKLBw7fFMFGgar3pwab",
  "key5": "64BYMYoggaoU1Geck9WqVPVgZgMXMjRDoiPsnUdNypYfAZzNN99sYBcNRkBENyFZo5eG51Dz5tc5vw9dKaEXusPs",
  "key6": "2hUhYHZ3fYjmr9iDKwWANvp89K72x91XSJLkGVK9quP41sJAP99c5MrYbMuWegQELL6m1NgzU7H6xXwQngAKAANW",
  "key7": "sdwFWfSrANqfgwDUoXEK3R1jQYJfGwVMPc6F2cS25vbRvqtSgmNiXsEhos9umRURC5MTMZyb7N1jdGQbv6Ni5VT",
  "key8": "38hhkqt55veZ6kY2v7VwiSL3CL2z3GZmjaZtEpSD2kSwoyyewK7qrp75mi9UYvh7nCUDsHUE3Ukgh6ieNhyF8AL3",
  "key9": "4azub2TGDUWEmTZmawVHtBv79v2mV2gT1MQDjt2ut6ExinxJMJ5oqXqtWbqT2p3tAtVEG962QKwaGJCQ7EUYmxJ2",
  "key10": "S7bKdwgg7mjjrorXGkZ8qhgjqGFA4nMNgssy23FP9Knq4NyGwW9FG4rv5bRHV6AxtRXW51XtydgHcbncnb9scpr",
  "key11": "5Xbcyuq7UGbfEKZeQJFk8HaGw7TuUSJuSSTbRFUrYhrFGjqqQvwziBj3ZMKro4Te8bweTSrnVxfX9hrww4XsvJse",
  "key12": "33FJzGNDxcCNeTVnPrKFAM2Kii1VfHUJYfTb59CVmfyobP3heVSz6h9t5vDXHQNb5mGfwVYBbFBxqmVa4XLJHM5M",
  "key13": "51aeGvUZDRr9rovxA8iyYRg3fCC6iSnCXf7LRu7PqgwVeCteQ1i23D5hDoZpPM4W38dtuSgeoWWBdEMcoVnfmr6G",
  "key14": "4tBGdGNGGm9ogNbvkNZW1L1Tc9WxSV4rgHh9VgdVWPprpo5hpfYimb4Zj1nzTSrXpbHKqpNo8AeK1GbYvvwPwmM3",
  "key15": "1Hp2S81cZWCopBbKax8ZPKic8icW8JdbxZ7w3EPDH4Z8TcVF4gJLacNHiTm39V5y2pUQxXSTBKWkQR1fp89zS7G",
  "key16": "29YzBGNLUk4GGtCbemekPVKj27WH1qfzTbwvsMZzN8ngHG9zcEwkA2prCTumSK2uK6MfGDtMsjpn7jGjZvHK8fHT",
  "key17": "5ptESZHy4NP2dTJ27CEtys2AJfp75JpL9nCNYZXWVN2DvShYWVPhDcQzqnmD98wr2TVjfwgR6wXPTxzcpmg8aR5s",
  "key18": "2k9oka98ryKR8ob2kLbYH2r6voPFH26HjbBsvw11mppjcPPwe82MpktcPPmGD9FnojoK1jxn3CBS1noqAn9o56dK",
  "key19": "61u4LSw36TH6UqY9iaNKuPjSFuJAdjwzzu55Gset2jUrwmA5RTmQ5H3S7Gien1guKxhaQynAUv2rZxVh6YsCgYMu",
  "key20": "8LYJGmQ5fiDTUSAArqhfvjuMEcY4DztMnp7B6dCS4YH6tEbPNz93EnUPfpxMY3cqMYpeJ39TndSMqsVnE9KDSPU",
  "key21": "3xbJt3fbc8u5mFwRjmVvYj4xMP3jFVdoiLMN5GAqxoRSXpVdoTnxQyM9Zpn6tMag1ox3FVWQtimKDHVGP145sPqV",
  "key22": "2ytCxgGS656Kz931FFA2fRDKfm2QZDfxjhE299yzrtmaUZzMp97DuLtWJZuHwNk79ATgNyjKXWbjBYpSKWrpsJ8o",
  "key23": "61Y3m7SbDWPfzjEmvU3SAqDFrjtVzQK595d4cg3HjwKXEKnkxKYkGmoKDJUET3wMP9qLLetBduDdArXe3nG1yxqQ",
  "key24": "25TyWYaUFu71pDf78UhvE6ArT2B4UVijso5E6vgCYSCzpqpzjhLfGQJqrkTkqnoqKvgHjxc9ma6sRrFUviKz1Qe1",
  "key25": "5G3tyG4KcDktvG4WN7usg36K5MS2PmpXM8qHnUzxhDKbNtxZFjgEDFZLPEpUVyEN174URbFrFWTseoZZSippvcAM",
  "key26": "5AdLb9AH7exDUAMbw2i89Uu4ZBVhx9GiTxxinAA8bdtMqK9bY22uqa1tNzDhrDCuhgoRhsFKavSaXo5vJfp83Kad",
  "key27": "KbzecyG9eAqfaEvo7rxCf6k19oZfM8jjqsx8jVE1V5ED4JJuJB7qVRUMrg7D4nZCfEDqmVqT8anDvnbW6NCctr8",
  "key28": "2yVgT9MEkfxAHsNM7DPBndi6EH4tiXjbqeUchWZPjhDCXuqEBXwyV7R9ywcA5mUryPtW2C7zFjNp8DdaCXFSom4N",
  "key29": "2JUhr1T7295WzC6vT9xD1ZKAFYmpwidXhe4mZLdTNLc7RcVShseEQzmwB4QkTzaSJ4rfBm3WXcTeVoYL2L8A6Zto",
  "key30": "31YogjKUvDz6Bw7AWWq4XYzj2hSG6BxMGE7W7ppfvy4axKoj8vDVvkguVZgpnbciwSuQnPStB2sVCU1xvMVcPFdP",
  "key31": "2D8EZgdSVRWEseUfEj1Mr7k43DxPvkA7yx2VPpTrSG2Kpjx8mHEdLyMpUbxnA7yWnB2NfL8QPWqBWvvABCmJtCnp",
  "key32": "664AeYHYbCh3zpdr4NtDvuQjo4m1XE4U7CRv5cn16bYoxfTh7kmZAYHydT9xHGJvcwrQ1Vvwhdew4ePcQ5uL3xbn",
  "key33": "4cZvJJjj5pJXVPa8bgAmWow9vyYVwrWDqk9m1FKUTG5U22D6Z6oKrg1vozJjWcs56qfWfZ1WTSUdsVMM45KCoF2V",
  "key34": "3ByZPxL4XMLHTVK1fYX64Kdb2yNHspGTyxjSTkSqSYomye8WQJphG2EmAC7gspDfe1TJQEbTxWqKpMKsYg7GjnPt",
  "key35": "Uo4mJVKQ65eA4R4dYqHJoq9VdjSQxBi2CqYG31w61bWGbS2ie5jReqb7T6BEfXMBchGvSJrd5FBTGtVQdqr185t",
  "key36": "5CSm7JNnFPjZBepnr179Be13xSyXJbHyrBwgvghWMp3XXuBjRN44K454Hs6KeWLTjUHFshq6EDx6UDMXRYfR3M9a",
  "key37": "2RFi39oQoT7cFm64Jpc8KsVJx9hc6BYha4NBr1PZUH5HcT2EPhCNURmGFtvqFFGotdfGGQTHjGtohyufMK493Yj3",
  "key38": "3QnhiQDwGdDCoX61BzroMpRD5rCAcBY6cDQbEfhDJtgXAD3jNv77CNyrqaHcZhfC3sNNawdtmqRtekdW1hGcHCeB",
  "key39": "4v7WjCNQ2y33FEotdSunG4dk7KiSZA8AW6ciZNYA9MsUZ7YUo7HcfZNBJ886EEjNXrP7BLSgx53cFuMXmEhjKazg",
  "key40": "4FdLQHXtURDZMeEA5xgb1EPYB2SSD3LpZMX7dEiXNpsrTodyU2NsYMt5d7gWi1oKfZ1694cENAvNq3ui947ULrRy",
  "key41": "tYxQTLy1JuKvjHP348A4HKjxVeSKp4npLN2q8airwVnsMatTznVCLKNn7f5rAYAfEqpQiW1wicqmbyJ5snsH5VB",
  "key42": "3CicqnndRUCWWxPYVGm5wP2KYgBJXWC1jZ1XECzDFe9smH7DKKZMhMdboDo3n56C7UwoUM6ZE3sgF1o2oxZDxdKR",
  "key43": "edHHSUiQ2aUESJ1V28HhSLVxPZdqZdAC5Lc7h47H4WsnDQEbtn9UNPLRwfkkm2FtnF2yKX154JV46NeDxj6xSZ7",
  "key44": "4hc5VgPjuPnKrP5sydV62PSGLznLvorByrQPEFyNDo3iQX8Pa2iwugyTiZA765NAg9qEB7quaRDbHUPFm3kWbZvZ",
  "key45": "5TcrwysUSpmXekvDg81gAr7fuVzLeJpwPSpisr7ywKanpbkdHdAxMoKW2q2baft13N7Ti7Yi1JSn6Cs8eJ3gJsqp",
  "key46": "2Xnt4gYkqKW7CwhvK6UvkqYevdWjvygwBBorsLVxy4h2s3JMDUANTxx1UbWVUH8sNGr3KmqWkx2YqhhV5bK5X3DH",
  "key47": "2QcAAkrfRnT1WDKr4NiYQ9u3bdvLm3cKMsMbWxLVsWS2kDU1XtUcjVu34RBkzyJPY2vwsETvDcswMnuCYpZVSNVA"
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
