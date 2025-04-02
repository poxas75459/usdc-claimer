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
    "5QjFwpFyzM5Ysxrx8M4ezsEfdmxioVaVmFxeorXKR8gh58JfGVQqEDWkpbdUf1xx6EFJJwBHRvLDJVcEWGzp4Ecy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KfeUMfNed39bvVvubjn8wGvQkGCxEQabwc4MyfQpbaKNrR9bfmPZ7PUWDkd4L4UArrvTR7bBK19764ChYyuBiHu",
  "key1": "3HDF9KQ7ZWjNetYh68S15vMzpvwt77WcobkdhRZNjVnzwspFMdNH6pQwcPmex8Utr4GV5Ce2Eg5qmZ3Q58U4bwcQ",
  "key2": "4H8V8EN7fRUz6rNmMobyKw6W6cMnqeySq4ktP5eygFG3dLQqDVyVNpcMvdxbtnshjsnFZE4MAcM9idwEKmBgkhcP",
  "key3": "5sq6uoCWQnpSrhSmDDE3GQXt3Zb3GH4TQhAwo4VHXaHBVRgMcw1hbDAB92ihLK6bJ5gK2XBR2F2e27Kx3bb2g1UH",
  "key4": "4eNQMxtSSVGSFETKuEVyzYWac3s3eQV6oJUCLXgwDgZDXVnmynNiZn6v3ef6t3haGnEhboUXt7f1tNH9a12oK8kB",
  "key5": "2Ct7mrxoc6PYpMKKfrpVRYRnVALYEtwPRv2HqshKKMggxhPizSAsQMRDrJw1nArFf3VmYd16nibjLpzZTgrNTFy5",
  "key6": "Nf4UZJFb6h3556xS1n4h42BMuDwGTZNfWwGebRtkt7dTZAtx2XxySQhfeSRhaskZNHpBDsYJssvThtegLSjreZM",
  "key7": "44SMVkg4zyoaoLPBEXZhWMjWr5gh656VZr6n7EBT3CyjLH9NCg2Qdhic91urgsGvzyVYiCgmff6kbkHEuM3m9JQu",
  "key8": "2Y9dREye1bmchWpfs2vbLTWjtq1m2Jr9XGiFWQbzYr1KJCukMRh7BHuaY84ggtvVqoHjFYGwfrT7wqo3hUzRtkM9",
  "key9": "EWyewaaNxUqPp4hV7kn8QBFogiiFBzNuBWNxvBs4FLAaoeFdhSqNMMpYxXa1qs3PgNx5PakenhTozxL8n7C1pRi",
  "key10": "5bzwEyceZWgihTbV2rTqyW85NNQdzq3y47kDBTnRdYV2oVRsMLAHgvTkHQibk7pxenhnVbvTSmQNMjFU4GyrhUic",
  "key11": "5k8YNj8mc2UpmhKDmmhgrWMJYhu6pbDFLvPt4csArT66cTAqd7BuHNEP36QpGRkieZWgsPNK4oM5Po8Kqo8KaMQx",
  "key12": "36HtDbZRpNN3tA4HJNdPxFAnUP6zYvxR1oLeYicdKs4AKDPB7x6HosQeJZQ4ChR355fTWWaum1jbcTEV7jZFrJLc",
  "key13": "3MjrtqJYAr4hEY3aZeh79K8oVvT9kGbzi53a2YtfRnyqLSg6ZCNu7edo1eX9UWcNY3uiCbsw8HhDvM6MLd2tsj2V",
  "key14": "K1r7qMkdmm4HWYvjPYTqxwVq15ekCXQS3LuTmX9k3BLNvVXa72BvnW6HEZJrRnk2c8CfeJ67Cowfngd2FkK6wQQ",
  "key15": "2iokNMN9Ram5bkkievnQiQKspaV7HT3BCuvKYVrjp79kxqXNVDukDt75gamcFzLuDUsjeGraXNfW7Bm1r1meVaix",
  "key16": "4W8UVr4GB3qSEMmz1sBVvzMxoJsLW6JRXm3645hirRs7C5SDeShwxJGn7D7JDKZPqhP1D47QrtvZQVgEtAfkXwUD",
  "key17": "3McRXZPBHCsqDbkGrcovnaCdzmFVWpBixjbnQTttVtDL4jPi3wvFL3GUDd5nEn7kL1gcCLFvQY6sEwP42XifBmJH",
  "key18": "3VcM8zinY8utkucKE395MACFhvNS4XFfGZVEZrQny2utWWe48rMvi3N4UWw3h5VSHJaL2NB56NNPYxvnMr49FWdC",
  "key19": "592hWKni2tJAKUtAe9YVWk9Rzx3hQ4kLgy8w4GtbUfrMhwJ8ctPsqkF8H5GmuZDjVrK9h52c3z9s4s9WSWuvHWRc",
  "key20": "3Jq5kjg5BXkMcvtAyRNZMfjVhYJ3zQodHtfmztoKBxWB8C7bPzubBzwfTX6VjJAYeKvT3YFNTt9VH7rjrX35HGG6",
  "key21": "4Q8KjRG2dJCuGRNt1vWZCf4pUdrdWKdGde1S1YN7AtK4NQPUunkp76vikXLUdiEVtW9AXqVNtLNEpn9cyDJU6oyw",
  "key22": "4ZWAZi81vvyMKNRRDX1WUooPf6nHi523gVJM7v49cbeSeHvqTFBXEkiUVd6F8msiqyGNSbcKDX7oARPSvVAbYCdp",
  "key23": "42iBwCrYhYw1wgJ6NGaGxizRaifujkzdiywfcU8XLEpovTQCQKvxX5o32Vtee1nSijVpBKuqkyudoXWjSy2o8RjT",
  "key24": "5xBYCXUp3RTjjFpXvjxiPZxwx1ZJgLWZH2rdY41g1L1XtDkoLG42sMbScUg9GARakZC3TzRdC7k7gQXq3WtpVftk",
  "key25": "5E7ejwVcyRzmT89m9hD16zdTnAnZSZWfFwytA53peTnRBRLkWTCQ2aHKA2kBLvArcP5zRF4MM1q9Cp4cpxA8fmtG",
  "key26": "23Y1iZyFhqCjoiLdB5Ti37QdVaduB6xT1pq17MN6GhR7aqmi4GmqJywjG8X5KzR5xpMQsSuEu4WSu3bb6v1S9EpU",
  "key27": "3hms63vQZpu6GvC17qBtneGpKAFF8n1EiVRBCrGPVcLCPrjAjD6XtLdEX7Z7RnG5KCaZyNgjmFFUvcri26rkqQFo",
  "key28": "2xpNVFxmGbLytzi5YL4DzuAqPPhrbPUeKbHUp6fcY9RoNPPfEwZteHTR9rx6SZ2SNARoMWddcuHzAGAERAu1EQ6m",
  "key29": "3vPSV4x9gr5kNPNaeBeAmLLiJursAqXUcNSnvbPTj9u6Q3i9rj23WrrTfNg9Dh2LiW78QrE788CxH3qJw3CjTPXC",
  "key30": "2kTpJ3Mbcrtw7SxEF3ygywQvJhwSNJSNbjSBDsxRgMkp1F9ae7AGMxcRTb3vHd4sr1hwbdCTnGtxz9doUGLzb3n3",
  "key31": "5Z19NXRshJaunaZgthbP6BHUGmcQtswp73F5GQM3F1nKLiS9oqF9HrQuX2vzM71CyfqaUbjBxcSHQY73bYgH7CPo",
  "key32": "4QkCSd1b9L2UuVUYYEpV4WxN4BuiaEu31Ca8C2tgKdZoJYkCAcYmkksfNzW6SCTA7pcEL4nhsrNVcwRGQQX2tNs9",
  "key33": "4HcwGqsaxVaZNi86ojgPuR9GsyJMwQCRtxay1koZ2cjQgMnXkaNUubZKaAFaHgFsboLXUcaiZSCYXoJEjG3xWo9x",
  "key34": "5Ds3P6PBkZCiHXvM1Cu3Vaw9uV8sXU7Mipj5tRaB4ND6ousxfRN7CmCphVQFixtmgs8giUgvXTJRi63PKcr1gXe6",
  "key35": "3LffoyMVJT6m3Gn2FbV2t7Msu46mX4jC2yCUZUePJUfHckVYXuv5Y9gQnrBWRhQJKSc1uLdp5ZCmPYpaU9QtLpvA",
  "key36": "ZPY1DTqw9LGbc4c3mH89fQ7JxhD2uLzYTfnG1TQCNx9rAQCAeZjpvBdxMCJ5GYH1cZBa7Cepj8CfzASvTFGVvTX",
  "key37": "2g2WdhdaG95ZQPT2RmdKnWgPuyciCPZLyGoYA3yEg8Bnp95dyBMixrwBokwba9zmG3id18tffFfbYr3GENTtb75B",
  "key38": "2b9nAsZ19QJJWhDHpKbyYnocDVh7Z56jcCE92RG6uHGurC9pxLwFxQVgt8gywsLCbKJfPtsd3qsS7UWvMaAVeqz3",
  "key39": "4cWngtyNRiLbUTKZTz5yQCQZkZSmmMJomNmiNgXBHFwarhZYZrY3EAHy7XJcWzTaSxMSwWJEGrUDZcjWCduUFE9K",
  "key40": "2PAhsMQEVzWxedSSNKkQARFGGgD3YrapE91rKM8zxDh2CzbsiLtHxaTXhVxTc9yjiJa8QuCH3BALSzDEgH9qD631",
  "key41": "4xZaVz2D72ouqLYJHHcNYsbvStp3jCGPhYtFb1QxY1dvjBvqYon85ENyLv7LmHuyDKNwLxvNHmAAmKnsKJkmBzwd",
  "key42": "2AbUPNrUZarTJ3jfZuD5javNHM4FWDBz3EKLwAyjWPLfsLNZQiGmvbB2kf5uRwC3knVdiXAaKoCQJSaUEpP2shLy",
  "key43": "5EEBL5minny1dasGmouT7hUABwvWWwHeo36aumni8osXRsU7YeyJBCe9oyU2WpxSYgZuMUvo9A8cqZ4821H2bBpX"
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
