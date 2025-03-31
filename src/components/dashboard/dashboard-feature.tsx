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
    "8fPaExLj1bW2zBNYzpdSbgZPARXaonYG1R3C7jN3HgmEgMPj1o8WiFGBX2Pvt3YMvoATxCc8k9z7k4fpuFoPnpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DCBXmEzLb5n8qfbbpGbtwhXaL1DEwEENgJU42WrdcUxK78kymBBiexzdAn6KQJAa2THRN2aAo8Zb6PRu59J2Pta",
  "key1": "3o9RXPDuyKWhnyfLHCsFgQ8TUvJkaMY6he7JsG3CX2Ay4fkBT1BartJD4qXH3UMQ6ZmaoYFFpfcr7xkfd4GFBgfD",
  "key2": "kDd4WYMLfNTLWcnyfmiCpyADG3cYEMdoKz4BVvvDZcm8qbYw4uQ7dGSJAy77BVAmzP1F4MnS8W7mf3HQV8m7KgG",
  "key3": "9n35aDJk5MsjzXNkUwZe7jfQ1xACfnAsv2WvXjXK3GzAcASgwAaMbAEdiULEBhK2UHzxeVZcPLBxaBMY85f47Qr",
  "key4": "3pSdnpntuGPgHQeCXAwp62iYbtUsZ2cpaJbUHBQ9SpLdYNiG9FewY6rCNe976k1tJo5v4JJfT9BxrVpM4sevFYtB",
  "key5": "2i34bt62tdpQA7arCqzrfU1rikg4qeqQpk9x7NrXdtGE43u4dBkdWjPRnRVwJZKpqgu12ZLqD5tVcUCQLsiCQgq1",
  "key6": "3CcxfQVWQv8bFcWBeGufHyMaJrN4EjGRfZF5FzzM9Eb4hFN7MCCXSAVqXXkh5EvjekLAu7aUKdD3myoPCL8GGqEH",
  "key7": "66WvxELCg2VnAC88Yint4nC5srkxZHKBmTgFaYPRL731C1ai3Bok47inhBcSn6pxjNBy2ti8Ts96bCzsdVQBsm7U",
  "key8": "3A5w6eGTSQE8ptDydSQHvpURFtEMsC1MD4JKyjr7RifbEVD8gheBKxvQL9ueRw8akSSnLyMS9XVNRRsYE1wQXmfs",
  "key9": "3xnKoTrCv5tGaBKSiSLmWQqDK69rNuijbBNd6Db9A4SyRaSefJFevWKpG5Z1wuFaptacAMkLBU1GE9Udhh372Wxc",
  "key10": "2UXGDv8oxy27AgkbBJXJzSxaLZg88VDq9FShgoj4K7nEdWQKKwn9Gh1CAEe7Toq5rY8rAGtWbLQyoCGqC9CorfMp",
  "key11": "3cS6srLhQeUsSqhg5qRizUomZHxw3SrPe1xTaUCadDxjLHc17xe9CrgQ56L4MADzXzD62GY4ZauMBEHcCKgbHKz5",
  "key12": "2Ft1kcE9g8euoPJAWRox8BaUTmYZmw3SoAY8nvGuNwofK1QjAfLaFe3i6vXR4igg924L95ELXctyNbTj4WhhsjZH",
  "key13": "4zJdm12PKaEhBEVxWMkJGNe8syQjoVvDARX6aWcSQn62e2DYkiexpxqFSrUjdfxGqHHQ2oWW9Vwe7CJM5C67Nr9y",
  "key14": "4Q2MFnpBdA9gRyz9GeSQguEyhWi4pJRsL8krVYqe5MgSif1yevq7aqbbGhjSiwBEQbrBZzAMVLaA1zZ3QhJkC2EP",
  "key15": "5u4o28yYpYDneAmMbnKWoVpyaccUUMD8WFyDvH7wgvFMksfTgcqC6oDbHg1ApPXeTYNvyuiFAT26Mj7nqqxaZ8Gm",
  "key16": "5sxZzwDt4TJycKCf1ufpdJMdKTpaS4K6sD1M7KFCsUNQS6xaYt2Dr2ottjVEMbbJTqYh7peDVn7Xm97dAhuX5ksf",
  "key17": "M9zfeJwPndPHCbB3vMYZHtMsQwGxsCdjXHUP6yTD7cuU63nQAS38FsRi7MU251fuBqg6LRm8tY7sxYhftgCtuFc",
  "key18": "24ZDedmV515JGtG3YCVcbm9XgiYQmg998mFRnKA4SaYw1ck7Ts3QLdkN5ju2yoH4eroCZtzSv13Qhr3FWYAU8Nxc",
  "key19": "38t4oT639NqzLReJ8itarY5EpS2ppcMwHE5Ds7bM7fsFJB36JcKpVV1qGxfNNQGsHTzNDzA1ZPxFXR4A83eZg5HY",
  "key20": "4eBWPYvLuZ14e14zU5MbsQtHLdUFWgEoyYnukpmuvKv9p15nN19NuuC3Y2gmGsKv1PMBSJCnxZbhRwQAkh1wx24t",
  "key21": "xZph3YX3dgrYt8QMEBF6Sa2jaZVrmcYzTacYoavzB4CNvTwwLnGLceRP9Ukw4AxvEankddsxucm7UGZSURKwrTn",
  "key22": "3wq7yuR2gxecuPPNtS57VFs5bevDmAfTVypyUuJ3hf2LKu7NcDvAUpf7SSNN4nwesT8FE8THMyWj5VG4RbkB4zo6",
  "key23": "3vfgc7sxRiU6pLRmCQzrU8RHzNtKVrPRo5DirAFCLetdByCfGbKQDi2m6HZEQvnhRxbuPyqJfBBjtp7HYUwHF1sj",
  "key24": "34G9Tn46C6p3ZxMzNR76SX5VPanhkA3DB7uhGGboN7oAX1zZwKfLKJ7fxQW3ZkDgthDny6TgWgiD225srmTLhP69",
  "key25": "4Vyw9q7Cnj7qLPWqCHtaJANdfAyFy1bLoK2zS6N5bQex1nZo3AcRvN76a56XRHYzYLEbWJh14TY9CEBRpvoyekYX",
  "key26": "5d251SN11AQgbsh7aYBtpet4HH3T4HGmjqKbSUrUNViRikeMyyd2jw8d7wEy5ptRCfoDcz1AAwoiEbVdx6HNUbHA",
  "key27": "EYPuMegpwdAxX5hN2oa2LazzVWnGLW9qFq3LL8UvUdz14vU8UX7t542tnibwnSHWjvs4jMcbfkwE48VaWBNXfBv",
  "key28": "LdTLWQzPQGuBWstEEjFUh39vogbMbpMgzTFzHEKcSXNAXZQeWvaKPfDiBW5Fi1HcoGvVvEMm1b7yfFQh4ZMcH3i",
  "key29": "2V1da3vXwxLxrMrHZ95LUYd9dN5EWku3Z9K7VNcYnfdbi1c3KHn5H5Q1CtyoPwqaE2icL3zNdHRroCNTFbYHrEGC",
  "key30": "41bbXQMZ57Zrhwc9YYXgUkoCytyegNg2mWopzzsbGx6WUMLWPt8UraCnTgLHndADzBTLfMD82A12qKekuRQvuFw3",
  "key31": "4TXXAT7W8XNwsu9yAUtYS7fjn2ArXXaiYYRSVsPR7k7GTcjmwU8tBg6iqwFWknFUanxhH7QCkjE2HqJuA4ZcjipA",
  "key32": "2PwwZYutXTEDkrymV5ToGfYuRU6DDwXN1L7WKU4Fkq5E6PYxbxQobrmWfb8bG6eW9NRv4DA4Gkn3tiJBjD4N6Tou",
  "key33": "2mBRRgiWUv76zPaxaavXPe5hnkJsT1c4iYK9tmcMbs7PwDBhYbXPHYhoayBDFuz5N3dBWPBhJJhRoemf8PypzBT2",
  "key34": "5GG1ZUkReMY9m4rguBKpGLDR6mKnvs3k1WZbcNc2gjUx4TCREUMzRdLn44ji2pYZMAv47y5abytu1rgZXAfDfg9Y"
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
