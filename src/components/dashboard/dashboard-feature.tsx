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
    "54co1sb7XXtJgL7zBFTEZFFi3jxfLEayTJ6wfA5dKzs4fXs5zDu9zwHM6tzuVvjhxoWQf9zssyaqeTubFizp2WpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tBeozZjgj6WT4jXp3Uwq2PraMb77YPHQTCvuJLmSSqxNdfK4uwiC4wTAP45ogRfidYfMMBuMn7TAAJwQWixnx8E",
  "key1": "2cgu3ausgxByqDVigXXCJYXxKFupbWh3TtCHhvWWGrtqNtbCixeUBgagxNuqrXc86uXxBsxXGEDQdWvoTNEnyRuM",
  "key2": "4aBexKRco4K3qqmMm63m6Ye6k1odMJKiQjLx2KRXUkExeoyY4mgJmJtCSgqNSNRaGVsz35H9EzgB82VroaKnFhDd",
  "key3": "4wdGyp845rA6NCUXgLMy92m3PDje7W9625qfByxNhkUnZ9D4a2Yr1S8nsGuzpE4XgnPQnvp1fNg5PKiF58y4CnzH",
  "key4": "5eBimLUrJ6nkMbp2VkUqLRHzW6xjW6wRT4PbN4aD3dRjSFS6etV3UBMKxtiTRQLPNdrfG6u24TwJXJhSoX9df8Yc",
  "key5": "ZSbBve2Rz29ZvtXvEpAuiaf7ZFKYC6VBfWmRFttxLGA63R1KqhuH53vU6bxpjV3YFMwnYyaswEWginPEWgLwTL6",
  "key6": "2kBqy9gm1zWJ18RrVzZTSyiZNA8tsTDJrtuqpTiXYtDY8sjPxQ9y51xHLr5s36ncNuVAhEoDhgyqS3kVcYmvqj77",
  "key7": "kpAZCUkttz6j5QCSWG2kn98U9HRQ5qpFcwjEJ5VSobDULfmW4AtNvc921HPbLzuFC5i7KEQjt6bpUsHShcbANfH",
  "key8": "2fWPqL5Bssb4vXKvhh3ZVgSzEpPfUpeRfvnskHfr5tfjc4F9v8iVyNcRYpEmf3PoXPp844Nop5FSyx7iXRAuPrU9",
  "key9": "2bseHenkgofVH8HRszDE2SeJ1D84T59vE821urfKnEABhMzoGJPUVn9jRzkUrbyDbxy4myzPmxMMBpNSP19UuesZ",
  "key10": "44nhtRgc6AwtitdV9rJ27gPtVTpzYpx82Vo7gzWZHWXXouWrbpxSqFriCXhn8QqSJAqtJ8aQTeNFTNEUq7FKq2qS",
  "key11": "4uCtkiz1GQhhqwu8VBETNmyN8fNB13QW4QzUpYy2PXL7hNMjhLHuBuRRhgEsfnKhPshjS3EbQWB5w2npbNw2Lcbs",
  "key12": "4okmMCwmHRqUHHKWzpP8NatNkD1qJzjbN3v968ZvttFjGjbvcAcoJgFPaiAZnCwFHfRyGBT7NB3ZL83DHmULYXHV",
  "key13": "5PiA6Bk8Ha5WG8FfZAYvjyNdkPrUzAWLMhUgACFM5vg2GozRan48yEmwGWMFY3gsNUWAxNWK57sV37ZMEAaXXuwb",
  "key14": "5XpaKNgrZJRTSM13WFGi7fHECWefrXRonFgLqfZF1DyGduFAwhp1y5P8zyVvo2GMmosy84HUQAze7e5UTwRpZYMH",
  "key15": "4sNX1hcP22oQY69tCHfMGWQ9W3j6QTX5psiR8eq8Egn6Vfvnxh8Qza2CWNW7YrZq1vb6zNzz7AmiknReUnMD2big",
  "key16": "5Vm889JRwsHg8aAHs27S5QafcAYPrQssJWRwSNHcvX4aTV7Lx5vfb9o88T7naEBcKHGa7CMw6eoV9E9pvAVNPpZ7",
  "key17": "5XsfwW9bxgKmzkAKyH3V4euUCxDhoTzfMiuxuL5xtKCdtaYpnbnRS7dimQ3p1ks4u7MArw9d9fV9bq5uH3RJwo53",
  "key18": "4e8odwpi2TCYmqjFC3Ub68oHGFPgMRhHuhsGjwHbw7A45BeyTG2VbuTWzQjzczGaLwoqyJ2F66pQ4k3zZbPeUCBv",
  "key19": "Awiqwt82SFpioGo537hyZYemyLDrAK6FTuutt2u1QfsNwV2ExaqpsfrJDGC415wXWL5GF5V55oPCR1qMP9B9vGa",
  "key20": "2D81g4Ai2hEoUPNp3U9fGhc6VXi3iuJ1PfBfRfTYeRByptdADUBkhwAwp6TDdRKsnsxmXiZNYfDZbu19esv3HZqR",
  "key21": "3m1m6KpS8QgUgJb6AEA2ys7DkoUjAHSDTzQtCpeAKEQAVo95ufALpiUrLKcwB1tvsJGE19AX7MW245Pdckck9dmQ",
  "key22": "4spdVLqUcGgFK9jw3UwyFBa1emMAJhVykoS5qdzJ7ax7tyegjiBRNmCwCa84oFvSB69DfAAWniVtbozEz5je8PY",
  "key23": "3CtbMcMPrAqQKXemEQ8RvkuvSwM5B85myw21iWiYqQySmLA3NWK1BaDYg9NK6xgW35WMasgtJgqdRPTxUSYUHJ7",
  "key24": "4z5SFniC7CTwoJpRMZZudr5aMZgCaTgbYi7Tc8i19r1PyCfepQrjWFb7hzQK3o2dwzy2VmxQ9WYzHtypCbu8rdZN",
  "key25": "4zJm9GMhqaJfsotyXmdXVmkgjEVEvpZwg17x96nEjgYiCtjqj4mS45vVtcZh2U3aqPjXdT1eAS2h6uArL1NmkF2Y",
  "key26": "Ge5kXq5XeXMkxC7LSgcDBus1kVDWo3enpKfDSvw8eHhZLgbbRNuWwjpSNXetfZ5gFyZdFmAYeqDyV3MmbL3FoY4",
  "key27": "3w7hTHVb8xxCyJpYqDx45xeyKQPYx2t9Ey3LE8smJeALueZeNB2VVgrQdVQs5hWvLAnAEEbYpNBHDd5k8BhZnWgt",
  "key28": "YmWaLxmrhE2ZPFe2j4LJ7PJALJ86bm57JtfNLTP2UfK5VBHHAfLB5Qdnzwu7XKvpwx9gfJUkpUB2weBmHG1Ldk3",
  "key29": "5nXEMgQstp8mpu22PNqQLFWTESZoJcRKe2mNWWfn5AaobDSSyE8QQ3L2MzxrfMbTzNjTtj8eU7QnrcGWfHLdFLLF",
  "key30": "5YmyMCNS6FtHJAMyXLqLqGvapJvjdxpSFHMuz5EzsDW9SUKA45c2ifCE88eXpJ2tX74RrUVhgNuJRSoyEiFuWPrF",
  "key31": "2g5MZhNqNSR1KpXMxGhdBoBT7QzTRGL3tfwQsTJ9Dswq8nVs4giC2uW2HEb8feHNe3JaFz43GLmq86evTP3iNoCL",
  "key32": "2JJ1nKvTUGRvbZdxyr2DFAAkJw3L4cMF9AthaX5X8VkKso2mDzdHY5Ny2FfteSuwNudQta3Ztyfgaj9rcz5kUNiJ",
  "key33": "2Gw1gFGMqEDU2f6Mii2iZr4WUxPJRXnDr3xPVr2gdZVjweB5JDoTaZpDxMj9pJw2R9PkPJinudeBZqei4YDv6BcW",
  "key34": "2L9QJ46HurjEiP9hyH9dT3NmpqvyGBowwDZ3KHQKLQa2pwPokB7PTko3VRkvkXcqKVyXGhLA9ARBAjqZK5z2yBbg",
  "key35": "2EgHjRu81cpVDvyNoEuoHnBd1S24yaenNFyXTeqWLeSr4i1x2RH2DN6rhhKBFVmPk6MnAjzzwffiUzaLEpxM36V8",
  "key36": "4qrxyocjps5kFnUoVa6YUcYoDV4qMkx68MfTTWgWNwmaVYcxYMJXwR9zPUbWWpxLp6mZpVXY7FQ33GivzN9MP3ft",
  "key37": "3m1ah513Epz2uwuA2pygCy74XLhjcqromvutQ2tu6xN1rsYGUkZdnoDoSzFLZBZ7QvRXW9WNbXvjCW6tE7kQKNWx",
  "key38": "5hEMAkDksBX2PsRhx5gD9f4mszxVf7WhKAQzJeVagHxNtjFjs86d7xtt8QPxjRw1FFrZW3Me3CyCw266wda2CKKU",
  "key39": "49W4MXNrj5QHw4CroooGfDimUWJeNkg1XRjxpRMpCGFDvTWjrJTv2Mih6sx8grf1AqyPoKLZrBjnFPRQsdn6n5nB",
  "key40": "5KWHfvVJJ7bsNzFAW1KV22dm9n3jVjTTPRrnPCNnHohqbSAwiEdyLSdEQz3zHj5dwbSGxtZDVHPJNXnvtoRVGYgd"
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
