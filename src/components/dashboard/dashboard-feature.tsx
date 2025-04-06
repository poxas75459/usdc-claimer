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
    "2gGz6uib7auQ5jZxpeCSNceJ4jJK7oCxEr4b6PQRKWEaWpxwLhDgL8fKFhKdYyqAGh1VoUZt1EtVcPGPXrwQVg1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PX93E7pbD1FCda4vFh79wgUwJXHftSaPBo6rHTrarHDVWo2doUf2NqJUJ8SMwnZGLnG2eEjEY3mgfrWnGwHTUbT",
  "key1": "2YyooQNcFnb2vP7kGw2C4DfwNYtsmTVTpSeUPEYUAT4EXy1qLmhAJmyNEmdyVniHHnN8aPq4JWapB6Mn1bHxgz1y",
  "key2": "44nmPtuPuyCvFcDu7V7Vr7G5Sdef25Bjqkf8Y8aybGoKFvdQw21AHhGuwQxPaqVv5kKZDEg8BnStK8i8NC7jZjTQ",
  "key3": "yeQRnxjvKV9vrZ2kuaqimR4o3wjgHYUQrqgihVAhnAZFCWQFP63PYadX4tDuVzYPd2hYqhV5Gpcze6mK1wCgGku",
  "key4": "5SCFGGdqm1ZwwwEd7dukcpDPB7e6sjAqdi5TPxjfG5J834cmaUKAK3KwLfHEbEioL7cbDGupizUokGCsArdniyQo",
  "key5": "4qHCTUKFoSHz35otYaUXaQb2mMKHPs1rummmURQiVAbUKov9TQYi3kGQznHaTRfxkg9YwkEYpbRCEeG15b1gTgCe",
  "key6": "5CYDwdxPLGZav97dTwHMkxTQ9oj9rtH2RnztfWxs9kPEdJ6cWhATL8BfkiG1kZKHEZ2tD1E3G8UpS5oZ1YUEETVq",
  "key7": "5qWsSoHtKyEbMG1sVPEHe4eEu7fdoJJqHVx4wvYAkhgQ89dWnc3yn7z8YngcPW7Nx2LzGswoyYXzV8xDw7yDba3U",
  "key8": "5Qkk5WBeK1AVsbEFhJPSxZjSfhTYJHdwPhqL5fMTTpwdKF74a2acYweEZEq53zNoYyFwkW6emraXrFybB5KrDWDA",
  "key9": "3YPFmS2CZ9BAAVhhXDrNbCTZArYVhxRCvXZgQFgchm6XN16smo7PSLXa7GW1TN3TTMfxa2uZUdKMbwiy1FH1SMjz",
  "key10": "3cCGpDe2iBq52DoQrdr3Q34XBX5prvGf3mDg4X7e7NsKNWXojruNnNsfVHNzpBt6c8JJir4QEBj7EwyHhNCy2Cah",
  "key11": "4gYVoCc7Pu4JQ3ePEXz9scovN1iPjot87DFxvJbqcNKfVjQDYFtf6y9vJ8JXswUvfdLhEcbVEwR7U7UVFwUsf2Dx",
  "key12": "c9E3fRBJSBb85gQBA1Agkj92gbSTBiVhRXJuY2nucSkyNKnBi1rLpMFhBybwTZv8NpWPxz2n9hh5wwZg79LKJPg",
  "key13": "4ZtMcqBNbzcwp4XyLSQQpY481T57Xeq34ECaD1mfFo7suq2eihMx9mQcrwZGhvVqSgVAs2rxzbaZxQKzNjbAbnJV",
  "key14": "5yy7KQgwwdyswwVAB1gQg64vdvj13E7oGMxjtNjfGh5BYwvKwtyM6xCGJ5dJWpiuhNEABp1J9VdMTheP55MZ6zqy",
  "key15": "4QK7QLdzuBvgL8jEPCR9vXpAzdRQAs5bwtpfTYAV95whTdGC9j5bsfe3M1T2pkhDY4g7g4yp29Wj1HxuUbcXtsKN",
  "key16": "2HQbkGnL9tm8sMvyUWeSy6Ng2uXC9XtuoTXy3UmVDWXXnFc33UNMC9JfWqW5NoJbTvtn4i3MbtDyRnD1FNLMLSsV",
  "key17": "5vT2g4RSbbJxGaUCG5BpSHWnQgZikhQ6ysCPTAYrF2Ts5DkGn9hKPfPCLo88rjbNYkg4Q8hVBuxsCoFgwQVGHRZL",
  "key18": "4FoUPGbKMkPFgWmoEqkhVSvzWF6U8oSZjGYyqYzKyQ98gGaXiZRJw8pqTZixjiDzMBaYMwBQ32ocTpk6MqbzdRFT",
  "key19": "522egSYhHLHFWQQuP52uHxgjTZ34QXYMi5npHYMkTa5gdyHWiVK4tp8msgQ2RMRKr76aNziHhq7bRay8v7wcksFb",
  "key20": "U99V8ZZK1BWLsYXAmeCpxe2y7mF4ebjvmyL8MeU8tQFTm1UQuw5iMN4xTU4L9gVm87ApFbEi5QtDZMtKM4SbY8h",
  "key21": "2Fo2RRtsUL5fmLu3XBw445tzxeK8GsmWH41mEnsLk6XBJy4LYoyafr9394kCZ7J7hMSLpjj3c8dFJHDZn1dqEVYJ",
  "key22": "Pyw7m1i1WNfXpWQ7fvwSzSEgsWtzpYLTqGJ7pM7RBeu6r9fznkoiPF36XV5JiEvinjtXn6AeT6WiBMWc5GmdAfL",
  "key23": "3Rv9BJ2m5ezkHNbkPpCwVYVwWGX3AqrYP6HJMbswPVCoyPawYGzZ1fBib54EX6HWwdfCE8E5qRCC8EP85bZwmV9Y",
  "key24": "5LxGcS9tF8Fh9QmXDdcv4DNe2AJBGHhafk5DDwiDAb7cfmdxbyRwwotVAeKnhJNzxSWJmnBEBuE6dAK24tAQEB15",
  "key25": "5deiiR5Zu2zvpkXajQms82bZ86fMUBCH1zHFGxguHzM3Ntw2gJENMzCmfeyUVKxSJjyQi22RNTDsvQGRBorhSLmX",
  "key26": "59HYpUqRSncJcnrqpc2XYwG57LBdG1EFCaTQ28kPwzgkeY6UCXMTUXGdbqdLsAyTJU9KRfXd3YzcZWwwb3cixifH",
  "key27": "xfyeyKAPWihgNoAwqZdRuKy6f8Xp1QA2J2tMGK2RuRhoqYBVgqjYubpLbkbaGzqCo4PtbwpsnTVLrwe9Rc1RdpT",
  "key28": "2sSY3TdoWQB6J6cH49XNePGvLDC3BEF1xuqoHmdEBPGh4rKesP9etJBNsFQ2GDppHGBMUUGEczq5xvMXL6NQXcdD",
  "key29": "gkEZDBQMk9Ma3FG3XJZP1n1JrgxYKmWGu8icwv6p8XKYtVZf1HnePGrNMzYsjuh4JPvzA14Uo5xMvYiaq73S2WB",
  "key30": "3ajzWxBJN2FZgXpFcSFgqPMTVwEpFtn98hubcY6RSXKMcMARFtJ3dEMPhH8zsB5C9bQeVm1qAExW317E1P1PL8qe",
  "key31": "2DGiEKgyz85U53eXHdbsciaSFmT2SFGPReDD5CgnyExEz16ywXEoyTQaDDj1a1EV6YzYDprM9HQPDfHFuC1MKVrx",
  "key32": "4fG6f6hJz2rrio8WtP82hX5qcL1bsXQJQeUizhjedkucC8Hyvzgr9KM5ir1UdhiesQANyZPtqhrvjta7Z1KbfV8e"
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
