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
    "5qMCDcxLuSpTeCfpiwF7yckBJ5Cjtn1PaJ8fwCauyEXmtadBi9kZTvGFVNnc7AwSpqCn7rVzEWZr5VRmmgMt1khm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGeqmuNWPmxE3MLqvP1kcEu3ZZtEYyCkZjU7QVVtWcpRwwrumJUpc4dSSh1okbcegHQXQgGhmqq7bL5UuP4dGWj",
  "key1": "5BnXYbui8KHKKnLkbSdh7eypxWRd2oZxbfpnTAr4p336KjaGQtxFzNL2wMUEJUQ6NY4HGw2qTLVHqUP7m2PXsESZ",
  "key2": "vgn1sdjoXbuDUCY5p3opVKbdEnRuxSFrSKXmVYgvzsSZifJkfPJb6g7cgoUaqLepwjkiFaT5MXjJjbvhe5upuMZ",
  "key3": "3hC7cU6BcNWRwWzJSyXd49ieZrQAx6AvFEkdvnA3WQbXUhuTvqMcaCFmbiVaJotAdcAynWiGSDXDazuNmtMkV9UZ",
  "key4": "5xLdGzghADHUBzLLmHPKJFHpUfJS9sQ7WZiwTrp9snpfkupe3npj9zNAVfPm6Eu7fMUAo3HU9kD6SnY5EoJ95B4B",
  "key5": "3Xu1p76uHBUMv93YnngavG9vNFFcnCE2b6G9H9EK4c5eFC6EuntaweivJRysnXHM7AdcRmDMUURmasykUzkJqs6Z",
  "key6": "4y44VtaSDorMWeho9i5mqhbJCJ4aEscFkd7vfoVYKFW7AFeQCFserJQrRPxmp6rmH9jsZ3uNaYHD8aCRWepkrt2n",
  "key7": "NRQ2Kmsp6ouzH8JPZGrJ9TvmbzFDczwyiWEBQeLwP6c5kfwzGMY5zypVbrp6XDpnZZSbdN4kXQ9PRNnaEGNMwaF",
  "key8": "XzxBZK2RuRYXg9GzpHoJernnSLU9HtAKZM6reSnaenk2u5zEYdFAVdQcMZvnZCK6qzvKGNhkpEAtXkWQptUMs3H",
  "key9": "2NyGFhMbeLCnbPohD3svfwt1ejAqefCGGCmFD3FK33JSh7zE5L28gczpwmaXjZBsJNho66fBojKMPWvo4QrrkPzj",
  "key10": "27ojKeBQaWGKH6vzzsPvbse8vujGLArePh5hZdZtNgcQewECTLahutb3UQ99oUwpspCeMfZ8TDMakWWyCKVJqVjt",
  "key11": "hr1FFcEsE7uai8RJpVaWhH1rq4WuGtUf5WhLd36986AtGE2YcxMWt9Ev7wjRJ77xUyqMTwkgoqQzPeLQfZBNiWG",
  "key12": "5gg46WZo3r9HYjvQZnPz952WFMB4RfFRPoBVnQoQK5Lqueapy28cEH1F9b7nHT9BLYtd88BULmsgwprmUdyZhJQy",
  "key13": "Fzy61xDCsbGiogKPaUwsfdBrABt4TY98PM9tzXPvBBzMQjopHusMrMKZSsyfMjXuinUwYZdts5vdbcTnxQucRqb",
  "key14": "4g35FWURfz9zszykWxwTKwgsVpB5Dj7x8oAFXkz5R2HdasT6wTaBhTiryiNfj6ZXBrAdjNsMjyzMBN543hFr9ND",
  "key15": "4KZSKjJCVF2SGowMgP35mteirDCJB1pdAiCfA4i1T6KnqJWnMRChyFPMQKVMBHVMRETeBXeqyDuY5RPHwLQP91e2",
  "key16": "4sGi3ywta6hvUsE22cG4HLLNJh1c5ANR16aKjBe4mfhbhDEin8ZJYQzx7WFWFkjSFMJnwmCKABfwPNFTxnF1x8wg",
  "key17": "5hNjgWkPxgtS96umPAyYmWyqnApUutaCPqqNXHsfZ7z1zz7eyRqpDBenyazPbuVtaNELDHwG1ub1iVByYbv9GzoY",
  "key18": "2JgzoyZtL1ZZsqqELSWDM92jyBRKH4dcjVSk2DDDahFLJRsjVQHfeWLbjNHDyRvv19BtbqrqgQyALqFzA8NQeEVK",
  "key19": "L29nnnMV1nmTk9vXghpmES1R77GRhc9wMsAS1WcPXJtcrU6tgRBSfwQyD3R9KTmMsRi9K6P8ehN8AmUGWMoBRxY",
  "key20": "4ewYijeHPon6stH1aW66urEnyue3wi9xe4DY3JYbDm97itag4vbKxHh5bogBKzD9gy1KaSjyD9vxxFRxefVznEkW",
  "key21": "36g55cfZySfB2XcvZrjfavZiwTEWmdfqTy1aaztBefuivBiVQQQSk6EwQPoAWCynhEoLoSv96WocyaDfXwjoCKqt",
  "key22": "51vxMRwtns8HQygruBxer1skKwhRnjuAd5CmD4LSWgB7HcD9dT36HTMEM17ctctHrhMMHTfUuiMnavuyiF5FBJ9H",
  "key23": "4hq4RrLumuaX2pfFRNLaHgkK1JD1Rh2UnB348VvYsQ9UJ8pyy5JKTaCuQpGLir8qnN9mfA6c9vDG9XiBBcQrDpy8",
  "key24": "3kMDFMgc3795sc9qgs6RNUHHv1uffNNPDCBVxkrz7iaGA8fSiTiUEZur49jsAGsGQuR5s9HLZaoa9sHKszuv7MWk"
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
