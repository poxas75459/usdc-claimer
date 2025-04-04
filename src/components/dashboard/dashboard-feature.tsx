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
    "3aDYvyZZd5eXYXrcg52vG2eACFZzPJtYHgaD1epHHeetbgH9t5rcbFpbtTQ4H3vPcMc17TWmKfKUL2AkE3pShXtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yefRYvwFT6Q76imZBzKFPVQNDppW8ppxk1NyRLAay9WdQRRPpL1pF85BWrwpy1ZSBhirJ25tH1Wisa42LDRkPqn",
  "key1": "4GMNMVe1pzykSNWF4tcuXL3rWkJfdnZhxxMU7q7j5q7FeX9HgAbkYn6KsV6eGpoaMvAUYqFsiY6hEfcQQdMPR4oP",
  "key2": "2TD6S7c2PTVGwKc95YS2ArP2EUHkh92hhTwPtPkndxFiTVNci9HfGvN1ZD8QF2jQUa9TgSByR6UwmQ8nv6sfRnTf",
  "key3": "5MqCePxLJvpJSEbagK92auCAxewxJCY3yQyEKvZCxo6QaL8MJtrP24XKYqkAKgaz92sRESoNEBByf4CSu5d6WBNM",
  "key4": "5gLmV8arHkAoKe5MireAnt7H9VWbDHyQDrbReivHp67i3q7x1owVjmjXGhHSP2saqC1iWPTJoGRR7Ycb4dnDppAc",
  "key5": "yTknAGWB77GbLtU6k7cWrkdLotPMmrUYPcWu3LqinwKZWuz7nz5bMmvExtBQkVcr57oHjPf47LJAS5qEy3YX9DJ",
  "key6": "4HMVP76zDcFmvfXy1MFtGF7wt3iJw9jmioJhn28gXY6nZCWpGcWgi6EuPk4femGMeCuyrqkFAP1hkqVmWfyasgDY",
  "key7": "2km61WFXsz2kjLTMCuYdZyn3eiQkNidscv9MCKr2KbqBkBMmjTM46f4ukVihZU5pzdWeGCdgX3JsPvjrzEws3NSZ",
  "key8": "QqXoCxCFhjiX8mNiN5Schz4qNYmP4QDFN6ux7jUprLKUGgLqxpaU73qLtLkJBjwmKPmBZx8oXoewhtTi8DX8sCB",
  "key9": "3e1v4V1vw3NRm7FNLirWtWyb7sBRLodaVvbNJZEVQXCHmNXAbuzUck4117rebMj8a1uDRjZaQbgQAS66XiVchYea",
  "key10": "2FZisjUmJnX7f2p5NUBhkp4ZW3NGVUpGMeroSxZugxhRxiYgEuZKDftX7iWfWBHb9H6SXfr3Y8iG2AyVXmedfC2J",
  "key11": "5UUQaz9jRUgAfFJuvJaw8miaKJkWPsyL71KXn4JCrgBtkgzqyfhkkHr7VLwXTUudGbqayq7sD7t7G4vKRTMuATrx",
  "key12": "3ihncZ1QyhMfceSDhcUyiisdigaTHNyRkUwCsuLbcNUBjm3wnpKVNFzmhrkokDGFcugcqqKXa1KTrc96k7iU4zhU",
  "key13": "5u4JrKn1jWXrbkQs3bT9PU8fWBK6k6aPJWagZ5cgQm2WPpndx6x9aimQ3DjpkmvaZvk9qmx6e2Muh6jrCxLTx4jP",
  "key14": "3LdARVNpCrnxi2JuBEevSNvoNmHw8Xhgn7sYnD7AA4GZ3pCQsoY3ENyBhDdyuWkWj8dXcJgtdsY4m6958sUosSYU",
  "key15": "TmyWHqjn7PAdM5FLDWqKxZjMVq1HqSnVi1qf5NueLv1jQFjwXZhfPiNkegQoxzGfmgmLVFD5GixkkSujBCD5685",
  "key16": "5Rxs7LtppYdVbqJn8QPq5nQWM4ioihwFnaBqyTu9Eu1n7Dk3cWfM5befVqUHx8EGiuqBzNZLmKUpLaSFwhViuepz",
  "key17": "4pK8B8uTAMTxioRe6JodPU1EaAHfuGfuzriByDGjL2dkxrG4j3opWeELpzqJdTgETb4bTjH9Gat7Tvo2aahwKDVi",
  "key18": "3ps9QBAepdghoG7Q8nMGPnjke29kn7M5ZGcRAUNXTA1E6cD5sXi7827KmYoHsDs2f3c8y52Y86EnvYEZJhvzD7Zf",
  "key19": "PDpRUMev61JAwkCfX2rmzozMPPWk2yJgZRJrPvc6ZfBPfuhtgmE2aikzoQFdpzycYGSuc57wb6Mu17mRmqAZ22w",
  "key20": "dc9HdMymjdFpyc5fmnHSVdmi8vjt4BN5gaYsrSZ7CjcS5zcjEmk5MEELh4mAsQg9mbD9JvFcf61wi72aFMBE4Zt",
  "key21": "3mQiLZC4ucCuTu2VTDkxh8Kg33Rau3sWiUjo7WjEHZR43wYyWvPUytbj9KzSdWwKA7n6sezaZrQtoKJPd1U915S9",
  "key22": "eU23ZogNaUHye2PZFihU4EeVvcpA3PX9W9K6FTnFux5spRLdMareQ4u8LDd7UhMDrhTA92jG8L6xAQWbH7RqDBc",
  "key23": "2WNY5sYXpfP4s1zBAWgg39z9eqyANoS77zpVFKwSWcLKqwQY4yEzpoET7DPHvd3CsPboYV8DB7MeZKkto4piHbhh",
  "key24": "H7afNtN8KwuMeWwtvMLtLsyNKuhJP2kJQGijk7GpDSrD4ovnAx3X87Gg5F2RSyteHAJward8xPNLV4RqercA9D7"
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
