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
    "2SbRtFbhwuoGuW9jFRHC8xyoumBUVjNeBVS4x13Vh9aTPGWMJKdMEmY8GKyyDDMXn2nyk82pdLqGeV7n2nT97VyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phPi97p57JqL553QYXgmKJ78HxDE9orBWfdhX6hiwen1wdRDsYpXLzf4HjDmS3jgXsL7LXVYwee4TEt7GHTPw6W",
  "key1": "5p6GYukqQ3oYmczbisqwMQVAQEArRKvyFwexVwiFm2MLnKErnQZkpJuRG7Ea9XMYQyBuXXeqTpTVeKj7Q1Ka1Jgn",
  "key2": "65FqxhhacMH3Thae6iQadYBXd18ykLNRcDUaniofiuPEUg5NbLze5bB16LyR62sCNZW5MyoncrtP7iWkgwR9thgG",
  "key3": "4e6r2yxn3TBAeZfqiKL3cBCwwpSZnt9BjVTBviUBPfpcw25xKAeN3UYrrXxW2PGsLTHcPd396x93siWMJ5LAtAQb",
  "key4": "guAXF8WSAeAQqBmhuHiauFcX2EeSLKSaA1iP1wk8Fin4Dy3XsQeZBaJWzNAPnfmfR1UojsZSiwdNz4coM6152KX",
  "key5": "Hyi4WDvf69nKRspEAvkQto3MRVmBEiD46a2mZNqSUMd3ZLFLvBNbww62faEPfHe7yPWf8ctNKPd3pvC13j1obxq",
  "key6": "5mFHs2KknKymGFTM6VBf4y46kbqrKbaDE3bsMyg6uTvALSKtvowkCaw9Btk4crAhxtbqTkmxkFgiKVPgBauCxFHb",
  "key7": "4Y4C5bQELtMDCYHutT1bYTsjAyYtsc7e7ATpJVaqu7WB3nREeAw5422648bHRCe668oM8SRHkcNG8x11Rs8dZUf2",
  "key8": "4qJYQD7NAKg1ozJJ2AaCwESgFSgTLyNKwJnDksT392FUAcW7PtmShRbUpnFxecCtTVz56AuYrKBYbSqSCmotXMXg",
  "key9": "VbM63aUt7UhGZn9cWFCea7L1wBi3CGenFK1vcxmXgN2XrKEAFXzYQz4wZgC5KctZkADgskHsxNN3Cd1wEonKGnM",
  "key10": "84UgHXPYUzoYGenEFm1QM8kdwAqN7FKF16HsFicw94HnUHy73fvXntvtvDhc2vL9WpJn9zwrtxXsDWp4eMhJwxo",
  "key11": "2ZvVFryNmonZNYxMkoz88TXSZfzgKNduQowpZ7EhtGau77DYSxtFwQjzMTcvUU9Fd5C6YzJEviEg5vbyfbn1k4j2",
  "key12": "3wHh9AnzwWE3yACcFCn5wAAbFJ7t1BGmg444mxm3C7DxqgjkVpaC1XuSTRkXHyMz2ou4ejwy9pzkbfw4ds48r5U9",
  "key13": "vjan1fJTRvAkdnBiEAYoFrcXb2JNw6KSiGqb28CutZXA5aXiQschk54ZT2PPacwQpxzjcuBHUoiMiPDzYnjzyFY",
  "key14": "4kQ1HvkymuCAzz822bcwxiFoUga8Ci7aR4EizVffZazmpCkic5p1DXs3yVahNqxzqgUEj89K8sd2HMw9bUkDZxwz",
  "key15": "5QYsAkiW8XB1UW65bWTo6XqJHQzkzJ12E9ZZ2QjhaHGzv2VA5H3HW1gvrudfPVjxPoF5zJEKXSRpxBdqxai679Ki",
  "key16": "4ocNSQkFsioRdPqqH6CEdrwmdYRn4gRBjtV5cMv1kMACv8R1KdQmvxzevWYSRCkatXWY84mhrpx3KhbwvCYoS9ZW",
  "key17": "35kEnp1L4aXBruLGkRcYg4Hzr93BJypPGJ3HURyQYNyQ7XiLbkSnyGQWGhLfTS3y73vDBRamdXD2PBfpPsqsjTTP",
  "key18": "4TYUu6GmJjjobMhRFi92naiawQUAKwwqYMfj9J8EYdxbCwgkDb4K4xkoLywujz1E548AEDKpm5oPMn9McxDdApaV",
  "key19": "3upPnQAgSkGWQdc55gQFERAeYK1CRwDmGjK5d1SDXioVMV73HjzVSiBDAGgsBW6j9fRqqP2xuvaTfZNkJ21N1yHG",
  "key20": "2vQazmrpMFE3hTQKy33sfxZRYDfcYnYpRHu658VZnq5kkmdS6ZTuaLmn3Xgkmb55mvKpsm5hq2SRRUsQiqrAjgW2",
  "key21": "3xww41xs2YXzpzKLGqvYiY6664ZHBeS3TVPcC76cbQqfKo7Ck6MRm34LvqMyYVNt62569LBTFHfvXkHRd6mLRJm6",
  "key22": "q3yZTnDN3UyKXjxCnuxbt92XV3QipvuLAudh3fxtciKk41KKWPk2fEFFu8pkUajEi2VzParocadGuuRu2BU8rQA",
  "key23": "3i69oSDyqnnrLVrT7yrTxazF4sfJR7Bq1ZesXgmDTyimT9KmUa2ZHqs6bhrebUTxHPMHiF5mn6TUuR147P31KLwL",
  "key24": "3n5ytC82wK4txJvujJB6Q1ZcZR9T7SBqP1ezNP8YFdCYqAFZS9ZvUMuxEYqwmVpMpW6XNiX3hmXvt8hsjrijBx6s",
  "key25": "4djUHPiAgBMg33GASnfHCY3j7xaPFPBpXnBGhSjkrJfenfGNxji1ba6vBZZ8TiQdioz8552TfTvQmrJVQS7Y5rAv",
  "key26": "4KqHnC7CEkTniHs7CCDpMqqLPV1HeSyTasVhY2dAaUD7FZELao6Rqk8cqWxLZUqgacJD9PSCV7sJQn5d1Dh58tRq",
  "key27": "4sHEtuu2S2rM87RJ5PdSUvFFSwDfeAf9xfkGLx897u7wphE7zSKhk7cjdg2W8UXim3XwpwK9MtrMXsbmj1HQR57R",
  "key28": "2pv2yPqkHi8dL3UyGaLjmsWEWmJKj4HtetwfpyWjfW8fFwPQwNJBGFckhBN4yoKFh3CLKoR3b42vX3c7XizHsdSQ",
  "key29": "4mnpwUBE7cB5kiS1ofM2HVEHWefN6NtVVkrUAcBWxiNGnkJJfXxMSzJGBNkwMC3WNoipTzRuBmNCu7NNkwJkKP6N"
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
