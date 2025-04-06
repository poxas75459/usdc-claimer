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
    "2qQNoZrHnFiSuyfQkzbthvLnebC6eJN85YwGUJsK2ZWwGPQrdL4V8x9txydBF3pVFMjMQRwf8iwykQyXk9q6Ke5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "561F3MJsFfFhV4McFt2JR5k1uKW6gfSQfPc6f95H4b5i5csTVh7kPh2gXQK4Dxj3ck6L8a1t9jnkLSa8vRKqdp2S",
  "key1": "5xsYyonHu8JGLp7ZzQViv6r2biLQQnfavebFeC6VQR7fMNRKnHdKT5QUPkv2etEhfD5r7dWxwgu3XgFpUDZvqLQG",
  "key2": "4Hh9QHR5WDg7cyT2xDdtdtm2BqwaoGqo3Xcmi2DyXgEsdBj6nBEEniaVRt8GKywH2LTojEUy3a2e2jcadN7NJavW",
  "key3": "xig5fXBuRVAmUqeffbxyMnFSM7Sg9xhQU5qskigx6Guoczfx2oct6ekc7pbbMMiAyecWRUzuoZdjGQK2ty48YEe",
  "key4": "43nFVLHxs4VtFtB1GbZaWZHsXLQ1RTVY8RL1H3xDb4n4nyHhqcDJRmjQmWQHtQTJtPGZg1F815FVinELTbFdGcwn",
  "key5": "Vz1SNraESwT4W9jb8t1Pfzw6hKj7NFiZGvAo34mDb1NVhQSvUrTNXnGe46Gyoi9daii7mVnknAvvyYJ8HFSeimr",
  "key6": "5Z6dwW7AagwffV3sKBm4CsP3E1VP1mVqB9cNgfsYTq2FNaqB6FrTqCBN13RpGv4jdmNzJaqrMQd9JvH78k518Hia",
  "key7": "3n6NXvmJsUk2yxRSjYgwSzkn4DMomS6znXjHR8n12n2FcZwDxA433SzeQWgfFLmNEwfpiCE8pafNQzvtNqwha94R",
  "key8": "2jkEkQg9HMKFJQ6KmZN7gucTGQk6tXAvBoMD9JmARPEQR4dKNWJmUCd4Zza7A89oqavoVx5ENPfVCt8Z9PJxfuNf",
  "key9": "2BHvjeEacaX78ScKkF7G4KjUiBgPWRiBTG6WgHyWJvPiASsjwWWkXJTQRWa11vXuYNjZAiboJWX5DPLeKo6E33L4",
  "key10": "386LZMGiWLEZGeSVYDpM8WPzgw8VNxWNQEfTozwAewEURFjepNzBVGGKepcqEaSybZizQQmALMvG7h5zkQYLsZHf",
  "key11": "2nQYoWG4wSjCf4U744RKvM3RtCgRWnJwt4rzCWRBfq3qhv1wpLyEJmDuhuCVWMg88zHhNs7EQLhHXneBX2sz4mKP",
  "key12": "dnEwR4xEHZUnavtWHWYH6CJANDBmjSzzGTexn2VmEpeenapQgVGKwtxUBDdbrQwvcqeGv4GQAXd16qaEvuWDDdu",
  "key13": "5qy8w99SDXwAvLUTWxsgpCTCpk8fDk7XhgBnRCgw8kpiq9zLEsEYAJyzom4eZgHm7U8nSFPjMFfPtek7endCXGC",
  "key14": "rPfon7xGUWx2urkr11Kt9A7qRxgrLSCefrKDiYrreFvVcJzDtDfjw6UGVfUka65G416GdvsqmVZZaNyMAapdivJ",
  "key15": "43uapPAbj1P3PWMFhNfnsCFHwqT1zdo1uDQ5uZff2UyuNQx8DsW7E8AspwK6sJbdHTo2pKHH7QRazHCA8FPbeoga",
  "key16": "47gnGXJi3UojKE5orJZ8VoPkKbK2kUyursZXSoykaAvkoi7cQEPJSGsSuxBi6CsXzNWZN7TixLGdxNNpPE75vx53",
  "key17": "5xKRiwG1TVrqos8VMjkTyYZ2gyij9RFbXjAns8iJk9yT4RQaGMtBz9hR5EdgABQPE6EeFMaHzD5RxdXUWgcKJPsP",
  "key18": "2rjYQMS2pgZ6XY2cg5jwWaRRoVMPve6J59hdtani3beAG5N1ayehaT9f4i6YzxqhooZ4dLXNXvfmdAXXN9sKBaP2",
  "key19": "5jgh8HSffiHfWpNGsJ9m5agDZyRUQ7FW358S7bJw14u9NfuX8WxKVLPB9ggoDYMFc1Q1gWeR8xumo3RucRePPu7k",
  "key20": "2LD6GbSN3SXybSaJ9Qye6UBZy5GqT32UNRfQvxAR7cLqkmDdaFDh445xvC2rXaFg8wme1GsJeU8MEWCoiVYyPS4k",
  "key21": "SvvYuELhN36BEtBZh9hG4ZBQTpuJ4e6q4wVUQ84YTqBo2Jh6Rdcfnz4WtopSpYWZreo7go5uh5o9pP8hNGQdye4",
  "key22": "2obuwiCdNTdsroqpjXJoaoMSp5fFhxq6zN2WUbQwf28SyUtouDiuXpkVTDwSMdX2b9FrVtJHao9sGuhEZEDXR5wA",
  "key23": "679vyqEeD1D8v8QUrCnRRPfMTiUv15XdHTWTsbTiFhZsfQU3ac7rSc2s9LoauDZVAfGbFDg5f6F3Adbao9LDhAdG",
  "key24": "23NT9tdRyvcbyDACTrTGFfmABuBRGGq9mx6u87rybdBRscLzcJXgPkYV42GWE2yy5gFSxeBhK34VWmxaH7yJN5aw",
  "key25": "5o6gvDw3ggj9HgftcJcEBRbUv5uPZ4PsUT5LhVjGAKuLxgK8bTNgLbe2GzTN6MNaziBPE6oM1p47wf1JP8vHctj8",
  "key26": "56ovoAQCJTM39LAyeroebrLC6wVsTxmadHqqN5THBuDutaqDkHm3JTAtB4933T79S2ZVurXAZoLCnem2fa7N7ayn",
  "key27": "WoNo9xebGYiS7XBMZqNnvdRP5tGjipnTkBWFsHb7mRRpo2SkJx2MG8xBMDciQJxx7anGca8TbzfVVEyCE1G3pgn",
  "key28": "JX8UWm8LdfMUNBLM8gwFi3pdUTWUe8kyGJYWRj7h7GvsHmGcRx8d8aT5EdVS9NRSSp7VJ3BF6bFLPYaYzNXRTne",
  "key29": "5aoTpQ6ZkkQSJpRt4NLsxUawVEBtmwZZVkEY5XHzqaDf3rnh2HTZWGC8wzbRd5qseEuQMfHJJaYbHYK6eA5UXrF4",
  "key30": "5c5T5zCYA1WHV5T4ocoAPCGVKEVgsVDKLkL4oHA89EEDdNxuRShv6NC2773kTWa3JHNbdn8wPMZ2zUhiAbSfhy31",
  "key31": "XziuX4rhgcmAuasiZficJsG4CZM8da4hCjWKGKBaPk1YAkjGUVrYLGtRV8hH1Ja2T4vaXV66zma66UegDKQkAJp",
  "key32": "2Y9Kgd2X5M8afLiNJMLJRoQKFAQXpVNYJ7GMusQrc43hyTNQLBjZhWjspZd3e3YyfehpxUA6XJsvqepTTjXo7rXp"
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
