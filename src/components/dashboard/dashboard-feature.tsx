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
    "44GATHQ5J8A9ZuBLWgNxx7Rwr93LdWLTvWA2zjhdNJwF4dZj9TMLs8nN9FX9rhbEzedAuZ1XibPi3NNx6TkEr4q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VTbHyZzrke2V1KFWT7WwKLDJQFpTGfvi1ThwXv5t49WZNJy5Da1Cnk9VTd3bAMf4Azi7NG46mLjQcr3VkbN7hrn",
  "key1": "VX7AXAdDezjFkDiVmj6hs6BLWQU4kcedaFzseNbtybQcxQefdHeHgn18nYc3fqov8tZQANn4eQhCVdLozrNuDbs",
  "key2": "4XDjXtEbX2EAZ9CN1CPyt2ZgsmUCTZhkNoz5zjMQA5MuSYUktufi2kLHqH6dGBRF3WYkMgYdJXmABPVS4bxsxaGJ",
  "key3": "5qGmvh1xYEFoJACMuAVjuaj78FFNaXXhcveRQhSRsL3n5MVVca3DnXvR5uBuuvq8JBo59Hc4VsNJKCokhcMi3eMF",
  "key4": "DCAs2p3AxUFYQgr6ezXqHuHYGzyEW7pSZQA44pCfDUzat2ZT7QdXcMadcSggonXNEubawAiKHK9WxiSuyfCE2Qm",
  "key5": "27LFLx88kYvpHTFHPLrwWk96Zhqs9tUchX8Z4keMHq9TnGqcgyme2haxniLmY6gNsTsUJtA6LGo5TD5wPGCjALKB",
  "key6": "2nggWEV3eUEBffXcvJPDxjPkM3xs5qarjjwpcDHDZ5PwPaN2w52XGD56aueKHTnUJSSSYkjq7XBtejVr2tzHd3eG",
  "key7": "31CRWEAhxU62gX7MMQkYKWEAsCkEhuP6Ye5zZmgPyB4x3fVCu7cCfYZBoX14PcwjSsA85Crfm3UYcxUka1tSwYiF",
  "key8": "3mWiBSNZ9tC7s5yZYQCGtSbqjUTT1vze5AnK5Mm2mP69PZbxfNfkVy9W15oWD9CmygijZ6mfN5qGfwhYNVMpCGV1",
  "key9": "2u7yGUqsP3SiTp1746swgSZ4FSGd8E4nAM2aYrMQCGdYissMb5m8UrKdMWsPdRX3ebDf1qnMJcWxMSEd4ia36VDo",
  "key10": "3xreyNTZKHb5u9sYFLSdHwcu37TXb9wxRT8qvApqWKY1CUaEy4z6Ryow3c9X4HW1YXeNpJv3GLtUdEvnixjztpRn",
  "key11": "2bZy45XKbUuJifiMj3gPgGh1PPLddpFJqJ8kv8SqLPbjiv8FAJfHJ96jCzzemRBFH5ir5oRMVUx9ZMhmwkeoyxgP",
  "key12": "5DnmpAQj9yJTbAHALEhyfy5yrYQpTRQgewB9r7hfYw615dK2Jz8Zh11qCMB2NShD9gnh73ZtwyDxaL6UKcF1wm5v",
  "key13": "4PVcuXitxxSkKz4ajHXRbc2LWgrcURV4u5Roh93XSNDF6yzrJN71ToXgcZiVKjbGLsWoQynWu2T71hP3i4we8doD",
  "key14": "2Ze77Ei6Vaazrb5wvD9aGLDZRqLHcFmB74SnVWSLeK1FHgmEXdXJnaktEoaWk11eXUjax85jnxhtBusQTsJcVwjw",
  "key15": "2wHeUL6jPdSgL9geDzsLmakD8tck2esyrD1SvWpYyCg67y1got52aEs5opwS4xS1rRpSru27cYKSUfVcRF2t81vA",
  "key16": "4FNMCDiz8yofM31z2pybivQUKPkQqQitivEdup4hd9hECgrNCRFK5bbcQfzPyAFiqD55BPkm7d4KUAK8VGBezVFJ",
  "key17": "2rWbupmbqZ8Xhho8QyUyciSdQkw6VYND5At9iZYZq5wpAJyhzj2rjpZCcqvsby2JfpNzBR953pm9ZgZCz7gCwob5",
  "key18": "4BC2xjzknLC2MS7J2Zphx3CE5MNpqoVwc9BrVHwsYZKJSiuDeXJvVtXCWsrFBUKp6jBPQjwzNiZbx7rEaKwdZk5C",
  "key19": "5PrFxMx7B2g2kKEUdX4vojACvg4Fs1Jp2Tat4WfAieeMXqyo3b49FQbXfVoVhQ9Lc8nsHWvZS3VERAw6j2RLAzHQ",
  "key20": "2GZvvhTaGiqrdvitfyiLTNwtPRxARypQXkAAzJW3aK1pnKSznhkvwDCm2b7DuY86HQbaehCUBktxY7pn5ocA9dvr",
  "key21": "5SVSpztCc7RpXhUQUzYyd9xeJWBYZsdcxSrNqgE9ZbKjr1nvSPoMCCsZMZTqFNXhzByhAvUQwQSqrJbw1FMSiria",
  "key22": "2kFmzjcxNezgJSn93inPPMGTo2zxZns1hVAY2Dn5TfKBkFcFR9JtHC2U8xpYRm3FK6Bi9Y5p9MpfM1eyRnbiBK3t",
  "key23": "Q3Cpj52TfjK6waNbcywLNbLmYPj3QqkdKa4dTV7FzNC7XqHGKBb6CksirLYNxPZjjGmwiTj6CV7XfCdhxBuDtxi",
  "key24": "3HEpe8Kz4ZmGQxrLsJyjyvVfWBrzUbmYvVx5aNtvAYcn3CAMc5UTKS63SDnWUuxnVggU1qYiKkh14khe7eLYyycy",
  "key25": "2kLj1vdMvty9d5vFxCy1Pm7zbZ5YsahA8HgkSf9cUScV1UXFv92BaX6abf1vZk29qbiBwTuPznq5qJgbvUdixKJs",
  "key26": "623qUF98UFCjsgoagTaqY8EDrZ1s7yqZ1D6321UVz43RELCMq8x4pE37WBv4JsKzKig6PUgEiMzheoFFjr2Mam9o",
  "key27": "5utve5yMCmoZRc7B6pVMo2gH9MYrZW8UybJtyBByXrXNSjN1f2jXdosn4Wzhu6ZNbG3hmoRct4yAte19KcYJnvmx",
  "key28": "2eXJ1etXJ37ZJgr8Shq9njA2Hk5nnddcEPEniXsJ3hui5jN2Anu8whRA5PoQN32qFe4434cXhiJ6NA4DCfPhTQ21",
  "key29": "4fQEsDrwRSHEgBREvTZHDvGC99MBbyNaT6sMguSLEzuoo26wZGFn9Qr3fxtNBC8D5r7bghGTUazmhxz36LppHA4z",
  "key30": "3kNyC64x63XpJvLZcVn3VzLnyuu2wgCNZke7rThWhp6VDfqqPpFwPc3rg1UsDZcUNgVV9QDvjfS7y7gHBqCxWzRD",
  "key31": "5b9GuypXThwSKkgLt8Lr9BhLes49D1NZckZAL3mAe2XtnqVhCDes4HjxX1nJGSanBjDE3WYLkoJTGkqu41swAWEV",
  "key32": "5uwqZ8ve2zi7umQv7caivPKeRhiSXX2xgTfG7Qqipr38MtNHLunuwtPJTmkwMkUG1EAhWfB6vaPkvM77vv6A25FC",
  "key33": "971x8wsFwuStaNUShpxgPxUpMvxSy1pp5XrXVVKjfddRgDBfcyttPnwwWhEnjA7bgWtWf7xpj7eSjCbK3RQdxm3",
  "key34": "2bM218X7FwsVPUNKDktsGUxRbSmKqAUj2yhwF8iidJB1JfxCUj7EFKpB5bDJnEUX1MCzHkYTRZnfKspyWkL1jdpF",
  "key35": "sSB8ULLPhY1caijBXtW9kMp3M8So8XWHJZrzFmEzJwrVEgNMhLFAAtXUaBDAXpJN1XLfFLdTgZyk5iVQJSxQyby"
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
