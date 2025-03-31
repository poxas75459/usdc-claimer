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
    "RZ98DzsZ3CMLC5fms2MmeKSD2kXyDRnyo5QGZymDqmr3ZiU7nHA9h5bjEWDr1Nd3xeVfVz8QYkhCR8MuoHCezPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odHeqZt8HmjjUvsUDWca6D46TEwMq7JNVsg33MPjiAcncYa9WB1Lm4FEYN99Zgp2xiLHJMBFxvZcbhuAJf9UXRg",
  "key1": "4L68zPPukMxsYxuWaGjrRSAp8LDLPXkzUpha6awm47WFvNKDeZyraDjHvwPUm6VwqTEiug3BctMi8HDkg6cbJXcJ",
  "key2": "3qXn9dCdLNjKNjeDJsj9eQKG1VEQPMsSWeV8pWmkwJiz75itLoecJ5fkTLHK5ZzzHdvwnBL4z3QuKu7zovwwX8f5",
  "key3": "WPKbRsYch5JfZYM2cQkXa15XpuJ9iFpyHZqV5ChpbrK2W3rv9Cn8vjxYKhsegvp9F7MyFYT9ETd8ywdHdgXkKSM",
  "key4": "2Rw7S8mrHsdod35zWDeoTamKv9WwDsacieCKqdNmaM5SyAZHfMAbsCtNs8AwdV4GYHHQxAFG596ULEYmBdcHnzoF",
  "key5": "RPVutjEKgHakhS8Qna76nHamvyhMnHU32WHwDPKYq58VjVMHXDSvx2G41ruBJjw7bQAVmfZ3xXHUV2zTJ56Zo3Q",
  "key6": "3ytKMHQW7yr6oV2L15WJcoMEdHB2vvxVFXiPDiyn7b6vZVbxuqr6C92bncP6vmwqWmQ3BPTWiH67kbGYmAzWTv9f",
  "key7": "kXrhVUtN3xyDdduWEDL9XBKkDiUPMm4BmeJbLt1Y8eo3164eh4KdXXrwhxTBthyPMNf8CeKuQCJSg2xhnmjfcbs",
  "key8": "52ThTnJabWnJk1AXa32EP5RcB7XCAwKpHxeX72UZQm2zQAkeiEpRm3oV5gPMSSPXzgxMjBBxbjTgFviMQm2W2L8J",
  "key9": "574npKnYxurEggmVGyyMbeuztknQZvNo5n9qnnqZh6FoiwbtTpLWUPKFTcogjZDabV8digYEuc41BiqGjqLF5DMy",
  "key10": "2Y3DSxb8MRMthD4dYuzwE42VSVAoNCmsBsNxHAu6PRRnrR5oQkT4MoEF2q4ARayDwifm1s3BTxs97xPRSTsUbr47",
  "key11": "KQatWc4sN13znDASchtXT8CJTUDb9wSyfm3G1QfNm4XZbS37CkQXyukY5Y2ptevB56fpNzXKkX5w9Zyf8UtnBW8",
  "key12": "2jXdH6SEwwV2YCuX5W5h7MpPtGH67T7CpRCMqfKKnMuroieFLWPLU3ujpuCoAVPxCT4HZ26KPC7xJwbNaudFw2tE",
  "key13": "Lpsp9hR87TMeoujYR4o9DZNnPzrLAbjPnDFugHHZxh9TUJHJvEvQuEvpS4CTZeNA8RJshfkLZCX7CU1t5w7ikqJ",
  "key14": "67dNK4zq8iMS9kE8ZxG7rttvEPJiLSFUfd6s3E8CgEXYwDReBEjqtmNnx9HAxuASgmFHRbKMWmLQqETE1tWLnkuk",
  "key15": "3Y6k8M72npGwKFXdrS626qZYpabCFShRJn33bDcwY5jv8PVo3ZJ757YCoFtHKquSJU93tim2a8zTcxtoNLWzqnH5",
  "key16": "3rmJ77UF2XMLcb4hJ3QPKcQhzoBk2XN49ehDWXMKSnnrxGiCp3x2HeG6MUzEhij7qyUdmVrLGw4YB3kYKphzPNiu",
  "key17": "2hUiFiyj2XqCCX6oHSr53GEnomJvuFVfvsddy3TLmw5gpzeGK7fc1yTyt25uzGSgyxxzoyafNVWZiE4jyiLjU5by",
  "key18": "2QrVY5izXhb56qxrNRYPZvM826uptigK86M7xAH9db51hjq4P9YyoZHhYiDS5aBbyAKb5DUy9XGhtJiGkpVZ8kby",
  "key19": "63dFx8r5QCzBoKfqbPpq8Z7i8VXNGudgmAipsxFxTeoaPTgvcwKYAnHkVP9y7C63a7KNtDhyQa5ixWqkeGEdic3W",
  "key20": "4NxG2CkoaS3GfyfZeyzFtqFYCiuQeJiceXH5vRKJ8jEis8yuu2YejyycWRPyeHLDxmHNZpf423eh7zLSBstA62K",
  "key21": "29tavTyF4oyR6GWrPVxRhWMZ3SX9sSth5MgdMW7bb4vepSfatgL3CbCFJ3uG34RpQUssUEHQ7Dt6z57hsWtMwhEH",
  "key22": "4zzmTBjyTbhEik7nEPVFw6ir4koL6dQgACp5K11iN6KT8oo5erQcPV4em7Gf5YGDbmqsjmHuwsrmNP6HDtuTfgis",
  "key23": "4QymjuekH2AryQKS5teqnMs76LN1eF6VxDMjieKdpmHmW8KoTqjrX2Ru3NmVPmpZnyvC1kv3uuRnW9gKudfuTerY",
  "key24": "Bqjc7BpxCLHPhZ1auBWdR82bDquwnSfPzxy496xBff2JaenN72osMowfAEn8YNrwiJqvcjsbeoS5c8CNEe9djvu",
  "key25": "5vP7Y43LkNrsg1YSoTbj3wm4L4nQf37CFDa7GcQVs36LDVBDL2UXeGxHwmwJebrxhoBB5X2mATaHjuPWqC2THp2W",
  "key26": "5vqzVFypeDdzobCqvwXfcDAiL9ZNXvJbmLwuHbj4CaqaQztyLeF4DGJS63p9c7zKyA7wi6em3Qya1XVXbhJvH3z",
  "key27": "rqgYMz4sQLgH5Rs6dnHrddHe3M7zi2CmkvVxUgo7XzbrdgaWNTYTH5AAQh2vcjWVG5x1Tnn8uJ4w1DXBrRBz9Kc",
  "key28": "5TniSnkJLi915sv3UjR7vKJgbXYVk2JwhSQfDRDC5LNUVcBfq9t9rUvMRP7eJQmjJGbkZaJkc6rehoBCztBWZxeE",
  "key29": "3XMqDzYfCaqk1cjirxPw8WZ1Fmbb3ACiB9mGxHTtaVxxoXxTzUoQuYNKGdxauQbKqULke3wA5zQqj1GGd2TW8zqz",
  "key30": "3MMDmhr4yEnFLNGiCwvUCGNCEhUwJQLhjTZKjcdAcaKZoinV2jckuCKzt5orvhCMX3kCSnvUR3ktNTC4rBWGwG8b",
  "key31": "4Vc52zP42i8Ab7GtMzkN4dj1KjKEH2Zej8yooMvscbMWfLmyJuxsgyHH66WrQJ9gZqNc44u3jSQYYktXjivAYb4m",
  "key32": "3avHyojyYJrVDVpAYq8GP2A6TA3Pux7j88P9JXvF8Daby381Yt7kuRL1bi6XYQbpYgWabJXr9EKCNZoW5h3VcMqD",
  "key33": "5ru8CCYHhbJ1DQiZ55kvcWhp5JKmxQdyFyA1wkYqU13KuNXx3JFcDgH9LQdbpTqd8je4EKgjTVELcBb3YGsUpM5U",
  "key34": "5idCtJebSyPhHp49uhQ2DpziPZK9kfigvSG5GDTGta2XWqNCNpbyviEwVbLwCPTL7nGZHTrfaKGgsdx4PtsykkdQ",
  "key35": "2RisMke6d9LDu1KAvzzfVesJorgepNP7fHkeUia68h5cr2bEWNnKYg1QoWviyc97tbz7CRfZadzSGcPP69imDZ1m",
  "key36": "4xRvUYY1epCor5ZFh9PSTaCGWvjtC5Aub8hSKR2ZHjw2XHnupiNQkNeKRk5roMtUascaqJHsSAEwv4hBNk3yh2Ch",
  "key37": "4ods5LiWvyDQ442fqAZFpvPJXcv54TBqPGJEEySHrVVikouBnXdPyUbEJy23PiJM2mskVUVxAmRnJjUHd7EbL2BD",
  "key38": "2ZeN2PFRXTdgs2ZNgGU39PNcYCyUEdzRzpaZcxAbCXhDarWNSNPedsd5D3JNyeWGmm1peDu4Kz1vUzBTq1ixcxyr",
  "key39": "2UGs8HVYTBrTpxLwfTmTFbZzUaAd8itbA3rFBfhByW6JHKu91Jy4ghcarHDNSDHELAPHYc4dHuPgHaNLrYUJAPAt",
  "key40": "5HeA8kKmSgsVdeQc2MD51YPfiSCSTrt8EsZJGEj7Kwia9gUY3QtcWJ2oANeXUyx39ZVBN1FRBKYyLPduoWnKGZCH",
  "key41": "JjQubqxaC2TiSMfqAgYA8KuZ7sEGNTCXcZcyCSAzhNWAetx6iyEKmjycbRiUJmxrk8QDsCTvvA2Wb3RDZLUcWay",
  "key42": "4ZZonRWWovF1CUKXq6bBbJAF34cCdPhYTXBgWSP5JseQr7s5xFi71npGwshAEPmG6KXzXg6qQwtMWhgiGRYEqRxA",
  "key43": "4TtRWHVmA7LqPmUkoao1P9CfkomLGaYcFXgWTQztRtx2hjDu5YFqnxTzZqAFRbCRpmtYpsFDgCxotVtri6u6c3ZP",
  "key44": "3UamsCKv5J7F38QDrUyeYSWTfn3YFjJSTZKb4qESeoLqYDJvG68mKRZeomehgpi8px8fxbdLMwaxcrxw4DB2yTbj",
  "key45": "3Hsqjcz69XmL9U76MNZvAkt9QJK7p5s1PAtx3TD4xLewBHvFsYS8XcW4e2xqYeyJ6PepdL1ooajLKsCDJhv6SHkp"
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
