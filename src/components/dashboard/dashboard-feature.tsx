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
    "59Li92AgXFrJtaYMssSUrM4DDvjiJsMV37kiDJQHmUXvXcFxSQxgFuLLJ3Tfenbm2C6moRDqnoRycvv6jVuzoLSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YKpjcQZTmd1LgNYwTdSLSGVMUHvM9ps4QKKCDuErk9b8MELf6sa6WeVUeJesorZNmX5WZyYw1bcgDTCTDLwMUFt",
  "key1": "5dpkvJRk4CHKt9G74zTys7jeo5NZPdkuiN4f2hRgnXaNRGZdnEsL2T6FvmXeYjYMawpv4EhU9jAQTABd9Ku3MX4Y",
  "key2": "5cewGYdhr8xE5GAtPrKGa9ob1gpXdugkK514fpn3co5FKcLihQ5MxEFeqzRVbf9LnLCJv12TfP7pnwfkJYLTBS7J",
  "key3": "LpuA6CptF4ZAgxTNK1ij6PsKEZe1kJrYtV3o41foScgCjaAaLTE3kPGMEeKFE4CpzLfs88YMEmKBovDpMcPE8uT",
  "key4": "4XX9TUvRqxioLuDHuhvgJLrf1kFnY4cV7XnxgitrrdqoLJt12EkDdZ3yBKcPgf7V5mDLPs1DYxcsWG8nhTAXm55z",
  "key5": "25Tc5QDrJfBQnYMZcCY6Pcza6wm2F42HBnPTLCj5pBxuq9tTFDEqeiDNp8GJfghtPF6tgmktiujoZcSmZh1hu8CJ",
  "key6": "vAfVnwDF3zxSdAXCyj8xHG5ukfa7MjjTuXBG7VkjCvkqcoWPyk8z8UJZwEfMhVmSH4nN2XcYi9K3wkPP1KVTdAF",
  "key7": "4mZDwvsL9Jcj8KFphS8fzsTLkFEu3arDLufLkaUBsqUGkedcfsLrhhcvoKtnoMsY9is6YMQCpWEzC3s4gRYsAeBi",
  "key8": "5k1infMk36FnrwjQCwmm1Hu5sXhUhsxRyu89ksKJ1qsLWj2SbPh26XBb65ZByRxFMN8Loh1DdFSxzwfJF5xvMdCA",
  "key9": "2kmAWk3gqYUArBuEkk9G7wyLLJ6XkGRr4ruwcXyfKdEJSudTGRiNgziAbquWenpKdkYADjmFvdCTCCeRNJZfm6et",
  "key10": "5XP4L7JnmheGXW5XgiuaXYNaz8Sd9S2WwHCu7nM7FbgCFJoAPH1PbwfEBFwCCACdwTWpQGT5QTg8qPonWUbHNqZR",
  "key11": "4ZWnvL641Y4fH63k7hrEfdraQ4qhxaZDFXrPEDKK4K2syLHuf43nEbPV41uUgC54AfzpGM9RPELAYZosXmksLRLB",
  "key12": "1Aydtx3X6zcSD7sLBaWpgSDzQRnEA5wTcSLERhASmgnBJLpS372Q8C98cQcT2gKZDyAxgWvdyMpC9gFTwPx55dy",
  "key13": "kTCYgNBKDtDoXtxb8nsE8DEtwX6FWi42u47ZY5Jik9c78bXTnGfHaQSVsLbx17r3RSaJxFawTFxY4R28rcAdXSm",
  "key14": "2Tg4rj3TZvmk87DVjHx2axzim6pz1cCH1Vryn2iYWtSrd7Qt2TxCMdwE2AePYHGbGPwdJAZB68N9HDauj6UskfAN",
  "key15": "2yxajUZAGDoEULb5CsH36LkqC7Nxcm7xFTyDuoFaWJFG8tUUNzN9S1o51jNb6ePvJEvT8C6VDh8dwe372uMvUgLJ",
  "key16": "3wXPUFovX73MVFZy51tiMfbmYE8mKpNFTtKGLhBARuduC4nqttUnx53hX69pYbvZdvJ1eCLhbpEHn78siTNiWGqh",
  "key17": "2artg3M8D7fseZc2xDNRZYRhc72AvsbQC35PLcKHNirGegiFH8G2da2BZwMTvMDRDQ7KuxFyGibjtAuqJSF7t5o3",
  "key18": "4Q83Yfev61Lq42TQRb2aXqzQXZxhaGVVV5y8SLkArDB1TgpfnvFHV81QM4LfN2VaGiXuzbZdjue8TH6tSamDHPZv",
  "key19": "2DMBPFtrJycohttntwLsZHQgLGa5HWxmknAGEc4HJL9exscFq6RAsTW58dACR4jRywvSmB2e4QSzW1aSYv47U9N5",
  "key20": "5emKjWdeXnu43woQxrna1C7BYPW829gwXiMyozyf23BwRZQ2x6tAfG49LYai7tw36i3cVoJL4xwYXN7W8GU33LG6",
  "key21": "5iBq4tLRY5LNHMXJp6oNTKhUq6bNh4QyKRziPiTYU7eoyNnpDQy2zyRbyfRN5VzDzBxgN4UvHvHatMyjae64p4q6",
  "key22": "5NgPk3EeScU4XhjJJiuD9GxSr8ZiwgPGZKnAVVzzuzZjdgL5Px7x975G4BM95ZZPqSbpXuDqohd8vY3bHSVkBhTD",
  "key23": "AJaTBEvPpHNY98wsbnKn6wLuvSLHuFnPXAwKFFL36qW9kBtkrTULCC6ijTBgg8PYhx9ZesFBWXM9ZwUepJ76VgF",
  "key24": "5H9D32V8geksovyjGk9RUHs2ghHR5cwn3mUp9dTJscUMiB6Wha9vMNsvPoZcXndRFBLSiifMsikogSMK5k6tRbgK",
  "key25": "5ysJ9KvcihLqVSgcEKE26d4UkcxCThttbpJFmBBszXGRs2XaM3TdtwCo8DnSozZYBJR3WvMjqZtYp2BHzw1DuNkn",
  "key26": "4x3KQUZ9jof4PhutwPyE7HevnxxS2fKRqVFKGQ8uLAZj1pfAf9VwmTFoYWcTUUfgqrmHDK65YceWoTgnYBEdnFML",
  "key27": "43qNP8dqtjYCXcsLgdJJZUHuaZ9kq8HcBUpEVYeAiqfusXw31iTe1JEXFFZve6bjwzEJ8ZhfnykvQiCCzX4EEQ93",
  "key28": "2nzhtMH1NPejuD6kxYoZG7xT32TiPjZmun3ugWPTtCqrg87XVaMvsuPFEqqefAwSdFJUyLB5i7KKXN4AnRaZmnXR",
  "key29": "4F7vdHzoLWtWXXpsasUFspMaoPSUkKVcbmBU7vMj8VfKcCZDA6CaVLDyufFaTaC1CjhZ4F7iN4cKz8JZyZGrLkY5",
  "key30": "4oJL1odarDBZ2QfcQyK4AXjW2oJJkb8sKACuR2gRFEWHPQkfdZPxy2fLCMpyU68sdEDBGkXgMezgQePL4RjJ7Ws4",
  "key31": "2UBkARbqC5mUaBepnJEFEpC17nv3U7ACsnRmGwk44Av4W3HNYnuh5eyFHiJEnhbL9pNWaUwZ6yuUDjeCmYpJM4Kz",
  "key32": "2RV7p69Yq8nnYZYSamWMwniiManoKaF6ctNftN5hQuZxiojEVrG1QRYhFTUhua1oCknMB9D24L9dcMJJiaQQVdLi",
  "key33": "7XDFJPiqienZnBfsZbWpZs6apJgsSggqnL9QZaDDYT7zHvviiWyoafQmEkATUXhv7y2er9ELrNpKStHDdSE51MK",
  "key34": "5QD85CnyKZxL4weSHBd8aai32q2CQydtBy5dfD83u4FwAgnF4L3ckWbwzuGGEZ35aB2YZoWesWnuLjMvmkJJp5v8",
  "key35": "24yPxemXVqBXmFSjoj1RwbkJbAhbbnrG3y3kRcFAX2nAdaoCTg3ifevWRnSbRbshv32eZrX77Htbxbr7k8J3tM6M",
  "key36": "2DMhb3TQMq7USaCe9uXCxBJYxbfphJExoTckMWCMzhsRW1jCBTB4A39at4oZzvTFi86zexqJwcnHNNYcTM7L1rK",
  "key37": "4DdGKkbbN1EZzXafAFnJSrvxyCUbHTtT9Um7Ff2ku6on66kEABhv1tJeUqiXdPnPWUicYoyHRM5T8z8HQ1kH7yMS",
  "key38": "5cWKTRiJatWe1PABwKPJe9uewdVsEXWvCVdbycyJYuQXzeS3PKxKD9SFdtdUXp7aLyENm2pCReNUk6Ett32FNacZ",
  "key39": "5ftco3AZTncz1Av1woVCD1M5zZonamcfiS2HeJTcvgKTLNkUukcbRmwsLBQeMzUBK18gYTMGsvvfomPL6Xb1xQW2",
  "key40": "5LADmxFV8evqMAu8FkAHmjUZceVjGKnYhX5LrSWemWQzzkwXQhUckCVjJipp7yyvVtCUqt72pGUkzJ8zHQEHmwrH",
  "key41": "5BMsV9RtozAdKpbCcU17sZo1s6H9sqaRYJbhbLUmjB9pjWWbQvHkfo1aPYKm4nV1yCSDZox8DucJYb34Wwzh1Wre",
  "key42": "58pi7JXRSps5wRxR2tPiSfS4DANjhB6kdok9pZHEGrcuu1V6Vjm9cwPzACxzrk5W4sHz22sGWc7QiuzArNJuirTv",
  "key43": "3E1LXgmZSocETatJRMR5cWxb7J5nFuXA72KUsgyWuHsYn8SvY2ciChXJMB3LxqHQu9mwRMdLNM653ri1zKhGyKt4",
  "key44": "2ikRaBPuvVAZ4MuMQPGQi2WVTUA1U8dFvMzuAk1mhbCXgA4wgxp4HtajYQJCJtDEuqkUkPyr7vNUT8iz85VG6yJA",
  "key45": "2X4CaVFWR1tKwbDBadQ8EW3sAezrDjCx51dw3WNWfRAkjEdsiffyFX3jxWvJS4UBWhCzq5JsAFWm5hu7oNhVgmez",
  "key46": "3z5TDYd7zGjA46w1ojuWGee6hXwcwVvhzWM13WnMXq6JcC1yHiPxwCxzN2puU3Zw32AouzyoDVcTUSM7L8v5FrV7",
  "key47": "zmMg8xeDuu2xeqC4EUBSgnv6zsHy1Rhpw4JyeQna6KJwCTKe2egF5odjT1dEpFYQNLT82H3NVSJ2KpCWhPigBpt"
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
