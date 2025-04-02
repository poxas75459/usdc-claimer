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
    "DuJcbb5UXGJ5DpKMKqxbptNuxN36qtSp3Gcym1znwaqhRCZCQ63Z6uq2TzEyYhGuahHMieuZo9ZGfVD4AwS32SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KvgvH5mjWn6FsRNkwin26FdsRG6oJGKFpTrtjCG6HxXyMjpgqCiby1MWxNhmXo9KYBjt2wy5W7sWZK82Z62Z5ht",
  "key1": "Ch4VixC7JnXVzJfEtgjHJa6bpXva3ztFHTNfHJSdHQotUkfKGqgEhJsZQPJrUP4CLfmwMpNgR48D1KYq5x7FMWk",
  "key2": "3e8EjsnjJmLTASJXKTQAXUsZBcnPAVNrMrMi3L8EerBTud931wEoU5Gc5btEznknEo3WAtkqWrZHLpkhTEcnUTt6",
  "key3": "3GSgmxTfKU3x4CEkB1RFXhbh6dP4D8yvStEJnCKPE7DCySsPM37m1NUnoPUtnjnSqAjw62jg5x9tHyCakbkfaNki",
  "key4": "3AykJMhXYZk1wwKpMCaRss9PPyQijSaeikBjLJzmf7AQk4d37SBzPcsqnJzr7nBURjhZoh5BNT5BfozsE2yDbvNK",
  "key5": "463wyhUTVopDxREXcqTede2skMkaB6RC1jfJYQm9PiH3BMcPWqqVUehk75Jxvc4j46zcKKqUm1B9QQvUgn8nfKDJ",
  "key6": "2fGLyJzLmD3opYybpMMDw4L2stJLddqy6WXvkymJLG11StPAjHfcskVVbG4xbxxJRTKs3WSQKp4fT59wh3APbdQJ",
  "key7": "5EfHLHiWUy2wpTc6BNPZd8DtA6YuJV8Lu8ySbaQYR22vKTVepVwHS47QmrQLtBnpysWtxSgmkGGKFyqM9GdgR6wk",
  "key8": "3HZi4DbWwr5XJk2GUez19vYhzvmEypHUizci3MxH5aUuK7EonHH5P6bh9prz6HKJViPT9qXjnzJo47moHRn6Xfpk",
  "key9": "3c1DVaNfbKadBXJHLgp149hPURpvggc9e3zfEji7SMHJogknCoDv44U1xkDyzKhGSe7rP8QW79eJEWpwr6fBh7Fd",
  "key10": "33ne4xkN9PJAENnFrA2BmpKCiAHpSXr5HoSoy7fzZC6yvjnwjfe6S1Z8L4DW1LK8BjxMGpNTbjzx3wmtYJJackU8",
  "key11": "5NjP6mqC2V5B3xASXZQDDYbVQKmz1s41jvcmqiXohDJkMwsnKg75tFZ5LHvZc43WHiiEzaF4G7vUNR9JE8DiuQZg",
  "key12": "46UxMe6Xx5AfLhQvWjcxKEKVt1VnJgn9eTtAZjeVv951wN8CpzJPo8A1X8hLsZ7dUNSyu81HZq6K6F6q3yjJgT1P",
  "key13": "8PugVMRNsFHY6RvznkNNZncQN8Tt3TgneaQ1HA7oVD3dCVZkGYYGgf3TUSYaRtPxBVioEsJiLMT7e4xUiqoFyuh",
  "key14": "3q6qQok5HgPUnC5UUCWUnDjGaxTomUriTnV8vidX2g93tQLt4mHPRgihu2W92nye4iYDgtr5TZHUJrLacdLFQnfX",
  "key15": "xoHN5RsMFqjKfHu9XEdJmn4Y6zq8zFcMwwrgW2YFiBs2m6fcQqL2gvQKkvvEn9BUa5baENNkchU1yo3wnKkVjno",
  "key16": "5yqYmiMwQcqESM2YFchxhB4uzUjhY7s7wLeEFNdskm1W7S9CWHmpKJHvfqYhc9tYN91z2v9BzuHnou5iLTPMrDJ2",
  "key17": "Rxtde7VAkiJAoqGpRwTVqLdaL1Mj4Sm4NdC7WHSGtZgr3E6KX6NRjeJCETwbh4jTY7m1eAyiEB3x53jsjEitVA9",
  "key18": "48zFoGSdsJQF7wCnWi99rQj9XXS3MV1oG78wftjEwziZan2cdUK6gXzdzzcWf6617Ry3BgraL9JJvBGZMrKmTiKJ",
  "key19": "49RcGaN4U1RU5G2wmyyGwKYCjgNw5BfSYDLytoeSHxBbpjBUDseBQtNgXp2ewJoAcvLZh3ZJ3TcvQwJimbrfXhky",
  "key20": "4mSQDJgP8g1RaihifphtEa6nydJeLH8LAn91Lfub2ihpxWKxoiXq2usY24TGt5woUXFaUkymW9AAv7nE5yjc4Qkj",
  "key21": "4obj7bhGgU3n6jXYfitV9VhPFoukXFPhYpvXiLT623mJK8oYnFhymp46LiL2QuBdMskPgntHidVbqHiyAnBRkz3w",
  "key22": "4q2ww4F9YfR9GZDJepm89zYHL6qbBTofy9DiKc4xyjBcvP6RUSoDKHZu7T4XgruXMmLgCKZ3ot11q4VfEehiByjV",
  "key23": "2bkRaL7MH14sgJkX57qdZAyqi97vkAU8pGeou5hraP2EUzFVYK8HFxzcQTuNGwDHymMu8g54SuqmhCr561MPcbpq",
  "key24": "2FyU5gbBWyV6nV4NA4bHMV36Y42sJsLnWGJZiz693DUZHjoZWx4575Gx6Pa1x5CFUEaKLeyXsjuJvoMvcdWh71Ei",
  "key25": "4STUgsZeP2sepsBXiogBixpmVzuCza8sbK7kvgbLYfjHReGgs7rpvauJiytMwSBHfbLKGT16j41gL98kXnZwyKJj",
  "key26": "CobNvqigZdhnRWXSLkgtD9gtuVfSoeoKjjEfZaxkjPpXgqZLB79xkoM4nqVMBnEQbpVcTuT1fzcaKFLRJdL4Tm1",
  "key27": "EB2LbVhb9311FymPffierpscgtjagHwiUQ5Pd8AvtcAVxcXkrcYmWAnoyqHP9AusTPMf3Vt5ZEvWGm66P8KDjEY",
  "key28": "22WyUQTe5ucpuj3e933YraW1FrkqrQsJxMjur3uhWq5RUUzmaEqDDy4T2ATQyy4JJdLAcExFThsK9Kk9teENT6GY",
  "key29": "2mw45n33Pw5dMgaFDzohiJRd79Bny2TfJjktxEmPeREXTwbpU47KTusAjQ3cqdELoK4wyaMpJQctLXLi4NfMZYyc"
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
