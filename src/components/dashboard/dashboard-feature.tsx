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
    "3SFXEchmBPVq5dkWgTrQ8ZpJtVm78k6gv4tDNsBj4E4SyeVFzWJmYRREXtebZVv2KtEkdRmhUyhG3fGLjqBXchcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CrbfZaLULkugMF9uhtF5an9SN4eiy2qWBi8WjmmMDPwuZDkKe2a3RKp6YkCbLe68tLL1E6oTo2F9Lg65Y2U8S5m",
  "key1": "kAL7WzAkwqp4LGKJ1hGzZtk9vG6LV67RsgNJnLCK3jXbxt4x2T4GQCZpc57aZnE61mAhEh5uq7AszYu2KAScz9W",
  "key2": "66KkHtAWeodfLWcwVepH95cRFrcoF615LocMGBandfDAFVGY86ZqKfihxXmAmHSTPfEH2ira1U6k8eTwhe5UJCwK",
  "key3": "48CeN7VWAyXtKK92L2StmoAk7TKmZP43hhTDfxvXdEfhBEjuJ3nrNqmtmXXKztv6Ltc2U2C4BXZ8DhgXvjVUzrmr",
  "key4": "52V3gY7EexKdER3eY56URCVtjUdiyWJZshBhwpg8MTfBzXLnQxQJrchqcYxEnQQ6QHbNoXEsAgWJneyVc1NuHu3z",
  "key5": "3MAze1AvxStUAeAj39Kv3JeoQFaFto7622s7GMd3J3BAV46dndzMkEdEJjnT7CNvvY2XB1wJLHXfpWkZ1NjDVdTy",
  "key6": "3B6qbeZNtWZTJ6BoYNYTiWvD4HYkdTM9wPgQBvh6DJeMT6sD6q3sCKGx4a6mTs4onZ8aNRp5nz48faxaqtwv9eWF",
  "key7": "3F596fnzisQy8tFHyhJ7tjhAESuKd7wdxqVHgPy4oUx6Psw3JWon8Ry3SETKkiDghM9rr7S2jC4DxDMjcfSr8uzH",
  "key8": "2MYRyxiNnpjmb9aHfeYQHZxet2LGka8WaPFTrpKvQdS8657TV7AVYPpTZUYkaeCMhaaGmdvcBmd7ZFaNzzANsLNF",
  "key9": "3Ef21VsB5V7ZVWzfQh4gA9hs9fRqUmtWmtZbB9F7tTdCriq8uojf7Nukp4DrdHvuLYjgcGdRSzLF6EBycVTsMsMN",
  "key10": "3sP4fd3FSHR7FJXszQq1XSVXhaoLE1b3hPDkJJ2A52F1PVQo289yAZNbgVxqmVrEtMJUTKqC7rL3iFsZ5JDFeA7e",
  "key11": "4M48Zu4d5vUtodQegsGUPLaY9eKi4btQTUWogfwXYCmjWhmdbK6YDGNnXJT4QypegZtxNYZeWAa68EdNzDiYKz8j",
  "key12": "5KS6HTDjUopwhZMUr8pxa4JVN1NMfB12VPi42rBgKDCMoL93EarHti2KfbYyh6x6g1DKeKSAcFnYfAstwhaqNHgU",
  "key13": "3ThRurSCgvde4xnDx4GuTGrAVgwrPDWweXhZfkNesKEPXPZ6d18FUzQm1orYQ8afks248ed5ptoGRDqnWSk6xdjf",
  "key14": "4RKc1NEeeGciVwLLEkYwbZFHSwVvD3Gb1FD9u1sfE3fL8FnVohQ3WKoYUEZiGPUpuHrtC7ozSP3J6cyJna8g5kw3",
  "key15": "JLFgvLzGDtCh5eHduCuh2sxxopcfTeoF3tkTgCGpFngwXfHqM8q9iqeti13q1Y1TGT5bPZXyvbebuLiRzRZWWcH",
  "key16": "3AqKA7yD53Fh4yF2aEomXsjGzLPSAmxfcL5maLzP3C1wLejgceEcd6Crpw29qd6En6Timwg9SufBRPwtmniz3bLX",
  "key17": "56JYqRw3Fzttdtn7m5pGwYHDRib1cWHi571Nyov8Xc8cTMXQS9jHV6tD9fSfxFsF3DVBEwYX6uSpL7rAjqrTRq2y",
  "key18": "4Xd5NuDCWP2WPofTsL6e3rxBKgwaZ4rD9YFYwRyb6tTeotfewLCbXF7yA9q8HbDSxhrfUHwx76u8gM8U6fXtjU9t",
  "key19": "2yStjaPgDQpzn3bsyPSn1PGRAXpJJbFMT6JGLuX82FWXC1W2tB2B53RwAFTyUr4H7qw2dJXVHtXYzvtBSFT8fDrn",
  "key20": "3kEGaUZkvbN7Fi5o8daZ5LtLtHTjdUhuYFrUQLrEqxpMJyx8g7kMjVsfgsfeztFbXs1Gim8HtAPKUAZ4vBYochFa",
  "key21": "5q86VsX2YoHeAGG1gMpXGFqhv83JtxgG3ypoUaaCquU4gp62oY2QRfHvRcbizovFX41qoesuUJfDAKH75rAjTJaK",
  "key22": "53RJhSBKXFfWSxyhGJBVJhEvaqLTqWiWx1u2gFtLkAEkKsoRz3Lbi1ZvJadbBrrdDmuGNAuv1UnRzuqmtEiqCoQm",
  "key23": "PRsquZHRpNAwzUtZXe3HP6LaJUHs5ujaBRY4HJdqfQZd8wM4fFYwDeKVpH13Mi8jQU7wU7v3Li3GSmjSqhjKUi2",
  "key24": "Kty7Bb1ZLxyoWE6w1QKjs4UNeGJc5stRtQiEjVSkASCByoGYvtd4VC6LsFeEtAkbVhEgJFUTmhmgqqg8bUEBtrD",
  "key25": "2fzBjJqXHzfEHGVR5kCJgFdb1Xt3ENdPn2GfYsJq1wxRUrtnWcHHhGrr5DbYV4o5txrvtk9PNUFGM2zCQZGYXJSd",
  "key26": "5ETjFCJgoDJ348zuSzaHrz6gtRpQ8GxdnEXQ3oJGc5eX2SEtgxAfadmqByUxRMwKqWKLztAg4WtdzHrWba9RVgyt",
  "key27": "5S7mAgtwPTy4XqkpyChfKK6oTBPkCuH4bE2ks8Hf2Nh46BMhyTVtVjVH1Gpq2af9ctvTfkRYLpNczWhdReenptnJ",
  "key28": "3SfjdgmjtiNUL8QS6NPUMPBzrE7vECJUMPAtiRXUwSdp1gjYBLD8UdHJYEffMTJ6tXURnPjMWD4ncWuh6sSyf5x9",
  "key29": "jTtUixizfAKdaqgMGN71eExBej79iHTjddMoMAzojEkXiHYaHmq3fXURGBYeA25faQvi5z5TbAk36up5cnHFvLC",
  "key30": "4esfejJWvw4KcEL74N6unWRRUATF519nnWHUFwGxmFvGbqQnUZ6hwNc4EUeNtaZt2Mp48eygVKkk8RU2HLvpNjyJ",
  "key31": "2FM7GgQfWeFGfZqTj1eX2pXSzhVYVuPLtG7oCgXrjyAQAAtiB3qs3bD9iD84CjobCGe9UgZk8H3CtzJHnbGcYGEM",
  "key32": "4SWzHu1kTnhzN4TPBZC8u8HCLKNuG9BGWiHXgAmouiAo6pqqj2eoHjPAwpdQFM4ahCq6oH9UeLC2mcsUGNX8JfLB",
  "key33": "4i1mhRME2qLJmqkj3VuC5Gi1N4Q3QkkHwq1EE6TzrAdi2PbaxfciNnPNr5t1wGx9b8e8A4RCGL2s6cm74Smge8z2",
  "key34": "3q2B3ohTuoxKtLbCzLta4FzJHwf5D3dvomdwMmcenPCUj6zPjM6T1zJwosLoTAi9boJpdt3Jjg7ReWD2j6usfbab",
  "key35": "3YNswr6BTpDVvSgMvn3YXg3eHw9nXS47bxRkCeAJd1ifKja2LT83v1asy9a2APWGpz5FZ9BDfmPoFgnqFD7j6wsL",
  "key36": "2QtYnnnmZKaE4msew2S9pEs3USQwtwWqFTX6rLJDNQLxTMXPGKcgfP7Evnvq2Hzob4HvcJdhxW7qcQsVpjtnkc7F",
  "key37": "4Sm7ng5fWtyh3aVzAFde3wgR5uD8qMgyB3X6GJZtMv3TVoy5mm8dWLm4aXGcJN32qfV4GFjruHKMTWF4YCLLPzov"
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
