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
    "q71pzjdXMa5xdRGYDL9i7pdnxmQfTyZjj4f3UfFzvThTR9DCsXmF24WokaHaAjKmwqkWhkdh9pQ7zo2kasMcss3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u7xj4EHw2QnwRgNbES4rkcK8izNyiTYYsm89TtKbVLA1k459Pk42Bnd3KYnGxZxeuTro4JHYPzqaHvVNKi1knwa",
  "key1": "y9tYKbryf2KLdNEpg8V6YLhUKSBvWaAUhLaNjLiRHMGkc7DVXX3WbRAt58W3okuuDN59MsgttsSALhmFLo5Dynv",
  "key2": "3acYV4TfCiBPbVuU5mcdZVWz728X8CKLwbbtSDmyTnTPWxnuCB9wpbKCA8ci5tzZZ8erxYsHieQiqADs8WTypK6Z",
  "key3": "3vXx6Dy2GRJ4oNGJKCo8ZoE7kMaJEwHyFoHVQWBpuFWg3FMPc89tB9Fp5VqNR3hQRbVQfrFborBw7nYYPjAEWSig",
  "key4": "4XBg2zKAg7z9BB5petrVzBBHbKwjcV1caSV32x2PR3Mu9zZs3GznN8QNsH3aK8n2hv7FzESEySv3xgofAD6AVXL6",
  "key5": "QSwCywhG3CNEMi2Z9isz6LQvGv7ArQfL95L7v3kU3L3gCHXetsmsHNdJ3AK3tLuhX7SQ6AieHLxids2MVw6od9y",
  "key6": "3F2s1Ck5qpWjEEgFzuXcebEA42ZR11oJcMG6xr5bL1dtB5ySBDbBVQ15jKL1DVJ2RvAEakSLJpsZmQpHkJkVtKb",
  "key7": "5RccnbnYq6r7Gmpq1gWWpFUNNEoXUGqDvRv4JvZm2SPredTS9tfHzVgGp1EAqFTqVwnbsB8BYwrttQV6WEGmBPux",
  "key8": "2bUPeegQ8nd9QoC7qMr1TCzC3VvodzgUaVhW7ahznMFhJV2LsAKFXUTgW231mhSXT1dsd2dtqVvX2VBJcJVJEyHK",
  "key9": "4iwN8uZx4pdv1KDQedoX7kDavxEHdNRHpSdw9LqwPA9xDR35M5ycraRYAUNCJhMjyCxNbmJ6FezfU8E2gnsaQQ6u",
  "key10": "45n1KxuV8s4cFQCHjm3m3yUKXBRFXtoQCiXTK9kpaCR2k52M3MvxV1jTCKMMTYgs9hhEdrjebMnzjtN62RM6pKx6",
  "key11": "4DwvM61X7tca5QzvttLp1LzvBsZhnmKRh9dScQE1nnMC4mqoahGQgKetnCP8e6b6s4kGyRaNTNLv9HfwAPSRjdZD",
  "key12": "522BDcPbTjJiEzQSGrdjQoR4EpuCd9ebFXfX9vsfWw7J2XMbSLAYe4ez31MeyCfaKDr6syhSVQNrGvE3fpeEW51",
  "key13": "59aMA89sxG7Q2WXv2fXvE3DYEPdSQnrcD9xfpMtstfqh8kEKywQu8MwFJrN1oHC2XxdFL6pga5F8rvt8WpjV71DG",
  "key14": "tmA3xfeJp5sQFia4ADx3kJzvuzHSEBpLH3na7SCKM86s8JVtr2Z1SPCh4khFyP88c4rj1imwhbC8dP4PUS8RKXr",
  "key15": "UsNe2VmeJ33GZL7xXZ4b6jhyDHBaDdnW2XQSzv4LoH61ZVTMRWR33VR4J4Egb4xFx76FURm8ErHyAG2mmRjsjP6",
  "key16": "2rysqLg9hV2eRvdBf61PwKaSztsVV5qXvwUpKGGyaq3KpcPTZQkRseScdik8WkVR3jxRM7jSAbJbpSwT8CMD6m4G",
  "key17": "36GXsVBdsEETb7GRkSrwAey9hXHUUrMaa1mjJdXz9s2CafhJk1GyjbXV1RFBA18BMMCWo6gpM943rJPATGrWBMXo",
  "key18": "4qghxVw68jfakzu8p4YnxkWGTwj5pkhLQASLyvBDakD6SHnbzdZdW3uaKwkSUadsuyKk5Dw2suEjFj2Tip9PwZLk",
  "key19": "1DDtx5b3s9k3nng6XLSxbheEAcmVW3ekF2hXSt237KRVupBjw9PChnzgbYj7z57iLvXP9KMkfEx5iGSvCaXyZGH",
  "key20": "3jdSyfLDS9Lz7Q1ikMQt1oJM63zFp8ZY246jWUnvU2NzvYTGWKLJHwmqJT9qmnS5UkmunzUV7gwnqBk2EGVSzGGx",
  "key21": "3RuTsE83h8LzPAC8cBmrwKENgUQSuU4q88S6JDFyKg9jHwmZkyzn7FofLX35enc9vRvAi3hTAcWPiC9fhrPFSeeg",
  "key22": "hGP9rudvNTW67qqNkWcGLfG4un1UXmzpm62eftUXgTjk5bz8RY1yJNGTH5rMLkiX1dcTpHrGWZvV79nJq6cRMH5",
  "key23": "b9SFDDiCDnT85Dpq1Mo3ooxhhZTkZvpoCQTDLTqdprMUeSDiJEHcMGZU7pWYfhhYswLdopYxuAinr4nigZ6aPRa",
  "key24": "28KeRjsYF4oTWkBc4bSah5SueZ2Rpe7YdZBJU3hdp9bVy8LJWcm2qmeaBwuCXqvtPoeUuFsZRT44ir9jf3woRk9a",
  "key25": "3gW4VCSB3j5bWECQx2f4kt8FHKcrv5QTGwSkAeAvmEMgXVXDti84frtsQWYp82xUf3kRijCT9eqNMsGtNnqWVJHC",
  "key26": "35NYi2d8Q5UgQLbta5nHYj4kDMxnJNfFoMDPJjab2sc1VFY1UVW2FmCK931u8sdCGyziic3vj3q6b5HgpNMSDPtq",
  "key27": "4KYtGDjFXaZzXMaAetRB7CCjpg96MhSMPfAafTxdpZcdrWFbNkhETM13FTy8JK3VxidZy8xNmxuvE8PQ22eAxp1q",
  "key28": "4keiDZWJg9pGuhn7RJkfZmofn1MTALKFdDVowkjL9YXxQjV2taTJtVCaH9w7zG5neEe73Vpfdb7ssBwNSARcwvDk"
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
