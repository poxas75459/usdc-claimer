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
    "5p798j9pLVQ4FoFsuh41J4BM8cXSb4sMYvipFBYDqX94Xo62eek8HajauRsxZdmGtFkUdMwg9YU62JY4eSoggfsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnp4g1wLJgMNnBDssEuhGTKy295jFnZkYcUqGQSY7yjDhTU5EWBAzJrav4iH55FYuLgNyAddXNoJxut7hYWLT6x",
  "key1": "726aDuWLF6LRsmKqCibPJp8ounvExcN7affoar8L1So4huPZSQEyuMMaRqJXZ9aH2uNe1QvVVEzFq6c4eTvu5Go",
  "key2": "5y2XvxAQEVALciAmL1cyNPZLx97vuVmdsg3JTKHGSAHs9jRNJCbQp7EeoHbnExnazer7KKu4mwyEXPN55UfySgan",
  "key3": "2xUae3sGQaxQRdPSLAG5mEZ8Hv2ZPUSUzp8bmeFwe4hoEHr4fw97QXAvev9LYzfpr2Hm4D9u8Z5KbB2Lpm5BYNV3",
  "key4": "5rLW6miBhYzEktPs7QdBQ6sWv4GsT2kNKQYS1WYfbPsmrdiZicH6YcTnmwHdQ5u2eUc3kgYTrWcqo4XRG5SwYAb2",
  "key5": "5bxaCi6K1Eo1B2GKusciLHBAzeptWUkEJ44J6G6BDmDD85B9aSbfsUhzNA3vN2HGabDuU5og2LWRCWENLfv4XjRE",
  "key6": "28JzUzZw9WQVJD1XPE2nBQaAsyKcPccvPTHQbuBEqVftaLzZ9ZAXwHAnwokiBmsEAWwut9jc53Ys5wBfcrbpHWbD",
  "key7": "3FBsD8uYsppFtNCLg6hwCJAsc7pHofZrfzbw6oGzXNGxX77L4NH7h6DhCCyQ2mrRfz4xPyRdVey2qH7gg7zwcZff",
  "key8": "52MPdGtrGLVkZb31YrJFZwE85HssfvUHTTiMSwBMoKSBYWhtRfUW6ppKjcayCtmPEYp5F4kTEe5vnoCd45GpnXUM",
  "key9": "GnjYd3HpCHnAR6kVVUj1h2qBHgaffxAufmz5SJehYadJh6TD5hnLSmFKAguFcp6U1suicieffToi7bd4Rxn99CD",
  "key10": "3AqvMjVs6HymsrjQATguzpRbUpfRuUD2jSYaZYCjiz3GpaXXJpHQs7Az66aFzcu54msbQMCHbvi4Q9gJnWDSPEx5",
  "key11": "4oE9zVVknzLqXee94vHkvFd1MjN84BF6ajcqa6AurcwfRLrZDZzkrby7ZQ2E6ovoaGremUfNqB9oxAr2nV1UEijk",
  "key12": "SzxnCoVTWMjq1HQEjZcYoJ3dVnGF4QuT1J2iBwHU1bT8Ueu7TSUGQJBV7fmQ1ZgveSGFYkc5wFXB9j2w9Wtj3Mk",
  "key13": "3ns6vanvPBMGqKfJiTggE2TZxXZDcNSMeJHEtpVUrJPkAJEDg7TzBcUufqQ7LroCPX64Mh9hnxGMYZMbQKt5Kj9o",
  "key14": "U3De4SbEYYCY1PM1yNHxX1S3AmWGRBoTZtfLjVcHYSU61PTjSoQLiGDxGSnBoBpvnRMZL4J7gFmW35e54sJLSWw",
  "key15": "4wkwVkTJgFg5AgxvTyw6ggkifXXZ4momfTSQyASu4n2fkh6cgF87k1Fef12zU883RnEXdnWXoZxnUSoubVpaQx3V",
  "key16": "BBU6gZAju2wkNEy5k1hcinvVeEzC7Qk6jMYf86hcX5dYVodvpc3wQf4m22AsvC9nrGuEymu3W2V1TkYmPtqtPP1",
  "key17": "5tHYdmYsXxuiUQ5X2gGz8Ym5v7N2NDenJUcxVqQzSqvJk3Jvp4Dq1eBqQaFaSaWgPyH3RzMCitTHjGgGdXgNiTLS",
  "key18": "4VmjP7mZf8d7bbHd1Q8f6dnB2mgzaxQ7VZk3tGnymUHJ2aJZQqxtpnaHTDmK3NZyE61BxxVk3sGRR5ssCCJpwidN",
  "key19": "2YhjbXRVVhxmMwP4DPzLtZHzDJdv91ewvKXme1i2UdZbCg5MDRKHUTha4hskXgcEiqeAhg1vomiCWeQ2ibwqFTJh",
  "key20": "5Tv2MaT8HEj44EqNXHaEsfKifCB2DsRxqQdR4wxKtDZrFW883Rn7UEiEH5XbBP9FtJqSJeMfyETbEoK9oLRsM9L6",
  "key21": "51ZphuVmYqdaU3rbL1jJQimXks4fbFdfiv1aZXVU9PV5hrbFRwaSN9C1SScZPzGymhAuoZWgggTVEoos6rrWX19C",
  "key22": "3b9QU51KEuU6CsYo3SWw3ag2vPCuW7dXR4LGfvY7vy8DjAXDLXwWk8xMwZVH3cWugkZoS4enHVeYJXZPaJQBjHKw",
  "key23": "5vf5D1qhrSPN6SCVZL6FLa887X1ZXNA5RRJgzB5CN3CM59WxvcvsjRmooCaxUYaWNe6bYFDgXVnEdEcsz4uG84Ge",
  "key24": "3Xp6smcHwqAPY8HbSxhGQJe9hxS3EFEP8TgbykvsAJdzHp55ZopURzyPqyFRMC77J7fuxR1gCzWfB5x6i9ouUu9L",
  "key25": "tTutWRteNcD53QRKw24XRUKGW21WpqP5n2cdTf5nEVvKxR2SbXaJF4YifR9CjgZ3YS5z8HF6rGSMijCi1o9fDMV",
  "key26": "4ZGUcr4Kpe4YFfE5Y8pKTfCvCH8Q9RNdSBZkgan1CdkVfBmyy6ppSniKLuXhiV6faXB9NncjtmGBBpnuUvjQX7jf",
  "key27": "2jx4qKYBHc5v6Jjkws2WMpHL84oGp4tpxUNBZq77EfP1Zgtu2VWRdcn8VxDcjmcjiJeEe9DAugUwNWZZLK7pr4Q5",
  "key28": "asmN4ux26soHGov1JNSeuw9RGjc2G8Zux7Ds2X8eq168r3XzmfVgRWPrPvZVsSCmoKg7jsaJ4B4HxhwhFtV1MTN",
  "key29": "29uex6BWRAtqTdG4eUSpCMaEkhV5sVEAFTXXzyvMEF8WC5nZyyevyX6HoAhPPcQndCUkCZ6KKxXm9K1QiDhF1Z4B",
  "key30": "4Lehng9NabdHJYcJfURc4L17cJ8sNJ9J7KTWrPe5B2krWcoWvPm4ReU3fhyUpq7NVHrWVi89TsiriWWFrSDDC3QR"
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
