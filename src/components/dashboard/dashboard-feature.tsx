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
    "27docsWreyLM9cyikGzHC1GrMrnpE5e9y9f7CdYrPkTVTyMSwTkNhcicJbxjoTJ3XPDZhAg6Gx4KzXH4mvTPuXuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oD2axKDseeNxDuTvaU4giUnsN9onaJeYE3BYD2LNxparV8sfZ8un7gQRNLpoyYgrCaS2u7p1k7bMX8UfjM4A8i",
  "key1": "52Dcgcp7k8994Dr7sGACm3L9AbRgSs7Q16G5Z33neFsjvTCibFoAhB9yGEf6sECnK6FeV9h3VHk2qpbpmsrQ1v6p",
  "key2": "hrd1PjuynnVbtC56DcHRY36m2JKrGUUSFv9wvbUW2p713NbihQLe5BMXhna5w51ETGwWmm1jN8h8hALF9dfjLjv",
  "key3": "gPXHJEtNGcM7pVis6tqfv7F6ngVNNe1bSEskiXQCUvKw6bYjsAzTWrrqv6JZwxuv1djWjTwpTWMx6VQqMRx8CZM",
  "key4": "37KzywA9QSnCj9nX9DsmFVZGSyBYPYyRxrvvpKHjjkQosHrNcji6QVADEypCpHRucETaLp7QBAYWy91t2GHRUJjU",
  "key5": "4J9RKydzawHsP8KjAQt5UAwfySm92fKKweUkmgXLqF7ioFopfhKFjsYQEvxiydQNfUEMRqsn1cS1XVgqev3zDeez",
  "key6": "3rd1Vn5qCFzYLncaDSoqh4xBVMNpsYBWXz7kLDgkcpS2JGaU3nrySj6oyM5SmpKsUpZS31zhcwoRhdwk2DWzGS77",
  "key7": "4Pwjk1yci5eLJp5aK8gvDfTtkpsbeY5v8ggP2DFJYaMyXcrdChDEBjfEM8UPPFz48VktUJc1CUdQLpYW3BNc9ayD",
  "key8": "3oSh6PHRRFQQ7LbN1dnY72di1N1fLFPgpddNaQfkmHCUV82K5rmPjKsrdhna8xsS2vxpSkEjTAAKwb7XkMgbcTF9",
  "key9": "VeX194a9eGP7AwVMnzQFPxCjP79RcdmB7AHKtDNgLrYecJMvqQbSDRLQGBkZ7QWv1US4uaQUZBEqX4kDNBJ1CAh",
  "key10": "5tWqejYKjWGXtmvkiz38efK4VrmxdVBBvEC2RCpcKub9XAufvbm6XEUZ7Sor274wzUNohvrc7uVFifU2tESVeyvj",
  "key11": "62aDwRvYdMYdRCWJCc5G7V2WnVitWf7XqeRyiduD6uvUaGKKJugskBx3eC6tr6rRWr2Riix8Pfx89BDPFkSTqMS4",
  "key12": "5E8JzVdRsYMQUs1RqX7VjYgHGNsfEzVWP78fMysZeDq27YNQAj2yJBqmC3dZETN7iUjShj3DtyiJMeTpw7AEv5F7",
  "key13": "5P9E4aBVGj5McdRqW5D79jPWupXcqcBL9FQf1YgQjVxYPUZmuR3A1idcF2SfiVNqMPR5AZRSAjPZnDe81rTTxMQ2",
  "key14": "2NjY3Jykzg3BAsh9ARZ7T4sCnnikykbNERVHxXj3ReVMsR8PBNq9Ged7ACkGFZHb6nkM6cuk4hnd78zbJJKdJhDj",
  "key15": "2UAXiDciSwXSdTGjyybq9UjWfGWcEpzwEar2eeSiYQFdDm9yRohiTkefYQJcuJC7LTkVqN6UC88ShNx4zXsMZCBS",
  "key16": "BEe9L97CcJzkpTwRhjgmtwBVCJyNDmnVyhAevqkvZnAHbmEDwoThFY4axmJCRK74XGCrb8jMA69Hxe9F4bBnchj",
  "key17": "hxZmpTtXsqJ3qV3jjLkLrR3Xsr8s3E5zkG2Crvx23rtxfRsomc4mmZMKUXcbNWBLjLoJbdFSALNXJF8tw7mo6Jm",
  "key18": "5EBsRXMkYf3hsY3CZRnxasSZ6uxQ18M2DvdD3P359g2PNc3CBz2Uan7oT7k9asg4ZMkmD9c4V8Bdeha8m1Nkjhzd",
  "key19": "3k365wqeRjSMAadPDPN8M4dspWopQZMZVC4KCc1AkzTB9HCi6rwafd3qjKqcyKxaoYRGXANqNKiUEhQMb2N3Qzzz",
  "key20": "4aNBz2Eodj6FjLD1w98t8EUeXLR6DH8ghq3mYqPt9zfK2sFm6VEjBZ9MR7Uek316Pc5o4F78ynwHP7EmkZXh8NFX",
  "key21": "44C6PFDzFZJgPV1Enz4uejEgG8KDhJYrNaFM2FXYrQS4y19LUMJdBojidFCb12zfvqEs7YbJEbruCQEExn428KNg",
  "key22": "3XPepUetRubtjvyT82pMg5R3CXUTpq6CYGYoVgxQYik2J7WYBGVKUssLpg5MrpBG77kdCA8A6wZxGk1zf57MvFHE",
  "key23": "48evw6mH6UFaHmB5kk9Rmsj9N2KidP4TV8EZ4HN8mzYAq7c3oeQSejRgCoBEUh2p9S5oArjS9KJP6Sp87Yfw6nzD",
  "key24": "cJTJNwRJm25tH7CEyuRbGQYApAekDQv7bYbGbaiB1RAqti6dkguJ8xszHCYiSxaVh9haJ7SaXzuFqKTzoC4Upn2",
  "key25": "61BXkeBvPZ6vA7uQDo6VaHxTYdqwcef1vnTotfNv7dot6e3sjc4awHqkPMjfTqtM3uXC2oK7bsrxCUaPbQWvS3fQ",
  "key26": "4gq4MKgEh5ZDTtU27xXrb4zwF5pZbSxUpteBPNyEoGVN9godH9d81d6o6vxCrnbQJiaAsHV6BcEWAMMMexYWyoZm",
  "key27": "X3mfdsUsNqmCbkqHNeRLVNVV41tno1TSURmzNrabZYLTXirvCuKVEChCFJCSHYQgYEwFJwbpafuFtcuFhWE7VpU",
  "key28": "r6RgPVaQTicUKAWoZ1t1MSGYQUkD9TY8BRtcvMuTQSD3MSc9xkH4kdUZp46AbVR25akRKaV1cYiSFh5V9cnaVVH",
  "key29": "39V8E5X1p1NQeJJUkTVaJaVckxLf547NNsKNDdNjyGj6eKw5329wup6V8QyMmoA7FKSYkefu4NHZQQMQoUpivvgs",
  "key30": "M6bpuvjmGfZuCoshDL4qBTt7pLppcXbhNTMVEwWe9d9rFHMv4Si6Ez2Nv2nmwAZbQvoUuQ1ZGq3cCY3VYAFY5nt",
  "key31": "2XBS1X6PX9NgZA6fiB1yM9vcobuDwMyFfipyQ7i9fKs9b991LUdKvVccUgWHAnnZ5cfg8Zqq9SRJpZoJ7NgSTu9w",
  "key32": "5fhvssoUDsxw7TieR4Nsugusg1PyzkcGevdNwJ3f9y7YWPKZR2bu5SA1dxHDPxJ6ZU6rMaXAcpZKMtsfJkVwatMn",
  "key33": "4zmoAK6n42u7RQ5MBrf7q8t4668dF62kcwmZqhFpWT8CTp1H5fVZk52U7e6CH19YnyPaKFLrphZ9LFmLeo274hdu",
  "key34": "5MUjCEpiXstmtvKpMaNRWyWBeGKHUudhHtjA42JotWeX3uf4D1gcJxKmg9un7JfAVr6xCi8kLw3eaYWj8zJen4sE",
  "key35": "2oFzMhQzdgMznNgPmbKYeKDAnc34xpw4bgRVgK3A8edtH263SQqMVmx2cN5C9mUtgJFrX7b4gmE4vsXXZmQzjvEf",
  "key36": "5yAEy7EgaSb8HbujxRbXg1UfsGYZYg1rgnj3PytgJzoXU5t1ivgW7A2xUEQM37NXYeF9wxgDFwwKQBsoCxVDQefX",
  "key37": "3bowcVmhyEvCwr3o4RBsG4bn765XiKaRwpArCbUPTWe1sKZHrTnCE78TboowJxtmVmarKcTRDez38KYzfAmcPi5m",
  "key38": "5heieMkw1sayeipQ2Z4YT88ZQS88FF6kMEbQm3w5sQ7dMEKuKZg1XPp79bNnQ9iGGvCLCRdJ4VCEfgS1dezXFjQA",
  "key39": "2gGPAt2731bK14wQAiouxRQZzFjHws2qo3kRj4gS7NmLkBm76TaSgScpZBuqaTsmtcxTwJQmxtcjXECoj7Sg4NzJ",
  "key40": "8AFaqCLP8rvhWDEwjpNGaBG6EnsuXhPvcMfadzcUAZ4m7Y1TkigrHU4ojk3R6aimtELSyicsgzB8onB6twUKR9X",
  "key41": "3yVuKZE3x1RPawLWBF4hLqGkQaViD5PHmkeohT2EnuqDM3TKHkK3bNUjp6AafZpRozvvkARxHheiBRzcAk4rF1y9",
  "key42": "4Tn2uumzcX2GDqCq7fZJnDWuctDhbNr8xMacc1hs76Bb4fV6M9SVxr8E5Y4vtawzis1HFeFHPFh7R1keHHQZDAXy",
  "key43": "4CXu8GhpWX6Pti28sofggzuhVLyk9LMgm1QaTHK1gpZ6LHTEfYF8Q8MqG7xD1fTRdQKqVrfG1gh8rrmVe3muy4Eb"
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
