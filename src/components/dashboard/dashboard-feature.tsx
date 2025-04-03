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
    "2k3zzYurY1YiYfoiG4WZZgCZRcFhC9f3kbLauDDxZ8qmFqTCTNRN2XbUjgMYTQLBw8HyoQ8w1ZfdSVtxB4pk3tep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SCqU4zPYCNKNhyj2v2hZgzEJe7hT8iBVFdesGwvm17jFuVcs7KtCKozU7dr11KkdBPsWJ6mnqETho7RmtRKJFGU",
  "key1": "46DnQuPjfig9T6oLpN1y6uY6kzzsAAKDtEZu3UuZMm8mihqgw4zVtSXAxMNpvk9QhM3LMFQJvhBmrsKaTjH3UX17",
  "key2": "UQyocZvUkmovntXUm4F7bLGPSEnBaFZt3GEWvg25ELbXbr5xK7FHz1yT56WbTTsnc3Fb1SYG2dN3TGJLTcL1bLY",
  "key3": "P8yUvpRVLtJPo2JNnKkoYZAH8KLJxDMdxRRvkZYQXYHqEAuRLtpwjgfRhGT4WmjmHiuKTi6X17Qioh1zBPtd3J1",
  "key4": "Yq4RwJAmzdModegPw3k3k9pYWREMGaEBudDTNBuL3ZKhuimQtq35s1z6BpBSEcMxzRQ8eWR69EGhBdVX6b2A8RV",
  "key5": "iqhSpZiw7AAHhqo3LfyhyCrmJGMBzvtA3FZfbY7fLRa782NdpWNuwagZJrFmzAMWPVe1djvcU6rkvHtvenUJEEk",
  "key6": "5DDWTturr7TzGa83VYeji8HEuCT8uYb1x78tasiQQU2MBWC4grk7vxZM379dobJ4RK92EMZLHvG6VFyR3Ahfmrui",
  "key7": "5LVdzWxTCnYYpYmCiX3PmVHU5pWgCg1sUYYhZsGfFRo3e2q3BvgJaQLNEBWJEKDtHWRmDn25bKeNR71gY4Yn7XMT",
  "key8": "2xt6gGxTvS4ymuLFLB1Z2jT3RsvnG3NyoC6W1GXi863CWgX2xH68SsFcrkR3QZeut1PiesEgDqrx9WmNNUw2rCpV",
  "key9": "5mF2VMcALkuxBHUubJHvLDv7AyytcB2UXeT8uCtSmEC6dkicNdwLWPZftsktdcUdazAAhach1BJ6WqxWgUQWeJMG",
  "key10": "5GTbvzjdDWbT1oUBVGC9PgHH8K1iXdwNwPx6Bh6dbtuSpiuS957FRhHLpUTYK4RfVXapqjqksEwYQvFMFpZgS5JC",
  "key11": "4cin1mpaHUW7gQsastKf6F3AVBpCsRMEs5oHKUh9xqP2fz88T5wT7cAmRXeqpNMVQ5Acc2vAsm7HKoZA6QxT8yC1",
  "key12": "rn8bNXX5A2fAVXighy5AhS2puAKDMf3Wc3yCKNxasrvfHwWz6tc9vmWWDhidSNXqgvNwmnDHNjcvBhWzyBTWCdt",
  "key13": "3KHF7Tzf2gfUT2ABPMD7d81KEn8dJxEoiZa8DRd7MbnokMFbrLvHGjNcNpLG5E7fs57iEciLkkKsqeE252SGQmSG",
  "key14": "mksefKu76pBrqFRfeJTEkptp4ePKM5Hr5La9S2S2SdZs77RbnwiCaKtYX6qwWscDTQMsUcsNgq8o5ocHDrukFXY",
  "key15": "4re4dewvqhDn28TTc1SkbBybhmWUqaoTuisxhrV3TfEyvrAwYcP1TnZsEsPeFEMkv6bBGQYGoDitd8uzCfpC1j5b",
  "key16": "3E3nzFaWiAhg1Xjc6mrr2Tq9EBPqEfdvEo7nGdoGMjda6PAxTp4nbYvHTPFsZhVGaf7kC4C2Cs6N123PztBKQ4vz",
  "key17": "26jEDHTmRNZyjJPS4sxRzTMbWHJqJXLzHabxajfx3h9uvHJdKQaQquAdv7yc9Nigj1pkkNQjMKUP5VjBWK2wACvD",
  "key18": "ZF67rMehpWg5jjP3pHEjTkxtDwSWT6m1NEKoTNHsgDXGZC25xmncf5JbCsCCimqjJ7JQEF1hijvnVr9fVK5GvsF",
  "key19": "2QtcZeV8PuRKgjEbazNWb4LMRUzCNReZWMEePYn8KAT1uLSUPpKSu6zEMtLRdv1PoHekPvshkpaeqwfgH98aFmHx",
  "key20": "3fkZGusVdVvLxvEJoeB552o7BFPGtPm3NSdyUBZvkhPJVkZ2Aj9hPJpseyBKGLMFqAyV74byTKBK9EFs2YtKsBfo",
  "key21": "5veU7v5C3o8ymCsDtJh95PcsB5s6SAoiCGujv1yyu4uS4yiNWN4dwH5LxqLwgyTo1eT43GnR4LqhW4DnvcWM7Fys",
  "key22": "66JvTbQW1iGGPmqUjtUwxEkejVTrYjjA4BXQ9Sxye5CCghGKwCMNNbKq1j9Y3EruK9Br9wvSNneWpA7EJQAq4z1a",
  "key23": "2WEfZuyuPWJ4W6Q622ugmZ6b4Ss7eAVgfPoBiez6trufBcH2oUriuM9vkzuMm2gPkFTdCaW25qG9fv5LKSAaqyJL",
  "key24": "2fm7xBHZNyc3HSoZHEDaVqvUauRXv4iFd14qbzqdfXnRpLEeQTDn3s1a8e7tZDSBCFGQLbLnNNcLF5bXA5rxrMdV",
  "key25": "4amXnz2UbXxgEtceh4kkxx17j9ZQLky6dHnKKqkACkGGNPygKCZ7Yyog7cGLn8omSfPypRt7dTr43eQWGMR3ocZW",
  "key26": "5ateHtnZnXfKBJb234b2sNd2jDfTNoJiMCQsA55YE2MsxAg4k36Kfg5z37pdonKMm7bHt1LZYf5QxT6HYgTN1zkW",
  "key27": "B61k7yjrGEG8KAuQzZbShADNAksXGRQKsCrPXDKm118mdhnaze1KKKdCyMydnFqdqyfrnBDL6jVcWsHhMqbjQN3",
  "key28": "4QyCFvE1ozR1t7URve5G3zCJRggcrjthoUVaa8kh3d6uTCxZU8oPNSHpHEEPm8taZrUXB3MkMYpEtLih7JpyF3L2",
  "key29": "56e22JeveaJtNDEaBwaptm3cbtTnSHWEpMJunTPikr2rhqmBFt8BUJv5YXCi5SoDKwBUkF9iSUCjHxPeCBGnZkSi",
  "key30": "3BqU6rMAg3f2qVeKtQoYmukg14qBotoTk4yMGXUNWbWUWmQEBWj4GLJmVyoUiDuXYYSG8HdMa8Ym152zMF91geS6",
  "key31": "3dEYoDaQayzNEe5oAAmjdz8aJQNSugmCBxQPxT4SJuydGCJLgirvTXCG6aSJKN7LXVKWmeyTH9aH53QRzDRRPuVb",
  "key32": "Lp1QADTZS75SWxecQjS5JvqkE35s1n8tvt4WKHT3FWG1ntJN58RZysbG1K7EF9KDNLs2DMy5P2xeUmnjKdGt1Ls",
  "key33": "3aC11L44ouRo4u9rH3ueDZjappYqqt89KGVwS8uSG8exD9DUTnjdKrfy3FLPVq9X1NZEzaf4VE9ssbxGjsSvrojW",
  "key34": "1ZWeFvXH5XVijMz8BgVBPhadbrcVQ7Jaru29HaJrz8isVmKNJhWhhXfbyedh2fLToBUrj119u1BsA52jkFnpwsJ",
  "key35": "36MMvhv6RU4XQqYL59FyEsHCpFLEpHpmSByn3Kqp6JuZoXW7KFZLjYKTov6H5qXWbS8mjwMUDmj57ibYnqjLtFv2",
  "key36": "4UDmzmSWCmnan1HUGDQ2y4cXsgr9qu9rsp2mv7Y17Mf2XMX44gbGKwDK8NQU5u8P72pqwd4GFqXXLfjpWYRqhQn9",
  "key37": "5B9pN4v6cJAReWksjoEU17jXy3SndcF3mZXugwrGJbZ1S5S2vFnqAEhuko6bfYLtLfvUy8uieQJWSMJqQ7ZSYAaz",
  "key38": "47sffGmiECLbYawctuaTNt2LbRmug6nmf8atsQeUTsdhhDzWg2PdEzJEmad8oyHr1hzsNxH9styttT4nU2ZrfE7i",
  "key39": "3PS71VCBcb6HqGxw6UtuCBxdHNUKytMG8XuyUEwXssHsCBfxHJCG1tMpW4dRt13kN3m68azJQpv5jbSxqc4cz1fJ",
  "key40": "4W6WLPvdTYXXL5Kn6PV39TGLjSPta6BZsz2RX8tEqZbEJgovaVzUKfMCa7NyGgHnjwH2enkWNg74TggqRMgSwdLQ",
  "key41": "4FKNDJ7ANXa7Kptft8RNDfoivrVE6WnAV8uRnCf68aFjibHLiGHCP2z9EYxnKXuLPmUSusMqTUE6i5tYrKMdQCm7",
  "key42": "3wKC9yYHC1LnDuFA8KxaE3s3S2Qf5qccaW5xWswEgqhhkpxFcAwd7G6r91FPNCcd8Mej3MtwJUmQpgvYP7CvMBX",
  "key43": "3dsS3DMwjCRnuqrVz9N9uDj53vx1MDmESfFWg6i1cSUhNmbudtKgKUp3S4LvTJoP64UpH19S4a9bB9vtXXXudND6",
  "key44": "UNZyrAU4CEpwK7GqHjiSEBzWG9NGfFTUUG9Szjn1WS9y1Qz4fB6rtLN2eqdGvjsvZbXgcBryoWNMKXfTGqsdG22",
  "key45": "2RKjwcpc9L8DcrStue6rRCxCDDZfVWENArBrbnEh23dmGeipYf4mLDLKFTJsWasxcBW5DhakJ7gPvwocVEwhGrWr",
  "key46": "4ADquYHnNjWNWdJSqiSuGjaXWhJ9UZYDEJa3mUoXb3Fb9BSZmEwHppCXyLoVdZhhDGPELT8fft2eQXSLLMeD8NzS"
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
