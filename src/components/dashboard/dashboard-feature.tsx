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
    "45jjYzCazgYDrHQm94QQwyWXFMipDzWEHSpfWM7z6nzdXWzyfX1XMLTkAA1f6KXPEK5XDvMonMFfaoWSWbrR28wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tywpuXJaSdfrsSYX9sMi5G9W2nFWJNgUyn8jDGjxooxu13fTvWQxn8EkEhVw2s2iumd418uLPhBGdgULa5D3k9D",
  "key1": "52G2bdavvpcmzbdxkcTEqDZTaaJoy4WmJtbfeSP3htDdpaH5bL7LzqXF7QPYQ5epTmxbcLUwRbwmTQoHXyp75XVt",
  "key2": "5CRUhcJpP2DKzZRamsyw55uycEJ35uuHtnkozs4gnUUhKvBd5i6JNhjzCPfjSh9B7Zm2FoWou5qwAAGXyi8UY9ZR",
  "key3": "ZmJLFBnHswjn3emNBfPse3BaWFKzRhnAkjAAfx4PZBNGo2KBr2zij1ai8ikeV5VRzudmBcBiK8nqEDAMFoDe5L2",
  "key4": "YN8pMTVaNQR4F5UA5oPGjmDKJwhzdUYvW9Fyq7YU2bYX2pGrus9rmDGDA6MBCYZJc8BUNZNoMEG5Q7DnzEVP4a7",
  "key5": "4YRi9ipueWZAWTBMAUGk6h5DV9KxbNCF9zrasS2mUeyYn1gChq22rAw4VYFtinYFsDRoGGn14VBysFmVVmaF2baU",
  "key6": "4WpmMMhnLJxER9cMsaV8bhA6fc4hHgmetfGwRgm8UY2MHh4z3CAjysg3QZJRyyQ6GG1Zq5jYtimVErMvi2YNVJm4",
  "key7": "qoRqw73p5vpUmaQvWhA84iJVUeEM6hy6BfaA1SKwGLefF3iSgAeE7Hq9sFfDJkKHCxDU7Pj8aNvJRPWc2BrJgXk",
  "key8": "4pQLZxyvpbmbRuMgkNg6eAqZUyLamhLmhxFrWdjHWbSsDFbhKt4cDpFHJXxbpthiqpYp4mhdNSzhLLKEYHmwapj7",
  "key9": "2rQrQojpeTC6Vbn7tzbpojR6TtDXLeC9RPEK5dgDbPhfH5LoGPvzRzVbKE3ro3dbXJD8stfoTJmHjEffNQ6h5h8F",
  "key10": "5bcvMyKbXYTnhobRvdfdHFAZUks3eeq5E15iqmvuXdjnCzWXj34CawRE3bvvEYoybRE4Qyj35gL6LjJCMLA9rWyM",
  "key11": "2dCRQFai4j8nAVWPnf9dUHKQrxntgjJ2KtjxwpsCiXqAW1tG1AzoQdq7TQX1MCNohwfLnNKJrwMW8sLtNwAwhCC4",
  "key12": "4QCL1z6yTqtqaXwZFtJm5NvuRquPPEJSmGc845c7Y5pPJei7vB4QHLChoCboxj2nCR4YXD1NyL5oeEUtsyhNX9oE",
  "key13": "ux3UGXswEAyoQEBrHiUSj1Py18sz8N9Y57Ni5bGHH3bbP5T8kegoVXTyr5AbcmnG7HJCSJb7UahwrF6eLLQpSK1",
  "key14": "3KPN1aHgWFDsJ6UD8pmCLvNj8ZPCwtCT4EWyhSsKkVV8fJ7BPhCAZHGa3XzcpKJ3oRA8VBW4txp3GshNjMro735g",
  "key15": "37q7fjUJJjTG27x8aG57KYvXZkwgeVCbVsKjsb7nCVeLKXszezgWDptigRLNmCmQtKwnsX1m9SWib7yJosaxm7S9",
  "key16": "TcyJMVFQ8QJ2jxE8Fs7pMTusC6JEfELsjxLz3Ng9ptb6qyAYKpu5Ah3RXPzFHeyfJcTYPpHzEpmMQbhoz8fCa9R",
  "key17": "4n442xwwQP5cTWVa3ZTPMdpo8xQCodQKPwTSPr9efYQhBJyt3ZTELPvjtn8Q8dKq1of6uc8L15UThH8LKB3ka5Mo",
  "key18": "3F9FMwD5ULfAhrzDmVeQT9n4dTN5exHsTKnx6c4oCaCJitqKpp6EevoR8V6WTFyWrMD3AJiNNpLcxuJAokB8ttM5",
  "key19": "5Pm5WXtTpvQYutkPLhHwzwhEkYReK4Vdyn8hSGghoiLPRNd2dwTn1Cx14v2LLCSapQC1WAZbavPqstJDB4QLKaUN",
  "key20": "3K6jF8uaF1FBPdsry4VqoYb7pHoPX36rZZtK11FXZfEhNmb1nMdRWyq52Pd6h1VRC32i5wZJFZWKE7YE7sogy3xM",
  "key21": "61cV4nUzQqwC7jiEpCiPuZKyM9GB38FMBFHWgkzgm42KJkqGpjEkRsWf9z7GKagNsuuJXKMkJtVPmTBdNjiY2XzL",
  "key22": "4c3PPvtttXszeQo48BoQ7Mu6zFbT1CoTaRERC3ZdssSdnKfJQmoTWS8h3wwVnKvcWRyjKVeoTTAAa4HKo5YqJXHx",
  "key23": "4whx9nNimgvRLfkx6JmowJRFjZRArnrnhCMWAv7dfvUejwcumWX4aVVsLZszLZXwSAPXcEetyTAVVdFSQ1fazjhP",
  "key24": "2RPkAQsrixcJZRHtbduDzvhF3i47hPwXn6SSvdP8P4ngFVdEjksy4fhtojSUXaBpRVgt95U9hk8frfhiiWEzu1Mf",
  "key25": "2RW5iJpNWoqUWF4mf5VbPh8SoUVGhCNj2Kz6Aq3Q4FBrQs86MHERhGpofkZkgxZQBsZyHWdwhyULfe5WwAqJPq8S",
  "key26": "R9kPBxrBqZxBnoPWcGoJ85ZZgCK2kyfpWq5LLboYk1oNBy4cY5WA81CEekLSYBL7xaq1xXFJPh5mBHNmXifreUy",
  "key27": "XteMz5SYDxqgKifcCVtLwVHBymm86dafG8y4ehYALL9QWqpnoikFV9nWkqCp95GpjrqCNR5F37r2ZoiXjCa7pXm",
  "key28": "3Q9nN9NrYyVQCNv4Drn5p1NMy34874SCFikw7iccthAwxZTYQJvukMEYKHAx9oN8Z2GeXdrbtpF74EME6FTykjCm",
  "key29": "2ZGgZHiHhV2QBQASgNAc829tHbsm8wB8rBq1diQgUCxsTq9K1Umt3NzXxYQKSNwVZdxwKhdQyuqKpSL575f6azzd",
  "key30": "5hjftRoTep7SjeCAPvaWu6MZCetaFNGwdhaN2HXhYsccdQRJLpAJAhvweEd85atK8i21HQ4hnqAWotVjaUEiMJF3",
  "key31": "61yQvJJhdnZD93obVcoLE2NXMXmnwpsSjaKcnHc3fnFJjMojoJy3odZeVf8r7HNkXksVCC1DyVcesWmRJod47qRe",
  "key32": "K33wFnGuPJCyyHuC8u4BrUjhct1LnM1QY8K1hi71mCwGJP3vT15L1yhyQpaAXF8AG1fdJSRJzVwwKF5aqbChzaE",
  "key33": "tAnnQHgn6RQcd3rf25zWUdLqtZR6M4LJyGWjZiWCQrnsYPeJxH3Q6LGLDPscBRVqCnsXVcpRatNZeqXGYgTvqm1",
  "key34": "KkwgGmEZXuniCHzxr1MFuG4hykJ2FpTVMB6AuX8VMzv2jkfXyMYKQ1YWdz7Y3YZHZ7ppyP1P55EwhQsWow54QMy",
  "key35": "58nzPoYwoyMXCQEd7cHhgt4XfNYi66TFzjV4MeLmyWHQSVz7iAKHSibCmJLofYm3DLLgAZ1hu7NqVokG2SmJAAy6",
  "key36": "43fWAqLnPvhLuysmvyfK1Z7Ygs9mJvWFbJdfQfdXFaioysMhGNk2WAqhshDrETt2o5mzAQFSfe3LHanViji7ztQp"
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
