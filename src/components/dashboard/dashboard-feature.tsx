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
    "gX3x3WZZvrwA2BdDFNhwwKDpjxRsm5TQcUV6gGZCr8jedNXws1DfMP6xMjrLhGhNiq9MpfuoCSHzAHxiGSMbfMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mPj5VvLPqm1v7cN6JNM4VgrvPGzzHxeMsj76NBfF4GfE5NcwLu77N8XuQBqCxAPLT8aEgMUqMTvYiF3FvYhsH6F",
  "key1": "42ix7fRh2dXJiJ5nXrdmRZbRQrebNr9cvb99Rnzv8XLCraNW97XKvQ7cZw83uKsxBecfr4JNZkk4fnRjh1Ztonzo",
  "key2": "VgFXRpyENVD5qBqJv5vZwhCL8bzAZLi8FwEQXJV3Yu33T59bY5DUWE7FUVoZ5T19vTo4oT3ecnak9bMSyUmdX1C",
  "key3": "23ssPo8DAQaXyfXJDPnj9ha9ui9zPsLafEn2XfrrYF7qZ9FELtkut1R4qCJwXzX9qTiUxH6BuvagrytdZTP85XBe",
  "key4": "2GH48yt8kU8z5uKefNjCrTA7NeKTFDk5uRPjiUkSW8RzqkZNPan3Py5DXKkfZkFz537XtGTtYe5iTS4ET2fGepJw",
  "key5": "2bXBVe2vLMzJyFVcQBDNTvHznteveMgkkhg5H3st8puBj82JXSzECL35UqohscrA8CH8w8tJFToTaWmbdSU7wzbT",
  "key6": "2Q7iMm5HyqifUPKrQJ4jAyvzNwXfYJjnArsjmq7UopZ2TdNwMmvuq1jzcGGQDMDL1MHsJdxHMtz1mNw8eJ1smTP5",
  "key7": "3jaKL7o5FYpabDPSj74cEz8ikWkrygTbfPZj8EKpkoA7y9rQVR23MwAUjqto2RSQ8bf2deBJe8REvyfkGJ6Z3t58",
  "key8": "1VwxQ3oqAvqZ5q8by3q5z87AU6hFvhbz6fPj9vcgzXdVWNLVv53mWDe9rH5DWy5ZhPfuSSx1SQCVDquJakRHKS7",
  "key9": "2XLXgUP8Yv2ry4ThhTLUTe1EcUnvLKyftaeJvmbf1823mFq5JS55AEKNkD3Xs76kLHnjKdRxtLUMyW6Fp9VLFWKs",
  "key10": "5D8uYw1qPEaC4oXBVYiUJMAmL6fxgtbtfSDHxMVRcci26Dz4sxArGNvnXqoDnDJYgQj2LtWmipqwSHvbwReiyspD",
  "key11": "4vXQ7hgSPoV4W3L6vboSH8S2xvkmvqCEJqNGw8P33v4SajMPH5JHTB2qTmFT1stTSffVjT4VQNCdm3xMMgW1f8kF",
  "key12": "4JAQ6bjDG5KuDB9Q8A1wnMvqrY72EpkQEhbtbmxAYdSwKS1E1rM6w56G9PSReWV5CsKJEN4A1FrknSQ8Phbzs1hG",
  "key13": "56uTWmU4pdJZ8286oY4eHTrtNHF4iRWsNkCPUmfL8rfFHBbUh455doe1NWDeUwzZmQSUmyXyVD13GTSMwvzfEV3u",
  "key14": "2kkwWwK55Li5rr5AMZf113t6gdtdwCu34GLEVLydtsEkf5dcXrFiCoBLznCy4kdPTR5zdvsYcXVvuewv3GAgYVoW",
  "key15": "3bEQRk1uEjjotBa1pk6eAYjLyEkrJuhDrzX32DRmZCYpb7yRSnvLGpUTsQUVZSNwuimtajWqCTKBJHvB66wB13Zc",
  "key16": "5VsxFXZRVK1Jfiuuf9qRhhDU5RXpq1J5aiQcTaR3UvRkDkqxCmuFgmHjRY8qbTKqEkbsDcSzzDrAr9T9BwDUcSM5",
  "key17": "4uXpnCZjbpBTcaNbVHrgQBb4xZmU7qgCw2Ah4NVtRMXE3aaqKzQAKbfaA1HEfGeTqLH4YTATTj6YjPmxFfC2HmvR",
  "key18": "58pCz5pxyLZeAYoM8JPQ55xuYCyWnvVLkhgfdCFyinof44eHdHxkyEiQgLs7Vqrf6bnkLbMnpQ4R7PA9XGvqRMDV",
  "key19": "WeejTeFcyLzBz1GmbohfLtNtNvQ2smmm62vD1QFtBS7EPoD2TsFbnuD5qsBRgdKa2izZrbGP54Jav2gj8T4nA82",
  "key20": "2PoWbr1VCsgxYGDcQhuT19pJUzGQgpJc3AdhomBTmfZkuyEEUiPqjSUEZBk9taEnRiCY2CGcjAwt55FCA9yx3ZGj",
  "key21": "632XBRmdBTZaD4P2k9E3TVrtfB68rdgDpFh3RbEZbxcgHrpH327BUeMwZ3Cpu1ceWFEggTLmAZEYyrmvAnPehoUE",
  "key22": "61SpAX5hJ3kfECQ1UQQQsQ8UGhipUQTjxTGEgqfK5ouo9Um3RsXFrCmfshe6jJgHNVXto4WrBX8ZiwZvNf4sT5Vw",
  "key23": "2RJmqN17QgNZPhpeuQPeHG8wAjHPkiX3B5nBiiCLmjPq1ASGF6VBC8NSkoPQQMHTXVButCycyji4etA7E6HvGTLm",
  "key24": "4woLXopCC7VWv3HFfRZDXxKp1xwcDsiRRB6LT3SpZNMAWf9ysMWbACbhDHropRcLrCqzVoDCdWjfbuot5W8AYQj8",
  "key25": "2i89a4rJLofUQwwaRK6yaJ3DGKZu94rzcERmrTYtoZtrJbFevRVL8QDzQCA3meuEkg2tCg6WqVx5udvqyfoMT5UQ",
  "key26": "3oMJfhuN7dT24Qn7Mc8KrozETbirK5mJgQ8CrAB5Q4j46HX27s27ppokZvULnSvStL1nzB4k36SKfsoHfdN6phek",
  "key27": "5qmVebXWiV689QNBupbFQTvJprBFu5R4ic6QQfQcGDX9j3tryWLTUHyMGCorh5iWYV2odjwGWWmMSXe7P2SQ5gNs",
  "key28": "2ktf9q7eqKTV3wHKmKN4ELLVCnL56jFhsU5nkMWEkUhdDLcv2sBxq8WriUfhQdAbB6aMgdCDb5kf7EX1sWy5tZ4N",
  "key29": "45dk5sP9S6Pyqn7ULsbSBF9R1MPrLehd9DuyqzxNMfJKkmJrXVA7XhMmEoNdnSXBXpVkkgmoqcEFd9C5W8fRNsQ2",
  "key30": "57oZdKuGv5v2JzWV2RFy8NjA4CbxiYTaLeikbkU91DDS2c93EJuFaUzp2vSZeGC2ZGNiHgaoEAyy4F5auLMmmgqE",
  "key31": "3L3QnaLs9mWrpLyuXDGJj5RqJCah1U5b7FV35wRTt2PWVHbJzdg4E85dsZnmVvykX6B4c6kCBDnKEuuyD92nu3F",
  "key32": "ERv8E4Pt81oGSH9AgjUEeow6iiMCXHgVb3SJiup8awDMYTwk9mhBA4S9MAAxiMrLLdTHKC2sJjKw2Jqcn1SeiRh"
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
