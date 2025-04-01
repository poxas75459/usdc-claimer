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
    "61wLyhigxp7TfKGZb4DfuLPvWhvP2ike6gAeV1PkXPoi3efwRcjS34c9jeyQYrBTdAMjgXSneGS7utPcyDZmGdFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NmjZ6DyNTrBUB2Bq9guRWCdsNiioWjDsHY3HHcXNsvCSZ9E6UDiMxjYQauFegSeM37nn7XbSEAYFqcDTKfJT1VD",
  "key1": "5gn7NcHZKnUNhLL8TU4eENJF22Usj7nbY9zZW1HfQT9hSfpzkAARvMvFMYQj372xVLfFvs97YUsEFQuNRtErMwDU",
  "key2": "3ET8Jn99e6cAYXUmgtskHVETQrhURbvJUKA6Gn1STBYgnhJ3EtmsjHaUSwF4etE3iU5P68JZXocfCbVq3aAoqKnN",
  "key3": "89pydxtxbuuuu9jKsV5DvofQHamFaFcR4776Vu1dxtvV5HCtuhfJgJRqV9fRzXiivVfJpBeWReF1bjYQ61og4Km",
  "key4": "4kfxA6qW6HJi12LCtGofcyAjuFPhSDeup1Aqukiuj4RnUY2W695yw7uq8a5KRSzVd9YXPKfCJDiGNBu5DCUEYiLi",
  "key5": "3w7JJ9tJNysphmjDTaayCb6pw9Yg3JMcPabpeLCBHBRDFwuRwZYnCvw3DoQHpdpxQvmJMTRizJVcvR3fnkW52XKo",
  "key6": "5ScE4gGmmhQ7QXSuqPiUs6W56RG7FhEtbxbb8Q5wHYoofar7konstvgjJ6zChiH9Ft1FbxZaLzkTM5C1xsamYyi4",
  "key7": "YTtMewrqy5PxpfQx1wusZyiaaxLrsJfAufTBixzgm7HY7qtbjFPHMkNBvFQZyuRzRzTTrybuSSDovQxMdVDABPh",
  "key8": "2cBLeX4PRyTqbMc6b9QXJ7DVgcVrhSJLypTjVst4eXrm2HyqwRoQQTiKiZovvFuR2a1VcjwZgkB8yoCJ6csBJTLy",
  "key9": "VeNhE6zr7dEByYQHBof3sbbXo5QyUPwTZhvPxABrCAD1pmQVhuu1G6hNkTAJmdrC7xa6d6FcKCjBpzMKJePGo1V",
  "key10": "41KVrsakDaskMhCvx5nf1nU8ywxV6p77FnuopmxWvvupTPfAxVthNb1YeDKsTn79ySqGNFS5JNqnz8ZGdMmEgNZT",
  "key11": "CcZdYQXUJKKwBawqoq3REFDSFCHUUnSTnULPuadcWkV1AdJVwLn8imSVAwRpm7q4dzfRKezqtWk5wYHaD7De8sv",
  "key12": "yU1pvJGSyuEiAPtCMNB7pS1hw1LDGARWzJps9kUxG4rcvxsBQNLkGKDNV2RPSYCFtnFCpWSLUKwBjLMLfNN24dU",
  "key13": "2HgKAgA7Yo7P4TDMaC4AdTgAqvvNM3URMQHooEi6NgM6TxwskjEmpPFg5swEBgu6aXimu7xC69qStR1yoECmmsDT",
  "key14": "3uLZJzUzQ5QAdZC9YA7hC4j7w3Jt5NPN4snBsAmUmJMiwFYgGogd99nWxuHeV4NLeEW44VsMbJUFnt3Y6B4Mgqk4",
  "key15": "Cwcy4VeTvCvFq9YZV5vBwZqwGZSjkaizd5hjoDxNDzCamnPdmGjYhYrLx1VFrAYMGFDrWgY3vmuaiVZZtmwMEWe",
  "key16": "5RQDhDD3BX1o8ab6DFLSuRpGnYBHucDhQj1wt7a7AKYJMCx1CPgda8vihsJwxwN1A4V1p4G3TMs9cJtBvGVCXati",
  "key17": "5o8CXQzAge9qQC9mcXSKQhm9nnNj5JEAEY6wxw13a5cpPzpUCe3EZ6MQVji3sgRGL97FDRgqSe5AStM9aapPSUYm",
  "key18": "4CyiPVgxzWZw1r8LgkbKkBKEuta3SNmVTrt9J8TP449EGrxsq8nnzqJtAnANLuKJ7xbyZGtyDQgwTeyABYvcyHMn",
  "key19": "38D4UXa5xx7PquW233szhgSvJx7QipC4jCPyCwcB3e4d9oCx7r3a2sVPChH9M8UzrcnNXYgHbxzaoEJmU4Lt92Tb",
  "key20": "2rKRYEtVis8nxfc6R9R5j3wb3E2NxaLD6NijzwAfiihFH7xZ52efW8khykdeDPMaPkmsyhVzCgekRj2sygRaiGD1",
  "key21": "3WBvLYnhRwj4q88hh4vApszwMYVWTyvpbDzEAY2nZLRC2BZH8fHXrJEvctQUB5Af47SeBN3bMPdzAdH3j7mA49q",
  "key22": "48pBWsjHWCTKur8Ri5t7tLEVDqvBugZNutoTa9pZbeGBfksRz9MW2nuDcrX8XLUuesSk9Yy7QxNAVRbgZroZKNhY",
  "key23": "4ZSVgGAzGHzPrxicZjNRBNej1bpMfHk2NDAv9HkSyHFY7SBLajrqS3ZqUE8SKw6ARw4rmcQWfKF6dhaKFXNFB3QZ",
  "key24": "ov6KBGgwsqVGVjDSX4LMjzVDqdo7tw1cC3WVGyDfE4ucEJB9fmEVSBjxVrRgE1xQRnk7LnD8Zo7uVvSgj3MBHec",
  "key25": "38hj67FW8gs4QdCWcw2i8AG1rocXQYXijEpfPxRHKW6TeSGeQJ2resZLsWK87N5eXx1LDGRn4mqrLsDuePTRSDwv",
  "key26": "35AsPks8Vyn4VeSNqJbt8Wa1z9ixxxwfZccoMfjgmK1nRQwbbWkspEjUgAQvdzonpk9fG51MhkrtDKq5s7Qumub"
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
