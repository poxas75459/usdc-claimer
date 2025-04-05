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
    "3p7sabj9QMtgJP2x8QfCLgznoKy8c7am97tsoedmSLKXhYA8smT188NrT7aENTo3abmaMEUdET8LE3feSj3jBrbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sa4o2R8viL1c7wLXNLP615ZzEPkxAgbZbuDnh74SUKrSXXCo4H7oEZ3bekwNoKUyevToWjG3fm5gUxJvRsxY56G",
  "key1": "4SA6rywW1ZNPCCAR6kNmsKearpT7QZB5RoRfyu3A5YTXZKVeitsSLYC4wSCAySLwyYgJDjQgjNybYFAZoeJqKjaC",
  "key2": "vyTMBAQdHXvaSAGV8UkiBQqdjz3XXhjuw7C5B1tsDDE7K3FC8YgJB7vRDAuP2DD7uZJEHWQK7n2VANo1ACA5TaZ",
  "key3": "4ymsC4HkKRCxPZ77mm7YBeE83evK9NkmDydNKrtqwRpE7FLndFqXbEqrufKoJM7zprcgXPhMaTto2L1VYMaopASU",
  "key4": "57XiYqfMiWqUdrS7fYMjziZsYbncwWYwHVHjrmmByPmR8qvuTZJZT9n6djfWKVz4cHCjECntw2ouiDcAvnpLozgo",
  "key5": "28FDkFMn8fyNJJsWRuJzdbpborvtRLJKiDiyHvwDjLtB891Ubf2WfQUdyk789xa4vF1uEzKDj12J42egUYpzJuCP",
  "key6": "5p2ZBVBB761cQGc7wuFjfGwryZ2AHsW4CBVBeXMsinyXRYjk3uDEzrDy2Yt2nR7RRFGvzGUTQCjprogc94XBa2Cn",
  "key7": "3sfhD4vgzLqrS1Xxt4gwXFLUNmZTDvf3y6uub4Uj6FhiumncKXkQUGAVuBYkf2juHEuPFKxVdPETN3AfV3L6XAzy",
  "key8": "4RUm9nzfrAVW2v1LX6SoZhmi7oS2EkwpVHdD88wwyN8De2nRtgQNFPWGqGUtKocsPqVsabbpKxGSRe9xY45Knmid",
  "key9": "66r9ZrHKw1AVJJE3cxTx5c8jKXaHdJeFmaxMdZqcLLi4jWqk9be6Ruq49vvWCrbiTTEwY9ajfcQ1ETKzfZD48Wtr",
  "key10": "ceAT2eMjbYJQbRyhEvrtymiKk155tLR6Me6meNce2JfEq2SDsxoMLjqCguTVotAq6Jma8nEtMos2EpNCFpSUomf",
  "key11": "5bTuVpfkDUCQQ7dTWRWn3JAhgC8LVBVmzZJL7oPovEStGmsSiQpUxEbrWVM6hMughAvfcZtqBDc3g3wehxJ9JrYf",
  "key12": "3Tzz5eK9ViUod2czcsKkCSpgrBBXKUUTCHRZ6xJVnmKmH7z8o4ymivsfAHWGc7huhZ923YPkP46ZbkRNnj6P1EKA",
  "key13": "cMbWfvUrZHFrM3AVtkEePExE7Ht1MNUfwzjKARCuvNwTh57KYgAGaqUhT8wK8HRvFZ1CDncUtzpjhTfZ4sNqrhv",
  "key14": "4Ep3q9ZcBSmPZ6HTkjQtR6Jkcs9N1AzTKHZ8vJYhjrJvtq4GzCfr3aCopPSQM9q6xcbZc4ur8Puc7VBDiDvY51v3",
  "key15": "ctNg8s9y5cn9Lcsz3zf2nrbPtid198XW2AMAjrSUqcURZx9QYiroLBRf9xMfwSvzpGY9nXnrnejLFPPcrEBohnP",
  "key16": "4fSj4GSXfWUVx8ojzKddU4MNcMJwdPitWAC1brB6yvsqimrQ1Hqx3iUaKnkTw4XPiwiYJtmSVmtbpTbdW6fyZzFJ",
  "key17": "57PtkpJWeXhy78XUtpo1XYwwJ1HNsS5YrU6FMBcMuCEHQ9JsHaofK2cr26q8p1vJgSdDAPospFnjBz3w1Cac22Yn",
  "key18": "5itJRjR4SfauVggnnA6J4GxmYSckBW4CpPMxCWqXEDqJqL4GBhSMQ6MeD82cDR9V3VKZPcaKWfRpUeyG3x26xLKo",
  "key19": "2arCVfBjNJj4JE3BMnfGuYuKU2rWS3qHfjoW67thWjpZqxk6GMzsg9mL8woyRG4pmWVdMXcfMBizWp4kM9VGSGAg",
  "key20": "UgtxrqACTMj8856o7t2kfmXusGEYk1S3qnasxK9Q7ARfaRT5jjW68WY1uX1dCeyipi4CdiHkyyhFK4iLWRS5pF4",
  "key21": "3bVQUa2doWU2kwAxd5TPtVZn1JYFcMjyYDQYVcXYpYYqs8wkhpR7YcnYBWUBzPVKUc7DTZWi18wVJzH9kEgzozcV",
  "key22": "2Ux2qDDHfNxzAtNoiDpFZEikjk4Fnog9kt9ZhVoFTRG8zbuRs8RvaU3bKSYrE6KsSVMUpaWbQucwhp4mhQzLQE6G",
  "key23": "61hXX36UjtLY9C2N7Yv9PeVKPGmM3Zf3iKpQPSDfBDCpvu98Jx1MTjZEVuuHNJQtcyeT1hhA1TCToKkrvWumvR1R",
  "key24": "3BRxqUMhAcdVxbGM4W3p9ZcRQ8rFkfkjqD8TbNkzAnh9LLktzcSpanHauFwo2jjoLxzdSkhgjaKdo9VwRoTttk1W",
  "key25": "5VRkvu7edSDhL7WiENzmvqUvkC68dMD2zWdxSAqB3BC5PvFk3KE11bQi5Lq2xoacUu5Cnri52LtcKzbdrA1rD1ac",
  "key26": "51mdGhpYJHSq8o1Sqx1mQBjTCGt6wfoKfs1hnxxZCYRXppArsi75rqqvXFnc9q3jnYH4Gj5F3gJf4wRDidqRLsg5",
  "key27": "4gbu5GZmYFhvXmzhjP5sQdQnzYySgP3nqJ3PPcCFKGB9uo1cqZBRrZyr6UidLZPVqWbgZa6focZB4Fm4isvRvkmi",
  "key28": "29yChU9qQFz7puhQn6PcwchHsLF3ij2DGpesqnBes2a9FGaXLSiscivYEHB2w8ZNvozfShZFSLDv14CArB919Py7",
  "key29": "5RDeiHYHpvsGwMByGatuEkYduDMYJPK829RP2f8hUSiwB71mbC4bi9yrGvVSnjwN4HX2W1j2ZCVLfbeZprSHRM2q",
  "key30": "RsfUh2feVmWwLMD5GjS5Uq5LXhEy9dLo6uTkitLr6zRBQdaoMb6CqUVWUdPth1pJ7n7JAbss86TBphDhAkHyUtv",
  "key31": "5mHyNvYE9qXbxjAA39zprkwN8zxDAdMRrrQMPv9X8vaKfiLptqyQYg6jQCxuGxFVMyknZggfJDrgWfjikqnCedZb",
  "key32": "2NtT2A3sPnXf1PSVMT9NzHHqDLgXFtj79awupLLjZqY5WaGAHHboj4WZ55rzt6BPf19roNiTT22yQU2wDRCKwt3U",
  "key33": "5kvGbDS2DciQzUtGxcQJfEbdHqwW5FN3iGc1MXkpfMpUZTGSDTiCJhS6YEbfZGUVq6GE8WrQ48YgNumGFxHZbznF",
  "key34": "LYQ8UGkzg4dBt9KJsxTkapMBgMo2pkzfixGBgK43WxchzD8PoBg5C2uRvSepmQfVBV5NKHdab7GPKdWzEdJqTax",
  "key35": "53rv3Dkegcq1gAkP4PhmymjmRQH5T3BjfbTs8NrefdrG5bb62XroBjLqjooPeAKDCRr2q2ruXkESXypazWi9h4cL",
  "key36": "5RyWwgH58nRMvp6yaU4FVUDxoCKWHY7CtnfoBFGkU4AHiymGDiBPs4RsWZBF7z27AzjcW4kZZtcHuH6gYF6BdVYA",
  "key37": "Bv6tCfMUQX6rUnmUpMywvcifKw7UNFuZFuJnovF8taN4zVBuXFnb3Jty2QNNHTWedSgXcu5tAL6qMqDbuvDvFcM",
  "key38": "5Bg56hfS9ZbVjhuo35mCEL5HtbMKGgnogSHP3VrXTmHCHSoht1cZCNWvEQWbjT135ZA6ySC4bMPPog65NhX3RrnU",
  "key39": "eXdmGrBJcA9hcrS93U3tBCxqzpTo2Qn4XDWL5vMa8eAeR2k5ebJFKtcdXmq7XTkEn55uC1KNAHBgACLZmP1KH2Y",
  "key40": "2c3pGHY1QbHDk73ytYYUtkQYfBFB9NstJUL413U3eN1nLtTowGhHZiP6yX1oKQhcHdK2J2qGdWirmk5tKnZCWq7w",
  "key41": "2EHDtSB4CaYF8LvbKwYCW7SdEzYJ15m6R9pR9fJ75zmDEX4jvLusLMdx7zYSSWGu8kQXFhWrVgESpdhsNAXVkozh"
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
