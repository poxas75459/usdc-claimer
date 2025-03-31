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
    "4aRrnZ2Nd5kfXjZAAFwajpBXYqiTSbpXPckCkeo7WeFkh8beGo18UXZ63ZbpX3TawsZY5jPa24MmapX7TDXxXWMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DLuEqCzyvKUunjFFbaQse7DmTQBquaNKTuv6bBKqfjEimhzcRLzzxLAvN7Gs6itNsoMYxNXy5Gf6ezqy2KfRuXF",
  "key1": "oUN6FBS37TYXKN7du8RjDkKUmtH2QLV95ABX6D521ksBmtsGKjkh4Sdx8N9pC2g1Aco7i7k5qYC7KKmLjbnqh4n",
  "key2": "4GyLSXLcnZzn4Zb3QSAvkYtv3C4JJ5J3e7CauEVSNkxdMJCh7NoB5nsXxuDYyikFut6MNxRde8JuVCMcqJ7P5Ybz",
  "key3": "2tGg7j3Yc2sat8jXVmvhfVpQ6SVrg4pZKoG2Yry1PkWacreWeXntodDdHc3wmveYP2HV7VvfGd5vigsWPR1iwQR5",
  "key4": "2kq9kruYX36aDoQWCkEKjfqVc3tiLsTGj8HUh9PZ1eUUegyi7bt8kQEpwzXA4zNwntmztwq1GVji11fZeUqR5b7X",
  "key5": "5xFjLLmeMdYbyiG3rBmAdS84HtYYxLmJSYE9ZPGGXTP12T5Bhme98KnZAKNpWWLTDyNhJxXjf5eRPhcmYsNs1ut8",
  "key6": "5XFv3xpBCD49LchCF9T7a24yaqUQE74M6yaPNqEqWWnWN9ksBTTikiQf31duaUUozkFGNLYGccN7686F47i9RcvW",
  "key7": "5Bp2acwvw5J9w5wSz1Mn6tn1KeavsE8nazkPGsKkaqxMpBjMzGxMZkUAoRXJ6Yu9fgM11k6CoJ4FdiJ4XNjcV6Ak",
  "key8": "4CAvkxxXpNY5rb7bxGtcnVxUY7kCBZAHLfZaFf6NePKywpdjUMKToXZB8DS5HRqfrPf99jVa6iBpSXfAATatnZWQ",
  "key9": "4xZw8fQy39tdeaKQ3PFGJKts8SZySYFSAtPkFDf5EP3nCP9GPqySn9yJD9BLUzGynFMKPPmkcVrzGFQr7mV95NAZ",
  "key10": "4HW7aFJjnzaNsvskeJaYs8cKQB4vjE26QagRyRLqYc7qW23RcZaTtRG2Kj7YH5V8DpWJkatd2bCiLU5hPv1csa6Q",
  "key11": "52S6PCq9TiFzhvgWzQQWsmB1XtuH8uRhCMXhduoj9FAi6nKNo9f1YAq4TFNfxk5z3k9D997EkPQJeFTb7EkUVKPx",
  "key12": "4qKnoWaZdCegPz6xMyuR2K9JT1JhpM7qhrBJbqnRStYjjY597ewssG7FSkdKUNYTdyxAG6p5j5NbuNAcozd2JXaY",
  "key13": "kPFYP2nMhujgouidQANkDim2PH5ysdApQtNyrDWc3nKKX5bZY594RQaFxWXXVF5oAjBoXdUKEajuXM24pm9ZmCu",
  "key14": "5WERHpC44pRHcNfXB9zEV7AJYjy62s6eJidPybxQXftmGGJU4t16n7EqUjpmYYN8V3y9QsrBtERHbM8UZxHj25ay",
  "key15": "3EzhMfk5qaXfjajzJg1H7cJz8BF7TRDC4U8Q45AhndLSZCD2JbJ4efDxeFvihjnMgnfrdF6Kzs6uV2FnGXYsb3Pn",
  "key16": "4voZRh9encd6noBbLzVeFxZRMwbdhE792LXtsRXUxmVzFLeuGeqRHwVb8DexLcHxuQFGUGDtu7WYATtHUYnYySn",
  "key17": "5bdrEBPjqA2QvUYS7hHc8f7tXJXgAMbWJJ3p3gz1LbW2Nj1zKzgqdWnSgDcawy7j28wbssSFt3XPLtCEkCqujxE",
  "key18": "2bsXLoi4xEZtMXwG2bV4NJUeZ3cAqgsrmLNsDYmt2H1pVh6PhLbuRrbbvMCLqw5gjku3jTqvtmxe9B3RvM2kHwge",
  "key19": "5gyHT2Se4MFoYKoWMHchSJz5FWf7dLRFJ2zGBcvypF5QBdH2ND2LBrBgfuRwLKo3HNQZ17AzX4BsU6xCK7QPL14C",
  "key20": "5Drb5Awi61pC8LVWVkLsbMGphNqLkUDY5HQt1BrKXH34a4ZQmnAenDsGxJn9eUTF1Uf1ihDKJJmXmKaLS5wCByhz",
  "key21": "2ygxd88gb2Qo3NxUvRQjURkj1dn9WZAJjPX8KJWZ1R2vs8pNkcYjmgrzhpoN3PpWiEsokKJnBwjV4jzXXQ7zN4qK",
  "key22": "66hUvbVt9K9tMLfJSPVTXgw3GHjvJLLLqHYWnzPLKmSRoUjDYKzAA81iPQMxAqVSY7YwEDvtf4Gn2e9hSoroWu64",
  "key23": "XJNVLMUMoQjUZ1UosBNVruK5y9LGp2JHCMJJsnb4RdxEX9n2WwPi9qBHBG4mhPDLJ4EwcN4pLdH7jXBiNtgc53A",
  "key24": "4NjJV6r8wKz1jLW1GYyFX97Hfd74UypNH8vTdo4NDWvUnspHQZsGC5w6ptrdps5EH2ciyex6LweNW4DLgudZWeKz",
  "key25": "5EZY6yro73oLCCH8DepXCgYtYgafdon1iXmiyzrjNjM4BEXSWWtxWG64rZchVuVPcBPTs6tjYidMRBFmSMoMyCL8",
  "key26": "4DNr1AprurcrA6A3zKPzcJt5jfaJ3rdoU7vUekrQ861dBci6QQaCBmJELSiNYPw17zA1oLGoTnSUGBy1zq3VwBKT",
  "key27": "4Cv8mjiy1N9AmAGkoXZP2AJSxuccZxQ1GMsB8cu2KTgTf1Fz3h3uSaQi1pWwikFdfqmJFsJykdF6Ny5uXDZ5RhrH",
  "key28": "22hxZZrW6UCzctescgfXv3r9hYCo3Qs5YdvPqqtPgAfhsAjy47NKKdAC6XR5L3hFafRnVMzPssxbrGX1tJUooVCo",
  "key29": "5GCYytw7JKSSEV1LjNGZvpyMLGvjk8mef6PJdjx1E2ngryzeWHeNQDmXgFTjVoAvDyeFzLCENvaz6mbs3pFohF62",
  "key30": "4uERt1WE26r54MftK5eeE4stb3jzc4Lg9d9Nserz1dtgqfjoGThSaN7Zd9KUzT3HSsovmqDu7qSho4dg8xLNgyGe",
  "key31": "5qRd8XaG7CW3BuEasB2HDtWtoNEWJFZVHNPA7sfzjram8dTAvPmJ4RC9FM1eTwyVzbSjzvW8Gb6u8vt5cFJ8waju",
  "key32": "uaqj8r9xPfVMYaowgtR16hDxhiK9pX9mz4Y2hyG1TXrW77xJkzervALzcZsaL8A1kMrsHWmGifbJTC5pFcqPCk4",
  "key33": "m17X8GjinfGwnAAG1esAHxPCxUCQAU3zuBcwduBJSHENGoNiLpBc2QZjLzVtNhG5CuarioPkqAcfqx6h3ihuLxm",
  "key34": "3v3K1PpCaiwZB37bpJ6bGsVvMS1ZreVLZy9PApzsorWSJeA1ubdNRUyFi9pzyghuTJbGMR5mqAENLA2HJ5bR6WMs",
  "key35": "5tuckkkzyovZpgvnc3TL33TXtyEPibFM2Ca7CUAp166JdAWH193xxGrmS1w6uVT9kNhG5f5XELeUJQ4yZhsyR48F",
  "key36": "2pczaHg9n7Kc1toiaUewyEz5h4CRy3TfWvk2KUFtCvW5ky1KQu4xmhVZXC6NUNXfpzCE3WfkhZu62BMo59CunYHt",
  "key37": "1GNwsLvEi9M7Qa9YWLojPNv5vewoFcFhzobcRdVVAtdpSXFzXCdBbyHx4j7ghJXM7qQYk4PJcDNV6iB2vr1h9Lq",
  "key38": "5nEAV9gwLofendUrEWTzLYG4hM2QTc8iGA9pnBZbZNmb5axb141Y4G7SyhdKf9xnWevpoM8iC6gUcToPVesDm94T",
  "key39": "yxb2VohtrjeR7zFYVRb5Qg8qvniHKt5qfXkWCMevPdkY4G27E1g2ytx7ugY3hEef1N9nua3uX6Gy579GyV9JHNY",
  "key40": "4fQSwTbLyicUpo9puWoiJDV9ncYkkqMfUy8RFcoihUTbL5kzC1VxHWGuXC8mqapxHCJhmhuo83Ni98DjmpUqBW63",
  "key41": "GwohmkBEDZejxxejpdHWVMHdwfLJhpqGu3tN7fbjnwMPQ1zXJnH6gRSMTxUKpLzCWt5xTS9TYEz2LujjaPCcYib",
  "key42": "v1AhmqhBzTs6HNKvuitrvEfv3Fa1FDm3J284W5hyRARqRjSUupGbC6hiAnLqQkY9iNNJWgx7SXtYcJMmVnuJnyu",
  "key43": "CSUeH6CdJCV2a2Z9A8fvYHVh5o5KfZZXCn1hUaKvRgeAYKC3mg42bqNN6hUWZmsE9bxjjv5wNW1X4P6LuBeKYkW"
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
