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
    "47kSXr679sV32irA94HvW5GiY9UNF87r6JDtTFkMHPNnabxdCRRBEaAdxBN14NJittKyvezjHYg3xdEbYGVm6FbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o1oaYvos67uCAQXJXuyT3p7Gw9XsFpNkqDUpsajT9LAQXXz1FFkxLJAC78MZBX2qTZ8883fYtnLQ2HPdPcDWdje",
  "key1": "4a4A1Bvs4VwSv3tSt8zYNre1eXoGsJV7Zu31equcET5nQaakZK52BuYEEVLLDF4Hixq7hxFgExr71yeXXRVVufWW",
  "key2": "5nHQPyBWw3EwSdNsMFsbAQ5LcLJ2MreMRS2DPo7TVKxSnGG15xmaC8MJE6DvQyMWjpbPwuSu5mJMbci9p5puQGds",
  "key3": "6356Ua4CwzaVLNbvbvrjKA4DjTJw5GNMJHSaSkeVoJt6acnF9QKkqtX5f5mh61JcozWmJB4uQyFfB36dj58qXQf8",
  "key4": "26n1zj3ZEdXdfXmG9cR38GJn1pD8dptGUfJDWZx8G85gYxYeXEPbEgwMC7mmKPd8UPF7LrCGwhjvvZiynDci9F98",
  "key5": "4qWjd6QSmtYX5P1R4twAx5U4mTBv7ryU6WoYLxhXouL3JdfQq2uf5tDfQ3jVJJ3zTRxHy6iquxyTYtXVHfBz1TGa",
  "key6": "3UW7DDjd9YthF1XT2AQxJen8th4qjLzqLY3mgYQiRJfvurNfVCbQwQRk4Jx5gE5gGVR5gVLG4BsY7J37AozaP1Rw",
  "key7": "5VqBGiBTcLdrehHaLFmhNB1VWAgNVCK7VaRwaoFwWjwjgAxqpyHoch8W9MUm7zrtuyr7iRX1MeZxFG4iVMxbko5r",
  "key8": "c8r3d4eV69yjAcZ3vxE9AnQJH7erwgog55T8zTrqGNU8sYLeZi23M9QAQodrVfZBBBumMHoaQdeBZJ2ubFozHxA",
  "key9": "2yfMmnAxPWVYcEKmVR9wweZwa3jy1WH5tUxpfs4yMLqco9ezRmjDUh5t5R9g4GFo5CVyRS2f6RwvkD5cFXR6STyi",
  "key10": "3bxtSrA8khqVJTDfFBwWeYDDd4wq5gm9D9g5nTz1UYNLaHP5yThzB8GNmjMr7Z79QBYQfNmQKHLGGk9stf97zz3P",
  "key11": "5HJemN1NPmU8wu6onkZZeSDh1YcD6qiacJkdreQqJGzA5RLuYzFYAwwBTLKr88GJWM7BucbBfozGwNFXU8291Q4r",
  "key12": "3KbV6dMTaWDdrJgKzCaMdvcVxMRfsFLUjF3iVTiBKHUMk3n2BAo4P6VyeSJKxdMC8U39f2uNgAzuj6A4csB5FXoy",
  "key13": "43AcgFTVMj3dCU6K2zs15PXDsWEYVsFKTDoPJTdrq6ih691cCBs5KTsy8Bqac4Ag2UZkKVHupNZRvyFXXMvG3Qzv",
  "key14": "5sMfnJqG9nvnukmfkEcVBLnLcV11iGTjbb1X2YpE6PCkfhVqHekDoT3sqC7yvGXETnMSTxzRS7YZwSfPbRmifsqp",
  "key15": "PLFunnQVx1YGaEzS3SU5JUWH3pQ4U7fqswcAdKrneYGuocaDVfpWasDbw4dnAJ9UAuSszWg9PAguLemVaf2fNTz",
  "key16": "4oWBM3LnyStucVShU5GuBUaAEJsmspNc8jyqmsEbvxg13VQvyv1c5a8Md3FFzdGzAjuDskN716C2V1Xm8YFrZy3b",
  "key17": "4d9atRCPPYbjZvc2X7aBd81N1DKXVXHtt3hJ3QRbDV6f6jzvmRr1uByPU9egTjFSD8CtaGYzExPZVhBbs1wjejb",
  "key18": "4JD8ViQE4osDgTAW28vKHCVM6YQYCj5mb5pdrGbPeacLErrw8DbTpZMM1ds4i428uZA9xaW7CBBX3zRaqDvLoPpt",
  "key19": "61S8bS4b2FRjamr27WgaSFUKnt5KiAEjA9WwRFyn2koWW4S5CiHUXxfLqkMeQrRWRbgsi77mQ3qcMuHSnSitSvtY",
  "key20": "5WCg892oqxAkoqDmdJB5nzvurb6KdEACVsL6EVHctgz5SRVWJyrUKporuo8EzHmjcaY7jSm6cGRpGVCenwXbCmny",
  "key21": "zAPFWSxJ1K5wdBEjvovTqbVofYU3jUMmb2V5HzYfaodMA6aUZ8JMgiWdawXZR5cKS3MGLoq2QHDDTt2WZjemCwj",
  "key22": "2K7TFNpaeHu4aXmUv5hp4DS6dYMwnspRxKfRu91SJvGqNXbNpyDF5uEoTfz5w8H39qJw9BZxtXicFPTJcz2nPjK9",
  "key23": "qLRK6Lu8XewgxBU2qWkcRsmHkNvD22ev3TdvnRPh1siYw5U5ar8uukxGNpUzCh89WHpaJwpaSNq6tbehYhdULXx",
  "key24": "5cA1xBkuDuAk62urZmvtRNFErWyGEKCkEBzYzwznwNFUXtsuYLA3h3EC6z2JzG3rvuTZKhKorPdkszZdTpRQmmJV",
  "key25": "399pmh795kAyDiYbD3GNoC36GRVeCGfkjEx85VNcZBnGJ7inbHRfCtEpdaGtFYQD9cSJtXGCoVcBPYr9u2qZEwrs",
  "key26": "KLz3w8FkjpVBRHhjyeiPCNKDPuaGsvvUzACyUPpDw1uRvsQo4copwdWXYzUG3WBFoc1hhYr6Zk8mnNtEYdJQr86",
  "key27": "395CgD1qz1gpvdL1TRe4LVN7ZaL8XRW33P6GFpVQk7hqytZVTCdvG313aKafi1fh8N1A1dxehRdDkEFLZpxpRuoB",
  "key28": "RpvhKXtqvWhmqpXGNmyLCXqkp61aXpyqbkoVQ1cfn1TwXxdLXYfAr1x7AX9U7iE52iXadx6rAyYb3hC9wBJee44"
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
