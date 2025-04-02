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
    "PuAP22NcSwgbcL1aLLmL2zyHKmqPcdFSwp6zuxneW9zByaRPE1HfR1BCWR58C7FB89CTVsjt5UWVPrG3wptoGQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkBRnG5a75V98Q8Dh4UPvAgqHjBCLzGaF88ZEnZbcx7cMMrhDu1Hrb73Cw92RjE1myspBwAipmZ9ifskZwYNkVM",
  "key1": "3jRHo1CgWEMtMQCYsbhFacpy27v8XzfcyWbMr1Y287hmLkTFTDbbYSLkhDL5NCAdk8bNP73Q9W4zU5Er5Bt1iT94",
  "key2": "4NbRAYo8rY2ytAopnd9J4wZU93rBdtYzCJuusLw12Q1bPm3TjMXXzUZR5grahgrrR2WAxQzFDsgp5ky8CrqrRv5",
  "key3": "5amNFRDHMBwZxB1SsHhkxPBqAKeA7FXTeSTc7J64Vc2jkdyqtoYwdGNUD47XNSqwQph4zGHSGtVAnbqyVExzTW8d",
  "key4": "5y3iV99tg2W1tRFjEJsqSyxBJkChJ7ErbYRVegTwTcfpVJwyjwrfVLZDbPaRZpRRDcp2ZkZtmyyinCbGS3tyDfZW",
  "key5": "3mwEGfm1aTjSYphwqJN8RYUZafVujV1n6DfpdjGrqcoxPCNojm8kvise9BxfXtzCN9GdtbLvqx5zuvzDsyEjrB5H",
  "key6": "5uopTjMg2VVwEHU5732P3e52QvaneC3PjQLBn8iBSkWwMtRmgQkczVf27K9quuy7ZyuNLh8RVzeymGiAW6vsbmSC",
  "key7": "2r1RsXpTn54gxaPTdGFBCcy4nztBAEdC1C9YZxHejuYjBYRDPzYjy34Q8KnU9cRoQZxwXLUFW5s2M6xCKfL6hmLu",
  "key8": "5x2ywFYXanupLDybFpTQfr3G94fBQqVgDtiitAWoUYaqMJDiGXBJ41NWiEoipKqoxhmp7yg1zMyQBUKDiYJU4jGE",
  "key9": "2WCzVmptoSduBJNzmLX17qUCEebmbyUHA41ELxpUtmrWPmvm2t2FpYjWwFXE8UGNufSBMrW5pVhWQiYfvLt4eB9R",
  "key10": "63RKugzdFxERp6um85WJVpFHNUHv9Ec4JQffYUgFEN5qqMxYD5d1wSjdu5pKYAHz8uajHBUWZ2iY3M2VVfsX6i5H",
  "key11": "649vFLrpkyiEsHHrFuKYwSXshFS6YFkNBeHqVRTQWHpBBQzdgb7hjfxo87AVmKKDCFkMTeXgojs91qfUTW3LHZHy",
  "key12": "2dsYdWnfnTRnxLgoUS3gymEVNwA7kF2JqH9mhAA8wnkscHPBFGNiS2Lnr2qm4LbPu8aY24HBeyR4H44sLnaBvdqM",
  "key13": "53QZD4VBU4R5L7dGtt2jdxgomevrpXw6JVZRzXSC8c2Cb9Nr42QUDzimcpPEgvbPh1vQGer6hpTHpczmMajHtDyy",
  "key14": "4vofWpXg2w96qPaApMJXSrRy9qgAZdJermQo4YtyVVwkjibZEK86qtZQKvqiU7vCuR1NsdTN8jhWYoW1qcukuNj5",
  "key15": "5nnrkNiCFB2vJq36heXpfBPdTR6zYt2iiizZC4vz2UoyQmBw8UWV6VSHZ7biHNpD7zjVpHf3XfWCj8C5u5UqWkDu",
  "key16": "3GC2Zsu6pzXsPctQTJiSNo9iHVJZZF9nasMkhmW7xFXQPCvZ4nr1vBMHAwvKjEhneGg8Xa5PN2iXqmfo1XyjmKra",
  "key17": "46ewkZ4C4ETd67q1p7eBUWN747tgcp1YAKPSoq7ppyFfqordDExBczMPboxPRimoe6c3rSnaN99Aiw1KPyGqmZzT",
  "key18": "5d9tUkMZPFf7x9TvZuNTToU7ourLHDTMV26Q8Eegoq6pgMDoJCKuuZMXRCjmoqWSoWr1N2tX9yJKM9GuJUQiw35U",
  "key19": "3DeHYqvzYbgsudoB8enSTwT6eCsqgRbYCjDW85HgEWBPDoGm1V4x7c5iprNnEJYwXGb5b9nsNSinEjStYvo8Rs4t",
  "key20": "fUwQUmwFuEhpd4B8a39pAa8kcbV3tPRUpvN7VmqgPYD6gp9qDoh5V6B7gy2vcmHmYM7KUov5WDnR5xyAGQQSDaf",
  "key21": "2csy2uhoHqJ9Rz4g4oubyqTkgiHD6gGwmErdnMz3M2QhCdHqyDGqTnpAt6ynoJn3e63ExLTi8F3jSHPwBic6Hv5K",
  "key22": "4b1DEt4zAzAAdQRHZVx7BagYPBHSyG9NhAupGd5XuzcQh22fboTihsD2rJbkDt1VAitEudYtrCYuST3HTPWe7zPu",
  "key23": "Njvr1BccxYdaurMzWGg8iShJmQFiVJ99jnaA7qvaeGKZGc1VkiCz1YHqRkV1atoPdxTSp4MPKaVjnzfxBrdTJEb",
  "key24": "58Lv3BgP6WddKtS8wqdFyCVzxb3GHDyY6ibuvipWRuzzod55hzZQSzDLzYUJpUqpz4WF4XkRgs2wpTedLsqQVdaa",
  "key25": "2u2kP7PfS2HXVdFxqeXSPSWHDryL6tL6uMieQmZw6pXugrgL2a8enazSKRUA6MKQKgj274bM9uuU5YDXWxcQjnAJ",
  "key26": "5ZXQ5zyYmjBtZGmm6RWAfsqvBx6Hg8R5zbzLLm7mDGJawRha7Gj5Aze1KmfG9cyYGUocJAHBx716T7tLhP1o6PHr",
  "key27": "3RGeUrY9r77siQNAmctzWDwGEiSSbwZo2He4bh39H2QATHT6xWNCf619p4V1ou4r7Ry2nKsb92vogKbv1GYs49mm",
  "key28": "4tUPRLfwcEgWUY5PwPCp25GbCM8TnGiPMTV4bDDpKfQ22mbgbizgDi9joAuPJpkekkza3j5hpdmKSLKsXUAkp3RE",
  "key29": "5238ictUW8EvCKVLF1QDfmjqckyo537oAhdNLba8ZTe9oGB68VtnbbC9jve3SEkJBox7vMRWaDP3P7sMCeNhCc44"
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
