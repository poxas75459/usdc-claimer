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
    "3Wg2hVFrFFjABRdEdtKnpzgVNV2vKoRddj5NNJyCHsCrirne6tdDG7afCt3Y7JBnYJvAQCxd8oxNCZ8GWtFsK1So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oEqXneT4bCU8x6u3cbwGRQeeJym3UkDPmeZu81VSASpGS8vBfrmqFJpEuVSRtMhGNwxbqTFFQhY8q6pFddzcEQh",
  "key1": "ySrJRUePrtqHZYEGekzEeZC6X3QMzFof48BuD2qHHjZFrBpB6JACtnusg6jPxLi1vtjbGoM6SL2qsQ1ELM5A1uq",
  "key2": "34VbE3zSVZM4rCVajhD4bdrLFHTvW4FawmAKzSmwNNVhkKEK2kJv3L6Li4ZAyLUyqfwcJHjVwtLBiLoWKFVLycmd",
  "key3": "5VKmHcfH7v6LfpdVuxhEarnyek9DtsG8WVzKUgMem1RVFpt2g11WsVwom7bZdYRzPeGWhwR5Wq26WG9vepP4E6Pk",
  "key4": "318VqoWijCKXnqmiswriGBHqM8zAn72PxNQqdDTS51kq4bzrkimsQKZQpoWZr86BixRx6hkoK77rtwgEUisXe6WF",
  "key5": "2kcSWyEkrGtA5QT9FeXJMXFTXK8KE5VUtcejqT8YHtxUMfFpqzSfWmRq84Xipnvgyu6ibJsTt9sd6RJ5xRcEqewR",
  "key6": "2fHfobpt7pHFJtBeQXG893EFwQ6VV9Z8UK1LSP3zpqKka7engud1eHi4GcjGvZpaBEn52hJQRGpLFsBjLEMQxbxc",
  "key7": "5KtEaCtDZRNCUUs4QFTSPiV5n8kFQWk7XAbcCqp7iDRZ6JrwFEQLoKDffQs4UXLBKxCL2vm3t9N4kZC7ZeMiBNuz",
  "key8": "3Via1RuqBrjmYZfk5v9Za2aQDenkdApQR2DajviEUpCv8uCwGEQaWkSRDKgCTz4jYhFJzgjtaJ2KKkq1oboPf96x",
  "key9": "2icgaofNwGa4AgzqXKTN1q69mABgHHPqcrZ8AnEbCFKoZ1pxCbzJDeZ6Bp6aN6LRjMiqoYJNWgk72KtGovQD7W2w",
  "key10": "5gWarbrgPvVK6AZ4JXLjw1AkejovCLmwAL4yKgKZmyxTNUMoESe7YwEns7rL53ePUYLa45txVWNV2gbuAKq8oJYm",
  "key11": "5ffMqkvpPDDPDQv48nBxwFFHhkGoK1TcRAeTKzyKdzMJ4r77mW9yxTtv5QndswGiKi3CWkV6B8we4TdzMfK5ZFsn",
  "key12": "5m5AVguzYjKdRvRbfgquLx4i8bxh78ZJixBRggPAAGcshHFj1nBX2NcnyPQ1bjVmBmAfmCV9TPTiBdcA5athYGGQ",
  "key13": "3q8uaXKWtGQWxhM8yrieeAC8U99nhUTDxr3TLpB4Cc1hXUqbStdpsiHPcxaYLtszEntsfNRv9VHmBkKvcdTFyag3",
  "key14": "252qwbBUaTq2iw9sv26bEeCbQ1t9rzTwGU1FtuYvv4YQX2sszhekb1dqG6Uw7qe6HGKwm72xWxsLjKVDsHCft72q",
  "key15": "5uWWYwSE9S8Zr35nGwSMbnU46Kua7hLLnvpadWpVAEtsG1SnyE89PstH16E89Q9fyayiyN58R7WjWrbngwffMmiL",
  "key16": "3uLYWyEMWrG24vE3JEwvK9cRXnwbHKVd1We4oqyxdiELz7ybSML9SUkkmtnRYZhAgAHuR1bHFDb1XGK1pHwJCR5b",
  "key17": "3GfsQ4RXziVyrNzg7XyMsPP8kuJXYW4eEGzvaKUiVaimxYqcSvtedYUvqQydrKHS8NRGNwYaYMJpBEs8uDbLwvwY",
  "key18": "4wsLmHg9zAhmbymWiKkUhAmuJK1oejC3uYKNmoov56adcAENUZfD1fqqvLwL8eXTUm48b7iBBB7GFVd41dsXwHe6",
  "key19": "g44btwy8S1E1PpKaLF6FQFuh7pHBouaxifJo2cBRbjPAuESFCWwxg5Qt7DBtjfXzZx8yeH7akstC2rAuLvaC9VG",
  "key20": "4JPzyiF8AzKLgYugmhQFaoC6oDt7DAZJ84Gj453KT1Acofv6iYMdfGZ6KCE7jqveJ5gW7X9MxrPWNhJB3gfRMzZL",
  "key21": "26Z21csPa4JnwTrZotQX8v7HbV4iJVCg9xwedcTd1wuu2g9TotQoJcVTBjsu8uxmJfwbKouwhfid9Fv5FfuU5qJb",
  "key22": "4WgRLKaD95BRucG3UqbtuDPjm4xhveWc6EhMYn4KtF3zND8LAahLNrogwGyiSoLc5QE3YfkYwMRDiuymmbHX9Dct",
  "key23": "2w2AwdwSV3GL6fWefavaLe3DWsm4sU6aFFCAdWpFL8EYpcUVZeVEZs6aLhrt1CUn2p981CbtALXJcjf6rqoc18Yt",
  "key24": "2Yy8eV6BwsKhaqyUK3m2dn8TCjgPDDr6UX8FAyakJoeaYED9ZXZk823yWpgHsg28ZGhrjfzksPoLSKB3s4Ahu7ur",
  "key25": "KNYnm4KzGMCzwZ5D67qNZagZr1ReTRYEm9gcdzk9vCvFvfL5v8U78szd8utkG5HWF7VVUbsogyxbBJgyzmDzVg5",
  "key26": "2KvFv3dwMzBKiPz8ByaPJPzcuKZh93hGciMz6tmdC83hguYteysDRF8U7ixYkedH1nCMdpVMH92sywgVdN7M5wbE",
  "key27": "5e3NLrvXAhE8gjAFXPZH4fnPAMorJ4Lne6EBULkkpvQx7C7YVLoajKMQV8BMxMyuka6XTEgJqvsMTwHjM7VyK28N",
  "key28": "2aFkTnjgXdCyM2WFbnXb1kaMLpiTLDg9LKUe1Kg2hcmcjsaUCr8ASNj7Z3Qt6nQvGWHPkxdXyxLpPusNNdPnN75E",
  "key29": "46FQ5TXwyHmUikbLFAm5aYTTgt5nXAy5n2fPLP4QBk5YPpE2Vch2gEuoKUbkFm6XYuEj81ZPsRnTyTqL1BMsLXFy",
  "key30": "5NYif6rKsNYLUWuWdFwtMx8WtMxfsUBttDGCjz2Zug88Dpo4uLfcWvUdBAJobPZ4xXWNzJQd2mh6kLYZpM6rMPoK",
  "key31": "v8jprtFY8Kcpp8GXzTMpqCGqyTJCURkEZ5dzA3m2EfhzmoXavqtUGvibcZCaRx7drE48PcaXzV5fkkuL2PRuqLR",
  "key32": "3EA1ECUcRTJfNUVFNsYnnUBf58kd2kMEwXjrUsmeNc7nKHqK7BDxNm3S3mXkdNJC1ASniDSxqthvu3AfVBDbB1rf"
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
