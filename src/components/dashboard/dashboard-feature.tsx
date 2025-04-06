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
    "36bcK1uGvJmWCPCWSR3Tf4uGpEc1s5cUx9P4fnKKgAPw8iG4VG2SnbsReZyKKtb2zx6bvSVHsmf1DqQzRAZWQYrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C6ZyUTerS8Rt5YF9QuspBvx1m2Km99yjifyssF4iWGFqtEMLkqFGgSCNXFUQZFgoFcjya1y5zT8vxcHv2WC7RPR",
  "key1": "3w69EmxnbQaSG5s7xB69LFAN9978B4hVQxQ1K2KUFY2tjotUFk86FWCFNJ5oTqxHpU7bB5qzDJ5trmLecx2CT5XT",
  "key2": "2qrG9ihVMKwGZierh1vJPJ2a2bLR9zSDjWcTeSYRaTG3aQnjYDav5h6NMXe7u2n672Gy5M8QaQodhJ7GXkBxQRQ7",
  "key3": "2xMwZjvK2LjMCYWvYbt7jyrLG3zriRdMXpRmB9zcU6YwfLdwAQxRTvh14bcntF5KuE2K2k4yFWoVq5JeeMbJsjGu",
  "key4": "6kxjUJMHrZZ4pAzkUdJ4mLyDr2wgkjfdpJKHGYzeAm8cM3gjhpTCCSpnh2im1hgnNHta8NjQCoLmRpCVmL7Mbx3",
  "key5": "234RpxBQ5ogVri9cpbzi5eq2DuPYGLcVn5LL9CsXSWdhmK3RQjGdLjCUg1UizZfC3cYrQ9Yh3buytHvf6T1bP3ej",
  "key6": "4tLE6tBtbcUWv4HLzy5xc95nTD6jxPinmA4qTv7yoy1hYUviZYVaoNY9Ln62PVPm7ZU7ejTs2VtAL7YRJuiQ7DkD",
  "key7": "5u8UQ9DxXTVe4Tx8sovTs6jqt5tYjf94RPE2g9H2Ti8cuEXMEy9qyfCK4vUCgfnDoQt1KCWdR6KEVBHyx9SKiYq5",
  "key8": "3w6YEPrbkWjLqhn3RWZwh8xZJ6sXF8FHsCeWKfujVYsN6GegjNCc6QVwmLhbME4yNQJ2ypNkMkLXe9pxPFQWAwr",
  "key9": "3mdxz9Di6c1D5h7fsSLBHktjwaS8F2riaWLPXBZ1JKupnsyFpHm2Y53X5oY3eKioNSP78kMJN3EM2NeEA3U337UU",
  "key10": "4u4VZSHiu6gVCukjiSG4YL9gBcsiErHaf7x8E7NJoH9rBWRrYTgmWqEipqWXFjzcKA6SMpctD6JyJSnHA8McThNz",
  "key11": "pURSKqxC1A7xuqxbkffwdN7qYjbbMWkDJD7BmT7VCigB8fu1CREpcPDnUEShXjtDRAbr6BZTS3sDDDna87Ha8Ye",
  "key12": "3r1RH9rHBEVYXbRZQdWLHYFgS97hQu141vrT3GhzuAwfD27gVL8kwUwuvqpw3aoXUqEWzqoBwvu2AbUM9eX8zYad",
  "key13": "3Uf9dY3pa3VJZyx1ZNxPUzMa2M1ts3zmeERvLECWFcriXzbW7teduaiMnGZzJ5rH1fYY5kpJ1T6f9veARjYKo3Vp",
  "key14": "35e7y3KnxsC9AKVBNNu9rqvfDdGa3M5XiyG1bSwGhoKWNswjXcSfrNVk43wvBkVuhVJqndGGcGkcSXAcfYinjdZ8",
  "key15": "3RCLt784c19xrB8oe9sWRMs6kvTWfZ12DBRaE35aB7P7je1Sz9vfSSDSeriUMmB4XLf2qWm52T8AbLPk48JmcWHn",
  "key16": "3q4VK1T5awY2Vwka6K3DvhY5dMGh7mgRzJGX1qJFyNyJEwqPgXfiFC5hYTo1GruwyV1prxNQgboQWdwdRe16edpV",
  "key17": "2SgwFMug3rcFmwaymtJ76gU3fSNWrqrUppb78p9xwhw31M4GBgfmjS3Guj4X1QNUrxSHcWVXZii25oqkbUBaQkW6",
  "key18": "BhhatGz3cgbETYZc8Co4sTU4nGeWWtpKosarx1JGVDxgA5JssjSB5QiisUjWJyYUosVN9iKKxQtm9QhUxjk8z4z",
  "key19": "2Tef6nnfGrLiiZ83iAU8Fu1a8jDyTvNLY6wggdBJ85bjvjG1qWeXwdYistN9gxHbSk8Z6mhviLuqjzGDd6oQRidD",
  "key20": "58J9YWJnpRdJ7jKD5VwJHdACS3TeY8Z83Ti9hzYjNrAEGvm3bEA8cZ1xrKUQoB3mRrMEh8mr2fjxBMT9SAgameXd",
  "key21": "5N2aSoTzcM38muV2GALLwVVPbCfU7c1BRx7kgimw7qQzBXtW9SAiNcpdUDPYNUmRccNvj4oB94ZVcdVWFCQdBLG9",
  "key22": "v9dFtEFFZewRomCjVtMcZBkLWQkPh6eRV21QQo7C2Reok1NrXd76tYogknszucwDiwhDREKD1GVT7U8sUzkEUwD",
  "key23": "5bCig32BK3uASGZLZ24up4VSRBz3zx3Z55Tqfvsck3VLQJvPCh27ZT42CSE4efFMp6FSBrpiX7A2or931o8DF23t",
  "key24": "4nA8jUwS6rm4vBHnhgg9pwqMibprs9LEH4sydsbzE9dfDskA9ukT5gegaR78rvFJmsvfod8CvxJEqdGsiFwxZFR1",
  "key25": "2A6YYvUceU53u5J8bqWDtay1RKoV5G4XrX64X7MJBaqAkf3mVdswCc4UoRVfXF1Ekqgqw2NcPrcg6WvF3QM9ShFE",
  "key26": "2mTqyAioSzbxAmduxQEQQBuCPEneeqJH3j5yCLvaQeLAYXg3HGKWeU43RyaieVaDLze2h2Nq99WN8cjr8sgHwq7N",
  "key27": "pmvRwi8J9kSTHu6c1vUGxSzzQqzic7Jzk1q5WrpTThM2urphm2m7Nu6NTGNBQgGu5tfJBPk7HrHzWsaGVDaDxyK",
  "key28": "47EFbgAHnauqTfMseYhqc82GV4ci7qwJCeVrpFF3WtM9XwGLPxMPAg82sVrsfPfckBxtuD7ADT42FHFr34FnDJcq",
  "key29": "2yU8jBop2aMTc7vCTHx3o3QiC8sPhmCQZjVh3yeihb2Afx4wfGZXb6qDrMHjTuBM2cRi6E3RKZ8RXXPZpJhtziF3",
  "key30": "3oSJnPxo77Nff18TG4BPfVrMF8LyZBiW5hMtJmCXBgNyDRB2FaMvFt4FjUUqQQaxMbY7n9k2wcRq8Ssahm2wWLtq",
  "key31": "26Gh8JYq6LgG6nVFvvNaacUnKxQX2xPf9xjskAtXAMKhiS4gkF7ugJUjWQ4obzJ57fGRvzBudaqppGiPjaKNUyEE",
  "key32": "9ftqfcRiTZj6VW9bm8QuLnbvTfn2owN6qpcg1y5VhPSrZPGgcZUZZzkJw6mH7rgWpByCB2KxnkbtTgKULvv6hUB",
  "key33": "mCDuCVgfAYeqdEXQz93N8z3Bz4phkDhb6MbwgH1iAnwguunBsWXrF6SRHrF7aasPCd5RNocPf3bcVebvT1Wnubx",
  "key34": "3PXwq8EBV1aVg31CFnx8v8VbSFbvwoStCuvicLr89wcAn1Z9qJ5ae7cj92wBmQQ8qtSQvRVHsXMxeTM1dAvwZpvb",
  "key35": "2KKPHBJ3shsxVoVz5thKQb5ZXKE4Hb4hLGmfwWFuHS95eLrvNRRxCpLWcaF5z15gPHKmYHTQziuLZnzmUjDnZfwS",
  "key36": "3RMcye1SdXmjXHYLNFwAi5NZ63PpDWqLEsU6RCzHV19uPip1YJF6zTji5ptFLrPsZTMBevt9KdhRasN4cbeBxF7X",
  "key37": "5uWpSMWzWtq37RbNiv7tNDDzzigakzxySF3jNG74fWogAHL8Js9hmJ4kVPQMaQvtkK6quPREBhT5bKcGiZWfAm3D",
  "key38": "3WB6XeMjNFjsTKDtvnBvsX94eo1XUjy15uuwd7bvinsPzz3vnF7X1D72v8eextEnWkZ96mN4P2fjAZqkmSnGCCpd",
  "key39": "2fxH5yDz7wuHhjPejMF4dqefYFJ5eVXbqZA1VRUuBDgmx4Thq4TsdBZGAFemmyY9TjNXWrJ5WXofbhGNWmDcnLZ6",
  "key40": "445Egbn5nMcp74YhKAsAYet1BiQdJyw5RS7s7vBDScp46aVGuSxhbaHe3DKkS164nRTD1zREph33uaoeej6h3wTJ",
  "key41": "SKBhc6P4bRRZdN5PnfDFSk8dWCC4KHRXoa6g9CSPSdD7TUYWAwQzffVVCfcT4BZ8EGnaRd1uCkdbfmvjh8vsRb8",
  "key42": "4JphSZsiCqKuyRDF38A5yjmPNUttkff4zpz2DgG6wBtn7uqB71EDE4Zyy4f5axb9QkCiUL7eLjKnkkJRho76UQvB",
  "key43": "3882eEpAkd52NPXaoM8nbpGpUU6D6wdjF9e3YymSR365Uac4HDoEG2E6jPRa7idt3Y2NjmB1y1uaXSrjaaft1TDe",
  "key44": "rXXx4iwu45BfN68ndprzbvJxDqzwQCq9xvGZLUTvAqGTJfBySQzsa96vBXBLFaYV5KDighYAUonwBJhvCQPbbd3",
  "key45": "Zu2YFfkgMrMAUtFvUeexWxvBGTQzzwqu4TuSsdUzBCrqNCUrsPZokaqUxNAxau9uXCbgQEAXMWiX4zB7yXhrDR9",
  "key46": "3RfPas4bjGqmqLZb9ftZVcTcRS3rwJkUPbcYhk7iuEVpz1muib3a3HQpq59e8qjbS4tu43Hn6BHCwgLNT79Psh46"
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
