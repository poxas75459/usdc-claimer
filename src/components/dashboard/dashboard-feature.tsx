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
    "5EKKg5kuyow3eARnSxTGSmH3S7c5AT2gzr2uxJAXGoD534Lvcto983DrGE9QBTCtnAgJeBXeP14XRGPRD8uKgrtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VSXzUNS68szgNPnNyRLjXsqVKy5epeQ9tMQUF8Ztw9Q5YwSUiEoqAQnSHz5GdtPSJsRn6jX98gAhmAvUcXvRGaH",
  "key1": "4KiZ2J68qziz4SUHPRZZV9D8mgZkWuSMz3Uqo6fAEdYcqAZpvaJPHXAsaarFHWdzmfGTmNnVrea815JQH6JEC6VM",
  "key2": "5Ay7XjaF1GjKwEWaBjwSwphxZXJVfwKVabNkkf89BuG9MfYtmigLQwAMtihPKoHHaKdckVwZsgtaF9V9WhwPTZM6",
  "key3": "4rnsA5fW4pEfCrpCD3ejVGdVty1RuqLUbCi34z2nWKUX3qG5kG5AkiJ4gDFjNrevkA9ZFjPPzQeoWJndrDoAjJ42",
  "key4": "5Ai6vVKtxrtEzMGY81VzYWR1WAGpsEDsZTuxJSnVkaN2niQwSbZ1GyfJwpWFmPUd7HUkxKYDPR5FjfCo7Wb8dT9t",
  "key5": "5wHm8bujNDNSZvLwq2CX5ssvsWSZxfjWHuxkrbbjVe27QqMRy4fdENb1s9nxg3H8ZyPqZcet8YaDqdeTHUZgzfNP",
  "key6": "5XtubLnxtXUYjs39BAdCg71p31YqbRYVUqzSSGEHrE8nLKu7e1eyVDpnJaBT3nRix5dqv1bJEhm9zgvcpN9DzEcJ",
  "key7": "5oXVSPdYxp41593bYozDxtwXeKTpXzKPZDeeXVbcHDQRmmQuoTw5kWpqN5A5LKWByXW5ucLM7sJSoAd9MAsofghw",
  "key8": "NScih2JPZDYbG5wVLiNLkjj3gsuXGnh4whsaCKm6TPTEaEXU8tQYhtXhATEcKtFSX8pBvdtXs4mY2Vt5SL3L5yM",
  "key9": "s2fT8y8Fg41GnAfaemqNGg5Jop89aXX3fBB47EhCQsQw2ecntAYuSPkMwx7Evj5Y6VeTjsSF3tALKsXAzVvh2GV",
  "key10": "2qdtPPX3kejPNAPuvAtXL6RY79g5z221HzCDnLewNyJCBNCksTYiz9HAugzgiz9sguHJRCSZq6YDVdE1wj8ReEUo",
  "key11": "2btwpdYfYtbgYJbYmuH6jtV7QaYt75RA8HLapXmnyezq4UradJKVUAHVsLGYccHDY59Z2zFywh9TyzixzVs8mCFt",
  "key12": "52dKG11m59Gyy5m4mbQJZWhFJEGBMQEjDXLj8ZkwxBs6sT35VHqEjTzSpkkwz9wBk7wqCwmwMFd4KyUZNRJCLbMW",
  "key13": "4r1PTtojyFUuxX8fTzKFu6pY4SCENZbdTXNaF32EgE97SNBsaokXGCQUgwfaVgJp7PkLkm3vnCSKG7bWR39veaFM",
  "key14": "5xmQiz2wxQroP5snvHsVvWgEieARg3pmdZtaAUndHWVNHUmoLEkS2G4UQyj4cTiVpa6Ck6oEAAKenkKuJaftGUvc",
  "key15": "2FWj6R4DPFJvrmxDMoiyhQZsy44G9U8u4tXtfHzATvYiGkT2HzNNedeWkKPjmQw4GUTtf2NhuX3d1XyVL8HSxNhe",
  "key16": "cTCE93twEnNGAPUHU8B42mrrF4cso1aN63bLz7dmPCEJKSbnjdv3ib5ZhP5zzwoYgvuQXJoRewTpvvf5EKjE9cA",
  "key17": "38pdPHxxW82UDirsF6xWuQ8p9ZG77yfBSQHfdRDmAejGZmc7pP34XL9NkcKnnBHB3n3qyRUUUoqkecXo1321xF9V",
  "key18": "5RB1aSqTSCMLustZHfbZYkD9zgeWsPZ3jEbBiRGSZETGkd31bKhf9yW4HgwicJatwmeCa9oUMnEdoWDogqYcUEaj",
  "key19": "4LhFJCdW9112jh5dCpKaw9mFGvjpeGYvcTon22ecdQ8LD4ce9MSAXNhVct1mA5jc7nVBscZzc311QqJNb3CX3m72",
  "key20": "2AhHm44rjYuBgNrEumrMsP3YXPj3ftrCLqHxEbEGQf7fAmppjGZKvsjo7iHP2UJbpWZ8AqU79JL9mYt3zm5saXnC",
  "key21": "4UqnSou7nYcRweBgWcrdhnp1QLqJ6pW4Y3VhsiJTv9JwbNPX7nCBqpkcnWreY9yb18jzd3AZG1oi7HukkQJsURXG",
  "key22": "4jJMaufqGqRCyGmoVSvn3ozG9hi3xffyFkT9GEY9xDfSC4wVsnihKMhRwwVLaiALSYY1cjNNTJQFpb6TEHxVwwSd",
  "key23": "62euex8SDWK6Jh4eogXUGPoqaQd1tRjvNbKrkThSfnTn5k9CAeCSNGMp9eWE3esbzU7PHEX4omrX6WdzTe6piwzh",
  "key24": "9EMmbuWmNmnm21qoMEcC2VnZNuPGFMPwPAwFEvtXt6GgLgCoK4K2RnydfLE5TpJoLwciAnA59Fw4D1LhFyrY1CG",
  "key25": "JVxYo6KSt9Gb7tFg1tE93goBR3Bs7z5CaubXcEXZjwZ3kt3CRq2Sc1oFUrG1YvynZQmP5HA1Got6T4Smuo1asRL",
  "key26": "3ivmK7PVm8GuLs6yWAUrajeyWwJ9S8XywC6tFFY4wCWmobifRjomnCCDcvitUTbqe7rsGz29G4pagsmM4arCQDp2",
  "key27": "4oy2tt8kDANV84a1cYBCVp79eqEBFFQw2ZtmWvfZjAiHDDYw96pGnQKCyWmbB7g2ic8v48MmP1GJPQcutghPbHee",
  "key28": "5y9x5EHBTMLFuSc5Wu2nqSnaNNcefmfMQJ6QpYGwFPBZs4FDJtKem3AzyjJ1nTUPVFGVJK87PngBFLsTAC3QnpiZ",
  "key29": "2oJeeCzEJBXBt939BFa9XefsWWqcJoeDBuwSrpUiySSv9nZv2SXAC41cB2ToRTCELF6b9bm4w5zEZ4rHiNuRciBF",
  "key30": "2K7AYqaWwEaXJSB8Eg2PWud3Rpzs381D7oaosUJg8ZBuwrb95zekHmNeqb1596L4AHAAUgtSem1hq9jsXqJtBCuQ",
  "key31": "5513zZAmYufz3zKgVcPyK2hvqczpq8im6Zyy9mgVATHt93uf6W7HLZVq234QsJ1ax1BkmQ7R4YouBBnj1otWFv2P",
  "key32": "4mC2DfBKdcS2ZxRfUzfmtwJagPovetHbKy1MDT1hCQCwxy7btVFneqRzripbYJc1H8crMaEBWfAyfFm7jUdW2JnX",
  "key33": "T14jxsx11UCrwkzpFAXJ4Xx7xVfDMcqMgUpA6E1dG1AHqskbDciq2QjUgYoKTJhwx9Mp9C6NmzAWECwqMLudZud",
  "key34": "49qXoakUR42rdhK3AVyAQ4wQETPfM1fS8ppPDfve7KTgZ1YTtAWhGsps9c8bgeBhXSCcVAzm7AgYbKmoNDixU1YD"
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
