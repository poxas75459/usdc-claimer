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
    "3584M1svWyPzeP6x5fYxNi4thi2fu5wj1Wc1WHFKCvYJGWoFLYJbh9aotrbXRAZrKDSJw68UvN5qYeDUPWcVY7jE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHeyzWfNzvwygixS41PwDiwJgLQJjGFxBgLkKTT5ucYgb8J4svogj4sSbiZnyvRp6oNs6MHnB8GsACt2M23C2p8",
  "key1": "2piTs1qVYgXig5eabiCtmngf2M8jccMTqtF5X6SsEQBCN39PEr9GAYWAzuHMhhJvmXAYVhXb6NxonAKNa7SabAfC",
  "key2": "nmPvuDZwNCx3ygjf6X1bC9vdaNQ5K7PXwpzC1ZjfEwA58MTyvpbGjcH9YtUAEhXnbqGdQN8VZd9gJXeSnKqMvhP",
  "key3": "4uGx6VSR1VbJzbTNZ1ifTaw6UtLMov4KpLcihyC71fcKqZWmzjaASDvh9L8syciDDUJ4sZvYwmK1FwPorjsV8ZqS",
  "key4": "49837J5Hmrak4icQ8uiGi8qmB9DtGo7jbfZzDZGBuHJqYWdHgyaHRQ7YKLoq5Hvyhy8ajTh7F3okzgUcTcTcKrY8",
  "key5": "3JAT4D19UYTnvJXxdj7d51sPiLeRegD935RX6sxPES6rCr6jWDRZkiWWsHyAoFCCvmzP3j5eGLbNxHAdWrcMcAYm",
  "key6": "2s1M6oqyUgZMEBqJzFzi3byL8mU1uhGDC5mtVXo1yBTMqqnfWuNVDATzevCiDcLzwa1PijY3ULcsvWnL8d5b57Qf",
  "key7": "3PakeA62AUg5WCh1H3sewNHWeMH6zEkjvxrmdeCyvA541719qiYhW4TXs8SkNhPcZCtQ5zduspz6udTHBttDwesW",
  "key8": "2TyaM6Kk3oyGU8chqAJZAMPHMMUnPFSSX4P7oHUbhxeRRCjhdKmJ3PUtt2oH1vJq4wSNFHaVkRQarAm7GGbmvpfV",
  "key9": "4GpmbH4Pqg2X8y6tVAJJZo76mb58ffFMeC1LkBwyjVN2xQjn8LqeNNmy3X8n8TebAj4JSg2E414rwCT54LDP6QUJ",
  "key10": "yJn54NU8vVoShkD3HruTkdGGMBUvook4bQDVd7zLx4No3QeqbJtquRhkKtHTLNKg6XzjWM3CfmfK1siepS677Pq",
  "key11": "2x4NmW76XXDYxDm6rP9iLmA5Uj8Ek8HWVyUkXqV5CmWrQVTbrkMkapTmuzAXr3MvFGyZSkD7G2Eq7KG2DyiYbAq1",
  "key12": "3mmSuj24xD1M3i3ZgG76Gs1ja4hUGFwvnj8XWvxNYfaFAxbPgHEcY7ynV6jASZUL9qgX8nejBW7DXW9ZQ6ykiVc",
  "key13": "naQRMeygQb7bird3FHfkDwaDuJJWf6nMDXgkdRvDuyfpZbBdo57MfwV29yMDG8KtL2hrkqQy6wEJQ2AuJBG922Q",
  "key14": "4PRq7acCMjLaYNJRPaWcSH2di7Wr93KN7aiQTVM75yXi7dWSZVd3VbgampasV9b2TmvcWpdNAg7yQJ4htwBfx2uf",
  "key15": "4h5HPyB1MLXnf1g8yjHTzq4xoBbELsY2k3RAsPWRNc9qFJWwdZhMJEiCmHXhfe3xuLBLNcCsLWGGFmQtMUVi6aLv",
  "key16": "KJbq2Gm82MuWxFZubrtUVj5a56LcAw7QKh9XtfoKf5o8rGZ9tXurc92KKesKPBuvxHd5VJdqQ55LaDcKWbhPqDt",
  "key17": "3epBnJLNPWHWwNTFt7yjcURXZWi3HRH6fnSuGcyMcctyYp7nCxdHqLBCoHnXUnREHtviLBhj1LBvmHssEDgoMKMX",
  "key18": "3cpkFmfX3BSzdDZHMTSJfx97k7vQNnSfYHTsroXjCkCQN59NwtinGQ8g3ejhDUsC4SU16dXLPThM8zR2vPyngvKA",
  "key19": "2i2UoUkQrNVSmxnvp2346Yw8Ch6dMdEtSnBoTyDwZF4gJQPghGJeS8CxAqUGnpD9f57Qe38BdXfKns4ZPcH4Rs6u",
  "key20": "25z7YjUW7nU2rq9eX4iLTgmLjSorJXr2LHX72fi1mv7vuDyxSrGbyDVWgD4yWmd5jb2gj1KQXW1jpSu2ZfPZr2uS",
  "key21": "5YYiPnBSWDBTJN815QSPYso6PqfTDVDNLWPv2nTM5n6Jpc8Yzm4Jw5RhygPWoJh1zfdgfjGsFhkDp2BVL9VQ9jmQ",
  "key22": "2aNNSvoethGUVvdSK3VADcNqyzYjxbRPkyYRKDteRhoqqjxKsM2K5Ef4z3Ht5ww9fjP1d86ApMKA5bcqgTCyYDFf",
  "key23": "1hJ2KAKhUj5UDEY29D6ByizbXAuwpV7kXfD2RqxQuQZX6My3yDBPipg3j9okCf79VeTA1ef6KCZCdGtL14xRNr",
  "key24": "3ALaFrwBpaSqj6Wk4gKX9Cv3ZnKAxVCHPkjCgV6LhTbheWG11UueiMK5wBBoN3JrrpCKBZsD5xhREDNYnExoPKe2",
  "key25": "3rFRntgZnVNGixH9jAH4xk9gDPMnReNgrXez3sS3qCdg9obe5wD35bFbV49W9UMKxpAxAt6NGcAtCkbck4xj4z8y",
  "key26": "5nyGe56hMXfj2HHneRi2Ee3KphiSi6gR6utWhk6qv3cKSgeHr4TciJEqMKUUVwzzn3jZt7tmG3G15cZ2eFTfn7h8",
  "key27": "21wK9nqcZmzxVbxsohhNmtkL96K6PaiV3rhm2jfiVNRfwEokBKVzWuhop5GXQGzHzpd4QM9PPJAwh9N1knuGPWw9",
  "key28": "3HzZ2hbRTFZPjA3r8NEDhtCfMQHxzHC8QizLQnMUCezxxZt75kt4zH3G5koNvYXh77892pJ84Aex8tX5dMmqQJkL",
  "key29": "3JiXMr3Mfo5PQR1sQ3Pstfbqxdkcr4mdZeAFVuHqRxuH81RuGNmmJq2BykyFz8w2f3FGswebd6zk21HUMtre8G8Q",
  "key30": "5Ktwd7n3DJzvBSvXBU41RRyQYXvcRvGhrQVrhJXpTWxARGxpuVWY6K1JMsPWq3eqPtdwuxCrfdLM373F3goQ4mES",
  "key31": "bKtfG8zi4U6raEYeVUQ1EfHKjHGoNHR7qVHcCNbdxy1F4Ns8q7ifZjJt55EW4Fbnycoo6Quoy76f97wRZKxVMde",
  "key32": "2dj8ThTwDM3XBmrLuqzfj8cdjB5Fzs1V5Gyke8f6TGtv2yw4tSqccY7KCZ1PyxbD6jEEPW9fE84Coxo9eSxNibcz",
  "key33": "6sCsVpeF3DhovpL9D9azmhVeSUdH388T8xJcP3zauGNfgBaaJ7sJxgYTRZsLCmmLeKuLkbJitNKxsmgZEwHfuKg",
  "key34": "5FRxBRRa3STGsdthpoKs3puTUKSNDRwPFZ9VccF6rFUWLZSoMQQJbEmLXmusmA6hcByiuMGZfAjUZP6cqimuvwYx",
  "key35": "3a9iLta8aPnJz6JKQGgyno8AS2ksM6ocGUcaZV16o4y7nc5YV26LQGoPWJQDvdaETP6r2LkLg1181DCcr5oe8gce",
  "key36": "5aeDyfpDmbQZG63t5gE1QebBoLevZSBy9KtNH5CL9mzRAyX6VWWoo47uHRdNykMqcgy4yaU1P6ax323LcuYY28Mf",
  "key37": "57LgjjWRYtcGpuaUGCjiJjnf5vxguZq6mXQpwZXDxYNGrB2QiF5r2n39nm9VU3QqNg3GKDSHKesbzs89UYuiZxJR"
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
