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
    "34U9g6Ciz67BiUCcN6aRrdx6dyLu2hJy3cuZhAQx6r3QpZDs3qLrVVmX42edzNY5GgG7rNjcDRnGb4Hfa35ZU7z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H4YBxDwCV2hzV7Kj7CJ14TxWD9Z64eX8UrenjnikRRtAAStz5tj4Q9YefxsdhuUUk7ANk4qwg4yuTzQ5x9rzMkS",
  "key1": "21y5dWXuhK1eX7nWtnMHLyZoPhY4DPRoJ5KkcsSxQZcqM2c8H5aghyUgorkx2MshPn1fM7txoicojeXwqW5KdTAc",
  "key2": "5r7M3aj129NTwAsUSs3GnWA6ixNKu6PQQ1qRpYJxKJYvN3JfbCLssJQ862Jhv5xYK3q8N2nxjLMzYEHgBiwu3bUC",
  "key3": "3T6TNBrMBWs6CAK2qfwgFZ4YvfF6GJL88k6Pko8RAUHArGFRpm1APpd3DasY1SHnNyCszgks4rR1iiRH7Feg1hX5",
  "key4": "48DDMreYW1sePwHTM7Z3og5nCWRFiqU2Ppqmg97iKXmr34w415vCfkqAG6mG2Qw9WQkZ8kS5p38bPJer1K81ZqLT",
  "key5": "3UbvbHtWUYHXnZpvZbU8HioyfqUv5oUsTPVWCmWLEUQCZ9GhKnLUisY4mrbTHj5vBQZXUuTf9cFFNrGurbbJX5NV",
  "key6": "67DLUxR2Ren3h491EqjQmHvbiicf6Gu6MFxZyrAMEo8tecwGFdheL7wWb7oXQy2Lt62jUJikhcMmMVLmfgoBzkMg",
  "key7": "qw2bqP8P7dS2vd7x1SLck8a8YPRVBDg7n7Tz8SBde2mNb84asQrR1uNKE8fMJjUbw1aB1Hs9VoDjXGukcP63b7J",
  "key8": "5FUyvGNzioW285mxEWGqZyqgm2kpkoTiiU2KffiHtTPnei9L9HRRRkRSg1cJJPjE8LExHEi6Ue821WBAb8jb4gb3",
  "key9": "3tA5RYPBNdVubGEiPoitUNqSFAHhDKVVht5pooYMfVGziytND3g2iwjKmnbfFGM6xnnpzhwVnwEMXR4VzpTecXNW",
  "key10": "32TowjimybJCAqwKbNYrwDEFR9C2DKgVdp4tfHFW3811FpNs7gANRyfK5FGRkrKCRg7eGWUNhpVYShviCKGwKDrh",
  "key11": "3bvKDUpqSVUbyW2iZHf9phgJsrWNKryZhM14sibUYT3Zw1yHjgjQ8J9QT4fD1sHTddLmbTWcmXWQdevEahr6nvLs",
  "key12": "5C5ECyj1VbiV3893bNyKuHtnWvdS1zGZPjjbUdwniW9883KUShNMEr6zC5YMVyCXzH3q583zb1mgts9QBzeoqhVm",
  "key13": "4RDCF1myFHaUBF3SuEw7cQ2eZmkNGK2NP5uTx4gGkzsHqCjfwXkNPxt8GouQxDnfYYvzokJT7yi1bc1zNHaDPtwP",
  "key14": "4eJDVdw9PDLMgKJyp419vLKXeHedUDmsSBpkdXwKTbdPbYy4m3VcPVYkogrmTPUaHNzRghbQ8mHaLW7ZHQVAy1op",
  "key15": "5EK2HMrsK7i9kzVsvw6sqrKmyPLYtadLt6AnZWUTqypi8UjyvCaroHnQnYir619u7Cn4gcEAUgw4EhsYcJC7rD3h",
  "key16": "2dEWBGuiQYkSHJVojeRCQfpp8N9bX46eNQahidZBBQbjyMS7jgodBLwvCs4xEj7LTfyYGqLGkKkuVcUEEThLzEXA",
  "key17": "5Jvcd9A2T3nTEz27E7h8M7Yj7fyeG7jRvDZH2mMpsxe1kyXNydgXxE6FXDJou66KVhMWMCU7kTekV9a5wRCVfpD",
  "key18": "5gTEshAVSHTN1K3JYttEavRtQMNjTTfZuMquU5RUMQstbcdLrNyHTjnvdmKkt93tWLi26N5tx3vNSFTe8JFeMZ3L",
  "key19": "e9e7oKydZvmw1sF6zCupaWquD9jG8owE1A92511CzJ3HXXr3aJm2BNNF8uqH5sS9BnNWWagiA9R36MCEzRrXLfZ",
  "key20": "ASas2wfbZW163nRXVgjiqrJ7wBnKyTwgmnn12gjpfVYQRZyXJrJW1iP2c4aZrUnvsDrrimuTdWDkurtYBW1nNw5",
  "key21": "67VQHH78y5AwbYpnrdgWfwjtj2vi2gAhRW2kisdA82GjMKN3M5csUiFNCEobV71VbLXeDfRqNBCGanfFyvsJkSR4",
  "key22": "2Yxpzx2FziKuBjqsd5qppCbwobc3BuNCkPtDA4ywwT18a1n2JFTKZQJzcb5w1smjziNQTcbcofbji78zj7K888hS",
  "key23": "4URUvVaQrZB7iSs3uqes126XBy9p3p3FLCNYygLtjJ6vDF6X1BY7hzsv2CbGDHEhgDA6xwuvvj7icBi9LyzrYJ3j",
  "key24": "MQiwr6BsSB4g5orxDNCFG7JPQWbM7hnhoaWTCUQsYRZh4LrcTh2zrtP9gEbPuHxajE22bnpfzB52S8TisLDkSAR",
  "key25": "49wHKbZZQ7pe6UNRZZ9ygZCjTRia2hxHrVS7LNL2wR4oBHSFS114PuoAkAs6A81i5qVD7AYLg2FVHUPnwAbfZpj3",
  "key26": "4viGwxf8hWNXb1gFidaGDKqdZw3YXuLkKLN7jzBbCYhywgGwzkHhYvUaZga5BWskqiuwt4hGtyxwfGftmPzgQ23d",
  "key27": "5VhySQBhFavLymfJuYg5JSXb5Qk8MJdnM64BdjiPG3SaurDoJogwX48ZxhCFgD8AegE4RDUQNuZdafCr59HCgSo6",
  "key28": "29WijruaM3FzL6GCzNTMMVND66pddKy4h42Bnectj4QD2EcAjtS71bKXhjTQbaxqpVeRsj9gKsC2RhFpwjZtncfM",
  "key29": "5x4YMzouvpL8e6S9xxR5xGYE6fCxzeRceCrxwknPKiYXhgHJtnYP4e7LkUV9kJD7xibaMpwLAU8CvnLsiNhUcntr",
  "key30": "5mmtez5Hx2vrH47SGKzF3oRoPQHnHDMfHWQym2qsVytFJa3ZrB8GRdXAJfjyjTiAYduqTU1BqWJ1WAjSby8NHmA5",
  "key31": "26ME66ArPWJWRJ4nowRHxt7TQfq5pQ8yyPz9MpfdgCXPQXWsEhVvEdhzJ3eBf1zxbDqjGXqgcVmvpKpAvbh78BRo",
  "key32": "2rbdnGPsEvDGt3KwJAeAKZMDVMspTZbszqjxzNnX5Mrwrf6R1VHxqsL7wnkppzWbHqHbwDX1fsRBSq9XKVpnXHPu",
  "key33": "295bseGH6UTZFrud3mbc2oYrK3TeuPwht5sTmkax7PXpNQ6vFLv9BTzAqj8TiZdhnd4wbY3FqQtpFsveYhDRjHVE",
  "key34": "6782xo8VLweixMJLzx6ZBfLP4sbw9CiuJYDjdZF44DcSDpZMcTBtzVD9vPPY5vVYvwgpVCfxsiR9Lkm8CmTto7Aq",
  "key35": "4BFTvcQ2A9m7pa81RnAiw2XDru4QVziwJFETDH4KUyssYbA4p82htwUQ9uDBtjHdtexpYJ5TYNGvWo12bwbXRpGg"
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
