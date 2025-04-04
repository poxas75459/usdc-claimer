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
    "4yVXfWwNphHxPHqkyDdgnwNqBCvajSKiCN6esibMUcxSurbkr1SjZb8XDxAJVMKLLs6zPx97n9ZctYDswDJqr9qC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45uyWVLThgz4KKsZSMuGHyUiK5jxK6wKrYcHcUAuAvTV5XCDAGHrdrXqYLtjG4uk9ksCzvhwbJ5j7qab3WCWqn49",
  "key1": "2HvWchsnouWhpagJg9fhRt2vk1CGgBjtTUPd6apdmWsW4kF2KPtdqFnwbYzhRqXk3aB1bheZPcQahax7tuv5Fakw",
  "key2": "2jeSdj5thyxa3YZyATD9yBARpM1a7CfmztcwjBej8PosRwdLiWd85HzobAzyTKT4XTVAVSYEG67b7Xj7dvHPZztC",
  "key3": "K1XL45yejZmFjsv7yvX71LCw56Pb5f2CejuChUAkj1wxZpjdUWiTCwZYbJxs4FCaS1R4NmUk79GXEBpZPBzpcsE",
  "key4": "4SmpujmCzGVMyP13m9uwXEGjzfGdEgiDs58mw2grDaRhToEbCg6CGzw3dBPWnUx5ZdxsGT3TJn4UjrEovEfUUap4",
  "key5": "24AciT9MxP7qDC8GJRor5XScxZBJrkdUHyQTCqdKvnKTntqDsyVoWZtf5jpy6pYuHapUHC6FHywe8GhVaKQPYdoo",
  "key6": "2nTLed2MoSck4pDhVSAcoyx4wK3S9xkgFRZghz3PJCwQuLrWf1dPkmDFB1XGgnTXSARG4CkHSN79BdTRz8yDzE1b",
  "key7": "5d64c5oLrZesQ5k9vA5ZV2bVoRW2UsZJUAyPVmTiB3VBg3hm37KKjKFA7F9FQvpZfTTFssPc9R33QMEtFiT7Kw8v",
  "key8": "3VD5s7D6274VGLvEk25crLw8er5T9PgJR69YYDv2nvrwxJgyZbHUZYRJ8AoYc6tK7fLfFfnDPFE2cPECjt8NCZq2",
  "key9": "4qYNT1fxs8phjH5ivnAeEhcndEAABW9uj1mfz6mKBGcu1DkqB7UfYbNWpK58MnaQpc9HZk9Ypem2c2hZgYBeSncC",
  "key10": "2k6vroUvLqyDyDpEgjKcT9u7QPmCTybXna8kVD3YxTV6nk9krXA4fhyYPpJu9eHmqJeVvi8rZr8GYNLRj7Rbvtwy",
  "key11": "p5jMtcoPLq1PsozcjTEpH2BNa2rKv437JWmAUvQA8xb52QJhjrj3eeA3Lb93zaoWfuq4h9TZhC3gVnXWrkWjtQi",
  "key12": "2eHwGX7xUKM8aDDX14Dk3ACF5Q2wgr9Bnxzh6HRxoq34mx1V5yxwsqhkxhPg9dFJ3cni9iVGFaLqaizwWPTaLizK",
  "key13": "ahyhAHLuTv1N9d2qELVKhy5SE7RD34XXzj7TDYF8rH7kXNk6qhNSd6cpwjybfRKhR6mvCaAjhTAjSZgMusy27Fy",
  "key14": "WXvbR8z3ELNmbnMbhyGDi24Z8wrwo66563Huuc8g2CjFh9YfcMzBqfnY9G25tkbLBtSq4W4BgJ2rLK8QJQJcXs5",
  "key15": "CwE2PMJVW5HTVtn4Kak7dzCpD8jQ8B9QJokaBWFSqTSSKbskpXya2XQZaMQAytsPgb8jGyh1WB2dzFw811ArZan",
  "key16": "owuh3U5hfGcgxmRcxVXk4kMV759sGiJYQ7Uy8KrFaXGyCiaVgtVqevo1deH5754XGExfGRmep4nqyUoc4qgt69n",
  "key17": "uRd9DdnFmR86xPwk34EXzQfNj4pjVYZT6pfYHcUwV686TJJv6zdFJtAx9RXXa5HDsmmuSYX1MF2kNmnGQ4zGYmz",
  "key18": "55Zqr9eMKgD6uHpXNkXGVs39nrWJ1wu3MGghZ79Nw9mZyHVK1hdCtp77qaqt9DhaMN9FufKXW1Dynd9wxrf9VWhu",
  "key19": "2iWhKf8xNuMxSQiSbjK74FWKm2DnxBFNtjMSo7YNqWHFw2NprajYyMk6VJGSuqjs2tWt2ZE7unpwQTVXHDF6ciEu",
  "key20": "4bTXTWSQ92VpjkeWuqpdt1pbfLG251mu39dMNbgyjZnXSXxBzWQNzscUSJkqjHP9TzbD2jSph23yGx4T5T3JA2Ae",
  "key21": "5itnuzxSywnFSfJg4LeAUFsWYoz91UEYxB9MKKJa8CQntdwBnE5f94m8GeJUPh7Fjp9BgrLmdQBBX1mSeH3zrkes",
  "key22": "3wRZckmxod5u8dmxLvchfkBWV9wuQDGHJBvLcBpjd2qQaSKhHvfYFMMaNjkQYWZcXhLJTRqt6kaPpiunwSc6ZF89",
  "key23": "3J7AowuzgxZinXESyQJpshzXVQVvwEYMBipQkxy77D5U3ZBXSycr4Msrr6ufyP8r4WomA4W5TwNpkjgZJc9Deb4f",
  "key24": "5gmHCDGbCeTyAi7rdBhkHhAtqmVnahuHWrnbkRVxDtG9vd5fVg6VKz7rvfVEgSSvRBWuaD6jyQDsgRnSoWxubtGP",
  "key25": "2m3vWgjnvD398Nn4KpogMgKPWNqDNJSiNMTcim9rUAvrdN8HUUdhY8EUptbQ4zdzZzJQ9M4fGvPtbcEbgNXDHeMz",
  "key26": "22uigYBSzvfb6i5JWbaZqzNQ6wxnFnTLcKLfyeUN9JHBHu8vXC9t3rfjC4fTG4j6NWuCekfz7tycKHWD58ADTUyb",
  "key27": "42HHaiJSrJmFkWpRWPLURoMxZPqgRZrfKJY25WY3ty2wj65535MKbd37auzr2a2McDYjLGA11Js22fvEZNGe58ak",
  "key28": "2ns95nr3vEA9j2drmdrTEAGQLQxkfS8xo9zDehmbmAQxJmkoRAZH8KEBak4fE8fZ9yornP6rXyr5GmeXLEmBR6kj",
  "key29": "5ZrpGmQDwZGTjhcFpTnfG2qFMhoH3YkRfBmuYda8eamVDUYeooBNTSvDumevmo7Z8CSbRwyFCqB2eGNTMbwhQTCC"
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
