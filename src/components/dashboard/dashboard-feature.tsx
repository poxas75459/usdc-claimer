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
    "2LrizjQLrMTLRUikr1yXbcfNuM24xhn1eNsb1TAKWXmhC2Eah4UsiLYJgQgAo7t7kka28qcQ2NyLytkWRuKfASqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eKcQ7SYeXh9XemZczWF5GA6hjtwYsoUrzw4dZi5cvn6eQbJC4zqfV8nP7qwDpXojdBdF25Wc9qN8dU2pNF5nkME",
  "key1": "4GrXG3jFHYxBMZJe6h9egWmf2Bu3EHdJdDbmhhL5BGTfTk7XqNJYsvemsLhb7WedbR5moxX2ST3YG23y8crS85qV",
  "key2": "5yR5QdzndkjEuAho2V6Rw8u5NWgmYp3FLeuWWArr9dN6BLPuERhfmrGV2fyYfof8pxMrNv2bp8hEmL6aXmC7hecQ",
  "key3": "4cCERoQNfZqirRn94ofk6Y3L9vvGKaRTqTwFrkzwqZCoimQ54YTpoxSr1nJsdZmphL2WkJwWgJKZHwpub7J6aTq9",
  "key4": "5VWrNLoNQAeDtnVJVB35rPYPEyshhFxRsxMvuxFjzaQZLY7z5zKy1c7pUEVzfEJ5FhAsbg83RsBdQupAHqpetYnY",
  "key5": "3xu1vA4uji22rzuCgMwxYpmR2j9tHy7k3D3bBKe2X1K8zfJ63DATT8gVPonS1cyEGiZJ9UT8XFSxUR6kGrfb1XPG",
  "key6": "2S5LwhsdUi5aw2uvME73hP2HB7SitsWZUHrvwQzV2bY3Q6beegiwQ3M3VyPQXCH6Kp9T3nvtgQXnp6HTCW2cu2AD",
  "key7": "29qV1TLiTMMrdMKBhCCtd2mbFAy3QpaReYgzNYTmQqu27y6jB9XNWsLZf8ekQ6bsP1jBGSUTXdYfzE8DDSY8bwq7",
  "key8": "rtUrjpbB9SnP71ZjAnhsYFrZHZM9JZQHUGAzmcBuwzYmUuCL72teHo6fxSqo613Bbojk9Thz1jhvfvft5pf8M16",
  "key9": "3xFYPEG1EM476deicxkuQzRH6GEPnFpWEwAHeddP282L3RRdLxBWDjqH9XneSs452xdwZowNcV4yWsya4Z1BnpKq",
  "key10": "2o1yeeVboRDyGHzcwc3QXk4T4cMhedjdSgBmQg9LZWwTpkbn3hDetJM25h7VNoBro5P8sX7wqNo1tzZxW2GG2L6D",
  "key11": "3NMdYEQqELUyLosLSf899SunDsZL9FzzR9ZLCG96jZr7iyfUWhmrSBBBhhVaPDCMrxmTRbQnA3AF3y7Dx4bBA3LL",
  "key12": "3wpN9NsKXCDA5Mk3bFaLCA7wHA63WP8cQkooUH2NTRdVvUtUAh9AtKbPoJuZEWeoYkVfoF5oYNZhUR4WbRR4RrhN",
  "key13": "4yoEgc6tFeG2RHZSoU1gaEUhJxbxbNewwCDNJoddLDhHkZmxUaH27uVJDmgm6jkgLdAdmhiNizAqAXcUZWLXYCgG",
  "key14": "4z6h3UkNq73MyF3XjA8njxB4ew1CriPVmk7L8JZrtZ8FFLcQa6zQieAbaWakJbNpZ29fdDVJVNHkioNJYKLWtHux",
  "key15": "pkb5WdKSNd8d4u2zbJFGY2ewaXpgg4REFgyyth7Fo5oLZcrhzZhUcrAMBmvwfFFDoUpP15A4tHnDD6H7mBhEhNe",
  "key16": "5WmgraNy1mMxBxnGt6ScdwmDtE5Gia1wVmmRnUNQgbwSf169EBb9nAhmhUj3PqfWLTafe2tQzDX2pNvdCZ4vMbye",
  "key17": "2HxxHhV9jF1UsyTqvDnmC1mgiz6zYQMihnjzthgeBDJTVAw2Nf96W9JEj1uxjE7yXFryxzVF77FuYiFCejWsqbVS",
  "key18": "4jvb6U7dkK81o49j7VGikANMdMJDY8SUcMtJkas4uJmpe6555XUjTkFQoFUvtkzrwMgCGbTV3Dbd22VXkW1Xg27C",
  "key19": "4Z3hhfuPaRnoVZzAhg2xAh5gpLkwcQ6Wzqk3FC35L5Ei4G4QgsscGKoJZWkWacRjdg132AzaAU312mtgfgcbb2et",
  "key20": "4ZbcVUtzNrdNZvYu9hqmPXMrf72XvjM58ywcaAEyfwK1AmtyC8ms54gzzwRwSeVtmxiuw8Aw7wbYA3eKcngSN2MG",
  "key21": "5GSaLXiu8Bj8V5u7CRMWu2YzrDSrycmJ9MACswdk6R8A6VmyCUuwBWFo1jjxsH58fihjBjTExzCU48F9fxbuUKcR",
  "key22": "3dgjCUigV6xCDJ8H5ekfQ2ACWFmqYpttNxGpj5tGEVnLPCcyThEHBJ2GAcC14TNd48h2vMUJ3VMVSe6PZcFHw9Gk",
  "key23": "TWYKjNShT32EJiDoaJDvSCMaZBBYTB2hJRqoK9EePPRHBZTgPkbSMfLhBbnBCSyJFayX7wxR5DcA6anbUFmeH9G",
  "key24": "2oww4NDfmQD71VnemK7iB6v7tYXcVFouEUJpnp8TxMvWFcMK8AAFA1wED3WU8UQbXHfp3MHb7vQ3Z86a7NJnMF9z",
  "key25": "2D9ujFDpEwoTPRepu97dUvGQKjE2G6w9Jth4HS2hDYY1kmKvEyhSWF5YhDWxcQz77v3rbrrobMeUpgfogMFiWpLK",
  "key26": "bZCCCUxS9wh61zmbovWw85N64kz7RJjWocseeFvV8FdWon2qsKeGAZwGcAsTbHufmPzkj9CbCS2JVrVE6u3jmXd",
  "key27": "3abiNL8Hq8BeDQRNTFXUkjBb2kL67gyc68moAPhvJtBdsYpgovB2BqonLxERm7DFgRAteGMiNg8L28Hh3UpXDJyv",
  "key28": "aYj9R5KKVDS7bv13B7hNknDbtaoH6X2dwkRsDxCtjwVekkF7n1rwNiYnUv9EgCs8DLzQ77LdkZVrwANuhgzE4Ur",
  "key29": "4ekj5tTvmQKEHvFuUac1JK9yEiamhyVfeqNb9S9DwsvJPA5m9HTWGmhiYhiDJvxoQ5VqCYxbkpkjk1j6bKDGsXAm",
  "key30": "2Dzhp2joUZjaGBMB9QCHyfZpVsJkNPvLLPaeyCeG3oUVnG6pnDEtW5XoANPruE6EDiN8KvS5GUzoCtfKZ8YxZHA6",
  "key31": "4pu85qRBQBvf2b5AUssdpcbF83hqKm2i5TuBX1ZeCzggfRTFiZGyHLFqCzKhY9G193bBTnH321bQ8KhGeQ7Bg4JM",
  "key32": "24w9w8nhfiRpRy4UXHc1ZdV9adz3iW7QjD17J64Rsf7FUowBh6UnkYDE9sFTtnmbL4qzmesX1buaeDEobgLHEgAA",
  "key33": "4CyqnmdcBLLUs4GXLq9ebtY9TnJh5hdqMQVskH6ge4DjsfW9bKNGiCmtwPgC9Co9gtYE9AFRRyetBf67XWqy8hB2",
  "key34": "4iDZ8KMf5AxiegAZAjBqQabHr2Dr1xJw6Qm1DW28AL75he9HcBLanwFer2xVWqdELmcFfXu7iEYHDtGsXtqKLAN"
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
