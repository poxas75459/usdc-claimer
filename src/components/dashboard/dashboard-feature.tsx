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
    "2Vp5BZXCgGT6qbsUcEfC9axNghpNkzRvTyrAbErzgr4ziJ1yNyAvqr3X1fT6ThanVTLWcPkJv4SMasKUyS2LzgPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cEoEStjZoYs3hFoe5FAeCHjJ8NAFhA377MBoDryUzsksU3niwLJb2xLAMnxNehiXCyJTtTAwv2x29QZ6juEF3MU",
  "key1": "iRJBuPzDfrVtX1yM6QNy1Lg7cE9hQVuoRMB1eZxERok2HBQYYLZpy69atAePQZ5x7BTgngGcBTkNKb4rpbKkJGk",
  "key2": "4qYe91csKE5LvBUYQkCzNXnsGSzayHmSryLF6a3BZjffovapWL2wyH18wFSCHjGnnZetb24pNbjzsg5EAd2vpg35",
  "key3": "4y2VZwHAT3XKezYUFMHodCx6qWzNeACsxpMU7wzk5Jj51VhydfZabDjNQPykdHCixFmMkLBrdbX5pwGGhFL9uCzj",
  "key4": "4qoR8GqU7rVcQ1af8SCgbSYv2QYkzhckBDxEcsQdFZ9gw7JowKKAN2Tt1VJTpHwWHeUEBgA1ZHftrxEH4pZZZHvJ",
  "key5": "4G6s1bwLW3c1CMXfBbhVFqmwYh88m3iBgRxtPqG5M8t1ofzLvuF1JV5aQJwxTPqt7h876QPUSESEafsTPxfjng5U",
  "key6": "4GmRaMSKS9VqkzfETAPaexRKy5ZusfFCCUC9b12FvnJnRUKnGsS7WhjYcugLL4SMK27KWZfoVSDr6rDTr7ZRQQVc",
  "key7": "44dVAxJjkj5gfRzUBjy3f1mgzmey2LYVctcr7f9H3UAYrjksBHFrFiqAohw99jcSkDiJS2bnXdUfjtbGv7ctWJBj",
  "key8": "2BHj5CBkb5Yf4QWKXm7o7MCGbsKDtXHCzx7nJ3LYiLpPzmSbGnZqVCZE8ebDN5HKHPqpeUJxbRKuzjoR1LtDQG48",
  "key9": "5X5nDX1oKF6txWg6VAQXcYBGNJkzXyFMTuL4FahRsx43uFS7TdZDz5YKkk83bLtYVZxwoMXQmcE4mTvWdhD8ewbG",
  "key10": "g18ma1JhzCWmnJBcQJsjuWpQRt4F1exFX2VJ38fDCFR7Hg15TzPErsHEc9xzMQW9j8PgE4qnsa2cyNiUYkf4AQh",
  "key11": "43DtWrp68ZjErUu74U8wd71PqToA4irCsSCATHV2H9DknfcwTZKCaHmjqUcG6R6wrVrCuzewxThnt9HgtCMNoqXE",
  "key12": "oHG1NEX5go8rNCh3hFX1p69NUtQCC6mCkjYcmwkdseUG5XHDg378JhE9X8YeTgjaBeomwuBqw8v12eb1T7cbsP6",
  "key13": "65Ja7pbcG9SoMGa6BuqfpiAFHuq2p7ETaZaAB3KYutVaLzrxnF8vFHWjTniCCmAyJ4pu8jMr18jYG9KvjRMGEG6c",
  "key14": "3S8T81HMEwYtEazsD3rBSMFbDmqVp5kPfNxJ8vp1ehnrm75GhgQ5JqtD73hW8V21mReX3HYbsVFriT9SGhrzSYoU",
  "key15": "5TLGZQc6Cq378Mu2BLZq1JjdSp5e5q4gi8zfiYdniVDzLiiwuWQqB3gvmQtMXs3PyuyC8vkqeMepLeG3TGKAL2dp",
  "key16": "34NRc4TcnQHSssPVQHS1ze1WysVRUowUMUY4ksbFPw9a7gpttUfD3FvAmTYnRynKDs13jrqk4FkHMQsnwA6chFWP",
  "key17": "5umQYgCQW7GKwgh3mixhwSVj8S9yYxRrnAuWGxR1dQS1AouPjuX38uLzex817kXoYmLU1XRVt81hFBVpWaB61YtM",
  "key18": "53DpNunAyn3nJa8XWrkT1HDrdRKRzTMzs7S6CvMmSUcxirLFN6jwr4bfjzLA6cULhvgF7VdsdBX8kLvERgoUzWYY",
  "key19": "31DdMbNpQncaCiLMEsRY15DeABBYUhy55VsA9s7U8gtjBvwEi1e5nFGwd36AYv4dX4nmjJXTZLYTjaHkDwuKcXfo",
  "key20": "3QmeNJu4fXAb6xcGnqi9phSdAyJuFpi8yMoyf1xVqi5ukb8tvhj74qFWTr1F2H192m9whzYZBdfJhVLzqdxeN4QM",
  "key21": "2LgHrVt4DBLxiDG73hq91LhdNUHYEjw36uJwQxhwediz71MYNpwpYCwrnaB2dpqP5Yg8gWV8zCGfZT5A6fUzyUyd",
  "key22": "58Hy8DrinyYsgwJF9WEBzn3EbpwZaWbpeFyK45aVwbt1uLWXjPFVxFPupwKYtfPjxboSuDkfv9j9BBEsYF1Yg1p1",
  "key23": "NDYweNvZRgvJHEWYB7MMu4FJaeMbLgo5rZorFDCCTjytEXevvhNw2n2WKBumnqsLtyd9ZnfxkbB2oBZdpfxHjgE",
  "key24": "4kHwbhXTrte24r7LNiT32ZUjNRC1GAygfCZNbBtCu1a2HZQE1sP5yMkZqcr61S9opfuxt1Mtx3JDJDVdgR1FqTMu",
  "key25": "4PQQXXnaBQjvgW7w1YPBnc3t89dsLGXiAfpj2TTPPpMrBMFHcNTJRmC5AJWSPDfS1BcmY7nCoJSzMMUVXdvVPk8e",
  "key26": "4FRDEWMKxzeS51aadVjduwJEsUeHbGLSG7GSJSGio4KGRYkw2d2G2HZr2LexDiSg5mVG2wPKLxHgfiVX4GotxazF",
  "key27": "2Fzcq2RFNZwuHewtpV97ax7keWnuo63VQZnXsxY7CqRkwwySViV3av5viuBPKF6D5x9mx9jFCayDkcFrcx7Uy4cQ",
  "key28": "5BURmKLy7xmqncLbTtKLWFjokZ55NsckbHDXfi7zRLoVqyWYhCBdk4KAX2c3HFABuNYTnLBW4exZXYcccGRTG2uZ",
  "key29": "2qFrj6uUEBjkeUrdo2mc1LBZyBgUkfUUZu1dRCdiJnAqS64Tro1Got81qXG14fhn5YQd84oQfFfmWGUct7DMsFoB",
  "key30": "3mNFpPdziV5y4SFYEsDMag81iPKDq4aKF78QVv572vCCiFFRV4vvntDATZMNHFw52UBe52kcUpUseGnA8R1KACMf",
  "key31": "5gaLqv2e4HDjgjejPq1g1MXU69AghN8vcuJ2LWjpLi415KmYGhBGAUhUUbrqFW11SqbPrqQWiwhqUnTDzMTrpEN2",
  "key32": "4qv2RJ3BJSXhFc2LLXoswJ5xDdSWaRmi1ALxms6BUFv8BtQTDWg97eYMTv5GBPcXevfBmiS6298AXMUEtkh6mWHb"
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
