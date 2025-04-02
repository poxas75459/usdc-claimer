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
    "2Jx48y7Q2ZnuwMUJrtbFbNxeQmuL2sEPkVgRekJSpes2PZY7N8YWne5ApL4WgS3R3P1rdKioZLCtAbYFchHMn9F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGEU6nCuMJVBdxHDSzK4o1DvCCDNF1Bcb32q1uuZjQvPiKaUn1WyTatfwvF1N59brV6xHDYARdyUSNvqQQVKH1q",
  "key1": "4MheHpQYiqq4RwV3nfLqTNGkKkBMU8xbd6XTzi9QC9QXoRNuPFUamNCVbrf81WtpwbSUZK4SzZeChmRfYstUJyFw",
  "key2": "yAfGa31Kk84SZG9P1YgebNVghECjfTUhzdk7o7rErjkLPq7mJu4wTPCiHY36HDMLC2KfNm1i9vEZ9LoQ7zBgZRE",
  "key3": "3xaBBdQFYr3rzQkW1B8j14qyWut4HJGmPipgBRaE943nZcb7ZgzyPF96LLnbVwqoRPJAkUgjKmo2SJtaL61SbLhb",
  "key4": "4QEJNMSQrEDDPJwfATJS5DLnTcUwHSQecmscJsYvGvZyBPoYhufLTWaR5wLiEH2qRDTcvYqNhpBmgMZ47Mmvqr6M",
  "key5": "4hFaCkFbdAS5EuU59nYb8yPa7TzXffJJsjFrBVn42b5ZbKtcDj8u5p5J5RxHjE3mrsJKPrYX7gzWse5odgTT2TdG",
  "key6": "5MwuvgwZZMbHjsNr8LT8Y2M1Car84TohwnXZ8tajYpjaHvh31wSv2Q7k8SfuMWm6TUU7vk64M6QMRi7gfzWJn8Za",
  "key7": "3UYozpfDcGsoW8t6Wr73u573ktC2QCR2M2QzaQLdaxyPwzp2kbg2x7U9LGdSa7iWscxQgKpBLtCbr933g9tZ2Mir",
  "key8": "2tP5tFjh5ybQafq6hDPUMTaUmSEd4DcowTh6FkRyZPf3pzeNwMdCSdZCG5bM8ysnobsc4YvazvBinyiFrkCGBnY9",
  "key9": "4yf9hWEa1jpwiwEfwRacy6dGJoy8tDayzKMfHGbUBgJ4iBux9KXxa7nDyJcxziJC6R5W8wzzQwfUJx2YHqD5HQz5",
  "key10": "29Qp86WaBFxshLuWEHZ93qhaThCt4GPrMsptyS1xcKZJGCV5gjvPH8QmqeCaYx23V75bhDxAWgjzQmThNUgYxhV7",
  "key11": "3KAgAkT2gHfQY5Q1TRxkBJNFY3ULC4EPUjVmkd9LGPRYD9GzquUGZRVeZZUS1Pp3TMZTP7cEiDtPkre2tfqJZGQY",
  "key12": "51v3ueqJWxvR5qEj8MHpiZ9axNmfzLZTiDnnC9zWR3DNTYdFoCsNDXZTt9Bv29XYVyFp3ffsKEGALq4Hf5ixrxqc",
  "key13": "sotXtm6o5fYNtpQ9eM1XPcG78yv4Xe1go1iBrvUowFrV5DChENW5JFzvF2LsrRgCqqhP5sxV24baj9ZY7JqKMJN",
  "key14": "5wmjtkYSumM4uUMXAut1SwY4onKsoHWW7DHc6xx2eDv8U7U6zkCcdb4Lk2LvYbsgQ122Lw9tTFZ5kfud4z6QC7bX",
  "key15": "3M2n2zWNqGBok3f7sbN8MBsfPAfJ4gkuzFKL61YcrHtBurtSMsAjU7b7pCg7FL7BoGvcfKMGqXEN88LjSwqhHN33",
  "key16": "44E2fUSWnmM9crkmhNSj3VN7nPHpWetPqqSeTVovtwkVUPYhAjEgmw4vc7iV8u6wDvSEGCh2vxBxXYHPX4eNUkPN",
  "key17": "4yDD4XKUP8FM3W7GrqM6J4TiEd3mCh5YVrYmkQKEgfs5VdBjmfoEuPvSXt5EbspRhZut4PTrTiGX56FbzdYhhyD9",
  "key18": "5242rVct5rzoSGK2JNRLF8KQVgaKxhdbux2CmXbb45tCSq4KELhZ1xgmdPLice9iYTukrBsxM2FL6QnBZETTtHha",
  "key19": "3VsCJpzpxwUK9C82MHiAjdpHU5TRFpsJaoCe1hQmPo7tUPswCWvdWuMgpMQSKcRibWQuGkG9WHeVhARThdjo4XEE",
  "key20": "5hV3LFFevKGLibpvStqMBPi8vHDko8RwbFTock211wmNxprHQM6qNkc6ZMcpo5K9TkRSBWGCw53vK4FMAHEkCzAi",
  "key21": "4xMbf1XvEZmNn2D5eCeLZmys59Vayu3Q61xaKuRULu5Rr3Pnajd3hAN4jeYXb8m5FEuYt1QMEsKK4Un3CJruFEds",
  "key22": "cDsE5FJVSYeHhUUZ3LSZogNg9Dh4zeJJzRrGi3jJsGDQ7Rg4rtrQiN7nsWoNxJo9aKJB7oJD1pNdrwiQ6Xprtxs",
  "key23": "37kaUryuBsu1BYhwvDhivAkaheLBQy53Ew9nYKS4CLiQ7mvYVbY7VHTaN1UWmAV86mv7GPJY8ck2GjnwTtCQQHny",
  "key24": "3j98fGXxR2Ycq4kmZzpbnBFfX5cYFj6LfjQU8ybfaHav9XZCrXxgV3UDwLDjzPyuvhMZo4EeQZk4cYHQG3EZsF9Z",
  "key25": "5ts8iSwGbuA9sge2dRNxehwqpaRxhL5GEnRYGJkxDh38E7JCGDZCMVxfZVvLVPB2S7t4dR4tYcLoorjm5SrHQcMD",
  "key26": "3QrQUa7ox1CapJz1rg89M7q6vGfAn25pjDCHSAbRrDsmJ3L58fusCNxLdW2eVpVEDmL6RyccgPtGiETnk4Zxgzrz",
  "key27": "2bdnmGiqacznaLh2ykSGvou1DzU2kE7r2cFWjprn67aE5RkWN6ekgoGQ9sGkR7br4QUDFUMMz6g8NXpgqmSCvcbM",
  "key28": "2PcvEoM9Xx2p52WRqFbRaF1FGaR7Djq8GA1GVAojqE8sAFFCSJ2bZPGRsNr5kMMZXfnFPaoNaLRt6GZ6G3ete5Rw",
  "key29": "48vfT5nsxk2axZ5ioEp1c43hM86KPEiTq16XwdJBQTrudRtCiJWnWLGREcTRxcKfge2LR7xwJTDT1ZN3bGKice3j",
  "key30": "q3d7jvmTCantAjxSuoFTz3asrPerq9YsCh9L6uXuzzYvkp1Dn6fRA82oYyMMmd3LWhKKvDU5nwbGPwYh47F6zLa"
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
