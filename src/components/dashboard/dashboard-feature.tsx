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
    "2j2Hbui3zffF97sAmW9DqRqXcuJcongSZJCcsPvH91oxU29b4YjxXGf5oCcwL32SWcBXzAxDFqTx2M8kemmzAmgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFvKfqsNNEWFH5YTHixEv83L1nK2QWtFPKwKzHjkzQLpfKB5reVnfH7fZLTWGjpRrqeYzbzKgvaU6M2CG9hkXK2",
  "key1": "64aPzg2b7b1eF2eEya2YFt2teaL8FFy42HxCr3ZKNSGRn8huFCzb9rGX3h5FSjzQoiQc2Cngw3m2hWHcfYcjjMDx",
  "key2": "4oRv4igCX2WFwx36Mj6dypmL48pT6x7LVpkGsX1EC87sDnkGfWoVLUaNSUzguCxKSNRbe4HvcGy1rvNEYqs5eQwq",
  "key3": "2z7MVjL2Yy9V68njrDbGHd3zBz2isyPG6vQfEVGx323PV2FymxFVE1YDWdboGpvQseVQdKtb8kwcGLyA5U5QezfA",
  "key4": "5qr9o4uv2c4fiRSGEmrJyBE7uCY2uaqugCrYymL9Y7rreSq2VwqNBusmq48JxVkRFMyqCPdLvDEPwVZoQPXHGgzG",
  "key5": "2Xqu5nL5UewdyrVW4APYPd7yEceJ9s96VVQA9KKtqsnGwjA8g5Ki5FFEt9ivss7gQqkbTkPkuv2w9CLby7quSf2X",
  "key6": "61CozEpeaCe8LjwAiLwXM4eZMqJuLQNEPxDYcgjiQPCKs8JLxBCjjoUVAeg1A8YesSmkv9Wchb6BqUxqcPYn781m",
  "key7": "436EBoPpJ3Gon61occhS1JGtFreZ9JoJjXZGzAVphW3BnZfdx6XPzaKJ6X7pPqwKiiU2CndUXdtB7yv43EfgQG6t",
  "key8": "3h7rufsw1kBKEWF6c9j1SsRA23r7ggHKgeRuJ9d8toH7tidvMJFGnbRjJDE1p6eiarjndiWFLhxmZr8n4UPnR1w9",
  "key9": "F4uLXtGsN8QspeNvEigm4au3a8derwjiDjWnDM7fqhBL8dJPAPG4UP8sPwSikHe2Ex5zpuGBNonmdVbbMgJms13",
  "key10": "65DKLyM2EByhd9EVjgG93uNYNZb6KBBRbUnGUorf48JVic49cngT4tuk4EsegMSBDsBsU3eaCDY9rWo1ZZzyXJtf",
  "key11": "5zq6Zvchg8ymYFZV8mw7XeF71VbAatwMaiAaPyEXNVRU4qZ9VCAeiuWSZdp998BMXKD36xihNcTANTmPMNFNy8KK",
  "key12": "5fA6gR2d3zUv8Hb8xWYdxkkZPzup26msaJWNL94H5Mqe3iL4NXazDi3yKBY7SPHiz4fzwNB8go7uspNPp48eHDw5",
  "key13": "3qFG8z5HCCt2VN9ko566LFcfMdPvRGsrX3rA1hSt1HYAAJA5pp2PMb4sW7Hu8EvSuV9omWrKjjft58zob6JWFoYb",
  "key14": "neLgJPDoy3cq4fXfLyB8t5LcENez8kNMfyVqwKYqDEBf69H2LD3nQdJVd3WgwpfVnjcKagBDMpGshEGo5yLCZDm",
  "key15": "5MWjS753R6aDJP3qiDCEQiLBaKiCEsH93kpUKnCWd9XuXeNDHHXcFJ2FTtNJa6tgyBivd7WjHAif2r33i5X33CsM",
  "key16": "3PvPGHoW7RwjM5ZNSpy7QHGUmdL2KQJru3qxNrhjbv2E47ht9FaoahREZuYycyrZCpPK3kR7VenQ1AHXWDB2kDx6",
  "key17": "5ZZbk8ZeaFJ5DsCrvmXQ8REtLKvWq37rR2kDxWChoTdFiD8W41cTFr7ymiKKLuFzyfWMx8VzMpuYs6apXAAMfhPy",
  "key18": "2gV5UqYzcqbvBY1dTzmRwKMrv3ijAg6ZAuJ6eF76Crhi2AYVBzt2GA7rPbfWp5PGBH9aZZ7NhxAmwjbVLCF4Bbew",
  "key19": "2KmfBasq4wwuECaoRuqC5gBKN978dLLMobgPeKu2oraj4cvtJNf5VXbmwfoGfhQvtyJSrojCKzKKXkhXe3efBAAc",
  "key20": "2HH65ATaVQKD1L2rU1TRCAah17rAmx7UhG25ZnW3qxq813m5yLsGVqoVgDrggCzPoc4LqWBLWxNe6emzYqKKe46H",
  "key21": "3GvmyUVEszTKCn83TATXdSY6oB11Lv6igui8AVfDb7i5ttMxhMS13xzr4tAUDKjF5xhcF9h711aypEMDykTWcP6k",
  "key22": "Teq1XzqiXjQT4eH5PTZvuyc7uQaghUG9fyKYVnBqMUH5okoSuNt1sJtHL2brg3dvreq8AQFs4jxKtL4Wdmizexd",
  "key23": "3SRiQqtRyjqpXEZeQxts3A77G433YGT31xEYLiAk92GtLXyTig3VA4asvRUoWecNPTo82CdJ7kMCAwTUdmSCaguT",
  "key24": "5GwoJ8giA4PtKnbzkKzKTKa9jDE8mK3TXG3dBGEYLSGKovruaehiqaFbGNn9f5C1FoYDyGWNkDUqVQCNQuhbY3mC",
  "key25": "RSABQSxERjv6yogj9SdfMdBVEqZD2gPvriC8pcJ1oJApwcYECU6AtwWasJKLqf51ZoNDyMy4u64W3XDfN7u6uZa",
  "key26": "4EyZyTbXEhjL6Fyn9z5FLifF2Zm5fQxQtjGpe3iZBbRaGWeESMScbuJXkqst5NfnDMAS69AnBLuKFEMAcBMfuKez",
  "key27": "3aMPjwoMTJmuTE5nUGF3xkMGVS7ry5M5d5rRZDtz1BGaL2KGZoMPVsPUyHzu3E7VojqE32thYqn4Uj6K3c48M9EG",
  "key28": "5fBisUmgheK1sHbxNDq5zdTTmzZ4BfMB13JWp3Ao1b7FSAtUWrWEFzcnVGtBxLvvesD2EKHM4fMnX3xkpWKEfjc",
  "key29": "585RhLVP8GKqjubA2pGtPvoV9tjtjmFqMd4dvrppxt2dQkvCKSnbPYGWVvEvWojT7jzj9SetMj5y63Vm2otkXvFD",
  "key30": "KXq9g14HFiH7id3LMGSe4nmLN7wKyRzWt5isndgKcv7Tzoo7A6NtsGbqueqEE2T2iiYifcvy2ohLtopDkxH2Ykw"
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
