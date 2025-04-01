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
    "2ybiJXW13f471ecb5MLW45S1HWSnekXjoBWwKdMQZUXL4AwQCi5x8wUgh28Vsq1mshpn35ohvC2cwTdtiY2KhTpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrLWpybU8n1HZckjwB4hcXULnRa5F4nvTSV6nTErMo8A2wFMaRmibBuKcpPW1Kxjvz4MN1RSdj9i9jgvjTqNnGV",
  "key1": "5QKJLNBWnRFCYEoEdVdoCnHX1CrrQe4UPLJ4VEmJ9jYZgRtXXQm9eeNafWL3b9Rpck2HYqN7gAfQ94DgNCNMoneJ",
  "key2": "4B7a44ZWmWHpuTft58optmVKrxf3kxJUmVju9FbsaYDjxCqE8K4ZEoh8Q1AQxaCRSbr3B26chp449W4Q6XqtHwAo",
  "key3": "35cwmv1dUr1xQGHxLEFZP2foiH7qLjDiKYTwpRsXEifh6TP6qrbTdsPps8V4r2FW8Xi14FP9N532Fs9LbEP7wJWW",
  "key4": "5QMnBfzcaDuQS1iScUsTu6FJGKkjc9jAr7aq6Uc3McGZd2yEPWjZvZABbrTHxNKr6orF5yoZgPAFSUvppyfMjiPr",
  "key5": "5N3Cei9X7mQ4c5vpSjV3kbgoGESQyo2rc8WHJduXi89Sjq6f5rWtCXDu6RoejAYdTUctCQ7XzC4GfSTApZMg2msz",
  "key6": "4kWLUDa4CVzMTWyyphs7X23TtovAkcHxAqszbz173wn132xGWzVdngziY6uEq4nw2rVGnQBwAVo1ihLKHPYhzpnP",
  "key7": "QD4uyTZrsUrVgt8o7iWjBKCXQ7DXApyBVs6uD9m9PcsKogo2Zu7EU3DZAuu18LcpBRqeqiZN9mqiKjZmCZS55f2",
  "key8": "VtkMeBPFKLUYbeaNwHFW1JWoeir6tbMrANVjoEvLF9UXHFy4Lfr3i5Cty6dLBy1Q2ahqzuxjVBc8J1ELBppHFuk",
  "key9": "4hoSuSnGBkB1GCX6dNxhbJ7asdGgPz5cRmYnGdGK3w7eyh8W7RooCUQNYFJPPfXxaPsXKXTwng48NoiW6mQQAGB4",
  "key10": "skoA8oRR6wBKaCuCHChDhkBxqsKeFSNrBFevpLnjyskyrt9qY8cUGkKhZ1cnCGWivwsDJezdYJ6Z3CaWes3A5Bv",
  "key11": "3qBr3T89W5WjfUcWDnpzoeunVCvZc45XcHsZFnSdAy1ee9ULwDTgkH8uvGqWT9oegiP6tQu8GA1K8Um5dhGeeWzj",
  "key12": "2BrUbM4P4LXS6Xkw6NaNt5XJrqF9FpPrsdmTErQegrfttXMWSzXVNx5FvxvmeHq8TGVLu2KwqDSzTJci4bQXvwz4",
  "key13": "3yQsLXVwvUvNje8AsnG9cDr8ydruvHgHxwuYYCkRV2aug9nxUx47pUGHJLwy8Jc1cB8Sv9AecYg5AxNPKT48o4RS",
  "key14": "3tDiBfHG5FnEpF2Ycx8THm8Nh4Hpu8SWkbYYwvEwFbcV6MiNtMAp5ZpLpqfrFcQfV8Nni24zDxTrMJ7vXrUdVwEu",
  "key15": "2oFPiaytDFmJyvZwNUYhEkZ7nHaS2GKg2oQhiG6mvoEL3oTkbewQRhig2n1VdQf25i7gNR2CVrKFtEXGerR2dtse",
  "key16": "4jKh3BESv9f2gamb4aX4sy7bYPaKRdDfDWFewJVgNY9UFTHunhK3JYitrj2i4UaQBN76qCPMPYz2iEGfBnF1FNGG",
  "key17": "34r5EBWo49igKp8qdowgPBPaH8yRwzM5VieF4REihaskwUkYNHcV1YtxEQLzTczjqJSWVCCrJJgb7y8S8GLBkxHw",
  "key18": "4gX8FG89cVntCuDYwPJm4YPwNcaDPMJ3Zysup9GPEwBCpvtCGRPvqrNXpAMGWVBmBCmCmyd4LxzDKaMpedxjVvXo",
  "key19": "3j63pWt1oi7jAKm4tYvQk7Z9y1o3firazHqpTHKksbUDenSUTUKxiHhMi47SBGgEYLNfSQabCx8hkAfWF8oTBZDg",
  "key20": "5U9NSvWHB91uKiAL7gFM4eLFWcUDDGCpBeWp1VW62EnbAeCxPo7kXtPQqs6U1cmT5tLARRFjVedEFcYwguB4Dn35",
  "key21": "5N2pBMshcqNe3LaEg6c5vVeWcmeHnEmUwLUPXkivYndYUngj65UJaeEGVwoxa3MMDC65eYABgdnj3gPyoCwfxEW9",
  "key22": "2HebtRJAcedBwMSnMtk6hsg87A42T6S1Y8aa3r9gdyPMCYw59oMvVutAjPhfkLnjEGxjA5FyyFmNxhaQjLsQhxCz",
  "key23": "2DMJSBBtu1DdK7ivJ9JTap55sGZcLS2b9ejeiFNwhPrsHR7jKjdGoqRFBHpA5mGD4X2MezxCFPLwooUEdj8HZQiX",
  "key24": "VhRS9qEKGy1V5HyxvHq9NRzL5Jjr9ujQSYzLZB4zjKsgQo2ttgjF18mYrPXw27MDYMRxAtMZoMb1A5BVba3vwxF",
  "key25": "4U1fE5QrEZdSiztLpBcVN7X3haMdGKporh3iMRANhujqNaPRreL79HAQjudpdsPyTpwoqeDqzfauvABkafAbABZK",
  "key26": "5fo4w9J13c4NFMks9pZC4wt4HadonQKtqv7wiRoA5vkxVGir6iEtBLtWE7vA5RCPLuskVr8XGc2Nz64cMdhAsBEY",
  "key27": "5epxFZUfefMjaXhbGGU9Nspv3y5jSxPvziiez6MLcHfC1ZQ9khZX74GfvujTeMi4cfXyDxhd791YHQ9Z6rWercLU",
  "key28": "3q6BEzm4EUv6TsKwX2XxemLjBeEMZeysY5qvsRNZs2h1pGeq1iTDq6a4DAUQdBPT9vdtc9Dv28pVev9P322d7WmL"
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
