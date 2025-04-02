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
    "2ssKBnhLjZ7AQ6jJK3Nk5puLg2T4nAuURprEV3ngsUdxHzmNbBgUzrZpUmHgmxjd5vFpx5LWKV7D96reyaj6YULu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAeVSmawEL25P7GLt7U7zYVWNjeqw5joeZFxp9yqaVkNWZbjc6JpNGk5zg9Y1XSuzySWpfyUbqALjEzmfju4Bg7",
  "key1": "3wNLCrhNTcVQen3ooWyjJXm6tw8zj4VHLY4aFm52M7ytYFyBBAnuizgPJ94wtacrpkeV7YSDKQETAj6X4Z1ArCcQ",
  "key2": "Qzu95QM2XtUsv2WT5T4YGmKjDx4XNh13jCcTWQdas63DMVyuHSGMppuvWgxsj9pgbvsfwgW7eBpr5hxDD7Fzs3x",
  "key3": "yujuzJeQKuewA2mefYuzy3VkJy7jD6zKe7soeqYf1ExQRmod9Sw6s5jEdKyTm7aSvn8YbpmjxGR7SWwnUarSb4U",
  "key4": "3VbW1oc8w2ifZSD5Y6gaf7jS879nUGqMbgbHib5eXBE5CmTzWZbNZDYzUhTEPssGksQnzwzC4vSyXnbov5tF9A6Y",
  "key5": "4tZfu8o4RdRm3pkciafvwckFgNUEKijq3LAnMXsjpD1KrGmTqzv2fdyyPaRMuKJ46waigU95c4SQR5mpxrkaWThn",
  "key6": "2uur9Re1TQM3om1UbVbgs2Y7BxPzhtDbDwZwvFCqGBfVtU29Z6XMo2K2C57aSimYtFbQcUGXo6SXMWuNStHp4qwc",
  "key7": "33ha1iWA2L6QZjw17umAiQcwYiPzSg2NQie7BFJFn9pht6kTZkorRvtfmcRLjGaUeLjTgTd7RasJE5M3NvgHJDgX",
  "key8": "4buRezvxj4ST6NSfZihCj4g5H3SYERp3xfvRvg33C9WNoEogHg12y2wXUe9Vsyd4mVCf9wi3bM6NbcPDuf7ahXWZ",
  "key9": "66WsMW2qqQf8XyeJHoXqLPJStYkJs3CesUsGH6JCmpKS15uU82ETQrzbdyXx9zz5WxGoC7NTrfmS2CMrnDFw64T3",
  "key10": "3grQjURTaNuWNvy1nWRDfoUTSF73HjMip5Ei4XDaFE6SRypb9TCACzSfmArro88U9jbk6kTFwUNwg8iQj64Dm47w",
  "key11": "3m8zrk7PhCLHZJUKishJF6fBGJDnEt8QMUWgFZVMxECHHbcQmQRAL4adSspYx5cPZbZzKAJAwLQg3uQmzPyxi2pU",
  "key12": "2Lzang3jU7VckSRUcHSZz5Fo9RNumqrmh47tjFgAxnbQd6eCZLQSdMTm7Bank5mbjvgfqvwXkeuzTf3KBqDJoNSn",
  "key13": "1wtcrmfiCW3SR8oMAxBWUx2Va7jUy3ZGEfQyLQ5zFXz2EgxYf9GU6gHMJfkoBQj8o3qiiRqD6KjViQmCBZi6Ek3",
  "key14": "2AfwLTzHHDhe6RRDyoAQPcgF7KvBZGR5gUJ6NXnGd9ExTGHbqqVXrPiDJaYywx8erDvXQrNCcbeG3XxTBfQUtB2S",
  "key15": "5Gtzx7YhFxRNZy6AYxoLTWD5Kfbifj3SaGNEHKcWfZHQLoEucXfyNrRyj95qCNm468Bomn2SUAEvE3EmU3imjVYo",
  "key16": "2yXekHLrXg5TvffjrAdKhpA54gW7UUdQRgX2zXK5Kiq3u8c8X3EpJY8P9BDpZKLjAMjAPNDEox43EmErr1sTJiWE",
  "key17": "5C2HFvP5vaMEmtoCGn6ZVAvGy67aty5TntMwAwcmyAjnA3qn5QxT6Cy1ErQVGAkxv1z9NycFVPJEuZLLYna8ZNXC",
  "key18": "2c7Ukmtdv57MgoDibCHWbKhf42GchV1JBABKTh2xU5MYNc6ittnqfPswAeX3wUpNveSSPhs3bBj3nSBH239Lp8CD",
  "key19": "3WthZsRzhW5vyubsPW5HzqP1WHTjKpqk9ecCHYRPu34PFu53BZMh9TY7cQgfx25CNyNykKy5RA16WBvPJmD7FtTi",
  "key20": "2TGqiYSF71fpmDZWQp4fmVGgF6j94FEZmp6qLV9uJNZCuBzGrmofXTSpxpAA6aDAfQD95u9bYTSESsQQ4kScmcXv",
  "key21": "5kNPKEb2Sw3KHZTymr4pfiBdsZn1uwUouLeX3hnJ6EUpYA8nyNtRnVodmT1id8SsLFtQnoHLDARCQwVzSLHoPNXT",
  "key22": "3k8buUAJJLaaeq75UK2reG7cX1h5ojMPCsYveV4DHkZNtcUSomFjmpE1bXbhDhmCQN8MH9iGUcTL84S9fvFzwiDL",
  "key23": "2YP9Kgh1fg7rqkyB7JXz9oyVA8YsfCG2Zz4pcc9Dtkf7vUtgKtk8FjJZwiNJCWLYnaunYoKdzxAMhsyXyFekVEd7",
  "key24": "2uZ1qzRsBoXFU2ek32Luk9dxJuhLXbV4iweDPPwEnDpAQFpJv6uEKF6nfc22LxU1sYy5FxAJfV1SkfLzwLZ2bexi",
  "key25": "3GxTxQVbbaf8Qjz6m6gH3fDrJJET1dDvPxHgePWLcKpSD7WkxNZbzP87398sf9QR7h9KoGzxShjxznzGSA7p1y4E",
  "key26": "tywyiACiDcLerDMWUGDT1xCDEHyRhxCtxkFAu262yZ4S92H9DpC9TFF6gm5RGbovC19Rzzx1yqebP98pnL9Hdwm",
  "key27": "4ADMJNWYadCpYU7hwe8QzMkyJt5231eJK4iQG9SSGmRL5mezRNAK1NZL6zeHNZCAP6okmBmRFfR2w1jSg9YGtA4D",
  "key28": "26TBTLfLTrC4jfxBajopTKXYbqcTNEcKAtFsNQkJ5sHdafceXGYqGCtrot7Mh9kWAmLVRaPCW3rQ8V4eeP2NuWDh",
  "key29": "2vrqpP1JdS7pdXcNKvH5znMKAkNAG3Nnfyn4fKYzVyV9za2acJMF4rwVX9SzdLPdNtnUxywGPbVLaNBYvLMFi6CV",
  "key30": "2tkPnoDqShvSey1edSZUWtvDpYjvX2giLBCM2uiiGgFF2x1sMLhZHaRgzsprTnbq6XVJn7emWwW2i3iDYc1JSLJX"
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
