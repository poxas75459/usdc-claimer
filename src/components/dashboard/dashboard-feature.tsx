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
    "5Q4BfvFxQcWQM68NrtoQF9ghobm6hW3e3nJw5bLKeaU4Pes1M77Gdfx2s4Cc42AjNnTUBsho4G9c5beZLn9McGtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4vDT8b7Jzhs9HFoQVTT3dUM4WkJTVfzrhH4rC6Eez8yZdN31in1RLTQdh7T3JQhfcQe1paJ2qreQKYkBQuCXtX",
  "key1": "5GthnVwYetmvDU5ozTXrW6uZKC7mZ9K89wzLtJpZwFYeugtuzQ3xxyJiHyDJyNPm8upk3AMpVPBsTJ2roYMLp6xd",
  "key2": "3YeDe84zgGS9AzGRuMEQsSNDK14VNqDkDuPKrjYyJqShWN6QZHsUhHWGV5KJFDgGiDJTL5bxA2TBPP8LcYYpepUv",
  "key3": "4wyjxCBueo5UMwLScKNSForDgFS1owADmwtAJJj11SkaK7TLoh2Sxh47tmWhnQAPDCyVMcvYqR822uuUh4nsktna",
  "key4": "4tW5d4LZj3FckNt689cLQNEATZQWVcGm3sev3vp75sX3q7b3JiCcmY5dYBGrHwAP263J5ddTGuXSaHr1NZyMioe3",
  "key5": "21JryBaLB2oJ9QbddBLQkMzD66X8c41N4c8EvDc4dtjfyKdU6JqcTgpaneAV676CfRiLUi1b68REbJXZXayiUuvB",
  "key6": "63C21g5HLSLH541fk4G4EA33CKmXCZ1ffMsgsUUmDf88yxVuJSPCmeM5xb5AAiqJeHMrBNpTHiCB2EVB7HLY52cp",
  "key7": "9hpaZJoichwso8K18KeU89XkjTtQph16FP1QozGxVt1oCSmfgiq5EiUiCzxRWkPdnusH8GWP4bi5XFj7x9Ur3RW",
  "key8": "fQrz3PeAf2ehej3gbUyPChF6x8xaqPxtpJqoQJf8m8wKfeeigjQYgobxLvjnsCji6mfayB91a9ktsjebrq37aqp",
  "key9": "K9K29SPcbSvgjCfs6f9zf7vibNihw9fqN6A9ZR6Hongr77RdHiD6Cx9SQNnC85zTtzAz4xmsWEnJEAAn3XBkjid",
  "key10": "3TSoBobV8U8ZUtPVY6Gaz2vLRJdckx9bLDvBhyropvDJMUXE5zDbSLZUqMHgrmZQ4d7bNFGLPzneUwvqe2uCGt5u",
  "key11": "2W36wAUfnzNNxtJ5shuFzCjgzVqSAvaGMmdzZ5tWPAhXUMg7T4Dz3Fmx2a5MxkykUSXMksNKCc485kxmf3NUmhKk",
  "key12": "5YwXuF9KJQZa1Cj4Km3Lf3fqVtyNQvq5NzmbwR7XCnMorCFAtBB5tbXitKZTcb9dUszkvxvteE9yuJAJrYrv499s",
  "key13": "4dQ8iV2vU1DWfwf5d7E7qq9Lyd8bc5bHjNMLT1o3WJsH2pTDv38Qe42M28M9ZFyPb3F4wZJwKsTt9wtGzyRR2B1k",
  "key14": "2aQQiaCwJhw2am65s7QZRfyr1FbhbpAptytVQkd7bqdjwMYwDFmKqMMbDySDaCm4fUARYS5hbWSLnTKZsfojKifi",
  "key15": "4s84LN8EWfDrfmKFBGCWkg6AAxc1KNSoEmTtwjEXi5tDrfK2ZbBPNXRWsd4UtCr5iMzLpuFJt4sRjSdtasTktnsK",
  "key16": "3WCzagdLPAWbrYom7D6u2WU45zxcNfaanpr6pi6mmXRBRQdiNf7A1ujy3fghvqRXWC1V8TzvkekDiuehnY1MBzpd",
  "key17": "62Fj83CXPPd9ayAFFd5LjZQ2uxJzgbLM8CWuAZamHH8ohXiA7xRsnN2WYVoZEf7uxH91qA6z3sMgcsFAnnUZJGM1",
  "key18": "2AosoKkUBvdLUmV3LHZ1tzXwdqHyEh2Qq4B2j9fbGVjzKfcQT55JmMHxSm6JtuUSVVVyPVQpaXDCPTvhsbycaeCa",
  "key19": "5kL9WfaZjC8Ru5fh3BAuagX98B8pcSe3UBxaXTVJmmjv6SQH7Gk4h5BfvCasyqb1hjzXBCio4Ha4inXBdZ39kJND",
  "key20": "2wS8jQZH513Ebb74QmFUU4BHXyztoWezEsYg9DPqJNx3xuV87hvNF6pqKzXUNZTNUEwkU3uT2vE3UHVJf9nM4LYU",
  "key21": "yJZCeoHtuhyekyDS9Dcu1AqGq78aBpWqEueLutyjkhinieUWa5qZVMXqs3fawmyNvNZRgGNoWowK2veBHypajYZ",
  "key22": "37Lbc9CgtsLnrkTZk7ZPUesiazWRoEfLXAmiCX5e38hfHD6mDCNvqb5XNV5n2ML2GcymbyYxECyetj9HNN4ZuNo7",
  "key23": "5r4m1fvV4ayPAzyrdfD9vLGrgyWB5bUNc5ZXdUTgH74chQE3vcvM6hNfpraVi9o6diPW4HDiTRUK3rseZbm4wRGq",
  "key24": "28yFy4KWYS59KoPdVybUQto2eBZMGAFacdCB6XBhmPK3x4G1RJn5JmAA5kjvBSEEdgJYW8npardfmjWgt5qKVSeJ",
  "key25": "o4aCroAu3LEEoQ5JKCM8vWrQ2yapm6mtg3w1uToGkSP8R6fkgr4nebcdR2boo4ok8PTyasWNCQsk3fq6adqLWh1",
  "key26": "2JHdDAUrh8m6cQeuDmvhELv2Zg39zhHyyoq1hHeT7iR1ZWxvb8wdq6gsdW1GqLTSqu7JJyKPLKUBfnzcudBo2zS3",
  "key27": "3bAigThAL4NXgmE6jPKFbB6J17xAcBBQAB6bMThnW2UKqnFSUipm1Cusx7yF1pBKvraE3b69GUbKBKo36uMEWEPf",
  "key28": "2zTCmg2HQEs2USa2gtBXCDaViY8ETtWEHtnXc9kHmqeqs29zqHGgPCbHYGzj2xCuFSefGKmC2YtkuCWXHcLz2ucr",
  "key29": "5qPCdfH5EkT1D8ek2uF2uP5md3UHamQQVMzAhhq2WkqjcJVHyqUnTcy18d2g6zvq5HbjV2E8HAZXq2BkTfJkWQaV",
  "key30": "62Vd1tCVmM9epVAPLKgvLoj2oNMKpop57jjPRbTFBNkT2n4XpHA5Fb5FaMwkkTh7sTwfAuer1jvrfKDyDzh8Ctpg",
  "key31": "5iDDgsy6eG4jGK2QiNtNMpMkCqTFA1a43TZXJRpRhPHLEEKFdJBExLgwMSJR3rxqMwH7vYv1Bc6c5EdyChkpCYjU",
  "key32": "28SuacqYmrmBo5XVnhpDaXDsAMwkX26fJ5Ccqik7PkTHdrYopjJEKkRJusZEgA9uW5N1zf5PTHi3jWmJVRWqKEGa",
  "key33": "YrxfH1i38SWGKwgT7PeJ78zG1RJSavCcMyTT2rFL5DoCVcoaSYXddNbQkuf6ofaRgyteDBWw2xAnGJboX6Cjykw",
  "key34": "3nhWyAwJvV8FtBLbytDi5PCVeDHUyhQXgpRkZTakSRGwvcNrFU6Hngp2HbDhKBKeEAXqrjhrMR77mQfsMdi4nJFK",
  "key35": "5RPBHftKKgLxAJXnZXCSd8Z5ut8waPUatQuVJeyTr7BmR6c9JuRJiUT443cqb1oqMawsMNsdrTCVjQVN74zHdrpK",
  "key36": "5vAzD7j1Q2pUzPokSiNyFUchmpdhwuZXZzdxUo7YmG6UBzzSDrvhtYYGBhbY436uNtx4oRwUPgcb2pBF2kuUmSMz",
  "key37": "iDkKhW2sWa4RP3hUQFY7EN7ehCxnGP7pCzw7GarRErTNUekPKbTtT5hVW475ewwh1TizfnpgosK7NPPWnh7jbb9",
  "key38": "4ivMFBsLU9S3Pvim4CWTwk199JGvxCRKzMQxWZxoiqe3ndSdqEHWyUpsrKjpAXXgvMkpzzjDKgXYDQgM626sMh4S",
  "key39": "4bUdvJzvuvRRbdc52YJWKdNU4yQv5PbyVusG12tcc4Na92gndVWVTWBkCpTGba5t15zcmv5aHmbmqGj6oNBLha4H",
  "key40": "2gDrfXGkoKTWWy5Mtf3qKeTuvNKQYrUNE6PEC4NmB4kofPDadKmVgSF5KFBuDWGrqpvZFfD51SFDnbMqHYGjkQnE",
  "key41": "2yKCLE1FiUzhpA99F1GrKsVJPZ7iYAwXbmAqr4tQfgC8bCg2ifEJ2TNTwUFuK1nbxHnWiNkesniQpDtpqFnAaaAr",
  "key42": "3Sw9NrhrcgWtBhjTZ2DX44MGMDqAwYTddmEVj4Bc1xeEvneHEHmjZ4LrVZ6itxVKudYYxkddqk99WP5ho1HeX3gR",
  "key43": "45xqqtWYaUCvpFQmapuBBCuAu8Mz5tbH3k5P9YMXZ7uuhek9ownzkGQMw81siiUqKDAdy1S3v14UdNbtaiEMw77d",
  "key44": "4DU6GQuoBU9aZTd9PQ333PQastuFbNknueXUv62EAi372H7n8vamJvwfasQp8rYzMPFGxiD7AH3f7NK44Gpa467i",
  "key45": "4KdZgLEokZuzW9JSvERWP9Nd4fRvtpCD27Wn9RFPNafDc2ursMFpUVNeFwJZeAqJwpxEB34zaKcY7KQB9CJBZvMU"
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
