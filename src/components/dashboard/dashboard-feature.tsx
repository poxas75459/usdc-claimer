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
    "3y5XhoLFJtiCpidYWD8GzKqtfPUufCT9Zk5TstxDyEC7dKkHbmDvKF2xU5T4jEv6yVCPrV9caYYeVPdWSS2yH81u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1kpugmoz9TSeP52vw81dsAZDUTAwqzcE5cR6esn1Kep7VMHhYQFAe1U1z7uyonrw4EuCidPqjpB2BAMHkxfCBY",
  "key1": "4k6RB7RV84Tom2ipkNd8teaoPmBQksr4g7KoQ9LvgihM9GRYC2hpLdDYfvrbx3pBXKm4jN1m9oeR325ssdhNSScn",
  "key2": "2anD4NiKAdCdgxMGbmTDKkwUrY5aLfj336mEsBkq8CfLq2uEDht5FZuMqfRShN4gLzjQRfRXMmUb9rie7mqrBXa4",
  "key3": "2dZCkKafG62gqeAvQJ7QUWfhq3Getyc2FNrALBAuAYzkFhKoPzKrJZW8LBhuFqWS6BS7Ldt5J3S9eXxmHUrChfbi",
  "key4": "3R8PAASdmPtSPe11uCkVp4gD4iVRsNcff4EertBhHEyqAZjqi6KxarnPhSh9t6WCdu47VrEUefnL2ewNx34gyXnB",
  "key5": "23dLbRZ8xehWwPTytnGrtNgn747uvtxVacyNfqshAkrSPc99BWu25868mND6s1aiFMR3DZH2iTznHegE5NqcviZf",
  "key6": "RJwebiMXeSqnoUpiTo4G3B32TsrWD1p6rKN8bCR9aW2kzjeW5JmDRDMzVNcqSKAZZeK1Xbt7Jj19Vb4YjnVqyE7",
  "key7": "3Kjxi22prL68htBr1tGomhNWA4jg5iKqVf86Ck58YsZcatRoXYW1oEd4b4o6pFet2YFs4BkKrosGnkKCMSitNFR",
  "key8": "5GCHB6ooXGtBRCBCEpAT5aJXwccuJGecjxZD9zYmHMuRfbWKQYJU1dUEo9zjpKnwHxbYyXhwEUKGoxGyFJG89qQs",
  "key9": "32k9c5qNxGputyEjCeMsTrW7pVUUMYc3MHLiGgBXfy4SWTEUBEDZjhqqJrEuum1fbo2PiWgv7hZUarcpo3hbvPcp",
  "key10": "2eo5PZUfyztv7JH8APpBULm5AD9iTew1zEYAspQwWN6FhbWwZY9qkSRZmMQoHSy2bPCcBEoWEuDWRoZatT6j7vmv",
  "key11": "zudQwFtxapN7H1DrR9ECx9dnJMdpTRw6ykKfWR3H5VkUye5J7XnpqkL3fPsvCUobE1d5758MgfdvFEcjU2TycAE",
  "key12": "5n4ob7m2APFgAFbkWte6E8oZcqvkfyCxSpJLM7SKrBgnk9jrCj4YSGMv1F2hAkaVri8v13GBzd1cAmd2M5bKnA6f",
  "key13": "4EswfA3Zov1YZC36TtTBUAagTpS2W9gCh7SmVuT6z3xHfk6R2sFJXc6xY9aw8Kg7yg9grHjVq93SPKNJnhU2gkKF",
  "key14": "5yabecbxb9iqUZr83dqHrXqYLGCafYdLkTwszSYd19sPaxTbcwY3xiLSbbcuF4rFTHcVtgxsq679MT9pomEKZB1H",
  "key15": "3EdrcLcHZKChgn7ATku8K7dKnEyQGpWzsBbr7QX1WdcpQqxKirgFzj2RWTU8ANx2dyd23E6seESkQoLBuv7V14yE",
  "key16": "4kushcc5aeiqaqHPxabi5pbE77A8ucE5aPwLkQ5HQxxD1Td6qAdYqjDHyaEkbHxurfb8eE2NbcdnvZNJUaiGpaQ",
  "key17": "5G6sDk3qXRzTYqk4mRQsYvnchPT3jni8ewK8zUWKp8RVbF7H1LZ9bibbG32WAui5aK6CouqzPSMaajYLEA8ZSrAW",
  "key18": "NJPabfVkH1BTiZWYntUAPCavXAWHQUPgFYED9tWAFV1TCxLACJQLRvvcoGHSQHwSLS1uUa56EWk7nAqXBv47ATB",
  "key19": "48AyWT7RpXkVL1qBTm5cis44w3CG2zV1NYgERd9pFQzonZguYvutpS6GnLJqgRrDvwM5WJ4kDjRgT8XGTYrwbYQd",
  "key20": "5r8Fri14AkupWethQdmDNsuT9SHykPRWL6cXGEJqEjssZYfjtkgc5Zaafh88YGZrfQwbaWd6qgejXmHnetCq2AKB",
  "key21": "22xSCzrcq5QeJNx3gJr279QdfMkDoXkNrMRXBiax4T6dSq4Mi2uZtaHizU3AEZP73VM2JPCpDHWJcu45Bf5j2Msr",
  "key22": "3y2MiyT5JB1qtwhkZHaCNG7zTEGLe1ULfbRCpXjj2y44mUoegQZwz6iLg53PKJT5qdAAUrkuGWN56qMtkhdt3aQG",
  "key23": "26iXMdQ4XgfeYXN8VDPv7yadYT4Xxhpw2DkNDzU4d7tBmbqBxzrunj6yedS1NTqkQkUZHGsnyVrxPdVWgKztMEUN",
  "key24": "4CGGfUMvkqzbEo5fhrsVB4VuTMpFH9hBzfoayxNsjxJY2y2jpBxs78TbE2HBTdQKgNt9JYNfdtSin44XknA4EJ4W",
  "key25": "duEMQSHVHV2ZbYBBkrGp4ec3PwstcG3hcHYXwJ9d6VZa8KpBpkdvXw6W6Kro84G7Z2hBz5PFbFHGaawCkwHe1vk",
  "key26": "3eL4U3YoWgTAvargbNTMJG7phNk9xMj9wRB96RLSVqvKgoEL43XdTyk4EfYoVBkx6WpKhETGoQ1SqHWvHqmDjuGf",
  "key27": "1uQPwYk5VMyKwSztYFWRvoTe1ggnWu9jYaWGpLH6eYz83PepJy9HoP3u58aJf5DTzvyXzDX4mvVuMWcJWhg5FcJ",
  "key28": "3MrPefFtMSKqMw9sMP2nuEBK5Km8qYsVcFmSvKNXxokr8rMjhP7i6zCBcdo2CCnBXybWZn2uAfwpdVzyUJ4P9ec4",
  "key29": "3Uw47x72P9kycPHYhbjJjUAshn8xZZuxmThSmvc2dcfSqjUVVXj78SeSC4aWZpFuEmgzziJuDmjRBPhctjonoXzX",
  "key30": "2WGUiRUoweUDMBzcUUMVcMSg7mSfwas9S6xYMF5PkQG9W33tmyZyhq2tZ7Ka5YmtByNgCirQZw4ckMG4f7rfPzUD"
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
