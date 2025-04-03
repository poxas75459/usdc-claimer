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
    "5DPeECz9FUpCKXN1Ga8ibinLpzqydk9bMwJ9NdpDzkZnLyzjoai3LFBfFNec9thqUJ5MTC6YNjU7gXr2LW6Ht6jV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x1dAgbXLFJyDg1WccvGJ4hMajJwbxR3vUTxDisLpKmwwF7xC7rVXojMN2CNKgYeMThXSEP2bw8ZDZCscMyReN37",
  "key1": "4Eih4HTvV8wv9Ch7uFNjher1m8iHFUZjV2PjSCs3DnrT1b6H5rAYBa5BpSKv1EfgGEF5aA8tLoiw7FE8Qi7ZitSf",
  "key2": "2wyxBiQjRwL4bjmGygMh9qYZJEMrNvyfPuVb8siFThf9zbysx79SNMiY3UCvQ1sPNEFzjrnmJMCgaAbFEVrPyfGN",
  "key3": "4rk9wj8ErQVdVvA5vXrDxNHdQpYiqCzFFDfAuuTYLMJtgJPtqVj3rEJKa2F23BuVpsm96f2dkz1hsPYGGXCjBgtt",
  "key4": "PbC6uZJNfLkU8LNBVvLNG78F1kCDhwfokoVHHRBz2ddXQfLP4cHehfy8CWDywYLXCx9vdPWm6hv3EYii2AH8HM1",
  "key5": "5hjpF8cx5AXBhsuu6fmyPCaK8LzWKDC789FLmhCwLP69dqvMB8PGRt3FtAUYikn6565uMFYrDbeFQtooHpb57PwZ",
  "key6": "5XuNrENwN1xdRHELhpCPw6hTzyV8Xtzh3QfqaujxfvCcRL97zT6VTBwk4ZrAy36AtkKDn9zpFgQ1BbTijNXKAWF9",
  "key7": "5AB8HKhN64JhnowRbqEwq3WncyrXYFAEUZgq1dEB2SJ9W2JqX3HrPt26PfsH6NBprpXARstSfQTtkvzhPEgP3Utd",
  "key8": "52da5QWyUnkj66jKLouBbQrEhn1Ns223jwpMXRCLHb7HoKDHB5DSdyw1jA8aqMxvk98y2jiNeVLySv3XdbT6bHXc",
  "key9": "3vGp4kLWJayycPXtsrDQh58ZWYtu5GPQ6cPxeFydziZK8RqKsEc7vuvveyuzZv8NPzPiZ5FNvy4KBreNjAb3MBV7",
  "key10": "5JHUKJBozhCndMf6YXJZyunJ7LkKRMK2vFetmUvZ65n69UfSY8GD7HW2c2EwvwkgXbMxnUtiKVE4GxEJQJqoA43z",
  "key11": "4KMhu1rZ9y6zzMeCBa2JWJk84aARwjG5Tj9buyeiaG98f1ricCmXExpmAVtVN5Uk7TFHDDNSdR6EkcKaYgkgq9wg",
  "key12": "2tzjdCkL2HQ8jGL9MwQmcSfYvZUGQaAVfMw7fXASF2TVkJKZTrXyDESp4sxCCniV6UBqqY7bQNp8qdJvyYMLc2i9",
  "key13": "5WNd612DYqhEfkWqDNVGm6umYGePPUYcKWryzpxiCkS5HCupXkjskEEoGzXUGaJzuGYYG1J8Esvsh8ce2gL2FfXn",
  "key14": "5bNt1VNP7vwfYmGKZJCLV5kJN3b4Bjvd4kSxjMdfQYCxZfaqHDVqiQ1DJn8f2o613xvwLhrs9vSxBW4xCvFyVLjy",
  "key15": "59vFqFka1x95vkR2p7GhPHPLdgdD5JQvXBtDq2cARPZBSKCubn2hLgcYKnA35hQLazUCFsKAzUH1geQNaQGkYxNP",
  "key16": "HtoM15b1tBHFSUSsLKYyNTU2VqYESs3Xr1ggHx1on1Si2bgFQZafUDujsKFA3mVn3Vq7cozgRiWScghR36tbmCM",
  "key17": "5djFiUDEiMtFxSnNjCThoBJZR8B4fgTfKfBFtiPfA3wDMgehd8viiyHALb6LZwJhwkDsTaK8x5WhgecBQfxtYNPz",
  "key18": "5GnS6ecixvrZpdsVS56QsjpbpkLU21x37X3XhwxgxJ5Ddi3afyiCH8rYQB2dfjF2Cw4HWfgZkeA8w82SoNjhvuKZ",
  "key19": "npfiJ3KEoR88vvAbvjLnwrDvPgWbfsVtT1td41QZRwuTm5v38jKo1dTQbhkHEbnpxSyW2mvEMnmQFjxjHipK2MJ",
  "key20": "x9qphwzwm4YPUkKDR7qdyHvJkvdTcbbiVvCn7dTpQTd5NZ5m4BgMMtTP4wt2BNGZ6phbDWgsh8pDwQRRFNzb4dg",
  "key21": "2oJpMCmXwnVgDNvZeTzbcX4pBrp5ZwkumNmXkLuwwu8enaGSqo55Lqn91nybzD9u7Hi1EsRPN2kvWZjKNhbaoq77",
  "key22": "L1FC9NyXfKyDfo4Q2ccULKdwgRJzoM5YuHUMDCx8KQKEd9EuMLEe62cQ3G3kZjFeHtNjZkzNZEuPAzwfoUendm5",
  "key23": "62CMsHpCLAfJ94SZkeqxKTNNfATNjc6qJ3HkhBQySEnMBxNMhECgggN6xiL3iKcY56ASFH8epKUg3j1HhRAqGv6B",
  "key24": "26tbynUEKDvD8PiATgJScHQ6zhdVNdzbXvzVSbd27yVRPvDH6atyucqSf36BtEecM3PJLM5P4dXnmpHX37XTyC3q",
  "key25": "33dbR3JtCnStDSVAMy5LxFW3CSuQEzWt24htSzhgFU8YDgiULH5bwB572GuRR2id4uYUVSYYbtSqkVLgrGp9QQya",
  "key26": "4euXc6qiX5iXAXP6WLVA7G3SQ7xyRhHSzdDP35gwcsiGT7WefiBFbtCJd4TWtvqn9Uyz5JbSpVAuXsPkgqBS97Bd",
  "key27": "gkL4KCLDUu9wPUq9JycCpWYLwAP1jL7ZfHGk97CbdFcTVowKwWXRvYs8YY1Tdi6ojZYfwAQ9t618ouWn3ReryA2",
  "key28": "61jwMgFvWqGmRW9fMV8aF8r2XLjxC4gV8bUrUzf14M4oErorpoFpfCiaommDcAv6ig8yGFArNRmTFVZvVJGFJpbS",
  "key29": "453pLYMVGh5dYut4hP4KnJKKELY1D211EmJVvWzf1oKFgdAHC6Yvdy4dq3S7Z84zGqt8U3h2Ey48ahA5yBbm8qiK",
  "key30": "4GRhMsGJLaGE36voGMFxNMD3WuVwA5iedmFif4AzfqfZKZ48FEW7KmKZvsi5oBZ1RQYn36fahc9bgTPUxJjBEmCj",
  "key31": "5WH2u8hTuTqJ1fsWPaM5zHqKnB63Nm664vZiqzmxAzHDCZQd5Uo4jnkGkpY85g6QCsqxoNgHehxaH4gGXi9hmHSo",
  "key32": "2tuaK5fJoByyWqhCFQ7w8NMcoPzVEyERKSngfPdUq7FWokJZWV1UKFaD1pLfNeesmrqvPpZjFg8RFd7kQ4xt5mFd",
  "key33": "cP6qDUqPUEWQLD2EWmZXs59NePAyiXXtFKvg1aisJSxwveMBo4cjFdzUBZhMR9e1jYZX7Z584gR1ouwTMqjTBLT",
  "key34": "3hKkj4U7RpfvNgReZ3c8HbQHbuVj9zh8kcHVT6B9jbJUy6PjB2WPDdGxPUfi8MYWSvJyjGyzUr6imtdjHes2PhRU",
  "key35": "3wwhJ1SMGTn4qAxo9tYEmTEkmwLyRqCEAGjvHb6pUPuo45V3bvLrMPehtwmF9FoFVaBrpfmxzEM3NYbuZkijJtcb",
  "key36": "4dzf3VnD7AZpCvyeuVe31f4WHEpdcaqRczAwoo1epcjhJkLMLGwGimDvz32PfVTECqpBxTQVziHW75qEpMnhCjXK",
  "key37": "3wrx41u29ASDzrZWUDouFfKnw6u15RFA5xVZRQmXnRXGAtfFDMSi4NtSFv95ZsDV2EpSTidLnT4ZTS15LEZWhzG6",
  "key38": "5GN4zhtk8Wq6XZAqkGizdC8tcqETqpvBuKXFensTULBsMRokAZ6e2HVrBai4anAFDq8hdejPDzZZj3Y3FoM2bhNo",
  "key39": "4TiqMMKwJKm84VRDEsVRYzZou3DiDiqc5ReKMwSdg1dUjuPfLgVQvDQ7AZzY81T8gVWsTH1hki5iDWqHRYwN5P54"
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
