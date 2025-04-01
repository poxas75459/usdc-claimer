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
    "2KgfaHL4kSxT9AK3haKZk9FA5RAtG2CvNEX1bszcJEfm1k5D6JRnZ83Noij4SzAUhBABH2sjGmHujvREzpDgXLc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cQ41LWayCsvFnUdS9tXottMUMP9NKBAWNPD83iZxwM73DUuGivQ5W57urRwroREfjZommsywAAN6d8rM7tDZSWd",
  "key1": "pUEiGYrCr3w5BEbTg9WkNEHzrE8ugpBvbLyRaTX8jU1CKS9YdnV53PrXnN33hLsLcRkGnfyo8sK6V5JU1F4Nrv8",
  "key2": "2yhBYFRVcZ2NeouC8sPY5rvqHo9AcRc4mu1MAYLibM7zqHRZbwP5CcPq3Jf7zdTZX6SWFswL5iLPLXYpK555etbs",
  "key3": "4NjsguXSGWUxo5BxhW4nuvr9vU7TxoXrXyoZhCQ6w23XynEx1hF9s7YfgJawzaECw81oRZoCXDGAJp2FPJX2oxpZ",
  "key4": "3ShmguoB9A1jHENiUAFxuS2eWh5aqvb9uALgAz4SHLc1x1Y73iuRupCeAfWc7ZgaKqdRjUJsSg5zNFMZxbR5QzqH",
  "key5": "24fBLaC1drqnA481ACZ38JYwqEnydt2MQ8CQqEf33zHNDbBrvVyR4Covpam3yLtKpctL169jXAfiGwzqcjRBPt53",
  "key6": "XV1nr7xxpfYqXUwmL2C8CnPqwKYzDaDacbx8Vujg2Msba1LWijBjT7e5sUx9P9e61EHUTPQGR9rbL75BahJJxAv",
  "key7": "23kUdDgxT51orCKfXhcbi4eSFTZF6QqwD7KVcxVU21A18uyvzwB6AscFxc2wqpmsNb354uVqWE1QSKRS8KkqYDij",
  "key8": "Mw2htLxRRZT4Mb2N8AYCv3JDbH17EHFck4Y64sEQtzeKkEKdPKzEDr6YaBueq9KwQEPH7Qj5JpbdghBqnEYTQrF",
  "key9": "5i7fzaGi36HCw33Lz5gPGi2L9jP2vLw2xESMXYqfhsUT45sSQpd4FfZfSNrXCqG71n4KTKDRwJDPRCwPyYDMFvwA",
  "key10": "5sva6q9h2pBBNMH26zE3UhUNGQgZSGsGcTVSu8hD3N5YYGfBA5LdCUMiEKwG12RthWUD57Tv4hecmVa2jD7CCPiT",
  "key11": "toaVM55hR6DyAbLpuE5P8L2De9QdTcTGywLQD7BsCVjfxcajLrNr8BU1HP4xLMoXRRvFZxvVcy3x7ZMPqLEtayb",
  "key12": "26HpaxzkvvwzNzankr9cibSLKzSCoAy7MUsZvKsdKdvueoCUxMJfuiXEHHfFVfEorCmojUR8SqUAZs72UVTxJDVV",
  "key13": "3gT3UsfyueVhozMa88N4fVQ1FWidr39ASX2B4HkMbjoAyTxx4BrYyPby1T3ufAL7TBcGJTxHCfi7XmEJUeEJKVtS",
  "key14": "23UKxwttqY435Nc63QC5Q2KeP8RUZfDE5gmardyXVaZ3cTSRGz3XSwgAMXeHA1eHVDDk6UATFsYXa1ckGyL2Fcwz",
  "key15": "6vdzPpZcrMQKYaSA745jLmPuUujGESNsMXHLm7DdFMk5ya76b4pHaaqtLBNqpRaurGYQPPzqMrrcMKt4bFkKA1T",
  "key16": "W3TC2kSvgSdLEguKNWrTPyvG4jBJLtNRiQLWQHDMU24hZtoDfNMD4ENx4jnNCdFSzdbm4YBfzWBt4RQcmLFYAL1",
  "key17": "33PfrWgs8vqrzZyG5xy8vsKXRQHYUaTnGwSQBPGDk3ABKyXQvrBDK8pbFxX5w2xvWH1vGRorvt1BS9WsYoja4Vqi",
  "key18": "5wyUA6w9hqVFvHkfZsjgVT6S6nhQ1zNvYh2inHmVuPfQd1U2336Stqm6yrU4BGn1BoBLeoDPxR4twEE4kzdHNnPd",
  "key19": "2orRUxcGZWah2WVg9izc9s3zsZkQnmUYYqWsEL1ZviaciWDz2kd4uCzAq47ZL6ftkoL8fDbExn2AYr3LARwB82Nj",
  "key20": "35J2BMos4hpb19K5TS2qtvwrrDfCLUtPyW6boE5qJQKf7KjMPXsYKPecciTycL7icKT3s7XSvR7b7AwUCAze7C8L",
  "key21": "3ckoBqrxZSdFkEFWJrNqvYTvzwrprMqJ2xdFLhHZPFJAa68HFaa95Lqc3N7HieMUXnK7WDYLXoqxMmypxM7CyWCA",
  "key22": "jHU5L2esXEuUny2nEpPtESozdF2cFAR3MeU8kLaJaCPFx3pMw99VpR2rBKsG3uNwGfAq6FtkftLJWu2teJXo3Wm",
  "key23": "4ppJT3e99h8k8mqw7AL7Gd3sp5BVHkbsjhnbQ4KB1r8TLQRefwQxJVoNvRyTGtTydDFGALrYnExioPcPLM23AtU5",
  "key24": "NmK34mWCjR7UgkGrZeXZwnfbPheoyHJu9pLADQ1R3Kvknv7XpgCo5QL8yyRWCWuK8CqQJFsmn6ShH47YGyCaFpq",
  "key25": "2jh6CpYZiPAUatLLdeH7hpuVZX3WugcsXg7FwvfutjGgmTH8zzjcCa5pdwdZs6Ez1qV7PtUyEtCDcagYwwj1Peuj",
  "key26": "2LTiHtnHg4bCixTUgVHyMK2zo6rMJpYT9uc8ZzUSZZiyhdBLE9S81Hf1S6hsp6fuQNoy8kRTmKg7zPjAfpwGFZm2",
  "key27": "41H5tUnjPuUk26gr82Ut2kYh9YFWcsBVSub8rAMoSvR5vhgdWGhpGpBPXTYhvJw9dLACmjMQYYG8Z91agD1YJbwB"
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
