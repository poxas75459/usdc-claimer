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
    "dNwh5KxdDVdX9oCyNdCN3MK1sov2qQx9FZRQxHMusUzCUWbQochjrv7KeiryYy1NzwVaZEVLebwgNfHMxx2XUpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42JnTgEsSL6sS9TnVLEkEeqKDgxRN5XojWzrNKL3CEa2KVjyakHWsg5t9kgFZPwYEKgqmSG6Je6r9akJCtDuKttM",
  "key1": "3x819tUW1yXRC4V4mX3mr7SndhJbt7Fmwk325FcMC7ZZit9GhfPA6wSrC1umBGqnXf1xU3rubBbgXmqw2jq7ra3B",
  "key2": "3L9mVvj5FDhxecJ9g3wAJj3e9KenneWJ3qc5tNUEjcLNPxG8fxfjfzkPZC4vmrnufB5Gtc5rAwStABX5ZptoL6JZ",
  "key3": "QXd9aPHiqokVkZoWxbbtzSTgoyf13cM5Wg9wQcdq8b4qkc3GBmUT3DfVds11TAo9nhAWZULaHtDfszTV9sxuk5c",
  "key4": "5v6NWTv8LQ5anGgH25fsRrWyCT5cgyXCBEkxDXx2fDd1VuaUXjAgGnJivQs8cexcSgfcHEKDTU94MiM5qUDKAru6",
  "key5": "4fAXyCP1vkukCtZm4KTumvQHBtbQPFwsx6zhwiyhCKLg9WRktSsg8yhxptTXrd4HBy7QHYgJLY8k7cXkPS41jsmE",
  "key6": "2yVUhPHVLbPqujYimmZvGAcKEr3wKQZuBbjPEaoNFNdv63bho29NAUPTKSixWvCkFHA46bAPmQMskJEfD744HWqZ",
  "key7": "392A5QjwdfTKbxtuoE9XBG9awTo1CHtJngacNemcbq8vssSPtyovYbt5J16rpw9RvvreykRXLDaMBb4Hzz6qsDDM",
  "key8": "6g9dh7r26ZFvWbWKyDnYN5aDJpi6xNokaPdkhwtmGzNpe5BQXk5LxKM1pcGknAYyMprZsCEa3MbzGdvDbX8tPKP",
  "key9": "4meDXdMXUfVQtVhvm2aFP5WCkogDrwQFbpFesAPwozEfCemcfdr2igTGFCQ9JrMp2A4JNSX2NiDn3HjHMbUxJhDV",
  "key10": "2CHNy54mZTWqf49bdiBBipVfiB5BDqF79GpHHXKhZd6yR2pq9kuZuj5oRi9KBVv2mBcEsueS4hpWJBUJk1km1aZF",
  "key11": "3BtwKbKj5Mknce6MUaKyTYQdZ9sAJ5TAxXHLimnJUtdcuy4UCXZYusa7xKmn8zchXZNQ3oxrKQDpA6A8JJARwqMy",
  "key12": "5CBHo1f7cH7XNCMEuhEAtSFGBynJCmwv3iGjWeoTAH4vyWhwEJZa49gnu9aAK1fQJa8MxXgpEYBf5tyFVnAD5JYc",
  "key13": "26qC6X3gofo6GVr3tYwU1wRnAKuNZm5g6rGZeJfHPZNYqrBHXEUWAjSjCABBxCizks9J13TLJyF3zBFsrAv5ke8o",
  "key14": "4mG8ZqziH39Drhr9YjrMAZ6Ui4mFMgwVsxsGGNajm1T5Y8f3mVNZHFY63N3dL4HkiqjXXFfTDP8gJ2qLvfmXa3wf",
  "key15": "5LpSoB2tXgQsDeWQgg9KUknqSrvAiKHUW3cckX5ChZjFZG81SZak3QXTeL4v3a5ba49SzLbBUDZrdxoN6baRC8rb",
  "key16": "49tNCeJdhv18ykHXxFeLrkeX3bjiKe8Ds1aHakr2nUS7SqXDUwznUGEMAnJ7cDXMG3BnVfgR87tyYU92cGuH1VLK",
  "key17": "4dMNmhABT7Ydh46BWvRnH6nom6tUH46FMUoxZvVQcp159RxsemFxMMZH9ihmw2h2vje8JvebnDy8ovdb4xP3NBeA",
  "key18": "5pJW2swnyStGQa8dFgLEuNNn9iP1eWhbTFmaocWNGQzNU1hWhnAvTfoMkDv12jHHJvrv1skjYuUfgTZTUQ75mKj5",
  "key19": "5LLLXXSoiChh96Y7QG7QGiDxZiEkT6jFqdTVGMaNFwwMwJkLSSU5jUbPtRKqEvpUaMXCcnwHoRLhxJ4WDk9sUkeB",
  "key20": "jPdN9hyjhzA45vCMhCCEPLsCRMqeq4XftGJZct3Mnt1RcGvWpkbGy7e6rTHWV9iWK43Q69jokWevBpj3spo7MQw",
  "key21": "65zvgYZWTQ8FJSM2TLCCePHVaymRa7PVS51mao8PjetSnbBjM4WoP2AuQhUmrXNpnHZRz9xN1e9yKX65m1X1Bbm9",
  "key22": "5CAkAYBe6SjGcu8kRBvbSTQb5QtNDfwy8CzUxA75DcNXdfLiH1biTQUGAoeH8MfSxfDN1nmwmjxFQuBYXSAHbwZK",
  "key23": "5SgoyyoQ6m8aakcYSVjB5Cvx19XHFMM5iMHvvfsGTcT6qwQhncAmavYDiWeznaV2sKkBiFSGxPU6H86bY61mdcjH",
  "key24": "39Pyot8q7XFoDWCAKwpKrpCWsUn79up1MvvjS1WkqmueoGZav9VWorn555cehXC5QidMQcTo1UPPLNVByEPvKLr",
  "key25": "42Mua7Y86a9Vascf2bRB9kvHsEZYpNgmEDtF3WdZv2CsEy4PseWuzFMeUJuMV1829eR4B7VZZA8pGyBnzH3VgKdh",
  "key26": "4s8QRip4A6cwpavzGyZPKxMhkehPyj4Ub8pXbtGk5wNCrEnS4hrD83GR2kQ6tkEoX8SayURkNarYam9VJBYSH5je",
  "key27": "ydbbQs779bTXVuAZ5djC3VHowd6xnMcVTsBoG3tXoWtZELgmAce9CbeivVJTi8ovQpfmkhZZVmMcdeAF71rtwE2",
  "key28": "29eXBAtHTVJyFX47Rqikt6ELQL6gzHP3K7wVaeZL6yjcssVWVj5gctuVg2FZtMWfcFXkMkyr7rwfhMkByFKDEy1v",
  "key29": "3u5ZrSPgnbgqcPDBSiVMDrRvCSGYb4rTJrzp7v4qDczZ52uZD3AMMKHYVdZggtrzzdbGRYsnDz9VzzsH63A78XGV",
  "key30": "2u27sH6Q8QAaCVkWgq4JydNT7aW84CkaRaKK9h1kLXVKRU3C2o29BmkdYBbpraqtCNgJAXfHxVi5TxXf4qpEaUfd",
  "key31": "3krxHJmMqLKJVRZSpnmZ1Li5aSvoJPh2YSTNfewW26Kzvu9xXcJDdtkJKBxCyak45vmwQEn6wZgtsHznF6ZVZ55F",
  "key32": "39yLz66aKcGh7BRTQgKga5KZBogH7Rua5ncEKKGPz9wpx9g6QSBnQQkvpKMf9a7y7PKBagTu2KgMy7NE1M9WBFUz",
  "key33": "ZLNd6PFnVA6t3aVZRm2K5DTJtA1vNCPt4HLdeTq7NoJyC2xwHZNmJd2L8FYojwmajxya3QLZWkGU8MoyRwA8nP9",
  "key34": "5NmH1Sy6bx2viPe49DK8j6UbNfKY8Bw4h3yKgV77MaKaE28r2N17kGJN7D4edWCXi3MUofPPYqAcvPuWvuwkPJGz"
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
