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
    "Hj4X6wbgT79PKKxAAbo8ABft7ma12rrvVGCULUM6yu9Z4786nxrNQ3pva7hrbe3Vqbo8CoHoA5dVfigZycCVnkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rbZ2W7c7qaekxpKA6XWYiwdqPZcTdTEWwHCWgSaqjR4aZUGzvb1pvYAFKqWmGBMveYMoVZnie6TZqD8Zk7iK9L5",
  "key1": "47rWd4kmbAQ8xzjt9swhkvrvLzsdBaPZVWhGnwBSjfyz5RQAn5dAuK6uYTJx6nMgzoSdDSyvG5FrEMMZGCmj5Uak",
  "key2": "5Jrx54BxtUgcyJENgR1Lzx38vzu92Una7dYBixvotbZHUFvt426MGxt2kvYMnZ9KDvWdMiU2SQerSqUK5HZ41Xxk",
  "key3": "2xkiVu3qmXHCzEUDrUtNSAGPh8J7ZtwPaAzf92e2Ekp2TL8REGEDj1hbLKG4KXzGDEytpbyGdwuXhh4LWUsi3tC9",
  "key4": "2VybMW5svNaHe1HbC5T26gWVjVy8GkrGSwPGW3tvi436WpWyoLBE1DunzE5GHi95fjtxWeHNzKbha4aSR2akmvo6",
  "key5": "2s3aGcxhk9stNmmLPoQ6rd3QsP1jBC1p4da1fpPK1WF9QVWui7cnGKACNKTYgCDeZwcwGsKQ6jtBm3WWrUHeTYG8",
  "key6": "pNAj35pZhwkHdmv4Ao66SRnAUpfCoAChgHkY7ACeoxajEWHXddHoXtvpzyRtFK69xedvNMnqAw4ny6GJodED7oG",
  "key7": "gnfGuKwLS82sRCEvTLe24yTNX2Hmgvrsz9Xo4DTZxuHLs2jguSooSkmkKkDmHxeynVYJqTN8biexA2hYSXW5PS2",
  "key8": "2mVxby5Jk59KcpEGV5Tcdm7R5PHFnu3CLHxtWn1vUcTFNKGsycnRoEuySEivGFQ78gkxfybzjWP5q9FVQ1nMV7iV",
  "key9": "5zszstaE8SdrehdYBpro5JYxu2hJsngYTCumb8rmcuJPQSJx6MCpt75MGvgJrLqcis81gew9CK4oFsaidcJ6DVEB",
  "key10": "3otAd838bJLsr2M1JKxZ73bsTKQjRd1ATUQo7UgX39urXeTjS6SYQoDqRahm4sbU1jBaGwMAXJh1uGWfUqkgt6Gb",
  "key11": "33GNXaSUVZekhcn3DKDe6JC5H9Q8jo2Q3LW9nJUP9sGLC2Kub2RuvFxXZZd3PoAP2c8GWSpHooZSrv3NxmZeRTiL",
  "key12": "3yWeXHPrBbTUSzQiQSMPTfExAmpSUtKUPPn138SZ8RotK1oEezAQb5F9346N3wZWWQNJNtEnrxSugFa4zskn5wTz",
  "key13": "hsuLeh1Ph34LgBwUhHL82yFFBp9d7hip1kmpGEPowQYUpsy7PonxWkcTgTs6jzZk7KyKotmYkcESQ811Mjqzmid",
  "key14": "592oi7565pzLWpn5JxbCiMVgzP6dsfMAN2CSZHsSEXpWFCZ2emRSG77qqqFZv1HsaNw3F52Np5osdnxKZthteJKi",
  "key15": "3Ek46fprUVf3MqX6eindBz5iLr5gYKwXNQP4QhezLjs2wK7mJ9grH5KwMoq5d1FD6uBeCzESdojryqYack6Skv2K",
  "key16": "5TzF9AmoVe6DReU9CDZNLJP9bgN11mHuSkQEJNnrbBCyP78tzVdVaVdNjBeeJpHSSja6846a8DtzPqbWPHr7Tvgu",
  "key17": "5FkQpx85mf579dC7pYJEqbALDqhyNhajbFQtpMKTau82MiaGLkHZYhrFMdQLZDGuiTNee9ij5edwDLHxwRvHmDU3",
  "key18": "582j1ZtPKeYbMMLMqdUz4fCGVgCAMmRkqBcrTgApQQF3YQqsG2BQuHuqBdMuuzGioVZqJNHCaA8mk3NBxCdzgo3W",
  "key19": "CYMowUiLTLGmTGg8xTLcf5vak1niyvqRydjLVXxDPJMLqb49HMp6wnschX6ToXmkjfHohNtcjbWBxfHt6Kg2UQ4",
  "key20": "5LRkB46Bwb4vKvcYHquMakr4CDpQMQ6RYeus1oNTvv5k19sF3AkZ4AMQFPYwZrtj2G7ghBiAnrSJSb3UyxU2vv2i",
  "key21": "3M7bz1i7YRGmHees7GB3ArWgE9Qwfach5GVAtNQxWhschJX1nb1ErJMMoucTY1TRd2p8EgRoZN7uTbH9JfdTNuRE",
  "key22": "4y3RqGXyThu46VK2epGCrjy9GDWdKaQuzUYDCAUmbe3KKsWx73swmtMHKA3EDcXjHaRqTYosVRkuYhxtriJDcsBx",
  "key23": "ZUJLij6hF1AxRfDZ6QPgjeDhF9S3wvCJcAseRyyzk6UnXPKHjET3P6fyknTfXRW74gVu8a3WceQq1Hrw8QEKdio",
  "key24": "7kYJY9HtnsyWdAyxPEfVdvmaUdaLTd9z1JjbsiHMr9U1H36YfeamDR6L6dXsuhvRBq8FwRkZF1zmhcHLyagvzSA",
  "key25": "NrxNMZPGq3WuocfRLZbFjsLMHm5iPfTtwv8eKGQBqZ7wwafLAHRteFuu4gLszHyE5zyDmVpchY2jKrM2RREHGzS",
  "key26": "wAzTQkKKpBihhMG9qeYuDXzogHMt7GG1h98AWXTnxcdXack7iy2r3GMu27q1BM1GMo3SKxvnhmeCZkNMPvWHVTP",
  "key27": "5WbJKt31qhAvX4vLHad2cYyB6DcSXY34Cg4g39MRA83LSao5kLjMTDoTjviXEbEa4GxGZb2Pe9fHFiDuYkVuF2Am",
  "key28": "BbURYnPuiP93kW3Z4zcprw8wpcBQenPNCEkRxeVvk13XqtKXGT5eZREYB1DPmy8AKBUgvsKts34J7LDaVxqT2C5",
  "key29": "3JiTEVBkddcXFzFwiTqx4pSrvj5qNL2h87GRDbjE924XQkVm5bim85HXpPofgRopXYPRz482DpTduJeUEbmPfKcv",
  "key30": "3dTDDJhZbxNu46ZLisCMRAiowqCXe39SkF73pmbtwAuaawwBWaoAXMNqJFV1HJcyMZmPiBUrLkKfF3krCC9hwBp4",
  "key31": "TAcj7tjvCY4W8igkdjKCuAm7RfgEZKSCm9P5oCMCqHfzpnSyhA9ASxApQhrGMpnpU1ohKpnYRwo2yTNUrRA6KZs",
  "key32": "5ign6goaTW2ztQao64shC9J2VjrAjVWfqqTrYYANrofFtr8VLEzT9P6ZcB7D4sz1e1Z2VWfGiZBFHGyNbNAPrWNP",
  "key33": "PSUDuBvK5zKhnPr8N6BnrRyN8nPZhnkunSJkPFAmUsEAuLAcYGV4dif5wY8RwxbX9AzbXkGsndP7JU5Gw8gk6Tf",
  "key34": "3rWipJYUF3nweUJWvXeG32nCrySZsTTdgVgHvqnUGLNHNG4afSSyqvu2z8iw8M2y6J2HrhLD5ymrRgxTUUTvjet8",
  "key35": "51K6mt9TuNBemh7ofcu836m8rG6FKqBi9Wd4nyWJQv4Bgz8uLvFy8K76GDSAtAa8Bnuk9ZVJy4bgu4NNs1eWXeAP",
  "key36": "2qjr1VaNohUgC2yf4qJpRUg1YtQwCRc4nF7XfppY54Sbf2wc6XoQ4zete9uN315RoyTwDUf8wtfYGXAA3wUL7xvW",
  "key37": "2LeCWtkwKEhDDUJvUzVLtcizEQ7vMVLRUhuWH3DxVGeRazxUEZqinCsodnaZeZUY3KEmGkVJJoisSRRzSHjWhGe7",
  "key38": "4HsrZoSqym5jNqBaxAnYKBD6ufwGLw5ZAydYxebJkuu6bRe5ymGWDhXimJy9JnGkTGcrCcmz8NbDe92UAT3vxmEZ",
  "key39": "4ai1BqbsjNZiKRvnpd3Rnt1hhapv6sSNni6cHyLD8a5fEhn8hWPeFHfvRj36V5FRrtngesRHQUE8aoFhwQX7nown",
  "key40": "2yDvvnDCghEdAaNuLZtyKo7EAf8r9ZCTVRmHfBdq3a35NMBmoupRgjtSMqvAnjuWFcj4mA2uXQ1G6B34ZN9jboB8",
  "key41": "2xDh8S9qw6csTBfRnEDqJ2enc3nsigCDqd7wJNeb3DDrVRXfvtgRNcPY73oNTex6Bv2R3iJJ68e2MHLVbYZAVmGE",
  "key42": "zTS96CyaA9fFWfqBihHKXMDmYWC2aLgVU2bJM9VwUB6Q3WWDsTwFZ6CGJjcnJJ2H9BDH19T83uEnHGCY138Kasx"
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
