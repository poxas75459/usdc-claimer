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
    "4MYMm2kuhY9e1cmAtf2N9EiCFcJ9878qSNThkFFGLiKkPXt6vHFZqv1PU6CrZjDuZd4W94bH2p7pan7P3emwLbcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p5T7u5X4aMYo1Dodfsn8iUGmLhuQd1UZJfUt9PtD38cjFaozwTXzBXcq4D46unKxrjNbSPACiREhe9VuHBz4vRy",
  "key1": "8x2z2ZcebynNT5swSRPdMmKkQqBMUWZQ17en9krR6jzfgtYmWbt9tn75kzexKh8DpGk66s7AYtw5Qj93Cvxmp5w",
  "key2": "2cbokTLxYSWuEfFJgELgQ6gaMrZHQaYXP2d7mk4FmSnyVpTgiqBJHss7td8B2fSiN4uhu9bMLNMXGZLfd2oKcKjv",
  "key3": "391QVMAGu7Tj4Ahx4tyV9cnptQVLhE76844U6e9u1LyYZgEoEfFuG7oEeZTXjBuFWtx2M1xNNbfzQ7cWPddxSwTU",
  "key4": "3mCPeQ2tG9tebrsvhZHcNXqKqnCfEBScSD7SoejxC9wWb97swKP71ACNJsQVifThuFGmC1ZXoeZwYNh41EXmkW97",
  "key5": "5vQB4ZWFDKjWeo9bcXPeoNDK6FnxsHDbv3LzLTSwbsWjzssZvynikyPUX7LxEhoMgVfhvXEgzcERPAz3h45WBDfo",
  "key6": "SUqUD4SKdvhz2yHo969Prcee9LGnV8HBuEW9pD6YP8hLM25zz8YcPS8XtqLDyL51gJ9LeUhQpT5f5mggqsLWWDt",
  "key7": "5PMg5recLnfkQ9F8XjSLrtTxmcGAkv2FHNLidVFg2sVCivWLsHqMryKqnp42ru1k8iWnDYKzpHeVoJ1SzugRE5BJ",
  "key8": "5mAKAgosUCw3b2rrCrwAaW4uLLtftFfK3XdNqnvgq4Ggu1gHsZt2Ypm6TFRmnTT79qY5AcfuB7eG9f2DDNkYHTc2",
  "key9": "5m57uAZHcAfnfE3Eej7Sd4FGRSyYGURss6RxYXU2P746DEmWzXVu6FZLDBNNFwctBh5TfR6D47HSWqys27HLmhrS",
  "key10": "4hJc66eYKsYU1Q4b9vko5dA3gPQW3NJE2r9VBwrnQZoaZNHCP9GDariUKYxzk7VJRoSeRzfajjdjtDW3r2WWCK2J",
  "key11": "3wTASmo9nkFpbCmZnSnyvXTqACeuzcB56NVwNxaHs8jCRPoRnXpQ1U6wzk19Ydu7ANcLa38sz2Ghtyz9RhgDVSzn",
  "key12": "128UDnJxRZMgr5xMLZviJjvaFmuj9PC4gavVswHBoy9dcHChhQRdWqz8pNbRHFhdTxeKoCuupYQuQYDDVzqYdfSY",
  "key13": "54hTC6f3xZohr3ixMrvxVAuxSyPyK4GdQk4zSiALe9tQ47DJyioKqnpJwKTKqR9UYTfjXimoyKVUf6s4hZBCWZEf",
  "key14": "4LmeNjuqFU72bukeqfLFLsCdz48sWzuQY1DTLtpv6Vb2zKRKAoYNeMM9ZMd5BxRfRsfaNfUbakwCCeYPookxdA3L",
  "key15": "4aQ66brYQxiB57RRdUqG8nDtzZ1GyRACoJhHtvBJP6UnnFkg7hKW7TeSn19RXy9aSM6W8wVGoYhQZVqXSARDyTn2",
  "key16": "3FaXbkrsVyZZd3sdMiVKRLRcFqgP7JJtQvxgSHzhfNnZbz4nYrbAWQRUmYTzQ1xSgcSTfkikwvhfDY7E7TgKbHcc",
  "key17": "4kR6px4qKZjyZ75us8pxXEJKvaTDs16Dnxx1peW63kw4xoQ7FEoBRLcXvtjPGVY9zXEQCFV6iPAhVeWXGNxBjhPe",
  "key18": "3VkzvxW3KG2GSyzXwtuk7MFNNe5DUbQY9W3YMZnsWoetYYsfXTrbkvj6SAgJda2RCaqMANjJwUFRVBtQLqxkNCeQ",
  "key19": "59xnqBdL6FGoNfg9ZnKoZGpskEJXecKpypqfRQtFK9tHPqettm96XjndcxCgmRM3db9B8RzL5GDVKXrjugfPkmM5",
  "key20": "4Kstks3REDrcFLojVb9B9Bb96SEEnvzBaPqeuQJKcEbMcfU6uHQF4W4wmXAx9zQ5vNxhpm6FmsvMpxyyzPsuCpDD",
  "key21": "4PPp4tibsd9RENPrtxuhhde4sQUHBuZeEUuPrXuFWurGe73YDSqw1ZAZa1oinFGHn9vGFdLxs4FoztBxF21sYURP",
  "key22": "53U8eaoaPVhDQEovbLBCEEqEUWMm1m4eYXHxAiUS6oNSrVVM7zWbZForVaqekfQPN92CjJjxVVd4pszJP1Lze7Dm",
  "key23": "24d6wPCxowbvRUZbfUk4sqRk2Ew6mYc2Ka8E6dvWsZYXTVnGE2ymbtdqKFfzfvCTraio1sdA1YeQ6nEDQi2tY5j5",
  "key24": "4PZ3qGcDUG6EZH72au3BFnZeH7CCPSSDb6c353RdUUtWWWFNvBpNB12QpbVPBB621WCrQVWPuDQiJNhHomdPgXCC",
  "key25": "4HkJ6uTZaMaUheFiyubVpUJdRmddDYQS5YtpWHfuTAkesF7ksN4NYka1x62cR4MngyRaaCizUFKC9toQxSJypX7h",
  "key26": "4kLALAPZqKbfMe6cX2jDSjW7T6AekCowwYS2RjzEvfp5B1B2qzMVvyMn6iVXxARJnhnos2ZfacrFgzwstN39n5Fn",
  "key27": "YoMxmVjmn71x1xEZBcNToJfpYsN38fd63GeZCGAyZAhT1PV1YpyK6Bgvn4Fg3vHtUT9JgbeduYK69fUHsi2ytEg",
  "key28": "2Zrkk3GoEy2kLkT2YoF5sRNKynPvBujy7naGAQVUEx5GT86NGGebHvSHXQFVbvrygYZXcrUZh4FBdbHiLNtfRTHk",
  "key29": "21u9GAv45mPQrE8RnVCuzTFREn5hZutL7ELWYFceQxDBc4A6jestfANBr8uMPAEFXUJu2i3xUBP5KgMWo8S3yfN2",
  "key30": "4xuxo167G7VZUaxCmgeZK2XopWX7vFhdCMm7e7BWu3BSBouNYs7UXS5fD7681RKumxEHt5dZKr1XeQTNRCZYteoo",
  "key31": "64abSyKMFuKyxnLe84FmfDumKqH1mGoE1KB2XMRDrsEAyte5cUbeMiLDDZj5h6mj3D1PGw1G9JcR4NKT97bWZA2Z",
  "key32": "XSxZnEpXi5Dtm5vPc7yC9BxvS8ghubFAu5mv6T7RGJwjxTTwzt2Q1JCpWxsiTURGrw3fN7SxZ6EZCuFJ3f5CpnH",
  "key33": "4sbmAtiGgPy6ejv9VhLuLqgKNXznzuGcxqtsQHTUztoBFyaxXbT1wh83bHs9tnRWCeMNiwQT5whFxBsqWrBVxB9k",
  "key34": "4ec5LHexch8itRkTxw8YhnrJtpmbcDxgzYUAKntfSBc1yw1LwY1Uk4qkxM2VpdhPhsBRWDdt2E6izbLHEhEbuPDo",
  "key35": "3SpgNFzorVXgB4mxbRHqcNMZZwQ1nwGThytBBSywwum1NZ5Nt6YmFiFrtpkgYmH1EHxXu3jGqhUtM5At9s8CFHXk",
  "key36": "2FqcvavdsEMKhtgYi4ruzf9PyWMGHxV5CUCBRJb32Hw8M4ZMHicuBKJbJDfgLMg7t6eAmpphLEU9WL2sUQ92n66N",
  "key37": "22UWT172xDPovgShUxUY294vJypA9zNg3qY4qztanGTyqQfKFsiPdMebqY4Me3EHqoST16Yj5snfpCk93316KJvt",
  "key38": "3EoRtBuw59Eb6kxqPR51C7GDpujiLCVAYb1YrsYQeRmZ8L6HtMZJDoZju5tAx9TasfMY9jnfw9sfyEyDPGjVQUP5",
  "key39": "2FmYvh5Lo3gxnT24crxgc5EegqoFpMEQPKrjWvCzcLmFPdJFvV4rc81tk7XnXYWhCePp7jRz3t2sP6yExhbC2ZN2",
  "key40": "LbdpPMSZqJ1auJYuCxxVg51mKTvyMni8Fa4fuMtd6Dq4HYJyZQnoXa9XSZYzdb3M6ouQQBrwu91vSF8VK4K5dVB",
  "key41": "5Emo5Qh7ENNMrtqNBvyQssjQtoEgQSppd7jU8sCxD1vcAn2r1UYx2YjMxgGpppRxd43BjKyNhgBcZi1gbyNQhAce"
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
