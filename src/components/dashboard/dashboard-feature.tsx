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
    "3gfwg8eD5DiuVjgAFmFzjZXByLtdNXeCZ9y1LY2BMyrVwALLERZuZN1F8Xby23xKzLRKJ4EU2ksCycg46HcPpBan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTzjwVvK6WLp7UFCVpC6QhxrDJe1TaqhptmNhnEWwN967zZVLNJUypeJWfC8Ge9CGa5nP41jGdVdtXz9NRZ5ep9",
  "key1": "56XQy2iBGVNhrQjUdWPkPKp88LpxA6fqHEBx32uwnJVejMJDLhfDjrNNWuR9Ce5bomUQgbYgWyzWYks9zQAxvcfW",
  "key2": "3axCoCuf1udt9VvQdfgkpExK34Mz2gZvQyt2a9bk1npZTEQ8hkd1SJBLnU4oD2cKi1u1UPtp97a8dU1QbMh86Rnk",
  "key3": "2JN7M66eTHtFE2Ep7dCh54mFdaCsDon7LY1Pk22nZKmQHj4NEgCDQv2ixXfPTud6Jd1swYCAjLidd3DzWBsoQshU",
  "key4": "3Bxj6eyyq3Zj1VSqLzDKEKGmBQAd28FnxzhSZ2LCpNUTymULnDwDEkSpq4UHk38VV8Yg5GjpgvqmnSsytcwM1JDx",
  "key5": "3sWJ5W7Y6Eucr3qGZJkNFfVAcA4jX6QkUceuJkYBHwuFiSEBi65B38516K8cCh4L5mF4bJqyX3NmU8avgEzcXo9o",
  "key6": "3EMHrFAbrNmrB5aJoaykjXiEGkhqK5j6Kc6c2Lw4dvYKgNjdYvNYBLcAH1qqt2kUCFB7KaMwpZYGUoHPF5WatDfV",
  "key7": "3Y7ozS6PRngBpPRURavPZwDb9PXWv4GLid9qvr4Y2UGz7ijMcrreM9nBimBEvdBFRB8uBoipj1xebx84qJTNUkL6",
  "key8": "4eFY4s8MD5CVLFFd14WxuuEzHZEdqfdBV4PrPziDyoZmkxVVUrn4YPCMfGnCDzQsMawuxixcDqZ2Bk93zAq5pQ2i",
  "key9": "4FVhtjkt4f8CUYpL98AFnL5AvPDXguM1PA5vE52fXYMUbmpPYio4eUcZX9B9mS2j5KS7Yx8tDYRYKB6Mj1FznzhC",
  "key10": "4eQiQQQEKSwy6xUFi4LQMaRyvbg3zJpkBTVBgDTjynECvMPUC586pWqhi92sWJMVL2wahNDNZ4cCHLy4qj2w7LRt",
  "key11": "oQmKK7Kj8Bz6tBXEo5AyRq4L8hK6ZTSJsCH4CnJKkTsGnsVHtjhFZk7bVHasDnYhHLFQ4R2c6aDAyUwZGmcApwj",
  "key12": "5tmCB6kzXAmUYNb6PWvuhbLdEb2U3BsvvEycWd3StKPQNuCKC7P5DSWBjohvkoB73jeNwuo1zkyozqm4BGkiyY7s",
  "key13": "4ewJ8sEBMmPMb28bZYBF5jJSH7Tk9PPKCu9cT9PGUnKyHds8nsrqTVEifSSGDMB49h3xd1s8A41Up7Fsyrte4paQ",
  "key14": "eMZjLGwngbe9SeetWXG1FwNdptDJazjwcXppLpMLLZN2vv7EswhXUCoW8cAryLDxGs61m9cw6VR6FNVUg8yvtua",
  "key15": "57Qcj9SdGDVonpAct5G6qmQfSzX9iJDRVSpdg1qaNdbaBMMjqZFCc96HBB9tQyWfucPCYobBmjSyiXnmQDPv95Vr",
  "key16": "5ZZZQQT6ppHwRJ3NUU42LDU8Ja3eGMttAgxEtaiu5cXuKFHSEk26KNVKpU2iJDpna6mRNueSgNJN6134ZYSbqCJM",
  "key17": "5B3zaR5f5kKMiEGJw8KwsVdyjZCtdi7PsCLBvCSnNL8sf285g5piptTugfuwgzMwRCY3tQYpRsT64KbskC3eUoxP",
  "key18": "2ocM1uSXDc9ig59MQq4gbJs2LpTuiqgEZmExM1WYAKr5B8wQHQqfYQJUUi9vAVUdaE3zZd1ty9eDQ3HWc5o2WKmT",
  "key19": "5v2rb92DHocrgKcJt45hmfdtfxrCML5gS7HobeTR5LxWP7Ax8t3U783PgLEt5Us4FPeUURwv24dJjCJ1kiynD7HL",
  "key20": "JzteQSin79n9xa7Qmvp3TLPmTz52MkxjFouHFFSca4U69VSEPzGnzsPraM4uYYaKTSBkpwB66M2HHUaaBPsKQGq",
  "key21": "4t5K3eBQ9ZD1mBMVnsUbX94TeJVgqNxQ294ht9GRaUfz5mDhskMCz19oKZExDfzVmi1VEtfJvgGHwQegM6bpcrZ2",
  "key22": "ku7nwKXABWjcPhTKtHFkqW2CH7CXQQeBfhMzzrNonFZ4ZpWf9nNKfQQc18bqffmoo6v5RQ6u3e5nojQEL3hMTQi",
  "key23": "zwKj5HvXktQGYegjaQKBWWCXwX2ywvhQ7uSkXa2BDscQ7c9K3P3tEohNM9nQTaF7hBoSa8pFDjnaz5dcj27ktbH",
  "key24": "4H37TYhcpX3qAfdW7Jx7HVs9UxMzc2AXvDZg5zmVEDs6GmfmPDHGgWECN8LKFHne9srCVyKMmNjVb9ycWo9t4YkZ",
  "key25": "51ubjqAhLuNeUQHpT2JT7CC6BzYKzpAkNWjhGiEai7qa2dokTuJT1Z9v2PpwHDYmxfUf5HmpHktiivRP4b1tWqbZ",
  "key26": "pZwMRBwTFj5VGarPCVBYScxDTsUnTRT7a2G91d42RceeQP1wRkFGDaQtDXDwaMc9LX6toZSdzKMXja5N9pLoy3k",
  "key27": "2rzGDwfpvpJLBBQMFq1KgCdVbQAg7m48RksuEPqQkUdMigYfWZztz7UXwkpw34d4iv3d29GVD49rvTWYf1yvbjDb",
  "key28": "5VzDLHJSDoxNAu2ydniPdcYAT1JvUQZLijueESiLYHcqcVS3MBU3ahHuaqTaeUFMZ6Kodzg5JYGNNDJCZ7xDzEtw",
  "key29": "4J6Go263eFfauoVGP7C3ZDi8Nj7Qq2LzGacrSJvm1z7SzFLJANmw6ZmUuNsAdqg9AtjYujA6tuqEnVC9Wxcirh5x"
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
