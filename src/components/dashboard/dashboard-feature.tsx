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
    "2ERkVFv2sChF6rXQbqEghSmhj2ZNcgHSweCycKsXNNytNd2JwUe1qFqHtesm5y6hG9BFjtNSi2YZSAjSn9Sc9bzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBP8iPL1nPdna238ofaYTSVY8CXdPLB8fzawagdTisttcSZuKyTP623wue4BiPb9waDsCEuASYkxGH1Fg7cBNZc",
  "key1": "3SvHqhNUjYSBj5pYL7qMFrwpUAzvTb5VgbdKK2cjzdWMy96pHJ2yPeX34N3XhExZCD2T6W7ASLgv49eSarUaG8d8",
  "key2": "7yitAU1jx1KvwUwexMvqLGQ47M6AnripfFpB6bJvLW1qRL4rVp6We7xY5xLmJSs9PU4oBEHcj6LkR5371ZWBgJM",
  "key3": "nKDpvHdJQZDF7Y8bmD1hCXsbnQ39efjbzAFcSnwj4dwR5GVVErpFH9eqqRCA6xhgHbDGJANKJ5eTN1YhrsNKX7c",
  "key4": "4hE5Zq2n325Ne4JhNcALNzwjkTGEuXSjB7mknu7TtsmWkTTMSv6y2894anxixyw6dyKWzBLtmpM4Ei4FMqmtWtiB",
  "key5": "5qZXEFL45fEPggH5LRArZA81oVFz85BabYGAdVp4oDqVzsButTuCFdx93pzdo12GxXvJwXhPEYL3czmwcAYoehua",
  "key6": "2ChAvcc6Hux8EhByyD8LWuFnrcBw8JGDV27KQNXTXzespUfrnVDUKVEJC9dzPM5mqBu3UiXFqpuNjwkqcCdcMgx8",
  "key7": "2iSgNdWNjYS3y1cWBmhKJ5ZR7iyqfjCcwnU96kk1sijevzgabFaGeVPpA2Vc4NdkjdHKYAS89ukcvNAMZ9pD2V3w",
  "key8": "TGLwSfoKCFUuDDgWmpB4WQi4YjPcCPngaadkhbujmmU8AFMLjRontKERg11c1TtV32UVYJKv8dp2d8TgpeS9hnD",
  "key9": "4b8ewoXPTyCaWrJrhWC62kB1ZY4oMntoQTSNxWW7DrFUhbQfJnv3BsjzyZYKPmyWa8VewZ1ELaZvNcf9KKgEs9k6",
  "key10": "2y4P3vWWnFLCJvyhYtPmoKS2MFPnAuEwHgnqdguHJaCdWksXuDf4GATAX2LaoiUFAsDpk3VXd6jD2Xty2JfpvZCh",
  "key11": "2mF7imXCFvpzt8einnQuB1iu5i7poHzDc5BDX2ayUsji7HySr2FfJLLR5GLVQJfDypFyCtw91YwbBnjnUQQagSCX",
  "key12": "2rPapb1YMHnpmfTqJ2J3teHHhoACTuUDLFjsuKogFwA4wUqg3dxyQ9sirEBcs94dByHPRSB6ZuwXGJ34XQ8uDfwZ",
  "key13": "4bEzEaViV7LDME5i9umKCYa9s6nFHD4cn9gjJ9oUCHjEoefvg5hqi1AobN7ao5yFfUz5F6mp7GoJEEWbbmUftaSU",
  "key14": "3vFq5b4mLpgvWCSXKgkBCAeUMRgmgP2bHsxCUASsXYpdHjcqPp4WhQmHPxo5gLFbgtq2Fhs79Dnc7F1wuH1RfWAQ",
  "key15": "4umXKZsAd2sz6kUFQPMDeiBtFb75JMaLfem3iPqZvrBJxYk9kCTHRBf4tWQ3akzuNPXPaxcxfh4PDfWRdzdMqhbA",
  "key16": "49Pp7FmPvj1La6r1esxpB3naPyfYSHcsKLH8Wg3imUJPq2nxxAzoMBzrFoRh6e3e4SMuRgRWG1WaBzLCmDoeXpty",
  "key17": "3ea9nXg9Eit1j1ixD9mnsFvZ2jH6Vi4NaszumjdBzAzrfaRfvuNpBMVpLh2vAeLBFxzcxWtVc1E348GGv6pNdV4V",
  "key18": "24z4KoHDK66eAXLxm8yA6wtJREEJmwkhYZ5i1gVv9DvzvrWhwTEAsw2BVHKHJx7Eq68dWhZTTBSUttzAfXDQy9Bw",
  "key19": "3TjxHUbz6tNgHpbK7iGSxovfhLoRRWSmBuHY4MtDbVR4m4jzCnt2BHX73QDSeoa5M9UG4Y1Gqori4TWeVn8Lw99w",
  "key20": "3dHUnwtuXzB3KqfsbJqjq5NwdCwxKKCq2ScuqDCuhvZ14gWreYuG6Yisn99C1ynC8P1iEMDYrnuduEJt3pZHBSER",
  "key21": "3C19RpbfQkpJrCnnW55Vc9uG62Q24Ce7Jf5MQfUMBDMuNR93AD3aUNPdMxWVXjQGrzqX7FySZ8mKww69DJbqP716",
  "key22": "4bbWoQPneZwSMcAphPhobEYvS1epNob7gRJC67i66oS3vj623anRvTcZCoxacN1gt7u7nxu5Tx3gTvxDZigTBiZq",
  "key23": "278wZEBDbm1XBJMVApjB3bpZVswpp2ZEaEG3yJeEEH1m3qAQQywWHHnoq7qA2VCqQmaZeSnaPVcHSwuByp4MGXnF",
  "key24": "37p9w3AKXJJvbmC49ggoVXxFBB9VqK7k2ZAVAy7CGj7rL58JNbT359xbsZGFMB2tq5kACgPhFpD2pMfvzfEMKpha",
  "key25": "4VMfuUAvXtnRb8MtCNbZrKTSYb6UTohxvztomqBH1o9WihpN6YzDbmVNLhYwgLwgRzvThs5VUNr6scUvw6p3pHsR",
  "key26": "5VdydiBiMwhCfeGXJ5ADsg5VWYUaisguYAmXdxCHwdRgfDnjAmK3jk9tqdCZekfWy2wJodYXtDCij1i9mkWC5F7T",
  "key27": "2Bv83M8coXHFEuYqJm8jECQYrMgpmdunai3DQQyvM5ZqP5Ph4MCv2E7X2MmEgfzGVSjJhmu1sPkssqehKJbjWFWx",
  "key28": "5hFkUdodM4qD5EDoDGRQmDpKPowfBgGWjP9U3XCB2K9SytaCjY5j7sfqGdPyC8MDBWpM7ZDVT6vVL5nfvjqFmsGm",
  "key29": "3xaEQtJqBcyp1eCbnB3LditWkttnZq1e9GXgBS5W5worYe3D1JhZYDStUMhrSZZCUXKkoduxjR6141eFGGujuj87",
  "key30": "538ethwWEjLqU9m9qGyby2Q3xFpSKJnHYdWwobTMnonA2XmH347WxNisBhNskBAKAMaeVyTXp99HoJhN4zPkjzH4",
  "key31": "5Pzw9RKZzPdjYnmwXX8CYhg4c3MnuEZChQfknSVWBivtLZ5qWHHBiGhtzXixCbXmvCmUHtjW67Xk2UjxFpYUeTW9",
  "key32": "3dgVfUN796twUo7fcmRauhSi9RfGTxt7RgJTVY5JQkMu1vAs8xqTCNrU3Fe46QmNup94MUb1KpNZpZzruWu6G8iv",
  "key33": "mSUCTMiHRKv8KaxkqnU44zzCKJdDiJtS8YuYZgr62UQhqxJfWwEjXYcmXcPny6SkxaW1mo445tCWJoAWiVuevBT",
  "key34": "66Abp7Evf4JkLes7hU84XMnSGiDu93Nf87o7Nba2j4aVv5FHio4rcfXjQ1AYtKgAkKW3G2Cd1N5jcfdYe1UwMx1s",
  "key35": "2ce6ehiEkSELmv8Kc5bx2uNR1P671CsKXiZxGDn3p4iUJVtYNZHv3mU413ETKVDfGc2DHoPGWhCzDUV2osF6Xheg",
  "key36": "H5t3NN5en8hxFvnVSrHb41kB7bA6jNmVu78pv6nGc1tHRa5i9egyiEsDt13AEVpoT2KhP5qAiB1WPsYizfqQw2E",
  "key37": "3cMdVuPDmqhtP24Keh1uEJouafHigmpr9cChhSynnEPn8FG3NAQLaj43Ee3YUJGUx2rw3MBNof2CzPgX8J6fGNCj",
  "key38": "2fJjxLvvJ9xF7d7KVcv2UdiGvRN7zX9ddszBQzZ4d5a7HgzH2g2zXPriQjGdY6eSMvzRSLQJX7uhc7kWibB2tWsi",
  "key39": "2UMdfUBLUx3Zdv8p6L6crqaKMdrP4yhwjkpQkutt3eL9To69cDAZLRc8SWhENtkC3fg2MBspjG7hXVEaf54ArYcr",
  "key40": "3DXQE4kWNiBa97kJuj1bqVhNh93VK8UxJcaTiZM1XMt9xpgKujHLyUPucKxLtmRmqSruLaMGuFdCgjcf3aN6dygE",
  "key41": "4Yj7s9estKKPGtYrQYsYp1Y3mQAgYToDBY1Yh27GKxGu67aEP8ztj77YmXgX7JoCcVhvicW3oQESKRCHMdbvswaw",
  "key42": "9zfgcnSWwTnEU6Crk84PpoWht61fE39aPW6cHX3trLKfsqoAtakCGwgTSVE74fLvFGSzCQZvpqcaeDg3TsFjdCT",
  "key43": "3iN3zrYqL8vF727fBGMBAnVPnwyB4dibg7oCEr1j68iEnxVjkB4T6N58HD49x5zx3vuUFmGRJVToqfkRqMiiwjhE"
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
