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
    "5W89a1687Rr1Jzs6NXr8fNs27jhARk3ke2U3A2VQSn7Cty5tiwaBK3k63hjURfhwpBSMs9h2apcDsen4E3d24JDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XFf8zWU9j9ZKmL9BDEwvGct2k1Zeun9jaGftEtzjHY7uMDGv9oxiQuSVGLEJqPK248ZFm6T5g3s5Nj2XRccHT3a",
  "key1": "22djvE5y1waJPAEzuge1pXVpaD2khx36vc91wxTGg1Dt25hror5U4MTPXazdT3NU6J8jsEDJcv6c4CMmQXjp6L4d",
  "key2": "5nKghv9kn9aG7XtTYJhajYGCsuYRNztZT7iDYctKsA91vo9SGQptAcnpDfHBaWPR6G2Z9HRLk54tFihEDtZphdUb",
  "key3": "2Stj2cUiKnz77kBUDK192UBXWvBZWRbJyBQBvFH2d46r9yyAnzqyBUtX3MtdpxrLXogDCiTnfF8UmCSqMM1sAEPy",
  "key4": "22XHu5QBkWyuXS3FwfrQ3Kp8ePCPrnQRBd1xXyz8XaefKTEnedQsAeCc1oanZFPz2pALPHEfL5n3jgfXn5uYC6rA",
  "key5": "4Mn5LfPJSo2LZM91HbEQnzFLK2c6qputvhzoTgNBsJWoHqteq3GMMd1MT64YLc3pnmVB2TkjFyRcHBxoASYv5XXS",
  "key6": "4Zc9dLYdTUBdAoTM44unBLqQGVeYeUrh7YtDGmhAP8JUzEMT6aRUjWeZj3dAPfpV6LerJVU9AgM3dtpJ5WMubMFj",
  "key7": "3FwKMymr3gL2r37zmXjSftXumKSDZWaHDWed3mZNsFUjuHXpzgPbJjcLXhax5V6PSyYnShQ7TN4QgZSXntMJxXTg",
  "key8": "iHLoYF3Bvbv623wZiGZAKgCa13VYxm1gGxpXWZX3C7ohZDQ5tWEBYV8DbpkCjkd39ut2V51mH1kcDKs9NqwYUED",
  "key9": "Z4uuj3MPLdyHjz3nHU11izoA6hmrUQRXDRTKgpvnxQFGC8FxpKZgubkuArGfAR9Gqpty6nb4pTi3L3KHb9nm5hE",
  "key10": "4SZ43JTCQBk1QUoTtxEoiFmzRKKrgxcaJibaUXFD1u3BWujGJLc1QEYhVksTk9FiuU8vH8nSHzBhcAyfJEw4aK3D",
  "key11": "61VazoRBhjgAp6Di4inptoepVB3bwjKRW3hY9s9ynKT3HV6c2E2UCDChZrTEWhHbWcfmoZLrmTS2gGKKqSGDwDTM",
  "key12": "3714V3qJwpEE7wHAJ9EaEj9BBWEP9xUKUEMgiFnDVgLdLFLKyiDRTRoc62U4WFkKUfXeaeL7Y6jRXWq4KVWSMX1d",
  "key13": "36AZZcNnF4m65DEP6cBAKHV9xDMSJ1xUpBFrsQQAovtZDLZVhevo6mUuqq3Te3ZRnGMz8ZXQsyT5wQ24KeMqPQVf",
  "key14": "5sLUvqt4eTxzBGyj2uRMG4SHQjPkbNARVhG6pfQgoZSDL97DtA12N4TUhB8fcMqUfGxuSSm2vGLVdgkym1gg63zk",
  "key15": "2NUrMmkuVcLc3zTdp7ynKTVxJMrbhxTyrKVsTGiPavUcHGtVbnEAc2zkB4AMaXqsFB3WpME9fF1ZwSbvs4Gw7pZX",
  "key16": "5oVXR5axv5GCaVU73jC9aDLiE6cPu7vkcxQxV8BzM5eVrhyfwRj4UFsCP6DYynqviNY6oReRmTtFZUkkBwSQLTAR",
  "key17": "viLReSfz8HthchpWR3xiBb61fxvtGkgXUQDF4Toq39kgXaViebNXh1LjT5gZuLi1H8SBGdmpSdf4XNDGgwxy6NZ",
  "key18": "ea3d64DTh7vLLTr3wihpp7Um9g5MpzGH81RgKmoXkT9tdefqM2u6L1PXRZEFhcm9KEyE1czSB8iXde6azFJLZ5C",
  "key19": "3LX8Q4FKoQDaJUKR1swNtxxtLwHj5XRe4Ay9uqsYSf7D2u9xQDcF77MZrna6infEYQgwE56ets48n2FxqUDkpE8Z",
  "key20": "34ggkdgyQ8aoY7NwzGJC36nmkzwd8a3YiPikeMTww9WDYGMXKPXFnya71Zubx3jQJPvY13y7j7ScTjfr9x3B3rzX",
  "key21": "2PcjCAzUYvKszDgQiVfQmF2Yk4LkUPcTSK4kjw1UyQbkk7EbcTKDq9fFsXyzxq7ac5PtpSjXUs8u7KgKuwCZryBL",
  "key22": "5pnY6FjXp2cmidza1QH5g3fURmFMNRgn7bksJzX9rCGGvMbbnp7YGuvJmjAdH5uoyHE9GmPGZ2dbNXjXRSnuzzJi",
  "key23": "5FuzuyN69S2un2ndocZATAgWurgtV9rw5uJob7Y9BH7DJR132n9BSkjfFULk8Eyh6saNrENt2ceWPkNzT29qzmUm",
  "key24": "59T71G7CUYGVnDvzYRJaGuS77ptJXReeUzPX9NhGeTVfKbot7W5R5N2BpuepygnPGQtdAjyrxLE2tMw5qvYq6nPD",
  "key25": "3YgCnaqe4Bd5MBHkguLiQYDVLjNPAoYZvDbp74HBUEdJHTkqnFRHZ8msiX3uBiaRxcjQMM4bqndi9q7DQPhouqpZ",
  "key26": "Ft8zgPEJiVSu87oAQ5oRkRn6xJNgbnX5mkdbSU3jfPU11aPftyymfQAxL2d9TLbKqojm6R4DyEnik5NQmufqKtx",
  "key27": "4Q2rgMkBn4GRWM2P4Zdy3EeS4UYQ9qCZTUxEvYZA7msUbRjWuRTJm1sAhvVy6FMRiQPN6n1cv4NTGcVv4ERcpZjL",
  "key28": "5tnFJWzsfrmTeSdmyncvjoEQycCjRUV3ycQKDjsUyv9XmabRbsR2EUMgv1h3e1urmJBTMajnEHan87AA2tuVDLqT",
  "key29": "2trWVuFVyT1jc8tTqcUYFonP7UV3xk6EDxjip1quBnyjvXAfxVbLkEb2V72HqT8iMCeqCZEkyKTSCrCq5upTs2LT",
  "key30": "3kADLDJ2tmytGNJ9NZENyGcBBxwJqxQiGs7W5ha7aNLjz91gxS7xA5aXqhT4SvNtCPdsfJzzShZcE71Dz1j7UuzJ",
  "key31": "3GYneKD7gumR41D8Mcu1ibzZFDN3VbrDDwThzQmgCXV5XEe73qB6FuGRYTG7vq7865Pr5WabaFk718Spbq4UpDqA",
  "key32": "53BGZvz1aHxTW5CBx1FcpLWELqsfetYkncwSGHC6rfixtqdxoRp8TyxvEZfjy8nn7nRNZ4E8zpYX5poJnLS5zGGJ",
  "key33": "22aHTvYAL4BdMn3gVKkQ38D1NpLDkUrVydh2j4S5eUqTe7rUKnfHQZM47y6rkJbDKn6kFpZ9zoR82LXfGKaTJzkm"
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
