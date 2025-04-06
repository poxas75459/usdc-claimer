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
    "5ZgN5dxqrMxKB8N7eUXQAZpeEqGVPEYT9WsyNgCdbbWJE1aWFcogxcCMbQCPHxhHmyQYXPWFnAWSFdK9iX5aAT7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JG8ttEywuz3MLMg2pvCeB4uVn7NhnKn8aPY16hqT1ea8XdyQ42RR7QKC9hrRRxqrMMpVhVoZnfZfjf4LyJ5YnZk",
  "key1": "4H3jJtJ9XBeHrz2ho4mTaTYoTUK6rnxp8LrdWqyQZfa72AXpebiTckkhG57ucUYGoG4xouRkmajVdUkCNbPtncyb",
  "key2": "23DVxaNHdkRofb8ULnT56fn7WhWpxtaW41cmpMXwqCqUxzWBU43p4FRfK8RDHgsJR382vcZVBAgZWbSsNHp1JSMx",
  "key3": "2ZZNDVK9Q5FgjH3xGVy3Rng4x87Ux4rZKLLPEAHxyaQhC8kXp2Uup1YwxP1d9fANZYB8dfnxKM7sVbRUzrQT5wCh",
  "key4": "3uZGNaZt4QjcHv8Lf9F4yjwFtEAgZtHfR8einiXLVELsHuXtxxhj2y9SNTjH1Jb1zidKDTkjmaMpgmp9aPp3p5Nv",
  "key5": "3m2hXv474i3uVHyHjzDxWHX2WrRDReSpoJfzKrrQN7VZEvcN1CraPFwZWZ43osNBx9swnvAdBAAiWS3txG62qL5n",
  "key6": "658uyctnn57BvK9xJc2ePGkr4KbA5dHpRQzJwSYQbqLLyG2e7RirXbCP3beU1CRBSyJuo3G7cFgPqwebDHbwR3JT",
  "key7": "Z7c4su3tazMQ9KNeUYTzzh8sz7tEFh9tkpkSnK8rEkqgd9TGTcDUesC934qcrewGdnEXhEhbRmMgD8LksSYMWVW",
  "key8": "5bACM13F7sTtVCH9bsWURWAyiebGMqwrBpHtYFTB7WND78wWKLyRPUyBWi8TXgxEoBwS9B5w7QpPLf1qyfKhf1VN",
  "key9": "6VVNPeV8N3A38N2UxWs2yWVQdDB7s3ihB4dAZ8DMNSGvQTMNchaaBccaiP89tKcrKhrWPnyBgtx1SJJYhB27Tem",
  "key10": "2fvUbsAJn3sQvpDfmqkQhuTEDHJ3Um23W9phiDK9WDmiNop7J8y7FExixYsCo3pFMwsq2RMDjvK3za9CAwPPtYWt",
  "key11": "3tfZJhUukd9XNX5e6QjYFxJqEvg78x4P1rQFrxqpMGg7vMFBU59grZ457CVnGtTfndY1FBnUQu1UddchjjwN7fPD",
  "key12": "2EED7TjkSNivscLXvmpAoGG8KFHFu5SCVA7Y3PaFcNDEAFdKsmjK4rtDrSHDGW8iBk2Sh3D8mMGV9H5chwz99uKc",
  "key13": "2guTszx9ZYJ14Dr4SZDiYWTvhSQxk3rd2bG9LiHDPSe8BaNmkta1z9DazxUv2F5k82y6HrR6C7hyxMeCMUVeax4L",
  "key14": "4khYfmaVxRz1Y7KycCbWnHoBu1HgimW8eQqQtxkLRxAKKAAQKxfeAPgr9pAn6FeX1UYaSWiqBGQD7UxfdbnBn7AX",
  "key15": "4p5gc7bfw1idXzbALzeBbzSgmUgB5XMuQ4Xx3PVwAEZckvdQUz4uvLRPkQNW3NFZ6i5FporonfxDCeYQdVw6D5mc",
  "key16": "35BN1fEnP69yP4qUmiCcYxwCoDVeDWezKNvwVrqeGJFVFJWM71aVPv65sLHdgBkwgVYWXdRorRPRUFcji48vJQ8o",
  "key17": "5bpYC1P1YZCpLfwgibsVYhN4zNeAiYvTYweUjiQSmPUDYj7vASDEH4tAgpzQtH6i9mScjFBq4aVNLnh5WvhUiNZc",
  "key18": "4VPhQiCcPU9vT4HYydhi4CwJhAnt9a3RPJQuekg6QfxChntiEUEgiD7k8foqAMuWLEz62bLfKw9DpAgwxL5te7ur",
  "key19": "5yhcnGsrVBSKWXJZ3oBDfve5Za9625onZsFYHKQ1UFtGpL3WqDSBQuLUHyc3TSj7Sv6AaXU76GmkVeCG8xECp5Gc",
  "key20": "3vVPX7sRGtTbk8JA2hJfxBoCothEqKbNm2nQA5tYFZAHeSWLJcq1Lu3utFKvrqGNPa4nBVNPbLE3WkjFRQbTsUP5",
  "key21": "3DrXuzwawxwf8rTbuqBLHS2dhVPTMAAStoUX8y3yoNdRemv2TxAUdmcXYwAvGmU4LxMKVyJxRMRHEAFiqFz4KzJ",
  "key22": "qG3bDyb5cpzERN7twhkPEM2mrQxAZMwak4m3ee6MkGVRo1o8SVvMPkmT5D4U3UjXyYvYJ157Fc9FoEB6Dm5aahu",
  "key23": "GsoDfAJhTsPXVB2qtnHcWxt3fF272ppN5MvXyTCfi5RsGK8Lp8sRiyquvyQa7W7XQtAVcqBCQu99BUUnvGe9GWv",
  "key24": "pbXL3eWCHTLN8Tv2nhoPCzkbPZivPGzAcKYmkwmsRFx9xxtr9MXKqvUNMBkKqCEELszPuBUpjcLyK3VYDbid26q",
  "key25": "aTVqn7ATdmT541CMd3keyszkGEbQqBJes5xpPuFm32GFBaE5WeWBkcBSMKESiY7348R38oC66mFSz9hwGV83kZg",
  "key26": "45rm9btUNFopJnjn5Sd7i9mRmygnPFGYoKiJS7uvNt57YCgv3cpiQSG7C3a1dTeYN88pDf2gxSQQsE6EPoQt8v5E",
  "key27": "4FKZNBBkt28MmW76Wt8n5JH1auYvKx1H9DpE8VnMv6tZa9RFBQokYQsKhv6aHrdsG8o4kkA6gVYuqpvQNgiJgKEg",
  "key28": "3cftG7pRETmXmvF5Mih3TUsMxtL8mwe7QqKjdHdNQQokjTU4txnUCFcDa94EtkEaJySnPFqZo5tzP53ETYaDpekx",
  "key29": "64jmFHoY21dgNz5MXwku51f1h6M4cLaPZaRzUw7vkbNHCdaiTLJfCUuEV9bBY5Mg4h2g62CJWLTJ827o99x8wFoX",
  "key30": "8u6ezRErA2B7YM495ACQamnuiFnhKZ9Qsw8b9rVGuo3hk2BvmPRvALNH5Cabef8RUJNzEJNgsiA7LTuswxUVGSi",
  "key31": "4thYkqL2WQabQsn7bCgVTk65q3cwW9rxS62L3j586gEmCTBhLHGyZV3UDq4s7jED7grknXiR1rrv6i7WmLCu3YCj",
  "key32": "3o2BJbTG1K1bhKXxQ8xqnh2QD2HELbFRhACXfQNLzUTVLf5RiUVfMmhsczTau3uNXdzAeJm2AgNaU5ppMuBqZKGy",
  "key33": "4F9TMYQyQbYmDRmRx1ubrXepcakCRyW97hgisfgPZKKYyW4zkvheb4hZD5AMZrDHgwMq3YAZsBo8rvX12CuHvd4Q",
  "key34": "pqXAmrmLSuBPBCuor6CxXhrgM95E4eiuyWikHjCqEf1gMjqiCBusWctTjzp1uBKUSMFfmMJMULL6RYUSXvxvVd9",
  "key35": "4Q9ipVX6o73MFdWxrEzmf7fBdavGjVHMv5m4omsZbf7HvqX6LweUvSpRJBXAhKVCdFWJfUXc7EEKmYAhkhdGTg6D",
  "key36": "61PxfK6k29RG3HVKoxfTV9K4HvfQw3jawniRGgQRPNXjudDJzPQxG26wpCvbfYP5y1Z2QwxVvsJ9LxTotVCCBvzP",
  "key37": "4RM4DaXMqWaGtSj5dPEnyK6Y68d7AEVTM2t9awhSFofqxCdfgsNrVfm6QFAM4As5AKzMJoTQoNTRUekwXbBkeVaX",
  "key38": "2Wk9izpbPS7sj5is7tZXRFt2ioq8RZrUYf8VSCdU4G1C5XnWMfiGfRnHKBhejDCdE4HxhRc6zJVTikuvGT6igCEN"
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
