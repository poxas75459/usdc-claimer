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
    "38Zw6ngR5uTHUXcP3S87eHrNgGmp9VnKk8ANNj3KctxFKrYFsCvSGpPWe94ydB7vuPjxvniwMuG2akKDbLwQ4Jof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5mdmWj84h91z4sMWCN6TxgpexX9a5XMAcZe4DTqM7QSDRs93h6CM3rJgcugVMyvMYUSjJMCRvzVPWxUvGn2d3Z",
  "key1": "443DfdvVAqjR1cYpYE6aqtgLdGYddKyS1RxBuxChtaYXd8HmrP2QsFWUDLk1BAknixeKdXhkxjesHTFaYxeEQYvR",
  "key2": "5qXQcD1hjzzxLAUDbnJes5bNyKtb8GSsViU8CnLMuJ8wzXr5ffedgExw98wBcFzg5M6HpiXS9eXnktTo6Hp9s8dJ",
  "key3": "3XDSqjRHNBAbMriKgKP7S2hogzzkhNeEvkYrzYip7MUAwVYKW32ySCxK4svveKuZtyMqdV2mTMkUH2tE5CjMdVTr",
  "key4": "34N9mQNXtayjC6aptNgLZwQ5a6h2PjsfkQqGLZMG3aa3GEh4x3zfCVFwvVrvAfG4R2q2vZiJQ62yLMygxcACxDen",
  "key5": "2TdHghNQGz898e5wwhhut8hn3QS7vjv9PtyRkWZvBzNb3XaiohrzPfZpqpTiGD1G1hDFF2TLE4H5ibFByQDvscH6",
  "key6": "PogS53KVVpUq29nQd2uZm653CSJnbHFUS5eqLgqHrZqJSZhGq7WiCRH9DhtPKb1x4Ho2w1sK5Zg9YdemNCTmWmt",
  "key7": "4VcBhqoWCJZXUQFUAHdjedYWyQaDwHavvS15e5i9jwZWrZV54LyfjMySeFj3jp2rUsd5JEMYFkVWykZCLXThgc57",
  "key8": "5Wocrbw3jkdHar1e7uHUUJyiiCXkUEUZ43xBMEHE1JoVCaYininXAJv5qyGwABxzLfd7s6K85KZqxj3qqMSmxyBp",
  "key9": "3Qux783sgj9CqxkBs9q44xcGCyYonfycm5u79sK6hHoiXVJ354fNG6ZF4TacWyLEgA7dv6P251cs3K3fxsgzxetZ",
  "key10": "ef5aPyUPo7X2NqjSPV3Xri1Mk1jQQQpMZagLgbZZhBsxgF3N5ABxrLtyHYL7zvjsaFJ4tmCEvNUsUmoFLPQvkQs",
  "key11": "4WnPE1L1JqVhGWKCRfG4eeuuPGD8Tm3at2yRHNJehCAAJvSQakuxJwBBth8XZiMjtgb2JKnbmLEALZiZ8JthXCy4",
  "key12": "djM9RGdJaZVVG86BSRyzxjv9EtZrJ38s4q19b5vyr6KeUFVds7XANGcsebnRZL1aCVy9J3WHpufUQC39stuEjG2",
  "key13": "wZPNwXYe7DXB1d1cxQLbKeMHLxej9Suybq1A3yrCK2EFmKNvFN2hJb7DFeDNXPSVuSk4HcnMdCSuMDHYfkgffa1",
  "key14": "3BaT8fr35KdetwXPxXWMQBPQhWfE6wVdKm53kgagPy41wbgHTQGH7h9Bj1P4rAD7fkMGCpdQCPomx6iyNMsjnhwn",
  "key15": "4HLyrJtwswKz5rxGYmZ2CQESgzJQ4KUfUoyzwumuxhAmEfL5aRS9Qra7QzugfYAkUbyRVepqd4QV6Jbb1fSRdrdw",
  "key16": "izABwBw6i6ojfeJQb3DKNW19m4eprdwT5ZZHXArnNgRsT7WiumcceQGFQBbJDpEbLjnqSxvcprwF1GsaYDctMxx",
  "key17": "4DpgitJuGxDoYYxVDMprxy2SoCUYnULxmWbGDZ4Af6KpPHTy5cXVnV7ypZ99nD4Zhb9Hys6FWhEBFSfEodnMd8hX",
  "key18": "5KSAZfrfvaAESnXNGHi96EjK27BE4Az5mJohMXvWk4oLiU6WEkqR5z6F3k381iQgsomAm3sfueFdXWodurMBLYHH",
  "key19": "255shfgC1VNS2ep8tyu4R4xej3QXdEa2Tq56NMmsTdhTDfUbHWS9GsXYYWmcQEntF12ona6aakvNoiLmR8ybCDnx",
  "key20": "s9hegJW3L6ZWX8qUaao1ivrHQCnX94NaB5pTnGf7uiQrvd1GQoAFzUKdHqZPKxKze2qQmuuKAnzBZPnrDCrd6MV",
  "key21": "35RuDgCvN14dF3hWeLmM1DiaAP3axkfuYZGXy79D1BPU2ug2YfWnYZhkAoTch5i9xCDGfV2WXqpE3HDDRKtGBMmd",
  "key22": "3Jggw6NrzWJFqfxWBSw51iGf1rEpvJeodE62Y4kcAnnJ9gNQwqdP6YNFsPLmpVfetPKcesbXnHMVgYK8Nr7rFSMX",
  "key23": "3stAtuCwDCdLw6hjkcZsCBVvoM71Y3Hf8QzXQvdEsrJwSkUvrTNadxDoKVK3ECYpP1K5bbC6r93JByCmXsKFPcBB",
  "key24": "4yPbvk6uLyp9tMmmL1sDrcc6GNKchMaiRAzPHJAM2taU8ajuLRAFmF114KaFztC9KaLsktGb4d2GMrmKQFsXnz1h",
  "key25": "3WnvL9PX5rq6uXH3kxR3FXW8fYGcXm3NRLAi8eHZQKfKRPmMDEgf2chxiwhj838B4cvTyAAqVhSy61WhgZ9oRe5A",
  "key26": "LTk7PqgvagXFJACyhkCpZpCvfd7ToxcfSEhYkBkbgheRAgUsxurvogrvqAJFT4d1gnNyAicU9Pgdm8AW21UygUc",
  "key27": "7QsnSydBh26CWrqGdeWdcNjcChUWrJH8z2BqAafTwrKSPg28yR5gPFAUgt3FVY2e5bPi4RiDLwehUtCoeHtVmFx",
  "key28": "2AyKhN8Td2meeC4Lc67UtTgBdF9xQ1tEQ9Voe27ZFWCCgn2qtbm2xvBA7wBDgeFubjovhgX1AUhDfHRpEyLsdZoc"
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
