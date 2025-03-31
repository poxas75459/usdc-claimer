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
    "3iS2s2g4zaRwPLaztM3Pjd4N3NUMNy4L44T5xY3fi7NFXsBY5Xfr2Nj8BUQNLsWGTwk9L3k3dDwz9GAjgPi2RreS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wok8EU3ei8MRJauW45hwqMdfNjgqMGFSUBHdRLRuvopsrX5Y99bdHoPBdZrHydk8XQ3RFWP7stk4qnivc93hHMu",
  "key1": "2g49ExyNehcPi8BPhpna3sy1Q1mVBh3sQi61yxZZYnBGL1uUCEtGjePrPNiHHnrJSxV9qoTQoSkzVa2Rak9WjWhu",
  "key2": "4JuBhvEDzXzkTF1MTZHua5KMG9bzGYN5ag2qMjDMtPgkzGngYkJ6eSuLTUgbEEBALtyNTqHs6zUrkSYWf2UVwwjR",
  "key3": "58HZgGUD2qZgc6P6yaRLGkYdL39gDxXhwQSvLqJjjtD6tyYhgDdQopRaTXgYpnYw19HNDyu13LfpbWmvnro2mK7C",
  "key4": "3bxqNv9jANb9HtqZyqrdN8bQ4S35VMjRTbzNQEoYBfobaXV3E9G888wGCxybzZ4CyupSvLpBXXm35HGLNuAWVhv2",
  "key5": "2m1X3K8azRy4AY7dukmm2N4FcD6VsieMUfnRDZdNyVuz4EYDcpCenU68VifzRnPBaWS54XB6A5fv9GbrCVtMbXdC",
  "key6": "2cMJTfkXWs6ZFFN18k9RB69Sh2UoCruwoY9CPvJUmzJstaczw61bCezUCxQvpjuuissFTAVKGwMoh6DCjd1DNv2N",
  "key7": "5mEJzdbHAU23MBom7U8aj9bMKVm7SW7S1LekBsSJRoBfn3amz1Tjkmr9eCJyXwh3UhKZHM3wh3xXduC44UHCbhkK",
  "key8": "3HZmGNaXzm8XbCB8mgbtk79oUFdg5xyzDaBWPvHbt5RpehjrVmhmPuM6bFqvvJ4VnupJPkYBWaY5NBAxmobBWwR6",
  "key9": "a5xwfenAnyr54zmyS3kSq5DzQ5h4TqGtj8pcvSv5Arc5eNKBXC4mKULrJaAUUqbdkNTPEVZQ4gadptUTzGJ7zY8",
  "key10": "665iwEo8mb2QoCW58D8f45W4LozkAN6JSWsfiQ6YS3ecRcWnvSdgDp5WfFXpN8BBuuSdY2J4n37APNcTbRjte9Se",
  "key11": "3i7ebtjFXZ1F9pm4wajA7t6CXZqBQxzKQ9S52XAb54RUbWiDqfcc3nR6ehcosVHmWDsbExVZhmPk1FzqFkjPRHiE",
  "key12": "5nAC2LBJ9sR8rrTtJpwjMtsdT7jd15xzWcoo1f2bQHfaPZVtodKu1PhqdcQDw91Sb5121CWMEmVS75LQwKPKrAWZ",
  "key13": "4gn1GyBu1AH8FD9MJtSEPEgXAp9feypRTNi43wvVeCqUFQWJBSr5YAvABXASAkKL1zo8vMdwfKSFLZR1ZLqeaJ7s",
  "key14": "3SpyLdHD2Yw2Uu1Qboyfj2iy8HrGrWBNhWYY24KAmCMrJpukVrcHFFfktqUVHczbkmQSB9Jwxnq1hRXQXz8dzhUe",
  "key15": "hAsBzdqTDoLBx9ZRSAM8XHSSS9rZc6jRyN2vp8oTvMuJYyfHpfvV6nZfyknxJZ4uZUKq56PfW5Kdo2sPxvRiRoY",
  "key16": "RX247y5ZZAWJQ2wVsaLu37g7EiQGqMQ4aRp5oVJKHSYSV1LEu78ue2LWYmG9vSaeCXbJbTvDHQ6NVUdNjnD732k",
  "key17": "5m8CBs1UkBqCTh47F1cJJ5d6ymuhddNYQeoTAEbPhv8TzuAEtCg49qmnXiFMkQ8V6edJdzUczcoXsXeVVBSrj1pG",
  "key18": "sj5FfwcBUcNtr2tZBwn4fsMjcru22pqzpa6WU88KGeKqXaTS9pUxeULFrUN8HjERBkN8YtCKegN17MmPfiSwqbi",
  "key19": "4cVTj8UYShkUtmi7jLP6uetJY9UbhibC5VvQCxzppZtqjGt4f94KCfztw1Mpsk9W23WzXpbiKAwthmRFQWtJDZDR",
  "key20": "2FGZ2HTXuw1GuWf4wZNehfLd7xz17NgHrADuX3xKPVdbUtdVxiag35Lkx6yjCmHRPPKbVjaYPDcrod719xNEJtUF",
  "key21": "267arxuBV94hVUnvvhcZqF6yxQQCWuKaBhrhgMFcWBeWy2T8SeA4gLDeWeBD8Zjh8SdLFivuaTFZKthb4pbahLuK",
  "key22": "3nVKF1cT4YAFat8tpKSNhbUcinKrY8MgH9wyZoMCzhhb2p6NQhBPth3DhwrsggowVjWTVpEYW7zXjGqSoZQKRGR7",
  "key23": "648XRKUG7sLzz4fb2beWjMtU6eSiLFzuy6ZXk7ft6EcG7n8tLutJ7mVEuG2xeEYpdGuQmsdXc1WBdJQkH6SQ1Akr",
  "key24": "24J14PVv4TBvCg5ecb1WzRf2rsHfQiCAa68G4iJYzh9QAHDCB6HehAgV6jpRX5dE9fRuwWyu4K383ZBUNSYj1Tfx",
  "key25": "jdZJiT8fw6XYs537JNVLCGFwtBaSvtRCiYxKSbP6jHLH6RTEtGa1F58oEiTcYSzPLXAcWA2bZifurFxqjdpHRnS",
  "key26": "2fEmuRZN1T5CfV7TGwjSxTFsgtA3yoNraHmFMAFMqrSbgkLJvjE2NPvgnrZgrEYmvrYiKxSa6yf9kGz99Sufy5j9",
  "key27": "2fqnvW6JERPB4Dynob3Ktgvk288LCQwVEWg1vfgGH4y8BRVL7XMnEUkPpXbvTh9CBSNU26uF4jxpXcuovpxjUfzR",
  "key28": "4uf4K4zTDuPRB7vKYx6VfKQnwma7kjTRVZm5F9n5CPfBRh2QXgBrMpCzNtond9ZWxHdaEfuJMhJE8Hv4qwAZnci5",
  "key29": "2uuohGkwD8YPPmnFwEsEDt8VkdurxCXqEdW3RMmK5TqwMC9idEQaZWyX9QRb2bmZCWnDHWyxXLWxrQvGDkbwzTxU",
  "key30": "enG4cHCUZ6gMNdan1aQUCiJkwFo36EuE8cXF69UakgLByF2rw3mAEKrQFrU4PNWYEU8vYUuXZhrEJUvCiFmLSsp",
  "key31": "5ZHLbe834NuT9cRdn1KMueBmLx4RjJKPL57U5MhyXmNm6ipnS9QQE5HXEMqv5XUc9V9kWiXjgatskRKUnyyBWhT9"
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
