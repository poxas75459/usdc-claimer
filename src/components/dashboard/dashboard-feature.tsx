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
    "2YwLeRpiHUmCoC9pUqpJxvLKR8uaW8ztXvdoArevmiu2PmroXGrmdkVmhHNvvG6FZjWZJSZjoXQqzqqqfcdp5q1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Px6npmDxNtzBzkQJ8bdRZo5mH75BngQ42zDMwZi5X6ewrgQHs6EUwc8mL4MVoYBCaanCh7RQPi5M2eEwujNnpdE",
  "key1": "3moRUXSK5vp6VbSDGVKoG66hz6nKyqP7qZu6wBdaqPf8QQK4aF4Kw7JeZxzKxKJwnpW4PjTc7Me6dHhHMsQF6rEM",
  "key2": "49XW6vgmZ8syv2ftyqT8s5ZeWMXwazxEmXY2KPqx6gwNzeg69UsXmA8dVNz4WewEPktptw6UQUR6SvUGYnMaprov",
  "key3": "3fuS7BBD1ALrEyRFQEg5xs768H6C9znxWcWEnyTXQTdjGifDbAssFcTcRPJVhRt4yMeoniYTMcJ6nNp2amHqq3uE",
  "key4": "iRDb2HFPhj7THWKQobadBtZ8EkyJBs9KvqyjL9fNaH8g754hpMHadKGuKo6G6TweAiRfv7FLnC98NaFG4MDNFKt",
  "key5": "5GbG1HrjSBWhWXTs9NBaGCpP1kzKB4Bmh2VqzR6NijBoLcGS9ZkYJoW94xYi6XeMp4aQQ9PA4RnZmaqcrdZk5aTc",
  "key6": "3G3yk24W2phATcaRMxCZ4DyXYWJ4FkNxVeGiAM4DY9sM91EcSNVar3BYoiEfetq6w4jJbDXwYmapQwSKSYRmma77",
  "key7": "3zLmmeQ2Nw3USskY4hS3PYzBFCaCr2uNr9V27pWTa7ZrfKz98jHrctuEQK9Hji4Cx9DDcjQZhoPXHrTy526BEJxH",
  "key8": "66x5kK4LAoit8eSUYCfKA24SWPcVWyc6PrBW7bVcZDEEbjtfjmHnLxngvs2GCWrR9D6yGocbCYmpY2Vhuxe4qvKN",
  "key9": "3Gd74gExiZ1tbFzj3RtBYE7cDxYdBkZDiBJqcXc9b8N31xwmKbBuebuudewUjfY1emkFceMCmAr1rzo68xFMhjHJ",
  "key10": "2MH2SXuVLg22wc3NXjfQ2LHF2NRhHxLyjnvhjoLidAE7qVKhQaHhM12s43xydxq8YSQGxDn2NQddkNcyLcdUvCR1",
  "key11": "2zH1nRPBFRm88j6KMJzzV6vuqg5deUd4duBsQm3z5dPchDKdcR76HuyaUD7A6h7TS58wNoZizcNsdXtkJt4DrMQD",
  "key12": "3JeeEiYBKRCN1J3qhKZ6gDwAZVUaoLjAmwCpizyeNFyCNrAoEKh1K3JZZhGnDmFuWPVXwM9g4zpv9432PDegYz9t",
  "key13": "2Wmiopahxp4GSUoR7vSiS2zhy7xKutjetUzoitfr2mhmPLgjVvBDUifk6beJrheBrnPP56xJyTWf7mpRnvYCua3W",
  "key14": "3FpFvQsQgYVNbhLwF854RjiX6NhiSrZmpY1tTRC4WNQdsjsPA5sMPLUyK2tzyNmsHd8y3PRRjQeMb1iKAkXV974t",
  "key15": "YbTy8m2zmY2HhambgfdnTyNWNUdioTPgAxNAWj6zh1SxG1Yn8XMg3KKRBTsAoZV9hGMqHQbj3i9PrE68rf6R2QT",
  "key16": "2N1Xm3pnPHftrzk73WssbkH3ibKzxsivuC93iAvjFSDVPTyCMgyuWNBeSk4bm6YL6XVFYwXpnQMakyeTURcQvy1H",
  "key17": "4pQZmyDXTaYwv546vR3JpRZmRyn6tKfAh8c39JQcNNqgjWqiQ1ZwUuYLaoLx17bsSq53FK9RH38S6omG8hwDLbSz",
  "key18": "4bvLitZPLvBqUHzKj3rME6jacxfbaj9T9T3Kw3LXCn5Xevik3HQMvghDX5Kz7TwtZZPRVo2EeszP1ujjNN2GGyu4",
  "key19": "233indy8Zn7CDgRxG3fH6wCNkjZbgdcha7VHGcvW7GXduQ9EfezxFG4be6KiSx4dCUekG9iU5g5JCUwhcyuitUEu",
  "key20": "5epcgyJxVvGoaYAT4Gp8Lfjh1XUQN19bWDCWexYPzFDQqWUNPw8zLnJ7RwyMEXTU2Ndho1QaEVftXSQpSVm3qWF5",
  "key21": "UUmNrmgxJboveed5oEM7MfBP7V2iAdX1efDdjMhfmVUUd28wYgjdYwxRgeGPnfwPQpNLUAMK1Dh2ZEf5VMcd3ZD",
  "key22": "4pPy9X6yrpWytMxgRK1y7iTbFbqeFUd9eppvHZ4hAxRQogGFkGX2oxUMqLQXNpqZtyG3R95rPrjqS1uuCJ8EyxMt",
  "key23": "5oN3YFwSAUtsc9nuG9E5awUd81WDuhTGCFa8UhSKzHmGTUpFvn4ZWyRGCGSVK3sCwdKUbTsP1y1wd4gnJ71aUdVc",
  "key24": "47UVF1ZUU7WawQxtxQK31sTCtMkdxAP65Zx1RwEJnbBZDSTXFNxSEghAH6N9bcez5AVdnsWYACAU1cG7qzPD1pCt",
  "key25": "2SC9e9YwhkZoTRbmLB8oX5w1i1akoXKdi5iUNtGJac3nE2cE2F1tXxGaKQRMsC3RjbKXDPs7N9UCSH43uGBJr75R",
  "key26": "5Dg1QR1Q2qYGDvgrfiVz4MAupXufaQxmwebrAsVh6gP3kGqFeBQwrhYNFsd17nS8gEMzKkewMVJCfhiX1CiqZvae",
  "key27": "2UXXrqnyxeA1yLu7HjbRzmqZ2u4mRhvsVifmaD7vLfVekvaNY7iRxp3ksWJbk5cFPjNyPxEmQj4oHqKkdGaTGrXC",
  "key28": "5om3jCyZQXxfq9cXQCh54UWnhFc3wVN677CCvVeHEfC1XvcWiJyDycJasb5qstgfj7WCEWdxpQp3BXmFPpUuBc1P",
  "key29": "4KY4mdFz6bavwCxowG4QkTSBQb4toxsdLB4KaXg7bUoYrHfuvLeQMNks7TfcERYXXHVYqvU5jrJpGLEbNr3VmEHH",
  "key30": "5SfPxD4oxoanrRVZeiQxcxEZHC9hNRqJsFWixQ8bXwAftYM6MkePb6uh5e3obxgLfRERk7gtDxyfFWavEV328rqX",
  "key31": "3yyY14W9Bh7htBB6dAvujutFcbSjsFquQCn66qk5q3fB43CvQioDEThfNpzH4bDyUnChDVoWeo39HRBSPRvRpsq5",
  "key32": "24soRdErySWwe7Bhtw7FiLPn25CppdZwBtLJxQHBMtYgcCL5HQQH15ZvGHqGtK3euMUbpSpwywiBij4zPPWY3gF1",
  "key33": "3BrQnJSRWbjhKUzWK1mb5t7HxU5yyTK2y3pfTiCa5y6dtTCAzbvU9GzGbeeinEZP6g77wco3ZEHG9yBKR9pDyCiN",
  "key34": "4A3DjPnGYxzoYa8N95AhBQptXQHv3mQrbFDXzsSNeFtur2QzL1zErrNcnY5h1WEE4fh91Z4BgVf5xnnYo4eDatsJ",
  "key35": "5iEPG4aYjivtCVKdA6jAp98qxXuoJZfyxAxGvmBetbivXMtGqoX4w7Wd8he7h8QqtUaLr7PWTPmAFKYk4m3uWtW6",
  "key36": "3WR1utSc88V4rQtrbfUcJ65yU9SBMEdBBgfL2wNVrQdLve7ezHU26aJQHBzgzxBaeT1Rq3YVW4mraQZgenPRYddC",
  "key37": "3wrxWbqAfNjZBd5KVRU8N8Jx7EWVfF4tD4ZxaJsekvxUK2aWQR5xXfAAnSsfcveh4KU9SPwqixk9hvhp7NtDoDrK",
  "key38": "pLZYbo9QmXPHas5wDBdDN8PMGKZUzHMPomiBrscyEoz3EXXoG1BaqYUuWdvViNXehnSkyGjoKMer1T8XyxiHs5H",
  "key39": "3569x1coTgNCNjskpq8wciqhG3fuPAMeZdygPLTVUwFZuNRCVk8bEXoduUgeUawEvRo6qWgatGLcPrLRUWkem2L1",
  "key40": "4jfyMvEPSUDJZS1MPpfnoYuGgNeLvDuBV82MJrzoZ4S9qqNXXhH98SZ2tyDzhrybnyYUYgUxR2NgRoixrddz5dNY",
  "key41": "cpJxNHwV1YBvtKNpwM9aFSFDtuDKCXE7ecd1DoxgMEECJHRkXiSeyxedzaEWzKDtAuKAiNeFNKP9s3gEaLTbmGd",
  "key42": "2B5TsFm8Bd1hrjVKu45qQ1p3rnwW2zvTVyzdcSqUbSK3zQCC7ja8PM8miQQb7NgYh41iiSpTATBvoV43DTZxiGCM",
  "key43": "2BGWVBrspWGQQKcNpEjtHiR1SjQ6FgN6LfAERm273HJmtpoNSxi6kNZb1vM8p3uw93ViDDM8mcGe3Mebci12K4kX",
  "key44": "2NJbphSJUAZSXYsdVm9jkSkt7p4uWsdpmn7kmqQsBtCZV8x1HNQJ3dFz6YCNwWW6WUP1vvKCioKZoHABrBin2SCh"
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
