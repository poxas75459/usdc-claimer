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
    "u9AEwv134pKb6zp373TywDdtBd6sbC4e7eZyUFW3dmtXBJfNP2cDupuYhkfYAWKCg9zRZoHkEM225WSrwbHQfmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JnT6bdiMgpbDVRi6ZhFGg9J3Ahwi5erNRXETwCYUEB5thwiL7zVgp274Z6jTwdHAKR2pWgMSsWh6kDxdcB68w6q",
  "key1": "6w4DmFyymtqiPy7V6DBZKcWJBdcUFFWwXhBiAqpFuaQTiYDCxG7To2sc9DxLDnwUHMg3Rrr9PWN5Nfu29SfaENg",
  "key2": "45NyLd8Vbc72UivCkZGX9HF4suz7T6ggWSaxFhcXikNBrfRZFexzHywBf44gN3d4Lkqcj1jc8eXKyjDcf5WxbtDB",
  "key3": "4FGTydnU2CPiS6WpdGTiYHmUw7uA5sKS25V7g7e6G48aT6tBbfLNM6pYpRAom9Koi4ZEVMmvkntWgNVoPQDETazo",
  "key4": "27hu3Zy56sLgjS3nyr7wVoPqhe3Y9qewWH3rTJjjdc1NrCzAwEfrV4cVA8TMR7fMi3z6Jg7Xm2BsHx8xv5aQ3WZa",
  "key5": "m8GYYeRucgT7Msz4P3PL6mQ75e7VWRWnM6hkykvP57K8tEf38quq8yLncw9NsvWvLjD8P9G5ZnFivFoajSpCGqy",
  "key6": "2btFyMUkvQDmGY3dvds36wZ9Wv9Ua9e9xR7emTWqnL8Bpqxn3LPfxj1LtwMxrK2PgGv146iS9KAD6k2xBMLkpive",
  "key7": "3fZjFxcwQmcGtFhdr6cb2sL16CZjCpsE6fhLmYZhSiuqV8Kb798KC2nk9KN4QJvMt1nujXDj71njmzzwxd9rw8na",
  "key8": "4aoZCu2Cb3qozWWd9hMN9Qm79uDda9E1tA8RzXj8qyycTDUvZd5LUKeBpRHsiVqooEi2x9mbM5cKwsFzqKVQ4u2Q",
  "key9": "2FQ5LydkQbtg7X8q7qjNKQg7hhLuHVqA6aVWqfTPEdmcScskibx5CJEhcP9GfTRdKHgQz51xmQNtX335TmZLqWFT",
  "key10": "5PwSJTHUoBTYyh7jb39mLvPrBbCZoXEDYn7xs3HVwCTwEBF3TrXiqJYwa2suoeUnY2CBs4PZGZV7qRhdySCpVdcM",
  "key11": "5wqnzA3wN1yQ4Fj7FZtFptA25x2LhCxBzZoKdf31pKxqzvmZRzrNKLVh8CXVTJ3vbK1iEAfCuePPM4oM4XxWUaFv",
  "key12": "2ux1upMrQqkeKQbTcFZCMCaF9NQyZYi7PwfKUicE6uvUA9qzUiy2Ri7xXy1BmSuvFhehCobMPZgTaNRKSBrfqxqY",
  "key13": "3ZgEFj6pb1AB2sgB6WxzGV2bxQzvrrgUpyK5bnV9gcitAMg1Yi1UJ7THuUkZYkLGi85ewNFndN56YqtRtvZwiq7J",
  "key14": "2PUCez4xC1Hzn4WN6a6NA5m5ifBAX9M76yNBUEcKU2fDqKzzfoTn2XbRaaMQZsJys6GVfpEpe8NrrNbgJtCAy1Fj",
  "key15": "46fLT4tkTZ1kGpC3upyG2Hm8NfMBbiTXRQrWfSKMgZmXuFWGKavsxqSYF7UFf7wqMLgKSeJ46TKp8tm8EYsqzkqJ",
  "key16": "26vnRyTHm4LTZhiNnzq2ek3gVu8S1wVqd41EDUuboBms2xCZxA2WdqkGZ6xRwdwBCQnEuQ1UM8EcufVY4PcsjtrS",
  "key17": "3bVCYfMSKgoRVQXQLeBchLnxZGaLeLhKVrhAw1Ttgndk4pkiJopVshgGBQKfzixpzVngpCGT1UmsVzENgmStKb4x",
  "key18": "3mHE2hwpU9kTZ1NrwBiEYemMmiLoLdJSbDp8rcUdVC3r574kmXMEbiVXcn6ceoevAoSRhKMzLkYKALrESzKK4VR2",
  "key19": "3bRXfGQW4DgAh5RCms6Cu6pvBjKyeHVQiXH7PUmyc7WR88pf3LDXwH9VfNTFPsRtfKfcNa1rd5FJ82D3jp2W54Lo",
  "key20": "giGn3NQG75f3h7MhNqksEfEAzHF2BcoADHmQGzGtqpXm2oBVdCRkwfZmDDXpPptqiz1oMuFRioiNbUXj72Sadaq",
  "key21": "4N3ZE5rebvNCdhxxHkp4WV5nngRcMgU3LQGdYMHRzNDru2jM8pFxPYsui1L3frvAG7RUyNoQYWeZPKn8RQpdDFcN",
  "key22": "3huq24qMw4gsYPXcFh5NXtWKFbLoUF4CaRzpupzStY1fBibAJ8zP48a5JpXbTjv9itYMSYgyj1GXBtL9d1sTvTeo",
  "key23": "2cDVt7tP1Yi78orLGEDujH9zjuvk3aShFta45bvQnFDkK6T9dsjDLTvkdRa9uYB1rbGfimeJPRfuisKZ3AWPtXcq",
  "key24": "3uteS25AerQZHR67wDAog8SYe4JSojyPNR6AnT71ZADCQyr2VLJzcAb8WBwUYhtgstvEyFUNQbLTG7GbTdPw1B3B",
  "key25": "4VN4DMV3iNNH9c29YQqTZHF1hgDrqK87cJLPmqCcQG8uUCeknn4L1Rr9pEgf4QSZPcLwE3CXW8C17eBg5vGDhRUH",
  "key26": "djC55hwuhdXhjFxwbsgZTDETVRBGoGugZ33b4zcjvCvaiKy3pv9nrVHahJ9L11KxHXA8sXweuJhi8BNKVkGobJA",
  "key27": "3Lgu3bssGoJYgco6YP3MnafTwP4mvus1kZNfXqPe3M78tD3gAzBoMUbE9HpWbtHS6kJixVDXiVnxEX6XnsfcMVu3",
  "key28": "5ayZ1Q5EVyUNrYzUuF9P6gxcVZpX2K9zGeSHNZbsbtAejDUz8SZc9TiGSYpC2dprxdk8sz6XnrQLm181YXAYbFQW",
  "key29": "HhsHNNJarkMEgj4AGHChY4p3v9FjnZJWecbauC6NXyTUB4j3DJhB1GJkh2Y7UD7kZCuov1dAxDfNzaz5aHa3FKE",
  "key30": "4APTtVyHVrtDvLpvgdVTyjP78dFGo47NMaP7JPoHsr3FuBTPNzfaXy3eC1QffTVQhwr7Q166fpTXXB5QeVSWWtnZ",
  "key31": "DCmGrPMVSpKgF7B8HL83egVjYZpg9pmb5Mssyoc67UCX98HkCKTq8JVFeFp3uRQMc4HLvbRZRwTGE6XGjhZcQTz",
  "key32": "5xt7iCBi6eo5J6CTA9ao36eGusqhXyHni4xbM6zrLejyG5XuHKjeYv8RQwG2SPwDTEGU7Wvn2KgNTGs47UpjmCoG",
  "key33": "5EaHdiP2gRMKr3BFwmEsRyHLq2BkTM7j9v95stpi2bcTDY81VKuGNCi3ijnKJztXKWmirDo6ng4ifoKpKSTnNBBx",
  "key34": "2jPpRZkWxuLoejeKATsnxhhpahTRtdk1qS5KzKXfLxNsVAV6UWZAb3wfp7NU3HmhSiBRxvX8Q2BYcS9qedU7psvs",
  "key35": "2JNVvtmHx72GxYRTgEhWcpFrhvfLcGomhifNusndipDjpzEhxvmAyk8jzbyP3quQYag2k5vDRVi7pMrfT6YjkWiL",
  "key36": "36nQifQrWFvXwPwci4he9E1McVHpwyoXiD1PYctcWTUsiTUPEswmX2dW9ZiyvePYyKqJ3v9sHacxghnPV1MnpKQd",
  "key37": "4nVKnsWWARbfKX92rFosVUxkSdYDAjeoV5jLmY5MCnMcLYNLkA3Cjnb7et3T76CVFuTFKoYGaP3b9yxLmsfMUkbK",
  "key38": "nyEsg1tw5BDEG4QVS87jSUdy6azTLHy5v1JUfH6LbQW8aXwYUbSy7dPeWZK1CBDgSqgw4LCJFGXLgZySqETTWEu",
  "key39": "4o8GcHTFCy57aH32K7PZfKf4z3DrVnTuNoJuSzYTYpvmg36XinkTmmnTy8yp5zZov3BBCox3az7CisoFuidzYc2g",
  "key40": "wMm6agDMXEXyEuBUtbEh7HUyfAVsjL7vHxzbjjieLWkj42m4jZ1cmCDu5hdhqczKxzjEANHRWx2kQiiLEB5qnJg",
  "key41": "3NvDQbsyu8cb9gyDeVUdvXXX4CvBiXyB1AAsncg8F4K3d21jjXSFotJKiuC3GWLELa22SrgrEmBZCGLVE5ubtaQ1",
  "key42": "3mxiLZRmgKjeuaPbSbKLa1VW2JCkMuQGvVXMpfpf7nV7nF8C4frqyB58eMnBpzTDXLiA3nxNjw6aGi7613UMGuQV"
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
