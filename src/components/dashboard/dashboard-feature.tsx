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
    "4qgCto4rKa7KwkPkZQbQTGC8Hi8rXGswtzNooFX8fpwbTqQrauijqY6FNdzeeNaG8GkKMjkwTu5dzME6M6gGk64S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hrBQUXmVuiHqkiDLe2WF6Vug17HjkBErdWgCssYqCDe7D6h4Wz431fXR3uQp4GuFALrxSTatmo9b4sin32ep6dr",
  "key1": "3vWH3BRhWuUMGggbzH1U1AvZVx4XrFusB4aSMz7HUJ8zTTkz8jCHVDtj6VwEDd9eXNKENni9PgbmFwdQP35oNyn3",
  "key2": "7GyxnGCz5ifWqr8GrcCP4dWGhjmFz2ZRMuPWsZ2u3FHJHgQuSYKmqmpEHwUyaQNSdV4Cna6mHeT8E441w5QKNBY",
  "key3": "2Z1z5wzBjTmxGQu6RBbUMN9c3NJH8R5KdyE1C2u3jop3DaheQGpeQ4cAMEBoD8GGEkGByyZkFHKkGX8vG2tAu3bk",
  "key4": "42xg8tAn1yCSbwjoyi1N5D9YoLFwmH7SrKc6BMqWiUXz1LrE5YDXMfgGyUPJAkgdftMqQANKtU59u7Dfp4au4y3G",
  "key5": "3AMZL4Mnc55Ugs7A3HR6imuEw1sZU4gnMDnofrwis6NKhKUvY31sXMRKj4buwMsPpXbvr6N8X5zoWQtSA9eKFzNS",
  "key6": "jjd7PmZigw5E4XYVJMPPvfpgYMHuHge9SgmeXHxFZWvFZPTTdgWwmXjan4nknbi26vfQ3D6ozP87QBmNrsvAhs2",
  "key7": "4iTcWpWF8EZHtfx1zpgoAt98bh6RNtAj4iybTGRxbNDC9FxhHgK1Uvv2AGoPGdNs8rbz7cFnq2eJK1PCGmpin6fU",
  "key8": "4wkATa91Euf4xJyHVTrWktYXVW6yzt8wZX75xhibpRve3aQwNKZxpFPvNGZjLC64fmLRM8AByVKdM6QrCeMGDHRu",
  "key9": "2CgF2oQn288HejfC4HMRaeTYT5aYGMsuUL2U5ZtKaCPBSebsxs6JWQgESpEuMCXgneJhjrxuciobyAPPCHVNLH9b",
  "key10": "5RqPZhqQH9msu3FuYqZTAQXFbYQw2fqudLVdVwPyyJJdyYGzDq5SR6bz6LN22gwWavNNxeuuBK1fjC7GRpwfRqoN",
  "key11": "5rJhfuGjmoU5u7fcjQmuk29N6GNt4RotqYwr7Rhi43snFDnnA1CLLDYpmmYhASrHVMa9fX7bggtYK6LnNUPEYqT",
  "key12": "2wnjqeWnW8x4NkUBF7W7mSsAHsHptXaGDLPPcJU8iCyLqp1SKhu6zaCgb5wsRZmaEfcXgrFqp42tq2vbMcdoX79p",
  "key13": "36FCejDsDbcjpZdP42QkQJmZxKCeevPgB52W3q37wcZScy9YGAEW2dLgm5oepUtPvtyVYo2TB9NGhcB2LDj3BNpy",
  "key14": "2ULhCorK394c54seaP3smEDieMMKUCZtqchG9CMmZbJpJEUFmcJ4fqSZe2CjcQ8XSfUZjPf7ZAPAgHWESedBmbhn",
  "key15": "5fRJdpVHdFjrzdbyNq3Af1fcRkSLG3EVLaHceUKSkRhd9ggFBjX7jJt6EWh9pGxYhwRtqTMUVDgGVcjVaxxg8X9X",
  "key16": "Bp1DPj4rGkbjiTRNXMDEXv2tT6SN9WeUvSgacziiZuoS3PmDwKqMRoNkCoE683iVzm4WvKdMwcUnYcAe6HPoug6",
  "key17": "3txTFwjLtuQzsmziW35CvQTvH8UqC44xvGYn6tC4gevYAaet8Z6oQw81x3JJbCV1pCztmPgNiFHpVatBEJUksEgX",
  "key18": "4KKUYZTQtCkUvteBe9BV6cdwDzQJdpWAvLMsASRirizDutGFBRAJHKBoa3SQbcjofVGMVynMvBpL8HYSVmfzEhi8",
  "key19": "zrGM6Y6X9KhpBEwPYx3v6Vnc2MS6TZsqWMwcBLVTyWyie2pMN582PZsoK86VQpbgL3ziYTw2BEjjp5x7b1B9Znm",
  "key20": "3FRBRTnpFiFwSEWNnyx8gjpjryzs7yDNzNpYsL3isHFmXGzk5UG8iDD4etZoG7UeXNc5jcWMjGoZRF16RfQczR1M",
  "key21": "47VKq1Zej5HUJX3qmon6gjVKzm1XMZc4RC68FUqVP5GAfQtP8JsASVq7fQyBbGM9uK2WNmmaek7PnyxzhkEkajam",
  "key22": "w72MmBJoFKqjtqWXqFSMRbagANwRqehGSTMA5qhetQTbAf1YcDV562Pf8enM27A2rWudGVVAVLHFJDZBDFLoehs",
  "key23": "PnusX72SywwyoUwDSu6ehGcJwHmu9o4tfeZzkzskauHJYfFjjGcJqPF1JxRL419umca6xcVbVjKCn8B8MeZ7v5e",
  "key24": "4YRy4dNZ1p2dy89bgzNiKSaZkS6yKEzgZLTxN8XGZGaKENTZHPJz8eyjrFL72mBVVxJFCwjQQoFNqQFHE9tNycaj",
  "key25": "2sP55RBupUdY8puYFNrrS8Ufx2vVrH2n3ejsyVpFed7qB1BSxRrS61DFq9uAZsNnGETFZZDPp3jUNxkAmpGbpELg",
  "key26": "PEmyPH3yMraMG3nKYASXPqZ2wgksmWfdbQRzfgLDQEpkCbHaoFAwR1jJDy6kqyh83FVQnQY77ZYPeNuDQdbHC8N",
  "key27": "3EvCQ7w9g3RgPDovk32YK842EhLw2q822EDUj5u5itmvmhPFEp3K51DCfc58F67VxS6EMgt9Gyi1z9LNWZrZ1uhe",
  "key28": "2fBFWXWmwhTxNETmQYmqBGQfp3wKVxuMJv72bH5gD8d4Qi24wXhEKHQqvRwdUztD4omTd1Xv13jmJ41PF1J4KwAE",
  "key29": "23eqdehMjijygCJKZWSjZRQbhKeMzDEedCh2GM8mcwGZxeozVf2jc7T6fnddV489UEQNng67sGdW6Gx13k3dT6Mt",
  "key30": "5SLK1sZ2yVe2ZUnLStqnxu529Kmad9M8QZfj43BK3j547Mc4bC1D9aAK4FLot1zeK7pP2hs7biBNpJVWQDkMkyX3",
  "key31": "2bjBZDstSXWDM51FWFVUS39HqjQmrB6y37S9z3wUBhb7SSshM5quLBxAXQw7WCLj1rguvJLuBUpKvzgEArsMHx9d",
  "key32": "3UPwTLBqCL7uGCFU5ojbHQUymR8zvYuj8P7P8VCasFetK4KjfaqRiraK5b9FfveMaPJ6nnHwRPj1yAoytW2yEgxY",
  "key33": "32xHYGfSqtwULiHEzgQ2RC4CdB9k1Hm9Ra8yVtVMf1au9WqpuwR2PAqoJ4KY7brDBhTwMe7yB1y9KapNPC5sbcmh",
  "key34": "2s4pwGH2hqoAyhwPVtTqsfmSCQ3m32y1vjtY4zdMCVFTeJ4ooJkpzA3rRXfBUrUi2xMXW5LJXEUPeHWnzFofShCD",
  "key35": "5VNieXD5gr9MhQa5mn8H3DhzVkEZd44rQE6eGQKyKu5osVYFshGcf7mmtnBtyYsAg2u1aEkCbXQHgQUehx7m7vNW",
  "key36": "4xjj3nedpZTRtaxjhu2Fft98sjAaHTiFukMW8c7AvFHFsUsmGEhzCPUvR7ZnMRpRoeCgTCW4sZCkPWQoM6yGrdET",
  "key37": "5sLbPfCyzSu3ccMgT96DCszsLUKUk6w1rfzCuHr5p8RWq86dAAiU6LabiphhuGrwwh7NQdcejrnmCpmxbxR2MzNB",
  "key38": "pHBdjZzuUcsS7MNFdf4sgAvY6swbPhXfzh5zP9Zn2Yp6C2SP9TNgN7paUSDdrJP3CxJt5Dzx5Kvxz1G6K2niiVw"
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
