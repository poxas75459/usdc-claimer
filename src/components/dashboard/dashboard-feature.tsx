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
    "5tryvnAeRwfzehHBzsd1Laj7Zd818Rh7B6yjNMY7J4oZBUZ5oLdoKYg2sWrSjasnn4g337C4DiVMcTZjtvYS74qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTu8Kem9gfFHnyvvJdrLJUiGzHcDPywW5LmqEsS2B74higYjF8Fy8EWw28dMKVSoAZ7xh8ftN2r9SfAEAWkWThT",
  "key1": "4bA4PSXM7ta7yHKHh8H4ff2fNYQSn1FwgofT2JMz9Td4AVKGsa1Pu32RYQqTbRUQCBsJr8NCtYFrWFxmK5KW1EJL",
  "key2": "21s1iXc9cxN9o7PJdXKB671VWieYNgxCue4cpFNALGyHUJFusx3R5FmnRe2b7H73hcM5YCSxpo6jZr9mc8H4Hx7D",
  "key3": "5Jrncf63w6tXNHm4ir1ypuguf2M5rb16B48n51bUP8rRfG1pYZbr72VWeszNbNcNTf34HGY9evZDhw2yGhC6eac3",
  "key4": "wuCiyhfa2wzKRiBathgcJEFDt8QuBa9h3ARdYNNTYndNZawpZu6AeWKttrQe5U5fNWxwVCGrQwfiJndf6ndAHop",
  "key5": "2ec3Yr3D9DQTBP6qRNeyoK6eU5kDnyMgte659XVrzDuYNZnReXWGZcr9phQJPkdXaZbDaWxsVb6D76igmgFhyiTB",
  "key6": "DWCEbvF3cLPmTGupVezZJTKvGoXgAGLktK5yatx4ZwmaHoYYXXR32NLVeaiYTXGbjaV3mwmvYyBxfgVofCDwUqH",
  "key7": "2bP3utWADPeveVWQTt5XSdo5kyaJDjZyTkbV2d5E8KBhhRkiUuaSKHwGtMi4iyaEYAidw56ncKTmB7XQ67fP2AZn",
  "key8": "3pJ95WS1ATfLYS6sq5KTgXeVmCPVrLjKcgVkfHayH2oJ82xHrtFDNMRYmD7V9gVBE3WPuNRsKVMpwfWVpiNrv5nh",
  "key9": "32LxM1Mw7SEtgqsYk2MkYNYnjk9Ng4hRvFtkFXcf871skSs9Ti1P78KjEDrd85yzZtQsW8P9w3aTKqcQCsoCRnta",
  "key10": "3Fv4HBeqchAN1FacQjmrFW45hP4tiQR3teCZvVji13BVUUMUFBgvSny3ZyXFgCzcFCzsL7Q8YDukQh6aCjoykJni",
  "key11": "3JbKFGMjuWV4QLVjh42wTBQKcpLMWvwDmxkSTa9F4VPNjTqiCwo7YzpKAsTbAAwZEtbzLxNK1uEs4bG8ATYsFcwE",
  "key12": "44nQ3zB2ptkA7x5kPjd14rWH63ZG8Qve97S7g4HFAvzFAKDwGvUmU6zSkt44TTXGjvfSKey62hFwi3SohyMj6yxJ",
  "key13": "3ZjxQqxk2pA6NeBFowa9TNP67HXRLxatbQFkYo6EwRRsmftsFWLBKuAiT1FUjjFdmiSNviFWmPU2qaNP5fSo3rVP",
  "key14": "4HvSMQoNgPuvYHG9rM6kv3imsyojSPzAQhJdApqUbavquMQM4gYc6hyqNEWyJbdf7hyjvachi5JUtDaqVTBue12q",
  "key15": "5L3CpQx58ouL8fux5jpGUyfjZg5hojuQnHiRh6DvsdocCfddhd9mdsDTNQ2P4nzQueWwC9uBnWNjka9fg5JsdqJ",
  "key16": "4V689MwwdVjhuQrsodpDMMxi9bbsaGYY7sYhNB18ChRnX5HJkF5s7EKy8zDRGRX5C5sYEaWH1PDFNyUjesvmGeq1",
  "key17": "Zppu2CCXB5hiKytKsjpYEeYx3GrKR8TWdChDKWB26QAxNk49pcHhQpr3opNve5GQgZGcYW6tMLWN5sLrp5rskp3",
  "key18": "UtKWafNFN4bLS1eJfitUY5jW3X3254xDPzPzMR9DJyeFMvdQ51GYc1pxYeChKkQ56xS812CtDfHEorRivu29SjH",
  "key19": "bvJSNxRpLjM1AfFJAU8zMBLJMwTgBvc3cCzSRwWygphFdH8EXGhe1axtxB8vpgozdSQsY8qrFzVyjbbydRfmKS1",
  "key20": "2ofbqQL7WyqykjuesyMUEw9fifzPgMsHynyncd29bE3UQEBhtzDrqbNMmePicjsMYg6yGCRGpvy2Tnp8G3n6GicG",
  "key21": "3z8arKMkheStzPBhHz9Qpe86sA2suQs378wmhHZJaKTeMh1CEJ1XHMGFTKxTfhfmyyAZ3Uhxyfbb3upD7PLQ31NW",
  "key22": "5yRER4NMZFhAY7KSyTH5ucwBsoXC3vf43PPLh5Kso3d87c8f6L9VCvpTPtHP3az6oD1YR3kLqmzX286i1wtyS5y9",
  "key23": "34xDRHMxttnSHnsuiHEjSgzeVNLCvg95PVC4v12DjGrYzT2GatN8fj7FRj9P4jTpJUkZ7B2WBS7BKcuASFeCPgqF",
  "key24": "inaqzMehrbxYjyvZRaJioM8LEffjLgUfFB15VX1SmJsxh5tQheVUmbxMdSCxiaHzk5t8JJZ14hCp8UJvjvghDho"
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
