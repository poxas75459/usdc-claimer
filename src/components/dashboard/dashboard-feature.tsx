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
    "2x7vWcFU5DxNi5x3GLavW4Dpsi2fCuR4zfrRdd9XNnmb9MNp1jrkPwua1S9vHNGMzjwxu3W84AkwuJjkiF7ear7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hf949982ezXQZSt594M3kQSEiPv3gVNDgdgEf2DwmUCAhQ91ury5CvwL392u2r9bpSsmueg6w7gQn85vAu7nZG7",
  "key1": "28EJuRvn9oKyaTLZPuUPeeAtrKNKRMce95gKnHPfhLEdegqvP3wVQ96LrJiktiT18iSwDkevepp8JnFKck8yn9cm",
  "key2": "5Cmr4RbphGpb9vmRFCkUbiqByoQ7k3GatLsfVSpfLSN5R1spP4y9TSWcoFYUV27GdybQRrrVtoxeLhcff3Lur5WF",
  "key3": "37iyBicNcBK9X1K1gtR6QUWs9NSuDhj8YSXJkubtpQrXPq9RaLF4rhxnuCQrwoTUCEw7bG5BsXwthcxLWb3gYk5Z",
  "key4": "2XRrj8EdPSkLTYFUEcVYHxUm9RZxtJya5iEjv467qiSLcfjDBxhRLHGDrNdbXjmAWsnVThKTR84gTaw7VVLygrZn",
  "key5": "2fzLwpMJ7mvDrPtGWvepCJtABdAg4T9Nr179eD8bLDYGgmNk4s2hV3j2XLU9ryXsHHgVtUpqHyZLb1a6zRcv6jZX",
  "key6": "4wtfkSvgfN4nqZBd37udn6sssENrJp7dDPkeRv2XKed9sWEtauWxkZ7uF7b91bQKg6nQ69s93sqmHRTrNxAUD1Qi",
  "key7": "YkduvXRtADV2Em9vs2KBwaUGXtRE6Q4i8Hh1MwEm2euhvPiBAyTDhmMzcoQz8kBuSQ5C78QZBmU3qCAjhwgxUAf",
  "key8": "5fq9HBov3qPb6WDSEWopEtr5dWcoqZC5aZ7FCiouFDKTpgt4N4NxbrdXuErAjB3WchYuJo4K8mUFhbuZDKwEwDN9",
  "key9": "3CtadfmyuorLyPiKuKwonwSMB7iuNeUp23xZRLmeGMUYvkQVwq2zmx36Y2MkeNj4XgBpNHZQmSC55c4oziYiuF4W",
  "key10": "5PNvtyFLURRBopNSQHHGJwxLG17obNPKTmejodJfRsdjijscnz2N5MJqRLBxHiy59nChXG5DyP2JgKkGgNF1Urfh",
  "key11": "3V6sw7Vz34ny6b3V8cY5qBJN2JBeTCaVDbqp1vAs9rY1DY5XbXhLfgWybFRNSGKc4vgpgMTAzEqoqhFPsGAkXVSm",
  "key12": "ocYFyR4nbgiTjV9YgKPebLiiaht2hWD1AdBUDX7GjqQfzD47BdAjecbaVsQSbh7DUrKaTGPDNXqn29khSHMhRbw",
  "key13": "41pstohQgVRFiw4YQk5SBCBku2Z8QZUA6Cvw3Kd7aZoae27jrLJuCxBVfWVcxJmrLqR4K4MbMk5bRBdf3KYYJMbA",
  "key14": "3RQisFDEM6tAJUxrMP5Y8yNRoFQLqr2VbsyiJ54rTjFM2rr7Bhds3froSnfSENUxLNdQ2zLEFE2PjWwxbW4wX9fL",
  "key15": "2zoUfBDoZsJfemthVe9HRM5D5rN9kJDbyhQSu6NbJssVpDtTmZ7iPn9qP8hbp3Hg56X3ZKqq8gCJ7hR3uLqBeL7x",
  "key16": "2Fv1qroC312SfUE3rQgK6rotFCbCSyCHH8joWXvvmRg2ujaTihzMyyW6GV4xYUhQTAYD2UBjGnwwMxkzMi3eKwaT",
  "key17": "5Hswd6gyvptF9yF8iGAGwdp8Brzuo9Pwkw8ThvCc38Sa6C4HtG3L51ZuWiYSkxhocskkRogszpVBJXwBtk6HzVtr",
  "key18": "5f2dUW7d2NiWthTfn8wWroVb62XNcypJUQXhet8HjSzmcEJqNwXwnPVbpPVo1QQgcann6YS5v8vLiXNQjqvhuY2U",
  "key19": "2yr4TUaYReRQLqZnNQq6Wr6YU5QJj2RtUJFeemu9NMsGfoxVCgXhDgsVzjRKw9c6LMgfsC7qPL1AA9uD4MGzqw1M",
  "key20": "3ydX4cmjbGxBQVPH3VSXVc72ZfMa4M9n8ZA9CdzmSyiapcnBdmLzbBXVuGJyBPNTcHHUJ2WxqdgP46hjmVtW28vR",
  "key21": "FmdQHzMB9yzgUkhacXdfAWvajFTy4hV746ihPaTk99RHrZRFTW71vGaFywgxvtC3Hk1sg2BcyrKsye49fZXYGRP",
  "key22": "4cGgn2ije1kQUhXFxSwY8UfbT9JqJWHDvvyiYsVn6qLgARNkMsxb9i6EcDdsiwThyQ4fpzawMHPdiGeKCwxe1CeN",
  "key23": "3d5RVGFpLKZuTh4bUkDAYUBMeRNT1LGfq1xT173chqV4vTUfPKGR2rfP29jf9kJQ5sqLnX7KWkxEhBUJGBcDpY4a",
  "key24": "3snSprRF9cTwSyjR9AXNurTYKppCh9kLfbfFuzN611KmB6NcjSjFgKfLEmgsqhzHSyaFJx9bt8hQWcXEZJyQ3BJ",
  "key25": "d8poom9gpeSeJTKDt98pE87Y61MbwmQb3HwKCeCL9hESostJbn1R63Vr4AokumtVjyGCNx6oKyXAQqHfSFouNi1",
  "key26": "5Uw45nDA5et3TjnXWP83PPvE6dnGb41MuvKG8ET3tGWXnjokDmicdxVKTpYqYfdmDvdN4ucNLwh54txLmrWEMxxy",
  "key27": "52T3bG1u1w3fh7in7ogKxPZNmxcr4LBDn4oAP6Q3Vp3xh6PybUN4Tj9wQyCPtz4vX658GQqkkrVoRrAUc6cFN6fF",
  "key28": "2rz1R1G5cJ68yR5A5Z9geGaZUpaFrxJ1gHHg3Cga6qD9d7Na6tc47ADuuAB1K4K4fsC5AXc1skT7cFzkac1x55Rz",
  "key29": "5sWQR9zp7X2sMacHy7sjf8mYmzJtVLuJQHYdoyYhMZaYTWkbcyfJwFsXkV1ZBsLbmmRCpcqU9JcE653JDUSBYQnE",
  "key30": "5XCD2CwHZE3Tcyq1es6wenrbipDgCj8qNdkG81NeRAQos8vRw7AV2VkWFd5oA5FnRX8gtB6TH75qhFZV7yTdRdbQ",
  "key31": "5tpUMSwFrfcWay3hePuFqmRCt3tqu2L2JAoW32FtLdnxviPJKsemkXu7xZZByyZLczcWwTkmAkC1dvTj6SxLYFnK",
  "key32": "3yK6LrcaRD5kx7MVrwUFCi64BojbsHoESaRV2oNMxU4Z7cNW3rN2r5iifjc2FxBbEjaLQPtRdb5RraHNXY2Pefrc",
  "key33": "2D4gZBT4u7LVAAUvMt9EEKeu1WBLpFtpCW7rGco2zvZcVmrxHyaLgVSPqz3nP2L9db6VdLW22hRcExb1NPYLeEe6",
  "key34": "633BLJnmT3kn3gybrdFtEcEUuLcSHAPLZSBejiLaU8FgK8A4dTKin4Fyy14NEDrh3ks7bjk8d7suAPAra2QVCz9E",
  "key35": "3F4FLnPufikifLwNYibtCEM8BLqSmShDKykRL6dSovMQBCEa6MBRgqCaZPKSWY5MbsB9W1NiLDxXwGQoTRZUqoRJ",
  "key36": "7KrSj6d43KgqfBTmadynxVRBRjbJq1iqozbswgwq8X2AniynJFuiad66xhUgc1BEzz1Nz7ht89Te1e8bX798Pcs"
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
