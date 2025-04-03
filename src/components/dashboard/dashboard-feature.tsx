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
    "4nr5LXsZdxcPb6VB7s8GXTpjLU1BpaRfdFKdumyvs6W4vyH9tConU2vWon6rkWMMUvnev4tzCZAQJw8pybsxWHqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37v73etJYe6FuxAsTvEMo1X2wnMubTVH32MZpwxNSVsVtMfNyurzTpWGgnrtxajzQcrff36WwJoXiJf23qqwAPXm",
  "key1": "2ejE8cN6WXpDC2JmBU22qv1167ubviDCyDE4CxEYaawrV4vZS62LhFzAif35zz66NE3zmDBMhfGAiFxcvzhdMyZP",
  "key2": "3B1UaJ53ZawpRqJVgwECjzPie8oFP76dYqmHzAWcxGuqwmgsP3dYnTzTHQJHc7C1B6vVRbrBrGVXxbnSU3ZagWig",
  "key3": "58ZMkVFaCc7hEucV2ExF1eooAdqDrMut726YivaSza7MjJjZPcYdR1CGVAwM2V1db9miSo5vxTyRgTCwLuKyWHUP",
  "key4": "4wThm9jSUTj7FuzQkgzhMekdg3ri8EsYmxajVBuxsXLVsCNffZgJuRh43wTSGmzoYRCauN35SnYqEerigZX8n62P",
  "key5": "4ShpB5JjWV315D3PCxUSyifrmJsw1abxuMAWt3pQTt94z9x2jvScfWF3XZD46VRDmLQ8n5cvCWVC5ZoGyFbTG7Ay",
  "key6": "Z69JuzU9e2hLWhxwqVMzLdwTwpqUKMv39pXfZUPJaC2N8Dj1vNAdaVukWZA37qHYtk1UNPKCuwAfYXGZNN33fnM",
  "key7": "5yTRr6aujf58VwGxVLzr5hBz7ZWFEPiNVoGdWJjfXyN3vQbiX7RqKkFrbecWrYrpS8AB9ugFdvSNtxhCNrXrdv6U",
  "key8": "V8guc5qVAoFn8LQu96YJdMc6u8bkZTyyzJ4Yx3YsKhGUXCBLyd522NuA8VrCnG4whBcxHM9ZChwzLe7sDpAhX1G",
  "key9": "51Qz8B7zF85tfC9SiaWS5cuoeLMadLcwmTBQcjQQHpZr7XcNtuD29yM9ZV6q5HwU3Tx446VZYxkem8vmGjZkcfBh",
  "key10": "cZcwRxGNvZZHjL4o8jqhgDugSg5EtHBzjqCseehyeaNsveETopeeLhXkfSXktWkZwrCVvDaE2PSXE6DrikSvNAK",
  "key11": "5XiKvYxg8jQqmFXiqqywANkPoGMaGW3KQnDVMGPYxKujbKY6LgmJAacSSzUPqHmrMhWX3qJQ9Exv1b5tjiRcPXtY",
  "key12": "5Q8kMp4N5HSEZCi1wzdimVEqWvrKtEfsdWWmT3VY9edo7Ps3rYuZsTCHqG5rzC9gGeG9wH2zfWRA323Q9UemrBic",
  "key13": "37QVhAuvi6tM5b9nWQHxGdBv6Y5zkV7a5oSfSTnH44hCm64cM1WzHuGbwcUN7sXU7n4ENy1emL7EUyD2UyYU1bkK",
  "key14": "5i4d63h4ruxPHiimwdrDS98NFQvU5yzRd1SKZLQRR2mL9rjmWmqsMRCBGBY9t5WfodhHBSjJ5Phw47Wp8guNCSVz",
  "key15": "2f7dbAn8qcKuL2sHPo98Dkx5v22CeSxbYZsyQfRQr4ouFCeacBvn8By8uAAiecUf47yjCu11D8wuKiA437HN139E",
  "key16": "LdrS2ZqKNRNVkz2vK1PMNLT5dTnEGRBzbNeznBVz6aMD6cKPRkwmxwesJ17YBiTYbHtK6fWtUQ84TQUdzFVTS85",
  "key17": "s9thKq7gSpm4fJhkm497mrMGRRpeNTMyurCgsMRfkwoaotpZgjo6nqTuFGcaUMSqogspWrfwt1BgesgRz2fzo6Q",
  "key18": "63U1YXD1b1PQtoQ3h2cpCbzQ2UFCGkuuKWp8vpjFeF1cgJg7j2mr2gYjD6RXRyB9KtC8UdbNGdSmNodoYjvv433u",
  "key19": "5VaoZJjAYDi3QqUAXLncyfJmM2RPtQ7pX4Ej6RCa1S876iWqchjpVEJErMbp4K7xhURQSkbfKsLRZ2EUiJ9CV8xa",
  "key20": "3ARvkPrRHbNeo16r2KajTMwpetzFoBtaMYrMU1d2WgrynYgPVBR3AMyCCb9Yq8J2QvEbzGw6XQjNM6JPB2JNXCX",
  "key21": "5wufR2pigR2T994fo68tMNrANsDDJEVXmpgiMTJ9HoGoF7LFdVN36xdjS6Aw8iu5CBben4EM6JDPESVZ3hjJebgr",
  "key22": "ff2RANxGyo5arLxG6ADz3k47R4ZWa7PiiATRyrYfJwVbLmFrqtFp6JthHrGkS9ehciGga8ezB4c4s5sE7L1WfMM",
  "key23": "4YbvTzwzT9qqs4uHYrQptPGh8zyKMjWHaE16ueuPQbyNPmGtwVyBJFhF7ANn17YtkLgkADCnuYgMRKX57hfbb3B3",
  "key24": "4Tm8VT1Qvou2YH1k7UtEqSq8Ztoh1gJJ9QFvkme8ZMR2YSvXUjnnaJbstrurznpJLb7j5Y95oCHX9baxSgwgefaN",
  "key25": "64A42TaPY7XRrTmBLqpr4fAgEG8HMC6ZCuQiAtf6zLvPGkgnVfgNyaoKR354dhk7yfK7UWekYgdyedfSsadBPjxi",
  "key26": "42EbxdEUcZcWey7v5JciYEjfvKikqaytsJGiMp9bSq9yXJomee9RtXiZQbhXSHMUcNKSsGJVke6K8WWwY3V8ntoU",
  "key27": "47WNATBoboLhaGGxb4f4kx2k3zqArYQc7bEb5R4BQ3SeTNdUytZiRH4uU7UfYg4pNrCfFTjd1Y4SbE4h56SVNNP1",
  "key28": "3w4ktHuWJLWv8hBRaSu6zkmMQQkG9TB6byWAh87NrAqRWwZeERJRWNfoAqw2jU75wJ3djULL3LystEAvUhCseEMM",
  "key29": "3tCvfdHhHMyXu4yq2kkX2iq2Ko269beViZVRjpNCaa8MSRzG2NrW4CWX9aC4DiUuLJv4i4wuYFFU1L972oaAskBa",
  "key30": "oJdPgyToYXTGvoQzFqWGTLCxeKp2njRQYYpJsCwGE3Lay6Jtsa2c7pJbpmcRrn6e4eDPMiY34zFu2JTVGw7WD1b",
  "key31": "3WyJGduGPjiUT3Tc88WTHi5kwo7JrYWPhbk8EiLA2uPiinzybpRS4aJymF2tSoswfCngpoQY7awgoWLo6rnTDx7X",
  "key32": "U3h9QUfjCNNBNnDXwetzZMMbSugqpU4daqLW19gtmrra48GmVrm5BcxYy9Cqb5gE6a1qqCK5TGft3skh9zqY8cN",
  "key33": "djrcFCtS3Ad5nMGV1HMWtrCnLyzAaef1CJyCUD218YtuhYotzvGLkmGLkkgXgpT3LQGJrBvd4XwbHGBAM12TPrH",
  "key34": "27UgU4s1q9xabmvfScXzjtAAFuq9FMPiPonN4R5WYMMRCsw69pqXfjH8KwZguTd6uxcfLn16xuYV8cgRDKRa7Y4s"
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
