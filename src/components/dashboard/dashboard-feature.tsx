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
    "46JMz4WmHMUVjTC58LsnsBsKNV9PTURsuBBGksHBLnGZ47Kc5iMiqtDL99v5dxNqUhhJ1q26QF2inrcX4JGESzcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a2D123Jz5vJ96hNeq25p5ApW5AjjfSRQZYLvsNyopPv6DfqoVwPzySZX7KJKPNmiMy3yoEfguHy2Jjh7MSfygvk",
  "key1": "2qipzdfDSSrZktS9pr87iTSTGKxh4n2QKMbeCdnmYQx2YukiShpcuDxSH32qz3x8St9TYTKNgkzYHJ9vohcZWwfe",
  "key2": "bHgBqM9bdZ4xFAGsSTuF6re2pc6bg1TnXnuYSjaT3nDFR4gjWewsejfyaYjs8iDMxQkzLyoWjAzuezxomykgU9W",
  "key3": "5eqeB9EGkUw7HyMDtknm9hEPsanzyGKxQZ2YJ3G5XaQ5nFAGtxC95ZJDkscvnXENYkNSxdQ4WRoGJNruWj2JKY4c",
  "key4": "4iDPCNKnvUh77YXwGLD4z8v2tUE9Ah6fjmFVnGNgwDcZk6Nf1NFDAjhGxKT9GwgJnu6SyJy2WqhqUZg7mN1MEbPu",
  "key5": "32iRx72NFUGdPG4bCLcf1iUhZmetP7AMwNVTMinYbtvW1g3PLq887BruhES7qaqrbegwCuByQsXgisNBTxivqzJC",
  "key6": "43vMu9Ar72cS1EjZ99NCaPCy8K7mSyj4SPc4ZmX8vCevhDtjhfmSE8Z1J2zHPtX8c53w2dAq84mzDgscVcxR2c9C",
  "key7": "5RDFf4THhzqdjk2p3um7KFu6P6NyAYfgfJgkSfey5mKpKM9UFhC3c79YgWtytZeiYw5eDZBgZkFwCWWaR6zi4wHz",
  "key8": "3LPhT2rS39RvW1Xx9ZJZ9NKE5FVyfFeXxuE98CPJFQLzkvTh3ZfwEq2u7Zi3Gnu447rpuExLnB6DnKrEufcqVFMm",
  "key9": "124SqdRCSGx9uDWzyxrriu4UDzSxw1TxvdaAcAskQ3tqkuV8xsKViUh31a4U8aqpCZJj3Qn2hZHPS4RPD5jNvAFe",
  "key10": "3QWiCUxjnKP3BNSVrDAD567jWx9vHonhUg42FvBBBCUcALoYPi5QZBEKo5rjCK6Gbkt7BNTB971jatvPkgW8EmeE",
  "key11": "5MfdZe4dUj3n1EGJgRxzuqH9tdfMsxhuG3VtQf7oYBfX8rrN95so3rgsj5KyWCcenUWTxqV2nR6V6dpXaXMFM5B8",
  "key12": "3CW4hQCYN4HwppWWQffu4S5Fjd28LH2ppPTsE4A6Fi3SRFHBF6eJsCj8qxKyxbSSeCZw6QF3NFPScFnjNQMT1M7",
  "key13": "5RyzVhL65LkwJiLy4sutjvdbdq2dxzVgMPdSR2rhQW1KKUmFwdQ1Bzov5efeGQY72JKdWMvWmfKD4qWvXoPE9Uoi",
  "key14": "4vdLqTipBYrRa2Ub42hidRgvh5HN5oDGfJGnrwgZ8MxiMxtQBDBT8hvvo1N1WdrAtgwwKi1Wy7x4z9p2DRVt7TC9",
  "key15": "55KGYqVn6H38YtctBhAKytG32UnrLKeHoXWnX1vZEMhZ91m4Gq7ifCsR4TzzLzgdQt5EGevjauBXtqYAXpjXk5jf",
  "key16": "TLhnoNNh3QuAnJqMzftS3Lw5w6z23RrJRSkdtDViCGeCh2jbdiuMYjZCFZa5kSVfGCoZoEgRzWfyNHzneRLGQ1G",
  "key17": "2e8A6bBpgQJpHbdiydvvGbdJfaSYptcaH4UfanPX9BfVpbizXxNdnosVqBLyyLnf3X65R2zhs7j6VkvY3RP3y1jf",
  "key18": "436GJJtAMjA4AfiVn9gmvPGjVtWbWQMwLCPuYuKjdnDqE761rVosDrvTq54XpGwbYznazJ3FVhRJ9STRgfe3fmjv",
  "key19": "3QdBp2R5KzKEBMvXENrKmmxdSeDq27k3Ceth7FZWJvhgYezp3KV9PYRSJiGpufWgXZpJfsQbLRGKnGjmAFgex2fm",
  "key20": "3FeScyDQUK5XkxywgvVgCAMW37byhRsgnuJkVgQPNrLazW8qcMBWsBg8Lf1gyFg74Hf6QU38pLuyFzpXx8aa5nik",
  "key21": "yAWULVR99BhM8yaLKrk5gHA8B9gBUbEHxnnsMbA9g7Qj161CABexmtvQNwpEeD8qKvZiSRCQJDNAEHdvYDAuaJu",
  "key22": "3fFvV2UfVGm5Y8KkDksuorMSoYtwYi3snhvYa64Uqr6XkQiqiXRx8VtLHZJDPuXH7ocAch8NaqinYRrgCpSMdv2L",
  "key23": "2Ko1uGXFdxHQwkpqcSgXfEgWTMwBuNkRFcPaAuhoiWLw8Q87oBMjBx9EsLnptm59qhgSasC9J2p8XvaFSjUobg7V",
  "key24": "3yB7cDMcL4Jg21VJs846e7841CdbZpc7cRuELEd2o879GRohVmHFp3cYsaNQEVQyzbJ3jybdSnxNqFy2Zv1RENzv"
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
