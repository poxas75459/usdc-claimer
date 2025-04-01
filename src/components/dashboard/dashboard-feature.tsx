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
    "3c7YkVC1rvMvC5EMW485qREy4AtRYEhU4qCcdWDhWi9iNxeeuD61Tz2L3Yq57D2uLXuJ3fDMowse26zCP8Zpe28c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wvHacd7dP1EBeJDTs6htx7D2HLkiTaZe9nUrhJfUt5SRb4guzjeX9X59jdQ7dnwCu6CGwcRwAZqwD7KUmGhfXCg",
  "key1": "3rVn4tvKDPWfwtW3CuePF5Lq8kapbF8g4TPV2ewERQsPJAkrHjDgBzJLhWgwTyEYxaZ4zsuos6QWzKTf3GXh3hHU",
  "key2": "3sgtKZL5WNjzfvPBUKNLnj778ANPzRxVdjfWdG9oQKe6dFGLKfnVURx5ZdreLD6wnRCtNn2eSbSJS4btvypaiHZn",
  "key3": "2ktAxzm9tzL6im6ihZ8BHa3icMiyGYf5HpYLtY6tRS6Aie7fTvuiNPCJCQuiHRz5HU7qxBzsXkcuTVngmgcSaaFr",
  "key4": "4c8PNVg5bYz2U17cnCMaJazCHDUFEXHPNJGA6ZBPx3dUW2GqXvfoz8y6sFhF5aA7eED8PQEPUMigo7fGYGXMaBXa",
  "key5": "GoorMEsKj8ajgEP53wJ2t2WoPnnXULviBPB9a9jVtbTmD1Ssq49UsyCDFqA8jQ8WXgLvpu2uCnPNzjvPW2yke4Y",
  "key6": "29WY335uRGQssAghWMMmWkzy66pRZmu8NB3sFZUscL1mSYZnuepENzDPkUUWw3gwGSnn3nATHHzk4uoy1zucodn8",
  "key7": "476EYpyPGdgr14EDHmzZpbjYmafdS2yiBxJXB2Vmqfyi2Jysa1gFgJ1ArjBmf6ALCTahSp651kwTxtiyyNcEv3Gh",
  "key8": "c3u27pdRn9etXTuKu7dbeKyA2ecfodTPaDcDKT7nHNVJmwzfPUmSGYDQajbaqkfsbFfaRckfGxrw2UWbmTRzJnC",
  "key9": "4N2ypC5MMdDTUXcj4gtXqA1irVCYUD7qTaKHeqqjLKxv49SAVkawH2PZHhEUbBs2YzT9gMyYXgjXbTBRjqijesE6",
  "key10": "5zBAnEKUc64Pn9BA4Acwhvxkp5f4fgJF7AdyVLume5xpjYuNyw72ivLdMiyb9RCvHe82wsPH5hot3PshAt5umfxt",
  "key11": "W6Dtxkqt3nn9Lo42gmoiHNwrhDmoPvTEZkAqm1ZTR6mpJe1ffPvQ8wT9vm9nWxHDan4f5GMa4Q18EVsa8VX9D1C",
  "key12": "D2XnDmKoimjpY44GdM9zSJ2YqSrbVgRp2C7kXzZgbxqZNWS1tP4mq5r2XzHkuwVC86vyTnD9aWubNvikdokkDMb",
  "key13": "5dKVbB5bppuG4Mxx3h5CKxu6dMMHbFiwoFrPaYSJtfJWs9Kaz23vssbfgi44br3AjVZizfo4ZpHTKLg1YfaQ2JZ3",
  "key14": "4Cg9c5H9ndrqb8njhphvZJgvvJvSq84HYBanvEzzG3b8rPhxYX2fWHfnNfR5NUi5Nou7saaMY5u7CRoJLRN6BM3H",
  "key15": "2FrQTJp8tgwFy2m5qP2CVW2e7wuJJaWf5Jrg6snuV3BokYncw253n9QCSgx46pF7N2ZgGqYcKBxttSSVFC7AVvAG",
  "key16": "5SEwcwK8aRs4nufd25Yg6fRkLc3UbSoo2GDNTAQLCcjSztBmK5rBNXBpJc8MHD6hmYXcqZk2mAYtdDouJdFQeZdN",
  "key17": "63iPiVVehn32c8r4iGiduUkWn4JzqVPF9ZxXyx7MD95SW9zHrJGZfLgqcPUzCePpBh3C3QA2gaQEwjSMLY1ZtLQP",
  "key18": "5ShMoAUPUnmnVfdw3HE8TqJJJWbabwKDAbQnhJM6Ma4hGujHvoftrmAridupoCSQAeHQxZKFMdE7CehNwTaQw2Sv",
  "key19": "57vKXZrYy6QNmDoYSdZz55GPKYcmM56M5e2CRZ3Q1x9yL4Sn31DRRdvev3Jvd2vrVtGixbvQXnn4wxQeq1jS1Kor",
  "key20": "338W5JV7tUTMYoaMmvpQ29Ho4wiKoxceoP8uXX5CnC3NajjhgA1F1qnn67KWdXjwikoCqsERRVaHHWSLWcvS5nzF",
  "key21": "4ewSSh85RAuaWzFsYaJWWrcaqMGf3CnBG3sMq61hVv3YoVJa4hYBpWmncsfSV6cCGLdQxSPuNBAt2hjMMu9Jmuz1",
  "key22": "VGj6n5PtPqvVAWBBbG9qn8rp2cVrpzr89MsQ2h1yyB1c4KYFmU6uKQ6MbptULwV72m1J4jLKC3U8A6ew6oQGBQe",
  "key23": "3q93muSpBa83JYWD39DaBZaiToZQosB3mbokD1GZvMai2eZ9g6hBT7ekNkmBwUAzEw11t6egDXyhZJoKfU4NZcaq",
  "key24": "3ZPq7KydhhqT2Yv4Af77KsRtVU6t33Tdvqry6u7rFJ9wmWghGAQ9BYds5mZbr3txbeEB2bGvDzCpSt7GdYM65uRn",
  "key25": "5j8vW6vHypqo3b6Mwb3ddYqHgPrATjNM3A5UpNvVqM6G7zLSn9gQoWVwN65X38W4JMkS96mr3zstBTxi57dT53RZ",
  "key26": "3cBoq2FUe2rewZ1MpJtL1sqbebEg3bpxh6h6wMm6mtEcugRgsmQpHM5i8mAenmgKwbmBwWi2CpMdHjpeR2kDgWZV",
  "key27": "4wSPy2dpnoKFdjRYrsXgoj3dJAZHSSYW7KHkfTETCN5WSgn86SUbMWTAMV2WV2PmoSNpgu1DGh5itUqBKfyAuP5",
  "key28": "37K1BhejCF6fAiNMLxTpgAnC3bc8imaryxnfQtM6KxmQXDn7c2tiui6g6ZvRfmaz71NSUUxX33qC5FzajQuqBX3o",
  "key29": "2gSdoND3L693jXY9bXmh6EJCuprQJP5Mypb3ouVNbf49sB2wLtD38dNhs9bLSx231QdwjBVfhLvG5EEqqUNo8kT9",
  "key30": "43gcNyq93vAWTdMitN5FVjMuhATpLWW4f6bgL54W2dZdKhVrngCxkgsgUgex8fQbjj2Z1SJLMBLh3oGHpQncfzfY",
  "key31": "2QLZ9QBTZvsXx4QgGri8hQDrLSLTRg2EiWUJZ5VWP33CeQ4xvkA72wLW6NKQLFcyahqzp19xmDUnRz4q4TYBzVCy",
  "key32": "3zimN6QiwsoKcyRxbM86nMG6Zwj1GG8P2jfF6qKfsvtfbdJM1AhTKpjjMYAcGjFZu3NAF62skQ4DFxmw7pfzuYDu",
  "key33": "MzhFLrAJHgnkAvS6fM2HFgPVyj9L4VJ3hK7RHhHF6kky3kLLRTx5RX7cEMu3NHG1oPzLhgLDWMNtX35VCztEMVk",
  "key34": "4Ps9xdPbWzVN9ZZna4BzA7AwgwtAZ4ShAKUQPTx98LCJ35YmTznwzrHXiktrtP8eKx2HcxZ2grLdEXmPrffPBTG4",
  "key35": "2h83dJnd14BLq2kMDnUT99GNiw84h1HQUh7wBuy26MDZ5SDY1tmuVzF1SrWbHTQqYsyCCYk4xRueZxn1cEHodyno",
  "key36": "3cXpMu4Ybw4sGcnqZZF4t2JNScQ9HHCmjVXERdZ79hbHNtHEz12Wmg4nqZs2U93zwZr28Ak962BbSP7VrLpoVVaf",
  "key37": "kCM3355EcwSU5yKDi26JyqewcSnxDyoQMGx6Bnhpi1EJB2XfQUBinmzhVXG6FiPyEZDuL6JVXKw6GxXp2Qm5N1D"
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
