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
    "5HNWpHrccQQk41q59tX6XPt2wV3Er1BkgMgJN4J7gFxu8Kaa41xqBYbTdLwxnFn7f9ECes89TqkfCBUADzagGfqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RmAYfgW4w7uFcsanrJ8Z5oYGyLoo9ZEZ6P5UAseXqbf1jQCuMLJY8hbe8xjVS3piWg28NsrrRfJUav7kYZpiQbr",
  "key1": "3tin4MqGpfJSgPwmyxjXsjSuKASAqwzqkMZ5jH81QGcH9bRqJbZev5LELBzmmFNR69frtobgUzNVj4xR65wFwv6z",
  "key2": "4suWgQ7vtaERoMVnvGbYbDa9CHPSsTP1UieYq7bpFHHRk3EtqCnb3P8QqmFwxoq9KbcPpAWudDhxfTEKLVVAzMi",
  "key3": "5HFGktnbD2UisTg29Zts1rnWiSC15T2op5gWcy2CdpYxHMbHmDtJhzP7k8dqpbLjZ1yXdpZwpXxr9W2qniRy9uz5",
  "key4": "4AtPqCJWicWgEMDDb7XEZeYmcoE8pjNXppXsSG4vH69EfSFVsQtYexE1CVfUE3J1BPrqmHGGvBkU55FCTx4nQHUp",
  "key5": "2tJEf3VbrfdU1wysriueHF6TBSJuDMHKpiCVTXSagkBnyuFGh5kzGS7MpPkT8Zdcs3ptCYYBbbzxGocy1KfrWiWY",
  "key6": "5zsH4F8ba3yxg3i8tkRvrAcvbaLu4pyw3CtZHrJu9kVd1833dNdgs98kdGnYzeYpD5nJVfAjnBM5BVXX3LkC3GLA",
  "key7": "B5d7oCiqsJXnoLxieDK8rZ4cSGgBpn3N4FoEZQF1qhJBW1br8mfRr3WWfhuMx9DAtJS5UZpwpAro29s6xXaLzYc",
  "key8": "57ntRdLHT1aYo72YjPmKQpVbs94GZW445LPqesGPAqcb9jtt7bzcfU19GHQ6vaGqzGQXj2SJ247yXrwoLQr1nR9f",
  "key9": "5AtC2ZTZM5e5tZwbJDyF49BzABJ7Sr1EzzhB4nMWw4t87D9drA5L7iSyFyMHA6iRKtgEaqQNoai2JzbTX8dRznS2",
  "key10": "53Bgq8xAbU79cXN8Er3KXRKaQNBxQXXxEfa3duJKpYyM62whPV9Epj95Vgwa4oEr6p5V4sA4561PoxGcAA5Vk4z7",
  "key11": "1UUoEtQUba5zB5n3WTLw7d4xuCUDFEwoTu1iKzeSwV5b26tzZvcJemJNtQ4BmehxxLQRMcgNcckYk9pFa2k8T8M",
  "key12": "3u7Zh3LpGGmi6vxb2xDhhYV7K3syxyUuWBWp3nQRpD1uLtuX444bJbWgcT6GWGB7okQinmeuwiX3T1CeYtiN2tiv",
  "key13": "F7t85LYdwaeTSGv9Bbox9eKF894tBKtTd729bitmVqCA2CZe9JkR6peFMvRvH9mgqq1nmsUSptViuAQUQ1ZyXGR",
  "key14": "5y8tb73V4Ag3cUc5hUTQs9DsF9zD6aA5dcCnkrocqhSBkMArJegb1y2p4MakWQ9DqjG1bcCb9LY1QWfDuLEbz9gX",
  "key15": "4Y1e1mRPLj17fqQse3cnXWuhYshZMjNBDb9utqa7KtKqGfdX59FUhDF4wiaDgoiKXpZWrc2evRnhcBWJEFThTEXn",
  "key16": "5TSADwbfd6mjw9HDWUeqbosheTTVkyDTqMkezFQNLtAGiYzjuP42jX1RKBabY8WegCiiukfs2iRAxQhncao4fqSg",
  "key17": "4tuttdLarFeTChEdGmDdUy11R1rDJJYebGz8ow4XF2nAcZxH8fTbeJS9HRJ9g88CiqQv74KyUcTm8GaYzMjF3gir",
  "key18": "2s2mkzDgdQVz8PTCwbCTeushBE6YSkX1fyGAuULAeVDfEDmQfdiig4ajJNPQaMV956CNEQPnYgY3yLHgz2xhUH2J",
  "key19": "4SdXP8ttzV5RcYoDswL2oDonnTN8Bjv66CD9AtgeZL1m8MzFSxeYATz34uLzg7xhjiou1i98ZqE5m5SwQ9YSSMRN",
  "key20": "H7qLKT7egecSQb91563CH34ZJwjYv5tCdj5jy6xvPM1NvJB6orD9FiQD8rrHGUML4hjHsnEh87SX6SnaspaRX7c",
  "key21": "3GjfpdZoB7mvXSs8hsq7XX6Foh6fU1g7hpHXTZmroT8WCS9f1y1pkWxu8GsLwPfzGKaFNRbyPvWUokEYaxT2ocBU",
  "key22": "62nx1tEX75JeNXggCmfW5iZiVAJbN1WiuS7RmXFphQMFt23gXN9Re82BuTGVLWX1ATUtULmxwBSmWHzzoQUmjogj",
  "key23": "FEbqA75LjQfYKv8XWfjxx45kfZ8t3xD6NJ2mtrwwnhHnTVsFyxwE6Y6z6HLkL5wdQtaZ8v4tNwaw6koU72GxwSt",
  "key24": "QGHG9oTvcoL8BhZhcYsgZg9LVfQgoXJGovLdhDqCwwrxCw3DZb5BdSW1PpsEHnH23cLdne5XXQ9167Y6YL9ctgb",
  "key25": "3rftbM8ioJ1obKbvPaYDUnkk3ZHTgjvrhxyFwzaJZ8AWrLRPMyeqKS3LcAjAvtCTzSDboMb9PA5UFPkfDXsk2LCg",
  "key26": "67cioJJ5zoem4ZTYVECMyvYZvaQeSUsoG9rjdW5isXcBxX774L8pvWnwzWPSAkN5KZRGTvP1fiSvEsWCJdBSm8qk",
  "key27": "2zbJ3PxjHnvafxFVENQ4ud4TmECFP9o4gHLVeSJUJQ6b3NT4zdd5tCELqdpUK2zZmw7xVJ2hLXmRBMaAmAWJC387",
  "key28": "3mAi7C5C1DykKdSqEEdDFjn7GvbiMEEKBT8ZVngppEha83acdyK9fP7ANKRsLbudpGnaqdecq9hYFSGGZp8eYpqU",
  "key29": "2JDGD1C2DQozxR7s2k7fKYbjn96LivpW2bvbpTfW8ZcFTEdEPp1P29uRRetRoBHRXYbfyHJ6EMX2hygDqFYQn57E",
  "key30": "5WMMxkskZFGAaU2LoKxYxsWvoNMiJn25Ryx3gGS7vv3NY5hpBA9JL1W6K6FDZcd3zB8fruj8rr2SEL9kRY2dsjvq",
  "key31": "2ZXP6UHFJGR4DhX1ihKm4AYpbhUJikkBbaWgmU46EqSqJgoVejMzLTkZCPRivs1pfEW1Xu1BxPog3AWHSviyebDZ",
  "key32": "N5dN9MXrZ2SnkdU9BxvAL7PUdEdwsj93L5bh9nhw4mDUdPLAtJSq9wHK98wZbbiSkKeYFAuXgSv4K3Z4Yh6G721",
  "key33": "62gWpqw1uCutU1jK4uqvzmJzARVkXBeSrbgFkc2oY75cQ8sGMkBDUTNsjLHHhkfXRrmD9Qz3FMASfHWEx6v7iyr4",
  "key34": "5eZ9Xzkk6reT3rZc7WRFMcBNVgzWvFkDwBMMQCsmu2qci6XPPZ49Ti3dqqACGoCyp14vqBC7PR1ieeEYEiUyFhGn",
  "key35": "Wa4BVkAD1Z1ak3Cc1e8R1wFvAzKJHX3TR8kCJwxreTeSVLuoXdERNqSmwbw74FfkWUeGs24P5HbEnKfQVsKJZVa",
  "key36": "ATkTyW1m29h8V62NvtqbwChjJ6uqGgAzz27bHvywz3MKt4xqud4vUF8egJXoEoFYBas79NWKbgHu39YzosZUcss",
  "key37": "3oJr7Be3ACuJUaZAgEMkiswwo2CgvVzF4ojyrA5mM1hx6cLWx4c1nmBXLcdKcSsr7S6jB9Ko2ixh1xZuhk25yT1w",
  "key38": "vfJMPzKshwRMnov2GR66uKyiNF7Xns3fe2WHuUZZzHGZ2Hd277XptJT7UDFNWVtZA6hWHtfXxMATDWMNbBNkEF7",
  "key39": "oFTK52rDkyZifDcWfe8q6kivnWUDdNfph9AdgAv5idzpfDLESGYogDLZti74CXHHdrNsQxx3WWuqDGf6U7u6RTd",
  "key40": "3Q3uABQaBPeWntmPAEQqVPFHbLFaeiqCrMU69dFgEnmtLYtpJukpMcCW8wRp5URtPqdmqxVD4Ke4mUYoDQUuTDWG",
  "key41": "4p4XKFbKV9AEQwbVmfAWf2VYxZY6EMEB4YgVYNRNxNiDscbZZXmkep5ymPKsmPbnRVK8dbwuSwfR64n9tfK6ybBN",
  "key42": "5iX4RzyoGXwGxkwK5orVVhqjfnkPggW6NwZGhCsashhM7iLLoAKZaGJSjVzkFFwYzjv7mC26FwwxdpLPzZ7t7Jj6",
  "key43": "4sQTF7oV31z58ZVTAMiiEgN1cJpk5PGszxDF8muHQwkkDov8jH43LyygbECDFmrgpTVjxyVeyUiE5eC9t4vzG6Rw",
  "key44": "27K35wZvcw39xZQPa9T9MUGxd7TN71tkdVhAJT7Xfj738fXr9GWjHSaW3fNHwqPZGd7jxtS51Sk2gjhuVHywCQwu",
  "key45": "2p8gTPLfyBbiVwFr4YvP7Sc4Goy132Y14FjpqGsV4csnJvt9tFkEM2YmgX3vsvcMcsXp8M11FktbSaDATAs3cwM1",
  "key46": "2bcPVTWTzost1oA72cPeLnPK4ohMaMW6juCSLvjjpzTonmfKzxjiRfgHyTcwaaxPay5Ycr7k4Dd1pDw9xkoU1jre",
  "key47": "5Q4oLsGxvvu6JXtvijTn9aok6kdoKKzRWXzgZKdtMLAubXNPnWmKs77aYmgKq7DGbUcNwPPdZvqTW9r4gzJjet6T",
  "key48": "2mERvpkjpmLNabJJUMLXzXSCZibL6gZ723oTF9aAk3WGegYj7RYoSf79pNQimtr2WVUF6N2ZFSP9ck77kQsvXXjf",
  "key49": "3HSmmkPLDHiN4wTtM3LQ15bppXjvVgUi3o7oqcxGK3vkaSVU6nA6TCzJCfmnA4fGFRT74M1VPMMKvAfNkTZidodx"
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
