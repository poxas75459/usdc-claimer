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
    "55xfDgeiuhBBWc1RRZzRwbjMESze6PU8wC95nTx7nvawV2ZKLJWCi5bnu4tph9HzvZySwuaqRkfn3SRdR12xa94z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXcrJ3sdhyNMMAVL5t1TfGLbhKhyeSWNAWdKYhZExoESjwEpy2okafaFGhv4Ug4CCTVj2YkdgRTw1hF6osahBNJ",
  "key1": "UUtXiVpcSyTc1aynDrEEwALieLuJKNfWB8hA79xSvbYSNi44nyzakS5ZV4eDXdy79erZvhLsr7Y75GgEAFQRYRo",
  "key2": "3tqLCpTQuRXpBjvnfYEYYkfKAzRnkMizzgR64m1e2p3hbajbNNKMQDJ84dUsPB4BesmXJaucpz158SLrmDULsN52",
  "key3": "5aHFyHBWm4ru4ZFQuD9NaToHo8xxHPoBjAuf1FSTgTuzejiGrvDk6trkzuFHan1K2UWDDstKekprjwhTiEy9QQHR",
  "key4": "5pWqZTwZDrfNMYC3i5L9kyjVZQCrJXsRv4vqXL9U861YKuhhhw75xPvMLD852uQrcBLBjGZvLasv37wxqTK1fYTG",
  "key5": "3hWqMKzYzqxMAA7H4nJL19zP781Ev6XnsUdeerJkhkg5h8pYPjGVBWPnP9DhB9vu5cv3PSb4rpFBCZrasqx1eEGi",
  "key6": "4WDFJ3zdX1ujUbBCjkXB6q2XG4NUD2mvvk35Qj1DDhiw1KTQ4KdDpiGccbciekevT5xqvXNpAEAmZeX19NjMZaxb",
  "key7": "UxRzpF56RQ7R1S4fuFadYXRg2mVaKEAeZKD1bTKiSoYDP3uaZoFkXppy1EfaaD5hcM3u4FWdF8BGDFhm6nJw5kX",
  "key8": "4HM73anSLnMoV8XSEDstbpeNwfm3YAXoKJ6nD9TnzBs69sViGuwXBWS7DF5G4RxrJhgBSsEFHjtj3KgPzqwWN87i",
  "key9": "435rtRUHebX6ifZJQW3hegBeGFGw5KBXGoyXetaUAsem1wS5KWicXAHh3shc45J9te6mwYtE8pFWrK9SUySPEjmz",
  "key10": "3NijeYQ1xa3USWTyG2pJvVLTaioKYuUVfuoFSdWkMQmkcGaPTw4MbRobpua9dmSNEAomYonRhH8UVASBrhsBRamH",
  "key11": "3NiMdw8ZYeRUSyn2ENTusdM9f65WtXUX7q6Ga4MTVzUvkqnTKJnUqciXsjK72Wk29JWjhZVgNgUkBX1UmsfZh8PS",
  "key12": "4vght5ZDcivUKeGkK86VVCDB4E1QSaeaeKKTBLpsuZFt9xdEXbrKoisVs2DCnwd1TTootKQFZywwYyVngeeY4TvX",
  "key13": "3kTbGxFLb4cCaZV5vtTWjycJJHJgEoXG4da1gRzRpwAPNPBYPmoSpuHd1PJTrHbZ5nQR8fmqyTWMpY1SQAgfMk2Q",
  "key14": "3QFLggD8qbS4ERTnh1oqEH1owfeHEiGhLs2X3rtgGyJz2C3yrJoyyDrLULsyfiqqtzJAZep1xQmZpSyeDYL1JQqf",
  "key15": "4dibrwPVdsmY1hgkMm18qD9kWUMu2RgDV6ZuhyqHviHQFrZjEJYMFMtm5tABvjPCbFkLTUA85w7gsFcqD2bGYG4F",
  "key16": "4xxLiYcvhfuYBjiqy6bNeJrNwWHWVdDtXxMdRMjjDUzBQENeBHoAUyHwhaJmMHq4AM68oUWrRFPLModa5BZCTmRr",
  "key17": "ujRZx7DMNQPCvNP98t8VeGxvUDWauUVBanPMVDYTx8CnysJqxgW1QdsmZRr7p5x8Q4v6CUs4w8oVQjEojFfbhy1",
  "key18": "2nF4YCSVPLYN4ysRRkDzyotf3mguS6vewHCVCVV2VyL4m9skAjHMP4qwgsrD6gh1f9x5x93jcpsuUv1cRfg2Y7VP",
  "key19": "4DNA1TokuGjDrcFBVLNqfmCRJ4LseUUgw2ETe8pVzpMdtSFqACHVpdr5GnfAsqNL5EbGNtcQpVi7QnDGVjtxJV91",
  "key20": "4jDJp1x6WHdn6T2AiDsmkJU7kf96PSEsvFgfQ1r5E3FXfB46Lev1YVAggsdXt2g4i4YvUyqWgDopFmCahpsfxxiL",
  "key21": "dUeUcT5ax3BWx8gn6h8qebkSF7xGo2uQyLiCjPMEzrHWM7unUWVKAwwi2Y94PXbXL6UcbTYV74hZph2QmhbucYE",
  "key22": "4HFbsUfVVnC792LQXTprC9oFELjvYo6Pp3bY4L1tox7PnnNYNyaUDZDXEfeJgHGSqk71EioRaRW24o8xNqck1VsV",
  "key23": "67XRDLXWUqqNCzv6sNqe5PCYUZG2jKkCw18QaevQxK6qQ6V5wuUeeRRg3Wy3WhVZyDDB7FQ8icm95oB8XFXRPbj8",
  "key24": "5jcmwJXSUc2GHNA9AfKaS2a2KJcVqRsWzDzFoW2q29gcvkqDjUR7P44CYudMqJrmnUTWKyw5AKJCtA7qMRrEGg3H",
  "key25": "3HWRnN4gt7ZKioc8pJaBGk6Ld4cys7Kcw7GZTAbS5PP4wVjb1XK7BqPNAQA7X3fzgXvkgfpAzky6tLfcGXQcYmwe",
  "key26": "4zgfBjysWyDw1HkCZQ7BJXx3A7U8MgKep1PHS7C7q59oucn2TZ9iTPZ7euW3PyZMjs4TacfU9bLQp8bGFQvSwEjb",
  "key27": "3QzvLfEqHBPLgXnoqjto74njYNpgtAnNvEcW8ph1KuerYXp3ZmYfxuxW5Vc72ZGyY4hZZuWaadaRJTjaSJjHJKST",
  "key28": "3DB2Uk2HBszyNwjCgCyhJHZyyWwKqEsqNeh1X7iyopJ2mexFNLSHij9JwJKfRXupL94vfdTHTyf1AESsSh1wFjmf",
  "key29": "4qdiJYUb6Sh2QdVAaa4q3jNA9Cq7SMu6Zdhny7RCcHhNPFYHtkqaiVAmZE3Eny7vuy4V5MpDN6AEGSyb2o98zApo",
  "key30": "3jCZe9hM5uco9vhysLQoLpwd6iM3iGu6GMybydnDPjTEKN3fLbmKtv8JbTrXLryFQWk5nicH133HBNqvYaaibo9i",
  "key31": "5gAsVrkXiXjTwtRCYrRZWjR4ZFY4CFoRGCgkK6vG41ZELSSecsmEqNapZV8Nhurvk9GyTq9ik8X8RKL5nRomgBSL"
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
