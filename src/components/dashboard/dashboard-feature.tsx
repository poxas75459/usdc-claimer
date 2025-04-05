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
    "2wKb1VJT6y6dGEvdtPeyJ6rdxpUyniW2HJR49496ecyWSjkpCLpoGf8ufGcDdefz4DmCDXTECW5RRdnrLVbZ2VWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fLUMBRfapiVhQ6RJCJDJfVBZfHBHAn3q1KZ9ekz1kJf8wiZZgBsYMfLpKRNoGLHi1hoHocJAQivYyd9od1Hw6qN",
  "key1": "2Bt3HJNQm9SvYpsCYtwTvbk6zgUiVcfWykitMW5D9icZiu4YAYGd8H9FSvV3grPX8DyZGt8C6nEEGcpJw7N6TeHX",
  "key2": "5DQBT66u7sd8pykCeBEwnMFVFLh1DFuV31Ldn5RmHj7EsEPm3aS4ARL14AfpwZKEtxc15HHnB4AFvs321fAL1iND",
  "key3": "3dur6X6JmX2QCHiACgCZjt8mN6rGrGymZLBx2hoerVvkWuxhXfk6aq6ih9mcD3WDiPHMA2ryHBPj4UB7ZgG6fEDm",
  "key4": "2t495GpGDQdk11N78aL4dh3AXBacnvziusSkEum2ts1fFyUyqg3SgJPty5HRuF7RvkbhaktCuMxZD3FJoXCry2Qa",
  "key5": "sbcFHTt2i7pBUQzpMWQUxpDQVkavUq2bUBU3EMT7U2URHyCQNoQffpv5sgJMFr6rsa3npieV3RMBmgSMMwSNaew",
  "key6": "5TZW7VCcULfEU5DGFDhfGbbEEaSRq1UvDPi1E7VygXrLDM97MFrxhZA7oyuiu1Fhd9WLy2GE72mY8pqkqyK1tVJ1",
  "key7": "3xM9Ki9VvWfpyNfyPJGW6E6MEr7NTDuvZ4qncwiwpHNCZe81e4K8GnuHUA3pHaeBJgjjM6TAwTd1dmgTfhkgf2ff",
  "key8": "2M15NPo4FSgnpryd62dpLLKAG6BhWuwxu8jBnZbHHbY9cbEgV2KpcHRAGnAntPochdaUQaFssaWxmU7RaS37GJNK",
  "key9": "4PWPJUaZvDFcGvZZgZghsUxtZdBrhbKNfL4uT7g62uiYYrXT2R89FumJZHkBsy6GT6oLhDpyj75HJELfTvL2SLAa",
  "key10": "2bB9FYNBkyvkp1vquwPT5orRUfzdcgs9ycbmqFm8iyx1PQYseTp7NfdWnD2TAEmmKJ7MbADDzC7RNJpKYDZAT22",
  "key11": "5ZzDdpMnLtto1dKL9LJZYwB8vJA6ZhvtWvpvVa66uNLM7tZnzVn7tADNTxQW2NKr4Sag1LyKF3CkjDBXXatW2pJA",
  "key12": "3J7i31mVqoCXR1jZWCp6BjeStTbmGVEo3hcxwQB4s9WfRs6n4NnfrXwLzsX3yDbHzPvCBZdHNgL3qNEwwir6F9ew",
  "key13": "28RymkTtobnLY3fdRBZhiPYcao2k7rCfKwbqsKHLmq4U5vqeXdyPLWaMzNTqmj1khYZM9DNc44r2QJT7dPdHTEmD",
  "key14": "2rLg7KooaidMw4tnYKd9F1U8P5ujDfKM4vKyuHXePJZTvq8LbB1iPdtAQEm8neZ9WgkWx2YCy5Ka87TCm4AA4PfY",
  "key15": "58CtRtPYfQWjVrRz14QchTDw7eWgUuXauqYxaGbLcgq64UKUaoFpfn6HCM68fGZJ6fVtNPSL5px2BTab3MR5vwR7",
  "key16": "3ZNUSihvhsbax1Zq262bN8my5ALonduaVG25hPXdfK3BiyFyJiFUSyRTZ6kjrr2cAUCJX9uzvrLk4ctaRpGjLoVp",
  "key17": "3dQvFfcVwgkCWeFFiBw4UsUQv25oUa2Ykdy1wi2pJFPCWwv1uKMrbdjsW7AKDjBG6qxyXnARB214nEKDY3ecKjrx",
  "key18": "4fTtgkQwNCq626iTbrtGU8pNQ14cUXzHx4jvoU2BBAPvCfwkWJjomsFsKewwWCvbdPm8SdxDq3TWKnmLw7fDKRSo",
  "key19": "46MRNCmYpzGQ6S7mnG4kpRQhzfpwYrCZFEJSeMsAgUdZifG9z36WJdsNoPagWFpRVsPo3enUGDzNZfKkwngVgkSs",
  "key20": "35MLkjMWoUytcGephW9NSK9SD5hkBMsX2ZgFxMAF5Vy44xfu9fdhgXeWE3fyJHKUNWfiJSDTECPQEEEMqxRvioEg",
  "key21": "45PPdFcYVufcr79FxhFjbpndiJZiiCQvotza2AKHL7AXFjxBHAZQsu2dT9eYpqMnJqeAqUqfZ1kz63WLgXj9aa29",
  "key22": "qPSsr1FwVf2LBcLoSuN48TVQWnEhsSmPULzCRt3Ys7SzxKspnbGTEf52diLLeZAZTSQp7wdSNw32tfuoxJXT3Qg",
  "key23": "4ine4PoNgYybf437dd8eaoXrrb9f1QkztiR778be9tHvyhWiLX4JXkwrHonTroo7hBGWg9DCUK4YSh9NCBShxv16",
  "key24": "2jxgvLwioNtFV5RK3cBdksfSYgbsznPXsmrhrUcz7azStwKfdmQeMZgHh1WH868Ww5G7xjqu2QATUWQzv8TBJ7dv",
  "key25": "4QRkTbf4XeJLHcKKaoLP9ccBeGgg21czp6HCYsVSpuHtp8R3JV86Gh5ViL4Gc26VFU7grLxKECkqQyqaArH56AW",
  "key26": "4bvLQQPaoYAbQRN8Y3XGVKuG9cnMwfSLT1JDiCMETrZ6djgRVduiDU8HYqcADgDzvWox2CcACTKFXDK8YAqQzeAV",
  "key27": "2pAekf2DwXYGemEF8tfS8K1LDQrX2YEc2c7NYq85X2WvU2f1mnRF5Q81pGJuAWEFvxDpkNUYcTwFvrQyGzVCgqeL",
  "key28": "3oPnQng5c4BSdbGGYhVT46e3EFgBSoPDtByUsqKWSzrwHQqW548sXkMwKaoJbBwyUH9nAAmXteNNP1QwRnzD6qM3"
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
