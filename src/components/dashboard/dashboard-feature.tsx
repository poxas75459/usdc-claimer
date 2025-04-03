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
    "cApGxHjX6KgUoHyGehzTh7X6GDCxo3gYE4NVrLwa8mpoQZdAeGPr3cDZhKzE6R9A3zHTSqsmHDWpiAM17MpHXwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4LqpWLdsLFDpmjA7CR1cs1RmLbebxqikWXCkASSYqFHYwaccHH2w2W4cSKHggeE5mQJ8tZqgZHmHGyUr6iTpfd",
  "key1": "2ncuNTwkMeNZmveav1pCrBG2gWK8ohPFeZoNr3stTtc7s8LVu5gc1Hd6mjbiLrWHB25AdZvPauVj18jVQ7xbcGvj",
  "key2": "3wzx7rKBzrDg34WCMQsztn1wE4YPkXj1yMcXQhzR1fmX7EEMP2Tq8nwi7p2VtfXHSjoipHZ8mCsKE26zCXJQpgT6",
  "key3": "5HbJKT5N4RmUqhLRCqtwmMwXYAKbFG4Lw3txNgaiFXDLexjvAnZGGNDrE3Xz61DfQhB2QepuojmfiPofHkDeXasp",
  "key4": "4QTunCdDGo3MS42ceN1A7d457fzj468K52hgZs7cHEY7sx7edwAE7e4yJsdDmk4qRjNTuTne9ugdkd1cw6ArFCdm",
  "key5": "44xdhLQewZpo9zn4KWwc2APFT4Yozm7yj4e7fbRCkJ7GzkvhYTYYcZVe2q5Kats4pAMe9RSrrQRucvyvrsZvoLCx",
  "key6": "5PQSBY2mBmiC9nf19ev8ZbwZaGMv9PdzbALeUtMMZym8zMcY5gzMtpZU3c3xTbP9iBwkAVhPxJagZq6oqSfdM2yz",
  "key7": "62hdgYxpFvMfLuX9WB5WSZHF6MaeMZ6zdgkKNtLVfb1AJYKb7rGxpdKuVrzuwieSdXNxZxRxSjg3MSz3UL9CDzkf",
  "key8": "3DfBtxQqU2UJju5qhT5DMdduwwuFSAGC7ZyvdUJNhc8rVRKZ6v42JTRNG4YMSp8T6wq3J2Hk8KzYTZPMpEr9XssV",
  "key9": "5uW3Udessdto65T46Fn9q4aS2GDUy2YynduguV9AE6Eoo4ABtFsJkiMjNdNedUv5JHzeQDR17Vo4YHV259Jrvxjg",
  "key10": "4itXL2P5KCbEB9R1kkmnxECSjfgz8mzLy4xJUwd2krXR43D62jJGhyeVKJ8s8xNGj8ycfzDdK95mVYZxTR2e9ceL",
  "key11": "3aASszEc1U6BwkVAPMp2zLgJgcSNWk4XL5m5nJisLDyTBYFWumBn9jwEUQjRocWvsUQr6DFwMHEFXVhT3GnbjLSu",
  "key12": "5vMytp9bH5i4UoQnACGKTm8xKojrrujg9t8Fwic7FCQJJVNMQJajbfKWNZZo4Cy4JCTs2wq2ApfeWWWJPfEadUKC",
  "key13": "4f28B1eYzxMGerRYjC5JSvNHEjGsu1pV8wUuTxdmDTGUWcKX2i1ugPLX2ZQ2VcjNuhwuFKnAFjTfzMy57KAWuR1w",
  "key14": "2BhtfDW7YoEuUTTxvPv6DZ7GKz77jQ2nvGiZpwhnvJvJyhMexZeHmVRdaYXMsYLUJ6TwCSxvZvof6ypBEnLCiUty",
  "key15": "5mLsu32LFTHXL5VsDktUeS253s9Etw4tHkSm8bPDZZhEHdaqQp1epmMRKEyUiPsqx2vg5di23Ub2QTCNFxvxPe53",
  "key16": "4hxzG3awwTUJBBoi2mGQ3vy1xk6RxA3vfJhPhkKXdfejVUHaQwmcPMKWPo49MRzj9Rm9mphAWi49b8DFGXcyWqqN",
  "key17": "4ygYJRLpAWmVvtWLArpvkdcMFdTFkT4k9Y9R38fjqZsmB9CcYEguJdnR5TFaCnh1Z6BoXV6cmUHahcfrjgh5jtiT",
  "key18": "reVBdx1EfWCbYx9tgeXExWwmgmZBeuMSnt7cmFZQ8HS1CzSYhtNwToWHZ5zimqiEu2wMv5CqDCk677ZGmFN7dce",
  "key19": "3KZJ75JSDLwSryxRX8dzytaRdmEgVgqPdZD4KutMiPEbwGyLSNjxhNVu6REAztbqNLtAS14Dez87rqsYgXCG5eqv",
  "key20": "5Pvki5VHE93BoPm9LC5PnwaMi8znW8BwrA4qh3mmTeKLusbdefPSQzbNUmktkPLXndpjoNE1kbnng1t6KwuuFbHh",
  "key21": "25ox29Avpsc9iAVLedi3S2mmQQUx8nyMhMSgF696CpTm6rdbVDPpHVJMZk2KDzZWs8tsTGyR7C4MLWnxL7HanyXv",
  "key22": "5XRHvH1dKrHtRDJ2BsgznyFvqjgLj22rrKFvrSeLbkGNUrvUWkfpQm3s5gCh6dXBGWCm3jp166LBoK7ZJCCkt3nc",
  "key23": "2QqukA54q5i9AxBE3mWcsWeHrEKhDbZAjnbFH7vuer5iUtQY5jk4X6EbBzGk5RKT5DWShAvV4cbmURRuLFkpxY1E",
  "key24": "3suHuatSPVKdpTkJ8tYU9nbA3VPf8XaqfZ4qhXK4CvY7idga1qCZgVj9t9it61SXqQ6Dc7HN5CVzfuq82FabYFd5",
  "key25": "VTxg7HD73EP3iXSvWtMCPRXYNTfK8aVv1LGDEf3QgdCNojKjwAQxLaMDKvkC2fdkpBY36M2dxSUbGcM4SaUeGzC",
  "key26": "4LaJvbXDqdYHB1XEx8XemoaQDiTfVwqJFrjHZWW9wbT6q6usyuJKkSBYVcf3EqYGHC58kakgUEfrYg97JZTMS5fw",
  "key27": "5tyurzh2E9g1kQfJaDZwP58PQCJn1L3Mh7KM8KpNE81FZqBSX7BKMRuKELqTfEEeLig7wa9aP9AAGQ71czMShJu9",
  "key28": "3vpJGDByUdnXfGzxw2uE9qUaCq4onCZ2AZR49Vhv58jbBCmrthezhMDgfsdzqSGznMtq1uCJwtnYCiZJ9CdCgXDw",
  "key29": "2vYPJd71i88CBGP6YKebmpQoAmKyCxmEyUCtpMbMfWtjoKzM2Z3sV5tyVVgYaji87uYh4hJQgWXXtTA74GzbkqM6",
  "key30": "37863B9M3egmVyAA66NxiCHMZm7TvnR1JbGrjm9aLKYStUH4bCSgGtsUowmYVenEw2cDYycBQXCWyBALfW8ULQ6x",
  "key31": "Juf34UGyGCuGLLb1p1xUmCh8YVkTGC8gVdXUfgjbaft1SSX2bnjktVx8Xts3krNb5RN4hKS6eErhgN8mybgJKZP",
  "key32": "3frFayicHDufjndZbTMD4kXJvK7Gs3S95mQy8F63puTbH4YBiKm7mtmFtroViV8dVkhMzwcigNrgnu4D8C7TdYyX",
  "key33": "wJTT8ZngHczcqkePEoFsuv1ZivYqadFePixwCQwn8qfhw7zuY6ofTLfYskbx5NydwWX87SDZmCbFg7DXPTC4SDU",
  "key34": "2dkFKmNTBNnuzL5tNUgcuPCfY7ehze78Db6fkxwvESffCLNxPxBZP7NfoCySjGsUigmJ5pqzkLXGzEgussdMm4sr",
  "key35": "1J9o3NxrQdDKYPS7ZV79bNGUsFt2vdS1wsQCeRShNjf36ub1PE92Djteg8vVL6DMy1s3PCjbYxcsJEQCMfVBXDL",
  "key36": "5Bw7JwU9aPkCVjMxUNvBBThL8NASvyuEyr61KatNYk7iST3ehmY1GHKDdBd7XjygtkGqc6Mo9Fbnv4UL3TKrsH3p",
  "key37": "2wEJ5psVh4SQfFE94eMYsU78cKtqgwCNPprH9a6eGaZbphnpBSSugdesB4Q7KWP7k9V5idzFgxVUxfXjsrnbdAXY",
  "key38": "4GmKt27Mgoxmjt6hWpGfgzC5tALs9c8RLXQx4TT1Dzpt843nFqBEjL7hHsqrazhpL5k8GMg7ZPEKCyyer5E5EnKW",
  "key39": "2XrfLQocz9sMBTVrBJXdwJw58K9rFsq1WBdhBtZNcPae3cFPJRTwq3oqurbWG7tvcvFLEKJPGsU1y4zz4C2ZmUhg",
  "key40": "3hJf2VJyvMTcL1H8ZU8Dovv5iQuqadXxzS2uBskk2JziACtj2nto9wqzerAHrkhvHP4LiHNVxT34uzAU5QMjcqXg"
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
