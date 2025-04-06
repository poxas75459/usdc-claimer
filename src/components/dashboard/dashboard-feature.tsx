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
    "PqZDuBJ1HGaaoDea7GdaL2BU2kBgeCu2qaYFdA2EZQtL8HsfvYNfnwVbNWWdpETRqC3sETacDTZamDRt6vtL4Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9JbLELzDdyRttCeWYCbX5TszwKQXQ3acEJGMeBMWXXYgwd8yhS5mk6jgJ3zYSLWPko9XjvFxYKSouk4zgUkkny",
  "key1": "2AQcY1s3k5nu6sVLvGRLtt4boRg1ts1bggkk7Cd9ffwFHypr8E3raMnDaAWjfq4d6u6vw6DMFbBuDF6Da8AJqbtN",
  "key2": "TCBgM2V3WwC6YrQ7HpSKyHD6x3WQYTSxioU9juwsAXqch55Pw9JKH5UPgL9unKyxNRkjvPa4mX6cN8fLauhYX2g",
  "key3": "3XCzLp5Ae8deth95ehbb1MkkjfiykhEnVh1fUZuJcA8dkayvW2HNf9YPKd43KPmBJtmDDtWBLHpmLd416AuLU3Xy",
  "key4": "5uCBabh6QmRRamtz7ZYjRGRcfNrDkp4rAMJyVCcsgsK1qj7x4cj59Yh6n1yeXXEhBeMdCvSWFhfqXsdaBnt47EUo",
  "key5": "26PgswxifgrTK1k39gs4GS8XXJkDdBTd4tPfLRjBZg1vmjSqtX7tUtvgj8UstgHDT5zbmucEGkPnyaEeG8HxCTfw",
  "key6": "3zvWD3CHmbf4NekMP3aU9WjBzAo59RaEkEQFbgwBDk82rx2ny6X2pzNaq6Z7SaPFwbp1Hvb5UKYioVMbzGkCiPrf",
  "key7": "2LWbw5AgjtfnhXMD5a3NWCk4Yx8evVBf8r7HgTYxEJkAGGKc5ELLeD5ZMkErdtpr7jdZqaQcZW2V1ZvMYWNTzX8S",
  "key8": "3SUHeSS71bhPU6thJBNWLCaDogHKnCY3C9XCdkru9gBcUeVxp1sDHEPMrCWGctFi5S7SmQ1BYS6UYx6F1kBkVpVv",
  "key9": "34EhZjMFWNBZBFnwfrihUFJHaET1r4rGQb4HZNuCqfwnWeQh9R9asBsxvDt1x6yXFnYYvzB835qcaF9ixjSBSCXg",
  "key10": "2RH1jmPXkH5aAg8hn2UjXiSHXh5bXVtHuxFJE4SNopRURaRdcgBuUBQBuWnNLrXzssZaC2Dc2GPmJU8RqSBCbeSH",
  "key11": "dtboLEBs9trdFJPTYbYkmqKDG8X8uCCgQVmYViaf5g1jRceXAhZzJJYwwj7xRvTv3gpwFvJgXR8FqeDBeHgGahS",
  "key12": "61uxhdjD8vuhDE6nCrfNmMwf7nJXbgAoyVrY5WZVyXwb9Fa72eeA6ccsh4F1ErJhF72pCiDjXCAwRKE7zzXq1Lm8",
  "key13": "2HEcUTH1eJMUm8kgb5cCVmBJNpikiRgRBXvUrYZYtBTGdfAYwCohVbL6fYmkVvVThyd9v3YYfcdbCTxuXAcNQQm5",
  "key14": "4pyP68BmeZe1qkRyVCNJZrUq8NKry1MaPMpUXL3cPtJmTZhq3RPaAnaDVyi8FLKw1qwqLJvrfCFtS9V39suDq9C5",
  "key15": "36Kbv5LvTHifM2U17u1abbNB4StDDZrtS4UAG1bYjupFuwzvcMKdijPopaeG9vLVpCT9JjygHd8oc5DBaG3FHhDf",
  "key16": "5WDagoN1ckWTEkkAZuGHScmtpnarNBsC15mg6L14MNMkceBD8GWUDAAcSRefVRgbdAvfSSn6jDA2XPawnCM8RZmz",
  "key17": "QpYctTvMJk8ZezbwQ1hHhngyVkMfG4C18dkukEHoJFdQt2xigyThBvKtUde3BdaxVSgQXa6XQNyBqnzUZ3jGNUH",
  "key18": "2mV23GPRBf5i5uwVDyEzNsv2C2x1avM4veUmgd6tvVzZz9yWdKaaHZwyyNHXk4oE5iLwka694nrFfUYzYBuQjZkP",
  "key19": "2Rk13dYZj45bC4SvdzgCbo4wKBLm7gknJGgxKKjEiHotb2KFard5zPXJV5EgrnPoAYcbDMw51SK3QAr12xPpSDus",
  "key20": "5Z2HLrcKU1muRDn3YdQGBsgRq4qzr5QJHTz7Bkr8vUFkh9Uzbd7oH8a4EX78QCLGkpcRsvvVmXRMzJRCKszesqon",
  "key21": "4uhxJsLeY8eqsv26dWpf73fQq3XRNhzxjeUnc6wxcj1Nuq78ebEYYmMU4LcLp4qx1LZg2dCqn4Wh9cimGSpFFKk6",
  "key22": "4iwDJgzfzUr6YoX4hxgJmyBGVDghFqci1P93LSJGCbvHXgvwJbSUJKSPHEQuDvzFqpMmr3mhzFPitLr39Bba22ZT",
  "key23": "5fgL5cT4da7fyr6LrDQyfvZqSJXC2nQ4tjVgk8bFZSqQeN5abPrsBFKrcJ6bm4mEybv6oyPsk1EvPs5uX71ocjGj",
  "key24": "3SomS3sHtb3j4LdKzPEHxKVMcDLEvuHLgQS4ynCST768S4hqwzyNk3f3X1HfbXRnF5MHikx7cWx8trSCX8oY9ZU4",
  "key25": "tqiCWbfCjGQ65gMej62vqTed6GcUv8cdJF6Zm5qHK6wmA2qzGdzNrDjBHgCPakppA1iZGmPd9ArQmQEGKbYFg9o"
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
