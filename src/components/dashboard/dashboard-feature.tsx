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
    "4g7HeYmLvZCpuCC4femAhf4K6BQv37GsB4aNBwG8JcS41oLCZAAfE5FXbtkAN8tRqfxDwSgiXP2gBDLFm2XmCNbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTVYVRdB1hghEdHnewMey4nFvQnjZScrBpJwc4vAiREikZQkX6iALSDKP7xgHKgAHE69iAqAu9gJRTTGz5hvK7d",
  "key1": "3R9dh1SKRZChxcJbA3X2s5WmzkMFeUMaJvdbsgk7VyJ4ZHBGku9FhWUgeY5xxZwkfJxusnJf8eyLuDQMztNMXgqA",
  "key2": "29sJU7rJdMGVqyqSJoMuVXSPFuQKNjeQxGeLLkAPDtkUujepBGCaJowsiaCtszpEnWyST6qx85N4BLtowdEMA7Wy",
  "key3": "3KjEyyfKDnV85XLMejP54Dr61aG2J7oxBUjB6QHY7Dn71E3Lcepw6siKgz3QRunF3ch3C99CEKkuMNb5VYu2Ryq2",
  "key4": "2YGTHCwuFRtfVkdFiYuHc4Fy664EPVVgjhUyeabEAzMKiFbWj9Zuo1UibKp36YwuN7QRPJn2CpNd91Dxtia8zBdE",
  "key5": "3Nd8pGbcXzhydLW2bNA7FcCRyGodLN5jdJgWuVvv4R5kxTU6iJnJFhSbnRU8LoeZYcvjC8AxHWoMdrJaWZeVGG9G",
  "key6": "fGgqhh3dniUeKbp7VTe3RLrVBKjbJeQLW12v99JafA25zqPZUEu9TmWc4xdZYaFDcp2DbnMoFqxES1tmGmFLFQ7",
  "key7": "3E6gtGaKtpYGqNtGhztbA7i9yj2s3cgZ8uuyEJJJu625NVvvu7gQz1nsV8RKBu3WMpdpp3NzfAFHzizbMkg2hXk7",
  "key8": "3UMNgsSxBrqL8n2wrFoLyaMpqALYTXUYfVUEPzg6N8cDKZFWzVqXyy3tkqsWD5Ma2rwbCBiohNXTgqBJmoPBamxF",
  "key9": "3HKMdGmzYEvfDXkRNsFEcUNH7urAbTbFLN38FcKjdQCZZuV26cVVMcMeD3HQvxsxF48qybJ7dRZbwpqwB3k6injj",
  "key10": "3D3kwLXxLyxeGpFqVstYbMaAsJWm4FpKSyTrbSaniLApKkV1SL8Q4r26VdEi3RggNN3YUrcEXrh88RRjHJCQy8pu",
  "key11": "3c9C6dH8ZDWDhkhq2o35QjagPubhjg1z5AmxvYMj6c52NW5BjndzEcTtBMrwkM6wHrTM4ZkYsDDWU5xbxpP1z7cP",
  "key12": "MJS8vmLBtFjR3XBAVQgpMgwBnECLPpmStgqi9Ymhf5ZuWBFz6h5arD7Tr6rniYjTvpHiwozGsiEAdrzuSAvvNxM",
  "key13": "41mQUEgvYCw2T7M3moQLA9NCEyua2CSF965WwzJuXmfYQ4We5GjNDD9HhbVQQgGVoNRRjM9g7LzHhGHLdrBmMrBK",
  "key14": "GBT16c9y7mzCbiBP7jiT4HCdW4zvUHULppMcuB2Rc9RyCK2RUrv8Yxv9pyj8RsZ3DJU9i59ayJfc8wi9yGTPcJ1",
  "key15": "4bNB134qEL6oSnf7aoQ7Sb1JYRdZmHVKks1j1PEjq7utXX1aDY1owg6kgQkM47q2c9NvtG7u8f5Hk2amZVA9VxBH",
  "key16": "5ot96k2b4yL4DFEC8BKA5pH4y8UbzrSnVxwHZrTTo9y49N7fiFG9Tbq4MjZKBvMd1QjwTQEGzrTS2oUJK1bmHF3k",
  "key17": "4NHb2GTaYTzEp6ETviUfAY3KjxURCzfS3ukSjVq6RQiCZTLhGjCcDXLzXJR9Rhh4dS9pViA2BYNT6JfdsropXCxr",
  "key18": "5mWC1saESXw9Uf95NJRjjar16AEQ7rnSJqDr1yAyFDtJJFt8XEjE7fB3jQeTJt672RWEsd8mg71x1s4erfF6uWnH",
  "key19": "iJFz3WGzYBJnhqjvSSA8yppnqmEH6BNG66FBRxAjAUzCp14yPxpZioaxySffbmBycXVSoZT4Z1YTx9Ad4TpRnam",
  "key20": "4t12PkGtJ4b42W7mHASrtYQsSqztnNeNLcBnRtH6suYkpsMn3NSiyvPLuRXGiwAaHHzjgBtjf6vD2nhMr3nRcg3T",
  "key21": "5i17DCm96RSFvdtUkHMPDqDVa8TB4KC46B11XCTb2vBX9JA7eeJUuNrHPdMfX4j7V78nyhCUf78JRJfwy3YhhqzJ",
  "key22": "jpAVDU8uAQ43j4G62KrWwNwQaJ9fXny2GrbJjkSAnizLFmGQMSXyKw795ze6NoLrXQLSWyehuxYe3ZhxgHrxfnD",
  "key23": "zeDeA46P1w46jmCr6pqqLGsrUrc3CqK52APaeFYLrNkdbLZ34HW5nn4zESLZk13P4xgR3135fGT1izWLErRLmid",
  "key24": "5NBsPKtFUwMhSAMLJc1fEDQ4MJFu9L5WtW1tzrdyfJ9L2dJZFdmwdGnN9J7AGcJ9Z2vma8JLAD275hj8PXnamWZT",
  "key25": "3bN2MUBNyrujzbvZxwmo44dxS94EXPD6tAFmGNKLcXzrybeQuLAtRo2sRyCNmZhyQPw8ZmX9u7ZjTW84oALgAArh",
  "key26": "2SaHALsheuieJXPf3NNdxBCxkpZXZQjWMhW3wERUq3hT2QbB9aqMMjguidVg4vZ5cfm6QkverFZGXefXFtCg4Nxy",
  "key27": "5emMLzLcramKW1t1D7QaUBGWwWwXc5v8RkTurTChcwKKeBgj1wLH1Fi1kQwePCpSKGroiLDxC7XHdLrgQQqGMFgt",
  "key28": "58JYbrYQGrXviq2M2pWUx5Ak8xuMABuJU3e7KG5VzEKvZfNZPeYYek9hkSyZu23NnwuE6brgyDgcAaYgSDo5E7g8",
  "key29": "ZuWRSFqggXNpnvofGRzeHC8uyyX5SC8ki4fafEdNEpaYRgfkbzfMUJdnQXh5KFB8ZnFdnz6wHd9sJuctaSexeZK",
  "key30": "4BakRfEfY1N1sb88GLvxMpMPVTJxTCnbsA6fyAPwjmKAFa8U8bZNmoWaJtFPm3ZDvThq4xQhnA4YEv6qzCkA9gvD",
  "key31": "3bQqdUdmLYEkzwiaVffMAN4xFzEBZgq9La9Ur5c1AbNoK6Mw3GG9Ut4uG5eTRZDxN2ySzn15QzRGydzqihb7FJud",
  "key32": "3qqtEcPPZUEi7gjTzN5ikbGCJxW5mfY7cGkvBnC6fs81PZa8wEdDrfUsVPiJZL7AFaJEjxBsGtEMbjTvTjM4zke2",
  "key33": "4ofSLRamcvB4tC6z7EMYk3o5kfRBaeiJ8h6JgYYYjUvyVSw6hLGWoS3pMqkRu27be9UrDHc2tmgaE7m28s8GK1GY",
  "key34": "3UxN31VZDjNcSsZgaNwMxNuvS168ra2qAa9mXtcLps4HGmJoH4N7WrW41rSMwmMSEe5xJ3jPCxd4mpRNm8PDvqdF",
  "key35": "54YQtwtnaphwvqtNoQqunmGqpKzu8CKA8eoaGAc5j8h3bM2iw2cbBnPEw29F5EEJRu19gjBhURCNzs4YLWbXQVQw",
  "key36": "2BHfXSdFtzd48sSnDGXhiUdPrzQ7L2Ane65NNq3iJUEcwRsxf5bQfSHCiVy9LxjzJ1RM2ktBwAnKrkjfEUbswQzt",
  "key37": "smJwZgExaKSCpVeAQS4AWVPxE5MTwNKrWP6mQDQ9nNLYzE6FimfDuo3rWbZQVkArFxSG9JCi2uPDxjy5QG9Qbj4",
  "key38": "2zyFKJCjHYrhW67MbTAX8zpHkRruxRELdVbdvY1XZfQ3uuMcnGyKn66npCRbZpBtLbmx3KUdmxDcE7WSm5GF4jUy",
  "key39": "iD8A3uJJd3XZoTefxUj3VoYMNwpZhTnWJ59ui2ygdjJS6qeg9EHmu4m83BM3z5LYHa78kYsbE5HDFwaCpGbuTe7",
  "key40": "3og85DfbnMMa7E5F1H83FLMh2tnXZ3F9DMKc8pQEyfuyTHEHK13cPXuvRXPe2gqzLR7bY5r1uuEdWaZuP1NxsA9J",
  "key41": "2mEuhdJqht87hw5ruzs5b1kBHvQEu6o76qsxHhdzH417nPwCXiP7ukxNzT3tr2ySojmszK8Ek9Fp6NEYXwsa5Huf",
  "key42": "5VBxAQxvzCEBMTsD5yTk972TSYyAv3LPDdG6Uhua7LntRFcWk63wFekqoWtQSWZTgBqAvuczcCcBHes56RdCi7rN",
  "key43": "5sVK8dCbdEhpEoKBS8Z4VAkFm11XU8FPA1o5GG9fb6UMmXw2XcVdU9c5Ta2ZMYsM8snimrB6de8Kv7yTewrZTENj",
  "key44": "2j2Qezn7PjSK9cEYWyM29FWoTKEgfMjFStv1UWq8Gc64Wth48RYnZyhg46QEgNfBknH7drZFR2qsRjMg69ojFzKp",
  "key45": "22ADJW3xAYbunvyaxrDkB1ujJmMAEKPQXEncAiktKzfRDhUztMpXRtwzaPmgLfXo3yB1XacLCmczHEsjq6Qe1uy8",
  "key46": "3uiYt1jENRWwRtAsrWzPEwm63qNzFcEZ6Fd1vH6jUVomVC14mYnEazs11FFzCTU8zD3zNbYPsUmbpMHXgpq9hrAE"
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
