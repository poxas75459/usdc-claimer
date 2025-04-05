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
    "3w7FGgSbwAW4AzQ2Qz3NE433mwhWV32doE2e84gFgwufoEPXUMZTWsdEhEMivAT5AVPVjjTqrsTobZDHLqrM58pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkdeAxqzVbaq5fQ7y3YRj4BwJ65hUpUigCj9u7798KKeDNrZhVy7VDegj9QjB5GGdCvqctagATqN9DSVSi4bfwT",
  "key1": "63QjYQ2UVy7t4rvRPkFDL9et6X7j5hUTmqT7piJuSkxMmMPbc8npwFo7YC8hGQzrGVKTUJsJd5LDDZc4URGY3Ay5",
  "key2": "5SucCodDoTJjy5wtsyYh5LHumpBEGKYQhe1hRrpWotRM7bZ3HRbkb4TcXHKc28sw7DQrAEF83BG2gKwLPoJpVcoH",
  "key3": "5qtzJUNiW7HewFyWaEtRBPkXBgSfPCJ6feGqRwhAKgUxV1jyHoZsCVEqFaDEa1F72yU9A6adknSjjFDTVSSAYUFk",
  "key4": "3qScPTYg5QRPiuE3dAeecBZJk1wJxpydcWwHgzVQn53zfYxnwA8sEdyHvgTqEFPaDVXJoNcPYMeS6yVebkFeNExf",
  "key5": "2cn4sSFKU5yJhAkgweditdiGERqHbbo6pp76PufBEvTBVEjCSjwcf28MSWwrY7c8GQtbqcckDsL4u79hWzMi2FFH",
  "key6": "4qHzcJuxL3jsZsnnwVAE3LkfbRgKSxDZ8d76Y95v2C6wYuLmd8RWBYcUP4QDFJjUd114HDBATExFgN1Ld87Kzroc",
  "key7": "9MrDnifNrswbFNfqVzoCaLyqYkkzZx4BDSArukwDuS7CtzYZgNpKu2VzweR7iSKR19UdDYfLX2JFkfjM21Cctun",
  "key8": "4WqL9g6XFnGxBNhNuk9SEB6buYqaXhcojoKNzy79km9eUAJ7Y2ekFo9veQFEGhPcn3NL2J664ypXR6B4QraDtHn8",
  "key9": "5MTcnGzwxEk8Qve5JWDQc8QNGgzmbJzrGjrK7LjZ1pq9EHVGV2PxS3WMH4ojXtRr88W2cw7ReVdGHATqi1ULEwb",
  "key10": "5unkyc9DmMq61RvsiYYT8dDscQdhDF1LSJzreDpNp5czZcqWMfxjkEhgPJMrHyqHEf91nBiS88PekfSr58a7A9QV",
  "key11": "5RcoGLgum67TbpyK4ecM6sYi7wHr3eyeKaaakzRnUdrok1JrSkk6TrDkehKS4koxsyKrXKjfT8k8bguKJiKCt2Dt",
  "key12": "4B9qzgrUtYZ414QJpky3fQvXWVhbfq2yDmN3EzouqtXtFdG8a9DtmU9fZ4zgMhPH55dZ9tJmnKj2DfFJPHFiPV2u",
  "key13": "2KDTaT98Ed1rm2hYa274T3rS3iCbt7EPfm7bhrroCr9pvB27j6WJhnNMoiq99VWBHqosTnzB8rF3VJLpggSn8gw",
  "key14": "TFvwFNaDpZah9JeMNejT6kYvJaxG9wizsKgtVrLtwvxxfK4pyXTjk91jBJcRvvxy9xN9gZ9tqbmN9ihDuqYtrA2",
  "key15": "4Lc2DFNcJBkAqgZbuV7oS9wHqBW3bcfcyph7Zy3oDWDeDGTJJ7dxGRUS6ycty5fYgLAKEo7psFaqCQjxNjCMwFr7",
  "key16": "3BPNotSQdSeE7iQgXdQn7KdHhRBVXGAVN9vufhHp2h2mrzqvdV468SXsuSmDxHY4nu1NVnZpYv6xPMbsvRoKiqHT",
  "key17": "2kC2Q4QPBNKJRyckmMRyRc8kicHphFtMffnxo5uA6wdQ7jku2zKJomPBY6MapE8Utk9j1eXyfFfxH1SFzfso7ygZ",
  "key18": "3u68twi4QwfuyggtBxojZGQJu4rdtHsKxXQRvequkJ1Y23JY4bvLu96aDatteodSmpkoBGX8Jb3Cgz9WqiyZQkp6",
  "key19": "3Xn8cwCuMjFg4mg1Yg9C9FdqDMzoATko5GGKSgtyUw621AoY7SrpMqpAf7iP7HhhnHCDexKP6jUzoUCbLJWvsqT7",
  "key20": "4Ke8hTh3n3az7froxxGUCKQD1kDawXykPbcb75ifK2RPFKLMjmiTuBMbAnFDZczeUuMNndf6JcUApSeVC2PBXiX5",
  "key21": "egV2oGTmNmG1Minqu2UfXnFycFHwSrNVNGMujxBkgBYniAuutawHs7vVWREMvJ9zc4mSPCfiFeufztdd1QiesLB",
  "key22": "5XMcX7ghPybeBaDFyxgCQaMhfmJQa6PKUnd4zGhD1T4HTiSEyvW1wrS8DNfVR4cpbytQSUiPU413YtKd1YqchuMS",
  "key23": "4ymdWevYugKh2pPw2TYjSb8evBKnjqjfhAGWhsQcs4s2sjJr59W9cGd9yW1Z5iyN811S9Avc8euMPtEqVS3rLKmw",
  "key24": "4tfRwFmSCzJNgv8yo6NNtxCtbvVJG2wXqcnAXLeeyMNmGZZ81HdN6dr66nBfHhhnEGFMjdj3QzM6ct27J6K7NEXe",
  "key25": "3BN3SPCyRw6rSR6cnwnHeLxbtg7pdcZtpEJ4z41Vz4PNnaY7jBewsdMiwHagftx7BvMHoN62JUjMYdehESLAjorg",
  "key26": "3yY1bEMuSkBbCH4e3934QnD9qczvHW5Fwygo1k4UvkJohWZjcCyRsxuFPVf9Vgyvm1BYND9WsszD8AGoHiEnC8AV",
  "key27": "3NPSkWbVhY4AER1KV45JfB7Vx3fpsatjTA3ETRk6gbVFNTfhUjcR9xPGrMv1XvSQax7Ev4tArtGGdNSkWDw59CVH",
  "key28": "2KHw5mLeTA9GxjCcnZMk9XyV8RUfP5mRjJ2vtXsauH3sMScK7R1kHRpjPcXzXK98ZuiMhYZPGvqbGLzhQoBsNqMu",
  "key29": "5UQDmJkB8ZfePGzFRdjCM3WEYPeMuYCD85mv3tFp91XnttteFPcgsKw79c6skCo6zAEFCK857ZZLKF2NKPgmQX1c",
  "key30": "2wWiPcEp4aF9cAywmWAJ2khjxbkYn8tEWqVzuBuFMNMLE7uiqoCU2xNurMyyTk6VohLJ1cPkBTJXtFLNTP73tZwb",
  "key31": "bcjN1k4wFLov4DTqwe6NEbmkKgnz3sRnUFPcQDk33mX8QN9WQRoXy5ctMNWDn3NTy11zPejUVWTTJVB5cSChzzX"
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
