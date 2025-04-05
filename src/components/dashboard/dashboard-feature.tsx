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
    "3VoCdfDuGZiLmLvSLJFsK47PNuFjMcqDL4es9hpkSD3GjQPvMRkrdoo1ZA7H5qPsKNdmPujMX8HMfY1bAQKEXcJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FXQ1JgrsXGdTKqNefX7TFC1TmaJN3gPnMJmVpvwdKUfRG3EZRC7yJc3UKfnfNZcxvW3WBTxZnz7qEAyi48jo1WP",
  "key1": "67V2yZFr95WUzSQpmSoEdJqofCi2hT7sqfWh1k1ucZvkRcL7W6ANXTYGZ9Mc7q3DJxCSnBh16fkdBfFCdsE2E7xF",
  "key2": "22n1C2EW8ziriK8ag1Q1ipgrGF1nU2Dw77wSWYjxU84cVP2UotPG5VpvJSXqFG7oB7o6b7fohyek1nJxHysbUnib",
  "key3": "a85eAs2xJrbUdwEq9AQYrbbMn5zQJT5p7EaLKgoaBWWonWgUaZ1F9ACrKqXVYpgFss68o4aMpLWiHnH2Y5kmDR1",
  "key4": "2qCDzWj34peNWR6Psqgd6zETy2iD3j9RxRP5aBNG346rTVB7dNpgTtDLHE3x69FhZDKPErcM5GxEbnwrL7hq5SHz",
  "key5": "3m2r7L7jHAx9TJxSoqBWTWBmkbGRCevQaqXTEcMV5GSp6321g6L2Y6KgdtuGPeDw4CkvhtxUMdSYjoA2dvBbihym",
  "key6": "5vX9EPbU7C7uSNueFFFyCD54ck48UUefNgs2wM4dQtiTyXU1M9rMEoHNpJSCfnruTb1KhcamB72E7gm9qhYKGz35",
  "key7": "3hrfia9ystVWSoumqyQBmaEbJ7dTbx35of3aay1D8CdUXNPimfLSMefgxDKCAAvGmMqLyfihoJdRTdjtQcrLn7mS",
  "key8": "htTHXea5dQvZiDGiyzHxN48NSwwowuQwSujHTeCy7zUGpaz5udHyq9AoyvmLTTJXZo3tu8HRibnUEAibkco3XbT",
  "key9": "65XFmLpdNrtqGiJjRskK9nUAtt61RCdMfAUVUYo4sdmaDat8R636QWgMChf48ZmoUHqd1WGvXgtXc93SkEb98fJL",
  "key10": "CdpRz8B1fb45ns4uJbh3cHP6HYARMmDTELJfCZcXAPGJnBvQTck6FKmmYztsrMm1FQDtRAxCindsXnPyTTBSV4Q",
  "key11": "5ZE6z56SF68yajtWYy6f97ysoHbE5X64U8jwNgs41NjBzcQBeLqaBVqLdR23twLevKVWebybmnBypFuSSufmeJde",
  "key12": "3wWKRjFN4UGp6DEk8V9gUVFLGw7oHj4fz6syLUieJReotUvG4N3k55kYEXYXGvntvDQRiehhuuToCJ9swY4E7fi",
  "key13": "6aCaAeGNXNRKgjBC2Sk2k4PeoxSjhH1EgFgrz4gUyVdpRR6J6jw4F3MwQRoMddRKM3V7qqADrMLvtHXufPqH9JJ",
  "key14": "3tBQMCa7Xjz2aSQ6UFsJPYG9Aqj2ESocLAea6WJQEgsqFVXQGiqLup8HS9qzBgXHGhUT6rAauv2c5K2bwLEMSVq3",
  "key15": "3y4jrRyX1LSvfGecGATAJFsCdnb2T2o7G1uSvTfw9w14N1fNJcmfr4o8V3F9nAo5wfktfPft5xoQyFD4RwffwKZv",
  "key16": "HcQ4tNbVBJjSagXkHRREEJFtQ5sLj8nFvcQmphwCtw6ZvFmnF1nGtGwe68CncxBBUQSMKUsMupnpbx6a2gZPZHy",
  "key17": "4fsDNKFhS3xv1wPhiBtPqyEy8AYXm8ciVesfuta6oU7XapuxfnvBmvEwFBAn9X4AfHhB9QqMvUrf54VUBSdE9UFT",
  "key18": "AFgZt1LLPXbCsz6dABcFH4z2XBqLB1PDG62qCwkZpfUovWy7k64CczoeWX1Ef3q1GDeK1TWwrw6rto9TjGQ8WSD",
  "key19": "5Rvg7PPR6DLWLAfmx8XWNPRDXg276vZAyXrg9DcnBaugrBpbmxvRACSHBfT93P8P2XAYCcnzkvaoq3mPNPEhffte",
  "key20": "2uLzxuqnhVnTL9NfB4w87UsUS2CMi7dx3JrDGuV5NdBXEDX7vV6uN16g2rmHrfDUP1w6pUwmrcSEvGBQ3C66JmNx",
  "key21": "3EEBP4AX6NLeCUcD3GUKww4oPSX1s1CLh7QE8wwLH1LTGGqz8gDXQUBqE1Dt3EXkxFe2ri5YZzQxeMRP7A4AHiXz",
  "key22": "648jgGPimjumZCvoXvvK8KZptBqsXHs1hFYqRFNzAnKuw7wEPoNoaUzvg2H8S93Am1FuZVvrRZa56GSBLyM2m6vb",
  "key23": "3VxbBD3NmAKEvsNHDGKpZ1WC89RwsNDJ1BPm1Enbyg5YuBPeU935mRGhhao4UotRAjLhULFqiQis9KJAUR89ymFc",
  "key24": "3nY3DtQKJwfLHAFpJtjapHCPstwRNmBJ9WH5yUH5S8V2qCVXLxvhg3CxzrKkZ7bK75hs2JofczirwS9u4feaXCiL",
  "key25": "4JZhDJxqaT2L8kWBuE6915D1zoBtDWbsrhpCiEz4uYJJJD2TeERrJaNa7uEuHpFuWYYFZ327mAq6YLxoTpLatMYz",
  "key26": "2DF2WAaJDQnDSpcLbtDfHGNayzbKweyWHpQ5thY1H6exxjPnNQQbhbuU396EiaaaWT1eKHnyXgyBrPYjawVrcrgs",
  "key27": "42XHKEyENRSedkHStjRm51hx5QYaFQWBEynRmEi1jrGDiFP7GJB2TyPMVpQmnyFqReXmRU3LheffBXG9YPzw1xFK",
  "key28": "5RpAkjqnNmWhF18yyhUkG914k4PSCcoD3jEgc3awN9K91Hxjew7ktNKRbYAQNY8CVAAWqZ1CTwNSzyzCtUaYNtDH",
  "key29": "28vtajZqtXtuqv8HF3Fg3YcEwcTnx6CxjiRTwWrEB144K6hvzRwsHPoDch9usSEY3ZK4dzynjvTyhPsqr6crjXt4",
  "key30": "4HNvSc73GrimEjqk8aMBMJwMUZ6ka2JhGzVcddGVtSWTSnqtWDXAEZjii75VMWnEsr5km3FRZmdQBrYS5LvHWcTE",
  "key31": "27vmmKeiUWneavdA4TW1gXsRY7GuCoKdQseefzPYAdXj8xyzy2Gin7Zps81B7E7LaCeryfEGKCiNxYqHZN9vZutM",
  "key32": "pSzVhzLyb493tMs1ZHDeMzzfVqCQMM6dzSbyRzZrPnQNd8XTGyC2mghSLMjc8jqHUDvutJP7wockimF9n2fVa2h",
  "key33": "4my8xMYTYsRWoCu7qRbnXsMMtfcGmZbkiEohufyQEdfEFJ79ZP9TfS14Ja63hmZuQ2p9GPF1pGQzRK3BTMPd6QX5",
  "key34": "5riRSTKTu39BQKr2e7nSS4j4PmCUpdHs25iMGy6qA1nsm2esKtTUZeYn9ZwCpYKWiBcnavEmC2QnnySsC8W6rveG",
  "key35": "CcuwnusCTqFx8YS5JpkDFd3FFLPsYjfetzcccCtMbqzyrNDGBTcEbZze59v8MGCPLi2TF4221hPDK3hRQosvEoq",
  "key36": "4oXyPfZdr1b2KYPCLMSwQGebxU7uSKM4HPg2dwywXCbRsXjoEmmYNenGyHa27YCNPRkKXMznh4nUoXouGuVrZWgt",
  "key37": "4YtDBJ4v1aRarrTNv6ygtcYB5FMYhSEsSneRHfQchm7pqafwhHb1V1zezEA2hR4gFHR3uAPkHXW7VrHgn6pfyggd",
  "key38": "53CQQvK4ZTPkXycnfY2VBgNob7iLo4fJWmrdiTghy2NZSbJgcdH9Xt2Frkd5oCcCxVLCbUAFuupDptY6SmB2NKCC",
  "key39": "3RxB3HRnaPy2bmyEBZ35FRXqo5asG24n8cHH6QnQD2pM7pc6xjJU6p7mNkeg7hFJfAy4a1P54KFcXTWpBuYBdVVg",
  "key40": "3sf4wGHZNGitWkTY5ag6948NLz6qxu3sBNcVtLGcPL5c6RRzYX7wuA3NwgEXurEEt6CC3dUjY899qUvgHxavc3iD",
  "key41": "Ea15KMEEL7wL8MqUPwMzBPFKokzFaBwY3AmfweMYfnmAZGhvbJNJ3J9CpwVN4L9zZf48SZyLr8WGsdgLpiV9zZT"
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
