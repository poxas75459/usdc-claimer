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
    "reRC16ToaBeFp6amY74ipwNrEeJZCJqndnEJTiiuf8u5di9yBtPit4k9yonnmET7LjtNVcY1hRP2px7hiyvAPmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kKTupr5e84akFsvqRCCrHbz1gyLoynq6DFLJwmZ88mjhvp4tEH7RZAWZ7zupeth595M8bNKgR1UYB9qEmxhKRFB",
  "key1": "K9mGqRbzKdJnGaPJuS7vSyXy5Loy3HP5u3og657MBXTcFXBVBzokG3usWjjAziGyfoeE9USh5VoRHEBQAN3wrpS",
  "key2": "LUCaZnpL1dibDzuh7BRQ9LgZWgsn3tvY6vL2L95EUZJQG9B54DGaoz1rKgPGZ8jnuyuBTGsGgpBwjGBCGr5Yy3H",
  "key3": "usnxBtvSAracsfd3cZNcWoD9FXayMcC9sF4cK7N77WDK6c7NjimRZKKnuNQjpFfeyT7uhgRLvrXQ6eR9gaBExE7",
  "key4": "2pfCxnzQnkuyjTEg85bWbjFZeAx7xerJyRWu5rMYweAMnaHybEQmWNFPJSzPVhtRCkG4r8YVj2ZtwpL6qx87zHEq",
  "key5": "YovtThARx6Vgvpb973moAG13VAJ3duSjcdgTtax333Hx7AUH5VnyrszzbburUM5bWCkiGvLqiin7yPCNivrEMf8",
  "key6": "4fkhAbUUt6o3S6tFxPzDR34Rhz1EqeD53KrENuXWCbw9rj8XSVQuHqSa8pBWyGh5sj4foW366DtvkCa7aAzkMvMo",
  "key7": "3Rygeg4GCHwQ5hMe99mHZJ97WH5bu9Hih53v55EwiJrStByqqqeNgodbGo7qKTGzbLzwEgzkgdzo2rUhc4oxajkK",
  "key8": "2heiEZ2zGmmBLDsyMcChNxs9jES4syTAxnjzVtFfiv1gEbGfbd6qYErAVvaH8aTjE9jCg5ohR5CpHZNyVYBvc6hT",
  "key9": "4xxHWxQYCCfJLbNFBAGbXtsnrsgZQCScnFEmJvGXSwyNRJLbr1R1w8Vf6YZqmSSbfcayQHWKECsgumu8Z3mtLscN",
  "key10": "3MZuM13Syf2nPP7EKYMpJ5G9T5z3WM5LmeRPCF2joWw2mrwCvDJm3u2NVMYmgTEpPtfFWRd7wuh3fRabpkx8Skn2",
  "key11": "4bnN1wbagVzZ5pDe5K6x9tJxXZdYuNc3srFyf1T9YtSfm42rhRSCSHreUqUuM1DSgZjWyXNKLRKRmJoq6e17D92H",
  "key12": "35qTkBTaRyiixkRqirVuMG141xzuUQ9xHABBv9TuYKDGj927WZdLDkv7XfNs1ghBWbG6GwVHCG8UPbURc79NYXoY",
  "key13": "5Hc4Wuun7BtRvUbVT3K4gVHHUpnUt8L7Ee93ttGtYkgZZ3AxXbZQB9VkXwvWCdWoxJEnPGtasPeZTRUt63BFt3ng",
  "key14": "3t6YhjAsgX62v4ys7pXdfcZuF3Qxq7RLafV8LZyY5XZAY9KTQxVuuyj8McXmswaWKpVboKxn1NrS6tYTaYydTuvz",
  "key15": "366yWKAJgqDmvvnEnqZ4Fk2SR3UWg1hmzyEjA1UBNzTGyuf9YNRa21ZxzJQKFvYLnVXixKBH7TTsJW9VRccvSpuh",
  "key16": "57Nn6VH9eGQXvmmTT1hsvayhUTmGm2TXvpYrDaYBjCmc9TthgJSh3sH1xfm5Nf11D5yqmfPmLm429bxrBgXFhjYU",
  "key17": "4jnghFd9Nxu8nXZA1w3ph1h52Da4kA6M5c13xn29giwGe1iAMYRLwDog847gGDzgWrejz9khsJ8qqvPsda9TGKyU",
  "key18": "5jankAWXHJBJCyELZMrvLz7NUg8yr2Sr7ZuAGHNySjDY9a3BcsGWu7Ckzvfeg7oyiY7xEMyHHYRLcQCmuCgazBpD",
  "key19": "96ncjEWkeE7JCZUZVuJwAGQT3WKuDk5CZujimT1jANeLiqZMtSwfAEWLCj3hxJzTDUoaJgvtJo1bhchSEFkVQD3",
  "key20": "5zivYwiDgQet9sKpQ57zvpXca8GKZX3hf9R1ymG86B2oqTQLM4Usy2Ra2w5Vxo4UtKCtLhKAahxgyHHFw3sWv1uG",
  "key21": "4fPQVVoc6Pvq8j8nfMLCipMBaSciCpmjTdkACGYhpNEbrpxtXCYgjgYxQ9GY85aBJf8KzenGZ8EHdByaXs1tBxAz",
  "key22": "3nRnwxh6oHyqTM9oraMsMQtV3DsEZZuSxvQp3Vvn4D44syY9bTtXoLXJT7yvUWuKhVXho94zwvD9tUAduokkQyN5",
  "key23": "5W8bfrxPVb8uZg3VjVoUBN9okjvhfXLCZJ6dyF5QWGoxQ417TBjts1qdfHsYZtcpjZLFfG8mzKtqHTfhqEAPQJ8s",
  "key24": "3ZjvmZ6HNQDenWnXNGbzR8XnEz7gLottSdc6jauX1xuRg8qH52jB5tg3G4UAktQbEHjzC9ECHLjWtNhkH1SK8Y9D",
  "key25": "55Ue3uN1acAyvidEYQ3GD3XewU2UqgnpbZCW721GRD6Pp43Nvv494aMDif2uy9cnjaQ8sAT7LMoCZtRsAsZDfSyW",
  "key26": "4vvWAKubTcXYarJMTXEZpbcmgpNNTUM5ma1o6ZqPBG1h1HMY6wSzysrmyB7QbQPp8K7gfSYuz7F3K8E4NY8UWXsi",
  "key27": "P3dtPEhCaFtu8C36yGe1Md1EFsWdfBeGVcLBMMLyfugMff5iqcvnvn7SZsMpY6Cnq2SD17nZv31K3h7BSqMAqUj",
  "key28": "55ty2inCWm6tZsodU8tHs62BAjGezU8HXfr19wQ88K5pzCP3Gb7uMByMFfiFeHW9xEBNctCeLZZ3Lw9rkVeZM1Qf",
  "key29": "yHFm1wPv32ea9dQdxESMRp4hGpecCDcpBr2o3eb6DCrfDxdqix8FoyeYf7K4W5PL4uADVkPVZXQEYw7ov5rtGKP",
  "key30": "kH29MTDgfi4k89tASd33GA95c7GA9hiSHkzs1KL2ezYw6G8ytY28GA9Y2FdTHcKJh8m1VidhHHU5vXYQmMFHdCM",
  "key31": "NTu14B5b67Kip3NYq3qbXctX98yT4j2ra8nYm3DvFy5xndLK1PP8qrHxToQqgSDiTSsN9z4M7jcbm9A4T1ZKVxg",
  "key32": "2ddWGgFwvhcKRPCPGW9m2mfz5FXZoeCo1FwdD3ag3dwkGToZwoYuDkXt6z2NyXao2zdbbWsemoashuJEF44rqvcQ",
  "key33": "3z1YkMwoxAh7Yj6VJRaEcvZSiB2jXHsUAbDywvwv3R8NkJFyWJ5o4ezTdHuqxi8d8ZnsY7jUTopC7wESiw7Yp8ua"
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
