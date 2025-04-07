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
    "5Mjz6tPD4BHUF6iEdEU7YdEsaskd2sFFWw89WXN68SQ5EZnCAmcNmRa7QrcPcsNVBVnLs6HVbBSU7Yqxg5iXsqJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZMQMLWUsKmY8kqcNxgZmFR6BW15qTT7Y7mzFdGFSL1GmnJg1EZkAYNKuTKc1R4qBbqsktrEPbHEc9d2rUbSLN6",
  "key1": "4DUxEQQzahbCQKH4xP2Ao5rr6S9VurofDG7uYK7t66eguHoxGkVx9zjJW4gHtp38V56FrwaJ4NByJtxw7JJoY5SX",
  "key2": "jpGMtLdjXrjju9YhhC5qm5audfbjzTaJG65uUKJ4JVLApHQpnztdjCMu2LVgnB2VKnbqExhtvRPXDQt8dYUbtSD",
  "key3": "5rNdbJJ7oy78eRENonrBAqBr8tSJauUqpNs5evfkgPDDS5tL75s3eXXd5sLg9saKkVGJsQ8ZvWnW9Dk9Erz8h3Wk",
  "key4": "3RUHjZr4fxFcuJakP9JafBoFDMYH5pcR6bQjJ6Ewede37k6HwDSRDbk5EXBsCXWqp8iviSehCSDdsuBDaToKifEq",
  "key5": "3W2ZcMU3WMGzxjQchTRi3WSPMbMgAq8exoB2t62Uv6D2itcHnTdLeAFzx9jCYSzMFZaiMdsBwFYEFf2Yf3pwhuJG",
  "key6": "3tjBXnLsMGKdWr2cyFX1QRYHh7NuKh4VtJmMLHoUUtZxruZnJ9S8EzpZ4paxrtu8LnDgmjcJmeNdK8kKhTt14tkp",
  "key7": "5aWWcHReTx1Bk4KzKmHLp7Fks2bpKptpi7tst1ugudQ3pKHL8gS4FL9uk4bX98MNLwhB1kYTMpc1VLJQqbdwHxeq",
  "key8": "2F569TQEderRAMnRddWVCUwxNnc9K7KJr8fqqgaXpehjdsrDqdSjYa1pFybAenmXSShDYXvQQjCaqzr6d6irQkjy",
  "key9": "57EXiTcCsdZmWoaStPyF8k2km2rhfTM4Sc612mXCddLa3A2TgXqeWrZFXoh71DHTrpMnCzXuBVTc2Qp5qqWteBH6",
  "key10": "4A6KqH36jDuen9LtTGDPfxksVzhkzLjdNoQsaBVhsEf4iyLaw8zNAtykHSMQvLapqHKLRALR1XeN8DgMEWYxnurK",
  "key11": "29Ayi4zC6gLFyjQ9iYayZnxeMVRBCjfEVLQVdNFGYkGGJ5nvmqa8fVTvbVnTKnsVoVfayqryXbZAnyv5e8VfLEGr",
  "key12": "2aM1HRAd4bKxJKCr25bu8yZ6Vb2dE1Qt3oiHvFDmJ5VLqqQWyfM6KWpDC83B5HHcQ8LpWgdGbYwNuvnruDB1yVZB",
  "key13": "4E1aCAKWCKek5RKGEnqaEh6duMid1xNKC4nCpb9R23zugCQRwJLGGgC2rG7jfrKg5obx5p2iQAuReomAjjuEyXtu",
  "key14": "3EYf2TBYqe6Kw77fX5SLmJ7ZfaXrJMVcTj6qLX5d7eftfXkLSnVagZkvkYuhN8C7X6koe56xgdXLpCBdoCULTt3a",
  "key15": "3S3A8SpuCwR7BTqMbVnZ9DdV4awx6D6EpcMWttwFyRhkLm4c7uU9zFEByhqb3DdgyRfr8Ekt5bBmjQAv9ffujpJt",
  "key16": "56ShTXhHedzRAvyk6feUdfAC5wJG8H2FftZtzKzeSWD7eh8hmS4oZxnXEvojTDT6KsTEDWr9PxANnTTCqSVMNmN2",
  "key17": "42vNBAosKyPRBeoauDLzVCRbE6mCyNVs7smsPB3qhpCFtbHB1M6A2r59t4P73gPk3qwK44xg4JuaSNrLwiwQpQGS",
  "key18": "2tAcCq6EBB8uN2XPzTD61Afe6x2HPpRgDsKcrB4toPKQPmhESNaQVBAXek8UAnckaGgccbPXBKaurukb6tMvnRW4",
  "key19": "SxHB4ZDBbvX1RrJn2Mc7EJ8hEB5r23NuBb7TtTAnsTxMEbdT3w3zghJ8CyanGCJsojnH41htn34Ab7P9dbBiyx1",
  "key20": "boPbzLbpaejcAK9aqWN5fcbtYXoQGBPqgUBvChgg1BhPfW5cJijhGgGyr98zxEqRs7nAxNxvX8TFRZkvaPkY3gb",
  "key21": "hfRZ93Uw8PwnBpbSSN1gzRjLABY6fCjopkDWZLyXwzzguMB6QLPTXZfwdxTTRwQXvzcXsxxfHLFLD2jfXUf4C1W",
  "key22": "4cYEKLDobA2cfCUEH9P6obMQskXo6ozVF5hBhqFxTh3xyVvtxWqm44Kt75zBrecqxsAQQ7KjgiTJN4XxeAAkWCEB",
  "key23": "67go2afHh4DCqyXXT8KSPuaeMaDiz2ZuFfh1fJn1KZLb3B2DGkNpveEULYEGypGCWWDLM34kbrqotvwafznHWMFT",
  "key24": "62dMDAtw3RyWJc3pTufWsnJsBby14FaZBNuwic6nxoaKbh885rQ4547xkwsbPL4xENBUQHPX7AGqhaxc2Skm2EcE",
  "key25": "76Wp4wSzKKTo3cmtX1hguZeahWBm1qGpR1fQELMf6RptZXGf5C3vafddu9dGthi6PwhcgJQWEGWRJq4MvwM8wKz",
  "key26": "2k7QPTSZBkJNmgd3n4yRBZtFWRsSkbcCEgmf5ozzChSG6S4Wn6bmPapGfARcCeRQzbWqTQ46nngiQuwncCTwkAX",
  "key27": "2YaFdyPLFmHRmwUHM2sDP5PjywV56bBFcgEe69YY8eXEaa841jSNwjguGdXsNZiGv918paHvmeih3av9HNwo6VcR"
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
