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
    "2Dn4Et2ut6Gf23CoSmLcH3jzBWJnDEDpQTYdizCBYucBUfVbGwqcaT98T3R8ohcQZZpamWn56sShDmWW8UKjHUAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47PwSMr9xDcPfJ5YA9WkDB9AkJRrrZ7dVby7wnw4BwKH7Ce8tjibM5VyqxnXLfSukgteYuQ38KasFeyEaDQpPc4D",
  "key1": "ssVNtPvEnPxiYn4VQd7MzryA5eX789Re9tCdxezGreX3SEXRCqKB31zLBip9W2B8QFoJNjrxFku1W6gvZXkPUCA",
  "key2": "4N4xemtwXM7KnVDoT725u1wyHNbMkFadKZbS5oz5aq82B5aSX7yiTyzWUPtL6ggaH7iJrqrj81yyfsrxuVsjnaog",
  "key3": "DfUMkcVFuZ71a6aeaBY1s4qtFuSzVDjmbf5SkCS7uLCmMVekEg2AjXhZNCspdEKHnpqdDsdGH4ZQJDEqeycc5RS",
  "key4": "3KUsCLR9F9HGmduHKDdWbRzYryoJ8YxyTWT6sEsTuF9j2HwHycjxiLazedmrEX1W1RhBVMMubbBZAk9PYMS3b7iH",
  "key5": "iXHUcVzX11sQ5VCXvqJLvgzzFjePneLDStA5aMU31CUtZiNMygxiGDQqNCM687eHS8TukiDYuDUAxUErBjWAMvv",
  "key6": "5K68uwPKtDBZu6rVfWALFbdheDYDAucfxEM94QyrSC6wxQkTDf9LBcnwShaAvHhiLU6mAg1G9aLEQKf5szMQhPD",
  "key7": "4zUYGLQHHEJEyQ2fP7GLv7WdKbJTJEoFd5RtJgv6kiUBcvvexZ3LemWFddEZDx61wATsW43uy5ThKB9nqqhPisrA",
  "key8": "32j8Cj6EXhrY2XLX4mNnCUCxFMxS983cg5LtqDw2Xm7oanfjgsRF1uEfy8izqzq1TZbY5mq82vBww1QUFKes846T",
  "key9": "2LfpRcTLUXvzyXmmcsBe5PEum8eToqu7iuJ6YCTKfPXHwQa8PAzssuxtLa4RznuLQZUa36cSaGBbXcAEK42Z2KTZ",
  "key10": "5fnftUeaCLkckbLDpWrL2XZaHyGD6iG98LDm6C6aA4srk5t19E4iL2mh4tmZD6WAJrbALEqt2qTpLRzPRtHbf3Lp",
  "key11": "2uP3t8KK5Q2C64wu1NTyhLXsATCUPhdip4ggYiMKN8ncyxS9SBGy1CJBSVfBwdwQp7q4ezcpAMqr6wLKuSFihes",
  "key12": "fasVrJkTsW5mXXxPg4j79EHfEYJacGXXQ1cRc6cZ2V23bSfujtGJdeLqbepQVbe1CajAu4TuVc1LJUnbCYKVr85",
  "key13": "5KoeeUJrKXAYBzgnYPP8aNnUBZ1TLKyeSc45Xa8h7U4KctQji78RYz7Ltg3NSDCyf3RH8wRwQ2tWUSo8CeudGRut",
  "key14": "3zWw39yXWbQHg7bKwRQBK136Av3yzwHvFExJyLCgSkY2d1FeTTMh4TAweZwRRphUEAcNuZbSvF5xedqSV8vPxYmk",
  "key15": "3YiY2Tp2EvfLmuBnN99Zm8U4xxneCAGg7QQKQEXafcxgME2LHXrrPR6wENixRrm55ytSnFBxhk6ynfqdYThm3Phh",
  "key16": "2hHEAhpbCThxG7eDu3ywg1XAbwzDJNUT1aFNH9N9V6kBh4FxvJcmAtsnySDEuJ83Ap6aZdRp45RGKU1Q3MFYHQFK",
  "key17": "663zSYJKNvPe1vHk8mixeSP9G77kxuXrXWgLDiEwkEWDwxkZQYTdmTbEehhWottzKZS3kRvYgmt7PfhCxXNttkvj",
  "key18": "X1zVC2DMweRAXZijzCuBcdkAHyptgGrcSLggCnxPaQzRHBuBbMPaYNrK4HeHkbj9cwteQGgnyECaNAwcNSUTnvf",
  "key19": "9Jptr5Gwkd8z9tWxvFcS4CdRexN4rYjirvE3v7zaXYgeTS9y3eWqyezNsx3GfQfWgHDZWGGsfsSNZs5gBfj6SaA",
  "key20": "FMuFz8JaUGCXZPeHNJP4BXqfJYXrJ6eWZT6QLuUJDpCCHdxC7kusD4HC7r3Cafc1ivLFcsLbigWuV7xX667DXYS",
  "key21": "5bcxJyuQgoEtyWQrRSjgSHKYgJp5oifM4oAx2kUtUYoT55Bf8ax9EXdV8R5SMBA9DGK9BDUKJPRYkBjiZG6vbRum",
  "key22": "4oCkkKfmP9dzMH8jn5FfHTPrR5Y6GkXA2MRX8uSZX5MTT61QGVnbpvySDnFD95W3eWHaCY7xjbsDUQfnH64zaiUt",
  "key23": "2NhG1zoNNfcWxf5TLkxWZM3cQGQ1xbhzf5B1y3z4gyTPMSbUr8HkrsKfBfNjhqoioLuUp5iQHJ6UfBSfJdqcKVZV",
  "key24": "ftSp3e7xKHt6Qzh2q37X7RQz2ecj62pqtUAssy5nofyp3vTgZNDjsJPJwXT5eoteQQ3nyggJ2E1LBGwPk4Z3qJ2",
  "key25": "5meAApDBqGtjaP7rvV8SuiYjKJGdw2qaHcSseShtrCqD13gB3m6MacZnQGrHeuRcV6z8v2Fe56RGWQtHASHwyEz2",
  "key26": "4kSvyrdb3sHBrA834S9ZWA5x2oWq8z4NsjrTTzrH6NpAZ2nwRiwmZzSjq8dqaLVdBTtm8EPj3qsE6kAs3JgSCHDR",
  "key27": "3DTrc7roPThB1ma88Hoho7HNbcPFm3gaXBnPhGqWECFHPkyL7b3YF8Y2ymibiiEJ79cKtBGdC2KeQzBsRuSb5zW5",
  "key28": "5dfqRWQ7bv4YNBexwADP1z9HQmz1KWDpynqZVsY9BTczofu6xUBPLREisMdxYeL79bG7ewq2JzXKwZ493TZdRKwQ",
  "key29": "5WiY9ZL2iEMErazXcm8wPUQtEv3N4MyNuC3k7yz5XnWpDTLFiTWrDnCBGNV3tDTGNaXEj9BXGnuaGt5MJhJcNjeS",
  "key30": "3fCQbfs8HqXvCDPjQcSVPJD7tLx2vpMeFQY3UBoEYdHJxvDQSvbyT3D7Ge3mYSWQAojPB8rzoP9jTQJJJo6Wse2Z",
  "key31": "4HLtVafQqtgRAVeSqMTmKYoRqWf7P7AfmEiwsewG6WiAW8SR2Ta4v2d2twz5QNcWFRGtrQSS5Cc5i3PaNiiYx4LF",
  "key32": "2RmSJNW52j6CywdK3Gcp1MMvgoxjE6csBeby8soMhNaphDa2bc2MpkSAepE35oUUwYR9LLuLQRxYovPi1LNDVG4w",
  "key33": "33w31h5euc1gbv8VZNibu53ZPEc9jRPJTioCfQpM8esk3yBr7hq5n12JvbeaHGtBLm4b9p7h3CEXUD8tXZtRFv62",
  "key34": "5f3TD89qZGn1UbPpyqzL3u1xgbB5sjE85Hz9Rk8WVoeJ8nHJpRNGr8d7eXx2kXpxfKhkHuhutzsFM6hQQ2t1D4x5",
  "key35": "4UUBKYUPQxHDq8JSkzX6jpxaPRMPVKAdbnnwtGUjZHNgJY8PdJWmSrTSm52gWbph2kcCvC7wnA5vgD9pn5vHAAP8",
  "key36": "4dyrjrrVEynV1VTzGVEdqMZxbbioXRvBMxUF8a4ZwJg7Pap6N6hB5ARferTb9LGvm4i4ngXVxtHmSsaXavdyYiBj",
  "key37": "AFVkYkpDXUTmHHK4ES18S1gyxe4rNrhEw4wmJwz6QckBi1YEgK5bkgekukuFLAgKvmK5SMoheDFoRxeEgTRtpgk",
  "key38": "2Us9y3WHA5tsX3ryZKMFboSKrq3z4dVX4ps7FJ3Uhk35GE3exGJUr3wws2cRki6WHdMZQxYnKgt2ZdBQxtYe3NUv",
  "key39": "3FzotmCPknRfM41suKik1dWBgm3EY8EyzqVfnEgd1Ekr8iWRhXJBYRMZBiXbb6BKLsVeiTZRFetxCEANQB4534rg",
  "key40": "4Hk5JpLEonbXqosYtr7fDPXzSJcLtoyj58XcP6qUcuA63YrfhYLbn3qBxaGLeLuy1WMQitjUPRqzCkGdcuxibLT3",
  "key41": "4SnJdmdrZZeEDFcVpFLZPweCEcmWkSVAnrQXc1VwcpyX9rAy9KL73Gu5HMxFDoYZaWccngcaAJEhbGQ1MRGc6AJU",
  "key42": "2RfEW6KuuSnqcfrjEJxdjpwhXByYYnzG3aE87aBS3az8BPGwdbtM7zyBuGm8rVeLbpcM5ckkyEbkt7hMQj2rHhAf",
  "key43": "41JoH9gwyURoJ8begEh1qdW5DFm3zu6mcTqh4da6WEEqbE5n7sjMbkGGYgzQEGLNu4657VeRYhQKg3dWmivvfLtJ",
  "key44": "gTRTxLKRDBWhon2xCmLoHonhMLSnomvqHvLHNDbj613UmedfSG38f7rjMCLp6FHVhxPEwgbR1fEAP9AoE2CKGXZ",
  "key45": "4dY8XjFGHtJjenSYv6UUorfNrcz23mFDcQ4hX9GvxWGa8yT2TvPsYfJT1ueW38ZzvKMTmSRynJNLrJU2K3P86keN",
  "key46": "49TziizJdqCyCT884aUcrHWVKs6V723VkCiLepcoFMeh49t4fRHPhowChgoaCrWujKAdqxQwTE96gg7AKG2Mpb9H",
  "key47": "5sikX592mpnxG1Xb32wFHMDtDaj77TLviicgiP51H7MSyDwFFKgBEmdS9Bq35MC7Tni2joyLn22YoWQi2rkAHCH3"
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
