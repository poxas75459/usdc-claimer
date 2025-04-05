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
    "emt12GVLEczn32usewwMc7tNpQuBnkbAupXWdAdUcXB7XyXXTs1EG5D8jeeynWyFG57t44godGPFjQ54WVxKpKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s8WF5LMZHbPyece835FujkPWmw6LmFr2Eda2MXcfkeXmZvVCQTMkzVFemTdLAywi6JUXrdzKNNTyH2v6ecD2VuY",
  "key1": "5LStSiZedqeRidSAD1J3MdAm8irYwDpVHkTTEcTZ6kvWE8XEmSfcorQ8ZUsa5ZHnSd24KmYgfzkwEFovFsoG2K1",
  "key2": "57GHFwZrpF2MMQ27gmUEDNozpGDcLWEcSy2yfmVUYCjS6AaupJ5peaiRSR8YbVzm9phn628cyW4kxWAVsEtUWkBz",
  "key3": "63cSgngmJbyZcH2hYJPPSvegRCPxdf2PWMm9adcXfWjzAzKrmkArzWmLhQEKRfbKsnVygY9XiLUabju3zGTRUu1N",
  "key4": "2uFsKtAJ9kVP14uo8X6jvwbuqZgDzBWyF3pgedrDhc7Bb5hY6c2uGMmEcvLJvGmWVHkkr7to1ZnNpVcnmrCt1GcX",
  "key5": "2B9gxWoJEkHFg1Z8UasGW9AfLMByYuGn12EiiGqWyAaUT5Hx2unDFpAvvv6VjcG3yTT9yvfZVZbWqYBQyVcYRVZ",
  "key6": "8JsosG2wndYtJnz2u4SUSrgdgwg8gnhSqRSpYF6W2ByFH47fcaD4SUqFxF68Ak51sihD5kW8sqaZkSGK7f8SRCW",
  "key7": "2SoLok8cpq3JWXFPKtxBjdmpLTqAN7MVKwuSJua6QAPXnr5hH7a1YMKyZDmq4N5PHyg1QjHgjhcbFrneAvKvKNS6",
  "key8": "2bYxw1U6saUM6iYn2qdSj96QEqygQcJNFPDgWrkhJWHMCE99aq5vfE7ZumPxPRPqRXQWKUC9VqkSNdbhiiVCPPri",
  "key9": "63AD3CnMCJMG7Xe74SMeP8n1TTgMR7HvMiCTXRKu8gfy5qXAAmnpNypdUbvvDSeryyzxRENzZAgbkmQVaeCygwtg",
  "key10": "4VHvqGsv4dbPb81R12rUh7WeHfM2HN5jimedNJopg2ydLwmgzivgqqw1nFyS8pUs3MMP5ZiHCrYgwELmRdcaSPWk",
  "key11": "dHJZdCHScAXhELSfL5aEjEVgK2uyQ6cDTcHJN2ixynbDxFCoNj51XbKcfNH2GN738PEuDyy8tztUAeHZV4Tqsfa",
  "key12": "4sZBr3zZBQxPyATWDf7jXjjPrBGxpbPkT9G1TdZqpVZffomL5Ev5twC22XBj4RQEP1bB7ugmgQDTDXhngPc4dbuR",
  "key13": "4BY7qUgKD3vGnk7iiqwixydjvzm7rTEaa2NFQa6vKvtkkk5tpTXi96kjhaGRxE8WNaeH6L5gpkXtPBAW5zy3aKhm",
  "key14": "37AHzcjBwWiUk5j1ywuxJioCjAk32ipJXSm8YAhmwVFGYtJygdaxx4GvNVNGCNh99xWueLhg71GzHYkKVxmc4JWd",
  "key15": "2nyCdxz1AsV7ReswYoM68JQ5CE9p95CZFtBPavYfyDNygQ8FVoqHsoKKt61f8oTwnMmBJjH6wpvxbw4CwDBd2PH6",
  "key16": "5m3am9mdWRRU1ru92TwPT63AbnTZbjNQKCdY3Hy5c8zbfoVjWKj96EcsxZ2F4Tf6FtzNUsf9Eiv6wM6fWVohL9Y4",
  "key17": "oZchnACCydQjXTTevYBWTwqVNdffM2JiLXa98MpgrC6432Mjut5GpvbMv8DY9HiL3eFadSrf6Lq95MfGZKWRyst",
  "key18": "46iegAsB9ZZnyAn4KwuygcfervJxDBRfn5r5dkhnZqefDza8dUeoYi4Qxz3E78k5vyKwS2aNk6FhRJnpBGYsbjqR",
  "key19": "Q1QxqG1zboHmpTVbpNuWYYpiMzMiEnb9w4kCoY6CpwE48Qt28G41hEoBd3HpLY2hi3DpYpQV8pysYjmdZTCbSA2",
  "key20": "4KWqFMRqac2mRyMAxNGpRvy62DsUh6maCkhV8eKy9V3WqpEyCvR5R3dhj5c2GEApQp8zuQqHDu4DrrQiStEs7UAr",
  "key21": "2gEiPhpGk56ATCgKjN5f5GjsMx2brmGcHqGUZS8psu4G6Mdk2sKX7xRtaT6ywwJTYVNyCchEpfepAkeDFz7Cg4yp",
  "key22": "3VDLQeamgWfvC9AYnTrRemSKoE7iyQFqfyzJ4a1o8wwqXsfEA7w9m9ttiBSJFGRYCyazpyYNjQvpe7FgDLv2YHVx",
  "key23": "5H7K4137nhcS2ndArZVFTVXwA6ewfYjFvc91hWVww9jNN2MLLL9DsxzLGcXo5CEQVwXW7PnWjfa1DmAJ2wPDsN8g",
  "key24": "3YgVJrEaQda8khcAZrqHUWxUCwaQes1PZpyZhJ3GcgWvCHqE2YHqsPpfVP8PqUfGQuadL6eEp28fQ8GNGfk1KcEM",
  "key25": "5n4HPAUWLP1e1hrMeykED25xwe99T45igSRdXDH2xi8BuJ7c6BmJxqEteJLBeto92jNQ2YVj92RDMomCwfX56dZF",
  "key26": "p4iN5YNBwsKZHr2qhEv5LG7y4qTi1rbtF31ynQGFDV11F7G1QJfNhuMEyTdrhLenUDtmEqGUKXowRb9qECrVDvt",
  "key27": "4PyumZwYrCxRXbHhCC9CZVVgcKJedmujvSxe1ZrwqKo7x1eGCgMj6oGgtJv88Q1cKgwHk6LaGd5aYphRa9bg3tVY",
  "key28": "3asv6o6tRdrULCGq9kNcVjqoX1ey4WMgsC9vsfu3qBYwpB8V2reXEArBDrpmXof6Pd24hex3RbJ2umgvYYnmpsgG",
  "key29": "58mn5xvYTvZYEjj4qTCLn4WdosW6NK5bPanB1Rea3a9uMR5EcraoSy9aX9ZNkKo4WzLakgb5bjJEe3Ar6ybKGrdy",
  "key30": "uMTEAAXBdWmanb1oN5u4HFBTSVSm4aTnPRqXRetfGZ1C2KqZzYXuTWGLNpatmTrfzUCaadGStbEppLoG1ZAv1AW",
  "key31": "R4bPRuocTpPVi2F4heoHypFDFHaKmDjNBTjeL8Rn8btDDtaeCcG8SCQbEKcvpj5vDiPFMM6wUmfkj9GokyoNwPo",
  "key32": "3cBdmhYsB2L1KWFsbD8592Y3Dg1ULTZQYdqkHQyKPnQNsMPxEwTQTemm7Uxpgh8twon82qFRjJ93fqMK6uaFvuLF",
  "key33": "2767PdSvRAmYKnernqZ7A3dZi5iV6V5Nvn2pHUpoqfZwGYbRPFKHnujdnvUTpqzGVkzsaX4THt1iJPdZrrwkP95w",
  "key34": "4BadTqZHwTz1fsF7iYwUkoHp6NrQXGNHhikgJDPGMvF1M1n6UhbfwwbdxXWwLMKPTa9xriKdZPJXRqc5sP99Nu5g"
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
