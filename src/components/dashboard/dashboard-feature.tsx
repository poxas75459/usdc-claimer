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
    "3KpAqerCK6Lcj3FxCZGEbY1RGgMjBhskBUkGrMkGccdv6173wqUNeFjMcFRi9CWhvrU42aCv9dwRBsbu8t7zF84f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bVNo958VE5Eyt5SomHgYgdNPa7YsJKFzy7cm1gjY8dzAzjs46GPz59dmhz1RYGnw6XgzaD6SjjXLxWc8ey6dbwr",
  "key1": "3BV2rHsRNa8V7EjZSJSGDTcRQvLLErwXit3ESazWQjCTy8WERzxDtyNmwEyVVXC1cK3e8A8jd3TRwxCRku6ASSxN",
  "key2": "2kgBWc3GjRZUArgtj3VJJMgLZhYcXXVdJSvVzhdfAWw9sHv8rEZ7t9Dp6UdXVGVfbiaMgpEkaHuG7T2V1HuTjdhr",
  "key3": "61NZJkW8kBDbDLsgtKums7gYoSj8PfzfTtYcWro96VDTFACnyxscVAitBigz9PeeC6HVzMYHeCMq9Ka3bxTd6XUJ",
  "key4": "4dwoCJRqQzh9X3fZ98nP9JNqq9YF2JqHi1D7qZWYWxJYgaCsuNskBdsuE6mHmBGHumG3JDp2KxFKjDHUZQMkMW7",
  "key5": "5s4th8TFPQo6guyLaY1HDrPZ6vQ6giWSDuvL7sr2LyG4kYJdUpCZEHRPaBBzqSiNN22f9399nHfwcWNrA6nwXxPt",
  "key6": "3B2G1YuLxtN58Ther7z9M1KzH1qS2fksK5cv3Z2jCKsJq4U15k33p39hS3c9N4vdxHJ1AZwcDmomrf82dxCYCpzi",
  "key7": "4cgamTVc3Ucr6KJCgrAz4J13AhKX9AgU65zmqu4eYXzFqBGhjESARhrk5fXQiJaLPJHZeoHfijys5CcyPv51AyvX",
  "key8": "2q5H9edb6Z9iA6PVvTXWzVcy6CgFDFbHsB1qQhXfCd3U5gHx8tj8yhvzN7Ljme49pxPzxAwQLeC4ynEHwQ9ysTiW",
  "key9": "5Pavrfo2yzUve8HW3how4cTVqrZKFC1gacjakYCbo1BUsrQi3sqrPe5GrZTKXDg7Uwebaw45GzJeGNfqEF8sb8wu",
  "key10": "4SVq3CqYcMD2ufyEqQ6Gs2uRDLkWdX1bXkFMm5uvVm8FWfSRQWw1DhL9b1MMQ8YgUwwX6QqkmzezGQ2DTWtTk57n",
  "key11": "3VfJREeLcapkb4zaejwPs2rGUUaRjXnU2iznJUPX4ujSQPgghHZyKT45pWTZWoyLV5VdYttSRknuf86ArXDdW8CH",
  "key12": "3263RJMLzkHL5MfVjFg4KNsuVSwDnZfF7ghErMep1wRN6ANQJ5GJY9L4QGa5HwEP1MCaef5sQz7iSqSZwj4yMpxN",
  "key13": "4i76abxXfXiVMKX8wRLKFLBq5KZtQzuDNaxQSZRsg5x3Ud8boXGjMCSAw4qK2GmDhugTSfKQm1sSDsKRg73vAtZJ",
  "key14": "5MjrieBkCxe2YAzfhcBJoCGhnV6PVFbNW5QsNAAF7S5wfyJKn3YaUUrauQ3p1D7PwSdo8prfFoCdRVyKREc8x3TS",
  "key15": "5cSUWhWNkg7ubvAwgWUSnMu5TQsExisrZttyXrnPEThg4k4kC74wuNJkUyUk4AJN2V9juxeni4a1sNaZxQYzR4Ay",
  "key16": "3gEG2L1GS1XstCgTFo3xuTtagcC2p954JvuDZ8oFvrye4KJATu1kLWPkReP6hDG9nCtUHea2AYFYECePgr3uAhAA",
  "key17": "TYubPbKDX783CADEAh9yvxkdxyNrEHTmdKkeAKPdfcW1mdZw1j43Vc2xT7ap7LiKtZm5PCPcqUcug5STMAzwR8K",
  "key18": "2amXoUkbDF3xRJKPG4o8myMJrqkJArCDiUjoCkmGvkycBXmbRuSGKtvPHYASdywAZfhLCsR3F9HUyKhaaDufuqGE",
  "key19": "5xdeTbEcmoC1mXVsKwACktHUrRuqE2CAJ9LymKmhauyMXLvB748ZywY6Gqu8rTjfL65bs4v6tG1SrSjibsJE8hNL",
  "key20": "3tu3ZN2Ao5MHpazAt3qAHZQoVs4JCvBuRrZ3ocxSbSrsHFLVVS4gJuHSCNqbXkeqPrMmTWDEp1JwgFR1QAym9Jz2",
  "key21": "5rmQPd4QihMigvX8fgzLRKBpE1BynuNwxpEciiLjCPSzWY5P737hgxYoTBWZ5ayMTitHMXi7bbtBPorJWzQWMiwm",
  "key22": "256vf2E3WxdMpvEMKbqSnT77TCqFqSraaAdiyt4mkE2TJWZ2xTjhhHyKUf2cAr17cuuNLm9ydP2rJwts1U4fsCxU",
  "key23": "4tBdH1hVwis1hKhNjmRvihNtQL6FvD7ofevqhGmxhVFCqJqZQQ4VQGR8ekrCx7ZMVwwyCkv5H5f3o4183zMk673a",
  "key24": "1VyXTmi8QvwGpJsimx48898wUNkpyUA1Wg6YwcYEjqmKxmvpE9SoHMUBHh8jjH49bPhz4nevPKZhEyv8tCzX7Dy",
  "key25": "2iAePW6Rb1WX4kSv63oixRHNpesiCbco3wSWQHZME5tMLtbev1iBbTnf8X4xNR1H8ni3GszNb9pCprDxE6SsXC6B"
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
