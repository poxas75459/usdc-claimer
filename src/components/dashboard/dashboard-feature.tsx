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
    "3qFh5pcwVWMRxPg9dJmucXbLtyHt9PwmQYkRszX9ELynoMc56GprRdNB5LCk5opLSCrY7WjckJ1Pd6rrFkj7RaTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPYbe5PaRiPxdLPpKPvfG6aqPYvo3cdjMokJVZPhNJ8qQqcGtjeyeb9fuKVvoZLYVkoQgfsBoEwXQP8AkmqJeck",
  "key1": "3SXppy9tsSbBEawMSW1JxkMhDHn3KaWj2Ksrw7H4HWmZz3H7j7WZ3EFALmWJNzWEVGXeFheaWRqLtXray8uXtU1m",
  "key2": "65N8KC5chbyqZQxdAnA8n48DbKyApvbkn8cR2yb2TBz4i1aV8nqqXpHGGgvMYQz9FbsnV9j7USXqq9tz1PeBvYZx",
  "key3": "42qiN188eKTCHAiySDCqFFPKjnwWzkXkjAVep2xeWUgAYu4PQDXgA6Rte66ZxmtveRfi3e8TZhXBmGHs2s2yP9DA",
  "key4": "3M65uXGu4rkDte5LEeEhaQcxZTEPTbWzYfQaY9T9GM9NApch7eju8wdsYPtyUJKbiv3rSUXavnngJ3dtQY7cPxsH",
  "key5": "5kVKGofet3jnzyNGiTEoeznWoDXHZQZ347f5G2wPd6Y2RRn3vdfkngGfyukvkTXnGLxZGRaCKgm2H2a1rpziUGsZ",
  "key6": "2dpJTh71pJ37r5bBREu1hfjesgN7RXJBFtkfYD2KyF1DEvqeFPos5psKDBS7ixvPDAGXsfvxyNtDJKZiDKgEBSDA",
  "key7": "27pzvoFcwicxAmbs2rLQGjH9JZcsbHGGj6Gk6yhKcn7XipowxyCiwSq5qTmrF5DDuEgBoydYPMJ9g228uuEwd7pj",
  "key8": "5qE5tc6EXtDVAvyj6Pm98UL6TFjA2wCskopZ24wTCbWDp8pUuJK9yzrzvXKKtqcWyv8UvTUadJKgjKAa7Q6qj4WU",
  "key9": "2j2afyktYbvhEBNvH9HdEWNVEX19BeXfjdCRXCUs1DSzcQ4RePUHa4MMQP87PM9UVVhoQHqT7hEkuHWqcPu3svtN",
  "key10": "23cBWi4TWs7KHxG9PgpQiFjXDBW3yrN3LNr9as6un4Zerw4agoyVxrNsmVVGS7bA8b6cYJreRNvPc8odCkxxbqk6",
  "key11": "359rKKHrwz9NUDaVvWSoKhZkEZfgBuLYoN1irvPJaKZpwhtJerGLK4MHZtmMqsFtgxUhme34TCJedo54VaqUncyk",
  "key12": "5ZvN2NygEUFtmE5mKGeqcgYVYbSNykHY5dXwxvChVCkfVLj7v2oQQP7oMmcsYEFZLsunJfVSS97TcdFojdMyhJgf",
  "key13": "2PPh7QC4kHM7bDKgbcaRJMy289B6auAU5RXaacY6GcjkFyM5tZZ6BTXe6nn66fBiLeGxVc8hDxk9TX8ao2g6oasq",
  "key14": "253Vj3RjNM2PzT5e2Yzofc8qEkVborNgr9HCkYXj4zdxaifcdd1gUfcZ6CXx8WQU4HdDzLT7TEAQ4Syj4HX84Nvn",
  "key15": "3qrSgfN9dja8RHHEP3yC25oWk6s5p7btD9T6Q9bdzdZ9WY56QgeMaEcYZGPDcJjws4vipHijW1vjLZTkKd3SpVmD",
  "key16": "4nWu8sikkM5b1pPZ1z4Zh7bTLG6UdGiFwYm1ZP26WEApS2gv3zULHHLk2TSEVp3eSw3oNTTxPNtP4gnSaewBp4uT",
  "key17": "28S4yYca8tC3VQFccFV4WcDHTaM7ZJmCGLwpLmD8QN6wEbnGMUjxMELGDapggZgdPgR3WSwfJaxExCdV1SpTgLev",
  "key18": "LkYfNCDUaceaLe4HP8zaYoJvVPTHzYigV3NnTRcoRQQUYPq5ez7fWERCkYpvuTQHgrUp8wNTHESJ4MfZaufaXo1",
  "key19": "5HsiyYYdsAXK5xUCNgnSVVZT5hJCJtx5U3apJx555Uy7LCpCNBp9SMSLep68NkjwbTzAjnm1ZKEY8Vsg8jCvug42",
  "key20": "usR4F3bTwsYgtT9d3bPaJpY9fwPhXhiCiUwuBRTyquT5P9kdnhcBrWnb32j3g1iCurKNk4hs2cLHMuUdLvVTwN8",
  "key21": "2iPQSqqm14Hd1wCKdvA8UiAunwuvGP6oDDZjkS2ggq3fB3AcQAkRJcc7Lvdq6ykim6qsp781mdAE28ZyxsG6iarU",
  "key22": "5yBw3JSHyjXvoFBP8YUNCUY8SvWYHaTMF5K4H3Z5TNtumEEnnYpWKifvmhZr9SjbPhQ4BLjzffamgwtCwQmCURDn",
  "key23": "FUTAuuEs6LSANufvCDfHD8KGSL4sP7dev1TUgtxsQSLQGvFqeQFNX48cMR5Ct7PxNVs4H9bot5wAqKMrpTnxnaV",
  "key24": "5bYFezVcvzWsDMzFNzuSj7bgp6uUg6N6pxAE2tLpWFhx71GDGLw3BGwyd8D6ahTvYMCDdJnZADBsQXWEYpfySzCU",
  "key25": "5RJyXqF69SgTiNLWFEYeX43cqL2teYvRLDxNHTdBGzwtuPUrgsXnwUDovgSk8o6nVixAp2GG1NPtAWLprKbyjdqs",
  "key26": "9ycnzG56VobmWtyonegzbWoipZwNjjzME9ghf6GhwFjycY9x7wEXZ7DohWcEFbmftLVWtz1R2wQGK5VR4WoY6AU",
  "key27": "5g5KuiyZcJtNtKntuQQ4GAVzmThvrx5ERFuaRXsv9P2NYVyMNe8cFKuhigmwjZtxk2B9x1fn3Tf5ZVEsbGL27sQs",
  "key28": "2ZUEr8jB6WAhQQ9Vanh3ZCGYHrq9hhH22MAQ1xQRfs4s7E5puqjrCvzXSVJJKrdqpJrtatz7wvmJg825MSkUd6kD",
  "key29": "8n8M76DAdNE9S2c9e1XcatAnYqdyF3CEiaVRQ2h6PaLEgB73Nkc58y1ugVkPE43mbcHBQAyrbrN6eQ7jKQYdrT1",
  "key30": "4CkSi1rfrY8hgHQF541i4fcyFWFK5XQK8NzKSxN9spLvrt1jssV4nwvRzyrjat5Mw13CUd6aWUWD1uNJ6hpvMN1M",
  "key31": "4cZHFG953EaCrxqeNZCRSAyCL78utS62cEumC4EzAHtZgjouVJvu53A1AN76ssGynLUcja1LnChhN9w3LPoWSooQ",
  "key32": "62HYhpik4cZyoyjdmbL1caF52QmtJ3AU3CmsNEchkZu14DFbNNZnyTNRWLaWMpQsTLf5qZhzsY3M84WVV13LD8GR",
  "key33": "Zt8eQzHfTF5dezcdvUYRD4U1hb7mesBV25pK5L1hGyaoVs1f1r8nvo6tZqqSmzfoJCJQ5HiQbR85DfT5iNgS4as",
  "key34": "43sqt3gzvPQboRz6x1wr9ViGW6tBjrBV2iPG9c7xqnTYhLmYEViX5cXfKQKb8LRTn2jwTaxcfBjJCCvYZfefLZtP",
  "key35": "Qc4ZAiQAYxcVv3qXyRf2FjKjQxE9Y8KFVEC2eP5a5vbi95DHxyE6zec9JXbbknjHvnbQZFmrAjXEFqYDRZYhBaR"
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
