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
    "5grXxvBF23qjpLmxfdoZjYMELZm7psFQNaEd6F4cn1ieBevCG3tcoy6UBiy1ooGpvsWdpUUt1rP3aB5N2e67sV42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GA91guDpms8wSiYiLiEduSNkrf9ChTkjU5RyPBJwHcdxGXbjTV2GNUyABjLJiKGPntDTSB2sgskgFMDnTMJ67aY",
  "key1": "33eMkk2PGrfkrWGpymyEAnZtXSAF6AqatiGL9oP9so7A72wF3YJx59eG5W1YxAJuYuu5w7x2hVAewxoXd8Be8D4",
  "key2": "2jNV74C3UdD3VtzXyfcpXsETeyWDBt5KuUnNbKjkmbK39PAaJC1Tdnv4v2vBRVA1xz2VMNYdNSQvhoRfev5dEZ7W",
  "key3": "LtyB61hVHkyMBvM6Dq1eC2mmfWdratn9WpUCHnCDgNKGYkmcYPMLrb9WcAAK46Kb4UbpoE6VGZSpVf21L9v1kNP",
  "key4": "3FfEXTctocmJhiDGYjVkYxMZiPCvouLCpALqhRA8786yuMkwWc397izHQ5ckrGjTNw8trepmkmx8zRFE9AciP4mZ",
  "key5": "fot5KaeZYipyZBc8utJcjdKa7ZQDUbKkcnygELBQWwTr23KMEhHdo8UmSGtFJGxARHTbiaqd8QHFT9aqbz1wswY",
  "key6": "4NKR2gaszZuEi6GkuCutkuWQmasT1zEEEZ1fp2xy5mH5teQnaQdjD4RDydf6FhedkAwfNcA1nanrVMuz1jLrcTdt",
  "key7": "PLBose2PagAXhUDT61GuQAZhtBKfnL3iMyULTAPMBccPzNiDSC45cRZoJUYQGGoogrFtwF8K2XCrc8Yr7RpqgNJ",
  "key8": "4r9q6P7N9MEksrzPwkf9WZaUQ2EZ2S5LKxV2D6gviBGmnFPpq6AnoKNJvD8aSzRbRhRuqTYnpGh1gR3qG3aPRsGS",
  "key9": "ahQbEF6pKXZrsdimKy6jGWo48BZUCLR8pKoSEwaGUrWADKPpNCnjwyzoDs7TrEUxLETtof76Er5rjwYyiCUPXAi",
  "key10": "yz2F5uh8ZJK234zraHFkmceaNF53q8tC37vM4EjaEX83X8WyCnbym5hu2xukpdM5sT2iSRmYCoN8vu7oB1kPTGf",
  "key11": "4guJfFvG6yj1ZcxFtH2gJCbgWZrASjn5v2QwrFUxi48vfBP39AH8jp8x5QpsczfciUwRRb6ZapCAn8Ue5qrCbvqr",
  "key12": "23FSHcRnP5n75rTCqgmdzbTg4CgCSQVufi72sZ2o2dZEFLSdZwV6ujHd7gzoisyCbF4uGh91mNCq8HmVv2ppNDNs",
  "key13": "3FtB3u5W1SNNNT8y3sSZVV9HrhKwFhz917HCD48C7puWW9KcU41iMA56TbJ77imSj7pcmnS27gwcEn7o1yCX78ZQ",
  "key14": "Pc4rL4tihJn8eG7hQSJaX3iyhi6b5nPytXWD99q25hWXZkEP2UVCGBp9DU83kHR55wpwpZ6NCCunV4pqueN5emB",
  "key15": "2TdFMu8f6RxwgkwNkJ496bAZQNnETinPxsbUZFgSKPP17U9Qa5X7MN7v4qJYjESceUJ7qMSJcnzAYMnadMww6rWE",
  "key16": "4hUoH1JGu6gVgAuS2uN6f2qeQEg2ySJNfkBnvkmWufPMm1T9xRdBbfpDosnc9MJKq2pe3wj5S4gvEs2ZXtbNTLVF",
  "key17": "2P1M1qZxuGVoQ65uqoztscsSVeRSsPYsLJWV3kEiz6ixMzQSVzrtEjoVQo9GNv8cqmE1qYdaS4b7uqYUGxYmkeoM",
  "key18": "vQYuKfEX2euaXNdvkAZaaN7puNDC53wUNP679pVzG9cj7UpdF7A3RC3LjPbcdW3ygWWyZBLGcdTzFTNi7BQmkQ7",
  "key19": "3L72or7hfCVKguoMoEUcXYdxLsTRDPpVUkrztfBSRfMReKTRweXgjHzEVcQ4mRcBmQL2m9ryAWjvXDecqMG2TQrk",
  "key20": "XfjMtCprQ65kCNPbqz4qpXN7rwNdzHJVJ1KTWvYCLuXGaLDXiLXL42tgerqdixr6eMBhsy8ZeExJkxs7LEGsH1D",
  "key21": "29fT4vYrsZZcfCCxeGde5Xexbp6phyTHjQks3wiL8WYMrESGSyX3Gy7w41D8wsC6KyPAy9oTrU3YvfUpaSTgqVVG",
  "key22": "2mkKqZiqfypqv72Lcv9S7nTehRYiJ2ri7nX9ssRNDZHB8T8XUaS1TDA7aHkfcwA2L8L1WQmY3iMsLyGTKvbboNaH",
  "key23": "bCkQ8ED4xQmKsUfnXXpjE3cFVCsW2gieFHWAUTzDdW1bG1QuSKVYU3xJhBbfLoTRr7wzGPtac1KKwPqqBz9uMy8",
  "key24": "s5Adayt6F85wpUvUquQH1JAdViqBRy2Z1gZJCgv7bDgsV8szEPNdbU3UhNQUzWDqNgL6DqdModoU4KMR56vdCvn",
  "key25": "5phVReaw5U5DUvqJ3P6VtUu32FbVHiyPDxrcENTMemjFWtR9iRZa8nGNxmYLM1pYT1Q3NXoumeGNqyfp2yBbQqzd",
  "key26": "2aofVhDUPQBKVvFzTwQ4mQRebsewG8J7XKG1vG6uXsFBEn7VUC7kMuSzfT1vzWf7Yz7mQmfMRdWBLdFmTjZCg8ZW",
  "key27": "2a85oeUCXEupky6CrD9Sf4CVxBi4vKThUWKbjQaBJTBqjq3bdzTm7dyxPYViHZFKQKm5oMgwTvLSUQFaGW2UX1No",
  "key28": "2bLmLtx3GVeieHe8Lbf8atK9JU24EPFRNx1WDUjjhanbGjHWAEti5XfmZYcnjc9F3vsG5rQdE3WUWfHb1ytAkHKM",
  "key29": "395G8fgAjjgPiS8rTMMsG5W76Ci2wUZacKhQq3EP3yPXCdn5VgtibZxrnWTxMVRfJVV1b4wA3eT5a3MGbikvzmjj",
  "key30": "47NjxqZ81btna7sSazUVDNWekJLMeApK52RDDNLXaXEru5uY7rQ4C3ptRZuu2kyFid4rLwXaqhgbWzVyrjSAEUMk",
  "key31": "2jkafjT3ud67L42noHnRtMJ55BLYVQFzwsFDYTvd6h5ChsuJnxWJttd6WxSBPYspiSPu8eBiEpdqr3gPmw4FdFfC",
  "key32": "521p5degLdi5aBwoPKXaGaTo5FMrpTibjqvQZ5981EaxKdgnU4mmW5qXLiNvSgWDkbmh2Hj4LC5CLjWbJ1kAc2gH",
  "key33": "P36qHXMpjpLBhmAgnADNu3MeZFCjscqHcmFjLvXX8cPdxoQcnAJE4NAeQVD3Up7aU3dhc9rUQwcsASRFk2bvwNr",
  "key34": "mFqxcHV6y77wwR2Nrq5WJp9U4CffvJ2kq87wcKf4Xa65iXtNLbcNiersAUUEP5yNb7Lf8Bpc9FJaNLCwVLSMeTo",
  "key35": "4mpPXvQKmuWeoyWgGGZ9hGvuHqadcprLQTKdP3iXKw7eDwgSoBVnCrn5VoKR4kCVaU5X93dc7i2QiFriFSpfCu5C",
  "key36": "5Gh12xnBvjszhDTy4VyTxC12A5HB4WtuVft98LiH3okoucghPXj2oDMAW1Zx9oqxf8pyrkCCv5WPv23ZRvS7HP7a",
  "key37": "2y6BzKjBjGrfdaXLvzMjhK94FCiovwSmKiH67vRpFFuMiKWeM8vF8nFbQDcYZgppFrkG23aZxLArf1uzDTVoZ4wh",
  "key38": "188wUDeTSUrD9UrMMgmTouxYsB4S1DamTg1TgK85Si2CQHkdHuBCGRnrLzhVhaUWiVoVxUJBa86RjS6h5bjT7U5",
  "key39": "3nZMjNHZxDFAfMXbDtWwJtLYXni7wuz6GVsFLhSmFggeFqbzixYBFv9JkUsmTcSY2CfCofi9TQPFLTZisQ9aoYQp",
  "key40": "gs8KpiqCBKdpUdi41p7PJ8pd4WE7ay5dakEubUtRApjr9j3qntB6PpvcBTVnGMqKTWRpUuKbTUJnoSxwiWCE9JU",
  "key41": "4ExKUhJYPpvBeZtV2PyJS6RgutK4w7VwxsLvUqunwMznqpraR1g4Do1rNxN47amfB1KAeBwBH53M4tFSWtRBbiiF",
  "key42": "3byk8PGBsHcc7n9ttHGxa35NzkMHd1wXnevQRLDuyAB51NPFB2EevPsVJ2quUFCpspbrqBcSnXx7RRfH1JR1ZSv5",
  "key43": "56zCAw6aK2w4UjMcQYVFqPQU9jin8kai1mTaUXoKw3JpdfDALcNJGGMYED9i1mMCeBN98z6wpNneQYBR9gFqYubz"
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
