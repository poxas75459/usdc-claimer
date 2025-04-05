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
    "5qK4EgDnZXfoBV3KrifbYTiRQuSNwGJVnfS4oLzHQCzq7FwFscdrLz9CbDNaqSDLtqsosMqYruS1qftixKv3zf3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxSJsUFXoYTy9bUCoiNkTgE5k1dT6WmZfHTNrv6KoD6B5173YnD9dMEEKyRiatZAurNE54dzEijG1cFddvViuvE",
  "key1": "29bHJVqdmtXkibKoamN1xHCAAmqSEVDvA4jLxC2VsysG4kwF7f99BKJ7HYLypkYDXfqVoSDy5u1ZVujBaD8EPjfE",
  "key2": "3Bq2kADQQdb3V6ANJFGUtjsDtgy7Cj7wqNARMStob71VcTTNjpE65YrZQqecKapvXtVMuFMKdY7F9SHcRjAR8rHh",
  "key3": "4KT9JdWbqo9UY6cACzqJ2dd948z9q7nikTKAn9xuMT7sJw2QraQXGhqpAxhFcnctMB3s2hSAcDpfj47mBj9FkxNG",
  "key4": "4kSdG6hxHPKwhY4FNPqBQeHdhtgn784kmipJV68L5jEBmdFLfYJFLuuxb6kuMkgX2ch4Eb5U4Q6PtgyQKwXnrA6X",
  "key5": "qrexKYhorgLs2YTPXAHAhinAUUohWwtPnGKJwdkeGsWU6KmDD8G39cPFNQNAfUjdRokVLTLBbZVtjpqspuDp92Q",
  "key6": "3BUwBa3425a5grj6eU1MGGDLQpqtg3JS8an3f9iAXMdGphQxkdH9Adz9omhdjFfyWGC9fkmX5t2Me2uLj1tRyZyq",
  "key7": "4CBpfDwAoCokc54zYiKLgwzrtphxyKrJLLRZASiAc2ahL14ut6H4uFDJ5KftPv1cZGLnPbHY1ZratryNAL7wXNeT",
  "key8": "2hsCBoFv1Mh2v6ERAL4eLQViEttA76LVJtcFkqTFUXuu9K2DfZe8FabKjY4hba9XAwcaD22n9uWdrxzwrJe9dSfF",
  "key9": "2MtK6expYkFo5HxNy4DM8wu3Cqyv4nW89EHRWFzhYTTLWiBtLgFE9LMFfc5GNFuXW4n4K4y5B2qgcLPso3duoA44",
  "key10": "26WvwJDvmsW6mDQpsQpfKgUsCVabsXQhnYbq8Z2FMXb4WV8XdTHNSwjVMRKauz1hmiEK4aBp2gTC2Cdq7z4317wW",
  "key11": "2GM7XhAVDTACchu4786HuNKgJ7NGPRBKWsFDzNM1uihdY2mTytoUmm9toS2ivHkJPbviBMKo6V15bojtyjmcktFv",
  "key12": "4QDPakeYR4wmUKQtw9B4YAn3PDfgZ9XGpGhtufkDtLGnDL9sNgrr1NHD87cSxixmuGP8FngAicGFrwaLDb3e89nf",
  "key13": "kc1tY254vcwTMN4pAnaC3ePyYKCHBzgvw8CuGUbQ45y5HLM8frNPSxpzzaqFhaAmFNYfWXKV3Fj65ePfgWY2ntZ",
  "key14": "4bx7w4W4GFzfzkT2yMkbHffMmCWrfaCRm8cJMG8HNappxDZCkRn1h4VD82PKGyBHwHbyr5gH1Uj1rpbWFJjKs7sq",
  "key15": "5ioWzVSM6PMwE3Wp7Lf13X7Ds8dfR9TierFoGRDt2iieT9MKgjUAMq2hdKyg4CBmui4x5iESy9UQ1ScsJMYY8kRt",
  "key16": "5dD3HQ5FKGNpr2r3vsqDvorKNXFUrxLEY2aAmBTU8YPeUumv3vMNNPeadpXChrKcbsBeri6gRFof3JpUuWfs5Axm",
  "key17": "3PkF7YgdvMRymQSeSQnbXSnfWMaDsnRQUyXRd7uPHFdCVnAj2MvBFhVN1mwDL2oe8ruimCAyv1ogKBF9eqCR4DE3",
  "key18": "2mp1P5oS58LSrUVHJ6he9dpJoLzHacqY3sHNeTgQ97hshbLfLxccFJ6VwVz5XGVvBRSk9HLNMu2dpWmMy7gQgi1",
  "key19": "4asjLMy3uy8uDay2Dz6KAMScue8ytQCccvKyXB87JgobSqmEjDHtBm3HjHcnpKL9pTEzanb6tsbnmKwBC9EBDz96",
  "key20": "3WdVSKEdX8QJhgPVMxcj8V4PTinTdCsb5QeWLAAG5g45jrSq3s8PWerRcPWkztNznWdGcvdGuaRiPBk2TzvfGjec",
  "key21": "4HhERZUVe1fkiPAPvwEhT837TPu6oLYE7ysKyvoSEabrypuzNEQc6muaHwMMM2yaSrMU4z1uze9EpRouzB5TZDAV",
  "key22": "3wQuHzcZb8ZrMUqpAbVrfVPMYomD8mkn2HWdEznSZXGE3QtYGCe7LZTZgsXsQDeUScMUwNc7Bk91op6QpLxuBWHR",
  "key23": "47LuyhCxLiQyAh1Xg6vZ5nuwyiF7w9rNA5aeMNha4evwcQUxaJyXeF2QhyNchRyVWry3DyrrF8SkXhTNrPBijVuG",
  "key24": "2uN2Duy4NmkUrVHQTEdeQKunjX13d5dyBrka3fTDnHTmLmFN7Sot5JCBhxZhx9ahJXgzMVwSZzLSzBCqfAkFuKrg"
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
