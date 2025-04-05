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
    "2PqnkuxdYsz2MtEHF3p8Z2WfxsQMYeVMiaEisxEtKDYM6KpbEaGtKfe48DQ25tdAdWYSKgCj7m5pi69g4PEh4Yaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39xUxE4S2jiPRo51pJqSHYqhU1bsm8Q3sUTGLv4axKBw1nKsx1eo92ygDmRrcvF8khZfneFP9W53z7qonYRbQtWo",
  "key1": "41c6htGYq4GBStBmRNbSndCPp9Bq36u3rWAoMQewuGkbA93Rm9WKYCiTP4fqRG4XkffTaBnX8iGSfQQwh16oyybU",
  "key2": "2GeD5ZBdRUHS7qBuLbyHp9S4kpUKJdF9h5HhUzSju82QvF36ern5LrAn78UyUxxKY4XFHG6nN3uuKx4VHtRTMR7x",
  "key3": "Zti1Cr4hXva1uUL7VCAAssRt8d8txeKFc8MSoSNGtdDt8aM2mtTDXRPo6GJCBKnuperLEfFiTysufDaroib2wH8",
  "key4": "5oQC9rA5Et2kanFZBRAEc43B2zThRBuwP7crugqgrBs8tNUNWR4E56qgYN2eJFAm6haQEVwWxH4162cWiXPU2xjZ",
  "key5": "64xzQnR4vf9bujD461wQm54dnT4UEbSnBUWyBauPgAHPYTskLx1MBGq1cx9DjNyP8NjkJnJUNySnLJNx7TRMzn7X",
  "key6": "5KEU8gSzAFfr3nc2sNRMBvgY6WEfYroZYoaQGHQZsWPpfedz4D1MQU3LoU2YToUnzBnPRiJmf3HsefGrkLt3CRwR",
  "key7": "3zVea1QjxXgaXSgWwU6DngcFfe5i4m2r1psojuYScq1SjzF5J8H6MMnkkaL3vSXWzcdwmiz3uPE1DTXnZiZdPtWF",
  "key8": "B2kyMwZ1kJNvEifwwFWrFyhdchMvGs1VV6tc7hWYgCHAaGumAWvQqAWkR8DasPQwwRU4M4Yfxcnc82Bf2FKvcGa",
  "key9": "33D5qccgh8bkPugTwW93LKtqAGfeMgzDctkyR5ScZvPKig2nvuyZaUjvwvwj9GkRueQYxG2uaahHsuFEbxUf2Qj",
  "key10": "4HpVTzBsvKp5f7GKPwVKJecWr5toQYq6ZR8QcdF6DZjwTRiM2k84rYA96FMJeWh1PELfJktoqP7VHxFrs5NKVucF",
  "key11": "5viSqCavXGHsToBoAkvoYwCcpYWkAjjMUrnci9EbfmDs5jCQqmi9wU6mNuASMSeiTRNu6WF6BQAazd7PXpFKuHE4",
  "key12": "5EbbGEoYHgqJDGwsYvXkc7DHNA3sPdugJrXcKNcMG7eoK43415ANkP4mYUSjdmZuQBo49nTQhwKAHtxnzHWrZqdY",
  "key13": "4AhjdSCAngFjhHvTs9CCquq2Da6NcuqSCG1XaXigLbTC28CEm5hAfB6ptiXaRW9bodjWFwkFSunpLxMy5ytF7dLV",
  "key14": "2a4weH2vuVoC3PfoBjMEYbL8QMqbZx8uDxwHd8RuZ4CUftZNAstgJKvHoB7JMUy3iqyAQTFLLt7MgksyXQ95yuVo",
  "key15": "3BgakFLiUG7Pvnv7PdpnNJSgiSb1ALtqPWbypddRbeYbYkxUPQjuWZmY1uRQjysxowDcvCY1cRVARLqrRdY8Ecbm",
  "key16": "43L5vw1nYFxJwvDeFBcau8bBhfDazBzme3WKKf3eu6rA8bcGwsXc4k6JM8aekpFRCTW1cVnZinwbk9SBPAJqUpYf",
  "key17": "3QKUxAKmFFjQG7j813TDJwU8HV5az3qgyXcwW2BY8n2EWiufvieXofb4pzYtCQUpQLJPNUupYuSzujVjkuGy43kv",
  "key18": "2GQF4NiZ5VvLHWaJXyjQvn25HQ2fBuPPhKVygpxg2hcSjyifEHFhZkHSXXadqbrC3z83498kMFuM19uCvb8tG5Fw",
  "key19": "4dyFpHjUpjTREdRWRkjv2KyRyYAcqW7i5ZY6Lw99P9XJy97jfr9j5dMLVB8ukV9uBD7QTEMbqB9QE7mCqtuEzXuv",
  "key20": "4chWJQ8TEuz7yWBJEGAbGRJ78efhfZ8bWxBwvxPAg4Zpy9qBhC2XTapLympr4xDTJfVLo541VLfnbB4v3h8qa4JV",
  "key21": "3f8kEzKMAxrcnssWVJvGCDSTDEwyffD3tyHDcZ5rbxNgXgp3C6BHTbNnXZnTopAmSySxscHA4XGbGK1HCfe82u6B",
  "key22": "f6GpeXN8pBau3XqKRLC5865XYLeTi2BNBBWg1xrBUcH9sDJQW1efEetRd3yuqA1LRr5ZYMs5DAJaT9iPWgCsciM",
  "key23": "2MtZ9stTiTfgE1PmkH6RK5QjwbPG5EqtGJfXCnDYVFtdSwL8gQyhjqVsKBsvAQBDYq26jAoYd4MFE4oe8EhaL2f4",
  "key24": "2b2zCQ18B3TxK4ZdUS4uL95SSFmoGrjuhabDMh3q32CZtbGXGaU6GXzMHr5VCYVLtAzoDPvrCAQFc51rmtnQAex3",
  "key25": "5bX3JUSieTqeLcHeDuz1XYd1S8VbWnDLiVR5ti1McBM4pByvxDmnHvfKh5mW9cZ43pAWZuXUdrVs88CzML4zq5Vm",
  "key26": "251ahR4dKE7F2CfKrAuQ8K4jjGq7ihiygwr8wM4ckodB9qHJgPhf27G3saxmqGeUL9CyPzidiEeFyjddpEZyYM4z",
  "key27": "4cLgFmeXUHU2wAMQQ1MdrZeSKF1brfFmX8tkQSD7pWG8z9rhmRrGqq32R84wSZBb9YkCkh3pAHGJwt64Mk1RKq8A",
  "key28": "cZKjKPJGmYViv8PHutvgiztArUPyr63RLB7R31RixjaQrrj113no9qdmSVDy5sECKPUYcuuT6by5J5mw5Tqpkvi",
  "key29": "49ey4mjBVPEosLjwPKq9EgYVb5yWFM6mYadBg18iqfAeh4nKPfDpsn6mCMV83FXEjEDZxa8AEEfGWdnDMBVzJZk7",
  "key30": "3yiMpMZZV9Ub4rNtF3DNSVoqRoMJS6F3ggxjnEbB3ZciQHZpCHJWRHi4Mph3crdpzmJowxJRb5LtWYAE3qMxTmRr",
  "key31": "3Yw2xbi3ciEx75BHf8itNz62J6jtPHGsuESmxrzHtHGF3H2FPojFjFNEczPWV2E8V6Ket5g7DqiJKrVkn9y6zv4J",
  "key32": "3gFwHVoJbxkKUBVPN2Fk4w2m3zJXz4YuqDaFwqmHZwHE4DQbEAurGMN1fWeXfPNedWB9N2mtH7p1nvKHB6Kdxeor"
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
