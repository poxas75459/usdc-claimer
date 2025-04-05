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
    "22hKirDdQz8Njmc6zhNFu25q4SFGjGFyxc9gh76AhqLjoJmnxZjbKM12758LLecFFFbHXSz3dAK9x3WsGp6AB21y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjVdeDvByALTqtcnw3AQpigpkiZu3mZTXdDFNAg3W9vGmETT1roLnM2MqbePuGroRSShVML5u1TZGsKg5mYy5SB",
  "key1": "wtKqMZCYJvu6uQYaiVxMiagDW5wzHH9feBMW54gRwLJnM1XRvvXu4QuyWp5bMsY8cq9aDzthWJrgEnNMC3aAVm4",
  "key2": "3gwTrzUzPwMayLtkHMHP5sQjfdDYbcPMoDgovjWYV7CwKJGKgULCazE1JyPGFrpXfUTKemroHjPvKtcifdaHBLnC",
  "key3": "2Pb8zc49Nb1LzP8gBS3pBVwHzy1WpiktdjeGfh1kW7Prp5FjMRZDPZpPJjBwtBskE58yoiGdgV2JgBABwna1ApoP",
  "key4": "58QhHuyD5tTZhqUkNy6GEpLXc1q7q8GHcxpx2peJc4fP7rmsKGAwLFKBdaEQHfPbJYsygKYDJg81y5CvbqW9jCoz",
  "key5": "26mia5XYwTX5S1AqGUvATMkJdQ1neZE1ro7i3uG5SzfRbybzZqTHbrKYm6DLmVYKDJ9HUqGiDrfMxzQ7KfgznVPJ",
  "key6": "27wTvaXcf3zHq2VNFztb769gEgjVnjeUYa3B8VwxZCcas5auuyx3m6yDx6ezxsuVENioDbjZckZVH9YjTEfwAsYX",
  "key7": "3RwyK5HykMvCgjdMMKC53tbquAV1KaHyNYK5epYpunFRhobKzKetxdiBME11nw2zKFQLaBdqrMkADKX4acX3tM6i",
  "key8": "5wbcgCbjddzQt8yvDjcgEof2nZbLZ94ZcvWSiFtx25rtzu6vKJ2ZZBq9SHZUR1LCZfxg8ZWL5dMqjhTNYKTUPpSc",
  "key9": "5NHfJt8efVN7cyUjfTGdSqbqoGhf9WjTnNw29YVzZ39YquZpWBEBgosWYyFTv1QDTBbLSK677QSXgvwU4djTNC6P",
  "key10": "4kKid3JsPeANTDY9GzutwCwsLYuek7sJWzPxFsHYTH6XfYaAkLQtoH97HpQWpdESkijjoFpwUWSeMZUFQz2gGzak",
  "key11": "3ZjQgWEVPeJt1jcdS8FH8PvT9CJaciqWYUHhhw54XUei7hPMWpcxCrPTdfrhw5NtsXVdX4SaFsJp4EvyBq9HpBEL",
  "key12": "3ayo3VjiFWAgEH7wYyErR6fduYfcRJPxzMgTKVt5y1aJfZipdayEbjvugKASJXmdgcBE6HVAPT9MEvNFEmEXm8xU",
  "key13": "hZtU6Ywoe8LW58bnbYysu1jRF5RppMjh1SzhD1m2UQ3bBtCHoVJ1JCcXKJnfCpPASpGLq7iYnFDsTUBgahwKnzT",
  "key14": "3wdv2nbAGQTb3HVosxe8Li5558WkCWvf4pR44oAuoX6HZXm3Z94VvDpQP9W2h11URgg6bqMfH762uNxoMUCCpgpu",
  "key15": "QANhhKZJQGq5DVjTocv8iRzoVwUZExENT34DWtzLfhQkovoPgCaahgWxMuUd8TbeEhGf82sN3C5hsWrJ9Twf1rP",
  "key16": "2oyubn9AVj144GjZrXPMyfe645DbjbujzRWshjobN9jp4cyBdC2GpfbPEg5Pcg8gjKBbtH3mR12cCPQv9BUuJ6AW",
  "key17": "4sjmhWy94Sx4irqoSyLyZXwwjQXx6QMcrHX8XxL8qc5TMWtn4XCy2wTD25rsJ3VU6pMdC8d57U5xH2P2YB8bzDEi",
  "key18": "2xci4MmxjRuRfomPqw3Jkb5Wes2aquDRCpapkmTvg8Ud77mgnh43h7cj1DYJAUhoVcaKQtSAQSqjxrUr4MHuNYY1",
  "key19": "4ywKMaozAccndWxBRgMKShkokhyCFunT34WAetsiFWiQe8iEHZX7qNcuqKBh1QGZ98PDj6AxeQcwJfPZgDMGtNC7",
  "key20": "HRj8fgwDjmUpPjdo9wps4eRM3PkbMK1gydfWqsWqYbsayfGnDuSev431mM1d1s81z8Xqot6Pin8ob7TebLrNWcw",
  "key21": "53bX22iX8U3bCrsr7U5BKr2YmkTCEuysxx7vnovpkAKYBxqnLCohBEs1fvy6d2KuK223kNZoM2nHfUovec9SEpr7",
  "key22": "nvwa6fHxCZGq3aJa8RGCX1EfReAWi49P3Z9ygP41t8iAzh68rCuE26qHvvGQ4saurWdtBKcub81epVFHoTM1Tqa",
  "key23": "YUtGD93dXiWuh3nkzbN7i4MTRiLAYWDN4BcrtHrnB84M8m2Emyz5gVjLw3qoFr8jEvovyo3eznE7zNQ3L3dmLUm",
  "key24": "4yABxdYoMt7uHTnpq7aFwtXtfboUPg1Gbf7ao8s7qRw4xQSBZtY1jTEQNRAN8NnXh7LXHZcNiaN5DRosMQSkaRQz",
  "key25": "291MhRQRNGaHFqwZHz9YhbwoxamrwHCFJCL7ehsURko6YSFLyMzoF19FX8jogmaR9LT9zVT11nay4kVZdNaoKUep",
  "key26": "4ohdJNzLmRFZWqPQAabgfsXYGj77dS5GW7QvBGj7FGZBqzyYXTUYTEPjadCgtg5ujrGCx6aAw3ynqZVY4BACVmZr",
  "key27": "r7HGing65WmpSH6g8hKFMvqtdSqbT26WFmEe5eMVSo8wsByqdd95t3nP5VoCW5BMLdcGeKSwjbUtLefogVLMWVe",
  "key28": "5KK8upf1ZpghrNfjqasjAsRCD2jykYV9o6rVa4Y8d7ymh7VuzWR9Cwkhfj7AKNdHyvmdzUptFxp7Xx2KxF76KJeR",
  "key29": "4dc17yfWr1E7pXYJdLiLwkoLF1fqVVYjxpR1rUhQdtgwamDveNjqbEzFwQufZAzDbtQqc1fy5NFkpiqognHocqi2",
  "key30": "5yqF7L9RVCXrWMWTwUzs7hwstN83BVpJpY1pN5Mbxwr4Q9Y8idjTe45doiFHfrUE2QLPmCy8u9xrhVF9w9AqYqo9",
  "key31": "5BVPqQAP24muCYLwVhDBN6NDGA9WkxrSXf9TFpvRes4xvShzWE6YGWLTxoXS6mYxrJsjZmrP8KzzvpJrNY1ag9by",
  "key32": "57V4DTAkoKJbp8MWwqQmUAVKCpKkMfRpfjCSkH6DsL9qP575ytywKipfxMp8m7qyB92gykZAt1dvmXxGuL7pUUBT",
  "key33": "82SqT1HMs8jEtizkbYRXSEzdyPVPxHcX1DMYq4dg1rucSjgtyjnmn8zvD7zC1RLa4ktLq1aX3iNsqsg11RNCT5i",
  "key34": "2brksWYzRWDptZ9zG7YwTxmbftMgGbyphD3PosT89QzKDY417PkpxLd4khTSLqnBi4aLurJpPBGuPStHhFKP7sCK",
  "key35": "4rQ9yjUmVcSHEfHywb9kFM6kczZJkA7Q4kBgkE9HM5cn5HxzvSj1Bw1EBp5NMp4Ypu9QZ3jKwayhzshujp7nmBgH",
  "key36": "4vAyVbf2oJXPKs4pcsFyoNXKhDHPyFagV76YNqJrqXYqUbzeLai9VH6yUw2JWoK5BT2np7H3rzqdXgsCNLyvzvUG"
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
