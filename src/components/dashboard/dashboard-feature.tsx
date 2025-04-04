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
    "apmFjaCuoi697vbXPCMHHTtFtpMj7nParCYSUwiDDMemYJefoqFTijfyqaPTjyGG3jPXLSPQahRD9oFcw83Wiyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36pSh9uuTUsZyPvYEa9pQ1qzfpfmVTdLfTwKMgP8dnVDFzHxEbSt6hMmZs5NMHtUktMRrjeG6arWeWRQb6SpoMuG",
  "key1": "511BqeAeuvM4gPKuCR8cbexEZbnHn37V8V9VXG8QxNDzao3ZZRdVrtHBWGYLKLaeWerWMNCEnbsTgyToTxukS8ZB",
  "key2": "5CCAwzJiWDWVnghV6TtJ4zrmmZRFy5tnZcn6gNQKkn4E9pX9AbSDSxdn7XeCbSuFzj7h8K2E4CV2HJrTZog21yu5",
  "key3": "4jrSsWwqUej7kSd53U5bfMdjcefGSjN4YcWH4MVNgGnZkC1Vm7UYr9eR9atYFpphMAqcu9D4eW2GeiQ3m3ZhswkD",
  "key4": "3AEnkBW53kmTx23uigWvUAnPv1fM8vPfyM7ni18thhP1cD9qC2d3y5d67Z69KapMqUpgw9UFZJ7uNSbBQRAfSmqU",
  "key5": "3tYTGyxKy76HrDZuve1aCspCq2Mt48Lvodk5eQC1iGfh6kHUTiP4ZLhMZSMwGH6xt3xC3kE1Md9sxAX65ND9RaMq",
  "key6": "UFCnNhSqbYSkg4UJvQTrTsmoowq1sjvK3MUXbCfMAWo6m7QmBpWisL3Ub9WhFDwDRNLEoWjrKQrYbLbRfx8Ytjy",
  "key7": "3iHFQGnrmHch5EUWXV7m9TTkBaoZobdKrjVpAj5ny8wR1M2hajLd8au285dmvUTFfrEfHCKKGNmNJGtWcqejc9Ma",
  "key8": "GG9fT22f1uxA3AjuQ4L7uGjLDMdhTwF96rjHPnbrjZe923ZAbBZXTHVPctoQhASJDPhjhBwpFnBfYjqLwbnxhD5",
  "key9": "2V7ibh56rvaDh43KAvoJqsmt63fkksJaMo2TRogg1MVHwivw39qurVU9AKLfz2kCQyFxQK4LC3XM8VTxUwSTVHc7",
  "key10": "3x91C9eikj6v3Sb2eN4t3DsG4eo6idAkk7t1hjFVrECtshPbiwXsbZzHTL177ZN98bWMorqcxcMiSQaXvxLvfeqX",
  "key11": "316wScJN9vwUBEMRZWfUXgj436TQbCqc7fLtzZQd35BoXZ9QRLhWAYwdTRBQHhxrZh1NeRM7XFu9xVsuSRPNpQNN",
  "key12": "2sBDnKu9FwJ9ydF33PvyaddxneT7oPARH6PoeWfcMoFuYteXEX7diWzVLGa288ogcKC35XbMiRggSwW6f4tTjAR",
  "key13": "42tp5f6MW3eiSnHD81eiPXaMbumSqUcmysj3Vop2JTnKtDVX3G7FcQcDtXJHP4F8NbHtQ26PBgJMBW1LQCZkHBt5",
  "key14": "3MGtjZr2FPnGetjixA2hfyjBrmd8LTSz4EYnJoCdVdLSaeSdELYX7PokkhfcyiPGTBvMRFDZxcxe5LHecpMNtPbW",
  "key15": "hPjscGsLcxfy74t6QSwjzMPYubsP7LkPMYR66tqemyUbQZz1x22DbHmanDLMhCpCKxBRXNkzNis2agUMZphFob5",
  "key16": "3xp3mR9MkZKXWfryL1T3UTuYZ82FjAriwvKjpu7zPNrHqwLJ2A1NCpa3WKPjnryVpXg1LEfdnV9L3n4eYmkK5T9P",
  "key17": "4NAP2YcbAE7CkVcyKotNo3EHzBtyoPBRvJUKznZ8WSqdFRaTNG3gi8JfPUsFr7CHCG4FqctJJ6EMPCzr6tH1yBrk",
  "key18": "3eZfpWwTb1WJnpyi8zpxontzBKp9UFZ7n2gwV9fmMdZk3fZeZQSzJFGcajuUaU4Ubp6bHEVdN1kPU8teXjyDY9JG",
  "key19": "5MHsk9kmYPhLS9CwXJJe5YjmHy8GJjtuXikULLacFZSQyQePpFVSjcktYBxrqFXpGR9ZncgsR582RdPgzW2764bq",
  "key20": "4b1unfBqMsbRZFBDvnDNABtrFZmFxvZ2LyTuZNSt55SuH4cbHkhkrPgcnjZDHbwtz8D4gBcFESB7ZjnKsXW4JKEY",
  "key21": "5iUdrtDxs8MpP95FLaryzgRNiSmwc6QqHUyuzcZVTpuCAig8Egpk6J2TTjJdCAydpNUDkxqFVFo83Dr5ypkubMeQ",
  "key22": "5aNa295ADk7SC7LKFvUphd4aUdu7pcamXq4JKu8rigNpWhjFuU5DQd542mQgd1S7vGDVzWg1mzQaQThJaysBdSEF",
  "key23": "rTQnWgBCgRw7xhKMpEhatUs8vBHNCNT8QjbQ44UYxTzae5FhkD1wC5cwsttvZJuJDgft93nABezspAcwfrhAwHC",
  "key24": "2RtUVWjVmiUwtKXHNhaUuXgqzDnCbak5wrKsb1XzywJ7595676QwchXVR4qrxBM8tmUUKLqsrgycbwGXPbtN23MZ",
  "key25": "4eJEX5Anh1ndgpUSskt2ofpqRnZvNoGJkrmKjHjd4HitNzZTG4p7KmxY4drrC8tG52mGagiXHRzpf4kytr9LcH2V",
  "key26": "3m6FkMERLcKVZBQTpxnuMQQyAcdPuX5cEKm1w5xvAL6yMN5xX9gmj6jrBpCgohh67d9Vhe5uePSWvedRidPfhzhQ",
  "key27": "31ddow15hWnxVw7JPSKf4hbVB5EP6tLEECUnxR6s5uLLL2xgZEPhQGGQ9kuGb6geUncq9KJHH1MmkVtaKsEkPxvy",
  "key28": "3UfMVG1v6Gfyaj6GPfm5KNkJFwTMyU9sLCgAK4r5AthdYGReJgkGJwKxeE9SPiVsqhnMMUBBF8oq7rU4zv2h921H",
  "key29": "5S92C7bduzou1FRLZchT7QLEbuzGoxyicTaCQdKK19X8PYReCZ7GKbVsAnR324PKoKRyFZEh2jSebjvzTGS5pc2d"
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
