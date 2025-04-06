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
    "5EDPj9sm9tNhPXpBRmjnmgpLg33q4zNf5kuYbaqS6Sko3DGT5DMKT33assA9LD8LcuZnknXq4xHVJ65pZVjR9ZPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XX9djzxVwKUzPs9dz44cy3RdnhJdwiWCdoGF8h59sRuFeuBUMYdQ4pvhVBwYdTmDiPPsaXmYnAm8uFjtSsbZzEu",
  "key1": "4qZXDfskEdJvSUVmF8EuZ22EdutBfwGnCW5PqyKPRf6njukvwqvtR9S464q9w9Ej6dgaYv2G7XGaU9cF8CCRLvYC",
  "key2": "TMnfocmgBDCotdmPRZEHXy2SPeeR9oXR8gxHnsHXvudJ71oivGX7fhymXFWNAGvDX3jL7XYhCJWXjXxGFLsZozM",
  "key3": "4nGmAjSGK2XhyKT4YG5uTtYFr1gUKqaP4qwDpvMS2rfGfuPW2MHHZG21QME5YCANTPdwcPgBmS54fV6UFHcVqcW7",
  "key4": "mR8HhqA9RnsY1i9CEFcbs2S1YooNHHZ8XDCa2CFjwG1GjKkGvsfh7gvJ2fWHUbZY88bBi4WfeUSpGjwxemDCbb5",
  "key5": "2wcfrFA2EZMjyKxWJpJmncMwYFky8g9ntRjtTqhWrx4LN7TjJVqixrENRNjoBMNWprSeYW3o6XHHxf6BtmDhw3jW",
  "key6": "UaCZcKz3L2KDU2QHtAsxoNx9qv6MUfrspQ6yngV2CDx4G7kHJPSMuPLzRRVoiryusArLM8zSsqnDVCMoaHDThT5",
  "key7": "4cCeSHyF6WiuZ37rzNNy52DQTuJuDsgkmSsCX9bywZaYVWU3jfxdNUtu9LNnAChMpR9W4icFrRPPgmTq4B1nocyC",
  "key8": "5cqSiM3hMdXzC2Vgjmop1hHfkv9HvLGRN4eVqJ9g7Moh5xtngmcm37PHPVcmq8jwRzbdy8q6pwecHDz7ZAYsvQEL",
  "key9": "sdYD8jCZvkBu8r86nN9hJoM8Qqw5CkexW6hPZqBdU4eafh8zjydcA4LLiQ7j6DMp6ygw5hvmLQnix3ZF1aPC6A5",
  "key10": "LNkPkQronxUfCkNEaLGQ7UiNGSCdC5gzfCaAGmhRfn7698VEb2YFuCSgrXnjmW5XbZbkeGPetQPbvM9axsv2dhi",
  "key11": "4q5KbVSW1eHdstcaxCfxGWUMPCEoVzds8oKyyZxo3uKZfHCiDPhVLy2b1q2JWEpq13DFb4YogcW8dJ8QPK88cUXA",
  "key12": "2cj75LA9HafsERtwPBN1D2DuaxWgzxLQ5MNBzBmno1YfaQ3g6LhtGgA9jqjsoNQYHU2bYxPdyqJtb98jTkHEaMcn",
  "key13": "AsmRqaNZ1i75sVFbFcaUdMQss9y6B9JnwjVVxenPfFVQgnWFmuFeECvLd3yYWe3HDdziZtWEKcPhv6Zx7ncgU2M",
  "key14": "35MNFtxL5DMMeeQfSx4PMjwsCW7pL2qwCSaAccH82CgaWbiFhwnteKTCS7u8BMUZkQw6tTcUQzy4Q5ofkbNVDNtz",
  "key15": "2uRaXqhg1Fpz1wzpvgwBxWcDK8m7DFUBf96WzJ7EeV9oyZQmbidMbo5YVoeUcambqXyaq9iVqffXFbt8ydS3VFTF",
  "key16": "5oRMC8hg4x5ViTJ3SeiS83ipyjZrFAK5fC1fEyuid7aeisZcMyPuQVAE5aajNvYo5gVVsw7z4Qs4DaQC6pLLATvi",
  "key17": "4Dx3ekTpnw6QMfV9JuSsmSCitYhghn9bkrxzJLeBvecuSwZxYd35xRY8EG3ht7cK5UPJjua9B5w4tGccCzaECCEP",
  "key18": "5smbjSZDBF85gTJhrcGZ79RXJRxdhjF5kzTSqQHTjTuwo8TA4mmjw85E4eN2fBvhnen6qCiUkbAs8GcZzSJdQUt8",
  "key19": "5c39S9yqG66a9uzZ1Vce7H7MvsWQv2MVfybXM34jS3ftfAvU9q9a4GFmcLApoRBqYGczSsA34siSW3Tb5BrdyR4T",
  "key20": "Bd8nWBEBcNZ3vnNBKZrxx7eTM87hcJbJX8MR3nWMMAxi6PV9pygcCBe7cPa3f7vVMHMZTGTRNwnaGDwyDmdKayd",
  "key21": "53M7tUbCMYEzypVRu68GYqUUD7MGqHhpBL1KrbQhQJLEVKNcUQqjq2ifj3d9adDsAqsq782H4VFBWncuBg4y4bjx",
  "key22": "5Htynzi8N2Zv197VatQ2Fdg1tx7BaWNgW47mmkhq4WTk5tMTmuXemuacAfUqGmYNH37yNyvPcuoj3yzdoEfhNohC",
  "key23": "5jh6PToBwtYiUNkG5EktRQ7f5oghuCKiQREPwJjHLt6Z2uigAGVkTKVzYd3FK2cm9qjGh2XM7YisbZwbu4N1RkfE",
  "key24": "4wczhZwRc4NZVoKqTEyMtvV1Bj6MSg21iPjAYbBUbKQqkHn6r2CAuE2azKDAYiuUQqFcy7h71pcrm5Xkx82TA3t9",
  "key25": "5EuXz7JtsQcDxUrS7KDzTueLtHbDYSMgAwjH83XC8qftb8L2EoVQzwb1gkhrczR5Xg9pebHCUN7QAFsBDRV3C4cJ",
  "key26": "3QPzNnwq9mRXRnKTYK3Bvfw98AeBMaF5uR4eWY2anUqdbuknQAcioHdEoi5s8WXnCEB1LdKFjGwSjAmuDD5CinWx",
  "key27": "28UNsnsV4HGvFYBwixoEwhjK6LfeWvmC7shiiMShqoiDja242f4CoUivJGbig7LimU9SouNrGaWTso6L8Jafnou1",
  "key28": "bcmFzhqicbhzZzsm2Cxvwu8U4pHBHPbAQYEG381mYvyARQNAfVUaE4PXx5pTaSyz9fyqUiErQZRLotGfvkJ2V5E",
  "key29": "52FVPEeuNoeWkFgchMnguEEnUEULMk8pN62XMaffrzAYWJpyHH6e4PrQaKYndW79rnfzTuyWzz7xjvRsd3JXNEGp",
  "key30": "46gsL8eT3Pkxb8UByqSFm4Mzc9sRWDTBfPj8HW8paBs9DDMUpLBqzWnZEmkCeiiyQVpGtQMRiBoBx88P93q2PFzM",
  "key31": "2agJTPy6uVBDf1XArG3sWu4hbVpTaRWoqd9Y3nCucHBwGF7CFymsjBsJA2jbut2KW6xj43qx1dzTcgei9HxJkchj",
  "key32": "sNnWksSorm71wAgTkSbmdq3nhVeVCxDjMJ4W2mK1wXnYDTbRL5MmLK3rgaP9eVQTFQPfrK9U5qpRQVopLLrTXRA",
  "key33": "5wqhehDVs1gV9BgYPkCVyERXJHhqEFbDpMHk516atexa32hSH7E4Kz7a5AQUrgQr1STukP697RYkueAg5hAG9F7n",
  "key34": "5K7NdbEdPGbaPe5oDfADh8aqaTHCriH9xDi7HscMmEBe2VLdHN6wRCyKrq82Eb99aaa6AD2j3YRP7n88wurA63yS",
  "key35": "2Pot4vvXynL5NF58RM6xTW5bQmpjYZZQ5iLYe4mwivQ9c2q6Qbn3YfmFzaXjJD5bUQ1rGvm7dmMDtBrXWW5rPor4",
  "key36": "2mvRdAyrKVLjxzQSNhi1w6RiAB4NjNpp6TxRJaTmcdYiM1bf3E7j6V8hPce7GTq3cTazqkdDGuQ28CzzoccfS7bA",
  "key37": "5M5xvL7guJABaY4r5YLvQdF7U3Wo7V26znwnKdc5Bgo82VJUfDgVKXF3uzW49DifyjJQTV1EJND7tNbKHwXvxH71",
  "key38": "3s6H3XpgqoJohwRyoiD4fG63kRE2Uyx7dfxJ4jiSy9xJgzMA8FWsbTxLJfNLzVGMhBkK2Cw1jgTvHj9azcT9aQF3"
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
