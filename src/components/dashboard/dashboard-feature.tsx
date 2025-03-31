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
    "4qikfwBYdU9k6KwPNJv1FmNWUDtWZjFNqhUPzc4xrPRDnLLv9ALkpL862qFosUWV6nJgSWWH2etZBrVvWgHvmJqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FgHpHbq7KQwDESgGoLNd2VjVAJRDTFeoKqd9jpWkb6Fk5QhfBxWFkobuXqKML6rzWvnCQui77xVBjEHhysW3RFM",
  "key1": "5HMwi8QByDGLSbR1BrG2KCZH434ANUWijMrBxhXXquSuvwvdq9y9jBTHCGs11E1MqksY83zLE7kserZpMLUCoS5H",
  "key2": "3FHbTPWMQBtdXW56pJPVPnGKU1KMMjdrJMgjeFp8VB3gTtfxb6nSsqFUzHjJFZNh1TrkYBguzLCvJVWPXw2ziBNe",
  "key3": "2d3aYXoQQM4FDTZya7rKBjeHN1J663mmC9miW9NLKYpEVo63AyRCZ6EvJE52EQKXKsd956KP2pTb24fzfrqH41kJ",
  "key4": "1Q9bH82R7Cao4dcN9ufoCe9jCLL6en1PGVQWRTb9RSMC3BDnrVc8EKuiAvdkxBwEoVGsbZBNKhvjgMYXyXiz7tt",
  "key5": "vCduLBbCRi2N1rjUSKdQGFQqW4s972ofsTxe5buqGHBV2rxSKJuvBEqHibxD8MiNv5BkGsbdu6UCkgF6xfEfBQX",
  "key6": "5qPJ4i7cFsamNsrgvHx3koj4BeVwKJjyPFn8LAQCobATpdZzpNmaK2R7STZk2xeFxmW5ALxBVXa5G6nh6h2kjhum",
  "key7": "8rA4WgU9MkmbzsppzC3P57qjyD9xXTSLZMnzgkPeBYPCAwS4kqdSwHpefb3L1coUZ2bfS7kjMnnrNKsHCipQ1eU",
  "key8": "4KRrN7FME7g7vTie9TLvtH5qiHTCzQpLeHts9AvghKZMtrrRJEXoiS1ZGXRxs2GYxCX7JY4qfV6zTLsH84pnYhQ5",
  "key9": "2GEH4buyzCVH1FvaVEyg6x9YVhfyp2DApwGEXhrscVANv9JiaAmiiWoWma9MszAcnXU93RheVPs8K2oXoQwfzjng",
  "key10": "5B262eGWaRUDdXUL6qfNvAkCqLwrTZGBj3GwWXjw8XRwncKCqrxUqTeRKs5g1qJfNYDDeyndGZmJEV1pHyG1Dccs",
  "key11": "iEYw2idkVogYZPJLHy2yH35qnmzc43VFJb7rioR38aA76j2cyPnyNmh5eYHKHmrB4eccEyVr7SVnYU7qdYxrBvj",
  "key12": "5FmkVUhJrnebpUK5dG3PEptry3eJZcH9SA8U2mRGrfJaggoVxy2k3bAknSiKYaMtbax3vQaHiT2R1itaJiRyzWqW",
  "key13": "YxwjiMAjXDjzxDoxDFK2DeUqjh6D9SQFCH7xGA7EYf4A4e5NYTLp9NEsoHw7dtdgu1LMcqJZAovegAXV9YnaZyu",
  "key14": "F72mr1jjotkD5coGATJhA8pQYnoN1ZCxfDFLrrjL5Po4eGJ3ESw4ipCVuuv4JhB4j8fqkXiPiX5DBdPzFDRMtBE",
  "key15": "xofwPeUpS69yweKRfDvqerLZ8u1HyYdsSPnuV1qMRtz2ZAsob2QH3UhV8inQ14RDvhiP5mh2sVZYDZ3CGjek3AU",
  "key16": "3yhvC51BmYdF2LmLGAwobHKRaFAG6p3D7dsXvuZfYLxpQe5R6wfNj8YjSucDWgJAeSRjnp9cQngLhfaRnuuNQymj",
  "key17": "4a3hu2hf3bEC4txKEMRorkSi3qyix93o27UDZrQJFq6ZjZHPA7FKTyHSvTumHKRciUswYEvWL3YVS5XLUaAmUAcM",
  "key18": "2z4YnmnAbfQAwL4JZveRof7P39W6q8n6HZVeL3TomhUjPwNGmTW6ExPpJRuatBtp4Lfm3Y6VJ4YZA1ZhvgMGWNZs",
  "key19": "PZPvmrbtQffmYJH18whi6kEh8GwhTEpbZWgZcp2eTV95qJnn7DegDYtdq4XbTdZUAdQzbbiegqh5yf5DGHAmsjg",
  "key20": "3sXXkSGYb1T5uLdXVr9FaSYUBhhCLdpia8QuGe66fu3Mxc4Spx5jg9Vh9nB3hxqG7HN5JX7o9ay8GopwqQHUqFMZ",
  "key21": "rPn97Ljg8ijr7X1dir4cDTy6qaW7FCYxZxiw7oEJpsrJoCbHJAvWMj5A48t8ud93pNKKRGWYwiHZBRweWTHkfYs",
  "key22": "3VhTgdD1uS4x4B99dAB6a8BsDS7dxzqoUkeE3qtFEEUBGoQ9i9MhbyqTX53eE7z8J7suaC1GLbQVU2Yvj1K6YnXy",
  "key23": "qP793MuoGFZFGRKFvrfE6oSFGVCk5zFrzkqbriGtkmujw6UpR1Uaj6J9Zmdnr7szzjrsWL3yERSCrdA57Enz4eR",
  "key24": "panuWURsi1Pp4xB1UfEZZRHDqTJcF6N78p46yDM9cssfM2vhzB3ThT9Sm5LDEXRJkwTQ4p63GiLN6yc5JcWAoat",
  "key25": "3QJFWu2UQND7ic38oM4nZ9h9GhqcPJJkWn3WroeFqssA6SnHmQ3rfwfr18gZGbLocw8cwUuodraqdSHPtBkis5mR",
  "key26": "rURCA7CmLnfF4jMEztnLU8xUWbEPNbXE71Tj6qB6fkzQPL2jeHsD95HorPeEEh2YYZW1yqgU6eWFT3e5W4tB32t",
  "key27": "49uvS1hBmwCGnjkJLpyPKdhWzwRxEngT9xrBspDcsjGNcRQ2Vtz4gCq3f1r1VcrAbfDz9hUzCszUNobw4ZdzsRE7",
  "key28": "3q2NNRRDvUeVY4A1t3bREjVQWEkvqdebG5BPWfyFVjpbf371WXPozaKnfsxV4Mvp7rrUYf6LizWgFRVKkgmFVZ8m",
  "key29": "294hZwLNJ1G9vrYoNEWNwRaX5kcuryxrgNZHWDNTVUsZXu3bgikPYzDLMXcssfUaypCBxWCZYYU8krx9NLH85Kpt",
  "key30": "65WgZmMuEGE7wxctaikyxpe7tj7XCHGaVpZvYJwKQ3o5KHUgVWHuEciFsbJoU1mj22n4pXQ1AVdQ2H9HsrY2dwAV",
  "key31": "4E4HBHq3aLnA69nMprEXhDFDNsEbv2Cf6JyJTboAe9HXzrT4Bhd5LFEf2Mev9Ngh2QnwiFm4UMw2M3sUMuSm5C6c"
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
