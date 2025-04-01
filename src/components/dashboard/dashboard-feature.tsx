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
    "5uZ1PLTYsqcoTLv7V6zGieJbbJxfFEuR5xw7EvysDEN1g4L8CThJzcMXHtR87MhFV5JcCuCNkNXfVjTeBeFv4Bqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YPViyjNDWw4LvstQ76QCPQgt5KRt2K7fKtJpNgMrCf3t15NBfSF21vEhFtc2ZLPMyZAbcF98K49Sb555ewpHTEq",
  "key1": "2gFyPqJzmohdiaGc1iVyFjcgEJTLDPcjXtYyqneAWrLyz8QbiHm9GwQAvyVJuo5LERGxLk7JZWaQUyn8vygwF32c",
  "key2": "2TdoPsPoJfeDdSSMVk5NztrNtgAspdgiAuUAVjJ52H3YgAUY9D53xkPHhHZhMHoAXn7kQxoTofUrZGcPYDkpayjn",
  "key3": "5CrC5ux1v3RgCY2o9Q8d24kYoaW31eo9kLD2SDBWMABb8LPV2zZ6oHX3mA2ebKBH9GQ5Lyebc5g19BEfHus92o82",
  "key4": "vbD3bmpe6jJAdj6Y4AVyUxxMPDjPdugn9DDrzaK5AuqAj18dfYucHedvx5u8KCvNbbPZScgSmdJ8Y8m5HaJueRd",
  "key5": "5cGB4QroYGkqt4HZMnW9DrhQedcYgxP6SyDJyNPtjPHAnJWpJUWUvZYdNwWTNxprSjVnvwDSuuzocXmSg5kkynKg",
  "key6": "3Fzr3NmKY5voRgC9zpNS178jjhSdHvxVxoVu9QjuZ3JMQ2yeaJfyftbHQyGNVANbTNNYJnW3edvZgq71Kovof4fM",
  "key7": "4YJp1vHyTorrZ2Qu5TjxfMxmXF3Vf4cxkq33UMWJj6BCmM6CjRRiwVzYwYgqSBYPxQHA4NMfMweyKz5Pcsaurg1c",
  "key8": "4jVSJRKhKvazAjRn4AJfpavA9jKah313ZCvhBhBtM1mLUg8RvR2TFbJstuknBqDZ5FFP8THHNvKivk8cchn1jbXh",
  "key9": "k95M6gmbjAgKfUKMyewijMrc3RnqkHmCpbqsgaBKfLWJ6sScffQquB863NFdDBfykbnxzXYUzwTh6JTrWc3DsXH",
  "key10": "3W5gGUaoZ79yVZyxYFJNcGvDcN9qZzgmbP4fUMy2j6NDxkvBkZJkdKKK67ZAsjDpxNnFsW9xSjdtU7VYVs79BJxU",
  "key11": "3gTodNJrad8NinzPKR1waPgSYQ49DciVuNc7f3WmUm9DJAaFPvoxyvXQ28E5CnWEj4hBieUdFAcuQ7rST1J8k3zA",
  "key12": "3A6iBUDDjJ3bbApWzDPHotpPEaaCjRj6TunH1cCBEgEjJvCxWaS5RD1YDT3xEAt8oYdR4nAwqS5scXGAufKetVJb",
  "key13": "2jKUx1dDQn7jXoUCUoXY4anXjY9XCKXi6b44DBmsVsyUn1PLbaKCNPFTLUCVY7GeeJRP6RMo9pTUM1fu9iwGNANZ",
  "key14": "4oEMPTG848pS2HWKRr4iBQ7moUxjEmT8Hxu3g6zoY5Sha8mhGNCzF24FDjn1A6n96ppmycHmHseLrEdnRZyWKqnP",
  "key15": "4tmwKwtB9WomYyC1A1wJVRLPcJdrpSzJuv64v4c7gB4dvqnvP18RFTKTQ9tc5Kfa8bAxReEGkvLkAgdpt4KwRQ82",
  "key16": "2VvNE3YuZq9jFmr73VSg7sBXh7cMA7FDuvzzM8YUt2b6D93TVECbi5NBgxZozyANjgw1VPnCfVzkiXkwTJoXcAvC",
  "key17": "4bF2ZUwTXhj6d1usmWjztQpVLiWcujGiQdS7E93yfKrn39YLKgHHbTG15rS4qxzjZJywphwR567AJMNFnHfZhhdw",
  "key18": "2zoWxderdcgkFRaQSsAdxjTuxEGSwNCJp91pFzt65Eg2S9QjPTbBeWYJzeJ8VhNJASjhLdeHJvqMcHPYEaQeQuC5",
  "key19": "2mHxk2yyoqoyfQPT4ngjHJ9TRdfCMj21rADG6CyXPwWA3L227jKAzzZmheBwutDAAFDpuqvBN9R7qv6v2D6LhCWs",
  "key20": "4vTqAvRWKo1EcvBNPUXEiH9ACgzgkFBMZd54m9e6MMPzDVWgkGNxut2UA8LXXdXbXdiXpY1bVq1GEW2G9NjLwkwW",
  "key21": "22X8A1MR5ktvpb53qmNu8mKd211WkCZF4xrd7fct8HbGN1qLx1CgPzmfWtGSpZGKAf8x2cAT8s8er14ZngmKKs7A",
  "key22": "5vStE1JahNG5bXGXMGEn8NUY6DHRTw6943pRr8jTqEfWw9DyKBLwSe6Tv1Wvta5JXrAkJ6MoFfnpEiQWAHaqE5HW",
  "key23": "9ZY3LWWgrTWuQ7yXWFWivGKKifAJ4sZ2jm7mJ2gNqMkLyhuFd7cckYKpxh36C4BjKgaizdjXhLJ2mVTkCWYwoYb",
  "key24": "27JLaHs6pm8QAyPa2WK6Y2idDDrqyWJwwAWQJQKgkjXvsYJy6xe8BPfmcL9GboeTV8vcwCZ27XDtJMs9ro9RD33F",
  "key25": "2iypWSHVV1Sm1QNRAsKExmVbSsNSwTvnXbEgCYbhs8Gye2PQ9Kd4RZb6yr4gGiL6Q4MCT3dQ6w5SPdwnWkWQAvAE",
  "key26": "5QnA8j4FjJwxQuY97ZjwYkf1XmTCgEsNUMufh1ccYBnSKva61Ms9WWK8MAJ3HVbVbfMWpJp2DAPMXCDieSy6Zie1",
  "key27": "srZQaUxRMi9iA77ofVwHyMcCjmtEWVsFMhtw9GgyJzgspudpWTGbHDwbrSyDMJckihAKikbwrTwScWtRbiVrGBs"
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
