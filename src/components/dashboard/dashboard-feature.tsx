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
    "4bhzb36BcfcDVUgLwtKb4PX1GHTXQsViXJFfanH3xtkQnuH6vDRDVGNgu5Lu1kBVKWbT4M5VrY9NngLiGcBC3CvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUrEhamTX653fSdAC53efzqiX3UHL5zUUNZsiN7rSeXPhLDQ49BAa8kkRWYZFXKHqwSy8fPtmLxYXFfhVXK542F",
  "key1": "52bV9SqWMh1M5krv5EBZ6mEY2ejGNSB8Ev7FTuzMGesqgfFfNeJHZViBTZWtFVcXsQmAYmqqdrEhaWnAW5xc3Lys",
  "key2": "2WXAbeiNY9gdwmRpEBteTHxUgnP5fgBWvU3eZrSgdziFnKNsayt1A6iVEV7me8ukb4nHzKKpTGrW3QxXJPbZ123n",
  "key3": "3mcyqj44bjrFYJ8xsaFsLZguSPiKf59YGADGvHFFmvzsFaaXZCQn1DmLYC35MMKu7p45hQqERDK9HppTNJxSfDFP",
  "key4": "u5kAQvfUsVtWftvZ42JZL4ATgoNntSZ7JxT7bETQ7XLe32Wb6A9Zwvb3cPUbBGW8LZnRPfZhc7z8azButMdYfck",
  "key5": "xnny3fR72xJ4tLMgtEti8Yt8EvkMxzLPazrwVsT5K8nFAWQSZcGjoZUbv7RPoaNkyZ42vUE7AHH1Krt1ggpDPPt",
  "key6": "4h1U5WiroX3GmthPZDgpKYeHcXEnQ4GBaGqpLuxw7JYcmmYXbfkEUqiKR7dz2W4WFwue21Nqo72nucJS8QYNhsLH",
  "key7": "39qrcSvTUpuJYpgb2ar3sZxQ5pUP8MNHsRDyfARgguXXT6cQqAs8tvmMAXXiNCKdUihBxkkjThvaPKZxqGTjfbbU",
  "key8": "5VQtscYwqVWT8n5L6EydTeojLnNyrCHFXbA2TZVYQdDHskobqYGuDSjFFuJxVXW5KXwQvZK3YNoozpfuGQcur8uk",
  "key9": "5VHfF2VDd3TfyAPxberFAqKRN1CzUKQrY4FeUyZJvHKeJGkunFS7qR5uHXAxUo8rvYytzo2NULuvyBz44dxA1F3Q",
  "key10": "u8dnu4Wd7BdWRgjEMUxyShFFvE63p3bgFmhtHwB3RKAGi1jA6HfMCr4ZMoE2jCEuFLDYT4wn9YQRTwycoboSAcS",
  "key11": "43ejftMA7sLNHmTwPEmnRDziMa8T8H2RYqoHbXPCaYshK18JUHW1TmtZG9XfYn5AQGrAwmXgDNad8k91Wk8ryN2A",
  "key12": "thfBoT5hr1hTiNouMhjgdu8FR1XnChhpJPDcZ6wLQtSV6Zpsia2pKtY8ApYaXdLYGR2eivyQwAeWGMQ3QetJ8VQ",
  "key13": "2uWiaD1VJm9uBe7Wd2KGbAEp6FPR7WgvHdM8pdZNCyxDarqESLZ4oCc1sWNd2kvWGfJSJeSu4ZUUFWLebKR2aZmA",
  "key14": "wpKzMrHRqUkuHMnfMNbLZAHKuDSvfT45GcenUtzQF2GJEn9VZjAM4ynsWA2c6tG86yzi3eh7ekU3TPEt9dTvnwd",
  "key15": "3XDd9tTZVm3jjhGNvwex1qh1ZMJHkg8nLWt3DHTNmXDDcTr74hw9xYcYgYeKYT6AAsbP91ZmbhFagpa7esT2GGjA",
  "key16": "54TNVJSV2auE75fAtBQB6XeFsxin2fw8LQnYCmxg6L14n2J6yf2ZydyzMn3C57xj8W7MCxu6L62AeXdR4thjXQz9",
  "key17": "5gJtB38VCDDBMDrFHoixy76M8wbqNCayn2qkusB4PipDwDB1sjXk1k9sNhpxh91MTe5uG8bb4L66CA4mN9bFdGqA",
  "key18": "2FZLxHsxkWUeLM2DayV62VpGkKua3mr6i5AyVj2USBWjfyKbwdwqK2soGRu7xwyrGSLVoY5KJcodb1HmuGhz7e8b",
  "key19": "4CWCHyBABsr9p7mXnQnusymNQbRNHU3BHogdjLzv2UufxBh3R7diDUicTNfAVchniaqJZHFqdL8YtmNZqJkCXAKL",
  "key20": "zPYcEf8s3AiCgN7cS49Th4syL1kog6GEZsUsnjrARqvW43iLJ6igo3Gaodf2fhh8jkXpdFDDVtcBjakvB8qLdTV",
  "key21": "QyDy14kBX9AV1a9iWpdPb3XWnfYaZcATdcRgJVyVDUTuALuNWbBRoKCBQa9yCDbc7f3re2Wg3NBC6PfLDCyK2qM",
  "key22": "q3hzoZ7nCBjnY1fCWQExW4Zf7sNQFDz3KoVjHBH192ETyXSx6gxRoLkXyPR1dQoG5rmacBWJit4JKgzT9kYoQit",
  "key23": "3Pzj42cpLB3amwEDh4u3SjwjRxGXxSgDCT8X6SLvZn28CUW5GkoeVC4R9MX6e3CWQpYAnMrgDkWSBQ53YoVwFVbF",
  "key24": "b1sYMtnxPQw5eGue7hk1n9XceZHu4v317uZ7K47qW6Mbex1dS8ae4PagK3jjRiV8v84P9LiL5Ayri13RmHi4LBz",
  "key25": "JSFYRzeibnj91JUcPrR4EfSpAVBQSprpseERJC7rdfef391wnLeifGNtnLwqNfTcsMkuKZkwQc8eHQVzMMmuuFu",
  "key26": "2tQgS7SDrfhs9DNtm3jTMUZEoH51v5vsXwvVE77VBxcHnLPaaoB8KmRRU7raWweHSnpdtxcai9gxXWRwbLWLwbcs",
  "key27": "5GKcg8zX1HwjiZ2LXA8VS2amN1ALPYqJBP5ogmzHKbA27mRzdjTNde8WsVZkk7ppsBTQuDa48GXY1spCwrJjLJts",
  "key28": "3tMGC1991h4WoWSiyda27gXZooBwwfjBwoQJybMTvyrEXUiYS5fwamvKe5aagrbfhNdZQGxGBrLXvuPqShnDtmFb",
  "key29": "3HaFKg8GUBc1XhK7VfGvNSSdBhoXieeqjPgtjFeRwzWMdv86LxduqnMeDXS9sDxNvT835Y5dMeiywJanCQc7jEfx",
  "key30": "2kcSsyK9HMcCZVQ5K1rZMiHxd4o6eUw4ZhoiLxayFsfdcBHZ5Hy5pwk3tiJB3UNe6feR6fNSP8p52Gb7kprBHpTj",
  "key31": "23vVS8HtMv268Xf31fNxnUNYyFS2BaZ9HMA7WdKYE8hoXMv9daqQ4e49eURnnSbdnriWffv3HPCcAhTYQtdZhrjS"
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
