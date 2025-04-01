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
    "2kPmEodyisCwt4ojYmKH7NoK5xPRfUUw5eYd9z1mJRBkGYnkR8NdK7fvy1wEQR9J9WCTHgWNf2qqXNaZeZqG86qA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55rzkLP5PcJPEsDVJZkkiH9pvniGyaWidbtSPcqHntAEcqjXEavZN75x1Y55fGJm6ky1LC9iJdyL9C5Zz9Svc6pE",
  "key1": "PK4rrmogCYtESDTcN2ax74EsVrf8TdyRdP7cPtozwDYMiurJ5gxuRZE3nbp3G57Kd5gTyDY7u7G6T3FvAQ8LzSm",
  "key2": "2AwWk6NqNVyF3rXQQgu4rtfaghUudZjCR7KPKfKfLn17dbzejzH1gLkG4if5x1EmhRkyXyswM36sfQGdVLhTR2DN",
  "key3": "4yuws4Yj7jXWonUxicdatVKsFki6MAudCGPh2xEDUcgAkMH9CCMHzUBcAc21CvA7mj79z5Vx3cpq54cahprjD5W6",
  "key4": "5t2XtwPsFQoirALWVbi2gnW4r7ofrqCjiXdD5Hk5VqifvyX7za83EHgtU7f7yHZEaoYUSt9e7jN5yHa5572w9u2V",
  "key5": "2qXMs3jf2QVQvrLy6RLdNRmH4BhkJo6F6VrGfWjE3DPDfVKzz1feVgkwfGUTDmCr5TmTyqQWkSj6biorSMX3mUJc",
  "key6": "LEePjcPZWJXbS4p8xthBvPGkhk24Rcbpx2kj9TyygJefK8h7MHceD5SCnFi7WG3SYwYnJzA1JEzjaHCEQddEnCh",
  "key7": "4Yxj1BVTSpzcuobeLHzhdcwv7wVQdKo6PmGug4JMnCmVfsUpRcRymUQDvk6eSpu4SLzU9kHVfFGT3kgprwaAewgf",
  "key8": "3vM9kJojcseN9Ya6ikvamdczfeBP9DKEWyA3a4EShinkNCAb9vaXXSsdFrabvoWpN7Tp5jH5jPRonxJ84CMMZ69w",
  "key9": "2McC9NAzKakdacT8kXXgpzy8GcyWDFQq5nw2wmfsq4YVymX59H9jjhC6hciJHeVDcFJVJLiBHT8Ck52X6NWSdWh1",
  "key10": "3J9RgKgCjEZACS49fAQsC2o4nEpry3Czo5dFWkj38w7kyRsiiMRK7TMAgZXLunuC5cDcZvaNNc3b26YS8DuvDm8q",
  "key11": "UirBtUewLLC4DAW9Prg7aLW6FBg47oMNZdnK5EykpaaTP78ycGKcbFDYEnUfwibrbWKfkAwzkc1aZ55WDT7JfZj",
  "key12": "5enao4neefTPfQU4srww4ywRkX87NWravy6VUVLyqUAJvX6fbTqk2Te2fmnDjFyKtPFgCyMSGJdTksfn3fYnyzqm",
  "key13": "2tqEBZ3UJqBxg3xCYawgYx7Fh5NyhTsCn49xZJfGmU7XUMzFxsx9aKiKHpEbWX6ta1n5QTPYpUCYvCLZH9KGmQAh",
  "key14": "1FbJwDjhELYt36QkZHhmQpkfmYkyHQ1ZNPFK556mGDf9vuU7ptqPDqxFkXfCjGE2D12ZUwQZ7qt5CN5Vf4J89Tn",
  "key15": "2ExJeDFDFS7ohSzf5FVAkF2brprxGvvuaE6ac9zf932mgmcqXoqRGvKyoThH3RKdVEVt3WxhNMfJRZ9kFiDqJ5Gi",
  "key16": "W3WUmW9kSjXFTHm9UaYFqq2uMiBHcPSh3YqGfFzt8fzd6psgR8Q4DHS9b72g1y2h9h6XUQeoqY6w5Cd7sxnZ8MW",
  "key17": "5Z3LqhoJMAzh4uijLnbuFA3Ubvyq6wgEsGqV56X1JhV162YCgM9P9Ygepu4hfBSakj5VXKpTvF3Le7YGXHHTcywr",
  "key18": "mM3XLBmGEQxMtaPDQPmdozyfcv9i2WbDYnkX4TfsCZkEf1hom63DuQuDeCgZVcNLM9ghJANU2TWnWwGrhjR9Dsi",
  "key19": "4WMEpsnBtxbCuyQ82FfX8zk1jkUFGT4AdntSefKQGSeQmvw16s3xdYCMh5HxDKYykCV5bX8qeV61P4RTKAefy15j",
  "key20": "55a7fW7Bec2UvqPYEPAs9cJ5HAfKQkApJLipaHYJhybF68JXZK2irBAPQBXadAMUVxZgqy9qkAgxQndn7Ehp6nDD",
  "key21": "4jeUm5bSXMuGTVTYfAUQkPGpT2aBvLuwbXm373Wmhsu6ouHughfCqLePG6SYhYgESuSx934iT7sAzEtyirVPPoU4",
  "key22": "4qa2EJGTkTKJVmwA1GMdnobJeTuhWD2VgyU77kGsvcbmre5YrzZNqFf6ixzDhwfz8wtCPUtWPnTArg5LCQJ95MJB",
  "key23": "YW5ZhizpR8wqfHgkST7UcP4Tqo9yWhFGrfvj37A6Kd7un2VFivEpDLPaM9XkMuXmZcjmif29UUsCz8QYmCEjTxC",
  "key24": "Gb8Z1RTpHR9gVt6in69oDbiQXCDmR3CfnCCYYC9mYD2HrZ2ZHNmWpeSbesfyWB1ZcZCkyg1H1eiuYPFse8vPwWf",
  "key25": "3bgystUsaNs7PTBjhYFa3qokBmUeHF8SXEk3sEhjsCKYJ8mSqKZ34dq6bGRgYrpHadWQGVyF7fMnKXapneMUsxMp",
  "key26": "2o8dcufmciZsBHMBYxFi53qnquw3P6jC3DyW5NxtNvZHxXHufdELBZLwqippGGDuFDhC86vg8JPckg85s7nkL7yZ",
  "key27": "5vpGp6wGdSVMgsKny1h3F9RScxZdJZvtDubUQRudJBLDosnPy2q9aG1QJVNP6WNyTXRVL1P4KTsKdqmbcetA2wcy",
  "key28": "55oaauMZrAKaLAvsnHQGRk3H3PkCWMjJ9XQBF5iKcrAvxEh7nZWw1mvXj7TKH7KcFVUpdtC4skK8pKVUoJp79kpM",
  "key29": "jkv1EA1csVY5JT7GW4VegUerCiqGexjbDCrFKk4V6QVw7CLj4rfYxUhoSyw42KsveNBpRBptG3K73cC1QmBi9Hw",
  "key30": "5npUgzzZWELttWMPYxxnZGiFPF2J7ryHrU7srqrHnCAGRB2R3DXqQ4Du6iAF3DiuHNqbx5aKcnCnzeyyrETmtt1h",
  "key31": "2mYnVA1sLiDDW3gTrgpaGUKbgLsHPNDZrUFqra5Dc13vs2pdGeMQrV34eyX2BkMY7E3dagRDifva2Kq1ZsYShdVh",
  "key32": "22712FZt1mVt1WrKHFwvtexqZGhkFJLAGXw6KxD5tetvXiLKMyHFNvZN5fNvxfyjwHqTTkgHnoD2Z5xW4RMYQjAJ",
  "key33": "3hVWrskyE4jZh4W5XAj9uqpBgL1ywFMBXFFLZYT82N9q4gGEFUkupJX3fd3RSK3MtERMpsAHRy8YhjP5b8EzzSSV",
  "key34": "2sJA51M9zjXwuMujcTToCUBWLgwkW9bSYcYSqE7eHRV6T6wSL793ud15MK5mahnd7kSXFd9GW3qD1HMzwubUz2ej",
  "key35": "5F2rShLkxW45jU5DeE21iiHxPep1USG1kAbNVwSHPJtdQep8kfDCbfNiqWk6JC4bPKw43fZo8zBbmruiMboTZgnz",
  "key36": "5rp9AKgmA8H1wHKoaVsBEmggNwJEbH3B7zj6PK8X744n385kJedMgzWt1Sdni2QX2tnzMWFVPwQ4rCShDM7NDxya",
  "key37": "2SJgA7zdJgPTXWdcagU6GjCEXLm9jXXc31cRWMhpCSue2LBNX9wusX8tKJSHK1DHCPg1HeqpaJLZ6gpC8FtaJhop",
  "key38": "4fJwsggcxhNKf5N4XjoQVWgMjhLTg1t7btjgvMyhTkny24wnCkdgHpqhSHNBGvNxLGtYUuYPCPgKNF3WjqgAUoQh",
  "key39": "4kB7MWvTV1nKVu6APvAZRicnAqqEs3CxfjMip8qhqyn5j9JYfTVoT8CzzUirKRhfPyDaFnyAHh3oohLiN7rqXbVh",
  "key40": "4NAwPqitGos8grUex8Kbnkxq1BuSQAZa8RQetPD5615fz1a421BvSQw3bmU2DsLjG2Rd8x4WGsoExnnGEJrZJggc",
  "key41": "2sz1aMdnoRQkhDX858gWUS5V8JfDHXpTVixZhAP5i9w271914xHV9NMznun9DfZYFnbtkeaTjZHmbVSmy7AULDTe",
  "key42": "3Q9FBKu2usiQv3x3ZR8D5zHJmv1uGfj3zBtzuadZmSzhLbppgp9qaNoMF7rizESzyF1Zd5ube4iewtk1abrnxKAM",
  "key43": "3kDbLtZqDyiSL1iQHexRkBrZDugH4noBWq9PmkeFQxUVNLEv4M3867AYzbP75EexvSEnN6JYUbT8jA4y2RWbGHHX"
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
