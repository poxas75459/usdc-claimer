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
    "5ASERRZNGS2g3qqbzR5gXBZCsMGet99xsfX3Zy9Fp14uXJS9A4GpXsndCk7nJu8ZFUef3yVYxSy8KgeJeXgXM5W5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Nm1tse7RdfwV5F1u5hwQhHHXedXYjPbhnMgQRxpK98ANq2SUUu91MzZqpyARQSJnDhejMtb6EDJVejb5eA2Cff",
  "key1": "2SNt2yB9BqEc92YMFZdFHkKMEMbjcUyN32d1ueXVCmbEd9fShLrnsL4NWj1bpaC94Jaa2jCQQPqsZndRuhgSGCi1",
  "key2": "4hnpfYcJpv4As5gQr3WyVPpE8vqNE3UcTd5rD9qD4bdwGq6r1d9V1aJneERmpAAyvhvg6s82dPr7Cx9qhNZytb85",
  "key3": "3xxRYuAH1hPhcPew8D5c7VfBXNqwb1sbc6W69CARGjmGzfb9wUWfESkPW5zpjHd4M1hAiAUWAqQHbFTv6kmGpPz6",
  "key4": "5y4YRZUGbxBPH1FNw3MNRmkrQ9TjCNoJmPrU4wXqLU1qLgH3TKznFSCjTqq6cSwANGnP3byyxv7CgPnPNdhaK4bh",
  "key5": "669wE8GF36dMhfZCuZTKpoSgbB3LXvjVUD65KKxB8ikZaHx9BgwTrcQWuYvrrcmDKbNSpang1f47frf7c8SC3LkV",
  "key6": "3HVAC9tEmrLgPTpSXo9LEXET6brdeHFf54zrvbqa44KXZ8EDkyBvgk7NrzpmafbYwoj5JqaH9ew39u55m6TgdtcP",
  "key7": "j9CcjzGBB2q2f9G3tm6sbyBgHfGcGo6ZcWY9jApf6obF5cXB5pwTCE5ZFJFNVtCAbqQJVDRYpSi4VSzWUFUErxN",
  "key8": "4dQhvDRxutDHSKgiLGCvp3BTGUJkDk6qhSqfn4zBxQSyiTRzSCRSFn21xw73uHBAbtaoJjBHH8Pof5Lxw7ckUZEH",
  "key9": "5KmxmSaH9v5bveGDDPr4VtYe9hMndn8jRRodPmVTGsn4CE3QxhEcALuWBC3AjB9KaVFMxXh62md6iJkJw56Yn9FX",
  "key10": "pHi689LxSrg3qzGcKvPKMwoEih6iF3jyX2dfUegrmfwnK1nL6b99E3JbqUbYTrAPss6kbSCaKKwptEHGRJuCffJ",
  "key11": "3PATpxXVFTJcj4MhX66Yb7hJZ2N5yQX3pMnnUSNb7rdXe8XyD8FcaJgi9qAx1aHDgPbqQmE8wVn1qfygSufGSypX",
  "key12": "2M5i2Pt7i5YzoksCgjV7MDqFyTZaNYvUE7dYq1VMtibb2r2qczxLx8jtZ1vETPU2twt8uABHdJnLiit1A4fVzjFK",
  "key13": "52akz4tqZ2jywrAQ678RiB9ad4EwyP9nVtmkB2J2paC1qkTBR7TykFRqwNZ7T96EPyzncvnqvASqYUVt2qqRFo2k",
  "key14": "2keeHo6842UB34enEWg5Bs8xhFMQnNcHNYVseoSzHq6QmaA5D2uP5qnbzKX4X7f72ttLiGCHVF8AnjNf7nfaZ3Ct",
  "key15": "i1asPUgF2ZvkjAhnHq3rEqoZCPd9z82KE2wrTcvpHT6smdsaKyi5AXoLBkKtFXxCgZC8KhWv3vrFb7SxPTZ2YtE",
  "key16": "mTwAbwZtFyC1B9zNZKjNkgVz92dk6EgDciykhY9QHtwQguqwRqKRx15xfbRyqDXPTVoYoV1AyGqRU7yowGmUpRz",
  "key17": "47TpMyEtcpHTjjPUGjRSXmPeYU3CMxdnKB9BBw53TRNmroAhSYRsr6Jfq3NREPze4atXCzKKpYdXT5oe7WMcfgDh",
  "key18": "4b8zfYSezLMfA8GhnEvAVYpNB1vFKXmMw1kW7du3cn7xNTVcMLWqwJUBTbs68Kkq7KnxpqLBVhqZECAzPeVYM2Dd",
  "key19": "2AbiAPyEPFd6CoYkBeq9xALnHfCoz4Ze2NwyJQef6rhFQP7wK925gvs8myC7ZscuSWoGaUWMiDTTfcEAW79PCTFN",
  "key20": "58cJgFgWNWo89Dcgb4Z7EpQR34ypDCHZfVkRCz3xyPQ49ubA6DNdR39Wmk76Qm7C42kZwzbqT7ppr5xcJo5Fyk1q",
  "key21": "29FxcyRfrPgvv73KKWLnfFW3CwbBQUdXcr32xs9WuADkfoqEgS3dQp7weW2bHJbRN9aygi2FyWNqqyk8SHTNbSYM",
  "key22": "3obBNmA7ioLUcUjqrKsQbUSMgCRvkMpjRFzCjCXG5phFCiTxkWYHGMj9FCr5SGBK5wZJPbuhHwbST3fUkd9x27mr",
  "key23": "tTqajpWc3perKkrj4eM1CMN3RtEYqKCqC7rSjqCQhZakjgUhdGRqQEfefe4S4hkjJaABaqXogEAbB2bxV2ne8AK",
  "key24": "48ZYXddyX7Kufp1KQQfmMCjXEcWYhs8pUhcVoejEQjy1yMDr45H7huRWw3kK8bYx7HL1PMQBCeVMv4FPfKKkcSWw",
  "key25": "jgCEAZMYG4Ahf1QsWeELESAXbhfbyk8pP176RZtZLubuF29bXNGi4gtfsN7kMyMM2RkJjANkNoJ5GJRmrEbUEPZ",
  "key26": "4zDcYjgCz5aSyXpF3vqUo8QCtxypPUw8RWHPG43Puf18qqhKkPCjkbXyJCnceHWUcG6zonjkwH9kZoWK7EadzxA4",
  "key27": "iuHsdiYNkbnbdxa2Led9VMWkfd9fvsMCi2axs9H2ZG5mjRxVjPufceYoP4czgU6mE6ELyBHNRnxW9U8hzx3YZGH",
  "key28": "2NbHjgrdpBVQ1BPnz26XVtMXJpY7n2oEmDuByBth2jotcpRap4fHhfM3xHPLaPLC7hq7YLQ6YRqDa645pCyn7ks3"
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
