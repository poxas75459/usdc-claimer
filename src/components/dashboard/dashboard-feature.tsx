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
    "cFW3h82WBMRgPXPhLrvFTvsfjeYveGycAjvvKTKTCgHTEfKSiDSGat9eXKSUyCCohC1YdWTrVWdNUfzZSqJpFyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnX55ZCeX9RbHtGiWmCjPMHV1ZRaGFRQJLS6yZHviiVfCGxx4H7yhU1zmvkHkWUD3XGHMUmx7gc51m3MPqNMCmB",
  "key1": "3qXykEoi5AxMPzuhazHTyged5daPkWwXaRgkyQ3LypJ72VxmVDHmAiW8HRFxcyMHHmbLQQ3rJitbyhYJxvcA2v9f",
  "key2": "3LMXywKtL3XQwz4UnURWwu354bVg4u9Nu5KaUJCNUVHmvTEjqtLvVYrpxXPAekQdEd2ZY7rxUoqNfMPMh4HUN32u",
  "key3": "2tzRJeHwiyBrfEUyMHZP9B5J6qBcpCDK8p7m36ZTy5ExFnJUiBHK6ThHHX4Ho3D3BUYiEtvp3gxBTnr65xggBwig",
  "key4": "4ZjuXE7TPYaKKDz22hcxoRLqhUVdt1rupwkTPJK7e9fAwgtUq2YKHk18VNAmWrEaBiqiDSU73EQ6VtrVbMsFWanH",
  "key5": "47toSU7QqVMFsWQyujMGEaPFFeDuG1wrGWLGyjeVekBNU5ovHn7RTvCuzxjf7XGu5ffMaqo2YEJNWe4KER8146eD",
  "key6": "34VLcfzNuE5C1bjFAN6CCpRuAqEmsTxTFhpqg2E9eNMvzrEupP1qbV5E5GSfr56b9tUyUQVcWxPrQVoqEiWeQu9B",
  "key7": "2jvNKdKT9QMffEVSThQ5ooZAKxvsay5ctvqEjfNYRFxD5JbcEBbqRomh63d2LhxEbDwM5JWrqL4PLezhMWc2q5yV",
  "key8": "4NNKcuzSfzrhcHXGLhW1YPsBgAzjnHc8CDNEbSc3wRj6aGLzKkhUQ3KSQ5YfbbU7DE5sGgk6czVXB7ABsKz1fECF",
  "key9": "eK5i9VK44iJkQStMec14i9rqiVXTLJAQLBW6bd3FSH46vBomFJReVZo2QjGcwa6wtJN512mk1yGhwqo3vPgxT1V",
  "key10": "3mtveSu6ZFW69p38ZXJPKHunny5WpH5YXGRZGzymB59eABAKgGXyw9tcm3tqQzh9c1j93rWo9nSRkhRReakrYHR5",
  "key11": "647tN5gF26Fb15PiQ2aviVVqzpayh35j7BzyPYmTDUCF3zuWQLxSkx5vGRkuC7jXdipLTb8MeNeREyaJyDjgEwZA",
  "key12": "5q71PZzyyRUoqVP3Ui48e8kwndkVsKh4CCARjFGCg93iCqjNnLo3BmzRCQxXfi9beWPYrLA8Ff4EKA1qwbKpXaUG",
  "key13": "5Wfq13F9E9y9n7GD2djpd5MdLaHTMv6QtU5pZ2cHmG1VEkK3dkUM9UKLnM6Lqp7SuWW33PdNtmVmpBS2dTXCDPEs",
  "key14": "3BD6qgWBPfg1gEth19TCxiqQtev9nm78hpyxf1NfJKBDXej2Wp7Z4FWskxrAfDNs1wC6kaA54vwTSPvzVnj63qwB",
  "key15": "47BMo2FKZwyXxKt5RxxA139hV6aAUHQMVhfoB31fVvBF9e99PYmBjeQfpGKTHLUgC97J412Z8rWUnehGVV14CrJ7",
  "key16": "3RTGXaSNC1C8TEcqu46z1oEgxemPHmbMFdrkk5E63PxorhLzJDRkeZ9A3n8i4TPcG2qG57jRk6qTP27BZtb73puW",
  "key17": "32giiMd18Rurx4uPXHZwUXT2u6ZFqYn2mzDHg1KJzK3u3WHwQDDKA1nUSXnGCXaGaVUmCKvKFfLRRZkqcBZndvJ9",
  "key18": "5FAnHLc3vb6h5ZoM58LdLT5ZUZdHbzfE9vpUivBfHGFTBEz99DMtkgVQzoCT2eefWJW33Y2q8pvYHBdNGg8qfT5g",
  "key19": "vmPiSWVoS4CC8pvRwsDjpaNGWnEEJ973xgYGiXfzjpEkNzNyQobwPZDLEHT9FAsbpnbt4TBQjvk9vryhJ9VZEeV",
  "key20": "5QScVbJwZC6mDKhp8N6Zo6tpQqidmeXnf2hPgiWcH35cPdL5kzjggKXMnbymvgrpYRXgxMrZWRB1KHMEMpVRE7Jh",
  "key21": "4znBoUrNRTy28KkgQLFCRfnjNE6R7rYNSvvQ7hccmGmi4TbskVYzwd874tKVWXGz9qxn8XaCyA8ZZtLaAwnD3nR3",
  "key22": "5aS9h8x8LyEbzkPwN7JVmBnpJciG9bQwBQkbJbndXc62yC7BMkJjzhjQ4StSYih28GiXAUPuUhydJKBpM3MwMMNh",
  "key23": "4hrv3rxnAcjh3FyhT9LShX6fQP7nyAfAne95hNnKuN9nXPREjSftbtzCdM3BN6MzfWNNE9j9akCC6yDf4jUVvss9",
  "key24": "3txeWaPNwQVFi3Lrnetr3N8vn5bZ6u9Q7wQ1A3q7AjJQN3ePATswhPi1HmPP3zsf9Ga4F128UhikYHUokSUv8M6w",
  "key25": "vJatqa6CAjBGBdatso1vq5e9AiExRsC4emE4MZz2Ab4pv7mz6DgiV13iYxSHD9QnM3FXq8LJhs9mj3gwj5w2bCt",
  "key26": "3UyRJoTipPJqFymmFKjiPY4hesMii5yMpqyH4YkaKbVjPYatS3fQFgvVyNsPQwxQncS84i5uUpJctMm2EroN4qb2",
  "key27": "5giB1kHBSYNsxUhwvf4NDyXJmAmUVVTnzULVoGi81Sh7SUQcmtEKMevvRjEpHPHLt8EXoh86pWG5f1sfHE5GpPiR",
  "key28": "5ZDcDJ5uMNrMBNBskLxqPU6oq5Tv1Y8w6hPTfvsJHFG6p3AZhvULqffkghm1B3rVospZSbiM5y3LRjS6kTt2cjxm",
  "key29": "3MhMgBTB13GmedPBPzvkLvoCQVFUpK9QCgowc2DtiM5kgP2MSrhiPKKVKx1UZLFne2DAeM8gPcvZoy6NnnNb4zMD",
  "key30": "3V68LpUeDDeYwdfrJp7Bnj3vgHtTe3b2FPV7nMMJzDcG8GXQC6CzDmNrzdVtXPRERXHrW3XduJ7CzzjuothMbGt9",
  "key31": "4EUKTbJxEE9hmnw3ycjXY4f4ZEnoDVf5QoPWQYZLtZMMXEY8GF25SY27qqMabivuEe62U1D9VsFhkcxCtKaahmFK",
  "key32": "55KXJFjWRfJpB6oUDwfSHFWo5tiJkjUHm4yqfQW7JuaQY1CU9P2fNQYDhqfNd3xEXRA5ib3bSeCgFASxWVWQeAtH",
  "key33": "3fW7vVs9CJFcCrBBx6NzWPFei93NwzKtYLnFhxeF9ujBj61Sj8R4yZEc1bsEZ8u3Vf4HyQBgNVTdtP5bosWbdUqg",
  "key34": "5PGWDAxARQqkS6Fdt1vzjg3oJe7c2zVGFh7wmXd3mm9LhYjBxAJkPvs8ncihVopw7RBCMFT5zDcBMc1hJCrar9nn",
  "key35": "8R2EmVU1xRBwqvxFGzemBv96MfsVpKsa8o9UTWnCVoPn55UVxBmPdMxe2nwX5uAhbJTZvPpRrNyN3xpiEwcRqHt",
  "key36": "59FixiLRaQdys8wUwMUkgky6JYzvsgd92gLy5onK4ZWpX3S6NGcyouKWuD12cp6uCb3fH1wKMqWsetSGmwTcpr4t",
  "key37": "3cnM8PZ9S85rT4zjU2arEemxgPdZLPt37cxetkJZQqm2PR3m9Ea6icqSieeUjZaTGAUmk2v3EuGuo5SuYgzwaVjS",
  "key38": "5FxkoXp93DNYN91Ht8jvrWP5BXGYtDLuPr4URj3KpwNrTqorA5g4KqgPmncoRYYMyNpS8xZZVnYuQsYs6y3BKt9t",
  "key39": "5eDLsP3MXN8dDQMD7ByhtqU4ryLBKvUpAvE5N8hte79ao19P2zb4tVaedifLvCenoStqadN6wa4MVpuzv3uAUhaZ",
  "key40": "4uKirHLm2KWKe8A8rGziHjdT5QoMcZZw19QaYR1Qssc4X1fSqFgmWzZZBCHejheRERWTMdypmUTYxUvk4hCXLC86",
  "key41": "5pruzWnNW3Ht1KqF1NExPFu5ZGFFtMVSvXfNV8x2cFv8NrQtbHnxxNSQyLJrf2x7SupfPrisQXFbPrvnE7Ky5PPv",
  "key42": "5bykSg7NJLnadBYHurNNJdM8rJ19rneVnGVabtQF3NEfTo1uLFZDxURfuZnbABB83oFAWFqbHn8A7GxfJDv3fThj"
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
