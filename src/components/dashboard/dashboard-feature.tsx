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
    "3Egv9QHc7RzbaZG7awGs2DxU3WNEqfER9yHtHk13e1kxB7GYkajVReYXhS6B3FLXBohUaz7PNHH4AsMkeFkrtriE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dei3kcQvT1HYHEgsMxBADcT7wH2Sm19ugLArKPny5SYFbkLg9YjHaxmtkdiL2H26Nen8F4xBkGD3xLQoy5M4rwC",
  "key1": "32a4kRZpzb7GrURga5wLBeuf68JLahX3BSQmogiaGi2WHqxEJL7ADr9j5E556tPWxy92LGdzUssauCW91dvJXzeR",
  "key2": "4WjcxP36wY2BgEkBtGdwKxM4QWsgCzVPLZd8CEA4zgso7eaHKbshQvV8upVAStxNnBcgnUsfgPVQUzVf4sRU1D9K",
  "key3": "3DPfP3Z5nf3o5tU8XXUysd6YexbPEDKK1cNGv1Sh5kwXgmvm9mHKpqiE3HAfVaC5jHzSAXhGu7y8W4v9S1ueWLXS",
  "key4": "5xUhiE1mnsjePUG8f66iM2ReShVjvsQWsNMgNs1NvL2FanVM3QBff3nvrhKgo5QN5CR3y82mAhpXSCqdoRQzjsig",
  "key5": "HS8ysmPJEH92LRAmEs47F3TuMXJQgTrCsjAPvt1zGAuM1XGnpaLPiAMxvncBJhXBLxtr3FxDzQfqxhABLHEiGy2",
  "key6": "4aTqgo6W2AUSzHMM8qvcR9BmAWFcceGBTyGqVmVZbcYxVRRvHz4y4pjyNNUjsMY5suwqDbP78voxm4dSbve5c5kw",
  "key7": "48YizRY5K59emnXhK5FtMnMxrXPszjYEMwMbhBKeJSZisX7o6toFgbZyYLUSBhCGX8W9wtj6xqpfA87anVHBjZgc",
  "key8": "5HMeZ9LMvLEhbckm3qcEJN6vt6ZgqWEedn1fMCWVmudfYSyWHy23Pd87PgYK3ayG79QM1B8hGZxgSje5q5GNXeCU",
  "key9": "2jogt7SRXNiTB36nC2oXkAt9tL2w6K5kQeiqUcD92iEEP7tpTwKPqVdQVo3GRdMNYBfEsWsgSfip8zg4jLrVXPVT",
  "key10": "2QCiEgWRvqGrhpAjLSdF6bai1vwozWHssTxRVzs6fUW8moZPz2Gv1PRoCYU2HfNkeWkmE7tJ5Uw8Smif1jb17LX3",
  "key11": "3Ciab5W3BJQCciNxfWiU6TqZtdPHPu7FrBGS7iqVDNGWAtan4pidBYHboKCR95m988ktnyQvp6VvNPJXT6jKVZKV",
  "key12": "4WhYjNmTLxcNRHSRyoPKFmKoYKMVMVX2heG8txfS1h3fCP6k23vDjfBCe89Y1cxuEyftEqt4vMvXbUS1UcqHxKq2",
  "key13": "3BryxMrdRzaj56PDqS2N2MxSZnvUkuwXxY1dzKC5XLw7y2xNtS8A7tV6WaFrFyBYYiz9GfhdfgCpGxwyYdFGKFz1",
  "key14": "2ze4fJC6kh7b1b2hQdTNMRggG73UVPQKTiYMee8ZxhGabSL85y9wqsmTBsBvL7cenpZgqrh6Jn3gnHLATDsZPuHR",
  "key15": "4AfvM4terC76G6U4LwA6xXszzW8RAdXQ598BxTPYXcM5jvYwikU3XTfLv7UabTPv8X3Koa4y3ezLKJ5GcKUjn5L",
  "key16": "5Cc6uqPrixdFeguoZeq6XYPhnXjv8CfZ6vt91YEgXGYSdhzjhbLn8EdAcaGZcvoRQjSs8eZ27zQGbA6L7U4n48M5",
  "key17": "MboparpPVTKVdrxZhgvzZki98gxc1dHUKMh6XTQqyGKipuZF9bamvAdBgi8YTxhAAxKaX6JBusHRpq9B2Nrxddo",
  "key18": "AY2MNP5sdb9dESL1EQ6YxhFQtXsNVfM3KNWvJgx636rCjuGQqjQXJsQZMhhVNb6ckEqZZANQQmdS6coAnFYHuvP",
  "key19": "e7gm3AjAfM2gq5zF1WWbUymW44XjUeWaDW3cZaKueXmdvfhyFX5qU4STq4CSi6dFyPXLna4KkwLih2atVQCGTxi",
  "key20": "3xFvL2r8ce88fpQbpTi2Wt2YepPGojfRRULpMjuMhVoRZm339LYLMWzELL7X8kAHsmCxjKYLRHVUxVDVg3m6sV9f",
  "key21": "4CLKz4ozKr8eyywfUR3UCxzmAKpaxijxw6ThJjL1skjEAeZHdWKsdKKTqTfBfWBKzDAhiSkU9PwKN9ZMpp7CNFCq",
  "key22": "5XB44qEcUAdHSqxDLirD8YqnQRB8dmXHji9vFgAuSzh4735Ds32DLd8V7JDBdf4SFySZABU9acRthhNJWHX2GAe2",
  "key23": "2KFRXAf2t8FhGcW8NNnqprmzdU7oBbJ4xVVLbTS42jVVCJYRUmkrzbe25wk611UxHtSL5hUTMLkhLcctS9oqvkSP",
  "key24": "G3Gdu2QfFWZFWH3uNErTuks4Vcn7dghbZicPPjF45apgSpvcJEtnVfeNaY5mWUzSbtjCkqnLNQAR7W4bHQMvFFC",
  "key25": "2KETxkRBzuCeV84QVDZyn22s7HS7F3A5ozwYnzNE9Z3ojF4AovWko5auvVaBX3SbZ7FSZ4iRmmAf9jaw7CCxJGjK",
  "key26": "4LE7fnDK9CaCDdiq1eHzLCQPdztinsBi9xNKB7w1QZCU8Wpn9MiVJSgEiYjJE9ZaEeaEHgXRKt7fRFXA2vmNYg5g",
  "key27": "25naqsnq3yRdUFt5omPcvwugStjz9BSxskcexQGqLn7b1AXRjTgZ1cLiF6wvaHBziQ1uqMjX4PLuPKfVD1efts1e",
  "key28": "5PD8SG5Rf9h1e812zhXb1dvxouh9tRKWXKP1qaasTjsGWuMwNnmeNobahJi4wWnpEHvE8AXa4pb4xoiWCs2sSaiW",
  "key29": "tv4oiadGD1t54cM8oY3M1kfSLjL8uBrbHn4KF15DqvmNLJkJfxpWcZ2UTp2cAU5WUPpVfEWDHxGfnoyEEcWiHiR",
  "key30": "3kfDZBeSYCfkaAYjiTAHocvgJYWzLwbyctCXUSmLSCZ8rXUTcMp7iVPqAEhmuaXDKifmP7y8StjmiZoFxEqpWac2",
  "key31": "3JdaJK6twh4ATfcpCDtSYSZ564R4qL2ZHHinEq9DjnMynyFy5JLoHB3etP8WZYDY73auJL85KfRbR8FcK7DqvvH1",
  "key32": "dqxdAPkUUyxFEDKXUUJzvBodmqAurvgKH4CNTanynJACAeGXaQkUswks3z8SzVVrkGeFhhtodygbrth6m94qgKS",
  "key33": "2HngosbijcpUPfvN277jmmrpbwkdsGYFtV639i7gH2uC17Eyro86gYWkfdZyUCB2VWGMnmuHevK3unzVojmgmTdV",
  "key34": "4269wsxY3eyUU9cqsSK4Sn799Lk3Aoregz3fpUAC39Se4gC9WM6AHRQqGNy2BctRvHH3vhf5bvgx1EsTfvNjGEfB",
  "key35": "nGJx3VgiXLYNFFkwwmrv7Wywwe8cxb6LF8pgDhhbdb7xc4surbEUhduV2eVPVu88b8PsKoDxDCYm351swL2DeWx",
  "key36": "2ducNZwTqhWyu36gYALf2uttLGt5t4aCPYcUk8y5SVMTbc3ZegGKp6MSfwoXPCoeDVhrambUzhRHJYfeBw9n1tNj",
  "key37": "U9y9FsUVFpNj2QWJQAHaRiSeiFvEaikzqzPnReHpjuPUCzv4jrL1wxAYZRhUMN6JohcrRoRyhNsT9YpMn6Rk5Yp",
  "key38": "313dMmWg9KxD6NW7cU8mfBNvETkKuM73B8kUKLvW7ti1fNpt2phzm7qSR7FaTrsKNey9FzqYReFF2zfEscSvXYYZ",
  "key39": "EFEMKdBZ2hEswAyGsdGxXrRZY9oNbLwAv8Bh3irM3aSHKU6YTgv8GQrU63NK1ernYJXcDg2mWmtwKWxQkMwr2N3",
  "key40": "3grAEAwyiimmnDpJteoQwwGGc9QsL7D1BUFhbkZGEDmKMshLXfsiwrEMfX5L9AUdMVDc8fhkKB96UCyTcw21rHpp",
  "key41": "5Z9jhu7qSGFAJgA8JjYv8Li9QtqAke46ehkYsfExRp6LzWN6wNRPVNHCLYCCVeQMJ38KR9idqCD1xeUY5pEvkgib",
  "key42": "xtzuZYys7ZzpDYr7M9JevYUbCcQuqdaHAcWXbwsKkMGSBWEDicoMzPYqgVc5Ni3rwYFtFbcvpt2grxBAhcbkp6o",
  "key43": "5Q1JkP71pePytTXjvLv2Kk1EsXNfdwtVhB2qSQ75ttzyYXHFeJbNRoYYJ8GMJrcqUbcyj32bEBX4fKFegiaz5AFm",
  "key44": "5sPzYWeodcTy7kXWQe1SwidYu7LnbQXwAJTBp35q68zuJHiKSh4KkjoNrr7a84Rwz7xsxGAHdFq2pdozpC73HUHh",
  "key45": "3kMcnW4J9FraRF4dedsZSsx2u6o9vPAyRmh63tsVS227Ee7rH2NfVPmvdTwA87KiLTxs67U5ixs1Xh7ctTVAFTqj"
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
