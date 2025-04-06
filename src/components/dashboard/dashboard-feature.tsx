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
    "4PoabsQJ87vBahLND295bCGbZUTa9q8SUSvcKeiLzNjCUNFTWVE6gu9ZWHdn8mFPF7SDvVQcv4s8B7XqzFB6BfYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NnnmaDeoi4BXX9KuyPtY1SN7Qu2xC6FBXpjeMp61Vfhg4qiFaBDnwc4srT6pYNpVvSLYhqTAYKVphnVChNQwa9X",
  "key1": "5XEsia7wuggJG15xsQCtMcAamvtjW4dF6c6Zkg82thFqszPjPTVHVNZgQPjgDLUcK2k9ZvSpN13AoSVjrQsUK5Gk",
  "key2": "5Dn78XQdy5wYGHtkbMNk47FhcJxYVcpTtnLdF1BBpyfqggYvWompvWLoVJxCdfdaZH7dPFb1eXA9L5XZUL3Kw435",
  "key3": "5gRWJ4r6q3Ujz5QEZPs8dziB5KybEjNUuVmAW8p7RrKiv1K21dgC3b41BTpsntnFR6mBNm4wicLSQ5ZB5tprJETP",
  "key4": "5SPrnXK4NJwMSJvxKWeXPfUvcyAPUcVV4a1pxfMaS7nT6TD8vkmae98pmkq1U7wcxQfjSj3czB9bjgrXFJaSLpCt",
  "key5": "27tLMHo6MFVfwkao8exBVuJSaHLmWybUth8MDMr4h2ToZq8LN6HJEyxSsXJhat1WBxXtwyMNdgfoEZdFB2CPfqib",
  "key6": "52vrxTx3D5suyCD7tKSRvZ3Jtvdo565uYLwVtcUxgbxnFSAh2fC4neJMc5pn2bumixeRcmJNyj3i9V8vRx2Dt9Df",
  "key7": "4fmvjuWCmjtxJiKpa2PJCCqHC6sXXrqfCPK1b12Sav5ourg68dsuLuC6iE5nvnhj8HnkxV9zwuvWuFvHYPdTU3U7",
  "key8": "3n5dtTWGQbCibECoSsU8E2qnmhzAYEFL7d31CM9Qwva2VTQ65twN1GFafJ6zfKPkG9HHEB5zFJZDdvXpBGFAn9uZ",
  "key9": "QnDXSTsBCfA9vMTQjquvyNTPFdQfTzB4ixgV3Dj3Eq3m2hnR5rreAm9UKJLcVAat2n39UmkSYvW2d5WQefo5QDK",
  "key10": "aQ6bSyzrkPKuHW3bj9CZGEwrLhLH4jTYbFzMP9W9mS7svjxdKxLGbniDHBBTaZkTry81wjmSCpu7xnF1zdAKZtL",
  "key11": "TEAkMpAFJkAhmZj4x2YTKDqgVMHa4Yx8uDxNCiR6beDkEBn7rACt6kJGbRqKGvz7ZFH1uxAKSWT6dyq9DfQQwUX",
  "key12": "Kd13YAw8QqQFkPa6KoqcjBd8oj6XjhcEKuks9FgoQDdCbA1smdwkLgoJdDxSjpP3gX1NCy8QZ5rkQVRnKSUy3K3",
  "key13": "4KrSyTsoWG4fFXbRvLsiLQGg2MUpP9hv3mCbL7jXh2NrN55dsBjDTsYwkj4w9PW4WkCffghGxEjgGc17bZroPFs9",
  "key14": "GuYwts21TGABzJxEzEkamfQ3ckdMswcKD387ybjj6JzyZhtg9TtfmmCjRs7TfFFWwV4kkXR5QfnFMXMmMagmU1e",
  "key15": "4RQs899yBssyXh5rs9dauGTVqZ68GAQozukqiPcTch11LmRdCQYDrEcZpqWTYHFD3rZHkcEh7nyFBJbQEWfv9BCV",
  "key16": "2XqC8zUcY9LiiJpqTThNef3Pnsot8z3zaQjyVf9TCWnyDm7SoyaEKq17xaUd2Ufky4Lm4kvBwjFoQjxxbw22qjxm",
  "key17": "2qNHH4cVEVdGaen7mMZRjBgza7Eh7ZVhq6XWLSJYd6MrDQRU1DsTx5KJ43hYegP6hrXVNfMtFKj6taJdnS7KjuqJ",
  "key18": "7rQiYrWaSUHCrbBfqQHoikTeH7JVV6thyty2pGqtuV11MQzqrxdBCwpdnxB88RhzX4UNn5eMuwXzsb3DqiavHC4",
  "key19": "GfMmwqoavcPGrHRWnDzmi8JTT8PW4v6qepMWYkDGtg8q27TKK85BognS1EEe5PiW13iwzcvcucYY74kfdMqjYyh",
  "key20": "2i2iQXvvt4pDPEvK8JA1e3M8FPUg4ZwWMTnz9sZDZ8EYc5bqKWzp9mjApjeUMzbUei7AG6wXfARbcgtg8psb4pEV",
  "key21": "121D3EqJV7ukfx92mu7u6afmv671mwqKt66EXaP3uYrSeNb65Ex2S8VRHFEARmfbfHTudqEp8vZ9yTFqS5FzyGtU",
  "key22": "2991gGfPD1YWRpiEy6ktRoBJfifkf1tMnUPPJPHWhsfzqogrUs9tKW9VjJBqJw4wewUhkQ6bc11nTmLkA7CinyhK",
  "key23": "517NoPh6PKkvr3pBMJQycckiFJzy9mohP4xTRp58ZmQSUaEEs6T3drdVYeM7fHxgRR7Ji5S4EZjxBhcGm2WW1SUm",
  "key24": "5PVAyWZRykTcZHRHms31anMhZSUNTnMdDGwdPakKjqrNe8cKBM4pPeFQKcSt9qh6KsicEC7G3c8jJL8xNh5HHYsQ",
  "key25": "4Kkrf89uhP4z2ztSE3H1hbd4F15aix1cLYh2x8LvUkhJNHwJHfej6oeatxy13jxUnJirkB8rrDzrhPvFcA53BkwC",
  "key26": "3BuguCRvut1GmfnSEXJ2uAw7mJi3kuewpjQiv8vuS6oaDEs4aCE7jDQvTAisjVeA9HiRLqHGybLozXJpyot12Hhc",
  "key27": "5vnsNZxyCj3uuPsyEogLvYFpew2fEctUaFE7fXBEhdZwLgXtKwPWMepUWL5Yhz3wUf5xA3m1HULdKGUUpDUpqNNF",
  "key28": "2aYGbsJ7oVCVGBrBJhKU54G5TT3oPmDiaBmYWqFwX3kesGEndomEEXryFmKdonvytPmS8NFKxZyz9iqLNNAeoYec",
  "key29": "hBjexGcv1bJFkLKDAQdDS23n6bpyarfZnEiRSLoHKk4A8rag4B2WnjLsSddidmVZteknKGaMFfjn5NYwwCQ34J2",
  "key30": "4iyQWEYWDDThwqdnkFuX6hqn5qHtTfjBJtQk6aySHbJTFQAuButs4Xnmg5QHoF71TkEdZbMdPbWW7DkjCKYcXp5r",
  "key31": "4PYGGLcWfCVUoxSiYA9i7sXGRHGynwhMaETzYRrkvPjPhVoSvPsoikH32fD4JFgSTSMwnCRbpvLyUDaQJr5dWyM1"
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
