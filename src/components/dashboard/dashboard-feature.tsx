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
    "oM7GWuJ76GRFtsR2iZpXmY52t2rFXeQ3zUjNHHHw5YdJvkuWzYYbEqp6oq6GgXe4ih6oDHMrwpNkXPTJRZsE3Si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gATCZt4nQn1tmFRo7d9bhcuNtrFLgwj6EfE2KxtNaHXgj74bWMh6u39Nb6J26XZtefe8YRSTvsMeGFPVFUSH3KW",
  "key1": "3vVdKY7cqjTHsMtp4wjoP7m1NbTFnFJf23XXLfjUwn5E7QkPeDGASUZ6ngZbLfaBwnU3UiUn8mZymRfYazWDYHdr",
  "key2": "CLmzJryiy3EJ6N2gfLCqQRHUV5M4nSHAdJYMyv5zuzu3ZPytUVTDWUEHPEozrwsChnCUqmwfGHj1LEQpNnTdN6E",
  "key3": "2PB6AFSWis5XeUmPdGBDAVNvWv6SHpNAKaTPi16Lxd7oGVdEPAyLMCSgX6UDjLLu2vTrVaLLSUcStETt2Se3f6cN",
  "key4": "UBdE6hjnwx4XhE5EdvYz57YHqmoiDhugVoY1iNhxTRWqEBgUDqiJmvw9dadpopE4DNpUp2mMjUwTNx5d7QJR1AY",
  "key5": "29FzF39Pus8UySQMjMdnKcVeMPzPJt5xhLgpqMrsKMccjTQmCtwtAocSY6AaK1ERuvSkiKkVTAhJv44JeCtqufzs",
  "key6": "31F3B5CMapVXSzKxCbeuL28NKn3YhvgzX4FQaUBj4EWdB84ba86qC47Batft3zGeYeYNAR2u3yjCy7uVrhRX97eH",
  "key7": "9LMAmqGsWZ1ezzAwztm9Ec8ZRwVhBCCpuj3K5jHUuMgi4xU9P117KoUrJWQ4kRc1811JvKcyHAqsHDWVu2sxgNG",
  "key8": "37M2PKb4suaLJk8ngtHHdNmf4XprRrGVazkr2EVrusjzRWxDvWHhoXXoGHrE6BpNccTZcdRNBME9QJ8QfnC59ws9",
  "key9": "3qGTbtE8sEa5qDeHHFqrhv2RnBwdT568UnpsAwvDmFN47sjj6xjmRmUPWaDUcDzR4ocyAUBhdGgcuGRbWmkkk6xU",
  "key10": "2yc1tNRhjHcNz4N5wY6QXGWbLQzqjUYfyZdBPqL3uqhaJETXDPhbW8R7eFebzsrEnyGcJL56jHGrSj8SAKhaLTNd",
  "key11": "3tSMBkks3eJPay3quNzYYcwCAMTVKXXUC6y5VcYFxSVdEzJZsVMfENwyemwjjvHAVUqWZrSGYqhzevrZ8v6kXESQ",
  "key12": "5C3S9xAqBhy6GYoZkmJ49sgCRb95r4bHWyzwaeJ2oSZxcs1jkNQgZSXDpq5oDtdrkZwrfVkspEfhd3gdHHQE5sh2",
  "key13": "5DaZUzqoGHGHrE7DbtFgTtTmDNEKf69eknqVmtkGeH6ogUNk4Qc2mqgAnToZaud2hvnUJYPkgUm8WTbcpyxxydzv",
  "key14": "8xk5KrKxXgbGKmtbyv33XbyxagiLt15WPeBvvVrmB2QWKkgQwGKgvS6DoSiYrDScgLKYdyGYM38qJ5k2dxvNWf2",
  "key15": "63PWgpB6NQmKYXyQg2ZhRW58877qnKSz3TJCeFLKMz97e52fEBAgiG1JyNvYf2DpPmxp7v2BPJGqXvtKpgHVTLJQ",
  "key16": "4YTiDQBkgvdtdQCgduWe3rTbCtgqi7UwrrosJtQSZAYmZz5KoKwqu1dj8cYXqBjBseLbtN4r2CuhsA2ZWWMbmJVA",
  "key17": "2SGDD6435ADoz5CkxjoausDXHFUngXnYgwuLDgUeAmXzeN8XzDcTt9GvmMEyCe3UzYYJ33G1q74gQcfkk4jTyTas",
  "key18": "42fY957WoZHdiq15PJWZZZfz4iy7zjcn5Xam5tmpPaoVggKRZR69P1VRSUYmxq87gKPhbJZyRoxN4QF2uppF4mzK",
  "key19": "2fQDYMYgvVQRsXPBtGbVJwi2DBe9Xhg7HnmrAsjrPJi6enjVjQHDG9M7E4fZJ2w53V8fYGaqcsiNAugWLCUi9Mpr",
  "key20": "3YWWaAuA1kY4cj1QDJThdbXWsMM5LT9iLf17fg7LPu44hgsVt2PEjtJpLjwWPJeWVQH8cf1MZzEdKBG1Mgs6KZBp",
  "key21": "2Hv6YAhJoSUfkmtebs7nHsCRbeehYFVNaN1QtnKAs7RwUAfx5WMkHKqk6t8Zq6sPedf7iP2j5XzeLFfhhPe9dJEh",
  "key22": "ULW4uU2pMSJWuCWwg8CVR45aquXvyPbJHqxyWRsftpqNNbN3u2TSgoA7yPQz81fcw8222kgc7SP3T7nXkwL8jxa",
  "key23": "2wEACTCfM7FGz2NDhsQSWG3hfnpx2VkojFT4CemWnC8cUL5FdYpkj1h5vVHVLoDiaSuLDPe7aPvG3xhu7MA8p3nD",
  "key24": "YnCgfT83xLpPNdDifQCW8BtXf2uRzsV1gDNLQfBgL5ELvFs2jKUFAxffpEuq9PC6GguDUH5Vi42pjHNLNdL1LXx",
  "key25": "3BeD9BNgSDLJ4KpCNUhKfijHpQUtvc5tygEGCRTYtbQbG4ZYjfrchXdy8k1o7JQjeEvinAJtVZx2stoYotGgjMP2",
  "key26": "5kHQ8LGt7r83tm8omBJhns7SVbWMoy27PpSjNN1k8rTacudyEFwtULa98JqpPPBEZHojVnfQhFEAK7zA1LZS5CBL",
  "key27": "242rYSRFs5yf4QAEPQTBi6RCGoMJKXJwDrE5pcFnHb8P45CxHYNs5nk22xwtbeGRPPEQtfxJR7yJ7dQL9QGwhm4M",
  "key28": "3jUrsSYTS5vhoNsqVqmKtpFFUicaXzjPczajMLoNxPf8WoDdEKKJzLJgjHS9CGfZmE93D7co99oPDQzRa5utXgr4",
  "key29": "3FNLnsnxXWrJvHfUnPgeh1mq5ZYjKTNtqA1T3ePU9eGy1K3t4Na6zbDesdMPUoKoUFRzDLLrxZJszGLSMSwGja1G",
  "key30": "4n9nq5qN2RaBUtCEicyYvSda9kCsxjjfs5Xr4XrNWLpXSFk9GnMvc7u3yrXGaWhRCySUtqKCzkfcN1icMeBgntWg",
  "key31": "2NY3RCmxuXot7AxM7HtTYNXM1pkyQ96y9LdiRytGqx2V9b8zv6fTR1t5zGdFCnpT8GA7CibaFt6WATthLXtMXiqz",
  "key32": "4yzGeMAbEwwMN6yNxSNzSxvMYHHCmi8yagrhK2Yqyb5HnvS9G2KcCvZgv4T2DqZqw891rtE6TNwhPTjEBDfN98Vo",
  "key33": "v2zLZdSr2iGk26qRx3DL8UJQ3jj57ogzBFZmYujLbC9HntfkRB4875piSoWVJ7KWjfJ4bCSEJW58zJyqMPCwwCQ",
  "key34": "23pJWCpPX9ai7idJxPQsY8seCajoHEEEyPR9qof4fD6m977TGRbRZ4Sny9Lg6p4fvmeMbu68q35SH9MnXtSerrA8",
  "key35": "3gRs3kigQbQjN3dBM6mVADGZ9HRPxfetnmg2Su6DLU8qQMHAM6Pihv3PBcqW38PQYpryhQKdp7xjTTnDzxvq44pS",
  "key36": "33mqxr7A3UBHpGvdoRL5coQdgTXr2N2ASTg2EdR3tPmLxYHVYqAJ8xyWvBE44uqFYamUope3ZHW4Dpg8kbcYtwDA"
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
