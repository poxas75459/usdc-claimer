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
    "35DJugdWZnL5fDvZvwoy77rBBoWtw2q3tu8gCxLQGSw3EJ9t1gtiiJmA8Pd7o7m5t2PtdHasoRTuX7mLDhu1Donv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UDYxd7PgQpnZuedd1BBxdAH1dndDKZnS3gJ6AVcZijDmbcVWcgQ5tfgXVhQfjmDx3wsRbEDFBPx6bZiLs9E6GGc",
  "key1": "3k8aZMUTrNoCgR1nUxjTEaRxcatpTiYeeZQfrNbjgDSwJ3s3dgpxDJJG7kft8Qzvtva15DyM1PrhBKodYH9kgKqQ",
  "key2": "4VcoiQ8k1HTFxwqkVZF7j697rUWf7YXaBZsAUBMyNV117kDx77YepmfwEurgMRVmJSSW5g9Z43Df7uuYhDWqyHmk",
  "key3": "5bNdf4oCfgkyoqKmFSqnDNTDCMVzotem5e2pntX7E163h5Wo4SWs5en8Ux2CPqYjdTuyEBQhmEALk8oEhZyNiYFG",
  "key4": "5qYpGDmDhkHMrg2xJNyydzeBtcKFKqCgBSaCrLeDsXiwTPMLWzctq4EDPsqxeAS7LMKbuzz62AMRDHUuaZUgVBLT",
  "key5": "4ksPA3L8HQRL8ESertE47yF7zSLMG3bNG4kDjaynihtEjegbJtaoFyooAdWYAGTBANPFVeBrsY3YDdccJNqEmxho",
  "key6": "2BmgPwNd9U3UBuJk2bnWBhowNkWxFj4wJgnKiVv2LLWYyUoZo4bdwUJmkHnewW31XZcpri2E7XmdiCi2SWUNcovm",
  "key7": "4w44deNjg97ME2SSyNTZQpZrkLTEQog6XQixpWPvzjW31cSWfveTk82kTqyGfJqBNbJaoK3sdLVbcb2aTxxsLdF9",
  "key8": "3auprxVZQLD2b6KjYSkdeZ4AcC8gBPFjhhu3u9scHFH95JoSq4jB6bfNpZDELxK2DMjweh3x5tLUaWXUNrGajBDn",
  "key9": "2oTwk5oqAkHYXUkkYUwn8QTv28i8HpDXxfnGMa7UCbcF3ZRJo6pdE4cHXG1nhGwomn1nh1PYnRgT1yxPxkBknVD1",
  "key10": "3qN7xyaR5Ems4dqb2cK4nPFUH4m3Hswu23Fh9r6Ri1j4XLFshWgoYkGYtSbxrQGjv21mpTTtoM8vPtv2FVBgxLbd",
  "key11": "3yoEsHSUXF4CzW99W2hjqz4SG2V731wc9HvemB9CevU38BZMsSQ2rkdqsrDYhU2RzVdzrGUc3GzyQsobWTE9svWK",
  "key12": "46zZBR966MS87YWENWiNys5s2xc5rSHha63yTGzin2YXYrTYkNkjAscz3Z28FSMa8x2xTRMC3m7nDNhoPX3DmCUa",
  "key13": "5gkY3F3eJaC7Eh7XbCXQUZVkT5iKEVSAF6pGsXXvf7Jnxc94feYtXuWY9QZo9MDb3BneGv9TYt5YWyTKsjugvtRF",
  "key14": "2eF2brTkuDkH5ANGf5PpNANasogog9JgG5iFj7x7RtCLjBBXgXnE6LabgXoKGLt8ADbkUe7ZnEWVLZcWa6foEse9",
  "key15": "44hCX6zZEMWN6NLEPydpWLVkTayxbrKKRAtBVU93i1K9Xv29pd4ADBvov5SQiomvEXcWNXRaVLU8KY1jRdRviDmy",
  "key16": "2HnfpfU3coeqgV8niq7fWdE4mLrmRJLapQ1NX2oyo2kzrbhDx5SSwcdhPbHGLd5Tr4gY17sSJn6LUR9wmEH9N1nS",
  "key17": "DzvipGiDBenebNpka9G5S8A19wwW1ipQbDzExuEkN7x7et1vz3TfPUCgTbqqiZ8dByKcXczx85MVtjDAyZuqWmR",
  "key18": "2izeYDNTeJH9iXqCBwFSXeqc2cmnAHK6yJdn6dPhV7gUoocwYbYv46oi2GceFiXEvtQTpZxbWzutPTV6oAimgNT2",
  "key19": "qS62mqNEhVufFVWvmBP3ELWBKgBCYdEQunAzvXBXWgpwBD9aoGpwTGJMSJZVb5w1GNLW8fSveFckWcuhreU6vv6",
  "key20": "5nTNuM3AYtugqQMKa63gdxpSdQEP8PYtzupTX7DZsDTEnKctDS1bgNRw6ubWSjNUgz8AyMgYR2nfN3ZTzUP78Lag",
  "key21": "5wTV7czSZJPrMKBwp2GHuoi5FaeBRUtKKz45NY7QerQ3xuYbQv8t427seRBjJQKMKBcETjb8BqjhMhiN5CixoApE",
  "key22": "3keKZkYJmqHVAK7QFZx87RX7oB8sv3a2dGfgqoFVeSxUcNRCtCj9iw4D4YGcKWuaa9KDFRpyVEjnG8FpHU6Jt1Gq",
  "key23": "3WjmTwuyRRaxjpDZ6A3xGSszn3m3Sibici8rJpGzQGhvVAQjPk1oDUGhwFkrCYrjjdeNftzDC16vf4RJdDJvQSn",
  "key24": "2qPnF1tA8UBiHpgMEVDewcMvp4NhFQbN5DtAgMJuLJJbm9R5ApLrn9rScJx7xss1cPewER8FSYQZxXhp3BYAFd9m",
  "key25": "5tDsaKKA7rtBXvKwVEpTggxjC8me8QB6DkGZ9nPjuq18UzVYN6VqwRSbdi7HVYsCSSfNQ6YyA1xFa6kNGyoxbzJC",
  "key26": "3fnmZwRmrZ4kTGirD18hj5pz9woqZBLfUQzSnrV5C6cwcYHqtA9t3kcPFroRZrrSYfDCCh3VBt2S58AmE1RpQRJT",
  "key27": "5jaLAYfQo8Jrx28jdh1iBuvtsJj5JmPUTrz8Y4Y2EpJffQ8Zvu5boF78qQe1Tue8iwAqnrEg7EPD9ZAkp3rkUrJp",
  "key28": "4wSaQbovpCT5811wmkPTSmnWKZi4REbpxzZYYVZY7gWzTGLw1EbaGVWy9m5EcxVxGPKDYFnTmZCjnczc3mJVYasu",
  "key29": "pcR3tD7mTTg87sbxSvWNcvXJG5r4aNgY7BdX9m4WQTNWRvvorgJsazgL5NCh64YXhriNcGm7A3MstFqZRyFTVX8",
  "key30": "2QRzq2aGcqfdz2unzMgCXN7Hdm1Vn5VUgt32HEZwr6SxJxo9iRkX9hNTYELLABhuftK8z1zMM1MPFazLuEVYnVnH",
  "key31": "3CjG66jMWMRJVyaqCVvskTp9a9oHPyAZWhXBYZzYkYa8yjWNHf8u3FAeLWgEBgQ4DJ2gd9noMRMYWUCmWSPkQtms"
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
