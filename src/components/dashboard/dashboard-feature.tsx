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
    "egEpgxf4HcskiHZbA5iiReTRn5nsQLA3YjypFsRNz4HKhdDn6K6xYR5RWvbkSQGTZjZwxniVacBSbbouYuUSPiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tnug2p2LfijuYpdc2kSVJS94sWajmPjZr9wTtPDXijjJRPQirG9Bk8EurKqFDZzpRTrPREvW4QWc9jEFiyMcqVW",
  "key1": "4Fvki4hoThgvBrsizfnavmyN7H8wj73Ni5vALgQ6fAdr3fG4coLRiCqZfbod2xfHrye21vPBU1nn4vf6yaaqRzkb",
  "key2": "5ALL4DvBYdZv5X8XBHRVQyVD7QJR4MWajGbWPzrowYUZ3q62WJZkLAFXX3HKLsLNhThmXBc39cqBChHYHdUVxRFQ",
  "key3": "2mALb54y1tgwr7SGyDadKVskU3NU4S1NJhqbvrAt4wXr67vU2c5ZgBcLDkkejwqja7nutmmV4m5qnZ5EsMq8PW3M",
  "key4": "3b2rtCYqvpWUzML1eqPiyGrCx8h5sbtrhNsX5mEfvTNiqvwVyqfZf353wWdzU2L4qU6wpxKDabGoKtxgBdqtf95b",
  "key5": "611fAzgKQ2ZE4pVAqnitKT2ihPpL5nsD4TRkKc4Hy7TeTKLL1xaYAY4MFSfNsNm4JiFykhXuhgjTHUJMacs3bKSB",
  "key6": "3K3fEtHZZW5QzaSpgAeoVSnJDESbbhdKU6WmJ5vpwUgrAbqu27FuXGY71GkVdoN2JpsSzrFfGfm7Rcch7dMJFMDK",
  "key7": "5MUJc46ATvzHQWjn7hWAWozXRUFP4W3Fe1xuKzuwiVkGfSZtB9iGgaGRoScNWNhQiV2y1gVr6pjLd7UiKLusiLq8",
  "key8": "3ejMdnrmG4NtsSSbd658LL2FF3jNSH6Hv3yN4nPdDBvmqt614EL9SbgVsFoBegFzZSuvvSPyPN3M6tCxfmU9QTxV",
  "key9": "5scHCeFgUctmR9hsuZFr2yoBAPm5UyV6MZxW3NTZXeJj9mHHzAYF28kF2coW3vHxHVBdnBg8JvGzsSn4Z3BzNAJJ",
  "key10": "2P5DRdX88Be8UuwbR55tRExieiG2LCHSLfXPLfAvArEMDbA7AkBcAfepTzNHJjHoG9faS1Ek7j49GbGywCV8TYPv",
  "key11": "4ksVVnC7eVxvpU2SVPSMRrbzH8eJYLENDFaWcgKnpPobHUfUmsSQXsf78jH97EoAGMjk2bdkgZU98mdm9GAAQw2",
  "key12": "4LocGWBU6geKAb8RLDBtsMjGeyHdTnNffLnkzc4goVcrUMqo8GhPcY3PaBcoSt84bwEbzfAF5Mkrm6dgguYWnSKq",
  "key13": "4c4DgmS9ciGpRZQsgjWPKN7H94nmMQUG1ggNGED96Vunf9NCpu8KZ5QgCLvKWwoeEXsCZ1HUXCEhezHLNZxLPrve",
  "key14": "4RqD4exc74KHXUr2QbpfyAtjKXRR5gieSXnnZnJ1ifGq2SYvsjMSBZPLu8LMdJFWJJbAzEfVFLs3Swr1v2ArpJgw",
  "key15": "4t9gR8dG3QWDxvJ6GzYhLrGex773jU6GDwAwf54X5dSaDJyJCDJ9PM8h4LEXrNcLkgyXmSEsqFn29A9PKTNkdxRJ",
  "key16": "MkTP6QV4nLBTXiXeNoKrydqCL5DxW1iZJXZzVrvuS79GNauagcK5org9uUbuWkgZiLnepBqiWN9tjhJMGSQKU5u",
  "key17": "J13nroPEBAoCuz5uhvJx5ZkjotTjBSy1FUhwcwvAJRqfhmhHVSsiTiG1JsRE8VG7gsgTkVecWgkokp9aRQFqZXk",
  "key18": "51JXLM5eFePFi6mH3cbmhssbz69Ju6maXJN7TZWMjpYc36RC8TPrgJAQbBAu4C1QrxwHxHnRvoexmTTCSvgJr5QD",
  "key19": "5621yeMEMKuRAZW46s5ojVuuSFFevrNBmKBwc9hdP2YctMJrBw5Vu1Uapr5T5PvqcEtCGSLdwUuvQakoT1xKcZMD",
  "key20": "31dLA3RtsRE5gmrAWg8UtCr2D7PjiynBzxPXbpdoSaQnH9jian6YPwen8F1L64HnpPBPLkCgR6FhKjHuJgxBeU5N",
  "key21": "4HVm3n4pMArviGc2NkDnrCbzYNqMzFZVGqSMqszKTPy9wvcjx2wJzmnCou8Cw1JUZzkUdAdi5k8tcBxrHYP9gZM6",
  "key22": "2NhrzNiXbtHmMo6giJdNVycopqNmJPPLVfM1xBFVoLz6xjt7ina4MynccXK1n5FiQT4zNqruo4nPnqRWU4mbyyXi",
  "key23": "56fP6i76edYWtpkAA463QTYFHK7GiTifi2R8rNQ1TjwmHGq5YnvhtH9uryQniE1Fa3NPszWs5dFmKqPNwTURxtnU",
  "key24": "2CCuRwsYYEfcpwcP1RGXXGD7NFijkdEmddK3jyFmVGbZAReW1WY5DodauPt5PCJvdPpi66mfmjrWyooCChqsuD1t",
  "key25": "fDjFHHWpzUzXy8yEXfWp9rn15ZvebGNc7Qpcp61R2rvNjNWLXPy2gYB68XsvmqFRT8wzxY7W1vCJmfTp7WNCN2n",
  "key26": "3cWLQJSzXRTFRuZ8QB319dzYsdr84dMfT21yEZWxfKNYgP4TJy6hTfuuNRkx9pZH2FiUJUDK5oBKPG1hjg4L15s8",
  "key27": "4kumRzb8hv6ju4KQXLuX1KZqTq2F7j7GjQ5g5mQvpzJxB5KWdaWcrbRmq1FG3S41thZPxFuBWKt3vQtY8QiP3zf2",
  "key28": "22LySD3ZKwrRrfrHtZziw5Ju7uG24v5JZP5RahmEgFgUdAK9my665WfsFYf1nPi8XVRBJu4DRi26dviLzozFLLTy",
  "key29": "4WRoQAfn3B35y8HfwDzCFdeGBtuKMjhvcULgWgNyeFYZEL5z6n4u1cTPruEFaHoCrikFdiNChaT3Pm83XQEtaDW2",
  "key30": "42zWtowWwkqhv9TthRjv5NCXCaEenVZMmbkMMcQnWTX3WuDr9cZR63dRESs92xTw7KqS2Tw1AYxrjhHgribhsrxw",
  "key31": "3StJeuNG8guCbsgmvvXPtTm2g9G5kia6sqjqX5K7p1S1jPzercNgBnfVBbUS5AE8wWXKN9SZvZ8fLfWKmV6cwJ3p",
  "key32": "3Pbpe3xngwQTfcogDeWTsVe2bNNiCxe2DAmP181JCUrKbh1qT8TWcCy8dEtmFo9vtdVcEy7DfAD1AEx29iudwJzs",
  "key33": "66Ba9wkpKHXdz3VXYWwVPvpDJgNScd1T1zDJ2ZrwFJxkvXQC9CHTPFzNv7PySjahoPs9fhCGdJwR1LdxGsQKqdJp",
  "key34": "3XM1sygNKTDEZKdWKCKN34sbhmQacEdwjPRfzjF4XqE3WptQ3S9qP2nzg5A4YUyKxKvGKX6UfVF7HZXTk8Chu9HE",
  "key35": "5duXVfa7gdH7PFqyKBG3xFcus3enSbaCbbiBZ5PQdswLxQ6S6msHJtCQJGFgpKnmwpximnzPvk4HeAeihpALSBe1",
  "key36": "KYWkEDKBAriUvRBzKP1jAesffj7PTzgnK8vUACLm5Lb8kzKNYMtDBpKGcubWFK5FWdWMnX5Q8vqFuKzKoK8XKML",
  "key37": "b6uyjkEuPnuN56pTHd6ucXhLgv1rgFsZiLDLyStt889WgT8D7VGNMJgYnc8jECDS5GN6iAt54Sjzzmn6ETEbMo8",
  "key38": "2vNC2sP53RxqbbMPiPmg2ortb93zuzE376wsN5mGiyeY1KgR5cVfY7GTy7jFmaRRnCLgr7NCeRMFvd1MFMyCzLFU",
  "key39": "2UKdUXgfcqU7o7chSn2Q4Hrx4gaXTJ3hvQG4goEhJysgaHzai6azCu2wByMqDgHh5q3DTAXpotW8xUmJihFsV4HU",
  "key40": "3puvBWi6wVPZYwiHwUr7EW6oiJfKxvkTzKx82dLHHtmHzQ8e2TEv8w3vehVAJeMmxTEqZ7S2KnnL3vpwuizARiBN"
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
