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
    "5thS7itgM6FoCSYBGNp9LCRUEHkGLMJiW9TpDMew8nZkLeuGc2zm8EA1vSqsU9WywvKmYKeofVoubHsXZVQwgou5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqrTfqxtue9PCgzoFwnRhhKuTTZ1xzwgzcG8RxmicK4nqGgeWWXjhxBPFVAqXxRwAekqvG9APhohafH2ae5SARy",
  "key1": "2DGb4gWeZt34W7oA1aUqvaRNhMgyeNyp6gP97CQLLWs9QwU6ZxVf1tLhM9XejTDUEgUdKUpnqGSQ8Pnvvu4shujX",
  "key2": "63mbtH7NKoDRdsLcAu2GrYujqTLRFQPzaUZZQz4tQLFZRofe4XAf9mG2ExqopSvWUY4B6xsgh2nm5or3mwFPw2U1",
  "key3": "yjhFxKHak81fBpMjHZruzdUGRrm61KUpqKKwbSPT46p9CYxcw8FisV8ovXBY1bC4D1YX2aKP2pNQzmuGatQCrG3",
  "key4": "2BhGtkcyJqnfwRXyot9iSvyHv2cnDD9RTtbYS5882ap8vGxKcAkc29nWj9meXHZ5sfZmUg5Ug1j9YbxYNZzFnyh5",
  "key5": "4JCZhaZEhC3HdLorAj9jDXDq14Jd84VKPwNH2WGLM5CNvEi7vbgRX3jCi6DKLHGdthHEU714haw97CC7QhiwTYqt",
  "key6": "5JBCpqEBPuVvGn5hekZwDcmrZ8Y45xeKMC9YLQ9PRRPuWMFJFZQnpHfChcReNDEoCwQ4J47GaiNVhJC4DXZJrLUa",
  "key7": "3HPtYjaNCUpWR9HpiMrJSemzoMWm3LBt299rkRH1Us3qJMMUgstgg72QZstHQ3zNJ2Uomc8NAHZnR3SGvcB8fYwq",
  "key8": "2xg8GvnM2UjYNMhS2iJoBw2wfG8NKjnhgwF2RdSkz3gy9kEL6pC97vu8WMo1LETrahvQaxo1emxcmZdQ5ojULgMT",
  "key9": "2WG6WFdpgbG4dXsMhRCmfRwLWbP36QjSMEKy4P3UgJw5Uzx3KXb13RaFSfysXUVDApzKvgczFwMKqFBQUsQVnDrX",
  "key10": "2Xf5zhh76VhnJZNtZtPvMqep9GL6utzZTQDpf4CHbiZwkgMPuVRspNXyxpThyGNj9mQkq2JjMVJedwWvMyjvEgB8",
  "key11": "2f5HPqwradT3QnRg5Dh5CMGzJJWjidSj8oD9cSMppU4fF1Zo8WGXUMJow2jB7EtsbHeCPPReYGZwzXSn1i9PWBv5",
  "key12": "tLS4NWHxDdSMLLs6MBVza49LP1Jp2fu6QfVJksWWEKXfDiTza8TCXDJHDVmtKoQ1n6xUBZhF1iaVDBek9iJQWw7",
  "key13": "A3TsE94voGHSdWdTboPUafjz2qL56AgXd5cGqVhU5qRK8qxEpSRYMjYe8QLRaehEHVJAA7ZEey3D5iyURngb7K2",
  "key14": "3nDeMarZN9MGzBuVHf1XA74M2XaXGGFNQXzehDipCBSQXJptrqyspHQ7xTBv8ZmhTCbyE8nFHVBNSgP8G9sJfNcf",
  "key15": "3Mr2FSP6M2XZE5SwRJ2gwEUC4x1zoeoipQb9aK2KazRyFJLyDLfYs7Ad3iQ35GsokTkunpveL5g351mfc9eeYUuj",
  "key16": "2chvdWdmucD3QAA232aPGzEJVHjpSTvc9Xg33dcDRj7Uw7vWQe1DNWGaips8FjH4Ge2PBGeytHQ4sWj5PbZaVVyJ",
  "key17": "2r96DJn18ZUrdNTrLpM44v4P1uZg68iHLFKSW611pAor9erxXKDq1yzFmnEPJbxLWyiccQ9dMi3NM2VktvwEaMV5",
  "key18": "4syThaxsMDE9k7rhi22KjwmetAbJa1XfUcngBh6nG7C7kKVfqtdT3ubPPxrazBaAfNfvJzN7JUAJrwa1EJMzNrSG",
  "key19": "5SMyszfJKQNtngAdj6uZumrtXrcf8ievmnrpiQHobGnqWxZg4vteLpytdQxn5dWxvdX49cAD48dKugPuBLj28CWM",
  "key20": "3F3GK3sQbU4ASEL8dgZH1EYK4jMMJRHwaAMYqf4X5biqUwaWcdVd3q9QCtyLr29tRKqAbM87jKv9BLktfbTkC9HR",
  "key21": "ry7P8sXyENLuQh18YiiC56J7ercNjHXBU3BLG3dauExhof2zjYCMZ9WaDbxvBG5DnWZjGGyrbZjtnnys6aKCq65",
  "key22": "4njea1qGv4WvaJRwAZipLAdMTfP76HkaYVNdwYaC9pYEVoh3AeLVAYpLVh5XQsq6u7UXUWB14h31zthnYMs5wVyZ",
  "key23": "4nnST8VtKaM565a9r32wj8mo94CgDuzg2o1aK9vPL8iCr35nJnserRr9Z8DvcjjizAh9Hoee8uwTqvjwjKYpAHro",
  "key24": "4XdDU4m6uGVSB4YmwaeRhyPLaEXL6MTs2A7FPP9WAuQa3GTCyWem82iB8xdMaTNh3PHq5Lr23p4E927HVRDp6zpm",
  "key25": "4hmDvKQ77oL17pnvqqJjFFmC2rQEiW8E3rtPArEH7PkkLSYf9LJ8dVtQfnqbaL2Rz4UgdM4nANUMcGgnkTtzrXKe",
  "key26": "4HGC337S9M3h7CqD8gFJ2acLjzxwCtmd5TpNMsXL7DN52Try72a4QVJgmgewTiSvg9S7YKx5n3TZMPKyhP5vxijf",
  "key27": "5DKptLFYGW5WCovvaDQgD8NFkpwZMCUVFFdW9Py9nYScWixfcsgbowoZUVKg6bMPCq4HgyrqKDyTKLZXwp7YyCJh",
  "key28": "2snP8RKd77TiZFJW8SA5SLzhbMdufgojujWbxyij91pJuiWuT6CpYSMAeHz4m4AhVu6hJeWeFTJLGuk51eKHN94Z",
  "key29": "4KJrCK6Jw7jcHbSau96QuC7BikKiXn92sLStkcA8NoXK1KyrLjffVBCZ8B12m3ahc6xunQYS5BobTfjCxTuu4dBG",
  "key30": "5L8CQpNmwvyo3C52rdaaXMhcykTye73APX781c7r4sAN3Ud82d9N8HjHtA7ruEw4xFyxC7VVDDLkd9oicbDC6Cdg",
  "key31": "5TUSdZTpUFws5ePduZHeBgWvYvq6B4gMvco8jBa1MphpHNPywSVTYc65LvvuvJqKaCYnCLmXiZWWYEkZaC93WaS2",
  "key32": "4EBkfBn7VzFDGPJy9tzMpWkfrr4xE7Tjdc9C9WVffLALemraSqSkXckYtdKG4Kn4FMguYMxAPabWaVbjssWvL53R",
  "key33": "5gg9FHKm1EP7ntD3LjyV5KnSYoXHFawSRMD22uQqKKxfY3PJ5z3M7w6ghSdNXFSzSFK4HegwrW9zunbPDA5GfUHr"
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
