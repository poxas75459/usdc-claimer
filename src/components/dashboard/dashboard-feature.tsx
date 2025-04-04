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
    "3Hdo7PEaGTu6FxxmdkHKhzofQM9eUDgpzHyMoR5oRxKBygqEDUFEjnVpPWtUUQ7B4zU5iam3eRwtJi22ShGwCPTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ia4PrGCR9bPwDX8otQMoqCavdfSSJHFCC1Z93WFfNcaWWvX7H2gxQU8UnrUvFR63udNVZpJCbCPGUR1ubMeLai",
  "key1": "2HSWfw1mRsuzLgcjDgU347KiG1izbHLVwUgddcaFrgygyJSCbkULT8rSiTCsqJR7EEA1dW6XLac6uoffrEktf7uy",
  "key2": "4M7jDKC4a5YLnEHUzDMQU37mfDmDzMUAgYKdhEffDNjUne8Tkbktbhgmni5beQwpY4fijm66z4iX7QWRGSMtR9LH",
  "key3": "5bZZwCx8rFbfCQG7dcDBL5C5mofG1cnQHZu5H3kYhco9wPRe1A5dajs9fFDo8DwFGz4UN91puhffub3kFuSyMNWW",
  "key4": "2SvL417FVXCyJCaivGPdf1E3xCtMu81RaaPvvJ5XBmDbKZmQpCKQ7AvwRwaH4aQP2LHxbiL7kma9wbHFoBQLEKU3",
  "key5": "bmnoeKS6Z77a2pS6b7ttHkwBSYN3aP8yyfPT4W8mdRFCCmkQotHNQq1aDHQpTXuNTKHe2FyptrJYbtagEqLyTkL",
  "key6": "5jxtwWpMdd28tM31LbEt2d9Sa1AaDqQ5vrresFwHrq8ybuA8ZLhr5guAwpZaXUxPTbThX3tiPwtNjL8rWxWtvagp",
  "key7": "5d6WcSrTieKZSUrcGrPK11iu7imvhdeRuFh1CSCttmL68a9YQ1raxc9Jz3jA6QS3y1uLDpMZ3sva1ts1vDdi3EQx",
  "key8": "3BMdZTxHPDxSgoMyQiYVq6tSaCBbkVtWvrjrgL1yVxo7qeqnZ5wgakkiJ6KdJfaDAamUEM8BpyLpH7mmMrmK7atU",
  "key9": "64oczsmQ8GEj4X1wkidmAttb1gq1uHkPYJHaduW3BStGBu2PS4QdrzBDgwrvZJJpd4AdJbp6qeGjaan8T3wWaWsY",
  "key10": "62i3Jx1mX4WuVgpuiXZKcgzTw4R9qXfHTSaavXKEXitFeumnahxqmKEsuBpXueoc9hgzsoDJw5Rzbb3DVQEUrf9n",
  "key11": "4GZsUwPsuGekUNQVGtJuzHgHxydDdUpkPvZFhkNv5ec3vsLv62sk8YNEEpTmBNm358NP4EBKix9NtrThK7U4gUBA",
  "key12": "4saWhsiWA3c99Pu69sXGBwYDkZPZgUiDyjK555KY6hMnHZYbYbcWRm8WZCAjeWkkxwCihL1c7wL8TvfinDXCXA7p",
  "key13": "413ioCnUZjrtYchu7ca92rNY456LptHdkGjVmFef7BZQXaariAJTyN3Aw4yWAjyC9F7Zf8ktji6DNgX3HtvPDP7Q",
  "key14": "2JiqJW3CTGiTSRzJAH78N3djqw3giqPpG5JLqADvsJq9BZtF5vo9PFDvnGDd7DUqeg9daG3tG9Wu4cS1ysZBa7eC",
  "key15": "5vigYyeiRscaeK5ZKjkG75XYBQLsmZsbQb8UnMwcGG2GooNfQuAYMVok5iV7mkqMp7aWczAFJfoDDeiK3cskFAmo",
  "key16": "4CugP3ABytcZ17RPxdQHrvoaGJTUGWyAcMCudzCJ6GHwssX3DfwgPdyiC2E56bVNjvve8EV6bcbWazX7tLDhkr7Z",
  "key17": "2x3kHPubkExMch6vFTNcU5KYMsARE1aFW3R4a4ZxmuMgCrd1GWJeM37QEiopH6cMC8fNJjXWbSjiGdKh1tWVZXLb",
  "key18": "4QfMW29HK4DKMaU3GAMLtKBfxqtWswPjHYFEBShK16RWctwK3tZGijBaGsTAAGpbjF9e8UL2jN7kZq27msaT8b31",
  "key19": "3RXeowNxmtjuymDT4RtV93iiREekXMEBSHXzH1TDPiUkvn4DyuVpmiANR2TDhrt4PUvUMfH7ZCRemYychnhLfPHH",
  "key20": "4NTLccykWGS4hNaXZfWdFA8oosHPZnuakWacn6xS4F957VSdBF2uX33Ws5eHgKHUVt3gQZijAPGpnBDrA3tTMpia",
  "key21": "2D4TqP9wkNnJjmhQstA7JGB3ZsEw29PJBB8ido32CEQGK8PXjXWLeyakuom5nsMQ9vr3H8CYAhaqc9trcZzfcgoK",
  "key22": "4rd2TP5esQNjzVLiCtiEkEXEWvQDnFn7BXXoev8kYWyNSmPuMAmL4jVFHArqREnpDS3v5n7Sn2yMmYWvwN6gSoDG",
  "key23": "32SawfvhSE4zGSyj7nPfy2JKBD2d8pmzov4gXX7nG6jdZmdHqEZ51NyZQtAdq9yc9W6VQzGdorguGhKNMn27qRtp",
  "key24": "3FYhbF4mEukUjXzkPW5Z5ypGfFPEVPpD9D4dA5Z44HZRuU2RDDRiH3BgjYUvETTZzSkVoPoVxzUmX7MAr1462MKk",
  "key25": "Ma5ndKCVXBGEUtzchczZNpFGfmpVyxs8r2J6sfXHBtofLpQLtiHBwUDodMkBxjM5mETBP5MaQ29wTwNKDF8bz4h",
  "key26": "4qMHNwojV7iyeMYpBsxtAPbcbcEykqpMnoKEk8wyU1T1hnWLESRph6Qw2YR7nT5ywXSJFYFJfSyuFLGkgGLoZYQ9",
  "key27": "51NB3arQ1ofHjQhpMbAgCVdMvmUNhzTe37ySxKkHe4pJ6d3KeyVoqLs6HRdabNjFizPAboEbQoCDr89dHtuwAyxf",
  "key28": "4cGnU2mMLWfrGB4Tr4Z8R5GXRaoncv9jjvEVPb4WN6QVrxCq8x1gJksFuKaSVy3eWGoCPmJQqQkQB63fY6TZqkrQ",
  "key29": "5Too1Haq9EZGV3e7GLncvpBr28BwaHZx4Nn3gCQ8ToH5dMLKwG2fabUMYNYTJBR9dsSWi6FEY6vheoYKc33NU7gL",
  "key30": "2kMdQK3QL6UKNxrwjFoZWTrfGqsD3jkvYTSMVw8BgExYZ8UqT6mJKcZSd1U5UqLQRscPBtY68JUwXSaYwSBBfBnX",
  "key31": "43XgK3EwPXxxQeXBb9ir4B53mLEw2EheDtfsPd5ZCxxzfEPAVeqG6GUGZiKZvFy9R9s4NwPwvMwhUQ81nWuUoyaH",
  "key32": "2YGiti5FnVtePgtH9dYW15CWLXuZH15HrUjFH65qwchyXKzwnn5eKzWKV5VheHfhsjNqxXvq3sUFHvZjvnNM1W7V",
  "key33": "2Hvw2hbUNWoW1ZmUxNfC55KTrSxTJWXCqkwxia9YaCfEvfpRFHaSW5oEkFXc3Lk4wfQgGwnUvKUXLchgEZaNdL9p",
  "key34": "3B7KcfkyoBLyAFqUV5oXqLzqv7d5wiRPfv2qLU2qEbTJaEAQ37KZfeq3RR9XRmpCB3jcbUT6qHBCf86aBTgFAWV9",
  "key35": "64no67FUpkXLvJbn8K2Z3T5haEBekc8MizQTLobXvmgahQfMEeymjznWwNuJqsywENv6JXiWF6YGKsghW5SkJF6P",
  "key36": "37ArGrrNayZuV88DMxLwMakq7Ma2r32mZcgLHSR6i48sf3BaEMsqaHk2cgbqQYkwshmdqu2of5FVwxb8KB5wfxUV",
  "key37": "5EoWNbMEFWRvGHk8bZtiS1MxKA3aWBmMM9a42dFUXrViypJ6xdLMZffUvLMS1RvcJ7GSBXJHq2rEnwEgPgPeEUgH",
  "key38": "27zzQ48BYREVgtQrJzBrmroG9HBaRT3Ar8kyQR73xHH4X3hs67QZRpQg4voc47BjL4kr7mufmBxX9cMDPYo2DkUn",
  "key39": "3E5GHKQnQowZfiFJJGfcWiP1Nab9oehLso4SrvUC2mneUeaKEm2NqY9PZ2ZjLXZpG2tybdr1qC5P1wwZBmi8JZyU",
  "key40": "A7jFMK8ezZZSsUT5mELKVAXvWGi9RiJSBFgMEtM2gXADajeaeAJZi3hb8KkSuDccQ9YdwwRstfbKdmnKGjrw1i4",
  "key41": "4YhXegqikQrbx8aF4bVYkNhqvudM5wG4Awj6qkRfetPzYspm3wf6KvXiobTxewW1XYemUMMf5ariFYCpQuVV11jm",
  "key42": "4bgPGxq6JLUT6ZdCUZj38VJfSTbAThApoQezDj5eCJF3So6dGbVciChiMLnk5GsXW47kd5MCq2MtGGfwoMAK8Vyj"
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
