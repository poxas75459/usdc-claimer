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
    "437FuUC4GK2hTyrf8MwhGAWuyJkq7XjaGndj3NF8wezgmB5cQqzCymGbJb5hJ8eJTzMRJzCxhLit2revmMSfDzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nqK2Hv9k4GVywPuxd9hr5LN2wyqEhyqwFDqBz2hY3JnSJBXgNeoRitd5P8Mqw43BE1qfZcBrPgxQhxjXuKTmkyq",
  "key1": "36pct9v57JJBjVckgCMeXoPpTjQVoYF1BTpoEpWPBrT6g2AceyFCH7qxE2qGY25BEetrxDBKqfgWSsoc6KN1CqZM",
  "key2": "3e53mRiCj2jAmzhH5cp6ErArPnMMPqgww4qpAr6wsw4WThcA6VtSNT53SNi9DNWAMATsqWdbjbZiVkxvry7s8vcd",
  "key3": "1EYA4KHxbw2sNegmYfGwFXgf1Jo4iAkG2SVZ6VufMjKFKte2XgN2RbbfSkvExL9mWVCFLsKB1dkizhjMSUNtjcH",
  "key4": "Xn9U1QXU3niFff1Jrg2hhWQYnJ3oZVK4Bue1DR8w7GMZAEPQHSJTFJ7e5cpv72uFPnK7Y6JW7CSgTo561T8aXdJ",
  "key5": "5LjsCYoLzpjXbMQfA3krgzp9DCugStfxmQyQJvkGi73xYNC3msPHaGApNb38rGUdqsoKiQqbRmF7tcD2redupQVj",
  "key6": "2bNivkVqCsoRzR1e22DSwK8nz7napfZEgrHPTY5yHXfsMnedNU1SV53f4WJvT1Q8rGS6o2rsbAR6MXjNFpUH414Q",
  "key7": "3DNGwrPYJvrswtpU4bMZeix4i1jhJUE74PucgS7WXTY82A8xmDbnhssptjXsuuE5xKRbWYGJPxY42XtYrx5JAXXV",
  "key8": "2yYYF5toBUKgSbDeq4bFQmmXMADJ4UiiMjEXcQXWSspeNpJKm9UPEufipb2YzZrYqJnpcEb8cgxm1NSAsZGAbVWG",
  "key9": "4d1M2R4td5waFaFP7f9ursFP43zuwHVvgZKPghDbTBerRv8YbduU1LcLqN8LrGSZHi9g5k6pS962rEsnFUsyH7k7",
  "key10": "3CfJRiiiTaUPWao853BEcLduFZSaoxKu4dhEyyWvwZPuzDz2AMUBxowWvV5J21ksB9ume45US9wGbBisWU6KC9qN",
  "key11": "63nE4Fd8434NWnedKKGxnHytAkHP37ANWivxkQZRHnjrz641CTurX3BEPxxGM4MdfnTN5VjxYq4Ecyxy2AETP5VK",
  "key12": "2Mwohwtzccwf7wn4kquFzR7a8CpHje997KpwefypVokoyXZoBMjyztMTQq1bYWK9bHutNnRdr5iG91S2cWVP7r72",
  "key13": "5DJUrEn8B69PW8DjGj56DWnCS7vJ12k6tEHjpHKaemS1ornB5LXo1NPi9KmqYA11hEbL1JDXy9doZEThJKkMspZy",
  "key14": "3WuWzyrvWfVnp27sDfPR8Q29xzfxN5uVtQXKN2VRJo57sbtE13jgYo51uJS3AcrAQCTbUfnmRTcC2An6y4UeihgR",
  "key15": "3giWceHPJYKA2VUCHiAHbJCuSY75Mogwh5FUGQunkfQFeU3YBYJiVUaSXiiQzcncxRrpNTrfxdgAYP8Nm4Htirry",
  "key16": "46KKbyorZQAsuumAVMCuhd9EfYcJhv7JTrxeJQeCibq9jJnCxJ7bQEJRNPQM7viS2r38YJrxCNWgB38Z7FCr65hX",
  "key17": "5pLsMJiV63UgRRCJvJEXwYr8QRevBocpZuwGxZPJRkWC8q1CUVo8earf2zC5uX82K2spJ9fFdFgrfBCBnxRAJDgT",
  "key18": "4ZUu4Tr74LBYNqqgAMToSFXGJrGAqtU9F6Ks7UekMnzEi2N8JCzwj6UpR3iCWoJ4MH8rMJuRTiQNxD6xv9NBYaRH",
  "key19": "3f7sUbx6Xf4CDRtMyJGR9xJhBTXUtE7qn76GvVizcTBDcChR1pAxosqUM9jDyR2KJEMWLCmmmza7b48A8vEsEijx",
  "key20": "5tBB6xyt3bcKtzDJsgsFpPzPgRqVnFTgasj6sBC1TUTsFAfmDdQ3WyiTTZqwr8od4pdNAXXPQeGYSxzLGSKt1cbU",
  "key21": "4n4SDXhwNCAbR6KQXQyDawyLPnsqqbUNLqKvxzP75UGVtFBXPtB7sbx66vPL5TrzfjCqh9Grp6R1SyGsrnxgpa9c",
  "key22": "uEPy5mat2hJ7wcmdyEPhN2xkKo2FEZVPGB3qJ8ZkPBE77ukEbuRwpFk39iLLywcgf3r9Y4967TedX39dhScvzPK",
  "key23": "37HuoGoKmuhxf34WVVKHDTcV6RQwube5E8UgZxghQFvspRwMEkJnftMrz7YRitUX357766nsDavFyBVuc6mhM3fh",
  "key24": "5L8Er8mK5x37PkdNYV874Bt5ojgL7CYYuQQ9aQkuRERZkpPQ9DRBWzu5fWTeU7ETj4rrw6m5s3RMCGpDLZWrpCjj",
  "key25": "3ZoNNJ6MuqQLgVrencWnic43kujnHj6uDaJa6bh7dS3LZZpcs1ScnDk3iJsaiLdwxw6TdFHf3tx9FYUUrRVmYxY3",
  "key26": "3XvHjpWAg8rwQeacM2wUa8yVhmvUm612iSn4owkmmS41eaWXsLX6xr9m4sW4xHFZfRBpFSywvtFsatvEDL3ZVANs",
  "key27": "gTwLgBqcG1zSuEYLERyxaY3q1a7PqHQEy5dDTNX19Z8dNUDXgXA5dk7Sefby3b4ire2eEaWNE6bwX5uBGwHrpEY",
  "key28": "4epM1m4punP9pKbWpTxWmqcFMi4zb7Z1FnEh7rCLE8n9TRFyfpjmSH5tjmUn2kxFJNYSLWADPg75SAxMMEaL7dwi"
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
