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
    "mZ51Cyu2eLqtsQojbaQWLdNDku4tM4pHnmKtZHGL4XDon8dpg8z5xRWxuiNbBUxnHpr2eiUMux9v7bQgXeqfvzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s5aJeDFoyX8wFBfTA5rsDv5muxzYEYUuHPzNyUcTSr6DhfWH8yAMCMtMz2JETTmwrqWe4vCygXc8qjGGRe2AbbK",
  "key1": "3jBX2pnSmiYEfNbhS5PGPKjQGwejJumhATqMRjJTMwsgnVLh7TeB7KHD5Jb7okyM7Xm3GJSEtTVWj9c1QtmQH6FN",
  "key2": "4ZD2azawq7MaSAe3zXoCvWXnPiNCPtbknhWG8nLQndFvtHquaicV6U2Mr5BC3bcecseDhbi1LvdwxaYF64rFsfk6",
  "key3": "49xs3KFMG21cbBTDJzX8KsfuYE1W9NdksmBpF2giLh4N5H2RHEjKj3LNDPGQ44vguVZLXu7t5ckmJieenn5W617T",
  "key4": "5D1zJ93cZmrnboDY4crFxh5x5Te88Sa5Pu5yAWvopT2AH3Wt2wEUpsEs5jhnAJr1R6VBYH3RRKyoNnt9WVa7LE8a",
  "key5": "5jvnyNePfr4Fzs9bvrm7UQ4seGJQQCJchiAkQianSR8XzT9cCspkbhHAV91sPe4nsoyGuMyg7FsNX177X6iNSy7D",
  "key6": "3DtQvfEexcDxBC1eAWmNnuYLWJEgAbcn1KwQ9irUS1tyZF2efTaFZDhx5pvE4tASkVjEkJ6jtuUntjmLwydLmbG2",
  "key7": "4C4PnENDXwbVWUQMfnoFMcH67rZpsFtz7wrhBAoFaGNvKbsvHpWyL4jZ5TwL62qQsaLyTKX1negnoW2YaXh9yJdD",
  "key8": "41sE5uqH9HfmCcGjtYFvYFGDD3SazcE3WSPTjGRrBxNpwgYc9qtbYBR6tvmsfooBLtK5bKgbkoh9wBmbTXXC6CHq",
  "key9": "2p2mUFAT8pPJmW53nFapcE325JeZmLX98ezmY5nvf5o8RsLETmkEK1XuqDjoXRpkiGoXvLmRfEQ9V15BEP2Miage",
  "key10": "3bj2A7ZVxK8hrb2ouxQLxx8iMn7bHWBk3nrsszfwoFqS6niTJmtcNAJkThobNtX6szBrSBvRXSZSVHmaAQPe1UTU",
  "key11": "5hetmH8GCSapTccLvjMSCC4UFk7Wk51dnRtXpQKToYkySUGLMh3bJUWRzoqeGdmaTwhK5rV6gKi1GXudpypNb7gq",
  "key12": "63LrgVWDbz9GQiCnQnhhHKNeRUgXVHzWiatKB27rv1H3uN71egmENTMSPavUjzbSBK26zxmHc3YkyfLzpcCAbAVf",
  "key13": "4zxUzJdAuvZpomyX7xa7sXfm4qrngGggiSFDFW86Q13nj7abaawaVJgK1joCHAdPD12knBfYcKesMVxtt9U97269",
  "key14": "224AZQn6V5GiUuvf3tPRfRixdwntzd2onE4Pktf8Jz2cZQDf4rDjvnvtkmZsoj27LfxZB8Mu85utZyJedSMgcAgR",
  "key15": "2SXEHKmx3igxvDA5p5JpUpyq42f9zWobobie6kSCAKfyBcqBzTQVfvniuJYtdajX9DkNFfG7Z83dt4fouJiJqQsS",
  "key16": "24affFMc4uakUQCwpmQo2qcDhCPsaMpizm3FKPwD5WzvEr29dFSLpA1Digdwm93WXZtFKhpta6E9Lov8D4DMEdqp",
  "key17": "3RJsqsET8o3vLwkJjHhzYmWaxN9jfUMhppTLLsH4aYjPVTtNhfPGrD2ZqHguVE1xAKFkCsWgVEA9o4bLBWnSvkH2",
  "key18": "29X5DPwdPAoYZEuHsvX5M1uEHzrsEXsAZWyhXnn99URSh8mpWPJf9h3WhEqs7xbpf9JZTBoFo3AejgbkGYAV5mA9",
  "key19": "4GWVf497NVZ1EJ5Se4GGs2YwYTbKUuc9p8oj2UpyJrFCFkSFeZrt7vJRu4QLHBkxoQCMmyKvGSMSazubQaw9o47s",
  "key20": "59UgzpF2d4TS1Gh1d4GTdX2c5MrfhV1ZWNejP3w2maVXndoe7uLjpLXRA7GQVLd1X1QH1wFNMVR9jRB7FnEoXXfb",
  "key21": "3Yuxjdi8QzGQGj8Sj3WARTmLnXEYhfLmP9816juECuEwoTNLDXFb7VjuxHj5qm6EoKZLjyKR2u26J4NEwob4PF4x",
  "key22": "5iybrMTxMKjESaVzzq6L5fAgGDTyW9xF6gyFgXpZHkgYkei1RKkRfxyCAebtMJ5BZRCAanMFGMDdpvZMTusbv63r",
  "key23": "5Y7Tzyd1LUivGPQKDaf3RPCfcfSJs2ZWH3muQyVvRsGV3SbdGs2uiYoUvr2SnevLQJivgiepKLZVh6e3riipfSA2",
  "key24": "5GPXXbg6Fn16zYSzuM3rdFSdHGeLEY2Gwmi19YWfWFDZiQruh842ajvip3fev5JuhJZACaMkkArgbYeqjugZ3V6F",
  "key25": "38AXoULkDQRkgYZztaZg9iKtTWyK2tf2DrX1DEAGZrz72z7ueo1THrFzzLkifSDLXUYnwFWEGZbgUYVtFk5X2gah",
  "key26": "WN99cGHaetL1FHAYsqrjq5XRsNtLxzLGvTb2SUJpXLKXYKWUWBBapKaSgqUXkY2NasAdF8q3RzHfCdH3gxqCzSg",
  "key27": "5D1nPbzumStZ7gFUW9LmwPXK9VEcQQVquNJ31SZ6tF7JZ2oyPgyhZ9SeJ5HvGeVmoidM7Wg7wnkF1V5UaXRiJbDy",
  "key28": "38XsADVxJWPsxPCFefv8QyybcFmZbn42W4ygpab3hrxFPP26dy29vY7znwjMk1he6hfNjbFoTmgnhPEt29iHiXvG",
  "key29": "4Fz234Qyb9fK4U2kDLQWk1RshRcsGWUSAbvygS42iTCTWbHrJ77brkfnzkQYh3WcqsuSCgroDpfeirwGc8kZsdUk",
  "key30": "48YUjPxb3yVDUo7L5c5QMqKYzghg45QoQMvQjZ3MCsdfRoyp2vzHAwe8EAuCFXwL5nLnWXFk81SL93cRS96WziJV",
  "key31": "3ebgTAFeUc4arAP3Q1z16PeBdpVCCy1HWhPPxQvGp7KUiTHEMSo8b5yxVQxfusu8pJX9SpZijTeqRFJo7NQNQang",
  "key32": "4SYWnvvs9KLZRv4D3xBdGx28XYFuXc52rWKbb9uFELPWHgZHizSSMPbjYr51bW6Wu16SiCdiFmLmMdauFCQxsNKf",
  "key33": "3qSLvTNBqKkB1aFAaYu58tXp1CwBFNyxk88imvn4JC63rZVM7HJXoXquBvY7GX2uWHURTFqn4pKQx4TmjF8cus3J",
  "key34": "4kMt5NPQS4siDmDoGhsjrRY7oqHNfcP9oVabPJPkiDsCNyYydHrRPmfXmMCAoPy7qUDMzcpzFSEj6TF3c28h6TGH",
  "key35": "4fwDd4bdyZpaKTFoznMjiXuGzFSq5dwYDuECKefjnbAZBhL63q7sD63AKnEPVvkLqGsxjbVuJ8JqnJr7MN7VRSxc",
  "key36": "5ktMhvVHFkMepvVhm6C1pWWtHPLJM6dFyvFnz7wcE4vDSjeN3dgM22ZMWDRAh4Zxe2ZhgbLEeyWuTZmQeKUZFfcj",
  "key37": "2FASCnqtVAuX24BRG4a9QeJ3HKR7J3s8s5XmTk3d3QvmmpjiotBoTsRXQBjYi8QY3gELKbaWEJgKNAgiEgJCo7Tz",
  "key38": "x4mQDdjYbvHjsNmABx4xpZnF5ymy6zLPAQQKVCHFB4CCNvnLDVNU7JwAxMNr9MpPXHV5pBmhd6T4XPTE6KccvNt",
  "key39": "maXYavzyJe732mq3hiuQbfs97gBMfBFHCoD6tWHcoKCuoEDyqAaW3mDGxRaWktEFYBYJA17RAZtSik392HYwBFd",
  "key40": "4L51uuHd8vfZPeuZPoNjhit2xJQr4rP4hcgd9nC5CAeinbWBFQyJGV2f9P7MkRhgpAxd81VvM7JpCzh6Ey1Y6H8R",
  "key41": "46dfhyGaitUHo9CodExBhpGetkCwTzHtj5kazXkddMNyafdHz8ijKvt1NtbrtMNE6s9VdBLS9ukGK6yds371u5AL",
  "key42": "2ymHW4PfddUE3z2URfqzRAXKRe4j5eToBkSv5WDLdzfdbH9XfoWrhE1wKY3jyyX8wfpsrF9i7cjKTiPEcXCtfrfL",
  "key43": "56wbLG3xszWxiUbwRXneTMDm8kw7iUGmsk1CgMWsMaHmcsrvdrojXzQH5RNFeW1qoHjHKjWqzX59zSW6r4UUjnhP",
  "key44": "4K5C7kE4Cyp3qts9Q79XG7KuELJpi5DRPNZAkuUfj7A1KjVaw3xxTaxvdwewRotH42M57VkhHKGX3YvsraAuT1mV",
  "key45": "2eTMTyWBfuLnyDkVyE22J2qK7R45hx6LqqZzCyujYxS8ekmSczVtEeqfhCZ7E1t4nHgNWmHcchi3oFtm8Ch3x7Vm"
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
