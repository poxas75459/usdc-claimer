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
    "MwLd9TnqP8CpokQKGgLDJJHKa4DgdCsCVvNyW13sETJQde7HkBHfiYhxTdRFHRZVWvZ6QrcWEVcHBrKfc71AwcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ug4eg4SzMSDoSbY2jzdkEm53u8EukrfTSzWupFZwWRNMvWqUDcS83JjtwwE53qKmE9ie99nZLAXdnczCC11swxL",
  "key1": "4rGhrqKHoUbqpufTFLn1F3Nvw3Bc5HaQ5XJAygTB37KVEq6DxFoGjSqnSr51zwa5auZYxiDDckFqdmfQYEYSCAV5",
  "key2": "3BPBSatxhBHgFZwMz6ydd7XVXQoeTxiuWgALgrb3qcCPVkXgnQgi6mTyLah5JZx6xbMHDNvQCt496B4tWqBXv1t6",
  "key3": "4RZWhcAWZgsCYSjDUSqahDqxjEBbsVud2zsARMdc4pJU4CnHx4bMXSF91U1hSZ8eZ6yioReKv7NGfpbEkTfT56Yq",
  "key4": "CvY1GWF74rAvwdKCYJJaLWSzbBGLJ2hynrj3qibV451mSnWh7z9F2dnewDRCd5fTrp3Ys2uKFqxmcJDB6aarLEL",
  "key5": "4jc8nQf4XFf7QJhULgZZzaVrBAuR7VUjiKB8hs6yKuAi7TScqrPeToDzV9tXzN5scTBJQnb5u3kistAzFAExKhbz",
  "key6": "3HpPXkXYWYPr7uCKn1dwARfQpdBeMk9GyQsabxeg2Vs2ZR47GFCMLBWdf9VX4eJywrxTqfzphN63zgdKW3Gtzmbt",
  "key7": "ggB1FUQWtoprBqsdww88eX8ZFU4bRtUSvkGB9gbFVke8ZRkkJ7eNuiiamr6s4QP81vByMgfxoRoUUHAhhxvYPtc",
  "key8": "VikurTpML23Dj1aVFeGaKTx9aAWVzmGHMiAhG9rSR73kupRHLuY7WruZMkSpeHd773Fos2KjDxnHWZvpq9R4yyz",
  "key9": "5d1P5XdposB9UTftdMLHk34UcWundRiywQwaxriXQmNRvaAuRH337Wq3dZaS8hHBqEsHx8Kt5wHeo8t1rALMjeWM",
  "key10": "4aaZJ7L7qgFzzLr7TvwaUswcR2Jb7mxvzPsBwPDk4rodsfL3s6ETSTz63YfspMQjLAz7jUxmCjSev8P2uihk2YDz",
  "key11": "5AC5vaKCPzaUvCLjKwrdiVdgbXqDN45Sg7tekFaxFm8B3ayKUQfRU1GEywcX5QZo184idtDDR1yy55sLctG974Xm",
  "key12": "n7uzCvTYDeBeNAjhHrpq8n2wtgGM17Tejzm7gSGUXWvJuWNfvFox6Ukrh7bipNtj94tqRQdpwDFm1n3Wu4fCq8A",
  "key13": "rn5U2v7HUzHVpyme8cFdWCeSdvYXj2Dff8iAcNgmX8zykE2ncWaf3Azn32Hz3SVJR9antHXd77oWSqteMqrihVD",
  "key14": "3668Fx5GV5HzvQAcrtxnhJwKBJhig7ha3qs9uDtHku7HWivn4yeG6TWjYq89W7CQGYy55cch5XedNEsJE9JJ2rHz",
  "key15": "1u4ZgUwYCpLR4LbbzDt97CG8bLJgF4Xtvp9gjGVMM1pH2CTrZDj89Z332z3UtNkgmtAdwiLWPEJY2cyc9Rmmpa6",
  "key16": "u1ZyZMz2pBdgn7PZgz57pGQoaMjw39bRfThvQtu6Vi2g1NHa2hw2MDD8KPARExwwNVpVobtEBzC6zZ2rzTCV4ow",
  "key17": "4R7iQ1PJ4NbdQBbzimRcwn2kQ35Rt6fZRMjNUpGBQxyuHEEeuiq9zrVVRm8NTNY9Fh1UW5qEWY5TV39pBjn9HA7t",
  "key18": "4bmxi8P1nBLh7EFGQjfN636PYcYk58bNay7oVeVfViuEKJUHg6i7HoR1SRoRk4wvg2tXkTuuimG5mXTkZqHP5HhN",
  "key19": "xqe62764yQPAV2BhY4wqHmSNnNzcoST2aAzB4pj5pA1zqUDxb9U5kV9Hc29iYbebmAER6onTKpqB8YCUSMi5XSU",
  "key20": "33BZtDDGwZJbbLZWuAyvY1RP9K1gw2u4pUoiiQG2rssWNP8mLLjgi4M9A88CLH9PRKi2qyryw4kbp3AYBzWCFErU",
  "key21": "2PLvgHg7eYjjgi5jUWKjBwW3Ef7gABkseP7qoeH8ycqjVTHMNjeWo9pZVZjRZttejMtBKuB2urRU6EYJ3DGqegkC",
  "key22": "aub96wz91tWyuZ8WQW38AJk9LPhtn9LYkHQFDLf3RUcdGxg2wp5NS27eWPSgBnCqmx9f26yVpAZU8BK7if5irQY",
  "key23": "urYuWs3ZeAUiZRSJNeXiFNktTWLw5pBfZ25WZBdG5krR4fjzpx8sxzkKSNuLPTfGSNjk31B4x7YYwZLjmuUKsDc",
  "key24": "4iVHgfFyM1nJ3Cof7EkqhXXYKtU4KHpkheVKudc5X6guh99o4xvkMRLC1BZqdw66s5m6v5UDsmw2oRt9ckDoYnC4",
  "key25": "4p8NAhksKAoeeURZx7awTRupUSHmGRBh2Wz8MgvYBR8XhXo59ProFyVosehddWH7AqNXfc6qhptpCfVvFFUZiqdD",
  "key26": "57e6Bo4JNeoJZP17oi8a2pLAGAYFvVZsXfUwPybWmVLqoJ4r2iKYYfQek5Rt76amZaNKU8xd1mprpMLgzFfisCK6",
  "key27": "5ukhz2e5LUKrPWcGntPPHYKfirQSTusLKZ3XJnm95YeBwMopUAnK77irYkbj1bgKCdJNqUgGWMGbAFoUwrXTUeeJ",
  "key28": "3PhY864uMozmSRVmx3eZjYjgocY5yi3pH6GPMXzqNC21W335tTXcgwFk7ubpWwKkGQgmSF7E2jme2M1KSf15R94q",
  "key29": "4Ev92v32V5aFU2Nyc2fWm4MVnEuZy7KFCJSVa5gFCQJxvDP1X9f1Gkzdpq27Zsnb1hCG7H5fAJCKZKrUfYi78HR",
  "key30": "2TWy9SbgcfRwaz6d2HfM8MDVFHYE4a2NxRtSG2V2aKMnvcQU5TDu8LjaZU4pK2zFLsBT5UMCeZjQYXppizptG2K7"
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
