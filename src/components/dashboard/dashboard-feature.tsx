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
    "5csce7QKCwsY9hSnX4WHkDxnX4NCHHv7JSudjJSwCUHyoRHQcw8vxPy9Cht1vfuNdBr4NZCfjuwB5SLp7mWxDV6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZJZZ18gH3p4E6irsUrt4bQVzzcGZnw56YGS61LojqVy8HRVRoMqwWj2yBB41u5mbjgZV4Xf3J9QddB9Qqrv9Su",
  "key1": "643nmJZgHwhsBiuWaD4AakH4Baq2cjNidCtGLgqksLRb3F7hcN1t1gr8crRtojuJeHmDHtzpYc4tULYHJRpCbZ94",
  "key2": "Exe2kLsNFFtSqdefJ7nmjLQLETYeAJBdeQdCxqpGnYfDFFuss7xr1obCxm84wMmbXrdM6KbBkd5vWDumb8CB49i",
  "key3": "2vZzYj2BjDropK5ZPjPhJL1ajRe4nZX5RuFGmWmRB1nvkYkJkVA2ZmA3ahQ771RjEmD6JQL9W6JCaYiK9JZSon45",
  "key4": "3C2o2cTMBCGd9hQi7ZaE3aHQ5ofqysJFY2p6kDBMUWuz5gfoHX76CKaH28HEDuCz9niPbQQLAQsmQzJDWSgne2sC",
  "key5": "aK8LdBjrQMNon57a7nbc8xZtWFkirXtPz3zWJpo8bAYfeMokhEjyuFN5Be2xBZLidQFiBGLpERNCgY7haocg5iE",
  "key6": "3SpsKYjc2ND4CsLC1CCiDQ1BZso9bCFKYRtjLr21jWbYe4d9i71cvgZgVRWkKbvWZJorgPHVS8HTK9Mhz5ymX7bm",
  "key7": "5uZoooQ6tVCX6gG6kFK2VT9BRR8xNDhUgBonYDBoPLE9CPbyp8amMGSqLVUQtM2Mvvm2kWgZnTGowC3ofMf37E9o",
  "key8": "2GVwGL5afMHdyHe9oBdRg954HDAwojJCutJZseHc2VMyLFV7P7xf6vfCw1kPSJwwsHGWPhgzwzjxuytEUqCsCFHv",
  "key9": "5yXYgRKtAqgmdJeMaoCSfLoyhmaADo8DCcupnLWLoqgtNHMmNrGeZAoxhNrTQ9jAsdMGSXeW17WMnqrrjrChu75A",
  "key10": "4y84UhnA6cZ9zTAGVQhqo2a6QwmErwW2N4SxqzsFY8S66EkuQJiEAKc7ftBeRxeKjXxn9qCNcCKKvXtvfB4mEzKL",
  "key11": "3bF8kPJPq7bMRgqAehywH9emKkRH3RnFFzbuogZ2xKrhqoUNQsXqsdAwvYs66tP6YMqZk6JPTWhJBVX7hjpdaxf6",
  "key12": "5RpY34wtwjLCZD1S8Fwt5smLRH5V47y94jXcPBED6MxzhckaNej9uNTdvj3L7Bnjf5LkTuBUbsKfkG3MkHHoFzwC",
  "key13": "3nzps8YjJEBeEksCuCf89AkNCehBXB8yeeHzG1XzJFBt2PeTfcU9grXNxmSuRV3zQXUXdGMTsf5NQT4PALfSYVKN",
  "key14": "4Z7yXNtd9FVzgJxvTSfimfe2tzcDAL8yTMZFymUdxpHGkfRYLDSonmiwTMUMV3etWqSU5ZEEhkg7NBS9EUhhPPom",
  "key15": "5CaF5FgDcRA6tdSLJP3fFeCPmyBWjZkFJPESTv5GhRNaK8vhrnKTud4Bj24oomPv1p25Th7mjcv5G8z9FUywnKL2",
  "key16": "3FxAJAjTeXz8Lp2N5TQncMqSEQkZarF8xZ8C1jwySt86RsjYmPkJnpHJkQmn1j2MSXpSp2qDYbugqV1NiLRzcEkf",
  "key17": "5EveY2mC1spg61ksUfXwPtkdSFSzUkqR1AM5bTTEouYvkhaaWqs39hTbtvXCbjGyDsEP4oFPoLdfNtcgsk5cjuEu",
  "key18": "2goxo53oTxNNkCWgPDCUnNQpk7dMUW5efCDz4bx27eLZyr1M4FwQbQnzZ7ASSTvz6eWwEvyjSNVz3smCPscA5sR1",
  "key19": "53SWqaQxDh3rJnS44Kw3VGTTVDtngRBjrQzaCCzuKM9ENdXzSusZsQWe4ZYPd8hAXtCvDhE9jX7XafeQJWNyvext",
  "key20": "2USBtkhtVxvuoSDvfhuMbgCBS41Vr2xUDTNtPr3zJXd8Cbzb6BcRVxhq6QvbjTkGak5r31Z2gETmTQComm6i57n9",
  "key21": "2ptDcRiQb8nvaHVVuPLbAuBueRhPFeFNn2kKXvXhG94sY8PcbthYyMZiw288zixrXKtS6ZMFHFjRd4HvKKe2iLgu",
  "key22": "3pSbTAMdDDQuVPurNgTK967bizybph35mkmXoU3SLLwEzknMC1B8W4Nd6ENA56J1H6EL4Hm3dQQDqSCbp1zhPvoz",
  "key23": "3xnnWLuc245BNFoRZ6h1gpPVtwJzYFqeP3etnRvaSakak8DNtDQvGtrDjAzHzSNa3YFdC1GH3xFyAqvjdRWdf3mr",
  "key24": "5RK721nC6CKcwgTcFcKMM6UzbK4dCLJFju32f6gxrDpAU9MSRLMSoZCByYkMNYRq32Scdix3aQoSkJk5ZRYKsmiF",
  "key25": "2SETJQK8BQecauLkSwkRSidVM7DYG5EwRKVp6t7p3a4cnzwDMuj2GK2nKsDaVEYRqM8hBW9NVCZakRT39fMoGLZX",
  "key26": "34EM4q3U9aZKSWsMLPB5PrBx3kbGMw9kUU1GoFhoD5WEJA2rDmtSkw3FFw7VwFMDerdUxSqBRKzjmoABPWfGPtwZ",
  "key27": "3bUVBB8s68GaRqdH28KJTKbiyamymcdDGXR1A4sf5eZ4oXEeVyVkaZLCafjwzu4fannppqsyGrt4p5YASHrHXWjn"
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
