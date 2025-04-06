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
    "jW8dS7yr1vcvk1UZHe2yLpT6rtkEt2uBmXnzL8vTHrc8ebrZSB74H5PBDXM47fasNsP4SQxqfc9SW5ziq77qznd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JK1EYHnmboJ32yzLBfmA4Z6JUGw6j7JXJ7APRNKd9MxvEZ6pQUgSeVo4Yo2ad9p8UQTm4oFF3KwCKuKNbMzbYa",
  "key1": "3cDXsuVwyvNinukeXZCQ5MEzP86Gm19sEGJC7gmTB3igdyHKVSpRMKU6CTJAGDymNvpDcMxmsngUsjFEqfgTqqYA",
  "key2": "55CgQHZUdQkdmXatxUToivzsr8p4Ks4QaUKoFQ1b1if9taZ1FFiwzS8E5qdUYkNuqL2DJB9yFnzxFKmn2uYYogNF",
  "key3": "42LnzhFaptorzoEBjgig5DkfM4LLDDsPtijXYR5g4MqzxUTGf2uXGrzjgn94LBpcaBTYiad7iRfqP7w9em4BSX3j",
  "key4": "5UzJw6eqTkAz7GTV32wDtPwVQiABbekKENVrsMdN9r52EFVa26uHzDteG4hnRM7CS8Ls68KRSRs5GyJBPZD2kifM",
  "key5": "37pKMJFuRXNdoh3JRHSaHCsgUcUJbsPgoEt1jYW7DFjFrR5RR2yNo9Zs4oftczS4CVca9hD6khc2ufbSpziJhpqJ",
  "key6": "2iHgZ2G5i1YAFwNBjtXUNL1JAdjTQvJWvpoWuGZimCJWHvLvmBYUrKMfbnU4P9epdQ8gT2Vf2RH4mG9A1JVdGa2n",
  "key7": "3Awpp8epU3Y2mj7VR8u8RTy3VxUBmW2PUhNydyAGcZnJoJCiGL3U1uVAinQymCyC7HtaX5BF8kA9eXn3E159VSYX",
  "key8": "64SqFHy8Xz8cDGq4qfJi9epaV89hnsL4ii6XcdfqL1iBie4btPQmGQNtCQjwHV3i9VGFvWgyNMQH1LVTauw7X3GL",
  "key9": "3JAbkjYNHv1r72LHDsvh5c7r6tkGjbMmVzCPBygka7mbK8FWMNWhSTZ89mLTu4y4CXK7z2DKr2nfTrSepzrP8vtJ",
  "key10": "54sZ1Nmq7xvDcZTDvAELnh4p9cUanmNFE7M9sJqBydXzQD9TN1fQa9nBELRiwwFZueeQ2XLBhS6VtgkidcGFbygx",
  "key11": "2CFdZMztKcyxDKyHbe2Nz5h24H3V12xSQbbKZhbvDvkCMZft3cdKoMRf1a776Y5Ngx2eQVq1Nz5NhtwcQiPsHV2G",
  "key12": "481egY3SusRkkucUt6iMhhQTZozkXR5sk2MecM5RvY3eDY6qqtZRsxKFGAsHbtd2qvfnUtKPxSerC1jzZwuFrFuy",
  "key13": "b8f8qdZm4E9RpAiM6LN46FqgrLwBuoWBdEpLwo7BXmbXX27g7FaGsBBtoi293Cck21B4wAHZLQaXgbrRt1xKXGq",
  "key14": "5WosJ4xUrVGkJu9fMEVLrPScziFw9ETiaWAyoDvmWieCykJuvAaxf1sy6ebJk6V55H5uHKj9nRuHE2rxJdiwHcoU",
  "key15": "2niAxaQxYprdFJr1583wf6Wz5mwZhovGqnLNCCfzrgt2f7SKQs43yjMKHi2i1afe2LhzjVrBE6pbvr73XiUBhVmM",
  "key16": "5j8VPKrazbCDm43NQSDqB4D2EeJSDWxzwtv8vV4h6BmGYqPsaHj6hEKYWXdsoNntVmSG8ZqSKM5ZTeZiXvUBfrYf",
  "key17": "4WWm3TqUZtSJmQzzzEFAhZnJjiPyrQwyqqebrVFjwN5yR2LywFotzJK7HA6VZsGuW5sdiQVR8hHYxQqURF1JnB8z",
  "key18": "2ajWQx7Kzd7qU6gBXYk4e9zcCYoyvS8E8NJjY8JVaYfWmV4U99rjnjUPmKpXm4rfjf4fMSnTLxL4KerjPHXcy4K2",
  "key19": "5JCLEgT649QhQGquK4rHhjLhm1SfXjgFtQNtebxGeeM7tMRAnu3dtcqAsVeF1BUa9qi227TrxCPaVtQoX6SDpSu9",
  "key20": "4rb21MwouxSytJDtzQh4h8BMoArihjQjKcjfaux7X5f6VanaH9noHFF243XxsNoXf4NbdNt5HELCJGKYQcHxZk61",
  "key21": "3npgWKGy9DP6TLAEhbawpc231nWgCm2RkHFDXWcoQrQgXkRrgaXNnZLp2SGXNvVRrjPzi8BgCyz9JxWtT3DA6j9G",
  "key22": "hJDg1WRZfYfS3huoJAWjnp3FTsQ2QkMgzoCdRZUb6prwmue9VMZkLakSkCXoPPT3egkYe6kDUWSj3rSogkDfgiY",
  "key23": "2PjRHWZ6vJ7ZzesJj5mnuYNtzgGDcEkT7hhCMTxKcyYwGxj6cVS83iHbxZSht3RJBPc9ZPPco35DynLfdt45YzB",
  "key24": "2BoJ9MxYqfG7yzVmzFPxCiWnHdFVauAJVRLxX5LYQXQeumsNCy4GMGa5P4ayneQ44Ffpoc7JmAAKa1yAiV8yXhfZ",
  "key25": "66vkHZZ9pi3oKxvA9a1bgmZYmbMA3JLFBYcVWyxEAjob1Eniw9FMtopxXmQu4hewud3EoiBHiYGu9EwGY9ugMQSX",
  "key26": "3azELwkaQqDBfvq7afiErbrHEvERuDQpKRdF4Ko3ZZBVMeGtEqrHjB2DkewtdSVDAJmUTGSBNPGdqNcbbiL6utAz",
  "key27": "5LBt8TJ7ScJYZwBwCxXG2jcnMBYHcvCbMdDMhckucACs9mpZs8GQKeo3UMRhxLE9JX5Ncjk1Pf8boKfySd6ZgdZg",
  "key28": "N4KTGY4XFzD44sGKzt6ouuYwVCXxGSJX9JwUW7zyjsUPZXpFb29GarcNzWUPM1f5joAfv5J416kuKNR6rerauSi",
  "key29": "3nDVGLukqhd19MTN9zXgTWvufSME6co1hVhopAZNwbCgDc6EGfVQfHen97mzGHT97pqHfKwJvce6KztwLenHxP77",
  "key30": "2f86U8p9XXbde5aWEWi68jizBu9YKvNNeMQzGfa1eugnXb72UR99XCug59MuYeKqmsVPNmyHibcTHJzdBvf46bVj",
  "key31": "3uuqfaNgtv5cYoezcDRywHwe2UDg3hMvwp8kD5ZDYNR9PcNCPcyMQRvuddfK6nJvScF27EHJuW3n62fwmWKLmHqr"
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
