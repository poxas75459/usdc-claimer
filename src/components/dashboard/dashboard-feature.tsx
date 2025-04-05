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
    "hx7NNCnkhvc3azqQfKZa7MtpQwhbUMCgUG98G1yYA9drBEQFZUvYD7t358L115sws38mgfqoGvzGN66TD5SZpfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAQnyHaiv6Wm1s59272pCjV2JFgxWiTWdvA1hHa5dyz62hdve9g419dFm413zgkFEdsYqo2GPnJ1LWazyot3EmA",
  "key1": "4qq2aJso3GGjgGbiy6qtNPNjH2pVWfLW6Tsc4kfNZVamqidacotEsemc25bxjN9pLhCEMaBc3AG9hVPXUneU4pL9",
  "key2": "Tsfo7g4v5vzGMrXCKzz9fz5ADiHX8AWDmGSZw6VZrUU2GWvNJbtU7YT7WXM3VBgRyyJTTCicjy2uYJd9X6h4V6H",
  "key3": "4K1B11oqWsYDvZ7dyCAHyaRV4jA6U8FiwvCbgWvPq5gUyDcLaTrS8FX16UeSGLUpRTmmPhMf61TpJZABqwfYPSUV",
  "key4": "4Sq56saunFCuUPkr4A4VnSxtcwSjb7pjZtW4gXZSVatA49b21GHPMSfmoAggh6KweyHCqrxfXPY9HyZaxR5Hhgvx",
  "key5": "2bbWSfeNEAYqzwmZ5Bmp1oRcaGYBXsy3TdPB3i3XDNAb8PtHYHiWkQdCo9K8Zvcyzn1m2gjmhNWwioewwJaSJRdT",
  "key6": "3j1tvVqQonohnKHgENdiYPWe4zu672vrNUJJJvZaWHady6mSMYyr2xqHAd5LV3vVjhr5ahvCimcptDoVSFvE1SNP",
  "key7": "29XhrU8YEJEF1GkzGXYdN9dR1GdaWP4SBc6tZeZXgoYg8t3XE6fF5u5w5ro2QADp7mWmcquFUCGP5JKBGF1TsV7p",
  "key8": "42LWoeaomjaRi9g6YQfizxEbM1bHJZGKczp9gpFJ63gkahpiXMB89TTHzHtKbTXDEQW811tq9DZKhwSv2PDDs852",
  "key9": "5wtzXdz9TpQ71RKGjJ6hRcScHscDnjdvejj6tkWjzVXk9ieVGouFHXRPvMkL5CBEHgP6yHYZee1YZvGfx7NweyGx",
  "key10": "5yJF9UAPMBNgUWbF4hr61hNYqwrh6KcEFyyfpzSRsaEmXxKWaPuXuB8oQq17f3JVq4Ghvm1nE9yM4RHJenyRmHRq",
  "key11": "4cCf7V2EEaXKxVKPHLXpKcWAg1rgJ1fQqchjSoFFAyZ9UU74vX6uNVzmJaJ9SNtnQsnRZPqQSywTVyPZAZdccK9u",
  "key12": "2Zuf4yRJQ1eYkkAcLPrE4P3Y46f92KgjquGQYZyYxwFJcmDT6cGgrR1xp24aNepamt4c1vbHxVZBk77m1NaMKtHX",
  "key13": "3ELFnbZp31QedSmsUSUWVE6v7TTGgPjWpe3EnPGhX8sKAPEZk9c1ip8pS4Yx99DYo2nwD9TndTqDsWWKzZMuKP6K",
  "key14": "3BmJGaS9Hqe9a5tzdWZvJpKiehCfAAddNYpeinNLJscnhaBxxpB3X133CT4o4TbGV8P2sT2FM2WGAyn8fbWjgxcx",
  "key15": "5FcK8v5vnUmU9Nspi28QX7cZFZB3znvF3sgrZaTWhGbW2WQJknpSmo1YY3FH6JhqvDQ1k4zp6Axgg5cuWtktpRD3",
  "key16": "53LH9yR6d1BgMsUfbespuztb6n5YTBFL7pST4Y4XPmn2zoPRywbUydMExoaBsyUGQSxqq1epUePQf8ai5bgpuoME",
  "key17": "3hCe7WSGKME4VuAsaSse2DbQPaWiaGwwA8XaW3WD82ZvueAE9gcfD7h1XjsCuJHQg2p4YJfJpC4UDUWJnNo2uvub",
  "key18": "64JhN7jYrrbvUt23t6xwBabchS7hLFgGcdBogTaLnrnR7eGKsGEdJthVX8BrpFpfu4bFJc2snJ4EX2fjNmnCAQg8",
  "key19": "QA98sF2eaumFAaK66yNZcu1KFHCX1gzjm6VVPVau3ajEYVZUqDFm6z8E66iYz92mM9yQzs1JeTphouga6hgW11d",
  "key20": "3985QVU7MVYR3wNN8SdJxKfnUwqLPHV9qGnpzVuD48uLb6trgtNVJSpUFizRqeQRGb8imLrnr9Wo7GVy5gd8PgFr",
  "key21": "2ZA1ySZw35m9D2d4oeBfmmstkipbMr9ELFKvWT3XeVpCWkaoRF9K638wuC4UjCL3UH2Tj6gbS9HGXssDn9qyy7HZ",
  "key22": "5CdWyWPPnpgbqy11bwYDPcy7rJioqdamFhJbgRhiB5okMR3vsqZwUE718LuVCVRfkkb7s6aGFqqCnZE56tRzKiq8",
  "key23": "a61TKUimkjABsrWzyyvarkYuk6uZttJBy7KRcAdRWG4k4836gEeVYzRkSgCHNJh1CXBpvYPVKc64dtExjCvmYof",
  "key24": "3KRu2h1QLSWw3FvGiTRQENuiunqrAbJCzn4oEfXmQ7oqEhxGKvy27qyamKCUjrV7uTizNeHbXcwWETMDDqQ7N9iJ",
  "key25": "2mGpSiVqYarc7gNcaA5gXFDmRC2qFwMYXrZ1V82jQoPocgkRCzzcz3mPsYPJjvcEzp1tUexCGSh6HYWHNWVYn5J6",
  "key26": "3u16EjyGnFqN3Rtu71TmvYVS4zGXpBD7eHBLFMcmvLnMg3n3zQ85V3RiDEEcXFjuMY4dXCUKV5o6mYi4rvWH14uP",
  "key27": "3gGQCHmgm3v1xFfra4hTHFEXAtVqfwfiFMmtVAihuLDpDBgnq9TvCgXoHNaVwCCue6s1KBMPgm15acFX6UZ9ZXQy",
  "key28": "35AmYP6cxd1xtWJdNXXAuEWj9MDfp8NUSV3QF428j6BHmNA8TsqVJbEe8crPjEn432GEtawMNnqxjPYmHzAxD6Zh",
  "key29": "i7Ha8M79ociURe4Tz5tUEWDqw5R7BsPV4nM7k4KuX7LY2KiSuuATSgBNCTMAEWiYYzz9XdgZDejD4UMCATedCUY",
  "key30": "2uewjDoFwY4G2f9DyQr8N3oDbmbtpRUvzvoKQWn5kArTzJFosfLjkj9ZjCv6xAmtamLNRjXAbsdMnHSkuMZNGHyR",
  "key31": "5qAN3NbJ4cw44e59t6iBwq6o4Mi8xws72GjpT18qmACk65wdqUYz2BCSqExrTkgV8bVEjJsLnQGVwsF431RaFCB5",
  "key32": "27xSfUUg2acRj6NVFmj7DCGWU1RBSAUGfUso6d49nYm1sFVhREfX4sCrwjxRN7bHixxn1s3kJd1SYT79BLmfujoy",
  "key33": "SkHYHYmUx3oAAuY5d3897jSZ3cb97gyD6EJVMwzBSkdRCtfxyuZNeFMPBNYfB5F24uZSycDcGBThX42RKZfarz7",
  "key34": "4LfxGbXcNkhwNvnvBLktXHqVGGawUPs2DqG5niNRTuddpshGUxSthPS5tubzdYh2HCxbsK4Rhtjjfuvqpef4pd8V",
  "key35": "3dxwyPSqX2gy1qnjXyqtZWE5QPP9RRxR2eStD4KLVgvXJMQbAuBRaXofGG5f3AteoC8V3ZyHFW76c376GGvG3MBz",
  "key36": "G7iRwB6amNbM617n4nL49VfXs4wn3NGJF1xBjEc6ciK5g4qAxc2awVxLLhw7Qon1YSFryM4uMhoMUENHLbrKUaz",
  "key37": "5iriUSaa7ddFPtyLHJvfgjeiHCoEK8oczKFbsfoBZ4WbWRQVGr7t55tocwiET8bdMWktRQR1oRLGae8jt9JH1xAP",
  "key38": "riGP8fMKMNvEnkHmoCUXFJxxHkG5AvZPmJ499G5BZueoBXCuzXVPSotnzkx1jLfojZm9zEWr9paGXi796xnbLFb",
  "key39": "przvZTiQXgvhr4gSQr7aZgKe8fRavzkkGvtJXPRdjXVN86bJ5Yt1gisCVEBxCpEEFcHtF7tMuXKm9mBkWFvUhLf",
  "key40": "Rv6AiBYZJf46DTEWgYCW9gQXWV6Byvnpfwdn9NmML7QRd2JTctWj8V51NvzZahocsPBGc7td35RJDDxbko4vhEc",
  "key41": "2xkEXbcnzg8M68G2fdvieHfkf7xmPF2SZ588t6dPzdoBGzNzqjHCKCwZuR2yVAf4X5cGScgRbjoHtWUR1dKUsrq1",
  "key42": "5Rm4jXVBzZa39jnmJWg93o5tmMiE9rFqPvkn377VvznBLWu1LrekNvB2LwbzdtstfFrHq1UX4d2g1s2sXwGR8E97",
  "key43": "5NJjsHu7EiK76yhNdFnAhvMw2oGd5NJx6FnTaz6N7ALUXkZEtCPJDzMdEBw3EVrPshJnfn2PUPjbxqeSXNtsfwXg",
  "key44": "2f8j5pcefWHPgceSCeYGtzvVmF7Dop8dV4r8sd6L6XTjhVMwxhUxau11PRWwkxJ9HVQaSUPSX8KugXBDiPxcDfVs",
  "key45": "4TWKMfVWqfDgyZSzwWTCLcwWUyXHWkRQQZH7Bn2kQ2kZ537ruvLiMxDBYKtMYSv82pgnEL4UnmYai9tVyM2Moi6J",
  "key46": "52UwR32ffrjzLqU68sCsG3ci2Y7kehpgA4nBwrjvo7t2H9V7Tg7BtDPECQT9hUHL2nXQYrD2y5DEgvK4ZSjAHJ1M",
  "key47": "58yJUrMNwjD7QjDW47APPn396njLdiVnX7J5jYEtpwDY9W5zJ6bjtHX64R16Tb5eTZNdYTpUMyv4XMSanPFGWHVd",
  "key48": "3zJBPShBDpwTB88HZeJ8v2GkoN2CXBnNJepjBtTf5qZQhrZh96KZuXqjak1UWiGhVFK2Pm3bkT9zmqWVeRVTT9o9"
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
