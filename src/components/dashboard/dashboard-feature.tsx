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
    "2bDnwPhFRp3JmexFmo8hiuxzDrtcK94QYKbEvau3CM4LEzYbd3KyfFoGi4dLyRbtmBq46bmiRV9RooK4xx1pSsUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aj5Kv5q1M3hEjKabC2aHRfexZX6vaDsUvi8voYRb89c6pqQWbxbpBJYQprbiG2HMTj6mSWFN2K7HYEDwJioAusU",
  "key1": "bhTHPz9daJB9etfePWnbxXSkxn2Nrtk7JYcrXM8YB8hn3tZtkSfEft6hAuyWKZr4GtJSpfZvVpxSjzpLFJej5EF",
  "key2": "4JSoCPGrBePBzNp2nTDppkmDZY4sn5cjbmmvuuo8gpHvb9YC2Es7GT4BzNDaarn9MD12XXK8G49zSTqbX7yjqdaM",
  "key3": "KFNQQLsdRnmJujm8fZN4t55j7Uchq9MNCTJc661g51XiaAK6G23v36o1qTCPCDbN46Noimn84i57QRUCYpZWG1T",
  "key4": "3bjq38iVFxMgJakSy8pHdxGRuJHLR3YKGzSc1U97jo7cKq9uToUL9xN5HZjuhjEUrivkrjjmWQnyoyreANyMQmvb",
  "key5": "3RCTXaqpdjoXSGA2j2iVC4mNSJMywPPBonKMUdwxRgHAsq5jZuv7jBoU2UYjy3wEiDjkjitjDYiuvumJgA4mWX1A",
  "key6": "dhtpLQ2mkEmxAPq6wETKWzaSv5HaLzC6u6DubDvbx1DDSeKoPM4xVLMyVfoPQexQgYYYzHQwi6XfYzaJFrANUKU",
  "key7": "2VT2pFKGpYdnSULqdv2rDHcVMcviiQGzb57U5uUYvpNsrGteNT3zepTXhEttCLENXGceM5yB5RSWmvTvsTKG17f2",
  "key8": "3yratYyiZox1pCuWJ4KHr4xNXkrdf3STrjTbZ7nRANaPXQzQwxGQCdumVP672PavCAK1e7qKthmXXSCtPs8T6PtT",
  "key9": "5TLoggrwXrNn2LtUzz6fj9razPkkKdExuUBjqvh4gw3Gy1MDwSY6xXZFqsze4JWYPWfwnCMJFTGHQpg9Qd3AHGfo",
  "key10": "TBriBKAjggEeh2pxdnCWb35fkKsaH4tY2yugGiECK5eMjAufEXmPiWguEYqDSAiSrRtNaYKqFDT4L3bmpdKNS2Q",
  "key11": "49eVYt6SxqB8oD8hMvZfDEakepoMRkGZU6ENXhfekXS84Jw6nCHEUERmtgbEnT5H2TGFtjv6GxJhNJ2weNCvLsfr",
  "key12": "44zrtEDMA7kH7EHXPczP6UtBeVQTdFjnhfHkE6vkGjRdUh9FNMU4PWBJutr6WfYu6kCupsn57DaWCoHZm9oFvhyQ",
  "key13": "4mF8YkQQneksc8GuJUBuF4dAmAEiqRYH1PeWKG9xkGkP1KzWtyXByTD77S13imhbHpVCDcPbbLu6dBu9pisg5CwF",
  "key14": "22P6z1WotrPaCekbTxAG1sL1GrkWv86Cjrd1JmkPKHQFJHjH6RLJXA5WxbFyqxLtMkiHbNfq1E9xRRkj7YSyje4x",
  "key15": "4sxAoTnRQUeYfXwFPTmD972GS9tvQYbargUjJXcdyR2YZMt6oKwBdu4RcLHwXVrzhUrqqZPyr9ViYNLYVs9we3i6",
  "key16": "5FN4vAkMc8K5MHSbBt4mCqK6obfrN1hbwVfiiNpiXr45zJGLNELQMcbE6LoD2GGYiPB1wcaLbJ7PdjLFNnJ9ULw6",
  "key17": "J6AFqRZxEPNLoP6TaipSX1NEYEcvjHZrTtUqtNa7Y2cu7fdjMuu7ovgtCAPgnfvtLuhWMJ79xfe52HpChV5PnAF",
  "key18": "2Pf7Da8JTSKRvw7hmG5SY1VqiZWxHZNvjYmZTTGuJsYbiexYUxGXxzevMpTYsmeHDZpBE1E1HbfgJ9cRFwthcMwZ",
  "key19": "4rtmNDSL8SNedE3bzWQtf25BUo9dsK8S943Pm8oF9GLxdyLsbw23LAib1LrqhHeQUo4Wez6rEz4ogPqstUBqc5AP",
  "key20": "41GoHZMzWWHyVHwJqAxr8Lt1TJXCGpdvYvvhQ82adyyD5v8BVWimQQAQggA4k4R664c3hHidTTRTrvjtdFf1eLjX",
  "key21": "2YKV5SMaoAp34kPeY7ggca5x5QTfmrNRj4oZU8JHLXRhCKhwv1uZpRWAkzjYv2qQpQ8mS3D7Z5egjE7s3V4VCw6n",
  "key22": "QNeYwzwZd94utZn5S9cM4ZFdD4P5KC3hkMUbkdDP25iycNksJW257xAMZ5hMQYA8d5doaVXurUSBmzwbeqGXDEv",
  "key23": "39mhKWcY1RBhfU6mbWQMaYNY5A3k9eSaFiBGu9PnNhFENXPqnkNF6UTuBLxvY1Mgae6ZxHsmLmT3tseN9SBWaB1F",
  "key24": "2x79sW9NoFNWzTBE2hRXwAjw2TuMeQsDL75EVDbUE7yWqrmnoAqwmZ3mD7pZfMcLX6Rct22HoJ7FCxzm2c8nmER5",
  "key25": "PnjHQ5VEyk4mvabkdWR4ZJkV9uvNKEH8PHJbcA1Hr8nsSDDq4shMC1HmuZyweLKx6fB1dwfJ1BDhjymv2syJajh",
  "key26": "2VB1AB2vhSZZ8RUP2kSNzv59szuRbbdZu2oaNew2jUiQ6HEXygRExLovjWNVAWGZdAC7xjGnW3sNPMkseDZNMhPF",
  "key27": "4GPciZc9EL1u1zhPgJAg2ENahJBoQCu2mTLWSxymyn8eCDfecwd9iV3bxZvRn4NTvMpeJsX4iYqopsH6t5NBLakm",
  "key28": "41kCa38nkXWtprfH5BnXHbwMqdu592AFJy96UvxmzSw37DaDVoM1bZ25AueAyEep88dTh2U597YQbw4oDaU3RBwT",
  "key29": "2R6vHAgAD97w2AttDw6gZxi9G8wR1EtFVJHQJpRj8Yb4jfS8Yeb7c8xN2UbLoEMERDohV7FsUQa18rLGQW9rQGVw",
  "key30": "3VRSQCV38osbSW2Ju1G1mDMKW97rvPot3HU7FHMogSc4uYoCd82jCCXWm8HKncb4nuvLdUVZeEHWRaNaNR4x16b2",
  "key31": "4xMVotubaoz61j8jnV9Ch8Ke6q54vFa32BWbtwLkggM3HUsPKmc2F7HJ6QMx39wEKagsvJZ5KEk5uptYKTtLzjp1",
  "key32": "4F2aAeaYzYb71VBJyHxo4kWRWa49a6uc7sWrVU8LMDm3nFDNvWPYjTF4k7HEGcHcbduFgjY4uygTJ9dn9KP8HwdH"
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
