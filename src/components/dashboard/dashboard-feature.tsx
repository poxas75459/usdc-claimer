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
    "4W8qinfS7gumvKyRFhp2Y6yrsTnCNWahFjzBNakt7Ay8V4FJPMvqDpseabS5aNzwDDrifT1dV5SjBJa1uB8aLGz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V45cLVJZ2YH1Eb6EwjiQQmaL2tKFS6tVDoq5LLJPVXBpQ1uuFsBWg2SAnM8Zh2z3JZm2ebQHMQYkmtzFb4TatQ3",
  "key1": "3MoFaG9DBg9QBRDxTnmrRTL5ShU2J1Da3gCA2up5NqdvCdKJTY9qTt119rTJk4z8Z3Xni1GhWxNZF9inoWbPJ9ZX",
  "key2": "4DR63Z7ZWYXzEqBA29C9GUSnwyx7cyjxV8gV5kgH7CddohKCV6vNKNpMHSWXxZHmJijyJgjd8EPnZSHHemKWzGsW",
  "key3": "36vooUXbMrLUDovTf15mD2VnxKkuZVJH6BKio1aXLiQqWTkdsp691zWfbUZKojWWFZ4m6pmAx2xDTnRKp3rCVFhx",
  "key4": "62LbHpbTzwZQVQUEd2Z2Ne9irjbQdp8wzQbSgsKWmnahHZHvwMCWQRK5p9HXpsvkMFVnbX811hr68MrxUaacXNXq",
  "key5": "iyBMCygrqJtFDPDBaskb2KEiiUdHG7WxY9D4CBQgyP7XktzrB4bcbm4v5wRwLSz94eXLQ5soPH6JA2JVgcTokos",
  "key6": "46qp5kjG7Q96SSJ3iCDz58P3S8hM481C8JvwQzyhzYzrFKWXtHevVncqTyVRhLFYkAuEH9NSueukVcMaPHrPA9oC",
  "key7": "NGSkVCfzBQ4sX8ypr1wsosWXyAMdkFAoAPqn8ZnmwZ75PNXnTyDngjuCmk6bTffwvenfDX8U9PqUrpyTp5BABqf",
  "key8": "5rDj7EonnRyyhGTCeaUjEBysN9KVV4h427R4RiwgCio3wpjE9kytHq6TrKm518VT7kzTz9v4CMCopNxLYKE5Zk99",
  "key9": "5yUYVqKzH5p1Mrsms6vzN9o72KHEx2NuDZ11JgT9wzstQSZ6afUQqnyuhWUMZfWWv2s6zyRiSAWmgXxqC6oFSJBo",
  "key10": "4t4tKy8Fv55o4mWBHmioEBGbsYojNfA7GM5H2FSktDV6NTuWVVooPFL86hruUpxb29yRRgKtB1SLkLXH48JwPLyo",
  "key11": "5sMXXSXmDrWQZxvJof6HcCmgJttv34NbW6jWCc1yHpJmSETdAE2BTLLbbwKvj6BrAk3abkquegWjmdjE7xf5kuDV",
  "key12": "5AZSvopD5RoeaLCJFoWC6b23JDUsrexrfufyusanmUQETJfnuVmSe6mmADq9KToouA7zK7nhPvPTnWwn2FaJvYz1",
  "key13": "3ZCRJV3FtDr3WnLp5nuBmo9g5Rw1y97FnjmnyZHwJZiB65nEySUkAF4rPpTg74hgWy5spvB8e9RvabcurBHjAxrm",
  "key14": "5byGhTiEpCr3LJFmanzxztcYpFaHiEXkXy1UfP43H8q1qsroejYL4PQZVFM41DLHj4qdMymPQ7SZFn1rxu5ALU7u",
  "key15": "2HzfZZsVkmM5BzWRSGQEj3vhyxuCBqerhYBCc53Kxf8dhGha11M6KDUgyJUFzyWE5MZeAgjR9yLthqGJh4rhB83Y",
  "key16": "2ek5tpNcnwLhdBHrzaPRbA4A75dsXfMfBeSyTSem6gsxEhpBFHtkDLV6n2EPUzf3KmM9K1ASEz8NZEzXSs3oeEfR",
  "key17": "5TNUK8k3PAqooXwHaXK7onXfjA5bpbpPdpbtYUkJiWZhudebs2UArxFu8enGYLRDCHdrdxqKGS8e7Sn8kwUD4ML4",
  "key18": "4t8aDB5WkPXNsfGUMN4629tnu68vUBXLNTNenTNgP8y1ixP3pZdLPWrsrkUvfz838x9wQKDgPVcamK65n27zkjsK",
  "key19": "e4ciisuhXDKem2CR5jYdwy2j2jj5UtJhBfzBThve8319vYTXRfCPAWPxWV5P26WaNPLUTEEmNaYiM7h3Ag2wNE8",
  "key20": "3FRtHDeXCQjaVGkhk8qcoRJnUzfstEHDDsf9gZ3tvTRQJEjtMWZuNnkkj54aCwdUgzPwg5VRihMbH8cjKtNkPvwt",
  "key21": "uNF5zgmPYKibGDoPgL7eHuUyFSL6aUb6cZZmuzCAN8JRysDJU4jgAo6KFoAFSUjpCDEqtrxF3Q5zq9xL3XTL98G",
  "key22": "pqZqZRm7STsQVJX7PkkEqtEPKu15sGUWejkhNZHNXT4eE3iV6QH4egkxABCbrLpk7kYr2kntzZ1jppY3t8usazv",
  "key23": "3ob9fst8t1nUJAaPoU32BhZprPrR2Y9z4x1WdEvDTAbj6QjW8QrKt6usn5qLmCGZyLGt8G36MBNSBpG1skHRAsqK",
  "key24": "jjLGiuTwDF5PNtNSFLxEpLzitPQZQnk2kgW9DXVEsqbS5CTw4GmbWPgaududVRF5UqajfeAhM3jiLmxPfe71Q6f",
  "key25": "2VHizJF16RRQmcSzhFvCEGTZkontSqCnneGWJgcFSPLe8ab6udu7K8QGLzFP4kT896fFgJRDgeCVwxmbDSmoMxTn",
  "key26": "KbMxdYUWBggK3azksy52EXfYZtKxKLSN8fZ7UEzrVDnAn6TYSfQ8DuHH8gwpcT2L3t1qAX9E9pboKVjgeK1SE8a",
  "key27": "3NtBChrgdmwo916s4S8pAVe5qPQVpXieaJfzb3md8YGxJYZFcnCdN7ttAEpma7iaaLz9m9ANc4bh5x4EEWCt4sSJ",
  "key28": "3tDgCER8t79pr2BCPsb83xoPtpf5x5mxMDUfv72629QjeiywC2iKuLUKGoWPD48XDZsjKbfqYVxJ1yjXWQpgQP7d",
  "key29": "67Et6t2j5NwTAHHogVaaGSQWAys3wNHZghs8nY2YL3W8pLG9RzvFonZJyvTPvTGJk4cNpHvi2QiooZHr8Zo4Fs9",
  "key30": "33hxUpCcnLJQS8EeEkZP5Y87ZkHV4WBRMkY2reoapCKXxrNZSezCZ35ZtFZAFMVFGMGc6pYSWiTEbCZRkWX8ZLLt",
  "key31": "5ao5pWZGHXmqymVj1Cg7Pt2ScA9AP7vceA1pAtDL5cPePGp6n1ZtUzkoyn29q6kJ7w4rwJpAnPPEjZM41YBZScKp",
  "key32": "5x8S9RDphpkwrc9yANBVwF2cuxv1dfTunu2zXUkPiqpEt5zfoJaY58wHzevB1mk2uLCSM4PN8j3q7VG5yfaCCUCe",
  "key33": "3rv2V44AgrSkfgqLWMtqkJCadvbKycv4MdfsDUixzQ823FFY1JsSAmJMJUcduckgb6r5jvBgtSvtYdi4vTpwgEt3",
  "key34": "3zLoGcirdFA3goY2E8bSjSsrF4EQgY9bheoBfSeBYAXuhNyieQaGoxZU1U943E3y5iT1sbJgbR1BDfHiGjYDvvBg",
  "key35": "5YLTUnQoVoEznk7dcUMJoaSV3nAH1jwuGBPptuz7XbVHSQZeex7EFFsgu7abudPe6cUFJE2FmAXUEvN9yG3tUXSG",
  "key36": "Ufi4MQz5qBN7q583oevgy3JJhrjHKEsf8QVKwkRApBnjnDhYdb6aFB58thkfwX1cXy7uxK8Yi8NsVZswg1GNJKq",
  "key37": "4ePGTQZ82hQDAfGNJPpw1dNCyonENdPj1SAvMEWk4bXFaeFoCHL1F5z5hZdkAJj5e3PLTw23FdV4T1RCdJBH4nfP",
  "key38": "14xaf4UBzv4GHSCNvEw2JwATDUYcSgGFCnUs6Agete4ZqoFoYNR55b5qCjUd1MWNXNigxkXuwnWF1rDyynHeCAe",
  "key39": "2W93nVMKnCL9LqAvU5gUQWZDnQNEyZDhYFu3kuA6h8hQnH1uFqMNMFUwuFsc24YijNeurdwgzeF8JVV3MaTdvSLG",
  "key40": "2MbpntiJXB95zkquEQD275a2KjJT2F1iFjvU2CMb3JnNTj9evdiUEjpApWZyJQw9u39C1VYF4cPAYgm34b97pPyx"
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
