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
    "2jHW9u4ucc7EfLfdZ7t1BCsaxo1nXQR81ve16X2FLM5GKtfeyyALpMuD31wnuLjhQEmmHe6MrAWQWDwzM5zU7ZdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8fTjDFLGEnXM9LhaNLY5MDk4PHsN1fX7Wi1TfQKSTqNQNA3pnn54dqejowyonqBQdg6EoR9JJEeFQQkkXAdsxW",
  "key1": "3yZ8rbFcN6ncnhdtaViD45V1BXW6cirTtv6anUH7En8gNTXuRiEwCX73UsNpunbV5NX42EnB5Ha9AaLJMxfBynMM",
  "key2": "3Qrx3oJwuEJtGhLmw89KxVNMMfkvtgg9fLvnAW7F9m8XzkLmX9r8PGLPgvipP3y1D9YuE8uh3t5GbkhCtuvH4uh8",
  "key3": "2YDpecq9SXR7E4gTo58FgEtR4Z5JfpXzSWieDrmYMhSHJGECLyfua8vqEwZ8AgGBf3GSYvStk6c8Sck67miv7iaU",
  "key4": "5dYPMiNgwvYgNaSEQrzbXXcTRdy8n2yD7WNdrXXy7CDPtyjuYrskwwZreDT7nRqyoywN7QNAR8GoamhyHFN6DSQf",
  "key5": "5SsdTLbBtUdg3fwcU8CfeA6JY5kRzGpUYZ1XgfL7o6D9uddUbWgfYiMhy2vQuriJpXvWcbngSymmgsf2Bnc2qpR9",
  "key6": "52dXhEzwn3943i9bN2hYU6oMMC2sPudWa3j3siwgus9zY3wL4hV5ZWt97HDU1QcyKEoZxk3otgD48a87odzHB5Gz",
  "key7": "4EHtZ5mtvP2hadREyQFx49nkC6iRtkyZ6jKkQ4tjKhC4hhWyGvYsTtXMBDXPXgndVCJA33zU4KPmcno2JYB2n95y",
  "key8": "3TR8L4r69KDPwBBxYUUVqKfh8MEXj3JJjNDd9RnaCbTkeXMFJ6a23tRfU9BVXmbvoMJRQSuCes72erZg5YeaYLPP",
  "key9": "31gvgkmSoCWLoNy8WFqmnkkHMm4qmLVvmJpnQWyeZdUmX1ZCR8hAAsERMtRgt4pw9FuUGb9qfds9qSNacUQYrHGP",
  "key10": "4iP4sxbpH7jcUp8oDVEfN2xXFH6Df1wpMDf9uyPLviV7eoUYP65i7c7knXgeDahwt7gwf5WKkNm4pP6Btxvdouqp",
  "key11": "cFjNfbWs9rdwzuVZ9q9NRPUXjFuuqTgyYo49dQPE2dMcQfT5g1P5kFaLGAEzWbtVx5Giy7jefANyK29XfASVusg",
  "key12": "3FoNYXUJ7WqxtKkiLUUbEnctvMzvFG9vwknFp6stqdE7uAkHQ4bigaAKECBBdeEuxtBNyRjGDMadvDLdtvPtmAaq",
  "key13": "3DK7dhYui6L9jbwR2x7ZjsJVDvEequ7brtnJgvRXHpBRJkD6vSiiTMuBYyAk6o4mRNPbDEUH9zBbhEA2ok5yh2K",
  "key14": "2MBm4WzDz3sELQL2xg4qG4dBFyQCekvpf6GQzGh8abxdryMduQHUoedzZ8rrmN4xcr2hP3dHo93wbcJozNkgsbyd",
  "key15": "53pjJJvoNScz9beMpBsg7PyUzQiX8pdFnk4eKg7zxHhLZKGs1v5tu6mBodHDiqxcCgDuruLoidbKRDeyUYBhfUh4",
  "key16": "5FV8PfUxv1j3pG4UiYJYu3RXwgqG4CtCEKLwrisPuRnhp8PujUkMUEnxq9zgMXg9Za52iffLuNgAZd6FbFrBXyHe",
  "key17": "2oAeLsdWSyoYzrtsdMPjMxFXvBiUGREgcs2USs7W5rDsn8qyJ3SgeSLncVD44xMK7mWkMDSz5SRDM59FghZDev1N",
  "key18": "35A6bUVoes3Vcd13wJVJsTEvZsdzGxmq7J7YKGZGtspbPho1f7tZdAQmhBpDesTfcidC7jYctvUWFj25i3EXpTTG",
  "key19": "4sQW1bBwKw5RpZvQXeww4sZC5jqkcjWJRFYBNXQpfaBK8ytiZiGWrqMP2yBXMhF4zfoiTMUwmUFWRzqgorKsmg5a",
  "key20": "47N3Z1VmY9kQoQZ1ohN23eRjHHZHVQoGkbXz2oR5yNwxFNC5UnbmVGYRiYJmxkcjFBzs2YMxaAczaVytRKEYTgC1",
  "key21": "qzoeZyo23FMCGDdwyqK44L6FGfgE4UF5Y8BhNtteMYD5ikoSwcHhaM9igYyz1ogiJX1aS3J3WcXmf9458aJYa5E",
  "key22": "5nExP5Qs3Z3dQvZPjTb15DwUfWKvKpeW41qZCjTwTZ6EJs2wSZ3QpALS5psheL6fZHZ91P6s22an3nJPm7Fyt3nL",
  "key23": "bg4bJdZ7V8pqXrdRkai7HTtyE3upJew3CKUksJpdEGADpJL2zgQyU2Y5o7SDk6eiJRXoKX8bxQVLF1o2CbVQHuu",
  "key24": "4Xs6cyL3AckuedGiWM5yyfymCWv3QU2PomAZmFLW11auJ9bnuYd9KwbNpyhEzqcxChEHEPpQWpnGmskiDG35o6c9",
  "key25": "zeWoDzTpjGudj3zpQqFYWd1s7EnfGYDiDUr7GzwWy6tvVnrjgBNH3HViPRAmVfZZbPCJpQdhHE8GbsHYoTJZRbf",
  "key26": "3724L4bvstyhre1s7eZtTr5MUzJsskaLdrqus8WkRUNzdLi5wW93uZHd4iuqX5zynECLJbDeB667sEw6KnXuSS5k",
  "key27": "26tQ3i3rJxEeCReS44CtfPyVT3Ye9grDtXhqLcBkg58i9FVXoG6jztGyY6ML6MTmXU1etxH33z1B1aP4QtaLkEYU",
  "key28": "51tG5KZCNBM1MqB7rK9oCj8fZk32YYxPiUaB2NFw1j2WVHWQ8UUKFbNSn3QXwZKJaP71BthtsgUhwe2YTLGhXJpD",
  "key29": "368aoEJQD25QgFpxJZqSCrztU1gWWB3Mohi9oAoKERYw9KC42wRpYrJUsuYS36oy65vJMtvcrVbGpYn5PZrB36Ae",
  "key30": "62ZHsNUoEPuiN2ixcRd2DWnTkCX6Kc13qDW4Dq3pYgmQiXgetD6AQLqwQY7n8fQMvjFrQFuPsFE7f1Td9dTtH11d",
  "key31": "o32DtDTYFZKW7Hv3UroHEvnvERamGm6VuD6RzkjMygp8BsKK3LrSaCiofzM8Y8wZLK2Uu4CPjH9kW1vRECq26Hc",
  "key32": "YZrGT3PUhAiLXDLJvte8t13gYsituB6bWgZvaYs76y6KpUknnKDrMAfcs7MGD6GqvYSf65XPxYbXKNXPiBqNUr5",
  "key33": "2uoCvmTrxYtQR2yjMJtMG7nBHo28rZxNnyXo64zuUU28P6v8UDLqZ1MnvPyv7Q3f2AY8hbnWVVM9TjLg9uoHHxqD",
  "key34": "5XUXdSp4AKJghpoHk5UAfgGJKRq9SSSBEHqhUMM8HdgqRf7CQjzmRnVU6r1cG79hGR9PgxjU8j5XSoZrTdUjxH5L",
  "key35": "4h2QrrXurKbscKpYtWHYaDASE3646usGMtAWZKh9d1TeNLa2rkiVZnWw7qvQAHti6cJwDdkuHTTPJMEmHeTYwJPC",
  "key36": "4erG3f9gR1YwqKQ4dUxiN9fdaK8ZKG7yafLaGy2qDWcYWyQ4xMCwqwew77nipnadZYjHGrgYVqCtaLDdApWYpbh7",
  "key37": "3UnvXFvAaX8qxpS5xuXd5dmmMUKPCHsj8u5A2URjkNLWPJRoSkHG8Fd6hkr2ndeyi5p9WDhRoUtWfc4YmeXCmV3U",
  "key38": "2mE1yLPtnSy5SLjaT3T1N5p9scAjzPkBLg2JqSx7UtJfypgbGvj5KF7fe4aH33pgR9sgEkjuvDiwsGpPXqfubT7W",
  "key39": "65cf3XDn2UZtpt7SbajaAiQqDzEAmrDB2ckTabDMmWFawT9BVH2ToPy91WGrhGGwvvF7ScCL8RoGBLP4Kjtp9o4j",
  "key40": "35SyMaBhKi57a997zPzEP2ZUp1DBJjQV2y2xg45D81bV9qUrf7ZpkPrUkr8GaeNfwmTwp5s8HenzrXbKJcJkamqz",
  "key41": "2UUdaZxEo5AFhsLtdhBVBAYoey1s6BtE7XYYpFucvV3h7WwZvYRUNRkiTqoqeeiMSeaFJVLUDzeqEMBAGG1vubx",
  "key42": "3MFmnx4roVsAVMLiQK9dngwHwTAqLS5Uvz2rmSdqn7nSQZH9AbVDL9u8LpwPZpAWwyRuSaTf4n6DdB85J4oMMymg",
  "key43": "3MPo3tbzb4PdjAzsWxjbdbKgu5C2Xr37MQXkDAbM3eaJTVwE9h67pPCiV4fFWuzyWSTkYjbgvqqzyR1ySEviBqkF"
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
