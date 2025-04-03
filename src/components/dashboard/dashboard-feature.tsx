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
    "E2oTbz1Pxr7q1HswN5FnxAQ5XtfqZqpW1gE6GaqWA6GK4Z6GzLw446HcCgT3sGFPCseaM84RQXGQE6qDSxGgjd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPnZEUA5e5wtpHGojKDH14pcZbbVYCLPetvVTnB8moVFKAkvz7pN7GZi7VZxDx6jRkaVykKjiNjQVUk3thvaBrU",
  "key1": "57GVwP5Rkr6X9hfGvpfZQ8BU4grsX2EtLDHN8wjei8JGjredVr2JhhS7KJc4a9st3a6HLLoTKCdNX6vMUcFfa8U5",
  "key2": "3h7AHDa3k8SoP9sN9SANm5S9QXZYRUAjbMhg19tC7Yo14rFuYyc3omaQFaCGSxW2bvoQQfmzDDEwHvmgzp5oG8hE",
  "key3": "2sSAi3epH9BandZa6Ub8MddETKMt7xiWwrp7XSDdf35jFjkt57g2TQw1L8SNri2EarRZeLv9SUdQBZYgwdhKnyeS",
  "key4": "66jBYzN25fiiyxMftgjeUeZRCXxnqCNRrPqexjd9tLjcB1Avv1WStzXcSvuT7bUUE5dGBq4BpPaWDvjUQmRGu65g",
  "key5": "2NNVkEqmbrmThUHsL7HLbvcAvpGPD2fDMY3fHHVAkwmJiBxeejdmC9hLfBSrKhL2Dyo2uZkV46qeN5Nu5J9XxE2d",
  "key6": "3TTunJvJjUXNXuHwZLx45KXNVYsUCBQiVrHkszY9VK5Wvqm7Sb1g4JHTvoi7qZp7J74Uf17KHtxjfaqvRoxd6zw7",
  "key7": "88JnTJUaxiTXaTjPAwzCWw55q63f4xP7YiBH8Eqp51s8AE8Kct5VdUCtrRJEajK9WB8BtaLq3aP6g3gj44tiKPA",
  "key8": "eFv8QHT1U5vBBnXov8JoRdxfPZA2BQyrWAYxgGSTQ2a2tDAsnVh3t8jDBa4p3Bw4oySbM3u3NRFFBw6oPxcKkvn",
  "key9": "21XerRCePogST5qQDJn4WYfv3uXKXNWFSNJAKk6AygSJXr3YuJsRLHLw7px6SWWUCzfhTD6FbzPEK6tgCe8moNSC",
  "key10": "67EM7jrSdS8EmDgWD6oaFkKbe3Xp3ygLdKJUuyuZHBoCb7wUFL16qapJB2mXkpm8bcyUZ4WGA7NcEks9DzcNFzNC",
  "key11": "5r4emLcgXCA9TTx5PdByMWtuRoC97vUVESLGbwPFEAmHzu3VJYGU6L9S3o46Cedx7dcnfrCJvvTeoeC3X8xwgrHb",
  "key12": "2FxrCGGogyxqoTeF51CNSFpiYcHpq8EbQP22eGV2uRUbrbLEraFN7ochsq4sMBFMZWTMPEkPHxhV8A8B8pibY32c",
  "key13": "XuGhK8vXqrFaeAWaX6i3q5y3fACRqCZAFhdddY6LagyCuLrb57VC2muQkdP1ZSuxm7yUjML7VXqTooUfYt3NpCH",
  "key14": "5SFhPTcejvUc3YvJWbRRFthrxFNHX4pdhzfRu8Nv8Q8mNVt2Ka5hPasjLtQRjofGzAfgBKErn1RHtyYqmX2b2FwD",
  "key15": "3dcNTa7rCUye5eTaVA8xavSxzugmMuzNzFWnumWsQSz1NZBHNhim7XRRt9o3HFfh6GaYASGPeriyWwQo8Xm6Yizc",
  "key16": "464bkc2HTxEhq9D5bCZxxQWXdWksHgMR6UmTHWe8EBLvzSjr4pWPQrA4TWjxqf1c3WLkRAuEhZdabetLiqH1wnVR",
  "key17": "4REZufLwx62PeYUsrQtoCZMLGmkfx3hkKpdNT2VTJJPEXTysGpRAP18mFQtCRD7byjrmx3vmk3T6VRU9HCYB97L",
  "key18": "sdK4wX7zCxvE5XT5cBgMkzVqTeYK2mR9oU8j7kJgnuVb1avU7KrALFpQa5DVUQtaGZQdEk1qrej3MHWH4weR9Zc",
  "key19": "4dy9DSFmDC6GX7zCZ5TRD6ezAXS8Ws7fc9u9ALuLA1tD66KoTLwP9yUgCcB8KKHZSNgWPkvY3hUjhkjf2jpWYMGn",
  "key20": "5jhTvgwPR1t23h3JSbkjmt6JkzhGpF9zsUoSvxkH3N9GYBdM9zkH4sXBVV6jpwUAJEfWwLAKVAdw9pBbxA1hcTVs",
  "key21": "34z75oWLJETKGZdPHbhdiN5A9pP49F6xy8p51FMmBGngJtngmjRqw5xkKh1s17fayRWpmeZTbNN4RreJ3bCvaNjX",
  "key22": "quSyKs6BT4qDAmtyJawT8CzkqiXWB1RA7wvb2KSE2cv7cKqwrHHy7aaQp3eyj1vFo362jDa6BbyuKVTBJPhqSso",
  "key23": "2Gtd3xWpt1TxES6LuDCuXPR215E71VeZYeUkufFD76An3qUsnPssVTAs3XtFHPHExL6tvqCf6C7EFpyJwd486bLR",
  "key24": "4F2LT79nhnBV76yUhu6XitF82hw4hq5eeiJbasuXq8zWdPtnRf64zZBhFR1e4q2tgyJGmTkfj8aSJ1az9BSc6pRb",
  "key25": "NmNHXU5xARZwHK41AhEa8zVwkwmGAsibbiRQJarfUWRauQZ8UrG4g9AscrKzaP3yM7Tk13pSnfqeipjxjeJUL1s",
  "key26": "4iyEkec2Dhob4fPwyEPcJqfqA2eKpavNBCZU6UFPDzq8ker5miN3J3kEdJfx9UKYf2rQybxFp7zGu3kYGJa9aqGV",
  "key27": "4XRBXn3kcX3boWQuDfMAhrVV8EroZo9jKs2cJTumn7aDuzYYantkTLVxrQQbasji2gDAorNbQoTb2B8JyZpaiNx",
  "key28": "5sm3p43QbrDbzVPByUABfVcyExV2PuvrbGS13dtJDN3o4Aba7K3ijjQ6MVph4Mn2dSUu2kAQq3uTMkmUexD6en1y",
  "key29": "3CU32BFXg323KpB8S2cAwzssKbCW2jkVjigyNjm9HLWjhHhKTkjxWnJLWcadajLMywuSMLXEd7AeUnNyoxDKxC83",
  "key30": "X8GM2dXhPKrzJaz57PRbbz6QvXSh3V1E4aDFdbHkmeD9hL235dNFp17QyMfGeu3ikZeQgUHQ22qWgaZ9y5J1UZU",
  "key31": "4z4TqhLLqRkkfEq3y73V36QUedRN5R9vQEzFMEbmWxKZEq9VJFaigdJSn8PyqCRjjQdVZ92qc2yFoii2wwan5Cej",
  "key32": "4dzynEnvPwLSTeSZx5ytBRmBRnHxB5yiKQ8KqJ3FKZQPesYvbSw8BTdnZGWAmwmNyGDtnBBSCP4Gz5aypRGPe9Yx",
  "key33": "4FPXAk1Pg3aERZW1pe4ZipRf1orJZQmN3ReBzPvFULhTDuqndfyjJBneik6ztEZzWyzRp9n7XCibp1VKW6oDLxLD",
  "key34": "BoTgWe3fuFMDFkvbFjJXFdFtzqxS5g9Jsubt2whebbL2bLnhM5MWpUp9KCycPVnqg9Leyp4T6t1dsvggZhuv6rH",
  "key35": "2pKm9Mpzvwdq3bDPMsSrWKaDcBLhqBKrgPE8cccr8o58UN8As413un8LaLABocva6fa61ggCsxFVHbEauAW9uoRm",
  "key36": "2cqaNvno6j7VuJRCzhbQQoiUkDxFE1jxKns8UKqcvVgmdskeFwwnfpuo2CfXZtgGEnKQJsb8uQXMCxAqy1ToNsRk",
  "key37": "4Bj9yomhvMUB1WDBsrqWLAWqKBfBM7QsqFuXhKvcdiwRhR5XCZR2xaLonjYAd9zc3BVS4ksJLvnXpQznkfh4ykuG",
  "key38": "2m3PLRd2NmbYnCN1Bm2sVCEnr7gVgAZNKFqS3i9YxDkrJxzBCvosGAMiHXDhj3t42DVefrQd9U7c9qD37ceWJJDX"
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
