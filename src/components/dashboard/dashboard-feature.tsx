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
    "5Q1rKBfEAigrfrfEKq9M31oidno6KG4YR2SsyFSzj3vddbAW5bKbobUUsC4fujcXg5nFWJHB5jLmNEbB3qPxkcwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25tvPHZd6E7m35dSVndfy3KNbKWqQ2KKsuvktsJKNnq3G4c94fCKQ6mM25smrXsVDvs5cZVxMkG5nRQdZVsXZeEX",
  "key1": "5zHX9KPeyKEAvyCXVLWBnsnyzXLoK3PsiJWv96D9fZ9bZFoN74nHVTcpQeSuXBL4KESVkqMubp1ZmF33pah6Eey4",
  "key2": "4Dr9hF1nVSGP9wuv7KGttJ2SLQWB1CWPDjs8swLk83FJi5mybUfSr77srgq3prEBVNQiHxxs9jeMM1BATybXcUUy",
  "key3": "3wAwXyM1cQtZHm5SbV9wo4oBUSyYagCEGdh9LV82j7rFJgYbjcermzBBtNEuF9hP6rnajmX9AqoPAX2ona4N8gkS",
  "key4": "3SGEghYcQX8NxGkJHuDpVZhQvBRLNyD4r4UCJZPQ89KaAKmTwc9KBZemLLshtpt7FggqqdeB4KuhXWse15uNMxKA",
  "key5": "eT2UZwwcrtQE12oZv7mqhSMkvf3KvcCve2Fu3NwjZgFnxf9gkp4UfiduJGQHEPnmEjXPXSx7Sf1rhHqwFKv7YxL",
  "key6": "Ny9D6Q2U4THWPfuQEredTpPFpnx77ENbvwEP5XJma4pduesR2g1SCDT1t2CcWafPqr1ijo5KyJYcJey2fAZv5tX",
  "key7": "uj9CAEZs6AHU2uF4vKqb9gRNEX3e175jGH71zmjzy4Zfkk1XMUihCgiCpFDazqrX94y1ZRznRrZ6DNwStKzii52",
  "key8": "2iog5P6m2nPTxaLRCU9rxqzNmABxLjjYbZapViEnaqsK9WQiaW4ZQYu2SeFseACqTSXjkTtuT7AwUVbsiqoBg6ss",
  "key9": "3KGKH3RbiRHRTqHqszee93CdtiRYFd1YZ7X6AKz5NTfKppDSQzpdSmSbjsWf2V5tqRvXAaAn593iEQDTc2XmsGCm",
  "key10": "2GdKtJcSVcwqobz1Rz2hBAXqLLhTwHdK56tzKQtWN5z2ZofMiCTgpbHWo7S2JHDEPnCrYasoY48ad1Vzkv6LTcT",
  "key11": "3XJAVah3WyrvLkjVxikFtXwy2oiNPQyu5B7XX1iqDksiDoLrHcC2ij8AZpkXyUG3J1kcgiKnbGSwKKuRWGEFiMrV",
  "key12": "5Gj79X4jB7rKkA8hFQnn953mZo8EHieDfcXvxULzcikTjNzXF3Paho78otppR9nbVyS385YmWpriaXUywy5TzZYE",
  "key13": "2K7oHAkCFopn2TPZTW1YuW8QJTLnzpYayDJ2KuCNLAA7sEbFpm48JNx53ZSPChSjK1vYWdEeSuu7M7YXY292iTSV",
  "key14": "3whoyuvvnUA49NVzoasNv49F8m1JCcoChisxLXCVVgkj1Fuoc3CqHmSVqEPhGUX5hqB9w3xhqAZngNgf36hwq9UE",
  "key15": "5BnwFMVZxexMxmj9PunBsX5umNttyXkLXKHN9QHtGo8FsaUHaEfPuV7sDaAoheuPxPRDs6AnZ2fNFLxr9BWF849N",
  "key16": "31pnLcNn2RjMAhvpz3G22eqS9fw7bbZpp8rpMY9PffjMWGDpGfg3UnSeaKYC3HkmykTYVK3goTdj1rJ2kUsXX9Ta",
  "key17": "4WaQxwip5WTYxw9gZ6tQgnBVzTgZyy6sQTt4HLJ1n94pSi4KQjuYxpKf11cDaJdjm25gRtKyTYfsnFH9bsgxncvk",
  "key18": "44ay2PMYSvQibySVhgdEqK1VwrjykRBdhsm7WxrRvZ7WhPdchZYnaZSv8Ly27ShfXhh586hED1spkwkDp7hiMnQz",
  "key19": "67k2MaBWwf4ZhZ5kigr9syjBTtadofWuQKMUMNQYAAW8E8p9ZBcmyqK8GPxLH2QARFhhgbpo6Dpcwzt1eggfDmRw",
  "key20": "2GqMpaemFjnDCJzyjA3WNS9hySawxkkTfunJqodSykmxh6GT13Qhydkvo1GTwdf62wm6D5pjupaNZ2Eg39NZPwAs",
  "key21": "4CQWoy4UpyHi6qKKJ6DTKJhpcHgeAY1Ji61NynnF7R9fWwWcbr77qX1xfBEW5zJzUSE45qQeJbg7XABfSpMHJZbL",
  "key22": "4uSDiWDyDhES6ymYdUNrtdKs9Gos4UnWtK6FXaE89etquzJiSk1nWgNYjnFXZ2TfBb4rgrZndby4nwFst9LV9cup",
  "key23": "h4kdMXfKiC8RWyYgvG1s8fXmJBzJ8Duiak9cPPED5s6W6xoWfK5GgsqfYzf3zZWubLiTdWhhKRGH5dL7kgBhT53",
  "key24": "3KLfcsFzwsAd5vUofqF78SzDXohRwukpcsr4CVyXuaqFb9xvK1KhTTvEnGNPQGdAzP2cKxmJ5cWNMzxjHrLeTw1t",
  "key25": "3RpnmqXFpDuh2SZAAzGqtUXVf6WQfuRPYpcxf5FqHRXFKLeZpBzACyNfHSHFpNX5TtjLccmAxAqj7f6cW4AyZL5R",
  "key26": "KWNmfjsMEABVUhwe5s4yP3thVAyFdv8BVzwCTXsNi8bSxqjdgkQaErbEmAPKdUXckGMeFPjRuz88xfBzabWunxx",
  "key27": "2ip9i6KKgpMd6MK9ak47Y3cbGqZBAkUXknpcMo8qAYqXiC9TMZdEJNZCYJ5AiKLi7GiyiADtTjyGitdbbAe3nTHL",
  "key28": "5itSY56zGQhgRCroURTdPwmqWGv8KLxN7c1DjBgayEK1gbNWcdF2rB7YgqDZLxwWWBx9mhjdsYmtx4EyQJwCVrPD",
  "key29": "22iGQhBv3PxHjbDz1t4KpufDqFP8yn1dds744ttBJwrwxyaDzuffYtTH1shCbMaLignyBPiL5wJtwKme9nuq9YTy",
  "key30": "2ghWtv42ziPncdmSbBuhKANibyyt44bcudCzY8xJLc6hX5nVJzsamM527nhzrVn35tPh5drVt9k6XqGrCvLZPfVd",
  "key31": "4ddwnriVk2LVG9926TWy2NUubesb9UBvt8NZHQrVU9ceAqrpxn2c8rce6YNdFR6s9RvJiSS8vMpb7JcFGn3QjJdM",
  "key32": "2d2sdoUBqsMUNbVJfxuKfAr93ciXk8Rra4YzmuHEE3y5zY4RpgBLmHdJQ2TxsRgKnnz6mYCy2jHRePAize64NSDr",
  "key33": "3J2DCxgVPdJNQ9iYZhdXnfRSDNKWf3zED884fBsNDL7fJwSZaduXt2rquMXGHXLXyDLTzKj2sJaCGT5cR377fswV",
  "key34": "4cUVi2ikALtFgqyZwZAmG636RrpKpZc5nd5Z837Btkp2kB27EjYok6u3KbPPxuiH88gecaBC62ZM6X7JtbPb5W1Y",
  "key35": "43beo4kjaWAkukjAz3vccV18BEWjBdcSQ5nfPTcoNX9Wf2FBG5xCyZgSdJk87DFE7rkjVQu2aXvWBUhUmbFBP3Rc",
  "key36": "5KsQimNuqZTsCHtmSYEPGEdC8KKdK2XY2ceaE3gmUMt79MBSGkqwZ3CmS5dDjz5pB7bcn7VemKS6xLXC7NjsRx4P",
  "key37": "3HeKyVQJcmacWz2hJvhnXFm3Szhc7FJT4ytVEqqP5dSuFzoxTrwS6zDpWdeUZjnBKjByRAjUdE4NGgsoBoqUDdVb",
  "key38": "46FxJ8Lw2xwTLYn8WZoxeHH6Ui12rm8pYkq18PVL14JCK6Xyh43ppPeDTewSCHjNMCCsH58HqZxZvj9Cu5GBmkyH"
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
