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
    "55z56ZqhGH1u4iPRbsZhtcfGboNVJdoQMH5hVYJJ9qzDMtxXDBQih8RQ6s1MPPpAggSjhFprKmHcAHw2zQFtpccL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3Hh8F36GFSWy6xfMJy17g3B7LL21VYM3SsWVyqvmcFPCKS6TVpZhT6tQGuPVfJ2kykv4KUEXbtXmSxUmLzCyPE",
  "key1": "v781nkRffHusXZg5urvkU4mM8v88abF62MUfBL5i2W5AN8Bn3wZTyatigcWqah2zgc5pDJruwt7zBqKZfqZYbs3",
  "key2": "4f9esiK4i72ezLYCpZPsVNxAxMLvoRLmX6v5hruQ8jcoGAxZE3wopD1Eyg36EJLUNwEPh6h71bUMBTjxhAdHQcSp",
  "key3": "3H1rW5Fphk5bB7EpWHvFg3Rp78QMPo3L2ckS5JWYXmhqapvL9YEtuGBvEek64jm41uVXUDPygAykUDRh92rz8x4L",
  "key4": "41zq5jADuSkfDPg5Fw44CKwE7K94oLcKBpGs9G6t9oqWqGmA2vpDcjRnyuUgERFNwWUmvGi2J3Aitp7oDgPMqie7",
  "key5": "4uBNA1wgrBXUxJJ4U5yVPwASctCFteJyHLZmwkBZ6BWCg49xCyp9dhEx6xX6rVgepAuRhWNMduRzouu1jSuxnrq7",
  "key6": "566J3LysFYKfcSPrdMrfddw8i92mNAhwSTLpEeWkTYVVXisCG35imfcfz3PL87bfyTzxjsYpr2FW6iNnncnZdAGF",
  "key7": "3K6VrRCbhnuuStDVoAVPCWN7p9Yh6dKczZnXqQ2SFMLxNGuMeFSxAaF31Bhr5ScSu4kUDjeq2bCKPqkhJUYZUAR7",
  "key8": "4gRfBaRSATXhC4D5SLtV7g4eTx8A8poWXTJqjXHwiiuoPdZf6THe9Rm13yh4RfFcFNELvvvKeLMPaDxwHqJa3WPk",
  "key9": "356Jt2Xpwd48ZByQYos6MkYWE1hgaUFjERHKKV4obNdzMxGmo77m3YxsqMAsgHZQqopa3nmiood2YPmBU58SzEst",
  "key10": "3X6ySdhqp5qMyaoMfffw6UGFB3cvXSWxJngJ8PWcbYRaLEhKkK4F7wMTHSapfV1Fj4YgP5j7fGxb6JrGL2fq1QS8",
  "key11": "2tYEhcg6m3zsM9w5x2mobSrzEyXF1CCcNw5kpTAF113JRaqWKB8BMNWgeZRWHRR1XocXoJPJLrzNYA84WZ8FEQGh",
  "key12": "59rEz6sKDJEfhHnJB8K5dhY6hhKFjHjavH3Qo4JkManvQopdru4YxhWNGeFNBHA8HXupFqdMVq2f4aeAJbG9ZysA",
  "key13": "4xwwiVeVx2ryUdZsCpGX8HsawG9L8iMzhFT1UPFNEimp4HgrW7ysuXsWTxrFNDMQ9oXrvbMC2NsuDZ2rVcrpHF2B",
  "key14": "52kvkgYshtxupezPgEKLg1s6fm9cx8KAKp3ACPFm6tH1zJTZAuvKKuR6FThVyM5AJs98bLKHR5Gh7CeSjXGaaa4m",
  "key15": "3Dgv7LkkwP7UPsrg6igmUpq5nuQUWvf9rzNNDBPn9zeQ4Wp6MyUi1Bwm95nPCoAx5V7iD6itgkdjQUffE5G7KBo8",
  "key16": "5zcijPsmr2HLj85iYRiW72zKX8PEx2g9wEB6rfnvQiTvYtj3tLHZQ19mv5XqTRm9BozGCAmLjoDh48eds9sfn7WS",
  "key17": "o3MP6zfkeo7jCD2wdniwTNpVgmut99gzDqSXcNjhEPtVZsrneAyxrM9fyGKJicxzKteEoDnTamgrM2oJ2YHghkW",
  "key18": "2qmbXuattRD2QgdQqCWvpQd4cBrbJYY7n1vZRWjgNQXNftJdcVToX4Hjx5oCMRN9ZkBps1pKouE82wCnX4Y1L2t6",
  "key19": "QahNoJp5zXoJdHFrPD7kzmxbvEiACvEptDjJKhkKNGr6bCt6BGX7w1PkzhVXeMYjJCDx1Tv6kEHNaFZpdvurVRV",
  "key20": "4hLEXkr2aTDwFS8xYSEb8KWdjnB3XUfqyXQvUY9gxWfA6gsEFLpchT6oqLaiJgn6JehvpVp71kArWGyaYD5AKmHY",
  "key21": "L9zH2L2un4WBtnoznVZUmLrDvjAqAyfwcK1edNtcUJFU2pMnXhnXQRyEXHhbZEAZo2F3XBD4kpuVt4QazxQoqch",
  "key22": "4nRVfXVWDyvkovKXnyfgvbhEToF8eV5Hig11oneo4JLzoycvUx6VfkGzE5W6b4yebwsCPJBvAameYnujH6yb87bF",
  "key23": "5MybCKYxG4tQrmiWu9ukhyrG1bD74mdUJB1JxrKpTjDE2y6cikroC9gPqgZmiyQk5Z87fe5UJw2A6biYP3xMGwU4",
  "key24": "438eV9TRze95ysTdrTaCeaQvmn4ZtBoKWMVjVDsVYeaSjUZRFB5YzL2F5YVeAAgwsChwBqLGkwNTY7io3jSzx8YJ",
  "key25": "Hmzx1Qaz2VhtB59JT83eWsNLHN1bMBckxas7t7NQtuaME1cNW2NXHHnCigp6acZZczPXWtQaU4iJZsku67YvZkZ",
  "key26": "4eJHQ1UKjXrxPKwyKmEPnuutX3Hmjvraa9pzKnRHKsdCagcRc6XAmHVbvZ1pp3qpyphbQLVtLXHtEkzs8DwugugX",
  "key27": "53ackmEZKwyiR3aZK5FxnsUceMosQsTS1XhQ4Cb54p22TR4fKC3yZsAhjQ8BTcWqgVFXv8mCsrkj6oFKuevi2WfT",
  "key28": "35yWSsyHTa3MBraCt6LMNWH6VmV7VDEPsKsAAQ1mymuzCkaa7VPLifAA6FxUwcoSCL1eCcQKvVUUcUAihqEP7eGu",
  "key29": "5Dn7yFdrKLMAnAomUzdLEcLW5V6YNi297pkL8MsoyTrwypDKxbk8kXKJcDUnCx5mFdnhvjSHWJ3eCNsicdyKZJfp",
  "key30": "2P7Zrt5CHNDnrpH3GxBSMkRWqDn1nAFY6Dw6VKuM9ggtxw9YCLUzBh29Dxrzd9eQrb2GpK2VD7WfD4NfgPbdKSeX",
  "key31": "4S1k9rmMycNS7NeXZY1mCzuLmdZLC4p6NeZyPYECJXbjqcE4HfNvQXFYqHZEXdfdiw97WBFrgdVvLjpMrAegNKyT",
  "key32": "5jP4dqByX8XLBTovsAia3D3pL1fwFcmTZvbvM4AMcYMA7fjwYspPzYQTMWtM2DH331NhjH6HnXNcLJGJgBUgYEZ6",
  "key33": "2nfwgdexYDhTyzcFwmHQ1VjUcTzCWTpj9Lvu1ZbtannM5qoSmYcgYkBWsLoFmG1tB4rTRh4TsgAWVFVghttvNbiQ",
  "key34": "4cKFmxaQAwS24eXKVVx8Zq7DyhniWFq7a8oVLpwxAcpNLZWXHHfiCy7sveuqGGe1WDuV8LHuEki5ZVQUrYwqLGu8",
  "key35": "4CaNfge445eW9RYbSXTXTCSBETPxCf6y1AMZfZgTvM1uMDG2wh4ZKXQPrDCrz2HVVNwH64qASizV3TjYGkTwrWTQ",
  "key36": "3eK721WinL5QN9JuwfikVAHAvzw4myLz8gRgr6cKHee5ShnNgrAa171ZucLs3UyqUao8uoU54zYYGcxMwsdZtds5",
  "key37": "3w4ViSSyHhXdztfxeTQX8KjXkko6ivQN6fCUHPfeCwY1WrE9QmokRvXQdsvnYZUNgQ4N4ZBKboJVQSVUe8ghgB5F",
  "key38": "eVY4wLyHg99pU9JRqsmHP59Ytt4f7M56eYsimTtkqU2bX9MW7eKNZoiE6NUFxUnxZaPPfm8YqsiuoaSp88W6RmP",
  "key39": "4fK6XrWYRweV3Nn3gWKJk5inYq6L6jQZdh583zMQ9jGHjrwSYXw1BAYvhecRDAojoojoSqemxVuYM4jPVrVR6DEH",
  "key40": "5uZaszBZPCiicQirifMcFtjDEW2ikVMbouFkBoAHRK7RuidKH3cZBm5YBwPBZpvcCss8noBoDNqJaNZGmChpB5KB",
  "key41": "2QubBn4M7GTjrZSeWdq2hn1LkAL7SHZaFDnzHMuEztfam5dkdi9mtXYQZDtYr2HxKg3Tzv7pxySrrafrJxyfvBvV",
  "key42": "4pjLhzbZ52QcX1KQhPoHj2sbTJMcoVetQi8pZWBCBwmExuHAJ1G3fx2wGyt8FKUHV2fJoaCGGzE3n55D9pRtyHkC",
  "key43": "3QWq427iTu5uBoSG5nH22fvRgY43ibM7SSontfeAKqtdezMNEtxmXPVpTrLsq4E9NGdD3SyHVio314Du6qmG6mnF",
  "key44": "wQtf2NTqhnvLQiXStXetYfzeBtw9gnrynTNbA2rfk36DiV3W9ugR52EQn7mmeCjYmLdFq4a4d6cUwbJER6xBGDj",
  "key45": "4T3bxYfnm6SHobMBfKP894P2dMgawjTZomM58xJgsoRwvLTokg2n9UcTH9KmNKVSw8d44yrDAVzVUc6LbgVvdKok",
  "key46": "4Z3WoiDTnDyBzkJguyinrRWq2mZEbv4p6M6eyQMfbxAUGydPHdCYCTVe5rXuDvEGTkvcCJ7Z6cbG1CnyG5sqiHvj",
  "key47": "3hxsE3bYZ8dHN48HHLSqdex9Bgtonhg4kinSSQYRJEBqThfspHy2bCpESsu1qECBhCUJ363TahYx5zacCYMVyjrD",
  "key48": "2yonijxkQ5QvwugdqmoR4KUyGyAi5AQ59oYWdxB4Dma2xuiwsmd1WPmgprvN7BfVox8g5PMidayDifJSHc9zfJAt"
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
