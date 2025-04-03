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
    "5GWk3AENCmNu4X9FfHZoW5KFfWyYW9Nvr56cHmxTAMD4ij67pKH6nWgyqaEK6XGpig2sioX3ZSjxgzxk5uUXbTuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jksUXYa8kn23941rug5ndtFnN1uiEJZuLZVEx1Nx7EKCPRh8E7iUSU6vz2XQzd3ULcpRw39zpEMqUuMGwwhADYS",
  "key1": "3yXCBLx4Pa9URLcEUsNqPm2FJZhvmNx5Q53joQLMgNVSRdf4bnZ3m6xmSRburwbVogdHHNVRBfCf73nN9oHthKQH",
  "key2": "43jn7K6uvVjKMWUmBaEcLb8r3873vgBUmJPREBKDRna28XzVqKqWPHNvidNhwP5HJV8xn1VigdbSLFF2gTp6aXqL",
  "key3": "2RdceV4MTMfVvXaU5AJySjT3mVvdMbV8ULdtNpfQ3NVA1499DmTB5DjHMGf6zjfVZbhaKfcFarWCnyvczpTfuJnk",
  "key4": "5vGjSgE15DdKiFaundrmJ1T9re9Uof1KZynqH3r9aDnhukrxXtqsoTAoDc98e1HTtqMZinQJvCTLiigDiFAtpco2",
  "key5": "2DuaFH6AVD8qiaaiR1vSRVCiMoqNVDdbXdsP2BAiHEAdehvG9gC42UiZyXoom4sqF1qh2pyot1WEdzni2HnzTkcB",
  "key6": "3BkWNd5oZ5aRXg2xAzgNqbiRBhUQ5rDCjaE5XQdXBVyskZTG8Ug4pjFpS64meZ8p6a7qo43xDkVMSde1L8tDz3Z8",
  "key7": "3DSsXQaiPHj4jAaytLMM32q4NywPheCAZ2RgcbKyKB5J99FC5tJmNmbJQddfsSBxkKVyaY4bbftTdqUhCAZDKC5J",
  "key8": "498oSP9vaQGj4otusfaRcpye57VTa9yGf8Cq2Z9UP8WJZ39FuJ5C43Xxc3oiABPBRbuANsQajcuB9Q2UfEbacDV",
  "key9": "3v6FdhoxKscR7c5ikmXqGMfPBt6vhT6fMkvdbP2cV8Fpc1Z6n8e2GSTE9DmNiu8Evn5TCb3Qywe2RokfrneRWtZa",
  "key10": "5rpY3K54bAAF8qbj8owyKbTvVBkpLk6nTep91phLXDUWxmVnme5SWfF2uwMpxHe6JWri3vMnfMHeYSLpdjLaE1Tu",
  "key11": "tZo5zMdbkS42kmraWc5ttF5XpgCJ3d3U12tCFHay1pRQNYJYHJWUb2m1ZDKHvRWasdnieAETMwh1hSmNaGyEJnh",
  "key12": "uPWvgsBRLQg3SASHcj7tmmUkNyftZUVE7mVb5DPFNdoehTQDpg4smVz7kzDeFXWfDszzfGyi7w9jFU7Ub56BUG8",
  "key13": "4536KVQ1wsUQshZSvsh6qPyMy9eceypmfR7VzPAy6uVm4PzR1AV98AMjXjh1LvEZWUKkh57f4v2dKziTxdDMi4Yp",
  "key14": "TAz3C1w4BTBhExe69uDyMHUukUMRqpobX8ZyfNDM3pX2i5qifCjAd5mv6YNVZgpcsSXs6znuX2QHvCUpf7m72Y5",
  "key15": "3i99jfRMVPgXgUWnye2PVdHoRo4jz1tubv2KBf2u1gcfa2b3kyrVbaMoz3bfsnn6aHdj9fV5Vgz7FR2c4NB2ucBa",
  "key16": "3abR8SEUJQQt7GwA94ztKHu5tbYbiVzitz8pZf6whmBZuH2D1YiiQvNTp32fRxBMhJobfXKim1ninHwCnc1nSwKT",
  "key17": "22TzaGesZJbWHmwP7ehUw1TwBHtJRcBK44FPai7ZrCba9AvK4vfWgHyerT6FjtS7H5VCosSiJeuNXaPY9Rwpya11",
  "key18": "CCW4tUBmpGRVsDe6sAVR2i8LxLhtYavDN7AsSGqtNKfJF7LrTo7F7QLBRDFZU1meg16E21ow5xMeWk9bULd37Zy",
  "key19": "5jovRN17wBAfBC5KL5opLNiwguZ3vynpZSp77KFdSrnLKrsJQ1G9cEGfqVopiCKDQ8YdmPZa63ig3qguQzH26ahF",
  "key20": "2PKZuixD88EvfecjqHZPfvzpu4Dz7xb7z9SmHtWKqcLw9C7gRgyuKDLJU7eEZ6TGgVmEx5LHkZJqRG9xLzDtBVZx",
  "key21": "2cXUVgLaqeLJFEdYFisXGtMYNcWTJeatdoLc9dHSMA2ZYGLtYs9vhzhpvZsohALxvUF7d8W5AzfS3ZFQQJSvtMpR",
  "key22": "2iYxR6mU8G7HFUitiMDVH9BFtNMjzGdxXMgYUeCtYoSwvjHKDtji54DSc6y9aiKY7itVTtkCXRw4QZd5EATrSNFb",
  "key23": "xVu6GTM99LgAmVuYqpToLLbtwzYjLM6ep39mzWStEKVmwapPM8oWGPqypSGafVLUyarsT7pnFxo7fxKnnK6dnk9",
  "key24": "2avdSPnfmfydcsQKdE2jNPbRZSMkb7q3HrjWfeNzdxAW9jc6ghG4sD5HG4EK6YXSAkoS7qeSC7hRhjqMk2uX8TVs",
  "key25": "EoWPrTDZwGq6oP6vRJTQ2z6WCnTC9g52DBi2vcRc4QQqSkvDeEnpDMA8vbuEBFAve7KfTWSa33MPVCifaS5XtAd",
  "key26": "4FXzcPBzSqvu62aerd3Wzar3oKh7DfHCgdiWJnzvPuDNf1qKENbPfY3evmS1msRaHSHsi1oUtH5BDNfbwKTjPJ8b",
  "key27": "5mvr2C8BzQFCD8UzSCXFMTDQDFHhaUBarK4GJQrkuJpNJ5Ff1MpjjtfMEZwY2pRCfM7ueY8UKRm9RMrtVmiFvPmB",
  "key28": "4FV4KgCwqwLDMKJaWFjLUFGYF3PwzEpVJn8uQG3aF9dUsv6ft77dRMYQPWopEwMD5gVs4FZiHoo4sby6uHKmq72x",
  "key29": "4oj2zanugP5mixpETuhCLNeacyCXQhEevY3F89zW8nvumNX6UgjrqWFcDqicyJ3RVR3NGLPdGNyxRp3JTzUX5vLa",
  "key30": "4rhduUisuxBHUL1FWq1KvpcbV48H5usdM999PisyVMQykqCEyqG7JZp3WU5MtujhS1nEeDnuvy3GPdRyzp6Brf5E",
  "key31": "3sq2hBVDMmm71L2xHoZTZB929Djt3PsFKEq1R6SXPFLynhkPxdV3AcMG8eeZEjmBGw38vGv8QPAGY9nzCVFLP3t1",
  "key32": "5mSq5ngVx5zW7zWhWajprxkM9f21nqetKsTGsHFwbzDb1zHYgqCD3TtBwynv4pVc3fWwu1qJFzdmLeu5kF1qjLXq",
  "key33": "3dG6A6KXb8Whr5M6ssazJ47vqhkF5M99bxtHWQE8APiMgbUNCVhjVJmTcL1yHmDX14zYKNoPw2p4DRa5xMkbbdni",
  "key34": "5SxtHojfpkz2JxFByc53dkwEjWiP1SrL737ZyxT1HRGX6pnYDe5Yh33dyBd1xCVKgF6Ff78P2dmss7JvPWZWFkuV",
  "key35": "61Dh82RCVdsNCGpbuTSkdRxczuJfAiAA7ckqiPksQ5MJxAb2mW9Ne6mEz1ABjX6udULDMW57q2R576myo48Hd3SM",
  "key36": "5xonuaDYZyuDefQzzgieWygXDxpe4F1TnfWoz7DFVqQCPJZxwAKTgTw9ioMJfmhUMWkNJNR4rRWSqJ9So4HiMfiJ",
  "key37": "5QPBAYkA1Jx2hpTpqUNjXi3QcuuZTaRMwkW847eoiwfDRacpRYXmvrjEmhntcg2GLbD59LMDr9oodD1WWzeKyZsV",
  "key38": "3p133SgFiSRwVxgwQS7ZxTDK4hFSQ9MZQJ1ZBja9XrKXjtqSm4qTtcFoVi16EBxYzGN2NXyJ6rGMKEC6YuYFxfXK",
  "key39": "26FzewVGBT7vy1xwse3VGzyeKh48Y4LKACDZNPm1KnCtnfyb6B2KzyQPisSNovUz28PiVN5TkxMGyQHvY9T6rtKz",
  "key40": "RUwHix42GmUDrA3QEWMaiYxq4ueHu272Js6XUZGGmj3DP7J1V4CWrw6VHQgMwUAC3c221ZSRNVevLWj7ozfmCZF",
  "key41": "8e4UThYbLeuyAd3aeKwApAenA7Qksb7HQP3jLMHt7r5Xn9hgPfRdVEJ9tRW1TKT3RA2YFTqiokeNJ8eK8LGYwTG"
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
