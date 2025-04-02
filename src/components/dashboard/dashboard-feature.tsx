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
    "5pm8m5cKmPoJZRcXHiBN15kNaztBu77cLovrXPM2RMCoVuxEF7ygeqpa7jimbj21gTRZpijRLcHmcnSa7rdaqANe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2YWERawzoaaTzMD1uT8gyhw1CKsZwQVMZPmAYKdYvTDJdzqXXrs32Fq5PnExU5gZMB9pQRhqWiDLb6UFDg8qJR",
  "key1": "36zd3Uzw37ExaFuQriChT9xvoJVT5MV8pUETbrRffNMF4V8hWQMizun2dZCaMMxVLYSwEmsRBsoiZgrA56vd53XW",
  "key2": "5pDkg3NmGp4eLaGeo3eUwXuXaWLYDi5fTFpyt2aeVxpt8MDhBKUHGQdiizgGUzUtDUNWQTuLyP45H4jXUoGBVYU1",
  "key3": "3ZYVRGjvG4Z8XAc9z3T2zdTdivewfwgpFfdEZvaKarhD29JphKy7s5zhRK3ZFa2NHJJJ9CnWTmAUVXZAqMxXRvbG",
  "key4": "5qHgFNRouVXZKD1hUt4ZyxAyadZAUkV15bwgKomG3rdkzCU1iwHb23RgwPVgB16KRcPqyFT2z6Pjq7Ksuxw6hBZA",
  "key5": "4zsBHrAeqgHaaFk9eDAEYQY5Bra8Lbk7kLJYpzGJFpEAyPyM9iZpaQx3sUbAztK8ZjtMoUdnSdH4bzNUJ1KuNr6T",
  "key6": "5qtMJut955MRYexXa4b1hejV3jZYGyfudcrEVzsER1eJWKCoSp85oDQq3C4tRRESasZ33hXBJrKfYd3AkcwEtx3n",
  "key7": "2sUd3osQoY6AoogefjaUJfZcVxArCFfuxjne1M7FrhwD6zg9ZN2nvdLdvzDxcVoVS9vdqBLd89f5GTtfD3KCqidA",
  "key8": "62h7GNbzCL5dh68KnyJRoPb4mnKXZaTeKm1t5Yjrqkj1HfVhYXTatAy3crAaARmG2wGJ7wTwLaogLk1pycJWiHU8",
  "key9": "4qc1N5wMPxUkyPHhnUA3cRuvGyqLrmeWBFx53Wq4UKx1FAmUPRA9cE9TpqZiMVj6ZPgJTGHsNEWmwtHoi1yPArAp",
  "key10": "5w7Jx2tjjetNVgsUwVVydWT9J2ssuDSAsZiM2RoEnyEgCLPYpQ7eoffHKXZ2Am2WkfnPsKAZqnZcZVTeR4rhdUcn",
  "key11": "xacU95ASYNWD4a1RgAaYCx1L2HqNk1q8XsKinMGXXGNxyDS5Sryg4cYTBJqjPWnutQZrBA65gz8V8Eok9xguUkt",
  "key12": "5zbk3SauWnT3YJLJwKh9B57bvoTtG844rsrCWe2uUAGCJ26T7Mph8qLYTZGxeYDMNtfkx1mmpKBTbk6JsbbvM7v5",
  "key13": "4yGizUXJNP16NZYDrzjwrLHmK7c7DJSFwrEDmU5rhR9Y2LDZ8GcAqypYL8q4U7wDjbm1p8717FiVGQ5NXSuWuYbo",
  "key14": "b7agEKUEHRkBX52GxhLnvFwJ1mR72gkpNPCq1eky1kVK3sJ31i5UFu6Yr5jpLVqwGQWLsSRTqmCynW4iUuPK7fU",
  "key15": "rr5PfiRLQXXHNHhX6UUBaZgAh5sNt382yBLBp3xjeVPgGJxs3dQMzH3FFqnXGrJHjFJLYKvfd8jkoH5ivAc5RVB",
  "key16": "512wQAwtzeQbbFUgtFAGQ3eozRY4VXdBZwVEbYkTmZenRr6QUmQwygEXoCe9rnD9ysF1PMrm98U7p26VRVR2WYsP",
  "key17": "4GLPNRXdqQTve3qffVjrU5fwWydTTeX2eK4Y3CiY7yqQ2WBFQuVhifNLA6QV114FcJ4e7GUDbQp4dYpZFggqsuUi",
  "key18": "4iiYcVjhYGr2ZmjzQsWEUnMbLWaLnkc3unBX5ijyj5bbbMS5zok4pJbLnVRcs8G9drzMT4ELtvDyU2nx1vJiSVBa",
  "key19": "5ochzAAAFy7kjnvhb1fSpBeZVVi48kAszV7NLmZwyeiiLzqpygeMi1evWqMz3UWGA32VehxRzFC2SRQBKqTHGrkN",
  "key20": "344gsYDeJTZpPxsSjesSfwun1mE8C5vHRti5ZGtMbPStje76dXo38PpFGo2K7JGN2YFtg6PuitwTBJM9S5AwVQty",
  "key21": "2mNmZBn2VUQXKnTafVG1mQg7XKCbYAQNTbJweo3Kt1gepa8JXKX6L9NP6TnU1ygKMFpfqNs1J2JqoBgZrvhP9jb2",
  "key22": "5vN6ZWn9YN9VHLaZhpPqz3AGBrF92iuSh3eE4XbtUgxtD6hYAXkPPT3bQbE8DqRtAnSscLgZTsQkPgijMQ9Ymq5X",
  "key23": "5GDnNk1FgDLt6ZLBzaceBf8iLoQuR4q1Mz6aFQGef8Dkh6eWwQHRcYXM6HGrFy2ipEPRkQd2j4MBGLvy3eVDEYvM",
  "key24": "4B2gc3DyHLNeNLfkNQifdB9eYvU19HYVmrSrTo4NMES82pYBKZCQvC3tVafRDXFdT8xarEXbam6kVPF35VrLZ6mJ",
  "key25": "3U3xgvxJkCEDh2sxG6LtqKFAYqBUJfpeLdBnwq2S1ALWWsErepn3FimB8nbRWptvbiT92mEFsoC8Mc6QzAERqEcc"
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
