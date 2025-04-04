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
    "bzMHYhM9gHBDqvSnN79xumoEmnAmtP6Ah5ir6pJyjjr6QNqWwrTGVyNaKJbj6Sk8CNrNk3EugLL6CqSc1Gm3h8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5gAgHBR79292kzhR7JDXmzmGVLAiPSgYpjip5jWgYybwHL2baz2RFgjCWztamvjwQQ5tJRi5QVYg1BphuJTXcP",
  "key1": "2UxWUeut2bt5fdi2q6AeGNeEd2MJJhWvWzMtt7BvAVdSTkasRPn2VGkPwT7R9xwPBdMmeMRCzL8gM25twtf5GFxg",
  "key2": "4XN6c22DMopits5Vny8yzKJRm5c6MCRcM33Tfm2Bc3bmeUFQgtNPHM3A5L1YyRfZsD8Z6YUnYMwRXHxCgzAtnWQj",
  "key3": "42nisnRSpFy9Udus92PwSYAjqveE8UMDZSmYxEai5nvULhhvzMjEf4fsTqMqJqSTcxY6pRBXAju7D1y9hBSmhDoi",
  "key4": "444mi8DSDxgbGUGXZuFYpxn5qT4NXvGJGHfbsxSE14HvRgTezRGHxtuMzkrkc5yg4zErriBnMvm1CGgBLf7NfQjP",
  "key5": "5iMRwooLigQ5jjUPXDcShJ23g5uGpJtSZwSRGyxSCFhZMSK6twBoKks2sssFRgtKjhbtDPAPm4Nhz6WhQFpXBavm",
  "key6": "4FfCCYLLyAsR3g7QwcPoPvPLQbGda1tSd6p5R9m5TCXfCC4RgiHhSP1ZVuk6TKXx1PJCrHCBnQ8LLJyoRShp4Ebe",
  "key7": "3u9Sb4szMzkCuQtoTbVFQzmuA7YLdwzpsNfhDaGESGcTJE45hCnjYP1xCzxjeHprP5uGkfdcGxwf4ZDfng5hbuCh",
  "key8": "3ZMp7cwPJNDTAGVzCkLaykXtj9GqYEhkELfJ6jqyPqLnaPs6sB38QPCwPPg8zGM5zeQTPmtxZBWsjiRVqzZ6LRJy",
  "key9": "5cG7WhcooVQNrwd7pryBgtgtmABBARTM1du8xiaWz3FFVXyawQ87aUbroeuGh9hnxJBkRVZMXdQw6BH2QXgZDkpN",
  "key10": "5CxBg245dxCEBMwGuAr6g84VZAk4EdbEj7mY5z75p1d7zohPxjZEv6HKFNsjvHJgJK1VkVZBtLYVpRmsmRaHCp5n",
  "key11": "3wJawpFLKY2ZvXBawZ6zPrdRS2eBGskMEeknHvXXpSnBYhtvkxKqvSzeQpbQFdmrqj6PkLkv3mnuFamALTavhyFZ",
  "key12": "5Yvicn2YugGY5XvAJyJqucRJrwirVsPbyEr41ZZqfK5UdukwyEiiDaKnTJzTmfMrqYBHS4LDXowparsXnCksYTja",
  "key13": "2q3xeMsz7dFmBStkVuHe1AYeNAyUxTDteRyBCoK94iXY4EtKkQjL9ZwqqqTV44kHjPnYWj7DRu5R28tZWqDZ3oDj",
  "key14": "4fYARdMGULCYGhUYUYNSEQL1ekzCXhDbnUReuqmA7vSTdi5FFRidLcVrwtdTjxg8p3BhtrvbZnLrUqBB3tu79mvy",
  "key15": "2YLxcsakSXfozDvQMqbb3ruxDekrD5udagAckG9ePhZx9jqc5FEbrZVb545Zd2prf9Dj1dYxXDYFk99CGPGppr5s",
  "key16": "2mLApYX2iYRnjbCWe3W59h7QFkVKJdfJjEM6CWa9q6rWCcaRKEmFD5XA5mmVWMW1K8bzTbSiLp7eU77cjEm6ukJq",
  "key17": "vML89XEdkDx3c9DGAT6DPGhqN564v6TnxSrUFqXPsy6gn4pz5n4mmsFQJnK1Q4gimSYSHpcdhx8YU7VwoPjHEYh",
  "key18": "5SMMb79hCB638b6xcQLw26q8WU54oYj7W2CWKwwKfw2mRoRtrGbCxDMUABhNxVSmShMzvkNXtSkZCgo3bqFw2mEE",
  "key19": "5wTeh4L9BQV723e4QbgMkcre467vAHFxEtiRVjzTdCnjDdWmHQfGZa1N8ddeUugNgT6vcLt8CS6vohbnzmwLYM2v",
  "key20": "uAvFiVmeEuDQpgn1kNagFnVdbpi2gq4AvfgG2cmuCMPFzsrBryuxth47JN8Q6cHNUZQ7nY7kAwwkrxSQ8rVQhg7",
  "key21": "4gefnL4862yGxTFNAVAkYZ1rYSX1QacXZXqZRgXtDYxznX5LBBpWU9Jez7zvcDDrTAek3VGBWY5rYBhsBr8joUq3",
  "key22": "yovs6LJX3aW2PrrqYgU3aLQkYo6uoLaETrVNxjAfGFPsbYuPmmiir5BUpQUcfcgodCGoWPMWtg2Mf3uZVPTKBs6",
  "key23": "4LJGTaE5ihQebJxaG4bhfcX8P1U9GrzgG6KuCLBQDjcXzxwJWuw5BVtQkcRN99pzAzmkkAn7811VVbNEHwYwUiCU",
  "key24": "2kAgLb5Mnwtuc9W6GyM4hRbLzwjcPVLJGuw7j4i21rFQhNnYD85GyCq3hxPUN3i2QLUS3zLqr23y7mqDYDhFAJfV",
  "key25": "9Py6EGbVxYB22Ni2FwvLEikP8FL4v5C34aaTpvEJ4NC43hLtKwzPx833bZ7GTVqtQ6figyaX3bXiERWFP4mnQWv",
  "key26": "2oTha9dyqGBw5Csgu6i4XnCrATKfbH6qS45eGmhdzQfSCJq9RbqypoLUZ1HYhiD5mNGcwFhndmR9MaxuC4B1m9VR",
  "key27": "7kRsGsMo9Pc42zVBM6D2gVw2BHVcgyeH7aSWFKYtrB7So9zHoPB8Fzyno31TcYbhNxDsk6Gzjp7RKDDGNxN3FS3",
  "key28": "4rtijN6rUeUXcjYVidsUmPsoXsBcun4KuvEJHFKU23hwvGcCrTtBEZWJhh6oLS63nWiVVfPmgoFzyQ9vXFyri6u7",
  "key29": "3XXMQVTgyNshMyW7ooXSenKCZ1b77xSSXpu8Pk5xZMmEcUNqq2zEPbSmzMU1eVPf4XWFyxvqNjGyprLRmQscZrWU",
  "key30": "4dgWX4jshEHUPG63fHY1kSAUco3TUoHip3nPFBvZQxjpSag8kD86ncd36BpZsKEHFWWcxQupPSTuhBjXEvXN4rXU",
  "key31": "2T3bGLySCSv3iqutesukUoVYtYGfVzNAVsTxcSzNYhPToDjqbdttqJojpSYpzNrD9XTFuc2ZLwWyDzWD5DNrasrH",
  "key32": "61dBkJXV8VcK8TTwf2ADMRDmRHxpwZZLHFBVAfadQirEj8UjHsqxc9ChkLZBMYL6sn7d7M1VMZ4iKLcgMaZVdxiA",
  "key33": "3FTFvkM6vh6xgAkNbkFsXqWJo4szK8Q3iRueaYRuzgUmv9R4sThxEmc6bYLfeR8XHHVcscdcPG2etJzgzwYJxEob",
  "key34": "48s2xeBSsd84Dj4o95a4ZwXWTvg4ArhSKZhBdzbNCdt9fpWKDMYKvBMz8JFvQb3C9dE5puqG1Z15jfdVQcks5weu",
  "key35": "5TNjo2W5jb1BJhDkuhsSdAC1oQcA9bYmH5DizsbhaQphpsEoSsfqsAaEwAAmQmowyiGj7LhjRDvzx9jSZvpMWSSH",
  "key36": "CL7uyDuF4tTiet2aDg6i2cjjbovne3qvdxgDHt3zwwVVi4QivigQQEbhJdyGp3YxW8Aoqvrfxqq7GpL6rnznhxa",
  "key37": "4awCdSqVbTG3skknmf1qWwT7dFjVE6dh1byt8e453PLzKFfMdvwgEF4TNbWa1xnGKw5a8EUTkFyKBwZHiSTtQ2gK",
  "key38": "LfHUhuJmVofGs7yifRo5RYW6hKJzuq97Sk1KS56eWWbta6SVLtucytDPiMV19gbCcRfjgyDa1E8EE7RWCcykMuU",
  "key39": "Ls1gKhB1xeKBdicH3CcPETUQx6MvHqt2HhnaYeY5CQmYhxcZk5cbiJiNC8SoyUPes8jtXMiiCY7PhVkewA46M1R",
  "key40": "59J7bUMLzsSCvJXish9DBDsMf7s613MGcohZs1atWWVWKBMxvup8rjgv5Ckufnea1cLwCu1iYvzTx4Us2EGA8Egu",
  "key41": "3K4NtgdUF8g6j3puhUch7EjNheecXwQDizB2DMVgm7dvJGh8FgQPBcYaZr2DiNk4fF5EYxq85yGGJx2BJQ8Phf6g",
  "key42": "4VAJZ4BTwyp9wACmxPRL2Ugq9m8dcQR2crULPK71ZNttWbBkUqpuEyYKSR3CyuWkn6Cn7FW4YUciT9ofA5PY4VJH",
  "key43": "27F6mP1tmB5zcLjjqvyKp49teSMJYYhZyagEuXPfoJAk4t5k6za1keWePxjoQewv6YhC9XMF3AP9gLfQPAuoUYq7",
  "key44": "3NQeTjx1UP23EcG84bSZDx4H4Q9Q9u8hggF4mMUoBLJaDNN6i3d4AsXyseigQefqwzLwLMjpJYWWrBJhaCjeSU4f",
  "key45": "66L3LXRNdgjNQgQBVKSXaJbgZQXiFdxNdwGQgNDUHwbZqskH95qhbju8RRSLZiALLqAyY5B1cdHdv63ann8SVakh",
  "key46": "3L4e18uFCDXCzCGPCWXMn6skfum6qyqhofPT7U4er9ngUcTPQxdEUdm2gY72ohU3uBuPDEi51b4m8MSE7cHYyYMT",
  "key47": "2pszp7KuADzepuBRqHx93cJmvU4aWartC7iWzBQvk7JWYTxz7PnZDx4TAAGcczBSTWVqrtB94XLycgcaF8mYHfpu",
  "key48": "3gxJ1kSyaEJkvUPNyTriS5KA98GNuP4Y8PSAqA18j3phymMyDJhqsnZVLqGm1XL8FZsQaC3unf2qHnR7tSg43g2J",
  "key49": "4xAvQAtNR1CKwppgDUhhRYdijfZgbJe2Fp1xEntW3bt4aTEhb5dX6de65EEbnCSo9MziX1QbkPcUiMfarcjXUxBh"
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
