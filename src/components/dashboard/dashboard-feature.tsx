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
    "nVZb9Xi8ywt2Bp4o5ufb4ytAcqifKscffrVqW2Byjq9HRyKCoHrAEQ7o6kqo55uunZWQP6H9qbjyxnxnTQzynoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYZ43385hg7eWknEyqMMfadJEfvNpZfCEozFsnbF32S8EyDsk9Qnze9RyuzouZXUsRYh5EpXaTMgT4yogLGUz2V",
  "key1": "5J93vt35rwNgg9ctwQVAZFLmQN2mtDw8VCxjHRm1aimGfQdSW9jVfm8b6TziVa7ezpGW4nsmAHoekuUNeSWfsYok",
  "key2": "4HUhBL6uT2zf8ryA5yHwC5SiiPFaphsCvurpnNmLqzA5riHGA4cKGdFpDv41Pnbqume8CCu4yXF7jA1XzDmqvxdh",
  "key3": "4uPDRDPnCFnPM2WPu8rJstM3SzyFidWBj4XVkStNJz9Mr2noZ1xjKbi41tWs1n5oY1auBmsCicJKQwSBogYVpoN5",
  "key4": "nBArsJ2P3shFovaXkzZToJZGhtmL4Zpn3Fq2QTtQ3VqxmzhCtwJE1vzhd34kyUtMHm399hpqLe1t4EiNLSX3ETL",
  "key5": "5Ao6WD68LR8XhUgJ1mP7NNZFkMYrqm6Xv516aR95evbK2R56gVUi4F9VYkz93n4GX2bAMgYypnz8XE6aLBYZKJ6b",
  "key6": "4VLMPBJfJLuRJcbs1uMvGU8JZxWGpbNEruzhZ8s9EWbvgJNdpo8iNxB5XUxS3mLnvd8yujfbBpFg8NPy57FrzS6p",
  "key7": "62pzuRy1mcsxgVb2Z3nPGgSeRHnPZtacuPcCmKEkDLhxxdLG6qtssXgjFWTJWEgthJqbJKSeevxfExNtAW7EsmmS",
  "key8": "xipYGsH4napRNhPXM722yhTSDmzuV4UayzaUNNS7AwBK6VYRcmnFXU8pCUoSXFWzvjTgai6VxZJ4zBmNpGwWZg2",
  "key9": "5zGFhE1WHSkCaJvAbaTfUgjv6TzkeXYsHGdveJjomrU1qpDPor6vbTrZbNMJaJQkUULPvHeHx29w7doCkHaaJ9BT",
  "key10": "4KJopbUt8PBQu8vGxUL6z4pqqVbsZFBFDa7q59ZHXAU4tvrjWDyivLksU2SHWpGQnDXzDqjgeEWDrAi2eszLfR7h",
  "key11": "5MeiyU5tbvQXgoFB8WpwV5E9LngbHEkHSB21SAh9aMcvpiYkrtGP3oS4z8SH5kdKay7mrJQ3d7edWFiq6KwwLWk",
  "key12": "43Rdg47qLLnhgePqRnnqGesqitAhAFwTjQjiLbq4eBE7Geym7HDnkfqPQLwUCAzhBVmXmN89x2iptT8X6gEKi9KM",
  "key13": "3fqiXAjdoPZrD2nmQw4JFaWmW7w3NKRjEpLo4V2kQG3f89F9RtHZ541XMkRH432koyojj5aE6qWzPbsFPQCQmawe",
  "key14": "2rntSx6sj7KDfbSLSNjvKCqkQCfCeiCVnAHTWQQ6ut5o9R9dWyfzsmF7s5WMNzgSM1oCS115CYNF5PYqie4na489",
  "key15": "p7H5DdJY5RP8D99rwCW2jYSUQtbJkHEwY64ebvw4ZPs4VL3yEde1eK1XPP7yswHHyvWygHVMZhC9wpkyZGnagxL",
  "key16": "weYcfbPAoK6S73KUYP5oGy1XzqZsUUnwrg1gp3RSpqxQfnfcBhmHE8to77CkvTKfpZQ3ZRgyhJnxD7aPHcYcCEB",
  "key17": "VgcvM3qutGxp34CuDa5tumDXuUpWcfptWmqLRhDFxvB6WQSYtaq5zGHBCV8rLgG5c9fTc6npbZ6CCwXRxgM1hsW",
  "key18": "5hEK3XaqUWWGBzo9eDADjepKFe83dg4HXfDWfc7EdnX4WfWGFHqHz6Pa9KQQAZSDgig4hv9ni2vn4XywkPgoakgA",
  "key19": "2CRgt2jfLMkGgwGXVeqojAGgNgYDQQgozLQTUusc9HcWc2dCM9vZgegE6tDxX2ZzZexTT7LyMK8hCeos9a8QeW2D",
  "key20": "5dAtBcGwDuBdXjxfaJueg3FpMrKDsesHTiHx151DhwNQjFJT9rEbp3afUazAM6xN7yDEHbZqovdHnYe6nGyFmxKG",
  "key21": "4aVVRQe8kmtjtNa8Not4ZHCvZbnoDJhVNjcaBhB9wWdJFEDMmfgfG8boaihfCJ1uhE5i2ZMZ3iJTV71Ke6Vvgc8W",
  "key22": "4RsAaQBQuN36sexj1NduH51jZVTor11abeVC64S9iEdJDUC4B5xdP2TViZrPeKGSwZLtewCnLyKQQv16Z3KreAAx",
  "key23": "4iusd14RpNUHH2MCNQQbwqT6MyjSKb1ficyadjmC6SW43PNpReZTd5hifiuBqA4YnTLsSkfZNEbJvPtmb3MJXm6x",
  "key24": "45LN2oN61R7ScB1qaw2Bx3T7STqLQN8X57Rmy8JhtZk4U812XZ5NTEp1MLYmVS7NacQZfx3dN3R3RNh51jiookJG",
  "key25": "5qi7gyvX29AtGV67i1c3tAoPiLJLh6XEr5BhZ1cKWQnQ9eTTcnVAjWPKcNfhserY8Gj8z4121jvG2FnxVvsdYfWK",
  "key26": "2vKRKAtPt99TYCgmsYpADDgWAc53kbBXvDSNvuhJgY5N3QaEdpxF9eQRWWsRmmYTcYCGk2T655yxGuX6dwVf5Vkn",
  "key27": "2kSisoEWVzkd8uuafQzo9e2yTwgHdPC9YNLDwnop94bymPuz4cQoDQAMbhT8fnQVpP7oPo1Y8GS4vwPRJRcGEZwo",
  "key28": "3csWcgy1kM6GuhZxWpXM69HEtXgBKWfovd2MtbbQkCaFWoJWtNT2rwma2YUbvg1dYi1w2WQLDWCMUjvY3MPAuQuH",
  "key29": "537KBsN27drBVfJN2KQJw1m88V8Xqa3TLXY1Z86mBiDRwGK7hBbDt5VxRNzvFaP7wNZjMW7YDwBXy3kXDwYgCJ64",
  "key30": "4ZKMdhoHTnXZ7Px2hBHEfZ5YzQY9kFPrHw4gfJXaC6AD7AW1mvMXGtoBAtiGrCeFow3H8tjnFu5WgwJmWGLTEUQh",
  "key31": "28jH4v3JR4CC3XxUdDmVGaCgMUQRA3m97g2DfZQ6wr2vcDjsqSYfMxX86SHCea2JZFv4sMVbGWBNiDvJ1PwiPCt6"
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
