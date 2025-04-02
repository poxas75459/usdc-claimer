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
    "528WV36aaXoDBTzneWYQLs8cy2CWbGpvGJQxX9ivbQCUdxDXVqjpk6nfzXW3bJvRVSCmxgNVJckxnHQdPe6rxozM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RTdYnQdiube5avEBePuz7wQxUqEzXgunvD6JJQkrYdTxsVBjnwL5mNs7n2DuByx4RJsJtPL2TUrfjrK8dnBsmKZ",
  "key1": "Gy15UBmxuYS7YT1hbJHpPKCV1bbHadZsrkxh6o5mSYP4Mo2QRB5uLHGdNPEwpiS4MqYJ1ytDnMPbRk6BkYtGecW",
  "key2": "2eSV6WaeVNj9aMfeU7jEqkGgba3KQobKB6ZCz328WkaHD2qC5o55d3rkLnRFCCm8zfphgqVuq6PXcHkA2DYuyaP1",
  "key3": "3yyctFUje7ZzvR76cPaCHPUHkKSFHprKY5P4H1jNFpNBiAE1F7ZrfGzBbkHEGa9hMLe9X2qhXeHE7uV1Wx7ypDf1",
  "key4": "2upA9KyeKoKiRTLY2rD6KLKkWno4tcm9digUGK62xMKBb4F3uKaRsDc4zMzFqkv53x876U3cLDqEksCDPALBLKXo",
  "key5": "5RFrUG683A1CQ7A9qp8FHvAdrqSpuhXdmhQnrLGLS8pMSwwMxhyhmxstHrwxPGVEgRvQxJhYMifCoHJ8GB93Xgux",
  "key6": "4WY6SkNQfgPQUiaDgiotQb5BA2YnGsbTaMyHVZ9HE7ypq4vk49LLdiHebRy1LvpedgyfLKqDNnRwR97T2KfeUcqH",
  "key7": "jRV5seqKSA49UyvSmtV4VFgdS2LyFoYDcHu2eryM7MnW6oPgxbyC4waTEbaiLyof14yqAzck6m6urtu8Cq94cte",
  "key8": "5izukmXKAB9HNvk9DCPEK2Y8vyJww2J6T6Q1rKZX1dqwBjPgm43eL3kheehhZU5yvmKhTHvPMS38XWf6BaJadw4z",
  "key9": "3pegrwkdWGrL6tymkzr1E9N2WeqNe3hgwqTNuAdYaEmQECXQunXDa4W29oFcz4xX5SZ6AqnWL1S1dR6ApDuwVtMB",
  "key10": "SYr7VTaUw6MS7FYUQ8yS9g7dnBMhw8g6dBdi47eqCCRd4og3GuChAniG3LHe9EqQv9QuyShZ59BGC2ewmf5byNe",
  "key11": "3ZyVmRCCUW8saYVzsyWmqWNSyibLwAHBaQgH4BVz1y8KTUrdGb9oYkziUCm4GwUoKvKVyfLcJjCB6qLC2acPFW3",
  "key12": "2shFviT2H1ngWVdRpqY12Yxv7J1CESxQ5iHjo1grdn3k578KNSzegkiXVf13N9ytEDMsjWvYNbh9svtjboLUc8Wh",
  "key13": "2cZSogRE8rdUE1aTDDua7tLSTJcaHvCHZNk8QHMYT1nQLhFRDGPCq2QxyehjxH3eGRgKGpR47iUg49VXNXC953x9",
  "key14": "HW5oqrWbS9W9KTKMnKGbBhw8pLiKGuaZHJXYmLD9QBThW5Tmu33uZjXKWYtqvAK7eudqe1EhcoW2ihaT6dwefk5",
  "key15": "3kPLpD1ZSRmhdjtV5Qgn17Z9khYTvedW1bAk3kxeUHPYMpShGCxCbrngKdyAGhXYB5ezv7PfxNmFKQE6JQvruRtF",
  "key16": "hoJoBmV6cU9d8DLJGy9mmvz1nRsEdBVD8oPycQNs5GQhar19UWJep4MRj8t18FEsgwK9BDLcX2f1GVoF82FKsBM",
  "key17": "3xUcUTLnCv74PrnL2SyscYJMpsEpsR1PmKm5VyB7zGevexVamY8LtK482JaLD6T1VPitgTdQaRZC8ZVqYwTuZqsd",
  "key18": "4yTJf9U1m8qv7RLwCS8vLrznPZNhcBzTrhFf8osD5iianq8VPN1EKaX2LBjLJe68wTpT7GNuWwy7Su3fQ8MhKFUs",
  "key19": "LhmG399n5Dh1JENLa3tDNJUhCAMBxzreF8b1WHkSxwzZWrsH2WJnHVqhHXErzbX8wuzrcRts2USqXbuBdh666X7",
  "key20": "4ZJVxhkc4q9MQdR6zDmFGQ18N7smxiGf56Ur98GNwfXw691gDpkXF3wB7evV8WiXpajviGkPE9TjGvzmhAGrKnLJ",
  "key21": "4wm1akH4k6qozZ4hwZwDJcsonnaotXf1kZt3b9gCwEDAtcnx9enX6EXyG2s5Adi5a1W1X6V7YS3rzo5NUbgxV8Gb",
  "key22": "4jzirLep26ZsYqBJchEWHHfiwhh5ZpGdAXqZnMXhL5uT4FvejAiZCEudcogQhy8v8o9p5sK8qLLKMi3ghpGM4C1X",
  "key23": "5vevswMd9K1Bks6oaXo18Vqu1J1BuG5byzbEaHBhxWpB6JTQiEzyXBrdkHrK6E9r9fnHCsh9ofYKd2Zc2ukLorPu",
  "key24": "48CQiDyJNXkPUk6JhG7EHmApiPRQQy41fn2U3KPNpFR9V4QBsvGUSUNJPjbEaNsZoqoxafxBKPAjAHAouUq19o8J"
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
