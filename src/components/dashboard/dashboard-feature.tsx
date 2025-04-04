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
    "QudWr8AoNQMrw6CiowkwAfegzhX8WFKMXNht7zJa7W8bGcaNhKvn5pk4JGjVGM7yqCWMTH5e1CrMNv5rndazJrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jfKhBDdVgyUobjh9PK8V1C4K31LoRcMcEuYtqrsgSGMUCj3oq8e7NuVXV3Dz3t3239FL6jovfRFdUXR8q9V3Siw",
  "key1": "656jW8uijgfwR2719PxSCPzmz4HR4kdrbd6J4qoCVGqSQLZiF5kvj8NEvshY3kKJPZgpQRuJ2fDkUmciT8kaSpVQ",
  "key2": "3o6XS3VXWv6wMMirJkp7siXmastKoGMbhRSN1PBeG2ievdFdGK2rWfQ4Vgu1dB2m8jZcEnwSGZsQmKUi5EnV3uwW",
  "key3": "3Mi5yor7kHfd4h8n38N9YM7XpfvhtQ1vL8pyLVZYone51GUnrAFermT2HLxQn86swrgD6DnZbzyvmtWNcCSjZo84",
  "key4": "5wcHSonBXcbo93gdtySVsD6ccRxVo2zEkFj1nkMJbJBePBHnVXzk7hEwRmVwwrT8qfzZyMuMmSSrcMUovdynKocs",
  "key5": "2RuBCCJrci2FfLg3eQydJqL5zqwfKJ8ffmkVqWXYwMDFZPvVrEN8TwuKRL7nPFXCWvqtCWZTV3jSDjRpkW4mbE9z",
  "key6": "3yjMvKzRsVYPLiF6QLPFrXNAeYSnesDJnh9wSWAHsnAzFseq5ivxYCii7324PcNTWhBpsqg4WujhqqXF6mZ7k9zu",
  "key7": "5ez1v5GeMGe3dG5qvDh9a5NJVDp6vqxJCFCKz9abCiA5Dhsm7fWzvjX4brfP2xwPGkoFcobsWwZ8kUMKbxXn1hGT",
  "key8": "4frAX9B3c261qdfpGpNdqnQ2kyWtodNNbXy5rkf6WU7bXRmJdtxtRGhW4WjJbz8iwL7mhBTp7VJE43zg5a1tX3Gs",
  "key9": "5utWRXCB5KCCeqET131ojPQEXuQJLuWMQLCc5o7VApcBxrmgxV9GjoSSKTGtGZgv4Bg1dTio9zH98x3XGLVujZTL",
  "key10": "4XW4QeSF26es4yTqTwdiJfewtovJkFBtcZbJJRf9rDB8qSqhPZShRQqgzNfTv8Wd3rtU1h7noQGS9mYiNc3Gf4pE",
  "key11": "21VtpcF98aNuf5CRnzmyuYYAFQvZURM6drtTFj7rAiuYS1z8ZEdJbVzac1m7cAoEJZ3eats93fsbs3mDfsmM6KZb",
  "key12": "4ZsAHbt2RPft9a316McaUPGRbHsnVPR6exY5aehVccfHBDxY7SmNAyidByaz3PnaTDsy1tZUqgEjo9rfkLdqkHVY",
  "key13": "5hy4EGZBRtdrQX2grDzrCLkTJyyuSRaGfQk2MUBW4JVZaSkn7J1wFPHPw6VcyJwaG5xuUh5eqsdXf3MWPPQUAe3n",
  "key14": "5WqBkJHDeHa848PRzTJJfuTp28vBAaFjiev5GuetKR9HaWQxBjtE95hxHzxdGs38kGXTSgGhHuYBxFgNWi8CVcL7",
  "key15": "4SeyKTArYY4yrtCTBQbGU5hVZZxtFotqu6YuwPx7FLAddUUN3uXtk9k32zCRYenUqWAGd6koV95TfTKpDNwh2Ncx",
  "key16": "3sfMpKXXB6vixTxeTnvwmG3tPykjK7NHD6mn1VnpXvAGkZbnXDLWc5vp6UZpDm8X99xLMLiWGQgUuoPMhi35Te6u",
  "key17": "2krmmUPkcn3D77UJEjQ7NjXespJdPSfZ4oh36RQMK5njYdkKwd9FN9qLuxVs9HotfA5DWTRrToeinDfiEmdPo9a1",
  "key18": "2VM9bkoBk5zt3uX49MYWTzAqT5Z2WdRgcArqTzYQ4xCXHMReTKnhwXcFvEicHSxYQMD6XurbgpyoNLPGnRzr2LJE",
  "key19": "4Lbbj3vE6GVQ2ivW8UTNZEXXWK7uDF5TztXW8Sx6cKTV2eXyaNGgfW2JcpZtH4dMGdh7tJQM1G21gdaA49TgZ3TH",
  "key20": "6gCmNLcvmitCGSaQSsWCEn4xXak1hbUoC1qBuFn8DcgpPTVNVfVuqcbtJhNBdmvkhGYa6o3qUNpd82Qk7EY6jMF",
  "key21": "2bWFAE9bKMm43R2uLnqWur9qLLzQdm5h97iozGMjr6d6mbFKopeEpZ2NUh2mCyQpPjwjyYztrBvLcPovrH676bLC",
  "key22": "4arXUFoqiSYeXSJkRNh6VgMYELL1d4DooEbaDjTt5GB3yPJX7hCwvcGH3JFXy4zdKfC7MohhzWDrorWfY6PRh8yN",
  "key23": "RcbL7A7ECJoTQFac7C5BT52Mn23gkcvvbB86V75g3F1ZrJwRvk2oFZfqFKNquS1czfhTMdtVBH5xSobiBuc5tjw",
  "key24": "5FffAhLWtJsmeGc3pcs7Gqr36QXaKz46NwhapXHqocNnCTstBHuDUPEDU2SYJoDWUnM7rdguw3CiDdPMFNi8tPqh",
  "key25": "ji4Rcs7ZEa6DyaPCGE7QnhVo5jr9ZpCbvrpj824i8UTMN88qRyq2dAXbNGjkhXEAHyhZBWNUUkck78KEY2NXSZj",
  "key26": "4533oFjoNcSrNHppgLzJwqNNooruExE1nj7fEdPZRa7Wtn3xDYfra7RJ41ujNt78kXUgVa8JWH5MzrvGN7GVZpZM",
  "key27": "5xFZgwZNTZN1YeKknVruohDzWWzLU6yDP82heSsd2e3jkfyaTSXEKHDPtmXSXtzpmYdiHzokVvfgX3rZw5tCtS9X",
  "key28": "2R7cvpxxAWmtS8M5AX4mhvuoruNq3fqdCpCuuoqePrbhbGLLDVxHvxnUJvvfmummTckVyJC2v81fjjfCUuwVdQkm",
  "key29": "5sqnGF5qiV2PvX7prM7KsRTKZoR2Pt38fW9krhVDDREevFXST56JrvDhumhgM6PTSwoxWFYbTQeSYLYKoeaABong",
  "key30": "3GGBxXfzYxzBL8kKpeimG7PUZ64TfHJkVoo5iftACZGypumGfWDyWaMousiAZ2LPwzxWmAvdegEQBs5wKt31U4Zc",
  "key31": "2pnhgs4bhojvyiHMkm1NFP3KMzeRvQRVzV69XBBjC3eY5LUyTK3JfGGMtG6NahCz4ukbWvuGKcoSKLM81S4rny3n",
  "key32": "3ZE7AKsvu6CTq9p2ZK85HWUgtMM2eFF5siZa71888zY2Ja5Rp3Rm52zAd1E2i5pdf3QRmjCJb53XJMeaT7XMTZer",
  "key33": "4Ys8MYEZQUbzGVzaG1w7JVWEVUyU1FpuyYSe8Nxf4nJrrRGCVdRhkPA9Y7N1pSqjyke8v1a66kt16zjJGNvUX1Sk",
  "key34": "3riPL8Z1iBSbQnXvTvEbDh3cWtaG2J6hTw4RHMXwY2quUGGAcXnzUo2hgRPnQj3PxHSYEV9YkcvERXQFHTLpRwbr",
  "key35": "4NF2QPzzY42TFfHi69YPBhSTei2Knqg7S9kkVrmHanKYsSx3HgoQtDNVYBMTcJJsQoTp8H3cdvj6CbhXwooaBniX",
  "key36": "4q3mrF1cF5wTrNACfPknoJEx6F2RDJhwuETbdGYd1VW6rHg2DX8HBZ8FKJm5EQ8HBeMftAJv5gPsZ4Ps83wgZKvp",
  "key37": "Q5ugtuMkM2HjJ7aw84ohNpV4J44Jag7ScHMt8coXvD9YhZzsCv9vmrrgmnwD3VqeL484TH2FnYaJgdixKqqoXJH",
  "key38": "4TMtDQMxrWSJHogMCGmzVZdk2oBNb5gyDjxjM9VS8trEXXQAVF2HGQmFYq1nwTvRzJkUfYTG3DZ4BCfaUdFrzbC",
  "key39": "1mTS73TkxunHsJ1VRK4HkbbCXsRdziTXCGHM7SwK29UXG3rgKBq4HB4EgBxv7GnDWrymMtNJ6kahREyRi1giygT",
  "key40": "WNQzHV8WGpWNt4R5u74r6APQmopymcJt96rgAVzMjrV6s7Gd2SDSZttNnvadmL8Z1ZpE5KmpLWcuckd25YaBBCW",
  "key41": "4HvXWsKpjSGTvhNdk9UaY4ciMLCUp1QSLhLYFCVu8kYrksSim3jSu9Nzi2bWakEYSfqbw2EuMXyDreQDuEYcGHYq",
  "key42": "62zJLFECKVmmk1KKsmFhGtEM9wkCUJUUtvxt4bfESBDWyXLJCrVpiziFS9Z8ywhngBkQB7Mqi1oMY9gncfqRT28g",
  "key43": "nhyqnEbgtBAYVGr5QvDvKAjdy9ZhKHyazGDaHr7bhPvLdf3dM9Wn9WpC4qeAbXgNue7SX6avU1rn2wRudY5VfvS",
  "key44": "2W21paPr6dNmgnW5rbb2s9Gogdvivauc26Xjo5SyFNccdXbcys3mzrQ1JiPbiVqY3YyvWqpGFzoJF3ScoREw1Uji",
  "key45": "xgWp9o9Rg2FWpEMyXEJGsgdZqTw3hx7i58eCsR2eSuLZAqP9MGGt7js1oK7dRNEu5kCrU155nN7vD8q91pLz2jR",
  "key46": "aL5A5YZpWtqHRCcWcBVu8PDZQVtgkW9or1vyX8KEFw9nvnKxihdZmTJoidoEHfhfRdbXP9kHQ8aLH84ZCHYFvg9",
  "key47": "dcr4bdgqT6gVZqbG6DEbkdFkhhDzQGB94u8YGcRVUifVsBZdmyR3v9S5yirfmAj1ASLMLs23fjUa5PUm1dYKN32",
  "key48": "436NGpuqCCNP7CyoJKeDPHbuD56cifHSVd8Rv4m5VspA225fgjwZEXrcUeDfmWYYkTD18tQH5wh1AeCzMJxWVm4M"
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
