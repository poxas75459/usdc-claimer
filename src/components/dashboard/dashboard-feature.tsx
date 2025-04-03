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
    "2Z2bc1maR64Frfc7bGt2eFmi3yyYVgjPUNQEzzqDuDhypHZJoZVrJXFfMjeoB3qKZTqKDdrgvkvdSh9zM99R9DaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ikPkEFkzmo2zqFnQuC2xPCw1qrJ8Douj4f7E3VY61HJ1jnnsZvXM1xq1GaLzvDQzgqJSDFo7P1P4smaXJevRNY6",
  "key1": "4WFQimq1mv2hsLgMx1AqcirHP6KRf2svtZDpKPXZNtqk14HdfHGMnWVuEwK7GF9nppFNYck9K86hcCip7y6wKAke",
  "key2": "GU8dwLnEFFwk97gdWHXDRxQhDvvCAE7uNBeo6sK4BHu4QLAw7YkBKUZ1iADRQF6jmu76SoCdv2cxMWPKv6roxj7",
  "key3": "MnX4JoBLmYancqJPkTcHv9EhYLs9FtJpJsyd2aTufwQ6WC71KDhJRZ8X6K9uLfys6R9hyXftWqtpbX7LzrydUT3",
  "key4": "4nDd9po8eByukXE29N7M7zcubt76AmcjegxQPuWj7foFt2jumRdBGwc3FCEawc4XaoRvHD2LNBe5jQNEiusEPMF4",
  "key5": "4Wh9eymqtk4DrWRp6virE6rNrjBkFN1R9EHZtb4xohG8oBwsjJPAeCC5WNZhawgVTTgftTaFHFBGDajKBLyBgwuF",
  "key6": "gonefmVX4VeVMnEcqik88TJuwYF4cR6Vwb3nLj6UGM1qB6ZzvqW9kw9dUwcAvcbJpS4QNV9Qw58j6PJ3JfePJmH",
  "key7": "4mjvnHLH8FbMpjpNdRydqBxJaKeGStubJkrWV1aYNFaLh3qMd99dzfGvzmp4crYuYvMdJzuedwE7SvtzhppDzEHW",
  "key8": "2SVUYd8cid8DbpjGKrjNaZgRxRNfGfJrHKZxFumNWSFsdxGFL2LRbNBuJXeBdZeVxKRBBknTwUWZPbP74MfHW4L8",
  "key9": "3gcowpMErx9YjTx2FjhsfUtE4SDRAvU3wsB9Es9d91gAkzj2ou28sdp24koqoMQK8GHZhzBroezWVNRsxyitMhkg",
  "key10": "44XigxtZ1nE1hNurUV72HGWpSGVWuhjXhXyA73RQt8DtVeq9P2JPLsS9ojTa5WsjmQn6hzEVsr6sAyXKNkHEsQqU",
  "key11": "5iLK2YmGQNiJutVyfGSWEsvsnz6nHc7WEBTuCFSWRk1ArpGaAQUirAV1NLN3nBHCZgJoAUdBZK6p7UeeBij4K1pr",
  "key12": "3ZJLidKe5cxVTV2exwaTDT9VSaMtBJ34uwa6r7JSjgG5mUy7mXsPnWpAVp6GSySbx8pEXEdfkCwPhBQrWbUgDtwQ",
  "key13": "3chvmyHR2xiz1avwD2L2MGoGYb5viLdb4qNn5peTbJCvqgWRvobEyspzeQVynDj7zjtmPSbo6iguLUvXtqEnBhfb",
  "key14": "2qpYgiTqbZiSmYxgrJpUM7fSnpZDCKexguTDiUwjz1abiyrzQzbiLfrruYM6x6ufR3b6pTc59S4vyfm3QTewwpas",
  "key15": "2S82vMucW5zrqDWh5CipZRgUSpSmUVZJfDN96e1gf9xbmpYbfQqWZ5dGkLA8ugoiDSgBKPUNty9N1gzejFqqyfkb",
  "key16": "5RysKuUoYVqA2jHzbogAwN2EtF7dXwxq6He3G2dScCsESUVVHvXMsaPEWuWnXAtkkL2TrGNHTiFPdJMMBYauFLGb",
  "key17": "2pr77r7ndo9dLL2zpxLJyN5bUNdYLCTfkx5fA79oaufnPWYDsRTqQ7Qy7hvmjB124wmEKFsnUoambD8LjqkhguRW",
  "key18": "46iTnurcWdYX69XnN2LoYwNtCS8REb8CJQLPDw66hCSUnkjKFJSyagE8rs6FLifitKmtETs1kLQNvYz6da69fs2D",
  "key19": "5sqZY7SFgYinN7k4oJqjYBqgJ9KJPdozX6VTadmFwks5fhCWAJsLPuD6tWACZH2A5wzqtBQv4AYcDkLHksvnu9ee",
  "key20": "4dQtauHYotqZQUksKoBH4GxsEm4CvL2ic9y9G8P26EtL3Qmz4UNdvosfJ4b8hsJ6X5pLepUgMQf9vdpnTiUqk6KN",
  "key21": "3fvBzA6KDKz5eAuWoNUCn8KFPCEfZNZ9U8JcR9GgoyKDpxTJGk1kWNnP6qDzzTqZpdyGucW3Wr32wUr66zoCV4AQ",
  "key22": "5jfhboj7W618qM8vGQqiCQVFf6PZwiTVMxQRV7L4hNARbpuQjMR9bT2qvfZj8umwQDtURKoH1hcRNnTzX61yF37t",
  "key23": "4cvQVUwSq1PXBmx3nuoP6Jwpq6MP3z9K8wNkux1JC6S5hRvABk1UbcW2N1Q1Eyzft2dqym29N7cos4VuTfKtFNUK",
  "key24": "3E3PrFD7v71q1vM43UWZNcM1wNQEdJDzAkpHXbJLjmEmdCJvt8Kgb2nvytahPH2HmD5ruSpXMSrbHyEXE1A7QikV",
  "key25": "4zsQBCwpZPbnhn7VhetFcrzRHZs7bFL7tTHJM9RgH7hQjB3npkgRPqkhuZ9HithSD8h5u3x7e1FE4tRYnXtP7CJg",
  "key26": "53uNRr2N1wzMihPedYPQ29W3B53y3WVnbkqCg7XpinSfXaNWzF3Z4Go8y1ZUaiBiph6m9LyVN3uqdnYHgeG8tM5R",
  "key27": "2qUQMipcMmVPLDKfTrrnpf5WRHN4pdzoPUm61eLUNmvQzRtXMDhf8L3cku7FQPWpXu8rNrC9zZAov44yY8Sh3Zcw",
  "key28": "48hTnMjoR7t8z9DNN8NDauXHqqs1LchBu5J2EftS7oz8mHTykpSQL4fJUnHHquiVNjnnFBdyixZ1Lp7NqTMwC1AV",
  "key29": "4gddE9oobXzx5Cw6fUL9VMtP76SQzdrUCzsYZacqbUgtpNGtmqPPwVKbGCKm1knJkRLgxWP36nF6gNxdqTt41pnm",
  "key30": "522j35F8RhU5XisGE8VkJGa3VqK5Afwsz7qjZuEejQKhkYubMGfNiUug9d8Ycm1yzmhKjw5csPwd22znDg7kT1CX",
  "key31": "x1E1iM8yLm8zjakNXL2BPnMspHsE7214hTeQY74uBq5Lhabt7Pt35fw9q5spGkGXycD6es7Anqq5LCZW3KpMNXK",
  "key32": "5QY3cGVEXUV3EGAtk3jcL2V2gWZJfTDpxoCMteZWLtdy67N58BNVSaFY1R4GecDrMbjPpRj2RaeDTFSA3kMn7uTt",
  "key33": "555rzK5QFg2mvs5ZT5k1XgFhrw8uj36KvdMCoxcN2n71njUcsmDbd24GUkQnjBjReY2MCs7XkkHqtuu3Bqbe89ND",
  "key34": "4Emny5ocWseHdQE2VDFVMBNySQ4XxH9tmqbSe5NQ99YCRjUd5nsbbdQvKWPfC3QHRLr4QvAeASz9nRiX1JiLV4jK",
  "key35": "XoFwD6wR14GETKYWxZEDu3cgkZeWyDN38Yu3EtgvqEAV9TDLYqTpmKtMS1Jmokswga3eCwP3Y6uDXnfJKCVM6dW",
  "key36": "5RL3qL4yfcEqmWJhZVWhDAbsKHdhLHQ2pamZpgiLsGn4qSDUAYh1v3zCn27hdaXQ4M6Q2kckqtj7ms3bpNmwMKU6"
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
