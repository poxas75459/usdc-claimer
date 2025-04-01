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
    "2QvPTjoQkym3eu2DnSMK9FBMuHCNZC5ydUG1fe2UYAueKhHsQJRKnbm42vzFoXiwWCW3BWD31mnTC6L8uqKx3otU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iD2aUDSv6xPF9TW4sBY2YmGp8bY25K6zuB1yNEiR1QpAynuVzFqVJrG4TqDMi6M67bRd5sBH6f4qASbFwhFtK35",
  "key1": "448MH9tPL9cyXZUEmtLpdEvpHEbh9GPtRd9Psgem6DbMbDeZTDj5ngXWgenYNmq7JSRXAHGFrCTdPQgc5Bhz3n2E",
  "key2": "2B5JwqCfPnaym6KqrxH61dVfrwRP5bshVGpJkx8d7QeKybdvJgvcDuUGYknoAijaSnDNS5PUkCUQcRRraYjSaPTZ",
  "key3": "2MFqdg6jcRvMra7xxukWCNvqrFfAr9nfFaD13gUsaDbx9rQsDc971DhhdEpwBUobLLtqPJKHGBbnZsXNcwVifrxX",
  "key4": "2h7pBVnyqnYuWtUQ1Spw7b5U5QJi6tfuvQXBiRrK67V9kRoCcwrjr6GidudXaWzEsM4tnkGsDZPTxZZpmZ5tvL3f",
  "key5": "4B8BDYArsgGYjdMgdj32sXp6HtEugzFyaVppie3HpFutDgq1HcVZXVG9nQ24mQgheqHLCgqHFXR2w1LXmNSWsZzZ",
  "key6": "q5oCnDvAVq4DesgSVo72xHDCZTGGwtZBqmGxoawVe8BKSa2BWtF3zhLeuf4YF2G4v9qFBxEKXLyb3xPtm5VEXhe",
  "key7": "y6BkLSMBwQYoZuWLvcj5rz664zHG8qRUCdbuF2DCusCvu6aHnZ5RPBo6KdHiwpebitcTiMzvmYqRYQeyt4qZa5v",
  "key8": "4Xn6RNARQxnfBT7zyaJDbGsAGvThVsPjvoDBoSqcvMGxBoPNAnAReiEB9GjmVFFcXzzLVTyVUMfoLPkwSMmjvpD4",
  "key9": "4FC2pB74cEc9TT5vGVthKoDkBSHRg8Fjcr88wjbfYAGndvXHqkGRpZhfCRwhkq5nJVYUbpnetMw3bpYWixeuD1Le",
  "key10": "5ETy1G5nrrGgZtE8LezGiZM33J8gLFQDQrA43PxRTNkjJ38FxC1wByVCRWemqYghkgGhny2Lxyz9zWeK9nL7tpAh",
  "key11": "3tDEqFpFax1ZKf6rRh4YZU9bJY4wXVuw7P5b35gP97szWKhsaoRQXXjtXByoZJj9F23uvHMgo1HEBbMrtgTKjcHi",
  "key12": "bmtVwGnSiY1RKTErzPcfSzAx1zDXsPEnFXW9k9m5d3NcAfmLgPkACiCFHzggpVGnsqbksbABVrGsBz5uGGqdyUZ",
  "key13": "5mPwqp2XFK6mLBe25sTbs31sDntCcGqNszStwxnuJRqAVq87xye8kXe8fZuCRcNxuby2XfMwT4f5UAWLBXyvGP1q",
  "key14": "4m1VZMEPfKarzCW8vBkrdSvPJ4d2G2J6LLfgNSewgNXkgyRz1SBo2cAHi81Fk5KDjrAFstsPK5U1GiFV5ZkGAupS",
  "key15": "2jjbytz58pQCwokFYixrjN64tjipW1SSDF6x6nKQvvmwq5K6x1GZxcRQ7fngNGYbxwg62KWBEpHBcY2kcn2pCotq",
  "key16": "5TqampqWGeBf3BeeLAV5tLcZhyFccY9Zh8oGa2My5U4HbUHyEsCDfMtUGGkEqtSjptwvg4UkDFeWSyTjFq2Xphae",
  "key17": "4PNSFrTtsQBANMD9NqLkvrtQsX5MDckZA1wXJgLA9RVTjUtyNmj5E8VLPDJ3VXBHqMx9uTQzXaE86NbYWLsmfz9G",
  "key18": "2EX2FMrPLYisjNumyD2yLtVRzKhTTDCX5D6XBFCFjTqefR9zbGz3gUJ3JVuRJcqbEVz83c2ptzWwc5Bm9Ppow46",
  "key19": "3DmPA5JgL2TScRqBFWEB1DsN2VGXJDp1qBefr1hd7PqGVC9DXe4GYLAXaFKH1zmCZXWMRhFiTj8AzNQQN6iLq3UJ",
  "key20": "4mB68Ra8iD3WqKJBYC1JpeMiauUwYeTdVZjwTPedqFrH9zMsfEgQifmJjbyni5rXQsQmti2zjseQn4reCRH9N8PM",
  "key21": "3RVF46qUKEFtCLYGwXKecBP418kq14JnfLHgYt9zchugS5StEr1qQAtDhhbn7tfM8oxngzsZcJm7Mu9gLr9nx64g",
  "key22": "2aBsBAxrzQoTaTFYqWoxP9p4uTZSeupovhFLhXHXntE74jPu5j7RDKBL9STG2S2syiSCi6ctT4sUER7pqF47cE5u",
  "key23": "dP5PYHxsb22rYFdV4FzL6DEhHSPycmKeKD1LyrpAN1BijXJLDUqRhceWkPRzfU9R5JxTwE1NqR3TuMqxBq2fQCx",
  "key24": "4uiJYJPDQE5k83rmYrT6AfEx5mR8JyV19kn3kN1jsQqkFmkwX1SR92Pv7njZ3Bnvb9Z3iCU886i7soGsy529jUwi",
  "key25": "2yPzTeiQM9DP8mGcKSxhhKQZzWb3ZrLeFxhV6kHi7gfZcK1Xsz4Dy1Jp6NHmtoSQmNkfffxm6uracvfiV82RXspH",
  "key26": "5TWz7CyeBrdY3jiEFvmsd6hCbEbGK6tei1YedxgPf5kym4A4RsFSiyV1v4ohpr49Vkq15F4Cf9UNShC3tUqhsw9u",
  "key27": "3EQh5KgegcgJdaVbzdbFE3uzUYf6f7fgXKNXpEMJeb5E5GUn3GsuD2TqpD5z5qRyfwmCLD83qABWPMXxbWSifrqE",
  "key28": "4jkhbhEBU4sRDyXY1hFR1a4j4CiVR7A85GG8kscxrge2oagu7q9zLJe4cRvv1zVxLoLABF9mNKV5GYhjPaHWBjrV",
  "key29": "5CHmARZTbK9ChU8nSLN3xvWqMxkGx5XPNnuKDT2NfXuhLd5pXxSAx4rDXCJ6nCVNZbrJc6aMhbKGpTkHkkqfUygE",
  "key30": "41UMbdaVFHdTqcuMmDABWqMiy2PZseCNRsphfoRxCuHbRhHnTg5Fr4hd1SdHHzR9tQKXSG8h6Hqs74CVYmzY8iXw",
  "key31": "4Z1Eo9wN1QibMvwGa3WJmP2TbHF3T41sbWzKeGcuLBM5kWqc3gk6LXe2PYugWVw9FyreR3gX6f7gv9pC1TeYc3xX",
  "key32": "54tMHyz5izbspaFdVPS4QLUX1aAqMNFGJyEBmD1oNxFrCT5XXWitkxpz4cM5EnWLbjDitt6yr6MAjAJfuHeRuAak",
  "key33": "2ocFvnvoEaS2wtMskY7N5gP1VW2vgv4sqABY5Lc7w57vaCifjD5tNSN2tHKbEyftBQj5yjZ3X1775usJNT8RfG6C",
  "key34": "289wSTV7MXksH37y66od32xP6maXKt6Mp4eAh8WaAW8GaRR8WyAX5HejF5KitTvXyQTZqjtggbMqEL2fccr6NQct",
  "key35": "4WMUfp7wq14US1Eq9j69ZYrniptJjrfZtERrsPYD3snqQLqE5G6WYQUNTRXLATwnAiWFjygK2Bv3zaS2dcoBuQHG",
  "key36": "kKZp8Z9j8m8DRc8gwyBKdeUUm2F4FFB2NWzK3kiJA3aTrLU2ey7FqrmkNXDj3ximjkttzbAkZHX5qwsFhzU3Ye3",
  "key37": "3Z5d16yTnx3HZ8eiXwqjxsdNfzdMDE6F45fHLRu4AkctY2wJ7UQKKHVfY914C4SG6oZDdgBrKxUfyaMVPjVrW4qa",
  "key38": "2qQRSaKQNs5cuJpkBtCzD7wJZCkJfbZVTsYsosKgRYnxF2KHrmSN5JHGivCD5HUbGdK6BC48eshMQvHTp19Mo3Pt",
  "key39": "5CMWZMND7GXwrYi8wyMZLrkN9hVVZEvsTTeZ7AdNtdCGWpnLWwXFfK162idQDcMenaDE3wUu6PqPfDoxmY5p4V5K",
  "key40": "2TAB56vnNUZzvrWyY251wnDZ5Qifdc4QgSRJ1LYqyxbV2HT4zdQVY7KpE6wALx6tj1mGktewmGXCC9CFrKg8r8iF",
  "key41": "4WSYoRzetoNqZ2DuzZQNo3x69C8aj65NPspRYQisddLRWQQM1d5oJurLycE3XPjf2PDc5eEvxtNRmXj2GbnxJ1Fx",
  "key42": "an7RNP81A5ubBt2jfmKJDifQkDTPHhMuJ4oFzkAaaKvMD8t8BYtcVCpWwXc81z45RRqauJUgSSEqhc26hGegYAq"
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
