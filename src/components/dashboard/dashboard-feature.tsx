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
    "7pwPfrWv4LEgurKtwzZRyg8bV4gxbH3uhK3C1hkBGp7YkjPysfBfWPHNFdGcK7jLcVCLVodeH9UJ2G6Hhu5YvyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tc8pErzn6bv9NmExSpS2Q9pp36aZTDtTdnDWnL8Lp8DT4nEFKsMqFvF9StnaK3CCQQJossGoFDFt6CazTdT5r2E",
  "key1": "5K3NhEQEArTvydBiePTYSZmmKu1yaNWyL5XEaHsJQHAyu2T2ud65UdSsBnBaucjgkcyEcJ9CtsDXZJbrUHbDipdA",
  "key2": "883rESeXhr3xuaFjdjnWZE1jZMKqjPjJkERXxdCWvG5s5VyxqkdUMJo8hwhXh2p2VcjcztaLyRSFQZdhptQhizL",
  "key3": "28wwZf6uLUZQR5UP68QKw36PoHAjqxAs8Lmgd5HUPKTNuQaL4bdqtRtkeqtLWytD3knQ9vSw9eaXfW8Pz8YEszjr",
  "key4": "32QHK2hY7H5ArDVtqPmahf6gip5EjasS4agm6BJ2spkApUZm8c8HFTacKs99d9g3PA8HvTeYEdoc3VWVBszH9ybp",
  "key5": "3fosU7caqzV8NdxL7ANDg7RLVGYKacDTRw63tmrERgjYksNhCUaDqzQs7QvHP5SGqYfrWeQKqtrjCRuoGMLTDHQo",
  "key6": "4vCqfX9oJBgibUa2bV4Az3iurvHL6HxZ79z6ExkstX1HENND9bbiAkiKRUuHzDGBXkMiH6qJJLeq1DjqBMtgTsv",
  "key7": "m7ozBA3gAWJqMY8PcWKidEiJBdWtFBf32mAUUDKhhw7gogcagFCsVKfL362HwNZZrsiXWfFRkGJy3iiPxG37BX1",
  "key8": "5vEjH4ePydm3zSthveM9vozeFGBybqENkBjB36yTjVps4r3diouvBQNmfcUf8xzmXXNyuftGRF7oUidivLqMmxxv",
  "key9": "4XuQ2FfzeZgcejvrqN2qqsheWaKPfd6xemXZdjTLKtnib99JMfSZaQho97TAFBhfM85QbUDYpmwsDGWyZA7wfMhf",
  "key10": "2bVg2KnyGdxromgzPjgy6TEeNUfnswvd3UXjb7PeZmatJe23xBDnAYYEQ3k1H6PCNi75Wyo4m7pATgZu9oL6oYfc",
  "key11": "2d5Q9bkLDcuF8xoT8KdLNQenDiKsspFupUAe3mY5GK8akkLxV74RocjGVaAZzwiDXGZiEHoLkZUeZFJLMBdGSCD5",
  "key12": "3y6JdynmXLe6F7y5SrMRGUdSbDRmyBgGMdDqCuak3t9YSHKj49hSyJ2CuB1G2NGS2811ysfew7UV9955Ra6z1U82",
  "key13": "2UpqJmTfFbgbAvqyW79rbzNDu7LbQnRnSbNDxN1sEcAW3PxmLn3rtFnpwJ1Lbjvp1mk2g5PTib8EJ39JnrqRoH3n",
  "key14": "Xi8CMsajqACUgYvVq96F8LVVo7PS8Y4Kv86HsFYrEF62avrXSi7moZQv3d3C8CWDFPywCqTAPNfxnaFTNsw5NdV",
  "key15": "3jFhKAsNZTXdLkBJq9hsQaassPYsCVLjgzUX665LnBtQ6rtKMD6fXoXmvd6TsK1pH8JEyg8HA4ZQVGadE3ctiajf",
  "key16": "5KZR7Deh5hjwNhWvYjbnvG3c2gBRarNcShgy4w9672Wey5ne2zrezEJzvgJ4tukWmPyGGwC4rFvVZHjcsYEr4EaD",
  "key17": "xtvFbFwEpBzGgDFRwkdsDpg7MywiJLxHkF9k5GDpzMrcL7JHCF6bGFEcDXZLSEBshS8usqxeMj34xxp9kfUaNWq",
  "key18": "3J2PJU31CaLDoNBz6kKWxVb4ZFj3PSo7BqYh2dZmgWNTq16HuyPfvnW3LdcU2rcj1b8GVq8uY5bMhzxRKsQpM3P6",
  "key19": "3byyqZJ6JHs73Y8GuDWwWdUX1NXWUjTd9H8sekW1G31ycX6x61hETthLCChjEPoQFBuuLHBdmkwFL8kaRpxWR7Wg",
  "key20": "43HRe8Wzpv7DK4vUFc4ih73Nv8GahLLdZ4US1modzYqEJVuMVqhNWdKjdGqmDtxEvtXgtC5ayksvtmjYRpaDvmYE",
  "key21": "2scyKBmwbP2fDyQAM27P1eWkuGLBtiD1TxVgeXvLrDSnem52xmrSGA6MAe2SCF6aCDYSktrW2fYu6auBhyfZfGwm",
  "key22": "5hr2AoBmM9hACsTm7UYF3BF79rYbNUk3mDNLpL2DLs15486q3NDiFbQyWuWN4ewSG2S3zxH9BJG3pHnSCoimcMwK",
  "key23": "eiAuiNfbogpyhkfi9oxdc5CMAzXjNkHkLZwTtwpTmd2ygKWgibvFznwpRBXU3iHSLJACzco1JZQhKMycxJFe6XB",
  "key24": "4CXVfsLnrJGihB4LKS7Y3YgKzo2EC4DpW6RffjzC3zbr1kANb9oyW3gTNsqQM5J1yjZuqaVcnmADGamewGfrMHZd",
  "key25": "XhY13wy73fzhCze9McQyKeGuRQmtat1htcwUhnj61ZZ9Ud4T92RXotUZyh9tHgZYN4bitWomut3z9Xmjryk7hKa",
  "key26": "4BbA7verZPnFSY54UzZCN8f5HVXwAs3qURVw4g2QLEmv79UaLwmQUvrbMoFyhhsamHA8Rn5fMChCpLSHRCAWwSGz",
  "key27": "2LHCD2hFBvGu9g9qA5abUuNXNobz1PUDF8noeE9upD98ZE3TucXN1sDVgnwgu3Tdv5WdZYUr9LYKKjJjAMdXpUCW",
  "key28": "5DZk2SpAagxznNgGYkanAQAhLfAxvdBAi62zax8cyjfpR3nazbcL7HYtHvtwPQ8DJy8EZpzbV6E5x2bydZy1V9RK",
  "key29": "4L4H2ZdxkTVmzLdkJK8Z4awmvYLDejRWc6zzkwfqikTQG4xqjdvH6ogJpacStRepdo5aetChVJNwHnwm6EaMrTdA",
  "key30": "mifZXJac9su1LmjbUmJxDRa8vtxo1a2EVnmDoz3xqfD63EL86ZyT2sPSXoDET3fwmDMwtzYJo95qm3exwByHXGN",
  "key31": "ewxkhruFoXs4nC9kLHPpNMPM3kozt7m9ddtMEEaeGwY1GgFDHMH1q4pGpteXNNX2hKNuVo6HLcN5y3rCrjadgUf",
  "key32": "opDqCGjyG93iPr1qJQw1R7xMef66Ci33fxfACGoAsL6BHe6ACHMTQEMN5835Sbv5Rqpi48BPrTLY2DwBrmaxw4E",
  "key33": "5VoWcP8eAwRkwaWdVx6zXZJzBeWoPQ9ehGZciR445mfKCA8AMxdxU8YL7SATx86jJ8kJqm7krVqDcPKddH5KDtMd"
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
