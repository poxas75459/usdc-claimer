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
    "4yK4TLxLjp7dB8tzVaYMkA2PFzq5FWxHoFNFxSyeDf6gE8snX1qM5yWtG6SWVyMYKbeYKdKoLNzQTcuREwtRSa2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GFcyS3rpbfeqW4BLBeMCCWARucGdVCxKmCKx7q3Y3GUBFCAxfs1t4PejJWwVUSjfBpGmJtT6hW1B8gRVgCxEwku",
  "key1": "Xcq5ComrFPXgtG3rRfp1oTa1DYnGtJEtJDBEjjju7nu5mYpWcu31miBC2bZ8QFkmum8eKJ2CL7Uin2Txa99RnzT",
  "key2": "4GTjT7d954Hjw45QReR8PFCwpDqmFWjNgYSdDQ1ri3GF94dk5J1hni9Q4yDpMrvE2iTK8JFoiaq9yMGvFsd8VFqe",
  "key3": "4dk143hhkYWpueJ6Qsdnf9rMQR7jwqetbiSnb9goWvB3pKgEtBHSptH5qSMQs9E5ZSWBfVjsawohF5u3ErSfMrrA",
  "key4": "86d6vTnkJK792WcvkcoRBiYUajVm4wT66e7kkPK424uutuxv8qHWTT1peCJaM3x6J6i8NwNVRyy8VuLjCuJyNso",
  "key5": "4UdsQjx9iw4v9SGuv2VJ2SWs5F8z9iJUbt4qyYUAvYmp7SAmPsct4yjULRA6cTUfYKFDNir266RKGEdqCtFqWErW",
  "key6": "4LcC48UV1w4GRv5ZvuHD1QUPrJCaHaoZb4rZLMCwLPfN3TsaRoLh2qQuAZtZSxn8Dw1mDHXSAWiR1iW7G5y97JpG",
  "key7": "37N5NuREwgauEFLoMkhPULigKdShHNcyskRHkxLdpNH4xK9tnKstCCig1LBNQk6LPC8Q6zrLUmXMMSkGLnAv6fzx",
  "key8": "28dM1Tv7LhaLdk995iH1q7pB8zvqQnUhEhwL6Z2NM1CfEKLQcaMF23CM27Enu1neeTRFhPNhxFpBWsxuB7Md6bAC",
  "key9": "53u2JorjvQoDMsB1hyKdekgbsZR74FEfA8oQF4kFocF3HuMkuCa1BGzoUndy67AYqNeKVbn7FNJ8zy6ir6oKJ2x3",
  "key10": "5ePqm5tYKJUyNkBZVLKehhoSiZTmazcq9p38J8bSnDaVV9SpQGkKYXbtV6csbabSTkZVfs1QHuZTtpMyEwHLWTw3",
  "key11": "NSyfy2TLsR62EFwhpZat2CN7obpYDdTFo8rE5QqLp6s5jsmLAomFGKChHerKLHBkPaKyS7wh727qrtUDgvZviC3",
  "key12": "5LuyyQZMDKr4hY4FjajMEzaZtxemkgVpEG1oPyGv1bMrLdQ5F42jnFbQeXhfK1mKGt2yv5DnEhRQLyQ3w8tLY8Sf",
  "key13": "RVuyrM655N65LFsdFjFSmeRdzP2ddn8s6XQxdFF3ouzM4xqPGRkN6McsLCAogszF3GHgBpjinh2DJm8UFz3CrVp",
  "key14": "3T4E4XUFFcJ67JGB2D3GUcoCkda5rJfQK3HiQFeTAqrPf65uexowVXY6kLU8CtFgkka6u8KMeaJRTf1fVXjSriJ2",
  "key15": "37L55RT4uRh8sU7euCJ3memr9rAn68CaxFtzuY424pCEmCrozMUkiKYQZPVb6hqB8spR1fuLJCLBuwpNnKXBRL47",
  "key16": "3h7joPnJRVnDsyjwYGs3Z87XKWPZJRScHWNDdS9uTX8xsSyotq6n8H2CCkapyUtjzV9DguDeqqa9H1rUWQHX5iD9",
  "key17": "vUi426npWmj6YbwupsbRWZ4Y55tQQiVTdQQfHjokes73DaziDX1m5bbpZWm8PLdcnjS4hR9afzR9b1UVYypGxwK",
  "key18": "4H8Dq7C5rCeakrWpJw8HRoXg9ncpjBwD4RdEorrM8u6188fnXoLDbN7Ke5dsYD9Ps229c2agjTw3ZZi9Y62S6s3B",
  "key19": "3thGLrexePAVGyckzbSW7LGgjWkTrrKgxUQnC92TvqV5nwrEhuSqGvo3ujLSSwQcyqGqcMYHfLBhuFiTSv4TiHvW",
  "key20": "2Qw17qprWfoipwPh4bzjJ3VrnPJ52CLg13GRbwmDo3Vcht2AoD7j4TysBUHXvBbxfaNGC3rQ6rgmULJYksyHqvLr",
  "key21": "5EshYJ4fLspYdcMREdLMfAkuk59FmWZ5BR6zU1ZxUvPHtMB6WtStLAhtyUNgD74YXm3VEkDFb3WX5sARpCh8eRNN",
  "key22": "4ngRjhV2N9xV6unmrdRCZEQwWUJuJY3GGUgnr555kJNugMVsL4L4Jm3ghhT62xxh4AsU1mYK8zAX7Jw4z3kUaFFe",
  "key23": "23zc36qx1BVb8VR3HFq3vB7kpL24TRhTdQ7HdHbPzSS9hm1rWfXBo5ZBfCvUXdLihTX8gHnBDjhahBUzFYbMJNpS",
  "key24": "5M3eawcCfPhxQKHk7jtTYarwz3sKMBcXpbxw1nkg7bywzxR8SdUqL4zubFN38HAtZWLzoVPtGMPFzBisyBgGWy5t",
  "key25": "3BVwYsL7iRLrWNFvLmA9XaoPKdr3ZSPB5Qs3puB9eQyn6wLGxFXyEtNrKHzaMeq88FaRvFv4mS7uR4RAAcSKRRCv"
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
