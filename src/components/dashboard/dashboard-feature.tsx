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
    "27e4WWe8nCDGGJJfTV8ZiyQVv4msyZQknkczadMbYfTqhshPSFD6gBsp85MsdL1FxDA8r3pwAwpM4ejyXjaapu9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWmUyTYUNi1s8b7nJx15UgbUp2p7cwECnkSZJjMd4YgM4rjS2W7dkwjw36xqYtAxruojnHgSa4EDoCegy6cxZnb",
  "key1": "2je6A4xdNB4kAA3TfZP11487VEwGsQNuKxtwL9vLW5JLifqN6SiC6A3CGW8YvNCW7v6nL2zcbnzwcL9q12vcKYZg",
  "key2": "bxj6ASYjAV9eFiBnWysaQQzwdSfkTwEcWqwCqvS8CW8Pse1MhREDvBzwWGUfvkjuy3bx5B9ThynKtKfNDuLSiKC",
  "key3": "3LtbmTDabxWvS3nT1BSkv61FEDqaVPFzJE8bYpnWiMTPxAXb72WDWFESRv2hn5Q3Y7exd4BjsVeavtEYwgRjcU56",
  "key4": "5TG8sPVvkBtjaHffHWvFewCHDe3CBD5AUKjmT4EruMUR1fmJmTNmaCkX2NZJsKh9edEbGNmyj7C4gq25L7Fi4sLY",
  "key5": "Ff9nqFNCQ4pFzGyCsPFg4wU8NppxKTRwQ7zZnynQqjzD63T545erbWXHzcxMSaVfwYikwTvg3F3DujNTKAyvyMF",
  "key6": "3y1zS3Fq1ETH9rh4N6UuMVqyzEbDBiqRjqfkNYi9SunaeTjpZ9mWqRv1piih7TmUCAVmAyeGCfkqrbPDCoEGNGEJ",
  "key7": "3HwHtzHGkcLrvAhogGLB7zj5aLAGigoYy4jhy5oi8xwLjsQa5v2japSDABHjhuMxxKGxEbzKYFhHDUFGf1UtAgPD",
  "key8": "4ffJaNtqFnVFtS6fAXFW4dsTHHrWdGdk89M8VQ3xjAnDnQZREZdVyYKAqLURqMX8C9o4r9EXn1b5W2a9E934aij9",
  "key9": "5WZmxPXRziX2XtZqfGJd7rHZ79NHsqF5hchCxr3ZMFrNEJrFmo9oDe7sTTGTxVfby7dtTQ3U1C7y7N8o5pMsFXk9",
  "key10": "5SD5GjMkNSjEswPwD4PcS5DSK61jWgQdda5dG8Q7psHTQ1quiXL8JNS3GAmdBEbWGiHErmTmSXryX5v9ApXt3sPr",
  "key11": "As85VFkT44dxNfGe1fr2rX3Mry8oLvZrq6FnZDbdyBDQf1x7PDXWJq4HpUmUT5N8di4fuKA9zzdNrTkepbf6DUV",
  "key12": "eNUrPEQo5pA3vwaFAvX4wRBxWVVqB9FpttD74f8g23zizJf2yq56pZNDjcdamxR8usenNmvy6f6MiW6nGd4iYqo",
  "key13": "33iw96PGCRq3ciwCVqXiMeXN9bqYCyn6eBkdhQMKBXb2R3NXAefBA4GyFp3WUGxHHCnEUJkUC2kUWeTMSuMuMECP",
  "key14": "5RagDmHzsvowifFvUn4sSVnrt2gRMMvPXSP7RKka7YjydMXf5TPpvn5pT8i8rqkwAbASkSdUXdWxYENuhZNm1PP3",
  "key15": "5RLrYk2GZU7zeBZv8BMHyWjKtSYcdeYK9U5ea1inxZUt6ZvqGMvJiA8xZYPtxcjop6nmczTL3rcns9HH2gicB7nR",
  "key16": "3PC2mF3CqdqxGdAQzDAc8USSCjwxHbH5pcoaJGWcQKgRG4MiZwaQHLsvm5wyaSRAdaTVywa9be9kBqKFpMeZZzY8",
  "key17": "3BEd1rBrEKUuxCrwjbBEMsNr5SFEHLjUbKDEdoiWCYbFMnjknKANNVjWTWA9p1hsBNV8rUWFGoTNQMX6q3bTiUQo",
  "key18": "ovSVd4dXDiGKcfBmHm5jidEkMjr2jt7svbW51YggRR2VUhBfMtQtTCAvd3cituzN3Ykxna8bdZxTqUHTWPu2gYw",
  "key19": "2eXwG7kDjhueWuNvSvHogwzMzkZbndwozAhL3aLXmZmpBLK8zjYQozNgZqiEgadXmRzys9KEUDaBjFJ8nbFgvSMg",
  "key20": "4BB3H9KNSGW6NwJTz7aT3a9NGvT5VFT87ouPRBYV8PpEASUNuuMGpWBvu88DXpykBYax3Rq4KYkmHjn1WuEBNnta",
  "key21": "48guBAMqEJd1TFXxKrktwY3KSR7SwFtWzBfgfdyJDbYubXLqL3jgBBG5i3hD4Em4XfaFZHtP5ioruQHemRGgC55w",
  "key22": "24DMn3qvL56xnvvWZmDbqSLWSdggoS81yCZ9dzS7cJW62qzsBfyPx2VnAk7QbDjRTzDW9UbGJyyKLyuLsPM8CBW4",
  "key23": "2asvLXsbvGL4Ef1St3Ev9Hf6Tk77bgYEa4PXwCtMzwW5fUcthkFmQkhT53FGgA3EHwtAVk2T1WaSJci75d2K9K8h",
  "key24": "455ai2oWPRv7xPhnMFRdxyw6fiWZBEQST79RFwwKK3eRpR72K6Sii2bmHGZcVXsBTpRP3Yn7jgj9DBTMpxH1Qrzn",
  "key25": "3LaFzRH7MjVRHcDbdiJq5tN9uGQYBRxc1yiVbYHMDSyxRWNaFVF1vpj9JsMF35EkByag8ZA5pNo2ZfKg3gufkQr1",
  "key26": "4XgEUohLtfS6eog7FTvqvEZuSvbR9NvLRoZCcxgwra2ZSFan9CsGZBeXQKh7sY6zyQinkhD3vUHMWXfw9Dd6QR64",
  "key27": "2cN2LXaD8ZSA5h4KuMRx1BuiqVKuMBZ8iTPqz5Dp4LMf9qgmNAro33mLFeVp11WX1cS7gqoaXJvvwA9gbnVRNojr",
  "key28": "5fZEZ2jf5JyEL9iJ7wFHnoxU8eHdLzEfgmr1BjmRC8vYYwSfgDR5VECvWWCW43EPTSNTQxTqAizT3jikEXHKk6Bw",
  "key29": "233BDCfvzAFeP9gM6bRDtkg5EQULDEtBorKiNNHpyR2ZfsMH8dQvVgWmWcHH1RR1juu7S1uRZA5rCCzeQxtmru2e",
  "key30": "5dsQm2u7uTmTrhWyDxcoGMg8VnQ5egygPZ9EBqvWp8pFrEmfuetApfjwvnpfoB8BxiZkw8kVFoUsJFF6YiHys1PK",
  "key31": "aKqyXyY77y8EoD1tpBkPjeLaMoDAuWtcbi9hGDYjQa5LdYqeUrwze8jJWKrfxkTnJfo4NsN8byiXPvbRUj91mUH",
  "key32": "4BJY2G5rLCooAWyZ9tLqz7ygB72DF9MYTynMTBPCdk4vgsW5UW4z4kE6rrRfjoyHJkm5J5FTKEeyxLkuwXisqgpA",
  "key33": "2z5YEsKc4sz8Tk5tJZgqPvBHF8ruNhPB8vkxQGHh66iw8cu2URwVWqd4QpySwnBVpvPeMbuNvRRt6N21Gd8UTvKA",
  "key34": "2kyQVM8qiZYr1Ja1v67uaBi6oVF3MnMUq2iV2QXXY18qz1Vp5MRC4ynPREKb6z8wDLv1Y1XU8Uc15xXUHWc7hKGt"
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
