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
    "455AGHPtRGFArfkVN9V5vJXxcK6zah7r1GYvJWWZsCsj4vfkYDcdJEwepreFQEdxxiZuXwjPqfnKFm1yK2DqWvzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32pSyj8vmDHimfx5Lua6Dh8WKSgNb4KPgDoSA9gEQihQmdXRw5SqLA7bpeS2fk9vDbDqcSUG9qADRhg37L6dBhEU",
  "key1": "5SVRWzZfXWpuwhhzjd9nPQaNTeVqzNC8wMsbboCevxwskXKLmS3ftBh2w7VVmAYYusTT2vR3UgJJEfdbk9SYgU4h",
  "key2": "35StS1BEVB3QqV9Fs34TpszhN6tvuVYC9uM64Pz6p831h4GwGgNELe31c9zGnJfdZWVeZq6X3h6KoK9HouNYAAeH",
  "key3": "3nSveVqRnxYmuRd8ze4nbGGKizAZxbgLcAx6ebjdWDRRf6mLGzz6BjX9dS62wXW1EazhbBNbwnnAHC8DJcLbiMhW",
  "key4": "54MJmU9xdm49UNAFppbqFBsR4J1fTfy8HgC2jxqm2C3K1oDVx2E59k4tMQmjBRgEukNX62Fk961KRsB8BU4HDnwG",
  "key5": "2soQYDjG8MqnZet4vAungKvAuWs4cUqtvAJGGUpukuMB4YQ6GW98zUqAAuvWUF5eEDXao4WjXsDTsjxcLzwce9yi",
  "key6": "1eUznNEgMmxqccsy2NhwN3pGEVR7eBj4KXRobgn8BFF3at2deqvUbW3FMGQnsiW8zB4Z8Rb9NBVT7FFXsv9Gwv3",
  "key7": "5kgaYRzKN3VkAZJ6P9pp2ECYxq1jevGQnq5ziGy2TgLMog9wfgmrC9dXMKZR2Cm5vFBPB5KH44MYXqrGz1C3dQnT",
  "key8": "5Q16sRbTFCGtmVsrpuY4hdStN3rZ5hRBWDbcszpkb3yAJdrJRoWeSDjvT1HxbKhnBmyjy4qzdiFoxvHQpN2dkkm3",
  "key9": "2RFupygMfjtRYJf4jcrWrycEnkfQRBLhTcwmrepJgbmzumvTR9miY4Ecbsi1xbTBe68LpK6pQMqkUg8QrjYPerbQ",
  "key10": "43XDSbqZWCCTerJ4BtCX1mTSYVSiM97o5RRj8hcT5FXkgC7S1imJuhKza5H4sFkbPZaerVbsWbLDjFZvMwoVBqxa",
  "key11": "54pfrMParkr81LsgZxzDyj7PHAyGVnbvpcz5M73v7BTuWaDJskGqPC6w3RzZm9qJitzmEbCT7Eti2rsWod6RBHJe",
  "key12": "Hj1s56XUAZ2EvEqG3aHkWTyrLByrJPpipMDCGYN11vx1pds2y3W2yLBm2sgPyMYQy9edSookuQcSDALcSa37NVV",
  "key13": "w83gzCMtZyoMNjAxqG25j2FmtXcmYmcyM7YxcKwQCvBddkAZHFmqKu51QGewSNV2xWScT2nCRu9CuzGRdifesX8",
  "key14": "26ggMXc5ciRqodF9nhaYS6kJyf9rux8LPvqnYRbiAwG22DBSBkpG8snMQ2gBh2vi2iXWgQ7DUx23ssFywReZYEP9",
  "key15": "4wZ7kESzNudSAmhAiygjhCcFSRA3zghnLw7FT1X8CU1Jrf46bWz1myf4sEyzYKDnmeKk4hyr4m2JwHro7A8qA7HN",
  "key16": "5irZamv5HWGEXvKUvv8fYiEj7S33V4hYGMTY6qx3xxTRjtKod9dfeZjfgnZXbxNLiPu1Pye2TxpFTvYEwtnBZj9V",
  "key17": "2mNE8MCT3CdLzhpKY7VH5V1ph9yTCeSZE4DMJFFUTp9T9VV2V51eZQXrvgfbPudWkQPLdajpG6TCMWArF1SYUSNx",
  "key18": "4H5zo2yDYMiW4dEe5KswzyNdcW3prTp5z9k5NGKxifP5k8UzXQGzjW93QgLySkne7727DYGFrg4LE9sts5zoX8qz",
  "key19": "4vG6eWBkYacQjTmTYqYCv74CWpRuSVJsZRizVJuduoHVygx6DDAKnZva8ZxWbCSa92VxqabDpPChgGt4xmQdNAHR",
  "key20": "5HnZhus1kmYUH28GGQ1MLaPKjZgYnwatvqURPxVKCeV8kuFnYvoS9FDrmUujWESSQiXGCgFjh8ogddLryoYFFFLe",
  "key21": "5odC5oQpch2txHKDuF8eouUhQD4JpMfFsVzzubcpcetPuNCuQps9v4XkwYNxWtKCXwWCpa9LrqjuecGSeCgQwAja",
  "key22": "2VbnxREUS7J6Bp3RHkvSuNqPachXh3k2tHaLMYNGKJSju76ea4fDcYgB5Sb7C7MbqrAKA8BwJs2VSB59JE9pfvBh",
  "key23": "4XdMW6BSoDsbomGfCDG873drppeMsPmpzgjbZni9v3z63G5oU3DCZrMQwUNwT9wwNLMwqes9pNLdQLqBWTySMPTn",
  "key24": "2eXs2vMheny7ewVkqUYNvWp6rnKP9hFz8CnEJd2f9fJCEhyfgvbxh3ZLabmmqgWdrjpDthjEu9cG7HjhM8GuYYfm",
  "key25": "4mRiPfE7kLqzrovcAbcybp71ehF9i8wikSq6JUphABQpyKbfoKrpXLSXPJDN7EW3PTFDMMLug6iQQCvRHXA6iSsx",
  "key26": "3E9EBALcUrQau4fyHHnPekg7FDb8qCPR6UAqaDRWaUBo4T4g9KP7VwTRQVe4933jEyC5o61GCgZ1fjF1E9YEUE8k",
  "key27": "xCPaVj8WGM8ipaZc8aRuWgYsTJ2mbgqeM13my4XpbKJRCcskH7x7AapCb6paH87r4DseEHyPoKjvjkQ71z2tW2E",
  "key28": "2vMUrTRgNWKo9qCG7YhdZhXLqQHKHbVkFoDTvgYLgThpMrSfJKEguh7AKLZsR8FsgukL6pVFxuFzh5jvxgBKcGqk",
  "key29": "4pmqoLq3Pd7BDjyHaSZdNKcYJmbtkbPRmg1Fe39KLx3W5iqGj9XLdJkx2Bo3KUAU31b7tAcF7k4NxiYKQsngPkPz",
  "key30": "4doZQk9tLu6zZ6rgnZy5eX8iYw9CtCRYSFbn3HoWvHHAtmKhimhikRzUsoqizg5wG8UJ1gpNsUGoMcQ257fWSswk",
  "key31": "XxNAF5RgpqftwnkpMfYa6gFHHaSLZUYoqZJuoqZ9mG2Vai2fSrKpfzGrr8qBYYDw3ry9yFrS4qr888TjTX9WWG8",
  "key32": "5HpkbPms6JMBgr5PL9dDyoWLtESD2EZb6qdKjmtb5gxL66tyvA3CcKzap3bekzjthtXTKz7UYY3Z2yv2zSGmPw1r",
  "key33": "9htFHnD2U4jBPLSy8bZv6MVdei1HTiLDweFeBEKCNY9VhVAmjz2fqQ7wdznkxKcuNEXe2orspcXHvUYBRfnsron",
  "key34": "4uw1vPSiFn9F7pnbyfB8qRJWJzUCyDJrCyoeEFuX4PZLdwgsNEimKF188Ukh8AGVP9Go2B7vcLigj22DAMjLDrXw",
  "key35": "3wyYXQFCWftgrpWG8A38F6CGwgY4nuMbKZxX3s18XnYfacj66eSCxXbniuJcL6i1mKE4Z5kY9wHY6VCxMsRavGWr",
  "key36": "3cKbavjp316wK7gvNAqUEpTeqiZr6o8Zdt4aKnuZp5vSFgTZ5DawXgWYZXVg7rT6bpvqSNkC51mDtj2VsgYpb2zq",
  "key37": "3pPPuB84pZtmPn7c699jrZmQ3omT81TvgRe9VUH3hX1oMnH3itfvWbGVG5EXphzDDVkNNLyuVeVRna3vgHnRa1gi",
  "key38": "2AZDWZmhH8XBvFoPXyTt2usJRJNfVUYgav4AGZmTUzoZdKeTTUq5mMTCqgjRyXb1jpbEyb7QGWztsMtDbZS3XzxC",
  "key39": "66Mtx3cLDAjsoejwEeyB7vGXruEwDGKsN82op7V3MNwdrwLvUp2MrBovzYKcwVHTFj5MvtfVp1ryPDaTxperDKfm",
  "key40": "2NDasnuHrABM9rJ1g8gFqJXL2EE1Z3aQ2iCoTDKTgt6Lm5zxejihHhFw82rZyFCdo21bQWJXdLdcgEMXBRAxZKEC"
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
