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
    "442U7sQTr5pWg4DjvWn8nvjiV9TeeUcBhds6CWeWZx9jT23hda2GKRREg6aG6xem3MRfZAgwaia7Czupedby27Xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yxnzePWtAyqynouGWFdriRyNeSFkdJkNj6HSCeBpKRgnhQRs164dFhnB8Uh1uFhhom8BEuEuT1p8NPp1wzQJdn4",
  "key1": "46jPjuXYhPQPGa2QtZ36xzhA1PgGprv3XTXYusrovuxqhTvfh8FYbQntao4NtDUXEq3VH5LKSTp5MjcLycWAdrkd",
  "key2": "2UFK9cjT6LPH7jp6tZErs3xRqDKgZQM5H9pnuUd8zGqQGKyXWtjqi2BEym3gRCr2FKWym7nPr3XTc4dcz1Cq9hxk",
  "key3": "5kYq9dVLRRismnP3SGvpFbNANDJpEnpDfWtw1hs7987tocxB4q1L6mp3tKCbjXoT5NBdiJnLzx9haQBjhdtUiJBe",
  "key4": "2wiQg2bhHUo98nCj5oxDJYd4HVTZLJKQ3wasthJpJzmeBgJ8vmAr14b6K8AM75jxJa9nziqmKkBqVjwdz8yZ5cPS",
  "key5": "5JUg7g5oUmsxYw8rF6CCVPNH8a7t8ptv6YC6hu15h9X6evTrHC6UsKAgHX4i9xDrrtupxvaAUhA9qd8P9hfi4bHZ",
  "key6": "53FB2fFP56QBTGypPfMVVYFCrhVTMbbaXpGfVCH4gqr5CkGHTopSte6m6A9HRydfEAqQNfjDKjkZTLWgvoCb34pi",
  "key7": "2JLEiqHPoMqkQ7AaJsQAwigi6WGkiBJmbneau53eMj37FrzkBy2bYLFqcS3QDBrFAoQpmbnNkew4koxxKgcBBg82",
  "key8": "2eYSh2rZ1TPSq5oizu9v4EN8DdHaEUN4ZTFKcu5DJ7Wee38iyCrfmuKFuaSwnbvExc9ANHBZPhEEoDFr1noX4Fbm",
  "key9": "9aPgB5kS66MpCoUoZ1kzTcmQTLaPwSEnX5oad9aWfCdC3UUGFxU3dJLr1pY4DdR5HWCSnX4fWuUNA88ivhBsLQt",
  "key10": "54ftMrYxRrWNNFWX6cjkt7X4rtR2kNhMToYRfzRz19ojG2ZvuyTsNBKrKehmruWYZmgau9CR2Jsf8t2Z9KyA5Dv6",
  "key11": "46QScsZ4AsC64cptYbiTxWP3mKDJrv2AdyssEwkVAJZbyHnmSn4CyH5Yiacp6dhFxUcmepcKeUniqjmP5Pwq9YrG",
  "key12": "5ZASuSNwNKope1hLkwNmsDmy3PH64zy7vQak56P6jg6DBiRderACzLJywQPprnN3WTUM884suYSosR9BXuqEbw3r",
  "key13": "5HAVeNUyvXZZFZmysCZmdfqSm2dLnQZS2rvhYTyMJA6CFpoBdWfdjVhsar46vJufaKZGJCmQgEHAFagi6Q2vTwYF",
  "key14": "5Nvofj8LrDopfwTrdGrLsUG6uQTqffje4J4JJwNA3o5nRJZgUvidv9EjARUCVYsoQZX3QP7Z1jiEwLGz667XbDZw",
  "key15": "5o2NUptFcZCY1uyUe8Y41ehrfUZNQ3AGMZYFhPoQK6LGhJPVvivGszM22Mrhx4AtjTbaHdCgusRhYu21teaaf4jy",
  "key16": "2FDEYdvcr63sxn2t7FrYhJ4Lf9iChMB8PBtPqcEzJuRKLDJ91P2fJ5L3BscJuhomztX79gtmrn11J8T2aX5NaYLd",
  "key17": "2RqhzxBM9w1cE8RrimryyLq32HygUdwPrpvsFvC3FMJFEMh1wDEYsgR3GyzNMAGdxLeaChYd27PCwVvh28av28Ye",
  "key18": "5HrLjCXkuo2LBiXVbX9yjsyBLnicmtZ3fVoXqkuWZLNyyDjdpapqV1FX51brUJgWP83c6Pan688spvA45mpMqh9Q",
  "key19": "47dDQ7nXNJGaK2p3CrU31HpLR5gpGqMHg3ksXpSmtjLngLsf5aThAHJtAk4opEJRwD6HrUsy9a6fSC4Ta4WCaQDb",
  "key20": "5kCc7L65DbiQeEnwxfGETqET7mr6YjNw7yH52VEzZmshHwVWNfa7mkwL4eij3dhYdttYTrhkeXKxqAUo32P59kXd",
  "key21": "42L4xpcrGUvGHJN8E9SdaSCp8qB37b7ebhZhyzJggJ57HoN7PyND5VnbELW7pM5oDcKVEQxFK4g5m4MGSvEnTixS",
  "key22": "61MmEaA8UXGJbMXdNXSa2DbBeUpzNJufQY5SbHLmx2nffyT4nVJFK1X4Sga1GGe5eksEiKKL73r7W96fFFXMMWi9",
  "key23": "6vofcZWhvnXuKRj9XLW8iwPNqZwQ1Cc2F7nnp3YS4G3X6Gxqf8QfFXKyKUUzTVjb197Pf2GhwgqdLh82DDPF9eh",
  "key24": "6118FfjEmpcakHUkx9VC2qCcH3gwNZjAu5iydq8jykjbYvVb3F9x7vEZ6K4axCkyLGJ3923uXMVk5PvgEp2zY994",
  "key25": "3TpHDVVNGvUi4MEwrtuCUNgwXV85bTUGzSmjfNM2tFrxe1E7ZtYzt1SwXFbARUKJ3AzmPDUbYVVFVNsfNn1E1XPb",
  "key26": "MzM1BUwAoeCJquDDLddUHQy8bZ8atntHN5LtCwDkfFpbb4GrX28zhFK6BuMc9qwvw2o8pHpwshFJtVFacubUcSp",
  "key27": "5nz1x39UehGXaKyqQJr1HbzK9dupYy2rxo5s7c2bLSHweEQ1CFkmjmGV7Po6GtuX3Cd8LPmgzYN4dFtvPX6J2zcK",
  "key28": "qcX9XQCxpJQMxf5isAmSodzxrepxdyWqPTYKVMPMMEyDmJSoTEBCC19GEymiXWCKPx7uYhmUQ8d6i5AQxeyayaX",
  "key29": "k3eZDsi4CHUQWthPSHpsrCWcXUdN6BUZCBS3FMNdzGBruu4enLQS4KS9kNtY4HTjMBqPjeLTv7rmBmvhzcUvpmw",
  "key30": "4Dzj7X89GfF5skF1d29kH3mGgbncNA89qbEXauzjNuhvFh8UTCi5i2jDBGkF3DVuE9gohoBm34ncHyyr8sEBSuiU",
  "key31": "5oMqZfyqi2Soeqt6JTJZDTf4BHt7RsSfpqrorhcjmSVgyKxDixaweqcudqKk7im53Qay6BEJtxVFXhHjB55KJAWw",
  "key32": "Q7A41cHqC4i4KvZ2ii3PJUrGedXFrkHz7TzQ5XhccGY2A3RcKSgCTE28t4sB2FDAH2MmM2eKAwGQQ7RLKyXJ95N",
  "key33": "5ZyPzQb8nuATDMExHKq5DGgrNGDjq8zQU6ZcUt4XBmEDfobsWLH5f8PeUbzAvBSDi49ahAEVpishxSPNn4JHAyNm",
  "key34": "QQWvwaBLeVf8GoNMWvjBKMwYYrfCwBRqRUQefamSCyXsVeRNLS7ufGTn8myGUqB64zbWE4F4ZZY4zwPMYt6fobL",
  "key35": "332zTVaZQxAqqm9yCiqZjzMmWuMobYCsicqYavptsMjupmpcC2DvdS6YPbMdXGAS7V6tMkfDnmt3ogzJadm6FR1g",
  "key36": "25WRzbEte6PB8vSMDfX29Qy9aLdMz9AbpPHLJ9fZd3YuMnAiaWoh8w2LHWEvZ18Un32ZFgCoRZfakdVkvCJUh37b",
  "key37": "2vvzpn9QVrGm9vmUzGVZy4aaY9okPN1dJth9tMcMrcLqo7Be6nk4ze9bUH9RZS5M3skHFgpcqgWxih4RqVWioijh",
  "key38": "3U4k6u6V2nE9uGZ28YFEeri8KHWY8pDWuYUZGMnJtkoEhgEJgzTuZk8CqFHfJvjeTtGCt75yJRP4ugTd8Dh8XA4c",
  "key39": "33n6K5TzopWPcbH3vJXWK9EVsCfPJf9Md4HCtBDkbVLSCs4VZXjejeSBPqf4v41rvBRMjKeK5y66NWhjy1Qwc8Gt",
  "key40": "rNoKvrsXw7KMQsktQm1PmuyHiBh5Mzz5sYvvWKc8WofoxNFoUMrqBXaAEtU2btQXhx8wFqTB9tudGs1WzeA62zx",
  "key41": "4YGs81UKERhx1tZTTZqabLipJR1tUfNiDJBzznjNhhHEFDFpp1TxGkZ7UUSs1gZCKMUiqyJLFR2PU3NkWrad1DM3"
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
