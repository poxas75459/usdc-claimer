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
    "4T31Mz9ovCP2PTWMqbMBVLF1APbJE62nK9YAYEMfaPmnPFMGDNXdEfyUmB4U7VTM5VNpBoioa5CPNo9GtqbDBbgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHz5L83KmjKeJceqXCwu93S1Us3L1X76DR3MvzXWkdQHtKhDx3UQv2hpRXVhAL5BY5K27iikPa1S7vgSLzp7qaq",
  "key1": "3QVMhiC7TNd9nVTkisyKMMjgzGvLEniEnooW6JJQyb8kFZf7i4dJS6Hrx97gbLmg4RDujfYMWqcKHRQuPhZCZXPh",
  "key2": "4MCUQZDbb8nCDaLvNPgJYiNNyWr2JCdUeHyTW1TUzdQ6f2uMEVRf62bf974hpZ3wFvBFxoNVpJ98SrG7QydkpD2d",
  "key3": "BPoS3n3X4u1u5fiPc4G1BqCjSRLt9ms6tmophLDWoyXGaVwSbaRoTBJRw1Y4eVXieNSbpasXLoKCZVCdor1NXXM",
  "key4": "4JTcyv5kUeyRHXpGgZ87AcjAuNdAvDTUJ7SyD1kX9Zc1bqzub2jKmnYj8Ea3SuM8nQFK55UBpGZejGFf26gtBg44",
  "key5": "gWY6o21kp8hEUZGixPs86g7yhgaZKgobWCjWxMripUsTbQMw2gFrBjpk2jEsVBYQr6jM3xXz1GsQT4YBqsEdgCX",
  "key6": "MoLFk13dQKfAHDBCEzt3CeKMjkiRQbLco3hX4W9eyZn1edJaRhPPdy87aTXtcvbCb8pCJJJvJqDsnXLfLJ1Z9oW",
  "key7": "4s1mUsBwaTnXmuRdXvvkDQiVNVexxnrL2eJmyoPprG9Y13rP3stzYNbMRaQCcgL3YbKFPX2QrUTT8Bc3sinRsZTf",
  "key8": "kYCn1cHTgUXvMQVwvwup8i24fumqPhQqu3gDoEGQWK195eYznNC7j44Ks58A8JMH7iRMpjg72d3Ge1ieqi5CGvE",
  "key9": "45EeySLk7RNFsihFUpSs8RsQYnv25VtxDKj7cw4d4jLv6wLKrUiaitTT5adqjxfJTa48n53W2pi4ryYHm6Z8bG74",
  "key10": "4mwby3Qx9XoQX7XBUMNeVvhpD9DedqmxFkLSs7bNY6Fu1nPfcCKyqzw9tUxjcVuF6ZfuvJ6DRQgGpbG13BWRXrRF",
  "key11": "5ScYZtAxomMUjUM317zPAftGD7je8e1BMDPuZp5YCiLPfC4SF26t5stS2mR6JqFpVgasokWXqMEMmuv2h1fkHjMC",
  "key12": "29XGrAr2MpUnb77PxhfmEu5qEfJwmVcrVPWYrnH2s33g5Gecwsm5VsLXoh1WDb2kGmMxEBZ5Ztac9vS8b4A9JZrH",
  "key13": "3SyZnxWMpgUKdvKyyi1Dp1Sy6Lh2HiMADqmWd4rF8bhZMwJTyHTSJPicqthTfqkckWM3tLaXJHXoJZJNWRNU9ktA",
  "key14": "3W8iFW7XX6Tp2P8JBcbQ3Ei6J1AHBpK94ghhHkBqiRoY7YhzdqSfb4Xp3b6oGokYNKj66dch4rkDPHgWx7oMyhL",
  "key15": "4LyTkpffZRDauPQRLhN3pkxhUAG6hFWeeUdth4eHvvYw516C9NtCiA1soKPyeYDNmGGaRmFS5wYQk3wzotkijHvB",
  "key16": "2UM5ma7pmGt93hi9ySEr5WdGPcsrTbDjKeeZnsTUxojCAD4pfxJaZBp1EnqUtzEbVkhuS1a28bQUTRqoyr26JRCG",
  "key17": "61bWMepWz62PihiZGexfAk8cSV7agqkAbJuFhCqSAqLNcnYNrZWBp4kuTV236DqwWxZdPwPz8iuSPgzN9n1wdjQt",
  "key18": "5L9XfYEYg1ep2D4HaP9zHrZ4DBSzrhC4LCgKryXozYC3m3Q3nMtWJVz4ayF3v95Cr1TARJgUyf4iyi9kngUGkHTE",
  "key19": "5tUMNFNQKHASXGJE48nrByvG6oLteZHCFNpiY1duRNJgAsBWCRUYWtWYDdtLq2ywSTkzfgCXFwQPQrS6qy8cAj34",
  "key20": "4nkgidoMDfJBF4hZoyQzXGVQLJkK7JcTr8GpomgqexeZ1BWvqmzhq6cydjCZFYviwu5uBDtGDYZzXnMCJXUMsNGt",
  "key21": "3dYcfjUGnAmeMo3WX66DxYMFS3ZG6cE6UFfecBwWdcQiR29dSC85aWavbgpPsw1ePC6SrXoFyyMbrjdsDWJtjjg8",
  "key22": "3f9VCaU2kfnPPRdnyvFSfCzDYwqj6KfrQjX3uatzfK8pcnayXGXS8HEbS6VpNeLtDzwNcGjtp8R7VQzCxxFWskVB",
  "key23": "5c3DnXofXRC4D7GD7n55dMKBdb5wALr7xgwFSZB3mEBthUUQcJu8NcJwgk1fSW4KGtzBCu9SS3T6wYvCXkGR7T2j",
  "key24": "4iMQ8EzimSAd1TY3WQgKNnG736mpPwEvZtGai5nAHtG733TDmCFEbmD4a8gzYNUthAoKCz5WYifbzGFP8xW1J4zs",
  "key25": "Lfdzc7zXY1J8rV63CmaGDDQQXEqoddni8upRYE8DSq745sy9ypTggy5XgCuyxwEaehV1qQXZvZAGXq8hn8ZFKTc",
  "key26": "4EPy8aDPPoiE4ZBNXbuWWmBwkH9NzU6feohnK4ys9UqgzeGnbNW5kzYCKMWqSSMCWYU2V2pRne8qpWpATBf7Bq8t",
  "key27": "3M8mQ3Ev45BB1SZ98A8hgBGW3vmzdMiLq1nRLv3N1gkRNb94m81vGeZHj5YZxS3FdRuAtZRUZF13mnbUYz59HHHS",
  "key28": "4RJu9bKv8VrBppF6oCpnVwauR3CvsWbYk2iKW2euZTK6Aa9VJJdm6jSjZK4UzN2FdWfaQwk432Nhg7WH5CECioXD",
  "key29": "5BVFETixwWGexmz2rGUChyjNHtcbZyfAYsjUvFW4muaH9ZEKLrFQxyfZSv6gAzBsfVa4ss62cy33vZEBw1bp8aBP",
  "key30": "4KD6n79AXiLBFDxuKPBejHtfXRAXk45s8D1621wNUEVNYvkTfdoY5XdzibH3XX4BJVBpGLs4TuJZDNkSChqizqUe",
  "key31": "62xJnaVQ6WVBok8MxT1zX7wLWNCg4avGCNBWNv8ENjohX8aNohhDKpxQokhP22fmgEzBsWp4Y44tZXaTzjHr3sxM",
  "key32": "WeTy7w5jnsJmQ9tfJ2ngQyPcxJAHg2hcwCwdiSkHqgSuJgRHNDFqHtaBATv3MoCrkFgfdmbUjDAbxfPerpVRZiL",
  "key33": "66N9XbQmLwXbYukG8LCeCcE9ppKwprmrZi77ZEMchQonoww6126tpfZUZfTr7YoZhDEHxtS1KTXA6b6sFWBW44iD",
  "key34": "5MUY8v8nPLFiFoZZ58xySYqZnz9KoXnxBY5dYHCUKLKKyJHB3UvTDSw5wLnjRzB7sjpJWJQ2D5NAAe6qLCztkmPf",
  "key35": "48UkJW7yDGyJF5UxNnyG8daquRDR7mEz16CCs79mjTqFpGg2D8ubxwMavyYK9L8WcmRvQmwi9mbYTJGBZDUmPUFz",
  "key36": "SF8Pt9L4Vt1DtWpVy7eSxQz6N9QXhUN13ZzeikRvnppc44ZHSYwSungYJNqxr1f6d8ZUBUnY8voajh5WJPDtdwD"
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
