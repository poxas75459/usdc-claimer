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
    "3XeUiZtXPJ4CQi2Med4GUwLJiEEL7U5ps2gv3rurFkthe9bbBHtPoFCwh4vFxRkypU1Fb7WuGw3rLCQMqwJeUR8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dVyYRJBiDFN4doabekwVXFdPNBxeAFQZGG7PUtm1bfs2LQNffVz26ws1VXwQ5qqX2jgMaWHPaoT5YZdKHQtTF2M",
  "key1": "5fvrQjSxFwqbZY7ixmSvgfHRDJwsFiUwBa8otUXygfbnk9vxAA7tzDAsEGG7tLp3yZMF32toSs9qeWPhTwZahWPD",
  "key2": "4TqP6VzdZ1ctKwpBma299ngCwxvnki3g4ZXr8k5JP3VUrMiGuxGkzF3ZwjAwzDdr1rVsSeWvfBKHtrojCTSFTq7L",
  "key3": "2ibu1ee8xroUbq2EXsazA7CVhnH7AYLvj3rzZGu9d6WBNHj1ZvE7DpRVuAanXWdSqfoqniZyatmFrixqdNcbdAxe",
  "key4": "3fxiLCvo3LAmEQKATHfDPUV1Grw5kvifccTtormZNnTGWXv4hw4CVFNatSpH2aGPevLbWZQzixfkrhGQaGvfvL5h",
  "key5": "2ttXdHTFANXtCxQa7ZJ9sUuYb6DGeyEyjDCYN6JCzj5LAjMsxoLvPTQj84jcQY2EFDhoXAWQiJvL27XaT3aN7TuH",
  "key6": "3a8MFc2oX8p8HZrSgeAs2AhxCAJBwx2nErBKoP59E6keqrtksEUfvvhP7HX6uNFjSbH2tDMXZ5cWLbM4vHGirhR2",
  "key7": "BTvnyaH3eKaAdh2pYN1HBqXPiS3pqNZXV7WKza8MF4C5DkGRg4prC3viJ52RHg9uVYeoUHnDUbzYiVVqrEpn7MY",
  "key8": "2iW2u8RYd962RyNZCC9yzDe39Eg5Srrxq5iSgaVzDXHbcQDWvBjuzMvWtUHfgxXsZE6Vzp7QNhQwgcieQzP8Y9L7",
  "key9": "3hRHEFKuGmS96pQV27W8BbeV6kserp1tFwpoMeuCyAp7d2jNcxPCmsZjbNMJbRc3Jfzmd4gNcdxdqgxMoCYdYnXy",
  "key10": "4ttV4YM5vC1WY3dgWDvbEKF5t1egw5TDZbQaDAGJoSzVMK6ugv7rZbNd8Rt72XKSeps4yPFpW7k3YVsT9p8r1nGs",
  "key11": "3hqqGpz6EZsjqVKnLfKFXzoF4EHbtwotPW5S1TYsvuCjgAWYEynUGBBVeRMR5a1CXfCshBNqKjLfh9HhjefhE33f",
  "key12": "2TRgALGnEqw6UT12Pef3iwHgddVbwUkLUfpTp89zZE9qD6C6Yyk7u648x7uDd7ATcQDgUYed7c4ovx1HPcKczBqc",
  "key13": "4jxAVnZLaBFU3fZ9KMAvpmobV7oRw6ELykA2pPH85Y4Hupx3XJbg2z4oGVRUAe5g3DWv8RgNtqQYpv8TXScsoov6",
  "key14": "2Uvp89t2KQGpXFbbQ1cAjafS3r7CfZF35nnZNtRLseeyq4uCP3dBzPCZTzv77CgZ8d82vnvj62yNhRJVRb82b1Ei",
  "key15": "yHF5UNLBE6EzDb51QnmnMwSa8R6KoEzZ9aHeVFxwfg7YSNLTg8riRXfZbHzQBkj5TDnN6ANNkyWe7PZBhokU8L7",
  "key16": "2Zrz9UGSvSPRAXCwqCmbjf9MCbDorny9bBwwRq2aH56eG4pT1AYkVY5Nstr69K7Hq6iYxsgrPgh9TMgpiE9aPGfH",
  "key17": "3zF7JHpyndSpYatH6b9iprXsdHWZQPj5U5KMZTkaZWEeM2GmqRnY3J8635CypQFLiR9fjntVR1ENTjiRm23WrhLQ",
  "key18": "4q1qhgr2W9G8HQThjkH6vLMUf6Su5ULmiS9gpcDVZmKSgEqJ7YbtKHEVCRhQ39vnprjgKJZbMnzsh8pYg69pnoyX",
  "key19": "3cwSGJZXckDoFrG3vuqnEJ5NQnYxvVPia53zbSqYMbcNCWzGrzDFoZ3agYt54kJYQYNnzKRjmDKZYTUK7xJfZEsB",
  "key20": "4JwQjLPBEke562S7qim3wZDLg42HKNSnxbxu5ybwdWPBbvtZxCgi6QaW7zEJRY1bqniNL1ZwaGU2UccsouAkiq1L",
  "key21": "tuQM3NTYX7LbtPGR1KRMhSKwiX3RyYguftw9wRxZJZQaxMMd96mkEXnDsaXmHyoto6AWgdrFbbSVicXSUyNUKsk",
  "key22": "Zgmur5yFW5U7LC52Tm1TbZTMfzGaAKC9iTtaiCMPbgVtV7HrUNFBRw4DutVhsg4WeDpd5eFrUZTtodD6u7aCwyR",
  "key23": "qsAkuEBx7qQUvujh7XhfWj1rA9BVqAc8HYtVKZ4fpznEHW85KAztjyXawuiRSqA2RKUhEXKfkv6wjSz3j7Rd8tQ",
  "key24": "KAArMASHpvBYt7tGNQUgdPqFhMvYRb2511RuoDouJwtWjoep664qGeL6Cx1am2xyHekGKm8PDg13yeFmY9Fgiqj"
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
