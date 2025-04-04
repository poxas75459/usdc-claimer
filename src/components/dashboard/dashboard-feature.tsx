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
    "47gqYohs7GQ3ELtdmrJWhPEmBW1VDLJ4xH4dG1sBLUkcByCZ77tNQNrAJQRQewiGjjj8pbC3Jj7wesPHpcG1oenD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGmw9spKNwnUrUXw1WP855XL4cnwatemXtxJC77hFruyN1xU2LwBf71ENo66g8mzK2gZgBzrYi7WBmRH83aJWYh",
  "key1": "2MoWX1Z4XYnjJfBD3WXfjW3ofViKF76LZkaNitrx7gtdChi1JHRFgfcKa4qWqPG4tVZvaA2EpyBF65GkatuxTkzQ",
  "key2": "3ZB8yzMsu2S8surEwe6KzFVx45DcxBruswtUvemwi7URuv6EGbT9a49d5v1syWnBMw6nV7C1H6pJJNkEBRCBuqL4",
  "key3": "5jZaCdXi7FEtkbcSxcRqBchxqZRfGmEhdkzSKkPVRhCwhtSQvYJDLo65N4VLLsBQi3kX7GJAHgB7wiV8XJVrPYXA",
  "key4": "5kc96dWUeiK1dRaU6fgpEGQhZyFMR8T1h87rygyGsH4XwHk4W8RdcSQ9Vs5rZQ736CYphtoEk9g1YnDXorwdZA1T",
  "key5": "5UsEfZEah1QiWyxiWiugQEfheguK4rEZYmLFX6kAFiJSNn1QhhRZARFqxhDJXH4SCL55DXgJZhViKC36VeptHM55",
  "key6": "3eLawNJsdoLCiZVC9wxZssesRuyFiYmcfi2E1fA41siCT8kuM3V1qfBzqiArXKpeaw78Hoc5pRF77N2SdiKEDC2X",
  "key7": "m3EtDBkgxqhjaRMyGGyyRpawKJHUYkSG8UEgv8d4WfPiPxai6iguakY9oP3w3kGc2BXbXgUbMf3DYC63GwuHqwN",
  "key8": "4cKkz7owNeeRVryt1HhHx5Pk83tqUnNVRCKcynDiCihzFV4dxJTX41xzeKFgPXWL1f6JpUADzZY9MGXyB32Q3odj",
  "key9": "61g68Sm1rr8Z3YDU6bMycMSzHQJpaDLFNBhqvHzRi7vvrvudgS9RkovTEc1ZbAyEUyuLnJsD9DP17Dgwa5VrVqYa",
  "key10": "3mVgSaVGV4JnPtxzivCFaSwtpJAQ62YhRe3QFQ9mE3SLidE4ivGXXpb9rcnFSYbw96uZZ8hAFe6Rrns64bdzGvYw",
  "key11": "5A1bWYjYme8JJm2H6CWtyCgaxMapeo7tYhq5oV2HJKEXaHD5DgYssNfRkK9fqoaSigTKaPv42Gidjb43rCcr2sX7",
  "key12": "2ReibFcB4DG2QVmL6MpfPqaEfcUkXDtg6gt4TXPewTtpUpYRXNZUizhR1RrPwWWgq4jBb6Pv8LHXvpM2XQg1vzQ4",
  "key13": "3H1v8dhxDfxwXDGTZrPKmEdupykC4DNDfqgSsSgJXRsYbXpGGizJPVuHRWAd8XTtaEfEubDj5h4j1DLmETqo1DMS",
  "key14": "g1fybxp42iXGQYhcCR7XJqY53suB3ToF1LRGQDndziydMYNg1gaU32z8vk5BtuP7o5gqk28PRi79AwUiD48yt92",
  "key15": "5Lrqf9K5h6N4VPjVqS6mKiQ2sBmJkNKku3RLF3BtrCyVWChx6TW5Mib5QJBxJdHadba1RSnvEx7kRS1i49eGosHe",
  "key16": "2GXJ32rb6TUJgnrUKWGY6HtxphBX6AsYR9ufgm2kiHtY2uqTzkscAEP8KrohiPtUirCWcmVcapnut8jwZT9fq8Bp",
  "key17": "3GrfqDh6DpmKWru1SWWNB7QzfKBQeEG6ZcMsPwJgcZzPE8aV1pb3TVu4aZv9nLRqigMFZdMtPwGdb9YBt3V1GHcQ",
  "key18": "2nQvYPGxiRvZbnwWi5kiEqfXpeAZ26eEtEoQdYbzibRUZB1q6ZvRCBuyahg7YYFqYKmFigda4RWoXVbXgCZheAPn",
  "key19": "2zhRnnKf2P8c4D9XorZiV4UBvN2kwTt7Z4wF2PegPA4rqjhmM1e5H8MWomMsXAFfnz9utzLh4MxJaD9cyRRN4Gwe",
  "key20": "mXcLa8rFjDPf7t5vNEgMe1AMvC18ZRBXXpAJ8KJYcthT9We41FSa8gexQrY89ogLnqriFy32r3EmbQwGD1aoGmF",
  "key21": "4FQ8A96AbqTtfFFu1FPVcA7KkJxfHpUV3GrR29kRVjnVGW2XEpSoA5BT6wQhptE68LPzBZyN5vtfb5Z1xjwC9qmt",
  "key22": "3yEY9GcookERqhvBS3Nnj3nfPDYBzDURx8uEFByuqbm49ipWz7JaR3UbQk5kTPaQpjrZvRDTJWDngmKvoorY1QzL",
  "key23": "29cwJVquP1kANZn3vPdAZwsoyDdiTdG6ueaZban2G8XU6xeH766XiQP9AgdAAPFMa33NXNsbF31gMDAsNswxtj9z",
  "key24": "59pn95ubcgbDCX56UFi2pZLTxdDGdv8bQxoCNeuBZo56WbamqAjSCC5LaiFYmfA121CKwB6X7PEwKcBYEpnfaPqp",
  "key25": "2d8JbyBoXpd5wscTaF7XkKovHQhBHmsGCNhp7PhB6Hb9tbkdPJiH2mYs2MUwFjzT4AC7HhC1hYj4EPCMweEVsw2D",
  "key26": "4WmcVR9z52RCybb7uYoRqKEagifdCMVzSG3KUmJu8gAsaLSbDfPLg6MHuApCQs7TDhC1Kf8Q9cZECi3VusuhvPUu",
  "key27": "4cJHYo8tL73uxJUsMCJRybbYXN7Bw1eNieJczpCR8HhuSqaTNSzVNdaZyogMe7HWnoHPPhrY2kX9hQmae8md8hbR",
  "key28": "StTswXvXwivZWphHoCVJLmf2xZMBcHW6kmcfjSotqw1TA5ezQcP9ov8i6jHSA3XrVvJLS4isMf7US2MkmGid5dg",
  "key29": "9mqdE6UL5X4WSmo8PKx1Kik5P2PmGVBndVuRhAoRQgyaRVvGvTrYCvJBtbWHBVu1U6jXUobjKD3b7QxwzGqmDkN",
  "key30": "2auMFoKRncWFttCdaWEcP4H1Av1KmWaVwbd6umSdHtUcBY3SzaVgANm8PMofbJ8pHZrYhfLa2wE2H5vc8DSBWFy9",
  "key31": "3boxstCnb2cBHjscnqfrUa2nibJRMSFKdUvEYqj8a9PXf4nrgjNxwznZ77WBpc46Z3YCHwHzFc71NHKGmYVuwrzP",
  "key32": "56kD454w9QXeTUxZKTyJVAvKq2izu8U5wePimmSh5ZiAVVSTsdEfiMPfiVe6zvt3cvgYsq4LmJUbQc7SAaXeE6HP",
  "key33": "RSCL7rwjCf6XmQFqxGHKfinDwZARduQD59zZg1iAyGJqsKpNREbcdzwQuxN4nSc7ETCgJBbVTcWn2yeQj3mSQvf"
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
