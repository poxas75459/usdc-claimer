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
    "3LeFuS8wWu4n9cHmnHBgYxNFk7EqShCM5bsoR4S2hTbgoFLgwJiWRmJnLxKYg8qPfAqg5XG7uuE9haLj2TUhECCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2njNu8FNx6XoFEr36sbZJ6xo4qmUfW45cGXAuQ8Rghz2tjUkWrasbMHnHrKVLnU1JNu5sBR25NkotTtF399KjrFL",
  "key1": "H5BHFMCfGqLXVgct4FpC3Sxn8wBdfPecfQM7xEhN7DXYWEdd8tzfLZZoVZ7RSdu7VKGpdRTHKiouibpcpo6mpUd",
  "key2": "vyx5DcG6NS6cGXEbjPM9HhC13TCprXHEsAAceqWzWMKGK6ZbnsHrss78FtnzLmfR3BJV7vA81BVXvwBz9fzJqWT",
  "key3": "2iDTnogafcXzic4xSoVf62RnNZHjGD11uvwqj6vVN6rSXmk9fvUdtLUjEb3yVbR3pXxCQy1dSVKHZf9n94HYRhkA",
  "key4": "2D77Cia5Zasam14KcGVsF9p9WuQYFNEwe9T4Z1sdJNWMLgk9FU6MBrwbDLyAvVBnBSFLjTJf4jxNqz8WhkmzQz9f",
  "key5": "5SyTLR1Ga9Svp3jUkDbkXB49KPqEsYcVDwJqUksNC9eoFecttFJaAm6pXMaPCzEfQFRzBG27U4SrfL5QYghrfchB",
  "key6": "3ugMZzE11v6UFqhdbUxz9GjmpRRg4sxVrXETRFNNXTRuzcjiB4XqfnAWYZPUTwQPM5iSAG5h2MjQXU3sHTjpEayP",
  "key7": "4Rw85tohBomoBFCc5WA362UjGEv4tu9XyXTq4yFsEbzs2ho2bjxQaCvX61tiHXq3TeZWKF9rYGSdvcUbypnUWY6V",
  "key8": "3UfX8TxtrS11xwBNKYKevVgcS7uebm1zeq1Ue6ucfmPfFNg3SYnW5ou8LgpV33cw5pgVGNpy5XbWMQm7jF3M3L1r",
  "key9": "2xbzSm9o93Ne7nxgkque3RPoRRNzUAQRK9vgkM4v5r2adeV1PNWQocdQ6q55QaE7hUVTKZTMyJsiiUWGqSciv8Rj",
  "key10": "43LdW7c8gaksBuPEfmnwc7fCRKk8JXwNNHaSZs5Dhegecdcdo7R7FPFt5h5DREjqB72NttRrn9NkfCVVT2iPgdC4",
  "key11": "2QPT8GitqYTUrJ6UuyZKrGBQ7bUL2YfZCGGHc26whrjoA24pst8USegw1mXEd7fsw5tzr13ew6wju16TsVNmzBsg",
  "key12": "2axRMVvS6Wt1Rs42gUAVw7Toq3E9U66jytDrKAjypqhp2Cp993bBb8RwAYnqH3LbsKPVUY1az62QUYecn92x7Cv5",
  "key13": "3cxVKuBqevK9LDyuUV56TnCkDAFQbeWjTNYZWwwPEipotCaE85rPtC7JabsjvbeHDFbWGQqVF4vKXv9g5LwsVoiA",
  "key14": "5tW5yJmfsxH9kzrkAxCAQALBFZexiACEYhT4WWxK6NZqP2qPCk6e9H2jpcNHr1eT8U7RSQzcZ5afru7ggBrrvGnz",
  "key15": "5q3skYQHexB4gEfHDkWKx4iuPTFfWkJLx1TSr8G8ieoHXUPeBk3piJyK1UAj8UESK5G4CwHyG9k9UUCGaHFXg82R",
  "key16": "4amcjc7S8HduKrreEkfGVaszWYrnbrCQERTN8VMgXF75k7VY3VMPbqBfLKGj7zNYGFwV3CkqoNxq3uPjYb88vUvP",
  "key17": "x5UG8bApzyFvbTreNet1YfjUweLCNUVghhBNzBwpTvM7jgMbxUj4KVW65HJcKstubznV56zoXoLiNcF84kXipzy",
  "key18": "3s4jfhGNzgXbfXrgstRZwSJoAPvc2Dh3NVP3vgdXLgDR6gG1DPEwRrFxBdZ5nHVpiYDy8aEbSEDgePWkQ6wFo9yU",
  "key19": "55Ghb8WQC4VZWGqpucJCpp2GnJrrEnEkuk1Y5ze93wtWRX9cgJLNgBjRv4pZhSjKWRfPkpvuUzT6RtmsBZ9DYfL9",
  "key20": "ZNdLuvFPbK4NBbRYAkJDVpfnFMpfjEAjt12WJa9hFy9wNMMxUNdPEhuA4CvUCaD9EnHXPKCUzB3BoKymbEhrja1",
  "key21": "4y94KCWPMbSrmKaq3VzvsM3nQ2PRcVSnm7snTFKzJfqDvg55hXZYgnTGrZeD17TzcqzH1HgYpYmiDSj8BcRFgsu9",
  "key22": "YxKoXCtpzAiD6MSaHUUXevfzMzt8XnMq1LxfEz4tS3Y9w7iKoZB3J8MoqmWuCpBMdjGonv4BGNff3Xrg4xKJXuw",
  "key23": "5VwXpSH65JTr9n2e4P4PqoakRB88ZzFenv52XYgVPwBpcNyzYQoPnu1zUt4GEBdMTjQnN5aeJYeZA7chbtAeQFfA",
  "key24": "2rAffVX5tc4JAfU95336SiQ5YyEGKNJX9zSFvQGATosm26aBi6Bz371yUB8ZgEQH72vmcokcKKJZKQnxQxgFvrVw",
  "key25": "4LF4UyMiMr15pH6EV5P2LRq3TLHa6ZEucSpfGn1eoDhViwmd8SPDSSycZANFz44U9kwmdoQkHDHgPiWBhkpdwzsA",
  "key26": "2FKkkrKG3w7nJQpCesUXe926NXdhgRBhwUYdfN2D8nsixbs3GAFYj7V6Uo4gd6gZ5cBCdYzRzsttzUjTSvJwL3UV",
  "key27": "4w4btcPuhQdtu1tNs9n1w2KKWnKM5fP2AyTQWmN99bbTjwYUuuMrYGiZQ4nhW3wfsWgoVnA7HgdRy9fGVjTyHYLQ",
  "key28": "4uTPbv7tERX9fhCByT5eLxAsmB4zpDZRxNyi9u11dAwPV4bRYi1kRzJevSntsYPiRHBwRA2LSYRuSKmdPayLYRdc",
  "key29": "5tJMzMopdoVFYQ4b4fft1HRrV9LpBZNXpyZh9VM5C5mgHuUiFBouPaxmXSKFVp7BLsv8v3GWW2MMQdihbYc1tMmD",
  "key30": "5pqtzXCB9Yo8g3apWoKKqBXYQbXfyDBUJCQceRpGbisxQaR58FiHXA8b5S98PTJudgCAEdPVHV63K4NQC1Q7KDf7",
  "key31": "3WKDVZomiEq9LBoiG6sK9dbUoEpi3Vnf9bKVtEd85DkPNDpbReu3gprwCdU6HDD4dqqy4XA4p7f1jVh5AmBkE69h",
  "key32": "4Xv8mcEW8qjVkDN5tDPUqBigtQ3UpZ7L4z91QBCoDMJwnpQa8JZ2yF7BbibDL3qiAdLxJpgmH714jjqNQci425Wc",
  "key33": "2EuHvsgfPSvJWDGtKyFdRSRyNhaRPU331PnPsC12VAf9Hw5E54kz4bLqMSd1yfwNMwuPGvMr6Q3P1VxmjysicsrE",
  "key34": "2iy7j9wHQNCyc6pnoNJMjk7W1qfxQMG54cRLtq2C9VWerhr5rpGon3fzXvWkgVJieAGTEhXECNZPtkjsDpCJyLAa",
  "key35": "4reVyoAV9cH4Lp8A6Kk2rKyrN5r6MRQj5ADjDCoHKpF5vMPPYq61krJ1F2EUCQ8qN5WSWdDa1ELoVRP55sFdZnJV",
  "key36": "59dB4NFAH5sncD4tsWJzXCaC4gVfC97CibccG9yaidKCBi4mJHsMt9jqzuH3zJ4W9UXyESSZGbgacgQes9xf8goy",
  "key37": "jFbXqEcWSTDmFV2R9fQDkSBvN9xcoDoVdJaKWGJnMbZxYwYJp3z8rweV57X48S2SCRikLF38RDnajtbJjCocMU5",
  "key38": "5MTJS2xZ2RZTjWvaGBQjgp9xaBR3xpZ9fhM8gJKgtsVUyDUCy8q8LV16zEhwayKv21asp3LKVdPDwUhLoMbrHiKg",
  "key39": "2u4kH4qeHJfCk6vDY3AFq6JdpRjbVpfceAwAwg8wj3MEG32BMkpUE5QaftQ3jDGJ3nZsHucMshjvN2DokYeUJwoQ",
  "key40": "88yUoVc77v7ShEBAQvf4ZwtN2Fwhf7V9EEDoadC1kDYqkKyqt14ubeGum5cyMMyp3ySQZyexyp74tgtpYNCddq9",
  "key41": "4uzNzfgfUFf7XxZmAM2pmktmVu5egJjTu7MPUGZmusLaKj5kf6xT7vWNCFv4hrpMdnZkw97tjVpTzhrGCk78WQiy"
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
