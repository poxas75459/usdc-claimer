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
    "5Nq5GgHbiw2Fxfg8mXjQuSKVcP8s6DT8XS6NGKhB6ByZu93sBbxs4FbMCTFNN7dpPXbYGnQHQgJPcdT3KHa2EkwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9DQnKM5PKVKHf2FhAKpnd7n1XNvsgc6t8WrhpC1pZN8RSoPP3Tj5YVFN3vwYL23ZCbypCcLPBALoKCeTTu9tzA",
  "key1": "2ZAGmzxLs4kdiaFEEzsv8poxnHe8LVzxJ2jQcPjCjxaUkqorro48zG8uqPFZnc48uiscN1HDDkLBgAQRJtyb3Kzr",
  "key2": "66jJbj9dfdEdB58dQvb6kTVEX4kUbPbKXDcMzGVtaqfGz8rESH7jqsV5ALFDPwX1rdSyzfjvoSutx2awf99pNwse",
  "key3": "5gakTZ1PtPJgysDuPMyZhwMV5j2EYaco7fTHFJa592egC2heGBLia4tZwkTjDuTekc8hPscbE495VFPYpAnY4yX6",
  "key4": "4sof6mUN8SFxx4PDGySvWNGgGmV7ZjWGwErUH3hqcNNjjegs4bPPvbY2aSzjzG3uZh32QEnBAtrEHZ7xNdfEHRDm",
  "key5": "5cMisym1Jw9C1C9rynGYCWfb69C7GRHWe9q7Yme3MyvzEx4TapgdbAT6hCCLFUYJLaD5HxR1bxQhUBizjyGrJt9i",
  "key6": "26iKAezizmgsqunuTFBqX185xaTDzNMDdMgzjpEVAk7iPZcDiEsPyo3ufYieAGoZjDMefPLpvAqHFU8zVZx41AUc",
  "key7": "2BVJkdGzu2619jnydmmWU3AMnuof1Mr4TAxT5hFxy8y9FHiGgrynXp45LqcJZj4kLtcWPhivijhSSoaTeptDWVL9",
  "key8": "2Y2vK87LM2VBC9AN5goq87Qo13huUXeY2DQp4apQyRgqjc55tL5BfFfb5ZNvfeSkY9EwGAnZd5JnM25PmDpMTn7R",
  "key9": "2BBTKescv5Nz7KzkvxNRrjQuuynoYBA72qnRdm3Zqcf6nreSTzfAduk4Nc5ZQTot79cnTjT7tJBjeqKVMkM557tH",
  "key10": "4AvTGztSvn95BBR4aSE9hr5M5Hji6LDkYcwkMw2KtkvePbRtPdNHgznHhnjNY19ZUA53LnuNhb4LcjcBfnSJNHb6",
  "key11": "3SJtVxGr4z93tHwgDk2BuvYDo12drf4BFYYL78v6yAFvGobrRX7AtF29FgXoFWqzpDYt448Zvy3ywMcUzVijyqVQ",
  "key12": "5i197dogu8sAfgSx61bWic1U7CTN2JnuPNNkEpWZZMncatZs9tmz8JajXX7YNGRdrAj4Vax566nnL3xZyWZfRKFB",
  "key13": "2mZPk9a6pdedsc28Cyj16FY9zrgFxsSnfYBQadZUT8TtybsEuhhLhcpSWPhiMUhzarepvCCXMbcCFvZpqdt3oRo5",
  "key14": "2poNRQxmtRXpnVk7gwNZKv2qCwNsCikDLRXJAq7pkz2nwQJgTBjtjNbBWH5wN442BogCfJhHoWMVfzMfBZFVzWFY",
  "key15": "5mZePpTWtDWc626kDATWFvBncSGK4YpATgj8MGCvpkioUxdPU5p4bSLYVxuYZu9t1J4iEw2sXaYmMSf18EKwc7vH",
  "key16": "3mG6LicmVMMZU8djbRgqFKHgDas6K5Y88hLzizMU7bXB3drC2rWrL4B6wZpwhVHxZ9ZNKmHRAe98qYpNWNjeVUGz",
  "key17": "5ABUWd2ETN4wHQGRTjMpp11UGoEVJmnhrU6tCdLbUwgqFe2EafDX34HEHngU5ouVWYeW5YNhzFasd42PdkPC1ykk",
  "key18": "3tBNUU4UM1XPsgMmUFUp1eD9QEi4kn4WQbeDatnnDADwdCM3r67nCYHiS8wmMY25wAkFsSDScs9rDSzBVu284RZo",
  "key19": "2ZrRGzt6VgJUX2jZiNZEXbcByro4oFPrXJhrVc6vgBxWmWKAyP5FGQbfRxfEPFZgiK5phVSvvP5WhWi7BDJynoiG",
  "key20": "3XGGiQGgpthuemRrQkFWpJ8CB3N1QAvUGmdUcRXvhT2LfoNPKgXS3JMqw5k7fykYNWo5DqbuBNLuP5sCRRPrKnZG",
  "key21": "2q57kXB24A5ZNkCtwEkEB12MLZL2PWkaoSsqQWAV23sqE5aqGBQU1XezGcNpaTEDquzXsGUrHRboiVqacukKKJFU",
  "key22": "38pBKLY8rwGMrP3o633LszW11cxc8KgqAS4juaPeDZPHM8RJTQdGnukePWKPZdmBPVnA2jvsQiFWTsLQ4aSwEzBg",
  "key23": "37Lipn1WSLzPaUjmyh24ekdKWtQmhJxTHx8DECrD23uBvp8gWReGhdieXy43KvnUvGQn8QroMY5XgEFgEd9RMxnG",
  "key24": "3Cdk92fogvM1qmEyqs4Mu8XA3HSWtrVucRqJ2zGwfzGVBJM1bCZJxqRN5WkSvM5Wc6F6oPhEaXsvbSpyMS6TNoYJ",
  "key25": "2cenWz3sNydZiab7Gg7QLRTgWYZZ9SSce6G1P8dtgiS8VMK9Gro6uJ3r7MSDk5jvL5b22PECiUJ1vJD3PttWHDoE",
  "key26": "5yuQWXkXLhu5syaS3SCz5QTBjeWwnUzFBSPwe6GSLnXengULKXV9aSpK26v9QGHhzZYWAuGjLya6chbwNCfusbzm",
  "key27": "2nG55ja426Biq3tvFQe97JC6VpYC2xHjcepqGW5FUu84bZRvkzciWkcZQjcHZUzdjJXvpLq7ZrwyTmRwNi4Sp1XD",
  "key28": "3advMw2F5Ff1LTatef6mRUcrnfoNsoC1fjg5xKMVvWaRjBSjSWx1HjpzVT3dNzETxFxRbLfNbgjhW7NJLwEiCNg",
  "key29": "2QVWn54AfCxGLQvFDT1qDLSHK9tyR6zYegabLo4YsEFqEFADjxH5VUWZGWr6iwbxMpz3yvJn4hySQ7ZUknPXmjvD",
  "key30": "3fjeGyuMHM2L2L4jisvd4SDS6eiS9aWf92iubXQikp5NEAJm4zmRWwR4otC4DDP9rymnejScvLb6V3vNxvdtTJgA",
  "key31": "28R64NkE8gtAXuv5ir9bq2YcQBLhqXxvCURSXNuGDBH62YR51nKhuEH7xpeX9Gu8yTj1WuydCNnA54WDZjUKvvVb",
  "key32": "2Svioc8XTUNHTNdGPG3jKWkuaYgdBUv1djzojJnG8oCdZnWQ1vhDsxeoDUXMSBCex46JtPcJDLeFEzv28HJb69GJ",
  "key33": "4Gukk1JdPwP4hvTVxXCsamqprMbtSTsAqVVJm5N8HjgD5TR8afoQf8jXxEW5p7Q6qu4C41MvBcbZJUBgPnKRbD9D",
  "key34": "5tQysLEVVFLXNWKThVnmDvaMSNPtJAT4oY9caxoN8VRxCTHeaoGY1RFCAw6rC2AU7eQwzq5FLoY7njBhKzSvVRGD",
  "key35": "432KP5Jsmb4ipjjeNvrNf2Bvk2tV1KEu2qbTF5rzNAgvFJ7zt7RTzGQD2sCKMbQYG63bW5hcpy5wjJJVzUd9Bsyy",
  "key36": "5eVsehVv4DVzCACxiVgikcAXEo1JDmFZKqLxBb9Q6GioW6XQBXJTUrJDCLSkh7dRA4KL61JvMNjpwbo6C9AkuE6q",
  "key37": "nBemnmyaSAY9Df5rXUHuCoRPxj6X17uexiVhDvUrHvXXfXmBXYsuGaxMo951WDxwf2eEXVJ7K5og3kTqZ6cxoNV",
  "key38": "jaCPGL2JUaZ1461WLFNy52herf4hSQAtuKagiyiHvgk2dQsAxfxBUxZHC5EkxhHuPK87H6PWzYeJgiGinpErVjd",
  "key39": "52nktVLQoyD6Mjsw5yR9e4F971LKV5XMT8KfTYpiDZDNik3qDVMfLPvZg7dsk2PSw9MmDqU3ueFJuY5Bm8XW3yzu",
  "key40": "nYVVG6YXt2yGwHFdXBie1rVpV1cd6LrH1J4VpxQ6LEsEwb1Kyk4NAdM2AqnCWVfudnkTSHKnX2KxZe7vk29EDaM",
  "key41": "3HJpdVoE9QHBnYFuyT12SWddTv77ngrwCpmocjW9TrBTeiRpo2gRMgXYAjKQxPdwC3WBYTZQ6aKAeHCwLeT4hsao",
  "key42": "mTScAnxhB6EphomotYH4DBG719wxWS45desWew198DsVegcaQjnn7mXKVvQuxe7Sqzj6VQjY6KiT93JML2eaqHJ"
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
