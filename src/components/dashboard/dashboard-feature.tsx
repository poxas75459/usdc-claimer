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
    "2QZYkJv9yjtJAwF7tYKPo27CVkzYBDts2sHWrosLTFyiXDCY59j1UuuRdtp1XN4pWsSUgUX9js23sqK5B5FpS9Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49HeswCN7hr84nEXn25fFa9MV1vN9rvkCyaEMDyMhNnKEQFhmWyArwRB6rSHZDWZMkycTwPtEzeoe2SZkPmBKQcH",
  "key1": "29SLTKcieWsn2kRqZWhr7rJN5Fii94adP96q27rXKvb5Q2ibgW5uGN2oUDtXq4tdmxBSvjJAnkiAUVTsmFhXW6vC",
  "key2": "4i5u5y35c2HrFT5oK25h1ATyfbFenXw72pa5D54A24aSSVAKcVRSLowD6CZ8HS3QJDVfkqJcxpZKcuekahY9SKKS",
  "key3": "Um36zs6S9UtD4kUyF7fexw8JUg6McV2gvXdoFxptZ9VaTQXYa2Q5mYuwa55h9Bbet3icnaKqRV2Shrksq6ftHdi",
  "key4": "3gXspEBXwFVqLbZXRVprL3yKqXU4cjDENL1KJXkPqM9m4osFfsZeXX4w4cqNomsVtW3AdNNPGyZZ742p3ezhYYUt",
  "key5": "FwdWLf8Rcy1VDFyZfCqqtkaznEn9n8nhJb966XqUTJGEd33gBzJMrStJbyxCqz8vdsKvBawM2AVQitKMoeJz3gs",
  "key6": "2q5esQ9GKvKp1sRoUsD82ZEzEfR1xEdN1RCSS1mf7RY4Tg5675dNdHMEkovvkkNGwLoXWXdjGQRk8pqZ5SVkRoik",
  "key7": "3iVaM3nzx6CZj6B8zRXMF3SFLCXLpwk9D6AXAGBaBytycHRCo7wAFWuSuugbTcE5j2dwDL9XsivX6JmPYwrFw153",
  "key8": "4oVYi6ziWfCUzETVKKYUe1DJR13gPdULhiVdPqLEe6EkhSLzyDUEbFbSMHBTa9vWMZWA2BuvFNoLsSrNgikafx66",
  "key9": "4r5e39NXJKjUVWnLq62WjdFYBc3XNSmGqKdTbvgBPKnKmcwCjKwnjunfT5XyjamXwHr1qfkZo57KUKcjuSMvtU1h",
  "key10": "3N4WC95gkcnyqHcMAz6PJbUiFX6hFPqSCvXvjvKPPkjjQPL3DtL2Ace3tazRwQdEAJSiFLzaZLZ2jJCDtLVuMd27",
  "key11": "H4vqYLHi8cJE5HBQYgVgQNixhC4wm3PajEDB7j8xWTb5Vyx2QYN2nxSU5hHMMsZ738gLR8aVXvu3fRRLZVVxJ9b",
  "key12": "2JdfZtvvjNziu9QwyFDRCJ9DwB7qvAcN6tHzWMWKM18T5dbp2e3c3L2mAu54mBHU2rssnhXHBetLZu9d3uvhP9r2",
  "key13": "4Yk3bSSSMCydjoj4u3wJg3YiMLzgWS6nGtdKCqs32B1bWpUWmcwf3DbjAujx8xWeUAkppRJ1z2nZxhNUqDZMBW9n",
  "key14": "5YLF8qLTu1tR8UgKpDtX8VZe9RJ92VdjVbXpiBUgW47aizTkWMgs2coinnB3FAB2DwVGB41AxoA6EVhE4mHnqMmg",
  "key15": "2d6AB9Ptx6F6HsSmsz9jW2Awq6hUDBfzBHkPVomkAEwnLnDFxeJT538g5v7PuQFCCcw6DmvTZQgbX7gtbpRbn72w",
  "key16": "2Q57QpHpAR1GFhXagFEyeBjfkAb8UKnSMwgBsfgs6mR9aZ53Dv7cpLoYsxEi25A5WZ5PfRcuGWpYfoSP4auUmTgu",
  "key17": "2fFR6eWNSzjLnbUEcbacVLVKTmMuipqoaxfxRJTVsCPXN9Fq2BVKN3QxZWYkYNMnnSg1pvfnkp44wpnPxsQL9qMD",
  "key18": "4oVifH6YDs9tsYqt1zXuxda5b2H7ecqR4pa5oxswwYvSTrM2vTHmM1AgHSSjLPZtXTnZc2mv6cJE7ZUBiCtSYzGF",
  "key19": "3cbHikSva6cKaAuQvwSNpecdwoJwE2tGNKDhtSQgdBeyMTgsuiQt2Pk9qHWMLjJWYJkHuv8KWCZRw2NjHhWV2cYs",
  "key20": "3UnPhqfvhFqQk6tozD7JD4z6X2SBjV4XCNjtt5ydQGHP3XPfGcqhsMmngBt1HqDMhEfjWe3haPyYer1B2uuPPVqY",
  "key21": "3CquoWn6ZtBRLJbnrtVFp5EKis2KHaG9GWTb3QJvZ9ymY5FFwbicHsAMK4eG5jDJpweDzNP6JctXAeNBWVW383WQ",
  "key22": "2yDCTkdVqhgnsPdYtyqkdjm6vkzTQ8QiaahVHMb5Sg6MCJwgi7ufauqcCJ28ZXYjJrqarqkHTx1TZt6NWsV2qtb8",
  "key23": "ZznHeu4hDSeEFdpRF6YVMcPMSbqq9bsUgVZeJyNeR6TgfCJLm2Bxoa9kYhodcb59QTAtzPQK3k6YpyfYZPd5QAk",
  "key24": "5k9pGiJsioXQzH6F1PTuW6UVVM5yTKeX6EttrJZYAXBwTn1y5gbcfLh2VXjRSvAhsb4wJJnA9NgdxF6FxBB4acCQ",
  "key25": "7nHbPW2gZds3n7JDg3njGm25Df8Jw6WooBEYrtMv8gQ6j3P1eAKFDesSkcf7r9Da3pWZNL7cbHff4V48wWoorSY",
  "key26": "2SF4V5n26a28ELhJpxEheLB5tq7qCgU3Ra7L1HiNEfKcLLvrCCZe5rhgiudzs7VxJTkBvjTCha3RTK7ZjMpoW8ZQ",
  "key27": "3UxbhV8LWhCitTDCT48JfskL8gDcHX7vbmeG5VFnCxXfSxxDFMfvrECyAfi1JqZg1wUZpRZDcJzriGJ3hcDTphwb",
  "key28": "53TwkaGeYBtDYXjrXJrmYwhbUe4JBgER1Qe5TpaxXNm3tw26wshf5UGCoDgNK4wWPr7CnncAurMjcV1XH8o8rLNi",
  "key29": "2gtBtKt4NpsJn97AUY42JcALwShvFjDuqCBHcky68cvnexvED6gNAy6tuw3crTNH3GvSrPjmWZP8drjzWixzUrzf",
  "key30": "2ZeCXGjxE1nLbChv5y3WSLJgZ2qbzWoJg6cYR6vo6nTz5ciMfgn5zsKpYSkaeAcu9Ywc8AMPm6yen1p4S7bnhnRP",
  "key31": "3a1TVSN1NkrX56qzqdvJRgLKcg1sci5gRbiT6aAbTtscwsJKGzoXprqGMbLh7kWMg25nEtD7LDJszuvc9JCeK3qq",
  "key32": "3TNU8ExAQcSkH7GSJjJhKLH9485upJxNtLb15LeUDuNFWV6owrthrm5XKHPgcpwStsJXDW6gmgMmrni35NXG7qT2",
  "key33": "3A2BYcfc4Wbrj64hmjuKct6F6fiBZky75ghVXxibytdhDWy2Lnv6NzQ4T7qw59LG56tmVPn9voH1QFhuBN2Jtjrm",
  "key34": "2oZvNMWWFXmq8fw1aX4rc2GEZibBD3hZc16WroQH7QMRNjupPfogXyxFmFLoXtTLkxZWHuf2p4NoTKPTP6H6NxYf",
  "key35": "3hrCFNVRoDRtLwB8YwVksgrStuGTfm1gXQrd5S4erXix2ZVWjw6P3RbyDL69haXRfuaSrtHZyaaxaqGQwxCfLcYb",
  "key36": "3oE9kTVjuwGVxH692fHdy2NkWGtw7WaHncKRfHzCYSEo6mwz6rHYZczkVXHETLfcigXwofVUi2YZca5agywLg4Jf",
  "key37": "62zMTwUA5dSCXx8wsxf9osV9xyCMkCPa8kg3KqYsg8ntKLuc2f6dmNTkaMRLgPYabuXB2k3LZgsm6VAcE32NkQeX",
  "key38": "3tjC7UAUhgZ9jF1qJFLKWJS5GjkShP1YRUQ2b1GjSM7aszXC9PwtV5fJrdqtbupWj5bfs1NgFXZiN6YAnBpxePiP",
  "key39": "2buZN9UPDT81WyDREJv5rUUgy8MwuFK9zViDqA8WQ2PXogJ5NAqmqzxecX1qW7svCNRwVBZ75K4md4H1W4ERTiFy",
  "key40": "4MQ85tJLmmF5aJogkKyhixgYLLedkvQ3zGWRpAxwH9f5DuPa6eUyKCkuANAACB54BuirWKdUiW8mikWekH27FZDH",
  "key41": "5NfB8fqsPLmYdqKV5PPuZKPsBZAAnPnjiYXAbHWr6SVXnxABYxkt9Fij87HjyjVpLPJQbErzVua6z9BqUNKkRnd",
  "key42": "5TYS1XsXuWQcvWWFMfFuUFcVycqb8hZvmerarSHwXN3eC3C26YFJMGR2mtMZUzk9aPJXwLymwJM2pkpmyBHP7pHa",
  "key43": "2sCSvjCw25iPQuDKLo4creVvN6HqQ5Zi4yoA7nGVpysB9jo7XUPtB127Jcd6SoZZaVFqUk1Syd8jRxEnp7Nf3Q6G",
  "key44": "4pLZc6KW1vCZWaGfeNA65pT3qK6ecCKTHW2YY5NxR5mpmv1Jvu7RgUCqUBAuUMbwTC7GYDa5WzcYPeuuAtgxYZer",
  "key45": "5hMZYjvEc8rPqNA7838j9NzbZN3Bv5VD23WTPtQW7WQ2HuuvYpdQyK2D3AXkQiKdXpz5QDavrQTwQ8vp4EUjxBL",
  "key46": "65dg2U3G7VbWtPDnkrxnVFNmYaFjTj33fnBSKnfSJKiU3WB9GXYfnVepSEkAsZC7ST13NAimcFxx65jbHqAXBHga",
  "key47": "2G2y5axP1cv2dK8pDESqRXNY4ZgWQykQme1ULfGqewazo6et7cr1NPA3HWiJZExQ4CEZTursedGStKcNuejfe3rV",
  "key48": "2t2bs62nRxS2gTn2T92ipHZs6gWhkDQGQqe7q2pdKrMgLRi9oYXPbvQxbgTNaAiPdyiSBQac1z6vBteGoRCritKK",
  "key49": "4ipxbo6LQbq4pGdrRtgui4Tbwgtxi92EW7TvXWtLUWZPPe6oJRGgWQvG1JPvbZxAZqJmzKgLjRuHtaZ6uvuRcJ7M"
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
