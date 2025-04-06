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
    "4SMm2TezULeE8Bp87PeG6zMaKrgAATPdbU79gNGc9EG16S4jsrjx4nz1bhPixgHpoAqBvbAiJtMqaTqytzV6dXgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgEPspHfL58ZCxcF1YrBUEwCFgNpYC4T7MZVAecBBeatuAd4LwhRKGqMkSwuCbuAN7hdw8vHHzsYovHzgcBy7Aa",
  "key1": "2y25BhULiw5GPkydrJXRFKpXkA5y5zwVYR799hbaccujx154N2zcb8vEUFVrSvAr6qVFpLSDKo62sHxzRKJ3V9jN",
  "key2": "8u4jyWY1f1huAXbX6uh8uW1kb25EuCuLF4jb2RWJAQEHtVedYNfR35fk6by9FhtaueNs8dC9P9Jn9MueZ635oEM",
  "key3": "5wxjzBZ14byyRjz2f4iwwqisJjMujuESSHDjA5AK53B12KaMR35QPE7Vdr3aqX84iV8RgJffNEjDvjrZwnJsfBTZ",
  "key4": "2w9wVQKMSebh1HAG2eRdHdtVn3ogj4iUi4a54P6tXxLDM5JTZx6eycJGDjRHMoLEGp347a1Y25a6UdaMEaPZsFeB",
  "key5": "eDUdy5g75dtNdcxUL66j3pnNtEDjhMYD7eCazUZzSqQ1MPar82fR4y4FqYWLCJEz73yuuPodd368AcL7nisrX14",
  "key6": "3CKJepyFcA6fDzbMJQ4RPhxhHFrYq2VhHQD3xy93ommRFKXVGzi38TSvo1HdTsQ4Z7xbHjziUx9YXBgUUFdjNM4v",
  "key7": "3gFXVHXACQB46VwDK2QHrzb2kTotPBa2Gz8tuhmHXdWqrBr3K5NPjgnJSr52NvtwfjnNWm2FRhMEzn2WUuU1bqni",
  "key8": "65dvCx8uG2rYSnzY6sqtR2iMYu2UAgK1uoZwjGNuMaLhwnLGUXrmiVjCTmwmr3SqGWpmqYnWVyuoQAXhofWYby28",
  "key9": "3qkadLVxs7dJGLw1d9kCKDXCRNrVvq82nq3SwUNpcB5YxKimEoRtyzZVDotVxjmBvMBbQGy63UvuyELu92Jduf7V",
  "key10": "3BALTuChmy2wTSCEuQMwoVMhMn6yCp66DENz7KQnSV2e76qaMHU1PbqDTtzhPnjCk4QdhpfjGUyg8UMnsrNzEB3U",
  "key11": "dPchjkHJZ1VSmV8DJ57gJCrvawsggwXxn1kKFLy2dh6c4wWnZdyRahit3pjWXWQP3uhnEdjCAUXR8BkNaSNzWsa",
  "key12": "4inD2aLb7XQiC73vEvBvbWCsbzupt2dtb1L45XEKVfELzswdSAnxL2moZ2kpUAN8HXAkWTZKc3v8ov8n1GXqeQZc",
  "key13": "4gu4XsiBiKVJes8cbYzDFk7F8f27YeiRkRSyegrVMgNwjikiKYaqHKc8AnuDT9VBRJom3VPVsqW3aSXJdqCBYaDc",
  "key14": "2g363N8eNwrCQCv6TXGEKJ2xVtjJgV5ppHmbUqBxWgsb5QYNW28ZVKBkV7nHe3crXhAA8NWyc3bxkGitGf9LeYKc",
  "key15": "3KURPTFCKxwDaGSRibFgSe6KigVJxecYtqr8du8NXpmaTascmUKXGDzB1FfDvshruYP8ZbyYXewpPeGjaYMqHoef",
  "key16": "Dk1938cLXo7pGNjKk5x6z4doaH7yWJc49ubUnufaKZCmSPWcTszsZCLNAcHFvjtp4fZC4h5VgRDjeMy5kuj8V1P",
  "key17": "45mFxru1KEv9WJ3u64jy8rdjnb48bHGxGSWmqR9z4UvAWBdncaF5D3XckWw2aRcD8D6hqPnWVcSDw35Zm7idSjSu",
  "key18": "4HhnkJSGcU6RT7ZZ5ZmjSGLQU5K74PJwFWy9HEwdaaSJG7vk6taGpMHVS4MJUHouGDjbjCaevk6qszDkYo3P1yn6",
  "key19": "pmiaRL5bbFqPJAKCekAxGuLzsAaTArPg7eTH41op3spdTurd2LZW5ce4kSb2TqLjkVaAA8ZdD4jD4Po6PZakfDn",
  "key20": "5Dmsui8aKE4rKa1Hm99nomz9vPFoeAemx7W2FpzExR5w3ZX9CJ962vcy1SqtZAGXHnZLQK1uejmC3i9bn3HqQZ48",
  "key21": "36yB5nHeSQ4Sr1e5EfuDGGKCW1QYQu5dvgRifXgxG4uQyGbxkFv291Xs5ndyEitKH1SXNsM8H4pJnDJEaLsuGUV9",
  "key22": "hnuo8bK4YrVBWcPiaGYkPkTqn2zK3Q7modmkg4fd5e2oLMVHfepe3powTSWqadyJszx7KaSBB7YTKTdH9UCtHmB",
  "key23": "5WmbRPbmp7F1wxdo9eqM1yXkqwmkoWZLRRqKV2gwDgus3dP9t5JqGjHoB6sgkMsz83LS7oozuc6vRwqUvM6hYyzw",
  "key24": "Zs7Z7kTGHZDxx8Z8LZAebyaBxVzmsBpGLQFFdBRvZhGd6a9DAekvaUMWi5f4bc3KF7yGh1DCUFWWzigVwK86k4G",
  "key25": "27JUDvoR6nVijF3KbBfWFwq1ie6sWbSgZExqshJQRD9ALQmzoRNgkyEdEujqvN2WDP96RSEeURQvRMkTXBpoWHmW",
  "key26": "4TBj1F6zjoGEjoeXqWEjEyZoA66D6MjgSkXsgC3yhWNCJntUCqRcWWyeyYDv3JGKVAbfZ5LheftYQ8rphnwURVoE",
  "key27": "4UJXoqq2DF7dHVZWxitDeFWSm6hAi2uXUrDjdjz644o45QXAtEfnuSy9n6rV9dH7bLMsFjmLBRhUPi4jmqStgd9E",
  "key28": "4b1UWf8YiWFWt8vszfhYy7SzrC3z23P95hnx4LRPswdaZdPeB2EbVygidFqwzf6Wgkrz4tnHNDK28Pk3hVXA2gqr",
  "key29": "cMBGFDW4NmCsvxazzX4wqGGmf4jL6MHYhVaAJrr9zdvCrbXkW5N17q742xuUgK2z5a7ADbx2mp4sCrEqrfTTAxh",
  "key30": "48VnaHe1WYtQVPyLHLgSxnZBYivE3aQoJFP6T5271wZDT3zLMVWcmXZeF2B53ApoPGqUpkNGEahg2Yr5octKsfMt",
  "key31": "2vyaeogWnL4myBad4HyMcTkLit8oMXZ91ceZjQiBjFdhXDrgRQMU9x3AuGjq15v132RXnHt96JvJWHvH13njcndm",
  "key32": "5njRrFz4RFAShqWnvDnR1SqDwH4GZ6jJY8ybdGyxCtWCoejponkQbroJPXNwS8BwPsCDoeAozBJqXD5JA4zC3oE4",
  "key33": "2K6dNVGm5D1fKQaQdK18CCJpTLMfQ4yDwvV2FqEStL5UbAASc4qh8WWMkt1KHqoJhLtZMw4VHxWBGge2gT6D1PiG",
  "key34": "3YYL3nPeCkdp3rR5XqaWZrQwwhANCkTZhSFhCKUcyxCcfzG7ybhNphnZDFB3qZ6AVoZKBifEkmDLesCohsJhbKZS",
  "key35": "4Wbkjok9LkPggfj7yzRJhAUBJugiU8dQBVfhjj8m2tbBAvKoqL5awbAKGdjxbpzAqAQnoNgwC8cTY9NnEXgtC6Gs",
  "key36": "he7BwpKo72cdHVVqMs55myxBMib7TS1mjMyvQT4BRxLoJCFWhZH1eg2MguHjZuzibW43qKDjT4nBEqzZ3ur8QUv",
  "key37": "49TeMKw7bPBrbZn5TZSpmdoYNprSYG85h9JFapV7vpuz2cdVQJMB3L9jaXigAn1y2mv8M9RtwiZacR8FcC3gbwDm",
  "key38": "BVQ4DE9zGTZLd2sA7Y8YyZjZXRkMw8JoeSB3sEdSyimezxqL7eC5BZScZpJAfdM9kayzFm6F3hGv12tExNKXjS5",
  "key39": "RGVxa4h7e3rG8q5QdxqUhXtP381rxjjMLmGH1RWAoyBJBcEAtk8c73uKY5kZPzAF98NHkyT7Uj3wRWFmjD6L9Fp",
  "key40": "3akNcqtnqp9EkcNSSEz2p3tyjB9qCNsPgyq7MEyxd2oZ4W9pcGKQuEnrsSwKLdnQTYSPsirgDUFN2RjWdfzau2X5",
  "key41": "Aj9chZt9vbevuiNxBhxWif6oVcrYfSs1VDETjcTCtUvo9MoKbo2kBCAVwMmxK48ZZaVKo36zmLzQ1Eoz3p4cE47",
  "key42": "4rTvGw3NV4LpjP4JkcSmk2kP3CGjWu6uXFfyKBsmPihzvGr27D6u8kGgbWSEjtM8Pmp63qk3ZDjkwDvkC6QGNLj7",
  "key43": "2TiFDJTiCb5hrtHJJrf6xXRKPRooy5bkEJGdx13xUP7r1QM6TfZn9sSoiWq3MyKk7HvvKYLkQj9XBzCgEv4rYoLz",
  "key44": "2E61vt4GS7RhQVX4LmrkoLwtastySqWYQsKW843RQKFDCRVXENucfxmYeD6vF6Zgo3VDkQgg4KaCJtB9fm1bKiYU",
  "key45": "3c5YcxhfjvbUSamy7ojRroMFgPoUbvHeTTjwSJtXF4RZujYWwWVjdtcE7Td4ZMWU7k6NyCG2pM4eqGtxjheG87rC",
  "key46": "ZTG4jLyETHXFFX1mNE2D2sK7CqQ59XWcjj81DASnrBb6453vkPtB9rF2nFWYTqxswK88P2fUhKs1ioPuwZZAaPh",
  "key47": "4PBtxqdfoargZSdHEbjbKhpkwRgSGe59AZbeFq37sv3xu9u6MSvA2wAwtTgwrwAPEyvHwfeGUcWBCZJvKGko3M49"
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
