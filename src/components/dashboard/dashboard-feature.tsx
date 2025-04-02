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
    "YVEqb9woCEeGqqH8U1ViMw5XmgN6uwdYfGP5iy5AbWw5whvpuCktswcx4HfdRdSMD5teuzqyJHpgkaJ8m6J2FYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bBq5RqCA1Ub4LLJgEZJ88Wksd1xd3WNUFWnYBZ7Emy38AK3Af9efvnkWcVKgExmiAduM5Q6unisqEkMvL857Gpc",
  "key1": "ZkTfBeSLpJMBmozuPycF6Xs4Djbm45UcuLrCERfd61xWmjgcwhJRMbW4inZPUTGDbnigjDPR2RUNjZWPuUqfx9u",
  "key2": "5fqQ7EXUgWmsYCKxbrUHP8LZcv4xsi9AvsxxML632ncoQ838gjgrG3dLK3vfKS75r3LcPdRhrYDSgMcoAxPJTL8E",
  "key3": "VSbH45r8LY5QRC9a2TJ8TvzLqRjc7Th9nY1gmFHng9vvBFK65sYV9Lj19Pe76ZbbdKHqt4V23aUgMDk2mKX6P3b",
  "key4": "5nKx7nCG25xfmRXiv1paraZV2tanxZNeLqG8QZvkk2F2Mj6z7ejRLGWpoQ4h1rJD4MQi2T7yYrBPFAezgkYMktUQ",
  "key5": "4ohdrnSmHfNTwfHVMjRRTY84dryTCSzniVCN8RwoyL99HwgaDtPwisgwmuUcHcEX2J2nHtDLyE2a8gJGgjCiNC5U",
  "key6": "jCen2HFimTjWu3NSHFDLSoD4NyxsLdWi77rhDnjR4EKJG1ZJwXsV9GiyGG9v7v8zyFamahK7hwt1WE6obmEe3AC",
  "key7": "5DXhv9XUyhEuG7Ps1ysGRXTw3HQSswwFRTnzuUmtDKKNa5waiXg2exGXXhQXfjhqQwTpbxEXPp8hsqYb6RzGoReJ",
  "key8": "ucSCXZVssizviyCo8ozbMU1aCDRbJit3XkKTtkYSskCzebzJUX7LzBwm8wrGGCryNDYzPL8JLp6Q2yFFJp2hXu9",
  "key9": "53u2n2K4tUvUqznVvM5HVbcdPd4h3G6SDHaUGgbYDKET8XzcF8ELpUFoFXUyoPwLxiyX8iEZA7UybwXXCudHuBC",
  "key10": "2qxVZpz7DYmuicAcCNZ92m8EFKEGastpzi9WX4aQUuUHVEjnYKRae3jQCTfFxw5y2PZRBdu5pHQtDZzAGuPEbNnw",
  "key11": "2UqamHKKobKPu4AXgRrmu9apiYXbGaucCJdbamh9VLhPQjjdv4rwuigC3BSxVtkkX91mCw1z6dwWERZZe7MDrU1F",
  "key12": "2aN45gwF7MbnMeCNGsgBTteqCgeH5MHbmPuxHB7peV1XvMxWaZRZKVLA4pddzhgTCfuTPjT8jAcqjqkDMWQiRZg",
  "key13": "3BnrKyZ7dHoEF6tY78QPXHZM56NppjEEDpsoUVUtE1G3Gs7joiztafkpj2K6KGmANkh6za28KXoma13SAujCuEMR",
  "key14": "5HnS9376kfxXZqejUiX4dzRNamsd1FesG1HJkXzMSW4EdBRVNoNeQPhQQybokJ42Sk3Tca7P42vKqpCiTnfxU2jS",
  "key15": "5teNGkGu4XuxTh5hEo2LQfMoXXoErgh3EXAQiTdbdM7f1oWde9X4hLE6RxdpqeWtQeTCbPE3WbvzCLyo7p22pewz",
  "key16": "3C97sEQ6RBxZBfJChyZEuTSWKEiiDAFanW3iUaY7m6tXSeQJg4zw8kbND5LwwEZKAMcxdeqUUi6bduuueDpMcZ2P",
  "key17": "2mxnLzjVgLD9wtXkgV6CgGBXVZa43K1P3f7nNuvKBSWNoRdtVz412buExNrejZ6nWXwk7me59jJjtzEzPp1tiiQV",
  "key18": "3vHaPwBhz7ypiwiasRAN4qDKeNz3Jc4gmARK1iH99WDdvA4vgqoaVQAuhJHW16xqNmD1dEUjkSf5CZJexYV3kZVK",
  "key19": "2V7Lzv9TfqChKicHd9vA2rV7oGnWuh54oDuZDwEB1NFt3TEmvG3GDhjpDkzVB4dU1jAcNm3VpSmuZemyrCxFLUT",
  "key20": "3Jmi2hHcP1VdasB6iCwufXjcXrWrANuBihqGAqGWLcSy1kWmtsGHDb3NK91Vsk18aS89EYKfiZjsSrjdVDfaxE2c",
  "key21": "3mrgb4D5bwVAx574AhqH34GLuW9FEWU92EMJA96YZSXHqmzTk2oGkaoNwHqHnACWuoS7tAnehMgdDbGcarhiUfdD",
  "key22": "58YsNhSTS9zu3wd1Z1gNGh2WzvGFQN2G3vNjheBgA4Atc4PeaSyamRbwhBktJah1QTJ6JDC5xPc9jQ8afM6mqRDi",
  "key23": "rrRxfYoXGEzd2hDYX7uL7BCbLaDhRX71xf9JiyDcV4gMWp3qkkDNt9jfwnBRaxtpE5e7fhJ1rBY3ggRNDHSCDPZ",
  "key24": "2cWm65UnzStPhDxd6Jo9cNU6hmpmU5EgEQVx4BY3D3kBcXNrrPVZQUQF3wtaCNndtmzKE1KqknPaDiFeEroK1Brw",
  "key25": "2vcN7949Tupk3PjcTWCfFfWsf3bT1BZm6Qw1ZfDq2hd4KWYzZJG5zEa9aZjJtVZUsXdqxkYndRpDzp3qcXy16dKu",
  "key26": "3UdW7YU2mbuqEGy1xDqZ56ooHJCQmB26BrrBxrm9n2wK6ZdbBxFjrP1CVWkjuwxEB1JYE61t9ZokCQUeMHXkVvDV",
  "key27": "2f5YpvnuoZdEfReqRsjxAUkhstkBDLpWk8KtKrxKVeTf4AtZvTHGPgCJJji6KDfZcuWwyA6dyQrxrYp9Rrm6qJsu",
  "key28": "4rZS9nDFHH9sb4FsGGyUHT8fUxcNZTrq7x4LUpwRZbaDz9cf76xgdbfWGZgRPWuKK66Jg157urHHHre6Hgq7YBLu",
  "key29": "5NgfR1v34qPhGcegW87oNAGYWZJfDv4EGcF1g4gM2n3iWC5in4vGtTy3dnV4hhxnoHLELppz8xvjgt6hpSU751pU",
  "key30": "CR9hZTpdGTj63ApUCPqDnoCyiAfEXp36gJUvA2Gkp6jG6k3LDVH9x5kgrfU98eubE8PVpCwu9x7nBEha1V6bXcW",
  "key31": "4CgTn8ht5c74k4YG3APbhjMBCENSwDKzixwgTfcMhke6y8jHSskfoRyLQzuYnzkz47r6wN2wWubBmkNVdNVtx1KP",
  "key32": "iBVFMf1FgXNGmdRNhJuoukyDDY8UeTZGfK8R3mLh1wkEutoHRBYj5E4Vr4cjjxtUbpGTQFgeeXmC5CQsjj9WumU",
  "key33": "NUiXBBh7DqjP7zZyqVs8pANcGAsMXZUXm8R3iWmN4FK57WvG5QAakVpsedRctfbpGZHzmMkbxXvb1TpXqQnVo5v",
  "key34": "5QAPUMnbZ9ZAhHwwwbANkQyFuEuT82mqnMPq8bzMZV7bwiYxp5bgpbEBVmvFrJBd3txZ2CEEKmQ9VC8JG7VNDas7",
  "key35": "27jwFShwb6gtp7PAhqGpmDNNXUG4gnirRydPLUEd2MHebvPLv6XQuBB6SjsdyswWSrsueTN6kFzC5ZEMdeMamDyZ"
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
