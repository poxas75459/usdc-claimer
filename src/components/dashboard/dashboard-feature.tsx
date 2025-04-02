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
    "GphMpNzPohFHGLtnMYGPTYTcSUjQ6TPBSzvGmRefvZv2TboLRuLfYaKbDdj5pGvfRWvZbTzBZ1naVbrL7aAVmaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xt46m617Xxj1UYLkieXzNoMmkBLEK32s3Wzw7dqGkTUKBctRDPG5RfVMRpG51tzouwr5JR9nD2yQpLki8vkz6W7",
  "key1": "5wQiHiBd7zmDwKjDXJQKzUb8ukW8h23UCUE7jcRP4ii1effQczfT85WcYARPLexMfJjix27eVLs1tQooLSkPNf82",
  "key2": "2vstX43trBeUTHL93uKmJL4rh3miBKd6qEgumtHNsUGMa34GYsm9eSVjs2E48WFcjfVx1DRYrT4Qmr6L2XTMcSnD",
  "key3": "25AXbDpgakqKpZyN7agSCdwHUWsYDrVK7ohsSfMg8H8dSZS5G925GKAVkB59ZCnJFj7maHJaY7ELDD8J9LowjLbm",
  "key4": "4Z8qpcecdbkzsxQp1ez4mVL4P3idKzdovXH755hcbgm4zMiuffSGb41mdN2ncGQCQK2qLeTQP68gZ4j6SNeyr6K6",
  "key5": "5cWFNe7n3nNjgXsCPD1LF4AES3wht8zw1qesMMNuuoDbAJjM4Ed9ov1Gstqij8nN7UQrNFHd4pcd74nGXkK2zrF2",
  "key6": "3MFMvFJqcjQaJp9z2CM5GL9EZWrdotKHgfrPVopfzUipPbh5NnpjwuramcnX2xS3fsJ1ZUeM41QDjXDRX2GqgBKe",
  "key7": "mLmtc3baR683qkRnx774YCRRuhEauJFDfp7oRXBn7YMRxNYKfKqGsiGD7bpNXATUNWuNYU89kDu1kfM672AETkz",
  "key8": "5SEwyrN7rA6m8r9CaNGXeEyPA4V8hwtiRqBjokAq5945W35MjHP1VY6gCmnVhfk2d8jbetkLJLqY4nW19pbbBXQi",
  "key9": "aADuKKMfgqx1F9CTaAWFUjzAogwSw29yqE9YrwvRVjKRkjHE41Xqgjqfzwu9kkqAKn3Jy3V6Fd2f2CJ35iPWzW3",
  "key10": "gkCoQugZ7R2j8M1rvGidGgkwC5SroTXJFYMVhGKSXXX786zewRgtrNAUTsu8yN5pPBk8hKtkPkAozmW9NKAsBJ2",
  "key11": "2X5XyGhmJ5CErb9Sb3NRwMkBBAkbRgbCeEQFAAjZnxwLTv3LhDihTVh7uGteMiDBvA4MkoLJT8tA99ycHH8XpRba",
  "key12": "2LxJsM2ybHLnLxGJejVp2VnjojaG6kLzGAGvrBoREryUmLCwL3KhxThhefhk7Aop8CQWzcnswEF7yVPYCjsEgKWr",
  "key13": "6oCWNnmLcgrqTAFD4oHzpqgf31b531S6j7ig6oT9sH55CroiUH63s6YBTMNBW7ZvqKmcECFS93CeQYaTQyPU7Hn",
  "key14": "4RZDXRNTZwExFCbAhXpcPKaoiKp9MfkDS7geYYkkcyJdtg7K3xbtVQQGX7Ffr5urJ76xyU9VoitFgetxeJRarByS",
  "key15": "49rRGeGkNQBZ4sMdLBCjedUpFWwPmXqczmEPJ41eybQ9kzLdATnCpk2feC1rU9n6zZsFGezNy87HiqFCKd3ZxFbg",
  "key16": "3NN59M2F68u9xe23pFKdi4znMfJeFhQZhD59CEiUq36Kv2NrKhLyAGwEzR6C5XueSEAVrH4wUdJYJEGiGfS9qkWu",
  "key17": "3pbMYjemPGQYgFf8R8GsiEb7Edip4akDT5PXW8hLtVAySGhNCkB3dLG1sodKYSQSomtvKcGgW1t4NQyddgLitBfE",
  "key18": "2pHYiubCN7yQSYunWvR4vXQyNi6oTFEoNCakmNAmhJUFHyomTbna266H4AjS1ghfupmFVRkcCHAZoxBd4TBYqDPg",
  "key19": "3Rn1z4PiD3bENtkVxDUKP5oeD8aW3jzovmarQnT71mPUcziTdoYHah64t6pmoQwS8PpDX8jnkt8wJ2NrKr96TaYs",
  "key20": "5caUrwyK93R7jta5GxsZ5CTAb4j7oBMWpDTekpdk2cr8vgeMUFekjeRXLdidCeSTup6FXF9nKzTPLoLtbsTpxeN3",
  "key21": "vbJuUjFrgMtAurhNwxVQL9qbd3sYeFAqUmM4cjbERX1eb7Yr8mPXK5UhRfrChVQHMEbCu7HmQdeUA6haD4twfiD",
  "key22": "2F24bm8sAAzyU7jq5jpe1QsDxdttotTzNCwEHq3WGUa5DDf6KJ7QVUTE1zB1nn94J5vS73p3A59wXfKmd1nH99fg",
  "key23": "4Ci1oP6C1BaFB6NerfKL7C71oCx8SViKRARXqPdnbt8igAnrZYePtdroXrjBbWzewcfQYPDUtsFfDMLgB13HSG5x",
  "key24": "58oi8sg2auugFMAZ6isiRUDLLhLGA5bbNFVrP3KJRLh4cyMbtPnWRhG9TJdcX3CxNv8ybn1nG3hEPV3DAH3ZKHmy",
  "key25": "51S4AQFQqdrQKZCLzahuxMoY4iF7Sq6tVEnvuLKDUm9he4iZ6RWPtW6WCg3rSfiPtR374MHVPKiFjPTnF5S1aWgY",
  "key26": "3BcpQT6TC6S36fiX3rqijenXWmqyNLft48LTnp67wacVfTtDHNjcUtVNYheNhzXX2VPEehwtTkG6bahGATqSRuPo",
  "key27": "2XoXkyqzv2eH9o5jC4RRSqnup1yLe4aZU2DC4s6qxzGvMehza25g6zmdndcHRKsDTBWau9v7FUW9ht7yTqGexMw7",
  "key28": "dWWLCWdirsAbAfhAoBxnLAN5fNgGknvmHmMT55S57Kd9uCntZf5Yai6v8C2c7bv9o5CTphALXBNz5E7bZfs9cLP",
  "key29": "SQG7Yiqc57vrrNabgL7icXbZneTMXBC9dQnbwPcGtZccFE8QrAxzsxsJoBSk4AbkJRmykRGnTEG6Q6evQs7EL7i",
  "key30": "3Uj5pWZx317eKTDd9XDNAu4YDyNwMG4oTuG9FyvSqDJ2AzE2foXmtDjX8RCJFk1gvdZhwjSzzVYrqU6CKa2Qf7Ya",
  "key31": "4KDzRruAUo1o2iWRnFneZ3t4JEBKV3xYxXLvgqT2mg7gNoy1MYo1LgDGxs9Lf2R4kUVADxs4LVBJwiJwrGn7dcnm",
  "key32": "5NECKbyYo2c1GbUJLfXMPQgzn5EoFPTFfusmVTgSsLH6nb1ECp75o7HRsTNz6TdJVo9WLfKX1k9rSo2DjzmfeS4K",
  "key33": "2tcJpoYQK4Eay68uj3V1vtQ519G1FdZT7PYH1WKDdthCzczmdK17kDUPahTwYzSX2NWvekkeyu7ctcdGCs7cFZCy",
  "key34": "4zVriUZ1qAyhbCfYStYUzSy5TZ7DerXnQL4EjiBqZzCwsJvG99v1oUhQweLxEfezvgi7qtsPpgXwevD799AheA4V",
  "key35": "2Yfo9ZVppDteC7xLj747J9PiqgcDCCjsBhaEvBUvnXCKWxDmhZP83JnJBvFoksEUMJdtujNBV9MBuuMeGoCJUcS",
  "key36": "3HMzGBgqMkfp6kC2uyiebqHyqLBGajj1fjfG8k538HyMoSCkbA6XFXDBaoFVPS2FTAhHLmUZcAeVB4VJfbW1wL7a",
  "key37": "56caKLuGZJLAsNGC4Ts8aXt3Ghtvb57oKa75R9XgvKfSj7u2RT8Fm1Fk2zQgyvhWtwRBk2DpxRWGqTXZi5uMMDkr",
  "key38": "7NApt4kGMpaj6LwWxQxfyEnucbDVwaCkoACC1tYxAaNC9uF5jCHaQcNz3aHUx6qKXLHwZjhBLGQwNbTZ6QXBd3w",
  "key39": "2mR7oFgApmLdKiTq8wjeKPwZ4pXE84HdAVrk8bGiN1mZxUVrHZeG2cStLVzDDUoTdZ5hhGV9N3BFqCWE3ezaakav"
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
