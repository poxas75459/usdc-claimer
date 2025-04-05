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
    "3XWWvaRdTeEpvxGcXZUv7BFyKnKu6FRWe6jh7XCexQr7uVha2i88U8Xi93dHUGvFtfT1oHm2jKHDbTy729VXt2Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fKVrV2WgqWcn7AKQsw1awXHPHigfLsoKfPi5TazQH8MeocVWMCHsFgVsiKGV7LSrtrXAsJ7qBYKUNbwR9BYcmY",
  "key1": "tis1Pw56d1x8yRkUhK1b1vcSAscqbgr36ibcJiYeLL4mJsL6nzgCMD261jf9nTiiKhri8WZ736FbjHYYrPJ5PSu",
  "key2": "5haKRFfswyvqJa88vqpn9FbrRz8E5F9cNTDxuMeyDMW6nDrCqMeYQdRmpp43VfowyCbfjtfNCTPfTXuHvDtY9S8T",
  "key3": "3xdsycXYLjS2eiX1tMNqaTtSp1yQ1AZcJoPhfiHc6Bu2Jz5VXzaup7WMbTbr5vL4zGb5Eb2LXkc7HfZ6cQ59QqpC",
  "key4": "4o3FmvJFsm7xcAgQatKqTcLPKs1yT9JPtae4vGiuJeQdwHZh2HmnSUUABXRZwuzhxokGeGSibKSmZSAuzSn2Vg3V",
  "key5": "44WnYirjxVBwjmQBobUkSZ8Gpw8qSeCVSNxro1bFc865aVFAYTV6n4pRAZ7Wr4GShxMS2ZCgif9ieeads88u7bvs",
  "key6": "5ZfoARXdji18t8wzfuQxidAttWiJkrsiguFPrCVmM3E5Q22zLcLzSUMCJ7fgA9whe1EGgDcoeswquD1AMdNBYhws",
  "key7": "3pY2HVK4GNrhFcGSeGwhyBzSYFwfgxWZpHW1P5e1bgsB6X96KrQ1FH4PH2sfrwsGESkNnx4DcVAxLfZCuCtHVxev",
  "key8": "3ikQTbYvXaZVKzL8gwvrAYSMKRBVZ67Dmmwmzdz1mL7N5RpKbdE2Kv2RpUod61qZn2wHA1j54TW3rnmCCQ2mTaMQ",
  "key9": "3r7fWYz98CQ2VRpKB1rYmaZmn3qkQ3FX6ayHvPH7JdyW155zCoVUXzQoNsu2NeXeRF7w2TzbmZwnoCFg31KaUQc9",
  "key10": "5sq7j4Uu5uKPg7P5ZxZo97Rsnm3CGok9VspRmDu7njbwJ8JJWYwjXyC6N4dncVt534PQ7y6fFGBtF98PoQ8GstuU",
  "key11": "5FHwEsP92f32SaKazjzYgo9A7GELrt4BbQ4pdwFgP2MKsp6fnUZ9wPLjweeULmnvMfBtVsDssBFFR5LNuibFVpY9",
  "key12": "5QY2nHLkCimBjFxBdvswWRuUx7ydNTo7SVkPQv7kaoBLCFimdGjesEPxFuDzFr8KDv8qmC1Ek9Zh1DatGTtBrbrj",
  "key13": "svwMB9bi6TioZB8cvfbs1u3kUfAS1sgBtZwLZFgFaq81xgFCGpib7AuypkLnTPYLrY8QL27EWQr5gbpV2PT2yeM",
  "key14": "3YmiqZeAohAaE5JVRNUm1Wi9bUhqJCS2hoPnQjo6sCS28DYfBwrYTWNE7Y4S4jGifjN4L4E8BTETXFy7iErxDg2z",
  "key15": "2sysAtnFiBuRgP1F5UtoNhDfAz15ExsmojdJR9kRamUM7dQ9RKHbhPrnBjUiQAY881G6VbxiikM45oy79RnfVgnu",
  "key16": "3HAmxTczM7Dgo8NnpQbu9QnZbKKQnaeyEH8N25T9BDUnN1bcbGyvbuaS6Qpc9MJVaLdCPnZgaBH3iaSgFJR2Rzun",
  "key17": "3Aghvk4DXXc11cB27QceDvDTvyS6xwo6xA9ZEQQApb1bPSV4MsBsAaLZYHZQ3aE228rF9B8TngczctftqZuZPmEL",
  "key18": "bhpX39tSxcrnMEwRVNxig5zaeJ7zixqwjPKsnm8o2WJBEY1DU4dYcHgFgjdRHfETaEghKe28NXpu1kp3izwQcoA",
  "key19": "4Wv4xDwBgXFV4xouJm24E7PJwuyQbesZ4m7187ghjg5t3uqa8zKZV9vVwnJUoLazycyuL7dLTLH4wus43acQ9sGV",
  "key20": "3YKTYxFUjLZmmQQ7Tj6PtuvmKPJcEYQ3zc2Nu9e84U8K6pcFcLtKH4eJVE95K9xM8jpxQsL73eRavrGe7vAa7bmZ",
  "key21": "5gDmmK9FUtT96mbsviyfawvA5oRskmknvX5gu28P7Wrh975Y9hBq4Tyq2GW3khKLwvSxsJNznVu9kw5ruXMhFYko",
  "key22": "2dFdhjMh4RMmQ6ybwFU28LmEytfJCE3DgSWq2YTPYbwSBUvKv3NzamicM9c5LP6scaAZvdvXLTAXptHeXbiDiRJL",
  "key23": "221h7GzV3aeMUa6H933UPxYtFXS74y1XdWF5Cfwh5EiSqVbfLghQiFxrvJhYyTySkbyGeY8xhXAKbgZC72YJ18E1",
  "key24": "2nGPano776AJW3JBJkptkmyMZrPpM3vFTLDsxioTPgzpAAgPkSP8nkZteR4hjnxJRajFpcUmC7y4PqEs2vjRx4pB",
  "key25": "k6EktR2YRrLzu2eabqKPjDEGUS6oiVvn63ssxC12L6C7PHd6zA72nx8Tsutsc3rNPaeGNAT9CM1B91MbUwK4Ws9",
  "key26": "4QEpwYPGFAk9RxeRTAt75x6WHhQ7zrzSRAjjYAFiMtRWB7hQCQEESZ7ehTBa67tyFQmiTZy5PYEtmbjr2UN8eK6P",
  "key27": "4KvJwNfkPwNbk8aokVmdAMZ3DbFy6Y5U7RkKsJcwQhLpynVXgEQvGVpk6gKF4QpFPdwBwCxbrvwcoEuPa7fU2Wj3",
  "key28": "4hidXatiwxwKWSiMF6JWUnN7t66EiBud7Rfne6ohgCT1Hb89ELCDZQqwvRcjkrNSVdmYvT8imT42DYDYR4upmErC",
  "key29": "3m8piWuKEw4MPaDH3U9v9aRCV4uQUiNW3tXtEJFkbFCdk58GpJaENFe6ZsNVaTrxJHLGVvdTtPfT89LqvfxzwUbP",
  "key30": "1wjhbUS5Fb3EU5kkzJDBGDQgmS1QgEdPmS11zyxX6qo8JYWzLueYR3dUuz6To1HVcY8WF7hHvFnbE6pJ4hy26sh",
  "key31": "2k3pt9TD2sRyaMZn9iy8HXb25aCGUdSWZa3atjDRfyNqyqvg78GRFXmh6Dqmn7cfoZSimn5ANxV9gs3QM4pb856L",
  "key32": "2rb1CmjGrtmR3KYkJrz9FekeWo6siq21q2DeK99DJh5TaV2W1zVp5XM9ddkTJQUws2kCXZAqWrZkmjSYubw5hsEP",
  "key33": "3HoBLCxG5hy4UsPeWPyxnuQd4qpmgtZWP1i1bH1duGCdxzViQ5dGYu3L7TX2BJjLst3URihrWABHWF7TYUupE5aB",
  "key34": "4H1WLbnWvCVJxM3gBELrquH7C1QPV45fRgFPSN7aaFp3eusAk9CAdN6aUAJNQXxcbiw4wKQnAsFPmKP9WBzovZf7",
  "key35": "3RvcCSsA5MQcAe18CY4M6VrdKQFP84sN9jFBpCQDfT25f7XDDfje63KQtaDNDMxjPZVRnA8jVenKzRZAWVtndG2f",
  "key36": "2Thp8Ryjrjofxom4ckjm9DRCpgxDZyBHYrjv8njEy1qqu6eQHYmR2cUdLsKghx3K6qwmevhqZcZWQ9mai8Hsk7BU",
  "key37": "3dor6w4jCvDg9cyVopnxYLscWXNtXgJN6s2AH87N3cR63x28y47HoNCN95FevvcW8u3v1WaMJTdLhJY8rekYHYzk",
  "key38": "38TgXZGny584QKNYhQC8peZ1d9Tk56x7WFV1hXLYgk3QsoyNb2JxnmfR4ihbHu6k6YhMfRc6t9pJ17uzgLfNFCde",
  "key39": "5N9uTG8EdqojGfuYSKmWBx6Jajpk2nuncyLgBd3kika23Y6q5AhCtYTdMAutdmcGz4knnb3WLrUgFRBrXXbPnHvf",
  "key40": "3tw8ZwVJ5E5ye6k78yx63r8tLfmczcG2231B5eD94YrrEqjt5HA674VX5oTJRsLdbLANU7nekDUZLaeJSE91qTCi",
  "key41": "4V5D6SYRf7zJNBsUQ7icrTki2Vq9oZnhrf4GBGgHWQ7HRHuUESnBXxDZrpFVEgZK51c2htHGbwt4fPUpWTCXThAw",
  "key42": "3wVxfxWS61LZTWHSfVCiB88SX8ERGDJJk1AUJwCaaWNYVEuWhpoaxWC65YcjwmqbByR2JKjLsashL5cjMH1tNgCz",
  "key43": "5bXaQgRnJ5z8kezqkQZVaHcpBgMXVHVpskNoG465ujVkrYeBBnhEVS62jCpbgfGL1YRsK1qXJ1PW9sm3wrTCgjgj",
  "key44": "4UwwhhWQWUYoqjPsupuMnGBYEUhiAvzdKKYxVcuAhrTujFBGCDThCMYuEihYRrTMo2K2QR6c7mrvtqobH5sbNqhV",
  "key45": "4JQRsZqjwrE6UY7VzoJTpKurHvmQJVQ8kzisJSjcCmyZ3Z9DN7w3mX3sbJBcV6nNvivNCASRcFaFQHCzxAVVuZaN",
  "key46": "3pTBoi1R1un64uK4Jon1DkJXXyfwunf4SFoB5DFuHUTJb1fGM6JLH5Tj6skqCrNNKp3JEEHaHk4MeijmEPgUeTWB",
  "key47": "4wo1QZPwKswuVqozKX8fmkRDWZBjHuGd2Du3QRZj5aTyPhbjv64cZBLhLU9vAti1mvHmfoWerHMbseRevENAULJY",
  "key48": "4aPMtafe2WT1jBhySP43u5rJKHoFHG4AKK9DGS47B744hwZbRsZn1krGE1cSYeXXHYkPbTjdrSvPaAYcJhTjVeMb"
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
