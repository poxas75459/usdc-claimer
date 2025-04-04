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
    "2D4S3spDeyypR35AVDTqLimADpH4bR2dxVSye4Y31fxtURjxzcJzfU1nCdGDtR7QNa1s19GVBSnLC5cdkD9Nu9ar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wR7CbdJuZQYgg2yMgGRs7kpX3Tdf2RvygH3eP9anLWc6KYGihtD9SxSqThDXGZ9nhFo9Eji9J3efxcm5vDUsDQf",
  "key1": "5yGcPnbU6zH31FnH7ATGSwVXcZqdr59GY49FGR8fnxe4HP7BKSNuWxV372L1fCxHEXe6NMhLMzMUNKCsftmoFVEi",
  "key2": "gT2zqqGkfDG9mQKP78naPyJR6o7VQPF7x9S5hodw5VFeab6hadhduQC2mscnTuu7UpX5wkYqATaT96ampRqa4ma",
  "key3": "YfqQLqNhnjHhSrikjg3hQTuip94LCXUsv9uEAgDZceakscPyBEdH8KsDdAbD93XVYGx2GnabuVYrUzA9wxpUHvM",
  "key4": "4MWjYeGhXSXXU98uXdVGtG23sWcuVZQkbKNwMS9V5GyjQnY5o4YjDX5FWa9KGsmVhGAGNPL9WQdYJU2F6ceC7tS1",
  "key5": "48AUtJXApy1jPLZxSch3nK2UUsnPvWzKqe2HnQhp72bSxZpYPWHvLRopzk4THaAdYotM6casbwiCeagNmvyvM1c5",
  "key6": "29GWeu6NAQR39BSzg4ZdE4buCRG5f6donUL6CuXybqSCbfFLnbabTKyt3srKz9u9hYd55AyL6rJzJ9kvSatHhkCC",
  "key7": "5v7wnhdvimqqqP8hbpdbGmyheJ2Tcejf6TKnN3tB1gy3WaX58oNJCvuv57wiFxKftZTsgyLdybUn5VaqBNFoxFbk",
  "key8": "37Sm53L4yeCdzrepcB5P53x7iZPrt9a62uJqnjo8TQyJ7TnDH8rXE5PpK2GabGBfPjSNyFjQB8194nH2Gswz2i4c",
  "key9": "xRnagyPaxdfAm8Nem9hnFc3dhQRvzUSMmjidtkaggcwUR3U3ziGbMponem6Gg8YS33gYVoJ3bgiwtyHAFeJzm2y",
  "key10": "2EbEoEdAF4KbqXz4P6hkhoB8SLDo8PzaNGXdHJzt2fasKFErbrnDTtvoCijYPQCn5to1vMqxb7FH62hrV2PfEgs5",
  "key11": "52xz99Y8bcKbaDQpTMcJPoYigX37TZuZYZCFoc1z6V2Q4v3viDpUd5jak7CP361sin6p5YtRm516NvYeQtcUaXG7",
  "key12": "3eR2wtiVRYszpK1vhq64qGyrMfxmMLik1KkdfGj1jQ8gCkZcCczp43SPv6eY2MqtBrYaPKqRd2Ywv54pEzBjB83f",
  "key13": "5rtYdqGj1fhpP6y3GX6JVoHM4hbEZt6DAaks9XZcxwDpVceK3zmiwUfb3nJpSE6yK5cYKdivTPQoiCqJMSuX9h3g",
  "key14": "27xrMLarxyF2arvQF43rgyjEhJxb1rFxHxhYmdGURdPhZ5aAWCDxFGTzFaSqm4T4uQCmvBor4Y1PkdTNkpuycqDB",
  "key15": "CSTgAk9gdYnBcKfQ4UhvGb5yFpcz7JVtKuBGNYtJVMCLi2D1xxQGDp6NCzAgoHVd9y1nNqLMq257zj4EhjdCSeh",
  "key16": "2pBDrh3aq8jQZwUx7LLhfA5q4EUMt1K1syhJ8YnKnPETyijN6UyiMT3bZCHyGhc1rZCqmAGEXGFPT6f2JaiwXKVq",
  "key17": "26TaSGDaGHNvsTMYeeD5jkkk6mKPW9ziv7wpPWYPFoZHQEYdpqcSP2Mxk5fHXCvVjkRVUcMY4DrFBoW3umoVNE3c",
  "key18": "FcxdRkxbDiFq2ec1nhqgtu6ZykTKxRvzAK6FaEDBcFzXSPTF1uNjpDdWhP9xgZJ7pdLpw1RYsePgB1CHdwfzexN",
  "key19": "613a53gF5isvon7C2RsJAHMWiTPGJoZqqzCAmP4okfivFs8kGzaj23TvNFbv7miX5Xg6w82jYm1GBXukTUqnwWFu",
  "key20": "5vbtD32V7bz3uxgpUZCVbmhJbufmhunDwfSYwT2mxVDwjX9Lia1zF86yJkmQEb9fsx2PbcVnn1noVjxQuoiMjfS3",
  "key21": "oEMDQa22X8LSbM5PSn9i95YtCfNACB515v6pqmCdovUN72pG8oqVozUCMSNo9yPgyuaSmmSSNLRWLFKG1Su27Kx",
  "key22": "5kpygg9RTFfcMuMy69LTxH62oDL1hFgwixuydwzem1YuCgMdkvb9eigHotMGxKbYoRxCDPF8LCYt4za52UEYGvV",
  "key23": "35vE5Kau2wCdb8342AAhZgqC3K4B1R9tEDGxxQSadmwTxRDF1UYcVLpzA4j6oqPrCKh8616K1DXwin33MjTPQ5Bw",
  "key24": "5tH8Utd4KVVFavfe47U3f6DDUsNPFwg3EtosKqJbHAJCxnDfNvKVHz447etv214jrcG8vgXuyK8Ra7SSXnxMfGwg",
  "key25": "3PtgEH1zyVmdd37L8qLHU7HCk8hFePqRSBBjhbud2Vp6icoUUQcUWibJQPMwmsTf6mK7j3EmDx2nZyi7vCZFaeLG",
  "key26": "xHkEcj6fwj92csAzhaWM6c8T3gA8759YJwiR674shjjkpa13sX3UYQTRiVKHkiFyffccH7i55TDQLCiY8spiZw9",
  "key27": "4guqZ6gSqESNLEtUJrBHuLm3UbojCf1epWj8nsPok5Xj95iMF6ohE2gihoEmADTvN4yFJBmrs1HtF5fqX2YR4SK",
  "key28": "5vGKC5pooXxy2TfZaR8xH7R5xRbaF43cJj1arYKKLf1xmmTr4LEuNbXYg2Sg8VGgzMWZ3vjTALDNBMEM6hmdkq8j",
  "key29": "4xoJgXceGKErWBRUqVgMYkctqJeSr9W8uzXGtcvJog4e9pKe5z5uYR7gvtuv7HP49TPsT1bEMeV2ZSifY3evA7cD",
  "key30": "5vKZuPTF8UvAjWWGg81fj6WyjrkmUAkGZ9UHxjGNqcmhCXmFHCMHB4GyDPJHpvEgRQXzqiNVnLQNu1nWZcxtk5Sd",
  "key31": "4ZdJUqeoNfAEWwybHc5Af7Tp33kPURxRfvAHxiVpoSQAACX8qCYb4V2RfT7Y4VProqHpSHUNqCrwZhU29VckLCRp",
  "key32": "4NXmvQvEHnWfFnUTaLr9xAo7NkNC549wYVq16MmJzfq2QgrrSTGtu6cPguS2SYSACkVTXVuNrjwRBg1DqriB4x2E",
  "key33": "5j7N4a9fkXRgVRtcaWK8oq6MBrKw2VsD72QUf5H169RURXxy63zMrLoBKnhmztqs1xLBpaEvg56SFfpfmzdsTuuM",
  "key34": "61w8i7XGpw7feVfPFL1jWLABYxmfeEBKk6bifh8g72uzEoiTdK7YJZrwX84s8U85Y8878XH3s188pQfkszAWvXMZ",
  "key35": "5RCcLJYNQuWH5DtvPVFKYVrPxg1oDMTw2GosCR9g82LuWQMdycHH3eH5jTUfyeNvm9WxEqawL6LUG2MUigMJYJY7",
  "key36": "5xu9mC9f6VyrCvck9TRA4kLiV6yJM6RRF5bTTx7K8XtYDZL5w3tVVRVtYTXQdx8tGpGmUQaMUH1aVj3iCarNDLVK",
  "key37": "5jXWhXDGiGEqwpSJJ8YsJTEs6nBThveBtud1GGiporGPnnch1i45jCUtEqsozViwqsHFTVtbnLPw26YGb4h5sts5",
  "key38": "4FQ6USoqiYtJQgnzEj1bgTrcA8nJ1u9a7gcyUjvACYogJKqi7fRY9CsQBHrydH6FTo2VoCqawjjVaajxo9BHLXeY",
  "key39": "5Ft2YsDX2vxHzsKbeJMsL2zmEt7yaVzo4hjn1fHduQXc8qDyJywArhF1eAnyPQWqHPHAF1aEL8JYXqtoU3rQ2LFC"
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
