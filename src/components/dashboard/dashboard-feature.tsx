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
    "2Rm4rxTX6SAHuWfmvni9mtG19DC5iX52VeE2FKaGHbWjMayBZQwG8xoBuNCEnm7h4njRbqt6pBMMpkUAMRGaAZqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ke63Myph9N8H268He1ZMKTQfE41sG3m2kgh2PpnQp9DquroM2jTJJxPYu98uEKQtDnZuFW6iipsGxscraE3BA1J",
  "key1": "3YABwHCfeUvdPaW8e56NtJ6oyRhhk27q9VaubPuWNdoKSXqo8oT9yD9tf25iBu2hqEX75rTXBrYkARrVULLagA48",
  "key2": "37c2C9Z1dgLGtmWjEptezpXToSuexntS3589cDp7D3RKQPbfHG5L8rdb8JsvpTRkJbghH4mZWc6PaNiu91ShUUXq",
  "key3": "2hr58dKciXTXgioNmX668DeoAhYb2tFfirgMzZjACkRSmqbV9GQ6bDxVSBC1hjYifBXUwp4UNmKz3Tvz8BJPTZia",
  "key4": "4BBMFW4C7zMZRFVNRtdTFn394mHQFKNXpEj1gpgkneyjdHvmDyS2xzSBB6ttywz1CUGSSzsTEK1LKeXc3xWuAfaf",
  "key5": "53mArFYydrzbh7HB4FJEwtfCQX6yZ3mHSbmaLP1TwSYGsDRUeyjxVZbURHwRFH6VKfxHtiBo4SC9x2QVQBpfWX5H",
  "key6": "4Lfwoz7s1ia7RdjGt8K9bJdUAYJoRwJDH8WdsccYutLKjmDiXgsXHC7zz4HtFubLSDRFDNkijnP9aiTitQguBv32",
  "key7": "4Yu3oxik4CLZo23RwGkbLo2aRsJVb9NF9ZsAEPbrqzCkxsEM9C8Cp4io62VbfoFGF8VVgdzhw5cS25P8NgVZHWxX",
  "key8": "2zrFes2yN8SyzNN9fUSND1g68Q78LgL5zrx4S6qo3s9g8zeNUWgxEUwTBag5GCkCx62jukpGY7ziZc2UAqo5SgMM",
  "key9": "3TrZXt5h6KuThcgcWcFRjVJ5bomEUum2i2rmtLXvcyL46CC1X3Dp61upxxvyRzAAyYdE9kozj4cnHACnNipFrG7g",
  "key10": "P2bQj2HQpdSeRpAMTkN8rWHf8iPqkt3D69Qc4fcTPyudeKXSLYG3sLdffiPGafu8N9vcCdfM1ES6ELvJAh2yNes",
  "key11": "5QyemUuV3kweyDaCSKWniE53kdZVvtQSgLRxqVR6zrHMUMiEoV2imFrU5LDu3KyJkCiYUSVq2iFkw96zP7NxEDAH",
  "key12": "5iadkVj5H39NcHNG35penPBmt16B95BJoEVbXy4PUoky11msre7ANkFrQu2Gme65Kc3MXUnE4xtMDedBmtx59Mxr",
  "key13": "YMR4Y6M8BFUyn9v1ExJQBKku2ecQpWSenhs1v3qiTqT5ufzSJ9a9H64UvVKdnKNtJiWpuSsVaMvCgsftfcnxQuJ",
  "key14": "3q4y8Jif6Ek9zaJXawfS9JDkT4aJRPCfVisnh3phMgFGjFAcbB3eKcq1SkkzxWfCnqayLLN3AM6YWUAu4aNNWiaE",
  "key15": "2P3yvW7hYkjZek26peiUcjyJ5ngqjaR1U34HHEFWZVUPYDYMERbk65m54UVmffMUfCftG7d77syf1yLG9nUFipT3",
  "key16": "43HFFS9HkPEHhXNouRCBCgCKmr3eJLq16DHfDgqu4SRJ2mWxaMaKQeM3xnjBAzkx5JLeMy17kBHSgFV2RTsjUmYY",
  "key17": "am1QjawEmLiyA32JMhyQJYxDhbFpxsXxXhW9BJjPyBeFDVi7QZzcxYhkdV7JQBjYYU18pxMS8WNa6AK1kY6wRsy",
  "key18": "5H6QBb7F78KLkH1uByn9AQz6JgHQq1i8c1PkTAJFiUAcUdfXL2QBUTQUyMJuFdjypSJmkscxaSThywyqtw47yDKQ",
  "key19": "4LVCPKDHokiyEpL8sCfajXWZpuhvCuzRFEfPc8NZk32VdNMAp1pYx8dawzGhx3YSApSUEWx8wvrX5bz3F6Ye57S4",
  "key20": "DzVSmNjH8xYwURdbAiGMSH32juADG9Jz9nF6N2BNWecyGY7Z6Fn55z6LRCLs8KZnc8B7TBccQrx2ksoVjMExwhs",
  "key21": "2xTiEjhxfXzsZyn3mp18xSzcSpHRCkQSYyfYKtYxLSKhU2nb2pmEdEHmKzWeW21z62k6KGc4wAKnCUyxYNUP7Dzi",
  "key22": "4d3XfnKWVyTbwFpX1SifanYiD4E8eDhk2RieHLvLyJKRi35tVd6fquXC6W1z4D2xvqHMv9VUV68LWgJui42new3m",
  "key23": "pXUXRjoBfwCt8teno4nr4ZYEL6SXkAVi7DNHWv4QEot3bS3ZD9jdB65beq1pHr8438stoqPVmpBhJ5e4MNGW5Sz",
  "key24": "2E1ML4TJiQPBnCLRNxMnKFKFrFA1GhQSWEQUi2X2vYHKwpLntf2P2dSHEAfw4DZ8m7yqY3LBzYsRC2zRD4atnXm4",
  "key25": "4Qxw8WSnYnJhcnaak9Sp523VDYNqkjwLW2CuGHeDh2GmXZJmCSUiyVyAqdgsSaaGqx91RQraa4cnUeymXC1NjYyH",
  "key26": "4wauJUrk9Lvo6wPgQAxRyupUm3rSrnQsd1BmjrJpgJBMnjqWiN9LzZLH9eUXQxuVcmLrXy2YKNbEvHpiwZZYnuuQ",
  "key27": "5fEHqZcqQa29RU2RQKWS8HFjiJJYNyFzJdrQz18uCDk3GjtsgvWtBzsGJhFH5iu8vdHiSVgr1GyZ9B3ZdYWfSb5v",
  "key28": "29mEFG8tr1s28rF25iogYeXnx1RWEi9TRfWNExJ9PS1Yr6FeRkkXYPYj8XR2rXoyBmhEmmiE7S6VKUwMHj5uBsFt",
  "key29": "2Nvc8LC2HePrTcJqCLkv7ptB4chvQAcGLP6PyneeoV4TkejikQgbFVfUQJf5VtzZ5CRVUSrncgfLgdPU5oZ4qzqv",
  "key30": "zmZvd7wxkNax6ZBvD6BWCWE8TXXxyD4Ncu4jhbyqzNqjWonY9ExbUr7m9365DNPD2YAvsVPwVh7PZ3yRjGqokqq",
  "key31": "3tkCqkfCUzmn7rz684VzXGeiAAraQX1XopRonk45NCBnQGZXzKMAVNC7CvJLxY3TMv97fzMhfuHxMdTegAwtx2Vy",
  "key32": "4322ScXRsRqAu3hbCrX3gnj9recFPztGMNdLafeuUY8MmTb9NTRVRXtzsiXc7tVmZ1QPo5DXFcCyNvCbBRmQzYED",
  "key33": "5fY4q73LxzSmkGESY154VRun332tHb4eWdptEgvLYXKbGBnidz5Rd4KBQ118QsU1cfFZ95b3oL4oxkh4CC79x87q"
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
