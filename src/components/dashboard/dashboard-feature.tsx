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
    "XDA9QX9FTV7GXZJRvZCrKGsSieFWgwmAT7NFLNPtp5ygV9rKbEBrGw6jcixy24pAmS4jKTmkgm4h7iL2r46NcSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQA9LfVk2NJsYQ7BTpnikHBpvVX8iVU7wX6FDZCzdA3GXjjwbEABzDbrxSdY7M8oEoprLVBcqyEgX4hNCbmXvnV",
  "key1": "2tSgtfNLCL71jMTaJ49LBT2NUzvANVDGfcQ9dVSvY5rhgRxRnXnZFMVageoJ82dmsf8AQ7cfnopVNQrxqLkkC8NX",
  "key2": "3EAiFqsdSQXpTsSvbP19NboQzAjwKaUtVEpowNKgdU56uQTWTU1gbiMqJ4vbcy9WzG16e1oGTAZLQbKidFapEcw5",
  "key3": "5tzX1Cdr1f5sZQCYSiDy3pWfjajYDDiTtxYBpLG6Ex9kuJfTXm7cBa7PFb3YvQQVZN2qA1YRFQWJLFC4h5djLAvR",
  "key4": "4LKCSVBBStDezx1gpFRXk9nrEA2Dm8GJY5SBwEmUetetJEpjd7evvKTHeK2U6We9U9i3d14bVAmRY8xugwoPXTt4",
  "key5": "5T4VRPp53AxDVUdt9TRGiREhqWi98HcQbwwgwN1jEW4jTN1DMmSswtwA3F1LSG2GpnU5oSqKTvWvyUrb3rk5EYNr",
  "key6": "2WJCQ8sRc7Y8SDdGE5JHJfPKUNpbsrErne3Nncy4FRGF847yzLAjMPd7r5jnWXqfePUgEvdJpm2pLSszvo8pjVp9",
  "key7": "5oT1qczD92yd38YgaZDy6EfpfSauTNMboWhuSZUdYPaS3VhMk9PJ7BxkKHs4b3FhQwYeHZqUzHTWSpA6okDRe1Eb",
  "key8": "2e6HsXQXWBL4ETCGaMfsNQaL7KiURWS1UxhfxamMegcMYxKvD4aMYyRhSwT23TEEWr7e7jB6rvuxmPHgJm4TSXHb",
  "key9": "4UufLFfgaiJstv6S9cbVNgZ2BWaL5nKtTykZh4hgbjoZJz1sUwrMNAf64MhwbUYFssJSiix7V2CBCzZmx8BHfWC5",
  "key10": "617TN7JV9AxBqDiKWSXaRhAhzcsgbN5XSfW9x1fBMsHmEuoYsjGJunihyP34N2LkikRfpQgbTNAmAEXhCi4S17v3",
  "key11": "2fx8DDD9rbkJY22BY6Rh2K3tYuzYB6MJ8L3vZfZ3biGojdf74mQ3rYfEJFnyAnyqUqygEgRBx3NUkBARRqohN6k8",
  "key12": "4CSabcDhX1jQ6q6bUhovTrf9agbEDA3ATQutvvu6o4nM66hD5B98QLRgkQtsvR7CxUfnnRvr8AiAUWpzoqaFMJVC",
  "key13": "3HAjTDoCYdf7RuAJfdWpJimBwLr8M83ii6j84nxP7X4aTwbREDpSFTHN7Fu5ocySJRXB1EZxhehHcZVHtPqeD6Ej",
  "key14": "3NwNPDp6d3LG45emo56MJEBiBSUdT6iNUnv2BZTvD7fgNkgwk6wCXF5rtivXYiAChxz1Pirz49fE35NHZEi8D34m",
  "key15": "2oaebSzk9ck9QcVoMwzaoiF92FTAjxEUhpmpjTnoxzov6pyzvJAYhhn42fVxAmCUtqZiWKZQJ22V9pWddKEVjy4q",
  "key16": "3QSbTxVnd4MiKzBN3dLjbhj3W7Lw7WmeKQn2grbGjgPZGnkFg5XY9w25Tcix7qzKdobB58VcotrpMkDgkcSd1QS1",
  "key17": "3wdg6hEXDSo78uBTm5zK9qVXBfVV9U1ZuUJiPQ3Lms7J8xbrg9JT26tDupxN9toXjyeC4cYLMsL7qgNwFji7WYRk",
  "key18": "3bsBD3KnztLGBHY9NotWBrQgMPPLKDQZC2D7sQzyCh7fzon9oLhfnCh5AhrDCaP15dnioMfoDgcSc48yqgZQrTkD",
  "key19": "2R7bWXs18t3eqYZ6oY8Mi67x9UgVCPr1Ds5U6F7qh3wjCQXL3JrSuMcDaZxAfCiTWyKAk9hMhzziU2RhrnoAta9b",
  "key20": "47Y5zjZ1Rq8K2BxLZP7Ft39hPNwg7qpdeUTne8dr9rBJFRk6MaRwzy6rc5UQ96bKwp8auptouFkeEzEPxb8CUsu2",
  "key21": "2dUE2MrtYtZK2z11KU5Nr4gYkxh9HhSWjpRJfepRcEkY3Ggqtf3PfYXnXk57yHRW1sf8RCFnDptBwXuw28fTXb3V",
  "key22": "33HMyEMk8ywFw2hhR2jzDLd7FNSjF9ZHuCHP7RGCULyzLYC6SvnKwFYn7dc9ZCqQXQeSFp9TMYK35PBHWwHFhdCm",
  "key23": "5WVHRkoV8BBdTbLWxgf7qXJLMRNbcyF1Di4RdFhZPzq14pPaa4GEL3oyM6DjAXLnMHxujRLJxXxCEFWzCHcGadhk",
  "key24": "3AiJUVXvSZc1a1BxZoUKLSkjeDMReZbeNeKf6TbBq74DkDmuaCa2ZFwXacjKKmzyUuFCcZoZkfZHeGaKLegbdbiB",
  "key25": "4qLzbQCFCFmc7kZwu9TVpUATWt5t46RKMDRNJeRFFHjYFCgoeUHe4GcY2o8g2E6QuKP37XvZLZZxrKCCpCQ9CbkC",
  "key26": "5qZup899uA6yQ7hYUy8d2beTcUqp3kAJjQz82aHsjkUWuYDJHKf728ccYccR3JqdkKaUmuZwNPr31s6nf11E2MDD",
  "key27": "E6vimfakyuc9QJ2d17eezaMuZ37yA8fdNdpHpzALBFwbVfgvVqgEvdYW3DZUX6BjSYKKuLoQcTu7y7VdtoC78cn",
  "key28": "LxZq1Un1RZLehBbzczspfmxiUuKgyNc2xTe9Bf7vJvaNv9c3uNixpLp1yumwjCv35xhLM1N75RrFmVcyokADsCF",
  "key29": "5Tih43EbPeHk82r4K1H4bFJG4cgVuYHswsmVcafyoxw1SBYzpE8zDcf3HFwayn7c8Db9nvQJ32GSHWxhgkN2v5FK",
  "key30": "2XnSHTRKKMpzYsJRGkLMDtVCqXgmzppLktGu8te5nvk1qVBsR754D1cqzf8jUzSmwn97oZTaAQuUYom9JAjtUpFN",
  "key31": "bhUy5xxFYsuqKCwbGqN7Av5A9AyDRZZcQoxdRgFEDo1TjUR4uDkLnsvE5TVwHytQd9jvQmUZL415N6jcMshM4Cx"
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
