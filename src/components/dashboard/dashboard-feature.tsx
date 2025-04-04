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
    "2iLbVZKq1brPA1H4deNBEwtYjZfAQbwDyD6dLoVqGnzJWETH8YmHuqaBaDawaYXNaHkXaqMwsNr9fFrFN7DyVy2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RhvcWKCXZHv9SoUkVB76ximxf6bV5nQ6d72mgtnQZsbkzY1yTotnbFbiTPRMr52HjCQsKmfsisEGrk6MnfvpMKD",
  "key1": "3EyMBxk73KKbLQXG4LvW42akfMy6B7SnFUax699fUpcPXDzwAYeq1cBGmq9cLhQgRng1iPZUqXHMuFnYZ9ShodYE",
  "key2": "36k18QZbNVZ2F6VhCLkGXpftWRU9dmmRhQsDMPRVZhHQx7vbD2S7YgtQc24PVwZr8DaCm9mLFCyFkJnpRRLT4Wws",
  "key3": "3kVxStwYeNk3U1KTHcjMfWSira43BxCNrXbzT8X8c3tbT6RUoYAqsmQ2APX2AQHpzyQC32dzdc3XWaT6thDhzeeT",
  "key4": "3PL5fWEAWLzxASSewQP7Nw9jcaNi3Wvc3NsDR3BvxHQn38mCZBPfYx9phCTtzd7YQPecntj2VK88EV2fCwzv9wBH",
  "key5": "2g9cmWPibBmjXbAK7CNzahmJ2MQr3k6PfvouC3KJB9Zecd9hkZmVWkc1B6ZuvF7L9mzHj76GDDNV77JVeB39516i",
  "key6": "5DRzvAnvHTtjZHAzPL73rN5618L6nWutp8JgQTJHfvYDnVpCv4MnCGfbqiL5Wz5YJBPXdqwzZJN9FfCgY7yZz35f",
  "key7": "knh7h6AWK8qyqFak9cABSFW9tcUHBM2z7Yf865NCLe8GTTgytc26KGri1BdarNa42PwRqfi1uxvZK4WsBHuzU5u",
  "key8": "22rPkeTcSQ3NVm5hFgitBT6EXzeFDhDg8PrZsbQsoCYw7EJHPq1oiAqajTEBVzSyDyS6JhPRw3p1oCdSVHqJbkX2",
  "key9": "53ksV9NSN5uGnW9nfonvwp3qoJc8fm1ELvRF3m93utrvFGA4fZUvYLZhM1egdeb6sPTYR5s8rAEzgcwC1tsst5xz",
  "key10": "2pKf1YwSRHMsP9ZuTELG8xtuCRzKVhp6kGqU7qvkFZFbDQDFcxenvAjcK73PG5VheGp1C7dBF9wVDtghFH1avevs",
  "key11": "5VWj3nBLVY1HsMZETdLWYgw1FQS4qDynU1J8d1WWgSBgC5LvSnXAcwMrj6goLa4e9hxteeeTXH6UwK519FZpiGsm",
  "key12": "K8nD8taBKTXjGykz16kgw81q1yyDBEL5pHrgYYjqGvHw5Tbz5CfXDTHiKxEduMuXPpsrC52dwJgFGPjXexggVgr",
  "key13": "4jz2ZdtJqAemSCoWNwPvjA9x1n5vQWGVVwRS3n4BG4eNa8fkmPT5m1A18D9vVvP39ugq9pYQckLNvXHTQQHzDPiT",
  "key14": "oAYft4CkeT7KrmkHJ58cpghauGis1f4yRVHuaBv9PoMvygp6PbJaqUEuvc3FBS4ppsrPqpxyQzPTr7xR21sQ6MS",
  "key15": "2axRX5cLtp4qczChJSZYw5d1c8RZ8RYX1PFCxhLYLMP7wJhnR6iRHrUv5MRNQ2duhfvzHrAH4ws3m1nBs9WyMYYZ",
  "key16": "4W32TqmhDwXmt6BUn3Dm4VQWwxNSWBNzyBsz4xVBqD3kE5k1f7hNctEAveF9Yh1fhTrJNRdiTGwtXVKXo8CTauJr",
  "key17": "59Be5Q5QVEUi7XHtiXBccxEM5w3hCYsJqivzjTJVvkCs2PD2r9kA4JFeT8kn4Tnz5bskzPjgieUbtTFDXvhdWDMp",
  "key18": "2mzD78oBWP6X7SLuApmTSH16fFLmf9DfLTSbWuLPoWg2vjQYoQ9RvPHKtz49UEAsSVkVA9ZfgbHwEt2VovqLyGX7",
  "key19": "3g3SWLDGAAHxwkPEuc8sEokMe3rc429zfJZ9gFkJrDSYrwLJhRgbinFT4e9AtQ4JknJPq4K3KjD49efHR7Uy6AEN",
  "key20": "3aqyvUmdV27oA6VrqrtgQUfXHsUqsnGK9j2ZzUY2MsuyekMVuY9ubu12PBipztKtRe2eUNna7zGzmXGdUUCsQzRV",
  "key21": "2fKKtzf2kHU1xeSCBhfpg7wjnmEUetaiR37eVepg8TVE6bWcJrUdwuzPiqf1HfUD9qgPeYvxp6MWen6Y2bheLzhA",
  "key22": "24Z7KheED23PHr79mcEw9zofTmSvkpJUNUwiXFf7ED7F8axztkoZbm8wGz7Lkyd4aytfdKXMNZH9dnqXw71AB7F8",
  "key23": "3DFzHvTpFJ45CAPg1xA6r7sc8GS8rGJHWUdyCtEWoqkwj9u15qRso8f6wDuW5wf6ZqgA33VyXVDfoYHMEdJPG4DA",
  "key24": "5XL8MeEgorme3qZjHkNnK8yc1d7ERb8EHtUYHA92geYTkC8F5HT6iqyKBM6EquGwwvNpg3ya8m2LzVMS6nYtKRDZ",
  "key25": "axeUeJEmrLK9yZuNDcp6crj8XW8Kn4GtQnx6eUeTCrsAR3LQC4ddm1pniL145h4N8ACaTDnPLjbRa3zgwtDTHqB",
  "key26": "2CKDRq2NEmoEE2Aw7C9FTRxCJmFsygduJiL1TtAAW3hhQfFtsTXCBQq1S9mQdhKcyMapJH9MYVWACgLY3iqu1g3u",
  "key27": "3fNBFzam8HRK6tJRipGmeZ6cCrjxKh215xpr9betchZbwF8iL6yrHw9RPMi9VZWBoSNfr8ze8xMgmxbn5z59sTvg",
  "key28": "MK1XbsECPupKASKRB3Wpuq27d1Bc8fu6sm3VKn8NRX84ztPtBnBWqd1WHfPtPqaV2wWb5iL3xVuViFBZ9khCsHo",
  "key29": "3HYVz9gZ2v1RhADg8y4gixK4VsTwGC1n63MNAD2fWkDvry22rLEeNFmE4F4m9rh8ymQYt5SArs3MnnHG1geeD5Bw",
  "key30": "2cem8bkURfn2ftWS7btVVtWEHqjdd8A833e7MHdKbhcJPbdzgbczxjJ2B5bQPgSs8oogrKZzrJnrDzkL1nk5X2D4",
  "key31": "5BMDUzgye5cc8J4Gxk8sT8hhtaoXUFVR1jYGauVh1jmw7DBDxGTGbyPKbZM37XdHdwZYGCv8kG2VrHeKa3WsCv2K",
  "key32": "5kNM4eABj7mYyCWPiNJUDAxbqDSQWtCY2RSioX3mmvoB3RUArtioF9ctYGwEgC8cvbuHob2nY1gmcVhd2GUg3Y7Z",
  "key33": "3Heq6moYDwhs336Bt13HzLBVWrr1grx9xsr4oycbr6UnLLHedi6nM3tr3ozjP52h5duAn3DywSAEhHAcmmMnPogT",
  "key34": "S5aNK7fqqjhyb823tyUHcihLtMrVmaAbMBt7riMRuS9E1TQTqCroRQT9pACKDexeYpsQ6jjTDcQ4RLKdfP7eN5T",
  "key35": "5S3umMAzB72aSQZi7snBG3RP7BkX7i4H2FrTg2mgKwsWuEcAsHa93oyqBrFC3DiegVovdSnua4hTbe19i7qpN5nB"
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
