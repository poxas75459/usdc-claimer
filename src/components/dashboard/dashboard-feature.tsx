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
    "592NwpxvEnRbRSbNeubnir6EA81M7tfMP99FokHF9AmyseqsGMgZAhUUTTSwNKkfFgyNp27KrWmgHAxYj8SuR5gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXzrxZpuQVgBwPymPTqTUwscxSY11Hi7pz5sdZGCxP4JAQzVuiQSJDvemz4m2R2NMUnA7mk3r4gk9fLPoH8tirz",
  "key1": "5z1XayqanC5GikgHhS95Z9hrgYJyz6NC5gJ8Cavg9ZN8TipvC5MYpZpqgYjv8nVL1rzEaJcrXfGAYk9uiekHsZT8",
  "key2": "65DPkXvHGh6pPtFse5CYRHewLCd9Atb2ePWwhu1DZD6c42ci5bvU81naEL46kdFTWQZ2Jk7LCr7rjUw5ie4gTY5A",
  "key3": "2XqoZfyHtvXhjUavAWiXnmod1wKEEZXQbUZvRYFp3V8UszFwYbNszWPcGxqQh6CfFFW9vpULEHn9aUxWuamAs3gY",
  "key4": "AVQvpNiK8kXK7Lz6K54VbZbywYSWhDZycugA3vPvuKwj6hr7UgSVbyjQSArxRPF2ciVTqLTNAD3kHxAddB5NccX",
  "key5": "3wY2w8zTZD1U2wre61jRt4zVDHKiVuBJ3A9EkuEVVFpAYaMjZ49psigfzLXDURAs9tfJqXKEb4HH3ycVtw5c9HVz",
  "key6": "5rD59swPEfqWEkgg7fM5Mpi6qRnKryFJyDHFmHbmonjqsfDSjKesFrCHtkrgGgRbFNdUg83wq6683WRiSnSY2YQR",
  "key7": "5khYmQJbJK8YQLYrHX86nsbiwNEG4Xq4AzPH2p3PaMDJq6iypagQrdZq7351VESZ9YL7AHwTUizVRjN62u3ixoBs",
  "key8": "Fhkh9ezyEWA44CEHJUkgsAtgqADZD66oj7dZTavjDx5oeAiBcRsuF1YnKyPxLmUCrPcq3LSejLmsw92Y9jYVecD",
  "key9": "5vGTHNkUdPLP2xEKWTA1YLPR5S8LQLKjeYfZYBPpuNWt3TMb3D6QXV3R5ddvYqjZmHaWTSaQHz1Sa5Tw58CwgMfT",
  "key10": "EdQXFVAsDdm6uGaZ3Ec5r9crf4eEGMXogAWGPscS7iFqceycZ7W3ona2gL2hhMPx4M4A9VfWqv5wXehEMEweE39",
  "key11": "2FobMxSd7yqUZkjc6BkWE77Cc6wG3pPdArZD7tFFLyqe73NyQEPNpccUY2Pjg4SBF7UEoQjXaGSyMCSVAEmDLomu",
  "key12": "kAYb7nawNw2L7VR8yg9MMdbnkF5sETG2UD7czaWthKZCdHX4sZJbfCqAxqC4WCgMcTDRSXTTMJRpRhTUkiDa9tT",
  "key13": "3z4vKxnrQyfJu4k5koz77nxNkBbLc4FKCjabFoWWYw63oRkFxgmftA7WmKy9AdyzAg4pAyRQco4x9QWcZFXm8bE3",
  "key14": "4Giw2hhyWWtFhBzHUCxvUw9PZWGP9X7HoTfa2cg1dBfdVvDBpzUtyHi57ZKK32u3LvEVJk7ec3TeGUza7128aFQb",
  "key15": "31QgxcPrRPQ3GPMHoEqFGgpahaFzc8jZQQGCg3syfHapuaFo8k1r8rmsCbec8fy4bkWqZQvuCHytdyrwiGsq13nu",
  "key16": "e1zJzaWb78CU9DUaBzbexpWvpXCt1cJuKaaNS3NwiHDMJYTpRyEVuscxV6qikcRXbSQsvzNK99AoCYMQu9eMNFE",
  "key17": "5DpFYPZ8nfKKYiXVvZGrfVzKKCzqkxke8YPDcFpCVLexbtgk8FeJQ3fdndcy83ALCWSamyuCMyi9CL6SZJ3xL3No",
  "key18": "3ttD3DobaFo1EMmt67pzxDe6messHQ4dBiruKhkWRYr925T2WZH6kwVacBGJ4MUK3Woc3SoCZKBHpzRU4L5yYUdY",
  "key19": "4UCuVbLqBjHQzmid9FxHwVnYgmFoqtJTvbQHt5tA6uePjhqnArfR3gKBmW7fC9X9v8RM1BC11T7G2sXfrarrcptz",
  "key20": "5kQN6zAqwceSG4aRwnWTafL2hpHuW3cQ3fPGeHJiyLMFaJWVAQCZCsfWJ68RdAyPMxHWL4WRbahbAZYd3KTHbGnn",
  "key21": "5AHsY8crMEQBzCVA9yFnmme3jf5HH9ZdJeg8tsKcN6rSKhwaqu4GwBsgb5P6KYKyzzr5hCE7g9GB69MgXmGS13nA",
  "key22": "4mafj5HDbX3AJoG2xru1uFkGFEscTcBb5veEUFEKUfqUG7Dxh7A9uxmcLsskRCv4a2xf9J8dF5eZofJpEGmzv2yt",
  "key23": "x3zsptNthPfmz2CiACxAsVRZ3no74aqosoiVtA8JCQVVu47tmkRf4xe1RJUfCmqNU3QWJyeJggwyGi9LCbumfVY",
  "key24": "4Zz3pUWTLM9iCVgyT2zR55CtQNmS6yf5oQoUDGFBuqxuJRR9rYKBxZZ8REQCD7GVar2n6957a6ZCCX3ydeF3gCKd",
  "key25": "2zvPg29rhgBzCRpdpZBx2BnKwxPBjyUkbFL177tHuCSvrB3KvrpnBbvWaAyiJa4VDdkARASjMoMnTaEPQKKTmap2",
  "key26": "42q6ZBpsVyvXukgMYEbB4bSP1qK93V94j981B4wBy3jFQZoDNfMjYQV9AVwbVk79EPhJtm1yKNzBZTUSYZ1piG6p",
  "key27": "5RUstgDvW6QoV2ytynWnTQw6WfeGHTVk2wgicQrKoprGh6Yt9UhFipMtu4ww9qa1jhKMHq6DmNWZfG3UVuC591bb",
  "key28": "4taVxZa7MgpwVLaM91mGkMidqwvQ5xCq8zz3oJPWyanEjfYLUph2UkG7wD5WwLfLXwQ2XvTtS9aL6Rjp2NuqMCfb",
  "key29": "61zh4ZT1YNoF3fTt34SCGVUbRJYZ3xe11H5H5uPa31Jo9w6nA9TLfvJvhZLZ91uTQ6RYs5Xx2UkUtbQmpQvkQa6m",
  "key30": "T32ug6kWbghWD7n5L1DUYnE9ZUbTpYGkUX2BVyDecQcR24af85nrocAkzQzZJjyF7vGAk7xWzZD5hUd9M6jSds3",
  "key31": "3WMEs4JuS2GZTTSnsoSEhLRprqdJV959QXHQsCtFCMPFGxroiQKJ2sUjtmquFpY37YZG1o6p8R8zy7NNiWnqVm1g",
  "key32": "46ieBTGmrnZYexN2Co3UT9sdbbUXsBx1TVK8i5ffJMQFdqPQ5XSkWCu4xi9R5Lwt6pPu7q7ixfJ88aGZjefMbnVA",
  "key33": "4UjAiocyooigkJeie9ztuLsAPjVc7Fcc1dc65HeAc735cwjoMSd9V11sgiEJuH7uEna3wRYoSPzUHvuXFJtpjEhg",
  "key34": "22oK6o9DiCUTQTZR4bSjEmVeQKesU8Pj2SRzuxuMzrgc1XMEf48u3nR8QLFpjxPcR9wAD8Vn756UW1onoshCgvsb",
  "key35": "4kKKegBqajxnLydPnMq3CHQazbGEEHM2stBscPJyDibeebhcF2GddSCYLK9Hm2UeU4GsZitCjJ45zSjMYRZXXith",
  "key36": "H7KiLUNFUMP4o57Ee7qSHBwH1kpfQNre3wFLvkzcZJRTe4ioicnqQVjJxeCg9uukLscQjCzV24dU2wtgf8rAAtj",
  "key37": "3D5mP1AJ37Y8c7u8Ae8gGKNemeu9dD3kkHiQbCfMXrB4tZjHMrx1RT6Tdsvu4RpBuC5sWjxGFpF2WmmFQnuQUexQ",
  "key38": "2MtqjEGerG5gTYJxnogC6DuLVBhvVZXMa8j4mFKLJQoSsRU4axbiupvijHcNUHaD5URjU8cexcpUQoWJXXmnixT",
  "key39": "5nid56BwzcCGsfbEMdSG7Zb7Z6rKfiLifbeir886vWL9ackyPmBujvDKwdEVpd1KzmZFEcJup1gfpwauf2KUPr7w",
  "key40": "4CGSAnNQwGxagDEBr4m392AYvCYUcvKANQLhZ9WbHcza25UwwUUBsdFcca5mNvmJnREAZbsdW8Wde2c6AaJ4fNWH",
  "key41": "2ifJkUmKcmJaHiXFincdMJSsKRv4JfeG6rWqNuSaNpqabzYhFHNavqMwiVpbuetN6GyVMpk5W94jpkpjFhzghB3Q"
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
