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
    "4xbegELgKSyyHZdm9wtXmmfhvRKTLpueWtn6ooGXZGAYkLozLGhWg72EYQv4TtPjekd4viW7B7NXspxtnTYkZkkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2soCFUXZmwqQ7kvtFjEDTimGGG6oQYze1xmKT9FEVSKRp83Dt1Xnx1VEMNXm3QTV2etoLeCtfVpwP5Z67qrwj2",
  "key1": "3YLKnWDvuq9cvAfnQxskTHD8rjiATSxxFLy5pndJ8WVFGta3ZQbXj643oXpBFLGGrWHTGVHc4gwhcGYtMha16daA",
  "key2": "4nc8SH7mbKgVfZVBPAzcvFAmQb7PxNS5QK1riRNWBg575qACCgDt139L7xqEAynytZ1RWWu5H8dxpMB6HmbDWBYn",
  "key3": "3vBk53F44LsBturatvPLS3htUNJoEQgFQ3jkeK21wUj8akW3pVfqpVc5iQ9ndG6ZbZXxwDXkDmk4yHNm8rh8Ye5G",
  "key4": "5Kxm2z3QTGfTQoW4JVprNEKK4TpwdbBYxJs6YtWEgfeZyzJy3VqD2QjitaTFBTZXaWKUqdSDjfRuFjGwPjkh6QD8",
  "key5": "25JDtyQkzWFWeem3jj8fxS5sy45FWQBd2HkDqGrhWVLoRxrx1LSgvUs4PAXKfc1ebcrNhZ1UUQxnWMa1Qgdhx236",
  "key6": "2vBUUn7Najs9uQju5spAqrMj74GJLsrz9UX39AJGdZiP3uUPKy7boAFMy6piYLzjmdbjXPBGcb6vh9VHxQeyRU1X",
  "key7": "5w7MoxvqPMiEXMQwwjdrHkHdrMX4bLttvdE2TQ7qfAQNanrMPSbyDd5aeYWvCtEodf7GchpG8C2n1zRnfBtnuBmR",
  "key8": "661FYRWt4La6GTedaYhiWptpPrfs5JJgVMvTwcpiKncahF7VDiP5yHhJi6cSWnMVxGGXqAsKGer1XNekNEAdtsvQ",
  "key9": "3rCSZmMbQT2CHTN6zSdMbToCjXm36hrK389ZokAGnf6bLTjeThMPQRMVKv8gNPqWz5SHXxY19rvC7tEUvwvN7XZC",
  "key10": "2hN3mzD9GTr6C57e1iuLdoxXs6Q3ekU8qjYSKuqVJqaeYnanSpNE3bFKVMNxXwa2aBbSA3svD7TcL3iZQUNy6Dfb",
  "key11": "4EuHHFtM7c7NiCuvhb4M736U8YjzMHYgdkFs8Hceta8gsYwT99zjzFi4mDMCodeWKUUuvUjQNEopQ44xS786da4e",
  "key12": "3MC1dWjjFC7mjvx7B2ecMGxaAnVZnt8CTyUYEm8q8iYMfyBjkr454cMUyTbUaKWpWYQgNeyF5ZH3CitRryrKEMDw",
  "key13": "44QbXD2uxJ6Jp3KPeLeixvWmQ95UTCYqKMqVMj8DUa8fhLRgLw3FefUgfvJvaQC4bh3A7CUh98KYNkqtmkGSRNjv",
  "key14": "3dvYKDCqsZUqw7nXk4q7ta7M85QPD86qTU4Vw4SbMrdsjJEVTfagHFH1d1Pziizj5TBiezEcjQmGFM3VqNgHtcJ7",
  "key15": "5etiusRigC7hx5wuvioRPadWhVEtTKTkqdQZwr7gGpy8k4ckYXpxW3ea9FGurL6PwpNGb3MZmGsag4zC7gc88DdJ",
  "key16": "2LdNGBSqjwehf8Eh1weg2hFtbvjmNvfCmTJireQVBnxbAsXH9LYz2owfx9sasDQV2SqTPFCfA7hETkM8gTnd4554",
  "key17": "3wxCJpL5Kv43oaUAS6nZJkprP3QV1HwAQJ9VL3i8mBBV5Qdfar43McnnFsm2oRXZcFsKf5J4DXwPzcqa6WDuTYxz",
  "key18": "2L749aT6Uu8osQDamA1RFekiaXJj7kwcPTsDyTjZKfoqWV5ycUM1pbpcTeSG6qXVjKTVrWTpgAbWasL1jzQsuNyf",
  "key19": "qTiAt6aabCHouLJSBRLkZYoXbCx2wp5SadZwrMuF3PygKnmUX3wtJE9tPg26DnVVVvgZrHRGzhH4jDavzJHf8bV",
  "key20": "2fWURVRP9AQVRMqr62y4W28j2zqJxrghgGY3TQ2UM2T4v9JuHJPN3GjqNTg7zFYBZdLhT1ikFdeW8NzSZfRh7WkT",
  "key21": "4xvgx5LcbYfwKPYzvqrXmpfMcpEySMqACfDxzrhEBCmXkyGic1cBGQnaXLtyHnwWgecKiesER1kpcYTikyp1byd3",
  "key22": "471jPZz3EgxxdWWkbDwoC4nS1s2X9ke44DLFDY6u4nU6baAuEGxDi8HEiwrRRL3JJgdDx5vPx1LHdHuZvCJ6mreo",
  "key23": "3J82nPdko6MdwaLEUdPGN7848VmmpmMj3ELp4Q3SvtCQqvFuxGA7NxgYUXJyf635R7KvBro3bC5eZ8gGFb3TYDA5",
  "key24": "Yqm6wJFFsn8FvLJwSYbm9DTW9rFoKmj83muRYXMij9Fn2vCFA9zMY8FB5DV8LRdKyxWKQfY5rhVeS6EAB3GNTVs",
  "key25": "3oqHnEqhLLJ1ZNKhMwtjMA4mqndadRMMK1RFYpSjE4S5qeNm6fQFQGbp9ECf6o22sZ2VGEDi1FaNceSLrbFkGAzb",
  "key26": "2LF6JZ5fkFx6n4aw3DdvygtvjwKqvvszu4hDXzSEsMwgt7LHZzX2Q6zh6AT3vV8hXwTQKBS5ERPyk7R4gT5BRNcL",
  "key27": "381AcfM8XfsCT9q1PEcxfxxgBivicH38hevpSbKEwNGWAn6H9VF35dEnJKxZFytgQDbGXafuY7P1Zobzpmfo5siy",
  "key28": "2zXDApKRVRrAwSkcsfu8asJPNBAa1WpCEW3XoFnuSXm4VTgXBXuCjNKrhtiPastaKGkpRRVEwFJMLwStxELTgqyq",
  "key29": "2WKQbJwSiAAo7Z5jPu41ZK9KmvMgVtJYGvFFArEkT2GDMacAePWz2M57o1JTefG7jSCWnQoPvfuvAUCCfbYgWqXw",
  "key30": "R3ao8bVHU8kEzdoAS2934DbKw4fHRELH3gZ48gDVWc7pVNGjjU7TJXXseypXLsqYYp4r26qbV14Yz3xuBhiy7vE",
  "key31": "3CAYsw4jqqGg9U1LsUcdWSo8iUtjYbqYvSxFAxWB91fJFo6CsrscjkdUGto3iAppnyMtsd23yBiUeioFou8heq9h",
  "key32": "5HEDteZDAjNKZ4R5ZMX4H2YqaKvBpTszvW5W1Fks7wAWfgz7rbi7JvoYrWbrZVsJ2W9HQrRPnDwCNjYeBnbNnz5r",
  "key33": "2t3dWD9G9NQET6xQ6MhXqy6PyHNEA8JUwAtyFZAJUXjZV5NQhbCvbFAYbRfp5P2e5i1KMq2qvxpoTx4jgVmNEqsi",
  "key34": "2513mVoU2J3QzV2UeyfAm9sf2bLSMDUL1C14xPagSEKLuM225soJxVqhnGvTRwP242xsfrJPzCbbnetGSE7UMu6w",
  "key35": "64DEhPgW82KwfrQ7yrZcuK7DqXBqa8fqAft2mu7M7z2TrFBBrwB4jGSwwrbfrqTXTYXSLuc8WGwkcYbEJcAQj4BF",
  "key36": "24wcxpmEg4ya7wftTk3rdw3re2mHDY2btcCCjYmGYoBHYhxuUMYSWaqUNpFZumGzctXbaDYy5RYZVdu9DJTQKP8Z",
  "key37": "3UJUNnCqBC7ZtSuQPC3YPibcHuc9XuKmgpkpzbcKsn6XSuRYm1aFC7Kj5v35mM3PAvVYiMBjfhAfmMJrYVQpEsTr",
  "key38": "2VvpPNYBmMpRucQx5VW1oMrSNT2dozxM6ic1d74vRCJdMkTNdD6JUEE9Ufj2hjFqH3AJJxSuMVf9pUwDz5onDAAd",
  "key39": "SX2kC5vUYaf5VeSz2J2PwXQBQDaUu8HSqMRCivvKWHUFerP4ZbdVJj7z9v8mptVsuSqaemvQBYZ67DZvfzng34L",
  "key40": "5Grpqs3aP72nTaN2Kp21XYSf6FXKg8h2yi9xGUD22egFsBLftNknwcqre5ttwmbJidbwrysSb4jocsvNsfWNtpWR",
  "key41": "5gJ52WoHPwaauGcAba9fkG5b2ZM8mVHQD6SHvKZYXeDjojqLM6vBoxrXbA9pYJs2Ti3cxXZBdpHp7Hb5oFMCz2h8",
  "key42": "3ziUQgmU7eTDaCJag2bwTw9oPfbBzMx3oMFHAKpfmZQwqTjBHxVUcWq2ZT4bHMRPPgrL4B2FaHRV5Jku4aASvY1J"
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
