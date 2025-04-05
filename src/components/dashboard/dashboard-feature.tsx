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
    "3uZ3KbLstYSssDbj25gXgyUuL3X2MCunkExnUWBfy4kCJ1ruUzx6n7dhmcPDGc1ksxhMa1ZpCpZm4tofRTRcRdnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326ySM3XpY7ZiiMfXLp6Vi7vh4g5qCscUGiZWtMUC1np5ctvFzg1X9TjucZJRp8phZLKVSE15sS3V3VnCM9VgPf3",
  "key1": "4Lto3txwY3MvGogf61cyyQUhBqcLdumRreaS619EuqPrKLq51jcF9hUXkjxDMg6ChUeKV9EgDKJ17nQ4G9n2Hmsj",
  "key2": "4hg3DqDYhTH2LzRXBwxAWzbbvEJWn9wRwfsCzSBSWP6rVkNby9LB2xH1HYBqZxg51MNo4D9AaYECZEqPwHi9M33a",
  "key3": "3Ni6AArCSzRqh8s2fyJBJAcbp5CNE2DEQHhNfNxsGhvmgAaY7UfPUWE74YJLDHhrhw5nV6MAUUHD1gpiy5xKKkY5",
  "key4": "4N53hZPxSL3GEgXPzsKKWBe82BvYTjg2oy26ntjQZwmRxbiN4YEkfg9MC5NqC4ET3vM2UugcndAecUSg69tbFV2w",
  "key5": "3V5jEUjJ1kiu17yN2qt1JrN89wKZbdDAH3mQLTRRAgB54DHddWmUimJPF74FXkTj4v7mHwsd1KYeBaBJJG3o9zrL",
  "key6": "3fxB9VPYvwBkeBXjeDputxjgoquK6m32ehydYQCf9rauvSvN41LCFwJ95KiLQtQcjMcvShZnLCrMJxdByPMuGvg4",
  "key7": "54kSP1BzCxKXRyZmpwpRMS6VW6vAdcxaHURRiTLFPcCftusxKrpcpbLa7TP9wSXzYRUGStj2hH4LCXiyok3ZK4E4",
  "key8": "43Vp2W6Zgdi8Ki8jp1BEbuDkxLnRmy9Y6qTzmr4fX8By9HHdvq4xFEjNqJxx6AVMKgGywHQ1gKuhfCKwSoPtN1JQ",
  "key9": "B6MDaZ6kewQiLx3NP9iCvxPA4h96vaMPV8vFn3GD2EdvkkWYQyCpnZkoTVHGz2pBdortEaQqkywqRHfFxAwn3t9",
  "key10": "5EzAPpFiTGuvLya9RS3u4zA2EUnXxdPDNVV9C7yW8WKjJgrhjtpn9BvbfnHhMF1W59jyErLvRsdc5EcaVG6efgpi",
  "key11": "2NWrf6FaWNiZytGbpXftgpGL6iUn99jVMVidj1uAeeF96tsLadnEsLjbcBHbzfaN1WXPrUxJqHWdXNQbo63z9N3J",
  "key12": "2FzkBB7mUF1DjupDTkcW1ZDNsmorPEoUBVuqnmwzqSbd1DDT34bUGH9pvjRaEf1zgvPSuRBRH1tgrCJsJgFxk52f",
  "key13": "4YSkhVY58swHpa3fZQiDedP2wFfQyAnNsp8gaywhpdAyKg1ENC8xde81nCF6yyiez7aDh4H2MtqmNooUxBUD91k6",
  "key14": "3SKYAPhrDFzvtoXE87cxQh7rwYztkL1fkNt4je7sZnX9oc7bJSBRBs4UCRWTMTvr6D2sQEQGciqxK6J4ijAXPuzw",
  "key15": "5yRBbqZsomvChJuZXaPwvfRNji86JDB3PCMbY8MUBeuCaUjs26FvwW2PMEwjU1t9umYF2sSKfZxKbn1Yq9PjzHzA",
  "key16": "2TQc5oVohiaX7SvoHPqqvxmwdS2wUtjvkS6N8GynobdnDKoa3V72PUxVLNT7815vvZFDCnVN5tSgVeK8Lhx37iP",
  "key17": "5oDESMLCba6yrKjfY5fSq5SvR7yj4qMTWBrUYWaCG6BBBjwkLnJycWLDQFAtn3Pv6PGq5gRFjQCNwV8vgPAjYY9c",
  "key18": "4RCzaAEToeJKqoqHmXrPnxify7pKWCjQcNUhKh8YebmE6iyUmrSQcEuhhiXtoJu2DEnfoxAZgchEGREZVFmWDwxE",
  "key19": "3jSGS4TS8NtcaPZJYQtTYXRLtfyQTcNCfvXjdK9wEWPXtpTt76hEakkjpePGrjzGf6L3swMKnm1TrKkF3qASSeQL",
  "key20": "2VmGnLsQtUPoP6JbqRKaRuDi2i2Z8NGTz2ZyyzMvzhQtwahFgbz9E6ayiJoYk6xpyq1CAUaDkewDjBZx1vngDy6Z",
  "key21": "GvaCG6Lg1Z3cDVo6QHPP7nUpUdwfZTy2GpD23xuYVJ5Vwb9LXXQ87wdt4UPaxDYX7d7se3KuW3LqaSb5yPcnYJN",
  "key22": "3qA9EPHA26Ppf1UvJSyk3wKvcT83ViLkfKBHi5YznH8zbPGZyi3jpo6to4wyKaN4ok8scGyDdUwcjBS2XipZNsq5",
  "key23": "3Zqp4HRjzqKvFKn7DQ6BKLeRWER8wPTqDFG9EmiBPVmTcBnUNfTJbXNQGhFCdQsmTKrpGucu1HZsNCLGASSbtNog",
  "key24": "5mroTqyACutAwB3e1rkXHRK2rCYGrN9gM3izfH89ZZwo2pTvKqRysmRmDXpLt96yPyveFhXWcGeoovV2mnvi4mRK",
  "key25": "3wH2RXYWN5m4FktzWxTbqigKF4JoTbnJd3zrZ9APtritV6Wk6UnNYj6jGEdKNUmjdYQor5TCk1bPiQjtUYxbM1S3"
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
