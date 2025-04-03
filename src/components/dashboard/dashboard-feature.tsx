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
    "3k4fUgy52ZJrbrTtyvLxS4w9ckttNHZByPp84y6dRKJTaBed58jU7v1JHHRUYhiSKvyNstaVmNMgW5Lj9fu845Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjFaWHUbAuM3xKEAe6878A8LwCypwf6TYwXUQTmBFqm7ykDqQmV7Ch7TXT4GxqjujceztBgFwx2PuFE4BhzcyjC",
  "key1": "46tC1kMJHqHGWm14GAZLdzysB4ZQq6Va53GRH1J1ZKHH9pQADx4Re8Pv3QtCb5KwEFHE6CVDBrHTZh9WU5s7hRpk",
  "key2": "5TgQ4AUHgMYuXRT1m9WrSoPfAx7K8YzeePP2ejUsrjCaQdP5bbifgoMGQu5FbzZKhLXgrZDT3kNEUHnTfEokjrcY",
  "key3": "4RytRDPDvrgfqAKi1aRLALSvBbsMWQvR1hNQAjwEw4pUJue2MMXVJAKpGosrwfhiR7dXjJkmEcAuh85EFCWLfgE4",
  "key4": "Zr9Nzf6tZvzNQRdww19nYmegD9cjyGgDR3nTVXSbuAynE3Hjy1kUyryFT19sJdnnjjEAoaXpq8E6axFNmBJcPad",
  "key5": "43gqq9UKR9Nb19KFwWC5gCiFhB9AxGo1UEwPfG6ThcPQ9HVRXH8YSXineF7P3RwV9K2FK35NehJVPg3GYWfeh4M8",
  "key6": "525zB8USZrM4hKvHiW7EhTDuGG84aqwZidsp7qP86kNJwTfzgR3TRinzQS64m92bugWUhDWrSQfbvm36FVT6QiVQ",
  "key7": "52fYWyCa56xNfceFyU1WjrNCQgcdAEt34k4B64e1KBGVGDEdeicpWp1cgNnRcprAFd4KsbFHQeL2cEsdvxmDqrLP",
  "key8": "5HYYPtiWtNPiXjKTTeeNQ8q5JqBFqv2UgERYBminZw5kyu984PH8S3o4uQR6nnsuDREA4ENPZVkRxCBvS5iqyKaH",
  "key9": "2QGWWMc5SwqjDQavbWubsYcTE4hBiQiLCz4ffQzH77EsFCHK6CAwhcEB5LFx8f8PFS8HxRkXQXyeHWpQw6KZzCrs",
  "key10": "3gLipEswmH4jd7YtrKM9eVHYGnfuF3JWcw4BussQ8kYUaYAG6aMd6wZe6srxJzPrCzYVrNnSVHUyJdFitr7UNpqD",
  "key11": "4aV4FAv14bVJztracPwMFqgbJjUjSj1eDi6w613fcCUbMzA2rZRTXBPNHjSVx57U8WmTbRTdoUPMALqUi7xqwfg2",
  "key12": "2kE4yKWnpChh2JSVmARBokGCojt8YsPZ1UTA27G45uHAyuwr1nBbDaPksQ47mfVYHnjaUZcbuypw9QoHW8avy4VS",
  "key13": "2XqEGCb1hZsVnxEYtZPXMA5BEA32tqyN5HbyXPgrzXhFDuZs6ekHb7Gz4j4HcwkYTWcXFYECusdEWXrrGZJVePfE",
  "key14": "2pLobXfuSJFBjo4siKsKoCWZavvhpfj4qout3eNLxQYJMqBuuMWjo5hJX7jgCb6RLb3H5dXYsTqgfzZgf4DM83c8",
  "key15": "2FN59GYcMNRHSkKMzCHoNkUAUGn1ahALBfecm7Evy8oYH1G7FpJNfi5fJjFZnKWprTwBMfXd5E6yivfodhNW7zWT",
  "key16": "5b1HkXajvB6uSaH98unwDqCPJrpvchbT5BjcHBX8r1fnJYPHALGMt1ZicN5DERxr1yiw9dcPQPTxiqzsPvmo26JC",
  "key17": "5KHyEMMmj8ynA5ToDd4nhp84dVcxsSjCbLnaZAzopF8sbQh678yzTGpybUF2NuHbDg2oaTJRbhRB4LHC2p6oeS2w",
  "key18": "5irvwT294fqnd6TJQpUdageXeTgWU8FFVjWHsLHGNNSiBqChTLQTjoQcndw6gSztLr79jg9hgqv4i82BCkHWLu5K",
  "key19": "3tceDvwJfWmfiGTyVGVLe4JeggAmr8gYHhv8jv2G9rdZxFNHuG1T6iXkN1UgSVnUzAieDzV1RtADmWjmeS63vCcX",
  "key20": "2LRdipqmJEvxPEAq1c7j953g9vednAxYmfru3VgFYtq55YvACaUykkHxwaYiWhJmfvHBrBUSAqDiPxhqU9uWmooV",
  "key21": "2k4aUr9nd7bzdzsxLWoUHAJUp1oVZiUcsYL4m4t1x8qPucMYmFjx5Lxf95nrUEwaCfzFr3GHkLTkX6aKMfj7oGwL",
  "key22": "5ynUAUMM3SRh4wPKFJEwZeCSNNzyfpEqVesZ2pWMEzXa1CFAyWPhAzoxYnBWU4TLG2t7dHVzGjBCmPnka1PJBmk7",
  "key23": "3MkbCR6stG7BZbMCi8U6KPrf32e1bBaBRkhvLyumxWicGgDadPyyaAwBSWJ1Pri3kVyP8oBmw97oa4qXevCouMhX",
  "key24": "5aE8Kddns6hYRfmYcYucxJ1isQnxWFgy8tQGbfdpZzddiBnUR4J7VEc6H9g63MYeYue7iVKxhD14PT542pVjQBGW",
  "key25": "n6AZJETD2x45rJiBcQQGRt8taAofKEV4nYVu4WykLE3kv44LxgEDkNCdBMykrLUWwP6ZGjBjz7UYRKN71JmaAzY",
  "key26": "3zbsP39Crv2fCJuTBvmepDvf2B1MPwVrMuJUW6ek3A6tD3zJnwNJ5tVESNj8ePKYEbXtEuhKuGVAZ68JYjyCFhKb",
  "key27": "2h9G531BHJpQHEZ6aKgS1MWkPuEytJoPZgMTJ4NfWv1bxmo4wMBEr1Pr4BiYEFM8znUk4RtRWcVD6LHtkC9hLUAy",
  "key28": "5YUCTsG5enbn62eSm21cLmExbeF1CWJRpgWq67yjWzRoGUCv8idq7yCPV5y3RkLSeYyyzTd1RZaUsuTcczsUxLaq",
  "key29": "4JYj7gJNW99FPUoKJMeN17y9FwNpmPBXsEQkDnSbGgGXNgiKTb21cywoQU4vMC1eGzt9nMpUYsqyiXfgeb1D5zWW",
  "key30": "3T8a6gUxSXMduF5nZpv2QU7dH2t87g6h3TNHMCMddZkqsznvZxQjvFUBZom1oKMHAxWur9MnMcVHnAUwrK7LppNn",
  "key31": "3QiDnPSng54pHYv8wPGV3D5gJ3n8Fi7GFGbAsH9n7C3GE2ENV4zQzxr3NgBar5NjjcA1YDiWkWQpa7RciGm76uTM",
  "key32": "3DxnvbmPdFZuXDqft96WpruM1ycdj5SgXcNsnfcMqF1B9yKZje1JcxZyNGdGX6Y6pAFGWZken58M1B3FAn8Cr5d7",
  "key33": "4QGbtDUt1LN8YLrFqjV1SQCYfyhBnaiQba9CP4zrmG9n6rWKB9X3jCp6dDTgsqHWMA8AmUpfa9UnHJsRXwasJx6Q",
  "key34": "4DNi6vW5a2Mjt7PNfhb14n8an21hAn1jdZSC1zQTxcNH4uzm2YEyFN8YiN599qRTuNsApUKfjuNY172NYhR2Jphc",
  "key35": "3Mrn9vLZELAjCREPhhdkju5GPhWtJCxPNr8wLsdxdgAdtN5UKwn9ho36b2iBCctfamTWMqigcC9hVfc2EeWhsTPE",
  "key36": "38KeSFFxgWRQhtYqhV96Uss4Eyt3oYFDkKWTzNEaET3yX91wdHri8yMsuyY4JatGWkv1RzJ5Gf3ktGzJZCmFHudE",
  "key37": "nKMJemKSMyWqKVfJ2ZAkK44ss98RRD24khKgNQZ4q3KbFWoBhLpCE4pYLaPMcqnGy9RG69SgD9URPQkmCncKbbH",
  "key38": "5jFpiCcrV8uxjhNzJvVvZzBr9scBdCr9PRzKdDD2j31iQt41rfecX6smxnfJNordYWVRETSzJN1tXiKD6FQQUiuF",
  "key39": "5SAS3hEwvKCJaati6PevmwLkWouEhbtDfMVjBV9Jmyb4aam1NGBCWCuejEJHt2du1b34CzS3DHFynUcZ72XKVL6V",
  "key40": "4JxuKX6tkrJatRdcDsTdfCPCtC9b9XHxU87ncBATj5VBdMeaQ5Z1e3RREtz7BRdTbMqeqBWA91f3TqvLhUqkznHx",
  "key41": "33X1jPhUWvGTFyy54LaKt8gfzLQ8vQRK6RppmVXFsp79waz7S44X8NPQhMZq4RYx5bTiDbkEWLUQ6cb2BSbv5L7M",
  "key42": "5KvSFL2yAfcYcXLJphUm2GGS2cYuek3hkWDEjg4xdx5c38jBzGuktqMGJMJNPXgCvYzEJxRZCECY7i9t86d5kM8k",
  "key43": "J2jZ1TZ37zKfBTfjedXDLuLftHU9AxDvTjYwb91AqW85ZHvCpX5ybX7tq8UzopQFryadnmRx8WvJL6FnNyb2xHy",
  "key44": "4T8RCo2KFhAXLtxtAyc2cAJsvbZ783AzkzhfBZ7nuEWB74xW5komfPzLzdEKyVzFZ62A4Ddcq9YYQCmQk1AQXW9P",
  "key45": "2W56equ3jfTaZn5oTqSiZamz78tyoaHQ2zkGp1FCwX39p9SUnRBoL8kGg6oDRM1s6wnDP5wJPrBQYBJLLPZajR5H"
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
