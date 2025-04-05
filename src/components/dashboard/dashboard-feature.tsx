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
    "66pPNqpstmfdf3HRECPGTE5P6sTtxcKF36n3MwcQaRDZ418MreszpnhpJufvwDemLhn3CRMUjfmRvnPgKEhanjR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFSf9BKsTJZryJmnTjX3HNUakjxj9WahW2iH9wNUZfM2VMyqWiN4WRapQRzqaSmhbLTQt56Xkp3ReuyHCgV5d48",
  "key1": "wA1aabsmr8aBtSPWGzL9ojyjGw9vP1mE6FJQGRMrMZDdVyqeJuN28rqLVP5zeFquLJa5KbF5KtfxrYiDcAAFyPx",
  "key2": "4oKUkq9iFfCc16c7yNh3j5Ltx3rqAEWyE81rtSym3mzqqZQrHzdxQc4ADG3UkkgbggL4WidXX96jkwhtkVKPeXMh",
  "key3": "qey44f9JG33okwS53Hdm9HtTP7xbZaN9icZqfXnC7syFcWcdesmoy421BcpagpfJvUnGSNU9oZpT2CggYLYxk2D",
  "key4": "53fiYmaDUKJ397cNzSsyRqYkhJvZtbYSDKrfB5HvEicwnHYvjJczygPGDCeziyNw4ud2UvxHrv3KLhVRoG552ruX",
  "key5": "1eNMB3YKsYHywQYQp8gSZ23cdwZpmjhJf9nq6jLtdGW155XVxLShK69Q2r8EzLcuhKzAzzovpwcUAWiqv8PM63J",
  "key6": "WR8fEjc6RqNcuESswj3rW2iDw4N46vYD4FTExBiisMfvfF9FtytJXXAe2vUDasTfzzjvWLtjhTjHtGoTxKc248a",
  "key7": "3TqSFVP27ekotCES6uyFhYrqahCfAzefyix7HSth8HVVp3ToeCttBscfpuv8EfSJVfJpAvCp2jgjFacfdYavjEpj",
  "key8": "UgjumuExt2q4zaEFiebRouBKv1nzRmV1FF7oeS2CxLhipph7EJATxe5gtUooKsUGnFFAD2PpbpRQZR9df6K4pGR",
  "key9": "2diK8Qp1fNRE1Mvk9VSNQQt5DA816XRzd3Ycy1LFK4E5kvUQFUYbxaN6ESBfCDSUwsznhH8y74HB2ejaSsCyK6St",
  "key10": "4qJ6es682HdqZn2CbBa5poR35TNDLFD7kvpEXzwZS9PYHgu8ehDfpXs1FopvsiRgGRVgBXmD4iayR51MHK1tWWad",
  "key11": "4omHi3qKFrmT4DBbX8BqbbZrLd5qX7TmXQR6MWcWN6uvX6TabvpbNNPAN7LP89Att15iT1C2nsqyo9w5QtMb2LRe",
  "key12": "4pQmUAb8AX2Jita4HZZUu13iG6j752S9MieMMC3ArYTfC66XRrkttyBeqWYr8HxabEcrJzyReGZNqzQyMkTm4vTy",
  "key13": "5GnARqtyxExnGwctCaUcEwRPUc2LQApbspmUs7yjkGRYRbH2RFYVmjaCB4LKQXM37TEFb6AB481No6CeyWMhvPsn",
  "key14": "4SQVp3o9669dF8GxaHjJfasmmPc6qwJ2kGZ7sLSx8GTjHWjtRHHbEbr4qUdC19zTwkBYXCq92G2Lsn67GgdAFwXa",
  "key15": "QNxa1qpcvkUTqedTQVfhUhjK5PJtz8F5UJSb38zu4VqHSxPa3nmfyPLefPNHbFaqgNcxZvqBqPtnWoxX6822Q34",
  "key16": "5vFfvxyFogzvhA7iLGXX3WCVUVWMoeZ22712t2JHtN4zUG3qWmZDhApbMraTAA1DYmpbfLCBErWi6xGgf1fC7QhS",
  "key17": "38tbWUs3Kkx9H9EcmzLFaSz4X7KeiqsNtqEoaAQ3Ty7KqAAdZVfyPp8V5ShyhjnXqnQcjCSTxyPvax6LSshyF62v",
  "key18": "2MBw5KaXiDyjZDBHfpyMcfgQygLwaeLiJz7DRR1rvtEqVSLaVWeyFZuRkKwcGvQ4gTsgp2dN4PxwzzfjQgYgozpT",
  "key19": "4TfYqA9myfU5xAPn8ZdiFgxrka1LWdAQnt34o5XT43DLiQch8Hk1y2uZkMkyjMaSKebHf5itrGSN8Y7NqgnqR4jJ",
  "key20": "3cueFb4Y2f8eSmgUL68skb3whYTj4T3xRxv2P7Lrj7RHmAkctLombWvV5Xe7Pso2pTrnkcTijvY8BPHCuJUFMtyK",
  "key21": "6aPdAL9aPcrPKvbmyNpZQ6rG4oNTaFaoKoKLsS3JjsEdRTEQtNTCDGMtgHe3xYEHHqCGv5HD1H3XURFEYyLnuxp",
  "key22": "6oq1BXApzJuu15Eud8ftUWosWFwRcZ6T8Gd73QDqbqAmdYAzvkzVYtc156tjx4XThCYixniH9aYeJaFydGAHHYE",
  "key23": "5RRgm79EqwvP7oRrynGB1oWfbNVyZPxHtrvKCqqXu2an6q7qr26JDBNG5YyRzHC3AsdZzd4bqbRVrEzuhzLFgTUa",
  "key24": "54vKJptcW2m7gm87CaK4qCVhbNqxf5ko8HFxCkcPKGeGzUKXEJA7DcUHAqawM5ccMcCvxMutuuDJ44LdLH6TUZvr",
  "key25": "nUwtxbrV1tkgk2novzCf7nf71ErRzVbD3QaUeEkAkxanhd9orNDmWsVMtVWSGWZ3DWBdTWurNEHP1RPZc5AvKv4",
  "key26": "5ULk8k4mH6VfQaKRuH8aGZeBVXgbvEMc1QDwxK4bHk1n9k49Xfd4iC4Y21QiZRPh5hYrNzbSLF7u4onCuUXiJEq3",
  "key27": "2hVaevMHtGGkBkVSmH6MdivtBqoFZZNn5jryZf98HacjvRLQPikgeiGmLthR6k9uai774vmNsuLfiyg3k1UVgVNJ",
  "key28": "2gmuMj9oudHachZkHUgTKLBoSrVNVLHbLaV653yFGVnoWqqZ4AD3MAz3gJiSsP3dqock8H7BkzTdPwxmnmnBjDSf",
  "key29": "F2S21M5oRWSgSpAgK2ugD5z7FkB7hgXJz89VECy9ovv42FqbUDrKaPsWFEenDv9riRjQ6yhM7MHnsx1Y7szMacd",
  "key30": "2R4btDXh9GuvuLDCv2mkkt14u1DTE5KB2NnuZ7cHt9yvHYeJ7yMn9r5x1xo4cp7QZbjsG8b4Dw1TjmrTa4ip3Ach",
  "key31": "4xnqJHgHHthCSAu6eJxzBLwYeJb9A5yjxx9LKGiJjSEsiAaWoD5VMsdHZnuQjKwgy1itwWoFcnVHmH3ncwkJwe8t",
  "key32": "28PRNMVdjXaCNX6UmdqmtPBjegpx1pxGzhK8yfT1TqjL8XFwLYNhK7K1gbGtypt12mocfFhBCfuG7m2KjnTTQSi2",
  "key33": "5oNuKfM48NUnXXdpedjBt2k31xnFR8iyYGoVgccXusWN6vfUdRRZrNqDzmXrzrgan8dhwh1uEoahbbahr6Xmo1wg",
  "key34": "3tB22PPVng14X6Ha8GfSH8CDkttJ4frGnDmcEri83wvmEAw9EbBoZHwLCAaS9PaY6D48EWKPw6Q7GdG2ppTey997",
  "key35": "32yFpkBuvrFwC2466eUBvxokXE8s3zD1EeQjLy6H6iGMTRcr7vjhfSmWgPesxAxuLcZwKpZv65EqSyjU2okbvEeg"
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
