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
    "3yw5EeUmtbfpvW1jBEoWmzzNhxwVB8qyh6iYCGDsjCewbP5HNt8BJknqpJ4GyLqMwnMhU19sDvBaA6HB4uB2bnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FRYDTQixChbSzc67r9qWdBw6k711RAhnqBBBxQr7B8PNBNr82PmPW2J12C6EVtPtZSMKvM4Ap3tEduTTFLWcqc6",
  "key1": "5rqSNxNDgaTmubkrGjfnS3ph7EWQtg4NNBSLq4A4PEaD3tLnAKJPcrSUarTNU9dPf66UR4Kux1CaepHoEEm8425n",
  "key2": "22H3CPbpogQQf7ie1uRCB9u2Hu77m9KeWxiP51prkceh4tLojsQA1L1ShXhYdHhvJ348MBDwmsvvHCHiRyrUg25L",
  "key3": "5hLZtspD7kWeqvN5Yw2WnLZfo6jUu9v9SJgbiuvK2T97Tn12nfeQJo7eX5zmtrDSP6WbjzK5nB4xknzMBwnjWxA2",
  "key4": "4mWKTccMdSmw1ASgdzSWh5bGaQGnCrBjRFtLGA5hykpZS2RfuQstcyPWN2DZow9rjkBXhudiRsFphRwAwL2LbuW3",
  "key5": "44vyacYHM88gjaoueDbN6JjccqPyZPrVmTRket5kP2cNozKeCo1FBzVzeQMVXFrGT5zYNPTzPF92AcoMUm8i7iUF",
  "key6": "2EHfG8dkWjochFAgNY3idxZh3ZNX8LJUa3pVLy4de3LrMBiEZ6utoF7SKHT5LRudjbV6EXsm5u5RSsk6nvYm5cHW",
  "key7": "289sng71j4TSdQ9kSMn8XRzpZ23nHDVB63HFiDJwjy1AwL5uNxkWxotgomX4Gv8bA4GzZAYYQsPDrgHGiv1tEoSY",
  "key8": "55Ahd5Gq4P72shHQbjjXUv44HAvwjNj8S88qGhf9BgRq9uJCAecNy2gkZzLWhUKe7JYLYSKYn7E8uXsUrz3r9bKk",
  "key9": "2vdTwAXGeWSJUVNnLzfkMsjyxxQrm5zHwbGe9rMzFPCr9aTEeQN5BSmdg5ynR7wjJvrxzrTAAdnDeE4TYDcUQH4Q",
  "key10": "4mhxXU4WkZoKjZDabULAdDA2eMA4tF8VCT3DGQsfXNYbMQEDihFpLZrcESDYdWqmPvCHpo4VMsBsfRYHiF6eS8Xo",
  "key11": "4iapvz5chVrXURBzm8cdgp1xZYs5DTjLLwesvvyM97bobYFwqfiZ2F3LYDsXqukKomVSSuoCL2oscx5BVNH6X9Yq",
  "key12": "2RUUBzGkcWXDRzo8KoT72SCbidXcYDn4wVFVV7ZecJj9dZQvgUzsxc632Wy3nvcwCUUdvnjLAGrCitrNk75sqnf9",
  "key13": "2UtfkSxgvaGProgSr1qoUnKqU4jWNMh6GRyteDY8SyFg3QokFhZSAdvHC9qN72Wg1SYFM31EMFztaNYzuagiy58n",
  "key14": "64Ghdu8PUJsHt329ypGEdSNgkGnWboZSc9q1Mh8jqX9imr4Ra5ht8Jwp5AswEq65mNqqznPRwTEbFdqsaQJwxxVU",
  "key15": "2ispXvF5D4ebFy5a2b8zibYFbMtZQp2F9oXPxfk671QabJ4kjhgoDpmzPZZLHudFodrGrHrUahCXNVRpbCAi3BFu",
  "key16": "4zHNm9wXn9bJCHhCcZSqtjsdTv17MQFb4zwCZ83y3t82mgE98bR9N7Tb455U7bECDSuu9T6gqHTVX4nodKgEF6mE",
  "key17": "2kGkaV7iJq2ydWdX8ehZQbZ5Rqfh6S5vp5h682Ymmb4hn5P4n75CCcuLvyoLN5fpAYgaPi4SxnmxxiXnRFR2ZsSp",
  "key18": "5aZxtGvrMUEMm6aKb9E6cWpLuQPTuxCwVVuyRbdb8cSy7hL3vk5rjLi9CYhU13JuwpLqpWvch1EtNQ4ZmySPskBf",
  "key19": "3p4aHsWDqtZGhMB3mCt9zNusr5nsc2XLY54n1PKLrrC4afWBKjX2pCJCDTgiEMuZ5MjUzYGw5RbxVXfuSNtpboLb",
  "key20": "2CBzEPaYTThT8P8EQqF8TCiSqKCvZqCkJjYneGQHAfMSKkg5r6KfmFK37yTiWSkFHRDJTBJzNFdJAg9cfj9eG6GP",
  "key21": "fcnGAQ2DhSF9eC2ytfJgBpUgNDR5QKz78Amp92brmaeWTum4zb1mfsiKTHRZoApFgpNvycsvHXJcYV3TdT36rtK",
  "key22": "5fPHMqGF3XVffXE2zewGrHvm86ZtYKFnCxqTkpxM4aSj6Un4FkNp51jDZqPaSCFcFjBMgX72ojSQbcLNJ7JzyvEw",
  "key23": "2GMLMLoivzFDhy58Sco4oNH4BinJx4jE8ZHQMCUgSLneviGXTxoYdsSgdNoUiXANnhGsqEjkdkiy6Za2z4TjyKj8",
  "key24": "54qkamnZ68DsX6p5mPkbeufZWtNLCXtjtaf1fhfu322xFSTo6CkKhYF87QF9WXCLcZoRGbT4E69wQ8gAGFEAfA2S",
  "key25": "keje81W8ALYKLJJ8ohuN9fWmbubKpNTDdNSZUrzknhiDyPXERvuvrPd3c4kJV4JWcjPQPcSZw5Xdy8S34sDR8mj",
  "key26": "35Q46QMDLtx9YWCQwVoabmUp2HT2LgbxoYm15sdr9tW7eYrbWzvhYL6GvKkMVUNzGHUqGC7Mh8qEV8vM9S44wERx"
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
