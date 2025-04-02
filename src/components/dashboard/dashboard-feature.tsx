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
    "5wUjPMuoxQmx8vkvQQVo2DNFaMxmX2HqtqAgQYfsyu1aBEND22eCYGQ6hJYrHPmiTcaWXzPPbBo1kCuUoNd6XwPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8mJ5JjdpFzbHLnJhXcAoM5HQb2kehXcbpzaWhQnKL6V4h6Aefkc6WcT5fzXjmnpNqj1rkos3pRB1bYeRfmaqtS",
  "key1": "3W5ZFhk4n63qZEVpWTzNPNhk36LPc26wm2w54HsTuYFGCK3ZXNFLWdS4uGhm52C5d5iBP2dUTfUEsefFRAsn4rX5",
  "key2": "2ueqJWW2UiQD666oAf7mSy67scdE65q63s3h5JgLvboPkemm4WKU2Myo1dDqwFbv6kNqn9zbEfbaGN1Rcpg4pVgz",
  "key3": "3ag1esNbhaVSGJVERjrB2SoscXcCHKvcmnbFdCBeWiNHN9gFATqLWzokHUceiY9dmPZuGp1cZ9uS3EbxbEmgQLk8",
  "key4": "DiPk2wL4iJsfy4okccsuYzZD5y85Aqwpkbpt2v9MhqXQLRBTebuF2gZk81bzmGiHgW9fkq8171HtiM8AzFLjTYo",
  "key5": "289dmMztYDz2TDrs7B6bQA4kESKKu1Bbb4nPjJJ8C2xZt4ikTzp5QksPGvy3PpTTtbczomReejga63dL6oWHLVp5",
  "key6": "5N2ZpM7j68E5pCBNYbshBTSpgv9hzY6GVo2HV9qpgam5jiEyERnyw91LnUrozD3eALGVR5J3eo9HfxZCtu2qmh1E",
  "key7": "5ecX7TZC4LWzXQYgvvPHpWnHfuuZjyQL119fcGBDK4y9nLUvMB2pcQyyUbL7Was9yBvvEaSeF4voeuojXEEREj1d",
  "key8": "2EjjTEkfGA4gNJCqJgqhGXk77LpbiZFfwbrmXgrP64kR1jtTp7e7CzUoF4kSB6sTe8pj9xJcd3r497C8zJaDWEDn",
  "key9": "4NczMwCcdzgNmg5oehQA37d4gVpzh4qNXZjPzBNGHJv9MVXcCfTzMyih6ZRYdm3osejHnqW7MUWRaBJTYxguS6aM",
  "key10": "45BQ3Tdo7huVxmd7qRQGWyCeM2efFwXtyMmya3iueyLcm8e9ERzQYxokPyespsbrGEQ5byELFG17onfxara7tb7h",
  "key11": "2Vqyg5K6Cu2rD7mpe6NF8hoem4uLpyBprwRG29PtV2QoytbyEkmvbPRFi8bDGkyCikRVcBN3HoThsVXRDbQXU536",
  "key12": "2C1SBvxbXpWz9J6vtGfrKRxqqMSjyjdwA4Phvry6A3QcvZeHmHuqCEVFymsFiNwfQauCYpx5KX31wy1LPiyA4bZZ",
  "key13": "3dvNTFpUSSnudbYPMkzgUDkGcycZj7axS5dysfojcqH2pDNR6kQg7Faj3HNEUFnsTE4VZ2MwPHJJgiDgbxukVtnr",
  "key14": "YzGpDZzNhutQzgpXsGCrrrNAW4tkjsriG2NNytxRPsAPPWhxxfuyhEDBzijmSaw6SHQaRTxpsnvaN6QZGNqupJz",
  "key15": "2YJmB8XFDsEwfL42ZJroc9GZLaMkYU5NuXgECnwEFrAkt4N1VSumtSYNLCUJrAzW2GXoRBHSgQPVytgPoVAXLzR2",
  "key16": "zLmSLqWvTouCJGkkvBGpXE7AGWSDMKU3DWZMYgvVeYGtvggUV4LER4nLP9xF5toGCY7HcqDhDoXsvXcFy7RmQSp",
  "key17": "5FKemVZ1kv98t41pXTefJaqnbytZXUZrzrRMJdiUQF87E27g8qAF6A1N16Wb1Lq8RHWavq47fr82rhi7fvKaFjkr",
  "key18": "5mwinxrtaboT74GRcJjjPBhya4tSMwZgcGypL8iXBeRaThBvDKQV3bqUFvdzXqQEQkXv2ZBAA8jD9SmkdkncCbxb",
  "key19": "5yGnmThZ37fWgNtoqtPFsq2s5yPkp6JQiiqBrSJk7a9dqMwentmhAK2WKeeF3jEyw8MdTciURytsAw4Z1Y7PjY76",
  "key20": "31kbUnzUF6iTeAs8ir9NVVpnKKfPSWAWuTFUzQD33Lpopd3wxPb2uJAjqezNtspBgFpT2Hf4f3mACdmPa5jkLsDk",
  "key21": "59NkivnnAfVAzJdk7AK334a6aQjivyaLQ6zBBtby5jBA52kx27ahuTiRFjK6TAhJZCCqov1L6XQ4YPETBwa2hdJY",
  "key22": "32xykND1f2EA5VBuoJGvx1hdThNxafEMq6DUYhKSFuWtYPsz4b8Upco4YjtEH94u4embRyf6zcrh6uzWG8UDrdYu",
  "key23": "3wgVcLt8QZaNpb1gdPH8brGYBYJyV7amMNfUvhpYWaNgpcDQS59DXgHBifcASR2S4Qs4kHVWSEuUW9LCpJRaDSoJ",
  "key24": "4aofeipna91zzjsF9J8r5euFWCSedtMnCZTXUxa4gUC3snLqG5zFzVWQqe1E6r6QeT4FL7KEFPhRFV92J8Zqnxbu",
  "key25": "4gRoBt5yLfY8fYvyksXZoysoyYSRCxrnzKv5hGJV4d1uLqm7Y73q32USm6shrp9ou9EZm6Sryih3TQWJW3UXGbHe",
  "key26": "5vABTH8qtQFZD6vjXFXQngMDADv6tNgWjCxJCYfDwLH9KDpitCUa3wjEzcDc9UWxNHvfk8d7EM4gm3oZEvEvCNAg",
  "key27": "3rrS4M1mrq5j1WZJHArTzWACEnGnsP6tgqZCd6MMNwALfnwdGYu6mbY4cQ74KuCG7SRecaok3k6QVQUbgBRLxocD"
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
