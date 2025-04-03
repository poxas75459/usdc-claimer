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
    "FYU6QK3mPr1soa73e5s3ruvfHGXJnHFgQSATbRm5pXiRxv9qqigd192qMcmk9HtN2YFB7kXUcsLe1WopjM42ELa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSK3vXGDBwGscKX4Fy1ooVqbG6MNPTQKQC3sHHzpcy9BKXeMisK6U7F88jt11nHuepMeAgM4WLUFAkBTMJgLo8H",
  "key1": "2hChHRS43SvjssZ5AMzMfs57zVzY1aicDXqsBcTrgXe1kP5Bo2HeQBxQUzWjw8YxZXoKhSwuCuBg4EP8mNiVj74n",
  "key2": "5r8zM8AZ6Lf1gceMeGWf37NAcQXtczkXFqYQUVQEYSXYWpaQRQVsoJkapYE7nejZ3bfQdDX94yLpojSQ7fWU6YQ1",
  "key3": "4xyekwdqrHPkauvfvkbjcPot7hARuxDsQHvkiyyor61PebrnSj62SYDBsgSFEGqU5DU2eBHRnieSe6f7tcpcmycj",
  "key4": "H5M4AjS7NMxM1w6tiZHpJ9KgeeMe8xEZtJmcnkWraRqbVNJUZGWJyRJSRm1DuH6ywXkqhmAgizGaHEqq1m7b6dW",
  "key5": "128nHdQv7aUcS4F3x6jy8zKrSWwJRQf9kHq41JAFpTpaGXGFYZAxKhbZGhTfShEF7DrVWhZgddnaGbgLAjQvvXLa",
  "key6": "S2YsYpGW7C1DHuXQRKA9H49zknVKCBjWG62L1RUgJ9RZnvC7dsbxpeikjEPx7n7Y8zgTws9NDGtdi97Fm6GkB68",
  "key7": "2KX1kA9Nijem3kbzCPogwB9Dvi5ggRT2E1R7PkBGxaSR4tFvu1WoxLVEXHe7yvPZQWuCgcsRZKgFjquLw254xDDR",
  "key8": "4EAMAFmLq3CzNwpv4SPjdXnGjyhJhFDQtjfFGwEqPogVpTdqRkwXevtyCSSEVmoWKQTmWhpmk8Fj1KnTVnraaeeG",
  "key9": "ot8f1NV8HwukazAsHKwhNJTQujZeck4hM7FAQbchSDGz5d1bPmfZsgGBzd8e6Xtv7MoQ9b7iNNFtCjETn1xy9Ju",
  "key10": "36t5zAqNkQtXzdZmduDTVRrQAuwWbA88k5FsTexpVyHTNShgxKY8Gr1zFkEbeQgqhRUpJj5rpt5tw5U39rM4mhhY",
  "key11": "23g2j4XsLK9J38aStGJ26bouYZpYTKc4Z3ssuQixssrtQ45ZR4JB5rqP6nbksBzc8vU38oegz1n6zzHd6zG8ehSK",
  "key12": "AJA7yYg8J76dfQ6tkUWKUAESFRyPKjhEMYpfh6bzcUiK5DrY6nPFBPYE5AM3Lr3roYZBojtUVwKbmcdgFMkx3Nh",
  "key13": "3FNjrTMeVTRvnn9zgJ4aEBNjkdccWeCNozWiMN63EFffxND35RDiqXspmMMHMd4quMZvaUDPCMJmoFqLhexgXHpg",
  "key14": "cgxMgdEhgBtKsgkasmkw47h2MnrMSjTEqHnqP7N9KAFLnCd9UrZdb9qhLtqkFxKtjXMXPCEJcsMwTSSvJBQ3KGg",
  "key15": "4GTgahNNt2fgMhYgKTg4kVSfTuMFyNww18XYunozn87cn2UHWQnXJg3zBomHLdRmVkvZb4uaNtGVhVWDBB3QYEaH",
  "key16": "4zmNmn8UKDNH12uVTRj1twjGiBC5yaiuwxvdFWMQowh7FQNv4My9XdPZuSv9rwf3eGHzo5SG6qHGrKyWEF7xv9LY",
  "key17": "3o1CtTdCyd9JcK5vjeA1xcTGCuYnVx8EXqvp2P9NQ9Q47cQTDGVK72vrZc47GuN33W3w9BhPV4qDFyzhNneBUKY1",
  "key18": "5bCiXtwDrrMrT3NsV8gjiXnFqojb2YWv5BJwq6VHozdWMhvUinRUgEaLf2YUfFEY3CfR1Sj7XEx61GVVrFKAJfPK",
  "key19": "3f9egzuLcDoCKVdzvpTmztb4eJZ75Wf4su2SheyqydA6nCB71vdJ5T5okU4HnXMtp33i1z6YJ73YwH6yPVxqhoYQ",
  "key20": "4yx7d4TojreTQhXVSsSC4UT6qrM7RdL1qkYusCCPvqDuiHZMMQopc7BTgs7kkgyuwab1tjgPnYJza98FqpwBYKpn",
  "key21": "3X3FV1vyneUo5vzArxhoTwRiEP7xE9tAy2Gea686wtkBR1TVr5549iiM5LSdn7NF2ZjTjpREdqUUNyqVgNhvqz4F",
  "key22": "4uh5CsbcHEmTCyjXsrNg1vyiNwRBYG7FEUGCfkyMZUscVbgRchEf3WgBSFhYG1V9AHjwuzV5hp58mgkmvJ47YNp6",
  "key23": "4Qd4niyGfm6xs6yup2CW96FQ8Cw5ywA19rqQowKPXSCWJ9Kdh1ccCtPxjUsKU1Bo825qX7upZkhSBLu3XfanvAgg",
  "key24": "5ECnH7aznGp2tYSymAMWwcJj7SZm8kPZ5VBZxLuSLoTDca5dUc8xwinvRg1eivYQNX3JnPzGtn35phuTJ5j4KDNW",
  "key25": "5EE2Pq73gTAvY1ixmuPA7k6BFbyKhEaMKJgc9dwar2avvz9PBrit891MPLR5G94MEXSXmZtn5zzMcpeJ8ru95fCy",
  "key26": "4xJUYmq71iyrNSET8nPksEGD6UEjo2fB6RPNHJ773H2w4SkCMACRp9QHH1PJkeSR5wy7uFP8QHhCCbkFvX98zFBt",
  "key27": "2WyqkJKayxCRV1T5KAUqw67Hh8SPPL29kaKNzoV9mxSj48TrVivzU6o2nTCHYFW9xnHrwYTBR9FzWCjQ29jTACn3",
  "key28": "49cwDhFMvpjiNeSS7w1bAku6au5tiWSDHgKeQyyeVfQMnraDWX9gr1Ka9T7WYixzjE8giAdEaFYpgSBNLXAPaF96",
  "key29": "43ZJWBdUAHAuAEAogQsTZNg4qik8qjmsd3tvUkpLeh8RqyFXaMBkGYcze2QHi8oP1p1eYdZd9VE3hpwh48MfjvfL",
  "key30": "2f5bHB3H7gm2vnt2G6potEZFWeRVZUDPQJWwL1iexekEEpGD2xziMbvFVRQLniM7N9CRcPpJjbsCd7X4nGY8kYpA"
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
