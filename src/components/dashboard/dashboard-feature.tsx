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
    "3qykYAiBWV7J1DZu5V3XNyzq4m62GPrZ4hLhpHzeKAgLyA6hB1yMwqTWqYi5SXdZMDQ8ztXK3sCDeMPdfmqPivtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UC7eMonoj7dHHgnCJ3FVgv3XsBgqFzT1ssdgrAqFLCoNyYPghdY1Sk8T9NdLwhGhBEkxKWdPsE5RtcqCRDpxvVb",
  "key1": "r6FMAhJBRwRcSPhHT4ATtHMcAfah2qPiSgo7HzbQLTDgoBz91Q6TS4VjHNxW87B5ucAvonKaZXFCq9JcEuK2M75",
  "key2": "4YGSZD6RFhc8Msvah1dw1uobtJca1dJPV4DpnMAHTvBh2NGdWHUAM7nseLcR8oXKZTWgFf2jvuehfTcSa6FpmoaU",
  "key3": "3ciLX6xf74Y2GtzdfhwQ6RENBZ9tD8D9GEjLreqojprwT1xBUbUwCbuFCZaCuaMYUSCDxbecm4Ke6vZpUEWzuZgr",
  "key4": "4wyCqDbHC8VMqp67y17L7PT4BuuuBrjYL2hp8RCWWEcu2ZBCW4jRfpip6AZ9kxMihBuWkrLkagUYMSYw7mM5kkif",
  "key5": "4P8K3rgLkVxE3aRxgQtpAVh729uQoNAYDaNq3mkpc7g65dHLGxUtegi7w3VzXvsMPQYCcuCijJAHrJH77T8hMzKA",
  "key6": "2Z9cpS6TMjqJaD6KnNbFNQeKvAtBBnKNEEWaEnZ6sCQRth2iD4xvVjAbeiHcSexW2dMSnyEa3Hu3ZnPJ2Swtqqvb",
  "key7": "2ns5ym6VV5seHqgqsKxsr7BkJy9w5EmupaqHwZQpqvmY6ZtQFaWrBjaACfkT6eFJtAwn7uRXPgg5TwLBakwk4jZX",
  "key8": "5ocaq1wFs4Lv2vgfW3FjhGi2K2mhNcQtjCgLS2jxB4s8vtFfwwQwHf2K1bnjJ6CzrWrc45f7TRaqDceWMaV99UNq",
  "key9": "2t8DhU6Jpx4JTredw9Tys9UzPdh8CGDHsHmeG5xjaQDwqDT6HyA8EeXDmijzQqRRW1AaCX6YTCLLzUzwt5vi7unX",
  "key10": "59ahzQGDq6TZQwUEHGcEFrnLYicyhWJ1WVHa7zaQ2qSDhzKqtF9UCxRN84SPY6r1j8Na2QKkEcrVRGzwWTzgsfZi",
  "key11": "5Qxb7fwri7wjKJqbHju4WgcEfL1ZRKr6Rg37F81BXsyAU8r6yewnkv7BtYmcKab2qhXPwFSMyvzKywTEK2CQjK6q",
  "key12": "5nRNZ2T1kWSqQxCBGdDJrtxDJM9Aer9p6KsBwEzQqEQyHXUSfxNuz2964yjaZ3MFJ5LGP3cX9bmwqB98uqz32aJv",
  "key13": "4dNzDmdeq2f9RDh5PKSR1dwjvNZkuj6jGgSr2T4T5ZwuJ1rQRzbh91xC7Mc4RFMdqyrGaRnyRKU2qeGS9TjaTB1g",
  "key14": "2xfpMtWvyCfxJHiUZH9f88ixQVhBUpTEPcA2ojhWt2mTPEN2Lh4frdPUsamT7XqPC3P8QjLjpZbBx2Vhx15ikDUm",
  "key15": "5RLA7gSnZgaYP4s8Qys61kcYxkvy4tKC1b89ttBz9pZMKkw5qcfNMhxQYUWxSQFbGLdjBGzUuahpLRWVbckSA6Ua",
  "key16": "5MwzwkJy7YyZz6w26Ef5n6Q6jzuAQR4GuDof4D9cMJ4mFpyoQw7sajzzMqehv9nb3FpEUzvCUksBQFicW1XVkBpP",
  "key17": "2oNK4TpJAwsSHaQws1iqy2CZ8uv7oBjpBniT7z3nyKqkbpoPtXffvBhqdQfaEFjCDj7puDWC5aBFfkGeoLpW2PS1",
  "key18": "2UiBRc7bKgJMEQo9Z1HN6uYq4fRdf6vnq5bXDwggYSWtEmAeUujzWzLRysuY4hUJEBFKBXmxMSKRqFvP8Uzwzqvt",
  "key19": "55QL4wwAKaz3SoqwqY5TEMLcBppiyHYqUuSoe5GEMB1WnLg459ydaAHheL3r3119CSXf2av6m2tmZzqepsy8YYNn",
  "key20": "42zNjasE3VucXPJkWoZ9X6ZEaeXEQoYovzVLkWG9ZLJcEtKsJJ26kZaVksfPt4PtoapLtP7kDenY8YMEBeCW5QE7",
  "key21": "4FRf65RaknXcvCzcRaQs4EapTiptA9PnaHnDqSAzk4qfYk4s1EA21AndaUMvMEWmNwyo3BawDAyRVyVfi2RbwcFW",
  "key22": "5zkdnR54jCBLqR4vmzqMAWR272C3nhhBCDdYnq2tuCgHWvDatkCzw8qFSevBpGVQvtmodt77ympcanzakzoRtSck",
  "key23": "4xRX5eDJxXSc2r8tgNzg2gnB6BXFxEREjX2NCVAZarRqph1GFgrYbNoKq6cZrL91xTg8Tbmy7Rs7EQnfFskBmFFV",
  "key24": "SNR8S3BiDoPB1QoBHTWMg8jfHECghzNEG7x2eaaffWLxNmKDx9ZbSYSB2NmLi6ne6cMaBXHrJSQwtEaFuAYpYSz",
  "key25": "CZFbUFMRcniHeA8ZDgs9tS3jhKL5a3WMr2nM8U2V8r5LF9RbThEHndRmW1x3GozVDSp2FeJXqURD77ARjX7r2Nk",
  "key26": "4k8jDY2pTGPGBf13BcPZVkDCEWGm8eUkR5Yc4yeGptboS44Xz3CQqMieNRtcMXLcR4h5GKsi1XX3pdy1G4Psp7fg",
  "key27": "4vi1RiKaRTupqAENX8NJc3sHgrWy6s1rLMEuE1D6DqFJ2NA1iNWfbEFRVAyzLWby1fHCAt7eJ8xx5mcDZ6BXgfm4",
  "key28": "4sxFM8Bv6XGa61sPA8ZRZTHRe46pDaHcvuRZ8zu5B314SNDjKcKRjQoo8Wz227uYhknzoJk2kTacZp8WNQT1DuB1",
  "key29": "4EkpYXMZnRx7sjhRJvk1nvGQEFtFugrgQ1c2ezCivec1RdkC9fMVg9ReSduUuqtREhMdqiJnqYkpMcjS5x33NtEg",
  "key30": "3gifF9216r7K3hgWuqJ8U78EELVvPFWiyKsbswk7ZBayFE6oA77BZKoTaA9CgRriy7TSwVobZHJkeVmnsbJ85o2H",
  "key31": "JTMmBscVsMNRPntiTbQEPojCZy8Upu3sLZ2Hc8FuPnEmM8c1cbdDdWSoubEdFBfTgTVuEtrmA3zDx4EAw26dQWW",
  "key32": "5jQU1T2whRSX1u6qGMEPVsqV8bcdFLZPDgmD6HVppXTMFycwJzGsj7BZXhSbMPAAHMZamyporLm8mhJyKTzmqSrg",
  "key33": "4fJgcGs7eZwbfna57eyacpsnNTf39nvRzRoTSgkwj3RK27kio3FNND3JBJP86W5qc8C2A5yCvQbw3WNFimiZmUXn",
  "key34": "5bzSKmy5tsKGSNizGPvd6fNRu6sB4cRH1V5TWSYa2KWQbkzwRxtWomUBbgU4rAaC567hLnGtfXKYX8B8Pj7VLVAg",
  "key35": "6eDabsd3668r32tCCiUsHVCHb8mdNpsYaWaJNFwDHzmrqB6XPuD2m2WwyT8KPLU7JPHDnUubW4a94Tqp5eEamsY",
  "key36": "2DiCfea8Wtc48QpHPjhHsa6YL6nYaTGVwjdjFhahuF1zAXCs7QGAp3PwGdCrLKwH2uwyafMHq1zTy2VmBEG17C7P",
  "key37": "51fALPRbRSPtuM9xwdpyFnxWTYva79bmntUR1bMyzH54NPypKTHh77eUa5R7TJmDuf9d4EQswBBGk3Yzxk54EPoZ",
  "key38": "5BsDSvVF9ZUeAEVLMCra8f2wndEXEJrDioJepjShxcjdjvEUhTFfCPDABq4hb1qjbsVAcfBz5FcpKCcgN6MoZULs",
  "key39": "2uctVjDjjPLPop8m3KrZSJkfVCsbAeg2ANof5rm2nEVjovSAUQdrp722JwUaWDQe7L9phxcCM2egNK5DabeQ8jCy",
  "key40": "47jDdqej5mcn2wovjjTdPcaqD3K4QL7wqNcabd2wt2h7xgs66qt48ah16FLyT9sNF1jhrwm9dJqyj8PLXwi9dAfW",
  "key41": "Vtu7RZcW96MgnjpR7vYjB9qoYZbbtRkHpWY1jeJvimLJQwAiSF9m3daTGxTkv4JFRdVGM3rNje8zDSAu9zRZd3N",
  "key42": "3dCq9n4tBu6aBw9ptWRBwErbzjwB3m9aWgCygD4XwGzNJH3fnCtWsrpTzpPXZUwpf6czCTHdCtZp5FcSgtDow3mT",
  "key43": "41FPaYDNCvjHU7uPGi5m2h8ApC1yRdVMPtLJdRLEqjWjHyjc33tzt81gG1AFACHus23VVUz4AzeK9MBiww4yRcNW",
  "key44": "425NGNtL2EoyVLmiP5A7HNDQCycRfVuAyveQRze3zKPenZdsrRRiVDsvhtsBeF4hEjgB1DMMx5kVmrahjtYbtuk6",
  "key45": "3jeFQu3aFwoZofq9UcLDHaXsU8d9iqwZRfvruQGt99wQFiswQX9hnfe5hrVuwbNHAT98db6MRrzpuBbT25byW5Kn",
  "key46": "2FR9ZfVsaN9KVL5krxrEDDN3npMMsNdM9VyodW3n3jUnciSuEE9ppD8Va4sS8hY2weRHQniwquRprhNx4Au3cqYn",
  "key47": "23SEsdttoTwwZR1suaWMHWfLSjZsKJ4q5fYgkQerSSkwLdk23arVGc8u2bC6aMgsYBPUvvAjyQV3euEcE9cERtpb"
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
