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
    "e2tzEDdQgddPQqobEiMnEV51dcRaHK2L33NkCwN4CSaRxbUD1XSRBCLqu4wBEPXsMLkKNQMXMdS6bSkQxrmpCGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPvn6Zng7upGMSJ4hDN5ELTo1Nh2q92vJPuGToqEpZJGuZvjBftiq3i4sefYHGzKDUjZRZcEytWM92o2mwYiw4y",
  "key1": "4Uj6dALtgsFDytJ1n5SRvCev4jd8T36negZ9ELVQPdbypw3EqQUyppo6uw9o4FL7QVnjaYTspiXHPNutXEDd53VW",
  "key2": "3ftwaqLXwqDHuPvkJTsDdbJ63pwg82kfDQ9DmKksH7KLZPxASQFV3wLSWCrqvrF2sZQtJFEAQtoorC6EnVUuUxgt",
  "key3": "4rANraimb5ayRdQLdTiWfetKXGHDHt4DfrQHJ3EVdzQPpqP6aqwAohKeCgJZGpKJojUcjgXxPFLuq9DSKezLFQPu",
  "key4": "4Yifmd1f98unBVWeVSJC6dg56Vs3ZAbUnG4SNU6xW7qos4DkqSxwtj7xvdGJp8gpvrFEaymwyX6oeLV6KJDiekPB",
  "key5": "4ZebihMo2ghg2h57jKu2sUQoLqQja4BKgGg6LhwaWG2EfP4mmMzDJiGuG8LtD9wLba372keQwXh2xu7WNP7Am8n6",
  "key6": "5HqcW6mQS7un6372MR38w11mZ7UHZkPoGDWQbwydurLKr2WY1AjmexVyBnvRrUQcZGvDNak5VUC8n1koVs8HzFUs",
  "key7": "X3G7SAWMSchuoDfhALV3zsC8PaYajhh8vS7NBfwULa4DtB63Vtk6KGRcJ4fGzUHhqRoz7vxeAvYuUhqwhovxsLk",
  "key8": "5KmREwvLtpk2P35rjnPQ3iS76HSzrM7WqPGaYGE6aGMgQB377iA2MEyVTYrdHkwMx34UvjyUeoWNxjCZnh8ne1Gp",
  "key9": "2qD6yao5gdny3kfKLx1ngiiLkjfRNo2CCmoo3tbgsc6bN4MQoKr5gSYCE1JFaGd9sPFhHzvnLMLCpjmqVRAQwxzB",
  "key10": "2mBpxL3BKTrqz4nbQ8N5D3kkqhataT3sGcaiu2Wak2SUbzsskpAB2TxELZMfkimZSsnoCzd3nGRkL8ZgZY8Hpewt",
  "key11": "2DRC5P7qeLqiAqy1nrcpnXyjVe3vReZkpSv5Vo38v1jJdAPsbobeXe28he1eDNAoTXKERHqjzV4Mxcw2QgWEF9bh",
  "key12": "5gdeeqTWEDf2MMhc4CD2DqDBNDGvrjxN5k2oSTq4C7LhvsqxKQyDo5GxKc4gsqAownnbbPjBHeD5eRYpHbmwoKcq",
  "key13": "2KmbRZJJvR9MMsvVMWdkawN81yxQrDhpmTgqX1Y3P7nutMr8mpQEoFjYzWmD3TxEPDmgC3ca7Gb3Fu89UJXtWgR5",
  "key14": "3QDLJJLVbjGNWqfZDAe9FzwAFKoV3W4oz46pDZLN3GYrpnc28SzdGkahSrhxtPigsVRe3Jvtma9SpedDhMYthnHY",
  "key15": "39WgZcBFxuVaKfRPodDekHPmMC4hWV1VCFCFyGnrWyEEnhkym2CvvcsTArF2rwqeeXxbPAyPDkpUrLJr2YUnxisF",
  "key16": "svf6moofpUxDQHuBXpi5QWsZHr7yvqCos2oEtjkmHWRxZb6PqVDHGa62GfrmN6EkpMbV7U9eKr9UstX34MeUGa2",
  "key17": "66cn8ocDZzczkJ1448nc4amjmwn3HPi3PgseGMrqypg7gUYLNLPBfPhhF6AN9cMVX5G8wWD28BtJFmmHiHzmb5Pn",
  "key18": "2AoLGSn23G3YfMn8hNc1q9Fyb3ocwyHoDU9QjfsDiAB3797qxzbLfhccFbp1LUAgdLkJVkrsdi5zFqawqJBuiGeL",
  "key19": "48MpTFZD34Rs1R8FZTgu872Pg9jgW2Q7HLQRBG2qMnNWD5qJtZGvPHtP3wpB5DmmcKBK65q9UaZjsvG4TDqseDfL",
  "key20": "B741JXq5uijQXyywMwLHG2SwNruSCdVH7YBXgB8VAEnGMVoJ9vyCsLrFckKNGZ4vwtEmpzya9hfnetHrYqaCDZF",
  "key21": "5vfM9ZdaGuoyMDw4469qESvYT1oiMbMxxesPHFoaVKDMhoPNKUULar8VK7A3MQ5Ytrf7B8ZoGYPcv1e4bY8yGHGA",
  "key22": "fe9G5ZaxArDu1BHT4riyLXfu3UWnEvmwE5rPERhWTt52ukMdTVYYorE252rsMiRhGniKG7bmcTCgCv6QXnJi78H",
  "key23": "4ast4czfztXMDpdg7MHgvYVQqgQ4AmXAZGbZbqjtCpSs1Qa6iiH6KsdEL3BmYKWMcBHtK8WTXRQ4FQnRT8tmu3A2",
  "key24": "QMopQNwnA7hr9Rj6R3a6NtMNKpLYpGVjCCSUiYWA4xey1gfENBa4sppvXyPHopr8KizifYo32E8pzUz86uToiVR",
  "key25": "5eX6NmpxrBi7XGhB7Ku3d6QxP53g9sEi9ng8JXS2qMcQMHEsf4bSaTXUnxq82CtKL9GpLUjPZTHzEEnTJ2ZscHXJ",
  "key26": "2Qmt9Ma5v2PsmmwHFhJLbaQtbXm6sCa4VxSApPso6EErwcWqvCnCzTPieiPTZco2WShQx4i1py6HDyRv9gXm2SaS",
  "key27": "4HSkNAzt3p4sPDMYYbeftWnTXU6LJCsiSGtwqMeHtiK8RTH7kzgAZW7YrHQPEoJY7MRNQjMNnnmXKrpy2fj2YN55"
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
