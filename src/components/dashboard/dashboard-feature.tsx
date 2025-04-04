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
    "4rHwc3q4iAnoqDEy2q198qsmYj9KyKWnLjN594N2GJeeJCdGNZAHtuBHw1auKuADSNECFWj19iNkKqVduL2a2dTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dbBuUVjQvmFhFSHCabUn9UiA9RhDSLhQqWqCEYCzfPyd8Dud45mzXgUfv5qX5dqAm8Vu2yDe5AdBus7iYxqF3m7",
  "key1": "QHdjcMndH9YXk712xKPAm97WFw61eMAwrkWzqBNfwve2buJ2iLzhBVM1CHmsYxqSNZ9XALU88kgFh5cd6Jm2YnQ",
  "key2": "pPaJ9CvvzVx39Yr4qyxqDL4fSGheZUJ8CBd4rLzZUcQbaH2pdaQKk7ykekX5vAakzJY5qPrqjRbsx7dy7sJkqLT",
  "key3": "3BLBW8a3GgUxWfeFKS4YSXcRVDnaJHfRnMroAn9NX3YN3RN8xbR5d1iCHDwtFPb3bAaawymqP23eRqAvsscDgUiR",
  "key4": "4SBtMAVDtFzKDvUGowmXv6h9YpCvL2s3z3rDUZLFafjzaoEsRN5HKG2xHSCaieN6PLxHazcJWKEKfNecVmaec98s",
  "key5": "FwZXwSKnNkFgNqxkJcDyiEGvzoeAp5U3UsMAEcAJHGefymvLyheutZ4Yw1BszWeZjwmbsEtjn3rRjF88nmCrJFP",
  "key6": "5GqsdzAXgdeFgqMC1XZWwA3atgrnYUrzBgFdmatyAPMXeyCbHLMYMez5qwTEDq8JibW5zhTttrhUHB61DgSQPg2c",
  "key7": "o7LUikgwWNzbFvciG2ZMZmfFVwA2cRUFQHmGprEUMprbymQ6h9AyCJzgFahibSBPLipvnfmT63nBNaiJTfedorf",
  "key8": "2Uu91fv4pHtzvmFH21Va9vUJAoCDNu86YPoExxdsDjYtn3qKBM86zh7Kg9rAjwUeQKzMprSZKRi6jpWTPaKW3NkD",
  "key9": "54wh73UEUqZzysiof6KptzquK1qNNiwTRGrrVrcYhxmaLvKgkRpJh9jWBRCXXyhAbqMBtpb71fcEUcTQfNUm97Zr",
  "key10": "4RrT5bFLfcQM3VfPo6osJuxqMnGhm7i1WuJYpjVNAwx6njZPvsK6C7qkR5APPDak5LCMBoZK8453WEHqRa31RMiV",
  "key11": "3jcdck1JpUmDwn8nkzUaHND3Zmm9RGCiFWURnt3m45MZjqaugJieMCccBcFcr9vURaDP29TH9fAMPEpoQkqwGXhT",
  "key12": "4CFgVLGs9yFrEVnxcsYUgWDgFrDm5sR9rtJHvCrUnUXXvYwbmVgseQnQvUWpabzCTZeRG4Jz2dWqhedWGThXaVHK",
  "key13": "54p6EsNRAXkSpQPamvZjfNHzRB7T7MLWEsksHFhGnWqoKXXpYayi5shSKYagV1tYghhWzHdVWFqXfBxas9GGiYVB",
  "key14": "3Z3jyby6Yq9dxfUhB9vKf4VrpZdpuL3PGKwJTWtjkwVKbcQ3sAdWaZPA1GrwDsNV3obQiB1UbXXQZ1BhoT49CF5g",
  "key15": "yZjDAfh2Tyzn2BXzi1m4FyiwBGViwFq9DvGA9vFxmoA5T6CQavzPed62FbrYJbbRej6ZTfRdwZNKioVydmnzCwc",
  "key16": "5n3HD4ViEmgKmq1xFGHGd1jWnZ8HW8z1GNefXwyxrMK7YWgMzy7phiwVzMAao9KZNHq1WPFRh8oYiWDDZmfyjrS9",
  "key17": "44AhxKDVi41e6Bvcfj2KNMvbYxgdSE3WAQvEu5QWqKhjrAMcRLK562CTrjB21dXT95jW7B5LKKuFiTcD5PiHejuR",
  "key18": "3qPx1x4VBbQ9yog8rzSRVVtg55Zdj9tp2JK1AiKR2izfEaa7sF1AcYEMpWGdDFN6CCbTnws4rP5Nzf16fshsRidL",
  "key19": "5wDhUe5ym6PqSezA2LEE2U9ZQZxsGntQeo1f4aYNJSoBSVAKWQP8dYAckLBzptrezd4iPCYrAb5cFFNkHHpkhtMR",
  "key20": "5acBdPU69tpNxjpPNLavmwPraxUPSUMNRPYxmDBK7jqU1UN1dosxxPyTSmQ7L9TEBtMyV6AZ8wyuXpiGRKh6GoXP",
  "key21": "5JrHtTLhpGjViF8Q2cAWRN5qdn5jxw8ozXo1cRkyu5Yx3gnxe9BEBmLd8Jw3CtYMsbryfR96d3Na2cRTRBb1X238",
  "key22": "4BW2a48fiwTsWV12GEzbNbydiqXDQGpuhzPDiWGeToGoqXfcN93woY1bmf1KjYviTa7HL1EJmF8WuEoe8fzFGN1t",
  "key23": "3LhrwCDUF1oHf35GN4FuaWuqhmy7AT6mKjEsLdZngvihsdGujj1G2pAzTiLwqQBG1yRm8ZUL7q3BJb4NfcJyAAfV",
  "key24": "Fr1dAd1PJJrXuh29TKwCxXPM81iJSzpLDkVG4WA2yShREs8va7LbKyyYRGEfuvmccHBCn8Lpc2U7vf3WBvgksmm",
  "key25": "4kMkGwpNd5fDcerAzKktxP4xLQSN8coxLj6SbeR5QuKrL8JHvUW5n3dyvs2kJ97BeQXnA4YqHYEC6VE8bHLEaMje",
  "key26": "5LXKGAz6B6i2vgx39GY7w6sxbDpu9xNTSUf9hS9L4eP3fBfVwaYeV6ops4D9zVXNK2FcmCUEaZouNkWULnrWSPuz",
  "key27": "42jwbEx39SegrqD8EUrJkkkRFFy9YNMjmRnU4xhi4W7kc56BuEo9rP2NnBuR1FuRUnDHPffwGmsxyAzBU3uNUQN9",
  "key28": "59bY7Qcrx7wzLiJQutsahqpVEF9AoMY4HAkcyg8bLibh11NPhqTQzcrVM1b8cGVQhP9sjqX16u9k7D5F4bVq4829",
  "key29": "5DL4wWSwm9KjEBoWygLpKMvZHhmHVk8VE8mS1CAun12cfKadDUqFasV2Xmdsxcv3MpRf8QMZ3wEBTxikb3MBXwWW",
  "key30": "4b1LUSR35urGRrsR932fwgwzWQLREWTrBKedLvz8PZfH1NcpVzFTTknhEG8j7zGpP9JVEqzukaa54mmQQGT41xV",
  "key31": "4nGwftuW97337zxXTbgWNWegcMx8z4TA7C8uU5Kga9v6CdiMR4GvpQuKxXNWvMdhYR8Xw6Pr37YatEUBrr7xHhUZ",
  "key32": "2PhE9CvYYK1WmyNAyjPsuqV7HweeEXTfw781iDVnFHsokLvGH23uFfYsHJZwRVrrEn5k7wvWWCLJCFsqj5xGjzek",
  "key33": "3uiaBoLK1K17Up6NJsgkKQJjuqmFPU4A6EkbemkCkrXCHp22YxP5i3dW436N7FhjLkARYsKoLu2BD9NPbkmZtrXa",
  "key34": "4UzteTgKRLek8jPbBJBgRBUKqWaS7Rn8rQJHXdVyP3kFzw2KMQY445RxwMWS4Q9ShaTnALVPkbSaDjt1CYx2Wnm1",
  "key35": "88UWaRtCvExktthH5E9uSjJQ5kQcwMWPUks49PWYaoSeCju2GS3zTp8tYyWzDCFhysptafCf2RNaRYH4nL5T3mH",
  "key36": "NuiD6AzHUNsa1741weF5jq397wz8JsqtsHZ1uZ6hJStcS8smX3zniuMwXFZvR7H4FkEAA7igVQ1NtGfQBCEQ4Lm"
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
