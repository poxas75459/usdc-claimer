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
    "3BmuxYqaME3AAkqdpqfwnsjeVzNqHqMW5Xq5tnp9ipUytgVmL2d4Yqt8okFZHFMEmns2d2iMxY5MGg8ohuBZLLFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQwqedn77kP4KjRWS3ybLuTonPNdL1HXZaYBM6iRhgw1J2bdpTtYnXwrsHfjRiU5QmNnC54KPyss3Wd7YYirrkz",
  "key1": "4yt6pPDqLh7T6g5d6AbmxyaSYexGXfwWDaEwvErVjRWQzStj2qQj8CybFvBM2wfZ1sEXcGvVUaXRquSHxSK22ZxS",
  "key2": "3AKDQtor3nBKmpmibggr8m9njoWBVCRQubed7QMay2LDRUGsNc4tmyV1C7fGKsZ8GzaZNpxqZ7Qgk3wdfcpGC1XE",
  "key3": "9Pr57aRAe8YoJSFnDTWg5Y48X6wd6a9ydFcvGVwUadGNcYw3tnoWUjEeLkS9SX1K8mQZBN1wVxnBYAsHk1APWN1",
  "key4": "4Vgb1nXL9NFKHZwnEwozgh8a9dkRdhBRo6xvtt35TPZ9vwVe84F8yn8BCJCA84xtDzWLspfuHUFmPYdbBDWWzyJj",
  "key5": "4ocvsc1uMQ2w7osNaLgFPhX6GJqehZ9BH5jC9G4QzjdUb8dt2Axo2dCkM28qDhb3BRGKRLjmoLhsF1YhwHNxjXjF",
  "key6": "2BB4BpmEyyPqwFfD5D5CTBibecJCo89U1zTyWd2Wws9Amp1aag8EsPrahMB8wqpzBBJksf2V4xZXsCjd59TmQh2B",
  "key7": "45thjwxTohf6u2uicLfi1yYAXkJpqGmwFuUHd5bEetGvaymExykfxKHv9aYz21mi7vpbd7pMBuQWB3gZEK3ovftJ",
  "key8": "4BbsLZfS7o1JvVv56z2Rdnkfpc74q8w1jGgM1Xny4EVyhXoEwFgWawwjVGocTVAo7dC5tH9sAyuvYxnUgF6aP2MP",
  "key9": "3TauGQUEQUuKiB4Ys7syHyRHJJyFTiwGECjFr1PKxDsPS521us6oqCtE8FW3yrvCWDggHbh8iXqQ2DfJxUQdSRsR",
  "key10": "33GY93HQhr9MfFCDEXAqbTccU2WmpcsT4tj6XfkKcSNpURyYFzyqg9C3RtzN2fkxTMKzxhfB7ZUMqXG1ktFmfK8m",
  "key11": "5r1qUJE7i7gwJ2TNtmdFWYtqQBFRujodtwTopbDE1VLXLcpesBdBCrRZF4ZZKbRYCGHQ7LjYsRv9H95bqeB7bbt",
  "key12": "4Pde5ahuRVG4WxSAtpnVqoJYpoSRXSSW8tE8UUGcqHHrnFdYbEnDsVwkhAztZZbtcCE5DdbWEBcYGqEBrJXNqmrW",
  "key13": "5z4pRyJHQSCDJawjBoq39xCQ5e7CMmmpvhC8Wi87nmjFdpQLzKPEm1uPk1z35VeuMuuo9ttJQYSLJ6GHg31dowAy",
  "key14": "ULspnNuYaXMGPHyBos9dbsFX8KuxN4prKa9sr6xN52Uk3tQQ4qdZuENmJnhcWmJwqaXuvMyywyvqjqA7ytHbBFF",
  "key15": "EzUkxsyuk1v8xEppBidnSwmtBF5JGJkCxpToJsokejyPD9T8dguAqJwfW5zNV1WLnRXaFpDn6C4WWoeAL6zzz4q",
  "key16": "D1gdKbeHooGwtQgZ94D7zRZ6cYz2KxXF8bf3KxpGDSDQwQkmTajmgUmqiKuPSgY3h6jToUybVKBzvZuxRHBm7bg",
  "key17": "5LEEpYvDWHb72y9qk1f1CaJ3v3w5Fk4zod7qvn3cFBYpQcFjH6KaePYL6G6US2TvJ78kbzZnWDNvLa96i197j9Fh",
  "key18": "3Wfhi2KbayfSFgarTqE9oFhruXYdFxanM9g5wtJ2h9CtyLsvJK3UcPQm5EYoqLBYBqvCoo7dGoSGd2bRihukLdAJ",
  "key19": "4ZhGPhM4EH71y4Qt5SBp3Z517LHVeZA4Y3q8Ap1njv3qUE3YPF2PY2m7inkWzGcW918wgTw7wSAytVsmrHwg9uQE",
  "key20": "EQHXaUq8T3Ttcvyhk8C2HRoT26kwiAr5yRdVfqEqqdzMCsMKZHsctTwXQBT6Ux2HvpVV7Witsn6wTAzbj485Nvu",
  "key21": "TWUhueEQnFiKjiqUhDFMk83pNv3irVbosgZdar7acim8aW2U35tPqvT1omaX4iqCGAmCvRE2LJ9q2beF4axqTMK",
  "key22": "3rh2jycftW4QCFkpvnoWZMJX3kB3KfoxMuUfLF3MNXA9XWN1KCeL6nLx5EXWQwk9HDX7zJ7iF3q7u1jpQEXVbojj",
  "key23": "3uw7Um63Pi325NJSqqVqVHLxYLF7pG7YLvnWofMpVpKUdf11HpztgCja3BH8miiw81DkAoaXMBgg9ugFuuNF9NLn",
  "key24": "TnUXYxygVKYy9xiZCaNs2BVUbAeoR6CstpMYDWDm5XpTd9RRw6XqFwNPAqXqAFmqKE6MbRcwzYbG519KwkdNqPM",
  "key25": "3y2SupfgimG5XH7jxEd1E3zETxay2rnX9bRBokdgzh9STPD4S5LbJg1VJneAKF9nq872AwbDdcexuGzVvPPojjmC",
  "key26": "3CPrSTtW1wRE4vY3JTjTK8DWEUgRhaxrkSsF2zdsAnzfy9pcQnu5BaVJBjaGQ9kuELxq1Uf5Mr57jb6SGCbqZweW",
  "key27": "56FpWGPLeZ1X6T711HzUQ65ya4fAX2GUJbxqKfAjnccD9KahmQtVMdy1VQXCSg73kX157t2vwANbXUxNJRZwvwku"
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
