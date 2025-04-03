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
    "2RpaFn6NstResukqrX6F2yhfLMPRAKF1adHnv16smtzvbc57VCL3uqGr3GixsEmRv1HVhyVahPYb51Tfxcd1PgZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7L8jB2y3mrB6XipHfWa6us1XXLhQi1BdjL1wqtjLQ5K5EEvKf1CM1WwCu2ZFp6SKcd5CaALfNxPeEF4Kb7VnBW",
  "key1": "4EV6vseynJs5MWWxmRSBAstLwjeY9zWQJnsczETR3WwtQ3Ye7CRXooBbbiujEztprq75JPpScFvXVttigN2yDFra",
  "key2": "57VwLW7KnPwVHptRv8T2MF2qLNucMy1tBjzJpgDrZVU2zrVX27xGPDzc8VcGX9ARxLBmsgqHgk9QBTbEEyqZ2yDP",
  "key3": "2FQHRkVTGUk6MsT5tnkGdN18oFtvH41rEhTqVrgciYUVCGbJWpkR7yhzdvmJaUCZyRQe5JsYGhFTu7ZCFJnzyXww",
  "key4": "234TFv7iftkpV2ZZ6Q6c3ZhpgNhkhKsYeqzPnG3ij5PrwqLWKV2fmkYoTRmgKrqaVMTt2YUsZAVes3DgeQRLjuYr",
  "key5": "C3b4Y22jwkkWrCctDEgJEMt6ZECJJv55KuF8xfQr3ToDyANSKZ7xAkfKQUNGa7avUh2ztHWnymstDxreDJyFDSq",
  "key6": "4uBfZgBdiieZEfkUqydmEPwk36rUxC9epGNcn85mJqDU3E2oWuck7GcuTB8jjNcFGqx1GPDNEZXbTsncD4MVXgmD",
  "key7": "2CkkcSsQyQveLBHxoVXNtJiYncwKR2PBSE5gZ9Cb254spScaqwHBxQ9rrgczwnxsijqmhjn1njZcVXMY5wDTVzHy",
  "key8": "5yBYyptbGThLp9gaZqHX1wA81myYmeTmaAEXeEaawwhgtbuLJw4fmQDcgLKefVJz1zCCsAqJix3TyxvK5zCggm3p",
  "key9": "2WyTukaqMQ5BXXrYkf2xobY33uvCSCCNfiDqooyq2UZyetHEPmHtSPm8sPPgagdTDXEfW3BGEPetk2TaRpRPXCqJ",
  "key10": "TkQHCyV7WSa9xGqC9dH2oBSUWkEK2Ucmn1RWBhfJKngW6cMRyhKdAG95LQ5C5iuGP5WQCRCdt1Qfu6BqWnoFJs5",
  "key11": "Kccj4fc3gmJYRriKAkRWoBmW34aLgHKhxJXSCKGw4G6zFvK7pfTqYKxRZkokAm4wLRGkBVupH5NBEwb3zvejvKq",
  "key12": "2xKhevo8ZsaRGfH9gCnWW15xFCmjrr6jattQVGaq9M2kaPDZVpW73nD17DXACA2fPBrgQzuKuZXtmfFbKwZriTo2",
  "key13": "2HfaUUS76tgkTucEsn4bUdiDA4kR9bZYAgKTrM4aUGM2jiBXjGRUBoef7gKu4cQkRgLxMp46JFJ3emavpbTh72GH",
  "key14": "5nXTCwEBNShbAqCWVS8BCeQwjwM87Nn55SEy49dkgQyB4JGbrcSacHeE2yUYUBkQ24oUfZTt6TVEozW26yE6Ca4b",
  "key15": "1gMW8MufNf6DHNGHpWu5dwKxWJy62JedW5ikJXxUXG9BDngaeS1paKmvPJqy7MZLgunU7hJipNao5qftCNsCpCr",
  "key16": "2B1WjxffQ2cHy9CsL6xk4Hp1Ur4nh4QuPAnYVogsgcSNHK5Paqw3yJhwu95RnyEjmwxaeuzdWsZ4JrJsTcZzv9Jy",
  "key17": "5XAHzHGaD3jdwNR6BHckxS5Fv8aDJfSiUFtdwN7iEQ24Ngv8bwE5LiUGdcVLp6driGPr6XL5KwGtY4kgUGuY8Ade",
  "key18": "2mjivGg5nKDCUUriTa1T9HjtzBWUtnf9TxeNefFARn72pUFTZ5zyBsfwZJshDchWwboauCeePrQkPw5Q2t3GKc8c",
  "key19": "4bdHd73ji7GJWE4gV4RhmXapeFPRQGQWdUDigKysZukwArbHq9uvEzNXogwY9oc41CceP6iw1EDduhhqRKynQ1Cy",
  "key20": "NKU14gEDUHrSVzgyZCUcorEy1CErbAfJ33ondgE9kTCKpHAPt8p3yriiWH3FkpdxjQEaJiSY59M6n5vRF2Bw2ci",
  "key21": "2vyE4rbkezLwvTfN56nmzBAVkrE5WWwmAPLBqU1QGmrVzV7BZFBA7VpSZH8jVCFfYXg2egitgSqj9ESVXneFbBL4",
  "key22": "3sMRX5CsAYAjXUJwMhXSKxUVKqq3mhfTaTauA5P7rnWmjVd5mgabPEEyQaUSErf6x5JM9FGrhiGWHfT5uieRnuND",
  "key23": "5JBaVubG22ETvYLJPnST1CcMxEUe6uY59VDFuDEC481sWEYcRGnwG6f9xN6k1vQaBXzZNQPLzzz2SJLSLbFp3gKq",
  "key24": "36Dn2sn4UenREMtJgwCPEGitZKcvVjrXTsP5Zag2zKXrWit32cDtY66Dch84iDwW4raG92MLAcPC4X75dkekypF7"
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
