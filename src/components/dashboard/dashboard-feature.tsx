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
    "5YDfZ8xuTdk83wYU2PFuPVrYVDY5LbfK5kEvnUu8X1jiUD6roezkD3Dw1hx3ee5WiNBxpvL34exxMoBJeUxtDaZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jaPpioDbqadS8f7yyMmkcK3EM6oagHjtNhxCeFtfUPmvYk7ZdgMw7HhZ8VWtmXVq8kSFsicNWLwJ6mMhPvxjqN",
  "key1": "4xpR18oo9yf1KtQVBMzosU951JmryMQB58PkLHeDiYCoELWqTv2KbnXbeNA2Y9SYKv1i5Znug1n2UD7AkocugDzx",
  "key2": "4HfFvHM48gcaQCGsG4fBNa6BtV8xh49DK4UnY5Nm5CXCf1hCCjFi2YMJAqQsPpo1gCas8Vrjv1pdCuAfEX6jckhY",
  "key3": "3aZUMJWZdnsBoV767GmVtQc5E6LkcJafSsz5iy3LQHk4KpTvEUPe7LWowYewf1KRpMLq7EsNmJMp29S9ptwzb3hD",
  "key4": "54KG74hK1knrfGSq7EjdC9zLKzj4ZR92iaZDi3JfkJb5G5YRPunHxWJLis4AKycfsqHLutURjzQKp2okLfGDhuE9",
  "key5": "43Dy9VUT41rXChjw6sqrYYTLGP8um4JQjtQpxrQDv4A3g8bYWSPrrnno5Zmn4Tzs1jkg9MNuXtZsvPKSeaLtKpK3",
  "key6": "uhCD7iQkki9QPJQDKBRmzQqbygb69Ae368PLfBb1g3E1WrSQvLZNrzt8Ha9XgHpFvf63sToidzkrJKZ2EzpnmTR",
  "key7": "p9TzQRJD3MPpfvdP6g7kiAHc3pv16Xs4NhsQsXfQwB1S7rVtz9GaXyAPj17vgutiEgBa38jEtYFW7vubWxJvitW",
  "key8": "4VqhA75RR4vmNro7AeRdNR5d1b2XdUp68HD1R5pCNUeFtnzVXTGmK3vchmQqTKGBAM3xfi3kpWMVjHtSxp9d5Nrk",
  "key9": "V5imjqfRnTgoMXFZRh5aqMgS2r7UEpHd3V2yypDHWdoxyTEMDpS54MQXhg4JMLvAqDSE6wV3WKuZDSMX59zKJEX",
  "key10": "4ZY5fUHTZm85FWsCWgh6wn3TJR1HYxz1Nkuumk3A6HrCP7ox9m9598uzLgMst8iRYP3sHCvUn1k213L6crEXrYdr",
  "key11": "5AZrG2BveLSxcbSVVavsWatcSdNx2WM7jyMVLtiUdFsweC7jd32ScULEqbJV8EkktDGTSCFPf8tR8tPuHDujGhAV",
  "key12": "etVhBhr7QenYBKY87G4FD4a9eWjoh6suyQptvJ6NqiUYCq3ArB8kqoupRA1GWbEPwSnkf4HshGVqHJsnCyesF4X",
  "key13": "57UWRxD5oU1mZ27hgJfzVbS9hkYSEXdDq2WhjvV7qoMHD5okVkFchCs1HT9zWrenihYxUHC862yGxdfjRfeMc5gM",
  "key14": "5nuuCagydNHLpZwK5mCk7FvddMx4mJxtDXQ6maNz4fsSeDRScAFmCHnkQLFBRT2irB6Wxkisf4qj9BjwiCgXYBvr",
  "key15": "391gQXNheLBWqSihKdSbNNEwUwjRfzepZDnNAKzLV9jLkg5p3SjY3TG8aov3GnxRKbEUXLarqXJYU2Bw55M1Yujq",
  "key16": "2ZMykD7WUn2ygMT6NfBLUUnDAzpjhY2k9JB6PZxTJJGCBpnnYB17Ethd1484Asu5W36TvC4jG2yZyfJS9rWC3fMH",
  "key17": "5po8Lm8bcKsGzhcbdzr2dfmgFe2rHKQ8vjLX6RUxAiGDE7eKXdeydcaAqAc5WkxWSDCzryXqD4HSCAH64WkhbnNe",
  "key18": "5SqAGSjYqHsGhzQm9uoRcroL4CEPBeCVgLALfyWtjEN87W6CRMwGadWqCAp6NcqcUkeaVcfaXsgCDfsdZHjTf7xZ",
  "key19": "5VbmpWSH369ZVVQQU2QNJYXuwE5iiBJL7g6948fuZLHc5zuJvhZKZC9mpABE67RFpQuKhVNTSF8gr1DzrZYmrjXB",
  "key20": "5EnwfMKYBDB5K7jWReD8WePACJwS3dLW2BS7cSbLPBTfnAgjbR3TbmQKsxDsYHyyM9RBy9raJJGady2A3tehbXXh",
  "key21": "2e52z5WvJdC6NaoKoy7uvtrEoybahCFN8wN58HUE8aEm39YLBdKSWz9DfyxkkvMmDpVeP4t4ni9J4xEK63z2MQLH",
  "key22": "u4E3JbBXMyQPda2uNo7uYE7JHmkWkhqL7yFhmkyXKtc1Nk2EMhseSDNGFuPdgAg2DtiTPLGnpB437gPqJ6sEYrA",
  "key23": "Uj9krsz2Qt86AG8oGt9wXhJ8z8xGrVpXJuMWNkbUGp6A83cA7xCyuXAzoshqPBu7yhGRXN8zSVHyHFbuM3rrz5T",
  "key24": "28g6qz17R1XPvGWupj6K6LdAcNYcKivdWoYzFmCAuD22nh5aTrUxwceFDZJt3fj6XtQQmuYXv75EMgD2KbgSySEk",
  "key25": "4QFxnaPLj4s3CTk72G3BkbwWdK1Mhi4utdeo5TESLhdhBWVtRYCDzsDPPDyy424hApjHyLbwHthj4vGwFK95T277"
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
