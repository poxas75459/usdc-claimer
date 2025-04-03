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
    "5td8Qy6DiUNzvtf5UXXch6kejUSxGC9KEBCGZ3isqNHBopQK741kPviW9Hj2oqKMrqjviz9sksTMX2PCBgLuFTXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56F3gx3W5Hx9Geg4BHb37rYrb9qrSuUJqE5wvcyWQrAWgRnWE7KC1oDEq6Eh4ogCWNnCA7pRLa7GbwWYTcqrsC7S",
  "key1": "3cPMDUF4MmamtWf77crTNAqju6VC7AJfhMJNnsjud2E1SKjNGVH5GLRCcdiCQbiFrEG5HDiMFvDaynXThTndng3K",
  "key2": "5E7PTyVm4sCzWw9pE9iPxKpt4bt3q5f27KVo7nVTLRT8poyaxeadvYNaVDsf7Ln1v665FcPV8CQRixkfkZVqQCXz",
  "key3": "5KCh6nouCndMyNkbKpStXDbCLYWu8vxJmrZYT6UeB4BpAdLfRVNoTkBYyLyLBACJQMGB113eVpXKVeeEKSKDRMqw",
  "key4": "2BevPK4r5qLJ6ip6Edz4q1HPM8Ck1rVymsADPyJHy8uJkySt4TtmKjdrMJhkpftbJaNxPWCvbTqZB2NzauCEk3vx",
  "key5": "89x7HjqGYYG4B8NYnQL5zDG7watbv4gktAX9PPx94BALGX4PDmucDqeJsnsEr2HdRYNceYQU4hnK3KB8AewdYUQ",
  "key6": "41PzGudPJK6ruzkSkaWKjaHvmV4TxAS5P4mxwNwQSZZe21Jieq9VExxRhtZpuL8tuUDjNkiBLbg2N4iS8CNduCwN",
  "key7": "fUcPjivMYkpyVv9gHHYxU6wBgMrzcYFJjUC9MfsRA1x4W7LLze2sN3S84U5GSbkDQCAzqem531L5fDvfXrk17wN",
  "key8": "2ZybyxPRUvytA61GSTG3zXy5Z69S4EPFCuwsUZD7boa7eoHR1mUtBb3V6iFNsfJnRCHDb74L2B3uYczbL7eJ4aR8",
  "key9": "3sJYi9Dp6v5rput3YT11bRcDnKkVdgsirsoAKQWJ32HfpKfJ5paCAS7GNyy53ndBEkkJZtkeRyxQoVkMNFuHYKCp",
  "key10": "5HisXiYjf1fBCXYcHjiwrGzrcQ4RsJVzsgeF3Xkb9zcLvQVr77m4BZnvjhchNV1PWh3Wgd91vhe5dJnmz2jTouQD",
  "key11": "2NYLLRy2vx91qi7H5Xq7rXmxgft57MS2TFCqu29qnkUNYyMB1AJAnJ3ZApNnndTPKoJVasExreBJAqDnmuo7rNuv",
  "key12": "rFbM3tmTXZDDPdqp63UYM9iuETrCLHUSitRMNbpWrXSe24oZYByo3yFpvUA4wuq8W5MUYte7upvhBc16gAkJeYj",
  "key13": "ZgBTpTgFb7ctoVFj5GF2R5PCw9jeRD5EL1Wou7dEMDrXJwswtmHFanRJuSWBMTVCGZ7YyGJRMscEvAWXAkZ1Hz3",
  "key14": "PwsetMPf4FyibPJutcJ8Unj7pzRcWRw6fZNukVC8VeHGuBkGDHDRJ2A4RP7NAmM6CcdmDccntj8HHee9UW5KaSN",
  "key15": "4deewZ1fqZxoZVoHtvjxaAs4CBYuSDT47W5jcxP281sjhKkzTsw5b46nnBi5i2WCaxtaJmgda4bmLuQW7yL9rtL4",
  "key16": "2qkoDnVkduytX2ABBLwYWZfasfdwRiJMANpxeT9WanCKumKcdjVo5MfW9s15pdZBnsRqeBYjqzfwk2XuHxWm6ZJQ",
  "key17": "5sJif81gN5tcwiiXWpD7KpHwqphdT8iLhTRs5nQnqB5ixjEX5HTi1CEFHzRCkDWDgHpuzFVfLvPQhTMCoRYAMRxL",
  "key18": "3mgdRMnnBc2CjcbMFvakWmtrrYDUq9DDGvE3eTd8JJtJxQTCsdmNCvG558XREy3d7em8AfdGyd2CUL34kw1siWaS",
  "key19": "28zWyqgd5ZiKGMKNkUH5JTS482CDoUYeeibQhK8PDVQG6ckVTSQs2Xy9MJLkKbZh4jLRF8Xo4u5RsEVvgFZ7EzJ8",
  "key20": "4FLrNXFZC1BJJi3ZiyB67KG9tcaVbpPp2eRtd1YMNtYABLNw5WCEwWqRioCceC36nBzGpiuY8ZxNyMBW2WB1Vs9y",
  "key21": "bSJeZf1RrvP1X7fpaMLnSmgpFxR5qizBhFYCjxtsCL438pCZ7LzVDCLi7v7TsYQcVGepAEoxqABqESkxvnVJx4G",
  "key22": "4cK5Cy5bPL5M4tDYDt7Gv1vTuD8ueNkNpZLKtxC3YtyfNQH6CiA9SeXyPiG5u7rC2bCRGWUM11Jv3WVCV4ZiSNsW",
  "key23": "4Q5vJpWnbwvLMHSZrHaGurKm3rtbNyc1VQLeCTweF2JuurAmzigapWNKsq1xbWuGgBUsCnLpjrKTEQsXeqn6HQ82",
  "key24": "uNpWkCYq2jCFHcSJ7QGufCyMC4VQK3QdvKsNSA9sXDApmchp4MDGJ2nZooXZ83ttmqCPf4ZuUZwxYt9X9UVJL5T",
  "key25": "2GoDapJmvw834jg5jdNwJ3mY1YSVrkhB9vBG9y5W1sts8bo2iLMt2qma3JNWrDCVN9oEdQqNiEqxy8L8BzERbBDa",
  "key26": "kV92oH7R78JvmeQpTUBPdqAEFJw5j2n9gaqoC4XT7thD6YAC9qLkpJedjq2AsEi5ArdKyhKKNGwe13VTJtACY62",
  "key27": "4NazeRF1Gg96CNRD83nnsahZzFJobNDvCyoM412WpoWDsofDpygs3mUxhcsUvtJSo63edo7a2ynfH4QB3E4EEszo",
  "key28": "2X5NoRCaF549hnPhwBircZxXgtjrCxf7Mqv2JChYqreT711ZHVBWH7SyMXemfwo2tvc8ExpyMiy922oi7QEtQfv1",
  "key29": "39gLjWEna33gWatZmpEoFYLP6NqPJPe7PbfryGUxYQrivi31p2XbFeMDyeiuWemewbWyxfNr38Z7L9LeDYd39DGT",
  "key30": "2biXXnk64VxEtuFaWZiL1j7isUBdyiRq3iwQ6SsYMhZNMEa9qXTfrcpR6HRds32aRjnNP1FGtMXbsABo4UgTHY7L",
  "key31": "4FE1svSjHPDM3GWgGR3ezgKcztLvitPmvLQ2McMF4eexJHc6ieesjQss2Bhb1FpgwbAqxxy9uipKZRx6vr8XjSju",
  "key32": "27nVugtjVN6dBDAbgCTUGxaNR7hgLmhW1kdpnM9xfQyGHkJTm6QvCtgEB1N6aWt6YKKt5ufftLyb4Y2PA7m2B9nW"
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
