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
    "2hfe28PRavXutXxBzWGKjoXzshC7BaQjLobL1B2WN6R2Fukb1j5P4d4VbCrPWacwgF34ognFbFnZSnT3jyWKNfgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38xmehSSeR1MzftD6s5fcaZRVMT4nW9UuAjvNCd4SZy197nBdFw8PR9NLmbLAPGLopGv2X337T8Kzwb7sagpNifr",
  "key1": "Xzj52VuVx8HcpMNdx6yg5xWr58iS6qgSCUDYhshUWxAT3EsRecVsXroG5HhB2nEGzdZZLSkxg8nZLys14b33VDH",
  "key2": "3eZR1LKtkTKrusUdK5o25i1773AKQ35bjC7fYCHQNGQubyg9gBB3EA3aAACp1VBpbMoYVTKPst1VQfxCRJ6VHVbt",
  "key3": "5hnFWcWWge25pzjB9CNynocmMnBqea9LQbS4tTvaFRHcARYdQkWPDEagxD4RWdtGELHk8gD2dZRav3zXpfmQEWea",
  "key4": "2vsWWy5yAgB425PWtBEXwqEcKwzYsB3Qhf2D214yybyog2BwVqvoc97uiGD6bkgdGK4xvqLkpSciSCjpZvvvtABh",
  "key5": "2yGgtX3NXNzjuVeCHMab8mn5qN3tsz8Jg4oZ4PgeKBnFoFGuYTZNieB2S9NaUKEDXPvt4qVdrQGEk31CKhFScWYy",
  "key6": "5H5RaAb6wjT2f6pA93Hvm1Ytoyptc39oaFUqtFCBfX1L7YjU42aY1bnrkUaVi7wJc8t7YApPeZKRPJwqT8vqEZfd",
  "key7": "MxFDdQNMuzdsE2tqiC6PonFYJNPf9JuVF61fhe9QEruPEiiYDm7amEeRRNVo3c8UCjUgmBnaKzKCoAKS9o6XEEz",
  "key8": "YjBnY8DzvefJ9j1cc53xx86G5c2xgXAxUTTuSVprTDNwzStg6p9vuhDiMsAkZFRPVzYYcbeTm3t486jcALxKy5Q",
  "key9": "2g2dh57BXaMubCw9izGmqWAkzu2w8nMZtnynNRUaxikDa3Rv9jdE35ahHEjr3TnJM34iXW28KvVo331x3MdFTaSY",
  "key10": "GVTXfrmp7YNC7zp9GJXjA2YRGkaAa4WH2ZRpNH8UTx2TEt54qVUUu1FuftYKMdMsuTVDVCcrFzrzGUrNNm3DhKP",
  "key11": "4GsWzBN2yuYQANP1FetCgHs7Ld6pKSbsSg5Bn82Cypekh4UpztHdQh8xVsRP83q9iNiHkBqvSHj42XMxbEeUAT15",
  "key12": "s5VU6tRSLFmFbud9ApMnCpfGyKmZkhVPyfmBFwFpQGDJdXfT2gLUVsMm4smd1JNz2kdbjSQq29BEiop1gvH72q2",
  "key13": "Z8U9VjXsCS5TVB59899J3Qd8dnELDzp1AvdvqqfEUDAJibgGUeb3CjcB1rAWuu5hZNGY2vkaomdWsUEz62p7LxJ",
  "key14": "5DZJqHQP4gW8AQicLC5oGxkS8HwzV2fMJqMp11ACow3PYxiRtjpfpMFRTTgHmJrTwEf82rn92qBv2JL7cJhXUWFA",
  "key15": "2BQbrPh5cV9jCQi899znmXVqHmUcj71Zu3EWaVi97rRbhn12Xxa6dhj8ZXVi1Q8tFhYGKuUusFSx1j8XF1z8CiKp",
  "key16": "2HUDxeco8GReSckaHEbz1mAcY8H14J9ahrpQ3BnJHPpDu5p2ekqBji2ktgzSR8BndL2mUQmtMQsuY3E8N75LDCXG",
  "key17": "5n9gU9z5DULf3i45kSYmGNFx77Fvj1Azt7sZKxFwHwEb1JxAdxY7UFuaAzTxgjMwoudKJKay4S4xoZjREWbL8np7",
  "key18": "39WNjqXfH2xjbr7N7FAJ5syB2cXhWxZcPFz2sqQJCgHNneYjS2jzVMqaVwSVjtPKE1pWVD4wXZcSe3YAKxEVXQN6",
  "key19": "4uWS8GrbbamSGkmQgYij7L9NUhHoLbwm48KNVQXjDbeGAyRvzhNzFLFp4arPgB9Cdbexf9osw64N6936AEbeB1uP",
  "key20": "4ZBJbhn9Fz2fYQL93XrVvxXbpb2UuW55bEThMPrJHVGL8PBNMLDfi7NPsUS1X3DYfsxRsBeYPZFK1UVrg8q73wNm",
  "key21": "3xRyCfwDoLf66QpMbMBaE2zxpizcMftrs4RMQnEiybSNCDcYyB3bde2Hu2Zz1TxUSauS8zinfVvBArHvHwHxcZuD",
  "key22": "2eRkPXxQ3LVBonwAAQawUkcXMEaJC2rmg5jFdNDLTbkVmNC6fMMtHeUk67ViNherM1tv61JeJbeMeUhEWePBs2Kf",
  "key23": "ESH2tAUmmCW77jraU7GtYHiyXmfK7FFQhXHpywHsvVSaDaoomJviH5DtmTyVSGaLxQHRp94vZn3WWoMVAps52h6",
  "key24": "5o47qfhT9i2pUUcmdXKKr8hckzNWgjGBojnKyiF8yAXrN2DajmADDhxZfAmuvJWevMEpwMZRjZvdkaawoVkZSjJZ",
  "key25": "2DhKgo9ktx21qWhKJ5G8UTsis7vrhNs1HNJ2WTed8BzCAUYPSYtrJtopv79dHzCMJF7GnjVRTXuvb7Cx8Qf9nRTd",
  "key26": "3TCztAHqJcmVdGAGXzttbDK8Yc4dS11ZmNPdtCzwTG3opGzvKSQuPAtRyCQaRA9z6kkBebb7DDc7PZen2UMtEgs5",
  "key27": "4tEzLJx3aPTkHZFhhKHfNTwrPYDWa8Qmzre1Lfy3fCAqiiHhLjjbmrCRYqMAdp3m1w1QD3JJ9JiD8yuUJSRbyxrt",
  "key28": "4U42NhbQgxBeUUQ9MoXT7TzB9BeCQwrvzC3CdjyQqgkgpCWt63dU1Ev7cwZLzhj6f8n2HdpgCaBG4edD1XjSB2zw",
  "key29": "ABpoyh5pFoNWTTfBP5P4o7p1BSYRR3a1igBzmyTnhFgSfwdUKVSrgYqiQBhKu9TZGDntZ3uaSwbdGwsGvwq4ecr",
  "key30": "2ioNxC2XdjkUWhbfSeMsBAVE7GM4dgkFVvGcBJi7RuZ3oAh9okf6hkojSvGM85iYx9KnyAwHNEUnV2oB1uvUzrGW",
  "key31": "5p1scS1vjSu7Ue9k5vZYtzeiaE8UYS5VvbsVEHjF9vUCT4w8g3AWjxZGe6BYUQxMTqea1U3gEJeafaHVzgH1sARB",
  "key32": "8Av33s6JtxnJM5HCGMiRkjKUT1dSTmnLSdWYFE6eYEb6X5yTn3RikiNxYnsoQrDzuauH4L6xKa6yvY6spEiTa9v",
  "key33": "4TuznuhVuWYuCzVqnwBRjmN92dzRH9WVVBELgfaCMJthznQyG68fjmJEBGJzvCBwAmjVBFWQtjzp6frarrpPG1FH",
  "key34": "3kYv6oHdHQeYk5GSL94ctRFB8vZNmJ2Rzp5TAm1xRVZqiQs6hEZgDAiWS2GKtKH4pfnAZpMiYippTPDUVnYRKUpi",
  "key35": "15qkHkCYtAkcx2jfvRBX7KUBYdyn6m8R4hKwJA5NnrsyASb1BQ3qnuKA9Z2GsU4ytrP7R1DBG5U1L9pC6g8hGg9"
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
