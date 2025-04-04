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
    "5qDWBbUrJwuPMg7eFb3ysFnTbH6RmCsB9fvfnWv3wk8K8jLZ58NKR32oESZAqf6UyRox5RDx67pYT9hFjjErPpmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BkW2nAsLiSh4usVMvz3zEjFjEx4xMztiLLm5mUXeaXBQFScy31if9LbGjUTR24eQo5D7u7gUsXz4BBN28n1ZMK8",
  "key1": "3U6yqJt1RTwoQfg9be6Nh28wkC5XQ1CtThrwYth5oA1NomRYHGcnuGiNwiEv3yUU36kw4jdWMgzbL6G3AVJPr69m",
  "key2": "4Dupzmid4BLKXtnvSNcWcxmaPuqtxgg4bKw2RS5bdoPR1WaaP2hK215c2PYU3RPNRwu9wPcpnrgV8XXSsmzdXvTx",
  "key3": "4ioeR2teBd9THJhun2LucwjhQvckj7MX1eJSTARVujbPcXg6LNhA38euNDheGEMmZ86mHL1LiNC8t7TNne5Cem3j",
  "key4": "2HjNVuRza38t2HN7fGVoQCSAgyiqEk6mwmFtJNmF7zsyVuZ5d3sPG6vERbj7RaFpNVhU9XMLQ1f8FfCXKamV55t8",
  "key5": "59JLYfc7Z7vExcLPP6bbaxP5du8STdjqztjbfqdvxZUDbYSTnhPciFnM9JxT6nHbZmtTMV1Yu1D3vyKsG6ysV1rX",
  "key6": "V4x9QYsEDA4MHCEQh4jUrc2EvMr8y4Hi1xJxanoNLccKM84dW3Jnu99fdv6rrLQbuXT8SGAtX4opJBNy3KsAi7S",
  "key7": "3JGNLTEDvacf73Skzmabv5LNPncmPLF4RW5hE1J5DwV8MdGxZNTXKowGCb5F4h8ode2gKBTDGrNqKAGssHSL1Cef",
  "key8": "3YaY7xNbLhB4AtkANqmarJNwU8eyWjjZNK6pVxq6AahkbenUTSvBwX7yis4TdqYufjZwD6WxKxZ6ZDXjvnzyDR7u",
  "key9": "4hq9s8qmBAGAm1uKoocCdppujzv4r6gV6nSzcsQ1awr5tttEawKbS1nyZSCxGYwR6f6QCeKYRgQ7EWKriX7Lq8ww",
  "key10": "2fbcrRje5F3qgKYLqUEXGiHLHEPbrH5wZX3a99FmRpzqjQBzsXLnAJz7g7qTE54hzMR6x1nERbsNbZtNpNYXKSM6",
  "key11": "GCRTTgaMWnxgxnUkesKtRXz4z6efPyWQU5T9TdRurh4U1n277vhFmx8zKoUKqPvuiQdv7ACzQgfV38VAtGnS7Zz",
  "key12": "4MmYD9xDFR1yCCxxTrGZEyFd3kW15e28U1uLCbhkcWb57yMbGWSWnw3bdW5SAfhhURgqRBSLhZseyWkF21eGnLCp",
  "key13": "3px2RueiFbqZDtRexxKZN54bUFGaAHWuSi8qLb36Enu1Nf2pyDtonndNzZJhLqu8KZfA9gFDSdF27JCfvfy1HbBE",
  "key14": "od7jyxedQY7ZPpUZJnEJUvk6S8DD9AvwC15tRMnrJedVkPovuQAAzFueHQmSpx8TJ8UZu9QGQjobjpnRgzddrB1",
  "key15": "2pHY34JsYNCqwX2GEk1GnC6L7kHWUYmWdjSBdocdED6eYZ3o5bRaRXifcUNQhVxnNHwhL4tW3gqZUFJ3UebQB9dS",
  "key16": "4QnZJK88T8EcKa47yE3cqgYKqxSRPznheZn2KiKuNBwuHPk6VLAYgdkXdk2rnMY2XfjAmpqVHvMuFtPxUmLhuxqC",
  "key17": "22Gqbfc2WcoTVjRiRSERLWEXBRxxqZZjpkjwDhESLuipan4cazKcjdLwfS5CGrMwDXcbgN3JHtgCyPtaQqS9EDGZ",
  "key18": "39Fn3ceznSkypDqFJMoCzZg8VXbGa8QkHLrhvdGJMbmBoS8svyGUZTkCjvNUBkHuASzwVsMNherpb5D3uEUqaDG6",
  "key19": "2Sd4VTuy8iMwG1JtQcGsHUP3hzukrNeKwMBANvkmS15KMnaWWMqLrWyDi4JiEmMD2sEgdzV9ae2jtcUWCPg7rZhd",
  "key20": "2BkmDkUFo5WRBebWpAxKBxaNnuxpUML7176wAbXmHWcmuuspPWARkqM3XaZUVzAA8tbYuCvdFehcPuuVSd3vUDJM",
  "key21": "2t5kYJcLWxBaPyqpVSo3B6ZuL2vQH2foJvqaqdWjP27RcjnQJC7QX7mEDgSK6qNRgHGPZBRm1kr1XSoirijEVvzx",
  "key22": "5gyZ8ym5kRafbvGqV8dBZGtRZQFbfCsUaJdQZZAq5q2CB5NvDLh25YnqwPwtcu5DrPK3YYADdF55VkFa3vRUDK7X",
  "key23": "5KBj5qXH8RY8n364Dx43evF11PU7zWNtvxvY7KCPwJrBwbM4XjjWLZukyBDuaFQhLdTomCjypBmfVGcLP63WkYxX",
  "key24": "5XAAFmL1EvfPdmiZSun9CG43UvEMywB3r1Ygk2gxLY3XLEpmNeXEj9824vu1tE1CkEayPjwa3iCqFvr3tmwGS9qj",
  "key25": "4h2MmC9891BKNun7LtXo4ZpCiVXk3oWiTTc3wfrjxsDmvfzBxdKxtdVnbouhXKwjwCxThiwCSzKB1HLhCqnhGju3",
  "key26": "5YE3BVEdqGzCZmgvFw6Wu2cQGpbdTqShufH2Y56vavvVrWRR54bNekdrUWxJYEcrcZe5Bz4h3shA3PjcDgpb26wS",
  "key27": "4K4vJDezURdPzSEEDcXmVmkZKTNvbsKWJzK564YeCVyq8kJbsXqCaJLHkdghwzyi1HWoQ76G4W76ZLsNsHgULKLW",
  "key28": "54ZrfdWDfrwPga2Jw3D4QrHUM2SFgsKUpLWQPKUsHqqXEPFg9W1NARMonD9btM5rPHcSW4RxAGFenxKCFjZfa8jb",
  "key29": "3iXKmKNpyGQBXASQxQqHUX1oEjxV9woScP6us8y9qQsHy3tcvy5nYay8qUpQVsNjCxbLqRGgB7JYsLq3vawK8iWB",
  "key30": "5jxNmg1UEvXEydW1JsuNqZiQBhQDsJypPGudcAbgP9c9H9FcQRTCLT5QDEsmngTegU9URTGeDquApdbrgXG8tmAc",
  "key31": "3jk7izpXghejrVFgwaqPF7RjMyyWAgUjKxS3NRLQvyyV5J9rP7ktKYutsU9Eid3jkE2PathGymEJ75iphfTZwois",
  "key32": "4dKdZ1YVCm28Kczc2oNufDaMqtCeiDJ1iAZJ7DzP224qVtqCRbyx3UbgRf9nmhR2vTsUwKvNPW4Ntz3vzS8XdYSe",
  "key33": "3CC4DucFrygDBZLnUTV4np6vwrXRqZGenSWesZDvKaUZbELxwA2xK7kBbDxZ7hU1vH4Nuox9vme3T53shQS5ucYK",
  "key34": "5dvZAP2RFEsKv9byuXCQhEhPjbSvTnBE2XsenjVzUzCQmENam1qagp9Zt814fYcRysDjkiegrEcWTHxnVnvE59kx",
  "key35": "5eHhtbZw8rj68YsVQvpQAd95hBi4XzY6C8t4PtMPYDszxGxxjNNyq1tVxZJXVpz3DuxoofJS76XwjBaupEPGBHWa",
  "key36": "5aVnqBmi1G8ZfKTKkF3oTVbGGBD3UY1o3YTtTdE4o88iyi2VJ4tZJpQdAT6uUA8nKiAeqr44AtDcnqsqTPzhYc3B",
  "key37": "5sizasUsjLbde7MY8JR6kMSozNKCuNF5z4FzscdmdSvj8mYjNHkqCpKEXdgzmPMUGH6HR5EkQTVni8FyY5PbMeu",
  "key38": "34CCSTyTUBKRrtPwn2NW2GjbkHNnJ7Zju2KhihBoYzbLhAKUDaHW82Gk5mCsgzWyHrJ2QbooBoFcFCrMWgDsw8Cq",
  "key39": "Fos9Fr1jeSJbuXkmhxdnU8RvCc5VZkKpMu4RPMzvc5F7h871hHwNeRqrR7nymPMcMjpwpPB8RwJTuaAU3GazDgi",
  "key40": "4TwBwWuoyjaZhKycg5jYNkcdu5d7riDAwWnkjSp2fNZjy2pqz7Ubxw1hfs4tXb2D6T6ToANogfDiSbXmhmPa2etm",
  "key41": "64DpaWCrMCykyYzSan8BQ1tMLtPGNpvRUrFXKQTnNwTjF4qi2BUkQKzDNkY3F4Z7cGRbK2HYihKBB2jGYQ8f25Kv",
  "key42": "ABxMGJfABANiS2fHTBD1uxXPCFzRXW63WX1WbP5Utewyw54r2stuqhEJYrxQxv4e7o1EexC52LhF459XnAmoL3a",
  "key43": "xCPRigVzjTCgeJRpSahgAXCcrvW97McfmHPXeLPk6FtFFsrYAGv18yHLoYUj3NYfxC65Zhou2iLr4MEoASQgHkY",
  "key44": "jMFRcDSqc1QPxLBNz124uTL7dgDzAW1azed15Vk1bhFwCTt2UsRzHrFYHHqazwujzgSZg2geBhs22wBrbRCq5Ex",
  "key45": "Wj2cJZ7iG5zpWBcqZxU4rz7j8MceuC3PfquWQWe949GUkZ8yQ3PPBoMqQ5FG5dUNmNiSKk52YDW7PT4r8GDbVUj"
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
