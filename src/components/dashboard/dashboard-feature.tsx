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
    "5ow27qz2HiASNrmjmTEfjnydR2zs76JpQi6Y3tCeHTkY58pSFzdaoW2F9tR7zPrwQoTMkCgnhXThoaxTkBLuN7dW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RzRD4kY3HMJgP9f2VaZJuXSXukra9op1KoCpzomJwuHCJ5bYtU7FZkk5tC8zdAXcVuVjGDZskh5oazgQfwgTGhg",
  "key1": "3Y6ZvQio8E1hKzRuUXk1MyJKFy3MsQZpK3uHfDb7Ux87yfA6FKM5MeDCopVTjWfGJvtdf4pCUfHBgf7iGxMivtBN",
  "key2": "5t5hZt6aqC4iMbzabHaqWHmkFAG3KaE3MqUxi9XsRGYzWVLMqPA1qb1HwT2waYDW5TNcn9j3Rb71Gyx2knWDaqCz",
  "key3": "3zQb48Uru6vmWQ46Q5MSgetTxfnU4pz23JddVHhXRJvsa3rDUkiKTc8C9RDReUM9SYtHRvFgJTbiG4apnKaKQ9bZ",
  "key4": "42QJwc8epbxw9bfyoYyDSX9qDRGe3Yn3bthHv4n2umHNNeRoDmstUUyVbPrY7WQCB5QCuYKVreogmKQoMT2gtF4M",
  "key5": "5E27yVyYjMDFAgJJHcJ34EPGg2N9um9GYm8f5fr6x71PMXZoskYss761k2U3cKTsd2gvGhiT3aiBwHYdR8hc6pY8",
  "key6": "4regxZtNn7fz3uTKwLYatpEBbUyKDhTSnFG1Nw2Mv9qArrnbPbArboEkCZajM2P5U3pVYUbLuZjVJH6vQgtc2WgY",
  "key7": "3DHpzr4sKDfZva8ZxWYgSCM2E3nFeAUJQMtxUMEt4Mbc7pyWPwM56xZqertXFeUf8VujShSJP2gYxHV5sfi2iuUg",
  "key8": "2niQep2yHDC8ij9MMR7sEFdKKdRyAsey6aPy8dActpvqYbUhMhXp6YRhZWKAgprv3yrfUAv4ffACs34FvE2vYiUm",
  "key9": "4cgJssmoEs2BYRKHXX3gGB1vAchjbEbvgfuZKqswDAm4qrhmoqfRJCZh4TZC4DXfx9yWGQYyuBVVWbBotVijRxer",
  "key10": "3Pnq4prKdpZyVenRR43QZUAvJA54RJnYC1vWckMUiKQhETAZtndytu7vTmFJDQRSdMzzd8U8soMLKhC2csWggsr5",
  "key11": "5mGYhQE2g8A916ufeQvXN5HgdTrXXhUeQRAA5mhUpAtaKChCZRdWDfWQqGDt4nNR5FEDH6Vox65HM6vu9gav97M7",
  "key12": "4bznJTFKbpTtF7V7jM3rGwoTa7jCdDMXGdBtJ7hQKdJvkoTQn7B6psJT3zpzTJQjwDXMexRDoumAV3oZffRQQdz4",
  "key13": "b4e2dJnu16Jm7CUz9nkUnv55GUmevLYWT4KPK6EbehiDEYdV9jagi6jB83NongV9nChAmQgqtsrSZQohquKNyqB",
  "key14": "2LGT6cH81jbP3YmvsFwhNCChAFJRLrhU5HoT9JfZjXBBiiYF7GjtPDsaeDxYDXTP8QFkK95igdt8gcj7bfX5UZhR",
  "key15": "4NMpGfxNAvXEkG56s3PcZCawEzmzgu5GeZpHessghLoQqGvf61B8ts5ryQwpAUKsdqDMFx86AqpSYjyAiciCUAVy",
  "key16": "2KU4bx9rhp1HnXw4v9cPJq9U59KWcCSiaXZoW3dLjc9Kqg4Bv6CVjVGCkwbf6mvwvLqKUHahRASGvMhKsq6WeGmY",
  "key17": "4EZGLigs8QKRygcAgxrKEhu48HiR7UjJK7h7b6qWRmg9B6dseJ7zrQNVbXBo1cjuA2MJXMwNdHoRzPAaZdyj3qo6",
  "key18": "3TmKpsYA1R5hKaLFkDnaYfv5oov238BcNw1jM5vtWQjinutoggTfQE8Df3wqqcSiD5xksDv6Wq7qPUuTfBAeXSgD",
  "key19": "UnYs5k13AYsTBinX6RijZ7eKjK2fYightRrkbPBXyvcghnTas5rAxdkk6WLLWgJT9jLAHjqARNT9SKzaXHx9J2i",
  "key20": "3sByrqU3D3CsqAdaXJYxuyjnjJ4C5J3vT89iosfE7wnaMjJEFKY6wb5zdABdw4vyLYMnvNQbF1gjBDsCakoevBLD",
  "key21": "3jsPK1s2DgqQbWNCFbACR7vSS1EirVRdVXn8HkHeGEiuB67mXxyty8hdzXrTrBn1REHir9MKu4Js3R8VguXv8AKM",
  "key22": "y7qhq2fWa6J5j53LKCLVWFbeBA1BJ2gBTvNCLEoD7cHdqtGqHv4cx42d5HkBG8aX4NWjSjRYuVwjUUNUDdqHFvx",
  "key23": "to5msPGLMegSuWsB9FK5sCF1WhFWfc8m9rmS66PFkmVKAHWZWUDCBgNbFJiJenF4KKoVFaLwURnWdNfRDyjRi7i",
  "key24": "5Ue432eSN8Zi4UrLWFuGoaqCiCnzfwH2aK8F2FF7KBa6xP7eRgaJyYtvNifd3bVFLL5W1FUd2RJM9dqyUPLH9BrU",
  "key25": "2mMzJQt6osPHaLn1mwHfbsCzsa9UR5z9bsH3QUxczY4kGcSKN3fMEPBdtHDrV9ub52sTKgRdhcWRBn2td2XNMAk9",
  "key26": "4SfJX2LP8rXSfznGnSXYSKrdnZ9wiwaj938KR9sBDbopRyraihNFgzgFrPbmEedLD9g8ywtQFfEMFQebLMb3VSgy",
  "key27": "3qkFnVehc9nvD5A9xmD9VrT25yHwrtLLE6J67Co9bgNU3f75xrCajmfonvRH7PwjYmdk4PynDHAbhacB36ML4zXg",
  "key28": "2g4dfh8xDnyKgBsQSXQqWF9HmEExf1n5DbRtrU2bENrYLmMyKK6HW9FFjyP3e7WnSdDRUzvcbrTXiWQvt8nhQYpf"
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
