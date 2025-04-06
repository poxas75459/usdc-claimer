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
    "2kxyGx9BLzECStbcK5CLH3uny2vNRprxBhR7HxzwbzsYua8M4u9FD2epYDkSuTj8MqooBg3npCGgE8J7en47J7Tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLkmgLBuzbJVkBFYmEKVpVvNXW4d7TtXDd6bGy9qbBJQDKCV6qjKYyquFTsMFXUndR8UxaSy38cnfatmi9CUvWa",
  "key1": "4mvnvVQvcTSHwKuxtosaHRu64bass8Sw6Tgsj9zo48ACpR1roTYDV6YLDY5aJkVnCTVrzQhaRtE2925bh7GVTvKK",
  "key2": "5nUeU56yYPiGWL1JYu3yHHuRpefo3o2sz78YypQVZmSTRZ7pGzvnTNDiqDkvih4sUhb4HM7YUmv1NPnbkJi4WYK3",
  "key3": "4wJegSsGp3LZ8X5LsCXM1uGQMQA9HGyTtd5MuxwSDA5vrCKh2c7PAJsiCLky9waxNJBvBhQHQmxaNvHg2F5jgCah",
  "key4": "2twXuhoEhXsqpE6KiuMrfwLmvet8UMUPZTVSJTWXcPXTkK14PhJ47brd4g7eWqWzhzYR8azBohSyaHUJX4sADeeR",
  "key5": "2Admyq6BrT1MZRavmrSfmXhu4b5tvnLUbvKaqr5KfHFJkVRon4EXAhKZRPJVbf7iS4i4FfsD5GKeLeKX1tHeDKJo",
  "key6": "4Rb9HPfzhy45Kbf7f5yUFTXRFgUgjFqqoLDQ4a68LTXzpVhqi7prxopVCoMbEykgYGaW8DwmS3SPqbkHKCBT5cMu",
  "key7": "3UCf2ha324PAZA5HbEsM2zaizZrM5NMpw8vSzmRtpdTErNthVq8KT8w4MVBNdktzfnaxxKQMKjkXCf2egQsmGccH",
  "key8": "psjEnNrc8sFRx1KEj5T5PdCRuMHg7WbCjAseSoG3wSonARzY4nHTpAsUwmUcTFU57GVV7w81E8K5x6s3SLdioh7",
  "key9": "7ZzBs98drYXZmmMuZr3bJnSSE6VET16SicDp3PRr2cdMU3G76T3K2fwbkyYhosNjkpJ1wWXXNowBE2Ge2ViVeSH",
  "key10": "4UA4Fo2n6w5bLWTht6j3gLXDnSDcaXDqYPXSQAR2N2SBERTf77bpcm6UNpfWkTaRi8oqfbEdrW86LmustCUyUCdy",
  "key11": "4Kbtm7YVWFEUF2wLwpirPQDBKiV4bRhPJsRmDkiFjvV2DJoB9ogMcoK6RnDPRP5T7ifSUFHzbR9tcFGsVYDVZakr",
  "key12": "5QwNB2TiGtvgi9ZKCkqF99kq6kExh73PfMWjH2SsXYLvwr7si7zYW1KDAAUJ8XD9Xa1oMYfNGjL6zDQFfQs9Mvge",
  "key13": "34z4oY8K6SXDVYDpmjQXNTtFd3MkXvMtxiSV6botNLCWeuxnbow4giDFTVsAbPhBevYFatVGetBQRsNxKr53ubri",
  "key14": "3oqMt86Ese5asiSU1eihQY1qqQVRYMffT41BjUWyiPpBV73gft5FKx5osGJYYUcjmKJ2VFjcYttz9NhLzmipJec3",
  "key15": "2z1uBEizJyRoHLJhJQ2fZzc4cCDNeK1HE787APDDG4BaqMD92qhKkNBAB8gvqiD12436fA6mThhKTJTake7LYHxE",
  "key16": "5S5LJ6cKsnwcy7H186SjPnB9216pZz8aBPgTQAwU6ZWD4cu1dkKxB74iwCHfjX293A4xQ5qSfKZ9jQmobqeDrdKG",
  "key17": "41GJ6ciE1SXUbsr7xZT6o9hXJDRav7k1C2Vn6CSuCqoqb3MtB7EM1BFuX47VKyEtqo5xAUrPvoL88LSoAZ7XNuGC",
  "key18": "5crUzHMWg1p8N5z69TxqqGm2w8cyL69vsUW9HBLtqTnaWoVGsjphiiPyiSJgrnXymnuzwKzc3YjtezXyxU2g6bS9",
  "key19": "55RzWf11juaDUQroVJegg5bGTAJ8U7itWDzmyCQvRyeWorYtvVx2XELzPD3p7vFr7pPnCCosHHjJdYMF8yAuMq7g",
  "key20": "4vCXXzZy4CGUcc6nFoFWndAs96YQDuVuaFTij4wCJ5wVjcFZxzJDzjTNxkjNpXv4KwZSgXVSiF7mJXR1nNiRxb8H",
  "key21": "4SRGkYyGvjZoMxKQmyPbfsULfNBYrueYa89WftJA1tQiDjt5qprzNQWynT9nsfMR7veW4rU3A42E18R6NUfctRQJ",
  "key22": "4qsT41vQNDLpU8jJvv1wQ7YLAbw5dye6QLoEv5uvorN9P16gpeQsSERrxcQ1yumqHBnkMDFaS7KcMNbpXrGxncKq",
  "key23": "5nrWDyMa6XTALsHVob9krKcqDJ5WHSH64zVzz7qeUmNcktez7r9nKm8o8JHGA2WNjN1ZYtF8ACeAFW7BqXJ7pnNg",
  "key24": "3vLrj9y674FLQADcZZC286wKxfmJWbeV67yzDe7GMU6Gf4Qdss64r6Z7uUpkdGQhQbmWXRwAzDoNkdD9A3ciYsNv",
  "key25": "bEoxV9PMt3uHP2CbSnrwqGHfP9BGLXgEk5cWugijSrCQShwqv6eTZ5B7vCoGBuuA8zexcb17jrRvBKeSDUcPp8K",
  "key26": "3ukU4vgCnqdjhxC8cTn1Fq3atJcn3b6kwTEyCv92VdcZZLQ6ARzrUoqcTHZa2K6hbqZdcCxzZXDBKtXDVaNrDTUJ",
  "key27": "4bXoQvXcDs5ps9nVHMNwkJsvDdZGyWr1nNV7Wjor5vQ1ozxUAd6DctLzhMipG3nQFM5NwY1F5ZPBBKT7ErbBMf1u",
  "key28": "2xfxH8LGzvrsRQCCm6q4bdm69pfS3o217kkzfFdpZXJk7DTfWqyAR5dAfqrqg7Dqo3aNvYDTBv1MSxyffFu1NBGe",
  "key29": "2rvuHaqk1ApBRJVcgNFxnaBxvRrU5kAVjjSRrMAJFsZY7TwVmmAuHXmJg7rL8ZKFvX9ZfN2MxdNcyjUqc5VgDQw7",
  "key30": "51VsXgGWYrSNwUM4BaUjWC313CTmiaaJBA82uUo3tgL5cC5knWww1TrgN9bQdhRyNToWZbaS14gZNLV93Z4K3fvQ",
  "key31": "3kBnLBULMp1FX31LFwLeC3f89kFu8ZAx66mftUoscbVKDtNCLcbn8cTNoKwKsoY7w4mzhKm52Uex5iSBMnuDz2KB",
  "key32": "GapxLnL2jChgMDWktXjkS3aQJPzNWc7mCUU6YMHoY35VETQQfNKH6WwAnAVgZf46NAf5F9sgp1GsBn25cw4Kgq3",
  "key33": "53JHfxGCbEwo4PpkYDHHrK52MVjkoS9E8CQefEgS5qi9JHWSb9s1JknZLYfBACxL7WNqNkbmsDyWzMLzzRLA1a9U",
  "key34": "3MHXDGL2F4EnepXaaCHJnSbpu56A8WEKDcJxLGUVpRHqX3JkDH2h5rutEjibbUk2LUgwhg7pVC3JtUzaJHCsoqQp",
  "key35": "3nGRSxRVuJ8gc7LkVVpyY97n5N3VreENoSJ1cbhJKLuvS1yvBKTFk5Wt1sMBngxr7GjiriC7aQyE66qMWdg5RsLe",
  "key36": "3s6LK5JWqWQ9Q3xMSn5bcdcfMMtpezRpCe7Xf5TD3sap3179TDNb4iibpTVsabJzi71bL49sqewsH1DRRUUzH42T"
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
