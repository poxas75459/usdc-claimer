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
    "523TYVD5Rzj3zcMAw6Sb7vQsdkaKMuQQpau34AVY5CAdzepqSKD7H7Zsh3GzRXNnidr2n4TxgvCJnbB76wdEz5Ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rX8tqGmCZEUoUNU3SVsjM73tfwQsSNmHf8wwrj4ZMbfLJzjMdb4Z55VXCbvGVuwCgyyFCvKUGaJr7A5F9KUA4BW",
  "key1": "4Fy5rFA9rJUD6KZpCsRis97qojWVCpz2oRoUsLgQQrxSXbKd2dSUo8qwdDdUvL9TeYrsGk8nQg12R9vPu8Q423SH",
  "key2": "341sC8YqfX1uYpF5UtJGKApvXhTUcMafwnsjv2JGXv9J9tpU3ovynLQG1wVQsHx6k4mVdHss9hiv2wJe2idbW5G8",
  "key3": "5K81QyadiFVKF4BwVNJoXbqQ2hRufH1wopSeawkhUQHrt18qvQPAmT2VMkrFxgo3RWG4d8qRPGtRHgF66xGBeErb",
  "key4": "38ud3oksmDU8gNZWbxB6aJsG2SzGwCQR9pzxzdiUERvGohJutcSTr1GMt9BzuiZc1EsZVRppZCXrzuGia8LQwa1X",
  "key5": "wHhKBZVPS4oE9jznaqYQeAmgFBxHrzc464Y21Yvm71rAyYirhsuq9fC2aiSoR1gRFagULHZM2pTbNiAu7oiBem6",
  "key6": "5Wi9U1qb1R5jh4NeYpJccvCSh2BAbpBApbpgVoZxEFXuGvLWjmfiGLPBeyrtRprhj828VHuMtN6JPsJGwDxZiyXX",
  "key7": "2BxE53h5qUC6fSndRcgH5AwDZ4bsG6f1eS5hCwz2jNnWzgBHe9ufXgHNfZFwc2ZtKnzNYRBP4w9tvD1E1aFCkJXm",
  "key8": "3K4WpG2MusnyMBdfJkfYpJcR2hVwcYJeCgEZfBM5AP4G7DTXdMC9WxU9KYTCieZNDyotFdPevXYrMqBwA5BF9KxC",
  "key9": "5nSsP5V8mUzLWsm26ELETFovkw4Cz426zGcYmhx21aW3xxHLx2YKZWdDP4DV7M2sXr32efVNMFwTXUt1QcYUqzeE",
  "key10": "wGbhtmKn2YUgab3mLfmB782zTisi2guhjFyGqVe9MB4zHe6fVJU6sjERH4uqk7dPBbcz2VobkrJMXUkso6bkVma",
  "key11": "6z5nCZL5Jdxz2nEA62Q7rtb6ZNpaMKAWL4gZTeJFwdsYCrg3TnhH7Nag88J3QdBBjYCVir8mtGEcmMeJvJmSAcF",
  "key12": "4kmW7Uu4FAzyNhGa9UXZnNNJ3R4soLtHg5NfGVp7AQ8CPPh5QoTjWAfZx3acVSsC7A2ac8Sq4Bx9LyHpDk6Nddkt",
  "key13": "38cyduZoM5mwPjCvH8yfTT7yzBtmseGaGwaym3SJo3tps3cwHY6qpESEWa2KkgsDKdg3LXQ8YqktRsHRytfAxGsF",
  "key14": "61xavV3PrbJC1eBhZwHdtqfZA86fPig1KxUEtWjk2FE9neM1YYKeqLskTrRafymGFH4nWk26FYuoUmaaNevofJ6R",
  "key15": "2JaTZ7DFt9i4YqtjB8z6eir6WbKJQ8FyWFanxEg6jYsL2g8R9NXFvqr15fP9XZq4CxBYG5GXMcy7ekEi8mwbUR1w",
  "key16": "224WV7XhkLD5Kfan29BQ9izsEYD6SktSJX7GdoFS9sz1c2NEB7GTL8n1ccAzpM6fBCDY8UfY1ksgs7ifr2zFvKVd",
  "key17": "4FaAz5pC14QeGwwyqMieGuQ2zzU88vQiSNp7c4mtCf3kb9sUyLzzDwzHCh9pbH3uHYZwEFbUD6u1gtQcTyneBQxh",
  "key18": "2pthF81GPitFjoPDiNYXT5CJiqQkuDdkNhLhPbxSaedUiXR8QDtFN8mQ1HrsMVeARH9jUNcb2xjVnEvtsJMCzSVB",
  "key19": "2QVsLfbybNWjfYzSv5yQA23QscKqdRiCnYjfXF5g4JzbRfxFzXPBmJPE6ehWufu2VLYgPsL8qBW3fpUFegydjzqv",
  "key20": "5vkdgKe8Q2CvwPuuD6whjE37gos3mpFZduSSgXzUGbnc6f9uKNnDe2pbcr3Vrf3mSgEnQPY3FhUieP1DuFSfCEgz",
  "key21": "3FbJicsMuEobX8bafQ8LmSie6fDL8ZEEEnsmaYiW5jvTy2ejGcxkKH4ngSnJgtkHoL1DXhDxZdkET95tXiKJf2Qt",
  "key22": "5SBfF3TPkMwejoG5y7p6UBjFMzQuDcxNaLBZ3K5sWDacwHtkAZ7nfM9xPh3CcHNNpKQxd4G5oeij9q3E4rtguwLC",
  "key23": "4xmHVexp7yEgX2sChbpr4qdRsf5Xpp9Rv3tdsy7eWK4BwhY7da2oYyLpLLjufxLTmhyErLpQRRfQMBjQiZtjwau6",
  "key24": "4DB8K8RFYbwmZvL6f8atqjGKAEvbN7oqcWVozBjaRZTEdjUiF7TxAv6REbsnruJFmthMbFiPXEQoQYcWPEoJYg5m",
  "key25": "3dVAt5WGoQn6uybZBqEFaeVYzTm5Mh3HUYwGR3U49Q6kx5egP2nQLw2fWes7QeEP7HehcV5nyzZGzXsNQQqE8Dwo",
  "key26": "58KuH5QCBr3YXuX3fWoVScsEEEH5MoDcDgzJ9YjMnX2UpaDsHHYYYj8KKKcizoWXMaeL2quo391T77zaqu7WgQMD",
  "key27": "32dhMiiEiZ11mRZZzcbkn79Zo7GVZZibgg9D9hHhJ5BwZpMkCUYbtVF3SDZqXXmEFJWZCcVjDUUayfV3ZrbWaPwu",
  "key28": "58xtVE95m8GWqW9A5piDf5jyVZmukpDR1dGtvhxnaaHWjc9V9qvpPXF8cGE2qrWhbrDvpa31PCSnE2vGboGgqmHg",
  "key29": "3mQSjxVJrZ6f6C9ryi9dNj333QNXLh27ytQmZy38pwNZUS4awveHi1oRqhvVMMABNUotPHYvW3oFs823rArSWskF",
  "key30": "4wzsyWNCJtmntBGocTrWuScPq8saKfCikwK4cpjSDdcQWZMP7KMe4B7cWs6dYTqgWCyNp91gHdSsxFqBUo3EySUx",
  "key31": "4RgxesPwMTpZqQBZuGA54k2QFaM2kvjSvyCnd648JhHCKnVzSsRYXJ3gBGF3Pvn79C3Qs6FW2YiscJsiumphBCH9",
  "key32": "MtJV3dHWj139wxWb6vj3rjp1gS9NbuDTAgmS89hdN24iLPuQnPnb9bGkqHtsQGaFLEkUZKmj9oo3XuKcykePbZS",
  "key33": "2czoYYjBFmoMoCkQPCWRX4XURF8daGqDGtT49wpSe6FeiCZiwZ9gLGGsmkSujKpoXxcydYeLWdGL7diYz6gG5NMf",
  "key34": "36GSMiBfBmRtU4aPL4C5vVSURYyzbN1Nk2B9dmj6hvPsU1PrpMeJb4ED5iNKHzq1hykDCmJugu8C58D9PXLd8Pdc",
  "key35": "H4epoP6TNeqi3xDEg55ToPhu6q8hrHcsD1Bi4eXRu7feHfhzyqHDtjmctCd7pDBZkvDvpJP93VSwBrfWWBqiVpJ"
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
