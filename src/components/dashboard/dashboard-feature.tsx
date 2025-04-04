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
    "3ZVkzT75QC6ZKFmo3Lw9NkBj3yWbmfeRp8K3yhHSsfYvy8bJxHFBGPubU9Jj6NJUouwpga4hCrm6FBbSNvsvRhjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gH2DpQP8b1obkBdqBsnW7fq3zKBtj9eSJR2T9mL8bXosvvw9LyZUhVPMzShs7mQ42AKoQDJRLjYAzLXmCcbwsD5",
  "key1": "3q2t1bZtSHsgrjmASKcs3RXUmL7TYhDBP3w5p28f7dXKJkcSe9m77m7PBAKt9oLzzdFhDGBKKHLZvLf7xXq1GEmQ",
  "key2": "strwWFRypnMjnWHuTHq4y1ed6YTj7HbCAfho7nTsjXF2pvNDoTbgSan2tiDEWs6CmXEUwS7nXwnSxxQ7dmx9yih",
  "key3": "5xMXGuGa3sxahqAkc2659Q1irwqh6PTaqSGsP2aVFizfZ2G8KUhaHp8xtvvVbbdmG9w6rM6sBbcaYu2rBvoLb9mR",
  "key4": "nsYvnS5fUJiyPrfcDZJRur5jxkbSwAjHQeA9adjdSJFXvn4sZ6hCwdmik4pxZwij8huFZ4xWLktuzaTbpGmyH41",
  "key5": "27xp47JJfKc669GT2GcXKfrKcQjKa5q4ZWD8XE86SU3HjFdoDpXzUApKakmj4i172VKQNJz7xvLNddg2ic1uKLbG",
  "key6": "5y6mhC93q1iij4p8hshhLdmPRFpWPLME11624BaCqnNV875bYhh3GPX59xQBnmm8hhJWDe1wrEYizxubQfeuGLWN",
  "key7": "35CkUEVgLDeiKNTTqsPGtzm6L55KtzeUdPWUheJ3ZP9A2LkuysjrB6hSkymu1y4HsnBBEdyRBBFbtG54kDrJGdMS",
  "key8": "49Dkj2UdM2RCvTRT8rtYb5DAcejJFWHWbCy5t916UJ9gKBb5PJsnv2mWDn47ZkowydMdH6qfmTRvec4rS5sEqrf5",
  "key9": "48zwcUt6oU44wnrjd1zWgNH2unfXcttFWhi768Dw4riNr1Jamwxx6CKkGhy74HjLthccg8WZ4kgAFoBQdzcsoYeb",
  "key10": "4eVF7PuK1Uq1JPkCsSDYpM3yJ7wLwHHxmeZkwbVUz5if6jrjvhYPWoEzAHiFCLE5hsWwthP8QfsAxzZtgmw2ji22",
  "key11": "2ujqdePEpYPkAtHjt7SYHBR1ZZy9zny3fcfk3M7JokPEW1T12S2gkfNo4tEYLg995vjpz7TNMdn9LBiz1NDMXeqy",
  "key12": "4VUthr15Ya8JsMpRek87JLahimQCkTLFkv5AFHf8RWu5GqzySWm8MQrKwmVhfWpx3f6rPbUUuD1QFDZ7QSVHTUWJ",
  "key13": "41zQKi1pDVSJpfHR7tiyCEcRTNHnihPU1tf5RVx1RaZ3iQi85L8pSHWbVfWLyk6gzHrWJuGjzaLW2f7mXpGxjCcX",
  "key14": "5u3LmrpdgmoXADquDQrGxzJtRoJhCJUxgobHL1w1vBPHtD236zeysC2VFaBAPVYJCmfaH67UGYE7htaUsSz67KH7",
  "key15": "mJMBS7nn6BjrD89t4cVRfjNn5wHnpiRqbBXvzWXhgAEhn7bp19o44WGSuy7iG7F3cSTniSTJux8W7UjDafNMKLk",
  "key16": "4DihdirZL1nLj8BbENh1PdYspUhd8zdMBBfLCiYMiu2ovXb1NyTtTTzsS7vSyLvj9iJQkXFanZfzzuRzNXRAmoZ2",
  "key17": "4QqRHSeBveTwPHZ2v9STcg6W7Fa3rJwRTxS41TbhuTUpcZ3ESwEYK53hxhmX8uaUiRauwQcERepaAu7jFYfwFJah",
  "key18": "5SkZDpEyuh15DsWQYdbWTcLqQajetLwmZdFi7Jy222gkXXrXHZyrRbCbuh59TwbarJWZQtm9o9GakQrvaFwRD1qd",
  "key19": "2FvMiHZDnXkK2G2hDKLYSkcSDK38i3byWuTbmysJPXacMCLoHBRw9epHvaMk1FHESPPwrtcHEjYLnhA5f1uMtCKz",
  "key20": "ARWKv9aschyJk3m8Yb8NJh7RxCZEB4HZHV1yf7mtrXryeLtTxu9Vvo4LvSqsP82HYSpBrt6XpNTJ8tGaqc4L2kX",
  "key21": "65xqM85QgGFoqziwqsZM4ymAtg2eXDCLCp2DgN65xXnyrWFLrErBsvrYuZY97L9uP58w6uXmqvMTEuK9QwotW7u7",
  "key22": "5fovfTLuBBpnZ6BoAUi32dED1J9TPUfG3DxbqtAgLzo8sDu2L86HXgcYvsemNUHdsSekkNn4mA5B4FM9XmU7jfUn",
  "key23": "2Jqf8oh5sBUBXe8veHQqrey1Kdb6ZadazgfrfofRCAci2viBntysLEtppYXcdtXspnSuz4u8bjLBGKdvaKBesSmW",
  "key24": "4YMLKyiimcQWkpMxz1MAHFUS59ZxeYKJmiAbNF312kcsQkCS7Y4HA4L5jN2A4HugfSxhvg32tiPXpTSZt5Fso5rD",
  "key25": "2jpz9Y6axsnBRpv7XFQLCPCguKYcEmhXZTB3phhLyDz2p2JasEuprCWg4rP7RdFiHb56Qb1JXAcnuSZgMjdCwD3x",
  "key26": "guM7yy7YCe9ipmcuJT2HhKfzVmAtEh6QXvLa5xgKm5bmxEJc2tqAKDqCrrTiab7Chovy1v9xzxgJrzAULZARnmd",
  "key27": "4hvVV6NQGSXkRgX3VvJNvUQMMYaUk4MaihfKmNz4sqs6b5SCmnwzs73tMiaSu8EDTh7B93P6JsUG3pnXMdnK6JhN",
  "key28": "42EjcjWL2JCBZGCtwGoPUNvrkjgTKLG1Fwi9sWygmcKGcLyXPx1rPrrnqJX49NmPQzARWSkQj827E9bHA2UMhAqt",
  "key29": "5q3Zexr69KyvKhjHvKWC7CMBzK6wFqEYB17YmKgNgqLJKSoTQGCoNrH1b3SWsmo2cJA9gWFWqfHP8F4sSaubKNv7",
  "key30": "3VAxMdQGxsJExSBMST7tzcKyNLxb8ENfegkQtFkzhPzcATx5Fxs3aeQVNkxt6LrB5s779d7rXwaG6VbcdNAe1TUU",
  "key31": "5zVE6WGXap1wD7SRUYoSemyLErfp6WijAzJHnvTNX2TZMxoyp2z51RZEMkFQvYp5MRDhLUzNDtUzFHtBSCQrPqSQ",
  "key32": "49n2mkwy1N8inGqW54tsHuxci57pmDA8EVnxkY2m5xXS1WQ8tzTz4cq57dYgNs9oGdCy8qV1tVQdvCRAWk3ZqaQK",
  "key33": "2kTaoYTwnSj3y4PEt8M2Je8YH4yRY4if9o3L728djjDVL3bMYKkUm72br9Yisy7FduevhCz3KFqKTkH2Ln7fZ5cZ",
  "key34": "TZjx34droiDJv2oxbUqmfk1NzaUdi8AY51xxXKwZTJTBtzG8iZVfKTS4YnYeQv88Qq1Fwp7MNxwKrgaNkcAeWCU"
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
