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
    "DLtYREymni8qMSrRi77siRTvxAaHM48SyGAHMJWPUx6K6jcky3227nBsCctuaarT7WwVa4iddJiVeeeXfK3dxLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tb9rZ5kZmnDQ9gMRuKCWsJn55U7C7XTR4sHYnwBxU39xkkmCKaYxmHYDJZtwySKgcPs3ZiK17H6hfgwapCpviog",
  "key1": "5GWD8NUDgCCWwi28iD4nemHvaPPqM9MA4nZ8NMgJy9dTNjfQECfJphatPC39unnRqAumaqG8Z3y2rZFjhRSWddBE",
  "key2": "34KkxkEy28DrkXkR5ehicZCxWLUr6NE1kufkxQ5GcGvRfvEegtyEdfa7ZBAqb5zPUnxYf5QKmmo1MRP3kP3DdQvV",
  "key3": "5Tz9X7T99TeigHHWiC7K3HXNf4gvwrh57jnCqgymjnJ3bmUr3n4jPxddv9M9ek7PDtCsscG9jhyV5knb6Lj4w6LB",
  "key4": "61ZyWLZBCYbBegGrNyzBpaKrWVDYtb6ZWyQPYHj37Ky8yCUkRr2QsXfXAKFoPtJY8qfbrirNr7MuEcZ3ovHK8R45",
  "key5": "2DajcNNdSDziimWrXJv3XggHBmajZkhZqSMcFxqLz32vivPMLnrxG1VUNwx49vhccvVJjZuDoTaqoJ1Go8fAH9yL",
  "key6": "vmUgdCUoAUvAxVHiX23MSFBhvnyoFCbq8hnWXT1BY73sTPF7njvaZDmxDM6Q7GQf5H5Y4K3vW2nr6tiUmf7haHE",
  "key7": "5ecrZJTmcunpz4Dnk6wnmJ73tHgUm5NfqacQMPtqoQBNxTUXxrjJfr8r5LrMUjNC2suNoLFw2Dd39XQfxekZ5aAk",
  "key8": "3Seq2avJTXbPSNUqza15bjBgQMyZXx6UTfUNos6cNMvxAjRnFyPJ7YwMR4nw7iLndGFKUHADgXtrXFmy1APAJUD9",
  "key9": "4oh2t9Rm3MdgyGq4QRYhc93BB4T8y6BpVifDLxLMMSnRcqNVe9Yea8xJTV8PWLGm33CbRrYjwHK2xNLkCQXDpCEh",
  "key10": "cERGCDNr4dqRYgqogbhDYTJ22PLo7URw9Ri3Qi4KGaRdD8B7e8pmyZFdr8Ehq5VcevNR1SVQLkHiHvo8r4j1vZg",
  "key11": "29viisrNdaQnCpcUmVvm4QjzHYnE6ixG1rxHiTjxnxMGTE7eiDdJzredgkC2h8iyze1Xqm7BjAw5J5uBRWirU9HF",
  "key12": "NQYaJt1yYqGLjs36MVYJPWYrE1Hfp83Q2SABdkYMforTz1J7tW5waZHF6ccUksLdgw9xpqizUEk4crgYe5GNcdu",
  "key13": "3pye9XUwA27kC4fTskbhgbDp6AShPe8itTGp9AmviLBZCguAahkTHQCGtptrdZCubLsWARB6n8DFKwQ1T6zExSgD",
  "key14": "2gezpWU7xYq8nBfRzU8MEmAXNdL22y7EPcVgXEWXQ72HrHshA6StxjDLKo2h7XgEeGZozrRE94XrFERdzU4T6vJG",
  "key15": "5XnKpG3Xf7Rkb5ZpMjHppF57w4XQgCD82W1kUVv1uXEeRLk1dAu5xrFjdnWQotcW1VmBKx6qXXmzeLcNMRqjbehB",
  "key16": "3v6WpJVjqanRpFNFiwW2KLT3E7VZ9iF1iV6o81CemWwkBiMMUMEBHuVkw7d9dK1dFL9ACJyNtyogSKqeT3eJdRnS",
  "key17": "5Som5AaxWrt2UcpTvswiuztDaCC1BMvPtUvnwqJpp6PFn9KSot1LKpq8o164V4L6XyU3mX8jeQU3JgBjsKiZNmzX",
  "key18": "3NmrieZKHioVbGmK1Q6jTvACETbszdQHDEHwZjeF8vpTtQc5PoS1CwHuxhoGMBnzxTGdjaXFG1CyDsF3PMdgKzhX",
  "key19": "c6pCXsPqcVpfSDLFjYnxtg2W6wYGPyZguHz16KrcWCqyKow9nWW7cBCHVb2emX1b94AWucV3xbmRGuxuT2qnQpX",
  "key20": "49p2gqJPL4oNqWcGayxrRECJBbVnyyx92xRWC6jReEwC1fJRr1ixr17xLiWBxtt6YvvVnVULpuK1Xd4MwxZpY1dF",
  "key21": "m9vsrLUCLpDwRsqnyTycn62a2jwDJQF8uLcwChv9kQWo5oLwrZbv5onAqGoRwyUy3GckbYSoyzGDkJULARLYU97",
  "key22": "4WYuBBHojgvbPDbjDHJFgWdyWk55KF6yLkxWZ4ngBsNveB8ZD9QVvXtrtX35xgqYFVTLyVKmjYaRNzz4wwULbiw1",
  "key23": "3Z5vmpqnVNSmCK8thGv3bamNn9XD9EGHnmjgNMt5hexF94CNMautY8u6xc5qUg47EgJHr8rqam8HkXfykwTYK3XB",
  "key24": "cDFMpY48ZoJ5HyMMQ2YqtpxUDyjqHUeH1idd6zmrm9zHDho4FWf6VKjsK1FEvEX2wAUXWAoZAFU7epyuMMQiuHY",
  "key25": "292hgK3c4HHVNYN7vtDUBScKSLxqMsFq4aMdB9hFMbNmDF8oECeBiUwBBRSsiYSnZ4t4eq3ZMx8Wan1CBxW7nUXG",
  "key26": "L2ccsbHtNxPTLb7xEM5HB5ygMrQAXYknV2FcCg7EKbTB4p4etgdqSqb4eDMwkJHAZ8Nbzi7c4e2w5kAW95QFr9Z",
  "key27": "zVVRm6Pup9QC5ghAyqAdoNRNhB4f6STnBi7ixFsY37BinaF3Hahd3rjnkTDSCJBHroHiaLaQ8WB7QoUCgK1mTDJ",
  "key28": "4b3kK97u3ZXZFECGtT9wSC8xyDEyXTzBHWaBToHH5e6RgJp5inJ4bZft2RgdLuaoySjWXEzP3yhEUwyjQphDTAxa",
  "key29": "bZX7yCuZVhHqxdtzHsQ8MvXvuoNj1dw4pDk8Z22YSzZvhWXMR8bgknDDMgeP8THduMXtFPP7vmTYfWm5kbzQndN",
  "key30": "3eAwj2jQhQXiLJ98XKLfGR3rBmkoERN1WjCJszzKxoHPDrimfDP1W3DcgtcoqDmVLFCqNo6JkSuEt1XcftnfBApN",
  "key31": "2Rhh1dY339GdRmsVuTL5QzeDYTYLVRVPNZfJMD9SMe9K2RLXomWqckwVsJ1bt4DdSoeq5MSmTK9ffWeR83ELPQdg",
  "key32": "4uJ65PLxPsCq9DteWHPK9rRn7p25adyo8V9qvWKAJ1mTDeyLEdvGAdg5T3dVBkBfgtU1kwvdZX3cJTsiJ9DMutJ8",
  "key33": "57kpb2aD2dTBZS8cRFzwZbtHXoMvheLkLysihWXawFwtiy6kzEvYsvMasdTvfTdwxrwhwGfnZCMw28dqb5dP9jpj",
  "key34": "3JtXE74CaL6y5CwEK8zmhGD4ZTKU3TZ24tKWt6JHyAPbhyDgBPDLQXh5FLtqTHhjG7dg9Urz62QbUhhAKxbAGZWi",
  "key35": "3zsJVga1bykGb4rMVy4j2zTSiLgFdLR3sg2bte48RHy6vvSpxL1qGsSpNmZEkzHkEmkSh9WMXeHJ8ezedodExa7w",
  "key36": "4QxaFDHmdDoBLNkBwN85Zuu7JigmyC5ZZbcUaWNyZC89aYxuTtSeDJ9rwQ2q8wZyE8oyn61m5USSZcNq3wdVhtZm",
  "key37": "3NmmLVgY19NvakGfFL7kBRSbqGcFp6RxFvB11f8Fou2qmWnoQZndHFo48WC41jhgCgqVWd5rrbtKxDkwDVzZkJ7E",
  "key38": "5BUgBmG3JNdpgdaMYaoS6Fw6CNyMLrpeLuCUmdMr1gbPSWfUayME7NSp3bfHq2Nr4dGFdEiredhaCUvFZVdk4BVE",
  "key39": "3aZqdM9WcBryY2r42mxwsAZLb7Nf21RhJydBfrUhHEbiyK1xTzWjNemSE1n3sNGqfnmgm6B8Kn2KvK3o2aMrKHo5",
  "key40": "5jZwV8E1Cpjk7iBptiP23aBccBxppnc2CEtQgYPGMsUM9TsY4ufHheyJnsGE9r89FJBwVqfy7ZrPpdk4KVZTLyrB",
  "key41": "ATpPYEdaDChy3hWNfk7m3T9CGjS9NqF6heshxq11ReNHsagp3NNwMjqtv3cZnaAsv9naZuMJaxxSjf7TjQgt9vZ",
  "key42": "5ds4p65uX5u49MzFHEKfhV2fmefL48deQXCfPr8cF9wpDAwVXkZVGDCrCzJJAjmND2uUCrokMFtpVF7t3h1c1Ndx"
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
