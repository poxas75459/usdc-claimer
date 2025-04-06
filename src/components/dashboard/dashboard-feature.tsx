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
    "5dnyPba1acjXPwqqP2TPRCKQkpCzSYLL997ppBkNADqWn8vQEhpMkYEhY16qXiveEjBLp6fW2AYUNYMzw3Uo3TKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55NA366Lkhcna8WgXuSAZmpTw3r2e2qtmZryUANffBQAB8DSMV4Gz9Z5o4f2YLf2tK4eyHMZomrbv1MhFafG3gCC",
  "key1": "4acCUM4uYFpg3TdC4fHAojnYQJ4VMvVSSDtNaNNimeVh4Pfn5ehVszVZKbg3827rqmpaQS7eyiKxN71r3bTKm33o",
  "key2": "2uCc7R4keP2JJjisyruJWT96fUcpJjbcdwUdAmmAF7qsrSKwHSN11yB7ZJyHzJEhitDDKYvc1dEUoGuunitwQp8L",
  "key3": "4WmBnedBqYyijPX9g1Tg5uCnHJEPgnhidyDXgGRa4DsbZeX1SSfr26FYdbcMjRkhQyhiEVobpYri9e1ZgZRWq9Jy",
  "key4": "4BAi1wkyy9V1NizTy73SCwGdezB1vWLaydo8RbkoT9ZDjnJVpFP91djgHYbh9AQ1o89SG7Q32XxjvZQqLJnn8rZC",
  "key5": "917GvfdVkbBEmZF4yTbuyEcaSvCLZDGfU8KmWrbou2oDgnfQYipViFQ1dnu65sMPaAsKkYS8JBQ2xhnypCYmFiF",
  "key6": "4jY5Xjwitderiw4vb2WAZhC8UdU2C6D6EATusm4aLNrHmn7edqwcmYoSX1xsbJjTkb58UHirdC5QeUE1tCjZx1LE",
  "key7": "4AjMtUpDPaQCsvqTkTMEKCJ24n8CiZVt21SFePJ1nSAytuGFsrYzKTgTqBttZPTcYQQYPyMY6kc9YHHQxoBE9UqF",
  "key8": "3w9k1gvcmohqzTxvsjBfEQT81Mb5h6aF5yyzkDEVYqSYEVmQwK89wMCivZh2rDrsbVVaB4RiHNwNSu3vLtgKfCZy",
  "key9": "595b3jBg8CWRmHVLJc2pb1PVT5uhrmBqKYwwiAxmvZDEqQ2eiHQnoop3fGuxN7geRTiEZo8dsqMGXEJhQYnZssr9",
  "key10": "5E9LMkQ3pcjctcdxaccQQ4Tj7M2vETMeAk4ioPZXBzWM258TNXyoRJwQ2PDZb8UVwtQHfWEWQkMDYtNfhy5Qx47K",
  "key11": "12qXqsJvJQYGC6sfKVK1N8aQw8GCEnpAcjqKA2hkPuZy3RRfzqYVqqFeQHv5Gqq2X6FkxWaFbQk1BYbZDaf7j88",
  "key12": "22XFtK2iZ7U9fQkyXBLzZjSz7TYMdRKgwDfZtWQdhnhBg8G8sKWBHsdrnkWq8JfSN24Rf4AjMJPFkdAZbsqH2yuF",
  "key13": "62TFZFrvKWnURR7g9yfvYa48QkRDZHPG2Gjky2VE18rYDciNmKYDA87rLrNpEG97SZUkfeUaE2Dh7Lm59S4xviGc",
  "key14": "4VmFhmVRXjSXdEH7eTyZ1MPTx6NZz5EFcrKNwhqb9prHGAuSMAmDxGodXKd9EgKfzBXRehcsDh48yXhkbBPy1zVq",
  "key15": "3nWTDJfjv7G8UFkETGniBpH8d4nKJfLySkU57xYAfwWiE4yRGqwCFbZbxiCbgR6ZUfAuDvuiWLfSk7695fir8Lqj",
  "key16": "57J8YByoHAddPrCYUcifT51sm4eKC3H9e5kHYh87izxboWNNjPLP4R7hENE5uRK2u9fRdfi6ZaxgEaVYG98huij7",
  "key17": "21orsXi9y7CZFsArwBdbDUHb3RpymKNQz1s7qkGrQN6dQQHDC6ciVBaDwreyTUKyje4Rnzh4SDvw9TVhhrHuGewD",
  "key18": "3KUeAy31XboQv1GJB9V75xYr5ZgYDgQ31athwBbtKMA5cZJdPe6hTUmfpgJZJV3Uwa53WTpaWZFAw3JaFeqXwXgo",
  "key19": "2Nm97QpBMs2A4XnUAKzG2DqD9ojTHkdKcbmCumFZPHbL2GJUzaxfBwotzLgorf2jK9yFtWFCFRRPmhuuoVvcZpJJ",
  "key20": "3PGCGWWr8iE1JwW3pbvMAG9Zxw1jrnmELqXJ97hMCrS49dDVggZfXJpBpkzfLJ3AmWnq6t79viGQoioGY7MAjasf",
  "key21": "Nu2oUUug5cG7Eeu7qhKLk9bi1jNh4czgncdoAHPZTagmkgpuLipmvRi1fzbzKg9weda2cLXW1jf1RShBJQ5Mf46",
  "key22": "4StTCBZzmnTEvmskV3wgjKYT2nfNBZ9K5xUEU2xjMnoXv2tvzmHWRc6VaG8itQHBBRZbSEqkQGjfJhQxJ3i4Zus3",
  "key23": "2Z2Sfd7CDmvBgYuy3PnDFVhyisjzyQnDsDHqCxoKy8n73UfYKE7LtDHr6bVfQ9vTdfasoMKVVHdunD1Esp5GB9j6",
  "key24": "65rqCmB6anLSJp76s1aBJHfy5nPRN9tPYJGCQxwRzHqravBXs33WmcWLn1CeciVBT5bt8q2K9K49JXWvmQBKXTzG",
  "key25": "3aCccA7xs96kf9ruZ9nTZxZs2Jygys3JkyTSGnpGxm89K1ynpuqf9PSsomzEYqENVJMxDqySE4ASKAfvUa6uJ4Aq",
  "key26": "3EcW4yjTC4LWXqfPo78P3FzfzTjU73cCmgGtfcfu4NkQ5JBeiaBBmAF8XgVR3vHWwu4xfzoi9wZy1tE7HwdyXD2q",
  "key27": "4HAYp8Kwo9td1nNor6TLttr82S4dp3aUBA3iwGRnmhGxms1JzX5ipxscaEkT9AiCcgu3ht7F6MZpNof4cNV8V5f9"
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
