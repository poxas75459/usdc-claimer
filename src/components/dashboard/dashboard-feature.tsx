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
    "kA7PiZsBkFygFgsdMKvuQfpbssz7CfxWas6DM5zXsERBnwEoWQyGQQ4Xz4ds8zAJmH1pK7q7Q737HXcZqoh5gVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CkZ58FuiR71oUA5ygpFJb48KPdgH3K2FUrDergrDBqTwZfxwUr3mUtBnf9BFXSHL8DsEFCeLZHRCdKXGBL7nFtw",
  "key1": "4DSUPvgYaAfrfMkLiUazLMRhBe7GUpfVonQbyjKbLhXVe3DhiqkQemAScLPiC8uUr7HhKL7yTuEBUgW7jnTVnd2m",
  "key2": "oiw22BuYeWHK8pZb5JybUEabhkrLMqGDMeoZYfciRMfsKuCmNe4GHpatfMNaf57REZR6LbksfEvFm4VEnUoH5td",
  "key3": "38ycGYFoQ2TcmYdzC6SHcN2DVxWbCJKNFYp5Jn5KpQxtoBdvysaVcfxMsAsgzqfnuHZyssr21YiiWzeesQmQ3K1A",
  "key4": "3wYtcytTshDS3w42spzoDvVsUMeUZM3buSyKNau8nV2CMj3uQZTaajxHi4xMakKWtd6E7Txkxc2vJQaVkb2NCJur",
  "key5": "e4uPwuiT5XRhYAnfX8gm87nqLgZot1DjhaB5LLiTkTu4VqYD4nxBDNUADZpwDrN5MYAdppMHjudHvomcQNWu5J8",
  "key6": "31S3pHJNDLrMNsHf6Ciwy8bwDBFckSGtfYTojNntbbovsr6wrxz8Fo3wMNYzqw6MxdyAjcQorWWCaqumXiCTnsTt",
  "key7": "5AkNYUQtYApSEbW4A6gXv5ZevwXJA684jPjpyQxu7cA2HHABkYZD6SpmXAvxpoqMg7FEZVYcgWhmGH845uzioewC",
  "key8": "53HGAGyoSnfVKH8vwrUVB57uD9vpYHiziaGqxd22Q6rqZn69q1W48K8tSzbBuULgmwH4BQErEv9ttZMFZxD7NMjM",
  "key9": "4i45bDN7khdspHQXfXAqxZGyw8oWkHt9AY4jBsZNebKc3FFKbVnBqZWEzXBm7X8Zx6C7aHAy18sLuRmk8Qxu3Gyy",
  "key10": "5NynQA73zDtGBxjc8ou2YY7qA1T9RbmEEpy9BfJvhPCr5MNEHWBRZjVeaHE4Wzu2YAAk3gJytVwWTBwEE3GwvR63",
  "key11": "2YEPXBU1DdGMGg5w7wHScdRhmify7Tx8erGSkzkTJs37RVfNeZEaExVDBLemwkeyv4vZsGwEaeJTvYT9FwGiFy9C",
  "key12": "3isoi42quoePRFsqjeDoDYdGK55ucbpoxLfSEH8KVckBbU9NzbyPaJafBRX3yCJdqXBCtf6oDGaFgSUMpdSg691U",
  "key13": "2Q7cMgaVQU2nuDvVMSmmjLW8WUhwaJcEZVNV2z6VAxen6asx6RX8enj4bMZ4ne4Tt2ZjAY5NnekxwhN9xCSo4ftx",
  "key14": "4KVGRXvfSmiabbFrv9jbyHMYyd5YVPbY3S1bXPFnL4cUJnA7iegNtwkbYi5LAJiJbuREd9BsbgzbHzE7vFngsKmm",
  "key15": "2cF78PDAGbG7Du6uEXgYd58Y13w9mTHjTeSdPhLWfZF827CUbqEa5eKHdHqgVRSfUeVQGneAmEXvGrLuzgPeNZzg",
  "key16": "62w5jrdty3q97gSeqkWfVpCuwo8iQR4eyBJ8FNdTz82mEiByZ47AD2qsJiTg1TZzSxr2j9qNWZRHSA3A2WfNJhZ5",
  "key17": "65tDdD3VpqAGf6FH5XW4qNetBSWTXJFmgDUfEFFBARZpkQw9He3PjTWfQx6swdzETzVnXUWXVVU9XHTJ2Wn3pYXt",
  "key18": "3SxFw19NEHsjgkc9JmHDLJM1Zzz3VQ3tWESJNKsSrtGeCmYivYDpB93TU9jGWjhcNuggf5nhvut68kySuMuDbuHF",
  "key19": "U3dNQbuuXZ8bvbp2vhvvjm8HV7ko8XPihPotPEzfK2aBdE1MBMVMdqzbaWbj7uC13xfxquY9gFSH8xjHPucg6cF",
  "key20": "5pQfcumkdbTEeGFhAMbzCVKy3u1shxU1aForphD1J3yEAD4spv1Vc6wveM8j8isNHydKccoR5431bcbT8YEbuEVz",
  "key21": "4M8xH7ewnqJdJ3xz1SPqaPNme9fiQTcGQVvDsQ2pj7a2YNN7AiWnJithm51U3n1SgGjt1JYaoRh85VJ6oMUSeYbZ",
  "key22": "4AnHkbsUqVgveE29aTWHrgbeYjgzP8iFfXnQhYk38uNuc4E2ue3Q2wKEnvyZEmfgDB6qYiWRhrcPL8eLTKoEFArm",
  "key23": "33S13kf1puWyMifY2xWcQCgCyHkcr418RQHX6aaVJRgEZZU59F81LXnsAf36mJxyvGD5YPAN3w65ND6U2xDPhDpu",
  "key24": "mU3DV44M8q5opBQjnb1Pi29P9YQXkd6C1GajBvZRtqjzBcyK8qN2Bptmw5XVKg9NtEM1p5AodWGU6R1Je5ATsVW",
  "key25": "9REarrRYewPBvHTDiJC33cPhbFGtcUrhrWofSNgtEDTF8uGhnW2JBPYqH744g147cXxnnodPUfuEco2WyHrjcb4",
  "key26": "4WkT9adYdw33itccwGuUDjcjhHjPg9gvGXzg1EWySuJVFxZSnRbBcTusKbaDf4h6GzB5h2ohtan983TSG6rCki8H",
  "key27": "3ukZsfVuvNkRYMMttfpSFU59rDz91gkhxxvyUWR7o9V6VMR2vPctUSC2LcU834etCbRtp1jSMaHkkFh21t42udvK",
  "key28": "5j3CRdsRbyZf9VNtwmcjQmZhaQeYPbSE4qvNq7vtuAGqTBv85bwhGQTDQcHwGqMKqyELQheRfLMSuDwUVoo5KvDJ",
  "key29": "4JLmzyavZpsZ41cfXBf3KhpLkqzH9YfJamJ8oRk8wFgjbBpiNq5KfkjXLQGPk7ELJvoNVNw8wwrY8xUwhbd1A4xP",
  "key30": "2K6V1pkFzZNm6xV59vSrUdLB44XmCmDdFS6MvQEtCQobskAxVTYBZZ8azo1HRueevQ2Wt8kPGb4Zv8R6uRQyjtnA",
  "key31": "tbDwijKmTREKEFQWaBz8sS7vhLBAh1mhDXPyJffjnU7oMgAof5tbMpToKXRr9AFEz5zHUgEyWzNvgUmVModRqH4",
  "key32": "2sbr5yzrpG6aExtdpZKfowjN8eT7kPB3CkXmJ8n4KVxkkgWJ9v9KqB8YY6pr4h9J9oP5Ex7jt3kgyqarcrBNARgT"
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
