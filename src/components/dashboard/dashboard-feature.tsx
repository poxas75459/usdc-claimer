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
    "Wgw5Lcvdmq9oo72GhniNtG8AnwMAz9ouVigfUxM6Yahc4LmfNqfogn8oicNiHwjPLfjTBTohFMzctoMSHMMEVxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vYVWnTUFBsCohqSzaobxq8QCgvXFvwyC4RWB4nKMaAsDssb4Nw1nH944hKNuj6FbLpgS9DzHsFUc4mrq7WJ5ZmS",
  "key1": "2HZQfir9xa3Mm7rBbN224bwtHGq9yXTNRPT5TgQZ3oU5KKDgjwgFBfQGa5RC6VSVW2LPDrnBawyPaC8HMqpnRwd7",
  "key2": "5rVMJMiD7sAhCWTLAY9fbuWZRmTppuJRfph7tmaR8HxADDQx3v4nwvHt4ZnnqHjTKWheZdbtaGYwTZzauFyRfaSJ",
  "key3": "rTw2QahtZHTyoP2jueNM4Jk2NrpWAz48sBjFVFvURQQPwKm7ew6o84yJhK8X7wTn4JG4gbUecrQricgUw7cT2h5",
  "key4": "hYyAsouB8SKuEoJ8pW7gjTf1Npa8quvMrkBz5AnNKwubN6mY3yYhx7NrYY8w8hcM1m7ksidKP25oQw4keyEZzhf",
  "key5": "3LuW7RkSePmbxNhGw1aHmivuz58ZV5yZZenLjQC1Tsdv3z1FLmL2hUr2M9JaByYhGRduLmEtHPZshWEi528SSELd",
  "key6": "24jXQUFjig8GtmXkFryqydPfaAeq2vtuYEzkpAYGhLtz3KQ3NfF5GMWKVbMXKy2MBujhTKfRKPfj3c5eGVK5j5Ga",
  "key7": "5K6gCtYGRMdVfneCfMbBxjr9V8KDjMvB9BwKCSfRMFNgTSDjkVCxJJTmhBjnv7mGT3m4ZMUSVtQiGS5YCPdKYYhr",
  "key8": "2JaLNX755iSq9cDbk5tf8BwZuTNLmAjkMZrJhK5si3kSypJeVEy2fhWuQHAJpUZLtL7o2ZLxtVEJV4aDCKhdSHg7",
  "key9": "4uCg3WF94SfxNTLzgQ1riuNXaEE2rShfNSFEJuJCQHKWfi28QTbCVBuLyVoJG34WwfCn5n6e5HWzYjzW7Xrd8fop",
  "key10": "5hTH16KabmApGFdW5QfJeLEJww5wP3kVt1kNrQmwUidyD8JHRYk5bNezJWzqeYpd6okMPnov9MQpS82WYC9wt5Pt",
  "key11": "5xbMoLvytsDh14MQSH3LnhgHjRV5GPNhc7mqnG4K1YMhhiXbFHFRo3cMz9FKhugSmp77YCUVEHCE2VwUNR2vmBj3",
  "key12": "5WxNYCDABMZs99iGoH8fTmE8nFbQcS3dLih6ghSJCjhTQHNU3SfQ9HzBW3NP1UZFYzxumGCJLpJ251EijMHC91nq",
  "key13": "5B1Eua7c5iJAseyzb3rSvMNCK5J2HpSU3XQGZ5VFKgzaozJNJWMJbHSkPpQ7Jgwhowq7LGq8b5LxJCkpDAaE7q8x",
  "key14": "4FnvYdoH3xCFfMug7ZvBJGpYdhuvjYTWCGBQgtEZCoPGzu545EaQrM8sAM7eAJPPPKp6vb6FpaYEY3qUvdxttQbB",
  "key15": "5YKbwmPEkYiXa6gGAmn6QjCE9tsZCJkNfsSPXcKWyEXri4F3WHUuj8anNAtPrr2XvfbGXMfyXEvsc8kdwwA35ArP",
  "key16": "5oLqPEaohoRzjrZE3BAEMha2iYriH2DLwDfqVAX394Ebpp1kGhkHPtnqn1zDXNUS2CMooTT2WV6Qd73MMUqdFQtB",
  "key17": "5x24mdABZ1kwGB2pNF2aQhMvcW39V98vaowgVDqUQic4bzztWkydao8nM3mZp6d92PeyxGtGM9mJqJWHXfDZoFEW",
  "key18": "2CpqnksXB3HzDxf4AC23AJPiP2BAq7WMi8sBd8bm3twxnfDENGXiyXDDHLQwVsfRKwBZPgrAiGPcTSiintLMCdWs",
  "key19": "2Z9Ve6SAf2F7Nq42svVPa3or9QDEr7RadRSzszP4AtFmB5rtUMW1USbRuQkVaWLTuVnSBBq5kKrqg2B5sBekWx6R",
  "key20": "3rf6kqwFUWPQyTVgkzAGJBsB1uqu4ELHNM89kTjVgGBfSm9bQ2431iH1nGXYGePiykgk6Ri3SRhrFFhCfyaY2BsG",
  "key21": "3jwGAWCASnKLMRZreNiaRFsBuwzmC8iDqVsKodd8zApzyvqFmd5mGPAVKPVHaP7zVytKc2uzeKE4dTH59dJ3XZtb",
  "key22": "4iMGYqqUAAydBwJznyFAcWagGiL1BTsR62mRRm4GenirDTE97GNq6Y5BHtJrHjRGNnJNVA3CCxm5MRH6eN5gzrke",
  "key23": "3U7eJZ6MWxfiK5j9GBUkK3Fn5kWYZoNuzHQ5BdcXqM2Ed9eYog3ZaDBx9PyApd7eYSkpsLTa8XrL3SE6dhq5bnfn",
  "key24": "5rmggiaPJzZfhrYNpM4rsQ799gkUZvusb5eBEGBDk79XzN1hYHJ8C1etMqefMw9psEYsJ5NLq1dcwwCX87KzrtxH",
  "key25": "5iRyHPybC7jVWuydCJPfUdBuSbX4W3MRmeDfnZf3ZDseGt5kAcHkaMPxRkZbgdzoBezsD2iW4yBij79yK6T2at5p",
  "key26": "34wRXycev456hvV7Z1qCKsRFrxizb7bCAJ38UfMDG4q2QcvkdeC6nY8decLeeBT3rwJUXGAQWnpcK2KY1hW5aPKY",
  "key27": "4wGQ17cqgxtQcp9VTrtcruUhpZqD8U3ekuD55Ks5K7zEAAMdKZy2YwMYpA5q6z7qbSjRTFBiitizWUW6VrfkQrm8",
  "key28": "3ZdBC6dN5f7ezvjHYs3L5khRqbmoSo1n1fu8CNQ2HrkTqjTtXXX7CY6Q3eTFvjG8Y2tL2kyAftMTe4zRjx1fLofh",
  "key29": "3PLwMpRgAxQdpr1o5u3GPwTRwWyK3XDUJ16Abq1FfJejKDvkTLe3rput8rgSPSWoPP15QUDGuYzJB1Juqi85ZTDW",
  "key30": "5NYiX4RS2hEYaBHFjHrSZqCraqm13SwNVkxSGxPW5NPnTiPWKdhMEzEa5cXZsSJKyTn7pdNjbUSTTRWnxkUaSJia",
  "key31": "23x2kW8ge4ZP7aH2iXbnHwQinp8AFXzoR2VaY71Zb2ZSrGSVfS2v7uMKpTUrFg4q4he8mQxWibKPkX621RavUUK2",
  "key32": "VPzYyDBxPpbMC1QYmRM3buuGSZnpFYyDBN4QPgBYWVszD77fZRqiQ7F9xKkKGALHKNasGJ88zZxVUrnCtEwT6QV",
  "key33": "4HttGpqMqjd9YzFq9MZMKTn2WPNDUYu4HMQjbaa2xNxyeVDadaFMFVzyj7iecsEUknJbdVFGoRtAqrJnYFLB468T",
  "key34": "5SW9NMP9d7Qc2nfYXetik3SmAtxoAkSodWMGHhMUNL6d9necNaxadG1cme4nys5p1JVQDjStc2aqt8XhwWbP3gu3",
  "key35": "3yhttVV2aYXV4UvCSsKwCmcXa6bjVey8Z5DBLjEKb7i2fUxxRhhQciH1Ddje6V1biSa2Z2JY12N8PazcyvMpUUms",
  "key36": "49TL1C3hqAxRuTkaxCuoSFXYKuEgsupPAP6HaUm6AMqvmGeU7V8o9iDqPG4HcMkgY15VZsRNe2kFSZBCSSbKiFEY",
  "key37": "4e9Jv54rDE6Fbzz3mrEmYrqtFNa3cQC5dHrQqXoG6T9VGKTvq7vZDycDgpdJgorrZ5DWTEeWp7fxwbAHhvDPxB2s",
  "key38": "5GoQnAxxnkH4Gc325mMDaDK3feLwD7Nn2Q5BMVq1q3wqqm4imwHWU1ka6avSwKuv2oPDCQrxKrHQjbEWcNoHXdYf",
  "key39": "45on3imkYkdZaM6Vv27vMdtRPCtWw4nQDVKYGaQZzuf3S3KGG4y3DzVFH9Uw8u4jHTJrZh1M8npXAP38ZHN1Jrxx",
  "key40": "2GKHhVK5v2smKzNvpqzxvTJFTvkd8pZAyPY6H8i6BsFJ7xsfjic16FBUn7yBLHAwLg3UmM3mgfpmDFxcuqgVVh73"
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
