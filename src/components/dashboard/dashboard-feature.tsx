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
    "3aLvNRpTgEJrCu81CLff9hxxKpY2haJwa36S6KPVhokKcZ5jzjBpysptV8eoPFzGftEopWrmFhnP9nyF5EzDfCbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smUWksiFecFxrqdUVaZapYFWHxGfXEsAhc1vKA2HS3ogZLVPaDgNpAzx3grgCfbvHRXt4u9ECw1i4Ta7im9poaU",
  "key1": "3W1wu2ZeBJpHLpREk6VGhxH5H1ht3rumWPu5c94gzB9QbRwBQnuJDWH2TdwcuBQX8kRc9iyAnJtNnTHjn2Wcc2vR",
  "key2": "3ZNK5QcLxVwn1P4NnvEZ7r1GnPeM5TgLPuvfGDrxr5UrHqqFXmcBoXhud32iDwkneRXDYBnvgqtuL8dYXqsNLmWH",
  "key3": "49DwpLWr3wLhAf6QDUZTZPkdR72Kh3VwuLxqsBWhiaYmwKLE6g1k8cEtFfHeq9HqtTPNS4MjqonFZPSYeRgZvHwC",
  "key4": "4D2mu8YaP3ARetCWbJuTeRmmdF7Tu3Dr1Y4EEd4mwoEu88aTQEihYDqHEpUJVSZgN5Zq46Hh5w7ntwcsbBH8qjkj",
  "key5": "4geL5MRza3VGbUPjwq2JqYGjdr39GHYtFGneQA1SWjoaofiPHy6gvmmZZbbvVtWL8MPyeGNrT6fHYafa1bkiaNaL",
  "key6": "S3ouXWATMuE4bn2yEqxAVUqb9hDwWFbySXjRobb1unDJnfePJtYBD2uNZWJFRfP4adDFB6TbMi8KMTSoZYFwaBT",
  "key7": "zipKMvovkbSp5RE19fUra625Uhuxti8tsXWyBRMjL933WU3ZQ66dS2CTfmTYQBzaY6JvjXe7GM5hHyqG2igQUVr",
  "key8": "2Ut7xEePEYqDckPEHQGJVj22kxsyhVo41hW14Xrp3SUsjGWYkGCT493gPcHGjBHnDEyZcyGYh8VFrW1SVBkW3LcT",
  "key9": "jHYiaEzJzgfCK2Jwgu2xporaMs1rJi6Qdx7NsjsfG6v38APgLMvH9Fm4b2MZKXsVpZeuUXXchoc8kx4Do2MUFZv",
  "key10": "2gmRFhFBKcrL7CTprYQbZ4sSHajT7G9EBU6ua2UJoWgnohBQ2iJvMxzJNna7bEFv4HXq6rXmfYgn9wddRMgNyV3M",
  "key11": "4RbJeutNghJNz6GphZjLXHBrEJzFaBgBNnezrsAEDLw81TrvM64nGgkLsma8pnCB786a7X9YNoac2hUYwnZK1Dy2",
  "key12": "4WPzmqj7s7a3K7RRWBhtNP2o2CEMttyh2SgyvF41hGNgnj7K9VJMwgz9Zt3TureHVmqPqkFh5GMegjppyAcVhX4S",
  "key13": "2dL2Xw8pHDVGunALP4BBn2nVe6APpwkPTJPrFxLEv7128rVBHGbgZRYrrbzK26E6M5Tqh9fk8cQjapaNGtSQsVx3",
  "key14": "8jHrb1FU1YuCJ5degpop3UjsmPmb6dSSjMbobenVDXk5wnwNKPNbm1J4RytNGeZVRvfRPgfGgUQMM1sFdTEQoFC",
  "key15": "5o5jxnnRpE5e4d1H8pn18hGYFpzwGKUmkNVRrJEf7HKwNEd5VQPaFaZYSMbZnf16VUXzVgZDp9Rn7JoCZVSNNFs9",
  "key16": "5VrN9kvB6J1386bg7r2if4rdXRxi4tA9GLEGHdnST8j5B3NDijV84ayGARWoRYqV78pRzTJHEMBAokQfkjURoD1Q",
  "key17": "2Cdf6jJSCDwH2aKoKnb5DiH2SQTTwoMJ72ij7ePi46goHEK4fEa67tv8n1hfwKsz3243AtmLLB98CgRsMqsKg6n1",
  "key18": "5XgNuEWgJpUWzzg8f2x69sE6EdHdNZsrtEnSgYnYvK6RMGiSG9vYAJ3QPYwNMQxbgiDkBNoRNxKqAGPF8BXNaCvs",
  "key19": "2AjPzfACzuJXLvAvcs2mg3uXaP4HAv8eVnyhKdxAH8JM1LyynLKcP7JFSjnZgX5XhnXsuQ5dTF4u8MvkYZrj3EM5",
  "key20": "3NQJayP9Vss8enGg2PH76T7DzDmcU8KyWQaWPuYbVMqnrJNVZJKYSs4XrmpwFNeMLqkysS3A4cZBpBT5eAKaXhYj",
  "key21": "nuVTeNjtBLNNDmxk3sFnSBYsac6K9T8aLW3FDeHbTEjU8BAZNfVqMLm2jhwoMpGbSeLkB8omovhzjMiZmbY75yM",
  "key22": "1W8VMHbMMgfgLunYP3WK5PaV8HscmXfuRzg6yDmytbG2tX6Vm76e4TKGMtbUJPWbEGei6GSoJuuYVyuAmFW1hsj",
  "key23": "5ZBGHnEDyMbbhy7uaxsb39dcgnLq1jmALskTczJhHSUGSFQKjazw3VMZVXZveA5drMfEwmMyHo3jHwiNYHxHTtmd",
  "key24": "3aXnoYjXWxCmhWVZHmgfbR6bMz38W7pR89qha4AyHoj2VBhokd9n7K249eVVPeer3RXdi1o6Cwboodgxvc3kf4Mf",
  "key25": "5H2RLc4t72P5U3AuKjuhtsYqW4goVi1qdKxnDs5x5UQb8yTTptUYtPFqwjYaQwKDHv4ASUC3h1RBfJeQVwWmmWjz",
  "key26": "4zwSsggjK2ERpBcgCy2hwWir2rMWhysrSdRr4k4XudSAmt9eaJ2NDK3mdBHDbqF1hH5HKR4XRa1cd3Vg8HHZGHEc",
  "key27": "5Dva78xidRRBCurZmXceEXvSvSr3f36GDPnxqru76tSf8VtunDcr1Z1LKik7XALg4kWTG6zePssBEcZBAWhLUqyy",
  "key28": "49hTm7TxYeZMHmGLrAPKbY8ZpGZ93fuBEfURYhpUqNJQcDen5eJTgvjGt6dMw1XzQaiuBVUNYR4qzPYsMQgFGSed",
  "key29": "5NXqZfgsmvvtnN6mzpj8WMcJhDSuQJcJUwX3NhoQyHgQvYGbEZcZUB5W2ti8fwJZBEd2YH2U5nwfYJ8GQcG6Af9e",
  "key30": "4tf4n26sTmn9ezyQccNoTVrWBeYugpLWbzTCJpAFRNPJM3srNrFGKu1GDzSx4cLAs4pnUsxK9CD7jVvtis151H8g",
  "key31": "VSXZ2BVPhX6bKPe577puBFys31RuBP2QpeXhu2NvRJftkRdnKdXqKTbcEc2YbtbDbfkq4gDr6Uk696GLxP3UjEy",
  "key32": "2eoS39MHTjVgNDPW54vjWjiMVa7ap1jWvRHR6quV6BFrDTDUnJtaLPBGKBdWp2jxfJLwebSAyn2XBcJLMtm8vF24",
  "key33": "uNnB4ZXpPEyDZmqUoFXghVXHJ9DgLdiYnLa41BYR2Yh8RUCWWoTXXxFE86i2LNXF67wsvi2aiodacrYs2BX9ibY",
  "key34": "2JGNkPbv26gr6UgKRXsnr3oBWfX9SqYxo33cMcHn7Rg9wNKfgrjzLqjLkjqtQ1iU3aVNn76Z3gnrPdoT4FDkmb8o",
  "key35": "2GHxPGzGySbwrZkWGSj3Lea7Hv2ciDwDywDHEx6vNk8CtLk9VsKaFiw46NNhE6YjZrBgz5imoKTV5r6VFnrSACKb",
  "key36": "NBNqDqxwvJt3fCW4WYU7NtEJiAUkMboGaTHrUkRCRZF9UKzNDipb4dZb91VjqWLtnuMRs1XfUTWJu5Hx48uv6Zd"
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
