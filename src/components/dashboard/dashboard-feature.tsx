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
    "2RSJfFsj8D3oumwLfk5kMmn8jiBNasqSNe3xehtLJooeHrDojJCrLahihYXVsEdKZtBXHHzMYQKWK8s32tSMoXew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfNWRyHybAbUk8zotvA6pxsFTRTYrTyKqH2WK8cRNKvGun45aQNNpY8QpBsc7xMNSAiHRZegNFUsi3weoPA9SXr",
  "key1": "2nX8KUfbmzjBGBSPdbAYajXmBajEWpihitDQERdpY6AHXGdiZBhJoF5UocW5wWMZu1DKpZVdvLoXM8FX6XusvSGq",
  "key2": "2a6rbLZ2V8z1wrjbWo13EgqF5tnFfrABdjGtStNRp1VoZ3P5K9UDcD1MVSRcuWcftCsKiXqihk5SUia7yWqHGk6F",
  "key3": "3PTtsrgC22t9dJgm5HG8JtWRbUKQDwBTsGV1zvNYiddnFF1GpK6BnFjwgpyTBYyDjCGYafDAc5QN97fiqFGpughH",
  "key4": "5xadxswbozLEjhcCGCFk8QaWNZphuNm8vuUYbb4J3NC5wKKG5TXmjvdfzfDHguA3akM55qUCc34EppkjWoDMJZ7K",
  "key5": "U3w7QWieEhy3To5DCugaWqFz9tWaeYWFQTBpQ8UWBJUgNfq7KySxdYqEWCAqUVhbahhRfzx2vdVLmZDPtTwb1BN",
  "key6": "42BwHdPe9TmtBVpWcMK8d7ry1Qd5mCJx8VuVECrvQXbV3pkME4gn2dhPbJZ4eQ6c1hW1t5qJFoPjkTgPSr61vjH",
  "key7": "p329U4qLVS137Y6dqpi16HJYiSXEvATBi5uwjH6wn1ne6jEmywhWVrwsZMDsSQp5gnCocxApKJoz6HKsjoVZUDG",
  "key8": "47Lx9eFG3QMWJebznSTvwK9urD2adNrw2ttvJPAi7ir9QohCLLhMW8FSbzD6g9vvuy7kwNLWPCVRNtk3iccpCsnZ",
  "key9": "4siirSF5Ct85YicdFF3c2p5d4FcwaR6WHug2cUAuYcmh9HdJg1NwwTKDncQUZxf2cWPkx9mZEtoBN7j6tPn6YT56",
  "key10": "2QeGxKmwHxqbGoH8xxL68Rp8iEfBxhaaqZCeaMp1LoiS1UsU6RGzxjYJWeP159ZUxtHLq5PFrRiZVLTZmvYYfgmy",
  "key11": "2dyRCR48Sw8N7fhVSPaBavKi7rDVGNMMCpBNgkH4nhqecZkBANFNHcwPqN7CQSzM9oFzx39nkegTooFgcUHp8uft",
  "key12": "52fmNVbZ3wicdofjEpq6pG1RxRGe1HonEtX1r1FXWtCmPGN7Kcfc6GrCemgruWPqixaLENYFLkgMULrL5D8sBKNr",
  "key13": "66TaTiBiX9NPFN2tAG2jV8T5RERNJ5PcwDCU11bCpUAPDTTjuCeGkPUfupbwHogEdkV7q26EDcfytRfS69CnTYBD",
  "key14": "w7RuiE19jCE7FY6CXgDzs9nBNrWQm1FFc1XnWaPMMiFoSsYbw6dnVXTpwmkBCjhrXizWPZ4z3jPEtJaS6kwX7Jd",
  "key15": "3oJCq4KgUX8VpbM3HJPjTE2qKepyJofjCNp8rvXEDuhiyRKMo4E2REAQVVQrWhEtXecqeqpNMD3BAdYucTeZg4h",
  "key16": "jQKWiftQUFhDCNqD9ZCpRgvb76C5yhrdTX9eCcpa2cVCMFbNigEWubDgG9boXV9GKTtHEzLeE3qRUxRSSPDtTi3",
  "key17": "2U3TYPQ9S6AtNwmCj6HdYqu16CCXkEWqRviMc1CVkAJE7yjeLCGBEtnDkFCQjuADJKR4rrVwmDwMjw1xgMLiH9wk",
  "key18": "3RnWgHQCHhBjwBTtAC4rDvH41mxRopWkctrpNtfv9fRLnxLesari4KSGrWzySJZPoCgn4HuaRgxoG9zp86ee65FZ",
  "key19": "HrcyEPjT5Qdxz5mC4E8XfRdrLERDUXTPrW49HDogmwkvZ6iNPVNt9ubtYQuDv7Hq3EdctcU9cGhqYK6xy2qbbzm",
  "key20": "2LUHDGTVPv4WsUn6uSdn3nERTPdZS166fH92uWgNbFJQDFumM5NUEyksJAtGn4JHsTJs1Xrye35sCo2G9ySABNLb",
  "key21": "213dGDdjFVgCDV6eq5KwjrsgM19zmdYncLE7K7EUWEGG5RthrRCbv3CJRUHxv3ANgbojsY2WUmhqjfn5H7XynGPg",
  "key22": "2VMhqqiwqmEqqgJDPtNBrnWA5G1QewzwR8ULeBAHG6DkCLacyrnGCcYcNHWFr8s6F1MPzAQKU3HbFZqwmr38BuVw",
  "key23": "3z1qfYVbTsBK8xH9qrfFaAadHSGiBom6oGJ8k6CqhHLDqkd7sFbeTfrnLjtXuZQFfiVwwB48B9xvQ4ynhX3Ypyo9",
  "key24": "tzZ2M1PLjp8uJUrLh6PznA8VUMz2opJ23ei3rkirLTytpzBH1ELjwWFU9ERUTBNGNYirdycbBdFSAiJxpzurVc7",
  "key25": "2obspoZ49u5WrEAQJqQZyNyPnV78vJSFMX8UEu3MhUwRoQeiLGRfMGrDkUjJzuQoHJgHb1hKPzRdA6sVdYfJbMiU",
  "key26": "2enAvhHeWKATGnW8oXGQTNh2DbvXv5ckM41RcQYWsjRLYubDZ3V5q2v9TRBgVjmNewLdENyxD3sP4LXN6NRQ9gqn",
  "key27": "4Cz6rzgUF6hN5B7QWT1rjzyMhotfpgiSRqxwX2fkscVCvGWJjrXEExkk1w4y8NvP9esaD12Zjx6z83A2iKhMbi4z",
  "key28": "4WzofJug53PRvrjHkLU5M61GDDr5FLakrfVw8kaWnuLX6g5xj9fVH5nHNCG9j2RtnAjMQ5bdrGm9beGvHQYQ6hbJ",
  "key29": "45ETbwSZarVvjtmZgYYBMizapu8c6KExZrQMwj9mGufGP3bbCFWP5D18DS99YQ2cNrLejnsxjAiH2MbGg4GejFjB",
  "key30": "4JJ4EBNsSt5fEm6YE2wpwGEzMX9cm9Lo9SpWt8KeaReNf6qiwbo9rhHnHsXruTFEAGgDyb3Cve38StJawQm3kqxA",
  "key31": "2Eua3ZK8W1WFt7Sh1AeWxdjSTwCrWxruTCWiwxKxuKhWj4hQpT35KhosCdb4ppKtLVZnCZexEYrVva4U3LVFjW8S",
  "key32": "2ScThnvU8Vy6Zzw8oiaCPezAJh8MzTEmNFcUtDQRFJYziT3WLvwoqfnsEQE9BGvtdLSd8ib6T531r6km9YMZgD2W",
  "key33": "48VwWpZiyp9q17J9Cds7W11YmYRWuxtf1gKBepS753VuM4ras4ykEuEGDQiAcqDjmsnqcL9NAFSH9PXmsVn4HsiQ",
  "key34": "3FESWAh2e2WtzQGqT1FgrtxHTA3VqYqsYJq5jejDtVUqRADkUWNmk7DnpmWJutsfFcgGK4PSZiQgVWTxxPM3AquD",
  "key35": "5GZYgjXh8XCLBEiFGztRQX5DymWBo7Wwhak1XVhDRrsAxooxPF6p9tX6KDvVfJuqAiPzVWnh5m8hXojLXUhUdHQ1",
  "key36": "2UzH6ciEeAB3o7jp2GnxvcEVSFK5h1Kp2VeM6EoD37rQPmpZ1F8YcjouEwWv555ajwM6M68VqB2q2t26iovXVDLU"
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
