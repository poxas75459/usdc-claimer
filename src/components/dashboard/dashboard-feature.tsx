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
    "29BPNmQf9GnUHjHPYUpJc1YgECY7MWGBmJjjgyT7HJ4mqAgvuRN1KJb5YanMoR4PGaWL5teTsmAdzVFvXEofjiwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMSBkw77NTx6TWZuyqjAV88d2Tmo72mBTHd2AbwQWutPPtQEiEQM6tcggcaRipEG7hi3Chhk1Vnv3Wri7HtjnrX",
  "key1": "47YGruNt14pTZhVCC2ZSY8ehP9yskXMBqvdU2i7KumHMdPcND3HU4gpaW2F3qwXB6ynJPWWboyakZ2UZTXDqhWoj",
  "key2": "4MeqkKfXgxq8bygrtcYLc49JZYeqTbJoop7jSuDkJUo5zBJPrja6BZ2xbHnGiyyvcdh8xiuHErpeQbaF4jZRHT5j",
  "key3": "muoF5Rzww5FJaog35D4KmH1DVVC6GCCQXkS3rQ7ciRHfdX6Ey3P2L6xXWtSUdHRyJWJX3GJnk2PAp7EWpdVbzmE",
  "key4": "5AmuELsBGruuvt3aQodaFC3ZyVHo2LFMbymTwvFychiMby1sZShTuKqtfRVNa8sBB4NpwM8ybsSUf3YQZPEEF6qa",
  "key5": "3RGyNi67DhkbYGGR1gWwPtSypkav59pLmYkSBeRdeDX8wHhbS92jmtSYssS6QMtnecHBCxsDXbGiphQppk6eGh5y",
  "key6": "gARg87jE632MnVd9TTkRJELRSVRq9bk1Pet7V9T8CFkxE5DtRSP5K6izHUEaQ8rCXk1pRcLab1qSShEfAjj99Cc",
  "key7": "4YAySzEERvpAPk7rSvJaG21QXuMwRQeSoqAep4jaKCpJLdpKw389atDRVENjEHxtaeQiA8mM3mBmwXPrQo9XvP3j",
  "key8": "4bFBSy1EdiThbDi2XptRr3S8jdGyvW4wEUeQt7tbjnqtboaiYwFe7bL3wFFBXn7aeMokeC3yAkJcJqRnux7D65ZF",
  "key9": "y1rHrXtgvKwNvhhFJj763rF8T95d5RGhQNUkgc3iNQJX8p4ePG19aXMTCsWjZp8jLziUF1qSsRBAnHmX9rgVtU1",
  "key10": "3qfc7TMBiXJaueYfHtre1BLVqEUc69g3nvso1oU7gBQobiMKiekdxiHemZkw7Etfxvq3V6yVxRNs8djxtS3KK76F",
  "key11": "3BvjCQPf6Jw6bdqMNqufRZodVZ6UZRpy5mtVwesBqdJRQh6DP8Lgnzo2rb6EGZ1ErRjT8ZDGMN5H7KomRDCxrb79",
  "key12": "4sGpVQM3mLyQJ3ruMxiak5Dm5sMgNqqzEk1gTTXiSsnRzNGuGEFEW3TQq78Ho9sWhFn1GcmGvCphHxMpQMTvXf8u",
  "key13": "4EKKLWfsgWmF7EEZD1oXQLiLhoPR4GCnKKxMRYX34Paf4XuSbBGyHCpiTFeMSs4heRGvioxMmNLB5CsZanxCnANC",
  "key14": "3jJe515X84A6H7t7rwx6ehhPrYC1yaueYFGyBksnoEiAczF3rPbwh7viFgRy6E7NnxG5F652AK5zF4g7HjfYUqao",
  "key15": "3PKbvNDfqwDPxPjf4H9A94aHomHe2tYapuyRbE3wKBzZVGwoPkBEA2qV7nNwyprXSYryFbqoFnhoHC8hfDVR9j3V",
  "key16": "7CREq91FhJ1qPatkJF3ejjC71wLoHm2Z4TzmSPnB4YSSWs8Xg3y8EEd9vBDFkS3FAq2HFLQLyEQj4fnPJBQ7Qeq",
  "key17": "3PH1ZG3tfrJFNv5ofYqBcAKhx2nkp6Qex5zse4rjhhBKeAV8teiUernsa6HKib7Mm6zHiyvNuvRzdKQ9AXyWrPGM",
  "key18": "65qn3fSnYzfhcEnRz3WKLTY2Ns5v9uGpJnvUDNuGBP9ehMZCei3tyExp6kkyWwJyodXNXotWYfXZNJipL2cUh7Fm",
  "key19": "5nAMWpZhjhsXQDDG3Nwj82AVNci6obJgp2itxDCqJc3kSSkfcUSMgTzpT9wXGmQLDD3rdGsCHN3E3B5Wdrte13BW",
  "key20": "4QrQS4TrPGDhRJtmhLxz1qYfeK4vrLyPk5zGfFm12SZAfkPCTbTaiFnHRBEBPsCJhxH5uK36Gd7Pgq9FR2mhXiTW",
  "key21": "2GatSoeEfSRYzQ9UP4Y4toaffA8ajhFFuc6k8RQoV5E6283wQLMNNsmEN78MxXRxy2sLZcCrTnNTrDdgpCQiXPpg",
  "key22": "21QxSHs7PahE55jDHkVGMF5PsTjSHpafXo5y6UmLKaQmxWzoU6JEDDgM8QBAYAhfngnFTUFW1wM8wejtuEdGjK6c",
  "key23": "3BV7GoiibGPfMkbH424bvywM8uWHARGz3UA3twni9qvFJon53TRuPjyYwbExgiTAcbWhCqpzGT71krWN6zdfqNB8",
  "key24": "635XfSf6c4bCJWUiiRWXqkV7oWSbuRE2U7ZBfurMpQkCMD4gZHGyjXbJ8XVnXTitJg9XjFXw8sugmtWwxZyHWgAF",
  "key25": "2f7Z7bvLU6JS45CCF3W8inbkYt8xcmZRdHXVaBkZf7d4HgvhUmxAyiuXcPzkV9jTgQX2bUfBRRuZB3qrLZ4Fdvaf",
  "key26": "2UbDiKbjTzCRX5g8KYeDB6fKqj5XqpswLtu24DGJRVDt4n2s3K3jUbpZwbnV324nACMd9KnZeHvbb2AUuoFPu2Co",
  "key27": "4tQV8w8DV1z7y7Aj6ygqLKWiHhkFMUtyBuGFiDatqhM3FGrETZCZ9aMrbstASodCP8WT389fjfk6XomJUFPdxVfW",
  "key28": "dVcyoNCm5iFv5dK8kAU8unJdikgK7SST9WfdxdSvwynWpbeU85gTVUqaNcQ5tpsaHUKahkkakXSnnfRrrzFLJfR",
  "key29": "437dsEnM1ff3eonx85CWnhUcT3ih4yc5JFMjtKhSyZdyFueRNuMswcsJF4QJN3bgxvonFwTGsjRFLThifLSa6BoM",
  "key30": "3kF6pXGGSf6crbBhmcNbyAHpGTRGU1g9rbmVHsMtEe8cfsQEPh6MTCyNP1vdRLK63Cysy1oZCxX1sHtdFmWj6jMu",
  "key31": "44yuqVLeyZ3ZR1a1S8f4HeqquhKQMJAzibNLHqop1SrCnxUpmtVBD4WWNBujiiJFKR5XmFRGepCa5L44EncZvXDf",
  "key32": "2fqAxaqY87N9bQM1HugBurDXVf9eVobpTNbo4E5xggFxMwYTkaZqLGFs9WyyDkUNqazfYFKVAgZqSR2gk4BadejQ",
  "key33": "rwXwBPoYMc2vRSUMbFS74uBYE4obUegC43HoEHcW9H81CRANnotzequuPY3FX6zM6x8Fdne2T3HHxEms77w9Z67",
  "key34": "sGMmqARzVsd2YxSJrVwr1SugnmmCWodUofNvxqsiBUVYu9Ftu2haeWjU2HLFD5uEQVtuT4gi2jKhLvWSbcaSLch",
  "key35": "3Bo7niaaoRntrWUttECTcqeEDa64uvjS9JxNDf1Xam92FpgCSmv6YxBfNveqPocRyqHaDeF11aDWUBH9SY6ybcb"
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
