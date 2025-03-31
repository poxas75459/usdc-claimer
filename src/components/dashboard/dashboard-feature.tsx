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
    "2QC6mKVttymRq8Lki7U7RbMGG4goyTFttDbWqdytt9GGvJHk1LNA6HTnppeXFjk6XnKfeTtDJiWEVxoLTLf7Wi1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rdvztL3ShpTR2A89zVKZEWdStEkpMBiQgK8he8w5Grv1hxX3vZuPdvRbC4xzzfgVLKgr9oCHogY9guPezbYXrX",
  "key1": "NCKH8k6T7GVLccEmd4HNZpzFRP8HRPYtKQdVPTpPk8NR7vmLaKgmoyAhahALajBShzoZHxCVn9ff8wot1JtWXkL",
  "key2": "zxsvCGey56EZkDwMoHtTvpsNusvqGzjgf9Bnda82b4ut6jHCyrzMGH1KcRWXzzyggFhkGV1MpEv8JxXTVvKPAaY",
  "key3": "33VvC5Ro4LNt4rpHoT9J4udXuenSU5cUt9UfxFxh3La4eB2gtezXeMfcsvqjUuyyy7iV42BJLCNK5uRtTojrY6it",
  "key4": "Ybmku1D98f99RfiQQyfgULDGAtCymjzv65wBcYQPiFEysypzyxjDiVJdXdD4VgZ1rho7zafxrNqeTmf1CS5ywkz",
  "key5": "4ZurhyZbVR8u7GQ3wDfeookW9FsPjy6gncHAwxjtXG7dbuFcM7JYEtUs26bfkdbxuypq4Xaia9HL65bPhWKrVsqF",
  "key6": "LhYP8QuRdLqW4XPVKBJjeKmnHR756pKuT9mm7s7rTc24U1vNjp26z2MuhziN44R6GXAkHqJLxE3tHHTwydShJER",
  "key7": "4rG4C3R3PHrfGeFaQkbrBG9EmZERFswQMpDATBTFcyJBUKkuuJVZbn5nxc6Xu39utrNBMkjwF5RdfVho3hqQjuHC",
  "key8": "WsHDy1ZAMeZ5m5oz7kPFqoaen5MPHsKh1FhZW3EysWM5erFyQhwNt5czcK7VkGWwF5sx2DDbXFDLhr2wcVunYCW",
  "key9": "4cfEVJbnzK8d4XWNqerZt3fe6ngX2pfVm3UmbshdWpN15LKneCV6ZMeFfHqHUiHGXPkHjtTYjkCENZpWyMZ5q7DS",
  "key10": "4bEEBvFZNxc2PpK4X6Jse5sdtyFY18gRUzLErMcpmhN3jixuNC751u5Kvax96fosRTXFAdfbBAjqfz6hDoJf3x1B",
  "key11": "5tCGvQbtSjGUuiCDxmsk65aNPyva7FQT3MHSSJNavzugYB2r2gSz7pY8as3zdVEfHuXajVpJmomt5XTeBwLeLHVM",
  "key12": "4x8pF2MiBnkkq4nTTciGwAUY5USN7qyHhGbeumUD6YYtBpHcjSCsEWR5YP3swkkM2W9yXAwZnS9SmN2SAV8dFQtw",
  "key13": "3HtebppzYkrwTaRyJZMUG3tDp5r9FAgQT9K1D994JC6KeSKLewKWSYnAjpiqgyfb68yh9Bdd7QpZtCHEYvvWJoEs",
  "key14": "5BG8bpyUnTcZb7wr8pSvZeNcseeG3baWQvfmFkwZeu3Hn17YaLVMD67USPktHHFNMp6osT8E1vWJeSTTzXY28SFD",
  "key15": "TQ1Zn7H67mc6LT7P6FRNPZ2bBDD6Qd9ueYbMjhhPiMvzenX2g3o2sonjmPL48bTa5yEgWjFQiDQpa4FaF4jjuPG",
  "key16": "2sMcAQMuopLS6inNLSHjeap97J56dUEe7NG6SWFWCdvnDCwBSkxNGxpQ6uEjJYcw2Lrn12uUEmbTaWqzZBFERTWv",
  "key17": "4ogw7A3vo6YV96UcWjfUHRxGLZSA8bsNw3HokfBKdrtFmKYYdSZ5Y8b3Qvbr8sJJd7jR3TXpBSCEH8jXdDpmWKBN",
  "key18": "27R7jKsXsvNUJyHu5DvuvsH2AidD5qfbiu3aMmPWUixtU59Mjf4J89gxBTicEQygWNjaiaqrtghZuioDSkaCz2A2",
  "key19": "5VFtHNoRcRXbEorPRMKiboU3TAG27VEjvt5H8sB5UfzHmExnMc6ExnTjTp1rcUnrseBYTiEEvHTRiMyuy8LcqWSC",
  "key20": "tqxREx7S54FmRJEhNhBi6setSe9mMK4ExtWpQra88yrcTo3kM1feBXKzCDNjz8rJi3PRQ6ctar2cdSokZbXRUoK",
  "key21": "4z3H8XTUQTruU3AvPt5tcHp75uLShuwQB6ZQ3XgYQWkYPiTPWxteHDqrS2FSXpu2pn91KHojqaFKADDexRaCK3He",
  "key22": "4E4Pvi17HXh7egPv1dZ6qUNN9Bsac345WVK9ZTKkHy93jYDzG2NEchUjZVuVRxdcXiaTwYh9Vd9cH2R9Wa3xsX5o",
  "key23": "2U4hWDGUpqfM5uAwBfJn65noiuvoBBGETi63zFpgm4raV6gx4Xp93XNrohquFs2HhEDshKcJ75v4GmTyokNNPfsk",
  "key24": "5qXMTkHhhgsZTz3aHirNMPAvBAsnjFDTynenyFcydZ4rG7vcztdGSdu8rKqdhSBLn32eUgeVeNF2bxb8SvDsnsN6",
  "key25": "qroJpC9mRdgnrEhLAw8DNnT9s8J5MrUhWPJbeDrT84331qpjqW41CPrBeyguNXqjurSiSzVSR52PGyLgLEWh8ZA",
  "key26": "5jSYwhqigLt5rEQ5XM62QkmBCEPDWUMDcRqAJpXVXE1L4vApnEYSAKKV8FWtvwAYpGJFyQh6p5HGqEbxxU3Yj7ff",
  "key27": "4ipmnWGxxF8LKenNLAacshw6KM8C5MgoGNVXGMm14zAuSDxzdk2wf37xAxigB6sGiBi6zVyD7tYAWXeghtBsR5p6",
  "key28": "3DULv863eAdQTsxptA9tUU2zpkaPgn5PecpMYwp1DLgqxrX6esTrMzETQfLsyQS9ykNSxJvCRPQNScGVXZAQKrGB",
  "key29": "5TS8dwHDQUWcHrwHX4ZEwUzJFNMJTnqy668GzeD82So3CN7TqkUyULq1VMoFUgUuoZfo3WfBJWniCirzh8nqTYvZ",
  "key30": "4RRLmPVTTrK96QQ4BnHQVbB4innFamSV79Hwf4NAAcLH3WFtiZzffw8Q1sySRBmNnsjJZGu1tbDRAqrqvP46rt2G",
  "key31": "paRyCHSfFTk7fGnbFPDuJydNqSYT8zA3Gx2pF6JfkxQX8xL5M5QeBWRjkJKU8jQodEvDYd4TXcnqKSWnHVmZkfW",
  "key32": "qPm3WsbPyc3xRQtLBZy4e16bZtpPXo3ztwRQLmeMM3QteEvaMYgaUaPxFsPcHRDZf3TwMdm4U8nGWn8Y2Qqbp6A",
  "key33": "4491Ma9inbm6Np4MJ4RYZzWUUS7TTFK35zkbYoynGM2kDzT37jo2gTkHQ24hf4CFfc85fbHKyEjdUQ3qNRTki5b8",
  "key34": "5D3o8yCJohY6HHBnkG3VphKbpifW5tK64BeYDhMucuU35gtBGxBYfGpZaYBfyMz2gsUa7JbtvU6zJe3Juv2Cdvkp",
  "key35": "5FCu4PvqmoYB7QYR22t9WinZow1Pxo6QTsY6krWRzc3GCZAKoyuRNz5QYcZdxK8NDN1EY4ESkNVHu1ucm9o4cN5d",
  "key36": "3Pph6zpvd2wrMxyzpEEmxZMdbR9agsjYNhh1iVcC8qdnmogpWvssq7zmGjGHvZH9qMfZXSGfPAkhgCTcd7UGz8dN",
  "key37": "TzpyUYR3KZfECsCG1w9WMe4FA1BpiAe3fWLCBzzugkTj9pmmL97DHKneeQ4yEx1FuiHLfc52CSQkVe4tq1WwEGo",
  "key38": "2vAvCuXjt9vonLcq14eunBgJs253DapMPWhKUKppQ9mnsMV9HKDa3ZKgytdjDwjAXZ6Z7yxbDNajpsKdT19Esr1Q",
  "key39": "FMfB4n4zFiVEN1HwswwCAoqVH6euSBB7bLqYgXo71eLXVRphQGiYQGZbsv9LfexpFYdSxfotHsi8XLWHUotavVf",
  "key40": "3XbULNXWYj9FY3qHnjaMBUfhU7u6gtGjMRDbpqo4CH1BzZfAv6aAqTm5yWdsJFMmvcRb1NSopX8Lndx5qDW5yRHQ",
  "key41": "3vMqkipvEDFTR6WELRU9scR2YYiTVGqs1yyZGW4SNYoXV4xnJmC6DKV1oNSknHhcf2ZRKzm1aeRqgR7br5FguuqM",
  "key42": "4JXUVzGieVi4Xbv4pBFhFfCQ1yr8PruLSQpN5jwnnq27qiA1HHibfUugfyNjSVh3ozinX7xfN9VyLJLp6uEwBhaG",
  "key43": "2gfrbZCgwLKA3RdYup843eKXf5wDP2hUaekhmzH1n4QJAkFAzAGMvyMyBZNg1XRrZUBtMkHoerVBNjRpxYA1cDoL",
  "key44": "4fPa6MZAcWQoyVCxFMPVPi286PV1raaF8a2wJWAVsK8GZ6cniCLwFe7BNzhervqLQWnMP7eDgBd6pPed11MBU86J"
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
