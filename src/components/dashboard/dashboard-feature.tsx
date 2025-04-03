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
    "4DyH1ot7ca53TfBX3Frx9iojXB68kTd5BA7cowbT9peyXaYSeK5EL6mDrHLm3xLaCy7MZVUtRNP2Dc6dhkhVcsJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MxENmdkPWftXPH1CFbGofTynvmNrj5WXdbUz7wx7AYXyxEHcxeqXvA1c6LCzSVPk8WDD7zJEkVHSwhtkcNf64T",
  "key1": "3vqWzGN69fBmXfFkRD9HQW5dUZSwUFtHTAR5PpwqBBV1TpmjLzJ9zb5aAf7UMWHRHhrEUyCtKZFoAmmwmf5jYLqc",
  "key2": "3CbCaEAagbBPNxj4kWwCXBm7MVRdzZABeGcSRLJ17XrSv2rJTNJsqFyh4gfNWsNJP9dNcCogumVeN2igNGSPkBd3",
  "key3": "6v8prV4dyfBmjug5y5QCvnVowEhA27RLuE43am5v8n9Sm7Zywk5akBWsoWPuU7k79kFBxrTTJ3eE6i9rA1DrEgK",
  "key4": "3C9yqkj66ft3d45eY97utXJ6XcJxixEcMyDtqqxJfEPT6KebpdXAZB3mpPP1RzzJphhx79mNfVZJuBTVzyd7cFco",
  "key5": "2x375yoKJu74noDFFYMXmNSJxnAHPhbCZvX2v92BegA9H2UiRH97XtWJc2goRoJGT5GbDFAUJfGYNRqYva6gt1Ti",
  "key6": "25o822icEX1DK4pLb6K3gZ1rzdMkBucFMM1yvCU7Fbts1SS1LTfwyiNcsFSoygJTaDcDspURYSsiuKmTem3H9Wbu",
  "key7": "3U7T4pL2jsda14HNAo59zxDYtX14BdtfTR9EQ6g7JTBCDZNT4XYKn9S555HsUAANUzr3dzmiwTiYjccHwqpKyq1Y",
  "key8": "2VwFAKetQ5GTe8dNFxYWkRMKSGh5WHi7EoTjm2vzkWWS3Pg9KvqsbDT7TMvmFJVbejn5PgZyGbiezkxVQ5H1Vv8t",
  "key9": "2davpAdNwqrDNXEtqz8px9XTKWPMrk7c5cN6WfhkmuHFjn4wqRskn4Lyu7VVMdYfW3NHzxzgksGx1PZjV7aicKq2",
  "key10": "3eLQwSPjyNkwmUxnhC5AabN6r1N7LTbM4jtiXs66nRq5wvoUyvyzMAyRSzoMRv2GBN4JUN1PFGFQcqJ2Kv6ULMj7",
  "key11": "2hz112NWTZsqVH1HC7gvAVqaTYMAw6DM8PKpi85vGg2d3nwWd5XvEufy5jvVN591iRiwBFGBGz5L2DTPZ4tGo9QP",
  "key12": "5Ph888sHpT2QJ1nQxLGUJgByVUXYXnuy5CYEs5LKFbqnEtVzxNCyqqRH7n18EQ42HtzGWFhN4KCBd6E3pFQ3As7v",
  "key13": "2a8EQtnLwVpu8vzttMc4mAsCKEj6WK8pwHRtZrMen3bvpNtjpBS66nSTCCoh8agFMsPUBa8xa8dw7zTn5izD3FiZ",
  "key14": "2kEy8McGq9iVsA69PFUB2j9MpoVSAYXmyDcv6vLzzM4Pt42cKtqJP8rHE6tR622QguH6E8x2iZKy1QvZadqCuh6P",
  "key15": "chjKSUBWrUHcSoVfhHBhBVmWCtxKqxBUKQdKCL7KmpNpzu5sntmhpkzc618EWKCgZGSpwaUPjQmKTYjf9Q9iU9j",
  "key16": "xjNzsCrPCQhDYURZ7ux3otgDDpCZTEFKqcWiFS9i7mQMWCWXKMTv7vsBqyLF3raNBH9DLW7v2HZ2oHpHd6eF5Cd",
  "key17": "5CULa7niV8wGNWsjFrhYgy7BMyCuUZgqjeDvmJ7imUr7p9Xmkh1581bAL599xtE3JaUEfYaQM7tdhw8JPH2sR74P",
  "key18": "33SeUFVWGgbMRWwhcq3gg6kKBTXKH9PLHNevNQwZnqcQj8NoTBFH36F63qNP8CXeXeNRuXkgjj9sXqFpi1qKynWY",
  "key19": "4CJdGA5dDyuDdhZhB7jzdtm5qxV5U7S44v37co2UGx11Z9xre6keQiQy9Cxmk5EXvMhMPXpFkMk63kZnGvuMVexx",
  "key20": "4UgKAhXZ1WjVDWESq1n8mbx5qsQZzof7ru84LhPHgq1L1cCHo8PuSdTfLDCLDs6dcVKYFD168DHBXxBULSMyHeKD",
  "key21": "2fvwTwQCd9TE4YJSsr8vd1eMbVjakKGqHLoBDvNzmn2qfNLJ7hZHrzhgD1PwFYguaKQgNmoPSpek7NsYM1VG5MKX",
  "key22": "3QsmmTC7X6bxeYubeUZnRhXAfQ5JsERJxp9GsZ37bth1R1FgsiPUQRg2TikH91Q3uMDLeTxNCxZMr3A9tcAAX72b",
  "key23": "6LWZj1FoJC4KMvBBzvjGT6vvbdxsJKkbzWSM69YXg6rozFc7jBK9BhFg1aDzdfUS28PeAtpVA8AvuEDfRgfYmNF",
  "key24": "5poVHGDCFYpqEQR6MhdNXjCvJ9Zt8Y6ZNPQQCJo3jee5JaMmwEdu6vyHnczcYedW692ULUX6mzemGXryTvhDQC5A",
  "key25": "4uQkLr5JN95jQzM98dqSxCi8J3xvVJLMtVCtRVEFZe6gEuF4kPem8M68kDfTbbiihgwACbZ94Ls48uqNc8ENL3Y9",
  "key26": "4TCPcYQnMQ1aihZVSec9rECiiSj9wt57UrH51xTvBgSFias9wMEcou3L41zs9yQwBsarY2Vx2agVDokShZRJt5ph",
  "key27": "4dLUrfyGjNALGskPKqqB3LZKgfmU8rJqxyDu54tzuYp1jX7AVfFUQDtvrByGhko5JGmaSEvwsZkmpMZZNxBaYXv",
  "key28": "2jtqeaxpB6nK7xewM7BVE1ZZPHiESbJov9tJ6v431jB1CzoxSNQVGw61tsSFA4HdJHe4jwS8jAqJZFDNsmnG69W2",
  "key29": "2ERDx144UqkA8YnfTfHaWq8QcQxEw4AvVJc39R7bs8d9M6wjZwxahK3AFCR18uxPcrQ1sh4cGvUR3ztrX2R51baA",
  "key30": "34FxzK2TgLxffPtUfht799GPaVuyhy14ecY84gju8Px2CAiXTkeqLe7Q3YshTeiRpuaujKbkJGT32NasP6A2U1cJ",
  "key31": "418wuTFrfWK47r8dKGryQ7Mek8YfgGr91Xccqn8dKr1v11AbLrw7eUDPt8Ugn2YYswCWUrKhVF7Qx43pPiUGhfUB",
  "key32": "QjsNe8knUcU8634cUckg2fzwt8PMGgBWp9jfeau9kutQqssy6QyyCNke67AQi6pmGx7An7tZYFaKpq9pKzZU8vT",
  "key33": "MwFwvxx4JYUL9im2eQavnPRpkfJn3acFApZ9K5zZjFnhTVcimvJLp49g23adhsLCYtv9im9dDxffV2of5isxNVr",
  "key34": "oKuUfnGsgka3c1WVxxYQBw2WYizp4tMycPjXxbkSukZi3DLozipjfYuMwjhKRgmfhvgzyNC2fr4zaHMkwmSkXfu",
  "key35": "2eEEVtUcxqwtSXvGNNt55eqpbxhQ7Cpsp5efy9FznfzfSp1Sva5pkmdYQQmtP5MvZPPja13C2s6yp1mBv4GYp7U7",
  "key36": "2GVQsehNQMbMRzw7hmEGkiuriyjzXNGyYAcNn6xbHqmC1WRpj21WZMtTsSggRCtrxNqYkJhBJrhiF2m1SzFQ6UkN",
  "key37": "3B8wMLc73RWGihNF1anKniD7fESBCT86SNHA2aTZ3jayZqGmoUCv459t7EEncjdZcTuFt9xBgbps4fh9K69oGEy7",
  "key38": "5axJ3XV1P4D9iy29idAAEGAJ9gYHsVAuF1LzTSHYGeSKwyuX6RdYN6AvELCdwF8BCabsxkFpqaoZTMYde5uAr3ji",
  "key39": "3wyxMFoqfS43fvUUH8T9Nwxupvu7J3Lh8YmqmM5VMwjkJ11zzsBNqQMG4kbzEedhzYe3k8FfjBAxRUw9bi1na7Va",
  "key40": "5cPKAgzXfRvCUJ3R1QwVHdy2TDSihdN3zJYT3WRbJcGBmyMVjo2QUcKoz3ZUSJtg82AT6qHuCEJHoXto35kXdNXX",
  "key41": "5yHksqsA5cA6zA3xTvranRWynjJBnJmAAaziZtTXrquQdP5DzrcHhT3RmzLcGt6NanRaRAX3cQJiLT3Haq8uixqM",
  "key42": "3tamm55r3SgrzC6ha2KwPK1sMMTFsnUrY2Q1s6zCkMXhvb6PZ9NP8NRqJrigTFNpYh4SHZykR9bHUYR2st6Dpuy9",
  "key43": "2Luzt6VaGmcX95DLaFZDiYXcQbFeGPpYV3YCa9oMmMfGXp4o6TvmvBYFZz1Pgj8KAUZLjAKFq6TZwXba4Tua5wcn",
  "key44": "jry97tw4gYtCwHB5tRLMgJM2MJb3mxdzAmAtWneQxiK58M7nmg9zgGJcBVPg5Qj4eMrJzevnbhh626yYkMNXjnN",
  "key45": "3NasLhzKpMpHCAeuxvRL6kGuNziuFMrnABRjbSjBcFEMevxHyR16RtQZ4i7RMPMidDY6w9RedQq1EjbZVuDYHZAG",
  "key46": "RbeMGZGoqL3uS7rjhbFuw5Yqp4Bz1vCpaAQJgvdH1fpdEUfZ9kZTJzD5z7c24dBtvbmcxnTJz2LSPB8gg9q9oBX"
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
