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
    "4yyzirGuofxPiF5zACuzgx3hVCkMyEW4JCBPqqpGBKjyCyHTv3iGCsToQ4DPAYqeYGQz6C8iSkCHunyX8RcCTy9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ByA1SxLGu6aQG26wzaU7ZyYqRPyxaAM3AhSPbBZDEHanfQjZSDzVmjg6quYKCExxGri4Q36sB5D8e89WYXsVM3g",
  "key1": "3G3V67krfP6kzxj3h9rPTCNEyifD46CB4w6UvwCDQN6EuUtk1jfJFPd2JpTYwaiGYqa8rDR9A99UBGgcNXHy7F77",
  "key2": "4BsEkmyByzHrohMnAmAtsibtvxrguHZu5KeA1jdc6JNk55ZCNgkxXFdzJxYa2uH6CLoWLEjZbRW8UnJyzCK19Vey",
  "key3": "59Lk9tLbfDaEcTZxCuGmmM2rrTATReoeSYsiiCSeanAAnGYJPWCbUwJAwDK65sGSjmqMvCsGSUcVMgmAYUnS89Uv",
  "key4": "22tGFen5GWX2hhPae595NfxZvvu5ipp73vc4Bbh4ogfa4V9icqfmdtznauydUGvNqESJ6Yt21N9NuFFcBxwWnmR2",
  "key5": "4vQ6gyeuixoZNTNZDWLcjdwrWG2ZFBdtASfTHw1VtiUCcratcSJQ1K5ti2XCQv7bwLhKDW4L1xFUP6U7w8quzXzc",
  "key6": "3u7yxubMeGqHTJ9tw1uRJruHk6kTdAupmqwHxaeQ1t12gENsAtD5CnbCsYFp6Ej5G5BbD67XwoMs8yUF8AV48qzb",
  "key7": "2CgWtoPbjeujBeCmF3VHSWbU6meqjV7hghy6cvLpfDK5GPoQub1g6Xg6SseJPtsJqVcCUapSTYy5kZEeG7Vc2Hdt",
  "key8": "2c5X4ZJo3NYZvSGUV49u3bwiXiQmQbD8qK4hzxifF7xY295kXWLUCCWFaNpNwVq3MYg381wcBTQCUEKcM8mvvsym",
  "key9": "ZBkNDHMzuR97kXnsUmDTbwPTym7XjY7TWEXFjQt5NZayZ7CJCw97khPgHY5F5V8sGgozkBPFDWebNwFkt4PGv1G",
  "key10": "3XAWspu49jGRtieqvj9FjUqzyQn1kCQcM7LTBdnJMGXnKmYaUevjUQZ4ujBmNJxbWpVEo2i5kBHy8b4pwsKFhXHY",
  "key11": "5eX46aZBSrD7hYoAZSSHA3uNLz5eFgUJKQ1169kbvkzyet7GXiW8v2MTrcXpxvEEcoy6GMFKmXPs6CDs4AWzmzs6",
  "key12": "3tgzMBm7cETeZbvXQjuj9vkTx4MfXyeGqnx4vXjxbg8jm8ScESgquDT1ebbBZxtZoYs2vA1yEHw9wDbArEpTVDhJ",
  "key13": "5dQKZciY5SzM11P3bNN7Hbm5ZnwvVPCGu8PhrE7jJuBefZ2PrKy9epMQm3XzyQTpGS2m2AL3s9NMovmWPzaKkFiY",
  "key14": "2tD36vCTtbjC2uNaf7ATFQNMAtQtZhFKUrTMRt64bxMP3sB8efBq3Q9YmH6g6Wo8g5tkfMTJCWxTGYiabzKPzuCF",
  "key15": "2MkgZrc7xEkSkaR68mCuK7rCYaPhsB7wB75yCv2cRXDzdoVWFNZKuUnJX2ozeotRskdfZJb3oTjLX1ZL5wKk72s6",
  "key16": "39wqgnHwn87MgbM4ZYwkDqEXNPc2rTZjW8E5A3CibF2qEL5cVJA7V1K6mRTsskWLTNYYjhdFnmE4aKo1k2GsT61H",
  "key17": "638xk9FWM2Ktaztd1UfThwQxdBLzHD5u6ogy6eVFrreYpFfE7GqsakGEdyeAYqNhK2cnsoxAZR52yGjou9YYfkPP",
  "key18": "uVkJgy1KSF9LU8B3MTmLE5B46mcUDhVN1gcWswo9hy1tBr81gizmzHLZoiZ5eLbF8NXiJc7PKGmfJVPf87QikDq",
  "key19": "54nZ6xA7ph2gTaXJzqSxHJnr2avyR9NGwW9ezy81BwmGSuZgWBaNT3rFCohpsHLP4e2kTrTTFafLa3PJayGxXMYC",
  "key20": "4hD1vGR3WSEBAWMAcVxWQiN1C8fgEQZeDEZFSsB7GjmZzHd5GkeaW8ikDY9BHrRJYByW3MqRptvWenMA94LKmSq8",
  "key21": "2VTAiWcEarEnCa9gZJWPdaZgGnKuJ9KyYXTvrbAqz8Z4Zwd9yxw74CBjLbDPocBcdGe6eeyP7deKnNSQudr7vbrt",
  "key22": "35ynvGpxQDH3GEf7sqTkQF3gmqpdumPBhYNuHSaf4XWBLUcgxWpdtSMJrGZYix8hfqgxsn4fLiuvbC6mUNDPxFCy",
  "key23": "2hctrvmPzRDjzrZZimd9sAyni7upwvppNRqnws1tA8ehj4SwBSioqGT4TrB9An78t5K3U2w2CPkNqqKXGMsc2MCW",
  "key24": "5SRpwP13zrEpwxgktTkQotJycusiWUbMc3ST4FRuMtVhADN986PD2z4VfJpUzPHerXUKEB3vNT9UAZn6Bub3sb8W",
  "key25": "4CKY2LpQ5dMbq5M5WPCcQTwYmkvf2GnpeYaoxcDHR7XTusgcQgmXMFZwZ74jRscYeUi6tEdAEh2HuqZfD7GPtcoK",
  "key26": "2rcjByz1oFdrZKA8QWjLnKLGdBASHjYs3JPJYLCNXuZ7Hvfhs8oHaCkNGcCCiPdNdd6kFaQUTrnjvs21ZN9NksqE",
  "key27": "4ce3Cqz3AbMZuhTkxASMug9HfDKVZJnMrKa1XTE6PDpXdbjD4UaFLoqVZQrzPmbFRFtP3F4JPJiiKuPPsEGPsW9y",
  "key28": "4qGkzhvZYLjQG53kPjYsXXigMSj7PLkM8LiQi3QVWpUJcAeoYpzdk3PJEeBKptdskLJPocrSJZxBkknsZoJvL4Pe"
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
