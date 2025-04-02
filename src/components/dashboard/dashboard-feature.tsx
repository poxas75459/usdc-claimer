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
    "4T5h33XhokQmPDN7UH4vCwZdtVoinfyk7gZdmKyn4j8tZEUpf9f9KCN2aaGoVZUqWt2KEMJRTS3SeG4Z9Dj7NxnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "311qcUHyFJBJDzQgHex72tmhTi8zm7F8h2P61Ho77upqSygsDcux51w8ZNXBhz5mfugy8xA1Pj1HDPS32xLkyQCT",
  "key1": "28A8FD5Z9xLRxdHLxJmgjp3yeYLBhRqA1TQpS8AupzHhqJU6x8uS4BaRYzf6gSPqBh1zPB24PvJXKt5Lxbhs8oTX",
  "key2": "3QBQWFRUnJBAXcBot5VQX1y7NSuxbFXWJtTvtjyXn1yGLJkhzyeNDa2AEB5ZdSszPtqpnjRwXtvhpfEGsX1Koggn",
  "key3": "3uvVNB3hjuG5Y8iZ1PivQjbyHTne23gk5adBJBd28BQStRU8RoKxW1gZRmpomg51iXiBe7V43Qd2gGWxXbbTgwRF",
  "key4": "5VYonucPvJ4kcvChFsJtqaf3tp4qCraNiHNJ5BHJ5DJMBeA3bMKYeBGg3fs8bXeE4mjF9rLLeLBBBz723Uzcw93b",
  "key5": "4tmBMKKueYuSHSec82LQXRwZ5UmTgNvufVQ3QceJEbnX2rWAtge2WjqBKeLSwiHYpcsgtsfE5WDQPmBReDwUWXuS",
  "key6": "XzSYSzr33WFYyimQGHCD3dzdNF9DGhrH9bru8bbc92YmTph9YayNLrmZEyZYybPriwwWydjggz6bmBrLhYGVVHc",
  "key7": "2NJz5oXTweJCecdLV48kZF1BDH9Lnx5rbs8T8G4Zpsx165ykPDghCypvJfbG7E9FcgTUn1JTmnGtWYQrWoTqDNZ5",
  "key8": "2QbRW7xDZsGka52U3jJiLZj5VTeLqs3GmU1NCqVA9adw2aw71ENzbiLaABkFrqsm3Rv8inZyAAXh9op9gmRFp6db",
  "key9": "4nrcZXdBnVG4YtdfMoQgKShDyfD1Z7M37n9jC4sneUoFkjeyn2Ca2QchzUtEZWTwdGMZxF4EbRNjvoqrde4MaY7m",
  "key10": "8LGWvVRk3UeTq4PVHsEYjULYoRgkvP7vgvpJXsV3d6QK9C9GnCeRXjWTUh2yXUMTKzHahZC2saLgRWuijvbnXPb",
  "key11": "BrpKRLZDwZtQM8cjPuKQaY7pGpxLAuzodvKgYBWYebYk2wxADzCVweLTWsjZuUyCSvRzviSQWXJpZReThysR4HR",
  "key12": "4vKYx7v7baB5jhW18tcgdVNwXJWorWy8DVi1yrfsMsiKvJCZNLTvox4DbLbsARhiRbwhe2ETqMKejteTm9uFfn7c",
  "key13": "43EpBpiKgv31waTX7cHjdLKsRnCfTW3yps2UFLppfhw67YZSCYq5AsGyB31U5ttfENFrLVohhP3gwrNkF47HkJD",
  "key14": "4hVryDJeVkWMMxP4PKwraoJew4ndRwEbvrG7EVfWXBi8Yv84DC9EH3W7QQdE9QJf8BDFFGduVpv2EJReF7Sy5BUf",
  "key15": "5cmGo8XTq8rX6UoipgoV8WH7LfbN9EHZ5C4MwXdvXUNRHnfX7fKqehvHKRh2FP46du5t9yPtddVam11WwbFNjp9b",
  "key16": "3nwkK8eur2LroJR5VYwoaAb7FXbFrPBCQmWtkagjrwKGsazfboSkpkwY539TZ31ZqrUZJp3S1EfyNPhnm5w3mxbx",
  "key17": "2SMMK4gAeVfLNrzAcjTuPvMXgDER1oMZ3Jsm7aoqEppqWYSLJadDbk5wXiZSwjUEuRCHwmG7FAV8b6z99RKhHefQ",
  "key18": "3qFSQJ9TCnKMKtEProDFQLmwudUP1bYk1xmcoM64HfuXsczaHvTq2mvNJahQKbFsaYjL4bwNbbhjcG2PejT6JPfU",
  "key19": "LDa2ub2Cmp6jWxr4xAqSBusJf2LE2PLUj5o3r3DCAeitUyR5a49UNS4d6wTJDjAWPM3E8uWrpUVn3VCiDRXKqGz",
  "key20": "3nMQ93Hi29yKgvdb1ZXbZuPz16xGSEffnZXXkdtjTnBxXhsn9d5j7g5sx717HQxPHSVYKeYLbNhMhJE9q8dF6bWe",
  "key21": "XYGgg1AAHaNvKqWJcZYVmjK8qKDCqP43Q8LefpyeXcBZEaQ1AVVckeabRZZuJATbtHEhte8qKKTdbvrCUm74ZGp",
  "key22": "5dPHWS12Uqzzmke4vtFiCPV42bcyaNCqm8PVt6gcGyAtrKtdysdKzAVox6t4UXC3DhxvJxtR9e2HkzSyVJAgi7gc",
  "key23": "3EvYD2ZcMgbpAZATwiGCY33uokM77eH32yuMhcKckE7eM2jUCCyBXKbo7V8h6fQEmqaAGpXCyPjKgxZF5VV9Q3rx",
  "key24": "3ger5uWq5qYiReauWZrZzYkyEzPJtirMsZwBBucb39Qw9BELVCdf7rgTQWwfTQoy2ui3DBejPVusb3Q1a9g5LA98",
  "key25": "27qcxqo7kxgTckbBYNxvRM2ttPJ5B9eQGzErwKeqiReUGkfsN7YBtkHRrmkphhGFNjXHXCbJYpDt3smj1scofA76",
  "key26": "4AF9hh65EQJNyx8eb25x9jKB8CPfoKnqqrWoZHFFt2dbGnv6Kuh6JUopYXKZXtJbN1Rujw3AoijhyCPnvAKPRkqy",
  "key27": "2LpQBP4fKQVQYfDWRLSiSjgoEMV2ory8c9m56txLcA6boeNwKFpSrW8TVV4yjqvtAdQKzmEEEVAD48StN9uYsk8e",
  "key28": "3xMzTaR1vNkstPBLSU5rBTEk26nBHZXLPtVmXXxs4LXVEBpJaQ8hJAqhZsnYjqGMVUWm9bobPpA9r4wHEVzkK88J",
  "key29": "4ZyoJdgJFL9RHCG68wZxymPLwfK9AgVuJfct21Rspfc5NajrQqXo9LGTqAFimQH1ranCpeKmii83j14YpX39fQdt",
  "key30": "3346xJdxq29Br2VeJcUnvSRKuk1n8eHdShhDhvPAgajrbGAymhS4v4woZF4Mu1GaYsZh3x9RzuAvecXeZxNvXxL6",
  "key31": "3zJ9TkWH9wD4iuGhh2FtRCKeiU7DpoWHgUBxmKMo457o3aPgdWuFqNz7rWtCoT3v1GKT9jncjG8qnW48UnrxDqDB",
  "key32": "3chZu2giXJvcWvdNhGQbmkEVApwwV8otNWzgxh935JT8EdSsxg5sug3NV6ssmtdKMQF8vZBSR2sjsGKkKRf6GuWN",
  "key33": "56yvPACPEsvuRCDWzQTAjXmh3tTwCrmFDwB6mRiKcvt1AnTo7zKraGKzwr8dEGTyvpYY7mjxSQUqfuByEDpUnqVk",
  "key34": "2BQcEzu7wEk91kWjRXRcYKvs1jqUZyyki9FHgG7BrxQtXS1VJTUrzE6WB1zDBoiKd9pEmMrXgcZAVNVrxjVeAr5Q",
  "key35": "3ndcxEk7gGkJfhRdwm9ixnzLW2kiebarGpfiK6QXso84aZEMwJtH4eAtsszwrcBkT7htc5BfnfnHoxvjg5fLUDrT"
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
