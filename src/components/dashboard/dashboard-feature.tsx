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
    "ojFUVJ3Yuv361EtUVvnRuK4zPhY1WAM9jhzgjmR4f2krhx9xJnowxQ7vp34zFfZz7C1GyripgvwBTPLtYKJP3K2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62muGGsGFG5nxMF65yoWqSgKgUPp9DCzuH9J9gLHSGeTaVtUQEHYr19zRZXtMpM78xrWjXxNDdbhW7jFKJkwNV5W",
  "key1": "2EU6hq2KUv1U2Fyr3GBMcUTKZb2f7fNysKCo8JXz5NPr4MFxwdwvi5gZQZD9z57EwAtLiUMWEw4zH2SY9EEAcqHY",
  "key2": "4j1ABLQEXw5qVgG3fBeWZdYbfE5PQNsxUCCdmU4GNUg3cueNfuTNTVRgxh2eTJDLRN3yph11RuN5EH8bxKZjm872",
  "key3": "5ynMaW7GtBQTKMnMEncuM2kmSMobHs3yrCPrU2cowaCdZXx6oM9VNkYy1d3TxYfYGxuuBHEPh7Ennva8EbMKebWM",
  "key4": "5hjLYRBUyRSY2stWCm1Qn8AA5ALzobpzeZNCcZr4i6EEznKZxrqESvfoCw37sAypJ8xUm2UPEccwHvsUWC6ALSG7",
  "key5": "3YKNbhpWGzJX2oDGFuH93f3ELy1YBPhz1Za2Pci5HQfhpXCUwgapv5SzieXy84Apg6G8rnLtx164TpxYDX6aSTuT",
  "key6": "51N99BmThTvjSwZLxSWb818n2CnobsqohgwcmFMxTvyXRZRSn6uT8YMeZRxAVNrxN69sgrNrDur9kHEhCaDfZaRb",
  "key7": "3Y696JkG8VgEccBS61tLvhLiTncpR9XKnMhGYxhmu3bDih98qcjSY4EwRiS2cUTtx3WSvFmPrudvUEKaViY9FXhR",
  "key8": "HHmsrM6hikwqviHd2E2z1G77w4CyzfuvrnBptEJbiFwjdTBtrhaAL3VN8CsLXRyYXKybUE1RvWLsowyrXRnL8CJ",
  "key9": "5w7LyDLPA3yeDMDcGffexBEzqLMDUjUv3tfCSnM1gqjrENb2iJamoK2HBT7Pm4bfnuRU3qnafFaW9tRQEgEMiVKc",
  "key10": "5FGXV1niGke1RQJAr1Ttz8CrCbJPtRv9Sgh3qwBhj7WWkHhDNPxFihLUdsrSos2QQs7eTc6Fd4UGSqtamGypV3fr",
  "key11": "Nh5SP9XK5F35mVbsCCd6Zto56Fs9CQBe8dexA8vVAEgiVc414Q3BjiwNVvFKwSBvE3eLrBnMiEQaGzcHSeCMJNP",
  "key12": "FGHZtkzGe1fGShZFZyg9PoNaFTinAcUwUqaWRCEF1sHfCoYJzxGF7RLCK28v4yx64LS8dQYaCr4nkc5moWwWY4m",
  "key13": "mSnkn8nmGDS5sKsE4eJHn6SNJ3zbr8AsYoW2mD7DJXYzJNeUtqNngzqm9q2BtE3ti6t8iyqRFXd7aRgit5nQ1mU",
  "key14": "2bA1W4e1RrTDTnNvcTpJ6qUQbpnD4qLTKB2oYPSKofpCNt8k4Vaj1yaA4T3sLxtKKupndttEYbuvKTwDW4cdBudv",
  "key15": "27FcBxXFGju8NS3PZMiCGa8AsTtCfcx2GGzNJh69bGvX2RTntBMvF6Yg7DLRcEegSQ7WkS7WGgcsYswyYqxGGhQr",
  "key16": "4xFXKNgtSZpzYTxWP6XB9rvRrXN3F4qYjoWLnHJrnwjCo5UUhYHmxV1Kv7Q8hFC4E3sotY9Yc1UfXxgMvoP3HpCH",
  "key17": "58jeLnud5ini4E9jT3rgqb5bqi9Ys3RKx7c9P6kJvFwRv68isELV3E2iuJ39Jpq4aSirZto3LYkdgQ7VvhL8vJEb",
  "key18": "48BV2k2H97NAHb7HDKojrLWEhr9oVFD9ncKrHCum9a7LbfwuF4UvHk6Pimsb4V4erfAK5wTNabD8xwT6ykanbGRH",
  "key19": "3JYhRuqB5AECpLmAHS8PumAki1MwmQFt4PoE6cqx1w4mBqiEtbMFcrU3Cwb55mMp9jnr8NWMYxueLNVes1yaySmz",
  "key20": "2nkxMggTy3Re23SYoJbJTaysEdXE1XBggNgQUTTtzS1JDnPejWVa8z8DWpAYySraFdPzgzpu5SrYARtBKVLgRLdg",
  "key21": "z5BFV7jPuFgfNF1tnNXA2KvhwpvPLgynyTtBXkP5Vf3h1m6KzKmTBtXnxLpPPTL7AS5y9hwDgu2wSUqUM4y7iub",
  "key22": "2m62rRLuTX8E2cqmSPZpwzSuhLR3oukE1UnmBzijSWJXkSGmHBUJnyajPFM8GbESPJnLYwZHxaoZb8MVn6AQ6YLJ",
  "key23": "5HGpSwn7kBzwdZAG5vDz4DAao6tgf5p3nZWUn3kPeMrTrgHGQEowFmgLbCmWPNYTyTV3HSozWVohqMiZpqPXH76M",
  "key24": "24whHJMsnsUfPgjxZPsPAZ5M7MnRgzTpNJbucM6jTEU84VP6jfKy4RKSNXqwdnSNL8FYs3e2FnKy5PDrAhbJEid1",
  "key25": "5coYYCvJfTUQDAMJbZS9VwWJzLKekFTnmcrayMY2gj2nAtJqJVXiU273XeFXHgmagv1ydARfGXSrDSZc1oe8mDCJ",
  "key26": "2Kv1afbrBtcVeM7G7LAR915xje74wn4tm9DxEzCr3LgKuZcjGYbJX2HJSHvkZnWRXXKKC6FDKbkQmUMrEb7U21BY",
  "key27": "2Ev1Woey8s3QEXMSS9wfeYsMH878Bfkyi4xa7QtCC1YLXyomDQ4S3xiphmyoXQksfBywY7Vu4YWZYfCnT5ZTPK62",
  "key28": "5B4pK2dCxBytexpVr5swt5dbc8YYFPkVUFAJULLAZ4ZUhMAEe2nXAkPCt39pn9pE8ZUajdLTFtjCxWMgYL3n3bZ2",
  "key29": "4fT2zCqeDqtojmgX1GQA1cx4gHvcwwn8SBpWLW2jzrXWfMYXHpLncdrJ4y1jddTn8DjsDHjp6X6z6N5GWapWLMyR",
  "key30": "51xhNyV1uoAXWt1sMKmhdGdMcQ7xsxYgiq7djtijogjN7jR9KrCUcER4qh49kgHQtD6DvsNUPLECpsi17rcHxKGC",
  "key31": "4GpRchDVjquk4HRseKoTGs3KeBj8CSWhCj2EzDzbM3K4jGSRpGT46Ax14eTjrVpRGt6DttaAY9C3beqK5cTW5d9E",
  "key32": "4Sn9uyEMr9tEGQxyPEBrP3AeRfusvu1TFd6QXTwk5ti2G9eo1SevtomdTrjY6BCp8Wajj2NzbKNpBnjKrFM6MNnP",
  "key33": "2AYFjjXBTRNLYwneTRAWm4zmnZhQAuJdPzMZY3zvsaZJXEun1GQpRsWobKQVn3nChhT4qXEdiss7SVQssSLoytZw",
  "key34": "66qrLWPQdiL5ynWbG7MpmU1kBBwtMi52Eak8DSYCDaRxPGmSi9BP6vLHL1RdpPLE7LoidXitLnqTNYx3wU5nc6vo",
  "key35": "4tqSAvYrdHwS5pbUah7NkMMj9SiaWNz2ip1rhSXWKp7A2pxfQFpwtduT7TerMxf8D3qhPQDg2MtKcFHMC3FZMsTT",
  "key36": "4nUVdX9xji2QzQStD4snNQ68pYSV8UxfHwzLZVkphBbmtPZVjVD5tVLBcnY1TVdHp2aGgpHDk6J4sWFUX2UEvuse",
  "key37": "Ph2Cbnh6YWpNbB8U28yPbKaFMU97B5p2A68YYzA2saWptRPFvyerDgkwav8Jq1vb6QWvAFrCA86vr2E6bfAh2BR",
  "key38": "3S8ZbJFy3Hx38utwM7JxDPvruJX1Xs9rFAn5qMGJBpd7KPapcpqu39q9BGcK1MzTT4hXj4u2VHZAqW4TjCpfsJ9C",
  "key39": "T2mZtK8T7TwtGWoJb9APH9MXGD84sfvgKwVpfdqsBHB2JWv1ThQ9dArqXH7UW8j8yNZXKQdWhqR5CMGTzSTvowf",
  "key40": "461U1qDCkyZPBwRnXJX7PVYqQMuo6aud7CTpbdybpgZgxXLJsELwpMikJ8xaRwRAGqFdGR8i3EZTXDVutqrmEkTe",
  "key41": "5kkpBjpgJc9j4xL7Sa7VBSq7qXNBVSZRhXG3W4j2zk1UTK8VHTCeVBCLykoV51NBnf868qDdnXF4GtN21eQbjgA",
  "key42": "3SGAwP2q8UYtfe6rRAqjmhrqDcscZe48vRqJoKdCLhnFvDwMTXJhXPWJ8K9R6hNUKtHsgN5vwHUVGEAi5US7DTBL",
  "key43": "9LxrPCGc3YkvkoB1HPacBRtykLFAq1qg8YGb6kdQQ5sFBB8GxeF8dUKagoaPr9jC1Jk4c7vvjB8VYfqHmYXhcSY",
  "key44": "3oyg4mvra5ca9nxF4bpX2TJQio7KwR1ebR19mLkybW2ewAEdvva5Vy2XsWnxcGN4WZbLUJBkq9Jm2npxAjmbru2N",
  "key45": "5UCoh2DFLvJU9cTqYSdHGLibrpiSMyF9jSKqhtHWgTRR6sLieqzbD8pyoMM34fTXDJwc1gKtAnN7cmwEyRz12DTM"
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
