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
    "4PwdffV2QT82TPiaiod11TH284GPBsQ56bAMDrugFQHUWeWWehkEAPGZ59SQwKyXS638aAyf1ncoJH2ii1NbfPqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wfGoom9mSs9WRrCcS9Pn7oyq8AGs8wWnwDzA7JZqTJ3ZZogiw2u2KUF1NR94YVMrnPvj3svo7v1TfxDnrW5rmfG",
  "key1": "393pXJsNByBxiPoFb6a5ECJs7jeFQXDmdSjoT5BVinD8f3gLX1Z6HCTLf1pqQAE47TYPc1994ZJJRtXhMxf4X7rU",
  "key2": "XjB9rSdjSWSP4W2xuqHWMVoSexJBzUz85YqCtCToj2EiiRF3eYMtv9EGRr8bz3NM3S6eBmsFPzLnkTDUeh4ua7Q",
  "key3": "2H8oHAAmc49FV1xXXcccBt86GWuY9tzQEaCGEJncrSVNWsT2vdZdKK7XaGc9hfDiua81evvBRyeMuPddf2wRgJNG",
  "key4": "2f6wXakxCRgrbRYwbuzXVj2txcuDXYBroBoS8obHuM22uEQT6PCCSYeC8Rf1zM9QL8oASQfbK7cDZgdBGmEhpsdS",
  "key5": "5CRfh9msvANgz4PwPWUvTb16xwBmiH29j9tEvYjWkciwTJvTYyeM8j8iyTCn2ArfbRgtnn2dHTVE1kYaSPhDz63n",
  "key6": "3DhEonuMzx2Juf7rW78uG1NCExaoM7frFoZcwQb7igxpqMcVBstn2yNu7zKQfE4W6nas4s9GH7kp7qveWhPQDeNv",
  "key7": "3MGWNE1JuuT6LRUZzwAe62FzEZVD3DRGSSTmoYsR8qxHGiwmr2i13Uk2CAXnypZeP2bvDzybkaxMqqTh4gCAEohF",
  "key8": "25SrrxXwEejWKXuMWKJe2rc6kuWyot5cRAKQpj5FhDhNkU26Ujd9nU6st4b6YWvFCZ54hYNVBVAsP6FegUEpbBgS",
  "key9": "4DdJtqVhHu95T2rCyvbwmZPaSbYEGHnrM5ZiFgr1DzM5vKP56KLeLY8oSDhb85X11YE8SMqneSXGDbT8tmwsFAjc",
  "key10": "5jtpfwdZCFmNSaLURbhCa1fRFfXHDfz7oSETLkA2ToFWP4mNoSsKccb3zaELvsEzrMRoRX3MYhAQ6evRAs4LXuaY",
  "key11": "4MCqA7eixeLA29Zn4MEoV6FKcnGjYLtPiHoTsHtfFkSJJTgquetwKjqCC4wmR41co4rLMWgdHTr8zZkfdnP3KQu6",
  "key12": "2dWaEQF7Sf3eJSef74rEFBX9SeDFyYRMGrFsCChoC8StfwSd9ji1PYx4MtNU6iyihaa5DtChb9sZyRFnsc3gLjc",
  "key13": "3wtA6NZYN1pev2E8XRrRJfWYXx1P9F3FMeWXTK8Ux7Sg4hxpHG49AkqKRGXxLjHeEejeu88zdyzNtLtLQHNt48K3",
  "key14": "5JdeRy9TSCJNrq4DQtxvnGXoJTQKVVLxsChSm7aXwn4xhSH32pUDwsBYB6SofqBUioeSbVTFJ86Z4tDBhqg29T8n",
  "key15": "4s92ssybSs1o3cyo8hcdpyb9VGMSn6xJQpKARdJumN7ZPqRGEYnTZj3KRFDScwoBvZbKwQGZjYKZyd1EGJB1GG5p",
  "key16": "meHSDHc2MSMNySKtUXWiG6zWsFmh4gkhwn6UrHWJorYSQbxZXSuHRF3znqVLuoEaBLhqH7XvyroNkYKxaz7ALqy",
  "key17": "32dtLJbfCbNe3wK3pm3HBNgo8Tu6FR8bUa2TL657pswEz87nDQRFWCsQ64nZFCnYaEh8bdUWxt1gMnn4p4tRzht6",
  "key18": "45XPpWriABAGqxbwiQhEExaQtDTBhK8udnWAbVQPL48bM1EKSXMtJhk99qt1mdqHd5p2gk4M7s3gu8DuSYZx45kY",
  "key19": "3o3e5Fc8hXXwG7PiSexTkTJveuauMswXaxDKQJZNmCxTLEsZQiGVbRiCAKtLJdAaskjYi97c5zrYYAtmN2A3QRZm",
  "key20": "5DPQRDF3HdySXp73qFLZUFQVUbXnTjUCnrNwf7F36prdg9L5b4ZUnoDJRc4zxyMmSg6JfV8pj93qDEGoB2YoVBdx",
  "key21": "3DbhvotDt8M2LaJnCyaSg3xn5HCWYnxcLSv3JnwsPAdTdhPb1szbqsJqTHksHyUFBZnUvMt5pNHxkAeD5sV7SS2R",
  "key22": "2J9HGSkb2aEBfbqq4woR2AfXCxd6gy8AFqWH88cJH6sZWR7BucdD7TgNZLfLNcE5dbkdf2gCJdPNgvwWmPiYXkUa",
  "key23": "3Cg1cceNqQQ9MRRo2EXjwtpMzLzAamW8DMGXw187sfz1LPy56D1F96rCTPZ4XhmasMfW6KeVwi5CzcGhZQcBRuBM",
  "key24": "te6UTYU2ENrEC4Q17GhAKk5KBWVTAzR2znGnfdH24bwvget3Qq3AKah9DSLVuDkP65JEzq1JHtTxKMPRG5fk9Di",
  "key25": "5sVENE6EgPwXKG7sooauHJgHMksTia3jR7orJGJ92fCBNMVSWZ79CgEfAfs3oV2esY5zRcSJch4hf6nAxYzeAST4",
  "key26": "37zEnTaXrZowQrVAzUcDqNBo8BRYcmTDFesFuEKyyBMAvmoi3ndV1YQht9LkW86eitou54xL3TqTKF17MKvPKAyQ",
  "key27": "5QuhrSq4ZF9VckydxXWav2VbqsjBLq3eAgtrhzT2rnqpRBoEGZyq2nu4oDMrC2tQkd6h2t784fJLEKtwbkRDP6jX",
  "key28": "2buQFaqVF9zkkcxQbx2qvXUV2QbeY1LZHMqUPqpVSJkCuPrRkG1eHPC2EioMeC6k5mWJ2cr6Cb4s3Sy9CSuR5zUS",
  "key29": "5oynFB19TDpps4EGcnqEuWsX7EUbx8VoqM4eLd2685XzGXknjc5ofV2Kg6vd5ytbQQtAeAwD1YqbuYF4h8M2aYJA",
  "key30": "284QhEixuvoKTtjdNqJMzELzTruuUvcRLuGb5cwW7ibjf3W9sAh4HCq5mPjE5S1jZcQ3AnSCfFki1sAbdat46QQ6",
  "key31": "4XqSKFHB8x9JMjan4SVA2t4vqUmwR3knSEQdxDhsGboCmrYrkR3v26wQdTRz2v7GekwMxyY5mpFY9y8smQ7tkCTE"
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
