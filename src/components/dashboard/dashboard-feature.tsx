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
    "2tcJmaE23iRg4Ce6Q8YpTBbkwUcqpre2hVj5f3AcKfZdBJK4RWPcotC9wV7vnFq1PAkUezZv7ygVkTWESypXPbmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oTgRiTNLLpLgGRbHZjGXQrbE9pgD1xaiMpoxsZygLdDzCVMLa7CdLRmEmpLWFWeCQyEUY9rtVG4ezinNQhcSxFP",
  "key1": "sMqBzMkFM5C8MX3Bx7ZiiVSGbkPVJoDaqEYzikqAEJ4mAU4sZEGh2kybphTkYcLTKVEsoxbXU2G8s5N8Go9LW2K",
  "key2": "4dTeyBQGdrnXJkNuTcAUB6mwroSMq3EL4yEwuyKdZPivoZLFovD8fwFcJxpUEHefa6ofPi8JwppzXGeD4NxV89bS",
  "key3": "4hBPHLrzT7dtiHsNDvFAM48wfHMiYSzMnWYYdKba2TN1wgieDVcw24XQcu1B5GY4MWyrgZsFf4ywWrcWwi6qTZ5v",
  "key4": "4aT4ikUFovemRdhEAPtsPPJTXHopDuGpc8VrRjiqT58AQVUR8CNeKGigfBmMpQVdJKYHU4kX9iyrxp9pLEZU7Uue",
  "key5": "4gqk8PtGTJcYopf7Jj9gRgjB6WStbVArrVY6Lx1jn8wCesHif8nirHCRAwDdjE2zNSB4iPq3k4d5XoNHVWWE3Q2U",
  "key6": "36bho88R2yj7ZWbZhs4sz5kr8gQkBQzPaStaKrxU83hgDXbxf226xyfsT4RHyxRmTM3vrYqF3abQ2cepgyVTdDEG",
  "key7": "vmJKDomfvzS2zgAPfR4yyH72R3FhSGCCgXa4wFHYYAC9Pvqw6rwqBMtm5jQZnfcJJEeKq3M8V7UF4tSdqQU2shE",
  "key8": "4dxXmANJ6ZZd5bN6HAmF1sLZgQqVnQqbbHQS3YtmoT3vm36qbP1M3NbJ3D3QbeaF7dPxsgnBiajfoTCqZc6uJdYM",
  "key9": "cnkuD2ToGdy3oKWo7hgztqxKLFCdPiyL1s813vrj2AUNVgLVJYdzDW5YR4EAqJs84vEKxbVUNYmMxLVKDM7bEXd",
  "key10": "5ysgBJ69pbo4pcNdm4Fm8D3CcDVDK6kDawGGeKsFAQJWweLAsVvxUcER5tm2uGH8W5XaGXupXJZ9iMrw46rsyS2h",
  "key11": "3GSLrrDS1fTCpn33TNt54KmyiNdzGeow8tUQYoLn8gEGpn5xZhXFgEszvhAcMsp3SFERbRbpDkXhRj7vfLUpUpNG",
  "key12": "TMkgNKtQxC9FzVsob5vH9BxsJ9x8uejewSeSZZtAzu5DJVT8Ls25aReYLAx2NLBBrayYgXTz45sW75UsCaU29dy",
  "key13": "3L5VERW5MLXnWzNXjB8NFNWq5Hcvyx2wa5xho2Kwy2SpNUWbajhHxNR4WTVxF86j7hfbNUBBY4fwWbMHEBrsyWTn",
  "key14": "3CMfKxoXF4LBYpaWXeQWcSQhCbHQxBjieR2hxi9dRVXL8aZpuWX7G1Pce9sgRfMEVsELdt5wdzZ7aLmTZo1QzruJ",
  "key15": "4Qq3Sk8Bm9tBuff1sjuiSXsJaVk8Scmst7Mzkq1akL8B72XYpxUKANy4h1n6GTk5ygqaEuhEbTw9Zu7P5VjjrGoW",
  "key16": "2vtFdt751PijJgWgD8ieaZhFzDqBpde6JXCkqqJ1Q5J2SH6cb9YnfZttnoWAYLZxeJZBsMXSESFCpiwLJUxwWQDs",
  "key17": "8UytZ8HUiCDenw8aKnj4uQo6paUgaCbNbRmcwLe8pLa4FBBCZjgN266tDjhcUMWwm2mus2YAuaJKHJJJ1FuFu47",
  "key18": "5tE46kU3hhRqE6PvKGJnkWd7LZynvjGx1RG3FdJF4dug4eNNrdcqd1fSfq46gsmasG2je6CgnsujCGpZCX3WGt7E",
  "key19": "2fTVsBrDZoJ1dt61zjMqurYA7ESL6D1ZCUK4FRyhgAwhJHbF9zA9wBDSh6JACUPiA9oj3pga9tai7R7tnrXgggSn",
  "key20": "33VELk3XdMgE1rom39p5BJDpPXaJt538mYaLnN2FHXmhnrKGQGJBx2aBn9VQnLvPTqwsyeqwDw66qDVX8T8r6L7r",
  "key21": "dpKeXQjyRgCXsqWNoMQamFtx84aVbEkVvx2tZF7zS8qZEuQBmBNDHrsoqPNZugGQtaEfs9QhdXz1pQfL65w2xR8",
  "key22": "3KmtQWFkmDSoD8f4Sjd4fWUzdEFa9YCrQ71r6qmGFpPvpf91bjJNPPW1xhZX6C9MziUZRQNGqMzWkkLcXjLAQ8BG",
  "key23": "YACyZ8hVGhSWgaWTRQdhUdNZwRMJLomRbQVPK9HQaNEJKayn2KDSs8HrMLXCazVAW3BCZPuu9quudp4rWppMaav",
  "key24": "3RUUJh22cVceoUrUrECi6MerWwv1xrCaVM432pscbDEF6P7M7sTGivMuxFSm6QgWJWzuuBsQ7VBTU25SNVj1dDrV",
  "key25": "BNVLYsRcKE8hW42Z1gT7gNoZJEABfJMUDUcyo9X3ZyiuxSb8b5dKKLwufSmjcq1v5sLQirYbowUP3qFaY6g9Ef7",
  "key26": "4JiRFei8sua3QKqjoe3oRyoEryAvAoNJgnoSvZAs9f4FE6jJbGMfi3TCKrtcUY5jTazWQqVzprxtevfbwEUy3f6f",
  "key27": "3RVSJhnUVvwzFvpZYRZVCTvSWqvrRMg3CrovTR26agFmWpuZkYnodRs76QkFaEwRAdA2gQKd8CuvQwrZucSwCy7j",
  "key28": "3NywuuZdsN8JhjWgnPMVdRjT1kfVLufzYv9b5EBqqEzMbu6Rab2D94VwQfGTQJrY5RjCjfEAhp1ctej9AwvYNMt9",
  "key29": "mZpZ3f62KGfR2s65zeCdBaGWXgd76R3yP12VJo3ehUvQZsnicTyGPaKvmq94vqA3LKEGhfAvhw24qR8LqhVqHoo",
  "key30": "2VpcT3YBrAjqnLaR5Vwx3KVR3vqW6ipiwL3zdhA4qfDGCeZ2PvrMZMT9x4i2vUZWK4TFmgu3W4cKa8C7AAs32owB",
  "key31": "3CMWZtid2psVZuAY9PQ3iiNMbFVhxGaovFNhEJBX54nV4nxVgo84uyeGjXSoWiSCj4ceQgSy4B8CvFeQTzoAKdCh",
  "key32": "4e8HUZzrApUhgqP7ARUYbAiNuRCKyCBYGKQPUorTBjBe3z4bRqmogxgNUUS1279FeW3vp7g7owaVHnKadpWh5qzv",
  "key33": "332gTPshKys4tBwv7bQBShUrspFtttYgW7MbMWMNbkn62PRx7A6fJK7kZ4hn3pH58rJf24EoRifVgYECNBTCWFsy",
  "key34": "LpmyDzLK8une6XbGDEn9cfAaSPU3XXov1uiamYtPjwpvKEdt9K76DqGBymZ7xHiFWM45mwTvSkmmALaXUzhAr1F",
  "key35": "58qqReWGZBD3VFCp4Exboj9f7WyPtbETPcRMB5r1gnwWTQsK9jZtzMPfRzznxNKGm5233BmU2hhekUCrLCFEZBFd",
  "key36": "5Y837kZV8ibpMVXu2t8SLaU2nf3kvkHSthPHtwCoV3xtcg4TmNMoEqoDj734nqB2Eed9BihFsUkw9hzdsLvcwjNs",
  "key37": "4ND14gRF6tjM5Xw76JwSZ7DD7iLWVTaLwAKCSJixAGBD72rhpeUyhLFb1So8u2xaAskMYG3s4ypVjX4Ydkr559Gq",
  "key38": "4PwyV1eTCZNDKm4m7wAKbobj64bhHSE9FxnNVPQ7F4aDe5Uz4A7TZGjbRsxr6mca7svLeB1gKmaMrsn9TCXBmoF5",
  "key39": "42ZHavHyGii1bnDMpMVrMr97Yh32qExnScXvhjMPnEskp27nPPB28coab5jAyFjiX39N5ZckVTgtGFT9EQBiWFwG",
  "key40": "5NpTcQRbi3JEdneLure6PqVJUeciTuyPPdnxyHi6tt1Lt2KAsvWemtxLEDagRRFQgFxa3QDwRXu7ChssXfgSuX34",
  "key41": "4RxRrDrbMeSEWX1pNCiz18j5HFLosqYdy1cvnNP224MqgsGH5eFFCiSgp9rnysPxMM9pdqvcapYXyuqgzB8vWmhz",
  "key42": "5eP4ukWxwv8Bf9eLeBDTv4PaW2KDDEEdq7mhBnRoJsKLoQZJnAFzEcPpkw9Wjs4ubE18dzAocjvX3XDaMpH5hatj",
  "key43": "3MxRe1tJRGyCRwbeDrfNM52E6c1Z6PH3Bo1EFaH8MWHt89ahG2Jki61Vk3P5bFohyJECLZLVfqHEryNccBvwH2qy",
  "key44": "N5JHH5LUBS7cQvw729BxsVfAbNMVZdgN6kj99E2ciN83WSEpavDAr7QJyL1mXS5a3sZCTHtGvkEkcmh2fLiYNnw",
  "key45": "3GtFKxH1UHc54xkBS2wZEBf8hdjqwfWd6wAhgPdP9k8kCgiiVLheQmgMXtxEeUhdsnmQT1eHatfSbeC91JPsfhBC"
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
