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
    "ro5J92DgGwmHsnxXXATE3tsY1yV5pR5DkreTookR6ryaNqqHgwpD7pzye3AbrRwUqWovNHWebiR5g55JwHzDwMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29m4pTkcVKtEtM5xbFi54YLwZhAumKaSzB3ZPzLG1MadqWMbUwHjx8pjiXjf9LPFJcQ3qEPgKEzZHcTKr95bvQGx",
  "key1": "mNYSaTv96esPhdL7MD25FazgqzftXZKRynprq439KyWxHVcqc9LKNWUEhRwbtH3LBV5sQAb1E9Bi5ctY8utwbuj",
  "key2": "45rKAudcrTxCs1PJkUga9o9syrDn9z28V7uXLSWAQ3V4KJD7C6gPt7vRd1woCRqxKPkTzf1cAWkarkEVbaK4Aaz4",
  "key3": "nCRFpXRBjFZcq7ehmNSWoKLH7MhA2iRcLTEZZ7d9z5gAaXxsDcTtsU2VqZMJMiCgCF5kKojusnE3mFx4Mop1JSh",
  "key4": "3uRHcv8cuuXDyVqtx3kob5H2duW6Z1CogxhxVjZCb8LzsDZByz1g9Bk3U2FZG6YvG29mWcxgVSyvaq3fACiQSH8N",
  "key5": "2BVa4axkGcJ9xtUKJPKymU5fXEPznmWEy5hdpnBmzydUnB393DSsezU7ejUxKwsKYKNwKWdpDQ4b7nmZEVxn4JB",
  "key6": "DX81nhDfsJPVzENGsVQvPj3G34SP6ZchyAx8ddAxtxQ2vaCkwdHCXj8SPinHWcqF8m6Cp5oyHpze89ydtvotCK5",
  "key7": "52cvaYUZ2RHEPz6feniKXp9eV72fRZU59dWzb555CKUYmHAaGHBjUVVqFdTft7Tjs8XMSLoGzzmnMGB6xGCGdJDs",
  "key8": "EeYaKTJbUtPaic81VHGCyY3eaf6o9vK4GsEbPxd45ZDpTaFnUowarJ5XbjoUw4vtuksh8KGUqGz4kQ2sypbXucR",
  "key9": "3D2n6au9s4XbgHPRF2jpAbmG1GFrj2SRr7k5zYx2AHnTYuqycVSsxrcpA4rduR7281PxZznqWq2yCHdNh2hfr2Hi",
  "key10": "2zq5Wdg2AwuBtSx6ohG4QYXAo6xBdDTAx8ssuiVonkX9Zhuf9yAT1NRiwpfkkMTqhyKgQn4y2LFHZtrH69u1tM2U",
  "key11": "VjHSnmaGXvjndhJ3QSjKpxfK5kJVPbtJYfBtWogPS57WyUDTAUMe5eoTBzNjrkDxP1hAbBEtBtJhaR2zHL4i4uu",
  "key12": "2PTrn7XzCMZ9qTFWyd62V27aLVwdNLwMKti5N91EQ8r9X62BRMuoQpgp98vRbot6Ss7zbNVSANJNjtFt4mQHFBat",
  "key13": "4NumsAcoZXpSd4vGHZLxKJ85PhcDzmxP2VFzadmCAncvCEDeRzEHfFLBMf1485ryDmrAeW6h8FV4Y7LyToMXZwDK",
  "key14": "3mDhGmHjNTf12c9oZcQR37YVzXdcVhcRe2JE3WkJLV2HyNc1PJzF3N5zfPt9zq1UMfe3nEjc2pB3igRwe3ZsDEPU",
  "key15": "2HZdaad4fCiQXUorK5936X9hrAtrASZX7rsokh1wLyc2FuB5Ywb45yN3oAoQbL1QqSEbCmBWYbMgeki8VZtsvWJQ",
  "key16": "34TEqSfmf63rQi2X2nGoz5EhUExgYJdt4RR92i2r8JkFTdP1xU78BCgnJUyuiKgesuuuP5gKMENZwMtGeEy14cUZ",
  "key17": "64GNue3njhQ3sAT6TRUt1UwdWp4fjm5hcvgQhyDX9EzUq5WNQChEDNDTni4hK5NvTbMmTewDoxRPdCtjkrSV5ywa",
  "key18": "axjCXbBwVJXg8eZWwbxxMHwgD6rBD7GH69pJpAatUJhVvNDvwtkHJbXU5nyuQMXNuRHaLe6hg4g62ALe7NvwU6L",
  "key19": "2ygNW1Y51WxR814RFKof3wkvrPAi2kRpL3e9DDwxW7Xfur4SPetSK8Q5D54GmFPPkjH3gFRgEgG5QCAYdaAM3K3S",
  "key20": "29o2FUGN2ESn8Ko67WUG5MTs1rajmM6HCxnx18vzxYQwdAEcYM9Fs5UFyKi4UQrygH25QCE6eSMRZgsYGb2XuxrT",
  "key21": "3sPx34hskPhS6ygPXWqqS6r5cfjGHMxxQJxSnYdF3TJwfSNQ78sbpAeHygM7B3NdD1LrAxvJ7KdbjJk6LfTpePHK",
  "key22": "3Dxa9QzrsvtGJNzPthxy8W23jB4XSCsf9AtU1g9YALsXTpYuDjsdj7e8Cn9umN4SRz7eUfqeGGLieWfNK26YLP1z",
  "key23": "2XGaZyeyTroEHBdsu1mK779Zrb4xisrFUKMgzfE8sFwx5VsKSe9Hv4kbzFqrB7b138Y7DLVw7J5gdzVjCiBC3c37",
  "key24": "37n2HUnxCGTPn7mo9A9FF4fvUmCpMCthcHDd5pFqbidRmUk8CzKF1FAk8hNnEEBbKy52hXk2H4G8SjraFzC7iA5A",
  "key25": "4nzv9EB2zy8R5YwyyrTKqfEVMMg6z2T8kSFV1scEwSdiZFzma9FVnkFHcuFHowz9UqEY8RYoU5fU74Fcytf7uG1m",
  "key26": "3RayLjbh2qE3fDAgtBqLgpPZ3p6WpJnokHZxAWj9dP6tbjehtQjzXt2GGgrySUhwaRZnS4U5paXiyV37uYyZbyyu",
  "key27": "22guAHiU4SqPsJpS1Sgw46rVCdUckTCS2CTCjKzqA2sz9VeFDKQ3GSzFVbW83HQicY9vEGJzvgK2n6LTSDP59AGk",
  "key28": "58gSBdGX4fmjv9hc2rt9Gc96P4tkRb7Mq77XB4tPiG6swPbum1b9NoxpRm29neeqnrCBQhuNWWbAJWaJJqNRYtQK",
  "key29": "2kjognA2kLUvZfPsbbv583aeS3VyBiozjmXw2LjZw6aTUXUWbiKB6xBC6jZgwbcD82TfJN3wwEjejG79dsJnrg9p",
  "key30": "5DmuTdP6AHGefmFPYdKiz782ujjNbhd9S1BivZ7fVqZ4Y2JUgK3oa2fx6xqQvYitXPMfVSz63JYhNKrpPCXY4JbQ",
  "key31": "5QZa2TxnLRLQGyjvPZRrkpTDdAae7QjHFzLTD56qDYS9hXTCvH5WCmMfX5bXLtS55o2o4gseDM3uPZEw2KszE6Ti",
  "key32": "3rGdSREWhv4DB9zJJhtYHQ7LZ4CoRiQ7Ag1pTzygJqJeeJL5iJoSN13ESPwqg4WLwim9F64zjJWyPx2M39jwn4tg",
  "key33": "4wdPweJhPSnwBrP7J3hPaWhhcfqLvNnXXRs6W5CJ7UumHtDDmJLyDUeWrfVsQvKyeZLYdV33RNXtxzjRwaLC7RK"
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
