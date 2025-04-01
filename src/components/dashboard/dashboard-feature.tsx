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
    "5WS2Vz7df1czF7aam9J8jGXy5zAcd5zz9pCFszRcEUHjT3fFX4XeNKp7b34UuFBuR1QA8LoBnVCjo7odmoLWnvVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrxMEsaH4BQtmmK3YEhv2FWQ1vfxhsbwMjo3UPjvDpJoLPvMVH79CmBooYbYMHVkHyc3oq5CvjW9wx29eE2KwJD",
  "key1": "3VzSmhoEFiAcxqmYfazRBK6ciZ9ZZGRm6hnvxaf6fZsxnZ41TuM9ddgDPorf7utVTneZ49JFker1P5drLfX92qbw",
  "key2": "59imvrBX8Vs5ugkdTbgqaCR7rEiFCjBy8XUpWzyEYSiVPKR2Kznujje3PVLwLQc1rQtQb5ZD3iXu4bKgkJ2T4xRZ",
  "key3": "23W79iLKNoB7AJcgdQaJC7N649YhXGKpgGksDBxafHraCKuWk3b8GbsQhA7WrBDABTeJepeT2FKeT4jSL2n186rw",
  "key4": "4zjpXSy1xJHTQv42netiyLHeeFDmV5GLGc4Ag4EoHEUVtJPwtNffv5XZapqsiNpm8ZapR5rJqfUKrnp5ivEnMMVG",
  "key5": "4ctmZ3o1MmBLrGwCHG5bvMUFDGWPBgzDTokbfGfKceKEzA16QRgTzLXENH5AnqzjcGVrACAx7AiqBUpquBwzx76Y",
  "key6": "4Hp2HXYUHqDJMxCaCJevziQP1XimpncKZjZ5pvnD8SBf9wxDJW6vAesAE6JjmRqFVsgjVJZd7aCTEGskWPqTpfUW",
  "key7": "2pXcaMNTdcdPo9gRKbkzXf4xesN9uUBKrkf9DAhuv8RXFGX3X8dQJUGFghtjtPpfk6zpxeLzsqkZXvWLWtRkzGpj",
  "key8": "3c3HvcJQuSNgPHhx67SsJdfGG8uyjYDjxhVwk7ZEUkZbi7cwdZYzwWFpMTDQhJZ8QmKXGkH7syTM3nY2UwxfywUN",
  "key9": "3ArVguYqi2VmtQHNihcFCirVcmJKgq6AtsgemwHN9AEYBrfk1gqzrR4rLsEnWRP2zY3NQd5xnvTzLbMyhMz2kjkR",
  "key10": "5mFjAaHTyre9zrM8Nu4uomLeexwbEGX65PEEoVrmToiqb9ngTmLnjaDX1jSZoFC8EjmYq5NyeHs5iXJDhxmfJTH2",
  "key11": "5LfH7qd9qws7ytrZDiPJQLzgzcV2uToNaPkynGgop7oPuKyrP8TDQHnxMZRYbq1WxwfH3YbS1CoU9ZM5NzuXxmgr",
  "key12": "wj3pXp4M7G3W9oBkdaoVAuVJ4kvH4rEXVNiPAfGdt4KKFaBgFtxC2mckszn7K3iRGrkM9GucEhR6bCN1QEkeCMg",
  "key13": "L8b3kNhRLgNNdwacpYyTPmMYzF6JkAtC1HG4j9kjfgNV8gSGcuBJVe8AX68PU6LkHYpi7GcoYvf8HZiSyKJwhdh",
  "key14": "2zBGaggAtjM1pp395o75yJKMybPL24uwjYiUB1BLhEQDDcQU9oJHZWgzVU3fPMdfAwhFwKAWczjF5AhcYvXUNCF3",
  "key15": "3UBJb7PBkoT4ZGiD9vrf1PMU6uHXczzpYxzdyCLDnnEgxYbVMLcQZLf84E98mMaynPcNG2ik5ddQadSpnWPDnA71",
  "key16": "3KK9ns7nY2Y7jDY2PhW8Fqmzo2DtmcbSccv6tck9QP1RDRCDBAtpLH9x4yEcnRX71AitQM6j2dgpyXuoQ7FeCf1a",
  "key17": "22tqPuDnC9D6wr3WKAsFRvfGHFcu6AxWaPifPEBiV9tLH78sDgNLAXTvBjFKmTRoA44E5CAN6N28FsDEJAUhCHDo",
  "key18": "5ebex8aT2DXj9jiL74HhknEV3efxJDZ54ZKEygFj3U16G1JEG3ngcKCX4SMrjUbiWmsybcvd7Ct3C4XVu3S3R8PA",
  "key19": "3gdMS6b8xxu6bcgJRnqGUqQZkKEPxva2WQDbTARKfvgjQc7Y2ySpUzeYARTQhSMmoSaXxi9fowaG6vDJYruNQYER",
  "key20": "54PJGm122eAXTsp1Tdng5LGMkFeRfcXg3iJ8kaVg8Sr8sqmmkroViVUx8cy77sTVek3CQsjZM2XBKGDBUxYXQA9j",
  "key21": "gqr92bH4HbKa31xuzC1akRNmUNkzYb8Tk1BNp8SvCoCTJHWsykPxKxin92h2iQ6CEJHQeHzTVUcALf7BFXB8WMi",
  "key22": "4RqAuDRNSXrBDuboEjyFFXjdc7TtdKbfpX8dAqpZwudDLFpRP5Y9jMZHzKy8SKsD7ainxqbd6xjqWrEfMWYZGKRp",
  "key23": "4iXf58NxqrYXeXxHXTuaFZPZSYVwANfrjEbRAiYeZbVUgz87vpdpdCn3dbZMFRuze3P9VEr16fzr9giLpgijpsN8",
  "key24": "4J3TmEx1n6wrFnoxMtZfxc6mL9GQAj4SQxbXWeYzrKLgBqT5NooYNuNP7aYCPe7zZCG9XXvqxs4rmhKTT1PHrRa4",
  "key25": "5DjQbU5syEk1ecQNu7Nj3G2j13Tb2qLoNSZT6zVQcAme2F5HRivmFS28mfJr7hwpbpXZ1C2ViKUZX443eNwmwYoo",
  "key26": "5A5QEwT1Ap2HpNF59d7MuRdBQohe45vBtyNMwh1kMPwKWamq8B4KYhTVZZjy7dEbbNC7USFqHeCd1oxWfh8eRhk",
  "key27": "3AJShDLDgn6TJA7pCQNAHNzESPjjB12Abrfc96F45ZmEqiUhzRdHGBABxqakre7dMqk3JNDx4sPhZ9HJF6qVpgeb",
  "key28": "3yrFyuUYxM8E8gYdNhPZzYnLN7XXBMi6MMoKvpyw2u93MpyrABJUho6AzCvxkFu7QeDvM9GkNJTFrgtPSdK78Ceh",
  "key29": "2VjQ1VYNWBC5wEDVAiMZTc3S5xgqahnDHQEVYWwshHL5phZ44XkihcuLa76fNJx3uRFBqg4hMe9SkVPpSXwizS3r",
  "key30": "2G7F5vwSu8dEzYSFb47JbiiwcS8SgSbvkSQeHrjeWR44YZntrfDMQRk38vSbRFU4XaK4PRRYgpzK9RjbzxFF9eYf",
  "key31": "M8BLRRHgijMz6qVSSRuxgDfoQCguis1ZncR4NuRnd8ZteJgg8gC4HJtmeBGrS1WMY7oWBMFuDVLibUoSmCLPZRH",
  "key32": "5oFfZZUq7WL5B4Em9eRFrubLqPru5GkzN6CFKHB7A9t939ytmaKM9uLsj5ox8GCGTkCUw9AJ4EfPqpHK3eKQau6w",
  "key33": "ECCdeFRvXyb7MsQQ6fFRjxxvofjt95yJAjMbGCKYsyoijJD7wPgoqvL8w8aytTu56jfjKaRiojhj9hCcN9kJWv8",
  "key34": "25vAfgDKKDNq4ZhqLT7jVx7xHRxp8NgjYDjrXVhzSYXUUsnd6yQSu6ZGDosoDNvv7p2Lpz8hV96eABccj9JUovwZ",
  "key35": "2DuBmJyYYYyZq6sd6fj2L2PWjFoShcV4zKW3d2DQ8kt9isw7bZRw3Fd1iEoXqnD8XcRbZqXwHevK8rqypgndhG25",
  "key36": "wLoFCjFiiLuu88S6TCj6LqRzYN1gRfQTdgdV3ajFeyPmWHpCfixAY97Jo5EvP1YGWmHcYCD51c33zRGvdELz2tE",
  "key37": "JR29DoEBQCqZMB7gAqDcjKimx6PK4LRF8eyUT3iJ8jbPv66FonF69gQaspto9QrobywCKzNGnnCekduC5urjTZX",
  "key38": "2bwsA2W3hMzqCQpDMgiqm5EjZ3jmZ6tbsD2DjZJYvbZEZxY7qb8dKgi5B1WhU693iv74e6DVc13Rbh4CCWEYsnCZ"
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
