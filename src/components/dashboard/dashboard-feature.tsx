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
    "itFxsBzLcE3KFyFHsXnofYG3kw4a3U1b1r2mt9rEqFvgk2kYF13GtuetRH4XKghQRoLrFdXD8EKwazStDayFSfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1UBxpUpMtHZ4nzwydVNMtz2WbRuNPFe5ZxjQKChjd1c8byWZeTijaQ8GNZMo13x3nSKYNGiYzVBEx6yBqWPZfJ",
  "key1": "EwR5QouC9SUCBY1xFACnhHcqaasF3NwiwXgN9VhcSCPhhrkuGVx1MZwmXexhQyhKrJJQHrYEZxV2czzvT8vtMTR",
  "key2": "257kmzqAwjLNsdnk97HmQVuaeDobwrXq5BpS6Hxg7NYKCDYkgcYzmWPwHpCKCj52f1xMEoXB6Mo83DVH4MKqnZqy",
  "key3": "2KERZxvHfFH9U5dPgWBGoz1gsEozec17rafuvhgF4T86fjXr2AxNZjZAaaHNu57BzZxbHD4XxjAaz3TmfPmsgbHq",
  "key4": "4yQEmHP13BkUkCDQmRRBXJC6Vuo4dcS7WDomdNAtkPCYHXa1NEcAje9u4kesoQhumUt9VPRRCwKGtU785jn9mRU9",
  "key5": "63rwBmrpYDDX5CSLyek9mADdPUH71tNKzKK76fTGz7VMhSYRHzBXoEQthScBYQ9cdnm8Ey2mL2NidqU7vw7wNTqR",
  "key6": "3EPupKq4NMfqUQUm6vEeALFFpBxJVmVUtFDQAwunML8ALntC6cN6qLP5pJmyecDAoFzcAF1BZoPst5qfpYqkSTsL",
  "key7": "4hyjqBBiotUjSoAcUK4Gj2MquKWja68sxcsW2v85ofnYJtFgVbSJZz9dL3ZpXDMWpF7E19jJ2FXWJnpXjtmNddsh",
  "key8": "2rZXwn2WALwPS5CfNbjkX7YRWDoNNZHd2awZuNbBLEwdyZw8mF61CdQXEWQHCBxjhrKZi9c5jjaUZzsdsCXuGhNH",
  "key9": "2ow7WGHEm74tkF2GjWSVefpdfpznVZTiSmnGZP9sDKZf2Lz6Z7kDHXDCbzELoNkk4wqJDhYnC1U8FcEoJptLktJu",
  "key10": "5orddDUgW4YkDpNskb2GSS2UdMWHgmbNnnh4vykTpVSQDym6XEdDZ5Ur1QTXREP9yCi9GA57nGna8cC4ymYtGbUQ",
  "key11": "59YM5inrPH95TUsoezuYfFo6d8EuHegtDdEDC576QM5nkMn1MkVfsHtNagEYrcVdunbC9J2nhSaMYm6THSipirKy",
  "key12": "5uGEQP9XzsFFvcLUQuGhaPZTx1Mi9FoUf8KsWxczQuKD1gePRNzmDqjWAkTRyy6y7VZUswdCQ1upP7nsBiA9EJmf",
  "key13": "CR5s2JuUGqeGDWuoZwS4k9UmSSLrJt2bUS7YxtM9pPUEPW8HAPGqMin7XXavwr5jVzJ64vBKHsUaACL2uDrwVGZ",
  "key14": "nDrfZ6dQueDfmpfkDAY5TqRJH8byZVqNyAdXbBtLKnkSUStE542J4fT67Gb9WboTpVGZptKgEdM5FibcgHAA8Ur",
  "key15": "3BYee46bQdMAGRSVfZoUHM66debkqPMsdMo3EL3dd2DJCKBaMzGqyfY1m464Y1NHemRri41d8HFJxjZB64r6W3Vd",
  "key16": "EGjnRnACBLcrZXrFgJqinyrPh2BZL2vvhkdguyDe1oNLxkAZmRLVsnYGDBBm2KdxChTvB5vg4zPmXavbqL2W9Xx",
  "key17": "2BrCy812Rvzh5zRcAUBhBrHeZiPLdZ18K9EWx3uauMbz8ydjMMHFnKeG67J3wKWFiNTJkaM9JLuUAqpRm2fx4a37",
  "key18": "4xkXMsQVdpruW9PKCrMB2bxV4GZvCmrScTNxVBkHwyk9rfE8HdXWb4Fz8JrM7vo5C2KXvqo8v7xJjCicyMx1TUY5",
  "key19": "5CX5omiBga6a1puFmHmY5JBfiffDgrDr6w7mEWDjfbQaDRKLmVTtVccX6RD3gDE7iYMACziUGHt5wT1KsHDwyC53",
  "key20": "REoVZeib3Eu2XRFNN2wQzCcJ6knbaFsSN2648gX4ShdvALHvn5M4fcHYPgT7GQWT2U6tqovxKPpDhxbLbTq4Zey",
  "key21": "3PiqwX9afccNwnHKQ18bozj43KrieErNZgBM1xb6d7eu32kHmY6L9X1HT4EA5oQ8GbUYQjTQMehjFJArApyCTajT",
  "key22": "5etL8Yo6ddsLk4XaYWQHTtnh8iCqY3veErwwAKAdTURYGwgfjbdqwwQgfnPsbD9cU6hHY8QLzRMo45wesQc6hCSn",
  "key23": "3LCAJjk3Aye81mTFfxksr1WhyxEpEHdAKrdXqeXnxP9Nd2hRMTAcmodYKbwjjWy2xqumgDWk1UsygKuj4b5Rcuwk",
  "key24": "427ihgdSKUz8tvUmEYSr9TVgs81cLT3vZ6ykdUk5UbbrU8FhffzTVtPcAUJopKuEZEMwK5dpTzQzNJoNjwsbqDhD",
  "key25": "2VcD8BqQJ4Ks2CzhkYc2y1ApU5a2U88Xk32pagnD3bD5wEcdNv1pA7KShtYzYmgV738fYf8VFqTnfNTaJw8Q81b8",
  "key26": "255EKtayJziurzjYovRA3nUcXDLoTLSQngku45cdfM2c6v9h7PWEhtTjK6cAkKzuLqHqGzXDDNWNQ6VbFsZU5tYx",
  "key27": "4LNXiHWV9WVxcaQTk5kRYS16aZGuhrCwxfJRSxkLj4Vcy8sCqyoErXNYnFFwuEAXnAmJBoNbD15XkVuw8nJDxPPk",
  "key28": "2quD8vw88uq8pwEKqwKAo45yd2ve2qyrdqn1xXTnxZRYiFRL3M7ZPYWMBnFmKS6tnFRLqiQ7Z8Kd33fFeVrqQc5a",
  "key29": "2nx92ptyvvVEZjVfy1iQtoArnnRVEhcmkYByVXkYmM2TpAL8jkPSxUyERhpgzq37hkQTgJfg586zypNCYry2KB9b",
  "key30": "4cviRfVAhx9RAD4gBBczk8btNwWmhzm7MbbwXu519SiFDRdb2WMaDhJVCsFzUcot4xcEh7ufWdj2wAUWcVzk4aps",
  "key31": "4GRusfhsAW2GWNqNcL9Edh7Q8oXxook4haCuKQf9nMvBsZhhG3gJyUQhmuim8nyGotxmYrap2wHAFi1yXDrLcJuP",
  "key32": "TPb4tFxyVQdJLonDCqVeT5kptP43EpLfscDgCEoTpGE7TGGMdY86W58zCgHYXLZxC4w57dYwfhQqTf4bi3Eq2Ec",
  "key33": "121NQ1qKTtLaRGYboo5HkEr6gBVCAa5JXDBeBPnPa1BFSPKJFYdMq3rkwgGUAYcGn7hWbNj4BPUyb9nv992RFbGZ",
  "key34": "3Tto4WJFfBnKwo1QB6HXJo88J5wbQxDzVzdZXxS9bwGvFNE2YvFpwA6BUNYHJi9miZFADdYKoQTC5p2ZmJff7AUE",
  "key35": "37FJ5Tc2HUcpXNiTparyB3pZ3ch5KAoxaLDhaj9PMBso7dySpNtFYG7QTK6AjVMtJae8iY5rGjUEGnHc9ibKpAh9",
  "key36": "5DMevfdzPkHok5omBjMLVbttzLgFXVaLNxDnGLLcsm7xK7kwJk9Uu8yfQaRTvSt3cRY1xPiri97xo2iCWo2sdfWx",
  "key37": "2D7BfRvd1dZyP5pbFTWmKCxL53BPyoPo96GFa3QcivFCshxkM5upDydzf6qcrDqABQUE7qpPDJMbKsvFUwmgKUis",
  "key38": "RWLYj3Z1GzjPEN5bgQWmShGb9p9AWQLW8cuKhHwwBprEbaGBniKRJU7vySoS2sd3zqjaMduhrLvbGbG8469Yoiu",
  "key39": "5wBkSMC1c9NDkp9P3gpuk1sLzfgeJHXkY4j6Aw9uTkzzoCHTotwTZcBhf64eLVqHs1zaR5njJxcfRf3J44XSsHuv",
  "key40": "2ptwb3CiKHQXUgwgfXiBLiJjis15YL9AHDWVwzLye5yzmnMyR9CggPQ1b5FZuRD51rwRNfsc4TT5MKo8WZvvnfqe",
  "key41": "2w3xFMQhgam92znmq6H9kPDa61GFS4X6jWWNvCQsUyHUwbtCqzEeDpeTcZE1t3J7HvbmcipETbiAVAeu7CNv9PKA",
  "key42": "56cP28qNqUzrKRS3AqztSC1jXJg9JPszqudXtUHwwsAv5pXmAUQBid866D7V6uh38sZc3944vs4XVc1hdsbyHJgF"
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
