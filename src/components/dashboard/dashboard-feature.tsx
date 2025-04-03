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
    "2stBvHx9aMjGQxYaULDSYF6rsrLbmXNFWrRDuKg7tPhnDGyotPrCrKYYxQbbpGsq29qxA2ko8sb1XSMAzVpKvrhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gLwWZPQZx379m51TPBya7yVkcDZCcF1p1VSJXE5cBsKX4TEhWFPgmF3EM4mfAAk3wMPFfW7TMsCa1pB168uk6HD",
  "key1": "4rKDehtQSnfP76bSJ59MyGmWngA1y7jkWpnTGMQACPoggf5WpiCywhqLA5Ks5YbrbnMj2tXXhrr3TkyQfsKnEyYE",
  "key2": "jThBkG3P3i7uBtsDu9SvX7Ej6ihPxu6mg7S14iZS8y6GEsM96Fr4qGCmCdwRwwTrT13JJ1HFesjdZvieLp4V18v",
  "key3": "62tNBtWVHqC1SQpQn4rwZjZvu2ABCXA1Q22iBpDuUmmP7b9anz7UoEYLQ4Rn94hDeM7HBLM7mncywpr5PLML4P5Q",
  "key4": "3xtVophBP35GHLLD83pWuY8z1Jw5U2bcKzejiuSkgmww2eokt6Rk2YNTixd5WmEUZXTFX9JoPUCBRKkBdtZtayTE",
  "key5": "5WdHHtJJSS2yjaPzpLrJz3qj4ho2nCuSsiXcJADnKtNJr8hHxzTUgs4xwwVHgQ6JbS8pPGVSevZw5AGgUZu4asS8",
  "key6": "5DjJr5kmAhaHLwJdngbhZnvBTT4nmV2PbfPv7Uce3U4RNSiQPFSnP1djbsChKYNpsYbM7GBGm1U6xGSkh4EWLVzD",
  "key7": "3FexM8iNeTCamZ6sHr3kzWX9xKP63iBJd9jNrBr7VVJqG6AjmoZBcseVy4mbKFWfqvHKpj6VR61KnH2wDdksJmcs",
  "key8": "LJ3nLooDG5gS8rEFGGEGjhunsmTiWvao6bVik6aJa4V56pmrLdDChzU6Mcy9rUNGL1ZNXmvhnUPoxoEvb4iiEKU",
  "key9": "q3DcGAk7zceb6KspwwnpSE9ixmqusduitnisqRwQd8NkKzsHaJUUsdJN9iZRa7dhYnXMgvZVz6m1V5ZesZDpMcs",
  "key10": "4oRR7KZS3oBsGaJaYGqqGUTyAsfkTwSPJ4RX8SgXzpbWnW28mPcsbxC2Vp9xBABmwoUQS6JSWjzgELDDwZfejHc7",
  "key11": "4YRjdxEVbBD1FDZz3kwHZj4mpXgYs6vWsXYcwENAnQyffWoJ8jH4i2ueCaehNsA5LujbVBEZSETzQHWpWJFXNJo5",
  "key12": "4LV7iF9uJ51CLbNhChScGqvBThGDVHqEkm4xKcKGuzLi4yU4tJuuVHaR9qM6eHK38BQnXVVSWTtUDEizYRqwARnh",
  "key13": "3SXYmgBDNapjqVyZDNFAtw2eXD86eEkTbi2FNaLx7XQkb1jppiaR5EmFYaUYNBkUkeF5of3yJTLge4pTTxTEZeKx",
  "key14": "DpSdf7jdU2oRLVV3QBgvQdtJsYmkoPFL1tUxMiAC37rfhkZPXqDNhTWnoLYVpU7koDapMZxgTCmbMMP38TP9iLA",
  "key15": "5pg8sRTtJgPedpMAmJCcmSD2EqxS8f2cJkRMe16auDAmgTNpMCRjEhZVz6cdimWTMiTiiPDui4zsEiybwsJMrtTA",
  "key16": "uUH34Z1V5m23jew7HRj9SFjc2k4hZ9yT4cUXmuUpajLwXNywc7HjjVNAP6j1DpxgkYTgMSwQ6NKsBx3AdiuvNeV",
  "key17": "4v49h9MesticP3V3CUZXBZSL2Z5b4Uvwhwrw2r8VpK8HgbyVMRaE7gAkqTJCJ85WpFGS77fPfYFBXpRdTDHjWS1J",
  "key18": "43yQUdkCbiDghPtTmZNTAm9FBt7D1t4bPUKbJWnjAJj26sEokx2AnMgXaVAiVvha36V6CCF4T57WYegP9NZFcyGw",
  "key19": "4KL189U8wGDU3j8QyZHezd2u5KooUQRjchtphiJcw6K7oa5WmfgfjaN5RJ8JaHroY8vtH7qRdfnqKi11WfSpZzDZ",
  "key20": "Q2zCA2EN5NQa9QryoDfEsiaGjuVvxbk5VEUvzzJCvZpBZERSyasBN7L4Xq7sjSedEgZucoLCmUkyj7oHBrsPs3H",
  "key21": "4dzESSBYR4kXU2HpRGovFRyuZ9Z1ghh9jBvUTbwcccCEthjYNKterjZ552i6SJYThwSPV8NhrpFsQHa7xotPvVjd",
  "key22": "5UJVohFWzJw5diFYZqYq5zDSkxXK832BhmCxjG56RqKXnBcbSwvmwHDRDdJ7Qc23wPzFeGe82aSHkMxXuvKgW53R",
  "key23": "L563Tzq37ysojkF81hLKpRVCb9NaUqQV442mzhmNGRSRYxtdX6apv7UrHrJXjbeQv5waov43f8X27aH3yA19oii",
  "key24": "2YT6GoAzuMeYoxjR6WvYYv3RH277bww3FcSt95b7z5e6sFewSC7yHGrj9q6LLsYKBE6CVCGVSnHCmEHKPdmHF5GR",
  "key25": "3dSoTQEcMfDHK6Nd9uYdqGyZtzNjPubiKZ887DnQm9UX4ZuWyNL4HyukrT1q4yEydMCBz52qToXbqSgwwbC7KhYE",
  "key26": "2zv5gkP57haSCKo5kh9rdUtQ2E1kp5bNHCJoUdAYwgM4wTXb2iqSbxdFWofQVsFVtzPoZNqsG36vpz59cg3jE6QS",
  "key27": "vNoTNP4DF3J8FhGSiKgqRuXtX4kxpUqMFXkuHitofKUP9bdMiUWa3Wva7ucHoKbKLD95znkRYV18nGyVASyjbUA"
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
