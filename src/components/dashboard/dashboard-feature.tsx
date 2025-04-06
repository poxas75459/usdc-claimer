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
    "A7jVNPmEhJaAE3VjxkMr2rb7QtmCE871KDuiftxf3uf8uTrP1U16mmYxY3Hd5hjVwEoSbXr5UzhssMPKXgPwvv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twumYsbZft2d2QvAPEZpwrSSDDD6y5uS3dujNmvDD4g5QS1EvFe6zo2at59JfrHJbZWFkaUv2zn7hKegVNyvXMC",
  "key1": "2dAiUxDbvKYN5r4wyunGLhGfpTQbA18nP46yv2dsnbmhXURjRWTjfJvXiyKRkm28ALGRHc6vqxbpCdGRrSfHYutq",
  "key2": "2AHuCuxi1dF5HvzmLZKCeuE9udgMxNjtVAzb2P3qxbtBCEmPnqER3jgCWYq3fSCPFp7v77L2od2eHEFgDYHxnXqK",
  "key3": "2oTv4kNkKJUZSSu2tcrZs5L21BoJwnh9LPn8yKhCzp17ZiprSh8rMXtxood32y8Gea4wNpfdsMtjhZUmyhgkkAvE",
  "key4": "4wJSRkS427wTv7n31bShvQAw8oR3mjrwviWW6D1zTcFVMMMo6xxfdgVCUXJD8WcY2GZXmPMxYEbtDiarS5sbDM1Z",
  "key5": "2h5a8wYHLw7D1JuRwHK23LSRScU8PZUfgBw8i8W2WmZCTJhxib1W1TpKGiX9iqdnUeCCSSsRmfmCyXXqDJR9KiFE",
  "key6": "453hktMDh4bnd16VboK44fhVAv73YE6UqgHsZEPXmXxiMNu8SrUzX5XbzNhkps5cQ8zenCBzSEdEUE9Wy1yQK3Ag",
  "key7": "2rtu2hryFuajHirfUd47u7y4Cm4iioBgpbfBDhHu86dUm6wrzWVQV23a2tdHhzkvKxhCmW2MkYiqu42k3UWboFJv",
  "key8": "3LKvgdVfGvzGjYEv4rJoS7sA89t1UWAnFbvTx7ReLfXL47qZjsu5Xji8Ez2hMG8g3qhNSgoWFc9URzfCPcAUNKZz",
  "key9": "5LTLnwhzJmTkgG2HV8JXqeJnFSWAiKMse3Eqypp5Jih4n1Sh7mNBbAskHYuQEmCB3DbvGjFiJj5txZSNvKC98hNJ",
  "key10": "38sUPry4RXQgxAADTyLqgLghEeoyxeL1RbZ6aTT1VAqRY7urk4UUuz7AMvbvCRY4sGPg7QsG2oFy9s2CELQ6omH6",
  "key11": "44Lgh5UM2A4RaLp53tsoaBEJUJrmpuU7pnv7FaREjU2SCoyQhWFNb9Nd8LbctCvZm5H5UPMCYc9QKdAhx9SkYXwv",
  "key12": "32g3Lfzrfzh4miJQkXn92xhKAjy5fGTTc3T5YFefsPz2VpwHnXs5x4579NgcDBvYcmkMkuRPR34Sb3QADRtFCPB1",
  "key13": "26FEM8XHB4wLgTrgAnKhcG1ry8aizaPgngWBumEWLQ8x9UDzKu2muXr9vQQo6QdJSMpgTEJVGKWruXo2cGhnzk5h",
  "key14": "3YFqneQoZtTaiHCkYUauDRSgdDy3q2vM11aqrKV6PLMGBtpe5wHhokhgBdZHY3UcPUkt4tJZd31EcZmiS2DpshZj",
  "key15": "5WvZ9hijWRnkairRLCBSHBbCBfED8pqWYBbJ1rdjVnYFKSorEHWkKj3kSsBCTaFhyWwZGuhVnmyywDpn3QoiZEba",
  "key16": "kPXU9osgsTELxdLwxR7qTo1xq3BkzivhehFDfcxQZ3PvqX4XPxPYHB3ZpTBwVWR8z9hEP1wZWHtQucQooBHQRCe",
  "key17": "5uGPRkrJ6UCyaUySDBK97G1fpEnJdUj2i8ALj1dTmiVsUQWgVCdDzegyFyqq65waWKjAUjfM1c4N4fEdCbbePZKK",
  "key18": "2nwKYHDzmPg5tKptdZxU2BAHNPkME6am3J6yj2rsV5H8qNqWXATeNK5XtMZ27gDj6YdvnJPuqzknrfwDc7jGejEM",
  "key19": "41toXHEbWm6jr1YbqhisMvLF8GV6xFrbQzy4nVHmnCGbyHFMtDAtuFbqRK7dc1DuquvkuWRDQnh47yjHMXRNrHbV",
  "key20": "5iFTT7J9ue4GEgGJ7mCPaGiPztcNZdiSCMdf7EfgcL5YGXa1GjvvKYwZLCTnxAZfkwTJb1w76E1wsj55aCi4n9Xi",
  "key21": "3LY9fWzCTS1jHFM97UQ5yarVz3JnJk5Ne8d9XeXCt1UmHZyE3fQLkueyXQgbYJPBSL9fjxHUCgKZpTWCma27uPE1",
  "key22": "45Xg4aeE3Y36SR8jRqNoVYSxk49WibyAVHuw8RGg68ubsnip8GHWEXmcNiTw3y1tvWdkKkVf1QaKHuCb6nJEa6gC",
  "key23": "5cFTCB9w2b5Gzn1LMjkXKGDtB4iVzhmYiLyFmtiELg2xyxAGTxB88GdUALCvQgneTFYK1jfU9NLcY534PDBMUNvS",
  "key24": "DYJC8a8FqXNn3cJTAa52R8VoPZxLUvSJBnzRKcdCmLRMjEVeGckZXnu2HjvmcpA1XwCXuCeFaMYybhBn3aeZwyF",
  "key25": "2jqFwjqS5K7p5nsoH5dRARu9YhZ5qk5aWRMr8FVPKkjRKgx2ta6GG7ibBSKbFX9zwkeasUL275FAQvE9TDE1S2TB",
  "key26": "HV23HsridGksZEBqV94TZo8RyaJv5UfqqKkWXd1R8HwNtredhxZRsjP63dTMJotoksXrGiRLNR9EgKJh5EaNFHz",
  "key27": "5ZCW9VZ4wWuxzpRiejbZBKFfjbRDThLWGogHqAEGR6kkLrUEBvvt5eGsyd5MJFqMrSVvqWsfy7NpKzEZpLPPfyLp",
  "key28": "HS9jJ9AfMhiA9jDXiMvCLN6PGBGyFHQfsoP1VPGFGLXFotgpZcAmaGmSZHmFM2xpwpmwVHX1qhvmPfgu2EisYhK",
  "key29": "2KSHmTnQ5fcmwfgfqHj6DGAYJfvdx697WHvr3UkeUSXV8RVffjR8oWxruchKmxB9wK8gVNgqwV2NVvgZaghHciwZ",
  "key30": "4x9g3VBZRBtAeRDc8fxMr1sQva8zUzMRCbucvRWqLSopt5esPoNak9Vmm8F4mFTH8x6wTUWXLdukarxT77J6tpGM",
  "key31": "3bpWXzLzxh2NdEQDYCsLAm88vpbdrFqDxsyPkpAv2qmKxc6CdAk7yRWYPoD24dp7SNoqGEz2y9Z7geFdbexSamSS",
  "key32": "39Dg4jaCkzir4zbrEirpQXcAonwrF1WEohDqyq44x7b3Cu6YF2PrDMzpLMnr9njQTnQXPmjSG3o5MfG8gwF5tf8e",
  "key33": "5mncKD4WeSVBasgQ3typ9m3aXdfcLP61mLoeeYo1sRkh7cKc1hiQWZiWkkTJkW82dQK1c5L1DNDt2R3KPy5x9MTB",
  "key34": "4o44XEUJTP5FavT7uazW4J61RkVi3xWFrjZxdcZrvUiMcHphhEjjj4dd65v9S6uZkJZdBBWVeiu6VAcBE58kUD1B",
  "key35": "kuo89JZ46rjaNwUmXGzqHXHyBQC6wutvKTVfarSsEybhrXvCyZoUXoX142vHFzzQsEG1nYopxoaiNN4oGMjgrhE",
  "key36": "3RsQpJgN6pU5bq16zbxwWvfD6NNfHdC3uugYYvVGparV9LXaBo6ENaxrJoUkXeZEUhceWSDGDqGRgtv4LNQcqeHE",
  "key37": "bMiZRoJfgNXjrcZH733a5pmRr4Dak3gBniUpLoiya8Jzkp8KkUjBftChwuyukcJiCEfCiiXzkUwPh2ek9Hqi5sX",
  "key38": "4ivxd9L5PWtmhzshENRkcjHBPwVdiPbB7QKAnXkgVU91pq44U1XVFyVnRU2iazpZBMm9rdiouNxSqnz45RFdkWja",
  "key39": "3MXswXc19VdW2ostJAvAej4ToVG3wdxXqieWvyLWxViY8677MTAjaodmaT8Jppn8App1Nw4ijpqf61kMW9qRMVHS",
  "key40": "kWKRSLrADmkmeZjLWcfogcareGU7ghvcT3T3TXvZYbGsAMFjkMXC83iSnCbewYFXaQTMxtqU27V1Y2HbimzCkQX",
  "key41": "5kk1Ce542srguBEoSmhkZHUfUcVRQcHYa3FCUuj1MKG1oagizjstYCKtfABssZdYHhRRcR5ZWTBJ12eJH8xN8KvF",
  "key42": "3ouVaLarCXkiXw5pKaPMgAAxp7rL7pwa81fkq16DM9wVk62xva8anw4Q71Tvednycsd1Hjt82DDZMLkX8sPBhRHJ"
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
