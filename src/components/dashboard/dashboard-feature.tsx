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
    "2AV4nkwymPPkm8rUfctLxQCmRWHKeVK9QaLVqf9mrzE9WdbzJ85kvbTbuSewVG6ks4MpKrR5Whm3wp6CNb3b7cxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "255qCtLSPDhc8uUGkCGmty6JvaxtE2Vys2ukH4ZNZDFBVN2NJMoN3V9wwFAgGrfDqH2apChmKjrJjkehstZKyAs2",
  "key1": "vdamiMcE82XAJsoJWq5EAEs8dRQwXMALy2GH3e8ATd86m9msU7j6TxkApKptHx9eLgi7finmPvTuF1nSPJ1xjgq",
  "key2": "2TsvMqnBpRgpQFra1B6b7vK1f6AF4bSSTrxnEwE5G5jDPBnBS1x6i6xhYnZa9hs6sU5EzN4e3nBdQAFtH9HKtmNQ",
  "key3": "56oSGhUnZy8EqZQruiixWWKmcWM1DFFwy2zHrFaWqSGRzjvK6uhCvLMQMA7mTQLA5eraRWUnxm9k7tsnDyHFJwbr",
  "key4": "33bF17gHyVADgbE1B53yHrypVpk2uoFT6J2nZnGk2dbk3Mi1TkFhhnQpNYMWX4VgwRKHNGmnpbNqPG83NERDXFmQ",
  "key5": "PxvbHV8uxs63DzRWvqSFrUPexaSoZGBzw1ikEpn2sTNXefeBjPjZv7bPXzo8BBbb7cwDiUhjqVsjYD7M1YJxEw4",
  "key6": "5xVuzo62h65anetLy6Fc1F6udbq21fLR6Fh2uyQPEbT4VYxoNLs5PnJyP6VttKyu3nbqxav52urcfYyRgcQBkZKv",
  "key7": "4EZetVzS8uy77v61eW4Nu3cD8pLvNG3Q9uuATqXD1iJXAAoFzBoUVWqJSg8V4SRRXAqgnmcWyB5WAjBzyNooqJ3t",
  "key8": "4g6obcsqS4cMWDN1xryykAnoixueR2gcMHVvHwvx7feqgjAgwvCh4tykjyhF2cHUbJhaiQGaXXU7XQJMwa82wA2c",
  "key9": "KCAoYXt6CJHPun6XaWx2z6mjsPmkf9TQusJ6qJHeUwMwRFLzUfhP2n177JYFjsbnoZinDg4a43BjVw1DmjPNLa4",
  "key10": "3d81FTD8tYoqP5EesAndUUpYWmkTpymnMZeBkmF8r7e9yS2sBWncafWRkFh8HhoUfV2QufM9jH3wvsSjQ3JQ1uww",
  "key11": "4TNgx2Prurr4oyKzqPBtoPKfye5hUbFwLZ1UTWc7kQim1DEPqVeqv54FJnJY7FwTugmf8fvHWa8dHAJ7CGrFCb7t",
  "key12": "2s8BQZjq5E4oS6SMXGkKwv9LgwuvSn8XFSyJaxgFV5PxZXf4TtQ7sQhRj2JbgSFMfYFX6YCkECxv3jaG34PjbpHy",
  "key13": "3MGc65S9QQNPmQHnjnCXDqcoCpe9vwuT9rNodFFosRH2vT18bn3qXkhrPmjL6XWRjip58zDSZCACeoF27sxnkebp",
  "key14": "2vyAF31E48vu7APxBzZWEejfEvxxLJdvm8n3YRMNUrAPVp6xrtSQTNkWjYbmTfMJuT2YcT6zQZyXdfpiUU4Vo4Kf",
  "key15": "4yCzZdggRqmt383vNaEZUUGRLVaE98XGMV3PBKH45AH3U3vyHFpmgGo6TFAt466Ack2Nq1FX8uPRVBV6XjX4odEH",
  "key16": "2tZQDdhERRe4HK56xTWBKUkXMb4abTP8ivL41o2Bad5F8PgAvqKqgpEFGmJZQMqSNcz6KwaMSxjyNjeyh91Qb3Ar",
  "key17": "3XKW8nd372Gb5AnVbhrtVgC7WKv1LFPcXcCDKLTPGAWA8BRZ6213Vu3U4DfhcPvnFf9eaAjuZSHs6PBTN2dRBMaY",
  "key18": "41D1TYaQqED4aUeYd7Uz4AxvW5fAmppZyLL8oL57fXSEEp4bf1GTCjYjWG2RaWvLfFVyjTKjjem5T4SkCsU6cemS",
  "key19": "euffNPZnKCTAgjdiR5DJRzzsjYcNgxxzougmNvjHTFwZg14gsnFAC5KzKF59JTSWem7QBCMvkozm7siQjciTPuy",
  "key20": "2wiMfi8XxmwRvg3ijhni6MErAGxKLL3bya4xadcZFCmbaPheLr6qDDfXAGh5bxV9oD9vWtmPLR6M5Nznrrcmfqeq",
  "key21": "3nNnYThiqjKmBbV5xuev1LcrRdSU9nhNYPLzZGXLsdxjhebPSgUgDs9ur6j1CdX8Frh5JTJabyJ7v8h8ySK3bbds",
  "key22": "ABP2eZhTLFLZ6X323K7D2Dcwx8qL3EwiGcBvr3H29Y6YXG1mW6aeannT9X2A4QZs92thknELobkiRxmfqLUniAp",
  "key23": "2dhyT14wDbSpRfHJVbZadwoE2ZRN5LQdSi4W3h7ojt32LWVek4nv3oqfjwj2XVFnXoQubG9dgFvJkSeTtWsAnC9J",
  "key24": "4cti9EtG1b4LTAqdx9tTJC5YuhnkBrLYP4VcZcZesaeinzPkRVMQyhHsw7GbusJejStQDc44E8QTQgFDsNhCJkbh"
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
