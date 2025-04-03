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
    "5T166adHjsbgeEoYqnWThN3fiKPq1ZbmNdh1zJqZ5sSKmtdyRoRBNgrAQsDdCbQrae7d3iuhjJZGZjk4LA1XdHJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BThNyzfPeorpvYv1aDdcaeWmzccXWymAM4y5nMp5LEAGnMGaUjKYfVa2rk2hhkcBq4ak2ZJB8U562JG4stRoriU",
  "key1": "LZQnHaDbRgw6CtBTSL9Q5YPUCafsvGwz678AixeqKvopKXqEiNUQigt1HihbPFjxoS1JUzFqkQKziiaZq9qUxNR",
  "key2": "44kmtPgQNmrqYFGV8Gg64rWp3RqrUpPcEBP7Q3J3w5g6rkWNVEx4ffevXsmrrUL5B2iVRNMKtVfF9FcYv2dnd7Lc",
  "key3": "4fC66ArFLnpoqkb9VAovM1GHEJgLNt1cFasL2sZ4jcAyY7KUx3BY9WgqKgznY7ct9fukhGtnZT2q1npZr4My9av9",
  "key4": "eEoB1QVVuZAKv3tZuA6Zm1a6G6amuSQ5TCJXKrRnThHy4dycHFoono1mz2jqp9rrEDcCgeh4gKmY2dVDWRGHbaZ",
  "key5": "4u3PgBeQk2GGvuGVdJpaL66fat1bZGENdG3Lp58YCLcJV9phuQMg7b9xtdnre1eY7pkSbqiQ2dJ9WkysE9Z6j8iq",
  "key6": "ts7qy4n9DEA5zCjXQ2g72mAPhGboebCvmwXGjt6eaZXMthd1t2nXkHB62MTNM49qmEKvdddCDfqdpgjCj4yEiqg",
  "key7": "3x7Q8kZV4m8tX3H7CfYsvqT9waTR2x3tzvHtWRy1q8vttTmhfD3sBrLx8bvZvVeo8qCjnmQyR11csjZoo4KmYuzV",
  "key8": "5VzeUxTNT2HRLR1YM2PNnBcmjgTjVJVrqVxoXgJNnNk4jj6VMhm76wzgFcQRVFCt8ZnTyUfBsCeb9XmpTPtiUccH",
  "key9": "5FFvCAtgk72iyUPzSwJc3hAWsUX71fKs6nnpSsUazF87FRk92rcKshJ9R3L2oDZRxTcvUkwrcmhqouPcF5eEKhr",
  "key10": "5ddjE5LGtbCHH7E2QRAS9MvEyUaFjjKwGiTJXVkxHr3JZxyJUJ4nYpBzbh45rwTSETh2r1LTvvfuGtEzePJiK1Lx",
  "key11": "5BduAreXDjyKbb8GM3M5d8HT1aWJXXjpcgJfUnJeAN3nseh4vD9r9TmwpKftKHKVMs3r6EM7jg5iffnUN1zxQ1ro",
  "key12": "5PF8xsknqqHDdTCX5kQYRYPYxvspzJdHRRCyS7541zX48W7EF76TrTtQa5fGiHwjuf87CMu3r8MWzUuEG9Qb9tzK",
  "key13": "2CP85L4hHQ1ukG9D4joBGhLcQTeBRHUAyRFEHpQ1HR1r9JNmy6SYu3bztMWLQTucdEvxhQaS5uMizjMFnFATX6bA",
  "key14": "2ZEJuApo2QiMswRbomeRt52i92akJCyUyjg21CdywQPpiZ8yMBhULYxNbK1w5UiwcnoB1p33r2yjB4kyYd8wxrsF",
  "key15": "2rWomJoBbgteCDZYmiDHbgoiaNKyp5vsAoUjrYNYZv8LAW2Vx2k24pC6JXamiyjEHnSwPnPQfozQkokAeqnDnodu",
  "key16": "38DeWVVMMJ8pMKhcWmDFVtaNV1RZGEEyp8wsTqBvARDgehytyKZZZxPoouNqvjGcy2522nr1bUVrxFPeEDYA8axT",
  "key17": "2kYHEPRTdaYTLebYAnRnxQcEoqyvQBEr8cfS8mVftVbyYCHqXSSKvxn6GeZ6V31KyTgFsmDEukabuhyvG1HGUXo5",
  "key18": "4ztSXM8Wrcnia1MDvzcC5KBeBib5nrKWwc6CwBaZmahwh2YfynAfq68D3wT6EzFJDYmkaxkPcLXqWtBuBzg974Eq",
  "key19": "4UAtN1dktrUXn4FtATkkVXfw8RjRbRVwAH5hDj2BJY2B76SdG1GyraXLMsyZUY4cYVfNmsujwAxQ3ezXFtXfPkjy",
  "key20": "9kUKz9srBAd4hHKE6imecKWuVtXVytJXn8WrrexZxzje4Qd4papLVGNNvgkWTJUSZSg5mhwkr4NPVhDJ2wBqFEg",
  "key21": "53obfiwZUHDHspiC8iWDjn8Ndh8NMiveaAfUFXPat4ypowEDvSC55EoAVLCb5gMm9Egd7kU3jrTengmpABY6npVA",
  "key22": "3wsL15cXTmpVSMsb1Dpb4nXSSNiu5gt31NiiGvnBywD1mX7KovSGcUdGyZjQYsrCTRZj6pwVcVPe6WmUBZN16V4k",
  "key23": "4ZmJ5bn4vQZKPwf9UAz3E5i718fKkoSZHBbYQKKkKuL3kUTuwy2ieBBiU8gLq4Aj4MakmCouvd8YsqhDFc9XudTc",
  "key24": "5VwAdAAQdbGUZFbKfQqVWwA6v2cPB7RFG6V442UyakFLVups1ij67S2H2tm8DQypZLytnHpc3e83xSeYqUmSnUAS",
  "key25": "3WCRVcz7Rn9AeeiJY5vhtnNvKj46oZEnio2zebzn7UkN7ERCQmfeaoKAvFXjKk7dyxdpnQJW8W2ZE5BbugdwtbTn",
  "key26": "63dC3sRzKkaU4CaTYonGeS7ed3hPNV2RVUcYkTmaYaBzEkncndqcuo259PusV8qXCvdWf5kc9xemQHJr8iFgjyvk",
  "key27": "fGUmDf7E9yAPjZ8B7dZjcLYBBPdL1R5C6YQknV47bczwedaSQC8a8mpkmJ9qookKn8YRMag3LeeYT6eaDEdauQp",
  "key28": "4xasB5YrtFrgFTfee6Q4oioehrtmvvX5hC6ytP1zP4fnU5UuS4SzmVg2Pxt9gFGUbBZsDF9AiCjTp9YkKxgCg6iT",
  "key29": "65GCuCdABc6fHg2Xasw6k5pSFW8xmPfqTSfG6mUwKQWBhFZYBfjJ7X9EfGPt8hEfiEJx4Fit1fkfxjpentUSbz9a",
  "key30": "4mVjjbCTsm4pN5WRsGZjeHqx7bmAr45LoGohc6Eyei3anTNEemRgpkZ5vrVgcvFjcGjXxzRpm589Sji7nE6S2i2G",
  "key31": "2w2PnozaFgCu42vQrTu41dmLjorxYcYvm7yaqTiUnwJPVCy6ZF1XsLArMkn4EjUNhkqnZRxDZYagTyy7Ky9i6FNX",
  "key32": "2K7UWqKwAvMQQr2RVU7U7AZvwAZDJyXjijWX7BHqH8b6rFVMo9Dc9jLYEoaEVJDFoQjxkxwESg6Gx8j4DPJah2uG",
  "key33": "dyhVG66CmMWZnHk5q2Mgm5rxeqUfozekbu3oFYkznH6LPCNtkSunFRFsN5vD2FuaAPrDAWkHymUAV3xKJEKKgBs",
  "key34": "2hF9XajDkyZHB13FHBMwU6ohr9LUgGJCXvUUKBTeBLFqQhaMrtJKrNnGjBrnQkducZpxUVhRyxP5fo4ngWU5Z1FB",
  "key35": "3AXs6Yz2kLPHwmqDRyho9D7AiexxvnSEZfToqwiGteh9jqoWvZiAPD7ah8edKgHodb4iBtYgS1RMb2PRdqnpzKn4",
  "key36": "pBevu5tN8LTwALqUVRbtEEUaJS3dTcyXG6hwvkTK4veMmJ98omX3BKqkTKYHJccDvfAPwiMnTvaiQiis1fxraXP",
  "key37": "NZJW93mRq32fFNtWrfVCkSKDheq4f9JP3Dwc6tBNwA3f4LGja3uNLfPHcerwRK5rvN2wUb5Zom29wvayjFt2BCu",
  "key38": "3rmmWkQrx2pLu4Jwe6zXAgVxxQmbbwgNjg6842Z1vNSooH7Xq3yTUHcogwUuYNRGVY7XdGcuxfeDubj5WvWn8B51"
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
