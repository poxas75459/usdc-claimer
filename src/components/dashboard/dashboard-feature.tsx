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
    "2SYPSAxkXUoSTh9S6ocRxpfGdoG1FAbKBAvSLgu26N7CS67RM8BHoR2i2xFCPrdsnLhtedddtWHKdgDH8cosp72F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7BGzUGzzSMCSUH6MSKg4aNQunaBTgMwqLXuyBASAqDbdmuShhUuG2voZLLSXpERKatqLPwRiGGUJEpDmRGokJn",
  "key1": "34bAchnKYRaDRwanQ2EuHqnhyvKGYkFxnSRyofhgXXcSSTMkDRKsxDYAi5hYRebdzCTkYyXRf6HjJmXxhNZGDdjd",
  "key2": "2f6iLBbSfmGGsXg79B4DqiEAijXuRpZSL5do3c7KxpvdvHtEMDEY7ScfDD4qf8v5MdA2Pvpy4vzN1QQHZ3XLbAYq",
  "key3": "4N3HS4u7rz51dTg9ws7Mpnx5quiBm7ybmdS1gp99D5YFRCcK7GZKwtj5dXGywBWnejwwLK785zRm9hd9isGNscCi",
  "key4": "3NBKxQBopZokZc5JKxMLu3Tif1Xf83jp6xgqqAThytXmJNhgUa88xoMDAbqtggcEayxYmdRo36nhbGp2XE9wxDM8",
  "key5": "4NFZThDD7ChbGJcifvRAXHYXtAVdts2Ds7iaUGaRoMTtGytVPhyFUELQS1Z6KEAP5VPsS6j9w3oGGmjjf7GSbGjD",
  "key6": "552K4YtGpwajdLVSdkjwUW85PMrgbAW6QFssPZaPXDyLorKKPC2DWFrVufeRz3fwYZaGyWd1yM9eCYahgNAWGyXn",
  "key7": "3qz2dN7KghU2EmSXdquRUSUfffvnLqqHn6nZU5tTVpXqCR9PrV9kLnK6Su7iUtR26MkhGgH1CampEJDT1h6wJgEm",
  "key8": "4PvzyLU2TfD4nQiJHZcoS1UYuMQS3ECnXFQyFY4WV8PHtoL43VvwdoHJbSHA8fZw53wVsNppVELwHJ7N59cknsaE",
  "key9": "2UxD7rubVQestFH6p8Gii54Tv8n9GaUaGPcNLENhPnNJadSmPrShGNNMXHy7go55rF8qBci4qedBUgw5ohS6vkDQ",
  "key10": "2kxyfBh2atUXrtko2sNZfTmtS2tWUHkjBASxVh9nswrG3sFkiWSaz9Y3vLpjdQtkkbXtbkyNYD5Pqco74KtQSETj",
  "key11": "U9zQpct4rp1nezto874gUm7pA6VeQpypqeiy1bs7eo1JWRGFVa2svAZHmGz6wNNqRaHq2qzv68nNq4D5kjUYSBB",
  "key12": "6evqyprq6wkuUDXRkkbdAMNcNyVFWxF7Rx5mdi57bxNAwHnyi53uvbFLafydDncJJ8DqEaXR2tHEfJrY16T1w1u",
  "key13": "3A3CYcx77QEmSoLJACzXahQ6rD3woNyyKQxJazKT6Q6oSaAy6moviBguAZLmVdAnotEb44bsjqWdWd8Wuf2SSRC2",
  "key14": "GWTXipkGuabMBX3sXtf9q2nfjhSF4W4sCiHoHVfw3NxzbJ31BUUuAwtYuVEi8s1v7T7HeK6dC2EDwMRV3anPRbt",
  "key15": "jFFrrr3raHp3wgWpwbSBgfzKriHYxcwwCSSj3cpFn1VhhKyDgUbgqcHpmdxBHhBdkC1wZtkuNQRTnUJW3LvELNj",
  "key16": "3cKL6g1aXXnBR75eKjDKur7NfKnAGqfbTo5QngPkC43743pEsA31oab3H7VaAgPV8P818JNCdvdZiZavaS2FVZyh",
  "key17": "4t4EX18ZkH6baAkeJHGKrRrVjLRzvUiiqT7GRLJgbD9f1JFYjXKsFT9VmuK8htowFN7eZCt6zqpn9a26meAve4mz",
  "key18": "3JnmkVYzKEgd5GDMjujkYyT2ixan1s337cnHm8KafSjVKczG1mYcUgb8fpa11JaFX1zZVwYBfPycJNXJbHPRBYxJ",
  "key19": "5aULQ4KpPeJwFskBQzvkaNtyFgj273fCd6cix1EyAwiCA7QCXgr6gMTnv9v5q9koGtyq3QV1hnzK2KnVorR3d2wZ",
  "key20": "3ERkkrnkUqHo3WzRSVRiKqLBRrxtjHM73foLr68KpyPDjBFhwjAkK8kcW51J8ZzkJe3Jk8WU92teRcAdpd8jcmXT",
  "key21": "2uiDwGYfLfxFHVXCed28xf1i6bueZffjfEpKSqi7Re7WFzhqgkTGKnmV21kjh48LzEHH1h7iptPZMqgtRVxZYnow",
  "key22": "3ochQoG6r532U5yQmEUmRtXfQsG6NjkXL1S8qZBJguNgCiHAVZbckmhQhXYUhYo24eKP8fVKde5Gi4oMpm2foK9p",
  "key23": "QJTj4NadgG5pzk1YdNiMUimqCoGZoSGjjhcCxkfeXFN5kUyGeFYCm8mmVCno7a6kpsWoHdzYf5jW76S5btGVYq9",
  "key24": "3LJSvKv2MaqSyLaBJsRagqLb3fDrmfAa34AyfNEck8dPtEc2KctrzJZktwa11A8EXkZLJqi3AC1uzZRPTHmgenkX",
  "key25": "26kqfs2CUZy8JsakDdQnjbt2wuc4PEUC7wq2NQsFn77tB5xwvRmovMHVh9R969X4QzKwboM8UC7RRvGLLnpvLBBj",
  "key26": "3tBkRSDf9eMRPfbrxhmXDWzq3quVFZFHKBSm8B9p5hjuEUATdcJYQgGEHV42149uYHfiWmGmjy3XVoeYziABzFgC",
  "key27": "5omN2koqYJUigPURnPigZpJuHajbiqTf8UaDyk1NminUyYAv9qQm2r2k6HXwTXph5Vi5zqPhQqvx7WbKzAMpEs2p",
  "key28": "21FRpS1NpJXYWKpYN1pZmPLVcBBjMDX1mq2tKs5wsERh98xqULmn3SwK5HXjsSGC3xPTpay5V4tMHnvMK1sB6pC8",
  "key29": "4aYKzDmudzvDPQfayzmVKhyAHp2xfJvBxkzeMi9pazpSYvuPZ2fy81Aqgxuq4WCWnrYoqT1Fqw1rxQfvJfLRpFin",
  "key30": "3nUaDvgFZURQWVVfhYXNPhmzkV5Yr2nBFwX3bHrsYKHSvGjmQwQpLVDYrhTyb4b1zPHyFtevA8dfKwEQx61X4HXh",
  "key31": "439rN9UELLqPTJ4HEC5ekogqqC2XdvJLp6TeXi8rqrVadcdbzxUWnehynsS4aHhCwUtLY2e7PnXerhn5TdtncPH4",
  "key32": "UvWbTHXRAzXdqrU6bAH2mKTWv7DaSowBdTumeyVD2dCNiNJZ1aXH4srje8dN5ojxLfweKiZmYJ6NbmcSJQBTkk4",
  "key33": "4KSs48c7h9QUFnBqR3TRKYTFWKdNKLg2Y8UZT7NX8gWfRyXCGMqcbGRGfhuM5dH9Z3cYhZJtWgtdz2ky6g9UyEMS",
  "key34": "2FXXuz37Foru4QSUFeGscjVkGb8PZqBYTripjdABuTfAEmNZwrMiHLncZdoPaaupC3RQ7NxnYb72Yzs35H977p2m",
  "key35": "4JTGA9X6X1QpXGPYKyPbbyvrp9aJEis2XNeMH9QdJmVonLUDCuwBVwmrrtgMebfxs5QhkkdjTkWakw2e4ah16FRc",
  "key36": "3wbD8Mw92YXNgTD5W6rEVHKJajHoDo3dJkgFQ8fVxpdzbUxhVwi1EG6QjwHjRz7cAXPM3LEKhC2EEr9mS2cvWNJ5",
  "key37": "5UrhzDTNLTvMXLc6MVmW5TqPwwHC3KZeSajJPYJMBPUD5Dgb6jY46aiwTwwnCtj2abwUkYnLZQREt4ssQLtsxcgw",
  "key38": "4FVN1P3snFSCn7ovpww8DHvkgGhqDLG6tB2PMa8Kboo9HZgGkKsg9y3xTTbRu1ppUie77fR3vsPhehfieiwRvmE1",
  "key39": "3wdHVgeoEsHJfkkinL3G3NwLo3tafYK66T3Yoc9mosVEr4vuhS7LfKtFbobnsLzYWqYhW85jMqyxAGSLuHT4HNtZ",
  "key40": "5SazWdXi7K7QAJ7aM7ar3jXwP3ivfniJTHPTRv93aALAr4hVMoGXZELCwVgWkscgrEkiPFSPB67EyxL5jBvzcQKj",
  "key41": "zb7RsDW6MrmgadeiWy4jKeZAcwdKR4pKyBQyV1rCYS7ZTjWbLxqx2QNDxez35PxDn38BfAGKAyqTurzdK7Uuypo",
  "key42": "4c3hzKXkG73FqAfyxiCxMySQwSD81fFuhUhfyLYTyvLEPh4kkY37Trmi9wThGjBKsarS3cnSHV2yBpvabJNzfnhv",
  "key43": "57yNE97E8WneLrzeZpm24LMx31aTUN9fzk44tiHyXvPUcd8o3veN9gbdyiJxa4HsY8QMevk2twPiejVNdo1wwu7E"
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
