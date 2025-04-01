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
    "3d8BNUzVhgVGV71Li49kLpWrh79Y9Z9DShfURzns6k7oaUo8VU366jMKAanHuaKCmEAUEJ7fHkNThLd4N69Ru7vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GCNvFA7yLqde8AeVvrJUsNHtxQxJZDsKn9eVAA2o9Jqsuw5djq2hFGMxh9BdZT7Ec2sYBoj8hL2Y9bVRH7pFdcX",
  "key1": "4PZb335hKZV1HHErhZL5WmUu7CrDsv4pmkLxxxjgCs9r6pjyruL8CrsJ6GPF7TQkm467SvasByebCUoETu8pm1yM",
  "key2": "DqzEASJAJN8hT1uF1ZHSMCSbiwEMQWF5quredCoGdqRHEaNeTNDB1dnRK58bMiPskUfgkurdUBU5frkYV7vgqrn",
  "key3": "54C7JAwUKgFtUi3UUoevuWeh9BLwG5qf8XrtQgQxywx1TmTy58wQh24ZPu3bvMgsyg3FXVkyemU8tWEabCGyuHXZ",
  "key4": "5SSHu1EF7CShnaKcxduGS1VfJ5UWzbHX3jE1Lcw9gt3z3m7iW3R8qprZEVmjst9dzVbvCnjaNpjbuB2akH1xr7D8",
  "key5": "fwxNmZoXM6msbCtqcyY1cVnfUPK1qCBiLKNFyHB2rKq5TMEPdiQL23aVyam8tKCaSyqmhX6Q77gfLZRy1joWMzt",
  "key6": "3sNHwN9A9QEwFyZk43eE9yM5rJPj4s9Ub9mx4qrESbt5dC6jfRf18Cj2Q4vxFj2utDf1ETTPqZVf8EnppHxEMJDk",
  "key7": "3KB9ZSzK8xtjpNCfXVRaXEi4ZbzYEKcVQgMjCnU1mSpaQtH8cRMStyRLPyG27t5EKJsmhkQeuJn4CkovWGUwTCZ6",
  "key8": "26V79qDStd6tRr263NgYsGKJ5NJVthP5VJQPkSjPU9V2kz6wc42HsikYqUjmyRtfAAdKthxy789BGzGMDamhwKuT",
  "key9": "48WvDRtpHpCfJvo8f3ZaBh7zCm5y8LoZvCBKjEbWahaZLqhNToQWT1CuhAHEJiPdBJ9ZpV2qTiN1xCKdtPN1njxZ",
  "key10": "1RYBL1XkejjutRt6vRjsRowppbKtSHfdSdGdU3AcN3xbvFDk4KGXfNLM85M6hELUoC58KQXpgXqHq9NCU78gmZ6",
  "key11": "bgcqo2aB7W4njMvGkk4p1gBRYwTGoms7ywrh4LH62aMT1wbzFgnnA2m4CQJVhC4kFHCnRmYqS8uufFKQC8qGLNC",
  "key12": "3F3zySoYnrUHsuoyRGYC8pL6fthYGujACHnSVu7zsC4c4o3TqTDSapPDVU6JEcs4cEchuVgwH6cWt4M8ZVcr73QD",
  "key13": "gr4AiyLyBV431uGD7YzfTiogrDCM8CnugAmqQqpjrD5BVD9x1Ktkspy775LiSioVQQVBPRqUMuaoNq8LsW3MDW7",
  "key14": "43R8f3Q8f88yTGDwhH9iBfEvhvcutFhFj9KzDjiFCWU5SQdZiWLvXaJk4ASV1L5AR61TGLKVmR3Ab7Zsrxi4z6Gc",
  "key15": "8Cr72yVfB21XpbL2iGe7Yd3KurV7skdfBCmJawpDYyNZMxAytPjzXMDfDawtjdAJWq2iD4U6Yn2eWeBYyBRcjuv",
  "key16": "2dysNjFxFPnKpRjZ7E68CpoxQeuVGzBmPqhrXGW2R2FiGgxVoGuULvsYLvKVoWKieSoQQuvL5CbQH2V3KcmGiWrF",
  "key17": "37DnPXM7YJRD2Grf4SwGqEfJe3E6UDtXrYLmFPQigBapSixx2M6Yu1yjBthcVoc6kit4DdoUn9aoNzR4rmfF1jAo",
  "key18": "5Ypgr1RBw9n9qgfLgRrwbGRx6Qz8HsapzFkV2htqMrUwVaAkYUBLFaWKoyErPe6jrq7FJM2XTrViNT3X6DawT6b3",
  "key19": "Q655WKXMJEHvECDMdMzvyo4BXBZzT26iq8ciSvktyaRQ3VeSqpbJV9qtabGXNzkSrk3uunfixy93KhEcFLzdTMW",
  "key20": "32FbK5r9DxoGJCioVnYQK1D71Pqvso8ZZ3Qs7EwxJ1vhDF61QZMgfBNVPZ7zzGZUNTUmrw493dkTB66f78z8yBFo",
  "key21": "3kwLCHnMwkKaqiQ1qkJqzGfzrvhtYAng2HE7a1HHdMvYVvmAryEHr6BuNx2YRojSiZ746cDCXQk5UuFAUexyY9SM",
  "key22": "3e5YLJdJx6mv9pwmN5rjJ6d6XGbmckFhsQEbTrJyAzVF6Er8TR9x3Df6h34KDTFzb8Squ4NuksDVu3vpe7y6587Q",
  "key23": "4zB6VVgfdL6ZtwsyqeZdtstygywFz8FJUC8EGTcMCyt37wSf9jgS5hwHpXcaBE4TcJ6CNPo5nXGcWqsiKqxooobs",
  "key24": "FbPv3LARd1miVRj8iYk1KKRBDX7NiFykZ3hMnayqLgkRdPRcGdAMdKanyyCkDkR5FtMaYzxAym7qErTKBXVf7EP",
  "key25": "55pCksPGfctRHSegct9EitogRjAWg6bfPPzdUBeFtkgSBH9oFdWFgq3KQCsEjpPUYgv7UTdfWVBAQ5KKSBs6MC7k",
  "key26": "3bEKCnM2KamBCXqnfctuZy2oSSjzHqy1KCabZ8JpZt1zU5vdu227eiP237KEePaCLZncaSG11rnySxxxVSdsc828",
  "key27": "39o8FwX7isoZov1tSjw2JTikAxkQss7jfSAYj3RH71BKtotgQGUDJqmD2VgmJvGQWASzwGfBDnFFwmTzC9PybP8Z",
  "key28": "3b2ecH9DXx8sfsGsLKRjWpkU5czarnVh6vtJiNpokJshZqYaMpcL9MmrYipiEvW8hLTC66sX9e5UD6v9vXDJshWK",
  "key29": "5qbotC9fSDGfrHnYz8xYSW5TCZygHHDPrQWeMvwKZ74iwBv4Rh4UMcdAxSgKZbC1QsLaLV7E3yfiGbpjFHMfA52f",
  "key30": "65SohW2ixxBF5gtMCehfYH3sBrjFKWi6UduXVHUB3PnXaV45wpF2zt1yQvhKfZdJSR8mghhQ2CnHbKBApRAGC8CG",
  "key31": "4Wd3SPBXj55Mz8iPhiWUeqd2JnjQFS9HcaUMB4aFVjiabVY6LUGiEbgpbnJXuPess5yJhcJqoPRfv3KXXhYLFu35",
  "key32": "56VKxFR38iwKg2oyAzXyvCJKkQnzTKv5kFGw1WSBYDnVswtrie1Ga9PUZVVUNM3STXRwSjj8Qn3SsYseHyX7PANX",
  "key33": "2Tv872J6396Cg1LkGpisxZYcbn6QFgTa5A9Ex6LoyKqrZJGfWpYoCoj48M78NGKp8CN48YJpCoKpckMeRHryndCi",
  "key34": "5ffhtz1KfnFfWJAbBG2dwe6ucVMispPgc3Hd5N8oXYicQ81MacsuBWf6ub8JLEgvDHMLHgAoxy4xCQv6R2QKGCUp",
  "key35": "495znrdtPkGAzFmYEmMALbt2hssaznTxVXjSooMdDUAP1bzPuKBxHhLJkqYApZuwcPgADqS8izi9KPD9HjbqFjt",
  "key36": "5YWvinxmU25wtEAs2o9yTKx1yefcCVqprJj5REK28mVuhwQBfsiT7MmGzfibsksa6eeCDzZubmQUeoJqnHXJtZve",
  "key37": "65zvTfQ8YTBEb622DH4g2z7dteuMbAauZ7qTSLW8kCx4BA9A98xi9woCCcCN4mjJWkaicfnPcMHNeZzrLG61GLDD",
  "key38": "3kEW8MHbFV8p1em8u6uRqaLbyBUNSHuB8osS2MaWt5dqfpKM9eZYmxvXSY5XWVTkVPexQcP43e7J7HkUFm3hi38k",
  "key39": "5Hzk2wpdBEEsQE3w2UaBaktrkakqgXdphzYsfbnu8u5CAQTnpk2QTUJ5SLM2QbkHvy6TX1UW4qyQB22KNtW4P73d",
  "key40": "5j8Vqd3PTs5RLHtvKvqq5xn6YgjNH7inJBscDbztFkKxmqpBAJB9DzNe1QTwFfrZETtheVjCtxPQ3mZHXQ8VdWr9",
  "key41": "2QD6h7qnrVZeheuTEgkWToPxaUNASBKsPi8X7fKB7XNYWPzjPpYHtxDKZxrU9Wqion1YzfhJr1h3Bv6NfQpCZrti",
  "key42": "4NqMCbLz5MwnLbvqsodpExgvygkZCth19xtcqGeQqoUduGKV5Prg8eV2q1NR5metosWy5zN4NXw3juYppwvWgtJD",
  "key43": "2kMoVd8fu9eunTJoeQ5kXfmHPg81D3qykAfCknr9xw23Ja6WL9LvPasQkoMsJZXHungDJcB9QcUJJDVBX1VFa4T2",
  "key44": "3HVdsBYEogaWrX7LEmLnopEFpGPtTQ7ZbG1oSCuMb7MPnCUAiWWhzRVF4eoQK9tu12wqDiJDEnobq9GLL9ZVVC2r",
  "key45": "37Hdoaxo9u9KF5QFznrKysoGgwePgfAWnuQYh3NttnQUSQ8EWVfNzDmUjEG8JWoAKcMTugeBTwmrY1GgeGxaWy5p",
  "key46": "2268Ly1HTava452UQFaD7MexU8oY94VAEWpUAXZcrxdExqv9rku3eEPmnNt4sE5XEQvTggocVRxKaEq2QFdrZiCs",
  "key47": "5rUrN8oSdziStd17fFZQSvAUFXKj1uQoXrsd6kKgD4VJGUU61EUmBtSRkmmzA7cU3uT4VGw5oKvxWrF7Kwn9HPZw"
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
