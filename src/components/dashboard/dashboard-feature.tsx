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
    "4yFMbiqB5EZdFGzT4iv5eRwHdaBa9jwSGDnBrnTuRLvwP8WVJ6zASkrr1Z54dXFR1gh42NrEE3Ar29LsWBu331xX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MYVXXh2STNsPC8HWq7Rfzzf3Rkqd7iDK63cNkv2fxGERd9or54UFCGUUA8AhD4ni8tB7XMwVAgM7LeQqABWFxz9",
  "key1": "2Q4JCxk6jPfegzy1FadAMCj2ZkGMtYW1vCnveoaCTr5Ukk6LHLVEijmVwt5ACXEvwBTFStjdSMCoLRNf2eeHhded",
  "key2": "5i6bwKd9oSCqg57f6Qg1cZi1LK2sCYN8F59TWkPJbuyvPcwGA1LApACyb6Zbxn7MjkSpqDxTLfz5QMSt7uTM7xba",
  "key3": "24RjZw4mz5eULr7geMJix8SAKvH7CoVFT6mXcTDRN2NnKu39bQGFWTaQ9Wdk4TNmp9Hg5eNfp1e6fFpntqgdE9C9",
  "key4": "2Jmcy6ik6JSpyjXhDDUzJewgQBWZjDXvkY3TXUMqpkqJDd4qFJdTFvJAM1McQNxCViz4VTzqUU8DWkon67Tp9mJC",
  "key5": "5tCibXmhhivvG7yNBAgDVjYcCJbKHUSJj7Q1EN18RXQ7yCViUkfrP9MwGuWnYuYxpiqBBuhwi3iX4LPMmgNeegCE",
  "key6": "4Vrgxpxim5JV6qwCYzH8JxdDN7uqdMwAAkcb3D6FKxQZ7g85Tb3savim5LXsnL74MqbGJFD6Hpzw8zirk6qULnqj",
  "key7": "3Pb34XYFsAsskLDFXQdaX5nJ5RiULsywSpybwMjYXBPkuu5m7Ghpfwh5DYfzJLukRvb43e7mtYBxkWGYK8t5ocRZ",
  "key8": "3Uw46Y28REsypQ2UF5HfxThwbcs5K4rdf8dVhkNPopfeWM4PnUr67f7DZT64NUzh4kZNgQWCE5RGGvv56rSXLB31",
  "key9": "XnHfCLNSKayFqwUbPkYoAg8YHCtSg14BfNAAp7Lxi3mppyvZqRyT223EafM5Gjf5Gjr1nG8sVnieamCYGk3Bb57",
  "key10": "3zGHFHcifQdLBSAmJH5jbVSGKacryupkyVze7upWGLmW8FL69R9HfrkAxj8pLZJnXSXMxaDD52aSmBNkGeH4QtPo",
  "key11": "4MqM5TYGox4eRYpYVA9DoHh6qaFqg9uKi9n2ok8yTDV4ZkfV5v7GfSHd6xBerLtk3e4Nfvma8oZiUPvqyyLUTky5",
  "key12": "4GYJhqtSbgTFyUyh5ic5wf2LZPkL9mox7dxzL69DgqzhTHCV4r5pGx74mMXqS7nHkdrn3buByRYzXxAf2cmQ791K",
  "key13": "3Lk2ctYCBq6VCVJeChiSLz2kpyhUnJcFrE6w2PSzoTNdWL4Nxhqk7Kvk4wMLgWjAQgr3WgwZbz47aDaKpwjY8Pa3",
  "key14": "5iUqDpDJMEn2rEdiV1fu5rZHsw5CsLdzcrZm3oYnDsFmA4RahJk6YcpTJeke3aHWbBjwgR3j5qMyeDA2k6NKSrKM",
  "key15": "54pQTxHpwr31Xhu5xvXCEWs9pmB7ugTcvifwpqs2CkZeVW3ZVV2J7saKYDopwYqMhTTXZiGUZRAHKUYp14zt8Zqg",
  "key16": "26PbVpodYdgxRuTpZtDnxK31xsdPhXy3kvR8YrC56hvn8VM4xHswPZAapWApPLkC83WRHjQuFXSELv7TWqQr4e1y",
  "key17": "369ihNmPVoKDDC9gaNEsggst9PZtG2MEKNGAc6W2deWwtM3bHnhp2BiwVhk5M4LK2fhukMtT6WRVNYPLFLAwgRj3",
  "key18": "2k2RLo3Ajhe7od9ttA7AENuedursbngspYWfDBKfjCAYvQuKB9pZNgzvpfvpUBZaoqQan8MZz5QntMNScEZsptzA",
  "key19": "4ZKxaBYV2NiM6AatGZcLzk2BVMe3SReguUvAVTPjfXUtLGCSA3pJ4v5nUvfj2TBNvmMRzD3duHT6BRGGLz3wCo56",
  "key20": "4W1H3ircfncv6Lu6No4iUvkAmydMQe4Uw2xGn8UDjXxhdzpjV7qJ9qdGJc1FTLDsb2iuAfUByHwGVfQJNXkuTizt",
  "key21": "5Ehb9z1ufgcy9WBXePpeS7WZivEhMEDzgV8TMU9HuHQSGJLi3wmzPGd9z7DdgkQLbvoPhFCKsEidoaeE8pqNcBvq",
  "key22": "67TpPBrzttr7GorVJCqH36NijHESZ3Cz7zgku3bwPHqThUkBghg3y6MNcyt6hzopGod17XSpRxA63xFZJGRB3q4Q",
  "key23": "2a639fsoajYYcCnUiRJRDk33nmV8Kr8P6rymmY4oUee4JY4C5tZKnVV9kQUXhGJgwapqMP6LmXpHRi7eLXktDPGH",
  "key24": "Xc9BaKPsxS4K2bCyPeaN2XU8mSMgEoQK8bTJ2eXjBaFYAVMXBgj8uw8xzQ86U5goFYKz6kcGmsK3L7sMAwxcGad",
  "key25": "gRSovGnTpG9LWiUzXDNnSumf2XSFhJwAApFY7e2i95ureR61jhpDFDBSsyv1aecgGtps76ZVo4HPJCxAu7L2MfQ",
  "key26": "46coBNMgZdH6JFF9rf34S8d6idQm5oSTB37qDHjujoP5Vu4YxmP6FmdmkRm8gHXzjsnvdVtvHLiCuVsPD3MAMw8f",
  "key27": "5KhzqWmbdubxEUjVsnwQK58c3KBUz7neWuAuw2GKXuqiPjGCDL2BoVB4h1fVv4YykVyw9DfM8kwYvR4xRo2jwAqv",
  "key28": "2fuVRHrxM56aAt3Dtnqz6BhqPfEZLkECFHmuqK3GTa49NxDxpGeJ3513DCwmZMWwfriR3A9He92eXGBeqwNURzoR",
  "key29": "4K3pbtmQ5wCv9vfFUZVzEDhSaDu6xYZVh5svNihTJVbc8ZSKLrdsX1Hk57xAfXQxzvcCBM9qEXRD88yEUwjEQ52f",
  "key30": "3wZFCn2hccd37wrVvYdcRPGK8zXSjzGqBKXCvNATbiAXBX51fg4fjt8cWet8NQs7dYCYEhxXWUWC6VYy9NFfBW99",
  "key31": "5NLboPKB21GZzLmmjfJge9bkCKXzReG2gfqZDDiCns3tkPNEkbFUPzby8u4p8p3tLSz7pm81LeijmsUETz4YSSjL",
  "key32": "2sMNv8MCLESSiL6KYSvaUCLAgE6ddk9h9Na6ToqfzWgSnqtCDNeSzriF43cATEwBC3bBt8vmLwzjaWpq6Fc1vJNV",
  "key33": "aFGSQVnXxCufMDGRbigt4BmqjzFyuoFP8f4CywDakaXPo1XuQERejMnTrp4qoQs95V7Vz7L1PtP4WjygFZiEbBr",
  "key34": "34zFbD8WjGiYVTQdaWcANrdvJm8syW9DAMYJP5psmCpuWvv4UCxiUqSk3aCeTA1PuF2UTD1LdtijyzazZj5E8mZP"
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
