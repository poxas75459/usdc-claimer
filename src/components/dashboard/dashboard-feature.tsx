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
    "319unPZksmS9Dz4DxZd6iQrgKGZHPAPz6AC28WNx69Q3MjAhghvNFfghGFtR7SBL36tkhY6m2BxugW8CGE7JaFmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M8L1pV5ZZCPh3D7NnWqCMjCF1wmyjtahmE6HjWq2kqkxfGt9B7GJYWjYjUhKmV6t3TDU3QGQ4fQpxnp6pATyx9W",
  "key1": "5c5uXg7XmhiE2oH1ySBHK2cKWGEnxkyTZhAN1UiENFSEP5F3LAV1aVtwghzh4BTFbNDm56KwFVAE2WQ9vNyUh5jv",
  "key2": "47U7gRSnMbHnkyrW12NznAqhpEoLYZ3qUdT7e4oeyU8guRHvDXVhBWW7aZqXCijqNNf2zS4VwWpXBfsgVKPECE1x",
  "key3": "55awLQSaLaJycCqgz9ZjHCn4uiKDip2wR7xrFtTaP6asZgBEa718cnMM3JLicm26YqmScAx96WLSm1QAXbcrpN9Y",
  "key4": "3UQ1karJc5WT7uoA2wNbdvNGi9txFcrGi4hezpNQmXC7r5VFMJZMRF5ausVjPaCGZbA6b7SBmT16qDcJ8q5kToda",
  "key5": "3YBVw6J1i88od9AS3Z3tdgHpDH871Wj2ozBo8BNQMMVBTUcYEZxVxfQYUTFCrRYXvciyq3PhWz1LxGjmFvYrFygF",
  "key6": "5s1DHf3rY69NUuj2W7Y9nLjjg3fjjRYH7QPPjTeCV9d4uD3kLBnQPPmiWtsvp7RH6RALFFPDwtSJysHRm5jUguQt",
  "key7": "2JtyfqYkskXo1ptW1QoWKctiwPVb5okf3XttuP2c6iDyMtoqcoq6gp8VXimNJbivHcUEYpzz8DNDosY4h1MR3TVJ",
  "key8": "4JEmuaAJ5KcWaQThtDHDGem2hfWL2YSJVWsn5qXnV7ncFSD1PFtR2gqCwQ6pnsoByPpdX9tk5WWp7Lo1AZ4f7eoi",
  "key9": "5bFsjoDGoQinSgQbnMcfjzobcsqRJHYn1oSvBGrTKkiJFzBcHEd8vpgjkKTCa7TA6Buja44T2EZxjPXqmVisXJwZ",
  "key10": "4kLRrJ6XCH8csQgaEDdCckvReQE64rxgaoe2hSg3S1g4PQ9qQYdGsheD5oPkXNLHZxVSa5GQ1hDSyc7pLbLpc5SG",
  "key11": "4bdyZFUMb4oagFojYw3ypMr81Vw6GyT8CPd9f65VYgsb4Sxw9czk1hNyoQW2pJMPwJPDbdf2rw5zvLzBhxzqvn5t",
  "key12": "37EDcghDqENLsZ355V4hbhW1Y97hXkATViTbT2hNYGSa1dPkKKpVX7RHHAXLN6vK7o4EaoFr4vBqMj8dWLfc9fvb",
  "key13": "PnVVZSTphnzKGcXBaTSWKavzNMtpeyKChvnK8UeSizEKU9XUauAqHeBxyL2qx5H99FmzU7Ah5vitdNQvcAFb8cj",
  "key14": "2XSXLmwXCRoU7JpDXjk9VbmYDbr4VE4ixmjjSXCyxPxxLuxK6kFK1J9JmCnzbBJCABbqTXLmbSVvJG3LnUbNr7YP",
  "key15": "5Z6NrUUekz9KgNpqC4jGxWRQtifxpDj2958A6GEZ1ey2NwtT9oigbqBZti54FbJnbZLeHnyCfZmLSLVPMSVA2fRk",
  "key16": "wTR8sGsyGdpMhTftLfTknExiM27JroSjP9VTNi2ujqfKZGnfq1C57RijTTSNo8BNQYnthGGnH4CMdXmasvHDB5s",
  "key17": "25LcxdvMo8QoXCiA1Dz6hHJfd3tsNwvSiamoFX3ZphEMUdvz2FctjRvVvHLFN6KdX8jwScvqPB345wr5iUgBNapW",
  "key18": "3UZhjDtH4eP3Pvar8CsExZDbjk1pNRDXXtgZ4FL1CSWy1avMCuuaM1njMvUHJ2tY7f7PkprNqWQzQq8fWJb7mysz",
  "key19": "LFmQcf6CrqkoDs1hKKXcoPCGkxoh75tcGdnUiKBYC7EWrGfxR29esToLgjJg6LCFKPDvfKyYRr8PXB8RGtNxM3n",
  "key20": "5gMqUHyLfsR2zBFLkYBZdsrFKjdZKh1ayJ6C8h3EmEm9tSouQ4YNGx5HZ7M8oyHnNBUYs2r26wppTVvy6ePgwyd1",
  "key21": "4CTkacBL94d2saSgzdgtbGuvL1GQrfBHw6HDWNLZfjTbe964wHQCzYUtHz6ZCLFobEMxt1HCYcmojNWg3uXkReKV",
  "key22": "5g2MCyWCtX15mYsNAAEMnpUtYD9UnLwqnG1nm5QoThHJFtoEjmzwu5k93YGFqBDVmQqvMHkpmJ7tr7GQ8nd6bUYb",
  "key23": "2TdVEzSLy3jm8Ex9Ezo8TSmQtNiVv4s1hrbB6v8tsx9Uq7nxHdx4qB9g4923GsyTBibMZY886ZbMJUuBQNeSA7jv",
  "key24": "szChwwxpVQS4csCKxiF24hmD2AUAeg2XGWDQMBMqKCiTvbA3yuNfpFaeSRT4XuyAtUjV5CTNZn7pAGYiiRwcDgd",
  "key25": "4KsWAwjAuSFnyJ5s6gz2QTX4Z2HFagKozg9J5wkBAJ729YbP9sh7wFgVRJ3jr4NSAsdNdTc8qCd2VoSqzcnkvufh",
  "key26": "4FHXck1uftzvUjTDGsjvieydQoYpjhJ4965VhTfxGGnsoqWeZjyNYDhdGRon1mZc5pbUKfwyFRweaBZ5mcTHyZR",
  "key27": "5RFjZxusBhVDoSewy4Nm64T8bV94QiW9xF9F2DCvh1yixnF211ASmz22KSofLXDm2ZXxsuK6aQFzSR5M7cedqFRK",
  "key28": "5L2Ri2haLvBzCrkCxSkFVoXMVB3kEPDSS1SFmpvaJRRGN1QUPiNeF8z1WoCHtv3NNekSJpQ44Wqp43hRbPDgKmgT",
  "key29": "2cev6tQsr7SrdZFz9MKYgZHfmmAZBxT1gmAazh16Vh8GFusnLfLeZAq1opKWa5JYFyPx37RrxseivnonCMh99Xai",
  "key30": "TTcTjxX8s6MXzoofAN4vbvc9KSYc9hmRQ65DDDBCaVMLMJWvZGwsr7dUiaat5M9nzErLzTmN4gqMYJoRetVVTsq",
  "key31": "pjoJmXRMuePbn1kdGhQNGa8dm3rsCn2QtUXvmFzGKaJ31pyJSBk7rZgWPeNoWLd4mDnL2qVHWzRAGVjvSxHBXUn",
  "key32": "5xwi8h1rYsmEtpRxLDn1FmYeeY5i4gBMXzQ3jAvqgyKD97hA1qaFctaYaE3gLC1ieZXokafMnZycAcnBzMgpuBSs",
  "key33": "5hbQCK8EzfwKtanJCJujjjR8uCjFunraYsLbybBBg9MWjpKaAr5NmDUnkQFLMuUjHfgx3JDKCpe21c8KqDPBrMXY",
  "key34": "N7k2JujhbRZDCjCgbA3XggNwsuteUs1gqoaHDc9Fk6SsWUKv1pmWNp1ehHTTGUCS5JprurfxFiecj3cEuosyBGr",
  "key35": "4Zcuf37osVijajZG9Npo8Qc9bMCgRQ95WAwRsukNgM7cpVTPSUSGJajfRnXREoc7obGiaeFMmJBaeC9VCnwL8P3o",
  "key36": "5j4TrsshfizHH3TwKZdLjgDvdPFUiVTfs2z68meRMj8eeDXxETiKaTQ9UeRFsCGZv49HnBLEwRmd8Y3KgLtCXgeW",
  "key37": "4DxrbnyqzJ2SQink2eT6iLRuzXb5RTtfFdu5nh3J1n7JATQmsi3ax9oQJyZ65dsG6NkwS9WxQnhzdgPgZZKnCVFD"
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
