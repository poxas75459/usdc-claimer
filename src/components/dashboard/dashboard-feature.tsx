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
    "5SJQZ3UhniCF5EZTGqLB1LBWcitkcEjxhQKnEvcujTca4zLQSTUCyjR75eK7S7vgYYTF16XL9oU4etgKT1EPBtxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33UwmLF8emY6i8KfyvCG96YY35uGnKFKKseRwkEFBBSHm3wt6EjtnXPeEnuM8hWRKpTZdq9Yrs9DhMzHbYC2UQ2T",
  "key1": "5mfYSsM2pFsSuaAmu1a2s39eYDPSwT1GYtx43FywjyUWxACbrSAGb9gW6kTHWzFsfd3ZGXYk3orsnZQXr6yWeRsv",
  "key2": "4XEp1TawATRxDzEWxwiX7B2yYr2su2aWx41u3F2TEWhfHMq7icHSwXFknv4KtnG2GMXqqeNTTZFsodthXgJRkRCm",
  "key3": "gp5aySagEXNxcXoohnZdxdGKQPChiPK3qddSMqTBd8Ufj111b1FjdBxYguaEUNezagLZJ3gcDA4dqkxH8vpzPco",
  "key4": "2Ucme92t39mbEmFdTqH9xmf67T3Us3k6qovdEYyAtp9ASEadSQJTzTXJ7v4ct2BptKH6dmLMa7XMvrpnixst5Wt3",
  "key5": "4WHBHXgqcMBcMDqNvcVraxtQJwqC4XKyPf2WdFiV7u5TBzuR1aYxzh8KjdV6x84KuPLtCi8Zdxc5K9gRzy4XWsbi",
  "key6": "4jq4tb3UcadhmRursax2ujy8cH5aVHn49ecaA4sLqYoytNPeXLcd2G2mwW2t1x11q3wT1yb7QLaQqXAxZbTcc6gr",
  "key7": "2PAL6PmwtxmE7JZP5GE6uYttdWwQS8334XX3pJEBjAkGoN4ugpRxG8D3JTjNPyKs3GvdPZCfaau6wnMFtDqyY6fE",
  "key8": "32DWhzHG12yG9wpRz51CQWS3nXJNsJqyUfJozv4xNFDUCsgU1KqFXUzqfJFLf7eUNe6BXjornbFzHLHc7cyw3zFr",
  "key9": "5fFh4tt7zsmfo9vqgwa5NwJif7UmHcXNxpNmbLSRrkZMyLBzCFQMwNkNVu2LwCc298fniEzSadqtso8C1mWKJrK3",
  "key10": "4FDrfHzVUqUaWZWrkp6YGXwMdiwDauZZZXxGGtrjgeKksp1d5FBqHZ3MTvnPautYCTjWi6UAHAxxXeR4FG7jhCjq",
  "key11": "3PCSxMw9JR9eSX5CScPtyF3J2kX6hpfJVCUBAkAEu5RH5J2Xac6178dRUKSJ5jDRtb1iorjV1B23fWLbDFFxVJNq",
  "key12": "WbGYKCYpcFVhA7rsQV94UYpB9EiKNqpEysGKtGK5Wd7wtnZk5Rur9FyxJzjnz5gmRorVwD9j8wFY6nJNJ6e66P7",
  "key13": "y2uNcSxMwspn6sM6y4DqB9BXPcQNYXTJGNqG4snJ2oSc6BFvW8PZWQ6rMHyGGjduYjQUPh3fSdqemDTihiP7xn4",
  "key14": "5urxvkKhUJuRiHtgT8QxFNcMENzWUHPHgJBQNoazCCvueRRy6E2kYYuWnMUkBera8W4mXS8GtFcaELw6K7uujxgJ",
  "key15": "2RPCA5XgLxR7g9B6LgLdVwJA3SNgn5ZcxSjkWF4AjGCUxmWgKAM5yAhhjJyeJ2XPikXNm8J83akqDLVo5ywfo7r",
  "key16": "2N7XGmvZjhr6xT71zj43gHKZf8W3S5QaSURdDVHhetBRGqPc9TxELyZ7qRuz5hjmzd7dZMTE733RexyrbuDztyaW",
  "key17": "5mHwQr8Y3u1oqfCXfm2LTZ92DnznUYvAGE1v6BKNDw2PsEYxxsARziQ4Don2ErkMRpQFMoPTvMNK4hchAdSVgd5R",
  "key18": "63G8dRzCg1NWYPRtVxqqMvhgVEDXUwfQFMxhGBhF8ragLH9Dg8GaXPPxJGweWXWp4cVXHFSdDVbh3CxHMLUaEMUe",
  "key19": "5Pv6rr19Zpzk5adUHhuv3JZsMZ3n9dzxZH7cYmXZAtDnztQWBs6S1tZ5q4zWkoa1pdBhWBT7oL38DbauUdQnFExB",
  "key20": "2MTknNdRtUKGRkyUKXBUwhHCodFEUe4jWcx51SiwB5W4YjXX3fX5ZR9KDCR7KHHokzfuJwA3ZbCA2kCyWqppPwJX",
  "key21": "4KJbdnec54ZVqyoSwk1UucTdF12vLGQGcQ7LbEma1D1vbAFooZ9mSpsEha8JRoukByAbUBnDvMANrBZhS1EzcDVw",
  "key22": "2EBMkSRJQseFR1Szq7bmx5RLchCNBo3danEr3VgVPLnYAJj9FN9etZVidisPhqHomcdn1wv78TZUZmm7rtEakHoE",
  "key23": "guSco7VJE2qV9maudDXkPpRgkPUtpTwvuGcNKGsc3gE74L7LvriWshbCN9zyPJpdpTftVj9KRhw4c3LEGA7B1Hk",
  "key24": "5Ppx5iVyyzdnYvZFdU2SGWV4Gef5VAk9HhbwKkrjQ2zxMY4Xh4koMPxGPrs1M2NAmPaNntp4fNAsNtbm6Hzmug5W",
  "key25": "3AESq2cDBysYX6jqz1RRvsRPn6htHncwEsg2witkEJDWXNBKygVfVaS6a3Vy2st5KpHjga8BwDKL25hPRkLXAhRM"
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
