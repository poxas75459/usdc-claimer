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
    "63B39Dh74CanStjbxMJaDrzYZ4sDCNfsUcUysEFRnTP2x1bdbS3VsjULuUtA7FXCMMBqbExdPn6gBvTmawh5HjCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AHQvi6ZHRVjXqdEKv9cEK3VXvixExmPjQ9Sm3gk4769D8CGfvNsS5hQfry2F6QUJmP3nWDH7aKrg5PgX973zHno",
  "key1": "2KQQXcRdq2pEkyuQumbX82mmJKFXhYK1mj8wGQC27P4cMHUcfLbZvaQwLigxqXhGtEpJgtMpS91FwqYBYG4t4Ljc",
  "key2": "3YzysFPLGiQFHfxeMeoF5JUuNn5jvUG3sMB3zhH5uKSJdZtHJvUzbenTxBvAJzJyvs54S2GhNEehpR5bsQDqaYd9",
  "key3": "4DeKzmhxSGpE6MRJgRTqA2oWZXVtggeAmWqs43HTMXfMZqRunNgpRpQV6CwhFXkxmb9Lok9n7tU2syFM86ZTzjgj",
  "key4": "2ebgQvoiWTvSzJ4LhkxRKNgKRRcRuu5W7HPMEGMNsVDGHKEpLHrwyx8oBgBzhfbX8jyJVWY7txZBrWE9H4AieaMq",
  "key5": "59qrZkhpQfYYZGERYuaXYEzBK7u7a5AhH7BzkdG2MDoj8JAr9WSogmDTz5B3a6j2BqD2Yk6AdhLaaRi2fndY5xm",
  "key6": "BbQMySpJwu6yGKiZ3L6u2QrU2xA1p69Qbi7rny5PXVnLbYoi8jsotmKyh4FfjAhRPfFyjvtjHw7nhK5aN8wX8pf",
  "key7": "CUcVxnxdq4aJ6MUpsHyXUPWUxLuxgDjMV9M5Hzh6BGKD7aCH24sHGGtVyqpTqv9G1z94gJG6KjmrcD1gUPPhbFM",
  "key8": "FJYe8GofFLu3B89chPDUrihWAQoLyMgEAYhfeEGvvaex2kfDFu1dpK5pAyUhojXkKyEuKPs8MPnXBzon2AXh9Zr",
  "key9": "3SoJBJRfJzeBiF2Yn87bDhKJBMzHWqpnfQkqoyqgppehd4fwraHHbPtsKhHg6BnVEasA2sJzYZGQEiDgYycid228",
  "key10": "5dr3URgSjvNMNTS2PdtNohxpCLBSJW65ty7Bvd6rhanZztuFWq22PiYyeNCCPNrwz3EVRXGDMMfwLdDSmoaswK77",
  "key11": "3QJ8hF1xsD36GBwvnnmNGzCK1fxaXTS8euMSK6vTa3vYpGqnNvrrd8s5yGJvhtvgQna2PNQN4i6z49WwV62LGmKk",
  "key12": "3a1sXiHJKgNee1h97EKfEVsc9T2PTZQvRAoq6SQFEnTE3LPj6ygTeBtWvniWizYHyNE3RyjKXcN8idatbeYTnPpP",
  "key13": "26A8qtgn2x5qN9e64h1qwhPYsysRU7M3BCvD9VWki8HJj6VbYDqkszYMLxXBXGQdyD3BVppyVumXe3c3d5uq73a3",
  "key14": "5jx8RomkHYUMjpwshnpXt6uA916gkdBtgPxaMwjsfpDbaChhn28wcqusSgzuRdXErkGifCp2RA8VPki9eeH6Zzuz",
  "key15": "Nvax6QDRU8ZnPWXTPsse8eCk2eCd6ajWcrvuMohwvoEGnKxz12hdhZ9Hnv6uxP9NhAiFdXxniELHc7g4XjHJDRj",
  "key16": "42QEo6BVkVCioPhX4FVpvDeuc2RScnGN8Us1qRWsn8pFVtYeqjKD61RAHZ2vV36szvHJpxXYwFVGw7kJeUaiLq5n",
  "key17": "FqubYC5tWSpmQBrzupGx7DeDnF83b673KhcrycwSQd3uATnAGY7VismbjqSNhisbNA9yEpyNea1hDFvedZwaP4n",
  "key18": "22pQsRvzk3VtbsDtJaEgmUjbVCWY5qBGWXkwSzZw8UmDqRxGdgkQLLKxvV2hYyHV6XVz3Q6xgS6qyUowVZ4ypdTW",
  "key19": "Co4EQWzTCPSNUKRbAUwZ3x63hJ2Gdk3Zjzbmpo85UgwV7bPVQt373zTexTQegaSRWEJbLBct218S262VT4VH75n",
  "key20": "5Z5SsYvnmnUKmxKHgKVdqjE5ZvPT1rfcKdEzvivpDcncBqSWG1gEUdg1p4WvDkV4Kpi2ApPQCbusVKrK1xpFzbpv",
  "key21": "FeRtyjC8pBiZZsR3kELZ5FJssAV6uGkdocvj27NAK2zK1FFa1NPaqFLW5C3Txf1aYMTJ4k5nwELu6N5omwUfbKM",
  "key22": "2NUuVwvyXeWx9qjgkkwcdTJaAG32ERcBYgFaEsR7Hkt67SVMqa3w4igbh7qNWycnRsd2XVBPGRbQHKduoPEXv6GA",
  "key23": "75kBtVZkgmK5wqBYL853k3LHyMKdrZgvzPUS8TsM19tXGoMBjs91W7MVLJCcRxqA8g9KsB68kSkn8bfSboiT5qR",
  "key24": "a6W1ZLAxHxqiqV6Kg5c5LAsfGSNuLpMC4BkLu1xabny5uzQTW9gX73d1HmDDndjwVHzPvuRGC18VeungKbcFSLw",
  "key25": "3FaWETFojQgebnNQUd5M3TxoQX4rUocp9zDXCynAYfWZWfasuZpDg2nLvGGWpENgXhH6Fd9sqdYGfrmvhDh2ZxDT",
  "key26": "5vFtDkWeP3KVgGZDKGuVUgwTqkh2wakpEeqbRrpx2AcsghEaFJ4VxDoGmfYhcsRJBWsdyPbopLG5zNF5es9PExY8"
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
