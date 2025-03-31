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
    "2idqyWBStV9ufoiXBDb3kEDAkkcLFuWtLcvGvXeSJ6gJXZLukCcKMVJB9tdn5ooasS9b2H1BQGbQ5c1gKxTkQrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTqQj42zYoZLb8uxq6ZVBps4MbZqqwJADGoszecdHZiB6jRFYZpfbYaFPczuFWmtfEFVYi9Bp5fkfNja98mcphB",
  "key1": "4NJYmb6ERUJ5LBzrdvTAxnX227qSrT9DNBQRntLsxX3sqJhnwmXXqKKasYuR4PVdq9AscoccBU5g2sCqexa9NfMm",
  "key2": "2UZQUMhzZv9zyGY9LMkHYgsGMdSn81KrQYx4ij9TTMgd27NiA4dNU2rnZkTtCmeAUPduT1i5wzpHqaJtYuu755gN",
  "key3": "2ULMW15kTej9rQoRiuxGujnW7NeJMzXuJmiwnJN62mnpyWeS1FVUsACb86DUTR2oAY8fJYsrTxFNL5dheAJhb3FS",
  "key4": "33hAR317KZKwjHgsUiUkma4cWEh1w91kraXyH1KB461RRdyz4NXRf9jGxTGY8uM3T96rAXoNjayfuCuKUBTGDBsZ",
  "key5": "64itdrQMPvw3Wz5D5bHqNxGMMY3dSenMnY4vxud28yUQXeLTSW8rw97b33FdWC9fCWbnzwD7ssc2iKzeTcjSrdQX",
  "key6": "4BYm5e8BrytPnPQoEKPFwMEBFcYpcXKEtB1yXXWvo5hoK1B9SqEtkWkV7btCA7mtMqYZ4FCfvXBpR8dwJZi9CL7S",
  "key7": "4YDJEZ47CGAf9AfKb4LzzHjfgf57EC7vneHc9fJuCDSws9BzDGh8ySkS2zAp15YRwTXGjHHeAGK8ChQccYf3mxYs",
  "key8": "5zqDQhwvhAQDGFTdegihQhJt2AGDYKGiHDAJuLo6kehXBqffYTdGdZhyrQh5HfiKkV9KaoD4GKTrZ4W8Z9twkSME",
  "key9": "pN4cdHjghRfjbBnvLtPcTFHphWyHxn82AJAB5TnqTyVoBbrfpPoHfPPy2Ast2C2ZFpaf6Vq9bbGKWSwcznyanrq",
  "key10": "63hDVCndCMFtyqQ6hV3gUkMhVVBLXt55SniyPc2qJyWFR3sZvm2HcPJUgp3STyknZFRY7cKdr7Rn4oGajEtLm8HE",
  "key11": "2ERQvQGcazEz5KnQob9WScjE5BCj2QEgnYD4ucV264geLycit553U6CBSKtY3YAfwaDc92M19QxJcbfpF1qPckgK",
  "key12": "26qQRSMzm2f9FzXt6KJXPc41DKGmHzBZpuPcoWoCkmiaKFZTiL7idKwUwS7LYDQcjzYehAENh8yuHe1kgoAQavpY",
  "key13": "3M3zJyQsw6fDx3FuJ2kfnUj1FmL5fwnd535rBGyT15H3hXeqy3aDS5yDULsFbER3ZcgeDt4hiNtoVBErefTCDzNd",
  "key14": "yHf5LFyqRR4LNkMaD4iMaWyqbkkuiXvoRpeQAxBBJa5NnB8sb4Rw6KtbwiLL5q7ezBxKJuQhBf7rVyezWrgPnXo",
  "key15": "VC1LXkp2ZbWYLD757MYWHtVg36evfZJX6akjRNVxm1thJdSJGu5RQbxCxa72iypCw1T6cJJchnGwsk7CLnKDGt1",
  "key16": "4ekviVbRUei8agkjs1i3yqJTA6U2yLGr7JEVBKxBdvzZ53DM4zzgbW2KB7VBS6wD7ELRfZpKtzzy7HShYpLXRFah",
  "key17": "dBx5nFuxxDPRv5kFwXWCMSY3ZTaX8Kmb3vNoxJ3S97fESn7DuCqFuTEXx3bKoK12fUgUy3kSE6AuAh8UfkJVr4F",
  "key18": "4x6PrrNr2Btt1QaJ3EPN95yMFNrH6qSmFUgvhkUss4XH9JVHVFDswMcKmk7wMb7UgURwPWyct2bCWTxTSnffHZg3",
  "key19": "2VDWEv89gE2JHcVjkgfqrWzHmWZ7jTTr8QKi1iTQB3GZJ8AB9MoLe61ioowwuD9mjVUBu8uwQRqSTRFBNdygUo8D",
  "key20": "5Dmr6CZxpQaQEKihevSEbrjz9NGn6dNgeKDascriAxvXBEnB57oqmmv3SSQzi2AFd8waSo3C8C4s7nW7nGZEeuXg",
  "key21": "4QRC7CgHrk3eFsKoM7EQPdfDBBNaP55eh8CDUvZnCJs13SuDbaq3VXgYFUauYwUJgzFW4R7z6YghuiqgRiQYhAe7",
  "key22": "3oh2DVLapcgkQYjxZNvhYZzDDExSRVRP7dzradSL5ypU5TAU6zLyHvBWQasxiWwhru28RPEMKEctiKkg1oe6Qao5",
  "key23": "3wBe8YrCiG4yXdBqkgSm8dYTW3cjsSTVAdPEzVbvDaXEpF5nkVXdnndGaBiBtoFZMK7M5kHAkZJTk4UTFEv36sbA",
  "key24": "ysqGYUQv22UwNQLAFhQBeg87QSJqJpngXaLfJzRjv12oRgz2VvHq7Vwdj4DE9ThDsxc9Mti69f78B83QjotqnRX",
  "key25": "3W9xkk65Qao35mHGG5zQqQxdXodaTubmzy6rL3zKjk5baq1Ump59uNpexitparCHbhiNfPf3Z4CngmGGTsnza2KH",
  "key26": "64gUZ6wWCZchQ4qMiMSefzSP19h3DJwnrvxnJLxB2DKRApZF4qBBvEnoPBUdoqbc7b69t6Ugu6fjmfewyUNrykuh",
  "key27": "4hJHuBHYtjjhJktcfPLxbt2G7GfFd8qKK3kmi6DtxbgbbHuiiDVcvYTQppNGniFDKTiCciu5ExMr1KSYhkk3QFRX",
  "key28": "3Pb9s6sXAxJpMVvyMfki8qL4b3n1NYUnxkZNoPyu7dmm45oZBtk1Ui1pN11Ax4FsGXpb9DqzzdZz8obWhC6bMqY9",
  "key29": "5Dyd3kQS4RwaMKQ2kUF1DbyGtwZgFWTfRWKw9r5USz4CZR2Kp1xZXy2wtK9TUeuwm59RGum9owpHRZErbj4F1CuC",
  "key30": "27vHRaAkg9mjVYRYgNSFoLeSfGMpsGaPFaqs2yhmZdNubmZ7b1zvP7LipC9SsmRCRVGWkte7wCE7s2mVQvDEN76L",
  "key31": "4regDnpoG2gU33L1D1FrNb3pegwAo87VG8Kx3vSH9njyF2mxtN7gz7dBPGbE5RLn7Vg4dAeVLzkaiqbvptGGQ7Wq",
  "key32": "3Xy7MuxWyvW86gnxvZQTGRkcbkW4zTgTJNi6pXJoNCHxeHNid1JJBGX58YEZpUe16y8WFSkHQiPzk8FKgzwaGpDq",
  "key33": "5TRM3r374n8cdZWwKv5aMxi5dyrsdefAiq56FNaeG5cXbCwqjvGVhnRUMB5tD8En7TwPdT9xBesX5hRTLupJeMPz",
  "key34": "272RJGF97o7adGrNamb8PSWH4dzfyh2z9qiFNU3EqR76YvmRr1oCioZf3wFXMewKmHAzR9XLqRCGQnrnKY9FEkjr",
  "key35": "3hV2UWtUinEzqNiAxHvUWgurQrve1MgGY42PmPcMnwJ6LmqH9nkFbaUgALB6YGDYyA9jmmSCuszhLnEMfihcwWHf",
  "key36": "3KwtSLoTrjYLGZxxTPrGMcNbso7b2dEFCnc96gQfeqd8qnjmraTVxoHMFz7rrvkoGco8jgFcUZMS2YVH8KCGWFdJ",
  "key37": "4x3idj3iEYoD9r48w88XTJNMFB5g2ChPWLY3KxiPqnfBP9cmwksNoZY7esz3US6HA4Jgn465RotBcrTtCkat9wYV"
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
