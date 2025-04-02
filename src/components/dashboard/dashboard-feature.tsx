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
    "3jnub66pRTj7EijhK42UYNGGcm3qSXk6MSkzJ3UffWaJar4Tho7VTXivAxYbpfo1NFSoF2eQA9Q1xPPaD96B3rFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9BsHK8TyeKANPycqsEMJLurxkx4DZy2dqeG51s9a3svX7n5o9693sTCpcU1t8LtxpU97fmxt1zm558tk1DsvdT",
  "key1": "54YJTFixg4D3qaeVcZGGPQ4a35LLPPhns6A2A7hKZ8T9WEegWNvpheaFtL8CaqVRdysek9oLUGdh2LYxXDoJnfh6",
  "key2": "63AMSHQQuKFjvq9tjHrAY5HtTek8pss7vikD6nvST1yksHcaHwrjTAq13H1CMuTBBWDqE2g2WaL6qjMB6Xpq4nu1",
  "key3": "231NMqAkPDaRu9apt9FbFy59cpZBepLBBvi45Kvk7qyiWaxGgWKam2j7rE6KjcYWshYGMHazXurWHz33Bum7Ne8Y",
  "key4": "2rQDgR7sorVfXu5q6xbKGXQDmKUCq8jwWCAG2JM5xGxug4h1aWXbfRF4zFZ7yWPcUhbr2cDJ7MzR8qqAf1cgho4Y",
  "key5": "5rmC5Y7VH8Aots4vxpeBqdrR64jKg9H5dRgGcfs5Cwefnk1awPc6hvUF8nP5dmGPZiNa6qRJKTTuPwcLNCb5Cs1H",
  "key6": "2fjLrLWn1Pa7LyQqHqkYSYebyoYbCBLXvj6EWq3WQfQCiZFxrfvf3yeVJWoZXmfVV91AZDzPWTJcXdFTdLqH8QxD",
  "key7": "38RY69s7jH82FrEUinrAuDaLhYRTcAYzgcwFCS6stMrNr8HNUaN8XtrCF4vA2zEWgjcwJDH7s53h33CVnuLSVYVQ",
  "key8": "5QFtYqvSgCYxGWYL3RnH1vqyGjsvBr4GenHcVxVvTEfrJbxgT1LNKoaVWz4q83XHLZWEUXAwLicYjH2795nUZEFB",
  "key9": "3yNZYFbtxpWkwaWehD2AJq2QoHqM6Y8GVu46ZT9zKmvyayQxKnqaL2NL1AhGyPZyorvcV6xU2WyLTmEfV72T2vca",
  "key10": "4k9MxZ7oQfhb7QFqrGVFGKNfxRBdbDHpmR2dyD4JkPPb8QUQmgXuoRgC8boWnA6wLYTJ6ZKjFMFbZxHqMzQg2TQe",
  "key11": "4oZDfMajWathcQQjHg9xcHf8zA8ENL5DbmWwUTJDKiJQ8bUQKpLMTL91KyYMp8BjiZ3P4hREjwFh9seMh2YLKJJ8",
  "key12": "4RZxaq76ViYa5PGqRMMsq5J6rMGtFHGmkLQsawt8bnQD78mr25fzvkMXA9D8EfagWwKVRCR97qJArmkWHdWbTPjZ",
  "key13": "1c3r1qefzfgbcvyJKGCBCHVyEkW1zQLRkZ5cQThL4PcWbq5Y6BdaeiZn1tmfQJWPX5QecA35oVW1nq3R6Ed9F6b",
  "key14": "3Lj4wQJmmTX5oTT2NqbRZXXBEUvnPnsqoFf358E2no3tf1Q9NVhyVzoMf8wLyc7To6QeHPrzrPrJs5otLhtNPE1i",
  "key15": "5KBTYXHuK2uuB3iVjGEDMRVpr2JwqH5bp9Hj7PT7AZdDc2tjyc231jwcCZh2wwkcr2beENUZuHxDtz9v1puMH6kf",
  "key16": "4PfNFnupzsS7zteNEhrpHeiNZ1qW7iHv3fjgBnyEnQakXbLQ8Yk7pKpx6pptwdXUDm5NBX7Cquya2so5oYETMDj4",
  "key17": "5BMw3MKHiLuAx6qPyZeneB1Yp4X5KMLuVQWQiRih3VhRUJuK4PUGox6gCvpguZyxgiKjpxfrhkUBQnofHkzuiGK5",
  "key18": "5pfqanAoAN2wVN4FehhKuzbdJUUM16Y8bDDUtD4kBnLj5eZM762RdzAacZKWRUsVU1PvBafxwvzg4nTnehvY2DP6",
  "key19": "4Jp3v5B4vP5ps2aeHwcRpuCE61njTRFGsRVnaZA1DE6aJGUisDNYy13UNtkmqMUe1aitxL85YrHTvFoTB3ut4kj1",
  "key20": "5aEP3aTuWJ9Jci3cXvk3U6rYZhSXStu5PMAyQ8BavGNHdGuNVT15aABozAS729V7xKgR33mjnxYpQSVWwfZ4cCCv",
  "key21": "5iebLvUYghTjSSgXwRFU9LTcZW1sFyN6rGTxR5TfCBzLTkybECcbATuyksP4xiTC7agh5wP77WUt6LP7kgM3CkXh",
  "key22": "qsimMYNhY2p5AvJ4sbmpfjUsR9KUC1eUKr38cgyknh3w4pZ9zreKYD4qxCHoYMHVFqfWkPDKSRzxmgT9caVotzD",
  "key23": "2phdZR6sKhmoLoMyMVnNXVEkKdX8ekjr3X8VvkELCnbjxCEi5cfAmYFoC2641RwV4iLwdF6CoCCDgnZBK9v7vy9J",
  "key24": "2eRxDrHypA7xWu2oHJTq5ytn3izCMoQ6UGNo7hMZRxhyyHJR85p7ncapq19QxYyFRjdXUrviJDRR87df6nLCVmTk",
  "key25": "oRW3Li8R3ewniaYugXu7iAGzDr5oKRGULyVtA6EBvakh4VJW1utXFE6NiEB6DuYhh1NNxdzPwNEHDyEd1cQ2faw",
  "key26": "2KegpiStaxoaCmDoJ7P8mGQKgL7xpk3QbfdKZsYHGZyfwu4uZgFHQSRgkP1iL5PEAKiJvXBK1GvhhPsiuHcRs3po",
  "key27": "3CcXU7UQnUxgQDV59QGJPwcgyS17vhNjN9xs9AneZHeMjfNnkBP23jo7faKUhWoXrTJB9uQBYriNZnUk8orV4SiZ",
  "key28": "4eSj5rLCHHZeVMXk1s1bMjtRpRzVchydfL4pN6pwvMx4isQsPbdGRS9sd3C6Fz4e9mYCd84gBzWU96upj2ADZ65F",
  "key29": "2rSqb6eKkDHqvHgJcr6pjwvnJHBoBSQQyFBcdA7VE1aqG24Mt1ZKgdKouPDx5f4GoVUUMbSjUK7oDSA2Tu9EZkDb",
  "key30": "jXVgaVvYzVKZ61d9hbJCuKZLrR6QxzicWo4hbYNoTGzicKB8vNAi4DBRVZkAihJj8LVJ5t2CJ3TFXb8NsSBtsch",
  "key31": "4DZ1KifaoCwdh1un62XJ8UnKW8ctPvHZ7ofY3gpF1bXmLM5m6fdeKzS6a32aFhXCi3um6BweBRDC7dX2AgH6oJtE",
  "key32": "51obHrqu4e4i8bqxrQmvJrExHtw2dqLTfoTEay7WQEQTNvacSa8yey4Pncf3CpfTqpJT144QeDgewvPfTVieNgii",
  "key33": "5vF3rN5F11D5UD6CevHX8aKa94gDUV4M31ExT1kgvNJ8itEaJU4TMozsbdD1xJ2A9PtUo2fkDxHH85zH7aotNaw5"
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
