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
    "5fEJZgwsncKak9BzN9Fs8AqB9rvHKxqA4o7pm77n1NahaFXPfMwJ8qsbsSKi3UPxhfsEzBxCZMQ8nYTwbov1Uowx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RP4XnBPV6TkB3PqE7KNK7GQxjZgZkjxU6dBJA3tCdgmPY3RbF2F8y7rLXnuhsHqLiLpYiTEnUcxPwjjAihJ4vKj",
  "key1": "4xHhJYmu2TeQUsRmUDyQh4aMbUFCE6H991MPRNAga5S6G7vKDPZiGzm17b2v5hBy8rpCoLKbfbsZo3jeH3Y1WuQZ",
  "key2": "5ESFCvDsAydhUp2kHsjd7oCoRNipPnNJtCVV9FBorKtRJXwsUfT6j2mp9ksNiCZcCSHSZJcm8bN5AzVUNirEj5ER",
  "key3": "2A4nFQaeybEDpVFXJfrsir2BRwGqLcY3N4GUpw362WqCVerEYdwkQLc9AJ7juVmAr239yVJgDTn5KtJncw7Yx42y",
  "key4": "cRFBRhr5iJ5fbg1cs14GQrbSHWfQyL2PQnaNM5dFzBurkLC5JiZVSMxGyhTqhC2T97bYpGziHVGU7ZHZRHKUtJi",
  "key5": "wQuRpo227ihDuwRSUdT6Z3wEDkcJwCmbRv68WLmSnMg4yVmmVjvwfNUQCTxHErQZzMN3pa7xsDdgx1UAM9XurPg",
  "key6": "52Gjy82UGzTxys9sQps8bVMSYH9aM7mSpdrzwBPX3AxKNyvJfaXrz4cb32FWuisLwxBo5eGHt4pzGveUyWRpAhLH",
  "key7": "4pNqB8Zbm2DwCBuv1dGU6GwL3dDyEtbuwzVypF4LrWvNu4y3pZbk9Ri3mc4WAdYCidn3VDqyxLyGTp73a8SRD6L1",
  "key8": "3XX9bzF1CZL6EgfEwLEkpWmCuf1Gka7NceKLuWGLj9Vtt6PLDVPWfabpJC9c1cHv2ZhuJbybSb13ZPpjDizcaM84",
  "key9": "5h2fybQywzu4bYQawQ8KFDoDY2DuSQ2QniPt7VcYshjeakfrnv3Ggk7KhPJTnso5gCmSB6ntQJZzjVUkRHBFWLnU",
  "key10": "4VJzL5FvfF1bttM1z5Fo9obD9WDoZ9jNXcj1C26ipCadU3bPNvqTjqZoX2gf7jUxqm8Swgvox2BBkkjbmvLAfHTm",
  "key11": "4KKibaUEU9GHwi7sMDaGUbtC9VyUmMTYV658DFzVKdex2s55F8HouLdBvzjBVDt296td84sn7aPuBigYWMcbmtvT",
  "key12": "XkgpJJqKDcwDvDnehBknL7uvAv1vc6GWpvjfB9Lb49TJmRoQp5NFiNNpqz7bjsuJyXY4afQuCJt2WdnnZ3T4XnT",
  "key13": "4VkTMQy9K9ciU7eu72cst8cEKstzbPccNg6BjRhFR1NgzgwKMAnjqgucRLFFKWJQJroywfecfzEwRaNGhTcBxWw4",
  "key14": "2SX3i93GRsYjLsLFtpr6Piom5WX3stHYtkAggE5uuLJ1LW2XCkjxZbhDLwyeyfYqxc1cR4CXREjaSGsTZkKred7E",
  "key15": "5Z9spxgnS1a4zEW8zYK9B3jLQKjQdV1VVrHEYvTTscw4HRX4zxs8xXZ4m83sos5Gdk93JY3MLNtVcaiKEFPJPWvC",
  "key16": "12beMRYgcZvhH8H3QZ1LHtMYXLLDEwNddukLGRXTMzBmhxTt8sdCfJssy6rHqwH5CmybXuKvxCfxcVzEJXfpQEj",
  "key17": "2bZUt19QyBVWZdHYX6m8dTrP9nuyf2SeYPhX8zW1miuzzdUusdkk9mTiMMqYgCS6p4kNeM9Lp5mZPPMaYypjPDGq",
  "key18": "EXVv3vQJEj7DksZ9hhRoEHncXFzA8WDTVnTqCQvWhvivMtFuRNVpfPdffu2mueHcGoNQ7LVn6NpeFt5hYS5GUXf",
  "key19": "29KtjsCc1SWWewGQHwK6gsiVC59wDYwCmWCZPRExhot8RPmmP2omRQKMJc5rzFTivgVPFkAB33vsESA5XeLVgwUR",
  "key20": "abismf39Qi8f16oiZcC6dJZuUEZTGVgGxUmwtqFjZoLDb4eNkuqKauEgT1Tv3awLnL25hzVHpvvsRqwbFaGYQf5",
  "key21": "2GrYG8Lky8t9zPxPnnrUTaPZf5gkbWkkAYVdSYov7n8GmQqeuLQE48yUSxwEytk9FN8k7oKT1TAc7m5aVFqvqKZF",
  "key22": "4DdVVLcpT6rvJiouJkyh2zQPxcDMJ8e9kADtDesig2iBZi3tNW7kntQxcsQuurkzJaniW9D935eaGFi8sRR1Ayxd",
  "key23": "sWBGYoHXwefaNnw1dCukiq9gmCv6LrcGnnfZ9byKdBUGqQNyA6yqiRBJgVKAiwLR5pot8tQYExH2V7Ywyrz42QP",
  "key24": "5D4r7RBQwej77gg1vZC7g43bX66d1FpgEcXm7adTVAoz1ntj1CcURRHksk8LchyZcjBgVV63kaWJyXafiZQeut6c",
  "key25": "HiZBWagdfb3yPCxoozy95pP7NnSnFuMKxgZ5Pbz8reYKg5xAQJXbSoqBD1Y7pyYT11WnvzLtLj9DDZRwLs4qUtQ",
  "key26": "5hx9V9GruQT9q9oBBtvjFSsNjtEbfnP7cKHApybfqxR2ejk5sFLRii11cuuBxPACgbFv1TDnmLNgs93PTSN94hGG",
  "key27": "2kdDqz3KPG2wJsr9fNN2gPeYGSJSoXCEN3TYr6kf4D8UFDymk6YGZkFrwtsn7fk9upc9vqvjhYqEsJYY1t7NUgyX",
  "key28": "3pWZpMRsxEKuBQAQVSMdijQwthWmzfbUcmdemkXW9UKpcagTyEArHDbqs4WFNauEtC7JG4Zh2kxooZ7TD6SjLA1X",
  "key29": "2NKr2ktU3DZwVqZoGm1mR5A8bkae4jeTy7eJvS15s4VvtjhfCkEbxo3h2N8hCr5mA4Z4NZCdxXDoDgpNwnQRcnbn",
  "key30": "nQBTA3zfo5YqhPagpk5VqnZbA7MuegV1YYy8FqzfUQEhhjPtrws7Q2MQfzUon4iuNZhkfwdB3qGDuDynyP27YTM",
  "key31": "4j4eksN7En8w6o7VQv3YFWZacC1J9J2g7YQ3yBxphuA5RtYPioxUAU82nNyovR5YYwNGbk7oAKXuE8BrnBFEFo4o"
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
