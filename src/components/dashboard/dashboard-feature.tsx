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
    "5QCVbWt7pFVLTWpaoau9CbRC5meE3Ssvyc8sNgsHETSKckdcSG6CGswSqbYMam1fX6cEbKhqpuAsPRxicRfVsLhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cqYf5SkLU6DjrSznu9J9MTDmAnhgwjEvE7pmmVgc2iyW6i1pubo2q3kt2XLt5hkBVPFZ1pQZaCjtEyit5GnvXQu",
  "key1": "5STeePRq4RvTobQahG33ABL94mYzRC21LxQHQr9XCXDRKAkq2pzfjGwQJQyYP28XKhdSBC49HqYyMpT6svbRR4p2",
  "key2": "2xrwMj2RRiq5FJSB64v1kMBUD4wczweSQNnVPSqkPWC4cxEZjeWw5YHpkzNGMEsauqfrLVNJgy8ooM9xf8GJ8bhC",
  "key3": "6UJ3URTP2RcE2qFNMYZNxQdZej84zCv4f9wGf4tmdmNcPeLX4nKU8pyLwEF3SajBMuspznykZ2ifVTNDS3BhV3u",
  "key4": "4A79faU8TrfP1xySoBYr5C9hUHiwzAHVqv5fjPGcKndBqsz24QszFs1vbJZXa6VXykSLUCnCr8uoFEtDhHNC59iE",
  "key5": "2JEfnnGwksSwqMQL5Kt623WhqdNQMFqUtxcRpYciiZjmmcdT8VnJPi9pjE4QmLNVgkqN4fNzAJerbBgfUZPimL6M",
  "key6": "2FSwSQjkoHYp4BgYqA9Bp46YkQnjn966nUsZ3rj6EqXFoWbwUyQahTEem2YeZcTaHcQeWevQYvXRZ2dB4sF2JSb8",
  "key7": "2dAsQTXHToL9EQHTKMVKuAGR3V2jMPKmHwBuXoiAY9MNnLyxt91JxQ8Ysr1htuxFyvtJxu5GpS2EKu4JqkNA29iF",
  "key8": "5aA7uTm4TfteSqe7m881Wg3rah5Nida1gXGJVA6FbepAkBSSxk6wEEJffRCCDsriqpdK2jwfjTRmzx2k5anmM7qW",
  "key9": "f2UsGzrAXijwv6d5VGqqBgBVQ4Xyt51x1YsuQyepsAGDYwYiGGzdkH5iExeGmu1DHeQYavEmkZoM9KGg5kMW2s5",
  "key10": "3zhrqBm2wt3W8276VwVn1dNN5GScUcpMz79HAwKjBy5FLXZMcZDoeWqbrM3gZPHXekXzQdx3yZ1bfzP5wH7SY3jd",
  "key11": "3UyQSCqjWx7wvU635hqC4zGXruZMCCpGMtyNZsMKRaXcsenydPGtqDExsV4q81LMpQ4RnajpSZgJCFne3kYDJMRg",
  "key12": "4uYC6L2jMc1UNUJb6HM834KsaoryV5xWP9YjgebNbj6iuE9wQyD2JmTJJgLSQFzpA78xMco5fFzJXEfRqZhnYb6E",
  "key13": "3yyVAYEqn4ZfRtgzmZ3nETJyzkn2f9fmCfnQUTzCHwMhB7wsCFwZYzVQgyeD7JAC1tWF6ATE4sLii2T1JCWpEQ1Z",
  "key14": "4nv4EnhxYrWpJbG9aVUyCRxBCrQDKoQ894oKRcMeVD2TXRVHnVFDTNq9VRmsXWCNtXZtBR57cyGyR8yDP9ibG7CJ",
  "key15": "67bFfRcwf72UU6tXh7U99SBNZcamBz5QLmGnsnWkNtt1cVNeuHavZxPypcYgDjFVPDt9mMX5fgWebUPnFSkQzVYZ",
  "key16": "Cs6RHwCC13V6FyKzA2FLwMdyvnHRTPPEbiaRomsbuRZ6xXpBqiGeNCHWVFmRXvDTGj5raMWKbmxm2FCHRqhrynj",
  "key17": "Xz6H17GpgDKrEPBTwgAsy4QasuqPmd3VGPBxS3NSo3wBK6k2DCHkLLCMicqJcaa4gYGcSJ8iwWJbei7yctMt5D1",
  "key18": "49vFqZxrPMakFufVUp2SoqVp3zFgmqS6TaAk1QQoZ22Xgspt3qEdsux8X8v5VkBWxFP8MTCVWLvh1KkL75cpbJsq",
  "key19": "65Pm23vqoZow7dMGv9o1tvn6ygyyJ1HHS857PKKMpscR19AX16miNCekHqk4FzHWT8ujdSBnKkcSEJ1z5gTtaojX",
  "key20": "4gU774h1AKZ8JxPhx2mHf9seE7XeMGrmWhG5oEA56RFrtE5gyde33h6gSqf7DD7E33gMDpRZDTgwUrtdhFjAYezs",
  "key21": "3a5QR9btgpZRjiTcq2krxLBj8yEHXpfJkkXU9t8UeD3fF4rh7ot68fhtqnkJJ33X6eMkM7cgzFZLLSG6z23dQCth",
  "key22": "5JprGY5tN4Q79hEhynGEUPkGggCNMYrzWr8yo3ZQdeh6i2sbkVCPBAuMCzawLVbbYMouUyBTZrraA8UU3enNCfoM",
  "key23": "35Htjf3cR1bwmtaCZqZGWKS58MPwwseufXHBZm9Y9LFVspxYmGyJTnWtAnXk2WNGBPCeFv9WaH3akiQuX9yU4dEX",
  "key24": "5s3bqj2TosQe8ysQp2gSLtwnBaMw6DgNHjeLUTGFaxhCCGeivpVpe3DLsf5ixj6e91mpdVd9Zh4brqA8Bnj4f5QV",
  "key25": "rFESMV2XNy3jqyYmQTcSaYepcG2Lip379wyPYV72muu2cq4vR8zaQtkp1Z7mN4XxR8RBcWRynQCfi6YNapkKNoG",
  "key26": "gi731KD1kiX5SANZxSrTUK2vkk6HMB9tYUdeVh1dVDtAvzwFW3LQS8Xkx7QUxpK7EniH8D67a7bvRudUJfGWFc9",
  "key27": "2KEqXYoamMex61E3jnoQsVVCNgtqSYA47nSMVrsoDMnMFGfcRs1XB2WxhqsZKnnZzaBn4hDMs5a1KwvTcWjD7Zjt",
  "key28": "2qN3aFqzpk7m2NtUwdaTTHeKfZdwzkAxvhi4d2diGwWJSFp9sixJth1CtECneZ7zNiviyDox35uyZ6CJe7m5EsEa",
  "key29": "bY7zBn99EDjSM16khnWb4YzJePiLNgmfVYSjwVa8CAbQR5XsNRAQLYwyTJmDHEArsMaUJh5WkHHtMdWu8BygwTT",
  "key30": "5nLxWJCgMMUCHAQgPSxzbuReZCRJpSGDQtTjLyzvE5dy5MQvts1cvzAJPQHXsU1SvEXr6mBH851dfmAxd8unA7bg",
  "key31": "5f62hfuKQAKRxTr9uYBSs1GWzArRAi2w516LekppD6USCe7M1dUfAEU1AxfyGpRruYJuKUPMmB2DDg1EWBkA3oxu",
  "key32": "t1h1paAudhvbQ77AoYjsft89rGXhCS9oBUx8mb3kyrvHW6nErLHqyJr8FAmiC1WoEGwaEH7ArBvTa3pzyMH2NY5",
  "key33": "4eMoH2axwHirFb7tKRc1TyQqyTL2cw81wKiXTrk4aJz1Wy6timEYwmD96M2DiLaDE3THmg6i4S2R2jHsE1TiyhFE",
  "key34": "5HgSW4SMs8i8CfnhMxhYYYnja4rQki6aM5vVze6z4gk25F2bGToRgpMhfFWk9GyLw7iAVyXgVkacFBpE8Pv2b4Li",
  "key35": "2qzeb1gangCT6MJBmfXovBz8QbZG6nxuk9z7qaoBf3ZWNJApVsVbchq8y6v8Pn2br5MXazh5uSovJeDFp3tc2MnX",
  "key36": "QuKNix1r9WpbF4dTCaQ4gvEynLHB8eM9VovmZaSZqWUbqBexPPe8WKF8kZfTdVVvepSnT1sv2qR5pT9U987nFTz",
  "key37": "Wk8o7u1cAtPHPCAF71HkTiSigeUz1kpGfuDEuSopyLP1iDCYpbjGugRQRRZKncJALye3MqeNZDa6tt8yRsfTcNA",
  "key38": "4yY24fP7aNjDrvwbxg9yBXVTss6aaG6Q28tqqmW5PWMujT3F9eoxfpFNtYjkNu4ZSGmtQ6tp6yS2HvJmyWkDaiJ1"
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
