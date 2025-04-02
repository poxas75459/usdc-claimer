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
    "48CNuhcWkCvQmV5q53MaU9MVP2wszhopZX3fP1yBkNPUQWhf3nyneAF4aeUjxDmx3WtmW3o2e5AGpJB8oNVXd6rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32WM7eVNz3ctEN3KLfUWkjwEYkCJQrDksWV2YKafqgbzLNJzpUGyMTLe9Dk7BeLbF8kinodkLESmHWXnyWWBtTLQ",
  "key1": "2ikLJgbXZdC3um3cVZd4mbxLPgVi2sDjDq6PDEsKCC9tytCaqoXSVfyzrijx8BRGMGzXcwHtcuB4SHaguUnuautv",
  "key2": "4QfvdEzrPdcpuHX8gjdFLmL2hLj3pySuRoznXFaHGPSWF6e1bTx4UmQh7pBh8UY1pYoFBNb96XCCFhmnxysiCSMD",
  "key3": "5Fabpwwwpv8SE2K3zMBPS7bpZNebdCLXVGb6vx3WrSzM3vXs8RikBsf2u4Q5QUkoTauKQG2DDmYp5RdQiAuCRG4f",
  "key4": "4UfNkUm7iHtrHNhY8y1yM2S4rK6c6BssAtc9ACFLhzNN4AUxb6dYMbkRSvEgeS3662MZBvnQejpAeYN2QeSqWvd9",
  "key5": "WuvcdMa48oSVapNUxUYeit71ds9HdAJEwJQy6gxqGqzvwjw3fzYhX6F28jFSfd9wuDTGTRDYdJMrSMyttYtrrKK",
  "key6": "3dEHjzhg1NAkijLNEdfJaG4tpWadnuQU5ioSw1J6UPzA2hxGeoJLKnNVcrcMXqosPC2rAoMkDxsQWeVtfenrfgiE",
  "key7": "2QsGWf5tk72YoqNcHRF9dcTryM6ZMoKixzoq9tDN9cA7CT68e3LTMASQTvyrsA99tY3o4Cy8YDwVTS8YxhHDTHai",
  "key8": "5DyQpZApkvAY1E4uXnBNQQfodRu4RMtYarXTdrJMF6QdAfv6vja9WBnryLujmeRwASAE4HZX6moGYrwzJU6CZWSY",
  "key9": "2qs5jiV7yhVHzXUdmpH3GNDNkoqykeJPgZvprfksM5xSs4AwE1q2oFrGokmwy39sUj65bzhf5H4eRhs47p86uWpf",
  "key10": "Jx3wHkhZWfVAxzyD3e5QhGWoQZiDp1bo8UZH8fsKcHfJicZX8LCyBD1HJTPfHi7kwbRzF6cxxFA1K2B1NyVEbAS",
  "key11": "5Gygzng8wtR1bNuqEQNG1EUP7GQvoHmb9y1CpmganAS7WmKd3JMzjUY3iFtZq2g1WkAVJJNM7paZTw6WvNUAobZk",
  "key12": "9VYBBZg3CQnMXys8aHYTpYMbMvpzkTeHdfXtBDipS4eWihPYQb3eDuXF5h88ZGRdDxj8DaePfmtovsKmhoxoecz",
  "key13": "3GmCcMhCRDibcdgADwKQdp1r4DyHwBdxVJrKwmsKDEVpvNuva5se1UDxhV2JzEsvNszm6eTS5KBs3uDkcwjCMBw9",
  "key14": "tKqqDYwZ6wTHsuJK2H5Kcd5pdPPzXueoWm8N7gF5sGjEZAGWNfJyj7DPzJQRMV2swRcuMyfVwYMXjtFfTihVS4H",
  "key15": "54QG1CUj2fqcXb3CpA1Ysa7dK5LMXsjLkT27kA8TDZCty3XsWFXpjkJz8qfBNvv3LrpKgLMCT392N6WzD9HFvatQ",
  "key16": "WPFKEWLtwrjYbznhUhahPeXziWu4Tw7cEPfSSiBYtGdCJWXttuYd57zjDf9LqXuumbeaSJxUUc3h6BZFkWp2LeH",
  "key17": "23bb6ztkgbXoNJpVwsFz2djd3WcpuEnwqxa6WEs28dTjGAPDS3sqZNHKnR8ozyqsJif3FB4haBRWowkPfba9RAbv",
  "key18": "5c9i3nn1A3ng1SKFWy8dRkgchEYqGrLJN4cMn8ESojNZBQRjwx1SGn1qaV5q1SSbs6kpecqCWtZGCoLQDp9Kthw2",
  "key19": "5R1BGZneK9U615YapQUS1YTigFTeNzCeEZ1xbYmgPnq25h9k9zJcZGicoU9FYMfzSexsPZERSzk2nqW3jshowSDv",
  "key20": "3hDB3z4CSVdCCmF6cFxzUyozD6sXuL6vp54c4o1LFubxxv8QtStNYTAJAURpWScGB3YZHVYmvDk6DGMLCZkyY4MZ",
  "key21": "5DERgzxzQuz19NnwurNhorKGX2o3HocPyhSiejgjYkJKMhg9GdRvvJRoGcjS6keSEqqZpi1Ms5uM8rRu6mrh1KZK",
  "key22": "pfDLnLp2xmg8QcTVjhGkbGMywQ6Are17rVNsQFFJfQrK3yi28pdf36cDrUrkc9LFz8mbDQK8qg6SUah1N4rCWHZ",
  "key23": "67Z1mETrcoMxFxL1DLiyn9VVuicoe2c8K5iFJD3CzuWXe8ijupYgRvsn7bt7w5hoTDoKRwE8HNuPtg4zBN2XKFyx",
  "key24": "5o3vSmMD6vQDVw1JcGbvLeBUgQA1brTJqvy4KB85dU8Dx6p4YsF2TqGanicxA65MLGskeVCj7j7wrja1ArEYhvwY",
  "key25": "arzYXwoXk7obASyQH3VLmMgEQHEx1ywtVQQgEaJ2BTBMM2upL88D3EeeDuhxHd8dEgrmwqLC7b7uQpkB1KKCWNA",
  "key26": "4DDT4J5u7HvS1YgEHARwZbopAyZR6zxA8TWAXNbaUpYsFiXxQhDSVDDqPGsUF2fr1sXTMS1USaGsGezzqto3uHMD",
  "key27": "ftjeSLgYQkYVyPJM6a61oVMkRUUh1dbMJbHGP2ceojxNxY3zGqydb4oax84wrLLiBWwUBn9W6SRFSWt7qupg82L",
  "key28": "2QpGxLrhLnxc2oHdR5JDWqngSMTyygiJABuaaPUbwSBEq2CbofL9BAeRLqy9eXVNsXpPxhwHyWdm7W58vJuk57pU",
  "key29": "MCyaLQyLTZx78zwKPbruB6KCibjBYknEuX2kUfQ3qTseMBPBMrpBBdLfFmKY3tx2R89rfxzZnDLowLjFkc1p5Hf",
  "key30": "5kj7t2f1nKF1xZaPVr48zzksofNvX4hkG3VxUhypXBgMZtNR5ajwYZwpnxF2BkZHAwtM1uTvtjbAZ8GeUU5v2BzF",
  "key31": "2JKmwjbRpSnxV1kChjQgaoMvRevQkhuKNmEh3WV9528KQrtyWQrfU7gu2213sjwqMcnQa5LDZVjMtf5V8KHSVo2V",
  "key32": "22SEadptou5YBpnmwttTDDL3J8Kg17YV4vpAEPbwVLU73tDuZgc7pUs9FXGnFsedd23475aaDdQ1uku1bt1dB3ef",
  "key33": "4pwaKYBARteAWdpMBEfCpJGE9JyeDKF1Akb6a3KsKwjBHvVUY34qY5nWK4GLy3pm57pL6nZ1CDe6nyzQAD8vWK5m",
  "key34": "46kNazUgDCN6xMtJCZdLXNGhtoPSsQWe4Fqp35YAxqJrDMzY2xN57D6iJBPF6amcDPZ1NMqoy8n9qC3ZdgE7h6nW",
  "key35": "2pvwC7eHM7aCeu7yEk2q2uaJUCYZUfJ5MBkwpyVgMVxGDeaGs2XXgZEhHh4DE7zUCoMNnFwzRr18gJusS35TkhBe",
  "key36": "MpdjveRAGStW67QaVU7B77WQvoYrzk8oxPtvWQXEZYr8uNScGECs2LRpJyX9ErynjSRptpB9oZd3uwAq3HBj2bQ",
  "key37": "2ZzLtRzqphTLMoLwhmBijBgTm4uwdLjsMREJoAPbM2pqAohBhTgTUaxHmNdVdFgKYu2o8E433YASLeb4WSoAmpjs",
  "key38": "44MtorgwtGGTZneUBTyenpTAsZHq2zRw3nEoR7e5LpmNcwYgFFHpsaQVjs5KYqCDKUeqpLi8GRQtdLjyPjsaWZ3s",
  "key39": "KRyV8bWW1yezHyhp9FqwXsn8JTj3cP5ajMwR2TCxWotVwcYjfmbPS2AEkh5956MTh4T4dji1omHY1Z7ZLPkbbWp",
  "key40": "AhiUi9W32pGuYtkJL62oMAFtwbxr8oC7MAEzN7cj4ZUw9SoG3HFkj4Ysy6CzDESBmhdKkQBPaRet2pnjEokaVq5",
  "key41": "3XqAkcNe7JC9gfJoBGXyaCVgrgUgNxq4tpdFxiFzHeNu3sE4cphwBMxtMPtTWE5evYWEgMmSPVdbHbEYfoNoUEVb",
  "key42": "1m3KUfR8UoSJpmekiq8h3pvmwx3NpFFdTMoSw5dQ5zMGM3FUi8WSRpPfRcXhK2fraL37rwNP2B3iiCA1ytP7dK8",
  "key43": "41kc8XmPC7YaNvAWEwp1PXi2rtWdbPHVybaDF9aaC1t9nn8je1ssUBciZdqqBzHr1rGQo2exgpvT3yw8RNJMmwUA",
  "key44": "4yv4jgV5mWqjpeZj3keGFfjWt2JxjWabaW5nv57nuYxNRgCH4yWf7nH8NiwtU4F7dBoDqMEDvYZFwmgskPTY5ptF"
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
