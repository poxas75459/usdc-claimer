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
    "43BuoNjiKosvuUKvQpRQqLe77HiVYbXrHEDQ6yqYjkri8ZMRfkQGiNDbFEX7KqZF7tiQSkxZFt3KN1Q4XmnATbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egFqYKyfVPzHTE2b4YNEmyCiVmR7TmNHVUBSwuzKYL21GBeM4w2Jh9PQaXVp6dEhGmFGMqwdBrW4n3TTx43ZRTJ",
  "key1": "262bXiQ8wfcfc8BYH6nL8263GPiPcPmwb8Nuf7Wcu5EATbBhAW9Ur9rnhLWqTS1fbcDNZXdknS4fb3NYYvTe6fng",
  "key2": "dMF6Xs8ZPQRNMfHr8SVB1a63FZLVhPq1QRogRQM4Tsbny3MptxCBPWuvcbQjjYos6zoVQzCThwx6VaL1rcom4PX",
  "key3": "4TizdSY4wuZ6VAFDRoJMnGSE48qawiZRFdwXKZaCW7HgSAYiND8wZXZK2KnhgTssbLei26o6hKej9LwRtviHtUH2",
  "key4": "4vYVGU81vAZZLdgAeBLFyM2KVXn2VTBWSazhyFxY6XD7yfa4NmWyp88wAVpSn5ouzG6jkFLx7gWegD5yRzHMjvDu",
  "key5": "2ArkXcDmuawBbmAKwPjBJh3cFSSKP3ZXDRTjXxGjjzqM7h3WJmEgK3tL6HwC1o8MiS8XBrdxcw1fR79Xmbnr61Vg",
  "key6": "2X4F9V1KmjjeMuiei4MXd3f2qmf2nskZLrPjEwL4EsaNdyABnG7H13byeaQSw4FrRyiuhvJ6NKkrpdhJHWjjmSSa",
  "key7": "41zQX8CiWrzrV8KtpbHmga7Sb3rKxBDR68hm3adEBtKFGiN5a5wpuazJ53NajVfDGm4nfsrqB5LAguWgZYVkCawB",
  "key8": "2H2e9MV8WENFSA7X1MR1Ta3NPFJxW4cGd1zZsPJPWmo9ibb7wLdwLfBxFQKMEJcSEsE6daGoxu6jb2AYjZvf4ajD",
  "key9": "59RiqKCCxP5eE8EUkh34vC77PfLLeKs6Q6Etu7eXUoMz7ZykB6fRV3uc1PG5EGYCPUdiZHUkXswnFuR4iNNUyfHv",
  "key10": "482a63fscdwZ5ZhfHZSAidSjdJ9sAvEH6k2QojzvU1UjWkDQCvSLKEXjUDDrgkykLa5KJ6Y2M6dwENxHMPWfmMdt",
  "key11": "3quSC3ywGxEzvNmpCmiRj2EfYmdDPd5eHvzAfuqZnAZPdzMDtiVZFEAhBbz8pBBwLzcumxgCJVcFSwBtjjqqFPth",
  "key12": "4nCX4PfoN5R833rFwFgXLQsVtxkCJjeZPkbujdAHP6DAH493Jbm3XqwtTrn9zGv2gVP4rthVReuTKtgHUddonU1v",
  "key13": "4GZjZhipMfYPWSF8UfAf6ZVQimiWCmvY13SCV3B4uFAnxxLcpiXoJaHdMQenaJmmnLyH6awXE81Esdv4vyNupFCx",
  "key14": "3UCERJa4VrrLxzoFHmxN3VEy9ECXozJJFWzpsSVkzn1fjYWu53QtCXY6WcCKy6rGLWpdJFsE21kLcjfTnud87GpJ",
  "key15": "Nkndcx2wFK3tgmQJiC5QQRMxFsE8vZScNW1hsSWqbiVAHDUFA8BADcpeaWH7ezeijCDCS43rXFjFLAd5bK8Jor6",
  "key16": "599F9DyEkpZN5RUF1Z6e6kUxCL4DWksK8ycJycvXFcjW2uJZ8wDvq9NStWk7nSUwrUTuMnJUZoYcrS2hSMAJcaHP",
  "key17": "4MECzRJvea7FhJDhG1KJBF6szqUCkn9MgqNSRrnvVuRE9crYzu8VYeyYuTDuMNGBWo6ZLYW4aBxpE1oGtbyWPaSR",
  "key18": "3iHoiMme7CTvwyzQTme3Q15hW1nCF5hG5h2nnUa36YXVbeynpXZhbRrBwp1bYNkzK2jQbFFqyCSgqudPw6JiTR2d",
  "key19": "5YuYqjCokWMuuFtuPwE3hFctNcXbqdeSA95TvXdqdj8Q3nrY8WNmdBVdr3rKgKLm5EJGoHc5v9jai8hp7tNJnb1w",
  "key20": "5zruH1kmXyXe55tvmf7j7y3njqvQRcsJBYuT6eqK9L66RYwDu5n41p2gvDpKnWaDiMTzrbxn1yZJqVVuTqkggvkX",
  "key21": "4pNeFjH8CWvbiJEqPUwHPFbDuACjv7ab7efxE2BDDXFBDiXwTi5RNs4p6RFnvEYBdX5KL5H32J3qhXqBHtzo1Hdn",
  "key22": "4rjvK4gw5ER6LywbRjMZQkzB2HEWWqNUSKBKUh6qgfrpjFZyieoPv9t8e6xUNAFfUp72TmABbmAwZoGimhcN2eyL",
  "key23": "5VrpKiWbg1nizyYDN9if2nLZVL5wULpFtJJAdxhsrU7oFqG6cr1pYn8ZgdDAU1su8TdT3vgNLtF6jzdv9nnbSeb2",
  "key24": "37Vg1idKDLv5wtEQvLmvC5uh53hY43ER2FheXx8ELyEMEYfmdVVCXPLfG3difgrowpAh43N6QLMYxT69hhju1K1R",
  "key25": "2fMG2EggjKZeWQbJJcyD3RzTGP4SE7SMp7gHJfX8T4WQrTnvgng3jrBXfvzz9pUF9rEgX1rR31rP2VxHn7GTsZdf",
  "key26": "5A8f1hgffKkt6RcYppBUtvHPbzjhuxhotcaqLnda7jAQx55mHLtxByzNbdUSRTDbZfqzTNPonBv9VBTnvWjRbF9d",
  "key27": "2svEHj9jRZSrJJWdbiCk6ZnQCPs2oaeGekEzAL6fujYJLzwipMcUziFGbv8vGSYuHwXLxzEZNsC8cwvrnJYEARAY",
  "key28": "3bH9q5ii1iFT94SjuM5cDsd1aqKDAmY4G9AAZd51z51pJPyGatZwE6n6D7mz1SCHo4sfrdmkVz5gJZrideULPRFC",
  "key29": "yddXLhb7CEpiqhta2G53zctqgAqmFWSMCWcaEdN5fMshQyV1Q47xSJEGHTHWSvmExxXLLA9o8H3Zi5M4976nMtm",
  "key30": "dEEPuy2bNh894Lsx32gjViCfUr38PwAJU49LRELDrTP3JL5i6CELy24KNQsLuQMXhgTZ4gAfmxBUjTHoCRXY9tS",
  "key31": "ZZUpPbDpoC3bvzZqDNSLTcTwM46KzoubfE6YjPVEASHnUofPdHD9gz3n1zewXat3TUmQ18urcbiyeSAVdb5XbUq",
  "key32": "3D5fUrLes9GoMkAEvMP16CEWxC9Y2hEutKFTdRbuCKKg1BhgyBL6kv8VfwB7QVzAVY73pMLAyD34QUHjUQWTY9Pm",
  "key33": "26uxLs24Cg1t2rsKX9odxZ4AxAjB4JHnBqSpJpu6UFYhz3XnSEGpEPwK7phqHFbnmm7644vYzAqVgfrmBJR3t3Xg",
  "key34": "eDuTW1f85wxwjimUao692zj2pWkinN8WcLnsU7k1o23xZogsoGsN3YkEucbCPi3pBVhG47nD1FX5EFUAR5CWagp",
  "key35": "fErnqP7F1Tq8Nq89MX8yj8CCe8B978eS6K5X2QbBaDgtEN2UKFXaujxiSaPHSaHDdJBuV4x8thDT6mfYpVD8m2b",
  "key36": "nysJ7ooyftfzsp85Xoyr7bTcgesFQEwf3GDFZqjubUAySN6vsK6WjrkSLZR9nf1EQhGrznBhXDwhniC33ecKs51",
  "key37": "Q5zWPQ2ytwmeetL4wYJ5QACMJf9WnDHWMazsUxmSQYuKhrADc9b15P32yGNN4F9NLy7QQzFXHezv7FXWRz5CL6E",
  "key38": "4k6eFfy61tatyAdG6SHpNBDgD8XBhRaFS8NoHjpx2CDydtG6huy3XAPseJ5mFvHNcNZPTaHy8PTXsR2Lax1zohDy",
  "key39": "3L4Qg5bhowyTT7YJahKu7wrfcs9nVC7F5RGsqtemBLUJWASwHYbJjVcivy2w48c9yFuaZAyPbNjLmpi2EfeqsAmW",
  "key40": "597NdfFtz95C1WiPndSynWJxRac8rt47PCvfmEzY6vyN1iWEf847MJMj4uppnxN9yHM5wShD1JP2NvGskWNH8uJW",
  "key41": "2TrGzdiJZSbRMwXHhYUuVUAqaegQriwNNynA3UP35zGzEQT7hUZWAHojRGgEstjAfyGUbWpGVyRjXD5Sh1TKNfQT",
  "key42": "Gynto65xfbTnAkoBTaPv5aZXJyu1onhHUADx6YZiPSCYAjv4XK1JEnYtssww2AzRjMXC6xTqmBExDS7NQg2gXMg",
  "key43": "5iLMLmmJERbQ2139aAveGUq8UYLz1PAYZ6w8kYWkpzS9SkWdxYBiDdkfxfxZ8T9Q9kvic45toSEQ9cGYUqZArZs6",
  "key44": "5hebjnzuV22tBzaaUGS8M3dxBpw9osuPURdD3tdhavveLDnSF318wczjupDWxwcNHX95nKAwqATs7ZaYxaeiwmDW",
  "key45": "3S16qmbycU817HmYd7qnVW4bLHPB3NxChJuZP37GbQFtSrvifgZVYxGMDr5Ckvzh52sLUGHFjDeJPyv8NqMjcNJv",
  "key46": "WmEZLtyd6Q2ovuQcgYyGBEtTCtgTmxaRSPHUwhdi3QcwvVqzpPtHhV1AhT1Ryjs7C5LHBXWXgV8itHfx2rAFDj6",
  "key47": "5dG9TggFza31oBZF66m8UcHrqD1x11HgoBCmWstGhpCvv4MDdEFkMaPrPfEQu6jrkdvaeFkGwuizJvhUhNWxgCg2"
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
