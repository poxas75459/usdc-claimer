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
    "5N9qo2hZAf71oYFZNVk9qX88gCS9ky2KcFruNaRyPeKgWNMTv5F3zbNA4mT3qBMFudnz1BBVYi44N6MZ1SQiJgYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFWooEwbgCZgHhZMbt61SP1K19zNo1EW8YoMK4RjE7yUJtJ8UpNGq9Z1cL6nEeEvRVeM1wm4mgHVrYWxBXMoaah",
  "key1": "5QkFmravJ5Zpr17YPka4QZtk9oRKi6XFUgwRDR8WPxqJLk68xxkfm5myY9wm1EbkrbRwrNnh35uib5Hs8jsyUyQw",
  "key2": "27EkYWeCka8NmvmtL4w2nZd5K5PuEu3ygqnVS84hBNwYhZ5PHB96pTKJQrve2ZXQdiq1e224iLGesTGvWtoUVie3",
  "key3": "5uHr6epG5sUk1SEvfXqCR95GeXj9BfGDweCMaWTeLnybhguWjpSUDt4W345MNeMvhJkNmraVDX8DfXH9BGXUtLTx",
  "key4": "24jVRUAu623fDyJPK4iCLyLNRBgH9RKjvdw5WonhaEFX4uaq2EQ8rt6wv8CybS97anJR8bLhw96pCEgfWciWqTYg",
  "key5": "5chonk1orLKz5NKSAyHJAwauGVgQrcqxQ6j7KCuxi5ov2mF9hmRr3LT9xVWXPAgTqejfPgFf7AfWauTLvPvotLdT",
  "key6": "2sJ9JJMGfB6bEQfCQJPSg8hUctUrBANF4GxmgaQn1x4Ck4DQzGjxC5hKhVofdTkYhc58USg9qd99VNcpYT2ir2ak",
  "key7": "39mY6am63foXZAazTcVP8DJFCL8Cm7HJgQW4mgG7eh8BLMo2Bc5iTmXwDcXgsWfgASDaAdB9n8XAbphxjMYX8fEU",
  "key8": "2Gw2UqhpnyCnsKXYAuiaLLrQpppHjPqu2xKEfYkfSzqtLrSuvf2iizCSHLuvWvDrXLnqJgDU3wMFGMb1jf3M5RUe",
  "key9": "3h79cdPJH6H46hvh7R6smzpqYjsiQu1SMS8i4SEadHsmzao7AUsW1mxRDNnwipt7vzFTmYjQFCf6SMJj4T32j2qe",
  "key10": "3nUtkHCLXb9QDjV1nRD8QtNiLscgjtdZG1q48S9G4KQbSGU99y8QmBULaNwH5WNMtRp2rtX9WMLRRKCDbQR9azsj",
  "key11": "4H8Kr1vQTzdFgMF3ff8M3buLa6usJE36LG14Km2W7B9f3eRV9RikVapzzWkEyykwxZU1JUpkwzgoNTFUG4yJmXEh",
  "key12": "5jQKCDqad3r5cEhAy4RaiooPA1d9ag4b8vNiRhGeqPGWZ5uM5ioSUSsCFsH137n3jNU8Wk3NWz6JKE3V1fRTsYE3",
  "key13": "2AdPwPxUeL2TmHduHkrrEAwhEWHXLPkqRr59M8KajafA2YCoK9oo5jhiDzSiGwShCAWxuUcjyhktuJqDUzAE5WfD",
  "key14": "3hfqvEKH1bsFPa6h7wxrQomZGJtkRySPcRc1a8VQB5BHPyJ1L4To69FXDceUwLx7YpZhYbid6pJtMYE3c5qbJBQa",
  "key15": "FSR7EN1zt4HxNcWsw7bN2zq6dK7ZbQ8QUSR4J6iKFud9dbRQsZRvzouAeAvMVKQsS8DCMLGWx3bsH1TZF1VaC5u",
  "key16": "5jAaLNeGZqmQcKjdptADGES6LkUxVfBsWPtqMrj32K7bksbvVHQqEKn6zSibVUfAFfZnjVp7bryyRWMLzniapknN",
  "key17": "3hckwMs77MhbRG5SBE1DFi31hXzk5KsR2x1DRbs4dbpnXY1pMdCuFGSyWbbdn3rSUJ2m4HjgzKQwkWCDNsCHWQbM",
  "key18": "xU6Rbro3mPZYAeWQDFtHgsbxzXMwHbtefimAYeL6bkwxDwyT8tVdPqLDYz36McqSYLVQkWuMD6BJe7TrSe1jkZk",
  "key19": "5ernNRLMfmH1DKnrv87BLQ2qJwHMBg4scmwABK3949jQbk3AP2mi5A1wz3VB3Fp8F7kioSG2bwcLxXVVWxYaQjSB",
  "key20": "8hS6XKQMRoRcWzAH1c2jaQAd6VgXzTun9oJ99FLazekvGQgEtm9VNjWieo799CT1PdxJUukGQRXYk22SSmzyJLd",
  "key21": "5ZtYgLXsfzPuvRAFdAaCPjy4w2dnyMZRbqKYJ4wNGuKWELK9RcwXRm1jtPTCJ4xbGZE1vunzUM2JUN3an4wxr1jt",
  "key22": "3CzFMTqToGDXEmvCudhgLdyVeGaaLmVBwpbb1FdbtruAkw1BcJbPBL292RzJHgDYLdG6nKCAdwQ5DFvNmdxLnqXp",
  "key23": "gCvaNYjy8Z7vprjdtm1qDyonviqezvLXhW2nja3Xvmij4LP58pTYQeZNgDzLmKy1CFy5ycj1uPnheHY8gsGqvAC",
  "key24": "5Y2PYe3UGMEkR36GLPg8bJRPwZnwsktRUeBnBbDNpavE689MUSgrdFB8g6oyYz3EqpVGroMNy5RpkSoXN2ZveMT2",
  "key25": "4shGKn5tQHeixq1c6siXhFJohdTfA3uvhWABdZz7dhgpKDxkMVYowu8JSnXDCKotESvJsDcvnjmJCvAHduqux6oF",
  "key26": "vz8vRyPqYuXAFvmW9e1b3Vna3yvKTz2LrEfzzRf2AadWdackx3eBRh7RER1Sya6sBDHuoq8yFEH9nzBecsJcxVd",
  "key27": "f8BPNHTGRkFaYM4J5NSkisvSHykS3trRhoLcq3SVchN8ngFN4ke6LtaEi2LrhAK6srztcZc7fGjFB3DYypEJo9u",
  "key28": "48vQKdbhiRrMB6DNNQdXkKfJkfwpVjtPtgqy4NfqstW93nf5eU3fLT3TAMjaa2dKhyADqNjsuDGcWMGbZFz7Uz13",
  "key29": "5v98xzai7w2PVTumUedLubMs63cE6vuvYBB7mog6D9uZxKHRECk2dR6KcFVUPbeuAoDJm6LjZBMxQcgpCJqrexix",
  "key30": "2uGvYQXUNghGLFy89HrMC1GJF7om3c8THBVvDU2mEbxqdFsouggimQFgq5EpbQT6usAQk4NJzbQ2BJH9cWYgNRRT",
  "key31": "4vkG9FPVWs2xcduMnV1Fa5HiyoZe2KoAAbwKxVV5QnumGRL79TYapuMDMnyAi1T4TbH2yH9SF9Zk1yi5EK3Yz28a",
  "key32": "QvdTjVPpe24CYsBSpNJ9ZTNBY9X8Z1kqdPSHPEMNcj5fUxudRG9ceKjtz73zxri6vgbHh7NXyRuhwcQq2aE8t1G",
  "key33": "2GcF6v8LEn7YXJ47E2sadrrukX5Jc5Ad6x3JGGnpbfvS4nzUt3QhGbkcYNm1h4h9Cq4xHLn21K5EmKrqziSRqLQj"
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
