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
    "55APTe2WScC9BpsaifhBS64YfNjzduragZ49tqVu7r54bnZeWU6hCEnhVBYLjEPJPrNkkCYAobKyRpKYbaWTaTsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZnJZnRFG67saMexVeSTAzhoibZ9kuvEFgcd9Ms1YYjjP3gKjgNg97uuHmYGoCzYQthxDaoPe49LNkG6nXJ9Hxz",
  "key1": "3WL6FEWPiuLdcfjNnkpKizses6tt6byzse3ovsKkZ1x4GGANvBp5eqCnpJVYKp8fDoK9zjFA5tkjKxcBqKt3Z9fQ",
  "key2": "L1QUxMjuZ7iJJDFi1DtsCYygXqcddKi5DWLr1rEAJnZzkFyvn1aduVeH5c5pnKJKCYq75PpmMkNicYfxTRKe6BM",
  "key3": "3ewdCu9F2PT3QTDCi7VMFn2y8TaGs3tvGANppmEkFmMcXh3aKfKFhGE8cV9shxZfxQoosoMb5qiC8KYnwgFvu6Yx",
  "key4": "3yPwKY5WNkWAwcm2z6u61KoRKAeTN12r4TK8DdztLL57bvjWAmz6y7heQkr9T3yZyCWrKWkG8dzLNWejPBx1bvG3",
  "key5": "48TfMGrJervBGXJQWDfsrXhLhRaLW5xYi9DiksenFcb8sZegL8fYznNwuTZkQkkhwumHebUy1Aan94S2nrhnnxpR",
  "key6": "5QEgFGWq7BSo7WaZGVtURc4Xg5826CJhP1vP494evaPoRjtnMts1Nj31SHw3C4ZmRD72xm762pZn2RWRxpLdcBD8",
  "key7": "588cXYpWFFWA7RScxShRQELCQwjVfP153q6dARYiiqVVfKXqDQtPwHNKv3bMuQ7ah3ZQHAXYLcoS8nord5jJ5WWn",
  "key8": "ZQxitkXiFJiNEccHf4uCgigCvsctbG894xrsSTaZNf8cuKvtNBUivD9QXuEyF2Wnmwm8Jf1o9mQ6UwNBWuJJ7zY",
  "key9": "3E8MFwmyaVGrYM9zi81RQyXtcHefTepnPBSLvJB5A7tNTMgkLZpUsbPMCh3vfMYHMe5creAZR9fKRYzY5QPuxi2a",
  "key10": "5HS2earWrD9XJqydok3XMiubhmdEkzwiDqXUfNN9dN71nZv7SCUHcAq3kEDXb4WAovepNg5d9KDPvHTjFjT7zxt7",
  "key11": "3u4DTWZsA5y4NKtGiS9sYqEuidCF1Wg2AHXdjoiiS8f76pWbhM5NLW4JrqJrZkYTQagh9MCfzNyF72L1c2LagxL6",
  "key12": "2BRq2hEZNZy4sgWYWLe6rw4dLfGFcWyB6VoHygyZcyAtES4JSG5WCW9A31FXEkcHBUR4ZJjjWYY695a2qht7k5h8",
  "key13": "4ZNPDW7YAM6vdCAUmM2vFZum4x4GdQSoGUgfdnWxSQBq8byGPnNHBXoRXUPtKMYTBJnDeeye2K1cyfx8ALfjRPTu",
  "key14": "3jgdsSN6jxyx4pChdUsgJD8E9uWZyH5n8zaQzQNtHGt7D6BivSrUMoYxFQ8KCiZPmb2g4WiAeyD8pE5KsDf8LYr9",
  "key15": "32CPA9xa3F1C7gWbCBKUDNkHXWcvnDQqUSzAt4pGix9tAcWdT2SjnxeZCgTA1aWUKp4G9vMUTTwW8W7W6dUxPP5V",
  "key16": "5iMewscZZ8vhkN6qmWaaGkTxPVFvAvs57Am6sGhQa2964gSra9EwGoK6pg8Kn6VetHKWMCXWSuVKCePDPEuXDzmE",
  "key17": "61W8soeX7zxJdwfhwyPPyovksVJ3vmjbqBjHmBbjyTucwVHFCp7vTE5v8NX9auTLLmkobj9cpYhsrKGGrB4zhwVM",
  "key18": "2Wh78cskdm9wgYoCsQdpyGWPMhy9GK8siPRuVnvYjcyShVurssaWXwKiQY19XR3P8cUq7m3NMMFCmju9KWwVycpb",
  "key19": "482Tab6PdjCYjTv9bn6VZfG7XuePyr9JAgjit3YSH5KnGMFr7a9DqnmyF9daxMrmtWHBbCkmzsVAXC59sJFCreVd",
  "key20": "3ygYuQmB6HpzbLHWedaT54gFAtBJG4iYS9XXSaTUHmdXVjuPQQFvW3APbnZ1j3zx2Dmf28zp6WwQPRHWsb4aAZJC",
  "key21": "5Yv9ZM7MM3CBqZKjH29BDz1KSWZyxQwQcSLa1Q6f2zCDVdFsc754XgyLYg89PN3nAzPc6TSV4FUPauhwpTWQ6sLh",
  "key22": "3vtSrnLaNZ3iaUbkNVx2sh6qrb6WzUWu3LziruGWn46TPeWYE6QRcnUEvRKC2P435MuPKmEutG44MrQu5BKBvuDW",
  "key23": "4Pdjo71oHk3nLDTd6dA3kvnJ27m6MpaMgKBrqQhWL5BYe27LoU8sm8cRjrgcMpbLUJLxC8Knii3GPCm856us67cy",
  "key24": "4oWMkZzKptyFRaz2Zb2DvCvfsffKySc3CuoGKt2cfDmpNNhzJ2LHeqtLTUjRme9caMCHeKHxP1GmoFtdywJL8Vwd",
  "key25": "3QguUtPdcrgT5SSHjW2daQKzrXGztueWkEqy8L57sq4mhQuyMqM2QvKouepJw7YYXbGfcEAJnU1gWrj967j3etV7",
  "key26": "3vQ6ceCTnyUsJ32j87uqAjswo6gFmoy17SCnm8UdzcZzoHfVnnSrzycGyTk8pFxNypHXxVijG3iPRmQJcuvLavi8",
  "key27": "49tpg2Rn2UWsdhLbC5uqJnzCrUzAmMHTESNZUnpkMbw1ZxUDJRtnzGVSt69y7n8NJJiQSts45H9k7Sdx1saf4Q4Q",
  "key28": "5hiT4GE5Eci8Lad5rVjjUyttRTg9qbj4HtSy31AibzbDyJ8X2U7abkUW4tZ1kvmxyBqrJAgVJmCbvJZK7DfqBRCa",
  "key29": "4xYN4121NoZfnfAF2fxvwkioiP6h7xg5gsoLTMYPJXeWZGZrTRgcp68E4cpZRxeXYYL8m3ki14W58XyzHUdoiq2Q",
  "key30": "2eF9h5vrCRG2nWstZof9JH9sSs7GSD44Zo3xJoxFVoiZtPBrQEa6uSJYKtohi9VwtBA6wutZ2pVWvEnMa5g3ibb4",
  "key31": "4BQu6w4UBs3XTScsRcHAsACgpMwgYhYy2dYCG8EtwPkncveSsLRxX4qxcFRCXG5Sm4xV83wwSpzv3DdWNZRwmEZY",
  "key32": "4STRkqXzBrMrkjyh937MTDBx7UpejnntoQexNkL25Tbk9GLxV24bkaE5WUeHR8RcDQuBZ3vANzQtJfoWx28RKxgi",
  "key33": "Yg8S21p9U4XvCeymNdP2zdCpTpLvsmPgiNTyZB3TnUP4nk5RXAzRxx7i5fFzNXoXg5hmL11pLLevEZPCrWGzHML",
  "key34": "5XgFbD3CLVnUA8QCSEBX9sDgW9HtRES7RykxtwJF7inHQGu2pTdvnyxGVYkfKrgDz7hsRuueL2rHhZLwuqwXPD1U",
  "key35": "42Shf12Y8AhVgqckNTcm1VctoHRqsdrS6yCU9kWmWhVrRmNuqgdT3jaP2kuKqj3iW5sQY4ACgMyrWUVa3VLU2meK",
  "key36": "62JRKNjrf4TcwemEJAhPEkqKs95efpe6eWEceEmF36FpQoqoruwuwbp2t8HqsRwkGzV7b14PAqTCquM75MhAyJDe",
  "key37": "2NYaTchiRpXiS4C5xnZAjagWicyM7mwaHFQBBAPxBS6sg9gZ7wShZhTeVr8s5UNsbn2j5sZnSdVd7KuBU5qzncKJ",
  "key38": "3poTrLUxs69ZHMutNQdcxNFWxFKD3v5pNzgDgr6nKge1RGWc2tKuPzbfFjiDPvovpit6PqEDVzg7a16w2n8gGsSk",
  "key39": "5k6Xm5bv2S2tjzKCgczzcF271hH4C7aG73fdXWAfDwqDvKKszhGBkWJxS9p1MaTQeZ8HRAWFby32xB8gPfxZ5biQ",
  "key40": "W5FeqGGMEJQc2V47simGDEX1HqKqZjYiqkoy8Tn1857rzr2erdkHuV3PDbd2gJAY1LPdE4EqpdkzyzLbrPuQQs9",
  "key41": "2EXYQWq6EjPEJr8WNwLtXuw7kEzwd28yj7DhyifnRw5H4YoG4Vmu4x8zeq5Sn88oroEEvkZkZ2qmvh3mhUiSy5HH",
  "key42": "4u4nEjynMq7M4u8MMc8t1g5752HqhXvZNCV8SMNJhTM9bJgSBQYCysmKrb7qGcNfLkgc4Zp2jtsGsB5KdqTsB7kR",
  "key43": "eCVH9UMTcvbkeSBaUc5xK8orD5RtJhUkyUAVoofenMefzqGwiNvihxBoEb8MpZ2WdGwEczCUF3nswA1pgMrSFYP",
  "key44": "2MoPx3CmBAv87P7QesLieaNyt7LwxcSAvXS7pkbPknXYFa74PyAiDS1crEuXnTWyXSpyXacjxFZanPS14JAUwx4X",
  "key45": "3f14iHEVBgsZhtQkPitgHt5AREt1w5S15B7xEwtaAefuY8C4UWFzg2v3BuVg8b4AsxJBVcmphhc786HoZa71qVA7",
  "key46": "ffsHqjVtcvZUnFpEE4wnVeGdpP8xqTLwWiwtN5suNu9qvVKHPqextLhES5CxSrEkwhkAxVP5cAgVk2McnLafvBg",
  "key47": "2kVdRBiKqzkhreUXNVoYBjuyh6ZEJGo9UPW9PHzACaC2m9xXtSoZFDVhabkXNs1zxQCiTGDmHECzGSaMf3V2RzkT"
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
