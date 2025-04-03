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
    "2AnzYbPQiznmrb4rK3WqBKg8Feyyrrk5b6rTqEzeUMnp3gvvjazdT7seg7RgCc3K4pVrik3kZasXXCNRSZoUGtVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5URNXigm9T6WMiQxmtrXgUwCbHjKPJ4UVdS8rQAH67gRv8KsoD44jFdsMnVhWSwNsTYuA3LuhT6njTWiYpUNkTwL",
  "key1": "wAxvVgQFY5sqvBgHUdFtTKqPZTbnHXnesvM3zEGUKSwfB4HiCoCtDAxYPsR6fxdhcXBy31xJMqQx1Kq8qGvRFz4",
  "key2": "4q23xFBiYhGBUkxyz62rnebhS3tvvL5YPJ2UvyEuGfaRtmhFQ8jiNUPsVaDEwWEPoQEijSdM4AnCUR86XCjDXAdG",
  "key3": "3Z5PES3VnG3QFujqvbv5TptX2LzdhNo7FbfS2ExKw2UZRiVqksM4tZiYCCP9tbN4HvdsnRuogC6jhgRTgtTcVti4",
  "key4": "5Rj2L7UVjEzFqs4kBbCWc3TKkohe2BGZVdMNpEXETt3RRpuZVzxnxCEoscViCiZvEiNFLU3CHxagPBhVJgXhxuDc",
  "key5": "2CbYAZn71dbyyesYmWq3pssJgB2Aghmfnx4kQnQ1HYLqFYPTAGLzAm9MvjMi3U178tUmTL3TuA4SCtZ94gJQioBZ",
  "key6": "4JuVKfT4CbMppM18qqixZGHHhXvaMJsmW2gEGNTD6NdyoxbcL9w6pjXKw1pHWjaqNrRPkUmtXESUvgJXX6FUZvUE",
  "key7": "4aNT9pBLGMgdoJocKCnf4hiapyHx7nGi7pxkE5LVQsQU85YgFSWh62KRpX7Fiayv9N9nS3aZaRujmBrjJVaSqaUj",
  "key8": "3zhQXeQUCmT1JgTtU72itw3ikxfLN5f2LtBNsunQiPf6M8yCK8RRQcUKUgXoV1N2mLFRCfHDJvRbEorkWsGos2EE",
  "key9": "4unb1KLpE6BQEGTHTgBtTBufyU5YgXusJ9MxxW8MXSHxXZX7zXCLVqG3gTAbgrR7sAYcTckUWDjYz4QWMKo1FM81",
  "key10": "hbMJb1woXgiBa5WMJ5Ces5bym2xuXcj28BvY8c1FNmq4dGckaPcvJrxkHdJnz44re5LvTh3CxynHuVsb5vuJJAx",
  "key11": "4FvgCccL8LrQSCQdp3aPJFvTWiEyhSpPxTnoGKtRHo6hf1LMkXo4o3FC1cLbwgq6oQLYcoabKs3Zzt2TYyHoX7we",
  "key12": "5hY51sQcb1zCw5A9sffPrwBFLTeUcB1Ygbe5vZ9DbFPE9CpNoRqgT3DAas6uXybrQEhR3bCUV12R5ajRnco56XmS",
  "key13": "6589j69uyRWqDCrNVR9o7UJZ5jgiByV5WzUwVhDCfx8MYTknTnH2JsLFDFKnqBSwerPPnWLuetLSdBBnJR9cLgjj",
  "key14": "2ZBL8NLuV2ZKwHio8eJW2ZZjF7oUUneR8CTLbPjz9rWw1iYNsqsRs8DgbMv1KuNhgjGFVNx3TEJqJXWNbcss1ux8",
  "key15": "3gFKoiEtDWmVJuZomPq8YxuLYGMkCV8HWkdfGoXD24VW7F8aPAZATaZyih9MZiknY4HuhB3AuioWWfWY8DDT1gz5",
  "key16": "jBEPmg5HHM5ZmxtzrFxEBwkXFj681VNzh1No8wRk6WjJfrQmdHqbUxdbsJLDHcro1UoF1tg8JWedV3B69MrnmmU",
  "key17": "5UXhR1mQ82QW2EzoiaaaYMztFEBJJg5E3ryY3XfXg77XfEubZAdSHCm38U1YkknWhcsqHpnKvbzd4xajAijEPUx9",
  "key18": "2DB5B3dcHcPqGH8RXZG4YJXChS2SwFugnxmmLLHAtGGg4NzXAW46dSZ8MBgbBRPWeh5AmpjnVtjnGjMCASra1vDB",
  "key19": "2j4spiuYi2dQJSQEv7Qd7fyNWi5otfrG4FjmW5AZ2idXiZjHt1kTUw6r5mmTPPeR6pPS75aHF7AH6QpysGSEutQF",
  "key20": "3oUbiP319N4ydxT33D45LRgG9jzKRjRY74tuRYUY7p4ydZzRTQ88R9LkvqEcaKrVbGm4VAdiyZor2KLSQyczcKe2",
  "key21": "3YSB62CXJ3FJwpenG2viLba6aBuFmxzuKF3SF2B3fAn5ZXnrhnZwXJJkgDoQexG5z5UK1ZpTWzGDkeDk56Q63BZk",
  "key22": "59yaSfsuJKhBwWizZxFUNLzL4Ep7L79zCHBFdzjLbmyTpukD6hCrPipZJwEdmvr8ntDxdx58JccbmC3TXMSsGhjE",
  "key23": "63TSxWM5aBR5j9mktBiTvEFsGGB7J1toLB21BwktDKF6xqea6jWqmHhcqku4ZpUowN6GH2haFQSaSCR5fjk4MGKu",
  "key24": "nyC6ZjLkXGMtHeyhnxcnjtkJyhcH2hNN7eYmhBSwoJxDLbbdYEfAb2zEGvE7JNV8akBMppYTnwoxJAn1BfbWjoG",
  "key25": "EKFkjb2iBcKjmQMmqi3tHBnwg3BvGhH3M9HgwMgMwwZ48za55696ZTa4hqGcFdP3YDaLWxqbRT3VmtDZtrrNGzg",
  "key26": "j8m9wPDE3CHfsfV1YdPfCN8yP34u3gJWNq4k7vcTbBtwaPtD91PAUGzmmhjuzjybVuyJDjiDnGDmCxw1gKrtj3u",
  "key27": "3Li7phwxYBRDbx9VrPxfoJJyoPd4CAgaSbvxHFqa1R3HrW88qrnrPu14QoV73kTkWRpx9oTEz1bfuTb58wnzjok2",
  "key28": "64TXikgk7sy4zXvUfgSNrPm7ks2eg6Um2xLamMj4XJUmMEQzXqTJHcjV2NPL4cW5XB5FHqxb7dzqRmXAtrD64zAV",
  "key29": "4c9Bw2chrAr8YbWz98YMJKfSzk9Hru7Uv8U2dUz9iKVeCK9jQqXaaqnx5aPdsBxuCpxtYLoYxGvWQCWUGXj1K4tz",
  "key30": "5N2f8RagrTjSG7ETkUnAve7nvES1vBJPP1hrAeTdxE9qvEXndxt7BbBqXaLKKegYEURiNDJuCfg7P9QUy7mBeryi"
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
