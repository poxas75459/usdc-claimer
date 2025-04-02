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
    "3H5XJrTC4YLNDWgYAriNWXF3idPX41CaS2jyPd7KyZFi3C6LbshXGohaxnbx2sNFES1cnzCZWPRpZguLBY4i715H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qqqNhenrp4qgGx1B1SzNpaqCPS3ooKD7A7HVGcPG6ALSqvqaPp3ihBEQWBfnumMhTuZSFScod1hEUeguY66Dr8S",
  "key1": "3PPdumtrKNmfhQoUu6VuByqT712GgHTAfVoZxL2Qhv3pW64AogWUnPQU4WH7nWSAYo6CGJutDvKLyVzCg5g3sF1M",
  "key2": "2JP9mj9BqjAq9RkZmm3peZKcQBqxoXTbSsrhHtMRD8aJ63TEu4qkpUr7u4vr3sHPuTk4v3EGMuxaWPkr5g2TDUSH",
  "key3": "3PQbixZ5vrStGhRZ3V7a1aeJ7R5zXLNRSh9qM9dvX7ybQfMyurQ6QvXXyvZUnrfhnWc4yTUDxzuCZKtMd4gzH3K3",
  "key4": "4cmyANBZsK4cSEsWnMJvALnzUTCjabhUze3t8ktgLZ4SiogCtd7TVtvRMvyvTyCse3uLJELZiTRmSSzXaaPiWm5B",
  "key5": "5fLQSREVfBdwYHGfmHCdMc58tVWMYyg8SfEHqYsHJeub1LFhCWn7JMqE73tAs3MdSTyWed7SGcFVS1FHqK7m1a3E",
  "key6": "2RdCt3DF7F4RF1FduCnz5faJBBQ2EPF8FvnCFakwsgLqjC2UmjZ7eEEWXeUVHGZ7zGYvijnwVNbpYWK1jebz22Vo",
  "key7": "5jYBT3epA7VwR7SHHFJZLJcpMF1qwuVJPTUaMV8HFKBwL2V7Zvu2LBL8C7opMEkTKCahjw2ABdts6CSNkN8XDjY4",
  "key8": "4EjnBKVxJXPdVr1trKa3tpoNoq4UBmfPjPkfptCBDrvdy3RdezG9cz1snQcb1aQtYQAjLA5Ry3UWinTFakXbk9ar",
  "key9": "2Q88thrH1fBEymKKKW2sRrdngkoh3KpRJsjVN2XkNkLxE6Wr1q43rvzHYyX5WoMKjiEcmB6s6NHAmpHUTRU9sGBU",
  "key10": "2mfohSaVDKQNG9SWwfD5Yok8H6swv7pZ82daCqPCSpgAZqtC7sBdzW1DAEHCgdXFSPEWbDKk8sQNAbxWvVp235tp",
  "key11": "3Fwp5UUHx5jKshd6G23A2wZ4yhbPJ8HSTb3cz4pKVQrfV9VC6J3Gy942G3d2c47yqXPEnJ94seHUrEvWybSvLGY2",
  "key12": "FNTiLQKbTQkneAcqD9wBFX3sxD89RYXnR5nDd4V98feNyyahAhkJYV9crArdhj1TmCiJTx5Zm6F6vdqywNAhFtB",
  "key13": "49nPGECcAFasK6zccUdyFR7p8RLuEgqEA6i47As3ddVRZcMjdd4rMQUPkSfmvh6ewDubYp2fUzUK2ogNCp8tezBa",
  "key14": "2w36S5DM8qbqjBxswSfH4QstF3phxN8kcZ9h7BkQ41fwKDxYiymL3B4vWF4c3PRnzkc9LKbiMxbFY5BVPFnHQBzW",
  "key15": "481mNTX6dvjuz3TD6gzDPAV55BuTABxCu2f2oEB5WWPJFUezuZTHHdw35kiSbWZmJ4kYvujrVWHjuyxC5TZ45TvH",
  "key16": "2Ns6ZX3fjmbLy9McmpcDAN71sKcsvgoAZZ7qH7mAHCNQ7kjdjDKo5hbe8eWXrGZsNtCg9QKThrqUJLttgi9oQdYy",
  "key17": "2TzDvXfBft5mcXLuUDPKuLrxjjSPfH5baYBZgXUCfXCZ52pUf17DkTfyxbNZLLzRAEpcEmHmGbfdKQysrSgrA1Hd",
  "key18": "yMDqBNf43Aa5KeTWXHKyhrd7CRLVmNttN26fgntCv9RbPYKRbiQmLPQKWhWvwH82KVVQz7rNiwMBfaKF3JKY5ho",
  "key19": "ymQwXgjTupGky19hLFtdGZdrKqU8bj1x4VWe8nyAbGxJ3nynRHw5ExBFsk1yH8rVs9h7Y28U7y2o5Q4U71e9CnQ",
  "key20": "xeKsPuCrNUtiY4FsBLAPojAvZPRHaQwLTTJEQD42RG7nn1wtMaxSq8USsDc6XqypWvw1nRia3EgcTtG9cNgfJvX",
  "key21": "2vZt4KLEQi7ERizGCQzYDZ1pbMbFjt51WsXKwiEPAVRJAmKmr1Twr7Rfk1i1mgYJTR49zyVnKYtxwkdjaBHauk92",
  "key22": "2bRDCCEQR58sbLJDuWospmLQ5YKR7anie1k5BmZSbdY6EU62XAKSgzMosy3TVcQmkquTzp8SVodTy6CCcnvX8a6g",
  "key23": "3QqCyPWmr8MoypVSrkJKBScnM9NEGr58VdcJ9f6uxm9Y5t16BSqnCqyFtYWN3Lg5KhdhwPd79LsR3UUQUrStrFtU",
  "key24": "4KYTZKXNtFvqQVyJHwWEYJDZdjTJBaiWVb8msRybgjUKFw8L31M4XTJnoXPdse2XZwjv1zAr8xPtLJA5NJY73ZcX",
  "key25": "hxbFSuihLDYHDdNi9BTn1QhDUpd6DvtBd1eQ7nGA5KMnDRoeXWSx7dezCJfnKuSKg4jWeqXZuovndFtw2zSPZCk",
  "key26": "4FoqtRU4xVg2Ln1etQMqVQ8ikBkAn3nADLEPjx9eZkeHZubkYdTGCUVoNcVh4VYMEGCWzj5M8zUivGdyBWQF8D6i",
  "key27": "3542k14mTdFn4W5TvWRy9DAPmEgrdsWfdX6SSnKBVYJaAKVcGMUSTMhAvAMuU3cyJxzZmgaiB4GDVGG7uFVDjaCM",
  "key28": "3V6VwgHgSSpTyvQiTFUMqjv3BVrvaQiA5ytm91aWCMRr7KPhYEdB6Jf3vjByLmjLJ31w9opRUayLEPWuSv6SYHq1",
  "key29": "26m4t5PjHaZZmMEgWX8zyE1NjwG8LXHfqMPHG7knQD8AZEGDB56hHkiqcHAxYUEK4DJd59YXvNbhztF9hWG1RiZe",
  "key30": "5s34Tpkwokcedirhs7zxmHBAq96iySHciKRBYPezNVVcEhq3WUwvfifrwtJuD7EvkAjS2621TMCBB5XkQJcnaQHL",
  "key31": "2pQHHcC4vuauMVFndE5Dmzc9JwRv1buCLqWH3zHZgM24JQbJJt62fBMAHtWhqaBYUaim8T3NnQpoicMtH3ssFVGu",
  "key32": "48BjhMq7iGq7YWsBJkcvYg2T2zXuRnvL9ceDQnrdnC6ny5qyeRWSPVCEcExmda3hmUuVt6t5dCkYkq9j91cfXbko",
  "key33": "4m7tRSzgwfgDT1jeTfxWfphhEbcGE6bbpMtzpHpJsdVHaocW6jjqWRhtY7cnFtGxHhj6mSyLHVe4WhWVAHJ1hGVp",
  "key34": "3aVk2CZ9RYHSwwMQckCaZHsHUSKzBBMuHDYBnVYeFkXF2rGTdgL8SsA1mzZejG9qEQPRHkv7nmheqdkA4onY3Aqa",
  "key35": "2fHTG2p9rkTkfUgUiM6TmKhjE4tkXtiKUwcANMKHg3r54peFfYruQ5bNY69fVCzVkEkRtbFTgahwi5kXhtrs8bc",
  "key36": "4i4LF9qzALoxfZ3hEVT7VZQgxNxjzScb95MeJCa8Gq7ADREwuL9W3VC49iRp7TpMjGYsTKKgnMTbJq1ubm8MENKc",
  "key37": "4LCFne1MoKxwm793UPBHbyWB5uxVUuJDdCQivMgrEBz7tKCeVJFDgtDbWfoGiVXzQHUrrgox7jX9HG87RGvVFNXf",
  "key38": "3baW2BHmuxpQHQCoG3TYrWE7jbepkU4rdrcjqBYDv2f1Vqo7P6wFgWfg1d7cD3rUrmmhMdQCfjSLBgfip3RLrUiA",
  "key39": "5SSS9suzJjG68e2URJ6wwg1ttjeHQzHUb265eGCwDb3ToWoQyTxPouk4eQXNrvDTqroAoB5ZSnG1Qe6vm33uio7Q",
  "key40": "EjjxPWjG8H25idGFsF3hR64c9AitWkyDXXaBkiJLnwrvRB1GnCPyQ5ZRT6tjZjUBicjcBcyYNT8m2pRe2BoUuBB"
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
