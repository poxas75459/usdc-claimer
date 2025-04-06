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
    "5tFiUf7ERhYXWG1Xv6UZeUEfrWiioxgKsUuULJLGSHrkxGnEDT41dpyZy6fJJkrekn7TfH2kCA4fkLGNGHn1BugL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzyQ1gxE95aKGffSakhGk5MAcNXjBjnLNgSutCUBH2FM34eKSVpDECRbfHTsZP8btw6PNobBKp3KNC3MVtPx6Np",
  "key1": "3nnzwyFoMx2wTAmF4xeCE9x8WVU3JD9dLMVNdApNrsGoP5D4oQRm76f8RcGKX6FzyaEKEDqETy32duPAeEa1qqGX",
  "key2": "2qE63ourMsP6W6Go5bQtmMsLzWWe9WpTS41ACzsqHY7e4LmESzWTPzkNuYT2NUw9vAfyEKV7Uuq8Y43Q1zGdqca1",
  "key3": "GdN2pW4NghL45PvRxCgcgfjyPvXcKLjJD1ZWNYtuHnUJPiX5iRP1X4QKrKYnxQF76PgB3duuhjPpenHvHGFRiYZ",
  "key4": "2gU66ktDbQqtmz5gQCS1AYE6Wdokr2ehiJGtquaswfz38VfUde8zvHncC6qXovz1Tnpi3jTfQ8rPBYcCVSZ4XFjV",
  "key5": "3cA7Qgfh4n5LWquHEXUy36jfp99yvL7B7SzNSTXSSc5i1uqxyfQ3T7DNEN6XbUGLGjpdyK1PfWo7RLSUDtAd3o8T",
  "key6": "4zYGyhcKbrwBAUrRhiP6N5CxmYNVKHLoeqEXWYY3PqUGqBVmWp1mbFQQVjELPYuhLVQP7UURWXpHN6HJs5ppATZJ",
  "key7": "3zbMejd66gRGRgE7Bw6RjtS84HYgfa455ATMvKT82WWWDggw3HVyaqxKqCo4uqWWSjY314EsjuiyEu6soF4fya1L",
  "key8": "4thzWtVpd5XHzhjGw9X5AHk7eHsbiTrmiY6usq3SBCayJZGECLhvWmys34BDsWaDatK9R9CvEj3bUdw3ZkQsPNNQ",
  "key9": "3tbPGV51A97KTUXiY6spT4jiNnKGZDMApiHqyU8bCksKH57BWSAU661HdBSvyrAMz4A82d85VpFLhb8zhQCNSCr2",
  "key10": "3v2d1j8rbWoKR88TJ5hUrgg5CEGtAxWdFFfxskSZw5dTREhmS11HhZ1sPQtmRU4xMoADY12xB4q3JLboxe2afriY",
  "key11": "5wmgTFJu43AyBhykWUzbFm1gXTQzA5vrr5U5xTyTMp6nMSWHTFDHAsPiVqNaqTPxgmCs6aaBZmoptEm6Pq4SRxj1",
  "key12": "2MbZuv3SzQshr1Cv92kh51aPSsmFhcFzV2yFRWG2AmeiqWgDnjwWsYYH4kDLjTNGYEa1gKT7YbJJhWe6JnoVoEgY",
  "key13": "3hoaqFjNycK7UwRmAemJbtyCZkKLG7D7WLhW7ua26FBgvaKwYCafW6TNEyRKkrmEHN8Tb5AYzhMfF2HAS1v3mZ9q",
  "key14": "2sRTMko5guegab3ntTt63VTRH2Z7zDH3GUgvU2m8K2vfV2nyH9rGYnuppzLkPNxPcssMu9Z4s1cpUE3Ukhxp55uz",
  "key15": "32guNGVH71GBZGZM45nAUaUfiTuNfZGam9TvjoFxyv2H114Rfqb8swRQmGZdyfRhCnXrrDp1jU5owcM2tUUw2Ftt",
  "key16": "4QobR9MPVTdQSsWRYLbmFPUrV2eZzyNC5yoxGrwv9TqNWeixkCVLAV9zL4zfPh8VptUTQypw4TaiLQnSzyKV8ajB",
  "key17": "foP4f9yfBwTm87osJAGhikxpC2ss2KdwpQrmoyoRgoVvfBcFosi4HuAdkg6rDFTVbwYwaGjyxQg7REuw3iZgF8K",
  "key18": "3TFAhsJJAi1uVFkvHkPXgNW36BPKDhrqyM6SrwbRm4FwUqngpdiV66q84b1S6mPevnNvhEFae9Spe7qvrj2BWsdS",
  "key19": "EbZqTiPMDrywZUbv4ppeZ6H4HSJwvarqbZRm3h2YFVvFCXHYHZ2tyRpo5Gcz5SRdH5SgeDd2UZdxkM58fft3v8H",
  "key20": "3ApRm2jcnWzeme5hzbfcx86HVSxx8eXJHK7u7nJHhn7VTsdCgcuqLZbx2VtcY6jUSuAFpULfv3oH9rRRzmnrPbKT",
  "key21": "5miGDH6GvQQqecdcDdwsgTKwduF4VyzupvPWw1nGHC4Wh8hgyTJVbpXhp3c8GkGRW5RJHjvAfqhbquVf2AAHHUSG",
  "key22": "UnjvyxaxAE3L6cnCEoktAWphc4TszjJifBC4tuiFGXRrwLA3aqAosqjigryjNRTFnsyRRHuSEPzsR9usfmc2uTo",
  "key23": "3DDqa23LEqxwsgKYUSkemywsjJA5tZp16T5Yh7j4eAkmQvq9SHau7fTnJoFfq13CuibeZzq85EjedSPAgQo8vyrp",
  "key24": "4SNQvEwhGc4MHzahwy1DYpRLsTu6Uxjc5FiizkKFRHSF5YPoNU1yT2VRv8VGwceGr9YnSE7wToeA1Ri8FHPX646x",
  "key25": "4jxaSQAj23smPsFs1WB96qmF3LnGoTVafhD6VZjuReqAYWpskUuAzX58VKQeaWNr1VdXpetEHJPuqwy2HaP2ebZa",
  "key26": "64vbqY23tADV9H6gvEctSSdtX35tnhTrAhqVxBqVFJtmYbYLNLFaPuKRD5q6fMu7YgVBoA1DvQvfLB28eJkvDfNC"
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
