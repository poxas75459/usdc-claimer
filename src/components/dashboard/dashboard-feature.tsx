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
    "4GzeKwXkfoE2EK2AqjUxfvRY98NS9BUb2MNznTSqwQCCaFntxqopQofvjeKJe2HdeLbBQeALY2bH87cmhEUTWbzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJNsg7tu552kV5fyucsGRy81tLLHxLxa9zZWp7nQuczXD72owyuXxXay4BjqaB5aN8N4uDASDa685Ydx7aioutL",
  "key1": "3r8R9u2iHjcjir6dVukhc5WR59A2M5bifwo7G6cUnpYZVkdcWp6oCJz19YKaNBgKLBMxT5TTYHFFbGyRvKhjfejb",
  "key2": "295dU4nX95s61AqQ3a51EoRxwzs1mo5B4FGECtFjV2vbWmttyiNE7JP5FF4KVDf5nNJqq4ezoq8EWMk2WyhVtiWQ",
  "key3": "4VqsMXd6zqn9HRdcjNLCFGAWWn3JQWYegvKADMuaZb5iF4zCcCD67WcwXySdwnjBnHZZUC86wUfHULLFtdLKycim",
  "key4": "62xVF8fFgdDgi93t6HCuYdDygpC6kD9TFJuiJYmreQj5fSxd69JfbZyhkUikwWroDFEhYeAaeiF9HVYu46aCxVaf",
  "key5": "5UgDeoxZ7LxaTKwXJPHAVa6yJUqjzZPdfLYvJ8hrM3Q6w96C6hL3P6eiDnWF2EFPuWtH2gtzWHpeK6fkmUwE4e15",
  "key6": "5wUrR67oovD9SYLzVfBiPyHwAygMwjbMQBfGm5NhGPS6mGryvrGAPUi1xgonH3qkesfH7zbEurEx7QQaLXSDy4NR",
  "key7": "3iAbLGnbnanwwJtZheN4Xoz5sn8iDUbzNWciK4Gv7WUkpKPtzb2rXpNhAKyq6jfMFTrwVDrJ3yFm9uQUrrs2vnJ7",
  "key8": "QraNAHfX5BeP1hFaRYUK6uUowQUxtL4y4dw1NnRf3gJPqoESUbqRLWyEwPeK4roFEc2CwbCHyLStjRFgnrMMsUQ",
  "key9": "7Bk9Mkf3qMcYoN4mE3kpj5vJ98PVUiLMCmwxpkzeNFTpPcLZ2Fm5s9NrVpeAFKnGFDwbyhKmvzAXMBTRZQr5bvK",
  "key10": "k8qEEJaNZfFocmzL7DRQtap38h4574v82nfadhpxAJTpwHwJXFENmGMSJgE6UuL2nEQzQWQ74pqWKTSM3U9GbKP",
  "key11": "hAcbQb3xA8LdW3rYDodQEzdtLeDYo79ZF75LGtUcnE4Ay3RjRtbtnKF77tKqCRmFujJ6K5aMTR8P4FVsYqeetBp",
  "key12": "Z8PScueuCBbhZh4ihwnKqRqUNzMyaP8yBTuqNvFmmjgMuVcMq2Ar9XSMUcoBj6oJpkk6uRpthkmCpTL2psbCFXb",
  "key13": "5hno8Y8sRsq5bdgnkHxFTzqn6ZUasz9TQ7querbwFV9KJHmMbs78wyL7PAhucvhRJ9XTfL5xpMFckQL7xie47jqc",
  "key14": "wmtVwU92zmE2wVr7gGgepYP9DNjAeo8Du8Q3EYhrAHFcVFjJHeJZHPbqDxXRmCLCicKY4EQb97c6FPs7sg9T4fF",
  "key15": "5ajgLxdp5CXxPZ6oZK8MC5dgKu6Cj45MU9oGG1i2UffJp9zpD8nQBXMNNVnhkjPmEujQ5snf7Wu9qAULfZDHNr3B",
  "key16": "7JjreBo4WdwoLFqz2WsPAcHvKaKYCrYCoKPhbEr5CqnTDWs66CEihrTVfvUiVJdvjciRzhMox4Q9g5Bemr3wRfK",
  "key17": "4m7RwAGVdJNUGAjLy2d6c1DPxsvp2V3NnEC44KSkSbmnf45r6Fu97WKCMi8PbpQn2MtoajhZrAmke9R7shb32AMy",
  "key18": "4HjiA1LYpVuM9mTS8ERoQMSru1nSSjqxSvtc26ZMzVrxaq65tpQfWHMzPwPoexFhpPVbf46nXm2xchPWgLFAws7A",
  "key19": "63zUThZLz7A6CkhPLkMKGcjoKhii2hxVJ4k5rkXdoDNioT3TUH6GHS5jAW3WzH4vf1WV8a95zvRV2isXQ4oJ9n8v",
  "key20": "4BUm5BN7SHsH4MSEBc3AQA3u2cwjbeJvxs82TPiivoQdrPKx1aKzDYNdbAahjixQtLFzUEzLQbgy2t75gH9vLihs",
  "key21": "6p9AgXtFgsUtvJ2mUkSwqzNrwhWeQr1goq7kUfsDhe3DntBMNW8XcK94WF5NcGn5CTZ2jRbd7FncG2aG8Cm59Z3",
  "key22": "5ee2F4TVaNbPPizB5mBPFFJw5Q5JXMtvMCcq5C1X1Xrpxnb21t2EShdYSuZyCVpd7A18jwmPqgRMqB9RtPrLvPWL",
  "key23": "2SaL3jBFF5KWySeVjkTUxrEqbWtv6gtdtzR5vzRcVzhGiJyQx2i5xBvLAmMBTZmzdfRKHEg8413i81BJtFm11Awd",
  "key24": "4hjRsGnQpq3EL7vYYwkf1w5cE7WaCgwwGt8Ssv9XCQcQ4t2fKR2hc9h8Ku8m4x73eNRGCaPfpfMhFvr8hWpd3Ck9",
  "key25": "49NCcMyMwRVypmDF3aCqX7m5HHVkVR4J3UvnxupcFpRYLR4ZhorC4VTufUYnUBsVoeesmiU46nX9rEwVxFVjvKYk",
  "key26": "hb2QhYp1rYa9BPAvQesBH5JpofdZ1QL4cK7pPxyMNdM7Aw1pPZjbRPS8Fjvjwu3DsidALWha899kmqpU1oKMCDP",
  "key27": "CDP7KTfhsQZJyvZ5BksFr8fc1hTR7E7Pxmm5KWNq6Z6FH3CdnstVXxsM37PakqCT9vK6w62zSsXCxdJtGgdpLuC",
  "key28": "v4dHE8skEhdgKvLrksJL9K3dsdUQXQbAeKqJxvuAnjnr3vcxUnPhF6N7mp4XMtr5utPsRszM54emYCGp8H7B6xv",
  "key29": "4eaY4MM4N2pR2D5iT8UnWQ6igeSi2BdR3vpTWiVPQX5KpR8KUFi6t1yNXRK645wpAmpJWT4MHc6VTsSgUwJG6hWP",
  "key30": "329WRD71hGRLdetwXLYHviSsU23HLi4tdNLUST65m8mZUd9ihxJpou4PmX8UePMf8bGrAJ3kbCu8o2z9TKTopbvo",
  "key31": "3YhqY8uLGCCztEsRZcVGrdXeBEA4Jar8RCsbGsRz3MZGLTwKfHyAfDYcPQR1WWZYm2ZSknT7thR4jBwwxSgviz1T",
  "key32": "XaqtBQSoDGrbzqeNjMbxrMQYHo4pTGU9ws6sQLzDx9Z9JmSPp2C7nAySmkGHbTLdWNbuGHcaR4XiBSAHqyhM7Dn",
  "key33": "pZ9N8pakbsWvC6dDehnMx4Bx1rYB4i21fpBuFkocYSFeRbroUHJ3kzGxDhkG3p8d7dDJ5VbhFvPxk25QJhNYfxK",
  "key34": "2ckxtLrF6QykeeFQc6Lx4L66KUv9MUH8HZoXdd4cuadUFqjjeSVUqEhERzv7Nsj1o9UAiAVRU8RdpwZZD3usBL5p",
  "key35": "643hoZ6zabVzR4UfVG8ZCsTDUsUizbvgr9Hrbs3B3MJHZE3L2t8wUkg8t4ZWcpkjwZQQzwkyemK3UnVYwRsQjZHt",
  "key36": "3z77p3Yfnue1yjVF8FRobiryYqPUTRvzv9boA59Y7Y2rzCrQ77Wu5BedVApafQo2GuLwoYXnZ4Y8LAR6V2x9yzbS",
  "key37": "3HHFY1QymRfL6Vhv4n7cu4m4JX7ReKtqS3FgNpCJGWvpNzB1ew7zSNsn5JQwUcz2LzQirCrHnAY8FEbYZTKhS635",
  "key38": "g1NUoGGK7N7hRdFLYZ5Edrsk9G8Hheez4M3rcyN7dRw1dkxm1gUUwvJcAjhytzuFPgsF2aAD8XiQfW8K6NDj74f",
  "key39": "4ydFGZMnkSwHuzdmYYur7P2dtKJdBMa6HS13owSkGvnZLsgc2fjBiMkwzuqDqaSB54c9r5kNYjjSnhSZUTvTiyuM",
  "key40": "4pv4wyNC5RKZwviFhzuCWjyjjihVJwkJhVvHNkya25G6N5TTuVfVADQCVN6xtPXz5mbNwMDNFUGzNFa6fBtLZA7L"
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
