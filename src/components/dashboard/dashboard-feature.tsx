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
    "vpzbPKXcx55PChCC8bifMW8SRaPa61akeqPq5LpWFWiiPfPzTU2G2nh9CnfChnXGD7QRbkHYomGxHT8tsvCFTBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48sXvpS9pVgaH8vDci65wPqd8ws2vK7TA8vMeNJLtMxo75XxB5g1CT15a1H63j8VPpesNb92nQ2LeLqcRHvz1yDg",
  "key1": "5Hh9KEHwRtBnn4cUQJHX71Zf3euwUkRuNW4JiwRmwYMEUDBsh9Myfi2sP3qx66dzqAM6dJ7jjqipAHFeLjadVCgj",
  "key2": "4VwCjGuRrHaPnSADid8gbCvoJJLHcpzTMo8Qxc51iG7SX6q5b6PDcRVmXruA74eyb2K92ondsuGietVxNuyZ8ZyN",
  "key3": "2UAVk1EfoMbPbmnT2QdKDS3RLL3RP4oDe1bFQCPy2nEaZJUZ8dPJMhvXEyNeVNiHUM2ZbrBuBqy31FcvSzToR5To",
  "key4": "5GGDQvsbxzqpG6jfuK9ZWi2eEsf2B5SfWiR1DVUTFZBZ92fSEcYnA9JePcmUZkt4L8vA6iDhTH4AcQV95nsE6XFy",
  "key5": "4JwLvPuqc93SaPQ3z51UXiJ12Xb3yUKYH5y4LLkNLD5Db4YVGjeY9RkSqVLJK1RJ55M4BD8fn2JW6AhmJkhWA5hs",
  "key6": "3RGG5nE17pJwBNTzW4kX1RV2VNQvM7ph4FRcNzakRnZtZVjSNsvGbtEEtep9mphunvXSh16dkJdj7pFKp8QEQUhw",
  "key7": "5r2tyPrgaPp4RmZ4CeDwm5ZnsPXcHxLui6YvHwzvd7XJJWE1csqop8PjanzeWRMaTuaWRVyfKnAq3Tber9L8bK1",
  "key8": "3H4FvTz2DVwwM1VZbCnPWUg6CuWcYRZJ2duERLwoY5m4ZMBiiUx7U3hkBYHRgPFdsqcypKYoFWXKQDpfCeKnmR7V",
  "key9": "4TAxYNPrN2CVrrct3kC9nLMaU8CHuCueaRjq3sNWFwUrn6h6kt1qqLh4898z328xDWWwLaaKVyghZ9qmyXUTxkCA",
  "key10": "3nHmuZQoFrydS3BLRtAzpBaTvnQ5BfjTPXzjtpzxjWBKSS7ZWrLWCGqHDKEXhvLPpinxv2xRoTEQ3P8RB9xxHQ8N",
  "key11": "5x996cFcncr713sJSbN6xk5pekVgtRtC98rjRJBSTsfnynKcngPrwvvLw2enorKkgYW5zsNLvyTxE89wGkCeV7qm",
  "key12": "4sXAE3x3pskJKpxxzByuyGKJAXR7MQwBGeyYsoQV6Th3fMNJfLFUJvDautv7JSMxki45YLFBFUqQypHDDRnY6UUc",
  "key13": "47dYhaw6fRykvM2kKqftT192onufV1QV4BkkZ7994o232PoTNsnt9wPKs25R7sHojZnEBNr63keGjWJLG7KRPFhx",
  "key14": "4trH1iC1Wxxpe4qri4J5odxUfyiWqR84roZ26roiJ48bNkKJJC4CS8d9JNnSXyEYXzxyR8uvDhxivW1gGJxkMpxi",
  "key15": "4dWwbCdTXQLKPPnWrDZaMub6uZy26cvRruUbazgvwy4ZUKYhBKBEWoonx6Yad3G1kzv9j18VPL2MmewcQFDDi9dW",
  "key16": "4pdb4SK1iqe1P5eM25Bju5yUwuQ7whm3NTNTC7vxVDPvzzqKLFgLXfDCSQ2oHkmRgDzPhi3j2jpyoZCHhdbNdggN",
  "key17": "5EvBECENNK7QgRN6tsVB8P4UKwz3AgvZkPpLmRbzyThbUrmUiP2iRRP11wyRCLGes4wvACKyrg7K1wqP8HayCXSp",
  "key18": "4Pz2oqHzfhPSgcsoUiJA9NRKp31oWk3u9ubif6xTCRtB6dMkZwLcmGZmmxTNV4Y2dpHLc8wcSLBUt3v7CWENNRCV",
  "key19": "3DZYS1jqmhfKzQBPe3wF4p4R5SixLRL3EKn5Mdb76FAvkSZStjbHKLiWcoDsve6wWXG5wJgonn5BaYKgS7JVVdLR",
  "key20": "61Na6iuoPFYBAcVZpisaDEX7XYZiMwaRdKxNKjU2od9hThE1tmmpnczgo8cpNoAjqcQL8xsuFm7VCnrY1nV5u7UE",
  "key21": "5PjPodVXW94Xdi1gsDK9MtH5WAX6ELY6Z2T6TG4P9DoDauxVdB4BmpwEA4BuAtjZtMaG9Zh2GMgnswvkmiBTeUiy",
  "key22": "mtEWc1piDCqiFgXP5meGJAxCXrCJS6yXg2DjGAVLWiGY9sowPVZv2s5QggWLM8q2ArKH37am8pXRaEqsMnGbLyn",
  "key23": "2HyoewAyVo7tJE7wnx16gWDfmXDELEQb7m7EEj17E9HyrSLM2J33wF35amicUjTrGo32HYvT2CDvLxcv7nmcctJW",
  "key24": "5hvwrrfS1HhES8B17J4Gp833hxwxsBbGzGTCEpQDcjNsHFSzvVDZZk63LL849dZsQrsNCrLZHwwH5QLiHc9i57x3"
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
