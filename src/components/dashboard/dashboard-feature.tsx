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
    "5k5NMoyhZJwdczeraCa7jKAAAxqBrvZ61rrgsVkELfjqY17jctZ8NU18mToutmw2JMutXT7wDRQGj2aUFsKNib29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ioEcacGp4SJmUVDeBim1TT3D7LvCayzqh1ELcniDvA14TAyo33FvspgSvuosM39AKvD5vaM7nUb5LsTDbkxYb5C",
  "key1": "3hXXECXzL3nvAWf2PUJ1uvb9xxBFTGcoUXHpVSJBG1p8JK34wAZEAW2dvgM2ZbT5PmWnGcwnbgan1qqwaiX8Kcxh",
  "key2": "4ePNnWiDgsj372XAys7coJeFpUSVhpAu75SpdXAuNCiQ922o2MzvxsUBA1U1w5GVQHaSZKVfpXCwVvwSgVtrrqQj",
  "key3": "5Bi4bW2dFLNXYdwMF61uTTx26oibwgfDzRYLwxSK84nsi4xZ1pZhuUPXm5uJfCFu496vaQxaQL6XH96kjGGvXF6X",
  "key4": "3ZUPq6ZQsxXGkn9ADGkAiaBDjWDGh9iEZMbWhae39svWyhwi9RFJ7fwg36AU2nHDpcEmx5KwNfbTJXjtF5cWyyga",
  "key5": "5ve2PnVK2bFyKhZxDXcKZxQfL86eFtPuY2W2oUYuJbAmQB8JpoEWo5SoqgPGg6xkvF3MvjJLjTUwVBY1iFRVrUgd",
  "key6": "5JTfETG8BrXYXr5tLnegGThZcTdUPLSSBRQvNzc6FCJEkSgFFhfzpms1voHKvE77vEv6YpTekCWj1MMCmS4E1baE",
  "key7": "jpzrVyGJhJrADqLgGY4W4nekTKYeaVGoY8CxVeeFDbKv9cAnbXD3oKGvmdRn2YEL9oMiy2UE32cUDaWocCgatZd",
  "key8": "2SHCWFLJxSzi5eSBTCe7nN6TWEojWpfmJMiHqnHWgfr69iN9cfhoM2KZuk4gTEFLdvrMeXjVpAVLbdhBqeJ881J8",
  "key9": "27ZUiTZcj9Ho2JbW95gph5Bmp8dpvkRkm4fgrQFPKfwiMBWJzSNpw5zHEA9o7yXcHYuy6hNGGGxc73yw2EDRcBkJ",
  "key10": "YnctdDq7cqrf1AhgNtcAkrNLh4GPxiYCTwjM8HBLVwQWu8HVpXNouepuJhrHdWRQ1P88vKw7weYVkf1tC4oAKaw",
  "key11": "4Tnb5mLrtE5iF5Ee3453pnuWeC7DKt7Q6mpkDL79Zjb8NC7FYwCdzd7126N9ETdyJoxdy3fCTa7nHpVT39SdrQpL",
  "key12": "jvptyuatUkvkadykwzmCM71PdxKBonFMfPeHQi8iRy4sYeJpm8ym7Z9AE4g87Ey5pcqRWV4E67vowE7QmdZbzrS",
  "key13": "5x2pG1ygWTMwB6d2EXd5sJhJc2ndy6RKNHT2tFrxFT4YJNCjYEN1K9TX94ZbbdDetXyJ98aWTxKp6dLF5oEKznMv",
  "key14": "2AnPWos9BGrVfDArHqen2qNVkcUb97QRbE2ZkkNVRMVimWv3u4U2uKnHjpcS5cNmCUKHhxsZegBtXTuRaP2JTSFJ",
  "key15": "jtAwXEmJR7BhooB21ArmpL9KrFEtkfYRzkGZrrgiQ5vMmjEE5hpe7Arv6nMcbkK5nU3jaMmfpx8nx6V8tivLPHc",
  "key16": "3dm8DqY6BbLmDx4W7vbXxRB9VGTiN7Nq7FkR5oMggFTiGfT8AKiDJErG2ENZtpznQCEmUtPt8Z9w3gN69WbQM9KJ",
  "key17": "qYSNYQAoqLXmPgWxbL1fx9KT3s4Zmw9nup7Q5nnMFMQW98Qs9wtaqSLDTwCH3P2scQk8tu4UCjtfGTZkxGsVUhQ",
  "key18": "CejVX5f6B7wq3rbFXaLBcHsyFhEJ32S1nNeEzPNfUXMy29UMW6Y5AGqWdBoMYzB5uqK6Yc92QpLPWnbZCZD6JBy",
  "key19": "3w8zMLFNBMBttubhqJhSqT8iibbg2wzEoisVZMC5bJi2JhWdb6nXujxzZRPXKAqtF2Qwr3ExVmrRRFf8MRR85ntY",
  "key20": "2YZgS2PWqCw8g1QZfujBax6BhqrFBcuX5FoSYqGh3mVYSNVnFheMFRaGXqhPw8PLseMN3aXBZdbBUN2xEf1uD7FX",
  "key21": "5MR7rzyA3jkPX18VnopDPirPdookKcBZ9eVv9HhoC6aP2SNgDQPkV87hBySnAodxdNtqoPrkRrE7Pgsakz5GV13E",
  "key22": "4rx4fQjZz25mZKWhQQNdowT7kh7sGM4GAfZGJG9XWpQZqsTcR7fp7ahhLJFXWHTa1uHBAgrReBPTFHLyZMSgvDnK",
  "key23": "XM1pXe8FVSW9k5dhuxyNA8Lt5JzhFa8iK61haycyYZjZ6AJM6pGiABfnfjYsGEQLsEGrn451XzukZDgHRe1e1P9",
  "key24": "64sLjxj1uojPJvugkJWku7v6fN8tVLAU1ghjW318pNbPCjhgWS6adzUUrxmfFGk8yYnQ1nnNnm5TLSxgAfqvhUfq",
  "key25": "4FWSF5fDWiBxV7NjnHRVvQyBJWzHaerZWoSq7MYBbHAUNM7h9FfUCdfGjRm1TDhCeFGyPUQY3gp8LSfWRgL5DnL5",
  "key26": "3hGQSd7yHCr3G2DyTyziCE5dQwvxYRo3Ltx7TCNATHNF5yxKjKyB9V8z6xzP4Jfxn7X3eU7kVPQ38zxhsJWm8aFb",
  "key27": "348iuTfupuXDkkcozbhFfXYvvRXWihp4nPwm8jRnuDCXe6NQSrvTwCg4hzrKJM1EgrAXb9fwvDKA8A4xShaTLuLU",
  "key28": "37ByJo8gFrAhAq3dvHnXKj1zZWGFZxZehwP1MUzhTt1isgZA1jS1gvfVrg3wjm8beZkyseJvrQqBVSvUWmGSyHJA",
  "key29": "2EcGo4xC12GCZoCcZCH67PZKXftRbno2LdnWvHXYiiDmE8XnVd4cbWApAaSLLRZfxfATb5wMf4sgmpf7t8BCFqQw",
  "key30": "4uSSn885G7X2fvsGpgeRjsR5csJ1ye5AyDUjYvPi4BU6grXmXdejXkon34i6NTXEnZYT3Gt9M5sXC3M5W2zdJ8C",
  "key31": "4hqqPt3kD3WskoYMfrLggWtKcvusa78obXb3Heeqia3RsvR44YBFTYoM3WUxzXLWe4P5Cno5X7GfptCMKtK2gkVJ"
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
