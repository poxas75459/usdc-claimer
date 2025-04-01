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
    "27RwaUauWnionrwBn6co2kobeRLyhfoVofPaUuryvhfKBZqRCwcEowF24ANL7TvWeg7yfJzoeRf4SsZsV7QhVwYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DfVwkaJ3xcXQdtdMFBQy3fsovkQ77XYLQtBT6R3MWAC7qtVdFtTh4kzVjjLGgHXqenmoJhu4Lea96tphLjJM4Mj",
  "key1": "3sN1KbDQAsQXLWMnnfSrDmn4hRZzMo9Kq2kxomC6YU8RrNyXSGJgRhvR3NgQMwE7MkZoiqFh2NcJX3ZsXfBq8GTp",
  "key2": "51Eh4TaMKdyWpYyMy1Wzuv3bbPKFvxvaJFetktdMqrXN5z8TcLLiyMUdihEJxPS51jkj1C6mWtvfXANGDXQFBQeu",
  "key3": "2ieuZdMupx4vqLr7bysCbF6CoaMEGBiZV7rFvqG4cugnmbT1kZsNftnFragLztj1s3GMgiBQs2zcTZLvbt7Mq8Rt",
  "key4": "5XrAo9KFzWSyS1QbGHkv6ku1QjahMFHneRY6LXDXWwJ8UjjAZF2v19PrJvMfY4RCL4ZFRdoRsjRBDFVUSPqEzjop",
  "key5": "2DJuW2nAceqLmyuzXAS4v8LSGVUbSd8wWkdScTSCNFwFnCtt7MejYE4HtBRWNEotEZ1hNyRnmwAMRphf9FXGmX1D",
  "key6": "3QtV8RNn3qDkyZBNbbF1PLbNuCi7w8yUZGGsMtX31jBpCddLbsXpDbaaNajqUHEVd6dN93kHW5GRZjY77aynPFtP",
  "key7": "UqziRHjyaXgmV4pYZGEzVbmLSUiguJ6FSooQy8Kb57uHz94NKRrDxQgPuScAJ7G4XRnxGTSFL6oqK5ouZm5pMN9",
  "key8": "5owZ7Nmjd8M9ZK9RoVPPeRn575K1rQaMUw91GLb9dnJmaF9ACYC9sjfuYd9fZv3XrJ3nSTu2ksth6YSC87MbCj5M",
  "key9": "2V2x8ntMdDfBGXQr76z1ZCUMkULj2geCSTpAubZn3dEZup3uGcFFDAJSQDmZixo4mxVwvtv5gkWfwG1hV2kvwSeP",
  "key10": "5eCgeWonB1ZK5RYzVWkoP2SHjwDHySVo8rCB3XhcPMeUrRcAj96WZgQS71Rj7T6UGGFzWojQG8HKnjwiyfGVCqRa",
  "key11": "5heLYixtBAx9qeFhCFEH5DSLCvZMrRSBVhtmvs8WJeemqWhpNtABU98gPzr1HpL8sQ4zAEbbskgAhgyxTJEVHx1T",
  "key12": "3UqYKFzYHmUgUsF7sfKbnMcMHCYMXKYoQJbAcma7Su9b7wkRdwoM1RyqYj7eLC3MiRC7uJ4VxHPfHHaqCtNdgn3v",
  "key13": "5yp5qCqPcN88RNKQWek32qitiCNWryikHvjfD1Yq6XCHcNV79rjYQW87K64s7R4Mgmq7w3kz5d29R5TZLrx1PhRC",
  "key14": "5wk3pNrPT4MFzGnqAe8y5gyEPDLyy41wH5tvmeBTSbkkXfo8ZLGsP3szqgHbJ9g3BaTBtBzPXC7G5navUpZ284rd",
  "key15": "At7ZSVTMLnprpApD36oSTgYifvtveKCWra78r95A5XpcYMc1m1KNvraxZ26efbAEVXDgkuWg4ZG6kMdy7gXT1yo",
  "key16": "2BCwmTRWt46zgfuV7ndVXnn9NdvkDRdygTAuAr7GsEALGwYbMoxZJbbGpYu3nSjC3qSEatkueqXk7ypyTAAvYShQ",
  "key17": "4pDSSVuphntxdCEkwxsKUQoU8gqZiMQkwy7LvSTRNdg1guYpmgRQYConxuC1ty4Kqq2MLDYpnD5xui9PswBiivvW",
  "key18": "4Xhn1aYuKiWkfLdbrxiZQgH8WA3HZe7z3nayDV4VJjC4W7LLSvk3tvNFeMs5YN9MgotCZm6GU4DTSpGknyZrY7nx",
  "key19": "49Q8rbrc8skMj5vAaeop53etXtkkMuWB2Vfuxu4gwbyVNqKDjQkrdKut2YXJCSjjviuFMJL6Her5kPatKoHR6R92",
  "key20": "3wJwg74bYDuswNLNRYFC8jZhi6sLLAPaQmAoKY4u8hKQ9do1zyxZSt7w6fCVodbvH9WuGpJXjTTvj7McNi5XBjFa",
  "key21": "3VUkL5VU4XyWDizrem1otBZDVRrhRjF13gRrhiA8QjJyksG6D4Rajexstn8tUcib5LEWHZi1m7cqLUeXc4ZTG3oL",
  "key22": "3ZgCVMFB6XHmT4qGry15evfGk8Wq1wL7JtxHh6cNaJtXwYUohZYDrExWVKvYWqBUsmDMpugXXnd1vGvH1i2TdSE1",
  "key23": "4Y5Eo4g9UygC1NxhexJTQJfD55TVYRGQr8ZcpBRYg71g8ZBtkzk5DPAo3p9Y84HXphCXbt7TdG6XvNmaVPHNpANQ",
  "key24": "3Job2pmXWrKDKfkozrqHjBGrfZAnpoid981nafCpYJuyXpGfDxyvvP43Kaq9zjwAyxqYMUJZ6bvoG9jw1q3HtJPC",
  "key25": "2zcMXykeggbERNfPFUR9D3XeokdH2KTvDzLYXVwdbYpddyM3etTi8KD9B9h1njL84L1wqmvkpChe6veDeo4rtfog",
  "key26": "3ofxeSVTae2wkujgJJ7kTKmD7NyebuP8k2tXjqgqR7U6VSmWq1yjayfkJSMZ5hLSCgbb8XNpmYPprpBbG4QNdB3Y",
  "key27": "5QwyyRSdSbDPzD3HXnYNKZgVc6GnHNLAJ6VmrFjocYDw5zoBhzSTC9jCZ5MMcSb7gKY5AUtkFKREbXwp4WZfWy1D",
  "key28": "9k8Pwr6gvYqKCfd5KG9LDbG8ntG4TPnU6FbF8EnXfaUMpbxg5NeXNHxXiGAYHovkTnYT47W1VdEqZbQkmTgNb76",
  "key29": "2CToQnS2mkjso2TSsBaKqKeTnQo5LYLJX1FiVny2WeM2eZE1gUovtUgxnge67bRnDiChJstv2C5A4sWPGh3H8dqX",
  "key30": "4KS4hBpqLfZ7sBSZ7UmPcHj8HUKFUcAhS15oyuQMxn4CFKoo2FYDr7u4vyb2pj32AALhXAM5FUwhFAfRNrVUKf51",
  "key31": "Y9rtAP4xijyV6rvHjhq3L7XVz2UFWhtmH1GADiWFhiW6eBPDioqjXfXf1u3yPkhBCrHPygcpDepE7MGGM2GkZ9j",
  "key32": "5Hd8FSx2bG6oLUGdHjNJUTJ3aDmgEMQ2pGGiMt5XxVHy7Dnhg62uYaGr1hyXuHHNz7abNWAEV9XuAYg332Yxu1YE"
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
