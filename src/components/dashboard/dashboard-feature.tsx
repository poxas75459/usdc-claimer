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
    "4e87GT2riRuox5wShRHJUAeomG5uWHQLpRFE1wLj6XLiYvRmmN3hUHSi1TWrpVPQ1fCgSBQYSaVXB5Cr4vkys94z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24MiztWFSby7NC9vDcT6oScmcdRTMtngUAGzYxUPbV9U93ukfGBNpguMcUzENX1pV4KEkTv2acoSGQniNgzeuRAH",
  "key1": "2VmnRuBh5yShqpMLPqa5nzd7PgWg7XyE4cFvLjbcEsrqJH7Wb52skYbuaq9vC4E71YgKgiJJyUGiuskrh8DATcMK",
  "key2": "4PXrraZBnLuAUzpLTx2AtQnuyJUT7z9owdufdu296fjycb5emueruW81hxoCejtGc8qjdjhepUx1S6rS9gQE6KQY",
  "key3": "4pCrEJ9qgTvpKnSZJpJGmnQ36t8NeNC9XCsBo9nBAgbTtUo39xsF5RpX9R1FKJz5LQcNmZ28Any9uZNtNdQ5A2pa",
  "key4": "4vdL9Ur8KNg56AEjqAq2rPhtk5nwLPNG6f14VwnJGQhtC4BLzgUrVGCXWKzESSo5Rw3nGuteSANHRwdWa6aAF3u9",
  "key5": "3iBY5UiYZxR6Y6o1Ftg7SkuLUwoLowaBNaBMHbQVNgv3pqUusF1q7B989sUsBoUW2PYjj3pQAV2tysmtSvUHYAwF",
  "key6": "3vWSsKD9LRfaSUD8HPecepvo1F2DxHdjpYxpgyDG7Q9A8KiXR5s1hGRr6LHVMXAxWfr6uQZP5W8RVSTV4DhGpQ6S",
  "key7": "38GnfBtehMZgydVLTVwC47jea2pufbebWT7L6CWvQsJhmhFnTv5PyaZb39YNLAahaq9mSEnwpVyB3CvvyztPB76Q",
  "key8": "3FcHtUaPQkHYytVKgvfH2pM8WL6YnGhjRdRGqwmHK2scApAJujTRhYFZLKKoMjgtynnGQTAgbpheWH5DhoDC7caf",
  "key9": "TskzoRUmuxQTDXDR2MxDydu3o26MteLDWXNXGE1vpXpoG4qyZM8BMFwRaW7yezpzceMTNPYdM4TAGus1PAv1Pxw",
  "key10": "39BxNcxnjeVCbGcJ9h5JxSWXBu1LGav9EHGXfr8jyQKRVyiHpteVSY9BtiD3NR4P1Su1b9zcK4YLBgNAmsKvSNBx",
  "key11": "5hC9Fxvdh97QyHEc8SmMVbSWz7PhgpWsoTYEYzo2z2H7jh2juEVFprsGD3HjdY3BGkaRCC9dZ8dBGTSe3QuPxF4c",
  "key12": "58VVjwmDC3hkh6KB3Aq1PNMPciB3ntLrz3MPJPpdhapXtY2nekfhjFyLq46w82LNmqcBxBTbG6xMn8MDG2hy2UF3",
  "key13": "4WsTun7oynFqD2n3C118p3HwUpxyRQzuGgKvrKjM738U8uQittCe7XxqryW9Gk8SbWEGVJKDscMa2DzPnwqWPqx2",
  "key14": "yxMu2M7eFrUnkE5UKWYM6t96Th2Lxpa7ea2Bu9cpEAYY4X39mEYTC3TpHeWF8Djx1iuqp28j1jASU8zsE5vF2qN",
  "key15": "jAAEJ2wx1775pEz2jnN4uJskJiEoS9U9RLi6EwCbNAP5rq7mBvduaPXU42TtGH7Vq3eqd8VggCpNgcVuR2JQK8G",
  "key16": "2L9A9yjpLLVjhbrh9q8ARSLNg5wmRLGdQjWFnbWupjHbQyGjojpCmxBFSyYkE4Spt5WBdWinS5oMCrRYnLb4cnuw",
  "key17": "5MuXsWiU9dYGLikAEMJS3XdMRW6HTczFnj9B6S41veZX5Aho7DW484W94QfrBRUxiSjHoc1Lgn1SFmx8FnWyLZ6Z",
  "key18": "3WeD51FN647Jdosx4RSJBpuS7XmmKUrgSwAKcyoWBXF9gs4NwTAnrteVoRWSUSWtEgcufWaSLaY5mXgqjK8Kg9RL",
  "key19": "5CvaVWpbYYfSremfKXrmJrRDwmw7GZJr7KYHsWRX6qa5dvmhH4mT4XN4XV26z9PZN4fuX47zUr7McEE3NJ5x1B59",
  "key20": "3pHy8fqBP8ADYVioVpM38pviGfyJKffJ5tyVwoxKoZARsVWNcU2YvcoASPe3gYyppgeEiBBA5dCZMy2yQycFmtwQ",
  "key21": "5x6t9z2XeLaBQBfSGKgHadgxDXJnPJp2egmiM9Sac2vwhaRm1es9ZqzZ7wSKaMbQL7n3Yws4u9gJxv9RfjqXB7HA",
  "key22": "o7mZq24p4TAEmaYa7EdkMnNhQPn6uSr78MnPhkPhNV8HShSC5rLSJVzc3kRv3i236TUgXV1z4q9cDuc5GzPQLzf",
  "key23": "21LZzAv9gpi1rHiGLRfLZrcgXL1qNqES7TRRuwP1KSVqYfHmERvW62MmrFh8AovBkbGM1Eaw2uMn3rpaEozg9HHL",
  "key24": "5pPBqGsVsHKMCwLZJJrmWDR3344KJRA5pfQGu5PcLnMSTm4zifbREn4EfuLi51q8TQhniqwDmcEix7WrB9YeCeaL",
  "key25": "4EoZA78PozXYydo96Yxb7m1j3xFmUsRvHhTgK1UJnJ4ARvvZyts4M3z9Wz45vxoi3raUs9bRAQR9TpfjmpBFY86",
  "key26": "3eg8XzBBhf8izFy5aXAjYLHYN379ghiYrZhfvYmqVxkFsGZfKTuvsPxB4EF7JNaguVqjs9XMBjqz9A4x3eLaszke",
  "key27": "65vVhcTXGUXUqFbvzTGZrBEeNJU1ji6zCm4CtNU6Kdqdimme8tQSfyM9duGWUjWxXg2dt4s2gkkkUTfVLrNi1P6r",
  "key28": "37ukYR9VacGRbNo3ChM4zB32dfXmptAk2cb3NFfiJAf5JaF5gETetxZBsx83RLVuseoKw1Kn9jYsxpQn5SfjeeDL",
  "key29": "3GwgdmRMxm31UyUzkei53MiKqVt32ShWf5Ru2QEYUjD9KzVf7PTY6QC4nUCsWNiZ3ctDHCDwr3f9Kerq25Spz88p",
  "key30": "wKsDPTufCaXSyT292pd4Zm3L7Zsi3GeXadmnt7G9fcevupxJ2eKJnZKCXuP143zthRiY2mYWhxp3CgQPKu5HTyD",
  "key31": "JkUHX2eKV4ZcwfmW8UeUcxKZkkdFd8nFy4BfEgJDM7j8Gbr7T8aC5uKj15pMvZjNXnsRMFCzjT4JmKqVWSCtxvx",
  "key32": "3fP31ocYcGnYQyeQYPtJKxVq3PrRcpji5Re28G4dRKegJajs4s1yTCmWmTNAA3EosmkeYauNvVj5FnA5VmzeyCt7",
  "key33": "2DyU9XR3j29LLojCMGJLvGGyxnp8sZbcfCbtz511j5iSeajzGJMNtjo5zUQwBgh7Vrd9GZ32p9r8kqbdHjRUfmc8",
  "key34": "5o7Hr3uVZzsrEPN9q8SiYHbKvdihYtK7r9Vig7b6TVNc6u8aZxUs821UVxEwp7JuwB6wRHSpoBUb8Yf1UH6BJVt6",
  "key35": "5AbbZoM6TUT5kDwSAohPCRW5xPWpGn78YUJyzu4Wy9mjpnHqHAKiox2C67xovFGLhmbBANghtGoFeKq4kjxfwRa",
  "key36": "3VZBjxt4VyitknYKtn9FqFkKHkoh5apJEFarqQUPAfw9bNVXDyMiPxrTPKvJtbvMohzAc3DVfyUCYK6v6arCWFMx",
  "key37": "461qdomEiT2DAscvMVHJiDxbrLR15LagJRTd8MSV53cBigAqViVmS47ex8CjriJxTbcZGD7PinMELWZpt9tCsrtP"
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
