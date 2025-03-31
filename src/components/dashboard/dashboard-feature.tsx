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
    "5v8rmuszYiBiXFBTCNxVXMSRmzT1MT3f2AyqzueAbJXcFEK2k4aetUU8BgAr7b928Na5MtNDGEEtjcpV43iZeDtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jRERPk3mFuW39HxGjHZaYmr6dH9fwwxNHs85tKxjN8AdwRRBvkvMQmJMTWkyxQS3XRLabACD7xPh7EfNjGnprFM",
  "key1": "4BbqGDex61xo5RFEhb5GWmrArQsacJgXkeqqu4VNdGZC3rjJ6WN64rrnYJaeCWZXWVMjw2AGfL1S5NF9s12ZrA96",
  "key2": "p3yQ2vTLyEzgNhWHnH2Vz3HbupFLb9RSjMrgzt2RDGpzNqKuy7gDeYK1gYmoEMpHa26deUHvUJQLax7GtDN38yX",
  "key3": "3neVKry32ZYtPhz5HdamzPheJAkvpjiaDZB1wN6XkMHWjkhgW3eCkgdFWc8ySAzspgjt5XJ4Zzh51pKEndYEQCtu",
  "key4": "4EQJeoPmYQ9GcH4dyeHPvA5YrPSNpbwuuR5T1S7Qe4Z51rzeLoaDYH7N73AaEKPCXL8rySSmhjpHRaz5ZVY3XWvp",
  "key5": "31VP1ZvKUAnKNw1pzJDFprmwMk5rM99kQjL6REbap1cL9d93RbTc1YNqA6umCEmqZPkrQqDam6s5Y66MxCYQPaZW",
  "key6": "4UPLcnKxJzwgpSgzs2ZkepPGP42wRkRNwGW914dYi9hUKCwhwSYbAEK5vwk2Spg7uA4AGbh8EGPNKeTKcrdJVvNm",
  "key7": "3hm1doeS6M1akPEGEwZfyyBjAQfPojNEjSyTRFsaf6o6zbhhBqXdM8bek5x68g4U2kGab6HhyPrPh6S5UDKWaSJ4",
  "key8": "5meM9YnAXKrbEPxFSFqtiH1ZePjZFxRey8x6E1cD9Ar7Tc3kzyXQwdJJfBhFaYoi7WkWyBQQqXJDPK2FTZfuKh5r",
  "key9": "kTha5FeTaWhRL6PmEH9zw6g6TGdjbqGvbtNNUShXmhfcYySHvmLFmE4KjAvjvZXv3Pb5iKxhqK3xzcMScf1tBqL",
  "key10": "iSvR9eQZgxyxH9DJcc3349yAof99RpTdMu4G3zgPbFGHHSGtzbUgusaMFkQYr1TpCBitMz5ULwayGG6rLMkGbn3",
  "key11": "5kq8cbCqyKGW99rnkydphdJ7pqLSEW5pEHh2ZpPrxgBb2hLxzycohq1nCvihhnAeRSXgPfw6TzGtvqbGYjSk1Mjj",
  "key12": "zXSZTVfPFy9ForkQHDXL44srHRK3kvqHKXjo3Sd8EST7prFentJeGriHdVAoWYoPkJ56fAN3qT5M5QZNVxURdiM",
  "key13": "3BB9wWfVmsRrWkBMzeYasPcEqkYtudXNcdQAExGE7jwSAUJK3rPmmqaLPm56ncFvosjUMDMbSJLXjKMhG2E8S78j",
  "key14": "8k88j7RUwvv8X7nQwEzcTHDpiVSLQye4YoDbgUPdhQdYF6GH1whXW3MspCT6McWghLPTCSMVbM9bUxoSSFz1sZ7",
  "key15": "25M7XwdnrxL4eJ2RBcVEEkTpeS3f6SfPKvmgNeVseupQoYWFPhC4njxh8biQv2ejdDFv8rQFd55acrcRJGvWKsKJ",
  "key16": "3N8arBjakqH9o6DYuXmv7grMhNe7cvccrBBHWWShtETd4pWUWqukiQDbDo9ToYt6Ycra7KmufvMsQsEVdHyqbGPJ",
  "key17": "3DQ9Tf4D8Ck4E5KBpVxr9azAmJauGoxE1jrnEDvTyubw1UjAJuu1WYrCS5Q4fY4pTf8L8RJhShs3tXNRz6vuQpkU",
  "key18": "3MKczxiWYQsD2bzk9Wfp6WhbSi1SCG3PoCuQ6BAJdEJxb29exzV5mRZorHAnjpfNGgCX4buh2FYomAUnrnB7wAUt",
  "key19": "4Mw4dCT2JtNKQ31d3jNoxUFVkwvUVahgdfnDKEnKnztTbSazi5rPCuSipoD59DTCghf59aNUvZxdiZHJeFvYkZdD",
  "key20": "4ewNK4MgMcok57MTJXgXmNiX2wuUS3gzU5U8LjEuMEUeMga8fvUY6FQdhvnF1uYCyi4EC6bDffSVSC9fNwJR31Na",
  "key21": "1s9pTbqXMeyqZNj7o6DBwFdciRiokk4g9FsoPE1fPeiqD8S28dM32jDmGaqf7kd3i11E4aTDqKgvEejyCJzg367",
  "key22": "5gyCyDpkiVYDrKHYXQVzeMiwfvdHb9aDdLEyf4cg3H9myyVw38L3KPHeciMryHMfdjREPmuPJS8HsMfLZEnXWYGn",
  "key23": "2jhNazK9DrymHxpf2x1BvMJvXrrSYJxzHjYp8z97pEjj6ATw2XH3nYtC7fLef5TxToWVQShV1qkAitxGX54KDHbz",
  "key24": "63f1dz3vu4ByoizLmNMM1u5Zs6rDjMyYwTKRiDweqax5HvpAcqbF7BS7df3Qddq9sw23HX76nCLSt7FAVJPRgTuT",
  "key25": "4ciPNWanFnqbUEdh6xLBEvwed9UuERh8JoqSQjChGcHburZLEKMuHCxrUhDr8o9BrMQcaD12tPxGuq79UqTiH72J",
  "key26": "4ve6a8rst6T9G1MaXG5sGfrBCh58hpR1Z7ZVBx5UqBJ9oyNXsV4KUavcDTkUGQjp9NtAU6cn38L8Z7M5YPTARQK3",
  "key27": "4Mp56N2ngoKnKgKyZqML1Snmxq3KRofev5VSEscjaZZYqYbZY8zb7yFMJFqZo2ojbdyGEM3j5q22uvbFpWbwD7Th",
  "key28": "4j1TAEZN628YmT9DwND1W4k5yLS3jNMczkpFMVv6gfgdnxS5QD17CdebyLFRNXcxyTbLo7L8zRFvdZFuYChb5qEe",
  "key29": "edPZRhCaYAWSLkUi6x2zADz21cREEV4qLggMw3ZYJuukReqpR3aCcpi2WW2N5dvdqf3DM2UeqnP4LgX2hs7nkCF",
  "key30": "3qGhKkun1UKWFr6XkrjoPmPAG4XAbUAw7QVbT9hULbqAaoAcofZPj9YfxmUrC3G7Mq74j7bo2q2QsiNiq4hPBJva",
  "key31": "4PUx9yUUPPnP7uY1hVZFkQKVkkCQAAWCoRBUUHAq1UvyFWL2oAjq9bXkatdiwom1z67W147iTr3bQbTC2JQeFyLM",
  "key32": "RiFii2NzqDk7kGSHKrGwWg25bxwqJTrsA1jf2oC4M7cZrjNgmakyHUH7dhKAhEHbyg8pyfzdF25eZBRJbLywHgh",
  "key33": "49EW926B497UsFimH64CVsoXKXWQ5462Uj5ZtgXsWLxRQXL8h3QJ3752pCM399do8VPLikMFRGQUtJCE8AKnMp73",
  "key34": "2BmsmkxhYcWCcSoyGRc9ts2526s44vqb8ozpt4LjCvmFRGivLGXy8htwekmy4FF8EMW6iSehc4ybhLq5eybDrq6r",
  "key35": "sMSZNU7GQVhHoVPfvbieVcsTnEotHXdy9MPWbuMvqyeTDXMDvYy34s4Eu7Uith13ke4H7upbVxqmmqW7o3Lc2MX",
  "key36": "2PNsmbqc8sFn8r6GXpyc4T6Mhfh5aw8Lw9x6DFJ6k1ivoUbjVbVpQbXPEp3wDunYfBpabgZiTPuHTpHL38ewbcqi",
  "key37": "6bN7VGqBRBbV1scoATNDDtoSyvg9MnNtmRyGz3yzhsxuz7CnzG4dp4EoUVs3AFMcGHch8LKTUrkH3TGGBjuynQ8"
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
