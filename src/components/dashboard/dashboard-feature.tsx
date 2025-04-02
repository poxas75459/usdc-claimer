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
    "3J6U8RagFjPCpMQCVemHJQENt6NaL1ZnWBDeXKWTW5oqTPrbcELiDnswdhbnRm8J9uRczHautpjxPRbM6hdRE9Bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23k8pur1TB2rmdKVguHbMZWcMR5aVLZgXAVYBf51Y6Hj78dPA7i5X4rYqmuxWzJbqF72kw4DLq6MLXjxacbRHGEc",
  "key1": "4WNkG9NTXDEZVuYK4NTAkwaspgbUcVEyDcVgPzJUF3x1EChBjiSo7vXqQ5n9EabnhBGcWN4Vjht1enF7iFZAQhgm",
  "key2": "3AspE3co1czkzxtQXUyeCXxmcqFu2LqLZ6ce3HvS7qd3LXMwBopR7PSc58ozk4tN1AbaxNy27Y1mpfhYczxj1Wc8",
  "key3": "3YJM7XPWepvEzP28T8yyGkDHpAG5pgt9nVNW5grY7w66oLL71pnWsAhYQ5QzgYp14YW7RuYGkZk1fDLfr9bxtn75",
  "key4": "2jhmP2aVBaHBuLdNhSqpgm2ia9u5YBSBxrMB1AcxxUPw6NSqizrCTL8B9MXq7weDX3m66vMBopg1GR7idPWwmUim",
  "key5": "2n9ARDqSh2WLadg7U8AdE242J4UmeRLLdbnvTzbe6UiBVTPewVfwwTuEVPCY9BQCiQuSGAystxqbiEb95wdiqBMv",
  "key6": "59xit8M3NJrTk8KvaFbk2QP6u4LF7VXwTzpSQHrxqzdvK5Rkw8nmECxc42fMrjfaLb2zcW9icGU1PMutGECkr6AZ",
  "key7": "4LEVoYfnromF1C5kHCm8pyJ5gEwnrcpYNc22wevbvXP9RFgnLpHMFnmfibrGqBURbZKv9n93uZjRHzQzRQXwpoH8",
  "key8": "5Hsiwm3QQTumTiVianvtmdEtsLKVt6HCizwbcLG5cBZVCTdrKFspbBpcF9uhB1s5wBUNgxascugwJ5uTHSpYr6bd",
  "key9": "5Cx8BYeUfojjpRN4AettFiruMjSoS1LH3qvdo5Z86tZsEwSWTDNWkbSV78zUNv7dUCKfHgrxdLrii8xn134TkAHR",
  "key10": "31V9r1dyPsFJgqFUnqyhwxbt3pwcgeW27FUNp6JriYY7w7dyrvKGZfRp3G3rZgbrkbSmAHW7WeYQoAwd1j5DxrfY",
  "key11": "3GhTZpvncCXZZJKY3f4H42MF2xj8PUd42fFHqwCbrabw4znpnU9oQ8szjSTsKacczgSWKbp6wwMk9WSqDXdo6m4s",
  "key12": "2a9KicZBb81YB6fDcmCAnu8psyqyiPCMtQfrZDPsZAG9CuBrVRboPuYGNKNp6ZGUbd9zd9o5JML3Q5fQzaS6Vhoa",
  "key13": "3Hw4i7WVeKspH8THTL11hFpPsr1s1nwnbpPn6rMyeKJ9wjzByFNiS3YCFyttFyvimRSe4ZrQSNrwjTjXJytgXWPP",
  "key14": "3brgY8MEftEFFCyKYjfUtXyTju4Xj942sR82kN6jsGSpoBZr2F3tkz2p2nMpuDyD5BXrNMNiYHVYMMG84KEkdVnF",
  "key15": "3MXTQmFSzgW4TySUQtdw5WGLm2CJ5pjtX6YJrfpif8T8fv2AnnbBQaqXcxovvvehv49E9Z2Xo94J3eLUjHuanYLJ",
  "key16": "xWx7KeBvYLSnkLTs25eu3cQe6rb9yATSBMome1xRnCKM9h4wsToQ4aBt5t6pPUd1M67v5uWbtrUxuo3Bbwdq9MJ",
  "key17": "3qpvXNBiGbK1T9uby47GpYLJnC8NNt58pesv3sunPRVDAaCNoztP1d28gAGEkZ3c8JabGFkEVKUcnxmK3YNu6dEw",
  "key18": "4D5uDVrxY66JZF9x7SVnntCHRYAbsjA8N9pbvxTfNfY9y66f7BXNjmEWYBEMtzP2RqA3zgUTj48dYe1WCMApdaXK",
  "key19": "sXReBCZDHmH3CJPQH3uC1ZCqYXSL4DiBw2s6KgbSTUGC7ixWySLLtGWXyT2aSx22RG7SkjwgWhxKjJPauYAMYZe",
  "key20": "2JpP8yEtYZMXw6CdR3mTLphtLULtrGyhGYzS4vX9wVpj6HZKWVx57f7XxJwEd6EAkhAb8QLS57zddbyJqb2XQNqh",
  "key21": "3C4ndr5PPxv5CzabybQTSo5YZYFdNAuGbQ1VyZdt75oX4hYpngsXHonCLjBR9jQCyUuoVWK4MihVYGr8HwagnE4w",
  "key22": "2LrbWAim3Hb2hN4sjhj1hqKfXupTMdzJuihVKbVRX7F74zuDDSGD4kMtLuzTzbXc92VJ1hqsd5J5ryqssxYTnNrX",
  "key23": "ckSrEn5qFf84pe53KnJCLJcMtyfD6DrngecULTHxXAD2yF6NDbK1dSVEQHzHaHzzYfLYGro3UA7f7Q86GJZNH2G",
  "key24": "4Kq5MT4rV2De3WLPRz7RVxVBtRahGinvemBXSHLsEBf5fpamDNdGmo4KAsVtZCE6MKoqxQ3hyZ7wmpFzZ5AAsDyH",
  "key25": "2CZpnSvCHiPNJqXvqTFZyD8grcfqH5gjccvazuqqeTGGZ7hUXLnem1erjoeGUCNgtmFENN5HzxUauFKm95Yj6Ad3",
  "key26": "pkTdPbPUUaoVXdSKS147V71FwoYFqkEXYCaxQW3CCU2PnYTiyHcMUkDvSyxvheRn27m2itGkGwS2US4RPjvbcQq",
  "key27": "44E88R58k78NuJ6r46ckxJjmv1wKXmiGknFJDHZwVcdKDfVYUJPVVrGH9N1bMm6SaBtf2xGmXUrv6VmdC1c7fyWJ",
  "key28": "4Kuhd3tYtrtNSjd2vzpZM191C5knhw8cbGECZYKHNS7KitsgkYfn7cKwfnTgufhS1mw3X6RmBioSnYdYtNRSNw4K",
  "key29": "4PDvmjT9WzyDJCzDrZDdYyBhSUEHUWE3huwzGoQESbPqRW391D6kzSU5mQB6Lyk2Ccs9s2LSEtzffy2LX77xephV",
  "key30": "47GyDfXqccqxpUGf2e7andnmTjCXRDDvpCvkJpypY3Q5J1djXi3o5zDn8uw76B9ncq6ymCpAwjy4h3pWUP9FSxWQ",
  "key31": "3VvCUeTKkL7eG6rMfXYZQmHrdawVuibaDSMLKunVLYopeWdzowWmZMJQEUjXM732FqqwD2cQPfWKYDrfCvVf5es3",
  "key32": "47ajAAVEztXVeuisvXqwTrfULT6cSZy9716M7RCA7tbs414RKZKbYXzpk7xN1i5f4Ka6B5Dw9p25nzn5WCvn9zQ5"
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
