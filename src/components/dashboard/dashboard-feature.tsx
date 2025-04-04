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
    "42QHP6gTeMMy5T5YGKRdN8uKG2voL9TjNrK6zELirTcF9gSHTTaPUsnCHm1z9X6vaEvZd65bi22H5t1P2wLJuA3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SyBKp9WV4xoSHvKPrPJGypt2vq38LUSkLrqKeQd17oFy4CSVaajg8EJ4wtkgCqHg53GZb1U3EYEwrX9Ri6bH6E1",
  "key1": "2TcqSUGbccmFqkdEdec3B7dbQuxd7EA9urqS6LPg4UHaghLBU8nGL85CrzqWPhyPNCxbxydHxigNDBBv56oDntLc",
  "key2": "2J4vRQoYzJ5Wz15tMxhzXw64Adz662KozP2i8rMKBTivf5XnJJ3YMpYBGYSXd16zRbkEhiAZsdPfmzxUp4etg9k2",
  "key3": "54daDY32papD1fh7HFpUX1rnKV6ff2MevDX8bi1wwrYKxpoR67xgPGo2iAKnuWuS3mFxSabjGrtftdNHn5ip9R75",
  "key4": "4AwaFDMnssG11uBmFadUFAVjp2H7jsCNPHaG6JJ642MiKCGikjrBZ8mbpntXCzJE8jzo4k3thJgc4jWgzrZUZFuE",
  "key5": "2kJfyS9yREh65tooXuF4eUybz1ud8tr6TaQXP5xCGBzgVu9ud7frZF6uhDaUy5nSeCj2cPmtucUduaES1RyYg45N",
  "key6": "2TCAD5pAf6wTE13dhJ9PGHvNGnZDEiJTRyviqGzWw2TjXQLRHkWpNdWm7DmYKomkB4SCzqxx2ri6CzixBnhMEWRV",
  "key7": "64icnXa85dechLAPEWZQMn5AynqSRXW5AKVzDx2VgGcQuwMjodJs3WZR1hb9ezPtM315QxKiyGgtt7JLyVno2ame",
  "key8": "3oguGkE3Z5VVCcujDFyQgWWnzCKUqVUcRNJhnNib1bkMKJ8wDYwoSMfnDLVrDkmXRCoydUNLwahNfJeWgRcUPTwS",
  "key9": "29um2xdsz2HB7H2Mm3JcuNALAq3FkAzTZ58RppFKCKfDF1GuipwTTJRtvLYSHtTzGJFaAdryGHwsEeiaMyPJD6gB",
  "key10": "4RcT1vzT7zGwbaqTXF9XmpJ9zvcePFcf3WFq75eYX2ZrG9dErVGazEJPfTXuVj9ciDiUn19CPhBJpDh9XtMQZifX",
  "key11": "2erVV8t7jiKLgXDJwgtw5caiFxrKctgi5EQf9WTz2ADDDZNNkHW64KY6bvCJsXVyTy5YQDHZtQ5iz6DoFsM7E5Bt",
  "key12": "5r25q5dzExH1XoTKyxHpnmeeoUZDf8fZg1vyvsYFSExuBWwQwEPAtNEESQMK2SkHo1v66RYUJsyPcKXGj1ZurFTG",
  "key13": "f75MFwUmG2w2W9SfH53SuRei63omLWkadNMwCKZmVLyLLFfCV6qayKBSamw65xRektCs5bqosA2B2e2APzcWze1",
  "key14": "4AGaRyPftvdrfreFj84iyKzdnnn6LCQeCrfUiPc2B5xgpqzMAxx5JWC1nbBQ1qoModFNANPAR6QjCnHgw53BchDU",
  "key15": "51yMLYEXFJp269MTP9YAJxkHgNvz7CKyRWz2ooey9pHDwXZ9LxTW2UFHSa8feidXAvTbSeYCNDzQVWpqCEYHqHVY",
  "key16": "54MTPKAAPZFe4gY7w761VLaEi4J7LPEhGFsLajv47kpUfrMAovAkrS86MdhUrHxDU1u7HKfyQt35zZidPsX2NFxN",
  "key17": "37R8sGH1EZZ8N6yhWAGNtHPLdk43L5qeBNvmVzwKLHyYBVXgw7h9U5Ps2GSpkJGjKR9mCVENkQftRLMDhPexETXh",
  "key18": "tQWbrJVPv9cKvzmArpnHj6Fbx1HVAnSigARFqv4sbAwMQanTq9wXB1KdMPa9Jx6WHAeJrAkgK64bPWxhHoMVzYD",
  "key19": "67CxRSD7gR9g2wnin4r2adabYQkKmX1FfWHmu72tCjcq4LTn17qPgrnu2Q65hfRPNBUnCWZ69BUxQfqrH4Lr9J7d",
  "key20": "2fY7koipFFjj9j7sqNMn3Uvc4XcR8i7i8wuJPiBURFQMETmfpkhaXPy9TbUt7siLiDjcVb3tkM2DKjybDgqFVY64",
  "key21": "5TTpYmLc4YBST9rH8DRJ8a2zmusnia24pd5nZxV75sXmCe7bZH2oAQxbH3TPTcgmofyTuK1NxHq4ckJojtiMZt9H",
  "key22": "ctLCQ1hKEbBpU84WeAb556gJ5UE2d5bwnnvFW5wExBw1oMQHUPsQtv8YfFEE4HfHFcbXxEiDJAXP6D7DBsaoeUR",
  "key23": "4B8V1LD25gjdNMa7XRmCcrcTiqi2bH74mM1XTswFtXQnRwQx6SDYg68ihRJ5fsG78qkbW5zVKeiKXy1P3rgPsinV",
  "key24": "4piXHLfJ2PvqJsBHkaTCW6jymMsCx5F3ZuT3bXzjjDWZHoNtqVzDXLdvo4mLEvyA8Xif8gyocAJspzXZYmSqPTZH",
  "key25": "iX9Yhc3C4DU4m34iewD5E2Nwpftf8NsgUgvqCQwm1VR8LP29edfSRSPzXCvcyewBpCDpN6EXkB35XMkReKtuXCR",
  "key26": "2fbgXASC2TTXYuQEffGtfVzvUfC9zsH3TU5mi4gShJfxYMn43djb1gDumMcLGxEtMNp3ojaZ2xdLRte2u7ViCrZH",
  "key27": "5zy1xfkHDYbJ9iGBuoMpGYdfLTdqGTQ8SUtaKK539G69cgK6DLr9YcrLcCBGneS7hfmUPAz2si8aQE2zsimwCveh",
  "key28": "2hAXDo6TX6ySz6VuwLtz412iKSFcip7rnmQTbtVdUyUF6F5un5YRxGurtm1RwK9vdLS9rffpSjcDEZHK71irEFCj",
  "key29": "2utb9imGwGGFX4CzBUNzuTh7PESUT3VSXfvDVxFeg4oi7VE4Vq8qk5gBtciPPvCs58x7ik6eaVkjSyg8pRrJtBb6",
  "key30": "3pywzFpuxXR5LC3ZjYYXB3yDMNbzqFifHp7j1xHuieMCEx2PmGyLuUnCjT48M8mYDLm4KZT5LgGJjMZDg2xcmpMd",
  "key31": "KitsGfYs379sy7F7XjKRbZBovB34WZQxC6mMus8degS3p9XFbXDVrsA6TAYUqARS7LMbQZzERTd8isACBgCdCRk",
  "key32": "3PMm6LaerXryT2yDstwt6d9bR2pyXRnWfbdATCBART2fo4Q32LUKbD8Ak49KvuXF2BYuLLKaG7EoejMj5NDawh5Y",
  "key33": "2kCmmHoy1wN6Mm8nCpWCgJLrUA8KqH9nx34ENkCDjYoamv1TDCd9joEU8qLVoAF8yGkeUoU8CKDnCoV9vP4UYjP1",
  "key34": "2RYVmMYiDzVruHqJ1xASQHTThrJJsFH2Jeb2mh4DVbB5VqhNtMWwYruoAf6h7RbgjQCuorshzsGGjTDx7L4RTaSf"
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
