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
    "2zcd4Me4GLhS8Xxuj53AoRMeuAtxujhmHzyf9ohRQyxr2ohpj1K5QkYkkUh47mKbNnYBzqhv47qcEP6PijeFtG44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MANbGcBDwkxo9sdrEZKkEYYfp6jiBPAyKPFL6CnDeppvVXgRztdHVvkFTQa6AHV8rSGjSBBc63VxKdHRx6R4485",
  "key1": "MAp8Zg9nf2bMYqrDRnESxB4nAin6omR4HbzQDw2vB4rTG3tNXpxRadgsFCfigjw8ZMFApUCb99kYujVqdCred1m",
  "key2": "4ujn629QW47uvreQAY7zoAU1AcVCptXMvSA1kXXd19QLTs12m6TvPmN23rQy7kN7RA84ZEKBf3XDSRW3oiQXaNYK",
  "key3": "3QsQQ5FK9VCaqKfK45v7BrQLjwVT3RwisRKMMVbuRamML3uRCzZbCL83uYn8YboeaF1bZBBDWEeMbwba9mYovb2F",
  "key4": "3XyinXMtKxQXc8L67LszH1iYw2XRsUF5f1b6Lo9rNFq9nx7gpTbZrJnTPWkaL48XsqK2HXhVwcRWTDoqcmXFi3RY",
  "key5": "HfwmjM3WxGhQH8Xrw6F8daS9nPPnM4KsYAzrVwaAnU1hg6wddZk7NJxnfz9fKXwvdTcHbqwXcswbPe3GgfHGngJ",
  "key6": "5EuxgjkurmRf5P9UW2NbeC1CMwq5d5agzyHbBAzHd8tsbE1kJXaa9tLTU62jvcB3uRJnBsPbYaZMVDhge57p2n9a",
  "key7": "3c3Zbhoj1cpSzroQ9Pj8Yg8UC5KFEgbadFjAE3KhUDt7Dtr7vAgkTtdoP9DNu4RrCPfg1szM8zU4eKpwkZeWPu15",
  "key8": "3ArAtfEZ1AkmGEQz7qKMsZNVab655ZY5KvAxx4hHE43DsjhVpRD2wVMomycho9DUyAVw11TERkbB5ADaHQAw2DYD",
  "key9": "23dWpKmT69NJB2KFfszphyRe2osi1oq6mrZ3b3891gCHgS83b254a1GthWsBqyXnGPWpWcLfcYZgmHfag62nZZr8",
  "key10": "4bVHKLhejjdpVmiyUZEhjPkju4kMeooH7jr5tTrk9EnNf1qUddD83gvmwB4N5JvFzrLBfhFnCnpZGfKmUFmg2Uww",
  "key11": "3ckPZkhJm5b9aQchpno56dii38185KzuJbMCzZ2G1Y3diDbHsFAuRpshTGS6hwySPBPNV9C51rbbyAhs9PpG9ntz",
  "key12": "qWRUaxv2o583TEbDWRWqBfykDqXWaTLtSgLTuH7pFitQWweTaagFXCBMFMwLZWysE596o3c1MwD6z2iGAE3AyJc",
  "key13": "RnGinc1ofTFVNNqSgBefVZcjFLL1Vb329YgTaY1eziDTNwU5utv3LgDX4Z62ftpdvvsTZDbWMCseFCJCydzKc8Q",
  "key14": "5GLYSUczCD8atj1YoKf65XztjAnqkweyx48C4QtPTZbhUpAHmxgWSXKcQQP616NeY9XWXCZ9wLeJDwH99zqkuVMb",
  "key15": "5mKXRHhiAYTZBEj9mJKaQ1Qfqvt2UHCNEH3VpbwQCvUTUPAmPgjY5JnU7fk18y2QDxuTmmLSuNe4rspM1uwQzJ8j",
  "key16": "3jvE7ASmVd5YfcQ4K21JcwPQHBiXUrx5sjmCEh5p3yRodEWGbmrtnF4dNmttortoSvJUvfB3Rx9MvkJPk8YwiHKt",
  "key17": "5W2AH2aPq8VKrX3brLSkkUFCXfAdVgDQA1ixQ4tWNXAG4jizt1iKjyEYJL2rXhUykHfKkzsZSpmi297KZLVzP2pi",
  "key18": "AWRpA2ZvtUntxAdFCoedaGgfozNtfncPAKm4rrgq4aN4yWxvQayryyWazSREeQXL3c6cT5tqaVAhcq7NodyQku3",
  "key19": "tdgtPiMbz3LBppoKywoi9uDnRstZNPUS3o3vgEwcE56XhhincH27acyjbWMD2RNA6TaznXxDMgXgUbv7t4DVNwF",
  "key20": "3UfV7ctkZYzWji1aT2ArzMN4DpCFWKkiGQG9KfMjnfrKVcGmvUrAjBzj2ERrzew1ay1AqSmgxFJgiMcPE81fg7Em",
  "key21": "5bNy4kjZ8DUJBAVBLS7ovYExq6pFii63rEAoqtFT8FXPAGsDY8LzxQYX6CKf2hUQo43oEz1eweWqCbeMZ3kB5f9L",
  "key22": "bbTKZ59RCiDLniiCEPr4zp48cGApd4iq1dUbm3sK3g5U4CZqHr5N5wCPJUfKcAnZ2UReB1fZhqdmxuxKoP49wF2",
  "key23": "2ZkU6TFQRGomWoqycNdE8VsWb7JN9hM77AoL7vH4RNXRq2mVoLSYu6Vy5wJfRb5tXKk9QXS1KTVwKzts73mE4ZrE",
  "key24": "nbFeNczk5QwMs86u8yV5yXNsHSVXr7Ukzsy3d2Ngr1B4UGQBycZVMJ13bmDDvzgJkZEkDE8jhtv1JFvfQ1ot85H"
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
