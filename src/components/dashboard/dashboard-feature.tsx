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
    "63pQ6j7PqvHrjnQB12kfhNeE8uWafqGDucc4pRT7odH3cvbucGZpkNo8DYpnRq1hy7CiviPkqTt3vcgeL1gD2gJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66up9Uaz9Q7p124fb9ufvACZ1MAKku7i83w1bVYPXVLuXiqcE4XP58j2Ltt1ZBCfRgHP1wi2zu7rbMvkwWuWiVEK",
  "key1": "2NiV5Wy7rLmxp6iCGpntVLyZVcQoa71X7rCvGSfR4SdEfnYon4u1JkFAqBZie92W31MSRdYAhr9gpdwKCDUSNkdf",
  "key2": "4Vi9duLKwy8kXxm6cwjBfMT5TfoQPcA86m9SNq9q318WRuZZYCjU6iPyCaFneK46MpAJw33cNc5SCn4Br4XhhmUK",
  "key3": "3oVRcqcXT53yzfAzaQ9UjqACbRiGNmpK2drDA8YqTPtDdhawLTRKT2d7Vhqtoczgrh9R7YLd9ESW9ZNnrmP2ACBM",
  "key4": "3Ep71Js6T6PsZ3D9j5DoHKqUKpiy5f2WLzdVW6RR67vqVmic4BAJkbbqPoi25sbTccwA8PHi7QjzTyvRnRXZzvDM",
  "key5": "5kPGc9LTR53oJMUUmN63rmRpu9FMP3tKCJfTSDzPBVjAUdfiVhh9HE4MXWMnRX98C8ZWU9Kn2bSiKb2cqxGQNyMm",
  "key6": "2jyYuiJQxHfbcXegfpCuv6CU4SaUT9WuwQvzPmqFCvxa3yVpVrEj8NBoCedvCdXSCQnhRoL3M5HDAabfVokkwRfm",
  "key7": "26jvHV7QbfpmbbG1BKmXMMQZR3FaxJQNTbo1yKSqt9UK644WKvXpupa9RgWE26gxZMzypBMqQFACMUBsF1VEvfLK",
  "key8": "2r6VhX74MS7neTzK2jHHBvQkzPGZycLwxvaRPbgkDLpf6WWv4Ab5ybwuL4KmQkwDb4Kie3EMFHsZuv1yV5bDUxDm",
  "key9": "jaUVP28b42o34ie1NhHz1oFUhyWVqxWkjhMX63GXz33EBz8buQVjABigbx9Kby158JbW8tfvb28VfJxkmahH1up",
  "key10": "3ZjShp5Y35mmBdJ97fomHL3c7HvUUiEZFQKXkRYvXoa96zfxy8FisYY8moxCbWZucnPvASDKLStKVnG7unEMHrL",
  "key11": "4bs9PNmS6Bhb58f8vYCUwYhMXij8jNpHq9kfCWAjtX5MQD1NzF5nqaw4FjJS3y4aWV4gkMrUKsu5rgQs7UbQueFn",
  "key12": "fSipb5f6thGh6tw28MocjGq6udU3HG6C7Zqg2r24LHJw1rMxV5K8VNj8Dvht62ytLjL536953dfCGi4ZMaa2aez",
  "key13": "21bGBEBMCU86odUaDuQS7Gv3m4mvDFsgSBn18hW6Y5XWpapgazZu66C9aLyotBainWQgpe2nURDA4zBJNkJ9sXdJ",
  "key14": "K3PBFtR8q2qiPUaPAKqvDZ9a24p5JTrwPLjnq2CGBFvPYJSpXiX5oAiJUfv3QXfECxPTMV7nJTAs4uDcHXv9Hoo",
  "key15": "wXu1Xx56RajxqxiKSvVFXyoMGKReweCTEbYbNUcxTnZn4SZDfzJAYaRKdUxizkQ7LsCtvqdgUpSTshJKHQo7JRN",
  "key16": "iFurHtAzom4GYEfchkwW65VXq5S3zXG2B4GEhVQD3WQMxQ9a8XtTuzDNztcucitoTzn7McxuHXYk9KKkLCFeMVW",
  "key17": "569KSeJtGKrbZgt9cJ5iVywnhMN4dvhdpQX4cKSqZtp4Ntk7MN5LiKPXPDAt98xAayxPQWi3Rrsoo3JDRikqU1Lu",
  "key18": "62GKTYowYPEziYLWPJVG51KSwGzNf1d13mqnrmYYipoLwfWowdzRTLVnm5T7zMvgtDCtsMNtTtVTMD9u1kUqLRXo",
  "key19": "33PgQYTX84Z52PYEntKftcEgQyJMoBvnZiSw8VzdvJZzLQrqa3Doj8gZTnLafM7GNTH2WvwPd6giWPiex43wnnQq",
  "key20": "2N7tJ6MJxLUcybqENzCSWA7pMUqGbJp6rcyizrgkWdPww2THPNqpZ6cs45xG2sgfkGwKni2PtEkqpb1Ers19qnAB",
  "key21": "3nL5d2RZE2unaQjCZkqiUKGB7QVkPfVb5kxjkNKtUVAtvgDy8BxEna95suxuVU6u4LWUBJF2R5Lesgh7Cu9iLmE7",
  "key22": "2qywF1nj8yNocXcrn1tzwqT19jACUgyfVwod6FgHY9vfCNVp5Jajzj6wonWjJKqfvT2uLiBxHRXd1FBwyb7RE8y",
  "key23": "4Sj9ucdYgCdPhLTCugtJ3UYAKPNDk7psKiw2NUaCWCuhKqmAuH5n2FrpkPo7KA1kTK3FjU1KHrBx83zrVdT2WpXv",
  "key24": "3TTNdsWmHgdKRwgkJX3eE82effDwBaKUwFKcsuFmi6mczE5HrheHZD6WHa9xZ1FcgrzhxK9bKi9rDLizBpjeiuJw",
  "key25": "2v42Bs6bpnoc8juD3jvF5HvQGuadBxBbtQEL4YMzeqfE6iPXw5WeJh7ZBNqXmmANBcQCjXS1kPNQN2BTShCbrmVh",
  "key26": "g4SSPZpnjFC9GxoG6mgJzJ67jftin4PcvCZ38AYFeHCMQiznK9KPurjk1RpeAXAPt1vjf32niqcr8NB37W2NMSd",
  "key27": "3mJqJuPqxAUw2h19FX7LYNtM7qvrGMaaq21z3Qfkfk4hPuftV444DHBsNt4UhQ6VnwwCYdUpRMuHmJyG7eRjSCtc",
  "key28": "3SBE1pSRqf67M8bkmW2c2VDMvQYJ1sMqv6BAEdYoHGRvCVgHFQksbn8AM22eoSWGowSQ8NMT4nhtR1jqJPsxbzzi",
  "key29": "cphQtwA1YUfTwXp9U2t7EfteiLeHWDMYdwiz6DpZarsSEF4j8EueGAu5rZVsgkj21iE5rZEQAwUVSw1VLeET4rg",
  "key30": "CXQZVE3nsmfmjMhb6AsEfDddngbguD4kcfN7dWT8wXA21oxpRZTwKG7yrLRheFQywcUw14AqU8X5dN3wGPRGgjt",
  "key31": "4DwjbqpWrDGkYqjVvSDPPmQKKhFr2dAs9Gz9tJjWFTWvMF4scEWTLZXYUHz7YCgHWvUE6nw6p66wkiLVQg455eei",
  "key32": "4ihHDpS53cjpWsy1jX5XMRbPbkCrhsBXkUMubsowFG8LkhfFLmGHj3pfQnvg2rsLDX2kLL3f33Dezw2vK2Y7ioQS",
  "key33": "5qfABjDVSokxW44Ny29xWZXdji3qRcCkULgmCJuLc3F8xcvxgriFVFtMSN7M3vNF3D4dg6aQzrAHzMsKTWueMwSu",
  "key34": "289MzDFwgzgReVqNzYNtFcjV8TVi2ExVAHa46UPRr6Frydyqp2T2AJiYxezLng2XLpwsiGQWWs6hu5PEhMtiPWSP",
  "key35": "Ju9ZpNQwLz2Uo8uLFR3CuPHLKJPvrQiCAZbSo3iX9FCUZTwUjArtxxNzgYyYr2La3hayNGWLQrMAjTEEoC8buHb",
  "key36": "2x1g2Xr2L1nftxRDdd3JWgWGenTRkkk4NfCksTb32bY9bdT3DwyVrYeP7P5a2YdtqogCsPJAQfjhYy3tVcFd19vx",
  "key37": "3bhGa6sR1P7JAovFYqKMWkFhb3HyJugdtxtA3KgNv6TaqQQbHozeBes8ZxugBeGX8ugyWqRmHxWsDkmyHSy32ZhS"
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
