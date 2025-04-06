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
    "iWY79AXy4kN5MMChczfecja6ZrM668PxLCvBGsiFNaNMcMXmcfqDuCNqGF5DMN9iEBP6pwd6RUmf2Km9ofRAvbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWL7WMSSxiMhbE6wiLerHijKSr8BdLDSp7kDaUrFJWY6s5SeWoFkCYJVbJEkXhQbPMQB9Vy4QhpchGuwsbWKcRV",
  "key1": "3MAPJJ1AhNr7NthV9i2RMpFS6jsnXUyZiUpgx4pMwUnnaozEV3ZwsWjg3h3RMSeLPhZ7adLgUmUt2AAY2EwiHS7r",
  "key2": "2cYmGUD5rh5YtmYmDhe3EytVfmA3kY1cHt8NN2SyqUU93HvLmLCQ8nzdo1cs4RoohN11VTjLedhDu7b7eayHUC9P",
  "key3": "3KZ4gPGjyBN8tr5griiBRR9bZfm4Pz3Q66fUTftpaY697VQTFZoESMSRJVN2bTi7aV1RcwuDGZ3SJYvw7zSgcjey",
  "key4": "5pwj28ZLTU2RS9fesFP89iL1oCd1bdcyCHYYF7XeM4MHwLi2FJzDnNU9tmvYZqqjayDu2BLiffEMbT6YKNnHfq36",
  "key5": "5gcqF4oWodoUHYSD8cGsLZHAw3URqaeqmrQ2j7qtwcfeshATrbXRiwUdQa3H3N3h6uS9rhNhnkr3vMoXbv7Y2uKw",
  "key6": "4jNGNFaroqtNNNCn79sNP3i66mZFCfMdeKdnH9cySf98ppyPegMLFNMpTmxyCJVTMxGzB6dHxo5SPsdtqWMRBoNB",
  "key7": "66352gENZwkaiVTfNdAPiTd165RrNYJKnFRXSNmGpT5jf6BY4c7FPwyjetgnz4fR78K6QrNA53pYhsqYgKGWjHNf",
  "key8": "3fccKW2caZxf54z5UQ8nuyWzxei7AQzB2Db2M3kfJaxvoCjBYcpRAkehDf4CAV7Y9sDkrnTw8fnBVPTyUsP4MGnE",
  "key9": "31TQXiLeDGmQYVAyex2itPcTT5tUmxTLKqf2F5vobEf6PSe84ZQqHK28h8W18596VbT5AAo4bRVSatC5kSXQzZVT",
  "key10": "23ZxvnSnz5b1TiPW1pTg2SBQ7pR35XXS9XeSVkPZUGhmQJkAj8aZvEDqbMtpWzCzM2Xxsve9eqFnkiCLLfNnhQgc",
  "key11": "5ouMojtZoyNoF8qgzYmpxK8nB7xg9P7N8fz9YYV75xP4nhtWr4E5hMTVAb9thj8Rz3gCTyFzhLVnu238MB696BS5",
  "key12": "37x1bY1FrdQDSKqN7doDjos8U5yFroSMMDc9gVbJN3pAp9VqQqRDsafoDyNFEa56BqM47WWTsymrFxgtw9oc1KR9",
  "key13": "HPcck6XTj8ooNPivjZmb5AHfavo26CE1MUkRzDYQZiPQEGrk3RdsVSVqAfZ8pnt92VmB8GUEngaNsp8vXqJUmNZ",
  "key14": "28UhFRpPWoLf76CTqowhJsYwiAvnwdwLuSAwcEKsycX3VaQJbvybkdvGQfGcmKkjrfi6ZEHgc7GAr5gRwLGjwkaw",
  "key15": "4ovZPXPZs2Mf3qkTjzHvF2ukd1yET52CkxiyE8K92o8KZ89koXtUhcxE6TmoR2AL2usCUKfj5XK3j8FmVhYt2Bzh",
  "key16": "5qFdxVDFVgCQjtNtbefa7VSyN5MXtjaFrYK8gjQmPE9xESe5upqAqrzUk5tXnuAZ3vuoUtSgN1vUgBL1PYiNYszg",
  "key17": "5min4fXa8pHVYHGJta8ZLTxQQb62Yvdpopy8mfrqp4WarBxwfzCz8j1BBc9GcTMwFgQMXsdY1uB1FxhSu583cLHv",
  "key18": "2LkA1o6WKDFrhjmK7QHdY5QVJvVK4FKcXRRKCbrviHpAdyE4ZoMtYUXnksthBgL7MK7LGus4sTyECUNZfYDaYYVU",
  "key19": "2eiSXrEYrb98DitLUWJWmgJBo2CKSuFD3RJpLT4VM4SU98XUwbmPip9JnShx424qBGCoCLxYwPvKn1sKmM8bWcJk",
  "key20": "5rNNAVyDy5F5msUtkP6EzP6JxeJCQWT1Ce1Ap9tJvkKdz997uWQeuzgtHwqrH5QcnhEPZ4bMfw5n5sL8nNpm6YKF",
  "key21": "Vmj7RS4HLas4h6ppraygekM82qnL2Q7vZFD8QZNkND2sFYxBTJ6Pu75ttc5bvGrAG7rrSMwafASAyDtKz78H79m",
  "key22": "39eyn9hrtaaoNB8iRgLEcStMgn25fWgP4PjoVnpvGvSFUrdo2WND614Y97A5QYrzjXSwHFcpEnmEkt91RHeyGhZh",
  "key23": "455jAZWPNEaZJMzKQJdiiPchu7BTM1S5sWPifQZDsGYq5A96q9HG6xZCj1QvkhEdkbNcn7AhWzjcwKWjv6WvTo7f",
  "key24": "3y9JjakPUkADXGH2iejt8TtigmTGrCf7FBC85vevyJz8wWsrTBmaG2ETTx7o7qi13Fq14hRrPue784B3MwphNtoL",
  "key25": "3sY4xraUKmGzKx3YZeT9Lcdpia9UWN1eFeg6EkKECSMs4MXkNCieFv7pcnFzZHUVVMyUwAjtNw38QnkL8WKPUzFB",
  "key26": "4BoEt33pwuneLq7cZgVNCq8uE7Mq86yhBhXBuwswDwRtVqmd5XURbRNFvJJtHmutQ6NxZomFXPrZM8CMs3a2vbNA",
  "key27": "4wZ83aZs2WYWoPLsMQ5y95cXB2ZHmv1BeyzCoTaG8WYHEvdboePW2maSyytUY8E4AurLu8gBSQphkbrxTsuTjwgw",
  "key28": "3YrXGSdm1p2PZ38ZkzdJeA8VWVz4D8vJ5bH4KkUxcPzfgDEMcjS6bLjUjPAvn5BBh9rtxG3jTSYRZCkE96MCrYp4",
  "key29": "27N4cY49grp58BnUz2iC8qTpNwXRbZ7t4VhqvRAWcxkTgBux1RpYa49M9Zx8ywCJAKXGRJScdU65dhv9GBg6Yy4n",
  "key30": "3kfwHX8egUPwMXjoqu6KKAy54QjrfWTpDq8j1aZnV8oW3g6Q6fDDv4dSrgGMbM3oECy1hLjHvLusYcWw3RWQTGt7",
  "key31": "5UaX9WSqvrrWMbXQUE4RAViYjMpAjpB9jQhSXjXXmVPn8KY6nZLWNR7JRoVNLXJ41dPpDDG7PbYU7eLuqw2FPR2p",
  "key32": "4DaZjjqpxVimRWuFwSdWMs3BrSyxP649sG5MsxCMPeajJ3hfKeWuPv44nphWs2iMV4DLGPCRBSqDMqmw6RdSJ8C3",
  "key33": "5azwhe9n6DMJV3RMUyjJnVje7qtK17R7fsTYGrZ5uhwUPWAkMTm8dy2qZY8iT9Ys9DH1JMVYGEGyqwqakfKysuMr",
  "key34": "4J23L8PK9McjKSrfm3oUrc2zMyVA2mVgu2QveYHZSCSwy6Q69SPkJorta4de9fnEMHa8BgASP49oDMhrp5JiPcMH",
  "key35": "4SZr2nePGLnbmZKAnZMpAvJTp7ZTbNFS9gWTRT5798CsCwEZLSY3mxehw9CMHbfvrphiiLbQKxBpBFjidBuGYVS8",
  "key36": "2GWEm6o6w3FvJvqgWd5BqyFr8fuUNrqbj26Uz1WSiW7UBdgwNVmFJFHnUGUcs3R3yVDZ5jyBQG2BHSFNngCJwoZ9",
  "key37": "2qYGi9RQXWpQ6UAvjGGpqm6PcnWejYxtH3paqv4wApmknbkvAZ8SdLgQ5oj6v6yVo7awpb5m8bDZKD9JkgN5P9Xi",
  "key38": "2RYfHw1HtSwLzpzGvb9kDCg4nVTocu3sb9ysNLPiVA8uTpHdpAvaatd4AbDp2BKufeekhDbhrmQtqNqqkqCFQTPD",
  "key39": "5GA7fxAZcEQZ3bo9tH6XNV3WGbCTnWd2Xm5nkcQCXkGc85ngZ7BRqvhPp7jGU5pLHBBzbZQwq2hTXDGPUMh7rGqG",
  "key40": "BaeK7fuNvXpxDBAMk3bcyk4iqCR4wzJkcnGZSHNJDkvWVM69vvtrMMcTjSpgXgQ6U42eYRaUXnCUtbBehL54FMK"
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
