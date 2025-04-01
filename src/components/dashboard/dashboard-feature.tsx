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
    "GJVQjfjeMBV9aJcLU2xBN2pHyq9Lox52NCv54sfm9kAc67nivYGVGbfFZ1FoyiFPtgD4K4Bvm5vLMNVVGh2KfYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QYr3TwnVgSVifYs9a1P4rpHBtJAZp8KA6U3YHW1gqfS6ZqwB6CrtMaN4JoUQFhdSKFyFAJeYZRZT4unFVaG9v6m",
  "key1": "5eQPcHXcsAq1SdhA2AbDBqMxxuf7C2unbvN8hE9hpcQh8ZAd3FgRtSt53DoDttjHpPUXRkReNqJPUmHUC3pqwL5K",
  "key2": "5sgXmMPqifnGHGjun9i5FwuNTdVPAACaxgKNDV1w117qmjY1STNESzbFZMjmtW2YFpM86NsrcmWb2KPVTUSN8Dh1",
  "key3": "KDcMKcw6evs1NVkKCigum2A5QwhRRWysTfFPNG8EJ1EedUVJAfxqpN925aPwjBNrfag2gXoGcB8PZ3MLG698zWK",
  "key4": "iUBN2pbXHvCpC4o6KbfxFRRU3hGZ5x68DquSADfESjq8pzhAmcgDnjuSNYhfj7DJuDn4JvSgkYgKmNz6u192swW",
  "key5": "WRZnzzr6Lw4Fc82t3C7eHsPqLkooHKv9y8KF79KWK24WEenhc1EnBhAHqJLUCKsrsSGQK4G3Qex7Rwv5suERkB5",
  "key6": "3sjNBN4swPkVgA5BkaszQ2nFrSZDXDi7h929NxFDKSzMDePixTWuU7toH22oyLSuTdK6AuBYPVPzTx4WkxMWqRFm",
  "key7": "4zpJtwULmvVPYh177JBwo4zQEAjrEpHfWoase7xSmP3mwbADXnKTurUyJqAK93BRpZHxFhwhhC9bRjFbyrAwReiL",
  "key8": "32PSA6Szc1wvU9BNd8nttndo9UDVwA36Q9rkSLyfKQMFzn3NKRFmRRWf5LGXXBSxypG7ZvTR9DWdL3qZxXvYTRfz",
  "key9": "3zEKfysoeTcZ7CH72ZkiSvPN8xgxMMsXU9R6zgMtadfRu3mdqo5T9X1gtjT68Lhe2t1s2tkrjyhea3bdoT4NHMa8",
  "key10": "2rAChVPUYcR5E73KEGfwzbYqsYUUdtXoMWhAAbtDvh88j6wy9Zxf11VvWdBdw21Vi3pc1C14Ye8ovQYgZ5yydzBD",
  "key11": "3VecDvPLGS3hWfTQAX6yCaGyAQodrAswij4ejmHHJTvzaqCqfpjHK7dPXyrZWfeg5sNKZDjepAzAy4UAxe9K2KxF",
  "key12": "3yHkJduvzCCyQDBKbqnNxx3fVNk3u92oosKdMq8kRmGyq1n9oudT9HMEZ1mMPfA2SsGUmEEkvT1AE9DNtLr3XUyd",
  "key13": "3uMrkZqAN2JgVB4LkhELzF5NM51Z8NJdfbbs1dhsLokL2GNBmob4KYXkrJxDDyjFD5Kh7C2v5g6SP3LZ5QHUtSrB",
  "key14": "4vr74Ee45Z4fEEkpoyjWuVe34HBcwqPx4xTJdFt7UsoFgibnXVGDEsQLJdkezoRZ5itGx8dWQQnvALahHsaBsVYV",
  "key15": "xTdyZq63WtkmXfNUhbWPXyAzLdPAvMv1Y5qVivJRKpnZ36tRGm5wSs9qX7odkC5kjy8Ui1j2v6MAJXmEy2hg2bW",
  "key16": "3HiJDyLmAtpYUK63Yhvk2H82nj1NTgAoQmHb1XKwjKnrtDHfdjdNW1ZsWm6x8fxgQTTMSp3XkAcd8tR69cZPoABF",
  "key17": "4VWPadhiuahbXLuPDid3w3u6j7dsjmJyhYXNnGxpGmfbGk8txUWhGL7NQ6mDyqzGEfv3WhxfinrJQ55TsovW8znd",
  "key18": "XpnjyPh22YH9pV1P8etWtRg5eYJi53YZCMjdur4ChknErZhJX4d38paB9CxMrGxCYTcxEfMorFNq94AzrcZrSDE",
  "key19": "41zYt9wfwjnp3mnKJQspm47xHMApHaDbakdrDhJTXtLQTrY16FpoCwQ7Fne9xzVyunKTnh4gAZGNbtDRnqych6ep",
  "key20": "LD4HA9VKquWwYe97ELCQcDyagRhBcaJU2PRjo7spxkBdKzwaooYGn9B3MG5ckSoVJrrJojS74pvVZnWtY3pSScE",
  "key21": "2WUQR1kWoA2D7G1CWnf78qW8gxaobgKogVzAbrQ93kUj7bWsfnubxrT568GLqNDgtXCsm51tdVRHUf3k92WBhPZf",
  "key22": "5zTK8hayXNRVPyX5bFJZptVP2yNxd7dTjSsFvrKpRcg5dM6pJnE7NnwyivwcNTLfLvJSrirrsndqXQBZBfvQJyfn",
  "key23": "631D6yV4w9pfiQffYjLGNU1twZNWkbL6TE6i7AoHai14rUwpnm2QAa6CYvnZcyeijaeYknYaxL4KjLJcytbdL74z",
  "key24": "5aPjog8UQZ4geTN8vsPyM4GuqkeznqsmCRbd3hEX6K5xWQgCdKzS8nBUgCnmJ565VQG4vb8JH4s6uo42DttuRyAH",
  "key25": "MCZ6L2yYxmSAw23koc8THM1TMxgPfsisV2ba9MRfP7VUzdjit4LJ354zGVr3KUZfGAdqdvPgat4BfGNh5dHQxu7",
  "key26": "ybATcjnX85XNWYGiYiMcuURSJMhbKvgbr2L6eBSj7M4NEbX7BUtCVdAGxxxcAxzrHLUytZLSSVGPNTmmM6tVSf5",
  "key27": "4aB9QE63iiGdEPUNj71PURorXMPH1CvmC2CesdvpbnMb42hLBJpLMiv9WKZx2mVEDA5f4G4xrUD2H1Nv565joBUP",
  "key28": "5bCaCAaLs1QGYY7N7MMbb95dGLwc36u8JQv6DHbuvijVMV4ANUbJ8vFLyUqNBHgbxibFJcQcqsA1uivNVFhYZ4Hr"
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
