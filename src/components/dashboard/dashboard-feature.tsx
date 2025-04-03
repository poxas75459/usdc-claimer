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
    "iNjRyGfVpMM9YjzxuYEjh9r2pQJNxpNkYr9w9T2jooJ6GnoncY6ayVCr6PuGmWA7DdUJziRnC2e4TZVm1rFP1tT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NFCjy3mEKqbqPSki2p5tQ78VuiS78tULQw4TZ7T4YRgNWg2F8KemTfbvTB8esBqqNcYN8A7YeaNMGWc7CDXkQ4",
  "key1": "3s7QXoHA6UhycQmMpMA1Qxb8Q9WX5xcr9zoy5JCjjiuwVW7vWF6on7qzS4cuicMDbCu7KvioshbvRJAbFaVFZ1Jv",
  "key2": "2kxyXmaxPo1x9BW8yhcraywzJz1XLjG2HPz8BdpwxcwBtbBUdQ337HivTybC5bYJKMHK8pgCLWWu4eYCK2bvgPA6",
  "key3": "2NEy4LeZ6mkn2f19SwTVLxn6LFwbagBHQj7ZhpJe2cdpU4eRDzAD3qJE7w492DnNKyCwmzCyXDYYB62exrMWqTtM",
  "key4": "5CDggvxAQGEgkrVGAmUdRDYQg1ZtdZ7L5dveaCJoG5YehpenArtw6UReFiKM6Vc4SZuAA66gMZrHojPPet7AniVD",
  "key5": "2oeQ2LeKtqWZBEiWPxJKhDRDhPAAojFLKbEMPvnoAwSqRNR6UAsAecpgMR3WZDbqeFxGzHwvpw1GNbHZWGx9C2fZ",
  "key6": "4tSCbQQfqTFhdY2uBW8Lf3s9jp8kBdMBC4zVNw8Trb9XVukXeVPvjzMfnck5ymxZkzaEzBvXUwUcywLAwGuRPs4b",
  "key7": "2NRgobWq3SZgEQc2g14KxeA2auBsbrZHZAhsd6iBetxAbTg6TDUszLpMiNcGBSUk7AxuPm4BVvLt8FUDabZdmRMx",
  "key8": "5sKG1NdvBXJRb2tSH5TYqKRuFgV8Aq3aungXffwvzPd4vEHS3o2d3cs3xUmdgDtjxgpwFDh13AduYCBVsUED3miv",
  "key9": "2DyXX7mAMoWLVZJTQMdqeK5nB5gP9RiT9SXSfqHvf62wzFzJAukPWpmJPHtnPfCL914stkycyVqRHSjJwoat1rZh",
  "key10": "4NmBuLMmPQ43ufHgwdh15Yob2tMRBgukdSyhNqimnxyGzZMUJn2fxeuxfMMBCvJE211bKfF64rYsMYdamTRD91sq",
  "key11": "5pCbaJhsDCUKWQYtQD7MasQid4pGdeFgUYuM5QZKC7bXwMQ5YJr7rNedh8LwBYopgm2tfY9u9kNw7UoU5UvxHHVT",
  "key12": "1ZciFjnDCEwDXKKogbJ3xKZq19nj5cU3XmDKY5iMbNBG9za7uAzdvzKzMBdWsFkvpn1TfQVEH6Xy2vJQzhvXFAL",
  "key13": "5o3su7B2vLmmExhM6kxwLjL2RofGiNPoNFvXgG5AcYUn1Q97JbCFZZxL1zmCVez7Z1tXwTQrqRN2Wz9dEked14HF",
  "key14": "4UxgVyxQCTm3VvE6iHEH2SvFbk44m3xrKm5rKm8EmGyse2o791wKisaQHPc5zXetTnAfWNq1C4rU2Qo2wpjaWCv3",
  "key15": "41dNSUpoCgibN9MyTpr4daTmiC2DvWw8n2177yt4kheTfRGLS2ramvERuqAFVMFKDveWvcvGPC38g5Fp4VhDWWyN",
  "key16": "5pBDmzaY5iDCd46ZqKfswhhr5S9UauSYp6s2M4wod3hDvQNReqirzYYM94Qs7j1xusbPN2TDC42wsnY9zR6SaJaF",
  "key17": "2kk2hYb4rNCGPQp9dMBBfx5NA2czqMvtHtZdDkqVCwfJzw9vbMxoDeRbvdv9Ar2XVejvq3uToUFAxVtUWZTgydfj",
  "key18": "4eXFGgcBRYXJjpUApe7fDRb2YSoQNwTkvqWE9J7KNPewqcDJn2EjNNuHyJqYRF4j8DL6f6hEP6J5DRwwAGJc7xXf",
  "key19": "464w5gdfuZmDpSzdw3dLTuFHRJ7kkGex1vuj9ePx9KZcez12L8uAecpWvNURC9j2BfMP6zE2c51QH56iMARQCCSB",
  "key20": "56YkEVUiKdaB8f9sWsss9d7GbRpbKGQ8nAFz67zV4cFzLKCYaqXZMhdJ8596MhM7fC7vnVFp7os1D5ocpmGtFqo8",
  "key21": "3QUSheaciYfUztUV9PuGy4tsHiz8rw3VEDTNngeekhKofzk4Wy72UCjnxLBqcKSxHw64cpnzo48hwad6BhQ9T5T3",
  "key22": "29pdBWxMWdTGjqo9joJt4aQt7jeUutX8uadzJV2XMD3qbCRSdoqdn3Vr9BEbV4PeJDWzwT8dgSW2dbvhzrh5CYsh",
  "key23": "2oGXzSGgtLeseRAHAGR4Y7umN7R7Qf2jfkrGYdyd5x5LkAr3ZnewH8HMEdrAbnV6VcSkuhYB2sPxAWmoyUXvAq4H",
  "key24": "K8GSimP9MwrYrhs4nkBAzYmP4wj1HvhdLmnrhVwMf5XoMUiceMZ8U14hfzv5Z6VbJc518eeYiJqsE2guEWqxunp",
  "key25": "3NQetwVUJaSEs78tSWmnYxnorPywnpX8D6Unuv3ywudApfYKN7sx31YgmWHkUhf5MNCeLjyeHC5764a69SyDBCro",
  "key26": "xx4Hd1y17yG9LXYkBMfTp6M5UjMridZFeD5tS8vuRuVb16QE7rtSKhtTj2zUGBLnHtgdtM1Y553eJeXTnrUa2WZ",
  "key27": "3Yqik4w4DXujT52XR2S7pxHcTdYoFpeSRQG3iL84WZi8rbiXpXRMhFVYmGwew8Cv9rvi4z5zy9YRDmMpX83dzJvp",
  "key28": "2TeQfB7EdoyU7vPYqWWb3Zoce4ey4ydnS5qxqgijz5CMopkxzZghffhDDGEzC4xzgDgVKtWcwq94NxRDVVcvDdNh",
  "key29": "3epH6Qsg7tVmdMSzWxTRYAHGU3dWFnrsPmrcnCfqXTTR9e1vdP6sgVywRfghtc9mG3bceNpVUWzFHq5odr4Fj9S2",
  "key30": "5XbbFT29dLVKA47RnTxLLqVqBH8J2TyEf6gqLAhvWfxi6ZPHvnB8U31UDhQKsXPini7ZDCF1rfQwaX9fuoPH484E",
  "key31": "4SnzAe6QTiEk6FtZ8g5H8LwiPU6WKmxj3n8a53uVVNaakvtMFb3pbFWoCweQipZBHLCzEcVjgDvWg6Gycv9N3bn8",
  "key32": "2NDZx8NuA4eaT7hg9bzqjXrMdowQRe7nBAETYh4mK9FVYX8FYAbHem5zNvXVaWEi7UTFt4s2BPAYdmEVQkHntzzg"
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
