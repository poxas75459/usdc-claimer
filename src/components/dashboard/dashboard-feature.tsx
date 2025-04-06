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
    "486wkfrLdAT5amEQv5XnXbyDuZMrvQZkUZEgTFG4aEwnuaEE3su1rmmKe7Yu5injcS9z3GS6DW3KMR2orEAu1Ugq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XW66xjModeQ5wFUbJnKUaifWtHAEWKLQTPBHWKqMmvMiEiJs45qEpbXkvbnTTpgeLDTEqD8JKXYsF9WZFZjWnj5",
  "key1": "hKS2nLn8TsDwzaeJwfPhgLFtPqsCoizf8MhRUcCVXbcEJ3J4HYtqkA3Rk5LLkVKEjK27soTyUdftx3DJdWdBsd3",
  "key2": "4PD5p6yDLfCuiFb3o6G4mXJCmfTxLYbMRE1RGxmMsukV9h5GTw9BB224ND7XNP4U92CzHt2yTSp1zm6JmV5w89vB",
  "key3": "49bVnXLtgvWhaBrz28uC931FfWnbovDw9Vto2ceR7XPksmjBfodZnyvkynWqn1w4tRJgCvfN6F6rEU5sBY5YTvTn",
  "key4": "9E1PbzPTMgmKZeKMaRRwVDgb1uKUKDVxtqziJFw37a97P29u4Z2L1zGK64RY65SfHMuLbcoSCsQeYe44CNe9Ck2",
  "key5": "59LriBgVaih2Zbjq9bTN8kSkqYvups9972e8BhTsWnuKARw4tSW3fdZjzVpjeWnxbagQ1hqgKo17BHW3XejhFyPx",
  "key6": "Vx8SambJ6PNL78VzhexdJKCtL3yW7XCG2rQRMPUTY1a4bJNqZ28fnDaXNjHgt8x3GV4PVG5s5hjjQPcaSZ5oNo8",
  "key7": "2hN5xQpYJEVffN24kMNC4gHvukzzWBL9nM5KW1M35PWpceKJ7N8v4qHpGYWqLCpoYdiRDMEyQ9cR1i2B23kDx6h6",
  "key8": "4UwAFMxa9jZQ5XhL4L2omvZFAmNHHJkfhB82h9xYqG1WuwCqco6h9bjFw8UY8xYQb1vpBRYkq9Geg8Rg7g1nXGRt",
  "key9": "5Hzh8a86omZbqH2tMV4mAeFE8swatKE5Ut1QiZi48jMkBKjRb2Z5guzNR7g8Wyyxif5x2mJjatnjJL7TeH1D4or7",
  "key10": "tHTgKjSQmw47VciBApmpLorMPN83G8n7AzuneUwmquBeQ2MQBjqrrCAif3qAfBiYpqtUXNacnNUPwbknJgvK4fi",
  "key11": "2fcyPUeEK5w5FVJLrZLDDq8HCtuUG6VFBRmhPm7zkDTU5VzCWaedKk2RVdVhZGaVx5Fq5Hgvc1pbNoYXUCmC1gD5",
  "key12": "4EVvyZsHbgCqgoVWXAskq8BMK5EmdtsKrbtDSNdof4vHkPBCoAtYnaNvr2VCV3631nNeQQF4yJyaiBQFx21Qz6vg",
  "key13": "2HjjYpZDP9Av2rD4Hv8c8DVSYqHozP9gtWZb69ThoKahmmPxcqm3J6pHCSeds7WiNxAUTB6S95oiUwXM1xQjqSSm",
  "key14": "2YniZBo2GDLscFYvXGnUeEmHzhv8wQ66oiceGXVYXL4KwU6AYqJmoQFbENsJzC5tUXxbNzU3G6j5WFfs5pigRQ6J",
  "key15": "487enKrPjneT9werfjfczhFLk276TnMw1RZ8dQu6qh8jb2bti8CdRnFvzoLwKFUbHYXfYJruwuyT51J5V24Y893k",
  "key16": "539eQewyTdP8XKhvuSFKgPhSNs1iELdDbeFXGoEZuD5Q7ad15kCvH1NF4KGdLMr5dAto1ut1gubcyJrUUuyv9aj9",
  "key17": "2T6hpc4oyM3X9zFTWWfADjQELeoJanNPbygYHWxjiDksE2HuzCjpT1PPkKm8ZYa6eLNZofVCxQDMh4HdBsCw5KeV",
  "key18": "9V4ZuGiJzNqzy5T6kcw2msk86XHZDS7BWh2ppZHKaxyrdJf4wfsQYTXomHasqLaQuwFeMAhXZNcTP67xDpKhZez",
  "key19": "2CZw6AJDt1zK63XBKmgiN9Rya7tfZY6mFQiWsSWVHxDLVbcehe48L9wrsgpk2T8vxm6KikV9wrAmJggYWd1SE4UP",
  "key20": "5Uiz7ZnWQWGWC4mRRatKrV2s9R7XwV6hdib8k82FFiQ3vJBb8wY55VGPMDcgT6azimSPJ9PsiPUzUgC1NGf4rmMY",
  "key21": "SHo3qDZgGeRxyiaLKgb8hv5DP7MqCNmztv3zD7sQSNnNXUYkAughzhE2SGDUPkeJyNyxr9kjCY6UCz8WmCTfAWW",
  "key22": "BXU4EzVQzV1ahCViGwcZv4EE58NyC3Nvw3wmCqvWCWwwR51279t5ut6PpJzYadyFuVPUsjdzFovhMG8qcZPxBQg",
  "key23": "4ctkJrUa8WTnd7SRg9DUtEUw3swU9AqpEhP3vD919bb2JJhyqPx1MHt6yCJSqFCBMnWCyUwpHwguKxkE1NgFjGWB",
  "key24": "4UgbRgozhTpUfgTZZtoJeHp8KPt5p8BKvm3J3Eqa2JnEQeTBuTtGGqAqEzFofzjycwwq2bvDbB4nW9D5KUv8udRW",
  "key25": "4Cx7X7KJgyb8zLWYPFLPSveRhD2Yn9Wjabpi81JUWWYigfig8LKXisXH6CnDV8D3D62cdVwBmMounbFZsHpCZmsb",
  "key26": "2DG4oCV6PzPWbK6f2pnFEVKud55doYd3QY6xFrUGwL1qyBraQbhwAmuHGKUgZTfcZruUER5MAvY7nyVgwmt35bSx",
  "key27": "46vTpCR9RveuAGTZHHpAfMbU1f3G6nhPAe78PbBGSLRAMZeLgmvzgS5J2bXUfd43YPK4WKuruHAB2CtXvEoDy7og",
  "key28": "3KnAVBtzt6ACZjk32eZxH622TyrzPRxsxX1d9ga4TQCBPpNtk6VJpUipgBcQg6WySJxUiwGHqeTBYQBzkW8S6Jq1",
  "key29": "5aGJdwZ5EYWGxviCD3QCpkaVNaeSKBSdLjZtP6b6FfCHfiBvid8mi92TMGByDvtYjNu6nCgZb8DKG2tgCePMpAu5",
  "key30": "2kCE2F7kKMG2UhxhVLtaMVczME1oKALndGUVS5ydaJLjPtMk26K814kfD2YHVG8YWCM3Q88wqjeCRTsTST53H3KS",
  "key31": "3JDr1JtcvRbeXmx5NDG9z8BJwJ4uWPMirAtkvWuZBamMJD5N9F5pyMYcmdhTnLmWy85wjM3pM4WJhU4pzDk7n3Yj",
  "key32": "wGiaTsxUXFu6qsfBmimAyeQNNz9zvqd4zygSQ8mESWxp5dERFQW9knpyfdgAAiAD2ec9df9UVQSjC9gneC2KFDy",
  "key33": "Haf3pJURFEs258kEY5kQQX7dfkgziBWRmtZUkstCLeUR3k7VyS8xAMizXWse3LUJbnvuvmqbgoKzWMRm5XtBgfr",
  "key34": "8Eme3xYeRV9smuKd97iBbyz6i48QFbC8ZSLvpzGx85m8ER2HMmwsMzGJMoPwnKwoUbba32XAWjZznXKuyFSc3T2",
  "key35": "2DxbspM6DkSx4VrMzTodJPDqzYZZBgcfCpzhV5QjF95WoQSeZg7BF8jVHfevn6JTjVcAvga3uJvLpyNbTvRntcxj",
  "key36": "mP4GxXX14Xx7pzJAjrothTuvngtrH2sneL7apek5P2dSJc4M8za1Lyt8gxF6873yRcvmN3APJ9UvM5P1nu7AxYU"
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
