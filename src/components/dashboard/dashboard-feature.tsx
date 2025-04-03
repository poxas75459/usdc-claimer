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
    "32JChboUnvLQhRNQUPEaL1qptsMLtsGnVbHPshuH9ZX6zRDcUGHAwfDVNEm3LPVxfWLZKQ3KsNpHRWVEEyAzThrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XcaKiVQBoLByHxXcAPKiEis6pAFRX655SiHC8S5KLSuzhpFkANinmtxNjKmGcWyjprvxuLNuQpmu6yYmgC1Kym4",
  "key1": "wiRUbVdebJXMGwhKagNRKFQiG51PEijvTK1WhwVguMj5QAVWzsxFxZkV1mU6sfe2wiPNTe8hZoN4SR8nZrCM8ug",
  "key2": "5bh63fAJcW8rFgaiaxBmjMsHRuBbUyy2wVZHkwG9hHPwTkvAFXsg49RXM1nYVpn3w4Yx69kpRsSSseZoXHy7FuQU",
  "key3": "da7sTYUKZvRxi3HmfW5A6uoFNNynhGVXrDNJBrQJWvJQW3LQuhAhhSHkXuHFAq4q2WRuttXPi52JV5KmXwU8mZE",
  "key4": "5rkn1X4Mj8KKbV6eMper26Q1wjaQFVKZg3vGz7Seybsufoade3gG9J1KTfUudZgC8YqiW6aKbhYmfjpSYVfRwEV1",
  "key5": "4dy6kVFmdKvqMYKnTBtbfJXsU8wFyn4RwhomnGSffZyhwAroYQSQVLusyY8hG1Q7RYhRhEjp5LUxqWLbJDKwbcp9",
  "key6": "2CUbpavj2FyHBLuHQyS77pj3eDT8EXZeKL1GjxP5FbfEefZTWAGk9mbKjDRBVvt4UskJwxyeo6BQ5o8H9kLiksBT",
  "key7": "7f1HLnqpjnR7n2tX3Jzkj4kj5A1sJ7ssRuvsQi9gGDkHevhQs9CeKGuTwSikg7bZijeqF9ux1yDJNRtBjBA5DLV",
  "key8": "3my5dbA2CcTMN1YzdTyhrF6N17QhVPxQ2jNvtZQeYBMm5AnEJwRhwht9EVfKo1uiDzqwnCjpjaQk9wMDCiXMZdpz",
  "key9": "oJcZs9swenKNkmBtcjNTbbuMsfdosa283cqCtwG1eF2QEw5ubAc9oFGMVFxrNrcxc5dSGeGFeS5NMUGwWouBMQc",
  "key10": "2s1WssoDamYy5LeSxPhC8W3PYyNcGujSp7MhScNfWWLJUZsT9PmwaGVrJt61yqkH3oQyPuwV2wBTbQQ3GU4bD6qj",
  "key11": "4sjrF6QY3GgKwUsYbcLoUiSwxfuXwoawi1xyyMF3ozgfDe6auqCsd8W5jJ58TJUeb8a9eZyG4KYxkjYMKCzMrLNp",
  "key12": "x44ofWDXpzburdiefvriDNnQRRkAvPJfzMaDVks7ZbvGV4ajbtzdWSx2yXNyE5i7ScpcPj2Qo1XEmNvr9Jby48R",
  "key13": "oqDsUYSZKsZtQnuf2c2iwqxFf3F4aA1NNoGgzjHsAX93pkNbTCrFidwzhgFR2X46hE6L5AaBfjE4G18B9bGJw2w",
  "key14": "4nZxbLk4KiCXVNjzDpV3P1fZwA52kxwEqiW1BohQt5odW5VJJeeMsuREFgx6VuDa7dTqCsvEJcCQX2pkpDUNouxA",
  "key15": "2ZhudfNcnjd82mj67iCRco6FjYogCwHazgtxeWqqBjF1UZkunoHwsbWvh8dz9iJsSmwiXxsqEgRGTgtDXy6TH7we",
  "key16": "2awfaT67WugQgGRpNhrQbkydFbrfvuXCgxRjTB1DBHeX16Tt9RN775wjQ6RDz4w5zUaQb2wfDQc2GNq7iNCcdaJV",
  "key17": "4my3VphsWri52RVLavog69uZvpVRTcUQyNWg7pWcCtCT8DAjf5DHKWDYiMKa8hFqeNPj6gmDwXsadqfFvr7EL8YW",
  "key18": "4vGuJbYuKGCovBjRrwSa8QUkkr1KwDHgmzw19wJ5QwoJLEAP9vwhLfNxE7ryBcZdQ6eWGVNFSunKWMqKF5AvhxNG",
  "key19": "51EefoBBZv22bwVNXWJmRvAHCFef1n4YdzLq51gLJmb2Xs8wUWgdc3MXVpNeXv327AfZYuf47b7qxgdhKEeuCRRz",
  "key20": "4x9Z2SdUqD9he6MdGUZkLU74hHE2m93PNspGFTCkcD8FoiTiyot47RYBARVdGodqqS7TfUnCAFff57WdVfqoGLeT",
  "key21": "2Qqv3VkhbfGNheuB35FZgwgZ1FhpfGem9YXSGfstyL7gZZs4MWnjhiSrKgCViHGNtbHHiGmGLqaEQqYFmHSjvp1n",
  "key22": "4D57kYnQ3CLD7Aqp9VQUx2S9SssvnFGreLRSdAZgqChrVELEth5D3mGmAKsDB4BtYkXT6kDg718xnsMe9UrtuVEU",
  "key23": "2SmZdWStHBwWfmCCjvYJqPR3VJPodq8cNNiy1EPEKJR35B8wXEGijzideVkEhiK29HHJS3toLtDDks41BYCyuWiZ",
  "key24": "2tnbUhYDXs9sB2XNuoC9Cq5pb9nnMTKTsceUCs27kE1zEvcxKqDGEuXVEcFTCz9qXPy9T3vHyFgpta6gZqgGgvkZ",
  "key25": "WHHnzbwyUUudUwB4LF7m4RK7gRbJ3U1dLFhFVZFoGos5XFt1hYWcsuZgDGAzHxchwwwMwznhtHtd2g3KsNPysMh",
  "key26": "u79XEnJQq7havtvEvMQEUBXFS26S1gHQfTLaDPmqZezqzjP646SHXFBYNvCfkMQz6KSB492671JYj2oRAKKaScW",
  "key27": "MNNrsBA4nXgtSf6GcLmZCxG8RLR5SBLWHpGTBc6EWyVwkjvqQkT7WwC8Rhw3brWNue2RgyMs8GoB4ms2i12GtJy",
  "key28": "3hM1jumxR1PspsCP3ivsNvYo8tugmxm8YiCXFxb6mz5GYfgnR76xPxDiqHpgNZdZe9sTiomL7XBcR2TLdEoTWwk1",
  "key29": "4VBNtgY1MaJS546FhMMZ3C1TjswnS1GFo3xzjdDFFbra81vPQ1CZnnS2ZNdDvZ9Ng3dw5LufTb5x9wpz8ppZprsw",
  "key30": "3YB5YGa7KCDCVcLsjCteib7zukBdfroN2No7vZQJPbcqRVkwx3L7rrfezMzSYNQiSQacaMse5jUFzXmdhBZXVwVu",
  "key31": "3eiXZynhatsuYKpQax4Di81qtSZhkAUEUfoJe6FnVxv3Tpr5Wr34T4GGHRjpfJbTYc68Ne3XnVBEbhQdMq6pXgAB",
  "key32": "26AWN2DaePcVvEUCVWtvYWVprN4eRsaV7gTib3iDWMTczNA6krXfqBPmHVC9JA9mw6Nwf3TJWvjcgjePRwXfYYPe",
  "key33": "3P3vAoJAmqWxwjQAr4C63KwzcQV2b1YdKKUg5o3PK9yD9thkfdtmwtgFkfUa2Jmppf9GPUkZrsPjM34kuWgpLdEj",
  "key34": "522f7meGikHEQ79EdDdBttWhYCvro3nmWbCdDMm8Pjn8EXuQoYN9BUYN7rxLfCPauw6Z9SshWNwT8ELpB1UgUKTT",
  "key35": "5HaHV1aGx5NpZKXz14WxhNMukKtgJiGU1w77T52kjYEvPBZX8GbanPfB5D7Kpigx2Ag96kpmSeghJ2XvJCaTCNY4",
  "key36": "2M728CkpWyhXG1J7rBNKvfxu18LNNMgxRsJwHnuCpfoaEMySoNkUiQ5ReXnFHmYx47EvEbZitGfpYGq4ssvp7oFm",
  "key37": "4MdbUHw4AXLGzjLz1uqGavsgrspYvDpFxDzp4JaRQEsB7KZEMpN775mU9ckGmA8i9YTo7cXNMegdQvocP4vQdeM4"
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
