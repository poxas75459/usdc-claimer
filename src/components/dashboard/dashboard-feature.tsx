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
    "xzwzsx7ZTJtfK9LmtWXaAudf2CaouNAFBmcFBYKwCDKTWRo8NLDwy5vPTwdQz2fjQSx3vfX8Ch8Nxk1tVfWiYDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FE6nesqXJ62j24BKdwZqLtyAkPSWYmsDxPQRG3L8EjJ57cyjB5cjH9hUhVUyfH6XXTtdJzUdeyWKCQMAjc1Fdn8",
  "key1": "4WiymqYhWnkJQZtMVH7BouJCsNp3r26KwbqkAqazYL9LCgxHnPaV4A9vJuzK3Yyc3tpYDKPGfb8bsDSjS9DoXbne",
  "key2": "3pG4zmAYiBTBaDgHYqNmuT6FRaJm9uUzMbZbu9E3SYbkqYHNmfnEzePw8w29r5BvwmDXZe7922Pia9gzE39ejTdn",
  "key3": "4RZuUuKane6c8CbApoxHMEXRgBzq4Qna66FAgw75u6FUviV4QcYPEeRo2haDaf5xmTH672Vigz8ZWX4dQrGmHmgd",
  "key4": "2W5eh8jYYq41Nw9oup3ffASFgQuXCu9P84QbqbCangeJdJqJJ4gmuzVjtA5dZGLTdjxhyDaExsgNH5SPPar2bGe6",
  "key5": "2zeUhQQs96ToD7bCd4mDcjUZkCfdQiLsMfiK8CLnPGnXHPXBiC2FLAheRbJ2XvWV9f1K5nydmeMSUcB3Wv3eENmn",
  "key6": "4ANbkr8qAF3SHcpP8oKDc5NrFxW4y6YGaNUBxV1JiCzFEKFWrtDYoN2SKTb9rD2d8r91EbfHSZQEkUir1g3Drcvm",
  "key7": "3V1UjD5FuQ3CR3mNCeaB4otHz696w6gPLgD9RQHUoFdUcMeJTJwcBGcGyosAhuVA6yhpTnhtZFXS7o44QYLAF7KW",
  "key8": "31gtVm8uoXQxC7Ke6SP5kApWTeyGJfy7gkqKb16zUcRNx8RvmAG1ET3LQMaXnbERSkHNSkbPAmfcopNJc1KmGTQM",
  "key9": "fC6FCQJp8LDJvbh5f1ELvu7hZ6vVzHcWzaXyBQTaYrSpHt8jZAER46PTFAXPuEivo5BmpeJxScBgWugkDTVqtL7",
  "key10": "2nPTLU9E9fQcVFtpRe3yf7d5FLRvbP2nGbR8JBFvWb8s4DjzpnrgYJZke9vYND3ci4SD9UYdMd9M6pyvUGxM2VZ3",
  "key11": "2RVXvRmjTqSQp23gLYneZ3KNs63mBeWfKYNj5hWKBdJZEMyHyPSipJd4k6icjxtriu3wxhzMEY8j6K6o6c9YMW8B",
  "key12": "2u5PQGWzrRE6qypEQ7Nar2cGv6erWBXnNimfMP3Ls9EQmgwDFWbzM44knfHXLzxKf43ZztvzTGiCcx4AksqV9UDw",
  "key13": "5wcovrgnoqtS6t8veNJKJtRXPwUXDax1KMfnqUQHu8RNvK9Yto5uAXhAN93enJnKLvTtGt2jmbbRxEyRg7hFr6RB",
  "key14": "5EjVptmCW9h3eF9JAo4zJtYUxbbs4K4A8Ce1mj1P8mqiiCzafswpcUwM5UkxmVhepUREQoQRLvFxN8ew6JikYmJS",
  "key15": "3tWnf1yfkhbas1STbGB7USWY5bP8HcLQ592n9WoowavXzBxXqaJQZLHCLnNu3iwtLt3ogF6i2sn1BC5A3k2fK7KD",
  "key16": "371V7p1EHRhVod8VSMshsQEr3Z2n3vmjmre271iEf5P46TAcddiDuppzoTL9QtyNXJgPWgsFwTJmNoRajfGDaHAX",
  "key17": "1TNJcfvxBUG69doFRj5xHZy3kDZXCdV6FmVzmeS3bbhQmeaPt4yQVieuJBC2P8zKu1cRzc3TVR8DMhwRNG59zTG",
  "key18": "itCmBcFaixSCNVJ7ZLHhc3VpGUKrWfEK83NUmbnJo1g6AYTedns1RNeeur4haP4TThE6RUiRurNzorBfHebM8VE",
  "key19": "DsutZePPbfqKd5DDfReNDRhFGqE2duxjiTr3vqjt1E4XfwmTXtnTe6DPUyFUf6x4SddDJp6pmw6QcXiPa3c9bFN",
  "key20": "5fv3VGsMKVjS16bkAaAc1PFkdML5EMCRTA3twD5XcMxK4t2qFTNqVKYKAjHot6NwPzm7PAUy6Q3bFvCrdApTfgDa",
  "key21": "4zi75qrZfSCsgj4uF3T64GQDFQf2grUayiGET2omMLgE9cApuHdjdkzWbYsoooueMRm2jVXYPbUjNYKYWLzLwaVd",
  "key22": "4y8QeG4tBQCabQ9HT9CQfDBW9bNjPddSA1sNHstqsEChXQygjLsn87FVH7Bexm6TqyCgQ9kJEdwbNtwDHdRVrJg5",
  "key23": "5igshhPFJpBCFdr1QVwmVrCWoH1wTptMPdyR8PpowLTKJ6Yxv72SL2LMQ8n9R7eS6Yx7B67vtvDcQoPQsHEBBLA1",
  "key24": "2SfH8VEVZid1KhmfG5y3QBxrrXREQqEGrcVHuXiqMLg8v5m2XxBydEUw7oZDces5wedtaEVCCny1G7xeiAqzgXKq",
  "key25": "4JmTKCfyWXoRtvHfYKVRfZjjZXBiVHfEBjH2EBxNnnCe7TZuPhY4kaAphqAiXkYLjWg4UK95VpbK7Y5h5ftCrWvJ",
  "key26": "4wtgXGywpjP1SgQDd6kuaUjwjb7TuMjg2zpNUrLDSbwseLykjDHZdXmnRks95cB7vbpnQYooTgAqMFqiEgGkNGHx",
  "key27": "5kSmfGrpcRk3GLxAvi7LD9UUVizkmSSJiXscHQUkg1bWQ66Yt7ZgHN9XEhNb4qc5acqxQ4eyD3wE1pLmGySDL6aU",
  "key28": "4QMmMJfjgRRfC6gbbF9NG5cmHGtLs3GQt7F9PHoF3Fh8fwTXNMru188ZAe8279t2AbS79oVVGYWo6Dmj8BYJiUN",
  "key29": "6TWxkoe9w7JJw3jmVtfZobGkpxniwqMJqqbbmwmkKvYVex15YZ8dGLPp1dk5ZWnmURadaWo8PZegJeHzP16NxAy",
  "key30": "29sb1nZxZd2gG5TgrKPwCCH6phtHGdopPuwqTfzmCy9GWPnSPaUw5sUsU41Uqk3iUhQX7dSVH3mHDE5VbRickqjY",
  "key31": "5mDKYY51aWPx11dQAP9fxVEsExyFP21HcnMqKyoM4MCXijfTPnWA8Q3eYWyjcNorfrSr1b2NxxSuV29R44oCw3rC",
  "key32": "2KoKhdbX8TTt4wtAQSWmTnD9Ep5NbLLbpciv3b8Rh2CwdevifkWLcZHR6H2dH3GbVyxouZ3HWPgDC2WS58qCvMYJ",
  "key33": "2TB7NFSe7UxS4ivhocJtVtXs7ASxRQkt11uGBLHT81Ve2NjE8sW6y6Y4PNEog4eYtZichjtG7aka6SkPdAMH5xWY"
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
