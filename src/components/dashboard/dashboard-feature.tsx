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
    "31fKiarQMW9CEntE3PwR2Z78mNNRSqpQYNcq4VeWfohq61RFLWPoWXDna63qZ9iyNjYM9TUWNNjvPGs1ZtcSq5eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FVYkcBMzYZMxUzhDDTrPJWWW1XTZANuG6cJGerXBXtnWvkHQhsS3i5zPJwAjB8ShtBs1R2nuBBxSgFrxqXSyDFb",
  "key1": "2h7AXuEA3Nii5oxvQ628dDyP2G54eB2nATcdGsPER2SCtZuPD8WABRGyEeCoiTmkiMt8LYKX18NPW7j53siY1KTm",
  "key2": "Npit5pNPSUNeeD73yifBnA645GS1sQXvEnfCMBDgrbWiS3PGR2qn9kE58AANnNqSy4umzCCshVY4JgM1NsAeTeX",
  "key3": "4iLCnJUUULkKaf6sseQVh9BqdEfDD72jafQdXRg82jqf2d97zDSS41ZC6q3eFyvtPH5qfT5NuayLzDUV4dW8y45X",
  "key4": "3PSonu4D1mHVGKSLnDQXk4owfhzjg5GmsKUSMkecEpEkfKSsBCyzUs7DyPnQLUvA3YhFrFAxMYJ7Txw9xJ72Jsxs",
  "key5": "5hxfw3V1rkCmD6MAadFNKHAoY7bLb1gFdKDALeTdytwSGZTMXtH3Jt1eejXMUswuL4RNtmt7ZETsg8cMV6TJSyrC",
  "key6": "3eLZCequ7dHLsGBddEpxvwpyk68r7vL4A245F83sgFKBRLcFeD7e7aMBXx4u7nYijTefoQMrpUP7j1WWELKicvd2",
  "key7": "5DKr2555LgZedrxiEaPA1Q3CzmdnQCLJUiE6BGe21CYerSyPXsD96Tj12fugYQQYfzMZLcB8xhf8ndxnYmhYSroy",
  "key8": "4HZSrRzjDWW3eG9Jy8jiG5yoQ2vatWP6sdJzSdEEmvvehwYar1QQCHRooompZMdFByREBVXbRDcFpRHMDYjeiwAs",
  "key9": "orSv65Q9Lo1PdKD5AVQtAxVfhUxdhY2RT2rsL6hD1XbNdTupu7zXP2fVWtHnpoigUuroWN2Tnk96tRy3HJmU7VC",
  "key10": "4gchaLh6wSrzimKmex8qShJkzgZhG3KS4q1cbmA1gJJX41Yb8jsXe5cxw6zPDiYVE29fvPphEkXJQv212zxuZkrC",
  "key11": "5sT2oj9HvLz6hMWAD4cWoVUYxtY3yyp6g9HKHuJoKiD4xj4v3eiCkhYevXM8KWPppQxzPnPEtRKHeAv2wAxSWDkd",
  "key12": "3qbTJ5tt4wKwQeT1ZYGqVEw6eGPVEjv7hmxgQPzJtceqpQi5mqBe4XngLf5iDWXzq17kjT98CPzDEX5zAyQyfhF7",
  "key13": "5vrxiSVU4SDUe3RLL8nkqgUEkYN18ZsMHAsdthX36g1ThT9KBxn7WXcQpiuowSsFCakQxkpUS5crYqkqr1Seb8uo",
  "key14": "oeEe4TDQvsn3cEwLJraw19gkobedr1z2N6aAgy5NmgfcnjXXq1shbhpA15JYmpq6JeUg2eAJ4qYcENkmLFswMMJ",
  "key15": "3Yd1jz8yZzgre1Qsffp4k6pBQWRoWTZBasobnqFYziTHX84ZGppVoffTxFCuVenRobeoJMgq7sXpa8FgqN3aioQS",
  "key16": "5k38gcCDK185wZs3hJBfkAzgYK1u6xcG2UX5CHkAYQodUJmRWYJZwFS88uxwWdyuCWoxvWqwZQuB85iawTfwUAdX",
  "key17": "3xcmdUhrwDcPg9Uby62opLSzJF9cmNMPRXHiMTEnhS3ShLVUzyjvwpHNcVTv1NqwjdujBhX6jm5PvusbgNmEizRW",
  "key18": "5D7hANeSHaJwdz7r5g1sqBnZBhXyVFh3zpQoYxBZNkCZhUixxeBuBH2KGjc9GaF9x6cncBUPa8meM6GEFs8DR2Q",
  "key19": "Pput5XyD2GH68wwDAmh2g5UpciLTg3NxKt4R38YDEV7Cfw9mTCcJ9jDbxWstnTHn41mYL82kdvSGbdMNRH2mA5p",
  "key20": "4c5fsdA3veTGe1bNiJCvStERgNQ18SGGHFJ6RHZwqGNbhtaymnQfJXrHv3gVohH52yyD9soTx5CnwECWs1z9Hafx",
  "key21": "4qQSCbr1u7kZpLuDQnqtfZHDdekVa5LGBpVHFq4hv4bzkVBk4RVvyC5KuWJk7abLymNQXG4FiumUhEL2UfShbHcJ",
  "key22": "3xqnT8aNVraipoQhqCK5fJg6B81F7gzH1QczotMXkiYLHFHwAMtn8wnpqa5WcdtMNYuEsPqMFdGzRHKthnGXe7ds",
  "key23": "2dYWfiBF1tRnke6kF2TDMZFQdq81BdTKNpPAPu8vrVQJgcQFCytDceC5Lv7uRWXNH789Nb63c2BHVB2BgnWLPDej",
  "key24": "PDvMDkpQPiGKRZzwxwtE43wvjUaQkRVQZW18sdXSGm8SLW1XPFL8vou3ubyLpzHdiXZwfMx7jLhPCQZSA1cH6y5",
  "key25": "2KTENm7jSWRp9miXrrDs6PnbdKzNTTHfwL8cbfo53wHEbt8LGcYVQeCDyPLwobLZme9bZRcKdvifiqG7NoWZj3ay",
  "key26": "5T6nWtM4pzkQguRxGW2DBTyCTDbCRXGaDZqMydDbS7XGDuo1wwtu8KBLPGjE4QEm5SZYbEKPUPtB59u7ZBz7nK8m",
  "key27": "3wE9Sjno9WyVB9sim2De9Um2D9UGGgAWcdcQUybgqvbv9PRZA67pNWHmTuLAV4ecCPUiamYLFh799dW45Su5deJ2"
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
