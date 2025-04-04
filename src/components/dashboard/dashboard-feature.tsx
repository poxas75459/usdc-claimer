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
    "2dms5ynUHcpoAX7znfGxcjAPEWqYSLPSXWnLqp2baZK4dp6LjBg8TgiriQnoSWfxidJU3kwu8PZpT1LmfmggPpZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55UYUjFGK7zX1nUmNZhkCAmZ82FmXWQkQ7Bxm6MjfSmRinf619sEx5bQdNgLdHTT7S4bNvs2oq2rnW7tHo4zVgWs",
  "key1": "3vGBbtVnuqBvDPbWE3XuaWSgxA94gR4Fx4SX1xXhNfi18UnADHp5fwZNbjWHvHi2YcJVuNm3njFSWMm8wiP7gfNH",
  "key2": "5txgsidfvaNczvZ4tEXuVYUBUPdG42xmu6AHTGR6veoX1QcaGpV6phhUT78JSN8mog8PL5skTkdi4nGXtoCf6nta",
  "key3": "2h1ECBd91eMithnJPZCj7VMh16LAXv7x1RtLr56m6Wo5mXMpYsmPncKBjMVh5EwycZZqdt7S8171NB7LGzcRnMD7",
  "key4": "4EmX3NCZezJDgvhPBp1CkQPSGskiz6vqay5mPaXpj3FqJQbthABjz38R6yvZDgY2WpPRzobaEpizsyH4iidqLTZY",
  "key5": "3h9RM1bCgLXpw8HoRZZmjiz75UGJuZeNEhnb4t2wGbCsKRmr5XejQNC26QZrUVh4FEUqAZ75JZMXyNzC8vBTDzs5",
  "key6": "54QNEBbwKKj7qiMBQV31oVn7LsFSeMzNFNrwtrMggtNr8V9E1YzhgLEtYwpg9Cq4einWQDQHYWUWvvpz3U5PQM5o",
  "key7": "4tEHirCbvEn3pFKtMBKaCknnDJjHC7fsxVjy7ZZHDfD5uuf33DUXgFZcoWekx33tpQBd2NtXTUhKXuQoE9jTbhsC",
  "key8": "26A1VpQNs4xzAsBeCKUHCcyNdxsP54utstTdbXKFd6pQMNhvZAnEwPN5aX6FxEd8x41evWBXzQi141zEH3m9ShhB",
  "key9": "4RPoMsTyiaq4ngHoXdBFkPtYBCmZuSpx8Zxd8RnFDK5WfHvqorwKtoZVkZ5xLBsRsTqi7B3qGJnEa8bY8apPND9y",
  "key10": "4Jet2683T93mWDVmHGmcWPgMB5XueLrfcmoQKECHhkyrk9syUxS2sphSxPaaCCvT5hiTaWHLbZ21m7FhEaS9UZBr",
  "key11": "5VjmNmxGCgbJ8LF8seYwVkrs8FfPwh1Y7UXV7gSFjUoqu5f8zc3xg2YQUmFmTHDxAeDzwWBEDsN3iGC4JhAPq55t",
  "key12": "37hDxZE8wGVkrVngYeoozsgswvG8aZyov3XirNEnWnZ2j2Msvxwo59Yg63nQW96cofs8B2L3G61PuZQx1zdaeZKZ",
  "key13": "5a4bUTkJzojeCu7fpcCacLEPGFxVfND9yx1FbQWBQQoduadzrt3R8UoVZNJNg33u7H5t73usHKuWkYnJWCAdKLKm",
  "key14": "3KSq1C1BcJMtHmiGMtcprmbv6R9imYQdGmngwK2qpF7YmVkDW3Yep987YXuB8FcfYQwSD31ov2Nbb3ogZsEkMd6b",
  "key15": "4n9EEQbmmGxbhceTShhnpVUD8P3ZF6s97BW3rpiFPhUy8acg7ZdASSJJTAQ61MXyk7VAE9L4VmGEqfyjHgFW6xsd",
  "key16": "E8qY28LbtsCopquJuXJ3jwCLkm7n2C5owATY4pL6rH3ZRF527374rxrVjDoYLpj5WkoX8aDfGfmM6o28LyTiqM4",
  "key17": "4eUFM9zNqUr8QoM9AEmKZ38FueVafMuJK34NBXVdvCCZSiHdfNC9TV8ibf1P2WB2hbEGMZA9Dm5A9jC1w2mQGk1D",
  "key18": "pTGuo9H9uuvCB7EUyuaENxT7FUkPhb8oRhEa8wkJYFrty34trgkmJcydzgzNXgCx9G7pruFWnFrLQzJHVa2By7W",
  "key19": "3EnCikziaAfMgN7jVZQNf6stfqueZwBjvuQNNRcpeMjida1yGfMxFfzxTBDyZxJct1q7Pjhkad1vRxB3nRuqG5Vf",
  "key20": "2n9YmJKb8wP78ZHY4duFLCmxgwdxRUcAWitxPrzi1nMWxpSE8ycd62c88iG6jKC83sQkFfQZzp1vbWABn5pQx2ed",
  "key21": "4W3eVYbMTx1seuNBo2rVPhUSWBDcxj6j1cy69b3sMNL3gZVqKM8F7zxTodrJb5SgT97AqXtZYQJDu7gPyhPyCVbj",
  "key22": "pVC4vJAkt68TiEqrJyrTksYS6f5nH53wqsV1sfTX5pdBnjNRc57iPAEofPskyuxdhw4nWg1bDnEcsZFj7PpWCNg",
  "key23": "5E7jxZVnhZPyvkk2LLV375gVQV2XZGxttDNeexG43A2sHsLYzg2KGVppgb8Ptf4AofeX4N69ygGTXng2kvA6VvtL",
  "key24": "2Lu63e5UUfWz1XAtjnFtTbeBT8kzdnWaY2wkR7tazBjeVdZvRnLXJ94cEmPm2wnWB8mBtdiHy8kRfkwAFSzveyPk",
  "key25": "4Mvz1Rso39vGhL3Mv7xQ4Yf1V6mEZoFkVLTciRfjMfDVi1YM5hqRvB4MKyeFKwGfHDRVuELoRjNxvV9zEwNTGtSs",
  "key26": "JuezQJYQaKioaqdBuN9rT1bVKL29nwm6FjNb3WACCZDNeXbJVjHivnUFjuRfFsF8XenSXNe2huTQ7wJ2YMQuHJZ",
  "key27": "3ya3zvEaje79y3rwxZKVA5BkGmXZV7ZQNoPsZ1YsP2agN9UaSBcCQQrkbD5bvpCZrkV9NKE4Fg9BvQ4ULhRAEqkD",
  "key28": "5o5UAQmR5epvxtir8az9sXNYTGhFwMYF1PhpDCjhCuP5kDDWBth1fPZYcfZ2jushttdf6bbdTUvHcdNmCTbjkBSt"
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
