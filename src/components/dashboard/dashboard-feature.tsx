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
    "mbXSuenPix6xg3VCWdX8o3Qspxtu2cUGqEwdctyJMansHzu3kGnS2tKZvEe7TwRWeCGkCQEKoiFXxenik2QYEAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RjXoijPrfxGiKo8a8s7WDYAi8R5D4pbeCwNVdksMHNTPsgLSqrRLeL3psdQKVfujfeJtatbWLv5KgNGkH4EDDwL",
  "key1": "47rxsR8VbdD3uL8xaNT127dMxjHgkZA5cp18rQb88PxZ8XAJAfEDxafrSEQ1ux1XB5du24Lh23tTj54JJEKG2z96",
  "key2": "3fj5WLLjhUVhja21ZTvXrGfGtr4huXQCBhMaBsQdpXZVGTm2oGNyAX5cHuCkRoLcHX1vdvUvmJ4spegAmGHCLZzR",
  "key3": "9DijPQQJvbowPryFH2NhZU7eyknKMt9RA5yyhXHnkb5uRw4hZGmkAaeq6ePpQa1g2ZGMUBJcbWnAnZKiwFK8Pxi",
  "key4": "62NusH2W24JktSE9AYp8xUXR1p2MoPZ4zfXeL82UwW7ju1D9c7XPrL5axQJ4dktZ8J9a4Wopia7WfZwwujjg9iFQ",
  "key5": "63AX9aUWQaxTA7XPsxjxezeAJoeJ7XpCTsNPyNn9vqWmUkjcg83RhhVomxfC3tdnDwNSvQ6JdMEy3zvzCqLDYsAj",
  "key6": "5YptgYAsVHMADqM6X1VAJs6CcPod3p9DuChC3eL6w4E7DnAPC83wxSbkVyARuALTYQVQ54HzPX5Eejbx4biv3Mt8",
  "key7": "63725YrEgkYuyHPyimHpm6GxXztWZm3C2fyfPd6obdMckRQM9aZGUYKMnLfpUFRsRtCXTyYcx4DCZvrL52CJ3top",
  "key8": "2nkKYhnpRYRXrULN9GXcr69qwKoH8ndD95GUsEF4YANM6kBdh4wc6C9wQW3sT9RuRksNWJaHCv4sMWu9x1Xc2aq8",
  "key9": "2HmaXPnjzEt1FsRLFpUNRgHRw5AuhffZJkTe5SiwB81dcJDPnoLunFpgbND1mfVoCq3ZBMJ8g7dqxw7ChtAHZoNo",
  "key10": "V1hMRxAZo4XU5r1sUyWD5vjQ7yBCugTz17BmBs7dFN1Vjgp7Sju43bN8EEVAqhWSVCtNyFj7keYKiAz6L1QHxtV",
  "key11": "iahpKzJqbvLnzgjRCB5Bden6RKW5h6HC6h5CV1GXCUg2LkyttHE4GnhA1NiHy7qvLk1Soe1k7T6AX6iaNEZ7o8e",
  "key12": "2ZYAhzmhyVH4SJ6ECedjUZdeBQH13hwJHTLgPAShfwmL94yuMGFpoacPcxKKKJJtLSKgcedTuEPg8q5AYRkZpsWq",
  "key13": "3PtssLNKwMWL7rmMezrwikWzGjzn9vCHqvt1tjodZWTxrtJfs9HbqEY4nDNv7g9Mvt7coBCkHiGWYNYBxJ2DLA2",
  "key14": "BEEb6rBfoVxH4eiimf21K9hSbjQc8hg2GknKTu54hTqwhhufdmRtSV3QpnXuFBNkhihLBSnA1TWiTEiETfwJA2U",
  "key15": "2jUcAEqsso3TUZRKL3ogM6oiJibTExQPK9jKBihEwmNtQByyqX71hFGpKUoVKoTPYcVEQnFHAuNKJZqHHQRoBZWo",
  "key16": "26ZbbFN1hkddeRSWANeUQy9aWyhvmYNDfjqXUMFj9qmeUsgP2hXdksJRaSaNyhDj5NJLYiEK8BQH3g9Q5etKmeuy",
  "key17": "5XzjUKqLSbwAhGHZT2zazNuLtfPj4bGDsXcrGr6MGCwQpAMGv2WPyd4M1jZkMVS7Vbb91ge4nRtLWgGJYWjrQ4AJ",
  "key18": "5tyCptSD7Crn25tAn3brtABbHEF3Cv8opSuWpqhuewgPJb9FyuHnGvxZ4gqUQTPB1ctqYKrjMe7kthAT2Em39fbR",
  "key19": "5NN4PzcXdbucUsbWkoSyqD8kuJ6cTu5TqG4tpE6Ef2U1CGhbLe7ZpsPtjYiTPa1PjX9ANoNjVSuBnjDNN2SAwFa9",
  "key20": "25mWKt1iehmbUnzXzjf5VL2Y3SDGKDx1ithwgUNySwRXkkBZppL4SS6v7J5aum1d1o7C7ubLFuXy4ygdr2CNZsFh",
  "key21": "YoFF11UMogHicAP8MApnAvy6oyyndwEojTnUzkfC43ASrDfQLepm8MojUTYACaxvThbrPFG3xTMrSYBX5Afjofg",
  "key22": "35ePWv2ug19NAvnTY5YEkDWRdAMpxW8d1qcsj5z7ziHhQc81i9mWe5ccAmyGMXsRR6v6M7ZVw3B1f4p6can9V11j",
  "key23": "5mHhT76LxVpJa7Zb6CkWxtyrtd57A4KiEUbUnqjgcTpnAygRbNF5Mkpe6oEu4tfKVFy9HiPWxFUBSyrLLDs1BEjM",
  "key24": "5HLAmCGY3bFyzB3Qg64421LS2wtarHBgHHLkWsxbRYBURjpX5FxEk1R8F8JTTRuDDbhmEeYf2iSZzFvBXz6Kbbzf",
  "key25": "4NTB8zBpYGoweC6D1RGhnJ94NExadBDyv2MXk75GNDxYVvfKjb9E6QxAaJxTpuQAkzHyfgzHPzivmzLBJP4UctPt",
  "key26": "4aYDAMGnJK18b4ta7D71RRT2FXwjYNuvZJ2C6wFk1Q7wYRB1aX3twBnzcWedS9dVJhDwaRprx5vdELz3T7bZPRBx",
  "key27": "tr1TDC9QGCnUaNPUYM96bV3UX5bZ1yce4Bq7VC1Khw9zDfzxz446HQEvEXajkDeLMntLTgv1UtbVWRaaJyXrFGZ",
  "key28": "4fRepp7kfHsA512ncXJgthRcaE1A6gJJHqWicqTJXD4KN4wmPFbVYbzmXv5MHXDEVVGddGfEfT83cgcEq64NfzJ9",
  "key29": "5abWh8EJjeJPeipgYiDTaVYQ4qkdLE7JxnrqcjVeVgB7pnzhjNENpNn1Rv3tFfTkViwK62RxGKYSeQCwhTs8foym",
  "key30": "3xfAjwM1xBtRAFMTwHoPji8Z5W1mAvXTqNLV9KA7wdLhJx4udpHokHCkhda7SiF7xssWdsbQ2mMC3aa1Qv5LBzPe",
  "key31": "3mGzjB21AfcnVaWKpy8cWKHYR7sUc9SEDKd1McnYeN5sEzxqiQFwwwzjSgu9YC1ZZUNp8N3ziExbue4k9gCedAVJ",
  "key32": "RCns7GJ1Jxah8pULnFzW9TgT2gzbULxxLCmTjd4B9YVLK2WEN2CDegok9BeK78qHPNijxjyYaKDcHtM3swcGZWe",
  "key33": "4EyJzPcJNrwGxu6G1oFhp9fiiSPLZf8LciaR5j2X3Ttdb24dPuih32BAF5iEhRbcp4uX9bdxQiNZkq8zvuAhHTfN",
  "key34": "3bVk2h4UJQQPCo3ELd33sV7hrr7htu6tqxaBPjiudpMnx5a3da29fds6uUs6anfGjLEyjQ5WQPJrKiQ13WDCZRGc",
  "key35": "kifYuH9ieuAYeyHAfWsneox6h2oMpmK8Acu3vKN9Lqy2KB9mpyBXYw64YW9Jtu1pfdJwSEi3LgHhoJQWgomKuJq",
  "key36": "5CaoLmhRGqcnsvWGoeWH67jotXS9PMUymzMKXCgoZ1q2zmoDCLLMj35hKHVk337WA9yfDTQxY9frbngekMhyzZuF",
  "key37": "3ivsGGvqMQVALFt7cmbtaW8ycXBbdSHpthMaiXRF2tWdNHGx5UtZqqhSnHhSTggG6Q4J8Rrd1MmXNoLw5C8LUcFL"
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
