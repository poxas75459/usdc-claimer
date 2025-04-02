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
    "2ySYqMJ1c4UzMuzJRPk1RLEnqXJkmTMwokDR4dc2fERpH6Epa5BifMHUcvcRmn4xiY93o7AvKTTFG2FU2BrwVSHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ph1zHJCp3NpFqJakUndUF2X1qBSyMg7GkuVoboEMFFZDMSeQFJarF29F4tNMgxLoNeZogCGnHu8Xa5QgCTk7Wf8",
  "key1": "36aKT7Jg7FBHazpTb8A7RHtRvBrq1jiimQUHijY1oyEuW5XiL4BG1P4rjhFSKYcMnLpLo3kL2tBVrFbnbfCA6Xvc",
  "key2": "2uibrvNUxcBXyZjp4iEvdDCevu2vqMdoaqZjeUSBHwzpnXNGgxCv8J4z9i9AuyiED7ocAcUaZosFcERXGJfWPbS9",
  "key3": "5WUi3NwCp1bTsRUXEnZAS5oneLdTGXfqBNWSN9NDMpU5PfevMdui6DWjmRfBHt2EuaBYbKXeJLciub9qfXoWoJH7",
  "key4": "2HubzdcdUQkWL1SfY3oiQ8naDPqBcKkD58XuHnwE8PcXCs4UF8kFeKPFcVDRZKXNfEDEzL2sakP5gryFGcF3zjFQ",
  "key5": "4acGXjydr7qjPTCYBo6t9sEU9Xmh4igZGWf64ExnXBWDpeEAm4e5V5ctbDqP8veGgHxMGBY8wPzvZphnPvETUzhU",
  "key6": "2DaLAcmn1S1L1DypGdS94mBxwS2vvr77Vg6rsNsP3z7XGgcdXjkrA31sM5qz8U4331GhURGJHwTGYWgN5CYaSuZM",
  "key7": "TZpQHBo3uuiPQejH495kDjvHSxAMHKD4CnzBgNrHtCKR3Ykz87nDrX1f6vPjYKB9UuRyWVep23fzq85wajhP6Ed",
  "key8": "5yeSQAi9q1R5hVUpYXcDnxbfZx59Ydf9kHzo1gWZy22vHhJb44PCW28w6muMrjTLXAA77YeW333zfawQcWhQrPq",
  "key9": "64FrpdkFujKvazJRPc3DBZuQs6PH1niestYfA74XqWNvBNwinhvph3bLeuDAciJNt4GG5VUD1RV8fczQLp5Va7tM",
  "key10": "2yAjWrC4gJADWzJY7eeuV2CjVLeGbLTedHB7hjGNC7oHaUxDHByjPt3161BghQXDJYiKGvSEF5z7xD2ojsGHxY2h",
  "key11": "4dRhBdDNqiqDM64Pb6KsACAhKWha3QnEU1vTLRrFfcMnhDFm9mQETyKhzqYnjoatLpo9YXrCQVuKePS83Js12gEr",
  "key12": "4B1WQJyBDr29fAFF5tY3xtQUMtZWvrgj3KgjRPSrW5ZL3MVASBRSGHgrivJYHCgBat62z9zr1YHhaP46FNU1d2hH",
  "key13": "2hgSs6M3wc7rHgqNCPxULPadDoxyyx2oEp2c4rYZFiHKj1NWwxrtiKGY8KLhBk5ydyT9oyWup2LkG36hAp4wZaSa",
  "key14": "W2gnexthpGyfMnpAu6oQ58k6Qbf1DNAamhFSF3Xi5ZrqM9oF8nEUJsJApzCCMCvGtREs2Dh6vmQ8yFfK1fTWb51",
  "key15": "379JgNGMWNXGybEWmL9Q2qBsr4wDy75VW6LmRLfkTYzaYsF4kkwVsTxe9ViMxzjVvBLKF2sD7bvFuATveJHEQHoJ",
  "key16": "5Rm4D9gha5LKcAQuMLXHvxBsfZwB5cgjyt3mHhUPCTG9xXZbqPN8ArTQvpwLKF8VqgeJVc1fwyYjAksAbCbKtGxd",
  "key17": "48EenqSE78i6ucs5pgtRZ6yhvpzzFAAL11azJ2vaTp4AJ4ibnwPGs4uP3afwYYwVS2Wg3FpVTzAznheZTiDyYzf8",
  "key18": "2KQHbNALt9pz9ov1ongVMg7CGFSwNnfNJmFUAkScrtZm2Rfk2dNqKWt2sP8befT474UtpEQJ7LrrTGVXoXoQsZsh",
  "key19": "4pUGFmEFr5J1h7aR5ESKxJVHzH6YNtzQK3pvCvFxWFJ2iYcW47krdKsgXueAnDDn9YaaNrLBJE3YP5WGs93MxSkj",
  "key20": "5QqEqW4eDB4uC9S7tULjP7emkYup82MXjhjZQ8hRviC4xmUqeoTFiwAAkPC1kVRr8Pnb4nEfbEBBxP5CKahatEiQ",
  "key21": "WLCe9e5fxKCwQQzcMNTiuW59k5dtWWNj4DXfqcBAS4UunqnDVzWmnxihMsUc9Ko6MnXaUup1BcV77eTh5gzVgfP",
  "key22": "4U1NQL5nwMTDtEfEVDtE6SwCDKKYNEkdVADkMNqhS6vK63FMTCUg3CCkjubZXBa842krvTKj7hxhwjayHizF7GC4",
  "key23": "2yTwnEsAvCYtLejNW9Rory9fnk3k3w7iUtdXJ3ehthyUaYU3i6ZmCTZJHCS34etMMAQi74VSGTYRMwqdoyk97nWY",
  "key24": "4NkQkm4zwGX3ZHRGqyQYuvEzGaL6JrhVcSpHjdQVdukYkBscjHauBtS8wAYKiQiSbSMp2GaCzLXYmQcsDTjgiEzD",
  "key25": "TXfqys5oK6Qf4JDzPNtxk5QSff2TMe61Bjm7drFGNzZEg2QJER1YkUZefFvek4uCU9exgCQc9hc7LVN8gyoE5Zk",
  "key26": "3yv1q7ipq7nxewhPU8YsRyubip1ARa2p8XRsJx4EexfFEUBsd7QoSvjcdotk25uS1KZtJFhjpAqqWu7T2umM1iPH",
  "key27": "4ePohPZ8vfB8z7UZSjrUKAF2GUdjTA9mthW3xuXD4y6MNwmGWAiva3wMLsYows9gt4zRYpSzKDAaVTmeTvNo3f3B",
  "key28": "4wbPGv8DhTZUhwsj2UAJvX4TJjQAkXopb6Ssb4uMNA5KdDErBpjjaGkds5NfZyPUu3jzS5dWAfehVzr65vzihZvR",
  "key29": "4rD81KocaesYnuzmLwH9z3sp4XMh8HHqizXwg4VfG9x7fzHs1UPcEYLC4tXgWrWNWNemUajqktzpYJgkKWG4twHb",
  "key30": "3vepZ9ka4tqhygp6sWqjq5xTiVSyDJikyHWkU9rshgisZr7yFqwiGHDC6rPrvEvXDyxePKCKrz3eG2mbGFtLZozU",
  "key31": "2XwKVCsxt6DKtXP7vbuEmNDBnTYeY58gRiHUVCcRqoqh3otxXqB2qLv5GosCE1UrJaEksSbP9z6yCaoqufGdJoAq",
  "key32": "3N7sb4QLXFQi5fa2EsNTpKFpGwmNkJfTnAAJZZw26TvCePH4R2uJD73gkxs3FnvUKZVMxRnJQsVPm4X4tyxHVQNc",
  "key33": "4DHde4xTd53urTjJ92YBt3f3Gp7AV7zKFYGDh2nGXMF5GWa8Dboniqgt2k8FzoM8gy8bY39UssRvhoeCcMi4oEsH",
  "key34": "3Hdss8x5wNUWCrMY1xaqUKCLAUrW7WRJuQXNXvNJuUyEqVrQ6GSPhot6U19CNyrhGDccEU2AtHmWSGP5riCA5Tj6",
  "key35": "2ZtsUoXXrSeMLsNph3RtU7UWv2wrUmZRhooVaTusPjSehEjijAbMY2dULCavx5XAbELDbKuFanUCR7FusFG3Uou3",
  "key36": "4TLL1aMhzHxMNCpjwjyo4eSNPYuugxVqVBLP7RRfd8qx3zuyMZMNWcU15gVPocNC5rvMpdt6VZ1R8tRyFU69PC2w",
  "key37": "3R1q8oFMSPbtiT2zGbbjU7qVm7obSTN2sDYsMGF9b6oumbjRHkGi6dNcxr5XTqv87ESD6iGDREqsUtsZQuunRc4h",
  "key38": "4rf3Lomu379d7TGhSjJ9NCvxrycdRtbRWMAvEX2rWs7bm7Nmne1dJxZtwhLtwTDHYrsEG6YTNXpivUvNSwKsmSjC"
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
