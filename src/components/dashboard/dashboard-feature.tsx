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
    "5ZCKgqR6VuLty4xi3uDwp2mgYo1aGZUtNzQ4Qz4b1x3HrZ8ek5ZxQUchxTGcRMzVKR3EQ3yiDzfQUt6vyuzqnPpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfGd6YSLZPh6ys9F86bNjskRa5eeVSGduxX12krUtQdSkgu4Wz1K5YnxMfBMgTs6pdv3URbXE3ukk2giQdznWTF",
  "key1": "3e7d4TJ3gGLf656AJsZqEqeExJyMSMEwETnCUct3ma4EBW2FcaQkBCetkPNmmUJ4dh823925vdjWgEQ1BEfRCcLh",
  "key2": "5epxnwDXsQa1KNTaz3zpdg4m4zYhgomUyFMkDvn2afWZGeR2aUCpo9Up1XZRX7SoEs8pciJ7Xn95RWmqBCufo8WW",
  "key3": "2feozbqHHAp8NKsvBUt15DfVDUVk1v5GobxMbUifSf1bYhfTjUQU1bBFCpkhcD7VUGD49JNZ8LtuFLUUMmwdjAc4",
  "key4": "3G6PH9nfgm4RsuMbf99QvjLUu4Srk9KueE3n81pdmfKmuVYgytWgUR9Fj6skxjCjtbxs6Q5256mx5Y9wxFHB53rT",
  "key5": "55VZWwB59mhJu1zaAGrFjVWfb6apcNNGmHw82VaPqie29h6tieHvADmPPFYtD8iMsmsfUYje83MdKTNVwQaEAcDu",
  "key6": "aTdyPagXvo7rym8gW5otm4tpfKYyWjwzuMKik7GJ7EZRJxhutFJ1NrndHGqCkH7pjRg6SM7LuNS26Y64Mw7wmJa",
  "key7": "3ihXGiLTymwLJ6p7CGExDzGz3pAebAsVRQT3GFUcXfiaEZpS5hECv93yT9bT9a1qZ2b49uHfSpd5MBjC6FNDvj4L",
  "key8": "2BcYhiHxKHCHEVuJg9GZuQA4yfq8yNuyXTL5o4cQQbx5abC5jqGHGyKt652JWna8B5Bgsb2GH5AsT2jQXMmrnkjZ",
  "key9": "5ZaN5R4hacjsZTtMEKbVY28DftieyPiv14ysTvwCdZA2JPTpCNbEUJiGxB8Phm3C7PVpdhepUMXCcBEJbo5Mf1Vr",
  "key10": "3vRhhHzf1Y6ojQ5FTXBEGvVNeUx3ZtvQqNHXhCH7n16mhaMEk17BWF5vymeJSgj5CHwZYC5vfetKe6xDjc3KHU2x",
  "key11": "4dA9mXazp3bYDHR7tAUB2NbtKStWguTJQkMAj4o4AQN8TRWh4NRLhsdATzzipcWCzUPfndWQfUpYvhvkvGur9mR7",
  "key12": "57NZhYeVaga1z26wkFWroyHGeLQmdympBe6XHq9YDVzE3d74rCGcBJaLd4LJ1BzfjjBSrzs2PiLnVJdVTKQ4DWy3",
  "key13": "2xBG1BiMpykU49tdijz3cdvtsvJC48KhVqXipTfBx1EiWjLaxyeQaHUWPXbQgY5bE8TK9vJRHxXgqvC6bGaayCin",
  "key14": "5F5AWWXSbyuPQrzHzNnDLr5hizgMDchGyNBGhLGmawa99S3cDxChTTgYc9MibLHqEEgevsLyanpP193ZPVSZBV7p",
  "key15": "4opM6JhChKvixVnjjPpmi8nFvEAoAHFSKhMu78j3r8Q19KL5yeKvepy1yrfnJjKCVLmNq2UjeUESdzDkfYLoNQ3P",
  "key16": "61H6oX2CDfSmMkoSiTY3vVkmCd23ao95CiiFVrt6GY2h255aKvUuk2rmF3MxUk8iVwZGN7zGGCQ2nh2jisFRyECB",
  "key17": "Zh173pRa5hRHhLA2vR1rLKNLmKtchixqkZD4DyV1eeoZhhPccPTBNnqtiQbDksKbXdAtgE1J2ErM8DHRMrtMFWH",
  "key18": "5n6HErgqspJYhx8a37ydjmAt73niMVpsaWGJ4y5uohM26fw5BCc4NDYJR4YhcBxVQdFewGs5sCEWYhmHhinBX4v7",
  "key19": "5oC2PWxS8zh8x6nfjAgEXknazdXmUTEtibB6bxg4qWC7QaQLZDQRdJ4WJqsM2WBkThZzgLUpYG9sT4A6cNhCC8eb",
  "key20": "3aBESSNbYZ5nLuPXQg7X2PoHoz9f65so8zwexaM2uhaU5GjdpStqy7FZTNLssKZsmZvrBe5sWdVRgs6h7FQVkakq",
  "key21": "4qBrYZmfR1c9Ed6DkiGwzQCS66hvvCV5sxh7r6vbF1ovGfbw7LHU6PLE6aAMWHaSADz24UGJp6xj8n7FjKLvwCxV",
  "key22": "5tdJY3C2FJE7diqcKUVSj5VJFymu3vinSpuU8xqpq7zbq4Lz3C9UjPerHrVBE9zfvcRsqKQoa2bD4YAm1nrp3wsp",
  "key23": "5NGaNid7JdvbdiqdzxT15oBYPLhfy8ePtzjV6G3XGQJjqSA1bkGzRbMW6BaszCMZ7fHUrhLLmRr5FBgLa2h5zWmW",
  "key24": "44dj5ymGBim1M9QfjS2i9vjAgAicqjt1Zob4VSgrPXymECamzBYYho56vu6AAWuAA59YR2tV73EUiTiE1KV8NXu1",
  "key25": "oqiKnNJ9LuvFGFRGgJTVMCc81GLQQRAYut8fwaCJPUuuSejDjc4Xrtke6JZPETbvWJmZC3YWNeofa7wn3DPFoER",
  "key26": "49YwfzGN2XVuRphrDEm3zqD9h6hY2krxinueH1McsBPbHinGmyt4SseVNnDqhJyCfWHmMcjzqLXCxhiirRuJevRC",
  "key27": "fqQhz3sKufThivXwsaXy8WGxGbvkGtv3PDqbMHWFNtYz97wwUsJRmj14DbEyU78qozRAuyZTVuKAgcpeDbVernN",
  "key28": "5UdyoLLV8WyeiUGcmKTRrE35gtymtdb9C5dScpxYP6DoG2NxejuYvCjTv8AY1urjAFqwMzBgZZMdouXsqePKLWQs",
  "key29": "3YWVyBtKNfAePqHy9dhJKpBjKTrkJ3M9yEYWArQY2nXBtQCJrZ3dCHf5ZrHRoayG9dyJZ15wUGpv58tag26g64qF",
  "key30": "35HJUkSYv1kmbXZGPcZmT8ZnLNEsVF4n76sxjioNXmPCDviBwZ6RBQTRLjzmAJMjnjLQLDUSpiJxBKjDS1duNTbQ",
  "key31": "4Mxgj6CDDfjoF5wHmesECGoY1orJRTjhSkoccpD9bvYPzYVxbVFq8k3qwBR4Shzhvm8RK7UXj2GMxHVrJRdhqWuD",
  "key32": "67P8EwuV3oWcw9HhNYLn1CJGBr6fUuBQXqjB1MYUPHjccqnYDeLcpMvu3wnnhuL55JReT8MRhopR6mGsTBNSzgMa",
  "key33": "5XdNU8yZ9ameFmDw1PsFMzSGVsYdX85zS6SXaEjepJBLZEMaKY7erZtbNRPrkASULVLYXpML5FkBeMRzRg1PhL77"
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
