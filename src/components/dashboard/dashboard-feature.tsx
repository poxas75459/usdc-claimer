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
    "33CHyCwv96Gf8xwBx7kEc2VZRrLqFHq8PdCoFtHvSPNajT2AoWo8AEcfJTZYMexDEwaquNQsmg2oza9pKuSCGQVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NigPpi1Lq6uZT9Aatu61m3cCpNgxB5FHYU9z2WiwLCaVmVRR5rV2gggrgHcNfg2Qxf6eJ3qXt4M8L56XGSYGZSQ",
  "key1": "2vNGb3Ur9T42dRXhuBKeKaR2vwNz8b2pYMv3FgzMYQDsy6fSU4SuC3rPUkVkSzGXx6mLdDhvKhp6bjKKayzoRKoA",
  "key2": "wtf2zibouJ7oMFKrG8VKkPh6N5aYSeVmFSDp1RofASkXM5fkT4MBCWpd2emUzSqRWizTu5Jpv8NfoRCYfNxLtJz",
  "key3": "4m7BfupDPTSm8EQU25CKiscUqMs7w599nB8QZfBodoS7HtKxCpwnuNB8Supy7jtcYFzQMMmr31Gbafn37YCTc9jM",
  "key4": "2Q1ZUruUy3Wx5G5bBo9VKn8qSsGkRHR4huFmGiBpD8VfxoWyqKZewEyDq3DHmw8cKTEqg9Uc3U1QCMJLtRsLnsFz",
  "key5": "3jMj7V9zdstFx8okzXW4B4vkjLmbhWyNP2NQPfmV1z4Bo9h71moLhubdB9erQ2UtnCKj4W52vxyzA1vjrc5APpcf",
  "key6": "5ktXz34hHiGNNW5VgeV2351pPPrJcfcEcphxhzhJzePUGF8NrGv4gopiEaUyPpGBbxnHYGVg3iq2UP5GkhjUtC2v",
  "key7": "2yXhdJabo7Kt1qfo86GSbAMmPLQbwiDmTkFBL8afLp9tDvZRDX3y4iaNkUrfZVBdK4uH1VxBxrC4LTsH2rJgupj1",
  "key8": "3KNq6QRQFvHSP49iQBrcqi9TEMcWWEJ6AEcVywfcTC1QTkbLDnjqXbY5nz1Tbd1wVAQ2JY4BNUf3xNgpYKdZbZTs",
  "key9": "4goj2NDeP682ybiB4RfRa9ZjoVgn9KDoRs6N6gCNRcQ92rV3pDrEdWu9NokDvYob1MELgshKnQqQDzmZ1ftkgHNy",
  "key10": "CngXB89kYLkSScCAr8YrHA7vRf5PVYnPmQMckesUpwz5Ndr8rkFAZb2udLKJMUBqD4NzaFJB7pByjVn6mYnKErW",
  "key11": "476GjjQgnxVXy2KW9FEBKQUreuoqu9sHSsaWXWEsEs1wewAHGxeLgcWUjwGyDn1ftP3ELs42KpT4ZDMsY8hyPFZq",
  "key12": "ozz8qKVhWmQroL1kVxSXfiMAB9jTWoT111KVFLHaAwZgGnEzuJKs3Dfi9jjKv8X7CgQXwX1hZELUSuAqJRbFjKy",
  "key13": "47VN1zPxrdL8TWXXvTksydbHkSz42iSMcRe7i7ddQdiYwvMLL6nzSJ5gx2SkWnbFVnqnE2N9MTRpmWRxweLVvEwK",
  "key14": "wqpCgFkjnqy8EjnBmY8mXpSAYn3RojuwzkDZuriYsZUU16ga1zJLXr8ktXPtanfKhYpcZ4D6EWTQTkVBcuKC66y",
  "key15": "42USHuzXRWZ2aJcZdjpMQCEf6gXhUJ7BkxwPfp3UopQ7aNiG6XPBVEe1wQuPk7Yv7mZra3J9HmRF2HnE4z48ggb7",
  "key16": "2TsovBbqBebNCKuErzciUyKxhWfx4C3nvEcnbcA1cb1JQYBz5nTLxWFmpfKVaGiTqxXzS6yU4CjVneLR8Fz8oAbS",
  "key17": "4P8971NdaLHnW4d3tr18rVwMR9KuH6ymwoVBTK5BMrT6LorVemu5UA7CgfGKLhQBiA5ncAC14Q4TpT7xo1QQ6tYq",
  "key18": "213nYRFUsPx8wmLWDK2eJDzHRAuLf3AtL2SmAGGmhUSSiyxfWFNWEPCoBftjQfCHr7afqx2uGeqn7uSGh2j4LVYT",
  "key19": "WvPH4REyYYYWhtuDEix6gcWLZgjgK9uYdmfBUofdBt2TdXoxaTTUWbAAFjMNX9KQsbb1L6BkEcaJPYwTYn885Z1",
  "key20": "3EyY8HAZdBiA2wZfvbcbzXqiDq58vxEj6NaGMKBviwsK2mcivbjPEgmHFZza8gaB26bKSdAkKtXts4UN9T6MJ495",
  "key21": "4275Z2MbCiw4BAGRtunvhnznFjZiah9vvnZ94fJCgpQKTsc924uJkNAijhCj27qPvoST7FcrckXypKVUj4988LGV",
  "key22": "9jZPzuDJszDiHfQKeyPrLQPKc7Ed21rVVxSNKbZVJUR2E8mhqgZrEjCu8PkDKQ3s49YMgb34AH6E6cEUdWUbeW3",
  "key23": "2S6FJzTNVDjxr4xp1ZwGRw11fhyk1agDiM2rmv1UZ2Uqqdm6zrA9Q2AYSc3qqw7d9NQTpZotHnS1RGjYQgNdnW5k",
  "key24": "3UDvhB6jTSc6tBGnvdijFkhLtbDZxDKXsQDxVUDdGcsdWQopXcmqWSAQGvvgYE21Zm3oTyMF5F78ovDsG1kC9jSy",
  "key25": "313scXRHTwB4AqQpzyJ5sQJVocuwAjkYTUjQMZNMrqtHoLRF2AVHEdvzZZ3RyG9Pee3ihqM4adNRZXPHszZKgyNM",
  "key26": "41kqVNgyhJjCRnzrunLbUzWBCSBAk92Z2dqSgF6VGqrQkaPmJ5QSB57Smqxq15a3dt2VFdLi6NU5BTz8nUUfng2J",
  "key27": "4SaLzRCZiXYyA7n7c3vrnhxsAHAhdECw7LipssqPTtn5TMzn6Jiug5pJzmg4eykAKL4UE5tVX5L1wp8m5mUaZxTd",
  "key28": "2kgxyWJhALWiyx1fgfAG92fXASoZ4MYKrcGSSLS54382CHEKy3AAiWAZDMGxspjAe7xsh7UxqgpHpjqJyC1iEvxu",
  "key29": "nVCaU3gz3UxFGEN7yx5eRuwE1DhFVGG4hqwjNumwUv5MNQZFcJiERvE3fmPo8u3tUiZJfks8GBCMhopJ2LhNH9P",
  "key30": "2ejTm1XhNuVJaYW3z8b3Q1imnJQ5T4taLbTosFkdzSuwsG67PXPsMeEft1ceVZMoBLy9Vf3jH6A9P3eTMqVt2nbz",
  "key31": "2gc4v7cVPte4PSadSBWpu6bMK9MZ3am2ad3nA6LZRZJHxpHaJN8jRYKFZGTJcctRPS81AKYhrdvn5LRdoCH4QrHu",
  "key32": "41jhqjJNmPgbtkRpHtAsw1FNJQn8rAZG9YrwTy3f5cFSjn5PAbZaMkrNtpm3ZZS3N9gCWJWaiby52rZv7LjafHKx",
  "key33": "4JifNLyr1hUgDFQjDgjH9yvYLui76CnxioJAxLTYQe3C2iXFCaogRJ9PSBL8E1QMYULVtQ7kepvg9riCW3Yn2DzG",
  "key34": "5x9fLwtbeV6hY98Nje882AZWDufxyWcqQhAgJKHjaKbqMoaeSqks3AaAuAZvFqhsCgjx79H3CfpntBxYmqcvzdss",
  "key35": "51PRqrrLc7KqHsyAMv8iYJGEUWfVwwtg3skkX4YLZ9sG7rnCbeD77KP88cR2goA5pTQ8r8mVjEh3zqhjix7K7tiV",
  "key36": "2aWzGWLCgJZr1FqzyQEsM1mB74yHbFVKpQbA8sRm8WDZtM2nk8Gqgbpzwe3pz2RJrg1JUhhQheA1CHBDSW3QpzBN",
  "key37": "4DEFzx95eaxdQN52hqM9q4iKa3eWYXerxt3pp3ZBrW5qhraBg1eJ1Kk2goZh6epWuwD8bnKKhp9j9VvXS4Y1yJyG",
  "key38": "aAQmX4BfXJxyU5NQpLXMsb3Wfs6UwvFdP1TdhnDeTtvfvD3goYT3g1awfR2xauTo7wCcrCutxPg6sSQEzsXgnSK",
  "key39": "AG7Gcf9qsLt6kg67PAEscL1Ae28Lqdji1CcTkjX9ddpMbEUJ2Ch8NNPrZANRqscQC3e9Xcv2C9KairRuJPCPQNg",
  "key40": "3iP3fUVv5ZFYPFUvEAwRmy8L1gcHP7eKkEfz8FUfK2DZY1zb8C5zmHkGto5BxiDfgCPJx2o7w34U8XTCkz4rSgAw"
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
