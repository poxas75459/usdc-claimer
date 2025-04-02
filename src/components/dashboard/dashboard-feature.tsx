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
    "5W1uFwYXchXnkW8Gi8Txda8Fiqf1pRphLGpBHzddgbYhaNR7putsmYH4WrBtVmAxWJ95nRBBZZQH4WJ3rZt298wR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7DidDmquMFpnhsyQebjWgjRbiX5mAMuHR4CecJfaC45PcR5bWHF3cZ5P6WqQP87CZX17Bsj14mshYe8Dcb4U2C",
  "key1": "5UETqkrxh2GRSfaHLDYDB2AXnMjp4c1dXiu6yX6MqgQTAmK7QcRyc4Z9A3y6ZCbvrGA8kDLSAMBqQCcaZiudG8qE",
  "key2": "6WTm6VbsHPGYw82dqWdinzFCw4Drvvwm9o6eNraW6xbedgZzkJvi5j18RE1vvKs4Na9tGyRNB9RB5PX8PSrDRpk",
  "key3": "61EGBCAjkmPHwrPG1YVh2QMwW2QX2cACcfrrXdRfamWyEZSrAZntHZ5pPG5eFvBgSDJAeqzWxCgJw48iNvrFgHvE",
  "key4": "4PgCjMkYNNxxUUHhbTwwjd8jSqVX8isdHYYSSuHEVEHiH5c8zjDXWENQSZaCTikauYP7Tb6GHQftKqZ6v9rQ9M7m",
  "key5": "2xZJe5ApAw5bqeZunRYYGWsSaZ4u1PGPw27zCe4pUyzTStcF18vrDNPi3zabTYxRGuNzczCwYzJjKYtP215zmLAR",
  "key6": "2Pw8RowgF3dcCAToUoC14dsn6cfLibLcwwYeKoVMnKEqLZx6mSPgSngfB8Ca7CbNyfnw48Jc9ynYZmPXp8B3PeuX",
  "key7": "ka7pHihxscppGiTwWiBi5gQXA2tdWyJeWvpqNeMgBGZGtEavcn1ptfdFa35nABTXw2id6nztGXTV9nqUGKRW6vH",
  "key8": "5T6DpDZ4276PH8A32TaBLghiQMbTv54bfmi5AypdU1Y6touRrGPAgELrQTLcX2PzZXBapXzPiXMcUSLezeqk29Lj",
  "key9": "4iZnTNNtG2jHpPKWD1zqeMNJ1L3HWiZe286XtQfQdu1VVuwN6hyRfCExsjBJdAf1xpSVsYZ18iX6szyHewKraixG",
  "key10": "3DXMv3V8SN5LSUZgcLNe8ScLREiUZ4CN8L3KMLcpLXgQVb69G1H2tepv3dk52VdBWqfuMpJpz6jy4Y7qy8okWiJ1",
  "key11": "4QNL2ZjB7HLAJFLBkVWMn17sYCTiCBUCehT96mE6Uo2VTQc6DTfANNnBSyN56Sd7KANQ6QumVsEX1i4s2g6tyKUT",
  "key12": "3VwrFr62RggTubRAsAjQj6mLtAcVRPLdZZT32bm8WvLoM9oMgZv9uH9EbWouaAWGePyz4ipFvikHTmRJTNq2Ye18",
  "key13": "3i3yykuGJk1VdH4mCf2RXHDcC7bh7GpE1mCMZSF4TP4KP97AiCkSSTfNdX6nYmUwjhU6wwYXAnQxdV7EZ1TqMxnH",
  "key14": "4EHh6mGhAVZ4vKNpT2mB4QwgiW9ncBEeq1M93fdmodkBBaytLKab6raAELFRVSfGhjsk1jMD7YheMNSpnJao5FN2",
  "key15": "237sYTRtvxaNRk7V1tYH3zdN7NLqpg56wtAgYwR61UFAtnnBW31AbuTaZRBL7WvhzAtLojwCwCr23VhZD5Pb5gtc",
  "key16": "2KqkezSVg9DT2MS5GijeadeS3syu4jrSfxXxJSbrLEzKRGHCTg9dUzq946t7FXYFrBk34Rz9BsdfqtBamYXbGQ4b",
  "key17": "5bGGTKbGF6QFFESrLb5qatsZczSmBx3ecqg6srvH7HRyB4iR4i7sZc3kh3PaA5hCwQjtVL3Vdow451jAS9vAoPvm",
  "key18": "4Sphhs16SUHEx2ko57MmJMaHR6DArQ1Kr5YGoiNZP5f26EbCNHZSts8Px5eRLV5RZAZCaP6bV7gXErQpU98p5UaU",
  "key19": "4EToiFKrLmwrDDrtjNMEXxkVR9nb4sWSXVeS8LJ7mLGeTta5kkhaBPwDZKdHF4hdomXZASivuZ5ekWS8GSTGpyo2",
  "key20": "35H7GB97JRhBzcK3qsc12YtJFNSpMa5JBqBa3gQRVYTp4kxTLdnEwugUcjv568AWXxPxqy5MiFEPJXtxsJw7t8pp",
  "key21": "2hPFW1MQrt5qZ2Pk1tx8Tnn1rcXniEf4R6SLyzXRf55dErgbJYbVmEn7w1WjJGgg8rQWT8pPDKD8ddxbQi9XxK71",
  "key22": "3hMxiGxbxYMLCyoBN5J1gG8TL99MyfQ94vX6G3FtAJ3oaJjrxrV5C4zNgVD8utgsTk8LxuSBExjbiUL37N4HtuhK",
  "key23": "3gJpBsKehYATCJdvxazq8Picq1osRktMsBrAS1JHcAiB7HYZiGDGCHbfkoE77LjVx3zc7exZbRAWDpz4k6GfSxcV",
  "key24": "57t2yUgsLTmhjDLZkz3myjo9EyiW2hg8baDFaec8tv9uwmaQAP1JYmm2mSjL1mF2Zp3Utr9iHNHrfVRcGenYaRKh",
  "key25": "4QC1ALEvmtvSyT5TyjuKc7arTGeVcnzoK3HD6WWePF3v5pYjBSneSq7FbzXQaBVEnkhC3PWMbfaj47rMmRz2ihVk",
  "key26": "4XYjTQWGRS8LQV8994jS7BLGKPLhKrGiBFLtE4GoDBg4SMSQuHPBxyRzT3Fqpz6yTeVF1QaqU7PdWopTucS88cJY",
  "key27": "4pSbns8dpa4JnoCueVBqRHqhhfNjgXLoT8ZPeGYdoWQJ5Jc4XdHWfvqGHSXSh2zy2wJc6BA7zBAJD8VPyUiCccnZ",
  "key28": "3iw8V1RZWPVuubMp4WXydye8au9qjqCGYpjMwxjJssVSnYsBNqkaXW5N5rvxb5d1z9dj6bk2xTEsubksjQKmAdJF",
  "key29": "128vMNh9ogS2W6HE2uRiRRPmTGDzgEY6EGGoVoiR5YUgVstaHNjduSwQc3WAMNv2FzCAFQGZToYGzwtVqpCXFnnG",
  "key30": "2HV2qkDXWttXmXP2Q2oDN1DKrEef1eAHY3SZs4iBCzbTrpnQRXame7oV3quUnHQjnDxRUAANDuJQ1xhisKTLktJA",
  "key31": "4eNHRFPpXAbwNXQSNmEnHvYxVr8r43joJct3ssX1oWqxuMsTE2USYDLdwmsWfuFiAoBwt2JFbNP5cabXhYsadn3v",
  "key32": "5mrM6WRP95AUXEboKJFTVWRbYKdGjsQS4dSeGQ4PFncUmvsbJoHCXKMd2kaDYaNfRHH1M2UpnGeAP7V5V7CMcjYX",
  "key33": "3v9ZouEDfKYhizeGn8csYZobMMLkQbvQKivMjU13gZMBPfMXMdsYBk2m5GQo8fUeuBhJjkjjZdvnrFtfctxZD866",
  "key34": "19Y1ujuaqmFUThFoEDiVuh1E2ThDfdFjHvUuZJSCrSeY3nTNxxWGuwhmfCqs7qoFmGTJKWNzUKQafMvEnatDwxw",
  "key35": "ReUaW2y7U7FHwqkuHgtNVzvsx86wHMCpfwPm7XpBaq6ghHSEgHehwPVRjewymckFS4nTbkG9AHWrobqh1ETTq1t",
  "key36": "4nTy5iSSJEfFuuQDPAMimbpFZ5vKeM41KfTBdpguUEUhEVqC6zGb1uxkmub16TrkryxqqgCcckGDEEhQ1wkTDfok",
  "key37": "zrMBUbbdB2XgFFkshqGVkAwjznXGJrrDnjKvjYXdBcwohEqPjpQdn3H1EuzHFgYGUoazuxS6HEFzgiWSksozwZ9",
  "key38": "3oqkJicah8cK5D7jCkUWEyaqmoo9nzdAwHx5N6Mmkz2BkAZ45qSSDxoc562PUtUnC6CPf5ZvfE1MbZMsVwubuBWd",
  "key39": "3ShAwTGAquLZDbg1bB3GDJEon5cuMU8bQTHyEh8ggXMP8azcETnRCLHJ73vY7bKXLxk88y2ert6mEJMBMqstjuTC",
  "key40": "5An5LQkFq1eLET3x4kTVGwjCPNyCVmyvJ8tKKwcVT1pMBtwhUuhmf6cYPfsxFekGshRWZG81xF4BjuDFfc7WA7i4",
  "key41": "YkpTK8hxqWx2nWS3t6arL82AApByfqUVmuCRF92VvL5FMekhSSyxCFVLZCqL19ziuFqELW2pRc3LK2tLe5s7ejD",
  "key42": "GSqgGNFF4byZP8nomcvy9nR6e9or5zwQQf27S1MW8kwvYp6ntC7HWo5aqKkJgPp5QSHW8AWrBBsvc3gob5tXYft",
  "key43": "3Eb5itJqiQwfyD51xPfJBvXvmbrNN9xPA2rsEpCHWCHE5DXAqMqAXz7ZK3p65MjeJHsc1jGytPfzVBcu546FpBQN",
  "key44": "42HwXfmeZAEyiLeqjbHW5ECkuB52cm2J4HvjKuaNaNLpMNPDHKq19A2QihrqPcjCVP88S5sFrhDcsd7EfyWfVTAQ"
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
