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
    "4Yje58RMk4YpRHquhH6uh9jzphMUaJ9RXosr2fDCP32QSmHhQrb3vWCSydsUsdXzQo1JgH82Rzp1Kk6HKzdXE4RP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGyfp9MMDJMg9Q9A9zyxva13hdT5EKUnNeKVnC1PTuCG1cgNB4QdYEi8kjYVF2vkQkXcaaZsf86Lh8m1X4nfFB5",
  "key1": "kXC4hjkmvFnNWQk7VL5E4xX8Ba9ofdBPwtdQuc3KpXnMQY3Ay8sa1VsdAsZu28AZ3ZB2hxxELWkJ4YbgHpHCae7",
  "key2": "4H9Mr3s3yyxLB4pBN8rsAtDUFb3Vb8r5m6ZDht6wmRepRcqWeHEXUudsUXfHUVV3tUK62zQKZ3MhZjGB5t3AM4mH",
  "key3": "4zkovGa5ge3YvfeUWva9MsjchoR2CP6JAawieFUamhf89wDtvNcL3gwMdwPnJVjrWRdoXr7UvbPF1H8tEvmiVDwi",
  "key4": "GwLMUZqNHcTXmDC1SkPRr1WNVChPHzPhhvs2y9eacwxjcLnKqvfR7hFkrQurL7nVcebiKoWano9BZznVzW8wwV3",
  "key5": "23gRPpQMpaF3j2aKrzzfu4GDB9ABEGXVnZa1BgvXDLALBVNmXWvD39QawEW5nM4zS6PKZuu6EVifJ6nHycuiPSDY",
  "key6": "2XtqbNQsJgwrxPCjEYG4hBdtx58wxWj7ptxRM8732hW8cJcC5fqWJhQAJrrZzyg8MSU6QUn73vShRiSBEiqdAeCA",
  "key7": "5hLqUmMABXxWEkMi8HaRRVFoQthoohRFoPR9yQnLC1JmzVXPV3zPAjDsbJrC4QuhLJW6sj4WM4B8gqhA8hT3kjo3",
  "key8": "3jLDq2ebuVTS8cMUkmUrEUgZ9v55RiBNJWaeCjGeHvV1gLf4a5GD9tW6iZq8PXUmEvvg5c8o9PcrfiocoKHoFy74",
  "key9": "3rGjPBdZ33bp2nnVN3mUQ4GFKjHQrjV4Mn6eqFvxi4eUAjmsv3hDCNiLeoWuqEMX6sXrz7HFg5PsbccnG3R5qH1L",
  "key10": "XkDh5z6a1FVL8dxf3g1kMKNw4CJnWU3b1qQy3By7ZdtyM7wE6AanKHAk9BRvVQWtTDHX1y9b1LHzLb3zmmrdzBr",
  "key11": "5UDMF7jFrZBjAiZAXY9k4qm46j7HFMgWsc1r1zASsuAcYEQHC2CxxKkd7LcPSRdNMsGVohYEyK9arZkhEJivHg4N",
  "key12": "4GUWqTUtvn7H9WqGrXLYNhDCLfc8Aui7VqV9ifmKBKxaAbc49CHMQf69JhEnYKsybs2ddeuY7z3k9jUniTdSipTT",
  "key13": "PTeNb1ZrqX3g8eDdLUeWiJ1X6FoXXKhLo9ovqqbyXXgdWQjcz5mW8sViCFGn3ZZg1Yezy7tZU2nBX3D7BWUybL4",
  "key14": "2XvGdBqv7tHAHtaY9wUdaum9nf77ENoijVv36DwzEYWWkkjHtFzi7DTR49RM8AsmKpZz6kHPwv4moPxTcFocTTyU",
  "key15": "2ihVdtT9LgnVnRZRCB79vJB9ffoKxpJpcUKPH8n5ZFmmCrfvhRqndSAWny6GGFv45DpcXb71vqRx2SLWFPdStCBm",
  "key16": "5vE4WdEJ9Dp44VS1s7EXNdMUJm6DxMxPkGd7GacsxbU3gLRcWckHxR8DVYyi7gMNRcGT3NkdwGiUswBBaQcV2t84",
  "key17": "5HhkQx7Dgc7HB4bvrJ9ATbjmv1g1yQJjq7zXeMjQhZVkkG4c1m7mQCMAWQKRR6nhPEp9d9VJq8GUN9ZGUhWVa71h",
  "key18": "oHLAc522qPKnfc9MdnvztsABJ6vrhpGmh5iuNuXJHTWzcKuf7QCtRoGq4FbWNbQc1S6vQr7bVaUsts7qsVe5DiP",
  "key19": "4vVoFq62dmeeEvM13mRQx5L7Gd6iVctTRkbm2xowiFAPBGjPggPremGQuedVCehyCS9Wo2EFhsWfTVmn7io8D18V",
  "key20": "2Ubn4EJceG5L8DgxFJ3QfCuExieVpb5m4t5ZMR3itSrtsAdMrmyCYuUQxX6SKGzGe9vvKim5aCCeNXf8sJSFtbYq",
  "key21": "wA247QxBsWTCaLQMKwYE7jme4c4N199ak9voGvY1xahXSpS5Vpby1AroEH785fwzvoeX6BsSCemDC5bMXXT7suD",
  "key22": "4jYxgHAXRU82Vdq6awcYKJp4hdPrpMnPK1nwy3Vws4qp2BGhFspBbBTnJB352Pc6Qzh1UdJkhhccQj61rngBGCMF",
  "key23": "5cFvdV9iBMHr82rCNgsUS5HBkWL2reGCYLB1Ge5oEwVhKSGYtftGeL7WfuPR1V7Bhxw8WBQYEAuzd5X1gVqtcVyC",
  "key24": "5aVzQ6mVkprUaMJCrF9YpjX4XoJFNpXPQDD8diXhgdNvFEVa6udeMBkrs9g5kwgv4GhFU8BXwRXahkjVW7TvzBw7",
  "key25": "bKteq9Vht1ky1zGrVYRLra9HvbnSD4P7w8L4TTJJmwQPtpf7hdysS53bCPER9th957DVUisPcKWpu4T8ZWYLCJe",
  "key26": "5aJDkH8Tj3j5otvbAFr53zTfGA2hWm7aEMWGoY8d2dUoSP1dd9CikkU5EC5ZYVxLmZtNpMZGtYUbGMQHGfVdDg36",
  "key27": "2NdXwx1k5hVoAH84s3tVDkDoFW3YrqTxhNNMixwYdzoGTcoEQMosFRE7sebgssQBiyKippLS95ZcX9zVcZhSvujf",
  "key28": "2kfZ8jvxvTwcSq4HT6x1Sa1qMZvvUqbUVGnKdYbZp38XJRaRScPeVbUvHnJNiFxrtsvzqk5NvFFD1xKfUpTXsy1f",
  "key29": "5wxEWq5vbrXQrwZZFN4biy7At1A26ZVvQqqqFBZC6GgkWXKzF6EatPuXsEKFrg3YwwNVGQdwr1LnZWVatENfQKcC",
  "key30": "2QgQfNU8d8gpMX51DuMXM9GHJibsUgLw6GQrm3fGrfHWaofVTvdm6dwaop4rqJjcP6z6UdPJv5kk4mt2vp1Lzt6r",
  "key31": "4PA6oCR8AmyDi4BAjbxBy2TtKCGhKGak3FUMZy1f31xAtqjEY2YjadybbVcQRjRUUT5nm4FAba1WSGBcNSNbVqH5",
  "key32": "zTed7A6p3gmmyGHbq54d4j6xq3p6KnaCLoszvr2KxYUpxhKh14H2nYUWq55DVm1aHwvi8uKPssScfpCPXjdpRz8",
  "key33": "5c94p5Bx5YYVGhXcU8czbVzrn6f4wGSakhdtbp3c3e3gPC8AAse7KPjjvkYYmkTPkWWzykDmzaJzf81E6FGRy87p",
  "key34": "59L3WvPC9BHm81NDcrbqRTKXRQ63iTUTaGgaocenE9tbF3Sh89JgMDyvC8qvsjzSwQrjbGwaB1Q7Nnbq3M3FuzSQ",
  "key35": "9j764VMJSVFsprwmLfLKVrtkPybXycAQA1hWQ5ynB5kjKT6arHBkMhgA8oFpUMnYp8oNFUE81cRE7QjEXgpvvRV",
  "key36": "4Rjd3eALeDbtq3q7YDthdK5JWD21uJaF3rWy82yu3AwUsA9TSXnLpTqGq2W4LspnVZV63Az696LN6CopJx9G1xN8",
  "key37": "3n3c6Rx3VZkhaesy67Qis1SDvMwvLJXG99YAskmKFWRNFCBDhLm2Vs7m7EpWoge6ynrtHVqkdAZFhLgQYBv3N2f5",
  "key38": "3FUQmPtyxGcgxETtE8o1ezcx3EhV8uyFYbxCQ87qSRXUFR2f1rJWcjmbgxRr2WT4omTo2FrxziJjpgu1hpWSxSa5"
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
