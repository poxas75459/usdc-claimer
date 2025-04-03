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
    "32mtpLkXq86D92XySsYG6KcGMWnFQ3H8Ce1f3HKBR6pk2Aq9ZPRPNuCCUrUJx8mX1ps6iZsh4HrwPtdwHdefDMsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZhYs2219d3EwcAXN72uzqUd46sJPAsLKdTfnN2sJkk1qMNQaxoEW77RvFuy92ey2x7YQCbngWUJJ1vATv6ESJ1",
  "key1": "sM72HobTjuw9psM1SVMNdjqPhUFxSbJw3rWU9q1rr5AdgYF5Bxcq6t2MLMpJi9MdwDFcrurEzz7ohr7nEWGHQ13",
  "key2": "5YnrUJasUSsmQYTkKGPNm9MnPWucCnW4BRmJm2i3vCEZBigWpByrQVu3sWL5gp8G1duo52GzgwHDFLqntkJUJmrW",
  "key3": "5Vk8vHQ23ZitoysZtdeirHLGkfjrZBWHHKtSmombDFcHudarFFoJutosdcHz1JtvyABqojReTAC4gjEN7V9mkSGr",
  "key4": "5EPYP5STULcoX1Jq9MrYYX7vPnGuSpMsiiQXoUbZ9JY5TUzHwMu8tmLjXj7jGFJHZa7LUw5emVAhMwJZ4DXzZzjv",
  "key5": "2m4UaZ7kJQ7PrSAekYMXn8w3LiY5o4qLdiRbMrYAXbtw89BmC9hFprJULPkAAs3vwZUWnVBpvnfrm7MLGbWtkmus",
  "key6": "FW83hQVZu1Z2uWMf6rXB6Lp7tNVATSQs4vv7ei2wsvup6K255zPkJ4QfgDs4hQPFA9F5UacAP5rV6tVfHjV7cYX",
  "key7": "61GSDvK94vd3h6nzpxzt5bi7Lqyiibf8KDXtABtNLadmda2Mzzo8aerSnbLkYYS3kbyiM382wCHQNeA5Ue3noeBW",
  "key8": "5QtgXmPwLxbZpTWn5zxkxL1tM9zQrdVKX5ofwZsSE9TwbnRamUyVKVbi8N7nJcxqWTVoLb2eEdNXJLERHf69FqHE",
  "key9": "CoeEkAyAcics2GR3sohHN3VxcF3MxFRkgKZvEVfwoHGWUAY3FxEfriTrJuEHfjMnB456GNUCB4Wb84wEjUzgPEk",
  "key10": "76ZqRXG9sLH62hRhLYTaBUH1ppFP3LcQYs4xt8gqgr5mkhG81BFZyunTaTTDrHobmPcHoNdxoR26muZot3EAGZB",
  "key11": "3zNwe3EfYSw2aghtsjnUCjeBJR6CrK4yHNrUJUWt7qbrgZrbCpVmbbdAjBhC7e67qPVMPqk7XA3pLmFxUCRQuvHn",
  "key12": "2n8Ut9cQcAYHHWTWT8sDHhN7whWjbm4VTipZNLyTRGgtoWoZeL14mjnrWRpy3qfYH9LcqBUBn2TqcBmuNKZSxAjj",
  "key13": "WizcwDinwUkRFsCjszCBEL6HQh1f5X96dzLWhRC3ZNJEtimL8xiDXhwwcHgZtbCuKWrt143qiK1Z2T866Ad8zqM",
  "key14": "4VS6KLFGt5MTgyf931BcsFjijY7DZP5Kj84seBeP8YHMZMbvpS1D1gqbTK5v7UC4Npgc5yVSe5fHfqhx4nV5Tr6S",
  "key15": "4GwWKGH3WG3H7zzHezo6iK3Db61WEswf9cxPbBvTMkk3FBDSrnWa1MtmvgDPTn6MhEmPV9hcZNkcPkffjZ9tDaLz",
  "key16": "5ZttjW6JooU4PQak5LLFqbKo3KdFEQouTrWA1hhcbub1yg95gncjqATA571pjyXvTYYAsre2K2CV5W1aqzETWZCf",
  "key17": "izznjmVREkGtbPhMPy9o8XF46sHtDcJZ5qqo9ogVdGb59oyDeuFq23iCFumh6FfLExwQLZAaSUjQ5tUkx3sQw2P",
  "key18": "josbEFyJpW3rB6XEDKn4whCQCF2kc8XLfeGX34RQZzbekv6vCQSZHUXJEQbgvr8jr8oQbj7QDaxnY2593AJKm4P",
  "key19": "4sH6ndghNC1iWS1QRfzZK9tz4uB2Ztqgm684APnBPP6NMQa8EDEVcNxg39oSRGp2y7Zrqu4cMB2hPECTcEvxM8C1",
  "key20": "8HHMnNUbvC2LDQZsRcqR8SkJa6ZwrsLSkDPENAtupnFm43vbuaqUrSb7RmJ7ZHkF7XzCASAFX2xBPR4jB2WVpB3",
  "key21": "2p65PHCxQx1RWpvkoYQia245atZPTwx5b4nxKQsbkmkVJpCFZ4KjEMTNJBPMb58RapMaWSx75UKP4x6SvWJuLyTo",
  "key22": "433eNDMv26jo5cN5nP84NSirEfWQxuBT8amcTp7ewRVSrLNfXKweFuEV6MA7WRcCBT8Tj66483XQzpixvdwfWtYP",
  "key23": "5gNNzv9TfssWhKS3xYmepJ556wovpcenPYifKogCdvXSHB8VDrP3mjeWF6R8f2TjXHpbMwfqsHimxTyGg1cew9N",
  "key24": "3kPDLhBYsnRezmmDo2AgYUTg1tQ7cRqJbz9FUTCw5nPXDZstq9eLAwFmUXnHA4rYYhMA6GtbLMjedVMzkMvvNS62",
  "key25": "4mi46sPRWnM8twJ118v3qEoF2ePdYYU23gbtetogCcNJchjuq1ufBYFe6W7kQtSp7oddBJuDpKRWwuLr7EFUM8Fs",
  "key26": "47ppfBiwkD35NAs3GtfHuB3cCGwsuC4y3NhPHvsEVJUaYgoAPuXBDupUL48nFbCXE7jyWbThVY7RHUVB9nM7Yeqw",
  "key27": "4MCXp18rzi1fwjBpnAA8tHNoGr23tB91KsCD7myv5gt3gz3j6Ed7x7YW4ZV9HXRJLSv1U4NjbYq1mRmkDqv7XWgh",
  "key28": "62yUaJZh3t9quP1sLMKgMJPiRE6EpZ2ipwjQWoS9E3tChtHhPdBwufyY6asRF5y2wQvnzMWHYUgCk3dG7iT31Wxg",
  "key29": "3iH9wch3KdEAXRG3gpzSkQJsnYWfanDDe7hLzdFnpbfq8o4NojythWEDwfMYpgBVbq41sRjp78z8wtHS3G66U5qJ",
  "key30": "5xT1UDsJvPDkape8PLFYPbqeuP7ZMHmkyVz2nAen1kBWpx9gnvzankZpFfbcEL1cHszHcpLWPaEDzvww68vvHXBv",
  "key31": "5ACAaeV3TCtLYhvRg5pdSsVfsFWLyjzUYDrwdBohkHxiatCiaRdtnWbTCQ59t5MYQSQSHu11PcVNRZrpL8Q7Xr9h",
  "key32": "2agnNJ7bsZJcG1YJXSoeZsxJ1LgCGXpjnVH81f2jGb82BfTQ7MDbchBX4Y2AEoF8TxWtctdkdcTHkj6XNuZNKz7H",
  "key33": "41yuBTvczFquKvfdDXrXvr8SsHXoBjAHjQvBYiR2C5pp8ikRuVx97RjffAW9oVJWjGpis5DULrzkSPivxYzwnZet",
  "key34": "NB8znCZ6RrfBaGMQqMSt2oSVHhzgFg4tuCxGwkPSAeXmS1jFDD6vxNckxfQ3LsRRkH3WUPQYSKaCH7oEa5mizDe",
  "key35": "483ha42xc3dtM3ZRjg6ck26i2rFCPERR7EjQNTEaEwPJtSB2HnTcjsCZX7En1kHg6XpjsWjXprVT38EvkeJLPNk7",
  "key36": "uRnwsDFqJDKFmz8vf7dzSSnM8sNQ5oDPzKr753dAhLWBj8LyYcNgE9qB8EQUCSGu5iyrUKcPJzkQmmGvt56pLDe",
  "key37": "2Npyjctdj31ha5kCohDvMgrToR5mk7DV65LenxpviFktMGfxa25bCscCbBLXEJaZQHEmBj8STCfuqKYKKJfPXcqZ",
  "key38": "4kfFpnMRGnGTw5BhA3tgmS6HVPo5p9HmctJsNPYVFY5jJ72uTqbB6gRUHzJZrsdb8VzmuAjZanonZN9Mo4vSfx77",
  "key39": "5HCVdKsQ8h7xQXBoDE5aZtMD7xtxfSCyHVcV5q5YrXTuf7dSizoo2Tkz9ixa9r8eBbFS32F6VsrcBPAarUAkyfoh",
  "key40": "eRsrB11WkzCLr67YK6Xp6Z44Cv88H8PZG2VbZzRaFGZXHymbfnCsPeV4xn8cytebKyTm6hotApvo3aMgPMavK6q",
  "key41": "2MJ1CXSLarztcufuvucVsAQqXbgW3m5h5dTyKg2GVC7f53CAcqzcK6mnZA8No9YUZMo8m2hfqAV18PUhEddYHine",
  "key42": "39CoGu4DD5vHU8FU9RJJr8SPRj6RHFdjFaeLKiM2ZwVcnT2wuVxZHGBz5XNifUZDttPitBSX7B913e7FbvNZrBXD",
  "key43": "5QcebnwtBxtWFUh3yQDkphMvmPVbDN5LnmhUMapYL3aixctQsyNw6QXuvwE9cZisaw3Euj8tPcdTX8JrS2sV6cvz",
  "key44": "me22eMeJpAY4PorxMfFR65JR9xZ7WntBVMLH7HRqwihBaqxhpnZNWw5v7jL5UEBn4Tno1PRfiA9aSXRTTDA7FxF"
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
