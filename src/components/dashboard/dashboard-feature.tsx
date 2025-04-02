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
    "4LdVu8bS5TsTj29ytwRJQGmwMtycnDBMXvHmorUBKzRtJ3FdXZ39rvbefNZKoffvryxMNhb5E7CmaU1sMWb5JeqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XdBBfHvky13U7zgGagrpUzoq1RM5SkELYaZjtAqQcSZGzC9z171WgHUzax6V2fe386bHJdvyZmnNkdmWa8Gwbzg",
  "key1": "55n1ShFUh6YiXUZJ5aQCYE9wgHDy1bqiYih69xjN1Cs1xbsyXnSWEZ7rNSZrEu32K2AUHxscExVZ8QcSiuTEzJBJ",
  "key2": "Z5KHM8rbp1To41cayabzsvBoSrwKHKVG8QBU1QK7UuKLxKwE1ToVvzWR5dAYN5zLRbwDCQQ8uyeyLZhyXoq6Dum",
  "key3": "31xpnwcdmqvN9CWxGk3LrnKvUAjph62Cixc1HceB24Qn6fFv5xvxkadJkdD9W5cS5NuzgGRv3H6ZBQhf522UuSfU",
  "key4": "3w2iCbBypdC79oNSm7SLMcDFXsVumAW1ySN6WNwz9nHxh8bffMPoPrZRdxrr7H7TgvjGc9eRN1EGLDqcD3d3P1SP",
  "key5": "5eGU2hqFH15epYneFWYvWcRVMtXpCTk12jo6vU7DnPx6W7erA4oZRvfkaLymLCXVU4jr3PntKLbmkr2qxA2LK83R",
  "key6": "52A7qvRECDq2NyEzLcHVTZgwezAS4vKLMvHXYs61EgQyzDR7SRGvZKsEsuDZ9auP1XmyaMmtTGiZCdp1j77Yt4Tm",
  "key7": "4WbJvz5o9EYoPGVxYzXgeC6sv48mWm72K62yM5gxhM1Jj9Q49RArKVhM4hJkx8BcFFY6EMXzuKCBHp1zLD8cy29K",
  "key8": "26KHcit3gBDaug8bnwxu3FYSNuE7UYQyXPQisjYKxFrmAXyAyXLoeFib9b21Af9zLWdTTEkkBHXCFm1G8qX5txVo",
  "key9": "7nsRq3PwfX4pabjCTyVdCePaMQCxadtqkA2hfmK9bWpNZTkDWGUYvoHu4NAiv12VNYYwEiQcHqDHQ4Ud45jyXZf",
  "key10": "cPry1djfgaMQ9E4RgATnfH94BxWNAK168gqFcK2zsTRSvYzWW4evsBQNpEx94HVg582tVGvTrg9Y5Jzqeo6D6Aa",
  "key11": "4RxAB2FBfiTcW7sb5BBipyX7gvW9d2phvD2jPo5rDszvauH7Y19NEwbofysh7AybSMKPrDRUXAvXaZJhrVqs8GWw",
  "key12": "2hGH3AAHaQYn2F1EZ1vjz4NYcaXb5APmJ92maqhiFWAmDQtnjLcB4JJF8XX8CdoUgNofoWiP7FQ2Vv7BUMbtMexE",
  "key13": "2NsS3Q6mack7cayLGMQaj6a6jn1tNcA2Qg9NPQyiv6egYTZLFi5U8n3Mo5yg75fyqrP4reNENPfDnaPkDpkGD1iS",
  "key14": "5o5FccCFTrniHGEYNJ97NYgJv5AUJPtzaMNPXv3wvf2LmHruEqyfmtytt48uEFoWZe8kxQCyyyJVyAK5aZQVREeF",
  "key15": "212qdGk2H9VWWfahhHf3zNWfpEYc86kbgZxbStu4M3z6yHHoXT31J2QKyzbmj99LvGr9TbuChWRubfJwPGwS7DDK",
  "key16": "bt24D9NZ8iTBLNdMQa9zoDPgmxn79oCcf3ViWutqpxDzE2RfJ2F5NLbgnKXiwsXuWWCUKCLmmvPFrNMxuLJRKyY",
  "key17": "3YgDVrixtRpW3nwdeajqg6jwe8psm19BLPiHkq44NXf22Ti8xJQiijiNADPoo3k39SaK7zi7ND7q1b8twAUXhCuD",
  "key18": "3qasS4tSGyNsPQ8HxD7HLonHT7U3gUmXHoqWYwio6ZLpsxE5n4fRhF7PgM4m6RAztmycsE6jjsNaxqWE5jCgPhi4",
  "key19": "3ZTzodAvzADMrq8LHsSYGaZTh8ARhnEsgXeeckz9S1vsn2Uz8Pnt4zs7fYwZwHfy7rbvakXx6nxmsaojM8BPgztZ",
  "key20": "51W85hQPZwMk6hSGnHcruq5eguQKfB7H2mJESRweRfUyGswnkNJVwCxgEZgywJ718vKzHg92t3wLwzaAWJLgGcmQ",
  "key21": "5yP71zJTbAUqp7cFwd4CT3g4umSAeYvHM7nE4ipZoyRWkPBgWFCVbPDKEgCwmgdaFTTqo5YJjGYUJczWKgpebW6k",
  "key22": "33FtQvEeqNbJB6nJPNhTmdrq1tBs3dX5BoAkhkTJNabJy2yQ1hAhGGFV8L226i2YikYysNEbAEyy5DyEj983j7eY",
  "key23": "5gjVbqAn7SLAF8Lq3dv7AsCWMgTZUj9uCGasgTL7xmpTnKxLuguwcLQQnYQePY3TTXe5JRz4SfqCSyymw2aZ4EJv",
  "key24": "SshVuXPQfkcrpttBqxaucFahGnsJcEucr367MN7RetyB2qWai5FDjb1zdbpzc7cnHEvoDnf1F8URRo9zoo2nBbj",
  "key25": "2LfEvzd2KT2Ta1bZHzGfMcPgjZu7UrG8t7ydHhYtPz8xuM6tQqSnfssWRxbNdo6ajV3ihrGtSJeKymxe5pbFH3M5",
  "key26": "2VDr5TghPrGrPSbwxshBVU6uakSfVV28fYWdaRacRnnBeAxZbzwMYFxg4cymuQRp4W9AZxC6c51jakWhyo4mEiW3",
  "key27": "3LzMs6DKMwZjR8KoH4pMLsRHS4JXVKxMmWVRpBwV5jDAH79gkZAJT3oQh27stztu7RVkvoNbWrU2i9DcesRKFd7A",
  "key28": "5VutPA7J7HAgMuKHywkVzBfireA4MCnKZjeqdgrxDrX2H7WSMqNGLJuDYJYYj3cjztzzNMNiwvUYcm9adqpbihJ3",
  "key29": "3bgVcfL9SttCusRbbe83T4sugjWrfxHaD88iuYQfzVQ2bgXWNDuJfzAWqSqaBxEs7kWgoCTon27sFfHoWP4PG68U",
  "key30": "3KeYkh1ZeBjTDLfWxyT3bi4aRqMwxgZ6fdqTYRkb9bDuxHZdNCAtrNnNHFY1TnWGvCJBgaX2cErorrgjThJmZusE",
  "key31": "CKiEUSUk5CVKMGfgnUmWuozWL7bfUKt14NRMYfHWctsZdq3aEWZoMu17rRz2PPW53gd1WtKjpzi3x2qfb4jrAt5"
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
