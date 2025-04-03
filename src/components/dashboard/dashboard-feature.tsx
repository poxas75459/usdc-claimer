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
    "xU7d8XZYjFCHA4yYT664SbUwXbgA5wB9rmSmaGpTdfCLbjThM692RnrxcRNijeiTsWnPRK7FxGxBT6FYhiK9Aor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LbashCM9PFzxzTLNtD99gXPumPfKDbBkrKpHC4GUxa8dqWztvBhF3cFRY8oZtaHZUnNHbEqgrWPDRocHC4qcXcq",
  "key1": "3bH5Xu2MQsWbkniUudmXMggRxPYfvF41RW3QqTJtDporxj77egpKtTPtHGJgQXrHnk5NDeYwBHaeXJvMKWAxJdHx",
  "key2": "3VhDqfRTUr1pn87t21qEHRw7NvniNs1EV9Sf5jUXe41V41VWrgSb747nJvt1gGXF5LzAgXvwtPCBQsyueSL36YG3",
  "key3": "5NWiMo7Kic4n4xRcVfT75GuQJVZ7yi7UpK4Jg4gUEexBnbQm5Egw2tUKWQ2qvG2FXLoyZwVrVDjWNsH4VEVG4ECV",
  "key4": "5psNkf3mWqmayAUdq76Hc4j8nb4ZVHCQ3pQvkeCmJwjyYi8iNNkj3g9CjdkzJ6TqrdySXoBKQp3KNkfE4e67orU7",
  "key5": "247azMCqfxi32So9QaMoNbAnALjMspemb2DdFRrVUC1ea5ic5WoGqXfAKC1M6GLtPfHCvg75Ud3yGFAX3PPJqb3P",
  "key6": "4J6HJXxcDfDihXRwVHL5RmVyr61eijbxPRWR7dKsKGV5Jh8BrtcQby6VQGcQ4gQYatbLV7Z6uytPMQ1jKACsPdZX",
  "key7": "LuRFTkjNnphR99SXYJDXeQ1Qk7dikgCVaqmYqDYBsg6VrZnDFU1e5M9KsuTqeCc1G7wuJvLZQzxT1jtFJ4EXP2Z",
  "key8": "3KqzEm2PPHzKfRgJWXAUi9XNc1c6ynYaXXJzGVxRDn559A7tSnMMCaASMhdfW12TGC84HH5HGEQcUBArUAt9jZHv",
  "key9": "5oYq3h9KM7xXxNhrSBKpo2nHPrS9TwiTAC7FPLJH18Mym5NFudngjVno4Xhx9VLMAyjnUtMd7q8KhjJPe7jNFXNf",
  "key10": "5arSf13PZrMCAi8aKmzSoQpUWNWAoKSwBkQQwSEAVfJSgPb6LaAiA7byCLEnag3C1uDn6jh3rx425cR6eY76QPmL",
  "key11": "3K74KWhcmBtr6X7xWEgpFsSNJw4rNwfnzogsweiYCCJsW1N8VDu7vDEWkoSUicwXbGt9YqeK6yahs9H6HwP2x12T",
  "key12": "3o6DGuYQ2Cq8jMXME9rKNY1LgjRRhxDjur42HHCgSsdnbgxsNDdwpNf1yd8TdeZKkuGGV6LJrubf5TrxzU5Me3Rj",
  "key13": "b5wAUeFtuNJ18HXjaQTidokVCjDUbkcRbvQ3NMZCtB5NzJyjUtmKLgCgaGWYhAjt7RKnvomjqJZX6Chpz7izNGP",
  "key14": "26iapX4L9oRjz54BKAadS6abaor7xnBuMMtyUA1qHNNbf6xR6NfRTPYi9VBceXvFJjnFwAHW9DT29LCciJnj3xV7",
  "key15": "HRm3Yn8JkpbfHrcGk6bqAjF3tQkybNZR9qEZL76yo3Dqd4e69c3xBnTPfsDxmucVnArSenMmvMb3djyzKzZ12Lc",
  "key16": "dCMjnz8QcX9XNns5bhid9d31xYfXGQVwGFtssaNvgRUguW1E7c774EkxM4qUbESg2VWWCbr8C2k38zPEsN1qGKY",
  "key17": "5R6NuB7ApJ3T7FzRa3QsjeiEzEbdZxem7yqhmNugkDhhZRxy13EYQA2d6ajLKfZiaBxuFqQkxL2dwSYoR72d16eD",
  "key18": "uZ9swjnHPjT4VmB11T9qWzHiYc8u9C6YJ3rhjJHgnFbJUwU6UikU1N8R7cfYbK4vR8x1k3fgtvt7DLwtZXQb8Kb",
  "key19": "4f2Y9QmSX8sHYguXo17mMuynQ8oXXjbva7HcPaqSHmo7Tg1poKQ28nvhWvLLXxj2brFZmw8yWNV9qosZCvY1LHod",
  "key20": "3mtLDQZiBVSJjFJJJUDbu7G8QYL1YRH4anDBrxncXJbeQzMKfyc9VTFjfzKwSTef1ksatEKm73Yw4BEHLBeuo9Ny",
  "key21": "42KQcBTFTvuzW8oMMyqLKnDuPVQgBNtWXiCmyfTzmAr7U1x3v1xnzocYNWAvoc8zVCxxjRntKHj8ypWYXyZxYQAC",
  "key22": "VWhFi7QYd1wnhhVWh1YtEFdiambpTjKKw6LhtuGzYManjiFbBRrEwsmXhy6hGxXitZmSVWM1XjTokyKkhaVDhNm",
  "key23": "64vzAfCTG7RJFCjrE7yvgp1JuH4s4hm2KYtBTgvXjeyw3aJYuCkWUJZXVHggtnbTAiqdQuUqGHvGebFvxhe9WYgb",
  "key24": "56ZnV6yp4FwVXLKfwFwbLWhe6CFhecNzJKMQVXUymUFe8k9FTkdzEXRDSqRcwNrNY8Z3MMoMeD1LE19go57LTpqs",
  "key25": "38KbpvgZmjQLZPtjsCY3d7aE8QfHzW8WLUdSniZowqphDy261gL533CgEYqwxbXSGpdydHNBoqv2ojFL7fSp48JE",
  "key26": "D6dZDDSiXohyjWfDjtkx2jeCKMZnA9SUKjk95x1cB1qYXsctnaKcFchXNTWnZ7iuMRs6L7enJxDFWUGTzTcY8hi",
  "key27": "31MwX6LZ6gjs9gUcyrkFmJcXnL2JoXRTGfQ5ieniAZ3gD83DrH4NkRfepL8XD7bo9eG7Ttc13uDBPWzPEbJH8mka",
  "key28": "bFTMYjK6NoEW82WmzF6agLcGE7hbCNBiyuDkKv56KDXF75aTRyZVJEUA7ENVHWbjyX8sNBi3LiroHmSUQAwrzbT",
  "key29": "hJckLA4gnb4neYb5j1pYqtiZBcH14y1D2jMS3c1hyBYpWvQFF8EdZX6MeuY2eYmzhiGVoJkc9D1c89z8ioJaktT",
  "key30": "39ffaYiAzyZQqK84VCCYNBgNGRTHi85jyN5pb1GUpaEkJ35xRc7tibnsxe6fQD62gJB95VQgAjUjDQQF6xHhCV5m",
  "key31": "5qSDtw677n4x6xN1VgyghgY49Yvku431pbeSJJDjZ1FyrTo1QRwmBLH3SLTyY3A8TFrokCePMH6R1bFDbz7bxTuB",
  "key32": "5nQX4wchnVuML3PsG2V5CrKtjLfYj3Ky2GyT344ZHr8cPet7R3cji7tNgW3CJ7cuCgTUVxG2cTSvNcxop3U6zXdi",
  "key33": "5onEHBU8Uc19JRwAdqyKNWmWdKfzvehYzXYiKMkcWJFDEmryPhe6rhXaQuxqkcFJfbcLHVVAhL7wuyf1rb2tBQM1",
  "key34": "5JRnEi79EJEHA5PdxMPNMmgRkPKLC1FDtbXCudwTxXiX6BGeok4wKbFYuiz1CMPMTgQcFkKF8ojK13BVfa6E77g6",
  "key35": "6tDsW27DsJBC39RTTfdp9gG9YZYaMPwjYhPqcDqAbhmr8UHGouVAS1LCzMZGLchhfX6mCN34HM3LU7Jwni14KDz",
  "key36": "4xqXgyEb9xJJm6bhBLVQph8Uhby6kSvLyWhMkTgCr5WbY5AJfrFm7ARDzsS3whXZoBLh85AVnsx45poeNqtjpWHb",
  "key37": "4w2mwsxd88a7ggcEqG46Nko4sGhVkcGf3mKp1T3QM4JTTVP1Mgd6aSNGRrmExDN4CSmLKPackVoyY763X3trUEGL",
  "key38": "4YeEYq2fBERqGiVuVYZrz7HgwRbuyoDQan9tZiWm2Mvr8QMeBkgAwS9fKZhNySoD2SumBMse17atsMbkv499FB7v",
  "key39": "5fYtdt5E22pu65m5oiRzJ95nwbA6f1qq9FwbUvkfLbeo4H7UuRbdTZNQ77YMKVrmY545cWojMhVymzERkVebJwHM",
  "key40": "3g2XacbYgpyvXYFzQmSfWzkN8CVw1yf33cnksGD9s4L3D6oLNQeew4FUd6QnYGML4oddAhoru6uZuUuAmBAMHKCJ"
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
