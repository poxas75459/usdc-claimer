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
    "4M4euuQS9nrMyyNFN1JXqnzXYvBEUa8qsN3MAJ4a2CCGbU7LN4j4c2cj6XdwTMby4VZjgj5x5jqSmr6LnjSnWwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mot2NH7BJtzH7Ta2kpCK6ou52uUKNfd22wvmjZXE2LFcAdCWQKtYHeSpXXLK98MgMZCx5DqQwc9XGkvR5xZfFsR",
  "key1": "62NHYzprVekyLfnQFGNDn7jrPqX82ivpgYhqP74gPgSXjgGsbnjxY8gudFsThHoM8WHupWi2xbf8N5Zkj6w86J1g",
  "key2": "4MKWxuPqyuDa5BsRLVj1hrejE4S1k3Qc4Vp7Loe4sgteSi2WBwBRY1aoeGCHBR5nThJaQhnGhqHYNRKmsT5E2iQ5",
  "key3": "65CVRkndKBxrmnKCa54Xkpn6K8UKVq16c4BNMVd5zhs6VUsyQHrvCXYzoFAo6Y2gTXDzUV81jQKDxrfqiGNgz2aJ",
  "key4": "22cYY7p64UyniNiSrXU9ZXgiEr559fqcf4EexaYf3uLzrtHeyuZpbvtHqptC31TSyposPhsUkqw55i2botCXceva",
  "key5": "5md34UAX7s5Y4odA1ThugykWbHtN1V7PFKe6csc7PoMb8ajRXHHbgURUcQ2u4gRnsfBJrVePvwVgTaerwARsYBnC",
  "key6": "4Q3qZJYDgbouP1Ujqrvoqa4E1pM7Q3KcRXha4NDb7DXAzafPRVXNFagTTD3RqfBRwnAtJCMqgwMDesvC8xjgR8Vn",
  "key7": "5cAD2zG4P1e11MLSF8Ng1ED2Skgn2KZ81aLvNGQtYEzpX3MxUMvHujqTTzJ5vSAprjze26Trq1DzTBvDpBcQUNoH",
  "key8": "4BehtnYCesiCBfSPk1dfnqsxnuJTpYoVjmA8PPZQju8a9A2ccoAhjWNCj213QybVAZLz9Q6XLx5QUi8dvMxMwqnt",
  "key9": "4udCqvrpeM7oSm3L6hVgtXHGWaS95cYGGHirnhyLGQL6cU4Yd76bpzrXfdYSkPYN4EeP1y8BotEqSPFDJrJZ96Ed",
  "key10": "5Zj8Lzw5Nue5oPJQ31hn3DbzA14KayTdD9Vg7XohUoQUc1PGiM6XnF1vXcJNz3dtZVVdqCN3M1YenFpXfBcQZoHo",
  "key11": "2Qiy6bzkiBVXm3v7iLyEorMyPEkJQz5eCAYWa93czB8iAhCbvTnTbwFmzdKauLMsvt19Q4runjDBafr5M3rrwbxd",
  "key12": "2xQHPzowbjgrXo8pmzddhmPe5Xk2evAKTnqoVyQET7ES4HGVArvx4MH82AKQJ1qx6JiQ8Ne2b5JDvPLX9SG11WUQ",
  "key13": "3homS5wanhU9ngCykBjTRCBkZS3taqTh88VBAZotMVP91sLF7G1xwMawWEuJCPNMu1p39md9RoPkRxrn8PhzGTT9",
  "key14": "KvE1zUQVBxbFL15a9281tJQtfNmRvrpGDDdMNL3WNDm4KyPzGjMGvEvd9FoYwr4bcCW2kymMSgXQdyeABsq74nr",
  "key15": "43nmrQXNvyNY7Qb2NkeEFHDuGRCrxNj1Kq3XLSwXN2YUkCKwbdUYy91NFZnitoUmSUXezH4joRHz6HzYEJS4DyQb",
  "key16": "5hPuXo2C9Qkv9iAQps3bwn7F8XXJwyA5PD4ULZdnCrtuzu7tHVwEQTnfvmujXPufdEm1zF9QvCssi2ZPpM16jnSc",
  "key17": "5Cm4XBYyqYCLbK3YQErsThfT9DVNFbBzpdVMkVb8XJ2suqBC45bZ3nhqT7ddqwtajdT1hZVVPKdKMCkpUkUqy6ZY",
  "key18": "5ReU52bkAzLB7b6yjFhicFmraJH21Gs3DQSWEzcqMsJ1qs7HuowQjqV1jihR6mAux7RfSWZeoTRhK9CDLiCppqYi",
  "key19": "35KZsLhUnP2yRRWwnYxjoAA6TuArYKk5XLZC3QwbNMne2eKX1cpGbsvh7rHbBKBTa9RrL721nVNp54XbKChwfCac",
  "key20": "5PhwvpN1wnD1FwzyYBiadhUwsBCYXxE9GzCCC61S3cf3R47JZ4zecD6bwuv28AE6bf4tj6zdnipKNXvrgFQccUjW",
  "key21": "5orjVYasXtK3eaXZgPTMw8i8TCxUHPe1wnS8xvy8JXcqVnzbSewrLBUHbXBiP24G3SvxMq65hjvjAEgr3jBjMgRt",
  "key22": "3ULV6Et9qiNpBDjjgc2DVQfpuLEeDTvDjYH3KwTHtDyH1PqDWiHcrjfoBcJR6WrLaY8THoCqZ2zSUspvBxMd4geZ",
  "key23": "587AknJ8dbhgHZ4iXZH1uQ57dhe6Vnqen6PGAeQDRdasX8mSte8DEeA1ByqJ5FmiNVofVu5TsYyXXq366U6Ypp7j",
  "key24": "5HgpkSQJzQ7xsty6eDeivDAdAS38kdx1GRdbmh3kLzLCSXjbjv1E2mpF7vtwz7L98MzkvyfSWp2HCWvkfHe1RcRY"
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
