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
    "stnc6yjGQh5mGodgPn2yzpMsgSA5MAA7Xy2HibHJSqxPsxuTFF58ZMAoEYG2dpeHyYCzPfjXSPQQ9AgpVQDTdtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4XmUFu4D2dYEjUzNX1KTwpZbLoeAp13463S1rz2wciGjpmJXQYWemNAfyTsfVbBDHZCpzzFDL6AKczJNjveidE",
  "key1": "4SNJhKqWZBmUENNM7S6noQZWfSKCfUaVs8yadXpKyYVxKrdkS8bH3HSRb272F54pUnRXiyVC291hoa32PQwfVHwG",
  "key2": "2eAoTCAcGiTcyuRaSPFyn8qeWXxaQZzP5KXBm73L8xwFah2p84YKz2CAFy7GHkmSk8LSZypg8Fq8G38Q3QfZ1Pgb",
  "key3": "5aqcjXiFKojcWx5MUrSdUp3AW2dUiJYwUrqtKbJ878x7Qss9xSU3d4QR3frcioeqew5y5FWWbFNZM3c9XDxuyjK2",
  "key4": "4qXMghF1z4TH14MHqn1dWP2xVWZuJHqLKbzd26HoqPZQQbFCrpetprJcanLhzVwjnTurJUwVNzWhKzAu8SdT3Q3B",
  "key5": "2PxHXXtUvf8ZYcBxomdkqTxzdkJu7Da8dqqiXysrzcqTCzj5DJfUuUBCCWVcLida2S8AX7sCpUEWQNYUvL848hqH",
  "key6": "3oXwwnV5iqTu1dh6Uj5HF1pEfUJmhvbGrA6pjdPe9C51ncQU4qvgtYwJqrKnjBH7ytpTdMQHkw21AKJhhSm5W8U8",
  "key7": "3HnT7dDweCEC6q9kFk7yCV9cYELu28wUcAwPDX1Yha5oPjkK1dE4cHEJRFbAczNUhhd9CQ6hP6R5dytq9G4YtQ5G",
  "key8": "5V3hzFMnoz2wsjUS1cmp73WQPn6ECr6brDwPgmDutahcmkq5aMqFsbALpRi4SCQZTSoa47YA8cKsffJ9e6vmJJqj",
  "key9": "37EmoPqHPbkNXoeq1Fw9biEdw3yGZCY7A3xoPMPg8CoDbYy5TAvMmqd68xspcC7DcDur4mBLm7rJXvBQJqDz6w3N",
  "key10": "4rCpnTGbyzGofSPn8QBUoXDRJuKKsWPU1xXaWJ32A1zvB2XjtLrBN31uZfb4tzuVDPvTn3KJDpcnNXQot7g5jVj9",
  "key11": "2TBmdL68PHq6aVoQpXG6XZocA5xBMWyJ9DN4ApQGj58jUzS7HMqh7usBLFzjrWRbSNhp5wowjeQ4YxahsqzLCJJr",
  "key12": "5wfdo9eXn9TTQavh1bVd1L7fxyyyPKMhzH9QpW7pahQjTaX1wpCFFKJQJkkUipRmhmqHLaCk1tKwGXaqpZrCS4Jz",
  "key13": "3mmUG9QsM4iaB8yxNa2mYnaJmu6Smp8RsvQNbsxDNRh6ALXdHb5cLC4fmjigrEKQmvyQtTS7CsymozfumggaQzao",
  "key14": "CbvD2L1xVGAhakuLFRhGsSDgz6DvDCUmpRqT8wy1zto1EBVcsQgPj16WRF9rEn5ihn3i6EUHiF1He5U99nmYqAT",
  "key15": "23ftMjWuTmPFNK5Y9DdXnmk6PxnCkABBwYPywKmwUs5EcZUhWouGr4EyFGpQ7Pe1xdL9WTLGDvp5MBHr1DWuCTpC",
  "key16": "wjVsq7Wpxon8Q1MpSUUg2yaPHfQSBsmoPDbZ1bdNTZk4V1cYwZLdL8HQ5Z4yinYdU5Zc5RufZY5xTXTgyqDC7tT",
  "key17": "25eBFxYBcRkBex8yJYGBifwX4QHFUbnbQiJbrJkuMxqRogcfPjJvHmsq2AqTvDVFz7poyJ3kCpGPYy7RU8XLsoWc",
  "key18": "4euuYNAeWCEXUfmjsBPqWgZM2LoC1t87diHa8PwQoAqn8RiPT9Qn3BxXyRyQ8juC8BYknnAvtsotQwvwJRdLNu4T",
  "key19": "5517LbXNnAFB1i6eRsfRqPKuMnFEKFotJJ3japXMMNhrVU8rRihUEizznXPHoi33mn6t4AkLEC1WZGM1V1bEFLq2",
  "key20": "5rKknRYrXxD7T8s9SCtAFvkDs8cjrB3jqzc24LzUUsguWGQSYhtu5iCrxyj1Sas4S47o823TbUmeFkSkmVBsWPma",
  "key21": "3ryzVovm8tvKnbmQMHHWaCnvgaD1EdY8pbYRgKF95iYnRKbaiWN1XKA4wtNgW975yiYmBqtV9FbuxeSusDstoKk2",
  "key22": "59ZxcjWP8Cg4jj7kLg4p4B7i7imkNKqALRCaaG5phnpEoymLyWfahxbNM3VcFBX5Gfamwjjn2ovzEed37PLuWkxN",
  "key23": "bkx2po6ehA5AoWfcbNFtGwrqp3JMpGUvXcCkTfuDDsrBofgCYZJLeLD43xa7oxTM42FesVETUo717Zfm9aGFQuL",
  "key24": "5hVWr3NmJkx3Hui4HdA1Qdsk1WBDD9T8LZx3xeCX9Td7PgtfcTEFAujCSVdHU38D53H4oJA1urAXayeDjPJjhfNJ"
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
