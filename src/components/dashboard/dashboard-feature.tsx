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
    "3TVxut9PBkPdyLwjRdtoomLHzoGkSL16yMn8WCyP7LaeKVy9vQmPYE65GLLASRMCvzzoWzVgsqpeJEEJAVNJyKxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BTGgMEeUZADYSY6XQSYq15nsTxE8nC4JntaQ2NDN3FqBNVuseCGBiWfoSjivh7dUZwBP3uQzp4cCB4yGi6WxLLU",
  "key1": "3oPbQCsXosFteuakndFLGLtpiZCnCX4h39Rc72cJoUsHLndrkijF32hNVgsU3pvB1jmbUBbyMcni7gN9ZwwAfRUQ",
  "key2": "4EbUvLfWMjUb7CGvLETWwgLKwrRpbB1yzXg5RHBbkgPXM7SPu3JiqQAcgdrZut96Lr666Rnse7usGWqZXN918kmS",
  "key3": "5EvJ9pvYUBvjQLJb5DpJBck2craTwaSyiWhXPuMuZH3pB5niMKt9jPLSVhA45qLbhM94fACFYUR4quo6LqUkbtKK",
  "key4": "JcaHBa1GKfGdPJvwKtXFgrW1gpjQZfB5oN1kZRiH2Lr2EnrWEKFaxFmVYmN44opzY14tbkBifnFJFC956LkoQDJ",
  "key5": "4cbmP7Xu4fXS1WSPGC9EZhdNUUdCrbXYuVWFk7L252XUGqYuyQCXWoTiEK5dCTi3RbF8H7HHvEMvfhcoxCNyxCVo",
  "key6": "JTWK4H2nD3c6SJpMAoHZHCyrz6sESPy8EoUSKw7M9T6WCLzRZVFpwJvd9xEDZguYWfLmvk69Hio4JgUpqFLyyDL",
  "key7": "4BHWtGdMLL5JvoNPedg1w2z5BPXnA1aDtzP6RPfQummxyH2nj5yLeRwNh7bt4K5t7q2sB3LptRLyZTAbw7ZKW7G5",
  "key8": "3oJAfth3Yj24nZ68MMospXBbJ6H9oWqK1tRW9LkpUb6KTTRqJkUKGtrysFWt4JcN2F4BVCz9krDGFa28PyhThaej",
  "key9": "3A6ECaoM29iDibEAnyDqHU3ef2WLDfNaV3UNkDVxJQCKYA15g7pHkGZM26jtc1dyQPtcxwE8Rf4a39SyMt9boe85",
  "key10": "UKyaDgbSm21CpRVXSJJpLdxnkK7no4Dg3pHrfehzugTSvSBy7fPW2jWD72SayHNdf5zdQbwrAXvQhxK4BNGp49k",
  "key11": "4cz1iofBNQ9FXgKPryoqYXfpmwkiPTxUgJvmjeyAX8mc6tmrvvd7w1sRgDexpgRBqERwa1KUhip5MTf5KxGyLivp",
  "key12": "a6UbGMpi715F4yWnX2CJ6PHesRoam6hKuxGdZWSud16aLZ8SDbQzZga9fZVoST2Kwva6e6KQxS9runAm3Cs5KBr",
  "key13": "2t39QFQ43vYMWWUC9FxGHCzjUvroWt4VRJg5x4shoXQimYTCW8751433cJrVxi2wVicfctNrkV3iMXWEkTPsPTwa",
  "key14": "54bmWcMYruwZ3TEH5BcAKGewP3Lg5eYQVy34QGEhw9kyXH3Vdbccjrwmh6BYj2sgHAzCqwnCKAH2ao7L4i1YKx6k",
  "key15": "3M21LSPhz6aSiLey9Z3F8ZBP6UpsBT55JF7bB6Mc6Tkp828fRNprM8gHf6qcLyceZN9ZGnak5RNjJZ8EcNjDxzis",
  "key16": "5oqVWUPysQJNBF3kH9fsyCYiMjNDjAwYRCAPMQYD4ihZgkau75GH56o2QdrpC6iub1qt3GwHzXmJPKDfAq7MvD1V",
  "key17": "4wiuShjbm7XFccfWdMvZDCPkv5RjUJiJdjivsiExAuPtTivsua3RFE2voVR24Ai984fwvPX35nUi5fmVt55rjobV",
  "key18": "5tujQBaeoqdN1o3hUFXrnYVVErCHZiSjTdVN845Fcy5wWth5g9gVVYY34t2rPY2e5EuzJJi4BAAq9V85BTrAVW6b",
  "key19": "3R2WDh8QBexucPF1XUH17DwT9Bqaj8k9WRrW4RChDCcCvQajt6a7JMRVTFzdfejV58CcoLNjA4zYJMxfCUfQw4r9",
  "key20": "44DYMW7Xk7zNhmdkPJcSNmSaNtv23irWEDdwadhTsLyosfvJ1gt5Tc6bGnDgDJZC9v9XQ5puzdtxoWYcuWbucQmW",
  "key21": "3BbJTpUYXjr7bWSeCakoGCpL55g5iNzCwr57rdQv2QDNZZ7z3X3LC5qb8DHyY3wBLLd45iG6SQ2eUYmLXQu6PqPx",
  "key22": "2BnLncfSvvP6HAqN1Yb48QJeZwQzmvLJjiLjpdSak5uyNKVR337LdJe8Nmg9yqGRQ6qYYqqNV7SSn5gTFnRkZ5E3",
  "key23": "2oh122ULNLt2FeYW8f2BZCq8kQzyCy4cfqMTvyiMFLiE1Vewbik8vMtuXs6yqSBYMPZVc6C7HzsBi7ot6YPF6z7G",
  "key24": "4s5UFJn5KL7nfXB2T92Z8gDwusXHjyVL3PcMY7wZt7Hxo6YCMdtTGKLuY9dmexqAjboyZicuhAhqt7H4fXG7z9uc",
  "key25": "4HSy5VRgpnCNkbvTLLusVXbExBXEwh4QmbZPfZxjzQv9ZbPF3DsqoaZU6Pm3cdmD4fQDEGKaMBDQXCJRpgWHpJ3u",
  "key26": "JLHDWbLU2axt9ahrbNAPhb6Pye9oCpmWWAM36k2z1hS9vdtuq78im3NzS3VitAS7nnkEH2L8TsK3xRqy4hQPX8J",
  "key27": "2A45WWaWXWh9UCGmXrG2FQ4eHkootw83QKD5zXZyGhThSf5U3VSrqAfmfe9SoMsLRSTYQscstQ4zDxzc2tMG5YTY",
  "key28": "5gB9BARRncwhmeAyXVNWwYRTcqqzahQtYbmz9FUXqycdvHKNMKqdHwrS3bDm3ELSc43FjmhNm8JimjpgsGk9Wx9n",
  "key29": "53GNuBG1azvF57K6ZWWjDSrsxgCNRfaNYz8zbjpjAZZU4dCFjX6R7dGdFWBgLjNqTc1Daryjr5AZGCKkY9gGB1yk",
  "key30": "3RFyPGosJ4RyaRHk42ZRaEau4Kzu3Bg8P5WKs8jw5AAXrWxciv696D4x7YjYnrSsmCWZNfpqXGWSzEtPccRbndvx",
  "key31": "4pMGEreDe6zhzHT55mQi1fHkLMTTY3Tyq3jNzYvcmYCUh9naA8fanQRy31ejk2Z9LmbQx1z2sf7ge57W3StSWUcf",
  "key32": "5oTRtfje9ikeyg6pYLfYyMcckLN5FmYs3mLtuyMGDfm5U6k5z2o9JTv6y2EU6KLV8sdURK9oNovQGiV3epKBpgid",
  "key33": "itoUHE54iB5iuzqj3Xiewzt5JgoprwsUkNx3vTphsD6awbXWeFi2Dzg6Kpd91RPBDoD5jknAuWVipKvEJ4k9EYZ",
  "key34": "PBgtYfg9fkvYHUZU6cLTAhKTnCmLEgcR2QUZT8RrqxBBuUsg1r6sLxCtkQ2AgHWz5NKJjgHjH5BkkYvDgmrf1Sg",
  "key35": "2QeqBhBgprNA4x6MSSDvrYwAHgJPfXiqn924PxCjyjbLNs1NtaL729owMA13T4C9vqGAmgA9kBT7EhZ6SPpcvauc",
  "key36": "5VH2hivcv2XKJhtArWgDzbCfpSs9mBwhXCEjsaoiq6ojr5vCUA947ctqgJgpKy8V5SJKW2vwe272kJEgq8sNYWcy",
  "key37": "K3hgsizjUP7bq8UCsvXqQNjTvu1zjXfeJHa12iZPnRET8ynyQG9RptuwvNhKixhCy8ohx2iJuYti4nPminazp4h",
  "key38": "B91RFG4woo7Mvrjk12XXN633LJkqaZm8jVHSKGfcwA3mWf2X2XmDCkZdamguk8vXBjeiWMA6GQd9cVpexhvypoj",
  "key39": "5HNt6QejH2icMjkTQJzYUbNGNkvBw7PW2vwxG6bqHXdk68tm3Db3ZuJdkgyeiqNTjKvj8Fo8tEtbNiMkuKDnNwj9",
  "key40": "4EsjPt4ZmNYQesnVFnYZJc1CNNMi3AbAAaYxShwzXkQ9x88qThjggvscXAFQZofhVewt6jmesvQDwvJLudFAXTLq",
  "key41": "4BDwpxuLcBwaF8pKmKoqJmBWELNbBtP2sQ6Hj1tEZnED9CqAbsFPHBQ6zwhDnwE6vdcz2bcRpxtaUj7aWb9xZu1z",
  "key42": "Pq3FJVWJg2VH1cGEztoqVtYchMWjGgigj5ea6RsYqW7vSJwErPuD4QxRXPuWdaNCVJtahwPSscivVFEZCVZ8Puh"
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
