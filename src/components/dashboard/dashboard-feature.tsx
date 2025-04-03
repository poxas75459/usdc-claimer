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
    "3Pt7apbiBpuyB6TSiTWR3EKbJSehDNhv5v5fP68cdJwLTU8uE657hjpbzaVztfhf7ZgCKKHM8CCw2U8eVJwXqgT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5nmW6sqXnPVLMWHK5FQW5AtNteYGdfZW9oeSmqtEqpSD4SvR1EEfMBD9hzYskwyEKCoQ7KfTgZYpumfkBNuGNq",
  "key1": "23sSswmgaKEDKfeChudbZCqDJQ97zrSjaZ7KGRcgiF7k5uthDvC2AKLpPK9EFTU1sJKmnWqM3xDZgYWrf6bNM8Uu",
  "key2": "2XWMYC1P2S3wsfi4YSsH6otW8ctAWVzWdFyhaBniJsxA8JDzHD4dTpjQ4NYWQhVwyEUDqJ8vBCkz5s7YGAu15Umj",
  "key3": "ProJqYyuDRHgWe9Q3ZjC15VECw8t6DgenwnjzbLjtYxkCV8VRQTgNV3RNMjB9XNzSBA9QsKYuAahmR4FZbw5SsR",
  "key4": "2S4H7XVqJaSPh4iiqZcE9JfBdYRxny9GMvUcmY3Csb65sFWyqxGVL6fhRyRqxVYqsYPaVL42DKDDw99qBqZFD1BH",
  "key5": "9URYS9LgmbMkwTQTbGLFfQBFbkB4pUPZE31giSaGvWq5KgvqTJw744UPk6sfybn8yhdHuYg8WYaPQuiDLjRpmj1",
  "key6": "4kBzw7hcuGc7QRRgfn7Fw7KFWfrWPPRbvWsUydWycWQC533g1C9ZLDkbWPkbcVnDPyjQiLuTYhFFrY8zxpXb5T3q",
  "key7": "2hGGdT2BLsagHDQEQ7mAiQoNTf6Pj2gffCQ8YevfSbdHY6KUag5FURhNQyjMBT8A3Y9uy55nzqaqXA78gmuoxpUM",
  "key8": "4NGUqESWW2h3RN12JG9tadmb271nhH8uvnAXfNChoAYYwqu8vXM5qwPs5j2AMjX8E2oiVdWT6AKpuXRTnoCMMm6y",
  "key9": "33pUJDavwoe5masTwKiomsw7benJ9qxjsUKKxrsSyv3qQtqipakoQ5z3CQ4NY6GfzRraMN55gR57WZwa8rHQ2pK4",
  "key10": "2rgkudkgUnYNP5Re3VFHHJ4PbjocARWYW4Uyefb2KyPzVUcXzzTdyMjyw6rYpYaQidtFBtUE3QV67frbtGCPTHk2",
  "key11": "2h9Bj2EChAqbTiXrQrQDvtW1WBAJQeCoGbHodzB5xhoCynjZtGeTUVWEn6z7WYC8pTXXjWwUV8XMgBawtRJcmqNL",
  "key12": "5L3zPZC6FGVVGv3zKVvztBbcid1GBwqYvJooRxonTSWd3yvYB7niwqP4q41AkvY1Pq4oL1NtKWYaYBbiPSMLN1YS",
  "key13": "5hzqBsedSu8kK1AmogG7vU2457PGufw2rGhLT6ryfrC4rAVzwUW6FAo7jqbsq6CMrMNSM5DD57utwttmnDYbd5UJ",
  "key14": "667HcN7gMyzFahRs4t8WjupQN7QqJasRp7eqAzWtCeL5zuuW1oMoE85ckSc4UPvY47YnJfY8rFxMnYkxTRqjpipH",
  "key15": "5edQzG5ztMQw55HzNok2p2xsevb8Rwkds3ZhzhSNhiArsv9R24gh8FRMrtXseTKMQkXKJKFeMetdZrVf7kbHFJq4",
  "key16": "SUhQiNzASq2wYsSSZn7z1k1kkcV6Ke7tH2JhLWXSQu8VmDjnnpErTBZzzzt5R2UTzGyPwxyKcJA16uDiiMvXEDf",
  "key17": "5vmWV7oPnqWMMuJJGQA7wfhhC6bR4FLRg9Vs6t8BGEnE3rvBTURXgcqQsb7Qk36P7LoEZRs6XjcwWS3xrpxnEHpG",
  "key18": "nUKXMzZ8X8aVFAfktjGuaGdnPs1b8tvVb9vfiTPkHDKXBXcPWmp9Ptn3LAsCz1tULb2mXmp7V3JTDd8c8J3Fa6n",
  "key19": "pVyrD7794bB6PjQEF62zcR96a7wDjsRcSNJeWQyVyY3Mynh5r8TAYQ3V81egg1CdNHpZT4JgYF3FKZ8Xx5JcxSC",
  "key20": "fvN5mg163nLMXrFmig7nkAZTeeJLf8wrHt1BeRy9vjPY61NyfnMan5kns3xqWQeVBgSgtpBJpwEHUb3ZVwqnFir",
  "key21": "2qgp7Y5Aro12AK3ajsVPoNWVxExvdYfvqvEWHkJHuNAgSkyGQeErhufNsDUVZUsZPrswrojLoywLVcEFMjGNKJR2",
  "key22": "zXbmVQFS8R47ypEZHEQVdZmiEKC9XYA91KzXTGGkjECeQVxSuvEPqfwcZAeqCDpu5UmjGuzRaNUjFtvur1fazca",
  "key23": "GTV3Gfc5pmWE9Vb48wmuw4HYSGMR3jMWqx8LguPNkjHs5graPvy2b8jW5ft9ZRpoEjVXoV6WQ5AAGCj34mbP9X6",
  "key24": "4vNWpxhGH4MgqEgppbt3gZwCY3Yo9DbCjPBpiyji1tN7zBLFjvJBEmVjCntcsvNTz7HE4domoAFxBtfL7nvxW616",
  "key25": "67PK6jj5nLv3Xk7j3mnRfPbBfgvUTmJyiSCE6gnNyorRs8CpBDCoJP4hMc49oas4yvne7Sv87dLJHuWgq66S4wc6",
  "key26": "2nG9cC8kuua89zeYGwaSFSmUK7oq1G7xhU4B285WvpvopUNz96ZCvTDK1uFSxFQ7EN77qXqzPt5gwhsmCMiiHuQN",
  "key27": "2XtzUjkQLeEohNKpRaupoiqQsYtb8wZx7t56WNZ6DeAuSi5F3exEbjt47Jp7ao3W4k85a4T1fzpBhfJ2XDpX9cCF",
  "key28": "DZLyG2dZ1r4GfWABUJjv2N95vXKu7k4ddGWGZ2KKbKF9w3zZcMUs6kcuPTupp2cqANy39YCj95uh2CzDkQZSFe4",
  "key29": "3EokWrH1m3huSPAbvBmHFe1ttRU3kDmEpkxTwUhQuSiLUae2QNgiTRj38YMAsRLnKsbwMJ4LV5ipWHxSQCMZkMWL",
  "key30": "9A3AWyjp9AKbWP3uucCCMm9E3YbSzQtrwLBYnEUu5Si98T77NRt2FSJmJdWAc5FSUQtWEdpDNFm1RFx7uHBApyu",
  "key31": "2F99j18BshWnxWU5sQ7xZ21ZWaQDdjfceicLz16RhSTTQA8VP8ygBMcKiQBYnvJXarYUZwMmYdCfDPfFBnygcKay",
  "key32": "5mA1WPeBiFoemMJ7zrJVgQRYCeaXT3HnYJfPsGkseR1q6oRfiSKYRsxQ3CBL95NMUr5gXcSz6bD4NoWYBzSRYNwN",
  "key33": "LcjPVwT64na3BRJDpsVpJ4RqEviuybL78qWmJ9KtnKCoSAE6NgF2tm6AG3g7Uj6QLb5vzYWsMRH38ss92GrLueS",
  "key34": "2oJ9jhfGngmSGNGrf8DLK5siY5MnyEqMhaMdkGfku3rZ3vLzZ1R7TwRm3sWyMYNcvDGf7ubgNmwTM9jQatm9e52m",
  "key35": "nER2EBDS6Z771Dhxtokd2Gcb4FXy38G638Fjvkzm5kM5rSCqKV61Z5WsqQMfA25oknEtjDFmU7v5A6iDdcavoKU",
  "key36": "3MxpuvaXbPWqG8ke8dwG75vHD1qG2qJfAf37cq7WMbjkuZ2BpXNa1YpTZcWyHtTPpquH6os2YZAuSda6e3a91D1h",
  "key37": "2WPCGSggbPVY5z8GqFGLHZXv1HHjTUjERTvUTVfiz1KNzsDrDs8gXvXHP3Vf9Ltgq7t4MUt6gUEVPTgPX7rQeUix",
  "key38": "34KfzSS8JxgGnvrYfzh9amQ1biwswM9n2acEtbbXUJmrjgKGxkhqNh2bt1KZwjEUxiMpMynnd8PFH3bGRqcjRbSJ",
  "key39": "63ZxtKgy7cRxW85sMNNDejzXKQhbQFtfGx3aEQ2nYZPfR86cu5a9Un8FWhu39Wxi4thnbVjCzBt4AiDgL95Psvs6",
  "key40": "86ANiduXwj9kPPLbuiGCj9RqqRv9jM5sSzuCJyJgigFFf54Qz8ReePbqvBZE3g9fVonzfUp9wUZ9eKCasKBFPD2",
  "key41": "4WjKhFiAWiu9o16bx59x17VVnyFSZHV3AH2we2zrNMtwAHJnoVW8zu4w3ce3cZHPFxw8ErVqo5DPJnT22x7XKe9u",
  "key42": "3GiUCykY12Lhb568FSb7ZjEV6qMejeQPSALgtYPKV7csQpso7CsJBkju1TXtx67PpLr3LchgCmxY4MNytDFPtLdc",
  "key43": "3sRhBxRCgDBQoLA21kZa7JHpjY84CzW9DhcFsXD3VPf9vdPxLvV5UD6nNYSMnSPecnL4MpHq4LM7hFtu7yVHTYih",
  "key44": "3oyJu1gqfymjenovGDGPC2QRYRedK7YZdMCkWbo54mtZWrP64RztdABJjcYirpqtWWJibrgjdg4nHzvPGSmg6C3x",
  "key45": "211D3dUyVrwuS3PsUUQfM4LHveaHn6N7VJ7WC73YQUdKPwSXhr7Bqartx855XtYG1agrogsC84JJvZRkuYKJ45sX",
  "key46": "4NdaiBV1coQ81jxRDXB758LpvE5pAAVTpDPtSCbA6MDCunow9ozDT3FWxdCwfcvrWQczGEx3vtci2BV1MK1Ub6Nz",
  "key47": "3eM82iStgR2jgBTJPcxRMQhqRhLp68gHawr5Y85NFSopCbfTWkaxgCs2PTY9j6Gmt13XCBEJSHb7HGiX2pEZvWcT"
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
