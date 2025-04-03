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
    "2bYidQ91vq9FshKb2v8teZRywZ7VkyzwtuNqxxUogMeFpPZw8vE8LN6HhxjP1PcuFXw1E9rDrWQJPxSvdEs9vDPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uSpPVaRHEUDqraRBmmanqzYfbt44KSVBCWtePFrtftBQcmMVNMLGtHjCiwXumMrtFw9uFwgehkNZ3Xuo6ttZPxx",
  "key1": "32Ar9EqdKy82w7yTC8srvwLR3EXfG9aktPBrYnDXKJn39ZNqyBFA96FJvtcXMgNTiwBMRKbgvPEsYmhq8VCDvSVw",
  "key2": "k6SGAvMCasjFC4v8Nr9LmFe166ABNiUjKguFaht4LvhRWVf4gvBuxB6CM6b9hovmw6ERMrzspibiz8aXFbXwj1h",
  "key3": "KndSu4DqwAVCPjHvtLYeZdW3J1x2WC6jzVUyWjoXD9LesLXbPVVToY4kvikHJyq4NNtKLX2bhz7oTyzFsQqsWGH",
  "key4": "5AA9ZyKsNiP2yaTNFJ39bwaZ2VMLDhgBNQBHTihSmA2giQBo6nNJh8QhrQ8jdthecDXG7BPH4ZAJyhUxGh1PKnq5",
  "key5": "3kLWjiktwXgNAFhBshjUsQVThQDCK7jiQy2CB1wQassefRxWe2YSRma78eWS51GZkajaTqP9EMizUvTmdrLg9qwi",
  "key6": "2hu4gkgMw345GtojLufqauD7uJZ3dh85uRHk7kMX9sgtgzAj6hgLvvZMQvpTExDTPxCtRXSnWgXp5mdfbHx2DSJx",
  "key7": "65tJSMXxzjTnE3FuYXy4Jiic5aUi8ugDLmocfaHcWMaH3SD5ka5fZNDTEE5gGQERzyEHvKrNwBuCGonbQqzGxoU9",
  "key8": "45gfqtUR82RDgcLb84Hnr9nR4vGUfmx2f53Wc4YfBZouRb62JZYGcagTS8Vnt8tQP2dH3romBEWiVfBZzVExxD1t",
  "key9": "467gGmbbk8t3Up2Wj5fYc1ByYSdMVAQDdnQwQHmV2b6Rp1yxbtqy277BhEsGPFgRceJGP91wZm9zAfQodTN6zPwV",
  "key10": "29Zyi3yxQXVYiU3YUvkUKMZm8mLyTvrv3vGsuJfo5ZWEpsM3cNzqSS9VXHXdvdfYTKV43LBaZruLMX88ZJQe5MPz",
  "key11": "2ii9Dw9Umn1aVcw6Pc2aEahX2sEDPWtrG55aDrA2G49qC8WTjDNUkk97EWfkcmYdF22d3kuZgKknXWsCAV9NWAK1",
  "key12": "Uz1mSKC71tTb8XokQNJfjqWT8Tr8yxGxAQBFxzgMeLKRYATKKowW1Rquf7YhMGx78kGro2QvgsMgSyVsibKcryH",
  "key13": "4QhQ1Qi3LUKpj5YohbAEFeP4JqzSoaZgRKFBYyRseRH4F5sqLjQVU5movZiyCoNdmtBzih4mcC1P6VfUQaugJpZB",
  "key14": "3gWRLiu1GX2RJEGkoqoNT7Vqy816p2tBkyqgf1WrW4BB6PYJ6yppNWgKb8452p5yqjFUZztD3Hecdh1XxFwsJSqt",
  "key15": "3s6SzcUTN8eym5wZsU3FitXteBoVoHo4vcqpLWsAbKYwqY1zjSkcd4SvmLtNmCMofBhzWf1ZJ8UX4SEKRLCcv82Q",
  "key16": "5y2dgz1EVLQ69DdcPMzw2UV1CqchHmJbt7BCXuhrNmyokvjG5R6T87mgXJFf9htsuUdwqd2Sha2g5s1u7oiyJUwf",
  "key17": "4U7w98vgmippVLomRgad9hFRwPHgukNWgaVBSJC9vLM95AUvutj39PmJDAmebxJfaCWkVuTq9HzfGUXs87P96VUh",
  "key18": "563mDy3AZuoda57pdHWLUv6Gw1cnz4cvFFnXpdtfpVxAGhEwRSdtVJfTviG1VebLTDZJBRRgwNgueqbAFFHHphed",
  "key19": "5dCf4w1Sb8LnK2Ejjk27YmiMT8oYFPRVzC2A3qyYTPu1JEqGyCP58grhBpHQ74JQn5iHwWqD3C4Thb8cazMqady3",
  "key20": "5Xw4Zw3B9fc3v62T9AyVMDWqq9J8JBsZDae5wRw8Ycgzah7LGCAw58khRtEWMdcDQapna8ARa5yQQuxgqyV4gkeD",
  "key21": "5HuibqcHG67riCXLudwmgMKYRSjVLfs77br8aGxDM82xpf8hGdfLQ6NfskE6TBcg9p7GFm3uo76jztAMX1RXSW55",
  "key22": "1awYxsJAXx86UxvVF1tXfWkU1AVkjJCVYMZ8kvz9EFRHEghX7ud27NXDUK6S9AdF9KsCqm6tJ5No3D1DC5DWs7P",
  "key23": "2n9ZzdWuaCSaNomuARfR3c2zfMJqMn2YH1N9PaQVR7782RkpNfykjenuPeEHXirmjzGuiBhK62GBeJrEcvsmfbYG",
  "key24": "3bavL1KfNBoBCTkJiNGwPSR6TwTTvVitH8i3vTpBRKBzudDGGHunqeJh4ijTnGTBbErwMqnikdsPjsAiJz4BrFVT",
  "key25": "67UHmLySNMrMmRB5kRhNBana8K52kfjinR13pm3SSX7qYUgZrPqasCnnNYMtqfGXM6g4GZ6Tr81yDC3p3gPDKzf9",
  "key26": "5tfekwxhmxnFdLzrRmxQZaBH9t2N7oGsZxCv8VPS3W7sdZBraCE9aRi1at3LVi69NWB2GL5QfMR6cU36Q2kAnejj",
  "key27": "5Wk2W2LJaBKpfMohJyWdTcfMwuViRYDf7ZwPDwqvS8aYdFsUYMXUFVXex4NfnwBo96q1czobqBtxzy818DkSR4ou",
  "key28": "2pThihvFVzsjSLw8ewKYjQVDbD8gCZSE6Jb4LMjsuv1bxMqx8yQ9sEn4d4BzW2gkFRdnPYmdYMevcaqzUkdYL5P5",
  "key29": "2hXNee8VVmu4jJbSG9WcvbiiFk77mji5JBgLp1c9D7oiRBfXmueYo8cyrEYZHkDx7omJWmfFBMT2v776fHcyMxam",
  "key30": "2qpfxJhzrS7TzBLFHCM8UGTemJzvKkKhQ8NwAD6giuRM41hCAY26w1ymznAGQYGyL38ey9yKLivqxfaFhXPmQsP8",
  "key31": "5cumjYeThNa55HdygpwvFp9pxfGcD48ki49oAajiY9U78VAdtHDxr7xieigLo1ztLYatwz6pyaqQmPWk3jWQjgub",
  "key32": "4fmUNEBWqB2wqZ886B7JT8XNmd4iyzEq4XKvYdtHreYwGwqiasCftW2zAfiJ9YLJyMnxRgVXMtKpuxQJZ26c5Dus",
  "key33": "hw21PXAMMDVuootC696WuRwXNF9c2zzL4a3F94BRURR3VN75ukpF1pWxaSPHawLSN8fhtAkHQwiru24c6E5R9fN",
  "key34": "4WLm3imn7aQZE6eamC9kmgYzZ5mmUjXyhWD39P3hKHewiqANjkadxyj6xDdZTum1pTcUqBh8jeJLWMptjfeMCr9u",
  "key35": "47YrUBfPsjT85QqEujx8yC3m7FqaGu3yG5tVz6PZNaH9UJWDMm6z9FLoQZcbVDWQDHnJs1uzPE9oYxSqaNVxX9kM",
  "key36": "3rVofAb8TVi4vt7Tj9D7a5S3Nf1h1b8sPFo4ukQLn6pKL5DwJ1hncezcBeG4h8UwCRCHbuxCkNbaQqkog65bCypp",
  "key37": "2ZGZ57j2jvRxNjk8oLADRuqKJ6CSmmrZMMbVwCf9zdQ9Rcu4XgwjND1Xn9deDKXRawDumbCrSy1wVefshFqe138",
  "key38": "qsV5rCSEXqLXyYikupn4kobfXoVmCLF53YSGG7SpdiYnUxzRP6KC7QuhvqCZEK36DLYjqajxgPz91Rx53J9hB8f",
  "key39": "3u8SuTjPxRUkgMyHoCE9NDt3QsjDtiYhdGEu4voRVQbCjBSZVNiivnAumYPNB7RixAMso3K3T3iYHuetzP62CiMV",
  "key40": "3RPaPUTexTYe9gftwVXqbBfG3eFuy591HNwWB81itgibtfUFiKcAq4NSEcZC14jvqFB9e7xtFByHLmHEYSMiVQXF",
  "key41": "UH5U25j7R1v5EHNLYHHg4TTgWGA1FvnUxJXEP6TSmxbBMBMxXS5FQ2k3Qh9CxKvHpvpjdkTN35gno2NBYvqLh3s",
  "key42": "35DURGa3uXNgEeu8cXZhyTaXMxBb1hUzazTbTbzCwuxS9e1PsYHnCrK1FtWbzoze8rtVBCiBtjFcGzmimb6zUBzk"
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
