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
    "5LdcEzG87gz6ehsE6mWc4UGZ9zz2UNgxUQ9hyhY6fsK3bZPSaumcVfvh8LaqXzLCqH5AzW61TuP9BMvFW4G4AL32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgUQYVGcCsCtwPZq9YfzczyvAjrfCMWbeX3Nz6bLQYhBCVwqUgHkMAo9STA7VwZVLJPWEcD4PqJwTKsqf6Z22aV",
  "key1": "3FFKxrcxiD6QxW5qL8JizTKGnb8j22Ve7hJUkbNrRzfEars4fSUcuDkRRBJgKyScsVF7TyLkAF7PWg6WCGq6GXGK",
  "key2": "AQE5vtFKNxV54xMoMZciwX5JuMNFVCRnHnacQq45ZouJVnTmZRmPCZjE9etDcJQnXUa1xKc46HQ8BXkBYuBAEzS",
  "key3": "3HWv7KwrN5zoxdpzZr9tSQKgqBEPxKQqkaLFDWRMoNXM3LqoUEt1YJinsGczT6d35cqYmPmFboQaJ99rLhigTNFj",
  "key4": "ZRWjq8W4PDY2LhNW1Lip7f2KRewcChNg3ta35guJAZaan2C86Gzgw6Vv2HZkKUG6LfE1pr5ksRX8dB3qoHUSbYr",
  "key5": "3xubHrejp7txNNMs1E6pCff7WQvvUXj7FhwzTvZ8mhkij8Vs2z46shJxkFUbBzDSZdU7quswtWSVZiXzHH3s2sR2",
  "key6": "3kcxF5rdJnN3rUe6dZgqvDybAFQV17q9Snfc5ug5QuoqpyxYKmLVaSLG26afWje6XQZsYmVrtvedLhVhmRwxNRxm",
  "key7": "HRYc5UU9SWyRtq7dyKC9dPTpFTx9t1YHAW8jM8yXCJbcQC91DeuwmGxNZ5SWUvP8G9csCYUs7KH9ewKa2TPQBXy",
  "key8": "4v5sRUBcweFj9duj3hfSA5XpDgbeNgs6HuR5EBrVVNGQcv71oPdVU8QCSsTMnuzm1jXTyMncESZsAPASotViBCCb",
  "key9": "3x7ve1sk7iWUBrHpJg2M2uc1HwMwnW3yYpk9tiWpWLhbzD1fGz1veJVwaT8sD2QTNsc87pypeMfKY1SpDNj3EbNT",
  "key10": "2QDPyYvQHJAurhkdFwBRjtwjWUk6pxC9Ge9vn2nixh9GbciZuvYbrQNdUJ8mFDtCvky6fxygAcbA1F6ksmCJAPAw",
  "key11": "2hS2B629EV5eZSTpWQMtJnKvFnSyhd2Rhq6BZZumcVLFCNoYzBu7SWaXu9qadRJFpr7moyQqQ3eZCpzoymqmQbyo",
  "key12": "44M63RNwRJpYdQzfFyHzAmXdVgmdw5WRUAvxEKJjmdQcpDLyXS1P3rvLv8QbMEeskWneAZbELuWPzBg72v1ufH7u",
  "key13": "22t9gpSukzKvQwEobYsqxGwsdM8GRvypXGQPvU857uJ8AjSD3zB7iuEgFXZstNua3AAFZmgjR6nCKuM28JrfWAwe",
  "key14": "uzBrqSF3MShEA7mVrB17Y9MhxUUxFXJ9DDtNWXNaaqafWPdaVbni1Z2ojzXYa69M1WNENDyQXUTPA6LccsfNEhg",
  "key15": "3inVGfmB6BwUyqoH5F3FfhbVgVGHUmeLAQR7DRnQKhzaZjbnAKVpLHTcLavsZrGgSYzGpDvwQgEdS8Ky9ziQkbpY",
  "key16": "xJBnWPNWCUjrxPCnGGyt7fTr1oCJrwxpoLH7HrYCrMTaiQfSG6McdKHdcPtTUsEeXaibxyHZpyxHZzV5M5AiVQ1",
  "key17": "5inrhAioJeXTYN8P2Xruah6mfjzqZrYFvWaozkqHGDxLf8HZvG6MqgcnRsxpjCE7YSEkhnrHs2ejdmxmAYqftNeD",
  "key18": "hZPKZmDqFSNANYyJ6DrEHQAMtcdHMLMF1vrjEJ8m2umWpkR5Dkp34AyvxinEJeHLknTCcR1hB4B8ZYmWjjx6pA3",
  "key19": "FqFsErKAAySFDRnNXV515PBZkyhyB6gwC1HsiaF5WKAjUA8C7MzZC2W4kaBetVNekFxJjaBo7oPgqH3qArgfLJ1",
  "key20": "2tyDGS2S9TfxJemRB1LbKyiMLaaHXjR71NffETZBfgQ6RbpicMkjYar4MtPAr67tHH1ekxvy6E5nzcqL3bzX3mur",
  "key21": "Uked5dMfe7biU1pLPdfDt4Yk4wMeu1FrdksR4ue9QYgS88nqD685VY5DKLEX8JXXoGtfa9RHj9LVTWGHPFsyEK6",
  "key22": "2Rkz3gU77qkmB2jk3RGCuxYuK2ZiDRShg2oRoFcbRnHFkVwCzYBdZoikNpY6VkDi6eFomwC55YhBy5qQgRjKD6KM",
  "key23": "3pcCphhnYVgoQKKFDpMjshBDdD4dyZF8gnjXYB6auiurJjFujBJ7fGmMh3gqQLgTLe9ECoTTGVxJCUtygLW7eUvZ",
  "key24": "2iMTG3neshsekXxYEh1vpGf8GwGUJho2wwW9d4PgEoJiKYm7z7YmWPWDfYNDx8JRVxSKFLBTxg3CfzPpeTbbbyJv",
  "key25": "5BzaXGLy9Q8dYKu6iodTm5jJ5q29kPG61nC5QdcBeRXxDLFjiw5KPeYBqB341vun11b3quax17xGR89D2hvSqKy5",
  "key26": "2nHcgEhuooyKYQSS4k7vHtA12G9P83erypuZzErKrfsAH2DSKkFhqUs5UG9YdCLJ39aT8rvmrtcYHMyPCvVfsVsU",
  "key27": "21QJ1R3LfZRuCuWoJETnt5FyThtzYooLJ5feMdsP7WbR9jKSVUui74D7dHyj9ZHNGtcAVFpJfFkRYog7GzNS1HQy",
  "key28": "49SoMcMqjsZtjx5pqUVe4etyB9uEJvFE2tDd3s1kPJu7ox8Z4GtWUhsCuRpTBMWhYwo7LDRm29RaghpMfNjzegJ9",
  "key29": "4EU8Kxkqx9gE7DMQTBJ1DCkd5j9jHEMHvqVFahGRYAPYmXhgtRoLjrnNpypxT1amsdh981cUJh33wrbuh7Pz8Bya",
  "key30": "3ZpoazE4s1u653YTz6KmWExQfxWiCisosZceRDbdzLAMwCbLpK9NkKZzsEwvb8ZZUoASkKPskzfYSQDsPEgcHcYP",
  "key31": "2aZvZbVHgsACxw1DPa3MZmckcjodS2RAD83XX7D27UwbUZL234GiaySZM9C6un1VXuEUpEjAdQJsCPShYJwPwzF5",
  "key32": "3bYSCxPbETxkxAYQW9bNABzke5vQDat3A6Sdg8dY1w3vPnAwtGapY2csXNQ5A5emFMPWaCZsZNGZDPBBZfLxu1wF",
  "key33": "26UV65WR561xzqoiVcfQkGECptaEWuJ6vbVarEaGYhX9gb55dmtC3mxpY1uvHSCp3kEjFhs3ELYkTohmQ4TWWnb6",
  "key34": "5iEpvNoPZpFuWxvRHSSYKa9NYxeegf2kQyxbDnwfPoQZHSCsQUwpiipS3A5LL5SeXpgG2RSeo31qJWYid3FWhQx5",
  "key35": "5r7p3B1k82sqTS8PcKA4K1EZgavmb9FCN6TPt2nzt3MmUdTiecjJNcQ3x7XATKhktrkNszwnhHRKfMosQ7vF3vjA",
  "key36": "2vaKV7iRbQnWJXckTBfZGUGigowvgEqzA1krQyX8sKG2G3Ha2wVD9nH8gbXDa1eKbv1FqJrRQMgjnoNq5LiQRqUh"
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
