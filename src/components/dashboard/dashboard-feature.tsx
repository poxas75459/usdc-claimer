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
    "5XLRL5Ltdg3SLRFtx5B8zgGFyeLFdKPXWDpMRar4wbocUUSsMmxDNKBuhAAfaQrnsAa1xkqKn7W7xN9j8s6bxfwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oX9AZyUjQkjCy7qbQhVYjV3Yhvj4mrprG5zYMuiEfFWQWEoMTsXLNg6p1V46y3BmsrJJnjVnpqhmx5SHsLVchvx",
  "key1": "4MxstADzYQ2Gfxim2mrPZoFjKxphmnVNYxcb6FSkb2HPmn7E8xhnmxNNiYQPwd3rHHtoym2W6QiLpA2zYH79EixF",
  "key2": "5o3Pk3eF235YZgv7LKYEqppiPFP7Lh86iFJBzPpoFLHj2zLVtKsUF29asejC7ukRuX3HJiK9a4XaLUHsehAP5fKF",
  "key3": "34TrvR3jxh8R2o4onpzoHnkBBHRUnQv94Arq7TpfLk6EYPKDWDEhZ3WdX2WpAbtDVF1gKFHGEt2JSNwc937ESkYe",
  "key4": "4NFrz4dUhfKm9ynZwF4jruUkJf738sbZko6i2m1WB3TDAm3qDxzcZ1rAhAuiwMFFbXNsQjHEVivdMHrBYSK7qfAN",
  "key5": "2xMLWecDVPjwmjb8Cszk7s5qxLD6hm8vVDA6eUXzf293W1CXbih4d8QPEPyHwCeWtmqqrCkvuv5xGLyJWFtDdy4x",
  "key6": "33w8w6AzebuBiYsMSYedcvsEth2HdgJ67hBXLQSBZ5erysNh2t89TEdkwDiHPShe1YHcn6SmsLYsTRo12WMuEq6P",
  "key7": "gteM3QQ48rXb6QyaGVsHw998bdLW5nup4tMvfZ8nbmJ9LopRkqGUc8pj6Lwe4MTYsyZbh2LiEeWp8ifb3HxesYB",
  "key8": "43U6qzxKipz3j5sSSCWDoCnLaG2Tsw5DrYWbTbQBKXRpdCr6j2bCFr6CiWxjafFsP6EqtMnCYgzFssbYssREjMdt",
  "key9": "dfaSuc4UYV2KwYP9r4F4ADGoNLbwj5vQTSdC1idnpwjSiMFWUhUm9xyr8XMu7XZWg6gEZxF7jDKR7mzFRyTCxit",
  "key10": "4unXJxbpZvcoiw1FnxbLjZLdMXqbHggKph5qXNYmGb8U2qpJ7p6PzmHmhjh6KuW5N2WFjtAVLHDtKbE3CL1iM6FK",
  "key11": "2WKVEYQKhn5vULqb1ndHdJEK3ZkTNqdyK5N8TgdzRDNsER3ee6rDkMsNqMQ7DxaGYaC5btnYMr8u2NuoAtcqBwak",
  "key12": "3MsEfd4vYngwovPNEDfGU7gffLmHDpug3yKz35biYsw7B52sbXnah77mLYg5FzYsPWTutEVU2sQggiiJXnyzutks",
  "key13": "3yuTWP87SCtGdoaiksX8GqtnhgnSdDZvS2Mv9S8Jz1VjpEQ4kkD82zx1Rk6Y4Wt5eioofSaJh2wm3BfcK28kwFZk",
  "key14": "2YmDrcNhj7t6wnQRjop1uuVFQtXCR8ai9aSyDtyYAvkjyGSqgec1usfmrPkb9Js6shZkW5L8wNbe3yNXKXhvVLF5",
  "key15": "5zXRG33BgwuKVCAR1p65J9qz6CRR5UywqvWsAtrCRZHxRntban2QD6FpN9BuCqfSHHkh46wtfmjAE1XJH6yeF8u8",
  "key16": "4k4CtFn8W388S6kEvaEgXoRWAT4vcLSiCcoxgny2UvJZkHA77DX46Aqb9eSctfHzJPKrUTKpXTpVjcGSe5LyT2Lx",
  "key17": "2JRbLDYwUHWVWYB2hcGi2UkQ2kAB3kFrYJWzGwqmLybecUpQie7aSYrbXe71yLnLfEanjkSvgMiLNuygcbCy9pkp",
  "key18": "2nMmz5XADuHyTS2SMoGWRWznKU3hTmfbFdRW8BExzBDcHHACaaKb5jtB1YxtR8An1RbwzffxAV57H48JFsooTtfE",
  "key19": "4mM3FFLioyDy52nHvdEhBoosuBQsHgBCUbQLACj8J6iDjtHdHnv4EaajBkLQxE3bJaNyMYYFmLg1AQCYnt9hYfDo",
  "key20": "5Pu5bnfaY7VvEmGYjHC9FPe7XHuxCSo45PtRXuepgRFb24opmjvYtHtopiuSptQQ5ueNHU3jNfvLNt19yFPjpxZG",
  "key21": "3dUZsVSspEY4dF1sC8B44C9bXowcXv2jXkkyykzAqMjmKMn6SRcP2Ht3fHvStk84dpL8XBpzY5vG9zNbTuaKwjiT",
  "key22": "4FKtozjKX939Nzo5EKUsPFKJXTyGhTZQn99bhNHpVBsRgjSujcHFCp8vnWcf6ETsT41Usdy2xpuq6F2Fvo8Byp1a",
  "key23": "NgMaNszVs9YASsEffjVBXiLSxcwA5sCR8N9bFxwzDgeHYuYLVnhA2aFV4Y9RjDZV6i5BwWSrJEkih9g3KA4QBE4",
  "key24": "4Kwkq3tYJp1spVgSbQn4EUjHXB9D1x7SLYDYYhDKGD1LEkoYxcA41qjNuuzPSmMHkvQQEn9HABfoGVHq1zPPJj6u",
  "key25": "2uhN87xgJPYY4jGNxF8FrKXR8ihLGfUAFm86ud8tQoRLLzULe2M1DyDJSr7CqPrr3N1AGFj3SuHzT2tmuhsd9ZCx",
  "key26": "4GMUBjexr9oiKCgpyg5XPzWNPwXgkiFJDwg29rop3U4zU5qtVKcSTxJiM8aRtXGUSWNwBYHpnVj1TwBMVZvmcQRF",
  "key27": "2UBvfkft9xNEhfbsf4N8tr34J53WhrSwNXksZs1m5PkkF5mxtqCqUp4fFUtNSScJJEDKkaMgDVr88UaystbJ1mUL",
  "key28": "3h9QwT4auVpeXuE9WqqP1mbEcTxrJgyee2xZg4nLxt9QSp7cBp2pWiUs5rVKmgEXR7GH2BszSZTbDvbbpUwSQeFj",
  "key29": "5HEghZDkr1YQkeCPqZbtNvZ1ZgJ8F6DL7w4VNXG2m2gptG9rGJwkWSaqEYFdwiLy7SeCd7D6UXzj3EBLi4VsoQDi",
  "key30": "3RZyKDcshefVEodsrUVqcZw4js6rihFLFXhKgfW5RB54Fh2QZ7FJnS3hSmHpYraum1MAoftPWqVZ2iAU6hzX8hMM",
  "key31": "5QkwivV816DPty3aC3f84xbmauqMAHeo9LG73MayrUQbSARov5esH2gwvWJFoBYms6ggQLcT63mPXP8E5PLii4Pp",
  "key32": "3jrHLsmL5f2SJKhPJ8Hqom6u3QxN5f4SLYcjQDV1pGFRhoxsE3J6GWWGD8T4TuVqCx1NpR8LoVKeJmvJ6gxCyX3i"
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
