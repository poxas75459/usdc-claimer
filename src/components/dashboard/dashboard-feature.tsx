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
    "3TELoYHi1Yg6NBUzUq1EKNWZyRuct7gUwwc96dcWiYfnbtsi1Trn6q8ARaMNUcZuYrCnudjpi7N6PmAFVryAuFVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xDAvRtRzCbGXh8k9ud4SH2BnPC3J2M4Zjgwm3ivLREfzPzFD9mdn8BLPbUXYJ2ZZXLGH4HYTAtQWhU3ZNqpuEJG",
  "key1": "49zPc33Gb4uHXEuStnjJapSYiW5gVmKPhmZ3o3jgv7gJaKZMLxAwPwqUsKiTZnsznMLRxxv2fotJbPQ2VV4S7smx",
  "key2": "RpJZVwGyAoirBTPXiuJzaCPqSYLsqBYzkv9zfnftJuUbiwGTTC1oGh6fytZBB1qb1uTLKCChuN3KUUzoUkanHgz",
  "key3": "5mTvnuCz7kLXmTDgXyHy4LLMDW5AMKfK2PauHyCJHSU6agUUX5m1jufpgFRa4excWVgN2viWdj4VbK5fHF2iuTmd",
  "key4": "3WWLfFRMALb6Dsu9sHpENcS6st6KhrZP9aBGjmgKP3NAy4sUPD2rdL7Lg5XURXkECWs3r4YruCWFH9kG1qXenWHq",
  "key5": "5GD2Ye8iDJj4KVubnCrCf2pY35Pv15eMd33v6ss3agN58GohbPzNF6c5cnYhKZVLF4gCxRB3Fmg1qCA3LxsAvc4A",
  "key6": "4h2K14EbySwUQTJwBk41Evn4e1WpuTvVeQqrqcCYZM8fErSAwVtpnSsYFDSuzpdRi4cqpWF2AdKmUFpptsEP3coC",
  "key7": "5hkL2jDB71gg6bRWnB4uQjLJnnthGWf5AafDgwqRzkWHrrNgj55EwZLMyShCVLriQZY4ArT6Xxz18ZCjBoyNhYXK",
  "key8": "2zTRhCwYhGC6vXgAdUEWxGMMWENuqJ6LetUAUxGS7nVuKjn45ohQhX95UksiSNbJ515C5hPWkLDmt96LB95eL6oK",
  "key9": "5PbXx4Y3TAj8cpjire2mEffZJ1Hs8hcSEsC7d5xfBsaVqV1bnRW9zhuXXy2QdFA7x3aH9VkYpSjmMTmK52JMHHA",
  "key10": "3JojXjXg6rzBxrFC7PYtR3fZoKGhHztLgFhzwHkppvJNke2cahSaWmQyToTxNm5Eshe5v9JjR21LJ9ri6BqHQznr",
  "key11": "38gw6gmhtm9GA9UW4bm3TPY1PUtaeE2u7L2YQT7QqoJL6TU6L1SsM1Lv7zLn22PmvPbf5ZNfqYoKdYZGMkDMnykn",
  "key12": "5D7fjwYqLzbFqW7oRhii2aCbp4UYnxCmA98UGkYUcv3ZuTdR377z6F482qqZ9MxAogcGG1FwzfSiWKJTRwd7JpZ",
  "key13": "GVWJRpqZC2ntpbnarrn8D9jCXspcW9WrVgMCpNUTUgkX9bLvQNPP4VA7LmCwJx4HYEDgitpWSTCCHjRBxeGLJPs",
  "key14": "2RLVxzcs8o8pGzpn1KDoc1cKtz8Mf6mjNQpV1Rvofb96upctThAEBTFtZZRZKNWYyzEjgfmvB4SFXaFFP36CD1Ne",
  "key15": "3BVZjhLYxme1M5h773Fq2DWh8tCpFhecsgDNnhgifrQszqJFqFLbpPzZ1fj6UqU2Baf4EHHNA6iikwbNutTSni8Z",
  "key16": "64JEwZQXU5TPaTSXU4NGmkVHu24PSRjeX3SBweiRamo4bv36tTL74HZCx7GzR7t8mkYAGPqXXsww87sbteiqJZwN",
  "key17": "aeBFWbNF2soSLHhDZRQybYu5r2HqLSNdEwLAM6WwTfbvt6Jeujk1wHDogEbQ6ZoY6SQgHL8D5UnCcVhAkT6KgcD",
  "key18": "3voEbDFJJJhWdYdepRSY4QEbLK8cyU6Z68Q7z8TCJ5Ys8gaJeUE3oMmo3NTct2kdB31JvYvgzhAjVgBfhFuwy7ZX",
  "key19": "3iUP6feykKR2jYQatkkbwa4HBU3fnfW9SXZZmjuDevCiStN5wbccPE5hQZ1gRYjsRCVnZTG6LKw7RqHjuLnPSsaU",
  "key20": "27Tn4FVFTXpBBjLhErGweeENp32eX3S2mXHWRwQR38D2G7MG2CgHeMTPKK44J14SMo8qho4LgApz2hiPZqjEUFeY",
  "key21": "4uqCtEhQwCNxg4uf6J2TvHkmrLCWGDE1DkLAFX1PcBU8JRkqNWwvPgUoPiKnew5Eu1dDqTFDLVrVHPDCBdYR8ann",
  "key22": "4tpHfDQbRENW6FgQh9ETs1JDqHVFev5LtenB1gzX2SV42aeAxe8muzCKm6ZYoWHo3wmzj5BGioRZgmuJyQuPhirU",
  "key23": "3i6PexfNqmNNEXtKiHvFJ2sHUNyJsXDhbZ19rpJTCLBDwSZx5bqnhRQXvkoQqkkrCYSDGPmvbDHkJXE4er9ewrZj",
  "key24": "4kXBqBHezWd2bkgxnBoEPkatJM68T1DTvLjNvz3SAQeHCwtPTfThYiBDL64cWvdvaVh73e85DmiLBtb1tjrqdwLE",
  "key25": "hWzUL4UFV5RRcpPFt9XWMKcnoVh8GPzJXANADqq3SpGy2vDD9uwDoCY1nbJpEd7bx27uY6mD86da3NXHHp8QirA",
  "key26": "2WB56i1iTUvpmNAoJsBr6qZtpDVN2LdaxyrZgTW6BdNUeAp8UoYs1j87QzYGPVZX3FZtDNcEHp3HAGseJpBugkKK",
  "key27": "jGof3BwKjmyBzvRKkj6yVSM1QFAkcKzRBZq1y6ES8WgLZ1oT9wDaZHyS7oP3q2Los8D5tfyQtCwYpeGHsfYLPQj",
  "key28": "ohW7NJDuUQn91FvSHeu4nTdejcc64ysLbKhmKC2vJPW8XggwHyyU81ovyEGRY3sJhX1PK64A6NVpaLfLQgDfo3f",
  "key29": "2SkqwvB13PTM6q3smPu1jZFMwnhHLPM6mcTBnpMqkKmG9Sx8gS6cnSJNX1jWWpywp5eYHuUHtCvUssfJWCYkkP4P",
  "key30": "3LeRYvNR5Qec1TVkz1Jyg3QfKrgeiqhZ4iXYNQHbVuELdEQ6cE3ozc8Hd8gzhAe1mvGVi5mfujVNnaAxt6tiq8Ph",
  "key31": "5HUaMNEsVA4Y87gAb5igCWMhBSZPGK9CmWQMmV5e9fqZLWzM6rq6okfMdWsbD4m11v4qe4J9g8nP5k6WYM5YvoNB",
  "key32": "2RtLDMMiXeuA97wTceWoH7pYWppxS26LDtda8d7Z1TJYkxr3oqAMcgtPDppHn1cc6JeUoZ5Q6vTyjUttBzjqFmX9",
  "key33": "KXXwpWQxbZgPzPRyLxeGSV6EUL6yhNuQx1S76fZKwAF5B5GPXzYR7VASS3MuJUrR3djn9V97CwjsaKWUe72BPzx",
  "key34": "5PUJP9dejiWdoyvZLpZqvpLp9QgP9ets4325a8XnhkxQy9Jpg5FMwvQ4SdBYkbDxgUoQ9eU1oCB9t7s48ZGzVhEG",
  "key35": "tU2oTjjQht6oKJoVHguPzVYwDoPLzm9UpZQ3AXt6E8F2F55hNoMcip8SaXrNzjJM9ShFVFnTfhJ3x4TDdRC2DoK",
  "key36": "3BaY3P3aBqKWaguyJMAVfcq82ZE1X8MkpdRtqWuJSjEb2SCjRHNQAaGUYBrXnJ9C4F9GJWSeuMqdzLNhvcX8xqdL",
  "key37": "3S9iq1saqZrkXy59twkYQcWLzmTMpXbHFF1zesmvvC9pgqanPuNpdJZEgMV6vRP8Z1XvQ3sXcXPuMR85hMRYDwqZ",
  "key38": "4HVyUw9ACzzcCn5cHkYBEDaGHSmugGNCAvsNYc9nf5gNA2bh3wbBbCsJFd4UmBc7TGneiEEfjkKZ3juMvTvvXYsB",
  "key39": "k3zdQgECeE4ZWGCJTAfkKbPAgPQsmMi11DvVN3ppu3rMHZMMoQzhnVRoMu8ntStXyj79qw7BsZxvdg4HwuuTAbK",
  "key40": "4xoVXXbcgYZb193bFk3TKMPzFhfDVX6HqQsR4SQzKWZFZXwb3jAZActGYVsZzveZuA7d3jFXbnxVqqkEHDKagMS5",
  "key41": "66UvKQRMeGjCTMtAKDen8WstsEB1mKXjaRw1jidqz4zaK6Nn6X3PCMDaQN58bhbcyxkzyzKTWhUARGFgNbKHbVUK",
  "key42": "3q4LnqLK6TKk119stMVrvxZYxwFs3gzzC8bX3rDh8n2anpGPnvScNNXhPLhaB7F8RoUigHk2yeeGohmw3WuKcw6M",
  "key43": "3Vxi5vXyCEViuexpbaCurdXxjW56NrNj1nkzbMPtE2G1Ao6fmJ2dxZAAPJpwEkWtLoPDt8GVAeDu3gRbznAZw1eA",
  "key44": "3keJLNt4CrXcGmsrX9zzQdNbxYtZ5appAMSegrdrT1F2XJ73Sx7f6XMqkwrodHfPGpN9oYTKna2vYQ8FzMNVc1pa",
  "key45": "2bnvokLJR8hmWrm4EjBv5KDj9Rco8xoZPotHr4AY15d2WWNtp4xQAF8u6qsoGCP2vAGrLhUELr4VfsTU4t8oWnnR",
  "key46": "3M4L2D5yUY3X9zzAm1uwgoCEckGBwMxMRCw1naUgkb5rdVR3LeCDQnAk1jNhwcASHmZVUhiA4QkajZ7ebG2UNRbA"
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
