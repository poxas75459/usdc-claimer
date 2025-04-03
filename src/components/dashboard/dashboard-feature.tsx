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
    "3fKEmdTybpuXPbGLB39URBwsvNA5UGfPGLB9DVVhdqmUnNjy2iPa85Uc3JTtfSMcoz4aE3W9hnwjL2RkJhuUKH9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HtaZWaigRK5kZccpV8Va4qxhqBYAiYG3whUURgjwG2vureD4MXCya5v4k3GoNVpir4BpiQBJ1JF2mhKh1WGzDRf",
  "key1": "5kERXExq8GaptLe9amy2mkRRfp7SE15wnmtDFp8QZkMGrnBa27geLesMuDDqHbHFzJS3TckX6W13zjywf6fZwgYD",
  "key2": "5XKkMb3ez4kMFMjfATQedjpqXBmJv3x7BuYF8yL23hdUCTnJ8DeAHtuiBebZkaPQSihnthk1Uoty2U1WaFceTi2B",
  "key3": "5Sk4PsXd5pzfAeYL4z6iiQsiqHfHTeMvRoQcTjzYwTR9cb3pBT1HW5HYGzotEvq5LEeXyGNJK4m7uEGcGjUYaD4H",
  "key4": "2tJSY8nu17GWSGsgZm5coDjrgHND4LBWswXJg5YdGiR4rHkhtZVbQunAT71LW27fpA98Hx1dapHxWjnAjGhMFopn",
  "key5": "5Z5fQoQPtTgyjwnTGg95DEw4eKzVVh38MRTc4oW1ckFApfudkCajUgzZMhSa4AZBoebLiGaXtsxxfKv9GTGfFU2b",
  "key6": "4EuvoPeSHQL91i1a71xcfsrNr3aDLu7q7YVFByYPUXxk93vobJCd5c35XbZfNDonpvi2DTM3Rikeg1hNhFZut2dS",
  "key7": "23QuA25uXednpb4UDw2Bgzk7SF8jSbiCTqnDz4E5gYHtnFc5TkMG4dUaotNTWooNQEwXV5NaV9RFC6nUKaPA5uFD",
  "key8": "5gp9xcj4YLu89axDBmaWxG7UjbSd3NJfxVHkEi75sk4LBXwQF38jFSzp3u9Kz2eU9WCtKF3SkFGu5uWK5v1qzxpu",
  "key9": "2oww8MfeXfUtcyYqXDtxocAW5QaoGz66GMvfWZ2uQ4m5dJqt4pUvL9fN4qPRircK86GzejM5Zk48rGDaCgEBP8zP",
  "key10": "3exZSm4qRcRCwGpZyiQdW34hZnimgEMFC41iiUcnzAftBojLP1qrq2aXbwCVs4TE7dRWvpiDYWPCLfibizt3RHvH",
  "key11": "55Nb4dJFBFHiuGjUTif9FVvBf2oTWGqqKYCYG3wGyLcbhRzdhWTjjW1PV7yL153Rws1QaY6mByFViTzcZGTuZVTJ",
  "key12": "2UR2T4t64S1zecNpNYD9HWKFEYCtG8J79NXDDXCpnKSrGE2c4pCVPryDVbKHpDzmtLSskm49rfjva5mQStiMPUcZ",
  "key13": "2nVwJ7yozwWk9L9BiWH1jLt64UPfQaHuVUeq9mynzonLb46j3GcRGeqd22p5tGzA14iREduXzLCDwXYHLxCiYHAX",
  "key14": "2ExsXDwcA5L7YTWUQmty61tW3ba2ejFeXVGCn2Tm343bUkWBzc1QmPk52JU4YtmmGFkNKiCYUWWEohbk914N3kzs",
  "key15": "4xRYDXyu6k1GZkWiz1e9CKKWhWgnx2WyWmXGMtgqGCVPaCVKmfrLzG1aSpHpdZu7oSy5EnVMgre54AXx6QPzCEUr",
  "key16": "47uabC3MqdXGetA37U9whLjtHb9KfYioCY8QQFbmjhBnkgXZ9o8GHVj2yebMUur2YmiTtjWxvpbfnuzzY12C4GBS",
  "key17": "53uFSjwkcgTHCHwUuawmwAf1QZDzsETjZietWCjawsLZ4WEE7wCYwqP9sE2ESSjvDYZpp3fNrc8LzfLnUmsFYHon",
  "key18": "3wBRvspcbYbUo6jG7GB3bMES4hTxb61r81CFk78uLTZmj4PRQ5oy6u8zqJ2oo1KWArt8L7BRNAsNs11CdVwi5NW2",
  "key19": "GQ2ncrRfZ9w7ZJua7DDMMqbC3AuXDuA9NabP1otGfaox4Y6aV6QtanvjhV3kpnaXMWbMeVjJsHRWjKWi1izY98g",
  "key20": "56WFwgz3nhGfYdBbcYP78hBYcyafjdWa2MDt61K1RLQTSgyARh2RRFrvh2fWuPqnqeSu42dkN9sZ2VBYZcAArYxd",
  "key21": "GpXgfRbCCRyUjxfW6KtLwYJZacfYEgS5SsmiMM1ZbXbLjhffjZdGQGWNLXLsqG9bi8T4rxn8PdUkN2i9fofvJCR",
  "key22": "56U2WiWSuFd613ktpRtspnUfmMeRxrR4fJZcRgjWJto1M7pmMHuR8NM6WpEeHRn8bCiz5b8GfHTKKcMMZUvniQra",
  "key23": "3WgDapEsKaGTvneUBe1CQayZPbJ8gKZwwdFpnDeVpPZKmWW2woxdq2tcVj1kNX2WhzoTVSkfXoREcVRQ8jVx7AqW",
  "key24": "2BLZ7KuttUEVEuBZfLRG1RrwfxFyU42pydZckhFCFFxgS9Rbg9qFjwy8gxAfR1NjeZGwHbU6DqxXdRkJtkomvNmz",
  "key25": "4BjEZXUUp1vr3FVrEctUUPDGdJkYM6z1j7HMH3HU7UXEigJNVfnZCcCnET5Bx5eM1VfN4EwzM8chPNyFnDspLWJp",
  "key26": "2bpBbzeS6Lk6STwG7xvM48m4f5fFNudQeaX5A31pf6yZXXjGgKBGUatVwk9LTUVwYdeSPj9caBzNS36QRep1vQaX",
  "key27": "4xRJMhVhcupHVvXp56DrRwoYUUv2QmcsJJjPrKAVVVnVdfMJg7CdqiCYKksBhfckQHgEM8WTs7huQtWtVmpCVpue",
  "key28": "5cgGMAcnyWvNhRGTSVY7BwYhkVatUb4EzViQVfsm9soXhknhvmhNQG5V8RTUfr7uHBvzh4RJgZDKEZsqAm75sXtk",
  "key29": "3ndVgCiv5Mzh7yirqKKw2eAv94FYHk3i39cX1QT915ewyfuzrfJuEFAdLDgYPG2jrCy7CBbW2bBToKjyFtY7mUee",
  "key30": "4on4QbQPxWmXDiPq6KbBPsNgUDHU7pDHcMcFgbqFLb45jrDRikfTyyzK6yj577ePeYKhDM1g4kefuTnHXvKH33B9"
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
