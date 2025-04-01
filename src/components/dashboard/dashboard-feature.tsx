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
    "uouDLtAYbQ5yMHDcRX9EejQmzmnoeGDCBf5FU8WHxptnLiukqM1Nx6fvZJYqYztfwsV5MERA4uPWiRW8KwLCZyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62fc8yDMKnniqzGxuYK2rrrTX4kuYQ9rsL8pXJPB5yhyT6hXrpsGHayNzPSLwfDMb4eVCSBccrXBhSKLrh9sAcfs",
  "key1": "35i8jU3y2bsXBxJqggBDQLqCUEusxMYa878qNb9MXQvLBtnr7KTXNUAQrvvKYwrvzHKRgQzfUiwX53bZJyXbCe31",
  "key2": "BkdZNWFsukyYZChBBr2U2kMYQ1Kazr7RL9msiZ2bFKAPrgLb4iyWcvb2DK7jRXvi6AmfGiVCwz4Te6A79K34Uda",
  "key3": "9SNRFSBhKaWWtkS9fnJ683hB7ELRoHAZGbEnKAorX9c7GRe12232zutGKcKS9mNMPMazsXtyttKKv8bzEJjDupv",
  "key4": "3VMjzpoAmausrvD9Ww2cVAZjNwo19XJjcFZePyutsLRsK7GWNsuicq6f94tVyfYRnNKhD3WGedSHrDKL4HJmMhVi",
  "key5": "2NPRg2PduvV872W7BoRUmJwyuNEqhaEAN9QP2ZpQS8gtqCWt5ABGbrXivsoGAUbQ5pEpsr89PJJ9TPYVBkVkceqi",
  "key6": "53tydZYYALUMFj3a5f41Uu7hdxqsBtDFoCN31Kkfp938dBFnKxiKxj3i8Lkb3obqN4hWLh6juyjAn74jX3tNcTnf",
  "key7": "Tcuej6885Tdc5v75hf5vM8M2JcQTXqV3QCcu5BsyfV7SQL5XBRHpsYB9uNtX35jP1kiFzxKFZ19G711io4QwbnP",
  "key8": "36X4M5ykhbXoB31eFcbfVd5kDx9REQU9nmRfLSWBG5KrCEPPkUtjmWx8YsAo35jwJACUJHRQiKzBXu8ApRVU4PrT",
  "key9": "4kyHnU4zXDjJSrkrUA3qa2pwyZAU3kc8hi2fjeh78vi2E1T9Ps3fVSkEZV3DctJprNS8a5ZeRzg6hiix9jxGYJfq",
  "key10": "sJ96WUb3cqa1znT8rXHN5JpFNQs7oAtQFt8PB24rpPM1Lq67B4NR9csySKNcw8PNbCXVmey9Sd7QGDLnaLaxA1V",
  "key11": "3uM2AkArwgXkxrbcePbdDTFhqA6avQaT6EHeGmsArEXhLG3SaSGXq9JCFYUARALVhKd39biDSkf8AoEuZJvqmvKg",
  "key12": "UGaAifdcgsfi1VV4XpMoaFz7gF8TRJK9CwWiSvW57DPBFPWifZCuhiG6HwNQdxQ9u9UvXjYtcyZuEYW8qxsU1Qo",
  "key13": "3bhtkrh1FZfWXfF2g2kaw2wnEvpnkBEQ8VyPzJsLziPU46eRLc9rr2tkp7czKKbJKbeDiCvfTXweWgsNXRDpwkeD",
  "key14": "3HQFbRAywLFT3VG3aso7pUurtKQXQ9XZ65yesqDq32fdR2woAZreR3x1GRS1YVZEPqTuajfBtkCNLL2Dh4cs5XAA",
  "key15": "4f921CaMW5kNsiXaBPZ1PRSEWvMxi2KhnFW9KHzryUPC6ibsQA53HnWr3UcqeB8pm4jUS23EeYNjjUSm3ycBiwhn",
  "key16": "3WQZbWTCRs3sp1R2LdYhA5TjpLNAxnSGPKWHkd8G4JMejxz6Lfskqht3Ub8zDpU2gS5dFippiZgy5xMaMNEnKzPZ",
  "key17": "3VGiwd1SrkWbqMrFsnSV79oUsc38jxJS5oJQ1EaYQPXHp7wmp1Zmyn91qBX3NoBjnubChuVytCwvbMW2stGyT1G4",
  "key18": "5Y3poYTDopvDLdToKTBmZxdWSvAvhz9bHPdBFhjJs15WZVCwzaz2agH2rdTpXkNZgZDd59aZCWgrGRhTfnJ7qp56",
  "key19": "2Po3BGHMTNadPCdvQ8QpQPfCTbD3Gz57RjQRkd6tAVw1M3xch3ZfTaZiXQv1Xr3EvomLwpFhZFKFe2p8JLEQNdLR",
  "key20": "3CsNU7BbMVw42gdta1gFihpG5haf26hTfbMEUEFSKNjzr9YbLkM1E38Nc7C5Mp3iiJdC4NdskqFF13KunN8BVN89",
  "key21": "5vdN4XprmVWDwP2DeFa6kGYiSbMr218bZYiUnqLc3rgLyRmDJAzvqLRNF4wHxE18vv9MwW2rht4mnYsSZbytXTaw",
  "key22": "3jUvPjPkmXJogAXxRuG9W2RCzaWVkLpWJ9PGqaRNYu4RZ2PSsk7WstvDKxC3z5eiFm4mPhzYoAcCCMo9viPSmZ6b",
  "key23": "4BCQkezD6HzJabCskS3EVb4SD48bYxna9Ab4Suxy9xwz3otZuJ3bs9zpCPEDr5zWKbqRKZAvAc4iNomsffwFMEVq",
  "key24": "2gw1AbirVer2MqVtYZ79PZYpVF6WxhSDtZXhXrda9TeRcqAhwVYgvLV1Et6QyzGPDk64gpQAt8A2i7trhpv6Piwq",
  "key25": "56n1v9WYA6RsvoZLeUkBijHaKD2Ebzw6Sb6kNgmPmwUJgMSfUVRgYFgUkWRjrweoCiGQnkeQcKTGrNnsFvshv9nB",
  "key26": "5GmXJkrahB84NTwXpWrqdzUgQPLPRZeeTpqvRENKbj61ujA5D37BudGhCPBn4pWJ1nhsLKiAHptQViPTwAfQFQLz",
  "key27": "55eTRRfEc9bioRuV36MMueo4rKMeh1vjtLsGm1BfkbpN39mwXyqzwEVezEoWLbXcV5DoRLo7Lnd9k5ev37yW5QHR",
  "key28": "2MFJGJUuDUd1s6b6gw1rZKSn2RuwwL3NpFQeT4NByDHAmuYWjFscNw1ZyW5tziDd3o36ccqorjaP5LTBegX9KpUR",
  "key29": "3WvsN1pzfusaZStyffH8MxdLpQMTJSQ6YgFKyJpngsNPEK3Vde1a23iPCFopWUpQYAJ9EkntDMLpbR4f4wde3xYe"
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
