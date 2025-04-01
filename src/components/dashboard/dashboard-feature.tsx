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
    "5wUYLJSiBVqo7jqJu9oq633NVwfbp2jbW6QFdBEa169kFRRaiy8pngjRgFUSxBS7KBBeEJB7C3JorrNSHM2EBbXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u7wXNYCqMfNrXZhfxGwppoY6M1sQdkBh5yNaiQp8bYcrtHg9rsp82H945Me713pkvU7qMxLWQuxTBj8BiDhwXGu",
  "key1": "7EsVoYcqy2j2iMDKSgiKoAWoaXFhT2hDeGvntXPqbr7auiAwuREPXVGuipMfCeqcTfPNrZLSb1Xhag6zFLYZwJ1",
  "key2": "2A19gtN5YBCE5gLP1AhmdAgf2JFb27Grfeq5o8ZVtZrgN7Bv4jwJ3rbEbfGqkANPeCgqW9vPnVkZ5mNYJAtR4Yjp",
  "key3": "EEwccEFi1jBc88CQKMkX4SVSG5Jiqgj127HxfPMQXv1Egi8eMzm4hUKCxJBUAQxbm3QkYkNjmz3NgQVgJXf57pe",
  "key4": "25AUsxHFmdnBp1G5Z3w6JkHmkrCsRQYc4SnhPCkQ1eD82SU9kCQTcUmBr5V78u419UJjUSBxyCqxEfxqHjXyWnL3",
  "key5": "nKBURot6bJffb9GWfCgTpXShAVhDVL82hTbP4DY2f336c2SmjTdyyUWSgjmNKDFv1CnVGwCfGiC2K2efJqKUJMF",
  "key6": "4GuT55Jk95YgfVBYCGt3PhdmpSjDYQEMuyZRxUSHryK545hXJbU2wxDULP3WHgxeFcqw6Eb4mnJd1dSNkRXSW3kU",
  "key7": "2RAXmwBErBQ7mRv3yYyyoApXkT6viuGKcVtJ2PzFQ8J86eUT8BuQZBFbZwu8N94xCWDqdKEyJ9Ra2wvTUizEe4FN",
  "key8": "5aXZ1G55bXH1HjvLUzbwGF4iwhai4nbMUb33nUSYqzVdQAK3eprC9RGkxR128qaVhmvVPDtfrve5Yzjs28VEzhZX",
  "key9": "8Ueo4YdfinquY4KKP3FCuSD7r5LVW6R9Lmdqci3uwyA6h6TzmGMF6BZMqeJrWbfCzKDsSywddp2FvkakSpV7YUf",
  "key10": "4q8fYobSdHM5yr8H2vCm4qGKbgiJfeGBGWA7BuRqkKa5xyCDAufAZEYnFPNfHpWzCziTLixjABpUSGd4VapVZpqJ",
  "key11": "4U1VyRCwVxbHkdjpL7fZqMrwuMTXNANPfx9RnQsQdEnhvJmMoqWrP6j8TvfALP7k3BuGDWzeLqNB3qdbrVB9SBcm",
  "key12": "5SVX47NEXvhtFS5uzpyB2kGFaArQWFtjMQf7MEQF7Ez56SSGpMLCPHXv5iu6Xg5TLcq2CHktSVqHZHTH2FjbtrMj",
  "key13": "51PCpGVzSujXGRXaPWeGnSXTuDzBGVJCuf3NMWurLpAhQf81vZZPmEGMvcd9pn1aSjUKfnG2MTDLsBFGh3JDzQJQ",
  "key14": "3HQkM2CLNJYZhD9gtEpSkb2HU4irRFBBvxEmGMSSX5vi4UPHWJuKoPTN29eGnC8hXkWoCk9N3PwPB1FJfFjJG18M",
  "key15": "32Y2HLsrRKZq5fZcVPyLRt6jFPyii8NQxXDxwzngRUwU4w45fQqwXFGs4Af1EPXn4HrnvNFsyS6U316c1noTHZyL",
  "key16": "4vNk6CWPUtbMjuVMbjrEwM2g1p7JWpXp9YkBfew8DTqkBtcsBvAmBFtJxdvcS9wYndYLBVxMfXou5LX69Ax1LKsS",
  "key17": "5hHeRcTBNeGGenCj2b77QwAJpnvyBRkcKqEXueE6SHu6VRsg67i9SvGYDyiTTUTseaLPVt6TyqNSheXKecx1dBxm",
  "key18": "4Ff298qHuqLjC7vF2PT7DMCRt1dxXuGjh1ncqT4NpM5XHr4vvsJbs5KvWiHiimYdsRScK63ozsvQufUgYiikdf4K",
  "key19": "275imjkNyRPZ9PuT3s1ZgKQM6QbXC14HVKzMA79aCHPwaHJcwXQ9J12rTQWqX7WVQ5wC6rmTevyqNFT62z8hPruz",
  "key20": "4YzTUMvMQMKq5DgskqaEZCpEVt76XpBYzeTpNegXGEmLupmKmePc7JoGhWPpodFmFoPfcCPQXoeQ2tceoPTRfNpf",
  "key21": "2o4qYM3JBowWE7qej6fWdBpL3LuSwqorjaFELZxgzm3WpufzSVzZtqnbcizxrbVPsi56YZcah581H2CE3imnC2b1",
  "key22": "3HT1QJzYYVV5XLyoXQbJjKRdVbwrDSCBsVf8hAzm6KPd7xhGZF6EozLDSdP8hApRpEGmJrkLNNgpxEwfjquMy1zC",
  "key23": "4hwPkwifVKmbFyz4my2Y4mUfn3AHqGfxx19TrC7kb4PVHq8t6VsVdZaYYEXqcmBgmFa2EUMGU5kNRDJdZZwVCJtk",
  "key24": "yLaGZWqmsUbP35kCKXQpoUCTY1p587Cz54oxZbgErjCWAghjcXoaWNGGyK4zDnoaH2qpathZKSwvmr6wY6wkLBN",
  "key25": "4LX69kuzp19pV6pVEda5W4UxDrFDznMhxzvsiV37XzCicBJq4XRcdL1Vfh7PGMyFRMcLaF82avmpUK3wjoLcVvZm",
  "key26": "5oiceKxrMDwTJHvEjFLf86w2q78ocdMb3ayBkPjrb7QbLNM4TVXdtbNSczCqCd6MgwzBFkQkJGgzwZv1WiNzJkBQ",
  "key27": "4yWXhaZWaw76t3r8o6mzuNN6vUUht7S2sxdJfbWf82okytjwwj8zgFN2HgLJbHRB5oEhRFpj6rpi1vwpzFv7YdTa",
  "key28": "4d4EByyRVjNy4oHa8unhKNaK9kQoEYm8m3Q7nBQoPDMSXL3hjztYuK1u6KGq4ickzqHg4M3msQJHPcHRnKu33adJ",
  "key29": "2aVrbwRrqWTCTxjVRFev4LbP8QG7mV24e9opp1SUUTAabZ3r112MZZsxyoojCRpDUeXVrHHQJ6z4vccJLnNEi9SB",
  "key30": "4K6STF7hfDPfF5avD4nFc2wwahNbXkptekN9RJvcBb9zAxrtFs78Z72wq7cPBCTP5F9HRJR7otr9aJ1PCSzoYubX",
  "key31": "59LsjKyjeP3BBBUFEc2F3JEcvGWxXmkyFwSHyz5LLt2fmEdinnKkZNdosxxuzgjSgMM4EFj4pUHdQ3udFrHzhCFe"
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
