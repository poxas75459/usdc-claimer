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
    "3zj3MWFpF4qaa7LcoJf6MRijEXhDTZDAoTxVYZL113Swp5QM2yecBD2vT7AYfwkDASdXjryL4eUPe8ZpoJeLkEfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3gGkCE6AK695EwB2BpF4azmErTUAP9qVqmt7mrUo5Zgs4wzY6BQE4pUZmopfwz1SdNoktJB3F9y8bezPcvUttr",
  "key1": "6372yJQjS1FG3JaWQBN4YpTWnvdXXn5TWXE5EuTujXa59Fb7JhBaRNRrMiwW6kuo9vAv6U9ybF9Yogzpq97VWNLz",
  "key2": "2aNujWMb1f6mUdAUR2FfcesV24AbRtrwuBAL5XopB9KwiRH1hi7d5E8ytbKc2o2x1EfQ3yGyyoaLRbLk3C8yYaRJ",
  "key3": "4r3n5EkBc1tQCHHsNdJg8X4wodWgjKGZFpv5gx5KJknFY6PZdcSYzYtvMcqQ9fbU2PrpJJiMRPTVirXHAkQMBjCW",
  "key4": "2ZhDRfYXxx4ASG49w17dToMVrZPDPL7LW6gby64cJ9458X7vjzS5EG3pPuU5PNWx3HVSHW4ESJq9HqFYmcSzCVTu",
  "key5": "59ZyPrvPrXMD9jpjTsQFjzEbqJJJvYKzQg2r5R3rgmnpHwLFVB2sUqBtTdyYj41rqewJVjXV44fwq1c9TLd2B9LB",
  "key6": "P6D1ekzHCXk8NJoH9gNLXxSPLbBAZTVZ5tk4a5f1Rq8U9ksGnbF4aCefCSV6ofbBreu59uWnXVeygD4xFnTTp1B",
  "key7": "4E3wfvuB8jsbnV4sqahu96N4cRv9fxYugHswmM8eP9qJh5dMt5XS19GStPdfw2xgudVgCooytv1aXyCGDCkp31VU",
  "key8": "64oFAvTozCeLAaPmck2qusomSmPDy8MgdfpUmNB5A9sBLbs3C7c1DVoAFt93QuzQY6zz47J2zDEBCuWqTAstTfsT",
  "key9": "2v7eZoEJfMco4QEpmCw4fTaqfYNPPfYbdEfqCRbk85MvFP16MJaZ6ap7SaGou5YaZP3PkyR8A5Q25MgkCVy2qZVz",
  "key10": "jWd4rZtiQXagXqHrAcpbop4eSzrp89CTTyft4m7SumsGUyKjFKyXZ7KHHpjSQSQQpEeuhmK5kaJSLGFsaRw79Mj",
  "key11": "27CBHBAMBKMYeA28GrDU4X5XJm3yJdMozQxMnGhWs7qXDKrACxBbnocww1LMLxMWCoMv9P7btuM3W4bXHKm29qLQ",
  "key12": "5gpQyDL8zD48yupk8CC8SgFmg384M1c3WKMiDHKghUQu6DfVcYtT3TBgYNS6wyS6oBhGBesWWqBo7XFequ2Sfdjc",
  "key13": "5T2oc9reDJatpn9mFpQuTxEQaSre4e5uUh7rKQ8gg6T7ynmSfhCUtBJoCeYDUQLwb8pjfgKxYDi2CkGtRr8XTpTu",
  "key14": "5dbndYaXvVPRp55rjN4MKbX4Ww5WzPx2sMXq5RjrroD2SHWJELn9fcfdcFu1zJpM1uV5FWUV2BiMQ9EkFQRp6tqU",
  "key15": "3hvJAM56nqcsPib36dnPronPcNyQCdvgBaTLZ2sXP5cyM7YFTAeAPCP22umuqHMyWMLcUnVSx8qhdtUBRY4cgFac",
  "key16": "2yYBet2Lkrp8Pdgr7aVbct1TibiFR1WZ8dVtAcftHsjMqp86UUUXp3MtVnYeoTQZL91LHrcKDzTX16xukwBXw6Cf",
  "key17": "38J4ut95gTpkhduHx6rNbtssjdrMZomeJmBNyQNz5r1Yg7e6ZfejZYVDp6hww1wQcgGNo1iD23rBCcPaUaWnAmzF",
  "key18": "4yRGUKLEGvkaeUGv9aKhT5rG43ceVLCg5qgx1KuCfUk99kSDcRS1CNSB8RJKBFCFMSKRKkHi5y2kzFHMNyu6PvHB",
  "key19": "SCvmKEaZn5dGrdEe8CNPxiY5KP3XcBHjpzCzuDcsxiPnhmTxMvsSgqtTaJu35Tk1SFCP4T3U7BTNC11deYHr8FY",
  "key20": "2Ch5UCQeJTWW4wQgjHNrHpvwZJk15CQctGLnha4rLhsW3Kc5MeJpMopp1kXRA1XnFw75Pcm4SQPvg4FJjkjrA4wB",
  "key21": "5qzyHn6Z2mtpzu5w8KwGiro1FAj4XeB8vY5tBqVJq5FTPkmZjS37ZYbd6pmM8n3kazE53LtozDrYsPTj5fgtxH7r",
  "key22": "5tPZcWUKCqGMseQyEtBju3Y23VvaBNzq4EzbYFLabuQLdvqqLG6Frn9CwQ1aY2s7UH6cZdfhUPehCLgUxDdjUk5S",
  "key23": "4gJHBzbATCPGAD5iwx2KukoCKMMHUTybHCbGNZ2XAuMHkyYXDAUrueqgWmq1paCSpTkmBJPGdJMZkTCQynJKBQ64",
  "key24": "LLpP9WwCExpYPt8yjYq91ReeigZpagUJQ5nLhFeJiB9FiEcfuj6evDCHDW6NUGszzuhiaiejpNxS3mn2F6DLsNq",
  "key25": "5gsBKBTZn3hAEBbkNEqSnvEWJPQ4jGdFdBpTM4BowQDWpaN3oEw4vH4nkM4g7WBZpz2RtuhWv9qmdBqGfm5rKKEG",
  "key26": "Fwn2Fp9W5efhYYSG2KZSEe9kZYUy7gF4A4pZGeoMnSL3mvZmSeCobv3TgNyefDJrjYGk6iQQmrBtA1v1TZAPobQ",
  "key27": "evxWZwQnHpdfBVsCz6peoGBAvUVvDW8WCPvzPLDQ2fTV9yrCVrk1rhespKb5XiVZrHQKGeMMiD4gXNW6fMq73WF",
  "key28": "5BD8VkU8uNCY5EZUFn3GsxbqfK4pLFmfqXgVQxqZSa3N2vXgVNbqav1U8dNaUXQ62DM7xCkrw1Wb2o7WiiaDwHEE",
  "key29": "5hCd1VEPgkDJTbcYS3xYKxj4wMHqnHGb1tcznnPabYf8SLFv6tYVb1qpSD62eyALmhKgpRCzC7Q4mB1GJ9aEtXRu",
  "key30": "4LSbijkYoN3wmb1zuqofB7TCpnvoyz1Sj6mWUktyNxp1MgPNhjuuEDNJT5Vs9V5UC1i46aKfrLzQgBKXiS2RRTEp",
  "key31": "5FkSxeQTrpsmA9jSPqXcXjpS8CKjwE5XiJf7PT9nz27QBCgHFhBPYtGKcsJZtFPDLz7yDKxgGSQ8Jd6v9GmGi2SM",
  "key32": "4NtXGkBCz2sU45HcXMJhbiYKe2Vht13DSsYwniySDXkkNEvyVAhyuBdvFpoRiuNcJ5zJ5wK94M2kAva5ZPkPNCtq",
  "key33": "4fQu2cSZg13UERrcjQcP3rT6CfPHBLWt7adQ9qmPeyv6ZnjQqw71ejPnfN9h2PCeFiJb3ZnZ1ABUThWzGeGBHG4h",
  "key34": "3muM1bXCkBG2Rr8dhGuyMsszhUmt7UwYrx4J2QHtNL1BbNDkYi9yqMDvEekNbujbaNM8TMaxJeSPt1FFZLx157TC",
  "key35": "37XFByQHeCpFZjj4pTr1A8NY3G23qwbr5bP1crqNaxaDN3FubsXELo4AaKdSGiydSVXuEsxvU1HdmvWqe6D7mxE9",
  "key36": "4zco7xGVb1Rnd33Mb6y5Xh1xfgG3oAyhyKkdQeNT3LGw1gpfnNNvRo212wMEcdCfWweY5suB7yY2tjsaQvXyrF9R"
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
