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
    "5yTgJKUbyWsvpGQ33jNeUz8cVqMkbEAK9KoYvMUDuRRivPtz9xtjuxJQHBkCRRUicxe4ZWd8uQ6RmJiEMzTWBCdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQjcTuYCc5kpoHvzB7Gw1CWGV1sBhdrnEymSeCPsHp3cAJyeKzPSMXVyRi6tQz1dE8yAQ8Bkskxs6c9GnHJggXh",
  "key1": "2vjgx8wLYEKjSTYXmBVB2wBFLRC7j1726Pabne4kkiXDFR1HrySJrfc4Q8qaJacBkJ7CYLFaQe6Rd7MNQVAqS67D",
  "key2": "hSNBr9AqupEYj5DY5ToXadoJMuYmtyxtj1X3TBa3y7a4ig9GziEPS2swooFzqduFg9TFPe5EahwvFYyJcJy8D9R",
  "key3": "5WpjDmveaQFwTDxRaY9MGhVftYwBfPLqYBBeLL9jx4MraK1qQfjJguj7yvpAoyqWLwge8d6Pno1zyW5eZhqx3Shs",
  "key4": "2iikCjHgqkLNav5Yexjn4PYETmNMtbAeo7dk8oBaCqGuT4tdMprVrJpG5Sr7eK5c7MudcKjgqiDCg4Gxi5UMGgJg",
  "key5": "3aKin3xjSDsybDYhEBRwMSSkVqUgvmJuNjc4Sf6RKAyDirR56SQKtsNiN5aM4GTbMLUCukRDTR3Eg4rQqmmXRDdz",
  "key6": "2k2NgAfwxSDfBSN32KF5uT6nnRHz9N6YyFr65JYf9ZewipCZn68yhjykJcSWEjxzhDSdcvWgkGSE2SERPXRbWgF4",
  "key7": "4u3RYcHcR2LHXc9azw9jUrXMFsGK6PeKL4gD17jfS6fjaRYdmd29VV5zU4bKQ9QXUe14t587yRP7pDBmuRY1GKeo",
  "key8": "44RatZLeCPQihLJMfoj35Qqz7pJr4MpUdLJEjYfbxSf8iNGERsW22Qv9wiexdvdzz7Zx8RDLJ73Rgpsa3C6KrFqQ",
  "key9": "ve95APaJhZ8R3BdfGJQL4dfYzVqGequL4v52KkAGyFUw5D3DX6pgFBnKXcWkbZprd2FJx9ifkttf5aCMojbdUFX",
  "key10": "LRubwm4LmCRSo4J9qLHi6hwgNXWy5mkCewZSDMctfdEgNim13nzU6XDCtyEMNUoNksQ55sA7H9xnTFFuqbaQBNP",
  "key11": "3jSSn3L6vExN3WYEXsB1JyuBW31guYP2oZCvGvxM9N3opmyZUQwuEUnXWqxhKZaBQyRUd8CrtrpNCd3svVFPDwkX",
  "key12": "UjLSVqMdHKvdFY7fK75bL1XhKQpkwAkNzeB3CrLW5Go3uFpKnHZmmt3hamHXvWeoQfT8j5x4FRgaX2FuuM5p75M",
  "key13": "4ks4jPs5WgYZhycR4SbwwYufsAoVHY7ik6ugiLwotrm1qYffLTVrB6fZoc4PDgnCdquRxY8gVL971f1ZwX97NttE",
  "key14": "zGgPDL1dUL3YSVTmkAaW4SpTfKPNcJxMujuGKGzUQgPm6Yjbko19JhRTZwzFosZj3PcmJR2MF5Uy6jwND4DM331",
  "key15": "65vx4GzMghJxbsLX8vSkBLfwDn2ZLg8yaEZnW6atAb5ysKT2YHixCaAFu2Ny3Gt1cmFqAWMjtuGHpksjLmLskjDu",
  "key16": "AjCby6U141mGoYhJstECyqFz9ng7K8WfdSYx1hHQoiFCJJRvqsQNgy9vyCuzNd7m5rXJSuJCbE1KeAyjpY31xWk",
  "key17": "2H3AiJp9qN5n1iV6BpVdwrhoEi6hrr1fbsaiLu5oDLkW8sB4X8ZHCm6Hy8u3DSaLFFi5s2HGWD9Rg5AXxufGfUvR",
  "key18": "4XuUM6p5YdXPMUKGQ53x7kthueyPGDw4j7mYnXg22QYhmUCu4GPgQaPQRh7DZaaR43UUJwg1Bqe8hrnhk77ivLZu",
  "key19": "sdQPNK3h9mXYyadXc5G6nUn2NDTymxqecmmwgC8bRq55PiqnD2Qc8mc4uNAcsPLJXqzMLg6hWZ8RSUrV7qMRxnL",
  "key20": "3HH3iVQRjxRchmdzQ7Y8Jez7iPz633dhqjSEMdKQ4sUc5VBoNGshcCbpfKkjPJjHRPgs6uSK2C6uPgvcJjEVnVAy",
  "key21": "5Wn3d7L23qpCRC2Y7Lg8rmvUdTZovZRmZcYbcW8rpeywQsPY69FD7VEAyaV4qrC2KGbVC5XYTi79JAmdbbJb3gnK",
  "key22": "4MFpseKr6HfKkffck3vUCa8mR5WjsW4LV2dmJja82mdKaf7h45z9Vx9rLKxmHmaPRNQCR95iW9YpcJwUwX4FKRaz",
  "key23": "m9Uw2PTDcTQfexkAnq3uxLBFwZ3BZJCC7VL7xPEBgj9Npo7HZdS6HqU9r6P1S6n2kfU5mhJvuNJR97mN9gRkDNE",
  "key24": "gTuKVMbGiwhQqeocezRVe457XyMMpAzCvDXanmpGW2xUicFjwACNEonm5tgjfZr3ySNntXkJ8apHoVpboZ5tMMa",
  "key25": "wYL9PbBYHgWxHKJZiDaujr8MsR24Ewt6QhKo5McnayBg8niMurqxTmuMHve9a2WrbbJrCCLTbPsT1zJzDESEMsf",
  "key26": "Hz55MnyX5fHRsUgkzX1yvWBRySkNYTvhWTgH57sK6EokP8x3VbeevASk6vVjCmW18Z61VGrYVJm4e6cq19xVfZE",
  "key27": "ehT9avJsCUxuymzVcDf36zbRTFi8ADydaSy5MHQo2ctjY4qo82RQTsJkzT7SvckJYRAgnDWLyK66GYzdMqDytY7",
  "key28": "5j3XKaSQ2KGdKeKpDS9Sq1sgVpbV4XcpF33RySYSpViXn2tTVGEioXGV69eRa4Cd2YwqALXotkMJDcxffwk3tCyZ",
  "key29": "kNSF9VNwLCdSxCJmiFqGjGVrqmwr7FeSuq9DxYx8Fw4qZ5SzRKc8VsHU8NxDgTtisL6k2bNjamjAZ67vbzXnwYm",
  "key30": "363fCPnyMvrYakArxJG8bvdS9v6gw5uFqmBpAWJxVGVJEem6C7jRymSiK53uKUxHbQtocjo7QVPMFVSLw96UGCaW",
  "key31": "3u5Nm6AsnWXzxQGq9hEGk3s6z6VDGqGkScc4tky1LaXk6qn6EWo6oL1cDRq1D2ieNr8oM6gtQCwibKRMrsb3yDsM",
  "key32": "2C6KsM9UpBRecz9qgTmffXCDUYuVYSjWce1yzvcKjBopWeWgPiM8L7t6mwXeNHy5yiSHRr5ePic33QtPnpQmewXP",
  "key33": "iBfzA34s2ZSR5Ppw8XBDUc8NMXqF3rvB1wcZNLHVecXgobpF9GwJAefvGUt9L51b3UBCoCxXvPYo7EW4jsMksB6",
  "key34": "4xTn2CtDJeZ4P6x2Xf6CXNKx7XvCezgse6XYgfnNaC9jogR656GYGSkb8W2Etao9AnUx4N83oVca1Wa55VzNv5GH",
  "key35": "52x94TnJvZEHb5o2W2QfLs9PHxR8EZ7MkBmdvHJ3xaRnwBxqQKoNxSKYmN6atRFavakmcuWrzCD8ouVu5vY5XvXD",
  "key36": "5Ad7XiX5WzoFiA9HPAiuoMiZk87NhQnh8ai8ff6zu8LAjRbL8nKzDXp2njotBRVXGcJuDYuhBm4tJ5kXs9Cb8Ssy",
  "key37": "3DeYyLyFDNQwTzEmVaazC9tHKGRF7vfLsj8KJzRF9sCejaqS3cWPFbcK2YbgpGTpkbgNLTwietjxj5G3qHnyeaYH",
  "key38": "2ssyWZPznY8BMx3kxxTNKT6F1wAZ4hgNgGuHH6kRThLTBLzCSjq1o9TswEiNxoybEpC9zVdwXp6eeP3BKoGhvjay",
  "key39": "4LdS54N87HDTwyV9J8d4H31iXD9cZ3EmsGYf6746JQaaGnBMZtBCicvpKagWsjZ8KKVyEgejcHA555A9BMkGYRdu",
  "key40": "oodY1ZHdEfjkhgu4JmwVPEHipDQQ2gUtzRE17VS6y8BGLTuacrDFHdWRB6ys8Z8GvL517WURLMsKdKnuGtPjYym",
  "key41": "2yYkRMAYCfomM8XMN6ueqfkp79xMdNg44gbpqcJYC5iaooDFLTPe8WaJU6VnNAAjLxSnXf3JTerVSn3KdMmLjyke",
  "key42": "3EUWKGZPDcNeifPzw38zsYtWvymR3YoNiVtUniNZFjzAWqo95mNA6m433Bjno8DVZ748siBmQcWW8rVWqLWonuFn",
  "key43": "5drmthjUMrm8HTP2FYZfWqM9ve1MxAAzGMZCiLYhxgpvKCvqDmDmXkrxZkqkuKfdTJ7Z23hiT53CBTkb87C4htiH",
  "key44": "3QyM9ibutkRpAoddKDp14JFaD97DXJkZe6F4Umq5LiQ83QYTLumLrA4mqUzrFBwqMXge6uZTzm2hypxgQiidG6Bs",
  "key45": "xFRo8zEjATTgXCW2ZPtYoZ2GWgCTCNo2gAiCgpEfXwJ6LsjHFhNEuE27RNY5Ack1Ykepj2DGkhqBkkGH9ZeRcmz",
  "key46": "2z2iV1RYLBfgc53Zjpw1SLaqtptupHy7XUkUshLZ533sRA7t6LQPxnZHZR8kyEhcecj43LpHwoMuZJDEyf2NZsoZ"
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
