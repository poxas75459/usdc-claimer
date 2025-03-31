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
    "25hgAg3hiAFoxbzpezjJCUV3vEhrM6se8NMThfShxHtq4QNCj3kNHRa6S8hDsn4Vb3M8EXwpLRSxWAM7QqUB6TBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QduxBGWpm2dTU7hDbdkb1KPiag3zFsj1WydtAi9QcAzHVB5EP4NZn5oEcfdt3VSmRCL1L3oZktEH1gcZg9ycgfA",
  "key1": "SkZqJaRRfQsswiiiCT3jm5azk3QzYnPyR5mr5bfJaB473gC12YSDXxkNjPwfdGqQSZp9zyG6kfrxtv65w5c3hfh",
  "key2": "2JeWeAU84929y1CqP67fsaJAbSBK9iVV7UAkALiXxEhsKxGtb6ahdCKwZSXaDEcqGA591RsKMZ71XqbNmQ5Ghxr1",
  "key3": "3ueGfBWVgLMHu7dv53Mw6rnPWcb8Zzyf3yM28DaZApTYrK3vz2ikPephQbbUcdQE9E6QWEamd1CP2MaB1iuVazBJ",
  "key4": "PTwfFbSmixpmdxpvhQ7eYsj4F1wCefxgid1yvhyMWu2xRwnrGcAMyMuYyEt2ZNvxp6gZ6hyqRqHu1fxy2iTes8v",
  "key5": "2LWb8sw7rT2KWRAJWu8UUrvLMB4gERuiyS28k4dAJPUkNm5aPKJ59sRpHpcesrY6tnDAwCVPvbSvDBcDtPQbboek",
  "key6": "4AtqSU3hFHGvBcfimhbixWhimKa24vfqvUkWkUXPC2M3wPH66UKyXsPmfPuV8wNLpjK7hX7RqYANyP85bkHv2zuU",
  "key7": "65ax987Hkt3fQbaA4uwicdv7Nxa3MKMD94ecHa7tjsV7ysUELzDw7MVoUwbQVrHqL46vxsAixC4TBP7pMHUt6Qoy",
  "key8": "Lxq1w7GxSXByvh8pTwKAV5g5FTgJJ23Tyb1QR9XkinhtR1h8s2dxSBypCSNLosG33QEkAci7wPSbQvdKZYRHKJD",
  "key9": "2dj34XmpxpmULusAfRHPvwdmvDJWjkTgU1ygkkSoB4WywA7U8WuDoNgNmLg6NzAwmWXVg6jkXtR9TUxN7wqQKvSS",
  "key10": "2GJTwZKPuXfHUoUTCdkftaMoCzKRYYVeJ5fbfXLe8DDJLdziAMBroX1awCp7ycvkgcTj4vp9zzWW5xAFXV2225Tk",
  "key11": "5ieuJnbKami2kCmMSwiZivbTT7Pj3tZdyUUMb8z86khgb7VQECEcWifnmBYNtEs2PUMdSrxqkX8RMtwjMkCk4z4R",
  "key12": "5nkpFXe9rrUsxMyN2CEgaqAvWJCBiKcAot8AjfAcboPxmse1zCjvTpa7GpiCkNutcwNvcy8nSxqE15xqfc71ZEX2",
  "key13": "rCVDFn137c58fdAAGPnsTXVenSk8RyudNMmhYpjztPXMNR9rr5HJJNdLGMqLTYM6HVBk6Tj7k3U4kG7rafTp5sn",
  "key14": "4HVQ6pMgBYPZ1y9nyNN3ySa6C5rR6KCBjddXt5P64mECRT2MvnGfbHpECdV4hAjhd74Y3bGXG72jAGqquQzk5y3g",
  "key15": "4AeuscYdM4SMorEeiGFnXKT4mktXjF3wBAyUh8fg2NbDpHdWfEG55RHpYmyaJH8XZvW8rXRkPfCyk3DdLnp7G5xw",
  "key16": "y62vgMEtLuzELpxBLHaWEHe74hbfcrrUjEHaSBEkxeEccJoTtM2z4jSPPWp2abbKrHG77mABLGqjgKDQ93fgrPm",
  "key17": "2ds225CpxrMPh1A4XLEdUWfEWo5pZ73t3KbMB2rdjKz3ZDu8us5nRTNHWYFts8J2P2FvWicEYK1bKZgszV5fTSc6",
  "key18": "5xALb56LYxFXveJNYuidzBBKfbGki9dEASfey2uG8JKUBeiFQuxYVJ8mMdYFeZqn3NZoMzgoa3auiYBBj6RXAwaZ",
  "key19": "5ctFqjBe75qNWwCYceG5YVfHD1ZXRC5JbFRNbv5FV7DPcoLHJrg3n7aS67R6kkGEvypHSf6re7yoUDRt9HiNT85x",
  "key20": "4PVtbvGausxBmmwN83oX6wE5rkK4cuisauZ8a8hHNRxrpkyNV4dD8mte92a9oc8UgyKB7U2d4qSQ3XJ44N99ZqNn",
  "key21": "4hNk7j1hgLzzGYw2WyG6gmbMDux81K4Zk3FgNjyFRRkjopngVj6FimBgTvjsasTkHNwkcoun9xCs57WNXdmaaFcY",
  "key22": "25bMcw43BE3hXzEwnNhFPHYd7f3Z8NVcFoSriEiqwkLMqjsFECxqdau5Z3JuichZf3gE8jPnycJMrj12doSPJn3w",
  "key23": "wpNVsWZgsokTXtDwzDWMxCGF4JyLzYykfx1V5qkSunxRVktGgszgq5BnxcoMFm4LER55KDQGKa19U8xzmi7QpkC",
  "key24": "3zWAbX8NLo4ML4A3byfhnyPimLh9PtYvTk1zTQWZMmc1fc7mffrNVZxnjFMmwC5DRaAVL8GkLWfNEKqSVuLJ4s2e",
  "key25": "5MixjibmLgiGim1Ei4yVxDufWeLG4VShwDomBYYYWYogs3r1HNMME4s79Tic9e4uL1Y1JyHQBWPxuek92H73zFft",
  "key26": "gRavM7dPxx3UiBshREKCjTy8zsCshVTwXcSGYqRJ2iFoLzFvyB9BqQzqywhCrZhre3CKZ5uxVqvABUnhaJzhfnw",
  "key27": "4U8PLUCLpBE24BMfcwYSzanA8HscHubnyD8vvfBHuTSBvva7b8aTV5pfpqB1vRtqGfeq6pBHihapMhtV97CLfQf3",
  "key28": "543Az37vPty7rVwVeSGLKrL8u5KthSaFBjLMr5RRkVScrAfRmJxmnohMMAfWgmUvzWB18gKDSNq3eVjVUfEuZWBs",
  "key29": "3Xjy5x5VdnjmJs9Q4eQQ52aR9SRU1XG7CPWZEWhkS1Am7dUgX3wHRRC5RQKZocsrR8wQ9Jm31V7DWis1YGta9xf9",
  "key30": "2rJEUSsTvREut4aYP4qgiwThraTaYLn3wibzGPUEStKB8aQodk5tHdYsBc8FsxEd4uCqbz5Th9xUg8SJ2kvgZtew",
  "key31": "4MNJo1iGNiSX1g2vuRaKQFmkKZe6LRf24YaG4b2T4FqGc6cvfEbGxzJTKrAmw2p6hZcWT8JUbUiX2DrsBJzJudao",
  "key32": "3fQCG193tpWnP29wMgrzogkbPKDPXrSFgUEtUAS1z3ukAyihbLtk2T4ZUjxVxTgKWxZZ7sqPATagw4sbgF6xB4w",
  "key33": "2YsfbHz9VR2iV4kaDfyPJrPxUmdCuWSaYQbdtfGTzbmYTJR7wYyEV6u9AHTADChkEccsoeGJy1UyVjiNQewMyvu4",
  "key34": "36RjsvFBLEnVwZ2ac4EKeavBgCVHuoKSjCjTHEAwmbi49Ginq33wTVR8cRhnMUjCToXYX2QHF9MsMgDtDKYG52i2",
  "key35": "3AyYrGHgHgUEZmLULhcgncUR5qSQa9q58Y9daVLBJ2QRD6RxUK4tCcJamY4a5amZfmEA1oFtLtjwThuLzkVP87hy",
  "key36": "3ExP4AMEdi9rRXLgrpjnajtDQY6kvuCRPP7ozVTdbFRA9MSfiXtCDigoDPrcgSi8xGjQPh5Gnhg966ry48CFpEes",
  "key37": "3MX3iYz1ZpLGDV6NhVEHqy1yfxzofhNfmSnNS8UWVJDxxx9e5hAuo9UR8UnxpzGtkcsUh4bWc26SVnbfSZYQ2fqW"
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
