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
    "3w3ZJoZGw9vsJxy5f9pYeWXVuWjsiMjhGnoG5Hp6BiEVeQzah6xEoFiJgTDAeuirkzcg5jPwghtgF7iQLLMG4VPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkbKHgvB4Beqt9cqEU8Mp5ByrDDtRZkdeGmMDW9EWj4osZtfT6eJAPwkZTzX2nCTcMtAnoiBgYnDstynjzB5yaa",
  "key1": "2p44MYjTKE3QtgQrHiBHrFkmRDXUGJR4XXW8tHWq48rj6Amymw9TsJdUvY6532bhnyZ4CxKiK9WF1qNrjoFpX67i",
  "key2": "5xgs8oziakgQYwGTpjASTk6HSqLbFBhnrZ8g7xHPnL6uyQNVywApBEnDTv5f6UxTd4j2V1aMPPCJucY4fRGoeccN",
  "key3": "Dum8bmxhTfo3157PMNYuvv96Nqb6DNHUsyUffSmvQDELpgX7FT9WC5d8unUNcycqp7RR6Wdcc4i5n6wGDvx27ec",
  "key4": "4V59vPkjtVFW15otMgbH7vWzNXiVSyKqeJUsNNqUHxoLxfk58fcT5d5xqFa82KiLhU5zTtfDvnXrU1fX8u8qTeTX",
  "key5": "5tPxrWJs9evQciGJaTjKU5SMBzjRtu2SS1NudB9zPbiK2UX5EnrCKKvxGwK7us2bbs2E8qrkSfhEComoyGEpCP5n",
  "key6": "xSQSCFGKAVwW6CQVZm34wLwYTcX3WpyFVtGDLMwe2Qa5a8jVg4Kifhghbyf2emhmripNnRrEqZPb19GJ3KM21zq",
  "key7": "64qU1XbaGzMtFgaafSDmaBnn1K7cJUPVbzBf1v2prW81SpYii9vy6FabmzmmYrXA6fDeWFk6YMcmbxLtQYjdxeRB",
  "key8": "4D6An8fvG7Kg8KpZ58gLwJgyhmn8E8KWxMj9bJZEhr9NE4twi5PaLRg3EAZGDwpnACgLcMEcU6hKPtbd4q2c4QpB",
  "key9": "6ff2MuHos2AVzLfQnvxyN55mbF9CG4p9Vt5wX7DfuFdjWEVrweBk1f8w3BAU2Xg82hY39FJUAKZCAtKMZ584c3e",
  "key10": "5NV2fKLeNicJvhi5RutHD1eK7jmgXuLszaRMaLUd1ufeGguPu7mWz17DUzYeKUwk1ZU6avo8mDnFiPFcraTb3WFj",
  "key11": "2eZhr3sU7qscPAYDLWkJ9wAntqtR13upQdxYmjiTDMNa7FqmtcPK12RJAupH1LxUJ2jRwoEojkVvrqUyfPVTcuv1",
  "key12": "5tag2Yb9MAjz1wn4YVzDRVi2YVGMCEujSFfkp9VG1PzKQJQr5wx6ciZM6fmmDXc6xJaRq6PJYQmUmR8c1jqDGnEs",
  "key13": "4fHEXxa1yve4oTe4ZUncAnbPLtmGWu1b87Ykwwi88aoe2J6t1TmBWQLMAoPmGRo3CMiXeCfriDmkjsJxKSkU9guz",
  "key14": "3tZG34RjNMfXaSaXdntbwQpBerP5JsTqcVNzsycfEMKJbwF28eREAGCKpiCGLLHHs6Cz6ZTEQYzQGsbz77MEBNjb",
  "key15": "3PLE18A9gfV6GHRq2GiwTRnkBbqnqCNzrkc6aC8iC5GdWGjr6X41PeJp6fkwiapT5Wkgd5S66fYcbAtqp5inii5f",
  "key16": "dXL6QRvkyPvYknpLvgcA5TDbtfqNqHkgES79a3YMUsUaTCLtQ4RR5ym1QrCwmaftU5bTVTAGz5rzCaTL4kxSnTg",
  "key17": "4yeR6FmPeKCBvsHoyynwEeuvnCGHMrbVNfkNeyFF4HVr9qmrJLsookkLTzdnEFbRc33zYmMvhRJ3QEadKWPpmBTZ",
  "key18": "3yhzG4LKa8W2i7pcMhK1MC5Cwmk3rWMAk1X827v31dXre3QWYLs9NcyYMvyEg1P2mSDeWCWsDYWWNrRSD2qVuhd3",
  "key19": "JozUg3ug9TMpPFfnjYJGevLR2wVqAsDsk3NAtn8kVzhQaBxnXWhc1dGcKdTMybXv8Q2wzJXpKnDB78D2buwZ6y4",
  "key20": "5nssRR3PpBykY5zwLFDtUnVvBtf74qgy7qWp9jXeeiobAbgty8eoXNiqs4J51GZhb7C9NiQQGfhw6pZiV9SzhLbE",
  "key21": "2uHuUfKZ92WMHb2Ds4CTHaRw2eKdxCtyjYC4XNrQELNhehyn2JXUcYJMbnoFnDpzdvxHGNUW9c352t5ZRRUzDG1m",
  "key22": "dXVU5GCUKNs915kQ5YrDLYTmvgoZizfFys6NEFqYEHHws2Pdfz98qh4yDQJDUAuhLpoQev2ixRrpXPbpGAkZ3ry",
  "key23": "rZ82L1uoUXStSuPBmUEkEqsJqVPjrKLRr4GWbzj1PUDGsZ2QivkRhbHUYDKVht3GKd3CGadbHrdaiS66TJiJ376",
  "key24": "2Ut4ip3e8onHCFK7zNZapwQ1XWofTBpppakoFEjo9eTQ6RmzzRxS77KEEYajtk5hieUxPWgHe7QPmyd6FPHPytXs",
  "key25": "5nXtuqB9hU6A2fLrFpXnKbEGhEp6Ccz263zPCKTpkyDnz3X6XGfWBJLiXt7dWSB3aBN1caroR8CdBxFS6pwE4qpg",
  "key26": "2bUCq8pRTH8XM6DSZyLHYyT6WpNSMkwAuaXPwWwHtHCooG5jmEqnHeRBrHxkJCZZ7znnUk7aUzaUtD1XCNyM7twe",
  "key27": "2AqraR2cp24LH2ig75YQ2Cam2ah2SBGv9oNhNVEtGbmu8tbA1uMFGvkcJCnrUhpHwXGnTEL2zoDYgZnxiK6TUY94",
  "key28": "4e7yEzqr9F7jQWDXEryMZPbBhgPU9BmxsPCKFBQS56RcwZ7LZSjDngTupUfVsZ3HXWuJTrHLCnApKvPwP1uuLGfD",
  "key29": "4bapKau9xJH7yLtpZoTYNee6JvQrUDNzAen34GQQFS8wuSUhpcXsRbB2E5xGn2NVYdhUDHDKcAPgteMi8UG8FA8w",
  "key30": "3H83yvLRAsvB4sibp1JuGH5uwrWWGnv5HTi8GyfKwPn2G5U6DnxaqRyo98b1hfGo4uaEH3dmWAZ2bBKZy7jSv3C3",
  "key31": "5ADsZhkusNHgpaMYu2Ams7c6NpwWSTJuGQCByeR8JXnBJ7uch4N6nn7FRo9Ggk6Aqn6D3bgXtPTr9vdFgejRt3Hy",
  "key32": "4nUcr79RyvTzBMe1CWrhJtq1vDdvVJ698BqLo44WiXJCzLjNghCCqCotQAMRXGgzJWcmEcbsitwHBKrMuNxCMx9F",
  "key33": "3CWszGJ9jZsTDpuBDVM2Abaiuicxtz2iHqgKkeNo432qu6VGr9ctY7WcAoEwGSEscZMkKJnUnFRxYWnTQtypSDty",
  "key34": "5J21DHZZhZ7gdDuQgAdMtpDpC7NaLpGfeUwd2LD3gQGSrpiWQgU8yfknq2WevVbyPxXyfLLAtjPaZJynBn1451fE",
  "key35": "3BCM8vADihzih3d4BZHBgXhCLjaXsKdKnJB3yfe6EFzTqHiaBHS4Gvfm3LUnFdoiSXPdQigYgmmXBNpW5XGtdiYZ",
  "key36": "2fXpSUUMbKaxbNYCnPnGSmPSZSxvoTjKEgR8V6B29GKM455vS7yFEzUY1nG3WU9cjNNuMmjLCM9h4Wz33uMktxzd",
  "key37": "MJ1kvmkACazLgeaaVYYHNLjgTZA94WrfiVsEiGMsypxTZ1fAvM44rjwMmiZvDnzfEyWqkhtsMXykjjZX3psN3RN",
  "key38": "4jCAoxkEJWpCspjLjJY39TvjkqxFnUhnERjULBZPpQVzJQLcE6S9ZvdWV1oghrAi7T5YQftGV32DCy2mf79VUdpu",
  "key39": "4x8CLevUcjEY3Dn8ZTRTy63QaVeviZx2bd5hJp2insxpMsKxVjZrab6DdtL7BrzsvrjyH1uMEsvAKr9kiQUzmTAW",
  "key40": "3WrwcHKNt2AKYJuU7zqNemTSZ19sro3Hrv6WCuhXLBeTUmotzqKA2vN4Tg1Trs82oXGZfwLxMvXMXNxkG4UgdR6"
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
