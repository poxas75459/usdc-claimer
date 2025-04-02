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
    "YPs25hzmWeNZTbQV3vs86iFnGNg2b18uN622KCnteffyMChnrPNwtK39mLEJW7NmWWV1rqsKd2yXHXPWJDrjpBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXkNCqYPx1RhrE1o7cCZCWb7euT4EFJ33oNZasxsKaBDGeUmSTSLEVowQtyjkNV19FLmPAYxLyFzVYH5FBadEqg",
  "key1": "2WDHZsRBTNHXAwS1WmVH6ZDVnHK87th3piAj8nwYNgwpDLqxw92XRVuz8nndbUq2anzsjUh9qAPxady4zHLanzTh",
  "key2": "5EuJkNW1Gr3ToEcQFgyGvt4Yp4wBYV518hhcr6XnVCt1CHEnKERSKvMbtZtZoWZrLNN7nf7HawoVQwRQiiK4s27Q",
  "key3": "62Gkr2SiuP4YtJCB6taX5V9GHMhQLn8Fo2u1qRVvhz9fpuFRtwcBtHoRmLY5t9qSV1iXm9vtgHEvuxz7bb1LJpEB",
  "key4": "4ppfHzbWavaMZJiYCy4NTyx2u9iQvmPUHj4VpzqoJH61QKhupGP5PqtcYyWQdHsYP11L6RcAZRQw1r9gEVLkfdP8",
  "key5": "wNu843kCKVJroetZHfw47jXzfS7vrCdDqxdDv236G3qcTw7zM1sHmQtuD3QibxBUKmKWkifyJfx9vM2FYFEu5VF",
  "key6": "56Zf43HcDXvcVmxjBMEA7EuS4yadNhakSPPUd6YUGnbGQDMyo6RBVqeCW4sZM7bn28m1WrDsPhEouNtG6AiAV5So",
  "key7": "2mAiKRLTxj8RNw6YhznNCkf3WubpynU69KzVM4GT5ELT4LFAcJpBzwLkiSYasgk6o93DZEC7U1Rne1PfKdJgM9nM",
  "key8": "2p4UV2FMQGzZTEECZEKyfMs8Frz321AhvEAw6mcGnYVCiifaKBFRzY5DX5jqhsnHvf8yhH4PG8fW9AMwLrQbGvRx",
  "key9": "4trDXqEYLfEx9uuwqduSjvzUvk7cuN5Q5M8P6MjkPPjvou9mJUgshHMnn1Bmxh9CXKEyvSLKG2Jv7QppKeo1aHGy",
  "key10": "5V18C74PZKQYnepw9tHTp9tYLc5MBTT4ANaQNL17GxHywzo3fbg9eKM5RvWAcc9UdyJAkTavZULFK4uYiXUJ7i4b",
  "key11": "28JN2m2sgJgCq2VRPQBF8t6MvKxBL8hH1GTQ7NPTsQNn6N7xEscAEVnHNo1aqGsAL9aAFkF8iiMzDepWdeowMm6j",
  "key12": "3vbHtDq9qibS1r8i2v7aEoCSLQWb6sNL34azWCTC694arYiV4L13CUHe5xoFsnqnQ1Jikg6PxUsjEXLBdi1nN1Qg",
  "key13": "5kcytZeDFTenpo5zyHbEAjJwhtCevcicpraKwS2GFfdGoDDzjYbQSajU5e2AKnMeauY1V4adYrTUzXFpfnHoAaE5",
  "key14": "2yULZiV2N5R2jgQ5zJ4dGdzQujJQyZea4CT6DZ8PAjfVRp9PmXx3qbYdoWAHGrRiNMTRA3CL8uU8VBzuyUMubD5t",
  "key15": "F7i4iXtCwLZG2yFHcX9jCBv1P46YZqU2oH7xDJbM4nDdoEqTQgyLDMNhn58jaXmKPuRRxmfHBgBxn3yGVhEdwiM",
  "key16": "2TavTUGuxdGYF9ymcXbSXaEdJfWtKStHpPbRtsXCKSNjk2rXPaxZh7KjvttVo42xkVJ4i1kcirTaYPJqu6zfLvwX",
  "key17": "276pxX5TYEUk1WN8cnGqgZ4jDL2mWGxQbxmz8pA367PV18sJAnRGRbxwZ2EejfPLnmmaQQLh7z3QBjoFBYdw9ufM",
  "key18": "5uRnmaqScBrEkk6aEoU9Bn6A6qKTwUWiehJK6wnqxcKzE8HAm6oZBLJjoc4saHaWQoUxQAZEXSPyvAHGWFWc9KMx",
  "key19": "3aN8H7tdXRunP1i5wnjiECRUeTmwQPmgXUwS37X7eNhKMxjpG9sk2H8aso7qHtbMqd9PM3Cdsqtaj2181prUGXdA",
  "key20": "47HNmJbBDPWYrd94dbRtvzKgmzw39qypvUXNjrh7bjARQkeJwrLMgsHwBfXmf3PsiPfgaeS52R4XHaW1snKDroyT",
  "key21": "2w8Ua65z6GxAoL3XxMj83t4F6qrvghAjKCCcn81EAQ27izAwe1UwaFmytPA5UexLrntt7KHntMq9bBe98HMSAhGa",
  "key22": "5XVQs6S8nbf54j726FknFPCQxsQH2xP1s5bpjHUWXzekuwUweG1GXr5iXhrxN7PQ3GzPY1n2fSqCYAZXxWzN5gcY",
  "key23": "gK9qdqgMjmZtqA86qLPJmC5jVBQyobwm9oiSwTGZF9GEDLcu9bT3LkDxatKJmSMSGsgnVoEzViuEBZQsahiFHtZ",
  "key24": "5Eic5X7ncaRCVkN29CfCDa5jVzwLzaRkBHDpMijmN9euNnBk9GoqX8Qx8oS28FWbHzeXSKA73eH5hRGaZAKZJjif",
  "key25": "f6pZGdMVauyEfYyKHQT37mzNf44hhrqToAu5Wz5EeXopbhXT52XCiYyuyZ7doaHsJJFF9a1pMAyZH9iS33YFEkA"
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
