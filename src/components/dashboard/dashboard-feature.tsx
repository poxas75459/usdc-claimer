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
    "4YczHfgFXh6SY2Y2m973c67rcUnucjCTk6H2kHZLKwx1hFxv8c5Z6ZHhZoTePmja2fc9ZYkUJZgUU2ZYRwCbLDDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHApkqYBHaVmfGekVYJihyDVUaoLTghLApBGtKZBN96nktUuYbG3rVS24UoiUuwha9ZuQV9ewaqBMBC93jExrFC",
  "key1": "2mfVP1wFR8o8jT8Yrqp5wyjh5CkC3LohsqpAT5JwyfBsBvuFjgZaFES8MJRAuUaouYPe9e1bqjk4P7xxkXAFvgXy",
  "key2": "4DvP1HJgvJzub2G9h3d82g64dw9caQMhvdi7Hx9zFdeeL2HrxpSaRzJoVRgDC6TM4i8LMCvWvu5SozAYpYLM4zX1",
  "key3": "123SpZwVsejjTsvnRUnENcjnLtnh6HkUrqTEGNj8jStATRnw3T1S4G5gTA6PGCJY1maBhaiftBCSAX6NKmy4BpiL",
  "key4": "a9s3XUjcGvSjtb7knKBHPePqX5MUebULEtcMDfmVjdiLC7fWwZT2W9sqkaeVujyny6rdtPSGEU1R6yK54JoJHRs",
  "key5": "2YowS6RiJBA3JsSsCWBmezSof8WVVGyoBLkeq8geEvoHvPdczwkVzAZVKbtMfpixdiJwYDP5p8SWo6ptbKsXy8q3",
  "key6": "4BD6sGVq4ymp8gtGeoQ5iUiT6ZaaiwQHVp1JRKMMbkztB5xnV6maL6nZyWrgbeGBp4WyD8c7xgpDGD4vbvBJumEi",
  "key7": "27iFZDSPdqp7xBX7F84ck1nm6thfrj6Q9vto1JyN1MG1BThueaTKdh4L2T7VpK3fiUNPdc65wi2AdzJZVp3Mrdyw",
  "key8": "3He3LAPtfaFa7DnzBfA7Q3JiJDXdNxsd4PzxJ4wHvyxNdFm3JecCFj7qz9b8YU1odTC6JPk4WwsC8zvtLtVkqBES",
  "key9": "5eqBksFD7ePraLw3NneXH8Lnsyzk4MGPurgvYsbUwNLzwkxDq5bJEVjpNyXRUCsMmeeiMGJZtw8NnrdetFjwYakF",
  "key10": "33UgyMTEvUd8mG9BWz73JXuZfymkEQxxbTNTe4u71P2ps2xUc5Ag4RuyzsQ34dReEVb2JUWaXRbDwkoKMdReLEz8",
  "key11": "48qH6bibUnMoD16v43VYMuHLnJn4CEoo9bnr1NDscZduxHDEKQer4gp4Z26UpEiy8GDRSuXawHCFtGmWpyVyVHtF",
  "key12": "3mXwFPTEcPgBvnMVbcwNhHTSmvkQ1a9HQwGLZQJoBMXHZo6csetH1unDcqvTwQhVcnbgqCNFu32hcyoy3dvGovD2",
  "key13": "HLXVK9mNWzBoq75ygpBBJZ8kjrbncN4HKX5WyQFHLXmr7FHRwmgKciHBXYVnVeMr8UeMBnQhA6wACoDHVaiJhYv",
  "key14": "3VstFYJ8CqtWiXn5zRqcJ2Wq7n8Z9vaFqUkbFH9NZrPMuEDizqqQBJRG9k5H2WWJVUQSXCshbLveVE4zdTYtfuMd",
  "key15": "3vtyp6Hrrrtr58TqRnPBdfW9hhwdQgRZucDX4wKvdzzC5vtsfWXjXe3eLGuuVVj3kFs25x1EbGJHJYjoZjV2U1TH",
  "key16": "5k6GARkaDzpm7Wdy5Q92enz1sh88uEsRE9efQbk6tagbCxygHySkSbE2VqLnLJz3xisERLVkRSKm3CwsNR99WnVm",
  "key17": "4svkKt8bJo8JeP5m3DbHRCMZfxGKWojLvKJGFJEZzQbiv6MFXgLbTvwuHaxkkP6qB6xhg5TbSd1E8GL7TQMVQbfZ",
  "key18": "3SjfEHTp4zccciYAzuQdH5E4LL2HCR1BzRaNcAZFp6WCRjsEZPtpWX1F6ysefHahYiqwjsjJqBdATGkwW6XhVDiF",
  "key19": "Jzy5p4k81ZhHsAhDW214FkmR6jZbyWvzs52YBtJoPF1aschnWcHrivfWaBAEAGn97SF4Yxk32rGsnMhHYGmxRGH",
  "key20": "JwzCLqcn7YYC3ekKbfpwCiLuP7K1w3VR9DpYrRL2KgJ1DusjwpQ2JyBs1jKS5vvD2d8ciU6nJA1dnhiK5deDUM7",
  "key21": "2SNUfMsuYPnFeX1kG1sdadd3DUvYNbKjT65SMJn2N2kJHnb8PAoDpWXdiM557ZHZmXkrVKGWfU6tcdyfmTvpUrDi",
  "key22": "5bgcU3Re48BD5yhC9SrwpfTo9npz26afuUrUnbtNNGRLqJxJWgMSPGVHFaJzHZvKZJ92hRSij2aDD9JZH1EAo7oH",
  "key23": "4vHw1jtkvKMFkQ8nHwrUEmAuFsp6VvoXaaRz7y65rPP2YLobFUhXNmjoHcxxcqA5sSUuwACmZRxE2ex6TQyHxgCt",
  "key24": "3AzHF6H4kvNeZjkxPD9izb8v1gMrpTa1W4vC1YBNg89Nbfj4wVwCnESTqCY6BgBWPwfJR8sd6AiqhUpSpNMAQW7u",
  "key25": "2AgmhHtESy7UGmZFHT5eSSHBkpicwLKx8ifLGj4B3gMWGHFoZaGQK175MLoeYAMFHU3kqFAUUnbt3nXWCaPEAv8H",
  "key26": "4YzKYwzjnChA56a6Nsictg7k4bjgkfjMRb225EeQH6dpSzzCdVp6mzhcuUZopWegtGTWBtmiYK68sbbcSZwqUqCh",
  "key27": "JZWz5ru5jDkVSeEpyvAyaS4ofGquFVXq6MzNc7SMH5jzUWBCvtneQXuRZT1KbnkGTDmD5h3tUgMEsCnjocGtyn7",
  "key28": "4rf6LoasYbsw7y24MwkNNcPi7LkzioMTXkjHdat95r8ioPVjQRXejUKm2QzGagBxiwRx12XtwM5JJgV43m3GLqMq",
  "key29": "5dUht4YqttTh4Y1VVvtambE3P5exF4mbo9mPp4fGANSbCGXA1mKACJs5vrFRNe4wfsQZ7jMx8Nu5VbiLzYh5RTP2",
  "key30": "kYfVqRqjEm8yXd3mdH15EQAUBCTAAvzUUd52R2We2cMzrq2AoGQjoGPJQW1WqurNWYphEKurGEtSAnQasxGYbJt",
  "key31": "4Ygdw28s8Ksxpk6vQGAtbRWZe2PfPmETdSK2wCPEDuQBVH8tZaUvRdYQcwN83GqzyxCHvjJLA7W5dFBCLdBVUtXf",
  "key32": "23Vu2uDypxQrNkEdk1cUoqQLWPh2R14ZJuM2GuTZSrmGwcmiL8V5qwmnKggL2FEhV46ZcdBaBenpnXC3Epbcc8n8",
  "key33": "9j17ArpqTRTXVPgR5YSe4W7v3uBCnw6d6deB7i6TEbAWTd1z2DTE1w8wuEnvkJL52Scw26o8oSP2C7fCTaYopVD",
  "key34": "22quNvZGeoZeJL2XVXTnNRdKfawU4gLYZCX4rWMhdC4JiHEtbSjRVX7iUXL3qsWQnc1bZYqdqESqwnJx5muNAawx",
  "key35": "61Lo7tY2oTqenxcybM1WEfQrvZadhiYkVwbg6miT9FUvdD9Cp9jEJwa6Cn6ST5T5qwKns1Fiyojqtiw6z2t5fsWe",
  "key36": "BE98DgnmCzaZVwCBPhu5zyXjPc5rih3KDB2QqGmzW65evNr14c884hGQT5GpomiMBDk25DbRap5gTtdX91QLa9y"
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
