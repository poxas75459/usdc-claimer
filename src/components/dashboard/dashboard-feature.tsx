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
    "2JWCbAw42tTbL1yZ5YqZgURLsQFh2fb6N879fAq2EAAqvT9CDNWejXHzTtkA1F7t3gCpjYwxck3ZgKd17b5Rv2B9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCTbUVN9NfcCwXZ41EMuNwiJpK7UfaX9NYB8AJ8cNQGAA56KqqLAaHnyTTYqvQ3aGbB2u6ZDBeiFA6NgyxuGjyL",
  "key1": "53rWWaRvEr5FU8CojXFFNTXRRSyCfmvp3ZArvYxkYjdkWNM2e13v8x3dPCgj6WbhUKxtqf5DRUGDuvXrWAt4rZxW",
  "key2": "46dV1z9r6gZPY28pRT3eyLs2idHJeLiqx7ymoDS8jaDZA2hMzV26xqzAF9JrzkzXLZpme4jun4aVLj2MoiNX2i9p",
  "key3": "4sBHPuYXqEATnHeCVsyk9q4fXBvdKxeDbNVHHpS3oiMTfeBy9akQCqbRiMM4BUxbPy4HBvUucuKNmJyBiSBDjtZ9",
  "key4": "nXSrd5YGfDoqxk4EmqzVScbj63ycvYtjnCuyRGWYMwHam7ERMJmEH3yyUSjc8eKiiqdZpMbJu5srcmHFmuQh4i4",
  "key5": "2RfNEU3wRnGxRzhXAfpeXvUJkTPJDr7KwThqNrGEWXuMaeU98hSCSB4fvg9PGkiDTRZQcwgqBvhZe6qyqjqG4nEQ",
  "key6": "29wGAvLUSffkdAJfgWrdioq6kpV1LS2ixNnqVXd9ksv5KJT22L4Y9GKXFZZTR3X8jvdes7KG9SeVeZUt4JFEFGYe",
  "key7": "5V1EwCc4WNzM7anU1cEkXXiabaiWWndinh1dxKyaLDedCBoqd37Agaa1sHebq6r8AjG17oy6DJW7ByzB1mCHpZfw",
  "key8": "5yEiMP49DzU2yteHdDDAo6pbeUxzgWpsuyzrA59u5MyeTEbh9SD9jPBp6vXZsvn6jV7MMM9pSiqqkTpNte5CzS3h",
  "key9": "61GRBp1bnDAiKMsQLDb2S93dmhjjds2hmXLF4Sa6hYJtwkeky9hEGvLwnHKz5s545aFQE1ZWAP999TVKTYwVMYVR",
  "key10": "4adMEt3Hay86B32ssCcRLkWtsw7Gqc7ThctUQ67CGMSMFTimGg8eW4zR9v1yhgJE4PkW3nLC9fMkFzChsDyzEJN5",
  "key11": "2AXTLftEti7y28ecd5EoP5Q78epoS8Q7C3oUxkci57kyYz1ry6qGBKyuBsBcGxmpQpvdG21TqLvFscauY4ufxaJf",
  "key12": "4p41B6Y6SjCW6DzJ1RzxG3SNPf45xyiSPMvcTTPDUcUgAb6kxrG8778S1J1REDeQpWyXPTTp7LAFV4R1dLu5RAHP",
  "key13": "4cpZt71HRjiagygP25jMc8bNBUL93YyBzJm8gwcEBcWxEubb7RQgroRPTbcMB75fpF5211o2vFFZN2uiXhmWMAJe",
  "key14": "3CgXE6pzirQ5r5BmGV9mgp78zbSKXyTyCar7uT2LULcm2GGSoiMQKuo6XP7cc6uPw6SPeTSLaRErNUSAZ6qm7DWn",
  "key15": "2V3tEncxsvcSAMbyVPczsj5Xx1X8aCR6gK8h3HopXhvoj7J3AVoANGUVyv1DVrtJQCWGpRr8PCnJssnRtkiaw1N2",
  "key16": "38yk5YDzhQTzsvJXYrSzPAQAt6Frja1QoXQiSLaLYBE9QN8T8oZ6BuAt3v5RxSS3Xw6Y8YE7yN11aWSpx2gPxLNj",
  "key17": "A2xjYyn4RAPFaZnPjQzu8uGBn8m1wRFSCtgHCeKw6btotht3nJtVUdYjqoUV1k22LVTSFHUWBF8XnppQAJhbtuS",
  "key18": "EaRkoNhsLR3Vr3Cvb5AZNVZdujk9jeDBYJsWJhRXogszBHHjZU38Ch7itMJB2fqTveDfoNq3f93C88bHXu5Z8hw",
  "key19": "3q6ooMJwp2LxeLke5dZ7eYe89ft6RLz32vLZ6nTAHeex2XxCFN4BhPUJWW81rvZNMTR9UvWfJbBgXrjZiARf1pv3",
  "key20": "2a5oegmYWMHHaPPNrwRRPzQeoczjaw9BnakMxg1SZCzwkLcQzH4RXsEVh1MvFmknaHpLVq65PTBa897oGzWVFzkN",
  "key21": "4yEmQbJ6XDxNbvjPF9ruVMZhjNqrebe945Zx3rmeuELwGG6kJSAREETfDHYkcw45WqUjD1tjaKDa4eN38HdQUL2Y",
  "key22": "3CtxzTUW8BmYMTMqgUG5i3DqR49cBMTkAjBGSqN5UUdTq6s2e1tY9ocwq2QtpmbQcxLBrrjHUaxHpSNJvczcPDYT",
  "key23": "3E3Cfr9bVm3kHFUYPcWDr71RP2UMvN1Ja8qJdMM3k3g91yyZJ7kSQNSapot1QtKiqeLYxpfVjJvXFT4g49yTmmP3",
  "key24": "HSD5yQ7XUGBVn5cCHHWcbER5K7QsddiyKQn36JX5JNDio6JAmmVdcrX2fUdYLFd8G74yWca45C5F11CtETHwpzx",
  "key25": "4fyfT1vtKKt1qq4M9T7TH7AHpmcrHGRED6jFfhSNLvi9oTiUuKn6L3NJgUCmB9tw6NCysnk4hM4Q5tgAx5a6XViA",
  "key26": "2Ag3RP9NzeQDzf5CSpcSPwChn8rK2Rbd4qyYryGRPjg2xAvjj255tUZvi6brf7AXTkFxJbLi9YytN4WrPX6t6JcX",
  "key27": "4AGcJT62FQ74QDyWfUia2H6Nsyf4Uu7F6XgBoe1EarWh6cGjjCEN5FYLHDMDsh1QVmzajvWA8XEx7PiZ5hEPfM84",
  "key28": "382PYcvmPeGmDzRZ5B1reMyHNqotjNMJhWdwDP1xdSp8DieVt6PptnrYVxufCifXvqr8vVh6pLdMNaCyovJioUdB",
  "key29": "4BqCFjVPJ5omUcCpVzx2jxKedgz5N1kLNjpUGL9cmcVTkQwsRQfcyxLidHk2vkkLjjusxQsf2D8bK1dgGV6p2VdK",
  "key30": "5kF8E1Lct628arqYG6eKpBDSmbzud78qRdgWEsYTTkNTtsa8NijXB6YJ7RtprvDxiGHbtnDNFC5kNKNquXHAr2wD",
  "key31": "5WWRCCMr2b8jnwGBLEyE775ZCWbzFKfsWjFqwf2fp3JzehBJFdiRwLvPyXZtCqkC9VBtEqmfVAKt2JjjuskUFMyK",
  "key32": "4DdFk7UakbKegst3LjRrFqeffzMLYTXUms3gFbb9SN2qJo5u4kWmkSNWVqxNMv5NiTZGVmnXUBT4NSkrzpTSQLsE",
  "key33": "3dhbCbiL7WjXmMYU7DECFa8MPGX8h7Qajxdd6rDnvZ6GVzxCn5RfV533tzva1ovnB73SkuFoxynw6CgZ27UhaAGy",
  "key34": "5MJ2dqfV6QQv55Xdv8ygwVGHtwi6CXMmiYaSpcZHqvUv6UHumogkNmzQ76UDLTdg32MX6PnSZhuPuXYFQ8RA7iP5",
  "key35": "4kR4axiucUF9KASJxsNqvUsavWBoQ8PM8RKt8B398utrBfouZ2eFrQa2qDeWYfnCwTX8e6kWTNA3mCeBGzjz6dX8",
  "key36": "59vQGjAVZo4Qo9KWnGeJmHeGdhDqPkSTx3mai4GiKr9AjheHwsevaZcBtfy1qxg61LTQ5DFddL4nfpPcyDkFZojt",
  "key37": "5U3PpWBwvuHpZT5ADjHzELNDHNKpjPxMuKQYQRJVwbojiNxy85zy21WkDX9cNCrMaC6K6FRsPUZYEYTeLxo7dCHQ",
  "key38": "5MEPZiCxaizwVcx9aoFbmKUmRoi5KYHbQnQUnUTaLznYDR41b7wqs4qHsUcv8cpvBrHwvKp9JAbuxdJBFiNndkEj",
  "key39": "5evHUC7ohgnMSAD5ZJDfxR7bcnt5RoBFD1BkQfUpvhGh7C8aHuf8PavtpmzZJk4ZnfNyqksoG558zeCR5BbgXZdJ",
  "key40": "3VNRMfovJcbLBejF5ZEycsuRJWqDhdYHLhXafBVcGg5AdBtMZFeaopSwsVuQSvzg9SGrvBytCCuXLVGkpNvaJ2bf",
  "key41": "4JwfqASz11Fz9m8RQ43yBw1MVaSDPZcJgikmigSANE5YJFfN6Nut2dSLm2Zxh6WWvUFb3uGYZ7BEkvLGrHjk7vPm",
  "key42": "5gAjTnBTKn4LFjrhPVSYzyeHG3VbiG9FJTza4dLjCscToL4wEQA9mxd24JQeE2j4Lbky7c4Tm3wNaSDE9tNYVXgB",
  "key43": "5EmCD6gaiiGSZho5miopUUfWxyNETv8ca8TsZoPPumEzN5aR2EhKvQ1cnzapc5LZgR9vaan55CjNWWdnjZP5PgiN",
  "key44": "4ZFt61BGr18JyFVyDmaEFEpgZmBWpEqDLsYbfgAX83Xq7Unq2SXcTmSya5F5bbQvir4cQiCBTNTkDaPNpxd1Locn",
  "key45": "2hKp3tk7hxnD2phjzWc1qV2H1tfrk5UwuRJZSxj8tnUSoL13LYBnFbWnVPDzXT1gsVAp1RqaxT1pqFkqAHiWYrb3",
  "key46": "pYt9d75QEe4VQNZ3usBKvpPDoffKLBW3Ph9tApoY8dXezftGBR89NYCombRLSrgfWyYzVopaFdK5sKrLn1g4YZR"
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
