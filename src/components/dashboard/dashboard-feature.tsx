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
    "orvnR4XaSrgUpSRbMueUNzGTCWeidNckPSYswoG7tuj7D1qvFgubSJZ138Nt7iANikE9tHdhPFccHuWMka4wadZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35hPGFA91UFkXvsB5NZQHdhGXj1A41pRTbczU9kcD9iqzZg2eMnrS7gbWA88hjzqYDFPjaM4p9WEpFoBTv3y71CW",
  "key1": "5cpcLit9M4A5ghj9eY17oPCNc4GsLfz4hpkpds9Ardupy2CgEGTYSxYPYjaaoSdG3DRLnAJqzAq8dchiMzi8QZCf",
  "key2": "3EUpgunhKURGAmsJ9PRSoVNCKZ99WmSR4YV1Hy4LkFu1sLHPRzCNvhJzS11CncXJ6prLMeLXyJepDwvAyCzvXCAB",
  "key3": "59nLetxNziy65E2MPVX4crcSCpRtJPVwdtrD5RjmEK7RFjupknboyFswUsixZ3gLV4LQqgPQThXRdG8UjKEPoWR3",
  "key4": "4SpPMtkRNUszLfxRoQAqHyHpZpvFvMRkSQF3jJUQDbW4238rCWQaVaauT8fTBHRs8aJNg7n2LUKfoJWhVDPAtWZg",
  "key5": "3fShtvEGqTK9oporaeK8mZsDBBbUNKgnFoaRKSr94pJGd46XgDNaTzQ7FUEMXXeK9TPSgJdpSJxQ9Xy5wmpVfh21",
  "key6": "3QXCF8uHEdmXUrB75EHeoRobZwXGq9C3KUFB8kTqwGssCp314wXW4qGj9puAPbnKJoifCpbNGuUnLo9SVEYmQH3Q",
  "key7": "2SvdFXvRwfFDQ6f2P6ZqWVxdhGWPat7oVaZaev13LPjjDbn87jRBHvp8muiYFyesf1iFakc3p9QFnyTcBTCkUK6f",
  "key8": "4KpafQH3bhx7FjrvM2o2EqdyGsKPbxCS8wFfRMHYgLTPfhHaqv5nEbsaFmrKqWyYCLKa1GGZJwmPd2ffQryC5N2B",
  "key9": "4kX5PsNM1CLt1k3sQrjUkAxVXDaQk4LRixRiw5QUVTjQZELQrqYjtmFx4HEgpmB1QoGVTBjB8iCygE6dGuB5ewcG",
  "key10": "4oM4PEsix2zMs2oVpyVSNNTPpujWqRsNweycMXwrkG7oaDZzRovHLnT5Gwyh93hNWyZh82RKUXvxHdusANWHTcrC",
  "key11": "41t8CoNTRXFxS8K9rPHnMXTzWLRUeABqfb8p9b4pgY6NSgbmzQD7ef54wdUSd4k5vyXr8bAaHLW8xAVjhN6odbuv",
  "key12": "2H9RpYC68Cd4RhAZXAobGQBbExi1qrWDAyZYgEiwg2vYrNx8AqQXWxCJ29h2gEH79f6rrbVi8ugE6eWdCWUsY2p8",
  "key13": "2s7SVXrfvKiB2Q3p3RwaADHjNGgRLGrGszxVj9fQLeyTGTwCt13EL6BpvEkdDYHm8iPmAGaCw9KPrazqNdwzKnB9",
  "key14": "3dbbfhjsVubdd8E498PyRuFxT14prZbpZpsMwQijAc29kLmZFVQv9TbiavZ6Kaf39fsunfm5Axz7N4rRduwhQa5r",
  "key15": "suSYJ6y7brnk467aHYovfxPmWzbav8cCmkCCtcDjzkagJtNw8ofVU6N7R94kYxVm56ojBNU3u6iEbXJLozvKSby",
  "key16": "3C9Yy5sHxGRsgZJLGkbPLVaFxkwDBP4M6vNnGNeVuw8dHKiVUfAzTSzRVifgXHt3qqUe6iF8YuaDqVDyXRuVnAFJ",
  "key17": "5QigB2vE1a3TMAZ9ggFxu1mzH8F8qR4b6EZx8CQeTuwCtYffLdSD2hC9DyEVuUBowKrpJox2j8amJayYZBvPYnc1",
  "key18": "27naPkNaDU43XN2z4jthP5hLXRzJVgg9DgZdJaLrHFozNhC59KU8A4sGUQfxgvbgieRdUMsE7MTweDujfPSKkh3w",
  "key19": "2LLMtG5xL9qWRP19UKoyghGmo519gHhEcHWooDBrWvhswsJE46q8N5emyu8j89bZsymY2v7xNz2cE7UniPjXs4YD",
  "key20": "2BRQ2ap6ygqYVtirLKE7cqj8KVipDDpLUEafozPxeW3BU3irrUUi2XVY7KSbrNwg5SNPKJDjEFjfPeNv6MApy97q",
  "key21": "w9DjGBUfjvdqD4R2jmukYXqKMaNJxKQgG4Hbron9kaFGjMSQN3gRPwUv3Q9E9rhsvgtiZaLi1NTnPpUuMo6Fn7g",
  "key22": "2PCU1o8YH8Swg7r7Wtk5WBYLA9U3YFof5ND1HjasHcimb91ZYRcom9n4Y9TP1ZsuMy6DCbxtyhUhpiLFnRc4LDwH",
  "key23": "5pN2fLKBmSiUVQPv6L3mspfMxmkjMyMfBMfFMuhSx9c7MmdfNpZAs5QkgFwYTbzMj9KKCZ9d3qAYvsNgmymKG4Pw",
  "key24": "25ehGb1thA5rAK1Y8TFGzW7i43EihctTixqVLQ4vBNLMvnecs7ziJvuU3vsuQEpMKknoeBGGfS5SiGXKSAxqWg7r",
  "key25": "s9yftKcoRQZzpjxUMyVC51m8TuqZ51kwe6JBkJ6fC1HyqpsPzPrbUw8iere8oC59gDyDT6uLQBidfQgVg5vuLx7",
  "key26": "daYErqZ8hfRLzidVzjtDt3FMBbbcrFNqZYtTyqppDuTw8rjyTSYgckrLtZY6CUGDXbXkvdCUor6nVzhQSzaTrc4",
  "key27": "2rbvWUY2TT2PgYxn8jE5pm1Fm2fKdmhHpFdcjexLQinQL6hwVRQi8saQiUr1KL11wPzs9NNheWcgoSdAnShHKLud"
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
