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
    "5SaoNfoT5ymp1HkPNKhLR5eJxWZ3zt1CPjSvPcWucUTiw3vy6GRfZBTT3Quv2tjd49YyTrK8UBVacyw6wefuAFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BVa9SfqyV7x5X9DJHFtHD5UQPb35Pz4cZ3vMNREeDhijhxHGfY6QFpjEeLCBn96hoqZX2JU1A6KJLPMgsvVgRyG",
  "key1": "2q6Hg8zTdTLhnbNbqdAaD2QrR49Mmp29QtrTsuBYNwzgyUQXFZAL9Yf35sY2CsjZjHSWAzfAQtmckM25uKLGsW1G",
  "key2": "2ei4zgDJMsMwQhu8NCbvVQsrThjV53cy32eZMykBGYBXKRiJbcnqJDuu5Vc3zz4kZX6KFoayovU1zzDs3MVmMSZi",
  "key3": "3Tv2BQ3fX4GceYzTdjyXcV1TeyusGzoGSiQsA9VJ8yPVomTjbhieK4XMFjMuDCQiZ5rzYSXPukWfbVzNiFQbW7re",
  "key4": "B2qF4svqtnGMoGzM2EFdouDFVHPumpLSieNdZNaTEvUhTfHiUWUkYGzbYPABavwnUT4pKT6CLK9jZdTEG9AQt1M",
  "key5": "3A49fR7du9JCqAKv4ECsBzX3AHQ4k9vuCA9fCU4qyyoC2WdYfeJcHMhRufQcfbhL1R1TuzTKuAijqR6nir5LhPZm",
  "key6": "3U3UeLg5QFPMBdUWup9QgRQ3Xnw5vAyVcDGa9vAh6tWgP2C8cScW7uhh4qiEHrvSCGmxe4ifMaZhxYKerpZGMJd1",
  "key7": "3WH2u4Dbq4WeCbQ4i95WzXmTu33eJrkktLz1xZYMi8qSiY2piBAiXFz5ydsUW2ERf8UbKaRDgUHKp9B5h4hY5i5t",
  "key8": "48GvSehMp9U8fGYZcTLXPmgWHFaZqRgnipGz6EMSiQdKbMx6dVTmohXo7qkMhgp4byPwNqb8zgheSEgqpxgZYBhD",
  "key9": "34XakCChFKyyrCKS4cTzjoGNhjFezpB15hn78wTGFZsX8AEt44vR1xwSkoFMp2CEgpthkNmT9q8osUauHus5EMpG",
  "key10": "og9nVBaEYwZFGthVmTR27cFooT96U1qJPcJo1UNvCDm3zr9hGt7oUaWUhwYGrSzhDut6db1hfTa8teWT3GUM71D",
  "key11": "3jJZ4fiwnEgEg1qa9AG3rkhyXugDUer737hPkWBojTmNxEPLNWAQtRKVM2WRM1LcrVRXoV9jjvD7DMvtAADzYzkP",
  "key12": "57y7GpeMkXyv4xhXRNKJRjfYUguijmMmyLMYYkwWjuXyfNXxGZ8PUgMdD2cGb5ytDAHEnFAgq78Ke5UdY9c695Pw",
  "key13": "62bt4WhbcGBqi2AWyjX8g1tuRzo36G6rkrr1YCG6rQuW1X8CYfKwQRo6TkXXuTTspEjcHYx48k9MbShunMHKQThu",
  "key14": "3cJH8nwb11AC67cH8d4ENLGfWDXsWqFAB2EcKPS33cow8QPhBPYKCzVnLLJuJek4veP1K6jwy8Mmqbi7YqUdBZ5X",
  "key15": "2boS2Z1odkNmbEofVXDmYfGr4xntUkmvXweXQq5RJMNXr43aC4nreYxHhQLaib4VQe4bkqYS1A9cacW5L8HxXXV9",
  "key16": "4LYnQDKgJboaCjcy3aDmn3CPBLMkr2ckPPj2jzRT5iXy3mToBMcULZKyU19scLgwUhwZYUAokRmTknGP9WCvr551",
  "key17": "63BMRcTRYRqUVZbQjDe9PmoHjPLGjKVasNNBH9ZZeX9f642s2iki9LCsGRBg18RqALHFKJmxC5BDzkCqXct6tLwV",
  "key18": "2Jxzznb6LnYeRwVXxB9avYYCCGqGmKwkHDJjqTefGbCJTJpv6oj68EU5u1xy17rKw9R49d2375tKcxi7aaqDToud",
  "key19": "2GrkNhVFs3HJD5hQYEsgBp3uwTa7fkpnwcfaE8bd8DR4bdNCPchPEfexjf63i8oF4vPGPngFA6ZF4cn5rVJnZioK",
  "key20": "49Mj2Nps45Q9GNVcWGx3orG4dRYHhKtzuZEWEYaFSvwDtRRutJAAoKP1kCU5TxVrGV73oWP7hCyvUZSCZtebK2c8",
  "key21": "4QWPn8yxkbX2mKGr7gozyrAcThjdQsUjkgZX6KKmJz8X9zZJcx7KqAg8bV1De9Kh7nRSLvaNJAwffZ5hHStFCvHS",
  "key22": "Kb4cBZqAVgvvzRSQNj57ZJjpJTC22JURhitRdq9gqRzUErPCcGmNoVkmyAdY8T7FZcunDgzTsFgue9sDveep9P3",
  "key23": "3QYXxcK3q8ce8s3cXMpboeGbEysecsowcvrrnX3ifp3yN4fXcpiGcBuBpS3kETq51ynfELy48ziNZ7zz3zzdXwp1",
  "key24": "dffvYxKAZ9dS9mYFPYzbS4ZkzBiMS4LKyszSAnzeUxdNse13j66hZ4yqStFpHkjEKFKNoqXRHAHjzG5Aa8Yk8pB",
  "key25": "2WVYuX4oo7mn6aGgGHAUs2zbYcAX9b58HqiD3xPq8ugFxnVCY89krYXMfdHjWim565zaucgypx4PdWhC1aAcR2XT",
  "key26": "438iqZHDZXiZzef5GGjx7Hzc7bi1P9p7uga5oJYbk3dKjg92Pbhfk6qjoQ37Uq5QKpLzqrNbLvzbwnA3XyHPDnKg",
  "key27": "4LqntxLqMVBseCj9zuKi3VGm14RWECfyqTPkgCsC3wSUdvKQw9nydJBbVq2AkizfR425D5bx8MQcXgqucFCvJhqn",
  "key28": "3YUQyuL3TqhtcrEs3VWQBkTLGoMyPefmaduRqKopVSTJJZmTS4xaQCTCTte9Gb3amMWnz6YE9LJkayf4qQcod7F5",
  "key29": "3mdakyoYesYdFtqtsqF1knFpCfYmz5yeccuGsTd7iCBZ52MK8Qqm7g6hBp8AhJa793m3MNcex8webUkQ62uGCKKK",
  "key30": "5Q5mtiBVzeW6MLQeya5MB6awfhRCFKuCGZP2jUm5u7LTfGyACbzrs4Nsr2RCpSSLh7DmqYEfny6ichiF7xZXPzpx",
  "key31": "3wYZ7hnUiKNTsgjDySxFvuJbiBtgWodxCvGAtzJdarMrLJ9VYHCmMNAPbGoGf6vbWdZE4uZT3PUDUYbrXABSwWwz",
  "key32": "5kkXMAmXKEBAe1zPdB7BeYci4JKNzZ1APkRXJDKL2CjJqNqdmE8GKAKxPSEXrRpPyn8SF1fLDYzPke17EKVdVVuq",
  "key33": "4DeEUY4bti6M8yKMAFVJ49j7ZHFbA1FUZ34hEY9CkSTdP9W3LfAMrHgU3pULyvST2tmPsAsGs27ZnCAnvW7xNref",
  "key34": "GZ8oUPUvfCiQm6pJxdkhYs9aYyUrfZ5nt8MBJEVhfcHdqKPEA2uba5QmUVdRMKaR2v4kMj9unNL7xApiu61veDX",
  "key35": "3CCoN5pqZroSW94JDXFn26z4oHayYGosVd3ZZgz3ivVdbD3Y9tVowPFpYRpZvrMFS48v2Sg6pcUo1QXLaU2HYiXy",
  "key36": "4kMZtBwNurrtFtdmAuAuhhsG73ycr3TsUanygSMNEWE3prsS2xJnfdEHq3HPvfUSTdCtZh6DSSDV68NFMBMVD7Yi",
  "key37": "4BMQTcELtR6pZtS5st2RjusJHc6Vh8NxqcGporqECURNrPoNZeaoK9HNYJmk2aqxBB8UAEM5NVb7ajYKJdCxcpXk",
  "key38": "2NXCZWX4PEpyQ9B5TTLVnKz6Ltm4DgywwS5x3fqsejaueMM2Yz8RQyLPrzvugYfyxwsZpWcq5tDr3ctLTpesGUy9",
  "key39": "3iAVVhfDXHaReZJAeEnhruH7ac4Li5482dFZekV6C7UXS2RHv8Q37smfaPnUhu9y8LzbKhJRfW3SUTb4wjwzS9QT",
  "key40": "4JW8FZL121igEksaTdeZkQ53DKM7GurAhMKjT81coYLE7cnA8CsNL5yEJ2XgYx1ksCQjJhuptwWfXsqzYKzFRZ45",
  "key41": "5EUxUhUT9nrZuSEQr5PDf4ju2QpcuCT1YiC5cbCMURWfCV3hiQmGen9KuNzhkjwaJ42NyNUMdU68GNngSG28rCg5",
  "key42": "5EzmACHCwEiEnvrhS1FKdGFRZqbYen8Ra3Jbt2QgycPQjqbaCKhLpaepTuT2x34NmAYJan7e4harDiHLRf6oDmPE",
  "key43": "4CkYZhf2EU74LtK1zMFTU2x6TXvN31Ss8M52MX8NB9qPCYd5irDRVZS9iFif2fJ59UopEzKYyZhHDx8ANJmxQi3X",
  "key44": "2n24dAHhvyUjuR3b1WLsnMd7fC4QpHBe1akrXcw88EnJV9JWCgJvhAASuBGG9mHYefhDdTJbeKexLfDtmvAAu7i1",
  "key45": "5wx93TzGjf7tNFCfzsJ2UkwVSiEx21tbHZ8yNvaFeoE12HSAWwovQNJFD3hM7HjgMGHUEpMUaPP2Y32NK9SHwf7R",
  "key46": "42D4Ck1FfauPgoX8e8hGdLwDFEj3SQUibM65kibHjKC1mX3w2K1NSXqkgQawCJ9a6yjef6zpLVNdUuFWxFrhe3m4",
  "key47": "5ZjukwUHa8AVoygS8heXJ3WtJte58DCcY97a4T1rSZoSYbvypixarKMZJMqu9U6LY4KMqpXssR3Gt5vod5oiscg",
  "key48": "3UbXTdwrfaznCkMmSPPXWUY3Gb7q8er4EAC7byTDP7fJ6EzAy48CMYMEzmHo9EHX1BgHzjbb14k3eHuXtDshBgLL",
  "key49": "43nr35NzQDxizXqZ4fDNsWETyJKbBvYyGCpMbkTNZBYwfY5FT6UEVwvmFHB7DMunFTSHu9L4D2b8oFv71a4TDMga"
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
