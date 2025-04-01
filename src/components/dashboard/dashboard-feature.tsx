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
    "z3XUBH7Sun8vao8x9rTnU7LrSbZR1DHR2gczL9fLo3LrUTcUFsRtyLgckE671nTnYw99o3b8Y8pCoqjmXXoiQRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YcEhZnbukdomLBWL4GGT2RVtcJNT534N3QYA99BbVKGW83JF62jw6WvFY7JfFVN2ivVVb4oQJhowJMqtsn1tKNT",
  "key1": "2o95JZz9fBEt3hUsyJiJCjkNHxmBdN1xQge1MSbxuFZpTy7HMruc74wEMV7EQ7ZptVyo9Xj6wvTjLu48uJPs9Hxy",
  "key2": "FUABKa2C5yoadxTvJC79sNs4SrXkXcuVwCUR6DQpC3xFVAS4hJxir95FrUXMBJ4pEFsKvDHSHSSaubiuaYSveRJ",
  "key3": "X9nwqLG7Ypx8ki9D2ZUBbhaKG8mcNCw3iRELpYSR2byRsYurJzjTLeKem9H3m76payDNKt3KPoryWgZzCB5P3mG",
  "key4": "jRsfEA3ekhp1Bhqqz3r5PJQvLipzCb6kQoasE9CESGfiRtuJYc3owDw1XeMWDEJWbaDhChtJd7ycEMvaNYZJXkb",
  "key5": "2buo2BXvztqHESZSdg31oSRKDbKhJbuu7WGHF1Y4XqpKABxzzBLF9tkjguVPLJufZVrSAxfDsRUPjPSbtgGYPrq3",
  "key6": "YFw8jaYvfSKif1JBQP2rYimRfKsn46v96kNM2yLgKp9MNHZHNJn6FqgNigFNkvWj8TgKFyG2V8RTHecRyBta3in",
  "key7": "5gUHyZDgmCbjzAtxh46Dg1qkdzYsPit9XjwK4MR6tLiCXaMSKuPCgq3KaCJb7xHeHsrspJhcgo9Lvw189fhKWUNK",
  "key8": "3wLNqg8BFp5jFtPPs7dFR2uDfZmFDUNdsryJUvwg59YsbvU4Yk6eHkxXr25j6FTJeNsWEnDP3oSuMqZ48QDSZxpw",
  "key9": "ZxjNxAyjCNsSSXCTHPUHiddkbZE4bniCKYXnwbYf2acLXEHzudKCRrMtd1g4EXa61jdm4Fft2UjsMmGEbxjr8VW",
  "key10": "2PVmnVEVEVTXXwFza3Nn6fWvXQGZynKZYfEhYks3gEcWo4STKfg8obxEbEYHFBpCVWFWa2csetdqvvv1ha5JB3BR",
  "key11": "2YZfu2qsE7CjRccM7HUMaad18C6M1iS3Vc1tsX3BBMUxnryRWEb1eeNj9Gd7BqdERT9t7gRMJ27PBpCxLnaZQQjw",
  "key12": "AbAarvno9XEUwugFy5mcPKauAdULCgC4Ko3Bv5XYkRPK7NBe9wjKkCgecBDqp4f1cQhQq8EyZNzK4vaAH6DvxJY",
  "key13": "4WQMDW5AbuRqAiNYmEdjkXuk3cVNooYZTQST7GzY99bz6U5kXevFpp6NbG3ESGsbq5YYrgbv4fyVNu5evR4zhxnp",
  "key14": "4d7Mfpy8YoVxWdcpgGhoxwpHSruQkHMvuejyhfufZFtdXQW7v66Z7FwBM9JRwxakGGgvhDfatkJ7xx8ikUA4CWh4",
  "key15": "3JZtj6UT7Pmk2TNqRjS5WbRyd5mi35HzvrYQkYDyC9bm3EiEimUL8JpAwULaR2sPUSdVUebeAXVtqNBv4uSQfBg",
  "key16": "3UKaC8AXg4pit1ocsSZhLWNsrP4KXV4vgig6JXVmF9Q7nW3Jqk5eaW2k3mhC1SnM2fE9BF2YG326Db5juYi4wkFC",
  "key17": "2kX5qFCYRfdLZygM54kPph4HDSTrRUpsz8E6Rxrjpu3oXzBTHLRrc2sfhK6zHQ1CmgP45EvgsCZRQ4Uj8Mc2Umsy",
  "key18": "3BuNRbDWYryfUrYX7G3jV5gCJounxzHBxtScq9hqEuCBk3GaJgFXRchrtYuLZQrnAGRn6EdKAynn86TgMVeeqWqb",
  "key19": "5CbYWWfbkRh5FA5sauDv56MN7A1Y3pzLQoVmTyGZ6VrPPv4mPV2oLuYiLicKVHgqrFViKKcnL1TmpCizk9Cmq2W6",
  "key20": "5VpCiDGwtMCWbrDAQvkHYwyVhQ6G2z699MWE5RoVxTJUgAShPmheftr4HNKNoNvQoX1X3YiQoLYTfN8eHQ4QaEKN",
  "key21": "4SYy8UGQsvRSHJdeyqwvhzazPNYQ4Lm6f7Biry1C5EwPcswVB3C43gB9UU9NsxWMyBvAWokEuufgUWeL7js2QyHz",
  "key22": "2DWNSiNtDVMcfrLgXnzuWjoYgwBRPENGnnpihYUZppP21aQYjZkNUkaeAv66wwcF5NZaTNwP7fFwUayJkZQ5Yobr",
  "key23": "3VyCFB85t8vUoiKxpH2rNhq9U8GDZnRFDH5aYg6p3Zk9jE6xB5ew1KJhga4CfBPDUBijPz5yReBrDxNqZeLuuaAK",
  "key24": "5jwo6wWsoWpHN4cNdGRoYHxnrYW4h3mWLfBXvYVPTuG3D47QTKSg4LsmW8PH7gPHXEAWuWeUYKVSmarWEiCHbH7w",
  "key25": "YWRJuw58Zt39RRzjGSw6fqMyxN7SQWnEAbrEaB612Ufj7tSQscSq4fVaqL3SnHQC9GniEXn417esBSspHwx5MnT",
  "key26": "2dWfPeCQ8jfjokyvFqYC8U62cLULzHGVyZigHJtnyWQuwQPYsJcaUo7GEuiEJZ2MCmZVWwULDLPfigrhETZ8HGKE",
  "key27": "2jwD5t8C7tziveECZtVnKTyY5QEKh6G2J5Qr6uhuovnuMeCboA5FBnWNQbGaJUfzTv8VUrpdJPWPL3FyZgyQEq3d",
  "key28": "2XDwP7CtQ8VcsRUiWnh2f3QhyfCqfwyxUvE6dEyKK139p82urezDKee73DpfvstHt5XJCNhm9oJ3K5gm8ZdvyPof",
  "key29": "5HujJsrmF8xc2zrG7W1nkdXZWoKbWVawJJYEPHGRJ6Co5qSYxNsHZgZk8VauURxkDwPhukrfnMYQYpiJVU4XSdSA",
  "key30": "tRMhoFMFFJENXkryAEsgXd7ac6D2wTiMH5pthnP9biWiQPGiz36pk7dBsqcG9eVrXruMnFAabPZGJF8DZTcuRHs",
  "key31": "4dim3WeMechpNhCMyRwCeJj9AwgN824k73B5DdMQsT4AQH6MiiuGYN3PsHsjqUJ5qKvqduzCnMQ5r5BT7nzDef5r",
  "key32": "47tyV7CBGGi61y6ZcVAc1APkapTSZnoNEBukwMGYE8yHShWxEpbhws1WT55qnRXVr19wBq2bMpSp49WiYwaWbWMq",
  "key33": "5Nvb9RR1RZjmE4mVhj45XFgVvA6N7ViqBpmqe7PCQK1Dy8t7sKSTWH3ArtvaCbUDzYp9fFGdRyQC1JMqDGwK7Uoa",
  "key34": "YoFFDfCD2zsKhfwmEVHToSMc43RAMwt1uZCqAGYAQGRe3kpfSh9wKygQctnuRKAwRStNtqTCSXWbzBmHzNQWn8h",
  "key35": "4GuKeXSvsxo6Wdk9GDQmHEa7AoZKjduwyxpvcngDGLxZFFchuTS8LYfYEJVw34AyhetwP84h2mE7V2GmxhS6x2a4",
  "key36": "2vy7knwR3q3LG9Juaeoxmi4RGKREWQqExFWkNiECkaRfmpp7avdmRpvXcHbCCLDo6Kx2rVFxBjZb3JbujsjhBQWK",
  "key37": "2d49uH7EdX7LttpBxW5ocq1s5jhhnYSRrbjhTaWz39Q6m5LBxSw7VuL3CdVT8Ne3R8L3zYuohaT85iiuVghRp8X6",
  "key38": "3Pb6z7GoBGXxFB9AMDYMnNtZzESaAeSunVPNooPJiqy9VqPX4q4rC8EfnHyNw4hXywrmdmV11rAEANuavZNEcf9L",
  "key39": "2GdfPBkqpdyk3qKMMyutZsc5GrNfYLBhWbn9ZzGbX9tZqJec4PHA5VUwNAaCNmiCosPQHR9NG4EQL8dJAqXWXL2m",
  "key40": "zQAhFTN7SceMHHZb6byFeMJnAkQbU7z7weazG8bFRY3qtfznCo1YdCXSEmwk2oDqUyzDpgCLR4PxHVkpd6JuVfr",
  "key41": "3hgCBfhFNnbmJVSqy9F7WTbqtyxP61bkwqeex59gNu6z3rMAuzFjnuyp9pJ2tBuBc2mgdF8DMUqcXYCCNXYusDGc",
  "key42": "5NLXDHXgpoFMwCjokArUhLEZu72aSokFWTpGB7UQ5v7Et6168HxYHasMCLUeU7zV9wQkGrdGEfBCwGFdnCaprvei",
  "key43": "2XL4VAA6dhm7z7Z555HcWxLvLDcUKjE7yXZPXGK7PSdRGvZ2XSNoy4Tz5Qj4cs9Bd4rDgqWr2VA7TzmkGd91GiUA",
  "key44": "a5B2BSY4s9U3p6h1eHxqjAkHGWSWRNiMggA7jXZkqNsM4x54U3ZQNWSHh7xHdCZxLb6SWZ8Rat38vzVvh1YnRXx",
  "key45": "23zAg6kv7iruzYJ5P6rBZu5wLqZccQueRLY842XL19AYTsqgYRwL2VsVqEuBPMhuP4wHGmwqSBUq7Gd7144WD4Zn",
  "key46": "647KfX5nFg2Hvpq94oM4U1Efjqb8WTRyo2UcZC5SVxqRvkFikPMibYQX7tEiRn38QELoY69dwpF5YvCdawtoQPcr",
  "key47": "2Hz5a19ezAwbjhMKjEF2UGP7dqnEZvcsNpghLcEfpnYo6pKWNHF2NztJEk7pdcX2S2RhCs6JqYKK3ckyKTrSp5HW",
  "key48": "62c3sQUMrKF3MwK4dmjQhqYr8XLCP5T1FrCnssigpN1zoEc6ZKYBHzHGkFPgxrjJY2yy5VjPdfxY35YUnti3uAPC",
  "key49": "5CpNERAjpsxJfL7oTtai6ysZuMLmX6ujrewyYTwo5BX9f8hxYVkRCbSJdSfcUzBurxFshzn4tzWoZRgKaUsMV6Dg"
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
