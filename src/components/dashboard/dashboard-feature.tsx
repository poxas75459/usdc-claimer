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
    "4cJQFstK5y8Fd8EMKSSEUzGQ8ozmyqDNdLKpvHnoVsLoh7H1sU25M6hMLzm8qz4uynVwHoCkS4yPQ9eVQ8YoMn9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "urTDtKSRXG44aMxvH8cF3h7pG6VwiXzkdRDu7fivE1xU3cJZa4jvWnR8kj2wqN9CKFWgEg91cxJC5K7e2JS2UFW",
  "key1": "GtHUX7SB8UEW2ykQ6KMN2vuP4AqSToY8pwdspsxKuHsgUVvyT4U2ymbHwyCKMTnUwvxhrVEJMJfzo2bCexVXmHm",
  "key2": "52VanWnYgAFvE3FB59qSbn2ATAKui65k6aum6Niwws8tzG69sJYQSg3XJzmGJHi5YA8fRQDjQoprrsopi7dRzxth",
  "key3": "2kVN4mDD3PWDJRf4o7zv2AgfPBvs7XdYazDetH5aLyuKiz28gbag5PioMaoPRT6rMWefC81cbxLKy9pWMS7DvJpn",
  "key4": "61Vk7NjYHMu8t1jHcowDVZ3PaNfiDz55rf5N2y2pwHa246iLaviaKRWoCaVnX4XQXfyyTLW1FLENEajwyi5DkZn7",
  "key5": "2mcS5hAn7nEdNcLG5fAq8NHFsjAxBY1aQ2DAcYuJJ5zqEvJDLFSq8MU73gC2uaav9YbSQrfRCVpwAxr2Gcxji6Rr",
  "key6": "qH12xkK4kmBAAE6L3Zsr3Zi7xnAc2Bzbf3WKaCAtrhudTkw7AjSkXnTudTgfmrMwiLzqae72JMccn9tNC1behdn",
  "key7": "4XitcncpiLYLFuiMKPGaJB1GANv9R4uLKsBLybXwE6tx3udo1ZymoV9dNEvRkXwARosLucE175jkP991yKDuY5Qs",
  "key8": "2e7EESA4EdW3v73fXBqmHKKBxzDNdK6N8mFmHQZKwvgqbDkTPSX1qVaN6Ld1vYchFaqhxCSdR22qfWm3X7kvnvM4",
  "key9": "2wkM4cC7bNZLtjEpBvmYfvevtf1bBofmN9GV8U4Gmqa9rBPhyDCMph2QV6M1VyF9hm7fpeKr6LjMLf2QxYZnZaAg",
  "key10": "QpbW89QgdhyxbXRuBX1dV1cMWWY7Rk9xj6x6iUcWbhbxmRpiZ6DCafdMFzKjpHcQgDjYL7K3zcgU8JZYiJtT63L",
  "key11": "65sUiqmBpKVedJnjPJg2ZKBr9ZumBZ3D4hBabtU8vGhu76J3L9c7sVY9GauhVgmuRA6jKkQyjEKFq6vK9cdudhP1",
  "key12": "Rtaxim2W87WLcWiQHT6SxVtWGK2AMjEVkwQTh63Gu6ajKLEMtNibQdJ21SamieFJG8JrKqWEUL3Ng43ibNg5SK5",
  "key13": "2aZQEwxd3C8okNc7go5j6MHiGphK7pxPrzyArQhoroPc5oLEt9Ysu3NhKPhtefYJ25rg2qfMmXnsXeFDxK8ewAtX",
  "key14": "2hNH5FzRyCGNYfyL2AthYrvxyAkQoozPEQEPBEF9sp5bMtNPHVv6djBLv4S712wLsfjPHNm7nh7a9NrHEJRDRCeK",
  "key15": "4AeeJz9FM4sjkmxKLHAP7AEo8Rj6hgM8G1w9aXC1fZoMUSiZE2pNgS4n37J8Mc7YAeAqeH4EdqS1Lwt7sypuw1kp",
  "key16": "Cuvnwh3agRC1vLr1Hixi3xLPPA4dnMzBcoKyqmBU6KNJXUAh6Xkd4Zf9Nd8najChFbK3Xok8jCRsJpcuZbMcnJu",
  "key17": "2ZL4H5GDqjnrxkcLr8ZdsX9pWw1nKq5CDDAH454mNMZCU3cwWU11fLJJLhwXEyrvCmnVCk36HQbL1ypX6QjTjwNe",
  "key18": "4zvPXtLQQao8AjWqvdKMHygaKfdMUb5L4JwyiUqCXyjXZX4EWJgRNvkM2DSpGLxVWACRPJfUVPcTPoWX5uniNSeF",
  "key19": "3dnGXUwYBUTWfS31QKPrmrVoEeT6KjyJfmm7aatvC26jEG98QiKYTSxYtxydvoUEYkf9McZPxnfJv3JyhKmhgnrb",
  "key20": "tQyWLeidopxj43tdQZDAeaNauzNkeDFDZwuKWBv3bZCPXbMw1L39ESA6H2SFd6BV4tnTVrTHfBg7Mr62THRHt7B",
  "key21": "5gAzr8ATNYeWNPQzRZy1MmC459K97SRGpNEKavr3Femziuv1qop1hgo614hinW4YQz4LjG4oKNqabEwp6hPmbNrk",
  "key22": "2oA21YMdPMFUMxzteqXs6kRUE8SBRJ2g3NMsevN6JYeHc6uyMEU7oUHrc4pyL37Bg9CEZsWWcP793vnKvwq7ABXf",
  "key23": "8EptGKKMgiFQ9VXeNG8rYriryoUp3TRHu52S2wnZafnaprNyKguyWaZhBTc2bsLbUbxAFshVvTgN6bGyR1yQVhv",
  "key24": "mp5RTMp9siSo4skJ18BycdGkFKrFniuHwnM5Pcvgg73kjHVwjXaFzV7gUrPveNwfiv94avYGoVyE2vzzh2nYgGq",
  "key25": "pU1e9aRarFqixfCssaLVrnEBC5cfP6YBBE6yywEv6jWyiCL4JtLL1YBUz2mtfKZNMRPmxjc7zS75WezX4yeQeN8",
  "key26": "NaQT2syRHSmCbmx4quo32X9JQ4xc5mt7wTdztnkRs6DNQaEvj1ZXAkNAoaLCV5PZ2GLga2g6pwMLCnHzF9fWyZq",
  "key27": "vwhgCTu4fsusdzNWucPaZxR5Q2eCCjvjLEDKuJaghoR71DYQBTXi8nNLeUv7kEjsd3aD44F52bWs5K5YchrdJCk",
  "key28": "3yP3x51nKeGjChY4qFTHekivwMRRvCkdSbUKw4Q8GGQhEeceqx1TDSKQr5U2h7eFgKdRL8qu9ZEJ8RX9L24sTF8U",
  "key29": "3AXSdrWajp7iMU1PxBDy7Uxk3GS1KAScCJmTej7UrUw5QitdcnKa2PRfd1NJ9WCdwwN6MxUAXmLpX51UpPgd2WDk",
  "key30": "26p4uykcCCHcreLbg8QBW1FCiDVVm1UxYMXGoXKjtF26AcvsEseRS3fjbxJMcBgoZmWtMCFygFL6JGaAC8UCTYNL",
  "key31": "3MrPSD2tPvt2yN4V1Vvfgca9bMJP863SqoAFSLoJXiDVig7khDcR8Aon8yEBJm4C1Xw8CrjxQD6gff1Q8kRGmicV",
  "key32": "2oKWt7twznxjFFq32S2yn7xQfzz5L8mDf4jRMA8DEANWGBCgoGZK1sTwS3gV5Y6tD1jUAdCnS6DnWc3YstmU3NS4",
  "key33": "zvsw8vin3YkBCGr4VsxFSxaoobEvgPpd59YQV3PwWVZCzzx7ruPDzsVHsMaXYtEHsiexBfWBpSQcipZmmz915YN"
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
