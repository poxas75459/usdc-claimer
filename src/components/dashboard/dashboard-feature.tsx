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
    "34Dhd2RED5vSCPuYctUEutqQZLWkuug17r623qWzpHcDUML2FCDdWXznqy61facxHhD52UnBAYKueVm8AWgzuKHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SFfM5VGWhjEJv9eiLVwEtv9x5wEYwug33sfCJLDgoJC7A95KUZA7zJ8N6AocG3QS9rSpJFDB42NAqvFDuFNG7zR",
  "key1": "3Hz26NVqKdQMB9XoNGKhBagsqKezAUucivHGJZTLZYxpn3WtwD6zjAC9qoTDRbqbWY54bYLWcNFtyszK6sqsLE1s",
  "key2": "3WdL7WUsYPrWsgZfA1UoMFtXshjKmgVedcGMPxfAPvacDB5y6fNJXrNNrEXQSL9XTeqzeA5CJUdHUY6khg2Wp7ms",
  "key3": "5AcBsZTHkgt3DCpywkK7cWwnVd8gRrJv94R81LGKuS2gWSGJiBaYopitJRffZMRMsNAeR7qrK5Uv2TwaArH9rHja",
  "key4": "mDeSTto6JV5osepjvJhubrf7tqR6mea1u24RV91kDiv2qemU92CkAgfVU6hKEriL2GuxHyCNSEfQeiVzjZD42fm",
  "key5": "VA2HJy4QNVaoapf3tH71HsGv92QRv7fxKQoQeMLLQ4VpsUvWVpRweF7Kb3zPMSnKGWoszkdfSrAdASLBiqZRFUo",
  "key6": "4VJpTc8TwNwVRNrb64tHVmNDHGFuB9ZojnxdqJSUyappwzvj8ERoupkQ28Mhj5W8b6z1R7BmRTKWCPbg38uACGjA",
  "key7": "5yivCHsYSGxm5L7bE1CuqLZyPSBt72Yz3Vd6pa3YXPeF9UrQDEb2nj46GqpvgQU4SiHRtZk8CyVnUz4zhhmhrECf",
  "key8": "2tJmKXtw7qdeqZvxnANVW4jsdRcFX7gQ1K23dk8htVf4bvUrUS4qyrinYQoXy9idtZUG21p6n7rrzdC62kqtTXxt",
  "key9": "2R3citvLMyMHrHDd2RQGGxXoENt9vnjd2fW6hQ9ZBy26WxziRv9HXr2XRdAZmtWrNQJURmkum7iX1sndUQ45tTp4",
  "key10": "qHZcJpvGHq91CEDoLFt8eTMk9phUymBhEViUdM8MyFPwbauQ2RgDSNUkgQsCUWuZjRMDgNZNqznkZ2NgoyrfSgf",
  "key11": "5N6CosGYGAEaK2sdSNxPBSTGgfoVPv2EYAKw3NEjPtQ4qJtb7xy5WEtj6qXipfo3JKCYu8MfpYJha16GgWdB7rV5",
  "key12": "UTTHTrdc1d2qbsa7zR8QKBjXCRjpbEha6GTPYAHEkagkzESJGmcK8JLLQP7EfBFFwR1Vhk6LNn5jb8QjZHdKSg4",
  "key13": "4STQgCsY62CvMweQrJnfEpfV222DJTCjNLL2FNh8bWk9zGiqPKV9gjupzBQRuFPBWyBgVfRfmwbvWrVAfEPvptSV",
  "key14": "3zYn1uQhrLaQEqVQafrHGhkVSEffzEotP18uWS4t7sidmPVSiNjvtXnwgY3W8AUKz3oy637pu9xSitgzEmpr2ge6",
  "key15": "26PCvrC1GwYxEH4CLm6jrC1sBk1GeDFPRj1bUUx7vtaGheSvzjs4hh1Y4nGnT3mt9Q6EzM4P4X31kXG5vnpocosn",
  "key16": "3dbFv9x6yUuSc7yP6LBUdBKiQXQrSJF3Fd9A5gCsDXDw96pFh8UXYsgnpXXJctGMJgtSHcG6SyspZaqZJsryfYaP",
  "key17": "2qgz2hAHLkyEQekqygq5WHxAinyHxfrRTycPV2ZLgrUAw318bzJMJtwNPRT9hVaozy1ZjH1tfzieFwdvAU2h1wUb",
  "key18": "D4tuv2qbzhy73q6AwNyyVyqNSCc2fBPFxrFi7m3g8FfLq4zVUB1d8CEqngJCjeq7tnzCGou2c1sN2RpW5JJvLYF",
  "key19": "uXkgHXwc7LcZshQSCYuyqsdju7A2xt6ugncGumN6CBkbMREwJBmqVKytT35HfsofAX8i7XP9epVcUmMBqhgLANA",
  "key20": "4pgiourF9G9rrUZxmQYwCPshDXYMjRHaqPNVS1Jo22yHwGvj11NRQFTbtiNvSBHwuLvMnHzCvmP9fR7RSq6mMz8U",
  "key21": "36vEL5RdtrRJu6vgwQ8ixX34bCAKm9SJVtQNmB28b9b7hbHxikD6R9X6j9P9MLbAZndCXAgFVrVZcjcdvtxTyUoE",
  "key22": "4yYWJqKBttiYLAfT24qrhaiXJYChQUBkcBqqUXk8161ah9aXdVbTw76tCmkEL3GQpSLgUxKg22SdDQWA6EaHvDnu",
  "key23": "2hkrSNLhYyAbGJmsf76bPzrwvDauK9wXANUVUpUUa48ghr1TfWptofGpf13QydFGsLuSA6md526EsP7nrFEzrts7",
  "key24": "52A1AbmaL39R3jKdyAiWJj4kMR3Bz1VpAuDjzeyXfCKzEsXPrZekZEo9MdngaD6g1zLcPgopuqPEcVs7duTgL25r",
  "key25": "4vHZkRmEVAT5v8vXpaY9NqwfAU7FKbvo7otVKnHWuxwYaMK9mTDMU1WYw3cjoGo57QtMpFeY1YaDRZH34KTuWqgg",
  "key26": "4bUiKAPvcEd3riKr2HHfJXhuR9xjAUEyKMEy6nhCRG5AErQsPTjNqZf5EC2k6B1FLWjeiY7Rrm8oHz12L5skVVtK",
  "key27": "43vJeMZMcrJ6t6xjgtinc7LtF87kh6CPbjMLwENg7PTeJfvyEGE7Z3ZEQfqJu3qdcyBju7i4kF3HA1yduLncBkpd",
  "key28": "5L5it6QagTHoZKaundn2seReXFrW7k6rYYBXyX5q7mnRTwMsRHSfHdySN336hpvQG9kqZgjbdxucddTQECjZTWxG"
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
