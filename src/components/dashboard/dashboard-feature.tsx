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
    "4VtnL9XhBf9TLuec8FcYD9gxYg2cndB49tWPTBiQ42aWaNE7xRXouFtsat5dGuMkUz8PydrU4KoDRF7q7pu3TvnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GdRxpA62j9m7srqE7pMuQrLUTJSAqv8P2PMmgkDr7MX8FjDMonVRsAvVrNc8vLVEoJejLjv9UcenPjbvEVPorq",
  "key1": "4nSGKzskb3tspTpSpZUuoHUX4TTHd39h2kAygZ1VYmhjk1BFGNk3ZJ27d8vWpWzbUhR2UdzNh3MTF9NpZeq8oGrV",
  "key2": "4BFktYpmR5GKKsVwmzMUdwHi9YX1pQr5L9FuduXjNCvy1f8bdBqmsuVUz8QGLW1Mr53ohLZFZ5pC68zwCBA1S8Si",
  "key3": "uudyGELBpePfZtDa5TBtKMTibkKiRzYECp1PERj4v67yEAwrjni2y4gQjdFvAH8WYfrAqXRzJ1wDB5x6AYyhu9d",
  "key4": "4WdjR2cxUPMjjZCDuzQkD7eTuSv1U5c26Wb2vgtXdZcMQ1npBFYtR5ewnruSzTSLJoTSqei8Jhb9PJUwvFnzK3FW",
  "key5": "4LwHyXKEYdJZHrBQRNEDsUZoU1RoQ17hMqwQAy71iNgtvRhWmbHqzfhXA7FpSMdYZLj55CHu1hjjhxZK8YfU2pr6",
  "key6": "3eXJsUSnCXy7wgU2Y5QV3FP8WiPRDc1PXbEhpnwmRuWQV49F4zjP1bfCQ1LWL44717RRW2yb8oXppGwxGFaceYsq",
  "key7": "Qrm4tfVXazh2oMDkDKNDmRyQnkTYXhk9qfRmVXypQW3aSUp6xvgivFsPbLN95FEVgkGpAgyTYq4Tt8iTdeetfyK",
  "key8": "nJ6whojiqDe8sDnJrePqDKv2h8WnP5wn1ZZLFo1mUjzyXFB7HgekUx7ofuLWT8aZVQhuqVAJoRXo5nYwcmst47W",
  "key9": "DFHeobUeP1amdRGDXtv986XRuSmaVsvuDvj9iR4N9dzqCzDxr7cnzcqT6dT3KH7GDPq8K567oQr7fibDYKb3fU6",
  "key10": "4NmGqw6G1dRA5Soy1nFMuNLEtvunPA7RvfJGFxmZXU12e7UEBdn8YdxGYhVhXB3N8GZBiptrqhuZMuQZUfjZSf3G",
  "key11": "DjF5HqDP5epz327in1cT9YHhv4PXVwTqowdJkjg3CgUK6JBvSd9zLbbs2GfWuqikyk1HRogwEB7uH9t9mcS43x2",
  "key12": "5DNg2BTaGkkKbo51PmxvcmePJTu71xvsVPbDbDKDajyrM3n2aqgeQLoZDjF1xcxAZjZCWmfZxALkJdhRhTEMgoyk",
  "key13": "5PFaqYec5QWWxJHaZYLZFUjCnT2xdMj9tYqmnFz7hEUFZcbBZqtZoLKtT3pZsZdeVAyMwVjn1JNPvtyfU9uTm3Rx",
  "key14": "3nxBR7Hhmfqyo5HMFddCSGpW49S1GHTHvntjJbBaSH2nNhJmmciHEu8U4M2W1Agg4QVGeddgppiG9YTWHiws4Eit",
  "key15": "22ZaDDhFbfPJD1Rk9xXkCnMSowb3mr1PsvkkRv8csT8goDh5fjRdzugtv15p5ZgXH898HXJS9uKqd752YorqaVSc",
  "key16": "32qsZuqfNeuMxQAVpbWMK4keLaYefQPZGBgs2kaQfYZyN3QCT3sAyxUEzPXYddRajguKes6DdFjwapxyJHiqX6Ry",
  "key17": "2ER88LGsbP72yRb6tMzAfhYL2mojxNmzAJGpmxvzMPZTgH5EKnxTjAoYBzSUndMcdf8hjehiE2NRCXTqumobpbsV",
  "key18": "5zxgCThSeqTUpBTxAMEJRcqa4tJzJj8v4ZGkJzq9W4mq5sxdZpPSHua6cngRBGpzcKNhtfa2Dkef1eXrv2hkGiDA",
  "key19": "22uxaok8foeFtYADjPoJhDZEzFAPeLzUNtx2fABJnu2vaf3skNP2oY5AwTMRsGv3WW3qKSmqbr7h7HatKGQFbKPV",
  "key20": "2ThCuw5uZyc4jyR6naXPLidC9oc9FBaXehk3Fx6HN8vEuEhDwWS4tNSXYwwQu1rvYwcoBho6NbWmwZf4Jg25qQ5J",
  "key21": "578gupGNvYHR2Bk3k6s2SC8XtZW5P6CBT5BSPUsfKde6N7WqqaNyV1QmAX61fM1hTw8dHDgqck2iGcqanczEGbsW",
  "key22": "RHgvZeHZ4mmUUD1mECLmFdGu3o3yTJrNyLR1knf6whGDidLgkDGy1vZw4hh77AfBHhaMrHnx4WQho4wis71QRNv",
  "key23": "3QRMcptLWRYTSknfHpm7a3TGPp3iTBA2XyTPqr9GbigbYo5Trwqujv5Z9263rhMdfp3Y9uBKbucqrtQRTLRWGS8",
  "key24": "2eXrnLyFCGm38vVJcSPFE8ed3mX4QwzfSb6a8bPLQ84Kh7cG4XJj2dSVV8ddK1z79dPCvwTpKpd2X6qxcu5Zxr7k",
  "key25": "3ijuR8qrbLe8eadfBfLHXXgAFmDWVwA1UPD2e3kFhj5oNqvGdNKMPFWXwYAzLxQqRd7JDTKrcn7m95AgLGtq484y"
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
