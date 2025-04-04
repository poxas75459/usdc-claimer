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
    "34kMo55JkFMqHFLMbXvCNJNhkpaJLtUTr6bk76mggk841mJihXVjFmMttzVJ4Gon29yAHh1v1Dn5MA1rKjuorMN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "325zjG2bLeuM6CxUCNXC5wDonkpSZKJb2jtQWTujBAqjk47jhjqtFFDbdYxsPu1VQRgQ6yd4KH5LwRE2tyXmVij",
  "key1": "rTVjfey3jhoR158TphvaGhULTMg4uHED9vJsVfCxR2g6oJMuKwis6finxU85jr1DGDoiBi5rR8ck3PrHid2zEfm",
  "key2": "2Yw7VLrRosRWv3DMzhPGY2cNtcZKPPd66NB7UzUMytVkWTz1qUjEDM2xvKCC9kGdQ5S9XMj1Q1yPugYzim5vHJGC",
  "key3": "Mw2GcUwmBx1KpcVxQZ3V2rvQkx9JyjqUZ9uXZJnQDAmKcwL1uwuMwK81TmmVcTkbB2DeMQ854v6pY9KLPEF1y5e",
  "key4": "64WCJJpEdN55EuAnf6xbeXzEErv465JLPoyPTzwxbZoz2ESaoXA9dnxGg1uGE4ZCyfbSos9dAdNcBCLiP3FJYR6G",
  "key5": "4R5yPSd2MTKiEjx3wzpE6Y8yoinWoCAkY6aZJtvk4nooi5U8P1P5arwVokfrHdjAMoyG96Rk34N5tEwo4Z9jgF4U",
  "key6": "3jDXJZnDgAoNqRfGJJ7xKCoZ7Qc3Hpw8cH39TWUyqToG59Cbi1aBErPTHNApioYx7KQCPQci9XgvJLWDBNnZYvc",
  "key7": "sHqnmAgDawhBjbgBdN8WdbFXxNSxZLyk6yMvreBZs1kDBNvfoGKMjYXdQeapLBZJD9dGGtfEXscNx4tat1hspuo",
  "key8": "2cmGuLApL7diKU5WBDpvLUeJiueVqk7oWmfTrKzEr2fj1SNJCvWhDj2M9iDmudk4CodmWEDBezw3DQoWdRmbU9zt",
  "key9": "5xNPvQmtVBce1hrMhdfhz92je2LEWbZBFqKMjZYszxRvhEcEeHuD3AZZUyPGHVZkLEDUNYdFubTeqddGrCXQ4XWi",
  "key10": "3tXtMYA1MC5mvo74UR4MSHmvMGVQiARBbMBBcaXRJg8gqjSUmTQ9oLpB5TckA4fkt1NQRUCGuxJDogKkCup1MBfx",
  "key11": "5uvXNuhv3QUsPBx9FFK72hycY4kzEuV7N1moHe6sjXHCK6JLGpVbm28ML4q8i6ggsWiMdNCcZNcSB5c6eSjrw1Ad",
  "key12": "4BLR8w54REKE4kk1oDyQa61zsg3ex5mFD3azJoV72aqvDLFztHUwYVte9RYTDzokZfn6Gx5tLzTPJZSMpbGRQrCB",
  "key13": "4KQbGCuWAs95KsW6oeB2fsHQu1SFtAXEiqzxkfXdDdGFXVbJUfUu5fvY7FKkXEvx726uV1VaGzNxsPuD393iQVxV",
  "key14": "5d1VZES9m1p6kcnwEfrJFNrohJtg8ZsHggZiPNr4VyGeFfRQP3yapWBFgxE61RzcYuJYBfh6DL2pHCLa6U5UsyLE",
  "key15": "5H5kC2UDYxE52mxXFTymd6esk8nsQ3FJF7WFf5zQL1PV7vs51xHiUZzhhFiLmqz8d676iZyhZAPowY2TqXgTdFZ1",
  "key16": "3owCYLtgDS6hppk4c9gJH7yRpCxt1AThtCNe8YGiWncKc5UHudFVbj7copiMnuwCjqzaY2buTLzHpxF4U8TCWDrD",
  "key17": "4tgfCwyqUM77rr1YQva3aon9wtYpF9vvSL5rzFpKhwEixNhmjJBTjtyvZ3U9LJY9jF8fXnDgzGMwQdFtGEC8F5x3",
  "key18": "482Je6P2Et1fWTm7HwrSLZyu4GoCtKesUmpKY6EKhcyQajXVZZLBRT2V9zbT7zCNTdLuTaM821qJ4MDdxuwRfT7g",
  "key19": "3EwNLUjLxG2tTUiURrnPtahNR53whptyydLVYze6MZaFs2EH8ydPyfy1CgrhKhv2CZcZ4LjSXXAxiHvxBFTG4tLo",
  "key20": "2d9rQieXq1fKixnuVLKvGDeKqBGGLHmNYJ3ai5v43T1FRgXjY8aotdg6vmLV5uzAwEHVMvNZu2kCd84odV7udHiW",
  "key21": "NcxpVZR9SN7JadKRjQQXHNanh4M2ewMyZtJ85ZBLKVoixPdHhWPFJFu9SAHn8iMWQhj9o7vNm2ZJpJpEwE7WAWc",
  "key22": "4TDG7KKfJiYpkXXus26dymwT1KtZextB3kiCiY9GLr3t5G55REE1GdVz7Bo5aijK5hj5vfzLfsKTkvGNxuPTMQJn",
  "key23": "2ezvTG5z2BJNd4dVVFUbVQf2PB6R3kr8pZ5yVuqz6A8chowrdKaxj5FCV1FK88w3cdNgsMN7douYHdiPffk1eLQ9",
  "key24": "JmCyy2Z5KUGMgMsSRUK9iibdAxcVdSQX8rhu8DrUZe1msXu2M4Vz1S5u1upMSwPqNGCQT8CKnX5eY3d1WihffLJ",
  "key25": "4RHk7j68H2jmu2ENAneerJJ1PD2DAr5hATm4Zo8Cn7svzmktgwHBSK6cPqCHDsyCKyFescvA3VQskJQm4T7aYVLj",
  "key26": "3N1aTt38stwyACbWDB8C9uwtHMt5YVrhQtXc7HNvqR2b2tin5WgMyDUfScAzwj4QB4FVAb31nYEvrzu1cDxUbBdG",
  "key27": "3g4wwenaw6iZnPnjZPJAxT8zsNkGp63s7ja38yzrUBLpkv2pdpZ68u9mFczjWNFE6Fokz3PkNc2TL6U9Sf3fqeUD",
  "key28": "2bC4bPUhttVZCwY9k32XDnAiSd2rkKMPTfpZ2LxnextrDzdCL3YDhayZ6vC9GHpG91vPqDEtc8YBSdFGarVE9814",
  "key29": "3hPNiAKxPLYtdNw8etEA4mvGyoQTuUunkhd61RqEED54S2Y9eBhVjRG1VxiXdaumDoq1EnUj9NVbjMdFwhH2rPo4",
  "key30": "3vW9rjMTf3yPjdGjbiijXkhjKfU9bzzkTgwWPdsN7Zeo4YXfjtbCdjwZBVgmtKFdrXaiduKcEuvMzXq4Uxvma3ca",
  "key31": "3nopYXWH975KFiaeWyMQsk7xtGAotqXP8fd62eQVS3WTspfd2Xux5ddXwmeWvSJ9cqU17sek5hLfLJVKy9aWsfyJ"
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
