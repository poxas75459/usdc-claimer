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
    "2prgJ9tqJvAu6BUKxvKJmmrgbpYh8QrN5rFpFUtoSV9ynGxjoxkUtu7bbCBmsVfRsgX6mfnTYXEya5d8zXjCzyoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLbeutb1y1NUD7Wnoa8VkfJMZejw7qQPwGPSt4hGX61pF3YnnUnbu7zG53KEm9hRJu518enbKer7C6qp2EQgNDs",
  "key1": "3oojkeXizP4FUCiV9f8nbWB4ABNZW1n479URWT8Jb2Xz1ycKUUsRZ4ck2JU9qEHbq6AJqDwEYbmg7MzneTFSK5wN",
  "key2": "4okiHT9ViPzANAdFDHW8ATtHigouAnfwKAFPWJM9Cr2pCyucTYk4m1tPawJAWThBGvk8TS1DajVxJYWAKPCYbhyA",
  "key3": "2uJ69Kce8gYAS8iYgth9ZieowQdtXm6RTXZuQGFsuFTKHkztPJxfM35UUiSEqCYnZrZgsLmYHNsRLPpGj845GeSD",
  "key4": "6HnyDbEGBG2AWvfGte7cP7buSbJ5mERHvnXYP9DGfY3Uw7NipBDi8uS4Z1evUVGAEDniAWR1YNnxtrxFSVJjDj1",
  "key5": "2a6XRnpN6BB9wMisqRD3v8SNFT5jehoSy8goYMZHkfCjpi48hMLtbFcnQ6j6ttZKNcU3RyGuHkvYq9pPewsj4vva",
  "key6": "2AKrs6UJxEgPgzSYtCrSJbn8b9DiXQ2HATyW6BVtWULfPAgKv2zRyL9jpj7ZxSW1UqUAMt4HuoppK3vayNQy2HZF",
  "key7": "3fWAfdFVw9Wx4nMcpkR1TeuR37AHbcEPqvNs2rB14G5bFC2LZLrHE5asnxgh5i8Udt1HRhiYegau7nEsKh4bGxAM",
  "key8": "3PXUYLxYbyTFU51GM7TfVQ6yaeL5fgEaUMUyAZai2tGRxrT4AvnZ6D9bxPYwJo2SMmssQk1gV6QHdECKiy49UsTx",
  "key9": "2zA7MSTA5uPy8V4XR3ifgHmhiNNQH7AX9GSo1efHfXkwQM3s9v5YBVURHyVsk2hxGzn6mF7nCrA23hZVvCGUy3Qb",
  "key10": "eTeyjXPSMKZrVs4XZ898rRDginKch7tQh3eHmY5BWjjwNk6nbFrNugqNWpxbWwG5Fi4EnMXw8dxU3wqBnyzS9Bs",
  "key11": "2x5mNGrxpCy6L9M87oBqMZ8qHnCjKb64WMPoxK8JM1M4fjnSLQQrJkakqqx2MSbLegvQd1YdrCayb4DBUAGavCoH",
  "key12": "WndmYR4G63St932fZikNbDD9FGiaFa2e1KgxWbDDPf5F4fhwUQqNa3xCr3mPkesRNJi8sGTLPCFZi3tXJKQGZyw",
  "key13": "yFed29iwK1jEyHmwUxjaa6VK6ACJoq9RZrWtwcXh8DpMgVxhUJrf16WF15ap1ob7kNHt2PeJhGGHq89HS5bi9wu",
  "key14": "48QEbJv6wtUZCKz37EWuprPeevY3N28JroZzXMgBVc3kQ6TJHXbPu4AGBNtXUtDpRNQQwygAUitHaB5WEYPVvFre",
  "key15": "3zQVCjkikcnBQb5TBp6fz38HyA7CK8ReQvXAaLB6pSzgitA4LgacQj27GDCmvasHRttvvCPbPCubqfZ7XwTZExtK",
  "key16": "4AYLRtszUujPeVeDtfphN4puCFzfirUKhaah8utdL4AnX2qj2K66FoFM1wDutjouVH1xLGDjvYJyicuhGpyYj8va",
  "key17": "wvqLS9SprfJPcRhdPJqoRKNHDfa8rrcfh5WXFaUpxxjdVYexZ1Tc4ww11zYcL4TGc8VGCoSJBRZqAWEGG1hnYfz",
  "key18": "3oY7rkSBHE8JF3vZWsCzErXgrmopezmLKV3D4JvNQWGB6HshbS3RKXzL4bscZ3QXb5CLktrHtb4bdnQK3jpEncoS",
  "key19": "5NhUk8TTjQAJXZoSRKvdtmhxNBnFEBzNKp1uVEn1Q6ovSVJmp7D7Uz4r7Lfk6VXAWcDy4xNmJy22raUtCjF9tngC",
  "key20": "2yCdjA1scuF3dtBWn17W6qhaM2HnRJyUCyzdMvgYQB7mWxm7ACS1c8WQDvnNDNRVrFYXzW9amXmKWEGCj7LgYB6m",
  "key21": "33LCF7PEk3ryGaJhDmoYtfSPwwgmH8VxRypbhCFDZ5yEbewEDGsuHCewHVyksJRmuqvvNxpenxmemKUDbaExg7VC",
  "key22": "Ru5jYm1epanYJkA8H7buvxe2kX4q3odxRXRVCVeZpqQYaVF4zvEG4ZDD9YnWCZGgvkHpvBguquBRw7EuGzsxqeA",
  "key23": "4gB3nseCgVTuwyzDWJj1WTwyNDFTnNVakVDrxbZgc3xY9pqpjsqZ2wnBzWM4Dwrwt3F7MRHyYYEbCkJA8QjYZPjk",
  "key24": "4EU3nM4N8bQHMFyMNUNm6p4XHmLjHPbUhtfsehnyd3QU67dCWLPEaieULrYAY28sP9S3JuEdjcoSNM4oppjrHKxA",
  "key25": "aY7A1TT1EMGHGDEqpGuVE3uEtB6rwUzM7ND3eDToYGfnDRdR76zZaiTAwZRBwvSQawNmWDMnJFLFAVzPveR2ZUR",
  "key26": "63LdbbxmwBFaBawzHT33dJHGqrzcaX7TsdMEiHW1oBUTEXBAcrn1GKsXsjpp3iiET7EaGTPsgYNUdZ9zq33wtoz2",
  "key27": "2jSP4juv9dHKYz6XXwL1mjohWM95UAyrsCjBFRo6cjB1ShC47UGwPtVP5nyuHnsRSZoPJW2PWBUy7z3thP5ZkU3V",
  "key28": "AmvoXWCHNRZkEd1Mpcr2LBiHkLZEv1ACaeppxLkJ6NAF8f7cLfcrt4b1iBJARp2LZvTuqvqEtVJumzWpzkQERt4",
  "key29": "YutM2c1u6Xv3CyJPD1vmoiD6DcswWhZizogzGdczAMYowHQQVzztzAPPoLZyXATWqhjgwEcXBdzvnSfdNeADd1x",
  "key30": "2dJUGDoRYw3M27E1iNRRsekwN5pS4Q7QEjgLszpaMvpGnB65gwzzcWb48xfuJX1MX7hMiXVnST4W11KqjXHMr65F",
  "key31": "3A4cdH2ohmYGkvFYN1HxHS329RDKTBc14TbFT7bqRDkvGWEAVu89z22AqjqTo7wBnjkxC7J3ray4cXyUTKM9BPHi",
  "key32": "Ng2jsaSCuodeQwxrkcYJAKqwTTNQb1M1sQjxHmDNF8weD2UmvYAd6iL5sWrj9RCctyaMebcAfpuXWN2mGDbbXoh",
  "key33": "7CAoQwjWLmt9oJhh92MWh7rQ9w7sDv5Spa5sVY5FUoXmGEod7amCERrb93YKije7iQrsjS1Du32CATnEGw1gYWs",
  "key34": "4ZV8mpuabtt6HgN1J7PgJ4nyx1wWEszEUWqEzqKjycD4L389yZaZLsgw5V5fSsf6XSQXg5psCAHjiAd2EDwDEY9B",
  "key35": "5xaWpGUL5qRvT98D8tnZQPDZk1wEJEqY7dbo8WwfszU7pLLkocgEsiPeBdsQr4L218QGyDe1DTkz8CZ3QrSG7UDZ",
  "key36": "2vxiUHYybEcQzZoUckJSLSuLTduZrybLUGihrMBDCYLQFpavFmxwTNyATMzkUamuDfh3uzeSKwPayXx7vLE8tzFH",
  "key37": "5kCAArUjA4G7t52eqSJJGFYT8rH49RyapAe43MMMYj9LRUGudvt4nq1D6oU2gaoRnWUwtP1d3VLtzDAKAyT6FsaV",
  "key38": "ARBAbaDBx2KYqRrLPfEB8jU5YVVS8xLQUYxLk9sd5Fcba2DcqAJcy1fu3cMjZaC8rhaDwyth6ync9AT8brgm1Vw",
  "key39": "2MhXu1a6ZVMjUcnVefoAYCUEmP6KhBHBNqh6SPcNr1sxcgHA4389HJhp6QdcwBmtYgwjj82pskqV3tadx6kSKQ5N",
  "key40": "4d2hA1uQYfgSfCdMGkZjftvhopPUCygsWhWuKLniMhVjsZWJHpDVARzRjt6VU2sa1jHwn3SngnwQZtdQ6dn23WRk",
  "key41": "3drbCZt43LMGpH4KbsZbdX5ud7Djs61x8Ta73aUWdRobnHwvKkbKdcBFUoVdU6rmrTYLTyCu4uJy2sywH8q6WF4d",
  "key42": "5nhKcNZLmrxjeD5JHWkX2cp4DeDcrgwMDCSjT4nGu5b1Bxwrb3t6wmUY7u7mw9nVVmXE44ntGXsNDAkmJ3BKYdAB",
  "key43": "2tzGiiEgC1HvfhWztvPWjgifXWyAMe1X4BBUJicr1WPMFDCviXqztksGRRqQEZMv7zWtQUoJ7qwK5A4Mnhy27ZA1",
  "key44": "46u8toKmczMXnxSNpwyiNUw8ZNvh9GtXid5wQgpgH5ss8BHzupbxC5zUo5eTMfSw6kudPCQZ6mb7jLrJh83iYJQ2"
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
