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
    "4XdNy2vYSU8DVDka42eiSJRwCaph1JKS7LvfKq6D9kcZ7zdvxULLoG64JZ5ZgQ7dzF2LxjsCBiu5cXih2YVo5wTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fHkkEJwKvUfAuE72YmE4C9QApLDSRR8Vxfhg8AGAaQfhLkNWyg8hXTZV3W2guqKhyrRzjPQ9sGyu54wMoAECCBJ",
  "key1": "LtNWXqvLz4zSyG1XhnK89gWQkxeBVbLWafKB7eyC7gXtVHsmRYAi921dc2Jb7Q4mGk3pj1gp4qhDCSup5YVhE9e",
  "key2": "4w3YVF3X4WxLTz745c2RAy3FAWdxK8GnpUuYBdiJruE5DDVDffPLdpphKtahzzK1WaQyVnSqcPfRZG1QRPBvchDV",
  "key3": "3D24yfKv4x5qfpk1Q51h71XcQgCaTwa2aKC6QC5SDNSGeVakL3NZQJ2AcZVEyb12xYp7hqdHXrBWKyHo68gEDvy2",
  "key4": "2qZ3A2eUWXhFcUwzS8gmUCzKzUyAUJfVEQ4keJxvz3GmMKcxwjGPhCxxwmMDNWDwhDSF5PSRc3KpL9BarGMvQfRT",
  "key5": "4NDKVbCbS7AaPyLrCC6bdHtbFpktSSjjhofH89gEKdSH2RKvhhgMUkaWgg4FkkjXfQYj21DukW8xcMgZJ9ndu33V",
  "key6": "56fYmwoGswWFp44tPPdB9842BzCXCsCzLp2TodYJYK4SXvA2BuBmibSDWDpdFjFgNSvH4nep5FB2dDtWkR3XWsok",
  "key7": "5kjToPhCArQ99vAH7Bj7k2DSA9PjcmZkrwpLRFtboRa7TffvRcg23ZjmpKLssBGxBVrdDM7XLb2jqrrWxSWe2jic",
  "key8": "46N8yuYxJHAkjf25DD4NbMQ1jKURCrYfZBJZwLXYMaGjFyAi4N2epshcFzmB71pzN4EWkfb5SfsRv1XTe1tHWEvW",
  "key9": "WHQFHsh3b6i7ewLzMfjZ2RNy4NAxxqskGL9tdDbC2v8YuVNrVwAxqZhAD5xHcMcedEcpoNUNoJkwzUAHNPi8uCQ",
  "key10": "43g9Kqwxx4vtyCMfwPJH8UZG9xzqck2ExKxdouorKD9tZZtM3hFfR12hmZ2py5HZ5tiveQZKU6PeVK7wbo1XR82d",
  "key11": "329g8Fgs48kyYmyvFsxubGnrGX88Exe21FR6UdSanuVvLDcpVf2bETQNkGJgWm4xNxnCRGay1WBXbvoQW7RNdWZZ",
  "key12": "5TgSyn8o2qt4vVGzQCLfvxix9DGg5msGCPxY6AYZAaqvQ9AxQ1sEamqAQGm7fBQfS2XjSZjAKedUW3P5YmXhJVE",
  "key13": "4dAAQDiLSv4Deuy9d4o56FJUxeP1fbdSyUeNMa5KFTWJfYyYAWKvYLFcidsbnpexxg3eFwkcUaQ8DS6QTJdE8ZZu",
  "key14": "dfPDkhTahMmU2wrV3QQQ8CLsvY1ZoKEuuijhEoVh9Ph8JLqHdKbqFCM3vYswzBY9W84FDqNYBw7EDjUZeSytcvU",
  "key15": "28r6nNXmYjxhWY7eHi8FzDVb2oAUZFemr4dDwFYFeVqM3LN8iN27bj9zdKDzrKEvsKD3NuFacQk38X5zVX7dPiji",
  "key16": "5YeUPpZVh7ZQEFPDjwYisb6yGVLffehnSpfCpn1TbpJRz5XfH6DYe3sn5NEqTF9oMDFdVdfAUeQXv1cVWR2XxRY8",
  "key17": "26PvjqLSpnpaZk6vMuN3JhzXn1FsCPMrSFxgRKxje494mbBQYbdDzA3JRkRdgaaASXTCrhRgR3uTunCKPQfGSPD3",
  "key18": "pWD8RJ4Fhydc4EcqWti1MGg9h3EmVFqgpAsG9nSGDJukMCqsUCfx9ypqU33DEF4dHkvxzyajorUk9gnHoRXemkx",
  "key19": "2qUfaGUc46dZq1QXUEPE5rfENURPnTLDgmfw4p7TyEPAWxRzUK7LPytRszyPjBKmry5Asr9NGPrWrXGKz4zVZSkE",
  "key20": "usZFZbW9o3XsjPSXQ4K7PbiEeAUwQPynXap3wCnUCw8XRAUwHgJJAreVw1wSbxpPekUiLJWEzxFtYKYMkRKuZ7j",
  "key21": "4YuELmRUS2QCrmR8egq3tQFnM3md3aKBCZyHRibURaHejjNfHBQGNyvphUy6QiAfd2W9bDRmqNknF6JgKZXEee9T",
  "key22": "3W4D2yUe1KPFhmWi3ZEhxysgHKBoQ5W1Gf1asXERRds93geksXNN2TbaYCBS7bqUaKACV8icLmPJ2iz96xgXhk3m",
  "key23": "3uzT2mtdtG1fyLtFREjsRtf7NXyjs5yYNrRuHTeHPr5UMayZyspqfrDNhpb9H39kor4ZBBDQZQ1sTNCzQDNaERXf",
  "key24": "2KquhzpFutBe2QyNfZQmSWdKDUSsagqwN1snxjVeZuWJW2LrNxFCmGnUmFGGxrVwCaaCik32VKs2yK7DpeYvW1SK",
  "key25": "2urZ9g3B37SzmXrEhtLP9smJ5nX8G2qH4TjHceZjCyedxahDfMwTXwmBhMU5ZMNdpaTbY7uXjqLZBE4w7Pr9Ts3v",
  "key26": "36nzWkscyCqqAQtX21HhHYSyZqyTgrGbVL2bAVGMjr1RTmgceJKcWeopYhGasZDyjqgVkp838ofiKMd3bEmtVQ98"
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
