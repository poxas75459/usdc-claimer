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
    "3eL6j8xq8AiFJGYvqzN4tJG82TsYY1Stq8MXyzDkLAJsa6KWRmtueXu465CEpGkCzvim7wSRUVmr9Tb9Fi5qXbFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hhYp4qrfVEY45yXpLMsCo5S8Wf1gajLubqhUj1ap9RdoQQSApshRYLPwNUazLBgShniwRfH2o1rGiWcLQCVCEHr",
  "key1": "5AEws6fszXSwjo2TSLMHKR9UdsfCA2WQxniU5pgSKQzrx4qkDcJ9uJsYb2Swga2W5ALmp1S4MAFLxvxuSJYSipLM",
  "key2": "ZNFtkhcFdpw9UjRWYK7XLp39674fok9Qjw19c35fypPLEVWacnm2yxoutv32R39EiLaXSCkaRUsjznAMir2RHBG",
  "key3": "4uRspGgXe6yKknsrSzymY1nU7ajiwrYJ5vFv5FC5ipe4ggxxGBr8oEeu3MWStcEsT2FxSpxfE7hnPmnJtMCHm5es",
  "key4": "8pF6xev4awQSaBh3cWgvGQkcwSjZ6R8TZh4PZw5QLvbdJpBi6RrgvYvNpr4WA3D5pE5cMH2NAAzBtn4CfrU9RZd",
  "key5": "3xkbaBqBRLGtDjCfMd8tpAo1EodRMr75NLdLaDusw96j8NhWnGJxPVdMbPckog3bf85weYzM4edhNGWoPVeY8rZ5",
  "key6": "yKvxPtMeSmc7XQ3vSDLxyZfMcruNR1GktUJVSGuLKnwvoTwxcE1wZXDtehEbNq8b2TjqjhrgSPfAxVwNkYF8rxW",
  "key7": "2ZSs8MhrigEYFH7TNiRPvmVVzgRbsvxRpKyZZqfer4d7c7h4DUpCj2JQANUFXhBQcJMoF5g5Lk7ErzkdLSqq9xWS",
  "key8": "2fn78pD9KsDGxUCJqtznu3wpyRRCmpuG7yoDd5ee767PBJ1LifHb59e1R1FNrq1tZATjVfcERSyopMXZS3DM8aft",
  "key9": "2U7FmqQdbE5bhVC9yThgkMpLmCXgBQACVAXqvPk27HTUqNJ2TLjNgygTHbcLck3Swd3Acvd7v8bWeifScErUGom2",
  "key10": "ZtPkGhZP4mVVZdKj6TGnGjApvY7UzcRyrKZ3xo1nr3rvndWcoR1cER4kn1hFoXjbUxMZg9kJugg48ejDYkKpQQJ",
  "key11": "4U1XdrGB6yNYny54UcY5PmfbkGAWqgrA4hFTsPu8kPn1yjFG9K2Vnitvcnv2L7dAh5ADCvgNcpAvJGBeMvjkxRqN",
  "key12": "9rW2GjgudTfSYLhDQHW1EZgZLYgRXhKWHUM6SK7hGmfVR62dDS8T9HMECj3kq8EotgiCRjSLiN1fs4B8FKYWzbq",
  "key13": "2Xj924cuPVstdPZBFUqL27EmbFw6Mi9HdHxE76Rctx9jd1FAaiQj1w6hMzjTqBg2PMnDrEpYj4wvsP8kHuK7Mp6",
  "key14": "3XU5Vyra7YPb9KJ7tKQDCPTPdLZps1Qy3UQxuNa4CAnh7vnfsAP8bosbBPE2nrSR1hDCvwwhnsEVHRFKbCRufrb",
  "key15": "5evj5icrwnW8AkoaYZrAtaNsr3pTsBMD9aLw7AFyApV48qk1kajFGySmwd6HP1Rr2R7YUqkiKk3HdQG34PgkiYHJ",
  "key16": "63jkFeAxLvsTagPDgmQN1Te4Ri1fk5kwgTt3KJzPesuXdhFga3oNqTBjBZp8MdMwEG5wBMQWykvQJLfZhv7AhbUq",
  "key17": "5kEUVm8JRH1tox2e3LWY9MF3g94hBCq1uqodd7UDKfLQ6uSYZS8977VujEKprq7xRoqACswfqQbpKwmtsiojU3f1",
  "key18": "5NDEeZCvjpgXsPQAFXc7DUEMvjvKXFBSLSpkGCAUU8yQX791zXTZxDjUYB6PeYbUjwn2mZTbyiPLHPEBJQieHXdv",
  "key19": "3bLwMFBk5RHwjcfU1pkznHwzosMeSRvhtqe8sKYLNkhdAvByjcuqLWwd1FJwFXSZKpb59iKZy7Dne7ZcsvFCzzmV",
  "key20": "4Z7kz7SbBz1ukwmXPVAujQFERRJ9ha3DHHVgXGUu71QojArrjWzSPcNE9FzAs4MHTgottRE3f9ufsJb3P8isgMFN",
  "key21": "4Fe4MWNp6JGBtJ75bgeC4trE9a4vVHtAwkutTCutSH5TTUD2bZTuq3ndDSsC7H8Ggy7zTuVqTunwNNLGGPoBtEZD",
  "key22": "5CkxQKPgqWEMDo7dKmajyUdbVWDdkPb821V6K5uEEwZ9nhVwDVszvZHCkpdaBvNWmqo7j57qpGcD4unS2M9ZdU8J",
  "key23": "5XrP8UP88UVo3HcbmnKLSLQHskQjKnkSTfvX7VtuWFU5P9cwrjuEbJaEGW6FVGAUgiaw34nBMQLkZQuUwxn6VAVD",
  "key24": "3aamAiACg1QLqYPhqLKcRFTHGrSrAwStXL6sTkpSBMKgWD8R5e45cG5gRigiygYX4HnSFRVoRW653ksFepqoUBZe",
  "key25": "FbStpPg9p1DHHMZh9ZfVu3v6oWpWNARRcj31UZrPt8T1hv55Xpv66ZxqfrhapksoWrA8JVeCJuuNJvV5Mgcow15"
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
