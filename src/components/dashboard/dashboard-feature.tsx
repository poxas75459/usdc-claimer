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
    "2t8Uu6cBbcgXp6Cp2AqZkJHatn4x254vSVEDRGWEZWtsmjoxvYY41iAqwd2XDt1Dh1s1AR8bv3nRzpuWg2WDbwFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DvnDZNiAvf1B4n2KS8Pi483G9mQK9FXucGW7WP7JknFP1Xx5LV2KsULp2g8ED8ov1qC9d1icEbzWtaoMeFFjawp",
  "key1": "2J39GqwyC1TWvkmcc223WiY2aqNnexp916psjbcqxhgzoxQAaj5P8V7C1aZuFZ7m7SwrQKx6jU4eDH8226uRg6jG",
  "key2": "2cSWbkeGpacJK9Z79vTbE4FJ1Qd2JwJ46THsrmoQS2wfEEZdkRwqteu5Lq5rdPuqCnAqggvkMMr9S3qRgQ1osFQd",
  "key3": "5gymythneghVkpDNFJmtpi9a6LQpxV3eTu8soGz1snaXtLGQnN6GamMVGp26cSdvwdJwBFuXY4mCRRNqXea72Lit",
  "key4": "AytBKBhbZRguyfHN4JauSnCGS9g5Rnp2vQthUKsdRPyAJG9MBwb5QrX5USy3AxtkVKaQWFi7Fg7S6RkDka7eqQ6",
  "key5": "d4FFZjEkAuxhcKU3QD4zMLPwXs9tBztt33i7TxvrvxQCge4LAHenkQcLFoxMXqD9tHG6zv2kHLgVLHYxSugZxuS",
  "key6": "ahU1VbtDVbK988fFKba56JfQfaiKU4Gn7yMMb9Hcz4mcrSEiWEUigWr4hfsVzA163m1aFiMC1ukaNSKUW198xUV",
  "key7": "2h2hjMtcUHSdKsyywk7YWLK6iyFium5MtKUgBoSogcyfmME3VK7vr8t7Z8FPrcv4R2EKVbavJyWRABrxt435CT9w",
  "key8": "5sQ9Ah1GWpTtZw8rdm3a5vpMbtqYzvzMx9qSAuNVhRQcpRWQVHNF36nEtzQqPBj43mHmBtNf5jd9dMEFv9PnBMHg",
  "key9": "qkFpnGYFdARqhVBBmsQ1HkrPJ51UGHSwTEqowfeqmEzuzX9FyYTyCGrhgtb6Y2dvz3VPZUpWuGgtVNRugwXZwgG",
  "key10": "4pZ4koKwsDqgugDJA2xrbbeAEQXpNPzYKBcPaJCi5hARnPh5UeC4EV1e8EeSBohBREHHYFNFv8vewEGz6bakDz4a",
  "key11": "2N9d7UFuEdQ1YhVmPRZpZgGU5aGDdmgfGuQEtWaqrmWDj1PCtujUW2BQv5s5Xm1xyroDcV84Q7vmTj8utEcF6UH1",
  "key12": "57ZJMiGT1QqpZq9rYjQNEowVKshtkH1xERXCZ9LUw7igxTrz1Q3qraNEazDj5TZeJj3KNte4n7jrCvrBp6GgPktE",
  "key13": "63DkR4133XCqycTdNhUfiPk7cpPz3BnX3ZFJEFTwFV91dx2NC6DMQwr34PyxrW5L6QQyJXFTgL8EEYzUhsTjDmRf",
  "key14": "4TKoYfPiNFT6MV5WrpjJhPtLbEF7jHDFKwHsFsVT7ArgAaGZgNMsg378MSerywN8YXEUd3H6cv7yqPa3u1sQY5We",
  "key15": "5dPhnwhxp5pDkSztXQGfb8uCmhctBT2fZWV1soRSUWMkdrJeWU9sChb6kAENTwN3xBMKWHS94LgjZF36c4ccZZ4K",
  "key16": "5eWKgecS4gUMbL4HUTPqhHX9cgKSqDY8GXo1EDJbh5ia3W2yJBwPggFW92bzyp8KDB4ynrGbF3ZtqUrsBF5BfJjD",
  "key17": "3ggp1EhYhjTWY4KHy83m3qH9vzW9TdmQrVWKob4mDsLQ8mccwgYtJVEYVNPbgKRjkqxgu6Z1FpCtnm6V77RoNz3Y",
  "key18": "5XrnF79jF1hstHguTPHpwQVtLMCah32TLA7frRHBY7wCpcL6752b6yeFrtoHDFUtD9Vf47YHLa7ShziB9VN3SLHP",
  "key19": "5oiDYDMZAch4Lf58PXnijLUWxmhoKxURf3qV2zvfgbVXGRREVJhxWDz7mP6nQjnY2qK6TdagQn2ZYY32bQ1xUfnn",
  "key20": "3isJMHEkixGsZeyxBmXnEUQvjit6syubaoDYzUibQxPbmkEfH51tAvuXw6EkTKkfRDzcMMfE8VntXNYXYMugPPGM",
  "key21": "4bpWfB6njUzbRP3ba5kTB4obmeME8XM6XYZSBtF7RyoYcjCaKDRuFPLfdHLmgkmCMTZ5m6yRnGXSP5UQjgRP2wM9",
  "key22": "5xGnYGaGEDmmFQDzq5mZiLSmG5PCZ7w9MJp6nYZe6vUDvveCvoiBTCi9fieT8TdYeVw3ytY75CPwkeqGLBNxG3ty",
  "key23": "4XrRwSUz4TJDR2gvFmGb3rPgW5YVCtezfd5gMyTJFyW8qbhmBE4TYHGhrCdoxPwipx2QCZgtBs5rnCCMSyRLoiuF",
  "key24": "29CN7iHo3KH46AA3Du9c9PZ2pJYXquWUHAeseo4kZVRG4vcF5AVWXrH6ETvWxMvpjSsZ6YAgRZnC25gLtgN5edtz",
  "key25": "3AB5DcJDB5koejXb17gHFXdP2fmoVkuXyxpyH1xSYtjcHiN2JoaZXP9qBjWwHZRFeihVk6VuNfAH8CHFCbKNNoGV",
  "key26": "5DCJvxXhTr2pA8D9LtCHLnZV4rWDUWp1MrymGCH9hk4tMBwjJ5yBBbZEGtEYBRuWxdiA7oTEXojRs27mFqtELLgv"
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
