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
    "2F1yuzSi575G64uhXNYCU2M84bLtZUqHWR76bNSgijV9LB821BwhWR7go3y355Xg9pkPWHk7ziDKfSb95r5JDhjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzBFEyvM9x27GUVT9CGnhqBeaQJ4f9eBKtxee6PuFiotCgRi8ydekLxt14PpGcwuyQg2F49Bwh3ibrQMicQBYKp",
  "key1": "23Jdpty7hW6eLbcA85NKLJumuSJfz2DNR6qWzE5TXUbVmq5HGTPS9tHuAUMsUqFdP2LQ4jWQowwj7QLP4M66pMPG",
  "key2": "CWDrQedf4NCchuHUSasUoDa2bqJKsHqdQHEfogZPH87VrHsxhRw3PJDRWdoG3G888GJz8GgaJenFFr8RNxgahX4",
  "key3": "3tkyefuaAo4DEQJvoMHLWB6UfcRKKR6SfNbSrvLLqt8VLTsi78JSZe3FcS8rb1neUozfrkk1UHrabgFEcyVPfT96",
  "key4": "31UTc8szudfoxLRTWRzn4xxaF4s5FHAK2bzvdBHGZZhWEYJLbBkyJnkHYSYMAmzm6ngN4nNtU7kNdLnVXrfckNDE",
  "key5": "2Q7rZ8rxwGZFzjfvfjECfom5KFPmzsgyGtMZVt37HHKYe7CzuP5jm7BjUvNyo5E5WGcsdmjyCG7ccesutaZeBtQd",
  "key6": "YfFsjdRKg6Q9LtyEXaafocZGhY1hAEZu8U3arLAEqZZFLrs4JoTiqpgVYzMLjSiSKMxqupkEDrNHvWDBM6ZLtcV",
  "key7": "5zge4fRh6pUDDFmsjwDGbygYybpkaGTB7WdWPGdhGhnFK1oEnKHHTenbu4kxiMsB2EqW1ZUDEYHP4dkDyFsKxScL",
  "key8": "3ATUddNtyzg5nfMa8otSCNg55hMqX21LwxuGzYGAEGtHeSTToNWFUdJSizhfGiudycfChDASH95T1SBrUaXgxQxd",
  "key9": "4ZSKt9jBV4rYZpEbxXzQvVJ1FeLxzQx9hsRS6SPpj1Z5TZ1EsZZG4WngWGWAqB9XM5fLhBJBrBmtXgWcza81Tme4",
  "key10": "3m5nHqyJQz8GQisapJ7s1keEQAq5Dvqk8ttwLZKvL8cY3qNsERKXEgMuLxKJxsJBfqMFahndqtZzA2pSKEtsD1Xa",
  "key11": "5ctzyR7S68aeUSxcEkfJUyUAya1Es71JcdHQJCvbLjnQFvNARFMZNc52zj1Bh27ctFQNAvSdTbyeD3zmJKRBobTM",
  "key12": "3QagmRQ3YaMLTv1bWSHKfXWKv9ySoNv6Qx3YpboTogdD38aWcHu9kxzNs1r5mVz3JC8ATncJJWYZrEkDcJvczohr",
  "key13": "5FEFwAiZrYggNFGrDzt4wSGTMXHUW2zMFQg8Wv63r2xFarYYeoURgeCkWr4pbkzC4gHHCb7cL8q8PcuiiK8jBAVo",
  "key14": "4ygHtjMdQE9H9T66aJu1ETXKMStCL8dcQjNZh96WGrZXrmvwoEvxrTEyRVWESeWy76Lq4phHecUby9fpNJDD7z6D",
  "key15": "3i2NP7e6WNxcwJ1aLC8GxVdsSFPVHPfGd1dVt48XrWrJuJ7uCDxdKkxTt5SYqZm7CoTV8KrCp9CBufo7wbzULbPw",
  "key16": "3rFoWk53ovCsJJCs8Ly8EtvTvYw1EyFNcSZixCi9jUopv31qPmhxZ9BcUwEp9tSgaJeqxmUTgdNukFWQbKFfgLQp",
  "key17": "2RLBouf6DfndnpxJT2yeSFwsBsyNNfmV9ioMZX6DVM9mwQwzoq1ZnWAN45RBuYbZ5JfAAk9scHX9SpaiHSu2uMu8",
  "key18": "9L8q5Sd2Q6zKvDwEToGE7oiZ571K9RJ3Xwk6mDcQqXqn9BeqLGBUxeCpDU1wsnxQ96okxWz26PpUQQD5qngQhTW",
  "key19": "67rVTB6QEDpR2iAAY2ozDsvkVv1pf6A5napjs9hHQ8fpYNzJt9ZXtANoVwou2vAwhUwycfqaRQF3BHQWo7YktPfw",
  "key20": "2TvpzRi63kTAoo12c3ZArfnnUZnFoSphDYgmrXpctrhWkQPA1kmrrYied8rY6W8AAKmumMYraaXnDXrY1zF3LsAJ",
  "key21": "4PDsFH1VaQP7AenucUocUM7m1toPULNjQkfnt5jSSKeYECHFNLZavmUeFKD2ventkXfj3pS7r4BFoYmW1GfdvidN",
  "key22": "36nTY5WnnUtUj1Dk3LscqhoGJSm5uic6Rk6sfZcbdGtLJJkSVH1KZiawK6NjKpzi9FUAGzcVKx9bX289xqZaqujv",
  "key23": "42QmyNnm1RVUaAhVY23MLeNaigiQDRdjGvpVHxGbkms6Qqy6ac7UoL7TU7SsJDyTSgu727ScHNhBWU3eEr34NK3b",
  "key24": "uaaQumuTRmVVsRVtULyUWyEhRWBytxX8MCHkv37jiep6wxR2xVT2f2Mxkr1AVVZTZuCjJ74wxhK9bJ8fBujQa8N",
  "key25": "5uC51fj9kaYBQf8Pz9ZSdXUQoLT2nSQvLZ6E3NbwgYJJoGtp9oA7AaC32h9qK36UpuNeQQp2ZWoq9fTpbhBwcJoA",
  "key26": "3mMWt6NfwsfbZww1WmSUpiQNxFNQdG5JVYnhbSQ2x3E68uxAQc9JKJHwrMpuJ4TWgnxG6nbgaTNkSVLC2eGHdxLr",
  "key27": "DWixf1rwAPrgzPWaoCZE32HtLmE7ZHQfwC439zNSoVo2sR8XFFzfNvRdv251pY8yjMBgcjB2sdWb8hEhm2mzF8h"
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
