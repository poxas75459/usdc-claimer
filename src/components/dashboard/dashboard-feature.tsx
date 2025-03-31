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
    "4skUJWbwDGHnBDmECgXriSeWc6jG5rDdSfGfYS1zwpB9TXkv9t7J3bcgMHPqVSAWFAvwC5KBmBWbUr3K4nTxmaJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rrjsdnUxmxsKmX3u7kR4aYNWPbHqx66JfZVkCDHMeE5t92ktkVAGZDuT2btG6oMtpwStVQKVgDeiZ2dfp2XKRjG",
  "key1": "5fMFAGWLonaEVTDLQwaxjZkGfBqk7TS86TjJndoih1i48gkicUtim6bD1evW7AGQd5VRpiXNK1R8gquQBRuvubod",
  "key2": "4hfpveAqa7a8C4Wnn2q65UxmWQ9S93zmKyTdYYuyGuk7JudmGybVcGn189Xhdb5QtP49KK9mHV68t9aBsX1isLEW",
  "key3": "5x6xmg6XGQhz3fcKR6o6acs5DyNaJ4Y2eao9DYRtLMMsMpiitjbdVFUULFomJtuuA8xbAyGcYra4EhgUo2V2UcNJ",
  "key4": "45bPLoLYqTep3MUtJJm41AJbFPnieMWRuZA7ZD9erMpXyaGTuHoVg8NRmuY9s4FvW4YS45jXQ6JqDdy5SXvkFVjB",
  "key5": "4W83KzU3vFaL3B5m8qm7JswXS1hDzi2oRsyx9Fg7ooh7Cf1dX1ReptADmbpLASi1NhhSz9eom3sC5L4RpnbeACnv",
  "key6": "3EEGC8im9y1BEGJokGs4K5UrVQR5mRrgJDHHKxhi8wSt2Bqei7S2THYMps1oQzZ4CFT5m3hRMk775KDgKgL3FmAE",
  "key7": "2kCmnMxpW7zMYHzTBAnvs4nsJC9o1xqCqCY2hVPhK1nChU6vYdEs5hfmRz9SJH1jyJpz7cfbHaeKzEDHGyeHzidc",
  "key8": "ZGoPtGHxZTni3yCcbVVLcErCPLWfzxbbCLUJmdfiLfar6RXJiKLm2L6X1uZY3ZqUVtsfUzFjf56bu5NTTVzBBgU",
  "key9": "pGEwLWhVVBLybRmKn4sCF4uTF48Ud4f2WGbGJF4Umx3F48kBEYMTFnSdJpdDBXczZY6d498KJ2UWCF8VLvjoPxJ",
  "key10": "3buMRuQHXjtP6BRKLHn6wYnPVmdrdqw1vXfw35TqJpJUe22SUhgu7BFr1779Pt8CuCBrP4UnaKUcAskkjANGr2x4",
  "key11": "3iEfPEBeypYUAwESiSbQvJ6sLgAo4e4nq4yJTDnpN2TnhiwDkZT1ncrivHqryYUB3269L31czhBMygyxwSHEEjmj",
  "key12": "39u7d3sVQkTvh2brtfrq5uQN8GXaZd5VtWMSoLzQGL8KoYdxu2Ur3Vmgsr8q6feEnKPfkKb9bdHBs9yriPbCz9ja",
  "key13": "2wtiC8AXzKgr7QRzqTqs7xFhxXvrcsLGHMLwhVd3H1GxLWvufFSCa4xn7MRMzBkjhvEmktWpRY7g4PAoBzswREMX",
  "key14": "P2TNiTgm3VU2efvJrjR4YHtXHaWngGNJqCYYegW3RZ5tTXrhciARB1uKpFv7sFJnbhNDEB1erRE5kKhCREvg2n7",
  "key15": "4guNTQ1CwXoJD1iVyKNH4Zcs6GmHta9HJCUZ1uTSGqL1rjHadNSmmqqgV1hMnpQ4dUpeYXR7ryW414zGSsYmtmcs",
  "key16": "3wngsydPJ32HQEG7vG4a3JXURHpSJ1E5FSyLB9oSeDPbH2QccEAHS7ah27tydaQRWkkND9LZVD3Ng9f999arg3ew",
  "key17": "38s2jaDaftMBC3x5wa5iMCPsyAnZGuTk7SacjjE8ECrGd4NR8KzhyvawyYmViiBXASPtJ1BQh8i62ptJAnjKHg51",
  "key18": "2Xi9Fs5fN96VtG1BRivw8aU5JJaYhe57zYnpvMwC69HSDiMjbqLwhcmF3JLcHTgbLqwtMEXWGJWKwyhaucJFoCL7",
  "key19": "5jkbZ5Ek4wrcNXCCBScw7inpBs7PchnYksTxWU7V3Vv4Y65oRJzj22KKEdtXbnvdV3cEMgiRutBjt9TaEf7Z2nTg",
  "key20": "65HBvbg1pP5YZzSDqZNnY4w32wk118wpQdNvwNC8yKEzXqhv3JH8NwF9rJLSENh8ZaZ7kDejXYLTURrgjtvRSjd7",
  "key21": "26EaWBCVTmSMtGzXfConD5yDFkK6DdavthiUNDLt8RtPFya6XkPRT9T5iRcbVBrYjEG4HriwxGSYQnmjQ2ALVq8A",
  "key22": "SdntB6vyMFRHe4mtDTVkEvvjyP3ctXjphMs1Ep7TXXyMH8954DnEaqyVJjMiTwkejthVtDJAa8m4S5dpkFeS55W",
  "key23": "6aTn4TxT4ESaFhgPSPsdSChjGFScK3p2GYiPbZWn6M9kBjhnUVM4xfnh2zFug8FaE5wDLCowUyR4RDdcqQe2vLY",
  "key24": "2sZgadc2A3HTz9B22B6w3wHmA27D52na1JVxFcdPFh6UfcfCdU3i9suEjo15B34gfKnB6UkmNhtxZR19QjRtAFBg",
  "key25": "4UW8VFMi8f6xyCnMQoiFGh9CkMJFwtXgtdQprFNvbUDyRyy99bSnkugT1j5gKNFkoQ3CRRNYjt8gHb3i1fQxRtNn",
  "key26": "54fkWSmeKF28o74pX4F21uef8frpB3Hz3cQjLNJx6ZnfKTsnkaVbw4oAPEHHeptKDBiDoQo8AjGddyoN6JPFH3j9",
  "key27": "5i79PcEq3AFHxEegycPAzrVrFYrzrT7b6Vnp51Spfjovw2YCBWRwtQPpaXFhrmPQigkk1rD2kLgxUfX2v62WM14d",
  "key28": "3yTiUoz2nbpY8Azsr1dWKXUn28v6B3hLbSQ1psEDGQhTgsrGYEbqiWsRTNPLpic6YzGtNFXBw16J9UY5kpikq3Ck",
  "key29": "jysA4xYmaKiYmDhwBdFt2KGQbfV8cs24ikPe8ZxL3Wkauo3Tmr5uC1nVmtLnyccpPLLmybNxQgNYF2fwA16NiMW",
  "key30": "2Y9LZHLNteJWDaLd9ofkjNFWpUy68pZM3Unad9kuc25FAPoQWrxpoCLwTmYRdFifQKKabkw5fZJX1H669yQB3vpc",
  "key31": "237Eaby1aaUXZ4WVKANx83D7AsFZu3DniS5C7qSmK7hqXdXgPA81nNUSaWEeFQNNNRt7HAqy35dUgg6MxSEC2ZGg",
  "key32": "5KQA52H2qZmKmoKTuJKNyvRHFRRGGJYBPb5iELyoTj7BsSqTWZPkcPvC3PBexJBxt2rpGuakdeZgemw96WA3QTee",
  "key33": "N7c9QH3TBKRm5aRtE66PdQy6fWD32Ad62euEEMuAtQRxqZRQrZRE9dMtoifD932MLZysLVUn9Tm5UEDR2RxdquC",
  "key34": "5ijhbQDP4MiYEGnWMTDN4WyqMahwDiAK9jMmFXEFXvSNJmkcV76NwnkDFwxT2B8DqNDNtjx38rZaD3Xhf4jTRZM9"
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
