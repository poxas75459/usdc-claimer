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
    "5xfLavUh36r6CnDSYjuwNR61XqAoQFavakUoL5tarjxU5RqQcxyW2bgYB1Rcv7aKJgHVYsmCdzNf2LyZYZWUoyiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Ua7r4LqWamTA2kMTAKFYqcsGVfdez3AjuFciEeA5Qvnmuz3yboNEndc2LYmJ5z6Tz6BgGun25qvEoCukftRA4g",
  "key1": "52tpYXugPB1WgsY2GYS99Ej2fmkhuSuWDL5WYE9Cm1eH4CeWEv8BTGgviETvVzFFzP6BA9jG7mx2g8voPSQotBpF",
  "key2": "4ZZtajoA74RiPVYWjwunCc8GbaJjwDEi7dcQWoqpB5EMQFdvEiAzEce6PKMAmKoENzwDCTQpsEKNoseU7K9hzJgi",
  "key3": "MN1gjAKmGGP5h21g8uYN3uV6kMGcvdbiQTpEp1pzDRUApaLveGseD9BV3JmB3J6j54zNheimZR8zMg1D6Kowf97",
  "key4": "4cH1PdjkNEeLcZxT8FtkuqrA3ZmzH85KmEVxpzSdas1cYUHTNLN6yrGx8yGtbg2SN7oRRSuFYdt59ygwyLvUmeBT",
  "key5": "648gSWsRC5nukbb7MdaT2qdMNm6WKBDdLUJjbFBGzeNnWwXCgXFeiikzBEth2JzJGQRJkfJLY7mTA3EGh9jXhMrT",
  "key6": "4ZmNhs4yqUKhSMHYkwidBuHuQAw379r5iCQxhTgDf2W82c5fZWMkRMLFaiqDkp7VRs6hoQHAZ8fvbCukLaiVW1qm",
  "key7": "4dvvcgmbg1Ntyhw3BojmauoWQaFUJqmZyUWQ74XMX4UdLinA15e85uD7eVgHGsNLn9K3Qa6nKXWfUewL8wdnktM9",
  "key8": "3UWihPwvTPCHWsiLngzAZ8vFkV5CcGa5wrExQikMBz3TobdA3owPuaYh8GMjCNbsS5vcguUpf62TvmcSg9GmBJg4",
  "key9": "5tfbYctEPZtxRNKTGrtGzrmfHm51ECixdCGDCyvJhmf8ki9zwgYJ8TnMrf12kw3VpWdX2eD7oVQ7b4NSvcUEKsHQ",
  "key10": "4CANy7JgK6HE9h1WFFRPqg6LiYeKUpFAWE4tZRWM8JXrei6yWQe4AC2etwC4g4mSg3CES3MArTKdXZh29wado2oY",
  "key11": "3itTNGgxgWnNgi2ScoRm8BQbRprpEmGJH7EDDr3CBxRiHkrbkGsCoufL88ZE6cS1qvZgm3jJdVPqxJgp7ZBxSVz3",
  "key12": "2vDduFznWwFDCReEpbFQ29jbjLCmiaUdWhcu2D9LmE6HA7efUmK8gTbNRxfeYREKQS9J1FQZtgPiYhTHpL1Eqjif",
  "key13": "67NmyK4LWWGFVm3ZsefXR8j14LR9r4JiqTfa88sqo4YDLJLE5MJDMrHVgdmBoCuhXEhSF8VvhzFGeSFVkNSTKXNZ",
  "key14": "3rse6bh4vRh4tKzd1CEwvjnBvNGMJbdTAjMaC5bzsZrht89pDJc5vXpwcoRTp39oqMuyv6KXQPjySxM4ADfyoov7",
  "key15": "2YHqFnGFyGGFM1NRUk7vG1ZgdcD6oidZtxd61VDUtAkBT2soPveCcTucutosMumHguZwUKvXh1nRTrjVJ1KvyLKv",
  "key16": "67WB3dnfjacEKZzoSSxLZUdugKQmY1NY772YNrjL2dqxGbHLfeERQCUFdryi76nfWxsbHtPqN1A3uPv5xyj4KJDR",
  "key17": "3RM7yJSGo4t9q88C484PvP3J52vBpbQtQYrKkVGd5sY3zjwnTgYdRRu86d461nYorQvkc2CwUwinRmyYMHdkQUBK",
  "key18": "4k2Hsqomkd3y5qR6zH4kLYbGtUUEsQyKQ7AUCXs4LkG5mASMWpXqBx8NpdAtmhiNBK1nhbQxzCzwowaed83E225N",
  "key19": "5H452eYgSXGNT9wi3Ljz7vR9LdjUnuAA72tCihyUiiatN37YbKrpJeZScnVRoLJV5RBdRVvtzXMZ4dfxZeK7XSHB",
  "key20": "5uCU4e2755hk4rJwDSxh3vYSpQUKaLhoQwvhw3jRj9xcNuDetN6ozWTdhvj8vtvy7wJm9oDD95nhZpWtVdsu2jdM",
  "key21": "2jBsuBQimy1eEAVCVEpG3ukit3iU6q3HDjH1SUGVeT95LNTbFXRLB1MFgTzp7Ht7Ufy87FJuLh6Y3rWzRDhdaB74",
  "key22": "4HtN2qa7TUZBkegSMvSH9q67nPzYEqra6cXfMDqUopYUeGgqf7vg5hpkxk1ea23TRPiPLcbkD8fLSjaUnfHgdGJP",
  "key23": "3wzd14eoW5u7KzdjpK9HAn3dvicHykXcUH7B75YLBZYhKZVUr3UjJpCVmfutedLtYea96TsGXXPQ2cXYs1yHaU4A",
  "key24": "54tAx5zgwFdjS5wgQyo383iiQXxhG5iXW13LaCCcDKNtaMkBeMXtGdjCyNK2SmQdVJCAo7HeJHdiVkXAMckcogA8",
  "key25": "4YmvHCYeWo6tPZwi69VHKE8uF9XGWhkmk7jSKS7SXyJvjtFhTgQJsKMRuhkGRmvTmeyF5W33cpcBQYT3RbRDhVEt",
  "key26": "3ypACh6oDeGL6getFfHi6w2hh679tawgCnN56uuqrUuJjnueGvR9ojDJWU5fc7fiQ5fTZcff7LWpEBmEJxnunmLC",
  "key27": "5dRq3CV4GrRamyhbQmVea4TtuCRpK2YRVHsEvCMCTZ3ydS26m2uuxcRysFdhTfEPGxgiUhoz3bqGrezbxwBNb2wx"
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
