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
    "5JQr9adQxVZCvG9DWhGoqRGHXW6xoYuqLbJgMo3emwr63GVui8z9GDMzvYM9kpJ4G6mLf7FvGt97tXKZYxeBWBGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6UsXWQoJQ4m31C27WtrLeUMjfrMzPAt9wqiNqVwymgAYf14u6TE4SEEfC5wDo3i7oh2L6v5hd4kQHSHZQUSknsW",
  "key1": "3g5MBcJRwkPoesRXtR9Jbw4sLXMtxTuuzAt1qZvmMf3n1B4g2RzypwucjzGZ23ASv46rKzJgRLwSfNFSyr2qDqdQ",
  "key2": "hJnyM6MjubgmRtxDEUmC8eMo187AoYsjQsF1zkBYckywLTg2TdRvDhQN4D3BvZuskodz1AMmLCgoMafvyfWG7k3",
  "key3": "4hcfgQhosJd1zeLuzQBNL37giRFnchTWg2ywRvoefjPHEM7GaqkRW8b65szUW3pFrPqKAWANf1WnEafQSDpXvbfD",
  "key4": "2mybkK5RKgf8c2DDKsNWuQLqNkwF1gzUbujH9hMUPa6BNmeKpB7VPLqJDvTLftg8G8t8PKp8PVKBMnr5RF6vhvn4",
  "key5": "3PmySuKN3Ppy271AP5QafN7ZwSqshPi7wbYCanqN1hteTDfpZMkvkZP4toVYcbxgyaT28NroehrbtDqGSivHiebC",
  "key6": "5DpwoeNfmk9RC7eQ7Evn53dLZSALje4Pp5jBxBNfPn4D3jTTxfr7xtX372vB5ePX4P5JX4jQ1PUsaGmDqknoqz8g",
  "key7": "6yDZepd5aDqqLGgCMdhvGbgpnUP5pR81afRQaDKWJwrRgjAVZXKANLceJp5sS4gy9kBTJo3njY5kKFkCrCqwbBk",
  "key8": "2V5THDduAxFiLbJr3DaMxkGzHavG5eRpas8soupJWGSZA5G3ghzpADZsuuWhdmxE1dKsdYkVXkfSJqMw5nHLeask",
  "key9": "5WuGTkgSdr5YqSianBP5W29ASnQwLFwdrhborDCy54s6byowPUoyZ6WTW47kZGrdHvVMAAev6n1s8nMtg56rxic4",
  "key10": "5wtXKUYJrBMY4pCNPkgGn1YVgvSHZVbqbPQFmJdxTuMHcLoaD28FVJ9ttHJMvfkzFdMdZCUKu3KC8nivfKPmspPD",
  "key11": "54mfRwXV6PpC28LGQGVYEA1BVfyayHvwvSvJPJkoEkMkMKu882eAMS6gmnPRBR4cQAnfqyUH5fn75cwaVrmmgZ3G",
  "key12": "4KAoqoSD5xSk6f8LXtT9FpNmMBttkQzhGD46B9JjpkuCpq6j1oDoooQqKrdYkyoayrNhNyuijt9t4EFQdtFmKkV5",
  "key13": "3dagNBbGMpQPWbWpLKRt9PderZ2Dt1Um3kndhLFs8oTT7wATSciKcmUJsBSB6hPy1NZTfuez8EZPYwXgUbw6jY3J",
  "key14": "2D7mnWsrxbxDHxYz2E461EmvDutcRUQcjXwL8vdRLpM2cR5KMuGmZvfx2weEKcXRYwoGK2feCJhKMiBmFBYTBucx",
  "key15": "26irH1EYGqAHvyfpUR4ZZ4Tpw7Xg5RCiibhPmMk6Y3B9QuK5S9M6y7feqB1eAKbJDxPW7nBNGvgGHxCH7kvze1Qi",
  "key16": "4HnGUX4jzZtscgHcm3d1Hwu6pmFzEvLUwp6abtZDDmhgYF8pXi84G425HpTRq6P5WHMTvgGaHoMJH5QqzTJ7tGw1",
  "key17": "5K4bmdFCSoNnMNbrfqgxojjiRas9vNy2FuWCq9aGmHgrb2oFc3jU4iJWwC9uPU7jCqmnLNEkBjNDkJmQN6PLFjnt",
  "key18": "duKvuWdeM9awsv6oaonp6yA2tMySQZbzKDfXgLdeSHrR9duRZjqSZVqFQ6wmjg5RoR1p35KwaWm8Wqo67v1v4m3",
  "key19": "5JHfGBxRsbttrFA7wMLKD96PYXe2pB8sQ17kL7bmLgo971mWHGiYma2JTBtUxv2oQMBucwRnDBmgU7dmWxRgbdWp",
  "key20": "2PJQiKM3dhJyxe4qr2EfB8MtGaa73fhjEzoiW2VpiWdDSDpEzqkEQ3ycqPPQ1FLVLKXDjoFnzJKMVYk7aNgbPk83",
  "key21": "3xFeUzE8EcQm8xUxpv21CPJ4wk6ytcXZcmWXxjWEbMG1iWDUAuKaSjgqmoEx66pdzCkS7G3NWXFv26uHpfcPgPrb",
  "key22": "5aE8kwSUfofjTg2bPtzMwAhxDhgKejLRQvDpXuKY4vzHCVoWtdYtWHMD2VuUHmVTSBdZ2rJwBCkP4EhFgeBXTMcR",
  "key23": "2FpWEGg5YemCMLD7xsejUNdbZRgZ2vGRftUYCjnQyzz7Kheh9sWGkQJ1e6v7tfXagYoMjH5EzfJZNCPQig5muk45",
  "key24": "3JqjArPro6Hbj7tdiBPLCiYGaKzNdnLqKAvqaXRU8777mTKxGRZMmdV8dTXMFx3wcmpAY7VjTetDUzb8aPEhnrW9",
  "key25": "3gPBGm1bExcLcK7QPSkwxsS3FiGkgKCbhy4YWakURVvCarqmWAqqgUvq4YG3THzYuDSd3XBBv6ycQUAFMcqooC5c",
  "key26": "45jaoZ92TseLiWD8e8Np2WZgnfiHvmg9fdSjgGGj6sejgd17eNa8eMgPTUtJjhwK8KSiUQXwREJ5AQuZCK3121c9"
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
