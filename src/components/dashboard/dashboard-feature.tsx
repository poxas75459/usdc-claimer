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
    "3LHkJdRpJhud9Pxm9Kjhi2KjwboEZDgf9wPQ9v7CDrYCW5sMykkLSQPpajRY7PRg7S6xrFCVntZAGdrTSBU3Q4e8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JF5kWhdZizwqboyYhBDsBQNoCq4GkDWfgcPUEg6TxBzzMV8sQizga8UebVMg3Nsv4Ymm88ubbcjhdxb6G92eJi2",
  "key1": "4h5NUTwdix92iuuSsijQ8cTyXVFSkTsC3b7w191E6tNRTnrUJvdcLxdvUjUF2QhRZf8yknkJVjSUwxN4J4M5sz6T",
  "key2": "5mcAoNYYyaTX7h2XyUArHg3ZfrUZ4KJ4wBev6k7zsNtVUEUgpFn6xVXtFdfVS46vLuDzjL7Mhw4FqyVRvuTmCj2B",
  "key3": "3khnJ7Hv9hGUsXwUk5si5t4mC39FmVhGhMP1CNxq8JP5Rb9eTDrb4cgLY3UQ2xsevUCySSyzPH8y1KUYmhvy9Aw6",
  "key4": "5PxXxNQ99rtYtEsHMJCRYRJ7hAp1HaRuj7iMT6MXPwoa57BXDyFFXrKFYPktU2exE4xAK75VeFbiLqx5aEcFUzMo",
  "key5": "55urTuPhdyVpg6biXgbB3KTk31VRQJvGoM1hyiMCw3mbcUyQU9fd5Yu6gRh3PWu4ULMAMx3h93v7wj7gyPbZLbFA",
  "key6": "5MAeHXR9rRBYwDt8VTcmfZ8pLKWRUKxe2oFb7RgVS8aWbn39wyHdJpJm9SyhFKrvRy1RT6a3ToBhYFTg968hMjYS",
  "key7": "4rNdWHPTnYUugnsmM6ZUiyJnbGgAzgR4E6cJER539Pxm8uDwsGduGKrtuULjj3FUvpzjB3M1GGs7m3KAfkijpoMV",
  "key8": "2pdTTikidica3iBg1CqxaRNYcSysCcXfShW1DCsS6H81qgdtRFLcu6WnMufG7KB1X6ALB5eGGaJb5WULMG3VPw2z",
  "key9": "2s24KJQdyUbYLReKRmqK6wG8E1a8CQLRhx47T5zfBkZDYSQQcCgB25iQ4DBvf9ffthXQATaGUX9ehQ8pLWN5AEGq",
  "key10": "3JK3vFRqByYqKNCepqThCTKM4KUxxVc1naHsAz5xHUArcqJgyeytNH9Ah9urMUjsynbVgiQgLb9fb3dR7CeMTmzn",
  "key11": "4CiZkUDge9WGRJbjMbc1FWPHiXjxTP5Gdaz3FjEsQEiop6nU5jDAAq5cML25CuuiQDRdbs6A1oiU9xmWJPr9SF4T",
  "key12": "5rhCgT817JWdCR84DWBU1HLzrZUQjZoubitVfegtdXGqkGLibz58R7RLtY8jqNJZaMdb7fwMWCHcBt72zHCaBTCq",
  "key13": "AaCdVLGpY3P8riDTE45gXZW1XNdJ31Sde71ZNksRjwTDvn7UkngfGP6gKpYgXiQGB4ppa57v9LbrubbHtmheXmB",
  "key14": "2K4GQmY7GhaAKvF5QvrjXPqRbgTuartrsKmXJExYE9pFmp3BvWVCvu8PDvr2jvuYihPj9YBia3MMC6dgGXnqmoDg",
  "key15": "UuxZ3pmZb5QtMohQbcar8PbV6LXBtsb8w45Qo28gAz48Lv3MysBHXiMfJYQJ836zA2oSz2oqDRAH5nxDo1CKjXe",
  "key16": "47AgQ8oZfH8iYuHSvHtqzRYnkgYdKegVoVq9oZqaMBDf1z7iBdwbRKWf9st5pCoZNVDPSHuzmY7wniq9p27VmYDa",
  "key17": "4xKPL7aXTbKXMA1imN5XoKWLxQdDaKZWYe5ZxoXMbSTEZLpTVMHFJNUnGJLKWrfCaEsZFiySN8HbPuNP7NWtoUL2",
  "key18": "3rogv85wigpuxNDBzdfcMpMFMyjujY8fsYwD7sY7E9tay9PuCbm7RgDoAehK1RoUz3vdJCEEnKftup1oLphfFUqj",
  "key19": "4Jk3qad7qh4x7Z9hyZnJuTJFKYPXBBud3piZqUQBNQnDxKaz7YXa3Le3WTAH8RM6bdD4fWtAtrb8PZhygKqkLopo",
  "key20": "4dTmeeYTSHjARbzk4VkSiHWspgweuptdeXBMV3TNxi3DXhrG5muVrfhgZtHKXjXykoUd2rV7PSjfZ742HWkxPbfj",
  "key21": "4Hkq31XENqtPTz9azwGsBRK7ExnbMywVQtTkjkiNCHWXTx8hcUNNruoYNv2tUTzhLbMztvFoMQs9niAzvhurzfcA",
  "key22": "2VSKrFNfhbiCbdWy3GDh226Y3sJQVf454Fkv6FTEPYLyxN1WrLLS2C3ksuCgF7XaYC5ot7wbc4tZKL8zrXtRBuL",
  "key23": "38oTfFFsbto4NoS3cpwppHFJfX9kh1TTahe2S7QbU7e7S3ytCeBMoKM8pFqf6PfSn8ydV6KV6g9pJAdy23wJNB6D",
  "key24": "3zJRq1TK7BYUriWv5aaRDAyPekW17mp7UH9eCZHxrSay1QhddfrTLQou2nH2wRHDqbbSnzsmpvaStC1QJ1RFmVAu",
  "key25": "3cfDdknXMjA5PqE1cHt3xZQnkfeuyn2vguTYUZLtKbdBGT11XJFhRBauS1SK9QKvKjrw82YY6LHXfETMuP47r1nG",
  "key26": "58aG5W5oAeeHEdwqVf3Zh3peHonBhaBUScJiGsRTQtLqv65uy2wTCZM64dh2vLDtWAzQwRZnhG4Bvwv5eCz9DW5Z",
  "key27": "2QQJShHPo8qMXuauCzuLL8V6TKCAz2HiHVszBGE5H6X9rQHtgJLuMEVGrBzkypdYehfvU8PZDom1nMBqiSPWa6tQ",
  "key28": "21peR1asEB2uMjP3J9F656Xsi8vdBXMk36fisr3nVaDYUhLSnvGiinvi5EADEUvsPEuHfwAYqzsTwdi2bLCE8pot",
  "key29": "5zKQ61jnXBhKzYrvyGMnqFHfPsHXxtCmFT21tFsRniejuDrk4kaTfN8Gg3hcTTCRmZoFXASQAVcakiinz4FRxr1w",
  "key30": "2G4Kqir3Rt8Qqoy2cAsBpfx6uCkx3ACU5BKeDCEsjcriDTuqhfX1qsiLyKDZnxoEn9JhE1DURdAMCxXQGqwjxtv2",
  "key31": "2jADwEi64qw1z7MqYpTLVA6UnKoEznesaT2ABJswcVrQbxWdFHseSnbcKsYUqCMBGukZP6nshWfUqvmfVvtCWV8f",
  "key32": "r26126WNwfhShyT3HS4J7YkH9yUTgdvzwdHpKxTLqXmNDW5KdwAGJQqFULDsh4KpRFA2nKxHnxgcTgkMWd5tWEZ",
  "key33": "668wdxFXn6oyuHWuwaocgWzQyzSFi4wrk5YJJQB7Uir1K8mi9Wp4JFqBTa4edyhuQQWwpj76ASqrrqxkmi2yipVW",
  "key34": "4TN4aFH8g3935D9fxMeBvaxXaaryfLQE8HMDAXKLLuxZJzPYZUuDukBm36hT4VvC8NCZ6aqGVJ4Rgf3sdGP7ef1E",
  "key35": "vj3xisLymsdGcRnGLt6Ss17WapkUPDVFpSXLwxDUq2WanAJYMKrMB3xFYHvrJPZWNGjhYXik8zbS552aVvRM1px",
  "key36": "4TWz84j7H9nF4nJFrmDpgjF2Ge5yVUamiGGBYBQgExFtZoF5JGD92KLBB9EoxdLomT1k4ihxsfUwdADjqUC7D5zt",
  "key37": "PYczEBqc4sxjXrRghZLv35fWoy1UEw6ZegWjJz7oy3kLqKjo2cNe5Y2DUUqCheBSwGSbSigypnp6pVADu45jh1U",
  "key38": "4uqvPiQHin1UzckGfLKGCxLGvs4LemG2tN2NpcAuz1wd653JfXi2VNqNrNXAgGtWhE6ikPSxN4brqumAL7zcwSZp",
  "key39": "58GuwUfyjoX934jKpZwLS7voYf4hy45NhqXspZ6vhUbq1UKjejRL38NBLyKoEwy5co8Mx6xLzgYZYESRvMC7Ku7n",
  "key40": "e6sfnM7x1MyV5jpVKFrwAwS8s6gTZ95wzuAdYYPugLoaV7XbXX98HSaBWi2YdpFqS9QYpxjoXXbMpJpFVThsgWL",
  "key41": "1tSaw3v6yb6drSoDwCXendVb9y7P3wtXJ5q2aLfxzKRnvdeM214YVrv8HuCXKrvHbjRTKUmeTjZBYRk7NsMm8du",
  "key42": "2VxS2cRdJpihkuUsmLBoGhXQqUWxoeD3aiaLpVXeMkYup5CXR6WCpWdtEJmwQJH4QdS1afxgWtgYYketTQptK6hd",
  "key43": "4oH5GAgsXUNEVKqB9Qd9sqnrD8wSGmSU7nxTK1QojkNypg7NMKVAhGzkdKHMFVLFXTrqYKUybFM6nZARPbQgWeCL",
  "key44": "vmMeHiepFUvNpQixP4W4dnPpfbsCDMSde8toTQD3Bn5pCkLxqxU8kghzZhP7EfSoqLET2d7Nu2ToS44syfjqfNK"
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
