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
    "4Up8Wo1tnKP1u1C7S26S1jb9qF1QERA1Xqo5Rt1vnH53zi7k1fUau8fgnsZHVnKpAv49QFNprengSzQ7Zo7rfjpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45oVUbvYagBLbvNnTP4xsbLSokgDoqzHgv5aeSS9w8zrZXDxCvrFjjtfVNQgsnmiGNb5JAHPFmFkSiTtgUEWBFaC",
  "key1": "58jiqDK6k7X3EpH96chHMNfY6LV3tDjWkR8dxmWSCj4KHs5DuhHZ9KDW8XQDEBUF8VaHQfCg2ifCWZ6DfP6JRLa9",
  "key2": "5Tk2LSLVZBptbewjqSxe41Yt4TNAf6LY37jqwnvEZJbkhyzhe6VofpCJJspYPCLUFeBVSbnz8qQVkcRXftMSWg6W",
  "key3": "5XzK3s4j8PpanUouFDsSVD4aJqTT6BbQMsnNWK1g5wayK9ZM8eZNx3DKM683cLeNPX8gqvnPdmq5hSYFEyQJ1WQw",
  "key4": "4uAGbBohR4YXTX72PNN3SUt2XJKr8y4EpbGzDrxwCwdveuFfSzaGh8CnGM7YbT8EVefv15jWgA8rRwtV4tjD3sxr",
  "key5": "McU889gpu7eUiKnTQYypjy7qVkPYtAVaHeWJ62S1LvisrcpPdtNNrTwVzbSPYXBihW36mocqvXbofYHNTX22syh",
  "key6": "2QrcZEgK17VkwE5dXj72yDWrNzCuqKdb6oQQKF1XM1u7jZNaDD9reBQVXqMX7SHMKbc1CouTTP2bqQgLVnzfmEYL",
  "key7": "3tDVp7U3w4rpE6pDqzTe1D76c6UCsh2zdTvVSyxAvVehcoXRobghY8rZWsXVogrmqu4AAfL5LW9c9p6mc1fF3Kib",
  "key8": "5ZmMx8ydaY9LbQ58FL7fuMhbTsQ5HJY4en8fZL1uChSH5s98Jo4j7nef6asJ7HBVESJkDCUcH4FcLkiVQA9AE5Fi",
  "key9": "fsGAnDdvYiC12FtJy3nHraqukwxZS1p9i4te6Z7LPXF5mpEZJLZD17LhFEa2f2epgZF3ypoEMnzPUEvpFo8v3tQ",
  "key10": "47rXif258X9nuKaBXLWvBWQ2eZ1gL3TwrexL8eHSq8HcCqMU1tRAmE1Z9uiEsGhs4qk2KwNpp74gVwMPrz8DsfSE",
  "key11": "JzGp3N5Pa7QjWuEkLCQ5oDLAQuYb5M2mzhn5EzSScR8bC64Wbxib5TKG4x8dfSFWPKaBw2ksYKxtUkBvRWg1eLx",
  "key12": "Yy7gVqfL7joZjnxgkgssK2e1gZeMKZqsNrCuxom8UrrGUWthHBNwCE8SypsVXwHDxtUgNgx7ZanUpVSPwuUoYme",
  "key13": "2Qzqobdaej6PkGWQm7kg5RgARCzJ7uzdfFLj8NxpoYftoRchiLAiqn3v1YjVNKJ4d725xDqAtvNPaJtETX3cLo6x",
  "key14": "4q8Vh1sfkV4rV7yzdfXXcrtFxu2QBmnVe3XccNKQEtGzhGPtL4rtmGbx7vxwr6eU7PdwWk5zH4o5u2hEVFrUD6Fs",
  "key15": "3NCwCYvYJeay3gfJVAAv2mJm3JYSkwqs1tRLzRw71NeSwqt2CGTz13EBiWWUNGZLczJqtPVMmJ6iLMPQ8esHrQvx",
  "key16": "dAUksmH1AgCBwNBwFgPRuU8dZokB6VsJ2NGJ4zV3CLy9Czpmhx7e7T7VAoJ9HQkAAepZZreE7znAtaWX1kiFaxc",
  "key17": "4dxiNZvmouBwqgsj4aM3UnEDjUmtWqvtK1JrixucQ7pafty5FgXEQhtXZJXhhh2PFV4Rb3rXDGRBq76JonhKDmMm",
  "key18": "5w8wFY6Z6HyL5pFDdqooimiUYGRPJiK3KCK6PsBb4Ux8MN6X4fBs3RzJPvsn2839BXEMatFz1ccUBXngyFEDdZdD",
  "key19": "54GiRGvqnyLUqVycqDu3SpWDJKe4XxSGtb1LYp4B7GhkuEJCceBKrhQvHWYfeLMuTXFBGzktEEAFQU6TNe3My2CA",
  "key20": "5LCHSGPEqv9C8brkrwrLY5PZCwiLq924H2X7NM3ZVri2MrZj1ZD63b1LwHCPZ994Z6xKHD4ohJLX1kgQYoXRNvi6",
  "key21": "5mepVMU4Jgd8UHxxbXC3SrLYQLbTcfBQCETjf2KUUBQkzNkeqTJHtckHbhREjQqy6oAhdc9j8euDMZqR2U8kD68b",
  "key22": "2A8nwjxdQHSL9V4XpBY8hQutXB4v5t2M4DBNmgo56GWoTK7X63MJjaozWPBFRUbJmEDAFQXNC5UvoE8gULvXAQs8",
  "key23": "26jQNVQ6YfFb65jCStr6bMWvXoZUZmJEmFFNHLXJ11A19ETCKiJgoBVVUB3j88tNUndnVc9hwUcuf54f36fRyXqh",
  "key24": "5sHLrb7gsmQM4L9H6BGCqxHoJ7nwkrfgnvMgGKUgDCK1saPxtUjJaVoKo6yf3TJ6VCNEREJ165SC9udP3boV8LBc",
  "key25": "5eUkTfQHTHjMVjJpjuLAWs1ZrQjnUuhgatJ4hqj2H1BsVv3BWjQ9yGvLEihjrzqsRYdcDS6dBx15tsDXWw8UW65U",
  "key26": "MTgNzorsQw8uDa6RwnTDJe6idc8KMm6g1P4UbrRm3jWKoQ874BjkD1w2JBqcwNXK6c4UrubTGES4KM8jBWY1B65",
  "key27": "4jKSuXk7ruhojBogCHi28eE7JptjU9ke3Sb4bHrMaxC5h31GcLPSg5q9VytUS715mwzrTE47xbEivPStxiG4nEge",
  "key28": "5FuCPS99odtwG7xfPKjdc5PqcpUJev5DWPnvhYjZfyNVkjLBFsUu3ANqchT9nJXa3LnGB1GZU8TruKHRRB12Cfck",
  "key29": "4cVHDhQrDHitzYZG7fDLQhU5ceyGDFyYcb8gNcjpwxMZNTo5LRpPuaEK3aUqRGBq1DYQapY3f2ELUEsPDSBeAwDG",
  "key30": "bdLPgVd3CGuRYYoq23BbaK8WcwpoKXDkhvdHsKqFeKUBHFjhNbVg1aJgCpmNQ3YVskzy81E16iWB5szYWV44vg7"
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
