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
    "2BmbTZu6bxDxtFTMmZPxrF3LZWVQCSgx1oPWTmUmMV9BgzXGWvERfbRHkiaTFTxdL7KF7JkC3jVnWr3VjQXhyNAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2baDdPN1D1PKpWUMcbwNnUiEejoQUPxeAqTVoJsKGwjK8zVUe5o4B3txCmozXyNrL4fDZv7CLUt8Zb3tYorwc8BT",
  "key1": "4moSbi3eVE8j22PZys1f7ZG68vNGwBMaRtRDM6RLoz9XMU9rgDz1st7Ru4MeP3SHUt29hhWxsxwq9wZ5EVcRZF8Y",
  "key2": "2cQ13ZWKf9ngEFDLVJ6KpQhJk1jJXgUj5CTb2EWcfSbaXuDvRP6Aucc163teGXTEfNXEZFA9g2nM9vASxtrwTAQX",
  "key3": "3H23NggvSD3j5UgCSvwAsF7qAqYVvpwhfcpC6f71jEnbBdnW2duusfNTNsDmKu7nZQr5WL3R6TiciwDLYMa37c83",
  "key4": "4rojtCxugHzYpuD3SSaC6UepH7k7yEmkEyKcEzhTW9obf6LNs8s9m1SuuJRD1JxiyzC5ZxfXfxF2TSwUhQXz2Wwg",
  "key5": "gee4VWNfAC9FgRu5rX5gzdm7jKUKC4pqup3tiV1f9jwFfzG3B4k56nvzbigzk5VqpRQTNXQwq2PuebXGoWyWveB",
  "key6": "5pVRH1VbWKXsZVxta1uCK8nykaUN4WZEqL86uXGG2k14LSPvtnx2Zcs6aU9ji2NKhNqF7fwdbt6DSWB5SscjyAxd",
  "key7": "5NUSG7UqY7E6hBTZQZtRgXWssqnpv8z2sy6zQ2yNVEhe7E5hovPvbpxC9r7kbbMh1BboTSwZbvLzV66hTYj9PydC",
  "key8": "29yQMbjtC2PCCVGKSiGZkUCfiEzX8xXky1TUkCmMdSPxibctuRbGp1qBEW9tNDNxWL6LVhN6qm6rKGEU5ULiH2Av",
  "key9": "s9x6azHcVk8Eh2G8xk4JEJyswyXUzZ3z3oMEcob7kaniAZkzF7RbHPdaghf2VaSBjcaikqUL5Duqhg6GD1ck1vV",
  "key10": "46gHUVeiyhaYhQVNXkJNGsDDSxd9HZwTc4EzqeymhsdAmHNKK4Xi7bXrgTsmtnRR6L1reLCFTECDaS3y8uw6rAXb",
  "key11": "4HsQzHC1JoPM76KLtbELDYZDgyiBgB9RaRHRQnnia2yNsEUV1qs89HD8D5kXe29JUApGsWQ1kacveeAzCZ3C9AgU",
  "key12": "2pv8BGCkNgTE6FbhaRGpw6oEfDiGcs5eg1teymvKxU4cUwVPuPRsFt3rVU9amGPkc1BjjjN2TVgN3d2MzJJBvirc",
  "key13": "3iddQ1KYsjqxMo4gzvGSqUqdwUcMzmkBA8Yuzn9g4r64pqpDQbkYcVDTmuD1AGCkDcTvRPazw4L27tc6nQMwzuJh",
  "key14": "LauMRxieBujb9KVrRKoZgHimmwEfpiSAEiQv2ntuwXdzwfizJAB38dsneW8t2D6bW5hrSSpMeK6XYm4Hv9aT1k8",
  "key15": "4BjrMG9f4FxqQuphrUvv4QJduug9o3qthKfUaGPNFMUmaskCEnJnBGWqW7PCRwoyQ6qiz5kKTAuCVTxANtMkAyY",
  "key16": "646q6r5vgGRGduec6wsUCLZFYozAzdC2KPUDRgFtqAfiNRcKZzaW18EPAqJdKKFtZ3FMtbgPjMRV7vLj3SvVTieN",
  "key17": "SyB4dFmwzzTkZfdVYedUcePuFZTjQ5jH8AWBw4F5jMq4qvPtx16cRNzkVz7danN5gAfMqcLNraRrHW93jQLGw3U",
  "key18": "2TwMC8nLRNmzVgDmGDfwB27D7HfRwRZLCdu2LeYP6GJ5YHRQ4kLA4n13CLuT49n9gWNg3QEScF4c9NDZoFy5tyZo",
  "key19": "4QJQpN6BYqdnvmCYDqJs1SFJE5pP5bzgu87ubztrmN2x7wnpCbLa3oRxaTX9LaYBb9zAQGvpyKG7CcmJvmhwrFM3",
  "key20": "128W1SYmbThhSbmU7Pi9EbXUk2zr8sp6KnibVgk8s6weVCsfxyvjhVR1CS34UwgtcPqXMTDmNKkQ5j7yKSm92LQ3",
  "key21": "DMB11CaXJGha8UnUD1wkhPs3cwmUGcgFS7ihGghVKeCPmrdUkhdmZ8UQxNX95nDbn9MSWLzXKDzZ3QzhXKThCGG",
  "key22": "3wPEU2pNkMuqvq5WeW7N2QTCryEfZZkrqC5vRDehhqTx7V7KCvj4hAtcVJqUYbDWyjuYx7ATsZZmuspbLpENgdrQ",
  "key23": "Yrjo6rFmoHDihU1xdnErjEYWa3XNsSSZqjP8dKe3b68zvqfXginsFctPCeMVg4KFbFBYB2Xp3fS94Nzn7DEHy6X",
  "key24": "4EpgaMgowCRStqEYe9WLKUJvQWUH2grKbSdVhXpK2E2sNZwiXJDpeDMW64bm3XCKtJZe7w8E76AydR4vD97vG2uU",
  "key25": "7Hpunfh8sTGXtii9tcgmYwn3han93DAKXy15mqeigzkAALesqEZFeoMZjWmZN7aeya89m3az2Pt3eh41hfMng56"
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
