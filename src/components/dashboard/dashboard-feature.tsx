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
    "UncrBZyZRAB57NYaPJfhifqybMZASCzP4cWPSDbUTAipsYMi7zU26P5UQpymhQMFPSg22rgtH2aGFvJQoe96qRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHqXyqtjBBogek1RcSmkdRTTsT1Raa9rjetubVJsvikGs6WJ4sZv4EiG7PcroYADX9j8WxyqHUwo3tRwwn5HeJd",
  "key1": "ignVsHrcpFRSsQ7uimvXzBMtexui8qMhTsN1jDkGx32TSyTqzQbZB7cmKsUApRLs5HkmG8gujofiMyCTRbRXyFU",
  "key2": "5cpbH5iH48iN3KXRfvqTPH1Gc7ozwGXNGLh67BD6E5ZotRMNwtLUQUc22y3NoQi5e8CHVSS9RZff4N3SW1cYvdxi",
  "key3": "DYdVuzou5NcKzLd1LGmSQLZnBHBV6QQM6Pqfi8jm42ipatEGugVn51qSevorbj6iWWhKGezxVJiFYEzU5npcZ2L",
  "key4": "44V4CKFf2PSCGWjRdm5UhR5cHu3X8fEbXKo9f2Kyq2w2SbMm58iKd2E5PEWdsLTWsFUvo1to74EoPLqugyRaejP3",
  "key5": "3etq9FYhjZf6NF5XauQxzAB4mgdbq17HLHxG7iZrvSynt3671ZSUPhT5HyniuJizJkPbCACQ5dhQAdrBEAT2a8x7",
  "key6": "5aXLQQKcvYgthDTXjn3JQe12A5yWwVwFEzrj35ZpjeKKbQKNV2vy8zEuEyw8qzjCaFBZq1riaDwchqBCqmrXAtf3",
  "key7": "4SVvr6CdQNjEAPx1hcStktnT3YQxPgkmBJocEQZBZHK54cXogntBjXKkSefasBA5fvpk71Jdp56MD73L73zExn5a",
  "key8": "5ucmLZRowLKTrC6dAdcbaN9HGn5Asm9rV7Eg2MM333BinBXRcMivrvgs8qhqTtcs4MU2jeygocW6pKnq4dYyzPC",
  "key9": "czh4oFxJQddCnETFxMh3U5xhpwomheAv4EiuDoBcEBW3JGzdT1h58Yg5VU5mDq3th9LRJJ9nYr23pbMsV69ydvd",
  "key10": "2xF41sDpj3694TWzpPU9xVJCzQNqyXLiCG2hBVv7b5aQpiWFuRwqhXUFAcoofTeThQyRSeULtpdogcZS9bqUf5Bp",
  "key11": "5fWjXfhe2j69iQ7pQW5GMPnotQnFXwFJ8V9XMa7QrNs1CEuKzyqwENjUEZMUz4Gtz4waFDpN4rXJHyYmyy1QFgWH",
  "key12": "G2hBWqw96u8Xou352oSHADykB3hvjmumEosr3ybAqSU51yDyBEkZE9TFofh44LNqoSCXAwtB6GMtnwm9zcw1nPU",
  "key13": "5XYkhhKESdN16aUYNGcKhZbsueTbVecWCoLFki9FUQuBMK8Zz1CLkquvcieyXwPxxZJzSk4vjEQHpnQ83HjggTHe",
  "key14": "4QptSKRFBJfx1DnFhnz1PZhYai38oi8fSJd8zBgHSrCHnafP8RSBLiGYxptQ7SecUde2DtFiQkExuYUFrzcHiTGi",
  "key15": "CyT9UtGbyZmA3gho5VAbMvAVsRHqkPpdSxabioxnrQx9EK6AJuzKFnuWn33mvHiSYYACTGb1V7qDXqWdFvitfHz",
  "key16": "28N8xyFWrfirgZvm2r6ogVwfgKhYUzV56p9dFx412qKQGJCYmSqassPaHeqAQnK7MZwNrPoP3kstHqSvyfxymoCv",
  "key17": "4PWBUrBZYQNNsxj53Ta53iagejjUcKsPGnm7LLSRMWc9mdPJAMKjgmWgjXCKg1sJFLQ8QdE8vMNkae9feSPHeJR9",
  "key18": "xvJyv2oUrtTWBS74uwJsKcCibBNoMZV558BHhdyKHZ4gbfYfLVZ4WXPakZmYHKm9qdp1Lfd5ziUX8TvawGLAizV",
  "key19": "3skTcbhWKugJdeRcTzjXAWo8LLXRfpQkjKENyr7bftyFkgLJbueyUK3scpzqtfH4wiEZU2PPXbDVvWM9N6qEXsU7",
  "key20": "3KGrFDyE5iuNq886cchn6eTZqLxYk2LAqVTRs6GYMrGLeaF22Dbw54rvHfVbwnvhZAmP6N3uzx5hqrsqS6UXi6ud",
  "key21": "4y4Fq5WHLhdfC1wgQauMS7ePyYhs4svoQJ1Hgi3DXeofzHHYgErbvXEQMbdb12V6fTGKvegVDny357sxrTSoFoGc",
  "key22": "2LJMfPzQQFdXBjMoCKyiudshme9cyxx7CRHu9iom55jHT8q5ewfYDRkbpaJZZFvfJT2r3pWnDMFXcN85oY6rfuTw",
  "key23": "WrsovKuv5JrkmNy2o9JJEgtiH7waRy3rMECJtaBo1QA5JeTAWRPA2opCDmeXbd7KqkMx1V11bpwZfBPRvT4VeA4",
  "key24": "fv5gNWibEDgZejcfqgZn8s5R6YfKNiSr59LBiTxiGctnc7w8YQREA5k84we5RfqWeRtYq8Jq38BuXnoCRpmJqVW"
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
